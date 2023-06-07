// https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.31a048b5fed229cbefe8.js
// Retrieved at 6/6/2023, 10:20:03 PM by Reddit Dataminer v1.0.0
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
				}, k = e => `viewing-comment-${e}`, D = n.a.telemetry.commentConsumedThreshold, G = e => async (t, r) => {
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
				}, U = (e, t) => async (r, n) => {
					const s = n(),
						i = k(e);
					if (Object(E.c)(s, {
							commentId: e
						}) && o.c.has(i)) {
						const r = o.c.end(i);
						!t && r < D && (clearTimeout(R[e]), delete R[e])
					}
				}, F = Object(i.a)(L.z), M = Object(i.a)(L.y), q = Object(i.a)(L.x), B = (e, t, r) => async (n, s, o) => {
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
					const _ = Object(h.y)(O);
					n(F({
						moreCommentsId: u.id
					}));
					const I = await Object(g.g)(i(), _, {
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
					} else n(q({
						moreCommentsItem: u,
						...I.error
					}))
				}, Q = Object(O.a)(j.b, T.a.upvoted), z = Object(O.a)(j.b, T.a.downvoted), H = Object(i.a)(L.l), K = Object(i.a)(L.k), V = Object(i.a)(L.g), J = Object(i.a)(L.h), $ = (Object(i.a)(L.c), Object(i.a)(L.d), e => {
					let {
						commentId: t,
						commentsPageKey: r,
						scrollToAndRemeasure: n
					} = e;
					return async (e, s) => {
						const o = s(),
							i = Object(v.i)(t),
							d = Object(S.n)(o, {
								commentLink: i,
								commentsPageKey: r
							}),
							c = Object(x.b)(o, {
								commentId: t,
								commentsPageKey: r
							}),
							a = d.depth;
						e(V({
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
						e(J({
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
						e(V({
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
			r.d(t, "c", (function() {
				return i
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
				o = r("./src/reddit/reducers/features/communityChat/index.ts");
			const i = "COMMUNITY_CHAT__SET_SELECTED_CHANNEL_ID",
				d = "COMMUNITY_CHAT__CHANNELS_LOADED",
				c = "COMMUNITY_CHAT__SET_SHOWN_TOAST_MESSAGE";
			Object(n.a)({
				features: {
					communityChat: o.a
				}
			});
			const a = Object(s.a)(i),
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
					const o = {
							subredditName: e.toLowerCase()
						},
						d = _.d.hatefulContentFiltersEnabled(r());
					if (Object(v.a)(r(), o)) return;
					t(E(o));
					let a = Object(y.I)(r(), e);
					if (!a) {
						const r = await Object(j.a)(s(), e, !1);
						if (r.ok) {
							a = r.body.data.subreddit.id
						}
						if (!a) {
							const e = r.error || {
								type: i.K.NOT_FOUND_ERROR
							};
							return void t(C({
								...o,
								error: e
							}))
						}
					}
					const l = Object(h.c)(r(), {
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
							type: i.K.UNKNOWN_ERROR
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
				return V
			})), r.d(t, "r", (function() {
				return J
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
					["image/png", p.v.Png],
					["image/gif", p.v.Gif],
					["image/jpeg", p.v.Jpeg]
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
				G = Object(I.a)(w.e),
				U = Object(I.a)(w.f),
				F = Object(I.a)(w.i),
				M = Object(I.a)(w.h),
				q = Object(I.a)(w.j),
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
							} = await Object(v.i)(i(), {
								subredditId: e,
								period: r,
								top: t,
								includeCurrentRank: d
							}), c = h(o);
							n(G({
								subredditId: e,
								leaderboard: c
							})), s && (n(re(e, s)), null == s || s.forEach(e => {
								let {
									tournamentId: t,
									winners: r
								} = e;
								n(U({
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
				}, V = (e, t) => async (r, n, s) => {
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
							} = await Object(v.j)(o(), {
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
				}, J = e => {
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
							gqlContext: o
						} = s;
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
				}, te = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = r(),
						i = Object(N.I)(o, e),
						d = await Object(v.l)(s(), {
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
					const l = await Object(v.e)(d(), {
							tournamentId: null,
							name: t,
							themeId: r,
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: a,
							currency: p.Y.Tokens,
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
					const c = await Object(v.a)(i(), {
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
					const i = await Object(v.o)(o(), {
							tournamentId: e,
							name: r
						}),
						d = Object(S.a)(i);
					t(ce(d))
				}, ue = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					const o = await Object(v.f)(s(), {
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
					const o = await Object(v.g)(s(), {
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
					const o = await Object(v.h)(s(), {
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
						const d = await e(J({
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
						const r = await Object(v.b)(o(), {
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
				return V
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
				}, w = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", k = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", D = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", G = Object(s.a)(w), U = Object(s.a)(k), F = Object(s.a)(D), M = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(G({
						provider: e
					}));
					const o = Object(_.m)(r()),
						i = Object(f.e)(o),
						d = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.ob.POST
						}))(s(), e);
					d.ok ? t(U({
						provider: e,
						username: i
					})) : t(F({
						provider: e,
						error: d.error
					}))
				}, q = "OAUTH_FLOW_URL_PENDING", B = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", z = Object(s.a)(q), H = Object(s.a)(B), K = Object(s.a)(Q), V = e => async (t, r, s) => {
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
				return v
			})), r.d(t, "j", (function() {
				return h
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
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(o.a)(g), _ = "META__PWA_ENTERED", I = "META__PWA_LEFT", v = Object(o.a)(_), h = Object(o.a)(I)
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
					const t = Object(a.j)(r);
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
				return k
			})), r.d(t, "PAGE_LOADED", (function() {
				return D
			})), r.d(t, "PAGE_FAILED", (function() {
				return G
			})), r.d(t, "pagePending", (function() {
				return U
			})), r.d(t, "pageLoaded", (function() {
				return F
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
				U = Object(i.a)(k),
				F = Object(i.a)(D),
				M = Object(i.a)(G),
				q = () => async (e, t) => {
					const r = t(),
						n = Object(A.a)(r);
					n !== Object(A.rb)(r) && e(Object(p.g)({
						submissionType: n
					}))
				}, B = e => async (t, r, n) => {
					const {
						collectionId: s,
						profileName: i,
						subredditName: c
					} = e, u = Object(d.a)(e), b = r(), m = b.creations.api.page.pending[u], p = b.creations.api.page.fetched[u], j = b.creations.api.page.error[u];
					if (m) return;
					if (p && !j) return void t(q());
					const y = [];
					t(U({
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
					}))(n.apiContext(), {
						subredditName: x,
						collectionId: s
					})), i && (y.push(t(O.d(i))), y.push(t(O.b(i))));
					const [A] = await Object(T.a)("postCreation", () => Promise.all(y));
					if (A.ok) {
						const e = A.body,
							{
								posts: n = {}
							} = e;
						if (t(F({
								key: u,
								meta: b.meta,
								...e,
								posts: n
							})), !Object(P.S)(r())) return;
						t(q());
						const s = [];
						s.push(t(l.o()));
						const i = Object(P.m)(r());
						if (i && i.hasUserProfile && s.push(t(O.d(Object(S.e)(i)))), c && !Object(o.a)(c)) {
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
						subredditName: o,
						profileName: i
					} = e.params, d = e.queryParams, c = d.collection;
					if (await t(B({
							collectionId: c,
							profileName: i,
							subredditName: o
						})), !Object(P.S)(r())) return void Object(y.a)(t, r());
					let a;
					if (o ? (a = Object(R.C)(r(), {
							subredditName: o
						}), await t(Object(u.a)({
							subredditName: o
						}))) : i && (a = Object(L.k)(r(), {
							profileName: i
						})), d.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: o
						} = e, i = [];
						let d;
						s ? d = Object(R.I)(n(), s) : o && (d = Object(P.ob)(n(), {
							userName: o
						})), d && i.push(r(Object(j.b)(d, t))), i.push(r(Object(m.P)(t))), await Promise.all(i);
						const c = Object(N.f)(n(), {
							postId: t
						});
						r(Object(p.m)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, d.source_id));
					else if (c) {
						const o = Object(x.q)(r(), {
							collectionId: c
						});
						a && o && o.subredditId === a.id || t(Object(n.c)(Object(s.a)(e.url, ["collection"])))
					}
					t(b.n({
						title: w(r())
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
					} = e, f = Object(s.a)(e), O = r(), _ = O.creations.api.page.pending[f], I = O.creations.api.page.fetched[f], v = O.creations.api.page.error[f];
					if (_ || I && !v || !m) return;
					t(o.d(p));
					const h = await Object(b.a)("postDraft", () => ((e, t, r) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: d.ob.GET
					}))(n.apiContext(), m, p));
					if (h.ok) {
						const e = h.body;
						e.drafts[m].kind = Object(l.b)(e.drafts[m].kind), t(g({
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
		"./src/reddit/actions/pages/subreddit/index.ts": function(e, t, r) {
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
				U = r("./src/lib/makeGqlRequest/index.ts"),
				F = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				M = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				q = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				B = r("./src/reddit/selectors/widgets.ts");
			const Q = (e, t) => async (r, n) => {
				const s = n(),
					o = Object(q.X)(s, {
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
				t && r(Object(G.b)({
					id: e,
					data: t
				}))
			};
			var H = r("./src/reddit/actions/structuredStyles/index.ts"),
				K = r("./src/reddit/actions/subreddit.ts"),
				V = r("./src/reddit/actions/toaster.ts"),
				J = r("./src/reddit/helpers/localStorage/index.ts"),
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
					d = Object(q.z)(n, {
						subredditName: o
					});
				if (!d) return;
				const {
					activity7Day: c
				} = d, u = !!c && c >= 51 && c <= 100, l = !o || Object(m.a)(o), b = i && i.urlParams.subredditName === o, p = Object(ee.S)(n), f = Object(X.c)(n, {
					subredditId: Object(q.I)(n, o)
				});
				if (l || b || Object(J.J)() || !u || !p || f) return;
				const O = Object(B.d)(t(), {
					subredditName: o
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(V.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${o}${Y.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: W.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(J.Mb)(),
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
				Ue = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Fe = r("./src/reddit/selectors/communityFlairs.ts"),
				Me = r("./src/reddit/selectors/experiments/countrySites.ts"),
				qe = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Be = r("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Qe = r("./src/reddit/selectors/experiments/topPosts.ts"),
				ze = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				He = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Ke = r("./src/reddit/selectors/multireddit.ts"),
				Ve = r("./src/reddit/selectors/posts.ts"),
				Je = r("./src/reddit/endpoints/page/popularFeed.ts"),
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
			const ht = (e, t, r) => async (n, s, o) => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: s,
							reason: o
						}
					} = e, i = s ? s.account : void 0, d = s && s.features || void 0, c = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (o === $.f.NotFoundSubreddit) n(y.u({
							account: i,
							features: d,
							subredditName: c
						}));
						else if (o === $.f.BannedSubreddit) {
						const e = s.banTitle || (null == r ? void 0 : r.banTitle),
							t = s.banMessage || (null == r ? void 0 : r.banMessage);
						n(y.s({
							banMessage: t,
							banTitle: e,
							account: i,
							features: d,
							subredditName: c
						}))
					}
					if (451 === e.status && n(y.t({
							account: i,
							features: d,
							subredditName: c
						})), 403 === e.status)
						if (o === $.f.GoldSubreddit) n(y.x({
							account: i,
							features: d,
							subredditName: c
						}));
						else if (o === $.f.PrivateSubreddit) n(y.y({
						account: i,
						features: d,
						subredditDescription: s.description || "",
						subredditName: c,
						isContributorRequestsDisabled: !!s.isContributorRequestsDisabled,
						isContributorRequestTimestamp: s.isContributorRequestTimestamp ? parseInt(s.isContributorRequestTimestamp, 10) : void 0,
						subredditId: s.id
					}));
					else if (o === $.f.QuarantinedSubreddit) {
						const e = !s || void 0 === s.quarantineRequiresEmailOptin || s.quarantineRequiresEmailOptin;
						n(y.A({
							account: i,
							features: d,
							subredditName: c,
							quarantineRequiresEmail: e,
							quarantineMessage: s.quarantineMessage,
							quarantineMessageHtml: s.quarantineMessageHtml || "",
							quarantineMessageRTJson: s.quarantineMessageRTJson || Ge.i
						}))
					} else if (o === $.f.GatedSubreddit) {
						const {
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: r
						} = s;
						n(y.w({
							account: i,
							features: d,
							subredditName: c,
							interstitialWarningMessage: e,
							interstitialWarningMessageHtml: t,
							interstitialWarningMessageRTJson: r
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
				var a, l, b, p, f, O, g, j, y, T, R, w, D, G, B, H, J, Y, X, te, ce, ae, Se, Ee, Ce, xe, Pe, De, Ge, Fe;
				const Be = d(),
					Qe = Object(ee.R)(Be) || Object(ee.S)(Be);
				if (Object(I.a)(Be.listings.postOrder.api.pending, e)) return;
				const Ke = null === (l = null === (a = Object(Z.b)(Be)) || void 0 === a ? void 0 : a.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
					{
						currentPage: Ve
					} = Be.platform,
					{
						countryCode: $e,
						languageCode: We
					} = (null == Ve ? void 0 : Ve.urlParams) || {},
					Ze = Object(m.a)(t, {
						countryCode: $e,
						languageCode: We
					}),
					et = Object(m.c)(t, {
						countryCode: $e,
						languageCode: We
					}),
					tt = (Object(m.b)(t, {
						countryCode: $e,
						languageCode: We
					}) || et) && Be.posts.recent.length ? {
						...r,
						recentPostIds: Be.posts.recent
					} : r;
				tt.layout = ue.e[Object(le.U)(Be, {})], et && (tt.forceGeopopular = !0), i(Et({
					key: e
				}));
				const st = !Ze && Object(Z.l)(Be) && Object(qe.b)(Be),
					ct = et && (Object(ft.a)(Be) || Object(ft.b)(Be)),
					at = et && jt(Be);
				let ut, Ot;
				if ((ct || at) && (ut = Object(_.i)(() => Object(Je.a)(c.gqlContext(), Object(pe.c)(Be, t, tt, !0)), {
						name: st ? "fetchSubredditPageFromGql" : "fetchSubredditPage",
						page: Ke,
						isLoggedIn: Qe
					})), ct) Ot = ut;
				else if (r.sort === u.bb.AWARDED && et) Ot = Object(be.a)(c.gqlContext(), {
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
					const e = st ? () => Object(pe.b)(c.gqlContext(), Object(pe.c)(Be, t, tt, !0), Qe) : () => Object(pe.a)(c.apiContext(), t, tt);
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
						return Object(U.a)(e, {
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
						const p = Object(he.j)(e),
							f = !!p && !Object(Oe.yg)(p) && (o || p === Oe.ob.Community),
							{
								adsSeenCount: O,
								totalPostsSeenCount: g,
								sessionStartTime: j
							} = Object(_e.a)(e),
							_ = Object(ve.c)(e),
							I = Object(Ie.b)(e) || Object(Ie.a)(e),
							v = {
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
						gatewayResponse: Tt.body,
						normalizedGqlResponse: e.body,
						rawGqlResponse: e,
						ignorePaths: dt,
						normalizeFunction: lt
					})
				}
				let Pt = Tt.body;
				const wt = (null == Pt ? void 0 : Pt.subreddits) ? Nt(Pt.subreddits, t) : null,
					kt = Object(pt.a)(Be);
				Pt = await At({
					subredditName: t,
					subredditsResponse: Pt,
					isInGqlSubredditExperiment: st,
					extraArgs: c,
					isPopular: et,
					state: Be,
					isInDevPlatformExperiment: kt
				}), i(k.o(Tt.status));
				const Dt = `error-${e}`,
					Gt = Ze || wt;
				if (Tt.ok && Gt || et && Pt) {
					if ((et || !Ze && wt) && Pt.geoFilter && i(Object(N.k)(Pt.geoFilter)), !Ze && wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e, t;
						e = st ? Pt : Object(x.b)(null == Rt ? void 0 : Rt.subredditInfoByName), Object(x.a)(i, wt, e), t = st ? Pt : Object(A.b)(null == Rt ? void 0 : Rt.subredditInfoByName), Object(A.a)(i, wt, t);
						const r = (null === (p = null === (b = null == Pt ? void 0 : Pt.subredditAboutInfo) || void 0 === b ? void 0 : b[wt]) || void 0 === p ? void 0 : p.detectedLanguage) || (null === (f = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === f ? void 0 : f.detectedLanguage);
						Object(It.d)(Be) && r && Object(Me.f)(Be) && await Object(mt.a)(r, i), Pt.subredditAboutInfo[wt].detectedLanguage = r, st ? i(Object(E.n)(wt, Pt.predictionTournaments || [])) : (null == Rt ? void 0 : Rt.subredditInfoByName) && i(Object(E.n)(wt, Rt.subredditInfoByName.predictionTournaments || []))
					}
					let n;
					const s = null === (O = Pt.postIds) || void 0 === O ? void 0 : O.filter(e => !!Pt.posts[e].isMeta);
					if (s && s.length && wt) {
						const e = Object(_.i)(() => Object(me.a)(c.apiContext(), wt, s), {
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
						t && r && i(Object(Xe.d)({
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
					if (vt(Rt) && function(e, t) {
							var r, n, s, o, i;
							if (!Object($.m)(null == t ? void 0 : t.subredditInfoByName))
								for (const d of (null === (n = null === (r = t.subredditInfoByName) || void 0 === r ? void 0 : r.elements) || void 0 === n ? void 0 : n.edges) || []) {
									const t = null == d ? void 0 : d.node,
										r = t.id,
										n = null !== (o = null === (s = null == t ? void 0 : t.media) || void 0 === s ? void 0 : s.packagedMedia) && void 0 !== o ? o : void 0,
										c = null === (i = e.posts[r]) || void 0 === i ? void 0 : i.media;
									c && "video" === c.type && (c.packagedMedia = n)
								}
						}(Pt, Rt), wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e;
						st ? e = null === (J = Pt.subredditAboutInfo[wt]) || void 0 === J ? void 0 : J.notificationLevel : vt(Rt) && (e = null === (Y = Rt.subredditInfoByName) || void 0 === Y ? void 0 : Y.notificationLevel), Pt.subredditAboutInfo[wt].notificationLevel = e
					}
					if (wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e;
						vt(Rt) && (e = null === (X = Rt.subredditInfoByName) || void 0 === X ? void 0 : X.isMuted), st && (e = null === (te = Pt.subredditAboutInfo[wt]) || void 0 === te ? void 0 : te.isMuted), Pt.subredditAboutInfo[wt].isMuted = e
					}
					const a = null === (ce = Pt.subredditPermissions) || void 0 === ce ? void 0 : ce.posts;
					!st && a && i(Object(L.a)({
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
					u && i(Object(P.subredditInterestTopicsLoaded)({
						interestTopicRecommendations: u
					})), i(Ct({
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
						st && Pt.subredditRules ? i(K.t({
							rules: {
								rules: Pt.subredditRules
							},
							subredditId: e
						})) : (null === (Ee = null == Rt ? void 0 : Rt.subreddit) || void 0 === Ee ? void 0 : Ee.rules) && i(K.t({
							rules: Object(Re.a)(Rt.subreddit.rules),
							subredditId: e
						}));
						const r = Object(He.g)(d(), {
								subredditId: e
							}),
							n = null === (Ce = null == Pt ? void 0 : Pt.userFlair) || void 0 === Ce ? void 0 : Ce[e];
						st && e && (r || (null == n ? void 0 : n.applied) || (null === (xe = null == n ? void 0 : n.permissions) || void 0 === xe ? void 0 : xe.canUserChange)) && i(Object(ie.fetchUserFlairFromGql)(e, t));
						const s = Object(h.c)(Pt.posts, e),
							o = Object(h.b)(Pt.structuredStyles),
							c = (o ? Object(h.d)(o) : []).concat(s);
						i(Object(h.a)(c, e))
					}
					if (o && i(V.g(Dt)), i(Object(v.b)(Ue.a.SUBREDDIT)), i(Object(C.p)()), wt && !Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName)) {
						let e, r, n;
						if (st ? (e = Pt.questions, r = Pt.subredditLinks, n = Pt.subredditTopicLinks) : (e = null == Rt ? void 0 : Rt.subredditInfoByName, r = Object(F.a)({
								data: {
									subredditInfoById: null == Rt ? void 0 : Rt.subredditInfoByName
								}
							}), n = Object(M.a)({
								data: {
									subredditInfoById: null == Rt ? void 0 : Rt.subredditInfoByName
								}
							})), Object(re.a)(i, wt, e), i(Q(wt, r)), i(z(wt, n)), !st && (null === (De = null === (Pe = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === Pe ? void 0 : Pe.elements) || void 0 === De ? void 0 : De.edges)) {
							const e = (null === (Fe = null === (Ge = null == Rt ? void 0 : Rt.subredditInfoByName) || void 0 === Ge ? void 0 : Ge.elements) || void 0 === Fe ? void 0 : Fe.edges).map(e => {
								var t, r;
								return null === (r = null === (t = e.node) || void 0 === t ? void 0 : t.moderationInfo) || void 0 === r ? void 0 : r.lastAuthorModNote
							});
							i(Object(ne.e)({
								subredditId: wt,
								nodes: e
							}))
						} else if (st && (null == Pt ? void 0 : Pt.postIds)) {
							const e = Pt.postIds.map(e => null == Pt ? void 0 : Pt.posts[e].lastAuthorModNote);
							e && i(Object(ne.e)({
								subredditId: wt,
								nodes: e
							}))
						}
						const s = [Object(_.i)(() => i(Object(S.a)({
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
							const e = Object(_.i)(() => i(Object(se.h)(t, wt)), {
									name: "subredditSettingsRequested",
									isLoggedIn: Qe,
									page: Ke
								}),
								r = Object(_.i)(() => i(Object(oe.g)(wt, we.a.idCard)), {
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
					if (Object(ke.a)(s ? `${Tt.status||"000"}: ${s.type}` : "000: UNKNOWN_ERROR")(d()), 403 === Tt.status || 404 === Tt.status || 451 === Tt.status) return void(Object($.m)(null == Rt ? void 0 : Rt.subredditInfoByName) ? i(ht(Tt, t, null == Rt ? void 0 : Rt.subredditInfoByName)) : i(ht(Tt, t)));
					i(xt({
						error: !Tt.ok && Tt.error || {
							type: u.K.NOT_FOUND_ERROR
						},
						key: e,
						...Pt
					})), o && i(V.f({
						id: Dt,
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
				Object(Ve.y)(o, {
					listingKey: i
				}).length > 0 || await n(Lt(i, e, t, r))
			}, Pt = (e, t, r, n) => {
				const s = Object(Me.b)(e);
				if (Object(m.a)(t, {
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
				const o = Object(q.ab)(e, {
					subredditName: t
				});
				if (s) {
					const r = Object(q.z)(e, {
							subredditName: t
						}),
						n = r && r.detectedLanguage;
					return Object(j.a)(e, o, n)
				}
				return o
			}, wt = (e, t, r, n) => n ? Object(O.b)(e.subredditName, void 0, n) : Object(f.a)(e.subredditName, t, r), kt = (e, t) => async (r, s) => {
				var o, i, d;
				const {
					countryCode: b,
					languageCode: p,
					channelId: g
				} = e.params, j = Object(l.e)(e.params), {
					styling: y
				} = e.queryParams, S = s(), E = Object(Ee.a)(e.params, S), x = () => {
					if (g) r(Object(Xe.f)(g));
					else {
						const e = Object(_t.c)(s(), F);
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
						languageCode: p
					}, E, e.queryParams, A),
					L = E,
					P = Object(I.a)(S.listings.postOrder.api.error, N),
					D = Object(I.a)(S.listings.postOrder.api.pending, N);
				let G = !!Object(I.a)(S.listings.postOrder.ids, N);
				const U = Object(I.a)(S.listings.postOrder.listingSort, N);
				U && U.hasChanged && (G = !1);
				let F = Object(q.I)(S, j);
				const M = (e, t) => "true" === y && ((e, t) => Object(He.b)(De.c.config)(e, {
						subredditId: t
					}) || Object(He.b)(De.c.flair)(e, {
						subredditId: t
					}))(e, t),
					B = ae.H in e.queryParams && e.queryParams[ae.H].toUpperCase() || "",
					Q = B in u.nc && u.nc[B];
				if (D || G && !P && !t) {
					if (M(S, F) && r(H.i(F)), G) {
						const t = Pt(s(), j, b, p);
						r(k.n({
							title: t
						})), (null === (o = S.listings.postOrder.correlationIds) || void 0 === o ? void 0 : o[N]) && r(k.p({
							correlationId: S.listings.postOrder.correlationIds[N]
						})), Object(Se.g)(s(), r, e), window.addEventListener("load", () => {
							r(Object(C.p)())
						}), S.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(v.b)(Ue.a.SUBREDDIT))
						}), r(te())
					}
					return Object(Be.e)(s()) && r(Object(R.a)()), void(Object(Ie.d)(S) ? x() : Object(Ie.d)(S) || !g || Object(_t.g)(S) || (r(Object(Xe.e)(!0)), r(V.f({
						kind: W.b.Error,
						text: n.fbt._("This experience is currently only available on the iOS and Android apps.", null, {
							hk: "3V9YHz"
						})
					}))))
				}
				r(T.g());
				const z = null === (d = null === (i = Object(Z.b)(S)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
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
						...c()(e.queryParams, [...ae.p, ...ae.o, ae.l]),
						sort: L,
						t: Object(Ce.a)(L, Q)
					};
					await r(Lt(N, j, t, !0))
				}
				const J = S.platform.currentPage,
					$ = Object(Qe.d)(S, {
						pageLayer: J
					});
				if (Object(Qe.a)($) || Object(Qe.b)($) || Object(Qe.c)($)) {
					const e = Object(f.a)(j, u.bb.TOP, {
							t: u.nc.WEEK
						}),
						t = {
							sort: u.bb.TOP,
							t: u.nc.WEEK
						};
					await r(Lt(e, j, t, !1))
				}
				if (Object(Be.e)(s()) && r(Object(R.a)()), F = F || Object(q.I)(s(), j), !Object(Fe.a)(S, F) && !Object(m.a)(j, {
						countryCode: b,
						languageCode: p
					})) {
					const e = Object(_.i)(() => r(Object(h.e)(j)), {
						name: "getTopCommunityFlair",
						page: z,
						isLoggedIn: K
					});
					await e
				}
				M(s(), F) && r(H.i(F)), Object(Se.g)(s(), r, e);
				const Y = Pt(s(), j);
				r(k.n({
					title: Y
				})), r(te()), Object(Ie.d)(S) && x()
			}, Dt = "PAGE__SUBREDDIT_INVALIDATE_LISTING", Gt = Object(p.a)(Dt)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "D", (function() {
				return n
			})), r.d(t, "L", (function() {
				return s
			})), r.d(t, "M", (function() {
				return o
			})), r.d(t, "l", (function() {
				return i
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
				return m
			})), r.d(t, "R", (function() {
				return p
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
				return U
			})), r.d(t, "u", (function() {
				return F
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
				return V
			})), r.d(t, "a", (function() {
				return J
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
				return oe
			}));
			const n = "POST_GUIDANCE_VALIDATION",
				s = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				o = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				i = "POST_CREATION_EDIT_COMPLETE",
				d = "POST_CREATION_EDIT_FAILED",
				c = "POST_CREATION_PENDING_EDIT",
				a = "POST_CREATION_START_EDITING_POST",
				u = "POST_CREATION_STOP_EDITING_POST",
				l = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				b = "STARTED_CONVERTING_EDITOR_CONTENT",
				m = "FINISHED_CONVERTING_EDITOR_CONTENT",
				p = "POST_CREATION__TOGGLE_EDITOR_MODE",
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
				U = "POST_CREATION__RESET_FORM",
				F = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				M = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				q = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				B = "POST_CREATION__PENDING",
				Q = "POST_CREATION__SUCCEEDED",
				z = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				K = "POST_CREATION__VALIDATION_FAILED",
				V = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				J = "POST_CREATION__CAPTCHA_REQUIRED",
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
				oe = "POST_CREATION__UPDATE_TALK"
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
				return K
			})), r.d(t, "B", (function() {
				return V
			})), r.d(t, "D", (function() {
				return J
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
				U = Object(d.a)(E.j),
				F = Object(d.a)(E.q),
				M = Object(d.a)(E.T),
				q = Object(d.a)(E.S),
				B = (Object(d.a)(E.U), Object(d.a)(E.V)),
				Q = Object(d.a)(E.W),
				z = Object(d.a)(E.X),
				H = Object(d.a)(E.Y),
				K = Object(d.a)(E.Z),
				V = Object(d.a)(E.ab),
				J = Object(d.a)(E.db),
				$ = (Object(d.a)(E.cb), Object(d.a)(E.bb)),
				W = Object(d.a)(E.r),
				Y = s()((e, t) => {
					Object(i.a)(t) && e((e => async (t, r, n) => {
						let {
							apiContext: s
						} = n;
						const o = await Object(u.e)(s(), e);
						o.ok && o.body && o.body.json && o.body.json.data && t(x(o.body.json.data))
					})(t))
				}, 500),
				X = e => async t => {
					t(R(e)), Y(t, e)
				}, Z = Object(d.a)(E.F), ee = (e, t) => async (r, n) => {
					r(Z()), r(e ? Object(o.b)(I.b) : Object(o.b)(Object(T.fb)(n(), {
						pageLayer: t
					})))
				}, te = e => async t => {
					t(c.i(e))
				}, re = e => async (t, r) => {
					const n = r(),
						s = Object(a.I)(e),
						o = Object(T.H)(n);
					if (s && o) {
						Object(v.a)(n) !== j.d && t(te(j.d))
					} else t(ee(!1, e))
				}, ne = e => async (t, r) => {
					const n = r();
					Object(y.m)(n, {
						subredditId: e
					}) ? t(c.i(j.a)) : t(c.i(j.c))
				}, se = Object(d.a)(E.B), oe = Object(d.a)(E.C), ie = Object(d.a)(E.z), de = Object(d.a)(E.A), ce = e => async (t, r) => {
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
								o = Object(S.b)(r);
							e(be(t, n, s, void 0, o))
						} else Object(S.j)(r) && !Object(S.d)(r) && e(me())
				}, ue = ["torrents", "IsolatedVocals"], le = ["askreddit", "teenagers"], be = (e, t, r, n, s) => async (o, i, d) => {
					let {
						apiContext: c,
						gqlContext: a
					} = d;
					const u = i();
					if (Object(S.i)(u)) return;
					o(oe());
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
					let v = {};
					const y = {},
						T = {},
						E = [];
					if (!j.body || !j.ok) return o(ce(!1)), void o(ie()); {
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
							})(d)) return o(ce(!1)), o(se({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(g.H)(i()), void o(ie());
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
					o(ce(!1)), o(se({
						subreddits: I,
						subredditsAboutInfo: v,
						unavailableSubreddits: y,
						recSubsDict: T,
						recSubsOrder: E
					})), 0 === Object(S.c)(i()).length && o(ie())
				}, me = () => async (e, t, r) => {
					let {
						apiContext: n,
						gqlContext: s
					} = r;
					const o = t();
					if (Object(S.i)(o)) return;
					e(oe());
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
					if (!m.ok || !m.body) return e(ie()), void e(ce(!1)); {
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
					e(ce(!1)), e(se({
						subreddits: i,
						subredditsAboutInfo: d,
						unavailableSubreddits: c,
						recSubsDict: a,
						recSubsOrder: u
					})), 0 === Object(S.c)(t()).length && e(ie())
				}
		},
		"./src/reddit/actions/postGuidance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = "POST_GUIDANCE_CONFIG_FAILED",
				s = "POST_GUIDANCE_CONFIG_LOADED",
				o = "POST_GUIDANCE_CONFIG_PENDING"
		},
		"./src/reddit/actions/postGuidance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/FetchPostGuidanceConfig.json"),
				c = r("./src/reddit/endpoints/subreddit/about.ts"),
				a = r("./src/reddit/selectors/postGuidance.ts"),
				u = r("./src/reddit/selectors/subreddit.ts"),
				l = r("./src/reddit/actions/postGuidance/constants.ts");
			const b = Object(s.a)(l.b),
				m = Object(s.a)(l.c),
				p = Object(s.a)(l.a),
				f = e => async (t, r, s) => {
					let {
						gqlContext: l
					} = s;
					var f, O, g;
					const j = {
						subredditName: e.toLowerCase()
					};
					if (Object(a.a)(r(), j)) return;
					t(m(j));
					let _, I = Object(u.I)(r(), e);
					if (!I) {
						const r = await Object(c.a)(l(), e, !1);
						if (r.ok) {
							const e = r.body;
							I = null === (O = null === (f = null == e ? void 0 : e.data) || void 0 === f ? void 0 : f.subreddit) || void 0 === O ? void 0 : O.id
						}
						if (!I) {
							const e = r.error || {
								type: n.K.NOT_FOUND_ERROR
							};
							return void t(p({
								...j,
								error: e
							}))
						}
					}
					const v = await ((e, t) => Object(i.a)(e, {
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
							type: n.K.UNKNOWN_ERROR
						};
						t(p({
							...j,
							error: r
						})), o.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: v.body,
								responseOk: v.ok
							}), o.c.captureMessage("issue with post guidance service")
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
				o = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/listingSort/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/actions/modQueueTriggers/index.ts"),
				m = r("./src/reddit/actions/pages/subreddit/index.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
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
				U = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				F = r("./src/reddit/models/Toast/index.ts"),
				M = r("./src/reddit/models/User/index.ts"),
				q = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				B = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Q = r("./src/reddit/selectors/profile.ts"),
				z = r("./src/reddit/selectors/subreddit.ts"),
				H = r("./src/reddit/selectors/user.ts"),
				K = r("./src/lib/isFakeSubreddit/index.ts"),
				V = r("./src/reddit/endpoints/page/popularFeed.ts"),
				J = r("./src/reddit/selectors/experiments/popularGqlMigration.ts");
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
					await (t === G.g.User ? r(le(e)) : r(be(e)))
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
							fetchedTokens: G
						} = p.listings.postOrder,
						U = !(!G[x] || !G[x][A.token]);
					if (k || U) return;
					if (w === i.bb.AWARDED && l === I.g) return;
					t(ne({
						key: x,
						fetchedToken: A.token
					}));
					const F = {
							after: A.token,
							dist: A.dist,
							forceGeopopular: l === I.d.Popular,
							layout: h.e[Object(y.U)(p, {})],
							sort: w,
							t: m,
							...o()(g, [...v.p, v.l])
						},
						M = !Object(K.a)(l, {
							countryCode: S,
							languageCode: E
						}) && Object(q.a)(p);
					let Q;
					Q = Object(K.c)(l, {
						countryCode: S,
						languageCode: E
					}) && (Object(J.a)(p) || Object(J.b)(p)) ? () => Object(V.a)(c(), Object(C.c)(p, l, F, !0)) : M ? () => Object(C.b)(c(), Object(C.c)(p, l, {
						...F,
						limit: h.a
					}), Object(H.bb)(p)) : () => Object(C.a)(s(), l, F);
					const $ = await Q(),
						W = {
							...$.body,
							...Object(R.a)(p, x, $.body)
						};
					if ($.ok) {
						if (!M) {
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
						if (!M && i && t(Object(b.a)({
								postIds: W.postIds
							})), t(se({
								fetchedToken: A.token,
								key: x,
								meta: p.meta,
								governance: e,
								...W
							})), Object(B.i)(p, o)) {
							let e;
							M || (e = await Object(C.b)(c(), Object(C.c)(p, l, {
								...F,
								limit: h.a
							}), Object(H.bb)(p)));
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
				}, ve = "SUBREDDIT__ABOUT_PENDING", he = "SUBREDDIT__ABOUT_SUCCEEDED", ye = "SUBREDDIT__ABOUT_FAILED", Te = Object(c.a)(ve), Se = Object(c.a)(he), Ee = Object(c.a)(ye), Ce = e => async (t, r, n) => {
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
						a = r === U.e.View ? null === (d = Object(H.h)(s(), c)) || void 0 === d ? void 0 : d.subredditId : Object(z.I)(s(), c),
						u = Object(H.m)(s());
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
							n(Object(p.D)({
								subredditId: a,
								prefs: t
							})), Object(N.j)(a, t, i()), r !== U.e.View && n(Object(l.i)(_.a.CONTRIBUTOR_REQUEST_PENDING))
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
				return d
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				o = r("./src/reddit/models/Subreddit/index.ts"),
				i = r("./src/reddit/actions/subreddit/constants.ts");
			const d = e => async (t, r, o) => {
				let {
					gqlContext: i
				} = o;
				var d;
				const a = (await ((e, t) => Object(n.a)(e, {
					...s,
					variables: t
				}))(i(), {
					id: e
				})).body;
				c(t, e, null === (d = a.data) || void 0 === d ? void 0 : d.subredditInfoById)
			};

			function c(e, t, r) {
				if (Object(o.m)(r)) return;
				const n = null == r ? void 0 : r.answerableQuestions,
					s = null == r ? void 0 : r.contentRatingSurvey,
					d = null == r ? void 0 : r.communityProgressModule;
				(n || s || d) && e({
					type: i.D,
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
							sr: Object(a.i)(f) ? s.pc + f.name : f.name
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
				return G
			})), r.d(t, "b", (function() {
				return U
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
					} = Object(p.a)(o(), e), I = n.Ob[_], h = {
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
				}, D = Object(s.a)(i.lb), G = (e, t) => async (r, n, s) => {
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
				}, U = (e, t, r, n) => async (s, o, i) => {
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
				return w
			})), r.d(t, "a", (function() {
				return D
			})), r.d(t, "b", (function() {
				return U
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
				return J
			})), r.d(t, "i", (function() {
				return $
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
						commentContributionSettings: l,
						discoverySettings: b,
						isNsfw: m,
						language: p,
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
						banEvasionFilterSettings: U
					} = e;
					return {
						allowGalleries: _.includes(O.O.Gallery),
						allowImages: _.includes(O.O.Image),
						allowVideos: _.includes(O.O.Video),
						allowPolls: _.includes(O.O.Poll),
						archivePostsEnabled: s,
						allowDiscovery: o,
						allowChatPostCreation: i,
						allowPostCrossposts: d,
						allowPredictionContributors: a,
						allowPredictions: c,
						allowPredictionsTournament: u,
						banEvasionFilterSettings: U,
						commentContributionSettings: l,
						discoverySettings: b,
						contentVisible: v,
						crowdControlLevel: I(null == R ? void 0 : R.crowdControlLevel),
						crowdControlChatLevel: I(null == R ? void 0 : R.crowdControlChatLevel),
						crowdControlPostLevel: I(null == R ? void 0 : R.crowdControlPostLevel),
						disableContributorRequests: E,
						isChatPostFeatureEnabled: g,
						language: p,
						modmailHarassmentFilterEnabled: C,
						over18: m,
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
						archivePostsEnabled: o,
						allowDiscovery: i,
						allowGalleries: d,
						allowImages: c,
						allowVideos: a,
						allowChatPostCreation: u,
						allowPolls: l,
						allowPostCrossposts: b,
						allowPredictionContributors: m,
						allowPredictionsTournament: p,
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
						restrictCommenting: U,
						restrictPosting: F,
						spamLinks: M,
						spamSelfposts: q,
						spamComments: B,
						spoilersEnabled: Q,
						showMedia: z,
						showMediaPreview: H,
						submitLinkLabel: K,
						submitTextLabel: V,
						submitText: J,
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
						isDiscoveryAllowed: i,
						isArchivePostsEnabled: o,
						isPredictionContributorsAllowed: m,
						isPredictionsTournamentAllowed: p,
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
						restrictCommenting: U,
						restrictPosting: F,
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
				U = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				F = Object(a.a)(U),
				M = (e, t) => async (r, n, s) => {
					let {
						apiContext: o,
						gqlContext: i
					} = s;
					var d, c;
					const a = n(),
						b = !Object(u.b)(e);
					if (!t || !Object(N.Z)(a, t)) {
						const t = await (b ? Object(l.b)(i(), e) : Object(l.c)(o(), e)),
							n = b ? g(null === (c = null === (d = null == t ? void 0 : t.body) || void 0 === d ? void 0 : d.data) || void 0 === c ? void 0 : c.subredditInfoByName) : t.body;
						t && t.ok && r(k(n))
					}
					if (t && !Object(L.b)(a, {
							subredditId: t
						})) {
						const e = await Object(p.a)(i(), t);
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
					s && await e(M(c.pc + Object(A.e)(s)))
				}, B = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", Q = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", z = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", H = Object(a.a)(B), K = Object(a.a)(Q), V = Object(a.a)(z), J = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					return async (i, c, a) => {
						let {
							apiContext: u,
							gqlContext: f
						} = a;
						var O, j, _;
						i(H());
						const I = c(),
							v = o()(Object(N.Z)(I, e), ...Object.keys(t)),
							h = o()(Object(L.b)(I, {
								subredditId: e
							}), ...Object.keys(r)),
							y = E(t),
							T = await Object(l.f)(f(), e, y),
							S = Object.keys(r).length > 0;
						let A = !0;
						if (S) {
							A = (await Object(p.b)(f(), e, r)).ok
						}
						if (T.ok && (!S || A)) {
							const o = g(null === (_ = null === (j = null === (O = null == T ? void 0 : T.body) || void 0 === O ? void 0 : O.data) || void 0 === j ? void 0 : j.updateSubredditSettings) || void 0 === _ ? void 0 : _.subreddit);
							i(K({
								settings: {
									...o,
									subredditId: e
								},
								idCardWidgetId: Object(P.c)(I, {
									subredditId: e
								})
							})), S && i(F({
								notificationSettings: r,
								subredditId: e
							}));
							const c = {};
							return s && 0 === d()(Object.keys(t), Object.keys(v)).length && (c.buttonText = n.fbt._("Undo", null, {
								hk: "1Gskii"
							}), c.buttonAction = J(e, v, h, s)), void i(Object(m.f)({
								kind: x.b.SuccessCommunity,
								text: n.fbt._("Subreddit settings updated successfully", null, {
									hk: "2fmdlZ"
								}),
								...c
							}))
						}
						i(V()), i(Object(m.f)({
							kind: x.b.Error,
							text: n.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: J(e, t, h, void 0)
						})), s && Object(b.a)(Object(C.c)(I, "BE returned an error:"))
					}
				}, $ = (e, t) => async (r, s, o) => {
					let {
						apiContext: i
					} = o;
					(await Object(l.d)(i(), e, t)).ok ? r(Object(m.f)({
						kind: x.b.SuccessCommunity,
						text: n.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(m.f)({
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
				return K
			})), r.d(t, "g", (function() {
				return J
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
				v = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				h = r("./src/reddit/models/Tags/index.ts"),
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
				G = Object(s.a)(o.D),
				U = Object(s.a)(o.y),
				F = Object(s.a)(o.C),
				M = Object(s.a)(o.x),
				q = Object(s.a)(o.B),
				B = (Object(s.a)(o.d), Object(s.a)(o.c), Object(s.a)(o.b), Object(s.a)(o.g)),
				Q = Object(s.a)(o.h),
				z = Object(s.a)(o.f),
				H = Object(s.a)(o.a),
				K = Object(s.a)(o.i),
				V = Object(s.a)(o.A),
				J = function(e, t) {
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
						if (l.ok && m.data.subredditInfoById.secondaryTags && m.data.subredditInfoById.availableTags && m.data.subredditInfoById.suggestedTags) s(C(d(m.data))), r && v.h(o(), e, {
							context: t
						});
						else {
							s(A());
							const o = r ? "topics_save" : "topics_load";
							v.g(u, e, o, {
								context: t
							}), s(Object(i.f)(Object(i.e)(n.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
								hk: "2DUkWX"
							}), y.b.Error, n.fbt._("Retry", null, {
								hk: "1c2xrJ"
							}), J(e, t, r))))
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
							if (e.state === h.d.NONE && a[e.tagId] && !l[e.tagId]) {
								!!r.find(t => t.state === h.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
							} for (const e of r)
							if (e.state === h.d.NONE && a[e.tagId] && !u[e.tagId]) {
								!!t.find(t => t.state === h.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
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
							state: e.action === T.a.ADD ? h.d.TAGGED : h.d.NONE
						}));
						if (u.length > 0) {
							const t = await W(e, u)(s, o, d);
							l = l.concat((t || []).map(e => ({
								tagId: e.id,
								state: h.d.TAGGED
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
						state: h.d.TAGGED
					};
					if (Object(I.b)(t)) {
						const n = await W(e, [{
							text: t.displayText,
							type: h.c.CLASSIFICATION
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
						state: h.d.NONE,
						tagId: t.id
					}])(n, s, o) : n(J(e, r, !1))
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
							for (const e of r) v.f(c(), e, {
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
					t(V({
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
						if ((null == a ? void 0 : a.id) === t.tagId && t.state === h.d.TAGGED) return;
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
				return v
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
				U = (e, t, r, n, s) => async (o, i, d) => {
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
					o(n === m ? D(j) : G(j));
					const _ = Object(f.X)(l, {
							subredditId: s
						}),
						I = t && e ? Object(u.g)(e) : void 0;
					I && Object(a.h)(c(), n, _.name, t, I), n === m && Object(a.j)(c(), r, _.name)
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
						r(v({
							subredditId: e,
							isEnabled: t
						}))
					} else r(h());
					return c.ok
				}, M = (e, t) => async (r, n, s) => {
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
				}, q = (e, t) => async (r, s, o) => {
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
						}), q(e, t));
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
			const c = Object(s.c)(o.s.RECENT_SUBREDDITS, "recent_subreddits"),
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
				v = (e, t) => Object(u.a)(Object(b.a)(e, [m.a]), {
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
					[a.I.NONE]: c.o.None,
					[a.I.MODERATOR]: c.o.ModDistinguished,
					[a.I.ADMIN]: c.o.AdminDistinguished,
					[a.I.ALUMNI_ADMIN]: c.o.AlumniDistinguished
				};

			function L(e, t, r) {
				const n = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === a.I.NONE ? c.e.None : c.e.Distinguished,
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
			const v = async (e, t) => {
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
						layout: p,
						limit: f,
						recentPostIds: O,
						sort: T,
						t: S
					} = r, E = Object(y.bb)(e), C = Object(v.q)(e), x = Object(o.a)(t), A = Object(i.a)(t), N = Object(h.W)(e, {
						subredditId: Object(h.I)(e, t)
					}).length > 0, L = Object(y.q)(e), R = Object(y.pb)(e), {
						adsSeenCount: P,
						totalPostsSeenCount: w,
						sessionStartTime: k
					} = Object(g.a)(e), D = Object(I.a)(e), G = Object(_.c)(e), U = Object(j.b)(e) || Object(j.a)(e), F = {
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
						includeSubredditRankings: G,
						includeSubredditChannels: U,
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
						name: s.t.SUBREDDIT,
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
				return v
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
								experimentName: o.G,
								expEventOverride: t
							});
							return !!(Object(o.yg)(r) ? void 0 : r)
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
					Object(o.b)(n.n.Redesign, {
						type: o.a.GenderCollection,
						data: {
							gender: e,
							submitSuccess: t
						}
					})
				},
				d = (e, t) => {
					Object(s.b)(10) && Object(o.b)(n.n.Redesign, {
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
				return L
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
				l = r("./src/reddit/helpers/ads/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizeChannelsFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeInterestTopicsFromGql/index.ts"),
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
			const L = (e, t, r, i) => {
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
						if (e.authorFlair && (d.authorFlair[r.belongsTo.id] || (d.authorFlair[r.belongsTo.id] = {}), d.authorFlair[r.belongsTo.id][r.author] = Object(m.a)(e.authorFlair)[0]), Object(c.l)(e)) d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(_.a)(e.profile));
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
							Object(s.b)() || console.warn(t), o.c.captureMessage(t)
						}
						const p = i && i.includes(b);
						return t || !b || p || d.postIds.push(b), b
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
				var _, v, P, w, k, D, G, U, F, M;
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
						isEmailRequiredForQuarantineOptin: o,
						interstitialWarningMessage: i
					} = g;
					return {
						reason: R(g.forbiddenReason),
						data: {
							account: n && Object(x.a)(n) || null,
							banMessage: e || void 0,
							banTitle: t || void 0,
							description: r,
							quarantineRequiresEmailOptin: o,
							...s ? {
								quarantineMessage: s.markdown,
								quarantineMessageRTJson: Object(N.h)(s.richtext, a.i)
							} : {},
							interstitialWarningMessage: null == i ? void 0 : i.markdown,
							interstitialWarningMessageRTJson: Object(N.h)(null == i ? void 0 : i.richtext, a.i)
						}
					}
				}
				const q = {},
					B = g.devPlatformMetadata;
				let Q;
				const z = g || l || r || t,
					[H, K] = z.elements.edges.reduce((e, t, r) => {
						var n, s, o, i;
						const [d, a] = e, u = t.node;
						if (Object(c.k)(u)) {
							const e = u;
							e.subreddit = {
								...e.subreddit,
								devPlatformMetadata: B
							}, d.push(u), (null === (s = null === (n = u.flair) || void 0 === n ? void 0 : n.template) || void 0 === s ? void 0 : s.id) && (null === (i = null === (o = u.flair) || void 0 === o ? void 0 : o.template) || void 0 === i ? void 0 : i.postStyle) && (q[u.flair.template.id] = Object(O.a)(u.flair.template.postStyle))
						} else if (Object(A.g)(u)) {
							const e = Object(p.a)(u.interestTopicRecommendations.recommendationTopics);
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
				f && H.push(...f);
				const V = z.elements.dist,
					J = L(H, j, n);
				if (g.styles && (J.structuredStyles = {
						data: {
							style: Object(S.a)(g.styles)
						}
					}), J.structuredStyles = {
						data: {
							...g.styles ? {
								style: Object(S.a)(g.styles)
							} : {},
							content: {
								widgets: Object(C.a)(g)
							},
							flairTemplate: q
						}
					}, J.subredditAboutInfo = Object(I.a)(g), g.modPermissions && (J.subredditPermissions = Object.keys(g.modPermissions).length > 0 ? Object(y.a)(g.modPermissions) : void 0), g.rules && (J.subredditRules = Object(T.a)(g.rules).rules), ((null == g ? void 0 : g.answerableQuestions) || g.contentRatingSurvey || g.communityProgressModule) && (J.questions = {
						answerableQuestions: null == g ? void 0 : g.answerableQuestions,
						contentRatingSurvey: null == g ? void 0 : g.contentRatingSurvey,
						communityProgressModule: null == g ? void 0 : g.communityProgressModule
					}), Object(u.k)(g) || Object.assign(J, Object(i.b)(g), Object(d.b)(g)), J.subredditLinks = Object(h.a)({
						data: {
							subredditInfoById: g
						}
					}), J.subredditTopicLinks = Object(E.a)({
						data: {
							subredditInfoById: g
						}
					}), J.userFlair = {
						[g.id]: {
							displaySettings: {
								isEnabled: !!(null === (_ = g.authorFlairSettings) || void 0 === _ ? void 0 : _.isEnabled),
								isSelfAssignable: !!(null === (v = g.authorFlairSettings) || void 0 === v ? void 0 : v.isSelfAssignable),
								isUserEnabled: !!(null === (P = g.authorFlairSettings) || void 0 === P ? void 0 : P.isOwnFlairEnabled),
								position: null === (k = null === (w = g.authorFlairSettings) || void 0 === w ? void 0 : w.position) || void 0 === k ? void 0 : k.toLowerCase()
							},
							permissions: {
								canAssignOwn: !!(null === (D = g.authorFlairSettings) || void 0 === D ? void 0 : D.isSelfAssignable),
								canUserChange: !!((null === (G = g.authorFlairSettings) || void 0 === G ? void 0 : G.isSelfAssignable) && (null === (U = g.authorFlairSettings) || void 0 === U ? void 0 : U.isEnabled) || (null === (F = J.subredditPermissions) || void 0 === F ? void 0 : F.flair) || (null === (M = J.account) || void 0 === M ? void 0 : M.isAdmin))
							},
							applied: g.authorFlair ? Object(m.a)(g.authorFlair)[0] : void 0,
							templates: {},
							templateIds: []
						}
					}, Q && (J.interestTopicRecommendations = Q), J.predictionTournaments = g.predictionTournaments || [], g.channels) {
					const {
						channels: e,
						channelIds: t
					} = Object(b.a)(g.channels);
					J.channels = e, J.channelIds = t
				}
				return {
					...J,
					...null !== V && {
						dist: V
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
					const e = Date.now() - n.wc,
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
					} = t, v = g || (null === (n = null === (r = m) || void 0 === r ? void 0 : r.commentInfo) || void 0 === n ? void 0 : n.id), h = O || (null === (o = null === (s = m) || void 0 === s ? void 0 : s.postInfo) || void 0 === o ? void 0 : o.id);
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
				v = e => t => ({
					source: i,
					action: "click",
					noun: "send_modmail_user_profile_hovercard",
					correlationId: Object(n.c)(n.a.ModNotes),
					...s.o(t),
					...o(0, e)
				}),
				h = e => t => ({
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
						id: p(e),
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
						} = t.payload, s = Object(i.d)(r, n.user.id, b.y.All);
						return {
							...e,
							[s]: n.id
						}
					}
					case s.H: {
						const {
							subredditId: n,
							lastAuthorModNote: s
						} = t.payload, o = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id, d = Object(i.d)(n, o, b.y.All);
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
								o = Object(i.d)(r, n, b.y.All);
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
							c = Object(i.d)(s, o, b.y.All);
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
						if (o !== b.y.All && o !== b.y.Note) return e;
						const d = null === (r = null == s ? void 0 : s.user) || void 0 === r ? void 0 : r.id,
							c = Object(i.d)(n, d, o),
							a = o === b.y.All ? b.y.Note : b.y.All,
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
						} = t.payload, o = Object(i.d)(r, n, b.y.All), d = Object(i.d)(r, n, b.y.Note), c = e[o] ? e[o].filter(e => e !== s) : [], a = e[d] ? e[d].filter(e => e !== s) : [];
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
						} = n, o = n.id, d = Object(i.d)(s, o, b.y.All), c = Object(i.d)(s, o, b.y.Note), a = Object(i.d)(s, o, b.y.Ban), u = p(n), l = m(n), f = e[d] ? [l, u, ...e[d]] : [], O = e[c] ? [l, ...e[c]] : [], g = e[a] ? [u, ...e[a]] : [];
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
						} = t.payload, s = Object(i.d)(r, n.user.id, b.y.All);
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
						} = t.payload, o = Object(i.d)(r, n, b.y.All);
						return {
							...e,
							[o]: Object.keys(s).reduce((e, t) => (e[t] = s[t].totalCount, e), {})
						}
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload, s = Object(i.d)(r, n, b.y.All);
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
				o = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				i = r("./src/reddit/actions/modQueue/constants.ts"),
				d = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				a = r("./src/reddit/actions/pages/postDraft.ts"),
				u = r("./src/reddit/actions/pages/subreddit/index.ts"),
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
							} = t.payload, s = e[n] ? e[n] : [], o = S(r, s.find(e => e.stickied)), i = v([...s, ...o]);
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
				return K
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "i", (function() {
				return J
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
				v = (e, t) => {
					const r = I(e, t);
					if (r) return Object(b.c)(e, {
						commentId: r
					})
				},
				h = [],
				y = Object(i.a)((e, t) => {
					const r = v(e, t),
						n = r && r.id;
					if (!n) return h;
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
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === r && e.features.comments.models[t].author !== o.G).map(t => e.features.comments.models[t].author)))
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
				U = (e, t) => {
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
				V = (e, t) => {
					let {
						draftKey: r
					} = t;
					const n = e.features.comments.drafts[r];
					return !!n && n.autofocusDisabled
				},
				J = (e, t) => {
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
				o = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts"),
				i = r("./src/reddit/selectors/features/communityChat/index.ts"),
				d = r("./src/reddit/selectors/platform.ts");
			const c = Object(n.a)(d.c, e => "t5_7bf0ce" === e),
				a = Object(o.a)(s.ac),
				u = Object(n.a)(c, a, (e, t) => e && t),
				l = Object(o.a)(s.C),
				b = Object(n.a)(e => e, d.c, l, (e, t, r) => r && Object(i.a)(e, String(t)).length > 0)
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
						experimentName: o.bf
					}) === o.Td
				},
				m = e => !e.media || e.media.type !== c.o.RTJSON && e.media.type !== c.o.TEXT ? "" : e.media.markdownContent,
				p = e => !e.media && e.source && Object(n.a)(e.source.url) ? e.source.displayText : "",
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
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(n.zb)
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
					experimentName: n.Kb
				}) === n.hd.Enabled,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Jb
				}) === n.gd.Enabled
		},
		"./src/reddit/selectors/experiments/mediaInComments.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.He
				}) === n.Td,
				i = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Ge
				}) === n.Td,
				d = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.sg
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
			const f = p(i.ic, !0),
				O = p(i.ic, !1),
				g = p(i.kc, !0),
				j = (p(i.kc, !1), p(i.jc, !0)),
				_ = p(i.jc, !1),
				I = p(i.lc, !0),
				v = p(i.lc, !1),
				h = p(i.hc, !0),
				y = p(i.mc, !0),
				T = Object(s.a)(f, g, (e, t) => e === i.jd.Enabled || t === i.kd.Enabled),
				S = Object(s.a)(j, I, (e, t) => e === i.kb.BlurredPreview || e === i.kb.NoPreview || t === i.kb.BlurredPreview || t === i.kb.NoPreview),
				E = Object(s.a)(_, v, (e, t) => e === i.kb.BlurredPreview || t === i.kb.BlurredPreview),
				C = Object(s.a)(j, I, h, (e, t, r) => e === i.kb.NoPreview || t === i.kb.NoPreview || r === i.jb.Enabled),
				x = Object(s.a)(T, C, E, (e, t, r) => (e || t) && !r),
				A = Object(s.a)(u.h, u.d, a.e, u.j, (e, t, r, n) => !e && !t && !r && n),
				N = e => {
					const t = E(e),
						r = x(e),
						s = A(e);
					return t ? n.Blurred : r || s ? n.NoPreview : null
				},
				L = Object(s.a)(h, e => e === i.jb.Enabled),
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
			r.d(t, "j", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "e", (function() {
				return p
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
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(n.a)(i.e, d.L, (e, t) => e && !t),
				u = e => Object(o.c)(e, {
					experimentEligibilitySelector: a,
					experimentName: s.Mc
				}),
				l = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.Lc
				}), e => e),
				b = Object(n.a)(e => {
					var t;
					const r = s.Ob;
					for (let n = 0; n < r.length; n++) {
						const i = r[n],
							d = (null === (t = i.split("_").pop()) || void 0 === t ? void 0 : t.toUpperCase()) || "",
							c = Object(o.c)(e, {
								experimentEligibilitySelector: o.a,
								experimentName: i
							});
						if (c && Object.values(s.mb).includes(c)) return {
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
				p = (Object(n.a)(m, e => e === s.mb.FruitVeg), Object(n.a)(m, e => e === s.mb.Karma)),
				f = Object(n.a)(m, e => e === s.mb.Randomizer),
				O = Object(n.a)(m, e => e === s.mb.Interactive),
				g = Object(n.a)(m, e => Object.values(s.mb).includes(e)),
				j = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.nc
				}),
				_ = e => Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
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
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.e,
					experimentName: s.sc
				}), e => e === s.Td),
				c = Object(n.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.f,
					experimentName: s.tc
				}), e => e === s.Td)
		},
		"./src/reddit/selectors/experiments/postGuidance.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.vc
				}) === n.Td
			}
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
				experimentName: n.Sc
			}), e => e === n.Td)
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
				experimentName: n.Vc
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
					const u = Object(o.Db)(e, {
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
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "g", (function() {
				return O
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
				a = (e, t) => {
					var r, n;
					return (null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.communityChat) || void 0 === n ? void 0 : n.channelIds[t]) || []
				},
				u = Object(n.a)(a, e => !!e.length),
				l = Object(n.a)(e => e, a, (e, t) => t.map(t => c(e, t))),
				b = Object(n.a)(l, e => (e => e.sort((e, t) => {
					var r, n;
					const s = null !== (r = d[e.__typename]) && void 0 !== r ? r : 0,
						o = null !== (n = d[t.__typename]) && void 0 !== n ? n : 0;
					return s !== o ? s - o : e.name - t.name
				}))(e)),
				m = e => {
					var t, r, n;
					return null !== (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.communityChat) || void 0 === r ? void 0 : r.selectedChannelId) && void 0 !== n ? n : ""
				},
				p = Object(n.a)(c, e => {
					var t;
					return (null == e ? void 0 : e.__typename) !== o.a.SubredditChatChannel ? "" : decodeURIComponent(null !== (t = null == e ? void 0 : e.roomId) && void 0 !== t ? t : "")
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
						const r = Object(o.hb)({
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
					const n = e.features.modUserNotes.lastAuthorModNotes[Object(s.d)(r, t, o.y.All)];
					return n ? e.features.modUserNotes.models[n] : void 0
				},
				m = (e, t, r) => {
					if (!t || !r) return;
					return e.features.modUserNotes.totalCount[Object(s.d)(r, t, o.y.All)]
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
				return v
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
					return Boolean((null == t ? void 0 : t[d.B]) && Object(n.a)(t[d.B]))
				},
				g = e => e.onboarding.shouldSkipOnboardingState,
				j = Object(s.a)(f.S, f.R, O, g, e => {
					var t;
					const r = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams,
						n = r.subredditName;
					return Object(m.a)(e) !== i.dg.TargetedOnboarding || n && Object(o.a)(n, {
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
				I = Object(s.a)(b.j, e => e.onboarding.interestTopicRecommendationsState, (e, t) => e && !Object(i.yg)(e) ? t : null),
				v = Object(s.a)(b.j, (e, t) => {
					let {
						pageLayer: r
					} = t;
					return Object(c.K)(r) || Object(c.L)(r) || Object(c.z)(r)
				}, u.b, l.a, g, (e, t, r, n, s) => e === i.ob.PopoverFeed15 && t && Object(a.c)() && !r && !n && !s)
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
							o = n ? h(e, {
								subredditId: r
							}) : v(e, {
								subredditId: r
							}),
							i = s.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return o.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), i)
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
			e.exports = JSON.parse('{"id":"c821ca1db9f1"}')
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
			e.exports = JSON.parse('{"id":"cb5e7bbde98a"}')
		},
		"./src/redditGQL/operations/CreateSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"80c9a3cd96b8"}')
		},
		"./src/redditGQL/operations/DeleteModUserNote.json": function(e) {
			e.exports = JSON.parse('{"id":"c44e6467c4d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"50c0ba265137"}')
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
			e.exports = JSON.parse('{"id":"b499034a4b88"}')
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
			e.exports = JSON.parse('{"id":"15c20a93ed51"}')
		},
		"./src/redditGQL/operations/GetTournamentsBaseInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"cebfc8734cec"}')
		},
		"./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json": function(e) {
			e.exports = JSON.parse('{"id":"023547ccdaf6"}')
		},
		"./src/redditGQL/operations/ModQueueItems.json": function(e) {
			e.exports = JSON.parse('{"id":"6fea93cb6fbb"}')
		},
		"./src/redditGQL/operations/ModQueueTriggers.json": function(e) {
			e.exports = JSON.parse('{"id":"0ac619d6eb7e"}')
		},
		"./src/redditGQL/operations/OpenAISubRecWithDetail.json": function(e) {
			e.exports = JSON.parse('{"id":"aab58d632d84"}')
		},
		"./src/redditGQL/operations/PopularFeedElements.json": function(e) {
			e.exports = JSON.parse('{"id":"11db30728cfb"}')
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
			e.exports = JSON.parse('{"id":"e111e3a11997"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"abb696a96055"}')
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
			e.exports = JSON.parse('{"id":"8de8e31af067"}')
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
			e.exports = JSON.parse('{"id":"87a472f54aa6"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81.31a048b5fed229cbefe8.js.map