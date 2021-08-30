// https://www.redditstatic.com/desktop2x/RpanListingUnit.e078e201479b7539aeaf.js
// Retrieved at 8/30/2021, 10:30:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return r(e, (function(e, r, s) {
					return n = !!t(e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = o(e) ? r : s;
				return n && a(e, t, n) && (t = void 0), c(e, i(t, 3))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/cache/localStorage/index.ts"),
				c = n("./src/lib/combineRefs/index.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => n.e("MuxEmbed").then(n.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(o.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Tc
				});
				return Object(u.ke)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Uc
				});
				return Object(u.ke)(t) ? void 0 : t
			}, (e, t) => e === u.Vc.Enabled && t === u.Vc.Enabled);
			var h = n("./src/config.ts");
			var b = n("./src/reddit/selectors/user.ts");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						n = t.length,
						r = new Uint32Array(e);
					return crypto.getRandomValues(r), Array.from(r).map(e => t.charAt(e % n)).join("")
				},
				_ = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				E = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var g;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(g || (g = {}));
			const v = async e => (async (e, t) => {
				const n = (new TextEncoder).encode(t),
					r = await crypto.subtle.digest(e, n);
				return Array.from(new Uint8Array(r)).map(E).join("")
			})(g.SHA1, e);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				I = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${h.a.buildNumber} ${h.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: n,
					debug: d,
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: E,
					localStorageViewerUserIdKey: g,
					playerName: C,
					playerVersion: y,
					respectDoNotTrack: T,
					saltLength: A,
					saltTimeToLive: x,
					viewerUserIdLength: R
				} = {
					...I,
					...t
				};
				class D extends r.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(r.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
					componentWillUnmount() {
						this.handleDashDestroy(), this.handleHlsDestroy()
					}
					combineExternalVideoRef(e) {
						return e ? Object(c.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const {
							forwardedRef: t,
							...n
						} = this.props, r = n;
						return s.a.createElement(e, S({}, r, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: t,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
						} catch (n) {
							console.error(n)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (n) {
							console.error(n)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
							if (this.isMonitoring) {
								if (this.video) {
									const t = this.getVideoData();
									e.emit(this.video, "videochange", t)
								}
							} else {
								const t = await this.getMuxData();
								this.video && (e.monitor(this.video, t), this.isMonitoring = !0)
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || D.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							n = `${_()}${e}${t}`;
						return (await v(n)).substr(0, D.VIEWER_USER_ID_LENGTH)
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
							n = this.getThirdPartyLibData();
						return {
							debug: D.DEBUG,
							disableCookies: D.DISABLE_COOKIES,
							respectDoNotTrack: D.RESPECT_DO_NOT_TRACK,
							...n,
							data: {
								env_key: D.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: D.PLAYER_NAME,
								player_version: D.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = D.LOCAL_STORAGE_SALT_KEY;
						let t = Object(a.a)(e);
						return t || (t = f(D.SALT_LENGTH), Object(a.b)(e, t, D.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return {
							...this.getDashInstanceData(),
							...this.getHlsInstanceData()
						}
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: n,
							muxVideoTitle: r
						} = this.props;
						return {
							video_duration: n ? D.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: n ? D.STREAM_TYPE_LIVE : D.STREAM_TYPE_ON_DEMAND,
							video_title: r,
							player_software_version: this.getDashInstanceData() ? h.a.dashVersion : this.getHlsInstanceData() ? h.a.hlsVersion : null
						}
					}
				}
				D.displayName = O(e), D.ANONYMOUS_USER_ID = n, D.DEBUG = d, D.DISABLE_COOKIES = u, D.DURATION_LIVE = 1 / 0, D.ENV_KEY = m, D.LOCAL_STORAGE_SALT_KEY = E, D.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, D.PLAYER_NAME = C, D.PLAYER_VERSION = y, D.RESPECT_DO_NOT_TRACK = T, D.SALT_LENGTH = A, D.SALT_TIME_TO_LIVE = x, D.STREAM_TYPE_LIVE = "live", D.STREAM_TYPE_ON_DEMAND = "on-demand", D.VIEWER_USER_ID_LENGTH = R;
				const j = Object(r.forwardRef)((e, t) => s.a.createElement(D, S({}, e, {
						forwardedRef: t
					}))),
					w = Object(o.c)({
						redditUserId: b.h,
						isMuxEnabled: p
					});
				return Object(i.b)(w, null, null, {
					forwardRef: !0
				})(j)
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/lodash/every.js"),
				s = n.n(r);

			function i(e) {
				let t = null,
					n = null;
				return (...r) => (null !== t && r.length === t.length && s()(r, (e, n) => e === t[n]) || (t = r, n = e(...r)), n)
			}
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				i = "MOD_PAGE_EVENT_POSTS_PENDING",
				o = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			}));
			var r = n("./src/lib/loadableAction/index.ts");
			const s = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				i = Object(r.a)(s("awardSheetInfoRequested")),
				o = Object(r.a)(s("manageableAwardsRequested")),
				a = Object(r.a)(s("createCommunityAward")),
				c = Object(r.a)(s("createGlobalAward")),
				d = Object(r.a)(s("createModAward")),
				l = Object(r.a)(s("createAwardFailed")),
				u = Object(r.a)(s("createAwardSuccessful")),
				m = Object(r.a)(s("removeCommunityAward")),
				p = Object(r.a)(s("disableAwardinCommunity")),
				h = Object(r.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "f", (function() {
				return C
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/postParentMessage/index.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(r.a)(b.L),
				_ = Object(r.a)(b.f),
				E = () => async (e, t) => {
					const r = t();
					e(_()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(s()(r))
				}, g = Object(r.a)(b.K), v = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (r, s) => {
					const a = s(),
						c = e ? Object(u.a)(a, e) : void 0;
					r(g({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), r(Object(l.h)(o.a.GOLD_GILD_MODAL));
					const h = Object(p.J)(a, {
						thingId: n
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(i.a)(n)) {
						const e = Object(m.I)(a, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, S = Object(r.a)(b.e), O = Object(r.a)(b.J), I = () => async (e, t) => {
					const r = t(),
						i = Object(a.d)(r);
					if (Object(a.g)(r)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(S()), e(Object(l.g)(o.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(i)(r)), Object(c.b)(c.a.GildingFlow)
				}, C = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return r
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			}));
			const r = "SUBREDDIT__FLAIRED_USERS_PENDING",
				s = "SUBREDDIT__FLAIRED_USERS_LOADED",
				i = "SUBREDDIT__FLAIRED_USERS_FAILED",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				h = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "o", (function() {
				return O
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				i = "CREATE_COLLECTION_FAILED",
				o = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				_ = "REORDER_COLLECTION_PENDING",
				E = "REORDER_COLLECTION_SUCCESS",
				g = "REORDER_COLLECTION_FAILED",
				v = "UPDATE_COLLECTION_LAYOUT_PENDING",
				S = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				O = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "k", (function() {
				return v
			}));
			const r = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				v = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			var a = Object(i.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~RealtimeGQLSubscriptionAsync"), n.e("RealtimeGQLSubscriptionAsync")]).then(n.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
				}),
				c = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = n("./src/reddit/hooks/usePrevious.ts");
			const l = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var u = n("./src/reddit/components/CountAnimation/index.m.less"),
				m = n.n(u);
			var p;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(p || (p = {}));
			const h = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: n,
					incrementDelta: i,
					initialDelay: o,
					initialDisplayCount: u,
					inViewPortAnimatingCallbackOnce: p,
					isLoadTestOnly: b,
					onDataCB: f,
					postId: _,
					queryKey: E,
					queryVariables: g,
					shouldDisjointAnimation: v,
					subsequentRecurringDelay: S
				} = e, [O, I] = Object(r.useState)(!1), [C, y] = Object(r.useState)(!0), [T, A] = Object(r.useState)([]), [x, R] = Object(r.useState)(l(u).reverse()), D = Object(r.useRef)(!1), j = Object(r.useRef)(null), w = Object(r.useRef)(e => {}), N = Object(r.useRef)();
				w.current = Object(r.useCallback)(e => {
					let n = e || i();
					const r = [...x].reverse().join("");
					let s = parseInt(r) + n;
					s > t && (n = t - parseInt(r), s = t);
					const o = l(s).reverse();
					I(!1), A(x), R(o), y(!1), N.current = setTimeout(() => {
						I(!0)
					}, 0)
				}, [t, i, x]);
				const L = Object(r.useRef)(() => {}),
					k = Object(r.useRef)(),
					P = Object(r.useRef)();
				L.current = Object(r.useCallback)(() => {
					P.current = setTimeout(() => {
						w.current();
						const e = [...T].reverse().join("");
						parseInt(e) < t && L.current()
					}, S())
				}, [t, S, T]);
				const U = Object(r.useRef)(0),
					F = Object(r.useRef)(!1),
					M = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, r = 1 !== n;
							t ? (F.current = !0, D.current || (D.current = !0, k.current = setTimeout(() => {
								w.current(), L.current()
							}, o())), U.current > 0 && (w.current(U.current), U.current = 0)) : r && (F.current = !1)
						})
					}, []);
				Object(c.a)(j, M);
				const [V, G] = Object(r.useState)(!1), H = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? G(!0) : r && G(!1)
					})
				}, []), Y = Object(r.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(c.a)(j, H, Y.current);
				const B = Object(d.a)(t);
				Object(r.useEffect)(() => {
					if (void 0 !== B && B !== t) {
						const e = t - B;
						F.current ? (w.current(e), p && p()) : U.current += e
					}
					return () => {
						clearTimeout(k.current), clearTimeout(P.current), clearTimeout(N.current)
					}
				}, [t]);
				const W = Object(r.useCallback)(() => y(!0), [y]),
					K = 0 === T.length,
					q = C || K,
					z = Object(r.useRef)(((e, t) => `${t}_${e}_count_anim`)(_, n));
				return s.a.createElement(s.a.Fragment, null, !b && s.a.createElement("div", {
					className: m.a.countAnimation
				}, x.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const r = Math.abs(t),
							s = [n];
						if (n === r) return s;
						let i = !0;
						for (; i;) ++n > 9 && (n = 0), s.push(n), n === r && (i = !1);
						return s
					})(T[t] || 0, e);
					return s.a.createElement("span", {
						"aria-hidden": !0,
						className: m.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: W,
						style: O && T.length > 0 && !C ? {
							transform: `translateY(-${v&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(v?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, q ? s.a.createElement("span", {
						className: m.a.digitDelta
					}, e) : n.map((e, t) => {
						const r = 0 === t || t === n.length - 1;
						if (!v || v && r) return s.a.createElement("span", {
							className: m.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), s.a.createElement("span", {
					className: m.a.srOnly,
					role: "screen-reader"
				}, [...x].reverse().join(""))), s.a.createElement("span", {
					ref: j
				}), V && s.a.createElement(a, {
					variables: g,
					onData: b ? h : f,
					queryKey: E,
					uniqueKey: z.current
				}))
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => o.a.createElement(a.i, {
				className: l.a.modalHeader
			}, o.a.createElement(a.q, null, e.title), o.a.createElement(c.a, {
				onClick: e.onClosePressed || s.a
			}, o.a.createElement(a.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				i = n.n(s);
			const o = r.a.div("Wrapper", i.a);
			t.a = o
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = o.a.span("Placeholder", d.a),
				u = o.a.div("SelectedFlair", d.a),
				m = o.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? i.a.createElement(u, null, i.a.createElement(l, null, r.fbt._("{placeholder}", [r.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), i.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : i.a.createElement(u, null, r.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/lodash/once.js"),
				s = n.n(r),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => o.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = s()((e = p) => Object(a.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				b = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				_ = n("./src/reddit/controls/RadioInput/index.tsx"),
				E = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				v = n("./src/reddit/icons/svgs/Search/index.tsx"),
				S = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				O = n.n(S);
			class I extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: s
					} = this.state, o = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), a = !!n && o.some(e => e.id === n);
					return i.a.createElement("div", {
						className: O.a.container
					}, i.a.createElement("div", {
						className: O.a.searchBoxWrapper
					}, i.a.createElement("input", {
						className: O.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: r.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), i.a.createElement(v.a, {
						className: O.a.searchIcon
					})), i.a.createElement(_.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, o.map((e, t) => {
						const r = Object(u.c)(e),
							s = n === e.id || !a && 0 === t;
						return i.a.createElement(E.a, {
							className: O.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, i.a.createElement(f.b, {
							className: O.a.flairComponent,
							flair: r,
							forceSmallEmojis: !0
						}), e.textEditable && i.a.createElement(g.a, {
							className: O.a.pencil
						}))
					})))
				}
			}
			var C = n("./src/reddit/components/FlairSearch/index.m.less"),
				y = n.n(C);
			const T = Object(d.a)(e => e && Object(u.c)(e)),
				A = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: h.g
				}),
				x = Object(o.b)(A);
			t.a = x(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: s,
					onChange: o,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: h,
					isModerator: f
				} = e, _ = Object(p.a)(), E = d && n && n.templateId && d[n.templateId] || void 0, g = Object(b.a)(), v = n || T(E);
				return i.a.createElement("div", {
					className: Object(c.a)(s, y.a.container)
				}, d && l && i.a.createElement(I, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							_(Object(m.b)({
								userFlair: t
							})), o(n)
						}
					},
					selectedTemplateId: E ? E.id : "",
					templateIds: l,
					templates: d
				}), v && E && (f || E.textEditable) && i.a.createElement("div", {
					className: y.a.flairEditSection
				}, i.a.createElement("div", {
					className: y.a.editLabel
				}, r.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && i.a.createElement("div", {
					className: y.a.restrictionHintText
				}, Object(u.k)(E)), i.a.createElement(g, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: v,
					flairTemplate: E,
					flairTemplateType: t,
					isFlairModOnly: E.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), o(n)
					},
					subredditId: a
				})))
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "i", (function() {
				return x
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				c = n.n(a),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends r.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
								...r
							}
						} = this;
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
					return e.consumers.length ? s.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && s.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				h = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const _ = (e, t) => {
				const n = Object(b.a)(e, t),
					r = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var E = Object(i.b)(() => Object(o.a)(_, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => s.a.createElement(p, {
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
				const n = Object(b.a)(e, t),
					r = Object(f.I)(e, t);
				return {
					comment: n,
					isModerator: !(!r || !r.name) && !!e.moderatingSubreddits[r.name],
					subredditOrProfile: r
				}
			};
			var v = Object(i.b)(() => Object(o.a)(g, e => e))(e => s.a.createElement(p, {
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
			var S = Object(i.b)(() => Object(o.c)({
					subreddit: f.T
				}))(e => s.a.createElement(p, {
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
				O = n("./src/reddit/hooks/usePostContext.ts");
			var I = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(O.a)(), i = Object(r.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					created: t.created,
					numComments: t.numComments,
					distinguishType: t.distinguishType,
					domain: t.source && t.source.displayText,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					sourceUrl: t.source && t.source.url,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return s.a.createElement(p, {
					className: e.className,
					type: "post",
					data: i
				})
			};
			var C = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: i
				} = Object(O.a)(), o = Object(r.useMemo)(() => ({
					author: t.author,
					isModerator: i,
					post: {
						id: t.id
					},
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {}
				}), [t, n, i]);
				return s.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: o
				})
			};
			var y = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(O.a)(), i = Object(r.useMemo)(() => ({
					author: t.author,
					approvedAtUTC: t.approvedAtUTC,
					approvedBy: t.approvedBy,
					bannedAtUTC: t.bannedAtUTC,
					distinguishType: t.distinguishType,
					flair: t.flair,
					id: t.id,
					isApproved: t.isApproved,
					isRemoved: t.isRemoved,
					isSpam: t.isSpam,
					media: t.media,
					numComments: t.numComments,
					permalink: t.permalink,
					removedBy: t.bannedBy,
					subreddit: n ? {
						id: n.id,
						name: n.name,
						type: n.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, n]);
				return s.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: i
				})
			};
			var T = Object(i.b)(() => Object(o.c)({
				subreddit: f.T
			}))(e => s.a.createElement(p, {
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
			var A = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
					identifier: t
				})
			}))(e => s.a.createElement(p, {
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
			var x = Object(i.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.T)(e, {
					subredditId: t
				}) : null
			}))(e => s.a.createElement(p, {
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
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/lodash/isEqual.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/flair.ts"),
				o = n("./src/reddit/helpers/flair.ts"),
				a = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const r = e && t.templateId ? e[t.templateId] : void 0;
				if (!r) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const a = Object(o.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : a > i.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(o.n)(t) && !Object(o.r)(r) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : s()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "LivestreamTitle", (function() {
				return ee
			})), n.d(t, "RpanDescription", (function() {
				return te
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/telemetry/index.ts"),
				c = n("./src/higherOrderComponents/withMux/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/localStorageAvailable/index.ts"),
				m = n("./src/lib/onFocusAndVisibilityChange/index.ts"),
				p = n("./src/lib/VideoSession/VideoSessionManager.ts"),
				h = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				f = n("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				_ = n("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				E = n("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				g = n("./src/reddit/constants/chat.ts"),
				v = n("./src/reddit/constants/postLayout.ts"),
				S = n("./src/reddit/helpers/localStorage/index.ts"),
				O = n("./src/reddit/helpers/overlay/index.ts"),
				I = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				C = n("./src/reddit/helpers/trackers/rpan.ts"),
				y = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				T = n("./src/reddit/models/Vote/index.ts"),
				A = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				x = n("./src/reddit/selectors/platform.ts"),
				R = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				D = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				w = n("./src/reddit/components/Flatlist/index.tsx"),
				N = n("./src/reddit/components/Flatlist/constants.ts"),
				L = n("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				k = n("./src/reddit/components/HlsVideo/index.tsx"),
				P = n("./src/reddit/components/OverflowMenu/index.tsx"),
				U = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = n("./src/reddit/components/PostLeftRail/index.tsx"),
				M = n("./src/reddit/components/TrackingHelper/index.tsx"),
				V = n("./src/reddit/controls/Dropdown/Row.tsx"),
				G = n("./src/reddit/controls/InternalLink/index.tsx"),
				H = n("./src/reddit/controls/Score/index.tsx"),
				Y = n("./src/reddit/icons/fonts/index.tsx"),
				B = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = n.n(B),
				K = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				q = n.n(K);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = 20, J = l.kc, X = l.kc, Q = Object(c.a)(k.a, {
				playerName: "RPAN DU Video Player"
			}), $ = Object(i.b)(() => Object(o.c)({
				autoplay: D.b,
				isLoggedIn: D.J,
				isOverlayOpen: x.h,
				location: (e, {
					listingName: t
				}) => {
					const n = Object(R.m)(e, {
						listingName: t
					});
					let r;
					if (n) {
						r = `${Object(I.d)(n)}${Object(_.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						r = e === b.R ? Object(I.e)() : Object(I.f)(e)
					}
					return r
				},
				stream: (e, {
					listingName: t
				}) => Object(R.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(R.l)(e, t),
				rpanDuThresholdVariant: A.i,
				inRpanDUPreloadExperiment: A.b,
				inRpanDuTargetingExperiment: A.c
			}), (e, t) => ({
				onHideRpanUnit: (n, r) => e(Object(h.B)(t.listingName, n, {
					showToast: r.showToast
				})),
				openOverlay: t => e(Object(O.a)(t)),
				subscribeConfig: () => e(f.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(f.a.subscribeStats(t)),
				subscribeStreams: () => e(f.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), ee = () => s.a.createElement("h3", {
				className: q.a.title
			}, z._("Top livestream", null, {
				hk: "4od1tZ"
			})), te = () => s.a.createElement("p", {
				className: q.a.description
			}, z._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class ne extends r.Component {
				constructor(e) {
					super(e), this.observableElement = s.a.createRef(), this.videoRef = s.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(S.ab)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(S.N)());
						if (e) {
							if (Date.now() - e >= J) {
								Object(S.ab)();
								const e = 30 * l.z,
									t = Date.now() - e + X;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(S.Sb)(Date.now())
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
							onHideRpanUnit: n,
							sendEvent: r
						} = this.props;
						n(Date.now(), {
							showToast: !0
						}), r(Object(C.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: n
						} = this.props;
						t(n ? Object(C.j)(n, 1) : Object(C.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(C.j)()), this.openOverlay()
					}, this.handleVisibilityChange = ({
						documentInFocus: e
					}) => {
						this.setState({
							isInFocus: e
						})
					}, this.handleHeartbeat = ({
						meta: e,
						stats: t
					}) => {
						const {
							stream: n,
							streamById: r
						} = this.props, s = n && n.post.id === e.id ? n : r(e.id);
						if (!s) return;
						const i = !t.sessionDurationMs ? C.D : C.z,
							o = {
								chatState: g.a.None,
								playerType: C.a.DU
							},
							a = i(s, {
								...t,
								...o
							});
						this.props.sendEvent(a)
					}, this.state = {
						isInFocus: !0,
						isIntersecting: !1,
						isReady: !1,
						isInLoadingIntersection: !1
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
				get isLoadable() {
					return this.state.isInFocus && this.state.isInLoadingIntersection && !this.props.isOverlayOpen
				}
				get video() {
					return this.videoRef.current
				}
				startTimeTracker() {
					a.c.start(this.timerId)
				}
				endTimeTracker() {
					if (this.timerId && a.c.has(this.timerId)) {
						Math.round(a.c.end(this.timerId)) / 1e3 >= Z ? this.handleSuccessfulPlayback() : this.handleUnsuccessfulPlayback()
					}
				}
				componentDidMount() {
					this.subscribeIntersectionObserver(), this.subscribeVisibilityChange()
				}
				componentDidUpdate(e, t) {
					const {
						video: n
					} = this, {
						autoplay: r,
						stream: s,
						inRpanDUPreloadExperiment: i
					} = this.props, {
						isOverlayOpen: o,
						stream: a
					} = e, {
						isReady: c
					} = this.state, {
						isInFocus: d,
						isIntersecting: l,
						isReady: m,
						isInLoadingIntersection: p
					} = t, {
						isVisible: h,
						isLoadable: b
					} = this, f = d && l && !o, _ = !f && h, E = f && !h, g = d && p && !o, v = i ? g && !b : E;
					(i ? !g && b : _) ? (this.subscribeConfig(), this.subscribeStreams()) : v && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const S = s && s.post.id,
						O = S !== (a && a.post.id),
						I = !!S;
					O && this.setState({
						isReady: !1
					});
					const C = O && !I || I && E;
					if (O && I && h || I && _ ? this.subscribeStats() : C && this.unsubscribeStats(), r && n) {
						const e = this.getOrCreateVideoSessionManager(n),
							t = !m && c,
							r = I && (t && h || _ && c),
							s = I && E;
						O && e.endSession(), r ? (e.startSession({
							id: S
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : s && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === v.g.Classic ? this.renderClassicContent() : e === v.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return s.a.createElement("div", {
						className: Object(d.a)(q.a.container, {
							[W.a.largeAndMediumPostStyles]: e === v.g.Large || e === v.g.Medium,
							[W.a.classicPostStyles]: e === v.g.Classic,
							[W.a.compactPostStyles]: e === v.g.Compact,
							[q.a.large]: e === v.g.Large || e === v.g.Medium,
							[q.a.classic]: e === v.g.Classic,
							[q.a.compact]: e === v.g.Compact
						}, this.props.className)
					}, e !== v.g.Large && s.a.createElement(F.b, {
						className: q.a.leftRail,
						withoutComputedStyles: e === v.g.Compact
					}, s.a.createElement(re, {
						isVertical: !0
					}), e === v.g.Compact && s.a.createElement(re, {
						isVertical: !1
					})), s.a.createElement(U.a, {
						className: q.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return s.a.createElement("div", {
						className: q.a.titleAndDescriptionContainer
					}, s.a.createElement(G.a, {
						to: this.props.location
					}, s.a.createElement(ee, null), e && s.a.createElement(te, null)))
				}
				renderLargeContent() {
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: q.a.header
					}, this.renderTitleAndDescription(), s.a.createElement("div", {
						className: q.a.flatListContainer
					}, s.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))), s.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, s.a.createElement(G.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: q.a.previewLink,
						tabIndex: 0
					}, s.a.createElement("div", {
						className: q.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return s.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, s.a.createElement(G.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, s.a.createElement("div", {
						className: q.a.thumbnailContainer
					}, this.renderThumbnail())), s.a.createElement("div", {
						className: q.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), s.a.createElement("div", {
						className: q.a.flatListContainer
					}, s.a.createElement(se, {
						onClick: this.onHeaderClicked
					}), s.a.createElement(w.a, {
						className: q.a.flatlistSeparator
					}), s.a.createElement("div", null, s.a.createElement(ie, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return s.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, s.a.createElement("div", {
						className: q.a.main
					}, s.a.createElement(se, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), s.a.createElement("div", {
						className: q.a.flatListContainer
					}, s.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return s.a.createElement("div", {
						className: q.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return s.a.createElement("div", {
						className: q.a.bigExpando
					}, s.a.createElement(Y.a, {
						name: "expand",
						className: q.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? s.a.createElement("span", {
						className: q.a.liveStatus
					}, s.a.createElement(E.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return s.a.createElement("span", {
						className: q.a.watchingCount
					}, z._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [z._plural(t, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return s.a.createElement("div", {
						className: Object(d.a)(q.a.thumbnail, {
							[q.a.loading]: !this.state.isReady
						})
					}, this.renderVideo())
				}
				renderVideo() {
					const {
						autoplay: e,
						stream: t
					} = this.props;
					if (!t) return;
					const n = 1e3 * t.broadcast_time,
						r = t.post.id,
						i = t.post.title;
					return s.a.createElement(Q, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: n,
						muxVideoId: r,
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
					} = this.observableElement, {
						rpanDuThresholdVariant: t,
						inRpanDUPreloadExperiment: n
					} = this.props;
					e && (this.intersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isIntersecting: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(A.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(A.h)(t) : .01,
						rootMargin: n ? "400%" : "0px"
					}), this.loadingIntersectionObserver.observe(e))
				}
				unsubscribeIntersectionObserver() {
					var e, t;
					null === (e = this.intersectionObserver) || void 0 === e || e.disconnect(), null === (t = this.loadingIntersectionObserver) || void 0 === t || t.disconnect()
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
					} = this.props, n = e && e.post.id;
					this.unsubscribeStats(), n && t(n).then(e => this._unsubscribeStats = e)
				}
				unsubscribeStats() {
					this._unsubscribeStats && (this._unsubscribeStats(), delete this._unsubscribeStats)
				}
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new p.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const re = e => s.a.createElement(j.a, {
					className: Object(d.a)({
						[q.a.verticalVotes]: e.isVertical,
						[q.a.horizontalVotes]: !e.isVertical
					})
				}, s.a.createElement(H.a, {
					className: q.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: T.a.notVoted
				})),
				se = ({
					onClick: e
				}) => s.a.createElement("button", {
					className: q.a.expandoButton,
					onClick: e
				}, s.a.createElement(Y.a, {
					name: "expand",
					className: q.a.expandoIcon
				})),
				ie = ({
					onClick: e,
					isLoggedIn: t
				}) => s.a.createElement(L.a, {
					displayText: z._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: N.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, s.a.createElement(Y.a, {
					name: "hide"
				})),
				oe = ({
					onClick: e
				}) => s.a.createElement(P.b, {
					className: q.a.overflowMenu,
					dropdownClassName: q.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, s.a.createElement(V.b, {
					className: q.a.overflowItem,
					displayText: z._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: q.a.overflowItemIconWrapper,
					textClassName: q.a.overflowItemText,
					onClick: e
				}, s.a.createElement(Y.a, {
					name: "hide"
				})));
			t.default = $(Object(M.c)(ne))
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/MetaSeparator/index.m.less"),
				a = n.n(o);
			const c = e => s.a.createElement("span", {
				className: Object(i.a)(a.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => s.a.createElement(c, {
				className: Object(i.a)(a.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== o.b.Enter && e.key !== o.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : s.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(i.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(a.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/reddit/constants/keycodes.ts");
			class o extends s.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: r
						} = this.state;
						if (t) return;
						const s = e.key === i.b.ArrowUp,
							o = e.key === i.b.ArrowDown;
						if (s || o) {
							const t = this.getValues();
							if (!t.length) return;
							const i = r ? t.indexOf(r) : 0,
								o = t[((s ? i - 1 : i + 1) + t.length) % t.length];
							n(o), this.setState({
								value: o
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (n, r) => {
						const i = 0 === r,
							o = n.props.value === t,
							a = null !== t ? o ? 0 : -1 : i ? 0 : -1;
						return s.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: o,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/constants/colors.ts"),
				p = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				v = n("./src/reddit/selectors/meta.ts"),
				S = n("./src/reddit/controls/Score/index.m.less"),
				O = n.n(S);
			const I = e => e.voteState === E.a.downvoted ? Object(_.a)(e).voteText.downvote : e.voteState === E.a.upvoted ? Object(_.a)(e).voteText.upvote : Object(h.a)(Object(p.a)(e)),
				C = () => 0,
				y = Object(d.b)(e => ({
					locale: Object(v.i)(e)
				})),
				T = Object(i.a)(e => {
					const t = {
							color: e.light ? m.b.lightboxHeaderText : I(e)
						},
						{
							score: n,
							postId: i = "",
							locale: p,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: _
						} = e,
						E = Object(d.d)(),
						v = null == p ? void 0 : p.startsWith("en"),
						S = e.isScoreHidden ? v ? r.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: O.a.dot
						}, "•") : Object(o.b)(n),
						y = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && E(Object(l.I)({
								postId: i,
								delta: t
							}))
						}, [E, i]),
						T = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: i
								}
							}
						}),
						A = Object(f.a)(),
						x = Object(a.useCallback)(() => {
							A(Object(b.m)(i))
						}, [A, i]),
						R = !e.isScoreHidden && h && n < g.a;
					return c.a.createElement("div", {
						className: Object(s.a)(O.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, (R || _) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: n,
						countToUpperBound: n,
						initialDelay: C,
						subsequentRecurringDelay: C,
						incrementDelta: C,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: x,
						postId: i,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: T.current,
						onDataCB: y,
						isLoadTestOnly: _ && !R
					})), !R && S)
				});
			t.a = y(T)
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(r.e)(n));
				return t
			}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.G.NO_STRIPE_SUBSCRIPTION:
							case r.G.USER_DOESNT_EXIST:
							case r.G.USER_REQUIRED_ERROR:
							case r.G.VALIDATION_ERROR:
								return e;
							case r.G.NO_USER:
							case r.G.NO_TEXT:
							case r.G.NO_URL:
								return r.G.VALIDATION_ERROR;
							case r.G.CREDIT_CARD_FAILURE:
							case r.G.CREDIT_CARD_FAILURE_GENERIC:
								return r.G.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.G.VALIDATION_ERROR
				},
				i = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				o = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: i(e)
					} : e
				};
			t.a = i
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return _
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === r.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(o.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, r) => s => ({
					...a(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "image",
					actionInfo: r ? {
						reason: r
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: n ? c(n) : null
				}),
				h = (e, t, n) => r => ({
					...a(r),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => r => ({
					...a(r),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: s.profileById(r, t),
					subreddit: s.subredditById(r, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				_ = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return m
			})), n.d(t, "clickRpanGiveAward", (function() {
				return p
			})), n.d(t, "clickAddAward", (function() {
				return h
			})), n.d(t, "clickHideAward", (function() {
				return b
			})), n.d(t, "clickConfirmHideAward", (function() {
				return f
			})), n.d(t, "clickCancelHideAward", (function() {
				return _
			})), n.d(t, "clickAwardReportFlow", (function() {
				return g
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return v
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return S
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return I
			})), n.d(t, "clickReportAward", (function() {
				return C
			})), n.d(t, "clickCancelReportAward", (function() {
				return y
			})), n.d(t, "clickConfirmReportAward", (function() {
				return T
			})), n.d(t, "viewGildModalEvent", (function() {
				return A
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return x
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return R
			})), n.d(t, "clickMessageInputEvent", (function() {
				return D
			})), n.d(t, "typeMessageInputEvent", (function() {
				return j
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return w
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return k
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return P
			})), n.d(t, "clickNextButtonEvent", (function() {
				return U
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return M
			})), n.d(t, "clickFilterEvent", (function() {
				return V
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return H
			}));
			var r = n("./src/reddit/models/Gold/Award.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/GoldPurchase.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === r.f.Global && e.awardSubType === r.d.Appreciation ? i.GoldPurchaseType.GidAppreciation : e.awardType === r.f.Global && e.awardSubType === r.d.Premium ? i.GoldPurchaseType.GidPremium : e.awardSubType === r.d.Group ? i.GoldPurchaseType.GidGroup : e.awardType === r.f.Community ? i.GoldPurchaseType.GidCommunity : e.awardType === r.f.Moderator ? i.GoldPurchaseType.GidMod : e.awardType === r.f.Global && e.awardSubType === r.d.Global ? i.GoldPurchaseType.GidGlobal : i.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...s.defaults(e),
					comment: t ? s.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(o.d)(o.a.GildingFlow, !1),
					post: t ? s.post(e, t) : void 0,
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				h = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				_ = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				E = e => (t, n) => r => ({
					...u(r, n),
					source: Object(a.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				g = E("award_hovercard_report"),
				v = E("cancel_award_hovercard_report"),
				S = E("flag_award"),
				O = E("cancel_flag_award"),
				I = E("confirm_flag_award"),
				C = E("report_community_award"),
				y = E("cancel_report_community_award"),
				T = E("confirm_report_community_award"),
				A = (e, t, n) => r => ({
					...u(r, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				x = (e, t, n) => r => ({
					...u(r, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				R = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				j = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				w = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				L = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				k = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				U = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				M = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: n,
					numberCoins: r,
					thingId: s
				}) => i => ({
					...u(i, s),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(a.a)(s) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
						numberCoins: r,
						...l(e)
					}
				}),
				V = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				H = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return I
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				i = n("./src/reddit/selectors/gold/giveAwards.ts"),
				o = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, b = !!n, f = i.b(e), _ = f ? Object(u.getAwardTypeFromAward)(f) : null, E = b ? _ : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, g = n ? Object(p.a)(n) ? "comment" : "post" : void 0, v = l || a.t(e), S = [...Object(o.d)(e), ...Object(o.f)(e)].filter(e => e.mobileId === v)[0], O = t.offerContext || (f && 0 === f.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(S, b)), I = S ? Math.round(1e4 * (S.baselinePennies - S.pennies) / S.baselinePennies) / 100 : 0, C = S ? Math.round(1e4 * (S.coins - S.baselineCoins) / S.coins) / 100 : 0, y = S ? S.baselinePennies !== S.pennies ? `${I}_percent_price` : S.baselineCoins !== S.coins ? `${C}_percent_bonus` : void 0 : void 0, T = E === d.GoldPurchaseType.Premium ? r.vb : S ? S.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: a.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: E,
							gildedContent: b,
							contentType: g,
							numberCoins: S ? S.coins : void 0,
							offerContext: O,
							offerType: y
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: T
						},
						purchase: {
							priceMicros: T
						}
					}
				},
				f = (e, t, n) => r => ({
					...b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				v = (e, t) => n => ({
					...b(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				S = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				O = (e, t, n) => r => {
					const s = b(r, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...s.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...s.goldPurchase,
							source: e ? d.GiveGold : a.o(r) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				I = e => t => {
					var n;
					const r = b(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.profile(e),
					screen: a.screen(e),
					subreddit: a.subreddit(e)
				}),
				d = (e, t, n) => r => ({
					source: Object(o.h)(r) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(r),
					post: a.post(r, e)
				}),
				l = (e, t, n, r) => s => {
					const o = n ? a.comment(s, n) : null,
						{
							sortToUse: c
						} = Object(i.a)(s, e);
					return {
						...d(e, t, r)(s),
						comment: o,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const r = a.currentPost(n);
					return r ? d(r.id, e, t)(n) : {
						source: Object(o.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(s.a)({
					...d(e, t)(n),
					...a.defaults(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: r.c.CLICK,
					noun: e,
					...c(t),
					post: a.currentPost(t),
					userSubreddit: a.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return o
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "l", (function() {
				return _
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					screen: Object(s.screen)(e),
					profile: Object(s.profile)(e),
					subreddit: Object(s.subreddit)(e),
					userSubreddit: Object(s.userSubreddit)(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...i(t)
				}),
				a = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...i(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...i(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: r.c.UNDO,
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...i(n)
				}),
				l = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...i(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...i(n)
				}),
				m = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					comment: Object(s.comment)(n, t),
					...i(n)
				}),
				p = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					...i(n)
				}),
				h = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					...i(n)
				}),
				b = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				}),
				f = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.comment)(n, t),
					post: Object(s.post)(n, t),
					subreddit: Object(s.subredditByPostOrCommentId)(n, t)
				}),
				_ = (e, t, n, r) => i => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.post)(i, n),
					subreddit: Object(s.subredditByPostOrCommentId)(i, n),
					actionInfo: {
						reason: r
					},
					...e && {
						comment: Object(s.comment)(i, n)
					}
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "s", (function() {
				return D
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "w", (function() {
				return w
			}));
			var r = n("./src/reddit/models/ScheduledPost/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				o = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(r.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...i(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...i(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...i(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...i(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...i(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...i(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...i(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...i(t),
					scheduledPost: o(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...i(t),
					scheduledPost: o(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...i(e)
				}),
				_ = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...i(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...i(e)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...i(e)
				}),
				v = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...i(t),
					actionInfo: s.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = {
					[r.d.Hourly]: "hourly_frequency",
					[r.d.Daily]: "daily_frequency",
					[r.d.Weekly]: "weekly_frequency",
					[r.d.Monthly]: "monthly_frequency",
					[r.b]: "custom_frequency"
				},
				O = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : S[e],
					...i(t)
				}),
				I = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...i(e)
				}),
				C = (e, t, n) => o => ({
					source: "post",
					action: "click",
					noun: Object(r.l)(e),
					...i(o),
					actionInfo: s.actionInfo(o, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...i(e)
				}),
				T = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...i(e)
				}),
				A = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...i(e)
				}),
				x = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...i(e),
					scheduledPost: o(t)
				}),
				R = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...i(e)
				}),
				D = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...i(e),
					scheduledPost: o(t)
				}),
				j = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...i(e)
				}),
				w = () => (e, t) => {
					const n = i(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: o(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return h
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = o.subreddit(e),
					n = null == t ? void 0 : t.id;
				if (!n) return;
				const s = Object(c.c)(e, {
						subredditId: n
					}),
					d = Object(a.h)(e),
					l = d ? Object(i.d)(e, {
						subredditId: n,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == s ? void 0 : s.displaySettings.isUserEnabled) || !(null == s ? void 0 : s.applied)) return {
					isActive: !1,
					...u
				};
				const m = s.applied.templateId,
					p = Object(r.g)(s.applied);
				return p ? {
					id: m,
					title: p,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const l = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: n,
						achievementFlair: s
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(r.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == s ? void 0 : s.type,
							achievementFlairTitle: null == s ? void 0 : s.name,
							isLocked: null == s ? void 0 : s.isLocked
						}
					}
				},
				m = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.defaults(e)
				}),
				p = (e, t, n) => a => {
					const c = Object(s.e)(a, {
							commentId: e
						}),
						d = Object(i.d)(a, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...o.defaults(a),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(r.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				},
				h = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...o.defaults(e)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");

			function i(e, t = s.a) {
				return Object(r.e)(n => Object(s.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js");

			function s(e) {
				const t = Object(r.useRef)();
				return Object(r.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, s.a.createElement("g", null, s.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), s.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", c({}, e, {
				className: Object(i.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), s.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				a = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(1 1)"
			}, s.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), s.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), s.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), s.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				i = n.n(s);
			t.a = r.a.div("inlineRow", i.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(r || (r = {}));
			const i = {
				[r.Powerups]: () => s.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[r.Premium]: () => s.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var o, a;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(o || (o = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(a || (a = {}));
			const c = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === n,
					s = "new_purchaser" === n,
					i = "repeat_purchaser" === n;
				return t ? a.GildFlow : r ? a.LowCoinBalance : s ? a.NewUserTargetedOffer : i ? a.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "p", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				i = n("./src/reddit/models/User/index.ts");
			const o = "scheduledposts";
			var a, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === i.c.AvailableRedditor,
				m = e => e.__typename === s.a.Subreddit;
			var p, h, b, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const _ = e => h[f[e]],
				E = e => f[h[e]],
				g = e => b[h[e]],
				v = e => h[b[e]],
				S = e => f[b[e]];
			var O;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const I = e => {
					switch (e) {
						case O.Hourly:
						case O.Daily:
						case O.Weekly:
						case O.Monthly:
							return !0
					}
					return !1
				},
				C = "custom",
				y = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(r.a)(e)
					}
				},
				T = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				i = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				o = n("./src/reddit/actions/modQueue/constants.ts"),
				a = n("./src/reddit/actions/pages/constants.ts"),
				c = n("./src/reddit/actions/pages/postCreation.ts"),
				d = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case a.b:
					case a.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case o.i:
					case o.f:
					case o.m:
					case o.p:
					case o.v: {
						const {
							response: n
						} = t.payload, {
							userFlair: r
						} = n, s = {
							...e
						};
						return Object.keys(r).forEach(e => {
							s[e] || (s[e] = r[e])
						}), s
					}
					case u.r: {
						const {
							subredditId: n,
							applied: r,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r,
								displaySettings: s
							}
						}
					}
					case i.h: {
						const {
							subredditId: n,
							applied: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: r
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: r
						} = t.payload, s = {
							...e[n].displaySettings,
							isEnabled: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: s
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: r
						} = t.payload, s = {
							...e[n].permissions,
							canAssignOwn: r
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: s
							}
						}
					}
					case u.q: {
						const n = t.payload,
							r = e[n.subredditId],
							s = e[n.subredditId].templates,
							i = e[n.subredditId].templateIds,
							o = {
								...s,
								[n.template.id]: n.template
							},
							a = [...i];
						return a.includes(n.template.id) || a.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...r,
								templates: o,
								templateIds: a
							}
						}
					}
					case u.g: {
						const n = t.payload,
							r = e[n.subredditId],
							i = e[n.subredditId].templates,
							o = e[n.subredditId].templateIds,
							a = s()(i, n.templateId),
							c = o.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...r,
								templates: {
									...a
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							r = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...r,
								templateIds: n.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const r = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				i = e => e.gild.isAnonymous,
				o = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return o
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "u", (function() {
				return d
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "v", (function() {
				return S
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "d", (function() {
				return D
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: i.a
				}
			});
			const o = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(r.j)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				_ = e => e.features.goldPurchase.payment.cardName,
				E = e => e.features.goldPurchase.payment.postalCode,
				g = e => e.features.goldPurchase.payment.savedCardsPending,
				v = e => e.features.goldPurchase.payment.savedCards,
				S = e => e.features.goldPurchase.payment.rememberCard,
				O = e => e.features.goldPurchase.payment.useSavedCard,
				I = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				C = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				y = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				T = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				A = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				x = e => e.features.goldPurchase.payment.stripeToken.pending,
				R = e => e.features.goldPurchase.payment.paypal.passthrough,
				D = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/models/Flair/index.ts"),
				i = n("./src/reddit/selectors/moderatorPermissions.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(o.a)({
				features: {
					userFlair: a.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : s.b.Right,
				u = Object(r.a)((e, {
					subredditId: t
				}) => {
					const n = c(e, {
						subredditId: t
					});
					if (n) return {
						type: s.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
							subredditId: t
						}),
						r = u(e, {
							subredditId: t
						}),
						s = c(e, {
							subredditId: t
						});
					if (!n || !r || !s) return !1;
					if (s.applied) return !0;
					const o = Object(i.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: a
						} = r.permissions;
					return !!s.templateIds.find(e => {
						return !s.templates[e].modOnly || o
					}) && a
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.e078e201479b7539aeaf.js.map