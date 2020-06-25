// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.6f8be53e8540071ba60d.js
// Retrieved at 6/25/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer"], {
		"./node_modules/lodash/isUndefined.js": function(e, t) {
			e.exports = function(e) {
				return void 0 === e
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less": function(e, t, s) {
			e.exports = {
				LiveVideoPlayer: "_1CslYvEjQCqKJNXXyr7VBi",
				liveVideoPlayer: "_1CslYvEjQCqKJNXXyr7VBi",
				focusVisible: "ouJNsMkjLzVYHYqeJXKYk",
				isSleeping: "_2g2rE_Lz5iyVMt-BJDcpu6",
				ScrubberPanel: "_2ypwxpRk8TA72yU2q8wprA",
				scrubberPanel: "_2ypwxpRk8TA72yU2q8wprA",
				clip9x16: "_18hF1W8oceEelO19T27hAG",
				clip9X16: "_18hF1W8oceEelO19T27hAG",
				Overlay: "QeWQ4jUouItrgSmIpGLMR",
				overlay: "QeWQ4jUouItrgSmIpGLMR",
				LiveIndicator: "KJyaW7XHtFbqn-RpZvMrj",
				liveIndicator: "KJyaW7XHtFbqn-RpZvMrj",
				controls: "NChIQgZKTHyJPUVfOp7oC"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "LiveVideoPlayer", (function() {
				return x
			})), s.d(t, "Overlay", (function() {
				return _
			})), s.d(t, "LiveIndicator", (function() {
				return j
			}));
			var i = s("./node_modules/lodash/isUndefined.js"),
				a = s.n(i),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				h = s("./node_modules/reselect/es/index.js"),
				d = s("./src/telemetry/index.ts"),
				l = s("./node_modules/uuid/v4.js"),
				u = s.n(l),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/focusVisible/index.js"),
				b = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				S = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				v = s("./src/reddit/components/HlsVideo/index.tsx"),
				T = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				g = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				P = s("./src/reddit/constants/chat.ts"),
				M = s("./src/reddit/constants/keycodes.ts"),
				f = s("./src/reddit/helpers/trackers/rpan.ts"),
				w = s("./src/reddit/selectors/platform.ts"),
				V = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				C = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				k = s.n(L);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(c.a)(v.a, {
				playerName: "RPAN Listing Player"
			}), H = 3e3, I = Object(h.c)({
				autoplay: D.b,
				isOverlayOpen: w.i,
				unavailableVideoUrl: V.o,
				currentStream: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(C.k)(e, s)
				}
			}), R = Object(o.b)(I, (e, t) => ({
				onHeartbeatSubscribe: t => e(b.a.subscribeHeartbeat(t)),
				onStreamByIdRequested: t => e(Object(S.d)(t))
			}));
			class x extends r.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.onSendHeartbeat = () => {
						this.props.currentStream && this.props.sendEvent(Object(f.r)(this.props.currentStream, this.getPlaybackStats())), this.setState({
							heartbeatDurationOffset: this.getWatchDuration()
						})
					}, this.getSessionDurationTimer = e => "session-duration-".concat(e), this.getWatchDurationTimer = e => "watch-duration-".concat(e), this.handleHlsRefChange = e => {
						this.hlsVideo = e
					}, this.handleClick = e => {
						a()(this.state.settingChange) || (e.stopPropagation(), this.setState({
							settingChange: void 0
						}))
					}, this.handleEnded = () => {
						this.props.currentStream && this.props.sendEvent(Object(f.r)(this.props.currentStream, this.getPlaybackStats())), this.endTimers(), this.setState({
							watchDuration: 0,
							sessionDuration: 0,
							heartbeatDurationOffset: 0,
							isEnded: !0,
							hasVideoPlayed: !1
						})
					}, this.handleError = () => {
						this.setState({
							hasError: !0
						})
					}, this.onKeyPress = e => {
						e.key === M.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
					}, this.handleLevelLoaded = e => {
						const {
							live: t,
							totalduration: s
						} = e;
						this.props.onStreamByIdRequested(this.props.postId), t !== this.state.live && this.setState({
							live: t
						}), s !== this.state.duration && this.setState({
							duration: s
						})
					}, this.handleMouseDownControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						e.target instanceof Element && (e.stopPropagation(), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: T.a.SeekBar
						}), t.handleMouseDown(e)), s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: T.a.Volume
						}), s.handleMouseDown(e)))
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1,
							settingChange: void 0
						}), this.wake()
					}, this.handleMouseMove = () => {
						this.state.isHovered || this.setState({
							isHovered: !0
						}), this.wake(), this.sleepTimeout = setTimeout(this.sleep, H)
					}, this.handleMouseMoveControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (this.state.settingChange) {
							case T.a.SeekBar:
								t && t.handleMouseMove(e);
								break;
							case T.a.Volume:
								s && s.handleMouseMove(e)
						}
					}, this.handleMouseUpControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (e.stopPropagation(), this.state.settingChange) {
							case T.a.SeekBar:
								t && t.handleMouseUp(e);
								break;
							case T.a.Volume:
								s && s.handleMouseUp(e)
						}
					}, this.handlePause = () => {
						this.unsubscribeHeartbeat(), this.pauseWatch()
					}, this.handlePlay = () => {
						this.hasPlayableMedia && (this.subscribeHeartbeat(), this.state.isEnded || (this.state.hasVideoPlayed ? this.startWatch() : (this.setState({
							hasVideoPlayed: !0
						}), this.startHeartbeats())))
					}, this.handleResourceRemoved = () => {
						this.setState({
							wasRemoved: !0
						})
					}, this.handleSeeked = e => {
						e !== this.state.currentTime && (this.hlsVideo && this.hlsVideo.setCurrentTime(e), this.setState({
							currentTime: e
						}))
					}, this.handleTimeUpdate = e => {
						this.setState({
							currentTime: e
						})
					}, this.handleToggleMuted = () => {
						this.setState(e => {
							let {
								muted: t
							} = e;
							return {
								muted: !t
							}
						})
					}, this.handleTogglePaused = () => {
						this.setState(e => {
							let {
								isEnded: t
							} = e;
							return {
								isEnded: t && !this.shouldPause,
								userPaused: !this.shouldPause,
								userShowedIntent: !0
							}
						})
					}, this.handleVolumeChange = e => {
						e !== this.state.volume && (this.hlsVideo && this.hlsVideo.setVolume(e), this.setState({
							muted: !e,
							volume: e
						}))
					}, this.sleep = () => {
						this.state.isSleeping || this.setState({
							isSleeping: !0
						})
					}, this.wake = () => {
						this.sleepTimeout && (clearTimeout(this.sleepTimeout), this.sleepTimeout = null), this.state.isSleeping && this.setState({
							isSleeping: !1
						})
					}, this.state = {
						currentTime: 0,
						duration: 0,
						hasError: !1,
						isEnded: !1,
						isHovered: !1,
						isSleeping: !1,
						live: !1,
						muted: !0,
						userPaused: !1,
						userShowedIntent: !1,
						volume: .8,
						wasRemoved: !1,
						id: "",
						sessionDuration: 0,
						sessionTimerId: "",
						watchDuration: 0,
						watchTimerId: "",
						heartbeatDurationOffset: 0,
						startTime: 0,
						hasVideoPlayed: !1
					}, this.focusVisibleRef = Object(r.createRef)()
				}
				get hasPlayableMedia() {
					return !(this.state.wasRemoved || this.state.hasError)
				}
				get shouldPause() {
					const {
						autoplay: e,
						isOverlayOpen: t,
						shouldPause: s
					} = this.props, {
						isEnded: i,
						userPaused: a,
						userShowedIntent: r
					} = this.state;
					return !!t || (!!i || (r ? a : !e || s))
				}
				get shouldRenderOverlay() {
					return this.shouldRenderVideo && this.hasPlayableMedia
				}
				get shouldRenderVideo() {
					return this.props.canLoad
				}
				get shouldRenderControls() {
					const {
						duration: e,
						live: t
					} = this.state;
					return !!e && !t
				}
				get url() {
					return this.hasPlayableMedia ? this.props.url : this.props.unavailableVideoUrl || ""
				}
				componentDidMount() {
					const e = this.focusVisibleRef.current;
					e.classList.add(k.a.focusVisible), Object(p.a)(e)
				}
				componentDidUpdate(e, t) {
					const {
						currentTime: s,
						duration: i
					} = this.state;
					!e.shouldPause && this.props.shouldPause && (this.setState({
						userShowedIntent: !1
					}), this.state.hasVideoPlayed && this.handleEnded()), this.controlBar && (s !== t.currentTime && this.controlBar.setCurrentTime(s), i !== t.duration && this.controlBar.setTotalTime(i))
				}
				componentWillUnmount() {
					this.unsubscribeHeartbeat(), this.handleEnded()
				}
				render() {
					return n.a.createElement("div", {
						className: Object(m.a)(k.a.LiveVideoPlayer, {
							[k.a.isSleeping]: this.state.isSleeping && !this.shouldPause
						}),
						onBlur: this.handleMouseLeave,
						onClick: this.handleClick,
						onFocus: this.handleMouseMove,
						onMouseMove: this.handleMouseMove,
						onMouseLeave: this.handleMouseLeave,
						ref: this.focusVisibleRef
					}, this.shouldRenderVideo ? this.renderVideo() : null, this.shouldRenderOverlay ? this.renderOverlay() : null)
				}
				renderOverlay() {
					return n.a.createElement(_, null, this.state.live ? n.a.createElement(j, null) : null, this.shouldRenderControls ? this.renderControls() : null)
				}
				renderVideo() {
					const {
						autoplay: e,
						postId: t,
						postTitle: s
					} = this.props;
					return n.a.createElement("div", {
						className: k.a.clip9x16
					}, n.a.createElement(O, {
						autoplay: e,
						controls: !1,
						isPaused: this.shouldPause,
						muted: this.state.muted,
						playMutedOnPrevented: !0,
						startTime: this.state.currentTime,
						url: this.url,
						muxVideoDuration: void 0,
						muxVideoId: t,
						muxVideoIsLive: this.state.live,
						muxVideoTitle: s,
						onEnded: this.handleEnded,
						onError: this.handleError,
						onLevelLoaded: this.handleLevelLoaded,
						onPause: this.handlePause,
						onPlay: this.handlePlay,
						onResourceRemoved: this.handleResourceRemoved,
						onTimeUpdate: this.handleTimeUpdate,
						ref: this.handleHlsRefChange
					}))
				}
				getSessionDuration() {
					return d.c.has(this.state.sessionTimerId) ? d.c.getTime(this.state.sessionTimerId) : 0
				}
				endTimers() {
					d.c.end(this.state.watchTimerId), d.c.end(this.state.sessionTimerId), clearTimeout(this.fiveSecondSessionTimer), clearTimeout(this.fifteenSecondSessionTimer), clearTimeout(this.thirtySecondSessionTimer), clearTimeout(this.fortyfiveSecondSessionTimer), clearTimeout(this.minuteSessionTimer), this.fiveSecondSessionTimer = 0, this.fifteenSecondSessionTimer = 0, this.thirtySecondSessionTimer = 0, this.fortyfiveSecondSessionTimer = 0, this.minuteSessionTimer = 0
				}
				getWatchDuration() {
					let e = 0;
					return d.c.has(this.state.watchTimerId) && (e = d.c.getTime(this.state.watchTimerId)), e + this.state.watchDuration
				}
				pauseWatch() {
					const e = this.getWatchDuration();
					d.c.end(this.state.watchTimerId), this.setState({
						watchDuration: e
					})
				}
				startWatch() {
					d.c.start(this.state.watchTimerId)
				}
				convertToMs(e) {
					return Math.round(1e3 * e)
				}
				getVolume() {
					if (this.state.muted) return 0;
					const e = 20 * Math.log10(this.state.volume) / 40 + 1;
					return Math.round(100 * e)
				}
				getPlaybackStats() {
					return {
						id: this.state.id,
						volume: this.getVolume(),
						timestampMs: this.convertToMs(this.state.currentTime),
						watchDurationMs: this.getWatchDuration(),
						sessionDurationMs: this.getSessionDuration(),
						startTimeMs: this.state.startTime,
						playheadOffsetMs: this.convertToMs(this.state.duration - this.state.currentTime),
						heartbeatDurationMs: this.getWatchDuration() - this.state.heartbeatDurationOffset,
						chatState: P.f.None,
						playerType: f.a.Feed
					}
				}
				startTimers() {
					this.startWatch(), d.c.start(this.state.sessionTimerId), this.fiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 5e3), this.fifteenSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 15e3), this.thirtySecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 3e4), this.fortyfiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 45e3), this.minuteSessionTimer = window.setInterval(this.onSendHeartbeat, 6e4)
				}
				renderControls() {
					const {
						currentTime: e,
						duration: t,
						isHovered: s,
						isSleeping: i,
						muted: a,
						settingChange: r,
						volume: o
					} = this.state;
					return n.a.createElement("div", {
						className: k.a.controls,
						onMouseDown: this.handleMouseDownControls,
						onMouseMove: this.handleMouseMoveControls,
						onMouseUp: this.handleMouseUpControls
					}, n.a.createElement(g.a, {
						currentTime: e,
						hasAudio: !0,
						hideControlBar: !s || i && !this.shouldPause,
						hideFullScreenButton: !0,
						hideGradient: !1,
						isFullScreen: !1,
						isListing: !1,
						isLive: !1,
						isMuted: a,
						isPaused: this.shouldPause,
						playPauseVideo: this.handleTogglePaused,
						ref: e => this.controlBar = e,
						seekBarRef: e => this.seekBar = e,
						settingChange: r,
						setVideoPosition: this.handleSeeked,
						setVolume: this.handleVolumeChange,
						hideLiveLabel: !0,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.handleToggleMuted,
						totalTime: t,
						volume: o,
						volumeRef: e => this.volumeControl = e
					}))
				}
				startHeartbeats() {
					const e = u()();
					this.setState({
						startTime: Date.now(),
						watchDuration: 0,
						watchTimerId: this.getWatchDurationTimer(e),
						heartbeatDurationOffset: 0,
						sessionDuration: 0,
						sessionTimerId: this.getSessionDurationTimer(e),
						id: e
					}, () => {
						this.props.currentStream && (this.props.sendEvent(Object(f.u)(this.props.currentStream, this.getPlaybackStats())), this.startTimers())
					})
				}
				subscribeHeartbeat() {
					this.props.onHeartbeatSubscribe(this.props.postId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
			}
			t.default = R(Object(y.c)(x));
			const _ = e => {
					let {
						children: t
					} = e;
					return n.a.createElement("div", {
						className: k.a.Overlay
					}, t)
				},
				j = () => n.a.createElement("span", {
					className: k.a.LiveIndicator
				}, E._("Live", null, {
					hk: "TwJSs"
				}))
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer.6f8be53e8540071ba60d.js.map