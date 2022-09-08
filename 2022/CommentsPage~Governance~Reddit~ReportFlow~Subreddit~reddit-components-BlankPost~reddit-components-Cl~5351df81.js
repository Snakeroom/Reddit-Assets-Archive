// https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.da90493429932a990e2f.js
// Retrieved at 9/8/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"], {
		"./src/lib/name/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return o
			}));
			var n = r("./src/reddit/helpers/name/index.ts");
			const s = /^u_[\w-]+$/;

			function i(e) {
				return s.test(Object(n.h)(e))
			}

			function d(e) {
				return `u_${Object(n.h)(e)}`
			}

			function o(e, t) {
				return Object(n.h)(e) === Object(n.h)(t)
			}
		},
		"./src/lib/pageTitle/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				i = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				d = r("./src/reddit/selectors/countrySites.ts"),
				o = r("./src/reddit/selectors/meta.ts");
			const c = (e, t, r) => {
				const {
					languageCode: c
				} = Object(d.c)(e), a = r || (Object(o.j)(e) || s.DEFAULT_LOCALE), u = Object(n.isPseudoLocale)(a) ? s.DEFAULT_LOCALE : a;
				if (c) {
					const e = Object(i.d)(c, u.substring(0, 2));
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
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				i = Object(n.a)(s)
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return k
			})), r.d(t, "o", (function() {
				return L
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "i", (function() {
				return G
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "s", (function() {
				return B
			})), r.d(t, "k", (function() {
				return Q
			})), r.d(t, "h", (function() {
				return J
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "q", (function() {
				return K
			})), r.d(t, "r", (function() {
				return $
			})), r.d(t, "d", (function() {
				return W
			})), r.d(t, "a", (function() {
				return X
			})), r.d(t, "b", (function() {
				return Z
			})), r.d(t, "p", (function() {
				return ee
			})), r.d(t, "c", (function() {
				return te
			})), r.d(t, "m", (function() {
				return re
			})), r.d(t, "e", (function() {
				return ne
			})), r.d(t, "l", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/telemetry/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
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
				g = r("./src/reddit/helpers/commentList/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				_ = r("./src/reddit/helpers/trackers/comment.ts"),
				I = r("./src/reddit/models/Comment/index.ts"),
				h = r("./src/reddit/models/Post/index.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/Vote/index.ts"),
				S = r("./src/reddit/selectors/comments.ts"),
				T = r("./src/reddit/selectors/commentSelector.ts"),
				E = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				x = r("./src/reddit/selectors/moderatingComments.ts"),
				C = r("./src/reddit/selectors/moderatorPermissions.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				A = r("./src/reddit/actions/comment/constants.ts");
			const N = {},
				k = Object(d.a)(A.q),
				L = e => async (t, r, n) => {
					let {
						apiContext: i
					} = n;
					if (!Object(w.Q)(r())) return t(Object(a.openRegisterModal)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(S.m)(r(), {
							commentId: e
						})
					}));
					const d = r().features.comments.models[e];
					if (!d) return;
					const o = d.isSaved ? O.o : O.k;
					if (t(k({
							[e]: {
								isSaved: !d.isSaved
							}
						})), (await o(i(), e)).ok) {
						const r = d.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							n = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(m.f)({
							text: r,
							kind: v.b.Undo,
							buttonText: n,
							buttonAction: L(e)
						}))
					} else t(k({
						[e]: {
							isSaved: d.isSaved
						}
					}))
				}, R = e => `viewing-comment-${e}`, P = n.a.telemetry.commentConsumedThreshold, D = e => async (t, r) => {
					const s = r(),
						d = Object(T.b)(s, {
							commentId: e
						});
					if (!d || Math.random() > n.a.telemetry.commentSampleRate) return;
					_.c({
						state: s,
						commentId: e,
						collapsed: d.collapsed
					}), i.c.start(R(e));
					const o = setTimeout(() => _.a({
						state: s,
						commentId: e,
						collapsed: d.collapsed
					}), P);
					N[e] = o
				}, G = (e, t) => async (r, n) => {
					const s = n(),
						d = R(e);
					if (Object(T.b)(s, {
							commentId: e
						}) && i.c.has(d)) {
						const r = i.c.end(d);
						!t && r < P && (clearTimeout(N[e]), delete N[e])
					}
				}, U = Object(d.a)(A.z), F = Object(d.a)(A.y), M = Object(d.a)(A.x), q = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const d = n(),
						a = d.moreComments.models[t],
						u = d.platform.currentPage,
						b = u && u.routeMatch,
						m = b && b.match,
						{
							partialPostId: f
						} = m ? m.params : null;
					if (!f) return;
					const j = Object(h.x)(f);
					r(U({
						moreCommentsId: a.id
					}));
					const _ = await Object(O.h)(i(), j, {
						token: a.token
					}, Object(E.a)(d));
					if (_.ok) {
						const t = _.body,
							s = Object(g.a)(t, j, d);
						r(F({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const i = d.posts.models[j];
						let u;
						i && "subreddit" === i.belongsTo.type && t.comments && (u = i.belongsTo.id, await r(Object(o.a)({
							commentIds: Object.keys(_.body.comments),
							postIds: [i.id],
							skip: ["communityDetails", "subscription"],
							subredditId: u
						})), Object(C.i)(d, u) && r(Object(p.c)(j, !0, a.token)));
						const b = _.body.comments;
						await r(Object(c.b)(u, b)), Object(C.h)(n(), {
							subredditId: i.belongsTo.id
						}) && r(Object(l.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else r(M({
						moreCommentsItem: a,
						..._.error
					}))
				}, B = Object(f.a)(g.b, y.a.upvoted), Q = Object(f.a)(g.b, y.a.downvoted), J = Object(d.a)(A.l), H = Object(d.a)(A.k), V = Object(d.a)(A.g), z = Object(d.a)(A.h), K = (Object(d.a)(A.c), Object(d.a)(A.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const i = s(),
							d = Object(I.i)(t),
							o = Object(S.n)(i, {
								commentLink: d,
								commentsPageKey: r
							}),
							c = Object(x.b)(i, {
								commentId: t,
								commentsPageKey: r
							}),
							a = o.depth;
						e(V({
							commentId: t,
							commentsPageKey: r,
							isCollapsed: c
						})), c || 0 !== a || n(t, !0), Object(b.d)()
					}
				}), $ = e => {
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
				}, W = e => {
					let {
						commentLink: t,
						commentsPageKey: r,
						lineDepth: n,
						scrollToAndRemeasure: s
					} = e;
					return async (e, i) => {
						const d = i(),
							o = Object(g.e)(r, t, n, d),
							c = Object(x.b)(d, {
								commentId: t.id,
								commentsPageKey: r
							});
						e(V({
							commentId: o,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === n && s(o, !0), Object(b.d)()
					}
				}, Y = Object(d.a)(A.t), X = e => t => t(Y({
					draftKey: e
				})), Z = Object(d.a)(A.a), ee = Object(d.a)(A.I), te = Object(d.a)(A.b), re = Object(d.a)(A.w), ne = Object(d.a)(A.e), se = Object(d.a)(A.A), ie = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var i, d;
					if (e) {
						const r = await Object(O.c)(s(), e);
						if (r.ok) {
							const n = r.body;
							"Comment" === (null === (i = n.data.commentById) || void 0 === i ? void 0 : i.__typename) && t(se({
								commentId: e,
								media: Object(j.b)(null === (d = n.data.commentById) || void 0 === d ? void 0 : d.content)
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
				return i
			})), r.d(t, "d", (function() {
				return d
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				d = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/camelCase.js"),
				i = r.n(s),
				d = r("./src/lib/constants/index.ts"),
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
				g = r("./src/redditGQL/operations/UpdatePostRequirements.json"),
				j = r("./src/reddit/endpoints/subreddit/about.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/contentControls.ts"),
				h = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/actions/contentControls/constants.ts");
			const S = Object(o.a)(y.b),
				T = Object(o.a)(y.c),
				E = Object(o.a)(y.a),
				x = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = {
						subredditName: e.toLowerCase()
					};
					if (Object(I.a)(r(), i)) return;
					t(T(i));
					let o = Object(v.G)(r(), e);
					if (!o) {
						const r = await Object(j.a)(s(), e, !1);
						if (r.ok) {
							o = r.body.data.subreddit.id
						}
						if (!o) {
							const e = r.error || {
								type: d.J.NOT_FOUND_ERROR
							};
							return void t(E({
								...i,
								error: e
							}))
						}
					}
					const a = Object(h.c)(r(), {
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
					if (l) t(S({
						...i,
						...l
					}));
					else {
						const r = m.error || {
							type: d.J.UNKNOWN_ERROR
						};
						t(E({
							...i,
							error: r
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: m.body,
								responseOk: m.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, C = Object(o.a)(y.d), w = (e, t) => async (r, s, i) => {
					let {
						gqlContext: d
					} = i;
					const o = e.toLowerCase(),
						c = Object(v.G)(s(), e);
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
					})(d(), c, t);
					if (l.ok) return r(C({
						subredditName: o,
						partialUpdates: t
					})), r(Object(a.f)({
						kind: _.b.SuccessCommunity,
						text: n.fbt._("Subreddit content controls updated successfully", null, {
							hk: "1n6QIQ"
						})
					})), {
						success: !0
					}; {
						const s = A(l.fieldErrors);
						return r(Object(a.f)({
							kind: _.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: w(e, t)
						})), {
							success: !1,
							errors: s || void 0
						}
					}
				}, A = e => e && e.map(e => ({
					...e,
					field: i()(e.field)
				}))
		},
		"./src/reddit/actions/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
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
			const i = "DISCOVERY_UNIT__LIST_PENDING",
				d = "DISCOVERY_UNIT__LIST_LOADED",
				o = "DISCOVERY_UNIT__LIST_FAILED",
				c = Object(n.a)(i),
				a = Object(n.a)(d),
				u = Object(n.a)(o),
				l = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const i = t(),
						d = Object(s.d)(i),
						o = Object(s.c)(i);
					if (d || o) return;
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
				return i
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = Object(n.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection)),
				i = Object(n.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo))
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return V
			})), r.d(t, "k", (function() {
				return z
			})), r.d(t, "o", (function() {
				return K
			})), r.d(t, "r", (function() {
				return $
			})), r.d(t, "q", (function() {
				return W
			})), r.d(t, "l", (function() {
				return te
			})), r.d(t, "m", (function() {
				return re
			})), r.d(t, "n", (function() {
				return ne
			})), r.d(t, "b", (function() {
				return se
			})), r.d(t, "u", (function() {
				return ie
			})), r.d(t, "v", (function() {
				return de
			})), r.d(t, "g", (function() {
				return oe
			})), r.d(t, "a", (function() {
				return ce
			})), r.d(t, "w", (function() {
				return ue
			})), r.d(t, "p", (function() {
				return le
			})), r.d(t, "i", (function() {
				return be
			})), r.d(t, "j", (function() {
				return pe
			})), r.d(t, "s", (function() {
				return me
			})), r.d(t, "t", (function() {
				return fe
			})), r.d(t, "f", (function() {
				return Oe
			})), r.d(t, "c", (function() {
				return ge
			})), r.d(t, "d", (function() {
				return je
			})), r.d(t, "h", (function() {
				return _e
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/index.js"),
				i = r.n(s),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				c = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/makeRequest/index.ts")),
				a = r("./src/lib/uploadToS3/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/CreateMediaUploadLease.json"),
				b = r("./src/redditGQL/operations/SubmitMediaUpload.json");
			var p = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				m = r("./src/reddit/helpers/media/index.ts"),
				f = r("./src/redditGQL/types.ts");
			const O = new Map([
					["image/png", f.m.Png],
					["image/gif", f.m.Gif],
					["image/jpeg", f.m.Jpeg]
				]),
				g = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const d = await Object(m.h)(t) || t.type,
						o = O.get(d);
					if (!o) throw new Error("Unacceptable file type");
					const {
						mediaId: f,
						uploadLease: g
					} = await (async (e, t) => {
						const r = await Object(u.a)(e, {
							...l,
							variables: {
								input: t
							}
						});
						if (!Object(c.c)(r) || r.error) throw new Error("Failed to create upload lease");
						return r.body.data.createMediaUploadLease
					})(i(), {
						mimetype: o
					}), j = Object(p.a)(g), _ = await Object(a.a)(t, j);
					if (!Object(c.c)(_)) throw new Error("Failed to upload file to S3");
					return await (async (e, t) => {
						const r = await Object(u.a)(e, {
							...b,
							variables: {
								input: t
							}
						});
						if (!Object(c.c)(r) || r.error) throw new Error("Failed to submit media")
					})(i(), {
						mediaId: f,
						redditId: e
					}), {
						mediaId: f,
						mimeType: o
					}
				};
			var j = r("./src/reddit/actions/toaster.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/lib/delay/index.ts"),
				h = r("./src/lib/makeActionCreator/index.ts"),
				v = r("./src/reddit/endpoints/economics/predictions.ts");

			function y(e) {
				let {
					topPredictorsRank: t,
					currentRank: r
				} = e;
				return {
					currentRank: r ? S(r) : null,
					topPredictorsRank: t.map(S)
				}
			}

			function S(e) {
				let {
					score: t,
					rank: r,
					redditor: n,
					redditorInfo: s
				} = e;
				var i, d;
				return {
					score: t,
					rank: r,
					redditor: n ? {
						...n,
						icon: null !== (i = n.icon) && void 0 !== i ? i : null,
						profile: null !== (d = n.profile) && void 0 !== d ? d : null
					} : null,
					redditorInfo: s
				}
			}
			var T = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				x = r("./src/reddit/actions/login.ts"),
				C = r("./src/reddit/actions/modal.ts"),
				w = r("./src/reddit/constants/modals.ts"),
				A = r("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				R = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				P = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: o.a
				}
			});
			const D = Object(h.a)(P.d),
				G = Object(h.a)(P.c),
				U = Object(h.a)(P.e),
				F = Object(h.a)(P.f),
				M = Object(h.a)(P.i),
				q = Object(h.a)(P.h),
				B = Object(h.a)(P.j),
				Q = Object(h.a)(P.q),
				J = Object(h.a)(P.t),
				H = Object(h.a)(P.p),
				V = Object(h.a)(P.b),
				z = (e, t, r) => async (n, s, i) => {
					let {
						gqlContext: d
					} = i;
					const o = Object(k.Q)(s());
					if (!Object(A.c)(s(), {
							subredditId: e
						})) {
						n(D({
							subredditId: e
						}));
						try {
							const {
								predictionTournaments: s,
								predictionWinners: i
							} = await Object(v.i)(d(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: o
							}), c = y(i);
							n(U({
								subredditId: e,
								leaderboard: c
							})), s && (n(ne(e, s)), null == s || s.forEach(e => {
								let {
									tournamentId: t,
									winners: r
								} = e;
								n(F({
									tournamentId: t,
									leaderboard: y(r)
								}))
							}))
						} catch {
							n(G({
								subredditId: e
							}))
						}
					}
				}, K = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const d = Object(k.Q)(n());
					if (!Object(A.g)(n(), {
							tournamentId: t
						})) {
						r(M({
							tournamentId: t
						}));
						try {
							const {
								predictionWinners: n
							} = await Object(v.j)(i(), {
								subredditId: e,
								tournamentId: t,
								includeCurrentRank: d
							}), s = y(n);
							r(B({
								tournamentId: t,
								leaderboard: s
							}))
						} catch {
							r(q({
								tournamentId: t
							}))
						}
					}
				}, $ = e => {
					let {
						coinPackageId: t,
						optionId: r,
						postId: n,
						price: s
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: o
						} = d;
						const c = await Object(v.p)(o(), {
							coinPackageId: t,
							optionId: r,
							postId: n,
							price: s
						});
						return e(Q({
							pollId: n,
							prediction: c,
							price: s
						})), c
					}
				}, W = e => {
					let {
						optionId: t,
						postId: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: i
						} = s;
						const d = await Object(v.n)(i(), {
								optionId: t,
								postId: r
							}),
							{
								resolvePrediction: o
							} = d.body.data;
						if (!(null == o ? void 0 : o.poll)) throw new Error("Failed to resolve prediction");
						return e(H({
							pollId: r,
							prediction: o.poll
						})), o.poll
					}
				}, Y = Object(h.a)(P.k), X = Object(h.a)(P.m), Z = Object(h.a)(P.l), ee = Object(h.a)(P.o), te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						d = Object(N.G)(i, e);
					if (Object(R.k)(i, {
							subredditId: d
						})) return Object(R.g)(i, {
						subredditId: d
					});
					t(Y({
						subredditId: d
					}));
					const o = await Object(v.k)(s(), {
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
							const r = y(e.winners);
							t(F({
								tournamentId: e.tournamentId,
								leaderboard: r
							}))
						}
					});
					const a = o.map(e => Object(E.a)(e));
					return t(Z({
						subredditId: d,
						tournaments: a
					})), t(X({
						subredditId: d,
						tournaments: a
					})), t(ee({
						posts: c,
						meta: i.meta
					})), a
				}, re = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						d = Object(N.G)(i, e),
						o = await Object(v.l)(s(), {
							subredditName: e,
							isLatestOnly: !0
						});
					t(ne(d, o))
				}, ne = (e, t) => r => {
					const n = t.map(e => Object(E.a)(e));
					r(X({
						subredditId: e,
						tournaments: n
					}))
				}, se = Object(h.a)(P.a), ie = Object(h.a)(P.r), de = Object(h.a)(P.s), oe = (e, t, r, n) => async (s, i, d) => {
					let {
						gqlContext: o
					} = d;
					const c = i(),
						a = Object(L.b)(c);
					let u = null;
					if (!a) throw new Error("Failed to create tournament, no prediction drafts attached");
					if (n instanceof File) {
						const {
							mediaId: t,
							mimeType: r
						} = await s(g(`icon_pred_${e}`, n));
						await Object(I.a)(3e3), u = {
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
					const l = await Object(v.e)(o(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: f.G.Tokens,
							tokenIcon: u
						}),
						b = Object(E.a)(l);
					s(ae(b))
				}, ce = (e, t) => async (r, n, s) => {
					let {
						gqlContext: d
					} = s;
					const o = Object(L.b)(n());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(v.a)(d(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						a = Object(E.a)(c);
					r(ae(a))
				}, ae = Object(h.a)(P.g), ue = (e, t, r) => async (t, n, s) => {
					let {
						gqlContext: i
					} = s;
					const d = await Object(v.o)(i(), {
							tournamentId: e,
							name: r
						}),
						o = Object(E.a)(d);
					t(ae(o))
				}, le = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(v.f)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return t(ae(d.tournament)), d.tournament
				}, be = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(v.g)(s(), {
						postId: e
					});
					if (!i.ok || i.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: d
					} = i.body.data;
					if (!d.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return d.predictionChipPackages
				}, pe = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(v.h)(s(), {
						tournamentId: e
					});
					if (!i.ok || i.error) throw new Error("Failed to fetch token balance");
					const {
						identity: d
					} = i.body.data;
					if (!d.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return d.predictionTokens
				}, me = e => {
					let {
						coinPackageId: t,
						selectedOptionId: r,
						price: n,
						pollId: s,
						tournamentId: i,
						tournamentPostId: d
					} = e;
					return async e => {
						const o = await e($({
							coinPackageId: t,
							optionId: r,
							postId: s,
							price: n
						}));
						return e(J({
							predictionId: s,
							selectedOptionId: r,
							tournamentId: i,
							tournamentPostId: d
						})), o
					}
				}, fe = e => async (t, r) => {
					const n = r();
					Object(k.Q)(n) ? await t(Object(C.h)(w.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(x.openLoginModal)())
				}, Oe = () => Object(C.g)(w.a.ECON_PREDICTIONS_PREMIUM_UPSELL), ge = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					try {
						const r = await Object(v.b)(i(), {
							postId: e
						});
						t(V({
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
						gqlContext: i
					} = s;
					const d = await Object(v.c)(i(), {
						postId: e,
						...t
					});
					return r(V({
						postId: e,
						prediction: d
					})), d
				}
			}
			const _e = e => async (t, r, n) => {
				let {
					gqlContext: s
				} = n;
				return Object(v.m)(s(), {
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
				return S
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "p", (function() {
				return L
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
				return z
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/addQueryParams/index.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
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
				g = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts");
			const I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				h = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				v = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				S = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				E = Object(s.a)(I),
				x = Object(s.a)(h),
				C = Object(s.a)(v),
				w = Object(s.a)(y),
				A = Object(s.a)(S),
				N = Object(s.a)(T),
				k = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = r(),
						d = Object(_.k)(i),
						o = e || d && Object(f.e)(d);
					if (!o) return;
					if (Object(O.d)(i, {
							username: o
						})) return;
					t(E(o));
					const m = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.mb.GET
					}))(s(), o);
					if (m.ok) {
						const e = p(m.body);
						t(x({
							username: o,
							accountsData: e
						}))
					} else t(C(m.error))
				}, L = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						i = Object(g.d)(s);
					if (!i) return;
					const d = s.externalAccount.api.subreddit.fetched[i],
						o = s.externalAccount.api.subreddit.pending[i];
					if (d || o) return;
					const m = Object(j.x)(s, {
						subredditName: i
					});
					if (!(m && m.hasExternalAccount)) return;
					e(w(i));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.mb.GET
					}))(n(), i);
					if (f.ok) {
						const t = p(f.body);
						e(A({
							subredditName: i,
							accountsData: t
						}))
					} else e(N(f.error))
				}, R = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", P = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", D = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", G = Object(s.a)(R), U = Object(s.a)(P), F = Object(s.a)(D), M = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(G({
						provider: e
					}));
					const i = Object(_.k)(r()),
						d = Object(f.e)(i),
						o = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.mb.POST
						}))(s(), e);
					o.ok ? t(U({
						provider: e,
						username: d
					})) : t(F({
						provider: e,
						error: o.error
					}))
				}, q = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", J = Object(s.a)(q), H = Object(s.a)(B), V = Object(s.a)(Q), z = e => async (t, r, s) => {
					let {
						apiContext: p
					} = s;
					t(J({
						provider: e
					}));
					const f = Object(i.a)(window.location.href, {
							[o.b]: e
						}),
						O = await ((e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: c.mb.POST,
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
					} else t(V({
						provider: e,
						error: O.error
					})), t(Object(d.f)({
						kind: m.b.Error,
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
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
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
				p = r("./src/reddit/helpers/chooseVariant/index.ts");
			const m = Object(l.a)(e => Object(p.c)(e, {
				experimentName: b.ld,
				experimentEligibilitySelector: p.a
			}), e => e === b.Jd);
			var f = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				O = r("./src/reddit/actions/gold/constants.ts");
			const g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, d) => {
						let {
							gqlContext: o
						} = d;
						const c = s();
						if (!(!m(c) || null != Object(f.d)(c, {
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
								const i = j(s.subredditInfoById);
								_(r, e, i)
							} catch (u) {
								i.c.captureException(u), await r(y(n.fbt._("Something went wrong", null, {
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
				I = Object(s.a)(O.mb),
				h = Object(s.a)(O.lb),
				v = Object(s.a)(O.kb),
				y = e => async t => {
					await t(v(e)), t(Object(d.f)({
						kind: u.b.Error,
						duration: d.a,
						text: e
					}))
				}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return I
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "j", (function() {
				return A
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "h", (function() {
				return B
			})), r.d(t, "b", (function() {
				return Q
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "f", (function() {
				return H
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return z
			})), r.d(t, "k", (function() {
				return $
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/endpoints/gold/powerups/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				m = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/helpers/trackers/powerups.ts"),
				j = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				_ = r("./src/reddit/actions/gold/constants.ts");
			const I = e => async (t, r, s) => {
				let {
					gqlContext: d
				} = s;
				if (!!r().user.powerups.fetched && !e) return;
				t(h());
				const o = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const e = await Object(l.h)(d());
					if (e.ok) {
						const r = e.body;
						if (r.errors && r.errors.length) return void(await t(S(o)));
						if (!r.data.identity) return void(await t(y(o)));
						await t(v({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (c) {
					i.c.captureException(c), await t(S(o))
				}
			}, h = Object(s.a)(_.Bb), v = Object(s.a)(_.Ab), y = Object(s.a)(_.zb), S = e => async (t, r) => {
				await t(y(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, T = (e, t) => async (e, r, s) => {
				let {
					gqlContext: d
				} = s;
				var o;
				if (!!r().users.powerups.fetched) return;
				e(E());
				const c = n.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(l.e)(d(), t);
					if (r.ok) {
						const n = r.body;
						if (n.errors && n.errors.length) return void(await e(w(c)));
						if (!n.data.redditorInfoById) return void(await e(C(c)));
						const s = (null === (o = n.data.redditorInfoById.powerups) || void 0 === o ? void 0 : o.supportedSubreddits) || [];
						await e(x({
							supportedSubreddits: s,
							userId: t
						}))
					}
				} catch (a) {
					i.c.captureException(a), await e(w(c))
				}
			}, E = Object(s.a)(_.eb), x = Object(s.a)(_.db), C = Object(s.a)(_.cb), w = e => async (t, r) => {
				await t(C(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, A = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return async (r, s, d) => {
					let {
						gqlContext: o
					} = d;
					var c;
					const a = s();
					if (Object(m.i)(a, {
							subredditId: e
						}) && Object(f.a)(a, {
							subredditId: e
						}) && (!t.fullData || Object(m.k)(a, {
							subredditId: e
						})) && !t.forceLoad) return;
					r(L());
					const u = t.fullData ? l.g : l.f;
					try {
						const n = await u(o(), e, !!t.includeIdentity, Object(p.g)(a));
						if (n.ok) {
							const s = n.body;
							if (null === (c = s.errors) || void 0 === c ? void 0 : c.length) return void(await r(G(s.errors[0].message)));
							if (t.fullData) {
								const {
									data: t
								} = s, n = N(t.subredditInfoById, t.identity);
								k(r, e, n)
							} else {
								const {
									powerups: t = null,
									powerupsSettings: n = null
								} = s.data.subredditInfoById || {};
								await r(R({
									powerups: t,
									subredditId: e,
									benefitStatuses: null == n ? void 0 : n.benefitStatuses
								}))
							}
						}
					} catch (b) {
						i.c.captureException(b), await r(G(n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})))
					}
				}
			}, N = (e, t) => {
				var r, n, s;
				const {
					powerups: i = null,
					powerupsSettings: d = null,
					supporters: o = null,
					productOffers: c = null,
					subredditAchievementFlairs: a
				} = e || {}, u = null == t ? void 0 : t.powerups;
				return {
					powerups: i,
					benefitStatuses: null == d ? void 0 : d.benefitStatuses,
					productOffers: null !== (r = null == c ? void 0 : c.offers) && void 0 !== r ? r : [],
					recentSupporters: null !== (n = null == o ? void 0 : o.recentSupporters) && void 0 !== n ? n : [],
					topSupporters: null !== (s = null == o ? void 0 : o.topSupporters) && void 0 !== s ? s : [],
					userPowerups: u,
					subredditAchievementFlairs: null != a ? a : []
				}
			}, k = (e, t, r) => e(P({
				subredditId: t,
				...r
			})), L = Object(s.a)(_.rb), R = Object(s.a)(_.qb), P = Object(s.a)(_.pb), D = Object(s.a)(_.ob), G = e => async (t, r) => {
				await t(D(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, U = Object(s.a)(_.R), F = Object(s.a)(_.S), M = Object(s.a)(_.T), q = e => async (t, r) => {
				await t(U(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, B = (e, t, r, s) => async (d, o, p) => {
				let {
					gqlContext: m
				} = p;
				d(F({
					subredditId: e,
					powerupsCount: t,
					isAnonymous: r,
					allocatedAt: s
				}));
				try {
					const i = {
							subredditId: e,
							powerupsCount: t,
							isAnonymous: r
						},
						p = await Object(l.d)(m(), {
							input: i
						});
					let f = !1,
						g = null;
					if (p.ok) {
						const e = p.body;
						f = e.data.reallocatePowerups.ok, g = e.data.reallocatePowerups.errors
					}
					const _ = Object(O.k)(o());
					if (f && _) await d((e => async (t, r) => {
						t(M(e)), await t(A(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(I(!0)), t(Object(j.a)(e.subredditId, !0)), e.powerupsCount && (t(Object(c.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(c.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(a.f)({
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
						user: _,
						allocatedAt: s
					}));
					else {
						const e = g && g[0] && g[0].message || n.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
						await d(q(e))
					}
				} catch (f) {
					i.c.captureException(f);
					const e = f,
						t = e && e.message || n.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
					await d(q(t))
				}
			}, Q = Object(s.a)(_.E), J = Object(s.a)(_.Q), H = e => Object(c.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), V = (e, t) => async (r, n) => {
				const s = n();
				return Object(O.k)(s) ? (Object(d.a)(Object(g.f)(e)(s)), r(Object(c.h)(u.a.ECON_POWERUPS_MARKETING, {
					subredditId: t
				}))) : r(Object(o.openLoginModal)())
			}, z = () => async (e, t) => {
				const r = t();
				return Object(O.k)(r) ? e(Object(c.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(o.openLoginModal)())
			}, K = Object(s.a)(_.M), $ = (e, t) => async (r, n, s) => {
				let {
					gqlContext: i
				} = s;
				const d = await Object(l.i)(i(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (d.ok) {
					const t = d.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
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
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/SubredditFlairedRedditorByName.json"),
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
				} = t, i = {};
				let d = null;
				if (!r) return {
					subredditId: n,
					searchResult: d,
					flairedUsers: i
				};
				const {
					name: o
				} = r;
				if (d = o, s) {
					const {
						flair: e,
						redditor: t
					} = s, {
						name: r
					} = t;
					e && (i[r] = Object(l.a)(e)[0])
				}
				return {
					subredditId: n,
					searchResult: d,
					flairedUsers: i
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
						edges: i
					} = n, d = [], o = {};
					return i.forEach(e => {
						const {
							node: t
						} = e, {
							flair: r,
							redditor: {
								name: n
							}
						} = t;
						if (d.push(n), r) {
							const e = Object(l.a)(r)[0];
							o[n] = e
						}
					}), {
						subredditId: r,
						flairedUsers: o,
						userOrder: d,
						pageInfo: s
					}
				},
				m = r("./src/reddit/models/SubredditModeration/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/models/User/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/actions/grantUserFlair/constants.ts");
			const _ = Object(s.a)(j.i),
				I = Object(s.a)(j.g),
				h = Object(s.a)(j.f),
				v = (e, t) => async (r, s, d) => {
					let {
						gqlContext: c
					} = d;
					const u = t && t.after || "",
						l = t && t.before || "",
						b = Object(g.G)(s(), e),
						O = Object(m.e)(b, u, l);
					if (!!s().pages.modHub.flairedUsers.userOrder[O]) return;
					r(_());
					const j = await ((e, t, r) => Object(i.a)(e, {
						...o,
						variables: {
							subredditName: t,
							...r
						}
					}))(c(), e, t);
					if (j.ok) {
						const e = {
							...p(j.body),
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
				}, y = Object(s.a)(j.l), S = Object(s.a)(j.k), T = Object(s.a)(j.j), E = (e, t) => async (r, s, o) => {
					let {
						gqlContext: c
					} = o;
					const u = Object(g.V)(s(), {
						subredditId: e
					}).name;
					r(y());
					const l = await ((e, t, r) => Object(i.a)(e, {
						...d,
						variables: {
							subredditName: t,
							name: r
						}
					}))(c(), u, t);
					if (l.ok) {
						const e = b(l.body);
						r(S(e))
					} else r(T(l.error)), r(Object(a.f)({
						kind: f.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})
					}))
				}, x = Object(s.a)(j.e), C = Object(s.a)(j.c), w = Object(s.a)(j.d), A = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					const o = s(),
						u = Object(g.V)(o, {
							subredditId: t
						}).name;
					r(x());
					const l = await Object(c.a)(d(), e, u);
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
				}, N = Object(s.a)(j.h), k = Object(s.a)(j.b), L = Object(s.a)(j.a), R = (e, t, r) => async (s, i, d) => {
					let {
						apiContext: o
					} = d;
					const l = i(),
						b = l.pages.modHub.flairedUsers.search.result === e && !l.pages.modHub.flairedUsers.models[e],
						p = {
							userName: e,
							subredditId: t,
							applied: r
						},
						m = r && r.templateId,
						j = Object(g.V)(l, {
							subredditId: t
						}),
						_ = r && Object(u.g)(r),
						I = r ? r.cssClass : void 0,
						h = await Object(c.g)(o(), e, j.name, m, _, I);
					if (h.ok) {
						if (b) {
							let e;
							Object.keys(l.pages.modHub.flairedUsers.userOrder).forEach(t => {
								!1 === l.pages.modHub.flairedUsers.pageInfo[t].hasNextPage && l.pages.modHub.flairedUsers.userOrder[t].length < 50 && (e = t)
							});
							const t = {
								...p,
								key: e
							};
							s(L(t))
						}
						e === (l.user.account && Object(O.e)(l.user.account)) ? s(N(p)) : b || s(k(p))
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
				return p
			})), r.d(t, "e", (function() {
				return m
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
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				b = Object(i.a)(l),
				p = "META__META_RECEIVED",
				m = (Object(i.a)(p), "META__SET_LOCALE"),
				f = Object(i.a)(m),
				O = e => async (t, r, i) => {
					let {
						apiContext: l
					} = i;
					if (!e) return;
					const b = r(),
						p = l();
					let m;
					if (t(f(e)), Object(n.isPseudoLocale)(e) ? (Object(u.N)(b) || Object(a.b)(b)) && (m = e) : m = Object(n.isoLocaleToR2Language)(e), !m) return;
					const O = new URL(window.location.href);
					Object(u.Q)(b) ? Object(n.isPseudoLocale)(m) ? O.searchParams.set("locale", m) : (await Object(d.a)(Object(o.a)(p, [c.a]), {
						data: {
							lang: m
						},
						endpoint: `${p.apiUrl}/api/v1/me/prefs`,
						method: s.mb.PATCH,
						type: "json"
					}), O.searchParams.delete("locale")) : O.searchParams.delete("locale"), window.location.href = O.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(i.a)(g), _ = "META__PWA_ENTERED", I = "META__PWA_LEFT", h = Object(i.a)(_), v = Object(i.a)(I)
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/actions/comment/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/ModQueueTriggers.json");
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
					const b = await ((e, t) => Object(i.a)(e, {
						...d,
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
				return i
			}));
			const n = "RESET_GENDER_UPDATE_STATE",
				s = "SUBREDDIT_INTEREST_TOPICS",
				i = "SKIP_ONBOARDING_MODAL"
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
				i = r("./src/reddit/actions/onboarding/constants.ts"),
				d = r("./src/reddit/helpers/counters/onboarding.ts"),
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
					Object(d.b)(c.f.FirstPopover, t)
				}
			}, b = Object(n.a)(i.a), p = Object(n.a)(i.c), m = Object(n.a)(i.b);
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
				return G
			})), r.d(t, "pageLoaded", (function() {
				return U
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
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
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
				g = r("./src/reddit/actions/subreddit.ts"),
				j = r("./src/reddit/actions/subredditDuplicates.ts"),
				_ = r("./src/config.ts"),
				I = r("./src/lib/constants/index.ts"),
				h = r("./src/lib/makeApiRequest/index.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				S = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = r("./src/reddit/models/User/index.ts"),
				E = r("./src/reddit/selectors/contentControls.ts"),
				x = r("./src/reddit/selectors/postCollection.ts"),
				C = r("./src/reddit/selectors/postCreations.ts"),
				w = r("./src/reddit/selectors/posts.ts"),
				A = r("./src/reddit/selectors/profile.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				k = r("./src/reddit/selectors/user.ts");
			const L = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, s = Object(N.A)(e, {
							subredditName: n
						});
						s && (r = s.name)
					}
					return Object(c.n)(r)
				},
				R = "POST_CREATION__PAGE_PENDING",
				P = "POST_CREATION__PAGE_LOADED",
				D = "POST_CREATION__PAGE_FAILED",
				G = Object(d.a)(R),
				U = Object(d.a)(P),
				F = Object(d.a)(D),
				M = () => async (e, t) => {
					const r = t(),
						n = Object(C.a)(r);
					n !== Object(C.mb)(r) && e(Object(f.g)({
						submissionType: n
					}))
				}, q = e => async (t, r, n) => {
					const {
						collectionId: s,
						profileName: d,
						subredditName: c
					} = e, u = Object(o.a)(e), p = r(), m = p.creations.api.page.pending[u], f = p.creations.api.page.fetched[u], j = p.creations.api.page.error[u];
					if (m) return;
					if (f && !j) return void t(M());
					const y = [];
					t(G({
						key: u
					}));
					let x = c;
					!c && d && (x = `u_${d}`), y.push(((e, t) => Object(h.a)(e, {
						method: I.mb.GET,
						endpoint: Object(v.a)(`${_.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: x,
						collectionId: s
					})), d && (y.push(t(O.d(d))), y.push(t(O.b(d))));
					const [C] = await Object(S.a)("postCreation", () => Promise.all(y));
					if (C.ok) {
						const e = C.body,
							{
								posts: n = {},
								subredditAboutInfo: s
							} = e;
						if (t(U({
								key: u,
								meta: p.meta,
								...e,
								posts: n
							})), !Object(k.Q)(r())) return;
						if (s) {
							const e = Object.keys(s)[0];
							await t(Object(b.j)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(M());
						const d = [];
						d.push(t(l.o()));
						const o = Object(k.k)(r());
						if (o && o.hasUserProfile && d.push(t(O.d(Object(T.e)(o)))), c && !Object(i.a)(c)) {
							d.push(t(g.o(c))), !!Object(E.b)(r(), {
								subredditName: c
							}) || d.push(t(Object(a.a)(c)))
						}
						await Promise.all(d)
					} else t(F({
						error: C.error,
						key: u
					}))
				}, B = e => async (t, r) => {
					const {
						subredditName: i,
						profileName: d
					} = e.params, o = e.queryParams, c = o.collection;
					if (await t(q({
							collectionId: c,
							profileName: d,
							subredditName: i
						})), !Object(k.Q)(r())) return void Object(y.a)(t, r());
					let a;
					if (i ? (a = Object(N.A)(r(), {
							subredditName: i
						}), await t(Object(u.a)({
							subredditName: i
						}))) : d && (a = Object(A.k)(r(), {
							profileName: d
						})), o.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: i
						} = e, d = [];
						let o;
						s ? o = Object(N.G)(n(), s) : i && (o = Object(k.mb)(n(), {
							userName: i
						})), o && d.push(r(Object(j.b)(o, t))), d.push(r(Object(m.R)(t))), await Promise.all(d);
						const c = Object(w.f)(n(), {
							postId: t
						});
						r(Object(f.m)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, o.source_id));
					else if (c) {
						const i = Object(x.q)(r(), {
							collectionId: c
						});
						a && i && i.subredditId === a.id || t(Object(n.c)(Object(s.a)(e.url, ["collection"])))
					}
					t(p.m({
						title: L(r())
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
				i = r("./src/reddit/actions/profile/index.ts"),
				d = r("./src/config.ts"),
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
				g = Object(n.a)(m),
				j = Object(n.a)(f),
				_ = e => async (t, r, n) => {
					const {
						draftId: p,
						profileName: m
					} = e, f = Object(s.a)(e), O = r(), _ = O.creations.api.page.pending[f], I = O.creations.api.page.fetched[f], h = O.creations.api.page.error[f];
					if (_ || I && !h || !p) return;
					t(i.d(m));
					const v = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${d.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: o.mb.GET
					}))(n.apiContext(), p, m));
					if (v.ok) {
						const e = v.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(g({
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
				return it
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return dt
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
				return pt
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
				i = r("./node_modules/lodash/find.js"),
				d = r.n(i),
				o = r("./node_modules/lodash/pick.js"),
				c = r.n(o),
				a = r("./node_modules/react-router-redux/es/index.js"),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/countrySites/index.ts"),
				b = r("./src/lib/isAdHocMultireddit/index.ts"),
				p = r("./src/lib/isFakeSubreddit/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/makeListingKey/index.ts"),
				O = r("./src/lib/makeSearchKey/index.ts"),
				g = r("./src/lib/pageTitle/index.ts"),
				j = r("./src/lib/pageTitle/helpers.ts"),
				_ = r("./src/lib/performanceTimings/index.tsx"),
				I = r("./src/lib/safeGet/index.ts"),
				h = r("./src/reddit/actions/ads/index.ts"),
				v = r("./src/reddit/actions/communityFlairs/index.ts"),
				y = r("./src/reddit/actions/contentGate.ts"),
				S = r("./src/reddit/actions/discoveryUnit.ts"),
				T = r("./src/reddit/actions/economics/helpers/async.ts"),
				E = r("./src/reddit/actions/economics/predictions/index.ts"),
				x = r("./src/reddit/actions/externalAccount.ts"),
				C = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				w = r("./src/reddit/actions/gold/powerups.ts"),
				A = r("./src/reddit/actions/grantUserFlair/index.ts"),
				N = r("./src/reddit/actions/meta.ts"),
				k = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				L = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				R = r("./src/reddit/actions/onboarding/index.ts"),
				P = r("./src/reddit/actions/pages/search/index.ts"),
				D = r("./src/reddit/actions/platform.ts"),
				G = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				U = r("./src/reddit/actions/seo/linksModule.ts"),
				F = r("./src/reddit/actions/seo/topicLinks.ts"),
				M = r("./src/lib/makeGqlRequest/index.ts"),
				q = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				B = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				Q = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				J = r("./src/reddit/selectors/widgets.ts");
			const H = (e, t) => async (r, n) => {
				const s = n(),
					i = Object(Q.V)(s, {
						subredditId: e
					}),
					d = Object(J.j)(s, {
						subredditId: e
					});
				i.isNSFW || (null == d ? void 0 : d.length) > 0 && d.some(e => "community-list" === e) || r(Object(U.e)({
					id: e,
					data: t
				}))
			}, V = (e, t) => async r => {
				t && r(Object(F.b)({
					id: e,
					data: t
				}))
			};
			var z = r("./src/reddit/actions/structuredStyles/index.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
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
				const i = s.name,
					d = Object(te.m)(n),
					o = Object(Q.x)(n, {
						subredditName: i
					});
				if (!o) return;
				const {
					activity7Day: c
				} = o, u = !!c && c >= 51 && c <= 100, l = !i || Object(p.a)(i), b = d && d.urlParams.subredditName === i, m = Object(re.Q)(n), f = Object(ee.c)(n, {
					subredditId: Object(Q.G)(n, i)
				});
				if (l || b || Object(W.E)() || !u || !m || f) return;
				const O = Object(J.d)(t(), {
					subredditName: i
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object($.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${i}${Z.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: X.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(W.Ib)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${i} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var se = r("./src/reddit/actions/subreddit/questions.ts"),
				ie = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				de = r("./src/reddit/actions/subredditSettings.ts"),
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
				ge = r("./src/lib/base64/index.ts"),
				je = r("./src/reddit/constants/experiments.ts"),
				_e = r("./src/reddit/constants/graphql.ts"),
				Ie = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				he = r("./src/reddit/selectors/adsSignals.ts"),
				ve = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ye = r("./src/reddit/selectors/experiments/econ/index.ts"),
				Se = r("./src/reddit/selectors/experiments/onboarding.ts"),
				Te = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var Ee = r("./src/reddit/endpoints/profile/info.ts"),
				xe = r("./src/reddit/helpers/canonicalUrls.ts"),
				Ce = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				we = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
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
			var ke = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Le = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				Re = r("./src/reddit/helpers/post/index.ts"),
				Pe = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				De = r("./src/reddit/helpers/trackers/feed.ts"),
				Ge = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = r("./src/reddit/models/RichTextJson/index.ts"),
				Fe = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Me = r("./src/reddit/selectors/communityFlairs.ts"),
				qe = r("./src/reddit/selectors/experiments/countrySites.ts"),
				Be = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts"),
				Qe = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Je = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				He = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Ve = r("./src/reddit/selectors/gold/powerups/index.ts"),
				ze = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Ke = r("./src/reddit/selectors/moderatorPermissions.ts"),
				$e = r("./src/reddit/selectors/multireddit.ts"),
				We = r("./src/reddit/selectors/posts.ts"),
				Ye = r("./src/lib/initializeClient/installReducer.ts"),
				Xe = r("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Ze = r("./node_modules/uuid/v4.js"),
				et = r.n(Ze),
				tt = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				rt = r("./src/reddit/helpers/locales.ts"),
				nt = r("./src/reddit/selectors/meta.ts");

			function st(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object(Ye.a)({
				features: {
					modUserNotes: Xe.a
				}
			});
			const it = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: n,
							reason: s
						}
					} = e, i = n ? n.account : void 0, d = n && n.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (s === Y.e.NotFoundSubreddit) r(y.t({
							account: i,
							features: d,
							subredditName: o
						}));
						else if (s === Y.e.BannedSubreddit) {
						const e = n ? n.banMessage || n.ban_message : void 0;
						r(y.r({
							banMessage: e,
							account: i,
							features: d,
							subredditName: o
						}))
					}
					if (451 === e.status && r(y.s({
							account: i,
							features: d,
							subredditName: o
						})), 403 === e.status)
						if (s === Y.e.GoldSubreddit) r(y.w({
							account: i,
							features: d,
							subredditName: o
						}));
						else if (s === Y.e.PrivateSubreddit) r(y.x({
						account: i,
						features: d,
						subredditDescription: n.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!n.isContributorRequestsDisabled,
						isContributorRequestTimestamp: n.isContributorRequestTimestamp ? parseInt(n.isContributorRequestTimestamp, 10) : void 0,
						subredditId: n.id
					}));
					else if (s === Y.e.QuarantinedSubreddit) {
						const e = !n || void 0 === n.quarantineRequiresEmailOptin || n.quarantineRequiresEmailOptin;
						r(y.z({
							account: i,
							features: d,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: n.quarantineMessage,
							quarantineMessageHtml: n.quarantineMessageHtml || "",
							quarantineMessageRTJson: n.quarantineMessageRTJson || Ue.i
						}))
					} else if (s === Y.e.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						} = n;
						r(y.v({
							account: i,
							features: d,
							subredditName: o,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						}))
					}
				}
			}, dt = "PAGE__SUBREDDIT_PENDING", ot = "PAGE__SUBREDDIT_LOADED", ct = "PAGE__SUBREDDIT_FAILED", at = Object(m.a)(dt), ut = Object(m.a)(ot), lt = Object(m.a)(ct), bt = (e, t, r, i) => async (o, c, a) => {
				var l, b, m, f, O, g, j, y, S, L, P, G, U, F, J, z, W, Y, Z, ee, ne, ue, le, xe, Ce, we;
				const Ae = c(),
					Ge = Object(re.P)(Ae) || Object(re.Q)(Ae);
				if (Object(I.a)(Ae.listings.postOrder.api.pending, e)) return;
				const Ue = null === (b = null === (l = Object(te.b)(Ae)) || void 0 === l ? void 0 : l.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					{
						currentPage: Me
					} = Ae.platform,
					{
						countryCode: Je,
						languageCode: He
					} = (null == Me ? void 0 : Me.urlParams) || {},
					Ke = Object(p.a)(t, {
						countryCode: Je,
						languageCode: He
					}),
					$e = Object(p.c)(t, {
						countryCode: Je,
						languageCode: He
					}),
					We = (Object(p.b)(t, {
						countryCode: Je,
						languageCode: He
					}) || $e) && Ae.posts.recent.length ? {
						...r,
						recentPostIds: Ae.posts.recent
					} : r;
				We.layout = be.e[Object(pe.S)(Ae, {})], $e && (We.forceGeopopular = !0), o(at({
					key: e
				}));
				const Ye = !Ke && Object(te.l)(Ae) && Object(Qe.b)(Ae);
				let Xe;
				if (r.sort === u.Z.AWARDED && $e) Xe = Object(me.a)(a.gqlContext(), {
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
					const e = Ye ? () => Object(Oe.b)(a.gqlContext(), Object(Oe.c)(Ae, t, We, !0), Ge) : () => Object(Oe.a)(a.apiContext(), t, We);
					Xe = Object(_.i)(e, {
						name: Ye ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ue,
						isLoggedIn: Ge
					})
				}
				const Ze = Object(Q.U)(c(), {
						subredditId: Object(Q.G)(c(), t)
					}).length > 0,
					dt = Object(_.i)(() => (async function(e, t) {
						return Object(M.a)(e, {
							...Te,
							variables: t
						})
					})(a.gqlContext(), ((e, t) => {
						let {
							after: r,
							isMobile: n,
							subredditName: s,
							isFake: i,
							isLoggedIn: d,
							layout: o,
							limit: c,
							hasRules: a,
							sort: u,
							t: l
						} = t;
						var b, p;
						const m = Object(Se.c)(e),
							f = !!m && !Object(je.mg)(m) && (i || m === je.xb.Community),
							{
								adsSeenCount: O,
								totalPostsSeenCount: g,
								sessionStartTime: j
							} = Object(he.a)(e),
							_ = Object(ye.g)(e),
							I = Object(ve.a)(e),
							h = {
								subredditName: s,
								isFake: i,
								sort: u,
								adContext: {
									layout: o ? o.toUpperCase() : _e.a.Card,
									reddaid: e.user.reddaid,
									clientSignalSessionData: {
										adsSeenCount: O,
										totalPostsSeenCount: g,
										sessionStartTime: j
									}
								},
								includeAchievementFlairs: !i && _,
								includeIdentity: d,
								includeInterestTopics: f,
								includePowerups: !i,
								includeQuestions: d && !i,
								includeRules: !i && !a,
								includeRedditorKarma: d && !(null === (p = null === (b = e.user.account) || void 0 === b ? void 0 : b.karma) || void 0 === p ? void 0 : p.total),
								includeSubredditLinks: !d,
								includeSubredditRankings: I,
								includeTopicLinks: !d
							};
						return u && (h.sort = u.toUpperCase()), l && (h.range = l.toUpperCase()), n ? h.pageSize = Object(Ie.a)(o) : c && (h.pageSize = c), r && (h.after = Object(ge.a)(r)), h
					})(Ae, {
						after: r.after,
						isLoggedIn: Ge,
						subredditName: t,
						hasRules: Ze,
						isFake: Ke,
						isMobile: r.isMobile,
						layout: r.layout,
						limit: r.limit,
						sort: r.sort,
						t: r.t
					})), {
						name: "fetchSubredditPageExtra",
						page: Ue,
						isLoggedIn: Ge
					}),
					ot = et()();
				let ct, pt;
				Ye ? ct = await Xe : [ct, pt] = await Promise.all([Xe, dt]);
				const mt = pt && Object(s.c)(pt) ? pt.body.data : null,
					ft = ct.body,
					Ot = (null == ft ? void 0 : ft.subreddits) ? ((e, t) => {
						var r;
						return null === (r = d()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(ft.subreddits, t) : null;
				if (ft && !Ye) {
					const e = await Object(Re.a)(a.gqlContext, ft.posts);
					ft.posts = e;
					const t = await Object(tt.a)(a.apiContext(), ft.posts, Ae);
					ft.posts = t
				}
				o(D.n(ct.status));
				const gt = `error-${e}`,
					jt = Ke || Ot;
				if (ct.ok && jt) {
					if (!Ke && Ot) {
						if (Object(ye.g)(Ae)) {
							let e;
							e = Ye ? ft : Object(C.b)(null == mt ? void 0 : mt.subredditInfoByName), Object(C.a)(o, Ot, e)
						}
						let e;
						e = Ye ? ft.powerups : Object(w.c)(null == mt ? void 0 : mt.subredditInfoByName, null == mt ? void 0 : mt.identity);
						const t = (null === (f = null === (m = null == ft ? void 0 : ft.subredditAboutInfo) || void 0 === m ? void 0 : m[Ot]) || void 0 === f ? void 0 : f.detectedLanguage) || (null === (O = null == mt ? void 0 : mt.subredditInfoByName) || void 0 === O ? void 0 : O.detectedLanguage);
						Object(nt.d)(Ae) && t && Object(qe.f)(Ae) && await Object(rt.a)(t, o), ft.subredditAboutInfo[Ot].detectedLanguage = t, Object(w.a)(o, Ot, e), Ye ? o(Object(E.n)(Ot, ft.predictionTournaments || [])) : (null == mt ? void 0 : mt.subredditInfoByName) && o(Object(E.n)(Ot, mt.subredditInfoByName.predictionTournaments || [])), Object(Ve.f)(c(), {
							subredditId: Ot
						}) && Object(Be.a)(c())
					}
					let n;
					ft.geoFilter && o(Object(N.k)(ft.geoFilter));
					const s = ft.postIds.filter(e => !!ft.posts[e].isMeta);
					if (s.length && Ot) {
						const e = Object(_.i)(() => Object(fe.a)(a.apiContext(), Ot, s), {
								name: "getGovernanceData",
								page: Ue,
								isLoggedIn: Ge
							}),
							t = await e;
						t.ok && (n = t.body)
					}
					if (Ot) {
						const e = (null === (j = null === (g = null == ft ? void 0 : ft.subredditAboutInfo) || void 0 === g ? void 0 : g[Ot]) || void 0 === j ? void 0 : j.isEligibleForContentBlocking) || (null === (y = null == mt ? void 0 : mt.subredditInfoByName) || void 0 === y ? void 0 : y.isEligibleForContentBlocking);
						ft.subredditAboutInfo[Ot].isEligibleForContentBlocking = e;
						const t = (null === (L = null === (S = null == ft ? void 0 : ft.subredditAboutInfo) || void 0 === S ? void 0 : S[Ot]) || void 0 === L ? void 0 : L.isMediaInCommentsSettingShown) || (null === (P = null == mt ? void 0 : mt.subredditInfoByName) || void 0 === P ? void 0 : P.isMediaInCommentsSettingShown);
						ft.subredditAboutInfo[Ot].isMediaInCommentsSettingShown = t, ft.subredditAboutInfo[Ot].directoryRankings = null === (G = null == mt ? void 0 : mt.subredditInfoByName) || void 0 === G ? void 0 : G.directoryRankings
					}
					if (mt) {
						const e = null === (F = null === (U = mt.identity) || void 0 === U ? void 0 : U.redditor) || void 0 === F ? void 0 : F.karma,
							t = {
								karma: {
									...(null === (J = Ae.user.account) || void 0 === J ? void 0 : J.karma) || Ee.a,
									...e
								}
							};
						ft.account && Object.assign(ft.account, t)
					}
					if (Ot) {
						let e;
						Ye ? e = null === (z = ft.subredditAboutInfo[Ot]) || void 0 === z ? void 0 : z.notificationLevel : st(mt) && (e = null === (W = mt.subredditInfoByName) || void 0 === W ? void 0 : W.notificationLevel), ft.subredditAboutInfo[Ot].notificationLevel = e
					}
					const d = null === (Y = ft.subredditPermissions) || void 0 === Y ? void 0 : Y.posts;
					!Ye && d && o(Object(k.a)({
						postIds: ft.postIds
					}));
					let u = null == ft ? void 0 : ft.interestTopicRecommendations;
					if (!u && (null == mt ? void 0 : mt.interestTopics)) {
						const e = Object(ke.a)(mt.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && o(Object(R.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), o(ut({
						key: e,
						meta: Ae.meta,
						governance: n,
						correlationId: ot,
						...ft,
						postIds: ft.postIds
					}));
					const l = null === (ee = null === (Z = Object(te.b)(Ae)) || void 0 === Z ? void 0 : Z.locationState) || void 0 === ee ? void 0 : ee[ae.b.FeedLoadReason];
					if (Object(De.b)(r.isRefresh ? ae.a.UserRefresh : null != l ? l : ae.a.InitialLoad)(c()), !Ke) {
						const e = Object(Q.G)(c(), t);
						Ye && ft.subredditRules ? o(K.t({
							rules: {
								rules: ft.subredditRules
							},
							subredditId: e
						})) : (null === (ne = null == mt ? void 0 : mt.subreddit) || void 0 === ne ? void 0 : ne.rules) && o(K.t({
							rules: Object(Le.a)(mt.subreddit.rules),
							subredditId: e
						}));
						const r = Object(v.c)(ft.posts, e),
							n = Object(v.b)(ft.structuredStyles),
							s = (n ? Object(v.d)(n) : []).concat(r);
						o(Object(v.a)(s, e))
					}
					if (i && o($.g(gt)), o(Object(h.b)(Fe.a.SUBREDDIT)), o(Object(x.p)()), Ot) {
						let e, r, n;
						if (Ye ? (e = ft.questions, r = ft.subredditLinks, n = ft.subredditTopicLinks) : (e = null == mt ? void 0 : mt.subredditInfoByName, r = Object(q.a)({
								data: {
									subredditInfoById: null == mt ? void 0 : mt.subredditInfoByName
								}
							}), n = Object(B.a)({
								data: {
									subredditInfoById: null == mt ? void 0 : mt.subredditInfoByName
								}
							})), Object(se.a)(o, Ot, e), o(H(Ot, r)), o(V(Ot, n)), !Ye && (null === (le = null === (ue = null == mt ? void 0 : mt.subredditInfoByName) || void 0 === ue ? void 0 : ue.elements) || void 0 === le ? void 0 : le.edges)) {
							const e = (null === (Ce = null === (xe = null == mt ? void 0 : mt.subredditInfoByName) || void 0 === xe ? void 0 : xe.elements) || void 0 === Ce ? void 0 : Ce.edges).map(e => {
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
							if ((null === (we = Ae.user.account) || void 0 === we ? void 0 : we.displayName) && e.flair && (o(Object(A.b)({
									subredditId: Ot,
									applied: e.flair,
									userName: Ae.user.account.displayName
								})), o(Object(ce.userFlairSaveTemplateSuccess)({
									subredditId: Ot,
									template: e.flair
								}))), e.displaySettings) {
								const t = e.displaySettings;
								o(Object(ce.userFlairAllowAssignOwnSettingSuccess)({
									subredditId: Ot,
									canAssignOwn: t.isSelfAssignable
								})), o(Object(ce.userFlairMutated)({
									subredditId: Ot,
									displaySettings: t
								}))
							}
						}
						const s = [Object(_.i)(() => o(Object(T.a)({
							subredditId: Ot,
							postIds: ft.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: Ue,
							isLoggedIn: Ge
						})];
						if (Object(ze.a)(c(), {
								subredditId: Ot
							})) {
							const e = Object(_.i)(() => o(Object(de.h)(t, Ot)), {
									name: "subredditSettingsRequested",
									isLoggedIn: Ge,
									page: Ue
								}),
								r = Object(_.i)(() => o(Object(oe.g)(Ot, Pe.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: Ge,
									page: Ue
								});
							s.push(e, r)
						}
						await Promise.all(s)
					}
				} else {
					const s = ct.ok ? void 0 : ct.error;
					if (Object(De.a)(s ? `${ct.status||"000"}: ${s.type}` : "000: UNKNOWN_ERROR")(c()), 403 === ct.status || 404 === ct.status || 451 === ct.status) return void o(it(ct, t));
					o(lt({
						error: !ct.ok && ct.error || {
							type: u.J.NOT_FOUND_ERROR
						},
						key: e,
						...ft
					})), i && o($.f({
						id: gt,
						kind: X.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: bt(e, t, r, i)
					}))
				}
			}, pt = (e, t, r) => async (n, s) => {
				const i = s(),
					d = Object(f.a)(e, t.sort, t);
				Object(We.z)(i, {
					listingKey: d
				}).length > 0 || await n(bt(d, e, t, r))
			}, mt = (e, t, r, n) => {
				const s = Object(qe.b)(e);
				if (Object(p.a)(t, {
						countryCode: r,
						languageCode: n
					})) {
					if (Object(b.a)(t)) {
						return Object($e.a)(e, {
							listingName: t
						}).displayText
					}
					if (s) return Object(j.a)(e, Object(g.f)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case ue.d.Popular:
							return "r/popular";
						case ue.d.All:
							return "r/all"
					}
				}
				const i = Object(Q.Y)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(Q.x)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(j.a)(e, i, n)
				}
				return i
			}, ft = (e, t, r, n) => n ? Object(O.b)(e.subredditName, void 0, n) : Object(f.a)(e.subredditName, t, r), Ot = (e, t) => async (r, n) => {
				var s, i, d;
				const {
					countryCode: o,
					languageCode: b
				} = e.params, m = Object(l.e)(e.params), {
					styling: g
				} = e.queryParams, j = n(), y = Object(Ce.a)(e.params, j);
				if ("Popular" === m) return void r(Object(a.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === m) return void r(Object(a.c)(e.url.replace("r/All", "r/all")));
				const T = Object(O.d)(e.queryParams, Object(re.kb)(j)),
					E = ft({
						subredditName: m,
						countryCode: o,
						languageCode: b
					}, y, e.queryParams, T),
					C = y,
					w = Object(I.a)(j.listings.postOrder.api.error, E),
					A = Object(I.a)(j.listings.postOrder.api.pending, E);
				let N = !!Object(I.a)(j.listings.postOrder.ids, E);
				const k = Object(I.a)(j.listings.postOrder.listingSort, E);
				k && k.hasChanged && (N = !1);
				let R = Object(Q.G)(j, m);
				const U = (e, t) => "true" === g && ((e, t) => Object(Ke.b)(Ge.c.config)(e, {
						subredditId: t
					}) || Object(Ke.b)(Ge.c.flair)(e, {
						subredditId: t
					}))(e, t),
					F = le.C in e.queryParams && e.queryParams[le.C].toUpperCase() || "",
					M = F in u.lc && u.lc[F];
				if (A || N && !w && !t) {
					if (U(j, R) && r(z.i(R)), N) {
						const t = mt(n(), m, o, b);
						r(D.m({
							title: t
						})), (null === (s = j.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[E]) && r(D.o({
							correlationId: j.listings.postOrder.correlationIds[E]
						})), Object(xe.g)(n(), r, e), window.addEventListener("load", () => {
							r(Object(x.p)())
						}), j.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(h.b)(Fe.a.SUBREDDIT))
						}), r(ne())
					}
					return void(Object(Je.e)(n()) && r(Object(L.a)()))
				}
				r(S.g());
				const q = null === (d = null === (i = Object(te.b)(j)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
					B = Object(re.Q)(n()),
					J = Object(_.i)(() => r(Object(G.c)(`r/${m}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: B,
						page: q
					});
				if (T) {
					const e = Object(_.i)(() => r(Object(P.d)(E, T, m)), {
						name: "searchDataRequested",
						isLoggedIn: B,
						page: q
					});
					await e
				} else {
					const t = {
						...c()(e.queryParams, [...le.k, ...le.j, le.g]),
						sort: C,
						t: Object(we.a)(C, M)
					};
					await r(bt(E, m, t, !0))
				}
				const H = j.platform.currentPage,
					V = Object(He.d)(j, {
						pageLayer: H
					});
				if (Object(He.a)(V) || Object(He.b)(V) || Object(He.c)(V)) {
					const e = Object(f.a)(m, u.Z.TOP, {
							t: u.lc.WEEK
						}),
						t = {
							sort: u.Z.TOP,
							t: u.lc.WEEK
						};
					await r(bt(e, m, t, !1))
				}
				if (Object(Je.e)(n()) && r(Object(L.a)()), R = R || Object(Q.G)(n(), m), !Object(Me.a)(j, R) && !Object(p.a)(m, {
						countryCode: o,
						languageCode: b
					})) {
					const e = Object(_.i)(() => r(Object(v.e)(m)), {
						name: "getTopCommunityFlair",
						page: q,
						isLoggedIn: B
					});
					await e
				}
				U(n(), R) && r(z.i(R)), Object(xe.g)(n(), r, e);
				const K = mt(n(), m);
				r(D.m({
					title: K
				})), r(ne()), await J
			}, gt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", jt = Object(m.a)(gt)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "K", (function() {
				return n
			})), r.d(t, "L", (function() {
				return s
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "m", (function() {
				return d
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
				return S
			})), r.d(t, "j", (function() {
				return T
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
				return k
			})), r.d(t, "X", (function() {
				return L
			})), r.d(t, "Y", (function() {
				return R
			})), r.d(t, "Z", (function() {
				return P
			})), r.d(t, "r", (function() {
				return D
			})), r.d(t, "E", (function() {
				return G
			})), r.d(t, "u", (function() {
				return U
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
				return V
			})), r.d(t, "a", (function() {
				return z
			})), r.d(t, "F", (function() {
				return K
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
				i = "POST_CREATION_EDIT_COMPLETE",
				d = "POST_CREATION_EDIT_FAILED",
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
				g = "POST_CREATION__CHANGE_FLAIR",
				j = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				_ = "POST_CREATION__CHANGE_LINK_BODY",
				I = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				h = "POST_CREATION__CHANGE_MEDIA_BODY",
				v = "POST_CREATION__CHANGE_RECAPTCHA",
				y = "POST_CREATION__CHANGE_RTE_STATE",
				S = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				T = "POST_CREATION__CHANGE_TITLE",
				E = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				C = "POST_CREATION__TOGGLE_IS_CHANGED",
				w = "POST_CREATION__TOGGLE_IS_GOV",
				A = "POST_CREATION__TOGGLE_IS_NSFW",
				N = "POST_CREATION__TOGGLE_IS_OC",
				k = "POST_CREATION__TOGGLE_IS_POLL",
				L = "POST_CREATION__TOGGLE_IS_SPOILER",
				R = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				P = "POST_CREATION__TOGGLE_SEND_REPLIES",
				D = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				G = "POST_CREATION__RESET_FORM",
				U = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				M = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				q = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				Q = "POST_CREATION__FAILED",
				J = "POST_CREATION__POLL_FAILED",
				H = "POST_CREATION__VALIDATION_FAILED",
				V = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				z = "POST_CREATION__CAPTCHA_REQUIRED",
				K = "POST_CREATION__SET_SUBMIT_MODE",
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
				return L
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "h", (function() {
				return U
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
				return V
			})), r.d(t, "B", (function() {
				return z
			})), r.d(t, "E", (function() {
				return K
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
				i = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./src/lib/isUrl/index.ts"),
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
				g = r("./src/reddit/helpers/trackers/postComposer.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				_ = r("./src/reddit/models/Subreddit/index.ts"),
				I = r("./src/reddit/routes/postCreation/constants.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				v = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				y = r("./src/reddit/selectors/postCollection.ts"),
				S = r("./src/reddit/selectors/postCreations.ts"),
				T = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
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
				k = Object(o.a)(E.d),
				L = Object(o.a)(E.e),
				R = Object(o.a)(E.f),
				P = Object(o.a)(E.g),
				D = Object(o.a)(E.h),
				G = Object(o.a)(E.i),
				U = Object(o.a)(E.j),
				F = Object(o.a)(E.q),
				M = Object(o.a)(E.S),
				q = Object(o.a)(E.R),
				B = (Object(o.a)(E.T), Object(o.a)(E.U)),
				Q = Object(o.a)(E.V),
				J = Object(o.a)(E.W),
				H = Object(o.a)(E.X),
				V = Object(o.a)(E.Y),
				z = Object(o.a)(E.Z),
				K = Object(o.a)(E.cb),
				$ = Object(o.a)(E.bb),
				W = Object(o.a)(E.ab),
				Y = Object(o.a)(E.r),
				X = s()((e, t) => {
					Object(d.a)(t) && e((e => async (t, r, n) => {
						let {
							apiContext: s
						} = n;
						const i = await Object(u.f)(s(), e);
						i.ok && i.body && i.body.json && i.body.json.data && t(C(i.body.json.data))
					})(t))
				}, 500),
				Z = e => async t => {
					t(k(e)), X(t, e)
				}, ee = Object(o.a)(E.E), te = (e, t) => async (r, n) => {
					r(ee()), r(e ? Object(i.b)(I.b) : Object(i.b)(Object(S.cb)(n(), {
						pageLayer: t
					})))
				}, re = e => async t => {
					t(c.i(e))
				}, ne = e => async (t, r) => {
					const n = r(),
						s = Object(a.G)(e),
						i = Object(S.H)(n);
					if (s && i) {
						Object(h.a)(n) !== j.d && t(re(j.d))
					} else t(te(!1, e))
				}, se = e => async (t, r) => {
					const n = r();
					Object(y.m)(n, {
						subredditId: e
					}) ? t(c.i(j.a)) : t(c.i(j.c))
				}, ie = Object(o.a)(E.B), de = Object(o.a)(E.C), oe = Object(o.a)(E.z), ce = Object(o.a)(E.A), ae = e => async (t, r) => {
					Object(T.e)(r()) !== e && t(ce({
						isChanged: e
					}))
				}, ue = () => async (e, t) => {
					const r = t();
					if (Object(T.g)(r))
						if (Object(T.h)(r)) {
							const t = r.creations.formData.title,
								n = Object(T.l)(r),
								s = Object(T.k)(r),
								i = Object(T.b)(r);
							e(pe(t, n, s, void 0, i))
						} else Object(T.j)(r) && !Object(T.d)(r) && e(me())
				}, le = ["torrents", "IsolatedVocals"], be = ["askreddit", "teenagers"], pe = (e, t, r, n, s) => async (i, d, o) => {
					let {
						apiContext: c,
						gqlContext: a
					} = o;
					const u = d();
					if (Object(T.i)(u)) return;
					i(de());
					const l = Object(m.c)(m.a.PostComposer),
						j = await ((e, t, r, n, s, i) => Object(b.a)(e, {
							...p,
							variables: {
								title: t,
								body: r,
								link: n,
								correlationId: s,
								confidenceWeight: i
							}
						}))(a(), e, t, r, l, s),
						I = {};
					let h = {};
					const y = {},
						S = {},
						E = [];
					if (!j.body || !j.ok) return i(ae(!1)), void i(oe()); {
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
							return s && (S[s] = {
								confidence: r,
								succRate: n
							}), t
						}).filter(e => !le.includes(e.name));
						const s = (r = n ? r.filter(e => !n(e)) : r).slice(0, T.a),
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
							})(o)) return i(ae(!1)), i(ie({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(g.G)(d()), void i(oe());
						s.forEach(e => {
							if (Object(_.j)(e)) {
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
					i(ae(!1)), i(ie({
						subreddits: I,
						subredditsAboutInfo: h,
						unavailableSubreddits: y,
						recSubsDict: S,
						recSubsOrder: E
					})), 0 === Object(T.c)(d()).length && i(oe())
				}, me = () => async (e, t, r) => {
					let {
						apiContext: n,
						gqlContext: s
					} = r;
					const i = t();
					if (Object(T.i)(i)) return;
					e(de());
					const d = {};
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
							if (t >= T.a) return;
							const r = e.node.subredditInfo;
							if (Object(_.j)(r)) {
								const e = Object(O.f)(r);
								c[e.id] = e
							} else if (r && Object.keys(r).length > 0) {
								const e = Object(O.a)(r),
									t = Object(f.a)(r);
								a[r.name] = {}, u.push(r.name), d[e.id] = e, o = {
									...o,
									...t
								}
							}
						})
					}
					e(ae(!1)), e(ie({
						subreddits: d,
						subredditsAboutInfo: o,
						unavailableSubreddits: c,
						recSubsDict: a,
						recSubsOrder: u
					})), 0 === Object(T.c)(t()).length && e(oe())
				}
		},
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return h
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				i = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = r("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = Object(n.a)(i.w),
				u = Object(n.a)(i.x),
				l = Object(n.a)(i.G),
				b = (Object(n.a)(i.H), Object(n.a)(i.I)),
				p = Object(n.a)(i.T),
				m = e => async (t, r) => {
					if (Object(o.a)(r())) return t(f(e))
				}, f = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = Object(c.k)(r()),
						o = Object(c.m)(r(), {
							subreddit: e
						}),
						p = o && o.lastUpdated || 0,
						m = 1e3 * i.global.rpan_config_refresh_rate;
					if (i.isPending || i.isPermanentlyCanceled || Date.now() < p + m) return;
					t(l());
					const f = await Object(d.c)(s(), e);
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
					t(p()), await Object(d.h)(s(), e)
				}, g = e => async (t, r, n) => {
					let {
						apiContext: i
					} = n;
					r().posts.models[e] || await t(Object(s.M)(e))
				}, j = Object(n.a)(i.v), _ = Object(n.a)(i.J), I = Object(n.a)(i.K), h = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (Object(c.h)(s)) return;
					e(_());
					const i = await Object(d.d)(n());
					i.ok && i.body && i.body.data ? e(j({
						subreddits: i.body.data
					})) : e(I({
						error: i.error
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
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			}));
			const n = "SET_RECENT_SUBREDDITS",
				s = "SUBREDDIT_VISITED",
				i = "SUBREDDIT_SAVED",
				d = "COPY_SAVED_SUBREDDITS",
				o = "COPY_SAVED_ID_SUBREDDITS",
				c = 10
		},
		"./src/reddit/actions/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/goodContent/index.ts");
			const i = "FRONTPAGE_LINKS__REQUEST_LOADED",
				d = "SUBREDDIT_LINKS_LOADED",
				o = 10,
				c = Object(n.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				a = Object(n.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(n.a)(i),
				l = Object(n.a)(d),
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
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "SUBREDDIT_TOPIC_LINKS_LOADED",
				i = Object(n.a)(s)
		},
		"./src/reddit/actions/subreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "m", (function() {
				return z
			})), r.d(t, "l", (function() {
				return K
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
				return pe
			})), r.d(t, "q", (function() {
				return ge
			})), r.d(t, "b", (function() {
				return je
			})), r.d(t, "c", (function() {
				return _e
			})), r.d(t, "a", (function() {
				return Ie
			})), r.d(t, "u", (function() {
				return Se
			})), r.d(t, "n", (function() {
				return Te
			})), r.d(t, "s", (function() {
				return Ee
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				i = r.n(s),
				d = r("./src/lib/constants/index.ts"),
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
				g = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/constants/history.ts"),
				_ = r("./src/reddit/constants/modals.ts"),
				I = r("./src/reddit/constants/page.ts"),
				h = r("./src/reddit/constants/parameters.ts"),
				v = r("./src/reddit/constants/postLayout.ts"),
				y = r("./src/reddit/contexts/PageLayer/index.tsx"),
				S = r("./src/reddit/endpoints/governance/posts.ts"),
				T = r("./src/reddit/endpoints/messages/index.ts"),
				E = r("./src/reddit/endpoints/modQueue/index.ts"),
				x = r("./src/reddit/endpoints/page/subredditPage.ts"),
				C = r("./src/reddit/endpoints/subreddit/about.ts"),
				w = r("./src/reddit/endpoints/subreddit/rules.ts"),
				A = r("./src/reddit/endpoints/user/preferences.ts"),
				N = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				k = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				L = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				R = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				P = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				D = r("./src/reddit/helpers/trackers/feed.ts"),
				G = r("./src/reddit/models/Subreddit/index.ts"),
				U = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				F = r("./src/reddit/models/Toast/index.ts"),
				M = r("./src/reddit/models/User/index.ts"),
				q = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				B = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = r("./src/reddit/selectors/profile.ts"),
				J = r("./src/reddit/selectors/subreddit.ts"),
				H = r("./src/reddit/selectors/user.ts");
			const V = {},
				z = "SUBREDDIT__MODEL_SUCCEEDED",
				K = "SUBREDDIT__MODEL_PENDING",
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
				ie = Object(c.a)(O.c),
				de = Object(c.a)(O.a),
				oe = (e, t) => async (r, n) => {
					await (t === G.f.User ? r(ce(e)) : r(ae(e)))
				}, ce = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = Object(Q.n)(r(), e),
						d = await Object(w.c)(s(), e);
					if (d.ok) {
						const e = d.body;
						t(se({
							rules: e,
							subredditId: i
						}))
					}
				}, ae = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					const d = Object(J.G)(r(), e);
					t(ie());
					const o = await Object(w.b)(i(), e);
					if (o.ok) {
						const e = o.body;
						t(se({
							rules: e,
							subredditId: d
						}))
					} else {
						t(de());
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
					let p = e.t;
					const m = r(),
						O = Object(L.a)(e, m),
						g = m.platform.currentPage ? m.platform.currentPage.queryParams : {},
						_ = Object(a.a)(l, O, {
							t: p,
							...g
						}),
						T = m.listings.postOrder.loadMore[_],
						E = m.listings.postOrder.listingSort[_];
					let C = O;
					if (E && !C) {
						const e = Object(o.d)(E.sort);
						C = e.sort, p = e.timeSort
					}
					const w = m.listings.postOrder.api.pending[_],
						{
							fetchedTokens: A
						} = m.listings.postOrder,
						R = !(!A[_] || !A[_][T.token]);
					if (w || R) return;
					if (C === d.Z.AWARDED && l === I.g) return;
					t(ee({
						key: _,
						fetchedToken: T.token
					}));
					const P = {
							after: T.token,
							dist: T.dist,
							forceGeopopular: l === I.d.Popular,
							layout: v.e[Object(y.S)(m, {})],
							sort: C,
							t: p,
							...i()(g, [...h.k, h.g])
						},
						G = Object(q.a)(m),
						U = G ? () => Object(x.b)(c(), Object(x.c)(m, l, {
							...P,
							limit: v.a
						}), Object(H.Z)(m)) : () => Object(x.a)(s(), l, P),
						F = await U(),
						M = {
							...F.body,
							...Object(k.a)(m, _, F.body)
						};
					if (F.ok) {
						if (!G) {
							const e = await Object(N.a)(s(), M.posts, m);
							M.posts = e
						}
						let e;
						const n = M.postIds.filter(e => !!M.posts[e].isMeta),
							i = Object(J.G)(r(), l);
						if (n.length) {
							const t = await Object(S.a)(s(), i, n);
							t.ok && (e = t.body)
						}
						const d = Object(B.h)(m, {
							subredditId: Object(J.G)(m, l)
						});
						if (!G && d && t(Object(b.a)({
								postIds: M.postIds
							})), t(te({
								fetchedToken: T.token,
								key: _,
								meta: m.meta,
								governance: e,
								...M
							})), Object(B.i)(m, i)) {
							let e;
							G || (e = await Object(x.b)(c(), Object(x.c)(m, l, {
								...P,
								limit: v.a
							}), Object(H.Z)(m)));
							const r = G ? M : e.body;
							if (G ? r : e.ok) {
								const e = r.postIds.map(e => r.posts[e].lastAuthorModNote);
								t(Object(f.e)({
									subredditId: i,
									nodes: e
								}))
							}
						}
						await t(Object(u.a)({
							subredditId: i,
							postIds: M.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(D.b)(j.a.NextPageLoad)(r())
					} else {
						t(re({
							error: F.error,
							fetchedToken: T.token,
							key: _,
							...M
						}));
						const e = F.error;
						Object(D.a)(e ? `${F.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, le = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", be = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", pe = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", me = Object(c.a)(le), fe = Object(c.a)(be), Oe = Object(c.a)(pe), ge = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(me());
					const i = await Object(E.c)(n(), d.ub.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					i.ok ? e(fe(i.body)) : e(Oe({
						error: i.error
					}))
				}, je = "SUBREDDIT__ABOUT_PENDING", _e = "SUBREDDIT__ABOUT_SUCCEEDED", Ie = "SUBREDDIT__ABOUT_FAILED", he = Object(c.a)(je), ve = Object(c.a)(_e), ye = Object(c.a)(Ie), Se = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r();
					if (Object(J.x)(i, {
							subredditName: e
						}) || i.subreddits.api.about.error[e.toLowerCase()] || i.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(he({
						subredditName: e
					}));
					const d = !Object(J.G)(i, e),
						o = await Object(C.a)(s(), e, d);
					if (o.ok) {
						const r = o.body.data.subreddit,
							n = Object(R.a)(r),
							s = d ? Object(P.a)(r) : void 0;
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
				}, Te = (e, t, r) => async (n, s, i) => {
					let {
						apiContext: d
					} = i;
					var o;
					const c = e.substring(2),
						a = r === U.e.View ? null === (o = Object(H.f)(s(), c)) || void 0 === o ? void 0 : o.subredditId : Object(J.G)(s(), c),
						u = Object(H.k)(s());
					if (u && a) {
						const e = ((e, t, r, n) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + n + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(c, Object(M.e)(u), t, r);
						if ((await Object(T.b)(d(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							n(Object(m.F)({
								subredditId: a,
								prefs: t
							})), Object(A.j)(a, t, d()), r !== U.e.View && n(Object(l.i)(_.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Ee = e => async (t, r) => {
					const n = r(),
						{
							subredditName: s
						} = e,
						i = e.t,
						d = Object(L.a)(e, n),
						o = n.platform.currentPage ? n.platform.currentPage.queryParams : V,
						c = Object(a.a)(s, d, {
							t: i,
							...o
						}),
						u = {
							t: i,
							sort: d,
							isRefresh: !0,
							...o
						};
					await t(Object(p.subredditDataRequested)(c, s, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				i = r("./src/reddit/actions/subreddit/constants.ts");
			const d = e => async (t, r, i) => {
				let {
					gqlContext: d
				} = i;
				var c;
				const a = (await ((e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}))(d(), {
					id: e
				})).body;
				o(t, e, null === (c = a.data) || void 0 === c ? void 0 : c.subredditInfoById)
			};

			function o(e, t, r) {
				const n = null == r ? void 0 : r.answerableQuestions,
					s = null == r ? void 0 : r.contentRatingSurvey,
					d = null == r ? void 0 : r.communityProgressModule;
				(n || s || d) && e({
					type: i.z,
					payload: {
						id: t,
						questions: n,
						survey: s,
						progressModule: d
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
				i = r("./src/config.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
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
					const f = Object(l.V)(n(), {
						subredditId: e
					}) || Object(u.q)(n(), {
						profileId: e
					});
					if (!f) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.h)(f) ? s.nc + f.name : f.name
						},
						g = await ((e, t, r) => Object(d.a)(e, {
							data: r,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(o.z)(t)}`,
							method: s.mb.GET
						}))(m(), t, O);
					if (g.ok) {
						const n = g.body;
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
				return w
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "d", (function() {
				return G
			})), r.d(t, "b", (function() {
				return U
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/actions/subredditModeration/constants.ts"),
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
				g = r("./src/reddit/selectors/moderatorPermissions.ts"),
				j = r("./src/reddit/selectors/modUserNotes.ts"),
				_ = r("./src/reddit/helpers/trackers/modNote.ts"),
				I = r("./src/telemetry/index.ts"),
				h = r("./src/redditGQL/types.ts"),
				v = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			const {
				fbt: S
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			Object(v.a)({
				features: {
					modUserNotes: y.a
				}
			});
			const T = Object(s.a)(d.U),
				E = Object(s.a)(d.T),
				x = Object(s.a)(d.S),
				C = Object(s.a)(d.R),
				w = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var d;
					const a = r(),
						{
							subredditId: u,
							userId: l,
							before: p,
							filter: m
						} = e,
						g = Object(f.d)(u, l, m, p),
						j = a.features.modUserNotes.fetchedTokens[g];
					if (!a.features.modUserNotes.api.pending[g] && !j) {
						t(T({
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
								if ("Subreddit" === (null == r ? void 0 : r.__typename) && (null === (d = null == r ? void 0 : r.modNotes) || void 0 === d ? void 0 : d.edges)) {
									const {
										edges: e,
										pageInfo: n
									} = r.modNotes, s = [];
									e.forEach(e => {
										e && e.node && s.push(e.node)
									}), t(E({
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
								n && n.length && i.c.captureException(n)
							} else t(x({
								subredditId: u,
								userId: l,
								filter: m,
								fetchedToken: p
							})), t(Object(o.f)({
								kind: O.b.Error,
								text: S._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						} catch (_) {
							i.c.captureException(_), t(Object(o.f)({
								kind: O.b.Error,
								text: S._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						}
					}
				}, A = Object(s.a)(d.H), N = Object(s.a)(d.G), k = e => {
					let {
						subredditId: t,
						nodes: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: i
						} = s;
						const d = [],
							o = [];
						r.map(e => {
							const t = null == e ? void 0 : e.user.id;
							t && !o.includes(t) && e && (d.push(e), o.push(t))
						}), e(N({
							subredditId: t,
							lastAuthorModNotes: d
						}))
					}
				}, L = (e, t, r) => async (s, i, d) => {
					let {
						gqlContext: o
					} = d;
					var u, l, b, p, f, O, g;
					const {
						hasSortParam: j,
						sortToUse: _
					} = Object(m.a)(i(), e), I = n.Mb[_], v = {
						postId: e,
						requestPostModerationInfo: !t,
						...j && I && {
							sortType: h.f[I]
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
							r = null === (f = null === (p = null == e ? void 0 : e.postInfoById) || void 0 === p ? void 0 : p.moderationInfo) || void 0 === f ? void 0 : f.lastAuthorModNote,
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
									gqlContext: i
								} = s;
								const d = [],
									o = [];
								r.map(e => {
									var t, r;
									if (!(null == e ? void 0 : e.node)) return;
									const n = null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote,
										s = null == n ? void 0 : n.user.id;
									s && !o.includes(s) && n && (d.push(n), o.push(s))
								}), e(N({
									subredditId: t,
									lastAuthorModNotes: d
								}))
							}
						})({
							subredditId: t,
							commentTrees: n
						}))
					}
				}, R = Object(s.a)(d.Q), P = (e, t, r, n, s, i) => async (d, a, l) => {
					let {
						gqlContext: b
					} = l;
					var p, m;
					const f = {
							subredditId: e,
							userId: t,
							label: s,
							note: r,
							redditId: i
						},
						g = await ((e, t) => Object(c.a)(e, {
							...u,
							variables: {
								input: t
							}
						}))(b(), f);
					if (g.ok) {
						const r = null === (m = null === (p = g.body) || void 0 === p ? void 0 : p.data) || void 0 === m ? void 0 : m.createModUserNote.createdNote;
						if (!r) return void d(Object(o.f)({
							kind: O.b.Error,
							text: S._("Something went wrong", null, {
								hk: "zYMeg"
							}),
							duration: 3e3
						}));
						d(R({
							subredditId: e,
							newModNote: r,
							filter: n
						})), Object(I.a)(Object(_.v)({
							userId: t,
							subredditId: e,
							filteredType: n,
							modNote: r
						})(a())), d(Object(o.f)({
							kind: O.b.SuccessMod,
							text: S._("Successfully created mod note", null, {
								hk: "10Vu91"
							}),
							duration: 3e3
						}))
					} else {
						const {
							errors: e
						} = g.body, t = e[0] ? e[0].message : S._("Something went wrong", null, {
							hk: "2uu095"
						});
						d(Object(o.f)({
							kind: O.b.Error,
							text: t,
							duration: 3e3
						}))
					}
				}, D = Object(s.a)(d.lb), G = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					var d, o;
					const a = n();
					if (!Object(g.i)(a, e)) return;
					const u = {
						subredditId: e,
						userId: t
					};
					if (Object(j.g)(a, t, e)) return;
					const l = await ((e, t) => Object(c.a)(e, {
						...p,
						variables: {
							...t
						}
					}))(i(), u);
					if (l.ok) {
						const n = null === (d = l.body) || void 0 === d ? void 0 : d.data;
						if ("Subreddit" === (null === (o = null == n ? void 0 : n.subredditInfoById) || void 0 === o ? void 0 : o.__typename)) {
							const s = null == n ? void 0 : n.subredditInfoById;
							s && r(D({
								subredditId: e,
								userId: t,
								totalCounts: s
							}))
						}
					}
				}, U = (e, t, r, n) => async (s, i, d) => {
					let {
						gqlContext: a
					} = d;
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
						text: S._("Mod Note sucessfully deleted!", null, {
							hk: "17NyFK"
						})
					}))) : s(Object(o.f)({
						kind: O.b.Error,
						text: S._("Could not delete note. Try again later.", null, {
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
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "SUBREDDIT__RULES_LOADED",
				s = "SUBREDDIT__RULES_PENDING",
				i = "SUBREDDIT__RULES_FAILED",
				d = "SUBREDDIT__RULE_ADDED",
				o = "SUBREDDIT__RULE_EDITED",
				c = "SUBREDDIT__RULE_REMOVED",
				a = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return U
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "h", (function() {
				return J
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "f", (function() {
				return z
			})), r.d(t, "d", (function() {
				return K
			})), r.d(t, "j", (function() {
				return X
			})), r.d(t, "i", (function() {
				return Z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				i = r.n(s),
				d = r("./node_modules/lodash/xor.js"),
				o = r.n(d),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/name/index.ts"),
				l = r("./src/reddit/endpoints/subreddit/settings.ts"),
				b = r("./src/telemetry/index.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = r("./src/redditGQL/types.ts");
			const g = e => {
					var t, r;
					if (!e) return {};
					const {
						id: n,
						isArchivePostsEnabled: s,
						isDiscoveryAllowed: i,
						isChatPostCreationAllowed: d,
						isCrosspostingAllowed: o,
						isPredictionAllowed: c,
						isPredictionContributorsAllowed: a,
						isPredictionsTournamentAllowed: u,
						banEvasionThreshold: l,
						commentContributionSettings: b,
						isNsfw: p,
						language: m,
						publicDescriptionText: f,
						isChatPostFeatureEnabled: g,
						welcomeMessage: j,
						allAllowedPostTypes: _,
						liveStreamingInfo: h,
						isTopListingAllowed: v,
						isCommentingRestricted: S,
						isPostingRestricted: T,
						isSpoilerAvailable: E,
						isContributorRequestsDisabled: x,
						type: w,
						suggestedCommentSort: A,
						title: N,
						toxicityThresholdChatLevel: k,
						crowdControl: L,
						commentDisplaySettings: R,
						allowedPostType: P,
						wikiSettings: D,
						spamFilter: G,
						modQueueSettings: U
					} = e;
					return {
						allowGalleries: _.includes(O.A.Gallery),
						allowImages: _.includes(O.A.Image),
						allowPolls: _.includes(O.A.Poll),
						archivePostsEnabled: s,
						allowDiscovery: i,
						allowChatPostCreation: d,
						allowPostCrossposts: o,
						allowPredictionContributors: a,
						allowPredictions: c,
						allowPredictionsTournament: u,
						banEvasionThreshold: I(l),
						commentContributionSettings: b,
						contentVisible: v,
						crowdControlLevel: y(null == L ? void 0 : L.crowdControlLevel),
						crowdControlChatLevel: y(null == L ? void 0 : L.crowdControlChatLevel),
						crowdControlPostLevel: y(null == L ? void 0 : L.crowdControlPostLevel),
						disableContributorRequests: x,
						isChatPostFeatureEnabled: g,
						language: m,
						liveStreamingIsEnabled: (null == h ? void 0 : h.isLiveStreamingEnabled) || void 0,
						over18: p,
						publicDescription: f || void 0,
						restrictCommenting: S,
						restrictPosting: T,
						spoilersEnabled: E,
						subredditId: n,
						subredditType: null == w ? void 0 : w.toLowerCase(),
						suggestedCommentSort: (null == A ? void 0 : A.toLowerCase()) || void 0,
						title: N,
						toxicityThresholdChatLevel: C(k),
						welcomeMessageEnabled: null == j ? void 0 : j.isEnabled,
						welcomeMessageText: (null == j ? void 0 : j.body) ? null === (t = j.body) || void 0 === t ? void 0 : t.markdown : void 0,
						wikimode: null === (r = null == D ? void 0 : D.wikiEditMode) || void 0 === r ? void 0 : r.toLowerCase(),
						crowdControlFilter: null == L ? void 0 : L.isCrowdControlFilterEnabled,
						collapseDeletedComments: null == R ? void 0 : R.isCollapseDeletedCommentsEnabled,
						commentScoreHideMins: (null == R ? void 0 : R.commentScoreHideMinutes) || 0,
						contentOptions: P || void 0,
						excludeBannedModqueue: null == U ? void 0 : U.isExcludeBannedModqueueEnabled,
						spamLinks: (null == G ? void 0 : G.spamPosts) || void 0,
						spamSelfposts: (null == G ? void 0 : G.spamSelfposts) || void 0,
						spamComments: (null == G ? void 0 : G.spamComments) || void 0,
						wikiEditAge: "number" == typeof(null == D ? void 0 : D.wikiEditMinimumAge) ? null == D ? void 0 : D.wikiEditMinimumAge : void 0,
						wikiEditKarma: "number" == typeof(null == D ? void 0 : D.wikiEditKarma) ? null == D ? void 0 : D.wikiEditKarma : void 0
					}
				},
				j = [O.b.Unknown, O.b.Off, O.b.Lenient, O.b.Moderate, O.b.Strict],
				_ = e => {
					if (e) return (null == j ? void 0 : j[e]) || O.b.Unknown
				},
				I = e => e ? j.indexOf(e) : 0,
				h = [O.j.Off, O.j.Lenient, O.j.Medium, O.j.Strict],
				v = e => {
					if (e) return null == h ? void 0 : h[e]
				},
				y = e => e ? h.indexOf(e) : 0,
				S = e => {
					if (e) return Object.values(O.F).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				T = e => {
					if (e) return Object.values(O.f).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				E = e => {
					if (e) return Object.values(O.J).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				x = e => {
					if (e) return e > 0 ? O.H.Enabled : O.H.Disabled
				},
				C = e => {
					if (e) return e === O.H.Enabled ? 1 : 0
				},
				w = e => {
					let {
						over18: t,
						publicDescription: r,
						subredditType: n,
						contentOptions: s,
						archivePostsEnabled: i,
						allowDiscovery: d,
						allowGalleries: o,
						allowImages: c,
						allowChatPostCreation: a,
						allowPolls: u,
						allowPostCrossposts: l,
						allowPredictionContributors: b,
						allowPredictionsTournament: p,
						welcomeMessageEnabled: m,
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
						commentScoreHideMins: k,
						disableContributorRequests: L,
						excludeBannedModqueue: R,
						hideAds: P,
						keyColor: D,
						restrictCommenting: G,
						restrictPosting: U,
						spamLinks: F,
						spamSelfposts: M,
						spamComments: q,
						spoilersEnabled: B,
						showMedia: Q,
						showMediaPreview: J,
						submitLinkLabel: H,
						submitTextLabel: V,
						submitText: z,
						suggestedCommentSort: K,
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
						isDiscoveryAllowed: d,
						isArchivePostsEnabled: i,
						isPredictionContributorsAllowed: b,
						isPredictionsTournamentAllowed: p,
						language: O,
						banEvasionThreshold: _(j),
						crowdControlChatLevel: v(C),
						crowdControlFilter: h,
						crowdControlLevel: v(w),
						crowdControlPostLevel: v(y),
						welcomeMessage: f ? {
							markdown: f
						} : void 0,
						isWelcomeMessageEnabled: m,
						commentContributionSettings: I,
						allowPredictions: A,
						collapseDeletedComments: N,
						commentScoreHideMinutes: k,
						disableContributorRequests: L,
						excludeBannedModqueue: R,
						restrictCommenting: G,
						restrictPosting: U,
						spamLinks: S(F),
						spamSelfposts: S(M),
						spamComments: S(q),
						spoilersEnabled: B,
						suggestedCommentSort: T(K),
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
				k = r("./src/reddit/models/User/index.ts"),
				L = r("./src/reddit/selectors/experiments/cnc/index.ts"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/selectors/subredditSettings.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				G = r("./src/reddit/selectors/widgets.ts");
			const U = "SUBREDDIT_SETTINGS_LOADED",
				F = Object(a.a)(U),
				M = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				q = Object(a.a)(M),
				B = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				Q = Object(a.a)(B),
				J = (e, t) => async (r, n, s) => {
					let {
						apiContext: i,
						gqlContext: d
					} = s;
					var o, c;
					const a = n(),
						b = Object(L.d)(a) && !Object(u.b)(e);
					if (!t || !Object(R.X)(a, t)) {
						const t = await (b ? Object(l.b)(d(), e) : Object(l.c)(i(), e)),
							n = b ? g(null === (c = null === (o = null == t ? void 0 : t.body) || void 0 === o ? void 0 : o.data) || void 0 === c ? void 0 : c.subredditInfoByName) : t.body;
						t && t.ok && r(F(n))
					}
					if (t && !Object(P.b)(a, {
							subredditId: t
						})) {
						const e = await Object(m.a)(d(), t);
						if (e && e.ok) {
							const t = e.body,
								n = Object(f.e)(t.data);
							r(q(n))
						}
					}
				}, H = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = Object(D.k)(t());
					s && await e(J(c.nc + Object(k.e)(s)))
				}, V = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", z = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", K = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", $ = Object(a.a)(V), W = Object(a.a)(z), Y = Object(a.a)(K), X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (d, c, a) => {
						let {
							apiContext: u,
							gqlContext: f
						} = a;
						var O, j;
						d($());
						const _ = c(),
							I = i()(Object(R.X)(_, e), ...Object.keys(t)),
							h = i()(Object(P.b)(_, {
								subredditId: e
							}), ...Object.keys(r));
						let v;
						const y = Object(L.d)(_);
						if (y) {
							const r = w(t);
							v = await Object(l.h)(f(), e, r)
						}
						v || (v = await Object(l.g)(u(), e, t));
						const S = Object.keys(r).length > 0;
						let T = !0;
						if (S) {
							T = (await Object(m.b)(f(), e, r)).ok
						}
						if (v.ok && (!S || T)) {
							const i = y ? g(null === (j = null === (O = null == v ? void 0 : v.body) || void 0 === O ? void 0 : O.data) || void 0 === j ? void 0 : j.subreddit) : Object(l.d)(v.body);
							d(W({
								settings: {
									...i,
									subredditId: e
								},
								idCardWidgetId: Object(G.c)(_, {
									subredditId: e
								})
							})), S && d(Q({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							return s && 0 === o()(Object.keys(t), Object.keys(I)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = X(e, I, h, s)), void d(Object(p.f)({
								kind: N.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
						d(Y()), d(Object(p.f)({
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
				}, Z = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					(await Object(l.e)(d(), e, t)).ok ? r(Object(p.f)({
						kind: N.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(p.f)({
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
				return i
			})), r.d(t, "q", (function() {
				return d
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
				return S
			})), r.d(t, "x", (function() {
				return T
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
				return k
			}));
			const n = "TAGS__REQUESTED",
				s = "TAGS__AVAILABLE_LOADED",
				i = "TAGS__LOADED",
				d = "TAGS__FAILURE",
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
				g = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				j = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				_ = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				I = "TAGS__OPTIONS_CANCELLED",
				h = "TAGS__OPTION_SELECTED",
				v = "TAGS__SUGGESTED_OPTION_SELECTED",
				y = "TAGS__OPTION_DESELECTED",
				S = "TAGS__SUGGESTED_OPTION_DESELECTED",
				T = "TAGS__INPUT_CHANGED",
				E = "TAGS__SUGGESTED_INPUT_CHANGED",
				x = "GLOBAL__TAGS__LOADED",
				C = "CREATION__TAGS_INPUT_CHANGED",
				w = "CREATION__TAGS_OPTION_SELECTED",
				A = "CREATION__TAGS_OPTION_DESELECTED",
				N = "CREATION__PRIMARY_TAG_SELECTED",
				k = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return D
			})), r.d(t, "m", (function() {
				return G
			})), r.d(t, "i", (function() {
				return U
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "h", (function() {
				return M
			})), r.d(t, "k", (function() {
				return q
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "g", (function() {
				return K
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
				i = r("./src/reddit/actions/tags/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts");
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
					includeAvailableTags: i
				} = t;
				return Object(c.a)(e, {
					...l,
					variables: {
						subredditId: r,
						pageSize: n,
						after: s,
						includeAvailableTags: i
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
				S = r("./src/reddit/reducers/tags/selected/index.ts"),
				T = r("./src/reddit/selectors/tags.ts");
			Object(s.a)(i.e);
			const E = Object(s.a)(i.t),
				x = Object(s.a)(i.r),
				C = Object(s.a)(i.s),
				w = Object(s.a)(i.q),
				A = Object(s.a)(i.l),
				N = Object(s.a)(i.m),
				k = Object(s.a)(i.k),
				L = Object(s.a)(i.v),
				R = Object(s.a)(i.w),
				P = Object(s.a)(i.u),
				D = Object(s.a)(i.z),
				G = Object(s.a)(i.D),
				U = Object(s.a)(i.y),
				F = Object(s.a)(i.C),
				M = Object(s.a)(i.x),
				q = Object(s.a)(i.B),
				B = (Object(s.a)(i.d), Object(s.a)(i.c), Object(s.a)(i.b), Object(s.a)(i.g)),
				Q = Object(s.a)(i.h),
				J = Object(s.a)(i.f),
				H = Object(s.a)(i.a),
				V = Object(s.a)(i.i),
				z = Object(s.a)(i.A),
				K = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, i, c) => {
						let {
							gqlContext: a
						} = c;
						const u = i();
						s(E());
						const l = await b(a(), {
								subredditId: e
							}),
							p = l.body;
						if (l.ok && p.data.subredditInfoById.secondaryTags && p.data.subredditInfoById.availableTags && p.data.subredditInfoById.suggestedTags) s(x(o(p.data))), r && h.h(i(), e, {
							context: t
						});
						else {
							s(w());
							const i = r ? "topics_save" : "topics_load";
							h.g(u, e, i, {
								context: t
							}), s(Object(d.f)(Object(d.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), y.b.Error, n.fbt._("Retry", null, {
								hk: "1c2xrJ"
							}), K(e, t, r))))
						}
					}
				},
				$ = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					t(E());
					const c = await b(i(), {
						subredditId: e
					});
					if (c.ok) {
						const e = c.body;
						t(C(o(e.data)))
					} else t(w()), t(Object(d.f)(Object(d.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), y.b.Error, n.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), C(e))))
				}, W = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					if (!t.length) return null;
					r(A());
					const d = t.map(t => ({
							subredditId: e,
							...t
						})),
						o = await ((e, t) => Object(c.a)(e, {
							...a,
							variables: t
						}))(i(), {
							input: d
						}),
						u = o.body && o.body.data || null;
					return o.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(N()), u.createSubredditTags.createdTags || []) : (r(k()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (n, s, i) => {
						let {
							gqlContext: d
						} = i;
						if (!t.length && !r.length) return;
						n(L());
						const c = s(),
							a = Object(T.d)(c, {
								subredditId: e
							}),
							u = Object(T.o)(c, {
								itemId: e
							}),
							l = Object(T.z)(c, {
								itemId: e
							}),
							b = new Set;
						for (const e of t)
							if (e.state === v.d.NONE && a[e.tagId] && !l[e.tagId]) {
								!!r.find(t => t.state === v.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} for (const e of r)
							if (e.state === v.d.NONE && a[e.tagId] && !u[e.tagId]) {
								!!t.find(t => t.state === v.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} const p = await m(d(), {
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
						p.ok && f && f.updateSubredditTagStates && f.updateSubredditTagStates.ok && f.updateSubredditTagStates.subreddit ? n(R(o({
							subredditInfoById: f.updateSubredditTagStates.subreddit
						}))) : n(P())
					}
				}, X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, i, o) => {
						const c = i(),
							a = Object(T.q)(c, {
								subredditId: e
							}),
							u = Object(T.C)(c, {
								subredditId: e
							});
						let l = a.filter(e => !!e.id && !!e.action).map(e => ({
							tagId: e.id,
							state: e.action === S.a.ADD ? v.d.TAGGED : v.d.NONE
						}));
						if (u.length > 0) {
							const t = await W(e, u)(s, i, o);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: v.d.TAGGED
							})))
						}
						await Y(e, l)(s, i, o), Object(T.A)(i()) ? s(Object(d.f)(Object(d.e)(n.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && s(Object(d.f)(Object(d.e)(n.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), y.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, s, i) => {
					const o = {
						state: v.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await W(e, [{
							text: t.displayText,
							type: v.c.CLASSIFICATION
						}])(r, s, i);
						n && 1 === n.length && (o.tagId = n[0].id)
					} else {
						if (!t.id) return void r(Object(d.f)(Object(d.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), y.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await Y(e, [], [o])(r, s, i): r(Object(d.f)(Object(d.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), y.b.Error)))
				}, ee = (e, t, r) => async (n, s, i) => {
					t.id ? await Y(e, [], [{
						state: v.d.NONE,
						tagId: t.id
					}])(n, s, i) : n(K(e, r, !1))
				}, te = function(e, t, r, s) {
					let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (o, c, a) => {
						let {
							gqlContext: u
						} = a;
						if (!(await O(u(), {
								input: {
									tagStatesRelevance: t,
									suggestedTagStatesRelevance: r
								}
							})).ok) return o(Object(d.f)(Object(d.e)(n.fbt._("Whoops! Unable to update topics relevance status", null, {
							hk: "17akdT"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, s, i)))), void o($(e));
						if (i)
							for (const e of r) h.f(c(), e, {
								context: s
							});
						o(Object(d.f)(Object(d.e)(n.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), y.b.SuccessCommunity, n.fbt._("Undo", null, {
							hk: "34apPL"
						}), te(e, t.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), r.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), s, i)))), o($(e))
					}
				}, re = e => async (t, r) => {
					t(z({
						itemTagsState: {
							[e]: Object(T.o)(r(), {
								itemId: e
							})
						}
					}))
				}, ne = function(e, t) {
					let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (s, i, o) => {
						let {
							gqlContext: c
						} = o;
						const a = Object(T.x)(i(), {
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
						u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (s(Q(j(l))), r && s(Object(d.f)(Object(d.e)(n.fbt._("Successfully updated primary topic!", null, {
							hk: "1NL90v"
						}), y.b.SuccessCommunity)))) : (s(J()), s(Object(d.f)(Object(d.e)(n.fbt._("Whoops! Unable to update primary topic", null, {
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
				return i
			})), r.d(t, "j", (function() {
				return d
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
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
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
				return S
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return T
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
				return k
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return L
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return R
			})), r.d(t, "userFlairMutated", (function() {
				return P
			})), r.d(t, "authorFlairMutated", (function() {
				return D
			})), r.d(t, "userFlairChanged", (function() {
				return G
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return U
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
				i = r("./node_modules/lodash/isEmpty.js"),
				d = r.n(i),
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
				S = Object(s.a)(j.b),
				T = Object(s.a)(j.p),
				E = Object(s.a)(j.q),
				x = Object(s.a)(j.o),
				C = Object(s.a)(j.f),
				w = Object(s.a)(j.g),
				A = Object(s.a)(j.e),
				N = Object(s.a)(j.m),
				k = Object(s.a)(j.n),
				L = Object(s.a)(j.l),
				R = Object(s.a)(j.k),
				P = Object(s.a)(j.r),
				D = Object(s.a)(j.a),
				G = (e, t, r, n, s) => async (i, d, o) => {
					let {
						apiContext: c
					} = o;
					const l = d(),
						b = l.user.account,
						O = b ? Object(p.e)(b) : void 0,
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
					i(n === O ? P(j) : D(j));
					const _ = Object(m.V)(l, {
							subredditId: s
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					Object(a.g)(c(), n, _.name, t, I), n === O && Object(a.i)(c(), r, _.name)
				}, U = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const d = n(),
						o = Object(m.V)(d, {
							subredditId: e
						}).name;
					r(_());
					const c = await Object(a.l)(i(), o, t);
					if (c.ok) {
						r(I({
							subredditId: e,
							isEnabled: t
						}))
					} else r(h());
					return c.ok
				}, F = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const d = n(),
						o = Object(m.V)(d, {
							subredditId: e
						}).name;
					r(v());
					const c = await Object(a.j)(i(), t, l.d.UserFlair, o);
					if (c.ok) {
						r(y({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(S());
					return c.ok
				}, M = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					const o = s(),
						u = Object(m.V)(o, {
							subredditId: t
						}).name;
					r(T());
					const p = await Object(a.f)(d(), e, u, l.d.UserFlair),
						f = p.ok && !(p.body && !1 === p.body.success);
					if (f) {
						const e = {
							subredditId: t,
							template: p.body
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
				}, q = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					const o = s(),
						u = Object(m.V)(o, {
							subredditId: t
						}).name;
					if (r(C()), (await Object(a.b)(d(), e, u)).ok) {
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
				}, B = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					const o = s(),
						u = Object(m.V)(o, {
							subredditId: t
						}).name,
						p = Object(f.d)(o, {
							subredditId: t
						}).templateIds;
					if (r(N({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(d(), u, l.d.UserFlair, e)).ok) {
						r(k());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(L({
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
				}, Q = (e, t) => async (r, s, i) => {
					let {
						apiContext: u
					} = i;
					var l;
					const p = s(),
						f = null === (l = p.features) || void 0 === l ? void 0 : l.userFlair;
					if (f && f[e] && f[e].displaySettings.isEnabled && d()(f[e].templateIds)) {
						const s = Object(m.V)(p, {
								subredditId: e
							}).name,
							i = await Object(a.d)(u(), s);
						if (i.ok) r(R(i.body)), r(Object(o.b)({
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
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/localStorageAvailable/index.ts"),
				o = r("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(s.c)(i.r.RECENT_SUBREDDITS, "recent_subreddits"),
				a = () => Object(d.a)() && Object(s.b)(c) || [];
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
							const t = e.findIndex(e => e.id === n); - 1 !== t && e.splice(t, 1), e.unshift(r), e.splice(o.c), Object(s.d)(c, e, i.sb)
						}
						break
					}
				}
				return r
			}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return _
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "n", (function() {
				return v
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "m", (function() {
				return C
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "c", (function() {
				return R
			}));
			var n = r("./src/config.ts"),
				s = r("./src/redditGQL/operations/ModApprove.json"),
				i = r("./src/redditGQL/operations/ModRemove.json"),
				d = r("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
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
				g = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				j = r("./src/redditGQL/operations/GetCommentById.json");
			const _ = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/save`),
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				I = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unsave`),
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/lock`),
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unlock`),
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/approve`),
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				S = (e, t) => Object(l.a)(e, {
					...s,
					variables: {
						input: {
							id: t
						}
					}
				}),
				T = (e, t, r) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/remove`),
					method: a.mb.POST,
					data: {
						id: t,
						spam: r
					}
				}),
				E = (e, t, r) => Object(l.a)(e, {
					...i,
					variables: {
						input: {
							id: t,
							isSpam: r
						}
					}
				}),
				x = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				w = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: a.mb.POST,
					data: {
						id: t
					}
				}),
				A = (e, t, r, s) => {
					let i = Object(m.a)(Object(g.a)(Object(O.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return s && (i = Object(f.a)(i)), Object(u.a)(e, {
						data: r,
						endpoint: i,
						method: a.mb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				N = {
					[a.H.NONE]: c.k.None,
					[a.H.MODERATOR]: c.k.ModDistinguished,
					[a.H.ADMIN]: c.k.AdminDistinguished,
					[a.H.ALUMNI_ADMIN]: c.k.AlumniDistinguished
				};

			function k(e, t, r) {
				const n = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === a.H.NONE ? c.d.None : c.d.Distinguished,
							distinguishType: N[t]
						}
					}
				}(t, r);
				return Object(l.a)(e, {
					...d,
					variables: n
				})
			}

			function L(e, t, r) {
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
			const R = async (e, t) => {
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
				return S
			})), r.d(t, "j", (function() {
				return T
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
				return k
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "m", (function() {
				return G
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				i = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = r("./src/redditGQL/operations/CancelPrediction.json"),
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
				g = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = r("./src/redditGQL/operations/SubredditTournamentLeaderboard.json"),
				_ = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				I = r("./src/redditGQL/operations/VotePrediction.json");
			const h = async (e, t) => {
				let {
					postId: r,
					optionId: i,
					coinPackageId: d,
					price: o
				} = t;
				var c;
				const a = await Object(n.a)(e, {
					...I,
					variables: {
						input: {
							postId: r,
							optionId: i,
							coinPackageId: d,
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
			const S = async (e, t) => {
				let {
					subredditId: r,
					period: i = y.AllTime,
					top: d = 100,
					includeCurrentRank: o
				} = t;
				const c = await Object(n.a)(e, {
					...g,
					variables: {
						subredditId: r,
						period: i,
						top: d,
						includeCurrentRank: o
					}
				});
				if (!Object(s.c)(c) || c.error) throw new Error("Failed to fetch subreddit top predictors");
				if (!c.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return c.body.data.subredditInfoById
			}, T = async (e, t) => {
				let {
					subredditId: r,
					tournamentId: i,
					includeCurrentRank: d
				} = t;
				const o = await Object(n.a)(e, {
					...j,
					variables: {
						subredditId: r,
						tournamentId: i,
						includeCurrentRank: d
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
					...m,
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
					...i,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to create prediction");
				const {
					errors: d,
					tournament: o
				} = r.body.data.addPredictionDrafts;
				if (null == d ? void 0 : d.length) throw new Error(d[0].message);
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
					tournament: i
				} = r.body.data.updatePredictionTournament;
				if (!i) throw new Error("Failed to update prediction tournament");
				return i
			}, N = (e, t) => Object(n.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), k = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			}), L = (e, t) => Object(n.a)(e, {
				...p,
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
				var i, o;
				const c = await Object(n.a)(e, {
					...d,
					variables: {
						input: {
							postId: r
						}
					}
				});
				if (!Object(s.c)(c) || !(null === (i = c.body.data.cancelPrediction) || void 0 === i ? void 0 : i.ok) || !(null === (o = c.body.data.cancelPrediction) || void 0 === o ? void 0 : o.poll)) throw new Error("Unable to cancel prediction");
				return c.body.data.cancelPrediction.poll
			}, D = async (e, t) => {
				var r, i;
				const d = await Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(d) || !(null === (r = d.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
				return d.body.data.changePredictionVote.poll
			}, G = async (e, t) => {
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
				return g
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "i", (function() {
				return h
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				i = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				d = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
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
				O = (e, t, r, s) => Object(n.a)(e, {
					...u,
					variables: {
						subredditId: t,
						includeIdentity: r,
						skipAchievements: s
					}
				}, {
					traceRequestName: "subreddit_powerups_full"
				}),
				g = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
				}),
				j = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}),
				_ = (e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}),
				I = (e, t) => Object(n.a)(e, {
					...i,
					variables: t
				}),
				h = async (e, t, r) => {
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
				return d
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				i = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const d = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				o = (e, t) => Object(n.a)(e, {
					...i,
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
				i = r("./src/lib/loadWithRetries/index.ts");
			! function(e) {
				e.PopularCommunities = "Popular Communities", e.Gaming = "Gaming", e.Sports = "Sports", e.TV = "TV", e.Travel = "Travel", e.HealthAndFitness = "Health & Fitness", e.Fashion = "Fashion"
			}(n || (n = {}));
			const d = {
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
					const t = d[e];
					return t ? t() : e
				},
				c = async () => (await Object(i.a)(() => r.e("FrontpageLinks").then(r.t.bind(null, "./src/reddit/endpoints/goodContent/frontpageLinks.json", 3)))).default
		},
		"./src/reddit/endpoints/governance/posts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function i(e, t, r) {
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
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(i.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/compose`),
					method: s.mb.POST,
					data: t
				}),
				l = (e, t) => Object(d.a)(e, {
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
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/redditGQL/operations/ModQueueItems.json");
			const b = (e, t, r) => Object(i.a)(e, {
					endpoint: Object(u.a)(Object(a.a)(`${n.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: s.mb.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				p = (e, t, r) => Object(i.a)(Object(o.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: s.mb.POST,
					type: "json",
					data: r
				}),
				m = (e, t) => Object(d.a)(e, {
					...l,
					variables: t
				})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(s.a)(Object(i.a)(e, [d.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.mb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/page/subredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return S
			})), r.d(t, "b", (function() {
				return T
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/isAdHocMultireddit/index.ts"),
				d = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/performanceTimings/index.tsx"),
				u = r("./src/reddit/constants/graphql.ts"),
				l = r("./src/reddit/constants/page.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				f = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				O = r("./src/reddit/models/Subreddit/index.ts"),
				g = r("./src/reddit/selectors/adsSignals.ts"),
				j = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				_ = r("./src/reddit/selectors/experiments/econ/index.ts"),
				I = r("./src/reddit/selectors/platform.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				y = r("./src/redditGQL/operations/SubredditPage.json");
			const S = (e, t, r, n) => {
					var s, o, c, a;
					const {
						after: b,
						geo_filter: m,
						isMobile: f,
						layout: O,
						limit: y,
						recentPostIds: S,
						sort: T,
						t: E
					} = r, x = Object(v.Z)(e), C = Object(I.q)(e), w = Object(i.a)(t), A = Object(d.a)(t), N = Object(h.U)(e, {
						subredditId: Object(h.G)(e, t)
					}).length > 0, k = (null === (s = e.user.account) || void 0 === s ? void 0 : s.username) || (null === (o = e.user.account) || void 0 === o ? void 0 : o.displayText), L = Object(v.o)(e), R = Object(v.nb)(e), {
						adsSeenCount: P,
						totalPostsSeenCount: D,
						sessionStartTime: G
					} = Object(g.a)(e), U = Object(_.g)(e), F = Object(j.a)(e), M = {
						name: t,
						includeIdentity: x && !e.user.account,
						adContext: {
							layout: O ? O.toUpperCase() : u.a.Card,
							reddaid: e.user.reddaid,
							clientSignalSessionData: {
								adsSeenCount: P,
								totalPostsSeenCount: D,
								sessionStartTime: G
							}
						},
						isFake: A,
						includeAchievementFlairs: n && !A && U,
						includeAppliedFlair: !A && x && !!k && n,
						includeDevPlatformMetadata: F,
						includePowerups: n && !A,
						includeQuestions: n && x && !A,
						includeRecents: A && S && S.length > 0 || !1,
						includeRedditorKarma: n && x && !(null === (a = null === (c = e.user.account) || void 0 === c ? void 0 : c.karma) || void 0 === a ? void 0 : a.total),
						includeRules: n && !A && !N,
						includeSubredditLinks: n && !A && !x,
						includeTopicLinks: n && !A && !x,
						includeTrending: A,
						isAdHocMulti: w,
						isAll: t === l.d.All,
						isLoggedOutGatedOptedin: L,
						isLoggedOutQuarantineOptedin: R,
						isPopular: t === l.d.Popular,
						recentPostIds: S || [],
						subredditNames: w ? t.split("+") : [],
						username: x && k && n ? k : ""
					};
					return T && (M.sort = T.toUpperCase()), E && (M.range = E.toUpperCase()), f ? M.pageSize = Object(p.a)(O) : y && (M.pageSize = y), C && C.ad && (M.forceAds = {
						ad: C.ad
					}), (C && C.geo_filter || m) && (M.region = C && C.geo_filter || m), b && (M.after = btoa(b)), M
				},
				T = async (e, t, r) => {
					const n = Date.now(),
						i = await ((e, t) => Object(c.a)(e, {
							...y,
							variables: t
						}))(e, t),
						d = Date.now();
					if (!i.ok || !i.body) return i;
					const o = i.body,
						u = Date.now(),
						l = Object(m.a)(o.data),
						b = Date.now(),
						p = [{
							duration: d - n,
							logKeyType: a.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: a.a.gqlNormalizationTiming
						}];
					return Object(a.h)({
						name: s.s.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...i,
						ok: !!o.data.subredditInfoByName && !Object(O.j)(o.data.subredditInfoByName),
						status: E(o.data),
						body: l
					}
				}, E = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(O.j)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === O.c.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === O.c.GoldOnly || e.subredditInfoByName.forbiddenReason === O.c.Private || e.subredditInfoByName.forbiddenReason === O.c.Quarantined || e.subredditInfoByName.forbiddenReason === O.c.Gated) return 403
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
				method: s.mb.GET,
				data: r && x(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, r) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? a.richtext_json = r : a.markdown_text = r, Object(s.a)(Object(i.a)(e, [d.a]), {
					endpoint: Object(o.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.mb.POST,
					data: a
				})
			}
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/models/PostDraft/index.ts");
			const i = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				d = e => e.destSubreddit.id ? {
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
					...d(e),
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
				return S
			})), r.d(t, "f", (function() {
				return T
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
				i = r.n(s),
				d = r("./src/config.ts"),
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
				g = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				_ = r("./src/reddit/models/Vote/index.ts"),
				I = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function h() {
				return Object(m.b)() ? "https://strapi.reddit.com" : d.a.streamingApiUrl
			}
			const v = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${h()}${r}`,
					method: c.mb.GET,
					headers: i()(e.headers(), [a.d, a.c, a.a]),
					timeoutMs: void 0
				}).then(L)
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
			}, S = async (e, t) => Object(l.b)({
				endpoint: `${h()}/videos/${t}`,
				method: c.mb.GET,
				headers: i()(e.headers(), [a.d, a.c, a.a])
			}).then(L), T = async (e, t, r) => {
				let n;
				n = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const s = Object(o.a)(n, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${h()}${s}`,
					method: c.mb.GET,
					headers: i()(e.headers(), [a.d, a.c, a.a])
				}).then(L)
			}, E = async e => Object(l.b)({
				endpoint: `${h()}/recommended_viewer_subreddits`,
				method: c.mb.GET,
				headers: i()(e.headers(), [a.d, a.c, a.a])
			}).then(L), x = async (e, t, r) => Object(l.b)({
				endpoint: `${h()}/videos/${t}/vote/${R(r)}`,
				method: c.mb.POST,
				headers: i()(e.headers, [a.d, a.c, a.a])
			}).then(L), C = async (e, t) => Object(l.b)({
				endpoint: `${h()}/videos/${t}/heartbeat`,
				method: c.mb.POST,
				headers: i()(e.headers(), [a.d, a.c, a.a])
			}).then(L), w = async (e, t, r, n) => {
				const s = k(r);
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
				method: c.mb.POST,
				headers: i()(e.headers, [a.d, a.c, a.a]),
				data: {
					text: r
				},
				type: "json"
			}).then(L), N = e => ({
				type: "rtjson",
				richtextContent: Object(f.d)(e),
				rteMode: j.i.RICH_TEXT
			}), k = e => e.rteState ? p.a.getRawText(e.rteState) : e.rtJson ? Object(O.c)(e.rtJson) : void 0, L = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? c.J.NOT_FOUND_ERROR : c.J.SERVER_ERROR
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
				method: c.mb.PUT,
				headers: i()(e.headers, [a.d, a.c, a.a]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(L), D = async (e, t) => Object(l.b)({
				endpoint: `${h()}/broadcasts/${t}/auto_mute_status`,
				method: c.mb.GET,
				headers: i()(e.headers, [a.d, a.c, a.a])
			}).then(L)
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
				i = r("./node_modules/lodash/mapKeys.js"),
				d = r.n(i),
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
							...d()(e, (e, t) => s()(t)),
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
				g = (e, t) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.mb.GET
				}).then(e => (e.ok && e.body.rules && (e.body = f(e.body)), e)),
				j = e => e.ok ? (e.body = Object(m.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: o.mb.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === m.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), I = async (e, t, r, n) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: o.mb.POST,
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
				}).then(e => j(e)), h = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: o.mb.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), v = e => e.map(e => encodeURIComponent(e)).join(), y = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.mb.POST,
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
			const i = e => !(!e.isSponsored || !e.adSupplementaryText || "string" != typeof e.adSupplementaryText),
				d = async (e, t) => {
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
					if (!Object(s.a)(r)) return t;
					const n = {};
					for (const [s, o] of Object.entries(t)) n[s] = i(o) ? await d(e, o) : o;
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
			}));
			var n = r("./node_modules/uuid/v4.js"),
				s = r.n(n),
				i = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				d = r("./src/reddit/constants/things.ts"),
				o = r("./src/reddit/models/Vote/index.ts");
			const c = e => e.rteState ? i.a.toRichTextJSON(e.rteState) : e.rtJson || e.text,
				a = (e, t) => {
					let r = [];
					return e.rteState ? r = i.a.toRichTextJSON(e.rteState, t).document : e.rtJson && (r = e.rtJson.document), {
						document: r
					}
				},
				u = (e, t) => JSON.stringify(a(e, t));

			function l() {
				return `${d.a}_${s()()}`
			}

			function b(e) {
				let {
					temporalId: t,
					draft: r,
					post: n,
					author: s,
					subredditId: i,
					parentId: d
				} = e;
				return {
					id: t,
					postId: n.postId,
					subredditId: i,
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
					parentId: d,
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
				i = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts");
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
					let i = Object(s.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						d = t;
					for (; i && i.depth > r && i.prev && (d = i.prev, (i = Object(s.n)(n, {
							commentLink: d,
							commentsPageKey: e
						})) && !(i.depth <= r)););
					return d.id
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
							const r = Object(d.c)(e, {
								experimentEligibilitySelector: d.a,
								experimentName: i.Q,
								expEventOverride: t
							});
							return !!(Object(i.mg)(r) ? void 0 : r)
						})(r)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/counters/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/sample/index.ts"),
				i = r("./src/telemetry/helpers/sendCounter.ts");
			const d = (e, t) => {
					Object(i.b)(n.n.Redesign, {
						type: i.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				o = (e, t) => {
					Object(s.b)(10) && Object(i.b)(n.n.Redesign, {
						type: i.a.ReonboardingFlow,
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
				i = r("./src/reddit/models/WhitelistStatus/index.ts"),
				d = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/index.ts");
			const c = (e, t) => {
				let {
					subreddits: r,
					profiles: n
				} = t;
				const s = r[e.belongsTo.id] || n[e.belongsTo.id];
				return !e.isNSFW && s && i.a.has(s.wls || i.b.NO_ADS)
			};
			t.a = (e, t, r) => {
				let {
					postIds: n,
					posts: i,
					subreddits: a,
					profiles: u,
					...l
				} = r;
				const b = e.listings.postOrder.ids[t],
					p = (n || []).filter(e => !b || !b.includes(e)),
					m = b.map(t => e.posts.models[t]),
					f = m.length - (s()(m, e => e.isSponsored) + 1),
					O = p.map(e => i[e]);
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
						...d.n(e),
						listing: d.y(e, t)
					}) : j.push(r.id)
				}
				return {
					...l,
					subreddits: a,
					profiles: u,
					posts: i,
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
							i = s.length <= 0,
							d = r.id,
							o = {
								id: d,
								isRoot: i,
								parents: s,
								title: r.topic.title,
								name: r.topic.name
							};
						return i ? (e.topics.push(n(o)), e.dict[d] = e.topics.length - 1) : s.forEach(t => {
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
				return w
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/assertNever.ts"),
				s = r("./src/lib/env/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				o = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/models/Post/index.ts"),
				a = r("./src/reddit/models/RichTextJson/index.ts"),
				u = r("./src/reddit/models/Subreddit/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizeSubredditWidgetsFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				x = r("./src/reddit/models/Onboarding/index.ts"),
				C = r("./src/reddit/helpers/graphql/helpers.ts");
			const w = (e, t, r) => {
				const d = {
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
						if (Object(c.j)(e) || Object(c.i)(e)) return null;
						if (d.posts[e.id]) return e.id;
						const t = Object(f.f)(e);
						d.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === c.a.Post && r.postInfo && o(r.postInfo);
						let a = t.id;
						if (e.authorFlair && (d.authorFlair[t.belongsTo.id] || (d.authorFlair[t.belongsTo.id] = {}), d.authorFlair[t.belongsTo.id][t.author] = Object(l.a)(e.authorFlair)[0]), Object(c.l)(e)) d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(g.a)(e.profile));
						else if (Object(c.n)(e)) d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(_.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(p.a)(e.subreddit));
						else if (Object(c.h)(e)) {
							const r = Object(f.b)(e);
							if (!r) return null;
							a = r, d.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, d.posts[t.id] || (d.posts[t.id] = {
								...t,
								events: []
							}), d.postInstances[e.id] || (d.postInstances[e.id] = []), d.postInstances[e.id].push(r)
						} else try {
							Object(n.a)(e)
						} catch (u) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(s.b)() || console.warn(t), i.c.captureMessage(t)
						}
						return a && d.postIds.push(a), a
					};
				if (e.forEach(e => o(e)), t) {
					d.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) d.subreddits[e.id] = Object(_.a)(e)
				}
				const a = d.postIds.length - 1;
				return d.token = a >= 0 ? d.postIds[a] : "", r && (d.account = Object(E.a)(r), d.preferences = r.preferences && Object(O.a)(r.preferences, r.interactions) || null), d
			};
			t.a = e => {
				let {
					adhocMultiredditByNames: t,
					all: r,
					identity: n,
					popular: p,
					recentPosts: f,
					subredditInfoByName: O,
					trendingSubreddits: g
				} = e;
				var _, N;
				if (!O) return {
					reason: u.e.NotFoundSubreddit,
					data: {
						account: n && Object(E.a)(n) || null
					}
				};
				if (Object(u.j)(O)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: r,
						isEmailRequiredForQuarantineOptin: s,
						interstitialWarningMessage: i
					} = O;
					return {
						reason: A(O.forbiddenReason),
						data: {
							account: n && Object(E.a)(n) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: s,
							...r ? {
								quarantineMessage: r.markdown,
								quarantineMessageRTJson: Object(C.h)(r.richtext, a.i)
							} : {},
							interstitialWarningMessage: null == i ? void 0 : i.markdown,
							interstitialWarningMessageRTJson: Object(C.h)(null == i ? void 0 : i.richtext, a.i)
						}
					}
				}
				const k = {},
					L = O.devPlatformMetadata;
				let R;
				const P = O || p || r || t,
					[D, G] = P.elements.edges.reduce((e, t, r) => {
						var n, s, i, d;
						const [o, a] = e, u = t.node;
						if (Object(c.k)(u)) {
							const e = u;
							e.subreddit = {
								...e.subreddit,
								devPlatformMetadata: L
							}, o.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (d = null === (i = u.flair) || void 0 === i ? void 0 : i.template) || void 0 === d ? void 0 : d.postStyle) && (k[u.flair.template.id] = Object(m.a)(u.flair.template.postStyle))
						} else if (Object(x.g)(u)) {
							const e = Object(b.a)(u.interestTopicRecommendations.recommendationTopics);
							e.topics.length && (R = {
								interests: e,
								index: r
							})
						} else a.push(u);
						return [o, a]
					}, [
						[],
						[]
					]);
				if (G.length) {
					const e = `Received unhandled ${G.length} elements when processing subreddit data: "${G[0].__typename}"`;
					Object(s.b)() || console.warn(e), i.c.captureMessage(e)
				}
				f && D.push(...f);
				const U = P.elements.dist,
					F = w(D, g, n);
				return O.styles && (F.structuredStyles = {
					data: {
						style: Object(y.a)(O.styles)
					}
				}), F.structuredStyles = {
					data: {
						...O.styles ? {
							style: Object(y.a)(O.styles)
						} : {},
						content: {
							widgets: Object(T.a)(O)
						},
						flairTemplate: k
					}
				}, F.subredditAboutInfo = Object(j.a)(O), O.modPermissions && (F.subredditPermissions = Object.keys(O.modPermissions).length > 0 ? Object(h.a)(O.modPermissions) : void 0), O.rules && (F.subredditRules = Object(v.a)(O.rules).rules), ((null == O ? void 0 : O.answerableQuestions) || O.contentRatingSurvey || O.communityProgressModule) && (F.questions = {
					answerableQuestions: null == O ? void 0 : O.answerableQuestions,
					contentRatingSurvey: null == O ? void 0 : O.contentRatingSurvey,
					communityProgressModule: null == O ? void 0 : O.communityProgressModule
				}), Object(u.j)(O) || (Object.assign(F, Object(d.b)(O)), F.powerups = Object(o.c)(O, n)), F.subredditLinks = Object(I.a)({
					data: {
						subredditInfoById: O
					}
				}), F.subredditTopicLinks = Object(S.a)({
					data: {
						subredditInfoById: O
					}
				}), F.appliedFlair = {
					flair: (null === (_ = O.flairedRedditorByName) || void 0 === _ ? void 0 : _.flair) ? Object(l.a)(null === (N = O.flairedRedditorByName) || void 0 === N ? void 0 : N.flair)[0] : void 0,
					displaySettings: O.authorFlairSettings
				}, R && (F.interestTopicRecommendations = R), F.predictionTournaments = O.predictionTournaments || [], {
					...F,
					...null !== U && {
						dist: U
					}
				}
			};
			const A = e => {
				switch (e) {
					case u.c.Banned:
						return u.e.BannedSubreddit;
					case u.c.GoldOnly:
						return u.e.GoldSubreddit;
					case u.c.Private:
						return u.e.PrivateSubreddit;
					case u.c.Quarantined:
						return u.e.QuarantinedSubreddit;
					case u.c.Gated:
						return u.e.GatedSubreddit;
					case u.c.Unknown:
						return u.e.ForbiddenSubreddit
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
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				i = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				d = r("./src/reddit/selectors/user.ts"),
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
				b = Object(o.a)(d.N, i.b, (e, t) => e || t ? {
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
				i = r("./src/reddit/helpers/featureThrottling/store/index.ts"),
				d = r("./src/reddit/helpers/onboarding/postsConsumedWeekly.ts"),
				o = r("./src/reddit/models/Onboarding/index.ts");
			const c = () => {
					const e = Date.now() - n.uc,
						t = Object(s.b)().filter(t => t.lastVisited >= e),
						r = Object(d.a)();
					return t.length < 3 || r < 50
				},
				a = () => !(() => !i.a.isReady || i.a.isFeatureThrottled(o.e.FeatureGate) || i.a.isFeatureThrottled(o.e.Dismissed))() && c(),
				u = () => !(() => !i.a.isReady || i.a.throttlingData[o.e.FeatureGate] || i.a.isFeatureThrottled(o.e.Triggered) || i.a.isFeatureThrottled(o.e.Dismissed))() && c(),
				l = () => {
					i.a.isFeatureThrottled(o.e.Triggered) || (i.a.throttleFeature(o.e.FeatureGate), i.a.throttleFeature(o.e.Triggered))
				},
				b = () => {
					i.a.throttleFeature(o.e.Dismissed)
				}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				d = r("./src/reddit/models/Vote/index.ts"),
				o = e => !0 === e ? d.a.upvoted : !1 === e ? d.a.downvoted : d.a.notVoted,
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
					isDeleted: e.author === n.F,
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
				return e.all_awardings && (t.allAwardings = Object(i.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(i.b)(e.associated_award)), t
			};
			const a = e => "string" == typeof e ? JSON.parse(e) : e,
				u = e => e.author !== n.F ? null : e.body === n.G ? c.c.User : e.body === n.Ob ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizePostFromR2/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/models/Media/index.ts"),
				d = r("./src/reddit/models/PostCreationForm/index.ts"),
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
						type: i.o.TEXT,
						markdownContent: e.selftext,
						obfuscated: n,
						rteMode: e.rte_mode || d.i.RICH_TEXT,
						...e.rtjson && {
							richtextContent: e.rtjson,
							type: i.o.RTJSON,
							mediaMetadata: e.media_metadata
						}
					};
					if (e.secure_media && e.secure_media.oembed || e.is_survey_ad) return {
						content: e.secure_media_embed.media_domain_url,
						type: i.o.EMBED,
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
							type: i.o.VIDEO
						}
					}
					if (e.media && e.media.rpan_video) {
						const t = e.media.rpan_video;
						return {
							hlsUrl: t.hls_url,
							scrubberThumbSource: t.scrubber_media_url,
							type: i.o.LIVEVIDEO
						}
					}
					if (t && r) return {
						content: o.mp4.source.url,
						type: i.o.GIFVIDEO,
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
							type: i.o.IMAGE,
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
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n);
			const i = e => s()(e).sort((t, r) => {
					const n = e[t.tag.id].tag.text.toLowerCase(),
						s = e[r.tag.id].tag.text.toLowerCase();
					return n < s ? -1 : n > s ? 1 : 0
				}),
				d = e => !e.id && !!e.action
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = e => {
					let {
						state: t,
						commentId: r,
						collapsed: i
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "view",
						noun: i ? "collapsed_comment" : "comment",
						...s.n(t),
						profile: s.S(t),
						post: s.J(t, r),
						media: s.B(t, r),
						subreddit: s.ib(t),
						comment: s.h(t, r)
					})
				},
				d = e => {
					let {
						state: t,
						commentId: r,
						collapsed: i
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "consume",
						noun: i ? "collapsed_comment" : "comment",
						...s.n(t),
						profile: s.S(t),
						post: s.J(t, r),
						media: s.B(t, r),
						subreddit: s.ib(t),
						comment: s.h(t, r)
					})
				},
				o = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.qb(t),
					subreddit: s.ib(t),
					post: s.J(t, e),
					actionInfo: s.d(t),
					app: s.f(t),
					referrer: s.X(t),
					session: s.eb(t)
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
				return g
			})), r.d(t, "g", (function() {
				return j
			}));
			var n, s = r("./src/reddit/selectors/tags.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/index.ts");
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
					...i.n(e),
					subreddit: {
						...i.ib(e) || {},
						id: t,
						...c(e, t)
					},
					source: r.context,
					action: "click"
				}),
				b = (e, t, r) => {
					Object(d.a)(((e, t, r) => ({
						...l(e, t.subredditId, r),
						noun: t.isRelevant ? "restore_related_topic" : "remove_related_topic",
						topicTag: u(e, t.subredditId, t.tagId)
					}))(e, t, r))
				},
				p = (e, t, r, n) => {
					Object(d.a)({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "add_related_topic"
					})
				},
				m = (e, t, r, n) => {
					return !Object(s.i)(e, {
						subredditId: t
					}) && r.id ? Object(d.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, n)) : r.id ? Object(d.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, n)) : Object(d.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, n))
				},
				f = (e, t, r, n) => Object(d.a)({
					...l(e, t, n),
					topicTag: a(e, t, r),
					noun: "topic_remove"
				}),
				O = (e, t, r) => Object(d.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				g = (e, t, r) => Object(d.a)({
					...l(e, t, r),
					noun: r.context === n.communitySettings ? "save" : "save_community_topics"
				}),
				j = (e, t, r, n) => {
					const s = l(e, t, n);
					Object(d.a)({
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
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/index.ts");
			const i = e => t => Object(s.a)({
					...n.n(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "load",
					noun: "serving",
					feed: n.q(t)
				}),
				d = e => t => Object(s.a)({
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
				i = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(n || (n = {}));
			const d = e => ({
					subreddit: i.ib(e),
					userSubreddit: i.sb(e)
				}),
				o = e => ({
					source: "subreddit_tooltip",
					noun: n.SubredditInlineTooltip,
					action: s.c.VIEW,
					...d(e)
				}),
				c = e => ({
					source: "id_card",
					noun: n.EditSubredditIcon,
					action: s.c.CLICK,
					...d(e)
				}),
				a = e => ({
					source: "id_card",
					noun: n.EditSubredditDescription,
					action: s.c.CLICK,
					...d(e)
				}),
				u = (e, t) => r => ({
					source: "id_card",
					noun: n.SaveDescription,
					action: s.c.CLICK,
					setting: {
						value: String(e),
						oldValue: String(t)
					},
					...d(r)
				}),
				l = (e, t) => ({
					source: "id_card",
					noun: n.Error,
					action: s.c.VIEW,
					...d(e),
					...i.n(e),
					actionInfo: i.d(e, {
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
				return S
			})), r.d(t, "m", (function() {
				return T
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
			const i = (e, t) => {
					var r, n, s, i, d, o, c, a, u, l, b;
					const {
						modNote: p,
						subredditId: m,
						userId: f,
						postId: O,
						commentId: g,
						subredditSearch: j,
						filteredType: _,
						filteredSubredditId: I
					} = t, h = g || (null === (n = null === (r = p) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), v = O || (null === (i = null === (s = p) || void 0 === s ? void 0 : s.postInfo) || void 0 === i ? void 0 : i.id);
					return {
						modnote: {
							type: null == p ? void 0 : p.itemType,
							content: null === (d = p) || void 0 === d ? void 0 : d.note,
							label: null === (c = null === (o = p) || void 0 === o ? void 0 : o.label) || void 0 === c ? void 0 : c.toLowerCase(),
							operatorId: null === (a = null == p ? void 0 : p.operator) || void 0 === a ? void 0 : a.id,
							subredditSearch: j,
							filteredType: null == _ ? void 0 : _.toLowerCase(),
							filteredSubredditId: null == I ? void 0 : I.toLowerCase()
						},
						modAction: {
							targetUserId: f || (null === (u = null == p ? void 0 : p.user) || void 0 === u ? void 0 : u.id),
							action: null === (b = null === (l = p) || void 0 === l ? void 0 : l.actionType) || void 0 === b ? void 0 : b.toLowerCase()
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
							id: m
						}
					}
				},
				d = "moderator",
				o = e => t => ({
					source: d,
					action: "view",
					noun: "modnote_quickaccess",
					correlationId: Object(n.d)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				c = e => t => {
					const r = {
						source: d,
						action: "close",
						noun: "modnote_quickaccess",
						correlationId: Object(n.c)(n.a.ModNotes),
						...s.n(t),
						...i(0, e)
					};
					return Object(n.b)(n.a.ModNotes), r
				},
				a = e => t => ({
					source: d,
					action: "click",
					noun: "relatedcontent_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				u = e => t => ({
					source: d,
					action: "click",
					noun: "relatedcontent_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				l = e => t => ({
					source: d,
					action: "click",
					noun: "relatedcontent_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				b = e => t => ({
					source: d,
					action: "click",
					noun: "expand_modlog_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				p = e => t => ({
					source: d,
					action: "click",
					noun: "expand_modlog_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				m = e => t => ({
					source: d,
					action: "click",
					noun: "expand_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				f = e => t => ({
					source: d,
					action: "click",
					noun: "username_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				O = e => t => ({
					source: d,
					action: "click",
					noun: "mod_username_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				g = e => t => ({
					source: d,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				j = e => t => ({
					source: d,
					action: "view",
					noun: "user_profile_hovercard",
					correlationId: Object(n.d)(n.a.ModNotes, !1),
					...s.n(t),
					...i(0, e)
				}),
				_ = e => t => ({
					source: d,
					action: "click",
					noun: "add_note_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				I = e => t => ({
					source: d,
					action: "click",
					noun: "user_mod_log_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				h = e => t => ({
					source: d,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				v = e => t => ({
					source: d,
					action: "view",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				y = e => t => ({
					source: d,
					action: "close",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				S = e => t => ({
					source: d,
					action: "click",
					noun: "type_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				T = e => t => ({
					source: d,
					action: "click",
					noun: "subreddit_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				E = e => t => ({
					source: d,
					action: "select",
					noun: "type_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				x = e => t => ({
					source: d,
					action: "select",
					noun: "subreddit_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				C = e => t => ({
					source: d,
					action: "submit",
					noun: "submit_note_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				w = e => t => ({
					source: d,
					action: "click",
					noun: "delete_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				A = e => t => ({
					source: d,
					action: "click",
					noun: "cancel_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				}),
				N = e => t => ({
					source: d,
					action: "click",
					noun: "delete_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...i(0, e)
				})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return d
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
				return g
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "n", (function() {
				return h
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r) => ({
					...s.n(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: s.S(e),
					subreddit: s.ib(e),
					powerups: {
						...s.nb(e),
						freeCount: t,
						paidCount: r
					}
				}),
				d = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_become_hero",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				o = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powerups_see_all_heroes",
					...i(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = e => (t, r) => n => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...i(n),
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
					...i(t),
					actionInfo: s.d(t, {
						reason: e
					})
				}),
				b = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...i(t),
					actionInfo: s.d(t, {
						reason: e
					})
				}),
				p = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...i(t),
					powerups: {
						...s.nb(t),
						benefit: e
					}
				}),
				m = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...i(r, e, t)
				}),
				f = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...i(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				O = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...i(e)
				}),
				g = (e, t) => r => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...i(r),
					powerups: {
						...s.nb(r),
						emojiCount: e
					}
				}),
				j = (e, t) => r => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...i(r),
					powerups: {
						...s.nb(r),
						emojiCount: e
					}
				}),
				_ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return r => ({
						source: t,
						action: "delete",
						noun: "custom_emojis",
						...i(r),
						powerups: {
							...s.nb(r),
							emojiCount: e
						}
					})
				},
				I = (e, t) => r => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? s.jb(r, t) : void 0,
					...i(r),
					correlationId: e
				}),
				h = (e, t, r) => n => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(r)
					},
					subreddit: s.ib(n),
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
				return i
			}));
			const n = e => !e.id,
				s = e => !!e.id,
				i = (e, t) => n(e) && n(t) ? e.displayText.toLowerCase().trim() === t.displayText.toLowerCase().trim() : !(!s(e) || !s(t)) && e.id === t.id
		},
		"./src/reddit/models/Tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			}));
			const n = 25,
				s = 64;
			var i;
			! function(e) {
				e.EVENT = "EVENT", e.COLLECTION = "COLLECTION", e.CLASSIFICATION = "CLASSIFICATION", e.POST_CLASSIFICATION = "POST_CLASSIFICATION", e.SUBREDDIT_CLASSIFICATION = "SUBREDDIT_CLASSIFICATION", e.COMMENT_CLASSIFICATION = "COMMENT_CLASSIFICATION"
			}(i || (i = {}));
			const d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return {
						id: e.id,
						displayText: e.text,
						selected: t
					}
				},
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return d(e.tag, t)
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
			var i = function() {
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
				d = r("./src/reddit/models/SubredditModeration/index.ts");
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
							} = t.payload, i = Object(d.d)(r, n, s);
							return {
								...e,
								[i]: !0
							}
						}
						case s.T:
						case s.S: {
							const {
								subredditId: r,
								userId: n,
								filter: s
							} = t.payload, i = Object(d.d)(r, n, s);
							return {
								...e,
								[i]: !1
							}
						}
						default:
							return e
					}
				},
				a = Object(n.c)({
					error: i,
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
								fetchedToken: i
							} = t.payload, o = Object(d.d)(r, n, s, i);
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
						} = t.payload, s = Object(d.d)(r, n.user.id, b.o.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.H: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, i = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, o = Object(d.d)(n, i, b.o.All);
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
								i = Object(d.d)(r, n, b.o.All);
							s[i] = e.id
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
								[Object(d.d)(e, r, n)]: s
							}
						}
						default:
							return e
					}
				},
				g = r("./node_modules/icepick/icepick.js");
			const j = {};
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
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
							return Object(g.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.T: {
							const {
								notes: r
							} = t.payload;
							return Object(g.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
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
				h = r.n(I);
			const v = {};
			var y = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: n,
							newModNote: s,
							filter: i
						} = t.payload;
						if (i !== b.o.All && i !== b.o.Note) return e;
						const o = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(d.d)(n, o, i),
							a = i === b.o.All ? b.o.Note : b.o.All,
							u = Object(d.d)(n, o, a);
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
							filter: i
						} = t.payload, o = Object(d.d)(n, s, i), c = r.map(e => e.id);
						return e[o] ? {
							...e,
							[o]: h()([...e[o], ...c])
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
						} = t.payload, i = Object(d.d)(r, n, b.o.All), o = Object(d.d)(r, n, b.o.Note), c = e[i] ? e[i].filter(e => e !== s) : [], a = e[o] ? e[o].filter(e => e !== s) : [];
						return {
							...e,
							...e[i] ? {
								[i]: c
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
			const S = {};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(d.d)(r, n.user.id, b.o.All);
						return {
							...e,
							[s]: {
								...e[s],
								[b.o.All]: (e[s][b.o.All] || 0) + 1,
								[b.o.Note]: (e[s][b.o.Note] || 0) + 1
							}
						}
					}
					case s.lb: {
						const {
							subredditId: r,
							userId: n,
							totalCounts: s
						} = t.payload, i = Object(d.d)(r, n, b.o.All);
						return {
							...e,
							[i]: Object.keys(s).reduce((e, t) => (e[t] = s[t].totalCount, e), {})
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(d.d)(r, n, b.o.All);
						return {
							...e,
							...void 0 !== e[s] ? {
								[s]: {
									...e[s],
									[b.o.All]: (e[s][b.o.All] || 1) - 1,
									[b.o.Note]: (e[s][b.o.Note] || 1) - 1
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
				models: _,
				order: y,
				totalCount: T
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				i = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				d = r("./src/reddit/actions/modQueue/constants.ts"),
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
					case d.i:
					case d.f:
					case d.m:
					case d.p:
					case d.v: {
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
					case i.h: {
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
						} = t.payload, i = {
							...null === (r = e[n]) || void 0 === r ? void 0 : r.permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: i
							}
						}
					}
					case l.q: {
						const r = t.payload,
							s = e[r.subredditId],
							i = null === (n = e[r.subredditId]) || void 0 === n ? void 0 : n.templates,
							d = null === (p = e[r.subredditId]) || void 0 === p ? void 0 : p.templateIds,
							o = (null === (m = r.template) || void 0 === m ? void 0 : m.id) || (null === (f = r.template) || void 0 === f ? void 0 : f.templateId);
						if (!o) return;
						const c = {
								...i,
								[o]: r.template
							},
							a = [...d];
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
							i = e[r.subredditId].templates,
							d = e[r.subredditId].templateIds,
							o = s()(i, r.templateId),
							c = d.filter(e => e !== r.templateId);
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
			const i = [];
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
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

			function S(e, t) {
				const r = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
				return {
					id: e.id,
					created: r,
					stickied: e.isStickied,
					authorId: e.authorId
				}
			}

			function T(e, t) {
				return Object.values(e).map(e => S(e, t))
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
							} = t.payload, s = e[n] ? e[n] : [], i = T(r, s.find(e => e.stickied)), d = h([...s, ...i]);
							return {
								...e,
								[n]: [...d]
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
								[n]: v(S(r), e[n])
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
								[s]: y(r, v(S(n), e[s]))
							}
						}
						case f.L: {
							const {
								optimisticComment: r,
								commentsPageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: v(S(r), e[n])
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
			const k = {};

			function L(e) {
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
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.y: {
						const {
							comments: r,
							commentLists: n,
							continueThreads: s,
							key: i,
							moreCommentsItem: d,
							moreComments: o
						} = t.payload, c = n[d.postId], a = e[i], u = {}, l = a[d.id];
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
							[i]: {
								...e[i],
								...L(r),
								...L(s),
								...L(o),
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
							moreComments: i
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...L(r),
								...L(n),
								...L(i)
							}
						}
					}
					case j.b:
					case f.N: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, i = e[n], d = {};
						let o = null;
						return s && (d[s] = {
							...i[s],
							prev: Object(N.i)(r.id)
						}, o = Object(N.i)(s)), {
							...e,
							[n]: {
								...e[n],
								...d,
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
							depth: i
						} = t.payload, d = e[n], o = {};
						let c = null;
						if (!d[s]) return e;
						const a = d[s].next;
						return a && (o[a.id] = {
							...d[a.id],
							prev: Object(N.i)(r.id)
						}, c = a), o[s] = {
							...d[s],
							next: Object(N.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...o,
								[r.id]: {
									depth: i,
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
			const G = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
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
				api: m,
				followed: g,
				keyToChatCommentLinks: x,
				keyToCommentThreadLinkSets: R,
				keyToHeadCommentId: D,
				keyToPostId: U,
				ads: d
			})
		},
		"./src/reddit/reducers/tags/selected/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./node_modules/lodash/uniqWith.js"),
				i = r.n(s),
				d = r("./node_modules/lodash/values.js"),
				o = r.n(d),
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
							primaryTag: d
						} = t.payload, c = i()([...(e.selectedOptions[r] || []).map(e => {
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
						return d && (l = {
							...l,
							[r]: d.tag.id
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
						} = t.payload, d = t.type === c.z ? "selectedOptions" : "selectedSuggestedOptions", o = t.type === c.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[o][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						let b = n.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[d]: {
								...e[d],
								[r]: i()([...e[d][r] || [], {
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
						} = t.payload, i = t.type === c.y ? "selectedOptions" : "selectedSuggestedOptions", d = t.type === c.y ? "deselectedOptions" : "deselectedSuggestedOptions", o = (e[d][r] || []).slice(), u = (e[i][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						return l > -1 && (null === u[l].action && o.push({
							...u[l],
							action: n.REMOVE
						}), u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: u
							},
							[d]: {
								...e[d],
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
							i = n.reduce((e, t) => (e.selectedOptions[t] = o()(r[t]).map(e => ({
								...Object(u.e)(e, !0),
								action: null
							})), e.deselectedOptions[t] = [], e.inputByItemId[t] = "", e), s);
						return {
							...e,
							inputByItemId: {
								...e.inputByItemId,
								...i.inputByItemId
							},
							selectedOptions: {
								...e.selectedOptions,
								...i.selectedOptions
							},
							deselectedOptions: {
								...e.deselectedOptions,
								...i.deselectedOptions
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
							i = e.selectedOptions[r];
						if (i) {
							const t = i.findIndex(e => e.id === n),
								d = [...i];
							return t >= 0 && d.splice(t, 1), {
								...s,
								selectedOptions: {
									...e.selectedOptions,
									[r]: d
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
				i = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = r("./src/reddit/helpers/publicAccessNetwork/index.ts");
			const o = e => e.publicAccessNetwork.api.config,
				c = (e, t) => !!t && !!e.publicAccessNetwork.api.error[Object(d.g)(t)],
				a = e => c(e, i.b),
				u = (e, t) => !!t && !!e.publicAccessNetwork.api.pending[Object(d.g)(t)] && e.publicAccessNetwork.api.pending[Object(d.g)(t)].isPending,
				l = e => u(e, i.b),
				b = e => e.publicAccessNetwork.api.pending[i.b] && e.publicAccessNetwork.api.pending[i.b].fetchedUtcTimeStamp,
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
				g = Object(n.a)(o, e => !1),
				j = Object(n.a)(o, e => e.isError),
				_ = Object(n.a)(o, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				h = (Object(n.a)(I, e => e.isError), Object(n.a)(I, e => e.isPending)),
				v = Object(s.a)(Object(n.a)(I, e => e.subreddits)),
				y = Object(n.a)(v, e => [{
					name: "All",
					prefixedName: "All",
					path: Object(d.e)()
				}, ...e.map(e => ({
					name: e,
					prefixedName: `r/${e}`,
					path: Object(d.f)(e)
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
				return j
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "u", (function() {
				return I
			})), r.d(t, "w", (function() {
				return h
			})), r.d(t, "x", (function() {
				return v
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "J", (function() {
				return E
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "q", (function() {
				return R
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "t", (function() {
				return D
			})), r.d(t, "z", (function() {
				return G
			})), r.d(t, "L", (function() {
				return U
			})), r.d(t, "s", (function() {
				return F
			})), r.d(t, "F", (function() {
				return M
			})), r.d(t, "G", (function() {
				return q
			})), r.d(t, "H", (function() {
				return B
			})), r.d(t, "r", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return J
			})), r.d(t, "N", (function() {
				return H
			})), r.d(t, "v", (function() {
				return V
			})), r.d(t, "M", (function() {
				return z
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "I", (function() {
				return W
			})), r.d(t, "E", (function() {
				return Y
			})), r.d(t, "K", (function() {
				return X
			})), r.d(t, "p", (function() {
				return Z
			})), r.d(t, "O", (function() {
				return ee
			})), r.d(t, "y", (function() {
				return te
			})), r.d(t, "A", (function() {
				return re
			})), r.d(t, "D", (function() {
				return ne
			})), r.d(t, "B", (function() {
				return se
			})), r.d(t, "C", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/objectSelector/index.ts"),
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
				g = r("./src/redditGQL/types.ts");
			Object(m.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: O.a
				}
			});
			const j = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.api.error[r]
				},
				_ = (e, t) => {
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
				h = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				v = (e, t) => {
					const r = h(e, t);
					if (r) return Object(p.b)(e, {
						commentId: r
					})
				},
				y = [],
				S = Object(d.a)((e, t) => {
					const r = v(e, t),
						n = r && r.id;
					if (!n) return y;
					const {
						commentsPageKey: s
					} = t, i = e.pages.comments.keyToCommentThreadLinkSets[s], d = [];
					let o = {
						id: n,
						type: c.a.Comment
					};
					do {
						d.push(o), o = i[o.id].next
					} while (o);
					return d
				}),
				T = (e, t) => h(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				E = (e, t) => {
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
					const i = e.pages.comments.keyToCommentThreadLinkSets[s];
					return i ? n ? i[n.id] : r ? i[r] : null : null
				},
				C = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.keyToCommentThreadLinkSets[r]
				},
				w = (e, t) => {
					const r = t.commentsPageKey ? x(e, t) : null;
					return r ? r.depth : null
				},
				A = (e, t) => {
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
				N = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(u.x)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== i.F).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				k = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.features.comments.collapsed[r]
				},
				L = e => e.moreComments.models,
				R = e => e.features.comments.models,
				P = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = Object(p.b)(e, {
						commentId: r
					});
					return n ? Object(p.a)(e, n) : ""
				},
				D = (e, t) => {
					let {
						commentId: r
					} = t;
					return !!(r && e.features.comments.focused && e.features.comments.focused[r])
				},
				G = (e, t) => {
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
				F = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const n = r && e.features.comments.replyFormOpen[r] || {},
						s = Object.keys(n).find(e => n[e]),
						i = s && Object(p.b)(e, {
							commentId: s
						}),
						d = i && w(e, {
							commentId: i.id,
							commentLink: void 0,
							commentsPageKey: r
						});
					if (i && "number" == typeof d) return {
						...i,
						depth: d
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
					var n, s, i;
					return (null === (i = null === (s = null === (n = e.features.comments.submit) || void 0 === n ? void 0 : n.error) || void 0 === s ? void 0 : s[r]) || void 0 === i ? void 0 : i.type) || null
				},
				V = (e, t) => {
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
					if (r) return Object(b.ab)(e, r)
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
					const i = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r);
					return !!(i && i.expiresAt < Date.now())
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
				se = Object(o.a)(l.a, b.w, (e, t) => {
					var r;
					return e && (null === (r = null == t ? void 0 : t.allowedMediaInComments) || void 0 === r ? void 0 : r.includes(g.e.Giphy)) || !1
				}),
				ie = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n;
					const s = Object(b.w)(e, {
						subredditId: r
					});
					return (null === (n = null == s ? void 0 : s.allowedMediaInComments) || void 0 === n ? void 0 : n.includes(g.e.Static)) || !1
				}
		},
		"./src/reddit/selectors/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
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
			const i = e => e.discoveryUnits.api.list.loaded,
				d = e => e.discoveryUnits.api.list.pending,
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
						} = t, n = e && e.name || "", s = r && r.subredditName || "", i = "subreddit" === n, d = a.has(s.toLowerCase());
						return i && d
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/server/helpers/canonicalUrl.tsx");
			const d = (e, t) => e.find(e => t <= e);

			function o(e, t) {
				return Object(i.c)(`/best/communities/${e}/#${t}`)
			}

			function c(e, t) {
				return e > 50 ? {
					percentile: d([0, 1, 5, 10, 20, 50], t),
					position: e
				} : {
					position: e
				}
			}
			const a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.T
					}) === n.db.Enabled
				},
				u = (e, t) => {
					let {
						subredditId: r,
						subredditAboutInfo: n
					} = t;
					if (a(e) && r && (null == n ? void 0 : n.directoryRankings)) return function(e, t) {
						const r = null === (n = e.rankings) || void 0 === n ? void 0 : n[0];
						var n;
						if (r && r.position > 0 && t) {
							const e = Math.ceil(r.position / r.totalRanked * 100);
							if (e <= 50) return {
								url: o(r.pageNumber, t),
								...c(r.position, e)
							}
						}
					}(n.directoryRankings, r)
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
				i = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/helpers/isCrosspost.ts"),
				c = r("./src/reddit/models/Media/index.ts"),
				a = r("./src/reddit/selectors/activeModal.ts"),
				u = r("./src/reddit/selectors/experiments/index.ts"),
				l = r("./src/reddit/selectors/posts.ts");
			const b = e => {
					return Object(d.c)(e, {
						experimentEligibilitySelector: u.e,
						experimentName: i.Se
					}) === i.Jd
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
		"./src/reddit/selectors/experiments/devPlatform.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const i = Object(s.a)(n.Fb)
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
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const o = e => Object(i.c)(e, {
					experimentName: s.od,
					experimentEligibilitySelector: d.Q
				}),
				c = Object(n.a)(o, e => e === s.Od.Community || e === s.Od.Supporter)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Pb
				}) === n.Pc.Enabled,
				d = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Ob
				}) === n.Oc.Enabled
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
				return p
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "a", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/countrySites.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(n.a)(o.f, d.f, (e, t) => e && !t),
				u = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.hc
				}),
				l = e => !!Object(c.a)(u(e)),
				b = e => u(e) === s.ub.RemovePopularCommunities,
				p = e => u(e) === s.ub.LoggedOutUiOnly || f(e) || O(e),
				m = e => u(e) === s.ub.LoggedOutHomeDefpop,
				f = e => u(e) === s.ub.RemoveRecentCommunities,
				O = e => u(e) === s.ub.FilterOutNSFW
		},
		"./src/reddit/selectors/experiments/mediaInComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.we
				}) === n.Jd,
				d = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ve
				}) === n.Jd
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return w
			}));
			var n, s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/subreddit.ts"),
				d = r("./src/reddit/constants/experiments.ts"),
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
			const f = m(d.lc, !0),
				O = m(d.lc, !1),
				g = m(d.nc, !0),
				j = (m(d.nc, !1), m(d.mc, !0)),
				_ = m(d.mc, !1),
				I = m(d.oc, !0),
				h = m(d.oc, !1),
				v = Object(s.a)(f, g, (e, t) => e === d.Qc.Enabled || t === d.Rc.Enabled),
				y = Object(s.a)(j, I, (e, t) => e === d.vb.BlurredPreview || e === d.vb.NoPreview || t === d.vb.BlurredPreview || t === d.vb.NoPreview),
				S = Object(s.a)(_, h, (e, t) => e === d.vb.BlurredPreview || t === d.vb.BlurredPreview),
				T = Object(s.a)(j, I, (e, t) => e === d.vb.NoPreview || t === d.vb.NoPreview),
				E = Object(s.a)(v, T, S, (e, t, r) => (e || t) && !r),
				x = e => {
					const t = S(e),
						r = E(e);
					return t ? n.Blurred : r ? n.NoPreview : null
				},
				C = e => {
					const t = S(e),
						r = Object(i.l)(e);
					return t && r
				},
				w = e => {
					var t;
					const r = S(e),
						n = Object(l.b)(e),
						s = null === (t = null == n ? void 0 : n.routeMatch) || void 0 === t ? void 0 : t.match;
					if (s) {
						const t = Object(b.k)(e, {
								profileName: s.params.profileName
							}),
							i = !!(t && (null == t ? void 0 : t.isNSFW)),
							d = Object(o.E)(e, {
								pageLayer: n
							});
						return r && i && !d
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
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const c = Object(n.a)(d.e, o.J, (e, t) => e && !t),
				a = e => Object(i.c)(e, {
					experimentEligibilitySelector: c,
					experimentName: s.Cc
				}),
				u = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.Bc
				}), e => e),
				l = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.Ub
				}), e => e === s.Jd)
		},
		"./src/reddit/selectors/experiments/publicAccessNetwork.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
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
			const i = e => n.mf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.tf
				}),
				d = e => n.mf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ff
				}),
				o = (e, t, r) => {
					const i = r(e, t);
					return !(!i || !i.meter) && (i.meter.enabled && n.ag.Enabled === Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Zf
					}))
				},
				c = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.sf
				}),
				a = e => {
					switch (e) {
						case n.xf.Five:
							return .05;
						case n.xf.Ten:
							return .1;
						case n.xf.Fifty:
							return .5;
						default:
							return .01
					}
				},
				u = e => n.mf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.uf
				}),
				l = e => n.mf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.qf
				}),
				b = e => n.mf.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.rf
				})
		},
		"./src/reddit/selectors/experiments/supportingLinkAds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./node_modules/reselect/es/index.js");
			const d = Object(i.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.Gc
			}), e => e === n.Jd)
		},
		"./src/reddit/selectors/experiments/targetedOnboardingSkip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const d = e => Object(s.c)(e, {
				experimentEligibilitySelector: i.Q,
				experimentName: n.Hc
			})
		},
		"./src/reddit/selectors/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			}));
			var n = r("./src/reddit/models/ExternalAccount/index.ts"),
				s = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
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
					const t = Object(i.k)(e);
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
					const d = o(e, {
						username: r
					});
					if (!d) return null;
					const c = d[n.a.Twitter];
					if (!c) return null;
					const a = Object(i.k)(e);
					if (!(a && Object(s.e)(a).toLowerCase() === r.toLowerCase())) return c;
					const u = Object(i.Ab)(e, {
						userName: r
					});
					return u ? u.prefShowTwitter ? c : null : c
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const d = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(i.eb)({
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
							d = {};
						return r.document ? d.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (d.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: d,
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
				return i
			})), r.d(t, "b", (function() {
				return d
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
			const i = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetching) || !1
				},
				d = (e, t) => {
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
				i = r("./src/reddit/actions/gold/constants.ts");
			const d = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, n;
					switch (t.type) {
						case i.pb:
						case i.qb: {
							const {
								benefitStatuses: n,
								subredditId: s
							} = t.payload;
							if (!n) return e;
							const i = null !== (r = e[s]) && void 0 !== r ? r : {},
								d = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								d[t] = r
							}), {
								...e,
								[s]: {
									...i,
									...d
								}
							}
						}
						case i.M: {
							const {
								benefitStatuses: r,
								subredditId: s
							} = t.payload, i = null !== (n = e[s]) && void 0 !== n ? n : {}, d = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								d[t] = r
							}), {
								...e,
								[s]: {
									...i,
									...d
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
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts");
			const i = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!n.d.subredditInlineEditing(e)) return !1;
					const i = r ? Object(s.n)(e, {
						subredditId: r
					}) : null;
					return !!i && (e => !!e && e.config)(i)
				},
				d = e => e.subreddits.api.inlineEditing.pending
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
				i = r("./src/redditGQL/types.ts"),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			Object(d.a)({
				features: {
					modUserNotes: o.a
				}
			});
			const c = Object(n.a)((e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const d = Object(s.d)(r, n, i),
						o = e.features.modUserNotes.order[d];
					return o ? o.map(t => e.features.modUserNotes.models[t]) : []
				}),
				a = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const d = Object(s.d)(r, n, i);
					return e.features.modUserNotes.api.pending[d]
				},
				u = e => e.features.modUserNotes.api.error,
				l = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const d = Object(s.d)(r, n, i);
					return e.features.modUserNotes.loadMore[d]
				},
				b = (e, t, r) => {
					if (!t || !r) return;
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, i.o.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				p = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, i.o.All)]
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
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				d = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				c = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				u = r("./src/reddit/selectors/activeModal.ts"),
				l = r("./src/reddit/selectors/emailVerification.ts"),
				b = r("./src/reddit/selectors/experiments/onboarding.ts"),
				p = r("./src/reddit/selectors/experiments/targetedOnboardingSkip.ts"),
				m = r("./src/reddit/selectors/platform.ts"),
				f = r("./src/reddit/selectors/user.ts");
			const O = e => {
					const t = Object(m.q)(e);
					return Boolean((null == t ? void 0 : t[o.w]) && Object(n.a)(t[o.w]))
				},
				g = e => e.onboarding.shouldSkipOnboardingState,
				j = Object(s.a)(f.Q, f.P, O, g, e => {
					var t;
					const r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams,
						n = r.subredditName;
					return Object(p.a)(e) !== d.Uf.TargetedOnboarding || n && Object(i.a)(n, {
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
				I = Object(s.a)(b.c, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(d.mg)(e) ? t : null),
				h = Object(s.a)(b.c, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(c.I)(r) || Object(c.J)(r) || Object(c.y)(r)
				}, u.b, l.a, g, (e, t, r, n, s) => e === d.xb.PopoverFeed15 && t && Object(a.c)() && !r && !n && !s)
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/experiments/loggedOutOneFeed.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const d = e => {
					const t = Object(s.e)(e);
					return !Object(i.Q)(e) && !t && e.seo.linksModule.frontpage || null
				},
				o = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				c = Object(n.a)(d, e => e ? e.map(e => ({
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
				return p
			})), r.d(t, "n", (function() {
				return m
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
				return k
			})), r.d(t, "z", (function() {
				return L
			})), r.d(t, "y", (function() {
				return R
			})), r.d(t, "u", (function() {
				return P
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "q", (function() {
				return G
			})), r.d(t, "C", (function() {
				return U
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
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/some.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/values.js"),
				d = r.n(i),
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
				S = {},
				T = {},
				E = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				x = e => e.tags.models.globalSubredditTags,
				C = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				w = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditScopedTags[r] || T
				},
				A = (e, t) => {
					const r = d()(t);
					for (let n = 0; n < r.length; n++)
						if (r[n].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[n];
					return null
				},
				N = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.itemTags[r] || S
				},
				k = (e, t) => {
					let {
						itemId: r
					} = t;
					return !!e.tags.models.itemTags[r]
				},
				L = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.suggestedItemTags[r] || S
				},
				R = (e, t) => {
					let {
						itemId: r
					} = t;
					return d()(L(e, {
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
					return d()(((e, t) => {
						let {
							thingId: r,
							suggested: n = !1
						} = t;
						const s = (n ? j(e, {
								subredditId: r
							}) : g(e, {
								subredditId: r
							})) ? C(e) : E(e),
							i = n ? v(e, {
								subredditId: r
							}) : h(e, {
								subredditId: r
							}),
							d = s.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return i.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), d)
					})(e, {
						thingId: r,
						suggested: n
					})).filter(e => !e.selected && e.id !== s)
				}),
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					return h(e, {
						subredditId: r
					}).concat(y(e, {
						subredditId: r
					}))
				},
				U = (e, t) => {
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
				J = e => {
					const t = Q(e);
					return M(e, t)
				},
				H = e => e.tags.api.updatePrimaryTag.pending,
				V = (e, t) => {
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
				return p
			})), r.d(t, "c", (function() {
				return m
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/selectors/gold/powerups/index.ts"),
				d = r("./src/reddit/selectors/moderatorPermissions.ts"),
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
					var n, i;
					return (null === (n = e.features.userFlair[r]) || void 0 === n ? void 0 : n.displaySettings) ? null === (i = e.features.userFlair[r].displaySettings) || void 0 === i ? void 0 : i.position : s.b.Right
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
						i = a(e, {
							subredditId: r
						});
					if (!n || !s || !i) return !1;
					if (i.applied) return !0;
					const o = Object(d.g)(e, {
							subredditId: r
						}),
						{
							canUserChange: c
						} = s.permissions;
					return !!(i.templateIds || []).find(e => {
						return !i.templates[e].modOnly || o
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
						s = Object(i.m)(e, {
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
				i = r("./src/reddit/helpers/name/index.ts"),
				d = r("./src/reddit/helpers/widgets/index.tsx"),
				o = r("./src/reddit/selectors/profile.ts"),
				c = r("./src/reddit/selectors/subreddit.ts");
			const a = [],
				u = e => e.widgets.models,
				l = Object(n.a)((e, t) => Object(d.l)(t) ? e.widgets.models[t.widgetId] : Object(d.f)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				p = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(c.G)(e, t.subredditName)), r) {
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
				g = (e, t) => {
					const r = e.widgets.sidebar[t.subredditId];
					return Array.isArray(r) ? r.reduce((t, r) => {
						const n = e.widgets.models[r];
						return n && t.push(n.kind), t
					}, []) : a
				},
				j = (e, t) => {
					const r = m(e, t);
					for (const n of r) {
						const t = e.widgets.models[n];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				_ = (e, t) => {
					const r = m(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
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
								name: Object(i.h)(r.name)
							}
						} : {}
					}
					const r = Object(c.A)(e, {
							subredditName: t.name
						}),
						n = Object(c.x)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: n ? n.contentCategory : null,
							id: r.id,
							name: Object(i.h)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"2e5447bbcb44"}')
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
			e.exports = JSON.parse('{"id":"c0803cea4c3b"}')
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
			e.exports = JSON.parse('{"id":"6fb41bc9fbd1"}')
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
		"./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"cbcafcbff9c6"}')
		},
		"./src/redditGQL/operations/GetCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"cc00831bbe1f"}')
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
			e.exports = JSON.parse('{"id":"a99a0e0e5530"}')
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
			e.exports = JSON.parse('{"id":"0cfeaf91e099"}')
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
		"./src/redditGQL/operations/SubredditAchievementFlairs.json": function(e) {
			e.exports = JSON.parse('{"id":"87dbc93cba65"}')
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
			e.exports = JSON.parse('{"id":"544c7925238a"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"af5fc55e2bd5"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"bfe51136e3b7"}')
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
			e.exports = JSON.parse('{"id":"60beda930518"}')
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
			e.exports = JSON.parse('{"id":"5e970e4f291b"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.da90493429932a990e2f.js.map