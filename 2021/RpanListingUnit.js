// https://www.redditstatic.com/desktop2x/RpanListingUnit.56a9c1fcfa2bd1f17906.js
// Retrieved at 5/26/2021, 11:00:05 AM by Reddit Dataminer v1.0.0
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
				a = n("./node_modules/lodash/isArray.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : r;
				return n && o(e, t, n) && (t = void 0), c(e, i(t, 3))
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
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/cache/localStorage/index.ts"),
				c = n("./src/lib/combineRefs/index.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => n.e("MuxEmbed").then(n.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(a.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.pc
				});
				return Object(u.Gd)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.qc
				});
				return Object(u.Gd)(t) ? void 0 : t
			}, (e, t) => e === u.rc.Enabled && t === u.rc.Enabled);
			var h = n("./src/config.ts");
			var b = n("./src/reddit/selectors/user.ts");
			const f = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						n = t.length,
						s = new Uint32Array(e);
					return crypto.getRandomValues(s), Array.from(s).map(e => t.charAt(e % n)).join("")
				},
				g = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				v = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var E;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(E || (E = {}));
			const C = async e => (async (e, t) => {
				const n = (new TextEncoder).encode(t),
					s = await crypto.subtle.digest(e, n);
				return Array.from(new Uint8Array(s)).map(v).join("")
			})(E.SHA1, e);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				x = {
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
					localStorageSaltKey: h,
					localStorageViewerUserIdKey: v,
					playerName: E,
					playerVersion: y,
					respectDoNotTrack: w,
					saltLength: S,
					saltTimeToLive: I,
					viewerUserIdLength: T
				} = {
					...x,
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
						} = this.props, s = n;
						return r.a.createElement(e, O({}, s, {
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
							n = `${g()}${e}${t}`;
						return (await C(n)).substr(0, j.VIEWER_USER_ID_LENGTH)
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
						let t = Object(o.a)(e);
						return t || (t = f(j.SALT_LENGTH), Object(o.b)(e, t, j.SALT_TIME_TO_LIVE)), t
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
							video_title: s
						}
					}
				}
				j.displayName = _(e), j.ANONYMOUS_USER_ID = n, j.DEBUG = d, j.DISABLE_COOKIES = u, j.DURATION_LIVE = 1 / 0, j.ENV_KEY = m, j.LOCAL_STORAGE_SALT_KEY = h, j.LOCAL_STORAGE_VIEWER_USER_ID_KEY = v, j.PLAYER_NAME = E, j.PLAYER_VERSION = y, j.RESPECT_DO_NOT_TRACK = w, j.SALT_LENGTH = S, j.SALT_TIME_TO_LIVE = I, j.STREAM_TYPE_LIVE = "live", j.STREAM_TYPE_ON_DEMAND = "on-demand", j.VIEWER_USER_ID_LENGTH = T;
				const A = Object(s.forwardRef)((e, t) => r.a.createElement(j, O({}, e, {
						forwardedRef: t
					}))),
					N = Object(a.c)({
						redditUserId: b.g,
						isMuxEnabled: p
					});
				return Object(i.b)(N, null, null, {
					forwardRef: !0
				})(A)
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
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				i = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				o = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
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
				a = Object(s.a)(r("manageableAwardsRequested")),
				o = Object(s.a)(r("createCommunityAward")),
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
				return v
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/postParentMessage/index.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/telemetry/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const f = Object(s.a)(b.L),
				g = Object(s.a)(b.g),
				v = () => async (e, t) => {
					const s = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(h.a)(r()(s))
				}, E = Object(s.a)(b.K), C = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (s, r) => {
					const o = r(),
						c = e ? Object(u.a)(o, e) : void 0;
					s(E({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), s(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const h = Object(p.K)(o, {
						thingId: n
					});
					let b = null;
					if (h) b = h.id;
					else if (Object(i.a)(n)) {
						const e = Object(m.F)(o, {
							postId: n
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, n)
				}, O = Object(s.a)(b.f), _ = Object(s.a)(b.J), x = () => async (e, t) => {
					const s = t(),
						i = Object(o.d)(s);
					if (Object(o.g)(s)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(O()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(h.a)(d(i)(s)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
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
				return a
			})), n.d(t, "g", (function() {
				return o
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
				return g
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "o", (function() {
				return _
			}));
			const s = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
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
				g = "REORDER_COLLECTION_PENDING",
				v = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				C = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				_ = "UPDATE_COLLECTION_LAYOUT_FAILED"
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				a = n("./src/reddit/hooks/usePrevious.ts"),
				o = n("./src/reddit/components/CountAnimation/config.ts"),
				c = n("./src/reddit/components/CountAnimation/helpers.ts"),
				d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const {
					initialDisplayCount: t,
					countToUpperBound: n,
					incrementDelta: d,
					initialDelay: u,
					subsequentRecurringDelay: m,
					shouldDisjointAnimation: p,
					id: h
				} = e, [b, f] = Object(s.useState)(!1), [g, v] = Object(s.useState)(!0), [E, C] = Object(s.useState)([]), [O, _] = Object(s.useState)(Object(c.d)(t).reverse()), x = Object(s.useRef)(!1), y = Object(s.useRef)(null), w = Object(s.useRef)(e => {}), S = Object(s.useRef)();
				w.current = Object(s.useCallback)(e => {
					let t = e || d();
					const s = [...O].reverse().join("");
					let r = parseInt(s) + t;
					r > n && (t = n - parseInt(s), r = n);
					const i = Object(c.d)(r).reverse();
					f(!1), C(O), _(i), v(!1), S.current = setTimeout(() => {
						f(!0)
					}, 0)
				}, [n, d, O]);
				const I = Object(s.useRef)(() => {}),
					T = Object(s.useRef)(),
					j = Object(s.useRef)();
				I.current = Object(s.useCallback)(() => {
					j.current = setTimeout(() => {
						w.current();
						const e = [...E].reverse().join("");
						parseInt(e) < n && I.current()
					}, m())
				}, [n, m, E]);
				const A = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && (x.current || (x.current = !0, T.current = setTimeout(() => {
							w.current(), I.current()
						}, u())))
					})
				}, []);
				Object(i.a)(y, A);
				const N = Object(a.a)(n);
				Object(s.useEffect)(() => (void 0 !== N && N !== n && w.current(n - N), () => {
					clearTimeout(T.current), clearTimeout(j.current), clearTimeout(S.current)
				}), [n]);
				const P = Object(s.useCallback)(() => v(!0), [v]),
					R = 0 === E.length,
					D = g || R;
				return r.a.createElement("div", {
					className: l.a.countAnimation,
					ref: y
				}, O.map((e, t) => {
					const n = E[t] || 0,
						s = Object(c.f)(n, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: P,
						style: b && E.length > 0 && !g ? {
							transform: `translateY(-${p&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(p?o.b.disjointAnimationDuration:o.b.animationIncrementDuration)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, D ? r.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!p || p && n) return r.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					id: h,
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...O].reverse().join("")))
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
				a = n.n(i),
				o = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(o.h, {
				className: l.a.modalHeader
			}, a.a.createElement(o.p, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
			}, a.a.createElement(o.b, null)))
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
			const a = s.a.div("Wrapper", i.a);
			t.a = a
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
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
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
				a = n.n(i),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				h = r()((e = p) => Object(o.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
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
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/selectors/moderatorPermissions.ts"),
				p = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = n("./src/reddit/components/Flair/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				f = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				v = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				C = n.n(E);
			class O extends i.a.Component {
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
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), o = !!n && a.some(e => e.id === n);
					return i.a.createElement("div", {
						className: C.a.container
					}, i.a.createElement("div", {
						className: C.a.searchBoxWrapper
					}, i.a.createElement("input", {
						className: C.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), i.a.createElement(v.a, {
						className: C.a.searchIcon
					})), i.a.createElement(b.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const s = Object(u.c)(e),
							r = n === e.id || !o && 0 === t;
						return i.a.createElement(f.a, {
							className: C.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, i.a.createElement(h.b, {
							className: C.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && i.a.createElement(g.a, {
							className: C.a.pencil
						}))
					})))
				}
			}
			var _ = n("./src/reddit/components/FlairSearch/index.m.less"),
				x = n.n(_);
			const y = "FlairSearch-EmojiPicker-DropdownId",
				w = Object(d.a)(e => e && Object(u.c)(e)),
				S = Object(o.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: m.f
				}),
				I = Object(a.b)(S);
			class T extends i.a.Component {
				constructor() {
					super(...arguments), this.onFlairEdit = e => {
						const {
							templates: t
						} = this.props, n = t && e.templateId ? t[e.templateId] : void 0;
						let s = e;
						n && (s = Object(u.d)({
							flair: e,
							template: n,
							ignoreTextAllowance: !0
						})), this.props.onChange(s)
					}, this.onTemplateSelected = e => {
						const {
							templates: t
						} = this.props;
						if (t) {
							const n = t[e],
								s = Object(u.c)(n);
							this.props.onChange(s)
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						isModerator: t,
						templates: n,
						templateIds: r,
						subredditId: a
					} = e, o = n && e.flair && e.flair.templateId && n[e.flair.templateId] || void 0, d = Object(p.a)(), l = e.flair || w(o);
					return i.a.createElement("div", {
						className: Object(c.a)(e.className, x.a.container)
					}, n && r && i.a.createElement(O, {
						flairTemplateType: e.flairTemplateType,
						onChange: this.onTemplateSelected,
						selectedTemplateId: o ? o.id : "",
						templateIds: r,
						templates: n
					}), l && o && (t || o.textEditable) ? i.a.createElement("div", {
						className: x.a.flairEditSection
					}, i.a.createElement("div", {
						className: x.a.editLabel
					}, s.fbt._("Edit flair", null, {
						hk: "1APWWu"
					})), e.areFlairRestrictionsEnabled && i.a.createElement("div", {
						className: x.a.restrictionHintText
					}, Object(u.k)(o)), i.a.createElement(d, {
						autofocus: !0,
						emojiPickerId: y,
						flair: l,
						flairTemplate: o,
						flairTemplateType: e.flairTemplateType,
						isFlairModOnly: o.modOnly,
						onChange: this.onFlairEdit,
						subredditId: a
					})) : null)
				}
			}
			t.a = I(T)
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "i", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./node_modules/lodash/isNil.js"),
				c = n.n(o),
				d = n("./src/reddit/constants/jsapiEvents.ts");
			var l = n("./src/reddit/singleton/EventSystem.ts");
			const u = Object(a.c)({
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
			const g = (e, t) => {
				const n = Object(b.a)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(i.b)(() => Object(a.a)(g, h.j, (e, t) => ({
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
			const E = (e, t) => {
				const n = Object(b.a)(e, t),
					s = Object(f.J)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var C = Object(i.b)(() => Object(a.a)(E, e => e))(e => r.a.createElement(p, {
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
					subreddit: f.U
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
				_ = n("./src/reddit/hooks/usePostContext.ts");
			var x = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(_.a)(), i = Object(s.useMemo)(() => ({
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
				return r.a.createElement(p, {
					className: e.className,
					type: "post",
					data: i
				})
			};
			var y = e => {
				const {
					post: t,
					subredditOrProfile: n,
					isModerator: i
				} = Object(_.a)(), a = Object(s.useMemo)(() => ({
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
				return r.a.createElement(p, {
					className: e.className,
					type: "postAuthor",
					data: a
				})
			};
			var w = e => {
				const {
					post: t,
					subredditOrProfile: n
				} = Object(_.a)(), i = Object(s.useMemo)(() => ({
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
				return r.a.createElement(p, {
					className: e.className,
					type: "postModTools",
					data: i
				})
			};
			var S = Object(i.b)(() => Object(a.c)({
				subreddit: f.U
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
			var I = Object(i.b)(() => Object(a.c)({
				subredditOrProfile: (e, t) => Object(f.M)(e, {
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
			var T = Object(i.b)(() => Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => t ? Object(f.U)(e, {
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
				a = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === o.f.Text || e.type === o.f.Image || e.type === o.f.Richtext);
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
			n.r(t), n.d(t, "RpanTitle", (function() {
				return ne
			})), n.d(t, "LivestreamTitle", (function() {
				return se
			})), n.d(t, "RpanDescription", (function() {
				return re
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				o = n("./src/telemetry/index.ts"),
				c = n("./src/higherOrderComponents/withMux/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/localStorageAvailable/index.ts"),
				m = n("./src/lib/onFocusAndVisibilityChange/index.ts"),
				p = n("./src/lib/VideoSession/VideoSessionManager.ts"),
				h = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				f = n("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				g = n("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				v = n("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				E = n("./src/reddit/constants/chat.ts"),
				C = n("./src/reddit/constants/postLayout.ts"),
				O = n("./src/reddit/helpers/localStorage/index.ts"),
				_ = n("./src/reddit/helpers/overlay/index.ts"),
				x = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				y = n("./src/reddit/helpers/trackers/rpan.ts"),
				w = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				I = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				T = n("./src/reddit/selectors/platform.ts"),
				j = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				P = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/Flatlist/constants.ts"),
				D = n("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				k = n("./src/reddit/components/HlsVideo/index.tsx"),
				L = n("./src/reddit/components/OverflowMenu/index.tsx"),
				M = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = n("./src/reddit/components/PostLeftRail/index.tsx"),
				U = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				V = n("./src/reddit/components/TrackingHelper/index.tsx"),
				H = n("./src/reddit/controls/Dropdown/Row.tsx"),
				G = n("./src/reddit/controls/InternalLink/index.tsx"),
				B = n("./src/reddit/controls/Score/index.tsx"),
				Y = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				W = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				K = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				z = n.n(K),
				Z = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				q = n.n(Z);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = 20, $ = l.gc, Q = l.gc, ee = Object(c.a)(k.a, {
				playerName: "RPAN DU Video Player"
			}), te = Object(i.b)(() => Object(a.c)({
				autoplay: A.b,
				isLoggedIn: A.J,
				isOverlayOpen: T.h,
				location: (e, {
					listingName: t
				}) => {
					const n = Object(j.m)(e, {
						listingName: t
					});
					let s;
					if (n) {
						s = `${Object(x.d)(n)}${Object(g.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						s = e === b.R ? Object(x.e)() : Object(x.f)(e)
					}
					return s
				},
				stream: (e, {
					listingName: t
				}) => Object(j.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(j.l)(e, t),
				rpanDuThresholdVariant: I.i,
				inRpanDUPreloadExperiment: I.b,
				inRpanDuTargetingExperiment: I.c
			}), (e, t) => ({
				onHideRpanUnit: (n, s) => e(Object(h.B)(t.listingName, n, {
					showToast: s.showToast
				})),
				openOverlay: t => e(Object(_.a)(t)),
				subscribeConfig: () => e(f.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(f.a.subscribeStats(t)),
				subscribeStreams: () => e(f.a.subscribeStreams(t.listingName, {
					pageSize: 1
				}))
			})), ne = () => r.a.createElement("h3", {
				className: q.a.title
			}, J._("Top broadcast", null, {
				hk: "HADCh"
			})), se = () => r.a.createElement("h3", {
				className: q.a.title
			}, J._("Top livestream", null, {
				hk: "4od1tZ"
			})), re = () => r.a.createElement("p", {
				className: q.a.description
			}, J._("Live from the internet, this is RPAN", null, {
				hk: "Bnxtg"
			}));
			class ie extends s.Component {
				constructor(e) {
					super(e), this.observableElement = r.a.createRef(), this.videoRef = r.a.createRef(), this.videoSessionManager = null, this.timerId = "rpan-du-active-watch-timer-id", this.handleSuccessfulPlayback = () => {
						Object(O.U)()
					}, this.handleUnsuccessfulPlayback = () => {
						const e = Number(Object(O.I)());
						if (e) {
							if (Date.now() - e >= $) {
								Object(O.U)();
								const e = 30 * l.x,
									t = Date.now() - e + Q;
								this.props.onHideRpanUnit(t, {
									showToast: !1
								})
							}
						} else Object(O.Fb)(Date.now())
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
						}), s(Object(y.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: n
						} = this.props;
						t(n ? Object(y.j)(n, 1) : Object(y.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
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
							stream: n,
							streamById: s
						} = this.props, r = n && n.post.id === e.id ? n : s(e.id);
						if (!r) return;
						const i = !t.sessionDurationMs ? y.D : y.z,
							a = {
								chatState: E.a.None,
								playerType: y.a.DU
							},
							o = i(r, {
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
					return t === w.a.IS_LIVE || t === w.a.DISCONNECTED
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
						Math.round(o.c.end(this.timerId)) / 1e3 >= X ? this.handleSuccessfulPlayback() : this.handleUnsuccessfulPlayback()
					}
				}
				componentDidMount() {
					this.subscribeIntersectionObserver(), this.subscribeVisibilityChange()
				}
				componentDidUpdate(e, t) {
					const {
						video: n
					} = this, {
						autoplay: s,
						stream: r,
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
					} = this, f = d && l && !a, g = !f && h, v = f && !h, E = d && p && !a, C = i ? E && !b : v;
					(i ? !E && b : g) ? (this.subscribeConfig(), this.subscribeStreams()) : C && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const O = r && r.post.id,
						_ = O !== (o && o.post.id),
						x = !!O;
					_ && this.setState({
						isReady: !1
					});
					const y = _ && !x || x && v;
					if (_ && x && h || x && g ? this.subscribeStats() : y && this.unsubscribeStats(), s && n) {
						const e = this.getOrCreateVideoSessionManager(n),
							t = !m && c,
							s = x && (t && h || g && c),
							r = x && v;
						_ && e.endSession(), s ? (e.startSession({
							id: O
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : r && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
					}
				}
				componentWillUnmount() {
					this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeStats(), this.unsubscribeIntersectionObserver(), this.unsubscribeVisibilityChange(), this.destroyVideoSessionManager()
				}
				render() {
					const {
						layout: e
					} = this.props, t = e === C.g.Classic ? this.renderClassicContent() : e === C.g.Compact ? this.renderCompactContent() : this.renderLargeContent();
					return r.a.createElement("div", {
						className: Object(d.a)(q.a.container, {
							[z.a.largeAndMediumPostStyles]: e === C.g.Large || e === C.g.Medium,
							[z.a.classicPostStyles]: e === C.g.Classic,
							[z.a.compactPostStyles]: e === C.g.Compact,
							[q.a.large]: e === C.g.Large || e === C.g.Medium,
							[q.a.classic]: e === C.g.Classic,
							[q.a.compact]: e === C.g.Compact
						}, this.props.className)
					}, e !== C.g.Large && r.a.createElement(F.b, {
						className: q.a.leftRail,
						withoutComputedStyles: e === C.g.Compact
					}, r.a.createElement(ae, {
						isVertical: !0
					}), e === C.g.Compact && r.a.createElement(ae, {
						isVertical: !1
					})), r.a.createElement(M.a, {
						className: q.a.backgroundWrapper,
						onClick: this.onHeaderClicked
					}, t))
				}
				renderTitleAndDescription(e) {
					return r.a.createElement("div", {
						className: q.a.titleAndDescriptionContainer
					}, r.a.createElement(G.a, {
						to: this.props.location
					}, r.a.createElement(se, null), e && r.a.createElement(re, null)))
				}
				renderLargeContent() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.header
					}, this.renderTitleAndDescription(), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(de, {
						onClick: this.onHideUnitClicked
					}))), r.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, r.a.createElement(G.a, {
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
					}, r.a.createElement(G.a, {
						to: this.props.location,
						onClick: this.onStreamClicked
					}, r.a.createElement("div", {
						className: q.a.thumbnailContainer
					}, this.renderThumbnail())), r.a.createElement("div", {
						className: q.a.main
					}, this.renderLiveStatus(), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(oe, {
						onClick: this.onHeaderClicked
					}), r.a.createElement(P.a, {
						className: q.a.flatlistSeparator
					}), r.a.createElement("div", null, r.a.createElement(ce, {
						onClick: this.onHideUnitClicked
					})))))
				}
				renderCompactContent() {
					return r.a.createElement("div", {
						className: q.a.body,
						ref: this.observableElement
					}, r.a.createElement("div", {
						className: q.a.main
					}, r.a.createElement(oe, {
						onClick: this.onHeaderClicked
					}), this.renderLiveStatus(), this.renderTitleAndDescription(!0), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(de, {
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
						className: q.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? r.a.createElement("span", {
						className: q.a.liveStatus
					}, r.a.createElement(v.g, null)) : null
				}
				renderWatcherCount() {
					var e;
					if (!this.isLive) return null;
					const t = Math.max(1, (null === (e = this.props.stream) || void 0 === e ? void 0 : e.continuous_watchers) || 0);
					return r.a.createElement("span", {
						className: q.a.watchingCount
					}, J._({
						"*": "{number} watchers",
						_1: "1 watcher"
					}, [J._plural(t, "number")], {
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
					return r.a.createElement(ee, {
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
						threshold: t ? Object(I.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(I.h)(t) : .01,
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
			const ae = e => r.a.createElement(N.a, {
					className: Object(d.a)({
						[q.a.verticalVotes]: e.isVertical,
						[q.a.horizontalVotes]: !e.isVertical
					})
				}, r.a.createElement(B.a, {
					className: q.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: S.a.notVoted
				})),
				oe = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: q.a.expandoButton,
					onClick: e
				}, r.a.createElement(Y.a, {
					className: q.a.expandoIcon
				})),
				ce = ({
					onClick: e,
					isLoggedIn: t
				}) => r.a.createElement(D.a, {
					displayText: J._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: R.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, r.a.createElement(U.b, null)),
				de = ({
					onClick: e
				}) => r.a.createElement(L.b, {
					className: q.a.overflowMenu,
					dropdownClassName: q.a.overflowDropdown,
					dropdownId: "rpan-du-overflow"
				}, r.a.createElement(H.b, {
					className: q.a.overflowItem,
					displayText: J._("Show me less of this", null, {
						hk: "2c4uFK"
					}),
					iconWrapperClassName: q.a.overflowItemIconWrapper,
					textClassName: q.a.overflowItemText,
					onClick: e
				}, r.a.createElement(W.a, {
					className: q.a.hideIcon
				})));
			t.default = te(Object(V.c)(ie))
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
				a = n("./src/reddit/controls/MetaSeparator/index.m.less"),
				o = n.n(a);
			const c = e => r.a.createElement("span", {
				className: Object(i.a)(o.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => r.a.createElement(c, {
				className: Object(i.a)(o.a.metaSeparator, e),
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
				a = n("./src/reddit/constants/keycodes.ts"),
				o = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
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
					}) : r.a.createElement(o.a, {
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
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/constants/keycodes.ts");
			class a extends r.a.Component {
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
							a = e.key === i.b.ArrowDown;
						if (r || a) {
							const t = this.getValues();
							if (!t.length) return;
							const i = s ? t.indexOf(s) : 0,
								a = t[((r ? i - 1 : i + 1) + t.length) % t.length];
							n(a), this.setState({
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
							a = n.props.value === t,
							o = null !== t ? a ? 0 : -1 : i ? 0 : -1;
						return r.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: o
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
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./node_modules/lodash/random.js"),
				c = n.n(o),
				d = n("./node_modules/react/index.js"),
				l = n.n(d),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/reddit/components/CountAnimation/index.tsx"),
				p = n("./src/reddit/components/CountAnimation/config.ts"),
				h = n("./src/reddit/components/CountAnimation/helpers.ts"),
				b = n("./src/reddit/constants/colors.ts"),
				f = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				g = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/meta.ts"),
				O = n("./src/reddit/controls/Score/index.m.less"),
				_ = n.n(O);
			const x = e => e.voteState === E.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === E.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(g.a)(Object(f.a)(e)),
				{
					upvoteCount: {
						inititalDelayRange: {
							lower: y,
							upper: w
						},
						subsequentRecurringDelayRange: {
							lower: S,
							upper: I
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: T,
							upper: j
						}
					}
				} = p.b,
				A = () => c()(y, w),
				N = () => c()(S, I),
				P = Object(u.b)(e => ({
					locale: Object(C.i)(e)
				})),
				R = Object(i.a)(e => {
					const t = {
							color: e.light ? b.b.lightboxHeaderText : x(e)
						},
						{
							totalDiscount: n,
							score: i,
							shouldDisjointAnimation: o,
							shouldShowPageTransPersistence: u,
							postId: p = "",
							locale: f
						} = e,
						g = null == f ? void 0 : f.startsWith("en"),
						v = e.isScoreHidden ? g ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : l.a.createElement("span", {
							className: _.a.dot
						}, "•") : Object(a.b)(i),
						E = Object(d.useCallback)(() => c()(Math.ceil((n || 0) * T), Math.ceil((n || 0) * j)), [n]),
						C = Object(d.useRef)(Object(h.k)(p, h.a.Vote)),
						O = Object(d.useRef)(u && void 0 !== n && Object(h.e)(C.current));
					return l.a.createElement("div", {
						className: Object(r.a)(_.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, e.isScoreHidden || void 0 === n ? v : l.a.createElement(m.a, {
						initialDisplayCount: O.current || i - n,
						countToUpperBound: i,
						initialDelay: A,
						subsequentRecurringDelay: N,
						incrementDelta: E,
						shouldDisjointAnimation: o,
						id: C.current
					}))
				});
			t.a = P(R)
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
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.E.NO_STRIPE_SUBSCRIPTION:
							case s.E.USER_DOESNT_EXIST:
							case s.E.USER_REQUIRED_ERROR:
							case s.E.VALIDATION_ERROR:
								return e;
							case s.E.NO_USER:
							case s.E.NO_TEXT:
							case s.E.NO_URL:
								return s.E.VALIDATION_ERROR;
							case s.E.CREDIT_CARD_FAILURE:
							case s.E.CREDIT_CARD_FAILURE_GENERIC:
								return s.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.E.VALIDATION_ERROR
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
				a = e => {
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
				return g
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/gild.ts");
			const o = e => ({
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
				u = (e, t, n) => s => ({
					...o(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, s) => r => ({
					...o(r),
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
					goldPurchase: n ? c(n) : null
				}),
				h = (e, t, n) => s => ({
					...o(s),
					source: "create_award",
					action: e,
					correlationId: Object(i.c)(i.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => s => ({
					...o(s),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: r.profileById(s, t),
					subreddit: r.subredditById(s, t)
				}),
				f = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
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
				return g
			})), n.d(t, "clickAwardReportFlow", (function() {
				return E
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return C
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return _
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return x
			})), n.d(t, "clickReportAward", (function() {
				return y
			})), n.d(t, "clickCancelReportAward", (function() {
				return w
			})), n.d(t, "clickConfirmReportAward", (function() {
				return S
			})), n.d(t, "viewGildModalEvent", (function() {
				return I
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return T
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return j
			})), n.d(t, "clickMessageInputEvent", (function() {
				return A
			})), n.d(t, "typeMessageInputEvent", (function() {
				return N
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return P
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return R
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return D
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return k
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
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
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
					correlationId: Object(c.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? r.post(e, t) : void 0,
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
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
				b = (e, t) => n => ({
					...u(n, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				f = (e, t) => n => ({
					...u(n, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => n => ({
					...u(n, t),
					source: Object(o.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				v = e => (t, n) => s => ({
					...u(s, n),
					source: Object(o.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				E = v("award_hovercard_report"),
				C = v("cancel_award_hovercard_report"),
				O = v("flag_award"),
				_ = v("cancel_flag_award"),
				x = v("confirm_flag_award"),
				y = v("report_community_award"),
				w = v("cancel_report_community_award"),
				S = v("confirm_report_community_award"),
				I = (e, t, n) => s => ({
					...u(s, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				T = (e, t, n) => s => ({
					...u(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				j = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				R = e => t => ({
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
						contentType: Object(o.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				k = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(o.a)(e) ? "comment" : "post",
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
						contentType: Object(o.a)(r) ? "comment" : "post",
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
			n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return y
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				i = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/reddit/selectors/goldPurchaseModals.ts"),
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
					} = t, b = !!n, f = i.b(e), g = f ? Object(u.getAwardTypeFromAward)(f) : null, v = b ? g : o.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, E = n ? Object(p.a)(n) ? "comment" : "post" : void 0, C = l || o.t(e), O = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === C)[0], _ = t.offerContext || (f && 0 === f.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(O, b)), x = O ? Math.round(1e4 * (O.baselinePennies - O.pennies) / O.baselinePennies) / 100 : 0, y = O ? Math.round(1e4 * (O.coins - O.baselineCoins) / O.coins) / 100 : 0, w = O ? O.baselinePennies !== O.pennies ? `${x}_percent_price` : O.baselineCoins !== O.coins ? `${y}_percent_bonus` : void 0 : void 0, S = v === d.GoldPurchaseType.Premium ? s.sb : O ? O.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: o.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							...f ? Object(h.a)(f) : null,
							type: v,
							gildedContent: b,
							contentType: E,
							numberCoins: O ? O.coins : void 0,
							offerContext: _,
							offerType: w
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: S
						},
						purchase: {
							priceMicros: S
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
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				C = e => t => ({
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
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				x = (e, t, n) => s => {
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
							source: e ? d.GiveGold : o.o(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				y = e => t => {
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
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
				a = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: o.profile(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(a.h)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: o.post(s, e)
				}),
				l = (e, t, n, s) => r => {
					const a = n ? o.comment(r, n) : null,
						{
							sortToUse: c
						} = Object(i.a)(r, e);
					return {
						...d(e, t, s)(r),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = o.currentPost(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(a.h)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...d(e, t)(n),
					...o.defaults(n)
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
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "j", (function() {
				return o
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
				return g
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					screen: Object(r.screen)(e),
					profile: Object(r.profile)(e),
					subreddit: Object(r.subreddit)(e),
					userSubreddit: Object(r.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...i(t)
				}),
				o = (e, t) => n => ({
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
				g = (e, t, n, s) => i => ({
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
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");

			function i(e, t = r.a) {
				return Object(s.e)(n => Object(r.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				o = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(o);
			t.a = e => r.a.createElement("i", {
				className: Object(i.a)(Object(a.b)("admin", e.isFilled), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				o = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return r.a.createElement("i", {
					className: `${Object(i.b)(t?"expand":"expandoArrowExpand",e.isFilled)} ${e.className}`,
					onClick: e.onClick,
					title: e.title
				})
			}, "ExpandIcon", o.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				o = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(i.a)(o.a.checkbox, e)
			}, t), r.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
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
			t.a = e => r.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
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
		"./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			const i = e => r.a.createElement("svg", {
					className: e.className,
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M5.00001 13.41C4.91441 13.4079 4.82982 13.391 4.75001 13.36C4.36493 13.225 3.99331 13.0542 3.64001 12.85L1.53001 13.37C1.4053 13.4019 1.27448 13.4012 1.15014 13.3679C1.02579 13.3347 0.912098 13.27 0.820006 13.18C0.729222 13.0864 0.664059 12.971 0.630783 12.8449C0.597508 12.7188 0.59724 12.5862 0.630006 12.46L1.15001 10.36C0.684603 9.54657 0.393688 8.64513 0.295784 7.71309C0.197881 6.78105 0.295135 5.83883 0.581353 4.94644C0.867572 4.05404 1.33648 3.23103 1.95823 2.5298C2.57997 1.82857 3.34092 1.2645 4.19263 0.873491C5.04433 0.482487 5.96813 0.273123 6.90519 0.258731C7.84225 0.244338 8.77204 0.425233 9.63535 0.789896C10.4987 1.15456 11.2766 1.695 11.9196 2.3768C12.5626 3.05861 13.0565 3.86683 13.37 4.75001C13.4032 4.83336 13.4213 4.92181 13.4236 5.01127C13.0459 4.9912 12.6656 4.99785 12.2855 5.03189C10.5542 5.18694 8.92053 5.90165 7.6316 7.06789C6.34267 8.23414 5.46866 9.78846 5.1418 11.4957C5.02032 12.1302 4.97688 12.773 5.00962 13.4104L5.00001 13.41ZM13 19.75C11.8204 19.7506 10.6615 19.4401 9.64004 18.85L7.53004 19.37C7.40533 19.4019 7.27451 19.4012 7.15017 19.3679C7.02582 19.3347 6.91213 19.2699 6.82004 19.18C6.72925 19.0864 6.66409 18.971 6.63081 18.8449C6.59754 18.7188 6.59727 18.5862 6.63004 18.46L7.15004 16.36C6.41066 15.0718 6.11686 13.5756 6.31416 12.1034C6.51145 10.6312 7.18884 9.26522 8.24132 8.21711C9.29381 7.169 10.6626 6.49731 12.1356 6.30615C13.6086 6.11498 15.1035 6.41502 16.3887 7.15975C17.6739 7.90448 18.6775 9.05233 19.244 10.4254C19.8106 11.7984 19.9084 13.32 19.5224 14.7543C19.1363 16.1886 18.288 17.4556 17.1088 18.3588C15.9296 19.2619 14.4854 19.751 13 19.75Z",
					fill: "inherit"
				})),
				a = e => r.a.createElement("svg", {
					width: "24",
					height: "24",
					viewBox: "0 0 24 24",
					fill: "inherit",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.426 16.3838C11.243 16.3088 11.0765 16.1978 10.9385 16.0598L6.43867 11.56C5.85369 10.9751 5.85369 10.0256 6.43867 9.43912C7.02515 8.85414 7.97461 8.85414 8.56108 9.43912L10.5005 11.3785V1.49994C10.5005 0.671973 11.171 0 12.0004 0C12.8284 0 13.5004 0.671973 13.5004 1.49994V11.3785L15.4383 9.43912C16.0248 8.85414 16.9742 8.85414 17.5607 9.43912C18.1457 10.0256 18.1457 10.9751 17.5607 11.56L13.0609 16.0598C12.9229 16.1978 12.7564 16.3088 12.5734 16.3838C12.3889 16.4603 12.1954 16.4993 12.0004 16.4993C11.804 16.4993 11.6105 16.4603 11.426 16.3838ZM20.9991 15.0003C20.9991 14.1724 21.6711 13.5004 22.4991 13.5004C23.3271 13.5004 23.999 14.1724 23.999 15.0003V19.5002C23.999 21.9811 21.9801 24 19.4992 24H4.49982C2.01892 24 0 21.9811 0 19.5002V15.0003C0 14.1724 0.671973 13.5004 1.49994 13.5004C2.32791 13.5004 2.99988 14.1724 2.99988 15.0003V19.5002C2.99988 20.3266 3.67335 21.0001 4.49982 21.0001H19.4992C20.3257 21.0001 20.9991 20.3266 20.9991 19.5002V15.0003Z",
					fill: "inherit"
				})),
				o = e => r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M5,3.723h9v-2H5a3,3,0,0,0-3,3H4A1,1,0,0,1,5,3.723Z"
				}), r.a.createElement("path", {
					d: "M19.294,7.429A1.116,1.116,0,0,0,18.5,7.1h-.009l-2.345.018a1.117,1.117,0,0,0-.613.185h0L13.626,8.562V7.223A1.127,1.127,0,0,0,12.5,6.1H1.5A1.127,1.127,0,0,0,.376,7.223v3.494a8.5,8.5,0,0,1,7.652,7.631H12.5a1.127,1.127,0,0,0,1.125-1.125V15.884l1.91,1.26a1.145,1.145,0,0,0,.609.184l2.347.016H18.5a1.125,1.125,0,0,0,1.125-1.125V8.226A1.116,1.116,0,0,0,19.294,7.429Z"
				}), r.a.createElement("path", {
					d: "M.374,14.764v1.29a3.221,3.221,0,0,1,2.311,2.294H3.971A4.481,4.481,0,0,0,.374,14.764Z"
				}), r.a.createElement("path", {
					d: "M.374,12.1v1.275a5.857,5.857,0,0,1,5.007,4.973H6.644A7.12,7.12,0,0,0,.374,12.1Z"
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
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				o = n.n(a);

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
				className: Object(i.a)(o.a.icon, e.className),
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
				a = n("./src/reddit/icons/svgs/VideoReplay/index.m.less"),
				o = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(i.a)(o.a.icon, e.className),
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
				return a
			})), n.d(t, "a", (function() {
				return o
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
			var a, o;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(o || (o = {}));
			const c = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === n,
					r = "new_purchaser" === n,
					i = "repeat_purchaser" === n;
				return t ? o.GildFlow : s ? o.LowCoinBalance : r ? o.NewUserTargetedOffer : i ? o.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return a
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
				return g
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "p", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
				i = n("./src/reddit/models/User/index.ts");
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
			const g = e => h[f[e]],
				v = e => f[h[e]],
				E = e => b[h[e]],
				C = e => h[b[e]],
				O = e => f[b[e]];
			var _;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(_ || (_ = {}));
			const x = e => {
					switch (e) {
						case _.Hourly:
						case _.Daily:
						case _.Weekly:
						case _.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				w = e => {
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
				S = e => "frequency" in e && !!e.frequency
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
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				i = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				o = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/commentSelector.ts"),
				i = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, n) => {
					const s = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == s ? void 0 : s.url) ? s.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: r
				}) => e.awardSubType === s.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) => {
					let r = e;
					if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[e.id] && e.tiers) {
						const t = s.awardCountsById[e.id];
						r = e.tiers.reduce((e, n) => t >= n.awardingsRequired ? n : e)
					}
					return l(r, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: r
				}) : l(e, n, t),
				m = (e, {
					awards: t,
					minSize: n,
					postOrCommentId: s
				}) => {
					const i = Object(c.c)(e),
						o = d.find(e => e >= n),
						l = s ? Object(a.F)(e, {
							postId: s
						}) || Object(r.a)(e, {
							commentId: s
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: o,
						prefersReducedMotion: i,
						postOrComment: l
					})), e), {})
				},
				p = (e, {
					award: t,
					minSize: n,
					postOrCommentId: s
				}) => t ? m(e, {
					awards: [t],
					minSize: n,
					postOrCommentId: s
				})[t.id] : void 0,
				h = (e, {
					minSize: t,
					userName: n
				}) => {
					const s = Object(o.mb)(e, {
						userName: n
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return p(e, {
						award: s.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(i.b)(e),
						n = Object(i.a)(e);
					return p(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
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
				return a
			})), n.d(t, "s", (function() {
				return o
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
			})), n.d(t, "z", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "d", (function() {
				return N
			}));
			var s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(r.a)({
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
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				h = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				f = e => e.features.goldPurchase.updateCardModal.pending,
				g = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				E = e => e.features.goldPurchase.payment.postalCode,
				C = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				_ = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				y = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				w = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				S = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				I = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				T = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				j = e => e.features.goldPurchase.payment.stripeToken.pending,
				A = e => e.features.goldPurchase.payment.paypal.passthrough,
				N = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.56a9c1fcfa2bd1f17906.js.map