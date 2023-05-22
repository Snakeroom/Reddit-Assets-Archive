// https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.1b35f3988b01beb33c5f.js
// Retrieved at 5/22/2023, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"], {
		"./src/lib/name/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/name/index.ts");
			const s = /^u_[\w-]+$/;

			function i(e) {
				return s.test(Object(n.i)(e))
			}

			function o(e) {
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
				i = r("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				o = r("./src/reddit/selectors/countrySites.ts"),
				d = r("./src/reddit/selectors/meta.ts");
			const c = (e, t, r) => {
				const {
					languageCode: c
				} = Object(o.c)(e), a = r || (Object(d.k)(e) || s.DEFAULT_LOCALE), u = Object(n.isPseudoLocale)(a) ? s.DEFAULT_LOCALE : a;
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
				return P
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "f", (function() {
				return G
			})), r.d(t, "i", (function() {
				return F
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
				return oe
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/telemetry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
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
				C = r("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				x = r("./src/reddit/selectors/moderatingComments.ts"),
				A = r("./src/reddit/selectors/moderatorPermissions.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/actions/comment/constants.ts");
			const R = {},
				P = Object(o.a)(L.q),
				w = e => async (t, r, n) => {
					let {
						apiContext: i
					} = n;
					if (!Object(N.S)(r())) return t(Object(u.openRegisterModal)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(S.m)(r(), {
							commentId: e
						})
					}));
					const o = r().features.comments.models[e];
					if (!o) return;
					const d = o.isSaved ? g.m : g.i;
					if (t(P({
							[e]: {
								isSaved: !o.isSaved
							}
						})), (await d(i(), e)).ok) {
						const r = o.isSaved ? s.fbt._("Comment unsaved successfully", null, {
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
							isSaved: o.isSaved
						}
					}))
				}, k = e => `viewing-comment-${e}`, D = n.a.telemetry.commentConsumedThreshold, G = e => async (t, r) => {
					const s = r(),
						o = Object(E.c)(s, {
							commentId: e
						});
					if (!o || Math.random() > n.a.telemetry.commentSampleRate) return;
					I.d({
						state: s,
						commentId: e,
						collapsed: o.collapsed
					}), i.c.start(k(e));
					const d = setTimeout(() => I.a({
						state: s,
						commentId: e,
						collapsed: o.collapsed
					}), D);
					R[e] = d
				}, F = (e, t) => async (r, n) => {
					const s = n(),
						o = k(e);
					if (Object(E.c)(s, {
							commentId: e
						}) && i.c.has(o)) {
						const r = i.c.end(o);
						!t && r < D && (clearTimeout(R[e]), delete R[e])
					}
				}, U = Object(o.a)(L.z), M = Object(o.a)(L.y), q = Object(o.a)(L.x), B = (e, t, r) => async (n, s, i) => {
					let {
						apiContext: o
					} = i;
					const c = s(),
						u = c.moreComments.models[t],
						l = c.platform.currentPage,
						p = l && l.routeMatch,
						f = p && p.match,
						{
							partialPostId: O
						} = f ? f.params : null;
					if (!O) return;
					const _ = Object(h.y)(O);
					n(U({
						moreCommentsId: u.id
					}));
					const I = await Object(g.g)(o(), _, {
						token: u.token
					}, Object(C.a)(c), r);
					if (I.ok) {
						const t = I.body,
							r = Object(j.a)(t, _, c);
						n(M({
							key: e,
							moreCommentsItem: u,
							shouldCollapse: r,
							...t
						}));
						const i = c.posts.models[_];
						let o;
						i && "subreddit" === i.belongsTo.type && t.comments && (o = i.belongsTo.id, await n(Object(d.a)({
							commentIds: Object.keys(I.body.comments),
							postIds: [i.id],
							skip: ["communityDetails", "subscription"],
							subredditId: o
						})), Object(A.i)(c, o) && n(Object(m.c)(_, !0, u.token)));
						const l = I.body.comments;
						await n(a(o, l)), Object(A.h)(s(), {
							subredditId: i.belongsTo.id
						}) && n(Object(b.a)({
							commentIds: Object.keys(t.comments)
						}))
					} else n(q({
						moreCommentsItem: u,
						...I.error
					}))
				}, Q = Object(O.a)(j.b, T.a.upvoted), z = Object(O.a)(j.b, T.a.downvoted), H = Object(o.a)(L.l), K = Object(o.a)(L.k), J = Object(o.a)(L.g), V = Object(o.a)(L.h), $ = (Object(o.a)(L.c), Object(o.a)(L.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const i = s(),
							o = Object(v.i)(t),
							d = Object(S.n)(i, {
								commentLink: o,
								commentsPageKey: r
							}),
							c = Object(x.b)(i, {
								commentId: t,
								commentsPageKey: r
							}),
							a = d.depth;
						e(J({
							commentId: t,
							commentsPageKey: r,
							isCollapsed: c
						})), c || 0 !== a || n(t, !0), Object(p.d)()
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
					return async (e, i) => {
						const o = i(),
							d = Object(j.e)(r, t, n, o),
							c = Object(x.b)(o, {
								commentId: t.id,
								commentsPageKey: r
							});
						e(J({
							commentId: d,
							commentsPageKey: r,
							isCollapsed: c
						})), 0 === n && s(d, !0), Object(p.d)()
					}
				}, X = Object(o.a)(L.t), Z = e => t => t(X({
					draftKey: e
				})), ee = Object(o.a)(L.a), te = Object(o.a)(L.I), re = Object(o.a)(L.b), ne = Object(o.a)(L.w), se = Object(o.a)(L.e), ie = Object(o.a)(L.A), oe = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var i, o;
					if (e) {
						const r = await Object(g.b)(s(), e);
						if (r.ok) {
							const n = r.body;
							"Comment" === (null === (i = n.data.commentById) || void 0 === i ? void 0 : i.__typename) && t(ie({
								commentId: e,
								media: Object(_.b)(null === (o = n.data.commentById) || void 0 === o ? void 0 : o.content)
							}))
						}
					}
				}
		},
		"./src/reddit/actions/communityChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/reducers/features/communityChat/index.ts");
			const o = "COMMUNITY_CHAT__SET_SELECTED_CHANNEL_ID",
				d = "COMMUNITY_CHAT__CHANNELS_LOADED",
				c = "COMMUNITY_CHAT__SET_SHOWN_TOAST_MESSAGE";
			Object(n.a)({
				features: {
					communityChat: i.a
				}
			});
			const a = Object(s.a)(o),
				u = Object(s.a)(d),
				l = Object(s.a)(c)
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
				return o
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				o = "CONTENT_CONTROLS_UPDATED"
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
				i = r.n(s),
				o = r("./src/lib/constants/index.ts"),
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
				C = Object(d.a)(T.a),
				x = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = {
							subredditName: e.toLowerCase()
						},
						d = _.d.hatefulContentFiltersEnabled(r());
					if (Object(v.a)(r(), i)) return;
					t(E(i));
					let a = Object(y.I)(r(), e);
					if (!a) {
						const r = await Object(j.a)(s(), e, !1);
						if (r.ok) {
							a = r.body.data.subreddit.id
						}
						if (!a) {
							const e = r.error || {
								type: o.L.NOT_FOUND_ERROR
							};
							return void t(C({
								...i,
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
							const n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											hatefulContentFilters: {
												hatefulContentThresholdAbuse: p(null == n ? void 0 : n.hatefulContentThresholdAbuse),
												hatefulContentThresholdIdentity: p(null == n ? void 0 : n.hatefulContentThresholdIdentity),
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
						m = e.data.subreddit && e.data.subreddit
					}
					if (m) t(S({
						...i,
						...m
					}));
					else {
						const r = f.error || {
							type: o.L.UNKNOWN_ERROR
						};
						t(C({
							...i,
							error: r
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: f.body,
								responseOk: f.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, A = Object(d.a)(T.d), N = (e, t) => async (r, s, i) => {
					let {
						gqlContext: o
					} = i;
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
								i = !(!s.hatefulContentThresholdAbuse && !s.hatefulContentThresholdIdentity),
								o = {
									subredditId: t,
									permittedTerms: r.hatefulContentFilters.permittedTerms
								},
								d = !!o.permittedTerms;
							n[1] = Object(u.a)(e, {
								...O,
								variables: {
									includeThresholds: i,
									includePermittedTerms: d,
									thresholdInput: s,
									permittedTermsInput: o
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
								const i = null == t ? void 0 : t.fieldErrors,
									o = null == e ? void 0 : e.fieldErrors;
								i && (s = s.concat(i)), o && (s = s.concat(o))
							}
							return {
								ok: n,
								fieldErrors: s.length ? s : null
							}
						})
					})(o(), c, t);
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
					field: i()(e.field)
				}))
		},
		"./src/reddit/actions/discoveryUnit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
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
			var n = r("./src/lib/makeActionCreator/index.ts");
			r("./src/lib/makeListingKey/index.ts"), r("./src/lib/addQueryParams/index.ts"), r("./src/lib/makeApiRequest/index.ts"), r("./src/lib/omitHeaders/index.ts"), r("./src/lib/stringInterpolate/index.ts"), r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var s = r("./src/reddit/selectors/discoveryUnit.ts");
			r("./src/reddit/selectors/listings.ts");
			const i = "DISCOVERY_UNIT__LIST_PENDING",
				o = "DISCOVERY_UNIT__LIST_LOADED",
				d = "DISCOVERY_UNIT__LIST_FAILED",
				c = Object(n.a)(i),
				a = Object(n.a)(o),
				u = Object(n.a)(d),
				l = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const i = t(),
						o = Object(s.d)(i),
						d = Object(s.c)(i);
					if (o || d) return;
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
				return ie
			})), r.d(t, "g", (function() {
				return oe
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
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
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
				O = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = await Object(p.h)(t) || t.type,
						m = f.get(o);
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
					})(i(), {
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
					})(i(), {
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
					redditor: n,
					redditorInfo: s
				} = e;
				var i, o;
				return {
					score: t,
					rank: r,
					redditor: n ? {
						...n,
						icon: null !== (i = n.icon) && void 0 !== i ? i : null,
						profile: null !== (o = n.profile) && void 0 !== o ? o : null
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
			Object(i.a)({
				features: {
					predictions: o.a
				}
			});
			const k = Object(I.a)(w.d),
				D = Object(I.a)(w.c),
				G = Object(I.a)(w.e),
				F = Object(I.a)(w.f),
				U = Object(I.a)(w.i),
				M = Object(I.a)(w.h),
				q = Object(I.a)(w.j),
				B = Object(I.a)(w.p),
				Q = Object(I.a)(w.s),
				z = Object(I.a)(w.o),
				H = Object(I.a)(w.b),
				K = (e, t, r) => async (n, s, i) => {
					let {
						gqlContext: o
					} = i;
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
								predictionWinners: i
							} = await Object(v.i)(o(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: d
							}), c = h(i);
							n(G({
								subredditId: e,
								leaderboard: c
							})), s && (n(re(e, s)), null == s || s.forEach(e => {
								let {
									tournamentId: t,
									winners: r
								} = e;
								n(F({
									tournamentId: t,
									leaderboard: h(r)
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
						gqlContext: i
					} = s;
					const o = Object(L.S)(n());
					if (!Object(A.g)(n(), {
							tournamentId: t
						})) {
						r(U({
							tournamentId: t
						}));
						try {
							const {
								predictionWinners: n
							} = await Object(v.j)(i(), {
								subredditId: e,
								tournamentId: t,
								includeCurrentRank: o
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
					return async (e, i, o) => {
						let {
							gqlContext: d
						} = o;
						const c = await Object(v.p)(d(), {
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
							gqlContext: i
						} = s;
						const o = await Object(v.n)(i(), {
								optionId: t,
								postId: r
							}),
							{
								resolvePrediction: d
							} = o.body.data;
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
					const i = r(),
						o = Object(N.I)(i, e);
					if (Object(P.k)(i, {
							subredditId: o
						})) return Object(P.g)(i, {
						subredditId: o
					});
					t(W({
						subredditId: o
					}));
					const d = await Object(v.k)(s(), {
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
							t(F({
								tournamentId: e.tournamentId,
								leaderboard: r
							}))
						}
					});
					const a = d.map(e => Object(S.a)(e));
					return t(X({
						subredditId: o,
						tournaments: a
					})), t(Y({
						subredditId: o,
						tournaments: a
					})), t(Z({
						posts: c,
						meta: i.meta
					})), a
				}, te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r(),
						o = Object(N.I)(i, e),
						d = await Object(v.l)(s(), {
							subredditName: e,
							isLatestOnly: !0
						});
					t(re(o, d))
				}, re = (e, t) => r => {
					const n = t.map(e => Object(S.a)(e));
					r(Y({
						subredditId: e,
						tournaments: n
					}))
				}, ne = Object(I.a)(w.a), se = Object(I.a)(w.q), ie = Object(I.a)(w.r), oe = (e, t, r, n) => async (s, i, o) => {
					let {
						gqlContext: d
					} = o;
					const c = i(),
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
					const l = await Object(v.e)(d(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: m.Y.Tokens,
							tokenIcon: u
						}),
						b = Object(S.a)(l);
					s(ce(b))
				}, de = (e, t) => async (r, n, i) => {
					let {
						gqlContext: o
					} = i;
					const d = Object(R.b)(n());
					if (!d) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(v.a)(o(), {
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
						gqlContext: i
					} = s;
					const o = await Object(v.o)(i(), {
							tournamentId: e,
							name: r
						}),
						d = Object(S.a)(o);
					t(ce(d))
				}, ue = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(v.f)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: o
						} = i.body.data;
					if (!o.tournament) throw new Error("Failed to update prediction name");
					return t(ce(o.tournament)), o.tournament
				}, le = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(v.g)(s(), {
						postId: e
					});
					if (!i.ok || i.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: o
					} = i.body.data;
					if (!o.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return o.predictionChipPackages
				}, be = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = await Object(v.h)(s(), {
						tournamentId: e
					});
					if (!i.ok || i.error) throw new Error("Failed to fetch token balance");
					const {
						identity: o
					} = i.body.data;
					if (!o.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return o.predictionTokens
				}, pe = e => {
					let {
						coinPackageId: t,
						selectedOptionId: r,
						price: n,
						pollId: s,
						tournamentId: i,
						tournamentPostId: o
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
							tournamentId: i,
							tournamentPostId: o
						})), d
					}
				}, me = e => async (t, r) => {
					const n = r();
					Object(L.S)(n) ? await t(Object(C.h)(x.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(E.openLoginModal)())
				}, fe = () => Object(C.g)(x.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Oe = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					try {
						const r = await Object(v.b)(i(), {
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
						gqlContext: i
					} = s;
					const o = await Object(v.c)(i(), {
						postId: e,
						...t
					});
					return r(H({
						postId: e,
						prediction: o
					})), o
				}
			}
			const je = e => async (t, r, n) => {
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
				return M
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "m", (function() {
				return J
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
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
				E = Object(s.a)(I),
				C = Object(s.a)(v),
				x = Object(s.a)(h),
				A = Object(s.a)(y),
				N = Object(s.a)(T),
				L = Object(s.a)(S),
				R = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = r(),
						o = Object(_.m)(i),
						d = e || o && Object(f.e)(o);
					if (!d) return;
					if (Object(O.d)(i, {
							username: d
						})) return;
					t(E(d));
					const m = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.pb.GET
					}))(s(), d);
					if (m.ok) {
						const e = p(m.body);
						t(C({
							username: d,
							accountsData: e
						}))
					} else t(x(m.error))
				}, P = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t(),
						i = Object(g.d)(s);
					if (!i) return;
					const o = s.externalAccount.api.subreddit.fetched[i],
						d = s.externalAccount.api.subreddit.pending[i];
					if (o || d) return;
					const m = Object(j.z)(s, {
						subredditName: i
					});
					if (!(m && m.hasExternalAccount)) return;
					e(A(i));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.pb.GET
					}))(n(), i);
					if (f.ok) {
						const t = p(f.body);
						e(N({
							subredditName: i,
							accountsData: t
						}))
					} else e(L(f.error))
				}, w = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", k = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", D = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", G = Object(s.a)(w), F = Object(s.a)(k), U = Object(s.a)(D), M = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(G({
						provider: e
					}));
					const i = Object(_.m)(r()),
						o = Object(f.e)(i),
						d = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.pb.POST
						}))(s(), e);
					d.ok ? t(F({
						provider: e,
						username: o
					})) : t(U({
						provider: e,
						error: d.error
					}))
				}, q = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", z = Object(s.a)(q), H = Object(s.a)(B), K = Object(s.a)(Q), J = e => async (t, r, s) => {
					let {
						apiContext: p
					} = s;
					t(z({
						provider: e
					}));
					const f = Object(i.a)(window.location.href, {
							[d.e]: e
						}),
						O = await ((e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: c.pb.POST,
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
					} else t(K({
						provider: e,
						error: O.error
					})), t(Object(o.f)({
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
				return p
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
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
					return async (r, s, o) => {
						let {
							gqlContext: d
						} = o;
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
								const i = m(s.subredditInfoById);
								f(r, e, i)
							} catch (u) {
								i.c.captureException(u), await r(_(n.fbt._("Something went wrong", null, {
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
				O = Object(s.a)(b.hb),
				g = Object(s.a)(b.gb),
				j = Object(s.a)(b.fb),
				_ = e => async t => {
					await t(j(e)), t(Object(o.f)({
						kind: u.b.Error,
						duration: o.a,
						text: e
					}))
				}
		},
		"./src/reddit/actions/gold/customEmojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/gold/constants.ts"),
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
			const p = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, s, o) => {
						let {
							gqlContext: d
						} = o;
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
								const i = m(s.subredditInfoById);
								f(r, e, i)
							} catch (a) {
								i.c.captureException(a), await r(_(n.fbt._("Something went wrong", null, {
									hk: "1IJNeH"
								})))
							}
						}
					}
				},
				m = e => {
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
				O = Object(s.a)(o.kb),
				g = Object(s.a)(o.jb),
				j = Object(s.a)(o.ib),
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
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
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
					if (t(f(e)), Object(n.isPseudoLocale)(e) ? (Object(u.P)(b) || Object(a.b)(b)) && (m = e) : m = Object(n.isoLocaleToR2Language)(e), !m) return;
					const O = new URL(window.location.href);
					Object(u.S)(b) ? Object(n.isPseudoLocale)(m) ? O.searchParams.set("locale", m) : (await Object(o.a)(Object(d.a)(p, [c.a]), {
						data: {
							lang: m
						},
						endpoint: `${p.apiUrl}/api/v1/me/prefs`,
						method: s.pb.PATCH,
						type: "json"
					}), O.searchParams.delete("locale")) : O.searchParams.delete("locale"), window.location.href = O.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(i.a)(g), _ = "META__PWA_ENTERED", I = "META__PWA_LEFT", v = Object(i.a)(_), h = Object(i.a)(I)
		},
		"./src/reddit/actions/modQueueTriggers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/actions/comment/index.ts"),
				s = r("./src/reddit/actions/post.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/ModQueueTriggers.json");
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
					const b = await ((e, t) => Object(i.a)(e, {
						...o,
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
				o = r("./src/reddit/helpers/counters/onboarding.ts"),
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
					const t = Object(a.j)(r);
					Object(o.b)(c.f.FirstPopover, t)
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
				return k
			})), r.d(t, "PAGE_LOADED", (function() {
				return D
			})), r.d(t, "PAGE_FAILED", (function() {
				return G
			})), r.d(t, "pagePending", (function() {
				return F
			})), r.d(t, "pageLoaded", (function() {
				return U
			})), r.d(t, "pageFailed", (function() {
				return M
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return B
			})), r.d(t, "postCreationPageRequested", (function() {
				return Q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/filterQueryParams/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makePostCreationPageKey/index.ts"),
				c = r("./src/lib/pageTitle/index.ts"),
				a = r("./src/reddit/actions/contentControls/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/externalAccount.ts"),
				b = r("./src/reddit/actions/platform.ts"),
				p = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/postCreation/general.ts"),
				f = r("./src/reddit/actions/postGuidance/index.ts"),
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
				C = r("./src/reddit/selectors/experiments/postGuidance.ts"),
				x = r("./src/reddit/selectors/postCollection.ts"),
				A = r("./src/reddit/selectors/postCreations.ts"),
				N = r("./src/reddit/selectors/posts.ts"),
				L = r("./src/reddit/selectors/profile.ts"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/selectors/user.ts");
			const w = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, s = Object(R.C)(e, {
							subredditName: n
						});
						s && (r = s.name)
					}
					return Object(c.o)(r)
				},
				k = "POST_CREATION__PAGE_PENDING",
				D = "POST_CREATION__PAGE_LOADED",
				G = "POST_CREATION__PAGE_FAILED",
				F = Object(o.a)(k),
				U = Object(o.a)(D),
				M = Object(o.a)(G),
				q = () => async (e, t) => {
					const r = t(),
						n = Object(A.a)(r);
					n !== Object(A.rb)(r) && e(Object(m.g)({
						submissionType: n
					}))
				}, B = e => async (t, r, n) => {
					const {
						collectionId: s,
						profileName: o,
						subredditName: c
					} = e, u = Object(d.a)(e), b = r(), p = b.creations.api.page.pending[u], m = b.creations.api.page.fetched[u], j = b.creations.api.page.error[u];
					if (p) return;
					if (m && !j) return void t(q());
					const y = [];
					t(F({
						key: u
					}));
					let x = c;
					!c && o && (x = `u_${o}`), y.push(((e, t) => Object(v.a)(e, {
						method: I.pb.GET,
						endpoint: Object(h.a)(`${_.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: x,
						collectionId: s
					})), o && (y.push(t(O.d(o))), y.push(t(O.b(o))));
					const [A] = await Object(T.a)("postCreation", () => Promise.all(y));
					if (A.ok) {
						const e = A.body,
							{
								posts: n = {}
							} = e;
						if (t(U({
								key: u,
								meta: b.meta,
								...e,
								posts: n
							})), !Object(P.S)(r())) return;
						t(q());
						const s = [];
						s.push(t(l.o()));
						const o = Object(P.m)(r());
						if (o && o.hasUserProfile && s.push(t(O.d(Object(S.e)(o)))), c && !Object(i.a)(c)) {
							s.push(t(g.o(c))), !!Object(E.b)(r(), {
								subredditName: c
							}) || s.push(t(Object(a.a)(c))), Object(C.a)(b) && s.push(t(Object(f.a)(c)))
						}
						await Promise.all(s)
					} else t(M({
						error: A.error,
						key: u
					}))
				}, Q = e => async (t, r) => {
					const {
						subredditName: i,
						profileName: o
					} = e.params, d = e.queryParams, c = d.collection;
					if (await t(B({
							collectionId: c,
							profileName: o,
							subredditName: i
						})), !Object(P.S)(r())) return void Object(y.a)(t, r());
					let a;
					if (i ? (a = Object(R.C)(r(), {
							subredditName: i
						}), await t(Object(u.a)({
							subredditName: i
						}))) : o && (a = Object(L.k)(r(), {
							profileName: o
						})), d.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: i
						} = e, o = [];
						let d;
						s ? d = Object(R.I)(n(), s) : i && (d = Object(P.ob)(n(), {
							userName: i
						})), d && o.push(r(Object(j.b)(d, t))), o.push(r(Object(p.P)(t))), await Promise.all(o);
						const c = Object(N.f)(n(), {
							postId: t
						});
						r(Object(m.m)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, d.source_id));
					else if (c) {
						const i = Object(x.q)(r(), {
							collectionId: c
						});
						a && i && i.subredditId === a.id || t(Object(n.c)(Object(s.a)(e.url, ["collection"])))
					}
					t(b.n({
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
				o = r("./src/config.ts"),
				d = r("./src/lib/constants/index.ts"),
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
					} = e, f = Object(s.a)(e), O = r(), _ = O.creations.api.page.pending[f], I = O.creations.api.page.fetched[f], v = O.creations.api.page.error[f];
					if (_ || I && !v || !p) return;
					t(i.d(m));
					const h = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${o.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: d.pb.GET
					}))(n.apiContext(), p, m));
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
				}, I = e => async (t, r, n) => {
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
				return Gt
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeRequest/index.ts"),
				i = r("./node_modules/lodash/find.js"),
				o = r.n(i),
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
				G = r("./src/reddit/actions/seo/topicLinks.ts"),
				F = r("./src/lib/makeGqlRequest/index.ts"),
				U = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				M = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				q = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				B = r("./src/reddit/selectors/widgets.ts");
			const Q = (e, t) => async (r, n) => {
				const s = n(),
					i = Object(q.X)(s, {
						subredditId: e
					}),
					o = Object(B.j)(s, {
						subredditId: e
					});
				i.isNSFW || (null == o ? void 0 : o.length) > 0 && o.some(e => "community-list" === e) || r(Object(D.e)({
					id: e,
					data: t
				}))
			}, z = (e, t) => async r => {
				t && r(Object(G.b)({
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
				const i = s.name,
					o = Object(Z.m)(n),
					d = Object(q.z)(n, {
						subredditName: i
					});
				if (!d) return;
				const {
					activity7Day: c
				} = d, u = !!c && c >= 51 && c <= 100, l = !i || Object(p.a)(i), b = o && o.urlParams.subredditName === i, m = Object(ee.S)(n), f = Object(X.c)(n, {
					subredditId: Object(q.I)(n, i)
				});
				if (l || b || Object(V.I)() || !u || !m || f) return;
				const O = Object(B.d)(t(), {
					subredditName: i
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(J.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${i}${Y.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: W.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(V.Kb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${i} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var re = r("./src/reddit/actions/subreddit/questions.ts"),
				ne = r("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				se = r("./src/reddit/actions/subredditSettings.ts"),
				ie = r("./src/reddit/actions/tags/index.ts"),
				oe = r("./src/reddit/actions/userFlair/userFlair.ts"),
				de = r("./src/reddit/constants/history.ts"),
				ce = r("./src/reddit/constants/page.ts"),
				ae = r("./src/reddit/constants/parameters.ts"),
				ue = r("./src/reddit/constants/postLayout.ts"),
				le = r("./src/reddit/contexts/PageLayer/index.tsx"),
				be = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				pe = r("./src/reddit/endpoints/governance/posts.ts"),
				me = r("./src/reddit/endpoints/page/subredditPage.ts"),
				fe = r("./src/lib/base64/index.ts"),
				Oe = r("./src/reddit/constants/experiments.ts"),
				ge = r("./src/reddit/constants/graphql.ts"),
				je = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				_e = r("./src/reddit/selectors/adsSignals.ts"),
				Ie = r("./src/reddit/selectors/experiments/communityChat.ts"),
				ve = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				he = r("./src/reddit/selectors/experiments/onboarding.ts"),
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
				Ge = r("./src/reddit/models/RichTextJson/index.ts"),
				Fe = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Ue = r("./src/reddit/selectors/communityFlairs.ts"),
				Me = r("./src/reddit/selectors/experiments/countrySites.ts"),
				qe = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
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
				it = r.n(st);
			const ot = new Set(["authorFlair.cssClass", "posts.adSupplementaryText", "posts.allAwardings", "posts.approvedAtUTC", "posts.approvedBy", "posts.attributionInfo", "posts.audioRoom", "posts.bannedAtUTC", "posts.bannedBy", "posts.collapsedBecauseCrowdControl", "posts.ignoreReports", "posts.isApproved", "posts.isAuthorPremium", "posts.isEligibleForLinkedPosts", "posts.isEligibleForQASchema", "posts.isFollowed", "posts.isPinned", "posts.isReactAllowed", "posts.isRemoved", "posts.isSpam", "posts.lastAuthorModNote", "posts.modQueueTriggers", "posts.modReportsDismissed", "posts.pollData", "posts.predictionTournament", "posts.previewComments", "posts.modReports", "posts.numReports", "posts.reactedFrom", "posts.removedBy", "posts.removedByCategory", "posts.topAwardedType", "posts.userReports", "posts.userReportsDismissed", "posts.modReasonBy", "subreddits.answerableQuestions", "subreddits.freeFormReports", "subreddits.isSubscribed", "authorFlair.richtext", "authorFlair.text", "posts.collectionIds", "posts.liveCommentsWebsocket", "posts.thumbnail.url", "posts.discussionType", "posts.eventsOnRender", "posts.flair", "posts.gildings", "posts.media", "posts.goldCount", "posts.sendReplies", "posts.score", "posts.sendReplies", "posts.source.url", "posts.source.outboundUrl", "posts.source.outboundUrlCreated", "posts.source.outboundUrlExpiration", "profiles.acceptFollowers", "profiles.communityIcon", "profiles.icon.url", "posts.upvoteRatio", "subreddits.acceptFollowers", "subreddits.allowChatPostCreation", "subreddits.communityIcon", "subreddits.icon.url", "subreddits.isChatPostFeatureEnabled", "subreddits.primaryColor", "subreddits.subscribers"]),
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
					Object.keys(e).forEach(i => {
						if (!r.has(i)) {
							const o = e[i] || {},
								d = t[i] || {};
							n[i] = {}, s[i] = 0, Object.keys(o).forEach(e => {
								const t = o[e],
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
											k: i,
											key: t
										}),
										normalize: (e, t, r, n) => r || n ? [r, n] : [r, r]
									});
								s[i] = a ? s[i] + a.length : (null == s ? void 0 : s[i]) || 0, a && (n[i][e] = {
									gatewayThing: t,
									gqlThing: c,
									diffResult: a
								})
							})
						}
					});
					const i = Object.keys(s).reduce((e, t) => e += s[t], 0);
					return {
						allDiffs: n,
						issueCounts: s,
						totalIssues: i
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
			var pt = r("./src/reddit/helpers/locales.ts"),
				mt = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				ft = r("./src/reddit/selectors/experiments/popularGqlMigration.ts"),
				Ot = r("./node_modules/reselect/es/index.js"),
				gt = r("./src/reddit/helpers/chooseVariant/index.ts");
			const jt = Object(Ot.a)(e => Object(gt.c)(e, {
				experimentEligibilitySelector: gt.a,
				experimentName: Oe.uc
			}), e => e === Oe.Td);
			var _t = r("./src/reddit/selectors/features/communityChat/index.ts"),
				It = r("./src/reddit/selectors/meta.ts");

			function vt(e) {
				return Boolean(e && e.subredditInfoByName)
			}
			Object($e.a)({
				features: {
					modUserNotes: We.a
				}
			});
			const ht = (e, t, r) => async (n, s, i) => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: s,
							reason: i
						}
					} = e, o = s ? s.account : void 0, d = s && s.features || void 0, c = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (i === $.f.NotFoundSubreddit) n(y.u({
							account: o,
							features: d,
							subredditName: c
						}));
						else if (i === $.f.BannedSubreddit) {
						const e = s.banTitle || (null == r ? void 0 : r.banTitle),
							t = s.banMessage || (null == r ? void 0 : r.banMessage);
						n(y.s({
							banMessage: t,
							banTitle: e,
							account: o,
							features: d,
							subredditName: c
						}))
					}
					if (451 === e.status && n(y.t({
							account: o,
							features: d,
							subredditName: c
						})), 403 === e.status)
						if (i === $.f.GoldSubreddit) n(y.x({
							account: o,
							features: d,
							subredditName: c
						}));
						else if (i === $.f.PrivateSubreddit) n(y.y({
						account: o,
						features: d,
						subredditDescription: s.description || "",
						subredditName: c,
						isContributorRequestsDisabled: !!s.isContributorRequestsDisabled,
						isContributorRequestTimestamp: s.isContributorRequestTimestamp ? parseInt(s.isContributorRequestTimestamp, 10) : void 0,
						subredditId: s.id
					}));
					else if (i === $.f.QuarantinedSubreddit) {
						const e = !s || void 0 === s.quarantineRequiresEmailOptin || s.quarantineRequiresEmailOptin;
						n(y.A({
							account: o,
							features: d,
							subredditName: c,
							quarantineRequiresEmail: e,
							quarantineMessage: s.quarantineMessage,
							quarantineMessageHtml: s.quarantineMessageHtml || "",
							quarantineMessageRTJson: s.quarantineMessageRTJson || Ge.i
						}))
					} else if (i === $.f.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: r
						} = s;
						n(y.w({
							account: o,
							features: d,
							subredditName: c,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: r
						}))
					}
				}
			}, yt = "PAGE__SUBREDDIT_PENDING", Tt = "PAGE__SUBREDDIT_LOADED", St = "PAGE__SUBREDDIT_FAILED", Et = Object(m.a)(yt), Ct = Object(m.a)(Tt), xt = Object(m.a)(St), At = async e => {
				let {
					subredditName: t,
					subredditsResponse: r,
					extraArgs: n,
					state: s,
					isPopular: i,
					isInGqlSubredditExperiment: o,
					isInDevPlatformExperiment: d
				} = e;
				if (!r || o) return r;
				const c = {
						...r
					},
					a = i ? null : Object(Pe.a)(n.gqlContext, c.posts),
					u = Object(tt.a)(n.apiContext(), c.posts, s),
					l = d ? Object(et.a)(n.gqlContext(), {
						subredditName: t
					}) : null;
				let b, p, m;
				if ([b, p, m] = await Promise.all([a, u, l]), b && (c.posts = b), p && (c.posts = p), m) {
					const e = Nt(c.subreddits, t);
					e && c.subreddits[e] && (c.subreddits[e].devPlatformMetadata = m)
				}
				return c
			}, Nt = (e, t) => {
				var r;
				return null === (r = o()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
			}, Lt = (e, t, r, i) => async (o, d, c) => {
				var a, l, b, m, f, O, g, j, y, T, R, w, D, G, B, H, V, Y, X, te, ce, ae, Se, Ee, Ce, xe, Pe, De, Ge, Ue;
				const Be = d(),
					Qe = Object(ee.R)(Be) || Object(ee.S)(Be);
				if (Object(I.a)(Be.listings.postOrder.api.pending, e)) return;
				const Ke = null === (l = null === (a = Object(Z.b)(Be)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
					{
						currentPage: Je
					} = Be.platform,
					{
						countryCode: $e,
						languageCode: We
					} = (null == Je ? void 0 : Je.urlParams) || {},
					Ze = Object(p.a)(t, {
						countryCode: $e,
						languageCode: We
					}),
					et = Object(p.c)(t, {
						countryCode: $e,
						languageCode: We
					}),
					tt = (Object(p.b)(t, {
						countryCode: $e,
						languageCode: We
					}) || et) && Be.posts.recent.length ? {
						...r,
						recentPostIds: Be.posts.recent
					} : r;
				tt.layout = ue.e[Object(le.U)(Be, {})], et && (tt.forceGeopopular = !0), o(Et({
					key: e
				}));
				const st = !Ze && Object(Z.l)(Be) && Object(qe.b)(Be),
					ct = et && (Object(ft.a)(Be) || Object(ft.b)(Be)),
					at = et && jt(Be);
				let ut, Ot;
				if ((ct || at) && (ut = Object(_.i)(() => Object(Ve.a)(c.gqlContext(), Object(me.c)(Be, t, tt, !0)), {
						name: st ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ke,
						isLoggedIn: Qe
					})), ct) Ot = ut;
				else if (r.sort === u.cb.AWARDED && et) Ot = Object(be.a)(c.gqlContext(), {
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
					const e = st ? () => Object(me.b)(c.gqlContext(), Object(me.c)(Be, t, tt, !0), Qe) : () => Object(me.a)(c.apiContext(), t, tt);
					Ot = Object(_.i)(e, {
						name: st ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ke,
						isLoggedIn: Qe
					})
				}
				const gt = Object(q.W)(d(), {
						subredditId: Object(q.I)(d(), t)
					}).length > 0,
					_t = Object(_.i)(() => (async function(e, t) {
						return Object(F.a)(e, {
							...ye,
							variables: t
						})
					})(c.gqlContext(), ((e, t) => {
						let {
							after: r,
							isMobile: n,
							subredditName: s,
							isFake: i,
							isLoggedIn: o,
							layout: d,
							limit: c,
							hasRules: a,
							sort: u,
							t: l
						} = t;
						var b, p;
						const m = Object(he.j)(e),
							f = !!m && !Object(Oe.wg)(m) && (i || m === Oe.pb.Community),
							{
								adsSeenCount: O,
								totalPostsSeenCount: g,
								sessionStartTime: j
							} = Object(_e.a)(e),
							_ = Object(ve.c)(e),
							I = Object(Ie.b)(e) || Object(Ie.a)(e),
							v = {
								subredditName: s,
								isFake: i,
								sort: u,
								adContext: {
									layout: d ? d.toUpperCase() : ge.a.Card,
									clientSignalSessionData: {
										adsSeenCount: O,
										totalPostsSeenCount: g,
										sessionStartTime: j
									}
								},
								includeAchievementFlairs: !i,
								includeCustomEmojis: !i,
								includeIdentity: o,
								includeInterestTopics: f,
								includeQuestions: o && !i,
								includeRules: !i && !a,
								includeRedditorKarma: o && !(null === (p = null === (b = e.user.account) || void 0 === b ? void 0 : b.karma) || void 0 === p ? void 0 : p.total),
								includeSubredditLinks: !o,
								includeSubredditRankings: _,
								includeSubredditChannels: I,
								includeTopicLinks: !o
							};
						return u && (v.sort = u.toUpperCase()), l && (v.range = l.toUpperCase()), n ? v.pageSize = Object(je.a)(d) : c && (v.pageSize = c), r && (v.after = Object(fe.a)(r)), v
					})(Be, {
						after: r.after,
						isLoggedIn: Qe,
						subredditName: t,
						hasRules: gt,
						isFake: Ze,
						isMobile: r.isMobile,
						layout: r.layout,
						limit: r.limit,
						sort: r.sort,
						t: r.t
					})), {
						name: "fetchSubredditPageExtra",
						page: Ke,
						isLoggedIn: Qe
					}),
					yt = Object(Ye.a)();
				let Tt, St;
				st ? Tt = await Ot : [Tt, St] = await Promise.all([Ot, _t]);
				const Rt = St && Object(s.c)(St) ? St.body.data : null;
				if (at) {
					const e = await ut;
					! function(e) {
						let {
							gatewayResponse: t,
							normalizedGqlResponse: r,
							rawGqlResponse: n,
							ignorePaths: s = ot,
							normalizeFunction: i
						} = e;
						const o = it()(t),
							d = it()(r);
						if (Object(nt.a)()) {
							console.group("GQL Popular Shadowtest"), console.groupCollapsed("raw gql response"), console.log(n), console.groupEnd(), console.groupCollapsed("normalized gql response"), console.log(r), console.groupEnd(), console.groupCollapsed("gateway response"), console.log(t), console.groupEnd();
							const e = bt({
									gatewayResponse: o,
									normalizedGqlResponse: d,
									ignorePaths: s,
									normalizeFunction: i
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
								gatewayResponse: o,
								normalizedGqlResponse: d,
								ignorePaths: s,
								normalizeFunction: i
							});
							rt.l(t => {
								t.setExtra("info", e), t.setExtra("bypassSampling", !0), rt.d("GQL Popular Shadowtest Diff")
							})
						}
					}({
						gatewayResponse: Tt.body,
						normalizedGqlResponse: e.body,
						rawGqlResponse: e,
						ignorePaths: dt,
						normalizeFunction: lt
					})
				}
				let Pt = Tt.body;
				const wt = (null == Pt ? void 0 : Pt.subreddits) ? Nt(Pt.subreddits, t) : null,
					kt = Object(mt.a)(Be);
				Pt = await At({
					subredditName: t,
					subredditsResponse: Pt,
					isInGqlSubredditExperiment: st,
					extraArgs: c,
					isPopular: et,
					state: Be,
					isInDevPlatformExperiment: kt
				}), o(k.o(Tt.status));
				const Dt = `error-${e}`,
					Gt = Ze || wt;
				if (Tt.ok && Gt || et && Pt) {
					if ((et || !Ze && wt) && Pt.geoFilter && o(Object(N.k)(Pt.geoFilter)), !Ze && wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e, t;
						e = st ? Pt : Object(x.b)(null == Rt ? void 0 : Rt.subredditInfoByName), Object(x.a)(o, wt, e), t = st ? Pt : Object(A.b)(null == Rt ? void 0 : Rt.subredditInfoByName), Object(A.a)(o, wt, t);
						const r = (null === (m = null === (b = null == Pt ? void 0 : Pt.subredditAboutInfo) || void 0 === b ? void 0 : b[wt]) || void 0 === m ? void 0 : m.detectedLanguage) || (null === (f = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === f ? void 0 : f.detectedLanguage);
						Object(It.d)(Be) && r && Object(Me.f)(Be) && await Object(pt.a)(r, o), Pt.subredditAboutInfo[wt].detectedLanguage = r, st ? o(Object(E.n)(wt, Pt.predictionTournaments || [])) : (null == Rt ? void 0 : Rt.subredditInfoByName) && o(Object(E.n)(wt, Rt.subredditInfoByName.predictionTournaments || []))
					}
					let n;
					const s = null === (O = Pt.postIds) || void 0 === O ? void 0 : O.filter(e => !!Pt.posts[e].isMeta);
					if (s && s.length && wt) {
						const e = Object(_.i)(() => Object(pe.a)(c.apiContext(), wt, s), {
								name: "getGovernanceData",
								page: Ke,
								isLoggedIn: Qe
							}),
							t = await e;
						t.ok && (n = t.body)
					}
					if (wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						const e = (null === (j = null === (g = null == Pt ? void 0 : Pt.subredditAboutInfo) || void 0 === g ? void 0 : g[wt]) || void 0 === j ? void 0 : j.isEligibleForContentBlocking) || (null === (y = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === y ? void 0 : y.isEligibleForContentBlocking);
						Pt.subredditAboutInfo[wt].isEligibleForContentBlocking = e;
						const t = (null === (R = null === (T = null == Pt ? void 0 : Pt.subredditAboutInfo) || void 0 === T ? void 0 : T[wt]) || void 0 === R ? void 0 : R.isMediaInCommentsSettingShown) || (null === (w = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === w ? void 0 : w.isMediaInCommentsSettingShown);
						Pt.subredditAboutInfo[wt].isMediaInCommentsSettingShown = t;
						const r = st ? null : null === (D = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === D ? void 0 : D.directoryRankings;
						r && (Pt.subredditAboutInfo[wt].directoryRankings = r)
					}
					if (wt) {
						const e = () => {
								var e;
								if (!Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
									const t = null === (e = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === e ? void 0 : e.channels;
									if (t) return Object(Ne.a)(t)
								}
								return {
									channels: {},
									channelIds: []
								}
							},
							{
								channels: t,
								channelIds: r
							} = st ? Pt : e();
						t && r && o(Object(Xe.d)({
							subredditId: wt,
							channels: t,
							channelIds: r
						}))
					}
					if (Rt) {
						const e = null === (B = null === (G = Rt.identity) || void 0 === G ? void 0 : G.redditor) || void 0 === B ? void 0 : B.karma,
							t = {
								karma: {
									...(null === (H = Be.user.account) || void 0 === H ? void 0 : H.karma) || Te.a,
									...e
								}
							};
						Pt.account && Object.assign(Pt.account, t)
					}
					if (wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e;
						st ? e = null === (V = Pt.subredditAboutInfo[wt]) || void 0 === V ? void 0 : V.notificationLevel : vt(Rt) && (e = null === (Y = Rt.subredditInfoByName) || void 0 === Y ? void 0 : Y.notificationLevel), Pt.subredditAboutInfo[wt].notificationLevel = e
					}
					if (wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e;
						vt(Rt) && (e = null === (X = Rt.subredditInfoByName) || void 0 === X ? void 0 : X.isMuted), st && (e = null === (te = Pt.subredditAboutInfo[wt]) || void 0 === te ? void 0 : te.isMuted), Pt.subredditAboutInfo[wt].isMuted = e
					}
					const a = null === (ce = Pt.subredditPermissions) || void 0 === ce ? void 0 : ce.posts;
					!st && a && o(Object(L.a)({
						postIds: Pt.postIds
					}));
					let u = null == Pt ? void 0 : Pt.interestTopicRecommendations;
					if (!u && (null == Rt ? void 0 : Rt.interestTopics)) {
						const e = Object(Le.a)(Rt.interestTopics);
						e.topics.length && (u = {
							interests: e,
							index: 5
						})
					}
					u && o(Object(P.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), o(Ct({
						key: e,
						meta: Be.meta,
						governance: n,
						correlationId: yt,
						...Pt,
						postIds: Pt.postIds
					}));
					const l = null === (Se = null === (ae = Object(Z.b)(Be)) || void 0 === ae ? void 0 : ae.locationState) || void 0 === Se ? void 0 : Se[de.b.FeedLoadReason];
					if (Object(ke.b)(r.isRefresh ? de.a.UserRefresh : null != l ? l : de.a.InitialLoad)(d()), !Ze) {
						const e = Object(q.I)(d(), t);
						st && Pt.subredditRules ? o(K.t({
							rules: {
								rules: Pt.subredditRules
							},
							subredditId: e
						})) : (null === (Ee = null == Rt ? void 0 : Rt.subreddit) || void 0 === Ee ? void 0 : Ee.rules) && o(K.t({
							rules: Object(Re.a)(Rt.subreddit.rules),
							subredditId: e
						}));
						const r = Object(He.g)(d(), {
								subredditId: e
							}),
							n = null === (Ce = null == Pt ? void 0 : Pt.userFlair) || void 0 === Ce ? void 0 : Ce[e];
						st && e && (r || (null == n ? void 0 : n.applied) || (null === (xe = null == n ? void 0 : n.permissions) || void 0 === xe ? void 0 : xe.canUserChange)) && o(Object(oe.fetchUserFlairFromGql)(e, t));
						const s = Object(h.c)(Pt.posts, e),
							i = Object(h.b)(Pt.structuredStyles),
							c = (i ? Object(h.d)(i) : []).concat(s);
						o(Object(h.a)(c, e))
					}
					if (i && o(J.g(Dt)), o(Object(v.b)(Fe.a.SUBREDDIT)), o(Object(C.p)()), wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e, r, n;
						if (st ? (e = Pt.questions, r = Pt.subredditLinks, n = Pt.subredditTopicLinks) : (e = null == Rt ? void 0 : Rt.subredditInfoByName, r = Object(U.a)({
								data: {
									subredditInfoById: null == Rt ? void 0 : Rt.subredditInfoByName
								}
							}), n = Object(M.a)({
								data: {
									subredditInfoById: null == Rt ? void 0 : Rt.subredditInfoByName
								}
							})), Object(re.a)(o, wt, e), o(Q(wt, r)), o(z(wt, n)), !st && (null === (De = null === (Pe = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === Pe ? void 0 : Pe.elements) || void 0 === De ? void 0 : De.edges)) {
							const e = (null === (Ue = null === (Ge = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === Ge ? void 0 : Ge.elements) || void 0 === Ue ? void 0 : Ue.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							o(Object(ne.e)({
								subredditId: wt,
								nodes: e
							}))
						} else if (st && (null == Pt ? void 0 : Pt.postIds)) {
							const e = Pt.postIds.map(e => null == Pt ? void 0 : Pt.posts[e].lastAuthorModNote);
							e && o(Object(ne.e)({
								subredditId: wt,
								nodes: e
							}))
						}
						const s = [Object(_.i)(() => o(Object(S.a)({
							subredditId: wt,
							postIds: Pt.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: Ke,
							isLoggedIn: Qe
						})];
						if (Object(ze.a)(d(), {
								subredditId: wt
							})) {
							const e = Object(_.i)(() => o(Object(se.h)(t, wt)), {
									name: "subredditSettingsRequested",
									isLoggedIn: Qe,
									page: Ke
								}),
								r = Object(_.i)(() => o(Object(ie.g)(wt, we.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: Qe,
									page: Ke
								});
							s.push(e, r)
						}
						await Promise.all(s)
					}
				} else {
					const s = Tt.ok ? void 0 : Tt.error;
					if (Object(ke.a)(s ? `${Tt.status||"000"}: ${s.type}` : "000: UNKNOWN_ERROR")(d()), 403 === Tt.status || 404 === Tt.status || 451 === Tt.status) return void(Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName) ? o(ht(Tt, t, null == Rt ? void 0 : Rt.subredditInfoByName)) : o(ht(Tt, t)));
					o(xt({
						error: !Tt.ok && Tt.error || {
							type: u.L.NOT_FOUND_ERROR
						},
						key: e,
						...Pt
					})), i && o(J.f({
						id: Dt,
						kind: W.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: Lt(e, t, r, i)
					}))
				}
			}, Rt = (e, t, r) => async (n, s) => {
				const i = s(),
					o = Object(f.a)(e, t.sort, t);
				Object(Je.y)(i, {
					listingKey: o
				}).length > 0 || await n(Lt(o, e, t, r))
			}, Pt = (e, t, r, n) => {
				const s = Object(Me.b)(e);
				if (Object(p.a)(t, {
						countryCode: r,
						languageCode: n
					})) {
					if (Object(b.a)(t)) {
						return Object(Ke.a)(e, {
							listingName: t
						}).displayText
					}
					if (s) return Object(j.a)(e, Object(g.f)(t.toLowerCase()));
					switch (t.toLowerCase()) {
						case ce.d.Popular:
							return "r/popular";
						case ce.d.All:
							return "r/all"
					}
				}
				const i = Object(q.ab)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(q.z)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(j.a)(e, i, n)
				}
				return i
			}, wt = (e, t, r, n) => n ? Object(O.b)(e.subredditName, void 0, n) : Object(f.a)(e.subredditName, t, r), kt = (e, t) => async (r, s) => {
				var i, o, d;
				const {
					countryCode: b,
					languageCode: m,
					channelId: g
				} = e.params, j = Object(l.e)(e.params), {
					styling: y
				} = e.queryParams, S = s(), E = Object(Ee.a)(e.params, S), x = () => {
					if (g) r(Object(Xe.f)(g));
					else {
						const e = Object(_t.c)(s(), U);
						if (e) {
							const t = Object(Ze.a)(e.id, e.name);
							r(Object(a.c)(t)), r(Object(Xe.f)(e.id))
						}
					}
				};
				if ("Popular" === j) return void r(Object(a.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === j) return void r(Object(a.c)(e.url.replace("r/All", "r/all")));
				const A = Object(O.d)(e.queryParams, Object(ee.mb)(S)),
					N = wt({
						subredditName: j,
						countryCode: b,
						languageCode: m
					}, E, e.queryParams, A),
					L = E,
					P = Object(I.a)(S.listings.postOrder.api.error, N),
					D = Object(I.a)(S.listings.postOrder.api.pending, N);
				let G = !!Object(I.a)(S.listings.postOrder.ids, N);
				const F = Object(I.a)(S.listings.postOrder.listingSort, N);
				F && F.hasChanged && (G = !1);
				let U = Object(q.I)(S, j);
				const M = (e, t) => "true" === y && ((e, t) => Object(He.b)(De.c.config)(e, {
						subredditId: t
					}) || Object(He.b)(De.c.flair)(e, {
						subredditId: t
					}))(e, t),
					B = ae.J in e.queryParams && e.queryParams[ae.J].toUpperCase() || "",
					Q = B in u.pc && u.pc[B];
				if (D || G && !P && !t) {
					if (M(S, U) && r(H.i(U)), G) {
						const t = Pt(s(), j, b, m);
						r(k.n({
							title: t
						})), (null === (i = S.listings.postOrder.correlationIds) || void 0 === i ? void 0 : i[N]) && r(k.p({
							correlationId: S.listings.postOrder.correlationIds[N]
						})), Object(Se.g)(s(), r, e), window.addEventListener("load", () => {
							r(Object(C.p)())
						}), S.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(v.b)(Fe.a.SUBREDDIT))
						}), r(te())
					}
					return Object(Be.e)(s()) && r(Object(R.a)()), void(Object(Ie.d)(S) ? x() : Object(Ie.d)(S) || !g || Object(_t.g)(S) || (r(Object(Xe.e)(!0)), r(J.f({
						kind: W.b.Error,
						text: n.fbt._("This experience is currently only available on the iOS and Android apps.", null, {
							hk: "3V9YHz"
						})
					}))))
				}
				r(T.g());
				const z = null === (d = null === (o = Object(Z.b)(S)) || void 0 === o ? void 0 : o.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
					K = Object(ee.S)(s());
				if (A) {
					const e = Object(_.i)(() => r(Object(w.d)({
						key: N,
						options: A,
						subredditName: j
					})), {
						name: "searchDataRequested",
						isLoggedIn: K,
						page: z
					});
					await e
				} else {
					const t = {
						...c()(e.queryParams, [...ae.q, ...ae.p, ae.l]),
						sort: L,
						t: Object(Ce.a)(L, Q)
					};
					await r(Lt(N, j, t, !0))
				}
				const V = S.platform.currentPage,
					$ = Object(Qe.d)(S, {
						pageLayer: V
					});
				if (Object(Qe.a)($) || Object(Qe.b)($) || Object(Qe.c)($)) {
					const e = Object(f.a)(j, u.cb.TOP, {
							t: u.pc.WEEK
						}),
						t = {
							sort: u.cb.TOP,
							t: u.pc.WEEK
						};
					await r(Lt(e, j, t, !1))
				}
				if (Object(Be.e)(s()) && r(Object(R.a)()), U = U || Object(q.I)(s(), j), !Object(Ue.a)(S, U) && !Object(p.a)(j, {
						countryCode: b,
						languageCode: m
					})) {
					const e = Object(_.i)(() => r(Object(h.e)(j)), {
						name: "getTopCommunityFlair",
						page: z,
						isLoggedIn: K
					});
					await e
				}
				M(s(), U) && r(H.i(U)), Object(Se.g)(s(), r, e);
				const Y = Pt(s(), j);
				r(k.n({
					title: Y
				})), r(te()), Object(Ie.d)(S) && x()
			}, Dt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", Gt = Object(m.a)(Dt)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "D", (function() {
				return n
			})), r.d(t, "L", (function() {
				return s
			})), r.d(t, "M", (function() {
				return i
			})), r.d(t, "l", (function() {
				return o
			})), r.d(t, "m", (function() {
				return d
			})), r.d(t, "x", (function() {
				return c
			})), r.d(t, "I", (function() {
				return a
			})), r.d(t, "J", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "H", (function() {
				return b
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "R", (function() {
				return m
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "E", (function() {
				return O
			})), r.d(t, "s", (function() {
				return g
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "T", (function() {
				return x
			})), r.d(t, "S", (function() {
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
			})), r.d(t, "ab", (function() {
				return D
			})), r.d(t, "r", (function() {
				return G
			})), r.d(t, "F", (function() {
				return F
			})), r.d(t, "u", (function() {
				return U
			})), r.d(t, "v", (function() {
				return M
			})), r.d(t, "t", (function() {
				return q
			})), r.d(t, "w", (function() {
				return B
			})), r.d(t, "Q", (function() {
				return Q
			})), r.d(t, "o", (function() {
				return z
			})), r.d(t, "y", (function() {
				return H
			})), r.d(t, "eb", (function() {
				return K
			})), r.d(t, "K", (function() {
				return J
			})), r.d(t, "a", (function() {
				return V
			})), r.d(t, "G", (function() {
				return $
			})), r.d(t, "O", (function() {
				return W
			})), r.d(t, "P", (function() {
				return Y
			})), r.d(t, "N", (function() {
				return X
			})), r.d(t, "bb", (function() {
				return Z
			})), r.d(t, "C", (function() {
				return ee
			})), r.d(t, "B", (function() {
				return te
			})), r.d(t, "z", (function() {
				return re
			})), r.d(t, "A", (function() {
				return ne
			})), r.d(t, "db", (function() {
				return se
			})), r.d(t, "cb", (function() {
				return ie
			}));
			const n = "POST_GUIDANCE_VALIDATION",
				s = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				i = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				o = "POST_CREATION_EDIT_COMPLETE",
				d = "POST_CREATION_EDIT_FAILED",
				c = "POST_CREATION_PENDING_EDIT",
				a = "POST_CREATION_START_EDITING_POST",
				u = "POST_CREATION_STOP_EDITING_POST",
				l = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				b = "STARTED_CONVERTING_EDITOR_CONTENT",
				p = "FINISHED_CONVERTING_EDITOR_CONTENT",
				m = "POST_CREATION__TOGGLE_EDITOR_MODE",
				f = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				O = "POST_TITLE_FETCHED",
				g = "INITIALIZE_EDITOR_MODE",
				j = "POST_CREATION__CHANGE_FLAIR",
				_ = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				I = "POST_CREATION__CHANGE_LINK_BODY",
				v = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				h = "POST_CREATION__CHANGE_MEDIA_BODY",
				y = "POST_CREATION__CHANGE_RECAPTCHA",
				T = "POST_CREATION__CHANGE_RTE_STATE",
				S = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				E = "POST_CREATION__CHANGE_TITLE",
				C = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				A = "POST_CREATION__TOGGLE_IS_CHANGED",
				N = "POST_CREATION__TOGGLE_IS_GOV",
				L = "POST_CREATION__TOGGLE_IS_NSFW",
				R = "POST_CREATION__TOGGLE_IS_OC",
				P = "POST_CREATION__TOGGLE_IS_POLL",
				w = "POST_CREATION__TOGGLE_IS_SPOILER",
				k = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				D = "POST_CREATION__TOGGLE_SEND_REPLIES",
				G = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				F = "POST_CREATION__RESET_FORM",
				U = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				M = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				q = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				B = "POST_CREATION__PENDING",
				Q = "POST_CREATION__SUCCEEDED",
				z = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				K = "POST_CREATION__VALIDATION_FAILED",
				J = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				V = "POST_CREATION__CAPTCHA_REQUIRED",
				$ = "POST_CREATION__SET_SUBMIT_MODE",
				W = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				Y = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				X = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				Z = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS",
				ee = "POST_CREATION__SUBREDDIT_RECOMMENDATION_PENDING",
				te = "POST_CREATION__SUBREDDIT_RECOMMENDATION_LOADED",
				re = "POST_CREATION__SUBREDDIT_RECOMMENDATION_FAILED",
				ne = "POST_CREATION__SUB_REC_IS_INPUT_CHANGED",
				se = "POST_CREATION__UPDATE_TOURNAMENT",
				ie = "POST_CREATION__UPDATE_TALK"
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
				return G
			})), r.d(t, "h", (function() {
				return F
			})), r.d(t, "l", (function() {
				return U
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
				return K
			})), r.d(t, "B", (function() {
				return J
			})), r.d(t, "D", (function() {
				return V
			})), r.d(t, "C", (function() {
				return $
			})), r.d(t, "m", (function() {
				return W
			})), r.d(t, "r", (function() {
				return X
			})), r.d(t, "s", (function() {
				return Z
			})), r.d(t, "q", (function() {
				return ee
			})), r.d(t, "z", (function() {
				return te
			})), r.d(t, "p", (function() {
				return re
			})), r.d(t, "n", (function() {
				return ne
			})), r.d(t, "k", (function() {
				return ae
			})), r.d(t, "j", (function() {
				return be
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/debounce.js"),
				s = r.n(n),
				i = r("./node_modules/react-router-redux/es/index.js"),
				o = r("./src/lib/isUrl/index.ts"),
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
			const C = Object(d.a)(E.n),
				x = Object(d.a)(E.E),
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
				G = Object(d.a)(E.i),
				F = Object(d.a)(E.j),
				U = Object(d.a)(E.q),
				M = Object(d.a)(E.T),
				q = Object(d.a)(E.S),
				B = (Object(d.a)(E.U), Object(d.a)(E.V)),
				Q = Object(d.a)(E.W),
				z = Object(d.a)(E.X),
				H = Object(d.a)(E.Y),
				K = Object(d.a)(E.Z),
				J = Object(d.a)(E.ab),
				V = Object(d.a)(E.db),
				$ = (Object(d.a)(E.cb), Object(d.a)(E.bb)),
				W = Object(d.a)(E.r),
				Y = s()((e, t) => {
					Object(o.a)(t) && e((e => async (t, r, n) => {
						let {
							apiContext: s
						} = n;
						const i = await Object(u.e)(s(), e);
						i.ok && i.body && i.body.json && i.body.json.data && t(x(i.body.json.data))
					})(t))
				}, 500),
				X = e => async t => {
					t(R(e)), Y(t, e)
				}, Z = Object(d.a)(E.F), ee = (e, t) => async (r, n) => {
					r(Z()), r(e ? Object(i.b)(I.b) : Object(i.b)(Object(T.fb)(n(), {
						pageLayer: t
					})))
				}, te = e => async t => {
					t(c.i(e))
				}, re = e => async (t, r) => {
					const n = r(),
						s = Object(a.I)(e),
						i = Object(T.H)(n);
					if (s && i) {
						Object(v.a)(n) !== j.d && t(te(j.d))
					} else t(ee(!1, e))
				}, ne = e => async (t, r) => {
					const n = r();
					Object(y.m)(n, {
						subredditId: e
					}) ? t(c.i(j.a)) : t(c.i(j.c))
				}, se = Object(d.a)(E.B), ie = Object(d.a)(E.C), oe = Object(d.a)(E.z), de = Object(d.a)(E.A), ce = e => async (t, r) => {
					Object(S.e)(r()) !== e && t(de({
						isChanged: e
					}))
				}, ae = () => async (e, t) => {
					const r = t();
					if (Object(S.g)(r))
						if (Object(S.h)(r)) {
							const t = r.creations.formData.title,
								n = Object(S.l)(r),
								s = Object(S.k)(r),
								i = Object(S.b)(r);
							e(be(t, n, s, void 0, i))
						} else Object(S.j)(r) && !Object(S.d)(r) && e(pe())
				}, ue = ["torrents", "IsolatedVocals"], le = ["askreddit", "teenagers"], be = (e, t, r, n, s) => async (i, o, d) => {
					let {
						apiContext: c,
						gqlContext: a
					} = d;
					const u = o();
					if (Object(S.i)(u)) return;
					i(ie());
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
					let v = {};
					const y = {},
						T = {},
						E = [];
					if (!j.body || !j.ok) return i(ce(!1)), void i(oe()); {
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
						}).filter(e => !ue.includes(e.name));
						const s = (r = n ? r.filter(e => !n(e)) : r).slice(0, S.a),
							d = s.map(e => {
								const t = e.name;
								return E.push(t), t
							});
						if (Object(h.b)(u) && (e => {
								const t = e.map(e => e.toLowerCase());
								let r = !1;
								return le.forEach(e => {
									t.includes(e) && (r = !0)
								}), r
							})(d)) return i(ce(!1)), i(se({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(g.H)(o()), void i(oe());
						s.forEach(e => {
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
					i(ce(!1)), i(se({
						subreddits: I,
						subredditsAboutInfo: v,
						unavailableSubreddits: y,
						recSubsDict: T,
						recSubsOrder: E
					})), 0 === Object(S.c)(o()).length && i(oe())
				}, pe = () => async (e, t, r) => {
					let {
						apiContext: n,
						gqlContext: s
					} = r;
					const i = t();
					if (Object(S.i)(i)) return;
					e(ie());
					const o = {};
					let d = {};
					const c = {},
						a = {},
						u = [],
						p = await (e => Object(b.a)(e, {
							...l,
							variables: {
								recentSubreddits: []
							}
						}))(s());
					if (!p.ok || !p.body) return e(oe()), void e(ce(!1)); {
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
								a[r.name] = {}, u.push(r.name), o[e.id] = e, d = {
									...d,
									...t
								}
							}
						})
					}
					e(ce(!1)), e(se({
						subreddits: o,
						subredditsAboutInfo: d,
						unavailableSubreddits: c,
						recSubsDict: a,
						recSubsOrder: u
					})), 0 === Object(S.c)(t()).length && e(oe())
				}
		},
		"./src/reddit/actions/postGuidance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			const n = "POST_GUIDANCE_CONFIG_FAILED",
				s = "POST_GUIDANCE_CONFIG_LOADED",
				i = "POST_GUIDANCE_CONFIG_PENDING"
		},
		"./src/reddit/actions/postGuidance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/FetchPostGuidanceConfig.json"),
				c = r("./src/reddit/endpoints/subreddit/about.ts"),
				a = r("./src/reddit/selectors/postGuidance.ts"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				l = r("./src/reddit/actions/postGuidance/constants.ts");
			const b = Object(s.a)(l.b),
				p = Object(s.a)(l.c),
				m = Object(s.a)(l.a),
				f = e => async (t, r, s) => {
					let {
						gqlContext: l
					} = s;
					var f, O, g;
					const j = {
						subredditName: e.toLowerCase()
					};
					if (Object(a.a)(r(), j)) return;
					t(p(j));
					let _, I = Object(u.I)(r(), e);
					if (!I) {
						const r = await Object(c.a)(l(), e, !1);
						if (r.ok) {
							const e = r.body;
							I = null === (O = null === (f = null == e ? void 0 : e.data) || void 0 === f ? void 0 : f.subreddit) || void 0 === O ? void 0 : O.id
						}
						if (!I) {
							const e = r.error || {
								type: n.L.NOT_FOUND_ERROR
							};
							return void t(m({
								...j,
								error: e
							}))
						}
					}
					const v = await ((e, t) => Object(o.a)(e, {
						...d,
						variables: t
					}).then(e => {
						var t, r, n;
						if (e.ok) {
							const s = null === (n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subredditInfoByName) || void 0 === n ? void 0 : n.postGuidanceConfig;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											postGuidanceConfig: s
										}
									}
								}
							}
						}
						return e
					}))(l(), {
						subredditName: e
					});
					if (v.ok) {
						_ = null === (g = v.body.data.subreddit) || void 0 === g ? void 0 : g.postGuidanceConfig, t(b({
							...j,
							postGuidanceConfig: _
						}))
					} else {
						const r = v.error || {
							type: n.L.UNKNOWN_ERROR
						};
						t(m({
							...j,
							error: r
						})), i.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: v.body,
								responseOk: v.ok
							}), i.c.captureMessage("issue with post guidance service")
						})
					}
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
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			}));
			const n = "SET_RECENT_SUBREDDITS",
				s = "SUBREDDIT_VISITED",
				i = "SUBREDDIT_SAVED",
				o = "COPY_SAVED_SUBREDDITS",
				d = "COPY_SAVED_ID_SUBREDDITS",
				c = 10
		},
		"./src/reddit/actions/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/goodContent/index.ts");
			const i = "FRONTPAGE_LINKS__REQUEST_LOADED",
				o = "SUBREDDIT_LINKS_LOADED",
				d = 10,
				c = Object(n.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				a = Object(n.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(n.a)(i),
				l = Object(n.a)(o),
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
				return oe
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
				return Ce
			})), r.d(t, "n", (function() {
				return xe
			})), r.d(t, "s", (function() {
				return Ae
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				i = r.n(s),
				o = r("./src/lib/constants/index.ts"),
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
				G = r("./src/reddit/models/Subreddit/index.ts"),
				F = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				U = r("./src/reddit/models/Toast/index.ts"),
				M = r("./src/reddit/models/User/index.ts"),
				q = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
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
				ie = Object(c.a)(te),
				oe = Object(c.a)(re),
				de = Object(c.a)(O.b),
				ce = Object(c.a)(O.c),
				ae = Object(c.a)(O.a),
				ue = (e, t) => async (r, n) => {
					await (t === G.g.User ? r(le(e)) : r(be(e)))
				}, le = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = Object(Q.o)(r(), e),
						o = await Object(A.c)(s(), e);
					if (o.ok) {
						const e = o.body;
						t(de({
							rules: e,
							subredditId: i
						}))
					}
				}, be = e => async (t, r, s) => {
					let {
						gqlContext: i
					} = s;
					const o = Object(z.I)(r(), e);
					t(ce());
					const d = await Object(A.b)(i(), e);
					if (d.ok) {
						const e = d.body;
						t(de({
							rules: e,
							subredditId: o
						}))
					} else {
						t(ae());
						const r = `error-block-${e}`;
						t(g.f({
							id: r,
							kind: U.b.Error,
							text: n.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, pe = e => async (t, r, n) => {
					let {
						apiContext: s,
						gqlContext: c
					} = n;
					const {
						subredditName: l
					} = e;
					let p = e.t;
					const m = r(),
						O = Object(P.a)(e, m),
						g = m.platform.currentPage ? m.platform.currentPage.queryParams : {},
						{
							currentPage: _
						} = m.platform,
						{
							countryCode: S,
							languageCode: E
						} = (null == _ ? void 0 : _.urlParams) || {},
						x = Object(a.a)(l, O, {
							t: p,
							...g
						}),
						A = m.listings.postOrder.loadMore[x],
						N = m.listings.postOrder.listingSort[x];
					let w = O;
					if (N && !w) {
						const e = Object(d.d)(N.sort);
						w = e.sort, p = e.timeSort
					}
					const k = m.listings.postOrder.api.pending[x],
						{
							fetchedTokens: G
						} = m.listings.postOrder,
						F = !(!G[x] || !G[x][A.token]);
					if (k || F) return;
					if (w === o.cb.AWARDED && l === I.g) return;
					t(ne({
						key: x,
						fetchedToken: A.token
					}));
					const U = {
							after: A.token,
							dist: A.dist,
							forceGeopopular: l === I.d.Popular,
							layout: h.e[Object(y.U)(m, {})],
							sort: w,
							t: p,
							...i()(g, [...v.q, v.l])
						},
						M = !Object(K.a)(l, {
							countryCode: S,
							languageCode: E
						}) && Object(q.a)(m);
					let Q;
					Q = Object(K.c)(l, {
						countryCode: S,
						languageCode: E
					}) && (Object(V.a)(m) || Object(V.b)(m)) ? () => Object(J.a)(c(), Object(C.c)(m, l, U, !0)) : M ? () => Object(C.b)(c(), Object(C.c)(m, l, {
						...U,
						limit: h.a
					}), Object(H.bb)(m)) : () => Object(C.a)(s(), l, U);
					const $ = await Q(),
						W = {
							...$.body,
							...Object(R.a)(m, x, $.body)
						};
					if ($.ok) {
						if (!M) {
							const e = await Object(L.a)(s(), W.posts, m);
							W.posts = e
						}
						let e;
						const n = W.postIds.filter(e => !!W.posts[e].isMeta),
							i = Object(z.I)(r(), l);
						if (n.length) {
							const t = await Object(T.a)(s(), i, n);
							t.ok && (e = t.body)
						}
						const o = Object(B.h)(m, {
							subredditId: Object(z.I)(m, l)
						});
						if (!M && o && t(Object(b.a)({
								postIds: W.postIds
							})), t(se({
								fetchedToken: A.token,
								key: x,
								meta: m.meta,
								governance: e,
								...W
							})), Object(B.i)(m, i)) {
							let e;
							M || (e = await Object(C.b)(c(), Object(C.c)(m, l, {
								...U,
								limit: h.a
							}), Object(H.bb)(m)));
							const r = M ? W : e.body;
							if (M ? r : e.ok) {
								const e = r.postIds.map(e => r.posts[e].lastAuthorModNote);
								t(Object(f.e)({
									subredditId: i,
									nodes: e
								}))
							}
						}
						await t(Object(u.a)({
							subredditId: i,
							postIds: W.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(D.b)(j.a.NextPageLoad)(r())
					} else {
						t(ie({
							error: $.error,
							fetchedToken: A.token,
							key: x,
							...W
						}));
						const e = $.error;
						Object(D.a)(e ? `${$.status||"000"}: ${e.type}` : "000: UNKNOWN_ERROR")(r())
					}
				}, me = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", fe = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", Oe = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", ge = Object(c.a)(me), je = Object(c.a)(fe), _e = Object(c.a)(Oe), Ie = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(ge());
					const i = await Object(E.c)(n(), o.xb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					i.ok ? e(je(i.body)) : e(_e({
						error: i.error
					}))
				}, ve = "SUBREDDIT__ABOUT_PENDING", he = "SUBREDDIT__ABOUT_SUCCEEDED", ye = "SUBREDDIT__ABOUT_FAILED", Te = Object(c.a)(ve), Se = Object(c.a)(he), Ee = Object(c.a)(ye), Ce = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const i = r();
					if (Object(z.z)(i, {
							subredditName: e
						}) || i.subreddits.api.about.error[e.toLowerCase()] || i.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(Te({
						subredditName: e
					}));
					const o = !Object(z.I)(i, e),
						d = await Object(x.a)(s(), e, o);
					if (d.ok) {
						const r = d.body.data.subreddit,
							n = Object(w.a)(r),
							s = o ? Object(k.a)(r) : void 0;
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
				}, xe = (e, t, r) => async (n, s, i) => {
					let {
						apiContext: o
					} = i;
					var d;
					const c = e.substring(2),
						a = r === F.e.View ? null === (d = Object(H.h)(s(), c)) || void 0 === d ? void 0 : d.subredditId : Object(z.I)(s(), c),
						u = Object(H.m)(s());
					if (u && a) {
						const e = ((e, t, r, n) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + n + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(c, Object(M.e)(u), t, r);
						if ((await Object(S.b)(o(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							n(Object(m.D)({
								subredditId: a,
								prefs: t
							})), Object(N.j)(a, t, o()), r !== F.e.View && n(Object(l.i)(_.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Ae = e => async (t, r) => {
					const n = r(),
						{
							subredditName: s
						} = e,
						i = e.t,
						o = Object(P.a)(e, n),
						d = n.platform.currentPage ? n.platform.currentPage.queryParams : $,
						c = Object(a.a)(s, o, {
							t: i,
							...d
						}),
						u = {
							t: i,
							sort: o,
							isRefresh: !0,
							...d
						};
					await t(Object(p.subredditDataRequested)(c, s, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				i = r("./src/reddit/models/Subreddit/index.ts"),
				o = r("./src/reddit/actions/subreddit/constants.ts");
			const d = e => async (t, r, i) => {
				let {
					gqlContext: o
				} = i;
				var d;
				const a = (await ((e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}))(o(), {
					id: e
				})).body;
				c(t, e, null === (d = a.data) || void 0 === d ? void 0 : d.subredditInfoById)
			};

			function c(e, t, r) {
				if (Object(i.m)(r)) return;
				const n = null == r ? void 0 : r.answerableQuestions,
					s = null == r ? void 0 : r.contentRatingSurvey,
					d = null == r ? void 0 : r.communityProgressModule;
				(n || s || d) && e({
					type: o.D,
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
				o = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/reddit/models/Post/index.ts");
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
					const f = Object(l.X)(n(), {
						subredditId: e
					}) || Object(u.r)(n(), {
						profileId: e
					});
					if (!f) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.i)(f) ? s.rc + f.name : f.name
						},
						g = await ((e, t, r) => Object(o.a)(e, {
							data: r,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.C)(t)}`,
							method: s.pb.GET
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
				return A
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "d", (function() {
				return G
			})), r.d(t, "b", (function() {
				return F
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/subredditModeration/constants.ts"),
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
			const S = Object(s.a)(o.U),
				E = Object(s.a)(o.T),
				C = Object(s.a)(o.S),
				x = Object(s.a)(o.R),
				A = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					var o;
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
							}))(s(), {
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
								if ("Subreddit" === (null == r ? void 0 : r.__typename) && (null === (o = null == r ? void 0 : r.modNotes) || void 0 === o ? void 0 : o.edges)) {
									const {
										edges: e,
										pageInfo: n
									} = r.modNotes, s = [];
									e.forEach(e => {
										e && e.node && s.push(e.node)
									}), t(E({
										notes: s,
										subredditId: l,
										userId: p,
										filter: g,
										fetchedToken: m,
										loadMoreToken: n.hasNextPage ? n.endCursor : null
									}))
								}
								const {
									errors: n
								} = e.body;
								n && n.length && i.c.captureException(n)
							} else t(C({
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
							i.c.captureException(I), t(Object(d.f)({
								kind: O.b.Error,
								text: T._("Oops, something went wrong. Try again.", null, {
									hk: "2VQ3RW"
								}),
								duration: 3e3
							}))
						}
					}
				}, N = Object(s.a)(o.H), L = Object(s.a)(o.G), R = e => {
					let {
						subredditId: t,
						nodes: r
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: i
						} = s;
						const o = [],
							d = [];
						r.map(e => {
							const t = null == e ? void 0 : e.user.id;
							t && !d.includes(t) && e && (o.push(e), d.push(t))
						}), e(L({
							subredditId: t,
							lastAuthorModNotes: o
						}))
					}
				}, P = (e, t, r) => async (s, i, o) => {
					let {
						gqlContext: d
					} = o;
					var u, l, b, p, f, O, g;
					const {
						hasSortParam: j,
						sortToUse: _
					} = Object(m.a)(i(), e), I = n.Pb[_], h = {
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
									gqlContext: i
								} = s;
								const o = [],
									d = [];
								r.map(e => {
									var t, r;
									if (!(null == e ? void 0 : e.node)) return;
									const n = null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote,
										s = null == n ? void 0 : n.user.id;
									s && !d.includes(s) && n && (o.push(n), d.push(s))
								}), e(L({
									subredditId: t,
									lastAuthorModNotes: o
								}))
							}
						})({
							subredditId: t,
							commentTrees: n
						}))
					}
				}, w = Object(s.a)(o.Q), k = (e, t, r, n, s, i) => async (o, a, l) => {
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
						if (!r) return void o(Object(d.f)({
							kind: O.b.Error,
							text: T._("Something went wrong", null, {
								hk: "zYMeg"
							}),
							duration: 3e3
						}));
						o(w({
							subredditId: e,
							newModNote: r,
							filter: n
						})), Object(I.a)(Object(_.v)({
							userId: t,
							subredditId: e,
							filteredType: n,
							modNote: r
						})(a())), o(Object(d.f)({
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
						o(Object(d.f)({
							kind: O.b.Error,
							text: t,
							duration: 3e3
						}))
					}
				}, D = Object(s.a)(o.lb), G = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					var o, d;
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
						const n = null === (o = l.body) || void 0 === o ? void 0 : o.data;
						if ("Subreddit" === (null === (d = null == n ? void 0 : n.subredditInfoById) || void 0 === d ? void 0 : d.__typename)) {
							const s = null == n ? void 0 : n.subredditInfoById;
							s && r(D({
								subredditId: e,
								userId: t,
								totalCounts: s
							}))
						}
					}
				}, F = (e, t, r, n) => async (s, i, o) => {
					let {
						gqlContext: a
					} = o;
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
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "SUBREDDIT__RULES_LOADED",
				s = "SUBREDDIT__RULES_PENDING",
				i = "SUBREDDIT__RULES_FAILED",
				o = "SUBREDDIT__RULE_ADDED",
				d = "SUBREDDIT__RULE_EDITED",
				c = "SUBREDDIT__RULE_REMOVED",
				a = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return w
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "h", (function() {
				return M
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "f", (function() {
				return Q
			})), r.d(t, "d", (function() {
				return z
			})), r.d(t, "j", (function() {
				return V
			})), r.d(t, "i", (function() {
				return $
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				i = r.n(s),
				o = r("./node_modules/lodash/xor.js"),
				d = r.n(o),
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
						isChatPostCreationAllowed: o,
						isCrosspostingAllowed: d,
						isPredictionAllowed: c,
						isPredictionContributorsAllowed: a,
						isPredictionsTournamentAllowed: u,
						commentContributionSettings: l,
						discoverySettings: b,
						isNsfw: p,
						language: m,
						publicDescriptionText: f,
						isChatPostFeatureEnabled: g,
						welcomeMessage: j,
						allAllowedPostTypes: _,
						isTopListingAllowed: v,
						isCommentingRestricted: h,
						isPostingRestricted: y,
						isSpoilerAvailable: T,
						isContributorRequestsDisabled: E,
						isModmailHarassmentFilterEnabled: C,
						type: x,
						suggestedCommentSort: A,
						title: N,
						toxicityThresholdChatLevel: L,
						crowdControl: R,
						commentDisplaySettings: P,
						allowedPostType: w,
						wikiSettings: k,
						spamFilter: D,
						modQueueSettings: G,
						banEvasionFilterSettings: F
					} = e;
					return {
						allowGalleries: _.includes(O.O.Gallery),
						allowImages: _.includes(O.O.Image),
						allowVideos: _.includes(O.O.Video),
						allowPolls: _.includes(O.O.Poll),
						archivePostsEnabled: s,
						allowDiscovery: i,
						allowChatPostCreation: o,
						allowPostCrossposts: d,
						allowPredictionContributors: a,
						allowPredictions: c,
						allowPredictionsTournament: u,
						banEvasionFilterSettings: F,
						commentContributionSettings: l,
						discoverySettings: b,
						contentVisible: v,
						crowdControlLevel: I(null == R ? void 0 : R.crowdControlLevel),
						crowdControlChatLevel: I(null == R ? void 0 : R.crowdControlChatLevel),
						crowdControlPostLevel: I(null == R ? void 0 : R.crowdControlPostLevel),
						disableContributorRequests: E,
						isChatPostFeatureEnabled: g,
						language: m,
						modmailHarassmentFilterEnabled: C,
						over18: p,
						publicDescription: f || void 0,
						restrictCommenting: h,
						restrictPosting: y,
						spoilersEnabled: T,
						subredditId: n,
						subredditType: null == x ? void 0 : x.toLowerCase(),
						suggestedCommentSort: (null == A ? void 0 : A.toLowerCase()) || void 0,
						title: N,
						toxicityThresholdChatLevel: S(L),
						welcomeMessageEnabled: null == j ? void 0 : j.isEnabled,
						welcomeMessageText: (null == j ? void 0 : j.body) ? null === (t = j.body) || void 0 === t ? void 0 : t.markdown : void 0,
						wikimode: null === (r = null == k ? void 0 : k.wikiEditMode) || void 0 === r ? void 0 : r.toLowerCase(),
						crowdControlFilter: null == R ? void 0 : R.isCrowdControlFilterEnabled,
						collapseDeletedComments: null == P ? void 0 : P.isCollapseDeletedCommentsEnabled,
						commentScoreHideMins: (null == P ? void 0 : P.commentScoreHideMinutes) || 0,
						contentOptions: w || void 0,
						excludeBannedModqueue: null == G ? void 0 : G.isExcludeBannedModqueueEnabled,
						spamLinks: (null == D ? void 0 : D.spamPosts) || void 0,
						spamSelfposts: (null == D ? void 0 : D.spamSelfposts) || void 0,
						spamComments: (null == D ? void 0 : D.spamComments) || void 0,
						wikiEditAge: "number" == typeof(null == k ? void 0 : k.wikiEditMinimumAge) ? null == k ? void 0 : k.wikiEditMinimumAge : void 0,
						wikiEditKarma: "number" == typeof(null == k ? void 0 : k.wikiEditKarma) ? null == k ? void 0 : k.wikiEditKarma : void 0
					}
				},
				j = [O.l.Off, O.l.Lenient, O.l.Medium, O.l.Strict],
				_ = e => {
					if (e) return null == j ? void 0 : j[e]
				},
				I = e => e ? j.indexOf(e) : 0,
				v = e => {
					if (e) return Object.values(O.W).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				h = e => {
					if (e) return Object.values(O.g).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				y = e => {
					if (e) return Object.values(O.eb).find(t => t === (null == e ? void 0 : e.toUpperCase()))
				},
				T = e => {
					if (e) return e > 0 ? O.Z.Enabled : O.Z.Disabled
				},
				S = e => {
					if (e) return e === O.Z.Enabled ? 1 : 0
				},
				E = e => {
					let {
						over18: t,
						publicDescription: r,
						subredditType: n,
						contentOptions: s,
						archivePostsEnabled: i,
						allowDiscovery: o,
						allowGalleries: d,
						allowImages: c,
						allowVideos: a,
						allowChatPostCreation: u,
						allowPolls: l,
						allowPostCrossposts: b,
						allowPredictionContributors: p,
						allowPredictionsTournament: m,
						welcomeMessageEnabled: f,
						welcomeMessageText: O,
						language: g,
						contentVisible: j,
						commentContributionSettings: I,
						crowdControlFilter: S,
						crowdControlPostLevel: E,
						crowdControlChatLevel: C,
						crowdControlLevel: x,
						allowPredictions: A,
						collapseDeletedComments: N,
						commentScoreHideMins: L,
						disableContributorRequests: R,
						discoverySettings: P,
						excludeBannedModqueue: w,
						hideAds: k,
						keyColor: D,
						modmailHarassmentFilterEnabled: G,
						restrictCommenting: F,
						restrictPosting: U,
						spamLinks: M,
						spamSelfposts: q,
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
						isVideosAllowed: a,
						isCrosspostingAllowed: b,
						isPollsAllowed: l,
						isGalleriesAllowed: d,
						isChatPostAllowed: u,
						isTopListingAllowed: j,
						isDiscoveryAllowed: o,
						isArchivePostsEnabled: i,
						isPredictionContributorsAllowed: p,
						isPredictionsTournamentAllowed: m,
						isModmailHarassmentFilterEnabled: G,
						language: g,
						crowdControlChatLevel: _(C),
						crowdControlFilter: S,
						crowdControlLevel: _(x),
						crowdControlPostLevel: _(E),
						welcomeMessage: O ? {
							markdown: O
						} : void 0,
						isWelcomeMessageEnabled: f,
						commentContributionSettings: I,
						allowPredictions: A,
						collapseDeletedComments: N,
						commentScoreHideMinutes: L,
						disableContributorRequests: R,
						discoverySettings: P,
						excludeBannedModqueue: w,
						restrictCommenting: F,
						restrictPosting: U,
						spamLinks: v(M),
						spamSelfposts: v(q),
						spamComments: v(B),
						spoilersEnabled: Q,
						suggestedCommentSort: h($),
						title: W,
						toxicityThresholdChatLevel: T(Y),
						wikiEditKarma: Z,
						wikiEditMinimumAge: X,
						wikiEditMode: y(ee),
						...te
					}
				};
			var C = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				x = r("./src/reddit/models/Toast/index.ts"),
				A = r("./src/reddit/models/User/index.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/subredditSettings.ts"),
				R = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/selectors/widgets.ts");
			const w = "SUBREDDIT_SETTINGS_LOADED",
				k = Object(a.a)(w),
				D = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				G = Object(a.a)(D),
				F = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				U = Object(a.a)(F),
				M = (e, t) => async (r, n, s) => {
					let {
						apiContext: i,
						gqlContext: o
					} = s;
					var d, c;
					const a = n(),
						b = !Object(u.b)(e);
					if (!t || !Object(N.Z)(a, t)) {
						const t = await (b ? Object(l.b)(o(), e) : Object(l.c)(i(), e)),
							n = b ? g(null === (c = null === (d = null == t ? void 0 : t.body) || void 0 === d ? void 0 : d.data) || void 0 === c ? void 0 : c.subredditInfoByName) : t.body;
						t && t.ok && r(k(n))
					}
					if (t && !Object(L.b)(a, {
							subredditId: t
						})) {
						const e = await Object(m.a)(o(), t);
						if (e && e.ok) {
							const t = e.body,
								n = Object(f.e)(t.data);
							r(G(n))
						}
					}
				}, q = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const s = Object(R.m)(t());
					s && await e(M(c.rc + Object(A.e)(s)))
				}, B = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", Q = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", z = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", H = Object(a.a)(B), K = Object(a.a)(Q), J = Object(a.a)(z), V = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (o, c, a) => {
						let {
							apiContext: u,
							gqlContext: f
						} = a;
						var O, j, _;
						o(H());
						const I = c(),
							v = i()(Object(N.Z)(I, e), ...Object.keys(t)),
							h = i()(Object(L.b)(I, {
								subredditId: e
							}), ...Object.keys(r)),
							y = E(t),
							T = await Object(l.f)(f(), e, y),
							S = Object.keys(r).length > 0;
						let A = !0;
						if (S) {
							A = (await Object(m.b)(f(), e, r)).ok
						}
						if (T.ok && (!S || A)) {
							const i = g(null === (_ = null === (j = null === (O = null == T ? void 0 : T.body) || void 0 === O ? void 0 : O.data) || void 0 === j ? void 0 : j.updateSubredditSettings) || void 0 === _ ? void 0 : _.subreddit);
							o(K({
								settings: {
									...i,
									subredditId: e
								},
								idCardWidgetId: Object(P.c)(I, {
									subredditId: e
								})
							})), S && o(U({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							return s && 0 === d()(Object.keys(t), Object.keys(v)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = V(e, v, h, s)), void o(Object(p.f)({
								kind: x.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
						o(J()), o(Object(p.f)({
							kind: x.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: V(e, t, h, void 0)
						})), s && Object(b.a)(Object(C.c)(I, "BE returned an error:"))
					}
				}, $ = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					(await Object(l.d)(o(), e, t)).ok ? r(Object(p.f)({
						kind: x.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(p.f)({
						kind: x.b.Error,
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
				return o
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
				i = "TAGS__LOADED",
				o = "TAGS__FAILURE",
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
				return G
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "l", (function() {
				return U
			})), r.d(t, "h", (function() {
				return M
			})), r.d(t, "k", (function() {
				return q
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
				i = r("./src/reddit/actions/tags/constants.ts"),
				o = r("./src/reddit/actions/toaster.ts");
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
				v = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				h = r("./src/reddit/models/Tags/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/reducers/tags/selected/index.ts"),
				S = r("./src/reddit/selectors/tags.ts");
			Object(s.a)(i.e);
			const E = Object(s.a)(i.t),
				C = Object(s.a)(i.r),
				x = Object(s.a)(i.s),
				A = Object(s.a)(i.q),
				N = Object(s.a)(i.l),
				L = Object(s.a)(i.m),
				R = Object(s.a)(i.k),
				P = Object(s.a)(i.v),
				w = Object(s.a)(i.w),
				k = Object(s.a)(i.u),
				D = Object(s.a)(i.z),
				G = Object(s.a)(i.D),
				F = Object(s.a)(i.y),
				U = Object(s.a)(i.C),
				M = Object(s.a)(i.x),
				q = Object(s.a)(i.B),
				B = (Object(s.a)(i.d), Object(s.a)(i.c), Object(s.a)(i.b), Object(s.a)(i.g)),
				Q = Object(s.a)(i.h),
				z = Object(s.a)(i.f),
				H = Object(s.a)(i.a),
				K = Object(s.a)(i.i),
				J = Object(s.a)(i.A),
				V = function(e, t) {
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
						if (l.ok && p.data.subredditInfoById.secondaryTags && p.data.subredditInfoById.availableTags && p.data.subredditInfoById.suggestedTags) s(C(d(p.data))), r && v.h(i(), e, {
							context: t
						});
						else {
							s(A());
							const i = r ? "topics_save" : "topics_load";
							v.g(u, e, i, {
								context: t
							}), s(Object(o.f)(Object(o.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), y.b.Error, n.fbt._("Retry", null, {
								hk: "1c2xrJ"
							}), V(e, t, r))))
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
						t(x(d(e.data)))
					} else t(A()), t(Object(o.f)(Object(o.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), y.b.Error, n.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), x(e))))
				}, W = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					if (!t.length) return null;
					r(N());
					const o = t.map(t => ({
							subredditId: e,
							...t
						})),
						d = await ((e, t) => Object(c.a)(e, {
							...a,
							variables: t
						}))(i(), {
							input: o
						}),
						u = d.body && d.body.data || null;
					return d.ok && u && u.createSubredditTags && u.createSubredditTags.ok ? (r(L()), u.createSubredditTags.createdTags || []) : (r(R()), null)
				}, Y = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return async (n, s, i) => {
						let {
							gqlContext: o
						} = i;
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
							if (e.state === h.d.NONE && a[e.tagId] && !l[e.tagId]) {
								!!r.find(t => t.state === h.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} for (const e of r)
							if (e.state === h.d.NONE && a[e.tagId] && !u[e.tagId]) {
								!!t.find(t => t.state === h.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} const p = await m(o(), {
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
						p.ok && f && f.updateSubredditTagStates && f.updateSubredditTagStates.ok && f.updateSubredditTagStates.subreddit ? n(w(d({
							subredditInfoById: f.updateSubredditTagStates.subreddit
						}))) : n(k())
					}
				}, X = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return async (s, i, d) => {
						const c = i(),
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
							const t = await W(e, u)(s, i, d);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: h.d.TAGGED
							})))
						}
						await Y(e, l)(s, i, d), Object(S.A)(i()) ? s(Object(o.f)(Object(o.e)(n.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
							hk: "2Jbh5V"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), X(e, t, r)))) : r && s(Object(o.f)(Object(o.e)(n.fbt._("Community topics saved!", null, {
							hk: "3wtajT"
						}), y.b.SuccessCommunity)))
					}
				}, Z = (e, t, r) => async (r, s, i) => {
					const d = {
						state: h.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await W(e, [{
							text: t.displayText,
							type: h.c.CLASSIFICATION
						}])(r, s, i);
						n && 1 === n.length && (d.tagId = n[0].id)
					} else {
						if (!t.id) return void r(Object(o.f)(Object(o.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), y.b.Error)));
						d.tagId = t.id
					}(e => !!e.tagId && !!e.state)(d) ? await Y(e, [], [d])(r, s, i): r(Object(o.f)(Object(o.e)(n.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), y.b.Error)))
				}, ee = (e, t, r) => async (n, s, i) => {
					t.id ? await Y(e, [], [{
						state: h.d.NONE,
						tagId: t.id
					}])(n, s, i) : n(V(e, r, !1))
				}, te = function(e, t, r, s) {
					let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					return async (d, c, a) => {
						let {
							gqlContext: u
						} = a;
						if (!(await O(u(), {
								input: {
									tagStatesRelevance: t,
									suggestedTagStatesRelevance: r
								}
							})).ok) return d(Object(o.f)(Object(o.e)(n.fbt._("Whoops! Unable to update topics relevance status", null, {
							hk: "17akdT"
						}), y.b.Error, n.fbt._("Retry", null, {
							hk: "1wqK2v"
						}), te(e, t, r, s, i)))), void d($(e));
						if (i)
							for (const e of r) v.f(c(), e, {
								context: s
							});
						d(Object(o.f)(Object(o.e)(n.fbt._("Successfully updated topics relevance!", null, {
							hk: "3KIYlz"
						}), y.b.SuccessCommunity, n.fbt._("Undo", null, {
							hk: "34apPL"
						}), te(e, t.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), r.map(e => ({
							...e,
							isRelevant: !e.isRelevant
						})), s, i)))), d($(e))
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
					return async (s, i, d) => {
						let {
							gqlContext: c
						} = d;
						const a = Object(S.x)(i(), {
							subredditId: e
						});
						if ((null == a ? void 0 : a.id) === t.tagId && t.state === h.d.TAGGED) return;
						s(B());
						const u = await _(c(), {
								input: {
									subredditId: e,
									primaryTagState: t
								}
							}),
							l = u.body && u.body.data || null;
						u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (s(Q(j(l))), r && s(Object(o.f)(Object(o.e)(n.fbt._("Successfully updated primary topic!", null, {
							hk: "1NL90v"
						}), y.b.SuccessCommunity)))) : (s(z()), s(Object(o.f)(Object(o.e)(n.fbt._("Whoops! Unable to update primary topic", null, {
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
				return i
			})), r.d(t, "j", (function() {
				return o
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
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
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
				return G
			})), r.d(t, "userFlairChanged", (function() {
				return F
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return U
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
				return K
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./node_modules/lodash/isEmpty.js"),
				o = r.n(i),
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
			const I = Object(s.a)(_.i),
				v = Object(s.a)(_.j),
				h = Object(s.a)(_.h),
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
				G = Object(s.a)(_.a),
				F = (e, t, r, n, s) => async (i, o, d) => {
					let {
						apiContext: c
					} = d;
					const l = o(),
						b = l.user.account,
						p = b ? Object(m.e)(b) : void 0,
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
					i(n === p ? D(j) : G(j));
					const _ = Object(f.X)(l, {
							subredditId: s
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					I && Object(a.h)(c(), n, _.name, t, I), n === p && Object(a.j)(c(), r, _.name)
				}, U = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n(),
						d = Object(f.X)(o, {
							subredditId: e
						}).name;
					r(I());
					const c = await Object(a.m)(i(), d, t);
					if (c.ok) {
						r(v({
							subredditId: e,
							isEnabled: t
						}))
					} else r(h());
					return c.ok
				}, M = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const o = n(),
						d = Object(f.X)(o, {
							subredditId: e
						}).name;
					r(y());
					const c = await Object(a.k)(i(), t, b.d.UserFlair, d);
					if (c.ok) {
						r(T({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(S());
					return c.ok
				}, q = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s(),
						u = Object(f.X)(d, {
							subredditId: t
						}).name;
					r(E());
					const l = await Object(a.g)(o(), e, u, b.d.UserFlair),
						m = l.ok && !(l.body && !1 === l.body.success);
					if (m) {
						const e = {
							subredditId: t,
							template: l.body
						};
						r(C(e));
						const s = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), p.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(x());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), p.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), q(e, t));
						r(Object(c.f)(s))
					}
					return m
				}, B = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
					const d = s(),
						u = Object(f.X)(d, {
							subredditId: t
						}).name;
					if (r(A()), (await Object(a.b)(o(), e, u)).ok) {
						r(N({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), p.b.SuccessMod);
						r(Object(c.f)(s))
					} else {
						r(L());
						const s = Object(c.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), p.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), B(e, t));
						r(Object(c.f)(s))
					}
				}, Q = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i;
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
						})), (await Object(a.f)(o(), u, b.d.UserFlair, e)).ok) {
						r(P());
						const e = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), p.b.SuccessMod);
						r(Object(c.f)(e))
					} else {
						r(w({
							subredditId: t,
							templateIds: l
						}));
						const s = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), p.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), Q(e, t));
						r(Object(c.f)(s))
					}
				}, z = (e, t) => async (r, s, i) => {
					let {
						apiContext: u
					} = i;
					var l;
					const b = s(),
						m = null === (l = b.features) || void 0 === l ? void 0 : l.userFlair;
					if (m && m[e] && m[e].displaySettings.isEnabled && o()(m[e].templateIds)) {
						const s = Object(f.X)(b, {
								subredditId: e
							}).name,
							i = await Object(a.d)(u(), s);
						if (i.ok) r(k(i.body)), r(Object(d.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(c.e)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), p.b.Error);
							r(Object(c.f)(e))
						}
					} else r(Object(d.b)({
						username: t,
						subredditId: e
					}))
				}, H = Object(s.a)(_.r), K = (e, t) => async (r, n, s) => {
					let {
						gqlContext: i
					} = s;
					var d, c, u, b, p, m;
					const f = null === (d = n().features) || void 0 === d ? void 0 : d.userFlair;
					if (f && f[e] && f[e].displaySettings.isEnabled && o()(f[e].templateIds)) {
						const n = await Object(a.e)(i(), {
							name: t
						});
						if (n.ok) {
							const t = [],
								s = {};
							null === (m = null === (p = null === (b = null === (u = null === (c = null == n ? void 0 : n.body) || void 0 === c ? void 0 : c.data) || void 0 === u ? void 0 : u.subredditInfoByName) || void 0 === b ? void 0 : b.userFlairTemplates) || void 0 === p ? void 0 : p.edges) || void 0 === m || m.map(e => {
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
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/localStorageAvailable/index.ts"),
				d = r("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(s.c)(i.t.RECENT_SUBREDDITS, "recent_subreddits"),
				a = () => Object(o.a)() && Object(s.b)(c) || [];
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
							const t = e.findIndex(e => e.id === n); - 1 !== t && e.splice(t, 1), e.unshift(r), e.splice(d.c), Object(s.d)(c, e, i.vb)
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
				i = r("./src/redditGQL/operations/ModRemove.json"),
				o = r("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
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
					method: a.pb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unsave`),
					method: a.pb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/lock`),
					method: a.pb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unlock`),
					method: a.pb.POST,
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
					...i,
					variables: {
						input: {
							id: t,
							isSpam: r
						}
					}
				}),
				E = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/ignore_reports`),
					method: a.pb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unignore_reports`),
					method: a.pb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(u.a)(Object(b.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: a.pb.POST,
					data: {
						id: t
					}
				}),
				A = (e, t, r, s, i) => {
					let o = Object(m.a)(Object(j.a)(Object(f.a)(Object(g.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`), i ? 1 : void 0)));
					return s && (o = Object(O.a)(o)), Object(u.a)(e, {
						data: r,
						endpoint: o,
						method: a.pb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				N = {
					[a.J.NONE]: c.o.None,
					[a.J.MODERATOR]: c.o.ModDistinguished,
					[a.J.ADMIN]: c.o.AdminDistinguished,
					[a.J.ALUMNI_ADMIN]: c.o.AlumniDistinguished
				};

			function L(e, t, r) {
				const n = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === a.J.NONE ? c.e.None : c.e.Distinguished,
							distinguishType: N[t]
						}
					}
				}(t, r);
				return Object(l.a)(e, {
					...o,
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
				return i
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetDevPlatformMetadata.json");
			const i = async (e, t) => {
				var r;
				const i = await Object(n.a)(e, {
					...s,
					variables: {
						...t,
						mimetype: "application/json"
					}
				});
				return i.ok && i.body ? null === (r = i.body.data.subredditInfoByName) || void 0 === r ? void 0 : r.devPlatformMetadata : null
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
				return G
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				i = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				o = r("./src/redditGQL/operations/CancelPrediction.json"),
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
					optionId: i,
					coinPackageId: o,
					price: d
				} = t;
				var c;
				const a = await Object(n.a)(e, {
					...I,
					variables: {
						input: {
							postId: r,
							optionId: i,
							coinPackageId: o,
							price: d
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
			var y;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(y || (y = {}));
			const T = async (e, t) => {
				let {
					subredditId: r,
					period: i = y.AllTime,
					top: o = 100,
					includeCurrentRank: d
				} = t;
				const c = await Object(n.a)(e, {
					...g,
					variables: {
						subredditId: r,
						period: i,
						top: o,
						includeCurrentRank: d
					}
				});
				if (!Object(s.c)(c) || c.error) throw new Error("Failed to fetch subreddit top predictors");
				if (!c.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return c.body.data.subredditInfoById
			}, S = async (e, t) => {
				let {
					subredditId: r,
					tournamentId: i,
					includeCurrentRank: o
				} = t;
				const d = await Object(n.a)(e, {
					...j,
					variables: {
						subredditId: r,
						tournamentId: i,
						includeCurrentRank: o
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
					...m,
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
					...i,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(r) || r.error) throw new Error("Failed to create prediction");
				const {
					errors: o,
					tournament: d
				} = r.body.data.addPredictionDrafts;
				if (null == o ? void 0 : o.length) throw new Error(o[0].message);
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
					tournament: i
				} = r.body.data.updatePredictionTournament;
				if (!i) throw new Error("Failed to update prediction tournament");
				return i
			}, L = (e, t) => Object(n.a)(e, {
				...u,
				variables: {
					input: t
				}
			}), R = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			}), P = (e, t) => Object(n.a)(e, {
				...p,
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
				var i, d;
				const c = await Object(n.a)(e, {
					...o,
					variables: {
						input: {
							postId: r
						}
					}
				});
				if (!Object(s.c)(c) || !(null === (i = c.body.data.cancelPrediction) || void 0 === i ? void 0 : i.ok) || !(null === (d = c.body.data.cancelPrediction) || void 0 === d ? void 0 : d.poll)) throw new Error("Unable to cancel prediction");
				return c.body.data.cancelPrediction.poll
			}, D = async (e, t) => {
				var r, i;
				const o = await Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(o) || !(null === (r = o.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (i = o.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
				return o.body.data.changePredictionVote.poll
			}, G = async (e, t) => {
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
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				i = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const o = (e, t) => Object(n.a)(e, {
					...s,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				d = (e, t) => Object(n.a)(e, {
					...i,
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
				i = r("./src/lib/loadWithRetries/index.ts");
			! function(e) {
				e.PopularCommunities = "Popular Communities", e.Gaming = "Gaming", e.Sports = "Sports", e.TV = "TV", e.Travel = "Travel", e.HealthAndFitness = "Health & Fitness", e.Fashion = "Fashion"
			}(n || (n = {}));
			const o = {
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
					const t = o[e];
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
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(i.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/compose`),
					method: s.pb.POST,
					data: t
				}),
				l = (e, t) => Object(o.a)(e, {
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
				o = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/redditGQL/operations/ModQueueItems.json");
			const b = (e, t, r) => Object(i.a)(e, {
					endpoint: Object(u.a)(Object(a.a)(`${n.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: s.pb.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				p = (e, t, r) => Object(i.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: s.pb.POST,
					type: "json",
					data: r
				}),
				m = (e, t) => Object(o.a)(e, {
					...l,
					variables: t
				})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(s.a)(Object(i.a)(e, [o.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.pb.GET,
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
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/models/Post/index.ts"),
				d = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				a = r("./src/reddit/models/Onboarding/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				l = r("./src/redditGQL/operations/PopularFeedElements.json");
			const b = async (e, t) => {
				var r, b, p, m;
				const f = await ((e, t) => Object(n.a)(e, {
					...l,
					variables: t
				}))(e, t);
				if (!f.ok && !(null === (p = null === (b = null === (r = f.body) || void 0 === r ? void 0 : r.data) || void 0 === b ? void 0 : b.popular) || void 0 === p ? void 0 : p.elements)) return f;
				const O = f.body,
					g = ((e, t) => {
						let {
							identity: r,
							popular: n,
							recentPosts: l,
							trendingSubreddits: b
						} = e;
						const p = {};
						let m;
						const [f, O] = n.elements.edges.reduce((e, t, r) => {
							var n, s, i, u;
							const [l, b] = e, f = t.node;
							if (Object(o.k)(f)) {
								const e = f;
								e.subreddit = {
									...e.subreddit
								}, l.push(f), (null === (s = null === (n = f.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (u = null === (i = f.flair) || void 0 === i ? void 0 : i.template) || void 0 === u ? void 0 : u.postStyle) && (p[f.flair.template.id] = Object(c.a)(f.flair.template.postStyle))
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
							Object(s.b)() || console.warn(e), i.c.captureMessage(e)
						}
						l && f.push(...l);
						const g = n.elements.dist,
							j = n.elements.geoFilter,
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
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/isAdHocMultireddit/index.ts"),
				o = r("./src/lib/isFakeSubreddit/index.ts"),
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
				j = r("./src/reddit/selectors/experiments/communityChat.ts"),
				_ = r("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				I = r("./src/reddit/selectors/experiments/devPlatform.ts"),
				v = r("./src/reddit/selectors/platform.ts"),
				h = r("./src/reddit/selectors/subreddit.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				T = r("./src/redditGQL/operations/SubredditPage.json");
			const S = (e, t, r, n) => {
					var s, d;
					const {
						after: c,
						geo_filter: a,
						isMobile: b,
						layout: m,
						limit: f,
						recentPostIds: O,
						sort: T,
						t: S
					} = r, E = Object(y.bb)(e), C = Object(v.q)(e), x = Object(i.a)(t), A = Object(o.a)(t), N = Object(h.W)(e, {
						subredditId: Object(h.I)(e, t)
					}).length > 0, L = Object(y.q)(e), R = Object(y.pb)(e), {
						adsSeenCount: P,
						totalPostsSeenCount: w,
						sessionStartTime: k
					} = Object(g.a)(e), D = Object(I.a)(e), G = Object(_.c)(e), F = Object(j.b)(e) || Object(j.a)(e), U = {
						name: t,
						includeIdentity: E && !e.user.account,
						adContext: {
							layout: m ? m.toUpperCase() : u.a.Card,
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
						includeSubredditRankings: G,
						includeSubredditChannels: F,
						isAdHocMulti: x,
						isAll: t === l.d.All,
						isLoggedOutGatedOptedin: L,
						isLoggedOutQuarantineOptedin: R,
						isPopular: t === l.d.Popular,
						recentPostIds: O || [],
						subredditNames: x ? t.split("+") : []
					};
					return T && (U.sort = T.toUpperCase()), S && (U.range = S.toUpperCase()), b ? U.pageSize = Object(p.a)(m) : f && (U.pageSize = f), C && C.ad && (U.forceAds = {
						ad: C.ad
					}), (C && C.geo_filter || a) && (U.region = C && C.geo_filter || a), c && (U.after = btoa(c)), U
				},
				E = async (e, t, r) => {
					const n = Date.now(),
						i = await ((e, t) => Object(c.a)(e, {
							...T,
							variables: t
						}))(e, t),
						o = Date.now();
					if (!i.ok || !i.body) return i;
					const d = i.body,
						u = Date.now(),
						l = Object(m.a)(d.data),
						b = Date.now(),
						p = [{
							duration: o - n,
							logKeyType: a.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: a.a.gqlNormalizationTiming
						}];
					return Object(a.h)({
						name: s.u.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...i,
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
				method: s.pb.GET,
				data: r && x(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, r) => {
				const a = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? a.richtext_json = r : a.markdown_text = r, Object(s.a)(Object(i.a)(e, [o.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: n.pb.POST,
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
				o = e => e.destSubreddit.id ? {
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
					...o(e),
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
				return v
			})), r.d(t, "e", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/camelCase.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/mapKeys.js"),
				o = r.n(i),
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
							...o()(e, (e, t) => s()(t)),
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
					method: d.pb.GET
				}).then(e => (e.ok && e.body.rules && (e.body = f(e.body)), e)),
				j = e => e.ok ? (e.body = Object(m.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: d.pb.POST,
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
					method: d.pb.POST,
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
				}).then(e => j(e)), v = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: d.pb.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), h = e => e.map(e => encodeURIComponent(e)).join(), y = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: d.pb.POST,
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
			var n = r("./src/reddit/endpoints/post/convert.ts"),
				s = r("./src/reddit/models/Post/index.ts"),
				i = r("./src/reddit/selectors/experiments/supportingLinkAds.ts");
			const o = e => !(!Object(s.B)(e) || !e.adSupplementaryText || "string" != typeof e.adSupplementaryText),
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
					if (!Object(i.a)(r) || !t) return t;
					const n = {};
					for (const [s, i] of Object.entries(t)) n[s] = o(i) ? await d(e, i) : i;
					return n
				}
		},
		"./src/reddit/helpers/ads/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = (e, t) => {
					if (null == e ? void 0 : e.instanceId) return e.instanceId;
					if (null == e ? void 0 : e.impressionid) {
						return t.impressionMap[e.impressionid]
					}
					return null
				},
				s = (e, t, r) => {
					const n = new URLSearchParams;
					return n.append("p", "1"), r ? n.append("impressionid", encodeURIComponent(r)) : n.append("instanceId", encodeURIComponent(t)), `${e}?${n.toString()}`
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
				return p
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				s = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				o = r("./src/reddit/constants/things.ts"),
				d = r("./src/reddit/models/Upload/index.ts"),
				c = r("./src/reddit/models/Vote/index.ts");
			const a = (e, t) => e.rteState ? i.a.toRichTextJSON(e.rteState, t) : e.rtJson || e.text,
				u = (e, t) => {
					let r = [];
					return e.rteState ? r = i.a.toRichTextJSON(e.rteState, t).document : e.rtJson && (r = e.rtJson.document), {
						document: r
					}
				},
				l = (e, t) => JSON.stringify(u(e, t));

			function b() {
				return `${o.a}_${Object(n.a)()}`
			}

			function p(e) {
				let {
					temporalId: t,
					draft: r,
					post: n,
					author: s,
					subredditId: i,
					parentId: o
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
						richtextContent: u(r)
					},
					parentId: o,
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

			function m(e, t) {
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
				i = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
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
					let i = Object(s.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						o = t;
					for (; i && i.depth > r && i.prev && (o = i.prev, (i = Object(s.n)(n, {
							commentLink: o,
							commentsPageKey: e
						})) && !(i.depth <= r)););
					return o.id
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
							const r = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: i.H,
								expEventOverride: t
							});
							return !!(Object(i.wg)(r) ? void 0 : r)
						})(r)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/counters/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/sample/index.ts"),
				i = r("./src/telemetry/helpers/sendCounter.ts");
			const o = (e, t) => {
					Object(i.b)(n.o.Redesign, {
						type: i.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				d = (e, t) => {
					Object(s.b)(10) && Object(i.b)(n.o.Redesign, {
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
				o = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/index.ts");
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
					r.isSponsored && n && (null == g && f + s >= 3 || s - g >= 3) ? (g = s, j.push(r.id)) : r.isSponsored ? r.isSponsored && Object(d.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...o.o(e),
						listing: o.z(e, t)
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
							const i = e.id;
							t.push(i), r[i] = e
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
							i = s.length <= 0,
							o = r.id,
							d = {
								id: o,
								isRoot: i,
								parents: s,
								title: r.topic.title,
								name: r.topic.name
							};
						return i ? (e.topics.push(n(d)), e.dict[o] = e.topics.length - 1) : s.forEach(t => {
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
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/assertNever.ts"),
				s = r("./src/lib/env/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/gold/achievementFlairs.ts"),
				d = r("./src/reddit/actions/gold/customEmojis.ts"),
				c = r("./src/reddit/models/Post/index.ts"),
				a = r("./src/reddit/models/RichTextJson/index.ts"),
				u = r("./src/reddit/models/Subreddit/index.ts"),
				l = r("./src/reddit/helpers/ads/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizeChannelsFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				y = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				T = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				C = r("./src/reddit/helpers/graphql/normalizeSubredditWidgetsFromGql/index.ts"),
				x = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				A = r("./src/reddit/models/Onboarding/index.ts"),
				N = r("./src/reddit/helpers/graphql/helpers.ts");
			const L = (e, t, r, o) => {
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
						const r = Object(g.f)(e, !0);
						d.posts[r.id] = r;
						const {
							crosspostRoot: u
						} = e;
						u && u.type === c.a.Post && u.postInfo && a(u.postInfo, !0), Object(c.o)(e).forEach(e => a(e, !0));
						let b = r.id;
						if (e.authorFlair && (d.authorFlair[r.belongsTo.id] || (d.authorFlair[r.belongsTo.id] = {}), d.authorFlair[r.belongsTo.id][r.author] = Object(p.a)(e.authorFlair)[0]), Object(c.l)(e)) d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(_.a)(e.profile));
						else if (Object(c.n)(e)) d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(v.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(f.a)(e.subreddit));
						else if (Object(c.h)(e)) {
							const t = Object(g.b)(e),
								n = e.impressionId;
							if (!t) return null;
							b = t;
							const s = Object(l.b)(r.permalink, t, n);
							d.posts[t] = {
								...r,
								id: t,
								permalink: s
							}, d.posts[r.id] || (d.posts[r.id] = {
								...r,
								events: []
							}), d.postInstances[e.id] || (d.postInstances[e.id] = []), d.postInstances[e.id].push(t)
						} else try {
							Object(n.a)(e)
						} catch (O) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(s.b)() || console.warn(t), i.c.captureMessage(t)
						}
						const m = o && o.includes(b);
						return t || !b || m || d.postIds.push(b), b
					};
				if (e.forEach(e => a(e)), t) {
					d.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) d.subreddits[e.id] = Object(v.a)(e)
				}
				const u = d.postIds.length - 1;
				return d.token = u >= 0 ? d.postIds[u] : "", r && (d.account = Object(x.a)(r), d.preferences = r.preferences && Object(j.a)(r.preferences, r.interactions) || null), d
			};
			t.a = e => {
				let {
					adhocMultiredditByNames: t,
					all: r,
					identity: n,
					popular: l,
					recentPosts: f,
					subredditInfoByName: g,
					trendingSubreddits: j
				} = e;
				var _, v, P, w, k, D, G, F, U, M;
				if (!g) return {
					reason: u.f.NotFoundSubreddit,
					data: {
						account: n && Object(x.a)(n) || null
					}
				};
				if (Object(u.k)(g)) {
					const {
						banMessage: e,
						banTitle: t,
						publicDescriptionText: r,
						quarantineMessage: s,
						isEmailRequiredForQuarantineOptin: i,
						interstitialWarningMessage: o
					} = g;
					return {
						reason: R(g.forbiddenReason),
						data: {
							account: n && Object(x.a)(n) || null,
							banMessage: e || void 0,
							banTitle: t || void 0,
							description: r,
							quarantineRequiresEmailOptin: i,
							...s ? {
								quarantineMessage: s.markdown,
								quarantineMessageRTJson: Object(N.h)(s.richtext, a.i)
							} : {},
							interstitialWarningMessage: null == o ? void 0 : o.markdown,
							interstitialWarningMessageRTJson: Object(N.h)(null == o ? void 0 : o.richtext, a.i)
						}
					}
				}
				const q = {},
					B = g.devPlatformMetadata;
				let Q;
				const z = g || l || r || t,
					[H, K] = z.elements.edges.reduce((e, t, r) => {
						var n, s, i, o;
						const [d, a] = e, u = t.node;
						if (Object(c.k)(u)) {
							const e = u;
							e.subreddit = {
								...e.subreddit,
								devPlatformMetadata: B
							}, d.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (o = null === (i = u.flair) || void 0 === i ? void 0 : i.template) || void 0 === o ? void 0 : o.postStyle) && (q[u.flair.template.id] = Object(O.a)(u.flair.template.postStyle))
						} else if (Object(A.g)(u)) {
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
					Object(s.b)() || console.warn(e), i.c.captureMessage(e)
				}
				f && H.push(...f);
				const J = z.elements.dist,
					V = L(H, j, n);
				if (g.styles && (V.structuredStyles = {
						data: {
							style: Object(S.a)(g.styles)
						}
					}), V.structuredStyles = {
						data: {
							...g.styles ? {
								style: Object(S.a)(g.styles)
							} : {},
							content: {
								widgets: Object(C.a)(g)
							},
							flairTemplate: q
						}
					}, V.subredditAboutInfo = Object(I.a)(g), g.modPermissions && (V.subredditPermissions = Object.keys(g.modPermissions).length > 0 ? Object(y.a)(g.modPermissions) : void 0), g.rules && (V.subredditRules = Object(T.a)(g.rules).rules), ((null == g ? void 0 : g.answerableQuestions) || g.contentRatingSurvey || g.communityProgressModule) && (V.questions = {
						answerableQuestions: null == g ? void 0 : g.answerableQuestions,
						contentRatingSurvey: null == g ? void 0 : g.contentRatingSurvey,
						communityProgressModule: null == g ? void 0 : g.communityProgressModule
					}), Object(u.k)(g) || Object.assign(V, Object(o.b)(g), Object(d.b)(g)), V.subredditLinks = Object(h.a)({
						data: {
							subredditInfoById: g
						}
					}), V.subredditTopicLinks = Object(E.a)({
						data: {
							subredditInfoById: g
						}
					}), V.userFlair = {
						[g.id]: {
							displaySettings: {
								isEnabled: !!(null === (_ = g.authorFlairSettings) || void 0 === _ ? void 0 : _.isEnabled),
								isSelfAssignable: !!(null === (v = g.authorFlairSettings) || void 0 === v ? void 0 : v.isSelfAssignable),
								isUserEnabled: !!(null === (P = g.authorFlairSettings) || void 0 === P ? void 0 : P.isOwnFlairEnabled),
								position: null === (k = null === (w = g.authorFlairSettings) || void 0 === w ? void 0 : w.position) || void 0 === k ? void 0 : k.toLowerCase()
							},
							permissions: {
								canAssignOwn: !!(null === (D = g.authorFlairSettings) || void 0 === D ? void 0 : D.isSelfAssignable),
								canUserChange: !!((null === (G = g.authorFlairSettings) || void 0 === G ? void 0 : G.isSelfAssignable) && (null === (F = g.authorFlairSettings) || void 0 === F ? void 0 : F.isEnabled) || (null === (U = V.subredditPermissions) || void 0 === U ? void 0 : U.flair) || (null === (M = V.account) || void 0 === M ? void 0 : M.isAdmin))
							},
							applied: g.authorFlair ? Object(p.a)(g.authorFlair)[0] : void 0,
							templates: {},
							templateIds: []
						}
					}, Q && (V.interestTopicRecommendations = Q), V.predictionTournaments = g.predictionTournaments || [], g.channels) {
					const {
						channels: e,
						channelIds: t
					} = Object(b.a)(g.channels);
					V.channels = e, V.channelIds = t
				}
				return {
					...V,
					...null !== J && {
						dist: J
					}
				}
			};
			const R = e => {
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
				return p
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/fbt.js"),
				i = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				o = r("./src/reddit/selectors/user.ts"),
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
				b = Object(d.a)(o.P, i.b, (e, t) => e || t ? {
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
				o = r("./src/reddit/helpers/onboarding/postsConsumedWeekly.ts"),
				d = r("./src/reddit/models/Onboarding/index.ts");
			const c = () => {
					const e = Date.now() - n.yc,
						t = Object(s.b)().filter(t => t.lastVisited >= e),
						r = Object(o.a)();
					return t.length < 3 || r < 50
				},
				a = () => !(() => !i.a.isReady || i.a.isFeatureThrottled(d.e.FeatureGate) || i.a.isFeatureThrottled(d.e.Dismissed))() && c(),
				u = () => !(() => !i.a.isReady || i.a.throttlingData[d.e.FeatureGate] || i.a.isFeatureThrottled(d.e.Triggered) || i.a.isFeatureThrottled(d.e.Dismissed))() && c(),
				l = () => {
					i.a.isFeatureThrottled(d.e.Triggered) || (i.a.throttleFeature(d.e.FeatureGate), i.a.throttleFeature(d.e.Triggered))
				},
				b = () => {
					i.a.throttleFeature(d.e.Dismissed)
				}
		},
		"./src/reddit/helpers/r2/normalizePostFromR2/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/models/Media/index.ts"),
				o = r("./src/reddit/models/PostCreationForm/index.ts"),
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
						type: i.o.TEXT,
						markdownContent: e.selftext,
						obfuscated: n,
						rteMode: e.rte_mode || o.i.RICH_TEXT,
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
					if (t && r) return {
						content: d.mp4.source.url,
						type: i.o.GIFVIDEO,
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
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n);
			const i = e => s()(e).sort((t, r) => {
					const n = e[t.tag.id].tag.text.toLowerCase(),
						s = e[r.tag.id].tag.text.toLowerCase();
					return n < s ? -1 : n > s ? 1 : 0
				}),
				o = e => !e.id && !!e.action
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => ({
					profile: s.T(e),
					post: s.K(e, t),
					media: s.C(e, t),
					subreddit: s.lb(e),
					comment: s.h({
						state: e,
						commentId: t
					})
				}),
				o = e => {
					let {
						state: t,
						commentId: r,
						collapsed: o
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "view",
						noun: o ? "collapsed_comment" : "comment",
						...s.o(t),
						...i(t, r)
					})
				},
				d = e => {
					let {
						state: t,
						commentId: r,
						collapsed: o
					} = e;
					return Object(n.a)({
						source: "comment",
						action: "consume",
						noun: o ? "collapsed_comment" : "comment",
						...s.o(t),
						...i(t, r)
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
					...i(t, e)
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
				o = r("./src/telemetry/index.ts");
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
					...i.o(e),
					subreddit: {
						...i.lb(e) || {},
						id: t,
						...c(e, t)
					},
					source: r.context,
					action: "click"
				}),
				b = (e, t, r) => {
					Object(o.a)(((e, t, r) => ({
						...l(e, t.subredditId, r),
						noun: t.isRelevant ? "restore_related_topic" : "remove_related_topic",
						topicTag: u(e, t.subredditId, t.tagId)
					}))(e, t, r))
				},
				p = (e, t, r, n) => {
					Object(o.a)({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "add_related_topic"
					})
				},
				m = (e, t, r, n) => {
					return !Object(s.i)(e, {
						subredditId: t
					}) && r.id ? Object(o.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, n)) : r.id ? Object(o.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, n)) : Object(o.a)(((e, t, r, n) => ({
						...l(e, t, n),
						topicTag: a(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, n))
				},
				f = (e, t, r, n) => Object(o.a)({
					...l(e, t, n),
					topicTag: a(e, t, r),
					noun: "topic_remove"
				}),
				O = (e, t, r) => Object(o.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				g = (e, t, r) => Object(o.a)({
					...l(e, t, r),
					noun: r.context === n.communitySettings ? "save" : "save_community_topics"
				}),
				j = (e, t, r, n) => {
					const s = l(e, t, n);
					Object(o.a)({
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
				return o
			}));
			var n = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/index.ts");
			const i = e => t => Object(s.a)({
					...n.o(t),
					actionInfo: n.d(t, {
						reason: e
					}),
					source: "feed",
					action: "load",
					noun: "serving",
					feed: n.r(t)
				}),
				o = e => t => Object(s.a)({
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
				i = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(n || (n = {}));
			const o = e => ({
					subreddit: i.lb(e),
					userSubreddit: i.ub(e)
				}),
				d = e => ({
					source: "subreddit_tooltip",
					noun: n.SubredditInlineTooltip,
					action: s.c.VIEW,
					...o(e)
				}),
				c = e => ({
					source: "id_card",
					noun: n.EditSubredditIcon,
					action: s.c.CLICK,
					...o(e)
				}),
				a = e => ({
					source: "id_card",
					noun: n.EditSubredditDescription,
					action: s.c.CLICK,
					...o(e)
				}),
				u = (e, t) => r => ({
					source: "id_card",
					noun: n.SaveDescription,
					action: s.c.CLICK,
					setting: {
						value: String(e),
						oldValue: String(t)
					},
					...o(r)
				}),
				l = (e, t) => ({
					source: "id_card",
					noun: n.Error,
					action: s.c.VIEW,
					...o(e),
					...i.o(e),
					actionInfo: i.d(e, {
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
			const i = (e, t) => {
					var r, n, s, i, o, d, c, a, u, l, b;
					const {
						modNote: p,
						subredditId: m,
						userId: f,
						postId: O,
						commentId: g,
						subredditSearch: j,
						filteredType: _,
						filteredSubredditId: I
					} = t, v = g || (null === (n = null === (r = p) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), h = O || (null === (i = null === (s = p) || void 0 === s ? void 0 : s.postInfo) || void 0 === i ? void 0 : i.id);
					return {
						modnote: {
							type: null == p ? void 0 : p.itemType,
							content: null === (o = p) || void 0 === o ? void 0 : o.note,
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
				o = "moderator",
				d = e => t => ({
					source: o,
					action: "view",
					noun: "modnote_quickaccess",
					correlationId: Object(n.d)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				c = e => t => {
					const r = {
						source: o,
						action: "close",
						noun: "modnote_quickaccess",
						correlationId: Object(n.c)(n.a.ModNotes),
						...s.o(t),
						...i(0, e)
					};
					return Object(n.b)(n.a.ModNotes), r
				},
				a = e => t => ({
					source: o,
					action: "click",
					noun: "relatedcontent_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				u = e => t => ({
					source: o,
					action: "click",
					noun: "relatedcontent_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				l = e => t => ({
					source: o,
					action: "click",
					noun: "relatedcontent_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				b = e => t => ({
					source: o,
					action: "click",
					noun: "expand_modlog_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				p = e => t => ({
					source: o,
					action: "click",
					noun: "expand_modlog_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				m = e => t => ({
					source: o,
					action: "click",
					noun: "expand_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				f = e => t => ({
					source: o,
					action: "click",
					noun: "username_modnote_quickaccess",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				O = e => t => ({
					source: o,
					action: "click",
					noun: "mod_username_modnote_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				g = e => t => ({
					source: o,
					action: "click",
					noun: "username_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				j = e => t => ({
					source: o,
					action: "view",
					noun: "user_profile_hovercard",
					correlationId: Object(n.d)(n.a.ModNotes, !1),
					...s.o(t),
					...i(0, e)
				}),
				_ = e => t => ({
					source: o,
					action: "click",
					noun: "add_note_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				I = e => t => ({
					source: o,
					action: "click",
					noun: "user_mod_log_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				v = e => t => ({
					source: o,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				h = e => t => ({
					source: o,
					action: "view",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				y = e => t => ({
					source: o,
					action: "close",
					noun: "modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				T = e => t => ({
					source: o,
					action: "click",
					noun: "type_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				S = e => t => ({
					source: o,
					action: "click",
					noun: "subreddit_filter_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				E = e => t => ({
					source: o,
					action: "select",
					noun: "type_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				C = e => t => ({
					source: o,
					action: "select",
					noun: "subreddit_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				x = e => t => ({
					source: o,
					action: "submit",
					noun: "submit_note_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				A = e => t => ({
					source: o,
					action: "click",
					noun: "delete_modnote_modlog",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				N = e => t => ({
					source: o,
					action: "click",
					noun: "cancel_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
				}),
				L = e => t => ({
					source: o,
					action: "click",
					noun: "delete_deletemodnote",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...i(0, e)
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
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			const n = 25,
				s = 64;
			var i;
			! function(e) {
				e.EVENT = "EVENT", e.COLLECTION = "COLLECTION", e.CLASSIFICATION = "CLASSIFICATION", e.POST_CLASSIFICATION = "POST_CLASSIFICATION", e.SUBREDDIT_CLASSIFICATION = "SUBREDDIT_CLASSIFICATION", e.COMMENT_CLASSIFICATION = "COMMENT_CLASSIFICATION"
			}(i || (i = {}));
			const o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return {
						id: e.id,
						displayText: e.text,
						selected: t
					}
				},
				d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return o(e.tag, t)
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
				channelIds: {},
				hasShownToastMessage: !1
			};
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.c:
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
					case n.b:
						return {
							...e, hasShownToastMessage: t.payload
						};
					default:
						return e
				}
			}
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
				o = r("./src/reddit/models/SubredditModeration/index.ts");
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
							} = t.payload, i = Object(o.d)(r, n, s);
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
							} = t.payload, i = Object(o.d)(r, n, s);
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
							} = t.payload, d = Object(o.d)(r, n, s, i);
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
					case s.Q: {
						const {
							subredditId: r,
							newModNote: n
						} = t.payload, s = Object(o.d)(r, n.user.id, b.y.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.H: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, i = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, d = Object(o.d)(n, i, b.y.All);
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
								i = Object(o.d)(r, n, b.y.All);
							s[i] = e.id
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
						} = n, i = n.id;
						if (!n.modNote) return e;
						const d = p(n),
							c = Object(o.d)(s, i, b.y.All);
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
								[Object(o.d)(e, r, n)]: s
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
							return Object(v.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
						}
						case s.T: {
							const {
								notes: r
							} = t.payload;
							return Object(v.merge)(e, r.reduce((e, t) => (e[t.id] = t, e), {}))
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
							return Object(v.merge)(e, Object.values(r).reduce((e, t) => {
								const r = m(t),
									n = O(t);
								e[r] = n;
								const s = p(t),
									i = f(t);
								return i ? (e[s] = i, e) : e
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
							filter: i
						} = t.payload;
						if (i !== b.y.All && i !== b.y.Note) return e;
						const d = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(o.d)(n, d, i),
							a = i === b.y.All ? b.y.Note : b.y.All,
							u = Object(o.d)(n, d, a);
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
						} = t.payload, d = Object(o.d)(n, s, i), c = r.map(e => e.id);
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
						} = t.payload, i = Object(o.d)(r, n, b.y.All), d = Object(o.d)(r, n, b.y.Note), c = e[i] ? e[i].filter(e => e !== s) : [], a = e[d] ? e[d].filter(e => e !== s) : [];
						return {
							...e,
							...e[i] ? {
								[i]: c
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
						} = n, i = n.id, d = Object(o.d)(s, i, b.y.All), c = Object(o.d)(s, i, b.y.Note), a = Object(o.d)(s, i, b.y.Ban), u = m(n), l = p(n), f = e[d] ? [l, u, ...e[d]] : [], O = e[c] ? [l, ...e[c]] : [], g = e[a] ? [u, ...e[a]] : [];
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
						} = t.payload, s = Object(o.d)(r, n.user.id, b.y.All);
						return {
							...e,
							[s]: {
								...e[s],
								[b.y.All]: (e[s][b.y.All] || 0) + 1,
								[b.y.Note]: (e[s][b.y.Note] || 0) + 1
							}
						}
					}
					case s.lb: {
						const {
							subredditId: r,
							userId: n,
							totalCounts: s
						} = t.payload, i = Object(o.d)(r, n, b.y.All);
						return {
							...e,
							[i]: Object.keys(s).reduce((e, t) => (e[t] = s[t].totalCount, e), {})
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(o.d)(r, n, b.y.All);
						return {
							...e,
							...void 0 !== e[s] ? {
								[s]: {
									...e[s],
									[b.y.All]: (e[s][b.y.All] || 1) - 1,
									[b.y.Note]: (e[s][b.y.Note] || 1) - 1
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
				i = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				o = r("./src/reddit/actions/modQueue/constants.ts"),
				d = r("./src/reddit/actions/pages/constants.ts"),
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
					case d.b:
					case d.f:
					case l.k:
						return {
							...e, ...t.payload.userFlair
						};
					case o.i:
					case o.f:
					case o.r:
					case o.u:
					case o.A: {
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
							o = null === (p = e[r.subredditId]) || void 0 === p ? void 0 : p.templateIds,
							d = (null === (m = r.template) || void 0 === m ? void 0 : m.id) || (null === (f = r.template) || void 0 === f ? void 0 : f.templateId);
						if (!d) return;
						const c = {
								...i,
								[d]: r.template
							},
							a = [...o];
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
							i = e[r.subredditId].templates,
							o = e[r.subredditId].templateIds,
							d = s()(i, r.templateId),
							c = o.filter(e => e !== r.templateId);
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
						} = t.payload, i = e[r];
						return {
							...e,
							[r]: {
								...i,
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
			const i = [];
			var o = function() {
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
							} = t.payload, s = e[n] ? e[n] : [], i = S(r, s.find(e => e.stickied)), o = v([...s, ...i]);
							return {
								...e,
								[n]: [...o]
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
								[n]: h(T(r), e[n])
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
								[s]: y(r, h(T(n), e[s]))
							}
						}
						case f.L: {
							const {
								optimisticComment: r,
								commentsPageKey: n
							} = t.payload;
							return r ? {
								...e,
								[n]: h(T(r), e[n])
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
							key: i,
							moreCommentsItem: o,
							moreComments: d
						} = t.payload, c = n[o.postId], a = e[i], u = {}, l = a[o.id];
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
							[i]: {
								...e[i],
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
							moreComments: i
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...P(r),
								...P(n),
								...P(i)
							}
						}
					}
					case j.b:
					case f.N: {
						const {
							comment: r,
							commentsPageKey: n,
							headCommentId: s
						} = t.payload, i = e[n], o = {};
						let d = null;
						return s && (o[s] = {
							...i[s],
							prev: Object(L.i)(r.id)
						}, d = Object(L.i)(s)), {
							...e,
							[n]: {
								...e[n],
								...o,
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
							depth: i
						} = t.payload, o = e[n], d = {};
						let c = null;
						if (!o[s]) return e;
						const a = o[s].next;
						return a && (d[a.id] = {
							...o[a.id],
							prev: Object(L.i)(r.id)
						}, c = a), d[s] = {
							...o[s],
							next: Object(L.i)(r.id)
						}, {
							...e,
							[n]: {
								...e[n],
								...d,
								[r.id]: {
									depth: i,
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
			const G = {};
			var F = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
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
				api: m,
				followed: g,
				keyToChatCommentLinks: C,
				keyToCommentThreadLinkSets: w,
				keyToHeadCommentId: D,
				keyToPostId: F,
				ads: o
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
				o = r("./node_modules/lodash/values.js"),
				d = r.n(o),
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
							primaryTag: o
						} = t.payload, c = i()([...(e.selectedOptions[r] || []).map(e => {
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
						return o && (l = {
							...l,
							[r]: o.tag.id
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
						} = t.payload, o = t.type === c.z ? "selectedOptions" : "selectedSuggestedOptions", d = t.type === c.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[d][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						let b = n.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[o]: {
								...e[o],
								[r]: i()([...e[o][r] || [], {
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
						} = t.payload, i = t.type === c.y ? "selectedOptions" : "selectedSuggestedOptions", o = t.type === c.y ? "deselectedOptions" : "deselectedSuggestedOptions", d = (e[o][r] || []).slice(), u = (e[i][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, s));
						return l > -1 && (null === u[l].action && d.push({
							...u[l],
							action: n.REMOVE
						}), u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: u
							},
							[o]: {
								...e[o],
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
							i = n.reduce((e, t) => (e.selectedOptions[t] = d()(r[t]).map(e => ({
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
								o = [...i];
							return t >= 0 && o.splice(t, 1), {
								...s,
								selectedOptions: {
									...e.selectedOptions,
									[r]: o
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
				return G
			})), r.d(t, "s", (function() {
				return F
			})), r.d(t, "F", (function() {
				return U
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
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/objectSelector/index.ts"),
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
				y = Object(o.a)((e, t) => {
					const r = v(e, t),
						n = r && r.id;
					if (!n) return h;
					const {
						commentsPageKey: s
					} = t, i = e.pages.comments.keyToCommentThreadLinkSets[s], o = [];
					let d = {
						id: n,
						type: c.a.Comment
					};
					do {
						o.push(d), d = i[d.id].next
					} while (d);
					return o
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
					const i = e.pages.comments.keyToCommentThreadLinkSets[s];
					return i ? n ? i[n.id] : r ? i[r] : null : null
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
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== i.H).map(t => e.features.comments.models[t].author)))
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
						i = s && Object(b.c)(e, {
							commentId: s
						}),
						o = i && x(e, {
							commentId: i.id,
							commentLink: void 0,
							commentsPageKey: r
						});
					if (i && "number" == typeof o) return {
						...i,
						depth: o
					}
				},
				U = (e, t) => {
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
				z = (e, t) => {
					let {
						draftKey: r
					} = t;
					var n, s, i;
					return (null === (i = null === (s = null === (n = e.features.comments.submit) || void 0 === n ? void 0 : n.error) || void 0 === s ? void 0 : s[r]) || void 0 === i ? void 0 : i.type) || null
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
					const i = ((null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === s ? void 0 : s.followed) || []).find(e => e.id === r);
					return !!(i && i.expiresAt < Date.now())
				},
				re = Object(d.a)(u.b, l.y, (e, t) => {
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
				return i
			})), r.d(t, "d", (function() {
				return o
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
			const i = e => e.discoveryUnits.api.list.loaded,
				o = e => e.discoveryUnits.api.list.pending,
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
						} = t, n = e && e.name || "", s = r && r.subredditName || "", i = "subreddit" === n, o = a.has(s.toLowerCase());
						return i && o
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/communityChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./node_modules/reselect/es/index.js");
			var s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts"),
				o = r("./src/reddit/selectors/features/communityChat/index.ts"),
				d = r("./src/reddit/selectors/platform.ts");
			const c = Object(n.a)(d.c, e => "t5_7bf0ce" === e),
				a = Object(i.a)(s.bc),
				u = Object(n.a)(c, a, (e, t) => e && t),
				l = Object(i.a)(s.D),
				b = Object(n.a)(e => e, d.c, l, (e, t, r) => r && Object(o.a)(e, String(t)).length > 0)
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
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/helpers/isCrosspost.ts"),
				c = r("./src/reddit/models/Media/index.ts"),
				a = r("./src/reddit/selectors/activeModal.ts"),
				u = r("./src/reddit/selectors/experiments/index.ts"),
				l = r("./src/reddit/selectors/posts.ts");
			const b = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: u.e,
						experimentName: i.af
					}) === i.Td
				},
				p = e => !e.media || e.media.type !== c.o.RTJSON && e.media.type !== c.o.TEXT ? "" : e.media.markdownContent,
				m = e => !e.media && e.source && Object(n.a)(e.source.url) ? e.source.displayText : "",
				f = (e, t) => {
					const r = Object(l.F)(e, {
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
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const i = Object(s.a)(n.Ab)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Lb
				}) === n.hd.Enabled,
				o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Kb
				}) === n.gd.Enabled
		},
		"./src/reddit/selectors/experiments/mediaInComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Ge
				}) === n.Td,
				o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Fe
				}) === n.Td,
				d = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.qg
				}) === n.Td
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
				i = r("./src/reddit/selectors/subreddit.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
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
			const f = m(o.ic, !0),
				O = m(o.ic, !1),
				g = m(o.kc, !0),
				j = (m(o.kc, !1), m(o.jc, !0)),
				_ = m(o.jc, !1),
				I = m(o.lc, !0),
				v = m(o.lc, !1),
				h = m(o.hc, !0),
				y = m(o.mc, !0),
				T = Object(s.a)(f, g, (e, t) => e === o.jd.Enabled || t === o.kd.Enabled),
				S = Object(s.a)(j, I, (e, t) => e === o.lb.BlurredPreview || e === o.lb.NoPreview || t === o.lb.BlurredPreview || t === o.lb.NoPreview),
				E = Object(s.a)(_, v, (e, t) => e === o.lb.BlurredPreview || t === o.lb.BlurredPreview),
				C = Object(s.a)(j, I, h, (e, t, r) => e === o.lb.NoPreview || t === o.lb.NoPreview || r === o.kb.Enabled),
				x = Object(s.a)(T, C, E, (e, t, r) => (e || t) && !r),
				A = Object(s.a)(u.h, u.d, a.e, u.j, (e, t, r, n) => !e && !t && !r && n),
				N = e => {
					const t = E(e),
						r = x(e),
						s = A(e);
					return t ? n.Blurred : r || s ? n.NoPreview : null
				},
				L = Object(s.a)(h, e => e === o.kb.Enabled),
				R = e => {
					const t = E(e),
						r = Object(i.m)(e);
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
							i = !!(t && (null == t ? void 0 : t.isNSFW)),
							o = Object(d.G)(e, {
								pageLayer: n
							});
						return r && i && !o
					}
					return !1
				}
		},
		"./src/reddit/selectors/experiments/onboarding.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return u
			})), r.d(t, "i", (function() {
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
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(n.a)(o.e, d.L, (e, t) => e && !t),
				u = e => Object(i.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.Mc
				}),
				l = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.Lc
				}), e => e),
				b = Object(n.a)(e => {
					var t;
					const r = s.Pb;
					for (let n = 0; n < r.length; n++) {
						const o = r[n],
							d = (null === (t = o.split("_").pop()) || void 0 === t ? void 0 : t.toUpperCase()) || "",
							c = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o
							});
						if (c && Object.values(s.nb).includes(c)) return {
							countryCode: d,
							experimentName: o,
							variantName: c
						}
					}
					return null
				}, e => e),
				p = Object(n.a)(e => {
					const t = b(e);
					return (null == t ? void 0 : t.variantName) || void 0
				}, c.a),
				m = (Object(n.a)(p, e => e === s.nb.FruitVeg), Object(n.a)(p, e => e === s.nb.Karma)),
				f = Object(n.a)(p, e => e === s.nb.Randomizer),
				O = Object(n.a)(p, e => e === s.nb.Interactive),
				g = Object(n.a)(p, e => Object.values(s.nb).includes(e)),
				j = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.nc
				}),
				_ = e => Object(i.c)(e, {
					experimentEligibilitySelector: i.a,
					experimentName: s.oc
				})
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
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: o.e,
					experimentName: s.sc
				}), e => e === s.Td),
				c = Object(n.a)(e => Object(i.c)(e, {
					experimentEligibilitySelector: o.f,
					experimentName: s.tc
				}), e => e === s.Td)
		},
		"./src/reddit/selectors/experiments/postGuidance.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.vc
				}) === n.Td
			}
		},
		"./src/reddit/selectors/experiments/supportingLinkAds.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./node_modules/reselect/es/index.js");
			const o = Object(i.a)(e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.Sc
			}), e => e === n.Td)
		},
		"./src/reddit/selectors/experiments/targetedOnboardingSkip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = e => Object(s.c)(e, {
				experimentEligibilitySelector: i.S,
				experimentName: n.Vc
			})
		},
		"./src/reddit/selectors/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return o
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
			const o = (e, t) => {
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
					const t = Object(i.m)(e);
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
					const o = d(e, {
						username: r
					});
					if (!o) return null;
					const c = o[n.a.Twitter];
					if (!c) return null;
					const a = Object(i.m)(e);
					if (!(a && Object(s.e)(a).toLowerCase() === r.toLowerCase())) return c;
					const u = Object(i.Cb)(e, {
						userName: r
					});
					return u ? u.prefShowTwitter ? c : null : c
				}
		},
		"./src/reddit/selectors/features/communityChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "g", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/models/CommunityChat/index.ts"),
				o = r("./src/reddit/reducers/features/communityChat/index.ts");
			Object(s.a)({
				features: {
					communityChat: o.a
				}
			});
			const d = {
					[i.a.SubredditPostChannel]: 0,
					[i.a.SubredditChatChannel]: 1
				},
				c = (e, t) => {
					var r, n;
					return null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.communityChat) || void 0 === n ? void 0 : n.models[t]
				},
				a = (e, t) => {
					var r, n;
					return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.communityChat) || void 0 === n ? void 0 : n.channelIds[t]) || []
				},
				u = Object(n.a)(a, e => !!e.length),
				l = Object(n.a)(e => e, a, (e, t) => t.map(t => c(e, t))),
				b = Object(n.a)(l, e => (e => e.sort((e, t) => {
					var r, n;
					const s = null !== (r = d[e.__typename]) && void 0 !== r ? r : 0,
						i = null !== (n = d[t.__typename]) && void 0 !== n ? n : 0;
					return s !== i ? s - i : e.name - t.name
				}))(e)),
				p = e => {
					var t, r, n;
					return null !== (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.communityChat) || void 0 === r ? void 0 : r.selectedChannelId) && void 0 !== n ? n : ""
				},
				m = Object(n.a)(c, e => {
					var t;
					return (null == e ? void 0 : e.__typename) !== i.a.SubredditChatChannel ? "" : decodeURIComponent(null !== (t = null == e ? void 0 : e.roomId) && void 0 !== t ? t : "")
				}),
				f = Object(n.a)(l, e => e.find(e => e && "SubredditPostChannel" === e.__typename)),
				O = e => {
					var t, r, n;
					return null !== (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.communityChat) || void 0 === r ? void 0 : r.hasShownToastMessage) && void 0 !== n && n
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const o = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(i.hb)({
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
							o = {};
						return r.document ? o.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (o.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: o,
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
				return i
			})), r.d(t, "b", (function() {
				return o
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
			const i = (e, t) => {
					var r, n, s;
					return (null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.predictions) || void 0 === n ? void 0 : n.leaderboards[t.subredditId]) || void 0 === s ? void 0 : s.isFetching) || !1
				},
				o = (e, t) => {
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
				return i
			})), r.d(t, "b", (function() {
				return o
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
				o = e => e.subreddits.api.inlineEditing.pending
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
				o = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/modUserNotes/index.ts");
			Object(o.a)({
				features: {
					modUserNotes: d.a
				}
			});
			const c = Object(n.a)((e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const o = Object(s.d)(r, n, i),
						d = e.features.modUserNotes.order[o];
					return d ? d.map(t => e.features.modUserNotes.models[t]) : []
				}),
				a = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const o = Object(s.d)(r, n, i);
					return e.features.modUserNotes.api.pending[o]
				},
				u = e => e.features.modUserNotes.api.error,
				l = (e, t) => {
					let {
						subredditId: r,
						userId: n,
						filter: i
					} = t;
					const o = Object(s.d)(r, n, i);
					return e.features.modUserNotes.loadMore[o]
				},
				b = (e, t, r) => {
					if (!t || !r) return;
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, i.y.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				p = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, i.y.All)]
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
				return v
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/safeJSONParse/index.ts"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
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
					const t = Object(m.q)(e);
					return Boolean((null == t ? void 0 : t[d.C]) && Object(n.a)(t[d.C]))
				},
				g = e => e.onboarding.shouldSkipOnboardingState,
				j = Object(s.a)(f.S, f.R, O, g, e => {
					var t;
					const r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams,
						n = r.subredditName;
					return Object(p.a)(e) !== o.cg.TargetedOnboarding || n && Object(i.a)(n, {
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
				I = Object(s.a)(b.j, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(o.wg)(e) ? t : null),
				v = Object(s.a)(b.j, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(c.K)(r) || Object(c.L)(r) || Object(c.z)(r)
				}, u.b, l.a, g, (e, t, r, n, s) => e === o.pb.PopoverFeed15 && t && Object(a.c)() && !r && !n && !s)
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/selectors/user.ts");
			const i = e => !Object(s.S)(e) && e.seo.linksModule.frontpage || null,
				o = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				d = Object(n.a)(i, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: o(e.url)
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
				return G
			})), r.d(t, "C", (function() {
				return F
			})), r.d(t, "w", (function() {
				return U
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
				return K
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/some.js"),
				s = r.n(n),
				i = r("./node_modules/lodash/values.js"),
				o = r.n(i),
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
					return s()(v(e, {
						subredditId: r
					}), e => !!e.action) || s()(y(e, {
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
				C = e => e.tags.models.globalSubredditTags,
				x = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				A = (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.tags.models.subredditScopedTags[r] || S
				},
				N = (e, t) => {
					const r = o()(t);
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
					return o()(P(e, {
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
					const s = U(e, {
						subredditId: r
					});
					return o()(((e, t) => {
						let {
							thingId: r,
							suggested: n = !1
						} = t;
						const s = (n ? j(e, {
								subredditId: r
							}) : g(e, {
								subredditId: r
							})) ? x(e) : E(e),
							i = n ? h(e, {
								subredditId: r
							}) : v(e, {
								subredditId: r
							}),
							o = s.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return i.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), o)
					})(e, {
						thingId: r,
						suggested: n
					})).filter(e => !e.selected && e.id !== s)
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
				F = (e, t) => {
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
				U = (e, t) => {
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
					const r = U(e, t);
					return M(e, r)
				},
				Q = e => e.tags.creation.selectedPrimaryTagId || null,
				z = e => {
					const t = Q(e);
					return M(e, t)
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
				return p
			})), r.d(t, "c", (function() {
				return m
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/selectors/gold/powerups/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts"),
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
					const d = Object(o.g)(e, {
							subredditId: r
						}),
						{
							canUserChange: c
						} = s.permissions;
					return !!(i.templateIds || []).find(e => {
						return !i.templates[e].modOnly || d
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
						s = Object(i.e)(e, {
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
				o = r("./src/reddit/helpers/widgets/index.tsx"),
				d = r("./src/reddit/selectors/profile.ts"),
				c = r("./src/reddit/selectors/subreddit.ts");
			const a = [],
				u = e => e.widgets.models,
				l = Object(n.a)((e, t) => Object(o.l)(t) ? e.widgets.models[t.widgetId] : Object(o.f)(t.widgetKind)),
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
						const r = Object(d.k)(e, {
							profileName: t.name
						});
						return r ? {
							profile: {
								id: r.id,
								name: Object(i.i)(r.name)
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
							name: Object(i.i)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"8ab873584a4e"}')
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
			e.exports = JSON.parse('{"id":"4e24021c862f"}')
		},
		"./src/redditGQL/operations/CreateSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"80c9a3cd96b8"}')
		},
		"./src/redditGQL/operations/DeleteModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"c44e6467c4d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"4925e69eba56"}')
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"58b71dbd3384"}')
		},
		"./src/redditGQL/operations/FetchGlobalTags.json": function(e) {
			e.exports = JSON.parse('{"id":"f4a581740c21"}')
		},
		"./src/redditGQL/operations/FetchPostGuidanceConfig.json": function(e) {
			e.exports = JSON.parse('{"id":"8a6cc0e63320"}')
		},
		"./src/redditGQL/operations/FetchSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"bac623887684"}')
		},
		"./src/redditGQL/operations/GetCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"9838b595dd8b"}')
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
			e.exports = JSON.parse('{"id":"a1cf284f1333"}')
		},
		"./src/redditGQL/operations/GetTournamentsBaseInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"cebfc8734cec"}')
		},
		"./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json": function(e) {
			e.exports = JSON.parse('{"id":"023547ccdaf6"}')
		},
		"./src/redditGQL/operations/ModQueueItems.json": function(e) {
			e.exports = JSON.parse('{"id":"f470d740ce5f"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"0ac619d6eb7e"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"aab58d632d84"}')
		},
		"./src/redditGQL/operations/PopularFeedElements.json": function(e) {
			e.exports = JSON.parse('{"id":"61d4100e40bf"}')
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
			e.exports = JSON.parse('{"id":"02e3b6d0d0d7"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"320c0111c5a8"}')
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
			e.exports = JSON.parse('{"id":"82407bcffb95"}')
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
			e.exports = JSON.parse('{"id":"59dceada05c8"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.1b35f3988b01beb33c5f.js.map