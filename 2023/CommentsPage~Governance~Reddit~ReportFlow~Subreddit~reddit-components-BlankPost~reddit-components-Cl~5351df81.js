// https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.52d0c684a515b0c2072a.js
// Retrieved at 1/25/2023, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"], {
		"./src/lib/name/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/name/index.ts");
			const s = /^u_[\w-]+$/;

			function o(e) {
				return s.test(Object(n.i)(e))
			}

			function i(e) {
				return `u_${Object(n.i)(e)}`
			}

			function d(e, t) {
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
				o = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				i = r("./src/reddit/selectors/countrySites.ts"),
				d = r("./src/reddit/selectors/meta.ts");
			const c = (e, t, r) => {
				const {
					languageCode: c
				} = Object(i.c)(e), a = r || (Object(d.k)(e) || s.DEFAULT_LOCALE), u = Object(n.isPseudoLocale)(a) ? s.DEFAULT_LOCALE : a;
				if (c) {
					const e = Object(o.d)(c, u.substring(0, 2));
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
				return o
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				o = Object(n.a)(s)
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return P
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "f", (function() {
				return U
			})), r.d(t, "i", (function() {
				return G
			})), r.d(t, "n", (function() {
				return B
			})), r.d(t, "s", (function() {
				return Q
			})), r.d(t, "k", (function() {
				return z
			})), r.d(t, "h", (function() {
				return H
			})), r.d(t, "g", (function() {
				return K
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
				o = r("./src/telemetry/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/economics/helpers/async.ts"),
				c = r("./src/lib/loadableAction/index.ts");
			const a = Object(c.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			Object(c.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditCurrentUserPowerupsFlairs));
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
				C = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				x = r("./src/reddit/selectors/moderatingComments.ts"),
				A = r("./src/reddit/selectors/moderatorPermissions.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/actions/comment/constants.ts");
			const R = {},
				P = Object(i.a)(L.q),
				w = e => async (t, r, n) => {
					let {
						apiContext: o
					} = n;
					if (!Object(N.S)(r())) return t(Object(u.openRegisterModal)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(S.m)(r(), {
							commentId: e
						})
					}));
					const i = r().features.comments.models[e];
					if (!i) return;
					const d = i.isSaved ? g.m : g.i;
					if (t(P({
							[e]: {
								isSaved: !i.isSaved
							}
						})), (await d(o(), e)).ok) {
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
							buttonAction: w(e)
						}))
					} else t(P({
						[e]: {
							isSaved: i.isSaved
						}
					}))
				}, k = e => `viewing-comment-${e}`, D = n.a.telemetry.commentConsumedThreshold, U = e => async (t, r) => {
					const s = r(),
						i = Object(E.c)(s, {
							commentId: e
						});
					if (!i || Math.random() > n.a.telemetry.commentSampleRate) return;
					I.d({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), o.c.start(k(e));
					const d = setTimeout(() => I.a({
						state: s,
						commentId: e,
						collapsed: i.collapsed
					}), D);
					R[e] = d
				}, G = (e, t) => async (r, n) => {
					const s = n(),
						i = k(e);
					if (Object(E.c)(s, {
							commentId: e
						}) && o.c.has(i)) {
						const r = o.c.end(i);
						!t && r < D && (clearTimeout(R[e]), delete R[e])
					}
				}, F = Object(i.a)(L.z), q = Object(i.a)(L.y), M = Object(i.a)(L.x), B = (e, t, r) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					const c = s(),
						u = c.moreComments.models[t],
						l = c.platform.currentPage,
						m = l && l.routeMatch,
						f = m && m.match,
						{
							partialPostId: O
						} = f ? f.params : null;
					if (!O) return;
					const _ = Object(v.y)(O);
					n(F({
						moreCommentsId: u.id
					}));
					const I = await Object(g.g)(i(), _, {
						token: u.token
					}, Object(C.a)(c), r);
					if (I.ok) {
						const t = I.body,
							r = Object(j.a)(t, _, c);
						n(q({
							key: e,
							moreCommentsItem: u,
							shouldCollapse: r,
							...t
						}));
						const o = c.posts.models[_];
						let i;
						o && "subreddit" === o.belongsTo.type && t.comments && (i = o.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: i
						})), Object(A.i)(c, i) && n(Object(p.c)(_, !0, u.token)));
						const l = I.body.comments;
						await n(a(i, l)), Object(A.h)(s(), {
							subredditId: o.belongsTo.id
						}) && n(Object(b.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else n(M({
						moreCommentsItem: u,
						...I.error
					}))
				}, Q = Object(O.a)(j.b, T.a.upvoted), z = Object(O.a)(j.b, T.a.downvoted), H = Object(i.a)(L.l), K = Object(i.a)(L.k), J = Object(i.a)(L.g), V = Object(i.a)(L.h), $ = (Object(i.a)(L.c), Object(i.a)(L.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const o = s(),
							i = Object(h.i)(t),
							d = Object(S.n)(o, {
								commentLink: i,
								commentsPageKey: r
							}),
							c = Object(x.b)(o, {
								commentId: t,
								commentsPageKey: r
							}),
							a = d.depth;
						e(J({
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
					return async (e, o) => {
						const i = o(),
							d = Object(j.e)(r, t, n, i),
							c = Object(x.b)(i, {
								commentId: t.id,
								commentsPageKey: r
							});
						e(J({
							commentId: d,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === n && s(d, !0), Object(m.d)()
					}
				}, X = Object(i.a)(L.t), Z = e => t => t(X({
					draftKey: e
				})), ee = Object(i.a)(L.a), te = Object(i.a)(L.I), re = Object(i.a)(L.b), ne = Object(i.a)(L.w), se = Object(i.a)(L.e), oe = Object(i.a)(L.A), ie = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var o, i;
					if (e) {
						const r = await Object(g.b)(s(), e);
						if (r.ok) {
							const n = r.body;
							"Comment" === (null === (o = n.data.commentById) || void 0 === o ? void 0 : o.__typename) && t(oe({
								commentId: e,
								media: Object(_.b)(null === (i = n.data.commentById) || void 0 === i ? void 0 : i.content)
							}))
						}
					}
				}
		},
		"./src/reddit/actions/communityChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/reducers/features/communityChat/index.ts");
			const i = "COMMUNITY_CHAT__SET_SELECTED_CHANNEL_ID",
				d = "COMMUNITY_CHAT__CHANNELS_LOADED";
			Object(n.a)({
				features: {
					communityChat: o.a
				}
			});
			const c = Object(s.a)(i),
				a = Object(s.a)(d)
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
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
				o = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
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
			const S = Object(d.a)(T.b),
				E = Object(d.a)(T.c),
				C = Object(d.a)(T.a),
				x = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = {
							subredditName: e.toLowerCase()
						},
						d = _.d.hatefulContentFiltersEnabled(r());
					if (Object(h.a)(r(), o)) return;
					t(E(o));
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
							return void t(C({
								...o,
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
						includeHatefulFilters: l && d
					});
					if (f.ok) {
						const e = f.body;
						p = e.data.subreddit && e.data.subreddit
					}
					if (p) t(S({
						...o,
						...p
					}));
					else {
						const r = f.error || {
							type: i.L.UNKNOWN_ERROR
						};
						t(C({
							...o,
							error: r
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: f.body,
								responseOk: f.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, A = Object(d.a)(T.d), N = (e, t) => async (r, s, o) => {
					let {
						gqlContext: i
					} = o;
					const d = e.toLowerCase(),
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
								o = !(!s.hatefulContentThresholdAbuse && !s.hatefulContentThresholdIdentity),
								i = {
									subredditId: t,
									permittedTerms: r.hatefulContentFilters.permittedTerms
								},
								d = !!i.permittedTerms;
							n[1] = Object(u.a)(e, {
								...O,
								variables: {
									includeThresholds: o,
									includePermittedTerms: d,
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
								const o = null == t ? void 0 : t.fieldErrors,
									i = null == e ? void 0 : e.fieldErrors;
								o && (s = s.concat(o)), i && (s = s.concat(i))
							}
							return {
								ok: n,
								fieldErrors: s.length ? s : null
							}
						})
					})(i(), c, t);
					if (l.ok) return r(A({
						subredditName: d,
						partialUpdates: t
					})), r(Object(a.f)({
						kind: I.b.SuccessCommunity,
						text: n.fbt._("Subreddit content controls updated successfully", null, {
							hk: "1n6QIQ"
						})
					})), {
						success: !0
					}; {
						const s = L(l.fieldErrors);
						return r(Object(a.f)({
							kind: I.b.Error,
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
				}, L = e => e && e.map(e => ({
					...e,
					field: o()(e.field)
				}))
		},
		"./src/reddit/actions/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
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
			const o = "DISCOVERY_UNIT__LIST_PENDING",
				i = "DISCOVERY_UNIT__LIST_LOADED",
				d = "DISCOVERY_UNIT__LIST_FAILED",
				c = Object(n.a)(o),
				a = Object(n.a)(i),
				u = Object(n.a)(d),
				l = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const o = t(),
						i = Object(s.d)(o),
						d = Object(s.c)(o);
					if (i || d) return;
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
				return H
			})), r.d(t, "k", (function() {
				return K
			})), r.d(t, "o", (function() {
				return J
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
				return oe
			})), r.d(t, "g", (function() {
				return ie
			})), r.d(t, "a", (function() {
				return de
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
				o = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/predictions/index.ts"),
				d = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/makeRequest/index.ts")),
				c = r("./src/lib/uploadToS3/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/CreateMediaUploadLease.json"),
				l = r("./src/redditGQL/operations/SubmitMediaUpload.json");
			var b = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				m = r("./src/reddit/helpers/media/index.ts"),
				p = r("./src/redditGQL/types.ts");
			const f = new Map([
					["image/png", p.x.Png],
					["image/gif", p.x.Gif],
					["image/jpeg", p.x.Jpeg]
				]),
				O = (e, t) => async (r, n, s) => {
					let {
						gqlContext: o
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
						if (!Object(d.c)(r) || r.error) throw new Error("Failed to create upload lease");
						return r.body.data.createMediaUploadLease
					})(o(), {
						mimetype: p
					}), j = Object(b.a)(g), _ = await Object(c.a)(t, j);
					if (!Object(d.c)(_)) throw new Error("Failed to upload file to S3");
					return await (async (e, t) => {
						const r = await Object(a.a)(e, {
							...l,
							variables: {
								input: t
							}
						});
						if (!Object(d.c)(r) || r.error) throw new Error("Failed to submit media")
					})(o(), {
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
				var o, i;
				return {
					score: t,
					rank: r,
					redditor: n ? {
						...n,
						icon: null !== (o = n.icon) && void 0 !== o ? o : null,
						profile: null !== (i = n.profile) && void 0 !== i ? i : null
					} : null,
					redditorInfo: s
				}
			}
			var T = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				E = r("./src/reddit/actions/login.ts"),
				C = r("./src/reddit/actions/modal.ts"),
				x = r("./src/reddit/constants/modals.ts"),
				A = r("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts"),
				R = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				P = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				w = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(o.a)({
				features: {
					predictions: i.a
				}
			});
			const k = Object(I.a)(w.d),
				D = Object(I.a)(w.c),
				U = Object(I.a)(w.e),
				G = Object(I.a)(w.f),
				F = Object(I.a)(w.i),
				q = Object(I.a)(w.h),
				M = Object(I.a)(w.j),
				B = Object(I.a)(w.p),
				Q = Object(I.a)(w.s),
				z = Object(I.a)(w.o),
				H = Object(I.a)(w.b),
				K = (e, t, r) => async (n, s, o) => {
					let {
						gqlContext: i
					} = o;
					const d = Object(L.S)(s());
					if (!Object(A.c)(s(), {
							subredditId: e
						})) {
						n(k({
							subredditId: e
						}));
						try {
							const {
								predictionTournaments: s,
								predictionWinners: o
							} = await Object(h.i)(i(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: d
							}), c = v(o);
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
				}, J = (e, t) => async (r, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = Object(L.S)(n());
					if (!Object(A.g)(n(), {
							tournamentId: t
						})) {
						r(F({
							tournamentId: t
						}));
						try {
							const {
								predictionWinners: n
							} = await Object(h.j)(o(), {
								subredditId: e,
								tournamentId: t,
								includeCurrentRank: i
							}), s = v(n);
							r(M({
								tournamentId: t,
								leaderboard: s
							}))
						} catch {
							r(q({
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
					return async (e, o, i) => {
						let {
							gqlContext: d
						} = i;
						const c = await Object(h.p)(d(), {
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
							gqlContext: o
						} = s;
						const i = await Object(h.n)(o(), {
								optionId: t,
								postId: r
							}),
							{
								resolvePrediction: d
							} = i.body.data;
						if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
						return e(z({
							pollId: r,
							prediction: d.poll
						})), d.poll
					}
				}, W = Object(I.a)(w.k), Y = Object(I.a)(w.m), X = Object(I.a)(w.l), Z = Object(I.a)(w.n), ee = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = r(),
						i = Object(N.I)(o, e);
					if (Object(P.k)(o, {
							subredditId: i
						})) return Object(P.g)(o, {
						subredditId: i
					});
					t(W({
						subredditId: i
					}));
					const d = await Object(h.k)(s(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: !0
						}),
						c = {};
					d.forEach(e => {
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
					const a = d.map(e => Object(S.a)(e));
					return t(X({
						subredditId: i,
						tournaments: a
					})), t(Y({
						subredditId: i,
						tournaments: a
					})), t(Z({
						posts: c,
						meta: o.meta
					})), a
				}, te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = r(),
						i = Object(N.I)(o, e),
						d = await Object(h.l)(s(), {
							subredditName: e,
							isLatestOnly: !0
						});
					t(re(i, d))
				}, re = (e, t) => r => {
					const n = t.map(e => Object(S.a)(e));
					r(Y({
						subredditId: e,
						tournaments: n
					}))
				}, ne = Object(I.a)(w.a), se = Object(I.a)(w.q), oe = Object(I.a)(w.r), ie = (e, t, r, n) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					const c = o(),
						a = Object(R.b)(c);
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
					const l = await Object(h.e)(d(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: p.X.Tokens,
							tokenIcon: u
						}),
						b = Object(S.a)(l);
					s(ce(b))
				}, de = (e, t) => async (r, n, o) => {
					let {
						gqlContext: i
					} = o;
					const d = Object(R.b)(n());
					if (!d) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(h.a)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${Object(s.a)()}`,
							subredditId: t,
							predictionDrafts: d
						}),
						a = Object(S.a)(c);
					r(ce(a))
				}, ce = Object(I.a)(w.g), ae = (e, t, r) => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = await Object(h.o)(o(), {
							tournamentId: e,
							name: r
						}),
						d = Object(S.a)(i);
					t(ce(d))
				}, ue = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = await Object(h.f)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = o.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(ce(i.tournament)), i.tournament
				}, le = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = await Object(h.g)(s(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = o.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, be = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = await Object(h.h)(s(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = o.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, me = e => {
					let {
						coinPackageId: t,
						selectedOptionId: r,
						price: n,
						pollId: s,
						tournamentId: o,
						tournamentPostId: i
					} = e;
					return async e => {
						const d = await e(V({
							coinPackageId: t,
							optionId: r,
							postId: s,
							price: n
						}));
						return e(Q({
							predictionId: s,
							selectedOptionId: r,
							tournamentId: o,
							tournamentPostId: i
						})), d
					}
				}, pe = e => async (t, r) => {
					const n = r();
					Object(L.S)(n) ? await t(Object(C.h)(x.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(E.openLoginModal)())
				}, fe = () => Object(C.g)(x.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Oe = e => async (t, r, s) => {
					let {
						gqlContext: o
					} = s;
					try {
						const r = await Object(h.b)(o(), {
							postId: e
						});
						t(H({
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
						gqlContext: o
					} = s;
					const i = await Object(h.c)(o(), {
						postId: e,
						...t
					});
					return r(H({
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
				return R
			})), r.d(t, "p", (function() {
				return P
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "e", (function() {
				return M
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "m", (function() {
				return J
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/parameters.ts"),
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
				C = Object(s.a)(h),
				x = Object(s.a)(v),
				A = Object(s.a)(y),
				N = Object(s.a)(T),
				L = Object(s.a)(S),
				R = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const o = r(),
						i = Object(_.m)(o),
						d = e || i && Object(f.e)(i);
					if (!d) return;
					if (Object(O.d)(o, {
							username: d
						})) return;
					t(E(d));
					const p = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.ob.GET
					}))(s(), d);
					if (p.ok) {
						const e = m(p.body);
						t(C({
							username: d,
							accountsData: e
						}))
					} else t(x(p.error))
				}, P = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						o = Object(g.d)(s);
					if (!o) return;
					const i = s.externalAccount.api.subreddit.fetched[o],
						d = s.externalAccount.api.subreddit.pending[o];
					if (i || d) return;
					const p = Object(j.z)(s, {
						subredditName: o
					});
					if (!(p && p.hasExternalAccount)) return;
					e(A(o));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.ob.GET
					}))(n(), o);
					if (f.ok) {
						const t = m(f.body);
						e(N({
							subredditName: o,
							accountsData: t
						}))
					} else e(L(f.error))
				}, w = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", k = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", D = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(s.a)(w), G = Object(s.a)(k), F = Object(s.a)(D), q = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(U({
						provider: e
					}));
					const o = Object(_.m)(r()),
						i = Object(f.e)(o),
						d = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.ob.POST
						}))(s(), e);
					d.ok ? t(G({
						provider: e,
						username: i
					})) : t(F({
						provider: e,
						error: d.error
					}))
				}, M = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", z = Object(s.a)(M), H = Object(s.a)(B), K = Object(s.a)(Q), J = e => async (t, r, s) => {
					let {
						apiContext: m
					} = s;
					t(z({
						provider: e
					}));
					const f = Object(o.a)(window.location.href, {
							[d.e]: e
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
						t(H({
							provider: e
						})), window.location.href = r
					} else t(K({
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
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditAchievementFlairs.json");
			const a = (e, t) => Object(d.a)(e, {
				...c,
				variables: {
					subredditId: t
				}
			}, {
				traceRequestName: "subreddit_achievement_flairs"
			});
			var u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const m = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, i) => {
						let {
							gqlContext: d
						} = i;
						const c = s();
						if (!(null != Object(l.c)(c, {
								subredditId: e
							})) || t.forceLoad) {
							r(O());
							try {
								const t = await a(d(), e);
								if (!t.ok) return;
								const {
									errors: n,
									data: s
								} = t.body;
								if (null == n ? void 0 : n.length) return void(await r(_(n[0].message)));
								const o = p(s.subredditInfoById);
								f(r, e, o)
							} catch (u) {
								o.c.captureException(u), await r(_(n.fbt._("Something went wrong", null, {
									hk: "1IJNeH"
								})))
							}
						}
					}
				},
				p = e => {
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
				f = (e, t, r) => e(g({
					subredditId: t,
					...r
				})),
				O = Object(s.a)(b.hb),
				g = Object(s.a)(b.gb),
				j = Object(s.a)(b.fb),
				_ = e => async t => {
					await t(j(e)), t(Object(i.f)({
						kind: u.b.Error,
						duration: i.a,
						text: e
					}))
				}
		},
		"./src/reddit/actions/gold/customEmojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/gold/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
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
				b = r("./src/reddit/selectors/gold/powerups/index.ts");
			const m = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, i) => {
						let {
							gqlContext: d
						} = i;
						const c = s();
						if (!(null != Object(b.a)(c, {
								subredditId: e
							})) || t.forceLoad) {
							r(O());
							try {
								const t = await u(d(), e);
								if (!t.ok) return;
								const {
									errors: n,
									data: s
								} = t.body;
								if (null == n ? void 0 : n.length) return void(await r(_(n[0].message)));
								const o = p(s.subredditInfoById);
								f(r, e, o)
							} catch (a) {
								o.c.captureException(a), await r(_(n.fbt._("Something went wrong", null, {
									hk: "1IJNeH"
								})))
							}
						}
					}
				},
				p = e => {
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
				f = (e, t, r) => e(g({
					subredditId: t,
					...r
				})),
				O = Object(s.a)(i.kb),
				g = Object(s.a)(i.jb),
				j = Object(s.a)(i.ib),
				_ = e => async t => {
					await t(j(e)), t(Object(d.f)({
						kind: l.b.Error,
						duration: d.a,
						text: e
					}))
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
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				b = Object(o.a)(l),
				m = "META__META_RECEIVED",
				p = (Object(o.a)(m), "META__SET_LOCALE"),
				f = Object(o.a)(p),
				O = e => async (t, r, o) => {
					let {
						apiContext: l
					} = o;
					if (!e) return;
					const b = r(),
						m = l();
					let p;
					if (t(f(e)), Object(n.isPseudoLocale)(e) ? (Object(u.P)(b) || Object(a.b)(b)) && (p = e) : p = Object(n.isoLocaleToR2Language)(e), !p) return;
					const O = new URL(window.location.href);
					Object(u.S)(b) ? Object(n.isPseudoLocale)(p) ? O.searchParams.set("locale", p) : (await Object(i.a)(Object(d.a)(m, [c.a]), {
						data: {
							lang: p
						},
						endpoint: `${m.apiUrl}/api/v1/me/prefs`,
						method: s.ob.PATCH,
						type: "json"
					}), O.searchParams.delete("locale")) : O.searchParams.delete("locale"), window.location.href = O.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(o.a)(g), _ = "META__PWA_ENTERED", I = "META__PWA_LEFT", h = Object(o.a)(_), v = Object(o.a)(I)
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/actions/comment/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/redditGQL/operations/ModQueueTriggers.json");
			const d = e => {
				let {
					commentIds: t = [],
					postIds: r = []
				} = e;
				return async (e, d, c) => {
					let {
						gqlContext: a
					} = c;
					var u, l;
					if (!t.length && !r.length) return;
					const b = await ((e, t) => Object(o.a)(e, {
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
							e(Object(s.Q)(r))
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
				return o
			}));
			const n = "RESET_GENDER_UPDATE_STATE",
				s = "SUBREDDIT_INTEREST_TOPICS",
				o = "SKIP_ONBOARDING_MODAL"
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
				o = r("./src/reddit/actions/onboarding/constants.ts"),
				i = r("./src/reddit/helpers/counters/onboarding.ts"),
				d = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
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
					})), Object(d.d)();
					const t = Object(a.k)(r);
					Object(i.b)(c.f.FirstPopover, t)
				}
			}, b = Object(n.a)(o.a), m = Object(n.a)(o.c), p = Object(n.a)(o.b);
			t.default = () => async (e, t) => {
				const r = t();
				Object(u.d)(r) && e(Object(s.openD2xOnboardingModal)())
			}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return P
			})), r.d(t, "PAGE_LOADED", (function() {
				return w
			})), r.d(t, "PAGE_FAILED", (function() {
				return k
			})), r.d(t, "pagePending", (function() {
				return D
			})), r.d(t, "pageLoaded", (function() {
				return U
			})), r.d(t, "pageFailed", (function() {
				return G
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return q
			})), r.d(t, "postCreationPageRequested", (function() {
				return M
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/filterQueryParams/index.ts"),
				o = r("./src/lib/isFakeSubreddit/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makePostCreationPageKey/index.ts"),
				c = r("./src/lib/pageTitle/index.ts"),
				a = r("./src/reddit/actions/contentControls/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/externalAccount.ts"),
				b = r("./src/reddit/actions/platform.ts"),
				m = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/postCreation/general.ts"),
				f = r("./src/reddit/actions/profile/index.ts"),
				O = r("./src/reddit/actions/subreddit.ts"),
				g = r("./src/reddit/actions/subredditDuplicates.ts"),
				j = r("./src/config.ts"),
				_ = r("./src/lib/constants/index.ts"),
				I = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				v = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				y = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				T = r("./src/reddit/models/User/index.ts"),
				S = r("./src/reddit/selectors/contentControls.ts"),
				E = r("./src/reddit/selectors/postCollection.ts"),
				C = r("./src/reddit/selectors/postCreations.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				A = r("./src/reddit/selectors/profile.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts");
			const R = e => {
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
					return Object(c.q)(r)
				},
				P = "POST_CREATION__PAGE_PENDING",
				w = "POST_CREATION__PAGE_LOADED",
				k = "POST_CREATION__PAGE_FAILED",
				D = Object(i.a)(P),
				U = Object(i.a)(w),
				G = Object(i.a)(k),
				F = () => async (e, t) => {
					const r = t(),
						n = Object(C.a)(r);
					n !== Object(C.pb)(r) && e(Object(p.g)({
						submissionType: n
					}))
				}, q = e => async (t, r, n) => {
					const {
						collectionId: s,
						profileName: i,
						subredditName: c
					} = e, u = Object(d.a)(e), b = r(), m = b.creations.api.page.pending[u], p = b.creations.api.page.fetched[u], g = b.creations.api.page.error[u];
					if (m) return;
					if (p && !g) return void t(F());
					const v = [];
					t(D({
						key: u
					}));
					let E = c;
					!c && i && (E = `u_${i}`), v.push(((e, t) => Object(I.a)(e, {
						method: _.ob.GET,
						endpoint: Object(h.a)(`${j.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: E,
						collectionId: s
					})), i && (v.push(t(f.d(i))), v.push(t(f.b(i))));
					const [C] = await Object(y.a)("postCreation", () => Promise.all(v));
					if (C.ok) {
						const e = C.body,
							{
								posts: n = {}
							} = e;
						if (t(U({
								key: u,
								meta: b.meta,
								...e,
								posts: n
							})), !Object(L.S)(r())) return;
						t(F());
						const s = [];
						s.push(t(l.o()));
						const i = Object(L.m)(r());
						if (i && i.hasUserProfile && s.push(t(f.d(Object(T.e)(i)))), c && !Object(o.a)(c)) {
							s.push(t(O.o(c))), !!Object(S.b)(r(), {
								subredditName: c
							}) || s.push(t(Object(a.a)(c)))
						}
						await Promise.all(s)
					} else t(G({
						error: C.error,
						key: u
					}))
				}, M = e => async (t, r) => {
					const {
						subredditName: o,
						profileName: i
					} = e.params, d = e.queryParams, c = d.collection;
					if (await t(q({
							collectionId: c,
							profileName: i,
							subredditName: o
						})), !Object(L.S)(r())) return void Object(v.a)(t, r());
					let a;
					if (o ? (a = Object(N.C)(r(), {
							subredditName: o
						}), await t(Object(u.a)({
							subredditName: o
						}))) : i && (a = Object(A.k)(r(), {
							profileName: i
						})), d.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: o
						} = e, i = [];
						let d;
						s ? d = Object(N.I)(n(), s) : o && (d = Object(L.ob)(n(), {
							userName: o
						})), d && i.push(r(Object(g.b)(d, t))), i.push(r(Object(m.P)(t))), await Promise.all(i);
						const c = Object(x.f)(n(), {
							postId: t
						});
						r(Object(p.m)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, d.source_id));
					else if (c) {
						const o = Object(E.q)(r(), {
							collectionId: c
						});
						a && o && o.subredditId === a.id || t(Object(n.c)(Object(s.a)(e.url, ["collection"])))
					}
					t(b.n({
						title: R(r())
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
				o = r("./src/reddit/actions/profile/index.ts"),
				i = r("./src/config.ts"),
				d = r("./src/lib/constants/index.ts"),
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
					t(o.d(p));
					const v = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: d.ob.GET
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
				return ht
			})), r.d(t, "handleSubredditPageApiError", (function() {
				return vt
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return yt
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return Tt
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return St
			})), r.d(t, "subredditPending", (function() {
				return Et
			})), r.d(t, "subredditLoaded", (function() {
				return Ct
			})), r.d(t, "subredditFailed", (function() {
				return xt
			})), r.d(t, "addAdditionalInformationForAGatewayResponse", (function() {
				return At
			})), r.d(t, "subredditDataRequested", (function() {
				return Lt
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return Rt
			})), r.d(t, "makeSubredditPageKey", (function() {
				return wt
			})), r.d(t, "subredditRequested", (function() {
				return kt
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return Dt
			})), r.d(t, "subredditInvalidateListing", (function() {
				return Ut
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeRequest/index.ts"),
				o = r("./node_modules/lodash/find.js"),
				i = r.n(o),
				d = r("./node_modules/lodash/pick.js"),
				c = r.n(d),
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
				C = r("./src/reddit/actions/externalAccount.ts"),
				x = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				A = r("./src/reddit/actions/gold/customEmojis.ts"),
				N = r("./src/reddit/actions/meta.ts"),
				L = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				R = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				P = r("./src/reddit/actions/onboarding/index.ts"),
				w = r("./src/reddit/actions/pages/search/index.ts"),
				k = r("./src/reddit/actions/platform.ts"),
				D = r("./src/reddit/actions/seo/linksModule.ts"),
				U = r("./src/reddit/actions/seo/topicLinks.ts"),
				G = r("./src/lib/makeGqlRequest/index.ts"),
				F = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				q = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				M = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				B = r("./src/reddit/selectors/widgets.ts");
			const Q = (e, t) => async (r, n) => {
				const s = n(),
					o = Object(M.X)(s, {
						subredditId: e
					}),
					i = Object(B.j)(s, {
						subredditId: e
					});
				o.isNSFW || (null == i ? void 0 : i.length) > 0 && i.some(e => "community-list" === e) || r(Object(D.e)({
					id: e,
					data: t
				}))
			}, z = (e, t) => async r => {
				t && r(Object(U.b)({
					id: e,
					data: t
				}))
			};
			var H = r("./src/reddit/actions/structuredStyles/index.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
				J = r("./src/reddit/actions/toaster.ts"),
				V = r("./src/reddit/helpers/localStorage/index.ts"),
				$ = r("./src/reddit/models/Subreddit/index.ts"),
				W = r("./src/reddit/models/Toast/index.ts"),
				Y = r("./src/reddit/routes/postCreation/constants.ts"),
				X = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				Z = r("./src/reddit/selectors/platform.ts"),
				ee = r("./src/reddit/selectors/user.ts");
			const te = () => async (e, t, r) => {
				const n = t(),
					s = Object(Z.e)(n);
				if (!s || s.type !== $.g.Public) return;
				const o = s.name,
					i = Object(Z.m)(n),
					d = Object(M.z)(n, {
						subredditName: o
					});
				if (!d) return;
				const {
					activity7Day: c
				} = d, u = !!c && c >= 51 && c <= 100, l = !o || Object(m.a)(o), b = i && i.urlParams.subredditName === o, p = Object(ee.S)(n), f = Object(X.c)(n, {
					subredditId: Object(M.I)(n, o)
				});
				if (l || b || Object(V.D)() || !u || !p || f) return;
				const O = Object(B.d)(t(), {
					subredditName: o
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(J.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${o}${Y.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: W.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(V.Ab)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${o} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var re = r("./src/reddit/actions/subreddit/questions.ts"),
				ne = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				se = r("./src/reddit/actions/subredditSettings.ts"),
				oe = r("./src/reddit/actions/tags/index.ts"),
				ie = r("./src/reddit/actions/userFlair/userFlair.ts"),
				de = r("./src/reddit/constants/history.ts"),
				ce = r("./src/reddit/constants/page.ts"),
				ae = r("./src/reddit/constants/parameters.ts"),
				ue = r("./src/reddit/constants/postLayout.ts"),
				le = r("./src/reddit/contexts/PageLayer/index.tsx"),
				be = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				me = r("./src/reddit/endpoints/governance/posts.ts"),
				pe = r("./src/reddit/endpoints/page/subredditPage.ts"),
				fe = r("./src/lib/base64/index.ts"),
				Oe = r("./src/reddit/constants/experiments.ts"),
				ge = r("./src/reddit/constants/graphql.ts"),
				je = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				_e = r("./src/reddit/selectors/adsSignals.ts"),
				Ie = r("./src/reddit/selectors/experiments/communityChat.ts"),
				he = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ve = r("./src/reddit/selectors/experiments/onboarding.ts"),
				ye = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var Te = r("./src/reddit/endpoints/profile/info.ts"),
				Se = r("./src/reddit/helpers/canonicalUrls.ts"),
				Ee = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				Ce = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				xe = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function Ae(e) {
				let {
					econLeaderboards: t,
					identity: r,
					trendingSubreddits: n
				} = e;
				const s = t.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(xe.b)(s, n, r)
			}
			var Ne = r("./src/reddit/helpers/graphql/normalizeChannelsFromGql/index.ts"),
				Le = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Re = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				Pe = r("./src/reddit/helpers/post/index.ts"),
				we = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				ke = r("./src/reddit/helpers/trackers/feed.ts"),
				De = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = r("./src/reddit/models/RichTextJson/index.ts"),
				Ge = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Fe = r("./src/reddit/selectors/communityFlairs.ts"),
				qe = r("./src/reddit/selectors/experiments/countrySites.ts"),
				Me = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Be = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Qe = r("./src/reddit/selectors/experiments/topPosts.ts"),
				ze = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				He = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Ke = r("./src/reddit/selectors/multireddit.ts"),
				Je = r("./src/reddit/selectors/posts.ts"),
				Ve = r("./src/reddit/endpoints/page/popularFeed.ts"),
				$e = r("./src/lib/initializeClient/installReducer.ts"),
				We = r("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Ye = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				Xe = r("./src/reddit/actions/communityChat/index.ts"),
				Ze = r("./src/reddit/components/CommunityChat/utils.ts"),
				et = r("./src/reddit/endpoints/devPlatform/index.ts"),
				tt = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				rt = r("./node_modules/@sentry/minimal/esm/index.js"),
				nt = r("./src/lib/env/index.ts"),
				st = r("./node_modules/lodash/cloneDeep.js"),
				ot = r.n(st);
			const it = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				dt = new Set(["posts.upvoteRatio", "posts.score", "posts.sendReplies", "posts.media", "posts.eventsOnRender", "posts.liveCommentsWebsocket", "posts.flair", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "posts.numComments", "posts.thumbnail.url", "posts.contentCategories", "subreddits.acceptFollowers", "subreddits.communityIcon", "subreddits.primaryColor", "subreddits.isChatPostFeatureEnabled", "subreddits.allowChatPostCreation", "subreddits.icon.url", "subreddits.subscribers", "token", "recentPostIds", "trendingSubredditIds", "posts.gildings", "posts.goldCount", "listingSort", "posts.discussionType", "posts.topAwardedType", "posts.allAwardings", "posts.audioRoom", "posts.approvedAtUTC", "posts.approvedBy", "posts.bannedAtUTC", "posts.bannedBy", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isRemoved", "posts.isSpam", "posts.isReactAllowed", "posts.reactedFrom", "posts.attributionInfo", "posts.modReports", "posts.numReports", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.removedBy", "posts.removedByCategory", "posts.userReports", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "subreddits.devPlatformMetadata"]);
			var ct = r("./node_modules/deep-diff/index.js");
			const at = (e, t) => {
					e.postIds = t, e.posts = t.reduce((t, r) => (e.posts[r] && (t[r] = e.posts[r]), t), {}), e.postInstances = t.reduce((t, r) => (e.postInstances[r] && (t[r] = e.postInstances[r]), t), {});
					const r = Object.keys(e.posts).map(t => e.posts[t].belongsTo.id);
					e.subreddits = r.reduce((t, r) => (e.subreddits[r] && (t[r] = e.subreddits[r]), t), {}), e.postFlair = r.reduce((t, r) => (e.postFlair[r] && (t[r] = e.postFlair[r]), t), {})
				},
				ut = (e, t, r) => {
					const n = {},
						s = {};
					Object.keys(e).forEach(o => {
						if (!r.has(o)) {
							const i = e[o] || {},
								d = t[o] || {};
							n[o] = {}, s[o] = 0, Object.keys(i).forEach(e => {
								const t = i[e],
									c = d[e],
									a = Object(ct.diff)(t, c, {
										prefilter: (e, t) => (e => {
											let {
												ignorePaths: t,
												path: r,
												k: n,
												key: s
											} = e;
											return t.has(`${n}.${r.length?`${r.join(".")}.`:""}${s}`) || t.has(`${n}.${s}`)
										})({
											ignorePaths: r,
											path: e,
											k: o,
											key: t
										}),
										normalize: (e, t, r, n) => r || n ? [r, n] : [r, r]
									});
								s[o] = a ? s[o] + a.length : (null == s ? void 0 : s[o]) || 0, a && (n[o][e] = {
									gatewayThing: t,
									gqlThing: c,
									diffResult: a
								})
							})
						}
					});
					const o = Object.keys(s).reduce((e, t) => e += s[t], 0);
					return {
						allDiffs: n,
						issueCounts: s,
						totalIssues: o
					}
				},
				lt = (e, t) => {
					const r = ((e, t) => {
							const r = e.postIds;
							return t.postIds.reduce((e, t, n) => {
								const s = r.findIndex(e => t === e);
								return s > 0 ? e.found[t] = {
									gateway: s,
									gql: n
								} : e.notFound.push(t), e
							}, {
								found: {},
								notFound: []
							})
						})(e, t),
						n = Object.keys(r.found).sort();
					return at(e, n), at(t, n), {
						gatewayResponse: e,
						normalizedGqlResponse: t,
						positionDiffs: r
					}
				},
				bt = e => {
					let {
						gatewayResponse: t,
						normalizedGqlResponse: r,
						ignorePaths: n,
						normalizeFunction: s
					} = e;
					if (s) {
						const e = s(t, r);
						return {
							...ut(e.gatewayResponse, e.normalizedGqlResponse, n),
							positionDiffs: e.positionDiffs
						}
					}
					return ut(t, r, n)
				};
			var mt = r("./src/reddit/helpers/locales.ts"),
				pt = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				ft = r("./src/reddit/selectors/experiments/popularGqlMigration.ts"),
				Ot = r("./node_modules/reselect/es/index.js"),
				gt = r("./src/reddit/helpers/chooseVariant/index.ts");
			const jt = Object(Ot.a)(e => Object(gt.c)(e, {
				experimentEligibilitySelector: gt.a,
				experimentName: Oe.nc
			}), e => e === Oe.Id);
			var _t = r("./src/reddit/selectors/features/communityChat/index.ts"),
				It = r("./src/reddit/selectors/meta.ts");

			function ht(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object($e.a)({
				features: {
					modUserNotes: We.a
				}
			});
			const vt = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: n,
							reason: s
						}
					} = e, o = n ? n.account : void 0, i = n && n.features || void 0, d = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (s === $.f.NotFoundSubreddit) r(y.u({
							account: o,
							features: i,
							subredditName: d
						}));
						else if (s === $.f.BannedSubreddit) {
						const e = n ? n.banMessage || n.ban_message : void 0;
						r(y.s({
							banMessage: e,
							account: o,
							features: i,
							subredditName: d
						}))
					}
					if (451 === e.status && r(y.t({
							account: o,
							features: i,
							subredditName: d
						})), 403 === e.status)
						if (s === $.f.GoldSubreddit) r(y.x({
							account: o,
							features: i,
							subredditName: d
						}));
						else if (s === $.f.PrivateSubreddit) r(y.y({
						account: o,
						features: i,
						subredditDescription: n.description || "",
						subredditName: d,
						isContributorRequestsDisabled: !!n.isContributorRequestsDisabled,
						isContributorRequestTimestamp: n.isContributorRequestTimestamp ? parseInt(n.isContributorRequestTimestamp, 10) : void 0,
						subredditId: n.id
					}));
					else if (s === $.f.QuarantinedSubreddit) {
						const e = !n || void 0 === n.quarantineRequiresEmailOptin || n.quarantineRequiresEmailOptin;
						r(y.A({
							account: o,
							features: i,
							subredditName: d,
							quarantineRequiresEmail: e,
							quarantineMessage: n.quarantineMessage,
							quarantineMessageHtml: n.quarantineMessageHtml || "",
							quarantineMessageRTJson: n.quarantineMessageRTJson || Ue.i
						}))
					} else if (s === $.f.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						} = n;
						r(y.w({
							account: o,
							features: i,
							subredditName: d,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: s
						}))
					}
				}
			}, yt = "PAGE__SUBREDDIT_PENDING", Tt = "PAGE__SUBREDDIT_LOADED", St = "PAGE__SUBREDDIT_FAILED", Et = Object(p.a)(yt), Ct = Object(p.a)(Tt), xt = Object(p.a)(St), At = async e => {
				let {
					subredditName: t,
					subredditsResponse: r,
					extraArgs: n,
					state: s,
					isPopular: o,
					isInGqlSubredditExperiment: i,
					isInDevPlatformExperiment: d
				} = e;
				if (!r || i) return r;
				const c = {
						...r
					},
					a = o ? null : Object(Pe.a)(n.gqlContext, c.posts),
					u = Object(tt.a)(n.apiContext(), c.posts, s),
					l = d ? Object(et.a)(n.gqlContext(), {
						subredditName: t
					}) : null;
				let b, m, p;
				if ([b, m, p] = await Promise.all([a, u, l]), b && (c.posts = b), m && (c.posts = m), p) {
					const e = Nt(c.subreddits, t);
					e && c.subreddits[e] && (c.subreddits[e].devPlatformMetadata = p)
				}
				return c
			}, Nt = (e, t) => {
				var r;
				return null === (r = i()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
			}, Lt = (e, t, r, o) => async (i, d, c) => {
				var a, l, b, p, f, O, g, j, y, T, R, w, D, U, B, H, V, $, Y, X, te, ce, ae, Se, Ee, Ce, xe, Pe;
				const De = d(),
					Ue = Object(ee.R)(De) || Object(ee.S)(De);
				if (Object(I.a)(De.listings.postOrder.api.pending, e)) return;
				const Fe = null === (l = null === (a = Object(Z.b)(De)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
					{
						currentPage: Be
					} = De.platform,
					{
						countryCode: Qe,
						languageCode: Ke
					} = (null == Be ? void 0 : Be.urlParams) || {},
					Je = Object(m.a)(t, {
						countryCode: Qe,
						languageCode: Ke
					}),
					$e = Object(m.c)(t, {
						countryCode: Qe,
						languageCode: Ke
					}),
					We = (Object(m.b)(t, {
						countryCode: Qe,
						languageCode: Ke
					}) || $e) && De.posts.recent.length ? {
						...r,
						recentPostIds: De.posts.recent
					} : r;
				We.layout = ue.e[Object(le.U)(De, {})], $e && (We.forceGeopopular = !0), i(Et({
					key: e
				}));
				const Ze = !Je && Object(Z.l)(De) && Object(Me.b)(De),
					et = $e && (Object(ft.a)(De) || Object(ft.b)(De)),
					tt = $e && jt(De);
				let st, ct;
				if ((et || tt) && (st = Object(_.i)(() => Object(Ve.a)(c.gqlContext(), Object(pe.c)(De, t, We, !0)), {
						name: Ze ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Fe,
						isLoggedIn: Ue
					})), et) ct = st;
				else if (r.sort === u.bb.AWARDED && $e) ct = Object(be.a)(c.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: Ae(t.data)
					}
				});
				else {
					const e = Ze ? () => Object(pe.b)(c.gqlContext(), Object(pe.c)(De, t, We, !0), Ue) : () => Object(pe.a)(c.apiContext(), t, We);
					ct = Object(_.i)(e, {
						name: Ze ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Fe,
						isLoggedIn: Ue
					})
				}
				const at = Object(M.W)(d(), {
						subredditId: Object(M.I)(d(), t)
					}).length > 0,
					ut = Object(_.i)(() => (async function(e, t) {
						return Object(G.a)(e, {
							...ye,
							variables: t
						})
					})(c.gqlContext(), ((e, t) => {
						let {
							after: r,
							isMobile: n,
							subredditName: s,
							isFake: o,
							isLoggedIn: i,
							layout: d,
							limit: c,
							hasRules: a,
							sort: u,
							t: l
						} = t;
						var b, m;
						const p = Object(ve.k)(e),
							f = !!p && !Object(Oe.hg)(p) && (o || p === Oe.hb.Community),
							{
								adsSeenCount: O,
								totalPostsSeenCount: g,
								sessionStartTime: j
							} = Object(_e.a)(e),
							_ = Object(he.c)(e),
							I = Object(Ie.a)(e),
							h = {
								subredditName: s,
								isFake: o,
								sort: u,
								adContext: {
									layout: d ? d.toUpperCase() : ge.a.Card,
									clientSignalSessionData: {
										adsSeenCount: O,
										totalPostsSeenCount: g,
										sessionStartTime: j
									}
								},
								includeAchievementFlairs: !o,
								includeCustomEmojis: !o,
								includeIdentity: i,
								includeInterestTopics: f,
								includeQuestions: i && !o,
								includeRules: !o && !a,
								includeRedditorKarma: i && !(null === (m = null === (b = e.user.account) || void 0 === b ? void 0 : b.karma) || void 0 === m ? void 0 : m.total),
								includeSubredditLinks: !i,
								includeSubredditRankings: _,
								includeSubredditChannels: I,
								includeTopicLinks: !i
							};
						return u && (h.sort = u.toUpperCase()), l && (h.range = l.toUpperCase()), n ? h.pageSize = Object(je.a)(d) : c && (h.pageSize = c), r && (h.after = Object(fe.a)(r)), h
					})(De, {
						after: r.after,
						isLoggedIn: Ue,
						subredditName: t,
						hasRules: at,
						isFake: Je,
						isMobile: r.isMobile,
						layout: r.layout,
						limit: r.limit,
						sort: r.sort,
						t: r.t
					})), {
						name: "fetchSubredditPageExtra",
						page: Fe,
						isLoggedIn: Ue
					}),
					Ot = Object(Ye.a)();
				let gt, _t;
				Ze ? gt = await ct : [gt, _t] = await Promise.all([ct, ut]);
				const yt = _t && Object(s.c)(_t) ? _t.body.data : null;
				if (tt) {
					const e = await st;
					! function(e) {
						let {
							gatewayResponse: t,
							normalizedGqlResponse: r,
							rawGqlResponse: n,
							ignorePaths: s = it,
							normalizeFunction: o
						} = e;
						const i = ot()(t),
							d = ot()(r);
						if (Object(nt.a)()) {
							console.group("GQL Popular Shadowtest"), console.groupCollapsed("raw gql response"), console.log(n), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(r), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
							const e = bt({
									gatewayResponse: i,
									normalizedGqlResponse: d,
									ignorePaths: s,
									normalizeFunction: o
								}),
								{
									allDiffs: c,
									issueCounts: a,
									totalIssues: u
								} = e;
							e.positionDiffs && (console.groupCollapsed("position errors"), console.log(e.positionDiffs), console.groupEnd()), console.groupCollapsed(`diff: ${u} issues`), console.log("lhs = gateway\nrhs = gql");
							for (const t in c) {
								if (console.groupCollapsed(`${t}: ${a[t]} issues`), a[t] > 0)
									for (const e in c[t]) {
										const r = c[t][e].diffResult;
										console.groupCollapsed(`${e}: ${r.length||0} issues`), console.log(r), console.log({
											gql: c[t][e].gqlThing,
											gateway: c[t][e].gatewayThing
										}), console.groupEnd()
									}
								console.groupEnd()
							}
							console.groupEnd(), console.groupEnd()
						}
						if (Object(nt.b)() || Object(nt.c)()) {
							const e = bt({
								gatewayResponse: i,
								normalizedGqlResponse: d,
								ignorePaths: s,
								normalizeFunction: o
							});
							rt.l(t => {
								t.setExtra("info", e), t.setExtra("bypassSampling", !0), rt.d("GQL Popular Shadowtest Diff")
							})
						}
					}({
						gatewayResponse: gt.body,
						normalizedGqlResponse: e.body,
						rawGqlResponse: e,
						ignorePaths: dt,
						normalizeFunction: lt
					})
				}
				let Tt = gt.body;
				const St = (null == Tt ? void 0 : Tt.subreddits) ? Nt(Tt.subreddits, t) : null,
					Rt = Object(pt.a)(De);
				Tt = await At({
					subredditName: t,
					subredditsResponse: Tt,
					isInGqlSubredditExperiment: Ze,
					extraArgs: c,
					isPopular: $e,
					state: De,
					isInDevPlatformExperiment: Rt
				}), i(k.o(gt.status));
				const Pt = `error-${e}`,
					wt = Je || St;
				if (gt.ok && wt || $e && Tt) {
					if (($e || !Je && St) && Tt.geoFilter && i(Object(N.k)(Tt.geoFilter)), !Je && St) {
						let e, t;
						e = Ze ? Tt : Object(x.b)(null == yt ? void 0 : yt.subredditInfoByName), Object(x.a)(i, St, e), t = Ze ? Tt : Object(A.b)(null == yt ? void 0 : yt.subredditInfoByName), Object(A.a)(i, St, t);
						const r = (null === (p = null === (b = null == Tt ? void 0 : Tt.subredditAboutInfo) || void 0 === b ? void 0 : b[St]) || void 0 === p ? void 0 : p.detectedLanguage) || (null === (f = null == yt ? void 0 : yt.subredditInfoByName) || void 0 === f ? void 0 : f.detectedLanguage);
						Object(It.d)(De) && r && Object(qe.f)(De) && await Object(mt.a)(r, i), Tt.subredditAboutInfo[St].detectedLanguage = r, Ze ? i(Object(E.n)(St, Tt.predictionTournaments || [])) : (null == yt ? void 0 : yt.subredditInfoByName) && i(Object(E.n)(St, yt.subredditInfoByName.predictionTournaments || []))
					}
					let n;
					const s = null === (O = Tt.postIds) || void 0 === O ? void 0 : O.filter(e => !!Tt.posts[e].isMeta);
					if (s && s.length && St) {
						const e = Object(_.i)(() => Object(me.a)(c.apiContext(), St, s), {
								name: "getGovernanceData",
								page: Fe,
								isLoggedIn: Ue
							}),
							t = await e;
						t.ok && (n = t.body)
					}
					if (St) {
						const e = (null === (j = null === (g = null == Tt ? void 0 : Tt.subredditAboutInfo) || void 0 === g ? void 0 : g[St]) || void 0 === j ? void 0 : j.isEligibleForContentBlocking) || (null === (y = null == yt ? void 0 : yt.subredditInfoByName) || void 0 === y ? void 0 : y.isEligibleForContentBlocking);
						Tt.subredditAboutInfo[St].isEligibleForContentBlocking = e;
						const t = (null === (R = null === (T = null == Tt ? void 0 : Tt.subredditAboutInfo) || void 0 === T ? void 0 : T[St]) || void 0 === R ? void 0 : R.isMediaInCommentsSettingShown) || (null === (w = null == yt ? void 0 : yt.subredditInfoByName) || void 0 === w ? void 0 : w.isMediaInCommentsSettingShown);
						Tt.subredditAboutInfo[St].isMediaInCommentsSettingShown = t;
						const r = Ze ? null : null === (D = null == yt ? void 0 : yt.subredditInfoByName) || void 0 === D ? void 0 : D.directoryRankings;
						r && (Tt.subredditAboutInfo[St].directoryRankings = r)
					}
					if (St) {
						const e = () => {
								var e;
								const t = null === (e = null == yt ? void 0 : yt.subredditInfoByName) || void 0 === e ? void 0 : e.channels;
								return t ? Object(Ne.a)(t) : {
									channels: {},
									channelIds: []
								}
							},
							{
								channels: t,
								channelIds: r
							} = Ze ? Tt : e();
						t && r && i(Object(Xe.c)({
							subredditId: St,
							channels: t,
							channelIds: r
						}))
					}
					if (yt) {
						const e = null === (B = null === (U = yt.identity) || void 0 === U ? void 0 : U.redditor) || void 0 === B ? void 0 : B.karma,
							t = {
								karma: {
									...(null === (H = De.user.account) || void 0 === H ? void 0 : H.karma) || Te.a,
									...e
								}
							};
						Tt.account && Object.assign(Tt.account, t)
					}
					if (St) {
						let e, t;
						if (Ze) {
							const r = Tt.subredditAboutInfo[St];
							e = null == r ? void 0 : r.notificationLevel, t = null == r ? void 0 : r.myRedditSettings
						} else if (ht(yt)) {
							const r = yt.subredditInfoByName;
							e = null == r ? void 0 : r.notificationLevel, t = null == r ? void 0 : r.myRedditSettings
						}
						Tt.subredditAboutInfo[St].notificationLevel = e, Tt.subredditAboutInfo[St].myRedditSettings = t
					}
					if (St) {
						let e;
						ht(yt) && (e = null === (V = yt.subredditInfoByName) || void 0 === V ? void 0 : V.isMuted), Ze && (e = null === ($ = Tt.subredditAboutInfo[St]) || void 0 === $ ? void 0 : $.isMuted), Tt.subredditAboutInfo[St].isMuted = e
					}
					const a = null === (Y = Tt.subredditPermissions) || void 0 === Y ? void 0 : Y.posts;
					!Ze && a && i(Object(L.a)({
						postIds: Tt.postIds
					}));
					let u = null == Tt ? void 0 : Tt.interestTopicRecommendations;
					if (!u && (null == yt ? void 0 : yt.interestTopics)) {
						const e = Object(Le.a)(yt.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && i(Object(P.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), i(Ct({
						key: e,
						meta: De.meta,
						governance: n,
						correlationId: Ot,
						...Tt,
						postIds: Tt.postIds
					}));
					const l = null === (te = null === (X = Object(Z.b)(De)) || void 0 === X ? void 0 : X.locationState) || void 0 === te ? void 0 : te[de.b.FeedLoadReason];
					if (Object(ke.b)(r.isRefresh ? de.a.UserRefresh : null != l ? l : de.a.InitialLoad)(d()), !Je) {
						const e = Object(M.I)(d(), t);
						Ze && Tt.subredditRules ? i(K.t({
							rules: {
								rules: Tt.subredditRules
							},
							subredditId: e
						})) : (null === (ce = null == yt ? void 0 : yt.subreddit) || void 0 === ce ? void 0 : ce.rules) && i(K.t({
							rules: Object(Re.a)(yt.subreddit.rules),
							subredditId: e
						}));
						const r = Object(He.g)(d(), {
								subredditId: e
							}),
							n = null === (ae = null == Tt ? void 0 : Tt.userFlair) || void 0 === ae ? void 0 : ae[e];
						Ze && e && (r || (null == n ? void 0 : n.applied) || (null === (Se = null == n ? void 0 : n.permissions) || void 0 === Se ? void 0 : Se.canUserChange)) && i(Object(ie.fetchUserFlairFromGql)(e, t));
						const s = Object(v.c)(Tt.posts, e),
							o = Object(v.b)(Tt.structuredStyles),
							c = (o ? Object(v.d)(o) : []).concat(s);
						i(Object(v.a)(c, e))
					}
					if (o && i(J.g(Pt)), i(Object(h.b)(Ge.a.SUBREDDIT)), i(Object(C.p)()), St) {
						let e, r, n;
						if (Ze ? (e = Tt.questions, r = Tt.subredditLinks, n = Tt.subredditTopicLinks) : (e = null == yt ? void 0 : yt.subredditInfoByName, r = Object(F.a)({
								data: {
									subredditInfoById: null == yt ? void 0 : yt.subredditInfoByName
								}
							}), n = Object(q.a)({
								data: {
									subredditInfoById: null == yt ? void 0 : yt.subredditInfoByName
								}
							})), Object(re.a)(i, St, e), i(Q(St, r)), i(z(St, n)), !Ze && (null === (Ce = null === (Ee = null == yt ? void 0 : yt.subredditInfoByName) || void 0 === Ee ? void 0 : Ee.elements) || void 0 === Ce ? void 0 : Ce.edges)) {
							const e = (null === (Pe = null === (xe = null == yt ? void 0 : yt.subredditInfoByName) || void 0 === xe ? void 0 : xe.elements) || void 0 === Pe ? void 0 : Pe.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							i(Object(ne.e)({
								subredditId: St,
								nodes: e
							}))
						} else if (Ze && (null == Tt ? void 0 : Tt.postIds)) {
							const e = Tt.postIds.map(e => null == Tt ? void 0 : Tt.posts[e].lastAuthorModNote);
							e && i(Object(ne.e)({
								subredditId: St,
								nodes: e
							}))
						}
						const s = [Object(_.i)(() => i(Object(S.a)({
							subredditId: St,
							postIds: Tt.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: Fe,
							isLoggedIn: Ue
						})];
						if (Object(ze.a)(d(), {
								subredditId: St
							})) {
							const e = Object(_.i)(() => i(Object(se.h)(t, St)), {
									name: "subredditSettingsRequested",
									isLoggedIn: Ue,
									page: Fe
								}),
								r = Object(_.i)(() => i(Object(oe.g)(St, we.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: Ue,
									page: Fe
								});
							s.push(e, r)
						}
						await Promise.all(s)
					}
				} else {
					const s = gt.ok ? void 0 : gt.error;
					if (Object(ke.a)(s ? `${gt.status||"000"}: ${s.type}` : "000: UNKNOWN_ERROR")(d()), 403 === gt.status || 404 === gt.status || 451 === gt.status) return void i(vt(gt, t));
					i(xt({
						error: !gt.ok && gt.error || {
							type: u.L.NOT_FOUND_ERROR
						},
						key: e,
						...Tt
					})), o && i(J.f({
						id: Pt,
						kind: W.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: Lt(e, t, r, o)
					}))
				}
			}, Rt = (e, t, r) => async (n, s) => {
				const o = s(),
					i = Object(f.a)(e, t.sort, t);
				Object(Je.z)(o, {
					listingKey: i
				}).length > 0 || await n(Lt(i, e, t, r))
			}, Pt = (e, t, r, n) => {
				const s = Object(qe.b)(e);
				if (Object(m.a)(t, {
						countryCode: r,
						languageCode: n
					})) {
					if (Object(b.a)(t)) {
						return Object(Ke.a)(e, {
							listingName: t
						}).displayText
					}
					if (s) return Object(j.a)(e, Object(g.g)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case ce.d.Popular:
							return "r/popular";
						case ce.d.All:
							return "r/all"
					}
				}
				const o = Object(M.ab)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(M.z)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(j.a)(e, o, n)
				}
				return o
			}, wt = (e, t, r, n) => n ? Object(O.b)(e.subredditName, void 0, n) : Object(f.a)(e.subredditName, t, r), kt = (e, t) => async (r, n) => {
				var s, o, i;
				const {
					countryCode: d,
					languageCode: b,
					channelId: p
				} = e.params, g = Object(l.e)(e.params), {
					styling: j
				} = e.queryParams, y = n(), S = Object(Ee.a)(e.params, y), E = () => {
					if (p) r(Object(Xe.d)(p));
					else {
						const e = Object(_t.b)(n(), G);
						if (e) {
							const t = Object(Ze.a)(e.id, e.name);
							r(Object(a.c)(t)), r(Object(Xe.d)(e.id))
						}
					}
				};
				if ("Popular" === g) return void r(Object(a.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === g) return void r(Object(a.c)(e.url.replace("r/All", "r/all")));
				const x = Object(O.d)(e.queryParams, Object(ee.mb)(y)),
					A = wt({
						subredditName: g,
						countryCode: d,
						languageCode: b
					}, S, e.queryParams, x),
					N = S,
					L = Object(I.a)(y.listings.postOrder.api.error, A),
					P = Object(I.a)(y.listings.postOrder.api.pending, A);
				let D = !!Object(I.a)(y.listings.postOrder.ids, A);
				const U = Object(I.a)(y.listings.postOrder.listingSort, A);
				U && U.hasChanged && (D = !1);
				let G = Object(M.I)(y, g);
				const F = (e, t) => "true" === j && ((e, t) => Object(He.b)(De.c.config)(e, {
						subredditId: t
					}) || Object(He.b)(De.c.flair)(e, {
						subredditId: t
					}))(e, t),
					q = ae.J in e.queryParams && e.queryParams[ae.J].toUpperCase() || "",
					B = q in u.oc && u.oc[q];
				if (P || D && !L && !t) {
					if (F(y, G) && r(H.i(G)), D) {
						const t = Pt(n(), g, d, b);
						r(k.n({
							title: t
						})), (null === (s = y.listings.postOrder.correlationIds) || void 0 === s ? void 0 : s[A]) && r(k.p({
							correlationId: y.listings.postOrder.correlationIds[A]
						})), Object(Se.g)(n(), r, e), window.addEventListener("load", () => {
							r(Object(C.p)())
						}), y.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(h.b)(Ge.a.SUBREDDIT))
						}), r(te())
					}
					return Object(Be.e)(n()) && r(Object(R.a)()), void(Object(Ie.b)(y) && E())
				}
				r(T.g());
				const Q = null === (i = null === (o = Object(Z.b)(y)) || void 0 === o ? void 0 : o.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
					z = Object(ee.S)(n());
				if (x) {
					const e = Object(_.i)(() => r(Object(w.d)({
						key: A,
						options: x,
						subredditName: g
					})), {
						name: "searchDataRequested",
						isLoggedIn: z,
						page: Q
					});
					await e
				} else {
					const t = {
						...c()(e.queryParams, [...ae.q, ...ae.p, ae.l]),
						sort: N,
						t: Object(Ce.a)(N, B)
					};
					await r(Lt(A, g, t, !0))
				}
				const K = y.platform.currentPage,
					J = Object(Qe.d)(y, {
						pageLayer: K
					});
				if (Object(Qe.a)(J) || Object(Qe.b)(J) || Object(Qe.c)(J)) {
					const e = Object(f.a)(g, u.bb.TOP, {
							t: u.oc.WEEK
						}),
						t = {
							sort: u.bb.TOP,
							t: u.oc.WEEK
						};
					await r(Lt(e, g, t, !1))
				}
				if (Object(Be.e)(n()) && r(Object(R.a)()), G = G || Object(M.I)(n(), g), !Object(Fe.a)(y, G) && !Object(m.a)(g, {
						countryCode: d,
						languageCode: b
					})) {
					const e = Object(_.i)(() => r(Object(v.e)(g)), {
						name: "getTopCommunityFlair",
						page: Q,
						isLoggedIn: z
					});
					await e
				}
				F(n(), G) && r(H.i(G)), Object(Se.g)(n(), r, e);
				const V = Pt(n(), g);
				r(k.n({
					title: V
				})), r(te()), Object(Ie.b)(y) && E()
			}, Dt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", Ut = Object(p.a)(Dt)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "K", (function() {
				return n
			})), r.d(t, "L", (function() {
				return s
			})), r.d(t, "l", (function() {
				return o
			})), r.d(t, "m", (function() {
				return i
			})), r.d(t, "x", (function() {
				return d
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
				return C
			})), r.d(t, "R", (function() {
				return x
			})), r.d(t, "T", (function() {
				return A
			})), r.d(t, "U", (function() {
				return N
			})), r.d(t, "V", (function() {
				return L
			})), r.d(t, "W", (function() {
				return R
			})), r.d(t, "X", (function() {
				return P
			})), r.d(t, "Y", (function() {
				return w
			})), r.d(t, "Z", (function() {
				return k
			})), r.d(t, "r", (function() {
				return D
			})), r.d(t, "E", (function() {
				return U
			})), r.d(t, "u", (function() {
				return G
			})), r.d(t, "v", (function() {
				return F
			})), r.d(t, "t", (function() {
				return q
			})), r.d(t, "w", (function() {
				return M
			})), r.d(t, "P", (function() {
				return B
			})), r.d(t, "o", (function() {
				return Q
			})), r.d(t, "y", (function() {
				return z
			})), r.d(t, "db", (function() {
				return H
			})), r.d(t, "J", (function() {
				return K
			})), r.d(t, "a", (function() {
				return J
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
				o = "POST_CREATION_EDIT_COMPLETE",
				i = "POST_CREATION_EDIT_FAILED",
				d = "POST_CREATION_PENDING_EDIT",
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
				C = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				x = "POST_CREATION__TOGGLE_IS_CHANGED",
				A = "POST_CREATION__TOGGLE_IS_GOV",
				N = "POST_CREATION__TOGGLE_IS_NSFW",
				L = "POST_CREATION__TOGGLE_IS_OC",
				R = "POST_CREATION__TOGGLE_IS_POLL",
				P = "POST_CREATION__TOGGLE_IS_SPOILER",
				w = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				k = "POST_CREATION__TOGGLE_SEND_REPLIES",
				D = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				U = "POST_CREATION__RESET_FORM",
				G = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				q = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				M = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				Q = "POST_CREATION__FAILED",
				z = "POST_CREATION__POLL_FAILED",
				H = "POST_CREATION__VALIDATION_FAILED",
				K = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				J = "POST_CREATION__CAPTCHA_REQUIRED",
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
				return C
			})), r.d(t, "o", (function() {
				return A
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "g", (function() {
				return U
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "u", (function() {
				return q
			})), r.d(t, "t", (function() {
				return M
			})), r.d(t, "v", (function() {
				return B
			})), r.d(t, "w", (function() {
				return Q
			})), r.d(t, "x", (function() {
				return z
			})), r.d(t, "y", (function() {
				return H
			})), r.d(t, "A", (function() {
				return K
			})), r.d(t, "B", (function() {
				return J
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
				o = r("./node_modules/react-router-redux/es/index.js"),
				i = r("./src/lib/isUrl/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
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
			const C = Object(d.a)(E.n),
				x = Object(d.a)(E.D),
				A = (Object(d.a)(E.s), e => {
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
				N = Object(d.a)(E.b),
				L = Object(d.a)(E.c),
				R = Object(d.a)(E.d),
				P = Object(d.a)(E.e),
				w = Object(d.a)(E.f),
				k = Object(d.a)(E.g),
				D = Object(d.a)(E.h),
				U = Object(d.a)(E.i),
				G = Object(d.a)(E.j),
				F = Object(d.a)(E.q),
				q = Object(d.a)(E.S),
				M = Object(d.a)(E.R),
				B = (Object(d.a)(E.T), Object(d.a)(E.U)),
				Q = Object(d.a)(E.V),
				z = Object(d.a)(E.W),
				H = Object(d.a)(E.X),
				K = Object(d.a)(E.Y),
				J = Object(d.a)(E.Z),
				V = Object(d.a)(E.cb),
				$ = Object(d.a)(E.bb),
				W = Object(d.a)(E.ab),
				Y = Object(d.a)(E.r),
				X = s()((e, t) => {
					Object(i.a)(t) && e((e => async (t, r, n) => {
						let {
							apiContext: s
						} = n;
						const o = await Object(u.e)(s(), e);
						o.ok && o.body && o.body.json && o.body.json.data && t(x(o.body.json.data))
					})(t))
				}, 500),
				Z = e => async t => {
					t(R(e)), X(t, e)
				}, ee = Object(d.a)(E.E), te = (e, t) => async (r, n) => {
					r(ee()), r(e ? Object(o.b)(I.b) : Object(o.b)(Object(T.db)(n(), {
						pageLayer: t
					})))
				}, re = e => async t => {
					t(c.i(e))
				}, ne = e => async (t, r) => {
					const n = r(),
						s = Object(a.I)(e),
						o = Object(T.H)(n);
					if (s && o) {
						Object(h.a)(n) !== j.d && t(re(j.d))
					} else t(te(!1, e))
				}, se = e => async (t, r) => {
					const n = r();
					Object(y.m)(n, {
						subredditId: e
					}) ? t(c.i(j.a)) : t(c.i(j.c))
				}, oe = Object(d.a)(E.B), ie = Object(d.a)(E.C), de = Object(d.a)(E.z), ce = Object(d.a)(E.A), ae = e => async (t, r) => {
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
								o = Object(S.b)(r);
							e(me(t, n, s, void 0, o))
						} else Object(S.j)(r) && !Object(S.d)(r) && e(pe())
				}, le = ["torrents", "IsolatedVocals"], be = ["askreddit", "teenagers"], me = (e, t, r, n, s) => async (o, i, d) => {
					let {
						apiContext: c,
						gqlContext: a
					} = d;
					const u = i();
					if (Object(S.i)(u)) return;
					o(ie());
					const l = Object(p.c)(p.a.PostComposer),
						j = await ((e, t, r, n, s, o) => Object(b.a)(e, {
							...m,
							variables: {
								title: t,
								body: r,
								link: n,
								correlationId: s,
								confidenceWeight: o
							}
						}))(a(), e, t, r, l, s),
						I = {};
					let h = {};
					const y = {},
						T = {},
						E = [];
					if (!j.body || !j.ok) return o(ae(!1)), void o(de()); {
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
							d = s.map(e => {
								const t = e.name;
								return E.push(t), t
							});
						if (Object(v.b)(u) && (e => {
								const t = e.map(e => e.toLowerCase());
								let r = !1;
								return be.forEach(e => {
									t.includes(e) && (r = !0)
								}), r
							})(d)) return o(ae(!1)), o(oe({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(g.G)(i()), void o(de());
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
					o(ae(!1)), o(oe({
						subreddits: I,
						subredditsAboutInfo: h,
						unavailableSubreddits: y,
						recSubsDict: T,
						recSubsOrder: E
					})), 0 === Object(S.c)(i()).length && o(de())
				}, pe = () => async (e, t, r) => {
					let {
						apiContext: n,
						gqlContext: s
					} = r;
					const o = t();
					if (Object(S.i)(o)) return;
					e(ie());
					const i = {};
					let d = {};
					const c = {},
						a = {},
						u = [],
						m = await (e => Object(b.a)(e, {
							...l,
							variables: {
								recentSubreddits: []
							}
						}))(s());
					if (!m.ok || !m.body) return e(de()), void e(ae(!1)); {
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
								a[r.name] = {}, u.push(r.name), i[e.id] = e, d = {
									...d,
									...t
								}
							}
						})
					}
					e(ae(!1)), e(oe({
						subreddits: i,
						subredditsAboutInfo: d,
						unavailableSubreddits: c,
						recSubsDict: a,
						recSubsOrder: u
					})), 0 === Object(S.c)(t()).length && e(de())
				}
		},
		"./src/reddit/actions/recentSubreddits/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			}));
			const n = "SET_RECENT_SUBREDDITS",
				s = "SUBREDDIT_VISITED",
				o = "SUBREDDIT_SAVED",
				i = "COPY_SAVED_SUBREDDITS",
				d = "COPY_SAVED_ID_SUBREDDITS",
				c = 10
		},
		"./src/reddit/actions/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/goodContent/index.ts");
			const o = "FRONTPAGE_LINKS__REQUEST_LOADED",
				i = "SUBREDDIT_LINKS_LOADED",
				d = 10,
				c = Object(n.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				a = Object(n.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(n.a)(o),
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
				return o
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "SUBREDDIT_TOPIC_LINKS_LOADED",
				o = Object(n.a)(s)
		},
		"./src/reddit/actions/subreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "m", (function() {
				return W
			})), r.d(t, "l", (function() {
				return Y
			})), r.d(t, "k", (function() {
				return X
			})), r.d(t, "j", (function() {
				return Z
			})), r.d(t, "i", (function() {
				return ee
			})), r.d(t, "h", (function() {
				return te
			})), r.d(t, "d", (function() {
				return re
			})), r.d(t, "p", (function() {
				return ie
			})), r.d(t, "t", (function() {
				return de
			})), r.d(t, "o", (function() {
				return ue
			})), r.d(t, "r", (function() {
				return me
			})), r.d(t, "g", (function() {
				return pe
			})), r.d(t, "f", (function() {
				return fe
			})), r.d(t, "e", (function() {
				return Oe
			})), r.d(t, "q", (function() {
				return Ie
			})), r.d(t, "b", (function() {
				return he
			})), r.d(t, "c", (function() {
				return ve
			})), r.d(t, "a", (function() {
				return ye
			})), r.d(t, "u", (function() {
				return Ce
			})), r.d(t, "n", (function() {
				return xe
			})), r.d(t, "s", (function() {
				return Ae
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/listingSort/index.ts"),
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
				C = r("./src/reddit/endpoints/page/subredditPage.ts"),
				x = r("./src/reddit/endpoints/subreddit/about.ts"),
				A = r("./src/reddit/endpoints/subreddit/rules.ts"),
				N = r("./src/reddit/endpoints/user/preferences.ts"),
				L = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				R = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				P = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				w = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				D = r("./src/reddit/helpers/trackers/feed.ts"),
				U = r("./src/reddit/models/Subreddit/index.ts"),
				G = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				F = r("./src/reddit/models/Toast/index.ts"),
				q = r("./src/reddit/models/User/index.ts"),
				M = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				B = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = r("./src/reddit/selectors/profile.ts"),
				z = r("./src/reddit/selectors/subreddit.ts"),
				H = r("./src/reddit/selectors/user.ts"),
				K = r("./src/lib/isFakeSubreddit/index.ts"),
				J = r("./src/reddit/endpoints/page/popularFeed.ts"),
				V = r("./src/reddit/selectors/experiments/popularGqlMigration.ts");
			const $ = {},
				W = "SUBREDDIT__MODEL_SUCCEEDED",
				Y = "SUBREDDIT__MODEL_PENDING",
				X = "SUBREDDIT__MODEL_FAILED",
				Z = "SUBREDDIT__MORE_POSTS_PENDING",
				ee = "SUBREDDIT__MORE_POSTS_LOADED",
				te = "SUBREDDIT__MORE_POSTS_FAILED",
				re = "SUBREDDIT__META_FILTER_TOGGLED",
				ne = Object(c.a)(Z),
				se = Object(c.a)(ee),
				oe = Object(c.a)(te),
				ie = Object(c.a)(re),
				de = Object(c.a)(O.b),
				ce = Object(c.a)(O.c),
				ae = Object(c.a)(O.a),
				ue = (e, t) => async (r, n) => {
					await (t === U.g.User ? r(le(e)) : r(be(e)))
				}, le = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const o = Object(Q.o)(r(), e),
						i = await Object(A.c)(s(), e);
					if (i.ok) {
						const e = i.body;
						t(de({
							rules: e,
							subredditId: o
						}))
					}
				}, be = e => async (t, r, s) => {
					let {
						gqlContext: o
					} = s;
					const i = Object(z.I)(r(), e);
					t(ce());
					const d = await Object(A.b)(o(), e);
					if (d.ok) {
						const e = d.body;
						t(de({
							rules: e,
							subredditId: i
						}))
					} else {
						t(ae());
						const r = `error-block-${e}`;
						t(g.f({
							id: r,
							kind: F.b.Error,
							text: n.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, me = e => async (t, r, n) => {
					let {
						apiContext: s,
						gqlContext: c
					} = n;
					const {
						subredditName: l
					} = e;
					let m = e.t;
					const p = r(),
						O = Object(P.a)(e, p),
						g = p.platform.currentPage ? p.platform.currentPage.queryParams : {},
						{
							currentPage: _
						} = p.platform,
						{
							countryCode: S,
							languageCode: E
						} = (null == _ ? void 0 : _.urlParams) || {},
						x = Object(a.a)(l, O, {
							t: m,
							...g
						}),
						A = p.listings.postOrder.loadMore[x],
						N = p.listings.postOrder.listingSort[x];
					let w = O;
					if (N && !w) {
						const e = Object(d.d)(N.sort);
						w = e.sort, m = e.timeSort
					}
					const k = p.listings.postOrder.api.pending[x],
						{
							fetchedTokens: U
						} = p.listings.postOrder,
						G = !(!U[x] || !U[x][A.token]);
					if (k || G) return;
					if (w === i.bb.AWARDED && l === I.g) return;
					t(ne({
						key: x,
						fetchedToken: A.token
					}));
					const F = {
							after: A.token,
							dist: A.dist,
							forceGeopopular: l === I.d.Popular,
							layout: v.e[Object(y.U)(p, {})],
							sort: w,
							t: m,
							...o()(g, [...h.q, h.l])
						},
						q = !Object(K.a)(l, {
							countryCode: S,
							languageCode: E
						}) && Object(M.a)(p);
					let Q;
					Q = Object(K.c)(l, {
						countryCode: S,
						languageCode: E
					}) && (Object(V.a)(p) || Object(V.b)(p)) ? () => Object(J.a)(c(), Object(C.c)(p, l, F, !0)) : q ? () => Object(C.b)(c(), Object(C.c)(p, l, {
						...F,
						limit: v.a
					}), Object(H.bb)(p)) : () => Object(C.a)(s(), l, F);
					const $ = await Q(),
						W = {
							...$.body,
							...Object(R.a)(p, x, $.body)
						};
					if ($.ok) {
						if (!q) {
							const e = await Object(L.a)(s(), W.posts, p);
							W.posts = e
						}
						let e;
						const n = W.postIds.filter(e => !!W.posts[e].isMeta),
							o = Object(z.I)(r(), l);
						if (n.length) {
							const t = await Object(T.a)(s(), o, n);
							t.ok && (e = t.body)
						}
						const i = Object(B.h)(p, {
							subredditId: Object(z.I)(p, l)
						});
						if (!q && i && t(Object(b.a)({
								postIds: W.postIds
							})), t(se({
								fetchedToken: A.token,
								key: x,
								meta: p.meta,
								governance: e,
								...W
							})), Object(B.i)(p, o)) {
							let e;
							q || (e = await Object(C.b)(c(), Object(C.c)(p, l, {
								...F,
								limit: v.a
							}), Object(H.bb)(p)));
							const r = q ? W : e.body;
							if (q ? r : e.ok) {
								const e = r.postIds.map(e => r.posts[e].lastAuthorModNote);
								t(Object(f.e)({
									subredditId: o,
									nodes: e
								}))
							}
						}
						await t(Object(u.a)({
							subredditId: o,
							postIds: W.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(D.b)(j.a.NextPageLoad)(r())
					} else {
						t(oe({
							error: $.error,
							fetchedToken: A.token,
							key: x,
							...W
						}));
						const e = $.error;
						Object(D.a)(e ? `${$.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, pe = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", fe = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", Oe = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", ge = Object(c.a)(pe), je = Object(c.a)(fe), _e = Object(c.a)(Oe), Ie = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(ge());
					const o = await Object(E.c)(n(), i.wb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					o.ok ? e(je(o.body)) : e(_e({
						error: o.error
					}))
				}, he = "SUBREDDIT__ABOUT_PENDING", ve = "SUBREDDIT__ABOUT_SUCCEEDED", ye = "SUBREDDIT__ABOUT_FAILED", Te = Object(c.a)(he), Se = Object(c.a)(ve), Ee = Object(c.a)(ye), Ce = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = r();
					if (Object(z.z)(o, {
							subredditName: e
						}) || o.subreddits.api.about.error[e.toLowerCase()] || o.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(Te({
						subredditName: e
					}));
					const i = !Object(z.I)(o, e),
						d = await Object(x.a)(s(), e, i);
					if (d.ok) {
						const r = d.body.data.subreddit,
							n = Object(w.a)(r),
							s = i ? Object(k.a)(r) : void 0;
						t(Se({
							subredditName: e,
							subreddits: s ? {
								[s.id]: s
							} : void 0,
							data: n
						}))
					} else t(Ee({
						subredditName: e,
						error: d.error
					}))
				}, xe = (e, t, r) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					var d;
					const c = e.substring(2),
						a = r === G.e.View ? null === (d = Object(H.h)(s(), c)) || void 0 === d ? void 0 : d.subredditId : Object(z.I)(s(), c),
						u = Object(H.m)(s());
					if (u && a) {
						const e = ((e, t, r, n) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + n + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(c, Object(q.e)(u), t, r);
						if ((await Object(S.b)(i(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							n(Object(p.D)({
								subredditId: a,
								prefs: t
							})), Object(N.j)(a, t, i()), r !== G.e.View && n(Object(l.i)(_.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Ae = e => async (t, r) => {
					const n = r(),
						{
							subredditName: s
						} = e,
						o = e.t,
						i = Object(P.a)(e, n),
						d = n.platform.currentPage ? n.platform.currentPage.queryParams : $,
						c = Object(a.a)(s, i, {
							t: o,
							...d
						}),
						u = {
							t: o,
							sort: i,
							isRefresh: !0,
							...d
						};
					await t(Object(m.subredditDataRequested)(c, s, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				o = r("./src/reddit/actions/subreddit/constants.ts");
			const i = e => async (t, r, o) => {
				let {
					gqlContext: i
				} = o;
				var c;
				const a = (await ((e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}))(i(), {
					id: e
				})).body;
				d(t, e, null === (c = a.data) || void 0 === c ? void 0 : c.subredditInfoById)
			};

			function d(e, t, r) {
				const n = null == r ? void 0 : r.answerableQuestions,
					s = null == r ? void 0 : r.contentRatingSurvey,
					i = null == r ? void 0 : r.communityProgressModule;
				(n || s || i) && e({
					type: o.D,
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
				o = r("./src/config.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/reddit/models/Post/index.ts");
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
					const f = Object(l.X)(n(), {
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
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.C)(t)}`,
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
				return A
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "d", (function() {
				return U
			})), r.d(t, "b", (function() {
				return G
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/subredditModeration/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
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
				C = Object(s.a)(i.S),
				x = Object(s.a)(i.R),
				A = e => async (t, r, n) => {
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
								n && n.length && o.c.captureException(n)
							} else t(C({
								subredditId: l,
								userId: m,
								filter: g,
								fetchedToken: p
							})), t(Object(d.f)({
								kind: O.b.Error,
								text: T._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						} catch (I) {
							o.c.captureException(I), t(Object(d.f)({
								kind: O.b.Error,
								text: T._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						}
					}
				}, N = Object(s.a)(i.H), L = Object(s.a)(i.G), R = e => {
					let {
						subredditId: t,
						nodes: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: o
						} = s;
						const i = [],
							d = [];
						r.map(e => {
							const t = null == e ? void 0 : e.user.id;
							t && !d.includes(t) && e && (i.push(e), d.push(t))
						}), e(L({
							subredditId: t,
							lastAuthorModNotes: i
						}))
					}
				}, P = (e, t, r) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					var u, l, b, m, f, O, g;
					const {
						hasSortParam: j,
						sortToUse: _
					} = Object(p.a)(o(), e), I = n.Ob[_], v = {
						postId: e,
						requestPostModerationInfo: !t,
						...j && I && {
							sortType: h.i[I]
						},
						...r && {
							after: r
						}
					}, y = await ((e, t) => Object(c.a)(e, {
						...a,
						variables: {
							...t
						}
					}))(d(), v);
					if (y.ok) {
						const e = null === (u = y.body) || void 0 === u ? void 0 : u.data,
							t = null === (b = null === (l = null == e ? void 0 : e.postInfoById) || void 0 === l ? void 0 : l.subreddit) || void 0 === b ? void 0 : b.id,
							r = null === (f = null === (m = null == e ? void 0 : e.postInfoById) || void 0 === m ? void 0 : m.moderationInfo) || void 0 === f ? void 0 : f.lastAuthorModNote,
							n = null === (g = null === (O = null == e ? void 0 : e.postInfoById) || void 0 === O ? void 0 : O.commentForest) || void 0 === g ? void 0 : g.trees;
						r && s(N({
							subredditId: t,
							lastAuthorModNote: r
						})), n && s((e => {
							let {
								subredditId: t,
								commentTrees: r
							} = e;
							return async (e, n, s) => {
								let {
									gqlContext: o
								} = s;
								const i = [],
									d = [];
								r.map(e => {
									var t, r;
									if (!(null == e ? void 0 : e.node)) return;
									const n = null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote,
										s = null == n ? void 0 : n.user.id;
									s && !d.includes(s) && n && (i.push(n), d.push(s))
								}), e(L({
									subredditId: t,
									lastAuthorModNotes: i
								}))
							}
						})({
							subredditId: t,
							commentTrees: n
						}))
					}
				}, w = Object(s.a)(i.Q), k = (e, t, r, n, s, o) => async (i, a, l) => {
					let {
						gqlContext: b
					} = l;
					var m, p;
					const f = {
							subredditId: e,
							userId: t,
							label: s,
							note: r,
							redditId: o
						},
						g = await ((e, t) => Object(c.a)(e, {
							...u,
							variables: {
								input: t
							}
						}))(b(), f);
					if (g.ok) {
						const r = null === (p = null === (m = g.body) || void 0 === m ? void 0 : m.data) || void 0 === p ? void 0 : p.createModUserNote.createdNote;
						if (!r) return void i(Object(d.f)({
							kind: O.b.Error,
							text: T._("Something went wrong", null, {
								hk: "zYMeg"
							}),
							duration: 3e3
						}));
						i(w({
							subredditId: e,
							newModNote: r,
							filter: n
						})), Object(I.a)(Object(_.v)({
							userId: t,
							subredditId: e,
							filteredType: n,
							modNote: r
						})(a())), i(Object(d.f)({
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
						i(Object(d.f)({
							kind: O.b.Error,
							text: t,
							duration: 3e3
						}))
					}
				}, D = Object(s.a)(i.lb), U = (e, t) => async (r, n, s) => {
					let {
						gqlContext: o
					} = s;
					var i, d;
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
					}))(o(), u);
					if (l.ok) {
						const n = null === (i = l.body) || void 0 === i ? void 0 : i.data;
						if ("Subreddit" === (null === (d = null == n ? void 0 : n.subredditInfoById) || void 0 === d ? void 0 : d.__typename)) {
							const s = null == n ? void 0 : n.subredditInfoById;
							s && r(D({
								subredditId: e,
								userId: t,
								totalCounts: s
							}))
						}
					}
				}, G = (e, t, r, n) => async (s, o, i) => {
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
					}))(a(), u)).ok ? (s(x({
						subredditId: e,
						userId: t,
						noteId: r
					})), s(Object(d.f)({
						kind: O.b.SuccessMod,
						text: T._("Mod Note sucessfully deleted!", null, {
							hk: "17NyFK"
						})
					}))) : s(Object(d.f)({
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
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "SUBREDDIT__RULES_LOADED",
				s = "SUBREDDIT__RULES_PENDING",
				o = "SUBREDDIT__RULES_FAILED",
				i = "SUBREDDIT__RULE_ADDED",
				d = "SUBREDDIT__RULE_EDITED",
				c = "SUBREDDIT__RULE_REMOVED",
				a = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return U
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "g", (function() {
				return z
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "j", (function() {
				return Y
			})), r.d(t, "i", (function() {
				return X
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
				i = r("./node_modules/lodash/xor.js"),
				d = r.n(i),
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
						isDiscoveryAllowed: o,
						isChatPostCreationAllowed: i,
						isCrosspostingAllowed: d,
						isPredictionAllowed: c,
						isPredictionContributorsAllowed: a,
						isPredictionsTournamentAllowed: u,
						banEvasionThreshold: l,
						commentContributionSettings: b,
						discoverySettings: m,
						isNsfw: p,
						language: f,
						publicDescriptionText: g,
						isChatPostFeatureEnabled: j,
						welcomeMessage: _,
						allAllowedPostTypes: h,
						isTopListingAllowed: v,
						isCommentingRestricted: T,
						isPostingRestricted: S,
						isSpoilerAvailable: E,
						isContributorRequestsDisabled: C,
						type: A,
						suggestedCommentSort: N,
						title: L,
						toxicityThresholdChatLevel: R,
						crowdControl: P,
						commentDisplaySettings: w,
						allowedPostType: k,
						wikiSettings: D,
						spamFilter: U,
						modQueueSettings: G
					} = e;
					return {
						allowGalleries: h.includes(O.O.Gallery),
						allowImages: h.includes(O.O.Image),
						allowPolls: h.includes(O.O.Poll),
						archivePostsEnabled: s,
						allowDiscovery: o,
						allowChatPostCreation: i,
						allowPostCrossposts: d,
						allowPredictionContributors: a,
						allowPredictions: c,
						allowPredictionsTournament: u,
						banEvasionThreshold: I(l),
						commentContributionSettings: b,
						discoverySettings: m,
						contentVisible: v,
						crowdControlLevel: y(null == P ? void 0 : P.crowdControlLevel),
						crowdControlChatLevel: y(null == P ? void 0 : P.crowdControlChatLevel),
						crowdControlPostLevel: y(null == P ? void 0 : P.crowdControlPostLevel),
						disableContributorRequests: C,
						isChatPostFeatureEnabled: j,
						language: f,
						over18: p,
						publicDescription: g || void 0,
						restrictCommenting: T,
						restrictPosting: S,
						spoilersEnabled: E,
						subredditId: n,
						subredditType: null == A ? void 0 : A.toLowerCase(),
						suggestedCommentSort: (null == N ? void 0 : N.toLowerCase()) || void 0,
						title: L,
						toxicityThresholdChatLevel: x(R),
						welcomeMessageEnabled: null == _ ? void 0 : _.isEnabled,
						welcomeMessageText: (null == _ ? void 0 : _.body) ? null === (t = _.body) || void 0 === t ? void 0 : t.markdown : void 0,
						wikimode: null === (r = null == D ? void 0 : D.wikiEditMode) || void 0 === r ? void 0 : r.toLowerCase(),
						crowdControlFilter: null == P ? void 0 : P.isCrowdControlFilterEnabled,
						collapseDeletedComments: null == w ? void 0 : w.isCollapseDeletedCommentsEnabled,
						commentScoreHideMins: (null == w ? void 0 : w.commentScoreHideMinutes) || 0,
						contentOptions: k || void 0,
						excludeBannedModqueue: null == G ? void 0 : G.isExcludeBannedModqueueEnabled,
						spamLinks: (null == U ? void 0 : U.spamPosts) || void 0,
						spamSelfposts: (null == U ? void 0 : U.spamSelfposts) || void 0,
						spamComments: (null == U ? void 0 : U.spamComments) || void 0,
						wikiEditAge: "number" == typeof(null == D ? void 0 : D.wikiEditMinimumAge) ? null == D ? void 0 : D.wikiEditMinimumAge : void 0,
						wikiEditKarma: "number" == typeof(null == D ? void 0 : D.wikiEditKarma) ? null == D ? void 0 : D.wikiEditKarma : void 0
					}
				},
				j = [O.d.Unknown, O.d.Off, O.d.Lenient, O.d.Moderate, O.d.Strict],
				_ = e => {
					if (e) return (null == j ? void 0 : j[e]) || O.d.Unknown
				},
				I = e => e ? j.indexOf(e) : 0,
				h = [O.n.Off, O.n.Lenient, O.n.Medium, O.n.Strict],
				v = e => {
					if (e) return null == h ? void 0 : h[e]
				},
				y = e => e ? h.indexOf(e) : 0,
				T = e => {
					if (e) return Object.values(O.V).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				S = e => {
					if (e) return Object.values(O.i).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				E = e => {
					if (e) return Object.values(O.db).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				C = e => {
					if (e) return e > 0 ? O.Y.Enabled : O.Y.Disabled
				},
				x = e => {
					if (e) return e === O.Y.Enabled ? 1 : 0
				},
				A = e => {
					let {
						over18: t,
						publicDescription: r,
						subredditType: n,
						contentOptions: s,
						archivePostsEnabled: o,
						allowDiscovery: i,
						allowGalleries: d,
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
						crowdControlChatLevel: x,
						crowdControlLevel: A,
						allowPredictions: N,
						collapseDeletedComments: L,
						commentScoreHideMins: R,
						disableContributorRequests: P,
						discoverySettings: w,
						excludeBannedModqueue: k,
						hideAds: D,
						keyColor: U,
						restrictCommenting: G,
						restrictPosting: F,
						spamLinks: q,
						spamSelfposts: M,
						spamComments: B,
						spoilersEnabled: Q,
						showMedia: z,
						showMediaPreview: H,
						submitLinkLabel: K,
						submitTextLabel: J,
						submitText: V,
						suggestedCommentSort: $,
						title: W,
						toxicityThresholdChatLevel: Y,
						wikiEditAge: X,
						wikiEditKarma: Z,
						wikimode: ee,
						...te
					} = e;
					return {
						isNsfw: t,
						publicDescription: r,
						type: null == n ? void 0 : n.toUpperCase(),
						allowedPostType: null == s ? void 0 : s.toUpperCase(),
						isImagesAllowed: c,
						isCrosspostingAllowed: l,
						isPollsAllowed: u,
						isGalleriesAllowed: d,
						isChatPostAllowed: a,
						isTopListingAllowed: g,
						isDiscoveryAllowed: i,
						isArchivePostsEnabled: o,
						isPredictionContributorsAllowed: b,
						isPredictionsTournamentAllowed: m,
						language: O,
						banEvasionThreshold: _(j),
						crowdControlChatLevel: v(x),
						crowdControlFilter: h,
						crowdControlLevel: v(A),
						crowdControlPostLevel: v(y),
						welcomeMessage: f ? {
							markdown: f
						} : void 0,
						isWelcomeMessageEnabled: p,
						commentContributionSettings: I,
						allowPredictions: N,
						collapseDeletedComments: L,
						commentScoreHideMinutes: R,
						disableContributorRequests: P,
						discoverySettings: w,
						excludeBannedModqueue: k,
						restrictCommenting: G,
						restrictPosting: F,
						spamLinks: T(q),
						spamSelfposts: T(M),
						spamComments: T(B),
						spoilersEnabled: Q,
						suggestedCommentSort: S($),
						title: W,
						toxicityThresholdChatLevel: C(Y),
						wikiEditKarma: Z,
						wikiEditMinimumAge: X,
						wikiEditMode: E(ee),
						...te
					}
				};
			var N = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				L = r("./src/reddit/models/Toast/index.ts"),
				R = r("./src/reddit/models/User/index.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/subredditSettings.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				D = r("./src/reddit/selectors/widgets.ts");
			const U = "SUBREDDIT_SETTINGS_LOADED",
				G = Object(a.a)(U),
				F = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				q = Object(a.a)(F),
				M = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				B = Object(a.a)(M),
				Q = (e, t) => async (r, n, s) => {
					let {
						apiContext: o,
						gqlContext: i
					} = s;
					var d, c;
					const a = n(),
						b = !Object(u.b)(e);
					if (!t || !Object(P.Z)(a, t)) {
						const t = await (b ? Object(l.b)(i(), e) : Object(l.c)(o(), e)),
							n = b ? g(null === (c = null === (d = null == t ? void 0 : t.body) || void 0 === d ? void 0 : d.data) || void 0 === c ? void 0 : c.subredditInfoByName) : t.body;
						t && t.ok && r(G(n))
					}
					if (t && !Object(w.b)(a, {
							subredditId: t
						})) {
						const e = await Object(p.a)(i(), t);
						if (e && e.ok) {
							const t = e.body,
								n = Object(f.e)(t.data);
							r(q(n))
						}
					}
				}, z = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = Object(k.m)(t());
					s && await e(Q(c.qc + Object(R.e)(s)))
				}, H = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", K = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", J = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", V = Object(a.a)(H), $ = Object(a.a)(K), W = Object(a.a)(J), Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c, a) => {
						let {
							apiContext: u,
							gqlContext: f
						} = a;
						var O, j, _;
						i(V());
						const I = c(),
							h = o()(Object(P.Z)(I, e), ...Object.keys(t)),
							v = o()(Object(w.b)(I, {
								subredditId: e
							}), ...Object.keys(r)),
							y = A(t),
							T = await Object(l.f)(f(), e, y),
							S = Object.keys(r).length > 0;
						let E = !0;
						if (S) {
							E = (await Object(p.b)(f(), e, r)).ok
						}
						if (T.ok && (!S || E)) {
							const o = g(null === (_ = null === (j = null === (O = null == T ? void 0 : T.body) || void 0 === O ? void 0 : O.data) || void 0 === j ? void 0 : j.updateSubredditSettings) || void 0 === _ ? void 0 : _.subreddit);
							i($({
								settings: {
									...o,
									subredditId: e
								},
								idCardWidgetId: Object(D.c)(I, {
									subredditId: e
								})
							})), S && i(B({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							return s && 0 === d()(Object.keys(t), Object.keys(h)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = Y(e, h, v, s)), void i(Object(m.f)({
								kind: L.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
						i(W()), i(Object(m.f)({
							kind: L.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: Y(e, t, v, void 0)
						})), s && Object(b.a)(Object(N.c)(I, "BE returned an error:"))
					}
				}, X = (e, t) => async (r, s, o) => {
					let {
						apiContext: i
					} = o;
					(await Object(l.d)(i(), e, t)).ok ? r(Object(m.f)({
						kind: L.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(m.f)({
						kind: L.b.Error,
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
				return o
			})), r.d(t, "q", (function() {
				return i
			})), r.d(t, "s", (function() {
				return d
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
				return C
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "i", (function() {
				return R
			}));
			const n = "TAGS__REQUESTED",
				s = "TAGS__AVAILABLE_LOADED",
				o = "TAGS__LOADED",
				i = "TAGS__FAILURE",
				d = "TAGS__RELEVANCE_LOADED",
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
				C = "GLOBAL__TAGS__LOADED",
				x = "CREATION__TAGS_INPUT_CHANGED",
				A = "CREATION__TAGS_OPTION_SELECTED",
				N = "CREATION__TAGS_OPTION_DESELECTED",
				L = "CREATION__PRIMARY_TAG_SELECTED",
				R = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
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
				return q
			})), r.d(t, "k", (function() {
				return M
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "f", (function() {
				return K
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
				o = r("./src/reddit/actions/tags/constants.ts"),
				i = r("./src/reddit/actions/toaster.ts");
			const d = e => {
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
					includeAvailableTags: o
				} = t;
				return Object(c.a)(e, {
					...l,
					variables: {
						subredditId: r,
						pageSize: n,
						after: s,
						includeAvailableTags: o
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
			Object(s.a)(o.e);
			const E = Object(s.a)(o.t),
				C = Object(s.a)(o.r),
				x = Object(s.a)(o.s),
				A = Object(s.a)(o.q),
				N = Object(s.a)(o.l),
				L = Object(s.a)(o.m),
				R = Object(s.a)(o.k),
				P = Object(s.a)(o.v),
				w = Object(s.a)(o.w),
				k = Object(s.a)(o.u),
				D = Object(s.a)(o.z),
				U = Object(s.a)(o.D),
				G = Object(s.a)(o.y),
				F = Object(s.a)(o.C),
				q = Object(s.a)(o.x),
				M = Object(s.a)(o.B),
				B = (Object(s.a)(o.d), Object(s.a)(o.c), Object(s.a)(o.b), Object(s.a)(o.g)),
				Q = Object(s.a)(o.h),
				z = Object(s.a)(o.f),
				H = Object(s.a)(o.a),
				K = Object(s.a)(o.i),
				J = Object(s.a)(o.A),
				V = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, o, c) => {
						let {
							gqlContext: a
						} = c;
						const u = o();
						s(E());
						const l = await b(a(), {
								subredditId: e
							}),
							m = l.body;
						if (l.ok && m.data.subredditInfoById.secondaryTags && m.data.subredditInfoById.availableTags && m.data.subredditInfoById.suggestedTags) s(C(d(m.data))), r && h.h(o(), e, {
							context: t
						});
						else {
							s(A());
							const o = r ? "topics_save" : "topics_load";
							h.g(u, e, o, {
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
						gqlContext: o
					} = s;
					t(E());
					const c = await b(o(), {
						subredditId: e
					});
					if (c.ok) {
						const e = c.body;
						t(x(d(e.data)))
					} else t(A()), t(Object(i.f)(Object(i.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), y.b.Error, n.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), x(e))))
				}, W = (e, t) => async (r, n, s) => {
					let {
						gqlContext: o
					} = s;
					if (!t.length) return null;
					r(N());
					const i = t.map(t => ({
							subredditId: e,
							...t
						})),
						d = await ((e, t) => Object(c.a)(e, {
							...a,
							variables: t
						}))(o(), {
							input: i
						}),
						u = d.body && d.body.data || null;
					return d.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(L()), u.createSubredditTags.createdTags || []) : (r(R()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (n, s, o) => {
						let {
							gqlContext: i
						} = o;
						if (!t.length && !r.length) return;
						n(P());
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
						m.ok && f && f.updateSubredditTagStates && f.updateSubredditTagStates.ok && f.updateSubredditTagStates.subreddit ? n(w(d({
							subredditInfoById: f.updateSubredditTagStates.subreddit
						}))) : n(k())
					}
				}, X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, o, d) => {
						const c = o(),
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
							const t = await W(e, u)(s, o, d);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: v.d.TAGGED
							})))
						}
						await Y(e, l)(s, o, d), Object(S.A)(o()) ? s(Object(i.f)(Object(i.e)(n.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && s(Object(i.f)(Object(i.e)(n.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), y.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, s, o) => {
					const d = {
						state: v.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await W(e, [{
							text: t.displayText,
							type: v.c.CLASSIFICATION
						}])(r, s, o);
						n && 1 === n.length && (d.tagId = n[0].id)
					} else {
						if (!t.id) return void r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), y.b.Error)));
						d.tagId = t.id
					}(e => !!e.tagId && !!e.state)(d) ? await Y(e, [], [d])(r, s, o): r(Object(i.f)(Object(i.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), y.b.Error)))
				}, ee = (e, t, r) => async (n, s, o) => {
					t.id ? await Y(e, [], [{
						state: v.d.NONE,
						tagId: t.id
					}])(n, s, o) : n(V(e, r, !1))
				}, te = function(e, t, r, s) {
					let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (d, c, a) => {
						let {
							gqlContext: u
						} = a;
						if (!(await O(u(), {
								input: {
									tagStatesRelevance: t,
									suggestedTagStatesRelevance: r
								}
							})).ok) return d(Object(i.f)(Object(i.e)(n.fbt._("Whoops! Unable to update topics relevance status", null, {
							hk: "17akdT"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, s, o)))), void d($(e));
						if (o)
							for (const e of r) h.f(c(), e, {
								context: s
							});
						d(Object(i.f)(Object(i.e)(n.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), y.b.SuccessCommunity, n.fbt._("Undo", null, {
							hk: "34apPL"
						}), te(e, t.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), r.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), s, o)))), d($(e))
					}
				}, re = e => async (t, r) => {
					t(J({
						itemTagsState: {
							[e]: Object(S.o)(r(), {
								itemId: e
							})
						}
					}))
				}, ne = function(e, t) {
					let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (s, o, d) => {
						let {
							gqlContext: c
						} = d;
						const a = Object(S.x)(o(), {
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
						}), y.b.SuccessCommunity)))) : (s(z()), s(Object(i.f)(Object(i.e)(n.fbt._("Whoops! Unable to update primary topic", null, {
							hk: "3ilZqp"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1dRYXW"
						}), ne(e, t)))))
					}
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "s", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "h", (function() {
				return d
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
			})), r.d(t, "r", (function() {
				return h
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
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
				I = "USERFLAIR_FETCH_SUCCESS",
				h = "USERFLAIR_TEMPLATES_LOADED"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return I
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return h
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return v
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return y
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
				return T
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return S
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return E
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return C
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return x
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return A
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return N
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return L
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return R
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return P
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return w
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return k
			})), r.d(t, "userFlairMutated", (function() {
				return D
			})), r.d(t, "authorFlairMutated", (function() {
				return U
			})), r.d(t, "userFlairChanged", (function() {
				return G
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return F
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return q
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return M
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return B
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return Q
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return z
			})), r.d(t, "userFlairTemplatesLoaded", (function() {
				return H
			})), r.d(t, "fetchUserFlairFromGql", (function() {
				return K
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(o),
				d = r("./src/reddit/actions/authorFlair.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/flair/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				b = r("./src/reddit/models/Flair/index.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/models/User/index.ts"),
				f = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/userFlair.ts"),
				g = r("./src/lib/initializeClient/installReducer.ts"),
				j = r("./src/reddit/reducers/features/userFlair/index.ts"),
				_ = r("./src/reddit/actions/userFlair/constants.ts");
			Object(g.a)({
				features: {
					userFlair: j.a
				}
			});
			const I = Object(s.a)(_.i),
				h = Object(s.a)(_.j),
				v = Object(s.a)(_.h),
				y = Object(s.a)(_.c),
				T = Object(s.a)(_.d),
				S = Object(s.a)(_.b),
				E = Object(s.a)(_.p),
				C = Object(s.a)(_.q),
				x = Object(s.a)(_.o),
				A = Object(s.a)(_.f),
				N = Object(s.a)(_.g),
				L = Object(s.a)(_.e),
				R = Object(s.a)(_.m),
				P = Object(s.a)(_.n),
				w = Object(s.a)(_.l),
				k = Object(s.a)(_.k),
				D = Object(s.a)(_.s),
				U = Object(s.a)(_.a),
				G = (e, t, r, n, s) => async (o, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						b = l.user.account,
						m = b ? Object(p.e)(b) : void 0,
						g = {
							...Object(O.d)(l, {
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
					o(n === m ? D(j) : U(j));
					const _ = Object(f.X)(l, {
							subredditId: s
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					Object(a.h)(c(), n, _.name, t, I), n === m && Object(a.j)(c(), r, _.name)
				}, F = (e, t) => async (r, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = n(),
						d = Object(f.X)(i, {
							subredditId: e
						}).name;
					r(I());
					const c = await Object(a.m)(o(), d, t);
					if (c.ok) {
						r(h({
							subredditId: e,
							isEnabled: t
						}))
					} else r(v());
					return c.ok
				}, q = (e, t) => async (r, n, s) => {
					let {
						apiContext: o
					} = s;
					const i = n(),
						d = Object(f.X)(i, {
							subredditId: e
						}).name;
					r(y());
					const c = await Object(a.k)(o(), t, b.d.UserFlair, d);
					if (c.ok) {
						r(T({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(S());
					return c.ok
				}, M = (e, t) => async (r, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						u = Object(f.X)(d, {
							subredditId: t
						}).name;
					r(E());
					const l = await Object(a.g)(i(), e, u, b.d.UserFlair),
						p = l.ok && !(l.body && !1 === l.body.success);
					if (p) {
						const e = {
							subredditId: t,
							template: l.body
						};
						r(C(e));
						const s = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), m.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(x());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), m.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), M(e, t));
						r(Object(c.f)(s))
					}
					return p
				}, B = (e, t) => async (r, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						u = Object(f.X)(d, {
							subredditId: t
						}).name;
					if (r(A()), (await Object(a.b)(i(), e, u)).ok) {
						r(N({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), m.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(L());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), m.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), B(e, t));
						r(Object(c.f)(s))
					}
				}, Q = (e, t) => async (r, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						u = Object(f.X)(d, {
							subredditId: t
						}).name,
						l = Object(O.d)(d, {
							subredditId: t
						}).templateIds;
					if (r(R({
							subredditId: t,
							templateIds: e
						})), (await Object(a.f)(i(), u, b.d.UserFlair, e)).ok) {
						r(P());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), m.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(w({
							subredditId: t,
							templateIds: l
						}));
						const s = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), m.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), Q(e, t));
						r(Object(c.f)(s))
					}
				}, z = (e, t) => async (r, s, o) => {
					let {
						apiContext: u
					} = o;
					var l;
					const b = s(),
						p = null === (l = b.features) || void 0 === l ? void 0 : l.userFlair;
					if (p && p[e] && p[e].displaySettings.isEnabled && i()(p[e].templateIds)) {
						const s = Object(f.X)(b, {
								subredditId: e
							}).name,
							o = await Object(a.d)(u(), s);
						if (o.ok) r(k(o.body)), r(Object(d.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(c.e)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), m.b.Error);
							r(Object(c.f)(e))
						}
					} else r(Object(d.b)({
						username: t,
						subredditId: e
					}))
				}, H = Object(s.a)(_.r), K = (e, t) => async (r, n, s) => {
					let {
						gqlContext: o
					} = s;
					var d, c, u, b, m, p;
					const f = null === (d = n().features) || void 0 === d ? void 0 : d.userFlair;
					if (f && f[e] && f[e].displaySettings.isEnabled && i()(f[e].templateIds)) {
						const n = await Object(a.e)(o(), {
							name: t
						});
						if (n.ok) {
							const t = [],
								s = {};
							null === (p = null === (m = null === (b = null === (u = null === (c = null == n ? void 0 : n.body) || void 0 === c ? void 0 : c.data) || void 0 === u ? void 0 : u.subredditInfoByName) || void 0 === b ? void 0 : b.userFlairTemplates) || void 0 === m ? void 0 : m.edges) || void 0 === p || p.map(e => {
								const r = null == e ? void 0 : e.node;
								r && r.id && (t.push(r.id), s[r.id] = Object(l.b)(r))
							}), r(H({
								subredditId: e,
								templateIds: t,
								templates: s
							}))
						}
					}
				}
		},
		"./src/reddit/components/CommunityChat/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => `/r/ChatCommunityM0/channel/${e}/${(e=>e.toLowerCase().split(" ").join("_"))(t)}/`
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
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/localStorageAvailable/index.ts"),
				d = r("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(s.c)(o.t.RECENT_SUBREDDITS, "recent_subreddits"),
				a = () => Object(i.a)() && Object(s.b)(c) || [];
			t.a = e => "undefined" == typeof window ? n.a : e => t => {
				const r = e(t);
				switch (t.type) {
					case d.e: {
						const e = a() || [],
							r = {
								...t.payload,
								lastVisited: Date.now()
							},
							{
								id: n
							} = r;
						if (n) {
							const t = e.findIndex(e => e.id === n); - 1 !== t && e.splice(t, 1), e.unshift(r), e.splice(d.c), Object(s.d)(c, e, o.ub)
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
				return I
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "b", (function() {
				return P
			}));
			var n = r("./src/config.ts"),
				s = r("./src/redditGQL/operations/ModApprove.json"),
				o = r("./src/redditGQL/operations/ModRemove.json"),
				i = r("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				d = r("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = r("./src/redditGQL/types.ts"),
				a = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				m = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				f = r("./src/reddit/helpers/comment/index.ts"),
				O = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				g = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				j = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				_ = r("./src/redditGQL/operations/GetCommentById.json");
			const I = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/save`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unsave`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/lock`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unlock`),
					method: a.ob.POST,
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
				S = (e, t, r) => Object(l.a)(e, {
					...o,
					variables: {
						input: {
							id: t,
							isSpam: r
						}
					}
				}),
				E = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/ignore_reports`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
					endpoint: Object(p.a)(`${e.apiUrl}/api/unignore_reports`),
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
				A = (e, t, r, s, o) => {
					let i = Object(p.a)(Object(j.a)(Object(f.a)(Object(g.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`), o ? 1 : void 0)));
					return s && (i = Object(O.a)(i)), Object(u.a)(e, {
						data: r,
						endpoint: i,
						method: a.ob.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				N = {
					[a.J.NONE]: c.q.None,
					[a.J.MODERATOR]: c.q.ModDistinguished,
					[a.J.ADMIN]: c.q.AdminDistinguished,
					[a.J.ALUMNI_ADMIN]: c.q.AlumniDistinguished
				};

			function L(e, t, r) {
				const n = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === a.J.NONE ? c.g.None : c.g.Distinguished,
							distinguishType: N[t]
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
					...d,
					variables: {
						input: {
							commentId: t,
							sticky: r
						}
					}
				})
			}
			const P = async (e, t) => {
				return await Object(l.a)(e, {
					..._,
					variables: {
						id: t
					}
				})
			}
		},
		"./src/reddit/endpoints/devPlatform/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetDevPlatformMetadata.json");
			const o = async (e, t) => {
				var r;
				const o = await Object(n.a)(e, {
					...s,
					variables: {
						...t,
						mimetype: "application/json"
					}
				});
				return o.ok && o.body ? null === (r = o.body.data.subredditInfoByName) || void 0 === r ? void 0 : r.devPlatformMetadata : null
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
				return C
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "f", (function() {
				return L
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "m", (function() {
				return U
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				o = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = r("./src/redditGQL/operations/CancelPrediction.json"),
				d = r("./src/redditGQL/operations/ChangePrediction.json"),
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
					optionId: o,
					coinPackageId: i,
					price: d
				} = t;
				var c;
				const a = await Object(n.a)(e, {
					...I,
					variables: {
						input: {
							postId: r,
							optionId: o,
							coinPackageId: i,
							price: d
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
					period: o = y.AllTime,
					top: i = 100,
					includeCurrentRank: d
				} = t;
				const c = await Object(n.a)(e, {
					...g,
					variables: {
						subredditId: r,
						period: o,
						top: i,
						includeCurrentRank: d
					}
				});
				if (!Object(s.c)(c) || c.error) throw new Error("Failed to fetch subreddit top predictors");
				if (!c.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return c.body.data.subredditInfoById
			}, S = async (e, t) => {
				let {
					subredditId: r,
					tournamentId: o,
					includeCurrentRank: i
				} = t;
				const d = await Object(n.a)(e, {
					...j,
					variables: {
						subredditId: r,
						tournamentId: o,
						includeCurrentRank: i
					}
				});
				if (!Object(s.c)(d) || d.error) throw new Error("Failed to fetch subreddit tournament");
				if (!d.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return d.body.data.subredditInfoById
			}, E = async (e, t) => {
				const r = await Object(n.a)(e, {
					...a,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error || !r.body.data.createPredictionTournament.tournament) throw new Error("Failed to create tournament");
				return r.body.data.createPredictionTournament.tournament
			}, C = async (e, t) => {
				const r = await Object(n.a)(e, {
					...p,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, x = async (e, t) => {
				const r = await Object(n.a)(e, {
					...f,
					variables: t
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, A = async (e, t) => {
				const r = await Object(n.a)(e, {
					...o,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to create prediction");
				const {
					errors: i,
					tournament: d
				} = r.body.data.addPredictionDrafts;
				if (null == i ? void 0 : i.length) throw new Error(i[0].message);
				if (!d) throw new Error("Failed to create prediction");
				return d
			}, N = async (e, t) => {
				const r = await Object(n.a)(e, {
					..._,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to update prediction tournament");
				const {
					tournament: o
				} = r.body.data.updatePredictionTournament;
				if (!o) throw new Error("Failed to update prediction tournament");
				return o
			}, L = (e, t) => Object(n.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), R = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			}), P = (e, t) => Object(n.a)(e, {
				...m,
				variables: t
			}), w = async (e, t) => {
				const r = await Object(n.a)(e, {
					...d,
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
				var o, d;
				const c = await Object(n.a)(e, {
					...i,
					variables: {
						input: {
							postId: r
						}
					}
				});
				if (!Object(s.c)(c) || !(null === (o = c.body.data.cancelPrediction) || void 0 === o ? void 0 : o.ok) || !(null === (d = c.body.data.cancelPrediction) || void 0 === d ? void 0 : d.poll)) throw new Error("Unable to cancel prediction");
				return c.body.data.cancelPrediction.poll
			}, D = async (e, t) => {
				var r, o;
				const i = await Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i) || !(null === (r = i.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (o = i.body.data.changePredictionVote) || void 0 === o ? void 0 : o.poll)) throw new Error("Unable to change prediction.");
				return i.body.data.changePredictionVote.poll
			}, U = async (e, t) => {
				const r = await Object(n.a)(e, {
					...b,
					variables: t
				});
				return !!Object(s.c)(r) && r.body.data.identity.isPredictionCreationAllowed
			}
		},
		"./src/reddit/endpoints/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				o = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const i = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				d = (e, t) => Object(n.a)(e, {
					...o,
					variables: t
				})
		},
		"./src/reddit/endpoints/goodContent/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/loadWithRetries/index.ts");
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
				d = e => {
					const t = i[e];
					return t ? t() : e
				},
				c = async () => (await Object(o.a)(() => r.e("FrontpageLinks").then(r.t.bind(null, "./src/reddit/endpoints/goodContent/frontpageLinks.json", 3)))).default
		},
		"./src/reddit/endpoints/governance/posts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function o(e, t, r) {
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
				o = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
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
				o = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/redditGQL/operations/ModQueueItems.json");
			const b = (e, t, r) => Object(o.a)(e, {
					endpoint: Object(u.a)(Object(a.a)(`${n.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: s.ob.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				m = (e, t, r) => Object(o.a)(Object(d.a)(e, [c.a]), {
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
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(s.a)(Object(o.a)(e, [i.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.ob.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/page/popularFeed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/env/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/models/Post/index.ts"),
				d = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				a = r("./src/reddit/models/Onboarding/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				l = r("./src/redditGQL/operations/PopularFeedElements.json");
			const b = async (e, t) => {
				var r, b, m, p;
				const f = await ((e, t) => Object(n.a)(e, {
					...l,
					variables: t
				}))(e, t);
				if (!f.ok && !(null === (m = null === (b = null === (r = f.body) || void 0 === r ? void 0 : r.data) || void 0 === b ? void 0 : b.popular) || void 0 === m ? void 0 : m.elements)) return f;
				const O = f.body,
					g = ((e, t) => {
						let {
							identity: r,
							popular: n,
							recentPosts: l,
							trendingSubreddits: b
						} = e;
						const m = {};
						let p;
						const [f, O] = n.elements.edges.reduce((e, t, r) => {
							var n, s, o, u;
							const [l, b] = e, f = t.node;
							if (Object(i.k)(f)) {
								const e = f;
								e.subreddit = {
									...e.subreddit
								}, l.push(f), (null === (s = null === (n = f.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (u = null === (o = f.flair) || void 0 === o ? void 0 : o.template) || void 0 === u ? void 0 : u.postStyle) && (m[f.flair.template.id] = Object(c.a)(f.flair.template.postStyle))
							} else if (Object(a.g)(f)) {
								const e = Object(d.a)(f.interestTopicRecommendations.recommendationTopics);
								e.topics.length && (p = {
									interests: e,
									index: r
								})
							} else b.push(f);
							return [l, b]
						}, [
							[],
							[]
						]);
						if (O.length) {
							const e = `Received unhandled ${O.length} elements when processing subreddit data: "${O[0].__typename}"`;
							Object(s.b)() || console.warn(e), o.c.captureMessage(e)
						}
						l && f.push(...l);
						const g = n.elements.dist,
							j = n.elements.geoFilter,
							_ = null == l ? void 0 : l.map(e => e.id),
							I = Object(u.b)(f, b, r, _);
						return I.subredditAboutInfo = {}, p && (I.interestTopicRecommendations = p), {
							...I,
							...null !== g && {
								dist: g
							},
							...void 0 !== j && {
								geoFilter: j
							},
							...void 0 !== t.sort && {
								listingSort: t.sort
							}
						}
					})(O.data, t);
				return {
					...f,
					ok: !!(null === (p = O.data.popular) || void 0 === p ? void 0 : p.elements.edges.length),
					status: 200,
					body: g
				}
			}
		},
		"./src/reddit/endpoints/page/subredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return S
			})), r.d(t, "b", (function() {
				return E
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/isAdHocMultireddit/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
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
				j = r("./src/reddit/selectors/experiments/communityChat.ts"),
				_ = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				I = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				h = r("./src/reddit/selectors/platform.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				T = r("./src/redditGQL/operations/SubredditPage.json");
			const S = (e, t, r, n) => {
					var s, d;
					const {
						after: c,
						geo_filter: a,
						isMobile: b,
						layout: p,
						limit: f,
						recentPostIds: O,
						sort: T,
						t: S
					} = r, E = Object(y.bb)(e), C = Object(h.q)(e), x = Object(o.a)(t), A = Object(i.a)(t), N = Object(v.W)(e, {
						subredditId: Object(v.I)(e, t)
					}).length > 0, L = Object(y.q)(e), R = Object(y.pb)(e), {
						adsSeenCount: P,
						totalPostsSeenCount: w,
						sessionStartTime: k
					} = Object(g.a)(e), D = Object(I.a)(e), U = Object(_.c)(e), G = Object(j.a)(e), F = {
						name: t,
						includeIdentity: E && !e.user.account,
						adContext: {
							layout: p ? p.toUpperCase() : u.a.Card,
							clientSignalSessionData: {
								adsSeenCount: P,
								totalPostsSeenCount: w,
								sessionStartTime: k
							}
						},
						isFake: A,
						includeAchievementFlairs: n && !A,
						includeAppliedFlair: !A && E && n,
						includeCustomEmojis: n && !A,
						includeDevPlatformMetadata: D,
						includeQuestions: n && E && !A,
						includeRecents: A && O && O.length > 0 || !1,
						includeRedditorKarma: n && E && !(null === (d = null === (s = e.user.account) || void 0 === s ? void 0 : s.karma) || void 0 === d ? void 0 : d.total),
						includeRules: n && !A && !N,
						includeSubredditLinks: n && !A && !E,
						includeTopicLinks: n && !A && !E,
						includeTrending: A,
						includeSubredditRankings: U,
						includeSubredditChannels: G,
						isAdHocMulti: x,
						isAll: t === l.d.All,
						isLoggedOutGatedOptedin: L,
						isLoggedOutQuarantineOptedin: R,
						isPopular: t === l.d.Popular,
						recentPostIds: O || [],
						subredditNames: x ? t.split("+") : []
					};
					return T && (F.sort = T.toUpperCase()), S && (F.range = S.toUpperCase()), b ? F.pageSize = Object(m.a)(p) : f && (F.pageSize = f), C && C.ad && (F.forceAds = {
						ad: C.ad
					}), (C && C.geo_filter || a) && (F.region = C && C.geo_filter || a), c && (F.after = btoa(c)), F
				},
				E = async (e, t, r) => {
					const n = Date.now(),
						o = await ((e, t) => Object(c.a)(e, {
							...T,
							variables: t
						}))(e, t),
						i = Date.now();
					if (!o.ok || !o.body) return o;
					const d = o.body,
						u = Date.now(),
						l = Object(p.a)(d.data),
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
						...o,
						ok: !!d.data.subredditInfoByName && !Object(O.k)(d.data.subredditInfoByName),
						status: C(d.data),
						body: l
					}
				}, C = e => {
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
			t.a = (e, t, r) => Object(d.a)(e, {
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
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, r) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? a.richtext_json = r : a.markdown_text = r, Object(s.a)(Object(o.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.ob.POST,
					data: a
				})
			}
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/models/PostDraft/index.ts");
			const o = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				i = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				d = e => {
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
					kind: d(e),
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
				o = r("./node_modules/lodash/mapKeys.js"),
				i = r.n(o),
				d = r("./src/lib/constants/index.ts"),
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
					method: d.ob.GET
				}).then(e => (e.ok && e.body.rules && (e.body = f(e.body)), e)),
				j = e => e.ok ? (e.body = Object(p.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: d.ob.POST,
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
					method: d.ob.POST,
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
					method: d.ob.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), v = e => e.map(e => encodeURIComponent(e)).join(), y = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: d.ob.POST,
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
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/endpoints/post/convert.ts"),
				s = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/selectors/experiments/supportingLinkAds.ts");
			const i = e => !(!Object(s.B)(e) || !e.adSupplementaryText || "string" != typeof e.adSupplementaryText),
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
				}, c = async (e, t, r) => {
					if (!Object(o.a)(r) || !t) return t;
					const n = {};
					for (const [s, o] of Object.entries(t)) n[s] = i(o) ? await d(e, o) : o;
					return n
				}
		},
		"./src/reddit/helpers/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				s = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				i = r("./src/reddit/constants/things.ts"),
				d = r("./src/reddit/models/Upload/index.ts"),
				c = r("./src/reddit/models/Vote/index.ts");
			const a = (e, t) => e.rteState ? o.a.toRichTextJSON(e.rteState, t) : e.rtJson || e.text,
				u = (e, t) => {
					let r = [];
					return e.rteState ? r = o.a.toRichTextJSON(e.rteState, t).document : e.rtJson && (r = e.rtJson.document), {
						document: r
					}
				},
				l = (e, t) => JSON.stringify(u(e, t));

			function b() {
				return `${i.a}_${Object(n.a)()}`
			}

			function m(e) {
				let {
					temporalId: t,
					draft: r,
					post: n,
					author: s,
					subredditId: o,
					parentId: i
				} = e;
				return {
					id: t,
					postId: n.postId,
					subredditId: o,
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
						richtextContent: u(r)
					},
					parentId: i,
					permalink: "",
					postAuthor: n.author,
					postTitle: null,
					score: 1,
					sendReplies: !1,
					modReports: [],
					numReports: 0,
					voteState: c.a.notVoted,
					userReports: []
				}
			}

			function p(e, t) {
				for (const r of Object.keys(t)) {
					const n = t[r],
						s = n.url ? Object(d.b)(n.url) : null;
					if (s && e.includes(s)) return n
				}
				return null
			}
			const f = (e, t) => t ? Object(s.a)(e, {
				depth: t
			}) : e
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
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
				o = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
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
					let o = Object(s.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > r && o.prev && (i = o.prev, (o = Object(s.n)(n, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= r)););
					return i.id
				},
				l = (e, t, r) => {
					const {
						commentLists: n,
						comments: s
					} = e, {
						head: d
					} = n[t];
					if (d) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const r = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.y,
								expEventOverride: t
							});
							return !!(Object(o.hg)(r) ? void 0 : r)
						})(r)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/counters/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/sample/index.ts"),
				o = r("./src/telemetry/helpers/sendCounter.ts");
			const i = (e, t) => {
					Object(o.b)(n.o.Redesign, {
						type: o.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				d = (e, t) => {
					Object(s.b)(10) && Object(o.b)(n.o.Redesign, {
						type: o.a.ReonboardingFlow,
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
				o = r("./src/reddit/models/WhitelistStatus/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/index.ts");
			const c = (e, t) => {
				let {
					subreddits: r,
					profiles: n
				} = t;
				const s = r[e.belongsTo.id] || n[e.belongsTo.id];
				return !e.isNSFW && s && o.a.has(s.wls || o.b.NO_ADS)
			};
			t.a = (e, t, r) => {
				let {
					postIds: n,
					posts: o,
					subreddits: a,
					profiles: u,
					...l
				} = r;
				const b = e.listings.postOrder.ids[t],
					m = (n || []).filter(e => !b || !b.includes(e)),
					p = b.map(t => e.posts.models[t]),
					f = p.length - (s()(p, e => e.isSponsored) + 1),
					O = m.map(e => o[e]);
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
					r.isSponsored && n && (null == g && f + s >= 3 || s - g >= 3) ? (g = s, j.push(r.id)) : r.isSponsored ? r.isSponsored && Object(d.a)({
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
					posts: o,
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
		"./src/reddit/helpers/graphql/normalizeChannelsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => {
				const t = [],
					r = {},
					n = (e, t, r) => {
						for (const s of e) {
							if (!s) continue;
							const e = s.node;
							if (!e) continue;
							if (e.channels) {
								n(e.channels.edges, t, r);
								continue
							}
							const o = e.id;
							t.push(o), r[o] = e
						}
					};
				return n(e.edges, t, r), {
					channelIds: t,
					channels: r
				}
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
							o = s.length <= 0,
							i = r.id,
							d = {
								id: i,
								isRoot: o,
								parents: s,
								title: r.topic.title,
								name: r.topic.name
							};
						return o ? (e.topics.push(n(d)), e.dict[i] = e.topics.length - 1) : s.forEach(t => {
							var r;
							const s = e.dict[t];
							if ("number" == typeof s) {
								null === (r = e.topics[s].children) || void 0 === r || r.push(n(d))
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
				return N
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/assertNever.ts"),
				s = r("./src/lib/env/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				d = r("./src/reddit/actions/gold/customEmojis.ts"),
				c = r("./src/reddit/models/Post/index.ts"),
				a = r("./src/reddit/models/RichTextJson/index.ts"),
				u = r("./src/reddit/models/Subreddit/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeChannelsFromGql/index.ts"),
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
				C = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				x = r("./src/reddit/models/Onboarding/index.ts"),
				A = r("./src/reddit/helpers/graphql/helpers.ts");
			const N = (e, t, r, i) => {
				const d = {
						account: null,
						authorFlair: {},
						channelIds: [],
						channels: {},
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
						trendingSubredditIds: [],
						userFlair: {}
					},
					a = function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (Object(c.j)(e) || Object(c.i)(e)) return null;
						if (d.posts[e.id]) return e.id;
						const r = Object(O.f)(e, !0);
						d.posts[r.id] = r;
						const {
							crosspostRoot: u
						} = e;
						u && u.type === c.a.Post && u.postInfo && a(u.postInfo, !0), Object(c.o)(e).forEach(e => a(e, !0));
						let l = r.id;
						if (e.authorFlair && (d.authorFlair[r.belongsTo.id] || (d.authorFlair[r.belongsTo.id] = {}), d.authorFlair[r.belongsTo.id][r.author] = Object(b.a)(e.authorFlair)[0]), Object(c.l)(e)) d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(j.a)(e.profile));
						else if (Object(c.n)(e)) d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(p.a)(e.subreddit));
						else if (Object(c.h)(e)) {
							const t = Object(O.b)(e);
							if (!t) return null;
							l = t, d.posts[t] = {
								...r,
								id: t,
								permalink: `${r.permalink}?instanceId=${encodeURIComponent(t)}`
							}, d.posts[r.id] || (d.posts[r.id] = {
								...r,
								events: []
							}), d.postInstances[e.id] || (d.postInstances[e.id] = []), d.postInstances[e.id].push(t)
						} else try {
							Object(n.a)(e)
						} catch (f) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(s.b)() || console.warn(t), o.c.captureMessage(t)
						}
						const m = i && i.includes(l);
						return t || !l || m || d.postIds.push(l), l
					};
				if (e.forEach(e => a(e)), t) {
					d.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) d.subreddits[e.id] = Object(I.a)(e)
				}
				const u = d.postIds.length - 1;
				return d.token = u >= 0 ? d.postIds[u] : "", r && (d.account = Object(C.a)(r), d.preferences = r.preferences && Object(g.a)(r.preferences, r.interactions) || null), d
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
				var I, R, P, w, k, D, U, G, F, q;
				if (!g) return {
					reason: u.f.NotFoundSubreddit,
					data: {
						account: n && Object(C.a)(n) || null
					}
				};
				if (Object(u.k)(g)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: r,
						isEmailRequiredForQuarantineOptin: s,
						interstitialWarningMessage: o
					} = g;
					return {
						reason: L(g.forbiddenReason),
						data: {
							account: n && Object(C.a)(n) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: s,
							...r ? {
								quarantineMessage: r.markdown,
								quarantineMessageRTJson: Object(A.h)(r.richtext, a.i)
							} : {},
							interstitialWarningMessage: null == o ? void 0 : o.markdown,
							interstitialWarningMessageRTJson: Object(A.h)(null == o ? void 0 : o.richtext, a.i)
						}
					}
				}
				const M = {},
					B = g.devPlatformMetadata;
				let Q;
				const z = g || p || r || t,
					[H, K] = z.elements.edges.reduce((e, t, r) => {
						var n, s, o, i;
						const [d, a] = e, u = t.node;
						if (Object(c.k)(u)) {
							const e = u;
							e.subreddit = {
								...e.subreddit,
								devPlatformMetadata: B
							}, d.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (i = null === (o = u.flair) || void 0 === o ? void 0 : o.template) || void 0 === i ? void 0 : i.postStyle) && (M[u.flair.template.id] = Object(f.a)(u.flair.template.postStyle))
						} else if (Object(x.g)(u)) {
							const e = Object(m.a)(u.interestTopicRecommendations.recommendationTopics);
							e.topics.length && (Q = {
								interests: e,
								index: r
							})
						} else a.push(u);
						return [d, a]
					}, [
						[],
						[]
					]);
				if (K.length) {
					const e = `Received unhandled ${K.length} elements when processing subreddit data: "${K[0].__typename}"`;
					Object(s.b)() || console.warn(e), o.c.captureMessage(e)
				}
				O && H.push(...O);
				const J = z.elements.dist,
					V = N(H, j, n);
				if (g.styles && (V.structuredStyles = {
						data: {
							style: Object(T.a)(g.styles)
						}
					}), V.structuredStyles = {
						data: {
							...g.styles ? {
								style: Object(T.a)(g.styles)
							} : {},
							content: {
								widgets: Object(E.a)(g)
							},
							flairTemplate: M
						}
					}, V.subredditAboutInfo = Object(_.a)(g), g.modPermissions && (V.subredditPermissions = Object.keys(g.modPermissions).length > 0 ? Object(v.a)(g.modPermissions) : void 0), g.rules && (V.subredditRules = Object(y.a)(g.rules).rules), ((null == g ? void 0 : g.answerableQuestions) || g.contentRatingSurvey || g.communityProgressModule) && (V.questions = {
						answerableQuestions: null == g ? void 0 : g.answerableQuestions,
						contentRatingSurvey: null == g ? void 0 : g.contentRatingSurvey,
						communityProgressModule: null == g ? void 0 : g.communityProgressModule
					}), Object(u.k)(g) || Object.assign(V, Object(i.b)(g), Object(d.b)(g)), V.subredditLinks = Object(h.a)({
						data: {
							subredditInfoById: g
						}
					}), V.subredditTopicLinks = Object(S.a)({
						data: {
							subredditInfoById: g
						}
					}), V.userFlair = {
						[g.id]: {
							displaySettings: {
								isEnabled: !!(null === (I = g.authorFlairSettings) || void 0 === I ? void 0 : I.isEnabled),
								isSelfAssignable: !!(null === (R = g.authorFlairSettings) || void 0 === R ? void 0 : R.isSelfAssignable),
								isUserEnabled: !!(null === (P = g.authorFlairSettings) || void 0 === P ? void 0 : P.isOwnFlairEnabled),
								position: null === (k = null === (w = g.authorFlairSettings) || void 0 === w ? void 0 : w.position) || void 0 === k ? void 0 : k.toLowerCase()
							},
							permissions: {
								canAssignOwn: !!(null === (D = g.authorFlairSettings) || void 0 === D ? void 0 : D.isSelfAssignable),
								canUserChange: !!((null === (U = g.authorFlairSettings) || void 0 === U ? void 0 : U.isSelfAssignable) && (null === (G = g.authorFlairSettings) || void 0 === G ? void 0 : G.isEnabled) || (null === (F = V.subredditPermissions) || void 0 === F ? void 0 : F.flair) || (null === (q = V.account) || void 0 === q ? void 0 : q.isAdmin))
							},
							applied: g.authorFlair ? Object(b.a)(g.authorFlair)[0] : void 0,
							templates: {},
							templateIds: []
						}
					}, Q && (V.interestTopicRecommendations = Q), V.predictionTournaments = g.predictionTournaments || [], g.channels) {
					const {
						channels: e,
						channelIds: t
					} = Object(l.a)(g.channels);
					V.channels = e, V.channelIds = t
				}
				return {
					...V,
					...null !== J && {
						dist: J
					}
				}
			};
			const L = e => {
				switch (e) {
					case u.d.Banned:
						return u.f.BannedSubreddit;
					case u.d.GoldOnly:
						return u.f.GoldSubreddit;
					case u.d.Private:
						return u.f.PrivateSubreddit;
					case u.d.Quarantined:
						return u.f.QuarantinedSubreddit;
					case u.d.Gated:
						return u.f.GatedSubreddit;
					case u.d.Unknown:
						return u.f.ForbiddenSubreddit
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
				o = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./node_modules/reselect/es/index.js");
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
				b = Object(d.a)(i.P, o.b, (e, t) => e || t ? {
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
				o = r("./src/reddit/helpers/featureThrottling/store/index.ts"),
				i = r("./src/reddit/helpers/onboarding/postsConsumedWeekly.ts"),
				d = r("./src/reddit/models/Onboarding/index.ts");
			const c = () => {
					const e = Date.now() - n.xc,
						t = Object(s.b)().filter(t => t.lastVisited >= e),
						r = Object(i.a)();
					return t.length < 3 || r < 50
				},
				a = () => !(() => !o.a.isReady || o.a.isFeatureThrottled(d.e.FeatureGate) || o.a.isFeatureThrottled(d.e.Dismissed))() && c(),
				u = () => !(() => !o.a.isReady || o.a.throttlingData[d.e.FeatureGate] || o.a.isFeatureThrottled(d.e.Triggered) || o.a.isFeatureThrottled(d.e.Dismissed))() && c(),
				l = () => {
					o.a.isFeatureThrottled(d.e.Triggered) || (o.a.throttleFeature(d.e.FeatureGate), o.a.throttleFeature(d.e.Triggered))
				},
				b = () => {
					o.a.throttleFeature(d.e.Dismissed)
				}
		},
		"./src/reddit/helpers/r2/normalizePostFromR2/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/models/Media/index.ts"),
				i = r("./src/reddit/models/PostCreationForm/index.ts"),
				d = r("./src/reddit/models/Vote/index.ts");
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
						d = {};
					const c = e.over_18 || e.spoiler;
					if (e.preview && (r = !!(d = e.preview.images[0].variants).mp4, s = e.preview.images[0].source, c && (n = d.obfuscated.source.url)), e.is_self) return {
						content: e.selftext_html,
						type: o.o.TEXT,
						markdownContent: e.selftext,
						obfuscated: n,
						rteMode: e.rte_mode || i.i.RICH_TEXT,
						...e.rtjson && {
							richtextContent: e.rtjson,
							type: o.o.RTJSON,
							mediaMetadata: e.media_metadata
						}
					};
					if (e.secure_media && e.secure_media.oembed || e.is_survey_ad) return {
						content: e.secure_media_embed.media_domain_url,
						type: o.o.EMBED,
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
							type: o.o.VIDEO
						}
					}
					if (t && r) return {
						content: d.mp4.source.url,
						type: o.o.GIFVIDEO,
						width: d.mp4.source.width,
						height: d.mp4.source.height,
						gifBackgroundImage: s.url,
						gifBackgroundResolutions: e.preview.images[0].resolutions,
						obfuscated: n,
						resolutions: d.mp4.resolutions
					};
					if (t) {
						const t = d.gif ? d.gif.resolutions : e.preview.images[0].resolutions;
						return {
							content: s.url,
							type: o.o.IMAGE,
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
					voteState: Object(d.d)(e.likes)
				}
			}
		},
		"./src/reddit/helpers/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n);
			const o = e => s()(e).sort((t, r) => {
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
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					profile: s.T(e),
					post: s.K(e, t),
					media: s.C(e, t),
					subreddit: s.lb(e),
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
						...o(t, r)
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
						...s.o(t),
						...o(t, r)
					})
				},
				c = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.sb(t),
					subreddit: s.lb(t),
					post: s.K(t, e),
					actionInfo: s.d(t),
					app: s.f(t),
					referrer: s.Z(t),
					session: s.hb(t)
				}),
				a = e => t => ({
					source: "post_detail",
					action: "click",
					noun: "comment_image",
					...s.o(t),
					...o(t, e)
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
				o = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/index.ts");
			! function(e) {
				e.communitySettings = "community_settings", e.idCard = "id_card"
			}(n || (n = {}));
			const d = (e, t, r) => {
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
						isPrimary: d(e, t, n.id)
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
						isPrimary: d(e, t, n.id)
					} : null
				},
				l = (e, t, r) => ({
					...o.o(e),
					subreddit: {
						...o.lb(e) || {},
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
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/index.ts");
			const o = e => t => Object(s.a)({
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
				return d
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
				o = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(n || (n = {}));
			const i = e => ({
					subreddit: o.lb(e),
					userSubreddit: o.ub(e)
				}),
				d = e => ({
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
					...o.o(e),
					actionInfo: o.d(e, {
						reason: t
					})
				})
		},
		"./src/reddit/helpers/trackers/modNote.ts": function(e, t, r) {
			"use strict";
			r.d(t, "w", (function() {
				return d
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
				return C
			})), r.d(t, "v", (function() {
				return x
			})), r.d(t, "j", (function() {
				return A
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return L
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => {
					var r, n, s, o, i, d, c, a, u, l, b;
					const {
						modNote: m,
						subredditId: p,
						userId: f,
						postId: O,
						commentId: g,
						subredditSearch: j,
						filteredType: _,
						filteredSubredditId: I
					} = t, h = g || (null === (n = null === (r = m) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), v = O || (null === (o = null === (s = m) || void 0 === s ? void 0 : s.postInfo) || void 0 === o ? void 0 : o.id);
					return {
						modnote: {
							type: null == m ? void 0 : m.itemType,
							content: null === (i = m) || void 0 === i ? void 0 : i.note,
							label: null === (c = null === (d = m) || void 0 === d ? void 0 : d.label) || void 0 === c ? void 0 : c.toLowerCase(),
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
				d = e => t => ({
					source: i,
					action: "view",
					noun: "modnote_quickaccess",
					correlationId: Object(n.d)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				c = e => t => {
					const r = {
						source: i,
						action: "close",
						noun: "modnote_quickaccess",
						correlationId: Object(n.c)(n.a.ModNotes),
						...s.o(t),
						...o(0, e)
					};
					return Object(n.b)(n.a.ModNotes), r
				},
				a = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				u = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				l = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				b = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				m = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				p = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				f = e => t => ({
					source: i,
					action: "click",
					noun: "username_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				O = e => t => ({
					source: i,
					action: "click",
					noun: "mod_username_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				g = e => t => ({
					source: i,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				j = e => t => ({
					source: i,
					action: "view",
					noun: "user_profile_hovercard",
					correlationId: Object(n.d)(n.a.ModNotes, !1),
					...s.o(t),
					...o(0, e)
				}),
				_ = e => t => ({
					source: i,
					action: "click",
					noun: "add_note_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				I = e => t => ({
					source: i,
					action: "click",
					noun: "user_mod_log_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				h = e => t => ({
					source: i,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				v = e => t => ({
					source: i,
					action: "view",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				y = e => t => ({
					source: i,
					action: "close",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				T = e => t => ({
					source: i,
					action: "click",
					noun: "type_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				S = e => t => ({
					source: i,
					action: "click",
					noun: "subreddit_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				E = e => t => ({
					source: i,
					action: "select",
					noun: "type_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				C = e => t => ({
					source: i,
					action: "select",
					noun: "subreddit_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				x = e => t => ({
					source: i,
					action: "submit",
					noun: "submit_note_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				A = e => t => ({
					source: i,
					action: "click",
					noun: "delete_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				N = e => t => ({
					source: i,
					action: "click",
					noun: "cancel_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				L = e => t => ({
					source: i,
					action: "click",
					noun: "delete_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				})
		},
		"./src/reddit/models/CommunityChat/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.SubredditPostChannel = "SubredditPostChannel", e.SubredditChatChannel = "SubredditChatChannel"
				}(n || (n = {}))
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
				return o
			}));
			const n = e => !e.id,
				s = e => !!e.id,
				o = (e, t) => n(e) && n(t) ? e.displayText.toLowerCase().trim() === t.displayText.toLowerCase().trim() : !(!s(e) || !s(t)) && e.id === t.id
		},
		"./src/reddit/models/Tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			const n = 25,
				s = 64;
			var o;
			! function(e) {
				e.EVENT = "EVENT", e.COLLECTION = "COLLECTION", e.CLASSIFICATION = "CLASSIFICATION", e.POST_CLASSIFICATION = "POST_CLASSIFICATION", e.SUBREDDIT_CLASSIFICATION = "SUBREDDIT_CLASSIFICATION", e.COMMENT_CLASSIFICATION = "COMMENT_CLASSIFICATION"
			}(o || (o = {}));
			const i = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return {
						id: e.id,
						displayText: e.text,
						selected: t
					}
				},
				d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return i(e.tag, t)
				};
			var c;
			! function(e) {
				e.TAGGED = "TAGGED", e.NONE = "NONE"
			}(c || (c = {}))
		},
		"./src/reddit/reducers/features/communityChat/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/actions/communityChat/index.ts");
			const s = {
				selectedChannelId: "",
				models: {},
				channelIds: {}
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.b:
						return {
							...e, selectedChannelId: t.payload
						};
					case n.a: {
						const {
							subredditId: r,
							channelIds: n,
							channels: s
						} = t.payload;
						return {
							...e,
							channelIds: {
								...e.channelIds,
								[r]: n
							},
							models: {
								...e.models,
								...s
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/modUserNotes/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/subredditModeration/constants.ts");
			var o = function() {
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
			const d = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.U: {
							const {
								subredditId: r,
								userId: n,
								filter: s
							} = t.payload, o = Object(i.d)(r, n, s);
							return {
								...e,
								[o]: !0
							}
						}
						case s.T:
						case s.S: {
							const {
								subredditId: r,
								userId: n,
								filter: s
							} = t.payload, o = Object(i.d)(r, n, s);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				a = Object(n.c)({
					error: o,
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
								fetchedToken: o
							} = t.payload, d = Object(i.d)(r, n, s, o);
							return {
								...e,
								[d]: !0
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
						itemType: b.B.Ban,
						createdAt: new Date(1e3 * e.bannedAtUTC),
						operator: {
							id: e.bannedById,
							displayName: e.bannedBy
						},
						user: {
							id: e.id,
							displayName: e.username
						},
						label: b.I.Ban,
						note: r
					} : null
				},
				O = e => {
					return {
						__typename: "ModActionNote",
						id: p(e),
						itemType: b.B.Ban,
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
						} = t.payload, s = Object(i.d)(r, n.user.id, b.A.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.H: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, o = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, d = Object(i.d)(n, o, b.A.All);
						return {
							...e,
							[d]: s.id
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
								o = Object(i.d)(r, n, b.A.All);
							s[o] = e.id
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
						} = n, o = n.id;
						if (!n.modNote) return e;
						const d = m(n),
							c = Object(i.d)(s, o, b.A.All);
						return {
							...e,
							[c]: d
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
									o = f(t);
								return o ? (e[s] = o, e) : e
							}, {}))
						}
						default:
							return e
					}
				},
				T = r("./node_modules/lodash/uniq.js"),
				S = r.n(T);
			const E = {};
			var C = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var r;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: n,
							newModNote: s,
							filter: o
						} = t.payload;
						if (o !== b.A.All && o !== b.A.Note) return e;
						const d = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(i.d)(n, d, o),
							a = o === b.A.All ? b.A.Note : b.A.All,
							u = Object(i.d)(n, d, a);
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
							filter: o
						} = t.payload, d = Object(i.d)(n, s, o), c = r.map(e => e.id);
						return e[d] ? {
							...e,
							[d]: S()([...e[d], ...c])
						} : {
							...e,
							[d]: c
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n,
							noteId: s
						} = t.payload, o = Object(i.d)(r, n, b.A.All), d = Object(i.d)(r, n, b.A.Note), c = e[o] ? e[o].filter(e => e !== s) : [], a = e[d] ? e[d].filter(e => e !== s) : [];
						return {
							...e,
							...e[o] ? {
								[o]: c
							} : null,
							...e[d] ? {
								[d]: a
							} : null
						}
					}
					case s.p: {
						const {
							bannedUsers: r
						} = t.payload, n = Object.values(r)[0], {
							subredditId: s
						} = n, o = n.id, d = Object(i.d)(s, o, b.A.All), c = Object(i.d)(s, o, b.A.Note), a = Object(i.d)(s, o, b.A.Ban), u = p(n), l = m(n), f = e[d] ? [l, u, ...e[d]] : [], O = e[c] ? [l, ...e[c]] : [], g = e[a] ? [u, ...e[a]] : [];
						return {
							...e,
							...e[d] ? {
								[d]: f
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
			const x = {};
			var A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.Q: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(i.d)(r, n.user.id, b.A.All);
						return {
							...e,
							[s]: {
								...e[s],
								[b.A.All]: (e[s][b.A.All] || 0) + 1,
								[b.A.Note]: (e[s][b.A.Note] || 0) + 1
							}
						}
					}
					case s.lb: {
						const {
							subredditId: r,
							userId: n,
							totalCounts: s
						} = t.payload, o = Object(i.d)(r, n, b.A.All);
						return {
							...e,
							[o]: Object.keys(s).reduce((e, t) => (e[t] = s[t].totalCount, e), {})
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(i.d)(r, n, b.A.All);
						return {
							...e,
							...void 0 !== e[s] ? {
								[s]: {
									...e[s],
									[b.A.All]: (e[s][b.A.All] || 1) - 1,
									[b.A.Note]: (e[s][b.A.Note] || 1) - 1
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
				order: C,
				totalCount: A
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = r("./src/reddit/actions/modQueue/constants.ts"),
				d = r("./src/reddit/actions/pages/constants.ts"),
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
					case d.b:
					case d.f:
					case l.k:
						return {
							...e, ...t.payload.userFlair
						};
					case i.i:
					case i.f:
					case i.r:
					case i.u:
					case i.A: {
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
					case l.s: {
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
					case o.h: {
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
						} = t.payload, o = {
							...null === (r = e[n]) || void 0 === r ? void 0 : r.permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: o
							}
						}
					}
					case l.q: {
						const r = t.payload,
							s = e[r.subredditId],
							o = null === (n = e[r.subredditId]) || void 0 === n ? void 0 : n.templates,
							i = null === (m = e[r.subredditId]) || void 0 === m ? void 0 : m.templateIds,
							d = (null === (p = r.template) || void 0 === p ? void 0 : p.id) || (null === (f = r.template) || void 0 === f ? void 0 : f.templateId);
						if (!d) return;
						const c = {
								...o,
								[d]: r.template
							},
							a = [...i];
						return a.includes(d) || a.push(d), {
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
							o = e[r.subredditId].templates,
							i = e[r.subredditId].templateIds,
							d = s()(o, r.templateId),
							c = i.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...d
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
					case l.r: {
						const {
							subredditId: r,
							templateIds: n,
							templates: s
						} = t.payload, o = e[r];
						return {
							...e,
							[r]: {
								...o,
								templates: s,
								templateIds: n
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
			const o = [];
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.u:
							return t.payload;
						case s.v:
						default:
							return e
					}
				},
				d = r("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.d:
					case d.b:
					case d.h:
					case d.f: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: null
						}
					}
					case d.a:
					case d.e: {
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
					case d.c:
					case d.g: {
						const {
							key: r
						} = t.payload;
						return {
							...e,
							[r]: !0
						}
					}
					case d.i: {
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
						case d.d:
						case d.h:
						case d.i: {
							const {
								key: r
							} = t.payload;
							return {
								...e,
								[r]: !0
							}
						}
						case d.b:
						case d.a:
						case d.f:
						case d.e: {
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
			var C = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case d.f:
						case f.y:
						case d.b: {
							const {
								comments: r,
								key: n
							} = t.payload, s = e[n] ? e[n] : [], o = S(r, s.find(e => e.stickied)), i = h([...s, ...o]);
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
				x = r("./node_modules/lodash/mapValues.js"),
				A = r.n(x),
				N = r("./src/reddit/helpers/commentList/index.ts"),
				L = r("./src/reddit/models/Comment/index.ts");
			const R = {};

			function P(e) {
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
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.y: {
						const {
							comments: r,
							commentLists: n,
							continueThreads: s,
							key: o,
							moreCommentsItem: i,
							moreComments: d
						} = t.payload, c = n[i.postId], a = e[o], u = {}, l = a[i.id];
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
									moreCommentsDict: d,
									continueThreadDict: s
								}),
								t = Object(N.c)({
									commentLink: c.tail,
									commentsDict: r,
									moreCommentsDict: d,
									continueThreadDict: s
								});
							l && (e.prev = l.prev, t.next = l.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...P(r),
								...P(s),
								...P(d),
								...u
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: r,
							continueThreads: n,
							key: s,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...P(r),
								...P(n),
								...P(o)
							}
						}
					}
					case j.b:
					case f.N: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, o = e[n], i = {};
						let d = null;
						return s && (i[s] = {
							...o[s],
							prev: Object(L.i)(r.id)
						}, d = Object(L.i)(s)), {
							...e,
							[n]: {
								...e[n],
								...i,
								[r.id]: {
									depth: 0,
									next: d,
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
							depth: o
						} = t.payload, i = e[n], d = {};
						let c = null;
						if (!i[s]) return e;
						const a = i[s].next;
						return a && (d[a.id] = {
							...i[a.id],
							prev: Object(L.i)(r.id)
						}, c = a), d[s] = {
							...i[s],
							next: Object(L.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...d,
								[r.id]: {
									depth: o,
									next: c,
									prev: Object(L.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const k = {};
			var D = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
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
					case d.b:
					case d.f: {
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
					case d.i: {
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
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
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
				keyToChatCommentLinks: C,
				keyToCommentThreadLinkSets: w,
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
				o = r.n(s),
				i = r("./node_modules/lodash/values.js"),
				d = r.n(i),
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
						} = t.payload, c = o()([...(e.selectedOptions[r] || []).map(e => {
							if (!e.id) {
								const t = d()(n[r] || {}).find(t => e.displayText.toLowerCase().trim() === t.tag.text.toLowerCase().trim());
								if (t) return {
									...Object(u.e)(t, !0),
									action: null
								}
							}
							return e
						}), ...d()(n[r] || {}).map(e => ({
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
								[r]: d()(s[r] || {}).map(e => ({
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
						} = t.payload, i = t.type === c.z ? "selectedOptions" : "selectedSuggestedOptions", d = t.type === c.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[d][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						let b = n.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: o()([...e[i][r] || [], {
									...s,
									action: b
								}], a.a)
							},
							[d]: {
								...e[d],
								[r]: u
							}
						}
					}
					case c.C:
					case c.y: {
						const {
							subredditId: r,
							option: s
						} = t.payload, o = t.type === c.y ? "selectedOptions" : "selectedSuggestedOptions", i = t.type === c.y ? "deselectedOptions" : "deselectedSuggestedOptions", d = (e[i][r] || []).slice(), u = (e[o][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						return l > -1 && (null === u[l].action && d.push({
							...u[l],
							action: n.REMOVE
						}), u.splice(l, 1)), {
							...e,
							[o]: {
								...e[o],
								[r]: u
							},
							[i]: {
								...e[i],
								[r]: d
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
							o = n.reduce((e, t) => (e.selectedOptions[t] = d()(r[t]).map(e => ({
								...Object(u.e)(e, !0),
								action: null
							})), e.deselectedOptions[t] = [], e.inputByItemId[t] = "", e), s);
						return {
							...e,
							inputByItemId: {
								...e.inputByItemId,
								...o.inputByItemId
							},
							selectedOptions: {
								...e.selectedOptions,
								...o.selectedOptions
							},
							deselectedOptions: {
								...e.deselectedOptions,
								...o.deselectedOptions
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
							o = e.selectedOptions[r];
						if (o) {
							const t = o.findIndex(e => e.id === n),
								i = [...o];
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
				return C
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "t", (function() {
				return k
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "L", (function() {
				return U
			})), r.d(t, "s", (function() {
				return G
			})), r.d(t, "F", (function() {
				return F
			})), r.d(t, "G", (function() {
				return q
			})), r.d(t, "H", (function() {
				return M
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "e", (function() {
				return Q
			})), r.d(t, "N", (function() {
				return z
			})), r.d(t, "v", (function() {
				return H
			})), r.d(t, "M", (function() {
				return K
			})), r.d(t, "f", (function() {
				return J
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
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/objectSelector/index.ts"),
				d = r("./node_modules/reselect/es/index.js"),
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
					if (r) return Object(b.c)(e, {
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
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[s], i = [];
					let d = {
						id: n,
						type: c.a.Comment
					};
					do {
						i.push(d), d = o[d.id].next
					} while (d);
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
					const o = e.pages.comments.keyToCommentThreadLinkSets[s];
					return o ? n ? o[n.id] : r ? o[r] : null : null
				},
				C = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.pages.comments.keyToCommentThreadLinkSets[r]
				},
				x = (e, t) => {
					const r = t.commentsPageKey ? E(e, t) : null;
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
						} = e.platform.currentPage.urlParams, r = Object(a.y)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== o.H).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				L = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					return e.features.comments.collapsed[r]
				},
				R = e => e.moreComments.models,
				P = e => e.features.comments.models,
				w = (e, t) => {
					let {
						commentId: r
					} = t;
					const n = Object(b.c)(e, {
						commentId: r
					});
					return n ? Object(b.b)(e, n) : ""
				},
				k = (e, t) => {
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
						o = s && Object(b.c)(e, {
							commentId: s
						}),
						i = o && x(e, {
							commentId: o.id,
							commentLink: void 0,
							commentsPageKey: r
						});
					if (o && "number" == typeof i) return {
						...o,
						depth: i
					}
				},
				F = (e, t) => {
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
				M = (e, t) => {
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
				z = (e, t) => {
					let {
						draftKey: r
					} = t;
					var n, s, o;
					return (null === (o = null === (s = null === (n = e.features.comments.submit) || void 0 === n ? void 0 : n.error) || void 0 === s ? void 0 : s[r]) || void 0 === o ? void 0 : o.type) || null
				},
				H = (e, t) => {
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
				J = (e, t) => {
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
					const r = Object(b.c)(e, t);
					if (r) return Object(l.cb)(e, r)
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
					const o = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r);
					return !!(o && o.expiresAt < Date.now())
				},
				re = Object(d.a)(u.a, l.y, (e, t) => {
					var r;
					return e && (null === (r = null == t ? void 0 : t.allowedMediaInComments) || void 0 === r ? void 0 : r.includes(O.h.Giphy)) || !1
				}),
				ne = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n;
					const s = Object(l.y)(e, {
						subredditId: r
					});
					return (null === (n = null == s ? void 0 : s.allowedMediaInComments) || void 0 === n ? void 0 : n.includes(O.h.Static)) || !1
				},
				se = (e, t) => {
					let {
						subredditId: r
					} = t;
					var n;
					const s = Object(l.y)(e, {
						subredditId: r
					});
					return (null === (n = null == s ? void 0 : s.allowedMediaInComments) || void 0 === n ? void 0 : n.includes(O.h.Animated)) || !1
				}
		},
		"./src/reddit/selectors/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts"), r("./src/lib/makeListingKey/index.ts"), r("./src/lib/objectSelector/index.ts");
			var n = r("./src/reddit/helpers/name/index.ts"),
				s = r("./src/reddit/models/DiscoveryUnit/index.ts");
			r("./src/reddit/selectors/category.ts"), r("./src/reddit/selectors/listings.ts"), r("./src/reddit/selectors/posts.ts"), r("./src/reddit/selectors/subreddit.ts");
			const o = e => e.discoveryUnits.api.list.loaded,
				i = e => e.discoveryUnits.api.list.pending,
				d = (e, t) => {
					let {
						unitName: r
					} = t;
					const s = e.discoveryUnits.nameToId[Object(n.i)(r)];
					return e.discoveryUnits.models[s]
				},
				c = e => d(e, {
					unitName: s.b
				}),
				a = new Set(["sequence"]),
				u = e => {
					const t = e.platform.currentPage;
					if (t) {
						const {
							meta: e,
							urlParams: r
						} = t, n = e && e.name || "", s = r && r.subredditName || "", o = "subreddit" === n, i = a.has(s.toLowerCase());
						return o && i
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/communityChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./node_modules/reselect/es/index.js");
			var s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts"),
				i = r("./src/reddit/selectors/platform.ts");
			const d = Object(n.a)(i.c, e => "t5_7bf0ce" === e),
				c = Object(o.a)(s.Rb),
				a = Object(n.a)(d, c, (e, t) => e && t)
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
				o = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/helpers/isCrosspost.ts"),
				c = r("./src/reddit/models/Media/index.ts"),
				a = r("./src/reddit/selectors/activeModal.ts"),
				u = r("./src/reddit/selectors/experiments/index.ts"),
				l = r("./src/reddit/selectors/posts.ts");
			const b = e => {
					return Object(i.c)(e, {
						experimentEligibilitySelector: u.e,
						experimentName: o.Ne
					}) === o.Id
				},
				m = e => !e.media || e.media.type !== c.o.RTJSON && e.media.type !== c.o.TEXT ? "" : e.media.markdownContent,
				p = e => !e.media && e.source && Object(n.a)(e.source.url) ? e.source.displayText : "",
				f = (e, t) => {
					const r = Object(l.G)(e, {
						postId: t
					});
					return r && !r.isSponsored && r.isCrosspostable && !Object(d.a)(r) && Object(a.c)(s.a)(e)
				},
				O = e => {
					var t;
					return !!(null === (t = e.features) || void 0 === t ? void 0 : t.shouldTryToShowCrosspostModal)
				}
		},
		"./src/reddit/selectors/experiments/devPlatform.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(n.qb)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Bb
				}) === n.Xc.Enabled,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Ab
				}) === n.Wc.Enabled
		},
		"./src/reddit/selectors/experiments/mediaInComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ue
				}) === n.Id,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.te
				}) === n.Id
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "f", (function() {
				return L
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "d", (function() {
				return P
			}));
			var n, s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/selectors/subreddit.ts"),
				i = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const f = p(i.ac, !0),
				O = p(i.ac, !1),
				g = p(i.cc, !0),
				j = (p(i.cc, !1), p(i.bc, !0)),
				_ = p(i.bc, !1),
				I = p(i.dc, !0),
				h = p(i.dc, !1),
				v = p(i.Zb, !0),
				y = p(i.ec, !0),
				T = Object(s.a)(f, g, (e, t) => e === i.Yc.Enabled || t === i.Zc.Enabled),
				S = Object(s.a)(j, I, (e, t) => e === i.db.BlurredPreview || e === i.db.NoPreview || t === i.db.BlurredPreview || t === i.db.NoPreview),
				E = Object(s.a)(_, h, (e, t) => e === i.db.BlurredPreview || t === i.db.BlurredPreview),
				C = Object(s.a)(j, I, v, (e, t, r) => e === i.db.NoPreview || t === i.db.NoPreview || r === i.cb.Enabled),
				x = Object(s.a)(T, C, E, (e, t, r) => (e || t) && !r),
				A = Object(s.a)(u.h, u.d, a.e, u.j, (e, t, r, n) => !e && !t && !r && n),
				N = e => {
					const t = E(e),
						r = x(e),
						s = A(e);
					return t ? n.Blurred : r || s ? n.NoPreview : null
				},
				L = Object(s.a)(v, e => e === i.cb.Enabled),
				R = e => {
					const t = E(e),
						r = Object(o.m)(e);
					return t && r
				},
				P = e => {
					var t;
					const r = E(e),
						n = Object(l.b)(e),
						s = null === (t = null == n ? void 0 : n.routeMatch) || void 0 === t ? void 0 : t.match;
					if (s) {
						const t = Object(b.k)(e, {
								profileName: s.params.profileName
							}),
							o = !!(t && (null == t ? void 0 : t.isNSFW)),
							i = Object(d.G)(e, {
								pageLayer: n
							});
						return r && o && !i
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return u
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "a", (function() {
				return I
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(n.a)(i.e, d.L, (e, t) => e && !t),
				u = e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.Dc
				}),
				l = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.Cc
				}), e => e),
				b = Object(n.a)(e => {
					var t;
					const r = s.Fb;
					for (let n = 0; n < r.length; n++) {
						const i = r[n],
							d = (null === (t = i.split("_").pop()) || void 0 === t ? void 0 : t.toUpperCase()) || "",
							c = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: i
							});
						if (c && Object.values(s.fb).includes(c)) return {
							countryCode: d,
							experimentName: i,
							variantName: c
						}
					}
					return null
				}, e => e),
				m = Object(n.a)(e => {
					const t = b(e);
					return (null == t ? void 0 : t.variantName) || void 0
				}, c.a),
				p = (Object(n.a)(m, e => e === s.fb.FruitVeg), Object(n.a)(m, e => e === s.fb.Karma)),
				f = Object(n.a)(m, e => e === s.fb.Randomizer),
				O = Object(n.a)(m, e => e === s.fb.Interactive),
				g = Object(n.a)(m, e => Object.values(s.fb).includes(e)),
				j = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.fc
				}),
				_ = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.gc
				}),
				I = Object(n.a)(e => Object(o.c)(e, {
					experimentName: s.Je,
					experimentEligibilitySelector: o.a
				}), e => e)
		},
		"./src/reddit/selectors/experiments/popularGqlMigration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.e,
					experimentName: s.lc
				}), e => e === s.Id),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: s.mc
				}), e => e === s.Id)
		},
		"./src/reddit/selectors/experiments/supportingLinkAds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.Jc
			}), e => e === n.Id)
		},
		"./src/reddit/selectors/experiments/targetedOnboardingSkip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = e => Object(s.c)(e, {
				experimentEligibilitySelector: o.S,
				experimentName: n.Lc
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
				o = r("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
					let {
						username: r
					} = t;
					return !!e.externalAccount.api.user.pending[r]
				},
				d = (e, t) => {
					let {
						username: r
					} = t;
					return e.externalAccount.user[r]
				},
				c = e => {
					const t = Object(o.m)(e);
					if (!t) return;
					const r = Object(s.e)(t),
						n = d(e, {
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
					const i = d(e, {
						username: r
					});
					if (!i) return null;
					const c = i[n.a.Twitter];
					if (!c) return null;
					const a = Object(o.m)(e);
					if (!(a && Object(s.e)(a).toLowerCase() === r.toLowerCase())) return c;
					const u = Object(o.Cb)(e, {
						userName: r
					});
					return u ? u.prefShowTwitter ? c : null : c
				}
		},
		"./src/reddit/selectors/features/communityChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/models/CommunityChat/index.ts"),
				i = r("./src/reddit/reducers/features/communityChat/index.ts");
			Object(s.a)({
				features: {
					communityChat: i.a
				}
			});
			const d = {
					[o.a.SubredditPostChannel]: 0,
					[o.a.SubredditChatChannel]: 1
				},
				c = (e, t) => {
					var r, n;
					return null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.communityChat) || void 0 === n ? void 0 : n.models[t]
				},
				a = Object(n.a)(e => e, (e, t) => {
					var r, n;
					return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.communityChat) || void 0 === n ? void 0 : n.channelIds[t]) || []
				}, (e, t) => t.map(t => c(e, t))),
				u = Object(n.a)(a, e => (e => e.sort((e, t) => {
					var r, n;
					const s = null !== (r = d[e.__typename]) && void 0 !== r ? r : 0,
						o = null !== (n = d[t.__typename]) && void 0 !== n ? n : 0;
					return s !== o ? s - o : e.name - t.name
				}))(e)),
				l = e => {
					var t, r, n;
					return null !== (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.communityChat) || void 0 === r ? void 0 : r.selectedChannelId) && void 0 !== n ? n : ""
				},
				b = Object(n.a)(c, e => {
					var t;
					return (null == e ? void 0 : e.__typename) !== o.a.SubredditChatChannel ? "" : decodeURIComponent(null !== (t = null == e ? void 0 : e.roomId) && void 0 !== t ? t : "")
				}),
				m = Object(n.a)(a, e => e.find(e => e && "SubredditPostChannel" === e.__typename))
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				o = r("./src/reddit/selectors/postCreations.ts");
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
						const r = Object(o.fb)({
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
				d = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
				}
		},
		"./src/reddit/selectors/features/predictions/leaderboards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
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
			const o = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetching) || !1
				},
				i = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetched) || !1
				},
				d = (e, t) => {
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
		"./src/reddit/selectors/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts");
			const o = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!n.d.subredditInlineEditing(e)) return !1;
					const o = r ? Object(s.n)(e, {
						subredditId: r
					}) : null;
					return !!o && (e => !!e && e.config)(o)
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
				o = r("./src/redditGQL/types.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			Object(i.a)({
				features: {
					modUserNotes: d.a
				}
			});
			const c = Object(n.a)((e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: o
					} = t;
					const i = Object(s.d)(r, n, o),
						d = e.features.modUserNotes.order[i];
					return d ? d.map(t => e.features.modUserNotes.models[t]) : []
				}),
				a = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: o
					} = t;
					const i = Object(s.d)(r, n, o);
					return e.features.modUserNotes.api.pending[i]
				},
				u = e => e.features.modUserNotes.api.error,
				l = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: o
					} = t;
					const i = Object(s.d)(r, n, o);
					return e.features.modUserNotes.loadMore[i]
				},
				b = (e, t, r) => {
					if (!t || !r) return;
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, o.A.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				m = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, o.A.All)]
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
				o = r("./src/lib/isFakeSubreddit/index.ts"),
				i = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/constants/parameters.ts"),
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
					return Boolean((null == t ? void 0 : t[d.C]) && Object(n.a)(t[d.C]))
				},
				g = e => e.onboarding.shouldSkipOnboardingState,
				j = Object(s.a)(f.S, f.R, O, g, e => {
					var t;
					const r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams,
						n = r.subredditName;
					return Object(m.a)(e) !== i.Of.TargetedOnboarding || n && Object(o.a)(n, {
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
				I = Object(s.a)(b.k, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(i.hg)(e) ? t : null),
				h = Object(s.a)(b.k, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(c.K)(r) || Object(c.L)(r) || Object(c.z)(r)
				}, u.b, l.a, g, (e, t, r, n, s) => e === i.hb.PopoverFeed15 && t && Object(a.c)() && !r && !n && !s)
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/user.ts");
			const o = e => !Object(s.S)(e) && e.seo.linksModule.frontpage || null,
				i = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				d = Object(n.a)(o, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: i(e.url)
					})).filter(e => e.title)
				})) : null),
				c = Object(n.a)(d, e => e ? e.map(e => ({
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
				return C
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "o", (function() {
				return L
			})), r.d(t, "k", (function() {
				return R
			})), r.d(t, "z", (function() {
				return P
			})), r.d(t, "y", (function() {
				return w
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "q", (function() {
				return U
			})), r.d(t, "C", (function() {
				return G
			})), r.d(t, "w", (function() {
				return F
			})), r.d(t, "s", (function() {
				return M
			})), r.d(t, "x", (function() {
				return B
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return z
			})), r.d(t, "D", (function() {
				return H
			})), r.d(t, "m", (function() {
				return K
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/some.js"),
				s = r.n(n),
				o = r("./node_modules/lodash/values.js"),
				i = r.n(o),
				d = r("./src/lib/objectSelector/index.ts"),
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
				C = e => e.tags.models.globalSubredditTags,
				x = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				A = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditScopedTags[r] || S
				},
				N = (e, t) => {
					const r = i()(t);
					for (let n = 0; n < r.length; n++)
						if (r[n].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[n];
					return null
				},
				L = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.itemTags[r] || T
				},
				R = (e, t) => {
					let {
						itemId: r
					} = t;
					return !!e.tags.models.itemTags[r]
				},
				P = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.suggestedItemTags[r] || T
				},
				w = (e, t) => {
					let {
						itemId: r
					} = t;
					return i()(P(e, {
						itemId: r
					})).filter(e => e.isRelevant).map(e => Object(a.e)(e, !0))
				},
				k = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.sortedItemTags[r] || []
				},
				D = Object(d.a)((e, t) => {
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
							})) ? x(e) : E(e),
							o = n ? v(e, {
								subredditId: r
							}) : h(e, {
								subredditId: r
							}),
							i = s.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return o.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), i)
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
				q = (e, t) => t && e.tags.models.globalSubredditTags[t] || null,
				M = (e, t) => {
					const r = e.tags.selected.selectedPrimaryTagId[t.subredditId] || null;
					return q(e, r)
				},
				B = (e, t) => {
					const r = F(e, t);
					return q(e, r)
				},
				Q = e => e.tags.creation.selectedPrimaryTagId || null,
				z = e => {
					const t = Q(e);
					return q(e, t)
				},
				H = e => e.tags.api.updatePrimaryTag.pending,
				K = (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object.keys(L(e, {
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
				o = r("./src/reddit/selectors/gold/powerups/index.ts"),
				i = r("./src/reddit/selectors/moderatorPermissions.ts"),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(d.a)({
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
					var n, o;
					return (null === (n = e.features.userFlair[r]) || void 0 === n ? void 0 : n.displaySettings) ? null === (o = e.features.userFlair[r].displaySettings) || void 0 === o ? void 0 : o.position : s.b.Right
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
						o = a(e, {
							subredditId: r
						});
					if (!n || !s || !o) return !1;
					if (o.applied) return !0;
					const d = Object(i.g)(e, {
							subredditId: r
						}),
						{
							canUserChange: c
						} = s.permissions;
					return !!(o.templateIds || []).find(e => {
						return !o.templates[e].modOnly || d
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
						s = Object(o.e)(e, {
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
				o = r("./src/reddit/helpers/name/index.ts"),
				i = r("./src/reddit/helpers/widgets/index.tsx"),
				d = r("./src/reddit/selectors/profile.ts"),
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
						const r = Object(d.k)(e, {
							profileName: t.name
						});
						return r ? {
							profile: {
								id: r.id,
								name: Object(o.i)(r.name)
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
							name: Object(o.i)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"892d793918d8"}')
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
		"./src/redditGQL/operations/CreateModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"10ad38be41ae"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"a44eec05bc52"}')
		},
		"./src/redditGQL/operations/CreateSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"80c9a3cd96b8"}')
		},
		"./src/redditGQL/operations/DeleteModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"c44e6467c4d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"a7b24402a759"}')
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
		"./src/redditGQL/operations/GetCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"88a3ec64fa21"}')
		},
		"./src/redditGQL/operations/GetDevPlatformMetadata.json": function(e) {
			e.exports = JSON.parse('{"id":"fbfb3b396dfe"}')
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
			e.exports = JSON.parse('{"id":"897cd7cb6920"}')
		},
		"./src/redditGQL/operations/GetTournamentsBaseInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"cebfc8734cec"}')
		},
		"./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json": function(e) {
			e.exports = JSON.parse('{"id":"023547ccdaf6"}')
		},
		"./src/redditGQL/operations/ModQueueItems.json": function(e) {
			e.exports = JSON.parse('{"id":"dd7e6cf5fa5b"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"d62aff01cfeb"}')
		},
		"./src/redditGQL/operations/PopularFeedElements.json": function(e) {
			e.exports = JSON.parse('{"id":"18fe4e9c67de"}')
		},
		"./src/redditGQL/operations/ReportMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ae01229e1caa"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditAchievementFlairs.json": function(e) {
			e.exports = JSON.parse('{"id":"97fec841c778"}')
		},
		"./src/redditGQL/operations/SubredditCustomEmojis.json": function(e) {
			e.exports = JSON.parse('{"id":"76faa900e33f"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"f9652a2c949a"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"3e6c6d83f9bf"}')
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
			e.exports = JSON.parse('{"id":"4d8150ddad2e"}')
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
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"ae93908b33c0"}')
		},
		"./src/redditGQL/operations/UpdateSubredditPrimaryTag.json": function(e) {
			e.exports = JSON.parse('{"id":"a2d0aa1efdbc"}')
		},
		"./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json": function(e) {
			e.exports = JSON.parse('{"id":"ee43ccb6e5eb"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		},
		"./src/redditGQL/operations/WhereToPostSubRec.json": function(e) {
			e.exports = JSON.parse('{"id":"11eb5d0b3ee3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.52d0c684a515b0c2072a.js.map