// https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.081d1728266216162513.js
// Retrieved at 7/18/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"], {
		"./src/lib/ads/session-signals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/localStorageAvailable/index.ts");
			const s = e => {
					let t = 0;
					if (Object(n.a)()) {
						const r = localStorage.getItem(e);
						r && !isNaN(parseInt(r)) && (t = parseInt(r))
					}
					return t
				},
				d = e => {
					Object(n.a)() && localStorage.removeItem(e)
				},
				i = (e, t) => {
					const r = s(e) + t;
					Object(n.a)() && localStorage.setItem(e, r.toString())
				},
				o = () => ({
					numberOfAdsSeen: s("client-session-signals-number-of-ads-seen"),
					numberOfPostsSeen: s("client-session-signals-number-of-posts-seen")
				}),
				c = e => {
					if (!e) return;
					const t = Object.keys(e).length,
						r = Object.values(e).filter(e => e.isSponsored).length;
					(e => {
						i("client-session-signals-number-of-posts-seen", e)
					})(t), (e => {
						i("client-session-signals-number-of-ads-seen", e)
					})(r)
				},
				a = () => {
					d("client-session-signals-number-of-ads-seen"), d("client-session-signals-number-of-posts-seen")
				}
		},
		"./src/lib/pageTitle/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				d = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				i = r("./src/reddit/selectors/countrySites.ts"),
				o = r("./src/reddit/selectors/meta.ts");
			const c = (e, t, r) => {
				const {
					languageCode: c
				} = Object(i.c)(e), a = r || (Object(o.j)(e) || s.DEFAULT_LOCALE), u = Object(n.isPseudoLocale)(a) ? s.DEFAULT_LOCALE : a;
				if (c) {
					const e = Object(d.d)(c, u.substring(0, 2));
					return t + (e ? ` - ${e}` : "")
				}
				return t
			}
		},
		"./src/lib/stringInterpolate/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				return e && t ? e.replace(/%\{(\w+)\}/g, (e, r) => {
					const n = t[r];
					return null == n ? r : String(n)
				}) : e
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				d = Object(n.a)(s)
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return R
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "m", (function() {
				return M
			})), r.d(t, "r", (function() {
				return q
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "p", (function() {
				return K
			})), r.d(t, "q", (function() {
				return V
			})), r.d(t, "d", (function() {
				return $
			})), r.d(t, "a", (function() {
				return Y
			})), r.d(t, "b", (function() {
				return X
			})), r.d(t, "o", (function() {
				return Z
			})), r.d(t, "c", (function() {
				return ee
			})), r.d(t, "l", (function() {
				return te
			})), r.d(t, "e", (function() {
				return re
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/telemetry/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/economics/helpers/async.ts"),
				c = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = r("./src/reddit/actions/login.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				b = r("./src/reddit/actions/shortcuts/utils.ts"),
				p = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				f = r("./src/reddit/actions/vote.ts"),
				O = r("./src/reddit/endpoints/comment/index.tsx"),
				j = r("./src/reddit/helpers/commentList/index.ts"),
				_ = r("./src/reddit/helpers/trackers/comment.ts"),
				g = r("./src/reddit/models/Comment/index.ts"),
				I = r("./src/reddit/models/Post/index.ts"),
				S = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/models/Vote/index.ts"),
				T = r("./src/reddit/selectors/comments.ts"),
				y = r("./src/reddit/selectors/commentSelector.ts"),
				E = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				v = r("./src/reddit/selectors/moderatingComments.ts"),
				x = r("./src/reddit/selectors/moderatorPermissions.ts"),
				A = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/comment/constants.ts");
			const C = {},
				R = Object(i.a)(N.q),
				w = e => async (t, r, n) => {
					let {
						apiContext: d
					} = n;
					if (!Object(A.Q)(r())) return t(Object(a.openRegisterModal)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(T.m)(r(), {
							commentId: e
						})
					}));
					const i = r().features.comments.models[e];
					if (!i) return;
					const o = i.isSaved ? O.n : O.j;
					if (t(R({
							[e]: {
								isSaved: !i.isSaved
							}
						})), (await o(d(), e)).ok) {
						const r = i.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							n = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(m.f)({
							text: r,
							kind: S.b.Undo,
							buttonText: n,
							buttonAction: w(e)
						}))
					} else t(R({
						[e]: {
							isSaved: i.isSaved
						}
					}))
				}, D = e => `viewing-comment-${e}`, L = n.a.telemetry.commentConsumedThreshold, k = e => async (t, r) => {
					const s = r(),
						i = Object(y.b)(s, {
							commentId: e
						});
					if (!i || Math.random() > n.a.telemetry.commentSampleRate) return;
					_.c({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), d.c.start(D(e));
					const o = setTimeout(() => _.a({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), L);
					C[e] = o
				}, P = (e, t) => async (r, n) => {
					const s = n(),
						i = D(e);
					if (Object(y.b)(s, {
							commentId: e
						}) && d.c.has(i)) {
						const r = d.c.end(i);
						!t && r < L && (clearTimeout(C[e]), delete C[e])
					}
				}, U = Object(i.a)(N.z), G = Object(i.a)(N.y), F = Object(i.a)(N.x), M = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const i = n(),
						a = i.moreComments.models[t],
						u = i.platform.currentPage,
						b = u && u.routeMatch,
						m = b && b.match,
						{
							partialPostId: f
						} = m ? m.params : null;
					if (!f) return;
					const _ = Object(I.u)(f);
					r(U({
						moreCommentsId: a.id
					}));
					const g = await Object(O.g)(d(), _, {
						token: a.token
					}, Object(E.a)(i));
					if (g.ok) {
						const t = g.body,
							s = Object(j.a)(t, _, i);
						r(G({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const d = i.posts.models[_];
						let u;
						d && "subreddit" === d.belongsTo.type && t.comments && (u = d.belongsTo.id, await r(Object(o.a)({
							commentIds: Object.keys(g.body.comments),
							postIds: [d.id],
							skip: ["communityDetails", "subscription"],
							subredditId: u
						})), Object(x.i)(i, u) && r(Object(p.c)(_, !0, a.token)));
						const b = g.body.comments;
						await r(Object(c.b)(u, b)), Object(x.h)(n(), {
							subredditId: d.belongsTo.id
						}) && r(Object(l.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else r(F({
						moreCommentsItem: a,
						...g.error
					}))
				}, q = Object(f.a)(j.b, h.a.upvoted), B = Object(f.a)(j.b, h.a.downvoted), Q = Object(i.a)(N.l), J = Object(i.a)(N.k), H = Object(i.a)(N.g), z = Object(i.a)(N.h), K = (Object(i.a)(N.c), Object(i.a)(N.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const d = s(),
							i = Object(g.i)(t),
							o = Object(T.n)(d, {
								commentLink: i,
								commentsPageKey: r
							}),
							c = Object(v.b)(d, {
								commentId: t,
								commentsPageKey: r
							}),
							a = o.depth;
						e(H({
							commentId: t,
							commentsPageKey: r,
							isCollapsed: c
						})), c || 0 !== a || n(t, !0), Object(b.d)()
					}
				}), V = e => {
					let {
						commentId: t,
						commentsPageKey: r
					} = e;
					return async e => {
						e(z({
							commentId: t,
							commentsPageKey: r
						}))
					}
				}, $ = e => {
					let {
						commentLink: t,
						commentsPageKey: r,
						lineDepth: n,
						scrollToAndRemeasure: s
					} = e;
					return async (e, d) => {
						const i = d(),
							o = Object(j.e)(r, t, n, i),
							c = Object(v.b)(i, {
								commentId: t.id,
								commentsPageKey: r
							});
						e(H({
							commentId: o,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === n && s(o, !0), Object(b.d)()
					}
				}, W = Object(i.a)(N.t), Y = e => t => t(W({
					draftKey: e
				})), X = Object(i.a)(N.a), Z = Object(i.a)(N.H), ee = Object(i.a)(N.b), te = Object(i.a)(N.w), re = Object(i.a)(N.e)
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				d = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/camelCase.js"),
				d = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/HatefulContentFilters/index.ts"),
				b = r("./src/redditGQL/operations/FetchContentControls.json");
			const p = e => {
				switch (e) {
					case "LENIENT":
						return l.a.Lenient;
					case "MODERATE":
						return l.a.Moderate;
					case "STRICT":
						return l.a.Strict;
					default:
						return l.a.Off
				}
			};
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var m = r("./node_modules/lodash/isEmpty.js"),
				f = r.n(m),
				O = r("./src/redditGQL/operations/UpdateHatefulContentFilters.json"),
				j = r("./src/redditGQL/operations/UpdatePostRequirements.json"),
				_ = r("./src/reddit/endpoints/subreddit/about.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/contentControls.ts"),
				S = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/actions/contentControls/constants.ts");
			const y = Object(o.a)(T.b),
				E = Object(o.a)(T.c),
				v = Object(o.a)(T.a),
				x = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = {
						subredditName: e.toLowerCase()
					};
					if (Object(I.a)(r(), d)) return;
					t(E(d));
					let o = Object(h.F)(r(), e);
					if (!o) {
						const r = await Object(_.a)(s(), e, !1);
						if (r.ok) {
							o = r.body.data.subreddit.id
						}
						if (!o) {
							const e = r.error || {
								type: i.I.NOT_FOUND_ERROR
							};
							return void t(v({
								...d,
								error: e
							}))
						}
					}
					const a = Object(S.c)(r(), {
						subredditId: o
					});
					let l = null;
					const m = await ((e, t) => Object(u.a)(e, {
						...b,
						variables: t
					}).then(e => {
						var t, r;
						if (e.ok) {
							const n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											hatefulContentFilters: {
												hatefulContentThresholdAbuse: p(null == n ? void 0 : n.hatefulContentThresholdAbuse),
												hatefulContentThresholdIdentity: p(null == n ? void 0 : n.hatefulContentThresholdIdentity),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == n ? void 0 : n.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(s(), {
						subredditId: o,
						includeHatefulFilters: a
					});
					if (m.ok) {
						const e = m.body;
						l = e.data.subreddit && e.data.subreddit
					}
					if (l) t(y({
						...d,
						...l
					}));
					else {
						const r = m.error || {
							type: i.I.UNKNOWN_ERROR
						};
						t(v({
							...d,
							error: r
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: m.body,
								responseOk: m.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, A = Object(o.a)(T.d), N = (e, t) => async (r, s, d) => {
					let {
						gqlContext: i
					} = d;
					const o = e.toLowerCase(),
						c = Object(h.F)(s(), e);
					if (!c) return {
						success: !1
					};
					const l = await ((e, t, r) => {
						const n = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !f()(r.postRequirements)) {
							const s = {
								subredditId: t,
								...r.postRequirements
							};
							n[0] = Object(u.a)(e, {
								...j,
								variables: {
									input: s
								}
							})
						}
						if (r.hatefulContentFilters && !f()(r.hatefulContentFilters)) {
							const s = {
								subredditId: t
							};
							r.hatefulContentFilters.hatefulContentThresholdAbuse && (s.hatefulContentThresholdAbuse = r.hatefulContentFilters.hatefulContentThresholdAbuse), r.hatefulContentFilters.hatefulContentThresholdIdentity && (s.hatefulContentThresholdIdentity = r.hatefulContentFilters.hatefulContentThresholdIdentity), n[1] = Object(u.a)(e, {
								...O,
								variables: {
									input: s
								}
							})
						}
						return Promise.all(n).then(e => {
							let [t, r] = e, n = !0, s = [];
							if (t) {
								const e = t.body,
									r = e.data.updatePostRequirements.fieldErrors;
								n = n && e.data.updatePostRequirements.ok, r && (s = s.concat(r))
							}
							if (r) {
								const e = r.body,
									t = e.data.updateSubredditSettings.fieldErrors;
								n = n && e.data.updateSubredditSettings.ok, t && (s = s.concat(t))
							}
							return {
								ok: n,
								fieldErrors: s.length ? s : null
							}
						})
					})(i(), c, t);
					if (l.ok) return r(A({
						subredditName: o,
						partialUpdates: t
					})), r(Object(a.f)({
						kind: g.b.SuccessCommunity,
						text: n.fbt._("Subreddit content controls updated successfully", null, {
							hk: "1n6QIQ"
						})
					})), {
						success: !0
					}; {
						const s = C(l.fieldErrors);
						return r(Object(a.f)({
							kind: g.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: N(e, t)
						})), {
							success: !1,
							errors: s || void 0
						}
					}
				}, C = e => e && e.map(e => ({
					...e,
					field: d()(e.field)
				}))
		},
		"./src/reddit/actions/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./src/lib/constants/index.ts");
			var n = r("./src/lib/makeActionCreator/index.ts");
			r("./src/lib/makeListingKey/index.ts"), r("./src/lib/addQueryParams/index.ts"), r("./src/lib/makeApiRequest/index.ts"), r("./src/lib/omitHeaders/index.ts"), r("./src/lib/stringInterpolate/index.ts"), r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var s = r("./src/reddit/selectors/discoveryUnit.ts");
			r("./src/reddit/selectors/listings.ts");
			const d = "DISCOVERY_UNIT__LIST_PENDING",
				i = "DISCOVERY_UNIT__LIST_LOADED",
				o = "DISCOVERY_UNIT__LIST_FAILED",
				c = Object(n.a)(d),
				a = Object(n.a)(i),
				u = Object(n.a)(o),
				l = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const d = t(),
						i = Object(s.d)(d),
						o = Object(s.c)(d);
					if (i || o) return;
					e(c());
					const l = await (e => Promise.resolve({
						ok: !0,
						error: null,
						status: 200,
						headers: {},
						details: "",
						body: {
							global: {
								discovery_config_v1: {
									discovery_units: [{
										id: "xd_66",
										enabled: !0,
										layout: "large",
										parameters: {
											sort: "hot"
										},
										surface: "explore",
										unit_name: "posts_in_category_rails_hero",
										unit_type: "listing",
										url: "/api/posts_in_category.json"
									}, {
										id: "xd_67",
										enabled: !0,
										layout: "large",
										surface: "explore",
										unit_name: "posts_in_subreddit_hero",
										unit_type: "listing",
										url: "/r/%{subredditName}/hot.json"
									}, {
										id: "xd_68",
										enabled: !0,
										layout: "large",
										parameters: {
											sort: "hot"
										},
										surface: "explore",
										unit_name: "posts_in_category_rails_small",
										unit_type: "listing",
										url: "/api/posts_in_category.json"
									}, {
										id: "xd_69",
										enabled: !0,
										layout: "large",
										surface: "explore",
										unit_name: "posts_in_subreddit_small",
										unit_type: "listing",
										url: "/r/%{subredditName}/hot.json"
									}, {
										id: "xd_70",
										enabled: !0,
										layout: "large",
										surface: "search",
										unit_name: "search_posts",
										unit_type: "community_category",
										url: "/api/posts_in_category.json"
									}, {
										id: "xd_71",
										enabled: !0,
										layout: "large",
										surface: "search",
										unit_name: "search_subreddits",
										unit_type: "community_category",
										url: "/api/subreddits_in_category.json"
									}, {
										id: "xd_72",
										enabled: !0,
										layout: "large",
										surface: "subreddit_listing",
										unit_name: "community_banner_posts",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}, {
										id: "xd_83",
										enabled: !0,
										layout: "large",
										surface: "subreddit_listing",
										unit_name: "best_of_community",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}, {
										id: "xd_91",
										enabled: !0,
										layout: "large",
										surface: "comments",
										title: "Posts in subreddit %{subredditName}",
										unit_name: "posts_in_subreddit_vertical",
										unit_type: "listing"
									}, {
										id: "xd_92",
										enabled: !0,
										layout: "large",
										surface: "comments",
										title: "Posts in recommended home",
										unit_name: "posts_in_rec_home",
										unit_type: "listing"
									}, {
										id: "xd_96",
										enabled: !0,
										layout: "small",
										surface: "subreddit_listing",
										unit_name: "top_week_posts",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}, {
										id: "xd_97",
										enabled: !0,
										layout: "large",
										surface: "subreddit_listing",
										unit_name: "top_week_posts_large",
										unit_type: "subreddit_listing",
										url: "/r/%{subredditName}/top.json"
									}]
								}
							}
						}
					}))(n());
					if (l.ok) {
						const {
							discoveryUnits: t
						} = (e => {
							return {
								discoveryUnits: e.global.discovery_config_v1.discovery_units.reduce((e, t) => {
									const r = {
										enabled: t.enabled,
										experiment: t.experiment,
										id: t.id,
										index: t.index,
										layout: t.layout,
										options: t.options,
										parameters: t.parameters,
										subtitle: t.subtitle,
										subtitleIcon: t.subtitle_icon,
										surface: t.surface,
										title: t.title,
										unitName: t.unit_name,
										unitType: t.unit_type,
										url: t.url
									};
									return e[r.id] = r, e
								}, {})
							}
						})(l.body);
						e(a({
							discoveryUnits: t
						}))
					} else e(u({
						error: l.error
					}))
				}, b = "DISCOVERY_UNIT__UNIT_DATA_PENDING", p = "DISCOVERY_UNIT__UNIT_DATA_LOADED", m = "DISCOVERY_UNIT__UNIT_DATA_FAILED";
			Object(n.a)(b), Object(n.a)(p), Object(n.a)(m)
		},
		"./src/reddit/actions/economics/helpers/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => async t => {
				const n = await (() => r.e("EconHelperActions").then(r.bind(null, "./src/reddit/actions/economics/helpers/index.ts")).then(e => e.fetchAll))();
				await t(n(e))
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = Object(n.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection)),
				d = Object(n.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo))
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return H
			})), r.d(t, "k", (function() {
				return z
			})), r.d(t, "o", (function() {
				return K
			})), r.d(t, "r", (function() {
				return V
			})), r.d(t, "q", (function() {
				return $
			})), r.d(t, "l", (function() {
				return ee
			})), r.d(t, "m", (function() {
				return te
			})), r.d(t, "n", (function() {
				return re
			})), r.d(t, "b", (function() {
				return ne
			})), r.d(t, "u", (function() {
				return se
			})), r.d(t, "v", (function() {
				return de
			})), r.d(t, "g", (function() {
				return ie
			})), r.d(t, "a", (function() {
				return oe
			})), r.d(t, "w", (function() {
				return ae
			})), r.d(t, "p", (function() {
				return ue
			})), r.d(t, "i", (function() {
				return le
			})), r.d(t, "j", (function() {
				return be
			})), r.d(t, "s", (function() {
				return pe
			})), r.d(t, "t", (function() {
				return me
			})), r.d(t, "f", (function() {
				return fe
			})), r.d(t, "c", (function() {
				return Oe
			})), r.d(t, "d", (function() {
				return je
			})), r.d(t, "h", (function() {
				return _e
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/index.js"),
				d = r.n(s),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				c = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/makeRequest/index.ts")),
				a = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/CreateMediaUploadLease.json"),
				b = r("./src/redditGQL/operations/SubmitMediaUpload.json");
			var p = r("./src/reddit/helpers/media/index.ts"),
				m = r("./src/redditGQL/types.ts");
			const f = new Map([
					["image/png", m.k.Png],
					["image/gif", m.k.Gif],
					["image/jpeg", m.k.Jpeg]
				]),
				O = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = await Object(p.h)(t) || t.type,
						o = f.get(i);
					if (!o) throw new Error("Unacceptable file type");
					const {
						mediaId: m,
						uploadLease: O
					} = await (async (e, t) => {
						const r = await Object(u.a)(e, {
							...l,
							variables: {
								input: t
							}
						});
						if (!Object(c.c)(r) || r.error) throw new Error("Failed to create upload lease");
						return r.body.data.createMediaUploadLease
					})(d(), {
						mimetype: o
					}), j = function(e) {
						let {
							uploadLeaseUrl: t,
							uploadLeaseHeaders: r
						} = e;
						return {
							action: t,
							fields: (null == r ? void 0 : r.map(e => {
								let {
									header: t,
									value: r
								} = e;
								return {
									name: t,
									value: r
								}
							})) || []
						}
					}(O), _ = await Object(a.a)(t, j);
					if (!Object(c.c)(_)) throw new Error("Failed to upload file to S3");
					return await (async (e, t) => {
						const r = await Object(u.a)(e, {
							...b,
							variables: {
								input: t
							}
						});
						if (!Object(c.c)(r) || r.error) throw new Error("Failed to submit media")
					})(d(), {
						mediaId: m,
						redditId: e
					}), {
						mediaId: m,
						mimeType: o
					}
				};
			var j = r("./src/reddit/actions/toaster.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/lib/delay/index.ts"),
				I = r("./src/lib/makeActionCreator/index.ts"),
				S = r("./src/reddit/endpoints/economics/predictions.ts");

			function h(e) {
				let {
					topPredictorsRank: t,
					currentRank: r
				} = e;
				return {
					currentRank: r ? T(r) : null,
					topPredictorsRank: t.map(T)
				}
			}

			function T(e) {
				let {
					score: t,
					rank: r,
					redditor: n,
					redditorInfo: s
				} = e;
				var d, i;
				return {
					score: t,
					rank: r,
					redditor: n ? {
						...n,
						icon: null !== (d = n.icon) && void 0 !== d ? d : null,
						profile: null !== (i = n.profile) && void 0 !== i ? i : null
					} : null,
					redditorInfo: s
				}
			}
			var y = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				v = r("./src/reddit/actions/login.ts"),
				x = r("./src/reddit/actions/modal.ts"),
				A = r("./src/reddit/constants/modals.ts"),
				N = r("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				R = r("./src/reddit/selectors/user.ts"),
				w = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				D = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				L = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: o.a
				}
			});
			const k = Object(I.a)(L.d),
				P = Object(I.a)(L.c),
				U = Object(I.a)(L.e),
				G = Object(I.a)(L.f),
				F = Object(I.a)(L.i),
				M = Object(I.a)(L.h),
				q = Object(I.a)(L.j),
				B = Object(I.a)(L.q),
				Q = Object(I.a)(L.t),
				J = Object(I.a)(L.p),
				H = Object(I.a)(L.b),
				z = (e, t, r) => async (n, s, d) => {
					let {
						gqlContext: i
					} = d;
					const o = Object(R.Q)(s());
					if (!Object(N.c)(s(), {
							subredditId: e
						})) {
						n(k({
							subredditId: e
						}));
						try {
							const {
								predictionTournaments: s,
								predictionWinners: d
							} = await Object(S.i)(i(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: o
							}), c = h(d);
							n(U({
								subredditId: e,
								leaderboard: c
							})), s && (n(re(e, s)), null == s || s.forEach(e => {
								let {
									tournamentId: t,
									winners: r
								} = e;
								n(G({
									tournamentId: t,
									leaderboard: h(r)
								}))
							}))
						} catch {
							n(P({
								subredditId: e
							}))
						}
					}
				}, K = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = Object(R.Q)(n());
					if (!Object(N.g)(n(), {
							tournamentId: t
						})) {
						r(F({
							tournamentId: t
						}));
						try {
							const {
								predictionWinners: n
							} = await Object(S.j)(d(), {
								subredditId: e,
								tournamentId: t,
								includeCurrentRank: i
							}), s = h(n);
							r(q({
								tournamentId: t,
								leaderboard: s
							}))
						} catch {
							r(M({
								tournamentId: t
							}))
						}
					}
				}, V = e => {
					let {
						coinPackageId: t,
						optionId: r,
						postId: n,
						price: s
					} = e;
					return async (e, d, i) => {
						let {
							gqlContext: o
						} = i;
						const c = await Object(S.p)(o(), {
							coinPackageId: t,
							optionId: r,
							postId: n,
							price: s
						});
						return e(B({
							pollId: n,
							prediction: c,
							price: s
						})), c
					}
				}, $ = e => {
					let {
						optionId: t,
						postId: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: d
						} = s;
						const i = await Object(S.n)(d(), {
								optionId: t,
								postId: r
							}),
							{
								resolvePrediction: o
							} = i.body.data;
						if (!(null == o ? void 0 : o.poll)) throw new Error("Failed to resolve prediction");
						return e(J({
							pollId: r,
							prediction: o.poll
						})), o.poll
					}
				}, W = Object(I.a)(L.k), Y = Object(I.a)(L.m), X = Object(I.a)(L.l), Z = Object(I.a)(L.o), ee = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						i = Object(C.F)(d, e);
					if (Object(D.k)(d, {
							subredditId: i
						})) return Object(D.g)(d, {
						subredditId: i
					});
					t(W({
						subredditId: i
					}));
					const o = await Object(S.k)(s(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: !0
						}),
						c = {};
					o.forEach(e => {
						var r;
						if ((null === (r = e.predictionPosts) || void 0 === r ? void 0 : r.length) && e.predictionPosts.forEach(e => {
								e && (c[e.id] = Object(y.f)(e))
							}), e.winners) {
							const r = h(e.winners);
							t(G({
								tournamentId: e.tournamentId,
								leaderboard: r
							}))
						}
					});
					const a = o.map(e => Object(E.a)(e));
					return t(X({
						subredditId: i,
						tournaments: a
					})), t(Y({
						subredditId: i,
						tournaments: a
					})), t(Z({
						posts: c,
						meta: d.meta
					})), a
				}, te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						i = Object(C.F)(d, e),
						o = await Object(S.l)(s(), {
							subredditName: e,
							isLatestOnly: !0
						});
					t(re(i, o))
				}, re = (e, t) => r => {
					const n = t.map(e => Object(E.a)(e));
					r(Y({
						subredditId: e,
						tournaments: n
					}))
				}, ne = Object(I.a)(L.a), se = Object(I.a)(L.r), de = Object(I.a)(L.s), ie = (e, t, r, n) => async (s, d, i) => {
					let {
						gqlContext: o
					} = i;
					const c = d(),
						a = Object(w.b)(c);
					let u = null;
					if (!a) throw new Error("Failed to create tournament, no prediction drafts attached");
					if (n instanceof File) {
						const {
							mediaId: t,
							mimeType: r
						} = await s(O(`icon_pred_${e}`, n));
						await Object(g.a)(3e3), u = {
							mediaId: t,
							width: 1,
							height: 1,
							mimeType: r.toLowerCase()
						}
					} else n && (u = {
						url: n,
						width: 1,
						height: 1,
						mimeType: ""
					});
					const l = await Object(S.e)(o(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: m.C.Tokens,
							tokenIcon: u
						}),
						b = Object(E.a)(l);
					s(ce(b))
				}, oe = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = Object(w.b)(n());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(S.a)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${d.a.v4()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						a = Object(E.a)(c);
					r(ce(a))
				}, ce = Object(I.a)(L.g), ae = (e, t, r) => async (t, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = await Object(S.o)(d(), {
							tournamentId: e,
							name: r
						}),
						o = Object(E.a)(i);
					t(ce(o))
				}, ue = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = await Object(S.f)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = d.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(ce(i.tournament)), i.tournament
				}, le = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = await Object(S.g)(s(), {
						postId: e
					});
					if (!d.ok || d.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = d.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, be = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = await Object(S.h)(s(), {
						tournamentId: e
					});
					if (!d.ok || d.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = d.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, pe = e => {
					let {
						coinPackageId: t,
						selectedOptionId: r,
						price: n,
						pollId: s,
						tournamentId: d,
						tournamentPostId: i
					} = e;
					return async e => {
						const o = await e(V({
							coinPackageId: t,
							optionId: r,
							postId: s,
							price: n
						}));
						return e(Q({
							predictionId: s,
							selectedOptionId: r,
							tournamentId: d,
							tournamentPostId: i
						})), o
					}
				}, me = e => async (t, r) => {
					const n = r();
					Object(R.Q)(n) ? await t(Object(x.h)(A.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(v.openLoginModal)())
				}, fe = () => Object(x.g)(A.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Oe = e => async (t, r, s) => {
					let {
						gqlContext: d
					} = s;
					try {
						const r = await Object(S.b)(d(), {
							postId: e
						});
						t(H({
							postId: e,
							prediction: r
						}));
						const s = Object(j.e)(n.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), _.b.SuccessMod);
						t(Object(j.f)(s))
					} catch {
						const e = Object(j.e)(n.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), _.b.Error);
						t(Object(j.f)(e))
					}
				};

			function je(e, t) {
				return async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = await Object(S.c)(d(), {
						postId: e,
						...t
					});
					return r(H({
						postId: e,
						prediction: i
					})), i
				}
			}
			const _e = e => async (t, r, n) => {
				let {
					gqlContext: s
				} = n;
				return Object(S.m)(s(), {
					subredditId: e
				})
			}
		},
		"./src/reddit/actions/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return I
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "p", (function() {
				return D
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "n", (function() {
				return M
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "m", (function() {
				return K
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = e => {
				return e.reduce((e, t) => (e[t.provider] = t, e), {})
			};
			var m = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/models/User/index.ts"),
				O = r("./src/reddit/selectors/externalAccount.ts"),
				j = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts");
			const I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				S = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				h = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				E = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				v = Object(s.a)(I),
				x = Object(s.a)(S),
				A = Object(s.a)(h),
				N = Object(s.a)(T),
				C = Object(s.a)(y),
				R = Object(s.a)(E),
				w = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const d = r(),
						i = Object(g.k)(d),
						o = e || i && Object(f.e)(i);
					if (!o) return;
					if (Object(O.d)(d, {
							username: o
						})) return;
					t(v(o));
					const m = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.jb.GET
					}))(s(), o);
					if (m.ok) {
						const e = p(m.body);
						t(x({
							username: o,
							accountsData: e
						}))
					} else t(A(m.error))
				}, D = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						d = Object(j.d)(s);
					if (!d) return;
					const i = s.externalAccount.api.subreddit.fetched[d],
						o = s.externalAccount.api.subreddit.pending[d];
					if (i || o) return;
					const m = Object(_.w)(s, {
						subredditName: d
					});
					if (!(m && m.hasExternalAccount)) return;
					e(N(d));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.jb.GET
					}))(n(), d);
					if (f.ok) {
						const t = p(f.body);
						e(C({
							subredditName: d,
							accountsData: t
						}))
					} else e(R(f.error))
				}, L = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", k = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", P = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(s.a)(L), G = Object(s.a)(k), F = Object(s.a)(P), M = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(U({
						provider: e
					}));
					const d = Object(g.k)(r()),
						i = Object(f.e)(d),
						o = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.jb.POST
						}))(s(), e);
					o.ok ? t(G({
						provider: e,
						username: i
					})) : t(F({
						provider: e,
						error: o.error
					}))
				}, q = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", J = Object(s.a)(q), H = Object(s.a)(B), z = Object(s.a)(Q), K = e => async (t, r, s) => {
					let {
						apiContext: p
					} = s;
					t(J({
						provider: e
					}));
					const f = Object(d.a)(window.location.href, {
							[o.b]: e
						}),
						O = await ((e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: c.jb.POST,
							data: {
								redirect_url: r
							}
						}))(p(), e, f);
					if (O.ok) {
						const {
							redirect_url: r
						} = O.body;
						t(H({
							provider: e
						})), window.location.href = r
					} else t(z({
						provider: e,
						error: O.error
					})), t(Object(i.f)({
						kind: m.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "196FiB"
						})
					}))
				}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return g
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "h", (function() {
				return q
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "f", (function() {
				return J
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "d", (function() {
				return z
			})), r.d(t, "k", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/endpoints/gold/powerups/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				m = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/helpers/trackers/powerups.ts"),
				j = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				_ = r("./src/reddit/actions/gold/constants.ts");
			const g = e => async (t, r, s) => {
				let {
					gqlContext: i
				} = s;
				if (!!r().user.powerups.fetched && !e) return;
				t(I());
				const o = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const e = await Object(l.h)(i());
					if (e.ok) {
						const r = e.body;
						if (r.errors && r.errors.length) return void(await t(T(o)));
						if (!r.data.identity) return void(await t(h(o)));
						await t(S({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (c) {
					d.c.captureException(c), await t(T(o))
				}
			}, I = Object(s.a)(_.yb), S = Object(s.a)(_.xb), h = Object(s.a)(_.wb), T = e => async (t, r) => {
				await t(h(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, y = (e, t) => async (e, r, s) => {
				let {
					gqlContext: i
				} = s;
				var o;
				if (!!r().users.powerups.fetched) return;
				e(E());
				const c = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(l.e)(i(), t);
					if (r.ok) {
						const n = r.body;
						if (n.errors && n.errors.length) return void(await e(A(c)));
						if (!n.data.redditorInfoById) return void(await e(x(c)));
						const s = (null === (o = n.data.redditorInfoById.powerups) || void 0 === o ? void 0 : o.supportedSubreddits) || [];
						await e(v({
							supportedSubreddits: s,
							userId: t
						}))
					}
				} catch (a) {
					d.c.captureException(a), await e(A(c))
				}
			}, E = Object(s.a)(_.eb), v = Object(s.a)(_.db), x = Object(s.a)(_.cb), A = e => async (t, r) => {
				await t(x(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, N = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return async (r, s, i) => {
					let {
						gqlContext: o
					} = i;
					var c;
					const a = s();
					if (Object(p.i)(a, {
							subredditId: e
						}) && Object(m.a)(a, {
							subredditId: e
						}) && (!t.fullData || Object(p.k)(a, {
							subredditId: e
						})) && !t.forceLoad) return;
					r(w());
					const u = t.fullData ? l.g : l.f;
					try {
						const n = await u(o(), e, !!t.includeIdentity);
						if (n.ok) {
							const s = n.body;
							if (null === (c = s.errors) || void 0 === c ? void 0 : c.length) return void(await r(P(s.errors[0].message)));
							if (t.fullData) {
								const {
									data: t
								} = s, n = C(t.subredditInfoById, t.identity);
								R(r, e, n)
							} else {
								const {
									powerups: t = null,
									powerupsSettings: n = null
								} = s.data.subredditInfoById || {};
								await r(D({
									powerups: t,
									subredditId: e,
									benefitStatuses: null == n ? void 0 : n.benefitStatuses
								}))
							}
						}
					} catch (b) {
						d.c.captureException(b), await r(P(n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})))
					}
				}
			}, C = (e, t) => {
				var r, n, s;
				const {
					powerups: d = null,
					powerupsSettings: i = null,
					supporters: o = null,
					productOffers: c = null,
					subredditAchievementFlairs: a
				} = e || {}, u = null == t ? void 0 : t.powerups;
				return {
					powerups: d,
					benefitStatuses: null == i ? void 0 : i.benefitStatuses,
					productOffers: null !== (r = null == c ? void 0 : c.offers) && void 0 !== r ? r : [],
					recentSupporters: null !== (n = null == o ? void 0 : o.recentSupporters) && void 0 !== n ? n : [],
					topSupporters: null !== (s = null == o ? void 0 : o.topSupporters) && void 0 !== s ? s : [],
					userPowerups: u,
					subredditAchievementFlairs: null != a ? a : []
				}
			}, R = (e, t, r) => e(L({
				subredditId: t,
				...r
			})), w = Object(s.a)(_.ob), D = Object(s.a)(_.nb), L = Object(s.a)(_.mb), k = Object(s.a)(_.lb), P = e => async (t, r) => {
				await t(k(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, U = Object(s.a)(_.R), G = Object(s.a)(_.S), F = Object(s.a)(_.T), M = e => async (t, r) => {
				await t(U(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, q = (e, t, r, s) => async (i, o, p) => {
				let {
					gqlContext: m
				} = p;
				i(G({
					subredditId: e,
					powerupsCount: t,
					isAnonymous: r,
					allocatedAt: s
				}));
				try {
					const d = {
							subredditId: e,
							powerupsCount: t,
							isAnonymous: r
						},
						p = await Object(l.d)(m(), {
							input: d
						});
					let O = !1,
						_ = null;
					if (p.ok) {
						const e = p.body;
						O = e.data.reallocatePowerups.ok, _ = e.data.reallocatePowerups.errors
					}
					const I = Object(f.k)(o());
					if (O && I) await i((e => async (t, r) => {
						t(F(e)), await t(N(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(g(!0)), t(Object(j.a)(e.subredditId, !0)), e.powerupsCount && (t(Object(c.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(c.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(a.f)({
							kind: b.b.SuccessCommunityGreen,
							duration: a.a,
							text: n.fbt._("Your Powerup subscription has been canceled.", null, {
								hk: "z7ZJZ"
							})
						})))
					})({
						subredditId: e,
						powerupsCount: t,
						isAnonymous: r,
						user: I,
						allocatedAt: s
					}));
					else {
						const e = _ && _[0] && _[0].message || n.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
						await i(M(e))
					}
				} catch (O) {
					d.c.captureException(O);
					const e = O,
						t = e && e.message || n.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
					await i(M(t))
				}
			}, B = Object(s.a)(_.E), Q = Object(s.a)(_.Q), J = e => Object(c.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), H = (e, t) => async (r, n) => {
				const s = n();
				return Object(f.k)(s) ? (Object(i.a)(Object(O.f)(e)(s)), r(Object(c.h)(u.a.ECON_POWERUPS_MARKETING, {
					subredditId: t
				}))) : r(Object(o.openLoginModal)())
			}, z = () => async (e, t) => {
				const r = t();
				return Object(f.k)(r) ? e(Object(c.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(o.openLoginModal)())
			}, K = Object(s.a)(_.M), V = (e, t) => async (r, n, s) => {
				let {
					gqlContext: d
				} = s;
				const i = await Object(l.i)(d(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (i.ok) {
					const t = i.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(K({
						subredditId: e,
						benefitStatuses: t
					})), !0
				}
				return !1
			}
		},
		"./src/reddit/actions/grantUserFlair/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "d", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/redditGQL/operations/SubredditFlairedRedditorByName.json"),
				o = r("./src/redditGQL/operations/SubredditFlairedRedditors.json");
			var c = r("./src/reddit/endpoints/flair/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts");
			var b = e => {
				const {
					subreddit: t,
					redditorInfoByName: r
				} = e.data, {
					id: n,
					flairedRedditorByName: s
				} = t, d = {};
				let i = null;
				if (!r) return {
					subredditId: n,
					searchResult: i,
					flairedUsers: d
				};
				const {
					name: o
				} = r;
				if (i = o, s) {
					const {
						flair: e,
						redditor: t
					} = s, {
						name: r
					} = t;
					e && (d[r] = Object(l.a)(e)[0])
				}
				return {
					subredditId: n,
					searchResult: i,
					flairedUsers: d
				}
			};
			var p = e => {
					const {
						subreddit: t
					} = e.data, {
						id: r,
						flairedRedditors: n
					} = t, {
						pageInfo: s,
						edges: d
					} = n, i = [], o = {};
					return d.forEach(e => {
						const {
							node: t
						} = e, {
							flair: r,
							redditor: {
								name: n
							}
						} = t;
						if (i.push(n), r) {
							const e = Object(l.a)(r)[0];
							o[n] = e
						}
					}), {
						subredditId: r,
						flairedUsers: o,
						userOrder: i,
						pageInfo: s
					}
				},
				m = r("./src/reddit/models/SubredditModeration/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/models/User/index.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/actions/grantUserFlair/constants.ts");
			const g = Object(s.a)(_.i),
				I = Object(s.a)(_.g),
				S = Object(s.a)(_.f),
				h = (e, t) => async (r, s, i) => {
					let {
						gqlContext: c
					} = i;
					const u = t && t.after || "",
						l = t && t.before || "",
						b = Object(j.F)(s(), e),
						O = Object(m.e)(b, u, l);
					if (!!s().pages.modHub.flairedUsers.userOrder[O]) return;
					r(g());
					const _ = await ((e, t, r) => Object(d.a)(e, {
						...o,
						variables: {
							subredditName: t,
							...r
						}
					}))(c(), e, t);
					if (_.ok) {
						const e = {
							...p(_.body),
							key: O
						};
						r(I(e))
					} else {
						const e = _.error;
						r(S(e)), r(Object(a.f)({
							kind: f.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							})
						}))
					}
				}, T = Object(s.a)(_.l), y = Object(s.a)(_.k), E = Object(s.a)(_.j), v = (e, t) => async (r, s, o) => {
					let {
						gqlContext: c
					} = o;
					const u = Object(j.U)(s(), {
						subredditId: e
					}).name;
					r(T());
					const l = await ((e, t, r) => Object(d.a)(e, {
						...i,
						variables: {
							subredditName: t,
							name: r
						}
					}))(c(), u, t);
					if (l.ok) {
						const e = b(l.body);
						r(y(e))
					} else r(E(l.error)), r(Object(a.f)({
						kind: f.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})
					}))
				}, x = Object(s.a)(_.e), A = Object(s.a)(_.c), N = Object(s.a)(_.d), C = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					const o = s(),
						u = Object(j.U)(o, {
							subredditId: t
						}).name;
					r(x());
					const l = await Object(c.a)(i(), e, u);
					if (l.ok) {
						r(A({
							userName: e,
							subredditId: t
						}));
						const s = Object(a.e)(n.fbt._("User flair cleared", null, {
							hk: "4yyH00"
						}), f.b.SuccessMod);
						r(Object(a.f)(s))
					} else {
						r(N());
						const s = Object(a.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "uG2KO"
						}), f.b.Error, n.fbt._("Retry", null, {
							hk: "3oiY99"
						}), C(e, t));
						r(Object(a.f)(s))
					}
					return l.ok || l.error
				}, R = Object(s.a)(_.h), w = Object(s.a)(_.b), D = Object(s.a)(_.a), L = (e, t, r) => async (s, d, i) => {
					let {
						apiContext: o
					} = i;
					const l = d(),
						b = l.pages.modHub.flairedUsers.search.result === e && !l.pages.modHub.flairedUsers.models[e],
						p = {
							userName: e,
							subredditId: t,
							applied: r
						},
						m = r && r.templateId,
						_ = Object(j.U)(l, {
							subredditId: t
						}),
						g = r && Object(u.g)(r),
						I = r ? r.cssClass : void 0,
						S = await Object(c.g)(o(), e, _.name, m, g, I);
					if (S.ok) {
						if (b) {
							let e;
							Object.keys(l.pages.modHub.flairedUsers.userOrder).forEach(t => {
								!1 === l.pages.modHub.flairedUsers.pageInfo[t].hasNextPage && l.pages.modHub.flairedUsers.userOrder[t].length < 50 && (e = t)
							});
							const t = {
								...p,
								key: e
							};
							s(D(t))
						}
						e === (l.user.account && Object(O.e)(l.user.account)) ? s(R(p)) : b || s(w(p))
					} else {
						const e = Object(a.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4hXQvr"
						}), f.b.Error);
						s(Object(a.f)(e))
					}
					return S.ok || S.error
				}
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "j", (function() {
				return h
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				b = Object(d.a)(l),
				p = "META__META_RECEIVED",
				m = (Object(d.a)(p), "META__SET_LOCALE"),
				f = Object(d.a)(m),
				O = e => async (t, r, d) => {
					let {
						apiContext: l
					} = d;
					if (!e) return;
					const b = r(),
						p = l();
					let m;
					if (t(f(e)), Object(n.isPseudoLocale)(e) ? (Object(u.N)(b) || Object(a.b)(b)) && (m = e) : m = Object(n.isoLocaleToR2Language)(e), !m) return;
					const O = new URL(window.location.href);
					Object(u.Q)(b) ? Object(n.isPseudoLocale)(m) ? O.searchParams.set("locale", m) : (await Object(i.a)(Object(o.a)(p, [c.a]), {
						data: {
							lang: m
						},
						endpoint: `${p.apiUrl}/api/v1/me/prefs`,
						method: s.jb.PATCH,
						type: "json"
					}), O.searchParams.delete("locale")) : O.searchParams.delete("locale"), window.location.href = O.toString()
				}, j = "META__SET_POPULAR_GEO_FILTER", _ = Object(d.a)(j), g = "META__PWA_ENTERED", I = "META__PWA_LEFT", S = Object(d.a)(g), h = Object(d.a)(I)
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/actions/comment/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/redditGQL/operations/ModQueueTriggers.json");
			const o = e => {
				let {
					commentIds: t = [],
					postIds: r = []
				} = e;
				return async (e, o, c) => {
					let {
						gqlContext: a
					} = c;
					var u, l;
					if (!t.length && !r.length) return;
					const b = await ((e, t) => Object(d.a)(e, {
						...i,
						variables: t
					}))(a(), {
						commentIds: t,
						postIds: r
					});
					if (b.ok) {
						const t = b.body;
						if (t.data.commentsByIds) {
							const r = Object.fromEntries(null === (u = t.data.commentsByIds) || void 0 === u ? void 0 : u.filter(e => {
								var t;
								return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}).map(e => {
								var t;
								return [null == e ? void 0 : e.id, {
									modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
								}]
							}));
							e(Object(n.j)(r))
						}
						if (t.data.postsInfoByIds) {
							const r = Object.fromEntries(null === (l = t.data.postsInfoByIds) || void 0 === l ? void 0 : l.filter(e => {
								var t;
								return null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
							}).map(e => {
								var t;
								return [null == e ? void 0 : e.id, {
									modQueueTriggers: null === (t = null == e ? void 0 : e.moderationInfo) || void 0 === t ? void 0 : t.modQueueTriggers
								}]
							}));
							e(Object(s.S)(r))
						}
					}
				}
			}
		},
		"./src/reddit/actions/nsfwBlocking/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = Object(n.a)(() => r.e("NsfwBlockingActions").then(r.bind(null, "./src/reddit/actions/nsfwBlocking/index.ts")).then(e => e.default))
		},
		"./src/reddit/actions/onboarding/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			}));
			const n = "RESET_GENDER_UPDATE_STATE",
				s = "SUBREDDIT_INTEREST_TOPICS",
				d = "SKIP_ONBOARDING_MODAL"
		},
		"./src/reddit/actions/onboarding/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openReonboardingModalIfNeeded", (function() {
				return l
			})), r.d(t, "resetGenderUpdateState", (function() {
				return b
			})), r.d(t, "subredditInterestTopicsLoaded", (function() {
				return p
			})), r.d(t, "skipOnboardingModal", (function() {
				return m
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/onboarding/constants.ts"),
				i = r("./src/reddit/helpers/counters/onboarding.ts"),
				o = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				c = r("./src/reddit/models/Onboarding/index.ts"),
				a = r("./src/reddit/selectors/experiments/onboarding.ts"),
				u = r("./src/reddit/selectors/onboarding.ts");
			const l = () => async (e, t) => {
				const r = t(),
					n = r.platform.currentPage;
				if (Object(u.e)(r, {
						pageLayer: n
					})) {
					e(Object(s.openD2xOnboardingModal)({
						type: c.d.REONBOARDING,
						selectedInterests: {}
					})), Object(o.d)();
					const t = Object(a.c)(r);
					Object(i.b)(c.f.FirstPopover, t)
				}
			}, b = Object(n.a)(d.a), p = Object(n.a)(d.c), m = Object(n.a)(d.b);
			t.default = () => async (e, t) => {
				const r = t();
				Object(u.d)(r) && e(Object(s.openD2xOnboardingModal)())
			}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return L
			})), r.d(t, "PAGE_LOADED", (function() {
				return k
			})), r.d(t, "PAGE_FAILED", (function() {
				return P
			})), r.d(t, "pagePending", (function() {
				return U
			})), r.d(t, "pageLoaded", (function() {
				return G
			})), r.d(t, "pageFailed", (function() {
				return F
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return q
			})), r.d(t, "postCreationPageRequested", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/filterQueryParams/index.ts"),
				d = r("./src/lib/isFakeSubreddit/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makePostCreationPageKey/index.ts"),
				c = r("./src/lib/pageTitle/index.ts"),
				a = r("./src/reddit/actions/contentControls/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/externalAccount.ts"),
				b = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				m = r("./src/reddit/actions/post.ts"),
				f = r("./src/reddit/actions/postCreation/general.ts"),
				O = r("./src/reddit/actions/profile/index.ts"),
				j = r("./src/reddit/actions/subreddit.ts"),
				_ = r("./src/reddit/actions/subredditDuplicates.ts"),
				g = r("./src/config.ts"),
				I = r("./src/lib/constants/index.ts"),
				S = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				y = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/contentControls.ts"),
				x = r("./src/reddit/selectors/postCollection.ts"),
				A = r("./src/reddit/selectors/postCreations.ts"),
				N = r("./src/reddit/selectors/posts.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/user.ts");
			const D = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, s = Object(R.z)(e, {
							subredditName: n
						});
						s && (r = s.name)
					}
					return Object(c.m)(r)
				},
				L = "POST_CREATION__PAGE_PENDING",
				k = "POST_CREATION__PAGE_LOADED",
				P = "POST_CREATION__PAGE_FAILED",
				U = Object(i.a)(L),
				G = Object(i.a)(k),
				F = Object(i.a)(P),
				M = () => async (e, t) => {
					const r = t(),
						n = Object(A.a)(r);
					n !== Object(A.mb)(r) && e(Object(f.g)({
						submissionType: n
					}))
				}, q = e => async (t, r, n) => {
					const {
						collectionId: s,
						profileName: i,
						subredditName: c
					} = e, u = Object(o.a)(e), p = r(), m = p.creations.api.page.pending[u], f = p.creations.api.page.fetched[u], _ = p.creations.api.page.error[u];
					if (m) return;
					if (f && !_) return void t(M());
					const T = [];
					t(U({
						key: u
					}));
					let x = c;
					!c && i && (x = `u_${i}`), T.push(((e, t) => Object(S.a)(e, {
						method: I.jb.GET,
						endpoint: Object(h.a)(`${g.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: x,
						collectionId: s
					})), i && (T.push(t(O.d(i))), T.push(t(O.b(i))));
					const [A] = await Object(y.a)("postCreation", () => Promise.all(T));
					if (A.ok) {
						const e = A.body,
							{
								posts: n = {},
								subredditAboutInfo: s
							} = e;
						if (t(G({
								key: u,
								meta: p.meta,
								...e,
								posts: n
							})), !Object(w.Q)(r())) return;
						if (s) {
							const e = Object.keys(s)[0];
							await t(Object(b.j)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(M());
						const i = [];
						i.push(t(l.o()));
						const o = Object(w.k)(r());
						if (o && o.hasUserProfile && i.push(t(O.d(Object(E.e)(o)))), c && !Object(d.a)(c)) {
							i.push(t(j.o(c))), !!Object(v.b)(r(), {
								subredditName: c
							}) || i.push(t(Object(a.a)(c)))
						}
						await Promise.all(i)
					} else t(F({
						error: A.error,
						key: u
					}))
				}, B = e => async (t, r) => {
					const {
						subredditName: d,
						profileName: i
					} = e.params, o = e.queryParams, c = o.collection;
					if (await t(q({
							collectionId: c,
							profileName: i,
							subredditName: d
						})), !Object(w.Q)(r())) return void Object(T.a)(t, r());
					let a;
					if (d ? (a = Object(R.z)(r(), {
							subredditName: d
						}), await t(Object(u.a)({
							subredditName: d
						}))) : i && (a = Object(C.j)(r(), {
							profileName: i
						})), o.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: d
						} = e, i = [];
						let o;
						s ? o = Object(R.F)(n(), s) : d && (o = Object(w.mb)(n(), {
							userName: d
						})), o && i.push(r(Object(_.b)(o, t))), i.push(r(Object(m.R)(t))), await Promise.all(i);
						const c = Object(N.f)(n(), {
							postId: t
						});
						r(Object(f.m)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, o.source_id));
					else if (c) {
						const d = Object(x.q)(r(), {
							collectionId: c
						});
						a && d && d.subredditId === a.id || t(Object(n.c)(Object(s.a)(e.url, ["collection"])))
					}
					t(p.m({
						title: D(r())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return p
			})), r.d(t, "PAGE_LOADED", (function() {
				return m
			})), r.d(t, "PAGE_FAILED", (function() {
				return f
			})), r.d(t, "pagePending", (function() {
				return O
			})), r.d(t, "pageLoaded", (function() {
				return j
			})), r.d(t, "pageFailed", (function() {
				return _
			})), r.d(t, "postDraftPageDataRequested", (function() {
				return g
			})), r.d(t, "postDraftRequested", (function() {
				return I
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makePostDraftPageKey/index.ts"),
				d = r("./src/reddit/actions/profile/index.ts"),
				i = r("./src/config.ts"),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = r("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				m = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				O = Object(n.a)(p),
				j = Object(n.a)(m),
				_ = Object(n.a)(f),
				g = e => async (t, r, n) => {
					const {
						draftId: p,
						profileName: m
					} = e, f = Object(s.a)(e), O = r(), g = O.creations.api.page.pending[f], I = O.creations.api.page.fetched[f], S = O.creations.api.page.error[f];
					if (g || I && !S || !p) return;
					t(d.d(m));
					const h = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: o.jb.GET
					}))(n.apiContext(), p, m));
					if (h.ok) {
						const e = h.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(j({
							...e,
							key: f
						}))
					} else t(_({
						error: h.error,
						key: f
					}))
				}, I = e => async (t, r, n) => {
					await t(g(e.params))
				}
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isGQLSubredditPageExtra", (function() {
				return tt
			})), r.d(t, "handleSubredditPageApiError", (function() {
				return rt
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return nt
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return st
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return dt
			})), r.d(t, "subredditPending", (function() {
				return it
			})), r.d(t, "subredditLoaded", (function() {
				return ot
			})), r.d(t, "subredditFailed", (function() {
				return ct
			})), r.d(t, "subredditDataRequested", (function() {
				return at
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return ut
			})), r.d(t, "makeSubredditPageKey", (function() {
				return bt
			})), r.d(t, "subredditRequested", (function() {
				return pt
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return mt
			})), r.d(t, "subredditInvalidateListing", (function() {
				return ft
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeRequest/index.ts"),
				d = r("./node_modules/lodash/find.js"),
				i = r.n(d),
				o = r("./node_modules/lodash/pick.js"),
				c = r.n(o),
				a = r("./node_modules/query-string/index.js"),
				u = r("./node_modules/react-router-redux/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				b = r("./src/lib/countrySites/index.ts"),
				p = r("./src/lib/isAdHocMultireddit/index.ts"),
				m = r("./src/lib/isFakeSubreddit/index.ts"),
				f = r("./src/lib/makeActionCreator/index.ts"),
				O = r("./src/lib/makeListingKey/index.ts"),
				j = r("./src/lib/makeSearchKey/index.ts"),
				_ = r("./src/lib/pageTitle/index.ts"),
				g = r("./src/lib/pageTitle/helpers.ts"),
				I = r("./src/lib/performanceTimings/index.tsx"),
				S = r("./src/lib/safeGet/index.ts"),
				h = r("./src/reddit/actions/ads/index.ts"),
				T = r("./src/reddit/actions/communityFlairs/index.ts"),
				y = r("./src/reddit/actions/contentGate.ts"),
				E = r("./src/reddit/actions/discoveryUnit.ts"),
				v = r("./src/reddit/actions/economics/helpers/async.ts"),
				x = r("./src/reddit/actions/economics/predictions/index.ts"),
				A = r("./src/reddit/actions/externalAccount.ts"),
				N = r("./src/reddit/actions/gold/powerups.ts"),
				C = r("./src/reddit/actions/grantUserFlair/index.ts"),
				R = r("./src/reddit/actions/meta.ts"),
				w = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				D = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				L = r("./src/reddit/actions/onboarding/index.ts"),
				k = r("./src/reddit/actions/pages/search/index.ts"),
				P = r("./src/reddit/actions/platform.ts"),
				U = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				G = r("./src/reddit/actions/seo/linksModule.ts"),
				F = r("./src/reddit/actions/seo/topicLinks.ts"),
				M = r("./src/lib/makeGqlRequest/index.ts"),
				q = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				B = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				Q = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				J = r("./src/reddit/selectors/widgets.ts");
			const H = (e, t) => async (r, n) => {
				const s = n(),
					d = Object(Q.U)(s, {
						subredditId: e
					}),
					i = Object(J.j)(s, {
						subredditId: e
					});
				d.isNSFW || (null == i ? void 0 : i.length) > 0 && i.some(e => "community-list" === e) || r(Object(G.e)({
					id: e,
					data: t
				}))
			}, z = (e, t) => async r => {
				t && r(Object(F.b)({
					id: e,
					data: t
				}))
			};
			var K = r("./src/reddit/actions/structuredStyles/index.ts"),
				V = r("./src/reddit/actions/subreddit.ts"),
				$ = r("./src/reddit/actions/toaster.ts"),
				W = r("./src/reddit/helpers/localStorage/index.ts"),
				Y = r("./src/reddit/models/Subreddit/index.ts"),
				X = r("./src/reddit/models/Toast/index.ts"),
				Z = r("./src/reddit/routes/postCreation/constants.ts"),
				ee = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				te = r("./src/reddit/selectors/platform.ts"),
				re = r("./src/reddit/selectors/user.ts");
			const ne = () => async (e, t, r) => {
				const n = t(),
					s = Object(te.e)(n);
				if (!s || s.type !== Y.f.Public) return;
				const d = s.name,
					i = Object(te.m)(n),
					o = Object(Q.w)(n, {
						subredditName: d
					});
				if (!o) return;
				const {
					activity7Day: c
				} = o, a = !!c && c >= 51 && c <= 100, l = !d || Object(m.a)(d), b = i && i.urlParams.subredditName === d, p = Object(re.Q)(n), f = Object(ee.c)(n, {
					subredditId: Object(Q.F)(n, d)
				});
				if (l || b || Object(W.D)() || !a || !p || f) return;
				const O = Object(J.d)(t(), {
					subredditName: d
				});
				if (!O || !O.currentlyViewingCount) return;
				const j = (24 * O.currentlyViewingCount * 7).toString(),
					_ = j[0].padEnd(j.length, "0");
				e(Object($.f)({
					buttonAction: async () => e(Object(u.b)(`/r/${d}${Z.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: X.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(W.Fb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${_} visits to r/${d} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var se = r("./src/reddit/actions/subreddit/questions.ts"),
				de = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				ie = r("./src/reddit/actions/subredditSettings.ts"),
				oe = r("./src/reddit/actions/tags/index.ts"),
				ce = r("./src/reddit/actions/userFlair/userFlair.ts"),
				ae = r("./src/reddit/constants/history.ts"),
				ue = r("./src/reddit/constants/page.ts"),
				le = r("./src/reddit/constants/parameters.ts"),
				be = r("./src/reddit/constants/postLayout.ts"),
				pe = r("./src/reddit/contexts/PageLayer/index.tsx"),
				me = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				fe = r("./src/reddit/endpoints/governance/posts.ts"),
				Oe = r("./src/reddit/endpoints/page/subredditPage.ts"),
				je = r("./src/lib/ads/session-signals.ts"),
				_e = r("./src/lib/base64/index.ts"),
				ge = r("./src/reddit/constants/experiments.ts"),
				Ie = r("./src/reddit/constants/graphql.ts"),
				Se = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				he = r("./src/reddit/selectors/experiments/onboarding.ts"),
				Te = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var ye = r("./src/reddit/endpoints/profile/info.ts"),
				Ee = r("./src/reddit/helpers/canonicalUrls.ts"),
				ve = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				xe = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				Ae = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function Ne(e) {
				let {
					econLeaderboards: t,
					identity: r,
					trendingSubreddits: n
				} = e;
				const s = t.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(Ae.b)(s, n, r)
			}
			var Ce = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Re = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				we = r("./src/reddit/helpers/post/index.ts"),
				De = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				Le = r("./src/reddit/helpers/trackers/feed.ts"),
				ke = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Pe = r("./src/reddit/models/RichTextJson/index.ts"),
				Ue = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Ge = r("./src/reddit/selectors/communityFlairs.ts"),
				Fe = r("./src/reddit/selectors/experiments/countrySites.ts"),
				Me = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts"),
				qe = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Be = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Qe = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Je = r("./src/reddit/selectors/gold/powerups/index.ts"),
				He = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ze = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Ke = r("./src/reddit/selectors/multireddit.ts"),
				Ve = r("./src/reddit/selectors/posts.ts"),
				$e = r("./src/lib/initializeClient/installReducer.ts"),
				We = r("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Ye = r("./node_modules/uuid/v4.js"),
				Xe = r.n(Ye),
				Ze = r("./src/reddit/helpers/locales.ts"),
				et = r("./src/reddit/selectors/meta.ts");

			function tt(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object($e.a)({
				features: {
					modUserNotes: We.a
				}
			});
			const rt = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: n,
							reason: s
						}
					} = e, d = n ? n.account : void 0, i = n && n.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (s === Y.e.NotFoundSubreddit) r(y.r({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (s === Y.e.BannedSubreddit) {
						const e = n ? n.banMessage || n.ban_message : void 0;
						r(y.p({
							banMessage: e,
							account: d,
							features: i,
							subredditName: o
						}))
					}
					if (451 === e.status && r(y.q({
							account: d,
							features: i,
							subredditName: o
						})), 403 === e.status)
						if (s === Y.e.GoldSubreddit) r(y.u({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (s === Y.e.PrivateSubreddit) r(y.v({
						account: d,
						features: i,
						subredditDescription: n.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!n.isContributorRequestsDisabled,
						isContributorRequestTimestamp: n.isContributorRequestTimestamp ? parseInt(n.isContributorRequestTimestamp, 10) : void 0,
						subredditId: n.id
					}));
					else if (s === Y.e.QuarantinedSubreddit) {
						const e = !n || void 0 === n.quarantineRequiresEmailOptin || n.quarantineRequiresEmailOptin;
						r(y.x({
							account: d,
							features: i,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: n.quarantineMessage,
							quarantineMessageHtml: n.quarantineMessageHtml || "",
							quarantineMessageRTJson: n.quarantineMessageRTJson || Pe.i
						}))
					} else if (s === Y.e.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						} = n;
						r(y.t({
							account: d,
							features: i,
							subredditName: o,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						}))
					}
				}
			}, nt = "PAGE__SUBREDDIT_PENDING", st = "PAGE__SUBREDDIT_LOADED", dt = "PAGE__SUBREDDIT_FAILED", it = Object(f.a)(nt), ot = Object(f.a)(st), ct = Object(f.a)(dt), at = (e, t, r, d) => async (o, c, a) => {
				var u, b, p, f, O, j, _, g, y, E, D, k, U, G, F, J, K, W, Y, Z, ee, ne, ue, le, Ee;
				const ve = c(),
					xe = Object(re.P)(ve) || Object(re.Q)(ve);
				if (Object(S.a)(ve.listings.postOrder.api.pending, e)) return;
				const Ae = null === (b = null === (u = Object(te.b)(ve)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					{
						currentPage: ke
					} = ve.platform,
					{
						countryCode: Pe,
						languageCode: Ge
					} = (null == ke ? void 0 : ke.urlParams) || {},
					Be = Object(m.a)(t, {
						countryCode: Pe,
						languageCode: Ge
					}),
					Qe = Object(m.c)(t, {
						countryCode: Pe,
						languageCode: Ge
					}),
					ze = (Object(m.b)(t, {
						countryCode: Pe,
						languageCode: Ge
					}) || Qe) && ve.posts.recent.length ? {
						...r,
						recentPostIds: ve.posts.recent
					} : r;
				ze.layout = be.e[Object(pe.S)(ve, {})], Qe && (ze.forceGeopopular = !0), o(it({
					key: e
				}));
				const Ke = !Be && Object(te.l)(ve) && Object(qe.b)(ve);
				let Ve;
				if (r.sort === l.W.AWARDED && Qe) Ve = Object(me.a)(a.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: Ne(t.data)
					}
				});
				else {
					const e = Ke ? () => Object(Oe.b)(a.gqlContext(), Object(Oe.c)(ve, t, ze, !0), xe) : () => Object(Oe.a)(a.apiContext(), t, ze);
					Ve = Object(I.i)(e, {
						name: Ke ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ae,
						isLoggedIn: xe
					})
				}
				const $e = Object(Q.T)(c(), {
						subredditId: Object(Q.F)(c(), t)
					}).length > 0,
					We = Object(I.i)(() => (async function(e, t) {
						return Object(M.a)(e, {
							...Te,
							variables: t
						})
					})(a.gqlContext(), ((e, t) => {
						let {
							after: r,
							isMobile: n,
							subredditName: s,
							isFake: d,
							isLoggedIn: i,
							layout: o,
							limit: c,
							hasRules: a,
							sort: u,
							t: l
						} = t;
						var b, p;
						const m = Object(he.c)(e),
							f = !!m && !Object(ge.Zf)(m) && (d || m === ge.ub.Community),
							{
								numberOfAdsSeen: O,
								numberOfPostsSeen: j
							} = Object(je.a)(),
							_ = {
								subredditName: s,
								isFake: d,
								sort: u,
								adContext: {
									layout: o ? o.toUpperCase() : Ie.a.Card,
									reddaid: e.user.reddaid,
									clientSignalSessionData: {
										adsSeenCount: O,
										totalPostsSeenCount: j
									}
								},
								includeIdentity: i,
								includeInterestTopics: f,
								includePowerups: !d,
								includeQuestions: i && !d,
								includeRules: !d && !a,
								includeRedditorKarma: i && !(null === (p = null === (b = e.user.account) || void 0 === b ? void 0 : b.karma) || void 0 === p ? void 0 : p.total),
								includeSubredditLinks: !i,
								includeTopicLinks: !i
							};
						return u && (_.sort = u.toUpperCase()), l && (_.range = l.toUpperCase()), n ? _.pageSize = Object(Se.a)(o) : c && (_.pageSize = c), r && (_.after = Object(_e.a)(r)), _
					})(ve, {
						after: r.after,
						isLoggedIn: xe,
						subredditName: t,
						hasRules: $e,
						isFake: Be,
						isMobile: r.isMobile,
						layout: r.layout,
						limit: r.limit,
						sort: r.sort,
						t: r.t
					})), {
						name: "fetchSubredditPageExtra",
						page: Ae,
						isLoggedIn: xe
					}),
					Ye = Xe()();
				let nt, st;
				Ke ? nt = await Ve : [nt, st] = await Promise.all([Ve, We]);
				const dt = st && Object(s.c)(st) ? st.body.data : null,
					ut = nt.body,
					lt = (null == ut ? void 0 : ut.subreddits) ? ((e, t) => {
						var r;
						return null === (r = i()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(ut.subreddits, t) : null;
				ut && !Ke && await Object(we.a)(a.gqlContext, ut.posts).then(e => ut.posts = e), o(P.n(nt.status));
				const bt = `error-${e}`,
					pt = Be || lt;
				if (nt.ok && pt) {
					if (!Be && lt) {
						let e;
						e = Ke ? ut.powerups : Object(N.c)(null == dt ? void 0 : dt.subredditInfoByName, null == dt ? void 0 : dt.identity);
						const t = (null === (f = null === (p = null == ut ? void 0 : ut.subredditAboutInfo) || void 0 === p ? void 0 : p[lt]) || void 0 === f ? void 0 : f.detectedLanguage) || (null === (O = null == dt ? void 0 : dt.subredditInfoByName) || void 0 === O ? void 0 : O.detectedLanguage);
						Object(et.d)(ve) && t && Object(Fe.f)(ve) && await Object(Ze.a)(t, o), ut.subredditAboutInfo[lt].detectedLanguage = t, Object(N.a)(o, lt, e), Ke ? o(Object(x.n)(lt, ut.predictionTournaments || [])) : (null == dt ? void 0 : dt.subredditInfoByName) && o(Object(x.n)(lt, dt.subredditInfoByName.predictionTournaments || [])), Object(Je.f)(c(), {
							subredditId: lt
						}) && Object(Me.a)(c())
					}
					let n;
					ut.geoFilter && o(Object(R.k)(ut.geoFilter));
					const s = ut.postIds.filter(e => !!ut.posts[e].isMeta);
					if (s.length && lt) {
						const e = Object(I.i)(() => Object(fe.a)(a.apiContext(), lt, s), {
								name: "getGovernanceData",
								page: Ae,
								isLoggedIn: xe
							}),
							t = await e;
						t.ok && (n = t.body)
					}
					if (lt) {
						const e = (null === (_ = null === (j = null == ut ? void 0 : ut.subredditAboutInfo) || void 0 === j ? void 0 : j[lt]) || void 0 === _ ? void 0 : _.isEligibleForContentBlocking) || (null === (g = null == dt ? void 0 : dt.subredditInfoByName) || void 0 === g ? void 0 : g.isEligibleForContentBlocking);
						ut.subredditAboutInfo[lt].isEligibleForContentBlocking = e;
						const t = (null === (E = null === (y = null == ut ? void 0 : ut.subredditAboutInfo) || void 0 === y ? void 0 : y[lt]) || void 0 === E ? void 0 : E.isMediaInCommentsSettingShown) || (null === (D = null == dt ? void 0 : dt.subredditInfoByName) || void 0 === D ? void 0 : D.isMediaInCommentsSettingShown);
						ut.subredditAboutInfo[lt].isMediaInCommentsSettingShown = t
					}
					if (dt) {
						const e = null === (U = null === (k = dt.identity) || void 0 === k ? void 0 : k.redditor) || void 0 === U ? void 0 : U.karma,
							t = {
								karma: {
									...(null === (G = ve.user.account) || void 0 === G ? void 0 : G.karma) || ye.a,
									...e
								}
							};
						ut.account && Object.assign(ut.account, t)
					}
					if (lt) {
						let e;
						Ke ? e = null === (F = ut.subredditAboutInfo[lt]) || void 0 === F ? void 0 : F.notificationLevel : tt(dt) && (e = null === (J = dt.subredditInfoByName) || void 0 === J ? void 0 : J.notificationLevel), ut.subredditAboutInfo[lt].notificationLevel = e
					}
					const i = null === (K = ut.subredditPermissions) || void 0 === K ? void 0 : K.posts;
					!Ke && i && o(Object(w.a)({
						postIds: ut.postIds
					}));
					let u = null == ut ? void 0 : ut.interestTopicRecommendations;
					if (!u && (null == dt ? void 0 : dt.interestTopics)) {
						const e = Object(Ce.a)(dt.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && o(Object(L.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), o(ot({
						key: e,
						meta: ve.meta,
						governance: n,
						correlationId: Ye,
						...ut,
						postIds: ut.postIds
					}));
					const l = null === (Y = null === (W = Object(te.b)(ve)) || void 0 === W ? void 0 : W.locationState) || void 0 === Y ? void 0 : Y[ae.b.FeedLoadReason];
					if (Object(Le.b)(r.isRefresh ? ae.a.UserRefresh : null != l ? l : ae.a.InitialLoad)(c()), !Be) {
						const e = Object(Q.F)(c(), t);
						Ke && ut.subredditRules ? o(V.t({
							rules: {
								rules: ut.subredditRules
							},
							subredditId: e
						})) : (null === (Z = null == dt ? void 0 : dt.subreddit) || void 0 === Z ? void 0 : Z.rules) && o(V.t({
							rules: Object(Re.a)(dt.subreddit.rules),
							subredditId: e
						}));
						const r = Object(T.c)(ut.posts, e),
							n = Object(T.b)(ut.structuredStyles),
							s = (n ? Object(T.d)(n) : []).concat(r);
						o(Object(T.a)(s, e))
					}
					if (d && o($.g(bt)), o(Object(h.b)(Ue.a.SUBREDDIT)), o(Object(A.p)()), lt) {
						let e, r, n;
						if (Ke ? (e = ut.questions, r = ut.subredditLinks, n = ut.subredditTopicLinks) : (e = null == dt ? void 0 : dt.subredditInfoByName, r = Object(q.a)({
								data: {
									subredditInfoById: null == dt ? void 0 : dt.subredditInfoByName
								}
							}), n = Object(B.a)({
								data: {
									subredditInfoById: null == dt ? void 0 : dt.subredditInfoByName
								}
							})), Object(se.a)(o, lt, e), o(H(lt, r)), o(z(lt, n)), !Ke && (null === (ne = null === (ee = null == dt ? void 0 : dt.subredditInfoByName) || void 0 === ee ? void 0 : ee.elements) || void 0 === ne ? void 0 : ne.edges)) {
							const e = (null === (le = null === (ue = null == dt ? void 0 : dt.subredditInfoByName) || void 0 === ue ? void 0 : ue.elements) || void 0 === le ? void 0 : le.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							o(Object(de.e)({
								subredditId: lt,
								nodes: e
							}))
						} else if (Ke && (null == ut ? void 0 : ut.postIds)) {
							const e = ut.postIds.map(e => null == ut ? void 0 : ut.posts[e].lastAuthorModNote);
							e && o(Object(de.e)({
								subredditId: lt,
								nodes: e
							}))
						}
						if (Ke && ut.appliedFlair) {
							const e = ut.appliedFlair;
							if ((null === (Ee = ve.user.account) || void 0 === Ee ? void 0 : Ee.displayName) && e.flair && (o(Object(C.b)({
									subredditId: lt,
									applied: e.flair,
									userName: ve.user.account.displayName
								})), o(Object(ce.userFlairSaveTemplateSuccess)({
									subredditId: lt,
									template: e.flair
								}))), e.displaySettings) {
								const t = e.displaySettings;
								o(Object(ce.userFlairAllowAssignOwnSettingSuccess)({
									subredditId: lt,
									canAssignOwn: t.isSelfAssignable
								})), o(Object(ce.userFlairMutated)({
									subredditId: lt,
									displaySettings: t
								}))
							}
						}
						const s = [Object(I.i)(() => o(Object(v.a)({
							subredditId: lt,
							postIds: ut.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: Ae,
							isLoggedIn: xe
						})];
						if (Object(He.a)(c(), {
								subredditId: lt
							})) {
							const e = Object(I.i)(() => o(Object(ie.h)(t, lt)), {
									name: "subredditSettingsRequested",
									isLoggedIn: xe,
									page: Ae
								}),
								r = Object(I.i)(() => o(Object(oe.g)(lt, De.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: xe,
									page: Ae
								});
							s.push(e, r)
						}
						await Promise.all(s)
					}
				} else {
					const s = nt.ok ? void 0 : nt.error;
					if (Object(Le.a)(s ? `${nt.status||"000"}: ${s.type}` : "000: UNKNOWN_ERROR")(c()), 403 === nt.status || 404 === nt.status || 451 === nt.status) return void o(rt(nt, t));
					o(ct({
						error: !nt.ok && nt.error || {
							type: l.I.NOT_FOUND_ERROR
						},
						key: e,
						...ut
					})), d && o($.f({
						id: bt,
						kind: X.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: at(e, t, r, d)
					}))
				}
			}, ut = (e, t, r) => async (n, s) => {
				const d = s(),
					i = Object(O.a)(e, t.sort, t);
				Object(Ve.z)(d, {
					listingKey: i
				}).length > 0 || await n(at(i, e, t, r))
			}, lt = (e, t, r, n) => {
				const s = Object(Fe.b)(e);
				if (Object(m.a)(t, {
						countryCode: r,
						languageCode: n
					})) {
					if (Object(p.a)(t)) {
						return Object(Ke.a)(e, {
							listingName: t
						}).displayText
					}
					if (s) return Object(g.a)(e, Object(_.f)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case ue.d.Popular:
							return "r/popular";
						case ue.d.All:
							return "r/all"
					}
				}
				const d = Object(Q.X)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(Q.w)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(g.a)(e, d, n)
				}
				return d
			}, bt = (e, t, r, n) => n ? Object(j.b)(e.subredditName, void 0, n) : Object(O.a)(e.subredditName, t, r), pt = (e, t) => async (r, n) => {
				var s, d, i;
				const {
					countryCode: o,
					languageCode: p
				} = e.params, f = Object(b.e)(e.params), {
					styling: _
				} = e.queryParams, g = n(), y = g.meta.popularGeoFilter, v = Object(ve.a)(e.params, g);
				if ("popular" === f.toLowerCase() && y && !e.queryParams.geo_filter) {
					const t = `r/popular?${Object(a.stringify)({...e.queryParams,geo_filter:y})}`;
					return void r(Object(u.c)(e.url.replace(/r\/popular/i, t)))
				}
				if ("Popular" === f) return void r(Object(u.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === f) return void r(Object(u.c)(e.url.replace("r/All", "r/all")));
				const x = Object(j.d)(e.queryParams, Object(re.kb)(g)),
					N = bt({
						subredditName: f,
						countryCode: o,
						languageCode: p
					}, v, e.queryParams, x),
					C = v,
					R = Object(S.a)(g.listings.postOrder.api.error, N),
					w = Object(S.a)(g.listings.postOrder.api.pending, N);
				let L = !!Object(S.a)(g.listings.postOrder.ids, N);
				const G = Object(S.a)(g.listings.postOrder.listingSort, N);
				G && G.hasChanged && (L = !1);
				let F = Object(Q.F)(g, f);
				const M = (e, t) => "true" === _ && ((e, t) => Object(ze.b)(ke.c.config)(e, {
						subredditId: t
					}) || Object(ze.b)(ke.c.flair)(e, {
						subredditId: t
					}))(e, t),
					q = le.C in e.queryParams && e.queryParams[le.C].toUpperCase() || "",
					B = q in l.ic && l.ic[q];
				if (w || L && !R && !t) {
					if (M(g, F) && r(K.i(F)), L) {
						const t = lt(n(), f, o, p);
						r(P.m({
							title: t
						})), (null === (s = g.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[N]) && r(P.o({
							correlationId: g.listings.postOrder.correlationIds[N]
						})), Object(Ee.g)(n(), r, e), window.addEventListener("load", () => {
							r(Object(A.p)())
						}), g.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(h.b)(Ue.a.SUBREDDIT))
						}), r(ne())
					}
					return void(Object(Be.e)(n()) && r(Object(D.a)()))
				}
				r(E.g());
				const J = null === (i = null === (d = Object(te.b)(g)) || void 0 === d ? void 0 : d.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
					H = Object(re.Q)(n()),
					z = Object(I.i)(() => r(Object(U.c)(`r/${f}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: H,
						page: J
					});
				if (x) {
					const e = Object(I.i)(() => r(Object(k.d)(N, x, f)), {
						name: "searchDataRequested",
						isLoggedIn: H,
						page: J
					});
					await e
				} else {
					const t = {
						...c()(e.queryParams, [...le.k, ...le.j, le.g]),
						sort: C,
						t: Object(xe.a)(C, B)
					};
					await r(at(N, f, t, !0))
				}
				const V = g.platform.currentPage,
					$ = Object(Qe.d)(g, {
						pageLayer: V
					});
				if (Object(Qe.a)($) || Object(Qe.b)($) || Object(Qe.c)($)) {
					const e = Object(O.a)(f, l.W.TOP, {
							t: l.ic.WEEK
						}),
						t = {
							sort: l.W.TOP,
							t: l.ic.WEEK
						};
					await r(at(e, f, t, !1))
				}
				if (Object(Be.e)(n()) && r(Object(D.a)()), F = F || Object(Q.F)(n(), f), !Object(Ge.a)(g, F) && !Object(m.a)(f, {
						countryCode: o,
						languageCode: p
					})) {
					const e = Object(I.i)(() => r(Object(T.e)(f)), {
						name: "getTopCommunityFlair",
						page: J,
						isLoggedIn: H
					});
					await e
				}
				M(n(), F) && r(K.i(F)), Object(Ee.g)(n(), r, e);
				const W = lt(n(), f);
				r(P.m({
					title: W
				})), r(ne()), await z
			}, mt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", ft = Object(f.a)(mt)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "K", (function() {
				return n
			})), r.d(t, "L", (function() {
				return s
			})), r.d(t, "l", (function() {
				return d
			})), r.d(t, "m", (function() {
				return i
			})), r.d(t, "x", (function() {
				return o
			})), r.d(t, "H", (function() {
				return c
			})), r.d(t, "I", (function() {
				return a
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "G", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "Q", (function() {
				return p
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "D", (function() {
				return f
			})), r.d(t, "s", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "q", (function() {
				return v
			})), r.d(t, "S", (function() {
				return x
			})), r.d(t, "R", (function() {
				return A
			})), r.d(t, "T", (function() {
				return N
			})), r.d(t, "U", (function() {
				return C
			})), r.d(t, "V", (function() {
				return R
			})), r.d(t, "W", (function() {
				return w
			})), r.d(t, "X", (function() {
				return D
			})), r.d(t, "Y", (function() {
				return L
			})), r.d(t, "Z", (function() {
				return k
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "E", (function() {
				return U
			})), r.d(t, "u", (function() {
				return G
			})), r.d(t, "v", (function() {
				return F
			})), r.d(t, "t", (function() {
				return M
			})), r.d(t, "w", (function() {
				return q
			})), r.d(t, "P", (function() {
				return B
			})), r.d(t, "o", (function() {
				return Q
			})), r.d(t, "y", (function() {
				return J
			})), r.d(t, "db", (function() {
				return H
			})), r.d(t, "J", (function() {
				return z
			})), r.d(t, "a", (function() {
				return K
			})), r.d(t, "F", (function() {
				return V
			})), r.d(t, "N", (function() {
				return $
			})), r.d(t, "O", (function() {
				return W
			})), r.d(t, "M", (function() {
				return Y
			})), r.d(t, "ab", (function() {
				return X
			})), r.d(t, "C", (function() {
				return Z
			})), r.d(t, "B", (function() {
				return ee
			})), r.d(t, "z", (function() {
				return te
			})), r.d(t, "A", (function() {
				return re
			})), r.d(t, "cb", (function() {
				return ne
			})), r.d(t, "bb", (function() {
				return se
			}));
			const n = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				s = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				d = "POST_CREATION_EDIT_COMPLETE",
				i = "POST_CREATION_EDIT_FAILED",
				o = "POST_CREATION_PENDING_EDIT",
				c = "POST_CREATION_START_EDITING_POST",
				a = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				b = "FINISHED_CONVERTING_EDITOR_CONTENT",
				p = "POST_CREATION__TOGGLE_EDITOR_MODE",
				m = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				f = "POST_TITLE_FETCHED",
				O = "INITIALIZE_EDITOR_MODE",
				j = "POST_CREATION__CHANGE_FLAIR",
				_ = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				g = "POST_CREATION__CHANGE_LINK_BODY",
				I = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				S = "POST_CREATION__CHANGE_MEDIA_BODY",
				h = "POST_CREATION__CHANGE_RECAPTCHA",
				T = "POST_CREATION__CHANGE_RTE_STATE",
				y = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				E = "POST_CREATION__CHANGE_TITLE",
				v = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				A = "POST_CREATION__TOGGLE_IS_CHANGED",
				N = "POST_CREATION__TOGGLE_IS_GOV",
				C = "POST_CREATION__TOGGLE_IS_NSFW",
				R = "POST_CREATION__TOGGLE_IS_OC",
				w = "POST_CREATION__TOGGLE_IS_POLL",
				D = "POST_CREATION__TOGGLE_IS_SPOILER",
				L = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				k = "POST_CREATION__TOGGLE_SEND_REPLIES",
				P = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				U = "POST_CREATION__RESET_FORM",
				G = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				M = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				q = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				Q = "POST_CREATION__FAILED",
				J = "POST_CREATION__POLL_FAILED",
				H = "POST_CREATION__VALIDATION_FAILED",
				z = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				K = "POST_CREATION__CAPTCHA_REQUIRED",
				V = "POST_CREATION__SET_SUBMIT_MODE",
				$ = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				W = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS",
				Z = "POST_CREATION__SUBREDDIT_RECOMMENDATION_PENDING",
				ee = "POST_CREATION__SUBREDDIT_RECOMMENDATION_LOADED",
				te = "POST_CREATION__SUBREDDIT_RECOMMENDATION_FAILED",
				re = "POST_CREATION__SUB_REC_IS_INPUT_CHANGED",
				ne = "POST_CREATION__UPDATE_TOURNAMENT",
				se = "POST_CREATION__UPDATE_TALK"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return x
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "u", (function() {
				return M
			})), r.d(t, "t", (function() {
				return q
			})), r.d(t, "v", (function() {
				return B
			})), r.d(t, "w", (function() {
				return Q
			})), r.d(t, "x", (function() {
				return J
			})), r.d(t, "y", (function() {
				return H
			})), r.d(t, "A", (function() {
				return z
			})), r.d(t, "B", (function() {
				return K
			})), r.d(t, "E", (function() {
				return V
			})), r.d(t, "D", (function() {
				return $
			})), r.d(t, "C", (function() {
				return W
			})), r.d(t, "m", (function() {
				return Y
			})), r.d(t, "r", (function() {
				return Z
			})), r.d(t, "s", (function() {
				return ee
			})), r.d(t, "q", (function() {
				return te
			})), r.d(t, "z", (function() {
				return re
			})), r.d(t, "p", (function() {
				return ne
			})), r.d(t, "n", (function() {
				return se
			})), r.d(t, "k", (function() {
				return ue
			})), r.d(t, "j", (function() {
				return pe
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/debounce.js"),
				s = r.n(n),
				d = r("./node_modules/react-router-redux/es/index.js"),
				i = r("./src/lib/isUrl/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/endpoints/post/index.tsx"),
				l = r("./src/redditGQL/operations/WhereToPostSubRec.json"),
				b = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/redditGQL/operations/OpenAISubRecWithDetail.json");
			var m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = r("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = r("./src/reddit/models/PostCreationForm/index.ts"),
				g = r("./src/reddit/models/Subreddit/index.ts"),
				I = r("./src/reddit/routes/postCreation/constants.ts"),
				S = r("./src/reddit/selectors/activeModalId.ts"),
				h = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				T = r("./src/reddit/selectors/postCollection.ts"),
				y = r("./src/reddit/selectors/postCreations.ts"),
				E = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				v = r("./src/reddit/actions/postCreation/constants.ts");
			const x = Object(o.a)(v.n),
				A = Object(o.a)(v.D),
				N = (Object(o.a)(v.s), e => {
					switch (e) {
						case "markdown":
							return "self";
						case "richtext":
						case "richText":
							return "self";
						case "media":
							return "media";
						default:
							return "link"
					}
				}),
				C = Object(o.a)(v.b),
				R = Object(o.a)(v.c),
				w = Object(o.a)(v.d),
				D = Object(o.a)(v.e),
				L = Object(o.a)(v.f),
				k = Object(o.a)(v.g),
				P = Object(o.a)(v.h),
				U = Object(o.a)(v.i),
				G = Object(o.a)(v.j),
				F = Object(o.a)(v.q),
				M = Object(o.a)(v.S),
				q = Object(o.a)(v.R),
				B = (Object(o.a)(v.T), Object(o.a)(v.U)),
				Q = Object(o.a)(v.V),
				J = Object(o.a)(v.W),
				H = Object(o.a)(v.X),
				z = Object(o.a)(v.Y),
				K = Object(o.a)(v.Z),
				V = Object(o.a)(v.cb),
				$ = Object(o.a)(v.bb),
				W = Object(o.a)(v.ab),
				Y = Object(o.a)(v.r),
				X = s()((e, t) => {
					Object(i.a)(t) && e((e => async (t, r, n) => {
						let {
							apiContext: s
						} = n;
						const d = await Object(u.f)(s(), e);
						d.ok && d.body && d.body.json && d.body.json.data && t(A(d.body.json.data))
					})(t))
				}, 500),
				Z = e => async t => {
					t(w(e)), X(t, e)
				}, ee = Object(o.a)(v.E), te = (e, t) => async (r, n) => {
					r(ee()), r(e ? Object(d.b)(I.b) : Object(d.b)(Object(y.cb)(n(), {
						pageLayer: t
					})))
				}, re = e => async t => {
					t(c.i(e))
				}, ne = e => async (t, r) => {
					const n = r(),
						s = Object(a.G)(e),
						d = Object(y.H)(n);
					if (s && d) {
						Object(S.a)(n) !== _.d && t(re(_.d))
					} else t(te(!1, e))
				}, se = e => async (t, r) => {
					const n = r();
					Object(T.m)(n, {
						subredditId: e
					}) ? t(c.i(_.a)) : t(c.i(_.c))
				}, de = Object(o.a)(v.B), ie = Object(o.a)(v.C), oe = Object(o.a)(v.z), ce = Object(o.a)(v.A), ae = e => async (t, r) => {
					Object(E.e)(r()) !== e && t(ce({
						isChanged: e
					}))
				}, ue = () => async (e, t) => {
					const r = t();
					if (Object(E.g)(r))
						if (Object(E.h)(r)) {
							const t = r.creations.formData.title,
								n = Object(E.l)(r),
								s = Object(E.k)(r),
								d = Object(E.b)(r);
							e(pe(t, n, s, void 0, d))
						} else Object(E.j)(r) && !Object(E.d)(r) && e(me())
				}, le = ["torrents", "IsolatedVocals"], be = ["askreddit", "teenagers"], pe = (e, t, r, n, s) => async (d, i, o) => {
					let {
						apiContext: c,
						gqlContext: a
					} = o;
					const u = i();
					if (Object(E.i)(u)) return;
					d(ie());
					const l = Object(m.c)(m.a.PostComposer),
						_ = await ((e, t, r, n, s, d) => Object(b.a)(e, {
							...p,
							variables: {
								title: t,
								body: r,
								link: n,
								correlationId: s,
								confidenceWeight: d
							}
						}))(a(), e, t, r, l, s),
						I = {};
					let S = {};
					const T = {},
						y = {},
						v = [];
					if (!_.body || !_.ok) return d(ae(!1)), void d(oe()); {
						const {
							data: e
						} = _.body, {
							subredditSuggestions: t
						} = e.openaiSubredditSuggestionsDetailed;
						let r = t.map(e => {
							const {
								subredditInfo: t,
								cVal: r,
								sVal: n
							} = e, s = t.name;
							return s && (y[s] = {
								confidence: r,
								succRate: n
							}), t
						}).filter(e => !le.includes(e.name));
						const s = (r = n ? r.filter(e => !n(e)) : r).slice(0, E.a),
							o = s.map(e => {
								const t = e.name;
								return v.push(t), t
							});
						if (Object(h.b)(u) && (e => {
								const t = e.map(e => e.toLowerCase());
								let r = !1;
								return be.forEach(e => {
									t.includes(e) && (r = !0)
								}), r
							})(o)) return d(ae(!1)), d(de({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(j.G)(i()), void d(oe());
						s.forEach(e => {
							if (Object(g.j)(e)) {
								const t = Object(O.f)(e);
								T[t.id] = t
							} else if (e && Object.keys(e).length > 0) {
								const t = Object(O.a)(e),
									r = Object(f.a)(e);
								I[t.id] = t, S = {
									...S,
									...r
								}
							}
						})
					}
					d(ae(!1)), d(de({
						subreddits: I,
						subredditsAboutInfo: S,
						unavailableSubreddits: T,
						recSubsDict: y,
						recSubsOrder: v
					})), 0 === Object(E.c)(i()).length && d(oe())
				}, me = () => async (e, t, r) => {
					let {
						apiContext: n,
						gqlContext: s
					} = r;
					const d = t();
					if (Object(E.i)(d)) return;
					e(ie());
					const i = {};
					let o = {};
					const c = {},
						a = {},
						u = [],
						p = await (e => Object(b.a)(e, {
							...l,
							variables: {
								recentSubreddits: []
							}
						}))(s());
					if (!p.ok || !p.body) return e(oe()), void e(ae(!1)); {
						const {
							data: e
						} = p.body;
						(e.whereToPostSuggestions.edges || []).forEach((e, t) => {
							if (t >= E.a) return;
							const r = e.node.subredditInfo;
							if (Object(g.j)(r)) {
								const e = Object(O.f)(r);
								c[e.id] = e
							} else if (r && Object.keys(r).length > 0) {
								const e = Object(O.a)(r),
									t = Object(f.a)(r);
								a[r.name] = {}, u.push(r.name), i[e.id] = e, o = {
									...o,
									...t
								}
							}
						})
					}
					e(ae(!1)), e(de({
						subreddits: i,
						subredditsAboutInfo: o,
						unavailableSubreddits: c,
						recSubsDict: a,
						recSubsOrder: u
					})), 0 === Object(E.c)(t()).length && e(oe())
				}
		},
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "b", (function() {
				return S
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = r("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = Object(n.a)(d.w),
				u = Object(n.a)(d.x),
				l = Object(n.a)(d.G),
				b = (Object(n.a)(d.H), Object(n.a)(d.I)),
				p = Object(n.a)(d.T),
				m = e => async (t, r) => {
					if (Object(o.a)(r())) return t(f(e))
				}, f = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = Object(c.k)(r()),
						o = Object(c.m)(r(), {
							subreddit: e
						}),
						p = o && o.lastUpdated || 0,
						m = 1e3 * d.global.rpan_config_refresh_rate;
					if (d.isPending || d.isPermanentlyCanceled || Date.now() < p + m) return;
					t(l());
					const f = await Object(i.c)(s(), e);
					if (!f.ok) return void t(b());
					const O = f.body;
					t(a({
						...O.global,
						lastUpdated: Date.now()
					})), t(u({
						name: e,
						config: {
							...O.listing_info,
							lastUpdated: Date.now()
						}
					}))
				}, O = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					t(p()), await Object(i.h)(s(), e)
				}, j = e => async (t, r, n) => {
					let {
						apiContext: d
					} = n;
					r().posts.models[e] || await t(Object(s.M)(e))
				}, _ = Object(n.a)(d.v), g = Object(n.a)(d.J), I = Object(n.a)(d.K), S = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (Object(c.h)(s)) return;
					e(g());
					const d = await Object(i.d)(n());
					d.ok && d.body && d.body.data ? e(_({
						subreddits: d.body.data
					})) : e(I({
						error: d.error
					}))
				}
		},
		"./src/reddit/actions/recentSubreddits/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			}));
			const n = "SET_RECENT_SUBREDDITS",
				s = "SUBREDDIT_VISITED",
				d = "SUBREDDIT_SAVED",
				i = "COPY_SAVED_SUBREDDITS",
				o = "COPY_SAVED_ID_SUBREDDITS",
				c = 10
		},
		"./src/reddit/actions/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/goodContent/index.ts");
			const d = "FRONTPAGE_LINKS__REQUEST_LOADED",
				i = "SUBREDDIT_LINKS_LOADED",
				o = 10,
				c = Object(n.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				a = Object(n.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(n.a)(d),
				l = Object(n.a)(i),
				b = () => async e => {
					e(c());
					const t = await Object(s.a)();
					e(t ? u(t) : a())
				}
		},
		"./src/reddit/actions/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "SUBREDDIT_TOPIC_LINKS_LOADED",
				d = Object(n.a)(s)
		},
		"./src/reddit/actions/subreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "m", (function() {
				return z
			})), r.d(t, "l", (function() {
				return K
			})), r.d(t, "k", (function() {
				return V
			})), r.d(t, "j", (function() {
				return $
			})), r.d(t, "i", (function() {
				return W
			})), r.d(t, "h", (function() {
				return Y
			})), r.d(t, "d", (function() {
				return X
			})), r.d(t, "p", (function() {
				return re
			})), r.d(t, "t", (function() {
				return ne
			})), r.d(t, "o", (function() {
				return ie
			})), r.d(t, "r", (function() {
				return ae
			})), r.d(t, "g", (function() {
				return ue
			})), r.d(t, "f", (function() {
				return le
			})), r.d(t, "e", (function() {
				return be
			})), r.d(t, "q", (function() {
				return Oe
			})), r.d(t, "b", (function() {
				return je
			})), r.d(t, "c", (function() {
				return _e
			})), r.d(t, "a", (function() {
				return ge
			})), r.d(t, "u", (function() {
				return Te
			})), r.d(t, "n", (function() {
				return ye
			})), r.d(t, "s", (function() {
				return Ee
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				d = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/listingSort/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				p = r("./src/reddit/actions/pages/subreddit.ts"),
				m = r("./src/reddit/actions/preferences.ts"),
				f = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				O = r("./src/reddit/actions/subredditRules/constants.ts"),
				j = r("./src/reddit/actions/toaster.ts"),
				_ = r("./src/reddit/constants/history.ts"),
				g = r("./src/reddit/constants/modals.ts"),
				I = r("./src/reddit/constants/page.ts"),
				S = r("./src/reddit/constants/parameters.ts"),
				h = r("./src/reddit/constants/postLayout.ts"),
				T = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/endpoints/governance/posts.ts"),
				E = r("./src/reddit/endpoints/messages/index.ts"),
				v = r("./src/reddit/endpoints/modQueue/index.ts"),
				x = r("./src/reddit/endpoints/page/subredditPage.ts"),
				A = r("./src/reddit/endpoints/subreddit/about.ts"),
				N = r("./src/reddit/endpoints/subreddit/rules.ts"),
				C = r("./src/reddit/endpoints/user/preferences.ts"),
				R = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				w = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				D = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				L = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				k = r("./src/reddit/helpers/trackers/feed.ts"),
				P = r("./src/reddit/models/Subreddit/index.ts"),
				U = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				G = r("./src/reddit/models/Toast/index.ts"),
				F = r("./src/reddit/models/User/index.ts"),
				M = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				q = r("./src/reddit/selectors/moderatorPermissions.ts"),
				B = r("./src/reddit/selectors/profile.ts"),
				Q = r("./src/reddit/selectors/subreddit.ts"),
				J = r("./src/reddit/selectors/user.ts");
			const H = {},
				z = "SUBREDDIT__MODEL_SUCCEEDED",
				K = "SUBREDDIT__MODEL_PENDING",
				V = "SUBREDDIT__MODEL_FAILED",
				$ = "SUBREDDIT__MORE_POSTS_PENDING",
				W = "SUBREDDIT__MORE_POSTS_LOADED",
				Y = "SUBREDDIT__MORE_POSTS_FAILED",
				X = "SUBREDDIT__META_FILTER_TOGGLED",
				Z = Object(c.a)($),
				ee = Object(c.a)(W),
				te = Object(c.a)(Y),
				re = Object(c.a)(X),
				ne = Object(c.a)(O.b),
				se = Object(c.a)(O.c),
				de = Object(c.a)(O.a),
				ie = (e, t) => async (r, n) => {
					await (t === P.f.User ? r(oe(e)) : r(ce(e)))
				}, oe = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const d = Object(B.m)(r(), e),
						i = await Object(N.c)(s(), e);
					if (i.ok) {
						const e = i.body;
						t(ne({
							rules: e,
							subredditId: d
						}))
					}
				}, ce = e => async (t, r, s) => {
					let {
						gqlContext: d
					} = s;
					const i = Object(Q.F)(r(), e);
					t(se());
					const o = await Object(N.b)(d(), e);
					if (o.ok) {
						const e = o.body;
						t(ne({
							rules: e,
							subredditId: i
						}))
					} else {
						t(de());
						const r = `error-block-${e}`;
						t(j.f({
							id: r,
							kind: G.b.Error,
							text: n.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, ae = e => async (t, r, n) => {
					let {
						apiContext: s,
						gqlContext: c
					} = n;
					const {
						subredditName: l
					} = e;
					let p = e.t;
					const m = r(),
						O = Object(w.a)(e, m),
						j = m.platform.currentPage ? m.platform.currentPage.queryParams : {},
						g = Object(a.a)(l, O, {
							t: p,
							...j
						}),
						E = m.listings.postOrder.loadMore[g],
						v = m.listings.postOrder.listingSort[g];
					let A = O;
					if (v && !A) {
						const e = Object(o.d)(v.sort);
						A = e.sort, p = e.timeSort
					}
					const N = m.listings.postOrder.api.pending[g],
						{
							fetchedTokens: C
						} = m.listings.postOrder,
						D = !(!C[g] || !C[g][E.token]);
					if (N || D) return;
					if (A === i.W.AWARDED && l === I.g) return;
					t(Z({
						key: g,
						fetchedToken: E.token
					}));
					const L = {
							after: E.token,
							dist: E.dist,
							forceGeopopular: l === I.d.Popular,
							layout: h.e[Object(T.S)(m, {})],
							sort: A,
							t: p,
							...d()(j, [...S.k, S.g])
						},
						P = Object(M.a)(m),
						U = P ? () => Object(x.b)(c(), Object(x.c)(m, l, {
							...L,
							limit: h.a
						}), Object(J.Z)(m)) : () => Object(x.a)(s(), l, L),
						G = await U(),
						F = {
							...G.body,
							...Object(R.a)(m, g, G.body)
						};
					if (G.ok) {
						let e;
						const n = F.postIds.filter(e => !!F.posts[e].isMeta),
							d = Object(Q.F)(r(), l);
						if (n.length) {
							const t = await Object(y.a)(s(), d, n);
							t.ok && (e = t.body)
						}
						const i = Object(q.h)(m, {
							subredditId: Object(Q.F)(m, l)
						});
						if (!P && i && t(Object(b.a)({
								postIds: F.postIds
							})), t(ee({
								fetchedToken: E.token,
								key: g,
								meta: m.meta,
								governance: e,
								...F
							})), Object(q.i)(m, d)) {
							let e;
							P || (e = await Object(x.b)(c(), Object(x.c)(m, l, {
								...L,
								limit: h.a
							}), Object(J.Z)(m)));
							const r = P ? F : e.body;
							if (P ? r : e.ok) {
								const e = r.postIds.map(e => r.posts[e].lastAuthorModNote);
								t(Object(f.e)({
									subredditId: d,
									nodes: e
								}))
							}
						}
						await t(Object(u.a)({
							subredditId: d,
							postIds: F.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(k.b)(_.a.NextPageLoad)(r())
					} else {
						t(te({
							error: G.error,
							fetchedToken: E.token,
							key: g,
							...F
						}));
						const e = G.error;
						Object(k.a)(e ? `${G.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, ue = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", le = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", be = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", pe = Object(c.a)(ue), me = Object(c.a)(le), fe = Object(c.a)(be), Oe = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(pe());
					const d = await Object(v.c)(n(), i.rb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					d.ok ? e(me(d.body)) : e(fe({
						error: d.error
					}))
				}, je = "SUBREDDIT__ABOUT_PENDING", _e = "SUBREDDIT__ABOUT_SUCCEEDED", ge = "SUBREDDIT__ABOUT_FAILED", Ie = Object(c.a)(je), Se = Object(c.a)(_e), he = Object(c.a)(ge), Te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r();
					if (Object(Q.w)(d, {
							subredditName: e
						}) || d.subreddits.api.about.error[e.toLowerCase()] || d.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(Ie({
						subredditName: e
					}));
					const i = !Object(Q.F)(d, e),
						o = await Object(A.a)(s(), e, i);
					if (o.ok) {
						const r = o.body.data.subreddit,
							n = Object(D.a)(r),
							s = i ? Object(L.a)(r) : void 0;
						t(Se({
							subredditName: e,
							subreddits: s ? {
								[s.id]: s
							} : void 0,
							data: n
						}))
					} else t(he({
						subredditName: e,
						error: o.error
					}))
				}, ye = (e, t, r) => async (n, s, d) => {
					let {
						apiContext: i
					} = d;
					var o;
					const c = e.substring(2),
						a = r === U.e.View ? null === (o = Object(J.f)(s(), c)) || void 0 === o ? void 0 : o.subredditId : Object(Q.F)(s(), c),
						u = Object(J.k)(s());
					if (u && a) {
						const e = ((e, t, r, n) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + n + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(c, Object(F.e)(u), t, r);
						if ((await Object(E.b)(i(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							n(Object(m.F)({
								subredditId: a,
								prefs: t
							})), Object(C.j)(a, t, i()), r !== U.e.View && n(Object(l.i)(g.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Ee = e => async (t, r) => {
					const n = r(),
						{
							subredditName: s
						} = e,
						d = e.t,
						i = Object(w.a)(e, n),
						o = n.platform.currentPage ? n.platform.currentPage.queryParams : H,
						c = Object(a.a)(s, i, {
							t: d,
							...o
						}),
						u = {
							t: d,
							sort: i,
							isRefresh: !0,
							...o
						};
					await t(Object(p.subredditDataRequested)(c, s, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "q", (function() {
				return a
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "w", (function() {
				return g
			})), r.d(t, "v", (function() {
				return I
			})), r.d(t, "x", (function() {
				return S
			})), r.d(t, "y", (function() {
				return h
			})), r.d(t, "z", (function() {
				return T
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "u", (function() {
				return x
			})), r.d(t, "s", (function() {
				return A
			}));
			const n = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				s = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				d = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				i = "SUBREDDIT__POSTS_LOADED",
				o = "SUBREDDIT__POSTS_SET_FAILED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				a = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
				u = "SUBREDDIT__RANKINGS_PENDING",
				l = "SUBREDDIT__RANKINGS_LOADED",
				b = "SUBREDDIT__RANKINGS_FAILED",
				p = "SUBREDDIT__SIMILAR_SUBREDDITS_PENDING",
				m = "SUBREDDIT__SIMILAR_SUBREDDITS_LOADED",
				f = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				O = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				j = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				_ = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				g = "SUBREDDIT__EDIT_REQUESTED",
				I = "SUBREDDIT__EDIT_FAILED",
				S = "SUBREDDIT__EDIT_SUCCESS",
				h = "SUBREDDIT_QUESTIONS_LOADED",
				T = "SUBREDDIT_SURVEY_ANSWERED",
				y = "SUBREDDIT_SURVEY_DISMISSED",
				E = "SUBREDDIT_SURVEY_DISMISS",
				v = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				x = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				A = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				d = r("./src/reddit/actions/subreddit/constants.ts");
			const i = e => async (t, r, d) => {
				let {
					gqlContext: i
				} = d;
				var c;
				const a = (await ((e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}))(i(), {
					id: e
				})).body;
				o(t, e, null === (c = a.data) || void 0 === c ? void 0 : c.subredditInfoById)
			};

			function o(e, t, r) {
				const n = null == r ? void 0 : r.answerableQuestions,
					s = null == r ? void 0 : r.contentRatingSurvey,
					i = null == r ? void 0 : r.communityProgressModule;
				(n || s || i) && e({
					type: d.y,
					payload: {
						id: t,
						questions: n,
						survey: s,
						progressModule: i
					}
				})
			}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				d = r("./src/config.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/reddit/models/Post/index.ts");
			var c = r("./src/reddit/models/Duplicates/index.ts"),
				a = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(b)),
				m = (e, t) => async (r, n, b) => {
					let {
						apiContext: m
					} = b;
					const f = Object(l.U)(n(), {
						subredditId: e
					}) || Object(u.p)(n(), {
						profileId: e
					});
					if (!f) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.h)(f) ? s.kc + f.name : f.name
						},
						j = await ((e, t, r) => Object(i.a)(e, {
							data: r,
							endpoint: `${d.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(o.w)(t)}`,
							method: s.jb.GET
						}))(m(), t, O);
					if (j.ok) {
						const n = j.body;
						r(p({
							distinguishKey: Object(c.a)(t, O),
							postIds: n.postIds,
							posts: n.posts,
							profiles: n.profiles,
							subreddits: n.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration/modUserNotes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return N
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "d", (function() {
				return U
			})), r.d(t, "b", (function() {
				return G
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/subredditModeration/constants.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/CommentsPageLastAuthorModNotes.json"),
				u = r("./src/redditGQL/operations/CreateModUserNote.json"),
				l = r("./src/redditGQL/operations/DeleteModUserNote.json"),
				b = r("./src/redditGQL/operations/GetModUserNotes.json"),
				p = r("./src/redditGQL/operations/GetTotalModNoteCount.json");
			var m = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				f = r("./src/reddit/models/SubredditModeration/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = r("./src/reddit/selectors/modUserNotes.ts"),
				g = r("./src/reddit/helpers/trackers/modNote.ts"),
				I = r("./src/telemetry/index.ts"),
				S = r("./src/redditGQL/types.ts"),
				h = r("./src/lib/initializeClient/installReducer.ts"),
				T = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			Object(h.a)({
				features: {
					modUserNotes: T.a
				}
			});
			const E = Object(s.a)(i.U),
				v = Object(s.a)(i.T),
				x = Object(s.a)(i.S),
				A = Object(s.a)(i.R),
				N = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var i;
					const a = r(),
						{
							subredditId: u,
							userId: l,
							before: p,
							filter: m
						} = e,
						j = Object(f.d)(u, l, m, p),
						_ = a.features.modUserNotes.fetchedTokens[j];
					if (!a.features.modUserNotes.api.pending[j] && !_) {
						t(E({
							subredditId: u,
							userId: l,
							filter: m,
							fetchedToken: p
						}));
						try {
							const e = await ((e, t) => Object(c.a)(e, {
								...b,
								variables: {
									...t,
									last: 25
								}
							}))(s(), {
								subredditId: u,
								userId: l,
								filter: m,
								before: p
							});
							if (e.ok) {
								const {
									data: {
										subredditInfoById: r
									}
								} = e.body;
								if ("Subreddit" === (null == r ? void 0 : r.__typename) && (null === (i = null == r ? void 0 : r.modNotes) || void 0 === i ? void 0 : i.edges)) {
									const {
										edges: e,
										pageInfo: n
									} = r.modNotes, s = [];
									e.forEach(e => {
										e && e.node && s.push(e.node)
									}), t(v({
										notes: s,
										subredditId: u,
										userId: l,
										filter: m,
										fetchedToken: p,
										loadMoreToken: n.hasNextPage ? n.endCursor : null
									}))
								}
								const {
									errors: n
								} = e.body;
								n && n.length && d.c.captureException(n)
							} else t(x({
								subredditId: u,
								userId: l,
								filter: m,
								fetchedToken: p
							})), t(Object(o.f)({
								kind: O.b.Error,
								text: y._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						} catch (g) {
							d.c.captureException(g), t(Object(o.f)({
								kind: O.b.Error,
								text: y._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						}
					}
				}, C = Object(s.a)(i.H), R = Object(s.a)(i.G), w = e => {
					let {
						subredditId: t,
						nodes: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: d
						} = s;
						const i = [],
							o = [];
						r.map(e => {
							const t = null == e ? void 0 : e.user.id;
							t && !o.includes(t) && e && (i.push(e), o.push(t))
						}), e(R({
							subredditId: t,
							lastAuthorModNotes: i
						}))
					}
				}, D = (e, t, r) => async (s, d, i) => {
					let {
						gqlContext: o
					} = i;
					var u, l, b, p, f, O, j;
					const {
						hasSortParam: _,
						sortToUse: g
					} = Object(m.a)(d(), e), I = n.Jb[g], h = {
						postId: e,
						requestPostModerationInfo: !t,
						..._ && I && {
							sortType: S.e[I]
						},
						...r && {
							after: r
						}
					}, T = await ((e, t) => Object(c.a)(e, {
						...a,
						variables: {
							...t
						}
					}))(o(), h);
					if (T.ok) {
						const e = null === (u = T.body) || void 0 === u ? void 0 : u.data,
							t = null === (b = null === (l = null == e ? void 0 : e.postInfoById) || void 0 === l ? void 0 : l.subreddit) || void 0 === b ? void 0 : b.id,
							r = null === (f = null === (p = null == e ? void 0 : e.postInfoById) || void 0 === p ? void 0 : p.moderationInfo) || void 0 === f ? void 0 : f.lastAuthorModNote,
							n = null === (j = null === (O = null == e ? void 0 : e.postInfoById) || void 0 === O ? void 0 : O.commentForest) || void 0 === j ? void 0 : j.trees;
						r && s(C({
							subredditId: t,
							lastAuthorModNote: r
						})), n && s((e => {
							let {
								subredditId: t,
								commentTrees: r
							} = e;
							return async (e, n, s) => {
								let {
									gqlContext: d
								} = s;
								const i = [],
									o = [];
								r.map(e => {
									var t, r;
									if (!(null == e ? void 0 : e.node)) return;
									const n = null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote,
										s = null == n ? void 0 : n.user.id;
									s && !o.includes(s) && n && (i.push(n), o.push(s))
								}), e(R({
									subredditId: t,
									lastAuthorModNotes: i
								}))
							}
						})({
							subredditId: t,
							commentTrees: n
						}))
					}
				}, L = Object(s.a)(i.Q), k = (e, t, r, n, s, d) => async (i, a, l) => {
					let {
						gqlContext: b
					} = l;
					var p, m;
					const f = {
							subredditId: e,
							userId: t,
							label: s,
							note: r,
							redditId: d
						},
						j = await ((e, t) => Object(c.a)(e, {
							...u,
							variables: {
								input: t
							}
						}))(b(), f);
					if (j.ok) {
						const r = null === (m = null === (p = j.body) || void 0 === p ? void 0 : p.data) || void 0 === m ? void 0 : m.createModUserNote.createdNote;
						if (!r) return void i(Object(o.f)({
							kind: O.b.Error,
							text: y._("Something went wrong", null, {
								hk: "zYMeg"
							}),
							duration: 3e3
						}));
						i(L({
							subredditId: e,
							newModNote: r,
							filter: n
						})), Object(I.a)(Object(g.v)({
							userId: t,
							subredditId: e,
							filteredType: n,
							modNote: r
						})(a())), i(Object(o.f)({
							kind: O.b.SuccessMod,
							text: y._("Successfully created mod note", null, {
								hk: "10Vu91"
							}),
							duration: 3e3
						}))
					} else {
						const {
							errors: e
						} = j.body, t = e[0] ? e[0].message : y._("Something went wrong", null, {
							hk: "2uu095"
						});
						i(Object(o.f)({
							kind: O.b.Error,
							text: t,
							duration: 3e3
						}))
					}
				}, P = Object(s.a)(i.lb), U = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					var i, o;
					const a = n();
					if (!Object(j.i)(a, e)) return;
					const u = {
						subredditId: e,
						userId: t
					};
					if (Object(_.g)(a, t, e)) return;
					const l = await ((e, t) => Object(c.a)(e, {
						...p,
						variables: {
							...t
						}
					}))(d(), u);
					if (l.ok) {
						const n = null === (i = l.body) || void 0 === i ? void 0 : i.data;
						if ("Subreddit" === (null === (o = null == n ? void 0 : n.subredditInfoById) || void 0 === o ? void 0 : o.__typename)) {
							const s = null == n ? void 0 : n.subredditInfoById;
							s && r(P({
								subredditId: e,
								userId: t,
								totalCounts: s
							}))
						}
					}
				}, G = (e, t, r, n) => async (s, d, i) => {
					let {
						gqlContext: a
					} = i;
					const u = {
						subredditId: e,
						userId: t,
						noteId: r,
						noteType: n
					};
					(await ((e, t) => Object(c.a)(e, {
						...l,
						variables: {
							input: t
						}
					}))(a(), u)).ok ? (s(A({
						subredditId: e,
						userId: t,
						noteId: r
					})), s(Object(o.f)({
						kind: O.b.SuccessMod,
						text: y._("Mod Note sucessfully deleted!", null, {
							hk: "17NyFK"
						})
					}))) : s(Object(o.f)({
						kind: O.b.Error,
						text: y._("Could not delete note. Try again later.", null, {
							hk: "1XczhA"
						})
					}))
				}
		},
		"./src/reddit/actions/subredditRules/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "SUBREDDIT__RULES_LOADED",
				s = "SUBREDDIT__RULES_PENDING",
				d = "SUBREDDIT__RULES_FAILED",
				i = "SUBREDDIT__RULE_ADDED",
				o = "SUBREDDIT__RULE_EDITED",
				c = "SUBREDDIT__RULE_REMOVED",
				a = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "i", (function() {
				return U
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				d = r.n(s),
				i = r("./node_modules/lodash/xor.js"),
				o = r.n(i),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/reddit/endpoints/subreddit/settings.ts"),
				l = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				f = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/subredditSettings.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/selectors/widgets.ts");
			const h = "SUBREDDIT_SETTINGS_LOADED",
				T = Object(a.a)(h),
				y = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				E = Object(a.a)(y),
				v = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				x = Object(a.a)(v),
				A = (e, t) => async (r, n, s) => {
					let {
						apiContext: d,
						gqlContext: i
					} = s;
					if (!t || !Object(_.W)(n(), t)) {
						const t = await Object(u.b)(d(), e);
						t && t.ok && r(T(t.body))
					}
					if (t && !Object(g.b)(n(), {
							subredditId: t
						})) {
						const e = await Object(p.a)(i(), t);
						if (e && e.ok) {
							const t = e.body,
								n = Object(m.e)(t.data);
							r(E(n))
						}
					}
				}, N = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = Object(I.k)(t());
					s && await e(A(c.kc + Object(j.e)(s)))
				}, C = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", R = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", w = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", D = Object(a.a)(C), L = Object(a.a)(R), k = Object(a.a)(w), P = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c, a) => {
						let {
							apiContext: m,
							gqlContext: j
						} = a;
						i(D());
						const I = c(),
							h = d()(Object(_.W)(I, e), ...Object.keys(t)),
							T = d()(Object(g.b)(I, {
								subredditId: e
							}), ...Object.keys(r)),
							y = await Object(u.f)(m(), e, t),
							E = Object.keys(r).length > 0;
						let v = !0;
						if (E) {
							v = (await Object(p.b)(j(), e, r)).ok
						}
						if (!y.ok || E && !v) i(k()), i(Object(b.f)({
							kind: O.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: P(e, t, T, void 0)
						})), s && Object(l.a)(Object(f.c)(I, "BE returned an error:"));
						else {
							const d = Object(u.c)(y.body);
							i(L({
								settings: {
									...d,
									subredditId: e
								},
								idCardWidgetId: Object(S.c)(I, {
									subredditId: e
								})
							})), E && i(x({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							s && 0 === o()(Object.keys(t), Object.keys(h)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = P(e, h, T, s)), i(Object(b.f)({
								kind: O.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
					}
				}, U = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					(await Object(u.d)(i(), e, t)).ok ? r(Object(b.f)({
						kind: O.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(b.f)({
						kind: O.b.Error,
						text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						})
					}))
				}
		},
		"./src/reddit/actions/tags/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "t", (function() {
				return n
			})), r.d(t, "j", (function() {
				return s
			})), r.d(t, "r", (function() {
				return d
			})), r.d(t, "q", (function() {
				return i
			})), r.d(t, "s", (function() {
				return o
			})), r.d(t, "l", (function() {
				return c
			})), r.d(t, "m", (function() {
				return a
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "o", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "v", (function() {
				return m
			})), r.d(t, "w", (function() {
				return f
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "A", (function() {
				return I
			})), r.d(t, "z", (function() {
				return S
			})), r.d(t, "D", (function() {
				return h
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "C", (function() {
				return y
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "B", (function() {
				return v
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "i", (function() {
				return w
			}));
			const n = "TAGS__REQUESTED",
				s = "TAGS__AVAILABLE_LOADED",
				d = "TAGS__LOADED",
				i = "TAGS__FAILURE",
				o = "TAGS__RELEVANCE_LOADED",
				c = "TAGS__CREATE_REQUESTED",
				a = "TAGS__CREATE_SUCCESS",
				u = "TAGS__CREATE_FAILURE",
				l = "TAGS__DELETE_REQUESTED",
				b = "TAGS__DELETE_SUCCESS",
				p = "TAGS__DELETE_FAILURE",
				m = "TAGS__UPDATE_STATE_REQUESTED",
				f = "TAGS__UPDATE_STATE_SUCCESS",
				O = "TAGS__UPDATE_STATE_FAILURE",
				j = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				_ = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				g = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				I = "TAGS__OPTIONS_CANCELLED",
				S = "TAGS__OPTION_SELECTED",
				h = "TAGS__SUGGESTED_OPTION_SELECTED",
				T = "TAGS__OPTION_DESELECTED",
				y = "TAGS__SUGGESTED_OPTION_DESELECTED",
				E = "TAGS__INPUT_CHANGED",
				v = "TAGS__SUGGESTED_INPUT_CHANGED",
				x = "GLOBAL__TAGS__LOADED",
				A = "CREATION__TAGS_INPUT_CHANGED",
				N = "CREATION__TAGS_OPTION_SELECTED",
				C = "CREATION__TAGS_OPTION_DESELECTED",
				R = "CREATION__PRIMARY_TAG_SELECTED",
				w = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return P
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "i", (function() {
				return G
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "h", (function() {
				return M
			})), r.d(t, "k", (function() {
				return q
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "f", (function() {
				return z
			})), r.d(t, "g", (function() {
				return V
			})), r.d(t, "e", (function() {
				return X
			})), r.d(t, "d", (function() {
				return Z
			})), r.d(t, "b", (function() {
				return ee
			})), r.d(t, "n", (function() {
				return te
			})), r.d(t, "c", (function() {
				return re
			})), r.d(t, "o", (function() {
				return ne
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/tags/constants.ts"),
				i = r("./src/reddit/actions/toaster.ts");
			const o = e => {
				const {
					subredditInfoById: t
				} = e, r = {
					global: {},
					[t.id]: {}
				};
				t.availableTags && t.availableTags.edges.reduce((e, t) => {
					let {
						node: r
					} = t;
					return e[r.subreddit && r.subreddit.id || "global"][r.id] = r, e
				}, r);
				const n = {
					[t.id]: {}
				};
				t.secondaryTags && t.secondaryTags.edges.reduce((e, r) => {
					let {
						node: n
					} = r;
					return e[t.id][n.tag.id] = n, e
				}, n);
				const s = {
					[t.id]: {}
				};
				return t.suggestedTags && t.suggestedTags.edges.reduce((e, r) => {
					let {
						node: n
					} = r;
					return e[t.id][n.tag.id] = n, e
				}, s), {
					primaryTag: t.primaryTag,
					globalSubredditTags: r.global,
					subredditScopedTags: {
						[t.id]: r[t.id]
					},
					subredditId: t.id,
					itemTags: n,
					suggestedItemTags: s,
					geoPlace: t.geoPlace
				}
			};
			var c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/CreateSubredditTags.json");
			const u = 1050;
			r("./src/redditGQL/operations/FetchGlobalTags.json");
			var l = r("./src/redditGQL/operations/FetchSubredditTags.json");
			const b = (e, t) => {
				let {
					subredditId: r,
					pageSize: n = u,
					after: s,
					includeAvailableTags: d
				} = t;
				return Object(c.a)(e, {
					...l,
					variables: {
						subredditId: r,
						pageSize: n,
						after: s,
						includeAvailableTags: d
					}
				})
			};
			var p = r("./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json");
			const m = (e, t) => Object(c.a)(e, {
				...p,
				variables: {
					...t,
					deleteTags: 0 !== t.deleteTagsInput.length,
					pageSize: u
				}
			});
			var f = r("./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json");
			const O = (e, t) => Object(c.a)(e, {
				...f,
				variables: t
			});
			var j = r("./src/redditGQL/operations/UpdateSubredditPrimaryTag.json");
			const _ = e => {
					const {
						secondaryTags: t,
						id: r,
						primaryTag: n
					} = e.updateSubredditTagStates.subreddit, s = t && t.edges || [];
					return {
						subredditId: r,
						primaryTagId: n && n.tag.id || null,
						secondaryTags: s.reduce((e, t) => {
							let {
								node: r
							} = t;
							return e[r.tag.id] = r, e
						}, {})
					}
				},
				g = (e, t) => Object(c.a)(e, {
					...j,
					variables: t
				});
			var I = r("./src/reddit/helpers/tags/index.ts"),
				S = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				h = r("./src/reddit/models/Tags/index.ts"),
				T = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/reducers/tags/selected/index.ts"),
				E = r("./src/reddit/selectors/tags.ts");
			Object(s.a)(d.e);
			const v = Object(s.a)(d.t),
				x = Object(s.a)(d.r),
				A = Object(s.a)(d.s),
				N = Object(s.a)(d.q),
				C = Object(s.a)(d.l),
				R = Object(s.a)(d.m),
				w = Object(s.a)(d.k),
				D = Object(s.a)(d.v),
				L = Object(s.a)(d.w),
				k = Object(s.a)(d.u),
				P = Object(s.a)(d.z),
				U = Object(s.a)(d.D),
				G = Object(s.a)(d.y),
				F = Object(s.a)(d.C),
				M = Object(s.a)(d.x),
				q = Object(s.a)(d.B),
				B = (Object(s.a)(d.d), Object(s.a)(d.c), Object(s.a)(d.b), Object(s.a)(d.g)),
				Q = Object(s.a)(d.h),
				J = Object(s.a)(d.f),
				H = Object(s.a)(d.a),
				z = Object(s.a)(d.i),
				K = Object(s.a)(d.A),
				V = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, d, c) => {
						let {
							gqlContext: a
						} = c;
						const u = d();
						s(v());
						const l = await b(a(), {
								subredditId: e
							}),
							p = l.body;
						if (l.ok && p.data.subredditInfoById.secondaryTags && p.data.subredditInfoById.availableTags && p.data.subredditInfoById.suggestedTags) s(x(o(p.data))), r && S.h(d(), e, {
							context: t
						});
						else {
							s(N());
							const d = r ? "topics_save" : "topics_load";
							S.g(u, e, d, {
								context: t
							}), s(Object(i.f)(Object(i.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), T.b.Error, n.fbt._("Retry", null, {
								hk: "1c2xrJ"
							}), V(e, t, r))))
						}
					}
				},
				$ = e => async (t, r, s) => {
					let {
						gqlContext: d
					} = s;
					t(v());
					const c = await b(d(), {
						subredditId: e
					});
					if (c.ok) {
						const e = c.body;
						t(A(o(e.data)))
					} else t(N()), t(Object(i.f)(Object(i.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), T.b.Error, n.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), A(e))))
				}, W = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					if (!t.length) return null;
					r(C());
					const i = t.map(t => ({
							subredditId: e,
							...t
						})),
						o = await ((e, t) => Object(c.a)(e, {
							...a,
							variables: t
						}))(d(), {
							input: i
						}),
						u = o.body && o.body.data || null;
					return o.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(R()), u.createSubredditTags.createdTags || []) : (r(w()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (n, s, d) => {
						let {
							gqlContext: i
						} = d;
						if (!t.length && !r.length) return;
						n(D());
						const c = s(),
							a = Object(E.d)(c, {
								subredditId: e
							}),
							u = Object(E.o)(c, {
								itemId: e
							}),
							l = Object(E.z)(c, {
								itemId: e
							}),
							b = new Set;
						for (const e of t)
							if (e.state === h.d.NONE && a[e.tagId] && !l[e.tagId]) {
								!!r.find(t => t.state === h.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} for (const e of r)
							if (e.state === h.d.NONE && a[e.tagId] && !u[e.tagId]) {
								!!t.find(t => t.state === h.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} const p = await m(i(), {
								deleteTagsInput: [...b].map(t => ({
									tagId: t,
									subredditId: e
								})),
								updateTagStatesInput: {
									subredditId: e,
									suggestedTagStates: r,
									tagStates: t
								}
							}),
							f = p.body && p.body.data || null;
						p.ok && f && f.updateSubredditTagStates && f.updateSubredditTagStates.ok && f.updateSubredditTagStates.subreddit ? n(L(o({
							subredditInfoById: f.updateSubredditTagStates.subreddit
						}))) : n(k())
					}
				}, X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, d, o) => {
						const c = d(),
							a = Object(E.q)(c, {
								subredditId: e
							}),
							u = Object(E.C)(c, {
								subredditId: e
							});
						let l = a.filter(e => !!e.id && !!e.action).map(e => ({
							tagId: e.id,
							state: e.action === y.a.ADD ? h.d.TAGGED : h.d.NONE
						}));
						if (u.length > 0) {
							const t = await W(e, u)(s, d, o);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: h.d.TAGGED
							})))
						}
						await Y(e, l)(s, d, o), Object(E.A)(d()) ? s(Object(i.f)(Object(i.e)(n.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), T.b.Error, n.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && s(Object(i.f)(Object(i.e)(n.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), T.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, s, d) => {
					const o = {
						state: h.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await W(e, [{
							text: t.displayText,
							type: h.c.CLASSIFICATION
						}])(r, s, d);
						n && 1 === n.length && (o.tagId = n[0].id)
					} else {
						if (!t.id) return void r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), T.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await Y(e, [], [o])(r, s, d): r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), T.b.Error)))
				}, ee = (e, t, r) => async (n, s, d) => {
					t.id ? await Y(e, [], [{
						state: h.d.NONE,
						tagId: t.id
					}])(n, s, d) : n(V(e, r, !1))
				}, te = function(e, t, r, s) {
					let d = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (o, c, a) => {
						let {
							gqlContext: u
						} = a;
						if (!(await O(u(), {
								input: {
									tagStatesRelevance: t,
									suggestedTagStatesRelevance: r
								}
							})).ok) return o(Object(i.f)(Object(i.e)(n.fbt._("Whoops! Unable to update topics relevance status", null, {
							hk: "17akdT"
						}), T.b.Error, n.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, s, d)))), void o($(e));
						if (d)
							for (const e of r) S.f(c(), e, {
								context: s
							});
						o(Object(i.f)(Object(i.e)(n.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), T.b.SuccessCommunity, n.fbt._("Undo", null, {
							hk: "34apPL"
						}), te(e, t.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), r.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), s, d)))), o($(e))
					}
				}, re = e => async (t, r) => {
					t(K({
						itemTagsState: {
							[e]: Object(E.o)(r(), {
								itemId: e
							})
						}
					}))
				}, ne = function(e, t) {
					let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (s, d, o) => {
						let {
							gqlContext: c
						} = o;
						const a = Object(E.x)(d(), {
							subredditId: e
						});
						if ((null == a ? void 0 : a.id) === t.tagId && t.state === h.d.TAGGED) return;
						s(B());
						const u = await g(c(), {
								input: {
									subredditId: e,
									primaryTagState: t
								}
							}),
							l = u.body && u.body.data || null;
						u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (s(Q(_(l))), r && s(Object(i.f)(Object(i.e)(n.fbt._("Successfully updated primary topic!", null, {
							hk: "1NL90v"
						}), T.b.SuccessCommunity)))) : (s(J()), s(Object(i.f)(Object(i.e)(n.fbt._("Whoops! Unable to update primary topic", null, {
							hk: "3ilZqp"
						}), T.b.Error, n.fbt._("Retry", null, {
							hk: "1dRYXW"
						}), ne(e, t)))))
					}
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "m", (function() {
				return j
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "k", (function() {
				return I
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				j = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				I = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return g
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return I
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return S
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return h
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
				return T
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return y
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return E
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return v
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return x
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return A
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return N
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return C
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return R
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return w
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return D
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return L
			})), r.d(t, "userFlairMutated", (function() {
				return k
			})), r.d(t, "authorFlairMutated", (function() {
				return P
			})), r.d(t, "userFlairChanged", (function() {
				return U
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return G
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return F
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return M
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return q
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return B
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return Q
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(d),
				o = r("./src/reddit/actions/authorFlair.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/flair/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/userFlair.ts"),
				O = r("./src/lib/initializeClient/installReducer.ts"),
				j = r("./src/reddit/reducers/features/userFlair/index.ts"),
				_ = r("./src/reddit/actions/userFlair/constants.ts");
			Object(O.a)({
				features: {
					userFlair: j.a
				}
			});
			const g = Object(s.a)(_.i),
				I = Object(s.a)(_.j),
				S = Object(s.a)(_.h),
				h = Object(s.a)(_.c),
				T = Object(s.a)(_.d),
				y = Object(s.a)(_.b),
				E = Object(s.a)(_.p),
				v = Object(s.a)(_.q),
				x = Object(s.a)(_.o),
				A = Object(s.a)(_.f),
				N = Object(s.a)(_.g),
				C = Object(s.a)(_.e),
				R = Object(s.a)(_.m),
				w = Object(s.a)(_.n),
				D = Object(s.a)(_.l),
				L = Object(s.a)(_.k),
				k = Object(s.a)(_.r),
				P = Object(s.a)(_.a),
				U = (e, t, r, n, s) => async (d, i, o) => {
					let {
						apiContext: c
					} = o;
					const l = i(),
						b = l.user.account,
						O = b ? Object(p.e)(b) : void 0,
						j = {
							...Object(f.d)(l, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						_ = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: j
						};
					d(n === O ? k(_) : P(_));
					const g = Object(m.U)(l, {
							subredditId: s
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					Object(a.g)(c(), n, g.name, t, I), n === O && Object(a.i)(c(), r, g.name)
				}, G = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const i = n(),
						o = Object(m.U)(i, {
							subredditId: e
						}).name;
					r(g());
					const c = await Object(a.l)(d(), o, t);
					if (c.ok) {
						r(I({
							subredditId: e,
							isEnabled: t
						}))
					} else r(S());
					return c.ok
				}, F = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const i = n(),
						o = Object(m.U)(i, {
							subredditId: e
						}).name;
					r(h());
					const c = await Object(a.j)(d(), t, l.d.UserFlair, o);
					if (c.ok) {
						r(T({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(y());
					return c.ok
				}, M = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					const o = s(),
						u = Object(m.U)(o, {
							subredditId: t
						}).name;
					r(E());
					const p = await Object(a.f)(i(), e, u, l.d.UserFlair),
						f = p.ok && !(p.body && !1 === p.body.success);
					if (f) {
						const e = {
							subredditId: t,
							template: p.body
						};
						r(v(e));
						const s = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), b.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(x());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), M(e, t));
						r(Object(c.f)(s))
					}
					return f
				}, q = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					const o = s(),
						u = Object(m.U)(o, {
							subredditId: t
						}).name;
					if (r(A()), (await Object(a.b)(i(), e, u)).ok) {
						r(N({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), b.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(C());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), q(e, t));
						r(Object(c.f)(s))
					}
				}, B = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					const o = s(),
						u = Object(m.U)(o, {
							subredditId: t
						}).name,
						p = Object(f.d)(o, {
							subredditId: t
						}).templateIds;
					if (r(R({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(i(), u, l.d.UserFlair, e)).ok) {
						r(w());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(D({
							subredditId: t,
							templateIds: p
						}));
						const s = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), B(e, t));
						r(Object(c.f)(s))
					}
				}, Q = (e, t) => async (r, s, d) => {
					let {
						apiContext: u
					} = d;
					var l;
					const p = s(),
						f = null === (l = p.features) || void 0 === l ? void 0 : l.userFlair;
					if (f && f[e] && f[e].displaySettings.isEnabled && i()(f[e].templateIds)) {
						const s = Object(m.U)(p, {
								subredditId: e
							}).name,
							d = await Object(a.d)(u(), s);
						if (d.ok) r(L(d.body)), r(Object(o.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(c.e)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), b.b.Error);
							r(Object(c.f)(e))
						}
					} else r(Object(o.b)({
						username: t,
						subredditId: e
					}))
				}
		},
		"./src/reddit/components/CrosspostRecommendationsModal/constants.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = "crosspost_recommendations_modal_id",
				s = 3e3
		},
		"./src/reddit/constants/graphql.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Card = "CARD", e.Classic = "CLASSIC", e.Compact = "COMPACT"
				}(n || (n = {}))
		},
		"./src/reddit/customMiddleware/recentSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/chat/customMiddleware/noop.ts"),
				s = r("./src/lib/cache/index.ts"),
				d = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/localStorageAvailable/index.ts"),
				o = r("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(s.c)(d.q.RECENT_SUBREDDITS, "recent_subreddits"),
				a = () => Object(i.a)() && Object(s.b)(c) || [];
			t.a = e => "undefined" == typeof window ? n.a : e => t => {
				const r = e(t);
				switch (t.type) {
					case o.e: {
						const e = a() || [],
							r = {
								...t.payload,
								lastVisited: Date.now()
							},
							{
								id: n
							} = r;
						if (n) {
							const t = e.findIndex(e => e.id === n); - 1 !== t && e.splice(t, 1), e.unshift(r), e.splice(o.c), Object(s.d)(c, e, d.pb)
						}
						break
					}
				}
				return r
			}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return _
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "m", (function() {
				return S
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "k", (function() {
				return A
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "d", (function() {
				return w
			}));
			var n = r("./src/config.ts"),
				s = r("./src/redditGQL/operations/ModApprove.json"),
				d = r("./src/redditGQL/operations/ModRemove.json"),
				i = r("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				o = r("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = r("./src/redditGQL/types.ts"),
				a = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts"),
				m = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				f = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				O = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				j = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const _ = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/save`),
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unsave`),
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/lock`),
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unlock`),
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/approve`),
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				T = (e, t) => Object(l.a)(e, {
					...s,
					variables: {
						input: {
							id: t
						}
					}
				}),
				y = (e, t, r) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/remove`),
					method: a.jb.POST,
					data: {
						id: t,
						spam: r
					}
				}),
				E = (e, t, r) => Object(l.a)(e, {
					...d,
					variables: {
						input: {
							id: t,
							isSpam: r
						}
					}
				}),
				v = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				A = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				N = (e, t, r, s) => {
					let d = Object(m.a)(Object(j.a)(Object(O.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return s && (d = Object(f.a)(d)), Object(u.a)(e, {
						data: r,
						endpoint: d,
						method: a.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				C = {
					[a.G.NONE]: c.i.None,
					[a.G.MODERATOR]: c.i.ModDistinguished,
					[a.G.ADMIN]: c.i.AdminDistinguished,
					[a.G.ALUMNI_ADMIN]: c.i.AlumniDistinguished
				};

			function R(e, t, r) {
				const n = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === a.G.NONE ? c.c.None : c.c.Distinguished,
							distinguishType: C[t]
						}
					}
				}(t, r);
				return Object(l.a)(e, {
					...i,
					variables: n
				})
			}

			function w(e, t, r) {
				return Object(l.a)(e, {
					...o,
					variables: {
						input: {
							commentId: t,
							sticky: r
						}
					}
				})
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return S
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "h", (function() {
				return D
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "m", (function() {
				return U
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				d = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = r("./src/redditGQL/operations/CancelPrediction.json"),
				o = r("./src/redditGQL/operations/ChangePrediction.json"),
				c = r("./src/redditGQL/operations/ChangePredictionVote.json"),
				a = r("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = r("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = r("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				b = r("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				p = r("./src/redditGQL/operations/GetPredictionToken.json"),
				m = r("./src/redditGQL/operations/GetTournaments.json"),
				f = r("./src/redditGQL/operations/GetTournamentsBaseInfo.json"),
				O = r("./src/redditGQL/operations/ResolvePrediction.json"),
				j = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				_ = r("./src/redditGQL/operations/SubredditTournamentLeaderboard.json"),
				g = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				I = r("./src/redditGQL/operations/VotePrediction.json");
			const S = async (e, t) => {
				let {
					postId: r,
					optionId: d,
					coinPackageId: i,
					price: o
				} = t;
				var c;
				const a = await Object(n.a)(e, {
					...I,
					variables: {
						input: {
							postId: r,
							optionId: d,
							coinPackageId: i,
							price: o
						}
					}
				});
				if (!Object(s.c)(a) || a.error || !(null === (c = a.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, h = (e, t) => {
				let {
					postId: r,
					optionId: s
				} = t;
				return Object(n.a)(e, {
					...O,
					variables: {
						input: {
							postId: r,
							optionId: s
						}
					}
				})
			};
			var T;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(T || (T = {}));
			const y = async (e, t) => {
				let {
					subredditId: r,
					period: d = T.AllTime,
					top: i = 100,
					includeCurrentRank: o
				} = t;
				const c = await Object(n.a)(e, {
					...j,
					variables: {
						subredditId: r,
						period: d,
						top: i,
						includeCurrentRank: o
					}
				});
				if (!Object(s.c)(c) || c.error) throw new Error("Failed to fetch subreddit top predictors");
				if (!c.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return c.body.data.subredditInfoById
			}, E = async (e, t) => {
				let {
					subredditId: r,
					tournamentId: d,
					includeCurrentRank: i
				} = t;
				const o = await Object(n.a)(e, {
					..._,
					variables: {
						subredditId: r,
						tournamentId: d,
						includeCurrentRank: i
					}
				});
				if (!Object(s.c)(o) || o.error) throw new Error("Failed to fetch subreddit tournament");
				if (!o.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return o.body.data.subredditInfoById
			}, v = async (e, t) => {
				const r = await Object(n.a)(e, {
					...a,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error || !r.body.data.createPredictionTournament.tournament) throw new Error("Failed to create tournament");
				return r.body.data.createPredictionTournament.tournament
			}, x = async (e, t) => {
				const r = await Object(n.a)(e, {
					...m,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, A = async (e, t) => {
				const r = await Object(n.a)(e, {
					...f,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, N = async (e, t) => {
				const r = await Object(n.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to create prediction");
				const {
					errors: i,
					tournament: o
				} = r.body.data.addPredictionDrafts;
				if (null == i ? void 0 : i.length) throw new Error(i[0].message);
				if (!o) throw new Error("Failed to create prediction");
				return o
			}, C = async (e, t) => {
				const r = await Object(n.a)(e, {
					...g,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to update prediction tournament");
				const {
					tournament: d
				} = r.body.data.updatePredictionTournament;
				if (!d) throw new Error("Failed to update prediction tournament");
				return d
			}, R = (e, t) => Object(n.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), w = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			}), D = (e, t) => Object(n.a)(e, {
				...p,
				variables: t
			}), L = async (e, t) => {
				const r = await Object(n.a)(e, {
					...o,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
				return r.body.data.changePrediction.poll
			}, k = async (e, t) => {
				let {
					postId: r
				} = t;
				var d, o;
				const c = await Object(n.a)(e, {
					...i,
					variables: {
						input: {
							postId: r
						}
					}
				});
				if (!Object(s.c)(c) || !(null === (d = c.body.data.cancelPrediction) || void 0 === d ? void 0 : d.ok) || !(null === (o = c.body.data.cancelPrediction) || void 0 === o ? void 0 : o.poll)) throw new Error("Unable to cancel prediction");
				return c.body.data.cancelPrediction.poll
			}, P = async (e, t) => {
				var r, d;
				const i = await Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i) || !(null === (r = i.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (d = i.body.data.changePredictionVote) || void 0 === d ? void 0 : d.poll)) throw new Error("Unable to change prediction.");
				return i.body.data.changePredictionVote.poll
			}, U = async (e, t) => {
				const r = await Object(n.a)(e, {
					...b,
					variables: t
				});
				return !!Object(s.c)(r) && r.body.data.identity.isPredictionCreationAllowed
			}
		},
		"./src/reddit/endpoints/gold/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "i", (function() {
				return S
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				d = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				i = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
				o = r("./src/redditGQL/operations/ReallocatePowerups.json"),
				c = r("./src/redditGQL/operations/RedditorPowerups.json"),
				a = r("./src/redditGQL/operations/SubredditPowerups.json"),
				u = r("./src/redditGQL/operations/SubredditPowerupsFull.json"),
				l = r("./src/redditGQL/operations/UpdatePowerupsSettings.json"),
				b = r("./src/redditGQL/operations/UserPowerups.json");
			const p = e => Object(n.a)(e, b, {
					traceRequestName: "user_powerups"
				}),
				m = (e, t) => Object(n.a)(e, {
					variables: {
						id: t
					},
					...c
				}, {
					traceRequestName: "redditor_powerups"
				}),
				f = (e, t, r) => Object(n.a)(e, {
					...a,
					variables: {
						subredditId: t,
						includeIdentity: r
					}
				}, {
					traceRequestName: "subreddit_powerups"
				}),
				O = (e, t, r) => Object(n.a)(e, {
					...u,
					variables: {
						subredditId: t,
						includeIdentity: r
					}
				}, {
					traceRequestName: "subreddit_powerups_full"
				}),
				j = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
				}),
				_ = (e, t) => Object(n.a)(e, {
					...i,
					variables: t
				}),
				g = (e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}),
				I = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}),
				S = async (e, t, r) => {
					const s = {
						input: {
							subredditId: t,
							powerupsSettings: {
								benefitSettings: r
							}
						}
					};
					return Object(n.a)(e, {
						...l,
						variables: s
					})
				}
		},
		"./src/reddit/endpoints/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				d = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const i = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				o = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				})
		},
		"./src/reddit/endpoints/goodContent/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/lib/loadWithRetries/index.ts");
			! function(e) {
				e.PopularCommunities = "Popular Communities", e.Gaming = "Gaming", e.Sports = "Sports", e.TV = "TV", e.Travel = "Travel", e.HealthAndFitness = "Health & Fitness", e.Fashion = "Fashion"
			}(n || (n = {}));
			const i = {
					[n.PopularCommunities]: () => s.fbt._("Popular Communities", null, {
						hk: "2K4vGY"
					}),
					[n.Gaming]: () => s.fbt._("Gaming", null, {
						hk: "16rFc7"
					}),
					[n.Sports]: () => s.fbt._("Sports", null, {
						hk: "1cmqIR"
					}),
					[n.TV]: () => s.fbt._("TV", null, {
						hk: "2rVWoK"
					}),
					[n.Travel]: () => s.fbt._("Travel", null, {
						hk: "35HRB5"
					}),
					[n.HealthAndFitness]: () => s.fbt._("Health & Fitness", null, {
						hk: "2vstHj"
					}),
					[n.Fashion]: () => s.fbt._("Fashion", null, {
						hk: "3mkHju"
					})
				},
				o = e => {
					const t = i[e];
					return t ? t() : e
				},
				c = async () => (await Object(d.a)(() => r.e("FrontpageLinks").then(r.t.bind(null, "./src/reddit/endpoints/goodContent/frontpageLinks.json", 3)))).default
		},
		"./src/reddit/endpoints/governance/posts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function d(e, t, r) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${n.a.metaUrl}/polls/${t}?postIds=${r.join(",")}`
				})
			}
		},
		"./src/reddit/endpoints/governance/requester.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/makeApiRequest/index.ts");

			function s(e, t) {
				return Object(n.a)(e, {
					type: "json",
					...t
				}).then(e => {
					if (e.ok) return {
						body: e.body,
						ok: !0,
						status: e.status
					};
					return {
						error: e.error && e.error.fields && e.error.fields[0] ? e.error.fields[0].msg : {
							...e.body,
							code: e.status
						},
						ok: !1,
						status: e.status
					}
				})
			}
		},
		"./src/reddit/endpoints/messages/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/redditGQL/operations/ReportMessage.json"),
				s = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(d.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/compose`),
					method: s.jb.POST,
					data: t
				}),
				l = (e, t) => Object(i.a)(e, {
					...n,
					variables: t
				})
		},
		"./src/reddit/endpoints/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/redditGQL/operations/ModQueueItems.json");
			const b = (e, t, r) => Object(d.a)(e, {
					endpoint: Object(u.a)(Object(a.a)(`${n.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: s.jb.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				p = (e, t, r) => Object(d.a)(Object(o.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: s.jb.POST,
					type: "json",
					data: r
				}),
				m = (e, t) => Object(i.a)(e, {
					...l,
					variables: t
				})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(s.a)(Object(d.a)(e, [i.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.jb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/page/subredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "b", (function() {
				return T
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/ads/session-signals.ts"),
				d = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/isAdHocMultireddit/index.ts"),
				o = r("./src/lib/isFakeSubreddit/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/lib/performanceTimings/index.tsx"),
				l = r("./src/reddit/constants/graphql.ts"),
				b = r("./src/reddit/constants/page.ts"),
				p = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				O = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				j = r("./src/reddit/models/Subreddit/index.ts"),
				_ = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				S = r("./src/redditGQL/operations/SubredditPage.json");
			const h = (e, t, r, n) => {
					var d, c, a, u;
					const {
						after: p,
						geo_filter: f,
						isMobile: O,
						layout: j,
						limit: S,
						recentPostIds: h,
						sort: T,
						t: y
					} = r, E = Object(I.Z)(e), v = Object(_.q)(e), x = Object(i.a)(t), A = Object(o.a)(t), N = Object(g.T)(e, {
						subredditId: Object(g.F)(e, t)
					}).length > 0, C = (null === (d = e.user.account) || void 0 === d ? void 0 : d.username) || (null === (c = e.user.account) || void 0 === c ? void 0 : c.displayText), R = Object(I.o)(e), w = Object(I.nb)(e), {
						numberOfAdsSeen: D,
						numberOfPostsSeen: L
					} = Object(s.a)(), k = {
						name: t,
						includeIdentity: E && !e.user.account,
						adContext: {
							layout: j ? j.toUpperCase() : l.a.Card,
							reddaid: e.user.reddaid,
							clientSignalSessionData: {
								adsSeenCount: D,
								totalPostsSeenCount: L
							}
						},
						isFake: A,
						includeAppliedFlair: !A && E && !!C && n,
						includePowerups: n && !A,
						includeQuestions: n && E && !A,
						includeRecents: A && h && h.length > 0 || !1,
						includeRedditorKarma: n && E && !(null === (u = null === (a = e.user.account) || void 0 === a ? void 0 : a.karma) || void 0 === u ? void 0 : u.total),
						includeRules: n && !A && !N,
						includeSubredditLinks: n && !A && !E,
						includeTopicLinks: n && !A && !E,
						includeTrending: A,
						isAdHocMulti: x,
						isAll: t === b.d.All,
						isLoggedOutGatedOptedin: R,
						isLoggedOutQuarantineOptedin: w,
						isPopular: t === b.d.Popular,
						recentPostIds: h || [],
						subredditNames: x ? t.split("+") : [],
						username: E && C && n ? C : ""
					};
					return T && (k.sort = T.toUpperCase()), y && (k.range = y.toUpperCase()), O ? k.pageSize = Object(m.a)(j) : S && (k.pageSize = S), v && v.ad && (k.forceAds = {
						ad: v.ad
					}), (v && v.geo_filter || f) && (k.region = v && v.geo_filter || f), p && (k.after = btoa(p)), k
				},
				T = async (e, t, r) => {
					const n = Date.now(),
						s = await ((e, t) => Object(a.a)(e, {
							...S,
							variables: t
						}))(e, t),
						i = Date.now();
					if (!s.ok || !s.body) return s;
					const o = s.body,
						c = Date.now(),
						l = Object(f.a)(o.data),
						b = Date.now(),
						p = [{
							duration: i - n,
							logKeyType: u.a.gqlFetchTiming
						}, {
							duration: b - c,
							logKeyType: u.a.gqlNormalizationTiming
						}];
					return Object(u.h)({
						name: d.r.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...s,
						ok: !!o.data.subredditInfoByName && !Object(j.j)(o.data.subredditInfoByName),
						status: y(o.data),
						body: l
					}
				}, y = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(j.j)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === j.c.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === j.c.GoldOnly || e.subredditInfoByName.forbiddenReason === j.c.Private || e.subredditInfoByName.forbiddenReason === j.c.Quarantined || e.subredditInfoByName.forbiddenReason === j.c.Gated) return 403
					}
					return 200
				}, E = e => {
					let {
						recentPostIds: t,
						...r
					} = e;
					return t && t.length ? {
						...r,
						recentPostIds: t.join(",")
					} : r
				};
			t.a = (e, t, r) => Object(c.a)(e, {
				endpoint: Object(p.a)(Object(O.a)(`${n.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: d.jb.GET,
				data: r && E(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/models/PostDraft/index.ts");
			const d = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				i = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				o = e => {
					switch (e.kind) {
						case s.b.Link:
							return "link";
						case s.b.Markdown:
							return "markdown";
						case s.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				c = e => {
					switch (e) {
						case "link":
							return s.b.Link;
						case "markdown":
							return s.b.Markdown;
						case "richtext":
							return s.b.RichText;
						default:
							return "self"
					}
				},
				a = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case s.b.Link:
						case s.b.Markdown:
							return e.body;
						case s.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(n.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				b = e => ({
					id: e.draftId || void 0,
					...i(e),
					kind: o(e),
					title: a(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
		},
		"./src/reddit/endpoints/publicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "a", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/omit.js"),
				d = r.n(s),
				i = r("./src/config.ts"),
				o = r("./src/lib/addQueryParams/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/constants/headers.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/lib/makeRequest/index.ts"),
				b = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				p = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				m = r("./src/reddit/featureFlags/useProductionStreamingApi.ts"),
				f = r("./src/reddit/helpers/comment/index.ts"),
				O = r("./src/reddit/helpers/getRichTextContent/index.ts"),
				j = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = r("./src/reddit/models/PostCreationForm/index.ts"),
				g = r("./src/reddit/models/Vote/index.ts"),
				I = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function S() {
				return Object(m.b)() ? "https://strapi.reddit.com" : i.a.streamingApiUrl
			}
			const h = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${S()}${r}`,
					method: c.jb.GET,
					headers: d()(e.headers(), [a.d, a.c, a.a]),
					timeoutMs: void 0
				}).then(D)
			}, T = (e, t) => {
				let {
					subredditId: r,
					options: n
				} = t;
				return Object(u.a)(e, {
					...I,
					variables: {
						feedContext: {
							subredditId: r
						},
						first: null == n ? void 0 : n.pageSize,
						after: null == n ? void 0 : n.cursor
					}
				})
			}, y = async (e, t) => Object(l.b)({
				endpoint: `${S()}/videos/${t}`,
				method: c.jb.GET,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(D), E = async (e, t, r) => {
				let n;
				n = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const s = Object(o.a)(n, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${S()}${s}`,
					method: c.jb.GET,
					headers: d()(e.headers(), [a.d, a.c, a.a])
				}).then(D)
			}, v = async e => Object(l.b)({
				endpoint: `${S()}/recommended_viewer_subreddits`,
				method: c.jb.GET,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(D), x = async (e, t, r) => Object(l.b)({
				endpoint: `${S()}/videos/${t}/vote/${L(r)}`,
				method: c.jb.POST,
				headers: d()(e.headers, [a.d, a.c, a.a])
			}).then(D), A = async (e, t) => Object(l.b)({
				endpoint: `${S()}/videos/${t}/heartbeat`,
				method: c.jb.POST,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(D), N = async (e, t, r, n) => {
				const s = w(r);
				return s ? C(e, t, s).then(e => Object(l.c)(e) && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(j.a)(e.body.data.r2_comment),
							media: R(r)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, C = async (e, t, r) => Object(l.b)({
				endpoint: `${S()}/broadcasts/${t}/comment_v2`,
				method: c.jb.POST,
				headers: d()(e.headers, [a.d, a.c, a.a]),
				data: {
					text: r
				},
				type: "json"
			}).then(D), R = e => ({
				type: "rtjson",
				richtextContent: Object(f.d)(e),
				rteMode: _.i.RICH_TEXT
			}), w = e => e.rteState ? p.a.getRawText(e.rteState) : e.rtJson ? Object(O.c)(e.rtJson) : void 0, D = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? c.I.NOT_FOUND_ERROR : c.I.SERVER_ERROR
					};
					return 429 === e.status && (t.fields = [{
						field: "",
						msg: n.fbt._("Try again later", null, {
							hk: "3BBLIU"
						})
					}]), {
						...e,
						error: t
					}
				}
			}, L = e => e === g.a.upvoted ? "up" : e === g.a.downvoted ? "down" : "unset", k = async (e, t, r) => Object(l.b)({
				endpoint: `${S()}/broadcasts/${t}`,
				method: c.jb.PUT,
				headers: d()(e.headers, [a.d, a.c, a.a]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(D), P = async (e, t) => Object(l.b)({
				endpoint: `${S()}/broadcasts/${t}/auto_mute_status`,
				method: c.jb.GET,
				headers: d()(e.headers, [a.d, a.c, a.a])
			}).then(D)
		},
		"./src/reddit/endpoints/subreddit/about.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/SubredditAbout.json");
			t.a = (e, t, r) => Object(n.a)(e, {
				...s,
				variables: {
					subredditName: t,
					includeSubreddit: r
				}
			})
		},
		"./src/reddit/endpoints/subreddit/notificationSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/redditGQL/operations/FetchSubredditsNotificationSettings.json"),
				s = r("./src/redditGQL/operations/UpdateSubredditNotificationSettings.json"),
				d = r("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(d.a)(e, {
					...n,
					variables: {
						subredditIds: [t]
					}
				}),
				o = (e, t, r) => Object(d.a)(e, {
					...s,
					variables: {
						input: {
							...r,
							subredditId: t
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/rules.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return T
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/camelCase.js"),
				s = r.n(n),
				d = r("./node_modules/lodash/mapKeys.js"),
				i = r.n(d),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/redditGQL/operations/SubredditRules.json"),
				b = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				m = r("./src/reddit/models/Rule/index.ts");
			const f = e => {
					let {
						rules: t
					} = e;
					return {
						rules: t.map(e => ({
							...i()(e, (e, t) => s()(t)),
							kind: "link" === e.kind ? "post" : e.kind
						}))
					}
				},
				O = (e, t) => Object(a.a)(e, {
					...l,
					variables: {
						subredditName: t
					}
				}).then(e => {
					var t, r, n;
					return e.ok && e.body && (e => Object.keys(e).length > 0)(e.body) && (null === (n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit) || void 0 === n ? void 0 : n.rules) ? e.body = Object(p.a)(e.body.data.subreddit.rules) : e.body = {
						rules: []
					}, e
				}),
				j = (e, t) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.jb.GET
				}).then(e => (e.ok && e.body.rules && (e.body = f(e.body)), e)),
				_ = e => e.ok ? (e.body = Object(m.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				g = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: o.jb.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === m.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => _(e)), I = async (e, t, r, n) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: o.jb.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === m.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						old_short_name: n,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => _(e)), S = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: o.jb.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => _(e)), h = e => e.map(e => encodeURIComponent(e)).join(), T = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.jb.POST,
					data: {
						r: t,
						new_rule_order: h(r),
						api_type: "json",
						raw_json: 1
					}
				}).then(e => _(e))
		},
		"./src/reddit/helpers/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			}));
			var n = r("./node_modules/uuid/v4.js"),
				s = r.n(n),
				d = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				i = r("./src/reddit/constants/things.ts"),
				o = r("./src/reddit/models/Vote/index.ts");
			const c = e => e.rteState ? d.a.toRichTextJSON(e.rteState) : e.rtJson || e.text,
				a = e => {
					let t = [];
					return e.rteState ? t = d.a.toRichTextJSON(e.rteState).document : e.rtJson && (t = e.rtJson.document), {
						document: t
					}
				},
				u = e => JSON.stringify(a(e));

			function l() {
				return `${i.a}_${s()()}`
			}

			function b(e) {
				let {
					temporalId: t,
					draft: r,
					post: n,
					author: s,
					subredditId: d,
					parentId: i
				} = e;
				return {
					id: t,
					postId: n.postId,
					subredditId: d,
					author: s.displayText || "",
					authorId: s.id,
					collapsed: !1,
					collapsedBecauseCrowdControl: null,
					created: Math.floor(Date.now() / 1e3),
					distinguishType: null,
					ignoreReports: !1,
					isAdmin: !1,
					isApproved: !1,
					isDeleted: !1,
					isGildable: !1,
					isLocked: !1,
					isMod: !1,
					isOp: !1,
					isRemoved: !1,
					isScoreHidden: !1,
					isSpam: !1,
					isStickied: !1,
					isSaved: !1,
					isSystem: !1,
					media: {
						type: "rtjson",
						rteMode: r.commentMode,
						richtextContent: a(r)
					},
					parentId: i,
					permalink: "",
					postAuthor: n.author,
					postTitle: null,
					score: 1,
					sendReplies: !1,
					modReports: [],
					numReports: 0,
					voteState: o.a.notVoted,
					userReports: []
				}
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/constants/comments.ts"),
				s = r("./src/reddit/selectors/comments.ts"),
				d = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case n.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case n.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case n.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === n.a.MoreComments ? t[e.id].numComments : 1,
				u = (e, t, r, n) => {
					let d = Object(s.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; d && d.depth > r && d.prev && (i = d.prev, (d = Object(s.n)(n, {
							commentLink: i,
							commentsPageKey: e
						})) && !(d.depth <= r)););
					return i.id
				},
				l = (e, t, r) => {
					const {
						commentLists: n,
						comments: s
					} = e, {
						head: o
					} = n[t];
					if (o) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const r = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: d.P,
								expEventOverride: t
							});
							return !!(Object(d.Zf)(r) ? void 0 : r)
						})(r)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/counters/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/sample/index.ts"),
				d = r("./src/telemetry/helpers/sendCounter.ts");
			const i = (e, t) => {
					Object(d.b)(n.m.Redesign, {
						type: d.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				o = (e, t) => {
					Object(s.b)(10) && Object(d.b)(n.m.Redesign, {
						type: d.a.ReonboardingFlow,
						data: {
							type: e,
							variant: t
						}
					})
				}
		},
		"./src/reddit/helpers/filterListingResponse/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/findLastIndex.js"),
				s = r.n(n),
				d = r("./src/reddit/models/WhitelistStatus/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/index.ts");
			const c = (e, t) => {
				let {
					subreddits: r,
					profiles: n
				} = t;
				const s = r[e.belongsTo.id] || n[e.belongsTo.id];
				return !e.isNSFW && s && d.a.has(s.wls || d.b.NO_ADS)
			};
			t.a = (e, t, r) => {
				let {
					postIds: n,
					posts: d,
					subreddits: a,
					profiles: u,
					...l
				} = r;
				const b = e.listings.postOrder.ids[t],
					p = (n || []).filter(e => !b || !b.includes(e)),
					m = b.map(t => e.posts.models[t]),
					f = m.length - (s()(m, e => e.isSponsored) + 1),
					O = p.map(e => d[e]);
				let j;
				const _ = [],
					g = {
						subreddits: a,
						profiles: u
					};
				for (let s = 0; s < O.length; s++) {
					const r = O[s];
					let n = !1;
					if (r.isSponsored) {
						const e = s > 0 && O[s - 1],
							t = s < O.length - 1 && O[s + 1];
						e && c(e, g) && t && c(t, g) && (n = !0)
					}
					r.isSponsored && n && (null == j && f + s >= 3 || s - j >= 3) ? (j = s, _.push(r.id)) : r.isSponsored ? r.isSponsored && Object(o.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...i.n(e),
						listing: i.y(e, t)
					}) : _.push(r.id)
				}
				return {
					...l,
					subreddits: a,
					profiles: u,
					posts: d,
					postIds: _
				}
			}
		},
		"./src/reddit/helpers/getPostLimitForMobile/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/constants/postLayout.ts");

			function s(e) {
				return e ? n.c[e] : n.f
			}
		},
		"./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts": function(e, t, r) {
			"use strict";
			const n = e => ({
				id: e.id,
				name: e.name,
				topic: e.title,
				children: e.isRoot ? [] : null
			});
			t.a = e => (e => {
				let {
					edges: t,
					schemeName: r
				} = e;
				return {
					topics: t.reduce((e, t) => {
						let {
							node: r
						} = t;
						const s = r.topic.parents.map(e => e.nodeId),
							d = s.length <= 0,
							i = r.id,
							o = {
								id: i,
								isRoot: d,
								parents: s,
								title: r.topic.title,
								name: r.topic.name
							};
						return d ? (e.topics.push(n(o)), e.dict[i] = e.topics.length - 1) : s.forEach(t => {
							var r;
							const s = e.dict[t];
							if ("number" == typeof s) {
								null === (r = e.topics[s].children) || void 0 === r || r.push(n(o))
							}
						}), e
					}, {
						topics: [],
						dict: {}
					}).topics,
					schemeName: r
				}
			})(e)
		},
		"./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts": function(e, t, r) {
			"use strict";
			const n = e => ({
				communityIcon: e.styles && e.styles.icon || void 0,
				iconUrl: e.styles && e.styles.legacyIcon && e.styles.legacyIcon.url || void 0,
				id: e.id,
				isNSFW: e.isNSFW || !1,
				isSubscribed: e.isSubscribed,
				name: e.name,
				primaryColor: e.styles && e.styles.primaryColor || void 0,
				subscribers: e.subscribers,
				type: "subreddit"
			});
			t.a = e => {
				var t;
				return {
					subreddits: (null === (t = e.data.subredditInfoById) || void 0 === t ? void 0 : t.linkedSubreddits) ? e.data.subredditInfoById.linkedSubreddits.map(n) : []
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return A
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/assertNever.ts"),
				s = r("./src/lib/env/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/gold/powerups.ts"),
				o = r("./src/reddit/models/Post/index.ts"),
				c = r("./src/reddit/models/RichTextJson/index.ts"),
				a = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizeSubredditWidgetsFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				v = r("./src/reddit/models/Onboarding/index.ts"),
				x = r("./src/reddit/helpers/graphql/helpers.ts");
			const A = (e, t, r) => {
				const i = {
						account: null,
						appliedFlair: {},
						authorFlair: {},
						interestTopicRecommendations: void 0,
						postIds: [],
						postInstances: {},
						posts: {},
						postFlair: {},
						powerups: {},
						predictionTournaments: null,
						preferences: null,
						profiles: {},
						questions: {},
						recentPostIds: [],
						structuredStyles: {},
						subredditAboutInfo: {},
						subredditLinks: {},
						subredditPermissions: void 0,
						subredditRules: [],
						subreddits: {},
						subredditTopicLinks: void 0,
						token: "",
						trendingSubredditIds: []
					},
					c = e => {
						if (Object(o.j)(e) || Object(o.i)(e)) return null;
						if (i.posts[e.id]) return e.id;
						const t = Object(m.f)(e);
						i.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === o.a.Post && r.postInfo && c(r.postInfo);
						let a = t.id;
						if (e.authorFlair && (i.authorFlair[t.belongsTo.id] || (i.authorFlair[t.belongsTo.id] = {}), i.authorFlair[t.belongsTo.id][t.author] = Object(u.a)(e.authorFlair)[0]), Object(o.l)(e)) i.profiles[e.profile.id] || (i.profiles[e.profile.id] = Object(O.a)(e.profile));
						else if (Object(o.n)(e)) i.subreddits[e.subreddit.id] || (i.subreddits[e.subreddit.id] = Object(_.a)(e.subreddit)), i.postFlair[e.subreddit.id] || (i.postFlair[e.subreddit.id] = Object(b.a)(e.subreddit));
						else if (Object(o.h)(e)) {
							const r = Object(m.b)(e);
							if (!r) return null;
							a = r, i.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, i.posts[t.id] || (i.posts[t.id] = {
								...t,
								events: []
							}), i.postInstances[e.id] || (i.postInstances[e.id] = []), i.postInstances[e.id].push(r)
						} else try {
							Object(n.a)(e)
						} catch (l) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(s.b)() || console.warn(t), d.c.captureMessage(t)
						}
						return a && i.postIds.push(a), a
					};
				if (e.forEach(e => c(e)), t) {
					i.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) i.subreddits[e.id] = Object(_.a)(e)
				}
				const a = i.postIds.length - 1;
				return i.token = a >= 0 ? i.postIds[a] : "", r && (i.account = Object(E.a)(r), i.preferences = r.preferences && Object(f.a)(r.preferences, r.interactions) || null), i
			};
			t.a = e => {
				let {
					adhocMultiredditByNames: t,
					all: r,
					identity: n,
					popular: b,
					recentPosts: m,
					subredditInfoByName: f,
					trendingSubreddits: O
				} = e;
				var _, C;
				if (!f) return {
					reason: a.e.NotFoundSubreddit,
					data: {
						account: n && Object(E.a)(n) || null
					}
				};
				if (Object(a.j)(f)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: r,
						isEmailRequiredForQuarantineOptin: s,
						interstitialWarningMessage: d
					} = f;
					return {
						reason: N(f.forbiddenReason),
						data: {
							account: n && Object(E.a)(n) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: s,
							...r ? {
								quarantineMessage: r.markdown,
								quarantineMessageRTJson: Object(x.h)(r.richtext, c.i)
							} : {},
							interstitialWarningMessage: null == d ? void 0 : d.markdown,
							interstitialWarningMessageRTJson: Object(x.h)(null == d ? void 0 : d.richtext, c.i)
						}
					}
				}
				const R = {};
				let w;
				const D = f || b || r || t,
					[L, k] = D.elements.edges.reduce((e, t, r) => {
						var n, s, d, i;
						const [c, a] = e, u = t.node;
						if (Object(o.k)(u)) c.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (i = null === (d = u.flair) || void 0 === d ? void 0 : d.template) || void 0 === i ? void 0 : i.postStyle) && (R[u.flair.template.id] = Object(p.a)(u.flair.template.postStyle));
						else if (Object(v.g)(u)) {
							const e = Object(l.a)(u.interestTopicRecommendations.recommendationTopics);
							e.topics.length && (w = {
								interests: e,
								index: r
							})
						} else a.push(u);
						return [c, a]
					}, [
						[],
						[]
					]);
				if (k.length) {
					const e = `Received unhandled ${k.length} elements when processing subreddit data: "${k[0].__typename}"`;
					Object(s.b)() || console.warn(e), d.c.captureMessage(e)
				}
				m && L.push(...m);
				const P = D.elements.dist,
					U = A(L, O, n);
				if (f.styles && (U.structuredStyles = {
						data: {
							style: Object(h.a)(f.styles)
						}
					}), U.structuredStyles = {
						data: {
							...f.styles ? {
								style: Object(h.a)(f.styles)
							} : {},
							content: {
								widgets: Object(y.a)(f)
							},
							flairTemplate: R
						}
					}, U.subredditAboutInfo = Object(j.a)(f), f.modPermissions && (U.subredditPermissions = Object.keys(f.modPermissions).length > 0 ? Object(I.a)(f.modPermissions) : void 0), f.rules && (U.subredditRules = Object(S.a)(f.rules).rules), ((null == f ? void 0 : f.answerableQuestions) || f.contentRatingSurvey || f.communityProgressModule) && (U.questions = {
						answerableQuestions: null == f ? void 0 : f.answerableQuestions,
						contentRatingSurvey: null == f ? void 0 : f.contentRatingSurvey,
						communityProgressModule: null == f ? void 0 : f.communityProgressModule
					}), !Object(a.j)(f)) {
					const e = {
						powerups: f.powerups,
						powerupsSettings: f.powerupsSettings,
						supporters: f.supporters,
						productOffers: f.productOffers,
						subredditAchievementFlairs: f.subredditAchievementFlairs
					};
					U.powerups = Object(i.c)(e, n)
				}
				return U.subredditLinks = Object(g.a)({
					data: {
						subredditInfoById: f
					}
				}), U.subredditTopicLinks = Object(T.a)({
					data: {
						subredditInfoById: f
					}
				}), U.appliedFlair = {
					flair: (null === (_ = f.flairedRedditorByName) || void 0 === _ ? void 0 : _.flair) ? Object(u.a)(null === (C = f.flairedRedditorByName) || void 0 === C ? void 0 : C.flair)[0] : void 0,
					displaySettings: f.authorFlairSettings
				}, w && (U.interestTopicRecommendations = w), U.predictionTournaments = f.predictionTournaments || [], {
					...U,
					...null !== P && {
						dist: P
					}
				}
			};
			const N = e => {
				switch (e) {
					case a.c.Banned:
						return a.e.BannedSubreddit;
					case a.c.GoldOnly:
						return a.e.GoldSubreddit;
					case a.c.Private:
						return a.e.PrivateSubreddit;
					case a.c.Quarantined:
						return a.e.QuarantinedSubreddit;
					case a.c.Gated:
						return a.e.GatedSubreddit;
					case a.c.Unknown:
						return a.e.ForbiddenSubreddit
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				var t, r;
				return (null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoById) || void 0 === r ? void 0 : r.topicLinks) || void 0
			}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, r) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/locales.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				d = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				o = r("./node_modules/reselect/es/index.js");
			const c = e => Object.entries(e).map(e => {
					let [t, r] = e;
					return {
						value: t,
						displayName: r.displayName
					}
				}),
				a = Object.freeze({
					[n.GERMAN_LOCALE]: Object.freeze({
						bcp47: n.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.GERMAN_LOCALE),
						rtl: !1
					}),
					[n.DEFAULT_LOCALE]: Object.freeze({
						bcp47: n.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.DEFAULT_LOCALE),
						rtl: !1
					}),
					[n.SPANISH_LOCALE]: Object.freeze({
						bcp47: n.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.SPANISH_LOCALE),
						rtl: !1
					}),
					[n.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: n.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(s.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[n.ITALIAN_LOCALE]: Object.freeze({
						bcp47: n.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.ITALIAN_LOCALE),
						rtl: !1
					}),
					[n.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: n.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[n.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: n.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				u = Object.freeze({
					[n.BENGALI_BANGLADESHI_LOCALE]: Object.freeze({
						bcp47: n.BENGALI_BANGLADESHI_LOCALE,
						displayName: "বাংলা",
						englishName: "Bengali",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.BENGALI_BANGLADESHI_LOCALE),
						rtl: !1
					}),
					[n.HINDI_LOCALE]: Object.freeze({
						bcp47: n.HINDI_LOCALE,
						displayName: "हिन्दी",
						englishName: "Hindi",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.HINDI_LOCALE),
						rtl: !1
					})
				}),
				l = Object.freeze({
					[n.PSEUDO_LOCALE]: Object.freeze({
						bcp47: n.PSEUDO_LOCALE,
						displayName: "Pseudo",
						englishName: "Pseudo",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PSEUDO_LOCALE),
						rtl: !1
					}),
					[n.PSEUDO_AUTO]: Object.freeze({
						bcp47: n.PSEUDO_AUTO,
						displayName: "Pseudo Auto",
						englishName: "Pseudo Auto",
						fbtLocale: Object(s.isoLocaleToFbtLocale)(n.PSEUDO_AUTO),
						rtl: !1
					})
				}),
				b = Object(o.a)(i.N, d.b, (e, t) => e || t ? {
					...a,
					...u,
					...l
				} : a);
			const p = async (e, t) => {
				0
			}
		},
		"./src/reddit/helpers/onboarding/reonboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/customMiddleware/recentSubreddits.ts"),
				d = r("./src/reddit/helpers/featureThrottling/store/index.ts"),
				i = r("./src/reddit/helpers/onboarding/postsConsumedWeekly.ts"),
				o = r("./src/reddit/models/Onboarding/index.ts");
			const c = () => {
					const e = Date.now() - n.rc,
						t = Object(s.b)().filter(t => t.lastVisited >= e),
						r = Object(i.a)();
					return t.length < 3 || r < 50
				},
				a = () => !(() => !d.a.isReady || d.a.isFeatureThrottled(o.e.FeatureGate) || d.a.isFeatureThrottled(o.e.Dismissed))() && c(),
				u = () => !(() => !d.a.isReady || d.a.throttlingData[o.e.FeatureGate] || d.a.isFeatureThrottled(o.e.Triggered) || d.a.isFeatureThrottled(o.e.Dismissed))() && c(),
				l = () => {
					d.a.isFeatureThrottled(o.e.Triggered) || (d.a.throttleFeature(o.e.FeatureGate), d.a.throttleFeature(o.e.Triggered))
				},
				b = () => {
					d.a.throttleFeature(o.e.Dismissed)
				}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/isComment.ts"),
				d = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = r("./src/reddit/models/Vote/index.ts"),
				o = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
				c = r("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: u(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === n.E,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: a(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(s.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: o(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(d.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(d.b)(e.associated_award)), t
			};
			const a = e => "string" == typeof e ? JSON.parse(e) : e,
				u = e => e.author !== n.E ? null : e.body === n.F ? c.c.User : e.body === n.Lb ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizePostFromR2/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				d = r("./src/reddit/models/Media/index.ts"),
				i = r("./src/reddit/models/PostCreationForm/index.ts"),
				o = r("./src/reddit/models/Vote/index.ts");
			const c = e => {
					const t = [];
					return e.link_flair_richtext && e.link_flair_richtext.length && t.push({
						richtext: e.link_flair_richtext,
						type: s.f.Richtext,
						textColor: e.link_flair_text_color || "dark",
						backgroundColor: e.link_flair_background_color || "",
						templateId: e.link_flair_template_id
					}), e.link_flair_text && t.push({
						text: e.link_flair_text,
						type: s.f.Text,
						textColor: e.link_flair_text_color || "dark",
						backgroundColor: e.link_flair_background_color || "",
						templateId: e.link_flair_template_id
					}), e.spoiler && t.push({
						text: "spoiler",
						type: s.f.Spoiler
					}), e.over_18 && t.push({
						text: "nsfw",
						type: s.f.Nsfw
					}), t
				},
				a = e => e ? e.map(e => ({
					categoryId: e.category_id,
					categoryName: e.category_name
				})) : [],
				u = e => {
					const t = e.preview && e.preview.enabled;
					let r = !1,
						n = null,
						s = {},
						o = {};
					const c = e.over_18 || e.spoiler;
					if (e.preview && (r = !!(o = e.preview.images[0].variants).mp4, s = e.preview.images[0].source, c && (n = o.obfuscated.source.url)), e.is_self) return {
						content: e.selftext_html,
						type: d.o.TEXT,
						markdownContent: e.selftext,
						obfuscated: n,
						rteMode: e.rte_mode || i.i.RICH_TEXT,
						...e.rtjson && {
							richtextContent: e.rtjson,
							type: d.o.RTJSON,
							mediaMetadata: e.media_metadata
						}
					};
					if (e.secure_media && e.secure_media.oembed || e.is_survey_ad) return {
						content: e.secure_media_embed.media_domain_url,
						type: d.o.EMBED,
						width: e.secure_media.oembed.width || 0,
						height: e.secure_media.oembed.height || 0,
						obfuscated: n,
						provider: e.secure_media.oembed.provider_name || ""
					};
					if (e.media && e.media.reddit_video) {
						const t = e.media.reddit_video;
						return {
							hlsUrl: t.hls_url,
							dashUrl: t.dash_url,
							isGif: t.is_gif,
							scrubberThumbSource: t.scrubber_media_url,
							obfuscated: n,
							posterUrl: t.url,
							width: t.width,
							height: t.height,
							type: d.o.VIDEO
						}
					}
					if (e.media && e.media.rpan_video) {
						const t = e.media.rpan_video;
						return {
							hlsUrl: t.hls_url,
							scrubberThumbSource: t.scrubber_media_url,
							type: d.o.LIVEVIDEO
						}
					}
					if (t && r) return {
						content: o.mp4.source.url,
						type: d.o.GIFVIDEO,
						width: o.mp4.source.width,
						height: o.mp4.source.height,
						gifBackgroundImage: s.url,
						gifBackgroundResolutions: e.preview.images[0].resolutions,
						obfuscated: n,
						resolutions: o.mp4.resolutions
					};
					if (t) {
						const t = o.gif ? o.gif.resolutions : e.preview.images[0].resolutions;
						return {
							content: s.url,
							type: d.o.IMAGE,
							width: s.width,
							height: s.height,
							obfuscated: n,
							resolutions: t
						}
					}
					return null
				},
				l = e => {
					const t = {};
					if (e.promoted && e.outbound_link || !e.is_self && !e.is_reddit_media_domain) {
						if (t.displayText = e.domain, t.url = e.url, e.outbound_link) {
							const r = e.outbound_link;
							t.outboundUrl = r.url, t.outboundUrlExpiration = r.expiration, t.outboundUrlCreated = r.created
						}
						return t
					}
					return null
				};
			t.a = e => {
				return {
					allAwardings: e.all_awardings ? Object(n.a)(e.all_awardings) : [],
					awarders: e.awarders,
					author: e.author,
					authorId: e.author_fullname,
					authorIsBlocked: e.author_is_blocked,
					audioRoom: e.audioRoom,
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					belongsTo: {
						type: "user" === e.subreddit_type ? "profile" : "subreddit",
						id: e.subreddit_id || ""
					},
					callToAction: e.call_to_action || null,
					contestMode: e.contest_mode,
					created: 1e3 * e.created,
					crosspostParentId: e.cross_post_parent_id || null,
					crosspostRootId: e.cross_post_root_id || null,
					discussionType: e.discussion_type || null,
					distinguishType: e.distinguish_type || null,
					domain: e.domain,
					domainOverride: e.domain_override || null,
					events: e.events || [],
					flair: c(e),
					hidden: e.hidden,
					id: e.name,
					ignoreReports: e.ignore_reports,
					impressionId: e.impression_id ? String(e.impression_id) : null,
					impressionIdStr: e.impression_id_str,
					isApproved: e.approved,
					isArchived: e.archived,
					isAuthorPremium: e.author_premium,
					isBlank: e.is_blank,
					isCreatedFromAdsUi: e.is_created_from_ads_ui,
					isCrosspostable: e.is_crosspostable,
					isEligibleForQASchema: !1,
					isFollowed: e.is_followed || !1,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isReactAllowed: !1,
					reactedFrom: null,
					attributionInfo: null,
					isMediaOnly: e.media_only,
					isMeta: e.is_meta,
					isNSFW: e.over_18,
					isOriginalContent: e.is_original_content,
					isPinned: e.pinned,
					isRemoved: e.removed,
					isSpam: e.spam,
					isSpoiler: e.spoiler,
					isSponsored: e.promoted,
					isSurveyAd: !!e.is_survey_ad,
					isStickied: e.stickied,
					liveCommentsWebsocket: e.liveCommentsWebsocket || e.websocket_url,
					media: u(e),
					modNote: e.mod_note || null,
					modReports: e.mod_reports,
					numComments: e.num_comments,
					numCrossposts: e.num_crossposts || 0,
					numDuplicates: e.num_duplicates,
					numReports: e.num_reports || 0,
					permalink: `https://www.reddit.com${e.permalink}`,
					postCategories: a(e.post_categories),
					preview: e.preview && e.preview.images && e.preview.images[0] && e.preview.images[0].source ? {
						url: e.preview.images[0].source.url,
						width: e.preview.images[0].source.width,
						height: e.preview.images[0].source.height
					} : void 0,
					previewComments: [],
					previousVisits: e.previous_visits,
					postId: e.name,
					modRemovalReason: e.mod_reason_title,
					modReasonBy: e.mod_reason_by,
					removedBy: e.removed_by,
					removedByCategory: e.removed_by_category,
					saved: e.saved,
					score: e.score,
					topAwardedType: e.top_awarded_type && e.top_awarded_type.toUpperCase(),
					treatmentTags: e.treatment_tags,
					isScoreHidden: !!e.hide_score,
					sendReplies: e.send_replies,
					source: l(e),
					suggestedSort: e.suggested_sort,
					thumbnail: {
						url: e.thumbnail,
						width: e.thumbnail_width,
						height: e.thumbnail_height
					},
					title: e.title,
					userReports: e.user_reports,
					upvoteRatio: e.upvote_ratio,
					viewCount: e.view_count || 0,
					voteState: Object(o.d)(e.likes)
				}
			}
		},
		"./src/reddit/helpers/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n);
			const d = e => s()(e).sort((t, r) => {
					const n = e[t.tag.id].tag.text.toLowerCase(),
						s = e[r.tag.id].tag.text.toLowerCase();
					return n < s ? -1 : n > s ? 1 : 0
				}),
				i = e => !e.id && !!e.action
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const d = e => {
					let {
						state: t,
						commentId: r,
						collapsed: d
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "view",
						noun: d ? "collapsed_comment" : "comment",
						...s.n(t),
						profile: s.R(t),
						post: s.I(t, r),
						media: s.B(t, r),
						subreddit: s.hb(t),
						comment: s.h(t, r)
					})
				},
				i = e => {
					let {
						state: t,
						commentId: r,
						collapsed: d
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "consume",
						noun: d ? "collapsed_comment" : "comment",
						...s.n(t),
						profile: s.R(t),
						post: s.I(t, r),
						media: s.B(t, r),
						subreddit: s.hb(t),
						comment: s.h(t, r)
					})
				},
				o = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.pb(t),
					subreddit: s.hb(t),
					post: s.I(t, e),
					actionInfo: s.d(t),
					app: s.f(t),
					referrer: s.W(t),
					session: s.db(t)
				})
		},
		"./src/reddit/helpers/trackers/communityTopics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
			}));
			var n, s = r("./src/reddit/selectors/tags.ts"),
				d = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/index.ts");
			! function(e) {
				e.communitySettings = "community_settings", e.idCard = "id_card"
			}(n || (n = {}));
			const o = (e, t, r) => {
					const n = Object(s.x)(e, {
						subredditId: t
					});
					return !!n && n.id === r
				},
				c = (e, t) => Object(s.u)(e, {
					itemId: t
				}).reduce((e, t) => {
					let {
						topicTagIds: r,
						topicTagContents: n,
						topicTagTypes: s
					} = e;
					return r.push(t.tag.id), n.push(t.tag.text), s.push(t.tag.type), {
						topicTagIds: r,
						topicTagContents: n,
						topicTagTypes: s
					}
				}, {
					topicTagIds: [],
					topicTagContents: [],
					topicTagTypes: []
				}),
				a = (e, t, r) => {
					if (!r.id) return {
						content: r.displayText
					};
					const n = Object(s.b)(e)[r.id] || Object(s.d)(e, {
						subredditId: t
					})[r.id];
					return n ? {
						id: n.id,
						content: n.text,
						type: n.type,
						isPrimary: o(e, t, n.id)
					} : null
				},
				u = (e, t, r) => {
					if (!r) return null;
					const n = Object(s.b)(e)[r] || Object(s.d)(e, {
						subredditId: t
					})[r];
					return n ? {
						id: n.id,
						content: n.text,
						type: n.type,
						isPrimary: o(e, t, n.id)
					} : null
				},
				l = (e, t, r) => ({
					...d.n(e),
					subreddit: {
						...d.hb(e) || {},
						id: t,
						...c(e, t)
					},
					source: r.context,
					action: "click"
				}),
				b = (e, t, r) => {
					Object(i.a)(((e, t, r) => ({
						...l(e, t.subredditId, r),
						noun: t.isRelevant ? "restore_related_topic" : "remove_related_topic",
						topicTag: u(e, t.subredditId, t.tagId)
					}))(e, t, r))
				},
				p = (e, t, r, n) => {
					Object(i.a)({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "add_related_topic"
					})
				},
				m = (e, t, r, n) => {
					return !Object(s.i)(e, {
						subredditId: t
					}) && r.id ? Object(i.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, n)) : r.id ? Object(i.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, n)) : Object(i.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, n))
				},
				f = (e, t, r, n) => Object(i.a)({
					...l(e, t, n),
					topicTag: a(e, t, r),
					noun: "topic_remove"
				}),
				O = (e, t, r) => Object(i.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				j = (e, t, r) => Object(i.a)({
					...l(e, t, r),
					noun: r.context === n.communitySettings ? "save" : "save_community_topics"
				}),
				_ = (e, t, r, n) => {
					const s = l(e, t, n);
					Object(i.a)({
						...s,
						action: "view",
						noun: "error",
						actionInfo: {
							...s.actionInfo,
							reason: r
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/feed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/index.ts");
			const d = e => t => Object(s.a)({
					...n.n(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "load",
					noun: "serving",
					feed: n.q(t)
				}),
				i = e => t => Object(s.a)({
					...n.n(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "fail",
					noun: "serving",
					feed: n.q(t)
				})
		},
		"./src/reddit/helpers/trackers/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var n, s = r("./src/reddit/constants/tracking.ts"),
				d = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(n || (n = {}));
			const i = e => ({
					subreddit: d.hb(e),
					userSubreddit: d.rb(e)
				}),
				o = e => ({
					source: "subreddit_tooltip",
					noun: n.SubredditInlineTooltip,
					action: s.c.VIEW,
					...i(e)
				}),
				c = e => ({
					source: "id_card",
					noun: n.EditSubredditIcon,
					action: s.c.CLICK,
					...i(e)
				}),
				a = e => ({
					source: "id_card",
					noun: n.EditSubredditDescription,
					action: s.c.CLICK,
					...i(e)
				}),
				u = (e, t) => r => ({
					source: "id_card",
					noun: n.SaveDescription,
					action: s.c.CLICK,
					setting: {
						value: String(e),
						oldValue: String(t)
					},
					...i(r)
				}),
				l = (e, t) => ({
					source: "id_card",
					noun: n.Error,
					action: s.c.VIEW,
					...i(e),
					...d.n(e),
					actionInfo: d.d(e, {
						reason: t
					})
				})
		},
		"./src/reddit/helpers/trackers/modNote.ts": function(e, t, r) {
			"use strict";
			r.d(t, "w", (function() {
				return o
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "x", (function() {
				return _
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "y", (function() {
				return h
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "n", (function() {
				return y
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "u", (function() {
				return v
			})), r.d(t, "t", (function() {
				return x
			})), r.d(t, "v", (function() {
				return A
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "c", (function() {
				return R
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t) => {
					var r, n, s, d, i, o, c, a, u, l, b;
					const {
						modNote: p,
						subredditId: m,
						userId: f,
						postId: O,
						commentId: j,
						subredditSearch: _,
						filteredType: g,
						filteredSubredditId: I
					} = t, S = j || (null === (n = null === (r = p) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), h = O || (null === (d = null === (s = p) || void 0 === s ? void 0 : s.postInfo) || void 0 === d ? void 0 : d.id);
					return {
						modnote: {
							type: null == p ? void 0 : p.itemType,
							content: null === (i = p) || void 0 === i ? void 0 : i.note,
							label: null === (c = null === (o = p) || void 0 === o ? void 0 : o.label) || void 0 === c ? void 0 : c.toLowerCase(),
							operatorId: null === (a = null == p ? void 0 : p.operator) || void 0 === a ? void 0 : a.id,
							subredditSearch: _,
							filteredType: null == g ? void 0 : g.toLowerCase(),
							filteredSubredditId: null == I ? void 0 : I.toLowerCase()
						},
						modAction: {
							targetUserId: f || (null === (u = null == p ? void 0 : p.user) || void 0 === u ? void 0 : u.id),
							action: null === (b = null === (l = p) || void 0 === l ? void 0 : l.actionType) || void 0 === b ? void 0 : b.toLowerCase()
						},
						...S ? {
							comment: {
								id: S,
								postId: h || "none"
							}
						} : null,
						...h ? {
							post: {
								id: h
							}
						} : null,
						subreddit: {
							id: m
						}
					}
				},
				i = "moderator",
				o = e => t => ({
					source: i,
					action: "view",
					noun: "modnote_quickaccess",
					correlationId: Object(n.d)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				c = e => t => {
					const r = {
						source: i,
						action: "close",
						noun: "modnote_quickaccess",
						correlationId: Object(n.c)(n.a.ModNotes),
						...s.n(t),
						...d(0, e)
					};
					return Object(n.b)(n.a.ModNotes), r
				},
				a = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				u = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				l = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				b = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				p = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				m = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				f = e => t => ({
					source: i,
					action: "click",
					noun: "username_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				O = e => t => ({
					source: i,
					action: "click",
					noun: "mod_username_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				j = e => t => ({
					source: i,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				_ = e => t => ({
					source: i,
					action: "view",
					noun: "user_profile_hovercard",
					correlationId: Object(n.d)(n.a.ModNotes, !1),
					...s.n(t),
					...d(0, e)
				}),
				g = e => t => ({
					source: i,
					action: "click",
					noun: "add_note_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				I = e => t => ({
					source: i,
					action: "click",
					noun: "user_mod_log_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				S = e => t => ({
					source: i,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				h = e => t => ({
					source: i,
					action: "view",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				T = e => t => ({
					source: i,
					action: "close",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				y = e => t => ({
					source: i,
					action: "click",
					noun: "type_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				E = e => t => ({
					source: i,
					action: "click",
					noun: "subreddit_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				v = e => t => ({
					source: i,
					action: "select",
					noun: "type_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				x = e => t => ({
					source: i,
					action: "select",
					noun: "subreddit_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				A = e => t => ({
					source: i,
					action: "submit",
					noun: "submit_note_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				N = e => t => ({
					source: i,
					action: "click",
					noun: "delete_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				C = e => t => ({
					source: i,
					action: "click",
					noun: "cancel_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				R = e => t => ({
					source: i,
					action: "click",
					noun: "delete_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return i
			})), r.d(t, "m", (function() {
				return o
			})), r.d(t, "o", (function() {
				return a
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "n", (function() {
				return S
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t, r) => ({
					...s.n(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: s.R(e),
					subreddit: s.hb(e),
					powerups: {
						...s.mb(e),
						freeCount: t,
						paidCount: r
					}
				}),
				i = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_become_hero",
					...d(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				o = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_see_all_heroes",
					...d(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = e => (t, r) => n => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...d(n),
					profile: {
						id: t,
						name: r,
						type: "default"
					}
				}),
				a = c("postlist_supporters_cta"),
				u = c("comm_heroes_modal"),
				l = e => t => ({
					source: "powerups",
					action: "click",
					noun: "join_supporters",
					...d(t),
					actionInfo: s.d(t, {
						reason: e
					})
				}),
				b = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...d(t),
					actionInfo: s.d(t, {
						reason: e
					})
				}),
				p = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...d(t),
					powerups: {
						...s.mb(t),
						benefit: e
					}
				}),
				m = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...d(r, e, t)
				}),
				f = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...d(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				O = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...d(e)
				}),
				j = (e, t) => r => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...d(r),
					powerups: {
						...s.mb(r),
						emojiCount: e
					}
				}),
				_ = (e, t) => r => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...d(r),
					powerups: {
						...s.mb(r),
						emojiCount: e
					}
				}),
				g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return r => ({
						source: t,
						action: "delete",
						noun: "custom_emojis",
						...d(r),
						powerups: {
							...s.mb(r),
							emojiCount: e
						}
					})
				},
				I = (e, t) => r => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? s.ib(r, t) : void 0,
					...d(r),
					correlationId: e
				}),
				S = (e, t, r) => n => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(r)
					},
					subreddit: s.hb(n),
					...s.n(n)
				})
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/models/ExternalAccount/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Twitter = "twitter"
				}(n || (n = {}))
		},
		"./src/reddit/models/HatefulContentFilters/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(n || (n = {}))
		},
		"./src/reddit/models/Option/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			const n = e => !e.id,
				s = e => !!e.id,
				d = (e, t) => n(e) && n(t) ? e.displayText.toLowerCase().trim() === t.displayText.toLowerCase().trim() : !(!s(e) || !s(t)) && e.id === t.id
		},
		"./src/reddit/models/Tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			}));
			const n = 25,
				s = 64;
			var d;
			! function(e) {
				e.EVENT = "EVENT", e.COLLECTION = "COLLECTION", e.CLASSIFICATION = "CLASSIFICATION", e.POST_CLASSIFICATION = "POST_CLASSIFICATION", e.SUBREDDIT_CLASSIFICATION = "SUBREDDIT_CLASSIFICATION", e.COMMENT_CLASSIFICATION = "COMMENT_CLASSIFICATION"
			}(d || (d = {}));
			const i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return {
						id: e.id,
						displayText: e.text,
						selected: t
					}
				},
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return i(e.tag, t)
				};
			var c;
			! function(e) {
				e.TAGGED = "TAGGED", e.NONE = "NONE"
			}(c || (c = {}))
		},
		"./src/reddit/reducers/features/modUserNotes/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/subredditModeration/constants.ts");
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.U:
						case s.T:
							return null;
						case s.S:
							return t.payload;
						default:
							return e
					}
				},
				i = r("./src/reddit/models/SubredditModeration/index.ts");
			const o = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.U: {
							const {
								subredditId: r,
								userId: n,
								filter: s
							} = t.payload, d = Object(i.d)(r, n, s);
							return {
								...e,
								[d]: !0
							}
						}
						case s.T:
						case s.S: {
							const {
								subredditId: r,
								userId: n,
								filter: s
							} = t.payload, d = Object(i.d)(r, n, s);
							return {
								...e,
								[d]: !1
							}
						}
						default:
							return e
					}
				},
				a = Object(n.c)({
					error: d,
					pending: c
				});
			const u = {};
			var l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.T: {
							const {
								subredditId: r,
								userId: n,
								filter: s,
								fetchedToken: d
							} = t.payload, o = Object(i.d)(r, n, s, d);
							return {
								...e,
								[o]: !0
							}
						}
						default:
							return e
					}
				},
				b = r("./src/redditGQL/types.ts");
			const p = {};
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(i.d)(r, n.user.id, b.m.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.H: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, d = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, o = Object(i.d)(n, d, b.m.All);
						return {
							...e,
							[o]: s.id
						}
					}
					case s.G: {
						const {
							subredditId: r,
							lastAuthorModNotes: n
						} = t.payload, s = {};
						return n.forEach(e => {
							var t;
							const n = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id,
								d = Object(i.d)(r, n, b.m.All);
							s[d] = e.id
						}), {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			const f = {};
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.T: {
							const {
								subredditId: e,
								userId: r,
								filter: n,
								loadMoreToken: s
							} = t.payload;
							return {
								[Object(i.d)(e, r, n)]: s
							}
						}
						default:
							return e
					}
				},
				j = r("./node_modules/icepick/icepick.js");
			const _ = {};
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.Q: {
							const {
								newModNote: r
							} = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case s.H: {
							const {
								lastAuthorModNote: r
							} = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case s.G: {
							const {
								lastAuthorModNotes: r
							} = t.payload;
							return Object(j.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.T: {
							const {
								notes: r
							} = t.payload;
							return Object(j.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.R: {
							const {
								noteId: r
							} = t.payload, n = {
								...e
							};
							return delete n[r], n
						}
						default:
							return e
					}
				},
				I = r("./node_modules/lodash/uniq.js"),
				S = r.n(I);
			const h = {};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: n,
							newModNote: s,
							filter: d
						} = t.payload;
						if (d !== b.m.All && d !== b.m.Note) return e;
						const o = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(i.d)(n, o, d),
							a = d === b.m.All ? b.m.Note : b.m.All,
							u = Object(i.d)(n, o, a);
						return {
							...e,
							[c]: e[c] ? [s.id, ...e[c]] : [s.id],
							[u]: e[u] ? [s.id, ...e[u]] : [s.id]
						}
					}
					case s.T: {
						const {
							notes: r,
							subredditId: n,
							userId: s,
							filter: d
						} = t.payload, o = Object(i.d)(n, s, d), c = r.map(e => e.id);
						return e[o] ? {
							...e,
							[o]: S()([...e[o], ...c])
						} : {
							...e,
							[o]: c
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n,
							noteId: s
						} = t.payload, d = Object(i.d)(r, n, b.m.All), o = Object(i.d)(r, n, b.m.Note), c = e[d] ? e[d].filter(e => e !== s) : [], a = e[o] ? e[o].filter(e => e !== s) : [];
						return {
							...e,
							...e[d] ? {
								[d]: c
							} : null,
							...e[o] ? {
								[o]: a
							} : null
						}
					}
					default:
						return e
				}
			};
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const y = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(i.d)(r, n.user.id, b.m.All);
						return {
							...e,
							[s]: {
								...e[s],
								[b.m.All]: (e[s][b.m.All] || 0) + 1,
								[b.m.Note]: (e[s][b.m.Note] || 0) + 1
							}
						}
					}
					case s.lb: {
						const {
							subredditId: r,
							userId: n,
							totalCounts: s
						} = t.payload, d = Object(i.d)(r, n, b.m.All);
						return {
							...e,
							[d]: Object.keys(s).reduce((e, t) => (e[t] = s[t].totalCount, e), {})
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(i.d)(r, n, b.m.All);
						return {
							...e,
							...void 0 !== e[s] ? {
								[s]: {
									...e[s],
									[b.m.All]: (e[s][b.m.All] || 1) - 1,
									[b.m.Note]: (e[s][b.m.Note] || 1) - 1
								}
							} : null
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				api: a,
				fetchedTokens: l,
				lastAuthorModNotes: m,
				loadMore: O,
				models: g,
				order: T,
				totalCount: E
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				d = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = r("./src/reddit/actions/modQueue/constants.ts"),
				o = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				a = r("./src/reddit/actions/pages/postDraft.ts"),
				u = r("./src/reddit/actions/pages/subreddit.ts"),
				l = r("./src/reddit/actions/userFlair/constants.ts");
			const b = {};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r, n, p, m, f;
				switch (t.type) {
					case u.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case a.PAGE_LOADED:
					case o.b:
					case o.f:
					case l.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.m:
					case i.p:
					case i.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: n
						} = r, s = {
							...e
						};
						return Object.keys(n).forEach(e => {
							s[e] || (s[e] = n[e])
						}), s
					}
					case l.r: {
						const {
							subredditId: r,
							applied: n,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...n && {
									applied: n
								},
								displaySettings: s
							}
						}
					}
					case d.h: {
						const {
							subredditId: r,
							applied: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n
							}
						}
					}
					case l.j: {
						const {
							subredditId: r,
							isEnabled: n
						} = t.payload, s = {
							...e[r].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: s
							}
						}
					}
					case l.d: {
						const {
							subredditId: n,
							canAssignOwn: s
						} = t.payload, d = {
							...null === (r = e[n]) || void 0 === r ? void 0 : r.permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: d
							}
						}
					}
					case l.q: {
						const r = t.payload,
							s = e[r.subredditId],
							d = null === (n = e[r.subredditId]) || void 0 === n ? void 0 : n.templates,
							i = null === (p = e[r.subredditId]) || void 0 === p ? void 0 : p.templateIds,
							o = (null === (m = r.template) || void 0 === m ? void 0 : m.id) || (null === (f = r.template) || void 0 === f ? void 0 : f.templateId);
						if (!o) return;
						const c = {
								...d,
								[o]: r.template
							},
							a = [...i];
						return a.includes(o) || a.push(o), {
							...e,
							[r.subredditId]: {
								...s,
								templates: c,
								templateIds: a
							}
						}
					}
					case l.g: {
						const r = t.payload,
							n = e[r.subredditId],
							d = e[r.subredditId].templates,
							i = e[r.subredditId].templateIds,
							o = s()(d, r.templateId),
							c = i.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...o
								},
								templateIds: c
							}
						}
					}
					case l.m:
					case l.l: {
						const r = t.payload,
							n = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...n,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/ads/constants.ts");
			const d = [];
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.u:
							return t.payload;
						case s.v:
						default:
							return e
					}
				},
				o = r("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.d:
					case o.b:
					case o.h:
					case o.f: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case o.a:
					case o.e: {
						const {
							key: r,
							error: n
						} = t.payload;
						return {
							...e,
							[r]: n || {}
						}
					}
					default:
						return e
				}
			};
			const u = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.c:
					case o.g: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					case o.i: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !1
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.d:
						case o.h:
						case o.i: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case o.b:
						case o.a:
						case o.f:
						case o.e: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				m = Object(n.c)({
					error: a,
					fullyLoaded: l,
					pending: p
				}),
				f = r("./src/reddit/actions/comment/constants.ts");
			const O = [];
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.H:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.w:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				_ = r("./src/reddit/actions/comment/websocket/constants.ts"),
				g = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/lodash/uniqBy.js")),
				I = r.n(g);

			function S(e) {
				return I()(e, "id").sort((e, t) => e.created - t.created)
			}

			function h(e, t) {
				return S([...t || [], e])
			}

			function T(e, t) {
				return t && t.length > 0 ? t.filter(t => t.id !== e) : []
			}

			function y(e, t) {
				const r = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
				return {
					id: e.id,
					created: r,
					stickied: e.isStickied,
					authorId: e.authorId
				}
			}

			function E(e, t) {
				return Object.values(e).map(e => y(e, t))
			}
			const v = {};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.f:
						case f.y:
						case o.b: {
							const {
								comments: r,
								key: n
							} = t.payload, s = e[n] ? e[n] : [], d = E(r, s.find(e => e.stickied)), i = S([...s, ...d]);
							return {
								...e,
								[n]: [...i]
							}
						}
						case _.b:
						case _.c:
						case _.d: {
							const {
								comment: r,
								commentsPageKey: n
							} = t.payload;
							return {
								...e,
								[n]: h(y(r), e[n])
							}
						}
						case f.M:
						case f.L: {
							const {
								draftKey: r,
								comment: n,
								commentsPageKey: s
							} = t.payload;
							return {
								...e,
								[s]: T(r, h(y(n), e[s]))
							}
						}
						case f.K: {
							const {
								optimisticComment: r,
								commentsPageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: h(y(r), e[n])
							} : e
						}
						case f.G: {
							const {
								commentId: r,
								commentsPageKey: n
							} = t.payload;
							return {
								...e,
								[n]: T(r, e[n])
							}
						}
						default:
							return e
					}
				},
				A = r("./node_modules/lodash/mapValues.js"),
				N = r.n(A),
				C = r("./src/reddit/helpers/commentList/index.ts"),
				R = r("./src/reddit/models/Comment/index.ts");
			const w = {};

			function D(e) {
				const t = e;
				return N()(t, e => {
					let {
						depth: t,
						next: r,
						prev: n
					} = e;
					return {
						depth: t,
						next: r,
						prev: n
					}
				})
			}
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.y: {
						const {
							comments: r,
							commentLists: n,
							continueThreads: s,
							key: d,
							moreCommentsItem: i,
							moreComments: o
						} = t.payload, c = n[i.postId], a = e[d], u = {}, l = a[i.id];
						if (l && l.prev) {
							const {
								id: e
							} = l.prev;
							u[e] = {
								...a[e],
								next: c.head || l.next
							}
						}
						if (l && l.next) {
							const {
								id: e
							} = l.next;
							u[e] = {
								...a[e],
								prev: c.tail || l.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(C.c)({
									commentLink: c.head,
									commentsDict: r,
									moreCommentsDict: o,
									continueThreadDict: s
								}),
								t = Object(C.c)({
									commentLink: c.tail,
									commentsDict: r,
									moreCommentsDict: o,
									continueThreadDict: s
								});
							l && (e.prev = l.prev, t.next = l.next)
						}
						return {
							...e,
							[d]: {
								...e[d],
								...D(r),
								...D(s),
								...D(o),
								...u
							}
						}
					}
					case o.b:
					case o.f: {
						const {
							comments: r,
							continueThreads: n,
							key: s,
							moreComments: d
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...D(r),
								...D(n),
								...D(d)
							}
						}
					}
					case _.b:
					case f.M: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, d = e[n], i = {};
						let o = null;
						return s && (i[s] = {
							...d[s],
							prev: Object(R.i)(r.id)
						}, o = Object(R.i)(s)), {
							...e,
							[n]: {
								...e[n],
								...i,
								[r.id]: {
									depth: 0,
									next: o,
									prev: null
								}
							}
						}
					}
					case f.L: {
						const {
							comment: r,
							commentsPageKey: n,
							parentCommentId: s,
							depth: d
						} = t.payload, i = e[n], o = {};
						let c = null;
						if (!i[s]) return e;
						const a = i[s].next;
						return a && (o[a.id] = {
							...i[a.id],
							prev: Object(R.i)(r.id)
						}, c = a), o[s] = {
							...i[s],
							next: Object(R.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...o,
								[r.id]: {
									depth: d,
									next: c,
									prev: Object(R.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const k = {};
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case _.b:
					case _.c:
					case f.M: {
						const {
							comment: r,
							commentsPageKey: n
						} = t.payload;
						return {
							...e,
							[n]: r.id
						}
					}
					case o.b:
					case o.f: {
						const {
							commentLists: r,
							key: n,
							postId: s
						} = t.payload;
						return {
							...e,
							[n]: r[s] && r[s].head ? r[s].head.id : null
						}
					}
					case o.i: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					default:
						return e
				}
			};
			const U = {};
			var G = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.d:
					case o.b:
					case o.c:
					case o.h: {
						const {
							key: r,
							postId: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					case f.M: {
						const {
							parentId: r,
							commentsPageKey: n
						} = t.payload;
						return e[n] ? e : {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				api: m,
				followed: j,
				keyToChatCommentLinks: x,
				keyToCommentThreadLinkSets: L,
				keyToHeadCommentId: P,
				keyToPostId: G,
				ads: i
			})
		},
		"./src/reddit/reducers/tags/selected/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./node_modules/lodash/uniqWith.js"),
				d = r.n(s),
				i = r("./node_modules/lodash/values.js"),
				o = r.n(i),
				c = r("./src/reddit/actions/tags/constants.ts"),
				a = r("./src/reddit/models/Option/index.ts"),
				u = r("./src/reddit/models/Tags/index.ts");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(n || (n = {}));
			const l = {
				selectedPrimaryTagId: {},
				selectedOptions: {},
				selectedSuggestedOptions: {},
				deselectedOptions: {},
				deselectedSuggestedOptions: {},
				inputByItemId: {},
				suggestedInputByItemId: {}
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.w:
					case c.r: {
						const {
							subredditId: r,
							itemTags: n,
							suggestedItemTags: s,
							primaryTag: i
						} = t.payload, c = d()([...(e.selectedOptions[r] || []).map(e => {
							if (!e.id) {
								const t = o()(n[r] || {}).find(t => e.displayText.toLowerCase().trim() === t.tag.text.toLowerCase().trim());
								if (t) return {
									...Object(u.e)(t, !0),
									action: null
								}
							}
							return e
						}), ...o()(n[r] || {}).map(e => ({
							...Object(u.e)(e, !0),
							action: null
						}))], a.a);
						let l = e.selectedPrimaryTagId;
						return i && (l = {
							...l,
							[r]: i.tag.id
						}), {
							...e,
							selectedOptions: {
								...e.selectedOptions,
								[r]: c.map(e => ({
									...e,
									action: e.id ? null : e.action
								}))
							},
							selectedSuggestedOptions: {
								...e.selectedSuggestedOptions,
								[r]: o()(s[r] || {}).map(e => ({
									...Object(u.e)(e, !0),
									action: null
								}))
							},
							deselectedOptions: {
								...e.deselectedOptions,
								[r]: []
							},
							selectedPrimaryTagId: l
						}
					}
					case c.D:
					case c.z: {
						const {
							subredditId: r,
							option: s
						} = t.payload, i = t.type === c.z ? "selectedOptions" : "selectedSuggestedOptions", o = t.type === c.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[o][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						let b = n.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: d()([...e[i][r] || [], {
									...s,
									action: b
								}], a.a)
							},
							[o]: {
								...e[o],
								[r]: u
							}
						}
					}
					case c.C:
					case c.y: {
						const {
							subredditId: r,
							option: s
						} = t.payload, d = t.type === c.y ? "selectedOptions" : "selectedSuggestedOptions", i = t.type === c.y ? "deselectedOptions" : "deselectedSuggestedOptions", o = (e[i][r] || []).slice(), u = (e[d][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						return l > -1 && (null === u[l].action && o.push({
							...u[l],
							action: n.REMOVE
						}), u.splice(l, 1)), {
							...e,
							[d]: {
								...e[d],
								[r]: u
							},
							[i]: {
								...e[i],
								[r]: o
							}
						}
					}
					case c.A: {
						const {
							itemTagsState: r
						} = t.payload, n = Object.keys(r);
						if (!n.length) return e;
						const s = {
								selectedOptions: {},
								deselectedOptions: {},
								inputByItemId: {}
							},
							d = n.reduce((e, t) => (e.selectedOptions[t] = o()(r[t]).map(e => ({
								...Object(u.e)(e, !0),
								action: null
							})), e.deselectedOptions[t] = [], e.inputByItemId[t] = "", e), s);
						return {
							...e,
							inputByItemId: {
								...e.inputByItemId,
								...d.inputByItemId
							},
							selectedOptions: {
								...e.selectedOptions,
								...d.selectedOptions
							},
							deselectedOptions: {
								...e.deselectedOptions,
								...d.deselectedOptions
							}
						}
					}
					case c.B:
					case c.x: {
						const {
							subredditId: r,
							input: n
						} = t.payload, s = t.type === c.x ? "inputByItemId" : "suggestedInputByItemId";
						return {
							...e,
							[s]: {
								...e[s],
								[r]: n
							}
						}
					}
					case c.i:
					case c.h: {
						const {
							subredditId: r,
							primaryTagId: n
						} = t.payload;
						if (!n || !r) return e;
						const s = {
								...e,
								selectedPrimaryTagId: {
									...e.selectedPrimaryTagId,
									[r]: n
								}
							},
							d = e.selectedOptions[r];
						if (d) {
							const t = d.findIndex(e => e.id === n),
								i = [...d];
							return t >= 0 && i.splice(t, 1), {
								...s,
								selectedOptions: {
									...e.selectedOptions,
									[r]: i
								}
							}
						}
						return s
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "j", (function() {
				return T
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/objectSelector/index.ts"),
				d = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = r("./src/reddit/helpers/publicAccessNetwork/index.ts");
			const o = e => e.publicAccessNetwork.api.config,
				c = (e, t) => !!t && !!e.publicAccessNetwork.api.error[Object(i.g)(t)],
				a = e => c(e, d.b),
				u = (e, t) => !!t && !!e.publicAccessNetwork.api.pending[Object(i.g)(t)] && e.publicAccessNetwork.api.pending[Object(i.g)(t)].isPending,
				l = e => u(e, d.b),
				b = e => e.publicAccessNetwork.api.pending[d.b] && e.publicAccessNetwork.api.pending[d.b].fetchedUtcTimeStamp,
				p = Object(n.a)(o, e => e.global),
				m = Object(n.a)((e, t) => {
					let {
						subreddit: r
					} = t;
					return r
				}, o, (e, t) => {
					const r = e.toLowerCase();
					return t.subreddits[r]
				}),
				f = Object(n.a)(o, e => e.global.rpan_intro_video_url),
				O = Object(n.a)(o, e => e.global.url_to_show_for_unavailable_video),
				j = Object(n.a)(o, e => !1),
				_ = Object(n.a)(o, e => e.isError),
				g = Object(n.a)(o, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				S = (Object(n.a)(I, e => e.isError), Object(n.a)(I, e => e.isPending)),
				h = Object(s.a)(Object(n.a)(I, e => e.subreddits)),
				T = Object(n.a)(h, e => [{
					name: "All",
					prefixedName: "All",
					path: Object(i.e)()
				}, ...e.map(e => ({
					name: e,
					prefixedName: `r/${e}`,
					path: Object(i.f)(e)
				}))])
		},
		"./src/reddit/selectors/comments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "u", (function() {
				return I
			})), r.d(t, "w", (function() {
				return S
			})), r.d(t, "x", (function() {
				return h
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "I", (function() {
				return v
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "o", (function() {
				return A
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "q", (function() {
				return L
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "z", (function() {
				return U
			})), r.d(t, "K", (function() {
				return G
			})), r.d(t, "s", (function() {
				return F
			})), r.d(t, "E", (function() {
				return M
			})), r.d(t, "F", (function() {
				return q
			})), r.d(t, "G", (function() {
				return B
			})), r.d(t, "r", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return J
			})), r.d(t, "M", (function() {
				return H
			})), r.d(t, "v", (function() {
				return z
			})), r.d(t, "L", (function() {
				return K
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "H", (function() {
				return W
			})), r.d(t, "D", (function() {
				return Y
			})), r.d(t, "J", (function() {
				return X
			})), r.d(t, "p", (function() {
				return Z
			})), r.d(t, "N", (function() {
				return ee
			})), r.d(t, "y", (function() {
				return te
			})), r.d(t, "A", (function() {
				return re
			})), r.d(t, "C", (function() {
				return ne
			})), r.d(t, "B", (function() {
				return se
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				d = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/objectSelector/index.ts"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/constants/comments.ts"),
				a = r("./src/reddit/models/Comment/index.ts"),
				u = r("./src/reddit/models/Post/index.ts"),
				l = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				m = r("./src/lib/initializeClient/installReducer.ts"),
				f = r("./src/reddit/reducers/features/comments/index.ts"),
				O = r("./src/reddit/reducers/pages/comments/index.ts"),
				j = r("./src/redditGQL/types.ts");
			Object(m.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: O.a
				}
			});
			const _ = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.error[r]
				},
				g = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.pending[r]
				},
				I = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.fullyLoaded[r]
				},
				S = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				h = (e, t) => {
					const r = S(e, t);
					if (r) return Object(p.b)(e, {
						commentId: r
					})
				},
				T = [],
				y = Object(i.a)((e, t) => {
					const r = h(e, t),
						n = r && r.id;
					if (!n) return T;
					const {
						commentsPageKey: s
					} = t, d = e.pages.comments.keyToCommentThreadLinkSets[s], i = [];
					let o = {
						id: n,
						type: c.a.Comment
					};
					do {
						i.push(o), o = d[o.id].next
					} while (o);
					return i
				}),
				E = (e, t) => S(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				v = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = e.pages.comments.keyToPostId[r];
					return n ? e.posts.models[n] : null
				},
				x = (e, t) => {
					let {
						commentId: r,
						commentLink: n,
						commentsPageKey: s
					} = t;
					const d = e.pages.comments.keyToCommentThreadLinkSets[s];
					return d ? n ? d[n.id] : r ? d[r] : null : null
				},
				A = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.keyToCommentThreadLinkSets[r]
				},
				N = (e, t) => {
					const r = t.commentsPageKey ? x(e, t) : null;
					return r ? r.depth : null
				},
				C = (e, t) => {
					let {
						commentLink: r
					} = t;
					const {
						id: n,
						type: s
					} = r;
					switch (s) {
						case c.a.Comment:
							return e.features.comments.models[n];
						case c.a.MoreComments:
							return e.moreComments.models[n];
						case c.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				R = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(u.u)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== d.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				w = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.features.comments.collapsed[r]
				},
				D = e => e.moreComments.models,
				L = e => e.features.comments.models,
				k = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = Object(p.b)(e, {
						commentId: r
					});
					return n ? Object(p.a)(e, n) : ""
				},
				P = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!(r && e.features.comments.focused && e.features.comments.focused[r])
				},
				U = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					return !!(r && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][r])
				},
				G = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					return !!(r && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][r])
				},
				F = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = r && e.features.comments.replyFormOpen[r] || {},
						s = Object.keys(n).find(e => n[e]),
						d = s && Object(p.b)(e, {
							commentId: s
						}),
						i = d && N(e, {
							commentId: d.id,
							commentLink: void 0,
							commentsPageKey: r
						});
					if (d && "number" == typeof i) return {
						...d,
						depth: i
					}
				},
				M = (e, t) => {
					let {
						moreCommentsId: r
					} = t;
					return e.moreComments.models[r]
				},
				q = (e, t) => {
					let {
						moreCommentsId: r
					} = t;
					return !!e.moreComments.api.pending[r]
				},
				B = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = e.pages.comments.keyToPostId[r];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				Q = (e, t) => {
					let {
						id: r
					} = t;
					return e.continueThreads.models[r]
				},
				J = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = r ? e.features.comments.models[r] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				H = (e, t) => {
					let {
						draftKey: r
					} = t;
					var n, s, d;
					return (null === (d = null === (s = null === (n = e.features.comments.submit) || void 0 === n ? void 0 : n.error) || void 0 === s ? void 0 : s[r]) || void 0 === d ? void 0 : d.type) || null
				},
				z = (e, t) => {
					let {
						draftKey: r
					} = t;
					return !!e.features.comments.submit.error[r]
				},
				K = (e, t) => {
					let {
						draftKey: r
					} = t;
					const n = e.features.comments.submit.error[r];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				V = (e, t) => {
					let {
						draftKey: r
					} = t;
					const n = e.features.comments.drafts[r];
					return !!n && n.autofocusDisabled
				},
				$ = (e, t) => {
					let {
						draftKey: r
					} = t;
					return e.features.comments.drafts[r]
				},
				W = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = r ? e.features.comments.submit.error[r] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				Y = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!r && e.features.comments.submit.pending[r]
				},
				X = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!r && e.features.comments.models[r].sendReplies
				},
				Z = e => e.features.comments.visitHighlightFilter,
				ee = (e, t) => {
					const r = Object(p.b)(e, t);
					if (r) return Object(b.Z)(e, r)
				},
				te = (e, t) => {
					let {
						commentId: r
					} = t;
					var n, s;
					return !!((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r)
				},
				re = (e, t) => {
					let {
						commentId: r
					} = t;
					var n, s;
					const d = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r);
					return !!(d && d.expiresAt < Date.now())
				},
				ne = (e, t) => {
					let {
						commentId: r
					} = t, n = Object(p.b)(e, {
						commentId: r
					});
					for (; n && n.parentId;) {
						if (Object(a.g)(n)) return !0;
						if ((n = Object(p.b)(e, {
								commentId: n.parentId
							})) && Object(a.g)(n)) return !0
					}
					return !1
				},
				se = Object(o.a)(l.a, b.v, (e, t) => {
					var r;
					return e && (null === (r = null == t ? void 0 : t.allowedMediaInComments) || void 0 === r ? void 0 : r.includes(j.d.Giphy)) || !1
				})
		},
		"./src/reddit/selectors/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts"), r("./src/lib/makeListingKey/index.ts"), r("./src/lib/objectSelector/index.ts");
			var n = r("./src/reddit/helpers/name/index.ts"),
				s = r("./src/reddit/models/DiscoveryUnit/index.ts");
			r("./src/reddit/selectors/category.ts"), r("./src/reddit/selectors/listings.ts"), r("./src/reddit/selectors/posts.ts"), r("./src/reddit/selectors/subreddit.ts");
			const d = e => e.discoveryUnits.api.list.loaded,
				i = e => e.discoveryUnits.api.list.pending,
				o = (e, t) => {
					let {
						unitName: r
					} = t;
					const s = e.discoveryUnits.nameToId[Object(n.h)(r)];
					return e.discoveryUnits.models[s]
				},
				c = e => o(e, {
					unitName: s.b
				}),
				a = new Set(["sequence"]),
				u = e => {
					const t = e.platform.currentPage;
					if (t) {
						const {
							meta: e,
							urlParams: r
						} = t, n = e && e.name || "", s = r && r.subredditName || "", d = "subreddit" === n, i = a.has(s.toLowerCase());
						return d && i
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/crosspostRecommendations.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "e", (function() {
				return O
			}));
			var n = r("./src/lib/isUrl/index.ts"),
				s = r("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
				d = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/helpers/isCrosspost.ts"),
				c = r("./src/reddit/models/Media/index.ts"),
				a = r("./src/reddit/selectors/activeModal.ts"),
				u = r("./src/reddit/selectors/experiments/index.ts"),
				l = r("./src/reddit/selectors/posts.ts");
			const b = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: u.e,
						experimentName: d.Ie
					}) === d.zd
				},
				p = e => !e.media || e.media.type !== c.o.RTJSON && e.media.type !== c.o.TEXT ? "" : e.media.markdownContent,
				m = e => !e.media && e.source && Object(n.a)(e.source.url) ? e.source.displayText : "",
				f = (e, t) => {
					const r = Object(l.G)(e, {
						postId: t
					});
					return r && !r.isSponsored && r.isCrosspostable && !Object(o.a)(r) && Object(a.c)(s.a)(e)
				},
				O = e => {
					var t;
					return !!(null === (t = e.features) || void 0 === t ? void 0 : t.shouldTryToShowCrosspostModal)
				}
		},
		"./src/reddit/selectors/experiments/econ/powerupsAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = e => Object(d.c)(e, {
					experimentName: s.gd,
					experimentEligibilitySelector: i.Q
				}),
				c = Object(n.a)(o, e => e === s.Ed.Community || e === s.Ed.Supporter)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Mb
				}) === n.Gc.Enabled,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Lb
				}) === n.Fc.Enabled
		},
		"./src/reddit/selectors/experiments/mediaInComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.je
				}) === n.zd,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ie
				}) === n.zd
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "d", (function() {
				return N
			}));
			var n, s = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/selectors/subreddit.ts"),
				i = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/index.ts"),
				u = r("./src/reddit/selectors/meta.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/profile.ts");
			! function(e) {
				e.Blurred = "blurred", e.NoPreview = "noPreview"
			}(n || (n = {}));
			const p = Object(s.a)(u.h, u.d, a.e, (e, t, r) => !e && !t && !r);

			function m(e, t) {
				return r => Object(c.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: p,
					expEventOverride: t
				})
			}
			const f = m(i.gc, !0),
				O = m(i.gc, !1),
				j = m(i.ic, !0),
				_ = (m(i.ic, !1), m(i.hc, !0)),
				g = m(i.hc, !1),
				I = m(i.jc, !0),
				S = m(i.jc, !1),
				h = Object(s.a)(f, j, (e, t) => e === i.Hc.Enabled || t === i.Ic.Enabled),
				T = Object(s.a)(_, I, (e, t) => e === i.sb.BlurredPreview || e === i.sb.NoPreview || t === i.sb.BlurredPreview || t === i.sb.NoPreview),
				y = Object(s.a)(g, S, (e, t) => e === i.sb.BlurredPreview || t === i.sb.BlurredPreview),
				E = Object(s.a)(_, I, (e, t) => e === i.sb.NoPreview || t === i.sb.NoPreview),
				v = Object(s.a)(h, E, y, (e, t, r) => (e || t) && !r),
				x = e => {
					const t = y(e),
						r = v(e);
					return t ? n.Blurred : r ? n.NoPreview : null
				},
				A = e => {
					const t = y(e),
						r = Object(d.k)(e);
					return t && r
				},
				N = e => {
					var t;
					const r = y(e),
						n = Object(l.b)(e),
						s = null === (t = null == n ? void 0 : n.routeMatch) || void 0 === t ? void 0 : t.match;
					if (s) {
						const t = Object(b.j)(e, {
								profileName: s.params.profileName
							}),
							d = !!(t && (null == t ? void 0 : t.isNSFW)),
							i = Object(o.E)(e, {
								pageLayer: n
							});
						return r && d && !i
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const c = Object(n.a)(i.e, o.J, (e, t) => e && !t),
				a = e => Object(d.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: s.wc
				}),
				u = Object(n.a)(e => Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: s.vc
				}), e => e),
				l = Object(n.a)(e => Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: s.Qb
				}), e => e === s.zd)
		},
		"./src/reddit/selectors/experiments/publicAccessNetwork.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = e => n.af.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.hf
				}),
				i = e => n.af.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Te
				}),
				o = (e, t, r) => {
					const d = r(e, t);
					return !(!d || !d.meter) && (d.meter.enabled && n.Of.Enabled === Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Nf
					}))
				},
				c = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.gf
				}),
				a = e => {
					switch (e) {
						case n.lf.Five:
							return .05;
						case n.lf.Ten:
							return .1;
						case n.lf.Fifty:
							return .5;
						default:
							return .01
					}
				},
				u = e => n.af.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.if
				}),
				l = e => n.af.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ef
				}),
				b = e => n.af.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ff
				})
		},
		"./src/reddit/selectors/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			}));
			var n = r("./src/reddit/models/ExternalAccount/index.ts"),
				s = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					let {
						username: r
					} = t;
					return !!e.externalAccount.api.user.pending[r]
				},
				o = (e, t) => {
					let {
						username: r
					} = t;
					return e.externalAccount.user[r]
				},
				c = e => {
					const t = Object(d.k)(e);
					if (!t) return;
					const r = Object(s.e)(t),
						n = o(e, {
							username: r
						});
					return n ? n.twitter : void 0
				},
				a = e => !!e.externalAccount.api.connect.pending[n.a.Twitter],
				u = (e, t) => {
					let {
						profileName: r
					} = t;
					if (!r) return null;
					const i = o(e, {
						username: r
					});
					if (!i) return null;
					const c = i[n.a.Twitter];
					if (!c) return null;
					const a = Object(d.k)(e);
					if (!(a && Object(s.e)(a).toLowerCase() === r.toLowerCase())) return c;
					const u = Object(d.Ab)(e, {
						userName: r
					});
					return u ? u.prefShowTwitter ? c : null : c
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				d = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const i = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(d.eb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							n = t.formData.polls,
							s = n.options.map(e => ({
								text: e.text
							})),
							i = {};
						return r.document ? i.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (i.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: i,
							options: s
						}
					}) : []
				},
				o = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
				}
		},
		"./src/reddit/selectors/features/predictions/leaderboards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const d = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetching) || !1
				},
				i = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetched) || !1
				},
				o = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.error) || !1
				},
				c = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.data) || null
				},
				a = (e, t) => {
					var r, n;
					return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.tournamentsLeaderboards[t.tournamentId]) || null
				},
				u = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.queriedLeaderboards[t.tournamentId]) || void 0 === s ? void 0 : s.isFetching) || !1
				},
				l = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.queriedLeaderboards[t.tournamentId]) || void 0 === s ? void 0 : s.isFetched) || !1
				},
				b = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.queriedLeaderboards[t.tournamentId]) || void 0 === s ? void 0 : s.error) || !1
				}
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/models/Gold/Powerups/index.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, n;
					switch (t.type) {
						case d.mb:
						case d.nb: {
							const {
								benefitStatuses: n,
								subredditId: s
							} = t.payload;
							if (!n) return e;
							const d = null !== (r = e[s]) && void 0 !== r ? r : {},
								i = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								i[t] = r
							}), {
								...e,
								[s]: {
									...d,
									...i
								}
							}
						}
						case d.M: {
							const {
								benefitStatuses: r,
								subredditId: s
							} = t.payload, d = null !== (n = e[s]) && void 0 !== n ? n : {}, i = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								i[t] = r
							}), {
								...e,
								[s]: {
									...d,
									...i
								}
							}
						}
						default:
							return e
					}
				},
				c = r("./node_modules/reselect/es/index.js");
			Object(s.a)({
				features: {
					powerupsBenefitSettings: o
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				u = (e => Object(c.a)(a, t => !!(null == t ? void 0 : t[e])))(n.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts");
			const d = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!n.d.subredditInlineEditing(e)) return !1;
					const d = r ? Object(s.n)(e, {
						subredditId: r
					}) : null;
					return !!d && (e => !!e && e.config)(d)
				},
				i = e => e.subreddits.api.inlineEditing.pending
		},
		"./src/reddit/selectors/modUserNotes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return c
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/SubredditModeration/index.ts"),
				d = r("./src/redditGQL/types.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			Object(i.a)({
				features: {
					modUserNotes: o.a
				}
			});
			const c = Object(n.a)((e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: d
					} = t;
					const i = Object(s.d)(r, n, d),
						o = e.features.modUserNotes.order[i];
					return o ? o.map(t => e.features.modUserNotes.models[t]) : []
				}),
				a = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: d
					} = t;
					const i = Object(s.d)(r, n, d);
					return e.features.modUserNotes.api.pending[i]
				},
				u = e => e.features.modUserNotes.api.error,
				l = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: d
					} = t;
					const i = Object(s.d)(r, n, d);
					return e.features.modUserNotes.loadMore[i]
				},
				b = (e, t, r) => {
					if (!t || !r) return;
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, d.m.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				p = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, d.m.All)]
				},
				m = (e, t, r, n) => {
					if (!n) return;
					const s = p(e, t, r);
					return s && s[n] || 0
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					if (!r) return !1;
					if (e.features.comments.collapsed[n] && r in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][r];
					const s = e.features.comments.models[r];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				s = (e, t) => {
					let {
						commentId: r
					} = t;
					if (!r) return !1;
					const n = e.features.comments.models[r];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/reddit/selectors/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "e", (function() {
				return g
			}));
			var n = r("./src/lib/safeJSONParse/index.ts"),
				s = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/constants/parameters.ts"),
				o = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				a = r("./src/reddit/selectors/activeModal.ts"),
				u = r("./src/reddit/selectors/emailVerification.ts"),
				l = r("./src/reddit/selectors/experiments/onboarding.ts"),
				b = r("./src/reddit/selectors/platform.ts"),
				p = r("./src/reddit/selectors/user.ts");
			const m = e => {
					const t = Object(b.q)(e);
					return Boolean((null == t ? void 0 : t[i.w]) && Object(n.a)(t[i.w]))
				},
				f = e => e.onboarding.shouldSkipOnboardingState,
				O = Object(s.a)(p.Q, p.P, m, f, (e, t, r, n) => (e || t) && r && !n),
				j = e => {
					const {
						genderUpdateState: t
					} = e.onboarding;
					if (t.success || t.failure) return t
				},
				_ = Object(s.a)(l.c, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(d.Zf)(e) ? t : null),
				g = Object(s.a)(l.c, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(o.I)(r) || Object(o.J)(r) || Object(o.y)(r)
				}, a.b, u.a, f, (e, t, r, n, s) => e === d.ub.PopoverFeed15 && t && Object(c.c)() && !r && !n && !s)
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/user.ts");
			const d = e => !Object(s.Q)(e) && e.seo.linksModule.frontpage || null,
				i = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				o = Object(n.a)(d, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: i(e.url)
					})).filter(e => e.title)
				})) : null),
				c = Object(n.a)(o, e => e ? e.map(e => ({
					...e,
					links: e.links.filter(e => e.visible)
				})) : null),
				a = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = ((e, t) => {
						let {
							subredditId: r
						} = t;
						return e.seo.linksModule.subreddits && e.seo.linksModule.subreddits[r]
					})(e, {
						subredditId: r
					});
					return n && n.subreddits
				}
		},
		"./src/reddit/selectors/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					subredditId: r
				} = t;
				return e.seo.topicLinks.subreddits && e.seo.topicLinks.subreddits[r]
			}
		},
		"./src/reddit/selectors/tags.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "A", (function() {
				return f
			})), r.d(t, "B", (function() {
				return O
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "o", (function() {
				return R
			})), r.d(t, "k", (function() {
				return w
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "y", (function() {
				return L
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "q", (function() {
				return U
			})), r.d(t, "C", (function() {
				return G
			})), r.d(t, "w", (function() {
				return F
			})), r.d(t, "s", (function() {
				return q
			})), r.d(t, "x", (function() {
				return B
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return J
			})), r.d(t, "D", (function() {
				return H
			})), r.d(t, "m", (function() {
				return z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/some.js"),
				s = r.n(n),
				d = r("./node_modules/lodash/values.js"),
				i = r.n(d),
				o = r("./src/lib/objectSelector/index.ts"),
				c = r("./src/reddit/helpers/tags/index.ts"),
				a = r("./src/reddit/models/Tags/index.ts");
			const u = e => e.tags.creation.selectedOptions || [],
				l = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id && t.push(u(e)[r].id);
					return t || []
				},
				b = e => (u(e) || []).filter(e => !!e.displayText).map(e => e.displayText),
				p = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id || t.push(u(e)[r].displayText);
					return t || []
				},
				m = e => Object.keys(e.tags.models.globalSubredditTags).length > 0,
				f = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				O = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				j = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.inputByItemId[r] || ""
				},
				_ = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.suggestedInputByItemId[r] || ""
				},
				g = [],
				I = (e, t) => {
					let {
						subredditId: r
					} = t;
					return s()(S(e, {
						subredditId: r
					}), e => !!e.action) || s()(T(e, {
						subredditId: r
					}), e => !!e.action)
				},
				S = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedOptions[r] || g
				},
				h = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedSuggestedOptions[r] || g
				},
				T = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.deselectedOptions[r] || g
				},
				y = {},
				E = {},
				v = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				x = e => e.tags.models.globalSubredditTags,
				A = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				N = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditScopedTags[r] || E
				},
				C = (e, t) => {
					const r = i()(t);
					for (let n = 0; n < r.length; n++)
						if (r[n].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[n];
					return null
				},
				R = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.itemTags[r] || y
				},
				w = (e, t) => {
					let {
						itemId: r
					} = t;
					return !!e.tags.models.itemTags[r]
				},
				D = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.suggestedItemTags[r] || y
				},
				L = (e, t) => {
					let {
						itemId: r
					} = t;
					return i()(D(e, {
						itemId: r
					})).filter(e => e.isRelevant).map(e => Object(a.e)(e, !0))
				},
				k = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.sortedItemTags[r] || []
				},
				P = Object(o.a)((e, t) => {
					let {
						thingId: r,
						suggested: n = !1
					} = t;
					const s = F(e, {
						subredditId: r
					});
					return i()(((e, t) => {
						let {
							thingId: r,
							suggested: n = !1
						} = t;
						const s = (n ? _(e, {
								subredditId: r
							}) : j(e, {
								subredditId: r
							})) ? A(e) : v(e),
							d = n ? h(e, {
								subredditId: r
							}) : S(e, {
								subredditId: r
							}),
							i = s.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return d.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), i)
					})(e, {
						thingId: r,
						suggested: n
					})).filter(e => !e.selected && e.id !== s)
				}),
				U = (e, t) => {
					let {
						subredditId: r
					} = t;
					return S(e, {
						subredditId: r
					}).concat(T(e, {
						subredditId: r
					}))
				},
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					return S(e, {
						subredditId: r
					}).filter(c.b).map(e => ({
						text: e.displayText,
						type: a.c.CLASSIFICATION
					}))
				},
				F = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditPrimaryTagId[r] || null
				},
				M = (e, t) => t && e.tags.models.globalSubredditTags[t] || null,
				q = (e, t) => {
					const r = e.tags.selected.selectedPrimaryTagId[t.subredditId] || null;
					return M(e, r)
				},
				B = (e, t) => {
					const r = F(e, t);
					return M(e, r)
				},
				Q = e => e.tags.creation.selectedPrimaryTagId || null,
				J = e => {
					const t = Q(e);
					return M(e, t)
				},
				H = e => e.tags.api.updatePrimaryTag.pending,
				z = (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object.keys(R(e, {
						itemId: r
					})).length > 0
				}
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return m
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				d = r("./src/reddit/selectors/gold/powerups/index.ts"),
				i = r("./src/reddit/selectors/moderatorPermissions.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(o.a)({
				features: {
					userFlair: c.a
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.features.userFlair[r]
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n, s;
					return null === (n = e.features.userFlair[r]) || void 0 === n || !n.displaySettings || !!(null === (s = e.features.userFlair[r].displaySettings) || void 0 === s ? void 0 : s.isEnabled)
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n, d;
					return (null === (n = e.features.userFlair[r]) || void 0 === n ? void 0 : n.displaySettings) ? null === (d = e.features.userFlair[r].displaySettings) || void 0 === d ? void 0 : d.position : s.b.Right
				},
				b = Object(n.a)((e, t) => {
					let {
						subredditId: r
					} = t;
					const n = a(e, {
						subredditId: r
					});
					if (n && n.displaySettings && n.permissions) return {
						type: s.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				p = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = u(e, {
							subredditId: r
						}),
						s = b(e, {
							subredditId: r
						}),
						d = a(e, {
							subredditId: r
						});
					if (!n || !s || !d) return !1;
					if (d.applied) return !0;
					const o = Object(i.g)(e, {
							subredditId: r
						}),
						{
							canUserChange: c
						} = s.permissions;
					return !!(d.templateIds || []).find(e => {
						return !d.templates[e].modOnly || o
					}) && c
				},
				m = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return !1;
					const n = p(e, {
							subredditId: r
						}),
						s = Object(d.f)(e, {
							subredditId: r
						});
					return n || s
				}
		},
		"./src/reddit/selectors/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "b", (function() {
				return I
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/constants/posts.ts"),
				d = r("./src/reddit/helpers/name/index.ts"),
				i = r("./src/reddit/helpers/widgets/index.tsx"),
				o = r("./src/reddit/selectors/profile.ts"),
				c = r("./src/reddit/selectors/subreddit.ts");
			const a = [],
				u = e => e.widgets.models,
				l = Object(n.a)((e, t) => Object(i.l)(t) ? e.widgets.models[t.widgetId] : Object(i.f)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				p = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(c.F)(e, t.subredditName)), r) {
						const t = b(e, {
							subredditId: r
						});
						if (t) return e.widgets.models[t]
					}
					return null
				},
				m = (e, t) => e.widgets.sidebar[t.subredditId] || [],
				f = (e, t) => e.widgets.menuIds[t.subredditId],
				O = (e, t) => {
					const r = f(e, t);
					return r ? e.widgets.models[r] : null
				},
				j = (e, t) => {
					const r = e.widgets.sidebar[t.subredditId];
					return Array.isArray(r) ? r.reduce((t, r) => {
						const n = e.widgets.models[r];
						return n && t.push(n.kind), t
					}, []) : a
				},
				_ = (e, t) => {
					const r = m(e, t);
					for (const n of r) {
						const t = e.widgets.models[n];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				g = (e, t) => {
					const r = m(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
					return r.length ? r : null
				},
				I = Object(n.a)((e, t) => {
					if (t.type === s.a.PROFILE) {
						const r = Object(o.j)(e, {
							profileName: t.name
						});
						return r ? {
							profile: {
								id: r.id,
								name: Object(d.h)(r.name)
							}
						} : {}
					}
					const r = Object(c.z)(e, {
							subredditName: t.name
						}),
						n = Object(c.w)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: n ? n.contentCategory : null,
							id: r.id,
							name: Object(d.h)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"e77b2360963c"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(e) {
			e.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CommentsPageLastAuthorModNotes.json": function(e) {
			e.exports = JSON.parse('{"id":"1b7d106afc6c"}')
		},
		"./src/redditGQL/operations/CreateCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"e443629d50b0"}')
		},
		"./src/redditGQL/operations/CreateModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"10ad38be41ae"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"ec74ef5afe19"}')
		},
		"./src/redditGQL/operations/CreateSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"80c9a3cd96b8"}')
		},
		"./src/redditGQL/operations/DeleteCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"c13d195ee7ca"}')
		},
		"./src/redditGQL/operations/DeleteModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"c44e6467c4d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"a141637b546a"}')
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"c822b1f9fc9b"}')
		},
		"./src/redditGQL/operations/FetchGlobalTags.json": function(e) {
			e.exports = JSON.parse('{"id":"f4a581740c21"}')
		},
		"./src/redditGQL/operations/FetchSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"bac623887684"}')
		},
		"./src/redditGQL/operations/FetchSubredditsNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"5d042135b4c5"}')
		},
		"./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"cbcafcbff9c6"}')
		},
		"./src/redditGQL/operations/GetModUserNotes.json": function(e) {
			e.exports = JSON.parse('{"id":"0eb0efc0bf02"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(e) {
			e.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetSubredditQuestions.json": function(e) {
			e.exports = JSON.parse('{"id":"15c4ad40a0bc"}')
		},
		"./src/redditGQL/operations/GetTotalModNoteCount.json": function(e) {
			e.exports = JSON.parse('{"id":"bb325c103c55"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"17f4fcd0e341"}')
		},
		"./src/redditGQL/operations/GetTournamentsBaseInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"cebfc8734cec"}')
		},
		"./src/redditGQL/operations/LiveVideoPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"b3343d9362cd"}')
		},
		"./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json": function(e) {
			e.exports = JSON.parse('{"id":"023547ccdaf6"}')
		},
		"./src/redditGQL/operations/ModQueueItems.json": function(e) {
			e.exports = JSON.parse('{"id":"95d8c0b32743"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"e61106627ea9"}')
		},
		"./src/redditGQL/operations/ReallocatePowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"d02bf38ca840"}')
		},
		"./src/redditGQL/operations/RedditorPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"e2bcd0fbaace"}')
		},
		"./src/redditGQL/operations/ReportMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ae01229e1caa"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditAbout.json": function(e) {
			e.exports = JSON.parse('{"id":"c7c6cf422c4a"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditorByName.json": function(e) {
			e.exports = JSON.parse('{"id":"11aba1560164"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditors.json": function(e) {
			e.exports = JSON.parse('{"id":"d343c3cad2d0"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"0d6990e443b8"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"f8a28e97ccd1"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"5ef02d19b2e0"}')
		},
		"./src/redditGQL/operations/SubredditRules.json": function(e) {
			e.exports = JSON.parse('{"id":"c398abb500f1"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"a9f7697930b7"}')
		},
		"./src/redditGQL/operations/SubredditTournamentLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"e14e6d1892e6"}')
		},
		"./src/redditGQL/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"227597709dbb"}')
		},
		"./src/redditGQL/operations/TopAwardersLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"750ff4a757de"}')
		},
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		},
		"./src/redditGQL/operations/UpdateHatefulContentFilters.json": function(e) {
			e.exports = JSON.parse('{"id":"0f2f2af43b20"}')
		},
		"./src/redditGQL/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/redditGQL/operations/UpdatePowerupsSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"699ae1616006"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"871996bf9044"}')
		},
		"./src/redditGQL/operations/UpdateSubredditNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"0af4f630a2e1"}')
		},
		"./src/redditGQL/operations/UpdateSubredditPrimaryTag.json": function(e) {
			e.exports = JSON.parse('{"id":"a2d0aa1efdbc"}')
		},
		"./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json": function(e) {
			e.exports = JSON.parse('{"id":"ee43ccb6e5eb"}')
		},
		"./src/redditGQL/operations/UserPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"5460e33eb672"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		},
		"./src/redditGQL/operations/WhereToPostSubRec.json": function(e) {
			e.exports = JSON.parse('{"id":"645c3c962b55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.081d1728266216162513.js.map