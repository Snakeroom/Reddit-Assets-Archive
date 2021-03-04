// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d.b63aab7b0a23d14bf97f.js
// Retrieved at 3/4/2021, 3:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"], {
		"./node_modules/lodash/_arrayEvery.js": function(t, e) {
			t.exports = function(t, e) {
				for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
					if (!e(t[n], n, t)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(t, e, n) {
			var r = n("./node_modules/lodash/_baseEach.js");
			t.exports = function(t, e) {
				var n = !0;
				return r(t, (function(t, r, s) {
					return n = !!e(t, r, s)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(t, e, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				c = n("./node_modules/lodash/_isIterateeCall.js");
			t.exports = function(t, e, n) {
				var d = i(t) ? r : s;
				return n && c(t, e, n) && (e = void 0), d(t, o(e, 3))
			}
		},
		"./src/graphql/operations/FetchContentControls.json": function(t) {
			t.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(t) {
			t.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/graphql/operations/UpdateAutomatedReportingSettings.json": function(t) {
			t.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/graphql/operations/UpdatePostRequirements.json": function(t) {
			t.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/lib/constants/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/makeCommentPermalink/index.ts": function(t, e, n) {
			"use strict";
			var r = n("./src/lib/redditId/index.ts");
			e.a = (t, e) => {
				let n = t;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(r.c)(e)
			}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "c", (function() {
				return o
			})), n.d(e, "d", (function() {
				return i
			}));
			const r = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return N
			})), n.d(e, "b", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/camelCase.js"),
				o = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/graphql/operations/FetchContentControls.json"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				_ = n("./src/reddit/models/AutomatedReporting/index.ts");
			const m = t => {
				switch (t) {
					case "LENIENT":
						return _.a.Lenient;
					case "MODERATE":
						return _.a.Moderate;
					case "STRICT":
						return _.a.Strict;
					default:
						return _.a.Off
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = n("./node_modules/lodash/isEmpty.js"),
				E = n.n(f),
				b = n("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				O = n("./src/graphql/operations/UpdatePostRequirements.json"),
				T = n("./src/reddit/endpoints/subreddit/about.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/contentControls.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/actions/contentControls/constants.ts");
			const A = Object(c.a)(C.b),
				R = Object(c.a)(C.c),
				D = Object(c.a)(C.a),
				N = t => async (e, n, {
					gqlContext: r
				}) => {
					const s = {
						subredditName: t.toLowerCase()
					};
					if (Object(p.a)(n(), s)) return;
					e(R(s));
					let o = Object(I.F)(n(), t);
					if (!o) {
						const n = await Object(T.a)(r(), t, !1);
						if (n.ok) {
							o = n.body.data.subreddit.id
						}
						if (!o) {
							const t = n.error || {
								type: i.E.NOT_FOUND_ERROR
							};
							return void e(D({
								...s,
								error: t
							}))
						}
					}
					let c = null;
					const a = await ((t, e) => Object(l.a)(t, {
						...u,
						variables: e
					}).then(t => {
						var e, n;
						if (t.ok) {
							const r = null === (n = null === (e = t.body) || void 0 === e ? void 0 : e.data) || void 0 === n ? void 0 : n.subreddit;
							return {
								...t,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: m(null == r ? void 0 : r.automatedReportingLevelAbuse),
												levelHate: m(null == r ? void 0 : r.automatedReportingLevelHate),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == r ? void 0 : r.postRequirements
										}
									}
								}
							}
						}
						return t
					}))(r(), {
						subredditId: o
					});
					if (a.ok) {
						const t = a.body;
						c = t.data.subreddit && t.data.subreddit
					}
					if (c) e(A({
						...s,
						...c
					}));
					else {
						const n = a.error || {
							type: i.E.UNKNOWN_ERROR
						};
						e(D({
							...s,
							error: n
						})), d.c.withScope(e => {
							e.setExtra("info", {
								subredditName: t,
								responseBody: a.body,
								responseOk: a.ok
							}), d.c.captureMessage("Missing post requirements data!")
						})
					}
				}, P = Object(c.a)(C.d), L = (t, e) => async (n, s, {
					gqlContext: o
				}) => {
					const i = t.toLowerCase(),
						c = Object(I.F)(s(), t);
					if (!c) return {
						success: !1
					};
					const d = await ((t, e, n) => {
						const r = [Promise.resolve(null), Promise.resolve(null)];
						if (n.postRequirements && !E()(n.postRequirements)) {
							const s = {
								subredditId: e,
								...n.postRequirements
							};
							r[0] = Object(l.a)(t, {
								...O,
								variables: {
									input: s
								}
							})
						}
						if (n.automatedReporting && !E()(n.automatedReporting)) {
							const s = {
								subredditId: e
							};
							n.automatedReporting.levelAbuse && (s.automatedReportingLevelAbuse = n.automatedReporting.levelAbuse), n.automatedReporting.levelHate && (s.automatedReportingLevelHate = n.automatedReporting.levelHate), r[1] = Object(l.a)(t, {
								...b,
								variables: {
									input: s
								}
							})
						}
						return Promise.all(r).then(([t, e]) => {
							let n = !0,
								r = [];
							if (t) {
								const e = t.body,
									s = e.data.updatePostRequirements.fieldErrors;
								n = n && e.data.updatePostRequirements.ok, s && (r = r.concat(s))
							}
							if (e) {
								const t = e.body,
									s = t.data.updateSubredditSettings.fieldErrors;
								n = n && t.data.updateSubredditSettings.ok, s && (r = r.concat(s))
							}
							return {
								ok: n,
								fieldErrors: r.length ? r : null
							}
						})
					})(o(), c, e);
					if (d.ok) return n(P({
						subredditName: i,
						partialUpdates: e
					})), {
						success: !0
					}; {
						const t = j(d.fieldErrors);
						return n(Object(a.e)({
							duration: a.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: S.b.Error,
							text: t && t.length ? t[0].message : r.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: t || void 0
						}
					}
				}, j = t => t && t.map(t => ({
					...t,
					field: o()(t.field)
				}))
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "e", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "d", (function() {
				return c
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "c", (function() {
				return o
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "e", (function() {
				return c
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "g", (function() {
				return a
			})), n.d(e, "h", (function() {
				return u
			})), n.d(e, "i", (function() {
				return l
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "e", (function() {
				return o
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "f", (function() {
				return c
			})), n.d(e, "a", (function() {
				return d
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/jsApi.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/pages/postCreation.ts": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "PAGE_PENDING", (function() {
				return x
			})), n.d(e, "PAGE_LOADED", (function() {
				return F
			})), n.d(e, "PAGE_FAILED", (function() {
				return v
			})), n.d(e, "pagePending", (function() {
				return M
			})), n.d(e, "pageLoaded", (function() {
				return G
			})), n.d(e, "pageFailed", (function() {
				return w
			})), n.d(e, "postCreationPageDataRequested", (function() {
				return B
			})), n.d(e, "postCreationPageRequested", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/isFakeSubreddit/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/makePostCreationPageKey/index.ts"),
				a = n("./src/lib/pageTitle.ts"),
				u = n("./src/reddit/actions/contentControls/index.ts"),
				l = n("./src/reddit/actions/economics/helpers/async.ts"),
				_ = n("./src/reddit/actions/externalAccount.ts"),
				m = n("./src/reddit/actions/gold/powerups.ts"),
				f = n("./src/reddit/actions/platform.ts"),
				E = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/postCreation/general.ts"),
				O = n("./src/reddit/actions/profile/index.ts"),
				T = n("./src/reddit/actions/subreddit.ts"),
				S = n("./src/reddit/actions/subredditDuplicates.ts"),
				p = n("./src/config.ts"),
				I = n("./src/lib/makeApiRequest/index.ts"),
				C = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				A = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				R = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				D = n("./src/reddit/helpers/trackers/postComposer.ts"),
				N = n("./src/reddit/models/User/index.ts"),
				P = n("./src/reddit/selectors/contentControls.ts"),
				L = n("./src/reddit/selectors/postCollection.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/profile.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				U = n("./src/reddit/selectors/user.ts");
			const k = t => {
					const e = t.platform.currentPage;
					let n = "Reddit";
					if (e && e.urlParams.subredditName) {
						const {
							subredditName: r
						} = e.urlParams, s = Object(g.A)(t, {
							subredditName: r
						});
						s && (n = s.name)
					}
					return Object(a.i)(n)
				},
				x = "POST_CREATION__PAGE_PENDING",
				F = "POST_CREATION__PAGE_LOADED",
				v = "POST_CREATION__PAGE_FAILED",
				M = Object(c.a)(x),
				G = Object(c.a)(F),
				w = Object(c.a)(v),
				Y = () => async (t, e) => {
					const n = e(),
						r = Object(j.a)(n);
					r !== Object(j.fb)(n) && t(Object(b.g)({
						submissionType: r
					}))
				}, B = t => async (e, n, r) => {
					const {
						collectionId: o,
						profileName: c,
						subredditName: a
					} = t, l = Object(d.a)(t), f = n(), E = f.creations.api.page.pending[l], b = f.creations.api.page.fetched[l], S = f.creations.api.page.error[l];
					if (E) return;
					if (b && !S) return void e(Y());
					const A = [];
					e(M({
						key: l
					}));
					let D = a;
					!a && c && (D = `u_${c}`), A.push(((t, e) => Object(I.a)(t, {
						method: s.cb.GET,
						endpoint: Object(C.a)(`${p.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: e.subredditName,
							collection_id: e.collectionId
						}
					}))(r.apiContext(), {
						subredditName: D,
						collectionId: o
					})), c && (A.push(e(O.d(c))), A.push(e(O.b(c))));
					const [L] = await Object(R.a)("postCreation", () => Promise.all(A));
					if (L.ok) {
						const t = L.body,
							{
								posts: r = {},
								subredditAboutInfo: s
							} = t;
						if (e(G({
								key: l,
								meta: f.meta,
								...t,
								posts: r
							})), !Object(U.J)(n())) return;
						if (s) {
							const t = Object.keys(s)[0];
							await e(Object(m.f)(t, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						e(Y());
						const o = [];
						o.push(e(_.o()));
						const c = Object(U.i)(n());
						if (c && c.hasUserProfile && o.push(e(O.d(Object(N.e)(c)))), a && !Object(i.a)(a)) {
							o.push(e(T.o(a))), !!Object(P.b)(n(), {
								subredditName: a
							}) || o.push(e(Object(u.a)(a)))
						}
						await Promise.all(o)
					} else e(w({
						error: L.error,
						key: l
					}))
				}, H = t => async (e, n) => {
					const {
						subredditName: i,
						profileName: c
					} = t.params, d = t.queryParams, a = d.collection;
					if (await e(B({
							collectionId: a,
							profileName: c,
							subredditName: i
						})), !Object(U.J)(n())) return void Object(A.a)(e, n());
					let u;
					if (i ? (u = Object(g.A)(n(), {
							subredditName: i
						}), await e(Object(l.a)({
							subredditName: i
						}))) : c && (u = Object(y.j)(n(), {
							profileName: c
						})), d.source_id) await e(((t, e) => async (n, r) => {
						const {
							subredditName: s,
							profileName: o
						} = t, i = [];
						let c;
						s ? c = Object(g.F)(r(), s) : o && (c = Object(U.db)(r(), {
							userName: o
						})), c && i.push(n(Object(S.b)(c, e))), i.push(n(Object(E.K)(e))), await Promise.all(i);
						const d = Object(h.f)(r(), {
							postId: e
						});
						n(Object(b.k)({
							postId: e,
							postTitle: d ? d.title : ""
						}))
					})(t.params, d.source_id));
					else if (a) {
						const s = Object(L.q)(n(), {
							collectionId: a
						});
						u && s && s.subredditId === u.id || e(Object(r.c)(Object(o.a)(t.url, ["collection"])))
					}((t, e) => {
						const n = t.platform.lastPage;
						e && n && n.meta && n.meta.name === s.Db.POST_CREATION && D.x(t)
					})(n(), i), e(f.l({
						title: k(n())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "PAGE_PENDING", (function() {
				return m
			})), n.d(e, "PAGE_LOADED", (function() {
				return f
			})), n.d(e, "PAGE_FAILED", (function() {
				return E
			})), n.d(e, "pagePending", (function() {
				return b
			})), n.d(e, "pageLoaded", (function() {
				return O
			})), n.d(e, "pageFailed", (function() {
				return T
			})), n.d(e, "postDraftPageDataRequested", (function() {
				return S
			})), n.d(e, "postDraftRequested", (function() {
				return p
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/makePostDraftPageKey/index.ts"),
				o = n("./src/reddit/actions/profile/index.ts"),
				i = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = n("./src/reddit/endpoints/post/draft/helpers.ts"),
				_ = n("./src/reddit/helpers/timeApiRoute/index.ts");
			const m = "POST_DRAFT__PAGE_PENDING",
				f = "POST_DRAFT__PAGE_LOADED",
				E = "POST_DRAFT__PAGE_FAILED",
				b = Object(r.a)(m),
				O = Object(r.a)(f),
				T = Object(r.a)(E),
				S = t => async (e, n, r) => {
					const {
						draftId: m,
						profileName: f
					} = t, E = Object(s.a)(t), b = n(), S = b.creations.api.page.pending[E], p = b.creations.api.page.fetched[E], I = b.creations.api.page.error[E];
					if (S || p && !I || !m) return;
					e(o.d(f));
					const C = await Object(_.a)("postDraft", () => ((t, e, n) => Object(d.a)(t, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${n}/${e}`)),
						method: c.cb.GET
					}))(r.apiContext(), m, f));
					if (C.ok) {
						const t = C.body;
						t.drafts[m].kind = Object(l.b)(t.drafts[m].kind), e(O({
							...t,
							key: E
						}))
					} else e(T({
						error: C.error,
						key: E
					}))
				}, p = t => async (e, n, r) => {
					await e(S(t.params))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return m
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "g", (function() {
				return b
			})), n.d(e, "c", (function() {
				return S
			})), n.d(e, "f", (function() {
				return p
			})), n.d(e, "b", (function() {
				return A
			})), n.d(e, "e", (function() {
				return R
			})), n.d(e, "i", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/endpoints/post/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(o.a)(m),
				E = "PINNEDPOST__PIN_POST_SUCCESS",
				b = "PINNEDPOST__UNPIN_POST_SUCCESS",
				O = Object(o.a)(E),
				T = Object(o.a)(b),
				S = "PINNEDPOST__PIN_POST_PENDING",
				p = "PINNEDPOST__UNPIN_POST_PENDING",
				I = Object(o.a)(S),
				C = Object(o.a)(p),
				A = "PINNEDPOST__PIN_POST_FAILURE",
				R = "PINNEDPOST__UNPIN_POST_FAILURE",
				D = Object(o.a)(A),
				N = Object(o.a)(R),
				P = t => Object(c.e)({
					buttonAction: y(t, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				L = (t, e) => Object(c.e)({
					buttonAction: y(t, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: e ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				j = () => Object(c.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				h = () => Object(c.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				y = (t, e = !1) => async (n, o, {
					apiContext: m
				}) => {
					const f = o(),
						E = f.posts.models[t];
					if (!E) return;
					const b = !Object(l.t)(f, {
						postId: t
					});
					if (b && E.isRemoved) return n((() => Object(c.e)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const S = E.author,
						p = Object(_.m)(f, S),
						[A, R, y, g, U] = b ? [I, O, D, P, j] : [C, T, N, L, h];
					if (b) {
						if (Object(l.Q)(f, {
								profileName: S
							}).length >= s.V) return void n(Object(i.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const k = Object(l.p)(f, t, S),
						x = !b && k;
					n(A({
						postId: t,
						profileId: p
					})), (await Object(a.t)(m(), t, b, !0)).ok ? (n(R({
						postId: t,
						profileId: p
					})), e || n(g(t, x))) : (n(y({
						postId: t,
						profileId: p
					})), n(U()))
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return r
			})), n.d(e, "d", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			})), n.d(e, "f", (function() {
				return i
			})), n.d(e, "g", (function() {
				return c
			})), n.d(e, "a", (function() {
				return d
			})), n.d(e, "t", (function() {
				return a
			})), n.d(e, "e", (function() {
				return u
			})), n.d(e, "r", (function() {
				return l
			})), n.d(e, "s", (function() {
				return _
			})), n.d(e, "n", (function() {
				return m
			})), n.d(e, "l", (function() {
				return f
			})), n.d(e, "m", (function() {
				return E
			})), n.d(e, "k", (function() {
				return b
			})), n.d(e, "i", (function() {
				return O
			})), n.d(e, "j", (function() {
				return T
			})), n.d(e, "h", (function() {
				return S
			})), n.d(e, "p", (function() {
				return p
			})), n.d(e, "q", (function() {
				return I
			})), n.d(e, "o", (function() {
				return C
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				a = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				_ = "UPDATE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				E = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				b = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				O = "REORDER_COLLECTION_PENDING",
				T = "REORDER_COLLECTION_SUCCESS",
				S = "REORDER_COLLECTION_FAILED",
				p = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "G", (function() {
				return r
			})), n.d(e, "H", (function() {
				return s
			})), n.d(e, "l", (function() {
				return o
			})), n.d(e, "m", (function() {
				return i
			})), n.d(e, "x", (function() {
				return c
			})), n.d(e, "D", (function() {
				return d
			})), n.d(e, "E", (function() {
				return a
			})), n.d(e, "k", (function() {
				return u
			})), n.d(e, "C", (function() {
				return l
			})), n.d(e, "p", (function() {
				return _
			})), n.d(e, "M", (function() {
				return m
			})), n.d(e, "n", (function() {
				return f
			})), n.d(e, "z", (function() {
				return E
			})), n.d(e, "s", (function() {
				return b
			})), n.d(e, "c", (function() {
				return O
			})), n.d(e, "b", (function() {
				return T
			})), n.d(e, "d", (function() {
				return S
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "f", (function() {
				return I
			})), n.d(e, "g", (function() {
				return C
			})), n.d(e, "h", (function() {
				return A
			})), n.d(e, "i", (function() {
				return R
			})), n.d(e, "j", (function() {
				return D
			})), n.d(e, "q", (function() {
				return N
			})), n.d(e, "O", (function() {
				return P
			})), n.d(e, "N", (function() {
				return L
			})), n.d(e, "P", (function() {
				return j
			})), n.d(e, "Q", (function() {
				return h
			})), n.d(e, "R", (function() {
				return y
			})), n.d(e, "S", (function() {
				return g
			})), n.d(e, "T", (function() {
				return U
			})), n.d(e, "U", (function() {
				return k
			})), n.d(e, "V", (function() {
				return x
			})), n.d(e, "r", (function() {
				return F
			})), n.d(e, "A", (function() {
				return v
			})), n.d(e, "u", (function() {
				return M
			})), n.d(e, "v", (function() {
				return G
			})), n.d(e, "t", (function() {
				return w
			})), n.d(e, "w", (function() {
				return Y
			})), n.d(e, "L", (function() {
				return B
			})), n.d(e, "o", (function() {
				return H
			})), n.d(e, "y", (function() {
				return q
			})), n.d(e, "X", (function() {
				return K
			})), n.d(e, "F", (function() {
				return V
			})), n.d(e, "a", (function() {
				return W
			})), n.d(e, "B", (function() {
				return $
			})), n.d(e, "J", (function() {
				return J
			})), n.d(e, "K", (function() {
				return X
			})), n.d(e, "I", (function() {
				return z
			})), n.d(e, "W", (function() {
				return Q
			}));
			const r = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				s = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				o = "POST_CREATION_EDIT_COMPLETE",
				i = "POST_CREATION_EDIT_FAILED",
				c = "POST_CREATION_PENDING_EDIT",
				d = "POST_CREATION_START_EDITING_POST",
				a = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				_ = "FINISHED_CONVERTING_EDITOR_CONTENT",
				m = "POST_CREATION__TOGGLE_EDITOR_MODE",
				f = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				E = "POST_TITLE_FETCHED",
				b = "INITIALIZE_EDITOR_MODE",
				O = "POST_CREATION__CHANGE_FLAIR",
				T = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				S = "POST_CREATION__CHANGE_LINK_BODY",
				p = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				I = "POST_CREATION__CHANGE_MEDIA_BODY",
				C = "POST_CREATION__CHANGE_RECAPTCHA",
				A = "POST_CREATION__CHANGE_RTE_STATE",
				R = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				D = "POST_CREATION__CHANGE_TITLE",
				N = "POST_CREATION__GOV_TYPE_CHANGED",
				P = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				L = "POST_CREATION__TOGGLE_IS_CHANGED",
				j = "POST_CREATION__TOGGLE_IS_GOV",
				h = "POST_CREATION__TOGGLE_IS_NSFW",
				y = "POST_CREATION__TOGGLE_IS_OC",
				g = "POST_CREATION__TOGGLE_IS_POLL",
				U = "POST_CREATION__TOGGLE_IS_SPOILER",
				k = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				x = "POST_CREATION__TOGGLE_SEND_REPLIES",
				F = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				v = "POST_CREATION__RESET_FORM",
				M = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				G = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				w = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				Y = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				H = "POST_CREATION__FAILED",
				q = "POST_CREATION__POLL_FAILED",
				K = "POST_CREATION__VALIDATION_FAILED",
				V = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				W = "POST_CREATION__CAPTCHA_REQUIRED",
				$ = "POST_CREATION__SET_SUBMIT_MODE",
				J = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				X = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				z = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				Q = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS"
		},
		"./src/reddit/actions/postCreation/general.ts": function(t, e, n) {
			"use strict";
			n.d(e, "i", (function() {
				return E
			})), n.d(e, "m", (function() {
				return O
			})), n.d(e, "a", (function() {
				return T
			})), n.d(e, "b", (function() {
				return S
			})), n.d(e, "c", (function() {
				return I
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "f", (function() {
				return A
			})), n.d(e, "e", (function() {
				return R
			})), n.d(e, "g", (function() {
				return D
			})), n.d(e, "h", (function() {
				return N
			})), n.d(e, "j", (function() {
				return P
			})), n.d(e, "r", (function() {
				return L
			})), n.d(e, "q", (function() {
				return j
			})), n.d(e, "s", (function() {
				return h
			})), n.d(e, "t", (function() {
				return y
			})), n.d(e, "u", (function() {
				return g
			})), n.d(e, "v", (function() {
				return U
			})), n.d(e, "x", (function() {
				return k
			})), n.d(e, "y", (function() {
				return x
			})), n.d(e, "z", (function() {
				return F
			})), n.d(e, "k", (function() {
				return v
			})), n.d(e, "p", (function() {
				return M
			})), n.d(e, "o", (function() {
				return w
			})), n.d(e, "w", (function() {
				return Y
			})), n.d(e, "n", (function() {
				return B
			})), n.d(e, "l", (function() {
				return H
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/isUrl/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/endpoints/post/index.tsx"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				u = n("./src/reddit/routes/postCreation/constants.ts"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/postCollection.ts"),
				m = n("./src/reddit/selectors/postCreations.ts"),
				f = n("./src/reddit/actions/postCreation/constants.ts");
			const E = Object(o.a)(f.n),
				b = Object(o.a)(f.z),
				O = (Object(o.a)(f.s), t => {
					switch (t) {
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
				T = Object(o.a)(f.b),
				S = Object(o.a)(f.c),
				p = Object(o.a)(f.d),
				I = Object(o.a)(f.e),
				C = Object(o.a)(f.f),
				A = Object(o.a)(f.g),
				R = Object(o.a)(f.h),
				D = Object(o.a)(f.i),
				N = Object(o.a)(f.j),
				P = Object(o.a)(f.q),
				L = Object(o.a)(f.O),
				j = Object(o.a)(f.N),
				h = (Object(o.a)(f.P), Object(o.a)(f.Q)),
				y = Object(o.a)(f.R),
				g = Object(o.a)(f.S),
				U = Object(o.a)(f.T),
				k = Object(o.a)(f.U),
				x = Object(o.a)(f.V),
				F = Object(o.a)(f.W),
				v = Object(o.a)(f.r),
				M = t => async (e, n, {
					apiContext: r
				}) => {
					e(p(t)), Object(s.a)(t) && e((t => async (e, n, {
						apiContext: r
					}) => {
						const s = await Object(d.f)(r(), t);
						s.ok && s.body && s.body.json && s.body.json.data && e(b(s.body.json.data))
					})(t))
				}, G = Object(o.a)(f.A), w = (t, e) => async (n, s) => {
					n(G()), n(t ? Object(r.b)(u.b) : Object(r.b)(Object(m.V)(s(), {
						pageLayer: e
					})))
				}, Y = t => async e => {
					e(i.i(t))
				}, B = t => async (e, n) => {
					const r = n(),
						s = Object(c.D)(t),
						o = Object(m.B)(r);
					if (s && o) {
						Object(l.a)(r) !== a.c && e(Y(a.c))
					} else e(w(!1, t))
				}, H = t => async (e, n) => {
					const r = n();
					Object(_.m)(r, {
						subredditId: t
					}) ? e(i.i(a.a)) : e(i.i(a.b))
				}
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return f
			})), n.d(e, "a", (function() {
				return T
			})), n.d(e, "f", (function() {
				return C
			})), n.d(e, "b", (function() {
				return N
			})), n.d(e, "e", (function() {
				return h
			})), n.d(e, "d", (function() {
				return y
			})), n.d(e, "l", (function() {
				return x
			})), n.d(e, "k", (function() {
				return F
			})), n.d(e, "j", (function() {
				return v
			})), n.d(e, "g", (function() {
				return M
			})), n.d(e, "i", (function() {
				return G
			})), n.d(e, "h", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/flair/index.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/postFlair.ts"),
				m = n("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				b = Object(s.a)(f),
				O = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				p = Object(s.a)(T),
				I = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				A = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				R = Object(s.a)(C),
				D = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				N = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				P = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				L = Object(s.a)(N),
				j = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				h = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				y = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				g = Object(s.a)(h),
				U = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				k = Object(s.a)(y),
				x = (t, e) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(m.S)(o, {
							subredditId: t
						}).name;
					n(E());
					const c = await Object(d.k)(s(), i, e);
					if (c.ok) {
						n(b({
							subredditId: t,
							isEnabled: e
						}))
					} else n(O());
					return c.ok
				}, F = (t, e) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(m.S)(o, {
							subredditId: t
						}).name;
					n(S());
					const c = await Object(d.j)(s(), e, u.d.LinkFlair, i);
					if (c.ok) {
						n(p({
							subredditId: t,
							canAssignOwn: e
						}))
					} else n(I());
					return c.ok
				}, v = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						_ = Object(m.S)(a, {
							subredditId: e
						}).name;
					n(A());
					const f = await Object(d.f)(o(), t, _, u.d.LinkFlair);
					let E = f.ok && !(f.body && !1 === f.body.success);
					if (E) {
						const r = f.body;
						if (n(R({
								subredditId: e,
								template: r
							})), r.id) {
							const s = t.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[r.id];
							s ? E = await n(Object(i.d)(e, r.id, s)) : o && (E = await n(Object(i.c)(e, r.id)))
						}
					}
					if (E) {
						const t = Object(c.d)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						n(Object(c.e)(t))
					} else {
						n(D());
						const s = Object(c.d)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), v(t, e));
						n(Object(c.e)(s))
					}
					return E
				}, M = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = Object(m.S)(i, {
							subredditId: e
						}).name;
					if (n(P()), (await Object(d.b)(o(), t, a)).ok) {
						n(L({
							subredditId: e,
							templateId: t
						}));
						const s = Object(c.d)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						n(Object(c.e)(s))
					} else {
						n(j());
						const s = Object(c.d)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(t, e));
						n(Object(c.e)(s))
					}
				}, G = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = Object(_.d)(i, {
							subredditId: e
						}).templateIds,
						f = Object(m.S)(i, {
							subredditId: e
						}).name;
					if (n(g({
							subredditId: e,
							templateIds: t
						})), (await Object(d.e)(o(), f, u.d.LinkFlair, t)).ok) {
						n(U());
						const t = Object(c.d)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						n(Object(c.e)(t))
					} else {
						n(k({
							subredditId: e,
							templateIds: a
						}));
						const s = Object(c.d)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), G(t, e));
						n(Object(c.e)(s))
					}
				}, w = ({
					post: t,
					previewFlair: e,
					selectedTemplateId: n
				}) => async (r, s, {
					apiContext: i
				}) => {
					const c = t.flair.filter(t => !Object(a.p)(t.type));
					if (e && c.unshift(e), r(Object(o.L)({
							[t.id]: {
								flair: c
							}
						})), e) {
						const r = Object(a.g)(e);
						Object(d.h)(i(), t.id, n, r)
					} else Object(d.h)(i(), t.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return I
			})), n.d(e, "d", (function() {
				return A
			})), n.d(e, "a", (function() {
				return R
			})), n.d(e, "c", (function() {
				return N
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c),
				a = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/actions/imageUploads.ts"),
				l = n("./src/reddit/helpers/media/index.ts"),
				_ = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				E = n("./src/reddit/constants/headers.ts");
			var b = n("./src/reddit/helpers/trackers/blade.ts"),
				O = n("./src/reddit/models/Image/index.tsx"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/telemetry/index.ts");
			const p = ({
				subredditId: t,
				flairId: e,
				imageKey: n,
				imageData: r
			}) => async (s, o, i) => {
				const c = o(),
					d = Object(T.S)(c, {
						subredditId: t
					});
				if (!d) return !1;
				s(Object(u.k)(r));
				const a = await (async (t, e, n, r, s, o) => Object(m.a)(Object(f.a)(t, [E.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${n}`,
					method: _.cb.POST,
					data: {
						filepath: r,
						imagetype: s,
						mimetype: o
					}
				}))(i.apiContext(), d.name, e, r.file.name, n, await Object(l.g)(r.file));
				let b = !1;
				try {
					const t = await Object(u.g)(o(), a, r, O.a.FlairTemplates);
					t && s(Object(u.j)(t)), b = !0
				} catch (S) {
					if (S instanceof Error) throw S;
					s(Object(u.i)(S))
				}
				return b
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", C = Object(a.a)(I), A = (t, e, n) => async (r, o, c) => {
				const {
					apiContext: a
				} = c;
				let l = o();
				const {
					pendingImages: I,
					...A
				} = n;
				let R = A;
				const D = Object(T.S)(l, {
					subredditId: t
				});
				if (!D) return !1;
				const N = l.structuredStyles.flairTemplate.models[e];
				if (N && i()(N, R)) return !0;
				if (I) {
					const n = [];
					if (s()(I, (s, o) => {
							s && n.push(r(p({
								flairId: e,
								imageData: Object(O.m)(s),
								imageKey: o,
								subredditId: t
							})))
						}), !(await Promise.all(n)).every(t => t)) return !1;
					R = ((t, e, n) => {
						const r = {
							...t
						};
						return s()(e, (t, e) => {
							const s = t && n.imageUploads[t.id];
							s && s.kind === O.b.TempUploaded && (r[e] = s.url)
						}), r
					})(R, I, o())
				}
				l = o();
				let P = null,
					L = null;
				const j = [];
				try {
					(P = await Object(u.f)(l, O.a.FlairTemplates)) && (L = Object(u.m)(P)(r, o, c), j.push(...d()(P.imagesByKey)))
				} catch (U) {
					return !1
				}
				const h = await (async (t, e, n, r) => Object(m.a)(Object(f.a)(t, [E.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: _.cb.PUT,
						data: r
					}))(a(), D.name, e, R),
					y = N ? "edit_post_flair_template" : "save_post_flair_template",
					g = Object(b.e)(l, y);
				if (h.ok) {
					let t;
					if (L) try {
						await L, t = ((t, e, n) => {
							const r = {
								...t
							};
							return e.forEach(t => {
								const e = n.imageUploads[t.id];
								e && e.kind === O.b.Uploaded && (t.url === r.postBackgroundImage ? r.postBackgroundImage = e.url : t.url === r.postPlaceholderImage && (r.postPlaceholderImage = e.url))
							}), r
						})(R, j, o())
					} catch (U) {
						t = null
					} else t = R;
					r(C({
						flairId: e,
						template: t || R
					}))
				} else P && P.websocket.close();
				return Object(S.a)({
					...g,
					actionInfo: {
						...g.actionInfo,
						success: h.ok
					}
				}), h.ok
			}, R = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", D = Object(a.a)(R), N = (t, e) => async (n, r, {
				apiContext: s
			}) => {
				const o = r(),
					i = Object(T.S)(o, {
						subredditId: t
					});
				if (!i) return !1;
				const c = await (async (t, e, n) => Object(m.a)(Object(f.a)(t, [E.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: _.cb.DELETE
					}))(s(), i.name, e),
					d = Object(b.e)(o, "delete_flair_template");
				return c.ok && n(D({
					flairId: e
				})), Object(S.a)({
					...d,
					actionInfo: {
						...d.actionInfo,
						success: c.ok
					}
				}), c.ok
			}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return _
			})), n.d(e, "b", (function() {
				return f
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/config.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/reddit/models/Post/index.ts");
			var d = n("./src/reddit/models/Duplicates/index.ts"),
				a = n("./src/reddit/models/Subreddit/index.ts"),
				u = n("./src/reddit/selectors/profile.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const _ = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				m = (Object(r.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(r.a)(_)),
				f = (t, e) => async (n, r, {
					apiContext: _
				}) => {
					const f = Object(l.S)(r(), {
						subredditId: t
					}) || Object(u.p)(r(), {
						profileId: t
					});
					if (!f) return;
					const E = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.g)(f) ? s.Wb + f.name : f.name
						},
						b = await ((t, e, n) => Object(i.a)(t, {
							data: n,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(c.s)(e)}`,
							method: s.cb.GET
						}))(_(), e, E);
					if (b.ok) {
						const r = b.body;
						n(m({
							distinguishKey: Object(d.a)(e, E),
							postIds: r.postIds,
							posts: r.posts,
							profiles: r.profiles,
							subreddits: r.subreddits,
							subredditId: t
						}))
					}
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return i
			})), n.d(e, "i", (function() {
				return c
			})), n.d(e, "g", (function() {
				return d
			})), n.d(e, "f", (function() {
				return a
			})), n.d(e, "d", (function() {
				return u
			})), n.d(e, "e", (function() {
				return l
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				c = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				a = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return U
			})), n.d(e, "d", (function() {
				return x
			})), n.d(e, "c", (function() {
				return v
			})), n.d(e, "a", (function() {
				return G
			})), n.d(e, "b", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/subscription/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/posts.ts"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var E = n("./src/graphql/operations/SubscribedSubreddits.json"),
				b = n("./src/lib/makeGqlRequest/index.ts"),
				O = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var T = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				p = n("./src/reddit/models/GqlTopLevelField.ts"),
				I = n("./src/reddit/models/User/index.ts");

			function C(t) {
				const e = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = t.identity;
				for (const c of o.edges) {
					if (c.node.__typename !== I.c.AvailableRedditor) continue;
					const t = Object(T.a)(c.node.profile);
					r[t.id] = t;
					const {
						isFavorite: n
					} = c.node.profile;
					n && e.push(t.id)
				}
				const {
					subscribedSubreddits: i
				} = t.identity;
				for (const c of i.edges) {
					if (c.node.__typename !== p.a.Subreddit) continue;
					const t = Object(S.a)(c.node);
					s[t.id] = t;
					const {
						isFavorite: e
					} = c.node;
					e && n.push(t.id)
				}
				return {
					favoriteProfileIds: e,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var A = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/selectors/profile.ts"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/subscriptions.ts"),
				P = n("./src/reddit/selectors/user.ts");
			const L = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				j = Object(o.a)(a.c),
				h = Object(o.a)(a.b),
				y = Object(o.a)(a.a),
				g = Object(o.a)(a.h),
				U = (Object(o.a)(a.i), Object(o.a)(a.g), () => async (t, e, {
					gqlContext: n
				}) => {
					const r = e();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					t(h());
					const s = await (t => Object(b.a)(t, E))(n());
					if (s.ok) {
						const e = C(s.body.data);
						t(j(e))
					} else t(y({
						error: s.error
					}))
				}),
				k = (t, e) => e.type === l.a.PROFILE && t.displayText === e.name.replace("u_", ""),
				x = (t, e, n) => async (o, a, {
					apiContext: E
				}) => {
					let b = t.map(t => t.type === l.a.SUBREDDIT ? {
						id: Object(D.F)(a(), t.name),
						name: t.name,
						type: t.type
					} : {
						id: Object(R.m)(a(), t.name),
						name: `${s.Wb}${t.name}`,
						type: t.type
					});
					if (!Object(P.J)(a())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(c.j)());
					const T = Object(P.i)(a());
					if (T) {
						const e = b.length,
							n = t.length;
						if (b = b.filter(t => !k(T, t)), (t = t.filter(t => !k(T, t))).length !== n || b.length !== e) {
							const t = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.e)(Object(u.d)(t, A.b.Error)))
						}
						if (!t.length && !b.length) return
					}
					if (o(g({
							identifiers: b,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(N.b)(a()),
							userIsSubscriber: e,
							widgetId: n
						})), (await ((t, {
							subredditIds: e,
							subredditNames: n,
							subscribe: r
						}) => Object(_.a)(Object(m.a)(t, [f.a]), {
							method: s.cb.POST,
							endpoint: Object(O.a)(`${t.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: e && e.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(E(), {
							subredditNames: b.map(({
								name: t
							}) => t),
							subscribe: e
						})).ok) {
						const n = 1 === t.length ? `${"subreddit"===t[0].type?i.d.subreddit:i.d.profile}${t[0].name}` : `${r.fbt.plural("community",t.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(u.e)({
							text: 1 === t.length && "profile" === t[0].type ? r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", e ? "followed" : "unfollowed"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", e ? "joined" : "left"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(g({
							identifiers: b,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(N.b)(a()),
							userIsSubscriber: !e,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.e)(Object(u.d)(s, A.b.Error)))
					}
				}, F = Object(o.a)(a.f), v = t => async (e, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(D.L)(o, {
							identifier: t
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${t.id}`);
					const c = t.type === l.a.SUBREDDIT ? i.name : `u_${i.name}`,
						d = o.subscriptions.favoriteSubredditOrder || [],
						a = o.subscriptions.favoriteProfileOrder || [],
						E = d.indexOf(t.id),
						b = a.indexOf(t.id),
						O = -1 === E && -1 === b,
						T = o.subreddits.models,
						S = o.profiles.models;
					e(F({
						makeFavorite: O,
						identifier: t,
						subredditModels: T,
						profileModels: S
					}));
					const p = {
							type: t.type,
							name: i.name
						},
						I = () => Object(D.fb)(n(), {
							identifier: p
						});
					(I() || (await e(x([p], !0)), I())) && ((await ((t, e, n) => Object(_.a)(Object(m.a)(t, [f.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: e,
							api_type: "json"
						}
					}))(r(), c, O)).ok || (e(F({
						makeFavorite: !O,
						identifier: t,
						subredditModels: T,
						profileModels: S
					})), e(Object(u.e)({
						text: L(),
						kind: A.b.Error
					}))))
				}, M = Object(o.a)(a.d), G = t => async (e, n, {
					apiContext: r
				}) => {
					const o = n().multireddits.models,
						i = () => {
							e(Object(u.e)({
								text: L(),
								kind: A.b.Error
							}))
						},
						c = o[t];
					if (!c) return void i();
					const d = !c.isFavorited;
					e(M({
						makeFavorite: d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), (await ((t, e, n) => Object(_.a)(Object(m.a)(t, [f.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: e,
							api_type: "json"
						}
					}))(r(), t, d)).ok || (e(M({
						makeFavorite: !d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), i())
				}, w = Object(o.a)(a.e), Y = t => async (e, n, {
					apiContext: o
				}) => {
					const i = n(),
						c = i.multireddits.models;
					if (!Object(P.J)(i)) return;
					const d = (t = !0) => {
							e(Object(u.e)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", t ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: A.b.Error
							}))
						},
						a = c[t];
					if (!a) return void d();
					const l = !a.isFollowed;
					e(w({
						follow: l,
						multiredditPath: t,
						multiredditsModelsState: c
					})), (await ((t, e, n) => Object(_.a)(Object(m.a)(t, [f.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: e,
							api_type: "json"
						},
						type: "json"
					}))(o(), t, l)).ok || (e(w({
						follow: !l,
						multiredditPath: t,
						multiredditsModelsState: c
					})), d(l))
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "r", (function() {
				return r
			})), n.d(e, "a", (function() {
				return s
			})), n.d(e, "i", (function() {
				return o
			})), n.d(e, "j", (function() {
				return i
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "c", (function() {
				return d
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "p", (function() {
				return l
			})), n.d(e, "q", (function() {
				return _
			})), n.d(e, "o", (function() {
				return m
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "g", (function() {
				return E
			})), n.d(e, "e", (function() {
				return b
			})), n.d(e, "m", (function() {
				return O
			})), n.d(e, "n", (function() {
				return T
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "k", (function() {
				return p
			}));
			const r = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				T = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				p = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return o
			})), n.d(e, "b", (function() {
				return d
			})), n.d(e, "a", (function() {
				return _
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/models/PostDraft/index.ts");
			const o = t => ({
					id: t.json.data.id,
					draftsCount: t.json.data.drafts_count
				}),
				i = t => t.destSubreddit.id ? {
					subreddit: t.destSubreddit.id,
					target: t.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				c = t => {
					switch (t.kind) {
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
				d = t => {
					switch (t) {
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
				a = t => t.title.substring(0, 300),
				u = t => {
					switch (t.kind) {
						case s.b.Link:
						case s.b.Markdown:
							return t.body;
						case s.b.RichText:
							return JSON.stringify({
								document: t.body
							})
					}
				},
				l = t => t ? {
					flair_id: t.templateId || null,
					flair_text: Object(r.g)(t) || null,
					flair_text_color: t.textColor || null,
					flair_background_color: t.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				_ = t => ({
					id: t.draftId || void 0,
					...i(t),
					kind: c(t),
					title: a(t),
					body: u(t),
					spoiler: t.isSpoiler,
					nsfw: t.isNSFW,
					original_content: t.isOC,
					...l(t.flair),
					send_replies: t.sendReplies,
					is_public_link: t.isPublicLink
				})
		},
		"./src/reddit/helpers/commentList/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return c
			})), n.d(e, "c", (function() {
				return d
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "e", (function() {
				return u
			})), n.d(e, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const c = (t, e) => e().features.comments.models[t],
				d = t => {
					switch (t.commentLink.type) {
						case r.a.Comment:
							return t.commentsDict[t.commentLink.id];
						case r.a.MoreComments:
							return t.moreCommentsDict[t.commentLink.id];
						case r.a.ContinueThread:
							return t.continueThreadDict[t.commentLink.id]
					}
				},
				a = (t, e) => t.type === r.a.MoreComments ? e[t.id].numComments : 1,
				u = (t, e, n, r) => {
					let o = Object(s.n)(r, {
							commentLink: e,
							commentsPageKey: t
						}),
						i = e;
					for (; o && o.depth > n && o.prev && (i = o.prev, (o = Object(s.n)(r, {
							commentLink: i,
							commentsPageKey: t
						})) && !(o.depth <= n)););
					return i.id
				},
				l = (t, e, n) => {
					const {
						commentLists: r,
						comments: s
					} = t, {
						head: c
					} = r[e];
					if (c) return Object.keys(s).filter(t => {
						const e = s[t];
						return !(!e.isStickied || !((t, e) => {
							const n = Object(i.c)(t, {
								experimentEligibilitySelector: i.a,
								experimentName: o.y,
								expEventOverride: e
							});
							return !!(Object(o.rd)(n) ? void 0 : n)
						})(n)) || (t => !1 !== t.collapsed)(e)
					})
				}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (t.placement && !e.placement) return -1;
				if (e.placement && !t.placement) return 1;
				if (t.position && !e.position) return -1;
				if (e.position && !t.position) return 1;
				let n = 0;
				return t.placement && e.placement && (n = t.placement.localeCompare(e.placement)), 0 === n && t.position && e.position && (n = t.position - e.position), 0 === n && (n = t.title.localeCompare(e.title)), n
			}

			function s(t) {
				return [...t].sort(r)
			}
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = ({
				edges: t
			}) => {
				const e = [];
				for (const {
						node: n
					} of t) e.push(Object(r.e)(n));
				return e
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case r.E.NO_STRIPE_SUBSCRIPTION:
							case r.E.USER_DOESNT_EXIST:
							case r.E.USER_REQUIRED_ERROR:
							case r.E.VALIDATION_ERROR:
								return t;
							case r.E.NO_USER:
							case r.E.NO_TEXT:
							case r.E.NO_URL:
								return r.E.VALIDATION_ERROR;
							case r.E.CREDIT_CARD_FAILURE:
							case r.E.CREDIT_CARD_FAILURE_GENERIC:
								return r.E.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return r.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.E.VALIDATION_ERROR
				},
				o = t => {
					const e = t.body;
					return {
						type: s(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				i = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: o(t)
					} : t
				};
			e.a = o
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(t, e, n) {
			"use strict";
			var r;
			n.d(e, "a", (function() {
					return r
				})), n.d(e, "b", (function() {
					return s
				})),
				function(t) {
					t.Off = "OFF", t.Lenient = "LENIENT", t.Moderate = "MODERATE", t.Strict = "STRICT"
				}(r || (r = {}));
			const s = t => {
				switch (t) {
					case "harassment_comments_in_model":
					case "harassment_posts_in_model":
						return "Abuse Filter";
					case "hate_comments_in_model":
					case "hate_posts_in_model":
						return "Identity Filter";
					default:
						return null
				}
			}
		},
		"./src/reddit/models/Badge/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "e", (function() {
				return c
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "d", (function() {
				return l
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, o, i = n("./src/config.ts");

			function c(t) {
				return "userId" in t
			}

			function d(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function a(t, e, n) {
				const r = n.media[0],
					s = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(n => {
						const s = r[n],
							[i, c] = n.split("x").map(t => parseInt(t));
						(i < o.width && i >= t || c < o.height && c >= e) && (o = {
							height: c,
							width: i,
							url: s
						})
					}), !o.url && s.length) {
					const t = Object.keys(r)[0],
						e = r[t],
						[n, s] = t.split("x").map(t => parseInt(t));
					o = {
						height: s,
						width: n,
						url: e
					}
				}
				return o.url
			}

			function u(t) {
				return t.startsWith("https") ? t : `${i.a.assetPath}/${t}`
			}

			function l(t, e, n) {
				const r = a(t, e, n),
					s = a(2 * t, 2 * e, n);
				return {
					url: u(r),
					url2x: u(s)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(r || (r = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.DirectMessages = "directMessages", t.MessageTab = "messageTab", t.ChatRooms = "chatRooms", t.ChatRoomMentions = "chatRoomMentions"
			}(s || (s = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "d", (function() {
				return c
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(t) {
				t.Loyalty = "loyalty", t.Achievement = "achievement", t.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(t) {
				t.Gallery = "gallery", t.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				c = t => t === o.a.First ? r.Loyalty : t === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Duplicates/index.ts": function(t, e, n) {
			"use strict";

			function r(t, e) {
				return `${t}-sort[${e.sort}]-crossposts_only[${e.crossposts_only}]`
			}
			n.d(e, "a", (function() {
				return r
			}))
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "r", (function() {
				return i
			})), n.d(e, "a", (function() {
				return d
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "g", (function() {
				return u
			})), n.d(e, "n", (function() {
				return l
			})), n.d(e, "o", (function() {
				return _
			})), n.d(e, "f", (function() {
				return m
			})), n.d(e, "c", (function() {
				return E
			})), n.d(e, "q", (function() {
				return O
			})), n.d(e, "k", (function() {
				return T
			})), n.d(e, "j", (function() {
				return S
			})), n.d(e, "h", (function() {
				return p
			})), n.d(e, "i", (function() {
				return I
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "m", (function() {
				return A
			})), n.d(e, "b", (function() {
				return R
			})), n.d(e, "l", (function() {
				return D
			})), n.d(e, "p", (function() {
				return N
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, d, a;
			! function(t) {
				t.LINK = "LINK", t.POLL = "POLL", t.SELF = "SELF"
			}(c || (c = {})),
			function(t) {
				t.RTJSON = "RTJSON", t.TEXT = "TEXT"
			}(d || (d = {})),
			function(t) {
				t.CREATED = "CREATED", t.PROCESSING = "PROCESSING", t.FAILED = "FAILED", t.SUCCESS = "SUCCESS"
			}(a || (a = {}));
			const u = t => {
					return new Set(["links", "text", "polls"]).has(t)
				},
				l = t => t.__typename === o.c.AvailableRedditor,
				_ = t => t.__typename === s.a.Subreddit;
			var m, f, E, b;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(m || (m = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(E || (E = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(b || (b = {}));
			const O = t => f[b[t]],
				T = t => b[f[t]],
				S = t => E[f[t]],
				p = t => f[E[t]],
				I = t => b[E[t]];
			var C;
			! function(t) {
				t.Hourly = "HOURLY", t.Daily = "DAILY", t.Weekly = "WEEKLY", t.Monthly = "MONTHLY"
			}(C || (C = {}));
			const A = t => {
					switch (t) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				R = "custom",
				D = t => {
					switch (t) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(r.a)(t)
					}
				},
				N = t => "frequency" in t && !!t.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(t) {
				t[t.Failure = 0] = "Failure", t[t.Fetched = 1] = "Fetched", t[t.NotFetched = 2] = "NotFetched", t[t.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			e.b = (t = o, e) => {
				switch (e.type) {
					case s.a:
						if (t.status === r.Fetched && t.data.stripe && t.data.stripe.sources) {
							const n = e.payload.cardId,
								{
									[n]: r,
									...s
								} = t.data.stripe.sources;
							return {
								...t,
								data: {
									...t.data,
									stripe: {
										...t.data.stripe,
										sources: s
									}
								}
							}
						}
						return t;
					case s.e:
						if (t.status === r.Fetched && t.data.braintree && t.data.braintree.sources) {
							const n = e.payload.sourceId,
								{
									[n]: r,
									...s
								} = t.data.braintree.sources;
							return {
								...t,
								data: {
									...t.data,
									braintree: {
										...t.data.braintree,
										sources: s
									}
								}
							}
						}
						return t;
					case s.b:
						return {
							error: e.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: e.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return t
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/models/Badge/managementPage.ts");
			! function(t) {
				t[t.NotFetched = 0] = "NotFetched", t[t.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const a = {};

			function u(t) {
				return "userId" in t
			}

			function l(t, e, n, r) {
				t.forEach(t => {
					t.collections && Object.keys(t.collections).forEach(s => {
						let o;
						(o = t.placement ? t.placement === c.a.First ? r[d.a.Loyalty][s] : r[d.a.Achievement][s] : u(t) ? r[d.a.Cosmetic][d.c.MyBadges][s] : r[d.a.Cosmetic][d.c.Gallery][s]) && (u(t) ? n.has(t.id) && o.unlocked.push(t) : e.has(t.id) || o.locked.push(t))
					})
				})
			}

			function _(t) {
				const e = (t, e) => {
					const n = parseInt(t.price || "0"),
						r = parseInt(e.price || "0");
					return n === r ? Object(i.b)(t, e) : n - r
				};
				return t.locked.sort(e), t.unlocked.sort(e), t
			}

			function m(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === s.a).map(_).sort((t, n) => {
					const r = e[t.id],
						s = e[n.id];
					return Object(i.b)(r, s)
				})
			}

			function f(t) {
				const e = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(t.collections).forEach(n => {
					const r = t.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					e[d.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, e[d.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				t.userOwnedBadges.forEach(e => {
					const r = t.badges[e];
					r && n.add(r.type)
				});
				const r = new Set(t.userOwnedBadges);
				return l(Object.keys(t.badges).map(e => t.badges[e]), n, r, e), l(Object.keys(t.products).map(e => t.products[e]), n, r, e), {
					collections: {
						[d.a.Loyalty]: m(e[d.a.Loyalty], t.collections),
						[d.a.Achievement]: m(e[d.a.Achievement], t.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: m(e[d.a.Cosmetic][d.c.Gallery], t.collections),
							[d.c.MyBadges]: m(e[d.a.Cosmetic][d.c.MyBadges], t.collections)
						}
					},
					subscription: t.subscription,
					userOwnedBadges: t.userOwnedBadges.map(e => t.badges[e]).filter(Boolean)
				}
			}
			e.b = (t = a, e) => {
				switch (e.type) {
					case o.a: {
						const {
							subredditId: n
						} = e.payload, s = t[n];
						return s && s.status === r.Fetched ? {
							...t,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : t
					}
					case o.h: {
						const {
							subredditId: n
						} = e.payload, s = t[n];
						return s && s.status === r.Fetched ? {
							...t,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : t
					}
					case o.i: {
						const n = e.payload;
						return {
							...t,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: r.Fetched
							}
						}
					}
					default:
						return t
				}
			}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(t, e, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (t = o, e) => {
					switch (e.type) {
						case s.o:
							return e.payload;
						case s.p:
						default:
							return t
					}
				},
				c = n("./src/reddit/actions/pages/constants.ts");
			const d = {};
			var a = (t = d, e) => {
				switch (e.type) {
					case c.d:
					case c.b:
					case c.h:
					case c.f: {
						const {
							key: n
						} = e.payload;
						return {
							...t,
							[n]: null
						}
					}
					case c.a:
					case c.e: {
						const {
							key: n,
							error: r
						} = e.payload;
						return {
							...t,
							[n]: r || {}
						}
					}
					default:
						return t
				}
			};
			const u = {};
			var l = (t = u, e) => {
				switch (e.type) {
					case c.c:
					case c.g: {
						const {
							key: n
						} = e.payload;
						return {
							...t,
							[n]: !0
						}
					}
					default:
						return t
				}
			};
			const _ = {};
			var m = (t = _, e) => {
					switch (e.type) {
						case c.d:
						case c.h: {
							const {
								key: n
							} = e.payload;
							return {
								...t,
								[n]: !0
							}
						}
						case c.b:
						case c.a:
						case c.f:
						case c.e: {
							const {
								key: n
							} = e.payload;
							return {
								...t,
								[n]: !1
							}
						}
						default:
							return t
					}
				},
				f = Object(r.c)({
					error: a,
					fullyLoaded: l,
					pending: m
				}),
				E = n("./node_modules/lodash/uniqBy.js"),
				b = n.n(E),
				O = n("./node_modules/lodash/values.js"),
				T = n.n(O),
				S = n("./src/reddit/actions/comment/constants.ts"),
				p = n("./src/reddit/actions/comment/websocket/constants.ts");
			const I = {};

			function C(t) {
				return b()(t, "id").sort((t, e) => t.created - e.created)
			}
			var A = (t = I, e) => {
					switch (e.type) {
						case c.f:
						case S.u:
						case c.b: {
							const {
								comments: n,
								key: r
							} = e.payload, s = t[r] ? t[r] : [], o = function(t, e) {
								return T()(t).map(t => {
									const n = t.isStickied ? e && e.created || Math.round(Date.now() / 1e3) : t.created;
									return {
										id: t.id,
										created: n,
										stickied: t.isStickied,
										authorId: t.authorId
									}
								})
							}(n, s.find(t => t.stickied)), i = C([...s, ...o]);
							return {
								...t,
								[r]: [...i]
							}
						}
						case p.b:
						case p.c:
						case p.d:
						case S.G:
						case S.F: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: o
								},
								commentsPageKey: i,
								isChatSort: c
							} = e.payload;
							return !1 === c ? t : {
								...t,
								[i]: [...C([...t[i] ? t[i] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: o
								}])]
							}
						}
						default:
							return t
					}
				},
				R = n("./node_modules/lodash/mapValues.js"),
				D = n.n(R),
				N = n("./src/reddit/helpers/commentList/index.ts"),
				P = n("./src/reddit/models/Comment/index.ts");
			const L = {};

			function j(t) {
				const e = t;
				return D()(e, ({
					depth: t,
					next: e,
					prev: n
				}) => ({
					depth: t,
					next: e,
					prev: n
				}))
			}
			var h = (t = L, e) => {
				switch (e.type) {
					case S.u: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: o,
							moreCommentsItem: i,
							moreComments: c
						} = e.payload, d = r[i.postId], a = t[o], u = {}, l = a[i.id];
						if (l && l.prev) {
							const {
								id: t
							} = l.prev;
							u[t] = {
								...a[t],
								next: d.head || l.next
							}
						}
						if (l && l.next) {
							const {
								id: t
							} = l.next;
							u[t] = {
								...a[t],
								prev: d.tail || l.prev
							}
						}
						if (d.head && d.tail) {
							const t = Object(N.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: c,
									continueThreadDict: s
								}),
								e = Object(N.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: c,
									continueThreadDict: s
								});
							l && (t.prev = l.prev, e.next = l.next)
						}
						return {
							...t,
							[o]: {
								...t[o],
								...j(n),
								...j(s),
								...j(c),
								...u
							}
						}
					}
					case c.b:
					case c.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: o
						} = e.payload;
						return {
							...t,
							[s]: {
								...t[s],
								...j(n),
								...j(r),
								...j(o)
							}
						}
					}
					case p.b:
						const {
							comment: n, commentsPageKey: r, depth: s, headCommentId: o, originId: i, isChatSort: d
						} = e.payload, a = t[r], u = {};
						let l = null;
						if (d) return o && (u[o] = {
							...a[o],
							prev: Object(P.g)(n.id)
						}, l = Object(P.g)(o)), {
							...t,
							[r]: {
								...t[r],
								...u,
								[n.id]: {
									depth: 0,
									next: l,
									prev: null
								}
							}
						}; {
							let e = null;
							const o = n.parentId;
							if (i && o) {
								const n = "moreComments-" + i;
								if (a[o] && !a[n]) {
									const i = a[o].next;
									return i && (u[i.id] = {
										...a[i.id],
										prev: Object(P.h)(n)
									}, l = i), u[o] = {
										...a[o],
										next: Object(P.h)(n)
									}, e = Object(P.g)(o), {
										...t,
										[r]: {
											...t[r],
											...u,
											[n]: {
												depth: s || 0,
												next: l,
												prev: e
											}
										}
									}
								}
							}
							return t
						}
						case S.G: {
							const {
								comment: n,
								commentsPageKey: r,
								headCommentId: s
							} = e.payload, o = t[r], i = {};
							let c = null;
							return s && (i[s] = {
								...o[s],
								prev: Object(P.g)(n.id)
							}, c = Object(P.g)(s)), {
								...t,
								[r]: {
									...t[r],
									...i,
									[n.id]: {
										depth: 0,
										next: c,
										prev: null
									}
								}
							}
						}
						case S.F: {
							const {
								comment: n,
								commentsPageKey: r,
								parentCommentId: s,
								depth: o
							} = e.payload, i = t[r], c = {};
							let d = null;
							if (!i[s]) return t;
							const a = i[s].next;
							return a && (c[a.id] = {
								...i[a.id],
								prev: Object(P.g)(n.id)
							}, d = a), c[s] = {
								...i[s],
								next: Object(P.g)(n.id)
							}, {
								...t,
								[r]: {
									...t[r],
									...c,
									[n.id]: {
										depth: o,
										next: d,
										prev: Object(P.g)(s)
									}
								}
							}
						}
						default:
							return t
				}
			};
			const y = {};
			var g = (t = y, e) => {
				switch (e.type) {
					case p.b:
					case p.c:
					case S.G: {
						const {
							comment: n,
							commentsPageKey: r,
							isChatSort: s
						} = e.payload;
						return !1 === s ? t : {
							...t,
							[r]: n.id
						}
					}
					case c.b:
					case c.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = e.payload;
						return {
							...t,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					default:
						return t
				}
			};
			const U = {};
			var k = (t = U, e) => {
				switch (e.type) {
					case c.d:
					case c.b:
					case c.c:
					case c.h: {
						const {
							key: n,
							postId: r
						} = e.payload;
						return {
							...t,
							[n]: r
						}
					}
					case S.G: {
						const {
							parentId: n,
							commentsPageKey: r
						} = e.payload;
						return t[r] ? t : {
							...t,
							[r]: n
						}
					}
					default:
						return t
				}
			};
			e.a = Object(r.c)({
				api: f,
				keyToChatCommentLinks: A,
				keyToCommentThreadLinkSets: h,
				keyToHeadCommentId: g,
				keyToPostId: k,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return b
			})), n.d(e, "d", (function() {
				return O
			})), n.d(e, "u", (function() {
				return T
			})), n.d(e, "w", (function() {
				return S
			})), n.d(e, "x", (function() {
				return p
			})), n.d(e, "k", (function() {
				return C
			})), n.d(e, "g", (function() {
				return A
			})), n.d(e, "F", (function() {
				return R
			})), n.d(e, "n", (function() {
				return D
			})), n.d(e, "o", (function() {
				return N
			})), n.d(e, "j", (function() {
				return P
			})), n.d(e, "l", (function() {
				return L
			})), n.d(e, "h", (function() {
				return j
			})), n.d(e, "a", (function() {
				return h
			})), n.d(e, "b", (function() {
				return y
			})), n.d(e, "q", (function() {
				return g
			})), n.d(e, "m", (function() {
				return U
			})), n.d(e, "t", (function() {
				return k
			})), n.d(e, "y", (function() {
				return x
			})), n.d(e, "H", (function() {
				return F
			})), n.d(e, "s", (function() {
				return v
			})), n.d(e, "A", (function() {
				return M
			})), n.d(e, "B", (function() {
				return G
			})), n.d(e, "D", (function() {
				return w
			})), n.d(e, "r", (function() {
				return Y
			})), n.d(e, "e", (function() {
				return B
			})), n.d(e, "v", (function() {
				return H
			})), n.d(e, "I", (function() {
				return q
			})), n.d(e, "f", (function() {
				return K
			})), n.d(e, "i", (function() {
				return V
			})), n.d(e, "E", (function() {
				return W
			})), n.d(e, "z", (function() {
				return $
			})), n.d(e, "G", (function() {
				return J
			})), n.d(e, "p", (function() {
				return X
			})), n.d(e, "J", (function() {
				return z
			})), n.d(e, "C", (function() {
				return Q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeCommentPermalink/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/constants/comments.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/lib/initializeClient/installReducer.ts"),
				f = n("./src/reddit/reducers/features/comments/index.ts"),
				E = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(m.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: E.a
				}
			});
			const b = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.error[e],
				O = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.pending[e],
				T = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.fullyLoaded[e],
				S = (t, e) => t.pages.comments.keyToHeadCommentId[e.commentsPageKey],
				p = (t, e) => {
					const n = S(t, e);
					if (n) return Object(_.a)(t, {
						commentId: n
					})
				},
				I = [],
				C = Object(c.a)((t, e) => {
					const n = p(t, e),
						r = n && n.id;
					if (!r) return I;
					const {
						commentsPageKey: s
					} = e, o = t.pages.comments.keyToCommentThreadLinkSets[s], i = [];
					let c = {
						id: r,
						type: d.a.Comment
					};
					do {
						i.push(c), c = o[c.id].next
					} while (c);
					return i
				}),
				A = (t, e) => S(t, e) ? t.pages.comments.keyToChatCommentLinks[e.commentsPageKey] : [],
				R = (t, {
					commentsPageKey: e
				}) => {
					const n = t.pages.comments.keyToPostId[e];
					return n ? t.posts.models[n] : null
				},
				D = (t, {
					commentId: e,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = t.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : e ? s[e] : null : null
				},
				N = (t, {
					commentsPageKey: e
				}) => t.pages.comments.keyToCommentThreadLinkSets[e],
				P = (t, e) => {
					const n = e.commentsPageKey ? D(t, e) : null;
					return n ? n.depth : null
				},
				L = (t, {
					commentLink: e
				}) => {
					const {
						id: n,
						type: r
					} = e;
					switch (r) {
						case d.a.Comment:
							return t.features.comments.models[n];
						case d.a.MoreComments:
							return t.moreComments.models[n];
						case d.a.ContinueThread:
							return t.continueThreads.models[n];
						default:
							return null
					}
				},
				j = (t, e) => {
					if (t.platform.currentPage && t.platform.currentPage.urlParams && t.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: e
						} = t.platform.currentPage.urlParams, n = Object(a.r)(e);
						return Array.from(new Set(Object.keys(t.features.comments.models).filter(e => t.features.comments.models[e].postId === n && t.features.comments.models[e].author !== o.A).map(e => t.features.comments.models[e].author)))
					}
					return []
				},
				h = (t, {
					commentsPageKey: e
				}) => t.features.comments.collapsed[e],
				y = t => t.moreComments.models,
				g = t => t.features.comments.models,
				U = (t, {
					commentId: e
				}) => {
					const n = Object(_.a)(t, {
						commentId: e
					});
					return n ? Object(i.a)(Object(u.H)(t, n), e) : ""
				},
				k = (t, {
					commentId: e
				}) => !!(e && t.features.comments.focused && t.features.comments.focused[e]),
				x = (t, {
					commentId: e,
					commentsPageKey: n
				}) => !!(e && t.features.comments.isEditing[n] && t.features.comments.isEditing[n][e]),
				F = (t, {
					commentId: e,
					commentsPageKey: n
				}) => !!(e && t.features.comments.replyFormOpen[n] && t.features.comments.replyFormOpen[n][e]),
				v = (t, {
					commentsPageKey: e
				}) => {
					const n = e && t.features.comments.replyFormOpen[e] || {},
						r = Object.keys(n).find(t => n[t]),
						s = Object(_.a)(t, {
							commentId: r
						}),
						o = s && P(t, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: e
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				M = (t, {
					moreCommentsId: e
				}) => t.moreComments.models[e],
				G = (t, {
					moreCommentsId: e
				}) => !!t.moreComments.api.pending[e],
				w = (t, {
					commentsPageKey: e
				}) => {
					const n = t.pages.comments.keyToPostId[e];
					if (n) {
						const e = s()(t.moreComments.models).find(e => e.postId === n && 0 === e.depth && !(void 0 !== t.moreComments.api.pending[e.id]));
						if (e) return {
							moreCommentId: e.id,
							pending: !!t.moreComments.api.pending[e.id]
						}
					}
					return null
				},
				Y = (t, {
					id: e
				}) => t.continueThreads.models[e],
				B = (t, {
					commentId: e
				}) => {
					const n = e ? t.features.comments.models[e] : void 0;
					if (!n) return null;
					const r = t.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				H = (t, {
					draftKey: e
				}) => !!t.features.comments.submit.error[e],
				q = (t, {
					draftKey: e
				}) => {
					const n = t.features.comments.submit.error[e];
					return n && n.fields ? n.fields.map(t => t.msg) : []
				},
				K = (t, {
					draftKey: e
				}) => {
					const n = t.features.comments.drafts[e];
					return !!n && n.autofocusDisabled
				},
				V = (t, {
					draftKey: e
				}) => t.features.comments.drafts[e],
				W = (t, {
					commentId: e
				}) => {
					const n = e ? t.features.comments.submit.error[e] : void 0;
					return n && n.fields ? n.fields.map(t => t.msg) : void 0
				},
				$ = (t, {
					commentId: e
				}) => !!e && t.features.comments.submit.pending[e],
				J = (t, {
					commentId: e
				}) => !!e && t.features.comments.models[e].sendReplies,
				X = t => t.features.comments.visitHighlightFilter,
				z = (t, e) => {
					const n = Object(_.a)(t, e);
					if (n) return Object(l.X)(t, n)
				},
				Q = (t, {
					postId: e
				}) => t.features.comments.newCommentsCount[e] ? t.features.comments.newCommentsCount[e] : 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d.b63aab7b0a23d14bf97f.js.map