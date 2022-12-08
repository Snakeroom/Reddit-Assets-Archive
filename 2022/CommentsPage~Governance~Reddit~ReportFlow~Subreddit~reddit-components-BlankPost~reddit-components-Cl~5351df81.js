// https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.99fbc620d4c62538eafb.js
// Retrieved at 12/8/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
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
			var s = r("./src/reddit/helpers/name/index.ts");
			const n = /^u_[\w-]+$/;

			function o(e) {
				return n.test(Object(s.i)(e))
			}

			function i(e) {
				return `u_${Object(s.i)(e)}`
			}

			function d(e, t) {
				return Object(s.i)(e) === Object(s.i)(t)
			}
		},
		"./src/lib/pageTitle/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				i = r("./src/reddit/selectors/countrySites.ts"),
				d = r("./src/reddit/selectors/meta.ts");
			const c = (e, t, r) => {
				const {
					languageCode: c
				} = Object(i.c)(e), a = r || (Object(d.j)(e) || n.DEFAULT_LOCALE), u = Object(s.isPseudoLocale)(a) ? n.DEFAULT_LOCALE : a;
				if (c) {
					const e = Object(o.d)(c, u.substring(0, 2));
					return t + (e ? ` - ${e}` : "")
				}
				return t
			}
		},
		"./src/lib/stringInterpolate/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				return e && t ? e.replace(/%\{(\w+)\}/g, (e, r) => {
					const s = t[r];
					return null == s ? r : String(s)
				}) : e
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				o = Object(s.a)(n)
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return R
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "f", (function() {
				return G
			})), r.d(t, "i", (function() {
				return U
			})), r.d(t, "n", (function() {
				return B
			})), r.d(t, "s", (function() {
				return Q
			})), r.d(t, "k", (function() {
				return z
			})), r.d(t, "h", (function() {
				return H
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "q", (function() {
				return V
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
				return se
			})), r.d(t, "e", (function() {
				return ne
			})), r.d(t, "l", (function() {
				return ie
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/telemetry/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/economics/helpers/async.ts"),
				c = r("./src/lib/loadableAction/index.ts");
			const a = Object(c.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			Object(c.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditCurrentUserPowerupsFlairs));
			var u = r("./src/reddit/actions/login.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				p = r("./src/reddit/actions/shortcuts/utils.ts"),
				m = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				O = r("./src/reddit/actions/vote.ts"),
				g = r("./src/reddit/endpoints/comment/index.tsx"),
				j = r("./src/reddit/helpers/commentList/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				I = r("./src/reddit/helpers/trackers/comment.ts"),
				v = r("./src/reddit/models/Comment/index.ts"),
				h = r("./src/reddit/models/Post/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/models/Vote/index.ts"),
				S = r("./src/reddit/selectors/comments.ts"),
				E = r("./src/reddit/selectors/commentSelector.ts"),
				x = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				C = r("./src/reddit/selectors/moderatingComments.ts"),
				A = r("./src/reddit/selectors/moderatorPermissions.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/actions/comment/constants.ts");
			const L = {},
				R = Object(i.a)(N.q),
				k = e => async (t, r, s) => {
					let {
						apiContext: o
					} = s;
					if (!Object(w.S)(r())) return t(Object(u.openRegisterModal)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(S.m)(r(), {
							commentId: e
						})
					}));
					const i = r().features.comments.models[e];
					if (!i) return;
					const d = i.isSaved ? g.m : g.i;
					if (t(R({
							[e]: {
								isSaved: !i.isSaved
							}
						})), (await d(o(), e)).ok) {
						const r = i.isSaved ? n.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : n.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = n.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(f.f)({
							text: r,
							kind: y.b.Undo,
							buttonText: s,
							buttonAction: k(e)
						}))
					} else t(R({
						[e]: {
							isSaved: i.isSaved
						}
					}))
				}, P = e => `viewing-comment-${e}`, D = s.a.telemetry.commentConsumedThreshold, G = e => async (t, r) => {
					const n = r(),
						i = Object(E.c)(n, {
							commentId: e
						});
					if (!i || Math.random() > s.a.telemetry.commentSampleRate) return;
					I.d({
						state: n,
						commentId: e,
						collapsed: i.collapsed
					}), o.c.start(P(e));
					const d = setTimeout(() => I.a({
						state: n,
						commentId: e,
						collapsed: i.collapsed
					}), D);
					L[e] = d
				}, U = (e, t) => async (r, s) => {
					const n = s(),
						i = P(e);
					if (Object(E.c)(n, {
							commentId: e
						}) && o.c.has(i)) {
						const r = o.c.end(i);
						!t && r < D && (clearTimeout(L[e]), delete L[e])
					}
				}, F = Object(i.a)(N.z), M = Object(i.a)(N.y), q = Object(i.a)(N.x), B = (e, t, r) => async (s, n, o) => {
					let {
						apiContext: i
					} = o;
					const c = n(),
						u = c.moreComments.models[t],
						l = c.platform.currentPage,
						p = l && l.routeMatch,
						f = p && p.match,
						{
							partialPostId: O
						} = f ? f.params : null;
					if (!O) return;
					const _ = Object(h.z)(O);
					s(F({
						moreCommentsId: u.id
					}));
					const I = await Object(g.g)(i(), _, {
						token: u.token
					}, Object(x.a)(c), r);
					if (I.ok) {
						const t = I.body,
							r = Object(j.a)(t, _, c);
						s(M({
							key: e,
							moreCommentsItem: u,
							shouldCollapse: r,
							...t
						}));
						const o = c.posts.models[_];
						let i;
						o && "subreddit" === o.belongsTo.type && t.comments && (i = o.belongsTo.id, await s(Object(d.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: i
						})), Object(A.i)(c, i) && s(Object(m.c)(_, !0, u.token)));
						const l = I.body.comments;
						await s(a(i, l)), Object(A.h)(n(), {
							subredditId: o.belongsTo.id
						}) && s(Object(b.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else s(q({
						moreCommentsItem: u,
						...I.error
					}))
				}, Q = Object(O.a)(j.b, T.a.upvoted), z = Object(O.a)(j.b, T.a.downvoted), H = Object(i.a)(N.l), J = Object(i.a)(N.k), $ = Object(i.a)(N.g), K = Object(i.a)(N.h), V = (Object(i.a)(N.c), Object(i.a)(N.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: s
					} = e;
					return async (e, n) => {
						const o = n(),
							i = Object(v.i)(t),
							d = Object(S.n)(o, {
								commentLink: i,
								commentsPageKey: r
							}),
							c = Object(C.b)(o, {
								commentId: t,
								commentsPageKey: r
							}),
							a = d.depth;
						e($({
							commentId: t,
							commentsPageKey: r,
							isCollapsed: c
						})), c || 0 !== a || s(t, !0), Object(p.d)()
					}
				}), W = e => {
					let {
						commentId: t,
						commentsPageKey: r
					} = e;
					return async e => {
						e(K({
							commentId: t,
							commentsPageKey: r
						}))
					}
				}, Y = e => {
					let {
						commentLink: t,
						commentsPageKey: r,
						lineDepth: s,
						scrollToAndRemeasure: n
					} = e;
					return async (e, o) => {
						const i = o(),
							d = Object(j.e)(r, t, s, i),
							c = Object(C.b)(i, {
								commentId: t.id,
								commentsPageKey: r
							});
						e($({
							commentId: d,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === s && n(d, !0), Object(p.d)()
					}
				}, X = Object(i.a)(N.t), Z = e => t => t(X({
					draftKey: e
				})), ee = Object(i.a)(N.a), te = Object(i.a)(N.I), re = Object(i.a)(N.b), se = Object(i.a)(N.w), ne = Object(i.a)(N.e), oe = Object(i.a)(N.A), ie = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					var o, i;
					if (e) {
						const r = await Object(g.b)(n(), e);
						if (r.ok) {
							const s = r.body;
							"Comment" === (null === (o = s.data.commentById) || void 0 === o ? void 0 : o.__typename) && t(oe({
								commentId: e,
								media: Object(_.b)(null === (i = s.data.commentById) || void 0 === i ? void 0 : i.content)
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
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/reducers/features/communityChat/index.ts");
			const i = "COMMUNITY_CHAT_SET_SELECTED_CHANNEL",
				d = "COMMUNITY_CHAT_CHANNELS_LOADED";
			Object(s.a)({
				features: {
					communityChat: o.a
				}
			});
			Object(n.a)(i);
			const c = Object(n.a)(d)
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			}));
			const s = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return w
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/camelCase.js"),
				o = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
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
				_ = r("./src/reddit/featureFlags/index.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/contentControls.ts"),
				h = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				y = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/actions/contentControls/constants.ts");
			const S = Object(d.a)(T.b),
				E = Object(d.a)(T.c),
				x = Object(d.a)(T.a),
				C = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = {
							subredditName: e.toLowerCase()
						},
						d = _.d.hatefulContentFiltersEnabled(r());
					if (Object(v.a)(r(), o)) return;
					t(E(o));
					let a = Object(y.I)(r(), e);
					if (!a) {
						const r = await Object(j.a)(n(), e, !1);
						if (r.ok) {
							a = r.body.data.subreddit.id
						}
						if (!a) {
							const e = r.error || {
								type: i.L.NOT_FOUND_ERROR
							};
							return void t(x({
								...o,
								error: e
							}))
						}
					}
					const l = Object(h.c)(r(), {
						subredditId: a
					});
					let m = null;
					const f = await ((e, t) => Object(u.a)(e, {
						...b,
						variables: t
					}).then(e => {
						var t, r;
						if (e.ok) {
							const s = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											hatefulContentFilters: {
												hatefulContentThresholdAbuse: p(null == s ? void 0 : s.hatefulContentThresholdAbuse),
												hatefulContentThresholdIdentity: p(null == s ? void 0 : s.hatefulContentThresholdIdentity),
												permittedTerms: (null == s ? void 0 : s.hatefulContentPermittedTerms) || []
											},
											postRequirements: null == s ? void 0 : s.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(n(), {
						subredditId: a,
						includeHatefulFilters: l && d
					});
					if (f.ok) {
						const e = f.body;
						m = e.data.subreddit && e.data.subreddit
					}
					if (m) t(S({
						...o,
						...m
					}));
					else {
						const r = f.error || {
							type: i.L.UNKNOWN_ERROR
						};
						t(x({
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
				}, A = Object(d.a)(T.d), w = (e, t) => async (r, n, o) => {
					let {
						gqlContext: i
					} = o;
					const d = e.toLowerCase(),
						c = Object(y.I)(n(), e);
					if (!c) return {
						success: !1
					};
					const l = await ((e, t, r) => {
						const s = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !f()(r.postRequirements)) {
							const n = {
								subredditId: t,
								...r.postRequirements
							};
							s[0] = Object(u.a)(e, {
								...g,
								variables: {
									input: n
								}
							})
						}
						if (r.hatefulContentFilters && !f()(r.hatefulContentFilters)) {
							const n = {
									subredditId: t,
									hatefulContentThresholdAbuse: r.hatefulContentFilters.hatefulContentThresholdAbuse,
									hatefulContentThresholdIdentity: r.hatefulContentFilters.hatefulContentThresholdIdentity
								},
								o = !(!n.hatefulContentThresholdAbuse && !n.hatefulContentThresholdIdentity),
								i = {
									subredditId: t,
									permittedTerms: r.hatefulContentFilters.permittedTerms
								},
								d = !!i.permittedTerms;
							s[1] = Object(u.a)(e, {
								...O,
								variables: {
									includeThresholds: o,
									includePermittedTerms: d,
									thresholdInput: n,
									permittedTermsInput: i
								}
							})
						}
						return Promise.all(s).then(e => {
							let [t, r] = e, s = !0, n = [];
							if (t) {
								const e = t.body,
									r = e.data.updatePostRequirements.fieldErrors;
								s = s && e.data.updatePostRequirements.ok, r && (n = n.concat(r))
							}
							if (r) {
								const {
									data: {
										updateHatefulContentSettings: e,
										updateSubredditSettings: t
									}
								} = r.body;
								t && (s = s && t.ok), e && (s = s && e.ok);
								const o = null == t ? void 0 : t.fieldErrors,
									i = null == e ? void 0 : e.fieldErrors;
								o && (n = n.concat(o)), i && (n = n.concat(i))
							}
							return {
								ok: s,
								fieldErrors: n.length ? n : null
							}
						})
					})(i(), c, t);
					if (l.ok) return r(A({
						subredditName: d,
						partialUpdates: t
					})), r(Object(a.f)({
						kind: I.b.SuccessCommunity,
						text: s.fbt._("Subreddit content controls updated successfully", null, {
							hk: "1n6QIQ"
						})
					})), {
						success: !0
					}; {
						const n = N(l.fieldErrors);
						return r(Object(a.f)({
							kind: I.b.Error,
							text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: w(e, t)
						})), {
							success: !1,
							errors: n || void 0
						}
					}
				}, N = e => e && e.map(e => ({
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
				return p
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./src/lib/constants/index.ts");
			var s = r("./src/lib/makeActionCreator/index.ts");
			r("./src/lib/makeListingKey/index.ts"), r("./src/lib/addQueryParams/index.ts"), r("./src/lib/makeApiRequest/index.ts"), r("./src/lib/omitHeaders/index.ts"), r("./src/lib/stringInterpolate/index.ts"), r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var n = r("./src/reddit/selectors/discoveryUnit.ts");
			r("./src/reddit/selectors/listings.ts");
			const o = "DISCOVERY_UNIT__LIST_PENDING",
				i = "DISCOVERY_UNIT__LIST_LOADED",
				d = "DISCOVERY_UNIT__LIST_FAILED",
				c = Object(s.a)(o),
				a = Object(s.a)(i),
				u = Object(s.a)(d),
				l = () => async (e, t, r) => {
					let {
						apiContext: s
					} = r;
					const o = t(),
						i = Object(n.d)(o),
						d = Object(n.c)(o);
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
					}))(s());
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
			Object(s.a)(b), Object(s.a)(p), Object(s.a)(m)
		},
		"./src/reddit/actions/economics/helpers/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = e => async t => {
				const s = await (() => r.e("EconHelperActions").then(r.bind(null, "./src/reddit/actions/economics/helpers/index.ts")).then(e => e.fetchAll))();
				await t(s(e))
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return H
			})), r.d(t, "k", (function() {
				return J
			})), r.d(t, "o", (function() {
				return $
			})), r.d(t, "r", (function() {
				return K
			})), r.d(t, "q", (function() {
				return V
			})), r.d(t, "l", (function() {
				return ee
			})), r.d(t, "m", (function() {
				return te
			})), r.d(t, "n", (function() {
				return re
			})), r.d(t, "b", (function() {
				return se
			})), r.d(t, "u", (function() {
				return ne
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
				return pe
			})), r.d(t, "t", (function() {
				return me
			})), r.d(t, "f", (function() {
				return fe
			})), r.d(t, "c", (function() {
				return Oe
			})), r.d(t, "d", (function() {
				return ge
			})), r.d(t, "h", (function() {
				return je
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/predictions/index.ts"),
				d = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/makeRequest/index.ts")),
				c = r("./src/lib/uploadToS3/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/CreateMediaUploadLease.json"),
				l = r("./src/redditGQL/operations/SubmitMediaUpload.json");
			var b = r("./src/reddit/helpers/graphql/normalizeUploadLeaseFromGql/index.ts"),
				p = r("./src/reddit/helpers/media/index.ts"),
				m = r("./src/redditGQL/types.ts");
			const f = new Map([
					["image/png", m.v.Png],
					["image/gif", m.v.Gif],
					["image/jpeg", m.v.Jpeg]
				]),
				O = (e, t) => async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					const i = await Object(p.h)(t) || t.type,
						m = f.get(i);
					if (!m) throw new Error("Unacceptable file type");
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
						mimetype: m
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
						mimeType: m
					}
				};
			var g = r("./src/reddit/actions/toaster.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/lib/delay/index.ts"),
				I = r("./src/lib/makeActionCreator/index.ts"),
				v = r("./src/reddit/endpoints/economics/predictions.ts");

			function h(e) {
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
					redditor: s,
					redditorInfo: n
				} = e;
				var o, i;
				return {
					score: t,
					rank: r,
					redditor: s ? {
						...s,
						icon: null !== (o = s.icon) && void 0 !== o ? o : null,
						profile: null !== (i = s.profile) && void 0 !== i ? i : null
					} : null,
					redditorInfo: n
				}
			}
			var T = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				E = r("./src/reddit/actions/login.ts"),
				x = r("./src/reddit/actions/modal.ts"),
				C = r("./src/reddit/constants/modals.ts"),
				A = r("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				R = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				k = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(o.a)({
				features: {
					predictions: i.a
				}
			});
			const P = Object(I.a)(k.d),
				D = Object(I.a)(k.c),
				G = Object(I.a)(k.e),
				U = Object(I.a)(k.f),
				F = Object(I.a)(k.i),
				M = Object(I.a)(k.h),
				q = Object(I.a)(k.j),
				B = Object(I.a)(k.p),
				Q = Object(I.a)(k.s),
				z = Object(I.a)(k.o),
				H = Object(I.a)(k.b),
				J = (e, t, r) => async (s, n, o) => {
					let {
						gqlContext: i
					} = o;
					const d = Object(N.S)(n());
					if (!Object(A.c)(n(), {
							subredditId: e
						})) {
						s(P({
							subredditId: e
						}));
						try {
							const {
								predictionTournaments: n,
								predictionWinners: o
							} = await Object(v.i)(i(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: d
							}), c = h(o);
							s(G({
								subredditId: e,
								leaderboard: c
							})), n && (s(re(e, n)), null == n || n.forEach(e => {
								let {
									tournamentId: t,
									winners: r
								} = e;
								s(U({
									tournamentId: t,
									leaderboard: h(r)
								}))
							}))
						} catch {
							s(D({
								subredditId: e
							}))
						}
					}
				}, $ = (e, t) => async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					const i = Object(N.S)(s());
					if (!Object(A.g)(s(), {
							tournamentId: t
						})) {
						r(F({
							tournamentId: t
						}));
						try {
							const {
								predictionWinners: s
							} = await Object(v.j)(o(), {
								subredditId: e,
								tournamentId: t,
								includeCurrentRank: i
							}), n = h(s);
							r(q({
								tournamentId: t,
								leaderboard: n
							}))
						} catch {
							r(M({
								tournamentId: t
							}))
						}
					}
				}, K = e => {
					let {
						coinPackageId: t,
						optionId: r,
						postId: s,
						price: n
					} = e;
					return async (e, o, i) => {
						let {
							gqlContext: d
						} = i;
						const c = await Object(v.p)(d(), {
							coinPackageId: t,
							optionId: r,
							postId: s,
							price: n
						});
						return e(B({
							pollId: s,
							prediction: c,
							price: n
						})), c
					}
				}, V = e => {
					let {
						optionId: t,
						postId: r
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: o
						} = n;
						const i = await Object(v.n)(o(), {
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
				}, W = Object(I.a)(k.k), Y = Object(I.a)(k.m), X = Object(I.a)(k.l), Z = Object(I.a)(k.n), ee = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = r(),
						i = Object(w.I)(o, e);
					if (Object(R.k)(o, {
							subredditId: i
						})) return Object(R.g)(o, {
						subredditId: i
					});
					t(W({
						subredditId: i
					}));
					const d = await Object(v.k)(n(), {
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
							const r = h(e.winners);
							t(U({
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
				}, te = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = r(),
						i = Object(w.I)(o, e),
						d = await Object(v.l)(n(), {
							subredditName: e,
							isLatestOnly: !0
						});
					t(re(i, d))
				}, re = (e, t) => r => {
					const s = t.map(e => Object(S.a)(e));
					r(Y({
						subredditId: e,
						tournaments: s
					}))
				}, se = Object(I.a)(k.a), ne = Object(I.a)(k.q), oe = Object(I.a)(k.r), ie = (e, t, r, s) => async (n, o, i) => {
					let {
						gqlContext: d
					} = i;
					const c = o(),
						a = Object(L.b)(c);
					let u = null;
					if (!a) throw new Error("Failed to create tournament, no prediction drafts attached");
					if (s instanceof File) {
						const {
							mediaId: t,
							mimeType: r
						} = await n(O(`icon_pred_${e}`, s));
						await Object(_.a)(3e3), u = {
							mediaId: t,
							width: 1,
							height: 1,
							mimeType: r.toLowerCase()
						}
					} else s && (u = {
						url: s,
						width: 1,
						height: 1,
						mimeType: ""
					});
					const l = await Object(v.e)(d(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: m.V.Tokens,
							tokenIcon: u
						}),
						b = Object(S.a)(l);
					n(ce(b))
				}, de = (e, t) => async (r, s, o) => {
					let {
						gqlContext: i
					} = o;
					const d = Object(L.b)(s());
					if (!d) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(v.a)(i(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${Object(n.a)()}`,
							subredditId: t,
							predictionDrafts: d
						}),
						a = Object(S.a)(c);
					r(ce(a))
				}, ce = Object(I.a)(k.g), ae = (e, t, r) => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const i = await Object(v.o)(o(), {
							tournamentId: e,
							name: r
						}),
						d = Object(S.a)(i);
					t(ce(d))
				}, ue = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = await Object(v.f)(n(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = o.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(ce(i.tournament)), i.tournament
				}, le = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = await Object(v.g)(n(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = o.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, be = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = await Object(v.h)(n(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = o.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, pe = e => {
					let {
						coinPackageId: t,
						selectedOptionId: r,
						price: s,
						pollId: n,
						tournamentId: o,
						tournamentPostId: i
					} = e;
					return async e => {
						const d = await e(K({
							coinPackageId: t,
							optionId: r,
							postId: n,
							price: s
						}));
						return e(Q({
							predictionId: n,
							selectedOptionId: r,
							tournamentId: o,
							tournamentPostId: i
						})), d
					}
				}, me = e => async (t, r) => {
					const s = r();
					Object(N.S)(s) ? await t(Object(x.h)(C.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(E.openLoginModal)())
				}, fe = () => Object(x.g)(C.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Oe = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					try {
						const r = await Object(v.b)(o(), {
							postId: e
						});
						t(H({
							postId: e,
							prediction: r
						}));
						const n = Object(g.e)(s.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), j.b.SuccessMod);
						t(Object(g.f)(n))
					} catch {
						const e = Object(g.e)(s.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), j.b.Error);
						t(Object(g.f)(e))
					}
				};

			function ge(e, t) {
				return async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					const i = await Object(v.c)(o(), {
						postId: e,
						...t
					});
					return r(H({
						postId: e,
						prediction: i
					})), i
				}
			}
			const je = e => async (t, r, s) => {
				let {
					gqlContext: n
				} = s;
				return Object(v.m)(n(), {
					subredditId: e
				})
			}
		},
		"./src/reddit/actions/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return I
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "o", (function() {
				return L
			})), r.d(t, "p", (function() {
				return R
			})), r.d(t, "b", (function() {
				return k
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
				return $
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/parameters.ts"),
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
				v = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				h = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				S = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				E = Object(n.a)(I),
				x = Object(n.a)(v),
				C = Object(n.a)(h),
				A = Object(n.a)(y),
				w = Object(n.a)(T),
				N = Object(n.a)(S),
				L = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					const o = r(),
						i = Object(_.m)(o),
						d = e || i && Object(f.e)(i);
					if (!d) return;
					if (Object(O.d)(o, {
							username: d
						})) return;
					t(E(d));
					const m = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.ob.GET
					}))(n(), d);
					if (m.ok) {
						const e = p(m.body);
						t(x({
							username: d,
							accountsData: e
						}))
					} else t(C(m.error))
				}, R = () => async (e, t, r) => {
					let {
						apiContext: s
					} = r;
					const n = t(),
						o = Object(g.d)(n);
					if (!o) return;
					const i = n.externalAccount.api.subreddit.fetched[o],
						d = n.externalAccount.api.subreddit.pending[o];
					if (i || d) return;
					const m = Object(j.z)(n, {
						subredditName: o
					});
					if (!(m && m.hasExternalAccount)) return;
					e(A(o));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.ob.GET
					}))(s(), o);
					if (f.ok) {
						const t = p(f.body);
						e(w({
							subredditName: o,
							accountsData: t
						}))
					} else e(N(f.error))
				}, k = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", P = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", D = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", G = Object(n.a)(k), U = Object(n.a)(P), F = Object(n.a)(D), M = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					t(G({
						provider: e
					}));
					const o = Object(_.m)(r()),
						i = Object(f.e)(o),
						d = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.ob.POST
						}))(n(), e);
					d.ok ? t(U({
						provider: e,
						username: i
					})) : t(F({
						provider: e,
						error: d.error
					}))
				}, q = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", z = Object(n.a)(q), H = Object(n.a)(B), J = Object(n.a)(Q), $ = e => async (t, r, n) => {
					let {
						apiContext: p
					} = n;
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
						}))(p(), e, f);
					if (O.ok) {
						const {
							redirect_url: r
						} = O.body;
						t(H({
							provider: e
						})), window.location.href = r
					} else t(J({
						provider: e,
						error: O.error
					})), t(Object(i.f)({
						kind: m.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "196FiB"
						})
					}))
				}
		},
		"./src/reddit/actions/gold/achievementFlairs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
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
			const p = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, i) => {
						let {
							gqlContext: d
						} = i;
						const c = n();
						if (!(null != Object(l.c)(c, {
								subredditId: e
							})) || t.forceLoad) {
							r(O());
							try {
								const t = await a(d(), e);
								if (!t.ok) return;
								const {
									errors: s,
									data: n
								} = t.body;
								if (null == s ? void 0 : s.length) return void(await r(_(s[0].message)));
								const o = m(n.subredditInfoById);
								f(r, e, o)
							} catch (u) {
								o.c.captureException(u), await r(_(s.fbt._("Something went wrong", null, {
									hk: "1IJNeH"
								})))
							}
						}
					}
				},
				m = e => {
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
				O = Object(n.a)(b.hb),
				g = Object(n.a)(b.gb),
				j = Object(n.a)(b.fb),
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
				return f
			})), r.d(t, "a", (function() {
				return O
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
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
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts");
			const m = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, i) => {
						let {
							gqlContext: d
						} = i;
						const c = n();
						if (!(!Object(b.e)(c) || null != Object(p.a)(c, {
								subredditId: e
							})) || t.forceLoad) {
							r(g());
							try {
								const t = await u(d(), e);
								if (!t.ok) return;
								const {
									errors: s,
									data: n
								} = t.body;
								if (null == s ? void 0 : s.length) return void(await r(I(s[0].message)));
								const o = f(n.subredditInfoById);
								O(r, e, o)
							} catch (a) {
								o.c.captureException(a), await r(I(s.fbt._("Something went wrong", null, {
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
				g = Object(n.a)(i.kb),
				j = Object(n.a)(i.jb),
				_ = Object(n.a)(i.ib),
				I = e => async t => {
					await t(_(e)), t(Object(d.f)({
						kind: l.b.Error,
						duration: d.a,
						text: e
					}))
				}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return g
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "f", (function() {
				return G
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/endpoints/gold/powerups/index.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				m = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/actions/gold/constants.ts");
			const g = e => async (t, r, n) => {
				let {
					gqlContext: i
				} = n;
				if (!!r().user.powerups.fetched && !e) return;
				t(j());
				const d = s.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const e = await Object(u.g)(i());
					if (e.ok) {
						const r = e.body;
						if (r.errors && r.errors.length) return void(await t(v(d)));
						if (!r.data.identity) return void(await t(I(d)));
						await t(_({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (c) {
					o.c.captureException(c), await t(v(d))
				}
			}, j = Object(n.a)(O.zb), _ = Object(n.a)(O.yb), I = Object(n.a)(O.xb), v = e => async (t, r) => {
				await t(I(e)), t(Object(c.f)({
					kind: l.b.Error,
					duration: c.a,
					text: e
				}))
			}, h = (e, t) => async (e, r, n) => {
				let {
					gqlContext: i
				} = n;
				var d;
				if (!!r().users.powerups.fetched) return;
				e(y());
				const c = s.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(u.d)(i(), t);
					if (r.ok) {
						const s = r.body;
						if (s.errors && s.errors.length) return void(await e(E(c)));
						if (!s.data.redditorInfoById) return void(await e(S(c)));
						const n = (null === (d = s.data.redditorInfoById.powerups) || void 0 === d ? void 0 : d.supportedSubreddits) || [];
						await e(T({
							supportedSubreddits: n,
							userId: t
						}))
					}
				} catch (a) {
					o.c.captureException(a), await e(E(c))
				}
			}, y = Object(n.a)(O.Z), T = Object(n.a)(O.Y), S = Object(n.a)(O.X), E = e => async (t, r) => {
				await t(S(e)), t(Object(c.f)({
					kind: l.b.Error,
					duration: c.a,
					text: e
				}))
			}, x = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return async (r, n, i) => {
					let {
						gqlContext: d
					} = i;
					var c;
					const a = n();
					if (Object(p.e)(a, {
							subredditId: e
						}) && Object(m.a)(a, {
							subredditId: e
						}) && !t.forceLoad) return;
					r(w());
					const l = t.fullData ? u.f : u.e;
					try {
						const s = await l(d(), e, !!t.includeIdentity, Object(b.e)(a));
						if (s.ok) {
							const n = s.body;
							if (null === (c = n.errors) || void 0 === c ? void 0 : c.length) return void(await r(k(n.errors[0].message)));
							if (t.fullData) {
								const {
									data: t
								} = n, s = C(t.subredditInfoById, t.identity);
								A(r, e, s)
							} else {
								const {
									powerups: t = null,
									powerupsSettings: s = null
								} = n.data.subredditInfoById || {};
								await r(N({
									powerups: t,
									subredditId: e,
									benefitStatuses: null == s ? void 0 : s.benefitStatuses
								}))
							}
						}
					} catch (f) {
						o.c.captureException(f), await r(k(s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})))
					}
				}
			}, C = (e, t) => {
				var r, s, n;
				const {
					powerups: o = null,
					powerupsSettings: i = null,
					supporters: d = null,
					productOffers: c = null,
					subredditAchievementFlairs: a
				} = e || {}, u = null == t ? void 0 : t.powerups;
				return {
					powerups: o,
					benefitStatuses: null == i ? void 0 : i.benefitStatuses,
					productOffers: null !== (r = null == c ? void 0 : c.offers) && void 0 !== r ? r : [],
					recentSupporters: null !== (s = null == d ? void 0 : d.recentSupporters) && void 0 !== s ? s : [],
					topSupporters: null !== (n = null == d ? void 0 : d.topSupporters) && void 0 !== n ? n : [],
					userPowerups: u,
					subredditAchievementFlairs: null != a ? a : []
				}
			}, A = (e, t, r) => e(L({
				subredditId: t,
				...r
			})), w = Object(n.a)(O.pb), N = Object(n.a)(O.ob), L = Object(n.a)(O.nb), R = Object(n.a)(O.mb), k = e => async (t, r) => {
				await t(R(e)), t(Object(c.f)({
					kind: l.b.Error,
					duration: c.a,
					text: e
				}))
			}, P = () => async (e, t) => {
				const r = t();
				return Object(f.m)(r) ? e(Object(d.h)(a.a.ACHIEVEMENT_FLAIR)) : e(Object(i.openLoginModal)())
			}, D = Object(n.a)(O.L), G = (e, t) => async (r, s, n) => {
				let {
					gqlContext: o
				} = n;
				const i = await Object(u.h)(o(), e, (e => Object.keys(e).map(t => ({
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
				return v
			})), r.d(t, "j", (function() {
				return h
			}));
			var s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				b = Object(o.a)(l),
				p = "META__META_RECEIVED",
				m = (Object(o.a)(p), "META__SET_LOCALE"),
				f = Object(o.a)(m),
				O = e => async (t, r, o) => {
					let {
						apiContext: l
					} = o;
					if (!e) return;
					const b = r(),
						p = l();
					let m;
					if (t(f(e)), Object(s.isPseudoLocale)(e) ? (Object(u.P)(b) || Object(a.b)(b)) && (m = e) : m = Object(s.isoLocaleToR2Language)(e), !m) return;
					const O = new URL(window.location.href);
					Object(u.S)(b) ? Object(s.isPseudoLocale)(m) ? O.searchParams.set("locale", m) : (await Object(i.a)(Object(d.a)(p, [c.a]), {
						data: {
							lang: m
						},
						endpoint: `${p.apiUrl}/api/v1/me/prefs`,
						method: n.ob.PATCH,
						type: "json"
					}), O.searchParams.delete("locale")) : O.searchParams.delete("locale"), window.location.href = O.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(o.a)(g), _ = "META__PWA_ENTERED", I = "META__PWA_LEFT", v = Object(o.a)(_), h = Object(o.a)(I)
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/actions/comment/index.ts"),
				n = r("./src/reddit/actions/post.ts"),
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
							e(Object(s.j)(r))
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
							e(Object(n.R)(r))
						}
					}
				}
			}
		},
		"./src/reddit/actions/nsfwBlocking/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/loadableAction/index.ts");
			const n = Object(s.a)(() => r.e("NsfwBlockingActions").then(r.bind(null, "./src/reddit/actions/nsfwBlocking/index.ts")).then(e => e.default))
		},
		"./src/reddit/actions/onboarding/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			const s = "RESET_GENDER_UPDATE_STATE",
				n = "SUBREDDIT_INTEREST_TOPICS",
				o = "SKIP_ONBOARDING_MODAL"
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
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/login.ts"),
				o = r("./src/reddit/actions/onboarding/constants.ts"),
				i = r("./src/reddit/helpers/counters/onboarding.ts"),
				d = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				c = r("./src/reddit/models/Onboarding/index.ts"),
				a = r("./src/reddit/selectors/experiments/onboarding.ts"),
				u = r("./src/reddit/selectors/onboarding.ts");
			const l = () => async (e, t) => {
				const r = t(),
					s = r.platform.currentPage;
				if (Object(u.e)(r, {
						pageLayer: s
					})) {
					e(Object(n.openD2xOnboardingModal)({
						type: c.d.REONBOARDING,
						selectedInterests: {}
					})), Object(d.d)();
					const t = Object(a.i)(r);
					Object(i.b)(c.f.FirstPopover, t)
				}
			}, b = Object(s.a)(o.a), p = Object(s.a)(o.c), m = Object(s.a)(o.b);
			t.default = () => async (e, t) => {
				const r = t();
				Object(u.d)(r) && e(Object(n.openD2xOnboardingModal)())
			}
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return k
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
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/filterQueryParams/index.ts"),
				o = r("./src/lib/isFakeSubreddit/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makePostCreationPageKey/index.ts"),
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
				v = r("./src/lib/makeApiRequest/index.ts"),
				h = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				T = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				E = r("./src/reddit/selectors/contentControls.ts"),
				x = r("./src/reddit/selectors/postCollection.ts"),
				C = r("./src/reddit/selectors/postCreations.ts"),
				A = r("./src/reddit/selectors/posts.ts"),
				w = r("./src/reddit/selectors/profile.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts");
			const R = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: s
						} = t.urlParams, n = Object(N.C)(e, {
							subredditName: s
						});
						n && (r = n.name)
					}
					return Object(c.q)(r)
				},
				k = "POST_CREATION__PAGE_PENDING",
				P = "POST_CREATION__PAGE_LOADED",
				D = "POST_CREATION__PAGE_FAILED",
				G = Object(i.a)(k),
				U = Object(i.a)(P),
				F = Object(i.a)(D),
				M = () => async (e, t) => {
					const r = t(),
						s = Object(C.a)(r);
					s !== Object(C.pb)(r) && e(Object(f.g)({
						submissionType: s
					}))
				}, q = e => async (t, r, s) => {
					const {
						collectionId: n,
						profileName: i,
						subredditName: c
					} = e, u = Object(d.a)(e), p = r(), m = p.creations.api.page.pending[u], f = p.creations.api.page.fetched[u], j = p.creations.api.page.error[u];
					if (m) return;
					if (f && !j) return void t(M());
					const y = [];
					t(G({
						key: u
					}));
					let x = c;
					!c && i && (x = `u_${i}`), y.push(((e, t) => Object(v.a)(e, {
						method: I.ob.GET,
						endpoint: Object(h.a)(`${_.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(s.apiContext(), {
						subredditName: x,
						collectionId: n
					})), i && (y.push(t(O.d(i))), y.push(t(O.b(i))));
					const [C] = await Object(T.a)("postCreation", () => Promise.all(y));
					if (C.ok) {
						const e = C.body,
							{
								posts: s = {},
								subredditAboutInfo: n
							} = e;
						if (t(U({
								key: u,
								meta: p.meta,
								...e,
								posts: s
							})), !Object(L.S)(r())) return;
						if (n) {
							const e = Object.keys(n)[0];
							await t(Object(b.e)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(M());
						const i = [];
						i.push(t(l.o()));
						const d = Object(L.m)(r());
						if (d && d.hasUserProfile && i.push(t(O.d(Object(S.e)(d)))), c && !Object(o.a)(c)) {
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
						subredditName: o,
						profileName: i
					} = e.params, d = e.queryParams, c = d.collection;
					if (await t(q({
							collectionId: c,
							profileName: i,
							subredditName: o
						})), !Object(L.S)(r())) return void Object(y.a)(t, r());
					let a;
					if (o ? (a = Object(N.C)(r(), {
							subredditName: o
						}), await t(Object(u.a)({
							subredditName: o
						}))) : i && (a = Object(w.k)(r(), {
							profileName: i
						})), d.source_id) await t(((e, t) => async (r, s) => {
						const {
							subredditName: n,
							profileName: o
						} = e, i = [];
						let d;
						n ? d = Object(N.I)(s(), n) : o && (d = Object(L.ob)(s(), {
							userName: o
						})), d && i.push(r(Object(j.b)(d, t))), i.push(r(Object(m.Q)(t))), await Promise.all(i);
						const c = Object(A.f)(s(), {
							postId: t
						});
						r(Object(f.m)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, d.source_id));
					else if (c) {
						const o = Object(x.q)(r(), {
							collectionId: c
						});
						a && o && o.subredditId === a.id || t(Object(s.c)(Object(n.a)(e.url, ["collection"])))
					}
					t(p.m({
						title: R(r())
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
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makePostDraftPageKey/index.ts"),
				o = r("./src/reddit/actions/profile/index.ts"),
				i = r("./src/config.ts"),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = r("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				m = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				O = Object(s.a)(p),
				g = Object(s.a)(m),
				j = Object(s.a)(f),
				_ = e => async (t, r, s) => {
					const {
						draftId: p,
						profileName: m
					} = e, f = Object(n.a)(e), O = r(), _ = O.creations.api.page.pending[f], I = O.creations.api.page.fetched[f], v = O.creations.api.page.error[f];
					if (_ || I && !v || !p) return;
					t(o.d(m));
					const h = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: d.ob.GET
					}))(s.apiContext(), p, m));
					if (h.ok) {
						const e = h.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(g({
							...e,
							key: f
						}))
					} else t(j({
						error: h.error,
						key: f
					}))
				}, I = e => async (t, r, s) => {
					await t(_(e.params))
				}
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isGQLSubredditPageExtra", (function() {
				return vt
			})), r.d(t, "handleSubredditPageApiError", (function() {
				return ht
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return yt
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return Tt
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return St
			})), r.d(t, "subredditPending", (function() {
				return Et
			})), r.d(t, "subredditLoaded", (function() {
				return xt
			})), r.d(t, "subredditFailed", (function() {
				return Ct
			})), r.d(t, "addAdditionalInformationForAGatewayResponse", (function() {
				return At
			})), r.d(t, "subredditDataRequested", (function() {
				return Nt
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return Lt
			})), r.d(t, "makeSubredditPageKey", (function() {
				return kt
			})), r.d(t, "subredditRequested", (function() {
				return Pt
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return Dt
			})), r.d(t, "subredditInvalidateListing", (function() {
				return Gt
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeRequest/index.ts"),
				o = r("./node_modules/lodash/find.js"),
				i = r.n(o),
				d = r("./node_modules/lodash/pick.js"),
				c = r.n(d),
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
				v = r("./src/reddit/actions/ads/index.ts"),
				h = r("./src/reddit/actions/communityFlairs/index.ts"),
				y = r("./src/reddit/actions/contentGate.ts"),
				T = r("./src/reddit/actions/discoveryUnit.ts"),
				S = r("./src/reddit/actions/economics/helpers/async.ts"),
				E = r("./src/reddit/actions/economics/predictions/index.ts"),
				x = r("./src/reddit/actions/externalAccount.ts"),
				C = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				A = r("./src/reddit/actions/gold/customEmojis.ts"),
				w = r("./src/reddit/actions/gold/powerups.ts"),
				N = r("./src/reddit/actions/meta.ts"),
				L = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				R = r("./src/reddit/actions/nsfwBlocking/async.tsx"),
				k = r("./src/reddit/actions/onboarding/index.ts"),
				P = r("./src/reddit/actions/pages/search/index.ts"),
				D = r("./src/reddit/actions/platform.ts"),
				G = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				U = r("./src/reddit/actions/seo/linksModule.ts"),
				F = r("./src/reddit/actions/seo/topicLinks.ts"),
				M = r("./src/lib/makeGqlRequest/index.ts"),
				q = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				B = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				Q = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				z = r("./src/reddit/selectors/widgets.ts");
			const H = (e, t) => async (r, s) => {
				const n = s(),
					o = Object(Q.Y)(n, {
						subredditId: e
					}),
					i = Object(z.j)(n, {
						subredditId: e
					});
				o.isNSFW || (null == i ? void 0 : i.length) > 0 && i.some(e => "community-list" === e) || r(Object(U.e)({
					id: e,
					data: t
				}))
			}, J = (e, t) => async r => {
				t && r(Object(F.b)({
					id: e,
					data: t
				}))
			};
			var $ = r("./src/reddit/actions/structuredStyles/index.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
				V = r("./src/reddit/actions/toaster.ts"),
				W = r("./src/reddit/helpers/localStorage/index.ts"),
				Y = r("./src/reddit/models/Subreddit/index.ts"),
				X = r("./src/reddit/models/Toast/index.ts"),
				Z = r("./src/reddit/routes/postCreation/constants.ts"),
				ee = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				te = r("./src/reddit/selectors/platform.ts"),
				re = r("./src/reddit/selectors/user.ts");
			const se = () => async (e, t, r) => {
				const s = t(),
					n = Object(te.e)(s);
				if (!n || n.type !== Y.g.Public) return;
				const o = n.name,
					i = Object(te.n)(s),
					d = Object(Q.z)(s, {
						subredditName: o
					});
				if (!d) return;
				const {
					activity7Day: c
				} = d, u = !!c && c >= 51 && c <= 100, l = !o || Object(p.a)(o), b = i && i.urlParams.subredditName === o, m = Object(re.S)(s), f = Object(ee.c)(s, {
					subredditId: Object(Q.I)(s, o)
				});
				if (l || b || Object(W.F)() || !u || !m || f) return;
				const O = Object(z.d)(t(), {
					subredditName: o
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(V.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${o}${Z.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: X.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(W.Lb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${o} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var ne = r("./src/reddit/actions/subreddit/questions.ts"),
				oe = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				ie = r("./src/reddit/actions/subredditSettings.ts"),
				de = r("./src/reddit/actions/tags/index.ts"),
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
				ve = r("./src/reddit/selectors/adsSignals.ts"),
				he = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ye = r("./src/reddit/selectors/experiments/econ/index.ts"),
				Te = r("./src/reddit/selectors/experiments/onboarding.ts"),
				Se = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var Ee = r("./src/reddit/endpoints/profile/info.ts"),
				xe = r("./src/reddit/helpers/canonicalUrls.ts"),
				Ce = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				Ae = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				we = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function Ne(e) {
				let {
					econLeaderboards: t,
					identity: r,
					trendingSubreddits: s
				} = e;
				const n = t.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(we.b)(n, s, r)
			}
			var Le = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				Re = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				ke = r("./src/reddit/helpers/post/index.ts"),
				Pe = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				De = r("./src/reddit/helpers/trackers/feed.ts"),
				Ge = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ue = r("./src/reddit/models/RichTextJson/index.ts"),
				Fe = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Me = r("./src/reddit/selectors/communityFlairs.ts"),
				qe = r("./src/reddit/selectors/experiments/countrySites.ts"),
				Be = r("./src/reddit/helpers/chooseVariant/index.ts");
			var Qe = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				ze = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				He = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Je = r("./src/reddit/selectors/gold/powerups/index.ts"),
				$e = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Ke = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Ve = r("./src/reddit/selectors/multireddit.ts"),
				We = r("./src/reddit/selectors/posts.ts"),
				Ye = r("./src/reddit/endpoints/page/popularFeed.ts"),
				Xe = r("./src/lib/initializeClient/installReducer.ts"),
				Ze = r("./src/reddit/reducers/features/modUserNotes/index.ts"),
				et = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				tt = r("./src/reddit/actions/communityChat/index.ts"),
				rt = r("./src/reddit/endpoints/devPlatform/index.ts"),
				st = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				nt = r("./node_modules/@sentry/minimal/esm/index.js"),
				ot = r("./src/lib/env/index.ts"),
				it = r("./node_modules/lodash/cloneDeep.js"),
				dt = r.n(it);
			const ct = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
				at = new Set(["posts.upvoteRatio", "posts.score", "posts.sendReplies", "posts.media", "posts.eventsOnRender", "posts.liveCommentsWebsocket", "posts.flair", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "posts.numComments", "posts.thumbnail.url", "posts.contentCategories", "subreddits.acceptFollowers", "subreddits.communityIcon", "subreddits.primaryColor", "subreddits.isChatPostFeatureEnabled", "subreddits.allowChatPostCreation", "subreddits.icon.url", "subreddits.subscribers", "token", "recentPostIds", "trendingSubredditIds", "posts.gildings", "posts.goldCount", "listingSort", "posts.discussionType", "posts.topAwardedType", "posts.allAwardings", "posts.audioRoom", "posts.approvedAtUTC", "posts.approvedBy", "posts.bannedAtUTC", "posts.bannedBy", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isRemoved", "posts.isSpam", "posts.isReactAllowed", "posts.reactedFrom", "posts.attributionInfo", "posts.modReports", "posts.numReports", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.removedBy", "posts.removedByCategory", "posts.userReports", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "subreddits.devPlatformMetadata"]);
			var ut = r("./node_modules/deep-diff/index.js");
			const lt = (e, t) => {
					e.postIds = t, e.posts = t.reduce((t, r) => (e.posts[r] && (t[r] = e.posts[r]), t), {}), e.postInstances = t.reduce((t, r) => (e.postInstances[r] && (t[r] = e.postInstances[r]), t), {});
					const r = Object.keys(e.posts).map(t => e.posts[t].belongsTo.id);
					e.subreddits = r.reduce((t, r) => (e.subreddits[r] && (t[r] = e.subreddits[r]), t), {}), e.postFlair = r.reduce((t, r) => (e.postFlair[r] && (t[r] = e.postFlair[r]), t), {})
				},
				bt = (e, t, r) => {
					const s = {},
						n = {};
					Object.keys(e).forEach(o => {
						if (!r.has(o)) {
							const i = e[o] || {},
								d = t[o] || {};
							s[o] = {}, n[o] = 0, Object.keys(i).forEach(e => {
								const t = i[e],
									c = d[e],
									a = Object(ut.diff)(t, c, {
										prefilter: (e, t) => (e => {
											let {
												ignorePaths: t,
												path: r,
												k: s,
												key: n
											} = e;
											return t.has(`${s}.${r.length?`${r.join(".")}.`:""}${n}`) || t.has(`${s}.${n}`)
										})({
											ignorePaths: r,
											path: e,
											k: o,
											key: t
										}),
										normalize: (e, t, r, s) => r || s ? [r, s] : [r, r]
									});
								n[o] = a ? n[o] + a.length : (null == n ? void 0 : n[o]) || 0, a && (s[o][e] = {
									gatewayThing: t,
									gqlThing: c,
									diffResult: a
								})
							})
						}
					});
					const o = Object.keys(n).reduce((e, t) => e += n[t], 0);
					return {
						allDiffs: s,
						issueCounts: n,
						totalIssues: o
					}
				},
				pt = (e, t) => {
					const r = ((e, t) => {
							const r = e.postIds;
							return t.postIds.reduce((e, t, s) => {
								const n = r.findIndex(e => t === e);
								return n > 0 ? e.found[t] = {
									gateway: n,
									gql: s
								} : e.notFound.push(t), e
							}, {
								found: {},
								notFound: []
							})
						})(e, t),
						s = Object.keys(r.found).sort();
					return lt(e, s), lt(t, s), {
						gatewayResponse: e,
						normalizedGqlResponse: t,
						positionDiffs: r
					}
				},
				mt = e => {
					let {
						gatewayResponse: t,
						normalizedGqlResponse: r,
						ignorePaths: s,
						normalizeFunction: n
					} = e;
					if (n) {
						const e = n(t, r);
						return {
							...bt(e.gatewayResponse, e.normalizedGqlResponse, s),
							positionDiffs: e.positionDiffs
						}
					}
					return bt(t, r, s)
				};
			var ft = r("./src/reddit/helpers/locales.ts"),
				Ot = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				gt = r("./src/reddit/selectors/experiments/popularGqlMigration.ts"),
				jt = r("./node_modules/reselect/es/index.js");
			const _t = Object(jt.a)(e => Object(Be.c)(e, {
				experimentEligibilitySelector: Be.a,
				experimentName: je.tc
			}), e => e === je.Pd);
			var It = r("./src/reddit/selectors/meta.ts");

			function vt(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object(Xe.a)({
				features: {
					modUserNotes: Ze.a
				}
			});
			const ht = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: s,
							reason: n
						}
					} = e, o = s ? s.account : void 0, i = s && s.features || void 0, d = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (n === Y.f.NotFoundSubreddit) r(y.u({
							account: o,
							features: i,
							subredditName: d
						}));
						else if (n === Y.f.BannedSubreddit) {
						const e = s ? s.banMessage || s.ban_message : void 0;
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
						if (n === Y.f.GoldSubreddit) r(y.x({
							account: o,
							features: i,
							subredditName: d
						}));
						else if (n === Y.f.PrivateSubreddit) r(y.y({
						account: o,
						features: i,
						subredditDescription: s.description || "",
						subredditName: d,
						isContributorRequestsDisabled: !!s.isContributorRequestsDisabled,
						isContributorRequestTimestamp: s.isContributorRequestTimestamp ? parseInt(s.isContributorRequestTimestamp, 10) : void 0,
						subredditId: s.id
					}));
					else if (n === Y.f.QuarantinedSubreddit) {
						const e = !s || void 0 === s.quarantineRequiresEmailOptin || s.quarantineRequiresEmailOptin;
						r(y.A({
							account: o,
							features: i,
							subredditName: d,
							quarantineRequiresEmail: e,
							quarantineMessage: s.quarantineMessage,
							quarantineMessageHtml: s.quarantineMessageHtml || "",
							quarantineMessageRTJson: s.quarantineMessageRTJson || Ue.i
						}))
					} else if (n === Y.f.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: n
						} = s;
						r(y.w({
							account: o,
							features: i,
							subredditName: d,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: n
						}))
					}
				}
			}, yt = "PAGE__SUBREDDIT_PENDING", Tt = "PAGE__SUBREDDIT_LOADED", St = "PAGE__SUBREDDIT_FAILED", Et = Object(m.a)(yt), xt = Object(m.a)(Tt), Ct = Object(m.a)(St), At = async e => {
				let {
					subredditName: t,
					subredditsResponse: r,
					extraArgs: s,
					state: n,
					isPopular: o,
					isInGqlSubredditExperiment: i,
					isInDevPlatformExperiment: d
				} = e;
				if (!r || i) return r;
				const c = {
						...r
					},
					a = o ? null : Object(ke.a)(s.gqlContext, c.posts),
					u = Object(st.a)(s.apiContext(), c.posts, n),
					l = d ? Object(rt.a)(s.gqlContext(), {
						subredditName: t
					}) : null;
				let b, p, m;
				if ([b, p, m] = await Promise.all([a, u, l]), b && (c.posts = b), p && (c.posts = p), m) {
					const e = wt(c.subreddits, t);
					e && c.subreddits[e] && (c.subreddits[e].devPlatformMetadata = m)
				}
				return c
			}, wt = (e, t) => {
				var r;
				return null === (r = i()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
			}, Nt = (e, t, r, o) => async (i, d, c) => {
				var a, l, b, m, f, O, g, j, y, T, R, P, G, U, F, z, $, W, Y, Z, ee, se, ue, le, xe, Ce, Ae, we;
				const ke = d(),
					Ge = Object(re.R)(ke) || Object(re.S)(ke);
				if (Object(I.a)(ke.listings.postOrder.api.pending, e)) return;
				const Ue = null === (l = null === (a = Object(te.b)(ke)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
					{
						currentPage: Me
					} = ke.platform,
					{
						countryCode: ze,
						languageCode: He
					} = (null == Me ? void 0 : Me.urlParams) || {},
					Ve = Object(p.a)(t, {
						countryCode: ze,
						languageCode: He
					}),
					We = Object(p.c)(t, {
						countryCode: ze,
						languageCode: He
					}),
					Xe = (Object(p.b)(t, {
						countryCode: ze,
						languageCode: He
					}) || We) && ke.posts.recent.length ? {
						...r,
						recentPostIds: ke.posts.recent
					} : r;
				Xe.layout = be.e[Object(pe.U)(ke, {})], We && (Xe.forceGeopopular = !0), i(Et({
					key: e
				}));
				const Ze = !Ve && Object(te.m)(ke) && Object(Qe.b)(ke),
					rt = We && (Object(gt.a)(ke) || Object(gt.b)(ke)),
					st = We && _t(ke);
				let it, ut;
				if ((rt || st) && (it = Object(_.i)(() => Object(Ye.a)(c.gqlContext(), Object(Oe.c)(ke, t, Xe, !0)), {
						name: Ze ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ue,
						isLoggedIn: Ge
					})), rt) ut = it;
				else if (r.sort === u.bb.AWARDED && We) ut = Object(me.a)(c.gqlContext(), {
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
					const e = Ze ? () => Object(Oe.b)(c.gqlContext(), Object(Oe.c)(ke, t, Xe, !0), Ge) : () => Object(Oe.a)(c.apiContext(), t, Xe);
					ut = Object(_.i)(e, {
						name: Ze ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ue,
						isLoggedIn: Ge
					})
				}
				const lt = Object(Q.X)(d(), {
						subredditId: Object(Q.I)(d(), t)
					}).length > 0,
					bt = Object(_.i)(() => (async function(e, t) {
						return Object(M.a)(e, {
							...Se,
							variables: t
						})
					})(c.gqlContext(), ((e, t) => {
						let {
							after: r,
							isMobile: s,
							subredditName: n,
							isFake: o,
							isLoggedIn: i,
							layout: d,
							limit: c,
							hasRules: a,
							sort: u,
							t: l
						} = t;
						var b, p;
						const m = Object(Te.i)(e),
							f = !!m && !Object(je.zg)(m) && (o || m === je.kb.Community),
							{
								adsSeenCount: O,
								totalPostsSeenCount: g,
								sessionStartTime: j
							} = Object(ve.a)(e),
							_ = Object(ye.e)(e),
							I = Object(he.c)(e),
							v = {
								subredditName: n,
								isFake: o,
								sort: u,
								adContext: {
									layout: d ? d.toUpperCase() : _e.a.Card,
									clientSignalSessionData: {
										adsSeenCount: O,
										totalPostsSeenCount: g,
										sessionStartTime: j
									}
								},
								includeAchievementFlairs: !o,
								includeCustomEmojis: !o && _,
								includeIdentity: i,
								includeInterestTopics: f,
								includePowerups: !o,
								includeQuestions: i && !o,
								includeRules: !o && !a,
								includeRedditorKarma: i && !(null === (p = null === (b = e.user.account) || void 0 === b ? void 0 : b.karma) || void 0 === p ? void 0 : p.total),
								includeSubredditLinks: !i,
								includeSubredditRankings: I,
								includeTopicLinks: !i
							};
						return u && (v.sort = u.toUpperCase()), l && (v.range = l.toUpperCase()), s ? v.pageSize = Object(Ie.a)(d) : c && (v.pageSize = c), r && (v.after = Object(ge.a)(r)), v
					})(ke, {
						after: r.after,
						isLoggedIn: Ge,
						subredditName: t,
						hasRules: lt,
						isFake: Ve,
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
					jt = Object(et.a)();
				let yt, Tt;
				Ze ? yt = await ut : [yt, Tt] = await Promise.all([ut, bt]);
				const St = Tt && Object(n.c)(Tt) ? Tt.body.data : null;
				if (st) {
					const e = await it;
					! function(e) {
						let {
							gatewayResponse: t,
							normalizedGqlResponse: r,
							rawGqlResponse: s,
							ignorePaths: n = ct,
							normalizeFunction: o
						} = e;
						const i = dt()(t),
							d = dt()(r);
						if (Object(ot.a)()) {
							console.group("GQL Popular Shadowtest"), console.groupCollapsed("raw gql response"), console.log(s), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(r), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
							const e = mt({
									gatewayResponse: i,
									normalizedGqlResponse: d,
									ignorePaths: n,
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
						if (Object(ot.b)() || Object(ot.c)()) {
							const e = mt({
								gatewayResponse: i,
								normalizedGqlResponse: d,
								ignorePaths: n,
								normalizeFunction: o
							});
							nt.l(t => {
								t.setExtra("info", e), t.setExtra("bypassSampling", !0), nt.d("GQL Popular Shadowtest Diff")
							})
						}
					}({
						gatewayResponse: yt.body,
						normalizedGqlResponse: e.body,
						rawGqlResponse: e,
						ignorePaths: at,
						normalizeFunction: pt
					})
				}
				let Lt = yt.body;
				const Rt = (null == Lt ? void 0 : Lt.subreddits) ? wt(Lt.subreddits, t) : null,
					kt = Object(Ot.a)(ke);
				Lt = await At({
					subredditName: t,
					subredditsResponse: Lt,
					isInGqlSubredditExperiment: Ze,
					extraArgs: c,
					isPopular: We,
					state: ke,
					isInDevPlatformExperiment: kt
				}), i(D.n(yt.status));
				const Pt = `error-${e}`,
					Dt = Ve || Rt;
				if (yt.ok && Dt || We && Lt) {
					if ((We || !Ve && Rt) && Lt.geoFilter && i(Object(N.k)(Lt.geoFilter)), !Ve && Rt) {
						let e, t;
						if (e = Ze ? Lt : Object(C.b)(null == St ? void 0 : St.subredditInfoByName), Object(C.a)(i, Rt, e), Object(ye.e)(ke)) {
							let e;
							e = Ze ? Lt : Object(A.b)(null == St ? void 0 : St.subredditInfoByName), Object(A.a)(i, Rt, e)
						}
						t = Ze ? Lt.powerups : Object(w.b)(null == St ? void 0 : St.subredditInfoByName, null == St ? void 0 : St.identity);
						const r = (null === (m = null === (b = null == Lt ? void 0 : Lt.subredditAboutInfo) || void 0 === b ? void 0 : b[Rt]) || void 0 === m ? void 0 : m.detectedLanguage) || (null === (f = null == St ? void 0 : St.subredditInfoByName) || void 0 === f ? void 0 : f.detectedLanguage);
						Object(It.d)(ke) && r && Object(qe.f)(ke) && await Object(ft.a)(r, i), Lt.subredditAboutInfo[Rt].detectedLanguage = r, Object(w.a)(i, Rt, t), Ze ? i(Object(E.n)(Rt, Lt.predictionTournaments || [])) : (null == St ? void 0 : St.subredditInfoByName) && i(Object(E.n)(Rt, St.subredditInfoByName.predictionTournaments || [])), Object(Je.b)(d(), {
							subredditId: Rt
						}) && (e => Object(Be.c)(e, {
							experimentName: je.xd,
							experimentEligibilitySelector: re.S
						}))(d())
					}
					let s;
					const n = null === (O = Lt.postIds) || void 0 === O ? void 0 : O.filter(e => !!Lt.posts[e].isMeta);
					if (n && n.length && Rt) {
						const e = Object(_.i)(() => Object(fe.a)(c.apiContext(), Rt, n), {
								name: "getGovernanceData",
								page: Ue,
								isLoggedIn: Ge
							}),
							t = await e;
						t.ok && (s = t.body)
					}
					if (Rt) {
						const e = (null === (j = null === (g = null == Lt ? void 0 : Lt.subredditAboutInfo) || void 0 === g ? void 0 : g[Rt]) || void 0 === j ? void 0 : j.isEligibleForContentBlocking) || (null === (y = null == St ? void 0 : St.subredditInfoByName) || void 0 === y ? void 0 : y.isEligibleForContentBlocking);
						Lt.subredditAboutInfo[Rt].isEligibleForContentBlocking = e;
						const t = (null === (R = null === (T = null == Lt ? void 0 : Lt.subredditAboutInfo) || void 0 === T ? void 0 : T[Rt]) || void 0 === R ? void 0 : R.isMediaInCommentsSettingShown) || (null === (P = null == St ? void 0 : St.subredditInfoByName) || void 0 === P ? void 0 : P.isMediaInCommentsSettingShown);
						Lt.subredditAboutInfo[Rt].isMediaInCommentsSettingShown = t;
						const r = Ze ? null : null === (G = null == St ? void 0 : St.subredditInfoByName) || void 0 === G ? void 0 : G.directoryRankings;
						r && (Lt.subredditAboutInfo[Rt].directoryRankings = r)
					}
					if (Lt.channels && Lt.channelIds && i(Object(tt.c)({
							channels: Lt.channels,
							channelIds: Lt.channelIds
						})), St) {
						const e = null === (F = null === (U = St.identity) || void 0 === U ? void 0 : U.redditor) || void 0 === F ? void 0 : F.karma,
							t = {
								karma: {
									...(null === (z = ke.user.account) || void 0 === z ? void 0 : z.karma) || Ee.a,
									...e
								}
							};
						Lt.account && Object.assign(Lt.account, t)
					}
					if (Rt) {
						let e, t;
						if (Ze) {
							const r = Lt.subredditAboutInfo[Rt];
							e = null == r ? void 0 : r.notificationLevel, t = null == r ? void 0 : r.myRedditSettings
						} else if (vt(St)) {
							const r = St.subredditInfoByName;
							e = null == r ? void 0 : r.notificationLevel, t = null == r ? void 0 : r.myRedditSettings
						}
						Lt.subredditAboutInfo[Rt].notificationLevel = e, Lt.subredditAboutInfo[Rt].myRedditSettings = t
					}
					if (Rt) {
						let e;
						vt(St) && (e = null === ($ = St.subredditInfoByName) || void 0 === $ ? void 0 : $.isMuted), Ze && (e = null === (W = Lt.subredditAboutInfo[Rt]) || void 0 === W ? void 0 : W.isMuted), Lt.subredditAboutInfo[Rt].isMuted = e
					}
					const a = null === (Y = Lt.subredditPermissions) || void 0 === Y ? void 0 : Y.posts;
					!Ze && a && i(Object(L.a)({
						postIds: Lt.postIds
					}));
					let u = null == Lt ? void 0 : Lt.interestTopicRecommendations;
					if (!u && (null == St ? void 0 : St.interestTopics)) {
						const e = Object(Le.a)(St.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && i(Object(k.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), i(xt({
						key: e,
						meta: ke.meta,
						governance: s,
						correlationId: jt,
						...Lt,
						postIds: Lt.postIds
					}));
					const l = null === (ee = null === (Z = Object(te.b)(ke)) || void 0 === Z ? void 0 : Z.locationState) || void 0 === ee ? void 0 : ee[ae.b.FeedLoadReason];
					if (Object(De.b)(r.isRefresh ? ae.a.UserRefresh : null != l ? l : ae.a.InitialLoad)(d()), !Ve) {
						const e = Object(Q.I)(d(), t);
						Ze && Lt.subredditRules ? i(K.t({
							rules: {
								rules: Lt.subredditRules
							},
							subredditId: e
						})) : (null === (se = null == St ? void 0 : St.subreddit) || void 0 === se ? void 0 : se.rules) && i(K.t({
							rules: Object(Re.a)(St.subreddit.rules),
							subredditId: e
						}));
						const r = Object(Ke.g)(d(), {
								subredditId: e
							}),
							s = null === (ue = null == Lt ? void 0 : Lt.userFlair) || void 0 === ue ? void 0 : ue[e];
						Ze && e && (r || (null == s ? void 0 : s.applied) || (null === (le = null == s ? void 0 : s.permissions) || void 0 === le ? void 0 : le.canUserChange)) && i(Object(ce.fetchUserFlairFromGql)(e, t));
						const n = Object(h.c)(Lt.posts, e),
							o = Object(h.b)(Lt.structuredStyles),
							c = (o ? Object(h.d)(o) : []).concat(n);
						i(Object(h.a)(c, e))
					}
					if (o && i(V.g(Pt)), i(Object(v.b)(Fe.a.SUBREDDIT)), i(Object(x.p)()), Rt) {
						let e, r, s;
						if (Ze ? (e = Lt.questions, r = Lt.subredditLinks, s = Lt.subredditTopicLinks) : (e = null == St ? void 0 : St.subredditInfoByName, r = Object(q.a)({
								data: {
									subredditInfoById: null == St ? void 0 : St.subredditInfoByName
								}
							}), s = Object(B.a)({
								data: {
									subredditInfoById: null == St ? void 0 : St.subredditInfoByName
								}
							})), Object(ne.a)(i, Rt, e), i(H(Rt, r)), i(J(Rt, s)), !Ze && (null === (Ce = null === (xe = null == St ? void 0 : St.subredditInfoByName) || void 0 === xe ? void 0 : xe.elements) || void 0 === Ce ? void 0 : Ce.edges)) {
							const e = (null === (we = null === (Ae = null == St ? void 0 : St.subredditInfoByName) || void 0 === Ae ? void 0 : Ae.elements) || void 0 === we ? void 0 : we.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							i(Object(oe.e)({
								subredditId: Rt,
								nodes: e
							}))
						} else if (Ze && (null == Lt ? void 0 : Lt.postIds)) {
							const e = Lt.postIds.map(e => null == Lt ? void 0 : Lt.posts[e].lastAuthorModNote);
							e && i(Object(oe.e)({
								subredditId: Rt,
								nodes: e
							}))
						}
						const n = [Object(_.i)(() => i(Object(S.a)({
							subredditId: Rt,
							postIds: Lt.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: Ue,
							isLoggedIn: Ge
						})];
						if (Object($e.a)(d(), {
								subredditId: Rt
							})) {
							const e = Object(_.i)(() => i(Object(ie.h)(t, Rt)), {
									name: "subredditSettingsRequested",
									isLoggedIn: Ge,
									page: Ue
								}),
								r = Object(_.i)(() => i(Object(de.g)(Rt, Pe.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: Ge,
									page: Ue
								});
							n.push(e, r)
						}
						await Promise.all(n)
					}
				} else {
					const n = yt.ok ? void 0 : yt.error;
					if (Object(De.a)(n ? `${yt.status||"000"}: ${n.type}` : "000: UNKNOWN_ERROR")(d()), 403 === yt.status || 404 === yt.status || 451 === yt.status) return void i(ht(yt, t));
					i(Ct({
						error: !yt.ok && yt.error || {
							type: u.L.NOT_FOUND_ERROR
						},
						key: e,
						...Lt
					})), o && i(V.f({
						id: Pt,
						kind: X.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: Nt(e, t, r, o)
					}))
				}
			}, Lt = (e, t, r) => async (s, n) => {
				const o = n(),
					i = Object(f.a)(e, t.sort, t);
				Object(We.z)(o, {
					listingKey: i
				}).length > 0 || await s(Nt(i, e, t, r))
			}, Rt = (e, t, r, s) => {
				const n = Object(qe.b)(e);
				if (Object(p.a)(t, {
						countryCode: r,
						languageCode: s
					})) {
					if (Object(b.a)(t)) {
						return Object(Ve.a)(e, {
							listingName: t
						}).displayText
					}
					if (n) return Object(j.a)(e, Object(g.g)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case ue.d.Popular:
							return "r/popular";
						case ue.d.All:
							return "r/all"
					}
				}
				const o = Object(Q.bb)(e, {
					subredditName: t
				});
				if (n) {
					const r = Object(Q.z)(e, {
							subredditName: t
						}),
						s = r && r.detectedLanguage;
					return Object(j.a)(e, o, s)
				}
				return o
			}, kt = (e, t, r, s) => s ? Object(O.b)(e.subredditName, void 0, s) : Object(f.a)(e.subredditName, t, r), Pt = (e, t) => async (r, s) => {
				var n, o, i;
				const {
					countryCode: d,
					languageCode: b
				} = e.params, m = Object(l.e)(e.params), {
					styling: g
				} = e.queryParams, j = s(), y = Object(Ce.a)(e.params, j);
				if ("Popular" === m) return void r(Object(a.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === m) return void r(Object(a.c)(e.url.replace("r/All", "r/all")));
				const S = Object(O.d)(e.queryParams, Object(re.mb)(j)),
					E = kt({
						subredditName: m,
						countryCode: d,
						languageCode: b
					}, y, e.queryParams, S),
					C = y,
					A = Object(I.a)(j.listings.postOrder.api.error, E),
					w = Object(I.a)(j.listings.postOrder.api.pending, E);
				let N = !!Object(I.a)(j.listings.postOrder.ids, E);
				const L = Object(I.a)(j.listings.postOrder.listingSort, E);
				L && L.hasChanged && (N = !1);
				let k = Object(Q.I)(j, m);
				const U = (e, t) => "true" === g && ((e, t) => Object(Ke.b)(Ge.c.config)(e, {
						subredditId: t
					}) || Object(Ke.b)(Ge.c.flair)(e, {
						subredditId: t
					}))(e, t),
					F = le.O in e.queryParams && e.queryParams[le.O].toUpperCase() || "",
					M = F in u.oc && u.oc[F];
				if (w || N && !A && !t) {
					if (U(j, k) && r($.i(k)), N) {
						const t = Rt(s(), m, d, b);
						r(D.m({
							title: t
						})), (null === (n = j.listings.postOrder.correlationIds) || void 0 === n ? void 0 : n[E]) && r(D.o({
							correlationId: j.listings.postOrder.correlationIds[E]
						})), Object(xe.g)(s(), r, e), window.addEventListener("load", () => {
							r(Object(x.p)())
						}), j.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(v.b)(Fe.a.SUBREDDIT))
						}), r(se())
					}
					return void(Object(ze.e)(s()) && r(Object(R.a)()))
				}
				r(T.g());
				const q = null === (i = null === (o = Object(te.b)(j)) || void 0 === o ? void 0 : o.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
					B = Object(re.S)(s()),
					z = Object(_.i)(() => r(Object(G.c)(`r/${m}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: B,
						page: q
					});
				if (S) {
					const e = Object(_.i)(() => r(Object(P.d)({
						key: E,
						options: S,
						subredditName: m
					})), {
						name: "searchDataRequested",
						isLoggedIn: B,
						page: q
					});
					await e
				} else {
					const t = {
						...c()(e.queryParams, [...le.q, ...le.p, le.l]),
						sort: C,
						t: Object(Ae.a)(C, M)
					};
					await r(Nt(E, m, t, !0))
				}
				const H = j.platform.currentPage,
					J = Object(He.d)(j, {
						pageLayer: H
					});
				if (Object(He.a)(J) || Object(He.b)(J) || Object(He.c)(J)) {
					const e = Object(f.a)(m, u.bb.TOP, {
							t: u.oc.WEEK
						}),
						t = {
							sort: u.bb.TOP,
							t: u.oc.WEEK
						};
					await r(Nt(e, m, t, !1))
				}
				if (Object(ze.e)(s()) && r(Object(R.a)()), k = k || Object(Q.I)(s(), m), !Object(Me.a)(j, k) && !Object(p.a)(m, {
						countryCode: d,
						languageCode: b
					})) {
					const e = Object(_.i)(() => r(Object(h.e)(m)), {
						name: "getTopCommunityFlair",
						page: q,
						isLoggedIn: B
					});
					await e
				}
				U(s(), k) && r($.i(k)), Object(xe.g)(s(), r, e);
				const K = Rt(s(), m);
				r(D.m({
					title: K
				})), r(se()), await z
			}, Dt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", Gt = Object(m.a)(Dt)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "K", (function() {
				return s
			})), r.d(t, "L", (function() {
				return n
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
				return v
			})), r.d(t, "g", (function() {
				return h
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
				return A
			})), r.d(t, "U", (function() {
				return w
			})), r.d(t, "V", (function() {
				return N
			})), r.d(t, "W", (function() {
				return L
			})), r.d(t, "X", (function() {
				return R
			})), r.d(t, "Y", (function() {
				return k
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
				return z
			})), r.d(t, "db", (function() {
				return H
			})), r.d(t, "J", (function() {
				return J
			})), r.d(t, "a", (function() {
				return $
			})), r.d(t, "F", (function() {
				return K
			})), r.d(t, "N", (function() {
				return V
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
				return se
			})), r.d(t, "bb", (function() {
				return ne
			}));
			const s = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				n = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				o = "POST_CREATION_EDIT_COMPLETE",
				i = "POST_CREATION_EDIT_FAILED",
				d = "POST_CREATION_PENDING_EDIT",
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
				v = "POST_CREATION__CHANGE_MEDIA_BODY",
				h = "POST_CREATION__CHANGE_RECAPTCHA",
				y = "POST_CREATION__CHANGE_RTE_STATE",
				T = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				S = "POST_CREATION__CHANGE_TITLE",
				E = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				C = "POST_CREATION__TOGGLE_IS_CHANGED",
				A = "POST_CREATION__TOGGLE_IS_GOV",
				w = "POST_CREATION__TOGGLE_IS_NSFW",
				N = "POST_CREATION__TOGGLE_IS_OC",
				L = "POST_CREATION__TOGGLE_IS_POLL",
				R = "POST_CREATION__TOGGLE_IS_SPOILER",
				k = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				P = "POST_CREATION__TOGGLE_SEND_REPLIES",
				D = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				G = "POST_CREATION__RESET_FORM",
				U = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				M = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				q = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				Q = "POST_CREATION__FAILED",
				z = "POST_CREATION__POLL_FAILED",
				H = "POST_CREATION__VALIDATION_FAILED",
				J = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				$ = "POST_CREATION__CAPTCHA_REQUIRED",
				K = "POST_CREATION__SET_SUBMIT_MODE",
				V = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				W = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS",
				Z = "POST_CREATION__SUBREDDIT_RECOMMENDATION_PENDING",
				ee = "POST_CREATION__SUBREDDIT_RECOMMENDATION_LOADED",
				te = "POST_CREATION__SUBREDDIT_RECOMMENDATION_FAILED",
				re = "POST_CREATION__SUB_REC_IS_INPUT_CHANGED",
				se = "POST_CREATION__UPDATE_TOURNAMENT",
				ne = "POST_CREATION__UPDATE_TALK"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return x
			})), r.d(t, "o", (function() {
				return A
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "d", (function() {
				return k
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
				return z
			})), r.d(t, "y", (function() {
				return H
			})), r.d(t, "A", (function() {
				return J
			})), r.d(t, "B", (function() {
				return $
			})), r.d(t, "E", (function() {
				return K
			})), r.d(t, "D", (function() {
				return V
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
				return se
			})), r.d(t, "n", (function() {
				return ne
			})), r.d(t, "k", (function() {
				return ue
			})), r.d(t, "j", (function() {
				return pe
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/debounce.js"),
				n = r.n(s),
				o = r("./node_modules/react-router-redux/es/index.js"),
				i = r("./src/lib/isUrl/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
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
				v = r("./src/reddit/selectors/activeModalId.ts"),
				h = r("./src/reddit/selectors/experiments/crosspostRecommendations.ts"),
				y = r("./src/reddit/selectors/postCollection.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				S = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				E = r("./src/reddit/actions/postCreation/constants.ts");
			const x = Object(d.a)(E.n),
				C = Object(d.a)(E.D),
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
				w = Object(d.a)(E.b),
				N = Object(d.a)(E.c),
				L = Object(d.a)(E.d),
				R = Object(d.a)(E.e),
				k = Object(d.a)(E.f),
				P = Object(d.a)(E.g),
				D = Object(d.a)(E.h),
				G = Object(d.a)(E.i),
				U = Object(d.a)(E.j),
				F = Object(d.a)(E.q),
				M = Object(d.a)(E.S),
				q = Object(d.a)(E.R),
				B = (Object(d.a)(E.T), Object(d.a)(E.U)),
				Q = Object(d.a)(E.V),
				z = Object(d.a)(E.W),
				H = Object(d.a)(E.X),
				J = Object(d.a)(E.Y),
				$ = Object(d.a)(E.Z),
				K = Object(d.a)(E.cb),
				V = Object(d.a)(E.bb),
				W = Object(d.a)(E.ab),
				Y = Object(d.a)(E.r),
				X = n()((e, t) => {
					Object(i.a)(t) && e((e => async (t, r, s) => {
						let {
							apiContext: n
						} = s;
						const o = await Object(u.e)(n(), e);
						o.ok && o.body && o.body.json && o.body.json.data && t(C(o.body.json.data))
					})(t))
				}, 500),
				Z = e => async t => {
					t(L(e)), X(t, e)
				}, ee = Object(d.a)(E.E), te = (e, t) => async (r, s) => {
					r(ee()), r(e ? Object(o.b)(I.b) : Object(o.b)(Object(T.db)(s(), {
						pageLayer: t
					})))
				}, re = e => async t => {
					t(c.i(e))
				}, se = e => async (t, r) => {
					const s = r(),
						n = Object(a.I)(e),
						o = Object(T.H)(s);
					if (n && o) {
						Object(v.a)(s) !== j.d && t(re(j.d))
					} else t(te(!1, e))
				}, ne = e => async (t, r) => {
					const s = r();
					Object(y.m)(s, {
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
								s = Object(S.l)(r),
								n = Object(S.k)(r),
								o = Object(S.b)(r);
							e(pe(t, s, n, void 0, o))
						} else Object(S.j)(r) && !Object(S.d)(r) && e(me())
				}, le = ["torrents", "IsolatedVocals"], be = ["askreddit", "teenagers"], pe = (e, t, r, s, n) => async (o, i, d) => {
					let {
						apiContext: c,
						gqlContext: a
					} = d;
					const u = i();
					if (Object(S.i)(u)) return;
					o(ie());
					const l = Object(m.c)(m.a.PostComposer),
						j = await ((e, t, r, s, n, o) => Object(b.a)(e, {
							...p,
							variables: {
								title: t,
								body: r,
								link: s,
								correlationId: n,
								confidenceWeight: o
							}
						}))(a(), e, t, r, l, n),
						I = {};
					let v = {};
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
								sVal: s
							} = e, n = t.name;
							return n && (T[n] = {
								confidence: r,
								succRate: s
							}), t
						}).filter(e => !le.includes(e.name));
						const n = (r = s ? r.filter(e => !s(e)) : r).slice(0, S.a),
							d = n.map(e => {
								const t = e.name;
								return E.push(t), t
							});
						if (Object(h.b)(u) && (e => {
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
						n.forEach(e => {
							if (Object(_.k)(e)) {
								const t = Object(O.f)(e);
								y[t.id] = t
							} else if (e && Object.keys(e).length > 0) {
								const t = Object(O.a)(e),
									r = Object(f.a)(e);
								I[t.id] = t, v = {
									...v,
									...r
								}
							}
						})
					}
					o(ae(!1)), o(oe({
						subreddits: I,
						subredditsAboutInfo: v,
						unavailableSubreddits: y,
						recSubsDict: T,
						recSubsOrder: E
					})), 0 === Object(S.c)(i()).length && o(de())
				}, me = () => async (e, t, r) => {
					let {
						apiContext: s,
						gqlContext: n
					} = r;
					const o = t();
					if (Object(S.i)(o)) return;
					e(ie());
					const i = {};
					let d = {};
					const c = {},
						a = {},
						u = [],
						p = await (e => Object(b.a)(e, {
							...l,
							variables: {
								recentSubreddits: []
							}
						}))(n());
					if (!p.ok || !p.body) return e(de()), void e(ae(!1)); {
						const {
							data: e
						} = p.body;
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
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return v
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/post.ts"),
				o = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = r("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				d = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = Object(s.a)(o.w),
				u = Object(s.a)(o.x),
				l = Object(s.a)(o.G),
				b = (Object(s.a)(o.H), Object(s.a)(o.I)),
				p = Object(s.a)(o.T),
				m = e => async (t, r) => {
					if (Object(d.a)(r())) return t(f(e))
				}, f = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = Object(c.k)(r()),
						d = Object(c.m)(r(), {
							subreddit: e
						}),
						p = d && d.lastUpdated || 0,
						m = 1e3 * o.global.rpan_config_refresh_rate;
					if (o.isPending || o.isPermanentlyCanceled || Date.now() < p + m) return;
					t(l());
					const f = await Object(i.c)(n(), e);
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
				}, O = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					t(p()), await Object(i.h)(n(), e)
				}, g = e => async (t, r, s) => {
					let {
						apiContext: o
					} = s;
					r().posts.models[e] || await t(Object(n.L)(e))
				}, j = Object(s.a)(o.v), _ = Object(s.a)(o.J), I = Object(s.a)(o.K), v = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					const n = t();
					if (Object(c.h)(n)) return;
					e(_());
					const o = await Object(i.d)(s());
					o.ok && o.body && o.body.data ? e(j({
						subreddits: o.body.data
					})) : e(I({
						error: o.error
					}))
				}
		},
		"./src/reddit/actions/recentSubreddits/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			}));
			const s = "SET_RECENT_SUBREDDITS",
				n = "SUBREDDIT_VISITED",
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
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/goodContent/index.ts");
			const o = "FRONTPAGE_LINKS__REQUEST_LOADED",
				i = "SUBREDDIT_LINKS_LOADED",
				d = 10,
				c = Object(s.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				a = Object(s.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(s.a)(o),
				l = Object(s.a)(i),
				b = () => async e => {
					e(c());
					const t = await Object(n.a)();
					e(t ? u(t) : a())
				}
		},
		"./src/reddit/actions/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "SUBREDDIT_TOPIC_LINKS_LOADED",
				o = Object(s.a)(n)
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
				return pe
			})), r.d(t, "g", (function() {
				return me
			})), r.d(t, "f", (function() {
				return fe
			})), r.d(t, "e", (function() {
				return Oe
			})), r.d(t, "q", (function() {
				return Ie
			})), r.d(t, "b", (function() {
				return ve
			})), r.d(t, "c", (function() {
				return he
			})), r.d(t, "a", (function() {
				return ye
			})), r.d(t, "u", (function() {
				return xe
			})), r.d(t, "n", (function() {
				return Ce
			})), r.d(t, "s", (function() {
				return Ae
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				o = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/listingSort/index.ts"),
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
				v = r("./src/reddit/constants/parameters.ts"),
				h = r("./src/reddit/constants/postLayout.ts"),
				y = r("./src/reddit/contexts/PageLayer/index.tsx"),
				T = r("./src/reddit/endpoints/governance/posts.ts"),
				S = r("./src/reddit/endpoints/messages/index.ts"),
				E = r("./src/reddit/endpoints/modQueue/index.ts"),
				x = r("./src/reddit/endpoints/page/subredditPage.ts"),
				C = r("./src/reddit/endpoints/subreddit/about.ts"),
				A = r("./src/reddit/endpoints/subreddit/rules.ts"),
				w = r("./src/reddit/endpoints/user/preferences.ts"),
				N = r("./src/reddit/helpers/addSupplementaryTextInfoToAdPosts.ts"),
				L = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				R = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				P = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				D = r("./src/reddit/helpers/trackers/feed.ts"),
				G = r("./src/reddit/models/Subreddit/index.ts"),
				U = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				F = r("./src/reddit/models/Toast/index.ts"),
				M = r("./src/reddit/models/User/index.ts"),
				q = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				B = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = r("./src/reddit/selectors/profile.ts"),
				z = r("./src/reddit/selectors/subreddit.ts"),
				H = r("./src/reddit/selectors/user.ts"),
				J = r("./src/lib/isFakeSubreddit/index.ts"),
				$ = r("./src/reddit/endpoints/page/popularFeed.ts"),
				K = r("./src/reddit/selectors/experiments/popularGqlMigration.ts");
			const V = {},
				W = "SUBREDDIT__MODEL_SUCCEEDED",
				Y = "SUBREDDIT__MODEL_PENDING",
				X = "SUBREDDIT__MODEL_FAILED",
				Z = "SUBREDDIT__MORE_POSTS_PENDING",
				ee = "SUBREDDIT__MORE_POSTS_LOADED",
				te = "SUBREDDIT__MORE_POSTS_FAILED",
				re = "SUBREDDIT__META_FILTER_TOGGLED",
				se = Object(c.a)(Z),
				ne = Object(c.a)(ee),
				oe = Object(c.a)(te),
				ie = Object(c.a)(re),
				de = Object(c.a)(O.b),
				ce = Object(c.a)(O.c),
				ae = Object(c.a)(O.a),
				ue = (e, t) => async (r, s) => {
					await (t === G.g.User ? r(le(e)) : r(be(e)))
				}, le = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					const o = Object(Q.o)(r(), e),
						i = await Object(A.c)(n(), e);
					if (i.ok) {
						const e = i.body;
						t(de({
							rules: e,
							subredditId: o
						}))
					}
				}, be = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
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
							text: s.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, pe = e => async (t, r, s) => {
					let {
						apiContext: n,
						gqlContext: c
					} = s;
					const {
						subredditName: l
					} = e;
					let p = e.t;
					const m = r(),
						O = Object(R.a)(e, m),
						g = m.platform.currentPage ? m.platform.currentPage.queryParams : {},
						{
							currentPage: _
						} = m.platform,
						{
							countryCode: S,
							languageCode: E
						} = (null == _ ? void 0 : _.urlParams) || {},
						C = Object(a.a)(l, O, {
							t: p,
							...g
						}),
						A = m.listings.postOrder.loadMore[C],
						w = m.listings.postOrder.listingSort[C];
					let k = O;
					if (w && !k) {
						const e = Object(d.d)(w.sort);
						k = e.sort, p = e.timeSort
					}
					const P = m.listings.postOrder.api.pending[C],
						{
							fetchedTokens: G
						} = m.listings.postOrder,
						U = !(!G[C] || !G[C][A.token]);
					if (P || U) return;
					if (k === i.bb.AWARDED && l === I.g) return;
					t(se({
						key: C,
						fetchedToken: A.token
					}));
					const F = {
							after: A.token,
							dist: A.dist,
							forceGeopopular: l === I.d.Popular,
							layout: h.e[Object(y.U)(m, {})],
							sort: k,
							t: p,
							...o()(g, [...v.q, v.l])
						},
						M = !Object(J.a)(l, {
							countryCode: S,
							languageCode: E
						}) && Object(q.a)(m);
					let Q;
					Q = Object(J.c)(l, {
						countryCode: S,
						languageCode: E
					}) && (Object(K.a)(m) || Object(K.b)(m)) ? () => Object($.a)(c(), Object(x.c)(m, l, F, !0)) : M ? () => Object(x.b)(c(), Object(x.c)(m, l, {
						...F,
						limit: h.a
					}), Object(H.bb)(m)) : () => Object(x.a)(n(), l, F);
					const V = await Q(),
						W = {
							...V.body,
							...Object(L.a)(m, C, V.body)
						};
					if (V.ok) {
						if (!M) {
							const e = await Object(N.a)(n(), W.posts, m);
							W.posts = e
						}
						let e;
						const s = W.postIds.filter(e => !!W.posts[e].isMeta),
							o = Object(z.I)(r(), l);
						if (s.length) {
							const t = await Object(T.a)(n(), o, s);
							t.ok && (e = t.body)
						}
						const i = Object(B.h)(m, {
							subredditId: Object(z.I)(m, l)
						});
						if (!M && i && t(Object(b.a)({
								postIds: W.postIds
							})), t(ne({
								fetchedToken: A.token,
								key: C,
								meta: m.meta,
								governance: e,
								...W
							})), Object(B.i)(m, o)) {
							let e;
							M || (e = await Object(x.b)(c(), Object(x.c)(m, l, {
								...F,
								limit: h.a
							}), Object(H.bb)(m)));
							const r = M ? W : e.body;
							if (M ? r : e.ok) {
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
							error: V.error,
							fetchedToken: A.token,
							key: C,
							...W
						}));
						const e = V.error;
						Object(D.a)(e ? `${V.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, me = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", fe = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", Oe = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", ge = Object(c.a)(me), je = Object(c.a)(fe), _e = Object(c.a)(Oe), Ie = () => async (e, t, r) => {
					let {
						apiContext: s
					} = r;
					const n = t();
					if (!n.user.account || n.subreddits.moderated.api.fetched) return;
					e(ge());
					const o = await Object(E.c)(s(), i.wb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					o.ok ? e(je(o.body)) : e(_e({
						error: o.error
					}))
				}, ve = "SUBREDDIT__ABOUT_PENDING", he = "SUBREDDIT__ABOUT_SUCCEEDED", ye = "SUBREDDIT__ABOUT_FAILED", Te = Object(c.a)(ve), Se = Object(c.a)(he), Ee = Object(c.a)(ye), xe = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					const o = r();
					if (Object(z.z)(o, {
							subredditName: e
						}) || o.subreddits.api.about.error[e.toLowerCase()] || o.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(Te({
						subredditName: e
					}));
					const i = !Object(z.I)(o, e),
						d = await Object(C.a)(n(), e, i);
					if (d.ok) {
						const r = d.body.data.subreddit,
							s = Object(k.a)(r),
							n = i ? Object(P.a)(r) : void 0;
						t(Se({
							subredditName: e,
							subreddits: n ? {
								[n.id]: n
							} : void 0,
							data: s
						}))
					} else t(Ee({
						subredditName: e,
						error: d.error
					}))
				}, Ce = (e, t, r) => async (s, n, o) => {
					let {
						apiContext: i
					} = o;
					var d;
					const c = e.substring(2),
						a = r === U.e.View ? null === (d = Object(H.h)(n(), c)) || void 0 === d ? void 0 : d.subredditId : Object(z.I)(n(), c),
						u = Object(H.m)(n());
					if (u && a) {
						const e = ((e, t, r, s) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + s + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(c, Object(M.e)(u), t, r);
						if ((await Object(S.b)(i(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							s(Object(m.G)({
								subredditId: a,
								prefs: t
							})), Object(w.j)(a, t, i()), r !== U.e.View && s(Object(l.i)(_.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Ae = e => async (t, r) => {
					const s = r(),
						{
							subredditName: n
						} = e,
						o = e.t,
						i = Object(R.a)(e, s),
						d = s.platform.currentPage ? s.platform.currentPage.queryParams : V,
						c = Object(a.a)(n, i, {
							t: o,
							...d
						}),
						u = {
							t: o,
							sort: i,
							isRefresh: !0,
							...d
						};
					await t(Object(p.subredditDataRequested)(c, n, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				o = r("./src/reddit/actions/subreddit/constants.ts");
			const i = e => async (t, r, o) => {
				let {
					gqlContext: i
				} = o;
				var c;
				const a = (await ((e, t) => Object(s.a)(e, {
					...n,
					variables: t
				}))(i(), {
					id: e
				})).body;
				d(t, e, null === (c = a.data) || void 0 === c ? void 0 : c.subredditInfoById)
			};

			function d(e, t, r) {
				const s = null == r ? void 0 : r.answerableQuestions,
					n = null == r ? void 0 : r.contentRatingSurvey,
					i = null == r ? void 0 : r.communityProgressModule;
				(s || n || i) && e({
					type: o.D,
					payload: {
						id: t,
						questions: s,
						survey: n,
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
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/config.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/reddit/models/Post/index.ts");
			var c = r("./src/reddit/models/Duplicates/index.ts"),
				a = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(s.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(s.a)(b)),
				m = (e, t) => async (r, s, b) => {
					let {
						apiContext: m
					} = b;
					const f = Object(l.Y)(s(), {
						subredditId: e
					}) || Object(u.r)(s(), {
						profileId: e
					});
					if (!f) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.i)(f) ? n.qc + f.name : f.name
						},
						g = await ((e, t, r) => Object(i.a)(e, {
							data: r,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.D)(t)}`,
							method: n.ob.GET
						}))(m(), t, O);
					if (g.ok) {
						const s = g.body;
						r(p({
							distinguishKey: Object(c.a)(t, O),
							postIds: s.postIds,
							posts: s.posts,
							profiles: s.profiles,
							subreddits: s.subreddits,
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
				return L
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "d", (function() {
				return G
			})), r.d(t, "b", (function() {
				return U
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/subredditModeration/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
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
				v = r("./src/redditGQL/types.ts"),
				h = r("./src/lib/initializeClient/installReducer.ts"),
				y = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			const {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			Object(h.a)({
				features: {
					modUserNotes: y.a
				}
			});
			const S = Object(n.a)(i.U),
				E = Object(n.a)(i.T),
				x = Object(n.a)(i.S),
				C = Object(n.a)(i.R),
				A = e => async (t, r, s) => {
					let {
						gqlContext: n
					} = s;
					var i;
					const a = r(),
						{
							forceLoad: u,
							subredditId: l,
							userId: p,
							before: m,
							filter: g
						} = e,
						j = Object(f.d)(l, p, g, m),
						_ = a.features.modUserNotes.fetchedTokens[j] && !u;
					if (!a.features.modUserNotes.api.pending[j] && !_) {
						t(S({
							subredditId: l,
							userId: p,
							filter: g,
							fetchedToken: m
						}));
						try {
							const e = await ((e, t) => Object(c.a)(e, {
								...b,
								variables: {
									...t,
									last: 25
								}
							}))(n(), {
								subredditId: l,
								userId: p,
								filter: g,
								before: m
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
										pageInfo: s
									} = r.modNotes, n = [];
									e.forEach(e => {
										e && e.node && n.push(e.node)
									}), t(E({
										notes: n,
										subredditId: l,
										userId: p,
										filter: g,
										fetchedToken: m,
										loadMoreToken: s.hasNextPage ? s.endCursor : null
									}))
								}
								const {
									errors: s
								} = e.body;
								s && s.length && o.c.captureException(s)
							} else t(x({
								subredditId: l,
								userId: p,
								filter: g,
								fetchedToken: m
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
				}, w = Object(n.a)(i.H), N = Object(n.a)(i.G), L = e => {
					let {
						subredditId: t,
						nodes: r
					} = e;
					return async (e, s, n) => {
						let {
							gqlContext: o
						} = n;
						const i = [],
							d = [];
						r.map(e => {
							const t = null == e ? void 0 : e.user.id;
							t && !d.includes(t) && e && (i.push(e), d.push(t))
						}), e(N({
							subredditId: t,
							lastAuthorModNotes: i
						}))
					}
				}, R = (e, t, r) => async (n, o, i) => {
					let {
						gqlContext: d
					} = i;
					var u, l, b, p, f, O, g;
					const {
						hasSortParam: j,
						sortToUse: _
					} = Object(m.a)(o(), e), I = s.Ob[_], h = {
						postId: e,
						requestPostModerationInfo: !t,
						...j && I && {
							sortType: v.g[I]
						},
						...r && {
							after: r
						}
					}, y = await ((e, t) => Object(c.a)(e, {
						...a,
						variables: {
							...t
						}
					}))(d(), h);
					if (y.ok) {
						const e = null === (u = y.body) || void 0 === u ? void 0 : u.data,
							t = null === (b = null === (l = null == e ? void 0 : e.postInfoById) || void 0 === l ? void 0 : l.subreddit) || void 0 === b ? void 0 : b.id,
							r = null === (f = null === (p = null == e ? void 0 : e.postInfoById) || void 0 === p ? void 0 : p.moderationInfo) || void 0 === f ? void 0 : f.lastAuthorModNote,
							s = null === (g = null === (O = null == e ? void 0 : e.postInfoById) || void 0 === O ? void 0 : O.commentForest) || void 0 === g ? void 0 : g.trees;
						r && n(w({
							subredditId: t,
							lastAuthorModNote: r
						})), s && n((e => {
							let {
								subredditId: t,
								commentTrees: r
							} = e;
							return async (e, s, n) => {
								let {
									gqlContext: o
								} = n;
								const i = [],
									d = [];
								r.map(e => {
									var t, r;
									if (!(null == e ? void 0 : e.node)) return;
									const s = null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote,
										n = null == s ? void 0 : s.user.id;
									n && !d.includes(n) && s && (i.push(s), d.push(n))
								}), e(N({
									subredditId: t,
									lastAuthorModNotes: i
								}))
							}
						})({
							subredditId: t,
							commentTrees: s
						}))
					}
				}, k = Object(n.a)(i.Q), P = (e, t, r, s, n, o) => async (i, a, l) => {
					let {
						gqlContext: b
					} = l;
					var p, m;
					const f = {
							subredditId: e,
							userId: t,
							label: n,
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
						const r = null === (m = null === (p = g.body) || void 0 === p ? void 0 : p.data) || void 0 === m ? void 0 : m.createModUserNote.createdNote;
						if (!r) return void i(Object(d.f)({
							kind: O.b.Error,
							text: T._("Something went wrong", null, {
								hk: "zYMeg"
							}),
							duration: 3e3
						}));
						i(k({
							subredditId: e,
							newModNote: r,
							filter: s
						})), Object(I.a)(Object(_.v)({
							userId: t,
							subredditId: e,
							filteredType: s,
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
				}, D = Object(n.a)(i.lb), G = (e, t) => async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					var i, d;
					const a = s();
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
					}))(o(), u);
					if (l.ok) {
						const s = null === (i = l.body) || void 0 === i ? void 0 : i.data;
						if ("Subreddit" === (null === (d = null == s ? void 0 : s.subredditInfoById) || void 0 === d ? void 0 : d.__typename)) {
							const n = null == s ? void 0 : s.subredditInfoById;
							n && r(D({
								subredditId: e,
								userId: t,
								totalCounts: n
							}))
						}
					}
				}, U = (e, t, r, s) => async (n, o, i) => {
					let {
						gqlContext: a
					} = i;
					const u = {
						subredditId: e,
						userId: t,
						noteId: r,
						noteType: s
					};
					(await ((e, t) => Object(c.a)(e, {
						...l,
						variables: {
							input: t
						}
					}))(a(), u)).ok ? (n(C({
						subredditId: e,
						userId: t,
						noteId: r
					})), n(Object(d.f)({
						kind: O.b.SuccessMod,
						text: T._("Mod Note sucessfully deleted!", null, {
							hk: "17NyFK"
						})
					}))) : n(Object(d.f)({
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
				return s
			})), r.d(t, "c", (function() {
				return n
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
			const s = "SUBREDDIT__RULES_LOADED",
				n = "SUBREDDIT__RULES_PENDING",
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
				return M
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "h", (function() {
				return z
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "e", (function() {
				return J
			})), r.d(t, "f", (function() {
				return $
			})), r.d(t, "d", (function() {
				return K
			})), r.d(t, "j", (function() {
				return X
			})), r.d(t, "i", (function() {
				return Z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				o = r.n(n),
				i = r("./node_modules/lodash/xor.js"),
				d = r.n(i),
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
						id: s,
						isArchivePostsEnabled: n,
						isDiscoveryAllowed: o,
						isChatPostCreationAllowed: i,
						isCrosspostingAllowed: d,
						isPredictionAllowed: c,
						isPredictionContributorsAllowed: a,
						isPredictionsTournamentAllowed: u,
						banEvasionThreshold: l,
						commentContributionSettings: b,
						discoverySettings: p,
						isNsfw: m,
						language: f,
						publicDescriptionText: g,
						isChatPostFeatureEnabled: j,
						welcomeMessage: _,
						allAllowedPostTypes: v,
						liveStreamingInfo: h,
						isTopListingAllowed: T,
						isCommentingRestricted: S,
						isPostingRestricted: E,
						isSpoilerAvailable: x,
						isContributorRequestsDisabled: A,
						type: w,
						suggestedCommentSort: N,
						title: L,
						toxicityThresholdChatLevel: R,
						crowdControl: k,
						commentDisplaySettings: P,
						allowedPostType: D,
						wikiSettings: G,
						spamFilter: U,
						modQueueSettings: F
					} = e;
					return {
						allowGalleries: v.includes(O.M.Gallery),
						allowImages: v.includes(O.M.Image),
						allowPolls: v.includes(O.M.Poll),
						archivePostsEnabled: n,
						allowDiscovery: o,
						allowChatPostCreation: i,
						allowPostCrossposts: d,
						allowPredictionContributors: a,
						allowPredictions: c,
						allowPredictionsTournament: u,
						banEvasionThreshold: I(l),
						commentContributionSettings: b,
						discoverySettings: p,
						contentVisible: T,
						crowdControlLevel: y(null == k ? void 0 : k.crowdControlLevel),
						crowdControlChatLevel: y(null == k ? void 0 : k.crowdControlChatLevel),
						crowdControlPostLevel: y(null == k ? void 0 : k.crowdControlPostLevel),
						disableContributorRequests: A,
						isChatPostFeatureEnabled: j,
						language: f,
						liveStreamingIsEnabled: (null == h ? void 0 : h.isLiveStreamingEnabled) || void 0,
						over18: m,
						publicDescription: g || void 0,
						restrictCommenting: S,
						restrictPosting: E,
						spoilersEnabled: x,
						subredditId: s,
						subredditType: null == w ? void 0 : w.toLowerCase(),
						suggestedCommentSort: (null == N ? void 0 : N.toLowerCase()) || void 0,
						title: L,
						toxicityThresholdChatLevel: C(R),
						welcomeMessageEnabled: null == _ ? void 0 : _.isEnabled,
						welcomeMessageText: (null == _ ? void 0 : _.body) ? null === (t = _.body) || void 0 === t ? void 0 : t.markdown : void 0,
						wikimode: null === (r = null == G ? void 0 : G.wikiEditMode) || void 0 === r ? void 0 : r.toLowerCase(),
						crowdControlFilter: null == k ? void 0 : k.isCrowdControlFilterEnabled,
						collapseDeletedComments: null == P ? void 0 : P.isCollapseDeletedCommentsEnabled,
						commentScoreHideMins: (null == P ? void 0 : P.commentScoreHideMinutes) || 0,
						contentOptions: D || void 0,
						excludeBannedModqueue: null == F ? void 0 : F.isExcludeBannedModqueueEnabled,
						spamLinks: (null == U ? void 0 : U.spamPosts) || void 0,
						spamSelfposts: (null == U ? void 0 : U.spamSelfposts) || void 0,
						spamComments: (null == U ? void 0 : U.spamComments) || void 0,
						wikiEditAge: "number" == typeof(null == G ? void 0 : G.wikiEditMinimumAge) ? null == G ? void 0 : G.wikiEditMinimumAge : void 0,
						wikiEditKarma: "number" == typeof(null == G ? void 0 : G.wikiEditKarma) ? null == G ? void 0 : G.wikiEditKarma : void 0
					}
				},
				j = [O.c.Unknown, O.c.Off, O.c.Lenient, O.c.Moderate, O.c.Strict],
				_ = e => {
					if (e) return (null == j ? void 0 : j[e]) || O.c.Unknown
				},
				I = e => e ? j.indexOf(e) : 0,
				v = [O.l.Off, O.l.Lenient, O.l.Medium, O.l.Strict],
				h = e => {
					if (e) return null == v ? void 0 : v[e]
				},
				y = e => e ? v.indexOf(e) : 0,
				T = e => {
					if (e) return Object.values(O.T).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				S = e => {
					if (e) return Object.values(O.g).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				E = e => {
					if (e) return Object.values(O.bb).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				x = e => {
					if (e) return e > 0 ? O.W.Enabled : O.W.Disabled
				},
				C = e => {
					if (e) return e === O.W.Enabled ? 1 : 0
				},
				A = e => {
					let {
						over18: t,
						publicDescription: r,
						subredditType: s,
						contentOptions: n,
						archivePostsEnabled: o,
						allowDiscovery: i,
						allowGalleries: d,
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
						crowdControlFilter: v,
						crowdControlPostLevel: y,
						crowdControlChatLevel: C,
						crowdControlLevel: A,
						allowPredictions: w,
						collapseDeletedComments: N,
						commentScoreHideMins: L,
						disableContributorRequests: R,
						discoverySettings: k,
						excludeBannedModqueue: P,
						hideAds: D,
						keyColor: G,
						restrictCommenting: U,
						restrictPosting: F,
						spamLinks: M,
						spamSelfposts: q,
						spamComments: B,
						spoilersEnabled: Q,
						showMedia: z,
						showMediaPreview: H,
						submitLinkLabel: J,
						submitTextLabel: $,
						submitText: K,
						suggestedCommentSort: V,
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
						type: null == s ? void 0 : s.toUpperCase(),
						allowedPostType: null == n ? void 0 : n.toUpperCase(),
						isImagesAllowed: c,
						isCrosspostingAllowed: l,
						isPollsAllowed: u,
						isGalleriesAllowed: d,
						isChatPostAllowed: a,
						isTopListingAllowed: g,
						isDiscoveryAllowed: i,
						isArchivePostsEnabled: o,
						isPredictionContributorsAllowed: b,
						isPredictionsTournamentAllowed: p,
						language: O,
						banEvasionThreshold: _(j),
						crowdControlChatLevel: h(C),
						crowdControlFilter: v,
						crowdControlLevel: h(A),
						crowdControlPostLevel: h(y),
						welcomeMessage: f ? {
							markdown: f
						} : void 0,
						isWelcomeMessageEnabled: m,
						commentContributionSettings: I,
						allowPredictions: w,
						collapseDeletedComments: N,
						commentScoreHideMinutes: L,
						disableContributorRequests: R,
						discoverySettings: k,
						excludeBannedModqueue: P,
						restrictCommenting: U,
						restrictPosting: F,
						spamLinks: T(M),
						spamSelfposts: T(q),
						spamComments: T(B),
						spoilersEnabled: Q,
						suggestedCommentSort: S(V),
						title: W,
						toxicityThresholdChatLevel: x(Y),
						wikiEditKarma: Z,
						wikiEditMinimumAge: X,
						wikiEditMode: E(ee),
						...te
					}
				};
			var w = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				N = r("./src/reddit/models/Toast/index.ts"),
				L = r("./src/reddit/models/User/index.ts"),
				R = r("./src/reddit/selectors/experiments/cnc/index.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/selectors/subredditSettings.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				G = r("./src/reddit/selectors/widgets.ts");
			const U = "SUBREDDIT_SETTINGS_LOADED",
				F = Object(a.a)(U),
				M = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				q = Object(a.a)(M),
				B = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				Q = Object(a.a)(B),
				z = (e, t) => async (r, s, n) => {
					let {
						apiContext: o,
						gqlContext: i
					} = n;
					var d, c;
					const a = s(),
						b = Object(R.c)(a) && !Object(u.b)(e);
					if (!t || !Object(k.ab)(a, t)) {
						const t = await (b ? Object(l.b)(i(), e) : Object(l.c)(o(), e)),
							s = b ? g(null === (c = null === (d = null == t ? void 0 : t.body) || void 0 === d ? void 0 : d.data) || void 0 === c ? void 0 : c.subredditInfoByName) : t.body;
						t && t.ok && r(F(s))
					}
					if (t && !Object(P.b)(a, {
							subredditId: t
						})) {
						const e = await Object(m.a)(i(), t);
						if (e && e.ok) {
							const t = e.body,
								s = Object(f.e)(t.data);
							r(q(s))
						}
					}
				}, H = () => async (e, t, r) => {
					let {
						apiContext: s
					} = r;
					const n = Object(D.m)(t());
					n && await e(z(c.qc + Object(L.e)(n)))
				}, J = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", $ = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", K = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", V = Object(a.a)(J), W = Object(a.a)($), Y = Object(a.a)(K), X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c, a) => {
						let {
							apiContext: u,
							gqlContext: f
						} = a;
						var O, j, _;
						i(V());
						const I = c(),
							v = o()(Object(k.ab)(I, e), ...Object.keys(t)),
							h = o()(Object(P.b)(I, {
								subredditId: e
							}), ...Object.keys(r));
						let y;
						const T = Object(R.c)(I);
						if (T) {
							const r = A(t);
							y = await Object(l.h)(f(), e, r)
						}
						y || (y = await Object(l.g)(u(), e, t));
						const S = Object.keys(r).length > 0;
						let E = !0;
						if (S) {
							E = (await Object(m.b)(f(), e, r)).ok
						}
						if (y.ok && (!S || E)) {
							const o = T ? g(null === (_ = null === (j = null === (O = null == y ? void 0 : y.body) || void 0 === O ? void 0 : O.data) || void 0 === j ? void 0 : j.updateSubredditSettings) || void 0 === _ ? void 0 : _.subreddit) : Object(l.d)(y.body);
							i(W({
								settings: {
									...o,
									subredditId: e
								},
								idCardWidgetId: Object(G.c)(I, {
									subredditId: e
								})
							})), S && i(Q({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							return n && 0 === d()(Object.keys(t), Object.keys(v)).length && (c.buttonText = s.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = X(e, v, h, n)), void i(Object(p.f)({
								kind: N.b.SuccessCommunity,
								text: s.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
						i(Y()), i(Object(p.f)({
							kind: N.b.Error,
							text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: X(e, t, h, void 0)
						})), n && Object(b.a)(Object(w.c)(I, "BE returned an error:"))
					}
				}, Z = (e, t) => async (r, n, o) => {
					let {
						apiContext: i
					} = o;
					(await Object(l.e)(i(), e, t)).ok ? r(Object(p.f)({
						kind: N.b.SuccessCommunity,
						text: s.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(p.f)({
						kind: N.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						})
					}))
				}
		},
		"./src/reddit/actions/tags/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "t", (function() {
				return s
			})), r.d(t, "j", (function() {
				return n
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
				return v
			})), r.d(t, "D", (function() {
				return h
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
				return A
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "i", (function() {
				return L
			}));
			const s = "TAGS__REQUESTED",
				n = "TAGS__AVAILABLE_LOADED",
				o = "TAGS__LOADED",
				i = "TAGS__FAILURE",
				d = "TAGS__RELEVANCE_LOADED",
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
				v = "TAGS__OPTION_SELECTED",
				h = "TAGS__SUGGESTED_OPTION_SELECTED",
				y = "TAGS__OPTION_DESELECTED",
				T = "TAGS__SUGGESTED_OPTION_DESELECTED",
				S = "TAGS__INPUT_CHANGED",
				E = "TAGS__SUGGESTED_INPUT_CHANGED",
				x = "GLOBAL__TAGS__LOADED",
				C = "CREATION__TAGS_INPUT_CHANGED",
				A = "CREATION__TAGS_OPTION_SELECTED",
				w = "CREATION__TAGS_OPTION_DESELECTED",
				N = "CREATION__PRIMARY_TAG_SELECTED",
				L = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
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
				return J
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
				return se
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
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
				const s = {
					[t.id]: {}
				};
				t.secondaryTags && t.secondaryTags.edges.reduce((e, r) => {
					let {
						node: s
					} = r;
					return e[t.id][s.tag.id] = s, e
				}, s);
				const n = {
					[t.id]: {}
				};
				return t.suggestedTags && t.suggestedTags.edges.reduce((e, r) => {
					let {
						node: s
					} = r;
					return e[t.id][s.tag.id] = s, e
				}, n), {
					primaryTag: t.primaryTag,
					globalSubredditTags: r.global,
					subredditScopedTags: {
						[t.id]: r[t.id]
					},
					subredditId: t.id,
					itemTags: s,
					suggestedItemTags: n,
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
					pageSize: s = u,
					after: n,
					includeAvailableTags: o
				} = t;
				return Object(c.a)(e, {
					...l,
					variables: {
						subredditId: r,
						pageSize: s,
						after: n,
						includeAvailableTags: o
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
						primaryTag: s
					} = e.updateSubredditTagStates.subreddit, n = t && t.edges || [];
					return {
						subredditId: r,
						primaryTagId: s && s.tag.id || null,
						secondaryTags: n.reduce((e, t) => {
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
				v = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				h = r("./src/reddit/models/Tags/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/reducers/tags/selected/index.ts"),
				S = r("./src/reddit/selectors/tags.ts");
			Object(n.a)(o.e);
			const E = Object(n.a)(o.t),
				x = Object(n.a)(o.r),
				C = Object(n.a)(o.s),
				A = Object(n.a)(o.q),
				w = Object(n.a)(o.l),
				N = Object(n.a)(o.m),
				L = Object(n.a)(o.k),
				R = Object(n.a)(o.v),
				k = Object(n.a)(o.w),
				P = Object(n.a)(o.u),
				D = Object(n.a)(o.z),
				G = Object(n.a)(o.D),
				U = Object(n.a)(o.y),
				F = Object(n.a)(o.C),
				M = Object(n.a)(o.x),
				q = Object(n.a)(o.B),
				B = (Object(n.a)(o.d), Object(n.a)(o.c), Object(n.a)(o.b), Object(n.a)(o.g)),
				Q = Object(n.a)(o.h),
				z = Object(n.a)(o.f),
				H = Object(n.a)(o.a),
				J = Object(n.a)(o.i),
				$ = Object(n.a)(o.A),
				K = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (n, o, c) => {
						let {
							gqlContext: a
						} = c;
						const u = o();
						n(E());
						const l = await b(a(), {
								subredditId: e
							}),
							p = l.body;
						if (l.ok && p.data.subredditInfoById.secondaryTags && p.data.subredditInfoById.availableTags && p.data.subredditInfoById.suggestedTags) n(x(d(p.data))), r && v.h(o(), e, {
							context: t
						});
						else {
							n(A());
							const o = r ? "topics_save" : "topics_load";
							v.g(u, e, o, {
								context: t
							}), n(Object(i.f)(Object(i.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), y.b.Error, s.fbt._("Retry", null, {
								hk: "1c2xrJ"
							}), K(e, t, r))))
						}
					}
				},
				V = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					t(E());
					const c = await b(o(), {
						subredditId: e
					});
					if (c.ok) {
						const e = c.body;
						t(C(d(e.data)))
					} else t(A()), t(Object(i.f)(Object(i.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), y.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), C(e))))
				}, W = (e, t) => async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					if (!t.length) return null;
					r(w());
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
					return d.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(N()), u.createSubredditTags.createdTags || []) : (r(L()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (s, n, o) => {
						let {
							gqlContext: i
						} = o;
						if (!t.length && !r.length) return;
						s(R());
						const c = n(),
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
						p.ok && f && f.updateSubredditTagStates && f.updateSubredditTagStates.ok && f.updateSubredditTagStates.subreddit ? s(k(d({
							subredditInfoById: f.updateSubredditTagStates.subreddit
						}))) : s(P())
					}
				}, X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (n, o, d) => {
						const c = o(),
							a = Object(S.q)(c, {
								subredditId: e
							}),
							u = Object(S.C)(c, {
								subredditId: e
							});
						let l = a.filter(e => !!e.id && !!e.action).map(e => ({
							tagId: e.id,
							state: e.action === T.a.ADD ? h.d.TAGGED : h.d.NONE
						}));
						if (u.length > 0) {
							const t = await W(e, u)(n, o, d);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: h.d.TAGGED
							})))
						}
						await Y(e, l)(n, o, d), Object(S.A)(o()) ? n(Object(i.f)(Object(i.e)(s.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), y.b.Error, s.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && n(Object(i.f)(Object(i.e)(s.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), y.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, n, o) => {
					const d = {
						state: h.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const s = await W(e, [{
							text: t.displayText,
							type: h.c.CLASSIFICATION
						}])(r, n, o);
						s && 1 === s.length && (d.tagId = s[0].id)
					} else {
						if (!t.id) return void r(Object(i.f)(Object(i.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), y.b.Error)));
						d.tagId = t.id
					}(e => !!e.tagId && !!e.state)(d) ? await Y(e, [], [d])(r, n, o): r(Object(i.f)(Object(i.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), y.b.Error)))
				}, ee = (e, t, r) => async (s, n, o) => {
					t.id ? await Y(e, [], [{
						state: h.d.NONE,
						tagId: t.id
					}])(s, n, o) : s(K(e, r, !1))
				}, te = function(e, t, r, n) {
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
							})).ok) return d(Object(i.f)(Object(i.e)(s.fbt._("Whoops! Unable to update topics relevance status", null, {
							hk: "17akdT"
						}), y.b.Error, s.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, n, o)))), void d(V(e));
						if (o)
							for (const e of r) v.f(c(), e, {
								context: n
							});
						d(Object(i.f)(Object(i.e)(s.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), y.b.SuccessCommunity, s.fbt._("Undo", null, {
							hk: "34apPL"
						}), te(e, t.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), r.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), n, o)))), d(V(e))
					}
				}, re = e => async (t, r) => {
					t($({
						itemTagsState: {
							[e]: Object(S.o)(r(), {
								itemId: e
							})
						}
					}))
				}, se = function(e, t) {
					let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (n, o, d) => {
						let {
							gqlContext: c
						} = d;
						const a = Object(S.x)(o(), {
							subredditId: e
						});
						if ((null == a ? void 0 : a.id) === t.tagId && t.state === h.d.TAGGED) return;
						n(B());
						const u = await _(c(), {
								input: {
									subredditId: e,
									primaryTagState: t
								}
							}),
							l = u.body && u.body.data || null;
						u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (n(Q(j(l))), r && n(Object(i.f)(Object(i.e)(s.fbt._("Successfully updated primary topic!", null, {
							hk: "1NL90v"
						}), y.b.SuccessCommunity)))) : (n(z()), n(Object(i.f)(Object(i.e)(s.fbt._("Whoops! Unable to update primary topic", null, {
							hk: "3ilZqp"
						}), y.b.Error, s.fbt._("Retry", null, {
							hk: "1dRYXW"
						}), se(e, t)))))
					}
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "s", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
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
			})), r.d(t, "r", (function() {
				return v
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				n = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
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
				I = "USERFLAIR_FETCH_SUCCESS",
				v = "USERFLAIR_TEMPLATES_LOADED"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return I
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return v
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return h
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return y
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
				return T
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return S
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return E
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return x
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return C
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return A
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return w
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return N
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return L
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return R
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return k
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return P
			})), r.d(t, "userFlairMutated", (function() {
				return D
			})), r.d(t, "authorFlairMutated", (function() {
				return G
			})), r.d(t, "userFlairChanged", (function() {
				return U
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return F
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return M
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return q
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return B
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return Q
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return z
			})), r.d(t, "userFlairTemplatesLoaded", (function() {
				return H
			})), r.d(t, "fetchUserFlairFromGql", (function() {
				return J
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(o),
				d = r("./src/reddit/actions/authorFlair.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/flair/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				b = r("./src/reddit/models/Flair/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/models/User/index.ts"),
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
			const I = Object(n.a)(_.i),
				v = Object(n.a)(_.j),
				h = Object(n.a)(_.h),
				y = Object(n.a)(_.c),
				T = Object(n.a)(_.d),
				S = Object(n.a)(_.b),
				E = Object(n.a)(_.p),
				x = Object(n.a)(_.q),
				C = Object(n.a)(_.o),
				A = Object(n.a)(_.f),
				w = Object(n.a)(_.g),
				N = Object(n.a)(_.e),
				L = Object(n.a)(_.m),
				R = Object(n.a)(_.n),
				k = Object(n.a)(_.l),
				P = Object(n.a)(_.k),
				D = Object(n.a)(_.s),
				G = Object(n.a)(_.a),
				U = (e, t, r, s, n) => async (o, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						b = l.user.account,
						p = b ? Object(m.e)(b) : void 0,
						g = {
							...Object(O.d)(l, {
								subredditId: n
							}).displaySettings,
							isUserEnabled: r
						},
						j = {
							userName: s,
							subredditId: n,
							applied: e,
							displaySettings: g
						};
					o(s === p ? D(j) : G(j));
					const _ = Object(f.Y)(l, {
							subredditId: n
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					Object(a.h)(c(), s, _.name, t, I), s === p && Object(a.j)(c(), r, _.name)
				}, F = (e, t) => async (r, s, n) => {
					let {
						apiContext: o
					} = n;
					const i = s(),
						d = Object(f.Y)(i, {
							subredditId: e
						}).name;
					r(I());
					const c = await Object(a.m)(o(), d, t);
					if (c.ok) {
						r(v({
							subredditId: e,
							isEnabled: t
						}))
					} else r(h());
					return c.ok
				}, M = (e, t) => async (r, s, n) => {
					let {
						apiContext: o
					} = n;
					const i = s(),
						d = Object(f.Y)(i, {
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
				}, q = (e, t) => async (r, n, o) => {
					let {
						apiContext: i
					} = o;
					const d = n(),
						u = Object(f.Y)(d, {
							subredditId: t
						}).name;
					r(E());
					const l = await Object(a.g)(i(), e, u, b.d.UserFlair),
						m = l.ok && !(l.body && !1 === l.body.success);
					if (m) {
						const e = {
							subredditId: t,
							template: l.body
						};
						r(x(e));
						const n = Object(c.e)(s.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), p.b.SuccessMod);
						r(Object(c.f)(n))
					} else {
						r(C());
						const n = Object(c.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), p.b.Error, s.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), q(e, t));
						r(Object(c.f)(n))
					}
					return m
				}, B = (e, t) => async (r, n, o) => {
					let {
						apiContext: i
					} = o;
					const d = n(),
						u = Object(f.Y)(d, {
							subredditId: t
						}).name;
					if (r(A()), (await Object(a.b)(i(), e, u)).ok) {
						r(w({
							subredditId: t,
							templateId: e
						}));
						const n = Object(c.e)(s.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), p.b.SuccessMod);
						r(Object(c.f)(n))
					} else {
						r(N());
						const n = Object(c.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), p.b.Error, s.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), B(e, t));
						r(Object(c.f)(n))
					}
				}, Q = (e, t) => async (r, n, o) => {
					let {
						apiContext: i
					} = o;
					const d = n(),
						u = Object(f.Y)(d, {
							subredditId: t
						}).name,
						l = Object(O.d)(d, {
							subredditId: t
						}).templateIds;
					if (r(L({
							subredditId: t,
							templateIds: e
						})), (await Object(a.f)(i(), u, b.d.UserFlair, e)).ok) {
						r(R());
						const e = Object(c.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), p.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(k({
							subredditId: t,
							templateIds: l
						}));
						const n = Object(c.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), p.b.Error, s.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), Q(e, t));
						r(Object(c.f)(n))
					}
				}, z = (e, t) => async (r, n, o) => {
					let {
						apiContext: u
					} = o;
					var l;
					const b = n(),
						m = null === (l = b.features) || void 0 === l ? void 0 : l.userFlair;
					if (m && m[e] && m[e].displaySettings.isEnabled && i()(m[e].templateIds)) {
						const n = Object(f.Y)(b, {
								subredditId: e
							}).name,
							o = await Object(a.d)(u(), n);
						if (o.ok) r(P(o.body)), r(Object(d.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(c.e)(s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), p.b.Error);
							r(Object(c.f)(e))
						}
					} else r(Object(d.b)({
						username: t,
						subredditId: e
					}))
				}, H = Object(n.a)(_.r), J = (e, t) => async (r, s, n) => {
					let {
						gqlContext: o
					} = n;
					var d, c, u, b, p, m;
					const f = null === (d = s().features) || void 0 === d ? void 0 : d.userFlair;
					if (f && f[e] && f[e].displaySettings.isEnabled && i()(f[e].templateIds)) {
						const s = await Object(a.e)(o(), {
							name: t
						});
						if (s.ok) {
							const t = [],
								n = {};
							null === (m = null === (p = null === (b = null === (u = null === (c = null == s ? void 0 : s.body) || void 0 === c ? void 0 : c.data) || void 0 === u ? void 0 : u.subredditInfoByName) || void 0 === b ? void 0 : b.userFlairTemplates) || void 0 === p ? void 0 : p.edges) || void 0 === m || m.map(e => {
								const r = null == e ? void 0 : e.node;
								r && r.id && (t.push(r.id), n[r.id] = Object(l.b)(r))
							}), r(H({
								subredditId: e,
								templateIds: t,
								templates: n
							}))
						}
					}
				}
		},
		"./src/reddit/components/CrosspostRecommendationsModal/constants.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = "crosspost_recommendations_modal_id",
				n = 3e3
		},
		"./src/reddit/constants/graphql.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Card = "CARD", e.Classic = "CLASSIC", e.Compact = "COMPACT"
				}(s || (s = {}))
		},
		"./src/reddit/customMiddleware/recentSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/chat/customMiddleware/noop.ts"),
				n = r("./src/lib/cache/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/localStorageAvailable/index.ts"),
				d = r("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(n.c)(o.t.RECENT_SUBREDDITS, "recent_subreddits"),
				a = () => Object(i.a)() && Object(n.b)(c) || [];
			t.a = e => "undefined" == typeof window ? s.a : e => t => {
				const r = e(t);
				switch (t.type) {
					case d.e: {
						const e = a() || [],
							r = {
								...t.payload,
								lastVisited: Date.now()
							},
							{
								id: s
							} = r;
						if (s) {
							const t = e.findIndex(e => e.id === s); - 1 !== t && e.splice(t, 1), e.unshift(r), e.splice(d.c), Object(n.d)(c, e, o.ub)
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
				return v
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "b", (function() {
				return R
			}));
			var s = r("./src/config.ts"),
				n = r("./src/redditGQL/operations/ModApprove.json"),
				o = r("./src/redditGQL/operations/ModRemove.json"),
				i = r("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				d = r("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = r("./src/redditGQL/types.ts"),
				a = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts"),
				m = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				f = r("./src/reddit/helpers/comment/index.ts"),
				O = r("./src/reddit/models/Comment/addProfileImgParam.ts"),
				g = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				j = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				_ = r("./src/redditGQL/operations/GetCommentById.json");
			const I = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/save`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unsave`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/lock`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unlock`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				T = (e, t) => Object(l.a)(e, {
					...n,
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
				E = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/ignore_reports`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unignore_reports`),
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: a.ob.POST,
					data: {
						id: t
					}
				}),
				A = (e, t, r, n, o) => {
					let i = Object(m.a)(Object(j.a)(Object(f.a)(Object(g.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`), o ? 1 : void 0)));
					return n && (i = Object(O.a)(i)), Object(u.a)(e, {
						data: r,
						endpoint: i,
						method: a.ob.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				w = {
					[a.J.NONE]: c.o.None,
					[a.J.MODERATOR]: c.o.ModDistinguished,
					[a.J.ADMIN]: c.o.AdminDistinguished,
					[a.J.ALUMNI_ADMIN]: c.o.AlumniDistinguished
				};

			function N(e, t, r) {
				const s = function(e, t) {
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
					variables: s
				})
			}

			function L(e, t, r) {
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
			const R = async (e, t) => {
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
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/GetDevPlatformMetadata.json");
			const o = async (e, t) => {
				var r;
				const o = await Object(s.a)(e, {
					...n,
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
				return v
			})), r.d(t, "n", (function() {
				return h
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
				return A
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "m", (function() {
				return G
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/lib/makeRequest/index.ts"),
				o = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = r("./src/redditGQL/operations/CancelPrediction.json"),
				d = r("./src/redditGQL/operations/ChangePrediction.json"),
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
			const v = async (e, t) => {
				let {
					postId: r,
					optionId: o,
					coinPackageId: i,
					price: d
				} = t;
				var c;
				const a = await Object(s.a)(e, {
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
				if (!Object(n.c)(a) || a.error || !(null === (c = a.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, h = (e, t) => {
				let {
					postId: r,
					optionId: n
				} = t;
				return Object(s.a)(e, {
					...O,
					variables: {
						input: {
							postId: r,
							optionId: n
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
				const c = await Object(s.a)(e, {
					...g,
					variables: {
						subredditId: r,
						period: o,
						top: i,
						includeCurrentRank: d
					}
				});
				if (!Object(n.c)(c) || c.error) throw new Error("Failed to fetch subreddit top predictors");
				if (!c.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return c.body.data.subredditInfoById
			}, S = async (e, t) => {
				let {
					subredditId: r,
					tournamentId: o,
					includeCurrentRank: i
				} = t;
				const d = await Object(s.a)(e, {
					...j,
					variables: {
						subredditId: r,
						tournamentId: o,
						includeCurrentRank: i
					}
				});
				if (!Object(n.c)(d) || d.error) throw new Error("Failed to fetch subreddit tournament");
				if (!d.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return d.body.data.subredditInfoById
			}, E = async (e, t) => {
				const r = await Object(s.a)(e, {
					...a,
					variables: {
						input: t
					}
				});
				if (!Object(n.c)(r) || r.error || !r.body.data.createPredictionTournament.tournament) throw new Error("Failed to create tournament");
				return r.body.data.createPredictionTournament.tournament
			}, x = async (e, t) => {
				const r = await Object(s.a)(e, {
					...m,
					variables: t
				});
				if (!Object(n.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, C = async (e, t) => {
				const r = await Object(s.a)(e, {
					...f,
					variables: t
				});
				if (!Object(n.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, A = async (e, t) => {
				const r = await Object(s.a)(e, {
					...o,
					variables: {
						input: t
					}
				});
				if (!Object(n.c)(r) || r.error) throw new Error("Failed to create prediction");
				const {
					errors: i,
					tournament: d
				} = r.body.data.addPredictionDrafts;
				if (null == i ? void 0 : i.length) throw new Error(i[0].message);
				if (!d) throw new Error("Failed to create prediction");
				return d
			}, w = async (e, t) => {
				const r = await Object(s.a)(e, {
					..._,
					variables: {
						input: t
					}
				});
				if (!Object(n.c)(r) || r.error) throw new Error("Failed to update prediction tournament");
				const {
					tournament: o
				} = r.body.data.updatePredictionTournament;
				if (!o) throw new Error("Failed to update prediction tournament");
				return o
			}, N = (e, t) => Object(s.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), L = (e, t) => Object(s.a)(e, {
				...l,
				variables: t
			}), R = (e, t) => Object(s.a)(e, {
				...p,
				variables: t
			}), k = async (e, t) => {
				const r = await Object(s.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(n.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
				return r.body.data.changePrediction.poll
			}, P = async (e, t) => {
				let {
					postId: r
				} = t;
				var o, d;
				const c = await Object(s.a)(e, {
					...i,
					variables: {
						input: {
							postId: r
						}
					}
				});
				if (!Object(n.c)(c) || !(null === (o = c.body.data.cancelPrediction) || void 0 === o ? void 0 : o.ok) || !(null === (d = c.body.data.cancelPrediction) || void 0 === d ? void 0 : d.poll)) throw new Error("Unable to cancel prediction");
				return c.body.data.cancelPrediction.poll
			}, D = async (e, t) => {
				var r, o;
				const i = await Object(s.a)(e, {
					...c,
					variables: {
						input: t
					}
				});
				if (!Object(n.c)(i) || !(null === (r = i.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (o = i.body.data.changePredictionVote) || void 0 === o ? void 0 : o.poll)) throw new Error("Unable to change prediction.");
				return i.body.data.changePredictionVote.poll
			}, G = async (e, t) => {
				const r = await Object(s.a)(e, {
					...b,
					variables: t
				});
				return !!Object(n.c)(r) && r.body.data.identity.isPredictionCreationAllowed
			}
		},
		"./src/reddit/endpoints/gold/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
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
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				o = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				i = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
				d = r("./src/redditGQL/operations/RedditorPowerups.json"),
				c = r("./src/redditGQL/operations/SubredditPowerups.json"),
				a = r("./src/redditGQL/operations/SubredditPowerupsFull.json"),
				u = r("./src/redditGQL/operations/UpdatePowerupsSettings.json"),
				l = r("./src/redditGQL/operations/UserPowerups.json");
			const b = e => Object(s.a)(e, l, {
					traceRequestName: "user_powerups"
				}),
				p = (e, t) => Object(s.a)(e, {
					variables: {
						id: t
					},
					...d
				}, {
					traceRequestName: "redditor_powerups"
				}),
				m = (e, t, r) => Object(s.a)(e, {
					...c,
					variables: {
						subredditId: t,
						includeIdentity: r
					}
				}, {
					traceRequestName: "subreddit_powerups"
				}),
				f = (e, t, r, n) => Object(s.a)(e, {
					...a,
					variables: {
						subredditId: t,
						includeIdentity: r,
						skipMediaPacks: n
					}
				}, {
					traceRequestName: "subreddit_powerups_full"
				}),
				O = (e, t) => Object(s.a)(e, {
					...i,
					variables: t
				}),
				g = (e, t) => Object(s.a)(e, {
					...n,
					variables: t
				}),
				j = (e, t) => Object(s.a)(e, {
					...o,
					variables: t
				}),
				_ = async (e, t, r) => {
					const n = {
						input: {
							subredditId: t,
							powerupsSettings: {
								benefitSettings: r
							}
						}
					};
					return Object(s.a)(e, {
						...u,
						variables: n
					})
				}
		},
		"./src/reddit/endpoints/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				o = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const i = (e, t) => Object(s.a)(e, {
					...n,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				d = (e, t) => Object(s.a)(e, {
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
			var s, n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/loadWithRetries/index.ts");
			! function(e) {
				e.PopularCommunities = "Popular Communities", e.Gaming = "Gaming", e.Sports = "Sports", e.TV = "TV", e.Travel = "Travel", e.HealthAndFitness = "Health & Fitness", e.Fashion = "Fashion"
			}(s || (s = {}));
			const i = {
					[s.PopularCommunities]: () => n.fbt._("Popular Communities", null, {
						hk: "2K4vGY"
					}),
					[s.Gaming]: () => n.fbt._("Gaming", null, {
						hk: "16rFc7"
					}),
					[s.Sports]: () => n.fbt._("Sports", null, {
						hk: "1cmqIR"
					}),
					[s.TV]: () => n.fbt._("TV", null, {
						hk: "2rVWoK"
					}),
					[s.Travel]: () => n.fbt._("Travel", null, {
						hk: "35HRB5"
					}),
					[s.HealthAndFitness]: () => n.fbt._("Health & Fitness", null, {
						hk: "2vstHj"
					}),
					[s.Fashion]: () => n.fbt._("Fashion", null, {
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
			var s = r("./src/config.ts"),
				n = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function o(e, t, r) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/polls/${t}?postIds=${r.join(",")}`
				})
			}
		},
		"./src/reddit/endpoints/governance/requester.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/makeApiRequest/index.ts");

			function n(e, t) {
				return Object(s.a)(e, {
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
			var s = r("./src/redditGQL/operations/ReportMessage.json"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/compose`),
					method: n.ob.POST,
					data: t
				}),
				l = (e, t) => Object(i.a)(e, {
					...s,
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
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/redditGQL/operations/ModQueueItems.json");
			const b = (e, t, r) => Object(o.a)(e, {
					endpoint: Object(u.a)(Object(a.a)(`${s.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: n.ob.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				p = (e, t, r) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: n.ob.POST,
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
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(o.a)(e, [i.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: s.ob.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/page/popularFeed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/lib/env/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/models/Post/index.ts"),
				d = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				a = r("./src/reddit/models/Onboarding/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				l = r("./src/redditGQL/operations/PopularFeedElements.json");
			const b = async (e, t) => {
				var r, b, p, m;
				const f = await ((e, t) => Object(s.a)(e, {
					...l,
					variables: t
				}))(e, t);
				if (!f.ok && !(null === (p = null === (b = null === (r = f.body) || void 0 === r ? void 0 : r.data) || void 0 === b ? void 0 : b.popular) || void 0 === p ? void 0 : p.elements)) return f;
				const O = f.body,
					g = ((e, t) => {
						let {
							identity: r,
							popular: s,
							recentPosts: l,
							trendingSubreddits: b
						} = e;
						const p = {};
						let m;
						const [f, O] = s.elements.edges.reduce((e, t, r) => {
							var s, n, o, u;
							const [l, b] = e, f = t.node;
							if (Object(i.k)(f)) {
								const e = f;
								e.subreddit = {
									...e.subreddit
								}, l.push(f), (null === (n = null === (s = f.flair) || void 0 === s ? void 0 : s.template) || void 0 === n ? void 0 : n.id) && (null === (u = null === (o = f.flair) || void 0 === o ? void 0 : o.template) || void 0 === u ? void 0 : u.postStyle) && (p[f.flair.template.id] = Object(c.a)(f.flair.template.postStyle))
							} else if (Object(a.g)(f)) {
								const e = Object(d.a)(f.interestTopicRecommendations.recommendationTopics);
								e.topics.length && (m = {
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
							Object(n.b)() || console.warn(e), o.c.captureMessage(e)
						}
						l && f.push(...l);
						const g = s.elements.dist,
							j = s.elements.geoFilter,
							_ = null == l ? void 0 : l.map(e => e.id),
							I = Object(u.b)(f, b, r, _);
						return I.subredditAboutInfo = {}, m && (I.interestTopicRecommendations = m), {
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
					ok: !!(null === (m = O.data.popular) || void 0 === m ? void 0 : m.elements.edges.length),
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
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/isAdHocMultireddit/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
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
				j = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				_ = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				I = r("./src/reddit/selectors/experiments/econ/index.ts"),
				v = r("./src/reddit/selectors/platform.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				T = r("./src/redditGQL/operations/SubredditPage.json");
			const S = (e, t, r, s) => {
					var n, d;
					const {
						after: c,
						geo_filter: a,
						isMobile: b,
						layout: m,
						limit: f,
						recentPostIds: O,
						sort: T,
						t: S
					} = r, E = Object(y.bb)(e), x = Object(v.r)(e), C = Object(o.a)(t), A = Object(i.a)(t), w = Object(h.X)(e, {
						subredditId: Object(h.I)(e, t)
					}).length > 0, N = Object(y.q)(e), L = Object(y.pb)(e), {
						adsSeenCount: R,
						totalPostsSeenCount: k,
						sessionStartTime: P
					} = Object(g.a)(e), D = Object(I.e)(e), G = Object(_.a)(e), U = Object(j.c)(e), F = {
						name: t,
						includeIdentity: E && !e.user.account,
						adContext: {
							layout: m ? m.toUpperCase() : u.a.Card,
							clientSignalSessionData: {
								adsSeenCount: R,
								totalPostsSeenCount: k,
								sessionStartTime: P
							}
						},
						isFake: A,
						includeAchievementFlairs: s && !A,
						includeAppliedFlair: !A && E && s,
						includeCustomEmojis: s && !A && D,
						includeDevPlatformMetadata: G,
						includePowerups: s && !A,
						includeQuestions: s && E && !A,
						includeRecents: A && O && O.length > 0 || !1,
						includeRedditorKarma: s && E && !(null === (d = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === d ? void 0 : d.total),
						includeRules: s && !A && !w,
						includeSubredditLinks: s && !A && !E,
						includeTopicLinks: s && !A && !E,
						includeTrending: A,
						includeSubredditRankings: U,
						isAdHocMulti: C,
						isAll: t === l.d.All,
						isLoggedOutGatedOptedin: N,
						isLoggedOutQuarantineOptedin: L,
						isPopular: t === l.d.Popular,
						recentPostIds: O || [],
						subredditNames: C ? t.split("+") : []
					};
					return T && (F.sort = T.toUpperCase()), S && (F.range = S.toUpperCase()), b ? F.pageSize = Object(p.a)(m) : f && (F.pageSize = f), x && x.ad && (F.forceAds = {
						ad: x.ad
					}), (x && x.geo_filter || a) && (F.region = x && x.geo_filter || a), c && (F.after = btoa(c)), F
				},
				E = async (e, t, r) => {
					const s = Date.now(),
						o = await ((e, t) => Object(c.a)(e, {
							...T,
							variables: t
						}))(e, t),
						i = Date.now();
					if (!o.ok || !o.body) return o;
					const d = o.body,
						u = Date.now(),
						l = Object(m.a)(d.data),
						b = Date.now(),
						p = [{
							duration: i - s,
							logKeyType: a.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: a.a.gqlNormalizationTiming
						}];
					return Object(a.h)({
						name: n.u.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...o,
						ok: !!d.data.subredditInfoByName && !Object(O.k)(d.data.subredditInfoByName),
						status: x(d.data),
						body: l
					}
				}, x = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(O.k)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === O.d.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === O.d.GoldOnly || e.subredditInfoByName.forbiddenReason === O.d.Private || e.subredditInfoByName.forbiddenReason === O.d.Quarantined || e.subredditInfoByName.forbiddenReason === O.d.Gated) return 403
					}
					return 200
				}, C = e => {
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
				endpoint: Object(b.a)(Object(f.a)(`${s.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: n.ob.GET,
				data: r && C(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, r) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? a.richtext_json = r : a.markdown_text = r, Object(n.a)(Object(o.a)(e, [i.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.ob.POST,
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
			var s = r("./src/reddit/helpers/flair.ts"),
				n = r("./src/reddit/models/PostDraft/index.ts");
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
						case n.b.Link:
							return "link";
						case n.b.Markdown:
							return "markdown";
						case n.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				c = e => {
					switch (e) {
						case "link":
							return n.b.Link;
						case "markdown":
							return n.b.Markdown;
						case "richtext":
							return n.b.RichText;
						default:
							return "self"
					}
				},
				a = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case n.b.Link:
						case n.b.Markdown:
							return e.body;
						case n.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(s.g)(e) || null,
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
		"./src/reddit/endpoints/publicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
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
				return A
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "a", (function() {
				return D
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/omit.js"),
				o = r.n(n),
				i = r("./src/config.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
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

			function v() {
				return Object(m.b)() ? "https://strapi.reddit.com" : i.a.streamingApiUrl
			}
			const h = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${v()}${r}`,
					method: c.ob.GET,
					headers: o()(e.headers(), [a.d, a.c, a.a]),
					timeoutMs: void 0
				}).then(R)
			}, y = (e, t) => {
				let {
					subredditId: r,
					options: s
				} = t;
				return Object(u.a)(e, {
					...I,
					variables: {
						feedContext: {
							subredditId: r
						},
						first: null == s ? void 0 : s.pageSize,
						after: null == s ? void 0 : s.cursor
					}
				})
			}, T = async (e, t) => Object(l.b)({
				endpoint: `${v()}/videos/${t}`,
				method: c.ob.GET,
				headers: o()(e.headers(), [a.d, a.c, a.a])
			}).then(R), S = async (e, t, r) => {
				let s;
				s = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const n = Object(d.a)(s, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${v()}${n}`,
					method: c.ob.GET,
					headers: o()(e.headers(), [a.d, a.c, a.a])
				}).then(R)
			}, E = async e => Object(l.b)({
				endpoint: `${v()}/recommended_viewer_subreddits`,
				method: c.ob.GET,
				headers: o()(e.headers(), [a.d, a.c, a.a])
			}).then(R), x = async (e, t, r) => Object(l.b)({
				endpoint: `${v()}/videos/${t}/vote/${k(r)}`,
				method: c.ob.POST,
				headers: o()(e.headers, [a.d, a.c, a.a])
			}).then(R), C = async (e, t) => Object(l.b)({
				endpoint: `${v()}/videos/${t}/heartbeat`,
				method: c.ob.POST,
				headers: o()(e.headers(), [a.d, a.c, a.a])
			}).then(R), A = async (e, t, r, s) => {
				const n = L(r);
				return n ? w(e, t, n).then(e => Object(l.c)(e) && e.body && e.body.data ? {
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
			}, w = async (e, t, r) => Object(l.b)({
				endpoint: `${v()}/broadcasts/${t}/comment_v2`,
				method: c.ob.POST,
				headers: o()(e.headers, [a.d, a.c, a.a]),
				data: {
					text: r
				},
				type: "json"
			}).then(R), N = e => ({
				type: "rtjson",
				richtextContent: Object(f.e)(e),
				rteMode: j.i.RICH_TEXT
			}), L = e => e.rteState ? p.a.getRawText(e.rteState) : e.rtJson ? Object(O.c)(e.rtJson) : void 0, R = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? c.L.NOT_FOUND_ERROR : c.L.SERVER_ERROR
					};
					return 429 === e.status && (t.fields = [{
						field: "",
						msg: s.fbt._("Try again later", null, {
							hk: "3BBLIU"
						})
					}]), {
						...e,
						error: t
					}
				}
			}, k = e => e === _.a.upvoted ? "up" : e === _.a.downvoted ? "down" : "unset", P = async (e, t, r) => Object(l.b)({
				endpoint: `${v()}/broadcasts/${t}`,
				method: c.ob.PUT,
				headers: o()(e.headers, [a.d, a.c, a.a]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(R), D = async (e, t) => Object(l.b)({
				endpoint: `${v()}/broadcasts/${t}/auto_mute_status`,
				method: c.ob.GET,
				headers: o()(e.headers, [a.d, a.c, a.a])
			}).then(R)
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
				return v
			})), r.d(t, "e", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/camelCase.js"),
				n = r.n(s),
				o = r("./node_modules/lodash/mapKeys.js"),
				i = r.n(o),
				d = r("./src/lib/constants/index.ts"),
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
							...i()(e, (e, t) => n()(t)),
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
					var t, r, s;
					return e.ok && e.body && (e => Object.keys(e).length > 0)(e.body) && (null === (s = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit) || void 0 === s ? void 0 : s.rules) ? e.body = Object(p.a)(e.body.data.subreddit.rules) : e.body = {
						rules: []
					}, e
				}),
				g = (e, t) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: d.ob.GET
				}).then(e => (e.ok && e.body.rules && (e.body = f(e.body)), e)),
				j = e => e.ok ? (e.body = Object(m.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: d.ob.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === m.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), I = async (e, t, r, s) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: d.ob.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === m.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						old_short_name: s,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), v = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: d.ob.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), h = e => e.map(e => encodeURIComponent(e)).join(), y = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: d.ob.POST,
					data: {
						r: t,
						new_rule_order: h(r),
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
			var s = r("./src/reddit/endpoints/post/convert.ts"),
				n = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/selectors/experiments/supportingLinkAds.ts");
			const i = e => !(!Object(n.C)(e) || !e.adSupplementaryText || "string" != typeof e.adSupplementaryText),
				d = async (e, t) => {
					try {
						const r = await Object(s.a)(e, "rtjson", t.adSupplementaryText);
						return {
							...t,
							adSupplementaryText: r.body.output
						}
					} catch (r) {
						return t
					}
				}, c = async (e, t, r) => {
					if (!Object(o.a)(r) || !t) return t;
					const s = {};
					for (const [n, o] of Object.entries(t)) s[n] = i(o) ? await d(e, o) : o;
					return s
				}
		},
		"./src/reddit/helpers/comment/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				n = r("./src/lib/addQueryParams/index.ts"),
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
				return `${i.a}_${Object(s.a)()}`
			}

			function p(e) {
				let {
					temporalId: t,
					draft: r,
					post: s,
					author: n,
					subredditId: o,
					parentId: i
				} = e;
				return {
					id: t,
					postId: s.postId,
					subredditId: o,
					author: n.displayText || "",
					authorId: n.id,
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
					postAuthor: s.author,
					postTitle: null,
					score: 1,
					sendReplies: !1,
					modReports: [],
					numReports: 0,
					voteState: c.a.notVoted,
					userReports: []
				}
			}

			function m(e, t) {
				for (const r of Object.keys(t)) {
					const s = t[r],
						n = s.url ? Object(d.b)(s.url) : null;
					if (n && e.includes(n)) return s
				}
				return null
			}
			const f = (e, t) => t ? Object(n.a)(e, {
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
			var s = r("./src/reddit/constants/comments.ts"),
				n = r("./src/reddit/selectors/comments.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case s.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case s.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case s.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === s.a.MoreComments ? t[e.id].numComments : 1,
				u = (e, t, r, s) => {
					let o = Object(n.n)(s, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > r && o.prev && (i = o.prev, (o = Object(n.n)(s, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= r)););
					return i.id
				},
				l = (e, t, r) => {
					const {
						commentLists: s,
						comments: n
					} = e, {
						head: d
					} = s[t];
					if (d) return Object.keys(n).filter(e => {
						const t = n[e];
						return !(!t.isStickied || !((e, t) => {
							const r = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.A,
								expEventOverride: t
							});
							return !!(Object(o.zg)(r) ? void 0 : r)
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
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/sample/index.ts"),
				o = r("./src/telemetry/helpers/sendCounter.ts");
			const i = (e, t) => {
					Object(o.b)(s.o.Redesign, {
						type: o.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				d = (e, t) => {
					Object(n.b)(10) && Object(o.b)(s.o.Redesign, {
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
			var s = r("./node_modules/lodash/findLastIndex.js"),
				n = r.n(s),
				o = r("./src/reddit/models/WhitelistStatus/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/index.ts");
			const c = (e, t) => {
				let {
					subreddits: r,
					profiles: s
				} = t;
				const n = r[e.belongsTo.id] || s[e.belongsTo.id];
				return !e.isNSFW && n && o.a.has(n.wls || o.b.NO_ADS)
			};
			t.a = (e, t, r) => {
				let {
					postIds: s,
					posts: o,
					subreddits: a,
					profiles: u,
					...l
				} = r;
				const b = e.listings.postOrder.ids[t],
					p = (s || []).filter(e => !b || !b.includes(e)),
					m = b.map(t => e.posts.models[t]),
					f = m.length - (n()(m, e => e.isSponsored) + 1),
					O = p.map(e => o[e]);
				let g;
				const j = [],
					_ = {
						subreddits: a,
						profiles: u
					};
				for (let n = 0; n < O.length; n++) {
					const r = O[n];
					let s = !1;
					if (r.isSponsored) {
						const e = n > 0 && O[n - 1],
							t = n < O.length - 1 && O[n + 1];
						e && c(e, _) && t && c(t, _) && (s = !0)
					}
					r.isSponsored && s && (null == g && f + n >= 3 || n - g >= 3) ? (g = n, j.push(r.id)) : r.isSponsored ? r.isSponsored && Object(d.a)({
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
				return n
			}));
			var s = r("./src/reddit/constants/postLayout.ts");

			function n(e) {
				return e ? s.c[e] : s.f
			}
		},
		"./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts": function(e, t, r) {
			"use strict";
			const s = e => ({
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
						const n = r.topic.parents.map(e => e.nodeId),
							o = n.length <= 0,
							i = r.id,
							d = {
								id: i,
								isRoot: o,
								parents: n,
								title: r.topic.title,
								name: r.topic.name
							};
						return o ? (e.topics.push(s(d)), e.dict[i] = e.topics.length - 1) : n.forEach(t => {
							var r;
							const n = e.dict[t];
							if ("number" == typeof n) {
								null === (r = e.topics[n].children) || void 0 === r || r.push(s(d))
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
			const s = e => ({
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
					subreddits: (null === (t = e.data.subredditInfoById) || void 0 === t ? void 0 : t.linkedSubreddits) ? e.data.subredditInfoById.linkedSubreddits.map(s) : []
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/env/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				d = r("./src/reddit/actions/gold/customEmojis.ts"),
				c = r("./src/reddit/actions/gold/powerups.ts"),
				a = r("./src/reddit/models/Post/index.ts"),
				u = r("./src/reddit/models/RichTextJson/index.ts"),
				l = r("./src/reddit/models/Subreddit/index.ts");
			var b = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeSubredditWidgetsFromGql/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				C = r("./src/reddit/models/Onboarding/index.ts"),
				A = r("./src/reddit/helpers/graphql/helpers.ts");
			const w = (e, t, r, i) => {
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
					c = function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (Object(a.j)(e) || Object(a.i)(e)) return null;
						if (d.posts[e.id]) return e.id;
						const r = Object(O.f)(e, !0);
						d.posts[r.id] = r;
						const {
							crosspostRoot: u
						} = e;
						u && u.type === a.a.Post && u.postInfo && c(u.postInfo, !0), Object(a.o)(e).forEach(e => c(e, !0));
						let l = r.id;
						if (e.authorFlair && (d.authorFlair[r.belongsTo.id] || (d.authorFlair[r.belongsTo.id] = {}), d.authorFlair[r.belongsTo.id][r.author] = Object(b.a)(e.authorFlair)[0]), Object(a.l)(e)) d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(j.a)(e.profile));
						else if (Object(a.n)(e)) d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(m.a)(e.subreddit));
						else if (Object(a.h)(e)) {
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
							Object(s.a)(e)
						} catch (f) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(n.b)() || console.warn(t), o.c.captureMessage(t)
						}
						const p = i && i.includes(l);
						return t || !l || p || d.postIds.push(l), l
					};
				if (e.forEach(e => c(e)), t) {
					d.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) d.subreddits[e.id] = Object(I.a)(e)
				}
				const u = d.postIds.length - 1;
				return d.token = u >= 0 ? d.postIds[u] : "", r && (d.account = Object(x.a)(r), d.preferences = r.preferences && Object(g.a)(r.preferences, r.interactions) || null), d
			};
			t.a = e => {
				let {
					adhocMultiredditByNames: t,
					all: r,
					identity: s,
					popular: m,
					recentPosts: O,
					subredditInfoByName: g,
					trendingSubreddits: j
				} = e;
				var I, L, R, k, P, D, G, U, F, M;
				if (!g) return {
					reason: l.f.NotFoundSubreddit,
					data: {
						account: s && Object(x.a)(s) || null
					}
				};
				if (Object(l.k)(g)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: r,
						isEmailRequiredForQuarantineOptin: n,
						interstitialWarningMessage: o
					} = g;
					return {
						reason: N(g.forbiddenReason),
						data: {
							account: s && Object(x.a)(s) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: n,
							...r ? {
								quarantineMessage: r.markdown,
								quarantineMessageRTJson: Object(A.h)(r.richtext, u.i)
							} : {},
							interstitialWarningMessage: null == o ? void 0 : o.markdown,
							interstitialWarningMessageRTJson: Object(A.h)(null == o ? void 0 : o.richtext, u.i)
						}
					}
				}
				const q = {},
					B = g.devPlatformMetadata;
				let Q;
				const z = g || m || r || t,
					[H, J] = z.elements.edges.reduce((e, t, r) => {
						var s, n, o, i;
						const [d, c] = e, u = t.node;
						if (Object(a.k)(u)) {
							const e = u;
							e.subreddit = {
								...e.subreddit,
								devPlatformMetadata: B
							}, d.push(u), (null === (n = null === (s = u.flair) || void 0 === s ? void 0 : s.template) || void 0 === n ? void 0 : n.id) && (null === (i = null === (o = u.flair) || void 0 === o ? void 0 : o.template) || void 0 === i ? void 0 : i.postStyle) && (q[u.flair.template.id] = Object(f.a)(u.flair.template.postStyle))
						} else if (Object(C.g)(u)) {
							const e = Object(p.a)(u.interestTopicRecommendations.recommendationTopics);
							e.topics.length && (Q = {
								interests: e,
								index: r
							})
						} else c.push(u);
						return [d, c]
					}, [
						[],
						[]
					]);
				if (J.length) {
					const e = `Received unhandled ${J.length} elements when processing subreddit data: "${J[0].__typename}"`;
					Object(n.b)() || console.warn(e), o.c.captureMessage(e)
				}
				O && H.push(...O);
				const $ = z.elements.dist,
					K = w(H, j, s);
				if (g.styles && (K.structuredStyles = {
						data: {
							style: Object(T.a)(g.styles)
						}
					}), K.structuredStyles = {
						data: {
							...g.styles ? {
								style: Object(T.a)(g.styles)
							} : {},
							content: {
								widgets: Object(E.a)(g)
							},
							flairTemplate: q
						}
					}, K.subredditAboutInfo = Object(_.a)(g), g.modPermissions && (K.subredditPermissions = Object.keys(g.modPermissions).length > 0 ? Object(h.a)(g.modPermissions) : void 0), g.rules && (K.subredditRules = Object(y.a)(g.rules).rules), ((null == g ? void 0 : g.answerableQuestions) || g.contentRatingSurvey || g.communityProgressModule) && (K.questions = {
						answerableQuestions: null == g ? void 0 : g.answerableQuestions,
						contentRatingSurvey: null == g ? void 0 : g.contentRatingSurvey,
						communityProgressModule: null == g ? void 0 : g.communityProgressModule
					}), Object(l.k)(g) || Object.assign(K, Object(i.b)(g), Object(d.b)(g), {
						powerups: Object(c.b)(g, s)
					}), K.subredditLinks = Object(v.a)({
						data: {
							subredditInfoById: g
						}
					}), K.subredditTopicLinks = Object(S.a)({
						data: {
							subredditInfoById: g
						}
					}), K.userFlair = {
						[g.id]: {
							displaySettings: {
								isEnabled: !!(null === (I = g.authorFlairSettings) || void 0 === I ? void 0 : I.isEnabled),
								isSelfAssignable: !!(null === (L = g.authorFlairSettings) || void 0 === L ? void 0 : L.isSelfAssignable),
								isUserEnabled: !!(null === (R = g.authorFlairSettings) || void 0 === R ? void 0 : R.isOwnFlairEnabled),
								position: null === (P = null === (k = g.authorFlairSettings) || void 0 === k ? void 0 : k.position) || void 0 === P ? void 0 : P.toLowerCase()
							},
							permissions: {
								canAssignOwn: !!(null === (D = g.authorFlairSettings) || void 0 === D ? void 0 : D.isSelfAssignable),
								canUserChange: !!((null === (G = g.authorFlairSettings) || void 0 === G ? void 0 : G.isSelfAssignable) && (null === (U = g.authorFlairSettings) || void 0 === U ? void 0 : U.isEnabled) || (null === (F = K.subredditPermissions) || void 0 === F ? void 0 : F.flair) || (null === (M = K.account) || void 0 === M ? void 0 : M.isAdmin))
							},
							applied: g.authorFlair ? Object(b.a)(g.authorFlair)[0] : void 0,
							templates: {},
							templateIds: []
						}
					}, Q && (K.interestTopicRecommendations = Q), K.predictionTournaments = g.predictionTournaments || [], g.channels) {
					const {
						channels: e,
						channelIds: t
					} = (e => {
						const t = [],
							r = {},
							s = (e, t, r) => {
								for (const n of e) {
									if (!n) continue;
									const e = n.node;
									if (!e) continue;
									if (e.channels) {
										s(e.channels.edges, t, r);
										continue
									}
									const o = e.id;
									t.push(o), r[o] = e
								}
							};
						return s(e.edges, t, r), {
							channelIds: t,
							channels: r
						}
					})(g.channels);
					K.channels = e, K.channelIds = t
				}
				return {
					...K,
					...null !== $ && {
						dist: $
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

			function s(e) {
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
				return s
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
			var s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
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
					[s.GERMAN_LOCALE]: Object.freeze({
						bcp47: s.GERMAN_LOCALE,
						displayName: "Deutsch",
						englishName: "German",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.GERMAN_LOCALE),
						rtl: !1
					}),
					[s.DEFAULT_LOCALE]: Object.freeze({
						bcp47: s.DEFAULT_LOCALE,
						displayName: "English (US)",
						englishName: "English (US)",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.DEFAULT_LOCALE),
						rtl: !1
					}),
					[s.SPANISH_LOCALE]: Object.freeze({
						bcp47: s.SPANISH_LOCALE,
						displayName: "Español (ES)",
						englishName: "Spanish (ES)",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.SPANISH_LOCALE),
						rtl: !1
					}),
					[s.SPANISH_MEXICAN_LOCALE]: Object.freeze({
						bcp47: s.SPANISH_MEXICAN_LOCALE,
						displayName: "Español (MX)",
						englishName: "Spanish (MX)",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.SPANISH_MEXICAN_LOCALE),
						rtl: !1
					}),
					"fr-FR": Object.freeze({
						bcp47: "fr-FR",
						displayName: "Français",
						englishName: "French",
						fbtLocale: Object(n.isoLocaleToFbtLocale)("fr-FR"),
						rtl: !1
					}),
					[s.ITALIAN_LOCALE]: Object.freeze({
						bcp47: s.ITALIAN_LOCALE,
						displayName: "Italiano",
						englishName: "Italian",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.ITALIAN_LOCALE),
						rtl: !1
					}),
					[s.PORTUGUESE_BRAZILIAN_LOCALE]: Object.freeze({
						bcp47: s.PORTUGUESE_BRAZILIAN_LOCALE,
						displayName: "Português (BR)",
						englishName: "Portuguese (BR)",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.PORTUGUESE_BRAZILIAN_LOCALE),
						rtl: !1
					}),
					[s.PORTUGUESE_LOCALE]: Object.freeze({
						bcp47: s.PORTUGUESE_LOCALE,
						displayName: "Português (PT)",
						englishName: "Portuguese (PT)",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.PORTUGUESE_LOCALE),
						rtl: !1
					})
				}),
				u = Object.freeze({
					[s.BENGALI_BANGLADESHI_LOCALE]: Object.freeze({
						bcp47: s.BENGALI_BANGLADESHI_LOCALE,
						displayName: "বাংলা",
						englishName: "Bengali",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.BENGALI_BANGLADESHI_LOCALE),
						rtl: !1
					}),
					[s.HINDI_LOCALE]: Object.freeze({
						bcp47: s.HINDI_LOCALE,
						displayName: "हिन्दी",
						englishName: "Hindi",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.HINDI_LOCALE),
						rtl: !1
					})
				}),
				l = Object.freeze({
					[s.PSEUDO_LOCALE]: Object.freeze({
						bcp47: s.PSEUDO_LOCALE,
						displayName: "Pseudo",
						englishName: "Pseudo",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.PSEUDO_LOCALE),
						rtl: !1
					}),
					[s.PSEUDO_AUTO]: Object.freeze({
						bcp47: s.PSEUDO_AUTO,
						displayName: "Pseudo Auto",
						englishName: "Pseudo Auto",
						fbtLocale: Object(n.isoLocaleToFbtLocale)(s.PSEUDO_AUTO),
						rtl: !1
					})
				}),
				b = Object(d.a)(i.P, o.b, (e, t) => e || t ? {
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
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/customMiddleware/recentSubreddits.ts"),
				o = r("./src/reddit/helpers/featureThrottling/store/index.ts"),
				i = r("./src/reddit/helpers/onboarding/postsConsumedWeekly.ts"),
				d = r("./src/reddit/models/Onboarding/index.ts");
			const c = () => {
					const e = Date.now() - s.xc,
						t = Object(n.b)().filter(t => t.lastVisited >= e),
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
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/isComment.ts"),
				o = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = r("./src/reddit/models/Vote/index.ts"),
				d = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
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
					isDeleted: e.author === s.H,
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
					parentId: Object(n.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: d(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(o.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(o.b)(e.associated_award)), t
			};
			const a = e => "string" == typeof e ? JSON.parse(e) : e,
				u = e => e.author !== s.H ? null : e.body === s.I ? c.c.User : e.body === s.Qb ? c.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizePostFromR2/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/models/Media/index.ts"),
				i = r("./src/reddit/models/PostCreationForm/index.ts"),
				d = r("./src/reddit/models/Vote/index.ts");
			const c = e => {
					const t = [];
					return e.link_flair_richtext && e.link_flair_richtext.length && t.push({
						richtext: e.link_flair_richtext,
						type: n.f.Richtext,
						textColor: e.link_flair_text_color || "dark",
						backgroundColor: e.link_flair_background_color || "",
						templateId: e.link_flair_template_id
					}), e.link_flair_text && t.push({
						text: e.link_flair_text,
						type: n.f.Text,
						textColor: e.link_flair_text_color || "dark",
						backgroundColor: e.link_flair_background_color || "",
						templateId: e.link_flair_template_id
					}), e.spoiler && t.push({
						text: "spoiler",
						type: n.f.Spoiler
					}), e.over_18 && t.push({
						text: "nsfw",
						type: n.f.Nsfw
					}), t
				},
				a = e => e ? e.map(e => ({
					categoryId: e.category_id,
					categoryName: e.category_name
				})) : [],
				u = e => {
					const t = e.preview && e.preview.enabled;
					let r = !1,
						s = null,
						n = {},
						d = {};
					const c = e.over_18 || e.spoiler;
					if (e.preview && (r = !!(d = e.preview.images[0].variants).mp4, n = e.preview.images[0].source, c && (s = d.obfuscated.source.url)), e.is_self) return {
						content: e.selftext_html,
						type: o.o.TEXT,
						markdownContent: e.selftext,
						obfuscated: s,
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
						obfuscated: s,
						provider: e.secure_media.oembed.provider_name || ""
					};
					if (e.media && e.media.reddit_video) {
						const t = e.media.reddit_video;
						return {
							hlsUrl: t.hls_url,
							dashUrl: t.dash_url,
							isGif: t.is_gif,
							scrubberThumbSource: t.scrubber_media_url,
							obfuscated: s,
							posterUrl: t.url,
							width: t.width,
							height: t.height,
							type: o.o.VIDEO
						}
					}
					if (e.media && e.media.rpan_video) {
						const t = e.media.rpan_video;
						return {
							hlsUrl: t.hls_url,
							scrubberThumbSource: t.scrubber_media_url,
							type: o.o.LIVEVIDEO
						}
					}
					if (t && r) return {
						content: d.mp4.source.url,
						type: o.o.GIFVIDEO,
						width: d.mp4.source.width,
						height: d.mp4.source.height,
						gifBackgroundImage: n.url,
						gifBackgroundResolutions: e.preview.images[0].resolutions,
						obfuscated: s,
						resolutions: d.mp4.resolutions
					};
					if (t) {
						const t = d.gif ? d.gif.resolutions : e.preview.images[0].resolutions;
						return {
							content: n.url,
							type: o.o.IMAGE,
							width: n.width,
							height: n.height,
							obfuscated: s,
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
					allAwardings: e.all_awardings ? Object(s.a)(e.all_awardings) : [],
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
			var s = r("./node_modules/lodash/values.js"),
				n = r.n(s);
			const o = e => n()(e).sort((t, r) => {
					const s = e[t.tag.id].tag.text.toLowerCase(),
						n = e[r.tag.id].tag.text.toLowerCase();
					return s < n ? -1 : s > n ? 1 : 0
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
			var s = r("./src/telemetry/index.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					profile: n.T(e),
					post: n.K(e, t),
					media: n.C(e, t),
					subreddit: n.kb(e),
					comment: n.h({
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
					return Object(s.a)({
						source: "comment",
						action: "view",
						noun: i ? "collapsed_comment" : "comment",
						...n.o(t),
						...o(t, r)
					})
				},
				d = e => {
					let {
						state: t,
						commentId: r,
						collapsed: i
					} = e;
					return Object(s.a)({
						source: "comment",
						action: "consume",
						noun: i ? "collapsed_comment" : "comment",
						...n.o(t),
						...o(t, r)
					})
				},
				c = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.sb(t),
					subreddit: n.kb(t),
					post: n.K(t, e),
					actionInfo: n.d(t),
					app: n.f(t),
					referrer: n.Z(t),
					session: n.gb(t)
				}),
				a = e => t => ({
					source: "post_detail",
					action: "click",
					noun: "comment_image",
					...n.o(t),
					...o(t, e)
				})
		},
		"./src/reddit/helpers/trackers/communityTopics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
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
			var s, n = r("./src/reddit/selectors/tags.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/index.ts");
			! function(e) {
				e.communitySettings = "community_settings", e.idCard = "id_card"
			}(s || (s = {}));
			const d = (e, t, r) => {
					const s = Object(n.x)(e, {
						subredditId: t
					});
					return !!s && s.id === r
				},
				c = (e, t) => Object(n.u)(e, {
					itemId: t
				}).reduce((e, t) => {
					let {
						topicTagIds: r,
						topicTagContents: s,
						topicTagTypes: n
					} = e;
					return r.push(t.tag.id), s.push(t.tag.text), n.push(t.tag.type), {
						topicTagIds: r,
						topicTagContents: s,
						topicTagTypes: n
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
					const s = Object(n.b)(e)[r.id] || Object(n.d)(e, {
						subredditId: t
					})[r.id];
					return s ? {
						id: s.id,
						content: s.text,
						type: s.type,
						isPrimary: d(e, t, s.id)
					} : null
				},
				u = (e, t, r) => {
					if (!r) return null;
					const s = Object(n.b)(e)[r] || Object(n.d)(e, {
						subredditId: t
					})[r];
					return s ? {
						id: s.id,
						content: s.text,
						type: s.type,
						isPrimary: d(e, t, s.id)
					} : null
				},
				l = (e, t, r) => ({
					...o.o(e),
					subreddit: {
						...o.kb(e) || {},
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
				p = (e, t, r, s) => {
					Object(i.a)({
						...l(e, t, s),
						topicTag: a(e, t, r),
						noun: "add_related_topic"
					})
				},
				m = (e, t, r, s) => {
					return !Object(n.i)(e, {
						subredditId: t
					}) && r.id ? Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: a(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, s)) : r.id ? Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: a(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, s)) : Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: a(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, s))
				},
				f = (e, t, r, s) => Object(i.a)({
					...l(e, t, s),
					topicTag: a(e, t, r),
					noun: "topic_remove"
				}),
				O = (e, t, r) => Object(i.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				g = (e, t, r) => Object(i.a)({
					...l(e, t, r),
					noun: r.context === s.communitySettings ? "save" : "save_community_topics"
				}),
				j = (e, t, r, s) => {
					const n = l(e, t, s);
					Object(i.a)({
						...n,
						action: "view",
						noun: "error",
						actionInfo: {
							...n.actionInfo,
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
			var s = r("./src/reddit/selectors/telemetry.ts"),
				n = r("./src/telemetry/index.ts");
			const o = e => t => Object(n.a)({
					...s.o(t),
					actionInfo: s.d(t, {
						reason: e
					}),
					source: "feed",
					action: "load",
					noun: "serving",
					feed: s.r(t)
				}),
				i = e => t => Object(n.a)({
					...s.o(t),
					actionInfo: s.d(t, {
						reason: e
					}),
					source: "feed",
					action: "fail",
					noun: "serving",
					feed: s.r(t)
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
			var s, n = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(s || (s = {}));
			const i = e => ({
					subreddit: o.kb(e),
					userSubreddit: o.ub(e)
				}),
				d = e => ({
					source: "subreddit_tooltip",
					noun: s.SubredditInlineTooltip,
					action: n.c.VIEW,
					...i(e)
				}),
				c = e => ({
					source: "id_card",
					noun: s.EditSubredditIcon,
					action: n.c.CLICK,
					...i(e)
				}),
				a = e => ({
					source: "id_card",
					noun: s.EditSubredditDescription,
					action: n.c.CLICK,
					...i(e)
				}),
				u = (e, t) => r => ({
					source: "id_card",
					noun: s.SaveDescription,
					action: n.c.CLICK,
					setting: {
						value: String(e),
						oldValue: String(t)
					},
					...i(r)
				}),
				l = (e, t) => ({
					source: "id_card",
					noun: s.Error,
					action: n.c.VIEW,
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
				return v
			})), r.d(t, "y", (function() {
				return h
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
				return A
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "c", (function() {
				return N
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => {
					var r, s, n, o, i, d, c, a, u, l, b;
					const {
						modNote: p,
						subredditId: m,
						userId: f,
						postId: O,
						commentId: g,
						subredditSearch: j,
						filteredType: _,
						filteredSubredditId: I
					} = t, v = g || (null === (s = null === (r = p) || void 0 === r ? void 0 : r.commentInfo) || void 0 === s ? void 0 : s.id), h = O || (null === (o = null === (n = p) || void 0 === n ? void 0 : n.postInfo) || void 0 === o ? void 0 : o.id);
					return {
						modnote: {
							type: null == p ? void 0 : p.itemType,
							content: null === (i = p) || void 0 === i ? void 0 : i.note,
							label: null === (c = null === (d = p) || void 0 === d ? void 0 : d.label) || void 0 === c ? void 0 : c.toLowerCase(),
							operatorId: null === (a = null == p ? void 0 : p.operator) || void 0 === a ? void 0 : a.id,
							subredditSearch: j,
							filteredType: null == _ ? void 0 : _.toLowerCase(),
							filteredSubredditId: null == I ? void 0 : I.toLowerCase()
						},
						modAction: {
							targetUserId: f || (null === (u = null == p ? void 0 : p.user) || void 0 === u ? void 0 : u.id),
							action: null === (b = null === (l = p) || void 0 === l ? void 0 : l.actionType) || void 0 === b ? void 0 : b.toLowerCase()
						},
						...v ? {
							comment: {
								id: v,
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
				d = e => t => ({
					source: i,
					action: "view",
					noun: "modnote_quickaccess",
					correlationId: Object(s.d)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				c = e => t => {
					const r = {
						source: i,
						action: "close",
						noun: "modnote_quickaccess",
						correlationId: Object(s.c)(s.a.ModNotes),
						...n.o(t),
						...o(0, e)
					};
					return Object(s.b)(s.a.ModNotes), r
				},
				a = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_quickaccess",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				u = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modnote_user_profile_hovercard",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				l = e => t => ({
					source: i,
					action: "click",
					noun: "relatedcontent_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				b = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_quickaccess",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				p = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modlog_user_profile_hovercard",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				m = e => t => ({
					source: i,
					action: "click",
					noun: "expand_modnote_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				f = e => t => ({
					source: i,
					action: "click",
					noun: "username_modnote_quickaccess",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				O = e => t => ({
					source: i,
					action: "click",
					noun: "mod_username_modnote_user_profile_hovercard",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				g = e => t => ({
					source: i,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				j = e => t => ({
					source: i,
					action: "view",
					noun: "user_profile_hovercard",
					correlationId: Object(s.d)(s.a.ModNotes, !1),
					...n.o(t),
					...o(0, e)
				}),
				_ = e => t => ({
					source: i,
					action: "click",
					noun: "add_note_user_profile_hovercard",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				I = e => t => ({
					source: i,
					action: "click",
					noun: "user_mod_log_user_profile_hovercard",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				v = e => t => ({
					source: i,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				h = e => t => ({
					source: i,
					action: "view",
					noun: "modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				y = e => t => ({
					source: i,
					action: "close",
					noun: "modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				T = e => t => ({
					source: i,
					action: "click",
					noun: "type_filter_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				S = e => t => ({
					source: i,
					action: "click",
					noun: "subreddit_filter_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				E = e => t => ({
					source: i,
					action: "select",
					noun: "type_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				x = e => t => ({
					source: i,
					action: "select",
					noun: "subreddit_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				C = e => t => ({
					source: i,
					action: "submit",
					noun: "submit_note_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				A = e => t => ({
					source: i,
					action: "click",
					noun: "delete_modnote_modlog",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				w = e => t => ({
					source: i,
					action: "click",
					noun: "cancel_deletemodnote",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				}),
				N = e => t => ({
					source: i,
					action: "click",
					noun: "delete_deletemodnote",
					correlationId: Object(s.c)(s.a.ModNotes),
					...n.o(t),
					...o(0, e)
				})
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/models/ExternalAccount/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Twitter = "twitter"
				}(s || (s = {}))
		},
		"./src/reddit/models/HatefulContentFilters/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(s || (s = {}))
		},
		"./src/reddit/models/Option/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			const s = e => !e.id,
				n = e => !!e.id,
				o = (e, t) => s(e) && s(t) ? e.displayText.toLowerCase().trim() === t.displayText.toLowerCase().trim() : !(!n(e) || !n(t)) && e.id === t.id
		},
		"./src/reddit/models/Tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			const s = 25,
				n = 64;
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
			var s = r("./src/reddit/actions/communityChat/index.ts");
			const n = {
				selectedChannel: null,
				models: {},
				channelIds: []
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.b:
						return {
							...e, selectedChannel: t.payload
						};
					case s.a:
						return {
							...e, channelIds: t.payload.channelIds, models: t.payload.channels
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/modUserNotes/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/subredditModeration/constants.ts");
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.U:
						case n.T:
							return null;
						case n.S:
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
						case n.U: {
							const {
								subredditId: r,
								userId: s,
								filter: n
							} = t.payload, o = Object(i.d)(r, s, n);
							return {
								...e,
								[o]: !0
							}
						}
						case n.T:
						case n.S: {
							const {
								subredditId: r,
								userId: s,
								filter: n
							} = t.payload, o = Object(i.d)(r, s, n);
							return {
								...e,
								[o]: !1
							}
						}
						default:
							return e
					}
				},
				a = Object(s.c)({
					error: o,
					pending: c
				});
			const u = {};
			var l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.T: {
							const {
								subredditId: r,
								userId: s,
								filter: n,
								fetchedToken: o
							} = t.payload, d = Object(i.d)(r, s, n, o);
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
			const p = e => `${e.subredditId}--${e.bannedAtUTC}-usernote`,
				m = e => `${e.subredditId}--${e.bannedAtUTC}-actionnote`,
				f = e => {
					const t = p(e),
						{
							modNote: r
						} = e;
					return r ? {
						__typename: "ModUserNote",
						id: t,
						itemType: b.z.Ban,
						createdAt: new Date(1e3 * e.bannedAtUTC),
						operator: {
							id: e.bannedById,
							displayName: e.bannedBy
						},
						user: {
							id: e.id,
							displayName: e.username
						},
						label: b.G.Ban,
						note: r
					} : null
				},
				O = e => {
					return {
						__typename: "ModActionNote",
						id: m(e),
						itemType: b.z.Ban,
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
					case n.Q: {
						const {
							subredditId: r,
							newModNote: s
						} = t.payload, n = Object(i.d)(r, s.user.id, b.y.All);
						return {
							...e,
							[n]: s.id
						}
					}
					case n.H: {
						const {
							subredditId: s,
							lastAuthorModNote: n
						} = t.payload, o = null === (r = null == n ? void 0 : n.user) || void 0 === r ? void 0 : r.id, d = Object(i.d)(s, o, b.y.All);
						return {
							...e,
							[d]: n.id
						}
					}
					case n.G: {
						const {
							subredditId: r,
							lastAuthorModNotes: s
						} = t.payload, n = {};
						return s.forEach(e => {
							var t;
							const s = null === (t = null == e ? void 0 : e.user) || void 0 === t ? void 0 : t.id,
								o = Object(i.d)(r, s, b.y.All);
							n[o] = e.id
						}), {
							...e,
							...n
						}
					}
					case n.p: {
						const {
							bannedUsers: r
						} = t.payload, s = Object.values(r)[0], {
							subredditId: n
						} = s, o = s.id;
						if (!s.modNote) return e;
						const d = p(s),
							c = Object(i.d)(n, o, b.y.All);
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
						case n.T: {
							const {
								subredditId: e,
								userId: r,
								filter: s,
								loadMoreToken: n
							} = t.payload;
							return {
								[Object(i.d)(e, r, s)]: n
							}
						}
						default:
							return e
					}
				},
				v = r("./node_modules/icepick/icepick.js");
			const h = {};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.Q: {
							const {
								newModNote: r
							} = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case n.H: {
							const {
								lastAuthorModNote: r
							} = t.payload;
							return {
								...e,
								[r.id]: r
							}
						}
						case n.G: {
							const {
								lastAuthorModNotes: r
							} = t.payload;
							return Object(v.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case n.T: {
							const {
								notes: r
							} = t.payload;
							return Object(v.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case n.R: {
							const {
								noteId: r
							} = t.payload, s = {
								...e
							};
							return delete s[r], s
						}
						case n.p: {
							const {
								bannedUsers: r
							} = t.payload;
							return Object(v.merge)(e, Object.values(r).reduce((e, t) => {
								const r = m(t),
									s = O(t);
								e[r] = s;
								const n = p(t),
									o = f(t);
								return o ? (e[n] = o, e) : e
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
					case n.Q: {
						const {
							subredditId: s,
							newModNote: n,
							filter: o
						} = t.payload;
						if (o !== b.y.All && o !== b.y.Note) return e;
						const d = null === (r = null == n ? void 0 : n.user) || void 0 === r ? void 0 : r.id,
							c = Object(i.d)(s, d, o),
							a = o === b.y.All ? b.y.Note : b.y.All,
							u = Object(i.d)(s, d, a);
						return {
							...e,
							[c]: e[c] ? [n.id, ...e[c]] : [n.id],
							[u]: e[u] ? [n.id, ...e[u]] : [n.id]
						}
					}
					case n.T: {
						const {
							notes: r,
							subredditId: s,
							userId: n,
							filter: o
						} = t.payload, d = Object(i.d)(s, n, o), c = r.map(e => e.id);
						return e[d] ? {
							...e,
							[d]: S()([...e[d], ...c])
						} : {
							...e,
							[d]: c
						}
					}
					case n.R: {
						const {
							subredditId: r,
							userId: s,
							noteId: n
						} = t.payload, o = Object(i.d)(r, s, b.y.All), d = Object(i.d)(r, s, b.y.Note), c = e[o] ? e[o].filter(e => e !== n) : [], a = e[d] ? e[d].filter(e => e !== n) : [];
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
					case n.p: {
						const {
							bannedUsers: r
						} = t.payload, s = Object.values(r)[0], {
							subredditId: n
						} = s, o = s.id, d = Object(i.d)(n, o, b.y.All), c = Object(i.d)(n, o, b.y.Note), a = Object(i.d)(n, o, b.y.Ban), u = m(s), l = p(s), f = e[d] ? [l, u, ...e[d]] : [], O = e[c] ? [l, ...e[c]] : [], g = e[a] ? [u, ...e[a]] : [];
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
			const C = {};
			var A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.Q: {
						const {
							subredditId: r,
							newModNote: s
						} = t.payload, n = Object(i.d)(r, s.user.id, b.y.All);
						return {
							...e,
							[n]: {
								...e[n],
								[b.y.All]: (e[n][b.y.All] || 0) + 1,
								[b.y.Note]: (e[n][b.y.Note] || 0) + 1
							}
						}
					}
					case n.lb: {
						const {
							subredditId: r,
							userId: s,
							totalCounts: n
						} = t.payload, o = Object(i.d)(r, s, b.y.All);
						return {
							...e,
							[o]: Object.keys(n).reduce((e, t) => (e[t] = n[t].totalCount, e), {})
						}
					}
					case n.R: {
						const {
							subredditId: r,
							userId: s
						} = t.payload, n = Object(i.d)(r, s, b.y.All);
						return {
							...e,
							...void 0 !== e[n] ? {
								[n]: {
									...e[n],
									[b.y.All]: (e[n][b.y.All] || 1) - 1,
									[b.y.Note]: (e[n][b.y.Note] || 1) - 1
								}
							} : null
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: a,
				fetchedTokens: l,
				lastAuthorModNotes: j,
				loadMore: I,
				models: y,
				order: x,
				totalCount: A
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/omit.js"),
				n = r.n(s),
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
				var r, s, p, m, f;
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
							userFlair: s
						} = r, n = {
							...e
						};
						return Object.keys(s).forEach(e => {
							n[e] || (n[e] = s[e])
						}), n
					}
					case l.s: {
						const {
							subredditId: r,
							applied: s,
							displaySettings: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...s && {
									applied: s
								},
								displaySettings: n
							}
						}
					}
					case o.h: {
						const {
							subredditId: r,
							applied: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s
							}
						}
					}
					case l.j: {
						const {
							subredditId: r,
							isEnabled: s
						} = t.payload, n = {
							...e[r].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: n
							}
						}
					}
					case l.d: {
						const {
							subredditId: s,
							canAssignOwn: n
						} = t.payload, o = {
							...null === (r = e[s]) || void 0 === r ? void 0 : r.permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[s]: {
								...e[s],
								permissions: o
							}
						}
					}
					case l.q: {
						const r = t.payload,
							n = e[r.subredditId],
							o = null === (s = e[r.subredditId]) || void 0 === s ? void 0 : s.templates,
							i = null === (p = e[r.subredditId]) || void 0 === p ? void 0 : p.templateIds,
							d = (null === (m = r.template) || void 0 === m ? void 0 : m.id) || (null === (f = r.template) || void 0 === f ? void 0 : f.templateId);
						if (!d) return;
						const c = {
								...o,
								[d]: r.template
							},
							a = [...i];
						return a.includes(d) || a.push(d), {
							...e,
							[r.subredditId]: {
								...n,
								templates: c,
								templateIds: a
							}
						}
					}
					case l.g: {
						const r = t.payload,
							s = e[r.subredditId],
							o = e[r.subredditId].templates,
							i = e[r.subredditId].templateIds,
							d = n()(o, r.templateId),
							c = i.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...s,
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
							s = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...s,
								templateIds: r.templateIds
							}
						}
					}
					case l.r: {
						const {
							subredditId: r,
							templateIds: s,
							templates: n
						} = t.payload, o = e[r];
						return {
							...e,
							[r]: {
								...o,
								templates: n,
								templateIds: s
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
			var s = r("./node_modules/redux/es/redux.js"),
				n = r("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case n.u:
							return t.payload;
						case n.v:
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
							error: s
						} = t.payload;
						return {
							...e,
							[r]: s || {}
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
			var p = function() {
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
				m = Object(s.c)({
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

			function v(e) {
				return I()(e, "id").sort((e, t) => e.created - t.created)
			}

			function h(e, t) {
				return v([...t || [], e])
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
						case d.f:
						case f.y:
						case d.b: {
							const {
								comments: r,
								key: s
							} = t.payload, n = e[s] ? e[s] : [], o = S(r, n.find(e => e.stickied)), i = v([...n, ...o]);
							return {
								...e,
								[s]: [...i]
							}
						}
						case j.b:
						case j.c:
						case j.d: {
							const {
								comment: r,
								commentsPageKey: s
							} = t.payload;
							return {
								...e,
								[s]: h(T(r), e[s])
							}
						}
						case f.N:
						case f.M: {
							const {
								draftKey: r,
								comment: s,
								commentsPageKey: n
							} = t.payload;
							return {
								...e,
								[n]: y(r, h(T(s), e[n]))
							}
						}
						case f.L: {
							const {
								optimisticComment: r,
								commentsPageKey: s
							} = t.payload;
							return r ? {
								...e,
								[s]: h(T(r), e[s])
							} : e
						}
						case f.H: {
							const {
								commentId: r,
								commentsPageKey: s
							} = t.payload;
							return {
								...e,
								[s]: y(r, e[s])
							}
						}
						default:
							return e
					}
				},
				C = r("./node_modules/lodash/mapValues.js"),
				A = r.n(C),
				w = r("./src/reddit/helpers/commentList/index.ts"),
				N = r("./src/reddit/models/Comment/index.ts");
			const L = {};

			function R(e) {
				const t = e;
				return A()(t, e => {
					let {
						depth: t,
						next: r,
						prev: s
					} = e;
					return {
						depth: t,
						next: r,
						prev: s
					}
				})
			}
			var k = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case f.y: {
						const {
							comments: r,
							commentLists: s,
							continueThreads: n,
							key: o,
							moreCommentsItem: i,
							moreComments: d
						} = t.payload, c = s[i.postId], a = e[o], u = {}, l = a[i.id];
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
							const e = Object(w.c)({
									commentLink: c.head,
									commentsDict: r,
									moreCommentsDict: d,
									continueThreadDict: n
								}),
								t = Object(w.c)({
									commentLink: c.tail,
									commentsDict: r,
									moreCommentsDict: d,
									continueThreadDict: n
								});
							l && (e.prev = l.prev, t.next = l.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...R(r),
								...R(n),
								...R(d),
								...u
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: r,
							continueThreads: s,
							key: n,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...R(r),
								...R(s),
								...R(o)
							}
						}
					}
					case j.b:
					case f.N: {
						const {
							comment: r,
							commentsPageKey: s,
							headCommentId: n
						} = t.payload, o = e[s], i = {};
						let d = null;
						return n && (i[n] = {
							...o[n],
							prev: Object(N.i)(r.id)
						}, d = Object(N.i)(n)), {
							...e,
							[s]: {
								...e[s],
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
							commentsPageKey: s,
							parentCommentId: n,
							depth: o
						} = t.payload, i = e[s], d = {};
						let c = null;
						if (!i[n]) return e;
						const a = i[n].next;
						return a && (d[a.id] = {
							...i[a.id],
							prev: Object(N.i)(r.id)
						}, c = a), d[n] = {
							...i[n],
							next: Object(N.i)(r.id)
						}, {
							...e,
							[s]: {
								...e[s],
								...d,
								[r.id]: {
									depth: o,
									next: c,
									prev: Object(N.i)(n)
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
							commentsPageKey: s
						} = t.payload;
						return {
							...e,
							[s]: r.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: r,
							key: s,
							postId: n
						} = t.payload;
						return {
							...e,
							[s]: r[n] && r[n].head ? r[n].head.id : null
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
			const G = {};
			var U = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: s
						}
					}
					case f.N: {
						const {
							parentId: r,
							commentsPageKey: s
						} = t.payload;
						return e[s] ? e : {
							...e,
							[s]: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				api: m,
				followed: g,
				keyToChatCommentLinks: x,
				keyToCommentThreadLinkSets: k,
				keyToHeadCommentId: D,
				keyToPostId: U,
				ads: i
			})
		},
		"./src/reddit/reducers/tags/selected/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n = r("./node_modules/lodash/uniqWith.js"),
				o = r.n(n),
				i = r("./node_modules/lodash/values.js"),
				d = r.n(i),
				c = r("./src/reddit/actions/tags/constants.ts"),
				a = r("./src/reddit/models/Option/index.ts"),
				u = r("./src/reddit/models/Tags/index.ts");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(s || (s = {}));
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
							itemTags: s,
							suggestedItemTags: n,
							primaryTag: i
						} = t.payload, c = o()([...(e.selectedOptions[r] || []).map(e => {
							if (!e.id) {
								const t = d()(s[r] || {}).find(t => e.displayText.toLowerCase().trim() === t.tag.text.toLowerCase().trim());
								if (t) return {
									...Object(u.e)(t, !0),
									action: null
								}
							}
							return e
						}), ...d()(s[r] || {}).map(e => ({
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
								[r]: d()(n[r] || {}).map(e => ({
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
							option: n
						} = t.payload, i = t.type === c.z ? "selectedOptions" : "selectedSuggestedOptions", d = t.type === c.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[d][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, n));
						let b = s.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: o()([...e[i][r] || [], {
									...n,
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
							option: n
						} = t.payload, o = t.type === c.y ? "selectedOptions" : "selectedSuggestedOptions", i = t.type === c.y ? "deselectedOptions" : "deselectedSuggestedOptions", d = (e[i][r] || []).slice(), u = (e[o][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, n));
						return l > -1 && (null === u[l].action && d.push({
							...u[l],
							action: s.REMOVE
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
						} = t.payload, s = Object.keys(r);
						if (!s.length) return e;
						const n = {
								selectedOptions: {},
								deselectedOptions: {},
								inputByItemId: {}
							},
							o = s.reduce((e, t) => (e.selectedOptions[t] = d()(r[t]).map(e => ({
								...Object(u.e)(e, !0),
								action: null
							})), e.deselectedOptions[t] = [], e.inputByItemId[t] = "", e), n);
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
							input: s
						} = t.payload, n = t.type === c.x ? "inputByItemId" : "suggestedInputByItemId";
						return {
							...e,
							[n]: {
								...e[n],
								[r]: s
							}
						}
					}
					case c.i:
					case c.h: {
						const {
							subredditId: r,
							primaryTagId: s
						} = t.payload;
						if (!s || !r) return e;
						const n = {
								...e,
								selectedPrimaryTagId: {
									...e.selectedPrimaryTagId,
									[r]: s
								}
							},
							o = e.selectedOptions[r];
						if (o) {
							const t = o.findIndex(e => e.id === s),
								i = [...o];
							return t >= 0 && i.splice(t, 1), {
								...n,
								selectedOptions: {
									...e.selectedOptions,
									[r]: i
								}
							}
						}
						return n
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return d
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
				return v
			})), r.d(t, "j", (function() {
				return y
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = r("./src/reddit/helpers/publicAccessNetwork/index.ts");
			const d = e => e.publicAccessNetwork.api.config,
				c = (e, t) => !!t && !!e.publicAccessNetwork.api.error[Object(i.g)(t)],
				a = e => c(e, o.b),
				u = (e, t) => !!t && !!e.publicAccessNetwork.api.pending[Object(i.g)(t)] && e.publicAccessNetwork.api.pending[Object(i.g)(t)].isPending,
				l = e => u(e, o.b),
				b = e => e.publicAccessNetwork.api.pending[o.b] && e.publicAccessNetwork.api.pending[o.b].fetchedUtcTimeStamp,
				p = Object(s.a)(d, e => e.global),
				m = Object(s.a)((e, t) => {
					let {
						subreddit: r
					} = t;
					return r
				}, d, (e, t) => {
					const r = e.toLowerCase();
					return t.subreddits[r]
				}),
				f = Object(s.a)(d, e => e.global.rpan_intro_video_url),
				O = Object(s.a)(d, e => e.global.url_to_show_for_unavailable_video),
				g = Object(s.a)(d, e => !1),
				j = Object(s.a)(d, e => e.isError),
				_ = Object(s.a)(d, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				v = (Object(s.a)(I, e => e.isError), Object(s.a)(I, e => e.isPending)),
				h = Object(n.a)(Object(s.a)(I, e => e.subreddits)),
				y = Object(s.a)(h, e => [{
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
				return s
			}));
			const s = e => e.adsSignals
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
				return v
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
				return A
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "q", (function() {
				return R
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "z", (function() {
				return D
			})), r.d(t, "L", (function() {
				return G
			})), r.d(t, "s", (function() {
				return U
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
				return z
			})), r.d(t, "v", (function() {
				return H
			})), r.d(t, "M", (function() {
				return J
			})), r.d(t, "f", (function() {
				return $
			})), r.d(t, "i", (function() {
				return K
			})), r.d(t, "I", (function() {
				return V
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
				return se
			})), r.d(t, "B", (function() {
				return ne
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/values.js"),
				n = r.n(s),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/objectSelector/index.ts"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/constants/comments.ts"),
				a = r("./src/reddit/models/Post/index.ts"),
				u = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/lib/initializeClient/installReducer.ts"),
				m = r("./src/reddit/reducers/features/comments/index.ts"),
				f = r("./src/reddit/reducers/pages/comments/index.ts"),
				O = r("./src/redditGQL/types.ts");
			Object(p.a)({
				features: {
					comments: m.a
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
				v = (e, t) => {
					const r = I(e, t);
					if (r) return Object(b.c)(e, {
						commentId: r
					})
				},
				h = [],
				y = Object(i.a)((e, t) => {
					const r = v(e, t),
						s = r && r.id;
					if (!s) return h;
					const {
						commentsPageKey: n
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[n], i = [];
					let d = {
						id: s,
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
					const s = e.pages.comments.keyToPostId[r];
					return s ? e.posts.models[s] : null
				},
				E = (e, t) => {
					let {
						commentId: r,
						commentLink: s,
						commentsPageKey: n
					} = t;
					const o = e.pages.comments.keyToCommentThreadLinkSets[n];
					return o ? s ? o[s.id] : r ? o[r] : null : null
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
				A = (e, t) => {
					let {
						commentLink: r
					} = t;
					const {
						id: s,
						type: n
					} = r;
					switch (n) {
						case c.a.Comment:
							return e.features.comments.models[s];
						case c.a.MoreComments:
							return e.moreComments.models[s];
						case c.a.ContinueThread:
							return e.continueThreads.models[s];
						default:
							return null
					}
				},
				w = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, r = Object(a.z)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== o.H).map(t => e.features.comments.models[t].author)))
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
				R = e => e.features.comments.models,
				k = (e, t) => {
					let {
						commentId: r
					} = t;
					const s = Object(b.c)(e, {
						commentId: r
					});
					return s ? Object(b.b)(e, s) : ""
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
						commentsPageKey: s
					} = t;
					return !!(r && e.features.comments.isEditing[s] && e.features.comments.isEditing[s][r])
				},
				G = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: s
					} = t;
					return !!(r && e.features.comments.replyFormOpen[s] && e.features.comments.replyFormOpen[s][r])
				},
				U = (e, t) => {
					let {
						commentsPageKey: r
					} = t;
					const s = r && e.features.comments.replyFormOpen[r] || {},
						n = Object.keys(s).find(e => s[e]),
						o = n && Object(b.c)(e, {
							commentId: n
						}),
						i = o && C(e, {
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
					const s = e.pages.comments.keyToPostId[r];
					if (s) {
						const t = n()(e.moreComments.models).find(t => t.postId === s && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
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
					const s = r ? e.features.comments.models[r] : void 0;
					if (!s) return null;
					const n = e.authorFlair.models[s.subredditId];
					return n ? n[s.author] : null
				},
				z = (e, t) => {
					let {
						draftKey: r
					} = t;
					var s, n, o;
					return (null === (o = null === (n = null === (s = e.features.comments.submit) || void 0 === s ? void 0 : s.error) || void 0 === n ? void 0 : n[r]) || void 0 === o ? void 0 : o.type) || null
				},
				H = (e, t) => {
					let {
						draftKey: r
					} = t;
					return !!e.features.comments.submit.error[r]
				},
				J = (e, t) => {
					let {
						draftKey: r
					} = t;
					const s = e.features.comments.submit.error[r];
					return s && s.fields ? s.fields.map(e => e.msg) : []
				},
				$ = (e, t) => {
					let {
						draftKey: r
					} = t;
					const s = e.features.comments.drafts[r];
					return !!s && s.autofocusDisabled
				},
				K = (e, t) => {
					let {
						draftKey: r
					} = t;
					return e.features.comments.drafts[r]
				},
				V = (e, t) => {
					let {
						commentId: r
					} = t;
					const s = r ? e.features.comments.submit.error[r] : void 0;
					return s && s.fields ? s.fields.map(e => e.msg) : void 0
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
					if (r) return Object(l.db)(e, r)
				},
				ee = (e, t) => {
					let {
						commentId: r
					} = t;
					var s, n;
					return !!((null === (n = null === (s = e.pages) || void 0 === s ? void 0 : s.comments) || void 0 === n ? void 0 : n.followed) || []).find(e => e.id === r)
				},
				te = (e, t) => {
					let {
						commentId: r
					} = t;
					var s, n;
					const o = ((null === (n = null === (s = e.pages) || void 0 === s ? void 0 : s.comments) || void 0 === n ? void 0 : n.followed) || []).find(e => e.id === r);
					return !!(o && o.expiresAt < Date.now())
				},
				re = Object(d.a)(u.a, l.y, (e, t) => {
					var r;
					return e && (null === (r = null == t ? void 0 : t.allowedMediaInComments) || void 0 === r ? void 0 : r.includes(O.f.Giphy)) || !1
				}),
				se = (e, t) => {
					let {
						subredditId: r
					} = t;
					var s;
					const n = Object(l.y)(e, {
						subredditId: r
					});
					return (null === (s = null == n ? void 0 : n.allowedMediaInComments) || void 0 === s ? void 0 : s.includes(O.f.Static)) || !1
				},
				ne = (e, t) => {
					let {
						subredditId: r
					} = t;
					var s;
					const n = Object(l.y)(e, {
						subredditId: r
					});
					return (null === (s = null == n ? void 0 : n.allowedMediaInComments) || void 0 === s ? void 0 : s.includes(O.f.Animated)) || !1
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
			var s = r("./src/reddit/helpers/name/index.ts"),
				n = r("./src/reddit/models/DiscoveryUnit/index.ts");
			r("./src/reddit/selectors/category.ts"), r("./src/reddit/selectors/listings.ts"), r("./src/reddit/selectors/posts.ts"), r("./src/reddit/selectors/subreddit.ts");
			const o = e => e.discoveryUnits.api.list.loaded,
				i = e => e.discoveryUnits.api.list.pending,
				d = (e, t) => {
					let {
						unitName: r
					} = t;
					const n = e.discoveryUnits.nameToId[Object(s.i)(r)];
					return e.discoveryUnits.models[n]
				},
				c = e => d(e, {
					unitName: n.b
				}),
				a = new Set(["sequence"]),
				u = e => {
					const t = e.platform.currentPage;
					if (t) {
						const {
							meta: e,
							urlParams: r
						} = t, s = e && e.name || "", n = r && r.subredditName || "", o = "subreddit" === s, i = a.has(n.toLowerCase());
						return o && i
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
			var s = r("./src/lib/isUrl/index.ts"),
				n = r("./src/reddit/components/CrosspostRecommendationsModal/constants.tsx"),
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
						experimentName: o.We
					}) === o.Pd
				},
				p = e => !e.media || e.media.type !== c.o.RTJSON && e.media.type !== c.o.TEXT ? "" : e.media.markdownContent,
				m = e => !e.media && e.source && Object(s.a)(e.source.url) ? e.source.displayText : "",
				f = (e, t) => {
					const r = Object(l.G)(e, {
						postId: t
					});
					return r && !r.isSponsored && r.isCrosspostable && !Object(d.a)(r) && Object(a.c)(n.a)(e)
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
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(n.a)(s.ub)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Gb
				}) === s.bd.Enabled,
				i = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Fb
				}) === s.ad.Enabled
		},
		"./src/reddit/selectors/experiments/mediaInComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Ce
				}) === s.Pd,
				i = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Be
				}) === s.Pd
		},
		"./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "d", (function() {
				return R
			}));
			var s, n = r("./node_modules/reselect/es/index.js"),
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
			}(s || (s = {}));
			const p = Object(n.a)(u.h, u.d, a.e, (e, t, r) => !e && !t && !r);

			function m(e, t) {
				return r => Object(c.c)(r, {
					experimentName: e,
					experimentEligibilitySelector: p,
					expEventOverride: t
				})
			}
			const f = m(i.gc, !0),
				O = m(i.gc, !1),
				g = m(i.ic, !0),
				j = (m(i.ic, !1), m(i.hc, !0)),
				_ = m(i.hc, !1),
				I = m(i.jc, !0),
				v = m(i.jc, !1),
				h = m(i.kc, !0),
				y = m(i.fc, !0),
				T = m(i.lc, !0),
				S = Object(n.a)(f, g, (e, t) => e === i.cd.Enabled || t === i.dd.Enabled),
				E = Object(n.a)(j, I, (e, t) => e === i.gb.BlurredPreview || e === i.gb.NoPreview || t === i.gb.BlurredPreview || t === i.gb.NoPreview),
				x = Object(n.a)(_, v, (e, t) => e === i.gb.BlurredPreview || t === i.gb.BlurredPreview),
				C = Object(n.a)(j, I, h, y, (e, t, r, s) => e === i.gb.NoPreview || t === i.gb.NoPreview || r === i.gb.NoPreview || s === i.fb.Enabled),
				A = Object(n.a)(S, C, x, (e, t, r) => (e || t) && !r),
				w = e => {
					const t = x(e),
						r = A(e);
					return t ? s.Blurred : r ? s.NoPreview : null
				},
				N = Object(n.a)(y, e => e === i.fb.Enabled),
				L = e => {
					const t = x(e),
						r = Object(o.m)(e);
					return t && r
				},
				R = e => {
					var t;
					const r = x(e),
						s = Object(l.b)(e),
						n = null === (t = null == s ? void 0 : s.routeMatch) || void 0 === t ? void 0 : t.match;
					if (n) {
						const t = Object(b.k)(e, {
								profileName: n.params.profileName
							}),
							o = !!(t && (null == t ? void 0 : t.isNSFW)),
							i = Object(d.G)(e, {
								pageLayer: s
							});
						return r && o && !i
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(s.a)(i.e, d.L, (e, t) => e && !t),
				u = e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: n.Jc
				}),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.Ic
				}), e => e),
				b = Object(s.a)(e => {
					var t;
					const r = n.Lb;
					for (let s = 0; s < r.length; s++) {
						const i = r[s],
							d = (null === (t = i.split("_").pop()) || void 0 === t ? void 0 : t.toUpperCase()) || "",
							c = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: i
							});
						if (c && Object.values(n.ib).includes(c)) return {
							countryCode: d,
							experimentName: i,
							variantName: c
						}
					}
					return null
				}, e => e),
				p = Object(s.a)(e => {
					const t = b(e);
					return (null == t ? void 0 : t.variantName) || void 0
				}, c.a),
				m = (Object(s.a)(p, e => e === n.ib.FruitVeg), Object(s.a)(p, e => e === n.ib.Karma)),
				f = Object(s.a)(p, e => e === n.ib.Randomizer),
				O = Object(s.a)(p, e => e === n.ib.Interactive),
				g = Object(s.a)(p, e => Object.values(n.ib).includes(e)),
				j = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.mc
				})
		},
		"./src/reddit/selectors/experiments/popularGqlMigration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts");
			const d = Object(s.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.e,
					experimentName: n.rc
				}), e => e === n.Pd),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: n.sc
				}), e => e === n.Pd)
		},
		"./src/reddit/selectors/experiments/publicAccessNetwork.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
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
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.qf.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Bf
				}),
				i = e => s.qf.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.jf
				}),
				d = (e, t, r) => {
					const o = r(e, t);
					return !(!o || !o.meter) && (o.meter.enabled && s.lg.Enabled === Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.kg
					}))
				},
				c = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Af
				}),
				a = e => {
					switch (e) {
						case s.Ff.Five:
							return .05;
						case s.Ff.Ten:
							return .1;
						case s.Ff.Fifty:
							return .5;
						default:
							return .01
					}
				},
				u = e => s.qf.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Cf
				}),
				l = e => s.qf.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.yf
				}),
				b = e => s.qf.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.zf
				})
		},
		"./src/reddit/selectors/experiments/supportingLinkAds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: n.a,
				experimentName: s.Nc
			}), e => e === s.Pd)
		},
		"./src/reddit/selectors/experiments/targetedOnboardingSkip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = e => Object(n.c)(e, {
				experimentEligibilitySelector: o.S,
				experimentName: s.Qc
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
			var s = r("./src/reddit/models/ExternalAccount/index.ts"),
				n = r("./src/reddit/models/User/index.ts"),
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
					const r = Object(n.e)(t),
						s = d(e, {
							username: r
						});
					return s ? s.twitter : void 0
				},
				a = e => !!e.externalAccount.api.connect.pending[s.a.Twitter],
				u = (e, t) => {
					let {
						profileName: r
					} = t;
					if (!r) return null;
					const i = d(e, {
						username: r
					});
					if (!i) return null;
					const c = i[s.a.Twitter];
					if (!c) return null;
					const a = Object(o.m)(e);
					if (!(a && Object(n.e)(a).toLowerCase() === r.toLowerCase())) return c;
					const u = Object(o.Cb)(e, {
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
				return d
			}));
			var s = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./src/reddit/reducers/features/predictions/index.ts"),
				o = r("./src/reddit/selectors/postCreations.ts");
			Object(s.a)({
				features: {
					predictions: n.a
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
							s = t.formData.polls,
							n = s.options.map(e => ({
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
							votingEndsAt: s.endDate.toISOString(),
							body: i,
							options: n
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
			var s = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./src/reddit/reducers/features/predictions/index.ts");
			Object(s.a)({
				features: {
					predictions: n.a
				}
			});
			const o = (e, t) => {
					var r, s, n;
					return (null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.leaderboards[t.subredditId]) || void 0 === n ? void 0 : n.isFetching) || !1
				},
				i = (e, t) => {
					var r, s, n;
					return (null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.leaderboards[t.subredditId]) || void 0 === n ? void 0 : n.isFetched) || !1
				},
				d = (e, t) => {
					var r, s, n;
					return (null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.leaderboards[t.subredditId]) || void 0 === n ? void 0 : n.error) || !1
				},
				c = (e, t) => {
					var r, s, n;
					return (null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.leaderboards[t.subredditId]) || void 0 === n ? void 0 : n.data) || null
				},
				a = (e, t) => {
					var r, s;
					return (null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.tournamentsLeaderboards[t.tournamentId]) || null
				},
				u = (e, t) => {
					var r, s, n;
					return (null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.queriedLeaderboards[t.tournamentId]) || void 0 === n ? void 0 : n.isFetching) || !1
				},
				l = (e, t) => {
					var r, s, n;
					return (null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.queriedLeaderboards[t.tournamentId]) || void 0 === n ? void 0 : n.isFetched) || !1
				},
				b = (e, t) => {
					var r, s, n;
					return (null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === s ? void 0 : s.queriedLeaderboards[t.tournamentId]) || void 0 === n ? void 0 : n.error) || !1
				}
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			}));
			var s = r("./src/reddit/models/Gold/Powerups/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, s;
					switch (t.type) {
						case o.nb:
						case o.ob: {
							const {
								benefitStatuses: s,
								subredditId: n
							} = t.payload;
							if (!s) return e;
							const o = null !== (r = e[n]) && void 0 !== r ? r : {},
								i = {};
							return s.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								i[t] = r
							}), {
								...e,
								[n]: {
									...o,
									...i
								}
							}
						}
						case o.L: {
							const {
								benefitStatuses: r,
								subredditId: n
							} = t.payload, o = null !== (s = e[n]) && void 0 !== s ? s : {}, i = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								i[t] = r
							}), {
								...e,
								[n]: {
									...o,
									...i
								}
							}
						}
						default:
							return e
					}
				},
				c = r("./node_modules/reselect/es/index.js");
			Object(n.a)({
				features: {
					powerupsBenefitSettings: d
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				u = (e => Object(c.a)(a, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/selectors/moderatorPermissions.ts");
			const o = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!s.d.subredditInlineEditing(e)) return !1;
					const o = r ? Object(n.n)(e, {
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
				return p
			})), r.d(t, "g", (function() {
				return m
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/models/SubredditModeration/index.ts"),
				o = r("./src/redditGQL/types.ts"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			Object(i.a)({
				features: {
					modUserNotes: d.a
				}
			});
			const c = Object(s.a)((e, t) => {
					let {
						subredditId: r,
						userId: s,
						filter: o
					} = t;
					const i = Object(n.d)(r, s, o),
						d = e.features.modUserNotes.order[i];
					return d ? d.map(t => e.features.modUserNotes.models[t]) : []
				}),
				a = (e, t) => {
					let {
						subredditId: r,
						userId: s,
						filter: o
					} = t;
					const i = Object(n.d)(r, s, o);
					return e.features.modUserNotes.api.pending[i]
				},
				u = e => e.features.modUserNotes.api.error,
				l = (e, t) => {
					let {
						subredditId: r,
						userId: s,
						filter: o
					} = t;
					const i = Object(n.d)(r, s, o);
					return e.features.modUserNotes.loadMore[i]
				},
				b = (e, t, r) => {
					if (!t || !r) return;
					const s = e.features.modUserNotes.lastAuthorModNotes[Object(n.d)(r, t, o.y.All)];
					return s ? e.features.modUserNotes.models[s] : void 0
				},
				p = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(n.d)(r, t, o.y.All)]
				},
				m = (e, t, r, s) => {
					if (!s) return;
					const n = p(e, t, r);
					return n && n[s] || 0
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = (e, t) => {
					let {
						commentId: r,
						commentsPageKey: s
					} = t;
					if (!r) return !1;
					if (e.features.comments.collapsed[s] && r in e.features.comments.collapsed[s]) return !!e.features.comments.collapsed[s][r];
					const n = e.features.comments.models[r];
					return !!n && ("computedCollapsed" in n ? !!n.computedCollapsed : n.collapsedBecauseCrowdControl ? !e.modModeEnabled : n.collapsed)
				},
				n = (e, t) => {
					let {
						commentId: r
					} = t;
					if (!r) return !1;
					const s = e.features.comments.models[r];
					return !(!s || !s.collapsedBecauseCrowdControl) && e.modModeEnabled
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
				return v
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/lib/safeJSONParse/index.ts"),
				n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/isFakeSubreddit/index.ts"),
				i = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/constants/parameters.ts"),
				c = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = r("./src/reddit/helpers/onboarding/reonboarding.ts"),
				u = r("./src/reddit/selectors/activeModal.ts"),
				l = r("./src/reddit/selectors/emailVerification.ts"),
				b = r("./src/reddit/selectors/experiments/onboarding.ts"),
				p = r("./src/reddit/selectors/experiments/targetedOnboardingSkip.ts"),
				m = r("./src/reddit/selectors/platform.ts"),
				f = r("./src/reddit/selectors/user.ts");
			const O = e => {
					const t = Object(m.r)(e);
					return Boolean((null == t ? void 0 : t[d.G]) && Object(s.a)(t[d.G]))
				},
				g = e => e.onboarding.shouldSkipOnboardingState,
				j = Object(n.a)(f.S, f.R, O, g, e => {
					var t;
					const r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams,
						s = r.subredditName;
					return Object(p.a)(e) !== i.fg.TargetedOnboarding || s && Object(o.a)(s, {
						countryCode: r.countryCode,
						languageCode: r.languageCode
					}) || !Object.keys(r).length
				}, (e, t, r, s, n) => (e || t) && r && !s && n),
				_ = e => {
					const {
						genderUpdateState: t
					} = e.onboarding;
					if (t.success || t.failure) return t
				},
				I = Object(n.a)(b.i, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(i.zg)(e) ? t : null),
				v = Object(n.a)(b.i, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(c.K)(r) || Object(c.L)(r) || Object(c.z)(r)
				}, u.b, l.a, g, (e, t, r, s, n) => e === i.kb.PopoverFeed15 && t && Object(a.c)() && !r && !s && !n)
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
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/user.ts");
			const o = e => !Object(n.S)(e) && e.seo.linksModule.frontpage || null,
				i = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				d = Object(s.a)(o, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: i(e.url)
					})).filter(e => e.title)
				})) : null),
				c = Object(s.a)(d, e => e ? e.map(e => ({
					...e,
					links: e.links.filter(e => e.visible)
				})) : null),
				a = (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = ((e, t) => {
						let {
							subredditId: r
						} = t;
						return e.seo.linksModule.subreddits && e.seo.linksModule.subreddits[r]
					})(e, {
						subredditId: r
					});
					return s && s.subreddits
				}
		},
		"./src/reddit/selectors/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
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
				return v
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "z", (function() {
				return R
			})), r.d(t, "y", (function() {
				return k
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
				return z
			})), r.d(t, "D", (function() {
				return H
			})), r.d(t, "m", (function() {
				return J
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/some.js"),
				n = r.n(s),
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
					return n()(v(e, {
						subredditId: r
					}), e => !!e.action) || n()(y(e, {
						subredditId: r
					}), e => !!e.action)
				},
				v = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.selected.selectedOptions[r] || _
				},
				h = (e, t) => {
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
				A = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditScopedTags[r] || S
				},
				w = (e, t) => {
					const r = i()(t);
					for (let s = 0; s < r.length; s++)
						if (r[s].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[s];
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
				R = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.suggestedItemTags[r] || T
				},
				k = (e, t) => {
					let {
						itemId: r
					} = t;
					return i()(R(e, {
						itemId: r
					})).filter(e => e.isRelevant).map(e => Object(a.e)(e, !0))
				},
				P = (e, t) => {
					let {
						itemId: r
					} = t;
					return e.tags.models.sortedItemTags[r] || []
				},
				D = Object(d.a)((e, t) => {
					let {
						thingId: r,
						suggested: s = !1
					} = t;
					const n = F(e, {
						subredditId: r
					});
					return i()(((e, t) => {
						let {
							thingId: r,
							suggested: s = !1
						} = t;
						const n = (s ? j(e, {
								subredditId: r
							}) : g(e, {
								subredditId: r
							})) ? C(e) : E(e),
							o = s ? h(e, {
								subredditId: r
							}) : v(e, {
								subredditId: r
							}),
							i = n.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return o.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), i)
					})(e, {
						thingId: r,
						suggested: s
					})).filter(e => !e.selected && e.id !== n)
				}),
				G = (e, t) => {
					let {
						subredditId: r
					} = t;
					return v(e, {
						subredditId: r
					}).concat(y(e, {
						subredditId: r
					}))
				},
				U = (e, t) => {
					let {
						subredditId: r
					} = t;
					return v(e, {
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
				z = e => {
					const t = Q(e);
					return M(e, t)
				},
				H = e => e.tags.api.updatePrimaryTag.pending,
				J = (e, t) => {
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
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
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
					var s, n;
					return null === (s = e.features.userFlair[r]) || void 0 === s || !s.displaySettings || !!(null === (n = e.features.userFlair[r].displaySettings) || void 0 === n ? void 0 : n.isEnabled)
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					var s, o;
					return (null === (s = e.features.userFlair[r]) || void 0 === s ? void 0 : s.displaySettings) ? null === (o = e.features.userFlair[r].displaySettings) || void 0 === o ? void 0 : o.position : n.b.Right
				},
				b = Object(s.a)((e, t) => {
					let {
						subredditId: r
					} = t;
					const s = a(e, {
						subredditId: r
					});
					if (s && s.displaySettings && s.permissions) return {
						type: n.d.UserFlair,
						displaySettings: s.displaySettings,
						permissions: s.permissions
					}
				}),
				p = (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = u(e, {
							subredditId: r
						}),
						n = b(e, {
							subredditId: r
						}),
						o = a(e, {
							subredditId: r
						});
					if (!s || !n || !o) return !1;
					if (o.applied) return !0;
					const d = Object(i.g)(e, {
							subredditId: r
						}),
						{
							canUserChange: c
						} = n.permissions;
					return !!(o.templateIds || []).find(e => {
						return !o.templates[e].modOnly || d
					}) && c
				},
				m = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return !1;
					const s = p(e, {
							subredditId: r
						}),
						n = Object(o.f)(e, {
							subredditId: r
						});
					return s || n
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
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/constants/posts.ts"),
				o = r("./src/reddit/helpers/name/index.ts"),
				i = r("./src/reddit/helpers/widgets/index.tsx"),
				d = r("./src/reddit/selectors/profile.ts"),
				c = r("./src/reddit/selectors/subreddit.ts");
			const a = [],
				u = e => e.widgets.models,
				l = Object(s.a)((e, t) => Object(i.l)(t) ? e.widgets.models[t.widgetId] : Object(i.f)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				p = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(c.I)(e, t.subredditName)), r) {
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
						const s = e.widgets.models[r];
						return s && t.push(s.kind), t
					}, []) : a
				},
				j = (e, t) => {
					const r = m(e, t);
					for (const s of r) {
						const t = e.widgets.models[s];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				_ = (e, t) => {
					const r = m(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
					return r.length ? r : null
				},
				I = Object(s.a)((e, t) => {
					if (t.type === n.a.PROFILE) {
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
						s = Object(c.z)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: s ? s.contentCategory : null,
							id: r.id,
							name: Object(o.i)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"6859ffd7b2c4"}')
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
			e.exports = JSON.parse('{"id":"c13bdd22f215"}')
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
			e.exports = JSON.parse('{"id":"3953e56e0f4b"}')
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
			e.exports = JSON.parse('{"id":"5705752dc93f"}')
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
			e.exports = JSON.parse('{"id":"86e75a0e8ea8"}')
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
			e.exports = JSON.parse('{"id":"d5be8eedcb09"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"de8696c3b5fd"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"75d86d72b7b4"}')
		},
		"./src/redditGQL/operations/PopularFeedElements.json": function(e) {
			e.exports = JSON.parse('{"id":"ec12f173c71a"}')
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
			e.exports = JSON.parse('{"id":"97fec841c778"}')
		},
		"./src/redditGQL/operations/SubredditCustomEmojis.json": function(e) {
			e.exports = JSON.parse('{"id":"76faa900e33f"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"f57e867ffec5"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"99a33079240e"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"59a710ebaf82"}')
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
			e.exports = JSON.parse('{"id":"9c8b5b997d96"}')
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
			e.exports = JSON.parse('{"id":"d2c5b12109af"}')
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
			e.exports = JSON.parse('{"id":"ccdee2f3b85a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.99fbc620d4c62538eafb.js.map