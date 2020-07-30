// https://www.redditstatic.com/desktop2x/RpanListingUnit.5524de4e30e598447543.js
// Retrieved at 7/30/2020, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var i = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return i(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/helpers/chooseVariant/index.ts");
			const m = Object(n.a)(e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: u.Eb
				});
				return Object(u.Bc)(t) ? void 0 : t
			}, e => {
				const t = Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: u.Fb
				});
				return Object(u.Bc)(t) ? void 0 : t
			}, (e, t) => e === u.Gb.Enabled && t === u.Gb.Enabled);
			var b = s("./src/config.ts");
			var p = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var E;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(E || (E = {}));
			const S = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(g).join("")
			})(E.SHA1, e);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (s[i[r]] = e[i[r]])
				}
				return s
			};
			const x = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				R = Object({
					SENTRY_RELEASE_VERSION: "ceaac32-production"
				}),
				C = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: b.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(R.SENTRY_RELEASE_VERSION, " ").concat(b.a.appName),
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
					envKey: h,
					localStorageSaltKey: b,
					localStorageViewerUserIdKey: g,
					playerName: E,
					playerVersion: R,
					respectDoNotTrack: _,
					saltLength: I,
					saltTimeToLive: T,
					viewerUserIdLength: w
				} = Object.assign(Object.assign({}, C), t);
				class j extends i.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(i.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
					combineExternalVideoRef(e) {
						return e ? Object(c.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							i = O(t, ["forwardedRef"]);
						return r.a.createElement(e, y({}, i, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
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
						const e = this.props.redditUserId || j.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = v(),
							i = "".concat(s).concat(e).concat(t);
						return (await S(i)).substr(0, j.VIEWER_USER_ID_LENGTH)
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
						return Object.assign(Object.assign({
							debug: j.DEBUG,
							disableCookies: j.DISABLE_COOKIES,
							respectDoNotTrack: j.RESPECT_DO_NOT_TRACK
						}, s), {
							data: Object.assign(Object.assign({
								env_key: j.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: j.PLAYER_NAME,
								player_version: j.PLAYER_VERSION
							}, t), {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = j.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = f(j.SALT_LENGTH), Object(o.b)(e, t, j.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign(Object.assign({}, this.getDashInstanceData()), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: i
						} = this.props;
						return {
							video_duration: s ? j.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? j.STREAM_TYPE_LIVE : j.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				j.displayName = x(e), j.ANONYMOUS_USER_ID = s, j.DEBUG = d, j.DISABLE_COOKIES = u, j.DURATION_LIVE = 1 / 0, j.ENV_KEY = h, j.LOCAL_STORAGE_SALT_KEY = b, j.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, j.PLAYER_NAME = E, j.PLAYER_VERSION = R, j.RESPECT_DO_NOT_TRACK = _, j.SALT_LENGTH = I, j.SALT_TIME_TO_LIVE = T, j.STREAM_TYPE_LIVE = "live", j.STREAM_TYPE_ON_DEMAND = "on-demand", j.VIEWER_USER_ID_LENGTH = w;
				const N = Object(i.forwardRef)((e, t) => r.a.createElement(j, y({}, e, {
						forwardedRef: t
					}))),
					A = Object(n.c)({
						redditUserId: p.g,
						isMuxEnabled: m
					});
				return Object(a.b)(A, null, null, {
					forwardRef: !0
				})(N)
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
				for (var s = arguments.length, i = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++) i[r - 2] = arguments[r];
				let a, n = !1;
				const o = async () => {
					i && i.length ? await e.call(window, ...i) : await e.call(window), n || (a = window.setTimeout(o, t))
				};
				return a = window.setTimeout(o, t), () => {
					n = !0, window.clearTimeout(a)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/setInterval/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
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
					await t(Object(r.c)(e));
					const i = Object(o.l)(s());
					i.lastUpdated && (this.currentStreamsRateSec = i.viewer_streams_refresh, this.currentConfigRateSec = i.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(r.c)(e));
					const i = Object(o.l)(s()),
						a = i.rpan_config_refresh_rate;
					this.currentConfigRateSec !== a && (this.currentConfigRateSec = a);
					const n = i.viewer_streams_refresh;
					this.currentStreamsRateSec !== n && (this.currentStreamsRateSec = n, this.startStreamsWork(e, t, s));
					const c = i.viewer_heartbeat_interval;
					c && this.heartbeatRateSec !== c && this.startHeartbeatWork(t, s);
					const d = i.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s) {
					window.clearTimeout(this.streamsTimeout), await t(Object(n.e)(e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s), this.getStreamsTimeout(s()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(a.P, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(r.b)());
					const s = Object(o.l)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(i.a)(() => e(Object(r.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(a.P, e, t), this.currentStatsId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.l)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(i.a)(() => {
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
							this.currentHeartbeatId && e(Object(r.d)(this.currentHeartbeatId))
						};
					this.clearSendHeartbeatInterval = Object(i.a)(() => {
						d(), this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.clearSendHeartbeatInterval = Object(i.a)(d, c)
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
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				n = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = s.n(l);
			const h = e => e.preventDefault();
			t.a = Object(n.a)(e => a.a.createElement(o.d, null, a.a.createElement(o.h, null, a.a.createElement(d.a, null, a.a.createElement(o.p, null, e.headerText || i.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(o.b, null)))), a.a.createElement(o.k, null, a.a.createElement(o.o, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(o.f, null, !e.hideCancelButton && a.a.createElement(o.a, {
				className: u.a.buttonWidth,
				onMouseDown: h,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || i.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(o.t, {
				className: u.a.buttonWidth,
				onMouseDown: h,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(a),
				o = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/env/index.ts");
			const d = 3,
				l = 5e3,
				u = 1e3;
			class h extends i.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoRef = r.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: i
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(i && this.setState(Object.assign(Object.assign({}, this.state), {
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
						onHlsCreate: i,
						onLevelLoaded: r,
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
					this.hls = c, i && i(c), this.subscribeErrorHandlers(c), c.on(n.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), c.on(n.a.Events.MANIFEST_PARSED, (i, r) => {
						e && !s && this.video && (this.video.currentTime = t, this.video.play().catch(this.onPlayError(c))), this.setState(Object.assign(Object.assign({}, this.state), {
							isInitialized: !0
						}))
					}), c.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
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
					return Date.now() - this.mediaRecoveryLastAttemptUtc > u && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "i", (function() {
				return T
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				c = s.n(o),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				u = function(e, t) {
					var s = {};
					for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (s[i[r]] = e[i[r]])
					}
					return s
				};
			const h = Object(n.c)({
				consumers: e => e.jsApi
			});
			class m extends i.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: i
							} = t,
							r = u(t, ["className", "consumers"]);
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
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(a.b)(h, {})(m),
				p = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const s = Object(p.n)(e, t),
					i = Object(f.I)(e, t);
				return {
					comment: s,
					isModerator: !(!i || !i.name) && !!e.moderatingSubreddits[i.name],
					subredditOrProfile: i
				}
			};
			var g = Object(a.b)(() => Object(n.a)(v, p.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => r.a.createElement(b, {
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
			const E = (e, t) => {
				const s = Object(p.n)(e, t),
					i = Object(f.I)(e, t);
				return {
					comment: s,
					isModerator: !(!i || !i.name) && !!e.moderatingSubreddits[i.name],
					subredditOrProfile: i
				}
			};
			var S = Object(a.b)(() => Object(n.a)(E, e => e))(e => r.a.createElement(b, {
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
					subreddit: f.R
				}))(e => r.a.createElement(b, {
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
				O = s("./src/reddit/selectors/posts.ts");
			var x = Object(a.b)(() => Object(n.c)({
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
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
			var R = Object(a.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(O.bb)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
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
				post: O.O,
				subredditOrProfile: O.bb,
				isModerator: (e, t) => {
					const s = Object(O.bb)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
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
			var _ = Object(a.b)(() => Object(n.c)({
				subreddit: f.R
			}))(e => r.a.createElement(b, {
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
			var I = Object(a.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
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
			var T = Object(a.b)(() => Object(n.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(f.R)(e, {
						subredditId: s
					}) : null
				}
			}))(e => r.a.createElement(b, {
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
				return te
			})), s.d(t, "RpanDescription", (function() {
				return se
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/higherOrderComponents/withMux/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/intersectionObserver/index.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts");
			const u = 1e4;

			function h(e, t) {
				return {
					startedAt: e,
					expectedAt: e + t,
					completedAt: Date.now()
				}
			}

			function m(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				const s = p(e, arguments.length > 2 ? arguments[2] : void 0);
				for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), a = 3; a < i; a++) r[a - 3] = arguments[a];
				return function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					const s = Date.now();
					for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) r[a - 2] = arguments[a];
					return window.setTimeout((function() {
						const i = h(s, t);
						for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
						return e(i, ...a)
					}), t, ...r)
				}(s, t, ...r)
			}

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				const s = p(e, arguments.length > 2 ? arguments[2] : void 0);
				for (var i = arguments.length, r = new Array(i > 3 ? i - 3 : 0), a = 3; a < i; a++) r[a - 3] = arguments[a];
				return function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
						s = Date.now();
					for (var i = arguments.length, r = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) r[a - 2] = arguments[a];
					return window.setInterval((function() {
						const i = h(s, t);
						s = i.completedAt;
						for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
						return e(i, ...a)
					}), t, ...r)
				}(s, t, ...r)
			}

			function p(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u;
				return function(s) {
					const i = function(e, t) {
						const {
							completedAt: s,
							expectedAt: i
						} = e, r = s > i + t;
						return Object.assign(Object.assign({}, e), {
							expired: r
						})
					}(s, t);
					for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) a[n - 1] = arguments[n];
					return e(i, ...a)
				}
			}
			var f = s("./src/reddit/actions/preferences.ts"),
				v = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				g = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				E = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				S = s("./src/reddit/constants/chat.ts"),
				y = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/overlay/index.ts"),
				x = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				R = s("./src/reddit/helpers/trackers/rpan.ts"),
				C = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				T = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				j = s("./src/telemetry/index.ts"),
				N = s("./node_modules/uuid/v4.js"),
				A = s.n(N),
				D = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				L = s("./src/reddit/components/Flatlist/constants.ts"),
				P = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				k = s("./src/reddit/components/HlsVideo/index.tsx"),
				V = s("./src/reddit/components/OverflowMenu/index.tsx"),
				H = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				U = s("./src/reddit/components/PostLeftRail/index.tsx"),
				F = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				K = s("./src/reddit/controls/InternalLink/index.tsx"),
				G = s("./src/reddit/controls/Score/index.tsx"),
				z = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				J = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = s.n(J),
				$ = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				q = s.n($);
			const {
				fbt: Z
			} = s("./node_modules/fbt/lib/FbtPublic.js"), X = Object(o.a)(k.a, {
				playerName: "RPAN DU Video Player"
			}), ee = Object(a.b)(() => Object(n.c)({
				autoplay: w.b,
				isLoggedIn: w.H,
				isOverlayOpen: I.i,
				location: (e, t) => {
					let {
						listingName: s
					} = t;
					const i = Object(T.l)(e, {
						listingName: s
					});
					let r;
					if (i) {
						const e = Object(x.c)(i),
							t = Object(E.c)(s);
						r = "".concat(e).concat(t)
					} else {
						const e = s.replace(/^r\//, "");
						r = e === v.P ? Object(x.d)() : Object(x.f)(e)
					}
					return r
				},
				stream: (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(T.l)(e, {
						listingName: s
					})
				},
				totalLiveWatchers: T.m
			}), (e, t) => ({
				onHideRpanUnit: () => e(Object(f.D)(t.listingName)),
				openOverlay: t => e(Object(O.a)(t)),
				subscribeConfig: () => e(g.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(g.a.subscribeStats(t)),
				subscribeStreams: () => e(g.a.subscribeStreams(t.listingName))
			})), te = () => r.a.createElement("h3", {
				className: q.a.title
			}, Z._("Top broadcast right now", null, {
				hk: "2hS1kb"
			})), se = () => r.a.createElement("p", {
				className: q.a.description
			}, Z._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class ie extends i.Component {
				constructor(e) {
					super(e), this.observableElement = r.a.createRef(), this.videoRef = r.a.createRef(), this.onResourceRemoved = () => {
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
							sendEvent: i
						} = this.props;
						s(), i(Object(R.f)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(R.g)(s, 1) : Object(R.g)()), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(R.g)()), this.openOverlay()
					}, this.handleIntersectionEvent = e => {
						let {
							isIntersecting: t
						} = e;
						this.setState({
							isIntersecting: t
						})
					}, this.handleVisibilityChange = e => {
						let {
							documentInFocus: t
						} = e;
						this.setState({
							isInFocus: t
						})
					}, this.endHeartbeats = () => {
						this.sendHeartbeat(), this.endTimers()
					}, this.onSendHeartbeat = e => {
						let {
							expired: t
						} = e;
						t ? (this.endTimers(), this.startHeartbeats()) : this.sendHeartbeat()
					}, this.getPlaybackStats = () => {
						const {
							heartbeatDurationOffset: e,
							id: t,
							startTime: s
						} = this.state, {
							video: i
						} = this, r = i ? i.currentTime : 0, a = i ? i.duration : NaN, n = !isNaN(a), o = n ? this.convertToMs(a - r) : void 0, c = this.getSessionDuration(), d = n ? this.convertToMs(r) : void 0, l = this.getWatchDuration(), u = l - e;
						return {
							chatState: S.f.None,
							heartbeatDurationMs: u,
							id: t,
							playerType: R.a.DU,
							playheadOffsetMs: o,
							sessionDurationMs: c,
							startTimeMs: s,
							timestampMs: d,
							volume: 0,
							watchDurationMs: l
						}
					}, this.state = {
						isInFocus: !0,
						isIntersecting: !1,
						isReady: !1,
						id: "",
						sessionDuration: 0,
						sessionTimer: "",
						watchDuration: 0,
						watchTimer: "",
						heartbeatDurationOffset: 0,
						startTime: 0
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
					return t === C.a.IS_LIVE || t === C.a.DISCONNECTED
				}
				get isPaused() {
					return !this.props.autoplay || !this.isVisible
				}
				get isVisible() {
					return this.state.isInFocus && this.state.isIntersecting && !this.props.isOverlayOpen
				}
				get video() {
					return this.videoRef.current
				}
				componentDidMount() {
					this.subscribeIntersectionObserver(), this.subscribeVisibilityChange()
				}
				componentDidUpdate(e, t) {
					const {
						autoplay: s,
						stream: i
					} = this.props, {
						isOverlayOpen: r,
						stream: a
					} = e, {
						isReady: n
					} = this.state, {
						isInFocus: o,
						isIntersecting: c,
						isReady: d
					} = t, {
						isVisible: l
					} = this, u = o && c && !r, h = !u && l, m = u && !l;
					h ? (this.subscribeConfig(), this.subscribeStreams()) : m && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const b = i && i.post.id,
						p = a && a.post.id,
						f = b !== p,
						v = !!b,
						g = !!p;
					f && this.setState({
						isReady: !1
					});
					const E = f && !v || v && m;
					f && v && l || v && h ? this.subscribeStats() : E && this.unsubscribeStats();
					const S = s && (g && f || v && m);
					s && v && (!d && n && l || h && n) ? this.startHeartbeats() : S && this.endHeartbeats()
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.endHeartbeats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === y.g.Classic ? this.renderClassicContent() : e === y.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return r.a.createElement("div", {
						className: Object(c.a)(q.a.container, {
							[Q.a.largeAndMediumPostStyles]: e === y.g.Large || e === y.g.Medium,
							[Q.a.classicPostStyles]: e === y.g.Classic,
							[Q.a.compactPostStyles]: e === y.g.Compact,
							[q.a.large]: e === y.g.Large || e === y.g.Medium,
							[q.a.classic]: e === y.g.Classic,
							[q.a.compact]: e === y.g.Compact
						}, this.props.className),
						ref: this.observableElement
					}, e !== y.g.Large && r.a.createElement(U.b, {
						className: q.a.leftRail,
						withoutComputedStyles: e === y.g.Compact
					}, r.a.createElement(re, {
						isVertical: !0
					}), e === y.g.Compact && r.a.createElement(re, {
						isVertical: !1
					})), r.a.createElement(H.a, {
						className: q.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return r.a.createElement("div", {
						className: q.a.titleAndDescriptionContainer
					}, r.a.createElement(K.a, {
						to: this.props.location
					}, r.a.createElement(te, null), e && r.a.createElement(se, null)))
				}
				renderLargeContent() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.header
					}, this.renderTitleAndDescription(), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))), r.a.createElement("div", {
						className: q.a.body
					}, r.a.createElement(K.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: q.a.previewLink,
						tabIndex: 0
					}, r.a.createElement("div", {
						className: q.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return r.a.createElement("div", {
						className: q.a.body
					}, r.a.createElement(K.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, r.a.createElement("div", {
						className: q.a.thumbnailContainer
					}, this.renderThumbnail())), r.a.createElement("div", {
						className: q.a.main
					}, this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(ae, {
						onClick: this.onHeaderClicked
					}), r.a.createElement(M.a, {
						className: q.a.flatlistSeparator
					}), r.a.createElement("div", null, r.a.createElement(ne, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return r.a.createElement("div", {
						className: q.a.body
					}, r.a.createElement("div", {
						className: q.a.main
					}, r.a.createElement(ae, {
						onClick: this.onHeaderClicked
					}), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return r.a.createElement("div", {
						className: q.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return r.a.createElement("div", {
						className: q.a.bigExpando
					}, r.a.createElement(z.a, {
						className: q.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? r.a.createElement("span", {
						className: q.a.liveStatus
					}, Z._("Live", null, {
						hk: "TwJSs"
					})) : null
				}
				renderWatcherCount() {
					if (!this.isLive) return null;
					const e = Math.max(1, this.props.totalLiveWatchers);
					return r.a.createElement("span", {
						className: q.a.watchingCount
					}, Z._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [Z._plural(e, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return r.a.createElement("div", {
						className: Object(c.a)(q.a.thumbnail, {
							[q.a.noise]: !this.state.isReady
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
						i = t.post.id,
						a = t.post.title;
					return r.a.createElement(X, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: s,
						muxVideoId: i,
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
					} = this.observableElement;
					e && d.a(e, this.handleIntersectionEvent)
				}
				unsubscribeIntersectionObserver() {
					const {
						current: e
					} = this.observableElement;
					e && d.b(e)
				}
				subscribeVisibilityChange() {
					this.visibilityChangeId = l.a.subscribe(this.handleVisibilityChange)
				}
				unsubscribeVisibilityChange() {
					this.visibilityChangeId && l.a.unsubscribe(this.visibilityChangeId)
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
				startHeartbeats() {
					const e = A()();
					this.setState({
						heartbeatDurationOffset: 0,
						id: e,
						sessionDuration: 0,
						sessionTimer: "session-duration-".concat(e),
						startTime: Date.now(),
						watchDuration: 0,
						watchTimer: "watch-duration-".concat(e)
					}, () => {
						if (!this.props.stream) return;
						const e = this.getPlaybackStats();
						this.props.sendEvent(Object(R.u)(this.props.stream, e)), this.startTimers()
					})
				}
				startTimers() {
					this.isPaused || j.c.start(this.state.watchTimer), j.c.start(this.state.sessionTimer), this.fiveSecondTimeout = m(this.onSendHeartbeat, 5e3), this.fifteenSecondTimeout = m(this.onSendHeartbeat, 15e3), this.thirtySecondTimeout = m(this.onSendHeartbeat, 3e4), this.fortyfiveSecondTimeout = m(this.onSendHeartbeat, 45e3), this.minuteInterval = b(this.onSendHeartbeat, 6e4)
				}
				endTimers() {
					j.c.has(this.state.watchTimer) && j.c.end(this.state.watchTimer), j.c.has(this.state.sessionTimer) && j.c.end(this.state.sessionTimer), clearTimeout(this.fiveSecondTimeout), clearTimeout(this.fifteenSecondTimeout), clearTimeout(this.thirtySecondTimeout), clearTimeout(this.fortyfiveSecondTimeout), clearInterval(this.minuteInterval)
				}
				sendHeartbeat() {
					if (!this.props.stream) return;
					const e = this.getPlaybackStats();
					this.props.sendEvent(Object(R.r)(this.props.stream, e)), this.setState({
						heartbeatDurationOffset: this.getWatchDuration()
					})
				}
				getSessionDuration() {
					const e = this.state.sessionTimer;
					return j.c.has(e) ? j.c.getTime(e) : 0
				}
				getWatchDuration() {
					let e = 0;
					const t = this.state.watchTimer;
					return j.c.has(t) && (e = j.c.getTime(t)), e + this.state.watchDuration
				}
				convertToMs(e) {
					return Math.round(1e3 * e)
				}
			}
			const re = e => r.a.createElement(D.a, {
					className: Object(c.a)({
						[q.a.verticalVotes]: e.isVertical,
						[q.a.horizontalVotes]: !e.isVertical
					})
				}, r.a.createElement(G.a, {
					className: q.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: _.a.notVoted
				})),
				ae = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: q.a.expandoButton,
						onClick: t
					}, r.a.createElement(z.a, {
						className: q.a.expandoIcon
					}))
				},
				ne = e => {
					let {
						onClick: t,
						isLoggedIn: s
					} = e;
					return r.a.createElement(P.a, {
						displayText: Z._("Show me less of this", null, {
							hk: "4t8AKC"
						}),
						flatlistItem: L.a.Hide,
						isLoggedIn: !!s,
						isUserOp: !1,
						onClick: t,
						noBreakpoints: !0
					}, r.a.createElement(F.b, null))
				},
				oe = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement(V.b, {
						className: q.a.overflowMenu,
						dropdownClassName: q.a.overflowDropdown,
						dropdownId: "rpan-du-overflow"
					}, r.a.createElement(B.b, {
						className: q.a.overflowItem,
						displayText: Z._("Show me less of this", null, {
							hk: "2c4uFK"
						}),
						iconWrapperClassName: q.a.overflowItemIconWrapper,
						textClassName: q.a.overflowItemText,
						onClick: t
					}, r.a.createElement(Y.a, {
						className: q.a.hideIcon
					})))
				};
			t.default = ee(Object(W.c)(ie))
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
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(n);
			const c = e => r.a.createElement("span", {
				className: Object(a.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return r.a.createElement(c, {
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
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => r.a.createElement("i", {
				className: Object(a.a)(Object(n.b)("admin"), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = s.n(n);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, s) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Gift/index.m.less"),
				o = s.n(n);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("gift"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc)), "GiftIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		}
	}
]);
//# sourceMappingURL=RpanListingUnit.5524de4e30e598447543.js.map