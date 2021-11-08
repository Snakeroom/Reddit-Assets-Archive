// https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.dd39f2e8057732c11a3b.js
// Retrieved at 11/8/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer~PublicAccessNetwork"], {
		"./src/lib/VideoSession/VideoSessionManager.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = new WeakMap,
				a = new WeakMap,
				n = new WeakMap;
			class o {
				get laps() {
					return r.get(this).slice(1)
				}
				get paused() {
					return !a.has(this)
				}
				get time() {
					const e = Date.now(),
						t = n.get(this);
					return this.paused ? t : t + (e - a.get(this))
				}
				constructor() {
					this.reset()
				}
				start() {
					this.paused && a.set(this, Date.now())
				}
				pause() {
					this.paused || (n.set(this, this.time), a.delete(this))
				}
				reset() {
					r.set(this, [
						[0, 0]
					]), n.set(this, 0), a.delete(this)
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
						const a = u(r, t);
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
					a = {
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

				function n(e) {
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
					s.metaKey || s.altKey || s.ctrlKey || (n(e.activeElement) && o(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), c())
				}), !0), c(), e.addEventListener("focus", (function(e) {
					var s, r, i;
					n(e.target) && (t || (s = e.target, r = s.type, "INPUT" === (i = s.tagName) && a[r] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && o(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					n(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(r), r = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t, ...s) {
				let r, a = !1;
				const n = async () => {
					s && s.length ? await e.call(window, ...s) : await e.call(window), a || (r = window.setTimeout(n, t))
				};
				return r = window.setTimeout(n, t), () => {
					a = !0, window.clearTimeout(r)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const d = new class {
				constructor() {
					this.isInitialized = !1, this.streamOptions = {}, this.currentStreamsRateSec = n.c, this.currentConfigRateSec = n.d, this.heartbeatDelaySec = n.f, this.heartbeatRateSec = n.g, this.statsRefreshRateSec = n.j, this.recommendedViewerSubredditsRefreshRateSec = n.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = (e, t = {}) => async (s, r) => (this.streamOptions = t, this.initializeConfig(e, s, r).then(() => this.startStreamsWork(e, this.streamOptions, s, r)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStatsId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentHeartbeatId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
						n = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== n && (this.currentConfigRateSec = n);
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
					await this.initializeConfig(n.R, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(a.b)());
					const s = Object(c.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(a.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(n.R, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(c.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(o.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(n.R, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(c.l)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const o = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const i = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentHeartbeatId && e(Object(a.d)(this.currentHeartbeatId))
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
				return I
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "f", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/query-string/index.js"),
				a = s.n(r),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const u = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = a.a.parse(t);
					u.has(e) && (s.related = e);
					const r = a.a.stringify(s);
					return r ? `?${r}` : ""
				},
				h = Object(n.a)(o.N),
				p = Object(n.a)(o.y),
				b = Object(n.a)(o.O),
				v = Object(n.a)(o.z),
				f = Object(n.a)(o.M),
				w = Object(n.a)(o.L),
				_ = Object(n.a)(o.t),
				E = Object(n.a)(o.u),
				I = e => async (t, s, {
					gqlContext: r
				}) => {
					const a = Object(c.g)(e),
						n = s();
					if (Object(d.d)(n, a)) return;
					t(h(a));
					const o = await Object(i.e)(r(), a),
						l = Date.now();
					if (o.ok && o.body && o.body.data) {
						const e = o.body.data;
						t(p({
							model: e,
							utcTimeStamp: l
						}))
					} else t(S({
						streamId: a,
						error: o.error,
						utcTimeStamp: l
					}))
				}, k = (e, t) => async (s, r) => s(y(e, t)), y = (e, t) => async (s, r, {
					gqlContext: a
				}) => {
					const n = r();
					if (Object(d.f)(n)) return;
					s(b());
					const o = await Object(i.f)(a(), e, t),
						c = Date.now();
					if (o.ok && o.body && o.body.data) {
						const t = o.body.data;
						s(v({
							listingName: e,
							models: t,
							utcTimeStamp: c
						}))
					} else s(O({
						error: o.error,
						utcTimeStamp: c
					}))
				}, x = (e, t) => async (s, r) => s(N(e, t)), N = (e, t) => async (s, r, {
					gqlContext: a
				}) => {
					const n = r();
					if (Object(d.f)(n)) return;
					s(b());
					const o = Date.now(),
						c = e.replace("r/", ""),
						u = Object(l.B)(n, c),
						m = await Object(i.b)(a(), {
							subredditId: u,
							options: t
						}),
						h = m.body;
					m.ok && h && h.data || s(O({
						error: m.error,
						utcTimeStamp: o
					}));
					const p = h.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								r = Date.now(),
								a = s.body;
							return a && a.data ? a.data : void S({
								streamId: t,
								error: s.error,
								utcTimeStamp: r
							})
						})(a(), e.node.id)),
						f = (await Promise.all(p)).filter(e => void 0 !== typeof e);
					s(v({
						listingName: e,
						models: f,
						utcTimeStamp: o
					}))
				}, S = e => async t => {
					t(f(e))
				}, O = e => async t => {
					t(w(e))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/votes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				u = s("./src/reddit/actions/login.ts");
			Object(r.a)(a.D);
			const m = (e, t) => async (s, r, {
				apiContext: a
			}) => {
				const m = r();
				if (Object(l.K)(m))
					if (Object(c.f)(m)) await Object(o.g)(a(), e, t);
					else {
						await Object(n.d)(e);
						const s = Object(d.l)(r(), e);
						null !== s.post.voteState && Object(i.e)(s.post.voteState) === t || await Object(o.g)(a(), e, t)
					}
				else s(Object(u.i)())
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				a = s("./node_modules/lodash/memoize.js"),
				n = s.n(a),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				u = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				h = s("./src/reddit/selectors/experiments/econ/index.ts"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(p);
			const v = l.a.div("Userpic", b.a);
			t.a = n()(({
				defaultImage: e,
				userId: t
			}) => {
				const s = Object(c.e)(h.B),
					{
						processingAvatarImageUrl: a
					} = r.a;
				if (s) return e ? i.a.createElement("img", {
					className: b.a.NewUserpic,
					src: e,
					alt: "user icon"
				}) : i.a.createElement(m.a, {
					className: b.a.NewUserpic,
					userId: t
				});
				const n = (e => e.replace(d.Hb.Account + "_", ""))(t),
					{
						avatar: o,
						color: l
					} = (e => {
						const t = u.length,
							s = parseInt(e, 36),
							r = s % 20 + 1,
							a = Math.floor(s / 20) % t;
						return {
							avatar: ("0" + r).slice(-2),
							color: u[a]
						}
					})(n),
					p = `${a}/avatar_default_${o}_${l}.png`;
				return i.a.createElement(v, {
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
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				style: t = {},
				userId: s
			}) => {
				const {
					processingAvatarImageUrl: a
				} = r.a, i = `url(${a}/defaults/v2/avatar_default_${(e=>{let t=0;for(const s of e)t+=s.charCodeAt();return t%8})(s)}.png)`;
				return n.a.createElement("div", {
					className: Object(o.a)(c.a.avatar, e),
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
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./node_modules/hls.js/dist/hls.js"),
				o = s.n(n),
				i = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/env/index.ts");
			const d = 3,
				l = 5e3,
				u = 1e3;
			class m extends r.Component {
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
						onLevelLoaded: a,
						onLoadingData: n,
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
						n && n()
					}), c.on(o.a.Events.MANIFEST_PARSED, (r, a) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState({
							...this.state,
							isInitialized: !0
						})
					}), c.on(o.a.Events.LEVEL_LOADED, (e, t) => {
						a && a(t.details)
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
				return I
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(v);
			const w = d.a.wrapped(m.a, "_Dropdown", f.a),
				_ = Object(u.a)(w),
				E = d.a.button("MenuButton", f.a),
				I = d.a.wrapped(h.b, "DropdownRow", f.a),
				k = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				y = Object(o.b)(k, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(l.h)({
						tooltipId: t
					}))
				})),
				x = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = y(e => n.a.createElement(E, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: x(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(p.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), n.a.createElement(_, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			const n = Object(r.createContext)({
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
					return a.a.createElement(n.Provider, {
						value: l
					}, e)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return x
			})), s.d(t, "c", (function() {
				return N
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return L
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				n = s.n(a),
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
				I = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				k = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				y = s.n(k);
			const x = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: y.a.shareButton,
					onClick: e,
					"aria-label": r.fbt._("share video", null, {
						hk: "2e71ai"
					}),
					value: "share"
				}, n.a.createElement(m.a, {
					className: y.a.menuIcon
				})),
				N = ({
					isMuted: e,
					onToggle: t
				}) => n.a.createElement("button", {
					className: y.a.muteButton,
					onClick: t,
					"aria-label": r.fbt._("mute video", null, {
						hk: "Enspe"
					}),
					value: "mute"
				}, e ? n.a.createElement(w.a, {
					className: y.a.volumeIcon
				}) : n.a.createElement(I.a, {
					className: y.a.volumeIcon
				})),
				S = o.a.wrapped(u.a, "menuIcon", y.a),
				O = "rpan-overlay-menu",
				g = ({
					onClick: e,
					onHideClick: t,
					onReportClick: s
				}) => n.a.createElement(c.b, {
					className: y.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: O,
					icon: n.a.createElement(S, null),
					onClick: e
				}, n.a.createElement(d.b, {
					className: y.a.overflowItem,
					displayText: r.fbt._("View rules", null, {
						hk: "4lTvzy"
					}),
					iconWrapperClassName: y.a.overflowItemIconWrapper,
					key: `${O}-rules`,
					onClick: () => Object(i.e)(l.S, i.d.BLANK)
				}, n.a.createElement(f.a, {
					className: y.a.overflowItemIcon
				})), n.a.createElement(d.b, {
					className: y.a.overflowItem,
					displayText: r.fbt._("Visit RPAN community", null, {
						hk: "3KZliI"
					}),
					iconWrapperClassName: y.a.overflowItemIconWrapper,
					key: `${O}-community`,
					onClick: () => Object(i.e)(l.Q, i.d.BLANK)
				}, n.a.createElement(b.c, {
					className: y.a.overflowItemIcon
				})), n.a.createElement(d.b, {
					className: y.a.overflowItem,
					displayText: r.fbt._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: y.a.overflowItemIconWrapper,
					key: `${O}-report`,
					onClick: s
				}, n.a.createElement(v.a, {
					className: y.a.overflowItemIcon
				})), n.a.createElement(d.b, {
					className: y.a.overflowItem,
					displayText: r.fbt._("Hide", null, {
						hk: "1qXTIB"
					}),
					iconWrapperClassName: y.a.overflowItemIconWrapper,
					key: `${O}-hide`,
					onClick: t
				}, n.a.createElement(p.a, {
					className: y.a.overflowItemIcon
				}))),
				C = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: y.a.promptButton,
					onClick: e
				}, n.a.createElement(_.a, null), n.a.createElement("span", null, r.fbt._("Replay Video", null, {
					hk: "1iD2Wj"
				}))),
				j = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: y.a.promptButton,
					onClick: e
				}, n.a.createElement(E.a, null), n.a.createElement("span", null, r.fbt._("Share Video", null, {
					hk: "FYgQy"
				}))),
				T = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: y.a.promptButton,
					onClick: e
				}, n.a.createElement(h.a, {
					className: y.a.crosspostIcon
				}), n.a.createElement("span", null, r.fbt._("Crosspost", null, {
					hk: "gORNr"
				}))),
				L = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: `${y.a.promptButton} ${y.a.awardButton}`,
					onClick: e
				}, n.a.createElement("span", null, r.fbt._("Award Now", null, {
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
				return q
			})), s.d(t, "f", (function() {
				return Z
			})), s.d(t, "l", (function() {
				return G
			})), s.d(t, "n", (function() {
				return J
			})), s.d(t, "r", (function() {
				return Q
			})), s.d(t, "j", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "i", (function() {
				return ne
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
				a = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
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
				I = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				y = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				x = s("./src/reddit/icons/fonts/Share/index.tsx"),
				N = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				S = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				O = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				g = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				C = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				j = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				T = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				L = s("./src/reddit/icons/svgs/Report/index.tsx"),
				D = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				R = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				A = s("./src/reddit/icons/svgs/Video/index.tsx"),
				P = s("./src/reddit/models/Vote/index.ts"),
				M = s("./src/reddit/selectors/experiments/shareToChatButton.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				W = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				H = s.n(W);
			const {
				fbt: U
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				children: e
			}) => a.a.createElement("div", {
				className: H.a.broadcastStatus
			}, e), z = ({
				onClick: e
			}) => a.a.createElement("button", {
				onClick: e
			}, a.a.createElement(Y, null)), Y = () => U._("{=Live}", [U._param("=Live", a.a.createElement("span", {
				className: H.a.live
			}, U._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), q = () => U._("Recorded live", null, {
				hk: "2seH5c"
			}), Z = ({
				onSubscribe: e,
				isSubscribed: t
			}) => {
				const [s, n] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					const e = setTimeout(() => {
						n(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [s]), t ? s ? a.a.createElement(S.a, {
					className: H.a.checkmarkIcon
				}) : null : a.a.createElement("button", {
					onClick: () => {
						n(!0), e()
					},
					className: H.a.joinButton
				}, a.a.createElement(j.a, {
					className: H.a.plusIcon
				}), a.a.createElement("span", {
					className: H.a.joinText
				}, U._("Join", null, {
					hk: "3n0zBz"
				})))
			}, G = ({
				onSelect: e,
				related: t,
				subreddit: s,
				subreddits: r
			}) => {
				let n = "";
				n = "home" === t ? "All" : "r/popular" === t ? "r/popular" : s || "All";
				const o = r.filter(e => e.prefixedName !== n),
					i = 30 + 35 * o.length;
				return a.a.createElement(p.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: a.a.createElement("span", {
						className: H.a.subreddit
					}, s || "RPAN"),
					style: {
						maxHeight: `${i}px`,
						overflowY: "auto",
						bottom: "0px"
					},
					isFixed: !0
				}, a.a.createElement("div", {
					className: H.a.dropdownLabel
				}, U._("Pick a Community", null, {
					hk: "4AfDwd"
				})), o.map(t => a.a.createElement(f.b, {
					className: H.a.dropdownRow,
					displayText: t.prefixedName,
					key: `rpan-recommended-viewer-subreddits-dropdown-${t.prefixedName}`,
					onClick: () => e(t)
				})))
			}, J = ({
				text: e
			}) => a.a.createElement("h1", {
				className: H.a.title
			}, e), Q = ({
				broadcast: e,
				live: t
			}) => a.a.createElement("div", {
				className: H.a.watchersCount
			}, t ? a.a.createElement($, {
				count: Math.max(1, e.continuous_watchers)
			}) : a.a.createElement(X, {
				count: Math.max(1, e.unique_watchers)
			})), $ = ({
				count: e
			}) => U._({
				"*": "{number of watchers} watchers",
				_1: "1 watcher"
			}, [U._plural(e, "number of watchers", Object(d.b)(e, {
				displayFull: !0
			}))], {
				hk: "3F0Nj0"
			}), X = ({
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
				onClickShare: s,
				onClickShareToChat: r
			}) => {
				const o = Object(n.e)(M.a);
				return a.a.createElement(p.b, {
					className: H.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: ee,
					onClick: s,
					icon: a.a.createElement(x.a, null)
				}, a.a.createElement(f.b, {
					className: H.a.menuOverflowItem,
					displayText: U._("Copy Link", null, {
						hk: "2oo038"
					}),
					iconWrapperClassName: H.a.overflowItemShareIconWrapper,
					key: `${ae}-share`,
					onClick: t
				}, a.a.createElement(I.a, {
					name: "link_post",
					className: H.a.linkIcon
				})), a.a.createElement(f.b, {
					className: H.a.menuOverflowItem,
					displayText: U._("Crosspost", null, {
						hk: "QSd6Z"
					}),
					iconWrapperClassName: H.a.overflowItemShareIconWrapper,
					key: `${ae}-crosspost`,
					onClick: e
				}, a.a.createElement(I.a, {
					name: "crosspost",
					className: H.a.overflowItemIcon
				})), o && a.a.createElement(f.b, {
					className: H.a.menuOverflowItem,
					displayText: U._("Share to Chat", null, {
						hk: "2uVgxZ"
					}),
					iconWrapperClassName: H.a.overflowItemShareIconWrapper,
					key: `${ae}-sharetochat`,
					onClick: r
				}, a.a.createElement(I.a, {
					name: "chat",
					className: H.a.overflowItemIcon
				})))
			}, se = i.a.wrapped(y.a, "menuIcon", H.a), re = e => {
				let t = 186;
				if (e) {
					t += 74 + 40
				}
				return t
			}, ae = "rpan-overlay-menu", ne = ({
				onClick: e,
				onHideClick: t,
				onReportClick: s,
				onToggleLockClick: r,
				isCommentsLocked: n,
				hasModeratorPermissions: o,
				onEndBroadcastClick: i,
				onRpanStudioClick: d,
				subreddit: u
			}) => a.a.createElement(p.b, {
				className: H.a.menuButton,
				defaultButtonOutline: !0,
				dropdownId: ae,
				icon: a.a.createElement(se, null),
				onClick: e,
				style: {
					maxHeight: `${re(o)}px`,
					overflowY: "auto",
					bottom: "0px"
				}
			}, a.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("View rules", null, {
					hk: "haY6r"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ae}-rules`,
				onClick: () => Object(c.e)(l.S, c.d.BLANK)
			}, a.a.createElement(D.a, {
				className: H.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Stream from desktop", null, {
					hk: "4dOdik"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ae}-rpanstudio`,
				onClick: d
			}, a.a.createElement(A.a, {
				className: H.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Visit community", null, {
					hk: "2KViLk"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ae}-community`,
				onClick: () => {
					Object(c.e)(Object(_.a)(u), c.d.BLANK)
				}
			}, (e => {
				const t = e && Object(w.a)({
					subreddit: e
				});
				return t ? a.a.createElement("img", {
					className: H.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					},
					src: t
				}) : a.a.createElement(O.a, {
					className: H.a.overflowItemIcon,
					style: {
						borderRadius: "16px",
						height: "16px",
						width: "16px"
					}
				})
			})(u)), a.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Report", null, {
					hk: "4oVcnd"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ae}-report`,
				onClick: s
			}, a.a.createElement(L.a, {
				className: H.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: U._("Hide", null, {
					hk: "15vs9C"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ae}-hide`,
				onClick: t
			}, a.a.createElement(g.a, {
				className: H.a.overflowItemIcon
			})), o && a.a.createElement(a.a.Fragment, null, a.a.createElement(f.b, {
				className: H.a.headerItem,
				displayText: U._("Mod Actions", null, {
					hk: "19zCiw"
				}),
				key: `${ae}-modaction`,
				onClick: () => {}
			}), a.a.createElement(f.b, {
				className: H.a.overflowItem,
				displayText: n ? U._("Unlock comments", null, {
					hk: "Btg6R"
				}) : U._("Lock comments", null, {
					hk: "3Ew6q9"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ae}-lock`,
				onClick: r
			}, n ? a.a.createElement(R.a, {
				className: H.a.overflowItemIcon
			}) : a.a.createElement(C.a, {
				className: H.a.overflowItemIcon
			})), a.a.createElement(f.b, {
				className: H.a.endBroadcastItem,
				displayText: U._("Remove broadcast", null, {
					hk: "3GaDuI"
				}),
				iconWrapperClassName: H.a.overflowItemIconWrapper,
				key: `${ae}-end`,
				onClick: i
			}, a.a.createElement(T.a, {
				className: H.a.endBroadcastIcon
			})))), oe = Object(n.b)(null, e => ({
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
					return a.a.createElement("div", {
						className: H.a.votePanel
					}, a.a.createElement(ie, {
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
						id: a
					} = t.post;
					this.setVoteState(a, e), this.props.vote(a, e), e === P.a.upvoted ? s() : e === P.a.downvoted && r()
				}
			}), ie = ({
				onClick: e,
				voted: t
			}) => a.a.createElement("button", {
				className: Object(o.a)(H.a.voteButton, H.a.upVoteButton, {
					[H.a.voted]: t
				}),
				onClick: e,
				value: "upvote",
				"aria-label": U._("Upvote", null, {
					hk: "Ufd6r"
				})
			}, a.a.createElement(N.a, {
				className: H.a.voteIcon
			})), ce = ({
				onClick: e,
				voted: t
			}) => a.a.createElement("button", {
				className: Object(o.a)(H.a.voteButton, H.a.downVoteButton, {
					[H.a.voted]: t
				}),
				onClick: e,
				value: "downvote",
				"aria-label": U._("Downvote", null, {
					hk: "ZDRA3"
				})
			}, a.a.createElement(k.a, {
				className: H.a.voteIcon
			})), de = ({
				score: e
			}) => a.a.createElement("div", {
				className: H.a.score
			}, Object(d.b)(e)), le = ({
				children: e
			}) => a.a.createElement("div", {
				className: H.a.prompt
			}, e), ue = () => a.a.createElement(le, null, U._("Connection issues", null, {
				hk: "hIrnJ"
			})), me = () => a.a.createElement(le, null, U._("Tuning...", null, {
				hk: "3dG7Ks"
			})), he = () => a.a.createElement(le, null, U._("Broadcast paused", null, {
				hk: "jxvku"
			})), pe = ({
				onClickCrosspost: e,
				onClickReplay: t,
				onClickShare: s
			}) => a.a.createElement(le, null, a.a.createElement("div", {
				className: H.a.promptButtonSet
			}, a.a.createElement(F.g, {
				onClick: t
			}), a.a.createElement(F.h, {
				onClick: s
			}), a.a.createElement(F.f, {
				onClick: e
			}))), be = ({
				onClickAward: e
			}) => a.a.createElement(le, null, a.a.createElement("div", {
				className: H.a.awardPromptWrapper
			}, a.a.createElement("div", {
				className: H.a.awardPromptLabel
			}, U._("Award this broadcast to give it more airtime", null, {
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
				} = e, n = we(r), o = _e(r), i = Ee(r, !o), c = o ? U._("Unfollow u/{name}", [U._param("name", r)], {
					hk: "2n0wqa"
				}) : U._("Follow u/{name}", [U._param("name", r)], {
					hk: "20X8Bw"
				}), d = a.a.createElement("button", {
					className: H.a.subscribeToProfileButton,
					onClick: () => {
						s(!o), i()
					},
					title: c
				}, a.a.createElement(Ie, {
					profile: e
				}), a.a.createElement(ke, {
					isSubscribed: o
				}));
				return n && n.enableFollowers ? d : null
			}, we = e => Object(n.e)(t => Object(B.nb)(t, {
				userName: e
			})), _e = e => Object(n.e)(t => Object(V.cb)(t, {
				identifier: {
					name: e,
					type: v.a.PROFILE
				}
			})), Ee = (e, t) => {
				const s = Object(n.d)();
				return Object(r.useCallback)(() => {
					s(Object(m.d)([{
						name: e,
						type: v.a.PROFILE
					}], t))
				}, [s, e, t])
			}, Ie = ({
				profile: e
			}) => {
				const {
					id: t,
					name: s
				} = e, r = we(s), n = Ne(r), i = n && Object(E.a)(r.accountIcon);
				return a.a.createElement("div", {
					className: Object(o.a)(H.a.subscribeToProfileAvatar, {
						[H.a.snoovatarHeadshot]: i
					})
				}, r ? n ? i ? a.a.createElement(b.a, {
					headshot: r.accountIcon
				}) : a.a.createElement("img", {
					src: r.accountIcon
				}) : a.a.createElement(h.a, {
					userId: t
				}) : null)
			}, ke = ({
				isSubscribed: e
			}) => a.a.createElement("div", {
				className: Object(o.a)(H.a.subscribeToProfileStatus, {
					[H.a.isSubscribed]: e
				})
			}, e ? a.a.createElement(ye, null) : a.a.createElement(xe, null)), ye = () => a.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), xe = () => a.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), Ne = e => {
				const t = Object(n.e)(B.k),
					s = Object(n.e)(B.C),
					r = Object(n.e)(B.eb);
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
			var a;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(a || (a = {}))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
					super(...arguments), this.handleMouseMove = a()(() => {
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
						to: e.href,
						disabled: e.disabled
					}), e.children && o.a.createElement("span", {
						className: s
					}, e.children), o.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, v({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
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
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
				n = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = s.n(n);
			t.a = r.a.wrapped(a.a, "unstyledInternalLink", o.a)
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
			})), s.d(t, "H", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "D", (function() {
				return h
			})), s.d(t, "A", (function() {
				return p
			})), s.d(t, "E", (function() {
				return b
			})), s.d(t, "C", (function() {
				return v
			})), s.d(t, "B", (function() {
				return f
			})), s.d(t, "u", (function() {
				return w
			})), s.d(t, "v", (function() {
				return _
			})), s.d(t, "x", (function() {
				return E
			})), s.d(t, "r", (function() {
				return I
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "o", (function() {
				return x
			})), s.d(t, "z", (function() {
				return N
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "y", (function() {
				return O
			})), s.d(t, "G", (function() {
				return g
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "n", (function() {
				return T
			})), s.d(t, "k", (function() {
				return L
			})), s.d(t, "b", (function() {
				return D
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "e", (function() {
				return A
			})), s.d(t, "w", (function() {
				return P
			})), s.d(t, "F", (function() {
				return M
			})), s.d(t, "f", (function() {
				return V
			})), s.d(t, "l", (function() {
				return B
			})), s.d(t, "m", (function() {
				return F
			})), s.d(t, "g", (function() {
				return W
			})), s.d(t, "h", (function() {
				return H
			}));
			var r, a = s("./src/reddit/constants/chat.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const i = (e, t) => {
					if (t) {
						const s = o.media(e, t.post.id),
							r = o.post(e, t.post.id),
							a = o.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const r = Object(n.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === n.a.LIVE ? s.type = "stream_live" : r === n.a.VOD ? s.type = "stream_vod" : r === n.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r,
							media: s,
							subreddit: a
						}
					}
					return {
						subreddit: o.subreddit(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const r = Object(n.j)(e, {
							streamIdFromPath: t.post.id
						}),
						o = t.chat_disabled || s.chatState === a.a.None;
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
						chatState: o ? a.a.None : a.a.Compact,
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
				w = (e, t, s, r) => a => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(a, t, s),
					...d(a),
					...i(a, t),
					actionInfo: o.actionInfo(a, {
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
				I = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				k = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				y = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...i(s, e)
				}),
				x = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...i(s, e)
				}),
				N = e => t => {
					const s = Object(n.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				S = (e, t, s) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, s),
					...i(r, t)
				}),
				O = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...d(s)
				}),
				g = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: o.profile(t),
					screen: o.screen(t),
					...i(t, e)
				}),
				C = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: o.profile(t),
						screen: o.screen(t),
						...s
					}
				},
				j = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				T = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: o.subreddit(t)
				}),
				D = (e, t) => s => ({
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
				A = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...i(s, e)
				}),
				P = (e, t) => s => ({
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
				V = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...i(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...i(s, e),
					...d(s)
				}),
				W = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				}),
				H = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(s, t),
					...d(s)
				})
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(n.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => a.a.createElement("i", {
				className: `${Object(n.b)("menu",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => a.a.createElement("i", {
				className: Object(n.a)(Object(o.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
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
				return k
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "k", (function() {
				return R
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "f", (function() {
				return P
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
				a = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = s.n(d)()(e => Object(a.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.models,
				p = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				w = e => e.publicAccessNetwork.hlsStreams,
				_ = Object(r.a)(w, e => e.ended),
				E = Object(r.a)(w, e => e.removed),
				I = Object(r.a)(h, _, E, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							a = M(r, o.a.ENDED) ? o.a.ENDED : r,
							n = s.stream.vod_accessible;
						return a === r && !0 === n ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: a,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							a = M(r, o.a.ENDED) ? o.a.ENDED : r,
							n = s.stream.vod_accessible;
						return a === r && !1 === n ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: a,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				k = (e, t) => {
					return I(e)[Object(n.g)(t)]
				},
				y = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), I, p, i.h, (e, t, s, r, a) => {
					const i = [];
					if (e) {
						const t = Object(n.g)(e);
						s[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...a]);
					return d.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				x = Object(r.a)((e, {
					count: t
				}) => t, I, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => y(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				N = Object(r.a)(I, x, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				S = Object(r.a)(f, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => x(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				O = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, I, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => x(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), b, (e, t, s, r) => {
					if (!s.length) return;
					const a = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						n = a.find(e => e.stream.state === o.a.IS_LIVE);
					if (n) return n.post.id;
					const i = a.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				g = Object(a.a)(Object(r.a)(O, I, (e, t) => e ? t[e] : void 0)),
				C = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(n.g)(t) : void 0, O, p, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => x(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t, s, r, a) => !e || s.includes(e) || r.includes(e) ? t || a[0] : e),
				j = Object(r.a)(v, f, S, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				T = Object(r.a)(v, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				L = Object(a.a)(Object(r.a)(C, I, (e, t) => e ? t[e] : void 0)),
				D = Object(a.a)(Object(r.a)(j, I, (e, t) => e ? t[e] : void 0)),
				R = Object(a.a)(Object(r.a)(T, I, (e, t) => e ? t[e] : void 0)),
				A = (Object(a.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, I, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(C, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				P = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? k(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function M(e, t) {
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
			const V = Object(r.a)(C, b, (e, t) => e && t.timestamps[e] || 0);
			var B;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(B || (B = {}));
			const F = Object(r.a)(C, I, m.b, (e, t, s) => {
					if (s) return B.INTRO;
					const r = e && t[e];
					if (!r) return B.UNAVAILABLE;
					const a = r.stream.state;
					return a === o.a.IS_LIVE || a === o.a.DISCONNECTED ? B.LIVE : a === o.a.ENDED && r.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				W = Object(r.a)(L, F, m.b, c.b, c.o, (e, t, s, r, a) => s ? r : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : a : void 0),
				H = Object(r.a)(L, F, V, (e, t, s) => e ? t === B.LIVE ? e.broadcast_time : t === B.VOD && s < e.broadcast_time ? s : 0 : 0),
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
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, n.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + a.a > Date.now()
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/user.ts");
			const i = Object(r.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: o.K,
				experimentName: a.Db
			}), e => e === a.Kc)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer~PublicAccessNetwork.dd39f2e8057732c11a3b.js.map