// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.ab72342d0ed95c0575d6.js
// Retrieved at 7/15/2020, 10:20:06 AM by Reddit Dataminer v1.0.0
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
				return A
			})), s.d(t, "Overlay", (function() {
				return B
			})), s.d(t, "LiveIndicator", (function() {
				return U
			}));
			var i = s("./node_modules/lodash/isUndefined.js"),
				a = s.n(i),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				h = s("./src/telemetry/index.ts"),
				l = s("./node_modules/uuid/v4.js"),
				u = s.n(l),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/focusVisible/index.js"),
				b = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				v = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				S = s("./src/reddit/actions/video.ts"),
				T = s("./src/reddit/components/HlsVideo/index.tsx"),
				g = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				y = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				P = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/constants/chat.ts"),
				f = s("./src/reddit/constants/keycodes.ts"),
				V = s("./src/reddit/helpers/trackers/rpan.ts"),
				C = s("./src/reddit/selectors/experiments/video.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				D = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				L = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/selectors/video.ts"),
				k = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				O = s.n(k);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(c.a)(T.a, {
				playerName: "RPAN Listing Player"
			}), _ = 3e3, j = Object(d.c)({
				autoplay: x.b,
				inVideoNewVolumePolicyFeed: C.a,
				isOverlayOpen: I.i,
				mutedInFeed: H.j,
				unavailableVideoUrl: D.o,
				currentStream: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(L.k)(e, s)
				}
			}), N = Object(o.b)(j, (e, t) => ({
				setMutedInFeed: t => e(Object(S.P)(t)),
				onHeartbeatSubscribe: t => e(b.a.subscribeHeartbeat(t)),
				onStreamByIdRequested: t => e(Object(v.d)(t))
			}));
			class A extends r.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.onSendHeartbeat = () => {
						this.props.currentStream && this.props.sendEvent(Object(V.r)(this.props.currentStream, this.getPlaybackStats())), this.setState({
							heartbeatDurationOffset: this.getWatchDuration()
						})
					}, this.getSessionDurationTimer = e => "session-duration-".concat(e), this.getWatchDurationTimer = e => "watch-duration-".concat(e), this.handleHlsRefChange = e => {
						this.hlsVideo = e
					}, this.handleClick = e => {
						a()(this.state.settingChange) || (e.stopPropagation(), this.setState({
							settingChange: void 0
						}))
					}, this.handleEnded = () => {
						this.setState({
							isEnded: !0
						}), this.endHeartbeats()
					}, this.handleError = () => {
						this.setState({
							hasError: !0
						})
					}, this.onKeyPress = e => {
						e.key === f.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
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
							settingChange: g.a.SeekBar
						}), t.handleMouseDown(e)), s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: g.a.Volume
						}), s.handleMouseDown(e)))
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1,
							settingChange: void 0
						}), this.wake()
					}, this.handleMouseMove = () => {
						this.state.isHovered || this.setState({
							isHovered: !0
						}), this.wake(), this.sleepTimeout = setTimeout(this.sleep, _)
					}, this.handleMouseMoveControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (this.state.settingChange) {
							case g.a.SeekBar:
								t && t.handleMouseMove(e);
								break;
							case g.a.Volume:
								s && s.handleMouseMove(e)
						}
					}, this.handleMouseUpControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (e.stopPropagation(), this.state.settingChange) {
							case g.a.SeekBar:
								t && t.handleMouseUp(e);
								break;
							case g.a.Volume:
								s && s.handleMouseUp(e)
						}
					}, this.handlePause = () => {
						this.setState({
							isPlaying: !1
						}), this.unsubscribeHeartbeat(), this.pauseWatch()
					}, this.handlePlay = () => {
						this.hasPlayableMedia && (this.setState({
							isPlaying: !0
						}), this.subscribeHeartbeat(), this.state.isEnded || (this.state.hasVideoPlayed ? this.startWatch() : (this.setState({
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
						}), this.context.setCurrentTime(e)
					}, this.handleToggleMuted = () => {
						this.setState(e => {
							let {
								muted: t
							} = e;
							return {
								muted: !t
							}
						}), this.props.setMutedInFeed(!this.state.muted)
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
						}), this.props.setMutedInFeed(!e))
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
						isPlaying: !1,
						isSleeping: !1,
						live: !1,
						muted: !e.inVideoNewVolumePolicyFeed || e.mutedInFeed,
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
					e.classList.add(O.a.focusVisible), Object(p.a)(e)
				}
				componentDidUpdate(e, t) {
					const {
						currentTime: s,
						duration: i
					} = this.state;
					!e.shouldPause && this.props.shouldPause && (this.setState({
						userShowedIntent: !1
					}), this.state.hasVideoPlayed && this.endHeartbeats()), this.controlBar && (s !== t.currentTime && this.controlBar.setCurrentTime(s), i !== t.duration && this.controlBar.setTotalTime(i)), this.props.inVideoNewVolumePolicyFeed && (this.state.isPlaying || this.props.mutedInFeed !== e.mutedInFeed && this.setState({
						muted: this.props.mutedInFeed
					}))
				}
				componentWillUnmount() {
					this.unsubscribeHeartbeat(), this.endHeartbeats()
				}
				render() {
					return n.a.createElement("div", {
						className: Object(m.a)(O.a.LiveVideoPlayer, {
							[O.a.isSleeping]: this.state.isSleeping && !this.shouldPause
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
					return n.a.createElement(B, null, this.state.live ? n.a.createElement(U, null) : null, this.shouldRenderControls ? this.renderControls() : null)
				}
				renderVideo() {
					const {
						autoplay: e,
						postId: t,
						postTitle: s
					} = this.props;
					return n.a.createElement("div", {
						className: O.a.clip9x16
					}, n.a.createElement(R, {
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
					return h.c.has(this.state.sessionTimerId) ? h.c.getTime(this.state.sessionTimerId) : 0
				}
				endHeartbeats() {
					this.onSendHeartbeat(), this.endTimers(), this.setState({
						watchDuration: 0,
						sessionDuration: 0,
						heartbeatDurationOffset: 0,
						hasVideoPlayed: !1
					})
				}
				endTimers() {
					h.c.has(this.state.watchTimerId) && h.c.end(this.state.watchTimerId), h.c.has(this.state.sessionTimerId) && h.c.end(this.state.sessionTimerId), clearTimeout(this.fiveSecondSessionTimer), clearTimeout(this.fifteenSecondSessionTimer), clearTimeout(this.thirtySecondSessionTimer), clearTimeout(this.fortyfiveSecondSessionTimer), clearTimeout(this.minuteSessionTimer), this.fiveSecondSessionTimer = 0, this.fifteenSecondSessionTimer = 0, this.thirtySecondSessionTimer = 0, this.fortyfiveSecondSessionTimer = 0, this.minuteSessionTimer = 0
				}
				getWatchDuration() {
					let e = 0;
					return h.c.has(this.state.watchTimerId) && (e = h.c.getTime(this.state.watchTimerId)), e + this.state.watchDuration
				}
				pauseWatch() {
					const e = this.getWatchDuration();
					h.c.has(this.state.watchTimerId) && h.c.end(this.state.watchTimerId), this.setState({
						watchDuration: e
					})
				}
				startWatch() {
					h.c.start(this.state.watchTimerId)
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
						chatState: M.f.None,
						playerType: V.a.Feed
					}
				}
				startTimers() {
					this.startWatch(), h.c.start(this.state.sessionTimerId), this.fiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 5e3), this.fifteenSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 15e3), this.thirtySecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 3e4), this.fortyfiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 45e3), this.minuteSessionTimer = window.setInterval(this.onSendHeartbeat, 6e4)
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
						className: O.a.controls,
						onMouseDown: this.handleMouseDownControls,
						onMouseMove: this.handleMouseMoveControls,
						onMouseUp: this.handleMouseUpControls
					}, n.a.createElement(y.a, {
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
						this.props.currentStream && (this.props.sendEvent(Object(V.u)(this.props.currentStream, this.getPlaybackStats())), this.startTimers())
					})
				}
				subscribeHeartbeat() {
					this.props.onHeartbeatSubscribe(this.props.postId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
			}
			A.contextType = P.a, t.default = N(Object(w.c)(A));
			const B = e => {
					let {
						children: t
					} = e;
					return n.a.createElement("div", {
						className: O.a.Overlay
					}, t)
				},
				U = () => n.a.createElement("span", {
					className: O.a.LiveIndicator
				}, E._("Live", null, {
					hk: "TwJSs"
				}))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			var i = s("./node_modules/react/index.js"),
				a = s.n(i);
			const r = Object(i.createContext)({
					currentTime: 0,
					setCurrentTime: () => {}
				}),
				n = e => {
					let {
						children: t
					} = e;
					const [s, n] = Object(i.useState)(0), o = {
						currentTime: s,
						setCurrentTime: n
					};
					return a.a.createElement(r.Provider, {
						value: o
					}, t)
				}
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer.ab72342d0ed95c0575d6.js.map