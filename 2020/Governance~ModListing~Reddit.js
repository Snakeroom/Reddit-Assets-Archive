// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit.dd072f2d86274a4beb70.js
// Retrieved at 10/19/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
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
			e.exports = JSON.parse('{"id":"a9c3480dea2f"}')
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
				return o
			})), n.d(t, "d", (function() {
				return r
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
				return O
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "s", (function() {
				return S
			}));
			var s;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.muted = "muted"
			}(s || (s = {}));
			const o = .01,
				r = .3,
				i = .5,
				c = .8,
				a = 1,
				d = 0,
				u = 1e3,
				l = 100,
				b = 2e3,
				_ = 3e3,
				f = 5e3,
				O = 15e3,
				m = [.01, .3, .5, 1],
				p = [.01, .5, .8, 1, {
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
				E = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "value";
					const s = Object.entries(t).reduce((t, s) => {
						let [o, r] = s;
						return t[o] = r[e] ? r[e][n] : void 0, t
					}, {});
					return s
				},
				g = e => e.map(e => e && "object" == typeof e ? e.key : Math.floor(100 * e)),
				j = g(m),
				h = g(p),
				S = (e, t) => {
					let n, s = e.source,
						o = e.callToAction;
					if (t) {
						s = {
							displayText: t.displayAddress || t.displayUrl || t.outboundUrl,
							outboundUrl: t.outboundUrl,
							url: t.outboundUrl
						}, n = t.caption, o = t.callToAction
					}
					return {
						source: s,
						caption: n,
						callToAction: o
					}
				}
		},
		"./src/lib/ads/store.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
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
			let o = {};
			const r = e => (() => o)()[e],
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
				d = (e, t, n, r) => {
					const i = Date.now(),
						c = n ? "videoThresholdData" : "thresholdData";
					Object(s.r)(t).forEach(t => {
						const n = o[e][c][t];
						if (r) n.timeEntered = n.timeEntered || i;
						else if (n.timeEntered) {
							const e = i - n.timeEntered;
							n.totalTime += e, n.maxContinuousTime = Math.max(n.maxContinuousTime, e), n.timeEntered = null
						}
					})
				},
				u = (e, t, n) => {
					const s = o[e].videoAds[n];
					s.value = t, s.timeUpdated = s.timeUpdated && s.value === t ? s.timeUpdated : Date.now()
				},
				l = e => (function(t) {
					o[t] || (o[t] = c());
					for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) s[r - 1] = arguments[r];
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
				o = n.n(s),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = n.n(r);
			t.a = (e, t) => {
				const n = i.a.parse(e, !0);
				return n.search = void 0, n.query = Object.assign({}, o()(n.query, t)), i.a.format(n)
			}
		},
		"./src/lib/formatApiError/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");

			function r(e, t) {
				return e ? e.fields && e.fields.length ? e.fields.map(e => e.msg).join(", ") : e.type && i[e.type] ? i[e.type]() : 401 === t ? s.fbt._("There was an authentication error", null, {
					hk: "2KZTRv"
				}) : s.fbt._("Something went wrong", null, {
					hk: "3i6szH"
				}) : ""
			}
			const i = {
				[o.j]: () => s.fbt._("you're not allowed to do that", null, {
					hk: "1jGKQw"
				}),
				[o.H]: () => s.fbt._("GIF size must be less than {max file size}MB", [s.fbt._param("max file size", Math.floor(o.R / o.ab).toString())], {
					hk: "1zzsdM"
				}),
				[o.K]: () => s.fbt._("Image size must be less than {max file size}MB", [s.fbt._param("max file size", Math.floor(o.T / o.ab).toString())], {
					hk: "3H6bF8"
				}),
				[o.M]: () => s.fbt._("Sorry, we accept only images (.png, .jpeg, .gif) and videos (.mp4, .mov)", null, {
					hk: "1hw868"
				}),
				[o.Yb]: () => s.fbt._("Video size must be less than {max file size}GB", [s.fbt._param("max file size", (o.Y / o.ab / 1024).toFixed(1))], {
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
				o = n("./src/lib/loadWithRetries/index.ts"),
				r = n("./src/lib/makeRequest/index.ts");
			const i = (e, t) => {
				const n = new FormData;
				return t.fields.forEach(e => {
					e.value && n.append(e.name, e.value)
				}), n.append("file", e), n
			};
			t.a = async (e, t, c) => {
				const a = (() => Object(o.a)(() => n.e("vendors~xml2js").then(n.t.bind(null, "./node_modules/xml2js/lib/xml2js.js", 7))).then(e => e.default))(),
					d = await Object(r.b)({
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
				return o
			})), n.d(t, "o", (function() {
				return r
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
				return O
			})), n.d(t, "w", (function() {
				return m
			})), n.d(t, "r", (function() {
				return p
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "l", (function() {
				return A
			}));
			const s = "AD_BRAND_SAFETY_STATUS_RECEIVED",
				o = "FETCH_COMMENTS_PAGE_ADS_COMPLETED",
				r = "FETCH_COMMENTS_PAGE_ADS_FAILED",
				i = "FETCH_SIDEBAR_PROMOTED_POSTS_COMPLETED",
				c = "FETCH_SIDEBAR_PROMOTED_POSTS_FAILED",
				a = "REFRESH_SIDEBAR_PROMOTED_POST_COMPLETED",
				d = "REFRESH_SIDEBAR_PROMOTED_POST_FAILED",
				u = "RESET_SIDEBAR_PROMOTED_POSTS",
				l = "AD__IMPRESSION",
				b = "AD__CLICK",
				_ = "AD__VIEWABLE_IMPRESSION",
				f = "VENDOR_FULLY_IN_VIEW",
				O = "VENDOR_FULLY_IN_VIEW_5_SECS",
				m = "VENDOR_FULLY_IN_VIEW_15_SECS",
				p = "GROUPM_VIEWABLE",
				E = "AD__VIDEO_VIEWABLE",
				g = "AD__VIDEO_FULLY_VIEWABLE",
				j = "AD__VIDEO_GROUP_M_VIEWABLE",
				h = "AD__VIDEO_FULLY_VIEWABLE_50",
				S = "AD__VIDEO_STARTED",
				I = "AD__VIDEO_PLAYED_WITH_SOUND",
				T = "AD__VIDEO_PLAYED_EXPANDED",
				y = "AD__VIDEO_WATCHED_PERCENT",
				A = "AD__VIDEO_WATCHED_SECONDS"
		},
		"./src/reddit/actions/ads/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "a", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/constants/posts.ts"),
				r = n("./src/config.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts");
			const a = async e => {
				let {
					context: t,
					count: n,
					subreddit: s,
					forceAd: o
				} = e;
				const a = {
					count: n
				};
				return s && (a.subreddit = s), o && (a.sidebar_ad = o), Object(c.a)(t, {
					type: "json",
					endpoint: "".concat(r.a.gatewayUrl, "/desktopapi/v1/sidebar_ads"),
					method: i.db.POST,
					data: a
				})
			};
			var d = n("./src/reddit/helpers/adCount/index.ts"),
				u = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				l = n("./src/reddit/selectors/brandSafety.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/actions/ads/constants.ts");
			const O = Object(s.a)(f.a),
				m = e => async (t, n) => {
					const s = n();
					Object(l.c)(s) && Object(l.d)(s) === e.isViewSafe || t(O(e))
				}, p = Object(s.a)(f.p), E = Object(s.a)(f.q), g = Object(s.a)(f.s), j = Object(s.a)(f.t), h = (Object(s.a)(f.u), Object(s.a)(f.n)), S = (Object(s.a)(f.o), e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					var i;
					const c = n(),
						l = Object(b.q)(c),
						f = Object(d.b)(c, e),
						O = f.length;
					if (0 === O) return;
					switch (e) {
						case u.a.COMMENTS:
						case u.a.COMMENTS_OVERLAY: {
							const e = Object(b.n)(c, {
								page: c.platform.currentPage
							});
							if (!e || e.belongsTo.type === o.a.PROFILE) return;
							break
						}
						case u.a.FRONTPAGE:
						case u.a.MULTIREDDIT:
						case u.a.SEARCH_RESULTS:
						case u.a.SUBREDDIT: {
							const e = c.listings.activeKey,
								t = Object(_.T)(c, {
									listingKey: e
								});
							if (!t || !t.length) return;
							break
						}
						default:
							return void 0
					}
					const m = Object(b.e)(c);
					let g;
					if ((g = await a({
							context: r(),
							count: O,
							subreddit: m || void 0,
							forceAd: null === (i = null == l ? void 0 : l.sidebar_ad) || void 0 === i ? void 0 : i.split(",")
						})).body && g.body.length) {
						const e = g.body,
							n = {};
						for (let t = 0; t < e.length; t++) n[f[t]] = e[t];
						t(p(n))
					} else t(E(g.error))
				}), I = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					var r;
					const i = n(),
						c = Object(b.q)(i),
						d = await a({
							context: o(),
							count: 1,
							forceAd: null === (r = null == c ? void 0 : c.sidebar_ad) || void 0 === r ? void 0 : r.split(",")
						});
					d.body && d.body.length ? t(g({
						[e]: d.body[0]
					})) : t(j(d.error))
				}, T = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const a = n(),
						d = Object(b.q)(a),
						u = Object(b.e)(a),
						l = await (async e => {
							let {
								context: t,
								count: n,
								postId: s,
								subredditName: o,
								forceAd: a
							} = e;
							const d = {
								count: n,
								subreddit: o,
								post_id: s,
								comments_ad: a
							};
							return Object(c.a)(t, {
								type: "json",
								endpoint: "".concat(r.a.gatewayUrl, "/desktopapi/v1/comments_page_ads"),
								method: i.db.POST,
								data: d
							})
						})({
							context: o(),
							count: 1,
							postId: e,
							subredditName: u,
							forceAd: d ? d.comments_ad : void 0
						});
					if (l.body && l.body.length) return t(h(l.body)), l.body[0].id;
					t(E(l.error))
				}
		},
		"./src/reddit/actions/apiRequestState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
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
				o = n("./src/reddit/models/ApiRequestState/index.ts");
			const r = "API_REQUEST_STATE__STARTED",
				i = "API_REQUEST_STATE__COMPLETED",
				c = "API_REQUEST_STATE__FAILED",
				a = "API_REQUEST_STATE__RELEASED";

			function d(e) {
				return {
					type: r,
					payload: {
						apiRequestStatus: o.a.Pending,
						apiRequestId: e
					}
				}
			}

			function u(e) {
				return {
					type: i,
					payload: {
						apiRequestStatus: o.a.Complete,
						apiRequestId: e
					}
				}
			}

			function l(e, t) {
				return {
					type: c,
					payload: {
						apiRequestStatus: o.a.Failed,
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
				return O
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/interceptedAction.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/components/Settings/modalIds.ts"),
				c = n("./src/reddit/constants/actions.ts"),
				a = n("./src/reddit/selectors/interceptedAction.ts");
			const d = "CHANGE_USERNAME_TOOLTIP_CLOSED",
				u = "CHANGE_USERNAME_TOOLTIP_OPENED",
				l = "SAVE_USERNAME_SUCCESS",
				b = Object(s.a)(d),
				_ = (Object(s.a)(u), Object(s.a)(l)),
				f = e => async (t, n) => {
					e && t(Object(o.c)(e)), t(Object(r.h)(i.e))
				}, O = (e, t) => async (n, s) => {
					const r = Object(a.a)(s());
					if (n(_({
							username: e
						})), r) {
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
						})(r, e, t)), n(Object(o.d)())
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
				o = n("./src/chat/reducers/subscribe.ts"),
				r = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts");
			let c;
			let a;
			const d = "CHAT__INITED",
				u = Object(i.a)(d),
				l = async (e, t, i) => a ? {
					chatStore: a,
					firstInit: !1
				} : (a = await (async (e, t, s) => {
					const o = Date.now(),
						i = await Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/initializer.ts"))).then(e => e.default);
					return (await i(t(), o, s)).store
				})(0, t, i), Object(s.b)(a), await (async (e, t, s) => {
					if (!c) {
						const i = (await Object(r.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/reddit/actions/chat/proxy.ts"))).then(e => e.default))(t, s),
							a = Object(o.b)(e, i);
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
				return O
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				r = n("./src/chat/constants/container.ts"),
				i = n("./src/chat/customMiddleware/containerSize.ts"),
				c = n("./src/reddit/actions/chat/init.ts"),
				a = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const d = () => Object(o.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/actions/meta.ts"))).then(e => e.setExternalData),
				u = () => Object(o.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/actions/container.ts"))).then(e => e.sizeChanged);
			async function l(e, t, n, o) {
				const [{
					chatStore: i,
					firstInit: l
				}, b] = await Promise.all([Object(c.c)(e, t, n), u()]), _ = t(), f = await d(), O = Object(a.h)(_, o);
				i.dispatch(f(O)), i.getState().container.size !== r.a.EMBED && i.dispatch(b(r.a.EMBED)), !l && i.dispatch(Object(s.c)(n))
			}
			const b = (e, t) => async (n, s) => {
				await l(n, s, e, t)
			}, _ = () => async (e, t) => Promise.all([Object(c.c)(e, t), u()]).then(e => {
				let [{
					chatStore: t,
					firstInit: n
				}, s] = e;
				t.getState().container.size !== r.a.EMBED || n ? t.dispatch(s(r.a.EMBED)) : t.dispatch(s(r.a.HIDDEN))
			}), f = (e, t) => async (s, r) => {
				const i = (await (() => Object(o.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/helpers/urls/index.ts"))).then(e => e.channelUserIdUrl))())(e);
				await l(s, r, i, t)
			}, O = e => {
				let {
					channelId: t,
					subredditName: s,
					channelUrl: r
				} = e;
				return async (e, i) => {
					if (!r && t) {
						const e = await (() => Object(o.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/helpers/urls/index.ts"))).then(e => e.channelUrl))();
						r = e(t, s)
					}
					if (!r) throw new Error("Please specify channelUrl or channelId (subredditName is optional)");
					await l(e, i, r)
				}
			}, m = e => async (t, s) => {
				if (!c.b) return;
				const r = await (() => Object(o.a)(() => Promise.all([n.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), n.e("vendors~Chat~RedesignChat"), n.e("Chat~RedesignChat"), n.e("RedesignChat")]).then(n.bind(null, "./src/chat/actions/theme.ts"))).then(e => e.switchTheme))();
				c.b.dispatch(r(e))
			}, p = () => async (e, t) => {
				const n = t(),
					s = n.user.account && n.user.account.id || "unknown";
				Object(i.c)(s) && Object(c.c)(e, t)
			}
		},
		"./src/reddit/actions/emailVerificationTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const o = "EMAIL_VERIFICATION_TOOLTIP_TOGGLED",
				r = Object(s.a)(o)
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const o = "EMBEDS__UNLOADABLE",
				r = "EMBEDS__LOADABLE",
				i = Object(s.a)(o),
				c = Object(s.a)(r)
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return T
			}));
			var s, o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/focusedVerticals/constants.ts"),
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
			const _ = Object(o.a)(r.g),
				f = Object(o.a)(r.e),
				O = Object(o.a)(r.h),
				m = Object(o.a)(r.c),
				p = Object(o.a)(r.f),
				E = Object(o.a)(r.j),
				g = Object(o.a)(r.i),
				j = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const r = t(),
						a = Object(l.e)(r),
						p = Object(l.d)(r),
						E = Object(b.H)(r);
					if (a || !p) return;
					e(O());
					let g = !1;
					try {
						const t = E ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(i.a)(e, Object.assign(Object.assign({}, c), {
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							})))(o(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (h(t)) {
								if (S(t)) {
									e(m({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), g = !0
								} else if (I(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: o,
											category: r
										} = n.focusRecommendations[0],
										i = [s, o],
										c = Object(u.d)(i),
										a = Object(d.b)(i),
										l = Object(u.c)(s),
										b = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [o.id],
											subreddits: c,
											subredditsAboutInfo: a,
											subredditTopContent: l,
											category: r,
											lastLoadedEnv: "client"
										};
									e(_(b)), g = !0
								}
							} else g = !1
						}
					} catch (j) {
						g = !1
					}
					g || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, h = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, S = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !S(e) && s === a.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, T = () => async (e, t, n) => {
					const s = t(),
						o = Object(l.g)(s);
					return Object(l.f)(s) || null === o || "client" === o ? e(j()) : "server" === o ? e(p({
						lastLoadedEnv: "client"
					})) : void 0
				}
		},
		"./src/reddit/actions/gold/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "N", (function() {
				return s
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "M", (function() {
				return r
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
				return O
			})), n.d(t, "I", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "O", (function() {
				return E
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "ub", (function() {
				return R
			})), n.d(t, "ib", (function() {
				return v
			})), n.d(t, "A", (function() {
				return C
			})), n.d(t, "E", (function() {
				return P
			})), n.d(t, "z", (function() {
				return w
			})), n.d(t, "B", (function() {
				return k
			})), n.d(t, "D", (function() {
				return L
			})), n.d(t, "C", (function() {
				return N
			})), n.d(t, "F", (function() {
				return x
			})), n.d(t, "s", (function() {
				return U
			})), n.d(t, "w", (function() {
				return M
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "t", (function() {
				return F
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "u", (function() {
				return W
			})), n.d(t, "hb", (function() {
				return H
			})), n.d(t, "gb", (function() {
				return q
			})), n.d(t, "x", (function() {
				return Y
			})), n.d(t, "y", (function() {
				return K
			})), n.d(t, "G", (function() {
				return z
			})), n.d(t, "mb", (function() {
				return Q
			})), n.d(t, "lb", (function() {
				return J
			})), n.d(t, "jb", (function() {
				return X
			})), n.d(t, "kb", (function() {
				return Z
			})), n.d(t, "xb", (function() {
				return $
			})), n.d(t, "wb", (function() {
				return ee
			})), n.d(t, "vb", (function() {
				return te
			})), n.d(t, "cb", (function() {
				return ne
			})), n.d(t, "bb", (function() {
				return se
			})), n.d(t, "ab", (function() {
				return oe
			})), n.d(t, "V", (function() {
				return re
			})), n.d(t, "W", (function() {
				return ie
			})), n.d(t, "U", (function() {
				return ce
			})), n.d(t, "Q", (function() {
				return ae
			})), n.d(t, "R", (function() {
				return de
			})), n.d(t, "P", (function() {
				return ue
			})), n.d(t, "T", (function() {
				return le
			})), n.d(t, "S", (function() {
				return be
			})), n.d(t, "H", (function() {
				return _e
			})), n.d(t, "Z", (function() {
				return fe
			})), n.d(t, "Y", (function() {
				return Oe
			})), n.d(t, "X", (function() {
				return me
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "nb", (function() {
				return Ee
			})), n.d(t, "ob", (function() {
				return ge
			})), n.d(t, "pb", (function() {
				return je
			})), n.d(t, "qb", (function() {
				return he
			})), n.d(t, "rb", (function() {
				return Se
			})), n.d(t, "sb", (function() {
				return Ie
			})), n.d(t, "tb", (function() {
				return Te
			}));
			const s = "GIVE_PREMIUM__OPEN_GIVE_PREMIUM_MODAL",
				o = "GIVE_PREMIUM__CLOSE_GIVE_PREMIUM_MODAL",
				r = "GILD__OPEN_GILD_MODAL",
				i = "GILD__CLOSE_GILD_MODAL",
				c = "GILD__OPEN_FRAMED_GILD",
				a = "COMMUNITY_AWARDS__CREATE_AWARD_PENDING",
				d = "COMMUNITY_AWARDS__CREATE_AWARD_SUCCESSFUL",
				u = "COMMUNITY_AWARDS__CREATE_AWARD_FAILED",
				l = "COMMUNITY_AWARDS__REMOVE_PENDING",
				b = "COMMUNITY_AWARDS__REMOVE_SUCCESSFUL",
				_ = "COMMUNITY_AWARDS__REMOVE_FAILED",
				f = "COMMUNITY_AWARDS__MANAGEABLE_AWARDS_PENDING",
				O = "COMMUNITY_AWARDS__MANAGEABLE_AWARDS_LOADED",
				m = "COMMUNITY_AWARDS__MANAGEABLE_AWARDS_FAILED",
				p = "COMUNITY_AWARDS__BLACKLIST_STATUS_LOADED",
				E = "COMMUNITY_AWARDS__OPTIONAL_AWARDS_LOADED",
				g = "COMMUNITY_AWARDS__DISABLE_PENDING",
				j = "COMMUNITY_AWARDS__DISABLE_SUCCESSFUL",
				h = "COMMUNITY_AWARDS__DISABLE_FAILED",
				S = "COMMUNITY_AWARDS__ENABLE_PENDING",
				I = "COMMUNITY_AWARDS__ENABLE_SUCCESSFUL",
				T = "COMMUNITY_AWARDS__ENABLE_FAILED",
				y = "AWARD_SHEET__INFO_PENDING",
				A = "AWARD_SHEET__INFO_LOADED",
				D = "AWARD_SHEET__INFO_FAILED",
				R = "COMMUNITY_AWARDS__USABLE_AWARDS_LOADED",
				v = "COINS__SUBREDDIT_LOCKED_COINS_LOADED",
				C = "GIVE_PREMIUM__GIVE_PREMIUM_PENDING",
				P = "GIVE_PREMIUM__GIVE_PREMIUM_SUCCESSFUL",
				w = "GIVE_PREMIUM__GIVE_PREMIUM_FAILED",
				k = "GIVE_PREMIUM__SELECT_PACKAGE",
				L = "GIVE_PREMIUM__SET_IS_ANONYMOUS",
				N = "GIVE_PREMIUM__SET_INCLUDE_MESSAGE",
				x = "GIVE_PREMIUM__UPDATE_MESSAGE",
				U = "GILD__SET_IS_ANONYMOUS",
				M = "GILD__UPDATE_MESSAGE",
				V = "GILD__TRIGGER_LOADER",
				G = "GILD__GILD_PENDING",
				F = "GILD__GILD_SUCCESSFUL",
				B = "GILD__GILD_FAILED",
				W = "GILD__GILD_THING",
				H = "GIVE_AWARD__SELECT_AWARD",
				q = "AWARDS__REPORT_AWARD",
				Y = "AWARDS__GIVE_AWARD_TOOLTIP_CLOSED",
				K = "AWARDS__GIVE_AWARD_TOOLTIP_OPENED",
				z = "AWARDS__HIDE_AWARD",
				Q = "POWERUPS__SUBREDDIT_POWERUPS_PENDING",
				J = "POWERUPS__SUBREDDIT_POWERUPS_LOADED",
				X = "POWERUPS__SUBREDDIT_POWERUPS_FAILED",
				Z = "POWERUPS__SUBREDDIT_POWERUPS_FULL_LOADED",
				$ = "POWERUPS__USER_POWERUPS_PENDING",
				ee = "POWERUPS__USER_POWERUPS_LOADED",
				te = "POWERUPS__USER_POWERUPS_FAILED",
				ne = "POWERUPS__REDDITOR_POWERUPS_PENDING",
				se = "POWERUPS__REDDITOR_POWERUPS_LOADED",
				oe = "POWERUPS__REDDITOR_POWERUPS_FAILED",
				re = "POWERUPS__REALLOCATE_PENDING",
				ie = "POWERUPS__REALLOCATE_SUCCESSFUL",
				ce = "POWERUPS__REALLOCATE_FAILED",
				ae = "POWERUPS__CANCEL_PAYMENT_PENDING",
				de = "POWERUPS__CANCEL_PAYMENT_SUCCESSFUL",
				ue = "POWERUPS__CANCEL_PAYMENT_FAILED",
				le = "POWERUPS__PAYMENT_COMPLETED",
				be = "POWERUPS_PURCHASE__POWERUPS_COUNT_CHANGED",
				_e = "POWERUPS_PURCHASE__IS_ANONYMOUS_CHANGED",
				fe = "PRODUCT_OFFERS__OFFERS_PENDING",
				Oe = "PRODUCT_OFFERS__OFFERS_LOADED",
				me = "PRODUCT_OFFERS__OFFERS_FAILED",
				pe = "GILD__AWARD_KARMA_UPDATED",
				Ee = "TOP_AWARDED__POSTS_FAILED",
				ge = "TOP_AWARDED__POSTS_LOADED",
				je = "TOP_AWARDED__POSTS_PENDING",
				he = "TOP_AWARDERS__LEADERBOARD_FAILED",
				Se = "TOP_AWARDERS__LEADERBOARD_LOADED",
				Ie = "TOP_AWARDERS__LEADERBOARD_PENDING",
				Te = "TOP_AWARDERS__MODAL_OPENED"
		},
		"./src/reddit/actions/header.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
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
			const o = "HEADER__SUBSCRIPTIONS_PINNED",
				r = "HEADER__SUBSCRIPTIONS_UNPINNED",
				i = Object(s.a)(o),
				c = Object(s.a)(r),
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
				return O
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "m", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				r = n("./src/lib/uploadToS3/index.ts"),
				i = n("./src/reddit/helpers/getGenericUploadError.ts"),
				c = n("./src/reddit/models/Image/index.tsx"),
				a = n("./src/reddit/selectors/imageUploads.ts");
			const d = "IMAGE_UPLOADS__IMAGE_UPLOAD_PENDING",
				u = "IMAGE_UPLOADS__IMAGE_UPLOAD_LOADED",
				l = "IMAGE_UPLOADS__IMAGE_UPLOAD_SAVED",
				b = "IMAGE_UPLOADS__IMAGE_UPLOAD_FAILED",
				_ = "IMAGE_UPLOADS__IMAGE_UPLOAD_CANCELED",
				f = Object(s.a)(d),
				O = Object(s.a)(u),
				m = Object(s.a)(l),
				p = Object(s.a)(b),
				E = Object(s.a)(_),
				g = async (e, t, n, s) => {
					if (!t.ok) throw Object(c.k)(n, t.error);
					let o, i = t.body;
					"s3UploadLease" in i && (i = i.s3UploadLease, o = t.body.websocketUrl);
					const a = await Object(r.a)(n.file, i);
					if (a.ok) {
						if (!e.imageUploads[n.id]) return void Object(c.d)(n);
						const t = decodeURIComponent(a.body.PostResponse.Location);
						return Object(c.n)(n, t, o, s)
					}
					throw Object(c.k)(n, a.error)
				};

			function j(e) {
				return e.split("/").pop()
			}
			const h = (e, t) => new Promise((n, s) => {
					const r = Object(a.c)(e, t);
					if (!r.length) return n(null);
					const i = r[0].websocketUrl;
					if (!i) return s(new Error("ImageUploads: No websocket URL found"));
					const c = {};
					for (let e = 0; e < r.length; e++) {
						const t = r[e],
							n = j(t.url);
						c[n] = t
					}
					const d = r.length,
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
						o.c.captureException(t), s()
					}
				}),
				S = e => (t, n, s) => {
					let {
						apiContext: r
					} = s;
					return new Promise((n, s) => {
						const {
							websocket: r
						} = e;
						let {
							imageCount: a,
							imagesByKey: d
						} = e;

						function u() {
							for (const e in d) {
								const n = d[e],
									s = Object(c.o)(n, n.url);
								t(m(s))
							}
							n(), r.close()
						}
						d = Object.assign({}, d);
						let l = setTimeout(u, 6e4);
						r.onmessage = e => {
							clearTimeout(l);
							const s = JSON.parse(e.data);
							if (s && "success" === s.type) {
								const e = s.payload.url,
									n = j(e),
									o = d[n];
								if (!o) return;
								a -= 1, delete o[n];
								const r = Object(c.o)(o, e);
								t(m(r))
							} else {
								const e = j(s.payload.image_key),
									n = d[e];
								if (!n) return;
								a -= 1, delete n[e];
								const o = Object(i.a)(s.payload.image_key),
									r = Object(c.k)(n, o);
								t(p(r))
							}
							a ? l = setTimeout(u, 6e4) : (r.close(), n())
						}, r.onerror = e => {
							clearTimeout(l);
							const n = Object(i.a)("websocket");
							for (const s in d) {
								const e = d[s],
									o = Object(c.k)(e, n);
								t(p(o))
							}
							r.close();
							const a = new Error("ImageUploads: WebSocket connection failed before all messages received");
							o.c.captureException(a), s()
						}
					})
				}
		},
		"./src/reddit/actions/interceptedAction.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const o = "INTERCEPTED_ACTION_SET",
				r = "INTERCEPTED_ACTION_UNSET",
				i = Object(s.a)(o),
				c = Object(s.a)(r)
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
				return O
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "e", (function() {
				return E
			}));
			var s = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/preferences.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/constants/postLayout.ts");
			const c = e => async (t, n) => {
				t(Object(s.i)(e)), !n().user.prefs.layout && t(Object(o.w)(i.d.Card))
			}, a = () => async (e, t) => {
				e(c(r.a.LOGIN_MODAL_ID))
			}, d = () => async e => {
				e(c(r.a.REGISTER_MODAL_ID))
			}, u = () => async e => {
				e(c(r.a.CHANGE_PASSWORD_MODAL_ID))
			}, l = () => async e => {
				e(c(r.a.ENABLE_TWO_FACTOR))
			}, b = () => async e => {
				e(c(r.a.DISABLE_TWO_FACTOR))
			}, _ = () => async e => {
				e(c(r.a.TWO_FACTOR_BACKUP_CODES))
			}, f = () => async e => {
				e(c(r.a.LINK_APPLE_SSO))
			}, O = () => async e => {
				e(c(r.a.UNLINK_APPLE_SSO))
			}, m = () => async e => {
				e(c(r.a.LINK_GOOGLE_SSO))
			}, p = () => async e => {
				e(c(r.a.UNLINK_GOOGLE_SSO))
			}, E = () => async e => {
				e(c(r.a.GOOGLE_ONE_TAP_MODAL_ID))
			}
		},
		"./src/reddit/actions/media.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "j", (function() {
				return T
			}));
			var s = n("./src/lib/ads/index.ts"),
				o = n("./src/lib/ads/store.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/actions/video.ts");
			const _ = "MEDIA__SET_MUTE",
				f = Object(r.a)(_),
				O = "MEDIA__SET_VOLUME",
				m = Object(r.a)(O),
				p = "MEDIA__SET_CURRENT_SLIDE_INDEX",
				E = "TOGGLE_GALLERY_LAYOUT",
				g = Object(r.a)(E),
				j = Object(r.a)(p),
				h = (e, t, n) => async (r, i) => {
					r(f(e)), !e && n && (o.e(n, e, s.m.muted), r(Object(b.C)(t, n)))
				}, S = "MEDIA__EMBED_HEIGHT_MEASURED", I = Object(r.a)(S), T = e => {
					let {
						height: t,
						isDeleted: n,
						postId: s
					} = e;
					return async (e, o, r) => {
						let {
							apiContext: b
						} = r;
						const _ = o(),
							{
								media: f
							} = _.posts.models[s];
						e(I({
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
				return O
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "k", (function() {
				return S
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/changeUsername.ts"),
				r = n("./src/reddit/actions/header.ts"),
				i = (n("./src/reddit/actions/media.ts"), n("./src/reddit/constants/modals.ts")),
				c = n("./src/reddit/endpoints/user/index.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/selectors/activeModalId.ts"),
				u = n("./src/reddit/selectors/header.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const b = "MODAL_TOGGLED",
				_ = Object(s.a)(b),
				f = "CLOSE_ALL_MODALS",
				O = Object(s.a)(f),
				m = "REDESIGN_MODAL_CLOSED",
				p = (Object(s.a)(m), e => async (t, n, s) => {
					Object(d.b)(e)(n()) && t(_(e))
				}),
				E = e => async (t, n, s) => {
					const c = n();
					if (!Object(d.b)(e)(c)) {
						if ((e === i.a.MULTIREDDIT_CREATE || e === i.a.MULTIREDDIT_ADD_SUBREDDIT) && Object(l.K)(c)) {
							Object(u.a)(c) && t(Object(r.f)());
							const n = _(e);
							return void t(Object(o.f)(n))
						}
						t(_(e))
					}
				}, g = () => async (e, t, n) => {
					Object(a.cb)(i.a.REDESIGN_MODAL, !0), Object(l.I)(t()) && Object(c.e)(n.apiContext())
				}, j = "SET_ACCOUNT_MANAGER_MODAL_DATA";
			var h;
			! function(e) {
				e.HeaderLogin = "header_login", e.HeaderSignup = "header_signup", e.Hide = "hide", e.IdCard = "id_card", e.NotificationsInbox = "notifications_inbox", e.Post = "post", e.PromoBanner = "promo", e.Reply = "reply", e.Report = "report", e.SubredditLeaderboard = "subreddit_leaderboard", e.Save = "save", e.Subscribe = "subscribe", e.Vote = "vote"
			}(h || (h = {}));
			const S = Object(s.a)(j)
		},
		"./src/reddit/actions/notificationBanner.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const o = "NOTIFICATION_BANNER_SET",
				r = "NOTIFICATION_BANNER_DISMISSED",
				i = Object(s.a)(o),
				c = Object(s.a)(r)
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
				return oe
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
				return me
			})), n.d(t, "q", (function() {
				return pe
			})), n.d(t, "F", (function() {
				return ge
			})), n.d(t, "G", (function() {
				return je
			})), n.d(t, "t", (function() {
				return Ie
			})), n.d(t, "H", (function() {
				return Te
			})), n.d(t, "m", (function() {
				return ye
			})), n.d(t, "K", (function() {
				return Ae
			})), n.d(t, "E", (function() {
				return De
			})), n.d(t, "w", (function() {
				return Re
			})), n.d(t, "O", (function() {
				return ve
			})), n.d(t, "B", (function() {
				return Ce
			})), n.d(t, "A", (function() {
				return Pe
			})), n.d(t, "p", (function() {
				return we
			})), n.d(t, "Q", (function() {
				return ke
			})), n.d(t, "R", (function() {
				return Le
			})), n.d(t, "v", (function() {
				return xe
			})), n.d(t, "i", (function() {
				return Ue
			})), n.d(t, "n", (function() {
				return Ve
			})), n.d(t, "l", (function() {
				return Ge
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
				o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/js-cookie/src/js.cookie.js"),
				c = n.n(i),
				a = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/copyToClipboard/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/ads/constants.ts"),
				b = n("./src/reddit/actions/login.ts"),
				_ = n("./src/reddit/actions/platform.ts"),
				f = n("./src/reddit/constants/adEvents.ts"),
				O = n("./src/reddit/helpers/getVendorMetadata.ts"),
				m = n("./src/lib/LRUCache/index.ts"),
				p = n("./node_modules/query-string/index.js"),
				E = n.n(p),
				g = n("./src/lib/sentry/index.ts");
			const j = new m.a(1e3),
				h = (e, t, n) => {
					return e.events.filter(e => e.type === t).every(e => ((e, t) => {
						let {
							url: n,
							type: s
						} = e;
						if (!n) return g.c.captureMessage("Pixel of type ".concat(s, " has no url")), !1;
						if (!j.get(n)) {
							const e = /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n);
							let s;
							if (t && e) {
								const {
									url: e,
									query: o
								} = E.a.parseUrl(n);
								s = E.a.stringifyUrl({
									url: e,
									query: Object.assign(Object.assign({}, o), t)
								})
							}
							const o = new Image;
							return j.set(n, !0), s && (n = s), o.src = n, !0
						}
						return !1
					})(e, n))
				};
			var S = n("./src/reddit/selectors/posts.ts"),
				I = n("./src/reddit/actions/unload/constants.ts");
			let T = !1;
			Object(u.a)(I.b);
			const y = (e, t, n) => {
				if (window && !T && (window.addEventListener("beforeunload", () => (e => {
						I.a.forEach(t => {
							let {
								post: n
							} = t;
							const s = Object(S.b)(e(), n.id),
								o = Object(O.a)(n.id, s, f.a.Unload);
							h(n, f.a.Unload, o)
						})
					})(n)), T = !0), I.c.has(e.id) || e.isBlank) return;
				I.c.add(e.id);
				const s = {
					post: e,
					unloadTimer: window.setTimeout(() => {
						t(Ie(e, f.a.Unload))
					}, I.d)
				};
				if (I.a.push(s), I.a.length > 5) {
					const e = I.a.shift();
					t(Ie(e.post, f.a.Unload)), clearTimeout(e.unloadTimer)
				}
			};
			var A = n("./src/reddit/actions/video.ts"),
				D = n("./src/reddit/actions/vote.ts"),
				R = n("./src/reddit/constants/cookie.ts"),
				v = n("./src/reddit/constants/history.ts"),
				C = n("./src/reddit/constants/posts.ts"),
				P = n("./src/reddit/helpers/isPost.ts"),
				w = n("./src/reddit/helpers/overlay/index.ts"),
				k = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/models/Media/index.ts"),
				N = n("./src/reddit/endpoints/post/index.tsx"),
				x = n("./src/lib/makeGqlRequest/index.ts"),
				U = n("./src/graphql/operations/RichTextPostContent.json");
			var M = n("./src/lib/constants/index.ts"),
				V = n("./src/lib/makeListingKey/index.ts"),
				G = n("./node_modules/react-router-redux/es/index.js"),
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
				oe = Object(u.a)(ee),
				re = (Object(u.a)(te), Object(u.a)(se)),
				ie = "POST__STICKY_POST_SUCCESS",
				ce = Object(u.a)(ie),
				ae = Object(u.a)(ne),
				de = "POST__MODERATION_PROMPT_OPENED",
				ue = "POST__MODERATION_PROMPT_CLOSED",
				le = Object(u.a)(de),
				be = Object(u.a)(ue),
				_e = (e, t, n, s) => async (o, i, c) => {
					let {
						apiContext: a
					} = c;
					const d = i().posts.models[e];
					if (!d) return;
					if (!Object(Z.I)(i())) return o(Object(F.k)({
						actionSource: F.a.Hide,
						redirectUrl: d.permalink
					})), void o(Object(b.i)());
					let u;
					if (o(ae({
							[e]: {
								hidden: t
							}
						})), (u = t ? await Object(N.h)(a(), e) : await Object(N.u)(a(), e)).ok) {
						if (s) {
							const s = t ? r.fbt._("Post hidden successfully.", null, {
									hk: "a4K6a"
								}) : r.fbt._("Post unhidden successfully.", null, {
									hk: "xJgPP"
								}),
								i = Object(B.d)(s, K.b.Undo, r.fbt._("Undo", null, {
									hk: "46OwLP"
								}), _e(e, !t, n, !1));
							o(Object(B.e)(i))
						}
					} else if (o(ae({
							[e]: {
								hidden: !t
							}
						})), s) {
						const e = Object(B.d)(r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						}), K.b.Error);
						o(Object(B.e)(e))
					}
				}, fe = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = n().posts.models[e];
					if (!i) return;
					if (!Object(Z.I)(n())) return t(Object(b.i)()), void t(Object(F.k)({
						actionSource: F.a.Save,
						redirectUrl: i.permalink
					}));
					const c = i.saved ? N.y : N.p;
					if (t(ae({
							[e]: {
								saved: !i.saved
							}
						})), (await c(o(), e)).ok) {
						const n = i.saved ? r.fbt._("Post unsaved successfully", null, {
								hk: "rrnyE"
							}) : r.fbt._("Post saved successfully", null, {
								hk: "3fAuAl"
							}),
							s = Object(B.d)(n, K.b.Undo, r.fbt._("Undo", null, {
								hk: "46OwLP"
							}), fe(e));
						t(Object(B.e)(s))
					} else t(ae({
						[e]: {
							saved: i.saved
						}
					}))
				}, Oe = (e, t) => t().posts.models[e], me = Object(D.b)(Oe, Q.a.upvoted), pe = Object(D.b)(Oe, Q.a.downvoted), Ee = e => "viewing-".concat(e), ge = (e, t) => async (n, s) => {
					const o = s();
					q.i(o, e, t), $.c.start(Ee(e))
				}, je = (e, t, n) => async (s, r) => {
					const i = r(),
						c = Ee(e);
					if ($.c.has(c)) {
						const s = $.c.end("viewing-".concat(e));
						!t && s > o.a.telemetry.postConsumedThreshold && q.a(i, e, s, n)
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
					[f.a.Unload]: I.b,
					[f.a.VendorFullyInView]: l.v,
					[f.a.VendorFullyInViewSeconds5]: l.x,
					[f.a.VendorFullyInViewSeconds15]: l.w
				}, Se = Object(u.b)(he), Ie = (e, t, n) => async (s, o) => {
					const r = Object(S.b)(o(), e.id),
						i = Object(O.a)(e.id, r, t);
					he[t] && s(Se(String(t), {
						postId: e.id,
						vendorMetadata: i,
						eventType: n
					})), h(e, t, i)
				}, Te = (e, t) => async (n, s) => {
					const o = e && e.media && "video" === e.media.type,
						r = [f.a.VendorFullyInView, f.a.VendorFullyInViewSeconds5, f.a.VendorFullyInViewSeconds15];
					if (o && t === f.a.VideoViewableImpression) n(Object(A.y)(e.id));
					else if (o && t === f.a.VideoFullyViewableImpression) n(Object(A.v)(e.id));
					else if (o && t === f.a.VideoGroupMViewable) n(Object(A.w)(e.id));
					else if (o && t === f.a.VideoVendorFullyViewable50) n(Object(A.x)(e.id));
					else if (e.isSponsored)
						if (r.includes(t)) n(((e, t) => async n => {
							n(Ie(e, t))
						})(e, t));
						else {
							if (t !== f.a.GroupMViewable) return t === f.a.Impression ? (n((e => async (t, n) => {
								e.isSponsored && (t(Ie(e, f.a.Impression)), y(e, t, n))
							})(e)), void(e.isBlank || q.h(s(), e.postId))) : void n((e => async t => {
								e.isSponsored && t(Ie(e, f.a.ViewableImpression))
							})(e));
							n(((e, t) => async n => {
								n(Ie(e, t))
							})(e, t))
						}
				}, ye = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n(),
						i = r.posts.models[e],
						c = r.user.account ? r.user.account.displayText : null;
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
					})), (await Object(N.b)(o(), e)).ok || t(ae({
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
				}, Ae = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
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
					})), !!(await Object(N.m)(r(), e, t)).ok || (n(ae({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), !1))
				}, De = (e, t, n) => async (s, o, i) => {
					let {
						apiContext: c
					} = i;
					const a = o();
					if (a.posts.models[e])
						if (s(ae({
								[e]: {
									hidden: !0
								}
							})), (await Object(N.c)(c(), e)).ok) {
							const e = Object(B.d)(r.fbt._("Post deleted successfully.", null, {
								hk: "1sQ4Xf"
							}), K.b.SuccessMod);
							if (n) s(Object(G.b)(t.state[v.a.CloseLocation]));
							else {
								const e = Object(X.f)(a);
								e && s(Object(G.b)(e.url))
							}
							s(Object(B.e)(e))
						} else {
							s(ae({
								[e]: {
									hidden: !1
								}
							}));
							const t = Object(B.d)(r.fbt._("Something went wrong", null, {
								hk: "22u7ha"
							}), K.b.Error);
							s(Object(B.e)(t))
						}
				}, Re = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().posts.models[e];
					if (!r) return;
					const i = r.isLocked ? N.w : N.j;
					t(ae({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await i(o(), e)).ok || t(ae({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, ve = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().posts.models[e];
					if (!r) return;
					const i = r.isSpoiler ? N.z : N.s,
						c = r.isSpoiler ? r.flair.filter(e => e.type !== Y.f.Spoiler) : [...r.flair, {
							text: "spoiler",
							type: Y.f.Spoiler
						}];
					t(ae({
						[e]: {
							isSpoiler: !r.isSpoiler,
							flair: c
						}
					})), (await i(o(), e)).ok || t(ae({
						[e]: {
							isSpoiler: r.isSpoiler,
							flair: r.flair
						}
					}))
				}, Ce = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = Object(S.N)(n(), {
						postId: e
					});
					r && (t(ae({
						[e]: {
							isOriginalContent: !r.isOriginalContent
						}
					})), (await Object(N.l)(o(), e, !r.isOriginalContent)).ok || t(ae({
						[e]: {
							isOriginalContent: r.isOriginalContent
						}
					})))
				}, Pe = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().posts.models[e];
					if (!r) return;
					const i = r.isNSFW ? N.x : N.k,
						c = r.isNSFW ? r.flair.filter(e => e.type !== Y.f.Nsfw) : [...r.flair, {
							text: "nsfw",
							type: Y.f.Nsfw
						}];
					t(ae({
						[e]: {
							isNSFW: !r.isNSFW,
							flair: c
						}
					})), (await i(o(), e)).ok ? await t(Be(e)) : t(ae({
						[e]: {
							isNSFW: r.isNSFW,
							flair: r.flair
						}
					}))
				}, we = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s().posts.models[e];
					if (!i) return;
					const c = M.g[t];
					n(ae({
						[e]: {
							distinguishType: t
						}
					})), (await Object(N.d)(r(), e, c)).ok || n(ae({
						[e]: {
							distinguishType: i.distinguishType
						}
					}))
				}, ke = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().posts.models[e];
					if (!r) return;
					const i = r.ignoreReports ? N.v : N.i;
					t(ae({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await i(o(), e)).ok || t(ae({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, Le = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n(),
						i = r.posts.models[e];
					if (!i) return;
					const c = !i.isStickied;
					t(ae({
						[e]: {
							isStickied: c
						}
					}));
					const a = r.subredditStickyPosts.data[i.belongsTo.id];
					let d;
					if (c && a && a.length >= 2 && (d = a[1], t(ae({
							[d]: {
								isStickied: !1
							}
						}))), (await Object(N.t)(o(), e, c, !1)).ok) {
						const n = i.belongsTo.id,
							s = Ne(e, c, r.subredditStickyPosts.data[i.belongsTo.id]),
							o = r.subreddits.models[n].name,
							a = Object(V.a)(o, M.P, {});
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
				}, Ne = (e, t, n) => {
					const s = n ? [...n] : [];
					return t ? (s.length >= 2 && s.splice(1, 1, e), s) : s.filter((function(t) {
						return t !== e
					}))
				}, xe = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					if (Object(d.a)(e)) {
						const e = Object(B.d)(r.fbt._("Copied link!", null, {
							hk: "4a4E1x"
						}), K.b.SuccessCommunity);
						t(Object(B.e)(e))
					} else {
						const e = Object(B.d)(r.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						}), K.b.Error);
						t(Object(B.e)(e))
					}
				}, Ue = "PREFERENCES__RECENT_POSTS_UPDATED", Me = Object(u.a)(Ue), Ve = () => async (e, t) => {
					const n = t();
					if (!n.user.account) return;
					const s = Object(z.e)(n.user.account);
					c.a.remove("".concat(s).concat(R.g), {
						domain: o.a.cookieDomain
					}), e(Me({
						postIds: []
					}))
				}, Ge = e => async (t, n) => {
					const r = n();
					if (!r.user.account || !r.user.account.showRecentPosts || r.posts.recent.indexOf(e) > -1) return;
					const i = Object(z.e)(r.user.account),
						c = r.posts.recent ? r.posts.recent.slice(0) : [];
					c.push(e), c.length > C.c && c.shift(), Object(s.b)("".concat(i).concat(R.g), "".concat(c.join(",")), {
						domain: o.a.cookieDomain
					}), t(Me({
						postIds: c
					}))
				}, Fe = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().posts.models[e].sendReplies;
					t(ae({
						[e]: {
							sendReplies: r
						}
					})), (await Object(N.q)(o(), e, r)).ok || t(ae({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Be = e => async (t, n, s) => {
					if (Object(S.N)(n(), {
							postId: e
						})) return;
					const o = await Object(H.a)(s.apiContext(), e, void 0, {
						limit: 1,
						truncate: 0
					}, Object(J.a)(n()));
					if (t(Object(_.m)(o.status)), o.ok) {
						const e = o.body;
						t(re(e.posts))
					}
				}, We = e => async (t, n) => {
					await t(Be(e));
					const s = Object(S.N)(n(), {
						postId: e
					});
					s && s.crosspostRootId && await t(Be(s.crosspostRootId))
				}, He = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = n();
					if (!Object(Z.I)(i)) return void t(Object(F.i)(W.a.LOGIN_MODAL_ID));
					const c = Object(S.N)(i, {
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
					}), {}))), (await Object(N.g)(o(), e, !c.isFollowed)).ok ? t(Object(B.e)({
						kind: K.b.SuccessMod,
						text: a ? r.fbt._("Event unfollowed", null, {
							hk: "3tkWMt"
						}) : r.fbt._("Success! You followed this event, that means we’ll remind you when it starts!", null, {
							hk: "4A9cwh"
						})
					})) : (t(ae(u.reduce((e, t) => Object.assign(Object.assign({}, e), {
						[t]: {
							isFollowed: a
						}
					}), {}))), t(Object(B.e)({
						kind: K.b.Error,
						text: r.fbt._("Oops, something went wrong. Try again.", null, {
							hk: "2VQ3RW"
						})
					})))
				}, qe = e => {
					let {
						postOrComment: t,
						queryParams: n,
						clickInfo: s
					} = e;
					return async (e, o) => {
						const r = o(),
							i = s && s.hasNewTabModifier;
						let c = t.permalink;
						if (Object(P.b)(t) && t.media && Object(L.H)(t.media)) {
							const {
								id: e,
								type: n
							} = t.belongsTo, s = "subreddit" === n ? r.subreddits.models[e] : null;
							c = s ? Object(k.c)(t.id, s.name) : Object(k.c)(t.id)
						}
						n && (c = Object(a.a)(c, n)), r.user.prefs.openPostInNewTab || i ? window.open(c) : e(Object(w.a)(c))
					}
				}, Ye = "RICH_TEXT_POST_CONTENT_LOADED", Ke = Object(u.a)(Ye), ze = e => async (t, n, s) => {
					const o = n(),
						i = Object(S.N)(o, {
							postId: e
						});
					if (!(i && i.media && Object(L.I)(i.media) && i.media.isRichtextPreview)) return;
					const c = await ((e, t) => Object(x.a)(e, Object.assign(Object.assign({}, U), {
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
						text: r.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "1GbrKz"
						})
					}))
				}, Qe = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					(await Object(N.r)(i(), e, t)).ok ? n(ae({
						[t]: {
							contestMode: e
						}
					})) : n(Object(B.e)({
						kind: K.b.Error,
						text: r.fbt._("Something went wrong", null, {
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
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_PENDING",
				o = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_LOADED",
				r = "SUBREDDIT__POST_FLAIR_STYLE_TEMPLATES_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const r = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				c = Object(s.a)(r),
				a = Object(s.a)(i),
				d = (e, t) => async (n, s) => {
					const r = s();
					e in r.listings.postOrder.fetchedTokens ? e in r.listings.postOrder.ids ? n(a({
						listingKey: e
					})) : o.j(r, e) : n(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/preferences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return G
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
				return Oe
			})), n.d(t, "E", (function() {
				return ge
			})), n.d(t, "H", (function() {
				return je
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "l", (function() {
				return ye
			})), n.d(t, "k", (function() {
				return De
			})), n.d(t, "z", (function() {
				return ve
			})), n.d(t, "C", (function() {
				return Ce
			})), n.d(t, "s", (function() {
				return Pe
			})), n.d(t, "B", (function() {
				return we
			})), n.d(t, "A", (function() {
				return Le
			})), n.d(t, "n", (function() {
				return Ne
			})), n.d(t, "G", (function() {
				return Me
			})), n.d(t, "J", (function() {
				return Ve
			})), n.d(t, "I", (function() {
				return Ge
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./node_modules/@reddit/onetrust-integration/dist/esm/index.js"),
				o = n("./node_modules/Base64/base64.js"),
				r = n("./src/config.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				a = n.n(c),
				d = n("./node_modules/lodash/isEmpty.js"),
				u = n.n(d),
				l = n("./node_modules/lodash/omit.js"),
				b = n.n(l),
				_ = n("./node_modules/lodash/pick.js"),
				f = n.n(_),
				O = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeActionCreator/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				E = n("./src/reddit/actions/chat/toggle.ts"),
				g = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				j = n("./src/reddit/actions/users.ts"),
				h = n("./src/reddit/constants/cookie.ts"),
				S = n("./src/reddit/constants/headers.ts"),
				I = n("./src/reddit/endpoints/user/preferences.ts"),
				T = n("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				A = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				D = n("./src/reddit/actions/imageUploads.ts"),
				R = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/constants/preferences.ts"),
				C = n("./src/reddit/endpoints/subreddit/settings.ts"),
				P = n("./src/reddit/helpers/media/index.ts"),
				w = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				k = n("./src/reddit/models/Image/index.tsx"),
				L = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/models/User/index.ts"),
				x = n("./src/reddit/selectors/imageUploads.ts"),
				U = n("./src/reddit/selectors/structuredStyles.ts"),
				M = n("./src/reddit/selectors/subreddit.ts"),
				V = n("./src/reddit/selectors/user.ts");
			const G = "PREFERENCES__AUTOPLAY_TOGGLED",
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
				X = Object(m.a)(B),
				Z = Object(m.a)(W),
				$ = Object(m.a)(H),
				ee = Object(m.a)(q),
				te = Object(m.a)(Y),
				ne = Object(m.a)(Q),
				se = Object(m.a)(J),
				oe = (Object(m.a)(K), Object(m.a)(G)),
				re = Object(m.a)(F),
				ie = (Object(m.a)(z), "PREFERENCES__COLLAPSED_TRAY_TOGGLED"),
				ce = (Object(m.a)(ie), e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = o(),
						i = await Object(y.a)(Object(p.a)(r, [S.a]), {
							data: {
								lang: e.replace("-", "_")
							},
							endpoint: "".concat(r.apiUrl, "/api/v1/me/prefs"),
							method: O.db.PATCH,
							type: "json"
						});
					if (i.ok) {
						const e = i.body.lang;
						t(X(e))
					}
				}),
				ae = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					t(Z({
						layout: e
					})), t(Object(j.o)())
				}, de = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s(),
						c = Object(V.bb)(i),
						{
							hasSeenCustomizeFlyout: a
						} = i.user.prefs;
					a || n(ee()), t && c ? (n($({
						subredditId: t,
						layout: e
					})), n(Ve(t, {
						layout: e
					}, !1)), a || n(je({
						hasSeenCustomizeFlyout: !0
					}, !1))) : (n(ae(e)), n(je(a ? {
						layout: e
					} : {
						layout: e,
						hasSeenCustomizeFlyout: !0
					}, !1)))
				}, ue = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().user.account && await Object(I.d)(e, o())
				}, le = e => async (t, n, c) => {
					let {
						apiContext: d
					} = c;
					const u = n();
					if (Object(U.j)(u)) t(Object(R.e)({
						kind: L.b.Error,
						text: i.fbt._("In order to continue styling your community, Night Mode must be turned off.", null, {
							hk: "1yZidT"
						})
					}));
					else {
						if (u.user.account) await Object(I.e)(e, d());
						else {
							const t = a.a.get(h.j);
							if (t) {
								const n = JSON.parse(Object(o.atob)(t));
								n.prefs.nightmode = e, Object(s.b)(h.j, btoa(JSON.stringify(n)), {
									domain: r.a.cookieDomain
								})
							}
						}
						t(re({
							nightmode: e
						})), t(Object(E.f)(e)), a.a.remove(h.d, {
							domain: r.a.cookieDomain
						})
					}
				}, be = () => async (e, t, n) => {
					let {
						apiContext: c
					} = n;
					const d = t(),
						u = d.user.prefs.topContentTimesDismissed + 1,
						l = Date.now();
					if (d.user.account) e(je({
						topContentDismissalTime: l,
						topContentTimesDismissed: u
					}, !1));
					else {
						const e = a.a.get(h.j);
						if (e) {
							const t = JSON.parse(Object(o.atob)(e));
							t.prefs[v.d] = l, t.prefs[v.e] = u, Object(s.b)(h.j, btoa(JSON.stringify(t)), {
								domain: r.a.cookieDomain
							})
						}
					}
					e(se({
						topContentDismissalTime: l,
						topContentTimesDismissed: u
					})), e(Object(R.e)({
						kind: L.b.SuccessCommunity,
						text: i.fbt._("Got it! We will show you less of this", null, {
							hk: "4op5Wa"
						})
					}))
				}, _e = e => async (t, n, c) => {
					let {
						apiContext: d
					} = c;
					const u = -1 === [g.R, "r/popular"].indexOf(e),
						l = Date.now(),
						b = n(),
						_ = i.fbt._("Got it! We will show you less of this", null, {
							hk: "4op5Wa"
						});
					if (b.user.account)
						if (u) {
							const n = e.replace(/^r\//, ""),
								s = Object(M.G)(b, n);
							t(Ve(s, {
								rpanDuDismissalTime: l
							}, !1))
						} else t(je({
							rpanDuDismissalTime: l
						}, !1));
					else {
						const e = a.a.get(h.j);
						if (e) {
							const t = JSON.parse(Object(o.atob)(e));
							t.prefs[v.b] = l, Object(s.b)(h.j, btoa(JSON.stringify(t)), {
								domain: r.a.cookieDomain
							})
						}
					}
					t(Object(R.e)({
						kind: L.b.SuccessCommunity,
						text: _
					})), t(ne(l))
				}, fe = "SETTINGS__ACCOUNT_PREFS_UPDATE_SUCCESS", Oe = "SETTINGS__SUBREDDIT_PREFS_UPDATED", me = Object(m.a)("SETTINGS__UPDATE_PENDING"), pe = Object(m.a)("SETTINGS__UPDATE_FAILURE"), Ee = Object(m.a)(fe), ge = Object(m.a)(Oe), je = function(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
					return async (s, o, r) => {
						let {
							apiContext: c
						} = r;
						s(me());
						const a = b()(e, v.a),
							d = f()(e, v.a),
							l = [];
						u()(a) || l.push(Object(I.g)(a, c())), u()(d) || l.push(Object(I.b)(d, c())), (await Promise.all(l)).every(e => e.ok) ? (s(Ee({
							preferences: e
						})), t && s(Object(R.e)({
							kind: L.b.SuccessCommunity,
							text: n || i.fbt._("Changes saved", null, {
								hk: "2isjrZ"
							})
						}))) : (s(pe()), t && s(Object(R.e)({
							kind: L.b.Error,
							text: i.fbt._("Changes failed to save", null, {
								hk: "XrtIq"
							})
						})))
					}
				}, he = "SETTINGS__SUCCESS", Se = Object(m.a)("SETTINGS__PENDING"), Ie = Object(m.a)("SETTINGS__FAILURE"), Te = Object(m.a)(he), ye = "SETTINGS__PROFILE_IMAGE_UPDATE_SUCCESS", Ae = Object(m.a)(ye), De = "SETTINGS__PROFILE_IMAGE_DELETE_SUCCESS", Re = Object(m.a)(De), ve = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					t(Se());
					const i = await ((e, t) => Object(y.a)(e, {
						endpoint: Object(A.a)("".concat(r.a.gatewayUrl, "/desktopapi/v1/prefs")),
						method: O.db.GET,
						data: {
							timestamp: t ? Date.now() : void 0
						}
					}))(o(), e);
					i.ok ? t(Te(i.body)) : t(Ie())
				}, Ce = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (n().user.account) await Object(I.a)(e, r());
					else {
						const e = a.a.get(h.e);
						if (e) {
							const t = JSON.parse(decodeURIComponent(e));
							t.pref_quarantine_optin = !0, Object(s.b)(h.e, JSON.stringify(encodeURIComponent(t)), O.y)
						} else {
							const e = JSON.stringify({
								pref_quarantine_optin: !0
							});
							Object(s.b)(h.e, e, O.y)
						}
					}
				}, Pe = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().user.account && await Object(I.c)(e, o()), t(oe({
						autoplayVideo: e
					}))
				}, we = (e, t) => async (n, s, o) => {
					await ke(e, t)(n, s, o)
				}, ke = (e, t) => async (n, s, o) => {
					const {
						apiContext: r
					} = o, c = Object(V.i)(s());
					if (!c || !c.profileId) return;
					n(Object(D.k)(e));
					const a = Object(N.e)(c),
						d = O.Ub + a,
						u = await Object(T.d)(r(), d, e.file.name, t, await Object(P.g)(e.file));
					if (u.ok) {
						let _;
						try {
							if (!(_ = await Object(D.g)(s(), u, e, k.a.Profiles))) return void n(Object(R.e)({
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
							O = null;
						try {
							(f = await Object(D.f)(s(), k.a.Profiles)) && (O = Object(D.m)(f)(n, s, o))
						} catch (b) {
							return void n(Object(R.e)({
								kind: L.b.Error,
								text: i.fbt._("Changes failed to save", null, {
									hk: "3QlXrl"
								})
							}))
						}
						const m = decodeURIComponent(_.url);
						if (n(Ae({
								imageUrl: m,
								key: t,
								subredditId: c.profileId,
								username: a
							})), (await Object(T.e)(r(), d, {
								[t]: m
							})).ok) {
							if (O) try {
								await O
							} catch (b) {}
							n(Object(R.e)({
								kind: L.b.SuccessCommunity,
								text: i.fbt._("Changes saved", null, {
									hk: "xEVHp"
								})
							})), Object(w.g)(s(), t);
							const o = Object(x.a)(s(), e);
							n(Ae({
								imageUrl: o ? o.url : _.url,
								key: t,
								subredditId: c.profileId,
								username: a
							}))
						} else n(Object(R.e)({
							kind: L.b.Error,
							text: i.fbt._("Changes failed to save", null, {
								hk: "1y1wAY"
							})
						}))
					} else {
						const e = "profileBanner" === t ? "1280x384" : "256x256";
						n(Object(R.e)({
							kind: L.b.Error,
							text: i.fbt._("There was an error uploading your image. Please verify that the size of your image is {maxImageSize} and less than 500KB.", [i.fbt._param("maxImageSize", e)], {
								hk: "I6lfz"
							})
						}))
					}
				}, Le = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = Object(V.i)(n());
					if (!r || !r.profileId) return;
					const c = Object(N.e)(r),
						a = O.Ub + c,
						d = {
							profileIcon: "icon",
							profileBanner: "banner"
						} [e],
						u = await Object(C.b)(o(), a, d);
					if (u.ok) {
						const s = u.body[d + "_img"];
						t(Re({
							imageUrl: s,
							key: e,
							subredditId: r.profileId,
							username: c
						})), t(Object(R.e)({
							kind: L.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "xEVHp"
							})
						})), Object(w.f)(n(), e)
					} else t(Object(R.e)({
						kind: L.b.Error,
						text: i.fbt._("Changes failed to save", null, {
							hk: "1y1wAY"
						})
					}))
				}, Ne = "SETTINGS__PROFILE_SETTINGS_UPDATE_SUCCESS", xe = Object(m.a)(Ne), Ue = Object(m.a)("SETTINGS__PROFILE_SETTINGS_UPDATE_FAILED"), Me = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const c = Object(V.i)(s());
					if (!c || !c.profileId) return !1;
					const a = [],
						d = s().subreddits.settings[c.profileId],
						u = Object.assign(Object.assign({}, d), e);
					a.push(Object(C.f)(r(), c.profileId, u));
					const {
						showActiveCommunities: l,
						prevShowActiveCommunities: b
					} = t;
					return l !== b && a.push(Object(I.g)({
						showActiveCommunities: l
					}, r())), (await Promise.all(a)).every(e => e.ok) ? (n(xe({
						settings: e,
						additional: t,
						subredditId: c.profileId
					})), Object(w.i)(s()), n(Object(R.e)({
						kind: L.b.SuccessCommunity,
						text: i.fbt._("Changes saved", null, {
							hk: "xEVHp"
						})
					})), !0) : (n(Ue()), n(Object(R.e)({
						kind: L.b.Error,
						text: i.fbt._("Changes failed to save", null, {
							hk: "1y1wAY"
						})
					})), !1)
				}, Ve = function(e, t) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (s, o, r) => {
						let {
							apiContext: c
						} = r;
						const a = o().user.prefs.subreddit[e];
						s(ge({
							subredditId: e,
							prefs: t
						})), (await Object(I.h)(e, t, c())).ok ? n && s(Object(R.e)({
							kind: L.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "xEVHp"
							})
						})) : (a && s(ge({
							subredditId: e,
							prefs: a
						})), n && s(Object(R.e)({
							kind: L.b.Error,
							text: i.fbt._("Changes failed to save", null, {
								hk: "1y1wAY"
							})
						})))
					}
				}, Ge = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s();
					Object(M.S)(i, {
						subredditId: e
					}) && i.user.prefs.rememberCommunitySort && n(Ve(e, {
						sort: t
					}, !1))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "E", (function() {
				return o
			})), n.d(t, "X", (function() {
				return r
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
				return O
			})), n.d(t, "N", (function() {
				return m
			})), n.d(t, "M", (function() {
				return p
			})), n.d(t, "O", (function() {
				return E
			})), n.d(t, "z", (function() {
				return g
			})), n.d(t, "L", (function() {
				return j
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "F", (function() {
				return S
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "J", (function() {
				return T
			})), n.d(t, "K", (function() {
				return y
			})), n.d(t, "D", (function() {
				return A
			})), n.d(t, "B", (function() {
				return D
			})), n.d(t, "V", (function() {
				return R
			})), n.d(t, "C", (function() {
				return v
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "A", (function() {
				return w
			})), n.d(t, "T", (function() {
				return k
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "g", (function() {
				return V
			})), n.d(t, "j", (function() {
				return G
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
			const o = "RPAN__REMOVE_STREAM_FROM_HISTORY",
				r = "RPAN__VISIT_STREAM",
				i = -1,
				c = "RPAN__RESET_HISTORY",
				a = "RPAN__RECEIVE_GLOBAL_CONFIG",
				d = "RPAN__RECEIVE_SUBREDDIT_CONFIG",
				u = "RPAN__REQUEST_CONFIG",
				l = "RPAN__REQUEST_CONFIG_FAILED",
				b = "RPAN__REQUEST_CONFIG_CANCELED",
				_ = "RPAN__RECEIVE_HLS_STREAM_ENDED",
				f = "RPAN__RECEIVE_HLS_STREAM_REMOVED",
				O = "RPAN__RECEIVE_STREAM_MODEL",
				m = "RPAN__REQUEST_STREAM_MODEL",
				p = "RPAN__REQUEST_STREAM_FAILED",
				E = "RPAN__REQUEST_STREAM_MODEL_BATCH",
				g = "RPAN__RECEIVE_STREAM_MODEL_BATCH",
				j = "RPAN__REQUEST_STREAM_BATCH_FAILED",
				h = "RPAN__RECEIVE_AUTO_MUTE_LEVEL",
				S = "RPAN__REQUEST_AUTO_MUTE_LEVEL",
				I = "RPAN__RECEIVE_RECOMMENDED_VIEWER_SUBREDDITS",
				T = "RPAN__REQUEST_RECOMMENDED_VIEWER_SUBREDDITS",
				y = "RPAN__REQUEST_RECOMMENDED_VIEWER_SUBREDDITS_FAILED",
				A = "RPAN__RECEIVE_VOTE",
				D = "RPAN__RECEIVE_THEATER_SETTINGS",
				R = "RPAN__UPDATE_VIDEO_TIMESTAMP",
				v = "RPAN__RECEIVE_USER_SETTINGS",
				C = "RPAN__BATCH_OP",
				P = "RPAN__RECEIVE_DISCOVERY_UNIT_THUMBNAILS",
				w = "RPAN__RECEIVE_STREAM_PREVIEWS",
				k = "RPAN__SEND_HEARTBEAT",
				L = 0,
				N = 9999,
				x = 30,
				U = 6,
				M = 5,
				V = 15,
				G = 5,
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
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts");
			const i = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						s = Object(o.a)(e);
					return Object(r.b)(n, e, s)
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
				return o
			})), n.d(t, "j", (function() {
				return r
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
				return O
			})), n.d(t, "m", (function() {
				return m
			}));
			const s = "STRUCTURED_STYLES__STYLES_RESET_PENDING",
				o = "STRUCTURED_STYLES__STYLES_RESET_LOADED",
				r = "STRUCTURED_STYLES__STYLES_RESET_FAILED",
				i = "SUBREDDIT__STYLES_PENDING",
				c = "SUBREDDIT__STYLES_LOADED",
				a = "SUBREDDIT__STYLES_FAILED",
				d = "STRUCTURED_STYLES__DRAFT_REPLACED",
				u = "STRUCTURED_STYLES__DRAFT_UPDATED",
				l = "STRUCTURED_STYLES__EDITING_STOPPED",
				b = "STRUCTURED_STYLES__EDITING_STARTED",
				_ = "STRUCTURED_STYLES__IMAGE_UPLOAD_ADDED",
				f = "STRUCTURED_STYLES__DIRTIED_BLADE_EDITOR",
				O = "STRUCTURED_STYLES__UNDIRTIED_BLADE_EDITOR",
				m = "STRUCTURED_STYLES__STYLES_UPDATED_LOADED"
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
				return oe
			})), n.d(t, "h", (function() {
				return re
			})), n.d(t, "i", (function() {
				return ie
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
				r = n("./node_modules/lodash/pick.js"),
				i = n.n(r),
				c = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/filterQueryParams/index.ts"),
				d = n("./src/lib/formatApiError/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/apiRequestState.ts"),
				b = n("./src/reddit/actions/imageUploads.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/endpoints/moderator/structuredStyles.ts"),
				O = e => Object.assign(Object.assign(Object.assign(Object.assign({}, e.postBackgroundColor && {
					postBackgroundColor: e.postBackgroundColor
				}), e.postBackgroundImage && {
					postBackgroundImage: e.postBackgroundImage
				}), e.postPlaceholderImage && {
					postPlaceholderImage: e.postPlaceholderImage
				}), e.postTitleColor && {
					postTitleColor: e.postTitleColor
				}),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/actions/postFlairStyleTemplates/constants.ts");
			const g = Object(u.a)(E.c),
				j = Object(u.a)(E.b),
				h = Object(u.a)(E.a);
			var S = n("./src/reddit/actions/toaster.ts"),
				I = n("./src/reddit/actions/widgets/index.ts"),
				T = n("./src/reddit/constants/modals.ts"),
				y = n("./src/reddit/helpers/getGenericUploadError.ts"),
				A = n("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				D = n("./src/reddit/helpers/media/index.ts"),
				R = n("./src/reddit/models/Image/index.tsx"),
				v = n("./src/reddit/models/StructuredStyles/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/selectors/activeModalId.ts"),
				w = n("./src/reddit/selectors/platform.ts"),
				k = n("./src/reddit/selectors/structuredStyles.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				N = n("./src/reddit/helpers/trackers/blade.ts"),
				x = n("./src/telemetry/index.ts"),
				U = n("./src/reddit/actions/structuredStyles/constants.ts");
			const M = Object(u.a)(U.m),
				V = {
					bannerBackgroundImage: ["bannerBackgroundImagePosition"],
					bannerPositionedImage: ["bannerPositionedImagePosition", "secondaryBannerPositionedImage"]
				},
				G = e => {
					const t = Object.assign({}, e);
					return Object.keys(e).forEach(n => {
						V[n] && !e[n] && V[n].forEach(e => t[e] = null)
					}), t
				},
				F = (e, t, n, s) => async (o, r, i) => {
					const {
						apiContext: c
					} = i, a = r(), u = G(t), _ = a.structuredStyles.models[e];
					let O;
					for (const e in u)
						if (u[e] !== _[e]) {
							O = !0;
							break
						} if (!O) return;
					o(Object(l.h)(s));
					const m = Object(N.i)(n)(a);
					let E = null,
						g = null;
					try {
						(E = await Object(b.f)(r(), R.a.StructuredStyles)) && (g = Object(b.m)(E)(o, r, i))
					} catch (T) {
						const e = Object(y.a)("webSocket");
						return void o(Object(l.f)(s, e))
					}
					const j = Object(p.S)(a, {
							subredditId: e
						}).name,
						h = await f.e(c(), j, u),
						I = {};
					if (h.ok) {
						if (g) try {
							await g
						} catch (T) {}
						const n = Object(k.g)(r(), {
							apiRequestId: s
						});
						for (const e in n)
							if (e in t) {
								const t = Object(k.h)(r(), {
									name: e
								});
								t && Object(R.j)(t) && (I[e] = n[e])
							} Object.keys(I).length && o(z(I)), o(Object(l.e)(s)), o(M({
							subredditId: e,
							styles: Object.assign(Object.assign({}, u), I)
						}))
					} else E && E.websocket.close(), o(Object(l.f)(s, h.error)), h.body && o(S.e({
						kind: C.b.Error,
						text: Object(d.a)(h.error, h.status)
					}));
					Object(x.a)(Object.assign(Object.assign({}, m), {
						actionInfo: Object.assign(Object.assign({}, m.actionInfo), {
							success: h.ok
						})
					}))
				}, B = Object(u.a)(U.l), W = Object(u.a)(U.k), H = Object(u.a)(U.j), q = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					t(B({
						subredditId: e
					}));
					const r = Object(p.S)(n(), {
							subredditId: e
						}).name,
						i = await f.f(o(), r);
					if (i.ok) {
						const s = n().structuredStyles.models[e],
							o = s ? s.mobileKeyColor : null;
						t(W({
							subredditId: e,
							styles: {
								mobileKeyColor: o
							}
						}))
					} else t(H(Object.assign({
						subredditId: e
					}, i.error)))
				}, Y = Object(u.a)(U.d), K = e => async (t, n, s) => {
					const o = n(),
						r = o.structuredStyles.models[e] || {},
						i = Object(L.T)(o);
					t(Y({
						isNightmodeOn: i,
						styles: r,
						subredditId: e
					})), ue(e, !1)(t, n, s), (e => async (t, n, s) => {
						let {
							gqlContext: o
						} = s;
						const r = n(),
							i = Object(p.S)(r, {
								subredditId: e
							});
						if (!i) return;
						const c = Object(m.d)(r, {
								subredditId: e
							}),
							a = c && c.templateIds;
						if (!a || !a.length) return;
						t(g({
							subredditId: e
						}));
						const d = await Object(f.a)(o(), i.name, a);
						if (d.ok) {
							const n = {};
							if (d.body) {
								const {
									data: e
								} = d.body;
								if (e && e.subreddit)
									for (const t of e.subreddit.postFlairStyleTemplates) n[t.id] = O(t)
							}
							t(j({
								subredditId: e,
								templates: n
							}))
						} else t(h({
							subredditId: e,
							error: d.error
						}))
					})(e)(t, n, s), Object(I.g)(e, !1)(t, n, s)
				}, z = Object(u.a)(U.c), Q = e => async (t, n, s) => {
					const o = G(e),
						r = n();
					for (const e in o)
						if (Object(v.l)(e))
							if (o[e]) {
								if ("string" != typeof o[e]) {
									const r = o[e],
										i = await Object(R.e)(r);
									X(e, i)(t, n, s), o[e] = ""
								}
							} else {
								const n = Object(k.h)(r, {
									name: e
								});
								n && t(Object(b.h)(n))
							} t(z(o))
				}, J = Object(u.a)(U.f), X = (e, t, n) => async (s, o, r) => {
					const i = o(),
						c = n || i.structuredStyles.isEditing,
						a = Object(p.S)(i, {
							subredditId: c
						}).name;
					s(J({
						imageKey: e,
						uploadId: t.id
					})), s(Object(b.k)(t));
					const d = await f.d(r.apiContext(), a, t.file.name, e, await Object(D.g)(t.file));
					try {
						const n = await Object(b.g)(o(), d, t, R.a.StructuredStyles);
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
				}, Z = Object(u.a)(U.b), $ = (e, t, n) => async (s, r, c) => {
					const a = r(),
						d = a.structuredStyles.models[e] || {},
						u = a.structuredStyles.draft,
						l = Object(N.h)(t)(a);
					if (n) {
						const t = i()(d, n),
							r = o()(u, n),
							c = Object.assign(Object.assign({}, r), t);
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
					Object(x.a)(l)
				}, ee = Object(u.a)(U.e), te = () => async (e, t, n) => {
					const s = t(),
						o = Object(L.U)(s),
						r = !!Object(w.a)(s);
					if (e(ee({
							nightmodeTempUpdated: o
						})), r) return;
					const {
						url: i
					} = s.platform.currentPage;
					i && e(Object(c.c)(Object(a.a)(i, ["styling", "route"])))
				}, ne = Object(u.a)(U.a), se = Object(u.a)(U.n), oe = () => async e => e(te()), re = e => async (t, n) => {
					const s = n(),
						o = Object(k.j)(s);
					!Object(P.b)(T.a.BLADE_UNSAVED_CHANGES)(s) && o && (Object(k.a)(s, {
						subredditId: e
					}) ? t(Object(_.i)(T.a.BLADE_UNSAVED_CHANGES)) : t(oe()))
				}, ie = e => async (t, n) => {
					const s = n();
					Object(k.j)(s) || t(Object(L.T)(s) ? Object(_.i)(T.a.BLADE_NIGHTMODE) : K(e))
				}, ce = Object(u.a)(U.i), ae = Object(u.a)(U.h), de = Object(u.a)(U.g), ue = (e, t) => async (n, s, o) => {
					let {
						gqlContext: r,
						apiContext: i
					} = o;
					n(ce({
						subredditId: e
					}));
					const c = Object(p.S)(s(), {
						subredditId: e
					});
					if (!c) return;
					if (!t) {
						const s = await f.c(i(), c.name, t);
						if (s.ok) {
							const t = s.body,
								o = t.data ? t.data.style : {};
							n(ae({
								subredditId: e,
								styles: o
							}))
						} else n(de(Object.assign({
							subredditId: e
						}, s.error)));
						return
					}
					const a = await f.b(r(), c.name);
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
				return o
			})), n.d(t, "a", (function() {
				return r
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
			const o = "TOOLTIP__DROPDOWN_TOGGLED",
				r = "TOOLTIP__DROPDOWN_SET",
				i = "TOOLTIP__DROPDOWN_UNSET",
				c = "TOOLTIP__DROPDOWN_SET_IF_NONE",
				a = "TOOLTIP__DROPDOWN_UNSET_IF_ACTIVE",
				d = Object(s.a)(r),
				u = Object(s.a)(o),
				l = Object(s.a)(i),
				b = Object(s.a)(c),
				_ = Object(s.a)(a)
		},
		"./src/reddit/actions/unload/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = new Set,
				o = [],
				r = "AD_UNLOAD",
				i = 6e5
		},
		"./src/reddit/actions/users.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return B
			})), n.d(t, "q", (function() {
				return W
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "e", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return K
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "y", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return $
			})), n.d(t, "r", (function() {
				return te
			})), n.d(t, "p", (function() {
				return ne
			})), n.d(t, "x", (function() {
				return se
			})), n.d(t, "s", (function() {
				return oe
			})), n.d(t, "a", (function() {
				return re
			})), n.d(t, "o", (function() {
				return ce
			})), n.d(t, "u", (function() {
				return ae
			})), n.d(t, "m", (function() {
				return de
			})), n.d(t, "n", (function() {
				return ue
			})), n.d(t, "l", (function() {
				return le
			})), n.d(t, "t", (function() {
				return me
			})), n.d(t, "v", (function() {
				return pe
			})), n.d(t, "i", (function() {
				return Ee
			})), n.d(t, "j", (function() {
				return ge
			})), n.d(t, "h", (function() {
				return je
			})), n.d(t, "w", (function() {
				return Te
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				b = n("./src/reddit/endpoints/user/index.ts"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				O = n("./src/reddit/constants/headers.ts"),
				m = n("./src/config.ts"),
				p = n("./src/reddit/helpers/getErrorMsgFromR2JQueryResponse.ts"),
				E = (n("./node_modules/core-js/modules/es7.promise.finally.js"), n("./node_modules/promise-retry/index.js")),
				g = n.n(E),
				j = n("./src/lib/makeRequest/index.ts");
			var h = n("./src/reddit/constants/history.ts"),
				S = n("./src/reddit/endpoints/session/index.ts"),
				I = n("./node_modules/js-cookie/src/js.cookie.js"),
				T = n.n(I),
				y = n("./src/lib/constants/cookie.ts");
			const A = e => {
				T.a.remove(e, {
					domain: m.a.cookieDomain
				})
			};
			var D = n("./src/reddit/helpers/history/index.ts");
			const R = 2 * o.eb;
			var v = e => Date.now() + R < new Date(e.expires).getTime(),
				C = n("./src/reddit/helpers/localStorage/index.ts"),
				P = async (e, t, n) => {
					let s = t.accessToken;
					await g()(async (r, i) => {
						if (!v(t) || !s) {
							const o = await Object(S.b)(e, t, n);
							if (o.ok) {
								const e = o.body;
								s = e.accessToken
							} else if (1 === i) return r()
						}
						const c = await Object(_.a)(e, {
							endpoint: "/logoutproxy",
							method: o.db.POST,
							data: {
								access_token: s
							}
						});
						if (await async function(e, t) {
								return await Object(j.b)({
									method: o.db.POST,
									endpoint: "/timings/logoutrequest",
									data: {
										appName: e.statsAppName,
										successful: t
									},
									type: "json"
								})
							}(e, c && c.ok), !c.ok) return r()
					}, {
						retries: 1
					}).catch(() => {}).finally(() => {
						[y.d, y.e, y.h, y.i].forEach(A), Object(C.H)(null), Object(D.a)(h.a.JustLoggedOut, !0), window.location.reload()
					})
				}, w = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"), k = n("./src/reddit/helpers/trackers/emailCollection.ts"), L = n("./src/reddit/helpers/trackers/emailVerification.ts"), N = n("./src/reddit/models/Toast/index.ts"), x = n("./src/reddit/selectors/activeModalId.ts"), U = n("./src/reddit/selectors/emailCollection.ts"), M = n("./src/reddit/selectors/notificationBanner.ts"), V = n("./src/reddit/selectors/user.ts"), G = n("./src/telemetry/index.ts"), F = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
					}
					return n
				};
			const B = "USER__LOID_RECEIVED",
				W = Object(r.a)(B),
				H = "USER__REQUEST_PENDING",
				q = "USER__REQUEST_LOADED",
				Y = "USER__REQUEST_FAILED",
				K = "USER__SESSION_TRACKER_RECEIVED",
				z = "USER__REDDAID_RECEIVED",
				Q = Object(r.a)(H),
				J = Object(r.a)(q),
				X = Object(r.a)(Y),
				Z = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (n().users.models[e.toLowerCase()] || e === o.A) return;
					t(Q({
						username: e
					}));
					const i = await Object(b.b)(r(), e);
					if (i.ok) {
						const n = {
							data: i.body
						};
						n.username = e, t(J(n))
					} else {
						const n = i.error;
						n.username = e, t(X(n))
					}
				}, $ = "USER__MYSELF_LOADED", ee = Object(r.a)($), te = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const r = t();
					if (r.user.account || !r.user.session || r.user.session.unsafeLoggedOut) return;
					const i = await (e => Object(_.a)(e, {
						endpoint: "".concat(m.a.gatewayUrl, "/desktopapi/v1/me"),
						method: o.db.GET,
						data: {
							api_type: "json",
							gilding_detail: 1,
							awarded_detail: 1
						}
					}))(s());
					i.ok && e(ee(i.body))
				}, ne = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const o = t().user.session;
					Object(w.a)(), o && P(s(), o)
				}, se = Object(r.a)(K), oe = Object(r.a)(z), re = "USER__LAYOUT_SWITCH_VIEWED", ie = Object(r.a)(re), ce = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const o = t();
					o.user.account && !o.user.account.seenLayoutSwitch && (e(ie()), Object(b.d)(s()))
				}, ae = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = await ((e, t) => Object(_.a)(Object(f.a)(e, [O.a]), {
							method: o.db.POST,
							endpoint: "".concat(e.apiUrl, "/api/deactivate_user"),
							data: {
								user: t.username,
								passwd: t.password,
								confirm: t.checkbox,
								deactivate_message: t.feedback
							}
						}))(r(), e),
						c = n().user.session;
					i.ok && i.body && i.body.success ? c && P(r(), c) : t(Object(d.e)({
						kind: N.b.Error,
						text: "Something went wrong deactivating your account. Try again later."
					}))
				}, de = "USER__UPDATE_EMAIL_PENDING", ue = "USER__UPDATE_EMAIL_SUCCESS", le = "USER__UPDATE_EMAIL_FAILURE", be = Object(r.a)(de), _e = Object(r.a)(ue), fe = Object(r.a)(le), Oe = (e, t) => {
					t.isEmailVerificationTooltipShowing && e(Object(i.b)())
				}, me = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = F(e, []);
					if (Object(V.E)(n(), "changeEmail")) return;
					t(be());
					const c = await ((e, t) => {
							let {
								newEmail: n,
								password: s
							} = t;
							return Object(_.a)(Object(f.a)(e, [O.a]), {
								method: o.db.POST,
								endpoint: "".concat(e.apiUrl, "/api/update_email"),
								data: Object.assign(Object.assign({}, s && {
									curpass: s
								}), {
									email: n
								})
							})
						})(r(), i),
						d = n();
					if (c.ok && c.body && c.body.success) {
						Object(M.a)(u.a.EmailCollectionBannerId)(d) && t(Object(a.c)(u.a.EmailCollectionBannerId)), Object(U.a)(d) && Object(G.a)(Object(k.c)(d));
						const e = Object(V.G)(d);
						e || await t(pe()), t(_e(i.newEmail)), e && t(Se()), Oe(t, d)
					} else {
						const e = Object(p.b)(c, "Something went wrong updating your email. Try again later.");
						t(fe(e))
					}
				}, pe = e => async (t, n, r) => {
					let {
						apiContext: i
					} = r;
					const a = await ((e, t) => Object(_.a)(Object(f.a)(e, [O.a]), Object.assign({
							method: o.db.GET,
							endpoint: "".concat(e.apiUrl, "/api/send_verification_email")
						}, t.source && {
							data: t
						})))(i(), {
							source: e
						}),
						u = n();
					if (a.ok && a.body && a.body.success) {
						e && (Object(G.a)(Object(L.f)(e)(u)), Oe(t, u));
						const n = Object(x.a)(u),
							s = n === l.g || n === l.o ? l.o : l.c;
						t(Object(c.i)(s))
					} else t(Object(d.e)({
						duration: d.a,
						kind: N.b.Error,
						text: s.fbt._("Something went wrong sending verification email. Try again later.", null, {
							hk: "2yTdAw"
						})
					}))
				}, Ee = "USER__SEND_RESET_EMAIL_PENDING", ge = "USER__SEND_RESET_EMAIL_SUCCESS", je = "USER__SEND_RESET_EMAIL_FAILURE", he = Object(r.a)(Ee), Se = Object(r.a)(ge), Ie = Object(r.a)(je), Te = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					if (Object(V.E)(n(), "sendResetEmail")) return;
					t(he());
					const i = await ((e, t) => Object(_.a)(Object(f.a)(e, [O.a]), {
						method: o.db.POST,
						endpoint: "".concat(e.apiUrl, "/api/password"),
						data: {
							email: t.curEmail,
							name: t.name
						}
					}))(r(), e);
					if (!i.ok || !i.body || !i.body.success) {
						const e = Object(p.b)(i, "Something went wrong sending the reset email. Please try again.");
						return t(Ie()), void t(Object(d.e)({
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
				return O
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "w", (function() {
				return k
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "v", (function() {
				return N
			})), n.d(t, "L", (function() {
				return x
			})), n.d(t, "C", (function() {
				return U
			})), n.d(t, "M", (function() {
				return M
			})), n.d(t, "N", (function() {
				return V
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
				return oe
			})), n.d(t, "D", (function() {
				return re
			})), n.d(t, "s", (function() {
				return ie
			})), n.d(t, "H", (function() {
				return ce
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/constants/adEvents.ts"),
				r = n("./src/reddit/constants/video.ts"),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/helpers/trackers/media.ts"),
				d = n("./src/reddit/helpers/trackers/postList.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				_ = (n("./src/reddit/selectors/video.ts"), n("./src/telemetry/index.ts"));
			const f = "VIDEO__CONSUMED",
				O = "VIDEO__SET_FULLSCREEN",
				m = "VIDEO__EXIT_FULLSCREEN",
				p = "VIDEO__LOADABLE",
				E = "VIDEO__LOADING",
				g = "VIDEO__PAUSED",
				j = "VIDEO__PLAYABLE",
				h = "VIDEO__METADATA_RECEIVED",
				S = "VIDEO__STARTED",
				I = "VIDEO__UNLOADABLE",
				T = "VIDEO__UNPAUSED",
				y = "VIDEO__TIME_UPDATED",
				A = "VIDEO__BUFFERING",
				D = "VIDEO__PLAYING",
				R = "VIDEO__CONTINUOUS_VIEW_STARTED_AT",
				v = "VIDEO__SET_MUTED_IN_FEED",
				C = (() => {
					let e = "";
					return (t, n, s, o) => async (r, c) => {
						if (null != t) {
							e !== t && (e = t, Object(i.d)(i.a.VideoView));
							const r = c(),
								d = o ? a.b(t, n, s) : a.a(t, n, s);
							Object(_.a)(Object.assign(Object.assign({}, b.defaults(r)), d(r)))
						}
					}
				})(),
				P = Object(s.a)(R),
				w = e => async (t, n) => {
					const s = n(),
						r = Object(l.N)(s, {
							postId: e
						});
					t(C(e, "is_viewable", "video", !1)), r.isSponsored && t(Object(c.t)(r, o.a.VideoViewableImpression))
				}, k = e => async (t, n) => {
					const s = n(),
						r = Object(l.N)(s, {
							postId: e
						});
					r.isSponsored && t(Object(c.t)(r, o.a.VideoGroupMViewable))
				}, L = e => async (t, n) => {
					const s = n(),
						r = Object(l.N)(s, {
							postId: e
						});
					r.isSponsored && t(Object(c.t)(r, o.a.VideoVendorFullyViewable50))
				}, N = e => async (t, n) => {
					const s = n(),
						r = Object(l.N)(s, {
							postId: e
						});
					t(C(e, "is_fully_viewable", "video", !1)), r.isSponsored && t(Object(c.t)(r, o.a.VideoFullyViewableImpression))
				}, x = e => async (t, n) => {
					const s = Object(l.N)(n(), {
						postId: e
					});
					t(C(e, "start", "video", !1)), s.isSponsored && t(Object(c.t)(s, o.a.VideoStarted))
				}, U = (e, t) => async (n, s) => {
					const r = Object(l.N)(s(), {
						postId: t
					});
					n(C(t, "play_with_sound", "video", !1)), n(C(t, "is_viewable", "video", !1)), n(C(t, "is_fully_viewable", "video", !1)), r.isSponsored && (n(Object(c.t)(r, o.a.VideoPlayedWithSound)), e && (n(Object(c.t)(r, o.a.VideoViewableImpression)), n(Object(c.t)(r, o.a.VideoFullyViewableImpression))))
				}, M = (e, t) => async (n, s) => {
					const i = Object(l.N)(s(), {
						postId: t
					});
					let a, d;
					switch (e) {
						case r.b:
							a = "watch_25_percent", d = o.a.VideoWatched25;
							break;
						case r.c:
							a = "watch_50_percent", d = o.a.VideoWatched50;
							break;
						case r.d:
							a = "watch_75_percent", d = o.a.VideoWatched75;
							break;
						case r.e:
							a = "watch_95_percent", d = o.a.VideoWatched95;
							break;
						default:
							a = "watch_100_percent", d = o.a.VideoWatched100
					}
					n(C(t, a, "video", !1)), i.isSponsored && n(Object(c.t)(i, d, a))
				}, V = (e, t) => async (n, s) => {
					const i = Object(l.N)(s(), {
						postId: t
					});
					let a, d;
					switch (e) {
						case r.g:
							a = "watch_3_seconds", d = o.a.VideoWatchedSeconds3;
							break;
						case r.h:
							a = "watch_5_seconds", d = o.a.VideoWatchedSeconds5;
							break;
						default:
							a = "watch_10_seconds", d = o.a.VideoWatchedSeconds10
					}
					n(C(t, a, "video", !1)), i.isSponsored && n(Object(c.t)(i, d, a))
				}, G = Object(s.a)(f), F = Object(s.a)(p), B = Object(s.a)(E), W = Object(s.a)(g), H = Object(s.a)(j), q = Object(s.a)(O), Y = Object(s.a)(h), K = Object(s.a)(y), z = Object(s.a)(m), Q = Object(s.a)(S), J = Object(s.a)(I), X = Object(s.a)(T), Z = Object(s.a)(A), $ = Object(s.a)(D), ee = e => async (t, n) => {
					const s = Object(l.N)(n(), {
						postId: e
					});
					t(q({
						postId: e
					})), ((e, t, n) => {
						n(C(t, "play_expanded", "video", !1)), n(C(t, "is_viewable", "video", !1)), n(C(t, "is_fully_viewable", "video", !1)), e.isSponsored && (n(Object(c.t)(e, o.a.VideoPlayedExpanded)), n(Object(c.t)(e, o.a.VideoViewableImpression)), n(Object(c.t)(e, o.a.VideoFullyViewableImpression)))
					})(s, e, t)
				}, te = (e, t) => async (n, s) => {
					const o = s();
					o.posts.video.autoPlayed[e] && Object(u.k)(o) && (d.d(o, e), void 0 !== t && n(Z({
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
					const o = s();
					Object(u.k)(o) && d.f(o, e)
				}, oe = (e, t) => async (n, s) => {
					n(H({
						postId: e,
						time: t
					}));
					const o = s();
					Object(u.k)(o) && d.a(o, e)
				}, re = e => async (t, n) => {
					const s = n(),
						o = s.posts.video.autoPlayed[e],
						r = s.posts.video.started[e];
					t(Q({
						postId: e
					})), t(X({
						postId: e
					})), !r && o && Object(u.k)(s) && d.c(s, e)
				}, ie = e => async (t, n) => {
					const s = n(),
						o = s.posts.video.autoPlayed[e],
						r = s.posts.video.consumed[e];
					t(G({
						postId: e
					})), o && Object(u.k)(s) && !r && d.b(s, e)
				}, ce = Object(s.a)(v)
		},
		"./src/reddit/actions/vote.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return U
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				c = n("./src/reddit/endpoints/user/index.ts"),
				a = n("./src/reddit/actions/gold/constants.ts");
			const d = Object(s.a)(a.x),
				u = Object(s.a)(a.y);
			var l = n("./src/reddit/actions/login.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/actions/post.ts"),
				f = n("./src/reddit/components/ModerationPrompts/useActivePromptId.ts"),
				O = n("./src/reddit/constants/adEvents.ts"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				E = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeApiRequest/index.ts"),
				j = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				S = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var I = n("./src/reddit/helpers/isComment.ts"),
				T = n("./src/reddit/helpers/isPost.ts"),
				y = n("./src/reddit/helpers/trackers/gild.ts"),
				A = n("./src/reddit/models/Vote/index.ts"),
				D = n("./src/reddit/selectors/comments.ts"),
				R = n("./src/reddit/helpers/chooseVariant/index.ts"),
				v = n("./src/reddit/selectors/user.ts");
			var C = n("./src/reddit/selectors/gild.ts"),
				P = n("./src/reddit/selectors/moderatorPermissions.ts"),
				w = n("./src/reddit/selectors/modQueue.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				L = n("./src/reddit/selectors/posts.ts");
			const N = "VOTE__VOTE_CAST",
				x = Object(s.a)(N),
				U = (e, t) => n => async (s, a, N) => {
					let {
						apiContext: U
					} = N;
					if (!Object(v.I)(a())) return s(Object(b.k)({
						actionSource: b.a.Vote
					})), void s(Object(l.i)());
					const M = e(n, a),
						V = A.b(M, t),
						G = Object(T.a)(n) ? M.postId : n;
					if (s(x({
							id: G,
							isInstance: !1,
							vote: t
						})), (a().posts.instances[G] || []).forEach(e => {
							s(x({
								id: e,
								isInstance: !0,
								vote: t
							}))
						}), V)
						if (Object(T.a)(n)) {
							const e = Object(L.N)(a(), {
									postId: n
								}),
								o = t > 0 ? O.a.Upvote : O.a.Downvote;
							s(Object(_.t)(e, o))
						} else if (Object(I.a)(n)) {
						const e = Object(D.n)(a(), {
							commentId: n
						});
						if (e) {
							const n = Object(L.N)(a(), {
									postId: e.postId
								}),
								o = t > 0 ? O.a.CommentUpvote : O.a.CommentDownvote;
							s(Object(_.t)(n, o))
						}
					}
					const F = a(),
						B = Object(k.i)(F),
						W = !!Object(C.f)(F),
						H = Object(v.cb)(F);
					if (W ? s((() => async (e, t, n) => {
							let {
								apiContext: s
							} = n;
							e(d()), e(Object(r.i)())
						})()) : Object(T.a)(G) && V === A.a.upvoted && !H && (e => {
							const t = Object(R.c)(e, {
								experimentEligibilitySelector: e => Object(v.I)(e),
								experimentName: m.nb
							});
							return Object(m.Nc)(t) ? void 0 : t
						})(F) && (s(((e, t) => async (n, s, o) => {
							let {
								apiContext: a
							} = o;
							n(u(e)), n(Object(r.h)({
								tooltipId: Object(i.a)("View--GiveAward", e, t ? "lightbox" : void 0)
							})), Object(c.c)(a())
						})(G, B)), Object(o.a)(Object(y.viewGiveAwardTooltipEvent)(G)(F))), Object(v.I)(F)) {
						const e = await ((e, t, n) => Object(g.a)(Object(j.a)(e, [h.a]), {
							endpoint: Object(S.a)("".concat(e.apiUrl, "/api/vote")),
							method: E.db.POST,
							data: {
								id: t,
								dir: n,
								api_type: "json"
							}
						}))(U(), G, V);
						e.ok || s(x({
								id: G,
								isInstance: !1,
								vote: t
							})),
							function(e) {
								const {
									moderationPrompt: t
								} = e.body;
								if (!t) return;
								if (!Object(T.a)(n)) return;
								const o = Object(L.N)(F, {
									postId: n
								});
								if (Object(P.g)(F, {
										subredditId: o.belongsTo.id
									})) return;
								if (Object(w.b)(F)) return;
								if (Object(p.F)(F.platform && F.platform.currentPage)) return;
								if (o.isSponsored) return;
								if ("profile" === o.belongsTo.type) return;
								const r = F.experimentOverrides[m.V],
									i = Object(k.i)(F);
								("none" !== t || r && V === A.a.downvoted) && (s(Object(_.J)({
									[n]: {
										moderationPrompt: r || t
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
				return o
			})), n.d(t, "h", (function() {
				return r
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
				o = "WIDGETS__WIDGET_UPDATED",
				r = "WIDGET_DELETED",
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
				return S
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/apiRequestState.ts"),
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
				O = n("./src/lib/assertNever.ts"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/models/Image/index.tsx"),
				E = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/models/Widgets/index.ts"),
				j = n("./src/reddit/actions/widgets/constants.ts");
			const h = Object(o.a)(j.g),
				S = (e, t, n) => async (o, b, f) => {
					const {
						apiContext: O
					} = f;
					o(Object(r.h)(n));
					const j = b(),
						S = Object(m.S)(j, {
							subredditId: e
						}).name,
						I = Object(g.k)(t);
					let T = null,
						y = null;
					try {
						(T = await Object(i.f)(j, p.a.Widgets)) && (y = Object(i.m)(T)(o, b, f))
					} catch (D) {
						const e = Object(_.a)("webSocket");
						return void o(Object(r.f)(n, e))
					}
					const A = await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget"),
						method: a.db.POST,
						type: "json",
						data: n
					}))(O(), S, I);
					if (A.ok) {
						let i = A.body;
						const a = i.id;
						if ("calendar" === t.kind && o(Object(c.e)({
								kind: E.b.SuccessMod,
								text: s.fbt._("New calendar added! It may take a few minutes to see your events appear", null, {
									hk: "4iETrT"
								})
							})), T) {
							try {
								await y
							} catch (D) {}
							i = await o(U(e, a)) || i
						}
						o(h({
							subredditId: e,
							widget: i,
							widgetId: a
						})), o(Object(r.e)(n))
					} else T && T.websocket.close(), o(Object(r.f)(n, A.error))
				}, I = Object(o.a)(j.i), T = (e, t, n) => async (o, b, f) => {
					const {
						apiContext: j
					} = f;
					o(Object(r.h)(n));
					const h = t.id,
						S = b(),
						T = Object(m.S)(S, {
							subredditId: e
						}).name,
						y = Object(g.k)(t);
					let A = null,
						D = null;
					try {
						(A = await Object(i.f)(S, p.a.Widgets)) && (D = Object(i.m)(A)(o, b, f))
					} catch (v) {
						const e = Object(_.a)("webSocket");
						return void o(Object(r.f)(n, e))
					}
					const R = await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget/").concat(n.id),
						method: a.db.PUT,
						type: "json",
						data: n
					}))(j(), T, y);
					if (R.ok) {
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
													s = Object(m.B)(n, t),
													o = Object(m.y)(n, t);
												return {
													name: s.name,
													subscribers: s ? s.subscribers : void 0,
													iconUrl: s ? s.communityIcon : void 0,
													isNSFW: s ? s.isNSFW : void 0,
													isSubscribed: o ? o.userIsSubscriber : void 0
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
									return Object(O.a)(e)
							}
						}(t, R.body, S);
						if (D) {
							try {
								await D
							} catch (v) {}
							i = await o(U(e, h)) || i
						}
						o(I({
							subredditId: e,
							widgetId: h,
							widget: i
						})), "calendar" === t.kind && o(Object(c.e)({
							kind: E.b.SuccessMod,
							text: s.fbt._("Calendar is updated! It may take a few minutes to see your events change", null, {
								hk: "10XWV"
							})
						})), o(Object(r.e)(n))
					} else A && A.websocket.close(), o(Object(r.f)(n, R.error))
				}, y = Object(o.a)(j.h), A = (e, t, n) => async (s, o, i) => {
					let {
						apiContext: c
					} = i;
					s(Object(r.h)(n));
					const b = t.id,
						_ = Object(m.S)(o(), {
							subredditId: e
						}).name,
						f = await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
							endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget/").concat(n.id),
							method: a.db.DELETE,
							type: "json"
						}))(c(), _, t);
					f.ok ? (s(Object(r.e)(n)), s(y({
						subredditId: e,
						widgetId: b
					}))) : s(Object(r.f)(n, f.error))
				}, D = Object(o.a)(j.f), R = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = Object(m.S)(s(), {
						subredditId: e
					}).name;
					(await (async (e, t, n) => Object(d.a)(Object(u.a)(e, [l.a]), {
						endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/widget_order/sidebar"),
						method: a.db.PATCH,
						type: "json",
						data: n
					}))(r(), i, t)).ok && n(D({
						subredditId: e,
						widgetIds: t
					}))
				}, v = e => {
					let {
						imageData: t
					} = e;
					return async (e, n, s) => {
						const o = n(),
							r = o.structuredStyles.isEditing,
							c = Object(m.S)(o, {
								subredditId: r
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
							const s = await Object(i.g)(n(), b, t, p.a.Widgets);
							s && (e(Object(i.j)(s)), _ = !0)
						} catch (O) {
							if (O instanceof Error) throw O;
							e(Object(i.i)(O))
						}
						return _
					}
				}, C = Object(o.a)(j.d), P = Object(o.a)(j.e), w = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					n(Object(r.h)(t));
					const c = Object(m.S)(s(), {
							subredditId: e
						}).name,
						a = await b(i(), c);
					if (a.ok) {
						const s = a.body;
						n(P({
							subredditId: e,
							widgets: s
						})), n(Object(r.e)(t))
					} else n(Object(r.f)(t, a.error))
				}, k = Object(o.a)(j.c), L = Object(o.a)(j.b), N = Object(o.a)(j.a), x = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					n(k({
						subredditId: e
					}));
					const i = Object(m.S)(s(), {
							subredditId: e
						}).name,
						c = await b(r(), i, t);
					if (c.ok) {
						const t = c.body;
						n(L({
							subredditId: e,
							widgets: t
						}))
					} else n(N({
						subredditId: e,
						error: c.error
					}))
				}, U = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = Object(m.S)(s(), {
							subredditId: e
						}).name,
						c = await b(r(), i, !0);
					if (c.ok) return c.body.items[t]
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
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/react-redux/es/index.js");
			const o = e => e.moderationPromptId;

			function r(e, t) {
				return Object(s.d)(o) === i(e.id, t)
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
				return o
			})), n.d(t, "g", (function() {
				return r
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
				return O
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			}));
			const s = "change_email_modal_id",
				o = "check_email_modal_id",
				r = "set_email_modal_id",
				i = "verify_email_modal_id",
				c = "reset_pw_sso_2fa_modal_id",
				a = "reset_pw_sso_email_modal_id",
				d = "reset_pw_sso_google_link_modal_id",
				u = "reset_pw_sso_google_unlink_modal_id",
				l = "reset_pw_sso_apple_link_modal_id",
				b = "reset_pw_sso_apple_unlink_modal_id",
				_ = "reset_pw_sso_deactivate_account_modal_id",
				f = "change_username_modal_id",
				O = "confirm_save_username_modal_id",
				m = "intercept_action_modal_id",
				p = "second_confirm_keep_username_modal_id"
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
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
			const d = o.a.createContext(() => {});

			function u(e) {
				let {
					children: t
				} = e;
				const n = Object(r.e)(),
					a = Object(s.useCallback)(e => {
						{
							const t = n.getState(),
								s = e(t);
							Object(c.a)(Object.assign(Object.assign({}, i.defaults(t)), s))
						}
					}, [n]);
				return o.a.createElement(d.Provider, {
					value: a
				}, t ? o.a.Children.only(t) : null)
			}

			function l() {
				return Object(s.useContext)(d)
			}

			function b(e) {
				function t(t) {
					const n = l();
					return o.a.createElement(e, a({}, t, {
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
				return o
			})), n.d(t, "f", (function() {
				return r
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
				o = "alphaModal",
				r = "over18",
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
					return o
				})),
				function(e) {
					e.ADD_REMOVAL_REASON = "add_removal_reason", e.ALPHA_CONSUMER = "alpha_consumer", e.BADGE_PICKER = "badge_picker", e.BADGE_PURCHASE = "badge_purchase", e.BAN_USER = "ban_user", e.BLADE_NIGHTMODE = "blade_nightmode", e.BLADE_UNSAVED_CHANGES = "blade_unsaved_changes", e.CHANGE_PASSWORD_MODAL_ID = "account_manager_change_password", e.CONFIRM_CLOSE_COIN_MODAL_ID = "confirm_close_coin_modal_id", e.CONFIRM_CLOSE_PREMIUM_MODAL_ID = "confirm_close_premium_modal_id", e.CONTRIBUTOR_REQUEST = "contributor_request", e.CONTRIBUTOR_REQUEST_PENDING = "contributor_request_pending", e.CONVERT_TO_COINS = "convert_to_coins", e.CREATE_SUBREDDIT_CHAT = "create_subreddit_chat", e.DELETE_SUBREDDIT_CHAT = "delete_subreddit_chat", e.DISABLE_TWO_FACTOR = "disable_2fa_modal", e.DOWN_TO_CHAT_PENDING_MODAL = "down_to_chat_pending_modal", e.ECON_COIN_PURCHASE = "econ_coin_purchase", e.ECON_POWERUPS_MARKETING = "econ_powerups_marketing", e.ECON_POWERUPS_PURCHASE = "econ_powerups_purchase", e.ECON_TOP_AWARDERS = "econ_top_awarders", e.EDIT_SUBREDDIT_CHAT = "edit_subreddit_chat", e.ENABLE_TWO_FACTOR = "enable_2fa_modal", e.GOLD_GILD_ANIMATION_OVERLAY = "gold_gild_animation_overlay", e.GOLD_GILD_MODAL = "gold_gild_modal", e.GOLD_TARGETED_OFFER_MODAL = "gold_targeted_offer", e.GOOGLE_ONE_TAP_MODAL_ID = "google_one_tap_modal_id", e.GOVERNANCE_OPT_OUT = "governance_opt_out", e.GOVERNANCE_RELEASE_NOTES = "governance_release_notes", e.HARBERGER_TAX_CRYPTO_BANNER_MANAGE = "harberger_tax_crypto_banner_manage", e.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE = "hargerger_tax_crypto_banner_purchase", e.HARBERGER_TAX_BANNER_MANAGE = "harberger_tax_banner_manage", e.HARBERGER_TAX_BANNER_PURCHASE = "harberger_tax_banner_purchase", e.KEYBOARD_SHORTCUTS = "keyboard_shortcuts", e.LINK_APPLE_SSO = "link_apple_sso", e.LINK_GOOGLE_SSO = "link_google_sso", e.LOGIN_MODAL_ID = "account_manager_login", e.MANAGE_SUBREDDIT_CHAT = "manage_subreddit_chat", e.MOD_TO_MEMBER_SHARE = "mod_to_member_share", e.CROWD_CONTROL = "crowd_control", e.MULTIREDDIT_ADD_SUBREDDIT = "multireddit_add_subreddit", e.MULTIREDDIT_CREATE = "multireddit_create", e.MULTIREDDIT_DUPLICATE = "multireddit_duplicate", e.MULTIREDDIT_EDIT = "multireddit_edit", e.MUTE_USER = "mute_user", e.PINNED_POSTS_LIMIT_REACHED = "pinned_posts_limit_reached", e.REDESIGN_MODAL = "redesign_modal", e.REGISTER_MODAL_ID = "account_manager_register", e.SPEZ_MODAL = "spez_modal", e.SUBREDDIT_CHAT_SETTINGS = "subreddit_chat_settings", e.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT = "subreddit_premium_badge_management", e.SUBREDDIT_PREMIUM_GIFT_MODAL = "subreddit_premium_gift", e.SUBREDDIT_PREMIUM_UPLOAD_MODAL = "subreddit_premium_upload", e.TRANSFER_POINTS = "community_points_transfer", e.TWO_FACTOR_BACKUP_CODES = "two_factor_backup_codes", e.UNLINK_APPLE_SSO = "unlink_apple_sso", e.UNLINK_GOOGLE_SSO = "unlink_google_sso", e.USER_FLAIR_MODAL_ID = "user_flair_modal", e.WALLET_REGISTRATION_MODAL = "wallet_registration_modal"
				}(s || (s = {}));
			const o = [s.GOOGLE_ONE_TAP_MODAL_ID]
		},
		"./src/reddit/constants/preferences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "rpanDuDismissalTime",
				o = "showRpanDu",
				r = "topContentDismissalTime",
				i = "topContentTimesDismissed",
				c = [...["openPostInNewTab", "rememberCommunitySort", "sort", "stylesEnabled", "useMarkdown", "layout", "rememberCommunityLayout", "hasSeenCustomizeFlyout", "reduceAnimationsFromAwards", s, o, r, i, "surveyLastSeenTime"], "activityRelevantAds", "thirdPartyDataPersonalizedAds", "thirdPartySiteDataPersonalizedAds", "thirdPartySiteDataPersonalizedContent", "showLocationBasedRecommendations"]
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "d", (function() {
					return s
				})), n.d(t, "c", (function() {
					return o
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(s || (s = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(o || (o = {}));
			const r = "SHORTCUT_FOCUSABLE_DIV",
				i = [9, 13, 32]
		},
		"./src/reddit/constants/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
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
				o = {
					POST: "post",
					SCREEN: "screen"
				},
				r = "media-element"
		},
		"./src/reddit/constants/video.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return s
			})), n.d(t, "l", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
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
				o = 500,
				r = 25,
				i = 50,
				c = 75,
				a = 95,
				d = 100,
				u = [r, i, c, a, d],
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
				return O
			}));
			var s = n("./src/graphql/operations/SubredditPostFlairStyleTemplates.json"),
				o = n("./src/graphql/operations/SubredditStyles.json"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				d = (n("./src/lib/uploadToS3/index.ts"), n("./src/reddit/constants/headers.ts"));
			n("./src/reddit/helpers/media/index.ts");
			const u = async (e, t, n) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/structured_styles/").concat(t),
				method: r.db.GET,
				data: {
					progressive_images: n
				}
			}), l = async (e, t, n) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/structured_styles/").concat(t),
				method: r.db.PATCH,
				data: n
			}), b = async (e, t) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/structured_styles/").concat(t),
				method: r.db.DELETE
			}), _ = async (e, t, n, s, o) => Object(i.a)(Object(a.a)(e, [d.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/style_asset_upload_s3/").concat(t),
				method: r.db.POST,
				data: {
					filepath: n,
					imagetype: s,
					mimetype: o
				}
			}), f = (e, t) => Object(c.a)(e, Object.assign(Object.assign({}, o), {
				variables: {
					subredditName: t
				}
			})), O = (e, t, n) => Object(c.a)(e, Object.assign(Object.assign({}, s), {
				variables: {
					subredditName: t,
					templateIds: n
				}
			}))
		},
		"./src/reddit/endpoints/page/commentsPage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./src/lib/addQueryParams/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				a = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				d = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			t.a = (e, t, n, u, l, b, _) => {
				let f = n ? "".concat(s.a.gatewayUrl, "/desktopapi/v1/postcomments/").concat(t, "/").concat(n) : "".concat(s.a.gatewayUrl, "/desktopapi/v1/postcomments/").concat(t);
				return f = Object(a.a)(Object(d.a)(f)), l && (f = Object(c.a)(f)), b && (f = Object(o.a)(f, {
					realtime_comments: !0
				})), _ && (f = Object(o.a)(f, {
					blend_new_comments: "1"
				})), Object(i.a)(e, {
					data: u,
					endpoint: f,
					method: r.db.GET,
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
				return O
			})), n.d(t, "u", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "x", (function() {
				return h
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "y", (function() {
				return A
			})), n.d(t, "s", (function() {
				return D
			})), n.d(t, "z", (function() {
				return R
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "e", (function() {
				return M
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./src/graphql/operations/PostIsTrackingCrossposts.json"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var u = n("./src/reddit/helpers/reportPage/index.ts");
			const l = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/approve")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				b = (e, t, n) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/distinguish/").concat(n)),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				_ = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/fetch_title")),
					method: o.db.POST,
					data: {
						url: t,
						api_type: "json"
					}
				}),
				f = (e, t, n) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/follow_post")),
					method: o.db.POST,
					data: {
						follow: n,
						fullname: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/hide")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				m = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unhide")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/lock")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				E = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unlock")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/set_original_content")),
					method: o.db.POST,
					data: {
						fullname: t,
						should_set_oc: n
					}
				}),
				j = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/marknsfw")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unmarknsfw")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				S = (e, t, n) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/sendreplies"),
					method: o.db.POST,
					data: {
						id: t,
						state: n
					}
				}),
				I = (e, t, n) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/remove")),
					method: o.db.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				T = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/del")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => ((e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/save")),
					method: o.db.POST,
					data: {
						id: t
					}
				}))(e, t),
				A = (e, t) => ((e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unsave")),
					method: o.db.POST,
					data: {
						id: t
					}
				}))(e, t),
				D = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/spoiler")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/unspoiler")),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/ignore_reports"),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/unignore_reports"),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				P = (e, t, n, s) => Object(r.a)(Object(c.a)(e, [a.a]), {
					endpoint: "".concat(e.apiUrl, "/api/set_subreddit_sticky"),
					method: o.db.POST,
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
			const k = (e, t) => Object(r.a)(Object(c.a)(e, [a.a]), {
					method: o.db.POST,
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
				N = (e, t, n) => Object(r.a)(Object(c.a)(e, [a.a]), {
					method: o.db.POST,
					endpoint: Object(d.a)("".concat(e.apiUrl, "/api/report")),
					data: x(t, n)
				}),
				x = (e, t) => {
					const n = Object(u.b)(e),
						s = Object.assign(Object.assign({}, n), {
							api_type: "json"
						});
					return t && (s.from_help_desk = !0), s
				},
				U = async (e, t, n) => Object(r.a)(Object(c.a)(e, [a.a]), {
					method: o.db.POST,
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
				return O
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/constants/headers.ts");
			const a = (e, t, n) => Object(o.a)(Object(r.a)(e, [c.a]), {
					method: s.db.POST,
					endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/api/delete_sr_").concat(n),
					data: {
						raw_json: 1
					}
				}),
				d = (e, t) => Object(o.a)(Object(r.a)(e, [c.a]), {
					method: s.db.GET,
					endpoint: "".concat(e.apiUrl, "/r/").concat(t, "/about/edit.json"),
					data: {
						raw_json: 1
					}
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: Object.assign({}, b(e.body.data))
				}) : e),
				u = (e, t, n) => Object(o.a)(Object(r.a)(e, [c.a]), {
					method: s.db.PATCH,
					endpoint: Object(i.a)("".concat(e.apiUrl, "/api/v1/subreddit/update_settings")),
					type: "json",
					data: Object.assign(Object.assign({}, _(n, O)), {
						sr: t
					})
				}),
				l = (e, t, n) => {
					const i = Object.assign(Object.assign({}, f(n)), {
						sr: t
					});
					return Object(o.a)(Object(r.a)(e, [c.a]), {
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
				O = {
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
				m = (e, t, n) => Object(o.a)(Object(r.a)(e, [c.a]), {
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
				return O
			}));
			var s = n("./src/config.ts"),
				o = n("./src/graphql/operations/ExperimentVariants.json"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const l = (e, t) => Object(i.a)(e, {
					endpoint: Object(u.a)("".concat(s.a.gatewayUrl, "/desktopapi/v1/user/").concat(t, "/about")),
					method: r.db.GET,
					data: {
						api_type: "json",
						gilding_detail: 1,
						awarded_detail: 1
					}
				}),
				b = e => Object(i.a)(Object(a.a)(e, [d.a]), {
					endpoint: "".concat(e.apiUrl, "/api/seen_layout_switch"),
					method: r.db.POST
				}),
				_ = e => Object(i.a)(Object(a.a)(e, [d.a]), {
					endpoint: "".concat(e.apiUrl, "/api/seen_give_award_tooltip"),
					method: r.db.POST
				}),
				f = e => Object(i.a)(Object(a.a)(e, [d.a]), {
					endpoint: "".concat(e.apiUrl, "/api/seen_modal"),
					method: r.db.POST
				}),
				O = (e, t) => Object(c.a)(e, Object.assign(Object.assign({}, o), {
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
				return O
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "h", (function() {
				return j
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
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
			const _ = e => Object(r.a)(Object(i.a)(e, [b.a]), {
					method: o.db.PATCH,
					endpoint: "".concat(e.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						over_18: "true"
					}
				}),
				f = (e, t) => Object(r.a)(Object(i.a)(t, [b.a]), {
					method: o.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						video_autoplay: e
					}
				}),
				O = (e, t) => Object(r.a)(Object(i.a)(t, [b.a]), {
					method: o.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						nightmode: e
					}
				}),
				m = (e, t) => Object(r.a)(Object(i.a)(t, [b.a]), {
					method: o.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: {
						geopopular: e
					}
				}),
				p = (e, t) => Object(r.a)(Object(i.a)(t, [b.a]), {
					method: o.db.PATCH,
					endpoint: "".concat(t.apiUrl, "/api/v1/me/prefs"),
					type: "json",
					data: a(e)
				}),
				E = (e, t) => Object(r.a)(Object(i.a)(t, [b.a]), {
					method: o.db.POST,
					endpoint: "".concat(t.apiUrl, "/api/quarantine_optin"),
					data: {
						sr_name: e,
						api_type: "json",
						accept: !0
					}
				}),
				g = (e, t) => Object(r.a)(t, {
					method: o.db.POST,
					endpoint: Object(d.a)("".concat(s.a.gatewayUrl, "/desktopapi/v1/set_preferences")),
					type: "json",
					data: {
						type: "account",
						preferences: a(e)
					}
				}),
				j = (e, t, n) => Object(r.a)(n, {
					method: o.db.POST,
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
				o = n("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				r = n("./src/reddit/selectors/platform.ts");
			const i = (e, t, n) => [e, t, n].join("/"),
				c = (e, t) => {
					switch (t) {
						case o.a.SUBREDDIT:
						case o.a.COMMENTS_OVERLAY:
						case o.a.COMMENTS: {
							const t = Object(r.i)(e);
							return [i(s.c.ABOVE_THE_FOLD, t, 0), i(s.c.BELOW_THE_FOLD, t, 1)]
						}
						case o.a.FRONTPAGE:
							return [i(s.c.ABOVE_THE_FOLD, !1, 0), i(s.c.BELOW_THE_FOLD, !1, 1)];
						case o.a.MULTIREDDIT:
						case o.a.SEARCH_RESULTS:
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
				return r
			}));
			const s = {
					INVALID_EMAIL: "You entered an invalid email. Please try again.",
					RATELIMITED: "You are doing that too much. Please try later.",
					WRONG_PASSWORD: "You entered an incorrect password. Please try again."
				},
				o = (e, t) => -1 !== e.indexOf(t);

			function r(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Something went wrong. Please try again.";
				const n = e && e.body && e.body.jquery && e.body.jquery[14] && e.body.jquery[14][3] && e.body.jquery[14][3][0];
				return "string" != typeof n ? t : o(n, "the following emails are invalid") ? s.INVALID_EMAIL : o(n, "wrong password") ? s.WRONG_PASSWORD : o(n, "you are doing that too much") ? s.RATELIMITED : t
			}
		},
		"./src/reddit/helpers/getGenericUploadError.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/constants/index.ts");

			function o(e) {
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
				o = n("./src/lib/ads/store.ts"),
				r = n("./src/reddit/constants/adEvents.ts");
			const i = (e, t) => {
					return Object.keys(e).reduce((n, s) => (n[s] = t - (e[s].timeEntered || t), n), {})
				},
				c = (e, t, n, s, o) => t === n ? s : !(!o || !o[e]) && o[e],
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
						} = o.c(e) || o.a,
						O = Object(s.t)(e, f, "timeUpdated"),
						{
							videoData: m
						} = t,
						p = i(b, l),
						E = i(_, l),
						g = !!t.videoData.videoVolume && t.videoData.videoVolume <= 0,
						j = m.videoStartTime ? m.videoStartTime + 200 : 0,
						h = {
							inView50: j >= (_[50].timeEntered || Number.MAX_SAFE_INTEGER),
							inView80: j >= (_[80].timeEntered || Number.MAX_SAFE_INTEGER),
							inView100: j >= (_[100].timeEntered || Number.MAX_SAFE_INTEGER),
							audible: !g && j >= (O.muted || 0),
							muted: g && j >= (O.muted || 0)
						},
						S = b[1].totalTime + p[1],
						I = b[50].totalTime + p[50],
						T = b[100].totalTime + p[100],
						y = Math.max(b[1].maxContinuousTime, p[1]),
						A = Math.max(b[30].maxContinuousTime, p[30]),
						D = Math.max(b[50].maxContinuousTime, p[50]),
						R = Math.max(b[100].maxContinuousTime, p[100]),
						v = D > s.l,
						C = document.getElementById(e);
					if (!C) return null;
					const P = C.getElementsByTagName("video");
					let w = null;
					P && P[0] && (w = P[0].getBoundingClientRect());
					const k = C.getBoundingClientRect(),
						L = (d = Math.floor(k.width)) * (u = Math.floor(k.height)),
						N = L > 242499 && D >= 1e3 || R >= 1e3 || n === r.a.GroupMViewable ? 1 : 0,
						x = L > 242499 && A >= 1e3 || R >= 1e3 ? 1 : 0,
						U = Math.max(_[100].maxContinuousTime, E[100]) > 1,
						M = _.HALF_DURATION_80_IN_VIEW_AUDIBLE,
						V = {
							w: d,
							h: u,
							sw: window.screen.width,
							sh: window.screen.height,
							t: l,
							a: S,
							b: I,
							c: T,
							d: y,
							e: D,
							f: R,
							g: N ? 1 : 0,
							i: n === r.a.Impression ? l : t.timeImpressionViewed || 0,
							o: v ? 1 : 0,
							q: x ? 1 : 0,
							r: t.eventGlobalCount ? t.eventGlobalCount : 0
						};
					return m.isVideo && (V.va = m.isVideo ? 1 : 0, V.vh = w ? Math.floor(w.height) : 0, V.vw = w ? Math.floor(w.width) : 0, V.ve = m.videoVolume || 0, V.vc = Math.floor(m.videoDuration || 0), V.vd = Math.floor(m.cumulativeViewedTime) || 0, V.vq = m.wasFullScreen || 0, V.vg = _[1].timeEntered ? 1 : 0, V.vb = _[50].totalTime + E[50], V.vs = a(m.videoVolume, _[1].timeEntered, n === r.a.VideoStarted, m.videoStarted), V.vt = a(m.videoVolume, _[1].timeEntered, n === r.a.VideoWatched25, m.watched25), V.vu = a(m.videoVolume, _[1].timeEntered, n === r.a.VideoWatched50, m.watched50), V.vv = a(m.videoVolume, _[1].timeEntered, n === r.a.VideoWatched75, m.watched75), V.vx = a(m.videoVolume, _[1].timeEntered, n === r.a.VideoWatched100, m.watched100), V.vo = c("vo", n, r.a.VideoWatched50, h.inView100, m.watched50State) ? 1 : 0, V.vr = c("vr", n, r.a.VideoWatched50, h.inView80 && h.audible, m.watched50State) || M.totalTime + E.HALF_DURATION_80_IN_VIEW_AUDIBLE >= 15e3 ? 1 : 0, V.vj = c("vj", n, r.a.VideoWatched50, h.inView100 && h.audible, m.watched50State) ? 1 : 0, V.vl = c("vl", n, r.a.VideoWatched100, h.inView100, m.watched100State) ? 1 : 0, V.vk = c("vk", n, r.a.VideoWatched100, h.audible, m.watched100State) ? 1 : 0, V.vp = c("vp", n, r.a.VideoWatched100, h.inView100 && h.audible, m.watched100State) ? 1 : 0, V.vm = c("vm", n, r.a.VideoWatched100, h.inView50 && h.audible, m.watched100State) ? 1 : 0, V.vn = c("vn", n, r.a.VideoWatched100, h.inView50 && h.muted, m.watched100State) ? 1 : 0, V.vy = _.FULL_IN_VIEW_AUDIBLE_TIME.totalTime + E.FULL_IN_VIEW_AUDIBLE_TIME, V.vz = _[100].totalTime + E[100], V.xa = U ? 1 : 0, V.xb = Math.max(_[50].maxContinuousTime, E[50])), V
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
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s);
			const r = (e, t) => {
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
						state: Object.assign({}, o()(history.state.state, e))
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
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/reddit/helpers/path/index.ts");
			const i = e => {
					if ("string" == typeof e) return Object(s.c)(Object(r.b)(e), {
						isOverlay: !0
					}); {
						const t = Object(s.c)(e);
						return t.state = Object.assign(Object.assign({}, t.state || {}), {
							isOverlay: !0
						}), t
					}
				},
				c = e => Object(o.b)(i(e))
		},
		"./src/reddit/helpers/redesignOptoutCookie/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/js-cookie/src/js.cookie.js"),
				r = n.n(o);
			const i = "redesign_optout";

			function c() {
				const e = new Date;
				return e.setFullYear(e.getFullYear() + 3), e
			}

			function a() {
				r.a.get(i) || r.a.set(i, "true", {
					domain: s.a.cookieDomain,
					expires: c()
				})
			}

			function d() {
				r.a.get(i) && r.a.remove(i, {
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
				return O
			})), n.d(t, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var s = n("./src/reddit/models/RulesSequence/index.ts");
			const o = "(?:old\\.reddit\\.".concat("(?:com|local)", "|new\\.reddit\\.").concat("(?:com|local)", "|reddit\\.").concat("(?:com|local)", "|www\\.reddit\\.").concat("(?:com|local)", ")"),
				r = "(?:".concat("(?:r)", "|").concat("(?:user|u)", ")"),
				i = "(?:https?://)",
				c = "^".concat(i).concat(o, "/").concat(r, "/").concat("(?:[^/]+)", "/comments/").concat("(?:\\w+)", "/").concat("(?:[^/]+)", "/").concat("(\\w+)", "(?:/.*)?"),
				a = "^".concat(i).concat(o, "/").concat(r, "/").concat("(?:[^/]+)", "/comments/").concat("(\\w+)", "(?:/.*)?"),
				d = "^".concat(i).concat(o, "/message/messages/").concat("(\\w+)", "(?:/.*)?"),
				u = "^".concat(i, "?").concat("(?:mod.reddit.com/mail)", "/").concat("(?:[^/]+)", "/").concat("(\\w+)", "(?:/)?$"),
				l = "^".concat(i, "?").concat("(?:mod.reddit.com/mail)", "/").concat("(?:[^/]+)", "/").concat("(\\w+)", "/").concat("(\\w+)", "(?:/)?$"),
				b = "(?:".concat(a, "|").concat(c, "|").concat(d, "|").concat(u, "|").concat(l, ")"),
				_ = "(?:(?:".concat(i, "?").concat(o, "/)?").concat("(?:user|u)", "/)?").concat("([\\w-]+)", "(?:/)?"),
				f = "(?:(?:".concat(i, "?").concat(o, "/)?").concat("(?:r)", "/)?").concat("([\\w-]+)", "(?:/)?"),
				O = e => {
					const t = new RegExp(c),
						n = new RegExp(a),
						s = new RegExp(d),
						o = new RegExp(u),
						r = new RegExp(l);
					let i, b, O;
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
						} else if (r.test(c)) {
							const e = r.exec(c);
							e && e.length > 2 && (b = e[1], O = e[2])
						} else if (o.test(c)) {
							const e = o.exec(c);
							e && e.length > 1 && (b = e[1])
						}
					}
					const m = new RegExp(_),
						p = new RegExp(f),
						E = [];
					let g;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (p.test(t)) {
							const e = p.exec(t);
							e && e.length > 1 && (g = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let c = 0; c < e.usernames.length; c++) {
							const t = e.usernames[c].trim();
							if (m.test(t)) {
								const e = m.exec(t);
								e && e.length > 1 && E.push(e[1])
							}
						}
					const {
						reason: j
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: j.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: b,
						modmail_msg_id: O,
						sr_name: g,
						thing_id: i,
						usernames: E.length ? E.join(",") : void 0
					}
				},
				m = (e, t) => {
					const n = new s.a;
					return p(n, e, t, 0), n
				},
				p = (e, t, n, s) => {
					for (let o = 0; o < t.length; o++) {
						const r = t[o];
						e.update(o, s);
						const i = e.getSequence().length;
						if (r.reasonAsParam === n) return;
						if (r.nextStepReasons && r.nextStepReasons.length && (p(e, r.nextStepReasons, n, s + 1), e.getSequence().length > i)) return;
						e.cut(s - 1)
					}
				}
		},
		"./src/reddit/helpers/trackers/authorHovercard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return r
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
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					comment: t && Object(s.a)(t) ? o.comment(e, t) : null,
					post: t ? o.post(e, t) : null,
					profile: o.profile(e),
					screen: o.screen(e)
				}),
				i = (e, t) => n => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: e
				}, r(n, t)),
				c = e => t => Object.assign({
					source: "user_hovercard",
					action: "view",
					noun: "hover_user_hovercard"
				}, r(t, e)),
				a = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "mute_dialog_in_context"
				}, r(t, e)),
				d = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "ban_dialog_in_context"
				}, r(t, e)),
				u = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "unban_user_in_context"
				}, r(t, e)),
				l = e => t => Object.assign({
					source: "user_hovercard",
					action: "click",
					noun: "change_user_flair_in_context",
					userSubreddit: o.userSubreddit(t)
				}, r(t, e)),
				b = e => t => Object.assign({
					source: o.profile(t) ? "user_profile" : "user_hovercard",
					action: "click",
					noun: "create_chat"
				}, e && r(t, e))
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
				return O
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			}));
			var s = n("./src/reddit/constants/blade.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => n => Object.assign(Object.assign({}, o.defaults(n)), {
					source: s.d.Appearance,
					action: "click",
					noun: e,
					actionInfo: o.actionInfo(n, {
						paneName: t
					}),
					subreddit: o.subreddit(n)
				}),
				i = e => r("save_style", e),
				c = e => r("cancel_style", e),
				a = e => t => ({
					source: s.d.Structure,
					action: "click",
					noun: e,
					screen: o.screen(t),
					subreddit: o.subreddit(t)
				}),
				d = e => t => ({
					source: s.d.Appearance,
					action: "click",
					noun: e,
					screen: o.screen(t),
					subreddit: o.subreddit(t)
				}),
				u = (e, t) => n => ({
					source: "colorpicker",
					action: "click",
					noun: e,
					actionInfo: o.actionInfo(n, {
						paneName: s.g[t]
					}),
					screen: o.screen(n),
					subreddit: o.subreddit(n)
				}),
				l = e => t => ({
					source: s.h[e],
					action: "click",
					noun: "colorpicker",
					actionInfo: o.actionInfo(t, {
						paneName: s.g[e]
					}),
					screen: o.screen(t),
					subreddit: o.subreddit(t)
				}),
				b = e => ({
					screen: o.screen(e),
					subreddit: o.subreddit(e)
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
				O = () => e => Object.assign({
					source: s.d.Appearance,
					action: "click",
					noun: "back"
				}, b(e)),
				m = (e, t) => Object.assign(Object.assign({}, o.defaults(e)), (e => t => Object.assign({
					source: s.d.PostFlairManagement,
					action: "click",
					noun: e
				}, b(t)))(t)(e)),
				p = e => t => ({
					source: s.d.MenuLinks,
					action: "click",
					noun: e ? "wiki_link_on" : "wiki_link_off",
					screen: o.screen(t),
					subreddit: o.subreddit(t),
					userSubreddit: o.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/emailCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
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
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => t => ({
					source: e,
					action: s.c.VIEW,
					actionInfo: o.actionInfo(t, {
						settingValue: "footer_2"
					}),
					noun: "email_collection"
				}),
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					actionInfo: o.actionInfo(t, {
						settingValue: "footer_2"
					}),
					noun: "add_email_collection"
				}),
				c = e => t => ({
					source: e,
					action: "close",
					actionInfo: o.actionInfo(t, {
						settingValue: "footer_2"
					}),
					noun: "email_collection"
				}),
				a = e => Object.assign(Object.assign({}, o.defaults(e)), {
					source: "popup",
					action: s.c.CLICK,
					actionInfo: o.actionInfo(e, {
						settingValue: "footer_2"
					}),
					noun: "save_email_collection"
				}),
				d = e => t => Object.assign(Object.assign({}, o.defaults(t)), {
					source: "popup",
					action: s.c.CLICK,
					actionInfo: o.actionInfo(t, {
						reason: e ? "1" : "0",
						settingValue: "footer_2"
					}),
					noun: "email_digest_check"
				}),
				u = e => Object.assign(Object.assign({}, o.defaults(e)), {
					source: "popup",
					action: s.c.CLICK,
					actionInfo: o.actionInfo(e, {
						settingValue: "footer_2"
					}),
					noun: "email_settings_link"
				})
		},
		"./src/reddit/helpers/trackers/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "g", (function() {
				return r
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
			const o = "tooltip",
				r = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
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
				return a
			})), n.d(t, "clickGildEvent", (function() {
				return l
			})), n.d(t, "clickRpanGiveAward", (function() {
				return b
			})), n.d(t, "clickAddAward", (function() {
				return _
			})), n.d(t, "clickHideAward", (function() {
				return f
			})), n.d(t, "clickConfirmHideAward", (function() {
				return O
			})), n.d(t, "clickCancelHideAward", (function() {
				return m
			})), n.d(t, "clickAwardReportFlow", (function() {
				return E
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return g
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return j
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return h
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return S
			})), n.d(t, "clickReportAward", (function() {
				return I
			})), n.d(t, "clickCancelReportAward", (function() {
				return T
			})), n.d(t, "clickConfirmReportAward", (function() {
				return y
			})), n.d(t, "viewGildModalEvent", (function() {
				return A
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return D
			})), n.d(t, "viewGiveAwardTooltipEvent", (function() {
				return R
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return v
			})), n.d(t, "clickMessageInputEvent", (function() {
				return C
			})), n.d(t, "typeMessageInputEvent", (function() {
				return P
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return w
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return k
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return L
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return N
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return x
			})), n.d(t, "clickNextButtonEvent", (function() {
				return U
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return M
			})), n.d(t, "viewSuccessAwardEvent", (function() {
				return V
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return G
			})), n.d(t, "clickFilterEvent", (function() {
				return F
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return B
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const a = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? "gid_appreciation" : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? "gid_premium" : e.awardSubType === s.d.Group ? "gid_group" : e.awardType === s.f.Community ? "gid_community" : e.awardType === s.f.Moderator ? "gid_mod" : e.id,
				d = (e, t) => Object.assign({
					awardId: e.id,
					awardName: e.name,
					numberCoinsToRecipient: e.coinReward,
					type: a(e)
				}, t),
				u = (e, t) => Object.assign(Object.assign({}, o.defaults(e)), {
					comment: t ? o.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(r.d)(r.a.GildingFlow, !1),
					post: t ? o.post(e, t) : void 0,
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				l = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				b = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				_ = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				f = (e, t) => n => Object.assign(Object.assign({}, u(n, t)), {
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: d(e)
				}),
				O = (e, t) => n => Object.assign(Object.assign({}, u(n, t)), {
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: d(e)
				}),
				m = (e, t) => n => Object.assign(Object.assign({}, u(n, t)), {
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: d(e)
				}),
				p = e => (t, n) => s => Object.assign(Object.assign({}, u(s, n)), {
					source: Object(i.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: d(t)
				}),
				E = p("award_hovercard_report"),
				g = p("cancel_award_hovercard_report"),
				j = p("flag_award"),
				h = p("cancel_flag_award"),
				S = p("confirm_flag_award"),
				I = p("report_community_award"),
				T = p("cancel_report_community_award"),
				y = p("confirm_report_community_award"),
				A = (e, t, n) => s => Object.assign(Object.assign({}, u(s, n)), {
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				D = (e, t, n) => s => Object.assign(Object.assign({}, u(s, t)), {
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: d(e, n)
				}),
				R = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "view",
					noun: "tooltip"
				}),
				v = (e, t) => n => Object.assign(Object.assign({}, u(n, t)), {
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				C = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				w = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				k = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				L = (e, t) => n => Object.assign(Object.assign({}, u(n, e)), {
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: Object.assign({
						contentType: Object(i.a)(e) ? "comment" : "post"
					}, d(t))
				}),
				N = (e, t) => n => Object.assign(Object.assign({}, u(n, e)), {
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: Object.assign({
						contentType: Object(i.a)(e) ? "comment" : "post"
					}, d(t))
				}),
				x = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				U = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				M = e => t => Object.assign(Object.assign({}, u(t, e)), {
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				V = (e, t, n) => s => Object.assign(Object.assign({}, u(s, e)), {
					source: "give_gold",
					action: "view",
					noun: "success",
					goldPurchase: Object.assign({
						contentType: Object(i.a)(e) ? "comment" : "post",
						numberCoins: t
					}, d(n))
				}),
				G = e => {
					let {
						award: t,
						awardeeKarmaEarned: n,
						awarderKarmaEarned: s,
						numberCoins: o,
						thingId: r
					} = e;
					return e => Object.assign(Object.assign({}, u(e, r)), {
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: Object.assign({
							contentType: Object(i.a)(r) ? "comment" : "post",
							awardeeKarmaEarned: n,
							awarderKarmaEarned: s,
							numberCoins: o
						}, d(t))
					})
				},
				F = e => t => Object.assign(Object.assign({}, u(t)), {
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				B = () => e => Object.assign(Object.assign({}, u(e)), {
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				W = () => e => Object.assign(Object.assign({}, u(e)), {
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/media.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t, n) => r => ({
					source: "videoplayer",
					action: t,
					noun: n,
					experiment: o.experiment(r, s.Ec),
					post: o.post(r, e),
					media: o.media(r, e),
					profile: o.profile(r),
					subreddit: o.subreddit(r),
					actionInfo: o.mediaActionInfo(r, e),
					correlationId: o.videoCorrelationId()
				}),
				i = e => t => ({
					source: "videoplayer",
					action: "underrun",
					noun: "playback",
					experiment: o.experiment(t, s.Ec),
					post: o.post(t, e),
					profile: o.profile(t),
					subreddit: o.subreddit(t),
					actionInfo: o.mediaActionInfo(t, e),
					media: o.media(t, e)
				}),
				c = (e, t, n) => s => Object.assign(Object.assign({}, r(e, t, n)(s)), {
					timer: o.videoPlayerFirstFrameTimer(s, e),
					media: Object.assign(Object.assign({}, o.media(s, e)), o.videoPlayerMaxTimeServed(s, e))
				})
		},
		"./src/reddit/helpers/trackers/post.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return I
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				a = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			const l = e => e && e.meta && e.meta.name && e.meta.name === s.Bb.DUPLICATES,
				b = (e, t, n) => {
					const {
						currentPage: s
					} = e.platform, i = l(s) ? "other_discussions" : "post", c = Object(a.b)(e);
					if (c) {
						const s = Object(r.a)(e),
							i = s ? s.id : void 0;
						return Object(u.a)(Object.assign(Object.assign({}, d.defaults(e)), {
							action: "view",
							actionInfo: d.actionInfo(e, {
								position: "number" == typeof n ? n + 1 : void 0
							}),
							correlationId: Object(o.c)(o.a.LinkedPosts),
							media: d.media(e, t),
							mlModel: d.listingBelowMlModel(c, i),
							noun: "post",
							post: d.post(e, t),
							profile: d.profile(e),
							source: "post_detail",
							subreddit: d.subreddit(e)
						}))
					}
					return Object(u.a)(Object.assign(Object.assign({
						source: i,
						action: "view",
						noun: "post"
					}, d.defaults(e)), {
						actionInfo: d.actionInfo(e, {
							position: n
						}),
						post: d.post(e, t),
						profile: d.profile(e),
						media: d.media(e, t),
						screen: d.screen(e),
						subreddit: d.subreddit(e)
					}))
				},
				_ = (e, t) => Object(u.a)(Object.assign(Object.assign({
					source: "post",
					action: "view",
					noun: "ad"
				}, d.defaults(e)), {
					post: d.post(e, t),
					media: d.media(e, t),
					screen: d.screen(e),
					subreddit: d.subreddit(e)
				})),
				f = (e, t, n, s) => Object(u.a)(Object.assign(Object.assign({
					source: "post",
					action: "consume",
					noun: "post"
				}, d.defaults(e)), {
					actionInfo: d.actionInfo(e, {
						position: s
					}),
					post: d.post(e, t, n),
					media: d.media(e, t),
					screen: d.screen(e),
					subreddit: d.subreddit(e)
				})),
				O = (e, t, n, s) => ({
					noun: s,
					post: d.post(e, t),
					source: n
				}),
				m = (e, t, n, s) => {
					const {
						currentPage: o
					} = e.platform;
					if (l(o)) {
						const n = Object(c.m)(o && o.urlParams.partialPostId || "");
						return {
							noun: "post",
							post: d.post(e, n),
							source: "other_discussions",
							targetPost: d.post(e, t)
						}
					}
					return O(e, t, n, s)
				},
				p = function(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "post",
						s = arguments.length > 3 ? arguments[3] : void 0,
						r = arguments.length > 4 ? arguments[4] : void 0,
						c = arguments.length > 5 ? arguments[5] : void 0,
						u = arguments.length > 6 ? arguments[6] : void 0;
					return b => {
						const _ = d.post(b, e);
						(null == _ ? void 0 : _.promoted) && Object(i.Y)(e);
						const {
							currentPage: f
						} = b.platform, p = l(f) ? m(b, e, n, t) : O(b, e, n, t), E = Object(a.b)(b) || c, g = d.defaults(b);
						if (E) {
							const n = s ? d.getRelativePostOrder(b, e, s) : null;
							return Object.assign(Object.assign({}, g), {
								action: "click",
								actionInfo: Object.assign(Object.assign({}, g.actionInfo), {
									position: "number" == typeof n ? n + 1 : void 0,
									referralId: u
								}),
								correlationId: Object(o.c)(o.a.LinkedPosts),
								media: d.media(b, e),
								mlModel: d.listingBelowMlModel(E, r),
								noun: t,
								post: _,
								profile: d.profile(b),
								source: "post_detail",
								subreddit: d.subreddit(b)
							})
						}
						return Object.assign(Object.assign(Object.assign({}, p), g), {
							action: "click",
							actionInfo: Object.assign(Object.assign({}, g.actionInfo), {
								referralId: u
							}),
							media: d.media(b, e),
							subreddit: d.subreddit(b) || d.subredditByPostOrCommentId(b, e)
						})
					}
				},
				E = (e, t) => n => Object(u.a)(Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: t
				}, d.defaults(n)), {
					post: d.post(n, e),
					media: d.media(n, e),
					screen: d.screen(n),
					session: d.session(n),
					subreddit: d.subreddit(n)
				})),
				g = (e, t) => ({
					post: d.post(e, t),
					profile: d.profile(e)
				}),
				j = e => t => Object.assign(Object.assign({
					action: "pin",
					noun: "post",
					source: "profile"
				}, g(t, e)), d.defaults(t)),
				h = e => t => Object.assign(Object.assign({
					action: "unpin",
					noun: "post",
					source: "profile"
				}, g(t, e)), d.defaults(t)),
				S = (e, t, n) => s => Object.assign(Object.assign({
					action: "click",
					noun: "vote",
					source: "poll"
				}, d.defaults(s)), {
					poll: d.poll(s, e, !0, n),
					post: d.post(s, t),
					subreddit: d.subreddit(s),
					userSubreddit: d.userSubreddit(s)
				}),
				I = (e, t) => n => Object.assign(Object.assign({
					action: "view",
					noun: "results",
					source: "poll"
				}, d.defaults(n)), {
					poll: d.poll(n, e, !1),
					post: d.post(n, t),
					subreddit: d.subreddit(n),
					userSubreddit: d.userSubreddit(n)
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "w", (function() {
				return j
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "z", (function() {
				return T
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "t", (function() {
				return R
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "y", (function() {
				return P
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "m", (function() {
				return M
			})), n.d(t, "h", (function() {
				return V
			})), n.d(t, "e", (function() {
				return G
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
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/helpers/media/index.ts"),
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
				O = e => Object.assign(Object.assign({
					source: "post_composer",
					action: s.c.CLICK
				}, d.defaults(e)), {
					screen: d.screen(e),
					correlationId: Object(o.c)(o.a.PostComposer)
				}),
				m = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === i.h.MARKDOWN ? "markdown" : "rte"
				},
				p = e => {
					Object(l.a)(Object.assign({
						noun: "cancel"
					}, O(e)))
				},
				E = e => {
					Object(l.a)(Object.assign({
						noun: "discard"
					}, O(e)))
				},
				g = e => {
					Object(l.a)(Object.assign(Object.assign({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e)
					}, O(e)), {
						actionInfo: d.chatPostActionInfo(e)
					}))
				},
				j = e => {
					Object(l.a)(Object.assign({
						noun: "subreddit_selector"
					}, O(e)))
				},
				h = (e, t) => {
					Object(l.a)(Object.assign({
						noun: "post_type_selector",
						postComposer: {
							type: f[t]
						}
					}, O(e)))
				},
				S = () => e => Object.assign({
					noun: "add_option"
				}, O(e)),
				I = () => e => Object.assign({
					noun: "voting_length"
				}, O(e)),
				T = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(l.a)(Object.assign({
						noun: t
					}, O(e))) : Object(l.a)(Object.assign({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						}
					}, O(e)))
				},
				y = (e, t, n) => {
					Object(l.a)(Object.assign({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: Object.assign({
							type: t
						}, m(e, t)),
						post: n ? d.post(e, n) : null
					}, O(e)))
				},
				A = (e, t) => {
					const n = t === i.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(l.a)(Object.assign({
						noun: n
					}, O(e)))
				},
				D = (e, t) => {
					Object(l.a)(Object.assign({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: Object.assign({
							type: t
						}, m(e, t))
					}, O(e)))
				},
				R = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(l.a)(Object.assign(Object.assign({}, O(e)), {
						noun: "media",
						action: s.c.REJECT,
						actionInfo: Object.assign(Object.assign({}, d.actionInfo(e)), {
							reason: JSON.stringify(n.error)
						})
					}))
				},
				v = (e, t) => {
					t.forEach(t => {
						const n = Object(r.f)(t.type);
						n && Object(l.a)(Object.assign(Object.assign({}, O(e)), {
							action: s.c.DRAG,
							noun: n
						}))
					})
				},
				C = (e, t, n) => {
					Object(l.a)(Object.assign(Object.assign({}, O(e)), {
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					}))
				},
				P = (e, t, n) => {
					Object(l.a)(Object.assign(Object.assign({}, O(e)), {
						noun: n,
						action: Object(b.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					}))
				},
				w = e => N("input", e),
				k = () => N("add"),
				L = () => N("remove"),
				N = (e, t) => n => Object.assign(Object.assign({}, O(n)), {
					noun: e,
					postComposer: {
						inputType: t,
						type: f.imageOnly
					},
					action: s.c.CLICK
				}),
				x = e => {
					Object(l.a)(Object.assign(Object.assign({}, O(e)), {
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
					} = t, o = Object(u.i)(e), r = Object(a.d)(e, {
						draftId: n
					}), i = {
						authorId: o ? o.id : void 0,
						createdTimestamp: r ? r.created : void 0,
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
				V = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({
						noun: "draft_load"
					}, O(e)), M(e, t)))
				},
				G = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({
						noun: t.draftId ? "draft_update" : "draft_create"
					}, O(e)), M(e, t)))
				},
				F = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({
						noun: "draft_delete"
					}, O(e)), ((e, t) => {
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
					Object(l.a)(Object.assign(Object.assign({}, O(e)), {
						noun: "social_connect_link",
						action: s.c.CLICK
					}))
				},
				W = (e, t) => {
					Object(l.a)(Object.assign(Object.assign({}, O(e)), {
						noun: "twitter_share_checkbox",
						action: Object(b.getToggleAction)(t)
					}))
				},
				H = (e, t, n) => {
					Object(l.a)(Object.assign(Object.assign(Object.assign({}, O(e)), M(e, t)), {
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
				return O
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => Object.assign(Object.assign({}, o.defaults(e)), {
					media: o.media(e, t),
					post: o.post(e, t),
					profile: o.profile(e),
					subreddit: o.subreddit(e)
				}),
				i = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "stop",
						noun: "autoplay_initial_load"
					}))
				},
				c = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "complete",
						noun: "autoplay_initial_load"
					}))
				},
				a = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay_initial_load"
					}))
				},
				d = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay_network_load"
					}))
				},
				u = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "consume",
						noun: "autoplay"
					}))
				},
				l = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay"
					}))
				},
				b = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "start",
						noun: "autoplay_buffering"
					}))
				},
				_ = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "stop",
						noun: "autoplay"
					}))
				},
				f = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({}, r(e, t)), {
						source: "postlist",
						action: "stop",
						noun: "autoplay_buffering"
					}))
				},
				O = (e, t) => {
					Object(s.a)(Object.assign(Object.assign({
						action: "view",
						source: "postlist",
						noun: "bottom"
					}, o.defaults(e)), {
						listing: o.listing(e, t),
						subreddit: o.subreddit(e)
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
				return O
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				c = n("./src/telemetry/index.ts"),
				a = n("./src/telemetry/models/PostComposer.ts");
			const d = e => Object.assign({
					source: "profile_settings"
				}, Object(i.defaults)(e)),
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
					const n = Object(i.currentProfileModelSelector)(e);
					if (n) return o()(n, ["id", "name", "type", ...t])
				},
				l = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						noun: "twitter_connect_link",
						action: r.c.CLICK
					}))
				},
				b = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						noun: "twitter_disconnect_link",
						action: r.c.CLICK
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
						action: r.c.CLICK,
						profile: {
							id: t.id,
							name: t.username
						}
					}))
				},
				O = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, ["display_name", "about", "avatar_url", "cover_url", "nsfw", "content_visible", "communities_visible"]),
						action: r.c.VIEW,
						noun: "settings_page"
					}))
				},
				m = {
					profileIcon: "avatar",
					profileBanner: "cover"
				},
				p = (e, t) => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, ["avatar_url", "cover_url"]),
						action: "upload",
						noun: m[t]
					}))
				},
				E = (e, t) => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, []),
						action: "remove",
						noun: m[t]
					}))
				},
				g = e => {
					Object(c.a)(Object.assign(Object.assign({}, d(e)), {
						profile: u(e, ["display_name", "about", "nsfw", "content_visible", "communities_visible"]),
						action: "click",
						noun: "save_settings"
					}))
				},
				j = e => t => Object.assign(Object.assign({}, d(t)), {
					profile: u(t, []),
					action: e ? "select" : "deselect",
					noun: "content_visible"
				}),
				h = e => t => Object.assign(Object.assign({}, d(t)), {
					profile: u(t, []),
					action: e ? "select" : "deselect",
					noun: "nsfw"
				}),
				S = e => t => Object.assign(Object.assign({}, d(t)), {
					profile: u(t, []),
					action: e ? "select" : "deselect",
					noun: "active_in_communities"
				})
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
				return O
			})), n.d(t, "t", (function() {
				return m
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "k", (function() {
				return D
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "b", (function() {
				return N
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/constants/tracking.ts"),
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
				_ = (e, t, n, s) => o => Object.assign(Object.assign({}, l(o, n)), {
					source: d,
					action: "click",
					noun: t,
					actionInfo: a.actionInfo(o, s ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: s ? a.discoveryUnit(s) : null,
					search: a.search(o, n),
					post: a.post(o, e),
					media: a.media(o, e)
				}),
				f = (e, t, n, s, o) => r => Object.assign(Object.assign({}, R(r, e, t, o, s, n)), {
					noun: "ad"
				}),
				O = (e, t, n) => o => {
					let r = !0;
					if (t.type.indexOf(s.Nb.Posts) > -1) {
						const {
							api: t
						} = o.listings.listingOrder;
						r = r && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.Nb.Subreddits) > -1 || t.type.indexOf(s.Nb.Users) > -1) {
						const {
							api: t
						} = o.listings.postOrder;
						r = r && !t.error[e] && !t.pending[e]
					}
					return Object.assign(Object.assign({}, l(o, t)), {
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: a.actionInfo(o, {
							success: r,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: a.discoveryUnit(n),
						search: a.search(o, t)
					})
				},
				m = (e, t) => n => ({
					action: "view",
					actionInfo: a.actionInfo(n),
					metaSearch: a.metaSearch(t),
					noun: e,
					screen: a.screen(n),
					search: a.smartSearch(n, t),
					source: d
				}),
				p = (e, t) => n => ({
					action: "click",
					actionInfo: a.actionInfo(n),
					noun: e,
					metaSearch: a.metaSearch(t),
					screen: a.screen(n),
					search: a.smartSearch(n, t),
					source: d
				}),
				E = (e, t, n) => s => Object.assign({
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
				}, j(s, t)),
				g = (e, t, n, s) => o => {
					const r = s.filter(e => e.id);
					return Object.assign({
						source: d,
						action: "click",
						noun: a.SearchDropdownNouns.Typeahead,
						actionInfo: a.actionInfo(o, {
							position: n + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: o.platform.currentPage ? a.getPageTypeFromCurrentPage(o.platform.currentPage) : void 0,
							queryId: Object(i.c)(i.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: r.map(e => e.id),
							numberSubreddits: r.length
						}
					}, j(o, t))
				},
				j = (e, t) => {
					const n = t.isSubreddit && t.id ? a.subredditForSearch(e, t.id) : void 0,
						s = t.isProfile && t.id ? a.profileForSearch(e, t.id) : void 0,
						o = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? n || o : void 0,
						profile: t.isProfile ? s || o : void 0
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
			var S;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(S || (S = {}));
			const I = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
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
				A = (e, t, n, s) => o => Object.assign(Object.assign({}, l(o, n)), {
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(o, {
						relativePosition: a.getRelativePostOrder(o, t, e)
					}),
					search: Object.assign(Object.assign({}, a.search(o, n)), !!s && {
						originElement: s
					}),
					post: a.post(o, t)
				}),
				D = (e, t, n, s, o) => r => R(r, e, t, n, s, o),
				R = (e, t, n, s, o, c) => {
					const u = a.paneName(e, s),
						l = a.postRelativePosition(e, t, o, c),
						b = a.amountOfElementsBeforePost(e, n, o, c, u),
						_ = null !== l ? b + l : null,
						f = a.structureType(e, s),
						O = Object.assign(Object.assign({}, a.search(e, n, !0, s || void 0)), {
							structureType: f,
							queryId: Object(i.c)(i.a.SearchResults)
						});
					return {
						source: d,
						action: r.c.CLICK,
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
						search: O,
						post: a.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: c ? a.discoveryUnit(c) : null
					}
				},
				v = (e, t, n, s, o, r) => i => C(i, e, t, n, s, o, r),
				C = (e, t, n, s, u, l, b) => {
					if (!s) {
						s = Object(c.N)(e, {
							postId: l
						}).belongsTo
					}
					const _ = a.paneName(e, n);
					let f, O;
					if (l) {
						f = a.postRelativePosition(e, l, u, b);
						const n = a.amountOfElementsBeforePost(e, t, u, b, _);
						O = null !== f ? n + f : null
					} else {
						f = a.communityRelativePosition(e, s.id, u, b);
						const t = a.amountOfElementsBeforeCommunity(e, u, b);
						O = null !== f ? t + f : null
					}
					const m = a.structureType(e, n),
						p = Object.assign(Object.assign({}, a.search(e, t, !0, n || void 0)), {
							structureType: m,
							queryId: Object(i.c)(i.a.SearchResults)
						});
					return {
						source: d,
						action: r.c.CLICK,
						noun: s.type,
						search: p,
						subreddit: s.type === o.a.SUBREDDIT ? a.subredditForSearch(e, s.id) : void 0,
						profile: s.type === o.a.PROFILE ? a.profileForSearch(e, s.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: b ? a.discoveryUnit(b) : null,
						actionInfo: n ? {
							pageType: a.getPageTypeFromCurrentPage(n),
							paneName: _,
							position: O,
							relativePosition: f
						} : a.actionInfo(e, {
							paneName: _,
							position: O,
							relativePosition: f
						}),
						post: l ? a.post(e, l) : void 0
					}
				},
				P = (e, t) => n => Object.assign(Object.assign({}, l(n, e)), {
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
				w = (e, t, n, s, o) => i => Object.assign(Object.assign({}, R(i, t, n, s, e, o)), {
					action: r.c.VIEW
				}),
				k = (e, t, n, s) => o => Object.assign(Object.assign({}, l(o, n)), {
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: a.actionInfo(o, {
						relativePosition: a.getRelativePostOrder(o, t, e),
						position: a.getAbsoluteOrder(o, t, e)
					}),
					search: Object.assign(Object.assign({}, a.search(o, n)), !!s && {
						originElement: s
					}),
					post: a.post(o, t)
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
				N = (e, t) => n => Object.assign(Object.assign({}, l(n, t)), {
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
			var s, o = n("./node_modules/uuid/v4.js"),
				r = n.n(o);
			! function(e) {
				e[e.Pending = 0] = "Pending", e[e.Complete = 1] = "Complete", e[e.Failed = 2] = "Failed"
			}(s || (s = {}));
			const i = () => r()()
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
					return o
				})), n.d(t, "d", (function() {
					return r
				})), n.d(t, "c", (function() {
					return i
				})), n.d(t, "e", (function() {
					return c
				})),
				function(e) {
					e[e.downvoted = -1] = "downvoted", e[e.notVoted = 0] = "notVoted", e[e.upvoted = 1] = "upvoted"
				}(s || (s = {}));
			const o = (e, t) => e.voteState === t ? s.notVoted : t,
				r = e => {
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
						o = n ? e.score - t : e.score - e.voteState + t;
					return Object.assign(Object.assign({}, e), {
						voteState: s,
						score: o
					})
				},
				c = e => "UP" === e ? s.upvoted : "DOWN" === e ? s.downvoted : s.notVoted
		},
		"./src/reddit/reducers/sidebarPromotedPosts/models/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/ads/constants.ts");
			! function(e) {
				e[e.FRONTPAGE = 0] = "FRONTPAGE", e[e.COMMENTS_OVERLAY = 1] = "COMMENTS_OVERLAY", e[e.COMMENTS = 2] = "COMMENTS", e[e.SUBREDDIT = 3] = "SUBREDDIT", e[e.MULTIREDDIT = 4] = "MULTIREDDIT", e[e.SEARCH_RESULTS = 5] = "SEARCH_RESULTS"
			}(s || (s = {}));
			const r = {};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.s:
					case o.p: {
						const n = t.payload;
						return Object.assign(Object.assign({}, e), n)
					}
					case o.q:
					case o.s:
						return e;
					case o.u:
						return r;
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
				return o
			}));
			const s = e => e.activeModalId,
				o = e => t => t.activeModalId === e
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
				o = n("./src/lib/isFakeSubreddit/index.ts"),
				r = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				i = n("./src/reddit/models/WhitelistStatus/index.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			const d = new Set([s.O.NEW, s.O.RISING, s.O.CONTROVERSIAL]),
				u = e => e.brandSafety.hasBrandSafetyBeenAssessed,
				l = (e, t) => {
					let {
						postId: n
					} = t;
					const s = Object(c.N)(e, {
							postId: n
						}),
						o = Object(c.ab)(e, {
							postId: n
						});
					return !(!s || !o) && (o.wls === i.b.ALL_ADS && !s.isNSFW)
				},
				b = e => e.brandSafety.isViewSafe,
				_ = e => !e.brandSafety.isViewSafe,
				f = (e, t) => {
					const {
						listingName: n,
						pageLayer: s
					} = t, c = Object(a.B)(e, {
						subredditName: n
					}), u = Object(r.b)(e, {
						pageLayer: s
					});
					return (!u || !d.has(u)) && (!(c || !Object(o.a)(n)) || !!c && c.wls === i.b.ALL_ADS)
				}
		},
		"./src/reddit/selectors/emailCollection.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const i = Object(s.a)(r.I, r.l, r.y, (e, t, n) => e && !t && !n),
				c = e => (() => 0 === Object(o.j)())() && i(e)
		},
		"./src/reddit/selectors/experiments/avatarsInComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = Object(s.a)(i.I, i.H, (e, t) => e || t),
				a = Object(s.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: o.f
				}), e => e === o.h.Active),
				d = Object(s.a)(i.I, i.H, (e, t) => !e && !t),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: o.g
				}), e => e === o.h.Active),
				l = Object(s.a)(a, u, (e, t) => e || t)
		},
		"./src/reddit/selectors/experiments/listingBelow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/timeAgo/index.ts"),
				r = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				d = n("./src/reddit/selectors/platform.ts"),
				u = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)(a.c, u.H, u.I, d.g, d.f, c.a, (e, t, n, s, r, i) => !e && !t && !n && s && !!r && !r.isNSFW && !!i && Object(o.c)(i.created / 1e3) < 30),
				b = e => Object(i.c)(e, {
					experimentEligibilitySelector: l,
					experimentName: r.pb,
					expEventOverride: !1
				}),
				_ = e => e === r.tb.SearchPostToPost || e === r.tb.NlpPostToPost1 || e === r.tb.NlpPostToPost2 || e === r.tb.NlpPostToPost3
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
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const a = Object(s.a)(c.I, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(r.y)(n)
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return Object(r.K)(n)
				}, (e, t, n) => !e && !t && n),
				d = Object(s.a)((e, t) => Object(i.c)(e, {
					experimentName: o.U,
					experimentEligibilitySelector: e => a(e, t)
				}), e => e),
				u = e => e === o.Bc.NoCommunityWidgets,
				l = e => e === o.Bc.NoRulesModerators,
				b = e => e === o.Bc.RelatedPostsDu
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "d", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				r = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(r.S)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				a = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				u = [],
				l = (e, t) => {
					const n = b(e, t);
					if (!n) return u;
					const s = Object(r.W)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : u
				},
				b = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(r.S)(e, {
						subredditId: n
					}) : null
				},
				_ = (e, t, n, s, r) => {
					const i = r.find(e => e <= t) || -1,
						c = r.find(e => e > t) || 1 / 0;
					return t !== c && t !== i && (!(i + n > t) && (!(t + n > c) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							i = r && Object(o.N)(e, {
								postId: s
							}) || null,
							c = r && Object(o.N)(e, {
								postId: r
							}) || null;
						return i && i.isSponsored || c && c.isSponsored
					})(e, t, s)))
				},
				f = [3],
				O = (e, t, n) => {
					let {
						listingKey: s
					} = n;
					const r = t.slice().sort();
					let i = -1;
					const c = Object(o.H)(e, {
							listingKey: s
						}),
						a = [];
					return f.forEach(t => {
						let n = i + t;
						if (!(n >= c.length)) {
							for (; n < c.length && !_(e, n, t, c, r);) n += 1;
							n < c.length && (a.push(n), i = n)
						}
					}), a
				},
				m = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				p = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				E = e => e.focusedVerticals.category,
				g = e => e.focusedVerticals.lastLoadedEnv,
				j = e => {
					const t = Object(i.H)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						o = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && o
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "g", (function() {
				return r
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
				o = e => e.gild.correlationId || void 0,
				r = e => e.gild.isAnonymous,
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
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/reddit/models/Image/index.tsx");
			const o = e => e.imageUploads,
				r = (e, t) => {
					let {
						id: n
					} = t;
					return o(e)[n]
				},
				i = (e, t) => {
					const n = o(e),
						r = [];
					for (const o in n) {
						const e = n[o];
						e.kind === s.b.TempUploaded && e.context === t && r.push(e)
					}
					return r
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
				o = n("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				r = n("./src/lib/objectSelector/index.ts");
			const i = (e, t) => Object(o.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(r.a)((e, t) => {
					const {
						pageName: n,
						page: s
					} = t, o = i(0, t);
					if (!e.modQueue[n] || !e.modQueue[n].itemOrder[o] || !e.modQueue[n].itemOrder[o][s]) return;
					const r = e.modQueue[n].itemOrder[o][s];
					return r ? r.map(t => e.posts.models[t] || e.comments.models[t]) : []
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit.dd072f2d86274a4beb70.js.map