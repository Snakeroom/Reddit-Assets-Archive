// https://www.redditstatic.com/desktop2x/RpanListingUnit.331716408c7529624d91.js
// Retrieved at 6/28/2021, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = -1, s = null == e ? 0 : e.length; ++r < s;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return s(e, (function(e, s, n) {
					return r = !!t(e, s, n)
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayEvery.js"),
				n = r("./node_modules/lodash/_baseEvery.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/isArray.js"),
				o = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var c = a(e) ? s : n;
				return r && o(e, t, r) && (t = void 0), c(e, i(t, 3))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var s = r("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return s(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/cache/localStorage/index.ts"),
				c = r("./src/lib/combineRefs/index.tsx"),
				d = r("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => r.e("MuxEmbed").then(r.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(a.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.zc
				});
				return Object(u.Od)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Ac
				});
				return Object(u.Od)(t) ? void 0 : t
			}, (e, t) => e === u.Bc.Enabled && t === u.Bc.Enabled);
			var h = r("./src/config.ts");
			var b = r("./src/reddit/selectors/user.ts");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						r = t.length,
						s = new Uint32Array(e);
					return crypto.getRandomValues(s), Array.from(s).map(e => t.charAt(e % r)).join("")
				},
				E = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				g = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var _;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(_ || (_ = {}));
			const v = async e => (async (e, t) => {
				const r = (new TextEncoder).encode(t),
					s = await crypto.subtle.digest(e, r);
				return Array.from(new Uint8Array(s)).map(g).join("")
			})(_.SHA1, e);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const S = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				C = {
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
					anonymousUserId: r,
					debug: d,
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: h,
					localStorageViewerUserIdKey: g,
					playerName: _,
					playerVersion: y,
					respectDoNotTrack: T,
					saltLength: I,
					saltTimeToLive: x,
					viewerUserIdLength: A
				} = {
					...C,
					...t
				};
				class R extends s.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(s.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
							...r
						} = this.props, s = r;
						return n.a.createElement(e, O({}, s, {
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
						} catch (r) {
							console.error(r)
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
						} catch (r) {
							console.error(r)
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
						const e = this.props.redditUserId || R.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							r = `${E()}${e}${t}`;
						return (await v(r)).substr(0, R.VIEWER_USER_ID_LENGTH)
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
							r = this.getThirdPartyLibData();
						return {
							debug: R.DEBUG,
							disableCookies: R.DISABLE_COOKIES,
							respectDoNotTrack: R.RESPECT_DO_NOT_TRACK,
							...r,
							data: {
								env_key: R.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: R.PLAYER_NAME,
								player_version: R.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = R.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = f(R.SALT_LENGTH), Object(o.b)(e, t, R.SALT_TIME_TO_LIVE)), t
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
							muxVideoIsLive: r,
							muxVideoTitle: s
						} = this.props;
						return {
							video_duration: r ? R.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: r ? R.STREAM_TYPE_LIVE : R.STREAM_TYPE_ON_DEMAND,
							video_title: s
						}
					}
				}
				R.displayName = S(e), R.ANONYMOUS_USER_ID = r, R.DEBUG = d, R.DISABLE_COOKIES = u, R.DURATION_LIVE = 1 / 0, R.ENV_KEY = m, R.LOCAL_STORAGE_SALT_KEY = h, R.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, R.PLAYER_NAME = _, R.PLAYER_VERSION = y, R.RESPECT_DO_NOT_TRACK = T, R.SALT_LENGTH = I, R.SALT_TIME_TO_LIVE = x, R.STREAM_TYPE_LIVE = "live", R.STREAM_TYPE_ON_DEMAND = "on-demand", R.VIEWER_USER_ID_LENGTH = A;
				const j = Object(s.forwardRef)((e, t) => n.a.createElement(R, O({}, e, {
						forwardedRef: t
					}))),
					w = Object(a.c)({
						redditUserId: b.h,
						isMuxEnabled: p
					});
				return Object(i.b)(w, null, null, {
					forwardRef: !0
				})(j)
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/lodash/every.js"),
				n = r.n(s);

			function i(e) {
				let t = null,
					r = null;
				return (...s) => (null !== t && s.length === t.length && n()(s, (e, r) => e === t[r]) || (t = s, r = e(...s)), r)
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const i = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(n.a)(() => Promise.all([r.e("vendors~RealtimeGQLSubscriptionAsync"), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = i
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				n = "MOD_PAGE_EVENT_POSTS_FAILED",
				i = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				o = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			}));
			var s = r("./src/lib/loadableAction/index.ts");
			const n = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				i = Object(s.a)(n("awardSheetInfoRequested")),
				a = Object(s.a)(n("manageableAwardsRequested")),
				o = Object(s.a)(n("createCommunityAward")),
				c = Object(s.a)(n("createGlobalAward")),
				d = Object(s.a)(n("createModAward")),
				l = Object(s.a)(n("createAwardFailed")),
				u = Object(s.a)(n("createAwardSuccessful")),
				m = Object(s.a)(n("removeCommunityAward")),
				p = Object(s.a)(n("disableAwardinCommunity")),
				h = Object(s.a)(n("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return f
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "f", (function() {
				return y
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/postParentMessage/index.ts"),
				i = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/selectors/gild.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const f = Object(s.a)(b.L),
				E = Object(s.a)(b.g),
				g = () => async (e, t) => {
					const s = t();
					e(E()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: n
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(n()(s))
				}, _ = Object(s.a)(b.K), v = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (s, n) => {
					const o = n(),
						c = e ? Object(u.a)(o, e) : void 0;
					s(_({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), s(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const h = Object(p.J)(o, {
						thingId: r
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(i.a)(r)) {
						const e = Object(m.F)(o, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, O = Object(s.a)(b.f), S = Object(s.a)(b.J), C = () => async (e, t) => {
					const s = t(),
						i = Object(o.d)(s);
					if (Object(o.g)(s)) {
						const e = "close.gild";
						Object(n.a)({
							type: e
						})
					}
					e(O()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(i)(s)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
					Object(n.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "t", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "r", (function() {
				return u
			})), r.d(t, "s", (function() {
				return m
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "m", (function() {
				return b
			})), r.d(t, "k", (function() {
				return f
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "o", (function() {
				return S
			}));
			const s = "CREATE_COLLECTION_PENDING",
				n = "CREATE_COLLECTION_SUCCESS",
				i = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				o = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				h = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				b = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				g = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				v = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				S = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return a
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "k", (function() {
				return v
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				n = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				v = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, r) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = r("./src/reddit/hooks/usePrevious.ts");
			const o = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var c = r("./src/reddit/components/CountAnimation/index.m.less"),
				d = r.n(c);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: r,
					incrementDelta: c,
					initialDelay: l,
					inViewPortAnimatingCallbackOnce: u,
					subsequentRecurringDelay: m,
					shouldDisjointAnimation: p,
					id: h
				} = e, [b, f] = Object(s.useState)(!1), [E, g] = Object(s.useState)(!0), [_, v] = Object(s.useState)([]), [O, S] = Object(s.useState)(o(t).reverse()), C = Object(s.useRef)(!1), y = Object(s.useRef)(null), T = Object(s.useRef)(e => {}), I = Object(s.useRef)();
				T.current = Object(s.useCallback)(e => {
					let t = e || c();
					const s = [...O].reverse().join("");
					let n = parseInt(s) + t;
					n > r && (t = r - parseInt(s), n = r);
					const i = o(n).reverse();
					f(!1), v(O), S(i), g(!1), I.current = setTimeout(() => {
						f(!0)
					}, 0)
				}, [r, c, O]);
				const x = Object(s.useRef)(() => {}),
					A = Object(s.useRef)(),
					R = Object(s.useRef)();
				x.current = Object(s.useCallback)(() => {
					R.current = setTimeout(() => {
						T.current();
						const e = [..._].reverse().join("");
						parseInt(e) < r && x.current()
					}, m())
				}, [r, m, _]);
				const j = Object(s.useRef)(!1),
					w = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: r
							} = e, s = 1 !== r;
							t ? (j.current = !0, C.current || (C.current = !0, A.current = setTimeout(() => {
								T.current(), x.current()
							}, l()))) : s && (j.current = !1)
						})
					}, []);
				Object(i.a)(y, w);
				const N = Object(a.a)(r);
				Object(s.useEffect)(() => (void 0 !== N && N !== r && (T.current(r - N), j.current && u && u()), () => {
					clearTimeout(A.current), clearTimeout(R.current), clearTimeout(I.current)
				}), [r]);
				const D = Object(s.useCallback)(() => g(!0), [g]),
					L = 0 === _.length,
					P = E || L;
				return n.a.createElement("div", {
					className: d.a.countAnimation,
					ref: y
				}, O.map((e, t) => {
					const r = ((e, t) => {
						let r = Math.abs(e);
						const s = Math.abs(t),
							n = [r];
						if (r === s) return n;
						let i = !0;
						for (; i;) ++r > 9 && (r = 0), n.push(r), r === s && (i = !1);
						return n
					})(_[t] || 0, e);
					return n.a.createElement("span", {
						"aria-hidden": !0,
						className: d.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: D,
						style: b && _.length > 0 && !E ? {
							transform: `translateY(-${p&&r.length>1?100:100*(r.length-1)}%)`,
							transitionDuration: `${(p?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, P ? n.a.createElement("span", {
						className: d.a.digitDelta
					}, e) : r.map((e, t) => {
						const s = 0 === t || t === r.length - 1;
						if (!p || p && s) return n.a.createElement("span", {
							className: d.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), n.a.createElement("span", {
					id: h,
					className: d.a.srOnly,
					role: "screen-reader"
				}, [...O].reverse().join("")))
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, r) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/noop.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = r.n(d);
			t.a = e => a.a.createElement(o.h, {
				className: l.a.modalHeader
			}, a.a.createElement(o.p, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || n.a
			}, a.a.createElement(o.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				i = r.n(n);
			const a = s.a.div("Wrapper", i.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, r) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/Flair/index.tsx"),
				c = r("./src/reddit/components/FlairPreview/index.m.less"),
				d = r.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(o.b, "FlairComponent", d.a);
			t.a = e => e.flair ? i.a.createElement(u, null, i.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), i.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : i.a.createElement(u, null, s.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, r) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var s = r("./node_modules/lodash/once.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/higherOrderComponents/makeAsync.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/loadWithRetries/index.ts"),
				u = r("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = r.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = n()((e = p) => Object(o.a)({
					getComponent: () => Object(l.a)(() => Promise.all([r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("FlairEdit")]).then(r.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/memoizeByReference/index.ts"),
				l = r("./src/reddit/featureFlags/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				m = r("./src/reddit/helpers/trackers/userFlair.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/selectors/moderatorPermissions.ts"),
				b = r("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				f = r("./src/reddit/components/Flair/index.tsx"),
				E = r("./src/reddit/controls/RadioInput/index.tsx"),
				g = r("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				v = r("./src/reddit/icons/svgs/Search/index.tsx"),
				O = r("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				S = r.n(O);
			class C extends i.a.Component {
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
						selectedTemplateId: r
					} = this.props, {
						searchQuery: n
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(n)), o = !!r && a.some(e => e.id === r);
					return i.a.createElement("div", {
						className: S.a.container
					}, i.a.createElement("div", {
						className: S.a.searchBoxWrapper
					}, i.a.createElement("input", {
						className: S.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: n
					}), i.a.createElement(v.a, {
						className: S.a.searchIcon
					})), i.a.createElement(E.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: r
					}, a.map((e, t) => {
						const s = Object(u.c)(e),
							n = r === e.id || !o && 0 === t;
						return i.a.createElement(g.a, {
							className: S.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: n ? 0 : -1,
							value: e.id
						}, i.a.createElement(f.b, {
							className: S.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && i.a.createElement(_.a, {
							className: S.a.pencil
						}))
					})))
				}
			}
			var y = r("./src/reddit/components/FlairSearch/index.m.less"),
				T = r.n(y);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				x = Object(o.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: h.f
				}),
				A = Object(a.b)(x);
			t.a = A(e => {
				const {
					flairTemplateType: t,
					flair: r,
					className: n,
					onChange: a,
					subredditId: o,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: h,
					isModerator: f
				} = e, E = Object(p.a)(), g = d && r && r.templateId && d[r.templateId] || void 0, _ = Object(b.a)(), v = r || I(g);
				return i.a.createElement("div", {
					className: Object(c.a)(n, T.a.container)
				}, d && l && i.a.createElement(C, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								r = Object(u.c)(t);
							E(Object(m.b)({
								userFlair: t
							})), a(r)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), v && g && (f || g.textEditable) && i.a.createElement("div", {
					className: T.a.flairEditSection
				}, i.a.createElement("div", {
					className: T.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && i.a.createElement("div", {
					className: T.a.restrictionHintText
				}, Object(u.k)(g)), i.a.createElement(_, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: v,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let r = e;
						t && (r = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(r)
					},
					subredditId: o
				})))
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return A
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./node_modules/lodash/isNil.js"),
				c = r.n(o),
				d = r("./src/reddit/constants/jsapiEvents.ts");
			var l = r("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: r,
								...s
							}
						} = this;
						l.a.publish(d.a, s, e)
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
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				h = r("./src/reddit/selectors/comments.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/subreddit.ts");
			const E = (e, t) => {
				const r = Object(b.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(i.b)(() => Object(a.a)(E, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => n.a.createElement(p, {
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
			const _ = (e, t) => {
				const r = Object(b.a)(e, t),
					s = Object(f.I)(e, t);
				return {
					comment: r,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(i.b)(() => Object(a.a)(_, e => e))(e => n.a.createElement(p, {
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
			var O = Object(i.b)(() => Object(a.c)({
					subreddit: f.T
				}))(e => n.a.createElement(p, {
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
				S = r("./src/reddit/hooks/usePostContext.ts");
			var C = e => {
				const {
					post: t,
					subredditOrProfile: r
				} = Object(S.a)(), i = Object(s.useMemo)(() => ({
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
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, r]);
				return n.a.createElement(p, {
					className: e.className,
					type: "post",
					data: i
				})
			};
			var y = e => {
				const {
					post: t,
					subredditOrProfile: r,
					isModerator: i
				} = Object(S.a)(), a = Object(s.useMemo)(() => ({
					author: t.author,
					isModerator: i,
					post: {
						id: t.id
					},
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {}
				}), [t, r, i]);
				return n.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var T = e => {
				const {
					post: t,
					subredditOrProfile: r
				} = Object(S.a)(), i = Object(s.useMemo)(() => ({
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
					subreddit: r ? {
						id: r.id,
						name: r.name,
						type: r.type
					} : {},
					title: t.title,
					voteState: t.voteState
				}), [t, r]);
				return n.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: i
				})
			};
			var I = Object(i.b)(() => Object(a.c)({
				subreddit: f.T
			}))(e => n.a.createElement(p, {
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
			var x = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.L)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(p, {
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
			var A = Object(i.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.T)(e, {
					subredditId: t
				}) : null
			}))(e => n.a.createElement(p, {
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
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				i = r("./src/reddit/constants/flair.ts"),
				a = r("./src/reddit/helpers/flair.ts"),
				o = r("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === o.f.Text || e.type === o.f.Image || e.type === o.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, r) => {
				if (r && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const o = Object(a.g)(t).length;
				return 0 === o ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : o > i.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(s) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : n()(r, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "RpanTitle", (function() {
				return ee
			})), r.d(t, "LivestreamTitle", (function() {
				return te
			})), r.d(t, "RpanDescription", (function() {
				return re
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/telemetry/index.ts"),
				c = r("./src/higherOrderComponents/withMux/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/localStorageAvailable/index.ts"),
				m = r("./src/lib/onFocusAndVisibilityChange/index.ts"),
				p = r("./src/lib/VideoSession/VideoSessionManager.ts"),
				h = r("./src/reddit/actions/preferences.ts"),
				b = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				f = r("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				E = r("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				g = r("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				_ = r("./src/reddit/constants/chat.ts"),
				v = r("./src/reddit/constants/postLayout.ts"),
				O = r("./src/reddit/helpers/localStorage/index.ts"),
				S = r("./src/reddit/helpers/overlay/index.ts"),
				C = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = r("./src/reddit/helpers/trackers/rpan.ts"),
				T = r("./src/reddit/models/PublicAccessNetwork/index.ts"),
				I = r("./src/reddit/models/Vote/index.ts"),
				x = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				A = r("./src/reddit/selectors/platform.ts"),
				R = r("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				N = r("./src/reddit/components/Flatlist/index.tsx"),
				D = r("./src/reddit/components/Flatlist/constants.ts"),
				L = r("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				P = r("./src/reddit/components/HlsVideo/index.tsx"),
				k = r("./src/reddit/components/OverflowMenu/index.tsx"),
				U = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = r("./src/reddit/components/PostLeftRail/index.tsx"),
				M = r("./src/reddit/components/TrackingHelper/index.tsx"),
				V = r("./src/reddit/controls/Dropdown/Row.tsx"),
				G = r("./src/reddit/controls/InternalLink/index.tsx"),
				Y = r("./src/reddit/controls/Score/index.tsx"),
				H = r("./src/reddit/icons/fonts/index.tsx"),
				B = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = r.n(B),
				K = r("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				z = r.n(K);
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = 20, J = l.jc, X = l.jc, Q = Object(c.a)(P.a, {
				playerName: "RPAN DU Video Player"
			}), $ = Object(i.b)(() => Object(a.c)({
				autoplay: j.b,
				isLoggedIn: j.K,
				isOverlayOpen: A.h,
				location: (e, {
					listingName: t
				}) => {
					const r = Object(R.m)(e, {
						listingName: t
					});
					let s;
					if (r) {
						s = `${Object(C.d)(r)}${Object(E.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						s = e === b.R ? Object(C.e)() : Object(C.f)(e)
					}
					return s
				},
				stream: (e, {
					listingName: t
				}) => Object(R.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(R.l)(e, t),
				rpanDuThresholdVariant: x.i,
				inRpanDUPreloadExperiment: x.b,
				inRpanDuTargetingExperiment: x.c
			}), (e, t) => ({
				onHideRpanUnit: (r, s) => e(Object(h.B)(t.listingName, r, {
					showToast: s.showToast
				})),
				openOverlay: t => e(Object(S.a)(t)),
				subscribeConfig: () => e(f.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(f.a.subscribeStats(t)),
				subscribeStreams: () => e(f.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), ee = () => n.a.createElement("h3", {
				className: z.a.title
			}, q._("Top broadcast", null, {
				hk: "HADCh"
			})), te = () => n.a.createElement("h3", {
				className: z.a.title
			}, q._("Top livestream", null, {
				hk: "4od1tZ"
			})), re = () => n.a.createElement("p", {
				className: z.a.description
			}, q._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class se extends s.Component {
				constructor(e) {
					super(e), this.observableElement = n.a.createRef(), this.videoRef = n.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(O.W)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(O.K)());
						if (e) {
							if (Date.now() - e >= J) {
								Object(O.W)();
								const e = 30 * l.z,
									t = Date.now() - e + X;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(O.Jb)(Date.now())
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
							onHideRpanUnit: r,
							sendEvent: s
						} = this.props;
						r(Date.now(), {
							showToast: !0
						}), s(Object(y.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: r
						} = this.props;
						t(r ? Object(y.j)(r, 1) : Object(y.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(y.j)()), this.openOverlay()
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
							stream: r,
							streamById: s
						} = this.props, n = r && r.post.id === e.id ? r : s(e.id);
						if (!n) return;
						const i = !t.sessionDurationMs ? y.D : y.z,
							a = {
								chatState: _.a.None,
								playerType: y.a.DU
							},
							o = i(n, {
								...t,
								...a
							});
						this.props.sendEvent(o)
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
					return t === T.a.IS_LIVE || t === T.a.DISCONNECTED
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
					o.c.start(this.timerId)
				}
				endTimeTracker() {
					if (this.timerId && o.c.has(this.timerId)) {
						Math.round(o.c.end(this.timerId)) / 1e3 >= Z ? this.handleSuccessfulPlayback() : this.handleUnsuccessfulPlayback()
					}
				}
				componentDidMount() {
					this.subscribeIntersectionObserver(), this.subscribeVisibilityChange()
				}
				componentDidUpdate(e, t) {
					const {
						video: r
					} = this, {
						autoplay: s,
						stream: n,
						inRpanDUPreloadExperiment: i
					} = this.props, {
						isOverlayOpen: a,
						stream: o
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
					} = this, f = d && l && !a, E = !f && h, g = f && !h, _ = d && p && !a, v = i ? _ && !b : g;
					(i ? !_ && b : E) ? (this.subscribeConfig(), this.subscribeStreams()) : v && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const O = n && n.post.id,
						S = O !== (o && o.post.id),
						C = !!O;
					S && this.setState({
						isReady: !1
					});
					const y = S && !C || C && g;
					if (S && C && h || C && E ? this.subscribeStats() : y && this.unsubscribeStats(), s && r) {
						const e = this.getOrCreateVideoSessionManager(r),
							t = !m && c,
							s = C && (t && h || E && c),
							n = C && g;
						S && e.endSession(), s ? (e.startSession({
							id: O
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : n && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === v.g.Classic ? this.renderClassicContent() : e === v.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return n.a.createElement("div", {
						className: Object(d.a)(z.a.container, {
							[W.a.largeAndMediumPostStyles]: e === v.g.Large || e === v.g.Medium,
							[W.a.classicPostStyles]: e === v.g.Classic,
							[W.a.compactPostStyles]: e === v.g.Compact,
							[z.a.large]: e === v.g.Large || e === v.g.Medium,
							[z.a.classic]: e === v.g.Classic,
							[z.a.compact]: e === v.g.Compact
						}, this.props.className)
					}, e !== v.g.Large && n.a.createElement(F.b, {
						className: z.a.leftRail,
						withoutComputedStyles: e === v.g.Compact
					}, n.a.createElement(ne, {
						isVertical: !0
					}), e === v.g.Compact && n.a.createElement(ne, {
						isVertical: !1
					})), n.a.createElement(U.a, {
						className: z.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return n.a.createElement("div", {
						className: z.a.titleAndDescriptionContainer
					}, n.a.createElement(G.a, {
						to: this.props.location
					}, n.a.createElement(te, null), e && n.a.createElement(re, null)))
				}
				renderLargeContent() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: z.a.header
					}, this.renderTitleAndDescription(), n.a.createElement("div", {
						className: z.a.flatListContainer
					}, n.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))), n.a.createElement("div", {
						className: z.a.body,
						ref: this.observableElement
					}, n.a.createElement(G.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: z.a.previewLink,
						tabIndex: 0
					}, n.a.createElement("div", {
						className: z.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return n.a.createElement("div", {
						className: z.a.body,
						ref: this.observableElement
					}, n.a.createElement(G.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, n.a.createElement("div", {
						className: z.a.thumbnailContainer
					}, this.renderThumbnail())), n.a.createElement("div", {
						className: z.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: z.a.flatListContainer
					}, n.a.createElement(ie, {
						onClick: this.onHeaderClicked
					}), n.a.createElement(N.a, {
						className: z.a.flatlistSeparator
					}), n.a.createElement("div", null, n.a.createElement(ae, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return n.a.createElement("div", {
						className: z.a.body,
						ref: this.observableElement
					}, n.a.createElement("div", {
						className: z.a.main
					}, n.a.createElement(ie, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), n.a.createElement("div", {
						className: z.a.flatListContainer
					}, n.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return n.a.createElement("div", {
						className: z.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return n.a.createElement("div", {
						className: z.a.bigExpando
					}, n.a.createElement(H.a, {
						name: "expand",
						className: z.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? n.a.createElement("span", {
						className: z.a.liveStatus
					}, n.a.createElement(g.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return n.a.createElement("span", {
						className: z.a.watchingCount
					}, q._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [q._plural(t, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return n.a.createElement("div", {
						className: Object(d.a)(z.a.thumbnail, {
							[z.a.loading]: !this.state.isReady
						})
					}, this.renderVideo())
				}
				renderVideo() {
					const {
						autoplay: e,
						stream: t
					} = this.props;
					if (!t) return;
					const r = 1e3 * t.broadcast_time,
						s = t.post.id,
						i = t.post.title;
					return n.a.createElement(Q, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: r,
						muxVideoId: s,
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
						inRpanDUPreloadExperiment: r
					} = this.props;
					e && (this.intersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isIntersecting: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(x.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(x.h)(t) : .01,
						rootMargin: r ? "400%" : "0px"
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
					} = this.props, r = e && e.post.id;
					this.unsubscribeStats(), r && t(r).then(e => this._unsubscribeStats = e)
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
			const ne = e => n.a.createElement(w.a, {
					className: Object(d.a)({
						[z.a.verticalVotes]: e.isVertical,
						[z.a.horizontalVotes]: !e.isVertical
					})
				}, n.a.createElement(Y.a, {
					className: z.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: I.a.notVoted
				})),
				ie = ({
					onClick: e
				}) => n.a.createElement("button", {
					className: z.a.expandoButton,
					onClick: e
				}, n.a.createElement(H.a, {
					name: "expand",
					className: z.a.expandoIcon
				})),
				ae = ({
					onClick: e,
					isLoggedIn: t
				}) => n.a.createElement(L.a, {
					displayText: q._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: D.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, n.a.createElement(H.a, {
					name: "hide"
				})),
				oe = ({
					onClick: e
				}) => n.a.createElement(k.b, {
					className: z.a.overflowMenu,
					dropdownClassName: z.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, n.a.createElement(V.b, {
					className: z.a.overflowItem,
					displayText: q._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: z.a.overflowItemIconWrapper,
					textClassName: z.a.overflowItemText,
					onClick: e
				}, n.a.createElement(H.a, {
					name: "hide"
				})));
			t.default = $(Object(M.c)(se))
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = r.n(a);
			const c = e => n.a.createElement("span", {
				className: Object(i.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => n.a.createElement(c, {
				className: Object(i.a)(o.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, r) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/keycodes.ts"),
				o = r("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = r("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = r.n(l);
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : n.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(i.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? n.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : n.a.createElement(o.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/reddit/constants/keycodes.ts");
			class a extends n.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: r
						} = this.props;
						t || this.state.value !== e && (r(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return n.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: r
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const n = e.key === i.b.ArrowUp,
							a = e.key === i.b.ArrowDown;
						if (n || a) {
							const t = this.getValues();
							if (!t.length) return;
							const i = s ? t.indexOf(s) : 0,
								a = t[((n ? i - 1 : i + 1) + t.length) % t.length];
							r(a), this.setState({
								value: a
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
					return n.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, n.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), n.a.Children.map(e.children, (r, s) => {
						const i = 0 === s,
							a = r.props.value === t,
							o = null !== t ? a ? 0 : -1 : i ? 0 : -1;
						return n.a.cloneElement(r, {
							disabled: e.disabled,
							onClick: e => this.handleClick(r.props.value),
							selected: a,
							tabIndex: o
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, r) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/realtime/GQLSubscription/async.tsx"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/components/CountAnimation/index.tsx"),
				p = r("./src/reddit/constants/colors.ts"),
				h = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				f = r("./src/reddit/helpers/trackers/post.ts"),
				E = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = r("./src/reddit/models/Vote/index.ts"),
				v = r("./src/reddit/selectors/meta.ts"),
				O = r("./src/reddit/controls/Score/index.m.less"),
				S = r.n(O);
			const C = e => e.voteState === _.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === _.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(b.a)(Object(h.a)(e)),
				y = () => 0,
				T = Object(d.b)(e => ({
					locale: Object(v.i)(e)
				})),
				I = Object(i.a)(e => {
					const t = {
							color: e.light ? p.b.lightboxHeaderText : C(e)
						},
						{
							score: r,
							postId: i = "",
							locale: h,
							isVoteCountAnimation: b
						} = e,
						g = Object(d.d)(),
						_ = null == h ? void 0 : h.startsWith("en"),
						v = e.isScoreHidden ? _ ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: S.a.dot
						}, "•") : Object(a.b)(r),
						O = Object(o.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && g(Object(u.K)({
								postId: i,
								delta: t
							}))
						}, [g, i]),
						T = Object(o.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "POST_COUNT_UPDATE",
									postID: i
								}
							}
						}),
						I = Object(E.a)(),
						x = Object(o.useCallback)(() => {
							I(Object(f.m)(i))
						}, [I, i]);
					return c.a.createElement("div", {
						className: Object(n.a)(S.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, !e.isScoreHidden && b ? c.a.createElement(c.a.Fragment, null, c.a.createElement(m.a, {
						initialDisplayCount: r,
						countToUpperBound: r,
						initialDelay: y,
						subsequentRecurringDelay: y,
						incrementDelta: y,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: x
					}), c.a.createElement(l.a, {
						variables: T.current,
						onData: O,
						queryKey: "postVoteCount"
					})) : v)
				});
			t.a = T(I)
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: r
					} of e) t.push(Object(s.e)(r));
				return t
			}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.G.NO_STRIPE_SUBSCRIPTION:
							case s.G.USER_DOESNT_EXIST:
							case s.G.USER_REQUIRED_ERROR:
							case s.G.VALIDATION_ERROR:
								return e;
							case s.G.NO_USER:
							case s.G.NO_TEXT:
							case s.G.NO_URL:
								return s.G.VALIDATION_ERROR;
							case s.G.CREDIT_CARD_FAILURE:
							case s.G.CREDIT_CARD_FAILURE_GENERIC:
								return s.G.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.G.VALIDATION_ERROR
				},
				i = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: i(e)
					} : e
				};
			t.a = i
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return E
			}));
			var s = r("./src/reddit/models/Gold/Award.ts"),
				n = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const o = e => ({
					...n.defaults(e),
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === s.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...o(e),
					source: "awards",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...o(t),
					source: "awards",
					action: "click",
					correlationId: Object(i.c)(i.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => s => ({
					...o(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, s) => n => ({
					...o(n),
					source: "create_award",
					action: "upload",
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: "image",
					actionInfo: s ? {
						reason: s
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
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => s => ({
					...o(s),
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
					goldPurchase: r ? c(r) : null
				}),
				h = (e, t, r) => s => ({
					...o(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => s => ({
					...o(s),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: n.profileById(s, t),
					subreddit: n.subredditById(s, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				E = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return h
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return f
			})), r.d(t, "clickCancelHideAward", (function() {
				return E
			})), r.d(t, "clickAwardReportFlow", (function() {
				return _
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return v
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return O
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return S
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return C
			})), r.d(t, "clickReportAward", (function() {
				return y
			})), r.d(t, "clickCancelReportAward", (function() {
				return T
			})), r.d(t, "clickConfirmReportAward", (function() {
				return I
			})), r.d(t, "viewGildModalEvent", (function() {
				return x
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return A
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return R
			})), r.d(t, "clickMessageInputEvent", (function() {
				return j
			})), r.d(t, "typeMessageInputEvent", (function() {
				return w
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return D
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return P
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return k
			})), r.d(t, "clickNextButtonEvent", (function() {
				return U
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return M
			})), r.d(t, "clickFilterEvent", (function() {
				return V
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return Y
			}));
			var s = r("./src/reddit/models/Gold/Award.ts"),
				n = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/models/GoldPurchase.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/helpers/isComment.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? i.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? i.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? i.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? i.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? i.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? i.GoldPurchaseType.GidGlobal : i.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...n.defaults(e),
					comment: t ? n.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? n.post(e, t) : void 0,
					screen: n.screen(e),
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(o.a)(e) ? "comment" : "post",
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
					source: Object(o.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => r => ({
					...u(r, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				E = (e, t) => r => ({
					...u(r, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => s => ({
					...u(s, r),
					source: Object(o.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				_ = g("award_hovercard_report"),
				v = g("cancel_award_hovercard_report"),
				O = g("flag_award"),
				S = g("cancel_flag_award"),
				C = g("confirm_flag_award"),
				y = g("report_community_award"),
				T = g("cancel_report_community_award"),
				I = g("confirm_report_community_award"),
				x = (e, t, r) => s => ({
					...u(s, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				A = (e, t, r) => s => ({
					...u(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				R = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				j = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				w = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				L = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(o.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				P = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(o.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				k = e => t => ({
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
					awarderKarmaEarned: r,
					numberCoins: s,
					thingId: n
				}) => i => ({
					...u(i, n),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(o.a)(n) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: s,
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
				Y = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "i", (function() {
				return C
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				h = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, f = i.b(e), E = f ? Object(u.getAwardTypeFromAward)(f) : null, g = b ? E : o.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, _ = r ? Object(p.a)(r) ? "comment" : "post" : void 0, v = l || o.t(e), O = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === v)[0], S = t.offerContext || (f && 0 === f.coinPrice ? n.a.StorefrontFreeAward : Object(n.d)(O, b)), C = O ? Math.round(1e4 * (O.baselinePennies - O.pennies) / O.baselinePennies) / 100 : 0, y = O ? Math.round(1e4 * (O.coins - O.baselineCoins) / O.coins) / 100 : 0, T = O ? O.baselinePennies !== O.pennies ? `${C}_percent_price` : O.baselineCoins !== O.coins ? `${y}_percent_bonus` : void 0 : void 0, I = g === d.GoldPurchaseType.Premium ? s.vb : O ? O.pennies : void 0;
					return {
						...c.defaults(e),
						comment: r ? c.comment(e, r) : null,
						correlationId: o.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: r ? c.post(e, r) : null,
						screen: c.screen(e),
						subreddit: r ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: g,
							gildedContent: b,
							contentType: _,
							numberCoins: O ? O.coins : void 0,
							offerContext: S,
							offerType: T
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: I
						},
						purchase: {
							priceMicros: I
						}
					}
				},
				f = (e, t, r) => s => ({
					...b(s, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				v = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				O = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				S = (e, t, r) => s => {
					const n = b(s, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...n.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...n.goldPurchase,
							source: e ? d.GiveGold : o.o(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				C = e => t => {
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
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			}));
			var s = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/telemetry/index.ts"),
				i = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = r("./src/reddit/selectors/platform.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: o.profile(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e)
				}),
				d = (e, t, r) => s => ({
					source: Object(a.h)(s) || r ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: o.post(s, e)
				}),
				l = (e, t, r, s) => n => {
					const a = r ? o.comment(n, r) : null,
						{
							sortToUse: c
						} = Object(i.a)(n, e);
					return {
						...d(e, t, s)(n),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => r => {
					const s = o.currentPost(r);
					return s ? d(s.id, e, t)(r) : {
						source: Object(a.h)(r) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(r)
					}
				},
				m = (e, t) => r => Object(n.a)({
					...d(e, t)(r),
					...o.defaults(r)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: o.currentPost(t),
					userSubreddit: o.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return a
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "k", (function() {
				return h
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "l", (function() {
				return E
			}));
			var s = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					screen: Object(n.screen)(e),
					profile: Object(n.profile)(e),
					subreddit: Object(n.subreddit)(e),
					userSubreddit: Object(n.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...i(t)
				}),
				o = (e, t) => r => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(r, t),
					...i(r)
				}),
				c = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(n.post)(r, t),
					comment: Object(n.comment)(r, t),
					...i(r)
				}),
				d = (e, t) => r => ({
					source: "comment",
					action: s.c.UNDO,
					noun: e,
					post: Object(n.post)(r, t),
					comment: Object(n.comment)(r, t),
					...i(r)
				}),
				l = (e, t) => r => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(r, t),
					comment: Object(n.comment)(r, t),
					...i(r)
				}),
				u = (e, t) => r => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(r, t),
					comment: Object(n.comment)(r, t),
					...i(r)
				}),
				m = (e, t) => r => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(r, t),
					comment: Object(n.comment)(r, t),
					...i(r)
				}),
				p = (e, t) => r => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(n.comment)(r, t),
					post: Object(n.post)(r, t),
					...i(r)
				}),
				h = (e, t) => r => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(n.post)(r, t),
					...i(r)
				}),
				b = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(n.post)(r, t),
					subreddit: Object(n.subredditByPostOrCommentId)(r, t)
				}),
				f = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(n.comment)(r, t),
					post: Object(n.post)(r, t),
					subreddit: Object(n.subredditByPostOrCommentId)(r, t)
				}),
				E = (e, t, r, s) => i => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(n.post)(i, r),
					subreddit: Object(n.subredditByPostOrCommentId)(i, r),
					actionInfo: {
						reason: s
					},
					...e && {
						comment: Object(n.comment)(i, r)
					}
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				n = r("./src/reddit/selectors/comments.ts"),
				i = r("./src/reddit/selectors/gold/powerups/achievements.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = a.subreddit(e),
					r = null == t ? void 0 : t.id;
				if (!r) return;
				const n = Object(c.c)(e, {
						subredditId: r
					}),
					d = Object(o.h)(e),
					l = d ? Object(i.c)(e, {
						subredditId: r,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == n ? void 0 : n.displaySettings.isUserEnabled) || !(null == n ? void 0 : n.applied)) return {
					isActive: !1,
					...u
				};
				const m = n.applied.templateId,
					p = Object(s.g)(n.applied);
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
					...a.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: r,
						achievementFlair: n
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...a.defaults(t),
						userFlair: {
							id: null == r ? void 0 : r.id,
							title: r && Object(s.g)(r),
							isActive: r && !!r,
							achievementFlairId: null == n ? void 0 : n.type,
							achievementFlairTitle: null == n ? void 0 : n.name,
							isLocked: null == n ? void 0 : n.isLocked
						}
					}
				},
				m = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...a.defaults(e)
				}),
				p = (e, t, r) => o => {
					const c = Object(n.e)(o, {
							commentId: e
						}),
						d = Object(i.c)(o, {
							subredditId: t,
							userId: r
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.defaults(o),
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(s.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");

			function i(e, t = n.a) {
				return Object(s.e)(r => Object(n.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js");

			function n(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				o = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", c({}, e, {
				className: Object(i.a)(o.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/icons/svgs/VideoReplay/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_3N5UJK0Os17icJ33e54tfY"
			}
		},
		"./src/reddit/icons/svgs/VideoReplay/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				o = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(o.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				transform: "translate(1 1)"
			}, n.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), n.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), n.a.createElement("path", {
				d: "M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",
				fill: "#FFFFFF"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/layout/row/Inline/index.m.less"),
				i = r.n(n);
			t.a = s.a.div("inlineRow", i.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			}));
			var s, n = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(s || (s = {}));
			const i = {
				[s.Powerups]: () => n.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[s.Premium]: () => n.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, o;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(o || (o = {}));
			const c = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === r,
					n = "new_purchaser" === r,
					i = "repeat_purchaser" === r;
				return t ? o.GildFlow : s ? o.LowCoinBalance : n ? o.NewUserTargetedOffer : i ? o.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "n", (function() {
				return u
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "k", (function() {
				return g
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "l", (function() {
				return T
			})), r.d(t, "p", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/reddit/models/GqlTopLevelField.ts"),
				i = r("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var o, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(o || (o = {})),
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
				m = e => e.__typename === n.a.Subreddit;
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
			const E = e => h[f[e]],
				g = e => f[h[e]],
				_ = e => b[h[e]],
				v = e => h[b[e]],
				O = e => f[b[e]];
			var S;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(S || (S = {}));
			const C = e => {
					switch (e) {
						case S.Hourly:
						case S.Daily:
						case S.Weekly:
						case S.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				T = e => {
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
							return Object(s.a)(e)
					}
				},
				I = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/omit.js"),
				n = r.n(s),
				i = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = r("./src/reddit/actions/modQueue/constants.ts"),
				o = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				d = r("./src/reddit/actions/pages/postDraft.ts"),
				l = r("./src/reddit/actions/pages/subreddit.ts"),
				u = r("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case o.b:
					case o.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case a.i:
					case a.f:
					case a.m:
					case a.p:
					case a.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: s
						} = r, n = {
							...e
						};
						return Object.keys(s).forEach(e => {
							n[e] || (n[e] = s[e])
						}), n
					}
					case u.r: {
						const {
							subredditId: r,
							applied: s,
							displaySettings: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s,
								displaySettings: n
							}
						}
					}
					case i.h: {
						const {
							subredditId: r,
							applied: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s
							}
						}
					}
					case u.j: {
						const {
							subredditId: r,
							isEnabled: s
						} = t.payload, n = {
							...e[r].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: n
							}
						}
					}
					case u.d: {
						const {
							subredditId: r,
							canAssignOwn: s
						} = t.payload, n = {
							...e[r].permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: n
							}
						}
					}
					case u.q: {
						const r = t.payload,
							s = e[r.subredditId],
							n = e[r.subredditId].templates,
							i = e[r.subredditId].templateIds,
							a = {
								...n,
								[r.template.id]: r.template
							},
							o = [...i];
						return o.includes(r.template.id) || o.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...s,
								templates: a,
								templateIds: o
							}
						}
					}
					case u.g: {
						const r = t.payload,
							s = e[r.subredditId],
							i = e[r.subredditId].templates,
							a = e[r.subredditId].templateIds,
							o = n()(i, r.templateId),
							c = a.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...s,
								templates: {
									...o
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const r = t.payload,
							s = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...s,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				n = e => e.gild.correlationId || void 0,
				i = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				o = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = e => e.gild.selectedAward,
				n = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "s", (function() {
				return o
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "x", (function() {
				return v
			})), r.d(t, "v", (function() {
				return O
			})), r.d(t, "y", (function() {
				return S
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "m", (function() {
				return A
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "d", (function() {
				return j
			}));
			var s = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(n.a)({
				features: {
					goldPurchase: i.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				o = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(s.i)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				E = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				_ = e => e.features.goldPurchase.payment.savedCardsPending,
				v = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				S = e => e.features.goldPurchase.payment.useSavedCard,
				C = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				T = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				I = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				x = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				A = e => e.features.goldPurchase.payment.stripeToken.pending,
				R = e => e.features.goldPurchase.payment.paypal.passthrough,
				j = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(a.a)({
				features: {
					userFlair: o.a
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
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : n.b.Right,
				u = Object(s.a)((e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t
					});
					if (r) return {
						type: n.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
							subredditId: t
						}),
						s = u(e, {
							subredditId: t
						}),
						n = c(e, {
							subredditId: t
						});
					if (!r || !s || !n) return !1;
					if (n.applied) return !0;
					const a = Object(i.f)(e, {
							subredditId: t
						}),
						{
							canUserChange: o
						} = s.permissions;
					return !!n.templateIds.find(e => {
						return !n.templates[e].modOnly || a
					}) && o
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.331716408c7529624d91.js.map