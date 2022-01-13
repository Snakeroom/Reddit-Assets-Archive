// https://www.redditstatic.com/desktop2x/RpanListingUnit.1f10955bb944d94b1779.js
// Retrieved at 1/13/2022, 2:10:04 PM by Reddit Dataminer v1.0.0
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
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? s : r;
				return n && a(e, t, n) && (t = void 0), c(e, o(t, 3))
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/cache/localStorage/index.ts"),
				c = n("./src/lib/combineRefs/index.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(d.a)(() => n.e("MuxEmbed").then(n.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(i.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Hd
				});
				return Object(u.mf)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: u.Id
				});
				return Object(u.mf)(t) ? void 0 : t
			}, (e, t) => e === u.Ld.Enabled && t === u.Ld.Enabled);
			var f = n("./src/config.ts");
			var h = n("./src/reddit/selectors/user.ts");
			const b = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						n = t.length,
						s = new Uint32Array(e);
					return crypto.getRandomValues(s), Array.from(s).map(e => t.charAt(e % n)).join("")
				},
				v = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				_ = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var g;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(g || (g = {}));
			const C = async e => (async (e, t) => {
				const n = (new TextEncoder).encode(t),
					s = await crypto.subtle.digest(e, n);
				return Array.from(new Uint8Array(s)).map(_).join("")
			})(g.SHA1, e);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const x = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				O = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: f.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${f.a.buildNumber} ${f.a.appName}`,
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
					localStorageSaltKey: _,
					localStorageViewerUserIdKey: g,
					playerName: I,
					playerVersion: y,
					respectDoNotTrack: S,
					saltLength: j,
					saltTimeToLive: T,
					viewerUserIdLength: w
				} = {
					...O,
					...t
				};
				class N extends s.Component {
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
						const e = this.props.redditUserId || N.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							n = `${v()}${e}${t}`;
						return (await C(n)).substr(0, N.VIEWER_USER_ID_LENGTH)
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
							debug: N.DEBUG,
							disableCookies: N.DISABLE_COOKIES,
							respectDoNotTrack: N.RESPECT_DO_NOT_TRACK,
							...n,
							data: {
								env_key: N.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: N.PLAYER_NAME,
								player_version: N.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = N.LOCAL_STORAGE_SALT_KEY;
						let t = Object(a.a)(e);
						return t || (t = b(N.SALT_LENGTH), Object(a.b)(e, t, N.SALT_TIME_TO_LIVE)), t
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
							video_duration: n ? N.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: n ? N.STREAM_TYPE_LIVE : N.STREAM_TYPE_ON_DEMAND,
							video_title: s,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? f.a.dashVersion : this.getHlsInstanceData() ? f.a.hlsVersion : null
						}
					}
				}
				N.displayName = x(e), N.ANONYMOUS_USER_ID = n, N.DEBUG = d, N.DISABLE_COOKIES = u, N.DURATION_LIVE = 1 / 0, N.ENV_KEY = m, N.LOCAL_STORAGE_SALT_KEY = _, N.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, N.PLAYER_NAME = I, N.PLAYER_VERSION = y, N.RESPECT_DO_NOT_TRACK = S, N.SALT_LENGTH = j, N.SALT_TIME_TO_LIVE = T, N.STREAM_TYPE_LIVE = "live", N.STREAM_TYPE_ON_DEMAND = "on-demand", N.VIEWER_USER_ID_LENGTH = w;
				const k = Object(s.forwardRef)((e, t) => r.a.createElement(N, E({}, e, {
						forwardedRef: t
					}))),
					A = Object(i.c)({
						redditUserId: h.i,
						isMuxEnabled: p
					});
				return Object(o.b)(A, null, null, {
					forwardRef: !0
				})(k)
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/lodash/every.js"),
				r = n.n(s);

			function o(e) {
				let t = null,
					n = null;
				return (...s) => (null !== t && s.length === t.length && r()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n)
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "CREATOR_STATS_PENDING",
				r = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
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
				return f
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const r = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(s.a)(r("awardSheetInfoRequested")),
				i = Object(s.a)(r("manageableAwardsRequested")),
				a = Object(s.a)(r("createCommunityAward")),
				c = Object(s.a)(r("createGlobalAward")),
				d = Object(s.a)(r("createModAward")),
				l = Object(s.a)(r("createAwardFailed")),
				u = Object(s.a)(r("createAwardSuccessful")),
				m = Object(s.a)(r("removeCommunityAward")),
				p = Object(s.a)(r("disableAwardinCommunity")),
				f = Object(s.a)(r("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return b
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return I
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/postParentMessage/index.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/telemetry/index.ts"),
				h = n("./src/reddit/actions/gold/constants.ts");
			const b = Object(s.a)(h.L),
				v = Object(s.a)(h.f),
				_ = () => async (e, t) => {
					const s = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(r()(s))
				}, g = Object(s.a)(h.K), C = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (s, r) => {
					const a = r(),
						c = e ? Object(u.a)(a, e) : void 0;
					s(g({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), s(Object(l.h)(i.a.GOLD_GILD_MODAL));
					const f = Object(p.H)(a, {
						thingId: n
					});
					let h = null;
					if (f) h = f.id;
					else if (Object(o.a)(n)) {
						const e = Object(m.H)(a, {
							postId: n
						});
						e && (h = e.belongsTo.id)
					}
					h && Object(d.a)(h, n)
				}, E = Object(s.a)(h.e), x = Object(s.a)(h.J), O = () => async (e, t) => {
					const s = t(),
						o = Object(a.d)(s);
					if (Object(a.g)(s)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(E()), e(Object(l.g)(i.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(o)(s)), Object(c.b)(c.a.GildingFlow)
				}, I = () => async () => {
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
				return o
			})), n.d(t, "f", (function() {
				return i
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
				return f
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return x
			}));
			const s = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				h = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				b = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				v = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				g = "REORDER_COLLECTION_FAILED",
				C = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				x = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => o.a.createElement(a.e, null, o.a.createElement(a.i, null, o.a.createElement(d.a, null, o.a.createElement(a.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(a.b, null)))), o.a.createElement(a.l, null, o.a.createElement(a.p, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(a.g, null, !e.hideCancelButton && o.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(a.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
				o = n("./src/lib/hooks/usePrevious.ts"),
				i = n("./src/realtime/GQLSubscription/async.tsx"),
				a = n("./src/reddit/hooks/useIntersectionObserver.ts");
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
					isLoadTestOnly: f,
					onDataCB: h,
					postId: b,
					queryKey: v,
					queryVariables: _,
					shouldDisjointAnimation: g,
					subsequentRecurringDelay: C
				} = e, [E, x] = Object(s.useState)(!1), [O, I] = Object(s.useState)(!0), [y, S] = Object(s.useState)([]), [j, T] = Object(s.useState)(c(p).reverse()), w = Object(s.useRef)(!1), N = Object(s.useRef)(null), k = Object(s.useRef)(e => {}), A = Object(s.useRef)();
				k.current = Object(s.useCallback)(e => {
					let n = e || d();
					const s = [...j].reverse().join("");
					let r = parseInt(s) + n;
					r > t && (n = t - parseInt(s), r = t);
					const o = c(r).reverse();
					x(!1), S(j), T(o), I(!1), A.current = setTimeout(() => {
						x(!0)
					}, 0)
				}, [t, d, j]);
				const R = Object(s.useRef)(() => {}),
					P = Object(s.useRef)(),
					D = Object(s.useRef)();
				R.current = Object(s.useCallback)(() => {
					D.current = setTimeout(() => {
						k.current();
						const e = [...y].reverse().join("");
						parseInt(e) < t && R.current()
					}, C())
				}, [t, C, y]);
				const L = Object(s.useRef)(0),
					M = Object(s.useRef)(!1),
					F = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, s = 1 !== n;
							t ? (M.current = !0, w.current || (w.current = !0, P.current = setTimeout(() => {
								k.current(), R.current()
							}, u())), L.current > 0 && (k.current(L.current), L.current = 0)) : s && (M.current = !1)
						})
					}, []);
				Object(a.a)(N, F);
				const [U, V] = Object(s.useState)(!1), G = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, s = 1 !== n;
						t ? V(!0) : s && V(!1)
					})
				}, []), B = Object(s.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(N, G, B.current);
				const H = Object(o.a)(t);
				Object(s.useEffect)(() => {
					if (void 0 !== H && H !== t) {
						const e = t - H;
						M.current ? k.current(e) : L.current += e
					}
					return () => {
						clearTimeout(P.current), clearTimeout(D.current), clearTimeout(A.current)
					}
				}, [t]);
				const Y = Object(s.useCallback)(() => I(!0), [I]),
					W = 0 === y.length,
					K = O || W,
					q = Object(s.useRef)(((e, t) => `${t}_${e}_count_anim`)(b, n));
				return r.a.createElement(r.a.Fragment, null, !f && r.a.createElement("div", {
					className: l.a.countAnimation
				}, j.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const s = Math.abs(t),
							r = [n];
						if (n === s) return r;
						let o = !0;
						for (; o;) ++n > 9 && (n = 0), r.push(n), n === s && (o = !1);
						return r
					})(y[t] || 0, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: Y,
						style: E && y.length > 0 && !O ? {
							transform: `translateY(-${g&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(g?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, K ? r.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const s = 0 === t || t === n.length - 1;
						if (!g || g && s) return r.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...j].reverse().join(""))), r.a.createElement("span", {
					ref: N
				}), U && r.a.createElement(i.a, {
					variables: _,
					onData: f ? m : h,
					queryKey: v,
					uniqueKey: q.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/redditGQL/types.ts");
			const r = 16327836e5;
			var o;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available"
			}(o || (o = {}));
			const i = e => e > r,
				a = (e, t) => {
					if (!i(e.created)) return o.NotAvailable;
					if (!t) return o.NotAvailableYet;
					const {
						viewCountTotals: n,
						shareCountTotals: r
					} = t;
					return (null == n ? void 0 : n.status) === s.d.Unavailable && (null == r ? void 0 : r.status) === s.d.Unavailable ? o.NotAvailableYet : !(null == n ? void 0 : n.totalCount) || n.totalCount < 10 ? o.NotAvailableYet : o.Available
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
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => i.a.createElement(a.i, {
				className: l.a.modalHeader
			}, i.a.createElement(a.q, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
			}, i.a.createElement(a.b, null)))
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
				o = n.n(r);
			const i = s.a.div("Wrapper", o.a);
			t.a = i
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
				o = n.n(r),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(a.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, s.fbt._("No flair selected", null, {
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
				return f
			}));
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				f = r()((e = p) => Object(a.a)({
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
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				h = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				b = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/controls/RadioInput/index.tsx"),
				_ = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				E = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				x = n.n(E);
			class O extends o.a.Component {
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
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), a = !!n && i.some(e => e.id === n);
					return o.a.createElement("div", {
						className: x.a.container
					}, o.a.createElement("div", {
						className: x.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: x.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), o.a.createElement(C.a, {
						className: x.a.searchIcon
					})), o.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, i.map((e, t) => {
						const s = Object(u.c)(e),
							r = n === e.id || !a && 0 === t;
						return o.a.createElement(_.a, {
							className: x.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, o.a.createElement(b.b, {
							className: x.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(g.a, {
							className: x.a.pencil
						}))
					})))
				}
			}
			var I = n("./src/reddit/components/FlairSearch/index.m.less"),
				y = n.n(I);
			const S = Object(d.a)(e => e && Object(u.c)(e)),
				j = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: f.g
				}),
				T = Object(i.b)(j);
			t.a = T(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: r,
					onChange: i,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: f,
					isModerator: b
				} = e, v = Object(p.a)(), _ = d && n && n.templateId && d[n.templateId] || void 0, g = Object(h.a)(), C = n || S(_);
				return o.a.createElement("div", {
					className: Object(c.a)(r, y.a.container)
				}, d && l && o.a.createElement(O, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							v(Object(m.b)({
								userFlair: t
							})), i(n)
						}
					},
					selectedTemplateId: _ ? _.id : "",
					templateIds: l,
					templates: d
				}), C && _ && (b || _.textEditable) && o.a.createElement("div", {
					className: y.a.flairEditSection
				}, o.a.createElement("div", {
					className: y.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), f && o.a.createElement("div", {
					className: y.a.restrictionHintText
				}, Object(u.k)(_)), o.a.createElement(g, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: C,
					flairTemplate: _,
					flairTemplateType: t,
					isFlairModOnly: _.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(n)
					},
					subredditId: a
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, i] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, i(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), i(!1)
					}
				}, [e]), e ? r.a.createElement("div", c({
					className: Object(o.a)(a.a.tooltip, t.className, {
						[a.a.visible]: n
					})
				}, t.popperProps), t.children, n && r.a.createElement("div", c({
					className: a.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "t", (function() {
				return T
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "c", (function() {
				return R
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.wrapped(d.a, "CloseIcon", u.a),
				f = r.a.section("ModalBody", u.a),
				h = r.a.section("ModalPostPreview", u.a),
				b = r.a.p("ModalText", u.a),
				v = r.a.div("ModalSmallText", u.a),
				_ = r.a.div("ModalDescriptionText", u.a),
				g = r.a.div("ModalMetaText", u.a),
				C = r.a.label("ModalFormItem", u.a),
				E = r.a.wrapped(c.a, "ModalInput", u.a),
				x = r.a.label("ModalInputLabel", u.a),
				O = r.a.footer("ModalFooter", u.a),
				I = r.a.header("ModalHeader", u.a),
				y = r.a.div("ModalTitle", u.a),
				S = r.a.div("ModalAnnotation", u.a),
				j = r.a.div("ModalMain", u.a),
				T = r.a.textarea("TextArea", u.a),
				w = r.a.wrapped(a.l, "WarningButton", u.a),
				N = r.a.wrapped(a.l, "PrimaryButton", u.a),
				k = r.a.wrapped(a.o, "CancelButton", u.a),
				A = r.a.wrapped(a.r, "RemoveButton", u.a),
				R = ({
					className: e,
					...t
				}) => i.a.createElement(a.t, m({
					kind: a.b.Button,
					priority: a.c.Primary,
					className: Object(s.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/CreatorStats/helpers.ts"),
				l = n("./src/reddit/selectors/creatorStats.ts"),
				u = n("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = n("./src/reddit/components/PostContent/viewCount.m.less"),
				p = n.n(m);
			t.a = ({
				className: e,
				post: t,
				showViewCount: n
			}) => {
				const {
					upvotePercentString: r,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						n = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: s.fbt._("{percent upvoted}% Upvoted", [s.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: s.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [s.fbt._plural(e.viewCount, "number of views", n)], {
							hk: "rP01m"
						})
					}
				})(t), f = n && !!t.viewCount, h = Object(i.e)(e => Object(u.a)(e, t.id)), b = Object(i.e)(e => Object(l.a)(e, t.id)), v = Object(i.e)(e => Object(l.b)(e, t.id)), _ = Object(d.c)(t, v), g = h && b && _ === d.b.Available;
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.viewCounts, e)
				}, f && o.a.createElement("span", null, m), f && !!t.upvoteRatio && o.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !g && o.a.createElement("span", null, r))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, n) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
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
				o = n("./src/reddit/constants/flair.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
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
				const a = Object(i.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : a > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.r)(s) ? {
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
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/telemetry/index.ts"),
				c = n("./src/higherOrderComponents/withMux/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/localStorageAvailable/index.ts"),
				m = n("./src/lib/onFocusAndVisibilityChange/index.ts"),
				p = n("./src/lib/VideoSession/VideoSessionManager.ts"),
				f = n("./src/reddit/actions/preferences.ts"),
				h = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				b = n("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				v = n("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				_ = n("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				g = n("./src/reddit/constants/chat.ts"),
				C = n("./src/reddit/constants/postLayout.ts"),
				E = n("./src/reddit/helpers/localStorage/index.ts"),
				x = n("./src/reddit/helpers/overlay/index.ts"),
				O = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				I = n("./src/reddit/helpers/trackers/rpan.ts"),
				y = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				S = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				T = n("./src/reddit/selectors/platform.ts"),
				w = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				A = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/Flatlist/constants.ts"),
				P = n("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				D = n("./src/reddit/components/HlsVideo/index.tsx"),
				L = n("./src/reddit/components/OverflowMenu/index.tsx"),
				M = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				F = n("./src/reddit/components/PostLeftRail/index.tsx"),
				U = n("./src/reddit/components/TrackingHelper/index.tsx"),
				V = n("./src/reddit/controls/Dropdown/Row.tsx"),
				G = n("./src/reddit/controls/InternalLink/index.tsx"),
				B = n("./src/reddit/controls/Score/index.tsx"),
				H = n("./src/reddit/icons/fonts/index.tsx"),
				Y = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = n.n(Y),
				K = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				q = n.n(K);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = 20, Z = l.oc, X = l.oc, Q = Object(c.a)(D.a, {
				playerName: "RPAN DU Video Player"
			}), $ = Object(o.b)(() => Object(i.c)({
				autoplay: N.b,
				isLoggedIn: N.J,
				isOverlayOpen: T.i,
				location: (e, {
					listingName: t
				}) => {
					const n = Object(w.m)(e, {
						listingName: t
					});
					let s;
					if (n) {
						s = `${Object(O.d)(n)}${Object(v.c)(t)}`
					} else {
						const e = t.replace(/^r\//, "");
						s = e === h.R ? Object(O.e)() : Object(O.f)(e)
					}
					return s
				},
				stream: (e, {
					listingName: t
				}) => Object(w.m)(e, {
					listingName: t
				}),
				streamById: e => t => Object(w.l)(e, t),
				rpanDuThresholdVariant: j.i,
				inRpanDUPreloadExperiment: j.b,
				inRpanDuTargetingExperiment: j.c
			}), (e, t) => ({
				onHideRpanUnit: (n, s) => e(Object(f.E)(t.listingName, n, {
					showToast: s.showToast
				})),
				openOverlay: t => e(Object(x.a)(t)),
				subscribeConfig: () => e(b.a.subscribeConfig(t.listingName)),
				subscribeStats: t => e(b.a.subscribeStats(t)),
				subscribeStreams: () => e(b.a.subscribeStreams(t.listingName, {
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
							if (Date.now() - e >= Z) {
								Object(E.W)();
								const e = 30 * l.B,
									t = Date.now() - e + X;
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
						}), s(Object(I.i)())
					}, this.onStreamClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t,
							stream: n
						} = this.props;
						t(n ? Object(I.j)(n, 1) : Object(I.j)()), this.props.inRpanDuTargetingExperiment && this.handleSuccessfulPlayback(), this.openOverlay()
					}, this.onHeaderClicked = e => {
						e.stopPropagation(), e.preventDefault();
						const {
							sendEvent: t
						} = this.props;
						t(Object(I.j)()), this.openOverlay()
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
						const o = !t.sessionDurationMs ? I.E : I.A,
							i = {
								chatState: g.a.None,
								playerType: I.a.DU
							},
							a = o(r, {
								...t,
								...i
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
						Math.round(a.c.end(this.timerId)) / 1e3 >= J ? this.handleSuccessfulPlayback() : this.handleUnsuccessfulPlayback()
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
						stream: o,
						inRpanDUPreloadExperiment: i
					} = this.props, {
						isOverlayOpen: a,
						stream: c
					} = e, {
						isReady: d
					} = this.state, {
						isInFocus: l,
						isIntersecting: m,
						isReady: p,
						isInLoadingIntersection: f
					} = t, {
						isVisible: h,
						isLoadable: b
					} = this, v = l && m && !a, _ = !v && h, g = v && !h, C = l && f && !a, E = i ? C && !b : g;
					(i ? !C && b : _) ? (this.subscribeConfig(), this.subscribeStreams()) : E && (this.unsubscribeConfig(), this.unsubscribeStreams());
					const x = o && o.post.id,
						O = x !== (c && c.post.id),
						I = !!x;
					O && this.setState({
						isReady: !1
					});
					const y = O && !I || I && g;
					if (O && I && h || I && _ ? this.subscribeStats() : y && this.unsubscribeStats(), r && s) {
						const e = this.getOrCreateVideoSessionManager(s),
							t = !p && d,
							r = I && (t && h || _ && d),
							o = I && g;
						O && e.endSession(), r ? (e.startSession({
							id: x
						}), this.setState({
							sessionId: (null === (n = null == e ? void 0 : e.sessionStats) || void 0 === n ? void 0 : n.id) || ""
						}), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.startTimeTracker()) : o && (e.pauseSession(), this.props.inRpanDuTargetingExperiment && Object(u.a)() && this.endTimeTracker())
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
							[W.a.largeAndMediumPostStyles]: e === C.g.Large || e === C.g.Medium,
							[W.a.classicPostStyles]: e === C.g.Classic,
							[W.a.compactPostStyles]: e === C.g.Compact,
							[q.a.large]: e === C.g.Large || e === C.g.Medium,
							[q.a.classic]: e === C.g.Classic,
							[q.a.compact]: e === C.g.Compact
						}, this.props.className)
					}, e !== C.g.Large && r.a.createElement(F.b, {
						className: q.a.leftRail,
						withoutComputedStyles: e === C.g.Compact
					}, r.a.createElement(se, {
						isVertical: !0
					}), e === C.g.Compact && r.a.createElement(se, {
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
					}, r.a.createElement(ee, null), e && r.a.createElement(te, null)))
				}
				renderLargeContent() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.header
					}, this.renderTitleAndDescription(), r.a.createElement("div", {
						className: q.a.flatListContainer
					}, r.a.createElement(ie, {
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
					}, r.a.createElement(re, {
						onClick: this.onHeaderClicked
					}), r.a.createElement(A.a, {
						className: q.a.flatlistSeparator
					}), r.a.createElement("div", null, r.a.createElement(oe, {
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
					}, r.a.createElement(ie, {
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
					}, r.a.createElement(H.a, {
						name: "expand",
						className: q.a.bigExpandoIcon
					}))
				}
				renderLiveStatus() {
					return this.isLive ? r.a.createElement("span", {
						className: Object(d.a)(q.a.liveStatus, {
							[q.a.compact]: this.props.layout === C.g.Compact
						})
					}, r.a.createElement(_.g, null)) : null
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
						o = t.post.title;
					return r.a.createElement(Q, {
						url: t.stream.hls_url,
						autoplay: e,
						controls: !1,
						muted: !0,
						muxVideoDuration: n,
						muxVideoId: s,
						muxVideoIsLive: this.isLive,
						muxVideoTitle: o,
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
						threshold: t ? Object(j.h)(t) : .01
					}), this.intersectionObserver.observe(e), this.loadingIntersectionObserver = new IntersectionObserver(e => {
						e.forEach(e => {
							this.setState({
								isInLoadingIntersection: e.isIntersecting
							})
						})
					}, {
						threshold: t ? Object(j.h)(t) : .01,
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
				}, r.a.createElement(B.a, {
					className: q.a.score,
					isScoreHidden: !0,
					score: 0,
					voteState: S.a.notVoted
				})),
				re = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: q.a.expandoButton,
					onClick: e
				}, r.a.createElement(H.a, {
					name: "expand",
					className: q.a.expandoIcon
				})),
				oe = ({
					onClick: e,
					isLoggedIn: t
				}) => r.a.createElement(P.a, {
					displayText: z._("Show me less of this", null, {
						hk: "4t8AKC"
					}),
					flatlistItem: R.a.Hide,
					isLoggedIn: !!t,
					isUserOp: !1,
					onClick: e,
					noBreakpoints: !0
				}, r.a.createElement(H.a, {
					name: "hide"
				})),
				ie = ({
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
				}, r.a.createElement(H.a, {
					name: "hide"
				})));
			t.default = $(Object(U.c)(ne))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			const o = Object(s.createContext)({
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
					const [t, n] = Object(s.useState)(0), [i, a] = Object(s.useState)(!1), [c, d] = Object(s.useState)(0), l = {
						currentTime: t,
						setCurrentTime: n,
						isLive: i,
						setIsLive: a,
						totalTime: c,
						setTotalTime: d
					};
					return r.a.createElement(o.Provider, {
						value: l
					}, e)
				}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
			const d = e => r.a.createElement("button", {
					className: Object(o.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && r.a.createElement("span", {
					className: Object(o.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				m = e => r.a.createElement("button", {
					className: Object(o.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/MetaSeparator/index.m.less"),
				a = n.n(i);
			const c = e => r.a.createElement("span", {
				className: Object(o.a)(a.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => r.a.createElement(c, {
				className: Object(o.a)(a.a.metaSeparator, e),
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
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
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
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
						className: Object(o.a)(e.className, u.a.radioOption),
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
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/keycodes.ts");
			class i extends r.a.Component {
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
						const r = e.key === o.b.ArrowUp,
							i = e.key === o.b.ArrowDown;
						if (r || i) {
							const t = this.getValues();
							if (!t.length) return;
							const o = s ? t.indexOf(s) : 0,
								i = t[((r ? o - 1 : o + 1) + t.length) % t.length];
							n(i), this.setState({
								value: i
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
						const o = 0 === s,
							i = n.props.value === t,
							a = null !== t ? i ? 0 : -1 : o ? 0 : -1;
						return r.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: i,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = n("./src/reddit/components/PostContent/ViewCount.tsx"),
				f = n("./src/reddit/constants/colors.ts"),
				h = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				v = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				_ = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				E = n("./src/reddit/selectors/meta.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				O = n("./node_modules/reselect/es/index.js"),
				I = n("./src/reddit/controls/Score/index.m.less"),
				y = n.n(I);
			const S = {
					placement: "right"
				},
				j = e => e.voteState === g.a.downvoted ? Object(_.a)(e).voteText.downvote : e.voteState === g.a.upvoted ? Object(_.a)(e).voteText.upvote : Object(b.a)(Object(h.a)(e)),
				T = Object(O.c)({
					locale: e => Object(E.i)(e),
					post: (e, {
						isReadingIndicatorsExperimentEnabled: t,
						postId: n
					}) => {
						if (t && n) return Object(x.H)(e, {
							postId: n
						})
					}
				}),
				w = () => 0,
				N = Object(d.b)(T),
				k = Object(o.a)(e => {
					const t = {
							color: e.light ? f.a.lightboxHeaderText : j(e)
						},
						{
							score: n,
							postId: o = "",
							locale: h,
							isVoteCountAnimation: b,
							isCountAnimShadowTestEnabled: _,
							isReadingIndicatorsExperimentEnabled: g,
							post: E
						} = e,
						x = Object(d.d)(),
						O = null == h ? void 0 : h.startsWith("en"),
						I = e.isScoreHidden ? O ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: y.a.dot
						}, "•") : Object(i.b)(n),
						T = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && x(Object(l.I)({
								postId: o,
								delta: t
							}))
						}, [x, o]),
						N = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						k = !e.isScoreHidden && b && n < C.a,
						A = Object(v.a)(S);
					return c.a.createElement("div", {
						className: Object(r.a)(y.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: g ? A.show : void 0,
						onMouseLeave: g ? A.hide : void 0,
						ref: g ? A.target.ref : void 0
					}, (k || _) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: n,
						countToUpperBound: n,
						initialDelay: w,
						subsequentRecurringDelay: w,
						incrementDelta: w,
						shouldDisjointAnimation: !0,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: N.current,
						onDataCB: T,
						isLoadTestOnly: _ && !k
					})), !k && I, g && E && c.a.createElement(m.a, A, c.a.createElement(p.a, {
						className: y.a.viewCount,
						post: E,
						showViewCount: !1
					})))
				});
			t.a = N(k)
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
					} of e) t.push(Object(s.f)(n));
				return t
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.I.NO_STRIPE_SUBSCRIPTION:
							case s.I.USER_DOESNT_EXIST:
							case s.I.USER_REQUIRED_ERROR:
							case s.I.VALIDATION_ERROR:
								return e;
							case s.I.NO_USER:
							case s.I.NO_TEXT:
							case s.I.NO_URL:
								return s.I.VALIDATION_ERROR;
							case s.I.CREDIT_CARD_FAILURE:
							case s.I.CREDIT_CARD_FAILURE_GENERIC:
								return s.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.I.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
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
				return f
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return v
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/trackers/gild.ts");
			const a = e => ({
					...r.o(e),
					screen: r.ab(e),
					subreddit: r.jb(e),
					userSubreddit: r.sb(e)
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
					type: Object(i.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...a(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...a(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, s) => r => ({
					...a(r),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
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
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
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
				f = (e, t, n) => s => ({
					...a(s),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				h = (e, t, n) => s => ({
					...a(s),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: r.S(s, t),
					subreddit: r.kb(s, t)
				}),
				b = (e, t) => h(e, t, "disable_in_community"),
				v = (e, t) => h(e, t, "enable_in_community")
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
				return f
			})), n.d(t, "clickHideAward", (function() {
				return h
			})), n.d(t, "clickConfirmHideAward", (function() {
				return b
			})), n.d(t, "clickCancelHideAward", (function() {
				return v
			})), n.d(t, "clickAwardReportFlow", (function() {
				return g
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return C
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return E
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return x
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return O
			})), n.d(t, "clickReportAward", (function() {
				return I
			})), n.d(t, "clickCancelReportAward", (function() {
				return y
			})), n.d(t, "clickConfirmReportAward", (function() {
				return S
			})), n.d(t, "viewGildModalEvent", (function() {
				return j
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return T
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return w
			})), n.d(t, "clickMessageInputEvent", (function() {
				return N
			})), n.d(t, "typeMessageInputEvent", (function() {
				return k
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return R
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return P
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return D
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
				return G
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return B
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...r.o(e),
					comment: t ? r.j(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(i.e)(i.a.GildingFlow, !1),
					post: t ? r.I(e, t) : void 0,
					screen: r.ab(e),
					subreddit: r.jb(e),
					userSubreddit: r.sb(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: r.r(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(a.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: r.r(t)
				}),
				h = (e, t) => n => ({
					...u(n, t),
					source: Object(a.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				b = (e, t) => n => ({
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
				_ = e => (t, n) => s => ({
					...u(s, n),
					source: Object(a.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				g = _("award_hovercard_report"),
				C = _("cancel_award_hovercard_report"),
				E = _("flag_award"),
				x = _("cancel_flag_award"),
				O = _("confirm_flag_award"),
				I = _("report_community_award"),
				y = _("cancel_report_community_award"),
				S = _("confirm_report_community_award"),
				j = (e, t, n) => s => ({
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
				w = (e, t) => n => ({
					...u(n, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				N = e => t => ({
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
				A = e => t => ({
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
				P = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(a.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				D = (e, t) => n => ({
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
				}) => o => ({
					...u(o, r),
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
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				B = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "i", (function() {
				return O
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				f = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const h = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, h = !!n, b = o.b(e), v = b ? Object(u.getAwardTypeFromAward)(b) : null, _ = h ? v : a.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, g = n ? Object(p.a)(n) ? "comment" : "post" : void 0, C = l || a.t(e), E = [...Object(i.d)(e), ...Object(i.f)(e)].filter(e => e.mobileId === C)[0], x = t.offerContext || (b && 0 === b.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(E, h)), O = E ? Math.round(1e4 * (E.baselinePennies - E.pennies) / E.baselinePennies) / 100 : 0, I = E ? Math.round(1e4 * (E.coins - E.baselineCoins) / E.coins) / 100 : 0, y = E ? E.baselinePennies !== E.pennies ? `${O}_percent_price` : E.baselineCoins !== E.coins ? `${I}_percent_bonus` : void 0 : void 0, S = _ === d.GoldPurchaseType.Premium ? s.yb : E ? E.pennies : void 0;
					return {
						...c.o(e),
						comment: n ? c.j(e, n) : null,
						correlationId: a.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: n ? c.I(e, n) : null,
						screen: c.ab(e),
						subreddit: n ? c.jb(e) : null,
						goldPurchase: {
							...b ? Object(f.a)(b) : null,
							type: _,
							gildedContent: h,
							contentType: g,
							numberCoins: E ? E.coins : void 0,
							offerContext: x,
							offerType: y
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
				b = (e, t, n) => s => ({
					...h(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				v = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				_ = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				g = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				C = (e, t) => n => ({
					...h(n, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				E = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				x = (e, t, n) => s => {
					const r = h(s, {
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
				O = e => t => {
					var n;
					const s = h(t, {
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
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.R(e),
					screen: a.ab(e),
					subreddit: a.jb(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(i.i)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: a.I(s, e)
				}),
				l = (e, t, n, s) => r => {
					const i = n ? a.j(r, n) : null,
						{
							sortToUse: c
						} = Object(o.a)(r, e);
					return {
						...d(e, t, s)(r),
						comment: i,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = a.k(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(i.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...d(e, t)(n),
					...a.o(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: a.k(t),
					userSubreddit: a.sb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
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
				return f
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "l", (function() {
				return v
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(r.ab)(e),
					profile: Object(r.R)(e),
					subreddit: Object(r.jb)(e),
					userSubreddit: Object(r.sb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				a = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(n, t),
					...o(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.I)(n, t),
					comment: Object(r.j)(n, t),
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: s.c.UNDO,
					noun: e,
					post: Object(r.I)(n, t),
					comment: Object(r.j)(n, t),
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(n, t),
					comment: Object(r.j)(n, t),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(n, t),
					comment: Object(r.j)(n, t),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(n, t),
					comment: Object(r.j)(n, t),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.j)(n, t),
					post: Object(r.I)(n, t),
					...o(n)
				}),
				f = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(n, t),
					...o(n)
				}),
				h = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.I)(n, t),
					subreddit: Object(r.mb)(n, t)
				}),
				b = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.j)(n, t),
					post: Object(r.I)(n, t),
					subreddit: Object(r.mb)(n, t)
				}),
				v = (e, t, n, s) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.I)(o, n),
					subreddit: Object(r.mb)(o, n),
					actionInfo: {
						reason: s
					},
					...e && {
						comment: Object(r.j)(o, n)
					}
				})
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "d", (function() {
				return S
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/trackers/postEvent.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(s || (s = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(r || (r = {}));
			const d = e => t => ({
					source: s.collection,
					noun: r.post,
					...m(t, e)
				}),
				l = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: s.collection,
					noun: t ? r.unfollow : r.follow,
					...m(n, e)
				}),
				u = ({
					postId: e,
					isFollowed: t
				}) => n => ({
					source: i.a.postEvent,
					noun: t ? r.unfollow : r.follow,
					...m(n, e)
				}),
				m = (e, t) => {
					const n = {
						...c.o(e),
						action: o.c.CLICK,
						subreddit: c.jb(e)
					};
					return void 0 === t ? n : {
						...n,
						post: c.I(e, t),
						postCollection: c.K(e, {
							postId: t
						}),
						postEvent: c.L(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...v(e),
					action: o.c.VIEW,
					noun: r.collectionEducation
				}),
				f = e => ({
					...v(e),
					action: o.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				h = e => ({
					...v(e),
					action: o.c.VIEW,
					noun: r.eventEducation
				}),
				b = e => ({
					...v(e),
					action: o.c.CLICK,
					noun: r.eventEducationGotIt
				}),
				v = e => ({
					...c.o(e),
					subreddit: c.jb(e),
					source: s.postComposer
				}),
				_ = (e, t) => n => ({
					...m(n, e),
					source: t || s.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				g = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: r.collectionRemovePost
				}),
				C = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: r.collectionCancel
				}),
				E = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: r.collectionCreate
					}
				},
				x = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: r.collectionSelect
				}),
				O = e => t => ({
					...c.o(t),
					subreddit: c.jb(t),
					source: s.collectionComposer,
					action: o.c.CLICK,
					noun: r.collectionDelete,
					postCollection: c.J(t, {
						collectionId: e
					})
				}),
				I = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.J(t, {
						collectionId: e
					})
				}),
				y = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: r.startEvent
				}),
				S = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						action: o.c.VIEW,
						noun: r.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return g
			}));
			var s, r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/timezone/index.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				f = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: u.jb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: u.jb(e),
						postEvent: C(e),
						postComposer: E(e)
					})
				},
				b = () => e => ({
					source: s.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: C(e)
				}),
				v = e => t => ({
					...I(t, Object(d.o)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: x(e)
				}),
				_ = () => e => ({
					...I(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				g = e => t => ({
					...I(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: E(t),
					postEvent: O(e)
				}),
				C = e => {
					const t = Object(l.p)(e);
					return t && O(t)
				},
				E = e => x(Object(l.p)(e)),
				x = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / r.Rb : void 0
					}
				},
				O = e => {
					const t = Object(i.f)(e.startDate).getTime() / r.Rb,
						n = Object(i.f)(e.endDate).getTime() / r.Rb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: n,
						eventState: Object(o.e)(t, n)
					}
				},
				I = (e, t) => {
					const n = {
						source: s.eventComposer,
						action: a.c.CLICK,
						subreddit: u.jb(e)
					};
					return t ? {
						...n,
						post: u.I(e, t),
						postEvent: u.L(e, {
							postId: t
						}),
						postCollection: u.K(e, {
							postId: t
						})
					} : n
				}
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
				return f
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return I
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "u", (function() {
				return T
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "v", (function() {
				return k
			})), n.d(t, "w", (function() {
				return A
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.o(e),
					screen: r.ab(e),
					subreddit: r.jb(e),
					userSubreddit: r.sb(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				b = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				v = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				C = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: r.d(t, {
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
				x = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...o(t)
				}),
				O = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				I = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...o(i),
					actionInfo: r.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				w = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				N = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				k = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				A = () => (e, t) => {
					const n = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/gold/powerups/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.o(e)
				}),
				a = e => t => {
					const n = o.jb(t),
						i = Object(r.x)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: a,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.o(t),
						subreddit: n,
						userFlair: {
							id: null == a ? void 0 : a.id,
							title: a ? Object(s.g)(a) : void 0,
							isActive: !!a || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: i
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.o(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.jb(t),
					...o.o(t)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = r.a) {
				return Object(s.e)(n => Object(r.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./src/lib/hooks/useTooltip.ts");
			const i = Object(s.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function a(e) {
				const t = Object(r.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, i))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
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
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = n.n(i);

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
				className: Object(o.a)(a.a.icon, e.className),
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

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({}, e, {
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
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("inlineRow", o.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(s || (s = {}));
			const o = {
				[s.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[s.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var i, a;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(i || (i = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(a || (a = {}));
			const c = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === n,
					r = "new_purchaser" === n,
					o = "repeat_purchaser" === n;
				return t ? a.GildFlow : s ? a.LowCoinBalance : r ? a.NewUserTargetedOffer : o ? a.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
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
				return h
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "p", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
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
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === r.a.Subreddit;
			var p, f, h, b;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(b || (b = {}));
			const v = e => f[b[e]],
				_ = e => b[f[e]],
				g = e => h[f[e]],
				C = e => f[h[e]],
				E = e => b[h[e]];
			var x;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const O = e => {
					switch (e) {
						case x.Hourly:
						case x.Daily:
						case x.Weekly:
						case x.Monthly:
							return !0
					}
					return !1
				},
				I = "custom",
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
							return Object(s.a)(e)
					}
				},
				S = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var i = (e = o, t) => {
				switch (t.type) {
					case r.a:
						const {
							postStats: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			const a = {};
			var c = (e = a, t) => {
				switch (t.type) {
					case r.a:
						const {
							subredditKarma: n
						} = t.payload;
						return {
							...e, ...n
						};
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				postStats: i,
				subredditKarma: c
			})
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/creatorStats/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/user.ts");
			Object(s.a)({
				features: {
					creatorStats: r.a
				}
			});
			const c = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.postStats[t]
				},
				d = (e, t) => {
					var n, s, r;
					const o = null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === s ? void 0 : s.subredditKarma[t]) || void 0 === r ? void 0 : r.karma;
					if (!o) return;
					const {
						fromComments: i,
						fromPosts: a
					} = o;
					return {
						fromComments: i,
						fromPosts: a
					}
				},
				l = (e, t) => {
					const n = Object(i.H)(e, {
						postId: t
					});
					return !(!n || n.isSponsored) && (Object(a.pb)(e, {
						postId: t
					}) || !!Object(o.l)(e, {
						postId: t
					}))
				}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.g
					}) === s.a.Enabled
				},
				i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.m
					}) === s.Wc
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.n
					}) === s.Wc
				}
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(i.pb)(e, {
						postId: t
					}) || !!Object(o.l)(e, {
						postId: t
					}) || Object(i.G)(e))(e, t),
					experimentName: s.Q
				}) === s.Wc
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
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
				return i
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
				return f
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "v", (function() {
				return E
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return N
			}));
			var s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(r.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const i = e => e.features.goldPurchase.purchaseModal.activePage,
				a = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(s.l)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				h = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				b = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				_ = e => e.features.goldPurchase.payment.postalCode,
				g = e => e.features.goldPurchase.payment.savedCardsPending,
				C = e => e.features.goldPurchase.payment.savedCards,
				E = e => e.features.goldPurchase.payment.rememberCard,
				x = e => e.features.goldPurchase.payment.useSavedCard,
				O = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				I = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				y = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				S = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				j = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				T = e => e.features.goldPurchase.payment.stripeToken.pending,
				w = e => e.features.goldPurchase.payment.paypal.passthrough,
				N = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit.1f10955bb944d94b1779.js.map