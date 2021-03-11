// https://www.redditstatic.com/desktop2x/Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.b43797688678c194a6db.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3"], {
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
				return D
			})), n.d(e, "b", (function() {
				return y
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
				m = n("./src/reddit/models/AutomatedReporting/index.ts");
			const f = t => {
				switch (t) {
					case "LENIENT":
						return m.a.Lenient;
					case "MODERATE":
						return m.a.Moderate;
					case "STRICT":
						return m.a.Strict;
					default:
						return m.a.Off
				}
			};
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var b = n("./node_modules/lodash/isEmpty.js"),
				_ = n.n(b),
				p = n("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				E = n("./src/graphql/operations/UpdatePostRequirements.json"),
				O = n("./src/reddit/endpoints/subreddit/about.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/contentControls.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/actions/contentControls/constants.ts");
			const j = Object(c.a)(C.b),
				R = Object(c.a)(C.c),
				h = Object(c.a)(C.a),
				D = t => async (e, n, {
					gqlContext: r
				}) => {
					const s = {
						subredditName: t.toLowerCase()
					};
					if (Object(T.a)(n(), s)) return;
					e(R(s));
					let o = Object(I.F)(n(), t);
					if (!o) {
						const n = await Object(O.a)(r(), t, !1);
						if (n.ok) {
							o = n.body.data.subreddit.id
						}
						if (!o) {
							const t = n.error || {
								type: i.E.NOT_FOUND_ERROR
							};
							return void e(h({
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
												levelAbuse: f(null == r ? void 0 : r.automatedReportingLevelAbuse),
												levelHate: f(null == r ? void 0 : r.automatedReportingLevelHate),
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
					if (c) e(j({
						...s,
						...c
					}));
					else {
						const n = a.error || {
							type: i.E.UNKNOWN_ERROR
						};
						e(h({
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
				}, A = Object(c.a)(C.d), y = (t, e) => async (n, s, {
					gqlContext: o
				}) => {
					const i = t.toLowerCase(),
						c = Object(I.F)(s(), t);
					if (!c) return {
						success: !1
					};
					const d = await ((t, e, n) => {
						const r = [Promise.resolve(null), Promise.resolve(null)];
						if (n.postRequirements && !_()(n.postRequirements)) {
							const s = {
								subredditId: e,
								...n.postRequirements
							};
							r[0] = Object(l.a)(t, {
								...E,
								variables: {
									input: s
								}
							})
						}
						if (n.automatedReporting && !_()(n.automatedReporting)) {
							const s = {
								subredditId: e
							};
							n.automatedReporting.levelAbuse && (s.automatedReportingLevelAbuse = n.automatedReporting.levelAbuse), n.automatedReporting.levelHate && (s.automatedReportingLevelHate = n.automatedReporting.levelHate), r[1] = Object(l.a)(t, {
								...p,
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
					if (d.ok) return n(A({
						subredditName: i,
						partialUpdates: e
					})), {
						success: !0
					}; {
						const t = L(d.fieldErrors);
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
				}, L = t => t && t.map(t => ({
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
				return g
			})), n.d(e, "PAGE_LOADED", (function() {
				return U
			})), n.d(e, "PAGE_FAILED", (function() {
				return k
			})), n.d(e, "pagePending", (function() {
				return x
			})), n.d(e, "pageLoaded", (function() {
				return v
			})), n.d(e, "pageFailed", (function() {
				return F
			})), n.d(e, "postCreationPageDataRequested", (function() {
				return M
			})), n.d(e, "postCreationPageRequested", (function() {
				return G
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/filterQueryParams/index.ts"),
				i = n("./src/lib/isFakeSubreddit/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/makePostCreationPageKey/index.ts"),
				a = n("./src/reddit/actions/contentControls/index.ts"),
				u = n("./src/reddit/actions/economics/helpers/async.ts"),
				l = n("./src/reddit/actions/externalAccount.ts"),
				m = n("./src/reddit/actions/gold/powerups.ts"),
				f = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/postCreation/general.ts"),
				_ = n("./src/reddit/actions/profile/index.ts"),
				p = n("./src/reddit/actions/subreddit.ts"),
				E = n("./src/reddit/actions/subredditDuplicates.ts"),
				O = n("./src/config.ts"),
				S = n("./src/lib/makeApiRequest/index.ts"),
				T = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				I = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				C = n("./src/reddit/helpers/timeApiRoute/index.ts"),
				j = n("./src/reddit/helpers/trackers/postComposer.ts"),
				R = n("./src/reddit/models/User/index.ts"),
				h = n("./src/reddit/selectors/contentControls.ts"),
				D = n("./src/reddit/selectors/postCollection.ts"),
				A = n("./src/reddit/selectors/postCreations.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				L = n("./src/reddit/selectors/profile.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/selectors/user.ts");
			const g = "POST_CREATION__PAGE_PENDING",
				U = "POST_CREATION__PAGE_LOADED",
				k = "POST_CREATION__PAGE_FAILED",
				x = Object(c.a)(g),
				v = Object(c.a)(U),
				F = Object(c.a)(k),
				w = () => async (t, e) => {
					const n = e(),
						r = Object(A.a)(n);
					r !== Object(A.fb)(n) && t(Object(b.g)({
						submissionType: r
					}))
				}, M = t => async (e, n, r) => {
					const {
						collectionId: o,
						profileName: c,
						subredditName: u
					} = t, f = Object(d.a)(t), b = n(), E = b.creations.api.page.pending[f], I = b.creations.api.page.fetched[f], j = b.creations.api.page.error[f];
					if (E) return;
					if (I && !j) return void e(w());
					const D = [];
					e(x({
						key: f
					}));
					let A = u;
					!u && c && (A = `u_${c}`), D.push(((t, e) => Object(S.a)(t, {
						method: s.cb.GET,
						endpoint: Object(T.a)(`${O.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: e.subredditName,
							collection_id: e.collectionId
						}
					}))(r.apiContext(), {
						subredditName: A,
						collectionId: o
					})), c && (D.push(e(_.d(c))), D.push(e(_.b(c))));
					const [y] = await Object(C.a)("postCreation", () => Promise.all(D));
					if (y.ok) {
						const t = y.body,
							{
								posts: r = {},
								subredditAboutInfo: s
							} = t;
						if (e(v({
								key: f,
								meta: b.meta,
								...t,
								posts: r
							})), !Object(P.K)(n())) return;
						if (s) {
							const t = Object.keys(s)[0];
							await e(Object(m.f)(t, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						e(w());
						const o = [];
						o.push(e(l.o()));
						const c = Object(P.j)(n());
						if (c && c.hasUserProfile && o.push(e(_.d(Object(R.e)(c)))), u && !Object(i.a)(u)) {
							o.push(e(p.o(u))), !!Object(h.b)(n(), {
								subredditName: u
							}) || o.push(e(Object(a.a)(u)))
						}
						await Promise.all(o)
					} else e(F({
						error: y.error,
						key: f
					}))
				}, G = t => async (e, n) => {
					const {
						subredditName: i,
						profileName: c
					} = t.params, d = t.queryParams, a = d.collection;
					if (await e(M({
							collectionId: a,
							profileName: c,
							subredditName: i
						})), !Object(P.K)(n())) return void Object(I.a)(e, n());
					let l;
					if (i ? (l = Object(N.A)(n(), {
							subredditName: i
						}), await e(Object(u.a)({
							subredditName: i
						}))) : c && (l = Object(L.j)(n(), {
							profileName: c
						})), d.source_id) await e(((t, e) => async (n, r) => {
						const {
							subredditName: s,
							profileName: o
						} = t, i = [];
						let c;
						s ? c = Object(N.F)(r(), s) : o && (c = Object(P.eb)(r(), {
							userName: o
						})), c && i.push(n(Object(E.b)(c, e))), i.push(n(Object(f.K)(e))), await Promise.all(i);
						const d = Object(y.f)(r(), {
							postId: e
						});
						n(Object(b.k)({
							postId: e,
							postTitle: d ? d.title : ""
						}))
					})(t.params, d.source_id));
					else if (a) {
						const s = Object(D.q)(n(), {
							collectionId: a
						});
						l && s && s.subredditId === l.id || e(Object(r.c)(Object(o.a)(t.url, ["collection"])))
					}((t, e) => {
						const n = t.platform.lastPage;
						e && n && n.meta && n.meta.name === s.Db.POST_CREATION && j.x(t)
					})(n(), i)
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "PAGE_PENDING", (function() {
				return f
			})), n.d(e, "PAGE_LOADED", (function() {
				return b
			})), n.d(e, "PAGE_FAILED", (function() {
				return _
			})), n.d(e, "pagePending", (function() {
				return p
			})), n.d(e, "pageLoaded", (function() {
				return E
			})), n.d(e, "pageFailed", (function() {
				return O
			})), n.d(e, "postDraftPageDataRequested", (function() {
				return S
			})), n.d(e, "postDraftRequested", (function() {
				return T
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
				m = n("./src/reddit/helpers/timeApiRoute/index.ts");
			const f = "POST_DRAFT__PAGE_PENDING",
				b = "POST_DRAFT__PAGE_LOADED",
				_ = "POST_DRAFT__PAGE_FAILED",
				p = Object(r.a)(f),
				E = Object(r.a)(b),
				O = Object(r.a)(_),
				S = t => async (e, n, r) => {
					const {
						draftId: f,
						profileName: b
					} = t, _ = Object(s.a)(t), p = n(), S = p.creations.api.page.pending[_], T = p.creations.api.page.fetched[_], I = p.creations.api.page.error[_];
					if (S || T && !I || !f) return;
					e(o.d(b));
					const C = await Object(m.a)("postDraft", () => ((t, e, n) => Object(d.a)(t, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${n}/${e}`)),
						method: c.cb.GET
					}))(r.apiContext(), f, b));
					if (C.ok) {
						const t = C.body;
						t.drafts[f].kind = Object(l.b)(t.drafts[f].kind), e(E({
							...t,
							key: _
						}))
					} else e(O({
						error: C.error,
						key: _
					}))
				}, T = t => async (e, n, r) => {
					await e(S(t.params))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return f
			})), n.d(e, "h", (function() {
				return b
			})), n.d(e, "d", (function() {
				return _
			})), n.d(e, "g", (function() {
				return p
			})), n.d(e, "c", (function() {
				return S
			})), n.d(e, "f", (function() {
				return T
			})), n.d(e, "b", (function() {
				return j
			})), n.d(e, "e", (function() {
				return R
			})), n.d(e, "i", (function() {
				return P
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
				m = n("./src/reddit/selectors/profile.ts");
			const f = "PINNEDPOST__PINNED_POSTS_LOADED",
				b = Object(o.a)(f),
				_ = "PINNEDPOST__PIN_POST_SUCCESS",
				p = "PINNEDPOST__UNPIN_POST_SUCCESS",
				E = Object(o.a)(_),
				O = Object(o.a)(p),
				S = "PINNEDPOST__PIN_POST_PENDING",
				T = "PINNEDPOST__UNPIN_POST_PENDING",
				I = Object(o.a)(S),
				C = Object(o.a)(T),
				j = "PINNEDPOST__PIN_POST_FAILURE",
				R = "PINNEDPOST__UNPIN_POST_FAILURE",
				h = Object(o.a)(j),
				D = Object(o.a)(R),
				A = t => Object(c.e)({
					buttonAction: P(t, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				y = (t, e) => Object(c.e)({
					buttonAction: P(t, !0),
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
				L = () => Object(c.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				N = () => Object(c.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				P = (t, e = !1) => async (n, o, {
					apiContext: f
				}) => {
					const b = o(),
						_ = b.posts.models[t];
					if (!_) return;
					const p = !Object(l.t)(b, {
						postId: t
					});
					if (p && _.isRemoved) return n((() => Object(c.e)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const S = _.author,
						T = Object(m.m)(b, S),
						[j, R, P, g, U] = p ? [I, E, h, A, L] : [C, O, D, y, N];
					if (p) {
						if (Object(l.Q)(b, {
								profileName: S
							}).length >= s.V) return void n(Object(i.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const k = Object(l.p)(b, t, S),
						x = !p && k;
					n(j({
						postId: t,
						profileId: T
					})), (await Object(a.t)(f(), t, p, !0)).ok ? (n(R({
						postId: t,
						profileId: T
					})), e || n(g(t, x))) : (n(P({
						postId: t,
						profileId: T
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
				return m
			})), n.d(e, "n", (function() {
				return f
			})), n.d(e, "l", (function() {
				return b
			})), n.d(e, "m", (function() {
				return _
			})), n.d(e, "k", (function() {
				return p
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "j", (function() {
				return O
			})), n.d(e, "h", (function() {
				return S
			})), n.d(e, "p", (function() {
				return T
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
				m = "UPDATE_COLLECTION_SUCCESS",
				f = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				_ = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				p = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				O = "REORDER_COLLECTION_SUCCESS",
				S = "REORDER_COLLECTION_FAILED",
				T = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/general.ts": function(t, e, n) {
			"use strict";
			n.d(e, "i", (function() {
				return _
			})), n.d(e, "m", (function() {
				return E
			})), n.d(e, "a", (function() {
				return O
			})), n.d(e, "b", (function() {
				return S
			})), n.d(e, "c", (function() {
				return I
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "f", (function() {
				return j
			})), n.d(e, "e", (function() {
				return R
			})), n.d(e, "g", (function() {
				return h
			})), n.d(e, "h", (function() {
				return D
			})), n.d(e, "j", (function() {
				return A
			})), n.d(e, "r", (function() {
				return y
			})), n.d(e, "q", (function() {
				return L
			})), n.d(e, "s", (function() {
				return N
			})), n.d(e, "t", (function() {
				return P
			})), n.d(e, "u", (function() {
				return g
			})), n.d(e, "v", (function() {
				return U
			})), n.d(e, "x", (function() {
				return k
			})), n.d(e, "y", (function() {
				return x
			})), n.d(e, "z", (function() {
				return v
			})), n.d(e, "k", (function() {
				return F
			})), n.d(e, "p", (function() {
				return w
			})), n.d(e, "o", (function() {
				return G
			})), n.d(e, "w", (function() {
				return Y
			})), n.d(e, "n", (function() {
				return B
			})), n.d(e, "l", (function() {
				return q
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
				m = n("./src/reddit/selectors/postCollection.ts"),
				f = n("./src/reddit/selectors/postCreations.ts"),
				b = n("./src/reddit/actions/postCreation/constants.ts");
			const _ = Object(o.a)(b.n),
				p = Object(o.a)(b.z),
				E = (Object(o.a)(b.s), t => {
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
				O = Object(o.a)(b.b),
				S = Object(o.a)(b.c),
				T = Object(o.a)(b.d),
				I = Object(o.a)(b.e),
				C = Object(o.a)(b.f),
				j = Object(o.a)(b.g),
				R = Object(o.a)(b.h),
				h = Object(o.a)(b.i),
				D = Object(o.a)(b.j),
				A = Object(o.a)(b.q),
				y = Object(o.a)(b.O),
				L = Object(o.a)(b.N),
				N = (Object(o.a)(b.P), Object(o.a)(b.Q)),
				P = Object(o.a)(b.R),
				g = Object(o.a)(b.S),
				U = Object(o.a)(b.T),
				k = Object(o.a)(b.U),
				x = Object(o.a)(b.V),
				v = Object(o.a)(b.W),
				F = Object(o.a)(b.r),
				w = t => async (e, n, {
					apiContext: r
				}) => {
					e(T(t)), Object(s.a)(t) && e((t => async (e, n, {
						apiContext: r
					}) => {
						const s = await Object(d.f)(r(), t);
						s.ok && s.body && s.body.json && s.body.json.data && e(p(s.body.json.data))
					})(t))
				}, M = Object(o.a)(b.A), G = (t, e) => async (n, s) => {
					n(M()), n(t ? Object(r.b)(u.b) : Object(r.b)(Object(f.V)(s(), {
						pageLayer: e
					})))
				}, Y = t => async e => {
					e(i.i(t))
				}, B = t => async (e, n) => {
					const r = n(),
						s = Object(c.D)(t),
						o = Object(f.B)(r);
					if (s && o) {
						Object(l.a)(r) !== a.c && e(Y(a.c))
					} else e(G(!1, t))
				}, q = t => async (e, n) => {
					const r = n();
					Object(m.m)(r, {
						subredditId: t
					}) ? e(i.i(a.a)) : e(i.i(a.b))
				}
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return b
			})), n.d(e, "a", (function() {
				return O
			})), n.d(e, "f", (function() {
				return C
			})), n.d(e, "b", (function() {
				return D
			})), n.d(e, "e", (function() {
				return N
			})), n.d(e, "d", (function() {
				return P
			})), n.d(e, "l", (function() {
				return x
			})), n.d(e, "k", (function() {
				return v
			})), n.d(e, "j", (function() {
				return F
			})), n.d(e, "g", (function() {
				return w
			})), n.d(e, "i", (function() {
				return M
			})), n.d(e, "h", (function() {
				return G
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
				m = n("./src/reddit/selectors/postFlair.ts"),
				f = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				_ = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				p = Object(s.a)(b),
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				T = Object(s.a)(O),
				I = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				j = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				R = Object(s.a)(C),
				h = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				D = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				A = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				y = Object(s.a)(D),
				L = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				P = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				g = Object(s.a)(N),
				U = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				k = Object(s.a)(P),
				x = (t, e) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(f.T)(o, {
							subredditId: t
						}).name;
					n(_());
					const c = await Object(d.k)(s(), i, e);
					if (c.ok) {
						n(p({
							subredditId: t,
							isEnabled: e
						}))
					} else n(E());
					return c.ok
				}, v = (t, e) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(f.T)(o, {
							subredditId: t
						}).name;
					n(S());
					const c = await Object(d.j)(s(), e, u.d.LinkFlair, i);
					if (c.ok) {
						n(T({
							subredditId: t,
							canAssignOwn: e
						}))
					} else n(I());
					return c.ok
				}, F = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						m = Object(f.T)(a, {
							subredditId: e
						}).name;
					n(j());
					const b = await Object(d.f)(o(), t, m, u.d.LinkFlair);
					let _ = b.ok && !(b.body && !1 === b.body.success);
					if (_) {
						const r = b.body;
						if (n(R({
								subredditId: e,
								template: r
							})), r.id) {
							const s = t.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[r.id];
							s ? _ = await n(Object(i.d)(e, r.id, s)) : o && (_ = await n(Object(i.c)(e, r.id)))
						}
					}
					if (_) {
						const t = Object(c.d)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						n(Object(c.e)(t))
					} else {
						n(h());
						const s = Object(c.d)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(t, e));
						n(Object(c.e)(s))
					}
					return _
				}, w = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = Object(f.T)(i, {
							subredditId: e
						}).name;
					if (n(A()), (await Object(d.b)(o(), t, a)).ok) {
						n(y({
							subredditId: e,
							templateId: t
						}));
						const s = Object(c.d)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						n(Object(c.e)(s))
					} else {
						n(L());
						const s = Object(c.d)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(t, e));
						n(Object(c.e)(s))
					}
				}, M = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = Object(m.d)(i, {
							subredditId: e
						}).templateIds,
						b = Object(f.T)(i, {
							subredditId: e
						}).name;
					if (n(g({
							subredditId: e,
							templateIds: t
						})), (await Object(d.e)(o(), b, u.d.LinkFlair, t)).ok) {
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
						}), M(t, e));
						n(Object(c.e)(s))
					}
				}, G = ({
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
				return j
			})), n.d(e, "a", (function() {
				return R
			})), n.d(e, "c", (function() {
				return D
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
				m = n("./src/lib/constants/index.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				_ = n("./src/reddit/constants/headers.ts");
			var p = n("./src/reddit/helpers/trackers/blade.ts"),
				E = n("./src/reddit/models/Image/index.tsx"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/telemetry/index.ts");
			const T = ({
				subredditId: t,
				flairId: e,
				imageKey: n,
				imageData: r
			}) => async (s, o, i) => {
				const c = o(),
					d = Object(O.T)(c, {
						subredditId: t
					});
				if (!d) return !1;
				s(Object(u.k)(r));
				const a = await (async (t, e, n, r, s, o) => Object(f.a)(Object(b.a)(t, [_.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${n}`,
					method: m.cb.POST,
					data: {
						filepath: r,
						imagetype: s,
						mimetype: o
					}
				}))(i.apiContext(), d.name, e, r.file.name, n, await Object(l.g)(r.file));
				let p = !1;
				try {
					const t = await Object(u.g)(o(), a, r, E.a.FlairTemplates);
					t && s(Object(u.j)(t)), p = !0
				} catch (S) {
					if (S instanceof Error) throw S;
					s(Object(u.i)(S))
				}
				return p
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", C = Object(a.a)(I), j = (t, e, n) => async (r, o, c) => {
				const {
					apiContext: a
				} = c;
				let l = o();
				const {
					pendingImages: I,
					...j
				} = n;
				let R = j;
				const h = Object(O.T)(l, {
					subredditId: t
				});
				if (!h) return !1;
				const D = l.structuredStyles.flairTemplate.models[e];
				if (D && i()(D, R)) return !0;
				if (I) {
					const n = [];
					if (s()(I, (s, o) => {
							s && n.push(r(T({
								flairId: e,
								imageData: Object(E.m)(s),
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
							s && s.kind === E.b.TempUploaded && (r[e] = s.url)
						}), r
					})(R, I, o())
				}
				l = o();
				let A = null,
					y = null;
				const L = [];
				try {
					(A = await Object(u.f)(l, E.a.FlairTemplates)) && (y = Object(u.m)(A)(r, o, c), L.push(...d()(A.imagesByKey)))
				} catch (U) {
					return !1
				}
				const N = await (async (t, e, n, r) => Object(f.a)(Object(b.a)(t, [_.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: m.cb.PUT,
						data: r
					}))(a(), h.name, e, R),
					P = D ? "edit_post_flair_template" : "save_post_flair_template",
					g = Object(p.e)(l, P);
				if (N.ok) {
					let t;
					if (y) try {
						await y, t = ((t, e, n) => {
							const r = {
								...t
							};
							return e.forEach(t => {
								const e = n.imageUploads[t.id];
								e && e.kind === E.b.Uploaded && (t.url === r.postBackgroundImage ? r.postBackgroundImage = e.url : t.url === r.postPlaceholderImage && (r.postPlaceholderImage = e.url))
							}), r
						})(R, L, o())
					} catch (U) {
						t = null
					} else t = R;
					r(C({
						flairId: e,
						template: t || R
					}))
				} else A && A.websocket.close();
				return Object(S.a)({
					...g,
					actionInfo: {
						...g.actionInfo,
						success: N.ok
					}
				}), N.ok
			}, R = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", h = Object(a.a)(R), D = (t, e) => async (n, r, {
				apiContext: s
			}) => {
				const o = r(),
					i = Object(O.T)(o, {
						subredditId: t
					});
				if (!i) return !1;
				const c = await (async (t, e, n) => Object(f.a)(Object(b.a)(t, [_.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: m.cb.DELETE
					}))(s(), i.name, e),
					d = Object(p.e)(o, "delete_flair_template");
				return c.ok && n(h({
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
				return m
			})), n.d(e, "b", (function() {
				return b
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
			const m = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				f = (Object(r.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(r.a)(m)),
				b = (t, e) => async (n, r, {
					apiContext: m
				}) => {
					const b = Object(l.T)(r(), {
						subredditId: t
					}) || Object(u.p)(r(), {
						profileId: t
					});
					if (!b) return;
					const _ = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.g)(b) ? s.Wb + b.name : b.name
						},
						p = await ((t, e, n) => Object(i.a)(t, {
							data: n,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(c.s)(e)}`,
							method: s.cb.GET
						}))(m(), e, _);
					if (p.ok) {
						const r = p.body;
						n(f({
							distinguishKey: Object(d.a)(e, _),
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
				return F
			})), n.d(e, "a", (function() {
				return M
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
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var _ = n("./src/graphql/operations/SubscribedSubreddits.json"),
				p = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var O = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				T = n("./src/reddit/models/GqlTopLevelField.ts"),
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
					const t = Object(O.a)(c.node.profile);
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
					if (c.node.__typename !== T.a.Subreddit) continue;
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
			var j = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				D = n("./src/reddit/selectors/subscriptions.ts"),
				A = n("./src/reddit/selectors/user.ts");
			const y = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				L = Object(o.a)(a.c),
				N = Object(o.a)(a.b),
				P = Object(o.a)(a.a),
				g = Object(o.a)(a.h),
				U = (Object(o.a)(a.i), Object(o.a)(a.g), () => async (t, e, {
					gqlContext: n
				}) => {
					const r = e();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					t(N());
					const s = await (t => Object(p.a)(t, _))(n());
					if (s.ok) {
						const e = C(s.body.data);
						t(L(e))
					} else t(P({
						error: s.error
					}))
				}),
				k = (t, e) => e.type === l.a.PROFILE && t.displayText === e.name.replace("u_", ""),
				x = (t, e, n) => async (o, a, {
					apiContext: _
				}) => {
					let p = t.map(t => t.type === l.a.SUBREDDIT ? {
						id: Object(h.F)(a(), t.name),
						name: t.name,
						type: t.type
					} : {
						id: Object(R.m)(a(), t.name),
						name: `${s.Wb}${t.name}`,
						type: t.type
					});
					if (!Object(A.K)(a())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(c.j)());
					const O = Object(A.j)(a());
					if (O) {
						const e = p.length,
							n = t.length;
						if (p = p.filter(t => !k(O, t)), (t = t.filter(t => !k(O, t))).length !== n || p.length !== e) {
							const t = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.e)(Object(u.d)(t, j.b.Error)))
						}
						if (!t.length && !p.length) return
					}
					if (o(g({
							identifiers: p,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(D.b)(a()),
							userIsSubscriber: e,
							widgetId: n
						})), (await ((t, {
							subredditIds: e,
							subredditNames: n,
							subscribe: r
						}) => Object(m.a)(Object(f.a)(t, [b.a]), {
							method: s.cb.POST,
							endpoint: Object(E.a)(`${t.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: e && e.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(_(), {
							subredditNames: p.map(({
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
							identifiers: p,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(D.b)(a()),
							userIsSubscriber: !e,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.e)(Object(u.d)(s, j.b.Error)))
					}
				}, v = Object(o.a)(a.f), F = t => async (e, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(h.L)(o, {
							identifier: t
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${t.id}`);
					const c = t.type === l.a.SUBREDDIT ? i.name : `u_${i.name}`,
						d = o.subscriptions.favoriteSubredditOrder || [],
						a = o.subscriptions.favoriteProfileOrder || [],
						_ = d.indexOf(t.id),
						p = a.indexOf(t.id),
						E = -1 === _ && -1 === p,
						O = o.subreddits.models,
						S = o.profiles.models;
					e(v({
						makeFavorite: E,
						identifier: t,
						subredditModels: O,
						profileModels: S
					}));
					const T = {
							type: t.type,
							name: i.name
						},
						I = () => Object(h.gb)(n(), {
							identifier: T
						});
					(I() || (await e(x([T], !0)), I())) && ((await ((t, e, n) => Object(m.a)(Object(f.a)(t, [b.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: e,
							api_type: "json"
						}
					}))(r(), c, E)).ok || (e(v({
						makeFavorite: !E,
						identifier: t,
						subredditModels: O,
						profileModels: S
					})), e(Object(u.e)({
						text: y(),
						kind: j.b.Error
					}))))
				}, w = Object(o.a)(a.d), M = t => async (e, n, {
					apiContext: r
				}) => {
					const o = n().multireddits.models,
						i = () => {
							e(Object(u.e)({
								text: y(),
								kind: j.b.Error
							}))
						},
						c = o[t];
					if (!c) return void i();
					const d = !c.isFavorited;
					e(w({
						makeFavorite: d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), (await ((t, e, n) => Object(m.a)(Object(f.a)(t, [b.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: e,
							api_type: "json"
						}
					}))(r(), t, d)).ok || (e(w({
						makeFavorite: !d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), i())
				}, G = Object(o.a)(a.e), Y = t => async (e, n, {
					apiContext: o
				}) => {
					const i = n(),
						c = i.multireddits.models;
					if (!Object(A.K)(i)) return;
					const d = (t = !0) => {
							e(Object(u.e)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", t ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: j.b.Error
							}))
						},
						a = c[t];
					if (!a) return void d();
					const l = !a.isFollowed;
					e(G({
						follow: l,
						multiredditPath: t,
						multiredditsModelsState: c
					})), (await ((t, e, n) => Object(m.a)(Object(f.a)(t, [b.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: e,
							api_type: "json"
						},
						type: "json"
					}))(o(), t, l)).ok || (e(G({
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
				return m
			})), n.d(e, "o", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "g", (function() {
				return _
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "m", (function() {
				return E
			})), n.d(e, "n", (function() {
				return O
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "k", (function() {
				return T
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
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				T = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(t, e, n) {
			t.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(t, e, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				a = n.n(d);

			function u() {
				return (u = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
					}
					return t
				}).apply(this, arguments)
			}
			const l = Object(i.a)(({
				className: t,
				...e
			}) => s.a.createElement(c.a, u({}, e, {
				className: Object(o.a)(a.a.horizontalVotes, t),
				scoreClassName: Object(o.a)(a.a.customScoreStyles, e.scoreClassName),
				downvoteClassName: Object(c.b)(e) ? a.a.customDownvoteStyles : void 0
			})));
			e.a = l
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return o
			})), n.d(e, "b", (function() {
				return d
			})), n.d(e, "a", (function() {
				return m
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
				m = t => ({
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
								experimentName: o.w,
								expEventOverride: e
							});
							return !!(Object(o.wd)(n) ? void 0 : n)
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
		"./src/reddit/helpers/pageActionLoginRedirect.ts": function(t, e, n) {
			"use strict";
			n("./node_modules/history/esm/history.js"), n("./src/reddit/actions/platform.ts");
			var r = n("./src/config.ts");
			e.a = (t, e) => {
				const n = e.platform.currentPage && e.platform.currentPage.url;
				let s = `${r.a.accountManagerOrigin}/login/`;
				const o = window.location.origin;
				n && (s += `?dest=${encodeURIComponent(`${o}${n}`)}`), window.location.href = s
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
				return m
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "c", (function() {
				return _
			})), n.d(e, "q", (function() {
				return E
			})), n.d(e, "k", (function() {
				return O
			})), n.d(e, "j", (function() {
				return S
			})), n.d(e, "h", (function() {
				return T
			})), n.d(e, "i", (function() {
				return I
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "m", (function() {
				return j
			})), n.d(e, "b", (function() {
				return R
			})), n.d(e, "l", (function() {
				return h
			})), n.d(e, "p", (function() {
				return D
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
				m = t => t.__typename === s.a.Subreddit;
			var f, b, _, p;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(f || (f = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(_ || (_ = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(p || (p = {}));
			const E = t => b[p[t]],
				O = t => p[b[t]],
				S = t => _[b[t]],
				T = t => b[_[t]],
				I = t => p[_[t]];
			var C;
			! function(t) {
				t.Hourly = "HOURLY", t.Daily = "DAILY", t.Weekly = "WEEKLY", t.Monthly = "MONTHLY"
			}(C || (C = {}));
			const j = t => {
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
				h = t => {
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
				D = t => "frequency" in t && !!t.frequency
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

			function m(t) {
				const e = (t, e) => {
					const n = parseInt(t.price || "0"),
						r = parseInt(e.price || "0");
					return n === r ? Object(i.b)(t, e) : n - r
				};
				return t.locked.sort(e), t.unlocked.sort(e), t
			}

			function f(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === s.a).map(m).sort((t, n) => {
					const r = e[t.id],
						s = e[n.id];
					return Object(i.b)(r, s)
				})
			}

			function b(t) {
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
						[d.a.Loyalty]: f(e[d.a.Loyalty], t.collections),
						[d.a.Achievement]: f(e[d.a.Achievement], t.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: f(e[d.a.Cosmetic][d.c.Gallery], t.collections),
							[d.c.MyBadges]: f(e[d.a.Cosmetic][d.c.MyBadges], t.collections)
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
								data: b(n),
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
			const m = {};
			var f = (t = m, e) => {
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
				b = Object(r.c)({
					error: a,
					fullyLoaded: l,
					pending: f
				}),
				_ = n("./node_modules/lodash/uniqBy.js"),
				p = n.n(_),
				E = n("./node_modules/lodash/values.js"),
				O = n.n(E),
				S = n("./src/reddit/actions/comment/constants.ts"),
				T = n("./src/reddit/actions/comment/websocket/constants.ts");
			const I = {};

			function C(t) {
				return p()(t, "id").sort((t, e) => t.created - e.created)
			}
			var j = (t = I, e) => {
					switch (e.type) {
						case c.f:
						case S.u:
						case c.b: {
							const {
								comments: n,
								key: r
							} = e.payload, s = t[r] ? t[r] : [], o = function(t, e) {
								return O()(t).map(t => {
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
						case T.b:
						case T.c:
						case T.d:
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
				h = n.n(R),
				D = n("./src/reddit/helpers/commentList/index.ts"),
				A = n("./src/reddit/models/Comment/index.ts");
			const y = {};

			function L(t) {
				const e = t;
				return h()(e, ({
					depth: t,
					next: e,
					prev: n
				}) => ({
					depth: t,
					next: e,
					prev: n
				}))
			}
			var N = (t = y, e) => {
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
							const t = Object(D.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: c,
									continueThreadDict: s
								}),
								e = Object(D.c)({
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
								...L(n),
								...L(s),
								...L(c),
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
								...L(n),
								...L(r),
								...L(o)
							}
						}
					}
					case T.b:
						const {
							comment: n, commentsPageKey: r, depth: s, headCommentId: o, originId: i, isChatSort: d
						} = e.payload, a = t[r], u = {};
						let l = null;
						if (d) return o && (u[o] = {
							...a[o],
							prev: Object(A.g)(n.id)
						}, l = Object(A.g)(o)), {
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
										prev: Object(A.h)(n)
									}, l = i), u[o] = {
										...a[o],
										next: Object(A.h)(n)
									}, e = Object(A.g)(o), {
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
								prev: Object(A.g)(n.id)
							}, c = Object(A.g)(s)), {
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
								prev: Object(A.g)(n.id)
							}, d = a), c[s] = {
								...i[s],
								next: Object(A.g)(n.id)
							}, {
								...t,
								[r]: {
									...t[r],
									...c,
									[n.id]: {
										depth: o,
										next: d,
										prev: Object(A.g)(s)
									}
								}
							}
						}
						default:
							return t
				}
			};
			const P = {};
			var g = (t = P, e) => {
				switch (e.type) {
					case T.b:
					case T.c:
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
				api: b,
				keyToChatCommentLinks: j,
				keyToCommentThreadLinkSets: N,
				keyToHeadCommentId: g,
				keyToPostId: k,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return p
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "u", (function() {
				return O
			})), n.d(e, "w", (function() {
				return S
			})), n.d(e, "x", (function() {
				return T
			})), n.d(e, "k", (function() {
				return C
			})), n.d(e, "g", (function() {
				return j
			})), n.d(e, "F", (function() {
				return R
			})), n.d(e, "n", (function() {
				return h
			})), n.d(e, "o", (function() {
				return D
			})), n.d(e, "j", (function() {
				return A
			})), n.d(e, "l", (function() {
				return y
			})), n.d(e, "h", (function() {
				return L
			})), n.d(e, "a", (function() {
				return N
			})), n.d(e, "b", (function() {
				return P
			})), n.d(e, "q", (function() {
				return g
			})), n.d(e, "m", (function() {
				return U
			})), n.d(e, "t", (function() {
				return k
			})), n.d(e, "y", (function() {
				return x
			})), n.d(e, "H", (function() {
				return v
			})), n.d(e, "s", (function() {
				return F
			})), n.d(e, "A", (function() {
				return w
			})), n.d(e, "B", (function() {
				return M
			})), n.d(e, "D", (function() {
				return G
			})), n.d(e, "r", (function() {
				return Y
			})), n.d(e, "e", (function() {
				return B
			})), n.d(e, "v", (function() {
				return q
			})), n.d(e, "I", (function() {
				return K
			})), n.d(e, "f", (function() {
				return H
			})), n.d(e, "i", (function() {
				return V
			})), n.d(e, "E", (function() {
				return W
			})), n.d(e, "z", (function() {
				return $
			})), n.d(e, "G", (function() {
				return z
			})), n.d(e, "p", (function() {
				return X
			})), n.d(e, "J", (function() {
				return J
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
				m = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/lib/initializeClient/installReducer.ts"),
				b = n("./src/reddit/reducers/features/comments/index.ts"),
				_ = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(f.a)({
				features: {
					comments: b.a
				},
				pages: {
					comments: _.a
				}
			});
			const p = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.error[e],
				E = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.pending[e],
				O = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.fullyLoaded[e],
				S = (t, e) => t.pages.comments.keyToHeadCommentId[e.commentsPageKey],
				T = (t, e) => {
					const n = S(t, e);
					if (n) return Object(m.a)(t, {
						commentId: n
					})
				},
				I = [],
				C = Object(c.a)((t, e) => {
					const n = T(t, e),
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
				j = (t, e) => S(t, e) ? t.pages.comments.keyToChatCommentLinks[e.commentsPageKey] : [],
				R = (t, {
					commentsPageKey: e
				}) => {
					const n = t.pages.comments.keyToPostId[e];
					return n ? t.posts.models[n] : null
				},
				h = (t, {
					commentId: e,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = t.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : e ? s[e] : null : null
				},
				D = (t, {
					commentsPageKey: e
				}) => t.pages.comments.keyToCommentThreadLinkSets[e],
				A = (t, e) => {
					const n = e.commentsPageKey ? h(t, e) : null;
					return n ? n.depth : null
				},
				y = (t, {
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
				L = (t, e) => {
					if (t.platform.currentPage && t.platform.currentPage.urlParams && t.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: e
						} = t.platform.currentPage.urlParams, n = Object(a.r)(e);
						return Array.from(new Set(Object.keys(t.features.comments.models).filter(e => t.features.comments.models[e].postId === n && t.features.comments.models[e].author !== o.A).map(e => t.features.comments.models[e].author)))
					}
					return []
				},
				N = (t, {
					commentsPageKey: e
				}) => t.features.comments.collapsed[e],
				P = t => t.moreComments.models,
				g = t => t.features.comments.models,
				U = (t, {
					commentId: e
				}) => {
					const n = Object(m.a)(t, {
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
				v = (t, {
					commentId: e,
					commentsPageKey: n
				}) => !!(e && t.features.comments.replyFormOpen[n] && t.features.comments.replyFormOpen[n][e]),
				F = (t, {
					commentsPageKey: e
				}) => {
					const n = e && t.features.comments.replyFormOpen[e] || {},
						r = Object.keys(n).find(t => n[t]),
						s = Object(m.a)(t, {
							commentId: r
						}),
						o = s && A(t, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: e
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				w = (t, {
					moreCommentsId: e
				}) => t.moreComments.models[e],
				M = (t, {
					moreCommentsId: e
				}) => !!t.moreComments.api.pending[e],
				G = (t, {
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
				q = (t, {
					draftKey: e
				}) => !!t.features.comments.submit.error[e],
				K = (t, {
					draftKey: e
				}) => {
					const n = t.features.comments.submit.error[e];
					return n && n.fields ? n.fields.map(t => t.msg) : []
				},
				H = (t, {
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
				z = (t, {
					commentId: e
				}) => !!e && t.features.comments.models[e].sendReplies,
				X = t => t.features.comments.visitHighlightFilter,
				J = (t, e) => {
					const n = Object(m.a)(t, e);
					if (n) return Object(l.Y)(t, n)
				},
				Q = (t, {
					postId: e
				}) => t.features.comments.newCommentsCount[e] ? t.features.comments.newCommentsCount[e] : 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddi~90fdacc3.b43797688678c194a6db.js.map