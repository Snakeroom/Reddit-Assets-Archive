// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.24328e68c4570f9a40ca.js
// Retrieved at 5/28/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
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
				return E
			})), s.d(t, "Overlay", (function() {
				return f
			})), s.d(t, "LiveIndicator", (function() {
				return R
			}));
			var i = s("./node_modules/lodash/isUndefined.js"),
				a = s.n(i),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/withMux/index.tsx"),
				h = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/focusVisible/index.js"),
				c = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				m = s("./src/reddit/components/HlsVideo/index.tsx"),
				p = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				v = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				b = s("./src/reddit/constants/keycodes.ts"),
				g = s("./src/reddit/selectors/platform.ts"),
				P = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				M = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				y = s.n(S);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = Object(d.a)(m.a, {
				playerName: "RPAN Listing Player"
			}), L = 3e3, T = Object(l.c)({
				autoplay: M.b,
				isOverlayOpen: g.h,
				unavailableVideoUrl: P.p
			}), w = Object(r.b)(T, (e, t) => ({
				onHeartbeatSubscribe: t => e(c.a.subscribeHeartbeat(t))
			}));
			class E extends o.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.handleHlsRefChange = e => {
						this.hlsVideo = e
					}, this.handleClick = e => {
						a()(this.state.settingChange) || (e.stopPropagation(), this.setState({
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
						e.key === b.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
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
					}, this.handleMouseDownControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						e.target instanceof Element && (e.stopPropagation(), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: p.a.SeekBar
						}), t.handleMouseDown(e)), s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: p.a.Volume
						}), s.handleMouseDown(e)))
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1,
							settingChange: void 0
						}), this.wake()
					}, this.handleMouseMove = () => {
						this.state.isHovered || this.setState({
							isHovered: !0
						}), this.wake(), this.sleepTimeout = setTimeout(this.sleep, L)
					}, this.handleMouseMoveControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (this.state.settingChange) {
							case p.a.SeekBar:
								t && t.handleMouseMove(e);
								break;
							case p.a.Volume:
								s && s.handleMouseMove(e)
						}
					}, this.handleMouseUpControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (e.stopPropagation(), this.state.settingChange) {
							case p.a.SeekBar:
								t && t.handleMouseUp(e);
								break;
							case p.a.Volume:
								s && s.handleMouseUp(e)
						}
					}, this.handlePause = () => {
						this.unsubscribeHeartbeat()
					}, this.handlePlay = () => {
						this.hasPlayableMedia && this.subscribeHeartbeat()
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
						wasRemoved: !1
					}, this.focusVisibleRef = Object(o.createRef)()
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
						userShowedIntent: o
					} = this.state;
					return !!t || (!!i || (o ? a : !e || s))
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
					e.classList.add(y.a.focusVisible), Object(u.a)(e)
				}
				componentDidUpdate(e, t) {
					const {
						currentTime: s,
						duration: i
					} = this.state;
					this.props.shouldPause && !e.shouldPause && this.setState({
						userShowedIntent: !1
					}), this.controlBar && (s !== t.currentTime && this.controlBar.setCurrentTime(s), i !== t.duration && this.controlBar.setTotalTime(i))
				}
				componentWillUnmount() {
					this.unsubscribeHeartbeat()
				}
				render() {
					return n.a.createElement("div", {
						className: Object(h.a)(y.a.LiveVideoPlayer, {
							[y.a.isSleeping]: this.state.isSleeping && !this.shouldPause
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
					return n.a.createElement(f, null, this.state.live ? n.a.createElement(R, null) : null, this.shouldRenderControls ? this.renderControls() : null)
				}
				renderVideo() {
					const {
						autoplay: e,
						postId: t,
						postTitle: s
					} = this.props;
					return n.a.createElement("div", {
						className: y.a.clip9x16
					}, n.a.createElement(C, {
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
				renderControls() {
					const {
						currentTime: e,
						duration: t,
						isHovered: s,
						isSleeping: i,
						muted: a,
						settingChange: o,
						volume: r
					} = this.state;
					return n.a.createElement("div", {
						className: y.a.controls,
						onMouseDown: this.handleMouseDownControls,
						onMouseMove: this.handleMouseMoveControls,
						onMouseUp: this.handleMouseUpControls
					}, n.a.createElement(v.a, {
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
						settingChange: o,
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
			}
			t.default = w(E);
			const f = e => {
					let {
						children: t
					} = e;
					return n.a.createElement("div", {
						className: y.a.Overlay
					}, t)
				},
				R = () => n.a.createElement("span", {
					className: y.a.LiveIndicator
				}, V._("Live", null, {
					hk: "TwJSs"
				}))
		}
	}
]);
//# sourceMappingURL=LiveVideoPlayer.24328e68c4570f9a40ca.js.map