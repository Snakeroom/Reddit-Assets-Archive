// https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.2a3eefd00164d4fc7a56.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer~PublicAccessNetwork"], {
		"./src/lib/VideoSession/VideoSessionManager.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = new WeakMap,
				n = new WeakMap,
				a = new WeakMap;
			class o {
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
					this.delayIterator = null, this.id = d()(), this.meta = t, this.onError = s, this.onHeartbeat = r, this.sessionTimer = new o, this.startedAt = 0, this.watchTimer = new o
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
					this.idleTimer = new o, this.onHeartbeat = t.onHeartbeat, this.attachVideo(e)
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
			v.IDLE_THRESHOLD = Object(i.a)(300);
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
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					r = null,
					n = {
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

				function i(e) {
					t = !1
				}

				function c() {
					document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
				}

				function d(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (a(e.activeElement) && o(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), c())
				}), !0), c(), e.addEventListener("focus", (function(e) {
					var s, r, i;
					a(e.target) && (t || (s = e.target, r = s.type, "INPUT" === (i = s.tagName) && n[r] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && o(e.target)
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
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
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
					const o = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== o && (this.currentStreamsRateSec = o, this.startStreamsWork(e, this.streamOptions, t, s));
					const i = r.viewer_heartbeat_interval;
					i && this.heartbeatRateSec !== i && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s, r) {
					window.clearTimeout(this.streamsTimeout), Object(i.d)(r()) ? await s(Object(o.f)(e, t)) : await s(Object(o.e)(e, t)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s, r), this.getStreamsTimeout(r()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(a.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(n.b)());
					const s = Object(c.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(n.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(c.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(o.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(a.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(c.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const o = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const i = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(n.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(r.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(r.a)(d, i)
					}, o)
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
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "f", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/query-string/index.js"),
				n = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const u = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = n.a.parse(t);
					u.has(e) && (s.related = e);
					const r = n.a.stringify(s);
					return r ? `?${r}` : ""
				},
				h = Object(a.a)(o.N),
				p = Object(a.a)(o.y),
				b = Object(a.a)(o.O),
				v = Object(a.a)(o.z),
				f = Object(a.a)(o.M),
				w = Object(a.a)(o.L),
				_ = Object(a.a)(o.t),
				E = Object(a.a)(o.u),
				x = e => async (t, s, {
					gqlContext: r
				}) => {
					const n = Object(c.g)(e),
						a = s();
					if (Object(d.d)(a, n)) return;
					t(h(n));
					const o = await Object(i.e)(r(), n),
						l = Date.now();
					if (o.ok && o.body && o.body.data) {
						const e = o.body.data;
						t(p({
							model: e,
							utcTimeStamp: l
						}))
					} else t(g({
						streamId: n,
						error: o.error,
						utcTimeStamp: l
					}))
				}, I = (e, t) => async (s, r) => s(C(e, t)), C = (e, t) => async (s, r, {
					gqlContext: n
				}) => {
					const a = r();
					if (Object(d.f)(a)) return;
					s(b());
					const o = await Object(i.f)(n(), e, t),
						c = Date.now();
					if (o.ok && o.body && o.body.data) {
						const t = o.body.data;
						s(v({
							listingName: e,
							models: t,
							utcTimeStamp: c
						}))
					} else s(N({
						error: o.error,
						utcTimeStamp: c
					}))
				}, k = (e, t) => async (s, r) => s(y(e, t)), y = (e, t) => async (s, r, {
					gqlContext: n
				}) => {
					const a = r();
					if (Object(d.f)(a)) return;
					s(b());
					const o = Date.now(),
						c = e.replace("r/", ""),
						u = Object(l.F)(a, c),
						m = await Object(i.b)(n(), {
							subredditId: u,
							options: t
						}),
						h = m.body;
					m.ok && h && h.data || s(N({
						error: m.error,
						utcTimeStamp: o
					}));
					const p = h.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								r = Date.now(),
								n = s.body;
							return n && n.data ? n.data : void g({
								streamId: t,
								error: s.error,
								utcTimeStamp: r
							})
						})(n(), e.node.id)),
						f = (await Promise.all(p)).filter(e => void 0 !== typeof e);
					s(v({
						listingName: e,
						models: f,
						utcTimeStamp: o
					}))
				}, g = e => async t => {
					t(f(e))
				}, N = e => async t => {
					t(w(e))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/votes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
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
				if (Object(l.J)(m))
					if (Object(c.f)(m)) await Object(o.g)(n(), e, t);
					else {
						await Object(a.d)(e);
						const s = Object(d.l)(r(), e);
						null !== s.post.voteState && Object(i.e)(s.post.voteState) === t || await Object(o.g)(n(), e, t)
					}
				else s(Object(u.h)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
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
				} = r.a, n = (e => e.replace(c.zb.Account + "_", ""))(t), {
					avatar: a,
					color: o
				} = (e => {
					const t = l.length,
						s = parseInt(e, 36),
						r = s % 20 + 1,
						n = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + r).slice(-2),
						color: l[n]
					}
				})(n), d = `${s}/avatar_default_${a}_${o}.png`;
				return i.a.createElement(h, {
					style: {
						backgroundImage: `url(${d})`,
						backgroundColor: `#${o}`
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
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/hls.js/dist/hls.js"),
				o = s.n(a),
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
						onLoadingData: a,
						url: i
					} = this.props;
					if (!i || !this.video) return;
					this.destroyHls();
					const c = new o.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.hls = c, r && r(c), this.subscribeErrorHandlers(c), c.on(o.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), c.on(o.a.Events.MANIFEST_PARSED, (r, n) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState({
							...this.state,
							isInitialized: !0
						})
					}), c.on(o.a.Events.LEVEL_LOADED, (e, t) => {
						n && n(t.details)
					}), c.loadSource(i), c.attachMedia(this.video)
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
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				f = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/OverflowMenu/index.m.less"),
				_ = s.n(w);
			const E = d.a.wrapped(m.a, "_Dropdown", _.a),
				x = Object(u.a)(E),
				I = d.a.button("MenuButton", _.a),
				C = d.a.wrapped(v.a, "MenuIcon", _.a),
				k = d.a.wrapped(h.b, "DropdownRow", _.a),
				y = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(f.b)(t)(e)
				}),
				g = Object(o.b)(y, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				N = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = g(e => {
				const t = Object(p.a)();
				return a.a.createElement(I, {
					"aria-expanded": e.dropdownIsOpen,
					"aria-haspopup": !0,
					"aria-label": r.fbt._("more options", null, {
						hk: "2EnY1x"
					}),
					className: Object(c.a)(e.className, {
						[_.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
					}),
					disabled: e.disabled,
					onClick: N(e),
					onMouseDown: e.handleMouseDown,
					id: e.dropdownId
				}, e.icon ? e.icon : t ? a.a.createElement(b.a, {
					name: "overflow_horizontal"
				}) : a.a.createElement(C, null), a.a.createElement(x, {
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId,
					isFixed: e.isFixed,
					targetPosition: e.targetPosition,
					tooltipPosition: e.tooltipPosition,
					style: e.style
				}, e.children))
			})
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const a = Object(r.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				o = ({
					children: e
				}) => {
					const [t, s] = Object(r.useState)(0), [o, i] = Object(r.useState)(!1), [c, d] = Object(r.useState)(0), l = {
						currentTime: t,
						setCurrentTime: s,
						isLive: o,
						setIsLive: i,
						totalTime: c,
						setTotalTime: d
					};
					return n.a.createElement(a.Provider, {
						value: l
					}, e)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return k
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "a", (function() {
				return T
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/opener/index.ts"),
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
				w = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				_ = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				E = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				x = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				I = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				C = s.n(I);
			const k = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: C.a.shareButton,
					onClick: e,
					"aria-label": r.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, a.a.createElement(m.a, {
					className: C.a.menuIcon
				})),
				y = ({
					isMuted: e,
					onToggle: t
				}) => a.a.createElement("button", {
					className: C.a.muteButton,
					onClick: t,
					"aria-label": r.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? a.a.createElement(w.a, {
					className: C.a.volumeIcon
				}) : a.a.createElement(x.a, {
					className: C.a.volumeIcon
				})),
				g = o.a.wrapped(u.a, "menuIcon", C.a),
				N = "rpan-overlay-menu",
				S = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => a.a.createElement(c.b, {
					className: C.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: N,
					icon: a.a.createElement(g, null),
					onClick: e
				}, a.a.createElement(d.b, {
					className: C.a.overflowItem,
					displayText: r.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: C.a.overflowItemIconWrapper,
					key: `${N}-rules`,
					onClick: () => Object(i.d)(l.S, i.c.BLANK)
				}, a.a.createElement(f.a, {
					className: C.a.overflowItemIcon
				})), a.a.createElement(d.b, {
					className: C.a.overflowItem,
					displayText: r.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: C.a.overflowItemIconWrapper,
					key: `${N}-community`,
					onClick: () => Object(i.d)(l.Q, i.c.BLANK)
				}, a.a.createElement(b.c, {
					className: C.a.overflowItemIcon
				})), a.a.createElement(d.b, {
					className: C.a.overflowItem,
					displayText: r.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: C.a.overflowItemIconWrapper,
					key: `${N}-report`,
					onClick: s
				}, a.a.createElement(v.a, {
					className: C.a.overflowItemIcon
				})), a.a.createElement(d.b, {
					className: C.a.overflowItem,
					displayText: r.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: C.a.overflowItemIconWrapper,
					key: `${N}-hide`,
					onClick: t
				}, a.a.createElement(p.a, {
					className: C.a.overflowItemIcon
				}))),
				O = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: C.a.promptButton,
					onClick: e
				}, a.a.createElement(_.a, null), a.a.createElement("span", null, r.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				j = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: C.a.promptButton,
					onClick: e
				}, a.a.createElement(E.a, null), a.a.createElement("span", null, r.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				L = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: C.a.promptButton,
					onClick: e
				}, a.a.createElement(h.a, {
					className: C.a.crosspostIcon
				}), a.a.createElement("span", null, r.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				T = ({
					onClick: e
				}) => a.a.createElement("button", {
					className: `${C.a.promptButton} ${C.a.awardButton}`,
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
				return z
			})), s.d(t, "h", (function() {
				return K
			})), s.d(t, "g", (function() {
				return Z
			})), s.d(t, "p", (function() {
				return G
			})), s.d(t, "f", (function() {
				return q
			})), s.d(t, "l", (function() {
				return Y
			})), s.d(t, "n", (function() {
				return J
			})), s.d(t, "r", (function() {
				return X
			})), s.d(t, "j", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "i", (function() {
				return ae
			})), s.d(t, "q", (function() {
				return oe
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
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
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
				w = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				_ = s("./src/reddit/helpers/getSubredditUrl/index.ts"),
				E = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				I = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				C = s("./src/reddit/icons/fonts/Share/index.tsx"),
				k = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				g = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				N = s("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				S = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				O = s("./src/reddit/icons/svgs/Link/index.tsx"),
				j = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				L = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				T = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				R = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				D = s("./src/reddit/icons/svgs/Report/index.tsx"),
				A = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				M = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				P = s("./src/reddit/models/Vote/index.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				H = s.n(W);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = ({
				children: e
			}) => n.a.createElement("div", {
				className: H.a.broadcastStatus
			}, e), K = ({
				onClick: e
			}) => n.a.createElement("button", {
				onClick: e
			}, n.a.createElement(Z, null)), Z = () => U._("{=Live}", [U._param("=Live", n.a.createElement("span", {
				className: H.a.live
			}, U._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), G = () => U._("Recorded live", null, {
				hk: "2seH5c"
			}), q = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, a] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					const e = setTimeout(() => {
						a(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? n.a.createElement(y.a, {
					className: H.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						a(!0), e()
					},
					className: H.a.joinButton
				}, n.a.createElement(L.a, {
					className: H.a.plusIcon
				}), n.a.createElement("span", {
					className: H.a.joinText
				}, U._("Join", null, {
					hk: "3n0zBz"
				})))
			}, Y = ({
				onSelect: e,
				related: t,
				subreddit: s,
				subreddits: r
			}) => {
				let a = "";
				a = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const o = r.filter(e => e.prefixedName !== a),
					i = 30 + 35 * o.length;
				return n.a.createElement(p.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: H.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${i}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, n.a.createElement("div", {
					className: H.a.dropdownLabel
				}, U._("Pick a Community", null, {
					hk: "4AfDwd"
				})), o.map(t => n.a.createElement(f.b, {
					className: H.a.dropdownRow,
					displayText: t.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${t.prefixedName}`,
					onClick: () => e(t)
				})))
			}, J = ({
				text: e
			}) => n.a.createElement("h1", {
				className: H.a.title
			}, e), X = ({
				broadcast: e,
				live: t
			}) => n.a.createElement("div", {
				className: H.a.watchersCount
			}, t ? n.a.createElement(Q, {
				count: Math.max(1, e.continuous_watchers)
			}) : n.a.createElement($, {
				count: Math.max(1, e.unique_watchers)
			})), Q = ({
				count: e
			}) => U._({
				"*": "{number of watchers} watchers",
				_1: "1 watcher"
			}, [U._plural(e, "number of watchers", Object(d.b)(e, {
				displayFull: !0
			}))], {
				hk: "3F0Nj0"
			}), $ = ({
				count: e
			}) => U._({
				"*": "{number of views} views",
				_1: "1 view"
			}, [U._plural(e, "number of views", Object(d.b)(e, {
				displayFull: !0
			}))], {
				hk: "tSTjT"
			}), ee = "rpan-overlay-share-menu", te = ({
				onClickCrosspost: e,
				onClickVideoShare: t,
				onClickShare: s
			}) => n.a.createElement(p.b, {
				className: H.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ee,
				onClick: s,
				icon: n.a.createElement(C.a, null)
			}, n.a.createElement(f.b, {
				className: H.a.menuOverflowItem,
				displayText: U._("Copy Link", null, {
					hk: "2oo038"
				}),
				iconWrapperClassName: H.a.overflowItemShareIconWrapper,
				key: `${ne}-share`,
				onClick: t
			}, n.a.createElement(O.a, {
				className: H.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: H.a.menuOverflowItem,
				displayText: U._("Crosspost", null, {
					hk: "QSd6Z"
				}),
				iconWrapperClassName: H.a.overflowItemShareIconWrapper,
				key: `${ne}-crosspost`,
				onClick: e
			}, n.a.createElement(N.a, {
				className: H.a.overflowItemIcon
			}))), se = i.a.wrapped(I.a, "menuIcon", H.a), re = e => {
				let t = 186;
				if (e) {
					t += 74 + 39
				}
				return t
			}, ne = "rpan-overlay-menu", ae = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: r,
				isCommentsLocked: a,
				hasModeratorPermissions: o,
				onEndBroadcastClick: i,
				onRpanStudioClick: d,
				subreddit: u
			}) => n.a.createElement(p.b, {
				className: H.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ne,
				icon: n.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${re(o)}px`,
					overflowY: "auto",
					bottom: "0px"
				}
			}, n.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("View rules", null, {
					hk: "haY6r"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ne}-rules`,
				onClick: () => Object(c.d)(l.S, c.c.BLANK)
			}, n.a.createElement(A.a, {
				className: H.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ne}-rpanstudio`,
				onClick: d
			}, n.a.createElement(T.b, {
				className: H.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ne}-community`,
				onClick: () => {
					Object(c.d)(Object(_.a)(u), c.c.BLANK)
				}
			}, (e => {
				const t = e && Object(w.a)({
					subreddit: e
				});
				return t ? n.a.createElement("img", {
					className: H.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					},
					src: t
				}) : n.a.createElement(g.a, {
					className: H.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					}
				})
			})(u)), n.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Report", null, {
					hk: "4oVcnd"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ne}-report`,
				onClick: s
			}, n.a.createElement(D.a, {
				className: H.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ne}-hide`,
				onClick: t
			}, n.a.createElement(S.a, {
				className: H.a.overflowItemIcon
			})), o && n.a.createElement(n.a.Fragment, null, n.a.createElement(f.b, {
				className: H.a.headerItem,
				displayText: U._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${ne}-modaction`,
				onClick: () => {}
			}), n.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: a ? U._("Unlock comments", null, {
					hk: "Btg6R"
				}) : U._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ne}-lock`,
				onClick: r
			}, a ? n.a.createElement(M.a, {
				className: H.a.overflowItemIcon
			}) : n.a.createElement(j.a, {
				className: H.a.overflowItemIcon
			})), n.a.createElement(f.b, {
				className: H.a.endBroadcastItem,
				displayText: U._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ne}-end`,
				onClick: i
			}, n.a.createElement(R.a, {
				className: H.a.endBroadcastIcon
			})))), oe = Object(a.b)(null, e => ({
				vote: (t, s) => e(Object(u.a)(t, s))
			}))(class extends r.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(P.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(P.a.downvoted);
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
					return null == e ? null : t && void 0 !== this.voteState ? e - Object(P.e)(t) + this.voteState : e
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
					const e = this.voteState === P.a.upvoted,
						t = this.voteState === P.a.downvoted;
					return n.a.createElement("div", {
						className: H.a.votePanel
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
					this.setVoteState(e, Object(P.e)(t))
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
					return e === this.voteState ? P.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: r
					} = this.props, {
						id: n
					} = t.post;
					this.setVoteState(n, e), this.props.vote(n, e), e === P.a.upvoted ? s() : e === P.a.downvoted && r()
				}
			}), ie = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(o.a)(H.a.voteButton, H.a.upVoteButton, {
					[H.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": U._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, n.a.createElement(k.b, {
				className: H.a.voteIcon
			})), ce = ({
				onClick: e,
				voted: t
			}) => n.a.createElement("button", {
				className: Object(o.a)(H.a.voteButton, H.a.downVoteButton, {
					[H.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": U._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, n.a.createElement(x.b, {
				className: H.a.voteIcon
			})), de = ({
				score: e
			}) => n.a.createElement("div", {
				className: H.a.score
			}, Object(d.b)(e)), le = ({
				children: e
			}) => n.a.createElement("div", {
				className: H.a.prompt
			}, e), ue = () => n.a.createElement(le, null, U._("Connection issues", null, {
				hk: "hIrnJ"
			})), me = () => n.a.createElement(le, null, U._("Tuning...", null, {
				hk: "3dG7Ks"
			})), he = () => n.a.createElement(le, null, U._("Broadcast paused", null, {
				hk: "jxvku"
			})), pe = ({
				onClickCrosspost: e,
				onClickReplay: t,
				onClickShare: s
			}) => n.a.createElement(le, null, n.a.createElement("div", {
				className: H.a.promptButtonSet
			}, n.a.createElement(F.g, {
				onClick: t
			}), n.a.createElement(F.h, {
				onClick: s
			}), n.a.createElement(F.f, {
				onClick: e
			}))), be = ({
				onClickAward: e
			}) => n.a.createElement(le, null, n.a.createElement("div", {
				className: H.a.awardPromptWrapper
			}, n.a.createElement("div", {
				className: H.a.awardPromptLabel
			}, U._("Award this broadcast to give it more airtime", null, {
				hk: "20jmEz"
			})), n.a.createElement(F.a, {
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
				} = e, a = we(r), o = _e(r, !a), i = a ? U._("Unfollow u/{name}", [U._param("name", r)], {
					hk: "2n0wqa"
				}) : U._("Follow u/{name}", [U._param("name", r)], {
					hk: "20X8Bw"
				});
				return n.a.createElement("button", {
					className: H.a.subscribeToProfileButton,
					onClick: () => {
						s(!a), o()
					},
					title: i
				}, n.a.createElement(Ee, {
					profile: e
				}), n.a.createElement(xe, {
					isSubscribed: a
				}))
			}, we = e => Object(a.e)(t => Object(V.gb)(t, {
				identifier: {
					name: e,
					type: v.a.PROFILE
				}
			})), _e = (e, t) => {
				const s = Object(a.d)();
				return Object(r.useCallback)(() => {
					s(Object(m.d)([{
						name: e,
						type: v.a.PROFILE
					}], t))
				}, [s, e, t])
			}, Ee = ({
				profile: e
			}) => {
				const {
					id: t,
					name: s
				} = e, r = Object(a.e)(e => Object(B.lb)(e, {
					userName: s
				})), i = ke(r), c = i && Object(E.a)(r.accountIcon);
				return n.a.createElement("div", {
					className: Object(o.a)(H.a.subscribeToProfileAvatar, {
						[H.a.snoovatarHeadshot]: c
					})
				}, r ? i ? c ? n.a.createElement(b.a, {
					headshot: r.accountIcon
				}) : n.a.createElement("img", {
					src: r.accountIcon
				}) : n.a.createElement(h.a, {
					userId: t
				}) : null)
			}, xe = ({
				isSubscribed: e
			}) => n.a.createElement("div", {
				className: Object(o.a)(H.a.subscribeToProfileStatus, {
					[H.a.isSubscribed]: e
				})
			}, e ? n.a.createElement(Ie, null) : n.a.createElement(Ce, null)), Ie = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), Ce = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), ke = e => {
				const t = Object(a.e)(B.i),
					s = Object(a.e)(B.B),
					r = Object(a.e)(B.bb);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!r && !s))))
			}
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var n;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(n || (n = {}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				h = s.n(m),
				p = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(p);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(c.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(d.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(f, v({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(a);
			t.a = r.a.wrapped(n.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(r.a)(e).banner.iconImage ? String(Object(r.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "G", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "C", (function() {
				return h
			})), s.d(t, "z", (function() {
				return p
			})), s.d(t, "D", (function() {
				return b
			})), s.d(t, "B", (function() {
				return v
			})), s.d(t, "A", (function() {
				return f
			})), s.d(t, "t", (function() {
				return w
			})), s.d(t, "u", (function() {
				return _
			})), s.d(t, "w", (function() {
				return E
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "o", (function() {
				return I
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "n", (function() {
				return k
			})), s.d(t, "y", (function() {
				return y
			})), s.d(t, "r", (function() {
				return g
			})), s.d(t, "x", (function() {
				return N
			})), s.d(t, "F", (function() {
				return S
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "k", (function() {
				return L
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "v", (function() {
				return A
			})), s.d(t, "E", (function() {
				return M
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "l", (function() {
				return V
			})), s.d(t, "m", (function() {
				return B
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "h", (function() {
				return W
			}));
			var r, n = s("./src/reddit/constants/chat.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const i = (e, t) => {
					if (t) {
						const s = o.media(e, t.post.id),
							r = o.post(e, t.post.id),
							n = o.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(a.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === a.a.LIVE ? s.type = "stream_live" : r === a.a.VOD ? s.type = "stream_vod" : r === a.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: n
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(a.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === n.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: r === a.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: o ? n.a.None : n.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(s, e),
					actionInfo: o.actionInfo(s, {
						position: t || 0
					})
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...e && {
						...i(s, e)
					}
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				v = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				f = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...i(r, t)
				}),
				w = (e, t, s, r) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...i(n, t),
					actionInfo: o.actionInfo(n, {
						referralId: r
					})
				}),
				_ = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, s),
					...d(r),
					...i(r, t)
				}),
				E = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				x = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				I = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				C = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				k = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...i(s, e)
				}),
				y = e => t => {
					const s = Object(a.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				g = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, s),
					...i(r, t)
				}),
				N = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...d(s)
				}),
				S = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t),
					...i(t, e)
				}),
				O = e => e => {
					const t = i(e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(e),
						screen: o.screen(e),
						...t
					}
				},
				j = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.subreddit(t)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...i(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...i(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...i(s, e)
				}),
				A = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...i(s, e)
				}),
				P = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...i(s, e)
				}),
				V = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				F = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				}),
				W = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(a.a)();
				return n.a.createElement("i", {
					className: `${Object(o.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(o);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(a.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(a.a)(Object(o.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
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
				o = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
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
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return I
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "k", (function() {
				return D
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "f", (function() {
				return M
			})), s.d(t, "a", (function() {
				return B
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "b", (function() {
				return W
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "g", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = s.n(d)()(e => Object(n.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.models,
				p = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				w = e => e.publicAccessNetwork.hlsStreams,
				_ = Object(r.a)(w, e => e.ended),
				E = Object(r.a)(w, e => e.removed),
				x = Object(r.a)(h, _, E, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = P(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = P(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				I = (e, t) => {
					return x(e)[Object(a.g)(t)]
				},
				C = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), x, p, i.h, (e, t, s, r, n) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						s[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...n]);
					return d.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				k = Object(r.a)((e, {
					count: t
				}) => t, x, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => C(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				y = Object(r.a)(x, k, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				g = Object(r.a)(f, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => k(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				N = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, x, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => k(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), b, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				S = Object(n.a)(Object(r.a)(N, x, (e, t) => e ? t[e] : void 0)),
				O = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, N, p, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => k(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				j = Object(r.a)(v, f, g, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(r.a)(v, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(n.a)(Object(r.a)(O, x, (e, t) => e ? t[e] : void 0)),
				R = Object(n.a)(Object(r.a)(j, x, (e, t) => e ? t[e] : void 0)),
				D = Object(n.a)(Object(r.a)(L, x, (e, t) => e ? t[e] : void 0)),
				A = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, x, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(O, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				M = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? I(e, t) : void 0, e => !e || e.chat_disabled);

			function P(e, t) {
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
			const V = Object(r.a)(O, b, (e, t) => e && t.timestamps[e] || 0);
			var B;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(B || (B = {}));
			const F = Object(r.a)(O, x, m.b, (e, t, s) => {
					if (s) return B.INTRO;
					const r = e && t[e];
					if (!r) return B.UNAVAILABLE;
					const n = r.stream.state;
					return n === o.a.IS_LIVE || n === o.a.DISCONNECTED ? B.LIVE : n === o.a.ENDED && r.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				W = Object(r.a)(T, F, m.b, c.b, c.o, (e, t, s, r, n) => s ? r : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : n : void 0),
				H = Object(r.a)(T, F, V, (e, t, s) => e ? t === B.LIVE ? e.broadcast_time : t === B.VOD && s < e.broadcast_time ? s : 0 : 0),
				U = (e, t) => {
					const s = h(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.2a3eefd00164d4fc7a56.js.map