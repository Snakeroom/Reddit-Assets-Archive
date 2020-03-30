// https://www.redditstatic.com/desktop2x/RpanListingUnit.b30ca451a79e1e173b87.js
// Retrieved at 3/30/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), a = 2; a < s; a++) r[a - 2] = arguments[a];
				let i, n = !1;
				const o = async () => {
					r && r.length ? await e.call(window, ...r) : await e.call(window), n || (i = window.setTimeout(o, t))
				};
				return i = window.setTimeout(o, t), () => {
					n = !0, window.clearTimeout(i)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = new class {
				constructor() {
					this.isInitialized = !1, this.currentStreamsRateSec = i.c, this.currentConfigRateSec = i.d, this.heartbeatDelaySec = i.f, this.heartbeatRateSec = i.g, this.statsRefreshRateSec = i.j, this.recommendedViewerSubredditsRefreshRateSec = i.h, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startStreamsWork(e, t, s)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStreamPostId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentStreamId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
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
					this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.currentStreamPostId = void 0
				}
				unsubscribeHeartbeat() {
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.currentStreamId = void 0
				}
				async initializeConfig(e, t, s) {
					if (this.isInitialized) return;
					await t(Object(a.c)(e));
					const r = Object(o.m)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(a.c)(e));
					const r = Object(o.m)(s()),
						i = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== i && (this.currentConfigRateSec = i);
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
					await this.initializeConfig(i.P, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(a.b)());
					const s = Object(o.m)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(a.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(i.P, e, t), this.currentStreamPostId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(o.m)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStreamPostId && e(Object(n.d)(this.currentStreamPostId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					if (await this.initializeConfig(i.P, e, t), !this.currentStreamId) return;
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval();
					const s = Object(o.m)(t());
					this.heartbeatDelaySec = s.viewer_initial_heartbeat_delay_seconds || this.heartbeatDelaySec;
					const n = 1e3 * this.heartbeatDelaySec;
					this.heartbeatRateSec = s.viewer_heartbeat_interval || this.heartbeatRateSec;
					const c = Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS),
						d = () => {
							this.currentStreamId && e(Object(a.d)(this.currentStreamId))
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
				return m
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/query-string/index.js"),
				a = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const m = e => {
					const t = location && location.search || "",
						s = a.a.parse(t);
					"home" === e && (s.related = e);
					const r = a.a.stringify(s);
					return r ? "?".concat(r) : ""
				},
				u = Object(i.a)(n.L),
				b = Object(i.a)(n.x),
				p = Object(i.a)(n.M),
				h = Object(i.a)(n.y),
				v = Object(i.a)(n.K),
				f = Object(i.a)(n.J),
				E = Object(i.a)(n.s),
				S = Object(i.a)(n.t),
				O = e => t => t.post.subreddit.name !== e ? t : Object.assign({}, t, {
					post: Object.assign({}, t.post, {
						subreddit: Object.assign({}, t.post.subreddit, {
							name: "pan"
						})
					})
				}),
				x = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = Object(c.g)(e),
						n = s();
					if (Object(l.e)(n, i)) return;
					t(u(i));
					const d = await Object(o.d)(a(), i),
						m = Date.now();
					if (d.ok && d.body && d.body.data) {
						let e = d.body.data;
						const r = Object(l.b)(s());
						r && "pan" !== r && (e = O(r)(e)), t(b({
							model: e,
							utcTimeStamp: m
						}))
					} else t(j({
						streamId: i,
						error: d.error,
						utcTimeStamp: m
					}))
				}, y = e => async (t, s) => Object(d.b)(s()) ? t(C(e)) : t(g()), g = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const a = t();
					if (Object(l.g)(a)) return;
					e(p());
					const i = await Object(o.f)(r()),
						n = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						e(h({
							models: t,
							utcTimeStamp: n
						}))
					} else e(N({
						error: i.error,
						utcTimeStamp: n
					}))
				}, C = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = s();
					if (Object(l.g)(i)) return;
					t(p());
					const n = await Object(o.e)(a(), e),
						c = Date.now();
					if (n.ok && n.body && n.body.data) {
						let r = n.body.data;
						const a = Object(l.b)(s());
						a && "pan" !== a && (r = r.map(O(a))), t(h({
							listingName: e,
							models: r,
							utcTimeStamp: c
						}))
					} else t(N({
						error: n.error,
						utcTimeStamp: c
					}))
				}, j = e => async t => {
					t(v(e))
				}, N = e => async t => {
					t(f(e))
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
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				n = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				o = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(i.a)(e => a.a.createElement(n.c, null, a.a.createElement(n.g, null, a.a.createElement(d.a, null, a.a.createElement(n.n, null, e.headerText || Object(c.c)("Confirm")), a.a.createElement(o.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(n.b, null)))), a.a.createElement(n.j, null, a.a.createElement(n.m, {
				className: m.a.ModalText
			}, e.modalText)), a.a.createElement(n.e, null, a.a.createElement(n.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || Object(c.c)("Cancel")), a.a.createElement(n.r, {
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
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/hls.js/dist/hls.js"),
				n = s.n(i),
				o = s("./src/lib/env/index.ts");
			const c = 3,
				d = 5e3,
				l = 1e3;
			class m extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoElement = a.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: r
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(r && this.setState(Object.assign({}, this.state, {
							isMuteForced: !0
						})));
						Object(o.a)() && console.error(t), e && this.onIrrecoverableError(e)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoPause = this.onVideoPause.bind(this), this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this)
				}
				componentDidUpdate(e, t) {
					if (e.url !== this.props.url) return void this.initialize();
					const {
						isPaused: s
					} = this.props, r = this.videoElement.current;
					r && this.state.isInitialized && s !== r.paused && (s ? r.pause() : r.play().catch(this.onPlayError(this.hls))), !t.isMuteForced && this.state.isMuteForced && this.state.isInitialized && this.videoElement.current && this.videoElement.current.play().catch(this.onPlayError(this.hls))
				}
				componentDidMount() {
					this.initialize()
				}
				componentWillUnmount() {
					const e = this.videoElement.current;
					e && !e.paused && this.onVideoPause(), this.hls && this.hls.destroy()
				}
				render() {
					const {
						controls: e,
						muted: t,
						onEnded: s,
						onLoadedData: r
					} = this.props;
					return a.a.createElement("video", {
						controls: e,
						tabIndex: e ? 0 : -1,
						muted: t || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: r,
						onPlay: this.onVideoPlay,
						onPause: this.onVideoPause,
						onTimeUpdate: this.onTimeUpdated,
						ref: this.videoElement
					})
				}
				initialize() {
					const {
						autoplay: e,
						startTime: t,
						isPaused: s,
						onLevelLoaded: r,
						onLoadingData: a,
						url: i
					} = this.props;
					if (!i || !this.videoElement.current) return;
					this.hls && this.hls.destroy();
					const o = new n.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.subscribeErrorHandlers(o), o.on(n.a.Events.MANIFEST_LOADING, () => {
						a && a()
					}), o.on(n.a.Events.MANIFEST_PARSED, (r, a) => {
						e && !s && this.videoElement.current && (this.videoElement.current.currentTime = t, this.videoElement.current.play().catch(this.onPlayError(o))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), o.on(n.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), o.loadSource(i), o.attachMedia(this.videoElement.current), this.hls = o
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
					e.destroy(), this.props.onError && this.props.onError()
				}
				handleFatalMediaError(e) {
					return Date.now() - this.mediaRecoveryLastAttemptUtc > l && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== n.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== n.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > c || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + d < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
				}
				onTimeUpdated() {
					this.videoElement.current && this.props.onTimeUpdate && this.props.onTimeUpdate(this.videoElement.current.currentTime)
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
					const t = this.videoElement.current;
					t && (t.currentTime = e)
				}
				setVolume(e) {
					const t = this.videoElement.current;
					t && t.volume !== e && (t.volume = e)
				}
			}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				c = s.n(o),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (s[r[a]] = e[r[a]])
					}
					return s
				};
			const u = Object(n.c)({
				consumers: e => e.jsApi
			});
			class b extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: r
							} = t,
							a = m(t, ["className", "consumers"]);
						l.a.publish(d.a, a, e)
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
			var p = Object(i.b)(u, {})(b),
				h = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					r = Object(v.G)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(i.b)(() => Object(n.a)(f, h.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => a.a.createElement(p, {
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
				const s = Object(h.n)(e, t),
					r = Object(v.G)(e, t);
				return {
					comment: s,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var O = Object(i.b)(() => Object(n.a)(S, e => e))(e => a.a.createElement(p, {
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
			var x = Object(i.b)(() => Object(n.c)({
					subreddit: v.P
				}))(e => a.a.createElement(p, {
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
				y = s("./src/reddit/selectors/posts.ts");
			var g = Object(i.b)(() => Object(n.c)({
				post: y.N,
				subredditOrProfile: y.Z,
				isModerator: (e, t) => {
					const s = Object(y.Z)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => a.a.createElement(p, {
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
			var C = Object(i.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(y.Z)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(y.Z)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => a.a.createElement(p, {
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
			var j = Object(i.b)(() => Object(n.c)({
				post: y.N,
				subredditOrProfile: y.Z,
				isModerator: (e, t) => {
					const s = Object(y.Z)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => a.a.createElement(p, {
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
			var N = Object(i.b)(() => Object(n.c)({
				subreddit: v.P
			}))(e => a.a.createElement(p, {
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
			var w = Object(i.b)(() => Object(n.c)({
				subredditOrProfile: (e, t) => Object(v.J)(e, {
					identifier: t
				})
			}))(e => a.a.createElement(p, {
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
			var R = Object(i.b)(() => Object(n.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(v.P)(e, {
						subredditId: s
					}) : null
				}
			}))(e => a.a.createElement(p, {
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
			}));
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "i", (function() {
				return R
			}))
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "RpanTitle", (function() {
				return B
			})), s.d(t, "RpanDescription", (function() {
				return z
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/intersectionObserver/index.ts"),
				d = s("./src/reddit/actions/preferences.ts"),
				l = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				m = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				b = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/helpers/overlay/index.ts"),
				h = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/helpers/trackers/rpan.ts"),
				f = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				S = s("./src/reddit/selectors/platform.ts"),
				O = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				g = s("./src/reddit/components/Flatlist/index.tsx"),
				C = s("./src/reddit/components/Flatlist/constants.ts"),
				j = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				N = s("./src/reddit/components/HlsVideo/index.tsx"),
				w = s("./src/reddit/components/OverflowMenu/index.tsx"),
				R = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				_ = s("./src/reddit/components/PostLeftRail/index.tsx"),
				M = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				A = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				I = s("./src/reddit/controls/InternalLink/index.tsx"),
				P = s("./src/reddit/controls/Score/index.tsx"),
				T = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				L = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				D = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				U = s.n(D),
				F = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				V = s.n(F);
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), W = Object(i.b)(() => Object(n.c)({
				isLoggedIn: x.G,
				isOverlayOpen: S.h,
				location: (e, t) => {
					let {
						listingName: s
					} = t;
					const r = Object(O.l)(e, {
						listingName: s
					});
					let a;
					if (r) {
						const e = Object(h.c)(r),
							t = Object(u.c)(s);
						a = "".concat(e).concat(t)
					} else {
						const e = s.replace(/^r\//, "");
						a = e === l.P ? Object(h.d)() : Object(h.f)(e)
					}
					return a
				},
				stream: (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(O.l)(e, {
						listingName: s
					})
				},
				totalLiveWatchers: O.m
			}), (e, t) => ({
				onHideRpanUnit: () => e(Object(d.B)(t.listingName)),
				openOverlay: t => e(Object(p.a)(t)),
				subscribeConfig: () => e(m.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(m.a.subscribeStats(t)),
				subscribeStreams: () => e(m.a.subscribeStreams(t.listingName))
			})), B = () => a.a.createElement("h3", {
				className: V.a.title
			}, H._("Top broadcast right now", null, {
				hk: "2hS1kb"
			})), z = () => a.a.createElement("p", {
				className: V.a.description
			}, H._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class G extends r.Component {
				constructor() {
					super(...arguments), this._unsubscribeConfig = () => {}, this._unsubscribeStats = () => {}, this._unsubscribeStreams = () => {}, this.observableElement = a.a.createRef(), this.state = {
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
						s(), r(Object(v.a)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(v.b)(s, 1) : Object(v.b)()), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(v.b)()), this.openOverlay()
					}
				}
				componentDidMount() {
					this.observableElement.current && c.a(this.observableElement.current, e => {
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
						isVisible: a
					} = this.state, i = a && !s, n = t.isVisible, o = e.isOverlayOpen, c = a && !n, d = !s && o, l = !a && n || s && !o, m = (r && r.post.id) !== (e.stream && e.stream.post.id) && i;
					(c || d) && i ? this.subscribeAll() : l ? this.unsubscribeAll() : m && (this.subscribeStats(), this.setState({
						isReady: !1
					}))
				}
				componentWillUnmount() {
					this.unsubscribeAll(), this.observableElement.current && c.b(this.observableElement.current)
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === b.g.Classic ? this.renderClassicContent() : e === b.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return a.a.createElement("div", {
						className: Object(o.a)(V.a.container, {
							[U.a.largeAndMediumPostStyles]: e === b.g.Large || e === b.g.Medium,
							[U.a.classicPostStyles]: e === b.g.Classic,
							[U.a.compactPostStyles]: e === b.g.Compact,
							[V.a.large]: e === b.g.Large || e === b.g.Medium,
							[V.a.classic]: e === b.g.Classic,
							[V.a.compact]: e === b.g.Compact
						}, this.props.className),
						ref: this.observableElement
					}, e !== b.g.Large && a.a.createElement(_.b, {
						className: V.a.leftRail,
						withoutComputedStyles: e === b.g.Compact
					}, a.a.createElement(J, {
						isVertical: !0
					}), e === b.g.Compact && a.a.createElement(J, {
						isVertical: !1
					})), a.a.createElement(R.a, {
						className: V.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return a.a.createElement("div", {
						className: V.a.titleAndDescriptionContainer
					}, a.a.createElement(I.a, {
						to: this.props.location
					}, a.a.createElement(B, null), e && a.a.createElement(z, null)))
				}
				renderLargeContent() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: V.a.header
					}, this.renderTitleAndDescription(), a.a.createElement("div", {
						className: V.a.flatListContainer
					}, a.a.createElement(q, {
						onClick: this.onHideUnitClicked
					}))), a.a.createElement("div", {
						className: V.a.body
					}, a.a.createElement(I.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: V.a.previewLink,
						tabIndex: 0
					}, a.a.createElement("div", {
						className: V.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return a.a.createElement("div", {
						className: V.a.body
					}, a.a.createElement(I.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, a.a.createElement("div", {
						className: V.a.thumbnailContainer
					}, this.renderThumbnail())), a.a.createElement("div", {
						className: V.a.main
					}, this.renderTitleAndDescription(!0), a.a.createElement("div", {
						className: V.a.flatListContainer
					}, a.a.createElement(K, {
						onClick: this.onHeaderClicked
					}), a.a.createElement(g.a, {
						className: V.a.flatlistSeparator
					}), a.a.createElement("div", null, a.a.createElement(Z, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return a.a.createElement("div", {
						className: V.a.body
					}, a.a.createElement("div", {
						className: V.a.main
					}, a.a.createElement(K, {
						onClick: this.onHeaderClicked
					}), this.renderTitleAndDescription(!0), a.a.createElement("div", {
						className: V.a.flatListContainer
					}, a.a.createElement(q, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					const {
						stream: e,
						totalLiveWatchers: t
					} = this.props;
					if (!e || !this.state.isReady) return;
					const s = e.stream.state === f.b.IS_LIVE,
						r = Math.max(1, t);
					return a.a.createElement("div", {
						className: V.a.infoContainer
					}, a.a.createElement("div", {
						className: V.a.bigExpando
					}, a.a.createElement(T.a, {
						className: V.a.bigExpandoIcon
					})), a.a.createElement("span", {
						className: V.a.watchingCount
					}, H._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [H._plural(r, "number")], {
						hk: "33zJ5F"
					})), s && a.a.createElement("span", {
						className: V.a.liveStatus
					}, H._("Live", null, {
						hk: "TwJSs"
					})))
				}
				renderThumbnail() {
					return a.a.createElement("div", {
						className: Object(o.a)(V.a.thumbnail, {
							[V.a.noise]: !this.state.isReady
						})
					}, this.renderVideo())
				}
				renderVideo() {
					const {
						isOverlayOpen: e,
						stream: t
					} = this.props;
					if (!t) return;
					const s = !this.state || !this.state.isVisible || e;
					return a.a.createElement(N.a, {
						url: t.stream.hls_url,
						autoplay: !0,
						controls: !1,
						muted: !0,
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
			const J = e => a.a.createElement(y.a, {
					className: Object(o.a)({
						[V.a.verticalVotes]: e.isVertical,
						[V.a.horizontalVotes]: !e.isVertical
					})
				}, a.a.createElement(P.a, {
					className: V.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: E.a.notVoted
				})),
				K = e => {
					let {
						onClick: t
					} = e;
					return a.a.createElement("button", {
						className: V.a.expandoButton,
						onClick: t
					}, a.a.createElement(T.a, {
						className: V.a.expandoIcon
					}))
				},
				Z = e => {
					let {
						onClick: t,
						isLoggedIn: s
					} = e;
					return a.a.createElement(j.a, {
						displayText: H._("Show me less of this", null, {
							hk: "4t8AKC"
						}),
						flatlistItem: C.a.Hide,
						isLoggedIn: !!s,
						isUserOp: !1,
						onClick: t,
						noBreakpoints: !0
					}, a.a.createElement(M.a, null))
				},
				q = e => {
					let {
						onClick: t
					} = e;
					return a.a.createElement(w.b, {
						className: V.a.overflowMenu,
						dropdownClassName: V.a.overflowDropdown,
						dropdownId: "rpan-du-overflow"
					}, a.a.createElement(k.b, {
						className: V.a.overflowItem,
						displayText: H._("Show me less of this", null, {
							hk: "2c4uFK"
						}),
						iconWrapperClassName: V.a.overflowItemIconWrapper,
						textClassName: V.a.overflowItemText,
						onClick: t
					}, a.a.createElement(L.a, {
						className: V.a.hideIcon
					})))
				};
			t.default = W(Object(A.c)(G))
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
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return a.a.createElement(c, {
					className: Object(i.a)(o.a.metaSeparator, t),
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
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("admin"), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("approve"), c.a.approveIcon, e.className),
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
				o = s.n(n);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(i.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(n.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(n.a, null, e.desc))
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
		}
	}
]);
//# sourceMappingURL=RpanListingUnit.b30ca451a79e1e173b87.js.map