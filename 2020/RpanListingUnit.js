// https://www.redditstatic.com/desktop2x/RpanListingUnit.fc89782e09073c1e6d1c.js
// Retrieved at 11/12/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				i = 0;
			e.exports = function(e) {
				var t = ++i;
				return n(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/combineRefs/index.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(a.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.Ub
				});
				return Object(m.ed)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.Vb
				});
				return Object(m.ed)(t) ? void 0 : t
			}, (e, t) => e === m.Wb.Enabled && t === m.Wb.Enabled);
			var b = s("./src/config.ts");
			var h = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						n = new Uint32Array(e);
					return crypto.getRandomValues(n), Array.from(n).map(e => t.charAt(e % s)).join("")
				},
				E = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				v = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var g;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(g || (g = {}));
			const O = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					n = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(n)).map(v).join("")
			})(g.SHA1, e);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const S = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				C = Object({
					SENTRY_RELEASE_VERSION: "0deb494-production"
				}),
				j = {
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
					debug: d,
					disableCookies: m,
					envKey: u,
					localStorageSaltKey: b,
					localStorageViewerUserIdKey: v,
					playerName: g,
					playerVersion: C,
					respectDoNotTrack: N,
					saltLength: _,
					saltTimeToLive: I,
					viewerUserIdLength: A
				} = Object.assign(Object.assign({}, j), t);
				class R extends n.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(n.createRef)(), this.handleDashCreate = e => {
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
							n = y(t, ["forwardedRef"]);
						return i.a.createElement(e, x({}, n, {
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
							s = E(),
							n = "".concat(s).concat(e).concat(t);
						return (await O(n)).substr(0, R.VIEWER_USER_ID_LENGTH)
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
						return t || (t = f(R.SALT_LENGTH), Object(o.b)(e, t, R.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign(Object.assign({}, this.getDashInstanceData()), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: n
						} = this.props;
						return {
							video_duration: s ? R.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? R.STREAM_TYPE_LIVE : R.STREAM_TYPE_ON_DEMAND,
							video_title: n
						}
					}
				}
				R.displayName = S(e), R.ANONYMOUS_USER_ID = s, R.DEBUG = d, R.DISABLE_COOKIES = m, R.DURATION_LIVE = 1 / 0, R.ENV_KEY = u, R.LOCAL_STORAGE_SALT_KEY = b, R.LOCAL_STORAGE_VIEWER_USER_ID_KEY = v, R.PLAYER_NAME = g, R.PLAYER_VERSION = C, R.RESPECT_DO_NOT_TRACK = N, R.SALT_LENGTH = _, R.SALT_TIME_TO_LIVE = I, R.STREAM_TYPE_LIVE = "live", R.STREAM_TYPE_ON_DEMAND = "on-demand", R.VIEWER_USER_ID_LENGTH = A;
				const D = Object(n.forwardRef)((e, t) => i.a.createElement(R, x({}, e, {
						forwardedRef: t
					}))),
					T = Object(a.c)({
						redditUserId: h.g,
						isMuxEnabled: p
					});
				return Object(r.b)(T, null, null, {
					forwardRef: !0
				})(D)
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
		"./src/reddit/components/Comments/Comment/HighlightEffect/LottieEffect/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lottie-web/build/player/lottie.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r);
			s("./src/reddit/components/ImageWithFallback/index.tsx");
			const o = {};

			function c(e) {
				let t = o[e];
				return t || (t = o[e] = fetch(e).then(t => (t.ok || function(e) {
					throw new Error('Unable to download effect asset "'.concat(e, '"'))
				}(e), t.json()))), t
			}
			const d = a.a.memo(e => {
				const t = a.a.createRef(),
					[s, n] = Object(r.useState)(null);
				Object(r.useEffect)(() => {
					const r = t.current;
					!s && r && c(e.assetUrl).then(t => {
						if (0 === r.childElementCount) {
							const s = i.a.loadAnimation({
								autoplay: !1,
								loop: e.loop,
								container: r,
								animationData: t
							});
							n(s)
						}
					})
				}, [e.assetUrl, e.loop, t, s]), Object(r.useEffect)(() => {
					if (s)
						if (e.hidden) s.stop();
						else if (e.prefersReducedAnimation) {
						const e = s.getDuration(!0);
						s.goToAndPlay(e, !0)
					} else s.goToAndPlay(0)
				}, [e.hidden, e.prefersReducedAnimation, s]);
				const o = Object(r.useCallback)(() => {
					s && s.goToAndPlay(0)
				}, [s]);
				return a.a.createElement("div", {
					style: {
						display: e.hidden ? "none" : "block"
					},
					ref: t,
					onClick: o
				})
			});
			t.a = d
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/interfaces.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Lottie = "lottie"
				}(n || (n = {}))
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "i", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				c = s.n(o),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class p extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: n
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
			var b = Object(r.b)(u, {})(p),
				h = s("./src/reddit/selectors/comments.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const E = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(f.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var v = Object(r.b)(() => Object(a.a)(E, h.j, (e, t) => Object.assign(Object.assign({}, e), {
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
			const g = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(f.J)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var O = Object(r.b)(() => Object(a.a)(g, e => e))(e => i.a.createElement(b, {
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
			var x = Object(r.b)(() => Object(a.c)({
					subreddit: f.T
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
				y = s("./src/reddit/selectors/posts.ts");
			var S = Object(r.b)(() => Object(a.c)({
				post: y.O,
				subredditOrProfile: y.bb,
				isModerator: (e, t) => {
					const s = Object(y.bb)(e, t);
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
			var C = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(y.bb)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(y.bb)(e, {
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
			var j = Object(r.b)(() => Object(a.c)({
				post: y.O,
				subredditOrProfile: y.bb,
				isModerator: (e, t) => {
					const s = Object(y.bb)(e, t);
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
			var N = Object(r.b)(() => Object(a.c)({
				subreddit: f.T
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
			var _ = Object(r.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
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
			var I = Object(r.b)(() => Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(f.T)(e, {
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
				return Z
			})), s.d(t, "RpanDUPresenceExperimentTitle", (function() {
				return X
			})), s.d(t, "RpanDescription", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./src/config.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/withMux/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				u = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				p = s("./src/reddit/actions/preferences.ts"),
				b = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				h = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				f = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				E = s("./src/reddit/constants/chat.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/helpers/overlay/index.ts"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				x = s("./src/reddit/helpers/trackers/rpan.ts"),
				y = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				S = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				j = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				A = s("./src/reddit/components/Comments/Comment/HighlightEffect/interfaces.ts"),
				R = s("./src/reddit/components/Comments/Comment/HighlightEffect/LottieEffect/index.tsx"),
				D = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/Flatlist/constants.ts"),
				L = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				P = s("./src/reddit/components/HlsVideo/index.tsx"),
				w = s("./src/reddit/components/OverflowMenu/index.tsx"),
				M = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostLeftRail/index.tsx"),
				k = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				U = s("./src/reddit/components/TrackingHelper/index.tsx"),
				H = s("./src/reddit/controls/Dropdown/Row.tsx"),
				B = s("./src/reddit/controls/InternalLink/index.tsx"),
				K = s("./src/reddit/controls/Score/index.tsx"),
				W = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				F = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				G = s.n(F),
				J = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				z = s.n(J);
			const {
				fbt: Q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $ = Object(c.a)(P.a, {
				playerName: "RPAN DU Video Player"
			}), q = Object(a.b)(() => Object(o.c)({
				autoplay: _.b,
				isLoggedIn: _.I,
				inRpanLoadingAnimation: C.c,
				isOverlayOpen: j.i,
				location: (e, t) => {
					let {
						listingName: s
					} = t;
					const n = Object(N.m)(e, {
						listingName: s
					});
					let i;
					if (n) {
						const e = Object(O.d)(n),
							t = Object(f.c)(s);
						i = "".concat(e).concat(t)
					} else {
						const e = s.replace(/^r\//, "");
						i = e === b.R ? Object(O.e)() : Object(O.g)(e)
					}
					return i
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
				totalLiveWatchers: N.n,
				inRpanDUPresenceExperiment: C.b
			}), (e, t) => ({
				onHideRpanUnit: () => e(Object(p.D)(t.listingName)),
				openOverlay: t => e(Object(g.a)(t)),
				subscribeConfig: () => e(h.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(h.a.subscribeStats(t)),
				subscribeStreams: () => e(h.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), Z = () => r.a.createElement("h3", {
				className: z.a.title
			}, Q._("Top broadcast", null, {
				hk: "HADCh"
			})), X = () => r.a.createElement("h3", {
				className: z.a.title
			}, Q._("Top livestream", null, {
				hk: "4od1tZ"
			})), ee = () => r.a.createElement("p", {
				className: z.a.description
			}, Q._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class te extends i.Component {
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
							sendEvent: n
						} = this.props;
						s(), n(Object(x.g)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: s
						} = this.props;
						t(s ? Object(x.h)(s, 1) : Object(x.h)()), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(x.h)()), this.openOverlay()
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
							stream: n,
							streamById: i
						} = this.props, r = n && n.post.id === t.id ? n : i(t.id);
						if (!r) return;
						const a = !s.sessionDurationMs ? x.A : x.w,
							o = {
								chatState: E.f.None,
								playerType: x.a.DU
							},
							c = a(r, Object.assign(Object.assign({}, s), o));
						this.props.sendEvent(c)
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
						autoplay: n,
						stream: i
					} = this.props, {
						isOverlayOpen: r,
						stream: a
					} = e, {
						isReady: o
					} = this.state, {
						isInFocus: c,
						isIntersecting: d,
						isReady: l
					} = t, {
						isVisible: m
					} = this, u = c && d && !r, p = !u && m, b = u && !m;
					p ? (this.subscribeConfig(), this.subscribeStreams()) : b && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const h = i && i.post.id,
						f = h !== (a && a.post.id),
						E = !!h;
					f && this.setState({
						isReady: !1
					});
					const v = f && !E || E && b;
					if (f && E && m || E && p ? this.subscribeStats() : v && this.unsubscribeStats(), n && s) {
						const e = this.getOrCreateVideoSessionManager(s),
							t = !l && o,
							n = E && (t && m || p && o),
							i = E && b;
						f && e.endSession(), n ? e.startSession({
							id: h
						}) : i && e.pauseSession()
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === v.g.Classic ? this.renderClassicContent() : e === v.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return r.a.createElement("div", {
						className: Object(d.a)(z.a.container, {
							[G.a.largeAndMediumPostStyles]: e === v.g.Large || e === v.g.Medium,
							[G.a.classicPostStyles]: e === v.g.Classic,
							[G.a.compactPostStyles]: e === v.g.Compact,
							[z.a.large]: e === v.g.Large || e === v.g.Medium,
							[z.a.classic]: e === v.g.Classic,
							[z.a.compact]: e === v.g.Compact
						}, this.props.className),
						ref: this.observableElement
					}, e !== v.g.Large && r.a.createElement(V.b, {
						className: z.a.leftRail,
						withoutComputedStyles: e === v.g.Compact
					}, r.a.createElement(se, {
						isVertical: !0
					}), e === v.g.Compact && r.a.createElement(se, {
						isVertical: !1
					})), r.a.createElement(M.a, {
						className: z.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return r.a.createElement("div", {
						className: z.a.titleAndDescriptionContainer
					}, r.a.createElement(B.a, {
						to: this.props.location
					}, this.props.inRpanDUPresenceExperiment ? r.a.createElement(X, null) : r.a.createElement(Z, null), e && r.a.createElement(ee, null)))
				}
				renderLargeContent() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: z.a.header
					}, this.renderTitleAndDescription(), r.a.createElement("div", {
						className: z.a.flatListContainer
					}, r.a.createElement(re, {
						onClick: this.onHideUnitClicked
					}))), r.a.createElement("div", {
						className: z.a.body
					}, r.a.createElement(B.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: z.a.previewLink,
						tabIndex: 0
					}, r.a.createElement("div", {
						className: z.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return r.a.createElement("div", {
						className: z.a.body
					}, r.a.createElement(B.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, r.a.createElement("div", {
						className: z.a.thumbnailContainer
					}, this.renderThumbnail())), r.a.createElement("div", {
						className: z.a.main
					}, this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: z.a.flatListContainer
					}, r.a.createElement(ne, {
						onClick: this.onHeaderClicked
					}), r.a.createElement(D.a, {
						className: z.a.flatlistSeparator
					}), r.a.createElement("div", null, r.a.createElement(ie, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return r.a.createElement("div", {
						className: z.a.body
					}, r.a.createElement("div", {
						className: z.a.main
					}, r.a.createElement(ne, {
						onClick: this.onHeaderClicked
					}), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: z.a.flatListContainer
					}, r.a.createElement(re, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return r.a.createElement("div", {
						className: Object(d.a)(z.a.infoContainer, {
							[z.a.inDuPresenceExperiment]: this.props.inRpanDUPresenceExperiment
						})
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount(), this.props.inRpanDUPresenceExperiment && this.renderLivestreamTitle(), this.props.inRpanDUPresenceExperiment && this.renderAnimatedUpvote())
				}
				renderAnimatedUpvote() {
					return r.a.createElement("div", {
						className: z.a.upvoteAnimation
					}, r.a.createElement(R.a, {
						type: A.a.Lottie,
						assetUrl: "".concat(n.a.assetPath, "/img/publicAccessNetwork/upvote-animation.json"),
						hidden: !1,
						prefersReducedAnimation: !1,
						loop: this.props.autoplay
					}))
				}
				renderLivestreamTitle() {
					var e;
					if (null === (e = this.props.stream) || void 0 === e ? void 0 : e.post.title) return r.a.createElement("div", {
						className: z.a.broadcastTitle
					}, this.props.stream.post.title)
				}
				renderExpandIcon() {
					return r.a.createElement("div", {
						className: z.a.bigExpando
					}, r.a.createElement(W.a, {
						className: z.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? r.a.createElement("span", {
						className: Object(d.a)(z.a.liveStatus, {
							[z.a.inDuPresenceExperiment]: this.props.inRpanDUPresenceExperiment
						})
					}, Q._("Live", null, {
						hk: "TwJSs"
					})) : null
				}
				renderWatcherCount() {
					if (!this.isLive) return null;
					const e = Math.max(1, this.props.totalLiveWatchers);
					return r.a.createElement("span", {
						className: Object(d.a)(z.a.watchingCount, {
							[z.a.inDuPresenceExperiment]: this.props.inRpanDUPresenceExperiment
						})
					}, Q._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [Q._plural(e, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					const e = this.props.inRpanLoadingAnimation ? z.a.loading : z.a.noise;
					return r.a.createElement("div", {
						className: Object(d.a)(z.a.thumbnail, {
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
						n = t.post.id,
						i = t.post.title;
					return r.a.createElement($, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: s,
						muxVideoId: n,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: i,
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
					e && l.a(e, this.handleIntersectionEvent)
				}
				unsubscribeIntersectionObserver() {
					const {
						current: e
					} = this.observableElement;
					e && l.b(e)
				}
				subscribeVisibilityChange() {
					this.visibilityChangeId = m.a.subscribe(this.handleVisibilityChange)
				}
				unsubscribeVisibilityChange() {
					this.visibilityChangeId && m.a.unsubscribe(this.visibilityChangeId)
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
			const se = e => r.a.createElement(I.a, {
					className: Object(d.a)({
						[z.a.verticalVotes]: e.isVertical,
						[z.a.horizontalVotes]: !e.isVertical
					})
				}, r.a.createElement(K.a, {
					className: z.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: S.a.notVoted
				})),
				ne = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: z.a.expandoButton,
						onClick: t
					}, r.a.createElement(W.a, {
						className: z.a.expandoIcon
					}))
				},
				ie = e => {
					let {
						onClick: t,
						isLoggedIn: s
					} = e;
					return r.a.createElement(L.a, {
						displayText: Q._("Show me less of this", null, {
							hk: "4t8AKC"
						}),
						flatlistItem: T.a.Hide,
						isLoggedIn: !!s,
						isUserOp: !1,
						onClick: t,
						noBreakpoints: !0
					}, r.a.createElement(k.b, null))
				},
				re = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement(w.b, {
						className: z.a.overflowMenu,
						dropdownClassName: z.a.overflowDropdown,
						dropdownId: "rpan-du-overflow"
					}, r.a.createElement(H.b, {
						className: z.a.overflowItem,
						displayText: Q._("Show me less of this", null, {
							hk: "2c4uFK"
						}),
						iconWrapperClassName: z.a.overflowItemIconWrapper,
						textClassName: z.a.overflowItemText,
						onClick: t
					}, r.a.createElement(Y.a, {
						className: z.a.hideIcon
					})))
				};
			t.default = q(Object(U.c)(te))
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = s.n(a);
			const c = e => i.a.createElement("span", {
				className: Object(r.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return i.a.createElement(c, {
					className: Object(r.a)(o.a.metaSeparator, t),
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
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => i.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("admin"), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => i.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.fc89782e09073c1e6d1c.js.map