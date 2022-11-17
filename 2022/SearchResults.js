// https://www.redditstatic.com/desktop2x/SearchResults.edce5551120ca3286a7b.js
// Retrieved at 11/17/2022, 2:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var s = "Expected a function";
			e.exports = function(e, t, n) {
				if ("function" != typeof e) throw new TypeError(s);
				return setTimeout((function() {
					e.apply(void 0, n)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseDelay.js"),
				r = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = r
		},
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/reddit/selectors/experiments/devPlatform.ts");
			const c = Object(i.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), s.e("devPlatform-components-ContextActions")]).then(s.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function d(e) {
				return Object(o.e)(e => Object(a.a)(e)) ? r.a.createElement(c, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			const n = "devvit-gateway-url",
				r = "devvit-mock-metadata",
				o = "devvit-debug-logging",
				i = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var a;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(a || (a = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, s) => ({
				...i.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.r(e),
				geo: i.t(e),
				platform: i.I(e),
				referrer: i.Z(e),
				request: i.ab(e),
				screen: i.cb(e),
				session: i.gb(e),
				user: i.sb(e),
				media: s ? i.C(e, s) : null,
				post: s ? i.K(e, s) : null
			});
			var c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function m(e) {
				function t(t) {
					const s = Object(o.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? r.a.createElement("div", {
						onClickCapture: function(e, n) {
							var r, o;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(n)(s, i, null === (o = t.post) || void 0 === o ? void 0 : o.postId)) : Object(d.a)(a(n)(s, c.a.UNKNOWN, null === (r = t.post) || void 0 === r ? void 0 : r.postId)))
						}
					}, r.a.createElement(e, t)) : r.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
			}
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/categories/index.ts"),
				o = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				i = s("./src/reddit/constants/categories.tsx"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: r.a
				}
			});
			const h = Object(o.a)(b.c),
				f = Object(o.a)(b.b),
				x = Object(o.a)(b.a),
				O = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					const r = t(),
						o = Object(p.h)(r),
						u = Object(p.g)(r);
					if (o || u) return;
					e(h());
					const b = await (e => Object(c.a)(Object(d.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: a.ob.GET
					}))(n());
					if (b.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, n) => {
								const r = {
									attr: e.category_attr,
									color: e.category_color || i.a[n % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.sg)(e.category_name)
								};
								s.push(r.id), t[r.id] = r
							}), {
								categories: t,
								categoryIds: s
							}
						})(b.body);
						e(f({
							categories: t,
							categoryIds: s
						}))
					} else e(x(b.error))
				}, g = (Object(o.a)(b.g), Object(o.a)(b.f), Object(o.a)(b.e), Object(o.a)(b.d)), j = e => async (t, s) => {
					const n = Object(p.j)(s(), {
						id: e
					});
					t(g({
						categoryId: e,
						rank: n + 1
					})), Object(u.rb)(Object(p.d)(s()))
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return T
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var d, l = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var u = s("./src/lib/objectSelector/index.ts"),
				p = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/user.ts");
			const x = [],
				O = (Object(u.a)((e, t) => {
					const s = O(e, t);
					if (!s) return x;
					const n = Object(h.cb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : x
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.Y)(e, {
						subredditId: s
					}) : null
				}),
				g = (e, t, s, n, r) => {
					const o = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							r = s[t],
							o = r && Object(b.G)(e, {
								postId: n
							}) || null,
							i = r && Object(b.G)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				j = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const r = s.slice().sort();
				let o = -1;
				const i = Object(b.z)(e, {
						listingKey: n.listingKey
					}),
					a = [];
				return j.forEach(t => {
					let s = o + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !g(e, s, t, i, r);) s += 1;
						s < i.length && (a.push(s), o = s)
					}
				}), a
			});
			var v = s("./src/reddit/selectors/platform.ts");
			const C = Object(r.a)(i.f),
				y = Object(r.a)(i.d),
				E = Object(r.a)(i.g),
				S = Object(r.a)(i.c),
				k = Object(r.a)(i.e),
				_ = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(f.Q)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(o),
						u = Object(f.Q)(o);
					if (i || !d) return;
					e(E());
					let b = !1;
					try {
						const t = u ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, s) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (w(t)) {
								if (N(t)) {
									e(S({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (I(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: r,
											category: o
										} = s.focusRecommendations[0],
										i = [n, r],
										a = Object(m.d)(i),
										c = Object(l.b)(i),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(C(u)), b = !0
								}
							} else b = !1
						}
					} catch (h) {
						b = !1
					}
					b || e(y({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				w = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !N(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				T = () => async (e, t, s) => {
					var n, r;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const s = null === (r = null === (n = Object(v.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(f.R)(i);
						return Object(o.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(k({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/linkedPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/linkedPosts/constants.ts");
			const o = Object(n.a)(r.c),
				i = Object(n.a)(r.b),
				a = Object(n.a)(r.a)
		},
		"./src/reddit/actions/otherDiscussions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/OtherDiscussions.json"),
				c = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const d = Object(n.a)(o.a),
				l = Object(n.a)(o.b),
				m = Object(n.a)(o.c),
				u = (e, t) => async (s, n, o) => {
					let {
						gqlContext: u
					} = o;
					const p = n(),
						b = Object(r.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = p.listings.postOrder.ids[b],
						f = !!p.listings.postOrder.api.error[b];
					if (h && !f) return;
					s(m({
						key: b
					}));
					const x = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(u(), t);
					Object(c.a)({
						getState: n,
						onFailure: e => s(d(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: x
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return ft
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return xt
			})), s.d(t, "commentsPagePending", (function() {
				return Ot
			})), s.d(t, "commentsPageLoaded", (function() {
				return gt
			})), s.d(t, "commentsPageFailed", (function() {
				return jt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return vt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return yt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return Et
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return St
			})), s.d(t, "commentsPageRequested", (function() {
				return kt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return wt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Nt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return It
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				a = s("./src/reddit/actions/category/index.ts"),
				c = s("./src/reddit/actions/discoveryUnit.ts"),
				d = s("./src/reddit/actions/pages/subreddit.ts"),
				l = s("./src/reddit/actions/shortcuts/active.ts"),
				m = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				u = s("./src/reddit/actions/subredditSettings.ts"),
				p = s("./src/reddit/endpoints/devPlatform/index.ts"),
				b = s("./src/reddit/endpoints/governance/posts.ts"),
				h = s("./src/reddit/endpoints/page/commentsPage.ts"),
				f = s("./src/lib/makeGqlRequest/index.ts"),
				x = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function O(e, t) {
				return Object(f.a)(e, {
					...x,
					variables: t
				})
			}
			var g = s("./src/reddit/endpoints/page/subredditPage.ts"),
				j = s("./src/reddit/endpoints/profile/info.ts"),
				v = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/pageTitle/index.ts"),
				E = s("./src/reddit/actions/economics/helpers/async.ts"),
				S = s("./src/reddit/actions/externalAccount.ts"),
				k = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				_ = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				w = s("./src/reddit/actions/platform.ts"),
				N = s("./src/reddit/actions/post.ts"),
				I = s("./src/reddit/actions/profile/index.ts"),
				T = s("./src/reddit/actions/subreddit.ts"),
				P = s("./src/reddit/actions/subreddit/notifications.ts"),
				R = s("./src/reddit/actions/subreddit/questions.ts"),
				F = s("./src/reddit/actions/toaster.ts"),
				M = s("./src/reddit/constants/adEvents.ts"),
				L = s("./src/reddit/constants/graphql.ts"),
				A = s("./src/reddit/constants/parameters.ts"),
				B = s("./src/reddit/constants/posts.ts"),
				D = s("./src/reddit/helpers/commentList/index.ts"),
				U = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				W = s("./src/reddit/models/Comment/index.ts"),
				V = s("./src/reddit/models/Media/index.ts"),
				G = s("./src/reddit/models/Subreddit/index.ts"),
				H = s("./src/reddit/models/User/index.ts"),
				K = s("./src/reddit/selectors/adsSignals.ts"),
				q = s("./src/reddit/selectors/category.ts"),
				z = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Q = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Y = s("./node_modules/reselect/es/index.js"),
				J = s("./src/reddit/constants/experiments.ts"),
				X = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Z = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				$ = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ee = s("./src/reddit/selectors/platform.ts"),
				te = s("./src/reddit/selectors/removedPosts.ts");
			const se = Object(Y.a)(ee.f, Z.a, te.a, te.c, $.a, te.e, $.b, (e, t, s, n, r, o, i) => {
				if (!e || !t || r) return !1;
				if (n) return !0;
				const a = o || i,
					c = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || c)
			});
			var ne = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				re = s("./src/reddit/selectors/moderatorPermissions.ts"),
				oe = s("./src/reddit/selectors/posts.ts"),
				ie = s("./src/reddit/selectors/subreddit.ts"),
				ae = s("./src/reddit/selectors/user.ts"),
				ce = s("./src/lib/makeActionCreator/index.ts"),
				de = s("./src/lib/makeCommentsPageKey/index.ts"),
				le = s("./src/reddit/actions/ads/index.ts"),
				me = s("./src/reddit/helpers/canonicalUrls.ts"),
				ue = s("./src/reddit/helpers/correlationIdTracker.ts"),
				pe = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				be = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				he = s("./src/lib/performanceTimings/index.tsx"),
				fe = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				xe = s("./src/reddit/actions/gold/customEmojis.ts"),
				Oe = s("./src/reddit/actions/gold/powerups.ts"),
				ge = s("./src/lib/makeListingKey/index.ts"),
				je = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ve = Object(ce.a)(je.b),
				Ce = Object(ce.a)(je.a);
			var ye = s("./src/reddit/actions/linkedPosts/index.ts"),
				Ee = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Se = s("./src/reddit/actions/subreddit/constants.ts"),
				ke = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var _e = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						s({
							altText: o && o.media && (o.media.still && o.media.still.altText || o.media.obfuscated && o.media.obfuscated.altText) || null,
							postId: r
						})
					} catch (i) {
						n(i)
					}
				},
				we = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ne = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Te = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!o || !o.linked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(we.a)(r),
							l = o.linked.posts && o.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Ne.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(v.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Ie.a)(e)
							}
						}
						s({
							dist: o.linked.posts && o.linked.posts.dist || null,
							key: d,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				Pe = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Fe = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Me = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						options: r,
						postId: o,
						subreddit: i
					} = e;
					try {
						if (!i) return;
						const e = i.elements || i.posts,
							n = t(),
							a = ((e, t) => {
								const {
									edges: s
								} = e, n = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: n
								}
							})(e, n.posts && n.posts.models),
							c = Object(Re.a)(a),
							d = Fe(c),
							l = e.edges.reduce((e, t) => (t.node.id && t.node.id !== o && e.push(t.node.id), e), []),
							{
								range: m,
								sort: u,
								subredditName: p
							} = r,
							b = Object(ge.a)(p, C.bb[u], {
								t: m
							});
						s({
							dist: e.dist,
							key: b,
							meta: n.meta,
							postIds: l,
							posts: d
						})
					} catch (a) {
						n(a)
					}
				},
				Le = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ae = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Be = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: r,
						post: o
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!o || !o.nsfwLinked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(Ae.a)(r),
							l = o.nsfwLinked.posts && o.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Ne.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(v.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Ie.a)(e)
							}
						}
						s({
							dist: o.nsfwLinked.posts && o.nsfwLinked.posts.dist || null,
							key: d,
							meta: a.meta,
							posts: n,
							postIds: e,
							subreddits: i
						})
					} catch (i) {
						n(i)
					}
				},
				De = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ue = Object(ce.a)(De.b),
				We = Object(ce.a)(De.a);
			var Ve = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ge = Object(ce.a)(Ve.b),
				He = Object(ce.a)(Ve.a),
				Ke = Object(ce.a)(Se.o),
				qe = Object(ce.a)(Se.n),
				ze = (Object(ce.a)(Se.w), Object(ce.a)(Se.v), e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					var o;
					const {
						includeNSFWListingBelowExperiment: i,
						includeListingBelowExperiment: a,
						includeOtherDiscussions: c,
						includePostFeed: d,
						includePostQASchemaEligibilityFlag: l,
						listingBelowExperimentVariant: m,
						postId: u,
						range: p,
						sort: b,
						subredditName: h
					} = e, x = Object(ge.a)(u, null, {
						isOtherDiscussions: !0
					}), O = s(), g = Object(oe.z)(O, {
						listingKey: x
					}), j = c && (!g || 0 === g.length), v = Object(ge.a)(h, C.bb[b], {
						t: p
					}), y = Object(oe.z)(O, {
						listingKey: v
					}), E = d && (a || !y || 0 === y.length), S = a, k = i, _ = Object(oe.G)(O, {
						postId: u
					}), w = !!_ && !!_.media && (Object(V.L)(_.media) || Object(V.G)(_.media)) && !_.media.altText;
					if (!(j || E || S || k || w || l)) return;
					j && t(Object(Ee.d)({
						key: x
					}));
					const N = await ((e, t) => Object(f.a)(e, {
							...ke,
							variables: t
						}))(r(), e),
						I = N.body,
						T = Object(Le.a)(m);
					l && (N.ok ? I.data && I.data.post && t(ve({
						postId: u,
						isEligibleForQASchema: null !== (o = I.data.post.isEligibleForQASchema) && void 0 !== o && o
					})) : t(Ce())), j && Object(Pe.a)({
						getState: s,
						onFailure: e => t(Object(Ee.b)(e)),
						onSuccess: e => t(Object(Ee.c)(e)),
						postId: u,
						response: N
					}), E && !S && (N.ok ? I.data && Me({
						getState: s,
						onFailure: e => t(qe(e)),
						onSuccess: e => t(Ke(e)),
						options: e,
						postId: u,
						subreddit: I.data.subreddit
					}) : t(qe(N.error))), S && !T && N.ok && I.data && Te({
						getState: s,
						onFailure: e => t(Object(ye.a)(e)),
						onSuccess: e => t(Object(ye.b)(e)),
						postId: u,
						post: I.data.post
					}), k && N.ok && Be({
						getState: s,
						onFailure: e => t(He(e)),
						onSuccess: e => t(Ge(e)),
						postId: u,
						post: I.data.post
					}), w && N.ok && I.data && _e({
						getState: s,
						onFailure: e => t(We(e)),
						onSuccess: e => t(Ue(e)),
						postId: u,
						post: I.data.post
					})
				}),
				Qe = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = n && Object(v.z)(n),
						{
							sortToUse: o
						} = Object(U.a)(e, r);
					return (!o || o === C.w.CONFIDENCE) && Object(X.c)(e, {
						experimentEligibilitySelector: () => Object(ae.Q)(e),
						experimentName: J.s
					}) === J.u.Enabled
				};
			var Ye = s("./src/reddit/selectors/chatPost.ts"),
				Je = s("./src/reddit/selectors/seo/index.ts"),
				Xe = s("./src/reddit/actions/pages/constants.ts"),
				Ze = s("./src/lib/initializeClient/installReducer.ts"),
				$e = s("./src/lib/sentry/index.ts"),
				et = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				tt = s("./src/reddit/helpers/clickSourceData/index.ts"),
				st = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				nt = s("./src/reddit/helpers/locales.ts"),
				rt = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				ot = s("./src/reddit/reducers/pages/comments/index.ts"),
				it = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				at = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ct = s("./src/reddit/selectors/experiments/countrySites.ts"),
				dt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				lt = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				mt = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				ut = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				pt = s("./src/reddit/selectors/i18n/index.ts"),
				bt = s("./src/reddit/selectors/meta.ts"),
				ht = s("./src/reddit/actions/pages/search/index.ts");
			Object(Ze.a)({
				pages: {
					comments: ot.a
				}
			}), Object(Ze.a)({
				features: {
					modUserNotes: rt.a
				}
			});
			const ft = 25,
				xt = 100,
				Ot = Object(ce.a)(Xe.h),
				gt = Object(ce.a)(Xe.f),
				jt = Object(ce.a)(Xe.e),
				vt = Object(ce.a)(Xe.i);

			function Ct(e) {
				return e && e.ok
			}
			const yt = (e, t, s) => {
					const n = !e,
						r = Object(oe.G)(t, {
							postId: s
						}).belongsTo,
						o = Object(ie.Q)(t, {
							identifier: r
						}),
						i = Object(Je.c)(t, {
							identifier: r
						}),
						a = !!Object(Le.c)(t),
						c = Object(pt.a)(t),
						d = Object(dt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : c ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(G.i)(o) && !Object(Ye.d)(t, {
						postId: s
					}) && !!o || !Object(ee.j)(t) && Object(Q.e)(t)), e && (l.postQASchema = Object(Q.d)(t)), d && (l.listingBelow = !0), l
				},
				Et = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				St = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				kt = e => async (t, s) => {
					var n, c;
					const {
						partialPostId: d,
						partialCommentId: u
					} = e.params, {
						subredditName: p
					} = e.params || "", b = d ? Object(v.z)(d) : "", h = u && Object(W.h)(u), {
						path: f,
						queryParams: x
					} = e, O = Object(_.d)(f), {
						instanceId: g
					} = x, {
						hasSortParam: j,
						sortToUse: E
					} = Object(U.a)(s(), b), k = null === (c = null === (n = Object(ee.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === c ? void 0 : c.route.chunk, P = ["context", "depth", "limit", A.h].reduce((e, t) => {
						const s = parseInt(x[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: p,
						hasSortParam: j,
						instanceId: g,
						include_categories: !0
					});
					j && (P.sort = E), P.onOtherDiscussions = O, P.comment_awardings_by_current_user = !0, t(N.q(b));
					const F = s(),
						M = Object(it.a)(F);
					if (Object(tt.e)(e) && M.bucketed) {
						const s = d && Object(v.z)(d),
							n = Object(i.e)(r()(e.queryParams, A.D)),
							o = Object(i.b)(s, void 0, n);
						await t(Object(ht.d)({
							key: o,
							options: n,
							subredditName: p,
							postId: s
						}))
					} else await t(wt(b, h, P, E));
					const D = s().posts.models[b],
						G = Object(ae.R)(s());
					if (D && "subreddit" === D.belongsTo.type) {
						const e = D.belongsTo.id;
						if (await Promise.all([Object(he.i)(() => t(Object(Oe.e)(e, {
								fullData: !0,
								includeIdentity: G
							})), {
								name: "subredditPowerupsRequested",
								page: k,
								isLoggedIn: G
							}), Object(he.i)(() => t(Object(fe.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: k,
								isLoggedIn: G
							}), Object(he.i)(() => t(Object(xe.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: k,
								isLoggedIn: G
							})]), !Object(ee.j)(F)) {
							Object(mt.a)(F) && t(Object(R.b)(e))
						}
						Object(re.i)(F, e) && await t(Object(m.c)(b))
					}
					if (D) {
						const n = ((e, t) => {
								const s = Object(oe.V)(e, {
										postId: t
									}),
									n = Object(oe.G)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), b),
							r = Object(ie.Q)(s(), {
								identifier: D.belongsTo
							});
						if (r && (e => J.xf.Redirect === Object(X.b)(e, {
								experimentEligibilitySelector: se,
								experimentName: J.pf
							}))(s())) return void t(Object(o.c)(r.url));
						if ((D.media && D.media.type) === V.o.LIVEVIDEO) {
							const e = `/rpan${D.belongsTo.type===B.a.SUBREDDIT?r.url:"/"}${Object(v.D)(D.id)}`;
							return void t(Object(o.c)(e))
						}
						if (D.belongsTo.type !== B.a.SUBREDDIT || D.isSponsored) {
							if (D.belongsTo.type === B.a.PROFILE) {
								const e = Object(he.i)(() => t(I.d(r.name)), {
									name: "getProfileInfo",
									page: k,
									isLoggedIn: G
								});
								await e
							}
						} else {
							if (!!!Object(ie.X)(s(), {
									subredditId: D.belongsTo.id
								})) {
								const e = Object(he.i)(() => t(T.o(r.name)), {
									name: "getSubredditRules",
									page: k,
									isLoggedIn: G
								});
								await e
							}
						}
						const i = yt(!1, s(), b),
							c = O;
						if (Et(c, i)) {
							Object(ue.d)(ue.a.LinkedPosts);
							const e = Object(ue.c)(ue.a.LinkedPosts);
							Object(ue.d)(ue.a.NsfwLinkedPosts);
							const n = Object(ue.c)(ue.a.NsfwLinkedPosts),
								{
									adsSeenCount: o,
									totalPostsSeenCount: a,
									sessionStartTime: d
								} = Object(K.a)(s()),
								l = {
									adContext: {
										layout: L.a.Card,
										sourcePostId: b,
										clientSignalSessionData: {
											adsSeenCount: o,
											totalPostsSeenCount: a,
											sessionStartTime: d
										}
									},
									range: C.oc.WEEK.toUpperCase(),
									sort: C.S.TOP,
									subredditName: r.name
								},
								m = {
									postId: b
								},
								u = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Le.c)(s())
								};
							Object(dt.b)(s()) && (u.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const p = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(ut.a)(s())
								},
								h = St(i);
							Object(he.i)(() => t(ze({
								...m,
								...l,
								...u,
								...p,
								...h,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: G,
								page: k
							});
							0
						}
						t(Object(S.p)()), t(w.m({
							title: n
						}));
						const d = s().posts.instances[b] ? e.queryParams.instanceId : D.postId;
						t(Object(l.b)(d)); {
							const e = Object(q.c)(s(), {
								subredditName: r.name
							});
							await Promise.all(e.map(e => t(a.b(e))))
						}
					} else t(w.m({
						title: y.f()
					}));
					const {
						routePrefix: H
					} = e.params;
					tt.e || (B.b[H] === B.a.PROFILE ? Object(me.f)(s(), t, e) : Object(me.d)(s(), t, e))
				}, _t = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], wt = (e, t, s, n) => async (r, o, i) => {
					var a, l, m, u;
					const f = o(),
						x = Object(de.a)(e, t, s),
						{
							subredditName: v
						} = s,
						y = f.pages.comments.keyToHeadCommentId.hasOwnProperty(x),
						S = f.pages.comments.api.fullyLoaded[x],
						_ = f.pages.comments.api.error[x],
						I = f.pages.comments.api.pending[x],
						T = !Object(ae.Q)(f),
						R = Object(ae.l)(f),
						L = n === C.w.CHAT,
						A = !!f.platform.lastPage;
					if ((I || y && !_) && !(L && A)) {
						if (y && !f.sidebarPromotedPosts.firstFetch) {
							const e = Object(ee.j)(f) ? be.a.COMMENTS_OVERLAY : be.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(le.b)(e))
							})
						}
						return void(S || r(It(e, t, s)))
					}
					r(c.g());
					const B = f.user.prefs.commentMode;
					r(Ot({
						key: x,
						postId: e,
						commentMode: B
					}));
					const U = {
						...s,
						...L ? {
							sort: C.w.LIVE
						} : T ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(oe.G)(o(), {
							postId: e
						});
						t && t.numComments && t.numComments > xt && (U.truncate = ft)
					}
					const W = null === (l = null === (a = Object(ee.b)(f)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
						V = Object(he.i)(() => Object(h.a)(i.apiContext(), e, t, U, Object(z.a)(o()), Qe(o())), {
							name: "fetchCommentsPage",
							isLoggedIn: !T,
							page: W
						}),
						G = !T && R && Object(he.i)(() => Object(j.d)(i.gqlContext(), Object(H.e)(R)), {
							name: "fetchProfileKarma",
							isLoggedIn: !T,
							page: W
						}) || null,
						K = Object(at.c)(f),
						q = Object(he.i)(() => O(i.gqlContext(), {
							postId: e,
							includeSubredditRankings: K
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !T,
							page: W
						}),
						Q = v && Object(lt.a)(f) ? Object(p.a)(i.gqlContext(), {
							subredditName: v
						}) : null;
					let Y, J, X, Z, $;
					if ([Y, J, X, Z] = await Promise.all([V, G, q, Q]), r(Object(w.n)(Y.status)), Ct(X) && "SubredditPost" === (null === (m = X.body.data.postInfoById) || void 0 === m ? void 0 : m.__typename)) {
						const e = X.body.data.postInfoById.subreddit.name;
						Object(me.c)(o(), r, e)
					}
					if (Y.ok) {
						try {
							Y.body.posts = await Object(et.a)(i.apiContext(), Y.body.posts, f)
						} catch (te) {
							$e.c.captureException(te)
						}
						const t = Object.keys(Y.body.posts).filter(e => !!Y.body.posts[e].isMeta),
							s = Y.body.posts[e];
						if (Object(me.b)(o(), r, s.belongsTo.type), t.length) {
							const e = Object(he.i)(() => Object(b.a)(i.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: W,
									isLoggedIn: !T
								}),
								n = await e;
							n.ok && ($ = n.body)
						}
						if (Ct(J)) {
							const {
								data: e
							} = J.body, t = {
								karma: {
									...j.a
								}
							};
							if (Object(j.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							Y.body && Y.body.account && Object.assign(Y.body.account, t)
						}
						if (Ct(X)) {
							const {
								data: t
							} = X.body;
							if (t.postInfoById && _t.includes(t.postInfoById.__typename) && (Y.body.posts[e] = {
									...Y.body.posts[e],
									...t.postInfoById,
									mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (u = t.postInfoById.mediaStatus) || void 0 === u ? void 0 : u.status : null
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(bt.d)(f) && e && Object(ct.f)(f) && await Object(nt.a)(e, r);
								const {
									id: s,
									isEligibleForContentBlocking: n,
									allowedMediaInComments: o,
									directoryRankings: i
								} = t.postInfoById.subreddit;
								r(Object(P.c)({
									subredditAboutInfo: {
										[s]: {
											isEligibleForContentBlocking: n,
											allowedMediaInComments: o,
											directoryRankings: i
										}
									}
								}))
							}
						}
						const n = Object(D.a)(Y.body, e, f),
							{
								postMeta: a
							} = Y.body;
						Y.body.posts[e] = {
							...Y.body.posts[e],
							isRobotIndexable: Object(st.a)(a, e)
						}, Z && (Y.body.subreddits[s.belongsTo.id] = {
							...Y.body.subreddits[s.belongsTo.id],
							devPlatformMetadata: Z
						}), r(gt({
							key: x,
							postId: e,
							meta: f.meta,
							governance: $,
							shouldCollapse: n,
							...Y.body
						}))
					} {
						const n = Object(oe.G)(o(), {
							postId: e
						});
						n && Y.body.comments && Object.keys(Y.body.comments).length < n.numComments ? r(It(e, t, s)) : Y.ok && r(Nt({
							key: x
						}));
						const i = Object(ee.j)(f) ? be.a.COMMENTS_OVERLAY : be.a.COMMENTS;
						r(Object(le.b)(i))
					}
					if (Y.ok) {
						r(F.g(x));
						const t = Object(oe.G)(o(), {
								postId: e
							}),
							s = Object.keys(Y.body.comments);
						if (r(N.y(t, M.a.CommentsView)), Object(re.h)(o(), {
								subredditId: t.belongsTo.id
							}) && r(Object(k.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && Y.body.comments) {
							const e = Object(he.i)(() => r(Object(E.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: W,
								isLoggedIn: !T
							});
							await e
						}
					} else {
						let e;
						v && (r(Object(d.subredditPending)({
							key: x
						})), e = await Object(pe.a)("subreddit", () => Object(g.a)(i.apiContext(), v, {})), r(Object(w.n)(e.status)), r(Object(d.handleSubredditPageApiError)(e, v))), r(jt({
							error: Y.error,
							key: x,
							...e ? e.body : Y.body
						}))
					}
				}, Nt = Object(ce.a)(Xe.g), It = (e, t, s) => async (n, r, o) => {
					var i, a;
					const c = Object(de.a)(e, t, s),
						d = r(),
						l = Object(ae.R)(d),
						m = Object(ae.l)(d),
						p = null === (a = null === (i = Object(ee.b)(r())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						b = Object(h.a)(o.apiContext(), e, t, s, Object(z.a)(d), Qe(d)),
						f = l && m && Object(j.d)(o.gqlContext(), Object(H.e)(m)) || null,
						x = Object(at.c)(d),
						g = Object(he.i)(() => O(o.gqlContext(), {
							postId: e,
							includeSubredditRankings: x
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: p
						}),
						[v, C, y] = await Promise.all([b, f, g]);
					if (v.ok) {
						if (Ct(C)) {
							const {
								data: e
							} = C.body, t = {
								karma: {
									...j.a
								}
							};
							if (Object(j.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							v.body && v.body.account && Object.assign(v.body.account, t)
						}
						if (Ct(y)) {
							const {
								data: t
							} = y.body;
							if (v.body.posts[e] = {
									...v.body.posts[e],
									...t.postInfoById
								}, t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const {
									id: e,
									directoryRankings: s
								} = t.postInfoById.subreddit;
								n(Object(P.c)({
									subredditAboutInfo: {
										[e]: {
											directoryRankings: s
										}
									}
								}))
							}
						}
						const t = Object(D.a)(v.body, e, d);
						n(gt({
							key: c,
							postId: e,
							meta: d.meta,
							shouldCollapse: t,
							...v.body
						})), n(Nt({
							key: c
						}));
						const s = r().posts.models[e],
							o = s && Object(oe.V)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && o && Object(ne.a)(d, {
							subredditId: o.id
						}) && n(Object(u.h)(o.name, o.id)), s && "subreddit" === s.belongsTo.type && v.body.comments && await n(Object(E.a)({
							commentIds: Object.keys(v.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(jt({
						error: v.error,
						key: c,
						...v.body
					}))
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeSearchKey/index.ts"),
				c = s("./src/lib/pageTitle/index.ts"),
				d = s("./src/reddit/actions/pages/search/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				u = s("./src/reddit/models/Multireddit/index.ts"),
				p = s("./src/reddit/models/Post/index.ts");
			const b = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				h = e => async (t, s) => {
					const n = s(),
						r = Object(a.e)(o()(e.queryParams, m.D)),
						{
							multiredditName: h,
							partialPostId: f,
							subredditName: x,
							username: O
						} = e.params;
					let g;
					O && h && (g = Object(u.h)(O, h));
					const j = f && Object(p.z)(f),
						v = Object(a.b)(j || x || h, O, r);
					await t(Object(d.d)({
						key: v,
						options: r,
						subredditName: x,
						username: O,
						multiredditLabel: g,
						postId: j
					}));
					let C = !1;
					const {
						type: y = []
					} = r, E = y.indexOf(i.ic.Posts) > -1, S = y.indexOf(i.ic.Users) > -1, k = y.indexOf(i.ic.Subreddits) > -1;
					E && n.listings.postOrder.api.error[v] && (C = !0), S && n.listings.authorOrder.api.error[v] && (C = !0), k && n.listings.communityOrder.api.error[v] && (C = !0), t(C ? l.m({
						title: Object(c.f)()
					}) : l.m({
						title: b(r.q)
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "f", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				r = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const m = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					m.has(e) && (s.related = e);
					const n = r.a.stringify(s);
					return n ? `?${n}` : ""
				},
				p = Object(o.a)(i.N),
				b = Object(o.a)(i.y),
				h = Object(o.a)(i.O),
				f = Object(o.a)(i.z),
				x = Object(o.a)(i.M),
				O = Object(o.a)(i.L),
				g = Object(o.a)(i.t),
				j = Object(o.a)(i.u),
				v = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const o = Object(c.g)(e),
						i = s();
					if (Object(d.d)(i, o)) return;
					t(p(o));
					const l = await Object(a.e)(r(), o),
						m = Date.now();
					if (l.ok && l.body && l.body.data) {
						const e = l.body.data;
						t(b({
							model: e,
							utcTimeStamp: m
						}))
					} else t(k({
						streamId: o,
						error: l.error,
						utcTimeStamp: m
					}))
				}, C = (e, t) => async (s, n) => s(y(e, t)), y = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const i = n();
					if (Object(d.f)(i)) return;
					s(h());
					const c = await Object(a.f)(o(), e, t),
						l = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(f({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else s(_({
						error: c.error,
						utcTimeStamp: l
					}))
				}, E = (e, t) => async (s, n) => s(S(e, t)), S = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const i = n();
					if (Object(d.f)(i)) return;
					s(h());
					const c = Date.now(),
						m = e.replace("r/", ""),
						u = Object(l.I)(i, m),
						p = await Object(a.b)(o(), {
							subredditId: u,
							options: t
						}),
						b = p.body;
					p.ok && b && b.data || s(_({
						error: p.error,
						utcTimeStamp: c
					}));
					const x = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(a.e)(e, t),
								n = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void k({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(o(), e.node.id)),
						O = (await Promise.all(x)).filter(e => void 0 !== typeof e);
					s(f({
						listingName: e,
						models: O,
						utcTimeStamp: c
					}))
				}, k = e => async t => {
					t(x(e))
				}, _ = e => async t => {
					t(O(e))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/shortcuts/constants.ts");
			const o = Object(n.a)(r.a),
				i = Object(n.a)(r.b)
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return k
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "a", (function() {
				return T
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/DeleteSubredditMuteSettings.json"),
				c = s("./src/redditGQL/operations/MutedSubreddits.json"),
				d = s("./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json"),
				l = s("./src/redditGQL/operations/UpdateSubredditMuteSettings.json");
			const m = (e, t) => Object(i.a)(e, {
					...l,
					variables: {
						input: {
							subredditId: t
						}
					}
				}),
				u = (e, t) => Object(i.a)(e, {
					...a,
					variables: {
						input: {
							subredditId: t
						}
					}
				});
			var p = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/actions/subreddit/constants.ts"),
				h = s("./src/reddit/actions/subreddit/notifications.ts"),
				f = s("./src/reddit/selectors/subreddit.ts");
			const x = e => Object(o.f)({
					id: e,
					kind: p.b.Error,
					duration: o.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				O = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Muted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Mg9mO"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				}),
				g = (e, t) => Object(o.f)({
					kind: p.b.SuccessCommunityGreen,
					text: n.fbt._("Unmuted r/{subreddit name}", [n.fbt._param("subreddit name", e)], {
						hk: "Fhnht"
					}),
					...t ? {
						buttonText: n.fbt._("Undo", null, {
							hk: "2siioQ"
						}),
						buttonAction: t
					} : {}
				});
			var j = s("./src/reddit/endpoints/subreddit/about.ts");
			const v = Object(r.a)(b.i),
				C = Object(r.a)(b.h),
				y = Object(r.a)(b.G),
				E = (Object(r.a)(b.j), Object(r.a)(b.F), Object(r.a)(b.g)),
				S = Object(r.a)(b.f),
				k = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await m(i(), t)).ok) n && n(), e(O(s, _({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				_ = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await u(i(), t)).ok) n && n(), e(g(s, k({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await m(i(), t)).ok) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(O(s, N({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, r, o) => {
						let {
							gqlContext: i
						} = o;
						if ((await u(i(), t)).ok) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !1
								}
							}
						})), e(g(s, w({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(x(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, r, a) => {
						let {
							gqlContext: c
						} = a;
						const l = Object(h.a)(s);
						(await ((e, t, s) => Object(i.a)(e, {
							...d,
							variables: {
								input: {
									...s,
									subredditId: t
								}
							}
						}))(c(), t, l)).ok ? (e(y({
							subredditId: t,
							notificationLevel: s
						})), e(Object(o.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(o.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				T = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const a = await (e => Object(i.a)(e, c))(r());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(v({
							nodes: s
						}))
					} else e(C()), e(Object(o.f)({
						duration: o.a,
						kind: p.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, P = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, r) => {
						let {
							gqlContext: o
						} = r;
						const i = await u(o(), t),
							{
								data: a
							} = i.body;
						if (i.ok && a.deleteSubredditMuteSettings.ok) e(E(t)), e(g(s));
						else {
							e(x(`error-unmuting-${t}`))
						}
					}
				}, R = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: i
						} = r;
						const a = s(),
							c = Object(f.t)(a).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (c) {
							const t = c.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(o.f)({
								id: s,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const d = await Object(j.a)(i(), t, !0),
							{
								data: l
							} = d.body,
							u = l && l.subreddit;
						if (!d.ok || null === u) {
							return e(((e, t) => Object(o.f)({
								id: e,
								kind: p.b.Error,
								duration: o.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const b = u.id,
							h = await m(i(), b),
							{
								data: g
							} = h.body;
						if (h.ok && g.updateSubredditMuteSettings.ok) e(S([u])), e(O(u.name));
						else {
							e(x(`error-muting-${b}`))
						}
					}
				}
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(a.z),
				p = Object(r.a)(a.y),
				b = Object(r.a)(a.x),
				h = e => {
					switch (e) {
						case l.c.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.c.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.c.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				f = e => {
					switch (e) {
						case l.c.OFF:
							return n.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return n.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return n.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const x = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: a
				} = e;
				return async (e, l, x) => {
					let {
						gqlContext: O
					} = x;
					var g, j, v;
					e(p());
					const C = h(s),
						y = await Object(d.b)(O(), t, C);
					if ((null === (j = null === (g = y.error) || void 0 === g ? void 0 : g.fields) || void 0 === j ? void 0 : j.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(y.body) && (null === (v = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === v ? void 0 : v.length)) return e(b()), e(Object(c.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					y.ok && (e(Object(o.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(a ? Object(c.f)(Object(c.e)(f(s), m.b.Undo, n.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(i.i)(t, a))) : Object(c.f)(Object(c.e)(f(s), m.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n,
					...a
				} = e, l = Object(o.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!s,
					[c.a.borders]: "classic" === s,
					[c.a.borderTop]: "compact" === s || "conversation" === s,
					[c.a.borderBottom]: "card" === s
				});
				return r.a.createElement("div", d({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), n)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K"
			}
		},
		"./src/reddit/components/BackToTop/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/timeAgo/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/constants/elementIds.ts"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/localStorage/index.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			var p = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/pages/Recap/Components/BananaPill/index.m.less"),
				O = s.n(x);
			var g = e => {
					let {
						ref: t,
						onMouseEnter: s,
						onSetTimer: i,
						onBananaPillClick: a,
						setAltTextWidth: c,
						setTimerByObserver: d
					} = e;
					const l = Object(n.useCallback)(e => {
							if (e) {
								const t = e.clientWidth;
								c(t + 32)
							}
						}, []),
						m = Object(o.e)(f.R),
						u = encodeURIComponent(b.a.redditUrl + "/r/recap"),
						x = b.a.accountManagerOrigin,
						g = m ? "/r/recap" : `${x}/login/?dest=${u}`;
					return r.a.createElement("a", {
						ref: t,
						href: g,
						className: O.a.bananaPill,
						onMouseEnter: s,
						onMouseLeave: i,
						onClick: a
					}, r.a.createElement("img", {
						className: O.a.icon,
						src: `${b.a.assetPath}/img/recap/banana_pill.png`,
						alt: h.fbt._("banana", null, {
							hk: "1fs9mn"
						})
					}), r.a.createElement("span", {
						className: O.a.text
					}, "+1"), h.fbt._("{=Back to Top}", [h.fbt._param("=Back to Top", r.a.createElement("span", {
						ref: l,
						className: O.a.altText
					}, h.fbt._("Back to Top", null, {
						hk: "4BTAZ0"
					})))], {
						hk: "4Foziy"
					}), r.a.createElement(p.a, {
						onChange: d,
						rootMargin: "0px 0px 0px 0px",
						threshold: .5
					}, r.a.createElement("div", null)))
				},
				j = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/helpers/chooseVariant/index.ts");
			const C = e => {
				return Object(v.c)(e, {
					experimentEligibilitySelector: v.a,
					experimentName: j.of
				}) === j.Kd
			};
			var y = s("./src/reddit/selectors/recapGame.ts"),
				E = s("./src/reddit/components/BackToTop/index.m.less"),
				S = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: d
				} = e;
				const p = Object(c.b)(),
					b = Object(n.useRef)(null),
					[h, x] = Object(n.useState)(!1),
					[O, j] = Object(n.useState)(),
					[v, E] = Object(n.useState)(),
					[w, N] = Object(n.useState)(0),
					I = Object(o.e)(f.l),
					T = Object(o.e)(C),
					P = Object(o.e)(y.a),
					R = I ? I.id : "anonymous",
					F = "on" === P.recapGameState,
					M = () => {
						h && E(setTimeout(() => {
							b.current && (b.current.classList.add(S.a.transform), b.current.style.width = `${w}px`)
						}, 4750)), h && j(setTimeout(() => {
							x(!1), Object(m.Ub)(R, !1)
						}, 5e3))
					};
				return Object(n.useEffect)(() => {
					F || setTimeout(() => {
						const e = Object(m.O)(R);
						e ? Object(a.e)(e.lastSeenTime) >= 24 && e.dropSkip === m.a.NONE ? x(!0) : Date.now() >= new Date(2022, 10, 16).getTime() && e.dropSkip !== m.a.THIRD && x(!0) : x(!0)
					})
				}, [R, F]), r.a.createElement("div", {
					className: Object(i.a)(t, S.a.container),
					style: d
				}, h && T && !s && !F ? r.a.createElement(g, {
					ref: b,
					onBananaPillClick: () => {
						O && clearTimeout(O), v && clearTimeout(v), x(!1), Object(m.Ub)(R, !0), p((() => e => ({
							source: "recap",
							action: "click",
							noun: "feed_banana",
							...u.o(e)
						}))())
					},
					onMouseEnter: () => {
						O && clearTimeout(O), v && clearTimeout(v), b.current && (b.current.classList.remove(S.a.transform), b.current.style.width = "65px")
					},
					onSetTimer: M,
					setAltTextWidth: N,
					setTimerByObserver: e => {
						e.isIntersecting && (M(), p((() => e => ({
							source: "recap",
							action: "view",
							noun: "feed_banana",
							...u.o(e)
						}))()))
					}
				}) : r.a.createElement(l.a, {
					className: S.a.button,
					onClick: () => _(s)
				}, k._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				m = s("./src/reddit/components/Hovercards/helpers.ts"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/hooks/useIsOverlay.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/redditGQL/types.ts");
			const f = Object(c.v)();
			t.a = f(e => {
				let {
					pageLayer: t,
					postOrComment: s,
					className: c
				} = e;
				var f;
				const x = Object(p.a)(),
					O = Object(i.d)(),
					g = (null === (f = null == t ? void 0 : t.urlParams) || void 0 === f ? void 0 : f.pageName) === a.wb.Modqueue,
					j = Object(r.useCallback)(() => {
						const e = Object(m.b)({
							itemId: s.id,
							tooltipIdPrefix: l.a,
							tooltipType: x ? u.f.Lightbox : void 0
						});
						O(Object(d.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: h.x.Note
							}
						}))
					}, [s, O, x]);
				return !g || Object(b.p)(s.author) ? null : o.a.createElement("button", {
					className: c,
					onClick: j
				}, n.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return r.a.createElement(i.b, l({
					className: Object(o.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView,
						[d.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, n))
			}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, s) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/selectors/experiments/commentBox.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/CommentCreation/Loader.m.less"),
				p = s.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
				f = Object(a.c)({
					isCommentBoxDesignEnabled: l.a
				}),
				x = Object(i.b)(f),
				O = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return o.a.createElement("div", {
						className: Object(m.a)(p.a.spacer, {
							[p.a.isCommentBoxDesign]: t,
							[p.a.isTopLevelComment]: s
						})
					}, n)
				},
				g = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				j = () => o.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				v = e => o.a.createElement(O, e, e.isCommentBoxDesignEnabled ? o.a.createElement(j, null) : o.a.createElement(g, null), o.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				C = x(v),
				y = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-components-Not~05f7c62f"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				E = e => o.a.createElement(y, b({}, e, {
					fallback: o.a.createElement(C, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = E
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, s) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, s) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, s) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = s("./src/reddit/components/LottieAnimation/index.tsx"),
				d = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				l = s.n(d);
			! function(e) {
				e.Lottie = "lottie"
			}(n || (n = {}));
			const m = {
				threshold: [.75, .001]
			};
			t.b = i.a.memo(e => {
				const t = Object(o.useRef)(null),
					[s, d] = Object(o.useState)(!1),
					u = Object(o.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && d(!1), t <= .001 && d(!0)
						})
					}, []);
				Object(a.a)(t, u, m);
				const p = e.type;
				return i.a.createElement("div", {
					className: Object(r.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, p === n.Lottie && i.a.createElement(c.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: s
				}))
			})
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = s.n(o);
			const a = n.a.wrapped(r.c, "RestrictedButton", i.a);
			t.a = a
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				restrictHeight: "_2SI6K-u7PZ8koDfUmq7jlz",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				userIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				V1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				v1NftTreatment: "_3yYNickUtSp9utejxh7dFL",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				noSpacing: "_3nqqnHjXPJkfr8j5t_I85P",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/models/PostDraft/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/makeDraftKey/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/comment/authoring.ts"),
				b = s("./src/reddit/actions/comment/moderation.ts"),
				h = s("./src/reddit/components/CommentCreation/Loader.tsx"),
				f = s("./src/reddit/icons/fonts/Expand/index.tsx"),
				x = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				O = s.n(x);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j, v, C = s("./node_modules/lodash/defer.js"),
				y = s.n(C),
				E = s("./src/lib/lessComponent.tsx"),
				S = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/actions/gold/modals.ts"),
				w = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/reportFlow/index.ts"),
				I = s("./src/reddit/helpers/correlationIdTracker.ts"),
				T = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				P = s("./src/reddit/helpers/trackers/lightbox.ts"),
				R = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				M = s("./src/reddit/selectors/comments.ts"),
				L = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				A = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				V = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				G = s.n(V);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(j || (j = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(v || (v = {}));
			const H = (e, t) => {
					const s = G.a[t],
						n = G.a[e];
					return Object(d.a)(s, n)
				},
				K = e => Object(d.a)(G.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[G.a.isInOverlay]: e.isInOverlay,
					[G.a.isModModeEnabled]: e.isModModeEnabled,
					[G.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var q = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				z = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Q = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Y = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				J = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				X = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Z = s("./src/reddit/components/OverflowMenu/index.tsx"),
				$ = s("./src/reddit/components/ReportFlow/index.tsx"),
				ee = s("./src/reddit/components/ReportFlow/new.tsx"),
				te = s("./src/reddit/components/ShareMenu/index.tsx"),
				se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				re = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				oe = s("./src/reddit/helpers/trackers/modTools.ts"),
				ie = s("./src/reddit/layout/row/Inline/index.tsx"),
				ae = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ce = s("./src/reddit/icons/fonts/index.tsx"),
				de = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				le = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				me = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ue = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				pe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				be = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				he = s("./src/devPlatform/constants.ts"),
				fe = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				xe = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Oe = s.n(xe);
			const ge = E.a.wrapped(de.a, "CommentIcon", Oe.a),
				je = E.a.wrapped(pe.a, "Report", Oe.a),
				ve = E.a.wrapped(me.a, "IgnoreReport", Oe.a),
				Ce = E.a.wrapped(J.a, "ModActionsMenu", Oe.a),
				ye = E.a.div("OverflowMenuSpacer", Oe.a),
				Ee = E.a.wrapped(Z.a, "DropdownRow", Oe.a),
				Se = E.a.wrapped(ie.a, "Flatlist", Oe.a),
				ke = E.a.button("Button", Oe.a),
				_e = E.a.wrapped(q.a, "ModToolsFlatlist", Oe.a),
				we = E.a.wrapped(ne.a, "ViewReportsDropdown", Oe.a),
				Ne = e => `Comment-${e}--Modal--DeleteComment`,
				Ie = e => `Distinguish--Dropdown--${e}`,
				Te = e => `${e}-overflow-menu`,
				Pe = e => `View--Reports--${e}`,
				Re = Object(a.c)({
					claimedFreeAward: A.b,
					currentUser: U.l,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(F.a)(e) === Ne(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Ie(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(k.b)(Pe(s.id))(e)
					},
					isLoggedIn: U.R,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.A)(e, {
							postId: s.postId
						})
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.B)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, r;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(M.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(D.z)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.V)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: L.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(B.G)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isDevPlatformEnabled: e => Object(fe.a)(e)
				});
			class Fe extends o.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(P.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(oe.b)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(oe.f)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(oe.e)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(I.d)(I.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(oe.e)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(oe.b)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(oe.b)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? R.a.UNFOLLOWED : R.a.FOLLOWED), t(n ? Object(oe.g)("follow", s.id) : Object(oe.b)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(oe.c)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? o.a.createElement(ee.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: $.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : o.a.createElement($.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: $.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: s,
						commentPermalink: i,
						deleteComment: a,
						depth: c,
						handleReply: l,
						isAvatarsInCommentsEnabled: m,
						isFollowed: u,
						isLoggedIn: p,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: f,
						onToggleReportsDropdown: x,
						moderatorPermissions: O,
						modModeEnabled: g,
						postIsArchived: C,
						postAuthorIsBlocked: E,
						postIsLocked: S,
						renderedInOverlay: k,
						sendEvent: _,
						subreddit: w,
						subredditAboutInfo: N,
						toggleDeleteCommentModal: I,
						toggleSendReplies: P,
						trackCommentClick: F,
						isPostUnrepliable: M,
						isDevPlatformEnabled: L
					} = this.props, A = Object(T.a)(O), B = !!s && s.displayText === e.author, D = !!s && s.isEmployee, U = e.unrepliableReason, V = !E && !Object(R.g)(e) && !M && !U && !M && !(N && N.userIsBanned) && (S || C || A && p || e.isLocked ? A && p : p || m), G = Object(X.a)(e), q = A && B && !e.bannedBy, J = B && D && !e.bannedBy, $ = q || J, ee = !Object(R.g)(e) && s && e.isGildable && !M && !(U && "[deleted]" === e.author), se = !C && !U, ne = [];
					V && ne.push(o.a.createElement(ke, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), y()(() => F("reply", e.id)())
						}
					}, o.a.createElement(ge, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), ee && ne.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ae.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), ne.push(o.a.createElement(te.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == w ? void 0 : w.type
					}, o.a.createElement(ke, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), B || ne.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(pe.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), ne.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => n.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => n.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), B && ne.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), se && ne.push({
						breakpointGroup: v.LoggedInUser,
						icon: o.a.createElement(ce.a, {
							name: "notification",
							isFilled: u
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: u ? () => n.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => n.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const ie = ne.map(e => o.a.isValidElement(e) ? e : o.a.createElement(ke, {
							className: H(e.breakpointGroup, j.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						de = ne.map(e => o.a.isValidElement(e) ? null : o.a.createElement(Ee, {
							className: H(e.breakpointGroup, j.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Oe.a.dropdownRowText
						}, e.icon));
					return o.a.createElement(r.Fragment, null, o.a.createElement(Se, {
						className: Object(d.a)(K({
							depth: c,
							isInOverlay: k,
							isModModeEnabled: A && g || L,
							isFollowCommentEnabled: se
						}), t)
					}, ie, o.a.createElement(ye, {
						className: B ? void 0 : H(v.LoggedInUser, j.HideIfVWLarger)
					}, o.a.createElement(Z.b, {
						className: Oe.a.overflowMenu,
						disabled: b,
						dropdownId: Te(e.id),
						onClick: () => _(Object(oe.b)("comment_overflow_menu", e.id))
					}, de, B && o.a.createElement(o.a.Fragment, null, o.a.createElement(Ee, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Oe.a.dropdownRowText
					}, o.a.createElement(ce.a, {
						name: "delete"
					})), o.a.createElement(re.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: P,
						isSelected: this.props.sendRepliesToggled
					})), o.a.createElement(be.a, {
						contextType: he.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && o.a.createElement(Q.a, {
						actionText: n.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: n.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: n.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: n.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: a,
						toggleModal: I,
						trackClick: () => {},
						withOverlay: !0
					}), A && o.a.createElement(o.a.Fragment, null, g && o.a.createElement(_e, {
						className: H(v.Moderator, j.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: B
					}), o.a.createElement(Ce, {
						className: g ? H(v.Moderator, j.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => _(Object(oe.b)("comment_mod_action_menu", e.id))
					}, o.a.createElement(ue.a, null), o.a.createElement(W.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(X.c)(e) && !g && o.a.createElement(z.a, {
						text: `${G}`,
						onClick: () => {
							x(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Pe(e.id)
					}, o.a.createElement(we, {
						model: e,
						onIgnoreReports: () => {
							f(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Pe(e.id)
					}), e.ignoreReports ? o.a.createElement(ve, null) : o.a.createElement(je, null)), $ && o.a.createElement(z.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, o.a.createElement(le.a, null), o.a.createElement(Y.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: D,
						isUserMod: A,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ie(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Me = Object(i.b)(Re, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(w.i)(Ne(s.id))), e(Object(S.h)({
								tooltipId: Te(s.id)
							}))
						},
						handleEdit: () => {
							const t = s.media && s.media.rteMode;
							n && e(Object(p.e)({
								commentId: s.id,
								draftKey: Object(l.a)(c.c.edit, s.id),
								text: s.bodyMD || "",
								commentMode: t,
								commentsPageKey: n
							}))
						},
						handleReply: () => n && e(Object(p.s)({
							parentCommentId: s.id,
							commentsPageKey: n
						})),
						onCommentFollow: t => e(Object(p.u)(s.id, t)),
						onDistinguishComment: (t, n) => e(Object(b.b)(s.id, t, n)),
						onFollowedCommentExpire: () => e(Object(u.p)({
							id: s.id,
							expiresAt: 0
						})),
						onGildClick: (t, n) => e(Object(_.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(N.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(S.h)({
							tooltipId: Ie(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(S.h)({
							tooltipId: Pe(s.id)
						})),
						toggleDeleteCommentModal: () => e(Object(w.i)(Ne(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(se.c)(Fe)),
				Le = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ae = s.n(Le);
			var Be = o.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return o.a.createElement("div", {
						className: Ae.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				De = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ue = s.n(De);
			var We = o.a.memo(e => o.a.createElement("div", {
					className: Ue.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ve = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				Ge = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				He = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ke = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				qe = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				ze = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Qe = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Ye = s("./src/reddit/components/ModModeReports/index.tsx"),
				Je = s("./src/reddit/components/PostTopMeta/index.tsx"),
				Xe = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ze = s("./src/reddit/components/UserIcon/index.tsx"),
				$e = s("./src/reddit/components/UserIcon/constants.ts"),
				et = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				tt = s("./src/reddit/helpers/author.ts"),
				st = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				nt = s("./src/reddit/constants/componentTestIds.ts"),
				rt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ot = s("./src/reddit/contexts/Visibility.tsx"),
				it = s("./src/reddit/controls/ErrorText/index.tsx"),
				at = s("./src/reddit/controls/InternalLink/index.tsx"),
				ct = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				dt = s("./src/reddit/helpers/flair.ts"),
				lt = s("./src/reddit/models/Subreddit/index.ts"),
				mt = s("./src/reddit/models/User/index.ts"),
				ut = s("./src/reddit/models/Vote/index.ts"),
				pt = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				bt = s("./src/reddit/selectors/commentSelector.ts"),
				ht = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ft = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				xt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ot = s("./src/reddit/selectors/poll/index.ts"),
				gt = s("./src/reddit/selectors/userPrefs.ts"),
				jt = s("./src/reddit/selectors/moderatingComments.ts"),
				vt = s("./src/reddit/components/Comments/Comment/index.m.less"),
				Ct = s.n(vt),
				yt = s("./src/config.ts"),
				Et = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				St = s("./src/reddit/components/SubredditIcon/index.tsx"),
				kt = s("./src/reddit/helpers/trackers/comment.ts");

			function _t() {
				return (_t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const wt = 300,
				Nt = E.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return o.a.createElement("button", g({}, s, {
						className: Object(d.a)(t, O.a.expandButton)
					}), o.a.createElement(f.a, {
						className: O.a.expandIcon
					}))
				}), "ExpandButton", Ct.a),
				It = E.a.wrapped(Me, "FlatList", Ct.a),
				Tt = E.a.wrapped(it.b, "ErrorText", Ct.a),
				Pt = E.a.wrapped(Ke.a, "HorizontalVotes", Ct.a),
				Rt = E.a.div("ActionBar", Ct.a),
				Ft = E.a.wrapped(Ge.a, "TopMeta", Ct.a),
				Mt = E.a.div("CommentContentWrapper", Ct.a),
				Lt = E.a.wrapped(qe.b, "AuthorHovercard", Ct.a),
				At = Object(rt.v)(),
				Bt = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(bt.b)(e, t),
					currentProfileModPermissions: rt.i,
					depth: (e, t) => Object(M.j)(e, t),
					collapsed: jt.b,
					collapsedBecauseCrowdControl: jt.a,
					currentUser: U.l,
					flair: M.e,
					focused: (e, t) => !t.noFocus && Object(M.t)(e, t),
					highlightAnimationDisabled: gt.d,
					isAdmin: U.L,
					isEditing: M.z,
					isLoggedIn: U.R,
					isPendingDeletion: M.E,
					isPresenceConsumptionExpEnabled: ft.c,
					moderatorPermissions: (e, t) => {
						const s = Object(bt.b)(e, t);
						return s ? Object(xt.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: Ot.f,
					modModeEnabled: rt.W,
					errorMsgs: M.I,
					replyFormOpen: M.L,
					subreddit: rt.s,
					subredditType: M.O,
					isOnlineConsumptionLoadTest: ft.a,
					isOnlineUserPref: U.W,
					userIsBanned: (e, t) => {
						const s = Object(bt.b)(e, t);
						return !!s && Object(D.jb)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: ht.b,
					isBlockingInterstitialV2Enabled: ht.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: r,
						trackCommentClick: o
					} = t;
					return {
						onCollapseClick: () => e(Object(u.q)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: r
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, r] = t === ut.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							o(r, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Dt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Ut = e => o.a.createElement("div", e, e.children),
				Wt = e => o.a.createElement(o.a.Fragment, null, e.children),
				Vt = At(Bt(e => {
					const {
						childrenInfo: t,
						clearHovered: s,
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						currentProfileModPermissions: b,
						currentUser: f,
						depth: x,
						errorMsgs: O,
						flair: g,
						flatlist: j,
						focused: v,
						hasAwardGradient: C,
						highlightAnimationDisabled: y,
						highlightTreatment: E,
						index: S,
						isActive: k,
						isAdmin: _,
						isAvatarsInCommentsEnabled: w,
						isBlockingInterstitialEnabled: N,
						isBlockingInterstitialV2Enabled: I,
						isEditing: P,
						isFirstInList: F,
						isHighlighted: M,
						isLoggedIn: L,
						isOnlineConsumptionLoadTest: A,
						isOnlineUserPref: B,
						isPendingDeletion: D,
						isPresenceConsumptionExpEnabled: U,
						moderatorPermissions: W,
						modModeEnabled: V,
						noSpacing: G = !1,
						onCommentAuthorClick: H,
						onCommentTimestampClick: K,
						onCollapseClick: q,
						onIgnoreReports: z,
						onLineMouseOver: Q,
						onPresenceIndicatorInViewport: Y,
						onVoteClick: J,
						postId: Z,
						prediction: $,
						renderedInOverlay: ee,
						replyFormOpen: te,
						restrictHeight: ne,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: oe,
						subreddit: ie,
						subredditType: ae,
						trackCommentClick: ce,
						userIconSmall: de,
						userIsBanned: le,
						onClickRevealSpoilerText: me,
						onMediaReload: ue
					} = e, pe = m.isDeleted, be = !P && !pe && !!O && O.length > 0, he = Object(l.a)(c.c.edit, m.id), fe = Object(l.a)(c.c.replyToComment, m.id), xe = Object(T.a)(W), Oe = Object(Qe.a)(m), ge = Object(X.c)(m), je = m.authorIsContractor && ae === lt.g.EmployeesOnly, ve = m.isLocked, Ce = xe && V, ye = !P && !pe && (L || w), Ee = w && !m.unrepliableReason, Se = !!f && Object(mt.e)(f) === m.author, [ke, _e] = Object(r.useState)(null), [we, Ne] = Object(r.useState)(null), Ie = Object(r.useRef)(null), Te = Object(R.f)(m) || Object(R.g)(m), Pe = Te ? Ut : at.default, Re = Object(R.f)(m) ? Wt : Lt, Fe = Object(se.b)();
					Object(r.useEffect)(() => {
						if (!P && !pe && (C && _e(o.a.createElement(We, null)), null !== E)) {
							if (E.glowHexColor) {
								const e = E.glowHexColor;
								_e(o.a.createElement(Be, {
									hexColor: e
								}))
							}
							if (E.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = E.effectHighlight;
								Ne(o.a.createElement(Ve.b, {
									prefersReducedAnimation: y,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [P, pe, C, y, E]);
					const Me = Object(r.useCallback)(() => {
							Fe(Object(kt.c)(m.id))
						}, [Fe, m.id]),
						Le = Object(ot.b)();
					(N || I) && Le && S >= ht.a - 1 && oe();
					const Ae = !pe && !Object(R.f)(m) && (!le || le && Se) && !Object(R.g)(m) && L,
						De = Object(r.useCallback)(() => {
							Ae && U && !Se && Y && Y(m.id)
						}, [m.id, Y, Ae, U, Se]),
						Ue = Object(st.a)(m),
						Ge = !!f && Object(mt.e)(f) === m.author ? null == f ? void 0 : f.accountIcon : m.profileImage,
						Ke = Object(Et.c)(Ge),
						qe = Ke || Object(Et.b)(Ge);
					return o.a.createElement("div", {
						key: `comment-${m.id}`,
						className: Object(d.a)(`Comment ${m.id}`, Ct.a.CommentWrapper, {
							[Ct.a.highlightComment]: M,
							[Ct.a.deleted]: pe,
							[Ct.a.focused]: v,
							[Ct.a.redesign]: w,
							[Ct.a.topLevel]: !x,
							[Ct.a.noSpacing]: G
						})
					}, ke, we, !P && !pe && F && o.a.createElement("div", {
						className: Ct.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${yt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), o.a.createElement(Nt, {
						className: Object(d.a)(m.id, {
							[Ct.a.hidden]: !i,
							[Ct.a.visible]: i
						}),
						onClick: () => {
							s(), q(), ce("collapse", m.id)()
						},
						onMouseOver: () => Q(m.id),
						onMouseOut: s
					}), Object(tt.a)(m.author) ? ie ? o.a.createElement(St.b, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						subredditOrProfile: ie,
						linkTo: `/user/${m.author}/`
					}) : null : o.a.createElement(Re, {
						alwaysShowChildren: !0,
						collapsed: i,
						hoverDivClassName: Ct.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(R.g)(m),
						postOrComment: m,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: ee ? Je.f.Lightbox : void 0
					}, o.a.createElement(Pe, {
						className: Object(d.a)(Ct.a.UserIconContainer, de && Ct.a.UserIconContainerSmall),
						"data-testid": Te ? void 0 : "comment_author_icon",
						onClick: Te ? void 0 : H,
						to: `/user/${m.author}/`
					}, Le ? o.a.createElement(Ze.a, {
						isNft: qe,
						className: Object(d.a)(Ct.a.UserIcon, {
							[Ct.a.v1NftTreatment]: Ke
						}),
						iconUrl: Ge,
						isNSFW: m.profileOver18 || !1,
						nsfwIconUrl: $e.a,
						userName: m.author,
						isHighlighted: M,
						shouldShowPresenceIndicator: Ae && U,
						onPresenceIndicatorInViewport: De,
						isCommentAuthorBlocked: Object(R.g)(m),
						collapsed: i,
						shouldUseOnlineOverride: Se,
						isOnlineOverrideValue: B,
						isOnlineStatusLoadTest: Ae && A,
						authorId: m.authorId
					}) : o.a.createElement("div", {
						className: Ct.a.UserIcon
					}))), o.a.createElement(Mt, {
						className: Object(d.a)({
							[Ct.a.isActive]: k,
							[Ct.a.isCollapsed]: i,
							[Ct.a.isLocked]: ve && Ce,
							[Ct.a.isPendingDeletion]: D,
							[Ct.a.isRemoved]: !!m.bannedBy && Ce || m.isDeleted && _
						})
					}, o.a.createElement(ct.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), o.a.createElement(Ft, {
						userHasNft: qe,
						childrenInfo: t,
						className: Object(d.a)({
							[Ct.a.collapsed]: i,
							[Ct.a.noFlair]: Object(dt.o)(g || null)
						}),
						collapsed: i,
						collapsedBecauseCrowdControl: a,
						comment: m,
						commentsPageKey: u,
						flair: g,
						isAdmin: _,
						isPostComment: !0,
						onCommentAuthorClick: H,
						onCommentTimestampClick: K,
						renderedInOverlay: ee,
						renderContractorBadge: je
					}), !i && o.a.createElement(r.Fragment, null, P && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: c.c.edit,
						draftKey: he,
						postId: Z,
						rtJson: Object(st.a)(m),
						mediaMetadata: m.media && m.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						submitAction: e => Object(p.j)({
							id: m.id,
							commentsPageKey: u,
							draftKey: he,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !P && (!pe || _) && o.a.createElement("div", {
						"data-testid": nt.d,
						ref: Ie,
						className: Object(d.a)(Ct.a.CommentBody, {
							[Ct.a.restrictHeight]: !(!ne || !Ie.current) && Ie.current.clientHeight > wt
						})
					}, $ ? o.a.createElement(He.a, {
						comment: m,
						prediction: $
					}) : o.a.createElement(Xe.b, {
						content: Ue,
						mediaMetadata: m.media && m.media.mediaMetadata,
						redditStyle: re,
						rtJsonElementProps: Dt(e),
						onClickRevealSpoilerText: me,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: ue,
							onClick: Me
						}
					}), o.a.createElement(pt.b, {
						content: Ue
					})), V && xe && Oe && o.a.createElement(ze.a, {
						thing: m
					}), V && xe && ge && o.a.createElement(Ye.a, {
						onIgnoreReports: z,
						reportable: m
					}), null != j ? j : ye && o.a.createElement(Rt, null, Ee && o.a.createElement(Pt, {
						downvoteButtonClassName: Ct.a.voteButton,
						downvoteClassName: Ct.a.upDownVote,
						model: m,
						onVoteClick: J,
						scoreClassName: Ct.a.score,
						upvoteButtonClassName: Ct.a.voteButton,
						upvoteClassName: Ct.a.upDownVote
					}), o.a.createElement(It, {
						comment: m,
						commentsPageKey: u,
						depth: x,
						isAvatarsInCommentsEnabled: w,
						collapsedBecauseCrowdControl: a,
						modModeEnabled: V,
						moderatorPermissions: b || W,
						renderedInOverlay: ee,
						isCommentFocused: v,
						subreddit: ie,
						trackCommentClick: ce
					})), be && O.map(e => o.a.createElement(Tt, {
						key: e
					}, e)), te && o.a.createElement(h.a, {
						className: Object(d.a)(Ct.a.EditCommentForm, Ct.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: u,
						depth: x,
						draftType: c.c.replyToComment,
						draftKey: fe,
						isTopLevelComment: !1,
						parentCommentId: m.id,
						postId: Z,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: u,
								draftKey: fe,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: u,
								draftKey: fe,
								parentCommentDepth: x,
								parentCommentId: m.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => o.a.createElement(et.a.Consumer, null, t => o.a.createElement(Vt, _t({}, e, {
				trackCommentClick: t
			})))
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Comments-PredictionComment").then(s.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
		},
		"./src/reddit/components/Comments/States/index.m.less": function(e, t, s) {
			e.exports = {
				CommentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				commentsPlaceholderContainer: "_2o0N1VHuLszWHqY5A8iayv",
				CommentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				commentPlaceholder: "_2114DnVtHe_0MtbEW85tnL",
				Avatar: "_3ES-TCR45dPoj_NuOATuNi",
				avatar: "_3ES-TCR45dPoj_NuOATuNi",
				VoteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				voteColumn: "_3j7WNOCzFwCp1SXZGJP1-V",
				TextColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				textColumn: "_3tQxKBNuEJsKH_mPQEy34W",
				StateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				stateContainer: "TbMmDiSaSaBQFF9F3FGe8",
				CommentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				commentsIcon: "_1-f8S_KoiOmIpA8kGxOgfh",
				LiveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				liveChatIcon: "_1K0_Ej6gm6u-pTA1-FRY3S",
				SnooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				snooFacepalm: "_2AxaYiv6EkZse5msRZqowQ",
				EmptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				emptyTitle: "_39dVqXnozb8JxasPyFPu6C",
				ErrorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				errorTitle: "_2Nj40mHW74FkFefq6oqWkb",
				EmptyText: "_2x3Avx0lbWMcic-5bE_guO",
				emptyText: "_2x3Avx0lbWMcic-5bE_guO",
				ErrorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				errorFullPage: "_2ze7IsXK_2d3McYZHK6v_D",
				LoadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				loadingFullPage: "_3kZ_esGcijvfnM9KjA27vj",
				Downvote: "_32W1DnzyRkYXP82ZO96H0V",
				downvote: "_32W1DnzyRkYXP82ZO96H0V",
				Upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				upvote: "_1lwmFW6D9PmeT_QA-R5F_0",
				TopMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				topMetaPlaceholder: "_24vSs1yG3YhINbU6QRiFR9",
				CommentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb",
				commentBodyPlaceholder: "_3S0qviXPTlIEUjYjSKT_Lb"
			}
		},
		"./src/reddit/components/Comments/States/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/times.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/pages/comments.ts"),
				u = s("./src/reddit/components/Media/LoadingIcon/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/describeApiError/index.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				x = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				O = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				j = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				v = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				C = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(C);
			const E = l.a.p("EmptyTitle", y.a),
				S = l.a.p("ErrorTitle", y.a),
				k = l.a.p("EmptyText", y.a),
				_ = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(y.a.StateContainer, t)
					}, s ? a.a.createElement(j.a, {
						className: y.a.LiveChatIcon
					}) : a.a.createElement(g.a, {
						className: y.a.CommentsIcon
					}), a.a.createElement(E, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(k, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(g.a, {
					className: y.a.CommentsIcon
				}), a.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(k, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				N = e => {
					let {
						link: t
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(g.a, {
						className: y.a.CommentsIcon
					}), a.a.createElement(E, null, n.fbt._("That comment is missing", null, {
						hk: "1i1U0i"
					})), a.a.createElement(p.n, {
						to: Object(h.b)(t)
					}, n.fbt._("View all comments", null, {
						hk: "2CgaIx"
					})))
				},
				I = Object(c.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: r
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(s, n, {
							sort: r
						}, r))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(v.a, {
						className: y.a.SnooFacepalm
					}), a.a.createElement(S, null, t ? Object(b.a)({
						apiError: t,
						isLoggedOut: !1
					}) : n.fbt._("Sorry, comments couldn't load!", null, {
						hk: "2h6LDi"
					})), a.a.createElement(p.l, {
						onClick: s
					}, n.fbt._("Retry", null, {
						hk: "NOuNi"
					})))
				}),
				T = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(y.a.StateContainer, y.a.ErrorFullPage)
					}, a.a.createElement(I, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: r
					}))
				},
				P = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(u.a, null))
				}, "LoadingFullPage", y.a),
				R = l.a.div("CommentsPlaceholderContainer", y.a),
				F = l.a.div("CommentPlaceholder", y.a),
				M = l.a.div("Avatar", y.a),
				L = l.a.div("VoteColumn", y.a),
				A = l.a.div("TextColumn", y.a),
				B = () => a.a.createElement("div", {
					className: Object(d.a)(y.a.TopMetaPlaceholder, Object(f.a)({
						isLoading: !0
					}))
				}),
				D = () => a.a.createElement("div", {
					className: Object(d.a)(y.a.CommentBodyPlaceholder, Object(f.a)({
						isLoading: !0
					}))
				}),
				U = e => {
					let {
						isAvatarsInCommentsEnabled: t,
						sidebar: s = !0
					} = e;
					return a.a.createElement(R, null, o()(10, e => a.a.createElement(F, {
						key: e
					}, s && a.a.createElement(a.a.Fragment, null, t ? a.a.createElement(M, {
						className: Object(f.a)({
							isLoading: !0
						})
					}) : a.a.createElement(L, null, a.a.createElement(O.b, {
						className: y.a.Upvote
					}), a.a.createElement(x.a, {
						className: y.a.Downvote
					}))), a.a.createElement(A, null, a.a.createElement(B, null), a.a.createElement(D, null)))))
				}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				x = s.n(f),
				O = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				j = O.a.wrapped(l.c, "StyledTooltip", x.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.qb)(e),
					userIsSuspended: h.Y
				});
			t.a = Object(i.b)(v, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(c.h)(u.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: g
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(m.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), a(c)
					},
					onMouseEnter: r,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(j, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(j, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				c = s.n(a),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				m = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(o.e)(m.b),
					s = Object(o.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && s ? r.a.createElement("img", {
					alt: t.name,
					className: Object(i.a)(c.a.img, e.className),
					id: e.id,
					src: s
				}) : r.a.createElement(d.a, e)
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(u);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const a = n && n.eventInfo,
					u = Object(l.a)(n),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !u && h && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = s("./src/reddit/icons/fonts/Live/index.tsx"),
				d = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = s.n(l),
				u = s("./src/lib/lessComponent.tsx");
			const p = u.a.span("PostEventFutureText", m.a),
				b = u.a.span("PostEventPastText", m.a),
				h = u.a.span("PostEventNowText", m.a),
				f = u.a.span("Container", m.a),
				x = u.a.wrapped(a.a, "CalendarIcon", m.a),
				O = u.a.wrapped(c.a, "LiveIcon", m.a),
				g = u.a.div("LoadingState", m.a);
			class j extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: a,
						eventStart: c
					} = s, l = Object(o.e)(c, n);
					let m, u;
					if (this.state.mounted || l === o.a.Live) m = r.a.createElement(d.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						m = r.a.createElement(g, {
							className: e
						})
					}
					if (a) u = r.a.createElement(h, null, r.a.createElement(O, null), m);
					else if (l === o.a.Future) u = r.a.createElement(p, null, r.a.createElement(x, null), m);
					else {
						if (l !== o.a.Past) return null;
						u = r.a.createElement(b, null, r.a.createElement(x, null), m)
					}
					return r.a.createElement(f, {
						className: e
					}, u)
				}
			}
			t.a = j
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(a);
			t.a = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(o.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				u = s.n(m);
			const p = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				b = Object(o.b)(p, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				h = () => null;
			t.a = b(e => r.a.createElement("div", {
				className: u.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? r.a.createElement(c.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : r.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = m
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = s("./src/reddit/components/OverflowMenu/index.m.less"),
				O = s.n(x);
			const g = d.a.wrapped(u.a, "_Dropdown", O.a),
				j = Object(m.a)(g),
				v = d.a.button("MenuButton", O.a),
				C = d.a.wrapped(p.b, "DropdownRow", O.a),
				y = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				E = Object(i.b)(y, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				S = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => o.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[O.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: S(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : o.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: O.a.MenuIcon
			}), o.a.createElement(j, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return u
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const l = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: c.a.tabGroup
				},
				m = (e, t) => {
					if (t !== n.BUTTON) return e ? c.a.active : c.a.inactive
				},
				u = e => {
					let {
						active: t = !0,
						children: s,
						className: n,
						disabled: r = !1,
						variant: a,
						...u
					} = e;
					return o.a.createElement("button", d({}, u, {
						className: Object(i.a)(c.a.primaryButton, l[a], m(t, a), n),
						disabled: r
					}), s)
				}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/lib/classNames/index.ts"),
				O = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				j = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				v = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				C = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(C);
			const E = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(O.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(f.d)(e).pageType
				})),
				S = "post-container";
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: h,
						style: f,
						ref: O,
						shouldAddGalleryViewability: g = !0
					} = this.props, j = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: O,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, l, t, o, p))(s), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(y.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": S,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": v.a.BACKGROUND
					}, s), C = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.F)(l.media) && g ? r.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || C ? r.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(j))
				}
			}
			t.b = E(Object(j.a)(Object(g.a)(Object(u.c)(k))))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: r
						} = this.props, o = !!n;
						r(e ? Object(m.o)({
							postId: s,
							isFollowed: o
						}) : Object(m.g)({
							postId: s,
							isFollowed: o
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, r = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.z)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const o = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [s, i] = Object(n.useState)(0), [a, c] = Object(n.useState)(!1), [d, l] = Object(n.useState)(0), m = {
						currentTime: s,
						setCurrentTime: i,
						isLive: a,
						setIsLive: c,
						totalTime: d,
						setTotalTime: l
					};
					return r.a.createElement(o.Provider, {
						value: m
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				o = Object(n.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = o
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
					backgroundColor: r.a.overlayReportFlow
				},
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				a = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = a
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
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
				m = i.a.wrapped(d, "RemoveButton", c.a),
				u = e => r.a.createElement("button", {
					className: Object(o.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/FocusableContent/index.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				d = s.n(c);
			t.a = e => {
				let {
					className: t,
					isCommentBoxDesignEnabled: s,
					isLoading: n,
					toolbarPosition: c
				} = e;
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.content, {
						[d.a.mCollapsed]: s
					})
				}, r.a.createElement("div", {
					className: Object(o.a)(d.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === c && r.a.createElement("div", {
					className: Object(o.a)(d.a.toolbar, d.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_3W4fKI_ey_jDfiIO7ElMuP",
				eventMeta: "_2IeaiLn4GyfAXKD1TLrIS1",
				postContent: "_3zoWB97jg8GAUJCl4XA57a",
				postItemMetaContainer: "_3xctgCPJ_3knmtE3O9TQzE",
				postItemTitleContainer: "_3CAq9fn45Es59QdDzgtbhZ",
				postItemFlatlistContainer: "oNxebZMPvUlTJIOtprxhP",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				marginCancel: "_3IElQYxAJq_0qRyeyMDc_K",
				twitterEmbed: "Tzfi4PWE-V9cQ78MJ3GkX",
				promotedTrend: "_1yoxdnJLJUmMiTSTn_QkNJ",
				mediaContent: "_1zcwL6v8t8G0OHvf5D4WW-",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV",
				adLinkWrapper: "p35vRG-PK5zfK-G5gjGAr",
				outboundLink: "_16eWoJfxv365opQYh3dOAJ",
				ctaExperiment: "_1fSEjc0jhvt02_0z07145y",
				adCallToAction: "BMx4T197BjzZgmRjegR7y",
				active: "_28VWbryTIGJPb62Ey50lm8",
				redditStyle: "n1f3mSINfKiMWmz1fdi1o"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, s) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemWarningContainer: "_1nfcZWg35_OmccxqivQ1EN",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				titleMedium: "_1FT0e6kh1BBb_oALAMW_l7",
				titleTextColor: "_1-SZ3VwLjbFwTzaZvU8FBX",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				blurred: "rIj9lvusQvb0-Mf16X6ZL",
				container: "PrfaR-luawcEBK2dhGuDp",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj",
				paddingSide: "_2n04GrCyhhQf-Kshn7akmH",
				paddingRight: "_1yBpz1MEPxxYTxjlEilGtB",
				postTitleVisibility: "_1SAKlLic4t9BBtiiE-Z6ob",
				postTitleColors: "nbO8VWsMIB-Mv-tIa37NF",
				backgroundWrapper: "UcytmAhLeRTIrWR81xl4P",
				inline: "_1AKeAGcglmBjK1SUUXNFti"
			}
		},
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				m = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				u = s("./src/reddit/components/ModModeReports/index.tsx"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostTitle/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				g = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				j = s("./src/reddit/components/SearchWarnings/index.tsx"),
				v = s("./src/reddit/components/Thumbnail/index.tsx"),
				C = s("./node_modules/react-redux/es/index.js"),
				y = s("./node_modules/reselect/es/index.js"),
				E = s("./src/reddit/actions/post.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/poll/index.ts"),
				w = s("./src/reddit/selectors/postFlair.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const T = {
					crosspost: N.d,
					isActive: N.j,
					isLoggedIn: I.R,
					moderatorPermissions: k.m,
					modModeEnabled: S.W,
					poll: _.e,
					showEditFlair: w.a,
					flairStyleTemplate: S.Y
				},
				P = () => Object(y.c)(T);
			var R = s("./src/reddit/contexts/Post/index.tsx"),
				F = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				A = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/lib/isUrl/index.ts"),
				D = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				U = s("./src/reddit/components/SearchPost/index.m.less"),
				W = s.n(U);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: i,
						first: C,
						flairStyleTemplate: y,
						isLoggedIn: E,
						isOverlay: S,
						moderatorPermissions: k,
						modModeEnabled: _,
						onClickPost: w,
						onClickPostAuthor: N,
						onClickPostCommunity: I,
						onIgnoreReports: T,
						poll: P,
						post: R,
						redditStyle: U,
						searchQuery: G,
						showBulkActionCheckbox: H,
						subredditOrProfile: K,
						title: q
					} = e, z = U ? void 0 : y, Q = s || void 0, Y = Object(M.a)(k), J = Object(m.a)(R), X = Object(p.c)(R), Z = Object(v.c)({
						crosspost: s,
						post: R,
						url: void 0,
						usePreview: !1
					}), $ = Z && Object(B.a)(Z), ee = !!R.media && Object(A.I)(R.media), te = !E, se = Object(n.useMemo)(() => q ? void 0 : Object(D.a)(G, e => r.a.createElement("span", {
						className: Object(o.a)(W.a.syntaxHighlight)
					}, e), e => e), [q, G]), ne = {
						flairStyleTemplate: z,
						isOverlay: S,
						onClickPostAuthor: N,
						onClickPostCommunity: I,
						post: R,
						shouldShowSubscribeButton: te,
						subredditOrProfile: K
					}, re = null != q ? q : r.a.createElement("div", {
						className: Object(o.a)(W.a.paddingSide, W.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(f.c, {
						format: se,
						hideSourceLink: !0,
						poll: P,
						post: R,
						redditStyle: !0,
						size: f.b.Medium,
						isOverlay: S,
						hideNSFWSpoilerFlair: !0
					}), R.source && !Q && r.a.createElement(F.a, {
						className: W.a.outboundLink,
						href: R.source.url,
						isSponsored: R.isSponsored,
						postId: R.id,
						source: R.source
					}, Object(a.a)(R))), $ && r.a.createElement("div", {
						className: W.a.thumbnailContainer
					}, r.a.createElement(v.b, {
						className: W.a.thumbnail,
						crosspost: Q && R,
						isMeta: R.isMeta,
						post: Q || R,
						redditStyle: U,
						templatePlaceholderImage: z && z.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(h.b, {
						className: Object(o.a)(W.a.postContainer, Object(L.a)(e), C ? W.a.mFirst : void 0, t),
						eventFactory: i,
						isOverlay: S,
						onClick: w,
						post: R,
						style: {
							...Object(L.d)(e),
							...Object(L.b)(z)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: z,
						redditStyle: !0
					}, r.a.createElement(c.a, {
						className: W.a.eventMeta,
						post: R
					}), r.a.createElement("div", {
						className: Object(o.a)(W.a.postContent, {
							[W.a.showBulkActionCheckbox]: H
						}),
						"data-click-id": "body"
					}, r.a.createElement(g.c, V({
						className: Object(o.a)(W.a.paddingSide, W.a.postItemMetaContainer),
						key: "PostMeta"
					}, ne)), r.a.createElement(j.a, {
						className: Object(o.a)(W.a.paddingSide, W.a.postItemWarningContainer),
						isSpoiler: R.isSpoiler,
						isNSFW: R.isNSFW,
						isQuarantined: null == K ? void 0 : K.isQuarantined
					}), re, _ && Y && J && r.a.createElement(l.a, {
						thing: R
					}), _ && Y && X && r.a.createElement(u.a, {
						onIgnoreReports: T,
						reportable: R
					}), r.a.createElement(O.c, {
						className: Object(o.a)(W.a.paddingSide, W.a.postItemFlatlistContainer),
						post: R
					}), r.a.createElement(d.d, null))));
					return r.a.createElement(x.b, null, oe)
				}),
				H = Object(R.b)((e => t => {
					const s = Object(S.gb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(E.fb)(s))
							}
						})(Object(C.d)(), {
							...t
						}),
						o = Object(S.cb)(s),
						i = Object(C.e)(P),
						a = {
							...t,
							...i,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, a)
				})(G))
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(i.a)(d.a.flatlistContainer, s)
					}, t)
				},
				m = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(a.b)(t)), n.fbt._plural(t)], {
						hk: "4rxl9Z"
					}))
				},
				u = e => {
					let {
						awardCountsById: t,
						awardingsTotal: s
					} = e;
					const r = s && s > 0 ? s : Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(a.b)(r)), n.fbt._plural(r)], {
						hk: "1jrEck"
					}))
				};

			function p(e) {
				let {
					post: t,
					className: s
				} = e;
				return o.a.createElement(l, {
					className: s
				}, o.a.createElement(m, {
					score: t.score
				}), o.a.createElement("span", {
					className: Object(i.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(a.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), o.a.createElement(u, {
					awardCountsById: t.awardCountsById,
					awardingsTotal: t.awardingsTotal
				}))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				crosspostIcon: "_1-Dnj_BC9slzHImx9Qex6x",
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				enlargedSubredditName: "_2QZLJe3l7lBGN9JNI51gn9",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				enlargedSubredditIcon: "_3dUPuwEf-ssCOozUxvm-HX",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				metadataFont: "_3zxBrqnz24HT1z7OOcRXCS",
				metaSpacer: "_3-fo1J0EWS8TawiUkoZ9DH",
				defaultCommunityIcon: "_3hvmfTpZq_W24eaylznBmS",
				mNightmode: "_15ad3usdVw8bRqdw2I-vhN",
				blur: "_35xBFzll_c4A2_N9fEuuuY",
				contents: "_3d8GzWNAiVF7ncwmjHXlNf"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				f = s.n(h);
			const x = "subreddit_icon_link",
				O = "subreddit-name";
			t.c = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: h,
					post: g,
					subredditOrProfile: j,
					tooltipType: v
				} = e, C = Object(u.a)(), {
					isSubEnlarged: y
				} = Object(i.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, f.a.metaContainer)
				}, !g.isSponsored && j && o.a.createElement(a.a, {
					className: Object(n.a)(f.a.hovercardContainer, f.a.hovercardContainer),
					postId: g.id,
					subredditName: j.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(f.a.subredditIcon, y && f.a.enlargedSubredditIcon),
					linkTo: j.url,
					linkProps: h ? {
						"data-testid": x,
						onClick: h
					} : void 0,
					subredditOrProfile: j
				}), o.a.createElement(l.a, {
					className: Object(n.a)(f.a.subredditName, y && f.a.enlargedSubredditName),
					"data-testid": O,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: j.url,
						state: C
					}
				}, j.displayText)), !g.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(m.b, null), o.a.createElement(c.h, {
					type: g.belongsTo.type,
					id: g.belongsTo.id
				})), o.a.createElement(d.g, {
					className: f.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: g,
					tooltipType: v
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				commentContainer: "_2lwxooVpRNqH_bjx-Nm4m4",
				postTitleContainer: "_1nhxJR41hD8jXWqUVy3wTT",
				postTitle: "_1HsM08P8HBGOIPATQsthMA",
				commentContent: "_1i_lg5WToFS_KM8bSao5FB",
				commentAuthor: "q6Rzyt18sGpgOFFoG9gUg",
				commentFlatlist: "_3bkDvRYnc0SodO59dk5n3p",
				goToThreadLinkButton: "_3Yys9Taiw4B3XiXhmbLrra",
				mediaIcon: "_14gjyiBw0XSVan9XLN7ER-"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2u_haOaI877DTCSOfFouuF",
				commentContainer: "_2Uv1IcU4LjDH6OqbNZ0BwO",
				comment: "yNjWq2s_3V0N5m9u-Bx-D",
				link: "-fCtQc5X_zwd1tnX_0s4W",
				linkContainer: "tSwYm_NW9-rD1G91vZi4d"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(d);
			const m = e => r.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, r.a.createElement("div", {
				className: c.a.postContent
			}, r.a.createElement("div", {
				className: c.a.postItemMetaContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditName, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: c.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.flatListItem, Object(i.b)(e))
			}))))
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_3BWq3z8_9gA3oThgYXnngR",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH",
				warnings: "_1QstT010Ns0i6YkU4n5O25"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(a);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), r.a.createElement("div", {
				className: c.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(c.a.title, Object(i.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(c.a.description, Object(i.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(c.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				image: "e6PSfRI3_H3v8fgbIqj-x",
				button: "_3FKXXAcRW_DvCNr6yMbF73"
			}
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/controls/Search/SearchBar/index.tsx"),
				c = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				d = s("./src/reddit/helpers/trackers/searchResults.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				m = s("./src/reddit/pages/SearchResults/index.tsx"),
				u = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				p = s.n(u);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = `${n.a.assetPath}/img/telescope-snoo.png`;
			var f;

			function x(e) {
				let {
					query: t,
					type: s,
					searchBarId: n = a.a,
					searchOptions: u,
					tab: f
				} = e;
				const x = Object(l.a)();
				Object(o.useEffect)(() => {
					x(Object(d.o)(s, u))
				}, [s]);
				const O = u.restrict_sr || m.pageConfig[f].sidebar;
				return i.a.createElement("div", {
					className: Object(r.a)(p.a.noResults, O && p.a.withSidebar),
					"data-testid": "no-results"
				}, i.a.createElement("img", {
					alt: b._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: h,
					className: p.a.image
				}), i.a.createElement("h2", {
					className: p.a.header
				}, b._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), b._("{search query}", [b._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), i.a.createElement("p", {
					className: p.a.text
				}, b._("Double-check your spelling or try different keywords to {=adjust your search}", [b._param("=adjust your search", i.a.createElement("button", {
					className: p.a.button,
					onClick: () => {
						const e = document.querySelector(`input[type="search"][id=${n}]`);
						c.b.set(c.a.ADJUST_SEARCH_BUTTON), null == e || e.focus()
					}
				}, b._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				})))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(f || (f = {}))
		},
		"./src/reddit/components/SearchResultsContent/PdpComment/index.m.less": function(e, t, s) {
			e.exports = {
				actionFont: "GdWkLdr7ToYAI7A1BuDdw",
				commentContent: "_2UJq3kiv6y_oSPPmQyFMxy",
				commentContainer: "_2nHutt97wCf1b9Txz8_Y67",
				first: "B1l5QN6o0c-5KGYHlANBw",
				iconSpacer: "vz6ezPSNwnMTVPF3HcJiw",
				marginTop: "_3jLdjJWF8IlmuZ7sysSq0g",
				marginContainer: "_3KLHXM3DEshAA3TDpGD_4a",
				metadataColor: "tuXecQytAjq5ReXeDFhPI",
				metadataFont: "_3bUukUiGtOzLXmGTBi1yXx",
				flex: "_3SUyRHeYoSqKJ0It_8jTAQ",
				separator: "_1UhP-2TSDqqzDUVoNfS4Nm",
				pdpUserIcon: "_3DCfB-ynh0K_m_xbYTL_Ne"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_2kqt-kRLvKQ1Kqi8OjMEa7"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Nt
			})), s.d(t, "c", (function() {
				return Ft
			})), s.d(t, "b", (function() {
				return Lt
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/LRUCache/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Comments/States/index.tsx"),
				b = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/config.ts"),
				f = s("./node_modules/lodash/noop.js"),
				x = s.n(f),
				O = s("./node_modules/polished/dist/polished.es.js"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				v = s.n(j),
				C = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				y = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/components/FlairList/index.tsx"),
				_ = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/reddit/components/Flair/index.tsx"),
				P = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				R = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				F = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/controls/InternalLink/index.tsx"),
				L = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				A = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				U = s("./src/reddit/hooks/useTheme.ts"),
				W = s("./src/reddit/icons/fonts/index.tsx"),
				V = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				K = s("./src/reddit/components/AuthorLink/index.tsx"),
				q = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				z = s("./src/reddit/components/HumanDate/HumanDateTime.tsx"),
				Q = s("./src/reddit/components/HumanDate/TimeAgo.tsx"),
				Y = s("./src/reddit/components/PostTopMeta/index.tsx"),
				J = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				X = s.n(J);

			function Z(e) {
				var t;
				const {
					className: s,
					clickSourceData: n,
					onClick: r,
					subredditOrProfile: o
				} = e, c = Object(a.e)(G.eb), d = null === (t = o.icon) || void 0 === t ? void 0 : t.url, l = null == o ? void 0 : o.color;
				let m;
				return m = d ? i.a.createElement("img", {
					alt: I.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : i.a.createElement(W.a, {
					name: "community",
					isFilled: !c,
					className: Object(y.a)(X.a.defaultCommunityIcon, s, c && X.a.mNightmode)
				}), i.a.createElement(M.default, {
					className: X.a.contents,
					"data-testid": H.a,
					onClick: r,
					to: {
						pathname: o.url,
						state: n
					}
				}, m)
			}

			function $(e) {
				const {
					post: t,
					onClickPostAuthor: s
				} = e, n = Object(D.a)(Y.e), r = t.crosspostRootId ? I.fbt._("Crossposted by", null, {
					hk: "1r1JSX"
				}) : I.fbt._("Posted by", null, {
					hk: "3mow5F"
				});
				return i.a.createElement("div", {
					className: X.a.metaContainer
				}, t.crosspostRootId && i.a.createElement(W.a, {
					name: "crosspost",
					className: Object(y.a)(X.a.crosspostIcon, X.a.metaSpacer)
				}), i.a.createElement("span", {
					className: X.a.metaSpacer
				}, r), i.a.createElement(q.b, {
					postOrComment: t
				}, i.a.createElement(K.a, {
					author: t.author,
					className: X.a.metaSpacer,
					isAuthorDeleted: t.author === d.H,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": C.a.USER,
						"data-testid": Y.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && i.a.createElement("div", {
					className: X.a.flairContainer
				}, i.a.createElement(T.b, {
					flair: t.authorFlair,
					forceSmallEmojis: !0
				})), !t.isSponsored && i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
					className: X.a.timestamp,
					"data-testid": Y.c,
					"data-click-id": C.a.TIMESTAMP,
					onMouseEnter: n.show,
					onMouseLeave: n.hide,
					ref: n.target.ref
				}, i.a.createElement(Q.a, {
					seconds: t.createdAt / d.Xb
				})), i.a.createElement(A.a, null, i.a.createElement(R.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, i.a.createElement(z.a, {
					seconds: t.createdAt / d.Xb
				})))))
			}

			function ee(e) {
				const {
					className: t,
					isOptimizedSerp: s,
					onClickPostAuthor: n,
					onClickPostCommunity: r,
					post: o,
					subredditOrProfile: c
				} = e, d = Object(B.a)(), {
					isSubEnlarged: l
				} = Object(a.e)(V.a), m = Object(U.a)();
				return i.a.createElement("div", {
					className: Object(y.a)(t, X.a.metaContainer, X.a.metadataFont)
				}, !o.isSponsored && c && i.a.createElement(P.a, {
					className: Object(y.a)(X.a.hovercardContainer, X.a.hovercardContainer),
					postId: o.id,
					subredditName: c.name
				}, i.a.createElement(Z, {
					className: Object(y.a)(X.a.subredditIcon, l && X.a.enlargedSubredditIcon),
					"data-click-id": C.a.SUBREDDIT,
					clickSourceData: d,
					onClick: r,
					subredditOrProfile: c
				}), i.a.createElement(M.default, {
					className: Object(y.a)(X.a.subredditName, l && X.a.enlargedSubredditName),
					"data-testid": H.b,
					"data-click-id": C.a.SUBREDDIT,
					onClick: r,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !o.isSponsored && !s && i.a.createElement(i.a.Fragment, null, i.a.createElement(L.b, null), i.a.createElement(F.h, {
					type: o.belongsTo.type,
					id: o.belongsTo.id
				})), i.a.createElement(L.b, null), i.a.createElement($, {
					className: X.a.postTopMeta,
					onClickPostAuthor: n,
					post: o,
					theme: m
				}))
			}
			var te = s("./src/reddit/components/SearchWarnings/index.tsx"),
				se = s("./src/reddit/components/SEOTitle/index.tsx"),
				ne = s("./src/reddit/components/SEOTitle/constants.ts"),
				re = s("./src/reddit/components/Thumbnail/index.tsx"),
				oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ie = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				ae = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/controls/OutboundLink/index.tsx"),
				de = s("./src/reddit/helpers/clickSourceData/index.ts"),
				le = s("./src/reddit/helpers/overlay/index.ts"),
				me = s("./src/reddit/helpers/path/index.ts"),
				ue = s("./src/reddit/helpers/trackers/searchResults.ts"),
				pe = s("./src/reddit/hooks/usePageLayer.ts"),
				be = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				he = s("./src/reddit/selectors/searchResults.ts"),
				fe = s("./src/telemetry/models/Outbound.ts"),
				xe = s("./src/reddit/components/SearchPost/index.m.less"),
				Oe = s.n(xe);

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const je = "post-title";

			function ve(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: r
				} = e, a = s ? ne.a.PostComments : ne.a.PostItem, c = Object(B.a)(), d = Object(S.a)(n.permalink, void 0, c), l = Object(U.a)(), m = Object(o.useMemo)(() => Object(ie.a)(r, e => i.a.createElement("span", {
					className: Object(y.a)(Oe.a.syntaxHighlight)
				}, e), e => e), [r])(n);
				return i.a.createElement("div", {
					className: Object(y.a)(n.id, Oe.a.postTitleColors),
					"data-adclicklocation": C.a.TITLE
				}, i.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${Oe.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(O.c)(.45,Object(be.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(O.c)(.45,Object(be.a)({theme:l}).titleText,Object(be.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(O.c)(.45,Object(be.a)({theme:l}).bodyText,Object(be.a)({theme:l}).body)};\n        }\n      `
					}
				}), i.a.createElement("div", {
					className: Oe.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${h.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), i.a.createElement("div", {
					className: Oe.a.titleContainer
				}, i.a.createElement(g.a, {
					to: d
				}, i.a.createElement("div", {
					className: Object(y.a)(Oe.a.inline, Oe.a.titleTextColor, Oe.a.titleMedium, Oe.a.paddingRight),
					"data-testid": je,
					style: {
						"--posttitletextcolor": Object(be.a)({
							theme: l
						}).titleText
					}
				}, i.a.createElement(se.b, {
					type: a
				}, m))), n.flair && i.a.createElement(k.a, {
					className: Oe.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function Ce(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					r = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					o = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					a = i.a.createElement(re.a, {
						alt: e.post.title,
						className: Object(y.a)(Oe.a.thumbnail, n && Oe.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: r && !e.post.isSponsored || !1
					});
				return i.a.createElement("div", {
					className: Oe.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(E.a)(o) && !e.post.media ? i.a.createElement(ce.b, {
					href: r || o,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: fe.SourceElement.PostImage
				}, a) : a)
			}
			var ye = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Ee = s("./src/reddit/constants/elementIds.ts"),
				Se = s("./src/reddit/helpers/trackers/screenview.ts"),
				ke = s("./src/reddit/selectors/platform.ts"),
				_e = s("./src/reddit/selectors/tracking.ts"),
				we = s("./src/telemetry/index.ts"),
				Ne = s("./src/telemetry/models/Timer.ts"),
				Ie = s("./node_modules/react-router-redux/es/index.js"),
				Te = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Pe = s("./src/reddit/components/PostList/index.tsx"),
				Re = s("./src/reddit/components/PostTitle/index.tsx"),
				Fe = s("./src/reddit/components/SearchPost/index.tsx"),
				Me = s("./src/reddit/connectors/PostList/index.ts"),
				Le = s("./src/reddit/contexts/Visibility.tsx"),
				Ae = s("./src/reddit/controls/Button/index.tsx"),
				Be = s("./src/reddit/controls/Button/index.m.less"),
				De = s.n(Be),
				Ue = s("./src/reddit/hooks/useTracking.ts"),
				We = s("./src/reddit/selectors/comments.ts"),
				Ve = s("./src/reddit/selectors/commentSelector.ts"),
				Ge = s("./src/reddit/selectors/posts.ts");

			function He(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(N.b, {
					className: t
				}, i.a.createElement(N.d, {
					score: s.score
				}), i.a.createElement(N.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var Ke = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				qe = s.n(Ke);
			var ze;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(ze || (ze = {}));
			var Qe = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Ye = s("./src/lib/truncateText/index.ts"),
				Je = s("./src/reddit/actions/post.ts"),
				Xe = s("./src/lib/prettyPrintNumber/index.ts"),
				Ze = s("./src/reddit/components/SubscribeButton/index.tsx"),
				$e = s("./src/reddit/helpers/karma.ts");
			var et = s("./src/reddit/constants/tracking.ts"),
				tt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				st = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				nt = s("./src/reddit/selectors/telemetry.ts");
			var rt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ot = s("./src/reddit/constants/posts.ts"),
				it = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				at = s("./src/reddit/selectors/subreddit.ts"),
				ct = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				dt = s.n(ct);
			const lt = Object(c.c)({
					isBlockingInterstitialEnabled: it.b,
					isBlockingInterstitialV2Enabled: it.c,
					hideNSFWPref: G.G,
					subredditOrProfile: at.Q,
					subredditOrProfileAboutInfo: at.M,
					userIsSubscriber: at.kb
				}),
				mt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ae.gb)(), m = Object(Ue.a)(), u = Object(B.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: f,
						subredditOrProfileAboutInfo: x
					} = Object(a.e)(t => lt(t, e)), {
						withCommunityDescription: O
					} = Object(a.e)(V.a), g = d && O, j = Object(a.d)(), v = Object(o.useCallback)(e => {
						f && n.type === ot.a.PROFILE && (p || b) && (e.preventDefault(), j(Object(Je.cb)(f.url))), m(Object(ue.r)(c, l, n, r))
					}, [m, c, l, r, n, p, b, j, f]);
					if (!f) return null;
					const C = f.displayText,
						E = x.publicDescription,
						S = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object($e.a)(e),
									n = Object(Xe.b)(s);
								return I.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [I.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? I.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [I.fbt._plural(s.subscribers, "number of subscribers", Object(Xe.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, x),
						k = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: a
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(Ze.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(Ze.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: r,
								priority: a,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: f,
							subredditOrProfileAboutInfo: x,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = nt.H(n, void 0);
									return {
										source: ue.c.SEARCH,
										action: et.c.CLICK,
										noun: `${s}_${ue.d[e.type]}`,
										actionInfo: Object(ue.l)(n, void 0, r, void 0),
										correlationId: Object(tt.c)(tt.a.SearchResults),
										profile: "profile" === e.type ? nt.X(n, e.id) : void 0,
										search: nt.db(n, t, st.a.SERP),
										subreddit: "subreddit" === e.type ? nt.ob(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: Ae.c.Tertiary
						});
					return i.a.createElement(M.default, {
						"data-testid": `${n.type}-link`,
						className: Object(y.a)(dt.a.link, d && dt.a.sidebar, s ? dt.a.mFirst : void 0, t),
						onClick: v,
						to: {
							pathname: f.url,
							state: u
						}
					}, i.a.createElement("div", {
						className: dt.a.container
					}, i.a.createElement(rt.b, {
						className: Object(y.a)(dt.a.subredditIcon, g && dt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: f
					}), i.a.createElement("div", {
						className: dt.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(y.a)(dt.a.subredditInfo, d && dt.a.sidebar)
					}, i.a.createElement("h6", {
						className: Object(y.a)(dt.a.title, d && dt.a.sidebar)
					}, C), i.a.createElement(te.a, {
						className: Object(y.a)(dt.a.warnings, d && dt.a.sidebar),
						isQuarantined: null == f ? void 0 : f.isQuarantined,
						isNSFW: null == f ? void 0 : f.isNSFW
					}), S && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: dt.a.subtitle
					}, !d && i.a.createElement(L.b, null), S))), !d && i.a.createElement("p", {
						className: dt.a.description
					}, Object(Ye.a)(E, 150, "..."))), i.a.createElement("div", {
						className: dt.a.buttonContainer
					}, k)), g && n.type !== ot.a.PROFILE && i.a.createElement("p", {
						className: Object(y.a)(dt.a.description, d && dt.a.sidebar)
					}, Object(Ye.a)(E, 75, "...")))
				};
			var ut = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				pt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				bt = s("./src/lib/objectSelector/index.ts"),
				ht = s("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				ft = s("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				xt = s("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				Ot = s("./src/reddit/components/RichTextJson/index.tsx"),
				gt = s("./src/reddit/components/UserIcon/index.tsx"),
				jt = s("./src/reddit/components/UserIcon/constants.ts"),
				vt = s("./src/reddit/constants/componentTestIds.ts"),
				Ct = s("./src/reddit/controls/MetaData/index.tsx"),
				yt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Et = s("./src/reddit/models/User/index.ts"),
				St = s("./src/reddit/components/SearchResultsContent/PdpComment/index.m.less"),
				kt = s.n(St);
			var _t = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				wt = s.n(_t);
			const Nt = 5,
				It = Object(c.c)({
					apiError: he.b,
					apiPending: he.c,
					loadMore: he.t,
					viewportDataLoaded: _e.a
				}),
				Tt = Object(c.c)({
					apiError: he.e,
					apiPending: he.f,
					loadMore: he.u,
					viewportDataLoaded: _e.a
				}),
				Pt = Object(c.c)({
					apiError: he.h,
					apiPending: he.i,
					loadMore: he.v,
					viewportDataLoaded: _e.a
				}),
				Rt = Object(c.c)({
					apiError: he.y,
					apiPending: he.z,
					loadMore: he.w,
					viewportDataLoaded: _e.a
				});
			var Ft;
			! function(e) {
				e.Posts = "posts", e.Subreddits = "communities", e.Users = "authors", e.Comments = "comments", e.PdpComments = "pdp_comments"
			}(Ft || (Ft = {}));
			const Mt = {
				[Ft.Comments]: {
					cacheName: "comment",
					Component: e => {
						let {
							identifier: t,
							listingKey: s,
							searchOptions: n
						} = e;
						const r = Object(ae.gb)(),
							o = Object(Ue.a)(),
							c = Object(a.d)(),
							d = Object(a.e)(e => Object(Ve.b)(e, {
								commentId: t
							})),
							l = Object(a.e)(e => Object(We.m)(e, {
								commentId: t
							})),
							m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(Ge.G)(e, {
								postId: null == d ? void 0 : d.postId
							}) : void 0),
							u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(Ge.F)(e, {
								postId: null == d ? void 0 : d.postId
							})),
							p = Object(a.e)(e => e.search.searchQuery),
							b = Object(B.a)();
						if (!(null == d ? void 0 : d.postId) || !u) return null;
						const h = Object(Me.b)(c),
							f = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.a;
								return function() {
									o(Object(ue.q)({
										comment: d,
										key: s,
										originElement: e,
										pageLayer: r,
										searchOptions: n
									})), t(...arguments)
								}
							},
							O = Object(Pe.b)(d.postId, h),
							g = e => f(e);
						return i.a.createElement(Fe.a, {
							crosspost: void 0,
							isActive: !1,
							isLoggedIn: !1,
							modModeEnabled: !1,
							moderatorPermissions: void 0,
							onClickPost: f(ze.POST, null != O ? O : x.a),
							onClickPostAuthor: g(ze.POST_AUTHOR),
							onClickPostCommunity: g(ze.POST_COMMUNITY),
							onIgnoreReports: x.a,
							postId: d.postId,
							searchQuery: p,
							showEditFlair: !1,
							title: i.a.createElement(Le.a, null, i.a.createElement("div", {
								className: qe.a.commentContainer,
								"data-testid": "search_comment_container"
							}, i.a.createElement("div", {
								className: qe.a.postTitleContainer,
								"data-testid": "search_comment_post_title_container",
								onClick: g(ze.POST)
							}, m && i.a.createElement(Re.c, {
								className: qe.a.postTitle,
								hideSourceLink: !0,
								post: m,
								redditStyle: !0,
								disableFlair: !0,
								size: Re.b.Metadata
							})), i.a.createElement("div", {
								className: qe.a.commentContent,
								"data-testid": "search_comment",
								onClick: f(ze.COMMENT, e => {
									e.stopPropagation(), c(Object(Ie.b)(Object(S.a)(l, !0, b)))
								})
							}, i.a.createElement(Te.a, {
								clearHovered: x.a,
								commentId: t,
								commentsPageKey: "",
								flatlist: i.a.createElement(He, {
									className: qe.a.commentFlatlist,
									comment: d
								}),
								hasAwardGradient: !1,
								highlightTreatment: null,
								index: 0,
								isHighlighted: !1,
								isFirstInList: !0,
								isActive: !1,
								noFocus: !0,
								noSpacing: !0,
								onLineMouseOver: x.a,
								onCommentAuthorClick: e => (e.stopPropagation(), g(ze.COMMENT_AUTHOR)(e)),
								onCommentTimestampClick: e => (e.stopPropagation(), g(ze.COMMENT_TIMESTAMP)(e)),
								postId: d.postId,
								renderedInOverlay: !1,
								restrictHeight: !0,
								rtJSONRedditStyle: !0,
								scrollToAndRemeasure: x.a,
								showBlockingInterstitial: x.a,
								userIconSmall: !0,
								onClickRevealSpoilerText: () => {
									o(Object(ue.t)(n, d, s, r))
								}
							})), i.a.createElement(Ae.t, {
								kind: Ae.b.InternalLink,
								priority: Ae.c.PlainLink,
								className: Object(y.a)(qe.a.goToThreadLinkButton, De.a.PlainLinkButton),
								"data-testid": "go_to_thread_link",
								onClick: f(ze.GO_TO_COMMENT_LINK, e => {
									e.stopPropagation()
								}),
								to: Object(S.a)(u, !0, b)
							}, I.fbt._("Go to thread", null, {
								hk: "npBX6"
							}))))
						})
					},
					moreResultsTypes: [d.ic.Comments],
					Placeholder: Qe.a,
					selector: Tt,
					telemetryComponentName: "commentSearchResults",
					telemetryViewEvent: pt.c
				},
				[Ft.Subreddits]: {
					cacheName: "community",
					Component: mt,
					moreResultsTypes: [d.ic.Subreddits],
					Placeholder: ut.a,
					selector: Pt,
					telemetryComponentName: "communitySearchResults",
					telemetryViewEvent: pt.d
				},
				[Ft.Users]: {
					cacheName: "author",
					Component: mt,
					moreResultsTypes: [d.ic.Users],
					Placeholder: ut.a,
					selector: It,
					telemetryComponentName: "authorSearchResults",
					telemetryViewEvent: pt.d
				},
				[Ft.Posts]: {
					cacheName: "post",
					Component: e => {
						var t, s;
						const {
							first: n,
							listingKey: r,
							searchOptions: o
						} = e, c = Object(a.e)(t => Object(he.A)(t, e)), d = Object(a.e)(e => {
							if (c.crosspostRootId) return Object(he.A)(e, {
								identifier: c.crosspostRootId
							})
						}), l = Object(a.e)(e => Object(G.kb)(e)), m = Object(pe.a)(), u = Object(a.d)(), p = Object(oe.b)(), b = function(e) {
							var t;
							const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
								n = v.a.parse(s),
								r = n.path || "",
								o = r.length > 7 ? r.substring(0, 7) + "..." : r;
							return (n.hostname ? n.hostname.replace("www.", "") : "") + o
						}(c), h = Object(ae.cb)(m), f = d ? d.thumbnail.url : c.thumbnail.url, O = f && Object(E.a)(f), g = Object(U.a)(), j = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.a;
							return function() {
								p(Object(ue.s)(c.id, o, m, e || null, r)), t(...arguments)
							}
						}, S = e => j(e), k = {
							isOptimizedSerp: !0,
							post: c,
							subredditOrProfile: c.subreddit || c.profile,
							onClickPostAuthor: e => (e.stopPropagation(), S(ue.e.POST_AUTHOR)(e)),
							onClickPostCommunity: e => (e.stopPropagation(), S(ue.e.POST_COMMUNITY)(e))
						};
						return i.a.createElement("div", {
							className: Object(y.a)(Oe.a.postContainer, n && Oe.a.mFirst),
							"data-adclicklocation": C.a.BACKGROUND,
							"data-click-id": C.a.BACKGROUND,
							"data-testid": w.a,
							id: c.id,
							onClick: j(ue.e.POST, e => {
								e.stopPropagation(), l ? window.open(c.permalink) : u(Object(le.a)({
									pathname: Object(me.b)(c.permalink),
									state: Object(de.c)(m)
								}))
							}),
							tabIndex: -1
						}, i.a.createElement(_.a, {
							"data-click-id": C.a.BACKGROUND,
							redditStyle: !0
						}, i.a.createElement("div", {
							className: Oe.a.postContent,
							"data-click-id": C.a.BODY
						}, i.a.createElement(ee, ge({
							className: Object(y.a)(Oe.a.paddingSide, Oe.a.postItemMetaContainer),
							key: "PostMeta"
						}, k)), i.a.createElement(te.a, {
							className: Object(y.a)(Oe.a.paddingSide, Oe.a.postItemWarningContainer),
							isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
							isNSFW: c.isNSFW,
							isSpoiler: c.isSpoiler
						}), i.a.createElement("div", {
							className: Object(y.a)(Oe.a.paddingSide, Oe.a.postItemTitleContainer)
						}, i.a.createElement("div", {
							className: Oe.a.postContent
						}, i.a.createElement(ve, {
							searchQuery: h,
							post: c
						}), c.source && !c.crosspostRootId && i.a.createElement(ce.b, {
							className: Oe.a.outboundLink,
							href: c.source.url,
							isSponsored: c.isSponsored,
							postId: c.id,
							source: c.source
						}, b)), O && i.a.createElement("div", {
							className: Oe.a.thumbnailContainer
						}, i.a.createElement(Ce, {
							makeSendClickEventFn: e => (e.stopPropagation(), S(ue.e.POST)(e)),
							post: c,
							theme: g
						}))), i.a.createElement(N.c, {
							className: Object(y.a)(Oe.a.paddingSide, Oe.a.postItemFlatlistContainer),
							post: c
						}))))
					},
					moreResultsTypes: [d.ic.Posts],
					Placeholder: ye.a,
					selector: Rt,
					telemetryComponentName: "postList",
					telemetryViewEvent: pt.e
				},
				[Ft.PdpComments]: {
					cacheName: "pdp-comment",
					Component: e => {
						let {
							identifier: t,
							first: s,
							listingKey: n,
							searchOptions: r,
							pageKey: o
						} = e;
						const c = Object(ae.gb)(),
							d = Object(Ue.a)(),
							l = Object(a.d)(),
							m = Object(a.e)(e => Object(Ve.b)(e, {
								commentId: t
							})),
							u = Object(a.e)(e => Object(We.m)(e, {
								commentId: t
							})),
							p = Object(a.e)(e => Object(G.l)(e)),
							b = Object(a.e)(e => Object(ke.j)(e)),
							h = Object(a.e)(e => (null == m ? void 0 : m.postId) && Object(Ge.F)(e, {
								postId: null == m ? void 0 : m.postId
							})),
							f = Object(B.a)();
						if (!(null == m ? void 0 : m.postId) || !h) return null;
						const O = !!p && Object(Et.e)(p) === m.author ? null == p ? void 0 : p.accountIcon : m.profileImage,
							g = Object(yt.a)(m),
							j = Object(bt.b)(e => {
								let {
									comment: t,
									pageLayer: s
								} = e;
								return {
									renderingObjectInfo: t,
									pageLayer: s
								}
							}),
							v = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x.a;
								return function() {
									d(Object(ue.q)({
										comment: m,
										key: n,
										originElement: e,
										pageLayer: c,
										searchOptions: r
									})), t(...arguments)
								}
							},
							C = e => v(e);
						return i.a.createElement(Le.a, null, i.a.createElement("div", {
							className: Object(y.a)(kt.a.commentContainer, kt.a.marginContainer, kt.a.metadataFont, s && kt.a.first),
							"data-testid": "search_pdp_comment_container"
						}, i.a.createElement("div", {
							"data-testid": "search_pdp_comment",
							onClick: v(ze.COMMENT, e => {
								e.stopPropagation(), l(Object(Ie.b)(Object(S.a)(u, !0, f)))
							})
						}, i.a.createElement("div", {
							className: kt.a.flex
						}, i.a.createElement(gt.a, {
							className: Object(y.a)(kt.a.pdpUserIcon, kt.a.iconSpacer),
							wrapperClassName: Object(y.a)(kt.a.pdpUserIcon, kt.a.iconSpacer),
							iconUrl: O,
							isNSFW: m.profileOver18 || !1,
							nsfwIconUrl: jt.a,
							userName: m.author,
							authorId: m.authorId
						}), i.a.createElement(ht.a, {
							authorClassName: kt.a.actionFont,
							collapsed: !1,
							comment: m,
							onClick: e => (e.stopPropagation(), C(ze.COMMENT_AUTHOR)(e)),
							renderedInOverlay: b
						}), i.a.createElement(Ct.c, {
							className: Object(y.a)(kt.a.separator, kt.a.metadataColor)
						}), i.a.createElement(ft.a, {
							className: kt.a.metadataColor,
							key: "Created",
							comment: m,
							compact: !0,
							onClick: e => (e.stopPropagation(), C(ze.COMMENT_TIMESTAMP)(e)),
							permalink: u,
							renderedInOverlay: b
						}), m.editedAt && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ct.c, {
							className: Object(y.a)(kt.a.separator, kt.a.metadataColor)
						}), i.a.createElement(xt.a, {
							className: kt.a.metadataColor,
							compact: !0,
							editedAt: m.editedAt
						}))), i.a.createElement("div", {
							className: Object(y.a)(kt.a.commentContent, kt.a.marginTop),
							"data-testid": vt.d
						}, i.a.createElement(Ot.b, {
							className: kt.a.background,
							content: g,
							mediaMetadata: m.media && m.media.mediaMetadata,
							rtJsonElementProps: j({
								comment: m,
								pageLayer: c
							}),
							mediaProps: {
								alignLeft: !0,
								renderSmallMedia: !0
							}
						}), i.a.createElement(He, {
							className: Object(y.a)(kt.a.metadataFont, kt.a.marginTop),
							comment: m
						})), i.a.createElement(F.b, {
							commentId: m.id
						}), i.a.createElement(F.a, {
							commentId: m.id,
							commentsPageKey: o
						}))))
					},
					moreResultsTypes: [d.ic.Comments],
					Placeholder: p.a,
					selector: Tt,
					telemetryComponentName: "pdpCommentSearchResults",
					telemetryViewEvent: pt.c
				}
			};
			const Lt = e => {
				const t = Object(o.useRef)(!1);
				let s = !1,
					n = !1;
				const c = new m.a(250),
					p = Object(o.useRef)(),
					h = Object(o.useRef)(null),
					f = Object(o.useRef)(!1),
					x = Object(ae.gb)(),
					O = Object(oe.b)(),
					g = Object(a.d)(),
					{
						identifiers: j,
						listingKey: v,
						searchOptions: C,
						componentType: y,
						sidebar: E,
						originElement: S,
						pageKey: k
					} = e,
					{
						cacheName: _,
						Component: w,
						moreResultsTypes: N,
						Placeholder: I,
						selector: T,
						telemetryComponentName: P,
						telemetryViewEvent: R
					} = Mt[y],
					{
						apiError: F,
						apiPending: M,
						loadMore: L,
						viewportDataLoaded: A
					} = Object(a.e)(t => T(t, e)),
					B = Object(a.e)(e => Object(ke.j)(e)),
					D = E ? Nt : j.length,
					U = E ? Nt : 10,
					W = Object(l.a)(B),
					V = () => {
						const e = we.c.has(v) ? we.c.end(v) : 0;
						O(Object(Se.v)(v, C, Ne.TimerType.InApp, e, x)), f.current = !0
					},
					G = () => {
						Q() && V()
					},
					H = () => {
						const e = p.current && Array.from(p.current.children),
							t = e && e.pop();
						return t && t.getBoundingClientRect().bottom > window.innerHeight
					};
				Object(o.useEffect)(() => {
					G(), h.current && Object(we.b)(d.o.Redesign, {
						type: "mount",
						component: P,
						duration: we.c.end(h.current)
					})
				}, []), Object(o.useEffect)(() => {
					if (G(), h.current && we.c.has(h.current)) {
						const e = we.c.end(h.current);
						if (e < 10) return;
						Object(we.b)(d.o.Redesign, {
							duration: e,
							type: "mount",
							component: P
						})
					}
				});
				const K = Object(l.a)(v),
					q = Object(l.a)(j.length);
				Object(o.useEffect)(() => {
					h.current && we.c.cancel(h.current), j.length && (h.current = we.c.start()), (v !== K || !H() && j.length !== q) && (t.current = !1)
				}, [h, v, j.length, K, q, t]), Object(o.useEffect)(() => () => {
					h.current && we.c.cancel(h.current), p.current = void 0, t.current = !1
				}), Object(o.useEffect)(() => {
					W && !B && (!we.c.has(v) && f.current || V())
				}, [B, W]);
				const z = () => {
						t.current = !0, G()
					},
					Q = () => {
						const e = H();
						return (we.c.has(v) || !f.current) && (F || !n && (s || t && (e || A)))
					},
					Y = e => {
						p.current = e instanceof Element ? e : void 0
					},
					J = () => {
						const e = j.slice(0, D).map((e, t) => ((e, t) => {
							let s;
							s = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const n = `${_}-search-${t}-${v}`,
								r = Object(pt.b)(s, v, () => R(O, C, e, v, x, S));
							let o;
							if (void 0 === (o = c.get(n))) {
								const n = `${_}-search-item-[id:${s}]`;
								o = {
									estHeight: 32,
									trackOnEnteredViewport: r,
									id: s,
									render: () => i.a.createElement(w, {
										className: wt.a.separatedCommunity,
										first: 0 === t,
										identifier: e,
										key: n,
										listingKey: v,
										searchOptions: C,
										sidebar: E,
										pageKey: k
									})
								}
							}
							return c.set(n, o), o
						})(e, t));
						return i.a.createElement(b.b, {
							getContainer: () => B ? document.getElementById(Ee.e) : null,
							key: v,
							innerRef: Y,
							loadMoreToken: L && L.token ? L.token : void 0,
							onLastVisibleChildRendered: z,
							onLoadMore: () => {
								g(Object(u.n)(N))
							}
						}, e)
					};
				return (() => j.length > 0)() ? (s = !1, n = !1, J()) : (() => Boolean(F) || !1 === M)() ? (s = !0, n = !1, J()) : (s = !1, n = !0, (() => {
					const e = !F;
					return i.a.createElement("div", {
						"data-testid": `${y}-list-placeholder`
					}, r()(U, t => i.a.createElement(I, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})())
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				i = s("./src/reddit/selectors/commentSelector.ts");
			const a = new n.a(250),
				c = (new n.a(250), (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = a.get(n);
					return void 0 === r && (r = s, a.set(n, r)), r
				}),
				d = (e, t, s, n, i) => e(e => Object(o.k)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: i,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				l = (e, t, s, n, a, c) => e(e => {
					const d = Object(i.b)(e, {
						commentId: s
					});
					return Object(o.j)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: a,
						comment: d,
						key: n,
						originElement: c
					})
				}),
				m = (e, t, s, n, i) => e(e => ({
					...Object(o.m)({
						state: e,
						searchOptions: t,
						pageLayer: i,
						postId: s,
						key: n,
						useSearchPost: !0
					}),
					action: r.c.VIEW
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return it
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				c = s.n(a),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/search/index.ts"),
				u = s("./src/reddit/actions/search.ts"),
				p = s("./src/config.ts"),
				b = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				f = s("./src/lib/opener/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/components/BlankPost/index.tsx"),
				g = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				j = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				v = s("./src/reddit/components/Media/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				y = s("./src/reddit/components/Thumbnail/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				N = s("./src/reddit/helpers/clickSourceData/index.ts"),
				I = s("./src/reddit/helpers/overlay/index.ts"),
				T = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				R = s("./src/reddit/helpers/trackers/searchResults.ts"),
				F = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				L = s("./src/reddit/selectors/posts.ts"),
				A = s("./src/reddit/selectors/searchResults.ts"),
				B = s("./src/reddit/selectors/showPromotedCTA.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				U = s("./node_modules/reselect/es/index.js"),
				W = s("./src/lib/getShortenedLink.ts"),
				V = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = s("./src/reddit/components/PostTitle/index.tsx"),
				H = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				K = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				q = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				z = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				Q = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				J = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				$ = s.n(Z);
			const {
				fbt: ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), te = `${p.a.assetPath}/img/link-placeholder.png`, se = Object(U.c)({
				autoplayPref: D.c,
				showPromotedCTA: B.a,
				flairStyleTemplate: k.Y,
				showCTAExperiment: M.a
			});

			function ne(e) {
				var t;
				const {
					postId: s,
					listingKey: a,
					searchOptions: c,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), m = Object(r.useRef)(), {
					autoplayPref: u,
					flairStyleTemplate: M,
					showPromotedCTA: B,
					showCTAExperiment: D
				} = Object(i.e)(t => se(t, e)), U = Object(i.e)(e => Object(A.A)(e, {
					identifier: s
				})), Z = Object(i.e)(e => Object(L.d)(e, {
					postId: s
				})), ne = Object(i.e)(X.b), re = Object(i.e)(X.c), oe = Object(k.gb)(), ie = Object(E.b)(), ae = Object(i.d)(), ce = Object(J.a)(), {
					post: de,
					subredditOrProfile: le
				} = Object(_.d)(s), me = Object(r.useCallback)((e, t) => {
					ae(Object(x.P)(e, t))
				}, [ae]), ue = !!de.source && !Z;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						m.current && (t ? m.current.focusContent() : m.current.pauseContent())
					}), Object(R.x)(a, de.id, c, oe, d), () => {
						l.current && Object(b.b)(l.current), m.current && m.current.stopContent(), l.current = null, m.current = null
					}), []), !de) return null;
				const {
					media: pe
				} = Z || de || {}, be = (null == pe ? void 0 : pe.type) === F.o.EMBED && (null == pe ? void 0 : pe.provider) === F.v.Twitter, he = (null == pe ? void 0 : pe.type) === F.o.VIDEO || (null == pe ? void 0 : pe.type) === F.o.GIFVIDEO;

				function fe(e) {
					e.stopPropagation(), e.preventDefault(), de.isSponsored ? (ae(Object(x.y)(de, S.a.Click)), de.source ? de.source.outboundUrl ? Object(f.e)(de.source.outboundUrl, f.d.BLANK) : Object(f.e)(de.source.url, f.d.BLANK) : Object(f.e)(de.permalink, f.d.BLANK)) : ae(ne || re ? Object(x.ab)(Object(T.b)(de.permalink), de.id) : Object(I.a)({
						pathname: Object(T.b)(de.permalink),
						state: Object(N.c)(oe)
					}))
				}

				function xe(e) {
					de.isSponsored && he || fe(e), de.isSponsored && function(e) {
						he || (e.stopPropagation(), e.preventDefault()), ie(Object(R.y)(de.id, c, d, a, oe))
					}(e)
				}
				return de.isBlank ? o.a.createElement(O.BlankPost, {
					onPostViewable: me,
					post: de,
					postId: de.id
				}) : o.a.createElement(_.a, {
					postId: s
				}, o.a.createElement(C.b, {
					className: $.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let n = null,
							r = P.r;
						return de.isSponsored || (r = P.t, n = null !== (s = R.E[t]) && void 0 !== s ? s : R.e.POST), r(c, oe, n, a, d)(e)
					},
					onClick: fe,
					post: de,
					"data-click-id": "hero_unit",
					style: {
						...Object(Y.d)({
							theme: ce,
							flairStyleTemplate: M,
							redditStyle: !1
						}),
						...Object(Y.b)(M)
					}
				}, o.a.createElement(V.a, {
					"data-click-id": "background"
				}, o.a.createElement(g.a, {
					className: $.a.eventMeta,
					post: de
				}), o.a.createElement("div", {
					className: Object(n.a)($.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(K.c, {
					className: $.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: de,
					subredditOrProfile: le
				}), o.a.createElement("div", {
					className: $.a.postItemTitleContainer
				}, o.a.createElement(G.c, {
					hideSourceLink: !0,
					post: de,
					size: G.b.Medium,
					isOverlay: !1
				}), !B && ue && o.a.createElement(q.a, {
					className: $.a.outboundLink,
					href: (null === (t = null == de ? void 0 : de.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, Object(W.a)(de))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!de.source && Object(h.a)(de.source.url) || !!de.thumbnail && Object(h.a)(de.thumbnail.url),
						s = !(null == pe ? void 0 : pe.type) && t,
						r = Object(n.a)($.a.mediaWrapper, {
							[$.a.marginCancel]: B && !!de.source,
							[$.a.promotedTrend]: de.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(y.b, {
						className: $.a.thumbnail,
						post: de,
						templatePlaceholderImage: te,
						usePreview: !0
					}));
					else if (pe)
						if (pe.type !== F.o.RTJSON && pe.type !== F.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, be && $.a.twitterEmbed),
							onClickCapture: xe,
							ref: e => l.current = e
						}, o.a.createElement(v.a, {
							className: $.a.mediaContent,
							autoplayPref: u,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: de.isSponsored,
							post: Z || de,
							primaryContent: !0,
							scrollerItemRef: e => m.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: $.a.mediaPlaceholder
							}), (pe.type === F.o.RTJSON && pe.richtextContent || pe.type === F.o.TEXT && pe.content) && Object(w.a)(de, null == ce ? void 0 : ce.subredditContext) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: fe,
								ref: e => l.current = e
							}, o.a.createElement(v.a, {
								autoplayPref: u,
								className: $.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: Z || de,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: $.a.seeMore
							}, ee._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), B && de.source && o.a.createElement(z.a, {
					className: $.a.adLinkWrapper,
					ctaExperimentDesign: D && "card"
				}, o.a.createElement(q.a, {
					className: Object(n.a)($.a.outboundLink, {
						[$.a.ctaExperiment]: D
					}),
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source
				}, de.source.displayText), de.callToAction && o.a.createElement(Q.a, {
					className: $.a.adCallToAction,
					href: de.source.url.replace(p.a.redditUrl, ""),
					isSponsored: de.isSponsored,
					postId: de.id,
					source: de.source,
					showCTAExperiment: D
				}, de.callToAction)), !de.isSponsored && o.a.createElement(H.c, {
					className: Object(n.a)($.a.postItemFlatlistContainer),
					post: U || de
				}), o.a.createElement(j.d, null)))))
			}
			var re = s("./src/lib/LRUCache/index.ts"),
				oe = s("./src/reddit/components/Scroller/Simple.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ae = s("./src/reddit/hooks/usePageLayer.ts"),
				ce = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const de = 376,
				le = new re.a(1);

			function me(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: a
				} = e;
				const c = Object(i.d)(),
					d = Object(ae.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = ie.a.get(e);
					if (void 0 === o) {
						const i = t.layout.viewTypeWeb === ce.b.PromotedTrendHero;
						o = () => {
							c((e, o) => Object(P.u)(o(), t, r, n, d, s, i))
						}, ie.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(oe.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = le.get(e)) && (n = {
						estHeight: de,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => a
					}), le.set(e, n), [n]
				})())
			}
			var ue = s("./src/reddit/constants/page.ts"),
				pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				be = s("./src/reddit/hooks/useTracking.ts"),
				he = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				fe = s("./src/reddit/selectors/listings.ts"),
				xe = s("./src/reddit/selectors/platform.ts");
			const Oe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var ge = s("./src/reddit/selectors/searchFix.ts"),
				je = s("./src/telemetry/index.ts"),
				ve = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: Ce,
				PromotedTrendHero: ye
			} = ce.b;

			function Ee(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === Ce || e.layout.viewTypeWeb === ye);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var Se = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx"),
				ke = s("./src/reddit/components/PostList/index.tsx"),
				_e = s("./src/reddit/components/SearchPost/index.tsx"),
				we = s("./src/reddit/constants/postLayout.ts"),
				Ne = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Ie = s("./src/reddit/helpers/trackers/post.ts"),
				Te = s("./src/reddit/selectors/tracking.ts"),
				Pe = s("./src/reddit/connectors/PostList/index.ts");
			const Re = Object(Pe.c)(),
				Fe = Object(U.c)({
					...Pe.d,
					layout: () => we.g.Search,
					viewportDataLoaded: Te.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: i
						} = t;
						const a = i && i.postOrder,
							c = Ee(Oe(e));
						if (a && a.length > 0) {
							if (s) {
								const t = a.indexOf(s);
								if (t > -1) return a.splice(t, 1), Object(L.X)(e, a)
							}
							return Object(L.X)(e, a)
						}
						const {
							models: d
						} = e.posts;
						return Object(L.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && c !== e)
					}
				}),
				Me = (e, t, s, n) => {
					if (s) return Object(Ie.k)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: i,
						searchDiscoveryUnit: a,
						sendEvent: c
					} = n;
					return c(Object(R.s)(e, o, i, R.E[t], r, a)), Object(Ie.k)(e, t)
				},
				Le = Object(i.b)(Fe, (e, t) => ({
					...Object(Pe.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(R.x)(t.listingKey, e, t.searchOptions, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: Me,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Ne.a : _e.a
					}
				}));
			const Ae = (e => Object(E.c)(Re(Le(e))))(ke.a),
				Be = () => null,
				De = Object(U.c)({
					viewTreatment: A.D,
					searchDiscoveryUnitsModels: Oe,
					hasPostResults: A.o,
					apiPending: fe.d,
					postIds: L.z,
					posts: L.y,
					loadMore: fe.g,
					isOverlayOpen: xe.j
				});

			function Ue(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: a
				} = e, p = Object(ae.a)(), b = Object(be.a)(), h = Object(i.d)(), {
					viewTreatment: f,
					searchDiscoveryUnitsModels: x,
					hasPostResults: O,
					postIds: g,
					isOverlayOpen: j,
					apiPending: v
				} = Object(i.e)(t => De(t, e)), C = Object(l.a)(j), y = Object(r.useRef)(!1), E = void 0 === v || v, S = (e, s) => b(Object(pe.v)(t, a, s, e, p, Object(ge.b)({
					pageLayer: p
				})));
				let k;
				Object(r.useEffect)(() => {
					O && !c()(g) && I()
				}, [O, g]), Object(r.useEffect)(() => {
					C && !j && I()
				}, [j, C]), f === ce.c.Trending && (k = Ee(x));
				const _ = Object(m.a)(a.q || ""),
					w = Object(r.useMemo)(() => Object.values(x).find(e => e.name === he.l || e.name === he.f), [x]),
					N = k && w;

				function I() {
					if (je.c.has(t) || !y.current) {
						y.current = !0;
						const e = je.c.has(t) ? je.c.end(t) : 0;
						S(e, ve.TimerType.InApp)
					}
				}
				return O || N || E ? o.a.createElement(o.a.Fragment, null, N && o.a.createElement(me, {
					key: k,
					postId: k,
					discoveryUnit: w,
					searchOptions: a,
					listingKey: t
				}, o.a.createElement(ne, {
					key: k,
					discoveryUnit: w,
					postId: k,
					listingKey: t,
					searchOptions: a
				})), (O || E) && o.a.createElement(Ae, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: Be,
					onLoadMore: function() {
						h(Object(u.n)([d.ic.Posts]))
					},
					searchOptions: a
				})) : o.a.createElement(Se.a, {
					query: _,
					type: Se.b.Posts,
					searchOptions: a,
					tab: ue.h.Posts
				})
			}
			var We = s("./src/reddit/selectors/experiments/optimizedSerpPosts.ts"),
				Ve = s("./node_modules/lodash/constant.js"),
				Ge = s.n(Ve),
				He = s("./node_modules/lodash/times.js"),
				Ke = s.n(He),
				qe = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				ze = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Qe = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				Ye = s.n(Qe);
			const Je = e => {
				const {
					listingKey: t,
					searchOptions: s,
					originElement: n
				} = e, r = Object(i.e)(e => Object(A.d)(e, {
					listingKey: t
				})), a = Object(i.e)(e => Object(A.u)(e, {
					listingKey: t
				})), c = Boolean(a && a.token) && r.length > 0;
				return o.a.createElement("div", {
					className: Ye.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement(qe.b, {
					identifiers: r,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Comments,
					originElement: n
				}), c && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(ze.a, {
					className: Ye.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var Xe = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const Ze = (e, t) => Boolean(t && t.token) && e.length > 0,
				$e = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(i.e)(e => Object(A.g)(e, {
						listingKey: t
					})), r = Object(i.e)(e => Object(A.v)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: Ye.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement(qe.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: qe.c.Subreddits
					}), Ze(n, r) && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(Xe.a, {
						className: Ye.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var et = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				tt = s.n(et);
			const st = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(i.e)(e => Object(A.a)(e, {
					listingKey: t
				})), r = Object(i.e)(e => Object(A.t)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Ye.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement(qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Users
				}), Ze(n, r) && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(Xe.a, {
					className: Ye.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var nt = s("./src/reddit/components/SearchPost/Placeholder.tsx");
			const rt = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(i.e)(e => Object(A.x)(e, {
					listingKey: t
				}));
				const a = Object(i.e)(e => Object(A.w)(e, {
						listingKey: t
					})),
					c = Object(i.e)(e => Object(A.D)(e)),
					d = Object(i.e)(e => Oe(e));
				let l;
				c === ce.c.Trending && (l = Ee(d));
				const m = Object(r.useMemo)(() => Object.values(d).find(e => e.name === he.l || e.name === he.f), [d]);
				if (l && m) {
					const e = (n = [...n]).indexOf(l);
					n.splice(e, 1)
				}
				return o.a.createElement(o.a.Fragment, null, l && m && o.a.createElement(me, {
					key: l,
					postId: l,
					discoveryUnit: m,
					searchOptions: s,
					listingKey: t
				}, o.a.createElement(ne, {
					key: l,
					discoveryUnit: m,
					postId: l,
					listingKey: t,
					searchOptions: s
				})), o.a.createElement("div", {
					className: Ye.a.container,
					"data-testid": "posts-list"
				}, o.a.createElement(qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: qe.c.Posts
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, a) && o.a.Children.toArray(Ke()(3, Ge()(o.a.createElement(nt.a, {
					className: Ye.a.loadMoreItem,
					isLoading: !0
				}))))))
			};
			var ot = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx");

			function it(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a,
					tab: c
				} = e, d = Object(i.e)(e => Object(A.n)(e, {
					listingKey: t
				})), l = Object(i.e)(e => Object(A.l)(e, {
					listingKey: t
				})), m = Object(i.e)(e => Object(A.m)(e, {
					listingKey: t
				})), u = Object(i.e)(e => Object(A.p)(e, {
					listingKey: t
				})), p = Object(i.e)(e => Object(We.a)(e));
				return o.a.createElement("div", {
					className: Object(n.a)(tt.a.resultsContainer)
				}, c === ue.h.Listings ? o.a.createElement(ot.a, {
					hasResults: d,
					searchOptions: a,
					noResultsType: Se.b.Communities,
					searchResultsTab: ue.h.Listings,
					listingKey: t,
					pendingSelector: A.i
				}, o.a.createElement($e, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Listings
				})) : c === ue.h.People ? o.a.createElement(ot.a, {
					hasResults: l,
					searchOptions: a,
					noResultsType: Se.b.People,
					searchResultsTab: ue.h.People,
					listingKey: t,
					pendingSelector: A.c
				}, o.a.createElement(st, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.People
				})) : c === ue.h.Comments ? o.a.createElement(ot.a, {
					hasResults: m,
					searchOptions: a,
					noResultsType: Se.b.Comments,
					searchResultsTab: ue.h.Comments,
					listingKey: t,
					pendingSelector: A.f
				}, o.a.createElement(Je, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : p ? o.a.createElement(ot.a, {
					hasResults: u,
					searchOptions: a,
					noResultsType: Se.b.Posts,
					searchResultsTab: ue.h.Posts,
					listingKey: t,
					pendingSelector: A.z
				}, o.a.createElement(rt, {
					listingKey: t,
					searchOptions: a,
					key: ue.h.Comments
				})) : o.a.createElement(Ue, {
					key: t,
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: a
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/search/index.ts"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				c = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");

			function d(e) {
				const {
					hasResults: t,
					searchOptions: s,
					noResultsType: n,
					searchResultsTab: d,
					pendingSelector: l
				} = e, m = Object(o.a)(s.q || ""), u = Object(i.e)(t => l(t, e)), p = void 0 === u || u;
				return r.a.createElement(r.a.Fragment, null, t || p ? e.children : r.a.createElement(c.a, {
					searchBarId: a.a,
					searchOptions: s,
					query: m,
					type: n,
					tab: d
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/searchFix.ts"),
				r = s("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const s = Object(n.a)(e, t);
				return s ? Object(r.C)(e, {
					subredditName: s
				}) : null
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return W
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/constants/colors.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts");
			const b = () => {
				const [e, t] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					var e;
					const s = null !== (e = Object(p.C)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(p.Kb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(p.Kb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var h = s("./src/reddit/constants/page.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				g = s("./src/reddit/helpers/trackers/searchResults.ts"),
				j = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				C = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				y = s("./src/reddit/selectors/searchResults.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				k = s("./node_modules/history/esm/history.js"),
				_ = s("./node_modules/react-router-redux/es/index.js"),
				w = s("./src/lib/addQueryParams/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/colors/constants.ts"),
				T = s("./src/reddit/constants/parameters.ts"),
				P = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				R = s("./src/reddit/hooks/usePageLayer.ts"),
				F = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				M = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				L = s.n(M);
			const A = "safe-search-toggle";

			function B(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(v.a)(),
					[r, o] = a.a.useState(!0);
				Object(i.useEffect)(() => {
					var e;
					o(null), p(!!(null === (e = null == f ? void 0 : f.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const d = Object(j.a)({}),
					{
						nsfwSessionSetting: m,
						setNsfwSessionSetting: p
					} = Object(F.b)(),
					{
						shouldShowTooltip: b,
						resetShowTooltip: h
					} = Object(F.c)(!m);
				Object(i.useEffect)(() => {
					if (b) return window.addEventListener("click", h), () => {
						window.removeEventListener("click", h)
					}
				}, [b]);
				const f = Object(R.a)(),
					x = Object(c.d)();
				d.arrowProps.style = {
					...d.arrowProps.style,
					borderBottom: `3px solid ${l.a.alien600}`
				}, d.popperProps.style = {
					...d.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const C = null != r ? r : !m;
				return a.a.createElement("div", {
					className: Object(N.a)(L.a.searchNSFWToggle),
					"data-testid": A,
					onMouseEnter: d.show,
					onMouseLeave: d.hide
				}, a.a.createElement("label", {
					htmlFor: A,
					className: Object(N.a)(L.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), a.a.createElement(P.a, {
					activeColorOverride: I.a,
					id: A,
					onToggle: function() {
						var e;
						s(Object(g.i)(!C, t, f));
						const n = !m;
						p(n);
						const {
							include_over_18: r,
							...o
						} = (null == f ? void 0 : f.queryParams) || {}, i = (null === (e = null == f ? void 0 : f.routeMatch) || void 0 === e ? void 0 : e.match.url) || O.a, a = {
							...o,
							...n && {
								[T.m]: "1"
							}
						}, c = {
							pathname: i,
							search: Object(w.a)("", {
								...a
							})
						};
						x(Object(_.b)(Object(k.c)(c)))
					},
					on: C,
					redditStyle: !0,
					ref: d.target.ref
				}), a.a.createElement(u.a, {
					visible: b || d.visible,
					arrowProps: d.arrowProps,
					popperProps: d.popperProps
				}, C ? n.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : n.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var D = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				U = s.n(D);

			function W(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const p = Object(v.a)(),
					k = Object(c.e)(E.lb),
					_ = Object(c.e)(y.D),
					w = Object(f.gb)(),
					N = _ === C.c.Trending,
					I = Object(j.a)({}),
					{
						shouldShowCommentTabTooltip: T,
						resetShowCommentTabTooltip: P
					} = b();
				I.arrowProps.style = {
					...I.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${l.a.alien600}`
				}, I.popperProps.style = {
					...I.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(i.useEffect)(() => {
					if (T) return window.addEventListener("click", P), () => {
						window.removeEventListener("click", P)
					}
				}, [T]);
				const R = {
						condition: !0,
						active: t === h.h.Posts,
						target: g.b.Posts,
						contentType: d.ic.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					F = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.Listings,
						target: g.b.Communities,
						contentType: d.ic.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					M = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === h.h.People,
						target: g.b.People,
						contentType: d.ic.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					L = [R, {
						condition: !(s.source === m.a.Trending || s.source === m.a.PromotedTrend),
						active: t === h.h.Comments,
						target: g.b.Comments,
						contentType: d.ic.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, F, M],
					A = k && !N && "1" !== s.sr_nsfw;
				return a.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: U.a.searchResultsNav
				}, a.a.createElement("div", {
					className: U.a.pillRow,
					role: "tablist"
				}, L.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: r,
						text: i,
						contentType: c
					} = e;
					return a.a.createElement(x.default, {
						key: r,
						"data-testid": r,
						to: Object(O.b)({
							searchType: c,
							pageLayer: w
						}),
						"aria-selected": t,
						role: "tab",
						className: U.a.pillElement,
						onClick: () => (e => {
							e.active || p(Object(g.n)(e.target, s))
						})(e)
					}, a.a.createElement(u.a, {
						visible: Boolean(e.showTooltip) && T,
						arrowProps: I.arrowProps,
						popperProps: I.popperProps
					}, n.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), a.a.createElement(S.a, {
						active: t,
						onClick: o.a,
						variant: S.b.TAB_GROUP
					}, i))
				})), r && a.a.createElement("div", {
					className: U.a.searchSwitcherContainer
				}, r), A && a.a.createElement("div", {
					className: U.a.nsfwToggleContainer
				}, a.a.createElement(B, {
					searchOptions: s
				})))
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				m = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				u = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", u.a), f = p.a.div("Container", u.a), x = p.a.img("BannerImg", u.a), O = p.a.img("SnooImg", u.a), g = p.a.div("CommunityText", u.a);
			var j = () => o.a.createElement(f, null, o.a.createElement(x, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(O, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(g, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: u.a.Button,
					eventSource: "sidebar"
				}))),
				v = s("./src/reddit/components/IdCard/async.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				y = s("./src/reddit/components/SidebarContainer/index.tsx"),
				E = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				S = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				k = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				T = s("./src/reddit/selectors/searchResults.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/selectors/widgets.ts"),
				M = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				L = s.n(M);
			const A = Object(a.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.t)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.v)(e, {
							listingKey: s
						})
					},
					currentSubreddit: I.e,
					isLoggedIn: R.R,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(T.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(P.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(P.I)(e, s);
						return Object(F.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(F.d)(e, {
							subredditName: s
						})
					}
				}),
				B = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: r,
						communityIdentifiers: i,
						communitiesLoadMore: a,
						hasAuthorResults: d,
						hasCommunityResults: l,
						listingKey: m,
						listingName: u,
						idCardWidget: p,
						isLoggedIn: b,
						postFlairWidgets: h,
						searchOptions: f,
						currentSubreddit: x
					} = e;
					const O = Boolean(x && u === x.name && f.restrict_sr),
						g = !!f.is_multi,
						I = i.length > C.a || !!a,
						T = t.length > C.a || !!s;
					let P;
					const R = Object(N.a)();
					return O ? P = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(v.a, {
						listingName: u
					}), h && h.map((e, t) => o.a.createElement(E.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(k.a, {
						subredditName: u,
						widget: e
					})))) : g || (P = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: L.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: L.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !f.is_multi && o.a.createElement(C.b, {
						componentType: C.c.Subreddits,
						identifiers: i,
						listingKey: m,
						searchOptions: f,
						sidebar: !0
					}), I && o.a.createElement(_.default, {
						to: Object(w.b)({
							searchType: c.ic.Subreddits,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: L.a.link
					}, n.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : o.a.createElement("p", {
						className: L.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3feoKq"
					}))), o.a.createElement("div", {
						className: L.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: L.a.header
					}, n.fbt._("People", null, {
						hk: "2M8TqB"
					})), d ? o.a.createElement(o.a.Fragment, null, !f.is_multi && o.a.createElement(C.b, {
						componentType: C.c.Users,
						identifiers: t,
						listingKey: m,
						searchOptions: f,
						sidebar: !0
					}), T && o.a.createElement(_.default, {
						to: Object(w.b)({
							searchType: c.ic.Users,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: L.a.link
					}, n.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: L.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), b && o.a.createElement("div", {
						className: L.a.container
					}, o.a.createElement(j, null)))), o.a.createElement(y.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, P, o.a.createElement(S.a, null))
				},
				D = e => {
					const t = Object(i.e)(t => A(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(B, s)
				}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, s) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, s) {
			e.exports = {
				caret: "OGoNN0lGfOACQsVwIa1wo",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				caretOpen: "_1ILOkGbdwmhXOmzBDCYXFT",
				filterButton: "BZDMD8yWu5imupa73nqYE",
				hasValue: "_1HyZhQLyitFqci_zC5jGCy",
				Dropdown: "_3RwR0q62tl_HktsM6eNnOn",
				dropdown: "_3RwR0q62tl_HktsM6eNnOn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return he
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/constants/page.ts"),
				p = s("./node_modules/fbt/lib/FbtPublic.js"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/selectors/searchResults.ts"),
				f = s("./src/lib/addQueryParams/index.ts");
			const x = (e, t, s, n, r, o) => {
				const i = e && e[s],
					a = {};
				let c = Object(f.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(f.a)(t, {
						[s]: l
					});
					a[e] = o[l](), d.push(e), i === l && (c = e)
				}
				return {
					optionLabels: a,
					options: d,
					value: c
				}
			};
			var O = s("./src/higherOrderComponents/asTooltip.tsx"),
				g = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/selectors/tooltip.ts");
			const E = Object(i.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(y.b)(s)(e)
				}
			});
			var S = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				k = s.n(S),
				_ = s("./node_modules/query-string/index.js"),
				w = s.n(_),
				N = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				P = s("./src/reddit/controls/Dropdown/Row.tsx"),
				R = s("./src/reddit/helpers/history/index.ts"),
				F = s("./node_modules/lodash/fromPairs.js"),
				M = s.n(F),
				L = s("./src/lib/extractQueryParams/index.ts"),
				A = s("./src/reddit/helpers/correlationIdTracker.ts"),
				B = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				D = s("./src/reddit/helpers/trackers/searchResults.ts"),
				U = s("./src/reddit/selectors/telemetry.ts");
			const W = (e, t) => {
					const s = M()([...Object(L.a)(e)]);
					return Object(m.zc)(s.sort) && (t.sort = s.sort), Object(m.Ac)(s.t) && (t.t = s.t), t
				},
				V = (e, t, s, n) => () => e(e => {
					const r = U.H(e, null);
					return {
						...Object(D.g)(e),
						source: "search",
						action: "click",
						noun: t,
						correlationId: Object(A.c)(A.a.SearchResults),
						actionInfo: Object(D.l)(e, null, r),
						search: U.db(e, W(s, n), B.a.SERP)
					}
				}),
				G = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: i,
						displayText: c
					} = e;
					const d = Object(I.b)();
					return r.a.createElement(N.a, {
						key: s,
						to: {
							pathname: w.a.parseUrl(s).url,
							state: {
								[T.b.SearchOriginPage]: Object(R.b)(T.b.SearchOriginPage)
							},
							search: s.replace(w.a.parseUrl(s).url + "?", "")
						},
						onClick: V(d, o, s, n)
					}, r.a.createElement(P.b, {
						className: Object(a.a)(i.SelectOption, t && i.mIsSelected),
						displayText: c,
						isSelected: t
					}))
				};
			var H = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				K = s.n(H);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const z = Object(O.a)(e => r.a.createElement(j.a, q({
					className: k.a.Component
				}, e))),
				Q = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: i,
						searchOptions: c,
						tooltipId: d,
						type: l,
						value: m,
						...u
					} = e;
					const {
						isOpen: p,
						onClick: b
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => E(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(C.i)()) : () => s(Object(C.f)({
								tooltipId: e
							}))
						}
					})(d);
					return r.a.createElement("div", {
						className: k.a.Wrapper
					}, r.a.createElement(g.a, q({}, u, {
						active: p,
						className: Object(a.a)(k.a.filterButton, t && k.a.hasValue),
						onClick: b,
						variant: g.b.TAB_GROUP
					}), s, r.a.createElement(v.a, {
						name: "caret_down",
						className: Object(a.a)(k.a.caret, p && k.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(z, {
						className: k.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(G, {
						displayText: i[e],
						key: t,
						isSelected: e === m,
						option: e,
						searchOptions: c,
						styles: {
							mIsSelected: K.a.mIsSelected,
							SelectOption: K.a.SelectOption
						},
						type: l
					})))))
				},
				Y = {
					[u.h.Posts]: [m.fc.Relevance, m.fc.Hot, m.fc.Top, m.fc.New, m.fc.Comments],
					[u.h.Comments]: [m.fc.Relevance, m.fc.Top, m.fc.New]
				},
				J = {
					[m.fc.Hot]: () => p.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[m.fc.Relevance]: () => p.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[m.fc.Top]: () => p.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[m.fc.New]: () => p.fbt._("New", null, {
						hk: "23egpt"
					}),
					[m.fc.Comments]: () => p.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = [m.oc.HOUR, m.oc.DAY, m.oc.WEEK, m.oc.MONTH, m.oc.YEAR, m.oc.ALL],
				$ = {
					[m.oc.HOUR]: () => p.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[m.oc.DAY]: () => p.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[m.oc.WEEK]: () => p.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[m.oc.MONTH]: () => p.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[m.oc.YEAR]: () => p.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[m.oc.ALL]: () => p.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const te = {
					[u.h.Posts]: [m.ec.Sort, m.ec.Time],
					[u.h.Comments]: [m.ec.Sort]
				},
				se = {
					[m.ec.Sort]: e => {
						let t = Object(o.e)(h.C);
						t = t !== m.Vb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: i
						} = x(e.queryParams, e.url, b.I, Y[e.tab], t || m.Vb, J), a = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: i
						}, c = Boolean(e.queryParams[b.I] || t);
						return r.a.createElement(Q, X({}, a, {
							active: c,
							label: c ? n[i] : p.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: m.ec.Sort
						}))
					},
					[m.ec.Time]: e => {
						const t = Object(o.e)(h.C),
							{
								options: s,
								optionLabels: n,
								value: i
							} = x(e.queryParams, e.url, b.O, Z.slice().reverse(), m.Wb, $);
						if (!e.searchOptions || e.searchOptions.sort === m.bb.NEW || e.searchOptions.sort === m.bb.HOT || t === m.bb.NEW || t === m.bb.HOT) return null;
						const a = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: i
						};
						return r.a.createElement(Q, ee({}, a, {
							active: Boolean(e.queryParams[b.O]),
							label: e.queryParams[b.O] ? n[i] : p.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: m.ec.Filter
						}))
					}
				};
			var ne = s("./src/lib/lessComponent.tsx"),
				re = s("./src/reddit/controls/Button/index.tsx"),
				oe = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				ie = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				ae = s.n(ie);
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), de = ne.a.wrapped(re.r, "TertiaryButton", ae.a), le = ne.a.wrapped(de, "AllRedditResultsButton", ae.a), me = e => {
				const t = Object(I.b)();
				return r.a.createElement(N.a, {
					to: Object(oe.a)(e.queryParams)
				}, r.a.createElement(le, {
					onClick: () => {
						t(t => ({
							...Object(D.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ce._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(v.a, {
					name: "forward"
				})))
			};
			var ue = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				pe = s.n(ue);
			const be = Object(i.c)({
					subreddit: l.C
				}),
				he = e => {
					var t;
					const {
						subreddit: s
					} = Object(o.e)(t => be(t, e)), n = Object(c.gb)(), i = Object(c.Z)(n), l = Object(c.fb)(n), m = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(a.a)(pe.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, null === (t = te[e.tab]) || void 0 === t ? void 0 : t.map((t, s) => {
						const n = se[t];
						return r.a.createElement(n, {
							key: s,
							queryParams: i,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: l
						})
					}), m && r.a.createElement(me, {
						queryParams: i,
						searchOptions: e.searchOptions
					}))
				}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				O = s.n(x);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(h.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[O.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = i.a.parse(s), m = t ? c.gc.ToSubreddit : c.gc.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, g._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: O.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(a.a)(O.a.searchSwitcherText, n)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, g._("{=Show results from}{=all of Reddit}", [g._param("=Show results from", r.a.createElement("span", null, g._("Show results from", null, {
						hk: "4l8fSw"
					}))), g._param("=all of Reddit", r.a.createElement("p", {
						className: Object(a.a)(O.a.searchSwitcherText, n)
					}, g._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.default, {
						className: Object(a.a)(O.a.searchSwitcher, e && O.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: m,
								[u.b.SearchOriginPage]: Object(b.b)(u.b.SearchOriginPage)
							}
						}
					}, h, r.a.createElement(f.a, {
						name: "forward",
						className: Object(a.a)(O.a.arrowIcon, n)
					}))
				}
			}
			t.a = Object(m.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(j, e)) : r.a.createElement(j, e))
		},
		"./src/reddit/components/SearchWarnings/index.m.less": function(e, t, s) {
			e.exports = {
				warningText: "_3qUPSbrS00ULxlso5V3tIN",
				warningIcon: "_1fMbGLM3cAHfas4PNZTps4",
				quarantineIcon: "Ap9gKlmTQdcI17NgCE4yQ",
				quarantineWarning: "_2cvv3TnzlFQHZE4upgevMn",
				nsfwWarning: "_1-dYjh5S-IQybef811XyCF",
				spoilerWarning: "_1P0ASR__enq34IxkSim2Rk"
			}
		},
		"./src/reddit/components/SearchWarnings/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				c = s("./src/reddit/components/SearchWarnings/index.m.less"),
				d = s.n(c);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function m(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: c
				} = e;
				return s || n || c ? r.a.createElement("div", {
					className: t
				}, s ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.quarantineWarning)
				}, r.a.createElement(a.a, {
					className: Object(o.a)(d.a.warningIcon, d.a.quarantineIcon)
				}), l._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.nsfwWarning)
				}, r.a.createElement(i.a, {
					name: "nsfw_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("nsfw", null, {
					hk: "2IetSA"
				})) : null, c ? r.a.createElement("span", {
					className: Object(o.a)(d.a.warningText, d.a.spoilerWarning)
				}, r.a.createElement(i.a, {
					name: "spoiler_fill",
					className: Object(o.a)(d.a.warningIcon)
				}), l._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
			}
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				c = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/reddit/actions/chat/toggle.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				C = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Post/index.ts"),
				S = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/routes/postCreation/constants.ts"),
				_ = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/components/ShareMenu/index.m.less"),
				I = s.n(N);
			const T = Object(h.a)(O.a),
				P = Object(a.a)(),
				R = e => {
					let {
						permalink: t,
						onShare: s
					} = e;
					return o.a.createElement(g.b, {
						id: "shareToChat",
						className: I.a.dropdownRow,
						displayText: n.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(d.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							s(e)
						}
					}, o.a.createElement(y.a, {
						name: "chat",
						className: I.a.chatIcon
					}))
				},
				F = e => {
					let {
						permalink: t,
						sendEventWithName: s
					} = e;
					return o.a.createElement(g.b, {
						className: I.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							s("share_embed"), window.open(`${c.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, o.a.createElement(y.a, {
						name: "embed",
						className: I.a.embedIcon
					}))
				},
				M = e => {
					let {
						onCrosspost: t
					} = e;
					return o.a.createElement(g.b, {
						className: I.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, o.a.createElement(y.a, {
						name: "crosspost",
						className: I.a.crosspostIcon
					}))
				},
				L = o.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(C.a)(),
						a = Object(i.e)(t => Object(w.b)(e.dropdownId)(t)),
						c = Object(i.e)(t => Object(_.b)(Object(f.a)(e.dropdownId))(t)),
						h = Object(r.useCallback)(() => {
							t(Object(b.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						O = e => t(Object(u.C)(e)),
						N = Object(r.useCallback)(() => {
							e.post && (t(Object(p.d)(e.post.id)), t(Object(m.i)(Object(f.a)(e.post.id))))
						}, [t, e.post]),
						L = !e.subredditType || e.subredditType === S.g.Public,
						A = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						B = Object(r.useCallback)(e => {
							t(Object(l.e)(e)), s(Object(v.a)())
						}, [t, s]);
					return o.a.createElement("div", {
						className: e.className,
						onClick: h,
						id: e.dropdownId
					}, e.children, o.a.createElement(T, {
						className: I.a.dropdown,
						isOpen: a,
						tooltipId: e.dropdownId
					}, o.a.createElement(g.b, {
						className: I.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(E.r)(s)) e.sendEventWithName("share_copy", {
								referralId: P
							}), N();
							else {
								const s = Object(d.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), O(s)
							}
						}
					}, o.a.createElement(y.a, {
						name: "link_post",
						className: I.a.linkIcon
					})), A && o.a.createElement(M, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${k.b}?source_id=${e.post.id}`, "_blank")
						}
					}), L && o.a.createElement(F, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), o.a.createElement(R, {
						permalink: e.permalink,
						onShare: B
					})), c && e.post && o.a.createElement(f.b, {
						className: I.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: P
							}), O(t)), N()
						},
						url: Object(d.a)(Object(j.a)(e.post.id), {
							[x.A]: P,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = L
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				h = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				g = s("./src/redditGQL/types.ts"),
				j = s("./src/reddit/components/SidebarFooter/index.m.less"),
				v = s.n(j);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = c.a.a("Link", v.a), E = Object(i.c)({
				countryCode: O.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: h.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: x.a
			}), S = Object(o.b)(E), k = Object(p.v)({
				isFrontpage: p.B,
				isCountrySitePage: p.z
			}), _ = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: v.a.GreyRereddit
				}, s, !!u.c[t] && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), t === g.j.De && r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), t === g.j.De && r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), r.a.createElement("div", {
					className: v.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = k(S(Object(d.c)(e => {
				const t = Object(o.f)().getState(),
					s = Object(h.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.ad.GreyRereddit || e.d2xPdpSideRailRecsVariant === m.ad.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === m.ad.LargeImagePreview ? e.reredditButtons : [];
					return r.a.createElement(_, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				if (!e.isFrontpage && !e.isCountrySitePage) return null;
				const n = t => {
					const n = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "English",
						it: "Italiano",
						pt: "Português"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(y, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, n[t]) : null
				};
				return r.a.createElement(l.a, {
					className: v.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!u.c[e.countryCode] && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/impressum"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === g.j.De && r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: v.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === g.j.De && r.a.createElement(y, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})))), r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: v.a.Column
				}, r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(y, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: v.a.LinkContainer
				}, r.a.createElement("div", {
					className: v.a.Column
				}, n("en"), n("fr"), n("it")), r.a.createElement("div", {
					className: v.a.Column
				}, n("de"), n("es"), n("pt"))), r.a.createElement("div", {
					className: v.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/BackToTop/index.tsx"),
				l = s("./src/reddit/components/SidebarFooter/index.tsx"),
				m = s("./src/reddit/constants/componentSizes.ts"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				b = s.n(p),
				h = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = c.g[1] + 24,
				O = m.f + 8,
				g = O + 152 + 16,
				j = g + x + 8,
				v = h.a.div("Container", b.a),
				C = h.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...n
					} = e;
					return a.a.createElement(d.a, f({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?O:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				y = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: o,
						shouldStickToBottom: i
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && o && !r,
							[b.a.StickyStylesFakeOverlay]: !i && !!r
						})
					}, t)
				};
			class E extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > g
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = o()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.N), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: s,
							children: n,
							className: r,
							hideFooter: o,
							pageLayer: i,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(v, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(y, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, c, !o && a.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(C, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const S = Object(u.v)();
			t.a = S(E)
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				O = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/trackers/postFlair.ts"),
				j = s("./src/reddit/models/Widgets/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				y = s.n(C);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = 129,
				k = Object(h.v)({
					filterName: e => Object(h.Z)(e)[b.j],
					url: e => Object(h.fb)(e)
				}),
				_ = Object(a.c)({
					subredditId: (e, t) => Object(v.I)(e, t.subredditName)
				}),
				w = Object(i.b)(_),
				N = l.a.div("WidgetContent", y.a),
				I = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: r,
						...i
					} = e;
					return o.a.createElement("li", {
						className: Object(c.a)(y.a.StyledFlair, t === j.g.Cloud && y.a.cloudDisplay, {
							[y.a.flairFilter]: s,
							[y.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == r ? void 0 : r(Object(O.g)(i.flair)),
						onMouseDown: n
					}, o.a.createElement(m.b, E({}, i, {
						className: y.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class T extends o.a.Component {
				constructor(e) {
					super(e), this.flairListRef = o.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(g.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(g.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(g.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(g.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(O.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(O.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > S && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return o.a.createElement(f.r, {
						className: y.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(O.e)(this.props.url, Object(O.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? S : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return o.a.createElement("div", {
						className: y.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return o.a.createElement("ul", null, o.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(O.e)(this.props.url, Object(O.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(r) || void 0, a = t.order.length > n.length || s && !i;
					return o.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, o.a.createElement(N, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(r), a && this.renderButton()))
				}
			}
			t.a = k(w(Object(u.c)(T)))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				b = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = s("./src/reddit/selectors/experiments/topPosts.ts"),
				f = s("./src/reddit/selectors/structuredStyles.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const j = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				v = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = j(e);
					return Object(O.f)(t)
				},
				y = e => {
					const t = v(e);
					return Object(O.f)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _ = Object(m.v)(), w = Object(o.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: s
						}),
						r = Object(x.eb)(e);
					return n || r
				},
				nigtmode: x.eb,
				subredditId: m.o,
				topPostVariant: h.d
			}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = j(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = v(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: o,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? S.a.widgetContentOnly : S.a.widgetContent, f = !n && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, O = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!c,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: x
					}, m && r.a.createElement("div", {
						className: Object(a.a)(S.a.widgetHeader, {
							[S.a.clickable]: !!l
						}),
						id: i,
						style: {
							...O,
							...this.props.headerStyles
						},
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(S.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, m)), o), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = _(w(Object(c.a)(Object(l.c)(N))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return w
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/focusedVerticals/index.ts"),
				c = s("./src/reddit/actions/gold/tooltips.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				m = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/experiments/survey.ts"),
				g = s("./src/reddit/selectors/listings.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/tracking.ts"),
				y = s("./src/reddit/selectors/user.ts");

			function E() {
				return Object(p.v)({
					currentProfileName: p.j,
					isCommentPermalink: p.x,
					isCommentsPage: p.y,
					isFrontpage: p.B,
					isProfilePostListing: p.N,
					isTopicPage: p.T,
					pageLayer: e => e
				})
			}
			const S = E(),
				k = {
					apiError: g.c,
					apiPending: g.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: g.g,
					postsById: j.T,
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: r
						} = t;
						return Object(j.D)(e, s, n, r)
					}),
					subredditsById: v.fb,
					viewportDataLoaded: C.a,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: O.e,
					isLoggedIn: y.R
				},
				_ = Object(r.c)(k),
				w = e => ({
					onBottomViewed: (t, s) => e(l.c(t, s)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, s) => {
						e(d.y(t, s))
					},
					trackOnPostEnteredViewport: (t, s, n, r) => {
						e(d.N(t, n, r))
					},
					trackOnPostExitedViewport: (t, s, n, r) => {
						e(d.O(t, n, r))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(m.m)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				I = (e, t, s, n) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = n;
					return Object(h.k)(e, t, "post", r, o, i, void 0)
				},
				T = Object(n.b)(_, w, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: I
				}));
			t.a = e => Object(u.c)(S(T(e)))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const i = new n.a(250),
				a = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let a = i.get(r);
						if (void 0 === a) {
							const c = new RegExp(`(\\b${n}\\b)`, "gi"),
								d = e.title.split(c);
							a = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), i.set(r, a)
						}
						return a
					}
				}
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			}));
			const n = "comment",
				r = "comment-submission-form-markdown",
				o = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = r.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/raf/index.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = {
					rootMargin: "100px 0px",
					threshold: .01
				},
				l = a.a.createContext(!1);
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isVisible: !1
					}, this.fastIsVisible = !1, this.setVisible = () => {
						this.setState(e => e.isVisible ? null : {
							isVisible: !0
						})
					}, this.scheduleVisibilityChange = () => {
						this.state.isVisible || o()(this.setVisible)
					}, this.handleIntersectionChange = e => {
						const t = e.isIntersecting;
						!this.fastIsVisible && t && (this.scheduleVisibilityChange(), this.fastIsVisible = !0)
					}
				}
				render() {
					const {
						children: e,
						...t
					} = this.props, {
						isVisible: s
					} = this.state, r = {
						...d,
						...t
					};
					return a.a.createElement(n.a, c({}, r, {
						onChange: this.handleIntersectionChange
					}), a.a.createElement("div", null, a.a.createElement(l.Provider, {
						value: s
					}, e)))
				}
			}

			function u() {
				return Object(i.useContext)(l)
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => r.a.createElement("div", {
					className: Object(o.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, r.a.createElement(a.a, {
					className: d.a.expandRight
				}, r.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				u = e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement(m, l({
						className: Object(o.a)(d.a.postCheckboxMenuItem, t)
					}, s))
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = s.n(b);
			var f = Object(m.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(p.a, {
						className: h.a.titleRow
					}, s), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: h.a.buttonRow
					}, d.a.createElement(u.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = s("./src/reddit/controls/ErrorText/index.m.less"),
				O = s.n(x);
			class g extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(O.a.wrapper, t)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, o), a && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const j = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, i = o.length ? o : r ? [r] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(g, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				v = e => d.a.createElement(j, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, i = o;
					return n ? r.a.createElement(t, i) : void 0 !== s ? r.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const s = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !r
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				c = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: d,
					postId: l,
					response: m
				} = e;
				if (!m.ok) return void s(m.error);
				const u = m.body,
					{
						post: p
					} = u && u.data,
					b = t(),
					h = Object(n.a)(l, null, {
						isOtherDiscussions: !0
					});
				if (p) {
					if (p.otherDiscussions && p.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = p, {
							postFlair: s,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: f
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(o.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === c.a.Post && n.postInfo) {
										const e = Object(o.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(c.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(c.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(r.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: n
									} of e.edges) {
									const e = s(n);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						d({
							count: t,
							key: h,
							meta: b.meta,
							postFlair: s,
							postId: l,
							postIds: n,
							posts: m,
							profiles: u,
							subreddits: f
						})
					}
				} else d({
					count: 0,
					key: h,
					meta: b.meta,
					postFlair: {},
					postId: l,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const i = "/search/",
				a = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var a;
					const {
						type: c,
						...d
					} = (null == s ? void 0 : s.queryParams) || {}, l = {
						...d,
						type: t,
						sort: void 0,
						t: void 0
					};
					return {
						pathname: (null === (a = null == s ? void 0 : s.routeMatch) || void 0 === a ? void 0 : a.match.url) || i,
						search: Object(n.a)("", {
							...l
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/constants/page.ts");
			const o = (e, t) => e.includes(n.ic.Comments) ? r.h.Comments : t || e.includes(n.ic.Posts) ? r.h.Posts : e.includes(n.ic.Users) && !e.includes(n.ic.Subreddits) ? r.h.People : r.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/parameters.ts");

			function o(e, t) {
				let s = "/search/",
					o = "",
					i = e && e[r.z] || "";
				return t ? (i = i.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.z]: i,
					[r.C]: o
				})) : (i = i.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.z]: i
				}))
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = s.n(r);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(o.a.loadingBar, i(e))
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "d", (function() {
				return k
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(r || (r = {}));
			const d = e => t => ({
					source: n.collection,
					noun: r.post,
					...u(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: n.collection,
						noun: s ? r.unfollow : r.follow,
						...u(e, t)
					})
				},
				m = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: i.a.postEvent,
						noun: s ? r.unfollow : r.follow,
						...u(e, t)
					})
				},
				u = (e, t) => {
					const s = {
						...c.o(e),
						action: o.c.CLICK,
						subreddit: c.kb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.K(e, t),
						postCollection: c.M(e, {
							postId: t
						}),
						postEvent: c.N(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...x(e),
					action: o.c.VIEW,
					noun: r.collectionEducation
				}),
				b = e => ({
					...x(e),
					action: o.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				h = e => ({
					...x(e),
					action: o.c.VIEW,
					noun: r.eventEducation
				}),
				f = e => ({
					...x(e),
					action: o.c.CLICK,
					noun: r.eventEducationGotIt
				}),
				x = e => ({
					...c.o(e),
					subreddit: c.kb(e),
					source: n.postComposer
				}),
				O = (e, t) => s => ({
					...u(s, e),
					source: t || n.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				g = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: r.collectionRemovePost
				}),
				j = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: r.collectionCancel
				}),
				v = () => e => {
					const t = Object(a.p)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						noun: r.collectionCreate
					}
				},
				C = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: r.collectionSelect
				}),
				y = e => t => ({
					...c.o(t),
					subreddit: c.kb(t),
					source: n.collectionComposer,
					action: o.c.CLICK,
					noun: r.collectionDelete,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...u(t),
					source: n.collectionComposer,
					noun: r.collectionEdit,
					postCollection: c.L(t, {
						collectionId: e
					})
				}),
				S = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: r.startEvent
				}),
				k = () => e => {
					const t = Object(a.p)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						action: o.c.VIEW,
						noun: r.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return g
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/timezone/index.ts"),
				a = s("./src/reddit/constants/tracking.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				u = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = e => m.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(u.a)({
						...m.o(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: m.kb(e)
					})
				},
				h = e => {
					Object(u.a)({
						...m.o(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: m.kb(e),
						postEvent: j(e),
						postComposer: v(e)
					})
				},
				f = () => e => ({
					source: n.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: j(e)
				}),
				x = e => t => ({
					...E(t, Object(d.p)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: C(e)
				}),
				O = () => e => ({
					...E(e, Object(d.p)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				g = e => t => ({
					...E(t, Object(d.p)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: v(t),
					postEvent: y(e)
				}),
				j = e => {
					const t = Object(l.p)(e);
					return t && y(t)
				},
				v = e => C(Object(l.p)(e)),
				C = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / r.Xb : void 0
					}
				},
				y = e => {
					const t = Object(i.f)(e.startDate).getTime() / r.Xb,
						s = Object(i.f)(e.endDate).getTime() / r.Xb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(o.e)(t, s)
					}
				},
				E = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: a.c.CLICK,
						subreddit: m.kb(e)
					};
					return t ? {
						...s,
						post: m.K(e, t),
						postEvent: m.N(e, {
							postId: t
						}),
						postCollection: m.M(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
				...Object(r.o)(e),
				source: "post",
				action: n.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.kb)(e)
			})
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				r = s("./src/telemetry/models/Event.ts");
			const o = () => e => ({
					source: r.f.HomeFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				i = () => e => ({
					source: r.f.UserPreferences,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				a = () => e => ({
					source: r.f.UserPreferences,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				c = () => e => ({
					source: r.f.CommunityNotificationsSettings,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				d = () => e => ({
					source: r.f.PopularFeed,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				l = () => e => ({
					source: r.f.SubredditIdBanner,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				m = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.MuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				}),
				u = () => e => ({
					source: r.f.AboutCommunityOverflow,
					action: r.d.Click,
					noun: r.e.UnmuteSubreddit,
					targetUser: {
						id: n.sb(e).id
					},
					...n.o(e)
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: o.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.yb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.o
				}),
				c = (e, t) => s => ({
					source: r.POST,
					action: o.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.K(s, e),
					subreddit: i.kb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.o(s)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: o.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.o(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: o.c.CLICK,
					noun: n.TOPIC,
					...i.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return r.a.createElement("i", d({
					className: Object(o.a)(Object(i.b)("comment", s.isFilled), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(o.a, i({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("i", d({}, e, {
				className: Object(o.a)(Object(i.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, r.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), r.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
		"./src/reddit/icons/svgs/LiveChat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				stroke: "white"
			}, e), r.a.createElement("path", {
				d: "M1.17567 6.90708L1.17579 6.9071L1.17765 6.89503C1.61505 4.05191 3.95864 1.69386 6.90278 1.17649C11.5294 0.445398 15.5469 4.48817 14.7445 9.01081L14.7433 9.01787L14.7422 9.02495C14.3037 11.8753 11.9552 14.2237 9.10488 14.6623L9.10486 14.6621L9.09283 14.6642C7.41037 14.9568 5.80338 14.5919 4.48582 13.7867L4.249 13.642L3.98282 13.7206L1.45885 14.4663L2.19817 12.0209L2.27918 11.7529L2.13322 11.5141C1.31702 10.1785 0.886321 8.57086 1.17567 6.90708Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10",
				strokeLinecap: "square"
			}), r.a.createElement("path", {
				d: "M8.00018 12.3201C10.386 12.3201 12.3202 10.3859 12.3202 8.00005C12.3202 5.61418 10.386 3.68005 8.00018 3.68005C5.61431 3.68005 3.68018 5.61418 3.68018 8.00005C3.68018 10.3859 5.61431 12.3201 8.00018 12.3201Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}), r.a.createElement("path", {
				d: "M8.00008 9.92008C9.06047 9.92008 9.92008 9.06047 9.92008 8.00008C9.92008 6.93969 9.06047 6.08008 8.00008 6.08008C6.93969 6.08008 6.08008 6.93969 6.08008 8.00008C6.08008 9.06047 6.93969 9.92008 8.00008 9.92008Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}))
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				m = s.n(l),
				u = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(u);
			t.a = e => {
				let {
					backgroundColor: t,
					className: s,
					containerRef: l,
					content: u,
					navBar: b,
					redditStyle: h,
					sidebar: f,
					subredditId: x
				} = e;
				const O = Object(n.useContext)(c.a),
					g = Boolean(f);
				return r.a.createElement(i.a, {
					subredditId: x
				}, r.a.createElement("div", {
					className: Object(o.a)(m.a.outerContainer, a.i, s, {
						[m.a.outerContainerExp]: O
					}),
					ref: l
				}, r.a.createElement(d.a, {
					className: a.h,
					redditStyle: h,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: m.a.innerContainer
				}, r.a.createElement("div", {
					className: p.a.bodyContainer
				}, r.a.createElement("div", {
					className: p.a.contentContainer
				}, r.a.createElement("div", {
					className: p.a.navContent
				}, b), r.a.createElement("div", {
					className: Object(o.a)(p.a.content, g && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, g && p.a.withSidebar)
				}, u), g && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, f)))))))
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: o,
					gutter: a,
					...l
				} = e;
				return r.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: o,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function r(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
		},
		"./src/reddit/pages/Recap/Components/BananaPill/index.m.less": function(e, t, s) {
			e.exports = {
				bananaPill: "luTPauejzUjrGQIJmBJMt",
				transform: "T2syrzYJQrK2MbUsJ1ZIs",
				icon: "_2DvitLaA7xyv9xsNJWP3t4",
				text: "BE8_V9hkF52QnKXfBAL2e",
				altText: "_2RhoXA1ZtjfGQFhaJvg2Hu",
				bouncing: "_1bv5w7rQU4LQw-ZO3MYGBc"
			}
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return J
			})), s.d(t, "default", (function() {
				return X
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./node_modules/lodash/isEqual.js"),
				p = s.n(u),
				b = s("./src/reddit/actions/searchQueryId/index.tsx"),
				h = s("./src/reddit/actions/survey/index.ts"),
				f = s("./src/reddit/components/JumpToContent/index.tsx"),
				x = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				O = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				g = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				j = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				v = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				C = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/constants/covid.ts"),
				S = s("./src/reddit/constants/page.ts"),
				k = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/correlationIdTracker.ts"),
				N = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				I = s("./src/reddit/helpers/search/searchQueryId.ts"),
				T = s("./src/reddit/helpers/search/searchTabType.ts"),
				P = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				R = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				F = s("./src/reddit/helpers/trackers/searchResults.ts"),
				M = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				L = s("./src/reddit/hooks/useTheme.ts"),
				A = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				B = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				D = s("./src/reddit/selectors/experiments/commentSearchSorts.ts"),
				U = s("./src/reddit/selectors/searchFix.ts"),
				W = s("./src/reddit/selectors/searchQueryId.ts"),
				V = s("./src/reddit/selectors/subreddit.ts"),
				G = s("./node_modules/lodash/isEmpty.js"),
				H = s.n(G),
				K = s("./src/reddit/pages/SearchResults/index.m.less"),
				q = s.n(K);

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Q = 3e3,
				Y = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				J = {
					[S.h.Listings]: {
						tab: S.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[S.h.People]: {
						tab: S.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[S.h.Posts]: {
						tab: S.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[S.h.Comments]: {
						tab: S.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function X(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(c.d)(),
					r = Object(_.gb)(),
					u = Object(y.b)(),
					G = Object(L.a)(),
					K = Object(i.useRef)(!1),
					X = Object(i.useRef)(!1),
					Z = Object(c.e)(e => Object(V.C)(e, {
						subredditName: s.params.subredditName
					})),
					$ = Object(c.e)(e => Object(O.a)(e, {
						pageLayer: r
					})),
					ee = Object(c.e)(e => Object(U.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: te
					} = Object(c.e)(e => Object(W.a)(e)),
					se = Object(c.e)(D.a),
					ne = Object(_.Z)(r),
					re = Object(_.db)(r),
					[oe, ie] = Object(i.useState)(!1),
					ae = Object(l.a)(ne) || null;
				Object(M.c)(), Object(i.useEffect)((function() {
					return () => {
						N.a.clear(P.a.SERP)
					}
				}), []), Object(i.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(h.k)()), Q), () => {
						Object(w.b)(w.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(i.useEffect)(() => {
					ne !== ae && (K.current = !1, ie(!1)), ne && ae && ne[k.z] !== ae[k.z] && (Object(w.b)(w.a.SearchResults), Object(w.d)(w.a.SearchResults))
				}, [ne, ae]), Object(i.useEffect)(() => {
					const e = {
							...ne,
							type: void 0
						},
						t = {
							...ae,
							type: void 0
						};
					!p()(e, t) && !H()(ae) && N.a.update(P.a.SERP)
				}, [ne, ae]);
				const ce = s.params.multiredditName,
					de = s.params.subredditName || ce || "",
					le = s.params.username,
					me = Object(m.e)(o()(ne || {}, k.D)),
					ue = Object(m.b)(de, le, me);
				te && (I.a.set(P.a.SERP, ue, te), n(Object(b.c)()));
				const pe = Z && me.restrict_sr,
					be = Object(T.a)(me.type, pe),
					he = {
						...me,
						type: [d.ic.Posts, d.ic.Subreddits, d.ic.Users]
					},
					fe = Object(m.b)(de, le, he),
					xe = {
						redesign: !0,
						searchOptions: me
					};
				let Oe;
				Object(_.S)(r) || Object(_.D)(r) ? Oe = a.a.createElement(C.a, z({}, xe, {
					url: Object(R.a)(ne)
				})) : $ && ee && (Oe = a.a.createElement(C.a, z({}, xe, {
					subreddit: $,
					url: Object(R.a)(ne, $.name)
				})));
				const ge = J[be].tab,
					je = Boolean(pe) || J[be].sidebar && !ce,
					ve = J[be].filterNav || be === S.h.Comments && se,
					Ce = Object(B.a)({
						redditStyle: !0,
						theme: G
					});
				return Object(i.useEffect)(() => {
					if (ge === S.h.Comments && !X.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							X.current = !0, n(Object(h.j)())
						}, Q), () => {
							window.clearTimeout(e)
						}
					}
				}, [ge]), a.a.createElement(A.a, {
					backgroundColor: Ce.canvas,
					content: a.a.createElement(a.a.Fragment, null, a.a.createElement(f.a, null), re && !oe && (() => {
						const e = e => u(Object(F.f)(e, Object(m.e)(o()(ne || {}, k.D))));
						return K.current || (e("view"), K.current = !0), a.a.createElement(Y, {
							announcement: E.a,
							className: q.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), ie(!0)
							}
						})
					})(), a.a.createElement(x.a, {
						listingKey: ue,
						listingName: de,
						location: t,
						searchOptions: me,
						tab: ge
					})),
					navBar: a.a.createElement(a.a.Fragment, null, a.a.createElement(g.a, {
						activeTab: ge,
						searchOptions: me,
						searchSwitcher: Oe
					}), ve && a.a.createElement(v.a, {
						key: "subNav",
						searchOptions: me,
						shouldHideGlobalSearchLink: !0,
						subredditName: de,
						tab: ge
					}), Oe && a.a.createElement("div", {
						className: q.a.searchSwitcherContainer
					}, Oe)),
					sidebar: je && a.a.createElement(j.a, {
						className: q.a.sidebar,
						listingKey: fe,
						listingName: de || S.c,
						searchOptions: he,
						tab: ge
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.H
				}) === n.Kd
			}
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.R, i.Q, (e, t) => e || t),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: r.D
				}), e => e === r.O.Enabled)
		},
		"./src/reddit/selectors/experiments/commentSearchSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.E
				}) === n.Kd
			}
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.nc
				}), i.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(o.f)(e),
					experimentName: n.mc
				}), i.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = e => !!Object(o.b)(e) || Object(r.c)(e, {
				experimentEligibilitySelector: i.R,
				experimentName: n.e
			}) === n.c.Enabled
		},
		"./src/reddit/selectors/experiments/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.Bf
			}), e => ({
				isSubEnlarged: e === n.Qf.Variant1 || e === n.Qf.Variant3,
				withCommunityDescription: e === n.Qf.Variant2 || e === n.Qf.Variant3
			}))
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.tg)(t)
				},
				c = Object(n.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.searchQueryId
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const c = e => Object(o.c)(e, {
					experimentName: r.bf,
					experimentEligibilitySelector: o.a
				}),
				d = (e, t) => (t === r.jf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(i.B)(e),
				l = Object(n.a)(a.G, c, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, c, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"72926b3be83c"}')
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b1e8c2ac46dc"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"7d4486a74e67"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"74c23217d06b"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"045d4ef3e74f"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"d0c87800bdd4"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.edce5551120ca3286a7b.js.map