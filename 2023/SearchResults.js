// https://www.redditstatic.com/desktop2x/SearchResults.6aa0e5b80324db140eca.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
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
				o = s("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return n(e, 1, t)
				}));
			e.exports = o
		},
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/devPlatform/constants.ts"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx");
			const m = Object(r.a)({
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

			function u(e) {
				const t = Object(d.e)(e => Object(c.a)(e)),
					s = Object(a.ib)(),
					n = Object(d.e)(t => p(t, {
						...e,
						pageLayer: s
					}));
				return t ? o.a.createElement(m, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator,
					subreddit: n,
					isOnModQueueOverflowMenu: !!e.isOnModQueueOverflowMenu,
					fallback: o.a.createElement(l.a, {
						isOnModQueueOverflowMenu: !!e.isOnModQueueOverflowMenu,
						contextType: e.contextType,
						moderator: e.moderator,
						subreddit: n
					})
				}) : null
			}
			const p = (e, t) => {
				const s = Object(a.s)(e, {
					pageLayer: t.pageLayer
				});
				if (null != s) return s;
				const n = e.subreddits.models;
				switch (t.contextType) {
					case i.a.POST:
						return n[t.contextData.belongsTo.id];
					case i.a.COMMENT:
						return n[t.contextData.subredditId];
					case i.a.SUBREDDIT:
					default:
						return null
				}
			}
		},
		"./src/devPlatform/components/ContextActions/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				dropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				DropdownRowBorderless: "nGJGslkMB0gn9S2lxUphf",
				dropdownRowBorderless: "nGJGslkMB0gn9S2lxUphf",
				Icon: "SnpDpl5eEAD07JaiyJbpr",
				icon: "SnpDpl5eEAD07JaiyJbpr"
			}
		},
		"./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/devPlatform/constants.ts"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/devPlatform/components/ContextActions/index.m.less"),
				d = s.n(c);

			function l(e) {
				const t = Object(n.useMemo)(() => {
					var t, s;
					if (null == e.subreddit) return [];
					let n;
					try {
						return (null == (n = JSON.parse(atob(null !== (s = null === (t = e.subreddit) || void 0 === t ? void 0 : t.devPlatformMetadata) && void 0 !== s ? s : ""))) ? void 0 : n.contextActions) ? n.contextActions.sort((e, t) => e.actorHostname.localeCompare(t.actorHostname)).reduce((t, s) => {
							var n;
							let o = [];
							return (null === (n = s.actions) || void 0 === n ? void 0 : n.actions) && (o = s.actions.actions.filter(t => {
								var s, n, o, i, a;
								if (e.moderator && !(null === (s = t.users) || void 0 === s ? void 0 : s.moderator) || !e.moderator && (null === (n = t.users) || void 0 === n ? void 0 : n.moderator)) return !1;
								switch (e.contextType) {
									case r.a.POST:
										return !!(null === (o = t.contexts) || void 0 === o ? void 0 : o.post);
									case r.a.COMMENT:
										return !!(null === (i = t.contexts) || void 0 === i ? void 0 : i.comment);
									case r.a.SUBREDDIT:
										return !!(null === (a = t.contexts) || void 0 === a ? void 0 : a.subreddit);
									default:
										return !1
								}
							})), [...t, ...o]
						}, []).sort((e, t) => e.name.localeCompare(t.name)) : []
					} catch (o) {
						return []
					}
				}, [e.contextType, e.moderator, e.subreddit]);
				return o.a.createElement(o.a.Fragment, null, t.map(t => o.a.createElement(i.b, {
					disabled: !0,
					className: e.isOnModQueueOverflowMenu ? d.a.DropdownRowBorderless : d.a.DropdownRow,
					displayText: t.name,
					key: `${e.contextType}.${t.actionId}`
				}, o.a.createElement(a.a, {
					name: e.moderator ? "mod" : "bot",
					className: d.a.Icon
				}))))
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "devvit-gateway-url",
				o = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				i = "DEV_PLAT__OPEN_FORM_MODAL",
				a = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var c;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(c || (c = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, s) => ({
				...i.q(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.f(e),
				app: i.g(e),
				feed: i.t(e),
				geo: i.v(e),
				platform: i.K(e),
				referrer: i.bb(e),
				request: i.cb(e),
				screen: i.eb(e),
				session: i.jb(e),
				user: i.ub(e),
				media: s ? i.E(e, s) : null,
				post: s ? i.M(e, s) : null
			});
			var c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function m(e) {
				function t(t) {
					const s = Object(r.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, n) {
							var o, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(n)(s, i, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(d.a)(a(n)(s, c.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
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
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return P
			}));
			var n, o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/performanceTimings/index.tsx"),
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
			const O = [],
				x = (Object(u.a)((e, t) => {
					const s = x(e, t);
					if (!s) return O;
					const n = Object(h.bb)(e, {
						subredditName: s.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : O
				}), (e, t) => {
					const s = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return s ? Object(h.X)(e, {
						subredditId: s
					}) : null
				}),
				g = (e, t, s, n, o) => {
					const r = o.find(e => e <= t) || -1,
						i = o.find(e => e > t) || 1 / 0;
					return t !== i && t !== r && (!(r + s > t) && (!(t + s > i) && !((e, t, s) => {
						const n = s[t - 1],
							o = s[t],
							r = o && Object(b.F)(e, {
								postId: n
							}) || null,
							i = o && Object(b.F)(e, {
								postId: o
							}) || null;
						return r && r.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				v = [3];
			Object(u.a)((e, t) => {
				let {
					existingDUPositions: s,
					listingProps: n
				} = t;
				const o = s.slice().sort();
				let r = -1;
				const i = Object(b.y)(e, {
						listingKey: n.listingKey
					}),
					a = [];
				return v.forEach(t => {
					let s = r + t;
					if (!(s >= i.length)) {
						for (; s < i.length && !g(e, s, t, i, o);) s += 1;
						s < i.length && (a.push(s), r = s)
					}
				}), a
			});
			var j = s("./src/reddit/selectors/platform.ts");
			const C = Object(o.a)(i.f),
				y = Object(o.a)(i.d),
				E = Object(o.a)(i.g),
				_ = Object(o.a)(i.c),
				S = Object(o.a)(i.e),
				k = (Object(o.a)(i.i), Object(o.a)(i.h), () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const r = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(r),
						d = (e => {
							const t = Object(f.R)(e),
								s = p.d.geoSubredditRecommendationDULoggedIn(e),
								n = p.d.geoSubredditRecommendationDULoggedOut(e);
							return t && s || !t && n
						})(r),
						u = Object(f.R)(r);
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
							}))(o(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (w(t)) {
								if (I(t)) {
									e(_({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), b = !0
								} else if (N(t)) {
									const s = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: o,
											category: r
										} = s.focusRecommendations[0],
										i = [n, o],
										a = Object(m.d)(i),
										c = Object(l.b)(i),
										d = Object(m.c)(n),
										u = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [o.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: r,
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
				I = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations;
					return !(!s || 0 !== s.length)
				},
				N = e => {
					const t = e.focusVerticalSubredditRecommendations,
						s = t && t.focusRecommendations,
						n = t && t.type;
					return !!(s && !I(e) && n === d.GEO && s[0] && s[0].recommendedSubreddit && s[0].interactedSubreddit)
				},
				P = () => async (e, t, s) => {
					var n, o;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const s = null === (o = null === (n = Object(j.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							a = Object(f.S)(i);
						return Object(r.i)(() => e(k()), {
							name: "getFocusedVerticalsRequested",
							page: s,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(S({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/linkedPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/linkedPosts/constants.ts");
			const r = Object(n.a)(o.c),
				i = Object(n.a)(o.b),
				a = Object(n.a)(o.a)
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
				o = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/OtherDiscussions.json"),
				c = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const d = Object(n.a)(r.a),
				l = Object(n.a)(r.b),
				m = Object(n.a)(r.c),
				u = (e, t) => async (s, n, r) => {
					let {
						gqlContext: u
					} = r;
					const p = n(),
						b = Object(o.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = p.listings.postOrder.ids[b],
						f = !!p.listings.postOrder.api.error[b];
					if (h && !f) return;
					s(m({
						key: b
					}));
					const O = await ((e, t) => Object(i.a)(e, {
						...a,
						variables: t
					}))(u(), t);
					Object(c.a)({
						getState: n,
						onFailure: e => s(d(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: O
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return vt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return jt
			})), s.d(t, "commentsPagePending", (function() {
				return Ct
			})), s.d(t, "commentsPageLoaded", (function() {
				return yt
			})), s.d(t, "commentsPageFailed", (function() {
				return Et
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return _t
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return kt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return wt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return It
			})), s.d(t, "commentsPageRequested", (function() {
				return Nt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Tt
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Rt
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Mt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/makeSearchKey/index.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/reddit/reducers/features/categories/index.ts"),
				d = (s("./node_modules/lodash/isEmpty.js"), s("./src/lib/makeActionCreator/index.ts")),
				l = (s("./src/reddit/constants/categories.tsx"), s("./src/lib/constants/index.ts")),
				m = (s("./src/lib/makeApiRequest/index.ts"), s("./src/lib/omitHeaders/index.ts"), s("./src/reddit/constants/headers.ts"), s("./src/reddit/constants/experiments.ts"));
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(a.a)({
				features: {
					categories: c.a
				}
			});
			Object(d.a)(b.c), Object(d.a)(b.b), Object(d.a)(b.a), Object(d.a)(b.g), Object(d.a)(b.f), Object(d.a)(b.e);
			const h = Object(d.a)(b.d);
			var f = s("./src/reddit/actions/discoveryUnit.ts"),
				O = s("./src/reddit/actions/pages/subreddit/index.ts"),
				x = s("./src/reddit/actions/shortcuts/active.ts"),
				g = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				v = s("./src/reddit/actions/subredditSettings.ts"),
				j = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				C = s("./src/reddit/endpoints/devPlatform/index.ts"),
				y = s("./src/reddit/endpoints/governance/posts.ts"),
				E = s("./src/reddit/endpoints/page/commentsPage.ts"),
				_ = s("./src/lib/makeGqlRequest/index.ts"),
				S = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function k(e, t) {
				return Object(_.a)(e, {
					...S,
					variables: t
				})
			}
			var w = s("./src/reddit/endpoints/page/subredditPage.ts"),
				I = s("./src/reddit/endpoints/profile/info.ts"),
				N = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/lib/pageTitle/index.ts"),
				T = s("./src/reddit/actions/economics/helpers/async.ts"),
				R = s("./src/reddit/actions/externalAccount.ts"),
				M = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				F = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				L = s("./src/reddit/actions/platform.ts"),
				A = s("./src/reddit/actions/post.ts"),
				B = s("./src/reddit/actions/profile/index.ts"),
				D = s("./src/reddit/actions/subreddit.ts"),
				U = s("./src/reddit/actions/subreddit/notifications.ts"),
				V = s("./src/reddit/actions/subreddit/questions.ts"),
				W = s("./src/reddit/actions/toaster.ts"),
				H = s("./src/reddit/constants/adEvents.ts"),
				G = s("./src/reddit/constants/graphql.ts"),
				q = s("./src/reddit/constants/parameters.ts"),
				K = s("./src/reddit/constants/posts.ts"),
				z = s("./src/reddit/helpers/ads/index.ts"),
				Q = s("./src/reddit/helpers/commentList/index.ts"),
				Y = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/Subreddit/index.ts"),
				Z = s("./src/reddit/models/User/index.ts"),
				$ = s("./src/reddit/selectors/adsSignals.ts"),
				ee = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				te = s("./src/reddit/selectors/experiments/postSeo.ts"),
				se = s("./node_modules/reselect/es/index.js"),
				ne = s("./src/reddit/helpers/chooseVariant/index.ts"),
				oe = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				re = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ie = s("./src/reddit/selectors/platform.ts"),
				ae = s("./src/reddit/selectors/removedPosts.ts");
			const ce = Object(se.a)(ie.f, oe.a, ae.a, ae.c, re.a, ae.e, re.b, (e, t, s, n, o, r, i) => {
				if (!e || !t || o) return !1;
				if (n) return !0;
				const a = r || i,
					c = t.score >= 2 || t.numComments >= 2;
				return !(!s || a || c)
			});
			var de = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				le = s("./src/reddit/selectors/moderatorPermissions.ts"),
				me = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/reddit/selectors/user.ts"),
				be = s("./src/lib/makeCommentsPageKey/index.ts"),
				he = s("./src/reddit/actions/ads/index.ts"),
				fe = s("./src/reddit/helpers/canonicalUrls.ts"),
				Oe = s("./src/reddit/helpers/correlationIdTracker.ts"),
				xe = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				ge = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ve = s("./src/lib/performanceTimings/index.tsx"),
				je = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				Ce = s("./src/reddit/actions/gold/customEmojis.ts"),
				ye = s("./src/lib/makeListingKey/index.ts"),
				Ee = s("./src/reddit/actions/googleQASchema/constants.ts");
			const _e = Object(d.a)(Ee.b),
				Se = Object(d.a)(Ee.a);
			var ke = s("./src/reddit/actions/linkedPosts/index.ts"),
				we = s("./src/reddit/actions/otherDiscussions/index.ts"),
				Ie = s("./src/reddit/actions/subreddit/constants.ts"),
				Ne = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Pe = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						s({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (i) {
						n(i)
					}
				},
				Te = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Me = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Fe = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.linked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(Te.a)(o),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Re.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(N.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Me.a)(e)
							}
						}
						s({
							dist: r.linked.posts && r.linked.posts.dist || null,
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
				Le = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Ae = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Be = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var De = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						options: o,
						postId: r,
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
							c = Object(Ae.a)(a),
							d = Be(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = o,
							h = Object(ye.a)(b, l.ab[p], {
								t: u
							});
						s({
							dist: e.dist,
							key: h,
							meta: n.meta,
							postIds: m,
							posts: d
						})
					} catch (a) {
						n(a)
					}
				},
				Ue = s("./src/reddit/models/Media/index.ts"),
				Ve = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				We = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var He = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: n,
						postId: o,
						post: r
					} = e;
					try {
						const e = [],
							n = {},
							i = {};
						if (!r || !r.nsfwLinked) return;
						const a = t(),
							c = a.posts && a.posts.models,
							d = Object(We.a)(o),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !c.hasOwnProperty(t.id)) {
								const e = Object(Re.a)(t);
								n[t.id] = e.post, e.crosspost && !c.hasOwnProperty(e.crosspost.id) && (n[e.crosspost.id] = e.crosspost)
							}
							if (Object(N.n)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(Me.a)(e)
							}
						}
						s({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
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
				Ge = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const qe = Object(d.a)(Ge.b),
				Ke = Object(d.a)(Ge.a);
			var ze = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Qe = Object(d.a)(ze.b),
				Ye = Object(d.a)(ze.a),
				Je = Object(d.a)(Ie.o),
				Xe = Object(d.a)(Ie.n),
				Ze = (Object(d.a)(Ie.w), Object(d.a)(Ie.v), e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r;
					const {
						includeNSFWListingBelowExperiment: i,
						includeListingBelowExperiment: a,
						includeOtherDiscussions: c,
						includePostFeed: d,
						includePostQASchemaEligibilityFlag: m,
						listingBelowExperimentVariant: u,
						postId: p,
						range: b,
						sort: h,
						subredditName: f
					} = e, O = Object(ye.a)(p, null, {
						isOtherDiscussions: !0
					}), x = s(), g = Object(me.y)(x, {
						listingKey: O
					}), v = c && (!g || 0 === g.length), j = Object(ye.a)(f, l.ab[h], {
						t: b
					}), C = Object(me.y)(x, {
						listingKey: j
					}), y = d && (a || !C || 0 === C.length), E = a, S = i, k = Object(me.F)(x, {
						postId: p
					}), w = !!k && !!k.media && (Object(Ue.M)(k.media) || Object(Ue.I)(k.media)) && !k.media.altText;
					if (!(v || y || E || S || w || m)) return;
					v && t(Object(we.d)({
						key: O
					}));
					const I = await ((e, t) => Object(_.a)(e, {
							...Ne,
							variables: t
						}))(o(), e),
						N = I.body,
						P = Object(Ve.a)(u);
					m && (I.ok ? N.data && N.data.post && t(_e({
						postId: p,
						isEligibleForQASchema: null !== (r = N.data.post.isEligibleForQASchema) && void 0 !== r && r
					})) : t(Se())), v && Object(Le.a)({
						getState: s,
						onFailure: e => t(Object(we.b)(e)),
						onSuccess: e => t(Object(we.c)(e)),
						postId: p,
						response: I
					}), y && !E && (I.ok ? N.data && De({
						getState: s,
						onFailure: e => t(Xe(e)),
						onSuccess: e => t(Je(e)),
						options: e,
						postId: p,
						subreddit: N.data.subreddit
					}) : t(Xe(I.error))), E && !P && I.ok && N.data && Fe({
						getState: s,
						onFailure: e => t(Object(ke.a)(e)),
						onSuccess: e => t(Object(ke.b)(e)),
						postId: p,
						post: N.data.post
					}), S && I.ok && He({
						getState: s,
						onFailure: e => t(Ye(e)),
						onSuccess: e => t(Qe(e)),
						postId: p,
						post: N.data.post
					}), w && I.ok && N.data && Pe({
						getState: s,
						onFailure: e => t(Ke(e)),
						onSuccess: e => t(qe(e)),
						postId: p,
						post: N.data.post
					})
				}),
				$e = e => {
					var t, s;
					const n = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						o = n && Object(N.y)(n),
						{
							sortToUse: r
						} = Object(Y.a)(e, o);
					return (!r || r === l.v.CONFIDENCE) && Object(ne.c)(e, {
						experimentEligibilitySelector: () => Object(pe.R)(e),
						experimentName: m.p
					}) === m.v.Enabled
				};
			var et = s("./src/reddit/selectors/chatPost.ts"),
				tt = s("./src/reddit/selectors/seo/index.ts"),
				st = s("./src/reddit/actions/pages/constants.ts"),
				nt = s("./src/lib/sentry/index.ts"),
				ot = s("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				rt = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				it = s("./src/reddit/helpers/locales.ts"),
				at = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				ct = s("./src/reddit/reducers/pages/comments/index.ts"),
				dt = s("./src/reddit/selectors/experiments/chat.ts"),
				lt = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				mt = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ut = s("./src/reddit/selectors/experiments/countrySites.ts"),
				pt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				bt = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				ht = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				ft = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				Ot = s("./src/reddit/selectors/i18n/index.ts"),
				xt = s("./src/reddit/selectors/meta.ts"),
				gt = s("./src/reddit/actions/pages/search/index.ts");
			Object(a.a)({
				pages: {
					comments: ct.a
				}
			}), Object(a.a)({
				features: {
					modUserNotes: at.a
				}
			});
			const vt = 25,
				jt = 100,
				Ct = Object(d.a)(st.h),
				yt = Object(d.a)(st.f),
				Et = Object(d.a)(st.e),
				_t = Object(d.a)(st.i);

			function St(e) {
				return e && e.ok
			}
			const kt = (e, t, s) => {
					const n = !e,
						o = Object(me.F)(t, {
							postId: s
						}).belongsTo,
						r = Object(ue.Q)(t, {
							identifier: o
						}),
						i = Object(tt.c)(t, {
							identifier: o
						}),
						a = !!Object(Ve.c)(t),
						c = Object(Ot.a)(t),
						d = Object(pt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return a ? (l.listingBelow = i || n, l.postFeed = l.listingBelow) : c ? l.nsfwListingBelow = !0 : l.postFeed = (i || n) && (!Object(X.i)(r) && !Object(et.d)(t, {
						postId: s
					}) && !!r || !Object(ie.i)(t) && Object(te.e)(t)), e && (l.postQASchema = Object(te.d)(t)), d && (l.listingBelow = !0), l
				},
				wt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				It = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				Nt = e => async (t, s) => {
					var n, a;
					const {
						partialPostId: c,
						partialCommentId: d
					} = e.params, {
						subredditName: b
					} = e.params || "", f = c ? Object(N.y)(c) : "", O = d && Object(J.h)(d), {
						path: v,
						queryParams: C
					} = e, y = Object(F.d)(v), E = Object(z.a)(C, s()), {
						hasSortParam: _,
						sortToUse: S
					} = Object(Y.a)(s(), f), k = null === (a = null === (n = Object(ie.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === a ? void 0 : a.route.chunk, w = ["context", "depth", "limit", q.h].reduce((e, t) => {
						const s = parseInt(C[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: b,
						hasSortParam: _,
						instanceId: E,
						include_categories: !0
					});
					_ && (w.sort = S), w.onOtherDiscussions = y, w.comment_awardings_by_current_user = !0, t(A.q(f));
					const I = s(),
						T = Object(me.F)(I, {
							postId: f
						}),
						M = Object(lt.a)(I).bucketed && Object(j.a)(e) && Object(j.b)(T);
					if (M) {
						const s = Object(i.e)(o()(e.queryParams, q.d)),
							n = Object(pe.mb)(I),
							r = Object(pe.rb)(I),
							a = Object(i.b)(f, void 0, s, n && r);
						await t(Object(gt.d)({
							key: a,
							options: s,
							subredditName: b,
							postId: f
						}))
					} else await t(Tt(f, O, w, S));
					const U = Object(pe.S)(s());
					if (T && "subreddit" === T.belongsTo.type) {
						const e = T.belongsTo.id;
						if (await Promise.all([Object(ve.i)(() => t(Object(je.c)(e)), {
								name: "subredditAchievementFlairsRequested",
								page: k,
								isLoggedIn: U
							}), Object(ve.i)(() => t(Object(Ce.c)(e)), {
								name: "subredditCustomEmojisRequested",
								page: k,
								isLoggedIn: U
							})]), !Object(ie.i)(I)) {
							Object(ht.a)(I) && t(Object(V.b)(e))
						}
						Object(le.i)(I, e) && await t(Object(g.c)(f))
					}
					if (T) {
						const n = ((e, t) => {
								const s = Object(me.U)(e, {
										postId: t
									}),
									n = Object(me.F)(e, {
										postId: t
									});
								return s && n ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), f),
							o = Object(ue.Q)(s(), {
								identifier: T.belongsTo
							});
						if (o && (e => m.zf.Redirect === Object(ne.b)(e, {
								experimentEligibilitySelector: ce,
								experimentName: m.tf
							}))(s())) return void t(Object(r.c)(o.url));
						if (T.belongsTo.type !== K.a.SUBREDDIT || T.isSponsored) {
							if (T.belongsTo.type === K.a.PROFILE) {
								const e = Object(ve.i)(() => t(B.d(o.name)), {
									name: "getProfileInfo",
									page: k,
									isLoggedIn: U
								});
								await e
							}
						} else {
							if (!!!Object(ue.W)(s(), {
									subredditId: T.belongsTo.id
								})) {
								const e = Object(ve.i)(() => t(D.o(o.name)), {
									name: "getSubredditRules",
									page: k,
									isLoggedIn: U
								});
								await e
							}
						}
						const i = kt(!1, s(), f),
							a = y;
						if (wt(a, i)) {
							Object(Oe.d)(Oe.a.LinkedPosts);
							const e = Object(Oe.c)(Oe.a.LinkedPosts);
							Object(Oe.d)(Oe.a.NsfwLinkedPosts);
							const n = Object(Oe.c)(Oe.a.NsfwLinkedPosts),
								{
									adsSeenCount: r,
									totalPostsSeenCount: c,
									sessionStartTime: d
								} = Object($.a)(s()),
								m = {
									adContext: {
										layout: G.a.Card,
										sourcePostId: f,
										clientSignalSessionData: {
											adsSeenCount: r,
											totalPostsSeenCount: c,
											sessionStartTime: d
										}
									},
									range: l.nc.WEEK.toUpperCase(),
									sort: l.R.TOP,
									subredditName: o.name
								},
								u = {
									postId: f
								},
								p = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Ve.c)(s())
								};
							Object(pt.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: n,
									nsfwListingBelowExperimentVariant: Object(ft.a)(s())
								},
								h = It(i);
							Object(ve.i)(() => t(Ze({
								...u,
								...m,
								...p,
								...b,
								...h,
								includeOtherDiscussions: a
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: U,
								page: k
							});
							0
						}
						t(Object(R.p)()), t(L.n({
							title: n
						}));
						const c = s().posts.instances[f] ? Object(z.a)(e.queryParams, s()) : T.postId;
						t(Object(x.b)(c)); {
							const e = Object(p.b)(s(), {
								subredditName: o.name
							});
							await Promise.all(e.map(e => t((e => async (t, s) => {
								const n = Object(p.h)(s(), {
									id: e
								});
								t(h({
									categoryId: e,
									rank: n + 1
								})), Object(u.pb)(Object(p.c)(s()))
							})(e))))
						}
					} else t(L.n({
						title: P.e()
					}));
					const {
						routePrefix: W
					} = e.params;
					M || (K.b[W] === K.a.PROFILE ? Object(fe.f)(s(), t, e) : Object(fe.d)(s(), t, e))
				}, Pt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], Tt = function(e, t, s, n) {
					let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (r, i, a) => {
						var c, d, m, u;
						const p = i(),
							b = Object(be.a)(e, o ? void 0 : t, s),
							{
								subredditName: h
							} = s,
							x = !o && p.pages.comments.keyToHeadCommentId.hasOwnProperty(b),
							g = p.pages.comments.api.fullyLoaded[b],
							v = p.pages.comments.api.error[b],
							j = p.pages.comments.api.pending[b],
							_ = !Object(pe.R)(p),
							S = Object(pe.m)(p),
							P = n === l.v.CHAT,
							R = !!p.platform.lastPage,
							F = P && R,
							B = Object(me.F)(p, {
								postId: e
							}),
							D = Object(dt.d)(p),
							V = o || D && (null == B ? void 0 : B.discussionType) === N.b.Chat;
						if ((j || x && !v) && !F) {
							if (x && !p.sidebarPromotedPosts.firstFetch) {
								const e = Object(ie.i)(p) ? ge.a.COMMENTS_OVERLAY : ge.a.COMMENTS;
								window.addEventListener("load", () => {
									r(Object(he.b)(e))
								})
							}
							if (!g) {
								const n = !V || t ? s : {
									...s,
									depth: 1
								};
								r(Mt(e, t, n))
							}
							return
						}
						r(f.g());
						const G = p.user.prefs.commentMode;
						r(Ct({
							key: b,
							postId: e,
							commentMode: G
						}));
						const q = {
							...s,
							...P ? {
								sort: l.v.LIVE
							} : _ ? {
								sort: s.sort,
								depth: 2
							} : {
								sort: s.sort
							}
						}; {
							const t = Object(me.F)(i(), {
								postId: e
							});
							r(Object(O.maybeShowPrivateSubredditModal)(h || "")), t && t.numComments && t.numComments > jt && (q.truncate = vt)
						}
						const K = null === (d = null === (c = Object(ie.b)(p)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
							z = Object(ve.i)(() => Object(E.a)(a.apiContext(), e, t, q, Object(ee.a)(i()), $e(i())), {
								name: "fetchCommentsPage",
								isLoggedIn: !_,
								page: K
							}),
							Y = !_ && S && Object(ve.i)(() => Object(I.d)(a.gqlContext(), Object(Z.e)(S)), {
								name: "fetchProfileKarma",
								isLoggedIn: !_,
								page: K
							}) || null,
							J = Object(mt.c)(p),
							X = Object(ve.i)(() => k(a.gqlContext(), {
								postId: e,
								includeSubredditRankings: J
							}), {
								name: "fetchCommentsPageExtra",
								isLoggedIn: !_,
								page: K
							}),
							$ = h && Object(bt.a)(p) ? Object(C.a)(a.gqlContext(), {
								subredditName: h
							}) : null;
						let te, se, ne, oe, re;
						if ([te, se, ne, oe] = await Promise.all([z, Y, X, $]), r(Object(L.o)(te.status)), St(ne) && "SubredditPost" === (null === (m = ne.body.data.postInfoById) || void 0 === m ? void 0 : m.__typename)) {
							const e = ne.body.data.postInfoById.subreddit.name;
							Object(fe.c)(i(), r, e)
						}
						if (te.ok) {
							try {
								te.body.posts = await Object(ot.a)(a.apiContext(), te.body.posts, p)
							} catch (ae) {
								nt.c.captureException(ae)
							}
							const t = Object.keys(te.body.posts).filter(e => !!te.body.posts[e].isMeta),
								s = te.body.posts[e];
							if (Object(fe.b)(i(), r, s.belongsTo.type), t.length) {
								const e = Object(ve.i)(() => Object(y.a)(a.apiContext(), s.belongsTo.id, t), {
										name: "getGovernanceData",
										page: K,
										isLoggedIn: !_
									}),
									n = await e;
								n.ok && (re = n.body)
							}
							if (St(se)) {
								const {
									data: e
								} = se.body, t = {
									karma: {
										...I.a
									}
								};
								if (Object(I.e)(e.redditorInfoByName)) {
									const s = e.redditorInfoByName.karma;
									t.karma = {
										...t.karma,
										...s
									}
								}
								te.body && te.body.account && Object.assign(te.body.account, t)
							}
							if (St(ne)) {
								const {
									data: t
								} = ne.body;
								if (t.postInfoById && Pt.includes(t.postInfoById.__typename) && (te.body.posts[e] = {
										...te.body.posts[e],
										...t.postInfoById,
										mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (u = t.postInfoById.mediaStatus) || void 0 === u ? void 0 : u.status : null,
										media: {
											...te.body.posts[e].media,
											..."media" in t.postInfoById ? t.postInfoById.media : null
										}
									}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
									const e = t.postInfoById.subreddit.detectedLanguage;
									Object(xt.d)(p) && e && Object(ut.f)(p) && await Object(it.a)(e, r);
									const {
										id: s,
										isEligibleForContentBlocking: n,
										allowedMediaInComments: o,
										directoryRankings: i
									} = t.postInfoById.subreddit;
									r(Object(U.c)({
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
							const n = Object(Q.a)(te.body, e, p),
								{
									postMeta: o
								} = te.body;
							te.body.posts[e] = {
								...te.body.posts[e],
								isRobotIndexable: Object(rt.a)(o, e)
							}, oe && te.body.subreddits[s.belongsTo.id] && (te.body.subreddits[s.belongsTo.id] = {
								...te.body.subreddits[s.belongsTo.id],
								devPlatformMetadata: oe
							}), r(yt({
								key: b,
								postId: e,
								meta: p.meta,
								governance: re,
								shouldCollapse: n,
								...te.body
							}))
						} {
							const n = Object(me.F)(i(), {
								postId: e
							});
							n && te.body.comments && Object.keys(te.body.comments).length < n.numComments ? r(Mt(e, t, s)) : te.ok && r(Rt({
								key: b
							}));
							const o = Object(ie.i)(p) ? ge.a.COMMENTS_OVERLAY : ge.a.COMMENTS;
							r(Object(he.b)(o))
						}
						if (te.ok) {
							r(W.g(b));
							const t = Object(me.F)(i(), {
									postId: e
								}),
								s = Object.keys(te.body.comments);
							if (r(A.y(t, H.a.CommentsView)), Object(le.h)(i(), {
									subredditId: t.belongsTo.id
								}) && await r(Object(M.a)({
									commentIds: s,
									postIds: [e]
								})), t && "subreddit" === t.belongsTo.type && te.body.comments) {
								const e = Object(ve.i)(() => r(Object(T.a)({
									commentIds: s,
									postIds: [t.id],
									subredditId: t.belongsTo.id
								})), {
									name: "fetchAllEconomicsData",
									page: K,
									isLoggedIn: !_
								});
								await e
							}
						} else {
							let e;
							h && (r(Object(O.subredditPending)({
								key: b
							})), e = await Object(xe.a)("subreddit", () => Object(w.a)(a.apiContext(), h, {})), r(Object(L.o)(e.status)), r(Object(O.handleSubredditPageApiError)(e, h))), r(Et({
								error: te.error,
								key: b,
								...e ? e.body : te.body
							}))
						}
					}
				}, Rt = Object(d.a)(st.g), Mt = (e, t, s) => async (n, o, r) => {
					var i, a;
					const c = Object(be.a)(e, t, s),
						d = o(),
						l = Object(pe.S)(d),
						m = Object(pe.m)(d),
						u = null === (a = null === (i = Object(ie.b)(o())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === a ? void 0 : a.route.chunk,
						p = Object(me.F)(d, {
							postId: e
						}),
						b = Object(dt.d)(d),
						h = "CHAT" === (null == p ? void 0 : p.discussionType) && b && !t,
						f = Object(E.a)(r.apiContext(), e, t, h ? {
							...s,
							depth: 1
						} : s, Object(ee.a)(d), $e(d)),
						O = l && m && Object(I.d)(r.gqlContext(), Object(Z.e)(m)) || null,
						x = Object(mt.c)(d),
						g = Object(ve.i)(() => k(r.gqlContext(), {
							postId: e,
							includeSubredditRankings: x
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: l,
							page: u
						}),
						[j, C, y] = await Promise.all([f, O, g]);
					if (j.ok) {
						if (St(C)) {
							const {
								data: e
							} = C.body, t = {
								karma: {
									...I.a
								}
							};
							if (Object(I.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							j.body && j.body.account && Object.assign(j.body.account, t)
						}
						if (St(y)) {
							const {
								data: t
							} = y.body;
							if (j.body.posts[e] = {
									...j.body.posts[e],
									...t.postInfoById,
									media: {
										...j.body.posts[e].media,
										...t.postInfoById && "media" in t.postInfoById ? t.postInfoById.media : null
									}
								}, t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const {
									id: e,
									directoryRankings: s
								} = t.postInfoById.subreddit;
								n(Object(U.c)({
									subredditAboutInfo: {
										[e]: {
											directoryRankings: s
										}
									}
								}))
							}
						}
						const t = Object(Q.a)(j.body, e, d);
						n(yt({
							key: c,
							postId: e,
							meta: d.meta,
							shouldCollapse: t,
							...j.body
						})), n(Rt({
							key: c
						}));
						const s = o().posts.models[e],
							r = s && Object(me.U)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object(de.a)(d, {
							subredditId: r.id
						}) && n(Object(v.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && j.body.comments && await n(Object(T.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else n(Et({
						error: j.error,
						key: c,
						...j.body
					}))
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/pick.js"),
				r = s.n(o),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeSearchKey/index.ts"),
				c = s("./src/lib/pageTitle/index.ts"),
				d = s("./src/reddit/actions/pages/search/index.ts"),
				l = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				u = s("./src/reddit/models/Multireddit/index.ts"),
				p = s("./src/reddit/models/Post/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				f = e => async (t, s) => {
					const n = s(),
						o = Object(b.mb)(n),
						f = Object(b.rb)(n),
						O = Object(a.e)(r()(e.queryParams, m.y)),
						{
							multiredditName: x,
							partialPostId: g,
							subredditName: v,
							username: j
						} = e.params;
					let C;
					j && x && (C = Object(u.h)(j, x));
					const y = g && Object(p.y)(g),
						E = Object(a.b)(y || v || x, j, O, o && f);
					await t(Object(d.d)({
						key: E,
						options: O,
						subredditName: v,
						username: j,
						multiredditLabel: C,
						postId: y
					}));
					let _ = !1;
					const {
						type: S = []
					} = O, k = S.indexOf(i.hc.Posts) > -1, w = S.indexOf(i.hc.Users) > -1, I = S.indexOf(i.hc.Subreddits) > -1;
					k && n.listings.postOrder.api.error[E] && (_ = !0), w && n.listings.authorOrder.api.error[E] && (_ = !0), I && n.listings.communityOrder.api.error[E] && (_ = !0), t(_ ? l.n({
						title: Object(c.e)()
					}) : l.n({
						title: h(O.q)
					}))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const o = Object(n.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(n.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(n.a)(o.a),
				i = Object(n.a)(o.b)
		},
		"./src/reddit/actions/subreddit/muting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
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
			const O = e => Object(r.f)({
					id: e,
					kind: p.b.Error,
					duration: r.a,
					text: n.fbt._("An error has occured. Please try again later", null, {
						hk: "2FpsLy"
					})
				}),
				x = (e, t) => Object(r.f)({
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
				g = (e, t) => Object(r.f)({
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
			var v = s("./src/reddit/endpoints/subreddit/about.ts");
			const j = Object(o.a)(b.i),
				C = Object(o.a)(b.h),
				y = Object(o.a)(b.G),
				E = (Object(o.a)(b.j), Object(o.a)(b.F), Object(o.a)(b.g)),
				_ = Object(o.a)(b.f),
				S = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, c;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(x(s, k({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(O(`error-muting-${t}`))
						}
					}
				},
				k = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, c;
						const d = await u(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(g(s, S({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(O(`error-muting-${t}`))
						}
					}
				},
				w = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, c;
						const d = await m(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
							subredditAboutInfo: {
								[t]: {
									isMuted: !0
								}
							}
						})), e(x(s, I({
							subredditId: t,
							subredditName: s
						})));
						else {
							e(O(`error-muting-${t}`))
						}
					}
				},
				I = e => {
					let {
						subredditId: t,
						subredditName: s,
						successCallback: n
					} = e;
					return async (e, o, r) => {
						let {
							gqlContext: i
						} = r;
						var a, c;
						const d = await u(i(), t);
						if (d.ok && d.body && (null === (c = null === (a = d.body) || void 0 === a ? void 0 : a.data.deleteSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) n && n(), e(Object(h.c)({
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
							e(O(`error-muting-${t}`))
						}
					}
				},
				N = e => {
					let {
						subredditId: t,
						notificationLevel: s
					} = e;
					return async (e, o, a) => {
						let {
							gqlContext: c
						} = a;
						var l, m;
						const u = Object(h.a)(s),
							b = await ((e, t, s) => Object(i.a)(e, {
								...d,
								variables: {
									input: {
										...s,
										subredditId: t
									}
								}
							}))(c(), t, u);
						b.ok && b.body && (null === (m = null === (l = b.body) || void 0 === l ? void 0 : l.data.updateSubredditMuteAndNotificationLevelSettings) || void 0 === m ? void 0 : m.ok) ? (e(y({
							subredditId: t,
							notificationLevel: s
						})), e(Object(r.f)({
							kind: p.b.SuccessCommunityGreen,
							text: Object(h.b)(s)
						}))) : e(Object(r.f)({
							kind: p.b.Error,
							text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
								hk: "4avFFV"
							})
						}))
					}
				},
				P = () => async (e, t, s) => {
					let {
						gqlContext: o
					} = s;
					const a = await (e => Object(i.a)(e, c))(o());
					if (a.ok && a.body && a.body.data) {
						const {
							data: t
						} = a.body, s = (t && t.identity.mutedSubreddits).edges.map(e => e.node);
						e(j({
							nodes: s
						}))
					} else e(C()), e(Object(r.f)({
						duration: r.a,
						kind: p.b.Error,
						text: n.fbt._("Failed to get muted subreddits, please try again.", null, {
							hk: "2dCj3Q"
						})
					}))
				}, T = e => {
					let {
						subredditId: t,
						subredditName: s
					} = e;
					return async (e, n, o) => {
						let {
							gqlContext: r
						} = o;
						var i, a;
						const c = await u(r(), t);
						if (c.ok && c.body && (null === (a = null === (i = c.body) || void 0 === i ? void 0 : i.data.deleteSubredditMuteSettings) || void 0 === a ? void 0 : a.ok)) e(E(t)), e(g(s));
						else {
							e(O(`error-unmuting-${t}`))
						}
					}
				}, R = e => {
					let {
						subredditName: t
					} = e;
					return async (e, s, o) => {
						let {
							gqlContext: i
						} = o;
						var a, c;
						const d = s(),
							l = Object(f.t)(d).find(e => e.name.toLowerCase() === t.toLowerCase());
						if (l) {
							const t = l.name,
								s = `error-muting-duplicate-${t}`;
							return e(Object(r.f)({
								id: s,
								kind: p.b.Error,
								duration: r.a,
								text: n.fbt._("Sorry, r/{subreddit name} is already muted.", [n.fbt._param("subreddit name", t)], {
									hk: "4n64wl"
								})
							}))
						}
						const u = await Object(v.a)(i(), t, !0),
							{
								data: b
							} = u.body,
							h = b && b.subreddit;
						if (!u.ok || null === h) {
							return e(((e, t) => Object(r.f)({
								id: e,
								kind: p.b.Error,
								duration: r.a,
								text: n.fbt._("Sorry, r/{subreddit name} isn't a community.", [n.fbt._param("subreddit name", t)], {
									hk: "3UtglL"
								})
							}))(`error-muting-${t}`, t))
						}
						const g = h.id,
							j = await m(i(), g);
						if (j.ok && j.body && (null === (c = null === (a = j.body) || void 0 === a ? void 0 : a.data.updateSubredditMuteSettings) || void 0 === c ? void 0 : c.ok)) e(_([h])), e(x(h.name));
						else {
							e(O(`error-muting-${g}`))
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
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				i = s("./src/reddit/actions/notificationsInbox/index.ts"),
				a = s("./src/reddit/actions/subreddit/constants.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(o.a)(a.z),
				p = Object(o.a)(a.y),
				b = Object(o.a)(a.x),
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
			const O = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: o,
					undoCallback: a
				} = e;
				return async (e, l, O) => {
					let {
						gqlContext: x
					} = O;
					var g, v, j;
					e(p());
					const C = h(s),
						y = await Object(d.b)(x(), t, C);
					if ((null === (v = null === (g = y.error) || void 0 === g ? void 0 : g.fields) || void 0 === v ? void 0 : v.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(y.body) && (null === (j = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === j ? void 0 : j.length)) return e(b()), e(Object(c.f)({
						kind: m.b.Error,
						text: n.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					y.ok && (e(Object(r.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), o && o(), e(a ? Object(c.f)(Object(c.e)(f(s), m.b.Undo, n.fbt._("Undo", null, {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				} = e, l = Object(r.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!s,
					[c.a.borders]: "classic" === s,
					[c.a.borderTop]: "compact" === s || "conversation" === s,
					[c.a.borderBottom]: "card" === s
				});
				return o.a.createElement("div", d({
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				l = s("./src/reddit/components/BackToTop/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(a.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			t.a = e => {
				let {
					className: t,
					isOverlay: s,
					style: n
				} = e;
				const a = Object(r.e)(d.a);
				return o.a.createElement("div", {
					className: Object(i.a)(t, m.a.container),
					style: n
				}, o.a.createElement(c.a, u({
					className: m.a.button,
					onClick: () => b(s)
				}, a && {
					priority: c.c.Secondary,
					rplStyle: !0
				}), p._("Back to Top", null, {
					hk: "YjBtV"
				})))
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/helpers/trackers/modTools.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				p = s("./src/reddit/components/Hovercards/helpers.ts"),
				b = s("./src/reddit/components/PostTopMeta/index.tsx"),
				h = s("./src/reddit/hooks/useIsOverlay.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/redditGQL/types.ts");
			const x = Object(l.v)();
			t.a = x(e => {
				let {
					pageLayer: t,
					postOrComment: s,
					className: l
				} = e;
				var x;
				const g = Object(h.a)(),
					v = Object(i.d)(),
					j = Object(a.a)(),
					C = (null === (x = null == t ? void 0 : t.urlParams) || void 0 === x ? void 0 : x.pageName) === d.vb.Modqueue,
					y = Object(o.useCallback)(() => {
						const e = Object(p.b)({
							itemId: s.id,
							tooltipIdPrefix: u.a,
							tooltipType: g ? b.f.Lightbox : void 0
						});
						v(Object(m.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: O.z.Note
							}
						})), j(Object(c.a)(s.id, s.authorId))
					}, [s, v, g, j]);
				return !C || Object(f.p)(s.author) ? null : r.a.createElement("button", {
					className: l,
					onClick: y
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
				rplStyle: "_2sQjgE-zw2MQovQiJwdvVD",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return o.a.createElement(i.b, l({
					className: Object(r.a)(d.a.CallToActionButton, t, {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				O = Object(i.b)(f),
				x = e => {
					let {
						isCommentBoxDesignEnabled: t,
						isTopLevelComment: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						className: Object(m.a)(p.a.spacer, {
							[p.a.isCommentBoxDesign]: t,
							[p.a.isTopLevelComment]: s
						})
					}, n)
				},
				g = () => r.a.createElement("div", {
					className: Object(m.a)(p.a.byline, Object(d.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(m.a)(p.a.avatar, Object(d.a)({
						isLoading: !0
					}))
				}),
				j = e => r.a.createElement(x, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(g, null), r.a.createElement(c.a, {
					className: p.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				C = O(j),
				y = Object(n.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("CommentsPage~Reddit~RichTextEditor~reddit-components-LargePost~reddit-components-MediumPost~reddit-c~cad4f428"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("RichTextEditor")]).then(s.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
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
				E = e => r.a.createElement(y, b({}, e, {
					fallback: r.a.createElement(C, {
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
			var n, o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
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
				const t = Object(r.useRef)(null),
					[s, d] = Object(r.useState)(!1),
					u = Object(r.useCallback)(e => {
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
					className: Object(o.a)(l.a.effectContainer, l.a[p + "EffectContainer"]),
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
				o = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = s.n(r);
			const a = n.a.wrapped(o.c, "RestrictedButton", i.a);
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				O = s("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				x = s.n(O);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v, j, C = s("./node_modules/lodash/defer.js"),
				y = s.n(C),
				E = s("./src/lib/collectible-expressions/index.ts"),
				_ = s("./src/lib/lessComponent.tsx"),
				S = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				w = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				I = s("./src/reddit/helpers/trackers/modTools.ts"),
				N = s("./src/reddit/selectors/tooltip.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/reportFlow/index.ts"),
				M = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = s("./src/reddit/helpers/trackers/lightbox.ts"),
				A = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				U = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				V = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				W = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/subreddit.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				K = s("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				z = s.n(K);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(v || (v = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(j || (j = {}));
			const Q = (e, t) => {
					const s = z.a[t],
						n = z.a[e];
					return Object(d.a)(s, n)
				},
				Y = e => Object(d.a)(z.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[z.a.isInOverlay]: e.isInOverlay,
					[z.a.isModModeEnabled]: e.isModModeEnabled,
					[z.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var J = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				X = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				Z = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				$ = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				ee = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				te = s("./src/reddit/components/ModModeReports/helpers.ts"),
				se = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				oe = s("./src/reddit/components/ReportFlow/new.tsx"),
				re = s("./src/reddit/components/ShareMenu/index.tsx"),
				ie = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ce = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				de = s("./src/reddit/layout/row/Inline/index.tsx"),
				le = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				me = s("./src/reddit/icons/fonts/index.tsx"),
				ue = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				pe = s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				be = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				he = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				fe = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Oe = s("./src/reddit/models/Toast/index.ts"),
				xe = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				ge = s("./src/devPlatform/constants.ts"),
				ve = s("./src/reddit/selectors/experiments/devPlatform.ts"),
				je = s("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ce = s.n(je);
			const ye = _.a.wrapped(ue.a, "CommentIcon", Ce.a),
				Ee = _.a.wrapped(fe.a, "Report", Ce.a),
				_e = _.a.wrapped(be.a, "IgnoreReport", Ce.a),
				Se = _.a.wrapped(ee.a, "ModActionsMenu", Ce.a),
				ke = _.a.div("OverflowMenuSpacer", Ce.a),
				we = _.a.wrapped(se.a, "DropdownRow", Ce.a),
				Ie = _.a.wrapped(de.a, "Flatlist", Ce.a),
				Ne = _.a.button("Button", Ce.a),
				Pe = _.a.wrapped(J.a, "ModToolsFlatlist", Ce.a),
				Te = _.a.wrapped(ae.a, "ViewReportsDropdown", Ce.a),
				Re = e => `Comment-${e}--Modal--DeleteComment`,
				Me = e => `Distinguish--Dropdown--${e}`,
				Fe = e => `${e}-overflow-menu`,
				Le = e => `View--Reports--${e}`,
				Ae = Object(a.c)({
					claimedFreeAward: V.b,
					currentUser: G.m,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(B.a)(e) === Re(s.id)
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(N.b)(Me(s.id))(e)
					},
					isFollowed: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.y)(e, {
							commentId: s.id
						})
					},
					isFollowedCommentExpired: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.A)(e, {
							commentId: s.id
						})
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.E)(e, {
							commentId: s.id
						})
					},
					isReportsDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(N.b)(Le(s.id))(e)
					},
					isLoggedIn: G.S,
					postIsArchived: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(W.z)(e, {
							postId: s.postId
						})
					},
					postAuthorIsBlocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(W.w)(e, {
							postId: s.postId
						})
					},
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(W.A)(e, {
							postId: s.postId
						})
					},
					commentPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.m)(e, {
							commentId: s.id
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === s.id
					},
					sendRepliesToggled: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(D.K)(e, {
							commentId: s.id
						})
					},
					subredditAboutInfo: (e, t) => {
						let {
							subreddit: s
						} = t;
						return s ? Object(H.z)(e, {
							subredditName: s.name
						}) : void 0
					},
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(W.U)(e, {
							postId: s.postId
						})
					},
					reportingRevampEnabled: U.a,
					isPostUnrepliable: (e, t) => {
						let {
							comment: s
						} = t;
						var n;
						return null === (n = Object(W.F)(e, {
							postId: s.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isDevPlatformEnabled: e => Object(ve.a)(e)
				});
			class Be extends r.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(L.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(I.c)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(I.g)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						const e = Object(w.a)(this.props.comment);
						Object(E.a)(e) ? this.props.showToast({
							text: n.fbt._("Sorry, currently you cannot edit Collectible Expression comments on Web.", null, {
								hk: "4dlNfM"
							}),
							duration: 8e3,
							kind: Oe.b.SuccessLockComment
						}) : (this.props.sendEvent(Object(I.f)("edit", this.props.comment.id)), this.props.handleEdit())
					}, this.handleGild = async () => {
						var e;
						const t = Object(M.d)(M.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(n(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(I.f)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(I.c)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(I.c)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: s,
							isFollowed: n
						} = this.props;
						e(n ? A.a.UNFOLLOWED : A.a.FOLLOWED), t(n ? Object(I.h)("follow", s.id) : Object(I.c)("follow", s.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(I.d)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(oe.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: ne.b,
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
						onToggleReportsDropdown: O,
						moderatorPermissions: x,
						modModeEnabled: g,
						postIsArchived: C,
						postAuthorIsBlocked: E,
						postIsLocked: _,
						renderedInOverlay: S,
						sendEvent: k,
						subreddit: w,
						subredditAboutInfo: N,
						toggleDeleteCommentModal: P,
						toggleSendReplies: T,
						trackCommentClick: R,
						isPostUnrepliable: M,
						isDevPlatformEnabled: L
					} = this.props, B = Object(F.a)(x), D = !!s && s.displayText === e.author, U = !!s && s.isEmployee, V = e.unrepliableReason, W = !E && !Object(A.g)(e) && !M && !V && !M && !(N && N.userIsBanned) && (_ || C || B && p || e.isLocked ? B && p : p || m), H = Object(te.a)(e), G = B && D && !e.bannedBy, K = D && U && !e.bannedBy, z = G || K, J = !Object(A.g)(e) && s && e.isGildable && !M && !(V && "[deleted]" === e.author), ee = !C && !V, ne = [];
					W && ne.push(r.a.createElement(Ne, {
						disabled: b,
						key: "reply",
						onClick: () => {
							l(), y()(() => R("reply", e.id)())
						}
					}, r.a.createElement(ye, null), n.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), J && ne.push({
						breakpointGroup: j.LoggedInUser,
						icon: r.a.createElement(le.a, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => n.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), ne.push(r.a.createElement(re.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: i,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == w ? void 0 : w.type
					}, r.a.createElement(Ne, {
						onClick: () => this.sendCommentEventWithName("share")
					}, n.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), D || ne.push({
						breakpointGroup: j.LoggedInUser,
						icon: r.a.createElement(fe.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => n.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), ne.push({
						breakpointGroup: j.LoggedInUser,
						icon: r.a.createElement(me.a, {
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
					}), D && ne.push({
						breakpointGroup: j.LoggedInUser,
						icon: r.a.createElement(me.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => n.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), ee && ne.push({
						breakpointGroup: j.LoggedInUser,
						icon: r.a.createElement(me.a, {
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
					const oe = ne.map(e => r.a.isValidElement(e) ? e : r.a.createElement(Ne, {
							className: Q(e.breakpointGroup, v.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						ie = ne.map(e => r.a.isValidElement(e) ? null : r.a.createElement(we, {
							className: Q(e.breakpointGroup, v.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Ce.a.dropdownRowText
						}, e.icon));
					return r.a.createElement(o.Fragment, null, r.a.createElement(Ie, {
						className: Object(d.a)(Y({
							depth: c,
							isInOverlay: S,
							isModModeEnabled: B && g || L,
							isFollowCommentEnabled: ee
						}), t)
					}, oe, r.a.createElement(ke, {
						className: D ? void 0 : Q(j.LoggedInUser, v.HideIfVWLarger)
					}, r.a.createElement(se.b, {
						className: Ce.a.overflowMenu,
						disabled: b,
						dropdownId: Fe(e.id),
						onClick: () => k(Object(I.c)("comment_overflow_menu", e.id))
					}, ie, D && r.a.createElement(r.a.Fragment, null, r.a.createElement(we, {
						displayText: n.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Ce.a.dropdownRowText
					}, r.a.createElement(me.a, {
						name: "delete"
					})), r.a.createElement(ce.a, {
						text: n.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: T,
						isSelected: this.props.sendRepliesToggled
					})), r.a.createElement(xe.a, {
						contextType: ge.a.COMMENT,
						contextData: e
					}))), this.props.isConfirmModalOpen && r.a.createElement(Z.a, {
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
						toggleModal: P,
						trackClick: () => {},
						withOverlay: !0
					}), B && r.a.createElement(r.a.Fragment, null, g && r.a.createElement(Pe, {
						className: Q(j.Moderator, v.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: D
					}), r.a.createElement(Se, {
						className: g ? Q(j.Moderator, v.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => k(Object(I.c)("comment_mod_action_menu", e.id))
					}, r.a.createElement(he.a, null), r.a.createElement(q.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object(te.c)(e) && !g && r.a.createElement(X.a, {
						text: `${H}`,
						onClick: () => {
							O(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Le(e.id)
					}, r.a.createElement(Te, {
						model: e,
						onIgnoreReports: () => {
							f(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Le(e.id)
					}), e.ignoreReports ? r.a.createElement(_e, null) : r.a.createElement(Ee, null)), z && r.a.createElement(X.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, r.a.createElement(pe.a, null), r.a.createElement($.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: U,
						isUserMod: B,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Me(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var De = Object(i.b)(Ae, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n
					} = t;
					return {
						deleteComment: () => n && e(Object(p.i)(s.id, s.postId)),
						handleDelete: () => {
							e(Object(T.i)(Re(s.id))), e(Object(k.h)({
								tooltipId: Fe(s.id)
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
						onGildClick: (t, n) => e(Object(P.d)({
							awardId: n,
							correlationId: t,
							thingId: s.id
						})),
						onIgnoreReports: () => e(Object(b.g)(s.id)),
						onReportClick: () => e(Object(R.c)(s.id)),
						onToggleSave: () => e(Object(u.o)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(k.h)({
							tooltipId: Me(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(k.h)({
							tooltipId: Le(s.id)
						})),
						showToast: t => e(Object(S.f)(t)),
						toggleDeleteCommentModal: () => e(Object(T.i)(Re(s.id))),
						toggleSendReplies: () => e(Object(p.l)(s.id))
					}
				})(Object(ie.c)(Be)),
				Ue = s("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ve = s.n(Ue);
			var We = r.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return r.a.createElement("div", {
						className: Ve.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				He = s("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ge = s.n(He);
			var qe = r.a.memo(e => r.a.createElement("div", {
					className: Ge.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ke = s("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				ze = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				Qe = s("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Ye = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Je = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				Xe = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ze = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				$e = s("./src/reddit/components/ModModeReports/index.tsx"),
				et = s("./src/reddit/components/PostTopMeta/index.tsx"),
				tt = s("./src/reddit/components/RichTextJson/index.tsx"),
				st = s("./src/reddit/components/UserIcon/index.tsx"),
				nt = s("./src/reddit/components/UserIcon/constants.ts"),
				ot = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				rt = s("./src/reddit/helpers/author.ts"),
				it = s("./src/reddit/constants/componentTestIds.ts"),
				at = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ct = s("./src/reddit/contexts/Visibility.tsx"),
				dt = s("./src/reddit/controls/ErrorText/index.tsx"),
				lt = s("./src/reddit/controls/InternalLink/index.tsx"),
				mt = s("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				ut = s("./src/reddit/helpers/flair.ts"),
				pt = s("./src/reddit/models/Subreddit/index.ts"),
				bt = s("./src/reddit/models/User/index.ts"),
				ht = s("./src/reddit/models/Vote/index.ts"),
				ft = s("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Ot = s("./src/reddit/selectors/commentSelector.ts"),
				xt = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				gt = s("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				vt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				jt = s("./src/reddit/selectors/poll/index.ts"),
				Ct = s("./src/reddit/selectors/userPrefs.ts"),
				yt = s("./src/reddit/selectors/moderatingComments.ts"),
				Et = s("./src/reddit/components/Comments/Comment/index.m.less"),
				_t = s.n(Et),
				St = s("./src/config.ts"),
				kt = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				wt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				It = s("./src/reddit/helpers/trackers/comment.ts");

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Pt = 300,
				Tt = _.a.wrapped((function(e) {
					const {
						className: t,
						...s
					} = e;
					return r.a.createElement("button", g({}, s, {
						className: Object(d.a)(t, x.a.expandButton)
					}), r.a.createElement(f.a, {
						className: x.a.expandIcon
					}))
				}), "ExpandButton", _t.a),
				Rt = _.a.wrapped(De, "FlatList", _t.a),
				Mt = _.a.wrapped(dt.b, "ErrorText", _t.a),
				Ft = _.a.wrapped(Ye.a, "HorizontalVotes", _t.a),
				Lt = _.a.div("ActionBar", _t.a),
				At = _.a.wrapped(ze.a, "TopMeta", _t.a),
				Bt = _.a.div("CommentContentWrapper", _t.a),
				Dt = _.a.wrapped(Je.b, "AuthorHovercard", _t.a),
				Ut = Object(at.v)(),
				Vt = Object(i.b)(() => Object(a.c)({
					comment: (e, t) => Object(Ot.c)(e, t),
					currentProfileModPermissions: at.i,
					depth: (e, t) => Object(D.j)(e, t),
					collapsed: yt.b,
					collapsedBecauseCrowdControl: yt.a,
					currentUser: G.m,
					flair: D.e,
					focused: (e, t) => !t.noFocus && Object(D.t)(e, t),
					highlightAnimationDisabled: Ct.d,
					isAdmin: G.M,
					isEditing: D.z,
					isLoggedIn: G.S,
					isPendingDeletion: D.E,
					isPresenceConsumptionExpEnabled: gt.c,
					moderatorPermissions: (e, t) => {
						const s = Object(Ot.c)(e, t);
						return s ? Object(vt.n)(e, {
							subredditId: s.subredditId
						}) : null
					},
					prediction: jt.f,
					modModeEnabled: at.W,
					errorMsgs: D.I,
					replyFormOpen: D.L,
					subreddit: at.s,
					subredditType: D.O,
					isOnlineConsumptionLoadTest: gt.a,
					isOnlineUserPref: G.X,
					userIsBanned: (e, t) => {
						const s = Object(Ot.c)(e, t);
						return !!s && Object(H.ib)(e, {
							subredditId: s.subredditId
						})
					},
					isBlockingInterstitialEnabled: xt.b,
					isBlockingInterstitialV2Enabled: xt.c
				}), (e, t) => {
					let {
						commentId: s,
						commentsPageKey: n,
						scrollToAndRemeasure: o,
						trackCommentClick: r
					} = t;
					return {
						onCollapseClick: () => e(Object(u.q)({
							commentId: s,
							commentsPageKey: n,
							scrollToAndRemeasure: o
						})),
						onIgnoreReports: () => e(Object(b.g)(s)),
						onVoteClick: t => {
							const [n, o] = t === ht.a.upvoted ? [Object(u.s)(s), "upvote_comment"] : [Object(u.k)(s), "downvote_comment"];
							r(o, s)(), e(n)
						},
						onMediaReload: () => {
							e(Object(u.l)(s))
						}
					}
				}),
				Wt = Object(m.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Ht = e => r.a.createElement("div", e, e.children),
				Gt = e => r.a.createElement(r.a.Fragment, null, e.children),
				qt = Ut(Vt(e => {
					var t;
					const {
						childrenInfo: s,
						clearHovered: i,
						collapsed: a,
						collapsedBecauseCrowdControl: m,
						comment: u,
						commentsPageKey: b,
						currentProfileModPermissions: f,
						currentUser: O,
						depth: x,
						errorMsgs: g,
						flair: v,
						flatlist: j,
						focused: C,
						hasAwardGradient: y,
						highlightAnimationDisabled: E,
						highlightTreatment: _,
						index: S,
						isActive: k,
						isAdmin: I,
						isAvatarsInCommentsEnabled: N,
						isBlockingInterstitialEnabled: P,
						isBlockingInterstitialV2Enabled: T,
						isEditing: R,
						isFirstInList: M,
						isHighlighted: L,
						isLoggedIn: B,
						isOnlineConsumptionLoadTest: D,
						isOnlineUserPref: U,
						isPendingDeletion: V,
						isPresenceConsumptionExpEnabled: W,
						moderatorPermissions: H,
						modModeEnabled: G,
						noSpacing: q = !1,
						onCommentAuthorClick: K,
						onCommentTimestampClick: z,
						onCollapseClick: Q,
						onIgnoreReports: Y,
						onLineMouseOver: J,
						onPresenceIndicatorInViewport: X,
						onVoteClick: Z,
						postId: $,
						prediction: ee,
						renderedInOverlay: se,
						replyFormOpen: ne,
						restrictHeight: oe,
						rtJSONRedditStyle: re,
						showBlockingInterstitial: ae,
						subreddit: ce,
						subredditType: de,
						trackCommentClick: le,
						userIconSmall: me,
						userIsBanned: ue,
						onClickRevealSpoilerText: pe,
						onMediaReload: be
					} = e, he = u.isDeleted, fe = !R && !he && !!g && g.length > 0, Oe = Object(l.a)(c.c.edit, u.id), xe = Object(l.a)(c.c.replyToComment, u.id), ge = Object(F.a)(H), ve = Object(Ze.a)(u), je = Object(te.c)(u), Ce = u.authorIsContractor && de === pt.g.EmployeesOnly, ye = u.isLocked, Ee = ge && G, _e = !R && !he && (B || N), Se = N && !u.unrepliableReason, ke = !!O && Object(bt.e)(O) === u.author, [we, Ie] = Object(o.useState)(null), [Ne, Pe] = Object(o.useState)(null), Te = Object(o.useRef)(null), Re = Object(A.f)(u) || Object(A.g)(u), Me = Re ? Ht : lt.default, Fe = Object(A.f)(u) ? Gt : Dt, Le = Object(ie.b)();
					Object(o.useEffect)(() => {
						if (!R && !he && (y && Ie(r.a.createElement(qe, null)), null !== _)) {
							if (_.glowHexColor) {
								const e = _.glowHexColor;
								Ie(r.a.createElement(We, {
									hexColor: e
								}))
							}
							if (_.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = _.effectHighlight;
								Pe(r.a.createElement(Ke.b, {
									prefersReducedAnimation: E,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [R, he, y, E, _]);
					const Ae = Object(o.useCallback)(() => {
							Le(Object(It.c)(u.id))
						}, [Le, u.id]),
						Be = Object(ct.b)();
					(P || T) && Be && S >= xt.a - 1 && ae();
					const De = !he && !Object(A.f)(u) && (!ue || ue && ke) && !Object(A.g)(u) && B,
						Ue = Object(o.useCallback)(() => {
							De && W && !ke && X && X(u.id)
						}, [u.id, X, De, W, ke]),
						Ve = Object(w.a)(u),
						He = !!O && Object(bt.e)(O) === u.author ? null == O ? void 0 : O.accountIcon : u.profileImage,
						Ge = Object(kt.c)(He),
						ze = Ge || Object(kt.b)(He);
					return r.a.createElement("div", {
						key: `comment-${u.id}`,
						className: Object(d.a)(`Comment ${u.id}`, _t.a.CommentWrapper, {
							[_t.a.highlightComment]: L,
							[_t.a.deleted]: he,
							[_t.a.focused]: C,
							[_t.a.redesign]: N,
							[_t.a.topLevel]: !x,
							[_t.a.noSpacing]: q
						})
					}, we, Ne, !R && !he && M && r.a.createElement("div", {
						className: _t.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${St.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), r.a.createElement(Tt, {
						className: Object(d.a)(u.id, {
							[_t.a.hidden]: !a,
							[_t.a.visible]: a
						}),
						onClick: () => {
							i(), Q(), le("collapse", u.id)()
						},
						onMouseOver: () => J(u.id),
						onMouseOut: i
					}), Object(rt.a)(u.author) ? ce ? r.a.createElement(wt.b, {
						className: Object(d.a)(_t.a.UserIconContainer, me && _t.a.UserIconContainerSmall),
						subredditOrProfile: ce,
						linkTo: `/user/${u.author}/`
					}) : null : r.a.createElement(Fe, {
						alwaysShowChildren: !0,
						collapsed: a,
						hoverDivClassName: _t.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(A.g)(u),
						postOrComment: u,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: se ? et.f.Lightbox : void 0
					}, r.a.createElement(Me, {
						className: Object(d.a)(_t.a.UserIconContainer, me && _t.a.UserIconContainerSmall),
						"data-testid": Re ? void 0 : "comment_author_icon",
						onClick: Re ? void 0 : K,
						to: `/user/${u.author}/`
					}, Be ? r.a.createElement(st.a, {
						isNft: ze,
						className: Object(d.a)(_t.a.UserIcon, {
							[_t.a.v1NftTreatment]: Ge
						}),
						iconUrl: He,
						isNSFW: u.profileOver18 || !1,
						nsfwIconUrl: nt.a,
						userName: u.author,
						isHighlighted: L,
						shouldShowPresenceIndicator: De && W,
						onPresenceIndicatorInViewport: Ue,
						isCommentAuthorBlocked: Object(A.g)(u),
						collapsed: a,
						shouldUseOnlineOverride: ke,
						isOnlineOverrideValue: U,
						isOnlineStatusLoadTest: De && D,
						authorId: u.authorId
					}) : r.a.createElement("div", {
						className: _t.a.UserIcon
					}))), r.a.createElement(Bt, {
						className: Object(d.a)({
							[_t.a.isActive]: k,
							[_t.a.isCollapsed]: a,
							[_t.a.isLocked]: ye && Ee,
							[_t.a.isPendingDeletion]: V,
							[_t.a.isRemoved]: !!u.bannedBy && Ee || u.isDeleted && I
						})
					}, r.a.createElement(mt.a, null, n.fbt._("level {depth}", [n.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), r.a.createElement(At, {
						userHasNft: ze,
						childrenInfo: s,
						className: Object(d.a)({
							[_t.a.collapsed]: a,
							[_t.a.noFlair]: Object(ut.o)(v || null)
						}),
						collapsed: a,
						collapsedBecauseCrowdControl: m,
						comment: u,
						commentsPageKey: b,
						flair: v,
						isAdmin: I,
						isPostComment: !0,
						onCommentAuthorClick: K,
						onCommentTimestampClick: z,
						renderedInOverlay: se,
						renderContractorBadge: Ce
					}), !a && r.a.createElement(o.Fragment, null, R && r.a.createElement(h.a, {
						className: Object(d.a)(_t.a.EditCommentForm, _t.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: b,
						depth: x,
						draftType: c.c.edit,
						draftKey: Oe,
						postId: $,
						rtJson: Object(w.a)(u),
						mediaMetadata: u.media && u.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: u.id,
						submitAction: e => Object(p.j)({
							id: u.id,
							commentsPageKey: b,
							draftKey: Oe,
							formData: e
						}),
						submitButtonText: n.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !R && (!he || I) && r.a.createElement("div", {
						"data-testid": it.d,
						ref: Te,
						className: Object(d.a)(_t.a.CommentBody, {
							[_t.a.restrictHeight]: !(!oe || !Te.current) && Te.current.clientHeight > Pt
						})
					}, ee ? r.a.createElement(Qe.a, {
						comment: u,
						prediction: ee
					}) : r.a.createElement(tt.b, {
						content: Ve,
						mediaMetadata: u.media && u.media.mediaMetadata,
						expressionAssetData: null === (t = u.media) || void 0 === t ? void 0 : t.expressionAssetData,
						redditStyle: re,
						rtJsonElementProps: Wt(e),
						onClickRevealSpoilerText: pe,
						mediaProps: {
							alignLeft: !0,
							renderSmallMedia: !0,
							onReload: be,
							onClick: Ae
						}
					}), r.a.createElement(ft.b, {
						content: Ve
					})), G && ge && ve && r.a.createElement(Xe.a, {
						thing: u
					}), G && ge && je && r.a.createElement($e.a, {
						onIgnoreReports: Y,
						reportable: u
					}), null != j ? j : _e && r.a.createElement(Lt, null, Se && r.a.createElement(Ft, {
						downvoteButtonClassName: _t.a.voteButton,
						downvoteClassName: _t.a.upDownVote,
						model: u,
						onVoteClick: Z,
						scoreClassName: _t.a.score,
						upvoteButtonClassName: _t.a.voteButton,
						upvoteClassName: _t.a.upDownVote
					}), r.a.createElement(Rt, {
						comment: u,
						commentsPageKey: b,
						depth: x,
						isAvatarsInCommentsEnabled: N,
						collapsedBecauseCrowdControl: m,
						modModeEnabled: G,
						moderatorPermissions: f || H,
						renderedInOverlay: se,
						isCommentFocused: C,
						subreddit: ce,
						trackCommentClick: le
					})), fe && g.map(e => r.a.createElement(Mt, {
						key: e
					}, e)), ne && r.a.createElement(h.a, {
						className: Object(d.a)(_t.a.EditCommentForm, _t.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: b,
						depth: x,
						draftType: c.c.replyToComment,
						draftKey: xe,
						isTopLevelComment: !1,
						parentCommentId: u.id,
						postId: $,
						submitAction: (e, t) => {
							let {
								validate: s,
								...n
							} = e;
							return s ? Object(p.v)({
								commentsPageKey: b,
								draftKey: xe,
								parentCommentDepth: x,
								parentCommentId: u.id,
								formData: n,
								editorMode: t
							}) : Object(p.o)({
								commentsPageKey: b,
								draftKey: xe,
								parentCommentDepth: x,
								parentCommentId: u.id,
								formData: n,
								editorMode: t
							})
						},
						submitButtonText: n.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.a = e => r.a.createElement(ot.a.Consumer, null, t => r.a.createElement(qt, Nt({}, e, {
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
				return k
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/times.js"),
				r = s.n(o),
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
				O = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				x = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				v = s("./src/reddit/icons/svgs/LiveChat/index.tsx"),
				j = s("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				C = s("./src/reddit/components/Comments/States/index.m.less"),
				y = s.n(C);
			const E = l.a.p("EmptyTitle", y.a),
				_ = l.a.p("ErrorTitle", y.a),
				S = l.a.p("EmptyText", y.a),
				k = e => {
					let {
						className: t,
						isChat: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(y.a.StateContainer, t)
					}, s ? a.a.createElement(v.a, {
						className: y.a.LiveChatIcon
					}) : a.a.createElement(g.a, {
						className: y.a.CommentsIcon
					}), a.a.createElement(E, null, s ? n.fbt._("no messages yet", null, {
						hk: "QOUnY"
					}) : n.fbt._("no comments yet", null, {
						hk: "1yqeoX"
					})), a.a.createElement(S, null, n.fbt._("Be the first to share what you think!", null, {
						hk: "479v5B"
					})))
				},
				w = () => a.a.createElement("div", {
					className: y.a.StateContainer
				}, a.a.createElement(g.a, {
					className: y.a.CommentsIcon
				}), a.a.createElement(E, null, n.fbt._("no other discussions yet", null, {
					hk: "2N7BWs"
				})), a.a.createElement(S, null, n.fbt._("Be the first to post the same link or crosspost in another community!", null, {
					hk: "4yirBw"
				}))),
				I = e => {
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
				N = Object(c.b)(null, (e, t) => {
					let {
						postId: s,
						commentId: n,
						sort: o
					} = t;
					return {
						onClick: () => e(Object(m.commentsPageDataRequested)(s, n, {
							sort: o
						}, o))
					}
				})(e => {
					let {
						apiError: t,
						onClick: s
					} = e;
					return a.a.createElement("div", {
						className: y.a.StateContainer
					}, a.a.createElement(j.a, {
						className: y.a.SnooFacepalm
					}), a.a.createElement(_, null, t ? Object(b.a)({
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
				P = e => {
					let {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(y.a.StateContainer, y.a.ErrorFullPage)
					}, a.a.createElement(N, {
						postId: t,
						commentId: s,
						sort: n,
						apiError: o
					}))
				},
				T = l.a.wrapped(e => {
					let {
						className: t
					} = e;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement(u.a, null))
				}, "LoadingFullPage", y.a),
				R = l.a.div("CommentsPlaceholderContainer", y.a),
				M = l.a.div("CommentPlaceholder", y.a),
				F = l.a.div("Avatar", y.a),
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
					return a.a.createElement(R, null, r()(10, e => a.a.createElement(M, {
						key: e
					}, s && a.a.createElement(a.a.Fragment, null, t ? a.a.createElement(F, {
						className: Object(f.a)({
							isLoading: !0
						})
					}) : a.a.createElement(L, null, a.a.createElement(x.b, {
						className: y.a.Upvote
					}), a.a.createElement(O.a, {
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				O = s.n(f),
				x = s("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				v = x.a.wrapped(l.c, "StyledTooltip", O.a),
				j = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.sb)(e),
					userIsSuspended: h.Z
				});
			t.a = Object(i.b)(j, (e, t) => {
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
					onShowTooltip: o,
					onHideTooltip: i,
					openCommunityCreation: a,
					sendEvent: c,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: m
				} = e;
				return r.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						m && m(e), a(c)
					},
					onMouseEnter: o,
					onMouseLeave: i,
					priority: p.c.Secondary,
					id: g,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? r.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: g,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? r.a.createElement(v, {
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				c = s.n(a),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				m = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(m.b),
					s = Object(r.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && s ? o.a.createElement("img", {
					alt: t.name,
					className: Object(i.a)(c.a.img, e.className),
					id: e.id,
					src: s
				}) : o.a.createElement(d.a, e)
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !u && h && o.a.createElement(d.a, {
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
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
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
				O = u.a.wrapped(a.a, "CalendarIcon", m.a),
				x = u.a.wrapped(c.a, "LiveIcon", m.a),
				g = u.a.div("LoadingState", m.a);
			class v extends n.Component {
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
					} = s, l = Object(r.e)(c, n);
					let m, u;
					if (this.state.mounted || l === r.a.Live) m = o.a.createElement(d.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						m = o.a.createElement(g, {
							className: e
						})
					}
					if (a) u = o.a.createElement(h, null, o.a.createElement(x, null), m);
					else if (l === r.a.Future) u = o.a.createElement(p, null, o.a.createElement(O, null), m);
					else {
						if (l !== r.a.Past) return null;
						u = o.a.createElement(b, null, o.a.createElement(O, null), m)
					}
					return o.a.createElement(f, {
						className: e
					}, u)
				}
			}
			t.a = v
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less": function(e, t, s) {
			e.exports = {
				AnnouncementContainer: "_2n96dzZYei5koZIof4hNGb",
				announcementContainer: "_2n96dzZYei5koZIof4hNGb",
				Title: "_2_60e51mes8qIV48MFyxwe",
				title: "_2_60e51mes8qIV48MFyxwe",
				Description: "_1ADicmI89099yV3e3zrjUD",
				description: "_1ADicmI89099yV3e3zrjUD",
				Button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				CloseButton: "_1KlaD5sga3um3ZmSli7uwr",
				closeButton: "_1KlaD5sga3um3ZmSli7uwr",
				iconStyles: "_1vyFrq5zn33vVTIC_LlCmR"
			}
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(a);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
				b = Object(r.b)(p, (e, t) => {
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
			t.a = b(e => o.a.createElement("div", {
				className: u.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? o.a.createElement(c.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : o.a.createElement(d.c, {
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
				return o
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(n.c)(e, n.b.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.c)(e, n.b.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.c)(e, n.b.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.c)(e, n.b.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
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
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
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
		"./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less": function(e, t, s) {
			e.exports = {
				LanguageRow: "_1uqw13duLAypklZz9JuxH5",
				languageRow: "_1uqw13duLAypklZz9JuxH5",
				Selected: "C0ynfBku9Az2wYA9j1_PA",
				selected: "C0ynfBku9Az2wYA9j1_PA",
				NightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				nightModeSelected: "_3JYkv3aRJq9WBVU_Qu_O3K",
				ButtonSection: "_2go248Acx87AyaspT-IqC3",
				buttonSection: "_2go248Acx87AyaspT-IqC3",
				SelectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				selectedIcon: "Nqikdy52FO7Ok8SC7YbBy",
				FrontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				frontFlex: "_3qzPnI-sCnXtXXzmiLCUzt",
				TextSection: "_5Rt2rPaHLuyB5smTxh9cS",
				textSection: "_5Rt2rPaHLuyB5smTxh9cS",
				Placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				placeholder: "_3gtRwVx6uS2xZaynYajI9O",
				Icon: "_1ym0rG9P61fqq5EGeggDEg",
				icon: "_1ym0rG9P61fqq5EGeggDEg",
				isLeft: "_1wilU6X1e2oYYu84p5M0Bn",
				isRight: "_1N6ONFJor0MYB1AANfCh8M",
				LanguageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				languageListButtons: "_2GUwrGUdKWdruRBy2ogOPv",
				HeaderBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				headerBarImproved: "sKUGLH9bgXYnkNvi71PD6",
				MoreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				moreLanguages: "_34OOuEVRtCgQHxTw6Bm_SM",
				PromptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				promptContainer: "_2NBWDPVfLgJchMUSilY9hq",
				PromptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				promptClose: "_1D3-VzG8d-pAsDFC2aDEqX",
				Close: "Z2DAjXDKT-rjUoOgPeR9b",
				close: "Z2DAjXDKT-rjUoOgPeR9b",
				PromptTitle: "_6pr2vYjViLknuzg7J_4II",
				promptTitle: "_6pr2vYjViLknuzg7J_4II",
				PromptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				promptSubtitle: "_1j479fpdJDH2JNDpssXW8Z",
				PromptRow: "piSYz03CLXLD5jdQwPjUy",
				promptRow: "piSYz03CLXLD5jdQwPjUy",
				Dismiss: "Fssd937Pdx1KOrc1lhBS5",
				dismiss: "Fssd937Pdx1KOrc1lhBS5"
			}
		},
		"./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/components/Onboarding/LanguageCollection/LanguageCollection.m.less"),
				l = s.n(d),
				m = s("./src/reddit/constants/componentTestIds.ts"),
				u = s("./src/reddit/contexts/ApiContext.tsx"),
				p = s("./src/reddit/endpoints/onboarding/languageSelections.ts"),
				b = s("./src/reddit/constants/tracking.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			const f = "bottom_sheet";
			var O;
			! function(e) {
				e.ADD = "add", e.LATER = "maybe_later", e.SKIP = "skip"
			}(O || (O = {}));
			var x = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/eligibleUXExperiences.ts"),
				C = s("./src/reddit/selectors/experiments/uxtsIntegration.ts"),
				y = s("./src/reddit/selectors/meta.ts"),
				E = s("./src/redditGQL/types.ts");
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = e => {
				const {
					gqlContext: t
				} = e, s = Object(r.d)(), d = Object(x.a)(), u = Object(r.e)(y.b), [j, C] = Object(n.useState)(!1), [S, k] = Object(n.useState)({}), [w, I] = Object(n.useState)({}), [N, P] = Object(n.useState)([]);
				let T = ["es"];
				const R = Object(n.useCallback)(async () => {
					const e = await Object(p.b)(t);
					e && (I(e.languages), P(e.preferences), C(!0))
				}, [t]);
				Object(n.useEffect)(() => {
					R()
				}, [R]);
				const M = e => {
						d("skip" === e ? (e => t => ({
							...Object(h.q)(t),
							source: f,
							action: b.c.CLICK,
							noun: O.SKIP,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(u) : (e => t => ({
							...Object(h.q)(t),
							source: f,
							action: b.c.CLICK,
							noun: O.LATER,
							actionInfo: {
								...Object(h.d)(t),
								type: e
							}
						}))(u)), C(!1), s(Object(a.c)({
							experience: E.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					},
					F = () => {
						const e = Object.keys(S).join();
						d(((e, t) => s => ({
							...Object(h.q)(s),
							source: f,
							action: b.c.CLICK,
							noun: O.ADD,
							actionInfo: {
								...Object(h.d)(s),
								reason: t,
								type: e
							}
						}))(u, e)), (async () => {
							var e;
							const n = S;
							N.map(e => n[e] = !0);
							const o = await Object(p.d)(t, n);
							(null === (e = null == o ? void 0 : o.updateSpokenLanguagesPreference) || void 0 === e ? void 0 : e.ok) ? s(Object(c.f)({
								kind: v.b.SuccessCommunity,
								text: _._("Changes saved", null, {
									hk: "2isjrZ"
								})
							})): s(Object(c.f)({
								kind: v.b.Error,
								text: _._("Changes failed to save. Try adding content languages in user settings", null, {
									hk: "2YYdoj"
								})
							}))
						})(), C(!1), s(Object(a.c)({
							experience: E.db.LanguagePreferenceBottomSheet,
							value: !1
						}))
					};
				return T = T.filter(e => !N.includes(e)), j && 0 !== T.length ? (d((e => t => ({
					...Object(h.q)(t),
					source: f,
					action: b.c.VIEW,
					noun: b.b.SCREEN,
					actionInfo: {
						...Object(h.d)(t),
						type: e
					}
				}))(u)), s(Object(a.d)(E.db.LanguagePreferenceBottomSheet)), o.a.createElement("div", {
					className: l.a.PromptContainer
				}, o.a.createElement("div", {
					className: l.a.PromptClose
				}, o.a.createElement(g.a, {
					className: l.a.Close,
					onClick: () => M("skip"),
					"data-testid": m.e
				})), o.a.createElement("div", {
					className: l.a.PromptTitle
				}, _._("See content in more languages", null, {
					hk: "4uyzS1"
				})), o.a.createElement("div", {
					className: l.a.PromptSubtitle
				}, _._("Update your settings to make it easier to discover content in multiple languages", null, {
					hk: "3VhB1c"
				})), 1 === T.length ? o.a.createElement("div", {
					className: l.a.PromptRow,
					onClick: () => (e => {
						const t = S;
						t[e] = !0, k(t), F()
					})(T[0]),
					"data-testid": T[0]
				}, _._("Add {language}", [_._param("language", w[T[0]])], {
					hk: "2emiHZ"
				})) : null, o.a.createElement("div", {
					className: Object(i.a)(l.a.PromptRow, {
						[l.a.Dismiss]: !0
					}),
					onClick: () => M("later")
				}, _._("Maybe later", null, {
					hk: "2LjBDw"
				})))) : null
			};
			t.a = Object(u.b)(e => {
				var t;
				const {
					gqlContext: s
				} = e, n = Object(r.f)().getState();
				return (null === (t = Object(r.e)(e => Object(j.a)(e, {
					experience: E.db.LanguagePreferenceBottomSheet
				}))) || void 0 === t ? void 0 : t.value) && Object(C.b)(n) ? o.a.createElement(S, {
					gqlContext: s
				}) : null
			})
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				O = s("./src/reddit/components/OverflowMenu/index.m.less"),
				x = s.n(O);
			const g = d.a.wrapped(u.a, "_Dropdown", x.a),
				v = Object(m.a)(g),
				j = d.a.button("MenuButton", x.a),
				C = d.a.wrapped(p.b, "DropdownRow", x.a),
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
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = E(e => r.a.createElement(j, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[x.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: _(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: x.a.MenuIcon
			}), r.a.createElement(v, {
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
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
						disabled: o = !1,
						variant: a,
						...u
					} = e;
					return r.a.createElement("button", d({}, u, {
						className: Object(i.a)(c.a.primaryButton, l[a], m(t, a), n),
						disabled: o
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
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
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
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				j = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				C = s("./src/reddit/components/PostContainer/index.m.less"),
				y = s.n(C);
			const E = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
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
				_ = "post-container";
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: h,
						style: f,
						ref: x,
						shouldAddGalleryViewability: g = !0
					} = this.props, v = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(O.a)(y.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": _,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": j.a.BACKGROUND
					}, s), C = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.H)(l.media) && g ? o.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || C ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(v))
				}
			}
			t.b = E(Object(v.a)(Object(g.a)(Object(u.c)(S))))
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(u);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
							postId: s,
							isFollowed: r
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
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
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
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: o.a.overlayReportFlow
			};
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReportFlow").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
				o = s("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: o.a.overlayReportFlow
				},
				i = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlow").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && o.a.createElement("span", {
					className: Object(r.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				m = i.a.wrapped(d, "RemoveButton", c.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", {
					className: t
				}, o.a.createElement(i.a, {
					isFocused: !1
				}, !s && "top" === c && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.topToolbar, Object(a.a)({
						isLoading: n
					}))
				}), o.a.createElement("div", {
					className: Object(r.a)(d.a.content, {
						[d.a.mCollapsed]: s
					})
				}, o.a.createElement("div", {
					className: Object(r.a)(d.a.prompt, Object(a.a)({
						isLoading: !0
					}))
				})), !s && "bottom" === c && o.a.createElement("div", {
					className: Object(r.a)(d.a.toolbar, d.a.bottomToolbar, Object(a.a)({
						isLoading: n
					}))
				})))
			}
		},
		"./src/reddit/components/SearchBanner/index.m.less": function(e, t, s) {
			e.exports = {
				announcement: "_1hUjYWB4NLdPs1k_qx-f0u"
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return r.a.createElement("div", {
						className: Object(i.a)(d.a.flatlistContainer, s)
					}, t)
				},
				m = e => {
					let {
						score: t
					} = e;
					return r.a.createElement("span", {
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
					const o = s && s > 0 ? s : Object.values(t || {}).reduce((e, t) => e += t, 0);
					return r.a.createElement("span", {
						className: Object(i.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(a.b)(o)), n.fbt._plural(o)], {
						hk: "1jrEck"
					}))
				};

			function p(e) {
				let {
					post: t,
					className: s
				} = e;
				return r.a.createElement(l, {
					className: s
				}, r.a.createElement(m, {
					score: t.score
				}), r.a.createElement("span", {
					className: Object(i.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(a.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), r.a.createElement(u, {
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
				return O
			})), s.d(t, "b", (function() {
				return x
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				u = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/search/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				f = s.n(h);
			const O = "subreddit_icon_link",
				x = "subreddit-name";
			t.c = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: o,
					onClickPostCommunity: h,
					post: g,
					subredditOrProfile: v,
					tooltipType: j
				} = e, C = Object(u.a)(), {
					isSubEnlarged: y
				} = Object(i.e)(p.a);
				return r.a.createElement("div", {
					className: Object(n.a)(t, f.a.metaContainer)
				}, !g.isSponsored && v && r.a.createElement(a.a, {
					className: Object(n.a)(f.a.hovercardContainer, f.a.hovercardContainer),
					postId: g.id,
					subredditName: v.name
				}, r.a.createElement(b.b, {
					className: Object(n.a)(f.a.subredditIcon, y && f.a.enlargedSubredditIcon),
					linkTo: v.url,
					linkProps: h ? {
						"data-testid": O,
						onClick: h
					} : void 0,
					subredditOrProfile: v
				}), r.a.createElement(l.a, {
					className: Object(n.a)(f.a.subredditName, y && f.a.enlargedSubredditName),
					"data-testid": x,
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: v.url,
						state: C
					}
				}, v.displayText)), !g.isSponsored && r.a.createElement(r.a.Fragment, null, r.a.createElement(m.b, null), r.a.createElement(c.h, {
					type: g.belongsTo.type,
					id: g.belongsTo.id
				})), r.a.createElement(d.g, {
					className: f.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: o,
					post: g,
					tooltipType: j
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(d);
			const m = e => o.a.createElement("div", {
				className: Object(r.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, o.a.createElement("div", {
				className: c.a.postContent
			}, o.a.createElement("div", {
				className: c.a.postItemMetaContainer
			}, o.a.createElement("div", {
				className: Object(r.a)(c.a.subredditName, Object(i.b)(e))
			}), o.a.createElement("div", {
				className: Object(r.a)(c.a.author, Object(i.b)(e))
			})), o.a.createElement("div", {
				className: Object(r.a)(c.a.title, Object(i.b)(e))
			}), o.a.createElement("div", {
				className: l.a.commentContainer
			}, o.a.createElement("div", {
				className: Object(r.a)(l.a.comment, Object(i.b)(e))
			})), o.a.createElement("div", {
				className: l.a.linkContainer
			}, o.a.createElement("div", {
				className: Object(r.a)(l.a.link, Object(i.b)(e))
			})), o.a.createElement("div", {
				className: c.a.flatlist
			}, o.a.createElement("div", {
				className: Object(r.a)(c.a.flatListItem, Object(i.b)(e))
			}), o.a.createElement("div", {
				className: Object(r.a)(c.a.flatListItem, Object(i.b)(e))
			}), o.a.createElement("div", {
				className: Object(r.a)(c.a.flatListItem, Object(i.b)(e))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				c = s.n(a);
			const d = e => o.a.createElement("div", {
				className: Object(r.a)(c.a.communityContainer, e.sidebar && c.a.sidebar),
				"data-testid": "community-placeholder"
			}, o.a.createElement("div", {
				className: Object(r.a)(c.a.subreddtiIcon, Object(i.a)(e))
			}), o.a.createElement("div", {
				className: c.a.contentContainer
			}, o.a.createElement("div", {
				className: Object(r.a)(c.a.subredditInfo, e.sidebar && c.a.sidebar)
			}, o.a.createElement("div", {
				className: Object(r.a)(c.a.title, Object(i.b)(e))
			}), o.a.createElement("div", {
				className: Object(r.a)(c.a.author, Object(i.b)(e))
			})), !e.sidebar && o.a.createElement("div", {
				className: Object(r.a)(c.a.description, Object(i.b)(e))
			})), o.a.createElement("div", {
				className: Object(r.a)(c.a.buttonContainer, Object(i.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				image: "e6PSfRI3_H3v8fgbIqj-x",
				button: "_3FKXXAcRW_DvCNr6yMbF73",
				padding: "_2LEtmNuEePPvFdDfwPmBcx"
			}
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return g
			}));
			var n = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				c = s("./src/reddit/controls/Search/SearchBar/index.tsx"),
				d = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				l = s("./src/reddit/helpers/trackers/searchResults.ts"),
				m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/pages/SearchResults/index.tsx"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				h = s.n(b);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = `${n.a.assetPath}/img/telescope-snoo.png`;
			var x;

			function g(e) {
				let {
					query: t,
					type: s,
					searchBarId: n = c.a,
					searchOptions: b,
					tab: x
				} = e;
				const g = Object(m.a)();
				Object(r.useEffect)(() => {
					g(Object(l.n)(s, b))
				}, [s]);
				const v = b.restrict_sr || u.pageConfig[x].sidebar,
					j = n === a.a;
				return i.a.createElement("div", {
					className: Object(o.a)(j && h.a.padding)
				}, i.a.createElement("div", {
					className: Object(o.a)(h.a.noResults, v && h.a.withSidebar),
					"data-testid": "no-results"
				}, i.a.createElement("img", {
					alt: f._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: O,
					className: h.a.image
				}), i.a.createElement("h2", {
					className: h.a.header
				}, f._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), f._("{search query}", [f._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), i.a.createElement("p", {
					className: h.a.text
				}, f._("Double-check your spelling or try different keywords to {=adjust your search}", [f._param("=adjust your search", i.a.createElement("button", {
					className: h.a.button,
					onClick: () => {
						var e;
						const t = document.querySelector(`input[type="search"][id=${n}]`);
						t || null === (e = document.getElementById(a.b)) || void 0 === e || e.click(), d.a.set(p.a.AdjustSearchButton), null == t || t.focus(), null == t || t.select()
					}
				}, f._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				}))))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(x || (x = {}))
		},
		"./src/reddit/components/SearchResultsContent/PdpComment/index.m.less": function(e, t, s) {
			e.exports = {
				actionFont: "GdWkLdr7ToYAI7A1BuDdw",
				commentContent: "_2UJq3kiv6y_oSPPmQyFMxy",
				commentContainer: "_2nHutt97wCf1b9Txz8_Y67",
				first: "B1l5QN6o0c-5KGYHlANBw",
				iconSpacer: "vz6ezPSNwnMTVPF3HcJiw",
				leftSpacer: "_6PV9rgxHCsT7DD2OrVvJ0",
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
				return es
			})), s.d(t, "c", (function() {
				return rs
			})), s.d(t, "b", (function() {
				return as
			}));
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
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
				O = s.n(f),
				x = s("./node_modules/polished/dist/polished.es.js"),
				g = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				j = s.n(v),
				C = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				y = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/isUrl/index.ts"),
				_ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				S = s("./src/reddit/components/FlairList/index.tsx"),
				k = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				I = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				P = s("./src/reddit/components/Flair/index.tsx"),
				T = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				R = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				M = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/controls/InternalLink/index.tsx"),
				L = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				A = s("./src/reddit/controls/ScrollerTooltipPortal/index.tsx"),
				B = s("./src/reddit/hooks/useClickSourceData.ts"),
				D = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				U = s("./src/reddit/hooks/useTheme.ts"),
				V = s("./src/reddit/icons/fonts/index.tsx"),
				W = s("./src/reddit/selectors/experiments/search/searchSubDiscovery.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				q = s("./src/reddit/components/AuthorLink/index.tsx"),
				K = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
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
					onClick: o,
					subredditOrProfile: r
				} = e, c = Object(a.e)(H.fb), d = null === (t = r.icon) || void 0 === t ? void 0 : t.url, l = null == r ? void 0 : r.color;
				let m;
				return m = d ? i.a.createElement("img", {
					alt: N.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: s,
					style: {
						backgroundColor: l
					},
					role: "presentation",
					src: d
				}) : i.a.createElement(V.a, {
					name: "community",
					isFilled: !c,
					className: Object(y.a)(X.a.defaultCommunityIcon, s, c && X.a.mNightmode)
				}), i.a.createElement(F.default, {
					className: X.a.contents,
					"data-testid": G.a,
					onClick: o,
					to: {
						pathname: r.url,
						state: n
					}
				}, m)
			}

			function $(e) {
				const {
					post: t,
					onClickPostAuthor: s
				} = e, n = Object(D.a)(Y.e), o = t.crosspostRootId ? N.fbt._("Crossposted by", null, {
					hk: "1r1JSX"
				}) : N.fbt._("Posted by", null, {
					hk: "3mow5F"
				});
				return i.a.createElement("div", {
					className: X.a.metaContainer
				}, t.crosspostRootId && i.a.createElement(V.a, {
					name: "crosspost",
					className: Object(y.a)(X.a.crosspostIcon, X.a.metaSpacer)
				}), i.a.createElement("span", {
					className: X.a.metaSpacer
				}, o), i.a.createElement(K.b, {
					postOrComment: t
				}, i.a.createElement(q.a, {
					author: t.author,
					className: X.a.metaSpacer,
					isAuthorDeleted: t.author === d.F,
					isUnstyled: !0,
					linkProps: {
						"data-click-id": C.a.USER,
						"data-testid": Y.b
					},
					onClick: s
				}, `u/${t.author}`)), t.authorFlair && i.a.createElement("div", {
					className: X.a.flairContainer
				}, i.a.createElement(P.c, {
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
					seconds: t.createdAt / d.Wb
				})), i.a.createElement(A.a, null, i.a.createElement(R.a, {
					arrowProps: n.arrowProps,
					popperProps: n.popperProps,
					visible: n.visible
				}, i.a.createElement(z.a, {
					seconds: t.createdAt / d.Wb
				})))))
			}

			function ee(e) {
				const {
					className: t,
					isOptimizedSerp: s,
					onClickPostAuthor: n,
					onClickPostCommunity: o,
					post: r,
					subredditOrProfile: c
				} = e, d = Object(B.a)(), {
					isSubEnlarged: l
				} = Object(a.e)(W.a), m = Object(U.a)();
				return i.a.createElement("div", {
					className: Object(y.a)(t, X.a.metaContainer, X.a.metadataFont)
				}, !r.isSponsored && c && i.a.createElement(T.a, {
					className: Object(y.a)(X.a.hovercardContainer, X.a.hovercardContainer),
					postId: r.id,
					subredditName: c.name
				}, i.a.createElement(Z, {
					className: Object(y.a)(X.a.subredditIcon, l && X.a.enlargedSubredditIcon),
					"data-click-id": C.a.SUBREDDIT,
					clickSourceData: d,
					onClick: o,
					subredditOrProfile: c
				}), i.a.createElement(F.default, {
					className: Object(y.a)(X.a.subredditName, l && X.a.enlargedSubredditName),
					"data-testid": G.b,
					"data-click-id": C.a.SUBREDDIT,
					onClick: o,
					to: {
						pathname: c.url,
						state: d
					}
				}, c.displayText)), !r.isSponsored && !s && i.a.createElement(i.a.Fragment, null, i.a.createElement(L.b, null), i.a.createElement(M.h, {
					type: r.belongsTo.type,
					id: r.belongsTo.id
				})), i.a.createElement(L.b, null), i.a.createElement($, {
					className: X.a.postTopMeta,
					onClickPostAuthor: n,
					post: r,
					theme: m
				}))
			}
			var te = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				se = s("./src/reddit/components/SearchWarnings/index.m.less"),
				ne = s.n(se);
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function re(e) {
				let {
					className: t,
					isQuarantined: s,
					isNSFW: n,
					isSpoiler: o
				} = e;
				return s || n || o ? i.a.createElement("div", {
					className: t
				}, s ? i.a.createElement("span", {
					className: Object(y.a)(ne.a.warningText, ne.a.quarantineWarning)
				}, i.a.createElement(te.a, {
					className: Object(y.a)(ne.a.warningIcon, ne.a.quarantineIcon)
				}), oe._("quarantined", null, {
					hk: "1j7soK"
				})) : null, n ? i.a.createElement("span", {
					className: Object(y.a)(ne.a.warningText, ne.a.nsfwWarning)
				}, i.a.createElement(V.a, {
					name: "nsfw_fill",
					className: Object(y.a)(ne.a.warningIcon)
				}), oe._("nsfw", null, {
					hk: "2IetSA"
				})) : null, o ? i.a.createElement("span", {
					className: Object(y.a)(ne.a.warningText, ne.a.spoilerWarning)
				}, i.a.createElement(V.a, {
					name: "spoiler_fill",
					className: Object(y.a)(ne.a.warningIcon)
				}), oe._("spoiler", null, {
					hk: "3SHbs3"
				})) : null) : null
			}
			var ie = s("./src/reddit/components/SEOTitle/index.tsx"),
				ae = s("./src/reddit/components/SEOTitle/constants.ts"),
				ce = s("./src/reddit/components/Thumbnail/index.tsx"),
				de = s("./src/reddit/components/TrackingHelper/index.tsx");
			const le = new m.a(250),
				me = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const o = `${e.id}-${n}`;
						let r = le.get(o);
						if (void 0 === r) {
							const a = new RegExp(`(\\b${n}\\b)`, "gi"),
								c = e.title.split(a);
							r = s(i.a.createElement(i.a.Fragment, null, i.a.Children.toArray(c.map((e, s) => s % 2 != 0 ? t(e) : e)))), le.set(o, r)
						}
						return r
					}
				};
			var ue = s("./src/reddit/contexts/PageLayer/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/index.tsx"),
				be = s("./src/reddit/helpers/clickSourceData/index.ts"),
				he = s("./src/reddit/helpers/overlay/index.ts"),
				fe = s("./src/reddit/helpers/path/index.ts"),
				Oe = s("./src/reddit/helpers/trackers/searchResults.ts"),
				xe = s("./src/reddit/hooks/usePageLayer.ts"),
				ge = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				ve = s("./src/reddit/selectors/searchResults.ts"),
				je = s("./src/telemetry/models/Outbound.ts"),
				Ce = s("./src/reddit/components/SearchPost/index.m.less"),
				ye = s.n(Ce);

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _e = "post-title";

			function Se(e) {
				var t;
				const {
					isCommentsPage: s,
					post: n,
					searchQuery: o
				} = e, a = s ? ae.a.PostComments : ae.a.PostItem, c = Object(B.a)(), d = Object(_.a)(n.permalink, void 0, c), l = Object(U.a)(), m = Object(r.useMemo)(() => me(o, e => i.a.createElement("span", {
					className: Object(y.a)(ye.a.syntaxHighlight)
				}, e), e => e), [o])(n);
				return i.a.createElement("div", {
					className: Object(y.a)(n.id, ye.a.postTitleColors),
					"data-adclicklocation": C.a.TITLE
				}, i.a.createElement("style", {
					dangerouslySetInnerHTML: {
						__html: `\n        .${n.id}.${ye.a.postTitleColors} {\n          --postTitle-VisitedLinkColor: ${Object(x.c)(.45,Object(ge.a)({theme:l}).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(x.c)(.45,Object(ge.a)({theme:l}).titleText,Object(ge.a)({theme:l}).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(x.c)(.45,Object(ge.a)({theme:l}).bodyText,Object(ge.a)({theme:l}).body)};\n        }\n      `
					}
				}), i.a.createElement("div", {
					className: ye.a.postTitleVisibility,
					dangerouslySetInnerHTML: {
						__html: `\n            <img alt="" src="${h.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n          `
					}
				}), i.a.createElement("div", {
					className: ye.a.titleContainer
				}, i.a.createElement(g.a, {
					to: d
				}, i.a.createElement("div", {
					className: Object(y.a)(ye.a.inline, ye.a.titleTextColor, ye.a.titleMedium, ye.a.paddingRight),
					"data-testid": _e,
					style: {
						"--posttitletextcolor": Object(ge.a)({
							theme: l
						}).titleText
					}
				}, i.a.createElement(ie.b, {
					type: a
				}, m))), n.flair && i.a.createElement(S.a, {
					className: ye.a.inline,
					subredditName: null === (t = n.subreddit) || void 0 === t ? void 0 : t.name,
					isFlairFilter: !0,
					flair: n.flair
				})))
			}

			function ke(e) {
				var t, s;
				const n = !e.theme.subredditContext.shouldShowNSFWContent && e.post.isNSFW,
					o = (null === (t = e.post.source) || void 0 === t ? void 0 : t.url) || "",
					r = (null === (s = e.post) || void 0 === s ? void 0 : s.mediaContentUrl) || "",
					a = i.a.createElement(ce.a, {
						alt: e.post.title,
						className: Object(y.a)(ye.a.thumbnail, n && ye.a.blurred),
						src: e.post.thumbnail.url,
						theme: e.theme,
						isOutbound: o && !e.post.isSponsored || !1
					});
				return i.a.createElement("div", {
					className: ye.a.container,
					onClick: e.makeSendClickEventFn
				}, Object(E.a)(r) && !e.post.media ? i.a.createElement(pe.b, {
					href: o || r,
					isSponsored: e.post.isSponsored,
					postId: e.post.id,
					source: e.post.source,
					sourceElement: je.SourceElement.PostImage
				}, a) : a)
			}
			var we = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Ie = s("./src/reddit/constants/elementIds.ts"),
				Ne = s("./src/reddit/helpers/trackers/screenview.ts"),
				Pe = s("./src/reddit/selectors/platform.ts"),
				Te = s("./src/reddit/selectors/tracking.ts"),
				Re = s("./src/telemetry/index.ts"),
				Me = s("./src/telemetry/models/Timer.ts"),
				Fe = s("./node_modules/react-router-redux/es/index.js"),
				Le = s("./src/reddit/components/Comments/Comment/index.tsx"),
				Ae = s("./src/reddit/components/PostList/index.tsx"),
				Be = s("./src/reddit/components/PostTitle/index.tsx"),
				De = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Ue = s("./src/lib/getShortenedLink.ts"),
				Ve = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				We = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				He = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Ge = s("./src/reddit/components/ModModeReports/index.tsx"),
				qe = s("./src/reddit/components/ModModeReports/helpers.ts"),
				Ke = s("./src/reddit/actions/post.ts"),
				ze = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Qe = s("./src/reddit/selectors/poll/index.ts"),
				Ye = s("./src/reddit/selectors/postFlair.ts"),
				Je = s("./src/reddit/selectors/posts.ts");
			const Xe = {
					crosspost: Je.d,
					isActive: Je.j,
					isLoggedIn: H.S,
					moderatorPermissions: ze.m,
					modModeEnabled: ue.W,
					poll: Qe.e,
					showEditFlair: Ye.a,
					flairStyleTemplate: ue.Y
				},
				Ze = () => Object(c.c)(Xe);
			var $e = s("./src/reddit/contexts/Post/index.tsx"),
				et = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				tt = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				st = s("./src/reddit/helpers/styles/mixins/index.tsx");

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ot = Object(De.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: n,
						first: o,
						flairStyleTemplate: a,
						isLoggedIn: c,
						isOverlay: d,
						moderatorPermissions: l,
						modModeEnabled: m,
						onClickPost: u,
						onClickPostAuthor: p,
						onClickPostCommunity: b,
						onIgnoreReports: h,
						poll: f,
						post: O,
						redditStyle: x,
						searchQuery: g,
						showBulkActionCheckbox: v,
						subredditOrProfile: j,
						title: C
					} = e, _ = x ? void 0 : a, S = s || void 0, N = Object(tt.a)(l), P = Object(He.a)(O), T = Object(qe.c)(O), R = Object(ce.c)({
						crosspost: s,
						post: O,
						url: void 0,
						usePreview: !1
					}), F = R && Object(E.a)(R), L = !c, A = Object(r.useMemo)(() => C ? void 0 : me(g, e => i.a.createElement("span", {
						className: Object(y.a)(ye.a.syntaxHighlight)
					}, e), e => e), [C, g]), B = {
						flairStyleTemplate: _,
						isOverlay: d,
						onClickPostAuthor: p,
						onClickPostCommunity: b,
						post: O,
						shouldShowSubscribeButton: L,
						subredditOrProfile: j
					}, D = null != C ? C : i.a.createElement("div", {
						className: Object(y.a)(ye.a.paddingSide, ye.a.postItemTitleContainer)
					}, i.a.createElement("div", null, i.a.createElement(Be.c, {
						format: A,
						hideSourceLink: !0,
						poll: f,
						post: O,
						redditStyle: !0,
						size: Be.b.Medium,
						isOverlay: d,
						hideNSFWSpoilerFlair: !0
					}), O.source && !S && i.a.createElement(et.a, {
						className: ye.a.outboundLink,
						href: O.source.url,
						isSponsored: O.isSponsored,
						postId: O.id,
						source: O.source
					}, Object(Ue.a)(O))), F && i.a.createElement("div", {
						className: ye.a.thumbnailContainer
					}, i.a.createElement(ce.b, {
						className: ye.a.thumbnail,
						crosspost: S && O,
						isMeta: O.isMeta,
						post: S || O,
						redditStyle: x,
						templatePlaceholderImage: _ && _.postPlaceholderImage
					})));
					return i.a.createElement(w.b, {
						className: Object(y.a)(ye.a.postContainer, Object(st.a)(e), o ? ye.a.mFirst : void 0, t),
						eventFactory: n,
						isOverlay: d,
						onClick: u,
						post: O,
						style: {
							...Object(st.d)(e),
							...Object(st.b)(_)
						}
					}, i.a.createElement(k.a, {
						"data-click-id": "background",
						flairStyleTemplate: _,
						redditStyle: !0
					}, i.a.createElement(Ve.a, {
						className: ye.a.eventMeta,
						post: O
					}), i.a.createElement("div", {
						className: Object(y.a)(ye.a.postContent, {
							[ye.a.showBulkActionCheckbox]: v
						}),
						"data-click-id": "body"
					}, i.a.createElement(G.c, nt({
						className: Object(y.a)(ye.a.paddingSide, ye.a.postItemMetaContainer),
						key: "PostMeta"
					}, B)), i.a.createElement(re, {
						className: Object(y.a)(ye.a.paddingSide, ye.a.postItemWarningContainer),
						isSpoiler: O.isSpoiler,
						isNSFW: O.isNSFW,
						isQuarantined: null == j ? void 0 : j.isQuarantined
					}), D, m && N && P && i.a.createElement(We.a, {
						thing: O
					}), m && N && T && i.a.createElement(Ge.a, {
						onIgnoreReports: h,
						reportable: O
					}), i.a.createElement(I.c, {
						className: Object(y.a)(ye.a.paddingSide, ye.a.postItemFlatlistContainer),
						post: O
					}), i.a.createElement(M.d, null))))
				}),
				rt = Object($e.b)((e => t => {
					const s = Object(ue.ib)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(Ke.eb)(s))
							}
						})(Object(a.d)(), {
							...t
						}),
						o = Object(ue.cb)(s),
						r = Object(a.e)(Ze),
						c = {
							...t,
							...r,
							...n,
							searchQuery: o
						};
					return i.a.createElement(e, c)
				})(ot));
			var it = s("./src/reddit/connectors/PostList/index.ts"),
				at = s("./src/reddit/contexts/Visibility.tsx"),
				ct = s("./src/reddit/controls/Button/index.tsx"),
				dt = s("./src/reddit/controls/Button/index.m.less"),
				lt = s.n(dt),
				mt = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				ut = s("./src/reddit/hooks/useTracking.ts"),
				pt = s("./src/reddit/selectors/comments.ts"),
				bt = s("./src/reddit/selectors/commentSelector.ts");

			function ht(e) {
				let {
					className: t,
					comment: s
				} = e;
				return i.a.createElement(I.b, {
					className: t
				}, i.a.createElement(I.d, {
					score: s.score
				}), i.a.createElement(I.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var ft = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				Ot = s.n(ft);
			var xt;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(xt || (xt = {}));
			var gt = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				vt = s("./src/lib/truncateText/index.ts"),
				jt = s("./src/lib/prettyPrintNumber/index.ts"),
				Ct = s("./src/reddit/components/SubscribeButton/index.tsx"),
				yt = s("./src/reddit/helpers/karma.ts");
			var Et = s("./src/reddit/constants/tracking.ts"),
				_t = s("./src/reddit/helpers/correlationIdTracker.ts"),
				St = s("./src/reddit/selectors/telemetry.ts");
			var kt = s("./src/reddit/components/SubredditIcon/index.tsx"),
				wt = s("./src/reddit/constants/posts.ts"),
				It = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Nt = s("./src/reddit/selectors/subreddit.ts"),
				Pt = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				Tt = s.n(Pt);
			const Rt = Object(c.c)({
					isBlockingInterstitialEnabled: It.b,
					isBlockingInterstitialV2Enabled: It.c,
					hideNSFWPref: H.H,
					subredditOrProfile: Nt.Q,
					subredditOrProfileAboutInfo: Nt.M,
					userIsSubscriber: Nt.jb
				}),
				Mt = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: o,
						searchOptions: c,
						sidebar: d
					} = e, l = Object(ue.ib)(), m = Object(ut.a)(), u = Object(B.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: h,
						subredditOrProfile: f,
						subredditOrProfileAboutInfo: O
					} = Object(a.e)(t => Rt(t, e)), {
						withCommunityDescription: x
					} = Object(a.e)(W.a), g = d && x, v = Object(a.d)(), j = Object(r.useCallback)(e => {
						f && n.type === wt.a.PROFILE && (p || b) && (e.preventDefault(), v(Object(Ke.bb)(f.url))), m(Object(Oe.q)(c, l, n, o))
					}, [m, c, l, o, n, p, b, v, f]);
					if (!f) return null;
					const C = f.displayText,
						E = O.publicDescription,
						_ = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(yt.a)(e),
									n = Object(jt.b)(s);
								return N.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [N.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? N.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [N.fbt._plural(s.subscribers, "number of subscribers", Object(jt.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, O),
						S = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: o,
								subscribeEventFactory: r,
								priority: a
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? i.a.createElement(Ct.a, {
								getEventFactory: r,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: o,
								priority: a,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? i.a.createElement(Ct.a, {
								getEventFactory: r,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: o,
								priority: a,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: f,
							subredditOrProfileAboutInfo: O,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const o = St.J(n, void 0);
									return {
										source: Oe.c.SEARCH,
										action: Et.c.CLICK,
										noun: `${s}_${Oe.d[e.type]}`,
										actionInfo: Object(Oe.k)(n, void 0, o, void 0),
										correlationId: Object(_t.c)(_t.a.SearchResults),
										profile: "profile" === e.type ? St.Z(n, e.id) : void 0,
										search: St.fb(n, t, mt.a.SERP),
										subreddit: "subreddit" === e.type ? St.rb(n, e.id) : void 0
									}
								})(n, c, e ? "unsubscribe" : "subscribe")
							},
							priority: ct.c.Tertiary
						});
					return i.a.createElement(F.default, {
						"data-testid": `${n.type}-link`,
						className: Object(y.a)(Tt.a.link, d && Tt.a.sidebar, s ? Tt.a.mFirst : void 0, t),
						onClick: j,
						to: {
							pathname: f.url,
							state: u
						}
					}, i.a.createElement("div", {
						className: Tt.a.container
					}, i.a.createElement(kt.b, {
						className: Object(y.a)(Tt.a.subredditIcon, g && Tt.a.sidebar),
						shouldHideNsfwIcon: h,
						subredditOrProfile: f
					}), i.a.createElement("div", {
						className: Tt.a.contentContainer
					}, i.a.createElement("div", {
						className: Object(y.a)(Tt.a.subredditInfo, d && Tt.a.sidebar)
					}, i.a.createElement("h6", {
						className: Object(y.a)(Tt.a.title, d && Tt.a.sidebar)
					}, C), i.a.createElement(re, {
						className: Object(y.a)(Tt.a.warnings, d && Tt.a.sidebar),
						isQuarantined: null == f ? void 0 : f.isQuarantined,
						isNSFW: null == f ? void 0 : f.isNSFW
					}), _ && i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
						className: Tt.a.subtitle
					}, !d && i.a.createElement(L.b, null), _))), !d && i.a.createElement("p", {
						className: Tt.a.description
					}, Object(vt.a)(E, 150, "..."))), i.a.createElement("div", {
						className: Tt.a.buttonContainer
					}, S)), g && n.type !== wt.a.PROFILE && i.a.createElement("p", {
						className: Object(y.a)(Tt.a.description, d && Tt.a.sidebar)
					}, Object(vt.a)(E, 75, "...")))
				};
			var Ft = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				Lt = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				At = s("./src/lib/objectSelector/index.ts"),
				Bt = s("./src/reddit/components/Comments/Comment/TopMeta/Author.tsx"),
				Dt = s("./src/reddit/components/Comments/Comment/TopMeta/Created.tsx"),
				Ut = s("./src/reddit/components/Comments/Comment/TopMeta/Edited.tsx"),
				Vt = s("./src/reddit/components/Comments/Comment/TopMeta/Role.tsx"),
				Wt = s("./src/reddit/components/RichTextJson/index.tsx"),
				Ht = s("./src/reddit/components/UserIcon/constants.ts"),
				Gt = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				qt = s("./src/reddit/constants/componentTestIds.ts"),
				Kt = s("./src/reddit/controls/MetaData/index.tsx"),
				zt = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				Qt = s("./src/reddit/models/User/index.ts"),
				Yt = s("./src/reddit/components/SearchResultsContent/PdpComment/index.m.less"),
				Jt = s.n(Yt);
			var Xt = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				Zt = s.n(Xt),
				$t = s("./src/reddit/components/SearchResultsContent/SearchResultsList/utils.ts");
			const es = 5,
				ts = Object(c.c)({
					apiError: ve.b,
					apiPending: ve.c,
					loadMore: ve.s,
					viewportDataLoaded: Te.b
				}),
				ss = Object(c.c)({
					apiError: ve.e,
					apiPending: ve.f,
					loadMore: ve.t,
					viewportDataLoaded: Te.b
				}),
				ns = Object(c.c)({
					apiError: ve.h,
					apiPending: ve.i,
					loadMore: ve.u,
					viewportDataLoaded: Te.b
				}),
				os = Object(c.c)({
					apiError: ve.x,
					apiPending: ve.y,
					loadMore: ve.v,
					viewportDataLoaded: Te.b
				});
			var rs;
			! function(e) {
				e.Posts = "posts", e.Subreddits = "communities", e.Users = "authors", e.Comments = "comments", e.PdpComments = "pdp_comments"
			}(rs || (rs = {}));
			const is = {
				[rs.Comments]: {
					cacheName: "comment",
					Component: e => {
						let {
							identifier: t,
							listingKey: s,
							searchOptions: n
						} = e;
						const o = Object(ue.ib)(),
							r = Object(ut.a)(),
							c = Object(a.d)(),
							d = Object(a.e)(e => Object(bt.c)(e, {
								commentId: t
							})),
							l = Object(a.e)(e => Object(pt.m)(e, {
								commentId: t
							})),
							m = Object(a.e)(e => (null == d ? void 0 : d.postId) ? Object(Je.F)(e, {
								postId: null == d ? void 0 : d.postId
							}) : void 0),
							u = Object(a.e)(e => (null == d ? void 0 : d.postId) && Object(Je.E)(e, {
								postId: null == d ? void 0 : d.postId
							})),
							p = Object(a.e)(e => e.search.searchQuery),
							b = Object(B.a)();
						if (!(null == d ? void 0 : d.postId) || !u) return null;
						const h = Object(it.b)(c),
							f = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
								return function() {
									r(Object(Oe.p)({
										comment: d,
										key: s,
										originElement: e,
										pageLayer: o,
										searchOptions: n,
										telemetrySource: mt.a.SERP
									})), t(...arguments)
								}
							},
							x = Object(Ae.b)(d.postId, h),
							g = e => f(e);
						return i.a.createElement(rt, {
							crosspost: void 0,
							isActive: !1,
							isLoggedIn: !1,
							modModeEnabled: !1,
							moderatorPermissions: void 0,
							onClickPost: f(xt.POST, null != x ? x : O.a),
							onClickPostAuthor: g(xt.POST_AUTHOR),
							onClickPostCommunity: g(xt.POST_COMMUNITY),
							onIgnoreReports: O.a,
							postId: d.postId,
							searchQuery: p,
							showEditFlair: !1,
							title: i.a.createElement(at.a, null, i.a.createElement("div", {
								className: Ot.a.commentContainer,
								"data-testid": "search_comment_container"
							}, i.a.createElement("div", {
								className: Ot.a.postTitleContainer,
								"data-testid": "search_comment_post_title_container",
								onClick: g(xt.POST)
							}, m && i.a.createElement(Be.c, {
								className: Ot.a.postTitle,
								hideSourceLink: !0,
								post: m,
								redditStyle: !0,
								disableFlair: !0,
								size: Be.b.Metadata
							})), i.a.createElement("div", {
								className: Ot.a.commentContent,
								"data-testid": "search_comment",
								onClick: f(xt.COMMENT, e => {
									e.stopPropagation(), c(Object(Fe.b)(Object(_.a)(l, !0, b)))
								})
							}, i.a.createElement(Le.a, {
								clearHovered: O.a,
								commentId: t,
								commentsPageKey: "",
								flatlist: i.a.createElement(ht, {
									className: Ot.a.commentFlatlist,
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
								onLineMouseOver: O.a,
								onCommentAuthorClick: e => (e.stopPropagation(), g(xt.COMMENT_AUTHOR)(e)),
								onCommentTimestampClick: e => (e.stopPropagation(), g(xt.COMMENT_TIMESTAMP)(e)),
								postId: d.postId,
								renderedInOverlay: !1,
								restrictHeight: !0,
								rtJSONRedditStyle: !0,
								scrollToAndRemeasure: O.a,
								showBlockingInterstitial: O.a,
								userIconSmall: !0,
								onClickRevealSpoilerText: () => {
									r(Object(Oe.s)(n, d, s, o))
								}
							})), i.a.createElement(ct.t, {
								kind: ct.b.InternalLink,
								priority: ct.c.PlainLink,
								className: Object(y.a)(Ot.a.goToThreadLinkButton, lt.a.PlainLinkButton),
								"data-testid": "go_to_thread_link",
								onClick: f(xt.GO_TO_COMMENT_LINK, e => {
									e.stopPropagation()
								}),
								to: Object(_.a)(u, !0, b)
							}, N.fbt._("Go to thread", null, {
								hk: "npBX6"
							}))))
						})
					},
					moreResultsTypes: [d.hc.Comments],
					Placeholder: gt.a,
					selector: ss,
					telemetryComponentName: "commentSearchResults",
					telemetryViewEvent: Lt.d
				},
				[rs.Subreddits]: {
					cacheName: "community",
					Component: Mt,
					moreResultsTypes: [d.hc.Subreddits],
					Placeholder: Ft.a,
					selector: ns,
					telemetryComponentName: "communitySearchResults",
					telemetryViewEvent: Lt.e
				},
				[rs.Users]: {
					cacheName: "author",
					Component: Mt,
					moreResultsTypes: [d.hc.Users],
					Placeholder: Ft.a,
					selector: ts,
					telemetryComponentName: "authorSearchResults",
					telemetryViewEvent: Lt.e
				},
				[rs.Posts]: {
					cacheName: "post",
					Component: e => {
						var t, s;
						const {
							first: n,
							listingKey: o,
							searchOptions: r
						} = e, c = Object(a.e)(t => Object(ve.z)(t, e)), d = Object(a.e)(e => {
							if (c.crosspostRootId) return Object(ve.z)(e, {
								identifier: c.crosspostRootId
							})
						}), l = Object(a.e)(e => Object(H.lb)(e)), m = Object(xe.a)(), u = Object(a.d)(), p = Object(de.b)(), b = function(e) {
							var t;
							const s = (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
								n = j.a.parse(s),
								o = n.path || "",
								r = o.length > 7 ? o.substring(0, 7) + "..." : o;
							return (n.hostname ? n.hostname.replace("www.", "") : "") + r
						}(c), h = Object(ue.cb)(m), f = d ? d.thumbnail.url : c.thumbnail.url, x = f && Object(E.a)(f), g = Object(U.a)(), v = function(e) {
							let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
							return function() {
								p(Object(Oe.r)(c.id, r, m, e || null, o)), t(...arguments)
							}
						}, _ = e => v(e), S = {
							isOptimizedSerp: !0,
							post: c,
							subredditOrProfile: c.subreddit || c.profile,
							onClickPostAuthor: e => (e.stopPropagation(), _(Oe.e.POST_AUTHOR)(e)),
							onClickPostCommunity: e => (e.stopPropagation(), _(Oe.e.POST_COMMUNITY)(e))
						};
						return i.a.createElement("div", {
							className: Object(y.a)(ye.a.postContainer, n && ye.a.mFirst),
							"data-adclicklocation": C.a.BACKGROUND,
							"data-click-id": C.a.BACKGROUND,
							"data-testid": w.a,
							id: c.id,
							onClick: v(Oe.e.POST, e => {
								e.stopPropagation(), l ? window.open(c.permalink) : u(Object(he.a)({
									pathname: Object(fe.b)(c.permalink),
									state: Object(be.b)(m)
								}))
							}),
							tabIndex: -1
						}, i.a.createElement(k.a, {
							"data-click-id": C.a.BACKGROUND,
							redditStyle: !0
						}, i.a.createElement("div", {
							className: ye.a.postContent,
							"data-click-id": C.a.BODY
						}, i.a.createElement(ee, Ee({
							className: Object(y.a)(ye.a.paddingSide, ye.a.postItemMetaContainer),
							key: "PostMeta"
						}, S)), i.a.createElement(re, {
							className: Object(y.a)(ye.a.paddingSide, ye.a.postItemWarningContainer),
							isQuarantined: (null === (t = c.subreddit) || void 0 === t ? void 0 : t.isQuarantined) || (null === (s = c.profile) || void 0 === s ? void 0 : s.isQuarantined),
							isNSFW: c.isNSFW,
							isSpoiler: c.isSpoiler
						}), i.a.createElement("div", {
							className: Object(y.a)(ye.a.paddingSide, ye.a.postItemTitleContainer)
						}, i.a.createElement("div", {
							className: ye.a.postContent
						}, i.a.createElement(Se, {
							searchQuery: h,
							post: c
						}), c.source && !c.crosspostRootId && i.a.createElement(pe.b, {
							className: ye.a.outboundLink,
							href: c.source.url,
							isSponsored: c.isSponsored,
							postId: c.id,
							source: c.source
						}, b)), x && i.a.createElement("div", {
							className: ye.a.thumbnailContainer
						}, i.a.createElement(ke, {
							makeSendClickEventFn: e => (e.stopPropagation(), _(Oe.e.POST)(e)),
							post: c,
							theme: g
						}))), i.a.createElement(I.c, {
							className: Object(y.a)(ye.a.paddingSide, ye.a.postItemFlatlistContainer),
							post: c
						}))))
					},
					moreResultsTypes: [d.hc.Posts],
					Placeholder: we.a,
					selector: os,
					telemetryComponentName: "postList",
					telemetryViewEvent: Lt.g,
					trackOnEnteredViewportCallback: $t.b,
					trackOnExitedViewportCallback: $t.a
				},
				[rs.PdpComments]: {
					cacheName: "pdp-comment",
					Component: e => {
						let {
							identifier: t,
							first: s,
							listingKey: n,
							searchOptions: o,
							pageKey: r
						} = e;
						const c = Object(ue.ib)(),
							d = Object(ut.a)(),
							l = Object(a.d)(),
							m = Object(a.e)(e => Object(bt.c)(e, {
								commentId: t
							})),
							u = Object(a.e)(e => Object(pt.m)(e, {
								commentId: t
							})),
							p = Object(a.e)(e => Object(H.m)(e)),
							b = Object(a.e)(H.H),
							h = Object(a.e)(e => Object(Pe.i)(e)),
							f = Object(a.e)(e => (null == m ? void 0 : m.postId) && Object(Je.E)(e, {
								postId: null == m ? void 0 : m.postId
							})),
							x = Object(a.e)(e => Object(ue.s)(e, {
								pageLayer: c
							})),
							g = Object(B.a)();
						if (!(null == m ? void 0 : m.postId) || !f) return null;
						const v = !!p && Object(Qt.e)(p) === m.author,
							j = v ? null == p ? void 0 : p.accountIcon : m.profileImage,
							C = !v && m.profileOver18 && b ? Ht.a || Gt.a : j,
							E = Object(zt.a)(m),
							S = Object(At.b)(e => {
								let {
									comment: t,
									pageLayer: s
								} = e;
								return {
									renderingObjectInfo: t,
									pageLayer: s
								}
							}),
							k = function(e) {
								let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.a;
								return function() {
									d(Object(Oe.p)({
										comment: m,
										key: n,
										originElement: e,
										pageLayer: c,
										searchOptions: o,
										telemetrySource: mt.a.PdpCommentSearch
									})), t(...arguments)
								}
							},
							w = e => k(e);
						return i.a.createElement(at.a, null, i.a.createElement("div", {
							className: Object(y.a)(Jt.a.commentContainer, Jt.a.marginContainer, Jt.a.metadataFont, s && Jt.a.first),
							"data-testid": "search_pdp_comment_container"
						}, i.a.createElement("div", {
							"data-testid": "search_pdp_comment",
							onClick: k(xt.COMMENT, e => {
								e.stopPropagation(), l(Object(Fe.b)(Object(_.a)(u, !0, g)))
							})
						}, i.a.createElement("div", {
							className: Jt.a.flex
						}, i.a.createElement("img", {
							alt: N.fbt._("User avatar", null, {
								hk: "X43nA"
							}),
							className: Object(y.a)(Jt.a.pdpUserIcon, Jt.a.iconSpacer),
							src: C
						}), i.a.createElement(Bt.a, {
							authorClassName: Jt.a.actionFont,
							collapsed: !1,
							comment: m,
							onClick: e => (e.stopPropagation(), w(xt.COMMENT_AUTHOR)(e)),
							renderedInOverlay: h
						}), i.a.createElement(Vt.a, {
							className: Jt.a.leftSpacer,
							comment: m,
							subredditDisplayText: (null == x ? void 0 : x.displayText) || "",
							renderContractorBadge: !0,
							renderedInOverlay: h
						}), i.a.createElement(Kt.c, {
							className: Object(y.a)(Jt.a.separator, Jt.a.metadataColor)
						}), i.a.createElement(Dt.a, {
							className: Jt.a.metadataColor,
							key: "Created",
							comment: m,
							compact: !0,
							onClick: e => (e.stopPropagation(), w(xt.COMMENT_TIMESTAMP)(e)),
							permalink: u,
							renderedInOverlay: h
						}), m.editedAt && i.a.createElement(i.a.Fragment, null, i.a.createElement(Kt.c, {
							className: Object(y.a)(Jt.a.separator, Jt.a.metadataColor)
						}), i.a.createElement(Ut.a, {
							className: Jt.a.metadataColor,
							compact: !0,
							editedAt: m.editedAt
						}))), i.a.createElement("div", {
							className: Object(y.a)(Jt.a.commentContent, Jt.a.marginTop),
							"data-testid": qt.d
						}, i.a.createElement(Wt.b, {
							className: Jt.a.background,
							content: E,
							mediaMetadata: m.media && m.media.mediaMetadata,
							rtJsonElementProps: S({
								comment: m,
								pageLayer: c
							}),
							mediaProps: {
								alignLeft: !0,
								renderSmallMedia: !0
							}
						}), i.a.createElement(ht, {
							className: Object(y.a)(Jt.a.metadataFont, Jt.a.marginTop),
							comment: m
						})), i.a.createElement(M.b, {
							commentId: m.id
						}), i.a.createElement(M.a, {
							commentId: m.id,
							commentsPageKey: r
						}))))
					},
					moreResultsTypes: [d.hc.Comments],
					Placeholder: p.a,
					selector: ss,
					telemetryComponentName: "pdpCommentSearchResults",
					telemetryViewEvent: Lt.f
				}
			};
			const as = e => {
				const t = new m.a(250),
					s = Object(r.useRef)(),
					n = Object(r.useRef)(null),
					c = Object(ue.ib)(),
					p = Object(de.b)(),
					h = Object(a.d)(),
					{
						identifiers: f,
						listingKey: O,
						searchOptions: x,
						componentType: g,
						sidebar: v,
						originElement: j,
						pageKey: C,
						fireScreenview: y
					} = e,
					{
						cacheName: E,
						Component: _,
						moreResultsTypes: S,
						Placeholder: k,
						selector: w,
						telemetryComponentName: I,
						telemetryViewEvent: N,
						trackOnEnteredViewportCallback: P,
						trackOnExitedViewportCallback: T
					} = is[g],
					{
						apiError: R,
						apiPending: M,
						loadMore: F
					} = Object(a.e)(t => w(t, e)),
					L = !!Object(a.e)(e => Object(Pe.i)(e)),
					A = v ? es : f.length,
					B = v ? es : 10,
					D = Object(l.a)(L),
					U = Object(l.a)(f.length),
					V = () => Boolean(R) || !1 === M,
					W = () => f.length > 0,
					H = !(W() || V()),
					G = () => {
						if (!y) return;
						const e = Re.c.has(O) ? Re.c.end(O) : 0;
						p(Object(Ne.t)(O, x, Me.TimerType.InApp, e, c))
					};
				Object(r.useEffect)(() => {
					if (n.current && Re.c.has(n.current)) {
						const e = Re.c.end(n.current);
						if (e < 10) return;
						Object(Re.b)(d.n.Redesign, {
							duration: e,
							type: "mount",
							component: I
						})
					}
				}), Object(r.useEffect)(() => {
					H || G()
				}, [H]), Object(r.useEffect)(() => {
					n.current && Re.c.cancel(n.current), f.length && (n.current = Re.c.start())
				}, [n, O, f.length, U]), Object(r.useEffect)(() => {
					D && !L && G()
				}, [L, D]);
				const q = e => {
						s.current = e instanceof Element ? e : void 0
					},
					K = () => {
						const e = f.slice(0, A).map((e, s) => ((e, s) => {
							let n;
							n = function(e) {
								return void 0 !== e.type
							}(e) ? e.id : e;
							const o = `${E}-search-${s}-${O}`,
								r = Object(Lt.b)(n, O, () => {
									null == P || P(n, s), N(p, x, e, O, c, j)
								}),
								a = Object(Lt.c)(n, O, e => {
									null == T || T(p, n, O, x, c, e)
								}, s);
							let d;
							if (void 0 === (d = t.get(o))) {
								const t = `${E}-search-item-[id:${n}]`;
								d = {
									estHeight: 32,
									trackOnEnteredViewport: r,
									trackOnExitedViewport: a,
									id: n,
									render: () => i.a.createElement(_, {
										className: Zt.a.separatedCommunity,
										first: 0 === s,
										identifier: e,
										key: t,
										listingKey: O,
										searchOptions: x,
										sidebar: v,
										pageKey: C
									})
								}
							}
							return t.set(o, d), d
						})(e, s));
						return i.a.createElement(b.b, {
							getContainer: () => L ? document.getElementById(Ie.e) : null,
							key: O,
							innerRef: q,
							loadMoreToken: F && F.token ? F.token : void 0,
							onLoadMore: () => {
								h(Object(u.p)(S))
							}
						}, e)
					};
				return W() ? K() : V() ? K() : (() => {
					const e = !R;
					return i.a.createElement("div", {
						"data-testid": `${g}-list-placeholder`
					}, o()(B, t => i.a.createElement(k, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})()
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/config.ts"),
				o = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				r = s("./src/reddit/helpers/trackers/post.ts"),
				i = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				c = s("./src/telemetry/index.ts");
			const d = e => `search-result-${e}`;

			function l(e) {
				c.c.start(d(e))
			}

			function m(e, t, s, l, m, u) {
				const p = d(t);
				if (c.c.has(p)) {
					const d = c.c.end(p);
					!u && d > n.a.telemetry.postConsumedThreshold && e(e => {
						const n = Object(a.z)(e, t, s),
							c = Object(r.g)(t, d, !1, null != n ? n : void 0)(e);
						return c.actionInfo = Object(i.k)(e, m, Object(a.J)(e, m), {
							position: n
						}), c.search = Object(a.fb)(e, l, o.a.SERP, null != m ? m : void 0), c
					})
				}
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				i = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/selectors/commentSelector.ts");
			const c = new n.a(250),
				d = new n.a(250),
				l = (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let o = c.get(n);
					return void 0 === o && (o = s, c.set(n, o)), o
				},
				m = (e, t, s, n) => {
					const o = `left-${e}`;
					let r = d.get(o);
					return void 0 === r && (r = s, d.set(o, r)), r
				},
				u = (e, t, s, n, r) => e(e => Object(i.j)({
					action: o.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: r,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				p = (e, t, s, n, c, d) => e(e => {
					const l = Object(a.c)(e, {
						commentId: s
					});
					return Object(i.i)({
						action: o.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: c,
						comment: l,
						key: n,
						originElement: d,
						telemetrySource: r.a.SERP
					})
				}),
				b = (e, t, s, n, c, d) => e(e => {
					const l = Object(a.c)(e, {
						commentId: s
					});
					return Object(i.i)({
						action: o.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: c,
						comment: l,
						key: n,
						originElement: d,
						telemetrySource: r.a.PdpCommentSearch
					})
				}),
				h = (e, t, s, n, r) => e(e => ({
					...Object(i.l)({
						state: e,
						searchOptions: t,
						pageLayer: r,
						postId: s,
						key: n,
						useSearchPost: !0
					}),
					action: o.c.VIEW
				}))
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/search/index.ts"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");

			function c(e) {
				const {
					hasResults: t,
					searchBarId: s,
					searchOptions: n,
					noResultsType: c,
					searchResultsTab: d,
					pendingSelector: l
				} = e, m = Object(r.a)(n.q || ""), u = Object(i.e)(t => l(t, e)), p = void 0 === u || u;
				return o.a.createElement(o.a.Fragment, null, t || p ? e.children : o.a.createElement(a.a, {
					searchBarId: s,
					searchOptions: n,
					query: m,
					type: c,
					tab: d
				}))
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
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/routes/postCreation/constants.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/reddit/components/ShareMenu/index.m.less"),
				g = s.n(x);
			const v = Object(m.a)(u.a),
				j = e => {
					let {
						permalink: t,
						sendEventWithName: s
					} = e;
					return r.a.createElement(p.b, {
						className: g.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							s("share_embed"), window.open(`${a.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(b.a, {
						name: "embed",
						className: g.a.embedIcon
					}))
				},
				C = e => {
					let {
						onCrosspost: t
					} = e;
					return r.a.createElement(p.b, {
						className: g.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, r.a.createElement(b.a, {
						name: "crosspost",
						className: g.a.crosspostIcon
					}))
				},
				y = r.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(i.e)(t => Object(O.b)(e.dropdownId)(t)),
						a = Object(o.useCallback)(() => {
							t(Object(l.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						m = !e.subredditType || e.subredditType === h.g.Public,
						u = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
					return r.a.createElement("div", {
						className: e.className,
						onClick: a,
						id: e.dropdownId
					}, e.children, r.a.createElement(v, {
						className: g.a.dropdown,
						isOpen: s,
						tooltipId: e.dropdownId
					}, r.a.createElement(p.b, {
						className: g.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: s
							} = e, n = Object(c.a)(s, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), (e => t(Object(d.C)(e)))(n)
						}
					}, r.a.createElement(b.a, {
						name: "link_post",
						className: g.a.linkIcon
					})), u && r.a.createElement(C, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${f.b}?source_id=${e.post.id}`, "_blank")
						}
					}), m && r.a.createElement(j, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					})))
				});
			t.a = y
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("container", r.a)
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Onboarding/LanguageCollection/prompt.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/constants/location.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/trackers/navigation.ts"),
				f = s("./src/reddit/selectors/experiments/countrySites.ts"),
				O = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				x = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				g = s("./src/reddit/selectors/meta.ts"),
				v = s("./src/redditGQL/types.ts"),
				j = s("./src/reddit/components/SidebarFooter/index.m.less"),
				C = s.n(j);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = c.a.a("Link", C.a), _ = Object(i.c)({
				countryCode: g.b,
				d2xPdpSideRailRecsVariant: O.a,
				isCountrySitesEnabled: f.b,
				isD2xPdpSideRailRecsEnabled: O.b,
				isNavbarLikeMwebEnabled: x.a
			}), S = Object(r.b)(_), k = Object(b.v)({
				isFrontpage: b.B,
				isCountrySitePage: b.z
			}), w = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return o.a.createElement("div", {
					className: C.a.GreyRereddit
				}, s, !!p.c[t] && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), t === v.i.De && o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), t === v.i.De && o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), o.a.createElement("div", {
					className: C.a.Copyright
				}, y._("Reddit, Inc. © {year}. All rights reserved.", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})))
			};
			t.a = k(S(Object(l.c)(e => {
				const t = Object(r.f)().getState(),
					s = Object(f.a)(t, Object(a.c)());
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.kd.GreyRereddit || e.d2xPdpSideRailRecsVariant === u.kd.GreyRedditNoNsfw || e.d2xPdpSideRailRecsVariant === u.kd.LargeImagePreview ? e.reredditButtons : [];
					return o.a.createElement(w, {
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
					return s.includes(t) || "en" === t ? o.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, n[t]) : null
				};
				return o.a.createElement(m.a, {
					className: C.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, !!p.c[e.countryCode] && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/impressum"
				}, y._("Impressum", null, {
					hk: "4cKXSI"
				})), e.countryCode === v.i.De && o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: C.a.NoneCapitalizeLink
				}, y._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, y._("help", null, {
					hk: "4lyYaD"
				})), e.countryCode === v.i.De && o.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, y._("Transparency report", null, {
					hk: "3CgBdG"
				})))), o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, y._("User Agreement", null, {
					hk: "2RA6JL"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, y._("Privacy policy", null, {
					hk: "10K04G"
				}))), o.a.createElement("div", {
					className: C.a.Column
				}, o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, y._("Content policy", null, {
					hk: "1DyxZS"
				})), o.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, y._("Moderator Code of Conduct", null, {
					hk: "tWEG"
				})))), (e.isCountrySitePage || e.isCountrySitesEnabled) && o.a.createElement("div", {
					className: C.a.LinkContainer
				}, o.a.createElement("div", {
					className: C.a.Column
				}, n("en"), n("fr"), n("it")), o.a.createElement("div", {
					className: C.a.Column
				}, n("de"), n("es"), n("pt"))), o.a.createElement("div", {
					className: C.a.Copyright
				}, y._("Reddit, Inc. © {year}. All rights reserved.", [y._param("year", (new Date).getFullYear().toString())], {
					hk: "DPZBh"
				})), o.a.createElement(d.a, null))
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
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
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
			const O = c.g[1] + 24,
				x = m.f + 8,
				g = x + 152 + 16,
				v = g + O + 8,
				j = h.a.div("Container", b.a),
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
							top: `calc(100vh - ${s?x:8}px)`
						}
					}, n))
				}, "BackToTop", b.a),
				y = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: o,
						isSticky: r,
						shouldStickToBottom: i
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(s, {
							[b.a.BottomStickyStyles]: i,
							[b.a.StickyStyles]: !i && r && !o,
							[b.a.StickyStylesFakeOverlay]: !i && !!o
						})
					}, t)
				};
			class E extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > v,
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
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							className: o,
							hideFooter: r,
							pageLayer: i,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, m = this.state.isAdSticky && !(!t && !n), u = this.state.isBottomSticky;
					return a.a.createElement(j, {
						className: o,
						innerRef: this.setWrapperRef
					}, a.a.createElement(y, {
						isFakeOverlay: s,
						isSticky: m,
						shouldStickToBottom: u
					}, t, n, c, !r && a.a.createElement(l.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(C, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const _ = Object(u.v)();
			t.a = _(E)
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				O = s("./src/reddit/helpers/correlationIdTracker.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				g = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
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
			const _ = 129,
				S = Object(h.v)({
					filterName: e => Object(h.Z)(e)[b.j],
					url: e => Object(h.hb)(e)
				}),
				k = Object(a.c)({
					subredditId: (e, t) => Object(j.I)(e, t.subredditName)
				}),
				w = Object(i.b)(k),
				I = l.a.div("WidgetContent", y.a),
				N = e => {
					let {
						display: t,
						isFlairFilter: s,
						onMouseDown: n,
						onClick: o,
						...i
					} = e;
					return r.a.createElement("li", {
						className: Object(c.a)(y.a.StyledFlair, t === v.g.Cloud && y.a.cloudDisplay, {
							[y.a.flairFilter]: s,
							[y.a["m-selected"]]: i.isSelected
						}),
						onClick: () => null == o ? void 0 : o(Object(x.g)(i.flair)),
						onMouseDown: n
					}, r.a.createElement(m.c, E({}, i, {
						className: y.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
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
						Object(O.d)(O.a.SearchResults), this.props.sendEvent(Object(g.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > _ && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(f.r, {
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
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(N, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? _ : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
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
					return r.a.createElement("ul", null, r.a.createElement(N, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, o = this.getFlairsFromIds(n), i = e && this.getSelectedFlair(o) || void 0, a = t.order.length > n.length || s && !i;
					return r.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(I, null, i && this.renderSelectedFlairFilter(i), !i && this.renderFlairFilters(o), a && this.renderButton()))
				}
			}
			t.a = S(w(Object(u.c)(P)))
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
				O = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const v = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(g.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				j = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(g.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = v(e);
					return Object(x.e)(t)
				},
				y = e => {
					const t = j(e);
					return Object(x.e)(t)
				};
			var E = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(E);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(m.v)(), w = Object(r.b)(() => Object(i.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.o)(e, t) || void 0,
						n = t.redditStyle || Object(f.l)(e, {
							subredditId: s
						}),
						o = Object(O.fb)(e);
					return n || o
				},
				nigtmode: O.fb,
				subredditId: m.o,
				topPostVariant: h.d
			}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
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
					return e.backgroundColor = v(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = j(this.props), e.color = e.fill = y(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						id: i,
						onClick: c,
						onHeaderClick: l,
						title: m,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = s ? _.a.widgetContentOnly : _.a.widgetContent, f = !n && this.props.styles, O = f ? this.getWidgetBackgroundStyles() : {}, x = f ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: n,
							[_.a.clickable]: !!c,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: c,
						style: O
					}, m && o.a.createElement("div", {
						className: Object(a.a)(_.a.widgetHeader, {
							[_.a.clickable]: !!l
						}),
						id: i,
						style: {
							...x,
							...this.props.headerStyles
						},
						onClick: l
					}, o.a.createElement("div", {
						className: Object(a.a)(_.a.widgetTitle, p)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, m)), r), o.a.createElement("div", {
						className: Object(a.a)(h, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(u.r, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, S._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = k(w(Object(c.a)(Object(l.c)(I))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
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
				O = s("./src/reddit/featureFlags/index.ts"),
				x = s("./src/reddit/selectors/experiments/hidePostMitigation.ts"),
				g = s("./src/reddit/selectors/experiments/survey.ts"),
				v = s("./src/reddit/selectors/listings.ts"),
				j = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/tracking.ts"),
				E = s("./src/reddit/selectors/user.ts");

			function _() {
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
			const S = _(),
				k = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: O.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.U)(e, t),
					loadMore: v.g,
					postsById: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(j.S)(e, {
							listingKey: s,
							keepHiddenPosts: Object(x.a)(e)
						})
					},
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(j.C)(e, s, n, o, Object(x.a)(e))
					}),
					subredditsById: C.eb,
					viewportDataLoaded: y.b,
					pageReferrer: p.X,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: g.e,
					isLoggedIn: E.S
				},
				w = Object(o.c)(k),
				I = e => ({
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
					trackOnPostEnteredViewport: (t, s, n, o) => {
						e(d.M(t, n, o))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(d.N(t, n, o))
					},
					showModalOnScroll: () => e(d.ab()),
					surveyTriggerScrollCounted: () => e(Object(m.l)())
				}),
				N = e => Object(b.b)({
					...e
				}),
				P = (e, t, s, n) => {
					const {
						listingKey: o,
						hostPostData: r,
						listingBelowVariant: i
					} = n;
					return Object(h.n)(e, t, "post", o, r, i, void 0)
				},
				T = Object(n.b)(w, I, (e, t, s) => ({
					...e,
					...t,
					...s,
					postComponentForLayout: N,
					postClickEventFactory: P
				}));
			t.a = e => Object(u.c)(S(T(e)))
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "language-prompt-close",
				c = "post-content"
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/contexts/Visibility.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/raf/index.js"),
				r = s.n(o),
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
						this.state.isVisible || r()(this.setVisible)
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
					} = this.state, o = {
						...d,
						...t
					};
					return a.a.createElement(n.a, c({}, o, {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
			const m = e => o.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(a.a, {
					className: d.a.expandRight
				}, o.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				u = e => {
					let {
						className: t,
						...s
					} = e;
					return o.a.createElement(m, l({
						className: Object(r.a)(d.a.postCheckboxMenuItem, t)
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
				return v
			})), s.d(t, "c", (function() {
				return j
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(o),
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
				O = s("./src/reddit/controls/ErrorText/index.m.less"),
				x = s.n(O);
			class g extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
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
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: a
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(x.a.wrapper, t)
					}, d.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, r), a && d.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: o
					}, s || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, i = r.length ? r : o ? [o] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(g, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(v, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
		},
		"./src/reddit/endpoints/onboarding/languageSelections.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeGqlRequest/index.ts");
			var o, r = s("./src/redditGQL/operations/LanguageSelections.json"),
				i = s("./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json");
			! function(e) {
				e.ALL_KEY = "all_languages_simple", e.SUGGESTED_KEY = "suggested_languages", e.TOP_KEYS = "top_languages"
			}(o || (o = {}));
			const a = (e, t) => {
					const s = {
						allKey: e,
						suggestedKey: o.SUGGESTED_KEY
					};
					return Object(n.a)(t, {
						...r,
						variables: s
					})
				},
				c = async e => {
					const t = await a(o.ALL_KEY, e());
					if (!t.ok) return null;
					const s = t.body,
						n = null == s ? void 0 : s.data;
					return n ? (e => {
						const t = {},
							s = e.identity.preferences.spokenLanguages || [];
						return e.all.map(e => {
							t[e.isoCode] = e.translatedDisplayName
						}), {
							languages: t,
							preferences: s
						}
					})(n) : null
				}, d = async (e, t, s) => {
					const n = await a(e, t());
					if (!n.ok) return null;
					const r = n.body,
						i = null == r ? void 0 : r.data;
					if (i) {
						return ((e, t, s) => {
							let n = null,
								o = [];
							const r = [],
								i = [],
								a = {},
								c = {};
							if (!e) {
								t.identity.preferences.spokenLanguages.map(e => {
									c[e] = !0
								})
							}
							for (let d = 0; d < t.suggested.length; d++) {
								const o = t.suggested[d];
								if (a[o.isoCode] = !0, s === o.isoCode) n = o;
								else {
									if (!e && c[o.isoCode]) continue; {
										const t = !!(e || !e && c[o.isoCode]);
										r.push({
											selected: t,
											...o
										})
									}
								}
							}
							for (let d = 0; d < t.all.length; d++) {
								const r = t.all[d];
								r.isoCode === s ? (n = r, i.push({
									selected: !0,
									...r
								})) : !e && c[r.isoCode] ? i.push({
									selected: !0,
									...r
								}) : a[r.isoCode] || o.push({
									selected: !(e || !c[r.isoCode]),
									...r
								})
							}
							if (o = r.concat(o), null === n) {
								const e = s.split("-").shift();
								for (let t = 0; t < o.length; t++)
									if (o[t].isoCode === e) {
										n = o[t], o.splice(t, 1);
										break
									}
							}
							return n && ((e || !e && c[n.isoCode]) && (n.selected = !0), o.unshift(n)), e || (o = i.concat(o)), {
								sortedLanguages: o
							}
						})(e === o.TOP_KEYS, i, s)
					}
					return null
				}, l = async (e, t) => {
					const s = await ((e, t) => {
						const s = {
							input: {
								spokenLanguages: t
							}
						};
						return Object(n.a)(e, {
							...i,
							variables: s
						})
					})(e(), Object.keys(t));
					if (!s.ok) return null;
					const o = s.body;
					return null == o ? void 0 : o.data
				}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, i = r;
					return n ? o.a.createElement(t, i) : void 0 !== s ? o.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.b.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
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
									const s = Object(r.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = e;
									if (n && n.type === c.a.Post && n.postInfo) {
										const e = Object(r.f)(n.postInfo);
										t.posts[e.id] = e
									}
									return Object(c.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(i.a)(e.profile)) : Object(c.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(a.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(o.a)(e.subreddit))), s.id
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
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
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
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
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
				o = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(o);
			const i = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(r.a.loadingBar, i(e))
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
				return x
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "j", (function() {
				return j
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "d", (function() {
				return S
			}));
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/trackers/postEvent.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(o || (o = {}));
			const d = e => t => ({
					source: n.collection,
					noun: o.post,
					...u(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: n.collection,
						noun: s ? o.unfollow : o.follow,
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
						noun: s ? o.unfollow : o.follow,
						...u(e, t)
					})
				},
				u = (e, t) => {
					const s = {
						...c.q(e),
						action: r.c.CLICK,
						subreddit: c.nb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: c.M(e, t),
						postCollection: c.O(e, {
							postId: t
						}),
						postEvent: c.P(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...O(e),
					action: r.c.VIEW,
					noun: o.collectionEducation
				}),
				b = e => ({
					...O(e),
					action: r.c.CLICK,
					noun: o.collectionEducationGotIt
				}),
				h = e => ({
					...O(e),
					action: r.c.VIEW,
					noun: o.eventEducation
				}),
				f = e => ({
					...O(e),
					action: r.c.CLICK,
					noun: o.eventEducationGotIt
				}),
				O = e => ({
					...c.q(e),
					subreddit: c.nb(e),
					source: n.postComposer
				}),
				x = (e, t) => s => ({
					...u(s, e),
					source: t || n.postOverflowMenu,
					noun: o.collectionAddPost
				}),
				g = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: o.collectionRemovePost
				}),
				v = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: o.collectionCancel
				}),
				j = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						noun: o.collectionCreate
					}
				},
				C = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: o.collectionSelect
				}),
				y = e => t => ({
					...c.q(t),
					subreddit: c.nb(t),
					source: n.collectionComposer,
					action: r.c.CLICK,
					noun: o.collectionDelete,
					postCollection: c.N(t, {
						collectionId: e
					})
				}),
				E = e => t => ({
					...u(t),
					source: n.collectionComposer,
					noun: o.collectionEdit,
					postCollection: c.N(t, {
						collectionId: e
					})
				}),
				_ = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: o.startEvent
				}),
				S = () => e => {
					const t = Object(a.o)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						action: r.c.VIEW,
						noun: o.screen
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
				return O
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			}));
			var n, o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
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
						...m.q(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_create",
						subreddit: m.nb(e)
					})
				},
				h = e => {
					Object(u.a)({
						...m.q(e),
						source: n.postComposer,
						action: a.c.CLICK,
						noun: "event_edit",
						subreddit: m.nb(e),
						postEvent: v(e),
						postComposer: j(e)
					})
				},
				f = () => e => ({
					source: n.eventComposer,
					action: a.c.VIEW,
					noun: a.b.SCREEN,
					actionInfo: p(e),
					postEvent: v(e)
				}),
				O = e => t => ({
					...E(t, Object(d.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: C(e)
				}),
				x = () => e => ({
					...E(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				g = e => t => ({
					...E(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: j(t),
					postEvent: y(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && y(t)
				},
				j = e => C(Object(l.p)(e)),
				C = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === c.j.AtEventTime ? Object(i.f)(e.startDate).getTime() / o.Wb : void 0
					}
				},
				y = e => {
					const t = Object(i.f)(e.startDate).getTime() / o.Wb,
						s = Object(i.f)(e.endDate).getTime() / o.Wb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(r.e)(t, s)
					}
				},
				E = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: a.c.CLICK,
						subreddit: m.nb(e)
					};
					return t ? {
						...s,
						post: m.M(e, t),
						postEvent: m.P(e, {
							postId: t
						}),
						postCollection: m.O(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/subredditMuting.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/telemetry/models/Event.ts");
			const r = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: o.e.SubredditMuting,
						action: o.c.Mute,
						noun: o.d.Subreddit,
						subreddit: {
							id: t
						},
						...n.q(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				},
				i = e => {
					let {
						subredditId: t,
						postId: s
					} = e;
					return e => ({
						source: o.e.SubredditMuting,
						action: o.c.Unmute,
						noun: o.d.Subreddit,
						subreddit: {
							id: t
						},
						...n.q(e),
						...s && {
							post: {
								id: s
							}
						}
					})
				}
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
			var n, o, r = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {}));
			const a = (e, t) => s => ({
					source: o.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: n.SEE_MORE,
					widget: Object(i.Ab)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...i.q
				}),
				c = (e, t) => s => ({
					source: o.POST,
					action: r.c.CLICK,
					noun: n.REREDDIT_PROMO,
					post: i.M(s, e),
					subreddit: i.nb(s),
					...t && {
						banner: {
							buttonText: t,
							id: n.REREDDIT_PROMO
						}
					},
					...i.q(s)
				}),
				d = () => e => ({
					source: o.SIDEBAR,
					action: r.c.VIEW,
					noun: n.TOPICS_WIDGET,
					...i.q(e)
				}),
				l = e => t => ({
					source: o.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: n.TOPIC,
					...i.q(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("i", d({
					className: Object(r.a)(Object(i.b)("comment", s.isFilled), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
			t.a = e => o.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(i.b)("mod", e.isFilled), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), o.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/LiveChat/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16",
				stroke: "white"
			}, e), o.a.createElement("path", {
				d: "M1.17567 6.90708L1.17579 6.9071L1.17765 6.89503C1.61505 4.05191 3.95864 1.69386 6.90278 1.17649C11.5294 0.445398 15.5469 4.48817 14.7445 9.01081L14.7433 9.01787L14.7422 9.02495C14.3037 11.8753 11.9552 14.2237 9.10488 14.6623L9.10486 14.6621L9.09283 14.6642C7.41037 14.9568 5.80338 14.5919 4.48582 13.7867L4.249 13.642L3.98282 13.7206L1.45885 14.4663L2.19817 12.0209L2.27918 11.7529L2.13322 11.5141C1.31702 10.1785 0.886321 8.57086 1.17567 6.90708Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10",
				strokeLinecap: "square"
			}), o.a.createElement("path", {
				d: "M8.00018 12.3201C10.386 12.3201 12.3202 10.3859 12.3202 8.00005C12.3202 5.61418 10.386 3.68005 8.00018 3.68005C5.61431 3.68005 3.68018 5.61418 3.68018 8.00005C3.68018 10.3859 5.61431 12.3201 8.00018 12.3201Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}), o.a.createElement("path", {
				d: "M8.00008 9.92008C9.06047 9.92008 9.92008 9.06047 9.92008 8.00008C9.92008 6.93969 9.06047 6.08008 8.00008 6.08008C6.93969 6.08008 6.08008 6.93969 6.08008 8.00008C6.08008 9.06047 6.93969 9.92008 8.00008 9.92008Z",
				strokeWidth: "1.25",
				strokeMiterlimit: "10"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), o.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? r.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("g", null, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("polygon", {
				points: "0,40 14.3,29.2 10.8,25.7"
			}), o.a.createElement("path", {
				d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
			}))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/TextPost/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
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
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
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
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: a,
					...l
				} = e;
				return o.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n, o;

			function r(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})), s.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {})),
				function(e) {
					e.LOW = "LOW", e.HIGH = "HIGH"
				}(o || (o = {}))
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return Mn
			})), s.d(t, "default", (function() {
				return Fn
			}));
			var n = s("./node_modules/lodash/pick.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./node_modules/lodash/isEqual.js"),
				u = s.n(m),
				p = s("./src/reddit/actions/searchQueryId/index.tsx"),
				b = s("./src/reddit/actions/survey/index.ts"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				O = s("./src/reddit/constants/page.ts"),
				x = s("./src/reddit/selectors/searchResults.ts"),
				g = s("./node_modules/lodash/constant.js"),
				v = s.n(g),
				j = s("./node_modules/lodash/times.js"),
				C = s.n(j),
				y = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				E = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				_ = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				S = s.n(_);
			const k = e => {
				const {
					listingKey: t,
					searchOptions: s,
					originElement: n
				} = e, o = Object(a.e)(e => Object(x.d)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(x.t)(e, {
					listingKey: t
				})), c = Boolean(r && r.token) && o.length > 0;
				return i.a.createElement("div", {
					className: S.a.container,
					"data-testid": "comments-list"
				}, i.a.createElement(y.b, {
					identifiers: o,
					listingKey: t,
					searchOptions: s,
					componentType: y.c.Comments,
					originElement: n,
					fireScreenview: !0
				}), c && i.a.Children.toArray(C()(3, v()(i.a.createElement(E.a, {
					className: S.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var w = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const I = (e, t) => Boolean(t && t.token) && e.length > 0,
				N = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(a.e)(e => Object(x.g)(e, {
						listingKey: t
					})), o = Object(a.e)(e => Object(x.u)(e, {
						listingKey: t
					}));
					return i.a.createElement("div", {
						className: S.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && i.a.createElement(y.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: y.c.Subreddits,
						fireScreenview: !0
					}), I(n, o) && i.a.Children.toArray(C()(3, v()(i.a.createElement(w.a, {
						className: S.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var P = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				T = s.n(P),
				R = s("./src/reddit/components/SearchResultsContent/NoResults/index.tsx");
			const M = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(a.e)(e => Object(x.a)(e, {
					listingKey: t
				})), o = Object(a.e)(e => Object(x.s)(e, {
					listingKey: t
				}));
				return i.a.createElement("div", {
					className: S.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && i.a.createElement(y.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: y.c.Users,
					fireScreenview: !0
				}), I(n, o) && i.a.Children.toArray(C()(3, v()(i.a.createElement(w.a, {
					className: S.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var F = s("./src/config.ts"),
				L = s("./src/lib/ads/index.ts"),
				A = s("./src/lib/intersectionObserver/index.ts"),
				B = s("./src/lib/isUrl/index.ts"),
				D = s("./src/lib/opener/index.ts"),
				U = s("./src/reddit/actions/post.ts"),
				V = s("./src/reddit/components/BlankPost/index.tsx"),
				W = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				H = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/Media/index.tsx"),
				q = s("./src/reddit/components/PostContainer/index.tsx"),
				K = s("./src/reddit/components/Thumbnail/index.tsx"),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/constants/adEvents.ts"),
				Y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				Z = s("./src/reddit/helpers/clickSourceData/index.ts"),
				$ = s("./src/reddit/helpers/overlay/index.ts"),
				ee = s("./src/reddit/helpers/path/index.ts"),
				te = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				se = s("./src/reddit/helpers/trackers/searchResults.ts"),
				ne = s("./src/reddit/models/Media/index.ts"),
				oe = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				re = s("./src/reddit/selectors/posts.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ae = s("./node_modules/reselect/es/index.js"),
				ce = s("./src/lib/getShortenedLink.ts"),
				de = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				le = s("./src/reddit/components/PostTitle/index.tsx"),
				me = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				ue = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				pe = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				be = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				he = s("./src/reddit/components/CallToActionButton/index.tsx"),
				fe = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				Oe = s("./src/reddit/hooks/useTheme.ts"),
				xe = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ge = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				ve = s.n(ge);
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ce = `${F.a.assetPath}/img/link-placeholder.png`, ye = Object(ae.c)({
				autoplayPref: ie.d,
				flairStyleTemplate: Y.Y,
				showCTAExperiment: oe.a
			});

			function Ee(e) {
				var t;
				const {
					postId: s,
					listingKey: n,
					searchOptions: o,
					discoveryUnit: c
				} = e, d = Object(r.useRef)(), l = Object(r.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: u,
					showCTAExperiment: p
				} = Object(a.e)(t => ye(t, e)), b = Object(a.e)(e => Object(x.z)(e, {
					identifier: s
				})), h = Object(a.e)(e => Object(re.d)(e, {
					postId: s
				})), O = Object(a.e)(xe.b), g = Object(a.e)(xe.c), v = Object(Y.ib)(), j = Object(z.b)(), C = Object(a.d)(), y = Object(Oe.a)(), {
					post: E,
					subredditOrProfile: _
				} = Object(J.d)(s), S = Object(L.w)(E), k = Object(r.useCallback)((e, t) => {
					C(Object(U.O)(e, t))
				}, [C]), w = !!E.source && !h;
				if (Object(r.useEffect)(() => (d.current && Object(A.a)(d.current, (e, t) => {
						l.current && (t ? l.current.focusContent() : l.current.pauseContent())
					}), Object(se.w)(n, E.id, o, v, c), () => {
						d.current && Object(A.b)(d.current), l.current && l.current.stopContent(), d.current = null, l.current = null
					}), []), !E) return null;
				const {
					media: I
				} = h || E || {}, N = (null == I ? void 0 : I.type) === ne.o.EMBED && (null == I ? void 0 : I.provider) === ne.v.Twitter, P = (null == I ? void 0 : I.type) === ne.o.VIDEO || (null == I ? void 0 : I.type) === ne.o.GIFVIDEO;

				function T(e) {
					e.stopPropagation(), e.preventDefault(), E.isSponsored ? (C(Object(U.y)(E, Q.a.Click)), E.source ? E.source.outboundUrl ? Object(D.e)(E.source.outboundUrl, D.d.BLANK) : Object(D.e)(E.source.url, D.d.BLANK) : Object(D.e)(E.permalink, D.d.BLANK)) : C(O || g ? Object(U.Z)(Object(ee.b)(E.permalink), E.id) : Object($.a)({
						pathname: Object(ee.b)(E.permalink),
						state: Object(Z.b)(v)
					}))
				}

				function R(e) {
					E.isSponsored && P || T(e), E.isSponsored && function(e) {
						P || (e.stopPropagation(), e.preventDefault()), j(Object(se.y)(E.id, o, c, n, v))
					}(e)
				}
				return E.isBlank ? i.a.createElement(V.BlankPost, {
					onPostViewable: k,
					post: E,
					postId: E.id
				}) : i.a.createElement(J.a, {
					postId: s
				}, i.a.createElement(q.b, {
					className: ve.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let r = null,
							i = te.r;
						return E.isSponsored || (i = te.t, r = null !== (s = se.E[t]) && void 0 !== s ? s : se.e.POST), i(o, v, r, n, c)(e)
					},
					onClick: T,
					post: E,
					"data-click-id": "hero_unit",
					style: {
						...Object(fe.d)({
							theme: y,
							flairStyleTemplate: u,
							redditStyle: !1
						}),
						...Object(fe.b)(u)
					}
				}, i.a.createElement(de.a, {
					"data-click-id": "background"
				}, i.a.createElement(W.a, {
					className: ve.a.eventMeta,
					post: E
				}), i.a.createElement("div", {
					className: Object(f.a)(ve.a.postContent, {}),
					"data-click-id": "body"
				}, i.a.createElement(ue.c, {
					className: ve.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: E,
					subredditOrProfile: _
				}), i.a.createElement("div", {
					className: ve.a.postItemTitleContainer
				}, i.a.createElement(le.c, {
					hideSourceLink: !0,
					post: E,
					size: le.b.Medium,
					isOverlay: !1
				}), !S && w && i.a.createElement(pe.a, {
					className: ve.a.outboundLink,
					href: (null === (t = null == E ? void 0 : E.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: E.isSponsored,
					postId: E.id,
					source: E.source
				}, Object(ce.a)(E))), function() {
					let e = i.a.createElement(i.a.Fragment, null);
					const t = !!E.source && Object(B.a)(E.source.url) || !!E.thumbnail && Object(B.a)(E.thumbnail.url),
						s = !(null == I ? void 0 : I.type) && t,
						n = Object(f.a)(ve.a.mediaWrapper, {
							[ve.a.marginCancel]: S && !!E.source,
							[ve.a.promotedTrend]: E.isSponsored
						});
					if (s) e = i.a.createElement("div", {
						className: n
					}, i.a.createElement(K.b, {
						className: ve.a.thumbnail,
						post: E,
						templatePlaceholderImage: Ce,
						usePreview: !0
					}));
					else if (I)
						if (I.type !== ne.o.RTJSON && I.type !== ne.o.TEXT) e = i.a.createElement("div", {
							className: Object(f.a)(n, N && ve.a.twitterEmbed),
							onClickCapture: R,
							ref: e => d.current = e
						}, i.a.createElement(G.a, {
							className: ve.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: E.isSponsored,
							post: h || E,
							primaryContent: !0,
							scrollerItemRef: e => l.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = i.a.createElement("div", {
								className: ve.a.mediaPlaceholder
							}), (I.type === ne.o.RTJSON && I.richtextContent || I.type === ne.o.TEXT && I.content) && Object(X.a)(E, null == y ? void 0 : y.subredditContext) && (e = i.a.createElement("div", {
								className: n,
								onClickCapture: T,
								ref: e => d.current = e
							}, i.a.createElement(G.a, {
								autoplayPref: m,
								className: ve.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: h || E,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), i.a.createElement("div", {
								className: ve.a.seeMore
							}, je._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), S && E.source && i.a.createElement(be.a, {
					className: ve.a.adLinkWrapper,
					ctaExperimentDesign: p && "card"
				}, i.a.createElement(pe.a, {
					className: Object(f.a)(ve.a.outboundLink, {
						[ve.a.ctaExperiment]: p
					}),
					href: E.source.url.replace(F.a.redditUrl, ""),
					isSponsored: E.isSponsored,
					postId: E.id,
					source: E.source
				}, E.source.displayText), E.callToAction && i.a.createElement(he.a, {
					className: ve.a.adCallToAction,
					href: E.source.url.replace(F.a.redditUrl, ""),
					isSponsored: E.isSponsored,
					postId: E.id,
					source: E.source,
					showCTAExperiment: p
				}, E.callToAction)), !E.isSponsored && i.a.createElement(me.c, {
					className: Object(f.a)(ve.a.postItemFlatlistContainer),
					post: b || E
				}), i.a.createElement(H.d, null)))))
			}
			var _e = s("./src/lib/LRUCache/index.ts"),
				Se = s("./src/reddit/components/Scroller/Simple.tsx"),
				ke = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				we = s("./src/reddit/components/SearchResultsContent/SearchResultsList/utils.ts"),
				Ie = s("./src/reddit/hooks/usePageLayer.ts"),
				Ne = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const Pe = 376,
				Te = new _e.a(1);

			function Re(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: o,
					children: r
				} = e;
				const c = Object(a.d)(),
					d = Object(Ie.a)(),
					l = Object(z.b)();
				if (!t || !o) return null;
				const m = () => {
					const e = `entered-hero-unit-${o}`;
					let r = ke.a.get(e);
					if (void 0 === r) {
						const i = t.layout.viewTypeWeb === Ne.b.PromotedTrendHero;
						r = () => {
							c((e, r) => {
								Object(we.b)(o), Object(te.u)(r(), t, o, n, d, s, i)
							})
						}, ke.a.set(e, r)
					}
					return r
				};
				return i.a.createElement(Se.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let i;
					return void 0 === (i = Te.get(e)) && (i = {
						estHeight: Pe,
						trackOnEnteredViewport: m(),
						trackOnExitedViewport: Object(ke.c)(o, s, e => Object(we.a)(l, o, s, n, d, e), 0),
						id: t.id,
						render: () => r
					}), Te.set(e, i), [i]
				})())
			}
			var Me = s("./src/reddit/components/SearchPost/Placeholder.tsx"),
				Fe = s("./src/reddit/models/DiscoveryUnit/index.ts");
			const {
				Hero: Le,
				PromotedTrendHero: Ae
			} = Ne.b;
			const Be = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e;
				let n = Object(a.e)(e => Object(x.w)(e, {
					listingKey: t
				}));
				const o = Object(a.e)(e => Object(x.v)(e, {
						listingKey: t
					})),
					c = Object(a.e)(e => Object(x.C)(e)),
					d = Object(a.e)(e => (e => {
						const t = e.listings.activeKey,
							s = e.searchDiscoveryUnits.models[t];
						return s || {}
					})(e));
				let l;
				c === Ne.c.Trending && (l = function(e) {
					const t = Object.values(e).find(e => e.layout.viewTypeWeb === Le || e.layout.viewTypeWeb === Ae);
					if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
				}(d));
				const m = Object(r.useMemo)(() => Object.values(d).find(e => e.name === Fe.l || e.name === Fe.f), [d]);
				if (l && m) {
					const e = (n = [...n]).indexOf(l);
					n.splice(e, 1)
				}
				return i.a.createElement(i.a.Fragment, null, l && m && i.a.createElement(Re, {
					key: l,
					postId: l,
					discoveryUnit: m,
					searchOptions: s,
					listingKey: t
				}, i.a.createElement(Ee, {
					key: l,
					discoveryUnit: m,
					postId: l,
					listingKey: t,
					searchOptions: s
				})), i.a.createElement("div", {
					className: S.a.container,
					"data-testid": "posts-list"
				}, i.a.createElement(y.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: y.c.Posts,
					fireScreenview: !0
				}), function(e, t) {
					return Boolean(t && t.token) && e.length > 0
				}(n, o) && i.a.Children.toArray(C()(3, v()(i.a.createElement(Me.a, {
					className: S.a.loadMoreItem,
					isLoading: !0
				}))))))
			};
			var De = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/SearchResultsScreen.tsx");

			function Ue(e) {
				const {
					listingKey: t,
					searchOptions: s,
					tab: n
				} = e, o = Object(a.e)(e => Object(x.n)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(x.l)(e, {
					listingKey: t
				})), c = Object(a.e)(e => Object(x.m)(e, {
					listingKey: t
				})), d = Object(a.e)(e => Object(x.o)(e, {
					listingKey: t
				}));
				return i.a.createElement("div", {
					className: Object(f.a)(T.a.resultsContainer)
				}, n === O.h.Listings ? i.a.createElement(De.a, {
					hasResults: o,
					searchOptions: s,
					noResultsType: R.b.Communities,
					searchResultsTab: O.h.Listings,
					listingKey: t,
					pendingSelector: x.i
				}, i.a.createElement(N, {
					listingKey: t,
					searchOptions: s,
					key: O.h.Listings
				})) : n === O.h.People ? i.a.createElement(De.a, {
					hasResults: r,
					searchOptions: s,
					noResultsType: R.b.People,
					searchResultsTab: O.h.People,
					listingKey: t,
					pendingSelector: x.c
				}, i.a.createElement(M, {
					listingKey: t,
					searchOptions: s,
					key: O.h.People
				})) : n === O.h.Comments ? i.a.createElement(De.a, {
					hasResults: c,
					searchOptions: s,
					noResultsType: R.b.Comments,
					searchResultsTab: O.h.Comments,
					listingKey: t,
					pendingSelector: x.f
				}, i.a.createElement(k, {
					listingKey: t,
					searchOptions: s,
					key: O.h.Comments
				})) : i.a.createElement(De.a, {
					hasResults: d,
					searchOptions: s,
					noResultsType: R.b.Posts,
					searchResultsTab: O.h.Posts,
					listingKey: t,
					pendingSelector: x.y
				}, i.a.createElement(Be, {
					listingKey: t,
					searchOptions: s,
					key: O.h.Comments
				})))
			}
			var Ve = s("./src/reddit/selectors/searchFix.ts"),
				We = s("./src/reddit/selectors/subreddit.ts");
			const He = (e, t) => {
				const s = Object(Ve.a)(e, t);
				return s ? Object(We.C)(e, {
					subredditName: s
				}) : null
			};
			var Ge = s("./node_modules/fbt/lib/FbtPublic.js"),
				qe = s("./node_modules/lodash/noop.js"),
				Ke = s.n(qe),
				ze = s("./src/lib/constants/colors.ts"),
				Qe = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ye = s("./src/reddit/helpers/localStorage/index.ts");
			const Je = () => {
				const [e, t] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					var e;
					const s = null !== (e = Object(Ye.F)("should-show-comment-tab-tooltip")) && void 0 !== e ? e : 2;
					t(Boolean(s)), 2 === s ? Object(Ye.Jb)("should-show-comment-tab-tooltip", 1) : 1 === s && Object(Ye.Jb)("should-show-comment-tab-tooltip", !1)
				}, []), {
					get shouldShowCommentTabTooltip() {
						return e
					},
					resetShowCommentTabTooltip() {
						e && t(!1)
					}
				}
			};
			var Xe = s("./src/reddit/controls/InternalLink/index.tsx"),
				Ze = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				$e = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				et = s("./src/reddit/hooks/useTracking.ts"),
				tt = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				st = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.tsx"),
				nt = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				ot = s.n(nt);

			function rt(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: n
				} = e;
				const o = Object(et.a)(),
					d = Object(a.e)(ie.mb),
					m = Object(a.e)(x.C),
					u = Object(Y.ib)(),
					p = m === Ne.c.Trending,
					b = Object($e.a)({}),
					{
						shouldShowCommentTabTooltip: h,
						resetShowCommentTabTooltip: f
					} = Je();
				b.arrowProps.style = {
					...b.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${ze.a.alien600}`
				}, b.popperProps.style = {
					...b.popperProps.style,
					backgroundColor: ze.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(r.useEffect)(() => {
					if (h) return window.addEventListener("click", f), () => {
						window.removeEventListener("click", f)
					}
				}, [h]);
				const g = {
						condition: !0,
						active: t === O.h.Posts,
						target: se.b.Posts,
						contentType: c.hc.Posts,
						text: Ge.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					v = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === O.h.Listings,
						target: se.b.Communities,
						contentType: c.hc.Subreddits,
						text: Ge.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					j = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === O.h.People,
						target: se.b.People,
						contentType: c.hc.Users,
						text: Ge.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					C = [g, {
						condition: !(s.source === l.a.Trending || s.source === l.a.PromotedTrend),
						active: t === O.h.Comments,
						target: se.b.Comments,
						contentType: c.hc.Comments,
						text: Ge.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, v, j],
					y = d && !p;
				return i.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: ot.a.searchResultsNav
				}, i.a.createElement("div", {
					className: ot.a.pillRow,
					role: "tablist"
				}, C.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: n,
						text: r,
						contentType: a
					} = e;
					return i.a.createElement(Xe.default, {
						key: n,
						"data-testid": n,
						to: Object(Ze.b)({
							searchType: a,
							pageLayer: u
						}),
						"aria-selected": t,
						role: "tab",
						className: ot.a.pillElement,
						onClick: () => (e => {
							e.active || o(Object(se.m)(e.target, s))
						})(e)
					}, i.a.createElement(Qe.a, {
						visible: Boolean(e.showTooltip) && h,
						arrowProps: b.arrowProps,
						popperProps: b.popperProps
					}, Ge.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), i.a.createElement(tt.a, {
						active: t,
						onClick: Ke.a,
						variant: tt.b.TAB_GROUP
					}, r))
				})), n && i.a.createElement("div", {
					className: ot.a.searchSwitcherContainer
				}, n), y && i.a.createElement("div", {
					className: ot.a.nsfwToggleContainer
				}, i.a.createElement(st.a, {
					searchOptions: s
				})))
			}
			var it = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				at = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				ct = s.n(at),
				dt = s("./src/lib/lessComponent.tsx");
			const {
				fbt: lt
			} = s("./node_modules/fbt/lib/FbtPublic.js"), mt = dt.a.div("ButtonContainer", ct.a), ut = dt.a.div("Container", ct.a), pt = dt.a.img("BannerImg", ct.a), bt = dt.a.img("SnooImg", ct.a), ht = dt.a.div("CommunityText", ct.a);
			var ft = () => i.a.createElement(ut, null, i.a.createElement(pt, {
					src: `${F.a.assetPath}/img/search-results-community-banner.png`
				}), i.a.createElement(bt, {
					src: `${F.a.assetPath}/img/snoo-thinking.png`
				}), i.a.createElement(ht, null, lt._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), i.a.createElement(mt, null, i.a.createElement(it.a, {
					className: ct.a.Button,
					eventSource: "sidebar"
				}))),
				Ot = s("./src/reddit/components/IdCard/async.tsx"),
				xt = s("./src/reddit/components/SidebarContainer/index.tsx"),
				gt = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				vt = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				jt = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ct = s("./src/reddit/selectors/platform.ts"),
				yt = s("./src/reddit/selectors/widgets.ts"),
				Et = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				_t = s.n(Et);
			const St = Object(ae.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.s)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.u)(e, {
							listingKey: s
						})
					},
					currentSubreddit: Ct.e,
					isLoggedIn: ie.S,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(x.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(We.I)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(We.I)(e, s);
						return Object(yt.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(yt.d)(e, {
							subredditName: s
						})
					}
				}),
				kt = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: n,
						communityIdentifiers: o,
						communitiesLoadMore: r,
						hasAuthorResults: a,
						hasCommunityResults: d,
						listingKey: l,
						listingName: m,
						idCardWidget: u,
						isLoggedIn: p,
						postFlairWidgets: b,
						searchOptions: h,
						currentSubreddit: f
					} = e;
					const O = Boolean(f && m === f.name && h.restrict_sr),
						x = !!h.is_multi,
						g = o.length > y.a || !!r,
						v = t.length > y.a || !!s;
					let j;
					const C = Object(Ie.a)();
					return O ? j = i.a.createElement(i.a.Fragment, null, u && i.a.createElement(Ot.a, {
						listingName: m
					}), b && b.map((e, t) => i.a.createElement(gt.a, {
						key: `widgetSpacer-${t}`
					}, i.a.createElement(jt.a, {
						subredditName: m,
						widget: e
					})))) : x || (j = i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: _t.a.container,
						"data-testid": "communities-list"
					}, i.a.createElement("h4", {
						className: _t.a.header
					}, Ge.fbt._("Communities", null, {
						hk: "3cMR66"
					})), d ? i.a.createElement(i.a.Fragment, null, !h.is_multi && i.a.createElement(y.b, {
						componentType: y.c.Subreddits,
						identifiers: o,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), g && i.a.createElement(Xe.default, {
						to: Object(Ze.b)({
							searchType: c.hc.Subreddits,
							pageLayer: C
						})
					}, i.a.createElement("p", {
						className: _t.a.link
					}, Ge.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : i.a.createElement("p", {
						className: _t.a.noResults
					}, Ge.fbt._("No results", null, {
						hk: "3feoKq"
					}))), i.a.createElement("div", {
						className: _t.a.container,
						"data-testid": "authors-list"
					}, i.a.createElement("h4", {
						className: _t.a.header
					}, Ge.fbt._("People", null, {
						hk: "2M8TqB"
					})), a ? i.a.createElement(i.a.Fragment, null, !h.is_multi && i.a.createElement(y.b, {
						componentType: y.c.Users,
						identifiers: t,
						listingKey: l,
						searchOptions: h,
						sidebar: !0
					}), v && i.a.createElement(Xe.default, {
						to: Object(Ze.b)({
							searchType: c.hc.Users,
							pageLayer: C
						})
					}, i.a.createElement("p", {
						className: _t.a.link
					}, Ge.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : i.a.createElement("p", {
						className: _t.a.noResults
					}, Ge.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), p && i.a.createElement("div", {
						className: _t.a.container
					}, i.a.createElement(ft, null)))), i.a.createElement(xt.a, {
						"data-testid": "search-results-sidebar",
						className: n
					}, j, i.a.createElement(vt.a, null))
				},
				wt = e => {
					const t = Object(a.e)(t => St(t, e)),
						s = {
							...e,
							...t
						};
					return i.a.createElement(kt, s)
				};
			var It = s("./src/reddit/layout/row/Inline/index.tsx"),
				Nt = s("./src/reddit/constants/parameters.ts"),
				Pt = s("./src/lib/addQueryParams/index.ts");
			const Tt = (e, t, s, n, o, r) => {
				const i = e && e[s],
					a = {};
				let c = Object(Pt.a)(t, {
					[s]: o
				});
				const d = [];
				for (const l of n) {
					const e = Object(Pt.a)(t, {
						[s]: l
					});
					a[e] = r[l](), d.push(e), i === l && (c = e)
				}
				return {
					optionLabels: a,
					options: d,
					value: c
				}
			};
			var Rt = s("./src/higherOrderComponents/asTooltip.tsx"),
				Mt = s("./src/reddit/controls/Dropdown/index.tsx"),
				Ft = s("./src/reddit/icons/fonts/index.tsx"),
				Lt = s("./src/reddit/actions/tooltip.ts"),
				At = s("./src/reddit/selectors/tooltip.ts");
			const Bt = Object(ae.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(At.b)(s)(e)
				}
			});
			var Dt = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				Ut = s.n(Dt),
				Vt = s("./node_modules/query-string/index.js"),
				Wt = s.n(Vt),
				Ht = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Gt = s("./src/reddit/constants/history.ts"),
				qt = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Kt = s("./src/reddit/helpers/history/index.ts"),
				zt = s("./node_modules/lodash/fromPairs.js"),
				Qt = s.n(zt),
				Yt = s("./src/lib/extractQueryParams/index.ts"),
				Jt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Xt = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				Zt = s("./src/reddit/selectors/telemetry.ts");
			const $t = (e, t) => {
					const s = Qt()([...Object(Yt.a)(e)]);
					return Object(c.yc)(s.sort) && (t.sort = s.sort), Object(c.zc)(s.t) && (t.t = s.t), t
				},
				es = (e, t, s, n) => () => e(e => {
					const o = Zt.J(e, null);
					return {
						...Object(se.f)(e),
						source: "search",
						action: "click",
						noun: t,
						correlationId: Object(Jt.c)(Jt.a.SearchResults),
						actionInfo: Object(se.k)(e, null, o),
						search: Zt.fb(e, $t(s, n), Xt.a.SERP)
					}
				}),
				ts = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: r,
						displayText: a
					} = e;
					const c = Object(z.b)();
					return i.a.createElement(Ht.a, {
						key: s,
						to: {
							pathname: Wt.a.parseUrl(s).url,
							state: {
								[Gt.b.SearchOriginPage]: Object(Kt.b)(Gt.b.SearchOriginPage)
							},
							search: s.replace(Wt.a.parseUrl(s).url + "?", "")
						},
						onClick: es(c, o, s, n)
					}, i.a.createElement(qt.b, {
						className: Object(f.a)(r.SelectOption, t && r.mIsSelected),
						displayText: a,
						isSelected: t
					}))
				};
			var ss = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				ns = s.n(ss);

			function os() {
				return (os = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const rs = Object(Rt.a)(e => i.a.createElement(Mt.a, os({
					className: Ut.a.Component
				}, e))),
				is = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: o,
						searchOptions: r,
						tooltipId: c,
						type: d,
						value: l,
						...m
					} = e;
					const {
						isOpen: u,
						onClick: p
					} = (e => {
						const {
							isOpen: t
						} = Object(a.e)(t => Bt(t, {
							tooltipId: e
						})), s = Object(a.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(Lt.i)()) : () => s(Object(Lt.f)({
								tooltipId: e
							}))
						}
					})(c);
					return i.a.createElement("div", {
						className: Ut.a.Wrapper
					}, i.a.createElement(tt.a, os({}, m, {
						active: u,
						className: Object(f.a)(Ut.a.filterButton, t && Ut.a.hasValue),
						onClick: p,
						variant: tt.b.TAB_GROUP
					}), s, i.a.createElement(Ft.a, {
						name: "caret_down",
						className: Object(f.a)(Ut.a.caret, u && Ut.a.caretOpen)
					})), i.a.createElement("div", {
						id: c
					}, i.a.createElement(rs, {
						className: Ut.a.Dropdown,
						isOpen: u,
						tooltipId: c
					}, n.map((e, t) => i.a.createElement(ts, {
						displayText: o[e],
						key: t,
						isSelected: e === l,
						option: e,
						searchOptions: r,
						styles: {
							mIsSelected: ns.a.mIsSelected,
							SelectOption: ns.a.SelectOption
						},
						type: d
					})))))
				},
				as = {
					[O.h.Posts]: [c.ec.Relevance, c.ec.Hot, c.ec.Top, c.ec.New, c.ec.Comments],
					[O.h.Comments]: [c.ec.Relevance, c.ec.Top, c.ec.New]
				},
				cs = {
					[c.ec.Hot]: () => Ge.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[c.ec.Relevance]: () => Ge.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[c.ec.Top]: () => Ge.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[c.ec.New]: () => Ge.fbt._("New", null, {
						hk: "23egpt"
					}),
					[c.ec.Comments]: () => Ge.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function ds() {
				return (ds = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ls = [c.nc.HOUR, c.nc.DAY, c.nc.WEEK, c.nc.MONTH, c.nc.YEAR, c.nc.ALL],
				ms = {
					[c.nc.HOUR]: () => Ge.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[c.nc.DAY]: () => Ge.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[c.nc.WEEK]: () => Ge.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[c.nc.MONTH]: () => Ge.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[c.nc.YEAR]: () => Ge.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[c.nc.ALL]: () => Ge.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function us() {
				return (us = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ps = {
					[O.h.Posts]: [c.dc.Sort, c.dc.Time],
					[O.h.Comments]: [c.dc.Sort]
				},
				bs = {
					[c.dc.Sort]: e => {
						let t = Object(a.e)(x.B);
						t = t !== c.Ub ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: o
						} = Tt(e.queryParams, e.url, Nt.D, as[e.tab], t || c.Ub, cs), r = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: o
						}, d = Boolean(e.queryParams[Nt.D] || t);
						return i.a.createElement(is, ds({}, r, {
							active: d,
							label: d ? n[o] : Ge.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: c.dc.Sort
						}))
					},
					[c.dc.Time]: e => {
						const t = Object(a.e)(x.B),
							{
								options: s,
								optionLabels: n,
								value: o
							} = Tt(e.queryParams, e.url, Nt.H, ls.slice().reverse(), c.Vb, ms);
						if (!e.searchOptions || e.searchOptions.sort === c.ab.NEW || e.searchOptions.sort === c.ab.HOT || t === c.ab.NEW || t === c.ab.HOT) return null;
						const r = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: o
						};
						return i.a.createElement(is, us({}, r, {
							active: Boolean(e.queryParams[Nt.H]),
							label: e.queryParams[Nt.H] ? n[o] : Ge.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: c.dc.Filter
						}))
					}
				};
			var hs = s("./src/reddit/controls/Button/index.tsx");

			function fs(e, t) {
				let s = "/search/",
					n = "",
					o = e && e[Nt.w] || "";
				return t ? (o = o.replace("flair:", "flair_name:"), s = `/r/${t}/search`, n = "1", Object(Pt.a)(s, {
					[Nt.w]: o,
					[Nt.x]: n
				})) : (o = o.replace("flair_name:", "flair:"), Object(Pt.a)(s, {
					[Nt.w]: o
				}))
			}
			var Os = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				xs = s.n(Os);
			const {
				fbt: gs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), vs = dt.a.wrapped(hs.r, "TertiaryButton", xs.a), js = dt.a.wrapped(vs, "AllRedditResultsButton", xs.a), Cs = e => {
				const t = Object(z.b)();
				return i.a.createElement(Ht.a, {
					to: fs(e.queryParams)
				}, i.a.createElement(js, {
					onClick: () => {
						t(t => ({
							...Object(se.f)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, gs._("All reddit results", null, {
					hk: "2IBCsX"
				}), i.a.createElement(Ft.a, {
					name: "forward"
				})))
			};
			var ys = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				Es = s.n(ys);
			const _s = Object(ae.c)({
					subreddit: We.C
				}),
				Ss = e => {
					var t;
					const {
						subreddit: s
					} = Object(a.e)(t => _s(t, e)), n = Object(Y.ib)(), o = Object(Y.Z)(n), r = Object(Y.hb)(n), c = s && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return i.a.createElement(It.a, {
						className: Object(f.a)(Es.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, null === (t = ps[e.tab]) || void 0 === t ? void 0 : t.map((t, s) => {
						const n = bs[t];
						return i.a.createElement(n, {
							key: s,
							queryParams: o,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: r
						})
					}), c && i.a.createElement(Cs, {
						queryParams: o,
						searchOptions: e.searchOptions
					}))
				};
			var ks = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				ws = s.n(ks),
				Is = s("./src/reddit/components/SubredditIcon/index.tsx"),
				Ns = s("./src/reddit/components/ThemeProvider/index.tsx"),
				Ps = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				Ts = s.n(Ps);
			const {
				fbt: Rs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class Ms extends i.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(se.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[Ts.a.mSr]: !!t
					}, {
						pathname: o,
						search: r
					} = ws.a.parse(s), a = t ? c.fc.ToSubreddit : c.fc.ToGlobal, d = t ? i.a.createElement(i.a.Fragment, null, i.a.createElement("span", null, Rs._("Show results from", null, {
						hk: "3aVDvz"
					})), i.a.createElement(Is.b, {
						className: Ts.a.subredditIcon,
						subredditOrProfile: t
					}), i.a.createElement("p", {
						className: Object(f.a)(Ts.a.searchSwitcherText, n)
					}, t.displayText)) : i.a.createElement(i.a.Fragment, null, Rs._("{=Show results from}{=all of Reddit}", [Rs._param("=Show results from", i.a.createElement("span", null, Rs._("Show results from", null, {
						hk: "4l8fSw"
					}))), Rs._param("=all of Reddit", i.a.createElement("p", {
						className: Object(f.a)(Ts.a.searchSwitcherText, n)
					}, Rs._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return i.a.createElement(Xe.default, {
						className: Object(f.a)(Ts.a.searchSwitcher, e && Ts.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: r,
							state: {
								searchSwitcherType: a,
								[Gt.b.SearchOriginPage]: Object(Kt.b)(Gt.b.SearchOriginPage)
							}
						}
					}, d, i.a.createElement(Ft.a, {
						name: "forward",
						className: Object(f.a)(Ts.a.arrowIcon, n)
					}))
				}
			}
			var Fs = Object(z.c)(e => e.subreddit ? i.a.createElement(Ns.b, {
					subredditName: e.subreddit.name
				}, i.a.createElement(Ms, e)) : i.a.createElement(Ms, e)),
				Ls = s("./src/reddit/helpers/search/searchConversationId.ts"),
				As = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				Bs = s("./src/reddit/helpers/search/searchQueryId.ts");
			const Ds = (e, t) => e.includes(c.hc.Comments) ? O.h.Comments : t || e.includes(c.hc.Posts) ? O.h.Posts : e.includes(c.hc.Users) && !e.includes(c.hc.Subreddits) ? O.h.People : O.h.Listings;
			var Us = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Vs = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				Ws = s("./src/reddit/constants/elementClassNames.ts"),
				Hs = s("./src/reddit/contexts/NavbarExp.ts"),
				Gs = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				qs = s("./src/reddit/layout/page/Listing/index.m.less"),
				Ks = s.n(qs),
				zs = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				Qs = s.n(zs);
			var Ys = e => {
					let {
						backgroundColor: t,
						className: s,
						containerRef: n,
						content: o,
						navBar: a,
						redditStyle: c,
						sidebar: d,
						subredditId: l
					} = e;
					const m = Object(r.useContext)(Hs.a),
						u = Boolean(d);
					return i.a.createElement(Vs.a, {
						subredditId: l
					}, i.a.createElement("div", {
						className: Object(f.a)(Ks.a.outerContainer, Ws.i, s, {
							[Ks.a.outerContainerExp]: m
						}),
						ref: n
					}, i.a.createElement(Gs.a, {
						className: Ws.h,
						redditStyle: c,
						backgroundColor: t
					}), i.a.createElement("div", {
						className: Ks.a.innerContainer
					}, i.a.createElement("div", {
						className: Qs.a.bodyContainer
					}, i.a.createElement("div", {
						className: Qs.a.contentContainer
					}, i.a.createElement("div", {
						className: Qs.a.navContent
					}, a), i.a.createElement("div", {
						className: Object(f.a)(Qs.a.content, u && Qs.a.withSidebar)
					}, i.a.createElement("div", {
						className: Object(f.a)(Qs.a.mainContent, u && Qs.a.withSidebar)
					}, o), u && i.a.createElement("div", {
						className: Qs.a.sidebarContent
					}, d)))))))
				},
				Js = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Xs = s("./src/reddit/constants/experiments.ts"),
				Zs = s("./src/reddit/helpers/chooseVariant/index.ts");
			const $s = e => {
				return Object(Zs.c)(e, {
					experimentEligibilitySelector: Zs.a,
					experimentName: Xs.E
				}) === Xs.Rd
			};
			var en = s("./src/reddit/selectors/searchQueryId.ts"),
				tn = s("./node_modules/lodash/isEmpty.js"),
				sn = s.n(tn),
				nn = s("./src/reddit/actions/modal.ts"),
				on = s("./src/reddit/icons/svgs/Close/index.tsx"),
				rn = s("./src/reddit/icons/svgs/Comments/index.tsx"),
				an = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				cn = s("./src/reddit/icons/svgs/Snoo/index.tsx"),
				dn = s("./src/reddit/icons/svgs/Sticky/index.tsx"),
				ln = s("./src/reddit/icons/svgs/TextPost/index.tsx"),
				mn = s("./src/reddit/models/Live/index.ts"),
				un = s("./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less"),
				pn = s.n(un);

			function bn(e) {
				const {
					announcement: t,
					className: s,
					onBtnClick: n,
					onClose: o
				} = e, r = {
					[mn.b.Announcement]: i.a.createElement(dn.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Document]: i.a.createElement(ln.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Snoo]: i.a.createElement(cn.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Ama]: i.a.createElement(rn.a, {
						className: pn.a.iconStyles
					}),
					[mn.b.Moderation]: i.a.createElement(an.a, {
						className: pn.a.iconStyles
					})
				};
				return i.a.createElement("div", {
					"data-testid": "legacy-announcement",
					className: Object(f.a)(s, pn.a.AnnouncementContainer)
				}, i.a.createElement(It.a, null, r[t.icon], i.a.createElement("div", {
					className: Object(f.a)(pn.a.Title, pn.a.isAnnouncement)
				}, "function" == typeof t.title ? t.title() : t.title), i.a.createElement(on.a, {
					className: pn.a.CloseButton,
					onClick: o
				})), i.a.createElement("div", {
					className: Object(f.a)(pn.a.Description, pn.a.isAnnouncement)
				}, "function" == typeof t.description ? t.description() : t.description), i.a.createElement(hs.m, {
					className: pn.a.Button,
					target: "_blank",
					href: t.url,
					onClick: n
				}, "function" == typeof t.callToAction ? t.callToAction() : t.callToAction))
			}
			var hn = s("./src/reddit/constants/covid.ts"),
				fn = s("./src/reddit/constants/mFeedBanner.ts"),
				On = s("./src/reddit/constants/modals.ts"),
				xn = s("./src/reddit/constants/nsfwBanner.ts"),
				gn = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				vn = s("./src/reddit/selectors/experiments/search/searchSingleVariant.ts");
			const jn = e => Object(vn.a)(e, Xs.Oc),
				Cn = Object(ae.a)(e => Object(Zs.c)(e, {
					experimentEligibilitySelector: Zs.a,
					experimentName: Xs.Oc,
					expEventOverride: !1
				}), e => !!e),
				yn = e => Object(vn.a)(e, Xs.Le),
				En = Object(ae.a)(e => Object(Zs.c)(e, {
					experimentEligibilitySelector: Zs.a,
					experimentName: Xs.Le,
					expEventOverride: !1
				}), e => !!e);
			var _n, Sn = s("./src/reddit/components/SearchBanner/index.m.less"),
				kn = s.n(Sn);
			! function(e) {
				e.Covid = "covid", e.NSFW = "nsfw", e.MFeed = "mfeed"
			}(_n || (_n = {}));
			const wn = {
				[_n.Covid]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: hn.a
				},
				[_n.NSFW]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: xn.b
				},
				[_n.MFeed]: {
					visible: !1,
					dismissed: !1,
					seen: !1,
					announcement: fn.b
				}
			};

			function In() {
				const e = Object(et.a)(),
					t = Object(Y.ib)(),
					s = Object(a.f)(),
					n = Object(a.d)(),
					[c, d] = Object(r.useState)(null),
					m = Object(r.useRef)(wn),
					u = Object(Y.Z)(t),
					p = Object(a.e)(En),
					b = Object(a.e)(Cn),
					h = Object(a.e)(ie.mb),
					f = Object(a.e)(ie.rb);
				if (Object(r.useEffect)(() => {
						Object(Y.db)(t) ? d(_n.Covid) : p && Object(Y.eb)(t) && f && h && yn(s.getState()) ? d(_n.MFeed) : b && Object(Y.fb)(t) && !h && jn(s.getState()) ? d(_n.NSFW) : d(null)
					}, [t, u, h, f, p, b]), !c || m.current[c].dismissed) return null;

				function O(t) {
					c && e(Object(se.x)(t, c, Object(l.e)(o()(u || {}, Nt.y))))
				}
				const x = m.current[c];
				return x.seen || (O("view"), x.seen = !0), i.a.createElement(bn, {
					announcement: x.announcement,
					className: kn.a.announcement,
					onBtnClick: function() {
						c === _n.NSFW && n(Object(nn.h)(On.a.NSFW_SEARCH_MODAL)), O("click"), Object(gn.e)(Z.a.SEARCH_RESULTS, s.getState(), Object(l.e)(u))
					},
					onClose: function() {
						O("dismiss"), x.dismissed = !0, d(null)
					}
				})
			}
			var Nn = s("./src/reddit/pages/SearchResults/index.m.less"),
				Pn = s.n(Nn);

			function Tn() {
				return (Tn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Rn = 3e3,
				Mn = {
					[O.h.Listings]: {
						tab: O.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[O.h.People]: {
						tab: O.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[O.h.Posts]: {
						tab: O.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[O.h.Comments]: {
						tab: O.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function Fn(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(a.d)(),
					m = Object(Y.ib)(),
					f = Object(Oe.a)(),
					x = Object(r.useRef)(!1),
					g = Object(a.e)(e => Object(We.C)(e, {
						subredditName: s.params.subredditName
					})),
					v = Object(a.e)(e => He(e, {
						pageLayer: m
					})),
					j = Object(a.e)(e => Object(Ve.c)(e, {
						pageLayer: m
					})),
					{
						searchQueryId: C
					} = Object(a.e)(e => Object(en.a)(e)),
					y = Object(a.e)($s),
					E = (Object(a.e)(e => Object(vn.a)(e, Xs.Nc)), Object(a.e)(e => Object(ie.mb)(e))),
					_ = Object(a.e)(e => Object(ie.rb)(e)),
					S = E && _,
					k = Object(Y.Z)(m),
					w = Object(d.a)(k) || null,
					I = s.params.multiredditName,
					N = s.params.subredditName || I || "",
					P = s.params.username,
					T = Object(l.e)(o()(k || {}, Nt.y)),
					R = Object(l.b)(N, P, T, S),
					M = g && T.restrict_sr,
					F = Ds(T.type, M),
					L = {
						...T,
						type: [c.hc.Posts, c.hc.Subreddits, c.hc.Users]
					},
					A = Object(l.b)(N, P, L, S),
					B = {
						redesign: !0,
						searchOptions: T
					},
					D = Mn[F].tab,
					U = Boolean(M) || Mn[F].sidebar && !I,
					V = Mn[F].filterNav || F === O.h.Comments && y,
					W = Object(Js.a)({
						redditStyle: !0,
						theme: f
					});
				let H;
				return C && (Bs.a.set(Xt.a.SERP, R, C), n(Object(p.c)())), Object(Y.S)(m) || Object(Y.D)(m) ? H = i.a.createElement(Fs, Tn({}, B, {
					url: fs(k)
				})) : v && j && (H = i.a.createElement(Fs, Tn({}, B, {
					subreddit: v,
					url: fs(k, v.name)
				}))), Object(Us.c)(), Object(r.useEffect)((function() {
					return () => {
						As.a.clear(Xt.a.SERP)
					}
				}), []), Object(r.useEffect)(() => (Ls.a.set(T.q || ""), () => {
					Ls.a.reset()
				}), []), Object(r.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(b.j)()), Rn), () => {
						Object(Jt.b)(Jt.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(r.useEffect)(() => {
					k && w && k[Nt.w] !== w[Nt.w] && (Object(Jt.b)(Jt.a.SearchResults), Object(Jt.d)(Jt.a.SearchResults))
				}, [k, w]), Object(r.useEffect)(() => {
					const e = {
							...k,
							type: void 0
						},
						t = {
							...w,
							type: void 0
						};
					!u()(e, t) && !sn()(w) && As.a.update(Xt.a.SERP)
				}, [k, w]), Object(r.useEffect)(() => {
					if (D === O.h.Comments && !x.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							x.current = !0, n(Object(b.i)())
						}, Rn), () => {
							window.clearTimeout(e)
						}
					}
				}, [D]), i.a.createElement(Ys, {
					backgroundColor: W.canvas,
					content: i.a.createElement(i.a.Fragment, null, i.a.createElement(h.a, null), i.a.createElement(In, null), i.a.createElement(Ue, {
						listingKey: R,
						listingName: N,
						location: t,
						searchOptions: T,
						tab: D
					})),
					navBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(rt, {
						activeTab: D,
						searchOptions: T,
						searchSwitcher: H
					}), V && i.a.createElement(Ss, {
						key: "subNav",
						searchOptions: T,
						shouldHideGlobalSearchLink: !0,
						subredditName: N,
						tab: D
					}), H && i.a.createElement("div", {
						className: Pn.a.searchSwitcherContainer
					}, H)),
					sidebar: U && i.a.createElement(wt, {
						className: Pn.a.sidebar,
						listingKey: A,
						listingName: N || O.c,
						searchOptions: L,
						tab: D
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.I
				}) === n.Rd
			}
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = Object(n.a)(i.S, i.R, (e, t) => e || t),
				c = Object(n.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: o.D
				}), e => e === o.O.Enabled)
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				a = s("./src/reddit/selectors/meta.ts"),
				c = s("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(a.h)(e) && Object(r.f)(e),
					experimentName: n.pc
				}), i.a),
				l = Object(c.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: e => !Object(a.h)(e) && Object(r.f)(e),
					experimentName: n.oc
				}), i.a),
				m = Object(c.a)(d, l, (e, t) => e || t),
				u = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/hidePostMitigation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.ne
					}) === n.Rd
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.oe
					}) === n.Rd
				}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = e => !!Object(r.b)(e) || Object(o.c)(e, {
				experimentEligibilitySelector: i.S,
				experimentName: n.e
			}) === n.c.Enabled
		},
		"./src/reddit/selectors/experiments/search/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./node_modules/reselect/es/index.js");
			const i = Object(r.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: n.Cf
			}), e => ({
				isSubEnlarged: e === n.Yf.Variant1 || e === n.Yf.Variant3,
				withCommunityDescription: e === n.Yf.Variant2 || e === n.Yf.Variant3
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
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.Dg)(t)
				},
				c = Object(n.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.searchQueryId
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"abbb27126771"}')
		},
		"./src/redditGQL/operations/DeleteSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"c518a45f60a5"}')
		},
		"./src/redditGQL/operations/LanguageSelections.json": function(e) {
			e.exports = JSON.parse('{"id":"40df26b7117b"}')
		},
		"./src/redditGQL/operations/MutedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"c09ff0d041c1"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"a67c9b37646a"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"41973b2a5a8f"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"2c1754c5026c"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"e289f23cc495"}')
		},
		"./src/redditGQL/operations/UpdateSpokenLanguagesPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"6d0707c83164"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteAndNotificationLevelSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"2620d72fd633"}')
		},
		"./src/redditGQL/operations/UpdateSubredditMuteSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"432f6b475ece"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.6aa0e5b80324db140eca.js.map