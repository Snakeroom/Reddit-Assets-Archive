// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit.30735b57742015830702.js
// Retrieved at 10/28/2020, 12:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit"], {
		"./src/graphql/operations/ExperimentVariants.json": function(e) {
			e.exports = JSON.parse('{"id":"34910619f1e9"}')
		},
		"./src/graphql/operations/PostIsTrackingCrossposts.json": function(e) {
			e.exports = JSON.parse('{"id":"a362f62253e5"}')
		},
		"./src/graphql/operations/RichTextPostContent.json": function(e) {
			e.exports = JSON.parse('{"id":"fc24b7b690ad"}')
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"b4cfc86d2c59"}')
		},
		"./src/graphql/operations/SubredditPostFlairStyleTemplates.json": function(e) {
			e.exports = JSON.parse('{"id":"9a87d9b91dc4"}')
		},
		"./src/graphql/operations/SubredditStyles.json": function(e) {
			e.exports = JSON.parse('{"id":"8d0e34deaa32"}')
		},
		"./src/lib/ads/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "k", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "s", (function() {
				return I
			}));
			var s;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.muted = "muted"
			}(s || (s = {}));
			const r = .01,
				o = .3,
				i = .5,
				c = .8,
				a = 1,
				d = 0,
				u = 1e3,
				l = 100,
				b = 2e3,
				_ = 3e3,
				f = 5e3,
				m = 15e3,
				p = [.01, .3, .5, 1],
				O = [.01, .5, .8, 1, {
					key: "TOTAL_MRC_VIEWABLE_TIME",
					playing: !0,
					threshold: i
				}, {
					key: "HALF_DURATION_80_IN_VIEW_AUDIBLE",
					playing: !0,
					withSound: !0,
					threshold: c
				}, {
					key: "FULL_IN_VIEW_AUDIBLE_TIME",
					playing: !0,
					threshold: a,
					withSound: !0
				}, {
					key: "FULL_IN_VIEW_TIME",
					playing: !0,
					threshold: a
				}, {
					key: "AUDIBLE_TIME",
					playing: !0,
					threshold: 0,
					withSound: !0
				}],
				g = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "value";
					const s = Object.entries(t).reduce((t, s) => {
						let [r, o] = s;
						return t[r] = o[e] ? o[e][n] : void 0, t
					}, {});
					return s
				},
				j = e => e.map(e => e && "object" == typeof e ? e.key : Math.floor(100 * e)),
				E = j(p),
				h = j(O),
				I = (e, t) => {
					let n, s = e.source,
						r = e.callToAction;
					if (t) {
						s = {
							displayText: t.displayAddress || t.displayUrl || t.outboundUrl,
							outboundUrl: t.outboundUrl,
							url: t.outboundUrl
						}, n = t.caption, r = t.callToAction
					}
					return {
						source: s,
						caption: n,
						callToAction: r
					}
				}
		},
		"./src/lib/ads/store.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return _
			}));
			var s = n("./src/lib/ads/index.ts");
			let r = {};
			const o = e => (() => r)()[e],
				i = e => e.reduce((e, t) => (e[t] = {
					maxContinuousTime: 0,
					totalTime: 0,
					timeEntered: null
				}, e), {}),
				c = () => ({
					thresholdData: i(s.p),
					videoThresholdData: i(s.n),
					videoAds: {
						muted: {}
					}
				}),
				a = Object.freeze(c()),
				d = (e, t, n, o) => {
					const i = Date.now(),
						c = n ? "videoThresholdData" : "thresholdData";
					Object(s.r)(t).forEach(t => {
						const n = r[e][c][t];
						if (o) n.timeEntered = n.timeEntered || i;
						else if (n.timeEntered) {
							const e = i - n.timeEntered;
							n.totalTime += e, n.maxContinuousTime = Math.max(n.maxContinuousTime, e), n.timeEntered = null
						}
					})
				},
				u = (e, t, n) => {
					const s = r[e].videoAds[n];
					s.value = t, s.timeUpdated = s.timeUpdated && s.value === t ? s.timeUpdated : Date.now()
				},
				l = e => (function(t) {
					r[t] || (r[t] = c());
					for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) s[o - 1] = arguments[o];
					e.apply(void 0, [t, ...s])
				}),
				b = l((e, t, n) => d(e, t, n, !0)),
				_ = l((e, t, n) => d(e, t, n, !1))
		},
		"./src/lib/assertNever.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				throw new Error("Unexpected object: ".concat(e))
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/filterQueryParams/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.search.js");
			var s = n("./node_modules/lodash/omit.js"),
				r = n.n(s),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = n.n(o);
			t.a = (e, t) => {
				const n = i.a.parse(e, !0);
				return n.search = void 0, n.query = Object.assign({}, r()(n.query, t)), i.a.format(n)
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");

			function o(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && i[e.type] ? i[e.type]() : 401 === t ? s.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : s.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const i = {
				[r.j]: () => s.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[r.H]: () => s.fbt._("GIF size must be less than {max file size}MB", [s.fbt._param("max file size", Math.floor(r.R / r.ab).toString())], {
					hk: "1zzsdM"
				}),
				[r.K]: () => s.fbt._("Image size must be less than {max file size}MB", [s.fbt._param("max file size", Math.floor(r.T / r.ab).toString())], {
					hk: "3H6bF8"
				}),
				[r.M]: () => s.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[r.Yb]: () => s.fbt._("Video size must be less than {max file size}GB", [s.fbt._param("max file size", (r.Y / r.ab / 1024).toFixed(1))], {
					hk: "4FkABU"
				})
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += "--[draftId:".concat(e.draftId, "]")), t
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/uploadToS3/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadWithRetries/index.ts"),
				o = n("./src/lib/makeRequest/index.ts");
			const i = (e, t) => {
				const n = new FormData;
				return t.fields.forEach(e => {
					e.value && n.append(e.name, e.value)
				}), n.append("file", e), n
			};
			t.a = async (e, t, c) => {
				const a = (() => Object(r.a)(() => n.e("vendors~xml2js").then(n.t.bind(null, "./node_modules/xml2js/lib/xml2js.js", 7))).then(e => e.default))(),
					d = await Object(o.b)({
						data: i(e, t),
						endpoint: t.action,
						method: s.db.POST,
						type: null,
						setup: c
					});
				if ("string" != typeof d.body) return d;
				try {
					(await a).parseString(d.body, (e, t) => {
						d.body = t
					})
				} catch (u) {
					d.body = u
				}
				return d
			}
		},
		"./src/reddit/actions/ads/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "n", (function() {
				return r
			})), n.d(t, "o", (function() {
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "q", (function() {
				return c
			})), n.d(t, "s", (function() {
				return a
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "u", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "v", (function() {
				return f
			})), n.d(t, "x", (function() {
				return m
			})), n.d(t, "w", (function() {
				return p
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return A
			}));
			const s = "AD_BRAND_SAFETY_STATUS_RECEIVED",
				r = "FETCH_COMMENTS_PAGE_ADS_COMPLETED",
				o = "FETCH_COMMENTS_PAGE_ADS_FAILED",
				i = "FETCH_SIDEBAR_PROMOTED_POSTS_COMPLETED",
				c = "FETCH_SIDEBAR_PROMOTED_POSTS_FAILED",
				a = "REFRESH_SIDEBAR_PROMOTED_POST_COMPLETED",
				d = "REFRESH_SIDEBAR_PROMOTED_POST_FAILED",
				u = "RESET_SIDEBAR_PROMOTED_POSTS",
				l = "AD__IMPRESSION",
				b = "AD__CLICK",
				_ = "AD__VIEWABLE_IMPRESSION",
				f = "VENDOR_FULLY_IN_VIEW",
				m = "VENDOR_FULLY_IN_VIEW_5_SECS",
				p = "VENDOR_FULLY_IN_VIEW_15_SECS",
				O = "GROUPM_VIEWABLE",
				g = "AD__VIDEO_VIEWABLE",
				j = "AD__VIDEO_FULLY_VIEWABLE",
				E = "AD__VIDEO_GROUP_M_VIEWABLE",
				h = "AD__VIDEO_FULLY_VIEWABLE_50",
				I = "AD__VIDEO_STARTED",
				S = "AD__VIDEO_PLAYED_WITH_SOUND",
				T = "AD__VIDEO_PLAYED_EXPANDED",
				y = "AD__VIDEO_WATCHED_PERCENT",
				A = "AD__VIDEO_WATCHED_SECONDS"
		},
		"./src/reddit/actions/ads/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return O
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "a", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/constants/posts.ts"),
				o = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts");
			const a = async e => {
				let {
					context: t,
					count: n,
					subreddit: s,
					forceAd: r
				} = e;
				const a = {
					count: n
				};
				return s && (a.subreddit = s), r && (a.sidebar_ad = r), Object(c.a)(t, {
					type: "json",
					endpoint: "".concat(o.a.gatewayUrl, "/desktopapi/v1/sidebar_ads"),
					method: i.db.POST,
					data: a
				})
			};
			var d = n("./src/reddit/helpers/adCount/index.ts"),
				u = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				l = n("./src/reddit/selectors/brandSafety.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				m = n("./src/reddit/actions/ads/constants.ts");
			const p = Object(s.a)(m.a),
				O = e => async (t, n) => {
					const s = n();
					Object(l.c)(s) && Object(l.d)(s) === e.isViewSafe || t(p(e))
				}, g = Object(s.a)(m.p), j = Object(s.a)(m.q), E = Object(s.a)(m.s), h = Object(s.a)(m.t), I = (Object(s.a)(m.u), Object(s.a)(m.n)), S = (Object(s.a)(m.o), e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					var i;
					const c = n(),
						l = Object(b.q)(c),
						m = Object(d.b)(c, e),
						p = m.length;
					if (0 === p) return;
					switch (e) {
						case u.a.COMMENTS:
						case u.a.COMMENTS_OVERLAY: {
							const e = Object(b.n)(c, {
								page: c.platform.currentPage
							});
							if (!e || e.belongsTo.type === r.a.PROFILE) return;
							break
						}
						case u.a.FRONTPAGE:
						case u.a.MULTIREDDIT:
						case u.a.SEARCH_RESULTS:
						case u.a.SUBREDDIT: {
							const e = c.listings.activeKey,
								t = Object(_.U)(c, {
									listingKey: e,
									predictionsEnabled: Object(f.a)(c)
								});
							if (!t || !t.length) return;
							break
						}
						default:
							return void 0
					}
					const O = Object(b.e)(c);
					let E;
					if ((E = await a({
							context: o(),
							count: p,
							subreddit: O || void 0,
							forceAd: null === (i = null == l ? void 0 : l.sidebar_ad) || void 0 === i ? void 0 : i.split(",")
						})).body && E.body.length) {
						const e = E.body,
							n = {};
						for (let t = 0; t < e.length; t++) n[m[t]] = e[t];
						t(g(n))
					} else t(j(E.error))
				}), T = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					var o;
					const i = n(),
						c = Object(b.q)(i),
						d = await a({
							context: r(),
							count: 1,
							forceAd: null === (o = null == c ? void 0 : c.sidebar_ad) || void 0 === o ? void 0 : o.split(",")
						});
					d.body && d.body.length ? t(E({
						[e]: d.body[0]
					})) : t(h(d.error))
				}, y = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const a = n(),
						d = Object(b.q)(a),
						u = Object(b.e)(a),
						l = await (async e => {
							let {
								context: t,
								count: n,
								postId: s,
								subredditName: r,
								forceAd: a
							} = e;
							const d = {
								count: n,
								subreddit: r,
								post_id: s,
								comments_ad: a
							};
							return Object(c.a)(t, {
								type: "json",
								endpoint: "".concat(o.a.gatewayUrl, "/desktopapi/v1/comments_page_ads"),
								method: i.db.POST,
								data: d
							})
						})({
							context: r(),
							count: 1,
							postId: e,
							subredditName: u,
							forceAd: d ? d.comments_ad : void 0
						});
					if (l.body && l.body.length) return t(I(l.body)), l.body[0].id;
					t(j(l.error))
				}
		},
		"./src/reddit/actions/apiRequestState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return b
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/models/ApiRequestState/index.ts");
			const o = "API_REQUEST_STATE__STARTED",
				i = "API_REQUEST_STATE__COMPLETED",
				c = "API_REQUEST_STATE__FAILED",
				a = "API_REQUEST_STATE__RELEASED";

			function d(e) {
				return {
					type: o,
					payload: {
						apiRequestStatus: r.a.Pending,
						apiRequestId: e
					}
				}
			}

			function u(e) {
				return {
					type: i,
					payload: {
						apiRequestStatus: r.a.Complete,
						apiRequestId: e
					}
				}
			}

			function l(e, t) {
				return {
					type: c,
					payload: {
						apiRequestStatus: r.a.Failed,
						apiRequestId: e,
						apiError: t
					}
				}
			}
			const b = Object(s.a)(a)
		},
		"./src/reddit/actions/changeUsername.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/interceptedAction.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/components/Settings/modalIds.ts"),
				c = n("./src/reddit/constants/actions.ts"),
				a = n("./src/reddit/selectors/interceptedAction.ts");
			const d = "CHANGE_USERNAME_TOOLTIP_CLOSED",
				u = "CHANGE_USERNAME_TOOLTIP_OPENED",
				l = "SAVE_USERNAME_SUCCESS",
				b = Object(s.a)(d),
				_ = (Object(s.a)(u), Object(s.a)(l)),
				f = e => async (t, n) => {
					e && t(Object(r.c)(e)), t(Object(o.h)(i.e))
				}, m = (e, t) => async (n, s) => {
					const o = Object(a.a)(s());
					if (n(_({
							username: e
						})), o) {
						n(((e, t, n) => {
							switch (e.type) {
								case c.a: {
									const {
										payload: {
											args: s
										}
									} = e;
									s && s[0] && "string" == typeof s[0] && (s[0] = s[0].split(n).join(t));
									break
								}
							}
							return e
						})(o, e, t)), n(Object(r.d)())
					}
				}
		},
		"./src/reddit/actions/chat/init.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/chat/customMiddleware/containerSize.ts"),
				r = n("./src/chat/reducers/subscribe.ts"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts");
			let c;
			let a;
			const d = "CHAT__INITED",
				u = Object(i.a)(d),
				l = async (e, t, i) => a ? {
					chatStore: a,
					firstInit: !1
				} : (a = await (async (e, t, s) => {
					const r = Date.now(),
						i = await Object(o.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/initializer.ts"))).then(e => e.default);
					return (await i(t(), r, s)).store
				})(0, t, i), Object(s.b)(a), await (async (e, t, s) => {
					if (!c) {
						const i = (await Object(o.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/reddit/actions/chat/proxy.ts"))).then(e => e.default))(t, s),
							a = Object(r.b)(e, i);
						c = e.subscribe(a)
					}
				})(a, e, t), e(u()), {
					chatStore: a,
					firstInit: !0
				})
		},
		"./src/reddit/actions/chat/toggle.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "d", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/loadWithRetries/index.ts"),
				o = n("./src/chat/constants/container.ts"),
				i = n("./src/chat/customMiddleware/containerSize.ts"),
				c = n("./src/reddit/actions/chat/init.ts"),
				a = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const d = () => Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/actions/meta.ts"))).then(e => e.setExternalData),
				u = () => Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/actions/container.ts"))).then(e => e.sizeChanged);
			async function l(e, t, n, r) {
				const [{
					chatStore: i,
					firstInit: l
				}, b] = await Promise.all([Object(c.c)(e, t, n), u()]), _ = t(), f = await d(), m = Object(a.h)(_, r);
				i.dispatch(f(m)), i.getState().container.size !== o.a.EMBED && i.dispatch(b(o.a.EMBED)), !l && i.dispatch(Object(s.c)(n))
			}
			const b = (e, t) => async (n, s) => {
				await l(n, s, e, t)
			}, _ = () => async (e, t) => Promise.all([Object(c.c)(e, t), u()]).then(e => {
				let [{
					chatStore: t,
					firstInit: n
				}, s] = e;
				t.getState().container.size !== o.a.EMBED || n ? t.dispatch(s(o.a.EMBED)) : t.dispatch(s(o.a.HIDDEN))
			}), f = (e, t) => async (s, o) => {
				const i = (await (() => Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/helpers/urls/index.ts"))).then(e => e.channelUserIdUrl))())(e);
				await l(s, o, i, t)
			}, m = e => {
				let {
					channelId: t,
					subredditName: s,
					channelUrl: o
				} = e;
				return async (e, i) => {
					if (!o && t) {
						const e = await (() => Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/helpers/urls/index.ts"))).then(e => e.channelUrl))();
						o = e(t, s)
					}
					if (!o) throw new Error("Please specify channelUrl or channelId (subredditName is optional)");
					await l(e, i, o)
				}
			}, p = e => async (t, s) => {
				if (!c.b) return;
				const o = await (() => Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/actions/theme.ts"))).then(e => e.switchTheme))();
				c.b.dispatch(o(e))
			}, O = () => async (e, t) => {
				const n = t(),
					s = n.user.account && n.user.account.id || "unknown";
				Object(i.c)(s) && Object(c.c)(e, t)
			}
		},
		"./src/reddit/actions/emailVerificationTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "EMAIL_VERIFICATION_TOOLTIP_TOGGLED",
				o = Object(s.a)(r)
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				i = Object(s.a)(r),
				c = Object(s.a)(o)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return T
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var a, d = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(a || (a = {}));
			var l = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const _ = Object(r.a)(o.g),
				f = Object(r.a)(o.e),
				m = Object(r.a)(o.h),
				p = Object(r.a)(o.c),
				O = Object(r.a)(o.f),
				g = Object(r.a)(o.j),
				j = Object(r.a)(o.i),
				E = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const o = t(),
						a = Object(l.e)(o),
						O = Object(l.d)(o),
						g = Object(b.H)(o);
					if (a || !O) return;
					e(m());
					let j = !1;
					try {
						const t = g ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, Object.assign(Object.assign({}, c), {
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							})))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (h(t)) {
								if (I(t)) {
									e(p({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), j = !0
								} else if (S(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: o
										} = n.focusRecommendations[0],
										i = [s, r],
										c = Object(u.d)(i),
										a = Object(d.b)(i),
										l = Object(u.c)(s),
										b = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: c,
											subredditsAboutInfo: a,
											subredditTopContent: l,
											category: o,
											lastLoadedEnv: "client"
										};
									e(_(b)), j = !0
								}
							} else j = !1
						}
					} catch (E) {
						j = !1
					}
					j || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, h = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !I(e) && s === a.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, T = () => async (e, t, n) => {
					const s = t(),
						r = Object(l.g)(s);
					return Object(l.f)(s) || null === r || "client" === r ? e(E()) : "server" === r ? e(O({
						lastLoadedEnv: "client"
					})) : void 0
				}
		},
		"./src/reddit/actions/gold/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "N", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "M", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "L", (function() {
				return c
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "eb", (function() {
				return l
			})), n.d(t, "fb", (function() {
				return b
			})), n.d(t, "db", (function() {
				return _
			})), n.d(t, "K", (function() {
				return f
			})), n.d(t, "J", (function() {
				return m
			})), n.d(t, "I", (function() {
				return p
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "O", (function() {
				return g
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "ib", (function() {
				return v
			})), n.d(t, "A", (function() {
				return P
			})), n.d(t, "E", (function() {
				return R
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "B", (function() {
				return w
			})), n.d(t, "D", (function() {
				return k
			})), n.d(t, "C", (function() {
				return L
			})), n.d(t, "F", (function() {
				return x
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "v", (function() {
				return M
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "u", (function() {
				return B
			})), n.d(t, "hb", (function() {
				return W
			})), n.d(t, "gb", (function() {
				return H
			})), n.d(t, "x", (function() {
				return q
			})), n.d(t, "y", (function() {
				return Y
			})), n.d(t, "G", (function() {
				return K
			})), n.d(t, "mb", (function() {
				return z
			})), n.d(t, "lb", (function() {
				return Q
			})), n.d(t, "jb", (function() {
				return J
			})), n.d(t, "kb", (function() {
				return X
			})), n.d(t, "wb", (function() {
				return Z
			})), n.d(t, "vb", (function() {
				return $
			})), n.d(t, "ub", (function() {
				return ee
			})), n.d(t, "cb", (function() {
				return te
			})), n.d(t, "bb", (function() {
				return ne
			})), n.d(t, "ab", (function() {
				return se
			})), n.d(t, "V", (function() {
				return re
			})), n.d(t, "W", (function() {
				return oe
			})), n.d(t, "U", (function() {
				return ie
			})), n.d(t, "Q", (function() {
				return ce
			})), n.d(t, "R", (function() {
				return ae
			})), n.d(t, "P", (function() {
				return de
			})), n.d(t, "T", (function() {
				return ue
			})), n.d(t, "S", (function() {
				return le
			})), n.d(t, "H", (function() {
				return be
			})), n.d(t, "Z", (function() {
				return _e
			})), n.d(t, "Y", (function() {
				return fe
			})), n.d(t, "X", (function() {
				return me
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "nb", (function() {
				return Oe
			})), n.d(t, "ob", (function() {
				return ge
			})), n.d(t, "pb", (function() {
				return je
			})), n.d(t, "qb", (function() {
				return Ee
			})), n.d(t, "rb", (function() {
				return he
			})), n.d(t, "sb", (function() {
				return Ie
			})), n.d(t, "tb", (function() {
				return Se
			}));
			const s = "GIVE_PREMIUM__OPEN_GIVE_PREMIUM_MODAL",
				r = "GIVE_PREMIUM__CLOSE_GIVE_PREMIUM_MODAL",
				o = "GILD__OPEN_GILD_MODAL",
				i = "GILD__CLOSE_GILD_MODAL",
				c = "GILD__OPEN_FRAMED_GILD",
				a = "COMMUNITY_AWARDS__CREATE_AWARD_PENDING",
				d = "COMMUNITY_AWARDS__CREATE_AWARD_SUCCESSFUL",
				u = "COMMUNITY_AWARDS__CREATE_AWARD_FAILED",
				l = "COMMUNITY_AWARDS__REMOVE_PENDING",
				b = "COMMUNITY_AWARDS__REMOVE_SUCCESSFUL",
				_ = "COMMUNITY_AWARDS__REMOVE_FAILED",
				f = "COMMUNITY_AWARDS__MANAGEABLE_AWARDS_PENDING",
				m = "COMMUNITY_AWARDS__MANAGEABLE_AWARDS_LOADED",
				p = "COMMUNITY_AWARDS__MANAGEABLE_AWARDS_FAILED",
				O = "COMUNITY_AWARDS__BLACKLIST_STATUS_LOADED",
				g = "COMMUNITY_AWARDS__OPTIONAL_AWARDS_LOADED",
				j = "COMMUNITY_AWARDS__DISABLE_PENDING",
				E = "COMMUNITY_AWARDS__DISABLE_SUCCESSFUL",
				h = "COMMUNITY_AWARDS__DISABLE_FAILED",
				I = "COMMUNITY_AWARDS__ENABLE_PENDING",
				S = "COMMUNITY_AWARDS__ENABLE_SUCCESSFUL",
				T = "COMMUNITY_AWARDS__ENABLE_FAILED",
				y = "AWARD_SHEET__INFO_PENDING",
				A = "AWARD_SHEET__INFO_LOADED",
				D = "AWARD_SHEET__INFO_FAILED",
				v = "COINS__SUBREDDIT_LOCKED_COINS_LOADED",
				P = "GIVE_PREMIUM__GIVE_PREMIUM_PENDING",
				R = "GIVE_PREMIUM__GIVE_PREMIUM_SUCCESSFUL",
				C = "GIVE_PREMIUM__GIVE_PREMIUM_FAILED",
				w = "GIVE_PREMIUM__SELECT_PACKAGE",
				k = "GIVE_PREMIUM__SET_IS_ANONYMOUS",
				L = "GIVE_PREMIUM__SET_INCLUDE_MESSAGE",
				x = "GIVE_PREMIUM__UPDATE_MESSAGE",
				N = "GILD__SET_IS_ANONYMOUS",
				U = "GILD__UPDATE_MESSAGE",
				M = "GILD__TRIGGER_LOADER",
				G = "GILD__GILD_PENDING",
				V = "GILD__GILD_SUCCESSFUL",
				F = "GILD__GILD_FAILED",
				B = "GILD__GILD_THING",
				W = "GIVE_AWARD__SELECT_AWARD",
				H = "AWARDS__REPORT_AWARD",
				q = "AWARDS__GIVE_AWARD_TOOLTIP_CLOSED",
				Y = "AWARDS__GIVE_AWARD_TOOLTIP_OPENED",
				K = "AWARDS__HIDE_AWARD",
				z = "POWERUPS__SUBREDDIT_POWERUPS_PENDING",
				Q = "POWERUPS__SUBREDDIT_POWERUPS_LOADED",
				J = "POWERUPS__SUBREDDIT_POWERUPS_FAILED",
				X = "POWERUPS__SUBREDDIT_POWERUPS_FULL_LOADED",
				Z = "POWERUPS__USER_POWERUPS_PENDING",
				$ = "POWERUPS__USER_POWERUPS_LOADED",
				ee = "POWERUPS__USER_POWERUPS_FAILED",
				te = "POWERUPS__REDDITOR_POWERUPS_PENDING",
				ne = "POWERUPS__REDDITOR_POWERUPS_LOADED",
				se = "POWERUPS__REDDITOR_POWERUPS_FAILED",
				re = "POWERUPS__REALLOCATE_PENDING",
				oe = "POWERUPS__REALLOCATE_SUCCESSFUL",
				ie = "POWERUPS__REALLOCATE_FAILED",
				ce = "POWERUPS__CANCEL_PAYMENT_PENDING",
				ae = "POWERUPS__CANCEL_PAYMENT_SUCCESSFUL",
				de = "POWERUPS__CANCEL_PAYMENT_FAILED",
				ue = "POWERUPS__PAYMENT_COMPLETED",
				le = "POWERUPS_PURCHASE__POWERUPS_COUNT_CHANGED",
				be = "POWERUPS_PURCHASE__IS_ANONYMOUS_CHANGED",
				_e = "PRODUCT_OFFERS__OFFERS_PENDING",
				fe = "PRODUCT_OFFERS__OFFERS_LOADED",
				me = "PRODUCT_OFFERS__OFFERS_FAILED",
				pe = "GILD__AWARD_KARMA_UPDATED",
				Oe = "TOP_AWARDED__POSTS_FAILED",
				ge = "TOP_AWARDED__POSTS_LOADED",
				je = "TOP_AWARDED__POSTS_PENDING",
				Ee = "TOP_AWARDERS__LEADERBOARD_FAILED",
				he = "TOP_AWARDERS__LEADERBOARD_LOADED",
				Ie = "TOP_AWARDERS__LEADERBOARD_PENDING",
				Se = "TOP_AWARDERS__MODAL_OPENED"
		},
		"./src/reddit/actions/header.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return _
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "HEADER__SUBSCRIPTIONS_PINNED",
				o = "HEADER__SUBSCRIPTIONS_UNPINNED",
				i = Object(s.a)(r),
				c = Object(s.a)(o),
				a = "HEADER__DROPDOWN_CLOSED",
				d = "HEADER__DROPDOWN_OPENED",
				u = "HEADER__DROPDOWN_TOGGLED",
				l = Object(s.a)(a),
				b = Object(s.a)(d),
				_ = Object(s.a)(u)
		},
		"./src/reddit/actions/imageUploads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "m", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/uploadToS3/index.ts"),
				i = n("./src/reddit/helpers/getGenericUploadError.ts"),
				c = n("./src/reddit/models/Image/index.tsx"),
				a = n("./src/reddit/selectors/imageUploads.ts");
			const d = "IMAGE_UPLOADS__IMAGE_UPLOAD_PENDING",
				u = "IMAGE_UPLOADS__IMAGE_UPLOAD_LOADED",
				l = "IMAGE_UPLOADS__IMAGE_UPLOAD_SAVED",
				b = "IMAGE_UPLOADS__IMAGE_UPLOAD_FAILED",
				_ = "IMAGE_UPLOADS__IMAGE_UPLOAD_CANCELED",
				f = Object(s.a)(d),
				m = Object(s.a)(u),
				p = Object(s.a)(l),
				O = Object(s.a)(b),
				g = Object(s.a)(_),
				j = async (e, t, n, s) => {
					if (!t.ok) throw Object(c.k)(n, t.error);
					let r, i = t.body;
					"s3UploadLease" in i && (i = i.s3UploadLease, r = t.body.websocketUrl);
					const a = await Object(o.a)(n.file, i);
					if (a.ok) {
						if (!e.imageUploads[n.id]) return void Object(c.d)(n);
						const t = decodeURIComponent(a.body.PostResponse.Location);
						return Object(c.n)(n, t, r, s)
					}
					throw Object(c.k)(n, a.error)
				};

			function E(e) {
				return e.split("/").pop()
			}
			const h = (e, t) => new Promise((n, s) => {
					const o = Object(a.c)(e, t);
					if (!o.length) return n(null);
					const i = o[0].websocketUrl;
					if (!i) return s(new Error("ImageUploads: No websocket URL found"));
					const c = {};
					for (let e = 0; e < o.length; e++) {
						const t = o[e],
							n = E(t.url);
						c[n] = t
					}
					const d = o.length,
						u = new WebSocket(i);
					u.onopen = e => {
						u.onerror = null, n({
							websocket: u,
							imagesByKey: c,
							imageCount: d
						})
					}, u.onerror = e => {
						u.close();
						const t = new Error("ImageUploads: Failed to connect to websocket");
						r.c.captureException(t), s()
					}
				}),
				I = e => (t, n, s) => {
					let {
						apiContext: o
					} = s;
					return new Promise((n, s) => {
						const {
							websocket: o
						} = e;
						let {
							imageCount: a,
							imagesByKey: d
						} = e;

						function u() {
							for (const e in d) {
								const n = d[e],
									s = Object(c.o)(n, n.url);
								t(p(s))
							}
							n(), o.close()
						}
						d = Object.assign({}, d);
						let l = setTimeout(u, 6e4);
						o.onmessage = e => {
							clearTimeout(l);
							const s = JSON.parse(e.data);
							if (s && "success" === s.type) {
								const e = s.payload.url,
									n = E(e),
									r = d[n];
								if (!r) return;
								a -= 1, delete r[n];
								const o = Object(c.o)(r, e);
								t(p(o))
							} else {
								const e = E(s.payload.image_key),
									n = d[e];
								if (!n) return;
								a -= 1, delete n[e];
								const r = Object(i.a)(s.payload.image_key),
									o = Object(c.k)(n, r);
								t(O(o))
							}
							a ? l = setTimeout(u, 6e4) : (o.close(), n())
						}, o.onerror = e => {
							clearTimeout(l);
							const n = Object(i.a)("websocket");
							for (const s in d) {
								const e = d[s],
									r = Object(c.k)(e, n);
								t(O(r))
							}
							o.close();
							const a = new Error("ImageUploads: WebSocket connection failed before all messages received");
							r.c.captureException(a), s()
						}
					})
				}
		},
		"./src/reddit/actions/interceptedAction.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "INTERCEPTED_ACTION_SET",
				o = "INTERCEPTED_ACTION_UNSET",
				i = Object(s.a)(r),
				c = Object(s.a)(o)
		},
		"./src/reddit/actions/login.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return a
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "e", (function() {
				return g
			}));
			var s = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/constants/postLayout.ts");
			const c = e => async (t, n) => {
				t(Object(s.i)(e)), !n().user.prefs.layout && t(Object(r.w)(i.d.Card))
			}, a = () => async (e, t) => {
				e(c(o.a.LOGIN_MODAL_ID))
			}, d = () => async e => {
				e(c(o.a.REGISTER_MODAL_ID))
			}, u = () => async e => {
				e(c(o.a.CHANGE_PASSWORD_MODAL_ID))
			}, l = () => async e => {
				e(c(o.a.ENABLE_TWO_FACTOR))
			}, b = () => async e => {
				e(c(o.a.DISABLE_TWO_FACTOR))
			}, _ = () => async e => {
				e(c(o.a.TWO_FACTOR_BACKUP_CODES))
			}, f = () => async e => {
				e(c(o.a.LINK_APPLE_SSO))
			}, m = () => async e => {
				e(c(o.a.UNLINK_APPLE_SSO))
			}, p = () => async e => {
				e(c(o.a.LINK_GOOGLE_SSO))
			}, O = () => async e => {
				e(c(o.a.UNLINK_GOOGLE_SSO))
			}, g = () => async e => {
				e(c(o.a.GOOGLE_ONE_TAP_MODAL_ID))
			}
		},
		"./src/reddit/actions/media.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "j", (function() {
				return T
			}));
			var s = n("./src/lib/ads/index.ts"),
				r = n("./src/lib/ads/store.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/actions/video.ts");
			const _ = "MEDIA__SET_MUTE",
				f = Object(o.a)(_),
				m = "MEDIA__SET_VOLUME",
				p = Object(o.a)(m),
				O = "MEDIA__SET_CURRENT_SLIDE_INDEX",
				g = "TOGGLE_GALLERY_LAYOUT",
				j = Object(o.a)(g),
				E = Object(o.a)(O),
				h = (e, t, n) => async (o, i) => {
					o(f(e)), !e && n && (r.e(n, e, s.m.muted), o(Object(b.C)(t, n)))
				}, I = "MEDIA__EMBED_HEIGHT_MEASURED", S = Object(o.a)(I), T = e => {
					let {
						height: t,
						isDeleted: n,
						postId: s
					} = e;
					return async (e, r, o) => {
						let {
							apiContext: b
						} = o;
						const _ = r(),
							{
								media: f
							} = _.posts.models[s];
						e(S({
							height: t,
							isDeleted: n,
							postId: s
						})), null !== f && f.type === l.o.EMBED && f.provider === l.v.Twitter && f.height !== t && await ((e, t, n) => Object(c.a)(Object(a.a)(e, [d.a]), {
							endpoint: Object(u.a)("".concat(e.apiUrl, "/api/set_twitter")),
							method: i.db.POST,
							data: {
								height: n,
								link: t
							}
						}))(b(), s.substr(3), t)
					}
				}
		},
		"./src/reddit/actions/modal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "k", (function() {
				return I
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/changeUsername.ts"),
				o = n("./src/reddit/actions/header.ts"),
				i = (n("./src/reddit/actions/media.ts"), n("./src/reddit/constants/modals.ts")),
				c = n("./src/reddit/endpoints/user/index.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/header.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const b = "MODAL_TOGGLED",
				_ = Object(s.a)(b),
				f = "CLOSE_ALL_MODALS",
				m = Object(s.a)(f),
				p = "REDESIGN_MODAL_CLOSED",
				O = (Object(s.a)(p), e => async (t, n, s) => {
					Object(d.b)(e)(n()) && t(_(e))
				}),
				g = e => async (t, n, s) => {
					const c = n();
					if (!Object(d.b)(e)(c)) {
						if ((e === i.a.MULTIREDDIT_CREATE || e === i.a.MULTIREDDIT_ADD_SUBREDDIT) && Object(l.K)(c)) {
							Object(u.a)(c) && t(Object(o.f)());
							const n = _(e);
							return void t(Object(r.f)(n))
						}
						t(_(e))
					}
				}, j = () => async (e, t, n) => {
					Object(a.eb)(i.a.REDESIGN_MODAL, !0), Object(l.I)(t()) && Object(c.e)(n.apiContext())
				}, E = "SET_ACCOUNT_MANAGER_MODAL_DATA";
			var h;
			! function(e) {
				e.HeaderLogin = "header_login", e.HeaderSignup = "header_signup", e.Hide = "hide", e.IdCard = "id_card", e.NotificationsInbox = "notifications_inbox", e.Post = "post", e.PromoBanner = "promo", e.Reply = "reply", e.Report = "report", e.SubredditLeaderboard = "subreddit_leaderboard", e.Save = "save", e.Subscribe = "subscribe", e.Vote = "vote"
			}(h || (h = {}));
			const I = Object(s.a)(E)
		},
		"./src/reddit/actions/notificationBanner.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "NOTIFICATION_BANNER_SET",
				o = "NOTIFICATION_BANNER_DISMISSED",
				i = Object(s.a)(r),
				c = Object(s.a)(o)
		},
		"./src/reddit/actions/post.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return ee
			})), n.d(t, "c", (function() {
				return te
			})), n.d(t, "h", (function() {
				return ne
			})), n.d(t, "g", (function() {
				return se
			})), n.d(t, "r", (function() {
				return re
			})), n.d(t, "k", (function() {
				return ie
			})), n.d(t, "J", (function() {
				return ae
			})), n.d(t, "e", (function() {
				return de
			})), n.d(t, "d", (function() {
				return ue
			})), n.d(t, "z", (function() {
				return le
			})), n.d(t, "y", (function() {
				return be
			})), n.d(t, "P", (function() {
				return _e
			})), n.d(t, "L", (function() {
				return fe
			})), n.d(t, "S", (function() {
				return pe
			})), n.d(t, "q", (function() {
				return Oe
			})), n.d(t, "F", (function() {
				return je
			})), n.d(t, "G", (function() {
				return Ee
			})), n.d(t, "t", (function() {
				return Se
			})), n.d(t, "H", (function() {
				return Te
			})), n.d(t, "m", (function() {
				return ye
			})), n.d(t, "K", (function() {
				return Ae
			})), n.d(t, "E", (function() {
				return De
			})), n.d(t, "w", (function() {
				return ve
			})), n.d(t, "O", (function() {
				return Pe
			})), n.d(t, "B", (function() {
				return Re
			})), n.d(t, "A", (function() {
				return Ce
			})), n.d(t, "p", (function() {
				return we
			})), n.d(t, "Q", (function() {
				return ke
			})), n.d(t, "R", (function() {
				return Le
			})), n.d(t, "v", (function() {
				return Ne
			})), n.d(t, "i", (function() {
				return Ue
			})), n.d(t, "n", (function() {
				return Ge
			})), n.d(t, "l", (function() {
				return Ve
			})), n.d(t, "M", (function() {
				return Fe
			})), n.d(t, "D", (function() {
				return Be
			})), n.d(t, "I", (function() {
				return We
			})), n.d(t, "u", (function() {
				return He
			})), n.d(t, "C", (function() {
				return qe
			})), n.d(t, "j", (function() {
				return Ye
			})), n.d(t, "s", (function() {
				return ze
			})), n.d(t, "N", (function() {
				return Qe
			})), n.d(t, "f", (function() {
				return Je
			})), n.d(t, "x", (function() {
				return Xe
			})), n.d(t, "a", (function() {
				return Ze
			})), n.d(t, "o", (function() {
				return $e
			}));
			var s = n("./node_modules/@reddit/onetrust-integration/dist/esm/index.js"),
				r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/js-cookie/src/js.cookie.js"),
				c = n.n(i),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/copyToClipboard/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/ads/constants.ts"),
				b = n("./src/reddit/actions/login.ts"),
				_ = n("./src/reddit/actions/platform.ts"),
				f = n("./src/reddit/constants/adEvents.ts"),
				m = n("./src/reddit/helpers/getVendorMetadata.ts"),
				p = n("./src/lib/LRUCache/index.ts"),
				O = n("./node_modules/query-string/index.js"),
				g = n.n(O),
				j = n("./src/lib/sentry/index.ts");
			const E = new p.a(1e3),
				h = (e, t, n) => {
					return e.events.filter(e => e.type === t).every(e => ((e, t) => {
						let {
							url: n,
							type: s
						} = e;
						if (!n) return j.c.captureMessage("Pixel of type ".concat(s, " has no url")), !1;
						if (!E.get(n)) {
							const e = /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n);
							let s;
							if (t && e) {
								const {
									url: e,
									query: r
								} = g.a.parseUrl(n);
								s = g.a.stringifyUrl({
									url: e,
									query: Object.assign(Object.assign({}, r), t)
								})
							}
							const r = new Image;
							return E.set(n, !0), s && (n = s), r.src = n, !0
						}
						return !1
					})(e, n))
				};
			var I = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/actions/unload/constants.ts");
			let T = !1;
			Object(u.a)(S.b);
			const y = (e, t, n) => {
				if (window && !T && (window.addEventListener("beforeunload", () => (e => {
						S.a.forEach(t => {
							let {
								post: n
							} = t;
							const s = Object(I.b)(e(), n.id),
								r = Object(m.a)(n.id, s, f.a.Unload);
							h(n, f.a.Unload, r)
						})
					})(n)), T = !0), S.c.has(e.id) || e.isBlank) return;
				S.c.add(e.id);
				const s = {
					post: e,
					unloadTimer: window.setTimeout(() => {
						t(Se(e, f.a.Unload))
					}, S.d)
				};
				if (S.a.push(s), S.a.length > 5) {
					const e = S.a.shift();
					t(Se(e.post, f.a.Unload)), clearTimeout(e.unloadTimer)
				}
			};
			var A = n("./src/reddit/actions/video.ts"),
				D = n("./src/reddit/actions/vote.ts"),
				v = n("./src/reddit/constants/cookie.ts"),
				P = n("./src/reddit/constants/history.ts"),
				R = n("./src/reddit/constants/posts.ts"),
				C = n("./src/reddit/helpers/isPost.ts"),
				w = n("./src/reddit/helpers/overlay/index.ts"),
				k = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/endpoints/post/index.tsx"),
				N = n("./src/lib/makeGqlRequest/index.ts"),
				U = n("./src/graphql/operations/RichTextPostContent.json");
			var M = n("./src/lib/constants/index.ts"),
				G = n("./src/lib/makeListingKey/index.ts"),
				V = n("./node_modules/react-router-redux/es/index.js"),
				F = n("./src/reddit/actions/modal.ts"),
				B = n("./src/reddit/actions/toaster.ts"),
				W = n("./src/reddit/constants/modals.ts"),
				H = n("./src/reddit/endpoints/page/commentsPage.ts"),
				q = n("./src/reddit/helpers/trackers/post.ts"),
				Y = n("./src/reddit/models/Flair/index.ts"),
				K = n("./src/reddit/models/Toast/index.ts"),
				z = n("./src/reddit/models/User/index.ts"),
				Q = n("./src/reddit/models/Vote/index.ts"),
				J = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				X = n("./src/reddit/selectors/platform.ts"),
				Z = n("./src/reddit/selectors/user.ts"),
				$ = n("./src/telemetry/index.ts");
			const ee = "POST__EXPANDED_TOGGLED",
				te = "POST__FOCUS_CHANGED",
				ne = "POSTS__MUTATED",
				se = "POSTS_LOADED",
				re = Object(u.a)(ee),
				oe = (Object(u.a)(te), Object(u.a)(se)),
				ie = "POST__STICKY_POST_SUCCESS",
				ce = Object(u.a)(ie),
				ae = Object(u.a)(ne),
				de = "POST__MODERATION_PROMPT_OPENED",
				ue = "POST__MODERATION_PROMPT_CLOSED",
				le = Object(u.a)(de),
				be = Object(u.a)(ue),
				_e = (e, t, n, s) => async (r, i, c) => {
					let {
						apiContext: a
					} = c;
					const d = i().posts.models[e];
					if (!d) return;
					if (!Object(Z.I)(i())) return r(Object(F.k)({
						actionSource: F.a.Hide,
						redirectUrl: d.permalink
					})), void r(Object(b.i)());
					let u;
					if (r(ae({
							[e]: {
								hidden: t
							}
						})), (u = t ? await Object(x.h)(a(), e) : await Object(x.u)(a(), e)).ok) {
						if (s) {
							const s = t ? o.fbt._("Post hidden successfully.", null, {
									hk: "a4K6a"
								}) : o.fbt._("Post unhidden successfully.", null, {
									hk: "xJgPP"
								}),
								i = Object(B.d)(s, K.b.Undo, o.fbt._("Undo", null, {
									hk: "46OwLP"
								}), _e(e, !t, n, !1));
							r(Object(B.e)(i))
						}
					} else if (r(ae({
							[e]: {
								hidden: !t
							}
						})), s) {
						const e = Object(B.d)(o.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						}), K.b.Error);
						r(Object(B.e)(e))
					}
				}, fe = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n().posts.models[e];
					if (!i) return;
					if (!Object(Z.I)(n())) return t(Object(b.i)()), void t(Object(F.k)({
						actionSource: F.a.Save,
						redirectUrl: i.permalink
					}));
					const c = i.saved ? x.y : x.p;
					if (t(ae({
							[e]: {
								saved: !i.saved
							}
						})), (await c(r(), e)).ok) {
						const n = i.saved ? o.fbt._("Post unsaved successfully", null, {
								hk: "rrnyE"
							}) : o.fbt._("Post saved successfully", null, {
								hk: "3fAuAl"
							}),
							s = Object(B.d)(n, K.b.Undo, o.fbt._("Undo", null, {
								hk: "46OwLP"
							}), fe(e));
						t(Object(B.e)(s))
					} else t(ae({
						[e]: {
							saved: i.saved
						}
					}))
				}, me = (e, t) => t().posts.models[e], pe = Object(D.b)(me, Q.a.upvoted), Oe = Object(D.b)(me, Q.a.downvoted), ge = e => "viewing-".concat(e), je = (e, t) => async (n, s) => {
					const r = s();
					q.i(r, e, t), $.c.start(ge(e))
				}, Ee = (e, t, n) => async (s, o) => {
					const i = o(),
						c = ge(e);
					if ($.c.has(c)) {
						const s = $.c.end("viewing-".concat(e));
						!t && s > r.a.telemetry.postConsumedThreshold && q.a(i, e, s, n)
					}
				}, he = {
					[f.a.Impression]: l.c,
					[f.a.Click]: l.b,
					[f.a.ViewableImpression]: l.m,
					[f.a.GroupMViewable]: l.r,
					[f.a.VideoViewableImpression]: l.j,
					[f.a.VideoFullyViewableImpression]: l.d,
					[f.a.VideoStarted]: l.i,
					[f.a.VideoPlayedWithSound]: l.h,
					[f.a.VideoGroupMViewable]: l.f,
					[f.a.VideoWatchedSeconds3]: l.l,
					[f.a.VideoWatchedSeconds5]: l.l,
					[f.a.VideoWatchedSeconds10]: l.l,
					[f.a.VideoWatched25]: l.k,
					[f.a.VideoWatched50]: l.k,
					[f.a.VideoWatched75]: l.k,
					[f.a.VideoWatched95]: l.k,
					[f.a.VideoWatched100]: l.k,
					[f.a.VideoVendorFullyViewable50]: l.e,
					[f.a.VideoPlayedExpanded]: l.g,
					[f.a.Unload]: S.b,
					[f.a.VendorFullyInView]: l.v,
					[f.a.VendorFullyInViewSeconds5]: l.x,
					[f.a.VendorFullyInViewSeconds15]: l.w
				}, Ie = Object(u.b)(he), Se = (e, t, n) => async (s, r) => {
					const o = Object(I.b)(r(), e.id),
						i = Object(m.a)(e.id, o, t);
					he[t] && s(Ie(String(t), {
						postId: e.id,
						vendorMetadata: i,
						eventType: n
					})), h(e, t, i)
				}, Te = (e, t) => async (n, s) => {
					const r = e && e.media && "video" === e.media.type,
						o = [f.a.VendorFullyInView, f.a.VendorFullyInViewSeconds5, f.a.VendorFullyInViewSeconds15];
					if (r && t === f.a.VideoViewableImpression) n(Object(A.y)(e.id));
					else if (r && t === f.a.VideoFullyViewableImpression) n(Object(A.v)(e.id));
					else if (r && t === f.a.VideoGroupMViewable) n(Object(A.w)(e.id));
					else if (r && t === f.a.VideoVendorFullyViewable50) n(Object(A.x)(e.id));
					else if (e.isSponsored)
						if (o.includes(t)) n(((e, t) => async n => {
							n(Se(e, t))
						})(e, t));
						else {
							if (t !== f.a.GroupMViewable) return t === f.a.Impression ? (n((e => async (t, n) => {
								e.isSponsored && (t(Se(e, f.a.Impression)), y(e, t, n))
							})(e)), void(e.isBlank || q.h(s(), e.postId))) : void n((e => async t => {
								e.isSponsored && t(Se(e, f.a.ViewableImpression))
							})(e));
							n(((e, t) => async n => {
								n(Se(e, t))
							})(e, t))
						}
				}, ye = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n(),
						i = o.posts.models[e],
						c = o.user.account ? o.user.account.displayText : null;
					i && (t(ae({
						[e]: {
							approvedBy: c,
							bannedBy: null,
							isApproved: !0,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							numReports: 0,
							modRemovalReason: null,
							modReasonBy: null
						}
					})), (await Object(x.b)(r(), e)).ok || t(ae({
						[e]: {
							approvedBy: null,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							modNote: i.modNote,
							numReports: i.numReports || null,
							modRemovalReason: i.modRemovalReason,
							modReasonBy: i.modReasonBy
						}
					})))
				}, Ae = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s(),
						c = i.posts.models[e],
						a = i.user.account ? i.user.account.displayText : null;
					return !(!c || !a) && (n(ae({
						[e]: {
							approvedBy: null,
							bannedBy: a,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), !!(await Object(x.m)(o(), e, t)).ok || (n(ae({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), !1))
				}, De = (e, t, n) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const a = r();
					if (a.posts.models[e])
						if (s(ae({
								[e]: {
									hidden: !0
								}
							})), (await Object(x.c)(c(), e)).ok) {
							const e = Object(B.d)(o.fbt._("Post deleted successfully.", null, {
								hk: "1sQ4Xf"
							}), K.b.SuccessMod);
							if (n) s(Object(V.b)(t.state[P.a.CloseLocation]));
							else {
								const e = Object(X.f)(a);
								e && s(Object(V.b)(e.url))
							}
							s(Object(B.e)(e))
						} else {
							s(ae({
								[e]: {
									hidden: !1
								}
							}));
							const t = Object(B.d)(o.fbt._("Something went wrong", null, {
								hk: "22u7ha"
							}), K.b.Error);
							s(Object(B.e)(t))
						}
				}, ve = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n().posts.models[e];
					if (!o) return;
					const i = o.isLocked ? x.w : x.j;
					t(ae({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await i(r(), e)).ok || t(ae({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, Pe = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n().posts.models[e];
					if (!o) return;
					const i = o.isSpoiler ? x.z : x.s,
						c = o.isSpoiler ? o.flair.filter(e => e.type !== Y.f.Spoiler) : [...o.flair, {
							text: "spoiler",
							type: Y.f.Spoiler
						}];
					t(ae({
						[e]: {
							isSpoiler: !o.isSpoiler,
							flair: c
						}
					})), (await i(r(), e)).ok || t(ae({
						[e]: {
							isSpoiler: o.isSpoiler,
							flair: o.flair
						}
					}))
				}, Re = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = Object(I.O)(n(), {
						postId: e
					});
					o && (t(ae({
						[e]: {
							isOriginalContent: !o.isOriginalContent
						}
					})), (await Object(x.l)(r(), e, !o.isOriginalContent)).ok || t(ae({
						[e]: {
							isOriginalContent: o.isOriginalContent
						}
					})))
				}, Ce = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n().posts.models[e];
					if (!o) return;
					const i = o.isNSFW ? x.x : x.k,
						c = o.isNSFW ? o.flair.filter(e => e.type !== Y.f.Nsfw) : [...o.flair, {
							text: "nsfw",
							type: Y.f.Nsfw
						}];
					t(ae({
						[e]: {
							isNSFW: !o.isNSFW,
							flair: c
						}
					})), (await i(r(), e)).ok ? await t(Be(e)) : t(ae({
						[e]: {
							isNSFW: o.isNSFW,
							flair: o.flair
						}
					}))
				}, we = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s().posts.models[e];
					if (!i) return;
					const c = M.g[t];
					n(ae({
						[e]: {
							distinguishType: t
						}
					})), (await Object(x.d)(o(), e, c)).ok || n(ae({
						[e]: {
							distinguishType: i.distinguishType
						}
					}))
				}, ke = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n().posts.models[e];
					if (!o) return;
					const i = o.ignoreReports ? x.v : x.i;
					t(ae({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await i(r(), e)).ok || t(ae({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, Le = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n(),
						i = o.posts.models[e];
					if (!i) return;
					const c = !i.isStickied;
					t(ae({
						[e]: {
							isStickied: c
						}
					}));
					const a = o.subredditStickyPosts.data[i.belongsTo.id];
					let d;
					if (c && a && a.length >= 2 && (d = a[1], t(ae({
							[d]: {
								isStickied: !1
							}
						}))), (await Object(x.t)(r(), e, c, !1)).ok) {
						const n = i.belongsTo.id,
							s = xe(e, c, o.subredditStickyPosts.data[i.belongsTo.id]),
							r = o.subreddits.models[n].name,
							a = Object(G.a)(r, M.P, {});
						t(ce({
							newStickiedPostList: s,
							subredditId: n,
							listingKey: a
						}))
					} else t(ae({
						[e]: {
							isStickied: i.isStickied
						}
					})), d && t(ae({
						[d]: {
							isStickied: !0
						}
					}))
				}, xe = (e, t, n) => {
					const s = n ? [...n] : [];
					return t ? (s.length >= 2 && s.splice(1, 1, e), s) : s.filter((function(t) {
						return t !== e
					}))
				}, Ne = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (Object(d.a)(e)) {
						const e = Object(B.d)(o.fbt._("Copied link!", null, {
							hk: "4a4E1x"
						}), K.b.SuccessCommunity);
						t(Object(B.e)(e))
					} else {
						const e = Object(B.d)(o.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						}), K.b.Error);
						t(Object(B.e)(e))
					}
				}, Ue = "PREFERENCES__RECENT_POSTS_UPDATED", Me = Object(u.a)(Ue), Ge = () => async (e, t) => {
					const n = t();
					if (!n.user.account) return;
					const s = Object(z.e)(n.user.account);
					c.a.remove("".concat(s).concat(v.g), {
						domain: r.a.cookieDomain
					}), e(Me({
						postIds: []
					}))
				}, Ve = e => async (t, n) => {
					const o = n();
					if (!o.user.account || !o.user.account.showRecentPosts || o.posts.recent.indexOf(e) > -1) return;
					const i = Object(z.e)(o.user.account),
						c = o.posts.recent ? o.posts.recent.slice(0) : [];
					c.push(e), c.length > R.c && c.shift(), Object(s.b)("".concat(i).concat(v.g), "".concat(c.join(",")), {
						domain: r.a.cookieDomain
					}), t(Me({
						postIds: c
					}))
				}, Fe = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = !n().posts.models[e].sendReplies;
					t(ae({
						[e]: {
							sendReplies: o
						}
					})), (await Object(x.q)(r(), e, o)).ok || t(ae({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Be = e => async (t, n, s) => {
					if (Object(I.O)(n(), {
							postId: e
						})) return;
					const r = await Object(H.a)(s.apiContext(), e, void 0, {
						limit: 1,
						truncate: 0
					}, Object(J.a)(n()));
					if (t(Object(_.m)(r.status)), r.ok) {
						const e = r.body;
						t(oe(e.posts))
					}
				}, We = e => async (t, n) => {
					await t(Be(e));
					const s = Object(I.O)(n(), {
						postId: e
					});
					s && s.crosspostRootId && await t(Be(s.crosspostRootId))
				}, He = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = n();
					if (!Object(Z.I)(i)) return void t(Object(F.i)(W.a.LOGIN_MODAL_ID));
					const c = Object(I.O)(i, {
						postId: e
					});
					if (!c) return;
					const a = c.isFollowed,
						d = i.posts.instances[e] || [],
						u = [e, ...d];
					t(ae(u.reduce((e, t) => Object.assign(Object.assign({}, e), {
						[t]: {
							isFollowed: !a
						}
					}), {}))), (await Object(x.g)(r(), e, !c.isFollowed)).ok ? t(Object(B.e)({
						kind: K.b.SuccessMod,
						text: a ? o.fbt._("Event unfollowed", null, {
							hk: "3tkWMt"
						}) : o.fbt._("Success! You followed this event, that means we’ll remind you when it starts!", null, {
							hk: "4A9cwh"
						})
					})) : (t(ae(u.reduce((e, t) => Object.assign(Object.assign({}, e), {
						[t]: {
							isFollowed: a
						}
					}), {}))), t(Object(B.e)({
						kind: K.b.Error,
						text: o.fbt._("Oops, something went wrong. Try again.", null, {
							hk: "2VQ3RW"
						})
					})))
				}, qe = e => {
					let {
						postOrComment: t,
						queryParams: n,
						clickInfo: s
					} = e;
					return async (e, r) => {
						const o = r(),
							i = s && s.hasNewTabModifier;
						let c = t.permalink;
						if (Object(C.b)(t) && t.media && Object(L.H)(t.media)) {
							const {
								id: e,
								type: n
							} = t.belongsTo, s = "subreddit" === n ? o.subreddits.models[e] : null;
							c = s ? Object(k.c)(t.id, s.name) : Object(k.c)(t.id)
						}
						n && (c = Object(a.a)(c, n)), o.user.prefs.openPostInNewTab || i ? window.open(c) : e(Object(w.a)(c))
					}
				}, Ye = "RICH_TEXT_POST_CONTENT_LOADED", Ke = Object(u.a)(Ye), ze = e => async (t, n, s) => {
					const r = n(),
						i = Object(I.O)(r, {
							postId: e
						});
					if (!(i && i.media && Object(L.I)(i.media) && i.media.isRichtextPreview)) return;
					const c = await ((e, t) => Object(N.a)(e, Object.assign(Object.assign({}, U), {
						variables: t
					})))(s.gqlContext(), {
						postId: e
					});
					if (c.ok) {
						const {
							data: n
						} = c.body, s = n.post && n.post.content && n.post.content.richtext;
						s && t(Ke({
							postId: e,
							richtextContent: JSON.parse(s)
						}))
					} else t(Object(B.e)({
						kind: K.b.Error,
						text: o.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "1GbrKz"
						})
					}))
				}, Qe = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					(await Object(x.r)(i(), e, t)).ok ? n(ae({
						[t]: {
							contestMode: e
						}
					})) : n(Object(B.e)({
						kind: K.b.Error,
						text: o.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, Je = "MOD_TO_MEMBER_SHARE_OPENED", Xe = Object(u.a)(Je), Ze = "CROWD_CONTROL_OPENED", $e = Object(u.a)(Ze)
		},
		"./src/reddit/actions/postFlairStyleTemplates/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				r = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
				o = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				c = Object(s.a)(o),
				a = Object(s.a)(i),
				d = (e, t) => async (n, s) => {
					const o = s();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? n(a({
						listingKey: e
					})) : r.j(o, e) : n(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/preferences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return V
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "h", (function() {
				return W
			})), n.d(t, "p", (function() {
				return H
			})), n.d(t, "e", (function() {
				return q
			})), n.d(t, "d", (function() {
				return Y
			})), n.d(t, "m", (function() {
				return K
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "o", (function() {
				return Q
			})), n.d(t, "r", (function() {
				return J
			})), n.d(t, "t", (function() {
				return te
			})), n.d(t, "c", (function() {
				return ie
			})), n.d(t, "v", (function() {
				return ce
			})), n.d(t, "w", (function() {
				return ae
			})), n.d(t, "x", (function() {
				return de
			})), n.d(t, "u", (function() {
				return ue
			})), n.d(t, "y", (function() {
				return le
			})), n.d(t, "F", (function() {
				return be
			})), n.d(t, "D", (function() {
				return _e
			})), n.d(t, "a", (function() {
				return fe
			})), n.d(t, "q", (function() {
				return me
			})), n.d(t, "E", (function() {
				return je
			})), n.d(t, "H", (function() {
				return Ee
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "l", (function() {
				return ye
			})), n.d(t, "k", (function() {
				return De
			})), n.d(t, "z", (function() {
				return Pe
			})), n.d(t, "C", (function() {
				return Re
			})), n.d(t, "s", (function() {
				return Ce
			})), n.d(t, "B", (function() {
				return we
			})), n.d(t, "A", (function() {
				return Le
			})), n.d(t, "n", (function() {
				return xe
			})), n.d(t, "G", (function() {
				return Me
			})), n.d(t, "J", (function() {
				return Ge
			})), n.d(t, "I", (function() {
				return Ve
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/@reddit/onetrust-integration/dist/esm/index.js"),
				r = n("./node_modules/Base64/base64.js"),
				o = n("./src/config.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				a = n.n(c),
				d = n("./node_modules/lodash/isEmpty.js"),
				u = n.n(d),
				l = n("./node_modules/lodash/omit.js"),
				b = n.n(l),
				_ = n("./node_modules/lodash/pick.js"),
				f = n.n(_),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				O = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/actions/chat/toggle.ts"),
				j = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				E = n("./src/reddit/actions/users.ts"),
				h = n("./src/reddit/constants/cookie.ts"),
				I = n("./src/reddit/constants/headers.ts"),
				S = n("./src/reddit/endpoints/user/preferences.ts"),
				T = n("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				A = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				D = n("./src/reddit/actions/imageUploads.ts"),
				v = n("./src/reddit/actions/toaster.ts"),
				P = n("./src/reddit/constants/preferences.ts"),
				R = n("./src/reddit/endpoints/subreddit/settings.ts"),
				C = n("./src/reddit/helpers/media/index.ts"),
				w = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				k = n("./src/reddit/models/Image/index.tsx"),
				L = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/User/index.ts"),
				N = n("./src/reddit/selectors/imageUploads.ts"),
				U = n("./src/reddit/selectors/structuredStyles.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				G = n("./src/reddit/selectors/user.ts");
			const V = "PREFERENCES__AUTOPLAY_TOGGLED",
				F = "PREFERENCES__NIGHTMODE_TOGGLED",
				B = "PREFERENCES__LANGUAGE_CHANGED",
				W = "PREFERENCES__LAYOUT_CHANGED",
				H = "PREFERENCES__SUBREDDIT_LAYOUT_CHANGED",
				q = "PREFERENCES__CUSTOMIZE_FLYOUT_SHOWN",
				Y = "PREFERENCES__CUSTOMIZE_FLYOUT_DISMISSED",
				K = "PREFERENCES__PROFILE_LAYOUT_CHANGED",
				z = "PREFERENCES__HAMBURGER_TRAY_TOGGLED",
				Q = "PREFERENCES__RPAN_DU_DISMISSED",
				J = "PREFERENCES__TOP_CONTENT_DISMISSAL_PREF_SET",
				X = Object(p.a)(B),
				Z = Object(p.a)(W),
				$ = Object(p.a)(H),
				ee = Object(p.a)(q),
				te = Object(p.a)(Y),
				ne = Object(p.a)(Q),
				se = Object(p.a)(J),
				re = (Object(p.a)(K), Object(p.a)(V)),
				oe = Object(p.a)(F),
				ie = (Object(p.a)(z), "PREFERENCES__COLLAPSED_TRAY_TOGGLED"),
				ce = (Object(p.a)(ie), e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = r(),
						i = await Object(y.a)(Object(O.a)(o, [I.a]), {
							data: {
								lang: e.replace("-", "_")
							},
							endpoint: "".concat(o.apiUrl, "/api/v1/me/prefs"),
							method: m.db.PATCH,
							type: "json"
						});
					if (i.ok) {
						const e = i.body.lang;
						t(X(e))
					}
				}),
				ae = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(Z({
						layout: e
					})), t(Object(E.o)())
				}, de = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s(),
						c = Object(G.bb)(i),
						{
							hasSeenCustomizeFlyout: a
						} = i.user.prefs;
					a || n(ee()), t && c ? (n($({
						subredditId: t,
						layout: e
					})), n(Ge(t, {
						layout: e
					}, !1)), a || n(Ee({
						hasSeenCustomizeFlyout: !0
					}, !1))) : (n(ae(e)), n(Ee(a ? {
						layout: e
					} : {
						layout: e,
						hasSeenCustomizeFlyout: !0
					}, !1)))
				}, ue = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					n().user.account && await Object(S.d)(e, r())
				}, le = e => async (t, n, c) => {
					let {
						apiContext: d
					} = c;
					const u = n();
					if (Object(U.j)(u)) t(Object(v.e)({
						kind: L.b.Error,
						text: i.fbt._("In order to continue styling your community, Night Mode must be turned off.", null, {
							hk: "1yZidT"
						})
					}));
					else {
						if (u.user.account) await Object(S.e)(e, d());
						else {
							const t = a.a.get(h.j);
							if (t) {
								const n = JSON.parse(Object(r.atob)(t));
								n.prefs.nightmode = e, Object(s.b)(h.j, btoa(JSON.stringify(n)), {
									domain: o.a.cookieDomain
								})
							}
						}
						t(oe({
							nightmode: e
						})), t(Object(g.f)(e)), a.a.remove(h.d, {
							domain: o.a.cookieDomain
						})
					}
				}, be = () => async (e, t, n) => {
					let {
						apiContext: c
					} = n;
					const d = t(),
						u = d.user.prefs.topContentTimesDismissed + 1,
						l = Date.now();
					if (d.user.account) e(Ee({
						topContentDismissalTime: l,
						topContentTimesDismissed: u
					}, !1));
					else {
						const e = a.a.get(h.j);
						if (e) {
							const t = JSON.parse(Object(r.atob)(e));
							t.prefs[P.d] = l, t.prefs[P.e] = u, Object(s.b)(h.j, btoa(JSON.stringify(t)), {
								domain: o.a.cookieDomain
							})
						}
					}
					e(se({
						topContentDismissalTime: l,
						topContentTimesDismissed: u
					})), e(Object(v.e)({
						kind: L.b.SuccessCommunity,
						text: i.fbt._("Got it! We will show you less of this", null, {
							hk: "4op5Wa"
						})
					}))
				}, _e = e => async (t, n, c) => {
					let {
						apiContext: d
					} = c;
					const u = -1 === [j.R, "r/popular"].indexOf(e),
						l = Date.now(),
						b = n(),
						_ = i.fbt._("Got it! We will show you less of this", null, {
							hk: "4op5Wa"
						});
					if (b.user.account)
						if (u) {
							const n = e.replace(/^r\//, ""),
								s = Object(M.G)(b, n);
							t(Ge(s, {
								rpanDuDismissalTime: l
							}, !1))
						} else t(Ee({
							rpanDuDismissalTime: l
						}, !1));
					else {
						const e = a.a.get(h.j);
						if (e) {
							const t = JSON.parse(Object(r.atob)(e));
							t.prefs[P.b] = l, Object(s.b)(h.j, btoa(JSON.stringify(t)), {
								domain: o.a.cookieDomain
							})
						}
					}
					t(Object(v.e)({
						kind: L.b.SuccessCommunity,
						text: _
					})), t(ne(l))
				}, fe = "SETTINGS__ACCOUNT_PREFS_UPDATE_SUCCESS", me = "SETTINGS__SUBREDDIT_PREFS_UPDATED", pe = Object(p.a)("SETTINGS__UPDATE_PENDING"), Oe = Object(p.a)("SETTINGS__UPDATE_FAILURE"), ge = Object(p.a)(fe), je = Object(p.a)(me), Ee = function(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
					return async (s, r, o) => {
						let {
							apiContext: c
						} = o;
						s(pe());
						const a = b()(e, P.a),
							d = f()(e, P.a),
							l = [];
						u()(a) || l.push(Object(S.g)(a, c())), u()(d) || l.push(Object(S.b)(d, c())), (await Promise.all(l)).every(e => e.ok) ? (s(ge({
							preferences: e
						})), t && s(Object(v.e)({
							kind: L.b.SuccessCommunity,
							text: n || i.fbt._("Changes saved", null, {
								hk: "2isjrZ"
							})
						}))) : (s(Oe()), t && s(Object(v.e)({
							kind: L.b.Error,
							text: i.fbt._("Changes failed to save", null, {
								hk: "XrtIq"
							})
						})))
					}
				}, he = "SETTINGS__SUCCESS", Ie = Object(p.a)("SETTINGS__PENDING"), Se = Object(p.a)("SETTINGS__FAILURE"), Te = Object(p.a)(he), ye = "SETTINGS__PROFILE_IMAGE_UPDATE_SUCCESS", Ae = Object(p.a)(ye), De = "SETTINGS__PROFILE_IMAGE_DELETE_SUCCESS", ve = Object(p.a)(De), Pe = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(Ie());
					const i = await ((e, t) => Object(y.a)(e, {
						endpoint: Object(A.a)("".concat(o.a.gatewayUrl, "/desktopapi/v1/prefs")),
						method: m.db.GET,
						data: {
							timestamp: t ? Date.now() : void 0
						}
					}))(r(), e);
					i.ok ? t(Te(i.body)) : t(Se())
				}, Re = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					if (n().user.account) await Object(S.a)(e, o());
					else {
						const e = a.a.get(h.e);
						if (e) {
							const t = JSON.parse(decodeURIComponent(e));
							t.pref_quarantine_optin = !0, Object(s.b)(h.e, JSON.stringify(encodeURIComponent(t)), m.y)
						} else {
							const e = JSON.stringify({
								pref_quarantine_optin: !0
							});
							Object(s.b)(h.e, e, m.y)
						}
					}
				}, Ce = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					n().user.account && await Object(S.c)(e, r()), t(re({
						autoplayVideo: e
					}))
				}, we = (e, t) => async (n, s, r) => {
					await ke(e, t)(n, s, r)
				}, ke = (e, t) => async (n, s, r) => {
					const {
						apiContext: o
					} = r, c = Object(G.i)(s());
					if (!c || !c.profileId) return;
					n(Object(D.k)(e));
					const a = Object(x.e)(c),
						d = m.Ub + a,
						u = await Object(T.d)(o(), d, e.file.name, t, await Object(C.g)(e.file));
					if (u.ok) {
						let _;
						try {
							if (!(_ = await Object(D.g)(s(), u, e, k.a.Profiles))) return void n(Object(v.e)({
								kind: L.b.Error,
								text: i.fbt._("Changes failed to save", null, {
									hk: "3QlXrl"
								})
							}));
							n(Object(D.j)(_))
						} catch (l) {
							return void n(Object(D.i)(l))
						}
						let f = null,
							m = null;
						try {
							(f = await Object(D.f)(s(), k.a.Profiles)) && (m = Object(D.m)(f)(n, s, r))
						} catch (b) {
							return void n(Object(v.e)({
								kind: L.b.Error,
								text: i.fbt._("Changes failed to save", null, {
									hk: "3QlXrl"
								})
							}))
						}
						const p = decodeURIComponent(_.url);
						if (n(Ae({
								imageUrl: p,
								key: t,
								subredditId: c.profileId,
								username: a
							})), (await Object(T.e)(o(), d, {
								[t]: p
							})).ok) {
							if (m) try {
								await m
							} catch (b) {}
							n(Object(v.e)({
								kind: L.b.SuccessCommunity,
								text: i.fbt._("Changes saved", null, {
									hk: "xEVHp"
								})
							})), Object(w.g)(s(), t);
							const r = Object(N.a)(s(), e);
							n(Ae({
								imageUrl: r ? r.url : _.url,
								key: t,
								subredditId: c.profileId,
								username: a
							}))
						} else n(Object(v.e)({
							kind: L.b.Error,
							text: i.fbt._("Changes failed to save", null, {
								hk: "1y1wAY"
							})
						}))
					} else {
						const e = "profileBanner" === t ? "1280x384" : "256x256";
						n(Object(v.e)({
							kind: L.b.Error,
							text: i.fbt._("There was an error uploading your image. Please verify that the size of your image is {maxImageSize} and less than 500KB.", [i.fbt._param("maxImageSize", e)], {
								hk: "I6lfz"
							})
						}))
					}
				}, Le = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = Object(G.i)(n());
					if (!o || !o.profileId) return;
					const c = Object(x.e)(o),
						a = m.Ub + c,
						d = {
							profileIcon: "icon",
							profileBanner: "banner"
						} [e],
						u = await Object(R.b)(r(), a, d);
					if (u.ok) {
						const s = u.body[d + "_img"];
						t(ve({
							imageUrl: s,
							key: e,
							subredditId: o.profileId,
							username: c
						})), t(Object(v.e)({
							kind: L.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "xEVHp"
							})
						})), Object(w.f)(n(), e)
					} else t(Object(v.e)({
						kind: L.b.Error,
						text: i.fbt._("Changes failed to save", null, {
							hk: "1y1wAY"
						})
					}))
				}, xe = "SETTINGS__PROFILE_SETTINGS_UPDATE_SUCCESS", Ne = Object(p.a)(xe), Ue = Object(p.a)("SETTINGS__PROFILE_SETTINGS_UPDATE_FAILED"), Me = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const c = Object(G.i)(s());
					if (!c || !c.profileId) return !1;
					const a = [],
						d = s().subreddits.settings[c.profileId],
						u = Object.assign(Object.assign({}, d), e);
					a.push(Object(R.f)(o(), c.profileId, u));
					const {
						showActiveCommunities: l,
						prevShowActiveCommunities: b
					} = t;
					return l !== b && a.push(Object(S.g)({
						showActiveCommunities: l
					}, o())), (await Promise.all(a)).every(e => e.ok) ? (n(Ne({
						settings: e,
						additional: t,
						subredditId: c.profileId
					})), Object(w.i)(s()), n(Object(v.e)({
						kind: L.b.SuccessCommunity,
						text: i.fbt._("Changes saved", null, {
							hk: "xEVHp"
						})
					})), !0) : (n(Ue()), n(Object(v.e)({
						kind: L.b.Error,
						text: i.fbt._("Changes failed to save", null, {
							hk: "1y1wAY"
						})
					})), !1)
				}, Ge = function(e, t) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (s, r, o) => {
						let {
							apiContext: c
						} = o;
						const a = r().user.prefs.subreddit[e];
						s(je({
							subredditId: e,
							prefs: t
						})), (await Object(S.h)(e, t, c())).ok ? n && s(Object(v.e)({
							kind: L.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "xEVHp"
							})
						})) : (a && s(je({
							subredditId: e,
							prefs: a
						})), n && s(Object(v.e)({
							kind: L.b.Error,
							text: i.fbt._("Changes failed to save", null, {
								hk: "1y1wAY"
							})
						})))
					}
				}, Ve = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s();
					Object(M.T)(i, {
						subredditId: e
					}) && i.user.prefs.rememberCommunitySort && n(Ge(e, {
						sort: t
					}, !1))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "E", (function() {
				return r
			})), n.d(t, "X", (function() {
				return o
			})), n.d(t, "W", (function() {
				return i
			})), n.d(t, "P", (function() {
				return c
			})), n.d(t, "w", (function() {
				return a
			})), n.d(t, "x", (function() {
				return d
			})), n.d(t, "G", (function() {
				return u
			})), n.d(t, "I", (function() {
				return l
			})), n.d(t, "H", (function() {
				return b
			})), n.d(t, "t", (function() {
				return _
			})), n.d(t, "u", (function() {
				return f
			})), n.d(t, "y", (function() {
				return m
			})), n.d(t, "N", (function() {
				return p
			})), n.d(t, "M", (function() {
				return O
			})), n.d(t, "O", (function() {
				return g
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "L", (function() {
				return E
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "F", (function() {
				return I
			})), n.d(t, "v", (function() {
				return S
			})), n.d(t, "J", (function() {
				return T
			})), n.d(t, "K", (function() {
				return y
			})), n.d(t, "D", (function() {
				return A
			})), n.d(t, "B", (function() {
				return D
			})), n.d(t, "V", (function() {
				return v
			})), n.d(t, "C", (function() {
				return P
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "A", (function() {
				return w
			})), n.d(t, "T", (function() {
				return k
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "j", (function() {
				return V
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "k", (function() {
				return W
			})), n.d(t, "p", (function() {
				return H
			})), n.d(t, "q", (function() {
				return q
			})), n.d(t, "Y", (function() {
				return Y
			})), n.d(t, "a", (function() {
				return K
			})), n.d(t, "R", (function() {
				return z
			})), n.d(t, "i", (function() {
				return Q
			})), n.d(t, "o", (function() {
				return J
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "Q", (function() {
				return Z
			})), n.d(t, "S", (function() {
				return $
			})), n.d(t, "U", (function() {
				return ee
			}));
			var s = n("./src/config.ts");
			const r = "RPAN__REMOVE_STREAM_FROM_HISTORY",
				o = "RPAN__VISIT_STREAM",
				i = -1,
				c = "RPAN__RESET_HISTORY",
				a = "RPAN__RECEIVE_GLOBAL_CONFIG",
				d = "RPAN__RECEIVE_SUBREDDIT_CONFIG",
				u = "RPAN__REQUEST_CONFIG",
				l = "RPAN__REQUEST_CONFIG_FAILED",
				b = "RPAN__REQUEST_CONFIG_CANCELED",
				_ = "RPAN__RECEIVE_HLS_STREAM_ENDED",
				f = "RPAN__RECEIVE_HLS_STREAM_REMOVED",
				m = "RPAN__RECEIVE_STREAM_MODEL",
				p = "RPAN__REQUEST_STREAM_MODEL",
				O = "RPAN__REQUEST_STREAM_FAILED",
				g = "RPAN__REQUEST_STREAM_MODEL_BATCH",
				j = "RPAN__RECEIVE_STREAM_MODEL_BATCH",
				E = "RPAN__REQUEST_STREAM_BATCH_FAILED",
				h = "RPAN__RECEIVE_AUTO_MUTE_LEVEL",
				I = "RPAN__REQUEST_AUTO_MUTE_LEVEL",
				S = "RPAN__RECEIVE_RECOMMENDED_VIEWER_SUBREDDITS",
				T = "RPAN__REQUEST_RECOMMENDED_VIEWER_SUBREDDITS",
				y = "RPAN__REQUEST_RECOMMENDED_VIEWER_SUBREDDITS_FAILED",
				A = "RPAN__RECEIVE_VOTE",
				D = "RPAN__RECEIVE_THEATER_SETTINGS",
				v = "RPAN__UPDATE_VIDEO_TIMESTAMP",
				P = "RPAN__RECEIVE_USER_SETTINGS",
				R = "RPAN__BATCH_OP",
				C = "RPAN__RECEIVE_DISCOVERY_UNIT_THUMBNAILS",
				w = "RPAN__RECEIVE_STREAM_PREVIEWS",
				k = "RPAN__SEND_HEARTBEAT",
				L = 0,
				x = 9999,
				N = 30,
				U = 6,
				M = 5,
				G = 15,
				V = 5,
				F = 57,
				B = 60,
				W = 7e3,
				H = 1e3,
				q = 400,
				Y = 1e3,
				K = 3e4,
				z = ("".concat(s.a.assetPath, "/img/trending-placeholder.png"), "home"),
				Q = 3,
				J = 500,
				X = 2e3,
				Z = "".concat(s.a.redditUrl, "/r/").concat("pan"),
				$ = "https://www.redditinc.com/policies/broadcasting-content-policy",
				ee = ("".concat(s.a.assetPath, "/img/rpan-broadcast-over.png"), "".concat(s.a.assetPath, "/img/rpan-broadcast-over-thumbnail.png"))
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/shortcuts.ts"),
				r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = n("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						s = Object(r.a)(e);
					return Object(o.b)(n, e, s)
				},
				c = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				a = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						s = window.scrollY;
					t && (t.focus(), window.scrollTo(n, s))
				},
				d = () => {
					a(s.b)
				}
		},
		"./src/reddit/actions/structuredStyles/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return s
			})), n.d(t, "k", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			}));
			const s = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
				r = "STRUCTURED_STYLES__STYLES_RESET_LOADED",
				o = "STRUCTURED_STYLES__STYLES_RESET_FAILED",
				i = "SUBREDDIT__STYLES_PENDING",
				c = "SUBREDDIT__STYLES_LOADED",
				a = "SUBREDDIT__STYLES_FAILED",
				d = "STRUCTURED_STYLES__DRAFT_REPLACED",
				u = "STRUCTURED_STYLES__DRAFT_UPDATED",
				l = "STRUCTURED_STYLES__EDITING_STOPPED",
				b = "STRUCTURED_STYLES__EDITING_STARTED",
				_ = "STRUCTURED_STYLES__IMAGE_UPLOAD_ADDED",
				f = "STRUCTURED_STYLES__DIRTIED_BLADE_EDITOR",
				m = "STRUCTURED_STYLES__UNDIRTIED_BLADE_EDITOR",
				p = "STRUCTURED_STYLES__STYLES_UPDATED_LOADED"
		},
		"./src/reddit/actions/structuredStyles/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return M
			})), n.d(t, "k", (function() {
				return F
			})), n.d(t, "j", (function() {
				return q
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "g", (function() {
				return X
			})), n.d(t, "c", (function() {
				return $
			})), n.d(t, "f", (function() {
				return te
			})), n.d(t, "b", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return se
			})), n.d(t, "a", (function() {
				return re
			})), n.d(t, "h", (function() {
				return oe
			})), n.d(t, "i", (function() {
				return ie
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/omit.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/pick.js"),
				i = n.n(o),
				c = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/filterQueryParams/index.ts"),
				d = n("./src/lib/formatApiError/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/apiRequestState.ts"),
				b = n("./src/reddit/actions/imageUploads.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				m = e => Object.assign(Object.assign(Object.assign(Object.assign({}, e.postBackgroundColor && {
					postBackgroundColor: e.postBackgroundColor
				}), e.postBackgroundImage && {
					postBackgroundImage: e.postBackgroundImage
				}), e.postPlaceholderImage && {
					postPlaceholderImage: e.postPlaceholderImage
				}), e.postTitleColor && {
					postTitleColor: e.postTitleColor
				}),
				p = n("./src/reddit/selectors/postFlair.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const j = Object(u.a)(g.c),
				E = Object(u.a)(g.b),
				h = Object(u.a)(g.a);
			var I = n("./src/reddit/actions/toaster.ts"),
				S = n("./src/reddit/actions/widgets/index.ts"),
				T = n("./src/reddit/constants/modals.ts"),
				y = n("./src/reddit/helpers/getGenericUploadError.ts"),
				A = n("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				D = n("./src/reddit/helpers/media/index.ts"),
				v = n("./src/reddit/models/Image/index.tsx"),
				P = n("./src/reddit/models/StructuredStyles/index.ts"),
				R = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/activeModalId.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				k = n("./src/reddit/selectors/structuredStyles.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/helpers/trackers/blade.ts"),
				N = n("./src/telemetry/index.ts"),
				U = n("./src/reddit/actions/structuredStyles/constants.ts");
			const M = Object(u.a)(U.m),
				G = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				V = e => {
					const t = Object.assign({}, e);
					return Object.keys(e).forEach(n => {
						G[n] && !e[n] && G[n].forEach(e => t[e] = null)
					}), t
				},
				F = (e, t, n, s) => async (r, o, i) => {
					const {
						apiContext: c
					} = i, a = o(), u = V(t), _ = a.structuredStyles.models[e];
					let m;
					for (const e in u)
						if (u[e] !== _[e]) {
							m = !0;
							break
						} if (!m) return;
					r(Object(l.h)(s));
					const p = Object(x.i)(n)(a);
					let g = null,
						j = null;
					try {
						(g = await Object(b.f)(o(), v.a.StructuredStyles)) && (j = Object(b.m)(g)(r, o, i))
					} catch (T) {
						const e = Object(y.a)("webSocket");
						return void r(Object(l.f)(s, e))
					}
					const E = Object(O.T)(a, {
							subredditId: e
						}).name,
						h = await f.e(c(), E, u),
						S = {};
					if (h.ok) {
						if (j) try {
							await j
						} catch (T) {}
						const n = Object(k.g)(o(), {
							apiRequestId: s
						});
						for (const e in n)
							if (e in t) {
								const t = Object(k.h)(o(), {
									name: e
								});
								t && Object(v.j)(t) && (S[e] = n[e])
							} Object.keys(S).length && r(z(S)), r(Object(l.e)(s)), r(M({
							subredditId: e,
							styles: Object.assign(Object.assign({}, u), S)
						}))
					} else g && g.websocket.close(), r(Object(l.f)(s, h.error)), h.body && r(I.e({
						kind: R.b.Error,
						text: Object(d.a)(h.error, h.status)
					}));
					Object(N.a)(Object.assign(Object.assign({}, p), {
						actionInfo: Object.assign(Object.assign({}, p.actionInfo), {
							success: h.ok
						})
					}))
				}, B = Object(u.a)(U.l), W = Object(u.a)(U.k), H = Object(u.a)(U.j), q = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(B({
						subredditId: e
					}));
					const o = Object(O.T)(n(), {
							subredditId: e
						}).name,
						i = await f.f(r(), o);
					if (i.ok) {
						const s = n().structuredStyles.models[e],
							r = s ? s.mobileKeyColor : null;
						t(W({
							subredditId: e,
							styles: {
								mobileKeyColor: r
							}
						}))
					} else t(H(Object.assign({
						subredditId: e
					}, i.error)))
				}, Y = Object(u.a)(U.d), K = e => async (t, n, s) => {
					const r = n(),
						o = r.structuredStyles.models[e] || {},
						i = Object(L.T)(r);
					t(Y({
						isNightmodeOn: i,
						styles: o,
						subredditId: e
					})), ue(e, !1)(t, n, s), (e => async (t, n, s) => {
						let {
							gqlContext: r
						} = s;
						const o = n(),
							i = Object(O.T)(o, {
								subredditId: e
							});
						if (!i) return;
						const c = Object(p.d)(o, {
								subredditId: e
							}),
							a = c && c.templateIds;
						if (!a || !a.length) return;
						t(j({
							subredditId: e
						}));
						const d = await Object(f.a)(r(), i.name, a);
						if (d.ok) {
							const n = {};
							if (d.body) {
								const {
									data: e
								} = d.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) n[t.id] = m(t)
							}
							t(E({
								subredditId: e,
								templates: n
							}))
						} else t(h({
							subredditId: e,
							error: d.error
						}))
					})(e)(t, n, s), Object(S.g)(e, !1)(t, n, s)
				}, z = Object(u.a)(U.c), Q = e => async (t, n, s) => {
					const r = V(e),
						o = n();
					for (const e in r)
						if (Object(P.l)(e))
							if (r[e]) {
								if ("string" != typeof r[e]) {
									const o = r[e],
										i = await Object(v.e)(o);
									X(e, i)(t, n, s), r[e] = ""
								}
							} else {
								const n = Object(k.h)(o, {
									name: e
								});
								n && t(Object(b.h)(n))
							} t(z(r))
				}, J = Object(u.a)(U.f), X = (e, t, n) => async (s, r, o) => {
					const i = r(),
						c = n || i.structuredStyles.isEditing,
						a = Object(O.T)(i, {
							subredditId: c
						}).name;
					s(J({
						imageKey: e,
						uploadId: t.id
					})), s(Object(b.k)(t));
					const d = await f.d(o.apiContext(), a, t.file.name, e, await Object(D.g)(t.file));
					try {
						const n = await Object(b.g)(r(), d, t, v.a.StructuredStyles);
						if (n) {
							const t = n.url;
							s(Object(b.j)(n)), s(z({
								[e]: t
							}))
						}
					} catch (u) {
						if (u instanceof Error) throw u;
						s(Object(b.i)(u))
					}
				}, Z = Object(u.a)(U.b), $ = (e, t, n) => async (s, o, c) => {
					const a = o(),
						d = a.structuredStyles.models[e] || {},
						u = a.structuredStyles.draft,
						l = Object(x.h)(t)(a);
					if (n) {
						const t = i()(d, n),
							o = r()(u, n),
							c = Object.assign(Object.assign({}, o), t);
						s(Z({
							subredditId: e,
							styles: c
						}))
					} else {
						s(Z({
							subredditId: e,
							styles: d
						}))
					}
					Object(N.a)(l)
				}, ee = Object(u.a)(U.e), te = () => async (e, t, n) => {
					const s = t(),
						r = Object(L.U)(s),
						o = !!Object(w.a)(s);
					if (e(ee({
							nightmodeTempUpdated: r
						})), o) return;
					const {
						url: i
					} = s.platform.currentPage;
					i && e(Object(c.c)(Object(a.a)(i, ["styling", "route"])))
				}, ne = Object(u.a)(U.a), se = Object(u.a)(U.n), re = () => async e => e(te()), oe = e => async (t, n) => {
					const s = n(),
						r = Object(k.j)(s);
					!Object(C.b)(T.a.BLADE_UNSAVED_CHANGES)(s) && r && (Object(k.a)(s, {
						subredditId: e
					}) ? t(Object(_.i)(T.a.BLADE_UNSAVED_CHANGES)) : t(re()))
				}, ie = e => async (t, n) => {
					const s = n();
					Object(k.j)(s) || t(Object(L.T)(s) ? Object(_.i)(T.a.BLADE_NIGHTMODE) : K(e))
				}, ce = Object(u.a)(U.i), ae = Object(u.a)(U.h), de = Object(u.a)(U.g), ue = (e, t) => async (n, s, r) => {
					let {
						gqlContext: o,
						apiContext: i
					} = r;
					n(ce({
						subredditId: e
					}));
					const c = Object(O.T)(s(), {
						subredditId: e
					});
					if (!c) return;
					if (!t) {
						const s = await f.c(i(), c.name, t);
						if (s.ok) {
							const t = s.body,
								r = t.data ? t.data.style : {};
							n(ae({
								subredditId: e,
								styles: r
							}))
						} else n(de(Object.assign({
							subredditId: e
						}, s.error)));
						return
					}
					const a = await f.b(o(), c.name);
					if (a.ok) {
						let t = {};
						if (a.body) {
							const {
								data: e
							} = a.body;
							e && e.subreddit && e.subreddit.styles && (t = Object(A.a)(e.subreddit.styles))
						}
						n(ae({
							subredditId: e,
							styles: t
						}))
					} else n(de(Object.assign({
						subredditId: e
					}, a.error)))
				}
		},
		"./src/reddit/actions/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return _
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "TOOLTIP__DROPDOWN_TOGGLED",
				o = "TOOLTIP__DROPDOWN_SET",
				i = "TOOLTIP__DROPDOWN_UNSET",
				c = "TOOLTIP__DROPDOWN_SET_IF_NONE",
				a = "TOOLTIP__DROPDOWN_UNSET_IF_ACTIVE",
				d = Object(s.a)(o),
				u = Object(s.a)(r),
				l = Object(s.a)(i),
				b = Object(s.a)(c),
				_ = Object(s.a)(a)
		},
		"./src/reddit/actions/unload/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = new Set,
				r = [],
				o = "AD_UNLOAD",
				i = 6e5
		},
		"./src/reddit/actions/users.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return W
			})), n.d(t, "q", (function() {
				return H
			})), n.d(t, "g", (function() {
				return q
			})), n.d(t, "f", (function() {
				return Y
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "k", (function() {
				return z
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "y", (function() {
				return $
			})), n.d(t, "c", (function() {
				return ee
			})), n.d(t, "r", (function() {
				return ne
			})), n.d(t, "p", (function() {
				return se
			})), n.d(t, "x", (function() {
				return re
			})), n.d(t, "s", (function() {
				return oe
			})), n.d(t, "a", (function() {
				return ie
			})), n.d(t, "o", (function() {
				return ae
			})), n.d(t, "u", (function() {
				return de
			})), n.d(t, "m", (function() {
				return ue
			})), n.d(t, "n", (function() {
				return le
			})), n.d(t, "l", (function() {
				return be
			})), n.d(t, "t", (function() {
				return Oe
			})), n.d(t, "v", (function() {
				return ge
			})), n.d(t, "i", (function() {
				return je
			})), n.d(t, "j", (function() {
				return Ee
			})), n.d(t, "h", (function() {
				return he
			})), n.d(t, "w", (function() {
				return ye
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				b = n("./src/reddit/endpoints/user/index.ts"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				m = n("./src/reddit/constants/headers.ts"),
				p = n("./src/config.ts"),
				O = e => Object(_.a)(e, {
					endpoint: "".concat(p.a.gatewayUrl, "/desktopapi/v1/me"),
					method: r.db.GET,
					data: {
						api_type: "json",
						gilding_detail: 1,
						awarded_detail: 1
					}
				}),
				g = n("./src/reddit/helpers/getErrorMsgFromR2JQueryResponse.ts"),
				j = (n("./node_modules/core-js/modules/es7.promise.finally.js"), n("./node_modules/promise-retry/index.js")),
				E = n.n(j),
				h = n("./src/lib/makeRequest/index.ts");
			var I = n("./src/reddit/constants/history.ts"),
				S = n("./src/reddit/endpoints/session/index.ts"),
				T = n("./node_modules/js-cookie/src/js.cookie.js"),
				y = n.n(T),
				A = n("./src/lib/constants/cookie.ts");
			const D = e => {
				y.a.remove(e, {
					domain: p.a.cookieDomain
				})
			};
			var v = n("./src/reddit/helpers/history/index.ts");
			const P = 2 * r.eb;
			var R = e => Date.now() + P < new Date(e.expires).getTime(),
				C = n("./src/reddit/helpers/localStorage/index.ts"),
				w = async (e, t, n) => {
					let s = t.accessToken;
					await E()(async (o, i) => {
						if (!R(t) || !s) {
							const r = await Object(S.b)(e, t, n);
							if (r.ok) {
								const e = r.body;
								s = e.accessToken
							} else if (1 === i) return o()
						}
						const c = await Object(_.a)(e, {
							endpoint: "/logoutproxy",
							method: r.db.POST,
							data: {
								access_token: s
							}
						});
						if (await async function(e, t) {
								return await Object(h.b)({
									method: r.db.POST,
									endpoint: "/timings/logoutrequest",
									data: {
										appName: e.statsAppName,
										successful: t
									},
									type: "json"
								})
							}(e, c && c.ok), !c.ok) return o()
					}, {
						retries: 1
					}).catch(() => {}).finally(() => {
						[A.d, A.e, A.h, A.i].forEach(D), Object(C.I)(null), Object(v.a)(I.a.JustLoggedOut, !0), window.location.reload()
					})
				}, k = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"), L = n("./src/reddit/helpers/trackers/emailCollection.ts"), x = n("./src/reddit/helpers/trackers/emailVerification.ts"), N = n("./src/reddit/models/Toast/index.ts"), U = n("./src/reddit/selectors/activeModalId.ts"), M = n("./src/reddit/selectors/emailCollection.ts"), G = n("./src/reddit/selectors/notificationBanner.ts"), V = n("./src/reddit/selectors/user.ts"), F = n("./src/telemetry/index.ts"), B = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const W = "USER__LOID_RECEIVED",
				H = Object(o.a)(W),
				q = "USER__REQUEST_PENDING",
				Y = "USER__REQUEST_LOADED",
				K = "USER__REQUEST_FAILED",
				z = "USER__SESSION_TRACKER_RECEIVED",
				Q = "USER__REDDAID_RECEIVED",
				J = Object(o.a)(q),
				X = Object(o.a)(Y),
				Z = Object(o.a)(K),
				$ = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					if (n().users.models[e.toLowerCase()] || e === r.A) return;
					t(J({
						username: e
					}));
					const i = await Object(b.b)(o(), e);
					if (i.ok) {
						const n = {
							data: i.body
						};
						n.username = e, t(X(n))
					} else {
						const n = i.error;
						n.username = e, t(Z(n))
					}
				}, ee = "USER__MYSELF_LOADED", te = Object(o.a)(ee);

			function ne() {
				let {
					forceFetch: e
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const o = n();
					if (o.user.account && !e || !o.user.session || o.user.session.unsafeLoggedOut) return;
					const i = await O(r());
					i.ok && t(te(i.body))
				}
			}
			const se = () => async (e, t, n) => {
				let {
					apiContext: s
				} = n;
				const r = t().user.session;
				Object(k.a)(), r && w(s(), r)
			}, re = Object(o.a)(z), oe = Object(o.a)(Q), ie = "USER__LAYOUT_SWITCH_VIEWED", ce = Object(o.a)(ie), ae = () => async (e, t, n) => {
				let {
					apiContext: s
				} = n;
				const r = t();
				r.user.account && !r.user.account.seenLayoutSwitch && (e(ce()), Object(b.d)(s()))
			}, de = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				const i = await ((e, t) => Object(_.a)(Object(f.a)(e, [m.a]), {
						method: r.db.POST,
						endpoint: "".concat(e.apiUrl, "/api/deactivate_user"),
						data: {
							user: t.username,
							passwd: t.password,
							confirm: t.checkbox,
							deactivate_message: t.feedback
						}
					}))(o(), e),
					c = n().user.session;
				i.ok && i.body && i.body.success ? c && w(o(), c) : t(Object(d.e)({
					kind: N.b.Error,
					text: "Something went wrong deactivating your account. Try again later."
				}))
			}, ue = "USER__UPDATE_EMAIL_PENDING", le = "USER__UPDATE_EMAIL_SUCCESS", be = "USER__UPDATE_EMAIL_FAILURE", _e = Object(o.a)(ue), fe = Object(o.a)(le), me = Object(o.a)(be), pe = (e, t) => {
				t.isEmailVerificationTooltipShowing && e(Object(i.b)())
			}, Oe = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				const i = B(e, []);
				if (Object(V.E)(n(), "changeEmail")) return;
				t(_e());
				const c = await ((e, t) => {
						let {
							newEmail: n,
							password: s
						} = t;
						return Object(_.a)(Object(f.a)(e, [m.a]), {
							method: r.db.POST,
							endpoint: "".concat(e.apiUrl, "/api/update_email"),
							data: Object.assign(Object.assign({}, s && {
								curpass: s
							}), {
								email: n
							})
						})
					})(o(), i),
					d = n();
				if (c.ok && c.body && c.body.success) {
					Object(G.a)(u.a.EmailCollectionBannerId)(d) && t(Object(a.c)(u.a.EmailCollectionBannerId)), Object(M.a)(d) && Object(F.a)(Object(L.c)(d));
					const e = Object(V.G)(d);
					e || await t(ge()), t(fe(i.newEmail)), e && t(Se()), pe(t, d)
				} else {
					const e = Object(g.b)(c, "Something went wrong updating your email. Try again later.");
					t(me(e))
				}
			}, ge = e => async (t, n, o) => {
				let {
					apiContext: i
				} = o;
				const a = await ((e, t) => Object(_.a)(Object(f.a)(e, [m.a]), Object.assign({
						method: r.db.GET,
						endpoint: "".concat(e.apiUrl, "/api/send_verification_email")
					}, t.source && {
						data: t
					})))(i(), {
						source: e
					}),
					u = n();
				if (a.ok && a.body && a.body.success) {
					e && (Object(F.a)(Object(x.f)(e)(u)), pe(t, u));
					const n = Object(U.a)(u),
						s = n === l.g || n === l.o ? l.o : l.c;
					t(Object(c.i)(s))
				} else t(Object(d.e)({
					duration: d.a,
					kind: N.b.Error,
					text: s.fbt._("Something went wrong sending verification email. Try again later.", null, {
						hk: "2yTdAw"
					})
				}))
			}, je = "USER__SEND_RESET_EMAIL_PENDING", Ee = "USER__SEND_RESET_EMAIL_SUCCESS", he = "USER__SEND_RESET_EMAIL_FAILURE", Ie = Object(o.a)(je), Se = Object(o.a)(Ee), Te = Object(o.a)(he), ye = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				if (Object(V.E)(n(), "sendResetEmail")) return;
				t(Ie());
				const i = await ((e, t) => Object(_.a)(Object(f.a)(e, [m.a]), {
					method: r.db.POST,
					endpoint: "".concat(e.apiUrl, "/api/password"),
					data: {
						email: t.curEmail,
						name: t.name
					}
				}))(o(), e);
				if (!i.ok || !i.body || !i.body.success) {
					const e = Object(g.b)(i, "Something went wrong sending the reset email. Please try again.");
					return t(Te()), void t(Object(d.e)({
						duration: d.a,
						kind: N.b.Error,
						text: e
					}))
				}
				t(Se())
			}
		},
		"./src/reddit/actions/video.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "L", (function() {
				return N
			})), n.d(t, "C", (function() {
				return U
			})), n.d(t, "M", (function() {
				return M
			})), n.d(t, "N", (function() {
				return G
			})), n.d(t, "z", (function() {
				return F
			})), n.d(t, "A", (function() {
				return W
			})), n.d(t, "E", (function() {
				return Y
			})), n.d(t, "J", (function() {
				return K
			})), n.d(t, "u", (function() {
				return z
			})), n.d(t, "K", (function() {
				return J
			})), n.d(t, "I", (function() {
				return $
			})), n.d(t, "G", (function() {
				return ee
			})), n.d(t, "r", (function() {
				return te
			})), n.d(t, "F", (function() {
				return ne
			})), n.d(t, "q", (function() {
				return se
			})), n.d(t, "B", (function() {
				return re
			})), n.d(t, "D", (function() {
				return oe
			})), n.d(t, "s", (function() {
				return ie
			})), n.d(t, "H", (function() {
				return ce
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/constants/adEvents.ts"),
				o = n("./src/reddit/constants/video.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/helpers/trackers/media.ts"),
				d = n("./src/reddit/helpers/trackers/postList.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				_ = (n("./src/reddit/selectors/video.ts"), n("./src/telemetry/index.ts"));
			const f = "VIDEO__CONSUMED",
				m = "VIDEO__SET_FULLSCREEN",
				p = "VIDEO__EXIT_FULLSCREEN",
				O = "VIDEO__LOADABLE",
				g = "VIDEO__LOADING",
				j = "VIDEO__PAUSED",
				E = "VIDEO__PLAYABLE",
				h = "VIDEO__METADATA_RECEIVED",
				I = "VIDEO__STARTED",
				S = "VIDEO__UNLOADABLE",
				T = "VIDEO__UNPAUSED",
				y = "VIDEO__TIME_UPDATED",
				A = "VIDEO__BUFFERING",
				D = "VIDEO__PLAYING",
				v = "VIDEO__CONTINUOUS_VIEW_STARTED_AT",
				P = "VIDEO__SET_MUTED_IN_FEED",
				R = (() => {
					let e = "";
					return (t, n, s, r) => async (o, c) => {
						if (null != t) {
							e !== t && (e = t, Object(i.d)(i.a.VideoView));
							const o = c(),
								d = r ? a.b(t, n, s) : a.a(t, n, s);
							Object(_.a)(Object.assign(Object.assign({}, b.defaults(o)), d(o)))
						}
					}
				})(),
				C = Object(s.a)(v),
				w = e => async (t, n) => {
					const s = n(),
						o = Object(l.O)(s, {
							postId: e
						});
					t(R(e, "is_viewable", "video", !1)), o.isSponsored && t(Object(c.t)(o, r.a.VideoViewableImpression))
				}, k = e => async (t, n) => {
					const s = n(),
						o = Object(l.O)(s, {
							postId: e
						});
					o.isSponsored && t(Object(c.t)(o, r.a.VideoGroupMViewable))
				}, L = e => async (t, n) => {
					const s = n(),
						o = Object(l.O)(s, {
							postId: e
						});
					o.isSponsored && t(Object(c.t)(o, r.a.VideoVendorFullyViewable50))
				}, x = e => async (t, n) => {
					const s = n(),
						o = Object(l.O)(s, {
							postId: e
						});
					t(R(e, "is_fully_viewable", "video", !1)), o.isSponsored && t(Object(c.t)(o, r.a.VideoFullyViewableImpression))
				}, N = e => async (t, n) => {
					const s = Object(l.O)(n(), {
						postId: e
					});
					t(R(e, "start", "video", !1)), s.isSponsored && t(Object(c.t)(s, r.a.VideoStarted))
				}, U = (e, t) => async (n, s) => {
					const o = Object(l.O)(s(), {
						postId: t
					});
					n(R(t, "play_with_sound", "video", !1)), n(R(t, "is_viewable", "video", !1)), n(R(t, "is_fully_viewable", "video", !1)), o.isSponsored && (n(Object(c.t)(o, r.a.VideoPlayedWithSound)), e && (n(Object(c.t)(o, r.a.VideoViewableImpression)), n(Object(c.t)(o, r.a.VideoFullyViewableImpression))))
				}, M = (e, t) => async (n, s) => {
					const i = Object(l.O)(s(), {
						postId: t
					});
					let a, d;
					switch (e) {
						case o.b:
							a = "watch_25_percent", d = r.a.VideoWatched25;
							break;
						case o.c:
							a = "watch_50_percent", d = r.a.VideoWatched50;
							break;
						case o.d:
							a = "watch_75_percent", d = r.a.VideoWatched75;
							break;
						case o.e:
							a = "watch_95_percent", d = r.a.VideoWatched95;
							break;
						default:
							a = "watch_100_percent", d = r.a.VideoWatched100
					}
					n(R(t, a, "video", !1)), i.isSponsored && n(Object(c.t)(i, d, a))
				}, G = (e, t) => async (n, s) => {
					const i = Object(l.O)(s(), {
						postId: t
					});
					let a, d;
					switch (e) {
						case o.g:
							a = "watch_3_seconds", d = r.a.VideoWatchedSeconds3;
							break;
						case o.h:
							a = "watch_5_seconds", d = r.a.VideoWatchedSeconds5;
							break;
						default:
							a = "watch_10_seconds", d = r.a.VideoWatchedSeconds10
					}
					n(R(t, a, "video", !1)), i.isSponsored && n(Object(c.t)(i, d, a))
				}, V = Object(s.a)(f), F = Object(s.a)(O), B = Object(s.a)(g), W = Object(s.a)(j), H = Object(s.a)(E), q = Object(s.a)(m), Y = Object(s.a)(h), K = Object(s.a)(y), z = Object(s.a)(p), Q = Object(s.a)(I), J = Object(s.a)(S), X = Object(s.a)(T), Z = Object(s.a)(A), $ = Object(s.a)(D), ee = e => async (t, n) => {
					const s = Object(l.O)(n(), {
						postId: e
					});
					t(q({
						postId: e
					})), ((e, t, n) => {
						n(R(t, "play_expanded", "video", !1)), n(R(t, "is_viewable", "video", !1)), n(R(t, "is_fully_viewable", "video", !1)), e.isSponsored && (n(Object(c.t)(e, r.a.VideoPlayedExpanded)), n(Object(c.t)(e, r.a.VideoViewableImpression)), n(Object(c.t)(e, r.a.VideoFullyViewableImpression)))
					})(s, e, t)
				}, te = (e, t) => async (n, s) => {
					const r = s();
					r.posts.video.autoPlayed[e] && Object(u.k)(r) && (d.d(r, e), void 0 !== t && n(Z({
						postId: e,
						isBuffering: t
					})))
				}, ne = e => async (t, n) => {
					const s = n();
					s.posts.video.autoPlayed[e] && Object(u.k)(s) && d.h(s, e)
				}, se = (e, t) => async (n, s) => {
					n(B({
						postId: e,
						time: t
					}));
					const r = s();
					Object(u.k)(r) && d.f(r, e)
				}, re = (e, t) => async (n, s) => {
					n(H({
						postId: e,
						time: t
					}));
					const r = s();
					Object(u.k)(r) && d.a(r, e)
				}, oe = e => async (t, n) => {
					const s = n(),
						r = s.posts.video.autoPlayed[e],
						o = s.posts.video.started[e];
					t(Q({
						postId: e
					})), t(X({
						postId: e
					})), !o && r && Object(u.k)(s) && d.c(s, e)
				}, ie = e => async (t, n) => {
					const s = n(),
						r = s.posts.video.autoPlayed[e],
						o = s.posts.video.consumed[e];
					t(V({
						postId: e
					})), r && Object(u.k)(s) && !o && d.b(s, e)
				}, ce = Object(s.a)(P)
		},
		"./src/reddit/actions/vote.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return U
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				c = n("./src/reddit/endpoints/user/index.ts"),
				a = n("./src/reddit/actions/gold/constants.ts");
			const d = Object(s.a)(a.x),
				u = Object(s.a)(a.y);
			var l = n("./src/reddit/actions/login.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/actions/post.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts"),
				m = n("./src/reddit/constants/adEvents.ts"),
				p = n("./src/reddit/constants/experiments.ts"),
				O = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				g = n("./src/lib/constants/index.ts"),
				j = n("./src/lib/makeApiRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				I = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var S = n("./src/reddit/helpers/isComment.ts"),
				T = n("./src/reddit/helpers/isPost.ts"),
				y = n("./src/reddit/helpers/trackers/gild.ts"),
				A = n("./src/reddit/models/Vote/index.ts"),
				D = n("./src/reddit/selectors/comments.ts"),
				v = n("./src/reddit/helpers/chooseVariant/index.ts"),
				P = n("./src/reddit/selectors/user.ts");
			var R = n("./src/reddit/selectors/gild.ts"),
				C = n("./src/reddit/selectors/moderatorPermissions.ts"),
				w = n("./src/reddit/selectors/modQueue.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/posts.ts");
			const x = "VOTE__VOTE_CAST",
				N = Object(s.a)(x),
				U = (e, t) => n => async (s, a, x) => {
					let {
						apiContext: U
					} = x;
					if (!Object(P.I)(a())) return s(Object(b.k)({
						actionSource: b.a.Vote
					})), void s(Object(l.i)());
					const M = e(n, a),
						G = A.b(M, t),
						V = Object(T.a)(n) ? M.postId : n;
					if (s(N({
							id: V,
							isInstance: !1,
							vote: t
						})), (a().posts.instances[V] || []).forEach(e => {
							s(N({
								id: e,
								isInstance: !0,
								vote: t
							}))
						}), G)
						if (Object(T.a)(n)) {
							const e = Object(L.O)(a(), {
									postId: n
								}),
								r = t > 0 ? m.a.Upvote : m.a.Downvote;
							s(Object(_.t)(e, r))
						} else if (Object(S.a)(n)) {
						const e = Object(D.n)(a(), {
							commentId: n
						});
						if (e) {
							const n = Object(L.O)(a(), {
									postId: e.postId
								}),
								r = t > 0 ? m.a.CommentUpvote : m.a.CommentDownvote;
							s(Object(_.t)(n, r))
						}
					}
					const F = a(),
						B = Object(k.i)(F),
						W = !!Object(R.f)(F),
						H = Object(P.cb)(F);
					if (W ? s((() => async (e, t, n) => {
							let {
								apiContext: s
							} = n;
							e(d()), e(Object(o.i)())
						})()) : Object(T.a)(V) && G === A.a.upvoted && !H && (e => {
							const t = Object(v.c)(e, {
								experimentEligibilitySelector: e => Object(P.I)(e),
								experimentName: p.wb
							});
							return Object(p.ad)(t) ? void 0 : t
						})(F) && (s(((e, t) => async (n, s, r) => {
							let {
								apiContext: a
							} = r;
							n(u(e)), n(Object(o.h)({
								tooltipId: Object(i.a)("View--GiveAward", e, t ? "lightbox" : void 0)
							})), Object(c.c)(a())
						})(V, B)), Object(r.a)(Object(y.viewGiveAwardTooltipEvent)(V)(F))), Object(P.I)(F)) {
						const e = await ((e, t, n) => Object(j.a)(Object(E.a)(e, [h.a]), {
							endpoint: Object(I.a)("".concat(e.apiUrl, "/api/vote")),
							method: g.db.POST,
							data: {
								id: t,
								dir: n,
								api_type: "json"
							}
						}))(U(), V, G);
						e.ok || s(N({
								id: V,
								isInstance: !1,
								vote: t
							})),
							function(e) {
								const {
									moderationPrompt: t
								} = e.body;
								if (!t) return;
								if (!Object(T.a)(n)) return;
								const r = Object(L.O)(F, {
									postId: n
								});
								if (Object(C.g)(F, {
										subredditId: r.belongsTo.id
									})) return;
								if (Object(w.b)(F)) return;
								if (Object(O.F)(F.platform && F.platform.currentPage)) return;
								if (r.isSponsored) return;
								if ("profile" === r.belongsTo.type) return;
								const o = F.experimentOverrides[p.ab],
									i = Object(k.i)(F);
								("none" !== t || o && G === A.a.downvoted) && (s(Object(_.J)({
									[n]: {
										moderationPrompt: o || t
									}
								})), s(Object(_.z)(Object(f.b)(n, i))))
							}(e)
					}
				}
		},
		"./src/reddit/actions/widgets/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "i", (function() {
				return r
			})), n.d(t, "h", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			}));
			const s = "WIDGETS__WIDGET_CREATED",
				r = "WIDGETS__WIDGET_UPDATED",
				o = "WIDGET_DELETED",
				i = "WIDGETS_SORTED",
				c = "WIDGETS__STARTED_EDITING_WIDGET",
				a = "WIDGETS__LOADED",
				d = "SUBREDDIT__WIDGETS_PENDING",
				u = "SUBREDDIT__WIDGETS_LOADED",
				l = "SUBREDDIT__WIDGETS_FAILED"
		},
		"./src/reddit/actions/widgets/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/apiRequestState.ts"),
				i = n("./src/reddit/actions/imageUploads.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				u = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const b = async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
				endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widgets"),
				method: a.db.GET,
				type: "json",
				data: {
					progressive_images: n
				}
			});
			var _ = n("./src/reddit/helpers/getGenericUploadError.ts"),
				f = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/assertNever.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/models/Image/index.tsx"),
				g = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/models/Widgets/index.ts"),
				E = n("./src/reddit/actions/widgets/constants.ts");
			const h = Object(r.a)(E.g),
				I = (e, t, n) => async (r, b, f) => {
					const {
						apiContext: m
					} = f;
					r(Object(o.h)(n));
					const E = b(),
						I = Object(p.T)(E, {
							subredditId: e
						}).name,
						S = Object(j.k)(t);
					let T = null,
						y = null;
					try {
						(T = await Object(i.f)(E, O.a.Widgets)) && (y = Object(i.m)(T)(r, b, f))
					} catch (D) {
						const e = Object(_.a)("webSocket");
						return void r(Object(o.f)(n, e))
					}
					const A = await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget"),
						method: a.db.POST,
						type: "json",
						data: n
					}))(m(), I, S);
					if (A.ok) {
						let i = A.body;
						const a = i.id;
						if ("calendar" === t.kind && r(Object(c.e)({
								kind: g.b.SuccessMod,
								text: s.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), T) {
							try {
								await y
							} catch (D) {}
							i = await r(U(e, a)) || i
						}
						r(h({
							subredditId: e,
							widget: i,
							widgetId: a
						})), r(Object(o.e)(n))
					} else T && T.websocket.close(), r(Object(o.f)(n, A.error))
				}, S = Object(r.a)(E.i), T = (e, t, n) => async (r, b, f) => {
					const {
						apiContext: E
					} = f;
					r(Object(o.h)(n));
					const h = t.id,
						I = b(),
						T = Object(p.T)(I, {
							subredditId: e
						}).name,
						y = Object(j.k)(t);
					let A = null,
						D = null;
					try {
						(A = await Object(i.f)(I, O.a.Widgets)) && (D = Object(i.m)(A)(r, b, f))
					} catch (P) {
						const e = Object(_.a)("webSocket");
						return void r(Object(o.f)(n, e))
					}
					const v = await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget/").concat(n.id),
						method: a.db.PUT,
						type: "json",
						data: n
					}))(E(), T, y);
					if (v.ok) {
						let i = function(e, t, n) {
							switch (e.kind) {
								case "calendar":
								case "id-card":
								case "subreddit-rules":
									return Object.assign(Object.assign({}, e), t);
								case "community-list": {
									const s = {};
									for (const t of e.data) s[t.name] = t;
									return Object.assign(Object.assign({}, t), {
										data: t.data.map(e => {
											if (!("subscribers" in s[e])) {
												const t = {
														subredditName: e
													},
													s = Object(p.B)(n, t),
													r = Object(p.y)(n, t);
												return {
													name: s.name,
													subscribers: s ? s.subscribers : void 0,
													iconUrl: s ? s.communityIcon : void 0,
													isNSFW: s ? s.isNSFW : void 0,
													isSubscribed: r ? r.userIsSubscriber : void 0
												}
											}
											return s[e]
										})
									})
								}
								case "button":
								case "custom":
								case "image":
								case "menu":
								case "moderators":
								case "textarea":
								case "post-flair":
									return t;
								default:
									return Object(m.a)(e)
							}
						}(t, v.body, I);
						if (D) {
							try {
								await D
							} catch (P) {}
							i = await r(U(e, h)) || i
						}
						r(S({
							subredditId: e,
							widgetId: h,
							widget: i
						})), "calendar" === t.kind && r(Object(c.e)({
							kind: g.b.SuccessMod,
							text: s.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), r(Object(o.e)(n))
					} else A && A.websocket.close(), r(Object(o.f)(n, v.error))
				}, y = Object(r.a)(E.h), A = (e, t, n) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					s(Object(o.h)(n));
					const b = t.id,
						_ = Object(p.T)(r(), {
							subredditId: e
						}).name,
						f = await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
							endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget/").concat(n.id),
							method: a.db.DELETE,
							type: "json"
						}))(c(), _, t);
					f.ok ? (s(Object(o.e)(n)), s(y({
						subredditId: e,
						widgetId: b
					}))) : s(Object(o.f)(n, f.error))
				}, D = Object(r.a)(E.f), v = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = Object(p.T)(s(), {
						subredditId: e
					}).name;
					(await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget_order/sidebar"),
						method: a.db.PATCH,
						type: "json",
						data: n
					}))(o(), i, t)).ok && n(D({
						subredditId: e,
						widgetIds: t
					}))
				}, P = e => {
					let {
						imageData: t
					} = e;
					return async (e, n, s) => {
						const r = n(),
							o = r.structuredStyles.isEditing,
							c = Object(p.T)(r, {
								subredditId: o
							}).name;
						e(Object(i.k)(t));
						const b = await (async (e, t, n, s) => Object(d.a)(Object(u.a)(e, [l.a]), {
							endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget_image_upload_s3"),
							method: a.db.POST,
							data: {
								filepath: n,
								mimetype: s
							}
						}))(s.apiContext(), c, t.file.name, await Object(f.g)(t.file));
						let _ = !1;
						try {
							const s = await Object(i.g)(n(), b, t, O.a.Widgets);
							s && (e(Object(i.j)(s)), _ = !0)
						} catch (m) {
							if (m instanceof Error) throw m;
							e(Object(i.i)(m))
						}
						return _
					}
				}, R = Object(r.a)(E.d), C = Object(r.a)(E.e), w = (e, t) => async (n, s, r) => {
					let {
						apiContext: i
					} = r;
					n(Object(o.h)(t));
					const c = Object(p.T)(s(), {
							subredditId: e
						}).name,
						a = await b(i(), c);
					if (a.ok) {
						const s = a.body;
						n(C({
							subredditId: e,
							widgets: s
						})), n(Object(o.e)(t))
					} else n(Object(o.f)(t, a.error))
				}, k = Object(r.a)(E.c), L = Object(r.a)(E.b), x = Object(r.a)(E.a), N = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					n(k({
						subredditId: e
					}));
					const i = Object(p.T)(s(), {
							subredditId: e
						}).name,
						c = await b(o(), i, t);
					if (c.ok) {
						const t = c.body;
						n(L({
							subredditId: e,
							widgets: t
						}))
					} else n(x({
						subredditId: e,
						error: c.error
					}))
				}, U = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = Object(p.T)(s(), {
							subredditId: e
						}).name,
						c = await b(o(), i, !0);
					if (c.ok) return c.body.items[t]
				}
		},
		"./src/reddit/components/CountAnimation/config.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			t.a = {
				animationIncrementDuration: 750,
				postSelectionRequirements: {
					countUpperLimit: 9999,
					countLowerLimit: 3,
					createdDateWhitin: s.Zb
				},
				chancePerPostListing: .5,
				discountAmountCoefficient: .3,
				upvoteCount: {
					inititalDelayRange: {
						lower: 200,
						upper: 500
					},
					subsequentRecurringDelayRange: {
						lower: 2e3,
						upper: 5e3
					},
					incrementRangeRelativeToTotalDiscount: {
						lower: .05,
						upper: .1
					}
				},
				commentCount: {
					inititalDelayRange: {
						lower: 350,
						upper: 650
					},
					subsequentRecurringDelayRange: {
						lower: 2e3,
						upper: 5e3
					},
					incrementRangeRelativeToTotalDiscount: {
						lower: .05,
						upper: .1
					}
				}
			}
		},
		"./src/reddit/components/CountAnimation/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/reddit/components/CountAnimation/config.ts");
			const r = e => {
					return Math.abs(e).toString().split("").map(e => parseInt(e))
				},
				o = (e, t) => {
					let n = Math.abs(e);
					const s = Math.abs(t),
						r = [n];
					if (n === s) return r;
					let o = !0;
					for (; o;) ++n > 9 && (n = 0), r.push(n), n === s && (o = !1);
					return r
				},
				i = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
				c = e => !!e && !e.isSponsored && !e.isScoreHidden && _(e.score),
				a = e => !!e && !e.isSponsored && _(e.numComments),
				d = e => {
					if (!e) return !1;
					const t = Date.now(),
						n = Math.abs(t - e.created);
					return !!e && n <= s.a.postSelectionRequirements.createdDateWhitin
				},
				u = e => d(e) && (c(e) || a(e)),
				l = (e, t) => {
					const n = ((e, t) => {
							let n = 0;
							return e.forEach(e => {
								const s = t[e];
								u(s) || n++
							}), n
						})(e, t),
						s = Math.round(n / e.length * 100) / 100;
					return Math.round(s / 2 * 100) / 100
				},
				b = (e, t) => {
					const n = {},
						r = {},
						o = l(e, t) + s.a.chancePerPostListing;
					let i = !1;
					return e.forEach(e => {
						const s = t[e],
							d = o + (i ? 0 : .15);
						u(s) && (e => Math.random() < e)(d) ? (i = !0, c(s) && (n[e] = {
							totalDiscount: f(s.score)
						}), a(s) && (r[e] = {
							totalDiscount: f(s.numComments)
						})) : i = !1
					}), {
						upvoteDiscount: n,
						commentDiscount: r
					}
				},
				_ = e => {
					const {
						countUpperLimit: t,
						countLowerLimit: n
					} = s.a.postSelectionRequirements;
					return e >= n && e <= t
				},
				f = e => {
					if (e <= 2) return 0;
					const t = 1 / Math.log10(e);
					return Math.round(t * s.a.discountAmountCoefficient * e)
				}
		},
		"./src/reddit/components/Flatlist/getFlatlistTooltipId.ts": function(e, t, n) {
			"use strict";
			t.a = (e, t, n) => {
				const s = "".concat(e, "--").concat(t);
				return n ? "".concat(s, "--").concat(n) : s
			}
		},
		"./src/reddit/components/ModerationPrompts/useActivePromptId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/react-redux/es/index.js");
			const r = e => e.moderationPromptId;

			function o(e, t) {
				return Object(s.d)(r) === i(e.id, t)
			}

			function i(e, t) {
				return "prompt-".concat(e).concat(t ? "-overlay" : "")
			}
		},
		"./src/reddit/components/NotificationBanners/bannerIds.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.EmailCollectionBannerId = "email-collection-banner-id"
				}(s || (s = {}))
		},
		"./src/reddit/components/Settings/modalIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "o", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "f", (function() {
				return O
			}));
			const s = "change_email_modal_id",
				r = "check_email_modal_id",
				o = "set_email_modal_id",
				i = "verify_email_modal_id",
				c = "reset_pw_sso_2fa_modal_id",
				a = "reset_pw_sso_email_modal_id",
				d = "reset_pw_sso_google_link_modal_id",
				u = "reset_pw_sso_google_unlink_modal_id",
				l = "reset_pw_sso_apple_link_modal_id",
				b = "reset_pw_sso_apple_unlink_modal_id",
				_ = "reset_pw_sso_deactivate_account_modal_id",
				f = "change_username_modal_id",
				m = "confirm_save_username_modal_id",
				p = "intercept_action_modal_id",
				O = "second_confirm_keep_username_modal_id"
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = r.a.createContext(() => {});

			function u(e) {
				let {
					children: t
				} = e;
				const n = Object(o.e)(),
					a = Object(s.useCallback)(e => {
						{
							const t = n.getState(),
								s = e(t);
							Object(c.a)(Object.assign(Object.assign({}, i.defaults(t)), s))
						}
					}, [n]);
				return r.a.createElement(d.Provider, {
					value: a
				}, t ? r.a.Children.only(t) : null)
			}

			function l() {
				return Object(s.useContext)(d)
			}

			function b(e) {
				function t(t) {
					const n = l();
					return r.a.createElement(e, a({}, t, {
						sendEvent: n
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/constants/actions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "@@router/CALL_HISTORY_METHOD"
		},
		"./src/reddit/constants/cookie.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return b
			}));
			const s = "USER",
				r = "alphaModal",
				o = "over18",
				i = "mod_mode_enabled",
				c = "recent_srs",
				a = "_recentclicks2",
				d = "eu_cookie_v2",
				u = "uapp_cookie",
				l = "nightmode",
				b = "_options"
		},
		"./src/reddit/constants/modals.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.ADD_REMOVAL_REASON = "add_removal_reason", e.ALPHA_CONSUMER = "alpha_consumer", e.BADGE_PICKER = "badge_picker", e.BADGE_PURCHASE = "badge_purchase", e.BAN_USER = "ban_user", e.BLADE_NIGHTMODE = "blade_nightmode", e.BLADE_UNSAVED_CHANGES = "blade_unsaved_changes", e.CHANGE_PASSWORD_MODAL_ID = "account_manager_change_password", e.CONFIRM_CLOSE_COIN_MODAL_ID = "confirm_close_coin_modal_id", e.CONFIRM_CLOSE_PREMIUM_MODAL_ID = "confirm_close_premium_modal_id", e.CONTRIBUTOR_REQUEST = "contributor_request", e.CONTRIBUTOR_REQUEST_PENDING = "contributor_request_pending", e.CONVERT_TO_COINS = "convert_to_coins", e.CREATE_SUBREDDIT_CHAT = "create_subreddit_chat", e.DELETE_SUBREDDIT_CHAT = "delete_subreddit_chat", e.DISABLE_TWO_FACTOR = "disable_2fa_modal", e.DOWN_TO_CHAT_PENDING_MODAL = "down_to_chat_pending_modal", e.ECON_COIN_PURCHASE = "econ_coin_purchase", e.ECON_POWERUPS_MARKETING = "econ_powerups_marketing", e.ECON_POWERUPS_PURCHASE = "econ_powerups_purchase", e.ECON_TOP_AWARDERS = "econ_top_awarders", e.EDIT_SUBREDDIT_CHAT = "edit_subreddit_chat", e.ENABLE_TWO_FACTOR = "enable_2fa_modal", e.GOLD_GILD_ANIMATION_OVERLAY = "gold_gild_animation_overlay", e.GOLD_GILD_MODAL = "gold_gild_modal", e.GOLD_TARGETED_OFFER_MODAL = "gold_targeted_offer", e.GOOGLE_ONE_TAP_MODAL_ID = "google_one_tap_modal_id", e.GOVERNANCE_OPT_OUT = "governance_opt_out", e.GOVERNANCE_RELEASE_NOTES = "governance_release_notes", e.HARBERGER_TAX_CRYPTO_BANNER_MANAGE = "harberger_tax_crypto_banner_manage", e.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE = "hargerger_tax_crypto_banner_purchase", e.HARBERGER_TAX_BANNER_MANAGE = "harberger_tax_banner_manage", e.HARBERGER_TAX_BANNER_PURCHASE = "harberger_tax_banner_purchase", e.KEYBOARD_SHORTCUTS = "keyboard_shortcuts", e.LINK_APPLE_SSO = "link_apple_sso", e.LINK_GOOGLE_SSO = "link_google_sso", e.LOGIN_MODAL_ID = "account_manager_login", e.MANAGE_SUBREDDIT_CHAT = "manage_subreddit_chat", e.MOD_TO_MEMBER_SHARE = "mod_to_member_share", e.CROWD_CONTROL = "crowd_control", e.MULTIREDDIT_ADD_SUBREDDIT = "multireddit_add_subreddit", e.MULTIREDDIT_CREATE = "multireddit_create", e.MULTIREDDIT_DUPLICATE = "multireddit_duplicate", e.MULTIREDDIT_EDIT = "multireddit_edit", e.MUTE_USER = "mute_user", e.PINNED_POSTS_LIMIT_REACHED = "pinned_posts_limit_reached", e.REDESIGN_MODAL = "redesign_modal", e.REGISTER_MODAL_ID = "account_manager_register", e.SNOOVATAR_MODAL = "snoovatar_modal", e.SPEZ_MODAL = "spez_modal", e.SUBREDDIT_CHAT_SETTINGS = "subreddit_chat_settings", e.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT = "subreddit_premium_badge_management", e.SUBREDDIT_PREMIUM_GIFT_MODAL = "subreddit_premium_gift", e.SUBREDDIT_PREMIUM_UPLOAD_MODAL = "subreddit_premium_upload", e.TRANSFER_POINTS = "community_points_transfer", e.TWO_FACTOR_BACKUP_CODES = "two_factor_backup_codes", e.UNLINK_APPLE_SSO = "unlink_apple_sso", e.UNLINK_GOOGLE_SSO = "unlink_google_sso", e.USER_FLAIR_MODAL_ID = "user_flair_modal", e.WALLET_REGISTRATION_MODAL = "wallet_registration_modal"
				}(s || (s = {}));
			const r = [s.GOOGLE_ONE_TAP_MODAL_ID]
		},
		"./src/reddit/constants/preferences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "rpanDuDismissalTime",
				r = "showRpanDu",
				o = "topContentDismissalTime",
				i = "topContentTimesDismissed",
				c = [...["openPostInNewTab", "rememberCommunitySort", "sort", "stylesEnabled", "useMarkdown", "layout", "rememberCommunityLayout", "hasSeenCustomizeFlyout", "reduceAnimationsFromAwards", s, r, o, i, "surveyLastSeenTime"], "activityRelevantAds", "thirdPartyDataPersonalizedAds", "thirdPartySiteDataPersonalizedAds", "thirdPartySiteDataPersonalizedContent", "showLocationBasedRecommendations"]
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "d", (function() {
					return s
				})), n.d(t, "c", (function() {
					return r
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(s || (s = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(r || (r = {}));
			const o = "SHORTCUT_FOCUSABLE_DIV",
				i = [9, 13, 32]
		},
		"./src/reddit/constants/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = {
					CLICK: "click",
					CLOSE: "close",
					COMPLETE: "complete",
					DISABLE: "disable",
					DRAG: "drag",
					ENABLE: "enable",
					REJECT: "reject",
					SELECT: "select",
					START: "start",
					STOP: "stop",
					VIEW: "view"
				},
				r = {
					POST: "post",
					SCREEN: "screen"
				},
				o = "media-element"
		},
		"./src/reddit/constants/video.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return s
			})), n.d(t, "l", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "j", (function() {
				return f
			}));
			const s = 250,
				r = 500,
				o = 25,
				i = 50,
				c = 75,
				a = 95,
				d = 100,
				u = [o, i, c, a, d],
				l = 3,
				b = 5,
				_ = 10,
				f = [l, b, _]
		},
		"./src/reddit/endpoints/moderator/structuredStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/graphql/operations/SubredditPostFlairStyleTemplates.json"),
				r = n("./src/graphql/operations/SubredditStyles.json"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				d = (n("./src/lib/uploadToS3/index.ts"), n("./src/reddit/constants/headers.ts"));
			n("./src/reddit/helpers/media/index.ts");
			const u = async (e, t, n) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/structured_styles/").concat(t),
				method: o.db.GET,
				data: {
					progressive_images: n
				}
			}), l = async (e, t, n) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/structured_styles/").concat(t),
				method: o.db.PATCH,
				data: n
			}), b = async (e, t) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/structured_styles/").concat(t),
				method: o.db.DELETE
			}), _ = async (e, t, n, s, r) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/style_asset_upload_s3/").concat(t),
				method: o.db.POST,
				data: {
					filepath: n,
					imagetype: s,
					mimetype: r
				}
			}), f = (e, t) => Object(c.a)(e, Object.assign(Object.assign({}, r), {
				variables: {
					subredditName: t
				}
			})), m = (e, t, n) => Object(c.a)(e, Object.assign(Object.assign({}, s), {
				variables: {
					subredditName: t,
					templateIds: n
				}
			}))
		},
		"./src/reddit/endpoints/page/commentsPage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/addQueryParams/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				a = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				d = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			t.a = (e, t, n, u, l, b, _) => {
				let f = n ? "".concat(s.a.gatewayUrl, "/desktopapi/v1/postcomments/").concat(t, "/").concat(n) : "".concat(s.a.gatewayUrl, "/desktopapi/v1/postcomments/").concat(t);
				return f = Object(a.a)(Object(d.a)(f)), l && (f = Object(c.a)(f)), b && (f = Object(r.a)(f, {
					realtime_comments: !0
				})), _ && (f = Object(r.a)(f, {
					blend_new_comments: "1"
				})), Object(i.a)(e, {
					data: u,
					endpoint: f,
					method: o.db.GET,
					traceRequestName: "get_comments_page"
				})
			}
		},
		"./src/reddit/endpoints/post/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "u", (function() {
				return p
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "x", (function() {
				return h
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "y", (function() {
				return A
			})), n.d(t, "s", (function() {
				return D
			})), n.d(t, "z", (function() {
				return v
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "v", (function() {
				return R
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "e", (function() {
				return M
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./src/graphql/operations/PostIsTrackingCrossposts.json"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var u = n("./src/reddit/helpers/reportPage/index.ts");
			const l = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/approve")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				b = (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/distinguish/").concat(n)),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				_ = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/fetch_title")),
					method: r.db.POST,
					data: {
						url: t,
						api_type: "json"
					}
				}),
				f = (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/follow_post")),
					method: r.db.POST,
					data: {
						follow: n,
						fullname: t
					}
				}),
				m = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/hide")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unhide")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/lock")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unlock")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/set_original_content")),
					method: r.db.POST,
					data: {
						fullname: t,
						should_set_oc: n
					}
				}),
				E = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/marknsfw")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unmarknsfw")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				I = (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/sendreplies"),
					method: r.db.POST,
					data: {
						id: t,
						state: n
					}
				}),
				S = (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/remove")),
					method: r.db.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				T = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/del")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => ((e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/save")),
					method: r.db.POST,
					data: {
						id: t
					}
				}))(e, t),
				A = (e, t) => ((e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unsave")),
					method: r.db.POST,
					data: {
						id: t
					}
				}))(e, t),
				D = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/spoiler")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unspoiler")),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				P = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/ignore_reports"),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/unignore_reports"),
					method: r.db.POST,
					data: {
						id: t
					}
				}),
				C = (e, t, n, s) => Object(o.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/set_subreddit_sticky"),
					method: r.db.POST,
					data: {
						id: t,
						state: n,
						to_profile: s
					}
				});
			var w;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(w || (w = {}));
			const k = (e, t) => Object(o.a)(Object(c.a)(e, [a.a]), {
					method: r.db.POST,
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/report")),
					data: L(t)
				}),
				L = e => {
					const t = Object.assign({
							thing_id: e.id,
							api_type: "json"
						}, e.timestamp && {
							live_stream_relative_report_time_sec: e.timestamp.toString()
						}),
						{
							reportFlowPayload: n
						} = e;
					switch (n.customText && (t.custom_text = n.customText), n.kind) {
						case w.Other:
							return Object.assign(Object.assign({}, t), {
								reason: "other",
								other_reason: n.rule
							});
						case w.Rule:
							return Object.assign(Object.assign({}, t), {
								reason: n.rule,
								rule_reason: n.rule
							});
						case w.SiteRule:
						case w.CrisisTextLine:
						default:
							return Object.assign(Object.assign({}, t), {
								reason: "site_reason_selected",
								site_reason: n.rule
							})
					}
				},
				x = (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					method: r.db.POST,
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/report")),
					data: N(t, n)
				}),
				N = (e, t) => {
					const n = Object(u.b)(e),
						s = Object.assign(Object.assign({}, n), {
							api_type: "json"
						});
					return t && (s.from_help_desk = !0), s
				},
				U = async (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					method: r.db.POST,
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/set_contest_mode/")),
					data: {
						api_type: "json",
						id: n,
						state: t
					}
				}), M = (e, t) => Object(i.a)(e, Object.assign(Object.assign({}, s), {
					variables: t
				}))
		},
		"./src/reddit/endpoints/subreddit/settings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/constants/headers.ts");
			const a = (e, t, n) => Object(r.a)(Object(o.a)(e, [c.a]), {
					method: s.db.POST,
					endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/delete_sr_").concat(n),
					data: {
						raw_json: 1
					}
				}),
				d = (e, t) => Object(r.a)(Object(o.a)(e, [c.a]), {
					method: s.db.GET,
					endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/about/edit.json"),
					data: {
						raw_json: 1
					}
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: Object.assign({}, b(e.body.data))
				}) : e),
				u = (e, t, n) => Object(r.a)(Object(o.a)(e, [c.a]), {
					method: s.db.PATCH,
					endpoint: Object(i.a)("".concat(e.apiUrl, "/api/v1/subreddit/update_settings")),
					type: "json",
					data: Object.assign(Object.assign({}, _(n, m)), {
						sr: t
					})
				}),
				l = (e, t, n) => {
					const i = Object.assign(Object.assign({}, f(n)), {
						sr: t
					});
					return Object(r.a)(Object(o.a)(e, [c.a]), {
						method: s.db.POST,
						endpoint: "".concat(e.apiUrl, "/api/site_admin"),
						data: i
					})
				},
				b = e => ({
					allowChatPostCreation: e.allow_chat_post_creation,
					allowDiscovery: e.allow_discovery,
					allowGalleries: e.allow_galleries,
					allowImages: e.allow_images,
					allowPolls: e.allow_polls,
					allowPostCrossposts: e.allow_post_crossposts,
					collapseDeletedComments: e.collapse_deleted_comments,
					commentScoreHideMins: e.comment_score_hide_mins,
					contentOptions: e.content_options,
					contentVisible: e.default_set,
					crowdControlMode: e.crowd_control_mode,
					crowdControlChatLevel: e.crowd_control_chat_level,
					crowdControlLevel: e.crowd_control_level,
					description: e.description,
					disableContributorRequests: e.disable_contributor_requests,
					domain: e.domain,
					excludeBannedModqueue: e.exclude_banned_modqueue,
					headerHoverText: e.header_hover_text,
					hideAds: e.hide_ads,
					isChatPostFeatureEnabled: e.is_chat_post_feature_enabled,
					keyColor: e.key_color,
					language: e.language,
					liveStreamingIsEnabled: e.live_streaming_is_enabled,
					newPinnedPostPNsEnabled: e.new_pinned_post_pns_enabled,
					over18: e.over_18,
					publicDescription: e.public_description,
					publicTraffic: e.public_traffic,
					restrictCommenting: e.restrict_commenting,
					restrictPosting: e.restrict_posting,
					showMedia: e.show_media,
					showMediaPreview: e.show_media_preview,
					spamComments: e.spam_comments,
					spamLinks: e.spam_links,
					spamSelfposts: e.spam_selfposts,
					spoilersEnabled: e.spoilers_enabled,
					submitLinkLabel: e.submit_link_label,
					submitText: e.submit_text,
					submitTextLabel: e.submit_text_label,
					subredditId: e.subreddit_id,
					subredditType: e.subreddit_type,
					suggestedCommentSort: e.suggested_comment_sort,
					title: e.title,
					toxicityThresholdChatLevel: e.toxicity_threshold_chat_level,
					userFlairPNsEnabled: e.user_flair_pns_enabled,
					welcomeMessageEnabled: e.welcome_message_enabled,
					welcomeMessageText: e.welcome_message_text,
					wikiEditAge: e.wiki_edit_age,
					wikiEditKarma: e.wiki_edit_karma,
					wikimode: e.wikimode
				}),
				_ = (e, t) => {
					const n = {};
					for (const s in e) n[t[s]] = e[s];
					return n
				},
				f = e => ({
					allow_polls: e.allowPolls,
					allow_galleries: e.allowGalleries,
					allow_post_crossposts: e.allowPostCrossposts,
					allow_chat_post_creation: e.allowChatPostCreation,
					allow_images: e.allowImages,
					allow_discovery: e.allowDiscovery,
					allow_top: e.contentVisible,
					api_type: "json",
					collapse_deleted_comments: e.collapseDeletedComments,
					comment_score_hide_mins: e.commentScoreHideMins,
					crowd_control_mode: e.crowdControlMode,
					crowd_control_level: e.crowdControlLevel,
					crowd_control_chat_level: e.crowdControlChatLevel,
					disable_contributor_requests: e.disableContributorRequests,
					description: e.description,
					domain: e.domain,
					exclude_banned_modqueue: e.excludeBannedModqueue,
					"header-title": e.headerHoverText,
					hide_ads: e.hideAds,
					is_chat_post_feature_enabled: e.isChatPostFeatureEnabled,
					key_color: e.keyColor,
					lang: e.language,
					link_type: e.contentOptions,
					live_streaming_is_enabled: e.liveStreamingIsEnabled,
					new_pinned_post_pns_enabled: e.newPinnedPostPNsEnabled,
					over_18: e.over18,
					public_description: e.publicDescription,
					public_traffic: e.publicTraffic,
					restrict_commenting: e.restrictCommenting,
					restrict_posting: e.restrictPosting,
					show_media: e.showMedia,
					show_media_preview: e.showMediaPreview,
					spam_comments: e.spamComments,
					spam_links: e.spamLinks,
					spam_selfposts: e.spamSelfposts,
					spoilers_enabled: e.spoilersEnabled,
					sr: e.subredditId,
					submit_link_label: e.submitLinkLabel,
					submit_text: e.submitText,
					submit_text_label: e.submitTextLabel,
					suggested_comment_sort: e.suggestedCommentSort,
					title: e.title,
					toxicity_threshold_chat_level: e.toxicityThresholdChatLevel,
					type: e.subredditType,
					user_flair_pns_enabled: e.userFlairPNsEnabled,
					welcome_message_enabled: e.welcomeMessageEnabled,
					welcome_message_text: e.welcomeMessageText,
					wiki_edit_age: e.wikiEditAge,
					wiki_edit_karma: e.wikiEditKarma,
					wikimode: e.wikimode
				}),
				m = {
					allowPostCrossposts: "allow_post_crossposts",
					allowImages: "allow_images",
					allowChatPostCreation: "allow_chat_post_creation",
					allowDiscovery: "allow_discovery",
					allowPolls: "allow_polls",
					allowGalleries: "allow_galleries",
					contentVisible: "allow_top",
					collapseDeletedComments: "collapse_deleted_comments",
					commentScoreHideMins: "comment_score_hide_mins",
					crowdControlMode: "crowd_control_mode",
					crowdControlLevel: "crowd_control_level",
					crowdControlChatLevel: "crowd_control_chat_level",
					description: "description",
					disableContributorRequests: "disable_contributor_requests",
					domain: "domain",
					excludeBannedModqueue: "exclude_banned_modqueue",
					headerHoverText: "header-title",
					hideAds: "hide_ads",
					isChatPostFeatureEnabled: "is_chat_post_feature_enabled",
					keyColor: "key_color",
					language: "lang",
					liveStreamingIsEnabled: "live_streaming_is_enabled",
					contentOptions: "link_type",
					newPinnedPostPNsEnabled: "new_pinned_post_pns_enabled",
					over18: "over_18",
					publicDescription: "public_description",
					publicTraffic: "public_traffic",
					restrictCommenting: "restrict_commenting",
					restrictPosting: "restrict_posting",
					showMedia: "show_media",
					showMediaPreview: "show_media_preview",
					spamComments: "spam_comments",
					spamLinks: "spam_links",
					spamSelfposts: "spam_selfposts",
					spoilersEnabled: "spoilers_enabled",
					submitLinkLabel: "submit_link_label",
					submitText: "submit_text",
					submitTextLabel: "submit_text_label",
					subredditType: "type",
					suggestedCommentSort: "suggested_comment_sort",
					title: "title",
					toxicityThresholdChatLevel: "toxicity_threshold_chat_level",
					userFlairPNsEnabled: "user_flair_pns_enabled",
					welcomeMessageEnabled: "welcome_message_enabled",
					welcomeMessageText: "welcome_message_text",
					wikiEditAge: "wiki_edit_age",
					wikiEditKarma: "wiki_edit_karma",
					wikimode: "wikimode"
				},
				p = (e, t, n) => Object(r.a)(Object(o.a)(e, [c.a]), {
					method: s.db.POST,
					endpoint: Object(i.a)("".concat(e.apiUrl, "/api/v1/subreddit/test_welcome_message")),
					data: {
						sr: t,
						test_message_text: n
					}
				})
		},
		"./src/reddit/endpoints/user/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./src/config.ts"),
				r = n("./src/graphql/operations/ExperimentVariants.json"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(i.a)(e, {
					endpoint: Object(u.a)("".concat(s.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/about")),
					method: o.db.GET,
					data: {
						api_type: "json",
						gilding_detail: 1,
						awarded_detail: 1
					}
				}),
				b = e => Object(i.a)(Object(a.a)(e, [d.a]), {
					endpoint: "".concat(e.apiUrl, "/api/seen_layout_switch"),
					method: o.db.POST
				}),
				_ = e => Object(i.a)(Object(a.a)(e, [d.a]), {
					endpoint: "".concat(e.apiUrl, "/api/seen_give_award_tooltip"),
					method: o.db.POST
				}),
				f = e => Object(i.a)(Object(a.a)(e, [d.a]), {
					endpoint: "".concat(e.apiUrl, "/api/seen_modal"),
					method: o.db.POST
				}),
				m = (e, t) => Object(c.a)(e, Object.assign(Object.assign({}, r), {
					variables: t
				}), {
					traceRequestName: "get_experiments"
				})
		},
		"./src/reddit/endpoints/user/preferences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return _
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "h", (function() {
				return E
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts");
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const c = {
				activityRelevantAds: "activity_relevant_ads",
				acceptPrivateMessages: "accept_pms",
				allowClickTracking: "allow_clicktracking",
				collapseReadMessages: "collapse_read_messages",
				defaultCommentSort: "default_comment_sort",
				emailDigests: "email_digests",
				emailUnreadMessages: "email_messages",
				emailUnsubscribe: "email_unsubscribe_all",
				geopopular: "geopopular",
				hasSeenCustomizeFlyout: "has_seen_customize_flyout",
				hideAds: "hide_ads",
				hideFromRobots: "hide_from_robots",
				hideNSFW: "no_profanity",
				highlightComments: "highlight_new_comments",
				ignoreSuggestedSort: "ignore_suggested_sort",
				inBeta: "beta",
				labelNSFW: "label_nsfw",
				markMessagesRead: "mark_messages_read",
				nightmode: "nightmode",
				over18: "over_18",
				sendWelcomeMessages: "send_welcome_messages",
				showMessagesInInbox: "threaded_messages",
				showNotifications: "live_orangereds",
				showUsernameMentionNotifications: "monitor_mentions",
				privateFeeds: "private_feeds",
				autoplayVideo: "video_autoplay",
				reduceAnimationsFromAwards: "reduce_animations_from_awards",
				rpanDuDismissalTime: "rpan_du_dismissal_time",
				showActiveCommunities: "top_karma_subreddits",
				showRpanDu: n("./src/reddit/constants/preferences.ts").c,
				showTwitter: "show_twitter",
				stylesEnabled: "styles_enabled",
				openPostInNewTab: "open_post_in_new_tab",
				rememberCommunitySort: "remember_community_sort",
				useMarkdown: "use_markdown",
				sort: "sort",
				layout: "layout",
				rememberCommunityLayout: "remember_community_layout",
				topContentDismissalTime: "top_content_dismissal_time",
				topContentTimesDismissed: "top_content_times_dismissed",
				thirdPartyDataPersonalizedAds: "third_party_data_personalized_ads",
				thirdPartySiteDataPersonalizedAds: "third_party_site_data_personalized_ads",
				thirdPartySiteDataPersonalizedContent: "third_party_site_data_personalized_content",
				showLocationBasedRecommendations: "show_location_based_recommendations",
				surveyLastSeenTime: "survey_last_seen_time"
			};
			var a = e => {
					const t = {};
					return Object.keys(e).map(n => {
						c.hasOwnProperty(n) && (t[c[n]] = e[n])
					}), t
				},
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = {
				rpanDuDismissalTime: "rpan_du_dismissal_time",
				isContributorRequestTimestamp: "is_contributor_request_timestamp",
				sort: "sort",
				stylesEnabled: "styles_enabled",
				layout: "layout"
			};
			var l = e => {
					const t = {};
					return Object.keys(e).map(n => {
						t[u[n]] = e[n]
					}), t
				},
				b = n("./src/reddit/constants/headers.ts");
			const _ = e => Object(o.a)(Object(i.a)(e, [b.a]), {
					method: r.db.PATCH,
					endpoint: "".concat(e.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						over_18: "true"
					}
				}),
				f = (e, t) => Object(o.a)(Object(i.a)(t, [b.a]), {
					method: r.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						video_autoplay: e
					}
				}),
				m = (e, t) => Object(o.a)(Object(i.a)(t, [b.a]), {
					method: r.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						nightmode: e
					}
				}),
				p = (e, t) => Object(o.a)(Object(i.a)(t, [b.a]), {
					method: r.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						geopopular: e
					}
				}),
				O = (e, t) => Object(o.a)(Object(i.a)(t, [b.a]), {
					method: r.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: a(e)
				}),
				g = (e, t) => Object(o.a)(Object(i.a)(t, [b.a]), {
					method: r.db.POST,
					endpoint: "".concat(t.apiUrl, "/api/quarantine_optin"),
					data: {
						sr_name: e,
						api_type: "json",
						accept: !0
					}
				}),
				j = (e, t) => Object(o.a)(t, {
					method: r.db.POST,
					endpoint: Object(d.a)("".concat(s.a.gatewayUrl, "/desktopapi/v1/set_preferences")),
					type: "json",
					data: {
						type: "account",
						preferences: a(e)
					}
				}),
				E = (e, t, n) => Object(o.a)(n, {
					method: r.db.POST,
					endpoint: "".concat(s.a.gatewayUrl, "/desktopapi/v1/set_preferences"),
					type: "json",
					data: {
						type: "subreddit",
						subreddit_id: e,
						preferences: l(t)
					}
				})
		},
		"./src/reddit/helpers/adCount/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				o = n("./src/reddit/selectors/platform.ts");
			const i = (e, t, n) => [e, t, n].join("/"),
				c = (e, t) => {
					switch (t) {
						case r.a.SUBREDDIT:
						case r.a.COMMENTS_OVERLAY:
						case r.a.COMMENTS: {
							const t = Object(o.i)(e);
							return [i(s.c.ABOVE_THE_FOLD, t, 0), i(s.c.BELOW_THE_FOLD, t, 1)]
						}
						case r.a.FRONTPAGE:
							return [i(s.c.ABOVE_THE_FOLD, !1, 0), i(s.c.BELOW_THE_FOLD, !1, 1)];
						case r.a.MULTIREDDIT:
						case r.a.SEARCH_RESULTS:
							return [i(s.c.BELOW_THE_FOLD, !1, 0)];
						default:
							return [i(s.c.ABOVE_THE_FOLD, !1, 0), i(s.c.BELOW_THE_FOLD, !1, 1)]
					}
				}
		},
		"./src/reddit/helpers/getErrorMsgFromR2JQueryResponse.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = {
					INVALID_EMAIL: "You entered an invalid email. Please try again.",
					RATELIMITED: "You are doing that too much. Please try later.",
					WRONG_PASSWORD: "You entered an incorrect password. Please try again."
				},
				r = (e, t) => -1 !== e.indexOf(t);

			function o(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Something went wrong. Please try again.";
				const n = e && e.body && e.body.jquery && e.body.jquery[14] && e.body.jquery[14][3] && e.body.jquery[14][3][0];
				return "string" != typeof n ? t : r(n, "the following emails are invalid") ? s.INVALID_EMAIL : r(n, "wrong password") ? s.WRONG_PASSWORD : r(n, "you are doing that too much") ? s.RATELIMITED : t
			}
		},
		"./src/reddit/helpers/getGenericUploadError.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/lib/constants/index.ts");

			function r(e) {
				return {
					type: s.E.UNKNOWN_ERROR,
					fields: [{
						field: e,
						msg: "Image failed to upload"
					}]
				}
			}
		},
		"./src/reddit/helpers/getVendorMetadata.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/ads/index.ts"),
				r = n("./src/lib/ads/store.ts"),
				o = n("./src/reddit/constants/adEvents.ts");
			const i = (e, t) => {
					return Object.keys(e).reduce((n, s) => (n[s] = t - (e[s].timeEntered || t), n), {})
				},
				c = (e, t, n, s, r) => t === n ? s : !(!r || !r[e]) && r[e],
				a = function(e, t, n) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
					if (n) {
						if (e && t) return 4;
						if (!t && e) return 3;
						if (t && !e) return 2;
						if (!t && !e) return 1
					}
					return s
				},
				d = (e, t, n) => {
					let d = null,
						u = null;
					if ("undefined" == typeof document || "undefined" == typeof window) return null;
					const l = Date.now(),
						{
							thresholdData: b,
							videoThresholdData: _,
							videoAds: f
						} = r.c(e) || r.a,
						m = Object(s.t)(e, f, "timeUpdated"),
						{
							videoData: p
						} = t,
						O = i(b, l),
						g = i(_, l),
						j = !!t.videoData.videoVolume && t.videoData.videoVolume <= 0,
						E = p.videoStartTime ? p.videoStartTime + 200 : 0,
						h = {
							inView50: E >= (_[50].timeEntered || Number.MAX_SAFE_INTEGER),
							inView80: E >= (_[80].timeEntered || Number.MAX_SAFE_INTEGER),
							inView100: E >= (_[100].timeEntered || Number.MAX_SAFE_INTEGER),
							audible: !j && E >= (m.muted || 0),
							muted: j && E >= (m.muted || 0)
						},
						I = b[1].totalTime + O[1],
						S = b[50].totalTime + O[50],
						T = b[100].totalTime + O[100],
						y = Math.max(b[1].maxContinuousTime, O[1]),
						A = Math.max(b[30].maxContinuousTime, O[30]),
						D = Math.max(b[50].maxContinuousTime, O[50]),
						v = Math.max(b[100].maxContinuousTime, O[100]),
						P = D > s.l,
						R = document.getElementById(e);
					if (!R) return null;
					const C = R.getElementsByTagName("video");
					let w = null;
					C && C[0] && (w = C[0].getBoundingClientRect());
					const k = R.getBoundingClientRect(),
						L = (d = Math.floor(k.width)) * (u = Math.floor(k.height)),
						x = L > 242499 && D >= 1e3 || v >= 1e3 || n === o.a.GroupMViewable ? 1 : 0,
						N = L > 242499 && A >= 1e3 || v >= 1e3 ? 1 : 0,
						U = Math.max(_[100].maxContinuousTime, g[100]) > 1,
						M = _.HALF_DURATION_80_IN_VIEW_AUDIBLE,
						G = {
							w: d,
							h: u,
							sw: window.screen.width,
							sh: window.screen.height,
							t: l,
							a: I,
							b: S,
							c: T,
							d: y,
							e: D,
							f: v,
							g: x ? 1 : 0,
							i: n === o.a.Impression ? l : t.timeImpressionViewed || 0,
							o: P ? 1 : 0,
							q: N ? 1 : 0,
							r: t.eventGlobalCount ? t.eventGlobalCount : 0
						};
					return p.isVideo && (G.va = p.isVideo ? 1 : 0, G.vh = w ? Math.floor(w.height) : 0, G.vw = w ? Math.floor(w.width) : 0, G.ve = p.videoVolume || 0, G.vc = Math.floor(p.videoDuration || 0), G.vd = Math.floor(p.cumulativeViewedTime) || 0, G.vq = p.wasFullScreen || 0, G.vg = _[1].timeEntered ? 1 : 0, G.vb = _[50].totalTime + g[50], G.vs = a(p.videoVolume, _[1].timeEntered, n === o.a.VideoStarted, p.videoStarted), G.vt = a(p.videoVolume, _[1].timeEntered, n === o.a.VideoWatched25, p.watched25), G.vu = a(p.videoVolume, _[1].timeEntered, n === o.a.VideoWatched50, p.watched50), G.vv = a(p.videoVolume, _[1].timeEntered, n === o.a.VideoWatched75, p.watched75), G.vx = a(p.videoVolume, _[1].timeEntered, n === o.a.VideoWatched100, p.watched100), G.vo = c("vo", n, o.a.VideoWatched50, h.inView100, p.watched50State) ? 1 : 0, G.vr = c("vr", n, o.a.VideoWatched50, h.inView80 && h.audible, p.watched50State) || M.totalTime + g.HALF_DURATION_80_IN_VIEW_AUDIBLE >= 15e3 ? 1 : 0, G.vj = c("vj", n, o.a.VideoWatched50, h.inView100 && h.audible, p.watched50State) ? 1 : 0, G.vl = c("vl", n, o.a.VideoWatched100, h.inView100, p.watched100State) ? 1 : 0, G.vk = c("vk", n, o.a.VideoWatched100, h.audible, p.watched100State) ? 1 : 0, G.vp = c("vp", n, o.a.VideoWatched100, h.inView100 && h.audible, p.watched100State) ? 1 : 0, G.vm = c("vm", n, o.a.VideoWatched100, h.inView50 && h.audible, p.watched100State) ? 1 : 0, G.vn = c("vn", n, o.a.VideoWatched100, h.inView50 && h.muted, p.watched100State) ? 1 : 0, G.vy = _.FULL_IN_VIEW_AUDIBLE_TIME.totalTime + g.FULL_IN_VIEW_AUDIBLE_TIME, G.vz = _[100].totalTime + g[100], G.xa = U ? 1 : 0, G.xb = Math.max(_[50].maxContinuousTime, g[50])), G
				}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			t.a = e => {
				const t = {
					menuPosition: e.menuPosition ? e.menuPosition.toLowerCase() : void 0,
					bannerCommunityNameFormat: e.bannerCommunityNameFormat ? e.bannerCommunityNameFormat.toLowerCase() : void 0,
					bannerShowCommunityIcon: e.bannerShowCommunityIcon ? e.bannerShowCommunityIcon.toLowerCase() : void 0,
					bannerHeight: e.bannerHeight ? e.bannerHeight.toLowerCase() : void 0,
					postVoteIcons: e.postVoteIcons ? e.postVoteIcons.toLowerCase() : void 0,
					submenuBackgroundStyle: e.submenuBackgroundStyle ? e.submenuBackgroundStyle.toLowerCase() : void 0,
					backgroundImagePosition: e.backgroundImagePosition ? e.backgroundImagePosition.toLowerCase() : void 0,
					bannerBackgroundImagePosition: e.bannerBackgroundImagePosition ? e.bannerBackgroundImagePosition.toLowerCase() : void 0,
					bannerPositionedImagePosition: e.bannerPositionedImagePosition ? e.bannerPositionedImagePosition.toLowerCase() : void 0,
					postBackgroundImagePosition: e.postBackgroundImagePosition ? e.postBackgroundImagePosition.toLowerCase() : void 0,
					postPlaceholderImagePosition: e.postPlaceholderImagePosition ? e.postPlaceholderImagePosition.toLowerCase() : void 0,
					menuBackgroundOpacity: e.menuBackgroundOpacity || void 0,
					backgroundImage: e.backgroundImage || void 0,
					bannerBackgroundImage: e.bannerBackgroundImage || void 0,
					bannerPositionedImage: e.bannerPositionedImage || void 0,
					communityIcon: e.icon || void 0,
					menuBackgroundImage: e.menuBackgroundImage || void 0,
					postBackgroundImage: e.postBackgroundImage || void 0,
					postDownvoteIconActive: e.postDownvoteIconActive || void 0,
					postDownvoteIconInactive: e.postDownvoteIconInactive || void 0,
					postPlaceholderImage: e.postPlaceholderImage || void 0,
					postUpvoteIconActive: e.postUpvoteIconActive || void 0,
					postUpvoteIconInactive: e.postUpvoteIconInactive || void 0,
					bannerBackgroundColor: e.bannerBackgroundColor || void 0,
					bannerOverlayColor: e.bannerOverlayColor || void 0,
					menuBackgroundColor: e.menuBackgroundColor || void 0,
					menuLinkColorActive: e.menuLinkColorActive || void 0,
					menuLinkColorInactive: e.menuLinkColorInactive || void 0,
					menuLinkColorHover: e.menuLinkColorHover || void 0,
					submenuBackgroundColor: e.submenuBackgroundColor || void 0,
					primaryColor: e.primaryColor || void 0,
					highlightColor: e.highlightColor || void 0,
					postTitleColor: e.postTitleColor || void 0,
					backgroundColor: e.backgroundColor || void 0,
					postBackgroundColor: e.postBackgroundColor || void 0,
					postDownvoteCountColor: e.postDownvoteCountColor || void 0,
					postUpvoteCountColor: e.postUpvoteCountColor || void 0,
					mobileKeyColor: e.mobileKeyColor || void 0,
					mobileBannerImage: e.mobileBannerImage || void 0,
					sidebarWidgetHeaderColor: e.sidebarWidgetHeaderColor || void 0,
					sidebarWidgetBackgroundColor: e.sidebarWidgetBackgroundColor || void 0,
					secondaryBannerPositionedImage: e.secondaryBannerPositionedImage || void 0
				};
				return Object.keys(t).forEach(e => {
					void 0 === t[e] && delete t[e]
				}), t
			}
		},
		"./src/reddit/helpers/history/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/lodash/omit.js"),
				r = n.n(s);
			const o = (e, t) => {
					const n = history.state ? history.state.state : {},
						s = Object.assign(Object.assign({}, history.state), {
							state: Object.assign(Object.assign({}, n), {
								[e]: t
							})
						});
					history.replaceState(s, window.document.title)
				},
				i = e => {
					const t = Object.assign(Object.assign({}, history.state), {
						state: Object.assign({}, r()(history.state.state, e))
					});
					history.replaceState(t, window.document.title)
				},
				c = e => history && history.state && history.state.state && history.state.state[e]
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: n
				} = e;
				let s = n && "r/".concat(n) || t && "u/".concat(t) || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (s += "--[".concat(e.onlyOfType, "]")), s
			}
		},
		"./src/reddit/helpers/overlay/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/history/esm/history.js"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/helpers/path/index.ts");
			const i = e => {
					if ("string" == typeof e) return Object(s.c)(Object(o.b)(e), {
						isOverlay: !0
					}); {
						const t = Object(s.c)(e);
						return t.state = Object.assign(Object.assign({}, t.state || {}), {
							isOverlay: !0
						}), t
					}
				},
				c = e => Object(r.b)(i(e))
		},
		"./src/reddit/helpers/redesignOptoutCookie/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/js-cookie/src/js.cookie.js"),
				o = n.n(r);
			const i = "redesign_optout";

			function c() {
				const e = new Date;
				return e.setFullYear(e.getFullYear() + 3), e
			}

			function a() {
				o.a.get(i) || o.a.set(i, "true", {
					domain: s.a.cookieDomain,
					expires: c()
				})
			}

			function d() {
				o.a.get(i) && o.a.remove(i, {
					domain: s.a.cookieDomain
				})
			}
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var s = n("./src/reddit/models/RulesSequence/index.ts");
			const r = "(?:old\\.reddit\\.".concat("(?:com|local)", "|new\\.reddit\\.").concat("(?:com|local)", "|reddit\\.").concat("(?:com|local)", "|www\\.reddit\\.").concat("(?:com|local)", ")"),
				o = "(?:".concat("(?:r)", "|").concat("(?:user|u)", ")"),
				i = "(?:https?://)",
				c = "^".concat(i).concat(r, "/").concat(o, "/").concat("(?:[^/]+)", "/comments/").concat("(?:\\w+)", "/").concat("(?:[^/]+)", "/").concat("(\\w+)", "(?:/.*)?"),
				a = "^".concat(i).concat(r, "/").concat(o, "/").concat("(?:[^/]+)", "/comments/").concat("(\\w+)", "(?:/.*)?"),
				d = "^".concat(i).concat(r, "/message/messages/").concat("(\\w+)", "(?:/.*)?"),
				u = "^".concat(i, "?").concat("(?:mod.reddit.com/mail)", "/").concat("(?:[^/]+)", "/").concat("(\\w+)", "(?:/)?$"),
				l = "^".concat(i, "?").concat("(?:mod.reddit.com/mail)", "/").concat("(?:[^/]+)", "/").concat("(\\w+)", "/").concat("(\\w+)", "(?:/)?$"),
				b = "(?:".concat(a, "|").concat(c, "|").concat(d, "|").concat(u, "|").concat(l, ")"),
				_ = "(?:(?:".concat(i, "?").concat(r, "/)?").concat("(?:user|u)", "/)?").concat("([\\w-]+)", "(?:/)?"),
				f = "(?:(?:".concat(i, "?").concat(r, "/)?").concat("(?:r)", "/)?").concat("([\\w-]+)", "(?:/)?"),
				m = e => {
					const t = new RegExp(c),
						n = new RegExp(a),
						s = new RegExp(d),
						r = new RegExp(u),
						o = new RegExp(l);
					let i, b, m;
					if (e.thingUrl) {
						const c = e.thingUrl.trim();
						if (t.test(c)) {
							const e = t.exec(c);
							e && e.length > 1 && (i = "t1_" + e[1])
						} else if (n.test(c)) {
							const e = n.exec(c);
							e && e.length > 1 && (i = "t3_" + e[1])
						} else if (s.test(c)) {
							const e = s.exec(c);
							e && e.length > 1 && (i = "t4_" + e[1])
						} else if (o.test(c)) {
							const e = o.exec(c);
							e && e.length > 2 && (b = e[1], m = e[2])
						} else if (r.test(c)) {
							const e = r.exec(c);
							e && e.length > 1 && (b = e[1])
						}
					}
					const p = new RegExp(_),
						O = new RegExp(f),
						g = [];
					let j;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (O.test(t)) {
							const e = O.exec(t);
							e && e.length > 1 && (j = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let c = 0; c < e.usernames.length; c++) {
							const t = e.usernames[c].trim();
							if (p.test(t)) {
								const e = p.exec(t);
								e && e.length > 1 && g.push(e[1])
							}
						}
					const {
						reason: E
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: E.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: b,
						modmail_msg_id: m,
						sr_name: j,
						thing_id: i,
						usernames: g.length ? g.join(",") : void 0
					}
				},
				p = (e, t) => {
					const n = new s.a;
					return O(n, e, t, 0), n
				},
				O = (e, t, n, s) => {
					for (let r = 0; r < t.length; r++) {
						const o = t[r];
						e.update(r, s);
						const i = e.getSequence().length;
						if (o.reasonAsParam === n) return;
						if (o.nextStepReasons && o.nextStepReasons.length && (O(e, o.nextStepReasons, n, s + 1), e.getSequence().length > i)) return;
						e.cut(s - 1)
					}
				}
		},
		"./src/reddit/helpers/trackers/authorHovercard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return b
			}));
			var s = n("./src/reddit/helpers/isComment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					comment: t && Object(s.a)(t) ? r.comment(e, t) : null,
					post: t ? r.post(e, t) : null,
					profile: r.profile(e),
					screen: r.screen(e)
				}),
				i = (e, t) => n => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: e
				}, o(n, t)),
				c = e => t => Object.assign({
					source: "user_hovercard",
					action: "view",
					noun: "hover_user_hovercard"
				}, o(t, e)),
				a = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "mute_dialog_in_context"
				}, o(t, e)),
				d = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "ban_dialog_in_context"
				}, o(t, e)),
				u = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "unban_user_in_context"
				}, o(t, e)),
				l = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "change_user_flair_in_context",
					userSubreddit: r.userSubreddit(t)
				}, o(t, e)),
				b = e => t => Object.assign({
					source: r.profile(t) ? "user_profile" : "user_hovercard",
					action: "click",
					noun: "create_chat"
				}, e && o(t, e))
		},
		"./src/reddit/helpers/trackers/blade.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "k", (function() {
				return O
			}));
			var s = n("./src/reddit/constants/blade.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => n => Object.assign(Object.assign({}, r.defaults(n)), {
					source: s.d.Appearance,
					action: "click",
					noun: e,
					actionInfo: r.actionInfo(n, {
						paneName: t
					}),
					subreddit: r.subreddit(n)
				}),
				i = e => o("save_style", e),
				c = e => o("cancel_style", e),
				a = e => t => ({
					source: s.d.Structure,
					action: "click",
					noun: e,
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				d = e => t => ({
					source: s.d.Appearance,
					action: "click",
					noun: e,
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				u = (e, t) => n => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: r.actionInfo(n, {
						paneName: s.g[t]
					}),
					screen: r.screen(n),
					subreddit: r.subreddit(n)
				}),
				l = e => t => ({
					source: s.h[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: r.actionInfo(t, {
						paneName: s.g[e]
					}),
					screen: r.screen(t),
					subreddit: r.subreddit(t)
				}),
				b = e => ({
					screen: r.screen(e),
					subreddit: r.subreddit(e)
				}),
				_ = () => e => Object.assign({
					source: s.d.Appearance,
					action: "view",
					noun: "blade"
				}, b(e)),
				f = e => t => Object.assign({
					source: s.a[e],
					action: "click",
					noun: s.b[e]
				}, b(t)),
				m = () => e => Object.assign({
					source: s.d.Appearance,
					action: "click",
					noun: "back"
				}, b(e)),
				p = (e, t) => Object.assign(Object.assign({}, r.defaults(e)), (e => t => Object.assign({
					source: s.d.PostFlairManagement,
					action: "click",
					noun: e
				}, b(t)))(t)(e)),
				O = e => t => ({
					source: s.d.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: r.screen(t),
					subreddit: r.subreddit(t),
					userSubreddit: r.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/emailCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					action: s.c.VIEW,
					actionInfo: r.actionInfo(t, {
						settingValue: "footer_2"
					}),
					noun: "email_collection"
				}),
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					actionInfo: r.actionInfo(t, {
						settingValue: "footer_2"
					}),
					noun: "add_email_collection"
				}),
				c = e => t => ({
					source: e,
					action: "close",
					actionInfo: r.actionInfo(t, {
						settingValue: "footer_2"
					}),
					noun: "email_collection"
				}),
				a = e => Object.assign(Object.assign({}, r.defaults(e)), {
					source: "popup",
					action: s.c.CLICK,
					actionInfo: r.actionInfo(e, {
						settingValue: "footer_2"
					}),
					noun: "save_email_collection"
				}),
				d = e => t => Object.assign(Object.assign({}, r.defaults(t)), {
					source: "popup",
					action: s.c.CLICK,
					actionInfo: r.actionInfo(t, {
						reason: e ? "1" : "0",
						settingValue: "footer_2"
					}),
					noun: "email_digest_check"
				}),
				u = e => Object.assign(Object.assign({}, r.defaults(e)), {
					source: "popup",
					action: s.c.CLICK,
					actionInfo: r.actionInfo(e, {
						settingValue: "footer_2"
					}),
					noun: "email_settings_link"
				})
		},
		"./src/reddit/helpers/trackers/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = "tooltip",
				o = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					action: "view",
					noun: "verification",
					source: e
				}),
				i = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					action: "close",
					noun: "verification",
					source: e
				}),
				c = (e, t) => n => Object.assign(Object.assign({}, Object(s.defaults)(n)), {
					action: "click",
					noun: "verification_".concat(t),
					source: e
				}),
				a = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					action: "send",
					noun: "verification_email_".concat(e),
					source: "email"
				}),
				d = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					action: "click",
					noun: "verification_email_".concat(e),
					source: "email"
				}),
				u = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					action: "confirm",
					noun: "verification_email",
					source: "email"
				})
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return b
			})), n.d(t, "clickRpanGiveAward", (function() {
				return _
			})), n.d(t, "clickAddAward", (function() {
				return f
			})), n.d(t, "clickHideAward", (function() {
				return m
			})), n.d(t, "clickConfirmHideAward", (function() {
				return p
			})), n.d(t, "clickCancelHideAward", (function() {
				return O
			})), n.d(t, "clickAwardReportFlow", (function() {
				return j
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return E
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return h
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return I
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return S
			})), n.d(t, "clickReportAward", (function() {
				return T
			})), n.d(t, "clickCancelReportAward", (function() {
				return y
			})), n.d(t, "clickConfirmReportAward", (function() {
				return A
			})), n.d(t, "viewGildModalEvent", (function() {
				return D
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return v
			})), n.d(t, "viewGiveAwardTooltipEvent", (function() {
				return P
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return R
			})), n.d(t, "clickMessageInputEvent", (function() {
				return C
			})), n.d(t, "typeMessageInputEvent", (function() {
				return w
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return k
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return L
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return x
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return N
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return U
			})), n.d(t, "clickNextButtonEvent", (function() {
				return M
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return G
			})), n.d(t, "viewSuccessAwardEvent", (function() {
				return V
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return F
			})), n.d(t, "clickFilterEvent", (function() {
				return B
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return W
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return H
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/telemetry/models/GoldPurchase.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				u = (e, t) => Object.assign({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e)
				}, t),
				l = (e, t) => Object.assign(Object.assign({}, r.defaults(e)), {
					comment: t ? r.comment(e, t) : void 0,
					correlationId: Object(a.b)(e) || Object(i.d)(i.a.GildingFlow, !1),
					post: t ? r.post(e, t) : void 0,
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				b = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				_ = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				m = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: u(e)
				}),
				p = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: u(e)
				}),
				O = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: u(e)
				}),
				g = e => (t, n) => s => Object.assign(Object.assign({}, l(s, n)), {
					source: Object(c.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: u(t)
				}),
				j = g("award_hovercard_report"),
				E = g("cancel_award_hovercard_report"),
				h = g("flag_award"),
				I = g("cancel_flag_award"),
				S = g("confirm_flag_award"),
				T = g("report_community_award"),
				y = g("cancel_report_community_award"),
				A = g("confirm_report_community_award"),
				D = (e, t, n) => s => Object.assign(Object.assign({}, l(s, n)), {
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				v = (e, t, n) => s => Object.assign(Object.assign({}, l(s, t)), {
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: u(e, n)
				}),
				P = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "view",
					noun: "tooltip"
				}),
				R = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				C = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				w = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				k = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				L = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				x = (e, t) => n => Object.assign(Object.assign({}, l(n, e)), {
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: Object.assign({
						contentType: Object(c.a)(e) ? "comment" : "post"
					}, u(t))
				}),
				N = (e, t) => n => Object.assign(Object.assign({}, l(n, e)), {
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: Object.assign({
						contentType: Object(c.a)(e) ? "comment" : "post"
					}, u(t))
				}),
				U = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				M = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				G = e => t => Object.assign(Object.assign({}, l(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				V = (e, t, n) => s => Object.assign(Object.assign({}, l(s, e)), {
					source: "give_gold",
					action: "view",
					noun: "success",
					goldPurchase: Object.assign({
						contentType: Object(c.a)(e) ? "comment" : "post",
						numberCoins: t
					}, u(n))
				}),
				F = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: s,
						numberCoins: r,
						thingId: o
					} = e;
					return e => Object.assign(Object.assign({}, l(e, o)), {
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: Object.assign({
							contentType: Object(c.a)(o) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: s,
							numberCoins: r
						}, u(t))
					})
				},
				B = e => t => Object.assign(Object.assign({}, l(t)), {
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				W = () => e => Object.assign(Object.assign({}, l(e)), {
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				H = () => e => Object.assign(Object.assign({}, l(e)), {
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/media.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, n) => o => ({
					source: "videoplayer",
					action: t,
					noun: n,
					experiment: r.experiment(o, s.Tc),
					post: r.post(o, e),
					media: r.media(o, e),
					profile: r.profile(o),
					subreddit: r.subreddit(o),
					actionInfo: r.mediaActionInfo(o, e),
					correlationId: r.videoCorrelationId()
				}),
				i = e => t => ({
					source: "videoplayer",
					action: "underrun",
					noun: "playback",
					experiment: r.experiment(t, s.Tc),
					post: r.post(t, e),
					profile: r.profile(t),
					subreddit: r.subreddit(t),
					actionInfo: r.mediaActionInfo(t, e),
					media: r.media(t, e)
				}),
				c = (e, t, n) => s => Object.assign(Object.assign({}, o(e, t, n)(s)), {
					timer: r.videoPlayerFirstFrameTimer(s, e),
					media: Object.assign(Object.assign({}, r.media(s, e)), r.videoPlayerMaxTimeServed(s, e))
				})
		},
		"./src/reddit/helpers/trackers/post.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return _
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return T
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				a = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				d = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const b = e => e && e.meta && e.meta.name && e.meta.name === s.Bb.DUPLICATES,
				_ = (e, t, n) => {
					const {
						currentPage: s
					} = e.platform, i = b(s) ? "other_discussions" : "post", c = Object(a.b)(e), _ = Object(d.c)(e, {
						postId: t
					});
					if (c) {
						const s = Object(o.a)(e),
							i = s ? s.id : void 0;
						return Object(l.a)(Object.assign(Object.assign({}, u.defaults(e)), {
							action: "view",
							actionInfo: u.actionInfo(e, {
								position: "number" == typeof n ? n + 1 : void 0,
								reason: _ ? "count_animation" : void 0
							}),
							correlationId: Object(r.c)(r.a.LinkedPosts),
							media: u.media(e, t),
							mlModel: u.listingBelowMlModel(c, i),
							noun: "post",
							post: u.post(e, t),
							profile: u.profile(e),
							source: "post_detail",
							subreddit: u.subreddit(e)
						}))
					}
					return Object(l.a)(Object.assign(Object.assign({
						source: i,
						action: "view",
						noun: "post"
					}, u.defaults(e)), {
						actionInfo: u.actionInfo(e, {
							position: n,
							reason: _ ? "count_animation" : void 0
						}),
						post: u.post(e, t),
						profile: u.profile(e),
						media: u.media(e, t),
						screen: u.screen(e),
						subreddit: u.subreddit(e)
					}))
				},
				f = (e, t) => Object(l.a)(Object.assign(Object.assign({
					source: "post",
					action: "view",
					noun: "ad"
				}, u.defaults(e)), {
					post: u.post(e, t),
					media: u.media(e, t),
					screen: u.screen(e),
					subreddit: u.subreddit(e)
				})),
				m = (e, t, n, s) => Object(l.a)(Object.assign(Object.assign({
					source: "post",
					action: "consume",
					noun: "post"
				}, u.defaults(e)), {
					actionInfo: u.actionInfo(e, {
						position: s
					}),
					post: u.post(e, t, n),
					media: u.media(e, t),
					screen: u.screen(e),
					subreddit: u.subreddit(e)
				})),
				p = (e, t, n, s) => ({
					noun: s,
					post: u.post(e, t),
					source: n
				}),
				O = (e, t, n, s) => {
					const {
						currentPage: r
					} = e.platform;
					if (b(r)) {
						const n = Object(c.m)(r && r.urlParams.partialPostId || "");
						return {
							noun: "post",
							post: u.post(e, n),
							source: "other_discussions",
							targetPost: u.post(e, t)
						}
					}
					return p(e, t, n, s)
				},
				g = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "post",
						s = arguments.length > 3 ? arguments[3] : void 0,
						o = arguments.length > 4 ? arguments[4] : void 0,
						c = arguments.length > 5 ? arguments[5] : void 0,
						d = arguments.length > 6 ? arguments[6] : void 0;
					return l => {
						const _ = u.post(l, e),
							f = u.defaults(l);
						(null == _ ? void 0 : _.promoted) && (Object(i.ab)(e), f.actionInfo.pageType && Object(i.gb)(f.actionInfo.pageType));
						const {
							currentPage: m
						} = l.platform, g = b(m) ? O(l, e, n, t) : p(l, e, n, t), j = Object(a.b)(l) || c;
						if (j) {
							const n = s ? u.getRelativePostOrder(l, e, s) : null;
							return Object.assign(Object.assign({}, f), {
								action: "click",
								actionInfo: Object.assign(Object.assign({}, f.actionInfo), {
									position: "number" == typeof n ? n + 1 : void 0,
									referralId: d
								}),
								correlationId: Object(r.c)(r.a.LinkedPosts),
								media: u.media(l, e),
								mlModel: u.listingBelowMlModel(j, o),
								noun: t,
								post: _,
								profile: u.profile(l),
								source: "post_detail",
								subreddit: u.subreddit(l)
							})
						}
						return Object.assign(Object.assign(Object.assign({}, g), f), {
							action: "click",
							actionInfo: Object.assign(Object.assign({}, f.actionInfo), {
								referralId: d
							}),
							media: u.media(l, e),
							subreddit: u.subreddit(l) || u.subredditByPostOrCommentId(l, e)
						})
					}
				},
				j = (e, t) => n => Object(l.a)(Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: t
				}, u.defaults(n)), {
					post: u.post(n, e),
					media: u.media(n, e),
					screen: u.screen(n),
					session: u.session(n),
					subreddit: u.subreddit(n)
				})),
				E = (e, t) => ({
					post: u.post(e, t),
					profile: u.profile(e)
				}),
				h = e => t => Object.assign(Object.assign({
					action: "pin",
					noun: "post",
					source: "profile"
				}, E(t, e)), u.defaults(t)),
				I = e => t => Object.assign(Object.assign({
					action: "unpin",
					noun: "post",
					source: "profile"
				}, E(t, e)), u.defaults(t)),
				S = (e, t, n) => s => Object.assign(Object.assign({
					action: "click",
					noun: "vote",
					source: "poll"
				}, u.defaults(s)), {
					poll: u.poll(s, e, !0, n),
					post: u.post(s, t),
					subreddit: u.subreddit(s),
					userSubreddit: u.userSubreddit(s)
				}),
				T = (e, t) => n => Object.assign(Object.assign({
					action: "view",
					noun: "results",
					source: "poll"
				}, u.defaults(n)), {
					poll: u.poll(n, e, !1),
					post: u.post(n, t),
					subreddit: u.subreddit(n),
					userSubreddit: u.userSubreddit(n)
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "z", (function() {
				return T
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "n", (function() {
				return R
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "m", (function() {
				return M
			})), n.d(t, "h", (function() {
				return G
			})), n.d(t, "e", (function() {
				return V
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "v", (function() {
				return W
			})), n.d(t, "g", (function() {
				return H
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/media/index.ts"),
				i = n("./src/reddit/models/PostCreationForm/index.ts"),
				c = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/postDraft.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				l = n("./src/telemetry/index.ts"),
				b = n("./src/telemetry/models/PostComposer.ts"),
				_ = n("./src/telemetry/models/PostDraft.ts");
			const f = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				m = e => Object.assign(Object.assign({
					source: "post_composer",
					action: s.c.CLICK
				}, d.defaults(e)), {
					screen: d.screen(e),
					correlationId: Object(r.c)(r.a.PostComposer)
				}),
				p = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === i.h.MARKDOWN ? "markdown" : "rte"
				},
				O = e => {
					Object(l.a)(Object.assign({
						noun: "cancel"
					}, m(e)))
				},
				g = e => {
					Object(l.a)(Object.assign({
						noun: "discard"
					}, m(e)))
				},
				j = e => {
					Object(l.a)(Object.assign(Object.assign({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e)
					}, m(e)), {
						actionInfo: d.chatPostActionInfo(e)
					}))
				},
				E = e => {
					Object(l.a)(Object.assign({
						noun: "subreddit_selector"
					}, m(e)))
				},
				h = (e, t) => {
					Object(l.a)(Object.assign({
						noun: "post_type_selector",
						postComposer: {
							type: f[t]
						}
					}, m(e)))
				},
				I = () => e => Object.assign({
					noun: "add_option"
				}, m(e)),
				S = () => e => Object.assign({
					noun: "voting_length"
				}, m(e)),
				T = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(l.a)(Object.assign({
						noun: t
					}, m(e))) : Object(l.a)(Object.assign({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						}
					}, m(e)))
				},
				y = (e, t, n) => {
					Object(l.a)(Object.assign({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: Object.assign({
							type: t
						}, p(e, t)),
						post: n ? d.post(e, n) : null
					}, m(e)))
				},
				A = (e, t) => {
					const n = t === i.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)(Object.assign({
						noun: n
					}, m(e)))
				},
				D = (e, t) => {
					Object(l.a)(Object.assign({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: Object.assign({
							type: t
						}, p(e, t))
					}, m(e)))
				},
				v = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(l.a)(Object.assign(Object.assign({}, m(e)), {
						noun: "media",
						action: s.c.REJECT,
						actionInfo: Object.assign(Object.assign({}, d.actionInfo(e)), {
							reason: JSON.stringify(n.error)
						})
					}))
				},
				P = (e, t) => {
					t.forEach(t => {
						const n = Object(o.f)(t.type);
						n && Object(l.a)(Object.assign(Object.assign({}, m(e)), {
							action: s.c.DRAG,
							noun: n
						}))
					})
				},
				R = (e, t, n) => {
					Object(l.a)(Object.assign(Object.assign({}, m(e)), {
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					}))
				},
				C = (e, t, n) => {
					Object(l.a)(Object.assign(Object.assign({}, m(e)), {
						noun: n,
						action: Object(b.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					}))
				},
				w = e => x("input", e),
				k = () => x("add"),
				L = () => x("remove"),
				x = (e, t) => n => Object.assign(Object.assign({}, m(n)), {
					noun: e,
					postComposer: {
						inputType: t,
						type: f.imageOnly
					},
					action: s.c.CLICK
				}),
				N = e => {
					Object(l.a)(Object.assign(Object.assign({}, m(e)), {
						noun: "hide_oc_description",
						action: s.c.CLICK
					}))
				},
				U = (e, t) => {
					if (t) {
						const n = d.subredditById(e, t);
						if (n) return {
							subreddit: n
						};
						const s = d.profileById(e, t);
						if (s) return {
							profile: s
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: n,
						destSubreddit: s
					} = t, r = Object(u.i)(e), o = Object(a.d)(e, {
						draftId: n
					}), i = {
						authorId: r ? r.id : void 0,
						createdTimestamp: o ? o.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case c.b.Link:
							i.type = _.DraftType.Link, i.urlLength = t.body.length;
							break;
						case c.b.Markdown:
							i.type = _.DraftType.Self, i.bodyTextLength = t.body.length;
							break;
						case c.b.RichText:
							i.type = _.DraftType.RichText, t.documentStats && (i.bodyTextLength = t.documentStats.textLength, i.numberRteImages = t.documentStats.rteImagesCount, i.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case c.b.Image:
							i.type = _.DraftType.Image;
							break;
						case c.b.Video:
							i.type = _.DraftType.Video
					}
					return Object.assign({
						postDraft: i
					}, U(e, s.id))
				},
				G = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({
						noun: "draft_load"
					}, m(e)), M(e, t)))
				},
				V = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({
						noun: t.draftId ? "draft_update" : "draft_create"
					}, m(e)), M(e, t)))
				},
				F = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({
						noun: "draft_delete"
					}, m(e)), ((e, t) => {
						const n = Object(u.i)(e),
							s = {
								authorId: n ? n.id : void 0,
								createdTimestamp: t.created,
								id: t.id,
								nsfw: t.isNSFW,
								originalContent: t.isOriginalContent,
								spoiler: t.isSpoiler,
								titleLength: t.title.length
							};
						switch (t.kind) {
							case c.b.Link:
								s.type = _.DraftType.Link, s.urlLength = (t.body || "").length;
								break;
							case c.b.Markdown:
								s.type = _.DraftType.Self, s.bodyTextLength = (t.body || "").length;
								break;
							case c.b.RichText:
								s.type = _.DraftType.RichText
						}
						return Object.assign({
							postDraft: s
						}, U(e, t.subredditId))
					})(e, t)))
				},
				B = e => {
					Object(l.a)(Object.assign(Object.assign({}, m(e)), {
						noun: "social_connect_link",
						action: s.c.CLICK
					}))
				},
				W = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({}, m(e)), {
						noun: "twitter_share_checkbox",
						action: Object(b.getToggleAction)(t)
					}))
				},
				H = (e, t, n) => {
					Object(l.a)(Object.assign(Object.assign(Object.assign({}, m(e)), M(e, t)), {
						noun: "draft_share",
						action: n ? s.c.ENABLE : s.c.DISABLE
					}))
				}
		},
		"./src/reddit/helpers/trackers/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "j", (function() {
				return m
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => Object.assign(Object.assign({}, r.defaults(e)), {
					media: r.media(e, t),
					post: r.post(e, t),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				i = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "stop",
						noun: "autoplay_initial_load"
					}))
				},
				c = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "complete",
						noun: "autoplay_initial_load"
					}))
				},
				a = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay_initial_load"
					}))
				},
				d = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay_network_load"
					}))
				},
				u = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "consume",
						noun: "autoplay"
					}))
				},
				l = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay"
					}))
				},
				b = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay_buffering"
					}))
				},
				_ = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "stop",
						noun: "autoplay"
					}))
				},
				f = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, o(e, t)), {
						source: "postlist",
						action: "stop",
						noun: "autoplay_buffering"
					}))
				},
				m = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({
						action: "view",
						source: "postlist",
						noun: "bottom"
					}, r.defaults(e)), {
						listing: r.listing(e, t),
						subreddit: r.subreddit(e)
					}))
				}
		},
		"./src/reddit/helpers/trackers/profileSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "a", (function() {
				return I
			}));
			var s = n("./node_modules/lodash/pick.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/index.ts"),
				a = n("./src/telemetry/models/PostComposer.ts");
			const d = e => Object.assign({
					source: "profile_settings"
				}, Object(i.defaults)(e)),
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
					const n = Object(i.currentProfileModelSelector)(e);
					if (n) return r()(n, ["id", "name", "type", ...t])
				},
				l = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						noun: "twitter_connect_link",
						action: o.c.CLICK
					}))
				},
				b = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						noun: "twitter_disconnect_link",
						action: o.c.CLICK
					}))
				},
				_ = (e, t) => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						noun: "display_twitter_checkbox",
						action: Object(a.getToggleAction)(t)
					}))
				},
				f = (e, t) => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						noun: "twitter_account",
						action: o.c.CLICK,
						profile: {
							id: t.id,
							name: t.username
						}
					}))
				},
				m = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, ["display_name", "about", "avatar_url", "cover_url", "nsfw", "content_visible", "communities_visible"]),
						action: o.c.VIEW,
						noun: "settings_page"
					}))
				},
				p = {
					profileIcon: "avatar",
					profileBanner: "cover"
				},
				O = (e, t) => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, ["avatar_url", "cover_url"]),
						action: "upload",
						noun: p[t]
					}))
				},
				g = (e, t) => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, []),
						action: "remove",
						noun: p[t]
					}))
				},
				j = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, ["display_name", "about", "nsfw", "content_visible", "communities_visible"]),
						action: "click",
						noun: "save_settings"
					}))
				},
				E = e => t => Object.assign(Object.assign({}, d(t)), {
					profile: u(t, []),
					action: e ? "select" : "deselect",
					noun: "content_visible"
				}),
				h = e => t => Object.assign(Object.assign({}, d(t)), {
					profile: u(t, []),
					action: e ? "select" : "deselect",
					noun: "nsfw"
				}),
				I = e => t => Object.assign(Object.assign({}, d(t)), {
					profile: u(t, []),
					action: e ? "select" : "deselect",
					noun: "active_in_communities"
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return j
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "n", (function() {
				return D
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "u", (function() {
				return M
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "t", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makePostDraftPageKey/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				i = n("./src/reddit/helpers/routeKey/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				a = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				d = n("./src/reddit/models/Comment/index.ts"),
				u = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				b = n("./src/reddit/selectors/profile.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				m = n("./src/reddit/helpers/trackers/searchResults.ts"),
				p = n("./src/reddit/selectors/postDraft.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/telemetry/index.ts");
			const j = (e, t, n, c) => {
					const {
						route: l
					} = e, {
						name: b
					} = l.meta;
					if (b) switch (b) {
						case s.Bb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: r
							} = e.match.params, a = Object(u.m)(r), l = Object(i.a)(e, t, t.posts.models[a]);
							if (!l) return;
							const b = s && Object(d.f)(s),
								{
									sortToUse: _
								} = Object(o.a)(t, a);
							Object(g.a)(y(l, a, b, n, c, _)(t));
							break
						}
						case s.Bb.INDEX:
						case s.Bb.LISTING:
						case s.Bb.MULTIREDDIT:
						case s.Bb.SUBREDDIT: {
							const r = Object(i.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: o,
								queryParams: a
							} = e.match, {
								sort: d = (r.sort ? r.sort : s.O.HOT)
							} = o, u = a.t;
							Object(g.a)(E(r.listingKey, d, n, c, u)(t));
							break
						}
						case s.Bb.TOPIC: {
							const r = Object(i.c)(e, t);
							if (!r.listingKey) return;
							const {
								params: o
							} = e.match, a = r.sort ? r.sort : s.P, {
								sort: d = a
							} = o;
							Object(g.a)(E(r.listingKey, d, n, c)(t));
							break
						}
						case s.Bb.PROFILE_OVERVIEW: {
							const r = Object(i.d)(e, t);
							if (!r) return;
							const {
								params: o,
								queryParams: a
							} = e.match, {
								sort: d = s.ub
							} = o, u = a.t;
							Object(g.a)(h(r, d, n, c, u)(t));
							break
						}
						case s.Bb.PROFILE_POSTS: {
							const r = Object(i.d)(e, t);
							if (!r) return;
							const {
								queryParams: o
							} = e.match, {
								sort: a = s.ub,
								t: d = s.Tb
							} = o;
							Object(g.a)(I(r, a, n, c, d)(t));
							break
						}
						case s.Bb.PROFILE_COMMENTS: {
							const r = Object(i.d)(e, t);
							if (!r) return;
							const {
								queryParams: o
							} = e.match, {
								sort: a = s.ub,
								t: d = s.Tb
							} = o;
							Object(g.a)(S(r, a, n, c, d)(t));
							break
						}
						case s.Bb.SETTINGS: {
							const r = e;
							Object(g.a)(N(n, c)(t)), r.match.params.page === s.Ob.Profile && Object(a.j)(t);
							break
						}
						case s.Bb.POST_CREATION:
							break;
						case s.Bb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(r.a)(e.match.params);
							if (!o) return;
							R(t, o, s, n, c);
							break
						}
						case s.Bb.SUBREDDIT_WIKI:
							Object(g.a)(V(n, c)(t));
							break;
						case s.Bb.COINS:
							Object(g.a)(C(n, c)(t)), Object(g.a)(w()(t));
							break;
						case s.Bb.PREMIUM:
							Object(g.a)(k(n, c)(t)), Object(g.a)(L()(t));
							break;
						case s.Bb.APPEAL:
							Object(g.a)(x(n, c)(t))
					}
				},
				E = (e, t, n, s, r, o) => i => {
					const {
						api: c
					} = i.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(i)), {
						actionInfo: O.actionInfo(i, {
							success: a
						}),
						customFeed: O.customFeed(i),
						listing: O.listing(i, e, {
							sort: t,
							sortTime: r
						}),
						subreddit: O.subreddit(i),
						timer: O.timer(n, s),
						userSubreddit: O.userSubreddit(i),
						adblock: O.adblock(i),
						postFlair: {
							title: o
						}
					})
				},
				h = (e, t, n, s, r) => o => {
					const i = O.listing(o, e);
					i && (i.sort = t, r && (i.sortTime = r));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return Object.assign(Object.assign({
						listing: i,
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(o)), {
						actionInfo: O.actionInfo(o, {
							success: a
						}),
						profile: O.profile(o),
						subreddit: O.subreddit(o),
						timer: O.timer(n, s),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					})
				},
				I = (e, t, n, s, r) => o => {
					const i = O.listing(o, e);
					i && (i.sort = t, r && (i.sortTime = r));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return Object.assign(Object.assign({
						listing: i,
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(o)), {
						actionInfo: O.actionInfo(o, {
							success: a
						}),
						profile: O.profile(o),
						subreddit: O.subreddit(o),
						timer: O.timer(n, s),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					})
				},
				S = (e, t, n, s, r) => o => {
					const i = O.profileComments(o, e);
					i && (i.sort = t, r && (i.sortTime = r));
					const {
						api: c
					} = o.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return Object.assign(Object.assign({
						listing: i,
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(o)), {
						actionInfo: O.actionInfo(o, {
							success: a
						}),
						profile: O.profile(o),
						subreddit: O.subreddit(o),
						timer: O.timer(n, s),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					})
				},
				T = e => (t, n) => s => {
					const r = !s.profilePrivatePage.api.error[e] && !s.profilePrivatePage.api.pending[e];
					return Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(s)), {
						actionInfo: O.actionInfo(s, {
							success: r
						}),
						profile: O.profile(s),
						subreddit: O.subreddit(s),
						timer: O.timer(n, t),
						userSubreddit: O.userSubreddit(s),
						adblock: O.adblock(s)
					})
				},
				y = (e, t, n, s, r, o) => i => {
					const {
						api: c
					} = i.commentsPage, a = !c.error[e] && !c.pending[e], d = Object(l.c)(i, {
						postId: t,
						isForceSelected: !0
					}), u = Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(i)), {
						actionInfo: O.actionInfo(i, {
							success: a,
							reason: d ? "count_animation" : void 0
						}),
						post: O.post(i, t),
						profile: O.profile(i),
						subreddit: O.subreddit(i),
						timer: O.timer(s, r),
						userSubreddit: O.userSubreddit(i),
						adblock: O.adblock(i),
						postEvent: O.postEventI13nSelector(i, {
							postId: t
						}),
						postCollection: O.postCollectionI13nSelector(i, {
							postId: t
						}),
						listing: O.listing(i, void 0, {
							sort: o
						})
					});
					return n && (u.comment = O.comment(i, n)), u
				},
				A = (e, t, n) => s => {
					const r = s.creations.api.page.fetched[e],
						o = s.platform.currentPage ? s.platform.currentPage.queryParams.source_id : void 0;
					return Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(s)), {
						actionInfo: O.actionInfo(s, {
							success: r
						}),
						post: o ? O.post(s, o) : void 0,
						subreddit: O.subreddit(s),
						timer: O.timer(t, n),
						userSubreddit: O.userSubreddit(s),
						adblock: O.adblock(s)
					})
				},
				D = (e, t) => {
					Object(g.a)(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(e)), {
						actionInfo: O.actionInfo(e, {
							success: t
						})
					}))
				},
				v = (e, t, n, s) => {
					Object(g.a)(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(e)), {
						actionInfo: O.actionInfo(e, {
							success: t
						}),
						profile: O.profileById(e, Object(b.m)(e, s)),
						subreddit: O.subredditById(e, Object(_.G)(e, n)),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e)
					}))
				},
				P = (e, t, n, s) => {
					Object(g.a)(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(e)), {
						profile: O.profileById(e, Object(b.m)(e, s)),
						subreddit: O.subredditById(e, Object(_.G)(e, n)),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e)
					}))
				},
				R = (e, t, n, s, r) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!n,
						a = Object(p.h)(e, n);
					Object(g.a)(Object.assign(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(e)), {
						actionInfo: O.actionInfo(e, {
							success: i
						}),
						subreddit: O.subreddit(e),
						timer: O.timer(s, r),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e)
					}), a ? Object(c.m)(e, a) : {}))
				},
				C = (e, t) => n => Object.assign(Object.assign({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(f.c)(f.a.GoldPayment)
				}, O.defaults(n)), {
					timer: O.timer(e, t),
					adblock: O.adblock(n)
				}),
				w = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, O.defaults(e)),
				k = (e, t) => n => Object.assign(Object.assign({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(f.c)(f.a.GoldPayment)
				}, O.defaults(n)), {
					timer: O.timer(e, t),
					adblock: O.adblock(n)
				}),
				L = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, O.defaults(e)),
				x = (e, t) => n => Object.assign(Object.assign({
					source: "appeal",
					action: "view",
					noun: "page"
				}, O.defaults(n)), {
					timer: O.timer(e, t)
				}),
				N = (e, t) => n => Object.assign(Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, O.defaults(n)), {
					timer: O.timer(e, t)
				}),
				U = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: O.subreddit(e)
				}, O.defaults(e)),
				M = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, O.defaults(e)),
				G = () => e => Object.assign({
					action: "view",
					source: "global",
					noun: "screen"
				}, O.defaults(e)),
				V = (e, t) => n => Object.assign(Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, O.defaults(n)), {
					customFeed: O.customFeed(n),
					subreddit: O.subreddit(n),
					timer: O.timer(e, t),
					userSubreddit: O.userSubreddit(n),
					adblock: O.adblock(n)
				}),
				F = () => e => Object.assign({
					source: "global",
					action: "view",
					noun: "screen"
				}, O.defaults(e)),
				B = (e, t, n, r, o, i) => c => {
					let a = !0;
					if (t.type.indexOf(s.Nb.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Nb.Subreddits) > -1 || t.type.indexOf(s.Nb.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					const d = O.paneName(c, o),
						u = O.structureType(c, o),
						l = c.platform.currentPage && c.platform.currentPage.urlParams && c.platform.currentPage.urlParams.subredditName ? O.subredditByName(c, c.platform.currentPage.urlParams.subredditName) : void 0;
					return Object.assign(Object.assign(Object.assign(Object.assign({}, m.c(c, t)), {
						source: "global",
						action: "view",
						noun: "screen",
						actionInfo: O.actionInfo(c, {
							success: a,
							paneName: d
						}),
						timer: O.timer(n, r),
						search: Object.assign(Object.assign(Object.assign({}, O.search(c, t, !0, o || void 0)), !!i && {
							originElement: i
						}), {
							queryId: Object(f.c)(f.a.SearchResults),
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						})
					}), !!i && {
						correlationId: Object(f.c)(f.a.SearchResults)
					}), {
						userPreferences: {
							hideNsfw: !c.user.prefs.over18
						}
					})
				},
				W = (e, t) => {
					Object(g.a)(Object.assign(Object.assign({
						source: "global",
						action: "view",
						noun: "screen"
					}, O.defaults(e)), {
						actionInfo: O.actionInfo(e, {
							success: t
						})
					}))
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "t", (function() {
				return p
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				u = "search_results_best",
				l = (e, t) => {
					const n = a.subreddit(e);
					return {
						screen: a.screen(e),
						subreddit: n && t && t.restrict_sr ? n : null
					}
				},
				b = (e, t) => n => {
					const s = t;
					return s.structureType = "related", Object.assign({
						action: e,
						correlationId: Object(i.c)(i.a.SearchResults),
						noun: "related_search",
						source: d,
						search: a.search(n, s)
					}, l(n))
				},
				_ = (e, t, n, s) => r => Object.assign(Object.assign({}, l(r, n)), {
					source: d,
					action: "click",
					noun: t,
					actionInfo: a.actionInfo(r, s ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: s ? a.discoveryUnit(s) : null,
					search: a.search(r, n),
					post: a.post(r, e),
					media: a.media(r, e)
				}),
				f = (e, t, n, s, r) => o => Object.assign(Object.assign({}, v(o, e, t, r, s, n)), {
					noun: "ad"
				}),
				m = (e, t, n) => r => {
					let o = !0;
					if (t.type.indexOf(s.Nb.Posts) > -1) {
						const {
							api: t
						} = r.listings.listingOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Nb.Subreddits) > -1 || t.type.indexOf(s.Nb.Users) > -1) {
						const {
							api: t
						} = r.listings.postOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					return Object.assign(Object.assign({}, l(r, t)), {
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: a.actionInfo(r, {
							success: o,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: a.discoveryUnit(n),
						search: a.search(r, t)
					})
				},
				p = (e, t) => n => ({
					action: "view",
					actionInfo: a.actionInfo(n),
					metaSearch: a.metaSearch(t),
					noun: e,
					screen: a.screen(n),
					search: a.smartSearch(n, t),
					source: d
				}),
				O = (e, t) => n => ({
					action: "click",
					actionInfo: a.actionInfo(n),
					noun: e,
					metaSearch: a.metaSearch(t),
					screen: a.screen(n),
					search: a.smartSearch(n, t),
					source: d
				}),
				g = (e, t, n) => s => Object.assign({
					source: d,
					action: "click",
					noun: a.SearchDropdownNouns.Recent,
					actionInfo: a.actionInfo(s, {
						paneName: "subreddit_dropdown",
						position: n + 1
					}),
					search: {
						query: e,
						originPageType: s.platform.currentPage ? a.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
						queryId: Object(i.c)(i.a.SearchResults)
					}
				}, E(s, t)),
				j = (e, t, n, s) => r => {
					const o = s.filter(e => e.id);
					return Object.assign({
						source: d,
						action: "click",
						noun: a.SearchDropdownNouns.Typeahead,
						actionInfo: a.actionInfo(r, {
							position: n + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: r.platform.currentPage ? a.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0,
							queryId: Object(i.c)(i.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: o.map(e => e.id),
							numberSubreddits: o.length
						}
					}, E(r, t))
				},
				E = (e, t) => {
					const n = t.isSubreddit && t.id ? a.subredditForSearch(e, t.id) : void 0,
						s = t.isProfile && t.id ? a.profileForSearch(e, t.id) : void 0,
						r = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? n || r : void 0,
						profile: t.isProfile ? s || r : void 0
					}
				},
				h = (e, t, n) => s => ({
					action: t,
					actionInfo: a.actionInfo(s),
					noun: e,
					screen: a.screen(s),
					search: a.search(s, n),
					source: u
				});
			var I;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(I || (I = {}));
			const S = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(n),
					search: a.search(n, t)
				}),
				T = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(n),
					search: a.search(n, t)
				}),
				y = (e, t) => n => ({
					action: "click",
					correlationId: Object(i.c)(i.a.SearchResults),
					noun: e ? s.Mb.ToSubreddit : s.Mb.ToGlobal,
					search: a.search(n, t),
					source: d
				}),
				A = (e, t, n, s) => r => Object.assign(Object.assign({}, l(r, n)), {
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(r, {
						relativePosition: a.getRelativePostOrder(r, t, e)
					}),
					search: Object.assign(Object.assign({}, a.search(r, n)), !!s && {
						originElement: s
					}),
					post: a.post(r, t)
				}),
				D = (e, t, n, s, r) => o => v(o, e, t, n, s, r),
				v = (e, t, n, s, r, c) => {
					const u = a.paneName(e, s),
						l = a.postRelativePosition(e, t, r, c),
						b = a.amountOfElementsBeforePost(e, n, r, c, u),
						_ = null !== l ? b + l : null,
						f = a.structureType(e, s),
						m = Object.assign(Object.assign({}, a.search(e, n, !0, s || void 0)), {
							structureType: f,
							queryId: Object(i.c)(i.a.SearchResults)
						});
					return {
						source: d,
						action: o.c.CLICK,
						noun: "post",
						actionInfo: s ? {
							pageType: a.getPageTypeFromCurrentPage(s),
							paneName: u,
							position: _,
							relativePosition: l
						} : a.actionInfo(e, {
							paneName: u,
							position: _,
							relativePosition: l
						}),
						search: m,
						post: a.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: c ? a.discoveryUnit(c) : null
					}
				},
				P = (e, t, n, s, r, o) => i => R(i, e, t, n, s, r, o),
				R = (e, t, n, s, u, l, b) => {
					if (!s) {
						s = Object(c.O)(e, {
							postId: l
						}).belongsTo
					}
					const _ = a.paneName(e, n);
					let f, m;
					if (l) {
						f = a.postRelativePosition(e, l, u, b);
						const n = a.amountOfElementsBeforePost(e, t, u, b, _);
						m = null !== f ? n + f : null
					} else {
						f = a.communityRelativePosition(e, s.id, u, b);
						const t = a.amountOfElementsBeforeCommunity(e, u, b);
						m = null !== f ? t + f : null
					}
					const p = a.structureType(e, n),
						O = Object.assign(Object.assign({}, a.search(e, t, !0, n || void 0)), {
							structureType: p,
							queryId: Object(i.c)(i.a.SearchResults)
						});
					return {
						source: d,
						action: o.c.CLICK,
						noun: s.type,
						search: O,
						subreddit: s.type === r.a.SUBREDDIT ? a.subredditForSearch(e, s.id) : void 0,
						profile: s.type === r.a.PROFILE ? a.profileForSearch(e, s.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: b ? a.discoveryUnit(b) : null,
						actionInfo: n ? {
							pageType: a.getPageTypeFromCurrentPage(n),
							paneName: _,
							position: m,
							relativePosition: f
						} : a.actionInfo(e, {
							paneName: _,
							position: m,
							relativePosition: f
						}),
						post: l ? a.post(e, l) : void 0
					}
				},
				C = (e, t) => n => Object.assign(Object.assign({}, l(n, e)), {
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(n),
					search: Object.assign(Object.assign({}, a.search(n, e)), !!t && {
						originElement: t
					}),
					subreddit: a.subreddit(n)
				}),
				w = (e, t, n, s, r) => i => Object.assign(Object.assign({}, v(i, t, n, s, e, r)), {
					action: o.c.VIEW
				}),
				k = (e, t, n, s) => r => Object.assign(Object.assign({}, l(r, n)), {
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(r, {
						relativePosition: a.getRelativePostOrder(r, t, e),
						position: a.getAbsoluteOrder(r, t, e)
					}),
					search: Object.assign(Object.assign({}, a.search(r, n)), !!s && {
						originElement: s
					}),
					post: a.post(r, t)
				}),
				L = (e, t, n) => s => Object.assign(Object.assign({}, l(s)), {
					source: d,
					action: "click",
					noun: "search_result_".concat(e),
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(s),
					search: Object.assign(Object.assign({}, a.search(s, t)), !!n && {
						originElement: n
					}),
					[e]: a[e](s)
				}),
				x = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(n),
					search: a.search(n, t)
				})
		},
		"./src/reddit/models/ApiRequestState/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var s, r = n("./node_modules/uuid/v4.js"),
				o = n.n(r);
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(s || (s = {}));
			const i = () => o()()
		},
		"./src/reddit/models/Comment/addProfileImgParam.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(s.a)(e, {
				profile_img: !0
			})
		},
		"./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(s.a)(e, {
				emotes_as_images: !0
			})
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const n = this.sequence.slice(0, t);
					n.push(e), this.sequence = n
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
		},
		"./src/reddit/models/Vote/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "d", (function() {
					return o
				})), n.d(t, "c", (function() {
					return i
				})), n.d(t, "e", (function() {
					return c
				})),
				function(e) {
					e[e.downvoted = -1] = "downvoted", e[e.notVoted = 0] = "notVoted", e[e.upvoted = 1] = "upvoted"
				}(s || (s = {}));
			const r = (e, t) => e.voteState === t ? s.notVoted : t,
				o = e => {
					switch (e) {
						case !0:
							return s.upvoted;
						case !1:
							return s.downvoted;
						default:
							return s.notVoted
					}
				},
				i = (e, t) => {
					const n = e.voteState === t,
						s = n ? 0 : t,
						r = n ? e.score - t : e.score - e.voteState + t;
					return Object.assign(Object.assign({}, e), {
						voteState: s,
						score: r
					})
				},
				c = e => "UP" === e ? s.upvoted : "DOWN" === e ? s.downvoted : s.notVoted
		},
		"./src/reddit/reducers/sidebarPromotedPosts/models/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./src/reddit/actions/ads/constants.ts");
			! function(e) {
				e[e.FRONTPAGE = 0] = "FRONTPAGE", e[e.COMMENTS_OVERLAY = 1] = "COMMENTS_OVERLAY", e[e.COMMENTS = 2] = "COMMENTS", e[e.SUBREDDIT = 3] = "SUBREDDIT", e[e.MULTIREDDIT = 4] = "MULTIREDDIT", e[e.SEARCH_RESULTS = 5] = "SEARCH_RESULTS"
			}(s || (s = {}));
			const o = {};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.s:
					case r.p: {
						const n = t.payload;
						return Object.assign(Object.assign({}, e), n)
					}
					case r.q:
					case r.s:
						return e;
					case r.u:
						return o;
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/activeModalId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => e.activeModalId,
				r = e => t => t.activeModalId === e
		},
		"./src/reddit/selectors/brandSafety.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/isFakeSubreddit/index.ts"),
				o = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				i = n("./src/reddit/models/WhitelistStatus/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const d = new Set([s.O.NEW, s.O.RISING, s.O.CONTROVERSIAL]),
				u = e => e.brandSafety.hasBrandSafetyBeenAssessed,
				l = (e, t) => {
					let {
						postId: n
					} = t;
					const s = Object(c.O)(e, {
							postId: n
						}),
						r = Object(c.bb)(e, {
							postId: n
						});
					return !(!s || !r) && (r.wls === i.b.ALL_ADS && !s.isNSFW)
				},
				b = e => e.brandSafety.isViewSafe,
				_ = e => !e.brandSafety.isViewSafe,
				f = (e, t) => {
					const {
						listingName: n,
						pageLayer: s
					} = t, c = Object(a.B)(e, {
						subredditName: n
					}), u = Object(o.b)(e, {
						pageLayer: s
					});
					return (!u || !d.has(u)) && (!(c || !Object(r.a)(n)) || !!c && c.wls === i.b.ALL_ADS)
				}
		},
		"./src/reddit/selectors/emailCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(s.a)(o.I, o.l, o.y, (e, t, n) => e && !t && !n),
				c = e => (() => 0 === Object(r.j)())() && i(e)
		},
		"./src/reddit/selectors/experiments/avatarsInComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = Object(s.a)(i.I, i.H, (e, t) => e || t),
				a = Object(s.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: r.i
				}), e => e === r.k.Active),
				d = Object(s.a)(i.I, i.H, (e, t) => !e && !t),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: r.j
				}), e => e === r.k.Active),
				l = Object(s.a)(a, u, (e, t) => e || t)
		},
		"./src/reddit/selectors/experiments/econ/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.nb),
				i = Object(r.a)(s.ob)
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => t => {
				const n = Object(r.c)(t, {
					experimentEligibilitySelector: r.a,
					experimentName: e
				});
				return !(!n || Object(s.ad)(n))
			}
		},
		"./src/reddit/selectors/experiments/listingBelow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				u = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(a.c, u.H, u.I, d.g, d.f, c.a, (e, t, n, s, o, i) => !e && !t && !n && s && !!o && !o.isNSFW && !!i && Object(r.c)(i.created / 1e3) < 30),
				b = e => Object(i.c)(e, {
					experimentEligibilitySelector: l,
					experimentName: o.zb,
					expEventOverride: !1
				}),
				_ = e => e === o.Eb.SearchPostToPost || e === o.Eb.NlpPostToPost1 || e === o.Eb.NlpPostToPost2 || e === o.Eb.NlpPostToPost3
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/reddit/components/CountAnimation/helpers.ts"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts");
			const a = e => o.d.actionBarAnimationExperiment(e) && !Object(c.c)(e) && (e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: i.a,
						experimentName: r.cc
					}) === r.jc.BarAnimation
				})(e),
				d = (e, t) => {
					let {
						postId: n,
						isActionBarAnimationEnabled: r,
						isForceSelected: o
					} = t;
					if (!n || Object(c.c)(e) || !r) return;
					const i = e.posts.models[n];
					if (!i) return;
					if (o) return Object(s.f)(i) && Object(s.g)(i) && Object(s.a)(i.score) || void 0;
					const a = e.actionBarCountAnimation.upvoteDiscount[n];
					return null == a ? void 0 : a.totalDiscount
				},
				u = (e, t) => {
					let {
						postId: n,
						isActionBarAnimationEnabled: r,
						isForceSelected: o
					} = t;
					if (!n || Object(c.c)(e) || !r) return;
					const i = e.posts.models[n];
					if (!i) return;
					if (o) return Object(s.f)(i) && Object(s.e)(i) && Object(s.a)(i.numComments) || void 0;
					const a = e.actionBarCountAnimation.commentDiscount[n];
					return a && a.totalDiscount
				},
				l = (e, t) => {
					let {
						postId: n,
						isForceSelected: s
					} = t;
					return a(e) && !(!u(e, {
						postId: n,
						isActionBarAnimationEnabled: !0,
						isForceSelected: s
					}) && !d(e, {
						postId: n,
						isActionBarAnimationEnabled: !0,
						isForceSelected: s
					}))
				}
		},
		"./src/reddit/selectors/experiments/topPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return b
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const a = Object(s.a)(c.I, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(o.y)(n)
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(o.K)(n)
				}, (e, t, n) => !e && !t && n),
				d = Object(s.a)((e, t) => Object(i.c)(e, {
					experimentName: r.Z,
					experimentEligibilitySelector: e => a(e, t)
				}), e => e),
				u = e => e === r.Qc.NoCommunityWidgets,
				l = e => e === r.Qc.NoRulesModerators,
				b = e => e === r.Qc.RelatedPostsDu
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "d", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/econ/predictions.ts");
			const a = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.T)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				u = e => e.focusedVerticals.components.dismissed,
				l = [],
				b = (e, t) => {
					const n = _(e, t);
					if (!n) return l;
					const s = Object(o.X)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : l
				},
				_ = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.T)(e, {
						subredditId: n
					}) : null
				},
				f = (e, t, n, s, o) => {
					const i = o.find(e => e <= t) || -1,
						c = o.find(e => e > t) || 1 / 0;
					return t !== c && t !== i && (!(i + n > t) && (!(t + n > c) && !((e, t, n) => {
						const s = n[t - 1],
							o = n[t],
							i = o && Object(r.O)(e, {
								postId: s
							}) || null,
							c = o && Object(r.O)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || c && c.isSponsored
					})(e, t, s)))
				},
				m = [3],
				p = (e, t, n) => {
					let {
						listingKey: s
					} = n;
					const o = t.slice().sort();
					let i = -1;
					const a = Object(r.H)(e, {
							listingKey: s,
							predictionsEnabled: Object(c.a)(e)
						}),
						d = [];
					return m.forEach(t => {
						let n = i + t;
						if (!(n >= a.length)) {
							for (; n < a.length && !f(e, n, t, a, o);) n += 1;
							n < a.length && (d.push(n), i = n)
						}
					}), d
				},
				O = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				j = e => e.focusedVerticals.category,
				E = e => e.focusedVerticals.lastLoadedEnv,
				h = e => {
					const t = Object(i.H)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			const s = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				i = e => e.gild.isIframed,
				c = e => e.gild.message,
				a = e => e.gild.api.pending,
				d = e => e.gild.api.error,
				u = e => e.gild && e.gild.giveAwardTooltipThingId
		},
		"./src/reddit/selectors/header.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.header.isSubscriptionsDropdownOpen
		},
		"./src/reddit/selectors/imageUploads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/reddit/models/Image/index.tsx");
			const r = e => e.imageUploads,
				o = (e, t) => {
					let {
						id: n
					} = t;
					return r(e)[n]
				},
				i = (e, t) => {
					const n = r(e),
						o = [];
					for (const r in n) {
						const e = n[r];
						e.kind === s.b.TempUploaded && e.context === t && o.push(e)
					}
					return o
				}
		},
		"./src/reddit/selectors/interceptedAction.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.interceptedAction
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "b", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				o = n("./src/lib/objectSelector/index.ts");
			const i = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(o.a)((e, t) => {
					const {
						pageName: n,
						page: s
					} = t, r = i(0, t);
					if (!e.modQueue[n] || !e.modQueue[n].itemOrder[r] || !e.modQueue[n].itemOrder[r][s]) return;
					const o = e.modQueue[n].itemOrder[r][s];
					return o ? o.map(t => e.posts.models[t] || e.comments.models[t]) : []
				}),
				a = (e, t) => {
					const {
						pageName: n
					} = t;
					return !e.modQueue[n] || !e.modQueue[n].api || e.modQueue[n].api.pending
				},
				d = (e, t) => {
					const n = i(0, t);
					return e.modQueue[t.pageName].loadMore[n]
				},
				u = e => Object.keys(e.modQueue.bulkAction.selectedItems),
				l = e => e.modQueue.bulkAction.api.pending,
				b = e => e.modQueue.moderatedCommunitiesOrder.data,
				_ = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === s.Bb.MODERATION_PAGES || t.meta.name === s.Bb.MODQUEUE_PAGES)
				}
		},
		"./src/reddit/selectors/notificationBanner.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => t => t.notificationBannerId === e
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Bb.MODERATION_PAGES),
				i = e => e.user.prefs.reduceAnimationsFromAwards
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit.30735b57742015830702.js.map