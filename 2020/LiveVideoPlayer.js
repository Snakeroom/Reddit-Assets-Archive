// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.8d8cf6b2e188d10951d1.js
// Retrieved at 10/29/2020, 6:40:06 PM by Reddit Dataminer v1.0.0
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
				return N
			})), s.d(t, "Overlay", (function() {
				return A
			})), s.d(t, "LiveIndicator", (function() {
				return B
			}));
			var i = s("./node_modules/lodash/isUndefined.js"),
				o = s.n(i),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/withMux/index.tsx"),
				h = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/focusVisible/index.js"),
				c = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				m = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				v = s("./src/reddit/actions/video.ts"),
				b = s("./src/reddit/components/HlsVideo/index.tsx"),
				g = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				S = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				y = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/constants/chat.ts"),
				V = s("./src/reddit/constants/keycodes.ts"),
				C = s("./src/reddit/helpers/trackers/rpan.ts"),
				T = s("./src/reddit/selectors/experiments/video.ts"),
				L = s("./src/reddit/selectors/platform.ts"),
				f = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				w = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/selectors/video.ts"),
				k = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				E = s.n(k);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(l.a)(b.a, {
				playerName: "RPAN Listing Player"
			}), H = 3e3, I = Object(d.c)({
				autoplay: R.b,
				inVideoNewVolumePolicyFeed: T.a,
				isOverlayOpen: L.i,
				mutedInFeed: x.j,
				unavailableVideoUrl: f.o,
				currentStream: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(w.l)(e, s)
				}
			}), j = Object(r.b)(I, (e, t) => ({
				setMutedInFeed: t => e(Object(v.H)(t)),
				onHeartbeatSubscribe: t => e(p.a.subscribeHeartbeat(t)),
				onStreamByIdRequested: async t => await e(Object(m.d)(t))
			}));
			class N extends n.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.videoRef = a.a.createRef(), this._videoSessionManager = null, this.handleHlsRefChange = e => {
						this.hlsVideo = e
					}, this.handleClick = e => {
						o()(this.state.settingChange) || (e.stopPropagation(), this.setState({
							settingChange: void 0
						}))
					}, this.handleEnded = () => {
						this.setState({
							isEnded: !0
						})
					}, this.handleError = () => {
						this.setState({
							hasError: !0
						})
					}, this.onKeyPress = e => {
						e.key === V.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
					}, this.handleLevelLoaded = e => {
						const {
							live: t,
							totalduration: s
						} = e;
						t !== this.state.live && this.setState({
							live: t
						}), s !== this.state.duration && this.setState({
							duration: s
						})
					}, this.handleLoadedData = () => {
						this.setState({
							isReady: !0
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
						}), this.wake(), this.sleepTimeout = setTimeout(this.sleep, H)
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
						}), this.unsubscribeHeartbeat()
					}, this.handlePlay = () => {
						this.hasPlayableMedia && (this.setState({
							isPlaying: !0
						}), this.subscribeHeartbeat())
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
					}, this.handleHeartbeat = async e => {
						let {
							stats: t
						} = e;
						var s;
						this.props.currentStream || await this.props.onStreamByIdRequested(this.props.postId);
						const {
							currentStream: i
						} = this.props;
						if (!i) return void(null === (s = this.videoSessionManager) || void 0 === s || s.destroySession());
						const o = !t.sessionDurationMs ? C.w : C.t,
							n = Object.assign(Object.assign({}, t), {
								chatState: M.f.None,
								playerType: C.a.Feed
							});
						this.props.sendEvent(o(i, n))
					}, this.state = {
						currentTime: 0,
						duration: 0,
						hasError: !1,
						isEnded: !1,
						isHovered: !1,
						isPlaying: !1,
						isReady: !1,
						isSleeping: !1,
						live: !1,
						muted: !e.inVideoNewVolumePolicyFeed || e.mutedInFeed,
						userPaused: !1,
						userShowedIntent: !1,
						volume: .8,
						wasRemoved: !1
					}, this.focusVisibleRef = Object(n.createRef)()
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
						userPaused: o,
						userShowedIntent: n
					} = this.state;
					return !!t || (!!i || (n ? o : !e || s))
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
				get video() {
					return this.videoRef.current
				}
				get videoSessionManager() {
					if (!this._videoSessionManager) {
						const {
							video: e
						} = this;
						if (!e) return;
						this._videoSessionManager = new c.a(e, {
							onHeartbeat: this.handleHeartbeat
						})
					}
					return this._videoSessionManager
				}
				componentDidMount() {
					const e = this.focusVisibleRef.current;
					e.classList.add(E.a.focusVisible), Object(u.a)(e)
				}
				componentDidUpdate(e, t) {
					const {
						currentTime: s,
						duration: i
					} = this.state;
					!e.shouldPause && this.props.shouldPause && this.setState({
						userShowedIntent: !1
					}), this.updateVideoSession(e, t), this.controlBar && (s !== t.currentTime && this.controlBar.setCurrentTime(s), i !== t.duration && this.controlBar.setTotalTime(i)), this.props.inVideoNewVolumePolicyFeed && (this.state.isPlaying || this.props.mutedInFeed !== e.mutedInFeed && this.setState({
						muted: this.props.mutedInFeed
					}))
				}
				componentWillUnmount() {
					var e;
					this.unsubscribeHeartbeat(), null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
				render() {
					return a.a.createElement("div", {
						className: Object(h.a)(E.a.LiveVideoPlayer, {
							[E.a.isSleeping]: this.state.isSleeping && !this.shouldPause
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
					return a.a.createElement(A, null, this.state.live ? a.a.createElement(B, null) : null, this.shouldRenderControls ? this.renderControls() : null)
				}
				renderVideo() {
					const {
						autoplay: e,
						postId: t,
						postTitle: s
					} = this.props;
					return a.a.createElement("div", {
						className: E.a.clip9x16
					}, a.a.createElement(O, {
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
						onLoadedData: this.handleLoadedData,
						onPause: this.handlePause,
						onPlay: this.handlePlay,
						onResourceRemoved: this.handleResourceRemoved,
						onTimeUpdate: this.handleTimeUpdate,
						ref: this.handleHlsRefChange,
						videoRef: this.videoRef
					}))
				}
				renderControls() {
					const {
						currentTime: e,
						duration: t,
						isHovered: s,
						isSleeping: i,
						muted: o,
						settingChange: n,
						volume: r
					} = this.state;
					return a.a.createElement("div", {
						className: E.a.controls,
						onMouseDown: this.handleMouseDownControls,
						onMouseMove: this.handleMouseMoveControls,
						onMouseUp: this.handleMouseUpControls
					}, a.a.createElement(S.a, {
						currentTime: e,
						hasAudio: !0,
						hideControlBar: !s || i && !this.shouldPause,
						hideFullScreenButton: !0,
						hideGradient: !1,
						isFullScreen: !1,
						isListing: !1,
						isLive: !1,
						isMuted: o,
						isPaused: this.shouldPause,
						playPauseVideo: this.handleTogglePaused,
						ref: e => this.controlBar = e,
						seekBarRef: e => this.seekBar = e,
						settingChange: n,
						setVideoPosition: this.handleSeeked,
						setVolume: this.handleVolumeChange,
						hideLiveLabel: !0,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.handleToggleMuted,
						totalTime: t,
						volume: r,
						volumeRef: e => this.volumeControl = e
					}))
				}
				subscribeHeartbeat() {
					this.props.onHeartbeatSubscribe(this.props.postId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
				updateVideoSession(e, t) {
					var s, i;
					const {
						isPlaying: o,
						isReady: n
					} = this.state, {
						isPlaying: a,
						isReady: r
					} = t, d = n && (a && !o);
					!r && n && o || n && (!a && o) ? null === (s = this.videoSessionManager) || void 0 === s || s.startSession() : d && (null === (i = this.videoSessionManager) || void 0 === i || i.pauseSession())
				}
			}
			N.contextType = y.a, t.default = j(Object(P.c)(N));
			const A = e => {
					let {
						children: t
					} = e;
					return a.a.createElement("div", {
						className: E.a.Overlay
					}, t)
				},
				B = () => a.a.createElement("span", {
					className: E.a.LiveIndicator
				}, _._("Live", null, {
					hk: "TwJSs"
				}))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var i = s("./node_modules/react/index.js"),
				o = s.n(i);
			const n = Object(i.createContext)({
					currentTime: 0,
					setCurrentTime: () => {}
				}),
				a = e => {
					let {
						children: t
					} = e;
					const [s, a] = Object(i.useState)(0), r = {
						currentTime: s,
						setCurrentTime: a
					};
					return o.a.createElement(n.Provider, {
						value: r
					}, t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer.8d8cf6b2e188d10951d1.js.map