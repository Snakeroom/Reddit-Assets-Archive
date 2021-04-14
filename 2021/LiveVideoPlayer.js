// https://www.redditstatic.com/desktop2x/LiveVideoPlayer.f003a1dcfdd398499a07.js
// Retrieved at 4/14/2021, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["LiveVideoPlayer"], {
		"./node_modules/lodash/isUndefined.js": function(e, t) {
			e.exports = function(e) {
				return void 0 === e
			}
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return a
			})), s.d(t, "i", (function() {
				return r
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return u
			}));
			const i = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				a = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				r = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				l = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				c = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return V
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "c", (function() {
				return H
			})), s.d(t, "a", (function() {
				return A
			})), s.d(t, "b", (function() {
				return F
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/linkMatchers/customLinks.ts"),
				r = s("./src/reddit/actions/login.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subscription/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var b = s("./src/graphql/operations/SubscribedSubreddits.json"),
				v = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var C = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = s("./src/reddit/models/GqlTopLevelField.ts"),
				O = s("./src/reddit/models/User/index.ts");

			function y(e) {
				const t = [],
					s = [],
					i = {},
					n = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const r of o.edges) {
					if (r.node.__typename !== O.c.AvailableRedditor) continue;
					const e = Object(C.a)(r.node.profile);
					i[e.id] = e;
					const {
						isFavorite: s
					} = r.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: a
				} = e.identity;
				for (const r of a.edges) {
					if (r.node.__typename !== S.a.Subreddit) continue;
					const e = Object(g.a)(r.node);
					n[e.id] = e;
					const {
						isFavorite: t
					} = r.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: i,
					subreddits: n
				}
			}
			var w = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				M = s("./src/reddit/selectors/subscriptions.ts"),
				P = s("./src/reddit/selectors/user.ts");
			const j = () => i.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				E = Object(o.a)(l.c),
				L = Object(o.a)(l.b),
				I = Object(o.a)(l.a),
				T = Object(o.a)(l.h),
				V = (Object(o.a)(l.i), Object(o.a)(l.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const i = t();
					if (!i.user.account || i.subscriptions.api.fetched) return;
					e(L());
					const n = await (e => Object(v.a)(e, b))(s());
					if (n.ok) {
						const t = y(n.body.data);
						e(E(t))
					} else e(I({
						error: n.error
					}))
				}),
				R = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				N = (e, t, s) => async (o, l, {
					apiContext: b
				}) => {
					let v = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(_.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(x.m)(l(), e.name),
						name: `${n.Xb}${e.name}`,
						type: e.type
					});
					if (!Object(P.J)(l())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(r.j)());
					const C = Object(P.i)(l());
					if (C) {
						const t = v.length,
							s = e.length;
						if (v = v.filter(e => !R(C, e)), (e = e.filter(e => !R(C, e))).length !== s || v.length !== t) {
							const e = i.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(c.f)(Object(c.e)(e, w.b.Error)))
						}
						if (!e.length && !v.length) return
					}
					if (o(T({
							identifiers: v,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(M.b)(l()),
							userIsSubscriber: t,
							widgetId: s
						})), (await ((e, {
							subredditIds: t,
							subredditNames: s,
							subscribe: i
						}) => Object(h.a)(Object(m.a)(e, [p.a]), {
							method: n.cb.POST,
							endpoint: Object(f.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: i ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: s && s.join(",") || void 0,
								api_type: "json"
							}
						}))(b(), {
							subredditNames: v.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?a.d.subreddit:a.d.profile}${e[0].name}` : `${i.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(c.f)({
							text: 1 === e.length && "profile" === e[0].type ? i.fbt._("Sucсessfully {verb} {communityname}", [i.fbt._param("verb", t ? "followed" : "unfollowed"), i.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							}) : i.fbt._("Sucсessfully {verb} {communityname}", [i.fbt._param("verb", t ? "joined" : "left"), i.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(T({
							identifiers: v,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(M.b)(l()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const n = i.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(c.f)(Object(c.e)(n, w.b.Error)))
					}
				}, k = Object(o.a)(l.f), H = e => async (t, s, {
					apiContext: i
				}) => {
					const o = s(),
						a = Object(_.L)(o, {
							identifier: e
						});
					if (!a) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const r = e.type === u.a.SUBREDDIT ? a.name : `u_${a.name}`,
						d = o.subscriptions.favoriteSubredditOrder || [],
						l = o.subscriptions.favoriteProfileOrder || [],
						b = d.indexOf(e.id),
						v = l.indexOf(e.id),
						f = -1 === b && -1 === v,
						C = o.subreddits.models,
						g = o.profiles.models;
					t(k({
						makeFavorite: f,
						identifier: e,
						subredditModels: C,
						profileModels: g
					}));
					const S = {
							type: e.type,
							name: a.name
						},
						O = () => Object(_.gb)(s(), {
							identifier: S
						});
					(O() || (await t(N([S], !0)), O())) && ((await ((e, t, s) => Object(h.a)(Object(m.a)(e, [p.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(i(), r, f)).ok || (t(k({
						makeFavorite: !f,
						identifier: e,
						subredditModels: C,
						profileModels: g
					})), t(Object(c.f)({
						text: j(),
						kind: w.b.Error
					}))))
				}, U = Object(o.a)(l.d), A = e => async (t, s, {
					apiContext: i
				}) => {
					const o = s().multireddits.models,
						a = () => {
							t(Object(c.f)({
								text: j(),
								kind: w.b.Error
							}))
						},
						r = o[e];
					if (!r) return void a();
					const d = !r.isFavorited;
					t(U({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(h.a)(Object(m.a)(e, [p.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(i(), e, d)).ok || (t(U({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, D = Object(o.a)(l.e), F = e => async (t, s, {
					apiContext: o
				}) => {
					const a = s(),
						r = a.multireddits.models;
					if (!Object(P.J)(a)) return;
					const d = (e = !0) => {
							t(Object(c.f)({
								text: i.fbt._("Sorry, failed to {followAction}", [i.fbt._param("followAction", e ? i.fbt._("follow", null, {
									hk: "2I4uia"
								}) : i.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: w.b.Error
							}))
						},
						l = r[e];
					if (!l) return void d();
					const u = !l.isFollowed;
					t(D({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: r
					})), (await ((e, t, s) => Object(h.a)(Object(m.a)(e, [p.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(D({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: r
					})), d(u))
				}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/reddit/constants/elementIds.ts"),
				r = s("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const s = Object(o.a)(e, t);
				class i extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(s, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(r.b)(i)
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
				return A
			})), s.d(t, "Overlay", (function() {
				return D
			}));
			var i = s("./node_modules/lodash/isUndefined.js"),
				n = s.n(i),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/higherOrderComponents/withMux/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/focusVisible/index.js"),
				h = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				m = s("./src/reddit/actions/media.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				v = s("./src/reddit/actions/video.ts"),
				f = s("./src/reddit/components/HlsVideo/index.tsx"),
				C = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				g = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				S = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/constants/chat.ts"),
				x = s("./src/reddit/constants/keycodes.ts"),
				_ = s("./src/reddit/helpers/trackers/rpan.ts"),
				M = s("./src/reddit/selectors/media.ts"),
				P = s("./src/reddit/selectors/platform.ts"),
				j = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				E = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/selectors/video.ts"),
				T = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/index.m.less"),
				V = s.n(T);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = Object(l.a)(f.a, {
				playerName: "RPAN Listing Player"
			}), k = 3e3, H = Object(d.c)({
				autoplay: L.b,
				isOverlayOpen: P.h,
				mutedInFeed: I.i,
				unavailableVideoUrl: j.o,
				volumeInFeed: M.d,
				currentStream: (e, {
					postId: t
				}) => Object(E.l)(e, t)
			}), U = Object(r.b)(H, (e, t) => ({
				setMutedInFeed: t => e(Object(v.G)(t)),
				setVideoVolume: t => e(Object(m.h)(t)),
				onHeartbeatSubscribe: t => e(p.a.subscribeHeartbeat(t)),
				onStreamByIdRequested: async t => await e(Object(b.d)(t))
			}));
			class A extends o.Component {
				constructor(e) {
					super(e), this.sleepTimeout = null, this.videoRef = a.a.createRef(), this._videoSessionManager = null, this.handleHlsRefChange = e => {
						var t;
						this.hlsVideo = e, null === (t = this.hlsVideo) || void 0 === t || t.setVolume(this.state.volume)
					}, this.handleClick = e => {
						n()(this.state.settingChange) || (e.stopPropagation(), this.setState({
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
						e.key === x.b.Enter && (e.preventDefault(), e.stopPropagation(), this.handleTogglePaused())
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
							settingChange: C.a.SeekBar
						}), t.handleMouseDown(e)), s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: C.a.Volume
						}), s.handleMouseDown(e)))
					}, this.handleMouseLeave = () => {
						this.setState({
							isHovered: !1,
							settingChange: void 0
						}), this.wake()
					}, this.handleMouseMove = () => {
						this.state.isHovered || this.setState({
							isHovered: !0
						}), this.wake(), this.sleepTimeout = setTimeout(this.sleep, k)
					}, this.handleMouseMoveControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (this.state.settingChange) {
							case C.a.SeekBar:
								t && t.handleMouseMove(e);
								break;
							case C.a.Volume:
								s && s.handleMouseMove(e)
						}
					}, this.handleMouseUpControls = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						switch (e.stopPropagation(), this.state.settingChange) {
							case C.a.SeekBar:
								t && t.handleMouseUp(e);
								break;
							case C.a.Volume:
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
							i = this.state.muted !== s,
							n = this.state.volume !== e;
						t ? (s ? i && this.setState({
							muted: s
						}) : ((i || n) && this.setState({
							muted: s,
							volume: e
						}), this.props.setVideoVolume(e)), this.props.setMutedInFeed(s)) : i && this.setState({
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
						const i = !e.sessionDurationMs ? _.D : _.z,
							n = {
								...e,
								chatState: w.a.None,
								playerType: _.a.Feed
							};
						this.props.sendEvent(i(s, n))
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
						userPaused: n,
						userShowedIntent: o
					} = this.state;
					return !!t || (!!i || (o ? n : !e || s))
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
						this._videoSessionManager = new h.a(e, {
							onHeartbeat: this.handleHeartbeat
						})
					}
					return this._videoSessionManager
				}
				componentDidMount() {
					const e = this.focusVisibleRef.current;
					e.classList.add(V.a.focusVisible), Object(u.a)(e)
				}
				componentDidUpdate(e, t) {
					var s;
					const {
						mutedInFeed: i,
						shouldPause: n,
						volumeInFeed: o
					} = this.props, {
						currentTime: a,
						duration: r,
						isPlaying: d,
						live: l,
						muted: c,
						volume: u
					} = this.state;
					!e.shouldPause && n && this.setState({
						userShowedIntent: !1
					}), this.updateVideoSession(e, t), this.controlBar && (a !== t.currentTime && this.controlBar.setCurrentTime(a), r !== t.duration && this.controlBar.setTotalTime(r)), d || (i !== e.mutedInFeed && i !== c && this.setState({
						muted: i
					}), o !== e.volumeInFeed && (null === (s = this.hlsVideo) || void 0 === s || s.setVolume(o), o !== u && this.setState({
						volume: o
					}))), this.context.setIsLive(l), this.context.setCurrentTime(a)
				}
				componentWillUnmount() {
					var e;
					this.unsubscribeHeartbeat(), null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
				render() {
					return a.a.createElement("div", {
						className: Object(c.a)(V.a.LiveVideoPlayer, {
							[V.a.isSleeping]: this.state.isSleeping && !this.shouldPause
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
					return a.a.createElement(D, null, e ? a.a.createElement("span", {
						className: V.a.liveStatus
					}, a.a.createElement(O.g, null)) : null, a.a.createElement("div", {
						className: V.a.controls,
						onMouseDown: this.handleMouseDownControls,
						onMouseMove: this.handleMouseMoveControls,
						onMouseUp: this.handleMouseUpControls
					}, e ? this.renderAudioControl() : this.renderControls()))
				}
				renderVideo() {
					const {
						autoplay: e,
						postId: t,
						postTitle: s
					} = this.props;
					return a.a.createElement("div", {
						className: V.a.clip9x16
					}, a.a.createElement(N, {
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
				renderAudioControl() {
					const {
						isHovered: e,
						isSleeping: t,
						live: s,
						muted: i,
						settingChange: n,
						volume: o
					} = this.state;
					return a.a.createElement(g.a, {
						hideControlBar: !e || t && !this.shouldPause,
						isFullScreen: !1,
						isLive: s,
						isMuted: i,
						settingChange: n,
						setVolume: this.handleVolumeChange,
						toggleMute: this.handleToggleMuted,
						volume: o,
						volumeRef: e => this.volumeControl = e
					})
				}
				renderControls() {
					const {
						currentTime: e,
						duration: t,
						isHovered: s,
						isSleeping: i,
						live: n,
						muted: o,
						settingChange: r,
						volume: d
					} = this.state;
					return a.a.createElement(g.b, {
						currentTime: e,
						hasAudio: !0,
						hideControlBar: !s || i && !this.shouldPause,
						hideFullScreenButton: !0,
						hideGradient: !1,
						isFullScreen: !1,
						isListing: !1,
						isLive: n,
						isMuted: o,
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
						volume: d,
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
					var s, i;
					const {
						isPlaying: n,
						isReady: o
					} = this.state, {
						isPlaying: a,
						isReady: r
					} = t, d = o && (a && !n);
					!r && o && n || o && (!a && n) ? null === (s = this.videoSessionManager) || void 0 === s || s.startSession() : d && (null === (i = this.videoSessionManager) || void 0 === i || i.pauseSession())
				}
			}
			A.contextType = S.a, t.default = U(Object(y.c)(A));
			const D = ({
				children: e
			}) => a.a.createElement("div", {
				className: V.a.Overlay
			}, e)
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				d = s.n(r);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), d.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", l({}, s, {
				className: Object(o.a)(d.a.compactDownvoteWrapper, s.className)
			}), n.a.createElement(c, {
				className: d.a.compactDownvote,
				isFilled: t
			})) : n.a.createElement("span", l({}, s, {
				className: Object(o.a)(d.a.downvoteWrapper, s.className)
			}), n.a.createElement(c, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				d = s.n(r);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => n.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), d.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? n.a.createElement("span", l({}, s, {
				className: Object(o.a)(d.a.compactUpvoteWrapper, s.className)
			}), n.a.createElement(c, {
				className: d.a.compactUpvote,
				isFilled: t
			})) : n.a.createElement("span", l({}, s, {
				className: Object(o.a)(d.a.upvoteWrapper, s.className)
			}), n.a.createElement(c, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, n.a.createElement("g", null, n.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), n.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			const o = e => n.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				a = e => n.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, n.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				r = e => n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), n.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), n.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), n.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
				})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/LiveVideoPlayer.f003a1dcfdd398499a07.js.map