// https://www.redditstatic.com/desktop2x/RpanListingUnit.9593f5ee731d1598ff8f.js
// Retrieved at 9/21/2021, 9:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, s = null == e ? 0 : e.length; ++n < s;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return s(e, (function(e, s, r) {
					return n = !!t(e, s, r)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayEvery.js"),
				r = n("./node_modules/lodash/_baseEvery.js"),
				i = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = o(e) ? s : r;
				return n && a(e, t, n) && (t = void 0), c(e, i(t, 3))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
					experimentName: u.bd
				});
				return Object(u.we)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.cd
				});
				return Object(u.we)(t) ? void 0 : t
			}, (e, t) => e === u.dd.Enabled && t === u.dd.Enabled);
			var h = n("./src/config.ts");
			var b = n("./src/reddit/selectors/user.ts");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						n = t.length,
						s = new Uint32Array(e);
					return crypto.getRandomValues(s), Array.from(s).map(e => t.charAt(e % n)).join("")
				},
				v = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				g = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var _;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(_ || (_ = {}));
			const O = async e => (async (e, t) => {
				const n = (new TextEncoder).encode(t),
					s = await crypto.subtle.digest(e, n);
				return Array.from(new Uint8Array(s)).map(g).join("")
			})(_.SHA1, e);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
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
					anonymousUserId: n,
					debug: d,
					disableCookies: u,
					envKey: m,
					localStorageSaltKey: g,
					localStorageViewerUserIdKey: _,
					playerName: x,
					playerVersion: S,
					respectDoNotTrack: I,
					saltLength: T,
					saltTimeToLive: w,
					viewerUserIdLength: A
				} = {
					...C,
					...t
				};
				class j extends s.Component {
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
						this.props.sessionId !== e.sessionId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
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
						} = this.props, s = n;
						return r.a.createElement(e, E({}, s, {
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
						const e = this.props.redditUserId || j.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							n = `${v()}${e}${t}`;
						return (await O(n)).substr(0, j.VIEWER_USER_ID_LENGTH)
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
							debug: j.DEBUG,
							disableCookies: j.DISABLE_COOKIES,
							respectDoNotTrack: j.RESPECT_DO_NOT_TRACK,
							...n,
							data: {
								env_key: j.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: j.PLAYER_NAME,
								player_version: j.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = j.LOCAL_STORAGE_SALT_KEY;
						let t = Object(a.a)(e);
						return t || (t = f(j.SALT_LENGTH), Object(a.b)(e, t, j.SALT_TIME_TO_LIVE)), t
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
							muxVideoTitle: s
						} = this.props;
						return {
							video_duration: n ? j.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: n ? j.STREAM_TYPE_LIVE : j.STREAM_TYPE_ON_DEMAND,
							video_title: s,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? h.a.dashVersion : this.getHlsInstanceData() ? h.a.hlsVersion : null
						}
					}
				}
				j.displayName = y(e), j.ANONYMOUS_USER_ID = n, j.DEBUG = d, j.DISABLE_COOKIES = u, j.DURATION_LIVE = 1 / 0, j.ENV_KEY = m, j.LOCAL_STORAGE_SALT_KEY = g, j.LOCAL_STORAGE_VIEWER_USER_ID_KEY = _, j.PLAYER_NAME = x, j.PLAYER_VERSION = S, j.RESPECT_DO_NOT_TRACK = I, j.SALT_LENGTH = T, j.SALT_TIME_TO_LIVE = w, j.STREAM_TYPE_LIVE = "live", j.STREAM_TYPE_ON_DEMAND = "on-demand", j.VIEWER_USER_ID_LENGTH = A;
				const k = Object(s.forwardRef)((e, t) => r.a.createElement(j, E({}, e, {
						forwardedRef: t
					}))),
					N = Object(o.c)({
						redditUserId: b.i,
						isMuxEnabled: p
					});
				return Object(i.b)(N, null, null, {
					forwardRef: !0
				})(k)
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/lodash/every.js"),
				r = n.n(s);

			function i(e) {
				let t = null,
					n = null;
				return (...s) => (null !== t && s.length === t.length && r()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n)
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const i = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~RealtimeGQLSubscriptionAsync"), n.e("RealtimeGQLSubscriptionAsync")]).then(n.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = i
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
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
			var s = n("./src/lib/loadableAction/index.ts");
			const r = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				i = Object(s.a)(r("awardSheetInfoRequested")),
				o = Object(s.a)(r("manageableAwardsRequested")),
				a = Object(s.a)(r("createCommunityAward")),
				c = Object(s.a)(r("createGlobalAward")),
				d = Object(s.a)(r("createModAward")),
				l = Object(s.a)(r("createAwardFailed")),
				u = Object(s.a)(r("createAwardSuccessful")),
				m = Object(s.a)(r("removeCommunityAward")),
				p = Object(s.a)(r("disableAwardinCommunity")),
				h = Object(s.a)(r("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "f", (function() {
				return x
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/postParentMessage/index.ts"),
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
			const f = Object(s.a)(b.L),
				v = Object(s.a)(b.f),
				g = () => async (e, t) => {
					const s = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(r()(s))
				}, _ = Object(s.a)(b.K), O = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (s, r) => {
					const a = r(),
						c = e ? Object(u.a)(a, e) : void 0;
					s(_({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), s(Object(l.h)(o.a.GOLD_GILD_MODAL));
					const h = Object(p.G)(a, {
						thingId: n
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(i.a)(n)) {
						const e = Object(m.H)(a, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, E = Object(s.a)(b.e), y = Object(s.a)(b.J), C = () => async (e, t) => {
					const s = t(),
						i = Object(a.d)(s);
					if (Object(a.g)(s)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(o.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(i)(s)), Object(c.b)(c.a.GildingFlow)
				}, x = () => async () => {
					Object(r.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
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
				return v
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return y
			}));
			const s = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
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
				v = "REORDER_COLLECTION_PENDING",
				g = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				y = "UPDATE_COLLECTION_LAYOUT_FAILED"
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
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/realtime/GQLSubscription/async.tsx"),
				o = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = n("./src/reddit/hooks/usePrevious.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: n,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					inViewPortAnimatingCallbackOnce: h,
					isLoadTestOnly: b,
					onDataCB: f,
					postId: v,
					queryKey: g,
					queryVariables: _,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: E
				} = e, [y, C] = Object(s.useState)(!1), [x, S] = Object(s.useState)(!0), [I, T] = Object(s.useState)([]), [w, A] = Object(s.useState)(c(p).reverse()), j = Object(s.useRef)(!1), k = Object(s.useRef)(null), N = Object(s.useRef)(e => {}), P = Object(s.useRef)();
				N.current = Object(s.useCallback)(e => {
					let n = e || d();
					const s = [...w].reverse().join("");
					let r = parseInt(s) + n;
					r > t && (n = t - parseInt(s), r = t);
					const i = c(r).reverse();
					C(!1), T(w), A(i), S(!1), P.current = setTimeout(() => {
						C(!0)
					}, 0)
				}, [t, d, w]);
				const D = Object(s.useRef)(() => {}),
					R = Object(s.useRef)(),
					L = Object(s.useRef)();
				D.current = Object(s.useCallback)(() => {
					L.current = setTimeout(() => {
						N.current();
						const e = [...I].reverse().join("");
						parseInt(e) < t && D.current()
					}, E())
				}, [t, E, I]);
				const M = Object(s.useRef)(0),
					F = Object(s.useRef)(!1),
					U = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, s = 1 !== n;
							t ? (F.current = !0, j.current || (j.current = !0, R.current = setTimeout(() => {
								N.current(), D.current()
							}, u())), M.current > 0 && (N.current(M.current), M.current = 0)) : s && (F.current = !1)
						})
					}, []);
				Object(o.a)(k, U);
				const [V, H] = Object(s.useState)(!1), G = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, s = 1 !== n;
						t ? H(!0) : s && H(!1)
					})
				}, []), Y = Object(s.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(o.a)(k, G, Y.current);
				const B = Object(a.a)(t);
				Object(s.useEffect)(() => {
					if (void 0 !== B && B !== t) {
						const e = t - B;
						F.current ? (N.current(e), h && h()) : M.current += e
					}
					return () => {
						clearTimeout(R.current), clearTimeout(L.current), clearTimeout(P.current)
					}
				}, [t]);
				const W = Object(s.useCallback)(() => S(!0), [S]),
					K = 0 === I.length,
					q = x || K,
					z = Object(s.useRef)(((e, t) => `${t}_${e}_count_anim`)(v, n));
				return r.a.createElement(r.a.Fragment, null, !b && r.a.createElement("div", {
					className: l.a.countAnimation
				}, w.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const s = Math.abs(t),
							r = [n];
						if (n === s) return r;
						let i = !0;
						for (; i;) ++n > 9 && (n = 0), r.push(n), n === s && (i = !1);
						return r
					})(I[t] || 0, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: W,
						style: y && I.length > 0 && !x ? {
							transform: `translateY(-${O&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, q ? r.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const s = 0 === t || t === n.length - 1;
						if (!O || O && s) return r.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...w].reverse().join(""))), r.a.createElement("span", {
					ref: k
				}), V && r.a.createElement(i.a, {
					variables: _,
					onData: b ? m : f,
					queryKey: g,
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
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => o.a.createElement(a.i, {
				className: l.a.modalHeader
			}, o.a.createElement(a.q, null, e.title), o.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
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
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				i = n.n(r);
			const o = s.a.div("Wrapper", i.a);
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = o.a.span("Placeholder", d.a),
				u = o.a.div("SelectedFlair", d.a),
				m = o.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? i.a.createElement(u, null, i.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), i.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : i.a.createElement(u, null, s.fbt._("No flair selected", null, {
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
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
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
				h = r()((e = p) => Object(a.a)({
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				v = n("./src/reddit/controls/RadioInput/index.tsx"),
				g = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				O = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				y = n.n(E);
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
						selectedTemplateId: n
					} = this.props, {
						searchQuery: r
					} = this.state, o = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), a = !!n && o.some(e => e.id === n);
					return i.a.createElement("div", {
						className: y.a.container
					}, i.a.createElement("div", {
						className: y.a.searchBoxWrapper
					}, i.a.createElement("input", {
						className: y.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), i.a.createElement(O.a, {
						className: y.a.searchIcon
					})), i.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, o.map((e, t) => {
						const s = Object(u.c)(e),
							r = n === e.id || !a && 0 === t;
						return i.a.createElement(g.a, {
							className: y.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, i.a.createElement(f.b, {
							className: y.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && i.a.createElement(_.a, {
							className: y.a.pencil
						}))
					})))
				}
			}
			var x = n("./src/reddit/components/FlairSearch/index.m.less"),
				S = n.n(x);
			const I = Object(d.a)(e => e && Object(u.c)(e)),
				T = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: h.g
				}),
				w = Object(o.b)(T);
			t.a = w(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: r,
					onChange: o,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: h,
					isModerator: f
				} = e, v = Object(p.a)(), g = d && n && n.templateId && d[n.templateId] || void 0, _ = Object(b.a)(), O = n || I(g);
				return i.a.createElement("div", {
					className: Object(c.a)(r, S.a.container)
				}, d && l && i.a.createElement(C, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							v(Object(m.b)({
								userFlair: t
							})), o(n)
						}
					},
					selectedTemplateId: g ? g.id : "",
					templateIds: l,
					templates: d
				}), O && g && (f || g.textEditable) && i.a.createElement("div", {
					className: S.a.flairEditSection
				}, i.a.createElement("div", {
					className: S.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), h && i.a.createElement("div", {
					className: S.a.restrictionHintText
				}, Object(u.k)(g)), i.a.createElement(_, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
					flairTemplate: g,
					flairTemplateType: t,
					isFlairModOnly: g.modOnly,
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
				return g
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "i", (function() {
				return w
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				c = n.n(a),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class m extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const {
							props: {
								className: t,
								consumers: n,
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
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var p = Object(i.b)(u, {})(m),
				h = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const v = (e, t) => {
				const n = Object(b.b)(e, t),
					s = Object(f.F)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var g = Object(i.b)(() => Object(o.a)(v, h.j, (e, t) => ({
				...e,
				depth: t
			})))(e => r.a.createElement(p, {
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
				const n = Object(b.b)(e, t),
					s = Object(f.F)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var O = Object(i.b)(() => Object(o.a)(_, e => e))(e => r.a.createElement(p, {
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
			var E = Object(i.b)(() => Object(o.c)({
					subreddit: f.Q
				}))(e => r.a.createElement(p, {
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
				y = n("./src/reddit/hooks/usePostContext.ts");
			var C = e => {
				const t = Object(y.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						created: null == t ? void 0 : t.post.created,
						numComments: null == t ? void 0 : t.post.numComments,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						domain: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.displayText),
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						sourceUrl: (null == t ? void 0 : t.post.source) && (null == t ? void 0 : t.post.source.url),
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: n
				}) : null
			};
			var x = e => {
				const t = Object(y.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						isModerator: null == t ? void 0 : t.isModerator,
						post: {
							id: null == t ? void 0 : t.post.id
						},
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {}
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: n
				}) : null
			};
			var S = e => {
				const t = Object(y.a)(),
					n = Object(s.useMemo)(() => ({
						author: null == t ? void 0 : t.post.author,
						approvedAtUTC: null == t ? void 0 : t.post.approvedAtUTC,
						approvedBy: null == t ? void 0 : t.post.approvedBy,
						bannedAtUTC: null == t ? void 0 : t.post.bannedAtUTC,
						distinguishType: null == t ? void 0 : t.post.distinguishType,
						flair: null == t ? void 0 : t.post.flair,
						id: null == t ? void 0 : t.post.id,
						isApproved: null == t ? void 0 : t.post.isApproved,
						isRemoved: null == t ? void 0 : t.post.isRemoved,
						isSpam: null == t ? void 0 : t.post.isSpam,
						media: null == t ? void 0 : t.post.media,
						numComments: null == t ? void 0 : t.post.numComments,
						permalink: null == t ? void 0 : t.post.permalink,
						removedBy: null == t ? void 0 : t.post.bannedBy,
						subreddit: (null == t ? void 0 : t.subredditOrProfile) ? {
							id: null == t ? void 0 : t.subredditOrProfile.id,
							name: null == t ? void 0 : t.subredditOrProfile.name,
							type: null == t ? void 0 : t.subredditOrProfile.type
						} : {},
						title: null == t ? void 0 : t.post.title,
						voteState: null == t ? void 0 : t.post.voteState
					}), [t]);
				return t ? r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: n
				}) : null
			};
			var I = Object(i.b)(() => Object(o.c)({
				subreddit: f.Q
			}))(e => r.a.createElement(p, {
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
			var T = Object(i.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(f.I)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(p, {
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
			var w = Object(i.b)(() => Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.Q)(e, {
					subredditId: t
				}) : null
			}))(e => r.a.createElement(p, {
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
			var s = n("./node_modules/lodash/isEqual.js"),
				r = n.n(s),
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
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
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
				} : Object(o.n)(t) && !Object(o.r)(s) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : r()(n, t) ? {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				v = n("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				g = n("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				_ = n("./src/reddit/constants/chat.ts"),
				O = n("./src/reddit/constants/postLayout.ts"),
				E = n("./src/reddit/helpers/localStorage/index.ts"),
				y = n("./src/reddit/helpers/overlay/index.ts"),
				C = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				x = n("./src/reddit/helpers/trackers/rpan.ts"),
				S = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				I = n("./src/reddit/models/Vote/index.ts"),
				T = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				A = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				N = n("./src/reddit/components/Flatlist/index.tsx"),
				P = n("./src/reddit/components/Flatlist/constants.ts"),
				D = n("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				R = n("./src/reddit/components/HlsVideo/index.tsx"),
				L = n("./src/reddit/components/OverflowMenu/index.tsx"),
				M = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = n("./src/reddit/components/PostLeftRail/index.tsx"),
				U = n("./src/reddit/components/TrackingHelper/index.tsx"),
				V = n("./src/reddit/controls/Dropdown/Row.tsx"),
				H = n("./src/reddit/controls/InternalLink/index.tsx"),
				G = n("./src/reddit/controls/Score/index.tsx"),
				Y = n("./src/reddit/icons/fonts/index.tsx"),
				B = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = n.n(B),
				K = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				q = n.n(K);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Z = 20, J = l.lc, Q = l.lc, X = Object(c.a)(R.a, {
				playerName: "RPAN DU Video Player"
			}), $ = Object(i.b)(() => Object(o.c)({
				autoplay: j.b,
				isLoggedIn: j.K,
				isOverlayOpen: w.h,
				location: (e, {
					listingName: t
				}) => {
					const n = Object(A.m)(e, {
						listingName: t
					});
					let s;
					if (n) {
						s = `${Object(C.d)(n)}${Object(v.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						s = e === b.R ? Object(C.e)() : Object(C.f)(e)
					}
					return s
				},
				stream: (e, {
					listingName: t
				}) => Object(A.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(A.l)(e, t),
				rpanDuThresholdVariant: T.i,
				inRpanDUPreloadExperiment: T.b,
				inRpanDuTargetingExperiment: T.c
			}), (e, t) => ({
				onHideRpanUnit: (n, s) => e(Object(h.B)(t.listingName, n, {
					showToast: s.showToast
				})),
				openOverlay: t => e(Object(y.a)(t)),
				subscribeConfig: () => e(f.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(f.a.subscribeStats(t)),
				subscribeStreams: () => e(f.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), ee = () => r.a.createElement("h3", {
				className: q.a.title
			}, z._("Top livestream", null, {
				hk: "4od1tZ"
			})), te = () => r.a.createElement("p", {
				className: q.a.description
			}, z._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class ne extends s.Component {
				constructor(e) {
					super(e), this.observableElement = r.a.createRef(), this.videoRef = r.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(E.W)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(E.L)());
						if (e) {
							if (Date.now() - e >= J) {
								Object(E.W)();
								const e = 30 * l.A,
									t = Date.now() - e + Q;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(E.Mb)(Date.now())
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
							sendEvent: s
						} = this.props;
						n(Date.now(), {
							showToast: !0
						}), s(Object(x.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: n
						} = this.props;
						t(n ? Object(x.j)(n, 1) : Object(x.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(x.j)()), this.openOverlay()
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
							streamById: s
						} = this.props, r = n && n.post.id === e.id ? n : s(e.id);
						if (!r) return;
						const i = !t.sessionDurationMs ? x.E : x.A,
							o = {
								chatState: _.a.None,
								playerType: x.a.DU
							},
							a = i(r, {
								...t,
								...o
							});
						this.props.sendEvent(a)
					}, this.state = {
						isInFocus: !0,
						isIntersecting: !1,
						isReady: !1,
						isInLoadingIntersection: !1,
						sessionId: ""
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
					return t === S.a.IS_LIVE || t === S.a.DISCONNECTED
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
					var n;
					const {
						video: s
					} = this, {
						autoplay: r,
						stream: i,
						inRpanDUPreloadExperiment: o
					} = this.props, {
						isOverlayOpen: a,
						stream: c
					} = e, {
						isReady: d
					} = this.state, {
						isInFocus: l,
						isIntersecting: m,
						isReady: p,
						isInLoadingIntersection: h
					} = t, {
						isVisible: b,
						isLoadable: f
					} = this, v = l && m && !a, g = !v && b, _ = v && !b, O = l && h && !a, E = o ? O && !f : _;
					(o ? !O && f : g) ? (this.subscribeConfig(), this.subscribeStreams()) : E && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const y = i && i.post.id,
						C = y !== (c && c.post.id),
						x = !!y;
					C && this.setState({
						isReady: !1
					});
					const S = C && !x || x && _;
					if (C && x && b || x && g ? this.subscribeStats() : S && this.unsubscribeStats(), r && s) {
						const e = this.getOrCreateVideoSessionManager(s),
							t = !p && d,
							r = x && (t && b || g && d),
							i = x && _;
						C && e.endSession(), r ? (e.startSession({
							id: y
						}), this.setState({
							sessionId: (null === (n = null == e ? void 0 : e.sessionStats) || void 0 === n ? void 0 : n.id) || ""
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : i && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === O.g.Classic ? this.renderClassicContent() : e === O.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return r.a.createElement("div", {
						className: Object(d.a)(q.a.container, {
							[W.a.largeAndMediumPostStyles]: e === O.g.Large || e === O.g.Medium,
							[W.a.classicPostStyles]: e === O.g.Classic,
							[W.a.compactPostStyles]: e === O.g.Compact,
							[q.a.large]: e === O.g.Large || e === O.g.Medium,
							[q.a.classic]: e === O.g.Classic,
							[q.a.compact]: e === O.g.Compact
						}, this.props.className)
					}, e !== O.g.Large && r.a.createElement(F.b, {
						className: q.a.leftRail,
						withoutComputedStyles: e === O.g.Compact
					}, r.a.createElement(se, {
						isVertical: !0
					}), e === O.g.Compact && r.a.createElement(se, {
						isVertical: !1
					})), r.a.createElement(M.a, {
						className: q.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return r.a.createElement("div", {
						className: q.a.titleAndDescriptionContainer
					}, r.a.createElement(H.a, {
						to: this.props.location
					}, r.a.createElement(ee, null), e && r.a.createElement(te, null)))
				}
				renderLargeContent() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.header
					}, this.renderTitleAndDescription(), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))), r.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, r.a.createElement(H.a, {
						to: this.props.location,
						onClick: this.onStreamClicked,
						className: q.a.previewLink,
						tabIndex: 0
					}, r.a.createElement("div", {
						className: q.a.previewContainer
					}, this.renderThumbnail()), this.renderInfo())))
				}
				renderClassicContent() {
					return r.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, r.a.createElement(H.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, r.a.createElement("div", {
						className: q.a.thumbnailContainer
					}, this.renderThumbnail())), r.a.createElement("div", {
						className: q.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(re, {
						onClick: this.onHeaderClicked
					}), r.a.createElement(N.a, {
						className: q.a.flatlistSeparator
					}), r.a.createElement("div", null, r.a.createElement(ie, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return r.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, r.a.createElement("div", {
						className: q.a.main
					}, r.a.createElement(re, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(oe, {
						onClick: this.onHideUnitClicked
					}))))
				}
				renderInfo() {
					if (this.props.stream && this.state.isReady) return r.a.createElement("div", {
						className: q.a.infoContainer
					}, this.renderExpandIcon(), this.renderLiveStatus(), this.renderWatcherCount())
				}
				renderExpandIcon() {
					return r.a.createElement("div", {
						className: q.a.bigExpando
					}, r.a.createElement(Y.a, {
						name: "expand",
						className: q.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? r.a.createElement("span", {
						className: q.a.liveStatus
					}, r.a.createElement(g.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return r.a.createElement("span", {
						className: q.a.watchingCount
					}, z._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [z._plural(t, "number")], {
						hk: "33zJ5F"
					}))
				}
				renderThumbnail() {
					return r.a.createElement("div", {
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
						s = t.post.id,
						i = t.post.title;
					return r.a.createElement(X, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: n,
						muxVideoId: s,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: i,
						startTime: t.broadcast_time,
						isPaused: this.isPaused,
						onEnded: this.onEnded,
						onError: this.onError,
						onLoadedData: this.onLoadedData,
						onResourceRemoved: this.onResourceRemoved,
						videoRef: this.videoRef,
						sessionId: this.state.sessionId
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
						threshold: t ? Object(T.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(T.h)(t) : .01,
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
			const se = e => r.a.createElement(k.a, {
					className: Object(d.a)({
						[q.a.verticalVotes]: e.isVertical,
						[q.a.horizontalVotes]: !e.isVertical
					})
				}, r.a.createElement(G.a, {
					className: q.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: I.a.notVoted
				})),
				re = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: q.a.expandoButton,
					onClick: e
				}, r.a.createElement(Y.a, {
					name: "expand",
					className: q.a.expandoIcon
				})),
				ie = ({
					onClick: e,
					isLoggedIn: t
				}) => r.a.createElement(D.a, {
					displayText: z._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: P.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, r.a.createElement(Y.a, {
					name: "hide"
				})),
				oe = ({
					onClick: e
				}) => r.a.createElement(L.b, {
					className: q.a.overflowMenu,
					dropdownClassName: q.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, r.a.createElement(V.b, {
					className: q.a.overflowItem,
					displayText: z._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: q.a.overflowItemIconWrapper,
					textClassName: q.a.overflowItemText,
					onClick: e
				}, r.a.createElement(Y.a, {
					name: "hide"
				})));
			t.default = $(Object(U.c)(ne))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/MetaSeparator/index.m.less"),
				a = n.n(o);
			const c = e => r.a.createElement("span", {
				className: Object(i.a)(a.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => r.a.createElement(c, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/keycodes.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class m extends r.a.Component {
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
					return e.hidden ? null : r.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(i.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(a.a, {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/keycodes.ts");
			class o extends r.a.Component {
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
						return r.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const r = e.key === i.b.ArrowUp,
							o = e.key === i.b.ArrowDown;
						if (r || o) {
							const t = this.getValues();
							if (!t.length) return;
							const i = s ? t.indexOf(s) : 0,
								o = t[((r ? i - 1 : i + 1) + t.length) % t.length];
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
					return r.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, r.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), r.a.Children.map(e.children, (n, s) => {
						const i = 0 === s,
							o = n.props.value === t,
							a = null !== t ? o ? 0 : -1 : i ? 0 : -1;
						return r.a.cloneElement(n, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
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
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				_ = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				O = n("./src/reddit/selectors/meta.ts"),
				E = n("./src/reddit/controls/Score/index.m.less"),
				y = n.n(E);
			const C = e => e.voteState === g.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === g.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(h.a)(Object(p.a)(e)),
				x = () => 0,
				S = Object(d.b)(e => ({
					locale: Object(O.i)(e)
				})),
				I = Object(i.a)(e => {
					const t = {
							color: e.light ? m.b.lightboxHeaderText : C(e)
						},
						{
							score: n,
							postId: i = "",
							locale: p,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: v
						} = e,
						g = Object(d.d)(),
						O = null == p ? void 0 : p.startsWith("en"),
						E = e.isScoreHidden ? O ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: y.a.dot
						}, "•") : Object(o.b)(n),
						S = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && g(Object(l.I)({
								postId: i,
								delta: t
							}))
						}, [g, i]),
						I = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: i
								}
							}
						}),
						T = Object(f.a)(),
						w = Object(a.useCallback)(() => {
							T(Object(b.m)(i))
						}, [T, i]),
						A = !e.isScoreHidden && h && n < _.a;
					return c.a.createElement("div", {
						className: Object(r.a)(y.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, (A || v) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: n,
						countToUpperBound: n,
						initialDelay: x,
						subsequentRecurringDelay: x,
						incrementDelta: x,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: w,
						postId: i,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: I.current,
						onDataCB: S,
						isLoadTestOnly: v && !A
					})), !A && E)
				});
			t.a = S(I)
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.e)(n));
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
			var s = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.H.NO_STRIPE_SUBSCRIPTION:
							case s.H.USER_DOESNT_EXIST:
							case s.H.USER_REQUIRED_ERROR:
							case s.H.VALIDATION_ERROR:
								return e;
							case s.H.NO_USER:
							case s.H.NO_TEXT:
							case s.H.NO_URL:
								return s.H.VALIDATION_ERROR;
							case s.H.CREDIT_CARD_FAILURE:
							case s.H.CREDIT_CARD_FAILURE_GENERIC:
								return s.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.H.VALIDATION_ERROR
				},
				i = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
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
				return v
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
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
				u = (e, t, n) => s => ({
					...a(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, s) => r => ({
					...a(r),
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
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => s => ({
					...a(s),
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
				h = (e, t, n) => s => ({
					...a(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => s => ({
					...a(s),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: r.profileById(s, t),
					subreddit: r.subredditById(s, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				v = (e, t) => b(e, t, "enable_in_community")
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
				return v
			})), n.d(t, "clickAwardReportFlow", (function() {
				return _
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return O
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return y
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return C
			})), n.d(t, "clickReportAward", (function() {
				return x
			})), n.d(t, "clickCancelReportAward", (function() {
				return S
			})), n.d(t, "clickConfirmReportAward", (function() {
				return I
			})), n.d(t, "viewGildModalEvent", (function() {
				return T
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return w
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return A
			})), n.d(t, "clickMessageInputEvent", (function() {
				return j
			})), n.d(t, "typeMessageInputEvent", (function() {
				return k
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return N
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return P
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return D
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), n.d(t, "clickNextButtonEvent", (function() {
				return M
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), n.d(t, "clickFilterEvent", (function() {
				return V
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return H
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return G
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/models/GoldPurchase.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
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
					...r.defaults(e),
					comment: t ? r.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(o.d)(o.a.GildingFlow, !1),
					post: t ? r.post(e, t) : void 0,
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
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
				v = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, n) => s => ({
					...u(s, n),
					source: Object(a.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				_ = g("award_hovercard_report"),
				O = g("cancel_award_hovercard_report"),
				E = g("flag_award"),
				y = g("cancel_flag_award"),
				C = g("confirm_flag_award"),
				x = g("report_community_award"),
				S = g("cancel_report_community_award"),
				I = g("confirm_report_community_award"),
				T = (e, t, n) => s => ({
					...u(s, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				w = (e, t, n) => s => ({
					...u(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				A = (e, t) => n => ({
					...u(n, t),
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
				k = e => t => ({
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
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				D = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				M = e => t => ({
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
				U = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: n,
					numberCoins: s,
					thingId: r
				}) => i => ({
					...u(i, r),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(a.a)(r) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
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
				H = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				G = () => e => ({
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
				return v
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "i", (function() {
				return C
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
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
					} = t, b = !!n, f = i.b(e), v = f ? Object(u.getAwardTypeFromAward)(f) : null, g = b ? v : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, _ = n ? Object(p.a)(n) ? "comment" : "post" : void 0, O = l || a.t(e), E = [...Object(o.d)(e), ...Object(o.f)(e)].filter(e => e.mobileId === O)[0], y = t.offerContext || (f && 0 === f.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(E, b)), C = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, x = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, S = E ? E.baselinePennies !== E.pennies ? `${C}_percent_price` : E.baselineCoins !== E.coins ? `${x}_percent_bonus` : void 0 : void 0, I = g === d.GoldPurchaseType.Premium ? s.wb : E ? E.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: a.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: g,
							gildedContent: b,
							contentType: _,
							numberCoins: E ? E.coins : void 0,
							offerContext: y,
							offerType: S
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
				f = (e, t, n) => s => ({
					...b(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				v = e => t => ({
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
				O = (e, t) => n => ({
					...b(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				y = (e, t, n) => s => {
					const r = b(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...r.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...r.goldPurchase,
							source: e ? d.GiveGold : a.o(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				C = e => t => {
					var n;
					const s = b(t, {
						thingId: e
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...s.payment,
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
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.profile(e),
					screen: a.screen(e),
					subreddit: a.subreddit(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(o.h)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: a.post(s, e)
				}),
				l = (e, t, n, s) => r => {
					const o = n ? a.comment(r, n) : null,
						{
							sortToUse: c
						} = Object(i.a)(r, e);
					return {
						...d(e, t, s)(r),
						comment: o,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = a.currentPost(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(o.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...d(e, t)(n),
					...a.defaults(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
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
				return v
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					screen: Object(r.screen)(e),
					profile: Object(r.profile)(e),
					subreddit: Object(r.subreddit)(e),
					userSubreddit: Object(r.userSubreddit)(e)
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
					post: Object(r.post)(n, t),
					...i(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...i(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: s.c.UNDO,
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...i(n)
				}),
				l = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...i(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...i(n)
				}),
				m = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...i(n)
				}),
				p = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.comment)(n, t),
					post: Object(r.post)(n, t),
					...i(n)
				}),
				h = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					...i(n)
				}),
				b = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					subreddit: Object(r.subredditByPostOrCommentId)(n, t)
				}),
				f = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.comment)(n, t),
					post: Object(r.post)(n, t),
					subreddit: Object(r.subredditByPostOrCommentId)(n, t)
				}),
				v = (e, t, n, s) => i => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.post)(i, n),
					subreddit: Object(r.subredditByPostOrCommentId)(i, n),
					actionInfo: {
						reason: s
					},
					...e && {
						comment: Object(r.comment)(i, n)
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
				return v
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "v", (function() {
				return k
			})), n.d(t, "w", (function() {
				return N
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				o = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
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
				v = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...i(e)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...i(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...i(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...i(t),
					actionInfo: r.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				y = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...i(t)
				}),
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...i(e)
				}),
				x = (e, t, n) => o => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...i(o),
					actionInfo: r.actionInfo(o, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...i(e)
				}),
				I = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...i(e)
				}),
				T = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...i(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...i(e),
					scheduledPost: o(t)
				}),
				A = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...i(e)
				}),
				j = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...i(e),
					scheduledPost: o(t)
				}),
				k = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...i(e)
				}),
				N = () => (e, t) => {
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
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.defaults(e)
				}),
				o = e => t => {
					const {
						userFlair: n,
						achievementFlair: i
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(s.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == i ? void 0 : i.type,
							achievementFlairTitle: null == i ? void 0 : i.name,
							isLocked: null == i ? void 0 : i.isLocked
						}
					}
				},
				a = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...r.defaults(e)
				})
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", c({}, e, {
				className: Object(i.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", i({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/VideoMute/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				a = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(a.a.icon, e.className),
				viewBox: "0 0 50 50",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(1 1)"
			}, r.a.createElement("circle", {
				cx: "24",
				cy: "24",
				r: "24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "1.92"
			}), r.a.createElement("path", {
				fill: "#fff",
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2"
			})))
		},
		"./src/reddit/icons/svgs/VideoVolume/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
				d: "M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",
				fill: "#FFFFFF"
			}), r.a.createElement("path", {
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
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("inlineRow", i.a)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(s || (s = {}));
			const i = {
				[s.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[s.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
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
					s = "low_coin_upsell" === n,
					r = "new_purchaser" === n,
					i = "repeat_purchaser" === n;
				return t ? a.GildFlow : s ? a.LowCoinBalance : r ? a.NewUserTargetedOffer : i ? a.RepeatUserTargetedOffer : void 0
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
				return v
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "p", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
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
				m = e => e.__typename === r.a.Subreddit;
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
			const v = e => h[f[e]],
				g = e => f[h[e]],
				_ = e => b[h[e]],
				O = e => h[b[e]],
				E = e => f[b[e]];
			var y;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const C = e => {
					switch (e) {
						case y.Hourly:
						case y.Daily:
						case y.Weekly:
						case y.Monthly:
							return !0
					}
					return !1
				},
				x = "custom",
				S = e => {
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
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
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
			const s = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				i = e => e.gild.isAnonymous,
				o = e => e.gild.isIframed,
				a = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = e => e.gild.selectedAward,
				r = e => e.gild.gildedThing
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
				return v
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "v", (function() {
				return E
			})), n.d(t, "y", (function() {
				return y
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "d", (function() {
				return j
			}));
			var s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(r.a)({
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
					const t = Object(s.j)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				_ = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				y = e => e.features.goldPurchase.payment.useSavedCard,
				C = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				x = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				S = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				I = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				T = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
				A = e => e.features.goldPurchase.payment.paypal.passthrough,
				j = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.9593f5ee731d1598ff8f.js.map