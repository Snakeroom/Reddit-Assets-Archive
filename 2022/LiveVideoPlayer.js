// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.28ec4827b83040e51ce9.js
// Retrieved at 1/12/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer"], {
		"./node_modules/lodash/isUndefined.js": function(e, t) {
			e.exports = function(e) {
				return void 0 === e
			}
		},
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					n = null,
					o = {
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

				function r(e) {
					return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
				}

				function i(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function a(e) {
					t = !1
				}

				function c() {
					document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
				}

				function d(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (r(e.activeElement) && i(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", a, !0), document.addEventListener("pointerdown", a, !0), document.addEventListener("touchstart", a, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), c())
				}), !0), c(), e.addEventListener("focus", (function(e) {
					var s, n, a;
					r(e.target) && (t || (s = e.target, n = s.type, "INPUT" === (a = s.tagName) && o[n] && !s.readOnly || "TEXTAREA" === a && !s.readOnly || s.isContentEditable)) && i(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					r(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(n), n = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return L
			})), s.d(t, "f", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				o = s.n(n),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				u = s("./src/reddit/selectors/subreddit.ts");
			const l = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = o.a.parse(t);
					l.has(e) && (s.related = e);
					const n = o.a.stringify(s);
					return n ? `?${n}` : ""
				},
				h = Object(r.a)(i.N),
				p = Object(r.a)(i.y),
				b = Object(r.a)(i.O),
				v = Object(r.a)(i.z),
				f = Object(r.a)(i.M),
				y = Object(r.a)(i.L),
				g = Object(r.a)(i.t),
				w = Object(r.a)(i.u),
				E = e => async (t, s, {
					gqlContext: n
				}) => {
					const o = Object(c.g)(e),
						r = s();
					if (Object(d.d)(r, o)) return;
					t(h(o));
					const i = await Object(a.e)(n(), o),
						u = Date.now();
					if (i.ok && i.body && i.body.data) {
						const e = i.body.data;
						t(p({
							model: e,
							utcTimeStamp: u
						}))
					} else t(S({
						streamId: o,
						error: i.error,
						utcTimeStamp: u
					}))
				}, L = (e, t) => async (s, n) => s(O(e, t)), O = (e, t) => async (s, n, {
					gqlContext: o
				}) => {
					const r = n();
					if (Object(d.f)(r)) return;
					s(b());
					const i = await Object(a.f)(o(), e, t),
						c = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						s(v({
							listingName: e,
							models: t,
							utcTimeStamp: c
						}))
					} else s(x({
						error: i.error,
						utcTimeStamp: c
					}))
				}, C = (e, t) => async (s, n) => s(_(e, t)), _ = (e, t) => async (s, n, {
					gqlContext: o
				}) => {
					const r = n();
					if (Object(d.f)(r)) return;
					s(b());
					const i = Date.now(),
						c = e.replace("r/", ""),
						l = Object(u.C)(r, c),
						m = await Object(a.b)(o(), {
							subredditId: l,
							options: t
						}),
						h = m.body;
					m.ok && h && h.data || s(x({
						error: m.error,
						utcTimeStamp: i
					}));
					const p = h.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(a.e)(e, t),
								n = Date.now(),
								o = s.body;
							return o && o.data ? o.data : void S({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(o(), e.node.id)),
						f = (await Promise.all(p)).filter(e => void 0 !== typeof e);
					s(v({
						listingName: e,
						models: f,
						utcTimeStamp: i
					}))
				}, S = e => async t => {
					t(f(e))
				}, x = e => async t => {
					t(y(e))
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
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(v);
			const y = d.a.wrapped(m.a, "_Dropdown", f.a),
				g = Object(l.a)(y),
				w = d.a.button("MenuButton", f.a),
				E = d.a.wrapped(h.b, "DropdownRow", f.a),
				L = Object(a.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				O = Object(i.b)(L, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = O(e => r.a.createElement(w, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(p.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), r.a.createElement(g, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				preventFocusScroll: e.preventFocusScroll,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(r.a)(e, t);
				class n extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
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
				controls: "NChIQgZKTHyJPUVfOp7oC",
				liveStatus: "_114oxXWr6zlJaImMK_9XYl"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "LiveVideoPlayer", (function() {
				return F
			})), s.d(t, "Overlay", (function() {
				return B
			}));
			var n = s("./node_modules/lodash/isUndefined.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/withMux/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/focusVisible/index.js"),
				m = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				h = s("./src/reddit/actions/media.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				v = s("./src/reddit/actions/video.ts"),
				f = s("./src/reddit/components/HlsVideo/index.tsx"),
				y = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				g = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				w = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				E = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				L = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/constants/chat.ts"),
				C = s("./src/reddit/constants/keycodes.ts"),
				_ = s("./src/reddit/helpers/trackers/rpan.ts"),
				S = s("./src/reddit/selectors/media.ts"),
				x = s("./src/reddit/selectors/platform.ts"),
				j = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				k = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/selectors/video.ts"),
				N = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				P = s.n(N);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), V = Object(d.a)(f.a, {
				playerName: "RPAN Listing Player"
			}), D = 3e3, A = Object(c.c)({
				autoplay: I.b,
				isOverlayOpen: x.i,
				mutedInFeed: M.i,
				unavailableVideoUrl: j.o,
				volumeInFeed: S.d,
				currentStream: (e, {
					postId: t
				}) => Object(k.l)(e, t)
			}), R = Object(a.b)(A, (e, t) => ({
				setMutedInFeed: t => e(Object(v.G)(t)),
				setVideoVolume: t => e(Object(h.h)(t)),
				onHeartbeatSubscribe: t => e(p.a.subscribeHeartbeat(t)),
				onStreamByIdRequested: async t => await e(Object(b.d)(t))
			}));
			class F extends r.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.videoRef = i.a.createRef(), this._videoSessionManager = null, this.handleHlsRefChange = e => {
						var t;
						this.hlsVideo = e, null === (t = this.hlsVideo) || void 0 === t || t.setVolume(this.state.volume)
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
						e.key === C.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
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
							settingChange: y.a.SeekBar
						}), t.handleMouseDown(e)), s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: y.a.Volume
						}), s.handleMouseDown(e)))
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1,
							settingChange: void 0
						}), this.wake()
					}, this.handleMouseMove = () => {
						this.state.isHovered || this.setState({
							isHovered: !0
						}), this.wake(), this.sleepTimeout = setTimeout(this.sleep, D)
					}, this.handleMouseMoveControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (this.state.settingChange) {
							case y.a.SeekBar:
								t && t.handleMouseMove(e);
								break;
							case y.a.Volume:
								s && s.handleMouseMove(e)
						}
					}, this.handleMouseUpControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (e.stopPropagation(), this.state.settingChange) {
							case y.a.SeekBar:
								t && t.handleMouseUp(e);
								break;
							case y.a.Volume:
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
						})
					}, this.handleToggleMuted = () => {
						this.setState(e => {
							var t;
							const s = !e.muted;
							return s || null === (t = this.hlsVideo) || void 0 === t || t.setVolume(e.volume), this.props.setMutedInFeed(s), {
								muted: s
							}
						})
					}, this.handleTogglePaused = () => {
						this.setState(({
							isEnded: e
						}) => ({
							isEnded: e && !this.shouldPause,
							userPaused: !this.shouldPause,
							userShowedIntent: !0
						}))
					}, this.handleVolumeChange = (e, t) => {
						this.hlsVideo && this.hlsVideo.setVolume(e);
						const s = !e,
							n = this.state.muted !== s,
							o = this.state.volume !== e;
						t ? (s ? n && this.setState({
							muted: s
						}) : ((n || o) && this.setState({
							muted: s,
							volume: e
						}), this.props.setVideoVolume(e)), this.props.setMutedInFeed(s)) : n && this.setState({
							muted: s
						})
					}, this.sleep = () => {
						this.state.isSleeping || this.setState({
							isSleeping: !0
						})
					}, this.wake = () => {
						this.sleepTimeout && (clearTimeout(this.sleepTimeout), this.sleepTimeout = null), this.state.isSleeping && this.setState({
							isSleeping: !1
						})
					}, this.handleHeartbeat = async ({
						stats: e
					}) => {
						var t;
						this.props.currentStream || await this.props.onStreamByIdRequested(this.props.postId);
						const {
							currentStream: s
						} = this.props;
						if (!s) return void(null === (t = this.videoSessionManager) || void 0 === t || t.destroySession());
						const n = !e.sessionDurationMs ? _.E : _.A,
							o = {
								...e,
								chatState: O.a.None,
								playerType: _.a.Feed
							};
						this.props.sendEvent(n(s, o))
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
						muted: e.mutedInFeed,
						userPaused: !1,
						userShowedIntent: !1,
						volume: e.volumeInFeed,
						wasRemoved: !1,
						sessionId: ""
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
						isEnded: n,
						userPaused: o,
						userShowedIntent: r
					} = this.state;
					return !!t || (!!n || (r ? o : !e || s))
				}
				get shouldRenderOverlay() {
					return this.shouldRenderVideo && this.hasPlayableMedia && !!this.state.duration
				}
				get shouldRenderVideo() {
					return this.props.canLoad
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
						this._videoSessionManager = new m.a(e, {
							onHeartbeat: this.handleHeartbeat
						})
					}
					return this._videoSessionManager
				}
				componentDidMount() {
					const e = this.focusVisibleRef.current;
					e.classList.add(P.a.focusVisible), Object(l.a)(e)
				}
				componentDidUpdate(e, t) {
					var s;
					const {
						mutedInFeed: n,
						shouldPause: o,
						volumeInFeed: r
					} = this.props, {
						currentTime: i,
						duration: a,
						isPlaying: c,
						live: d,
						muted: u,
						volume: l
					} = this.state;
					!e.shouldPause && o && this.setState({
						userShowedIntent: !1
					}), this.updateVideoSession(e, t), this.controlBar && (i !== t.currentTime && this.controlBar.setCurrentTime(i), a !== t.duration && this.controlBar.setTotalTime(a)), c || (n !== e.mutedInFeed && n !== u && this.setState({
						muted: n
					}), r !== e.volumeInFeed && (null === (s = this.hlsVideo) || void 0 === s || s.setVolume(r), r !== l && this.setState({
						volume: r
					}))), this.context.setIsLive(d), this.context.setCurrentTime(i)
				}
				componentWillUnmount() {
					var e;
					this.unsubscribeHeartbeat(), null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
				render() {
					return i.a.createElement("div", {
						className: Object(u.a)(P.a.LiveVideoPlayer, {
							[P.a.isSleeping]: this.state.isSleeping && !this.shouldPause
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
					const {
						live: e
					} = this.state;
					return i.a.createElement(B, null, e ? i.a.createElement("span", {
						className: P.a.liveStatus
					}, i.a.createElement(E.g, null)) : null, i.a.createElement("div", {
						className: P.a.controls,
						onMouseDown: this.handleMouseDownControls,
						onMouseMove: this.handleMouseMoveControls,
						onMouseUp: this.handleMouseUpControls
					}, e ? this.renderAudioControl() : this.renderControls()))
				}
				renderVideo() {
					const {
						autoplay: e,
						className: t,
						postId: s,
						postTitle: n
					} = this.props;
					return i.a.createElement("div", {
						className: Object(u.a)(P.a.clip9x16, t)
					}, i.a.createElement(V, {
						autoplay: e,
						controls: !1,
						isPaused: this.shouldPause,
						muted: this.state.muted,
						playMutedOnPrevented: !0,
						startTime: this.state.currentTime,
						url: this.url,
						muxVideoDuration: void 0,
						muxVideoId: s,
						muxVideoIsLive: this.state.live,
						muxVideoTitle: n,
						onEnded: this.handleEnded,
						onError: this.handleError,
						onLevelLoaded: this.handleLevelLoaded,
						onLoadedData: this.handleLoadedData,
						onPause: this.handlePause,
						onPlay: this.handlePlay,
						onResourceRemoved: this.handleResourceRemoved,
						onTimeUpdate: this.handleTimeUpdate,
						ref: this.handleHlsRefChange,
						videoRef: this.videoRef,
						sessionId: this.state.sessionId
					}))
				}
				renderAudioControl() {
					const {
						isHovered: e,
						isSleeping: t,
						live: s,
						muted: n,
						settingChange: o,
						volume: r
					} = this.state;
					return i.a.createElement(g.a, {
						hideControlBar: !e || t && !this.shouldPause,
						isFullScreen: !1,
						isLive: s,
						isMuted: n,
						settingChange: o,
						setVolume: this.handleVolumeChange,
						toggleMute: this.handleToggleMuted,
						volume: r,
						volumeRef: e => this.volumeControl = e
					})
				}
				renderControls() {
					const {
						currentTime: e,
						duration: t,
						isHovered: s,
						isSleeping: n,
						live: o,
						muted: r,
						settingChange: a,
						volume: c
					} = this.state;
					return i.a.createElement(g.b, {
						currentTime: e,
						hasAudio: !0,
						hideControlBar: !s || n && !this.shouldPause,
						hideFullScreenButton: !0,
						hideGradient: !1,
						isFullScreen: !1,
						isListing: !1,
						isLive: o,
						isMuted: r,
						isPaused: this.shouldPause,
						playPauseVideo: this.handleTogglePaused,
						ref: e => this.controlBar = e,
						seekBarRef: e => this.seekBar = e,
						settingChange: a,
						setVideoPosition: this.handleSeeked,
						setVolume: this.handleVolumeChange,
						hideLiveLabel: !0,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.handleToggleMuted,
						totalTime: t,
						volume: c,
						volumeRef: e => this.volumeControl = e
					})
				}
				subscribeHeartbeat() {
					this.props.onHeartbeatSubscribe(this.props.postId).then(e => this._unsubscribeHeartbeat = e)
				}
				unsubscribeHeartbeat() {
					this._unsubscribeHeartbeat && (this._unsubscribeHeartbeat(), delete this._unsubscribeHeartbeat)
				}
				updateVideoSession(e, t) {
					var s, n, o, r;
					const {
						isPlaying: i,
						isReady: a
					} = this.state, {
						isPlaying: c,
						isReady: d
					} = t, u = a && (c && !i);
					!d && a && i || a && (!c && i) ? (null === (s = this.videoSessionManager) || void 0 === s || s.startSession(), this.setState({
						sessionId: (null === (o = null === (n = this.videoSessionManager) || void 0 === n ? void 0 : n.sessionStats) || void 0 === o ? void 0 : o.id) || ""
					})) : u && (null === (r = this.videoSessionManager) || void 0 === r || r.pauseSession())
				}
			}
			F.contextType = w.a, t.default = R(Object(L.c)(F));
			const B = ({
				children: e
			}) => i.a.createElement("div", {
				className: P.a.Overlay
			}, e)
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				i = ({
					children: e
				}) => {
					const [t, s] = Object(n.useState)(0), [i, a] = Object(n.useState)(!1), [c, d] = Object(n.useState)(0), u = {
						currentTime: t,
						setCurrentTime: s,
						isLive: i,
						setIsLive: a,
						totalTime: c,
						setTotalTime: d
					};
					return o.a.createElement(r.Provider, {
						value: u
					}, e)
				}
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(n || (n = {}));
			var o;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(o || (o = {}))
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "H", (function() {
				return u
			})), s.d(t, "i", (function() {
				return l
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
				return y
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "x", (function() {
				return w
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "p", (function() {
				return L
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "o", (function() {
				return C
			})), s.d(t, "z", (function() {
				return _
			})), s.d(t, "s", (function() {
				return S
			})), s.d(t, "y", (function() {
				return x
			})), s.d(t, "G", (function() {
				return j
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "c", (function() {
				return I
			})), s.d(t, "n", (function() {
				return M
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return V
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "F", (function() {
				return A
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "m", (function() {
				return B
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "h", (function() {
				return H
			}));
			var n, o = s("./src/reddit/constants/chat.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(n || (n = {}));
			const a = (e, t) => {
					if (t) {
						const s = i.B(e, t.post.id),
							n = i.I(e, t.post.id),
							o = i.jb(e);
						if (t.post.authorInfo && n && (n.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const n = Object(r.j)(e, {
								streamIdFromPath: t.post.id
							});
							n === r.a.LIVE ? s.type = "stream_live" : n === r.a.VOD ? s.type = "stream_vod" : n === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: n,
							media: s,
							subreddit: o
						}
					}
					return {
						subreddit: i.jb(e)
					}
				},
				c = (e, t, s) => {
					if (!t || !s) return;
					const n = Object(r.j)(e, {
							streamIdFromPath: t.post.id
						}),
						i = t.chat_disabled || s.chatState === o.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: n === r.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: i ? o.a.None : o.a.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				u = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...a(e)
				}),
				l = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...a(e)
				}),
				m = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...a(s, e),
					actionInfo: i.d(s, {
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
						...a(s, e)
					}
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				v = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				f = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...a(n, t)
				}),
				y = (e, t, s, n) => o => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(o, t, s),
					...d(o),
					...a(o, t),
					actionInfo: i.d(o, {
						referralId: n
					})
				}),
				g = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(n, t, s),
					...d(n),
					...a(n, t)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...a(t, e)
				}),
				E = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				L = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				O = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(s, e, t),
					...d(s),
					...a(s, e)
				}),
				C = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(s, e, t),
					...a(s, e)
				}),
				_ = e => t => {
					const s = Object(r.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...a(t, s)
					}
				},
				S = (e, t, s) => n => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(n, t, s),
					...a(n, t)
				}),
				x = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(s, e, t),
					...d(s)
				}),
				j = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: i.R(t),
					screen: i.ab(t),
					...a(t, e)
				}),
				k = e => t => {
					const s = a(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: i.R(t),
						screen: i.ab(t),
						...s
					}
				},
				I = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...a(t, e)
				}),
				M = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...a(t, e)
				}),
				N = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...a(t, e),
					targetSubreddit: i.jb(t)
				}),
				P = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(s, e, t),
					...a(s, e)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(s, e, t),
					...a(s, e)
				}),
				V = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(s, e, t),
					...a(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(s, e, t),
					...a(s, e)
				}),
				A = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(s, e, t),
					...a(s, e)
				}),
				R = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(s, e, t),
					...a(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(s, e, t),
					...a(s, e),
					...d(s)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(s, e, t),
					...a(s, e),
					...d(s)
				}),
				U = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...a(s, t),
					...d(s)
				}),
				H = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...a(s, t),
					...d(s)
				})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return L
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "c", (function() {
				return V
			})), s.d(t, "f", (function() {
				return D
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "j", (function() {
				return B
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "g", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				a = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				l = s.n(d)()(e => Object(o.a)(Object(n.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const h = e => e.publicAccessNetwork.models,
				p = e => e.publicAccessNetwork.reports.reported,
				b = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				f = e => e.publicAccessNetwork.history.visitOrder,
				y = e => e.publicAccessNetwork.hlsStreams,
				g = Object(n.a)(y, e => e.ended),
				w = Object(n.a)(y, e => e.removed),
				E = Object(n.a)(h, g, w, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							o = A(n, i.a.ENDED) ? i.a.ENDED : n,
							r = s.stream.vod_accessible;
						return o === n && !0 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: o,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							o = A(n, i.a.ENDED) ? i.a.ENDED : n,
							r = s.stream.vod_accessible;
						return o === n && !1 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: o,
									vod_accessible: !1
								}
							}
						}
					}, n)
				}),
				L = (e, t) => {
					return E(e)[Object(r.g)(t)]
				},
				O = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => l(t.listingName)(e, t), E, p, a.h, (e, t, s, n, o) => {
					const a = [];
					if (e) {
						const t = Object(r.g)(e);
						s[t] && a.push(t)
					}
					const c = a.concat(t),
						d = [...new Set(c)],
						u = new Set([...n, ...o]);
					return d.filter(e => {
						const t = s[e];
						return !u.has(e) && !t.post.isHidden && t.stream.state !== i.a.KILLED && t.stream.state !== i.a.PURGED
					})
				}),
				C = Object(n.a)((e, {
					count: t
				}) => t, E, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => O(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				_ = Object(n.a)(E, C, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				S = Object(n.a)(f, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => C(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				x = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, E, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => C(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), b, (e, t, s, n) => {
					if (!s.length) return;
					const o = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = o.find(e => e.stream.state === i.a.IS_LIVE);
					if (r) return r.post.id;
					const a = o.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return a ? a.post.id : void 0
				}),
				j = Object(o.a)(Object(n.a)(x, E, (e, t) => e ? t[e] : void 0)),
				k = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(r.g)(t) : void 0, x, p, a.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: n
				}) => C(e, {
					listingName: t || n,
					streamIdFromPath: s
				}), (e, t, s, n, o) => !e || s.includes(e) || n.includes(e) ? t || o[0] : e),
				I = Object(n.a)(v, f, S, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				M = Object(n.a)(v, f, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				N = Object(o.a)(Object(n.a)(k, E, (e, t) => e ? t[e] : void 0)),
				P = Object(o.a)(Object(n.a)(I, E, (e, t) => e ? t[e] : void 0)),
				T = Object(o.a)(Object(n.a)(M, E, (e, t) => e ? t[e] : void 0)),
				V = (Object(o.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)(k, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				D = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? L(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function A(e, t) {
				const s = {
					[i.a.NOT_STARTED]: 0,
					[i.a.PUBLISHED]: 1,
					[i.a.IS_LIVE]: 2,
					[i.a.DISCONNECTED]: 2,
					[i.a.ENDED]: 3,
					[i.a.KILLED]: 4,
					[i.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const R = Object(n.a)(k, b, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const B = Object(n.a)(k, E, m.b, (e, t, s) => {
					if (s) return F.INTRO;
					const n = e && t[e];
					if (!n) return F.UNAVAILABLE;
					const o = n.stream.state;
					return o === i.a.IS_LIVE || o === i.a.DISCONNECTED ? F.LIVE : o === i.a.ENDED && n.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				U = Object(n.a)(N, B, m.b, c.b, c.o, (e, t, s, n, o) => s ? n : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : o : void 0),
				H = Object(n.a)(N, B, R, (e, t, s) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && s < e.broadcast_time ? s : 0 : 0),
				K = (e, t) => {
					const s = h(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(n.a)(i, r.n, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + o.a > Date.now()
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: i.J,
				experimentName: o.Mb
			}), e => e === o.Wc)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer.28ec4827b83040e51ce9.js.map