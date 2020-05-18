// https://www.redditstatic.com/desktop2x/RpanListingUnit.74da82391aad1c7ebe34.js
// Retrieved at 5/18/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var r = s("./node_modules/lodash/toString.js"),
				i = 0;
			e.exports = function(e) {
				var t = ++i;
				return r(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				d = () => Object(c.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				l = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const u = Object(n.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: l.yb
				});
				return Object(l.tc)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: l.zb
				});
				return Object(l.tc)(t) ? void 0 : t
			}, (e, t) => e === l.Ab.Enabled && t === l.Ab.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const p = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						r = new Uint32Array(e);
					return crypto.getRandomValues(r), Array.from(r).map(e => t.charAt(e % s)).join("")
				},
				f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				v = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var E;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(E || (E = {}));
			const S = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					r = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(r)).map(v).join("")
			})(E.SHA1, e);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (s[r[i]] = e[r[i]])
				}
				return s
			};
			const x = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				g = Object({
					SENTRY_RELEASE_VERSION: "9842950-production"
				}),
				_ = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(g.SENTRY_RELEASE_VERSION, " ").concat(h.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: c,
					disableCookies: l,
					envKey: m,
					localStorageSaltKey: h,
					localStorageViewerUserIdKey: v,
					playerName: E,
					playerVersion: g,
					respectDoNotTrack: C,
					saltLength: R,
					saltTimeToLive: j,
					viewerUserIdLength: N
				} = Object.assign({}, _, t);
				class w extends r.Component {
					constructor() {
						super(...arguments), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(r.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}
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
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings()
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							r = y(t, ["forwardedRef"]);
						return i.a.createElement(e, O({}, r, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.videoRef
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await d();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await d();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await d();
							if (this.isMonitoring) {
								const t = this.getVideoData();
								e.emit(this.video, "videochange", t)
							} else {
								const t = await this.getMuxData();
								e.monitor(this.video, t), this.isMonitoring = !0
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || w.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = f(),
							r = "".concat(s).concat(e).concat(t);
						return (await S(r)).substr(0, w.VIEWER_USER_ID_LENGTH)
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
						return Object.assign({
							debug: w.DEBUG,
							disableCookies: w.DISABLE_COOKIES,
							respectDoNotTrack: w.RESPECT_DO_NOT_TRACK
						}, s, {
							data: Object.assign({
								env_key: w.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: w.PLAYER_NAME,
								player_version: w.PLAYER_VERSION
							}, t, {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = w.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = p(w.SALT_LENGTH), Object(o.b)(e, t, w.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign({}, this.getDashInstanceData(), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: r
						} = this.props;
						return {
							video_duration: s ? w.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? w.STREAM_TYPE_LIVE : w.STREAM_TYPE_ON_DEMAND,
							video_title: r
						}
					}
				}
				w.displayName = x(e), w.ANONYMOUS_USER_ID = s, w.DEBUG = c, w.DISABLE_COOKIES = l, w.DURATION_LIVE = 1 / 0, w.ENV_KEY = m, w.LOCAL_STORAGE_SALT_KEY = h, w.LOCAL_STORAGE_VIEWER_USER_ID_KEY = v, w.PLAYER_NAME = E, w.PLAYER_VERSION = g, w.RESPECT_DO_NOT_TRACK = C, w.SALT_LENGTH = R, w.SALT_TIME_TO_LIVE = j, w.STREAM_TYPE_LIVE = "live", w.STREAM_TYPE_ON_DEMAND = "on-demand", w.VIEWER_USER_ID_LENGTH = N;
				const I = Object(r.forwardRef)((e, t) => i.a.createElement(w, O({}, e, {
						forwardedRef: t
					}))),
					A = Object(n.c)({
						redditUserId: b.g,
						isMuxEnabled: u
					});
				return Object(a.b)(A, null, null, {
					forwardRef: !0
				})(I)
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
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
					await this.initializeConfig(a.P, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(i.b)());
					const s = Object(o.m)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(i.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.P, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.m)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStatsId && e(Object(n.d)(this.currentStatsId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(a.P, e, t), !this.currentHeartbeatId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(o.m)(t());
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
				return u
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/query-string/index.js"),
				i = s.n(r),
				a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const m = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = i.a.parse(t);
					m.has(e) && (s.related = e);
					const r = i.a.stringify(s);
					return r ? "?".concat(r) : ""
				},
				h = Object(a.a)(n.L),
				b = Object(a.a)(n.x),
				p = Object(a.a)(n.M),
				f = Object(a.a)(n.y),
				v = Object(a.a)(n.K),
				E = Object(a.a)(n.J),
				S = Object(a.a)(n.s),
				O = Object(a.a)(n.t),
				y = e => t => t.post.subreddit.name !== e ? t : Object.assign({}, t, {
					post: Object.assign({}, t.post, {
						subreddit: Object.assign({}, t.post.subreddit, {
							name: "pan"
						})
					})
				}),
				x = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const a = Object(c.g)(e),
						n = s();
					if (Object(l.e)(n, a)) return;
					t(h(a));
					const d = await Object(o.d)(i(), a),
						m = Date.now();
					if (d.ok && d.body && d.body.data) {
						let e = d.body.data;
						const r = Object(l.b)(s());
						r && "pan" !== r && (e = y(r)(e)), t(b({
							model: e,
							utcTimeStamp: m
						}))
					} else t(R({
						streamId: a,
						error: d.error,
						utcTimeStamp: m
					}))
				}, g = e => async (t, s) => Object(d.b)(s()) ? t(C(e)) : t(_()), _ = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const i = t();
					if (Object(l.g)(i)) return;
					e(p());
					const a = await Object(o.f)(r()),
						n = Date.now();
					if (a.ok && a.body && a.body.data) {
						const t = a.body.data;
						e(f({
							models: t,
							utcTimeStamp: n
						}))
					} else e(j({
						error: a.error,
						utcTimeStamp: n
					}))
				}, C = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const a = s();
					if (Object(l.g)(a)) return;
					t(p());
					const n = await Object(o.e)(i(), e),
						c = Date.now();
					if (n.ok && n.body && n.body.data) {
						let r = n.body.data;
						const i = Object(l.b)(s());
						i && "pan" !== i && (r = r.map(y(i))), t(f({
							listingName: e,
							models: r,
							utcTimeStamp: c
						}))
					} else t(j({
						error: n.error,
						utcTimeStamp: c
					}))
				}, R = e => async t => {
					t(v(e))
				}, j = e => async t => {
					t(E(e))
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				n = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(n.a)(e => a.a.createElement(o.d, null, a.a.createElement(o.h, null, a.a.createElement(d.a, null, a.a.createElement(o.p, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(o.b, null)))), a.a.createElement(o.k, null, a.a.createElement(o.o, {
				className: m.a.ModalText
			}, e.modalText)), a.a.createElement(o.f, null, a.a.createElement(o.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "3DgVq6"
			})), a.a.createElement(o.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(a),
				o = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/env/index.ts");
			const d = 3,
				l = 5e3,
				m = 1e3;
			class u extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = i.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: r
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(r && this.setState(Object.assign({}, this.state, {
							isMuteForced: !0
						})));
						Object(c.a)() && console.error(t), e && this.onIrrecoverableError(e)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoPause = this.onVideoPause.bind(this), this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						onEnded: s,
						onLoadedData: r
					} = this.props;
					return i.a.createElement("video", {
						controls: e,
						tabIndex: e ? 0 : -1,
						muted: t || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: r,
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
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState(Object.assign({}, this.state, {
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
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return R
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "i", (function() {
				return N
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				c = s.n(o),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (s[r[i]] = e[r[i]])
					}
					return s
				};
			const u = Object(n.c)({
				consumers: e => e.jsApi
			});
			class h extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: r
							} = t,
							i = m(t, ["className", "consumers"]);
						l.a.publish(d.a, i, e)
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
					return e.consumers.length ? i.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && i.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(a.b)(u, {})(h),
				p = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const s = Object(p.n)(e, t),
					r = Object(f.H)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(a.b)(() => Object(n.a)(v, p.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => i.a.createElement(b, {
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
			const S = (e, t) => {
				const s = Object(p.n)(e, t),
					r = Object(f.H)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var O = Object(a.b)(() => Object(n.a)(S, e => e))(e => i.a.createElement(b, {
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
			var y = Object(a.b)(() => Object(n.c)({
					subreddit: f.Q
				}))(e => i.a.createElement(b, {
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
				x = s("./src/reddit/selectors/posts.ts");
			var g = Object(a.b)(() => Object(n.c)({
				post: x.O,
				subredditOrProfile: x.bb,
				isModerator: (e, t) => {
					const s = Object(x.bb)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => i.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var _ = Object(a.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(x.bb)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(x.bb)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => i.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var C = Object(a.b)(() => Object(n.c)({
				post: x.O,
				subredditOrProfile: x.bb,
				isModerator: (e, t) => {
					const s = Object(x.bb)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => i.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var R = Object(a.b)(() => Object(n.c)({
				subreddit: f.Q
			}))(e => i.a.createElement(b, {
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
			var j = Object(a.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(f.K)(e, {
					identifier: t
				})
			}))(e => i.a.createElement(b, {
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
			var N = Object(a.b)(() => Object(n.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(f.Q)(e, {
						subredditId: s
					}) : null
				}
			}))(e => i.a.createElement(b, {
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
				return z
			})), s.d(t, "RpanDescription", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/higherOrderComponents/withMux/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/intersectionObserver/index.ts"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				h = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				b = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				f = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/helpers/trackers/rpan.ts"),
				E = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				S = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				y = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				_ = s("./src/reddit/components/Flatlist/index.tsx"),
				C = s("./src/reddit/components/Flatlist/constants.ts"),
				R = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				j = s("./src/reddit/components/HlsVideo/index.tsx"),
				N = s("./src/reddit/components/OverflowMenu/index.tsx"),
				w = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				I = s("./src/reddit/components/PostLeftRail/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/controls/Dropdown/Row.tsx"),
				L = s("./src/reddit/controls/InternalLink/index.tsx"),
				D = s("./src/reddit/controls/Score/index.tsx"),
				k = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				P = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				V = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				H = s.n(V),
				U = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				F = s.n(U);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = Object(o.a)(j.a, {
				playerName: "RPAN DU Video Player"
			}), K = Object(a.b)(() => Object(n.c)({
				isLoggedIn: x.H,
				isOverlayOpen: O.h,
				location: (e, t) => {
					let {
						listingName: s
					} = t;
					const r = Object(y.l)(e, {
						listingName: s
					});
					let i;
					if (r) {
						const e = Object(f.c)(r),
							t = Object(h.c)(s);
						i = "".concat(e).concat(t)
					} else {
						const e = s.replace(/^r\//, "");
						i = e === m.P ? Object(f.d)() : Object(f.f)(e)
					}
					return i
				},
				stream: (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(y.l)(e, {
						listingName: s
					})
				},
				totalLiveWatchers: y.m
			}), (e, t) => ({
				onHideRpanUnit: () => e(Object(l.B)(t.listingName)),
				openOverlay: t => e(Object(p.a)(t)),
				subscribeConfig: () => e(u.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(u.a.subscribeStats(t)),
				subscribeStreams: () => e(u.a.subscribeStreams(t.listingName))
			})), z = () => i.a.createElement("h3", {
				className: F.a.title
			}, W._("Top broadcast right now", null, {
				hk: "2hS1kb"
			})), Y = () => i.a.createElement("p", {
				className: F.a.description
			}, W._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class G extends r.Component {
				constructor() {
					super(...arguments), this._unsubscribeConfig = () => {}, this._unsubscribeStats = () => {}, this._unsubscribeStreams = () => {}, this.observableElement = i.a.createRef(), this.state = {
						isReady: !1,
						isVisible: !1
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
						s(), r(Object(v.e)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(v.f)(s, 1) : Object(v.f)()), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(v.f)()), this.openOverlay()
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
					return t === E.b.IS_LIVE || t === E.b.DISCONNECTED
				}
				componentDidMount() {
					this.observableElement.current && d.a(this.observableElement.current, e => {
						let {
							isIntersecting: t
						} = e;
						return this.setState({
							isVisible: t
						})
					})
				}
				componentDidUpdate(e, t) {
					const {
						isOverlayOpen: s,
						stream: r
					} = this.props, {
						isVisible: i
					} = this.state, a = i && !s, n = t.isVisible, o = e.isOverlayOpen, c = i && !n, d = !s && o, l = !i && n || s && !o, m = (r && r.post.id) !== (e.stream && e.stream.post.id) && a;
					(c || d) && a ? this.subscribeAll() : l ? this.unsubscribeAll() : m && (this.subscribeStats(), this.setState({
						isReady: !1
					}))
				}
				componentWillUnmount() {
					this.unsubscribeAll(), this.observableElement.current && d.b(this.observableElement.current)
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === b.g.Classic ? this.renderClassicContent() : e === b.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return i.a.createElement("div", {
						className: Object(c.a)(F.a.container, {
							[H.a.largeAndMediumPostStyles]: e === b.g.Large || e === b.g.Medium,
							[H.a.classicPostStyles]: e === b.g.Classic,
							[H.a.compactPostStyles]: e === b.g.Compact,
							[F.a.large]: e === b.g.Large || e === b.g.Medium,
							[F.a.classic]: e === b.g.Classic,
							[F.a.compact]: e === b.g.Compact
						}, this.props.className),
						ref: this.observableElement
					}, e !== b.g.Large && i.a.createElement(I.b, {
						className: F.a.leftRail,
						withoutComputedStyles: e === b.g.Compact
					}, i.a.createElement(J, {
						isVertical: !0
					}), e === b.g.Compact && i.a.createElement(J, {
						isVertical: !1
					})), i.a.createElement(w.a, {
						className: F.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return i.a.createElement("div", {
						className: F.a.titleAndDescriptionContainer
					}, i.a.createElement(L.a, {
						to: this.props.location
					}, i.a.createElement(z, null), e && i.a.createElement(Y, null)))
				}
				renderLargeContent() {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: F.a.header
					}, this.renderTitleAndDescription(), i.a.createElement("div", {
						className: F.a.flatListContainer
					}, i.a.createElement($, {
						onClick: this.onHideUnitClicked
					}))), i.a.createElement("div", {
						className: F.a.body
					}, i.a.createElement(L.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: F.a.previewLink,
						tabIndex: 0
					}, i.a.createElement("div", {
						className: F.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return i.a.createElement("div", {
						className: F.a.body
					}, i.a.createElement(L.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, i.a.createElement("div", {
						className: F.a.thumbnailContainer
					}, this.renderThumbnail())), i.a.createElement("div", {
						className: F.a.main
					}, this.renderTitleAndDescription(!0), i.a.createElement("div", {
						className: F.a.flatListContainer
					}, i.a.createElement(q, {
						onClick: this.onHeaderClicked
					}), i.a.createElement(_.a, {
						className: F.a.flatlistSeparator
					}), i.a.createElement("div", null, i.a.createElement(Q, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return i.a.createElement("div", {
						className: F.a.body
					}, i.a.createElement("div", {
						className: F.a.main
					}, i.a.createElement(q, {
						onClick: this.onHeaderClicked
					}), this.renderTitleAndDescription(!0), i.a.createElement("div", {
						className: F.a.flatListContainer
					}, i.a.createElement($, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					const {
						stream: e,
						totalLiveWatchers: t
					} = this.props;
					if (!e || !this.state.isReady) return;
					const s = Math.max(1, t);
					return i.a.createElement("div", {
						className: F.a.infoContainer
					}, i.a.createElement("div", {
						className: F.a.bigExpando
					}, i.a.createElement(k.a, {
						className: F.a.bigExpandoIcon
					})), i.a.createElement("span", {
						className: F.a.watchingCount
					}, W._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [W._plural(s, "number")], {
						hk: "33zJ5F"
					})), this.isLive && i.a.createElement("span", {
						className: F.a.liveStatus
					}, W._("Live", null, {
						hk: "TwJSs"
					})))
				}
				renderThumbnail() {
					return i.a.createElement("div", {
						className: Object(c.a)(F.a.thumbnail, {
							[F.a.noise]: !this.state.isReady
						})
					}, this.renderVideo())
				}
				renderVideo() {
					const {
						isOverlayOpen: e,
						stream: t
					} = this.props;
					if (!t) return;
					const s = !this.state || !this.state.isVisible || e,
						r = 1e3 * t.broadcast_time,
						a = t.post.id,
						n = t.post.title;
					return i.a.createElement(B, {
						url: t.stream.hls_url,
						autoplay: !0,
						controls: !1,
						muted: !0,
						muxVideoDuration: r,
						muxVideoId: a,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: n,
						startTime: t.broadcast_time,
						isPaused: s,
						onEnded: this.onEnded,
						onError: this.onError,
						onLoadedData: this.onLoadedData,
						onResourceRemoved: this.onResourceRemoved
					})
				}
				openOverlay() {
					const {
						location: e,
						openOverlay: t
					} = this.props;
					t(e)
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
				subscribeAll() {
					this.subscribeConfig(), this.subscribeStreams(), this.subscribeStats()
				}
				unsubscribeAll() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats()
				}
			}
			const J = e => i.a.createElement(g.a, {
					className: Object(c.a)({
						[F.a.verticalVotes]: e.isVertical,
						[F.a.horizontalVotes]: !e.isVertical
					})
				}, i.a.createElement(D.a, {
					className: F.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: S.a.notVoted
				})),
				q = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: F.a.expandoButton,
						onClick: t
					}, i.a.createElement(k.a, {
						className: F.a.expandoIcon
					}))
				},
				Q = e => {
					let {
						onClick: t,
						isLoggedIn: s
					} = e;
					return i.a.createElement(R.a, {
						displayText: W._("Show me less of this", null, {
							hk: "4t8AKC"
						}),
						flatlistItem: C.a.Hide,
						isLoggedIn: !!s,
						isUserOp: !1,
						onClick: t,
						noBreakpoints: !0
					}, i.a.createElement(A.a, null))
				},
				$ = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement(N.b, {
						className: F.a.overflowMenu,
						dropdownClassName: F.a.overflowDropdown,
						dropdownId: "rpan-du-overflow"
					}, i.a.createElement(M.b, {
						className: F.a.overflowItem,
						displayText: W._("Show me less of this", null, {
							hk: "2c4uFK"
						}),
						iconWrapperClassName: F.a.overflowItemIconWrapper,
						textClassName: F.a.overflowItemText,
						onClick: t
					}, i.a.createElement(P.a, {
						className: F.a.hideIcon
					})))
				};
			t.default = K(Object(T.c)(G))
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
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(n);
			const c = e => i.a.createElement("span", {
				className: Object(a.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return i.a.createElement(c, {
					className: Object(a.a)(o.a.metaSeparator, t),
					isSmall: s
				})
			}
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
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => i.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("admin"), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => i.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(n.a, null, e.desc))
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
				i = s.n(r),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = s.n(n);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: "".concat(Object(a.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => i.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => i.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => i.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => i.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		}
	}
]);
//# sourceMappingURL=RpanListingUnit.74da82391aad1c7ebe34.js.map