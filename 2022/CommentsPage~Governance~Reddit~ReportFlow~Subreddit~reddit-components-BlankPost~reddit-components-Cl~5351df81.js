// https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.ff8f792e3f30f835fe50.js
// Retrieved at 10/24/2022, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"], {
		"./src/lib/name/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			}));
			var n = r("./src/reddit/helpers/name/index.ts");
			const s = /^u_[\w-]+$/;

			function d(e) {
				return s.test(Object(n.i)(e))
			}

			function i(e) {
				return `u_${Object(n.i)(e)}`
			}

			function o(e, t) {
				return Object(n.i)(e) === Object(n.i)(t)
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
				return k
			})), r.d(t, "o", (function() {
				return R
			})), r.d(t, "f", (function() {
				return U
			})), r.d(t, "i", (function() {
				return G
			})), r.d(t, "n", (function() {
				return B
			})), r.d(t, "s", (function() {
				return Q
			})), r.d(t, "k", (function() {
				return H
			})), r.d(t, "h", (function() {
				return J
			})), r.d(t, "g", (function() {
				return z
			})), r.d(t, "q", (function() {
				return $
			})), r.d(t, "r", (function() {
				return W
			})), r.d(t, "d", (function() {
				return Y
			})), r.d(t, "a", (function() {
				return Z
			})), r.d(t, "b", (function() {
				return ee
			})), r.d(t, "p", (function() {
				return te
			})), r.d(t, "c", (function() {
				return re
			})), r.d(t, "m", (function() {
				return ne
			})), r.d(t, "e", (function() {
				return se
			})), r.d(t, "l", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/telemetry/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/economics/helpers/async.ts"),
				c = r("./src/lib/loadableAction/index.ts");
			const a = Object(c.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			Object(c.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo));
			var u = r("./src/reddit/actions/login.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				m = r("./src/reddit/actions/shortcuts/utils.ts"),
				p = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				O = r("./src/reddit/actions/vote.ts"),
				g = r("./src/reddit/endpoints/comment/index.tsx"),
				j = r("./src/reddit/helpers/commentList/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				I = r("./src/reddit/helpers/trackers/comment.ts"),
				h = r("./src/reddit/models/Comment/index.ts"),
				v = r("./src/reddit/models/Post/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/models/Vote/index.ts"),
				S = r("./src/reddit/selectors/comments.ts"),
				E = r("./src/reddit/selectors/commentSelector.ts"),
				x = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				C = r("./src/reddit/selectors/moderatingComments.ts"),
				w = r("./src/reddit/selectors/moderatorPermissions.ts"),
				A = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/comment/constants.ts");
			const L = {},
				k = Object(i.a)(N.q),
				R = e => async (t, r, n) => {
					let {
						apiContext: d
					} = n;
					if (!Object(A.R)(r())) return t(Object(u.openRegisterModal)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(S.m)(r(), {
							commentId: e
						})
					}));
					const i = r().features.comments.models[e];
					if (!i) return;
					const o = i.isSaved ? g.m : g.i;
					if (t(k({
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
						t(Object(f.f)({
							text: r,
							kind: y.b.Undo,
							buttonText: n,
							buttonAction: R(e)
						}))
					} else t(k({
						[e]: {
							isSaved: i.isSaved
						}
					}))
				}, P = e => `viewing-comment-${e}`, D = n.a.telemetry.commentConsumedThreshold, U = e => async (t, r) => {
					const s = r(),
						i = Object(E.b)(s, {
							commentId: e
						});
					if (!i || Math.random() > n.a.telemetry.commentSampleRate) return;
					I.d({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), d.c.start(P(e));
					const o = setTimeout(() => I.a({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), D);
					L[e] = o
				}, G = (e, t) => async (r, n) => {
					const s = n(),
						i = P(e);
					if (Object(E.b)(s, {
							commentId: e
						}) && d.c.has(i)) {
						const r = d.c.end(i);
						!t && r < D && (clearTimeout(L[e]), delete L[e])
					}
				}, F = Object(i.a)(N.z), M = Object(i.a)(N.y), q = Object(i.a)(N.x), B = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const i = n(),
						c = i.moreComments.models[t],
						u = i.platform.currentPage,
						l = u && u.routeMatch,
						m = l && l.match,
						{
							partialPostId: f
						} = m ? m.params : null;
					if (!f) return;
					const O = Object(v.y)(f);
					r(F({
						moreCommentsId: c.id
					}));
					const _ = await Object(g.g)(d(), O, {
						token: c.token
					}, Object(x.a)(i));
					if (_.ok) {
						const t = _.body,
							s = Object(j.a)(t, O, i);
						r(M({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: s,
							...t
						}));
						const d = i.posts.models[O];
						let u;
						d && "subreddit" === d.belongsTo.type && t.comments && (u = d.belongsTo.id, await r(Object(o.a)({
							commentIds: Object.keys(_.body.comments),
							postIds: [d.id],
							skip: ["communityDetails", "subscription"],
							subredditId: u
						})), Object(w.i)(i, u) && r(Object(p.c)(O, !0, c.token)));
						const l = _.body.comments;
						await r(a(u, l)), Object(w.h)(n(), {
							subredditId: d.belongsTo.id
						}) && r(Object(b.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else r(q({
						moreCommentsItem: c,
						..._.error
					}))
				}, Q = Object(O.a)(j.b, T.a.upvoted), H = Object(O.a)(j.b, T.a.downvoted), J = Object(i.a)(N.l), z = Object(i.a)(N.k), K = Object(i.a)(N.g), V = Object(i.a)(N.h), $ = (Object(i.a)(N.c), Object(i.a)(N.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const d = s(),
							i = Object(h.i)(t),
							o = Object(S.n)(d, {
								commentLink: i,
								commentsPageKey: r
							}),
							c = Object(C.b)(d, {
								commentId: t,
								commentsPageKey: r
							}),
							a = o.depth;
						e(K({
							commentId: t,
							commentsPageKey: r,
							isCollapsed: c
						})), c || 0 !== a || n(t, !0), Object(m.d)()
					}
				}), W = e => {
					let {
						commentId: t,
						commentsPageKey: r
					} = e;
					return async e => {
						e(V({
							commentId: t,
							commentsPageKey: r
						}))
					}
				}, Y = e => {
					let {
						commentLink: t,
						commentsPageKey: r,
						lineDepth: n,
						scrollToAndRemeasure: s
					} = e;
					return async (e, d) => {
						const i = d(),
							o = Object(j.e)(r, t, n, i),
							c = Object(C.b)(i, {
								commentId: t.id,
								commentsPageKey: r
							});
						e(K({
							commentId: o,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === n && s(o, !0), Object(m.d)()
					}
				}, X = Object(i.a)(N.t), Z = e => t => t(X({
					draftKey: e
				})), ee = Object(i.a)(N.a), te = Object(i.a)(N.I), re = Object(i.a)(N.b), ne = Object(i.a)(N.w), se = Object(i.a)(N.e), de = Object(i.a)(N.A), ie = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var d, i;
					if (e) {
						const r = await Object(g.b)(s(), e);
						if (r.ok) {
							const n = r.body;
							"Comment" === (null === (d = n.data.commentById) || void 0 === d ? void 0 : d.__typename) && t(de({
								commentId: e,
								media: Object(_.b)(null === (i = n.data.commentById) || void 0 === i ? void 0 : i.content)
							}))
						}
					}
				}
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
				return C
			})), r.d(t, "b", (function() {
				return A
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
			const m = e => {
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
			var p = r("./node_modules/lodash/isEmpty.js"),
				f = r.n(p),
				O = r("./src/redditGQL/operations/UpdateHatefulContentFilters.json"),
				g = r("./src/redditGQL/operations/UpdatePostRequirements.json"),
				j = r("./src/reddit/endpoints/subreddit/about.ts"),
				_ = r("./src/reddit/featureFlags/index.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/contentControls.ts"),
				v = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/actions/contentControls/constants.ts");
			const S = Object(o.a)(T.b),
				E = Object(o.a)(T.c),
				x = Object(o.a)(T.a),
				C = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = {
							subredditName: e.toLowerCase()
						},
						o = _.d.hatefulContentFiltersEnabled(r());
					if (Object(h.a)(r(), d)) return;
					t(E(d));
					let a = Object(y.I)(r(), e);
					if (!a) {
						const r = await Object(j.a)(s(), e, !1);
						if (r.ok) {
							a = r.body.data.subreddit.id
						}
						if (!a) {
							const e = r.error || {
								type: i.L.NOT_FOUND_ERROR
							};
							return void t(x({
								...d,
								error: e
							}))
						}
					}
					const l = Object(v.c)(r(), {
						subredditId: a
					});
					let p = null;
					const f = await ((e, t) => Object(u.a)(e, {
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
												hatefulContentThresholdAbuse: m(null == n ? void 0 : n.hatefulContentThresholdAbuse),
												hatefulContentThresholdIdentity: m(null == n ? void 0 : n.hatefulContentThresholdIdentity),
												permittedTerms: (null == n ? void 0 : n.hatefulContentPermittedTerms) || []
											},
											postRequirements: null == n ? void 0 : n.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(s(), {
						subredditId: a,
						includeHatefulFilters: l && o
					});
					if (f.ok) {
						const e = f.body;
						p = e.data.subreddit && e.data.subreddit
					}
					if (p) t(S({
						...d,
						...p
					}));
					else {
						const r = f.error || {
							type: i.L.UNKNOWN_ERROR
						};
						t(x({
							...d,
							error: r
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: f.body,
								responseOk: f.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, w = Object(o.a)(T.d), A = (e, t) => async (r, s, d) => {
					let {
						gqlContext: i
					} = d;
					const o = e.toLowerCase(),
						c = Object(y.I)(s(), e);
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
								...g,
								variables: {
									input: s
								}
							})
						}
						if (r.hatefulContentFilters && !f()(r.hatefulContentFilters)) {
							const s = {
									subredditId: t,
									hatefulContentThresholdAbuse: r.hatefulContentFilters.hatefulContentThresholdAbuse,
									hatefulContentThresholdIdentity: r.hatefulContentFilters.hatefulContentThresholdIdentity
								},
								d = !(!s.hatefulContentThresholdAbuse && !s.hatefulContentThresholdIdentity),
								i = {
									subredditId: t,
									permittedTerms: r.hatefulContentFilters.permittedTerms
								},
								o = !!i.permittedTerms;
							n[1] = Object(u.a)(e, {
								...O,
								variables: {
									includeThresholds: d,
									includePermittedTerms: o,
									thresholdInput: s,
									permittedTermsInput: i
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
								const {
									data: {
										updateHatefulContentSettings: e,
										updateSubredditSettings: t
									}
								} = r.body;
								t && (n = n && t.ok), e && (n = n && e.ok);
								const d = null == t ? void 0 : t.fieldErrors,
									i = null == e ? void 0 : e.fieldErrors;
								d && (s = s.concat(d)), i && (s = s.concat(i))
							}
							return {
								ok: n,
								fieldErrors: s.length ? s : null
							}
						})
					})(i(), c, t);
					if (l.ok) return r(w({
						subredditName: o,
						partialUpdates: t
					})), r(Object(a.f)({
						kind: I.b.SuccessCommunity,
						text: n.fbt._("Subreddit content controls updated successfully", null, {
							hk: "1n6QIQ"
						})
					})), {
						success: !0
					}; {
						const s = N(l.fieldErrors);
						return r(Object(a.f)({
							kind: I.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: A(e, t)
						})), {
							success: !1,
							errors: s || void 0
						}
					}
				}, N = e => e && e.map(e => ({
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
				return m
			})), r.d(t, "d", (function() {
				return p
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
				}, b = "DISCOVERY_UNIT__UNIT_DATA_PENDING", m = "DISCOVERY_UNIT__UNIT_DATA_LOADED", p = "DISCOVERY_UNIT__UNIT_DATA_FAILED";
			Object(n.a)(b), Object(n.a)(m), Object(n.a)(p)
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
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return J
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
				return me
			})), r.d(t, "t", (function() {
				return pe
			})), r.d(t, "f", (function() {
				return fe
			})), r.d(t, "c", (function() {
				return Oe
			})), r.d(t, "d", (function() {
				return ge
			})), r.d(t, "h", (function() {
				return je
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/predictions/index.ts"),
				o = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/makeRequest/index.ts")),
				c = r("./src/lib/uploadToS3/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/CreateMediaUploadLease.json"),
				l = r("./src/redditGQL/operations/SubmitMediaUpload.json");
			var b = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				m = r("./src/reddit/helpers/media/index.ts"),
				p = r("./src/redditGQL/types.ts");
			const f = new Map([
					["image/png", p.t.Png],
					["image/gif", p.t.Gif],
					["image/jpeg", p.t.Jpeg]
				]),
				O = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = await Object(m.h)(t) || t.type,
						p = f.get(i);
					if (!p) throw new Error("Unacceptable file type");
					const {
						mediaId: O,
						uploadLease: g
					} = await (async (e, t) => {
						const r = await Object(a.a)(e, {
							...u,
							variables: {
								input: t
							}
						});
						if (!Object(o.c)(r) || r.error) throw new Error("Failed to create upload lease");
						return r.body.data.createMediaUploadLease
					})(d(), {
						mimetype: p
					}), j = Object(b.a)(g), _ = await Object(c.a)(t, j);
					if (!Object(o.c)(_)) throw new Error("Failed to upload file to S3");
					return await (async (e, t) => {
						const r = await Object(a.a)(e, {
							...l,
							variables: {
								input: t
							}
						});
						if (!Object(o.c)(r) || r.error) throw new Error("Failed to submit media")
					})(d(), {
						mediaId: O,
						redditId: e
					}), {
						mediaId: O,
						mimeType: p
					}
				};
			var g = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/lib/delay/index.ts"),
				I = r("./src/lib/makeActionCreator/index.ts"),
				h = r("./src/reddit/endpoints/economics/predictions.ts");

			function v(e) {
				let {
					topPredictorsRank: t,
					currentRank: r
				} = e;
				return {
					currentRank: r ? y(r) : null,
					topPredictorsRank: t.map(y)
				}
			}

			function y(e) {
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
			var T = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				E = r("./src/reddit/actions/login.ts"),
				x = r("./src/reddit/actions/modal.ts"),
				C = r("./src/reddit/constants/modals.ts"),
				w = r("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				A = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				k = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				R = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: i.a
				}
			});
			const P = Object(I.a)(R.d),
				D = Object(I.a)(R.c),
				U = Object(I.a)(R.e),
				G = Object(I.a)(R.f),
				F = Object(I.a)(R.i),
				M = Object(I.a)(R.h),
				q = Object(I.a)(R.j),
				B = Object(I.a)(R.p),
				Q = Object(I.a)(R.s),
				H = Object(I.a)(R.o),
				J = Object(I.a)(R.b),
				z = (e, t, r) => async (n, s, d) => {
					let {
						gqlContext: i
					} = d;
					const o = Object(N.R)(s());
					if (!Object(w.c)(s(), {
							subredditId: e
						})) {
						n(P({
							subredditId: e
						}));
						try {
							const {
								predictionTournaments: s,
								predictionWinners: d
							} = await Object(h.i)(i(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: o
							}), c = v(d);
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
									leaderboard: v(r)
								}))
							}))
						} catch {
							n(D({
								subredditId: e
							}))
						}
					}
				}, K = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = Object(N.R)(n());
					if (!Object(w.g)(n(), {
							tournamentId: t
						})) {
						r(F({
							tournamentId: t
						}));
						try {
							const {
								predictionWinners: n
							} = await Object(h.j)(d(), {
								subredditId: e,
								tournamentId: t,
								includeCurrentRank: i
							}), s = v(n);
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
						const c = await Object(h.p)(o(), {
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
						const i = await Object(h.n)(d(), {
								optionId: t,
								postId: r
							}),
							{
								resolvePrediction: o
							} = i.body.data;
						if (!(null == o ? void 0 : o.poll)) throw new Error("Failed to resolve prediction");
						return e(H({
							pollId: r,
							prediction: o.poll
						})), o.poll
					}
				}, W = Object(I.a)(R.k), Y = Object(I.a)(R.m), X = Object(I.a)(R.l), Z = Object(I.a)(R.n), ee = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						i = Object(A.I)(d, e);
					if (Object(k.k)(d, {
							subredditId: i
						})) return Object(k.g)(d, {
						subredditId: i
					});
					t(W({
						subredditId: i
					}));
					const o = await Object(h.k)(s(), {
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
								e && (c[e.id] = Object(T.f)(e))
							}), e.winners) {
							const r = v(e.winners);
							t(G({
								tournamentId: e.tournamentId,
								leaderboard: r
							}))
						}
					});
					const a = o.map(e => Object(S.a)(e));
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
						i = Object(A.I)(d, e),
						o = await Object(h.l)(s(), {
							subredditName: e,
							isLatestOnly: !0
						});
					t(re(i, o))
				}, re = (e, t) => r => {
					const n = t.map(e => Object(S.a)(e));
					r(Y({
						subredditId: e,
						tournaments: n
					}))
				}, ne = Object(I.a)(R.a), se = Object(I.a)(R.q), de = Object(I.a)(R.r), ie = (e, t, r, n) => async (s, d, i) => {
					let {
						gqlContext: o
					} = i;
					const c = d(),
						a = Object(L.b)(c);
					let u = null;
					if (!a) throw new Error("Failed to create tournament, no prediction drafts attached");
					if (n instanceof File) {
						const {
							mediaId: t,
							mimeType: r
						} = await s(O(`icon_pred_${e}`, n));
						await Object(_.a)(3e3), u = {
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
					const l = await Object(h.e)(o(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: p.Q.Tokens,
							tokenIcon: u
						}),
						b = Object(S.a)(l);
					s(ce(b))
				}, oe = (e, t) => async (r, n, d) => {
					let {
						gqlContext: i
					} = d;
					const o = Object(L.b)(n());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(h.a)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${Object(s.a)()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						a = Object(S.a)(c);
					r(ce(a))
				}, ce = Object(I.a)(R.g), ae = (e, t, r) => async (t, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = await Object(h.o)(d(), {
							tournamentId: e,
							name: r
						}),
						o = Object(S.a)(i);
					t(ce(o))
				}, ue = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = await Object(h.f)(s(), {
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
					const d = await Object(h.g)(s(), {
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
					const d = await Object(h.h)(s(), {
						tournamentId: e
					});
					if (!d.ok || d.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = d.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, me = e => {
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
				}, pe = e => async (t, r) => {
					const n = r();
					Object(N.R)(n) ? await t(Object(x.h)(C.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(E.openLoginModal)())
				}, fe = () => Object(x.g)(C.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Oe = e => async (t, r, s) => {
					let {
						gqlContext: d
					} = s;
					try {
						const r = await Object(h.b)(d(), {
							postId: e
						});
						t(J({
							postId: e,
							prediction: r
						}));
						const s = Object(g.e)(n.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), j.b.SuccessMod);
						t(Object(g.f)(s))
					} catch {
						const e = Object(g.e)(n.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), j.b.Error);
						t(Object(g.f)(e))
					}
				};

			function ge(e, t) {
				return async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const i = await Object(h.c)(d(), {
						postId: e,
						...t
					});
					return r(J({
						postId: e,
						prediction: i
					})), i
				}
			}
			const je = e => async (t, r, n) => {
				let {
					gqlContext: s
				} = n;
				return Object(h.m)(s(), {
					subredditId: e
				})
			}
		},
		"./src/reddit/actions/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return I
			})), r.d(t, "k", (function() {
				return h
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "o", (function() {
				return L
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return D
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
			const m = e => {
				return e.reduce((e, t) => (e[t.provider] = t, e), {})
			};
			var p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/models/User/index.ts"),
				O = r("./src/reddit/selectors/externalAccount.ts"),
				g = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts");
			const I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				h = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				v = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				S = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				E = Object(s.a)(I),
				x = Object(s.a)(h),
				C = Object(s.a)(v),
				w = Object(s.a)(y),
				A = Object(s.a)(T),
				N = Object(s.a)(S),
				L = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const d = r(),
						i = Object(_.l)(d),
						o = e || i && Object(f.e)(i);
					if (!o) return;
					if (Object(O.d)(d, {
							username: o
						})) return;
					t(E(o));
					const p = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.ob.GET
					}))(s(), o);
					if (p.ok) {
						const e = m(p.body);
						t(x({
							username: o,
							accountsData: e
						}))
					} else t(C(p.error))
				}, k = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						d = Object(g.d)(s);
					if (!d) return;
					const i = s.externalAccount.api.subreddit.fetched[d],
						o = s.externalAccount.api.subreddit.pending[d];
					if (i || o) return;
					const p = Object(j.z)(s, {
						subredditName: d
					});
					if (!(p && p.hasExternalAccount)) return;
					e(w(d));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.ob.GET
					}))(n(), d);
					if (f.ok) {
						const t = m(f.body);
						e(A({
							subredditName: d,
							accountsData: t
						}))
					} else e(N(f.error))
				}, R = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", P = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", D = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(s.a)(R), G = Object(s.a)(P), F = Object(s.a)(D), M = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(U({
						provider: e
					}));
					const d = Object(_.l)(r()),
						i = Object(f.e)(d),
						o = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.ob.POST
						}))(s(), e);
					o.ok ? t(G({
						provider: e,
						username: i
					})) : t(F({
						provider: e,
						error: o.error
					}))
				}, q = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", H = Object(s.a)(q), J = Object(s.a)(B), z = Object(s.a)(Q), K = e => async (t, r, s) => {
					let {
						apiContext: m
					} = s;
					t(H({
						provider: e
					}));
					const f = Object(d.a)(window.location.href, {
							[o.d]: e
						}),
						O = await ((e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: c.ob.POST,
							data: {
								redirect_url: r
							}
						}))(m(), e, f);
					if (O.ok) {
						const {
							redirect_url: r
						} = O.body;
						t(J({
							provider: e
						})), window.location.href = r
					} else t(z({
						provider: e,
						error: O.error
					})), t(Object(i.f)({
						kind: p.b.Error,
						text: n.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "196FiB"
						})
					}))
				}
		},
		"./src/reddit/actions/gold/achievementFlairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditAchievementFlairs.json");
			const a = (e, t) => Object(o.a)(e, {
				...c,
				variables: {
					subredditId: t
				}
			}, {
				traceRequestName: "subreddit_achievement_flairs"
			});
			var u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./node_modules/reselect/es/index.js"),
				b = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(l.a)(e => Object(m.c)(e, {
				experimentName: b.td,
				experimentEligibilitySelector: m.a
			}), e => e === b.Od);
			var f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				O = r("./src/reddit/actions/gold/constants.ts");
			const g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, i) => {
						let {
							gqlContext: o
						} = i;
						const c = s();
						if (!(!p(c) || null != Object(f.c)(c, {
								subredditId: e
							})) || t.forceLoad) {
							r(I());
							try {
								const t = await a(o(), e);
								if (!t.ok) return;
								const {
									errors: n,
									data: s
								} = t.body;
								if (null == n ? void 0 : n.length) return void(await r(y(n[0].message)));
								const d = j(s.subredditInfoById);
								_(r, e, d)
							} catch (u) {
								d.c.captureException(u), await r(y(n.fbt._("Something went wrong", null, {
									hk: "1IJNeH"
								})))
							}
						}
					}
				},
				j = e => {
					const {
						achievementFlairsStatus: t = {
							isEnabled: !1
						},
						subredditAchievementFlairs: r = []
					} = e || {};
					return {
						achievementFlairsStatus: t,
						subredditAchievementFlairs: r
					}
				},
				_ = (e, t, r) => e(h({
					subredditId: t,
					...r
				})),
				I = Object(s.a)(O.hb),
				h = Object(s.a)(O.gb),
				v = Object(s.a)(O.fb),
				y = e => async t => {
					await t(v(e)), t(Object(i.f)({
						kind: u.b.Error,
						duration: i.a,
						text: e
					}))
				}
		},
		"./src/reddit/actions/gold/customEmojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/gold/constants.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/SubredditCustomEmojis.json");
			const u = (e, t) => Object(c.a)(e, {
				...a,
				variables: {
					subredditId: t
				}
			}, {
				traceRequestName: "subreddit_custom_emojis"
			});
			var l = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/gold/powerups/index.ts");
			const p = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, i) => {
						let {
							gqlContext: o
						} = i;
						const c = s();
						if (!(!Object(b.f)(c) || null != Object(m.a)(c, {
								subredditId: e
							})) || t.forceLoad) {
							r(g());
							try {
								const t = await u(o(), e);
								if (!t.ok) return;
								const {
									errors: n,
									data: s
								} = t.body;
								if (null == n ? void 0 : n.length) return void(await r(I(n[0].message)));
								const d = f(s.subredditInfoById);
								O(r, e, d)
							} catch (a) {
								d.c.captureException(a), await r(I(n.fbt._("Something went wrong", null, {
									hk: "1IJNeH"
								})))
							}
						}
					}
				},
				f = e => {
					const {
						customEmojisStatus: t = {
							isEnabled: !1
						},
						customEmojis: r = {}
					} = e || {};
					return {
						customEmojisStatus: t,
						customEmojis: r
					}
				},
				O = (e, t, r) => e(j({
					subredditId: t,
					...r
				})),
				g = Object(s.a)(i.kb),
				j = Object(s.a)(i.jb),
				_ = Object(s.a)(i.ib),
				I = e => async t => {
					await t(_(e)), t(Object(o.f)({
						kind: l.b.Error,
						duration: o.a,
						text: e
					}))
				}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return g
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "f", (function() {
				return U
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/endpoints/gold/powerups/index.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/gold/powerups/index.ts"),
				p = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/actions/gold/constants.ts");
			const g = e => async (t, r, s) => {
				let {
					gqlContext: i
				} = s;
				if (!!r().user.powerups.fetched && !e) return;
				t(j());
				const o = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const e = await Object(u.g)(i());
					if (e.ok) {
						const r = e.body;
						if (r.errors && r.errors.length) return void(await t(h(o)));
						if (!r.data.identity) return void(await t(I(o)));
						await t(_({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (c) {
					d.c.captureException(c), await t(h(o))
				}
			}, j = Object(s.a)(O.zb), _ = Object(s.a)(O.yb), I = Object(s.a)(O.xb), h = e => async (t, r) => {
				await t(I(e)), t(Object(c.f)({
					kind: l.b.Error,
					duration: c.a,
					text: e
				}))
			}, v = (e, t) => async (e, r, s) => {
				let {
					gqlContext: i
				} = s;
				var o;
				if (!!r().users.powerups.fetched) return;
				e(y());
				const c = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(u.d)(i(), t);
					if (r.ok) {
						const n = r.body;
						if (n.errors && n.errors.length) return void(await e(E(c)));
						if (!n.data.redditorInfoById) return void(await e(S(c)));
						const s = (null === (o = n.data.redditorInfoById.powerups) || void 0 === o ? void 0 : o.supportedSubreddits) || [];
						await e(T({
							supportedSubreddits: s,
							userId: t
						}))
					}
				} catch (a) {
					d.c.captureException(a), await e(E(c))
				}
			}, y = Object(s.a)(O.Z), T = Object(s.a)(O.Y), S = Object(s.a)(O.X), E = e => async (t, r) => {
				await t(S(e)), t(Object(c.f)({
					kind: l.b.Error,
					duration: c.a,
					text: e
				}))
			}, x = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return async (r, s, i) => {
					let {
						gqlContext: o
					} = i;
					var c;
					const a = s();
					if (Object(m.e)(a, {
							subredditId: e
						}) && Object(p.a)(a, {
							subredditId: e
						}) && !t.forceLoad) return;
					r(A());
					const l = t.fullData ? u.f : u.e;
					try {
						const n = await l(o(), e, !!t.includeIdentity, Object(b.g)(a), Object(b.f)(a));
						if (n.ok) {
							const s = n.body;
							if (null === (c = s.errors) || void 0 === c ? void 0 : c.length) return void(await r(R(s.errors[0].message)));
							if (t.fullData) {
								const {
									data: t
								} = s, n = C(t.subredditInfoById, t.identity);
								w(r, e, n)
							} else {
								const {
									powerups: t = null,
									powerupsSettings: n = null
								} = s.data.subredditInfoById || {};
								await r(N({
									powerups: t,
									subredditId: e,
									benefitStatuses: null == n ? void 0 : n.benefitStatuses
								}))
							}
						}
					} catch (f) {
						d.c.captureException(f), await r(R(n.fbt._("Something went wrong", null, {
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
			}, w = (e, t, r) => e(L({
				subredditId: t,
				...r
			})), A = Object(s.a)(O.pb), N = Object(s.a)(O.ob), L = Object(s.a)(O.nb), k = Object(s.a)(O.mb), R = e => async (t, r) => {
				await t(k(e)), t(Object(c.f)({
					kind: l.b.Error,
					duration: c.a,
					text: e
				}))
			}, P = () => async (e, t) => {
				const r = t();
				return Object(f.l)(r) ? e(Object(o.h)(a.a.ACHIEVEMENT_FLAIR)) : e(Object(i.openLoginModal)())
			}, D = Object(s.a)(O.L), U = (e, t) => async (r, n, s) => {
				let {
					gqlContext: d
				} = s;
				const i = await Object(u.h)(d(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (i.ok) {
					const t = i.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(D({
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
				return v
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "d", (function() {
				return R
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
			var m = e => {
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
				p = r("./src/reddit/models/SubredditModeration/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/models/User/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/actions/grantUserFlair/constants.ts");
			const _ = Object(s.a)(j.i),
				I = Object(s.a)(j.g),
				h = Object(s.a)(j.f),
				v = (e, t) => async (r, s, i) => {
					let {
						gqlContext: c
					} = i;
					const u = t && t.after || "",
						l = t && t.before || "",
						b = Object(g.I)(s(), e),
						O = Object(p.e)(b, u, l);
					if (!!s().pages.modHub.flairedUsers.userOrder[O]) return;
					r(_());
					const j = await ((e, t, r) => Object(d.a)(e, {
						...o,
						variables: {
							subredditName: t,
							...r
						}
					}))(c(), e, t);
					if (j.ok) {
						const e = {
							...m(j.body),
							key: O
						};
						r(I(e))
					} else {
						const e = j.error;
						r(h(e)), r(Object(a.f)({
							kind: f.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							})
						}))
					}
				}, y = Object(s.a)(j.l), T = Object(s.a)(j.k), S = Object(s.a)(j.j), E = (e, t) => async (r, s, o) => {
					let {
						gqlContext: c
					} = o;
					const u = Object(g.Y)(s(), {
						subredditId: e
					}).name;
					r(y());
					const l = await ((e, t, r) => Object(d.a)(e, {
						...i,
						variables: {
							subredditName: t,
							name: r
						}
					}))(c(), u, t);
					if (l.ok) {
						const e = b(l.body);
						r(T(e))
					} else r(S(l.error)), r(Object(a.f)({
						kind: f.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})
					}))
				}, x = Object(s.a)(j.e), C = Object(s.a)(j.c), w = Object(s.a)(j.d), A = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					const o = s(),
						u = Object(g.Y)(o, {
							subredditId: t
						}).name;
					r(x());
					const l = await Object(c.a)(i(), e, u);
					if (l.ok) {
						r(C({
							userName: e,
							subredditId: t
						}));
						const s = Object(a.e)(n.fbt._("User flair cleared", null, {
							hk: "4yyH00"
						}), f.b.SuccessMod);
						r(Object(a.f)(s))
					} else {
						r(w());
						const s = Object(a.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "uG2KO"
						}), f.b.Error, n.fbt._("Retry", null, {
							hk: "3oiY99"
						}), A(e, t));
						r(Object(a.f)(s))
					}
					return l.ok || l.error
				}, N = Object(s.a)(j.h), L = Object(s.a)(j.b), k = Object(s.a)(j.a), R = (e, t, r) => async (s, d, i) => {
					let {
						apiContext: o
					} = i;
					const l = d(),
						b = l.pages.modHub.flairedUsers.search.result === e && !l.pages.modHub.flairedUsers.models[e],
						m = {
							userName: e,
							subredditId: t,
							applied: r
						},
						p = r && r.templateId,
						j = Object(g.Y)(l, {
							subredditId: t
						}),
						_ = r && Object(u.g)(r),
						I = r ? r.cssClass : void 0,
						h = await Object(c.g)(o(), e, j.name, p, _, I);
					if (h.ok) {
						if (b) {
							let e;
							Object.keys(l.pages.modHub.flairedUsers.userOrder).forEach(t => {
								!1 === l.pages.modHub.flairedUsers.pageInfo[t].hasNextPage && l.pages.modHub.flairedUsers.userOrder[t].length < 50 && (e = t)
							});
							const t = {
								...m,
								key: e
							};
							s(k(t))
						}
						e === (l.user.account && Object(O.e)(l.user.account)) ? s(N(m)) : b || s(L(m))
					} else {
						const e = Object(a.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4hXQvr"
						}), f.b.Error);
						s(Object(a.f)(e))
					}
					return h.ok || h.error
				}
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return v
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
				m = "META__META_RECEIVED",
				p = (Object(d.a)(m), "META__SET_LOCALE"),
				f = Object(d.a)(p),
				O = e => async (t, r, d) => {
					let {
						apiContext: l
					} = d;
					if (!e) return;
					const b = r(),
						m = l();
					let p;
					if (t(f(e)), Object(n.isPseudoLocale)(e) ? (Object(u.O)(b) || Object(a.b)(b)) && (p = e) : p = Object(n.isoLocaleToR2Language)(e), !p) return;
					const O = new URL(window.location.href);
					Object(u.R)(b) ? Object(n.isPseudoLocale)(p) ? O.searchParams.set("locale", p) : (await Object(i.a)(Object(o.a)(m, [c.a]), {
						data: {
							lang: p
						},
						endpoint: `${m.apiUrl}/api/v1/me/prefs`,
						method: s.ob.PATCH,
						type: "json"
					}), O.searchParams.delete("locale")) : O.searchParams.delete("locale"), window.location.href = O.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(d.a)(g), _ = "META__PWA_ENTERED", I = "META__PWA_LEFT", h = Object(d.a)(_), v = Object(d.a)(I)
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
							e(Object(s.R)(r))
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
				return m
			})), r.d(t, "skipOnboardingModal", (function() {
				return p
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
			}, b = Object(n.a)(d.a), m = Object(n.a)(d.c), p = Object(n.a)(d.b);
			t.default = () => async (e, t) => {
				const r = t();
				Object(u.d)(r) && e(Object(s.openD2xOnboardingModal)())
			}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return R
			})), r.d(t, "PAGE_LOADED", (function() {
				return P
			})), r.d(t, "PAGE_FAILED", (function() {
				return D
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
				m = r("./src/reddit/actions/platform.ts"),
				p = r("./src/reddit/actions/post.ts"),
				f = r("./src/reddit/actions/postCreation/general.ts"),
				O = r("./src/reddit/actions/profile/index.ts"),
				g = r("./src/reddit/actions/subreddit.ts"),
				j = r("./src/reddit/actions/subredditDuplicates.ts"),
				_ = r("./src/config.ts"),
				I = r("./src/lib/constants/index.ts"),
				h = r("./src/lib/makeApiRequest/index.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				T = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				E = r("./src/reddit/selectors/contentControls.ts"),
				x = r("./src/reddit/selectors/postCollection.ts"),
				C = r("./src/reddit/selectors/postCreations.ts"),
				w = r("./src/reddit/selectors/posts.ts"),
				A = r("./src/reddit/selectors/profile.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts");
			const k = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, s = Object(N.C)(e, {
							subredditName: n
						});
						s && (r = s.name)
					}
					return Object(c.p)(r)
				},
				R = "POST_CREATION__PAGE_PENDING",
				P = "POST_CREATION__PAGE_LOADED",
				D = "POST_CREATION__PAGE_FAILED",
				U = Object(i.a)(R),
				G = Object(i.a)(P),
				F = Object(i.a)(D),
				M = () => async (e, t) => {
					const r = t(),
						n = Object(C.a)(r);
					n !== Object(C.mb)(r) && e(Object(f.g)({
						submissionType: n
					}))
				}, q = e => async (t, r, n) => {
					const {
						collectionId: s,
						profileName: i,
						subredditName: c
					} = e, u = Object(o.a)(e), m = r(), p = m.creations.api.page.pending[u], f = m.creations.api.page.fetched[u], j = m.creations.api.page.error[u];
					if (p) return;
					if (f && !j) return void t(M());
					const y = [];
					t(U({
						key: u
					}));
					let x = c;
					!c && i && (x = `u_${i}`), y.push(((e, t) => Object(h.a)(e, {
						method: I.ob.GET,
						endpoint: Object(v.a)(`${_.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: x,
						collectionId: s
					})), i && (y.push(t(O.d(i))), y.push(t(O.b(i))));
					const [C] = await Object(T.a)("postCreation", () => Promise.all(y));
					if (C.ok) {
						const e = C.body,
							{
								posts: n = {},
								subredditAboutInfo: s
							} = e;
						if (t(G({
								key: u,
								meta: m.meta,
								...e,
								posts: n
							})), !Object(L.R)(r())) return;
						if (s) {
							const e = Object.keys(s)[0];
							await t(Object(b.e)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(M());
						const i = [];
						i.push(t(l.o()));
						const o = Object(L.l)(r());
						if (o && o.hasUserProfile && i.push(t(O.d(Object(S.e)(o)))), c && !Object(d.a)(c)) {
							i.push(t(g.o(c))), !!Object(E.b)(r(), {
								subredditName: c
							}) || i.push(t(Object(a.a)(c)))
						}
						await Promise.all(i)
					} else t(F({
						error: C.error,
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
						})), !Object(L.R)(r())) return void Object(y.a)(t, r());
					let a;
					if (d ? (a = Object(N.C)(r(), {
							subredditName: d
						}), await t(Object(u.a)({
							subredditName: d
						}))) : i && (a = Object(A.k)(r(), {
							profileName: i
						})), o.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: d
						} = e, i = [];
						let o;
						s ? o = Object(N.I)(n(), s) : d && (o = Object(L.nb)(n(), {
							userName: d
						})), o && i.push(r(Object(j.b)(o, t))), i.push(r(Object(p.Q)(t))), await Promise.all(i);
						const c = Object(w.f)(n(), {
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
					t(m.m({
						title: k(r())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return m
			})), r.d(t, "PAGE_LOADED", (function() {
				return p
			})), r.d(t, "PAGE_FAILED", (function() {
				return f
			})), r.d(t, "pagePending", (function() {
				return O
			})), r.d(t, "pageLoaded", (function() {
				return g
			})), r.d(t, "pageFailed", (function() {
				return j
			})), r.d(t, "postDraftPageDataRequested", (function() {
				return _
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
			const m = "POST_DRAFT__PAGE_PENDING",
				p = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				O = Object(n.a)(m),
				g = Object(n.a)(p),
				j = Object(n.a)(f),
				_ = e => async (t, r, n) => {
					const {
						draftId: m,
						profileName: p
					} = e, f = Object(s.a)(e), O = r(), _ = O.creations.api.page.pending[f], I = O.creations.api.page.fetched[f], h = O.creations.api.page.error[f];
					if (_ || I && !h || !m) return;
					t(d.d(p));
					const v = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: o.ob.GET
					}))(n.apiContext(), m, p));
					if (v.ok) {
						const e = v.body;
						e.drafts[m].kind = Object(l.b)(e.drafts[m].kind), t(g({
							...e,
							key: f
						}))
					} else t(j({
						error: v.error,
						key: f
					}))
				}, I = e => async (t, r, n) => {
					await t(_(e.params))
				}
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isGQLSubredditPageExtra", (function() {
				return st
			})), r.d(t, "handleSubredditPageApiError", (function() {
				return dt
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return it
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return ot
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return ct
			})), r.d(t, "subredditPending", (function() {
				return at
			})), r.d(t, "subredditLoaded", (function() {
				return ut
			})), r.d(t, "subredditFailed", (function() {
				return lt
			})), r.d(t, "subredditDataRequested", (function() {
				return bt
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return mt
			})), r.d(t, "makeSubredditPageKey", (function() {
				return ft
			})), r.d(t, "subredditRequested", (function() {
				return Ot
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return gt
			})), r.d(t, "subredditInvalidateListing", (function() {
				return jt
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeRequest/index.ts"),
				d = r("./node_modules/lodash/find.js"),
				i = r.n(d),
				o = r("./node_modules/lodash/pick.js"),
				c = r.n(o),
				a = r("./node_modules/react-router-redux/es/index.js"),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/countrySites/index.ts"),
				b = r("./src/lib/isAdHocMultireddit/index.ts"),
				m = r("./src/lib/isFakeSubreddit/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/makeListingKey/index.ts"),
				O = r("./src/lib/makeSearchKey/index.ts"),
				g = r("./src/lib/pageTitle/index.ts"),
				j = r("./src/lib/pageTitle/helpers.ts"),
				_ = r("./src/lib/performanceTimings/index.tsx"),
				I = r("./src/lib/safeGet/index.ts"),
				h = r("./src/reddit/actions/ads/index.ts"),
				v = r("./src/reddit/actions/communityFlairs/index.ts"),
				y = r("./src/reddit/actions/contentGate.ts"),
				T = r("./src/reddit/actions/discoveryUnit.ts"),
				S = r("./src/reddit/actions/economics/helpers/async.ts"),
				E = r("./src/reddit/actions/economics/predictions/index.ts"),
				x = r("./src/reddit/actions/externalAccount.ts"),
				C = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				w = r("./src/reddit/actions/gold/customEmojis.ts"),
				A = r("./src/reddit/actions/gold/powerups.ts"),
				N = r("./src/reddit/actions/grantUserFlair/index.ts"),
				L = r("./src/reddit/actions/meta.ts"),
				k = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				R = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				P = r("./src/reddit/actions/onboarding/index.ts"),
				D = r("./src/reddit/actions/pages/search/index.ts"),
				U = r("./src/reddit/actions/platform.ts"),
				G = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				F = r("./src/reddit/actions/seo/linksModule.ts"),
				M = r("./src/reddit/actions/seo/topicLinks.ts"),
				q = r("./src/lib/makeGqlRequest/index.ts"),
				B = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				Q = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				H = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				J = r("./src/reddit/selectors/widgets.ts");
			const z = (e, t) => async (r, n) => {
				const s = n(),
					d = Object(H.Y)(s, {
						subredditId: e
					}),
					i = Object(J.j)(s, {
						subredditId: e
					});
				d.isNSFW || (null == i ? void 0 : i.length) > 0 && i.some(e => "community-list" === e) || r(Object(F.e)({
					id: e,
					data: t
				}))
			}, K = (e, t) => async r => {
				t && r(Object(M.b)({
					id: e,
					data: t
				}))
			};
			var V = r("./src/reddit/actions/structuredStyles/index.ts"),
				$ = r("./src/reddit/actions/subreddit.ts"),
				W = r("./src/reddit/actions/toaster.ts"),
				Y = r("./src/reddit/helpers/localStorage/index.ts"),
				X = r("./src/reddit/models/Subreddit/index.ts"),
				Z = r("./src/reddit/models/Toast/index.ts"),
				ee = r("./src/reddit/routes/postCreation/constants.ts"),
				te = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				re = r("./src/reddit/selectors/platform.ts"),
				ne = r("./src/reddit/selectors/user.ts");
			const se = () => async (e, t, r) => {
				const n = t(),
					s = Object(re.e)(n);
				if (!s || s.type !== X.g.Public) return;
				const d = s.name,
					i = Object(re.m)(n),
					o = Object(H.z)(n, {
						subredditName: d
					});
				if (!o) return;
				const {
					activity7Day: c
				} = o, u = !!c && c >= 51 && c <= 100, l = !d || Object(m.a)(d), b = i && i.urlParams.subredditName === d, p = Object(ne.R)(n), f = Object(te.c)(n, {
					subredditId: Object(H.I)(n, d)
				});
				if (l || b || Object(Y.E)() || !u || !p || f) return;
				const O = Object(J.d)(t(), {
					subredditName: d
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(W.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${d}${ee.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: Z.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(Y.Hb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${d} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var de = r("./src/reddit/actions/subreddit/questions.ts"),
				ie = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				oe = r("./src/reddit/actions/subredditSettings.ts"),
				ce = r("./src/reddit/actions/tags/index.ts"),
				ae = r("./src/reddit/actions/userFlair/userFlair.ts"),
				ue = r("./src/reddit/constants/history.ts"),
				le = r("./src/reddit/constants/page.ts"),
				be = r("./src/reddit/constants/parameters.ts"),
				me = r("./src/reddit/constants/postLayout.ts"),
				pe = r("./src/reddit/contexts/PageLayer/index.tsx"),
				fe = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				Oe = r("./src/reddit/endpoints/governance/posts.ts"),
				ge = r("./src/reddit/endpoints/page/subredditPage.ts"),
				je = r("./src/lib/base64/index.ts"),
				_e = r("./src/reddit/constants/experiments.ts"),
				Ie = r("./src/reddit/constants/graphql.ts"),
				he = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				ve = r("./src/reddit/selectors/adsSignals.ts"),
				ye = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				Te = r("./src/reddit/selectors/experiments/econ/index.ts"),
				Se = r("./src/reddit/selectors/experiments/onboarding.ts"),
				Ee = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var xe = r("./src/reddit/endpoints/profile/info.ts"),
				Ce = r("./src/reddit/helpers/canonicalUrls.ts"),
				we = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				Ae = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				Ne = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function Le(e) {
				let {
					econLeaderboards: t,
					identity: r,
					trendingSubreddits: n
				} = e;
				const s = t.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(Ne.b)(s, n, r)
			}
			var ke = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Re = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				Pe = r("./src/reddit/helpers/post/index.ts"),
				De = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				Ue = r("./src/reddit/helpers/trackers/feed.ts"),
				Ge = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Fe = r("./src/reddit/models/RichTextJson/index.ts"),
				Me = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				qe = r("./src/reddit/selectors/communityFlairs.ts"),
				Be = r("./src/reddit/selectors/experiments/countrySites.ts"),
				Qe = r("./src/reddit/helpers/chooseVariant/index.ts");
			var He = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Je = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ze = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Ke = r("./src/reddit/selectors/gold/powerups/index.ts"),
				Ve = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				$e = r("./src/reddit/selectors/moderatorPermissions.ts"),
				We = r("./src/reddit/selectors/multireddit.ts"),
				Ye = r("./src/reddit/selectors/posts.ts"),
				Xe = r("./src/lib/initializeClient/installReducer.ts"),
				Ze = r("./src/reddit/reducers/features/modUserNotes/index.ts"),
				et = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				tt = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				rt = r("./src/reddit/helpers/locales.ts"),
				nt = r("./src/reddit/selectors/meta.ts");

			function st(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object(Xe.a)({
				features: {
					modUserNotes: Ze.a
				}
			});
			const dt = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: n,
							reason: s
						}
					} = e, d = n ? n.account : void 0, i = n && n.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (s === X.f.NotFoundSubreddit) r(y.t({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (s === X.f.BannedSubreddit) {
						const e = n ? n.banMessage || n.ban_message : void 0;
						r(y.r({
							banMessage: e,
							account: d,
							features: i,
							subredditName: o
						}))
					}
					if (451 === e.status && r(y.s({
							account: d,
							features: i,
							subredditName: o
						})), 403 === e.status)
						if (s === X.f.GoldSubreddit) r(y.w({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (s === X.f.PrivateSubreddit) r(y.x({
						account: d,
						features: i,
						subredditDescription: n.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!n.isContributorRequestsDisabled,
						isContributorRequestTimestamp: n.isContributorRequestTimestamp ? parseInt(n.isContributorRequestTimestamp, 10) : void 0,
						subredditId: n.id
					}));
					else if (s === X.f.QuarantinedSubreddit) {
						const e = !n || void 0 === n.quarantineRequiresEmailOptin || n.quarantineRequiresEmailOptin;
						r(y.z({
							account: d,
							features: i,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: n.quarantineMessage,
							quarantineMessageHtml: n.quarantineMessageHtml || "",
							quarantineMessageRTJson: n.quarantineMessageRTJson || Fe.i
						}))
					} else if (s === X.f.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						} = n;
						r(y.v({
							account: d,
							features: i,
							subredditName: o,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						}))
					}
				}
			}, it = "PAGE__SUBREDDIT_PENDING", ot = "PAGE__SUBREDDIT_LOADED", ct = "PAGE__SUBREDDIT_FAILED", at = Object(p.a)(it), ut = Object(p.a)(ot), lt = Object(p.a)(ct), bt = (e, t, r, d) => async (o, c, a) => {
				var l, b, p, f, O, g, j, y, T, R, D, G, F, M, J, V, Y, X, ee, te, se, le, be, Ce, we;
				const Ae = c(),
					Ne = Object(ne.Q)(Ae) || Object(ne.R)(Ae);
				if (Object(I.a)(Ae.listings.postOrder.api.pending, e)) return;
				const Ge = null === (b = null === (l = Object(re.b)(Ae)) || void 0 === l ? void 0 : l.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					{
						currentPage: Fe
					} = Ae.platform,
					{
						countryCode: qe,
						languageCode: Je
					} = (null == Fe ? void 0 : Fe.urlParams) || {},
					ze = Object(m.a)(t, {
						countryCode: qe,
						languageCode: Je
					}),
					$e = Object(m.c)(t, {
						countryCode: qe,
						languageCode: Je
					}),
					We = (Object(m.b)(t, {
						countryCode: qe,
						languageCode: Je
					}) || $e) && Ae.posts.recent.length ? {
						...r,
						recentPostIds: Ae.posts.recent
					} : r;
				We.layout = me.e[Object(pe.S)(Ae, {})], $e && (We.forceGeopopular = !0), o(at({
					key: e
				}));
				const Ye = !ze && Object(re.l)(Ae) && Object(He.b)(Ae);
				let Xe;
				if (r.sort === u.bb.AWARDED && $e) Xe = Object(fe.a)(a.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: Le(t.data)
					}
				});
				else {
					const e = Ye ? () => Object(ge.b)(a.gqlContext(), Object(ge.c)(Ae, t, We, !0), Ne) : () => Object(ge.a)(a.apiContext(), t, We);
					Xe = Object(_.i)(e, {
						name: Ye ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ge,
						isLoggedIn: Ne
					})
				}
				const Ze = Object(H.X)(c(), {
						subredditId: Object(H.I)(c(), t)
					}).length > 0,
					it = Object(_.i)(() => (async function(e, t) {
						return Object(q.a)(e, {
							...Ee,
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
						var b, m;
						const p = Object(Se.c)(e),
							f = !!p && !Object(_e.tg)(p) && (d || p === _e.ub.Community),
							{
								adsSeenCount: O,
								totalPostsSeenCount: g,
								sessionStartTime: j
							} = Object(ve.a)(e),
							_ = Object(Te.f)(e),
							I = Object(Te.g)(e),
							h = Object(ye.c)(e),
							v = {
								subredditName: s,
								isFake: d,
								sort: u,
								adContext: {
									layout: o ? o.toUpperCase() : Ie.a.Card,
									clientSignalSessionData: {
										adsSeenCount: O,
										totalPostsSeenCount: g,
										sessionStartTime: j
									}
								},
								includeAchievementFlairs: !d && I,
								includeCustomEmojis: !d && _,
								includeIdentity: i,
								includeInterestTopics: f,
								includePowerups: !d,
								includeQuestions: i && !d,
								includeRules: !d && !a,
								includeRedditorKarma: i && !(null === (m = null === (b = e.user.account) || void 0 === b ? void 0 : b.karma) || void 0 === m ? void 0 : m.total),
								includeSubredditLinks: !i,
								includeSubredditRankings: h,
								includeTopicLinks: !i
							};
						return u && (v.sort = u.toUpperCase()), l && (v.range = l.toUpperCase()), n ? v.pageSize = Object(he.a)(o) : c && (v.pageSize = c), r && (v.after = Object(je.a)(r)), v
					})(Ae, {
						after: r.after,
						isLoggedIn: Ne,
						subredditName: t,
						hasRules: Ze,
						isFake: ze,
						isMobile: r.isMobile,
						layout: r.layout,
						limit: r.limit,
						sort: r.sort,
						t: r.t
					})), {
						name: "fetchSubredditPageExtra",
						page: Ge,
						isLoggedIn: Ne
					}),
					ot = Object(et.a)();
				let ct, mt;
				Ye ? ct = await Xe : [ct, mt] = await Promise.all([Xe, it]);
				const pt = mt && Object(s.c)(mt) ? mt.body.data : null,
					ft = ct.body,
					Ot = (null == ft ? void 0 : ft.subreddits) ? ((e, t) => {
						var r;
						return null === (r = i()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(ft.subreddits, t) : null;
				if (ft && !Ye) {
					const e = await Object(Pe.a)(a.gqlContext, ft.posts);
					ft.posts = e;
					const t = await Object(tt.a)(a.apiContext(), ft.posts, Ae);
					t && (ft.posts = t)
				}
				o(U.n(ct.status));
				const gt = `error-${e}`,
					jt = ze || Ot;
				if (ct.ok && jt) {
					if (!ze && Ot) {
						if (Object(Te.g)(Ae)) {
							let e;
							e = Ye ? ft : Object(C.b)(null == pt ? void 0 : pt.subredditInfoByName), Object(C.a)(o, Ot, e)
						}
						if (Object(Te.f)(Ae)) {
							let e;
							e = Ye ? ft : Object(w.b)(null == pt ? void 0 : pt.subredditInfoByName), Object(w.a)(o, Ot, e)
						}
						let e;
						e = Ye ? ft.powerups : Object(A.b)(null == pt ? void 0 : pt.subredditInfoByName, null == pt ? void 0 : pt.identity);
						const t = (null === (f = null === (p = null == ft ? void 0 : ft.subredditAboutInfo) || void 0 === p ? void 0 : p[Ot]) || void 0 === f ? void 0 : f.detectedLanguage) || (null === (O = null == pt ? void 0 : pt.subredditInfoByName) || void 0 === O ? void 0 : O.detectedLanguage);
						Object(nt.d)(Ae) && t && Object(Be.f)(Ae) && await Object(rt.a)(t, o), ft.subredditAboutInfo[Ot].detectedLanguage = t, Object(A.a)(o, Ot, e), Ye ? o(Object(E.n)(Ot, ft.predictionTournaments || [])) : (null == pt ? void 0 : pt.subredditInfoByName) && o(Object(E.n)(Ot, pt.subredditInfoByName.predictionTournaments || [])), Object(Ke.b)(c(), {
							subredditId: Ot
						}) && (e => Object(Qe.c)(e, {
							experimentName: _e.wd,
							experimentEligibilitySelector: ne.R
						}))(c())
					}
					let n;
					ft.geoFilter && o(Object(L.k)(ft.geoFilter));
					const s = ft.postIds.filter(e => !!ft.posts[e].isMeta);
					if (s.length && Ot) {
						const e = Object(_.i)(() => Object(Oe.a)(a.apiContext(), Ot, s), {
								name: "getGovernanceData",
								page: Ge,
								isLoggedIn: Ne
							}),
							t = await e;
						t.ok && (n = t.body)
					}
					if (Ot) {
						const e = (null === (j = null === (g = null == ft ? void 0 : ft.subredditAboutInfo) || void 0 === g ? void 0 : g[Ot]) || void 0 === j ? void 0 : j.isEligibleForContentBlocking) || (null === (y = null == pt ? void 0 : pt.subredditInfoByName) || void 0 === y ? void 0 : y.isEligibleForContentBlocking);
						ft.subredditAboutInfo[Ot].isEligibleForContentBlocking = e;
						const t = (null === (R = null === (T = null == ft ? void 0 : ft.subredditAboutInfo) || void 0 === T ? void 0 : T[Ot]) || void 0 === R ? void 0 : R.isMediaInCommentsSettingShown) || (null === (D = null == pt ? void 0 : pt.subredditInfoByName) || void 0 === D ? void 0 : D.isMediaInCommentsSettingShown);
						ft.subredditAboutInfo[Ot].isMediaInCommentsSettingShown = t, ft.subredditAboutInfo[Ot].directoryRankings = null === (G = null == pt ? void 0 : pt.subredditInfoByName) || void 0 === G ? void 0 : G.directoryRankings
					}
					if (pt) {
						const e = null === (M = null === (F = pt.identity) || void 0 === F ? void 0 : F.redditor) || void 0 === M ? void 0 : M.karma,
							t = {
								karma: {
									...(null === (J = Ae.user.account) || void 0 === J ? void 0 : J.karma) || xe.a,
									...e
								}
							};
						ft.account && Object.assign(ft.account, t)
					}
					if (Ot) {
						let e, t;
						if (Ye) {
							const r = ft.subredditAboutInfo[Ot];
							e = null == r ? void 0 : r.notificationLevel, t = null == r ? void 0 : r.myRedditSettings
						} else if (st(pt)) {
							const r = pt.subredditInfoByName;
							e = null == r ? void 0 : r.notificationLevel, t = null == r ? void 0 : r.myRedditSettings
						}
						ft.subredditAboutInfo[Ot].notificationLevel = e, ft.subredditAboutInfo[Ot].myRedditSettings = t
					}
					if (Ot) {
						let e;
						st(pt) && (e = null === (V = pt.subredditInfoByName) || void 0 === V ? void 0 : V.isMuted), ft.subredditAboutInfo[Ot].isMuted = e
					}
					const i = null === (Y = ft.subredditPermissions) || void 0 === Y ? void 0 : Y.posts;
					!Ye && i && o(Object(k.a)({
						postIds: ft.postIds
					}));
					let u = null == ft ? void 0 : ft.interestTopicRecommendations;
					if (!u && (null == pt ? void 0 : pt.interestTopics)) {
						const e = Object(ke.a)(pt.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && o(Object(P.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), o(ut({
						key: e,
						meta: Ae.meta,
						governance: n,
						correlationId: ot,
						...ft,
						postIds: ft.postIds
					}));
					const l = null === (ee = null === (X = Object(re.b)(Ae)) || void 0 === X ? void 0 : X.locationState) || void 0 === ee ? void 0 : ee[ue.b.FeedLoadReason];
					if (Object(Ue.b)(r.isRefresh ? ue.a.UserRefresh : null != l ? l : ue.a.InitialLoad)(c()), !ze) {
						const e = Object(H.I)(c(), t);
						Ye && ft.subredditRules ? o($.t({
							rules: {
								rules: ft.subredditRules
							},
							subredditId: e
						})) : (null === (te = null == pt ? void 0 : pt.subreddit) || void 0 === te ? void 0 : te.rules) && o($.t({
							rules: Object(Re.a)(pt.subreddit.rules),
							subredditId: e
						}));
						const r = Object(v.c)(ft.posts, e),
							n = Object(v.b)(ft.structuredStyles),
							s = (n ? Object(v.d)(n) : []).concat(r);
						o(Object(v.a)(s, e))
					}
					if (d && o(W.g(gt)), o(Object(h.b)(Me.a.SUBREDDIT)), o(Object(x.p)()), Ot) {
						let e, r, n;
						if (Ye ? (e = ft.questions, r = ft.subredditLinks, n = ft.subredditTopicLinks) : (e = null == pt ? void 0 : pt.subredditInfoByName, r = Object(B.a)({
								data: {
									subredditInfoById: null == pt ? void 0 : pt.subredditInfoByName
								}
							}), n = Object(Q.a)({
								data: {
									subredditInfoById: null == pt ? void 0 : pt.subredditInfoByName
								}
							})), Object(de.a)(o, Ot, e), o(z(Ot, r)), o(K(Ot, n)), !Ye && (null === (le = null === (se = null == pt ? void 0 : pt.subredditInfoByName) || void 0 === se ? void 0 : se.elements) || void 0 === le ? void 0 : le.edges)) {
							const e = (null === (Ce = null === (be = null == pt ? void 0 : pt.subredditInfoByName) || void 0 === be ? void 0 : be.elements) || void 0 === Ce ? void 0 : Ce.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							o(Object(ie.e)({
								subredditId: Ot,
								nodes: e
							}))
						} else if (Ye && (null == ft ? void 0 : ft.postIds)) {
							const e = ft.postIds.map(e => null == ft ? void 0 : ft.posts[e].lastAuthorModNote);
							e && o(Object(ie.e)({
								subredditId: Ot,
								nodes: e
							}))
						}
						if (Ye && ft.appliedFlair) {
							const e = ft.appliedFlair;
							if ((null === (we = Ae.user.account) || void 0 === we ? void 0 : we.displayName) && e.flair && (o(Object(N.b)({
									subredditId: Ot,
									applied: e.flair,
									userName: Ae.user.account.displayName
								})), o(Object(ae.userFlairSaveTemplateSuccess)({
									subredditId: Ot,
									template: e.flair
								}))), e.displaySettings) {
								const t = e.displaySettings;
								o(Object(ae.userFlairAllowAssignOwnSettingSuccess)({
									subredditId: Ot,
									canAssignOwn: t.isSelfAssignable
								})), o(Object(ae.userFlairMutated)({
									subredditId: Ot,
									displaySettings: t
								}))
							}
						}
						const s = [Object(_.i)(() => o(Object(S.a)({
							subredditId: Ot,
							postIds: ft.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: Ge,
							isLoggedIn: Ne
						})];
						if (Object(Ve.a)(c(), {
								subredditId: Ot
							})) {
							const e = Object(_.i)(() => o(Object(oe.h)(t, Ot)), {
									name: "subredditSettingsRequested",
									isLoggedIn: Ne,
									page: Ge
								}),
								r = Object(_.i)(() => o(Object(ce.g)(Ot, De.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: Ne,
									page: Ge
								});
							s.push(e, r)
						}
						await Promise.all(s)
					}
				} else {
					const s = ct.ok ? void 0 : ct.error;
					if (Object(Ue.a)(s ? `${ct.status||"000"}: ${s.type}` : "000: UNKNOWN_ERROR")(c()), 403 === ct.status || 404 === ct.status || 451 === ct.status) return void o(dt(ct, t));
					o(lt({
						error: !ct.ok && ct.error || {
							type: u.L.NOT_FOUND_ERROR
						},
						key: e,
						...ft
					})), d && o(W.f({
						id: gt,
						kind: Z.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: bt(e, t, r, d)
					}))
				}
			}, mt = (e, t, r) => async (n, s) => {
				const d = s(),
					i = Object(f.a)(e, t.sort, t);
				Object(Ye.z)(d, {
					listingKey: i
				}).length > 0 || await n(bt(i, e, t, r))
			}, pt = (e, t, r, n) => {
				const s = Object(Be.b)(e);
				if (Object(m.a)(t, {
						countryCode: r,
						languageCode: n
					})) {
					if (Object(b.a)(t)) {
						return Object(We.a)(e, {
							listingName: t
						}).displayText
					}
					if (s) return Object(j.a)(e, Object(g.g)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case le.d.Popular:
							return "r/popular";
						case le.d.All:
							return "r/all"
					}
				}
				const d = Object(H.bb)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(H.z)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(j.a)(e, d, n)
				}
				return d
			}, ft = (e, t, r, n) => n ? Object(O.b)(e.subredditName, void 0, n) : Object(f.a)(e.subredditName, t, r), Ot = (e, t) => async (r, n) => {
				var s, d, i;
				const {
					countryCode: o,
					languageCode: b
				} = e.params, p = Object(l.e)(e.params), {
					styling: g
				} = e.queryParams, j = n(), y = Object(we.a)(e.params, j);
				if ("Popular" === p) return void r(Object(a.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === p) return void r(Object(a.c)(e.url.replace("r/All", "r/all")));
				const S = Object(O.d)(e.queryParams, Object(ne.lb)(j)),
					E = ft({
						subredditName: p,
						countryCode: o,
						languageCode: b
					}, y, e.queryParams, S),
					C = y,
					w = Object(I.a)(j.listings.postOrder.api.error, E),
					A = Object(I.a)(j.listings.postOrder.api.pending, E);
				let N = !!Object(I.a)(j.listings.postOrder.ids, E);
				const L = Object(I.a)(j.listings.postOrder.listingSort, E);
				L && L.hasChanged && (N = !1);
				let k = Object(H.I)(j, p);
				const P = (e, t) => "true" === g && ((e, t) => Object($e.b)(Ge.c.config)(e, {
						subredditId: t
					}) || Object($e.b)(Ge.c.flair)(e, {
						subredditId: t
					}))(e, t),
					F = be.N in e.queryParams && e.queryParams[be.N].toUpperCase() || "",
					M = F in u.oc && u.oc[F];
				if (A || N && !w && !t) {
					if (P(j, k) && r(V.i(k)), N) {
						const t = pt(n(), p, o, b);
						r(U.m({
							title: t
						})), (null === (s = j.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[E]) && r(U.o({
							correlationId: j.listings.postOrder.correlationIds[E]
						})), Object(Ce.g)(n(), r, e), window.addEventListener("load", () => {
							r(Object(x.p)())
						}), j.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(h.b)(Me.a.SUBREDDIT))
						}), r(se())
					}
					return void(Object(Je.e)(n()) && r(Object(R.a)()))
				}
				r(T.g());
				const q = null === (i = null === (d = Object(re.b)(j)) || void 0 === d ? void 0 : d.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
					B = Object(ne.R)(n()),
					Q = Object(_.i)(() => r(Object(G.c)(`r/${p}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: B,
						page: q
					});
				if (S) {
					const e = Object(_.i)(() => r(Object(D.d)(E, S, p)), {
						name: "searchDataRequested",
						isLoggedIn: B,
						page: q
					});
					await e
				} else {
					const t = {
						...c()(e.queryParams, [...be.p, ...be.o, be.k]),
						sort: C,
						t: Object(Ae.a)(C, M)
					};
					await r(bt(E, p, t, !0))
				}
				const J = j.platform.currentPage,
					z = Object(ze.d)(j, {
						pageLayer: J
					});
				if (Object(ze.a)(z) || Object(ze.b)(z) || Object(ze.c)(z)) {
					const e = Object(f.a)(p, u.bb.TOP, {
							t: u.oc.WEEK
						}),
						t = {
							sort: u.bb.TOP,
							t: u.oc.WEEK
						};
					await r(bt(e, p, t, !1))
				}
				if (Object(Je.e)(n()) && r(Object(R.a)()), k = k || Object(H.I)(n(), p), !Object(qe.a)(j, k) && !Object(m.a)(p, {
						countryCode: o,
						languageCode: b
					})) {
					const e = Object(_.i)(() => r(Object(v.e)(p)), {
						name: "getTopCommunityFlair",
						page: q,
						isLoggedIn: B
					});
					await e
				}
				P(n(), k) && r(V.i(k)), Object(Ce.g)(n(), r, e);
				const K = pt(n(), p);
				r(U.m({
					title: K
				})), r(se()), await Q
			}, gt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", jt = Object(p.a)(gt)
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
				return m
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "D", (function() {
				return f
			})), r.d(t, "s", (function() {
				return O
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "S", (function() {
				return x
			})), r.d(t, "R", (function() {
				return C
			})), r.d(t, "T", (function() {
				return w
			})), r.d(t, "U", (function() {
				return A
			})), r.d(t, "V", (function() {
				return N
			})), r.d(t, "W", (function() {
				return L
			})), r.d(t, "X", (function() {
				return k
			})), r.d(t, "Y", (function() {
				return R
			})), r.d(t, "Z", (function() {
				return P
			})), r.d(t, "r", (function() {
				return D
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
				return H
			})), r.d(t, "db", (function() {
				return J
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
				m = "POST_CREATION__TOGGLE_EDITOR_MODE",
				p = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				f = "POST_TITLE_FETCHED",
				O = "INITIALIZE_EDITOR_MODE",
				g = "POST_CREATION__CHANGE_FLAIR",
				j = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				_ = "POST_CREATION__CHANGE_LINK_BODY",
				I = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				h = "POST_CREATION__CHANGE_MEDIA_BODY",
				v = "POST_CREATION__CHANGE_RECAPTCHA",
				y = "POST_CREATION__CHANGE_RTE_STATE",
				T = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				S = "POST_CREATION__CHANGE_TITLE",
				E = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				C = "POST_CREATION__TOGGLE_IS_CHANGED",
				w = "POST_CREATION__TOGGLE_IS_GOV",
				A = "POST_CREATION__TOGGLE_IS_NSFW",
				N = "POST_CREATION__TOGGLE_IS_OC",
				L = "POST_CREATION__TOGGLE_IS_POLL",
				k = "POST_CREATION__TOGGLE_IS_SPOILER",
				R = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				P = "POST_CREATION__TOGGLE_SEND_REPLIES",
				D = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				U = "POST_CREATION__RESET_FORM",
				G = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				M = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				q = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				Q = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				J = "POST_CREATION__VALIDATION_FAILED",
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
				return w
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "e", (function() {
				return D
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
				return H
			})), r.d(t, "y", (function() {
				return J
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
				return me
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
				m = r("./src/redditGQL/operations/OpenAISubRecWithDetail.json");
			var p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				_ = r("./src/reddit/models/Subreddit/index.ts"),
				I = r("./src/reddit/routes/postCreation/constants.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				v = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				y = r("./src/reddit/selectors/postCollection.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				S = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				E = r("./src/reddit/actions/postCreation/constants.ts");
			const x = Object(o.a)(E.n),
				C = Object(o.a)(E.D),
				w = (Object(o.a)(E.s), e => {
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
				A = Object(o.a)(E.b),
				N = Object(o.a)(E.c),
				L = Object(o.a)(E.d),
				k = Object(o.a)(E.e),
				R = Object(o.a)(E.f),
				P = Object(o.a)(E.g),
				D = Object(o.a)(E.h),
				U = Object(o.a)(E.i),
				G = Object(o.a)(E.j),
				F = Object(o.a)(E.q),
				M = Object(o.a)(E.S),
				q = Object(o.a)(E.R),
				B = (Object(o.a)(E.T), Object(o.a)(E.U)),
				Q = Object(o.a)(E.V),
				H = Object(o.a)(E.W),
				J = Object(o.a)(E.X),
				z = Object(o.a)(E.Y),
				K = Object(o.a)(E.Z),
				V = Object(o.a)(E.cb),
				$ = Object(o.a)(E.bb),
				W = Object(o.a)(E.ab),
				Y = Object(o.a)(E.r),
				X = s()((e, t) => {
					Object(i.a)(t) && e((e => async (t, r, n) => {
						let {
							apiContext: s
						} = n;
						const d = await Object(u.e)(s(), e);
						d.ok && d.body && d.body.json && d.body.json.data && t(C(d.body.json.data))
					})(t))
				}, 500),
				Z = e => async t => {
					t(L(e)), X(t, e)
				}, ee = Object(o.a)(E.E), te = (e, t) => async (r, n) => {
					r(ee()), r(e ? Object(d.b)(I.b) : Object(d.b)(Object(T.cb)(n(), {
						pageLayer: t
					})))
				}, re = e => async t => {
					t(c.i(e))
				}, ne = e => async (t, r) => {
					const n = r(),
						s = Object(a.G)(e),
						d = Object(T.H)(n);
					if (s && d) {
						Object(h.a)(n) !== j.d && t(re(j.d))
					} else t(te(!1, e))
				}, se = e => async (t, r) => {
					const n = r();
					Object(y.m)(n, {
						subredditId: e
					}) ? t(c.i(j.a)) : t(c.i(j.c))
				}, de = Object(o.a)(E.B), ie = Object(o.a)(E.C), oe = Object(o.a)(E.z), ce = Object(o.a)(E.A), ae = e => async (t, r) => {
					Object(S.e)(r()) !== e && t(ce({
						isChanged: e
					}))
				}, ue = () => async (e, t) => {
					const r = t();
					if (Object(S.g)(r))
						if (Object(S.h)(r)) {
							const t = r.creations.formData.title,
								n = Object(S.l)(r),
								s = Object(S.k)(r),
								d = Object(S.b)(r);
							e(me(t, n, s, void 0, d))
						} else Object(S.j)(r) && !Object(S.d)(r) && e(pe())
				}, le = ["torrents", "IsolatedVocals"], be = ["askreddit", "teenagers"], me = (e, t, r, n, s) => async (d, i, o) => {
					let {
						apiContext: c,
						gqlContext: a
					} = o;
					const u = i();
					if (Object(S.i)(u)) return;
					d(ie());
					const l = Object(p.c)(p.a.PostComposer),
						j = await ((e, t, r, n, s, d) => Object(b.a)(e, {
							...m,
							variables: {
								title: t,
								body: r,
								link: n,
								correlationId: s,
								confidenceWeight: d
							}
						}))(a(), e, t, r, l, s),
						I = {};
					let h = {};
					const y = {},
						T = {},
						E = [];
					if (!j.body || !j.ok) return d(ae(!1)), void d(oe()); {
						const {
							data: e
						} = j.body, {
							subredditSuggestions: t
						} = e.openaiSubredditSuggestionsDetailed;
						let r = t.map(e => {
							const {
								subredditInfo: t,
								cVal: r,
								sVal: n
							} = e, s = t.name;
							return s && (T[s] = {
								confidence: r,
								succRate: n
							}), t
						}).filter(e => !le.includes(e.name));
						const s = (r = n ? r.filter(e => !n(e)) : r).slice(0, S.a),
							o = s.map(e => {
								const t = e.name;
								return E.push(t), t
							});
						if (Object(v.b)(u) && (e => {
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
						})), Object(g.G)(i()), void d(oe());
						s.forEach(e => {
							if (Object(_.k)(e)) {
								const t = Object(O.f)(e);
								y[t.id] = t
							} else if (e && Object.keys(e).length > 0) {
								const t = Object(O.a)(e),
									r = Object(f.a)(e);
								I[t.id] = t, h = {
									...h,
									...r
								}
							}
						})
					}
					d(ae(!1)), d(de({
						subreddits: I,
						subredditsAboutInfo: h,
						unavailableSubreddits: y,
						recSubsDict: T,
						recSubsOrder: E
					})), 0 === Object(S.c)(i()).length && d(oe())
				}, pe = () => async (e, t, r) => {
					let {
						apiContext: n,
						gqlContext: s
					} = r;
					const d = t();
					if (Object(S.i)(d)) return;
					e(ie());
					const i = {};
					let o = {};
					const c = {},
						a = {},
						u = [],
						m = await (e => Object(b.a)(e, {
							...l,
							variables: {
								recentSubreddits: []
							}
						}))(s());
					if (!m.ok || !m.body) return e(oe()), void e(ae(!1)); {
						const {
							data: e
						} = m.body;
						(e.whereToPostSuggestions.edges || []).forEach((e, t) => {
							if (t >= S.a) return;
							const r = e.node.subredditInfo;
							if (Object(_.k)(r)) {
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
					})), 0 === Object(S.c)(t()).length && e(oe())
				}
		},
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return h
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
				m = Object(n.a)(d.T),
				p = e => async (t, r) => {
					if (Object(o.a)(r())) return t(f(e))
				}, f = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = Object(c.k)(r()),
						o = Object(c.m)(r(), {
							subreddit: e
						}),
						m = o && o.lastUpdated || 0,
						p = 1e3 * d.global.rpan_config_refresh_rate;
					if (d.isPending || d.isPermanentlyCanceled || Date.now() < m + p) return;
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
					t(m()), await Object(i.h)(s(), e)
				}, g = e => async (t, r, n) => {
					let {
						apiContext: d
					} = n;
					r().posts.models[e] || await t(Object(s.L)(e))
				}, j = Object(n.a)(d.v), _ = Object(n.a)(d.J), I = Object(n.a)(d.K), h = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (Object(c.h)(s)) return;
					e(_());
					const d = await Object(i.d)(n());
					d.ok && d.body && d.body.data ? e(j({
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
				return K
			})), r.d(t, "l", (function() {
				return V
			})), r.d(t, "k", (function() {
				return $
			})), r.d(t, "j", (function() {
				return W
			})), r.d(t, "i", (function() {
				return Y
			})), r.d(t, "h", (function() {
				return X
			})), r.d(t, "d", (function() {
				return Z
			})), r.d(t, "p", (function() {
				return ne
			})), r.d(t, "t", (function() {
				return se
			})), r.d(t, "o", (function() {
				return oe
			})), r.d(t, "r", (function() {
				return ue
			})), r.d(t, "g", (function() {
				return le
			})), r.d(t, "f", (function() {
				return be
			})), r.d(t, "e", (function() {
				return me
			})), r.d(t, "q", (function() {
				return ge
			})), r.d(t, "b", (function() {
				return je
			})), r.d(t, "c", (function() {
				return _e
			})), r.d(t, "a", (function() {
				return Ie
			})), r.d(t, "u", (function() {
				return Te
			})), r.d(t, "n", (function() {
				return Se
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
				m = r("./src/reddit/actions/pages/subreddit.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				f = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				O = r("./src/reddit/actions/subredditRules/constants.ts"),
				g = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/constants/history.ts"),
				_ = r("./src/reddit/constants/modals.ts"),
				I = r("./src/reddit/constants/page.ts"),
				h = r("./src/reddit/constants/parameters.ts"),
				v = r("./src/reddit/constants/postLayout.ts"),
				y = r("./src/reddit/contexts/PageLayer/index.tsx"),
				T = r("./src/reddit/endpoints/governance/posts.ts"),
				S = r("./src/reddit/endpoints/messages/index.ts"),
				E = r("./src/reddit/endpoints/modQueue/index.ts"),
				x = r("./src/reddit/endpoints/page/subredditPage.ts"),
				C = r("./src/reddit/endpoints/subreddit/about.ts"),
				w = r("./src/reddit/endpoints/subreddit/rules.ts"),
				A = r("./src/reddit/endpoints/user/preferences.ts"),
				N = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				L = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				k = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				R = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				P = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				D = r("./src/reddit/helpers/trackers/feed.ts"),
				U = r("./src/reddit/models/Subreddit/index.ts"),
				G = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				F = r("./src/reddit/models/Toast/index.ts"),
				M = r("./src/reddit/models/User/index.ts"),
				q = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				B = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = r("./src/reddit/selectors/profile.ts"),
				H = r("./src/reddit/selectors/subreddit.ts"),
				J = r("./src/reddit/selectors/user.ts");
			const z = {},
				K = "SUBREDDIT__MODEL_SUCCEEDED",
				V = "SUBREDDIT__MODEL_PENDING",
				$ = "SUBREDDIT__MODEL_FAILED",
				W = "SUBREDDIT__MORE_POSTS_PENDING",
				Y = "SUBREDDIT__MORE_POSTS_LOADED",
				X = "SUBREDDIT__MORE_POSTS_FAILED",
				Z = "SUBREDDIT__META_FILTER_TOGGLED",
				ee = Object(c.a)(W),
				te = Object(c.a)(Y),
				re = Object(c.a)(X),
				ne = Object(c.a)(Z),
				se = Object(c.a)(O.b),
				de = Object(c.a)(O.c),
				ie = Object(c.a)(O.a),
				oe = (e, t) => async (r, n) => {
					await (t === U.g.User ? r(ce(e)) : r(ae(e)))
				}, ce = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const d = Object(Q.o)(r(), e),
						i = await Object(w.c)(s(), e);
					if (i.ok) {
						const e = i.body;
						t(se({
							rules: e,
							subredditId: d
						}))
					}
				}, ae = e => async (t, r, s) => {
					let {
						gqlContext: d
					} = s;
					const i = Object(H.I)(r(), e);
					t(de());
					const o = await Object(w.b)(d(), e);
					if (o.ok) {
						const e = o.body;
						t(se({
							rules: e,
							subredditId: i
						}))
					} else {
						t(ie());
						const r = `error-block-${e}`;
						t(g.f({
							id: r,
							kind: F.b.Error,
							text: n.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, ue = e => async (t, r, n) => {
					let {
						apiContext: s,
						gqlContext: c
					} = n;
					const {
						subredditName: l
					} = e;
					let m = e.t;
					const p = r(),
						O = Object(k.a)(e, p),
						g = p.platform.currentPage ? p.platform.currentPage.queryParams : {},
						_ = Object(a.a)(l, O, {
							t: m,
							...g
						}),
						S = p.listings.postOrder.loadMore[_],
						E = p.listings.postOrder.listingSort[_];
					let C = O;
					if (E && !C) {
						const e = Object(o.d)(E.sort);
						C = e.sort, m = e.timeSort
					}
					const w = p.listings.postOrder.api.pending[_],
						{
							fetchedTokens: A
						} = p.listings.postOrder,
						R = !(!A[_] || !A[_][S.token]);
					if (w || R) return;
					if (C === i.bb.AWARDED && l === I.g) return;
					t(ee({
						key: _,
						fetchedToken: S.token
					}));
					const P = {
							after: S.token,
							dist: S.dist,
							forceGeopopular: l === I.d.Popular,
							layout: v.e[Object(y.S)(p, {})],
							sort: C,
							t: m,
							...d()(g, [...h.p, h.k])
						},
						U = Object(q.a)(p),
						G = U ? () => Object(x.b)(c(), Object(x.c)(p, l, {
							...P,
							limit: v.a
						}), Object(J.ab)(p)) : () => Object(x.a)(s(), l, P),
						F = await G(),
						M = {
							...F.body,
							...Object(L.a)(p, _, F.body)
						};
					if (F.ok) {
						if (!U) {
							const e = await Object(N.a)(s(), M.posts, p);
							M.posts = e
						}
						let e;
						const n = M.postIds.filter(e => !!M.posts[e].isMeta),
							d = Object(H.I)(r(), l);
						if (n.length) {
							const t = await Object(T.a)(s(), d, n);
							t.ok && (e = t.body)
						}
						const i = Object(B.h)(p, {
							subredditId: Object(H.I)(p, l)
						});
						if (!U && i && t(Object(b.a)({
								postIds: M.postIds
							})), t(te({
								fetchedToken: S.token,
								key: _,
								meta: p.meta,
								governance: e,
								...M
							})), Object(B.i)(p, d)) {
							let e;
							U || (e = await Object(x.b)(c(), Object(x.c)(p, l, {
								...P,
								limit: v.a
							}), Object(J.ab)(p)));
							const r = U ? M : e.body;
							if (U ? r : e.ok) {
								const e = r.postIds.map(e => r.posts[e].lastAuthorModNote);
								t(Object(f.e)({
									subredditId: d,
									nodes: e
								}))
							}
						}
						await t(Object(u.a)({
							subredditId: d,
							postIds: M.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(D.b)(j.a.NextPageLoad)(r())
					} else {
						t(re({
							error: F.error,
							fetchedToken: S.token,
							key: _,
							...M
						}));
						const e = F.error;
						Object(D.a)(e ? `${F.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, le = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", be = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", me = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", pe = Object(c.a)(le), fe = Object(c.a)(be), Oe = Object(c.a)(me), ge = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(pe());
					const d = await Object(E.c)(n(), i.wb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					d.ok ? e(fe(d.body)) : e(Oe({
						error: d.error
					}))
				}, je = "SUBREDDIT__ABOUT_PENDING", _e = "SUBREDDIT__ABOUT_SUCCEEDED", Ie = "SUBREDDIT__ABOUT_FAILED", he = Object(c.a)(je), ve = Object(c.a)(_e), ye = Object(c.a)(Ie), Te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r();
					if (Object(H.z)(d, {
							subredditName: e
						}) || d.subreddits.api.about.error[e.toLowerCase()] || d.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(he({
						subredditName: e
					}));
					const i = !Object(H.I)(d, e),
						o = await Object(C.a)(s(), e, i);
					if (o.ok) {
						const r = o.body.data.subreddit,
							n = Object(R.a)(r),
							s = i ? Object(P.a)(r) : void 0;
						t(ve({
							subredditName: e,
							subreddits: s ? {
								[s.id]: s
							} : void 0,
							data: n
						}))
					} else t(ye({
						subredditName: e,
						error: o.error
					}))
				}, Se = (e, t, r) => async (n, s, d) => {
					let {
						apiContext: i
					} = d;
					var o;
					const c = e.substring(2),
						a = r === G.e.View ? null === (o = Object(J.g)(s(), c)) || void 0 === o ? void 0 : o.subredditId : Object(H.I)(s(), c),
						u = Object(J.l)(s());
					if (u && a) {
						const e = ((e, t, r, n) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + n + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(c, Object(M.e)(u), t, r);
						if ((await Object(S.b)(i(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							n(Object(p.F)({
								subredditId: a,
								prefs: t
							})), Object(A.j)(a, t, i()), r !== G.e.View && n(Object(l.i)(_.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Ee = e => async (t, r) => {
					const n = r(),
						{
							subredditName: s
						} = e,
						d = e.t,
						i = Object(k.a)(e, n),
						o = n.platform.currentPage ? n.platform.currentPage.queryParams : z,
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
					await t(Object(m.subredditDataRequested)(c, s, u, !0))
				}
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
					type: d.D,
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
				return p
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
				m = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(b)),
				p = (e, t) => async (r, n, b) => {
					let {
						apiContext: p
					} = b;
					const f = Object(l.Y)(n(), {
						subredditId: e
					}) || Object(u.r)(n(), {
						profileId: e
					});
					if (!f) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.i)(f) ? s.qc + f.name : f.name
						},
						g = await ((e, t, r) => Object(i.a)(e, {
							data: r,
							endpoint: `${d.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(o.C)(t)}`,
							method: s.ob.GET
						}))(p(), t, O);
					if (g.ok) {
						const n = g.body;
						r(m({
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
				return w
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return P
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
				m = r("./src/redditGQL/operations/GetTotalModNoteCount.json");
			var p = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				f = r("./src/reddit/models/SubredditModeration/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/moderatorPermissions.ts"),
				j = r("./src/reddit/selectors/modUserNotes.ts"),
				_ = r("./src/reddit/helpers/trackers/modNote.ts"),
				I = r("./src/telemetry/index.ts"),
				h = r("./src/redditGQL/types.ts"),
				v = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			const {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			Object(v.a)({
				features: {
					modUserNotes: y.a
				}
			});
			const S = Object(s.a)(i.U),
				E = Object(s.a)(i.T),
				x = Object(s.a)(i.S),
				C = Object(s.a)(i.R),
				w = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var i;
					const a = r(),
						{
							forceLoad: u,
							subredditId: l,
							userId: m,
							before: p,
							filter: g
						} = e,
						j = Object(f.d)(l, m, g, p),
						_ = a.features.modUserNotes.fetchedTokens[j] && !u;
					if (!a.features.modUserNotes.api.pending[j] && !_) {
						t(S({
							subredditId: l,
							userId: m,
							filter: g,
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
								subredditId: l,
								userId: m,
								filter: g,
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
									}), t(E({
										notes: s,
										subredditId: l,
										userId: m,
										filter: g,
										fetchedToken: p,
										loadMoreToken: n.hasNextPage ? n.endCursor : null
									}))
								}
								const {
									errors: n
								} = e.body;
								n && n.length && d.c.captureException(n)
							} else t(x({
								subredditId: l,
								userId: m,
								filter: g,
								fetchedToken: p
							})), t(Object(o.f)({
								kind: O.b.Error,
								text: T._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						} catch (I) {
							d.c.captureException(I), t(Object(o.f)({
								kind: O.b.Error,
								text: T._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						}
					}
				}, A = Object(s.a)(i.H), N = Object(s.a)(i.G), L = e => {
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
						}), e(N({
							subredditId: t,
							lastAuthorModNotes: i
						}))
					}
				}, k = (e, t, r) => async (s, d, i) => {
					let {
						gqlContext: o
					} = i;
					var u, l, b, m, f, O, g;
					const {
						hasSortParam: j,
						sortToUse: _
					} = Object(p.a)(d(), e), I = n.Ob[_], v = {
						postId: e,
						requestPostModerationInfo: !t,
						...j && I && {
							sortType: h.g[I]
						},
						...r && {
							after: r
						}
					}, y = await ((e, t) => Object(c.a)(e, {
						...a,
						variables: {
							...t
						}
					}))(o(), v);
					if (y.ok) {
						const e = null === (u = y.body) || void 0 === u ? void 0 : u.data,
							t = null === (b = null === (l = null == e ? void 0 : e.postInfoById) || void 0 === l ? void 0 : l.subreddit) || void 0 === b ? void 0 : b.id,
							r = null === (f = null === (m = null == e ? void 0 : e.postInfoById) || void 0 === m ? void 0 : m.moderationInfo) || void 0 === f ? void 0 : f.lastAuthorModNote,
							n = null === (g = null === (O = null == e ? void 0 : e.postInfoById) || void 0 === O ? void 0 : O.commentForest) || void 0 === g ? void 0 : g.trees;
						r && s(A({
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
								}), e(N({
									subredditId: t,
									lastAuthorModNotes: i
								}))
							}
						})({
							subredditId: t,
							commentTrees: n
						}))
					}
				}, R = Object(s.a)(i.Q), P = (e, t, r, n, s, d) => async (i, a, l) => {
					let {
						gqlContext: b
					} = l;
					var m, p;
					const f = {
							subredditId: e,
							userId: t,
							label: s,
							note: r,
							redditId: d
						},
						g = await ((e, t) => Object(c.a)(e, {
							...u,
							variables: {
								input: t
							}
						}))(b(), f);
					if (g.ok) {
						const r = null === (p = null === (m = g.body) || void 0 === m ? void 0 : m.data) || void 0 === p ? void 0 : p.createModUserNote.createdNote;
						if (!r) return void i(Object(o.f)({
							kind: O.b.Error,
							text: T._("Something went wrong", null, {
								hk: "zYMeg"
							}),
							duration: 3e3
						}));
						i(R({
							subredditId: e,
							newModNote: r,
							filter: n
						})), Object(I.a)(Object(_.v)({
							userId: t,
							subredditId: e,
							filteredType: n,
							modNote: r
						})(a())), i(Object(o.f)({
							kind: O.b.SuccessMod,
							text: T._("Successfully created mod note", null, {
								hk: "10Vu91"
							}),
							duration: 3e3
						}))
					} else {
						const {
							errors: e
						} = g.body, t = e[0] ? e[0].message : T._("Something went wrong", null, {
							hk: "2uu095"
						});
						i(Object(o.f)({
							kind: O.b.Error,
							text: t,
							duration: 3e3
						}))
					}
				}, D = Object(s.a)(i.lb), U = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					var i, o;
					const a = n();
					if (!Object(g.i)(a, e)) return;
					const u = {
						subredditId: e,
						userId: t
					};
					if (Object(j.g)(a, t, e)) return;
					const l = await ((e, t) => Object(c.a)(e, {
						...m,
						variables: {
							...t
						}
					}))(d(), u);
					if (l.ok) {
						const n = null === (i = l.body) || void 0 === i ? void 0 : i.data;
						if ("Subreddit" === (null === (o = null == n ? void 0 : n.subredditInfoById) || void 0 === o ? void 0 : o.__typename)) {
							const s = null == n ? void 0 : n.subredditInfoById;
							s && r(D({
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
					}))(a(), u)).ok ? (s(C({
						subredditId: e,
						userId: t,
						noteId: r
					})), s(Object(o.f)({
						kind: O.b.SuccessMod,
						text: T._("Mod Note sucessfully deleted!", null, {
							hk: "17NyFK"
						})
					}))) : s(Object(o.f)({
						kind: O.b.Error,
						text: T._("Could not delete note. Try again later.", null, {
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
				return G
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "h", (function() {
				return H
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "d", (function() {
				return V
			})), r.d(t, "j", (function() {
				return X
			})), r.d(t, "i", (function() {
				return Z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				d = r.n(s),
				i = r("./node_modules/lodash/xor.js"),
				o = r.n(i),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/name/index.ts"),
				l = r("./src/reddit/endpoints/subreddit/settings.ts"),
				b = r("./src/telemetry/index.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = r("./src/redditGQL/types.ts");
			const g = e => {
					var t, r;
					if (!e) return {};
					const {
						id: n,
						isArchivePostsEnabled: s,
						isDiscoveryAllowed: d,
						isChatPostCreationAllowed: i,
						isCrosspostingAllowed: o,
						isPredictionAllowed: c,
						isPredictionContributorsAllowed: a,
						isPredictionsTournamentAllowed: u,
						banEvasionThreshold: l,
						commentContributionSettings: b,
						isNsfw: m,
						language: p,
						publicDescriptionText: f,
						isChatPostFeatureEnabled: g,
						welcomeMessage: j,
						allAllowedPostTypes: _,
						liveStreamingInfo: h,
						isTopListingAllowed: v,
						isCommentingRestricted: T,
						isPostingRestricted: S,
						isSpoilerAvailable: E,
						isContributorRequestsDisabled: x,
						type: w,
						suggestedCommentSort: A,
						title: N,
						toxicityThresholdChatLevel: L,
						crowdControl: k,
						commentDisplaySettings: R,
						allowedPostType: P,
						wikiSettings: D,
						spamFilter: U,
						modQueueSettings: G
					} = e;
					return {
						allowGalleries: _.includes(O.I.Gallery),
						allowImages: _.includes(O.I.Image),
						allowPolls: _.includes(O.I.Poll),
						archivePostsEnabled: s,
						allowDiscovery: d,
						allowChatPostCreation: i,
						allowPostCrossposts: o,
						allowPredictionContributors: a,
						allowPredictions: c,
						allowPredictionsTournament: u,
						banEvasionThreshold: I(l),
						commentContributionSettings: b,
						contentVisible: v,
						crowdControlLevel: y(null == k ? void 0 : k.crowdControlLevel),
						crowdControlChatLevel: y(null == k ? void 0 : k.crowdControlChatLevel),
						crowdControlPostLevel: y(null == k ? void 0 : k.crowdControlPostLevel),
						disableContributorRequests: x,
						isChatPostFeatureEnabled: g,
						language: p,
						liveStreamingIsEnabled: (null == h ? void 0 : h.isLiveStreamingEnabled) || void 0,
						over18: m,
						publicDescription: f || void 0,
						restrictCommenting: T,
						restrictPosting: S,
						spoilersEnabled: E,
						subredditId: n,
						subredditType: null == w ? void 0 : w.toLowerCase(),
						suggestedCommentSort: (null == A ? void 0 : A.toLowerCase()) || void 0,
						title: N,
						toxicityThresholdChatLevel: C(L),
						welcomeMessageEnabled: null == j ? void 0 : j.isEnabled,
						welcomeMessageText: (null == j ? void 0 : j.body) ? null === (t = j.body) || void 0 === t ? void 0 : t.markdown : void 0,
						wikimode: null === (r = null == D ? void 0 : D.wikiEditMode) || void 0 === r ? void 0 : r.toLowerCase(),
						crowdControlFilter: null == k ? void 0 : k.isCrowdControlFilterEnabled,
						collapseDeletedComments: null == R ? void 0 : R.isCollapseDeletedCommentsEnabled,
						commentScoreHideMins: (null == R ? void 0 : R.commentScoreHideMinutes) || 0,
						contentOptions: P || void 0,
						excludeBannedModqueue: null == G ? void 0 : G.isExcludeBannedModqueueEnabled,
						spamLinks: (null == U ? void 0 : U.spamPosts) || void 0,
						spamSelfposts: (null == U ? void 0 : U.spamSelfposts) || void 0,
						spamComments: (null == U ? void 0 : U.spamComments) || void 0,
						wikiEditAge: "number" == typeof(null == D ? void 0 : D.wikiEditMinimumAge) ? null == D ? void 0 : D.wikiEditMinimumAge : void 0,
						wikiEditKarma: "number" == typeof(null == D ? void 0 : D.wikiEditKarma) ? null == D ? void 0 : D.wikiEditKarma : void 0
					}
				},
				j = [O.c.Unknown, O.c.Off, O.c.Lenient, O.c.Moderate, O.c.Strict],
				_ = e => {
					if (e) return (null == j ? void 0 : j[e]) || O.c.Unknown
				},
				I = e => e ? j.indexOf(e) : 0,
				h = [O.l.Off, O.l.Lenient, O.l.Medium, O.l.Strict],
				v = e => {
					if (e) return null == h ? void 0 : h[e]
				},
				y = e => e ? h.indexOf(e) : 0,
				T = e => {
					if (e) return Object.values(O.O).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				S = e => {
					if (e) return Object.values(O.g).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				E = e => {
					if (e) return Object.values(O.W).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				x = e => {
					if (e) return e > 0 ? O.R.Enabled : O.R.Disabled
				},
				C = e => {
					if (e) return e === O.R.Enabled ? 1 : 0
				},
				w = e => {
					let {
						over18: t,
						publicDescription: r,
						subredditType: n,
						contentOptions: s,
						archivePostsEnabled: d,
						allowDiscovery: i,
						allowGalleries: o,
						allowImages: c,
						allowChatPostCreation: a,
						allowPolls: u,
						allowPostCrossposts: l,
						allowPredictionContributors: b,
						allowPredictionsTournament: m,
						welcomeMessageEnabled: p,
						welcomeMessageText: f,
						language: O,
						contentVisible: g,
						banEvasionThreshold: j,
						commentContributionSettings: I,
						crowdControlFilter: h,
						crowdControlPostLevel: y,
						crowdControlChatLevel: C,
						crowdControlLevel: w,
						allowPredictions: A,
						collapseDeletedComments: N,
						commentScoreHideMins: L,
						disableContributorRequests: k,
						excludeBannedModqueue: R,
						hideAds: P,
						keyColor: D,
						restrictCommenting: U,
						restrictPosting: G,
						spamLinks: F,
						spamSelfposts: M,
						spamComments: q,
						spoilersEnabled: B,
						showMedia: Q,
						showMediaPreview: H,
						submitLinkLabel: J,
						submitTextLabel: z,
						submitText: K,
						suggestedCommentSort: V,
						title: $,
						toxicityThresholdChatLevel: W,
						wikiEditAge: Y,
						wikiEditKarma: X,
						wikimode: Z,
						...ee
					} = e;
					return {
						isNsfw: t,
						publicDescription: r,
						type: null == n ? void 0 : n.toUpperCase(),
						allowedPostType: null == s ? void 0 : s.toUpperCase(),
						isImagesAllowed: c,
						isCrosspostingAllowed: l,
						isPollsAllowed: u,
						isGalleriesAllowed: o,
						isChatPostAllowed: a,
						isTopListingAllowed: g,
						isDiscoveryAllowed: i,
						isArchivePostsEnabled: d,
						isPredictionContributorsAllowed: b,
						isPredictionsTournamentAllowed: m,
						language: O,
						banEvasionThreshold: _(j),
						crowdControlChatLevel: v(C),
						crowdControlFilter: h,
						crowdControlLevel: v(w),
						crowdControlPostLevel: v(y),
						welcomeMessage: f ? {
							markdown: f
						} : void 0,
						isWelcomeMessageEnabled: p,
						commentContributionSettings: I,
						allowPredictions: A,
						collapseDeletedComments: N,
						commentScoreHideMinutes: L,
						disableContributorRequests: k,
						excludeBannedModqueue: R,
						restrictCommenting: U,
						restrictPosting: G,
						spamLinks: T(F),
						spamSelfposts: T(M),
						spamComments: T(q),
						spoilersEnabled: B,
						suggestedCommentSort: S(V),
						title: $,
						toxicityThresholdChatLevel: x(W),
						wikiEditKarma: X,
						wikiEditMinimumAge: Y,
						wikiEditMode: E(Z),
						...ee
					}
				};
			var A = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				N = r("./src/reddit/models/Toast/index.ts"),
				L = r("./src/reddit/models/User/index.ts"),
				k = r("./src/reddit/selectors/experiments/cnc/index.ts"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/selectors/subredditSettings.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/selectors/widgets.ts");
			const G = "SUBREDDIT_SETTINGS_LOADED",
				F = Object(a.a)(G),
				M = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				q = Object(a.a)(M),
				B = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				Q = Object(a.a)(B),
				H = (e, t) => async (r, n, s) => {
					let {
						apiContext: d,
						gqlContext: i
					} = s;
					var o, c;
					const a = n(),
						b = Object(k.c)(a) && !Object(u.b)(e);
					if (!t || !Object(R.ab)(a, t)) {
						const t = await (b ? Object(l.b)(i(), e) : Object(l.c)(d(), e)),
							n = b ? g(null === (c = null === (o = null == t ? void 0 : t.body) || void 0 === o ? void 0 : o.data) || void 0 === c ? void 0 : c.subredditInfoByName) : t.body;
						t && t.ok && r(F(n))
					}
					if (t && !Object(P.b)(a, {
							subredditId: t
						})) {
						const e = await Object(p.a)(i(), t);
						if (e && e.ok) {
							const t = e.body,
								n = Object(f.e)(t.data);
							r(q(n))
						}
					}
				}, J = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = Object(D.l)(t());
					s && await e(H(c.qc + Object(L.e)(s)))
				}, z = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", K = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", V = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", $ = Object(a.a)(z), W = Object(a.a)(K), Y = Object(a.a)(V), X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c, a) => {
						let {
							apiContext: u,
							gqlContext: f
						} = a;
						var O, j;
						i($());
						const _ = c(),
							I = d()(Object(R.ab)(_, e), ...Object.keys(t)),
							h = d()(Object(P.b)(_, {
								subredditId: e
							}), ...Object.keys(r));
						let v;
						const y = Object(k.c)(_);
						if (y) {
							const r = w(t);
							v = await Object(l.h)(f(), e, r)
						}
						v || (v = await Object(l.g)(u(), e, t));
						const T = Object.keys(r).length > 0;
						let S = !0;
						if (T) {
							S = (await Object(p.b)(f(), e, r)).ok
						}
						if (v.ok && (!T || S)) {
							const d = y ? g(null === (j = null === (O = null == v ? void 0 : v.body) || void 0 === O ? void 0 : O.data) || void 0 === j ? void 0 : j.subreddit) : Object(l.d)(v.body);
							i(W({
								settings: {
									...d,
									subredditId: e
								},
								idCardWidgetId: Object(U.c)(_, {
									subredditId: e
								})
							})), T && i(Q({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							return s && 0 === o()(Object.keys(t), Object.keys(I)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = X(e, I, h, s)), void i(Object(m.f)({
								kind: N.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
						i(Y()), i(Object(m.f)({
							kind: N.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: X(e, t, h, void 0)
						})), s && Object(b.a)(Object(A.c)(_, "BE returned an error:"))
					}
				}, Z = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					(await Object(l.e)(i(), e, t)).ok ? r(Object(m.f)({
						kind: N.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(m.f)({
						kind: N.b.Error,
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
				return m
			})), r.d(t, "v", (function() {
				return p
			})), r.d(t, "w", (function() {
				return f
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "A", (function() {
				return I
			})), r.d(t, "z", (function() {
				return h
			})), r.d(t, "D", (function() {
				return v
			})), r.d(t, "y", (function() {
				return y
			})), r.d(t, "C", (function() {
				return T
			})), r.d(t, "x", (function() {
				return S
			})), r.d(t, "B", (function() {
				return E
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "i", (function() {
				return L
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
				m = "TAGS__DELETE_FAILURE",
				p = "TAGS__UPDATE_STATE_REQUESTED",
				f = "TAGS__UPDATE_STATE_SUCCESS",
				O = "TAGS__UPDATE_STATE_FAILURE",
				g = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				j = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				_ = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				I = "TAGS__OPTIONS_CANCELLED",
				h = "TAGS__OPTION_SELECTED",
				v = "TAGS__SUGGESTED_OPTION_SELECTED",
				y = "TAGS__OPTION_DESELECTED",
				T = "TAGS__SUGGESTED_OPTION_DESELECTED",
				S = "TAGS__INPUT_CHANGED",
				E = "TAGS__SUGGESTED_INPUT_CHANGED",
				x = "GLOBAL__TAGS__LOADED",
				C = "CREATION__TAGS_INPUT_CHANGED",
				w = "CREATION__TAGS_OPTION_SELECTED",
				A = "CREATION__TAGS_OPTION_DESELECTED",
				N = "CREATION__PRIMARY_TAG_SELECTED",
				L = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return D
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
				return J
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
			var m = r("./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json");
			const p = (e, t) => Object(c.a)(e, {
				...m,
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
			var g = r("./src/redditGQL/operations/UpdateSubredditPrimaryTag.json");
			const j = e => {
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
				_ = (e, t) => Object(c.a)(e, {
					...g,
					variables: t
				});
			var I = r("./src/reddit/helpers/tags/index.ts"),
				h = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				v = r("./src/reddit/models/Tags/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/reducers/tags/selected/index.ts"),
				S = r("./src/reddit/selectors/tags.ts");
			Object(s.a)(d.e);
			const E = Object(s.a)(d.t),
				x = Object(s.a)(d.r),
				C = Object(s.a)(d.s),
				w = Object(s.a)(d.q),
				A = Object(s.a)(d.l),
				N = Object(s.a)(d.m),
				L = Object(s.a)(d.k),
				k = Object(s.a)(d.v),
				R = Object(s.a)(d.w),
				P = Object(s.a)(d.u),
				D = Object(s.a)(d.z),
				U = Object(s.a)(d.D),
				G = Object(s.a)(d.y),
				F = Object(s.a)(d.C),
				M = Object(s.a)(d.x),
				q = Object(s.a)(d.B),
				B = (Object(s.a)(d.d), Object(s.a)(d.c), Object(s.a)(d.b), Object(s.a)(d.g)),
				Q = Object(s.a)(d.h),
				H = Object(s.a)(d.f),
				J = Object(s.a)(d.a),
				z = Object(s.a)(d.i),
				K = Object(s.a)(d.A),
				V = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, d, c) => {
						let {
							gqlContext: a
						} = c;
						const u = d();
						s(E());
						const l = await b(a(), {
								subredditId: e
							}),
							m = l.body;
						if (l.ok && m.data.subredditInfoById.secondaryTags && m.data.subredditInfoById.availableTags && m.data.subredditInfoById.suggestedTags) s(x(o(m.data))), r && h.h(d(), e, {
							context: t
						});
						else {
							s(w());
							const d = r ? "topics_save" : "topics_load";
							h.g(u, e, d, {
								context: t
							}), s(Object(i.f)(Object(i.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), y.b.Error, n.fbt._("Retry", null, {
								hk: "1c2xrJ"
							}), V(e, t, r))))
						}
					}
				},
				$ = e => async (t, r, s) => {
					let {
						gqlContext: d
					} = s;
					t(E());
					const c = await b(d(), {
						subredditId: e
					});
					if (c.ok) {
						const e = c.body;
						t(C(o(e.data)))
					} else t(w()), t(Object(i.f)(Object(i.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), y.b.Error, n.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), C(e))))
				}, W = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					if (!t.length) return null;
					r(A());
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
					return o.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(N()), u.createSubredditTags.createdTags || []) : (r(L()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (n, s, d) => {
						let {
							gqlContext: i
						} = d;
						if (!t.length && !r.length) return;
						n(k());
						const c = s(),
							a = Object(S.d)(c, {
								subredditId: e
							}),
							u = Object(S.o)(c, {
								itemId: e
							}),
							l = Object(S.z)(c, {
								itemId: e
							}),
							b = new Set;
						for (const e of t)
							if (e.state === v.d.NONE && a[e.tagId] && !l[e.tagId]) {
								!!r.find(t => t.state === v.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} for (const e of r)
							if (e.state === v.d.NONE && a[e.tagId] && !u[e.tagId]) {
								!!t.find(t => t.state === v.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} const m = await p(i(), {
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
							f = m.body && m.body.data || null;
						m.ok && f && f.updateSubredditTagStates && f.updateSubredditTagStates.ok && f.updateSubredditTagStates.subreddit ? n(R(o({
							subredditInfoById: f.updateSubredditTagStates.subreddit
						}))) : n(P())
					}
				}, X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, d, o) => {
						const c = d(),
							a = Object(S.q)(c, {
								subredditId: e
							}),
							u = Object(S.C)(c, {
								subredditId: e
							});
						let l = a.filter(e => !!e.id && !!e.action).map(e => ({
							tagId: e.id,
							state: e.action === T.a.ADD ? v.d.TAGGED : v.d.NONE
						}));
						if (u.length > 0) {
							const t = await W(e, u)(s, d, o);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: v.d.TAGGED
							})))
						}
						await Y(e, l)(s, d, o), Object(S.A)(d()) ? s(Object(i.f)(Object(i.e)(n.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && s(Object(i.f)(Object(i.e)(n.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), y.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, s, d) => {
					const o = {
						state: v.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await W(e, [{
							text: t.displayText,
							type: v.c.CLASSIFICATION
						}])(r, s, d);
						n && 1 === n.length && (o.tagId = n[0].id)
					} else {
						if (!t.id) return void r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), y.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await Y(e, [], [o])(r, s, d): r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), y.b.Error)))
				}, ee = (e, t, r) => async (n, s, d) => {
					t.id ? await Y(e, [], [{
						state: v.d.NONE,
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
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, s, d)))), void o($(e));
						if (d)
							for (const e of r) h.f(c(), e, {
								context: s
							});
						o(Object(i.f)(Object(i.e)(n.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), y.b.SuccessCommunity, n.fbt._("Undo", null, {
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
							[e]: Object(S.o)(r(), {
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
						const a = Object(S.x)(d(), {
							subredditId: e
						});
						if ((null == a ? void 0 : a.id) === t.tagId && t.state === v.d.TAGGED) return;
						s(B());
						const u = await _(c(), {
								input: {
									subredditId: e,
									primaryTagState: t
								}
							}),
							l = u.body && u.body.data || null;
						u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (s(Q(j(l))), r && s(Object(i.f)(Object(i.e)(n.fbt._("Successfully updated primary topic!", null, {
							hk: "1NL90v"
						}), y.b.SuccessCommunity)))) : (s(H()), s(Object(i.f)(Object(i.e)(n.fbt._("Whoops! Unable to update primary topic", null, {
							hk: "3ilZqp"
						}), y.b.Error, n.fbt._("Retry", null, {
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
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "m", (function() {
				return g
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "l", (function() {
				return _
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
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				j = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				I = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return _
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return I
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return h
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return v
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
				return y
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return T
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return S
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return E
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return x
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return C
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return w
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return A
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return N
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return L
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return k
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return R
			})), r.d(t, "userFlairMutated", (function() {
				return P
			})), r.d(t, "authorFlairMutated", (function() {
				return D
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
				m = r("./src/reddit/models/User/index.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/userFlair.ts"),
				O = r("./src/lib/initializeClient/installReducer.ts"),
				g = r("./src/reddit/reducers/features/userFlair/index.ts"),
				j = r("./src/reddit/actions/userFlair/constants.ts");
			Object(O.a)({
				features: {
					userFlair: g.a
				}
			});
			const _ = Object(s.a)(j.i),
				I = Object(s.a)(j.j),
				h = Object(s.a)(j.h),
				v = Object(s.a)(j.c),
				y = Object(s.a)(j.d),
				T = Object(s.a)(j.b),
				S = Object(s.a)(j.p),
				E = Object(s.a)(j.q),
				x = Object(s.a)(j.o),
				C = Object(s.a)(j.f),
				w = Object(s.a)(j.g),
				A = Object(s.a)(j.e),
				N = Object(s.a)(j.m),
				L = Object(s.a)(j.n),
				k = Object(s.a)(j.l),
				R = Object(s.a)(j.k),
				P = Object(s.a)(j.r),
				D = Object(s.a)(j.a),
				U = (e, t, r, n, s) => async (d, i, o) => {
					let {
						apiContext: c
					} = o;
					const l = i(),
						b = l.user.account,
						O = b ? Object(m.e)(b) : void 0,
						g = {
							...Object(f.d)(l, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						j = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: g
						};
					d(n === O ? P(j) : D(j));
					const _ = Object(p.Y)(l, {
							subredditId: s
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					Object(a.g)(c(), n, _.name, t, I), n === O && Object(a.i)(c(), r, _.name)
				}, G = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const i = n(),
						o = Object(p.Y)(i, {
							subredditId: e
						}).name;
					r(_());
					const c = await Object(a.l)(d(), o, t);
					if (c.ok) {
						r(I({
							subredditId: e,
							isEnabled: t
						}))
					} else r(h());
					return c.ok
				}, F = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const i = n(),
						o = Object(p.Y)(i, {
							subredditId: e
						}).name;
					r(v());
					const c = await Object(a.j)(d(), t, l.d.UserFlair, o);
					if (c.ok) {
						r(y({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(T());
					return c.ok
				}, M = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					const o = s(),
						u = Object(p.Y)(o, {
							subredditId: t
						}).name;
					r(S());
					const m = await Object(a.f)(i(), e, u, l.d.UserFlair),
						f = m.ok && !(m.body && !1 === m.body.success);
					if (f) {
						const e = {
							subredditId: t,
							template: m.body
						};
						r(E(e));
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
						u = Object(p.Y)(o, {
							subredditId: t
						}).name;
					if (r(C()), (await Object(a.b)(i(), e, u)).ok) {
						r(w({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), b.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(A());
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
						u = Object(p.Y)(o, {
							subredditId: t
						}).name,
						m = Object(f.d)(o, {
							subredditId: t
						}).templateIds;
					if (r(N({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(i(), u, l.d.UserFlair, e)).ok) {
						r(L());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(k({
							subredditId: t,
							templateIds: m
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
					const m = s(),
						f = null === (l = m.features) || void 0 === l ? void 0 : l.userFlair;
					if (f && f[e] && f[e].displaySettings.isEnabled && i()(f[e].templateIds)) {
						const s = Object(p.Y)(m, {
								subredditId: e
							}).name,
							d = await Object(a.d)(u(), s);
						if (d.ok) r(R(d.body)), r(Object(o.b)({
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
			const c = Object(s.c)(d.t.RECENT_SUBREDDITS, "recent_subreddits"),
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
							const t = e.findIndex(e => e.id === n); - 1 !== t && e.splice(t, 1), e.unshift(r), e.splice(o.c), Object(s.d)(c, e, d.ub)
						}
						break
					}
				}
				return r
			}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return _
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "b", (function() {
				return L
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
				m = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				f = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				O = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				j = r("./src/redditGQL/operations/GetCommentById.json");
			const _ = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/save`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				I = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unsave`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/lock`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unlock`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(l.a)(e, {
					...s,
					variables: {
						input: {
							id: t
						}
					}
				}),
				T = (e, t, r) => Object(l.a)(e, {
					...d,
					variables: {
						input: {
							id: t,
							isSpam: r
						}
					}
				}),
				S = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				E = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				C = (e, t, r, s) => {
					let d = Object(p.a)(Object(g.a)(Object(O.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return s && (d = Object(f.a)(d)), Object(u.a)(e, {
						data: r,
						endpoint: d,
						method: a.ob.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				w = {
					[a.J.NONE]: c.n.None,
					[a.J.MODERATOR]: c.n.ModDistinguished,
					[a.J.ADMIN]: c.n.AdminDistinguished,
					[a.J.ALUMNI_ADMIN]: c.n.AlumniDistinguished
				};

			function A(e, t, r) {
				const n = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === a.J.NONE ? c.e.None : c.e.Distinguished,
							distinguishType: w[t]
						}
					}
				}(t, r);
				return Object(l.a)(e, {
					...i,
					variables: n
				})
			}

			function N(e, t, r) {
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
			const L = async (e, t) => {
				return await Object(l.a)(e, {
					...j,
					variables: {
						id: t
					}
				})
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return h
			})), r.d(t, "n", (function() {
				return v
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "o", (function() {
				return A
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "d", (function() {
				return D
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
				m = r("./src/redditGQL/operations/GetPredictionToken.json"),
				p = r("./src/redditGQL/operations/GetTournaments.json"),
				f = r("./src/redditGQL/operations/GetTournamentsBaseInfo.json"),
				O = r("./src/redditGQL/operations/ResolvePrediction.json"),
				g = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = r("./src/redditGQL/operations/SubredditTournamentLeaderboard.json"),
				_ = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				I = r("./src/redditGQL/operations/VotePrediction.json");
			const h = async (e, t) => {
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
			}, v = (e, t) => {
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
			var y;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const T = async (e, t) => {
				let {
					subredditId: r,
					period: d = y.AllTime,
					top: i = 100,
					includeCurrentRank: o
				} = t;
				const c = await Object(n.a)(e, {
					...g,
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
			}, S = async (e, t) => {
				let {
					subredditId: r,
					tournamentId: d,
					includeCurrentRank: i
				} = t;
				const o = await Object(n.a)(e, {
					...j,
					variables: {
						subredditId: r,
						tournamentId: d,
						includeCurrentRank: i
					}
				});
				if (!Object(s.c)(o) || o.error) throw new Error("Failed to fetch subreddit tournament");
				if (!o.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return o.body.data.subredditInfoById
			}, E = async (e, t) => {
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
					...p,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, C = async (e, t) => {
				const r = await Object(n.a)(e, {
					...f,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, w = async (e, t) => {
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
			}, A = async (e, t) => {
				const r = await Object(n.a)(e, {
					..._,
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
			}, N = (e, t) => Object(n.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), L = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			}), k = (e, t) => Object(n.a)(e, {
				...m,
				variables: t
			}), R = async (e, t) => {
				const r = await Object(n.a)(e, {
					...o,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
				return r.body.data.changePrediction.poll
			}, P = async (e, t) => {
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
			}, D = async (e, t) => {
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
			r.d(t, "g", (function() {
				return b
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				d = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				i = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
				o = r("./src/redditGQL/operations/RedditorPowerups.json"),
				c = r("./src/redditGQL/operations/SubredditPowerups.json"),
				a = r("./src/redditGQL/operations/SubredditPowerupsFull.json"),
				u = r("./src/redditGQL/operations/UpdatePowerupsSettings.json"),
				l = r("./src/redditGQL/operations/UserPowerups.json");
			const b = e => Object(n.a)(e, l, {
					traceRequestName: "user_powerups"
				}),
				m = (e, t) => Object(n.a)(e, {
					variables: {
						id: t
					},
					...o
				}, {
					traceRequestName: "redditor_powerups"
				}),
				p = (e, t, r) => Object(n.a)(e, {
					...c,
					variables: {
						subredditId: t,
						includeIdentity: r
					}
				}, {
					traceRequestName: "subreddit_powerups"
				}),
				f = (e, t, r, s, d) => Object(n.a)(e, {
					...a,
					variables: {
						subredditId: t,
						includeIdentity: r,
						skipAchievements: s,
						skipMediaPacks: d
					}
				}, {
					traceRequestName: "subreddit_powerups_full"
				}),
				O = (e, t) => Object(n.a)(e, {
					...i,
					variables: t
				}),
				g = (e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}),
				j = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}),
				_ = async (e, t, r) => {
					const s = {
						input: {
							subredditId: t,
							powerupsSettings: {
								benefitSettings: r
							}
						}
					};
					return Object(n.a)(e, {
						...u,
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
					method: s.ob.POST,
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
				return m
			})), r.d(t, "b", (function() {
				return p
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
					method: s.ob.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				m = (e, t, r) => Object(d.a)(Object(o.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: s.ob.POST,
					type: "json",
					data: r
				}),
				p = (e, t) => Object(i.a)(e, {
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
				method: n.ob.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/page/subredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return T
			})), r.d(t, "b", (function() {
				return S
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/isAdHocMultireddit/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/performanceTimings/index.tsx"),
				u = r("./src/reddit/constants/graphql.ts"),
				l = r("./src/reddit/constants/page.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				f = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				O = r("./src/reddit/models/Subreddit/index.ts"),
				g = r("./src/reddit/selectors/adsSignals.ts"),
				j = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				_ = r("./src/reddit/selectors/experiments/econ/index.ts"),
				I = r("./src/reddit/selectors/platform.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				y = r("./src/redditGQL/operations/SubredditPage.json");
			const T = (e, t, r, n) => {
					var s, o, c, a;
					const {
						after: b,
						geo_filter: p,
						isMobile: f,
						layout: O,
						limit: y,
						recentPostIds: T,
						sort: S,
						t: E
					} = r, x = Object(v.ab)(e), C = Object(I.q)(e), w = Object(d.a)(t), A = Object(i.a)(t), N = Object(h.X)(e, {
						subredditId: Object(h.I)(e, t)
					}).length > 0, L = (null === (s = e.user.account) || void 0 === s ? void 0 : s.username) || (null === (o = e.user.account) || void 0 === o ? void 0 : o.displayText), k = Object(v.p)(e), R = Object(v.ob)(e), {
						adsSeenCount: P,
						totalPostsSeenCount: D,
						sessionStartTime: U
					} = Object(g.a)(e), G = Object(_.f)(e), F = Object(_.g)(e), M = Object(j.a)(e), q = {
						name: t,
						includeIdentity: x && !e.user.account,
						adContext: {
							layout: O ? O.toUpperCase() : u.a.Card,
							clientSignalSessionData: {
								adsSeenCount: P,
								totalPostsSeenCount: D,
								sessionStartTime: U
							}
						},
						isFake: A,
						includeAchievementFlairs: n && !A && F,
						includeAppliedFlair: !A && x && !!L && n,
						includeCustomEmojis: n && !A && G,
						includeDevPlatformMetadata: M,
						includePowerups: n && !A,
						includeQuestions: n && x && !A,
						includeRecents: A && T && T.length > 0 || !1,
						includeRedditorKarma: n && x && !(null === (a = null === (c = e.user.account) || void 0 === c ? void 0 : c.karma) || void 0 === a ? void 0 : a.total),
						includeRules: n && !A && !N,
						includeSubredditLinks: n && !A && !x,
						includeTopicLinks: n && !A && !x,
						includeTrending: A,
						isAdHocMulti: w,
						isAll: t === l.d.All,
						isLoggedOutGatedOptedin: k,
						isLoggedOutQuarantineOptedin: R,
						isPopular: t === l.d.Popular,
						recentPostIds: T || [],
						subredditNames: w ? t.split("+") : [],
						username: x && L && n ? L : ""
					};
					return S && (q.sort = S.toUpperCase()), E && (q.range = E.toUpperCase()), f ? q.pageSize = Object(m.a)(O) : y && (q.pageSize = y), C && C.ad && (q.forceAds = {
						ad: C.ad
					}), (C && C.geo_filter || p) && (q.region = C && C.geo_filter || p), b && (q.after = btoa(b)), q
				},
				S = async (e, t, r) => {
					const n = Date.now(),
						d = await ((e, t) => Object(c.a)(e, {
							...y,
							variables: t
						}))(e, t),
						i = Date.now();
					if (!d.ok || !d.body) return d;
					const o = d.body,
						u = Date.now(),
						l = Object(p.a)(o.data),
						b = Date.now(),
						m = [{
							duration: i - n,
							logKeyType: a.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: a.a.gqlNormalizationTiming
						}];
					return Object(a.h)({
						name: s.u.SUBREDDIT,
						isLoggedIn: r,
						metrics: m
					}), {
						...d,
						ok: !!o.data.subredditInfoByName && !Object(O.k)(o.data.subredditInfoByName),
						status: E(o.data),
						body: l
					}
				}, E = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(O.k)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === O.d.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === O.d.GoldOnly || e.subredditInfoByName.forbiddenReason === O.d.Private || e.subredditInfoByName.forbiddenReason === O.d.Quarantined || e.subredditInfoByName.forbiddenReason === O.d.Gated) return 403
					}
					return 200
				}, x = e => {
					let {
						recentPostIds: t,
						...r
					} = e;
					return t && t.length ? {
						...r,
						recentPostIds: t.join(",")
					} : r
				};
			t.a = (e, t, r) => Object(o.a)(e, {
				endpoint: Object(b.a)(Object(f.a)(`${n.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: s.ob.GET,
				data: r && x(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, r) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? a.richtext_json = r : a.markdown_text = r, Object(s.a)(Object(d.a)(e, [i.a]), {
					endpoint: Object(o.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.ob.POST,
					data: a
				})
			}
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
				return v
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "a", (function() {
				return D
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
				m = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				p = r("./src/reddit/featureFlags/useProductionStreamingApi.ts"),
				f = r("./src/reddit/helpers/comment/index.ts"),
				O = r("./src/reddit/helpers/getRichTextContent/index.ts"),
				g = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				_ = r("./src/reddit/models/Vote/index.ts"),
				I = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function h() {
				return Object(p.b)() ? "https://strapi.reddit.com" : i.a.streamingApiUrl
			}
			const v = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${h()}${r}`,
					method: c.ob.GET,
					headers: d()(e.headers(), [a.d, a.c, a.a]),
					timeoutMs: void 0
				}).then(k)
			}, y = (e, t) => {
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
			}, T = async (e, t) => Object(l.b)({
				endpoint: `${h()}/videos/${t}`,
				method: c.ob.GET,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(k), S = async (e, t, r) => {
				let n;
				n = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const s = Object(o.a)(n, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${h()}${s}`,
					method: c.ob.GET,
					headers: d()(e.headers(), [a.d, a.c, a.a])
				}).then(k)
			}, E = async e => Object(l.b)({
				endpoint: `${h()}/recommended_viewer_subreddits`,
				method: c.ob.GET,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(k), x = async (e, t, r) => Object(l.b)({
				endpoint: `${h()}/videos/${t}/vote/${R(r)}`,
				method: c.ob.POST,
				headers: d()(e.headers, [a.d, a.c, a.a])
			}).then(k), C = async (e, t) => Object(l.b)({
				endpoint: `${h()}/videos/${t}/heartbeat`,
				method: c.ob.POST,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(k), w = async (e, t, r, n) => {
				const s = L(r);
				return s ? A(e, t, s).then(e => Object(l.c)(e) && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(g.a)(e.body.data.r2_comment),
							media: N(r)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, A = async (e, t, r) => Object(l.b)({
				endpoint: `${h()}/broadcasts/${t}/comment_v2`,
				method: c.ob.POST,
				headers: d()(e.headers, [a.d, a.c, a.a]),
				data: {
					text: r
				},
				type: "json"
			}).then(k), N = e => ({
				type: "rtjson",
				richtextContent: Object(f.d)(e),
				rteMode: j.i.RICH_TEXT
			}), L = e => e.rteState ? m.a.getRawText(e.rteState) : e.rtJson ? Object(O.c)(e.rtJson) : void 0, k = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? c.L.NOT_FOUND_ERROR : c.L.SERVER_ERROR
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
			}, R = e => e === _.a.upvoted ? "up" : e === _.a.downvoted ? "down" : "unset", P = async (e, t, r) => Object(l.b)({
				endpoint: `${h()}/broadcasts/${t}`,
				method: c.ob.PUT,
				headers: d()(e.headers, [a.d, a.c, a.a]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(k), D = async (e, t) => Object(l.b)({
				endpoint: `${h()}/broadcasts/${t}/auto_mute_status`,
				method: c.ob.GET,
				headers: d()(e.headers, [a.d, a.c, a.a])
			}).then(k)
		},
		"./src/reddit/endpoints/subreddit/rules.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
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
				m = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				p = r("./src/reddit/models/Rule/index.ts");
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
					return e.ok && e.body && (e => Object.keys(e).length > 0)(e.body) && (null === (n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit) || void 0 === n ? void 0 : n.rules) ? e.body = Object(m.a)(e.body.data.subreddit.rules) : e.body = {
						rules: []
					}, e
				}),
				g = (e, t) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.ob.GET
				}).then(e => (e.ok && e.body.rules && (e.body = f(e.body)), e)),
				j = e => e.ok ? (e.body = Object(p.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: o.ob.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === p.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), I = async (e, t, r, n) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: o.ob.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === p.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						old_short_name: n,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), h = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: o.ob.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), v = e => e.map(e => encodeURIComponent(e)).join(), y = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.ob.POST,
					data: {
						r: t,
						new_rule_order: v(r),
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e))
		},
		"./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/endpoints/post/convert.ts"),
				s = r("./src/reddit/selectors/experiments/supportingLinkAds.ts");
			const d = e => !(!e.isSponsored && !e.isCreatedFromAdsUi || !e.adSupplementaryText || "string" != typeof e.adSupplementaryText),
				i = async (e, t) => {
					try {
						const r = await Object(n.a)(e, "rtjson", t.adSupplementaryText);
						return {
							...t,
							adSupplementaryText: r.body.output
						}
					} catch (r) {
						return t
					}
				}, o = async (e, t, r) => {
					if (!Object(s.a)(r) || !t) return t;
					const n = {};
					for (const [s, o] of Object.entries(t)) n[s] = d(o) ? await i(e, o) : o;
					return n
				}
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
			})), r.d(t, "f", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				s = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				d = r("./src/reddit/constants/things.ts"),
				i = r("./src/reddit/models/Upload/index.ts"),
				o = r("./src/reddit/models/Vote/index.ts");
			const c = (e, t) => e.rteState ? s.a.toRichTextJSON(e.rteState, t) : e.rtJson || e.text,
				a = (e, t) => {
					let r = [];
					return e.rteState ? r = s.a.toRichTextJSON(e.rteState, t).document : e.rtJson && (r = e.rtJson.document), {
						document: r
					}
				},
				u = (e, t) => JSON.stringify(a(e, t));

			function l() {
				return `${d.a}_${Object(n.a)()}`
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

			function m(e, t) {
				for (const r of Object.keys(t)) {
					const n = t[r],
						s = n.url ? Object(i.b)(n.url) : null;
					if (s && e.includes(s)) return n
				}
				return null
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
								experimentName: d.M,
								expEventOverride: t
							});
							return !!(Object(d.tg)(r) ? void 0 : r)
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
					Object(d.b)(n.o.Redesign, {
						type: d.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				o = (e, t) => {
					Object(s.b)(10) && Object(d.b)(n.o.Redesign, {
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
					m = (n || []).filter(e => !b || !b.includes(e)),
					p = b.map(t => e.posts.models[t]),
					f = p.length - (s()(p, e => e.isSponsored) + 1),
					O = m.map(e => d[e]);
				let g;
				const j = [],
					_ = {
						subreddits: a,
						profiles: u
					};
				for (let s = 0; s < O.length; s++) {
					const r = O[s];
					let n = !1;
					if (r.isSponsored) {
						const e = s > 0 && O[s - 1],
							t = s < O.length - 1 && O[s + 1];
						e && c(e, _) && t && c(t, _) && (n = !0)
					}
					r.isSponsored && n && (null == g && f + s >= 3 || s - g >= 3) ? (g = s, j.push(r.id)) : r.isSponsored ? r.isSponsored && Object(o.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...i.o(e),
						listing: i.z(e, t)
					}) : j.push(r.id)
				}
				return {
					...l,
					subreddits: a,
					profiles: u,
					posts: d,
					postIds: j
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
				i = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				o = r("./src/reddit/actions/gold/customEmojis.ts"),
				c = r("./src/reddit/actions/gold/powerups.ts"),
				a = r("./src/reddit/models/Post/index.ts"),
				u = r("./src/reddit/models/RichTextJson/index.ts"),
				l = r("./src/reddit/models/Subreddit/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeSubredditWidgetsFromGql/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				C = r("./src/reddit/models/Onboarding/index.ts"),
				w = r("./src/reddit/helpers/graphql/helpers.ts");
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
					o = e => {
						if (Object(a.j)(e) || Object(a.i)(e)) return null;
						if (i.posts[e.id]) return e.id;
						const t = Object(O.f)(e);
						i.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === a.a.Post && r.postInfo && o(r.postInfo), Object(a.o)(e).forEach(o);
						let c = t.id;
						if (e.authorFlair && (i.authorFlair[t.belongsTo.id] || (i.authorFlair[t.belongsTo.id] = {}), i.authorFlair[t.belongsTo.id][t.author] = Object(b.a)(e.authorFlair)[0]), Object(a.l)(e)) i.profiles[e.profile.id] || (i.profiles[e.profile.id] = Object(j.a)(e.profile));
						else if (Object(a.n)(e)) i.subreddits[e.subreddit.id] || (i.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), i.postFlair[e.subreddit.id] || (i.postFlair[e.subreddit.id] = Object(p.a)(e.subreddit));
						else if (Object(a.h)(e)) {
							const r = Object(O.b)(e);
							if (!r) return null;
							c = r, i.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, i.posts[t.id] || (i.posts[t.id] = {
								...t,
								events: []
							}), i.postInstances[e.id] || (i.postInstances[e.id] = []), i.postInstances[e.id].push(r)
						} else try {
							Object(n.a)(e)
						} catch (u) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(s.b)() || console.warn(t), d.c.captureMessage(t)
						}
						return c && i.postIds.push(c), c
					};
				if (e.forEach(e => o(e)), t) {
					i.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) i.subreddits[e.id] = Object(I.a)(e)
				}
				const c = i.postIds.length - 1;
				return i.token = c >= 0 ? i.postIds[c] : "", r && (i.account = Object(x.a)(r), i.preferences = r.preferences && Object(g.a)(r.preferences, r.interactions) || null), i
			};
			t.a = e => {
				let {
					adhocMultiredditByNames: t,
					all: r,
					identity: n,
					popular: p,
					recentPosts: O,
					subredditInfoByName: g,
					trendingSubreddits: j
				} = e;
				var I, L;
				if (!g) return {
					reason: l.f.NotFoundSubreddit,
					data: {
						account: n && Object(x.a)(n) || null
					}
				};
				if (Object(l.k)(g)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: r,
						isEmailRequiredForQuarantineOptin: s,
						interstitialWarningMessage: d
					} = g;
					return {
						reason: N(g.forbiddenReason),
						data: {
							account: n && Object(x.a)(n) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: s,
							...r ? {
								quarantineMessage: r.markdown,
								quarantineMessageRTJson: Object(w.h)(r.richtext, u.i)
							} : {},
							interstitialWarningMessage: null == d ? void 0 : d.markdown,
							interstitialWarningMessageRTJson: Object(w.h)(null == d ? void 0 : d.richtext, u.i)
						}
					}
				}
				const k = {},
					R = g.devPlatformMetadata;
				let P;
				const D = g || p || r || t,
					[U, G] = D.elements.edges.reduce((e, t, r) => {
						var n, s, d, i;
						const [o, c] = e, u = t.node;
						if (Object(a.k)(u)) {
							const e = u;
							e.subreddit = {
								...e.subreddit,
								devPlatformMetadata: R
							}, o.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (i = null === (d = u.flair) || void 0 === d ? void 0 : d.template) || void 0 === i ? void 0 : i.postStyle) && (k[u.flair.template.id] = Object(f.a)(u.flair.template.postStyle))
						} else if (Object(C.g)(u)) {
							const e = Object(m.a)(u.interestTopicRecommendations.recommendationTopics);
							e.topics.length && (P = {
								interests: e,
								index: r
							})
						} else c.push(u);
						return [o, c]
					}, [
						[],
						[]
					]);
				if (G.length) {
					const e = `Received unhandled ${G.length} elements when processing subreddit data: "${G[0].__typename}"`;
					Object(s.b)() || console.warn(e), d.c.captureMessage(e)
				}
				O && U.push(...O);
				const F = D.elements.dist,
					M = A(U, j, n);
				return g.styles && (M.structuredStyles = {
					data: {
						style: Object(T.a)(g.styles)
					}
				}), M.structuredStyles = {
					data: {
						...g.styles ? {
							style: Object(T.a)(g.styles)
						} : {},
						content: {
							widgets: Object(E.a)(g)
						},
						flairTemplate: k
					}
				}, M.subredditAboutInfo = Object(_.a)(g), g.modPermissions && (M.subredditPermissions = Object.keys(g.modPermissions).length > 0 ? Object(v.a)(g.modPermissions) : void 0), g.rules && (M.subredditRules = Object(y.a)(g.rules).rules), ((null == g ? void 0 : g.answerableQuestions) || g.contentRatingSurvey || g.communityProgressModule) && (M.questions = {
					answerableQuestions: null == g ? void 0 : g.answerableQuestions,
					contentRatingSurvey: null == g ? void 0 : g.contentRatingSurvey,
					communityProgressModule: null == g ? void 0 : g.communityProgressModule
				}), Object(l.k)(g) || Object.assign(M, Object(i.b)(g), Object(o.b)(g), {
					powerups: Object(c.b)(g, n)
				}), M.subredditLinks = Object(h.a)({
					data: {
						subredditInfoById: g
					}
				}), M.subredditTopicLinks = Object(S.a)({
					data: {
						subredditInfoById: g
					}
				}), M.appliedFlair = {
					flair: (null === (I = g.flairedRedditorByName) || void 0 === I ? void 0 : I.flair) ? Object(b.a)(null === (L = g.flairedRedditorByName) || void 0 === L ? void 0 : L.flair)[0] : void 0,
					displaySettings: g.authorFlairSettings
				}, P && (M.interestTopicRecommendations = P), M.predictionTournaments = g.predictionTournaments || [], {
					...M,
					...null !== F && {
						dist: F
					}
				}
			};
			const N = e => {
				switch (e) {
					case l.d.Banned:
						return l.f.BannedSubreddit;
					case l.d.GoldOnly:
						return l.f.GoldSubreddit;
					case l.d.Private:
						return l.f.PrivateSubreddit;
					case l.d.Quarantined:
						return l.f.QuarantinedSubreddit;
					case l.d.Gated:
						return l.f.GatedSubreddit;
					case l.d.Unknown:
						return l.f.ForbiddenSubreddit
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
		"./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
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
			}
			r.d(t, "a", (function() {
				return n
			}))
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
				return m
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
				b = Object(o.a)(i.O, d.b, (e, t) => e || t ? {
					...a,
					...u,
					...l
				} : a);
			const m = async (e, t) => {
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
					const e = Date.now() - n.xc,
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
					isDeleted: e.author === n.H,
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
				u = e => e.author !== n.H ? null : e.body === n.I ? c.c.User : e.body === n.Qb ? c.c.Moderator : null
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
					adPromotedUserPostIds: [],
					adSupplementaryText: null,
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
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t) => ({
					profile: s.T(e),
					post: s.K(e, t),
					media: s.C(e, t),
					subreddit: s.jb(e),
					comment: s.h({
						state: e,
						commentId: t
					})
				}),
				i = e => {
					let {
						state: t,
						commentId: r,
						collapsed: i
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "view",
						noun: i ? "collapsed_comment" : "comment",
						...s.o(t),
						...d(t, r)
					})
				},
				o = e => {
					let {
						state: t,
						commentId: r,
						collapsed: i
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "consume",
						noun: i ? "collapsed_comment" : "comment",
						...s.o(t),
						...d(t, r)
					})
				},
				c = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.rb(t),
					subreddit: s.jb(t),
					post: s.K(t, e),
					actionInfo: s.d(t),
					app: s.f(t),
					referrer: s.Y(t),
					session: s.fb(t)
				}),
				a = e => t => ({
					source: "post_detail",
					action: "click",
					noun: "comment_image",
					...s.o(t),
					...d(t, e)
				})
		},
		"./src/reddit/helpers/trackers/communityTopics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
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
					...d.o(e),
					subreddit: {
						...d.jb(e) || {},
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
				m = (e, t, r, n) => {
					Object(i.a)({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "add_related_topic"
					})
				},
				p = (e, t, r, n) => {
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
				g = (e, t, r) => Object(i.a)({
					...l(e, t, r),
					noun: r.context === n.communitySettings ? "save" : "save_community_topics"
				}),
				j = (e, t, r, n) => {
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
					...n.o(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "load",
					noun: "serving",
					feed: n.r(t)
				}),
				i = e => t => Object(s.a)({
					...n.o(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "fail",
					noun: "serving",
					feed: n.r(t)
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
					subreddit: d.jb(e),
					userSubreddit: d.tb(e)
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
					...d.o(e),
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
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "y", (function() {
				return v
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "m", (function() {
				return S
			})), r.d(t, "u", (function() {
				return E
			})), r.d(t, "t", (function() {
				return x
			})), r.d(t, "v", (function() {
				return C
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "c", (function() {
				return N
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t) => {
					var r, n, s, d, i, o, c, a, u, l, b;
					const {
						modNote: m,
						subredditId: p,
						userId: f,
						postId: O,
						commentId: g,
						subredditSearch: j,
						filteredType: _,
						filteredSubredditId: I
					} = t, h = g || (null === (n = null === (r = m) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), v = O || (null === (d = null === (s = m) || void 0 === s ? void 0 : s.postInfo) || void 0 === d ? void 0 : d.id);
					return {
						modnote: {
							type: null == m ? void 0 : m.itemType,
							content: null === (i = m) || void 0 === i ? void 0 : i.note,
							label: null === (c = null === (o = m) || void 0 === o ? void 0 : o.label) || void 0 === c ? void 0 : c.toLowerCase(),
							operatorId: null === (a = null == m ? void 0 : m.operator) || void 0 === a ? void 0 : a.id,
							subredditSearch: j,
							filteredType: null == _ ? void 0 : _.toLowerCase(),
							filteredSubredditId: null == I ? void 0 : I.toLowerCase()
						},
						modAction: {
							targetUserId: f || (null === (u = null == m ? void 0 : m.user) || void 0 === u ? void 0 : u.id),
							action: null === (b = null === (l = m) || void 0 === l ? void 0 : l.actionType) || void 0 === b ? void 0 : b.toLowerCase()
						},
						...h ? {
							comment: {
								id: h,
								postId: v || "none"
							}
						} : null,
						...v ? {
							post: {
								id: v
							}
						} : null,
						subreddit: {
							id: p
						}
					}
				},
				i = "moderator",
				o = e => t => ({
					source: i,
					action: "view",
					noun: "modnote_quickaccess",
					correlationId: Object(n.d)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				c = e => t => {
					const r = {
						source: i,
						action: "close",
						noun: "modnote_quickaccess",
						correlationId: Object(n.c)(n.a.ModNotes),
						...s.o(t),
						...d(0, e)
					};
					return Object(n.b)(n.a.ModNotes), r
				},
				a = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				u = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				l = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				b = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				m = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				p = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				f = e => t => ({
					source: i,
					action: "click",
					noun: "username_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				O = e => t => ({
					source: i,
					action: "click",
					noun: "mod_username_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				g = e => t => ({
					source: i,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				j = e => t => ({
					source: i,
					action: "view",
					noun: "user_profile_hovercard",
					correlationId: Object(n.d)(n.a.ModNotes, !1),
					...s.o(t),
					...d(0, e)
				}),
				_ = e => t => ({
					source: i,
					action: "click",
					noun: "add_note_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				I = e => t => ({
					source: i,
					action: "click",
					noun: "user_mod_log_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				h = e => t => ({
					source: i,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				v = e => t => ({
					source: i,
					action: "view",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				y = e => t => ({
					source: i,
					action: "close",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				T = e => t => ({
					source: i,
					action: "click",
					noun: "type_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				S = e => t => ({
					source: i,
					action: "click",
					noun: "subreddit_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				E = e => t => ({
					source: i,
					action: "select",
					noun: "type_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				x = e => t => ({
					source: i,
					action: "select",
					noun: "subreddit_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				C = e => t => ({
					source: i,
					action: "submit",
					noun: "submit_note_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				w = e => t => ({
					source: i,
					action: "click",
					noun: "delete_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				A = e => t => ({
					source: i,
					action: "click",
					noun: "cancel_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
				}),
				N = e => t => ({
					source: i,
					action: "click",
					noun: "delete_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...d(0, e)
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
				b = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/redditGQL/types.ts"));
			const m = e => `${e.subredditId}--${e.bannedAtUTC}-usernote`,
				p = e => `${e.subredditId}--${e.bannedAtUTC}-actionnote`,
				f = e => {
					const t = m(e),
						{
							modNote: r
						} = e;
					return r ? {
						__typename: "ModUserNote",
						id: t,
						itemType: b.x.Ban,
						createdAt: new Date(1e3 * e.bannedAtUTC),
						operator: {
							id: e.bannedById,
							displayName: e.bannedBy
						},
						user: {
							id: e.id,
							displayName: e.username
						},
						label: b.E.Ban,
						note: r
					} : null
				},
				O = e => {
					return {
						__typename: "ModActionNote",
						id: p(e),
						itemType: b.x.Ban,
						createdAt: new Date(1e3 * e.bannedAtUTC),
						operator: {
							id: e.bannedById,
							displayName: e.bannedBy
						},
						user: {
							id: e.id,
							displayName: e.username
						},
						description: e.banMessage,
						longDescription: e.banMessage,
						banDays: e.duration,
						isPermanentBan: !e.duration
					}
				},
				g = {};
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(i.d)(r, n.user.id, b.w.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.H: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, d = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, o = Object(i.d)(n, d, b.w.All);
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
								d = Object(i.d)(r, n, b.w.All);
							s[d] = e.id
						}), {
							...e,
							...s
						}
					}
					case s.p: {
						const {
							bannedUsers: r
						} = t.payload, n = Object.values(r)[0], {
							subredditId: s
						} = n, d = n.id;
						if (!n.modNote) return e;
						const o = m(n),
							c = Object(i.d)(s, d, b.w.All);
						return {
							...e,
							[c]: o
						}
					}
					default:
						return e
				}
			};
			const _ = {};
			var I = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
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
				h = r("./node_modules/icepick/icepick.js");
			const v = {};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
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
							return Object(h.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.T: {
							const {
								notes: r
							} = t.payload;
							return Object(h.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.R: {
							const {
								noteId: r
							} = t.payload, n = {
								...e
							};
							return delete n[r], n
						}
						case s.p: {
							const {
								bannedUsers: r
							} = t.payload;
							return Object(h.merge)(e, Object.values(r).reduce((e, t) => {
								const r = p(t),
									n = O(t);
								e[r] = n;
								const s = m(t),
									d = f(t);
								return d ? (e[s] = d, e) : e
							}, {}))
						}
						default:
							return e
					}
				},
				T = r("./node_modules/lodash/uniq.js"),
				S = r.n(T);
			const E = {};
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: n,
							newModNote: s,
							filter: d
						} = t.payload;
						if (d !== b.w.All && d !== b.w.Note) return e;
						const o = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(i.d)(n, o, d),
							a = d === b.w.All ? b.w.Note : b.w.All,
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
						} = t.payload, d = Object(i.d)(r, n, b.w.All), o = Object(i.d)(r, n, b.w.Note), c = e[d] ? e[d].filter(e => e !== s) : [], a = e[o] ? e[o].filter(e => e !== s) : [];
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
					case s.p: {
						const {
							bannedUsers: r
						} = t.payload, n = Object.values(r)[0], {
							subredditId: s
						} = n, d = n.id, o = Object(i.d)(s, d, b.w.All), c = Object(i.d)(s, d, b.w.Note), a = Object(i.d)(s, d, b.w.Ban), u = p(n), l = m(n), f = e[o] ? [l, u, ...e[o]] : [], O = e[c] ? [l, ...e[c]] : [], g = e[a] ? [u, ...e[a]] : [];
						return {
							...e,
							...e[o] ? {
								[o]: f
							} : null,
							...e[c] ? {
								[c]: O
							} : null,
							...e[a] ? {
								[a]: g
							} : null
						}
					}
					default:
						return e
				}
			};
			const C = {};
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(i.d)(r, n.user.id, b.w.All);
						return {
							...e,
							[s]: {
								...e[s],
								[b.w.All]: (e[s][b.w.All] || 0) + 1,
								[b.w.Note]: (e[s][b.w.Note] || 0) + 1
							}
						}
					}
					case s.lb: {
						const {
							subredditId: r,
							userId: n,
							totalCounts: s
						} = t.payload, d = Object(i.d)(r, n, b.w.All);
						return {
							...e,
							[d]: Object.keys(s).reduce((e, t) => (e[t] = s[t].totalCount, e), {})
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(i.d)(r, n, b.w.All);
						return {
							...e,
							...void 0 !== e[s] ? {
								[s]: {
									...e[s],
									[b.w.All]: (e[s][b.w.All] || 1) - 1,
									[b.w.Note]: (e[s][b.w.Note] || 1) - 1
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
				lastAuthorModNotes: j,
				loadMore: I,
				models: y,
				order: x,
				totalCount: w
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
				var r, n, m, p, f;
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
					case i.o:
					case i.r:
					case i.x: {
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
							i = null === (m = e[r.subredditId]) || void 0 === m ? void 0 : m.templateIds,
							o = (null === (p = r.template) || void 0 === p ? void 0 : p.id) || (null === (f = r.template) || void 0 === f ? void 0 : f.templateId);
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
			var m = function() {
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
				p = Object(n.c)({
					error: a,
					fullyLoaded: l,
					pending: m
				}),
				f = r("./src/reddit/actions/comment/constants.ts");
			const O = [];
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.I:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.w:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				j = r("./src/reddit/actions/comment/websocket/constants.ts"),
				_ = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/lodash/uniqBy.js")),
				I = r.n(_);

			function h(e) {
				return I()(e, "id").sort((e, t) => e.created - t.created)
			}

			function v(e, t) {
				return h([...t || [], e])
			}

			function y(e, t) {
				return t && t.length > 0 ? t.filter(t => t.id !== e) : []
			}

			function T(e, t) {
				const r = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
				return {
					id: e.id,
					created: r,
					stickied: e.isStickied,
					authorId: e.authorId
				}
			}

			function S(e, t) {
				return Object.values(e).map(e => T(e, t))
			}
			const E = {};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.f:
						case f.y:
						case o.b: {
							const {
								comments: r,
								key: n
							} = t.payload, s = e[n] ? e[n] : [], d = S(r, s.find(e => e.stickied)), i = h([...s, ...d]);
							return {
								...e,
								[n]: [...i]
							}
						}
						case j.b:
						case j.c:
						case j.d: {
							const {
								comment: r,
								commentsPageKey: n
							} = t.payload;
							return {
								...e,
								[n]: v(T(r), e[n])
							}
						}
						case f.N:
						case f.M: {
							const {
								draftKey: r,
								comment: n,
								commentsPageKey: s
							} = t.payload;
							return {
								...e,
								[s]: y(r, v(T(n), e[s]))
							}
						}
						case f.L: {
							const {
								optimisticComment: r,
								commentsPageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: v(T(r), e[n])
							} : e
						}
						case f.H: {
							const {
								commentId: r,
								commentsPageKey: n
							} = t.payload;
							return {
								...e,
								[n]: y(r, e[n])
							}
						}
						default:
							return e
					}
				},
				C = r("./node_modules/lodash/mapValues.js"),
				w = r.n(C),
				A = r("./src/reddit/helpers/commentList/index.ts"),
				N = r("./src/reddit/models/Comment/index.ts");
			const L = {};

			function k(e) {
				const t = e;
				return w()(t, e => {
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
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
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
							const e = Object(A.c)({
									commentLink: c.head,
									commentsDict: r,
									moreCommentsDict: o,
									continueThreadDict: s
								}),
								t = Object(A.c)({
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
								...k(r),
								...k(s),
								...k(o),
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
								...k(r),
								...k(n),
								...k(d)
							}
						}
					}
					case j.b:
					case f.N: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, d = e[n], i = {};
						let o = null;
						return s && (i[s] = {
							...d[s],
							prev: Object(N.i)(r.id)
						}, o = Object(N.i)(s)), {
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
					case f.M: {
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
							prev: Object(N.i)(r.id)
						}, c = a), o[s] = {
							...i[s],
							next: Object(N.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...o,
								[r.id]: {
									depth: d,
									next: c,
									prev: Object(N.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const P = {};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case j.b:
					case j.c:
					case f.N: {
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
					case f.N: {
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
				api: p,
				followed: g,
				keyToChatCommentLinks: x,
				keyToCommentThreadLinkSets: R,
				keyToHeadCommentId: D,
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
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
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
				m = Object(n.a)(o, e => e.global),
				p = Object(n.a)((e, t) => {
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
				g = Object(n.a)(o, e => !1),
				j = Object(n.a)(o, e => e.isError),
				_ = Object(n.a)(o, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				h = (Object(n.a)(I, e => e.isError), Object(n.a)(I, e => e.isPending)),
				v = Object(s.a)(Object(n.a)(I, e => e.subreddits)),
				y = Object(n.a)(v, e => [{
					name: "All",
					prefixedName: "All",
					path: Object(i.e)()
				}, ...e.map(e => ({
					name: e,
					prefixedName: `r/${e}`,
					path: Object(i.f)(e)
				}))])
		},
		"./src/reddit/selectors/adsSignals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => e.adsSignals
		},
		"./src/reddit/selectors/comments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "w", (function() {
				return I
			})), r.d(t, "x", (function() {
				return h
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "J", (function() {
				return S
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "q", (function() {
				return k
			})), r.d(t, "m", (function() {
				return R
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "L", (function() {
				return U
			})), r.d(t, "s", (function() {
				return G
			})), r.d(t, "F", (function() {
				return F
			})), r.d(t, "G", (function() {
				return M
			})), r.d(t, "H", (function() {
				return q
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "N", (function() {
				return H
			})), r.d(t, "v", (function() {
				return J
			})), r.d(t, "M", (function() {
				return z
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "i", (function() {
				return V
			})), r.d(t, "I", (function() {
				return $
			})), r.d(t, "E", (function() {
				return W
			})), r.d(t, "K", (function() {
				return Y
			})), r.d(t, "p", (function() {
				return X
			})), r.d(t, "O", (function() {
				return Z
			})), r.d(t, "y", (function() {
				return ee
			})), r.d(t, "A", (function() {
				return te
			})), r.d(t, "C", (function() {
				return re
			})), r.d(t, "D", (function() {
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
				a = r("./src/reddit/models/Post/index.ts"),
				u = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				m = r("./src/lib/initializeClient/installReducer.ts"),
				p = r("./src/reddit/reducers/features/comments/index.ts"),
				f = r("./src/reddit/reducers/pages/comments/index.ts"),
				O = r("./src/redditGQL/types.ts");
			Object(m.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: f.a
				}
			});
			const g = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.error[r]
				},
				j = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.pending[r]
				},
				_ = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.fullyLoaded[r]
				},
				I = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				h = (e, t) => {
					const r = I(e, t);
					if (r) return Object(b.b)(e, {
						commentId: r
					})
				},
				v = [],
				y = Object(i.a)((e, t) => {
					const r = h(e, t),
						n = r && r.id;
					if (!n) return v;
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
				T = (e, t) => I(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				S = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = e.pages.comments.keyToPostId[r];
					return n ? e.posts.models[n] : null
				},
				E = (e, t) => {
					let {
						commentId: r,
						commentLink: n,
						commentsPageKey: s
					} = t;
					const d = e.pages.comments.keyToCommentThreadLinkSets[s];
					return d ? n ? d[n.id] : r ? d[r] : null : null
				},
				x = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.keyToCommentThreadLinkSets[r]
				},
				C = (e, t) => {
					const r = t.commentsPageKey ? E(e, t) : null;
					return r ? r.depth : null
				},
				w = (e, t) => {
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
				A = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(a.y)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== d.H).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				N = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.features.comments.collapsed[r]
				},
				L = e => e.moreComments.models,
				k = e => e.features.comments.models,
				R = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = Object(b.b)(e, {
						commentId: r
					});
					return n ? Object(b.a)(e, n) : ""
				},
				P = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!(r && e.features.comments.focused && e.features.comments.focused[r])
				},
				D = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					return !!(r && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][r])
				},
				U = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: n
					} = t;
					return !!(r && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][r])
				},
				G = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = r && e.features.comments.replyFormOpen[r] || {},
						s = Object.keys(n).find(e => n[e]),
						d = s && Object(b.b)(e, {
							commentId: s
						}),
						i = d && C(e, {
							commentId: d.id,
							commentLink: void 0,
							commentsPageKey: r
						});
					if (d && "number" == typeof i) return {
						...d,
						depth: i
					}
				},
				F = (e, t) => {
					let {
						moreCommentsId: r
					} = t;
					return e.moreComments.models[r]
				},
				M = (e, t) => {
					let {
						moreCommentsId: r
					} = t;
					return !!e.moreComments.api.pending[r]
				},
				q = (e, t) => {
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
				B = (e, t) => {
					let {
						id: r
					} = t;
					return e.continueThreads.models[r]
				},
				Q = (e, t) => {
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
				J = (e, t) => {
					let {
						draftKey: r
					} = t;
					return !!e.features.comments.submit.error[r]
				},
				z = (e, t) => {
					let {
						draftKey: r
					} = t;
					const n = e.features.comments.submit.error[r];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				K = (e, t) => {
					let {
						draftKey: r
					} = t;
					const n = e.features.comments.drafts[r];
					return !!n && n.autofocusDisabled
				},
				V = (e, t) => {
					let {
						draftKey: r
					} = t;
					return e.features.comments.drafts[r]
				},
				$ = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = r ? e.features.comments.submit.error[r] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				W = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!r && e.features.comments.submit.pending[r]
				},
				Y = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!r && e.features.comments.models[r].sendReplies
				},
				X = e => e.features.comments.visitHighlightFilter,
				Z = (e, t) => {
					const r = Object(b.b)(e, t);
					if (r) return Object(l.db)(e, r)
				},
				ee = (e, t) => {
					let {
						commentId: r
					} = t;
					var n, s;
					return !!((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r)
				},
				te = (e, t) => {
					let {
						commentId: r
					} = t;
					var n, s;
					const d = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r);
					return !!(d && d.expiresAt < Date.now())
				},
				re = Object(o.a)(u.a, l.y, (e, t) => {
					var r;
					return e && (null === (r = null == t ? void 0 : t.allowedMediaInComments) || void 0 === r ? void 0 : r.includes(O.f.Giphy)) || !1
				}),
				ne = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n;
					const s = Object(l.y)(e, {
						subredditId: r
					});
					return (null === (n = null == s ? void 0 : s.allowedMediaInComments) || void 0 === n ? void 0 : n.includes(O.f.Static)) || !1
				},
				se = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n;
					const s = Object(l.y)(e, {
						subredditId: r
					});
					return (null === (n = null == s ? void 0 : s.allowedMediaInComments) || void 0 === n ? void 0 : n.includes(O.f.Animated)) || !1
				}
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
					const s = e.discoveryUnits.nameToId[Object(n.i)(r)];
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
				return m
			})), r.d(t, "c", (function() {
				return p
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
						experimentName: d.We
					}) === d.Od
				},
				m = e => !e.media || e.media.type !== c.o.RTJSON && e.media.type !== c.o.TEXT ? "" : e.media.markdownContent,
				p = e => !e.media && e.source && Object(n.a)(e.source.url) ? e.source.displayText : "",
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
		"./src/reddit/selectors/experiments/devPlatform.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const d = Object(s.a)(n.Cb)
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
				}) === n.Wc.Enabled,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Lb
				}) === n.Vc.Enabled
		},
		"./src/reddit/selectors/experiments/loggedOutOneFeed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "a", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/countrySites.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(n.a)(o.f, i.f, (e, t) => e && !t),
				u = e => Object(d.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.fc
				}),
				l = e => !!Object(c.a)(u(e)),
				b = e => u(e) === s.qb.RemovePopularCommunities,
				m = e => u(e) === s.qb.LoggedOutUiOnly || f(e) || O(e),
				p = e => u(e) === s.qb.LoggedOutHomeDefpop,
				f = e => u(e) === s.qb.RemoveRecentCommunities,
				O = e => u(e) === s.qb.FilterOutNSFW
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
					experimentName: n.Ce
				}) === n.Od,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Be
				}) === n.Od
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "d", (function() {
				return L
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
			const m = Object(s.a)(u.h, u.d, a.e, (e, t, r) => !e && !t && !r);

			function p(e, t) {
				return r => Object(c.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: m,
					expEventOverride: t
				})
			}
			const f = p(i.mc, !0),
				O = p(i.mc, !1),
				g = p(i.oc, !0),
				j = (p(i.oc, !1), p(i.nc, !0)),
				_ = p(i.nc, !1),
				I = p(i.pc, !0),
				h = p(i.pc, !1),
				v = p(i.qc, !0),
				y = p(i.lc, !0),
				T = Object(s.a)(f, g, (e, t) => e === i.Xc.Enabled || t === i.Yc.Enabled),
				S = Object(s.a)(j, I, (e, t) => e === i.sb.BlurredPreview || e === i.sb.NoPreview || t === i.sb.BlurredPreview || t === i.sb.NoPreview),
				E = Object(s.a)(_, h, (e, t) => e === i.sb.BlurredPreview || t === i.sb.BlurredPreview),
				x = Object(s.a)(j, I, v, y, (e, t, r, n) => e === i.sb.NoPreview || t === i.sb.NoPreview || r === i.sb.NoPreview || n === i.rb.Enabled),
				C = Object(s.a)(T, x, E, (e, t, r) => (e || t) && !r),
				w = e => {
					const t = E(e),
						r = C(e);
					return t ? n.Blurred : r ? n.NoPreview : null
				},
				A = Object(s.a)(y, e => e === i.rb.Enabled),
				N = e => {
					const t = E(e),
						r = Object(d.m)(e);
					return t && r
				},
				L = e => {
					var t;
					const r = E(e),
						n = Object(l.b)(e),
						s = null === (t = null == n ? void 0 : n.routeMatch) || void 0 === t ? void 0 : t.match;
					if (s) {
						const t = Object(b.k)(e, {
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
			const c = Object(n.a)(i.e, o.K, (e, t) => e && !t),
				a = e => Object(d.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: s.Hc
				}),
				u = Object(n.a)(e => Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: s.Gc
				}), e => e),
				l = e => Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: s.rc
				})
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
			const d = e => n.qf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.yf
				}),
				i = e => n.qf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.jf
				}),
				o = (e, t, r) => {
					const d = r(e, t);
					return !(!d || !d.meter) && (d.meter.enabled && n.gg.Enabled === Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.fg
					}))
				},
				c = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.xf
				}),
				a = e => {
					switch (e) {
						case n.Cf.Five:
							return .05;
						case n.Cf.Ten:
							return .1;
						case n.Cf.Fifty:
							return .5;
						default:
							return .01
					}
				},
				u = e => n.qf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.zf
				}),
				l = e => n.qf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.vf
				}),
				b = e => n.qf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.wf
				})
		},
		"./src/reddit/selectors/experiments/supportingLinkAds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./node_modules/reselect/es/index.js");
			const i = Object(d.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.Lc
			}), e => e === n.Od)
		},
		"./src/reddit/selectors/experiments/targetedOnboardingSkip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const i = e => Object(s.c)(e, {
				experimentEligibilitySelector: d.R,
				experimentName: n.Oc
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
					const t = Object(d.l)(e);
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
					const a = Object(d.l)(e);
					if (!(a && Object(s.e)(a).toLowerCase() === r.toLowerCase())) return c;
					const u = Object(d.Bb)(e, {
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
						case d.nb:
						case d.ob: {
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
						case d.L: {
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
				return m
			})), r.d(t, "g", (function() {
				return p
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
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, d.w.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				m = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, d.w.All)]
				},
				p = (e, t, r, n) => {
					if (!n) return;
					const s = m(e, t, r);
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
				return O
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "e", (function() {
				return h
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/safeJSONParse/index.ts"),
				s = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/isFakeSubreddit/index.ts"),
				i = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				c = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				u = r("./src/reddit/selectors/activeModal.ts"),
				l = r("./src/reddit/selectors/emailVerification.ts"),
				b = r("./src/reddit/selectors/experiments/onboarding.ts"),
				m = r("./src/reddit/selectors/experiments/targetedOnboardingSkip.ts"),
				p = r("./src/reddit/selectors/platform.ts"),
				f = r("./src/reddit/selectors/user.ts");
			const O = e => {
					const t = Object(p.q)(e);
					return Boolean((null == t ? void 0 : t[o.F]) && Object(n.a)(t[o.F]))
				},
				g = e => e.onboarding.shouldSkipOnboardingState,
				j = Object(s.a)(f.R, f.Q, O, g, e => {
					var t;
					const r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams,
						n = r.subredditName;
					return Object(m.a)(e) !== i.ag.TargetedOnboarding || n && Object(d.a)(n, {
						countryCode: r.countryCode,
						languageCode: r.languageCode
					}) || !Object.keys(r).length
				}, (e, t, r, n, s) => (e || t) && r && !n && s),
				_ = e => {
					const {
						genderUpdateState: t
					} = e.onboarding;
					if (t.success || t.failure) return t
				},
				I = Object(s.a)(b.c, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(i.tg)(e) ? t : null),
				h = Object(s.a)(b.c, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(c.I)(r) || Object(c.J)(r) || Object(c.y)(r)
				}, u.b, l.a, g, (e, t, r, n, s) => e === i.ub.PopoverFeed15 && t && Object(a.c)() && !r && !n && !s)
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(s.e)(e);
					return !Object(d.R)(e) && !t && e.seo.linksModule.frontpage || null
				},
				o = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				c = Object(n.a)(i, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: o(e.url)
					})).filter(e => e.title)
				})) : null),
				a = Object(n.a)(c, e => e ? e.map(e => ({
					...e,
					links: e.links.filter(e => e.visible)
				})) : null),
				u = (e, t) => {
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
				return m
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "A", (function() {
				return f
			})), r.d(t, "B", (function() {
				return O
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "z", (function() {
				return k
			})), r.d(t, "y", (function() {
				return R
			})), r.d(t, "u", (function() {
				return P
			})), r.d(t, "a", (function() {
				return D
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
				return H
			})), r.d(t, "D", (function() {
				return J
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
				m = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id || t.push(u(e)[r].displayText);
					return t || []
				},
				p = e => Object.keys(e.tags.models.globalSubredditTags).length > 0,
				f = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				O = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				g = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.inputByItemId[r] || ""
				},
				j = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.suggestedInputByItemId[r] || ""
				},
				_ = [],
				I = (e, t) => {
					let {
						subredditId: r
					} = t;
					return s()(h(e, {
						subredditId: r
					}), e => !!e.action) || s()(y(e, {
						subredditId: r
					}), e => !!e.action)
				},
				h = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedOptions[r] || _
				},
				v = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedSuggestedOptions[r] || _
				},
				y = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.deselectedOptions[r] || _
				},
				T = {},
				S = {},
				E = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				x = e => e.tags.models.globalSubredditTags,
				C = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				w = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditScopedTags[r] || S
				},
				A = (e, t) => {
					const r = i()(t);
					for (let n = 0; n < r.length; n++)
						if (r[n].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[n];
					return null
				},
				N = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.itemTags[r] || T
				},
				L = (e, t) => {
					let {
						itemId: r
					} = t;
					return !!e.tags.models.itemTags[r]
				},
				k = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.suggestedItemTags[r] || T
				},
				R = (e, t) => {
					let {
						itemId: r
					} = t;
					return i()(k(e, {
						itemId: r
					})).filter(e => e.isRelevant).map(e => Object(a.e)(e, !0))
				},
				P = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.sortedItemTags[r] || []
				},
				D = Object(o.a)((e, t) => {
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
						const s = (n ? j(e, {
								subredditId: r
							}) : g(e, {
								subredditId: r
							})) ? C(e) : E(e),
							d = n ? v(e, {
								subredditId: r
							}) : h(e, {
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
					return h(e, {
						subredditId: r
					}).concat(y(e, {
						subredditId: r
					}))
				},
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					return h(e, {
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
				H = e => {
					const t = Q(e);
					return M(e, t)
				},
				J = e => e.tags.api.updatePrimaryTag.pending,
				z = (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object.keys(N(e, {
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
				return m
			})), r.d(t, "c", (function() {
				return p
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
				m = (e, t) => {
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
				p = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return !1;
					const n = m(e, {
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
				return m
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
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
				m = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(c.I)(e, t.subredditName)), r) {
						const t = b(e, {
							subredditId: r
						});
						if (t) return e.widgets.models[t]
					}
					return null
				},
				p = (e, t) => e.widgets.sidebar[t.subredditId] || [],
				f = (e, t) => e.widgets.menuIds[t.subredditId],
				O = (e, t) => {
					const r = f(e, t);
					return r ? e.widgets.models[r] : null
				},
				g = (e, t) => {
					const r = e.widgets.sidebar[t.subredditId];
					return Array.isArray(r) ? r.reduce((t, r) => {
						const n = e.widgets.models[r];
						return n && t.push(n.kind), t
					}, []) : a
				},
				j = (e, t) => {
					const r = p(e, t);
					for (const n of r) {
						const t = e.widgets.models[n];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				_ = (e, t) => {
					const r = p(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
					return r.length ? r : null
				},
				I = Object(n.a)((e, t) => {
					if (t.type === s.a.PROFILE) {
						const r = Object(o.k)(e, {
							profileName: t.name
						});
						return r ? {
							profile: {
								id: r.id,
								name: Object(d.i)(r.name)
							}
						} : {}
					}
					const r = Object(c.C)(e, {
							subredditName: t.name
						}),
						n = Object(c.z)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: n ? n.contentCategory : null,
							id: r.id,
							name: Object(d.i)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"78ced610408f"}')
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
			e.exports = JSON.parse('{"id":"755b41459c8e"}')
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
			e.exports = JSON.parse('{"id":"9ae193edef38"}')
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"58b71dbd3384"}')
		},
		"./src/redditGQL/operations/FetchGlobalTags.json": function(e) {
			e.exports = JSON.parse('{"id":"f4a581740c21"}')
		},
		"./src/redditGQL/operations/FetchSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"bac623887684"}')
		},
		"./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"cbcafcbff9c6"}')
		},
		"./src/redditGQL/operations/GetCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"c68af8245099"}')
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
			e.exports = JSON.parse('{"id":"ac9d5bb31a5d"}')
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
			e.exports = JSON.parse('{"id":"3076a6a9056e"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"e61106627ea9"}')
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
		"./src/redditGQL/operations/SubredditAchievementFlairs.json": function(e) {
			e.exports = JSON.parse('{"id":"87dbc93cba65"}')
		},
		"./src/redditGQL/operations/SubredditCustomEmojis.json": function(e) {
			e.exports = JSON.parse('{"id":"76faa900e33f"}')
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
			e.exports = JSON.parse('{"id":"275c0a044c0c"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"c6d0655ffe52"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"435da821c4a0"}')
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
			e.exports = JSON.parse('{"id":"cbf1c81d6285"}')
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
			e.exports = JSON.parse('{"id":"026bf4f1acc7"}')
		},
		"./src/redditGQL/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/redditGQL/operations/UpdatePowerupsSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"699ae1616006"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"376ea7786e14"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.ff8f792e3f30f835fe50.js.map