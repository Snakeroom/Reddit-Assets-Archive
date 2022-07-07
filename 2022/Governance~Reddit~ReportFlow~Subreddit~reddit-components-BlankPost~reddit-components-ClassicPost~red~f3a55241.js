// https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.35609b66aaf75719e092.js
// Retrieved at 7/7/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"], {
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
				} = Object(i.c)(e), a = r || (Object(o.i)(e) || s.DEFAULT_LOCALE), u = Object(n.isPseudoLocale)(a) ? s.DEFAULT_LOCALE : a;
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
			})), r.d(t, "n", (function() {
				return R
			})), r.d(t, "f", (function() {
				return D
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
				return H
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
				_ = r("./src/reddit/helpers/commentList/index.ts"),
				j = r("./src/reddit/helpers/trackers/comment.ts"),
				g = r("./src/reddit/models/Comment/index.ts"),
				I = r("./src/reddit/models/Post/index.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/models/Vote/index.ts"),
				S = r("./src/reddit/selectors/comments.ts"),
				y = r("./src/reddit/selectors/commentSelector.ts"),
				E = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				v = r("./src/reddit/selectors/moderatingComments.ts"),
				x = r("./src/reddit/selectors/moderatorPermissions.ts"),
				A = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/comment/constants.ts");
			const C = {},
				k = Object(i.a)(N.q),
				R = e => async (t, r, n) => {
					let {
						apiContext: d
					} = n;
					if (!Object(A.Q)(r())) return t(Object(a.j)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(S.m)(r(), {
							commentId: e
						})
					}));
					const i = r().features.comments.models[e];
					if (!i) return;
					const o = i.isSaved ? O.n : O.j;
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
						t(Object(m.f)({
							text: r,
							kind: h.b.Undo,
							buttonText: n,
							buttonAction: R(e)
						}))
					} else t(k({
						[e]: {
							isSaved: i.isSaved
						}
					}))
				}, w = e => `viewing-comment-${e}`, L = n.a.telemetry.commentConsumedThreshold, D = e => async (t, r) => {
					const s = r(),
						i = Object(y.b)(s, {
							commentId: e
						});
					if (!i || Math.random() > n.a.telemetry.commentSampleRate) return;
					j.c({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), d.c.start(w(e));
					const o = setTimeout(() => j.a({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), L);
					C[e] = o
				}, P = (e, t) => async (r, n) => {
					const s = n(),
						i = w(e);
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
					const j = Object(I.u)(f);
					r(U({
						moreCommentsId: a.id
					}));
					const g = await Object(O.g)(d(), j, {
						token: a.token
					}, Object(E.a)(i));
					if (g.ok) {
						const t = g.body,
							s = Object(_.a)(t, j, i);
						r(G({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const d = i.posts.models[j];
						let u;
						d && "subreddit" === d.belongsTo.type && t.comments && (u = d.belongsTo.id, await r(Object(o.a)({
							commentIds: Object.keys(g.body.comments),
							postIds: [d.id],
							skip: ["communityDetails", "subscription"],
							subredditId: u
						})), Object(x.i)(i, u) && r(Object(p.c)(j, !0, a.token)));
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
				}, q = Object(f.a)(_.b, T.a.upvoted), B = Object(f.a)(_.b, T.a.downvoted), Q = Object(i.a)(N.l), H = Object(i.a)(N.k), J = Object(i.a)(N.g), z = Object(i.a)(N.h), K = (Object(i.a)(N.c), Object(i.a)(N.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const d = s(),
							i = Object(g.i)(t),
							o = Object(S.n)(d, {
								commentLink: i,
								commentsPageKey: r
							}),
							c = Object(v.b)(d, {
								commentId: t,
								commentsPageKey: r
							}),
							a = o.depth;
						e(J({
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
							o = Object(_.e)(r, t, n, i),
							c = Object(v.b)(i, {
								commentId: t.id,
								commentsPageKey: r
							});
						e(J({
							commentId: o,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === n && s(o, !0), Object(b.d)()
					}
				}, W = Object(i.a)(N.t), Y = e => t => t(W({
					draftKey: e
				})), X = Object(i.a)(N.a), Z = Object(i.a)(N.G), ee = Object(i.a)(N.b), te = Object(i.a)(N.w), re = Object(i.a)(N.e)
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
				_ = r("./src/redditGQL/operations/UpdatePostRequirements.json"),
				j = r("./src/reddit/endpoints/subreddit/about.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/contentControls.ts"),
				h = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				T = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/actions/contentControls/constants.ts");
			const y = Object(o.a)(S.b),
				E = Object(o.a)(S.c),
				v = Object(o.a)(S.a),
				x = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = {
						subredditName: e.toLowerCase()
					};
					if (Object(I.a)(r(), d)) return;
					t(E(d));
					let o = Object(T.F)(r(), e);
					if (!o) {
						const r = await Object(j.a)(s(), e, !1);
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
				}, A = Object(o.a)(S.d), N = (e, t) => async (r, s, d) => {
					let {
						gqlContext: i
					} = d;
					const o = e.toLowerCase(),
						c = Object(T.F)(s(), e);
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
								..._,
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
				return pe
			})), r.d(t, "t", (function() {
				return me
			})), r.d(t, "f", (function() {
				return fe
			})), r.d(t, "c", (function() {
				return Oe
			})), r.d(t, "d", (function() {
				return _e
			})), r.d(t, "h", (function() {
				return je
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
					["image/png", m.i.Png],
					["image/gif", m.i.Gif],
					["image/jpeg", m.i.Jpeg]
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
					}), _ = function(e) {
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
					}(O), j = await Object(a.a)(t, _);
					if (!Object(c.c)(j)) throw new Error("Failed to upload file to S3");
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
			var _ = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/lib/delay/index.ts"),
				I = r("./src/lib/makeActionCreator/index.ts"),
				h = r("./src/reddit/endpoints/economics/predictions.ts");

			function T(e) {
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
				k = r("./src/reddit/selectors/user.ts"),
				R = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				w = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				L = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: o.a
				}
			});
			const D = Object(I.a)(L.d),
				P = Object(I.a)(L.c),
				U = Object(I.a)(L.e),
				G = Object(I.a)(L.f),
				F = Object(I.a)(L.i),
				M = Object(I.a)(L.h),
				q = Object(I.a)(L.j),
				B = Object(I.a)(L.q),
				Q = Object(I.a)(L.t),
				H = Object(I.a)(L.p),
				J = Object(I.a)(L.b),
				z = (e, t, r) => async (n, s, d) => {
					let {
						gqlContext: i
					} = d;
					const o = Object(k.Q)(s());
					if (!Object(N.c)(s(), {
							subredditId: e
						})) {
						n(D({
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
							}), c = T(d);
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
									leaderboard: T(r)
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
					const i = Object(k.Q)(n());
					if (!Object(N.g)(n(), {
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
							}), s = T(n);
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
				}, W = Object(I.a)(L.k), Y = Object(I.a)(L.m), X = Object(I.a)(L.l), Z = Object(I.a)(L.o), ee = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const d = r(),
						i = Object(C.F)(d, e);
					if (Object(w.k)(d, {
							subredditId: i
						})) return Object(w.g)(d, {
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
								e && (c[e.id] = Object(y.f)(e))
							}), e.winners) {
							const r = T(e.winners);
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
						o = await Object(h.l)(s(), {
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
						a = Object(R.b)(c);
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
					const l = await Object(h.e)(o(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: m.A.Tokens,
							tokenIcon: u
						}),
						b = Object(E.a)(l);
					s(ce(b))
				}, oe = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = Object(R.b)(n());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(h.a)(i(), {
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
					const i = await Object(h.o)(d(), {
							tournamentId: e,
							name: r
						}),
						o = Object(E.a)(i);
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
					Object(k.Q)(n) ? await t(Object(x.h)(A.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(v.i)())
				}, fe = () => Object(x.g)(A.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Oe = e => async (t, r, s) => {
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
						const s = Object(_.e)(n.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), j.b.SuccessMod);
						t(Object(_.f)(s))
					} catch {
						const e = Object(_.e)(n.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), j.b.Error);
						t(Object(_.f)(e))
					}
				};

			function _e(e, t) {
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
				return T
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "o", (function() {
				return R
			})), r.d(t, "p", (function() {
				return w
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "c", (function() {
				return D
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
				_ = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts");
			const I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				h = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				T = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				S = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				E = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				v = Object(s.a)(I),
				x = Object(s.a)(h),
				A = Object(s.a)(T),
				N = Object(s.a)(S),
				C = Object(s.a)(y),
				k = Object(s.a)(E),
				R = e => async (t, r, n) => {
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
				}, w = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						d = Object(_.d)(s);
					if (!d) return;
					const i = s.externalAccount.api.subreddit.fetched[d],
						o = s.externalAccount.api.subreddit.pending[d];
					if (i || o) return;
					const m = Object(j.w)(s, {
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
					} else e(k(f.error))
				}, L = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", D = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", P = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(s.a)(L), G = Object(s.a)(D), F = Object(s.a)(P), M = e => async (t, r, n) => {
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
				}, q = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", H = Object(s.a)(q), J = Object(s.a)(B), z = Object(s.a)(Q), K = e => async (t, r, s) => {
					let {
						apiContext: p
					} = s;
					t(H({
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
						t(J({
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
			r.d(t, "m", (function() {
				return g
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "k", (function() {
				return N
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "i", (function() {
				return q
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "e", (function() {
				return J
			})), r.d(t, "f", (function() {
				return z
			})), r.d(t, "d", (function() {
				return K
			})), r.d(t, "l", (function() {
				return $
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
				_ = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				j = r("./src/reddit/actions/gold/constants.ts");
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
						if (r.errors && r.errors.length) return void(await t(S(o)));
						if (!r.data.identity) return void(await t(T(o)));
						await t(h({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (c) {
					d.c.captureException(c), await t(S(o))
				}
			}, I = Object(s.a)(j.zb), h = Object(s.a)(j.yb), T = Object(s.a)(j.xb), S = e => async (t, r) => {
				await t(T(e)), t(Object(a.f)({
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
			}, E = Object(s.a)(j.fb), v = Object(s.a)(j.eb), x = Object(s.a)(j.db), A = e => async (t, r) => {
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
					r(R());
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
								k(r, e, n)
							} else {
								const {
									powerups: t = null,
									powerupsSettings: n = null
								} = s.data.subredditInfoById || {};
								await r(w({
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
			}, k = (e, t, r) => e(L({
				subredditId: t,
				...r
			})), R = Object(s.a)(j.pb), w = Object(s.a)(j.ob), L = Object(s.a)(j.nb), D = Object(s.a)(j.mb), P = e => async (t, r) => {
				await t(D(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, U = Object(s.a)(j.S), G = Object(s.a)(j.T), F = Object(s.a)(j.U), M = e => async (t, r) => {
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
						j = null;
					if (p.ok) {
						const e = p.body;
						O = e.data.reallocatePowerups.ok, j = e.data.reallocatePowerups.errors
					}
					const I = Object(f.k)(o());
					if (O && I) await i((e => async (t, r) => {
						t(F(e)), await t(N(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(g(!0)), t(Object(_.a)(e.subredditId, !0)), e.powerupsCount && (t(Object(c.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(c.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(a.f)({
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
						const e = j && j[0] && j[0].message || n.fbt._("An unknown error occurred", null, {
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
			}, B = Object(s.a)(j.E), Q = Object(s.a)(j.Q), H = e => Object(c.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), J = (e, t) => async (r, n) => {
				const s = n();
				return Object(f.k)(s) ? (Object(i.a)(Object(O.f)(e)(s)), r(Object(c.h)(u.a.ECON_POWERUPS_MARKETING, {
					subredditId: t
				}))) : r(Object(o.i)())
			}, z = e => async t => t(Object(c.h)(u.a.ECON_POWERUPS_PREMIUM_UPSELL, {
				subredditId: e
			})), K = () => async (e, t) => {
				const r = t();
				return Object(f.k)(r) ? e(Object(c.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(o.i)())
			}, V = Object(s.a)(j.M), $ = (e, t) => async (r, n, s) => {
				let {
					gqlContext: d
				} = s;
				const i = await Object(l.i)(d(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (i.ok) {
					const t = i.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(V({
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
				return T
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return k
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
				_ = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/actions/grantUserFlair/constants.ts");
			const g = Object(s.a)(j.i),
				I = Object(s.a)(j.g),
				h = Object(s.a)(j.f),
				T = (e, t) => async (r, s, i) => {
					let {
						gqlContext: c
					} = i;
					const u = t && t.after || "",
						l = t && t.before || "",
						b = Object(_.F)(s(), e),
						O = Object(m.e)(b, u, l);
					if (!!s().pages.modHub.flairedUsers.userOrder[O]) return;
					r(g());
					const j = await ((e, t, r) => Object(d.a)(e, {
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
				}, S = Object(s.a)(j.l), y = Object(s.a)(j.k), E = Object(s.a)(j.j), v = (e, t) => async (r, s, o) => {
					let {
						gqlContext: c
					} = o;
					const u = Object(_.U)(s(), {
						subredditId: e
					}).name;
					r(S());
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
				}, x = Object(s.a)(j.e), A = Object(s.a)(j.c), N = Object(s.a)(j.d), C = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					const o = s(),
						u = Object(_.U)(o, {
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
				}, k = Object(s.a)(j.h), R = Object(s.a)(j.b), w = Object(s.a)(j.a), L = (e, t, r) => async (s, d, i) => {
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
						j = Object(_.U)(l, {
							subredditId: t
						}),
						g = r && Object(u.g)(r),
						I = r ? r.cssClass : void 0,
						h = await Object(c.g)(o(), e, j.name, m, g, I);
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
							s(w(t))
						}
						e === (l.user.account && Object(O.e)(l.user.account)) ? s(k(p)) : b || s(R(p))
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
				return _
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return T
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
				}, _ = "META__SET_POPULAR_GEO_FILTER", j = Object(d.a)(_), g = "META__PWA_ENTERED", I = "META__PWA_LEFT", h = Object(d.a)(g), T = Object(d.a)(I)
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
					e(Object(s.c)({
						type: c.d.REONBOARDING,
						selectedInterests: {}
					})), Object(o.d)();
					const t = Object(a.c)(r);
					Object(i.b)(c.f.FirstPopover, t)
				}
			}, b = Object(n.a)(d.a), p = Object(n.a)(d.c), m = Object(n.a)(d.b);
			t.default = () => async (e, t) => {
				const r = t();
				Object(u.d)(r) && e(Object(s.c)())
			}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return L
			})), r.d(t, "PAGE_LOADED", (function() {
				return D
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
				_ = r("./src/reddit/actions/subreddit.ts"),
				j = r("./src/reddit/actions/subredditDuplicates.ts"),
				g = r("./src/config.ts"),
				I = r("./src/lib/constants/index.ts"),
				h = r("./src/lib/makeApiRequest/index.ts"),
				T = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				y = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				E = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/contentControls.ts"),
				x = r("./src/reddit/selectors/postCollection.ts"),
				A = r("./src/reddit/selectors/postCreations.ts"),
				N = r("./src/reddit/selectors/posts.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				R = r("./src/reddit/selectors/user.ts");
			const w = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, s = Object(k.z)(e, {
							subredditName: n
						});
						s && (r = s.name)
					}
					return Object(c.m)(r)
				},
				L = "POST_CREATION__PAGE_PENDING",
				D = "POST_CREATION__PAGE_LOADED",
				P = "POST_CREATION__PAGE_FAILED",
				U = Object(i.a)(L),
				G = Object(i.a)(D),
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
					} = e, u = Object(o.a)(e), p = r(), m = p.creations.api.page.pending[u], f = p.creations.api.page.fetched[u], j = p.creations.api.page.error[u];
					if (m) return;
					if (f && !j) return void t(M());
					const S = [];
					t(U({
						key: u
					}));
					let x = c;
					!c && i && (x = `u_${i}`), S.push(((e, t) => Object(h.a)(e, {
						method: I.jb.GET,
						endpoint: Object(T.a)(`${g.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: x,
						collectionId: s
					})), i && (S.push(t(O.d(i))), S.push(t(O.b(i))));
					const [A] = await Object(y.a)("postCreation", () => Promise.all(S));
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
							})), !Object(R.Q)(r())) return;
						if (s) {
							const e = Object.keys(s)[0];
							await t(Object(b.k)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(M());
						const i = [];
						i.push(t(l.o()));
						const o = Object(R.k)(r());
						if (o && o.hasUserProfile && i.push(t(O.d(Object(E.e)(o)))), c && !Object(d.a)(c)) {
							i.push(t(_.o(c))), !!Object(v.b)(r(), {
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
						})), !Object(R.Q)(r())) return void Object(S.a)(t, r());
					let a;
					if (d ? (a = Object(k.z)(r(), {
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
						s ? o = Object(k.F)(n(), s) : d && (o = Object(R.mb)(n(), {
							userName: d
						})), o && i.push(r(Object(j.b)(o, t))), i.push(r(Object(m.R)(t))), await Promise.all(i);
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
						title: w(r())
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
				return _
			})), r.d(t, "pageFailed", (function() {
				return j
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
				_ = Object(n.a)(m),
				j = Object(n.a)(f),
				g = e => async (t, r, n) => {
					const {
						draftId: p,
						profileName: m
					} = e, f = Object(s.a)(e), O = r(), g = O.creations.api.page.pending[f], I = O.creations.api.page.fetched[f], h = O.creations.api.page.error[f];
					if (g || I && !h || !p) return;
					t(d.d(m));
					const T = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: o.jb.GET
					}))(n.apiContext(), p, m));
					if (T.ok) {
						const e = T.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(_({
							...e,
							key: f
						}))
					} else t(j({
						error: T.error,
						key: f
					}))
				}, I = e => async (t, r, n) => {
					await t(g(e.params))
				}
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isGQLSubredditPageExtra", (function() {
				return Ze
			})), r.d(t, "handleSubredditPageApiError", (function() {
				return et
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return tt
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return rt
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return nt
			})), r.d(t, "subredditPending", (function() {
				return st
			})), r.d(t, "subredditLoaded", (function() {
				return dt
			})), r.d(t, "subredditFailed", (function() {
				return it
			})), r.d(t, "subredditDataRequested", (function() {
				return ot
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return ct
			})), r.d(t, "makeSubredditPageKey", (function() {
				return ut
			})), r.d(t, "subredditRequested", (function() {
				return lt
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return bt
			})), r.d(t, "subredditInvalidateListing", (function() {
				return pt
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
				p = r("./src/lib/isFakeSubreddit/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/makeListingKey/index.ts"),
				O = r("./src/lib/makeSearchKey/index.ts"),
				_ = r("./src/lib/pageTitle/index.ts"),
				j = r("./src/lib/pageTitle/helpers.ts"),
				g = r("./src/lib/performanceTimings/index.tsx"),
				I = r("./src/lib/safeGet/index.ts"),
				h = r("./src/reddit/actions/ads/index.ts"),
				T = r("./src/reddit/actions/communityFlairs/index.ts"),
				S = r("./src/reddit/actions/contentGate.ts"),
				y = r("./src/reddit/actions/discoveryUnit.ts"),
				E = r("./src/reddit/actions/economics/helpers/async.ts"),
				v = r("./src/reddit/actions/economics/predictions/index.ts"),
				x = r("./src/reddit/actions/externalAccount.ts"),
				A = r("./src/reddit/actions/gold/powerups.ts"),
				N = r("./src/reddit/actions/grantUserFlair/index.ts"),
				C = r("./src/reddit/actions/meta.ts"),
				k = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				R = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				w = r("./src/reddit/actions/onboarding/index.ts"),
				L = r("./src/reddit/actions/pages/search/index.ts"),
				D = r("./src/reddit/actions/platform.ts"),
				P = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				U = r("./src/reddit/actions/seo/linksModule.ts"),
				G = r("./src/reddit/actions/seo/topicLinks.ts"),
				F = r("./src/lib/makeGqlRequest/index.ts"),
				M = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				q = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				B = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				Q = r("./src/reddit/selectors/widgets.ts");
			const H = (e, t) => async (r, n) => {
				const s = n(),
					d = Object(B.U)(s, {
						subredditId: e
					}),
					i = Object(Q.j)(s, {
						subredditId: e
					});
				d.isNSFW || (null == i ? void 0 : i.length) > 0 && i.some(e => "community-list" === e) || r(Object(U.e)({
					id: e,
					data: t
				}))
			}, J = (e, t) => async r => {
				t && r(Object(G.b)({
					id: e,
					data: t
				}))
			};
			var z = r("./src/reddit/actions/structuredStyles/index.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
				V = r("./src/reddit/actions/toaster.ts"),
				$ = r("./src/reddit/helpers/localStorage/index.ts"),
				W = r("./src/reddit/models/Subreddit/index.ts"),
				Y = r("./src/reddit/models/Toast/index.ts"),
				X = r("./src/reddit/routes/postCreation/constants.ts"),
				Z = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ee = r("./src/reddit/selectors/platform.ts"),
				te = r("./src/reddit/selectors/user.ts");
			const re = () => async (e, t, r) => {
				const n = t(),
					s = Object(ee.e)(n);
				if (!s || s.type !== W.g.Public) return;
				const d = s.name,
					i = Object(ee.m)(n),
					o = Object(B.w)(n, {
						subredditName: d
					});
				if (!o) return;
				const {
					activity7Day: c
				} = o, u = !!c && c >= 51 && c <= 100, l = !d || Object(p.a)(d), b = i && i.urlParams.subredditName === d, m = Object(te.Q)(n), f = Object(Z.c)(n, {
					subredditId: Object(B.F)(n, d)
				});
				if (l || b || Object($.D)() || !u || !m || f) return;
				const O = Object(Q.d)(t(), {
					subredditName: d
				});
				if (!O || !O.currentlyViewingCount) return;
				const _ = (24 * O.currentlyViewingCount * 7).toString(),
					j = _[0].padEnd(_.length, "0");
				e(Object(V.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${d}${X.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: Y.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object($.Fb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${d} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var ne = r("./src/reddit/actions/subreddit/questions.ts"),
				se = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				de = r("./src/reddit/actions/subredditSettings.ts"),
				ie = r("./src/reddit/actions/tags/index.ts"),
				oe = r("./src/reddit/actions/userFlair/userFlair.ts"),
				ce = r("./src/reddit/constants/history.ts"),
				ae = r("./src/reddit/constants/page.ts"),
				ue = r("./src/reddit/constants/parameters.ts"),
				le = r("./src/reddit/constants/postLayout.ts"),
				be = r("./src/reddit/contexts/PageLayer/index.tsx"),
				pe = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				me = r("./src/reddit/endpoints/governance/posts.ts"),
				fe = r("./src/reddit/endpoints/page/subredditPage.ts"),
				Oe = r("./src/lib/base64/index.ts"),
				_e = r("./src/reddit/constants/experiments.ts"),
				je = r("./src/reddit/constants/graphql.ts"),
				ge = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				Ie = r("./src/reddit/selectors/experiments/onboarding.ts"),
				he = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var Te = r("./src/reddit/endpoints/profile/info.ts"),
				Se = r("./src/reddit/helpers/canonicalUrls.ts"),
				ye = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				Ee = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				ve = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function xe(e) {
				let {
					econLeaderboards: t,
					identity: r,
					trendingSubreddits: n
				} = e;
				const s = t.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(ve.b)(s, n, r)
			}
			var Ae = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Ne = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				Ce = r("./src/reddit/helpers/post/index.ts"),
				ke = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				Re = r("./src/reddit/helpers/trackers/feed.ts"),
				we = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Le = r("./src/reddit/models/RichTextJson/index.ts"),
				De = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Pe = r("./src/reddit/selectors/communityFlairs.ts"),
				Ue = r("./src/reddit/selectors/experiments/countrySites.ts"),
				Ge = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts"),
				Fe = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Me = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				qe = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Be = r("./src/reddit/selectors/gold/powerups/index.ts"),
				Qe = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				He = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Je = r("./src/reddit/selectors/multireddit.ts"),
				ze = r("./src/reddit/selectors/posts.ts"),
				Ke = r("./src/lib/initializeClient/installReducer.ts"),
				Ve = r("./src/reddit/reducers/features/modUserNotes/index.ts"),
				$e = r("./node_modules/uuid/v4.js"),
				We = r.n($e),
				Ye = r("./src/reddit/helpers/locales.ts"),
				Xe = r("./src/reddit/selectors/meta.ts");

			function Ze(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object(Ke.a)({
				features: {
					modUserNotes: Ve.a
				}
			});
			const et = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: n,
							reason: s
						}
					} = e, d = n ? n.account : void 0, i = n && n.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (s === W.f.NotFoundSubreddit) r(S.r({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (s === W.f.BannedSubreddit) {
						const e = n ? n.banMessage || n.ban_message : void 0;
						r(S.p({
							banMessage: e,
							account: d,
							features: i,
							subredditName: o
						}))
					}
					if (451 === e.status && r(S.q({
							account: d,
							features: i,
							subredditName: o
						})), 403 === e.status)
						if (s === W.f.GoldSubreddit) r(S.u({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (s === W.f.PrivateSubreddit) r(S.v({
						account: d,
						features: i,
						subredditDescription: n.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!n.isContributorRequestsDisabled,
						isContributorRequestTimestamp: n.isContributorRequestTimestamp ? parseInt(n.isContributorRequestTimestamp, 10) : void 0,
						subredditId: n.id
					}));
					else if (s === W.f.QuarantinedSubreddit) {
						const e = !n || void 0 === n.quarantineRequiresEmailOptin || n.quarantineRequiresEmailOptin;
						r(S.x({
							account: d,
							features: i,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: n.quarantineMessage,
							quarantineMessageHtml: n.quarantineMessageHtml || "",
							quarantineMessageRTJson: n.quarantineMessageRTJson || Le.i
						}))
					} else if (s === W.f.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						} = n;
						r(S.t({
							account: d,
							features: i,
							subredditName: o,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						}))
					}
				}
			}, tt = "PAGE__SUBREDDIT_PENDING", rt = "PAGE__SUBREDDIT_LOADED", nt = "PAGE__SUBREDDIT_FAILED", st = Object(m.a)(tt), dt = Object(m.a)(rt), it = Object(m.a)(nt), ot = (e, t, r, d) => async (o, c, a) => {
				var l, b, m, f, O, _, j, S, y, R, L, P, U, G, Q, z, $, W, X, Z, re, ae;
				const ue = c(),
					Se = Object(te.P)(ue) || Object(te.Q)(ue);
				if (Object(I.a)(ue.listings.postOrder.api.pending, e)) return;
				const ye = null === (b = null === (l = Object(ee.b)(ue)) || void 0 === l ? void 0 : l.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					{
						currentPage: Ee
					} = ue.platform,
					{
						countryCode: ve,
						languageCode: we
					} = (null == Ee ? void 0 : Ee.urlParams) || {},
					Le = Object(p.a)(t, {
						countryCode: ve,
						languageCode: we
					}),
					Pe = Object(p.c)(t, {
						countryCode: ve,
						languageCode: we
					}),
					Me = (Object(p.b)(t, {
						countryCode: ve,
						languageCode: we
					}) || Pe) && ue.posts.recent.length ? {
						...r,
						recentPostIds: ue.posts.recent
					} : r;
				Me.layout = le.e[Object(be.S)(ue, {})], Pe && (Me.forceGeopopular = !0), o(st({
					key: e
				}));
				const qe = !Le && Object(ee.l)(ue) && Object(Fe.b)(ue);
				let He;
				if (r.sort === u.W.AWARDED && Pe) He = Object(pe.a)(a.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: xe(t.data)
					}
				});
				else {
					const e = qe ? () => Object(fe.b)(a.gqlContext(), Object(fe.c)(ue, t, Me, !0), Se) : () => Object(fe.a)(a.apiContext(), t, Me);
					He = Object(g.i)(e, {
						name: qe ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: ye,
						isLoggedIn: Se
					})
				}
				const Je = Object(B.T)(c(), {
						subredditId: Object(B.F)(c(), t)
					}).length > 0,
					ze = Object(g.i)(() => (async function(e, t) {
						return Object(F.a)(e, {
							...he,
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
						const m = Object(Ie.c)(e),
							f = !!m && !Object(_e.ag)(m) && (d || m === _e.tb.Community),
							O = {
								subredditName: s,
								isFake: d,
								sort: u,
								adContext: {
									layout: o ? o.toUpperCase() : je.a.Card,
									reddaid: e.user.reddaid
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
						return u && (O.sort = u.toUpperCase()), l && (O.range = l.toUpperCase()), n ? O.pageSize = Object(ge.a)(o) : c && (O.pageSize = c), r && (O.after = Object(Oe.a)(r)), O
					})(ue, {
						after: r.after,
						isLoggedIn: Se,
						subredditName: t,
						hasRules: Je,
						isFake: Le,
						isMobile: r.isMobile,
						layout: r.layout,
						limit: r.limit,
						sort: r.sort,
						t: r.t
					})), {
						name: "fetchSubredditPageExtra",
						page: ye,
						isLoggedIn: Se
					}),
					Ke = We()();
				let Ve, $e;
				qe ? Ve = await He : [Ve, $e] = await Promise.all([He, ze]);
				const tt = $e && Object(s.c)($e) ? $e.body.data : null,
					rt = Ve.body,
					nt = (null == rt ? void 0 : rt.subreddits) ? ((e, t) => {
						var r;
						return null === (r = i()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(rt.subreddits, t) : null;
				rt && !qe && await Object(Ce.a)(a.gqlContext, rt.posts).then(e => rt.posts = e), o(D.n(Ve.status));
				const ct = `error-${e}`,
					at = Le || nt;
				if (Ve.ok && at) {
					if (!Le && nt) {
						let e;
						e = qe ? rt.powerups : Object(A.c)(null == tt ? void 0 : tt.subredditInfoByName, null == tt ? void 0 : tt.identity);
						const t = (null === (f = null === (m = null == rt ? void 0 : rt.subredditAboutInfo) || void 0 === m ? void 0 : m[nt]) || void 0 === f ? void 0 : f.detectedLanguage) || (null === (O = null == tt ? void 0 : tt.subredditInfoByName) || void 0 === O ? void 0 : O.detectedLanguage);
						Object(Xe.d)(ue) && t && Object(Ue.f)(ue) && await Object(Ye.a)(t, o), rt.subredditAboutInfo[nt].detectedLanguage = t, Object(A.a)(o, nt, e), qe ? o(Object(v.n)(nt, rt.predictionTournaments || [])) : (null == tt ? void 0 : tt.subredditInfoByName) && o(Object(v.n)(nt, tt.subredditInfoByName.predictionTournaments || [])), Object(Be.f)(c(), {
							subredditId: nt
						}) && Object(Ge.a)(c())
					}
					let n;
					rt.geoFilter && o(Object(C.k)(rt.geoFilter));
					const s = rt.postIds.filter(e => !!rt.posts[e].isMeta);
					if (s.length && nt) {
						const e = Object(g.i)(() => Object(me.a)(a.apiContext(), nt, s), {
								name: "getGovernanceData",
								page: ye,
								isLoggedIn: Se
							}),
							t = await e;
						t.ok && (n = t.body)
					}
					if (nt) {
						const e = (null === (j = null === (_ = null == rt ? void 0 : rt.subredditAboutInfo) || void 0 === _ ? void 0 : _[nt]) || void 0 === j ? void 0 : j.isEligibleForContentBlocking) || (null === (S = null == tt ? void 0 : tt.subredditInfoByName) || void 0 === S ? void 0 : S.isEligibleForContentBlocking);
						rt.subredditAboutInfo[nt].isEligibleForContentBlocking = e
					}
					if (tt) {
						const e = null === (R = null === (y = tt.identity) || void 0 === y ? void 0 : y.redditor) || void 0 === R ? void 0 : R.karma,
							t = {
								karma: {
									...(null === (L = ue.user.account) || void 0 === L ? void 0 : L.karma) || Te.a,
									...e
								}
							};
						rt.account && Object.assign(rt.account, t)
					}
					if (nt) {
						let e;
						qe ? e = null === (P = rt.subredditAboutInfo[nt]) || void 0 === P ? void 0 : P.notificationLevel : Ze(tt) && (e = null === (U = tt.subredditInfoByName) || void 0 === U ? void 0 : U.notificationLevel), rt.subredditAboutInfo[nt].notificationLevel = e
					}
					const i = null === (G = rt.subredditPermissions) || void 0 === G ? void 0 : G.posts;
					!qe && i && o(Object(k.a)({
						postIds: rt.postIds
					}));
					let u = null == rt ? void 0 : rt.interestTopicRecommendations;
					if (!u && (null == tt ? void 0 : tt.interestTopics)) {
						const e = Object(Ae.a)(tt.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && o(Object(w.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), o(dt({
						key: e,
						meta: ue.meta,
						governance: n,
						correlationId: Ke,
						...rt,
						postIds: rt.postIds
					}));
					const l = null === (z = null === (Q = Object(ee.b)(ue)) || void 0 === Q ? void 0 : Q.locationState) || void 0 === z ? void 0 : z[ce.b.FeedLoadReason];
					if (Object(Re.b)(r.isRefresh ? ce.a.UserRefresh : null != l ? l : ce.a.InitialLoad)(c()), !Le) {
						const e = Object(B.F)(c(), t);
						qe && rt.subredditRules ? o(K.t({
							rules: {
								rules: rt.subredditRules
							},
							subredditId: e
						})) : (null === ($ = null == tt ? void 0 : tt.subreddit) || void 0 === $ ? void 0 : $.rules) && o(K.t({
							rules: Object(Ne.a)(tt.subreddit.rules),
							subredditId: e
						}));
						const r = Object(T.c)(rt.posts, e),
							n = Object(T.b)(rt.structuredStyles),
							s = (n ? Object(T.d)(n) : []).concat(r);
						o(Object(T.a)(s, e))
					}
					if (d && o(V.g(ct)), o(Object(h.b)(De.a.SUBREDDIT)), o(Object(x.p)()), nt) {
						let e, r, n;
						if (qe ? (e = rt.questions, r = rt.subredditLinks, n = rt.subredditTopicLinks) : (e = null == tt ? void 0 : tt.subredditInfoByName, r = Object(M.a)({
								data: {
									subredditInfoById: null == tt ? void 0 : tt.subredditInfoByName
								}
							}), n = Object(q.a)({
								data: {
									subredditInfoById: null == tt ? void 0 : tt.subredditInfoByName
								}
							})), Object(ne.a)(o, nt, e), o(H(nt, r)), o(J(nt, n)), !qe && (null === (X = null === (W = null == tt ? void 0 : tt.subredditInfoByName) || void 0 === W ? void 0 : W.elements) || void 0 === X ? void 0 : X.edges)) {
							const e = (null === (re = null === (Z = null == tt ? void 0 : tt.subredditInfoByName) || void 0 === Z ? void 0 : Z.elements) || void 0 === re ? void 0 : re.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							o(Object(se.e)({
								subredditId: nt,
								nodes: e
							}))
						} else if (qe && (null == rt ? void 0 : rt.postIds)) {
							const e = rt.postIds.map(e => null == rt ? void 0 : rt.posts[e].lastAuthorModNote);
							e && o(Object(se.e)({
								subredditId: nt,
								nodes: e
							}))
						}
						if (qe && rt.appliedFlair) {
							const e = rt.appliedFlair;
							if ((null === (ae = ue.user.account) || void 0 === ae ? void 0 : ae.displayName) && e.flair && (o(Object(N.b)({
									subredditId: nt,
									applied: e.flair,
									userName: ue.user.account.displayName
								})), o(Object(oe.userFlairSaveTemplateSuccess)({
									subredditId: nt,
									template: e.flair
								}))), e.displaySettings) {
								const t = e.displaySettings;
								o(Object(oe.userFlairAllowAssignOwnSettingSuccess)({
									subredditId: nt,
									canAssignOwn: t.isSelfAssignable
								})), o(Object(oe.userFlairMutated)({
									subredditId: nt,
									displaySettings: t
								}))
							}
						}
						const s = [Object(g.i)(() => o(Object(E.a)({
							subredditId: nt,
							postIds: rt.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: ye,
							isLoggedIn: Se
						})];
						if (Object(Qe.a)(c(), {
								subredditId: nt
							})) {
							const e = Object(g.i)(() => o(Object(de.h)(t, nt)), {
									name: "subredditSettingsRequested",
									isLoggedIn: Se,
									page: ye
								}),
								r = Object(g.i)(() => o(Object(ie.g)(nt, ke.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: Se,
									page: ye
								});
							s.push(e, r)
						}
						await Promise.all(s)
					}
				} else {
					const s = Ve.ok ? void 0 : Ve.error;
					if (Object(Re.a)(s ? `${Ve.status||"000"}: ${s.type}` : "000: UNKNOWN_ERROR")(c()), 403 === Ve.status || 404 === Ve.status || 451 === Ve.status) return void o(et(Ve, t));
					o(it({
						error: !Ve.ok && Ve.error || {
							type: u.I.NOT_FOUND_ERROR
						},
						key: e,
						...rt
					})), d && o(V.f({
						id: ct,
						kind: Y.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: ot(e, t, r, d)
					}))
				}
			}, ct = (e, t, r) => async (n, s) => {
				const d = s(),
					i = Object(f.a)(e, t.sort, t);
				Object(ze.z)(d, {
					listingKey: i
				}).length > 0 || await n(ot(i, e, t, r))
			}, at = (e, t, r, n) => {
				const s = Object(Ue.b)(e);
				if (Object(p.a)(t, {
						countryCode: r,
						languageCode: n
					})) {
					if (Object(b.a)(t)) {
						return Object(Je.a)(e, {
							listingName: t
						}).displayText
					}
					if (s) return Object(j.a)(e, Object(_.f)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case ae.d.Popular:
							return "r/popular";
						case ae.d.All:
							return "r/all"
					}
				}
				const d = Object(B.X)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(B.w)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(j.a)(e, d, n)
				}
				return d
			}, ut = (e, t, r, n) => n ? Object(O.b)(e.subredditName, void 0, n) : Object(f.a)(e.subredditName, t, r), lt = (e, t) => async (r, n) => {
				var s, d, i;
				const {
					countryCode: o,
					languageCode: b
				} = e.params, m = Object(l.c)(e.params), {
					styling: _
				} = e.queryParams, j = n(), S = Object(ye.a)(e.params, j);
				if ("Popular" === m) return void r(Object(a.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === m) return void r(Object(a.c)(e.url.replace("r/All", "r/all")));
				const E = Object(O.d)(e.queryParams, Object(te.kb)(j)),
					v = ut({
						subredditName: m,
						countryCode: o,
						languageCode: b
					}, S, e.queryParams, E),
					A = S,
					N = Object(I.a)(j.listings.postOrder.api.error, v),
					C = Object(I.a)(j.listings.postOrder.api.pending, v);
				let k = !!Object(I.a)(j.listings.postOrder.ids, v);
				const w = Object(I.a)(j.listings.postOrder.listingSort, v);
				w && w.hasChanged && (k = !1);
				let U = Object(B.F)(j, m);
				const G = (e, t) => "true" === _ && ((e, t) => Object(He.b)(we.c.config)(e, {
						subredditId: t
					}) || Object(He.b)(we.c.flair)(e, {
						subredditId: t
					}))(e, t),
					F = ue.A in e.queryParams && e.queryParams[ue.A].toUpperCase() || "",
					M = F in u.ic && u.ic[F];
				if (C || k && !N && !t) {
					if (G(j, U) && r(z.i(U)), k) {
						const t = at(n(), m, o, b);
						r(D.m({
							title: t
						})), (null === (s = j.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[v]) && r(D.o({
							correlationId: j.listings.postOrder.correlationIds[v]
						})), Object(Se.e)(n(), r, e), window.addEventListener("load", () => {
							r(Object(x.p)())
						}), j.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(h.b)(De.a.SUBREDDIT))
						}), r(re())
					}
					return void(Object(Me.e)(n()) && r(Object(R.a)()))
				}
				r(y.g());
				const q = null === (i = null === (d = Object(ee.b)(j)) || void 0 === d ? void 0 : d.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
					Q = Object(te.Q)(n()),
					H = Object(g.i)(() => r(Object(P.c)(`r/${m}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: Q,
						page: q
					});
				if (E) {
					const e = Object(g.i)(() => r(Object(L.d)(v, E, m)), {
						name: "searchDataRequested",
						isLoggedIn: Q,
						page: q
					});
					await e
				} else {
					const t = {
						...c()(e.queryParams, [...ue.k, ...ue.j, ue.g]),
						sort: A,
						t: Object(Ee.a)(A, M)
					};
					await r(ot(v, m, t, !0))
				}
				const J = j.platform.currentPage,
					K = Object(qe.d)(j, {
						pageLayer: J
					});
				if (Object(qe.a)(K) || Object(qe.b)(K) || Object(qe.c)(K)) {
					const e = Object(f.a)(m, u.W.TOP, {
							t: u.ic.WEEK
						}),
						t = {
							sort: u.W.TOP,
							t: u.ic.WEEK
						};
					await r(ot(e, m, t, !1))
				}
				if (Object(Me.e)(n()) && r(Object(R.a)()), U = U || Object(B.F)(n(), m), !Object(Pe.a)(j, U) && !Object(p.a)(m, {
						countryCode: o,
						languageCode: b
					})) {
					const e = Object(g.i)(() => r(Object(T.e)(m)), {
						name: "getTopCommunityFlair",
						page: q,
						isLoggedIn: Q
					});
					await e
				}
				G(n(), U) && r(z.i(U)), Object(Se.e)(n(), r, e);
				const V = at(n(), m);
				r(D.m({
					title: V
				})), r(re()), await H
			}, bt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", pt = Object(m.a)(bt)
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
				return _
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "h", (function() {
				return S
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
				return k
			})), r.d(t, "W", (function() {
				return R
			})), r.d(t, "X", (function() {
				return w
			})), r.d(t, "Y", (function() {
				return L
			})), r.d(t, "Z", (function() {
				return D
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
				p = "POST_CREATION__TOGGLE_EDITOR_MODE",
				m = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				f = "POST_TITLE_FETCHED",
				O = "INITIALIZE_EDITOR_MODE",
				_ = "POST_CREATION__CHANGE_FLAIR",
				j = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				g = "POST_CREATION__CHANGE_LINK_BODY",
				I = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				h = "POST_CREATION__CHANGE_MEDIA_BODY",
				T = "POST_CREATION__CHANGE_RECAPTCHA",
				S = "POST_CREATION__CHANGE_RTE_STATE",
				y = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				E = "POST_CREATION__CHANGE_TITLE",
				v = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				A = "POST_CREATION__TOGGLE_IS_CHANGED",
				N = "POST_CREATION__TOGGLE_IS_GOV",
				C = "POST_CREATION__TOGGLE_IS_NSFW",
				k = "POST_CREATION__TOGGLE_IS_OC",
				R = "POST_CREATION__TOGGLE_IS_POLL",
				w = "POST_CREATION__TOGGLE_IS_SPOILER",
				L = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				D = "POST_CREATION__TOGGLE_SEND_REPLIES",
				P = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
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
				return N
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "f", (function() {
				return D
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
				_ = r("./src/reddit/helpers/trackers/postComposer.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				g = r("./src/reddit/models/Subreddit/index.ts"),
				I = r("./src/reddit/routes/postCreation/constants.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				T = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				S = r("./src/reddit/selectors/postCollection.ts"),
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
				k = Object(o.a)(v.c),
				R = Object(o.a)(v.d),
				w = Object(o.a)(v.e),
				L = Object(o.a)(v.f),
				D = Object(o.a)(v.g),
				P = Object(o.a)(v.h),
				U = Object(o.a)(v.i),
				G = Object(o.a)(v.j),
				F = Object(o.a)(v.q),
				M = Object(o.a)(v.S),
				q = Object(o.a)(v.R),
				B = (Object(o.a)(v.T), Object(o.a)(v.U)),
				Q = Object(o.a)(v.V),
				H = Object(o.a)(v.W),
				J = Object(o.a)(v.X),
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
					t(R(e)), X(t, e)
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
						Object(h.a)(n) !== j.d && t(re(j.d))
					} else t(te(!1, e))
				}, se = e => async (t, r) => {
					const n = r();
					Object(S.m)(n, {
						subredditId: e
					}) ? t(c.i(j.a)) : t(c.i(j.c))
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
						j = await ((e, t, r, n, s, d) => Object(b.a)(e, {
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
					let h = {};
					const S = {},
						y = {},
						v = [];
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
						if (Object(T.b)(u) && (e => {
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
						})), Object(_.G)(i()), void d(oe());
						s.forEach(e => {
							if (Object(g.k)(e)) {
								const t = Object(O.f)(e);
								S[t.id] = t
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
						unavailableSubreddits: S,
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
							if (Object(g.k)(r)) {
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
				return _
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
				}, _ = e => async (t, r, n) => {
					let {
						apiContext: d
					} = n;
					r().posts.models[e] || await t(Object(s.M)(e))
				}, j = Object(n.a)(d.v), g = Object(n.a)(d.J), I = Object(n.a)(d.K), h = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (Object(c.h)(s)) return;
					e(g());
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
				return _e
			})), r.d(t, "c", (function() {
				return je
			})), r.d(t, "a", (function() {
				return ge
			})), r.d(t, "u", (function() {
				return Se
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
				_ = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/constants/history.ts"),
				g = r("./src/reddit/constants/modals.ts"),
				I = r("./src/reddit/constants/page.ts"),
				h = r("./src/reddit/constants/parameters.ts"),
				T = r("./src/reddit/constants/postLayout.ts"),
				S = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/endpoints/governance/posts.ts"),
				E = r("./src/reddit/endpoints/messages/index.ts"),
				v = r("./src/reddit/endpoints/modQueue/index.ts"),
				x = r("./src/reddit/endpoints/page/subredditPage.ts"),
				A = r("./src/reddit/endpoints/subreddit/about.ts"),
				N = r("./src/reddit/endpoints/subreddit/rules.ts"),
				C = r("./src/reddit/endpoints/user/preferences.ts"),
				k = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				R = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				w = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				L = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				D = r("./src/reddit/helpers/trackers/feed.ts"),
				P = r("./src/reddit/models/Subreddit/index.ts"),
				U = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				G = r("./src/reddit/models/Toast/index.ts"),
				F = r("./src/reddit/models/User/index.ts"),
				M = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				q = r("./src/reddit/selectors/moderatorPermissions.ts"),
				B = r("./src/reddit/selectors/profile.ts"),
				Q = r("./src/reddit/selectors/subreddit.ts"),
				H = r("./src/reddit/selectors/user.ts");
			const J = {},
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
					await (t === P.g.User ? r(oe(e)) : r(ce(e)))
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
						t(_.f({
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
						O = Object(R.a)(e, m),
						_ = m.platform.currentPage ? m.platform.currentPage.queryParams : {},
						g = Object(a.a)(l, O, {
							t: p,
							..._
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
						w = !(!C[g] || !C[g][E.token]);
					if (N || w) return;
					if (A === i.W.AWARDED && l === I.g) return;
					t(Z({
						key: g,
						fetchedToken: E.token
					}));
					const L = {
							after: E.token,
							dist: E.dist,
							forceGeopopular: l === I.d.Popular,
							layout: T.e[Object(S.S)(m, {})],
							sort: A,
							t: p,
							...d()(_, [...h.k, h.g])
						},
						P = Object(M.a)(m),
						U = P ? () => Object(x.b)(c(), Object(x.c)(m, l, {
							...L,
							limit: T.a
						}), Object(H.Z)(m)) : () => Object(x.a)(s(), l, L),
						G = await U(),
						F = {
							...G.body,
							...Object(k.a)(m, g, G.body)
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
								limit: T.a
							}), Object(H.Z)(m)));
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
						})), Object(D.b)(j.a.NextPageLoad)(r())
					} else {
						t(te({
							error: G.error,
							fetchedToken: E.token,
							key: g,
							...F
						}));
						const e = G.error;
						Object(D.a)(e ? `${G.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
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
				}, _e = "SUBREDDIT__ABOUT_PENDING", je = "SUBREDDIT__ABOUT_SUCCEEDED", ge = "SUBREDDIT__ABOUT_FAILED", Ie = Object(c.a)(_e), he = Object(c.a)(je), Te = Object(c.a)(ge), Se = e => async (t, r, n) => {
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
							n = Object(w.a)(r),
							s = i ? Object(L.a)(r) : void 0;
						t(he({
							subredditName: e,
							subreddits: s ? {
								[s.id]: s
							} : void 0,
							data: n
						}))
					} else t(Te({
						subredditName: e,
						error: o.error
					}))
				}, ye = (e, t, r) => async (n, s, d) => {
					let {
						apiContext: i
					} = d;
					var o;
					const c = e.substring(2),
						a = r === U.e.View ? null === (o = Object(H.f)(s(), c)) || void 0 === o ? void 0 : o.subredditId : Object(Q.F)(s(), c),
						u = Object(H.k)(s());
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
						i = Object(R.a)(e, n),
						o = n.platform.currentPage ? n.platform.currentPage.queryParams : J,
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
				return _
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "w", (function() {
				return g
			})), r.d(t, "v", (function() {
				return I
			})), r.d(t, "x", (function() {
				return h
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "z", (function() {
				return S
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
				_ = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				j = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				g = "SUBREDDIT__EDIT_REQUESTED",
				I = "SUBREDDIT__EDIT_FAILED",
				h = "SUBREDDIT__EDIT_SUCCESS",
				T = "SUBREDDIT_QUESTIONS_LOADED",
				S = "SUBREDDIT_SURVEY_ANSWERED",
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
							sr: Object(a.i)(f) ? s.kc + f.name : f.name
						},
						_ = await ((e, t, r) => Object(i.a)(e, {
							data: r,
							endpoint: `${d.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(o.w)(t)}`,
							method: s.jb.GET
						}))(m(), t, O);
					if (_.ok) {
						const n = _.body;
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
				return R
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "a", (function() {
				return D
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
				_ = r("./src/reddit/selectors/moderatorPermissions.ts"),
				j = r("./src/reddit/selectors/modUserNotes.ts"),
				g = r("./src/reddit/helpers/trackers/modNote.ts"),
				I = r("./src/telemetry/index.ts"),
				h = r("./src/redditGQL/types.ts"),
				T = r("./src/lib/initializeClient/installReducer.ts"),
				S = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			Object(T.a)({
				features: {
					modUserNotes: S.a
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
						_ = Object(f.d)(u, l, m, p),
						j = a.features.modUserNotes.fetchedTokens[_];
					if (!a.features.modUserNotes.api.pending[_] && !j) {
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
				}, C = Object(s.a)(i.H), k = Object(s.a)(i.G), R = e => {
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
						}), e(k({
							subredditId: t,
							lastAuthorModNotes: i
						}))
					}
				}, w = (e, t, r) => async (s, d, i) => {
					let {
						gqlContext: o
					} = i;
					var u, l, b, p, f, O, _;
					const {
						hasSortParam: j,
						sortToUse: g
					} = Object(m.a)(d(), e), I = n.Jb[g], T = {
						postId: e,
						requestPostModerationInfo: !t,
						...j && I && {
							sortType: h.d[I]
						},
						...r && {
							after: r
						}
					}, S = await ((e, t) => Object(c.a)(e, {
						...a,
						variables: {
							...t
						}
					}))(o(), T);
					if (S.ok) {
						const e = null === (u = S.body) || void 0 === u ? void 0 : u.data,
							t = null === (b = null === (l = null == e ? void 0 : e.postInfoById) || void 0 === l ? void 0 : l.subreddit) || void 0 === b ? void 0 : b.id,
							r = null === (f = null === (p = null == e ? void 0 : e.postInfoById) || void 0 === p ? void 0 : p.moderationInfo) || void 0 === f ? void 0 : f.lastAuthorModNote,
							n = null === (_ = null === (O = null == e ? void 0 : e.postInfoById) || void 0 === O ? void 0 : O.commentForest) || void 0 === _ ? void 0 : _.trees;
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
								}), e(k({
									subredditId: t,
									lastAuthorModNotes: i
								}))
							}
						})({
							subredditId: t,
							commentTrees: n
						}))
					}
				}, L = Object(s.a)(i.Q), D = (e, t, r, n, s, d) => async (i, a, l) => {
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
						_ = await ((e, t) => Object(c.a)(e, {
							...u,
							variables: {
								input: t
							}
						}))(b(), f);
					if (_.ok) {
						const r = null === (m = null === (p = _.body) || void 0 === p ? void 0 : p.data) || void 0 === m ? void 0 : m.createModUserNote.createdNote;
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
						} = _.body, t = e[0] ? e[0].message : y._("Something went wrong", null, {
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
					if (!Object(_.i)(a, e)) return;
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
				return y
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "j", (function() {
				return G
			})), r.d(t, "i", (function() {
				return F
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/invert.js"),
				d = r.n(s),
				i = r("./node_modules/lodash/pick.js"),
				o = r.n(i),
				c = r("./node_modules/lodash/xor.js"),
				a = r.n(c),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/endpoints/subreddit/settings.ts"),
				p = r("./src/telemetry/index.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				f = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/models/User/index.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/selectors/subredditSettings.ts"),
				T = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/selectors/widgets.ts");
			const y = "SUBREDDIT_SETTINGS_LOADED",
				E = Object(l.a)(y),
				v = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				x = Object(l.a)(v),
				A = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				N = Object(l.a)(A),
				C = (e, t) => async (r, n, s) => {
					let {
						apiContext: d,
						gqlContext: i
					} = s;
					if (!t || !Object(I.W)(n(), t)) {
						const t = await Object(b.c)(d(), e);
						t && t.ok && r(E(t.body))
					}
					if (t && !Object(h.b)(n(), {
							subredditId: t
						})) {
						const e = await Object(f.a)(i(), t);
						if (e && e.ok) {
							const t = e.body,
								n = Object(O.e)(t.data);
							r(x(n))
						}
					}
				}, k = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = Object(T.k)(t());
					s && await e(C(u.kc + Object(g.e)(s)))
				}, R = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", w = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", L = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", D = Object(l.a)(R), P = Object(l.a)(w), U = Object(l.a)(L), G = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c, u) => {
						let {
							apiContext: l,
							gqlContext: O
						} = u;
						i(D());
						const g = c(),
							T = o()(Object(I.W)(g, e), ...Object.keys(t)),
							y = o()(Object(h.b)(g, {
								subredditId: e
							}), ...Object.keys(r)),
							E = await Object(b.g)(l(), e, t),
							v = Object.keys(r).length > 0;
						let x = !0;
						if (v) {
							x = (await Object(f.b)(O(), e, r)).ok
						}
						if (!E.ok || v && !x) i(U()), i(Object(m.f)({
							kind: j.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: G(e, t, y, void 0)
						})), s && Object(p.a)(Object(_.c)(g, "BE returned an error:"));
						else {
							const o = Object(b.d)(E.body, d()(b.a));
							i(P({
								settings: {
									...o,
									subredditId: e
								},
								idCardWidgetId: Object(S.c)(g, {
									subredditId: e
								})
							})), v && i(N({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							s && 0 === a()(Object.keys(t), Object.keys(T)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = G(e, T, y, s)), i(Object(m.f)({
								kind: j.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
					}
				}, F = (e, t) => async (r, s, d) => {
					let {
						apiContext: i
					} = d;
					(await Object(b.e)(i(), e, t)).ok ? r(Object(m.f)({
						kind: j.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(m.f)({
						kind: j.b.Error,
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
				return _
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "A", (function() {
				return I
			})), r.d(t, "z", (function() {
				return h
			})), r.d(t, "D", (function() {
				return T
			})), r.d(t, "y", (function() {
				return S
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
				return k
			})), r.d(t, "i", (function() {
				return R
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
				_ = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				j = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				g = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				I = "TAGS__OPTIONS_CANCELLED",
				h = "TAGS__OPTION_SELECTED",
				T = "TAGS__SUGGESTED_OPTION_SELECTED",
				S = "TAGS__OPTION_DESELECTED",
				y = "TAGS__SUGGESTED_OPTION_DESELECTED",
				E = "TAGS__INPUT_CHANGED",
				v = "TAGS__SUGGESTED_INPUT_CHANGED",
				x = "GLOBAL__TAGS__LOADED",
				A = "CREATION__TAGS_INPUT_CHANGED",
				N = "CREATION__TAGS_OPTION_SELECTED",
				C = "CREATION__TAGS_OPTION_DESELECTED",
				k = "CREATION__PRIMARY_TAG_SELECTED",
				R = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
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
			var _ = r("./src/redditGQL/operations/UpdateSubredditPrimaryTag.json");
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
				g = (e, t) => Object(c.a)(e, {
					..._,
					variables: t
				});
			var I = r("./src/reddit/helpers/tags/index.ts"),
				h = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				T = r("./src/reddit/models/Tags/index.ts"),
				S = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/reducers/tags/selected/index.ts"),
				E = r("./src/reddit/selectors/tags.ts");
			Object(s.a)(d.e);
			const v = Object(s.a)(d.t),
				x = Object(s.a)(d.r),
				A = Object(s.a)(d.s),
				N = Object(s.a)(d.q),
				C = Object(s.a)(d.l),
				k = Object(s.a)(d.m),
				R = Object(s.a)(d.k),
				w = Object(s.a)(d.v),
				L = Object(s.a)(d.w),
				D = Object(s.a)(d.u),
				P = Object(s.a)(d.z),
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
						s(v());
						const l = await b(a(), {
								subredditId: e
							}),
							p = l.body;
						if (l.ok && p.data.subredditInfoById.secondaryTags && p.data.subredditInfoById.availableTags && p.data.subredditInfoById.suggestedTags) s(x(o(p.data))), r && h.h(d(), e, {
							context: t
						});
						else {
							s(N());
							const d = r ? "topics_save" : "topics_load";
							h.g(u, e, d, {
								context: t
							}), s(Object(i.f)(Object(i.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), S.b.Error, n.fbt._("Retry", null, {
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
					}), S.b.Error, n.fbt._("Retry", null, {
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
					return o.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(k()), u.createSubredditTags.createdTags || []) : (r(R()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (n, s, d) => {
						let {
							gqlContext: i
						} = d;
						if (!t.length && !r.length) return;
						n(w());
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
							if (e.state === T.d.NONE && a[e.tagId] && !l[e.tagId]) {
								!!r.find(t => t.state === T.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} for (const e of r)
							if (e.state === T.d.NONE && a[e.tagId] && !u[e.tagId]) {
								!!t.find(t => t.state === T.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
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
						}))) : n(D())
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
							state: e.action === y.a.ADD ? T.d.TAGGED : T.d.NONE
						}));
						if (u.length > 0) {
							const t = await W(e, u)(s, d, o);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: T.d.TAGGED
							})))
						}
						await Y(e, l)(s, d, o), Object(E.A)(d()) ? s(Object(i.f)(Object(i.e)(n.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), S.b.Error, n.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && s(Object(i.f)(Object(i.e)(n.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), S.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, s, d) => {
					const o = {
						state: T.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await W(e, [{
							text: t.displayText,
							type: T.c.CLASSIFICATION
						}])(r, s, d);
						n && 1 === n.length && (o.tagId = n[0].id)
					} else {
						if (!t.id) return void r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), S.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await Y(e, [], [o])(r, s, d): r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), S.b.Error)))
				}, ee = (e, t, r) => async (n, s, d) => {
					t.id ? await Y(e, [], [{
						state: T.d.NONE,
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
						}), S.b.Error, n.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, s, d)))), void o($(e));
						if (d)
							for (const e of r) h.f(c(), e, {
								context: s
							});
						o(Object(i.f)(Object(i.e)(n.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), S.b.SuccessCommunity, n.fbt._("Undo", null, {
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
						if ((null == a ? void 0 : a.id) === t.tagId && t.state === T.d.TAGGED) return;
						s(B());
						const u = await g(c(), {
								input: {
									subredditId: e,
									primaryTagState: t
								}
							}),
							l = u.body && u.body.data || null;
						u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (s(Q(j(l))), r && s(Object(i.f)(Object(i.e)(n.fbt._("Successfully updated primary topic!", null, {
							hk: "1NL90v"
						}), S.b.SuccessCommunity)))) : (s(H()), s(Object(i.f)(Object(i.e)(n.fbt._("Whoops! Unable to update primary topic", null, {
							hk: "3ilZqp"
						}), S.b.Error, n.fbt._("Retry", null, {
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
				return _
			})), r.d(t, "n", (function() {
				return j
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
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				j = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
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
				return h
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return T
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
				return S
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
				return k
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return R
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return w
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return L
			})), r.d(t, "userFlairMutated", (function() {
				return D
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
				_ = r("./src/reddit/reducers/features/userFlair/index.ts"),
				j = r("./src/reddit/actions/userFlair/constants.ts");
			Object(O.a)({
				features: {
					userFlair: _.a
				}
			});
			const g = Object(s.a)(j.i),
				I = Object(s.a)(j.j),
				h = Object(s.a)(j.h),
				T = Object(s.a)(j.c),
				S = Object(s.a)(j.d),
				y = Object(s.a)(j.b),
				E = Object(s.a)(j.p),
				v = Object(s.a)(j.q),
				x = Object(s.a)(j.o),
				A = Object(s.a)(j.f),
				N = Object(s.a)(j.g),
				C = Object(s.a)(j.e),
				k = Object(s.a)(j.m),
				R = Object(s.a)(j.n),
				w = Object(s.a)(j.l),
				L = Object(s.a)(j.k),
				D = Object(s.a)(j.r),
				P = Object(s.a)(j.a),
				U = (e, t, r, n, s) => async (d, i, o) => {
					let {
						apiContext: c
					} = o;
					const l = i(),
						b = l.user.account,
						O = b ? Object(p.e)(b) : void 0,
						_ = {
							...Object(f.d)(l, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						j = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: _
						};
					d(n === O ? D(j) : P(j));
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
					} else r(h());
					return c.ok
				}, F = (e, t) => async (r, n, s) => {
					let {
						apiContext: d
					} = s;
					const i = n(),
						o = Object(m.U)(i, {
							subredditId: e
						}).name;
					r(T());
					const c = await Object(a.j)(d(), t, l.d.UserFlair, o);
					if (c.ok) {
						r(S({
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
					if (r(k({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(i(), u, l.d.UserFlair, e)).ok) {
						r(R());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(w({
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
				return j
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "a", (function() {
				return S
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
				return k
			})), r.d(t, "d", (function() {
				return R
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
				_ = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const j = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
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
				h = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unlock`),
					method: a.jb.POST,
					data: {
						id: t
					}
				}),
				T = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/approve`),
					method: a.jb.POST,
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
					let d = Object(m.a)(Object(_.a)(Object(O.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return s && (d = Object(f.a)(d)), Object(u.a)(e, {
						data: r,
						endpoint: d,
						method: a.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				C = {
					[a.G.NONE]: c.g.None,
					[a.G.MODERATOR]: c.g.ModDistinguished,
					[a.G.ADMIN]: c.g.AdminDistinguished,
					[a.G.ALUMNI_ADMIN]: c.g.AlumniDistinguished
				};

			function k(e, t, r) {
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

			function R(e, t, r) {
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
				return h
			})), r.d(t, "n", (function() {
				return T
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
				return k
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "b", (function() {
				return D
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
				_ = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = r("./src/redditGQL/operations/SubredditTournamentLeaderboard.json"),
				g = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
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
			}, T = (e, t) => {
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
			var S;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(S || (S = {}));
			const y = async (e, t) => {
				let {
					subredditId: r,
					period: d = S.AllTime,
					top: i = 100,
					includeCurrentRank: o
				} = t;
				const c = await Object(n.a)(e, {
					..._,
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
			}, k = (e, t) => Object(n.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), R = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			}), w = (e, t) => Object(n.a)(e, {
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
			}, D = async (e, t) => {
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
				return _
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "i", (function() {
				return h
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
				_ = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
				}),
				j = (e, t) => Object(n.a)(e, {
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
				s = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/isAdHocMultireddit/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
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
				_ = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				I = r("./src/redditGQL/operations/SubredditPage.json");
			const h = (e, t, r, n) => {
					var s, o, c, a;
					const {
						after: b,
						geo_filter: m,
						isMobile: f,
						layout: O,
						limit: I,
						recentPostIds: h,
						sort: T,
						t: S
					} = r, y = Object(g.Z)(e), E = Object(_.q)(e), v = Object(d.a)(t), x = Object(i.a)(t), A = Object(j.T)(e, {
						subredditId: Object(j.F)(e, t)
					}).length > 0, N = (null === (s = e.user.account) || void 0 === s ? void 0 : s.username) || (null === (o = e.user.account) || void 0 === o ? void 0 : o.displayText), C = Object(g.o)(e), k = Object(g.nb)(e), R = {
						name: t,
						includeIdentity: y && !e.user.account,
						adContext: {
							layout: O ? O.toUpperCase() : u.a.Card,
							reddaid: e.user.reddaid
						},
						isFake: x,
						includeAppliedFlair: !x && y && !!N && n,
						includePowerups: n && !x,
						includeQuestions: n && y && !x,
						includeRecents: x && h && h.length > 0 || !1,
						includeRedditorKarma: n && y && !(null === (a = null === (c = e.user.account) || void 0 === c ? void 0 : c.karma) || void 0 === a ? void 0 : a.total),
						includeRules: n && !x && !A,
						includeSubredditLinks: n && !x && !y,
						includeTopicLinks: n && !x && !y,
						includeTrending: x,
						isAdHocMulti: v,
						isAll: t === l.d.All,
						isLoggedOutGatedOptedin: C,
						isLoggedOutQuarantineOptedin: k,
						isPopular: t === l.d.Popular,
						recentPostIds: h || [],
						subredditNames: v ? t.split("+") : [],
						username: y && N && n ? N : ""
					};
					return T && (R.sort = T.toUpperCase()), S && (R.range = S.toUpperCase()), f ? R.pageSize = Object(p.a)(O) : I && (R.pageSize = I), E && E.ad && (R.forceAds = {
						ad: E.ad
					}), (E && E.geo_filter || m) && (R.region = E && E.geo_filter || m), b && (R.after = btoa(b)), R
				},
				T = async (e, t, r) => {
					const n = Date.now(),
						d = await ((e, t) => Object(c.a)(e, {
							...I,
							variables: t
						}))(e, t),
						i = Date.now();
					if (!d.ok || !d.body) return d;
					const o = d.body,
						u = Date.now(),
						l = Object(m.a)(o.data),
						b = Date.now(),
						p = [{
							duration: i - n,
							logKeyType: a.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: a.a.gqlNormalizationTiming
						}];
					return Object(a.h)({
						name: s.r.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...d,
						ok: !!o.data.subredditInfoByName && !Object(O.k)(o.data.subredditInfoByName),
						status: S(o.data),
						body: l
					}
				}, S = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(O.k)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === O.d.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === O.d.GoldOnly || e.subredditInfoByName.forbiddenReason === O.d.Private || e.subredditInfoByName.forbiddenReason === O.d.Quarantined || e.subredditInfoByName.forbiddenReason === O.d.Gated) return 403
					}
					return 200
				}, y = e => {
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
				method: s.jb.GET,
				data: r && y(r) || {},
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
				return I
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "j", (function() {
				return R
			})), r.d(t, "a", (function() {
				return w
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
				f = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				O = r("./src/reddit/models/PostCreationForm/index.ts"),
				_ = r("./src/reddit/models/Vote/index.ts"),
				j = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function g() {
				return Object(m.b)() ? "https://strapi.reddit.com" : i.a.streamingApiUrl
			}
			const I = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${g()}${r}`,
					method: c.jb.GET,
					headers: d()(e.headers(), [a.d, a.c, a.a]),
					timeoutMs: void 0
				}).then(C)
			}, h = (e, t) => {
				let {
					subredditId: r,
					options: n
				} = t;
				return Object(u.a)(e, {
					...j,
					variables: {
						feedContext: {
							subredditId: r
						},
						first: null == n ? void 0 : n.pageSize,
						after: null == n ? void 0 : n.cursor
					}
				})
			}, T = async (e, t) => Object(l.b)({
				endpoint: `${g()}/videos/${t}`,
				method: c.jb.GET,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(C), S = async (e, t, r) => {
				let n;
				n = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const s = Object(o.a)(n, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${g()}${s}`,
					method: c.jb.GET,
					headers: d()(e.headers(), [a.d, a.c, a.a])
				}).then(C)
			}, y = async e => Object(l.b)({
				endpoint: `${g()}/recommended_viewer_subreddits`,
				method: c.jb.GET,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(C), E = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/videos/${t}/vote/${k(r)}`,
				method: c.jb.POST,
				headers: d()(e.headers, [a.d, a.c, a.a])
			}).then(C), v = async (e, t) => Object(l.b)({
				endpoint: `${g()}/videos/${t}/heartbeat`,
				method: c.jb.POST,
				headers: d()(e.headers(), [a.d, a.c, a.a])
			}).then(C), x = async (e, t, r, n) => {
				const s = r.rteState;
				if (!s) return Promise.reject(new Error("Editor state is undefined"));
				const d = p.a.getRawText(s);
				return d ? A(e, t, d).then(e => e.ok && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(f.a)(e.body.data.r2_comment),
							media: N(s)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, A = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}/comment_v2`,
				method: c.jb.POST,
				headers: d()(e.headers, [a.d, a.c, a.a]),
				data: {
					text: r
				},
				type: "json"
			}).then(C), N = e => ({
				type: "rtjson",
				richtextContent: {
					document: p.a.toRichTextJSON(e).document
				},
				rteMode: O.i.RICH_TEXT
			}), C = e => {
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
			}, k = e => e === _.a.upvoted ? "up" : e === _.a.downvoted ? "down" : "unset", R = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}`,
				method: c.jb.PUT,
				headers: d()(e.headers, [a.d, a.c, a.a]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(C), w = async (e, t) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}/auto_mute_status`,
				method: c.jb.GET,
				headers: d()(e.headers, [a.d, a.c, a.a])
			}).then(C)
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
				return _
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return S
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
				_ = (e, t) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.jb.GET
				}).then(e => (e.ok && e.body.rules && (e.body = f(e.body)), e)),
				j = e => e.ok ? (e.body = Object(m.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
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
				}).then(e => j(e)), I = async (e, t, r, n) => Object(c.a)(Object(u.a)(e, [b.a]), {
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
				}).then(e => j(e)), h = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: o.jb.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), T = e => e.map(e => encodeURIComponent(e)).join(), S = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.jb.POST,
					data: {
						r: t,
						new_rule_order: T(r),
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e))
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
								experimentName: d.O,
								expEventOverride: t
							});
							return !!(Object(d.ag)(r) ? void 0 : r)
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
				let _;
				const j = [],
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
					r.isSponsored && n && (null == _ && f + s >= 3 || s - _ >= 3) ? (_ = s, j.push(r.id)) : r.isSponsored ? r.isSponsored && Object(o.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...i.n(e),
						listing: i.y(e, t)
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
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
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
						else if (Object(o.n)(e)) i.subreddits[e.subreddit.id] || (i.subreddits[e.subreddit.id] = Object(j.a)(e.subreddit)), i.postFlair[e.subreddit.id] || (i.postFlair[e.subreddit.id] = Object(b.a)(e.subreddit));
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
					for (const e of t) i.subreddits[e.id] = Object(j.a)(e)
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
				var j, C;
				if (!f) return {
					reason: a.f.NotFoundSubreddit,
					data: {
						account: n && Object(E.a)(n) || null
					}
				};
				if (Object(a.k)(f)) {
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
				const k = {};
				let R;
				const w = f || b || r || t,
					[L, D] = w.elements.edges.reduce((e, t, r) => {
						var n, s, d, i;
						const [c, a] = e, u = t.node;
						if (Object(o.k)(u)) c.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (i = null === (d = u.flair) || void 0 === d ? void 0 : d.template) || void 0 === i ? void 0 : i.postStyle) && (k[u.flair.template.id] = Object(p.a)(u.flair.template.postStyle));
						else if (Object(v.g)(u)) {
							const e = Object(l.a)(u.interestTopicRecommendations.recommendationTopics);
							e.topics.length && (R = {
								interests: e,
								index: r
							})
						} else a.push(u);
						return [c, a]
					}, [
						[],
						[]
					]);
				if (D.length) {
					const e = `Received unhandled ${D.length} elements when processing subreddit data: "${D[0].__typename}"`;
					Object(s.b)() || console.warn(e), d.c.captureMessage(e)
				}
				m && L.push(...m);
				const P = w.elements.dist,
					U = A(L, O, n);
				if (f.styles && (U.structuredStyles = {
						data: {
							style: Object(T.a)(f.styles)
						}
					}), U.structuredStyles = {
						data: {
							...f.styles ? {
								style: Object(T.a)(f.styles)
							} : {},
							content: {
								widgets: Object(y.a)(f)
							},
							flairTemplate: k
						}
					}, U.subredditAboutInfo = Object(_.a)(f), f.modPermissions && (U.subredditPermissions = Object.keys(f.modPermissions).length > 0 ? Object(I.a)(f.modPermissions) : void 0), f.rules && (U.subredditRules = Object(h.a)(f.rules).rules), ((null == f ? void 0 : f.answerableQuestions) || f.contentRatingSurvey || f.communityProgressModule) && (U.questions = {
						answerableQuestions: null == f ? void 0 : f.answerableQuestions,
						contentRatingSurvey: null == f ? void 0 : f.contentRatingSurvey,
						communityProgressModule: null == f ? void 0 : f.communityProgressModule
					}), !Object(a.k)(f)) {
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
				}), U.subredditTopicLinks = Object(S.a)({
					data: {
						subredditInfoById: f
					}
				}), U.appliedFlair = {
					flair: (null === (j = f.flairedRedditorByName) || void 0 === j ? void 0 : j.flair) ? Object(u.a)(null === (C = f.flairedRedditorByName) || void 0 === C ? void 0 : C.flair)[0] : void 0,
					displaySettings: f.authorFlairSettings
				}, R && (U.interestTopicRecommendations = R), U.predictionTournaments = f.predictionTournaments || [], {
					...U,
					...null !== P && {
						dist: P
					}
				}
			};
			const N = e => {
				switch (e) {
					case a.d.Banned:
						return a.f.BannedSubreddit;
					case a.d.GoldOnly:
						return a.f.GoldSubreddit;
					case a.d.Private:
						return a.f.PrivateSubreddit;
					case a.d.Quarantined:
						return a.f.QuarantinedSubreddit;
					case a.d.Gated:
						return a.f.GatedSubreddit;
					case a.d.Unknown:
						return a.f.ForbiddenSubreddit
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
					isEligibleForLinkedPosts: !1,
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
				return _
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
				_ = (e, t, r) => Object(i.a)({
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
				return _
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "s", (function() {
				return S
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
				return k
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
						commentId: _,
						subredditSearch: j,
						filteredType: g,
						filteredSubredditId: I
					} = t, h = _ || (null === (n = null === (r = p) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), T = O || (null === (d = null === (s = p) || void 0 === s ? void 0 : s.postInfo) || void 0 === d ? void 0 : d.id);
					return {
						modnote: {
							type: null == p ? void 0 : p.itemType,
							content: null === (i = p) || void 0 === i ? void 0 : i.note,
							label: null === (c = null === (o = p) || void 0 === o ? void 0 : o.label) || void 0 === c ? void 0 : c.toLowerCase(),
							operatorId: null === (a = null == p ? void 0 : p.operator) || void 0 === a ? void 0 : a.id,
							subredditSearch: j,
							filteredType: null == g ? void 0 : g.toLowerCase(),
							filteredSubredditId: null == I ? void 0 : I.toLowerCase()
						},
						modAction: {
							targetUserId: f || (null === (u = null == p ? void 0 : p.user) || void 0 === u ? void 0 : u.id),
							action: null === (b = null === (l = p) || void 0 === l ? void 0 : l.actionType) || void 0 === b ? void 0 : b.toLowerCase()
						},
						...h ? {
							comment: {
								id: h,
								postId: T || "none"
							}
						} : null,
						...T ? {
							post: {
								id: T
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
				_ = e => t => ({
					source: i,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				j = e => t => ({
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
				h = e => t => ({
					source: i,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				T = e => t => ({
					source: i,
					action: "view",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.n(t),
					...d(0, e)
				}),
				S = e => t => ({
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
				k = e => t => ({
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
			r.d(t, "n", (function() {
				return i
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "r", (function() {
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
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "q", (function() {
				return y
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
				f = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...d(e),
					actionInfo: s.d(e, {
						pageType: "powerups_premium_upsell"
					})
				}),
				O = () => e => ({
					source: "powerups_premium_upsell",
					action: "click",
					noun: "powerups_price",
					...d(e)
				}),
				_ = e => t => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...d(t),
					actionInfo: s.d(t, {
						pageType: "powerups_premium_upsell"
					}),
					goldPurchase: {
						subscriptionType: e
					}
				}),
				j = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...d(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				g = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...d(e)
				}),
				I = (e, t) => r => ({
					source: t,
					action: "click",
					noun: "add_custom_emojis",
					...d(r),
					powerups: {
						...s.mb(r),
						emojiCount: e
					}
				}),
				h = (e, t) => r => ({
					source: t,
					action: "save",
					noun: "custom_emojis",
					...d(r),
					powerups: {
						...s.mb(r),
						emojiCount: e
					}
				}),
				T = function() {
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
				S = (e, t) => r => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? s.ib(r, t) : void 0,
					...d(r),
					correlationId: e
				}),
				y = (e, t, r) => n => ({
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
						} = t.payload, s = Object(i.d)(r, n.user.id, b.k.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.H: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, d = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, o = Object(i.d)(n, d, b.k.All);
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
								d = Object(i.d)(r, n, b.k.All);
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
				_ = r("./node_modules/icepick/icepick.js");
			const j = {};
			var g = function() {
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
							return Object(_.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.T: {
							const {
								notes: r
							} = t.payload;
							return Object(_.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
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
			const T = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: n,
							newModNote: s,
							filter: d
						} = t.payload;
						if (d !== b.k.All && d !== b.k.Note) return e;
						const o = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(i.d)(n, o, d),
							a = d === b.k.All ? b.k.Note : b.k.All,
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
						} = t.payload, d = Object(i.d)(r, n, b.k.All), o = Object(i.d)(r, n, b.k.Note), c = e[d] ? e[d].filter(e => e !== s) : [], a = e[o] ? e[o].filter(e => e !== s) : [];
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
						} = t.payload, s = Object(i.d)(r, n.user.id, b.k.All);
						return {
							...e,
							[s]: {
								...e[s],
								[b.k.All]: (e[s][b.k.All] || 0) + 1,
								[b.k.Note]: (e[s][b.k.Note] || 0) + 1
							}
						}
					}
					case s.lb: {
						const {
							subredditId: r,
							userId: n,
							totalCounts: s
						} = t.payload, d = Object(i.d)(r, n, b.k.All);
						return {
							...e,
							[d]: Object.keys(s).reduce((e, t) => (e[t] = s[t].totalCount, e), {})
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(i.d)(r, n, b.k.All);
						return {
							...e,
							...void 0 !== e[s] ? {
								[s]: {
									...e[s],
									[b.k.All]: (e[s][b.k.All] || 1) - 1,
									[b.k.Note]: (e[s][b.k.Note] || 1) - 1
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
				order: S,
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
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case f.G:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.w:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				j = r("./node_modules/lodash/uniqBy.js"),
				g = r.n(j),
				I = r("./node_modules/lodash/values.js"),
				h = r.n(I),
				T = r("./src/reddit/actions/comment/websocket/constants.ts");
			const S = {};

			function y(e, t) {
				return h()(e).map(e => {
					const r = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
					return {
						id: e.id,
						created: r,
						stickied: e.isStickied,
						authorId: e.authorId
					}
				})
			}

			function E(e) {
				return g()(e, "id").sort((e, t) => e.created - t.created)
			}
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.f:
						case f.y:
						case o.b: {
							const {
								comments: r,
								key: n
							} = t.payload, s = e[n] ? e[n] : [], d = y(r, s.find(e => e.stickied)), i = E([...s, ...d]);
							return {
								...e,
								[n]: [...i]
							}
						}
						case T.b:
						case T.c:
						case T.d:
						case f.L:
						case f.K: {
							const {
								comment: {
									id: r,
									created: n,
									isStickied: s,
									authorId: d
								},
								commentsPageKey: i
							} = t.payload;
							return {
								...e,
								[i]: [...E([...e[i] ? e[i] : [], {
									id: r,
									created: n,
									stickied: s,
									authorId: d
								}])]
							}
						}
						default:
							return e
					}
				},
				x = r("./node_modules/lodash/mapValues.js"),
				A = r.n(x),
				N = r("./src/reddit/helpers/commentList/index.ts"),
				C = r("./src/reddit/models/Comment/index.ts");
			const k = {};

			function R(e) {
				const t = e;
				return A()(t, e => {
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
			var w = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
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
							const e = Object(N.c)({
									commentLink: c.head,
									commentsDict: r,
									moreCommentsDict: o,
									continueThreadDict: s
								}),
								t = Object(N.c)({
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
								...R(r),
								...R(s),
								...R(o),
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
								...R(r),
								...R(n),
								...R(d)
							}
						}
					}
					case T.b:
					case f.L: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, d = e[n], i = {};
						let o = null;
						return s && (i[s] = {
							...d[s],
							prev: Object(C.i)(r.id)
						}, o = Object(C.i)(s)), {
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
					case f.K: {
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
							prev: Object(C.i)(r.id)
						}, c = a), o[s] = {
							...i[s],
							next: Object(C.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...o,
								[r.id]: {
									depth: d,
									next: c,
									prev: Object(C.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.b:
					case T.c:
					case f.L: {
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
			const P = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
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
					case f.L: {
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
				followed: _,
				keyToChatCommentLinks: v,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: D,
				keyToPostId: U,
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
				return _
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "j", (function() {
				return S
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
				_ = Object(n.a)(o, e => !1),
				j = Object(n.a)(o, e => e.isError),
				g = Object(n.a)(o, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				h = (Object(n.a)(I, e => e.isError), Object(n.a)(I, e => e.isPending)),
				T = Object(s.a)(Object(n.a)(I, e => e.subreddits)),
				S = Object(n.a)(T, e => [{
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
				return j
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "u", (function() {
				return I
			})), r.d(t, "w", (function() {
				return h
			})), r.d(t, "x", (function() {
				return T
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
				return k
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "q", (function() {
				return L
			})), r.d(t, "m", (function() {
				return D
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
				return H
			})), r.d(t, "M", (function() {
				return J
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
				l = r("./src/reddit/models/Subreddit/index.ts"),
				b = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/lib/initializeClient/installReducer.ts"),
				O = r("./src/reddit/reducers/features/comments/index.ts"),
				_ = r("./src/reddit/reducers/pages/comments/index.ts");
			Object(f.a)({
				features: {
					comments: O.a
				},
				pages: {
					comments: _.a
				}
			});
			const j = (e, t) => {
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
				h = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				T = (e, t) => {
					const r = h(e, t);
					if (r) return Object(m.b)(e, {
						commentId: r
					})
				},
				S = [],
				y = Object(i.a)((e, t) => {
					const r = T(e, t),
						n = r && r.id;
					if (!n) return S;
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
				E = (e, t) => h(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
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
				k = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(u.u)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== d.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				R = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.features.comments.collapsed[r]
				},
				w = e => e.moreComments.models,
				L = e => e.features.comments.models,
				D = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = Object(m.b)(e, {
						commentId: r
					});
					return n ? Object(m.a)(e, n) : ""
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
						d = Object(m.b)(e, {
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
				H = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = r ? e.features.comments.models[r] : void 0;
					if (!n) return null;
					const s = e.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				J = (e, t) => {
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
					const r = Object(m.b)(e, t);
					if (r) return Object(p.Z)(e, r)
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
					} = t, n = Object(m.b)(e, {
						commentId: r
					});
					for (; n && n.parentId;) {
						if (Object(a.g)(n)) return !0;
						if ((n = Object(m.b)(e, {
								commentId: n.parentId
							})) && Object(a.g)(n)) return !0
					}
					return !1
				},
				se = Object(o.a)(b.a, p.U, (e, t) => {
					var r;
					return e && (null === (r = t.allowedMediaInComments) || void 0 === r ? void 0 : r.includes(l.b.Giphy)) || !1
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
						experimentName: d.He
					}) === d.yd
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
					experimentName: s.ed,
					experimentEligibilitySelector: i.Q
				}),
				c = Object(n.a)(o, e => e === s.Dd.Community || e === s.Dd.Supporter)
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
				}) === n.Fc.Enabled,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Lb
				}) === n.Ec.Enabled
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
					experimentName: n.ie
				}) === n.yd,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.he
				}) === n.yd
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
				return S
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
			const p = Object(s.a)(u.g, u.d, a.e, (e, t, r) => !e && !t && !r);

			function m(e, t) {
				return r => Object(c.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: p,
					expEventOverride: t
				})
			}
			const f = m(i.gc, !0),
				O = m(i.gc, !1),
				_ = m(i.ic, !0),
				j = (m(i.ic, !1), m(i.hc, !0)),
				g = m(i.hc, !1),
				I = m(i.jc, !0),
				h = m(i.jc, !1),
				T = Object(s.a)(f, _, (e, t) => e === i.Gc.Enabled || t === i.Hc.Enabled),
				S = Object(s.a)(j, I, (e, t) => e === i.rb.BlurredPreview || e === i.rb.NoPreview || t === i.rb.BlurredPreview || t === i.rb.NoPreview),
				y = Object(s.a)(g, h, (e, t) => e === i.rb.BlurredPreview || t === i.rb.BlurredPreview),
				E = Object(s.a)(j, I, (e, t) => e === i.rb.NoPreview || t === i.rb.NoPreview),
				v = Object(s.a)(T, E, y, (e, t, r) => (e || t) && !r),
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
					experimentName: s.vc
				}),
				u = Object(n.a)(e => Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: s.uc
				}), e => e),
				l = Object(n.a)(e => Object(d.c)(e, {
					experimentEligibilitySelector: d.a,
					experimentName: s.Qb
				}), e => e === s.yd)
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
			const d = e => n.Ze.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.gf
				}),
				i = e => n.Ze.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Se
				}),
				o = (e, t, r) => {
					const d = r(e, t);
					return !(!d || !d.meter) && (d.meter.enabled && n.Pf.Enabled === Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Of
					}))
				},
				c = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ff
				}),
				a = e => {
					switch (e) {
						case n.kf.Five:
							return .05;
						case n.kf.Ten:
							return .1;
						case n.kf.Fifty:
							return .5;
						default:
							return .01
					}
				},
				u = e => n.Ze.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.hf
				}),
				l = e => n.Ze.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.df
				}),
				b = e => n.Ze.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ef
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
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, d.k.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				p = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, d.k.All)]
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
				return _
			})), r.d(t, "b", (function() {
				return j
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
					return Boolean((null == t ? void 0 : t[i.u]) && Object(n.a)(t[i.u]))
				},
				f = e => e.onboarding.shouldSkipOnboardingState,
				O = Object(s.a)(p.Q, p.P, m, f, (e, t, r, n) => (e || t) && r && !n),
				_ = e => {
					const {
						genderUpdateState: t
					} = e.onboarding;
					if (t.success || t.failure) return t
				},
				j = Object(s.a)(l.c, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(d.ag)(e) ? t : null),
				g = Object(s.a)(l.c, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(o.I)(r) || Object(o.J)(r) || Object(o.y)(r)
				}, a.b, u.a, f, (e, t, r, n, s) => e === d.tb.PopoverFeed15 && t && Object(c.c)() && !r && !n && !s)
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
				return _
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "t", (function() {
				return T
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "k", (function() {
				return R
			})), r.d(t, "z", (function() {
				return w
			})), r.d(t, "y", (function() {
				return L
			})), r.d(t, "u", (function() {
				return D
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
				p = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id || t.push(u(e)[r].displayText);
					return t || []
				},
				m = e => Object.keys(e.tags.models.globalSubredditTags).length > 0,
				f = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				O = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				_ = (e, t) => {
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
				g = [],
				I = (e, t) => {
					let {
						subredditId: r
					} = t;
					return s()(h(e, {
						subredditId: r
					}), e => !!e.action) || s()(S(e, {
						subredditId: r
					}), e => !!e.action)
				},
				h = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedOptions[r] || g
				},
				T = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedSuggestedOptions[r] || g
				},
				S = (e, t) => {
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
				k = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.itemTags[r] || y
				},
				R = (e, t) => {
					let {
						itemId: r
					} = t;
					return !!e.tags.models.itemTags[r]
				},
				w = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.suggestedItemTags[r] || y
				},
				L = (e, t) => {
					let {
						itemId: r
					} = t;
					return i()(w(e, {
						itemId: r
					})).filter(e => e.isRelevant).map(e => Object(a.e)(e, !0))
				},
				D = (e, t) => {
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
						const s = (n ? j(e, {
								subredditId: r
							}) : _(e, {
								subredditId: r
							})) ? A(e) : v(e),
							d = n ? T(e, {
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
					}).concat(S(e, {
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
					return Object.keys(k(e, {
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
				return _
			})), r.d(t, "h", (function() {
				return j
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
				_ = (e, t) => {
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
			e.exports = JSON.parse('{"id":"24a9dc6b0b42"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"07881ddf586c"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.35609b66aaf75719e092.js.map