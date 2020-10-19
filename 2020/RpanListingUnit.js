// https://www.redditstatic.com/desktop2x/RpanListingUnit.a6c7ccf5716e6b214c04.js
// Retrieved at 10/19/2020, 6:10:06 PM by Reddit Dataminer v1.0.0
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
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(c.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(a.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Jb
				});
				return Object(u.Oc)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Kb
				});
				return Object(u.Oc)(t) ? void 0 : t
			}, (e, t) => e === u.Lb.Enabled && t === u.Lb.Enabled);
			var b = s("./src/config.ts");
			var h = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const v = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						i = new Uint32Array(e);
					return crypto.getRandomValues(i), Array.from(i).map(e => t.charAt(e % s)).join("")
				},
				f = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				E = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var O;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(O || (O = {}));
			const g = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					i = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(i)).map(E).join("")
			})(O.SHA1, e);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (s[i] = e[i]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (s[i[r]] = e[i[r]])
				}
				return s
			};
			const x = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				C = Object({
					SENTRY_RELEASE_VERSION: "6b05c8c-production"
				}),
				N = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: b.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(C.SENTRY_RELEASE_VERSION, " ").concat(b.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: c,
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: b,
					localStorageViewerUserIdKey: E,
					playerName: O,
					playerVersion: C,
					respectDoNotTrack: _,
					saltLength: I,
					saltTimeToLive: j,
					viewerUserIdLength: A
				} = Object.assign(Object.assign({}, N), t);
				class R extends i.Component {
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
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							i = S(t, ["forwardedRef"]);
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
						const e = this.props.redditUserId || R.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = f(),
							i = "".concat(s).concat(e).concat(t);
						return (await g(i)).substr(0, R.VIEWER_USER_ID_LENGTH)
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
							debug: R.DEBUG,
							disableCookies: R.DISABLE_COOKIES,
							respectDoNotTrack: R.RESPECT_DO_NOT_TRACK
						}, s), {
							data: Object.assign(Object.assign({
								env_key: R.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: R.PLAYER_NAME,
								player_version: R.PLAYER_VERSION
							}, t), {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = R.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = v(R.SALT_LENGTH), Object(o.b)(e, t, R.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? R.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? R.STREAM_TYPE_LIVE : R.STREAM_TYPE_ON_DEMAND,
							video_title: i
						}
					}
				}
				R.displayName = x(e), R.ANONYMOUS_USER_ID = s, R.DEBUG = c, R.DISABLE_COOKIES = u, R.DURATION_LIVE = 1 / 0, R.ENV_KEY = m, R.LOCAL_STORAGE_SALT_KEY = b, R.LOCAL_STORAGE_VIEWER_USER_ID_KEY = E, R.PLAYER_NAME = O, R.PLAYER_VERSION = C, R.RESPECT_DO_NOT_TRACK = _, R.SALT_LENGTH = I, R.SALT_TIME_TO_LIVE = j, R.STREAM_TYPE_LIVE = "live", R.STREAM_TYPE_ON_DEMAND = "on-demand", R.VIEWER_USER_ID_LENGTH = A;
				const T = Object(i.forwardRef)((e, t) => r.a.createElement(R, y({}, e, {
						forwardedRef: t
					}))),
					D = Object(a.c)({
						redditUserId: h.g,
						isMuxEnabled: p
					});
				return Object(n.b)(D, null, null, {
					forwardRef: !0
				})(T)
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
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return N
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "i", (function() {
				return j
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				d = s.n(o),
				c = s("./src/reddit/constants/jsapiEvents.ts");
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
			const m = Object(a.c)({
				consumers: e => e.jsApi
			});
			class p extends i.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: i
							} = t,
							r = u(t, ["className", "consumers"]);
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
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
			var b = Object(n.b)(m, {})(p),
				h = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					i = Object(v.J)(e, t);
				return {
					comment: s,
					isModerator: !(!i || !i.name) && !!e.moderatingSubreddits[i.name],
					subredditOrProfile: i
				}
			};
			var E = Object(n.b)(() => Object(a.a)(f, h.j, (e, t) => Object.assign(Object.assign({}, e), {
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
			const O = (e, t) => {
				const s = Object(h.n)(e, t),
					i = Object(v.J)(e, t);
				return {
					comment: s,
					isModerator: !(!i || !i.name) && !!e.moderatingSubreddits[i.name],
					subredditOrProfile: i
				}
			};
			var g = Object(n.b)(() => Object(a.a)(O, e => e))(e => r.a.createElement(b, {
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
			var y = Object(n.b)(() => Object(a.c)({
					subreddit: v.S
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
				S = s("./src/reddit/selectors/posts.ts");
			var x = Object(n.b)(() => Object(a.c)({
				post: S.N,
				subredditOrProfile: S.ab,
				isModerator: (e, t) => {
					const s = Object(S.ab)(e, t);
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
			var C = Object(n.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(S.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(S.ab)(e, {
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
			var N = Object(n.b)(() => Object(a.c)({
				post: S.N,
				subredditOrProfile: S.ab,
				isModerator: (e, t) => {
					const s = Object(S.ab)(e, t);
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
			var _ = Object(n.b)(() => Object(a.c)({
				subreddit: v.S
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
			var I = Object(n.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(v.M)(e, {
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
			var j = Object(n.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(v.S)(e, {
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
				return Q
			})), s.d(t, "RpanDescription", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/higherOrderComponents/withMux/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/intersectionObserver/index.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				u = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				m = s("./src/reddit/actions/preferences.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				h = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				v = s("./src/reddit/constants/chat.ts"),
				f = s("./src/reddit/constants/postLayout.ts"),
				E = s("./src/reddit/helpers/overlay/index.ts"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				g = s("./src/reddit/helpers/trackers/rpan.ts"),
				y = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				S = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				C = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				j = s("./src/reddit/components/Flatlist/index.tsx"),
				A = s("./src/reddit/components/Flatlist/constants.ts"),
				R = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				T = s("./src/reddit/components/HlsVideo/index.tsx"),
				D = s("./src/reddit/components/OverflowMenu/index.tsx"),
				L = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostLeftRail/index.tsx"),
				M = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				P = s("./src/reddit/components/TrackingHelper/index.tsx"),
				V = s("./src/reddit/controls/Dropdown/Row.tsx"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				U = s("./src/reddit/controls/Score/index.tsx"),
				H = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				B = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				K = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Y = s.n(K),
				F = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				W = s.n(F);
			const {
				fbt: J
			} = s("./node_modules/fbt/lib/FbtPublic.js"), G = Object(o.a)(T.a, {
				playerName: "RPAN DU Video Player"
			}), z = Object(n.b)(() => Object(a.c)({
				autoplay: _.b,
				isLoggedIn: _.I,
				inRpanLoadingAnimation: x.b,
				isOverlayOpen: C.i,
				location: (e, t) => {
					let {
						listingName: s
					} = t;
					const i = Object(N.m)(e, {
						listingName: s
					});
					let r;
					if (i) {
						const e = Object(O.d)(i),
							t = Object(h.c)(s);
						r = "".concat(e).concat(t)
					} else {
						const e = s.replace(/^r\//, "");
						r = e === p.R ? Object(O.e)() : Object(O.g)(e)
					}
					return r
				},
				stream: (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(N.m)(e, {
						listingName: s
					})
				},
				streamById: e => t => Object(N.l)(e, t),
				totalLiveWatchers: N.n
			}), (e, t) => ({
				onHideRpanUnit: () => e(Object(m.D)(t.listingName)),
				openOverlay: t => e(Object(E.a)(t)),
				subscribeConfig: () => e(b.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(b.a.subscribeStats(t)),
				subscribeStreams: () => e(b.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), Q = () => r.a.createElement("h3", {
				className: W.a.title
			}, J._("Top broadcast", null, {
				hk: "HADCh"
			})), $ = () => r.a.createElement("p", {
				className: W.a.description
			}, J._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class q extends i.Component {
				constructor(e) {
					super(e), this.observableElement = r.a.createRef(), this.videoRef = r.a.createRef(), this.videoSessionManager = null, this.onResourceRemoved = () => {
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
						s(), i(Object(g.f)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(g.g)(s, 1) : Object(g.g)()), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(g.g)()), this.openOverlay()
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
					}, this.handleHeartbeat = e => {
						let {
							meta: t,
							stats: s
						} = e;
						const {
							stream: i,
							streamById: r
						} = this.props, n = i && i.post.id === t.id ? i : r(t.id);
						if (!n) return;
						const a = !s.sessionDurationMs ? g.w : g.t,
							o = {
								chatState: v.f.None,
								playerType: g.a.DU
							},
							d = a(n, Object.assign(Object.assign({}, s), o));
						this.props.sendEvent(d)
					}, this.state = {
						isInFocus: !0,
						isIntersecting: !1,
						isReady: !1
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
					return t === y.a.IS_LIVE || t === y.a.DISCONNECTED
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
						video: s
					} = this, {
						autoplay: i,
						stream: r
					} = this.props, {
						isOverlayOpen: n,
						stream: a
					} = e, {
						isReady: o
					} = this.state, {
						isInFocus: d,
						isIntersecting: c,
						isReady: l
					} = t, {
						isVisible: u
					} = this, m = d && c && !n, p = !m && u, b = m && !u;
					p ? (this.subscribeConfig(), this.subscribeStreams()) : b && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const h = r && r.post.id,
						v = h !== (a && a.post.id),
						f = !!h;
					v && this.setState({
						isReady: !1
					});
					const E = v && !f || f && b;
					if (v && f && u || f && p ? this.subscribeStats() : E && this.unsubscribeStats(), i && s) {
						const e = this.getOrCreateVideoSessionManager(s),
							t = !l && o,
							i = f && (t && u || p && o),
							r = f && b;
						v && e.endSession(), i ? e.startSession({
							id: h
						}) : r && e.pauseSession()
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === f.g.Classic ? this.renderClassicContent() : e === f.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return r.a.createElement("div", {
						className: Object(d.a)(W.a.container, {
							[Y.a.largeAndMediumPostStyles]: e === f.g.Large || e === f.g.Medium,
							[Y.a.classicPostStyles]: e === f.g.Classic,
							[Y.a.compactPostStyles]: e === f.g.Compact,
							[W.a.large]: e === f.g.Large || e === f.g.Medium,
							[W.a.classic]: e === f.g.Classic,
							[W.a.compact]: e === f.g.Compact
						}, this.props.className),
						ref: this.observableElement
					}, e !== f.g.Large && r.a.createElement(w.b, {
						className: W.a.leftRail,
						withoutComputedStyles: e === f.g.Compact
					}, r.a.createElement(X, {
						isVertical: !0
					}), e === f.g.Compact && r.a.createElement(X, {
						isVertical: !1
					})), r.a.createElement(L.a, {
						className: W.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return r.a.createElement("div", {
						className: W.a.titleAndDescriptionContainer
					}, r.a.createElement(k.a, {
						to: this.props.location
					}, r.a.createElement(Q, null), e && r.a.createElement($, null)))
				}
				renderLargeContent() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: W.a.header
					}, this.renderTitleAndDescription(), r.a.createElement("div", {
						className: W.a.flatListContainer
					}, r.a.createElement(te, {
						onClick: this.onHideUnitClicked
					}))), r.a.createElement("div", {
						className: W.a.body
					}, r.a.createElement(k.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: W.a.previewLink,
						tabIndex: 0
					}, r.a.createElement("div", {
						className: W.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return r.a.createElement("div", {
						className: W.a.body
					}, r.a.createElement(k.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, r.a.createElement("div", {
						className: W.a.thumbnailContainer
					}, this.renderThumbnail())), r.a.createElement("div", {
						className: W.a.main
					}, this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: W.a.flatListContainer
					}, r.a.createElement(Z, {
						onClick: this.onHeaderClicked
					}), r.a.createElement(j.a, {
						className: W.a.flatlistSeparator
					}), r.a.createElement("div", null, r.a.createElement(ee, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return r.a.createElement("div", {
						className: W.a.body
					}, r.a.createElement("div", {
						className: W.a.main
					}, r.a.createElement(Z, {
						onClick: this.onHeaderClicked
					}), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: W.a.flatListContainer
					}, r.a.createElement(te, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return r.a.createElement("div", {
						className: W.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return r.a.createElement("div", {
						className: W.a.bigExpando
					}, r.a.createElement(H.a, {
						className: W.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? r.a.createElement("span", {
						className: W.a.liveStatus
					}, J._("Live", null, {
						hk: "TwJSs"
					})) : null
				}
				renderWatcherCount() {
					if (!this.isLive) return null;
					const e = Math.max(1, this.props.totalLiveWatchers);
					return r.a.createElement("span", {
						className: W.a.watchingCount
					}, J._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [J._plural(e, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					const e = this.props.inRpanLoadingAnimation ? W.a.loading : W.a.noise;
					return r.a.createElement("div", {
						className: Object(d.a)(W.a.thumbnail, {
							[e]: !this.state.isReady
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
						n = t.post.title;
					return r.a.createElement(G, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: s,
						muxVideoId: i,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: n,
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
					e && c.a(e, this.handleIntersectionEvent)
				}
				unsubscribeIntersectionObserver() {
					const {
						current: e
					} = this.observableElement;
					e && c.b(e)
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
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new u.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const X = e => r.a.createElement(I.a, {
					className: Object(d.a)({
						[W.a.verticalVotes]: e.isVertical,
						[W.a.horizontalVotes]: !e.isVertical
					})
				}, r.a.createElement(U.a, {
					className: W.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: S.a.notVoted
				})),
				Z = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: W.a.expandoButton,
						onClick: t
					}, r.a.createElement(H.a, {
						className: W.a.expandoIcon
					}))
				},
				ee = e => {
					let {
						onClick: t,
						isLoggedIn: s
					} = e;
					return r.a.createElement(R.a, {
						displayText: J._("Show me less of this", null, {
							hk: "4t8AKC"
						}),
						flatlistItem: A.a.Hide,
						isLoggedIn: !!s,
						isUserOp: !1,
						onClick: t,
						noBreakpoints: !0
					}, r.a.createElement(M.b, null))
				},
				te = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement(D.b, {
						className: W.a.overflowMenu,
						dropdownClassName: W.a.overflowDropdown,
						dropdownId: "rpan-du-overflow"
					}, r.a.createElement(V.b, {
						className: W.a.overflowItem,
						displayText: J._("Show me less of this", null, {
							hk: "2c4uFK"
						}),
						iconWrapperClassName: W.a.overflowItemIconWrapper,
						textClassName: W.a.overflowItemText,
						onClick: t
					}, r.a.createElement(B.a, {
						className: W.a.hideIcon
					})))
				};
			t.default = z(Object(P.c)(q))
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
				return d
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(a);
			const d = e => r.a.createElement("span", {
				className: Object(n.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return r.a.createElement(d, {
					className: Object(n.a)(o.a.metaSeparator, t),
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
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(o);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("admin"), d.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
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
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", o.a);
			t.a = d
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.a6c7ccf5716e6b214c04.js.map