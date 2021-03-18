// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.8d24c08a2b96e80b1379.js
// Retrieved at 3/18/2021, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./src/graphql/operations/BadgeIndicators.json": function(t) {
			t.exports = JSON.parse('{"id":"712476d48c90"}')
		},
		"./src/graphql/operations/FetchContentControls.json": function(t) {
			t.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/graphql/operations/UpdateAutomatedReportingSettings.json": function(t) {
			t.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/graphql/operations/UpdatePostRequirements.json": function(t) {
			t.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(t, e, r) {
			"use strict";
			var s = r("./src/lib/addQueryParams/index.ts");
			e.a = t => Object(s.a)(t, {
				allow_quarantined: !0
			})
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return s
			})), r.d(e, "b", (function() {
				return n
			})), r.d(e, "d", (function() {
				return o
			})), r.d(e, "a", (function() {
				return i
			}));
			const s = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				o = "APP_BADGES__UPDATED",
				i = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return b
			})), r.d(e, "e", (function() {
				return _
			})), r.d(e, "d", (function() {
				return f
			})), r.d(e, "c", (function() {
				return p
			})), r.d(e, "b", (function() {
				return m
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				o = r("./src/reddit/actions/tabBadging.ts"),
				i = r("./src/graphql/operations/BadgeIndicators.json"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				c = t => Object(d.a)(t, {
					...i
				}),
				a = r("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(n.c),
				l = Object(s.a)(n.b),
				b = Object(s.a)(n.d),
				O = Object(s.a)(n.a),
				_ = ({
					key: t,
					count: e
				}) => ({
					[t]: {
						count: e,
						style: a.b.Numbered
					}
				}),
				f = (t, e, r) => ({
					[a.c.DirectMessages]: {
						count: t,
						style: a.b.Numbered
					},
					[a.c.ChatRooms]: {
						count: e,
						style: a.b.Numbered
					},
					[a.c.ChatRoomMentions]: {
						count: r,
						style: a.b.Numbered
					}
				}),
				p = () => async (t, e, {
					gqlContext: r
				}) => {
					t(u());
					const s = await async function(t) {
						const e = await c(t());
						if (e.ok && e.body) {
							return function(t) {
								return t && t.data && t.data.badgeIndicators
							}(e.body)
						}
					}(r);
					s ? (t(l(s)), t(Object(o.d)())) : t(O())
				};
			const m = () => async t => {
				const e = _({
					key: a.c.MessageTab,
					count: 0
				});
				t(b(e))
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			})), r.d(e, "c", (function() {
				return _
			})), r.d(e, "b", (function() {
				return m
			})), r.d(e, "d", (function() {
				return P
			}));
			var s, n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/chat/endpoints/sendbird/index.ts"),
				d = r("./src/reddit/actions/tabBadging.ts"),
				c = r("./src/reddit/selectors/chat.ts"),
				a = r("./src/reddit/selectors/user.ts");
			! function(t) {
				t.SYNC = "UNREAD_COUNT__SYNC", t.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", t.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", t.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(s || (s = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: O
			} = s, _ = Object(o.a)(u), f = Object(o.a)(l), p = Object(o.a)(b), m = Object(o.a)(O);
			let E;
			const T = 5 * n.db,
				P = () => async (t, e, {
					apiContext: r
				}) => {
					const s = e();
					if (!Object(a.J)(s) || !Object(c.d)(s)) return clearTimeout(E);
					E || t((() => async (t, e, {
						apiContext: r
					}) => {
						const s = e(),
							{
								session: n
							} = s.user;
						if (n && Object(a.J)(s) && Object(c.d)(s)) {
							t(p());
							const e = await Object(i.f)(r(), n);
							e && e.ok ? (t(m({
								basicChannelCount: e.body.unread_count || 0,
								subredditChannelCount: e.body.subreddit_unread_count || 0
							})), t(Object(d.d)())) : t(f({
								error: e.error
							}))
						}
					})()), E = setTimeout(() => {
						t(P())
					}, T)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			})), r.d(e, "b", (function() {
				return n
			})), r.d(e, "c", (function() {
				return o
			})), r.d(e, "d", (function() {
				return i
			}));
			const s = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return I
			})), r.d(e, "b", (function() {
				return R
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/camelCase.js"),
				o = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/graphql/operations/FetchContentControls.json"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/reddit/models/AutomatedReporting/index.ts");
			const O = t => {
				switch (t) {
					case "LENIENT":
						return b.a.Lenient;
					case "MODERATE":
						return b.a.Moderate;
					case "STRICT":
						return b.a.Strict;
					default:
						return b.a.Off
				}
			};
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var _ = r("./node_modules/lodash/isEmpty.js"),
				f = r.n(_),
				p = r("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				m = r("./src/graphql/operations/UpdatePostRequirements.json"),
				E = r("./src/reddit/endpoints/subreddit/about.ts"),
				T = r("./src/reddit/models/Toast/index.ts"),
				P = r("./src/reddit/selectors/contentControls.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/actions/contentControls/constants.ts");
			const g = Object(d.a)(j.b),
				A = Object(d.a)(j.c),
				D = Object(d.a)(j.a),
				I = t => async (e, r, {
					gqlContext: s
				}) => {
					const n = {
						subredditName: t.toLowerCase()
					};
					if (Object(P.a)(r(), n)) return;
					e(A(n));
					let o = Object(C.F)(r(), t);
					if (!o) {
						const r = await Object(E.a)(s(), t, !1);
						if (r.ok) {
							o = r.body.data.subreddit.id
						}
						if (!o) {
							const t = r.error || {
								type: i.E.NOT_FOUND_ERROR
							};
							return void e(D({
								...n,
								error: t
							}))
						}
					}
					let d = null;
					const a = await ((t, e) => Object(l.a)(t, {
						...u,
						variables: e
					}).then(t => {
						var e, r;
						if (t.ok) {
							const s = null === (r = null === (e = t.body) || void 0 === e ? void 0 : e.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...t,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: O(null == s ? void 0 : s.automatedReportingLevelAbuse),
												levelHate: O(null == s ? void 0 : s.automatedReportingLevelHate),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == s ? void 0 : s.postRequirements
										}
									}
								}
							}
						}
						return t
					}))(s(), {
						subredditId: o
					});
					if (a.ok) {
						const t = a.body;
						d = t.data.subreddit && t.data.subreddit
					}
					if (d) e(g({
						...n,
						...d
					}));
					else {
						const r = a.error || {
							type: i.E.UNKNOWN_ERROR
						};
						e(D({
							...n,
							error: r
						})), c.c.withScope(e => {
							e.setExtra("info", {
								subredditName: t,
								responseBody: a.body,
								responseOk: a.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, S = Object(d.a)(j.d), R = (t, e) => async (r, n, {
					gqlContext: o
				}) => {
					const i = t.toLowerCase(),
						d = Object(C.F)(n(), t);
					if (!d) return {
						success: !1
					};
					const c = await ((t, e, r) => {
						const s = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !f()(r.postRequirements)) {
							const n = {
								subredditId: e,
								...r.postRequirements
							};
							s[0] = Object(l.a)(t, {
								...m,
								variables: {
									input: n
								}
							})
						}
						if (r.automatedReporting && !f()(r.automatedReporting)) {
							const n = {
								subredditId: e
							};
							r.automatedReporting.levelAbuse && (n.automatedReportingLevelAbuse = r.automatedReporting.levelAbuse), r.automatedReporting.levelHate && (n.automatedReportingLevelHate = r.automatedReporting.levelHate), s[1] = Object(l.a)(t, {
								...p,
								variables: {
									input: n
								}
							})
						}
						return Promise.all(s).then(([t, e]) => {
							let r = !0,
								s = [];
							if (t) {
								const e = t.body,
									n = e.data.updatePostRequirements.fieldErrors;
								r = r && e.data.updatePostRequirements.ok, n && (s = s.concat(n))
							}
							if (e) {
								const t = e.body,
									n = t.data.updateSubredditSettings.fieldErrors;
								r = r && t.data.updateSubredditSettings.ok, n && (s = s.concat(n))
							}
							return {
								ok: r,
								fieldErrors: s.length ? s : null
							}
						})
					})(o(), d, e);
					if (c.ok) return r(S({
						subredditName: i,
						partialUpdates: e
					})), {
						success: !0
					}; {
						const t = N(c.fieldErrors);
						return r(Object(a.f)({
							duration: a.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: T.b.Error,
							text: t && t.length ? t[0].message : s.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: t || void 0
						}
					}
				}, N = t => t && t.map(t => ({
					...t,
					field: o()(t.field)
				}))
		},
		"./src/reddit/actions/frontpage/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return s
			})), r.d(e, "b", (function() {
				return n
			})), r.d(e, "a", (function() {
				return o
			})), r.d(e, "d", (function() {
				return i
			})), r.d(e, "g", (function() {
				return d
			})), r.d(e, "f", (function() {
				return c
			})), r.d(e, "e", (function() {
				return a
			}));
			const s = "PAGE__FRONTPAGE_PENDING",
				n = "PAGE__FRONTPAGE_LOADED",
				o = "PAGE__FRONTPAGE_FAILED",
				i = "PAGE__FRONTPAGE_RELOADED",
				d = "FRONTPAGE__MORE_POSTS_PENDING",
				c = "FRONTPAGE__MORE_POSTS_LOADED",
				a = "FRONTPAGE__MORE_POSTS_FAILED"
		},
		"./src/reddit/actions/inbox.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return n
			})), r.d(e, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				o = Object(s.a)(n)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return d
			})), r.d(e, "b", (function() {
				return c
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/profile/index.ts"),
				o = (r("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), r("./src/reddit/models/User/index.ts")),
				i = r("./src/reddit/selectors/user.ts");
			const d = "MOD_PERMS__REQUEST_LOADED",
				c = (Object(s.a)("MOD_PERMS__REQUEST_PENDING"), Object(s.a)(d), Object(s.a)("MOD_PERMS__REQUEST_FAILED"), () => async (t, e) => {
					const r = Object(i.i)(e());
					if (r) {
						const e = Object(o.e)(r);
						await t(Object(n.b)(e))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return s
			})), r.d(e, "b", (function() {
				return n
			})), r.d(e, "a", (function() {
				return o
			}));
			const s = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				o = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(t, e, r) {
			"use strict";
			r.r(e), r.d(e, "PAGE_PENDING", (function() {
				return k
			})), r.d(e, "PAGE_LOADED", (function() {
				return M
			})), r.d(e, "PAGE_FAILED", (function() {
				return F
			})), r.d(e, "pagePending", (function() {
				return w
			})), r.d(e, "pageLoaded", (function() {
				return G
			})), r.d(e, "pageFailed", (function() {
				return U
			})), r.d(e, "postCreationPageDataRequested", (function() {
				return q
			})), r.d(e, "postCreationPageRequested", (function() {
				return H
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/filterQueryParams/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makePostCreationPageKey/index.ts"),
				a = r("./src/lib/pageTitle.ts"),
				u = r("./src/reddit/actions/contentControls/index.ts"),
				l = r("./src/reddit/actions/economics/helpers/async.ts"),
				b = r("./src/reddit/actions/externalAccount.ts"),
				O = r("./src/reddit/actions/gold/powerups.ts"),
				_ = r("./src/reddit/actions/platform.ts"),
				f = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/postCreation/general.ts"),
				m = r("./src/reddit/actions/profile/index.ts"),
				E = r("./src/reddit/actions/subreddit.ts"),
				T = r("./src/reddit/actions/subredditDuplicates.ts"),
				P = r("./src/config.ts"),
				C = r("./src/lib/makeApiRequest/index.ts"),
				j = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				A = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				D = r("./src/reddit/helpers/trackers/postComposer.ts"),
				I = r("./src/reddit/models/User/index.ts"),
				S = r("./src/reddit/selectors/contentControls.ts"),
				R = r("./src/reddit/selectors/postCollection.ts"),
				N = r("./src/reddit/selectors/postCreations.ts"),
				h = r("./src/reddit/selectors/posts.ts"),
				y = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				L = r("./src/reddit/selectors/user.ts");
			const v = t => {
					const e = t.platform.currentPage;
					let r = "Reddit";
					if (e && e.urlParams.subredditName) {
						const {
							subredditName: s
						} = e.urlParams, n = Object(x.A)(t, {
							subredditName: s
						});
						n && (r = n.name)
					}
					return Object(a.i)(r)
				},
				k = "POST_CREATION__PAGE_PENDING",
				M = "POST_CREATION__PAGE_LOADED",
				F = "POST_CREATION__PAGE_FAILED",
				w = Object(d.a)(k),
				G = Object(d.a)(M),
				U = Object(d.a)(F),
				B = () => async (t, e) => {
					const r = e(),
						s = Object(N.a)(r);
					s !== Object(N.kb)(r) && t(Object(p.g)({
						submissionType: s
					}))
				}, q = t => async (e, r, s) => {
					const {
						collectionId: o,
						profileName: d,
						subredditName: a
					} = t, l = Object(c.a)(t), _ = r(), f = _.creations.api.page.pending[l], p = _.creations.api.page.fetched[l], T = _.creations.api.page.error[l];
					if (f) return;
					if (p && !T) return void e(B());
					const g = [];
					e(w({
						key: l
					}));
					let D = a;
					!a && d && (D = `u_${d}`), g.push(((t, e) => Object(C.a)(t, {
						method: n.cb.GET,
						endpoint: Object(j.a)(`${P.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: e.subredditName,
							collection_id: e.collectionId
						}
					}))(s.apiContext(), {
						subredditName: D,
						collectionId: o
					})), d && (g.push(e(m.d(d))), g.push(e(m.b(d))));
					const [R] = await Object(A.a)("postCreation", () => Promise.all(g));
					if (R.ok) {
						const t = R.body,
							{
								posts: s = {},
								subredditAboutInfo: n
							} = t;
						if (e(G({
								key: l,
								meta: _.meta,
								...t,
								posts: s
							})), !Object(L.J)(r())) return;
						if (n) {
							const t = Object.keys(n)[0];
							await e(Object(O.f)(t, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						e(B());
						const o = [];
						o.push(e(b.o()));
						const d = Object(L.i)(r());
						if (d && d.hasUserProfile && o.push(e(m.d(Object(I.e)(d)))), a && !Object(i.a)(a)) {
							o.push(e(E.o(a))), !!Object(S.b)(r(), {
								subredditName: a
							}) || o.push(e(Object(u.a)(a)))
						}
						await Promise.all(o)
					} else e(U({
						error: R.error,
						key: l
					}))
				}, H = t => async (e, r) => {
					const {
						subredditName: i,
						profileName: d
					} = t.params, c = t.queryParams, a = c.collection;
					if (await e(q({
							collectionId: a,
							profileName: d,
							subredditName: i
						})), !Object(L.J)(r())) return void Object(g.a)(e, r());
					let u;
					if (i ? (u = Object(x.A)(r(), {
							subredditName: i
						}), await e(Object(l.a)({
							subredditName: i
						}))) : d && (u = Object(y.j)(r(), {
							profileName: d
						})), c.source_id) await e(((t, e) => async (r, s) => {
						const {
							subredditName: n,
							profileName: o
						} = t, i = [];
						let d;
						n ? d = Object(x.F)(s(), n) : o && (d = Object(L.eb)(s(), {
							userName: o
						})), d && i.push(r(Object(T.b)(d, e))), i.push(r(Object(f.K)(e))), await Promise.all(i);
						const c = Object(h.f)(s(), {
							postId: e
						});
						r(Object(p.k)({
							postId: e,
							postTitle: c ? c.title : ""
						}))
					})(t.params, c.source_id));
					else if (a) {
						const n = Object(R.q)(r(), {
							collectionId: a
						});
						u && n && n.subredditId === u.id || e(Object(s.c)(Object(o.a)(t.url, ["collection"])))
					}((t, e) => {
						const r = t.platform.lastPage;
						e && r && r.meta && r.meta.name === n.Db.POST_CREATION && D.x(t)
					})(r(), i), e(_.l({
						title: v(r())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(t, e, r) {
			"use strict";
			r.r(e), r.d(e, "PAGE_PENDING", (function() {
				return O
			})), r.d(e, "PAGE_LOADED", (function() {
				return _
			})), r.d(e, "PAGE_FAILED", (function() {
				return f
			})), r.d(e, "pagePending", (function() {
				return p
			})), r.d(e, "pageLoaded", (function() {
				return m
			})), r.d(e, "pageFailed", (function() {
				return E
			})), r.d(e, "postDraftPageDataRequested", (function() {
				return T
			})), r.d(e, "postDraftRequested", (function() {
				return P
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
			const O = "POST_DRAFT__PAGE_PENDING",
				_ = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				p = Object(s.a)(O),
				m = Object(s.a)(_),
				E = Object(s.a)(f),
				T = t => async (e, r, s) => {
					const {
						draftId: O,
						profileName: _
					} = t, f = Object(n.a)(t), p = r(), T = p.creations.api.page.pending[f], P = p.creations.api.page.fetched[f], C = p.creations.api.page.error[f];
					if (T || P && !C || !O) return;
					e(o.d(_));
					const j = await Object(b.a)("postDraft", () => ((t, e, r) => Object(c.a)(t, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${e}`)),
						method: d.cb.GET
					}))(s.apiContext(), O, _));
					if (j.ok) {
						const t = j.body;
						t.drafts[O].kind = Object(l.b)(t.drafts[O].kind), e(m({
							...t,
							key: f
						}))
					} else e(E({
						error: j.error,
						key: f
					}))
				}, P = t => async (e, r, s) => {
					await e(T(t.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(t, e, r) {
			"use strict";
			r.r(e), r.d(e, "PROFILE_POSTS_PENDING", (function() {
				return R
			})), r.d(e, "PROFILE_POSTS_LOADED", (function() {
				return N
			})), r.d(e, "PROFILE_POSTS_FAILED", (function() {
				return h
			})), r.d(e, "profilePostsPending", (function() {
				return y
			})), r.d(e, "profilePostsLoaded", (function() {
				return x
			})), r.d(e, "profilePostsFailed", (function() {
				return L
			})), r.d(e, "profilePostsRequested", (function() {
				return v
			})), r.d(e, "MORE_POSTS_PENDING", (function() {
				return k
			})), r.d(e, "MORE_POSTS_LOADED", (function() {
				return M
			})), r.d(e, "MORE_POSTS_FAILED", (function() {
				return F
			})), r.d(e, "morePostsPending", (function() {
				return w
			})), r.d(e, "morePostsLoaded", (function() {
				return G
			})), r.d(e, "morePostsFailed", (function() {
				return U
			})), r.d(e, "morePostsRequested", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeListingKey/index.ts"),
				d = r("./src/reddit/actions/contentGate.ts"),
				c = r("./src/reddit/actions/externalAccount.ts"),
				a = r("./src/reddit/actions/moderatingSubreddits.ts"),
				u = r("./src/reddit/actions/pages/profileShared.ts"),
				l = r("./src/reddit/actions/pinnedPost.ts"),
				b = r("./src/reddit/actions/platform.ts"),
				O = r("./src/reddit/actions/profile/index.ts"),
				_ = r("./src/reddit/actions/subreddit.ts"),
				f = r("./src/reddit/constants/errors.ts"),
				p = r("./src/reddit/constants/parameters.ts"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				E = r("./src/config.ts"),
				T = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				P = r("./src/lib/constants/index.ts"),
				C = r("./src/lib/makeApiRequest/index.ts"),
				j = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const g = (t, e, r) => Object(C.a)(t, {
				data: r,
				endpoint: Object(T.a)(Object(j.a)(`${E.a.gatewayUrl}/desktopapi/v1/user/${e}/posts`)),
				method: P.cb.GET
			}).then(t => "pinned" in t.body ? t : "postIds" in t.body ? {
				...t,
				body: {
					...t.body,
					pinned: t.body.postIds.filter(e => t.body.posts[e] && t.body.posts[e].isPinned).reverse()
				}
			} : t);
			var A = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				D = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = r("./src/reddit/selectors/listings.ts"),
				S = r("./src/reddit/selectors/profile.ts");
			const R = "PAGE__PROFILE_POSTS_PENDING",
				N = "PAGE__PROFILE_POSTS_LOADED",
				h = "PAGE__PROFILE_POSTS_FAILED",
				y = Object(o.a)(R),
				x = Object(o.a)(N),
				L = Object(o.a)(h),
				v = t => async (e, r, s) => {
					const {
						queryParams: o,
						params: E
					} = t, {
						sort: T,
						t: P
					} = Object(u.b)(o), {
						profileName: C
					} = E, j = Object(i.a)(`u_${C}`, T, o), R = r(), N = R.listings.postOrder.ids[j], h = Object(I.c)(R, {
						listingKey: j
					}), v = Object(I.d)(R, {
						listingKey: j
					});
					if (await e(O.d(C)), v || N && !h) {
						if (N) {
							const t = Object(S.q)(r(), {
								profileName: C
							});
							e(b.l({
								title: t
							}))
						}
						return
					}
					const k = {
						...n()(t.queryParams, [...p.l, ...p.k, p.h]),
						layout: Object(m.O)(R, {}).toLowerCase(),
						sort: T,
						t: Object(A.a)(T, P)
					};
					e(y({
						key: j
					}));
					const M = await Object(D.a)("profilePosts", () => g(s.apiContext(), C, k));
					if (!M.ok) return e(L({
						account: M.body.data ? M.body.data.account : null,
						error: M.body.reason ? {
							type: M.body.reason
						} : M.error,
						key: j
					})), M.body.reason === f.a.DeletedProfile && e(Object(d.p)({
						profileName: C
					})), void e(b.m(M.status));
					const F = M.body;
					e(x({
						key: j,
						meta: r().meta,
						...F
					}));
					const w = Object(S.m)(r(), C),
						{
							pinned: G
						} = F;
					e(Object(l.h)({
						profileId: w,
						pinned: G
					})), await Promise.all([e(Object(u.c)(C)), e(Object(_.q)()), e(Object(a.b)()), e(c.o(C))])
				}, k = "PROFILE_POSTS__MORE_POSTS_PENDING", M = "PROFILE_POSTS__MORE_POSTS_LOADED", F = "PROFILE_POSTS__MORE_POSTS_FAILED", w = Object(o.a)(k), G = Object(o.a)(M), U = Object(o.a)(F), B = () => async (t, e, {
					apiContext: r
				}) => {
					const s = e(),
						{
							currentPage: o
						} = s.platform;
					if (!o || !o.routeMatch) return;
					const {
						queryParams: d,
						params: c
					} = o.routeMatch.match, {
						sort: a,
						t: l
					} = Object(u.b)(d), {
						profileName: b
					} = c, O = Object(i.a)(`u_${b}`, a, d), _ = Object(I.g)(s, {
						listingKey: O
					});
					if (!_) return;
					const f = Object(I.d)(s, {
							listingKey: O
						}),
						E = Object(I.e)(s, {
							listingKey: O,
							token: _.token
						});
					if (f || E) return;
					t(w({
						key: O,
						fetchedToken: _.token
					}));
					const T = {
							after: _.token,
							dist: _.dist,
							sort: a,
							t: l,
							...n()(d, p.l),
							layout: Object(m.O)(s, {}).toLowerCase()
						},
						P = await g(r(), b, T),
						C = s.listings.postOrder.ids[O],
						j = P.body.postIds || [],
						A = {
							...P.body,
							postIds: j.filter(t => !C || !C.includes(t))
						};
					P.ok ? (t(G({
						fetchedToken: _.token,
						key: O,
						meta: s.meta,
						...A
					})), await t(Object(u.c)(b))) : t(U({
						account: P.body.data ? P.body.data.account : null,
						error: P.error,
						fetchedToken: _.token,
						key: O
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return O
			})), r.d(e, "h", (function() {
				return _
			})), r.d(e, "d", (function() {
				return f
			})), r.d(e, "g", (function() {
				return p
			})), r.d(e, "c", (function() {
				return T
			})), r.d(e, "f", (function() {
				return P
			})), r.d(e, "b", (function() {
				return g
			})), r.d(e, "e", (function() {
				return A
			})), r.d(e, "i", (function() {
				return y
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/endpoints/post/index.tsx"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/profile.ts");
			const O = "PINNEDPOST__PINNED_POSTS_LOADED",
				_ = Object(o.a)(O),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				p = "PINNEDPOST__UNPIN_POST_SUCCESS",
				m = Object(o.a)(f),
				E = Object(o.a)(p),
				T = "PINNEDPOST__PIN_POST_PENDING",
				P = "PINNEDPOST__UNPIN_POST_PENDING",
				C = Object(o.a)(T),
				j = Object(o.a)(P),
				g = "PINNEDPOST__PIN_POST_FAILURE",
				A = "PINNEDPOST__UNPIN_POST_FAILURE",
				D = Object(o.a)(g),
				I = Object(o.a)(A),
				S = t => Object(d.f)({
					buttonAction: y(t, !0),
					buttonText: s.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: s.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				R = (t, e) => Object(d.f)({
					buttonAction: y(t, !0),
					buttonText: s.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: e ? s.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : s.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				N = () => Object(d.f)({
					kind: u.b.Error,
					text: s.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				h = () => Object(d.f)({
					kind: u.b.Error,
					text: s.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				y = (t, e = !1) => async (r, o, {
					apiContext: O
				}) => {
					const _ = o(),
						f = _.posts.models[t];
					if (!f) return;
					const p = !Object(l.q)(_, {
						postId: t
					});
					if (p && f.isRemoved) return r((() => Object(d.f)({
						kind: u.b.Error,
						text: s.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const T = f.author,
						P = Object(b.m)(_, T),
						[g, A, y, x, L] = p ? [C, m, D, S, N] : [j, E, I, R, h];
					if (p) {
						if (Object(l.L)(_, {
								profileName: T
							}).length >= n.V) return void r(Object(i.i)(c.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const v = Object(l.n)(_, t, T),
						k = !p && v;
					r(g({
						postId: t,
						profileId: P
					})), (await Object(a.t)(O(), t, p, !0)).ok ? (r(A({
						postId: t,
						profileId: P
					})), e || r(x(t, k))) : (r(y({
						postId: t,
						profileId: P
					})), r(L()))
				}
		},
		"./src/reddit/actions/postCreation/constants.ts": function(t, e, r) {
			"use strict";
			r.d(e, "G", (function() {
				return s
			})), r.d(e, "H", (function() {
				return n
			})), r.d(e, "l", (function() {
				return o
			})), r.d(e, "m", (function() {
				return i
			})), r.d(e, "x", (function() {
				return d
			})), r.d(e, "D", (function() {
				return c
			})), r.d(e, "E", (function() {
				return a
			})), r.d(e, "k", (function() {
				return u
			})), r.d(e, "C", (function() {
				return l
			})), r.d(e, "p", (function() {
				return b
			})), r.d(e, "M", (function() {
				return O
			})), r.d(e, "n", (function() {
				return _
			})), r.d(e, "z", (function() {
				return f
			})), r.d(e, "s", (function() {
				return p
			})), r.d(e, "c", (function() {
				return m
			})), r.d(e, "b", (function() {
				return E
			})), r.d(e, "d", (function() {
				return T
			})), r.d(e, "e", (function() {
				return P
			})), r.d(e, "f", (function() {
				return C
			})), r.d(e, "g", (function() {
				return j
			})), r.d(e, "h", (function() {
				return g
			})), r.d(e, "i", (function() {
				return A
			})), r.d(e, "j", (function() {
				return D
			})), r.d(e, "q", (function() {
				return I
			})), r.d(e, "O", (function() {
				return S
			})), r.d(e, "N", (function() {
				return R
			})), r.d(e, "P", (function() {
				return N
			})), r.d(e, "Q", (function() {
				return h
			})), r.d(e, "R", (function() {
				return y
			})), r.d(e, "S", (function() {
				return x
			})), r.d(e, "T", (function() {
				return L
			})), r.d(e, "U", (function() {
				return v
			})), r.d(e, "V", (function() {
				return k
			})), r.d(e, "r", (function() {
				return M
			})), r.d(e, "A", (function() {
				return F
			})), r.d(e, "u", (function() {
				return w
			})), r.d(e, "v", (function() {
				return G
			})), r.d(e, "t", (function() {
				return U
			})), r.d(e, "w", (function() {
				return B
			})), r.d(e, "L", (function() {
				return q
			})), r.d(e, "o", (function() {
				return H
			})), r.d(e, "y", (function() {
				return V
			})), r.d(e, "X", (function() {
				return $
			})), r.d(e, "F", (function() {
				return W
			})), r.d(e, "a", (function() {
				return Q
			})), r.d(e, "B", (function() {
				return K
			})), r.d(e, "J", (function() {
				return J
			})), r.d(e, "K", (function() {
				return z
			})), r.d(e, "I", (function() {
				return Y
			})), r.d(e, "W", (function() {
				return X
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
				O = "POST_CREATION__TOGGLE_EDITOR_MODE",
				_ = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				f = "POST_TITLE_FETCHED",
				p = "INITIALIZE_EDITOR_MODE",
				m = "POST_CREATION__CHANGE_FLAIR",
				E = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				T = "POST_CREATION__CHANGE_LINK_BODY",
				P = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				C = "POST_CREATION__CHANGE_MEDIA_BODY",
				j = "POST_CREATION__CHANGE_RECAPTCHA",
				g = "POST_CREATION__CHANGE_RTE_STATE",
				A = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				D = "POST_CREATION__CHANGE_TITLE",
				I = "POST_CREATION__GOV_TYPE_CHANGED",
				S = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				R = "POST_CREATION__TOGGLE_IS_CHANGED",
				N = "POST_CREATION__TOGGLE_IS_GOV",
				h = "POST_CREATION__TOGGLE_IS_NSFW",
				y = "POST_CREATION__TOGGLE_IS_OC",
				x = "POST_CREATION__TOGGLE_IS_POLL",
				L = "POST_CREATION__TOGGLE_IS_SPOILER",
				v = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				k = "POST_CREATION__TOGGLE_SEND_REPLIES",
				M = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				F = "POST_CREATION__RESET_FORM",
				w = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				G = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				U = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				B = "POST_CREATION__PENDING",
				q = "POST_CREATION__SUCCEEDED",
				H = "POST_CREATION__FAILED",
				V = "POST_CREATION__POLL_FAILED",
				$ = "POST_CREATION__VALIDATION_FAILED",
				W = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				Q = "POST_CREATION__CAPTCHA_REQUIRED",
				K = "POST_CREATION__SET_SUBMIT_MODE",
				J = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				z = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS"
		},
		"./src/reddit/actions/postCreation/general.ts": function(t, e, r) {
			"use strict";
			r.d(e, "i", (function() {
				return f
			})), r.d(e, "m", (function() {
				return m
			})), r.d(e, "a", (function() {
				return E
			})), r.d(e, "b", (function() {
				return T
			})), r.d(e, "c", (function() {
				return C
			})), r.d(e, "d", (function() {
				return j
			})), r.d(e, "f", (function() {
				return g
			})), r.d(e, "e", (function() {
				return A
			})), r.d(e, "g", (function() {
				return D
			})), r.d(e, "h", (function() {
				return I
			})), r.d(e, "j", (function() {
				return S
			})), r.d(e, "s", (function() {
				return R
			})), r.d(e, "r", (function() {
				return N
			})), r.d(e, "t", (function() {
				return h
			})), r.d(e, "u", (function() {
				return y
			})), r.d(e, "v", (function() {
				return x
			})), r.d(e, "w", (function() {
				return L
			})), r.d(e, "y", (function() {
				return v
			})), r.d(e, "z", (function() {
				return k
			})), r.d(e, "A", (function() {
				return M
			})), r.d(e, "k", (function() {
				return F
			})), r.d(e, "p", (function() {
				return w
			})), r.d(e, "q", (function() {
				return G
			})), r.d(e, "o", (function() {
				return U
			})), r.d(e, "x", (function() {
				return B
			})), r.d(e, "n", (function() {
				return q
			})), r.d(e, "l", (function() {
				return H
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/isUrl/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/endpoints/post/index.tsx"),
				a = r("./src/reddit/models/PostCreationForm/index.ts"),
				u = r("./src/reddit/routes/postCreation/constants.ts"),
				l = r("./src/reddit/selectors/activeModalId.ts"),
				b = r("./src/reddit/selectors/postCollection.ts"),
				O = r("./src/reddit/selectors/postCreations.ts"),
				_ = r("./src/reddit/actions/postCreation/constants.ts");
			const f = Object(o.a)(_.n),
				p = Object(o.a)(_.z),
				m = (Object(o.a)(_.s), t => {
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
				E = Object(o.a)(_.b),
				T = Object(o.a)(_.c),
				P = Object(o.a)(_.d),
				C = Object(o.a)(_.e),
				j = Object(o.a)(_.f),
				g = Object(o.a)(_.g),
				A = Object(o.a)(_.h),
				D = Object(o.a)(_.i),
				I = Object(o.a)(_.j),
				S = Object(o.a)(_.q),
				R = Object(o.a)(_.O),
				N = Object(o.a)(_.N),
				h = (Object(o.a)(_.P), Object(o.a)(_.Q)),
				y = Object(o.a)(_.R),
				x = Object(o.a)(_.S),
				L = Object(o.a)(_.T),
				v = Object(o.a)(_.U),
				k = Object(o.a)(_.V),
				M = Object(o.a)(_.W),
				F = Object(o.a)(_.r),
				w = t => async (e, r, {
					apiContext: s
				}) => {
					e(P(t)), Object(n.a)(t) && e((t => async (e, r, {
						apiContext: s
					}) => {
						const n = await Object(c.f)(s(), t);
						n.ok && n.body && n.body.json && n.body.json.data && e(p(n.body.json.data))
					})(t))
				}, G = Object(o.a)(_.A), U = (t, e) => async (r, n) => {
					r(G()), r(t ? Object(s.b)(u.b) : Object(s.b)(Object(O.ab)(n(), {
						pageLayer: e
					})))
				}, B = t => async e => {
					e(i.i(t))
				}, q = t => async (e, r) => {
					const s = r(),
						n = Object(d.D)(t),
						o = Object(O.F)(s);
					if (n && o) {
						Object(l.a)(s) !== a.c && e(B(a.c))
					} else e(U(!1, t))
				}, H = t => async (e, r) => {
					const s = r();
					Object(b.m)(s, {
						subredditId: t
					}) ? e(i.i(a.a)) : e(i.i(a.b))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(t, e, r) {
			"use strict";
			r.d(e, "e", (function() {
				return j
			})), r.d(e, "b", (function() {
				return g
			})), r.d(e, "a", (function() {
				return A
			})), r.d(e, "d", (function() {
				return D
			})), r.d(e, "c", (function() {
				return I
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/addQueryParams/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/filterQueryParams/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/pages/postCreation.ts"),
				u = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = r("./src/reddit/helpers/name/index.ts"),
				b = r("./src/reddit/models/PostCreationForm/index.ts"),
				O = r("./src/reddit/routes/postCreation/index.ts"),
				_ = r("./src/reddit/routes/postCreation/constants.ts"),
				f = r("./src/reddit/selectors/postCreations.ts"),
				p = r("./src/reddit/selectors/platform.ts"),
				m = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/actions/postCreation/constants.ts"),
				T = r("./src/reddit/actions/postCreation/general.ts");
			const P = Object(d.a)(E.J),
				C = Object(d.a)(E.K),
				j = Object(d.a)(E.I),
				g = (t, e) => async (r, s, {
					apiContext: n
				}) => {
					let i = s();
					const {
						name: d,
						isProfile: O
					} = t, _ = Object(p.e)(i), E = _ && !O && Object(l.a)(_.name, d), T = i.creations.api.subreddit.change.pending;
					if (E || T) return;
					const C = Object(u.u)(e);
					if (!d) return void r(A(t, C));
					r(P(t));
					const j = O ? {
						profileName: d
					} : {
						subredditName: d
					};
					if (await r(Object(a.postCreationPageDataRequested)(j)), O || !Object(f.A)(i)) return r(A(t, C));
					const g = t.allowedPostTypes || Object(m.z)(s(), {
						subredditName: d
					});
					if (!g) return void r(A(t, C));
					let D;
					i = s();
					const I = Object(f.kb)(i),
						S = Object(f.A)(i);
					if (I === o.Lb.MEDIA && S) {
						const t = Object(f.U)(i),
							e = Object(b.v)(t),
							r = Object(f.L)(i) && t.items.length > 1,
							s = !e && !r;
						if (r && !g.galleries) D = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (s && !g.images) D = b.p.ImageWillBeRemoved;
						else if (e && !g.videos) {
							const e = i.uploads[t.items[0].uploadKey],
								r = e && e.metadata.videoDuration || 0;
							g.images ? r > o.Z && (D = b.p.VideoWillBeRemovedTooLongForGif) : D = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					r(D ? Object(c.i)(D) : A({
						...t,
						allowedPostTypes: g
					}, C))
				}, A = (t, e, r = !0) => async (o, i) => {
					const {
						name: d,
						isProfile: c
					} = t, a = i().platform.currentPage, u = a.queryParams, l = c ? O.b : O.c;
					let b = "";
					b = d ? l(d) : _.b, b = Object(n.a)(b, {
						...u,
						draft: e || u.draft
					}), (e || a.url.toLowerCase() !== b.toLowerCase()) && (o(C(t)), r && o(Object(T.r)(!0)), o(Object(T.i)()), o(Object(s.c)(b)))
				}, D = t => async (e, r) => {
					const o = r().platform.currentPage,
						i = o.queryParams,
						d = Object(n.a)(o.url, {
							...i,
							collection: t
						});
					e(Object(s.c)(d))
				}, I = () => async (t, e) => {
					const r = e().platform.currentPage,
						n = Object(i.a)(r.url, ["collection"]);
					t(Object(s.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(t, e, r) {
			"use strict";
			r.d(e, "f", (function() {
				return h
			})), r.d(e, "e", (function() {
				return y
			})), r.d(e, "d", (function() {
				return x
			})), r.d(e, "p", (function() {
				return M
			})), r.d(e, "j", (function() {
				return F
			})), r.d(e, "l", (function() {
				return w
			})), r.d(e, "i", (function() {
				return G
			})), r.d(e, "m", (function() {
				return U
			})), r.d(e, "k", (function() {
				return B
			})), r.d(e, "h", (function() {
				return q
			})), r.d(e, "n", (function() {
				return H
			})), r.d(e, "s", (function() {
				return z
			})), r.d(e, "r", (function() {
				return Y
			})), r.d(e, "g", (function() {
				return X
			})), r.d(e, "q", (function() {
				return tt
			})), r.d(e, "c", (function() {
				return et
			})), r.d(e, "a", (function() {
				return rt
			})), r.d(e, "b", (function() {
				return st
			})), r.d(e, "o", (function() {
				return dt
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/postCreation/general.ts"),
				d = r("./src/reddit/actions/postCreation/subredditChange.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/models/StructuredStyles/index.ts");
			var O = r("./src/reddit/constants/headers.ts"),
				_ = r("./src/reddit/helpers/name/index.ts"),
				f = r("./src/reddit/models/PostDraft/index.ts"),
				p = r("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				m = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				E = r("./src/reddit/models/Subreddit/index.ts");
			const T = t => {
				let e = t.drafts.reduce((t, e) => {
					const r = (t => {
						let e;
						return e = "link" === t.kind ? {
							kind: f.b.Link,
							body: t.body || void 0
						} : "markdown" === t.kind ? {
							kind: f.b.Markdown,
							body: t.body || void 0
						} : {
							kind: f.b.RichText,
							body: t.body || void 0
						}, {
							subredditId: t.subreddit || void 0,
							contentCategory: t.content_category || void 0,
							created: t.created,
							flair: t.flair,
							id: t.id,
							isChatPost: !!t.discussion_type,
							isNSFW: !!t.nsfw,
							isOriginalContent: !!t.original_content,
							isSpoiler: !!t.spoiler,
							modified: t.modified || void 0,
							sendReplies: !!t.send_replies,
							isPublicLink: !!t.is_public_link,
							title: t.title || "",
							...e
						}
					})(e);
					return t.postDraftIds.push(r.id), t.postDrafts[r.id] = r, t
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return e = t.subreddits.reduce((t, e) => {
					if (e.subreddit_type === E.e.User) {
						const r = Object(p.a)(e, Object(_.g)(e.display_name_prefixed));
						t.profiles[r.id] = r
					} else {
						const r = Object(m.a)(e);
						t.subreddits[r.id] = r
					}
					return t
				}, e)
			};
			var P = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				C = r("./src/reddit/models/PostCreationForm/index.ts"),
				j = r("./src/reddit/helpers/trackers/postComposer.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				A = r("./src/reddit/models/User/index.ts"),
				D = r("./src/reddit/selectors/postCreations.ts"),
				I = r("./src/reddit/selectors/postDraft.ts"),
				S = r("./src/reddit/selectors/profile.ts"),
				R = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts");
			const h = "POST_DRAFT__LIST_PENDING",
				y = "POST_DRAFT__LIST_LOADED",
				x = "POST_DRAFT__LIST_FAILED",
				L = Object(o.a)(h),
				v = Object(o.a)(y),
				k = Object(o.a)(x),
				M = () => async (t, e, {
					apiContext: r
				}) => {
					const n = e();
					if (!Object(N.i)(n) || Object(I.b)(n)) return;
					t(L());
					const o = await (t => Object(u.a)(Object(l.a)(t, [O.a]), {
						endpoint: `${t.apiUrl}/api/v1/drafts.json`,
						method: s.cb.GET
					}))(r());
					o.ok ? t(v(T(o.body))) : t(k(o.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", w = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", G = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", H = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", V = Object(o.a)(F), $ = Object(o.a)(w), W = Object(o.a)(G), Q = Object(o.a)(U), K = Object(o.a)(B), J = Object(o.a)(q), z = Object(o.a)(H), Y = t => async (e, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(I.g)(i),
						b = Object(D.Z)(i);
					if (a || b) return;
					const _ = Object(I.h)(i, t);
					if (!_) return;
					e(V(_)), j.e(i, _);
					const f = await ((t, e, r) => Object(u.a)(Object(l.a)(t, [O.a]), {
						endpoint: `${t.apiUrl}/api/v1/draft`,
						method: r ? s.cb.PUT : s.cb.POST,
						data: Object(P.a)(e)
					}).then(t => t.body.fields && Object(C.u)(t.body.fields[0]) ? {
						...t,
						body: {},
						error: {
							type: s.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: t.body.fields[0],
								msg: t.body.explanation
							}]
						}
					} : t))(o(), _, t);
					if (f.ok) {
						const {
							id: r,
							draftsCount: s
						} = Object(P.c)(f.body);
						e($({
							draftId: r,
							draftsCount: s
						})), t || e(Object(d.a)(_.destSubreddit, r, !1))
					} else {
						const t = f.error;
						t.type === s.E.BAD_CAPTCHA_ERROR ? e(J()) : t.type === s.E.VALIDATION_ERROR ? e(Q(t)) : t.type === s.E.SUBMIT_VALIDATION_ERROR ? e(K(t)) : e(W(t)), e(Object(c.f)({
							duration: c.a,
							kind: g.b.Error,
							text: Object(n.a)(t)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(o.a)(X), tt = t => async (e, r, {
					apiContext: s
				}) => {
					e(Z(t));
					let n = C.e;
					const o = r();
					if (t.subredditId) {
						const e = Object(R.T)(o, {
								subredditId: t.subredditId
							}),
							r = Object(S.p)(o, {
								profileId: t.subredditId
							}),
							s = Object(N.i)(o);
						e ? n = {
							isProfile: !1,
							name: e.name
						} : r && s && (n = {
							isProfile: !0,
							name: Object(A.e)(s)
						})
					}
					await e(Object(d.a)(n, t.id, !1));
					const i = Object(I.h)(r(), t.id);
					i && j.h(r(), i)
				}, et = "POST_DELETE_DRAFT_SUCCEEDED", rt = "POST_DELETE_DRAFT_FAILED", st = "POST_DELETE_DRAFT_PENDING", nt = Object(o.a)(et), ot = Object(o.a)(rt), it = Object(o.a)(st), dt = (t, e) => async (r, o, {
					apiContext: d
				}) => {
					const O = o();
					if (Object(I.a)(O, t)) return;
					const _ = Object(I.d)(O, {
						draftId: t
					});
					_ && j.f(O, _), r(it({
						draftId: t
					}));
					const f = await (async (t, e) => Object(u.a)(Object(l.a)(t, [b.g]), {
						endpoint: `${t.apiUrl}/api/v1/draft?draft_id=${e}`,
						method: s.cb.DELETE
					}))(d(), t);
					if (f.ok) {
						const {
							draftsCount: s
						} = Object(P.c)(f.body);
						r(nt({
							draftId: t,
							draftsCount: s
						}));
						const n = Object(a.u)(e);
						t === n && r(Object(i.o)(!0, e))
					} else {
						const e = f.error;
						r(ot({
							draftId: t,
							apiError: e
						})), r(Object(c.f)({
							duration: c.a,
							kind: g.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return a
			})), r.d(e, "a", (function() {
				return u
			})), r.d(e, "c", (function() {
				return _
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/tabBadging.ts"),
				i = r("./src/reddit/endpoints/me/index.ts"),
				d = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = r("./src/reddit/helpers/trackers/screenview.ts");
			const a = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(a),
				O = Object(n.a)(u),
				_ = (t, e) => async (t, r, {
					apiContext: s
				}) => {
					const n = r();
					t(l());
					const c = await Object(i.a)(s());
					c.ok && c.body ? !e || c.body.account ? (t(b(c.body)), t(Object(o.d)()), f(n)) : Object(d.a)(t, n) : t(O(c.error))
				}, f = t => {
					t.platform.currentPage && t.platform.currentPage.routeMatch && t.platform.currentPage.routeMatch.route && t.platform.currentPage.routeMatch.route.meta && t.platform.currentPage.routeMatch.route.meta.name && t.platform.currentPage.routeMatch.route.meta.name === s.Db.INBOX_PAGES && Object(c.g)(t)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return b
			})), r.d(e, "b", (function() {
				return _
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
				O = (Object(s.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(s.a)(b)),
				_ = (t, e) => async (r, s, {
					apiContext: b
				}) => {
					const _ = Object(l.T)(s(), {
						subredditId: t
					}) || Object(u.p)(s(), {
						profileId: t
					});
					if (!_) return;
					const f = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.g)(_) ? n.Wb + _.name : _.name
						},
						p = await ((t, e, r) => Object(i.a)(t, {
							data: r,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.s)(e)}`,
							method: n.cb.GET
						}))(b(), e, f);
					if (p.ok) {
						const s = p.body;
						r(O({
							distinguishKey: Object(c.a)(e, f),
							postIds: s.postIds,
							posts: s.posts,
							profiles: s.profiles,
							subreddits: s.subreddits,
							subredditId: t
						}))
					}
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return m
			})), r.d(e, "c", (function() {
				return T
			})), r.d(e, "b", (function() {
				return P
			})), r.d(e, "e", (function() {
				return j
			})), r.d(e, "d", (function() {
				return g
			})), r.d(e, "f", (function() {
				return A
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/fastdom/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/chat/unreadCount.ts"),
				d = r("./src/reddit/actions/inbox.ts"),
				c = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = r("./src/reddit/helpers/tabBadging/index.ts"),
				u = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/selectors/appBadges.ts"),
				b = r("./src/reddit/selectors/chat.ts"),
				O = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				_ = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				E = Object(o.a)(m),
				T = (t, e) => {
					t <= 0 ? n.a.write(() => {
						Object(a.b)(!1), window.document.title = e
					}) : n.a.write(() => {
						Object(a.b)(), window.document.title = `(${t}) ${e}`
					})
				},
				P = Object(s.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				C = t => {
					const e = Object(O.a)(t);
					return {
						inboxCount: e ? Object(l.h)(t) : Object(f.E)(t) || 0,
						basicChannelCount: e ? Object(l.e)(t) : Object(b.a)(t) || 0
					}
				},
				j = () => async (t, e) => {
					const r = e(),
						s = Object(c.e)(r, {}),
						n = Object(O.a)(r),
						o = Object(f.I)(r) || Object(f.J)(r),
						i = Object(_.d)(r);
					let d = 0;
					o && s && (d = n ? i ? Object(l.i)(r) : Object(l.j)(r) : (t => {
						const {
							inboxCount: e,
							basicChannelCount: r
						} = C(t);
						return e + r
					})(r), T(d, s), t(E({
						hasUnreadMessages: !!d
					})))
				}, g = () => async (t, e) => {
					{
						t(j());
						const r = C(e());
						Object(a.c)(r)
					}
				}, A = t => async (e, r) => {
					const s = r();
					if (Object(O.a)(s)) {
						const r = Object(l.e)(s),
							n = Object(l.h)(s),
							{
								basicChannelCount: o,
								inboxCount: i
							} = t;
						if (r !== o) {
							const t = Object(p.e)({
								count: o,
								key: u.c.ChatTab
							});
							e(Object(p.a)(t))
						}
						if (i && i !== n) {
							const t = Object(p.e)({
								count: i,
								key: u.c.MessageTab
							});
							e(Object(p.a)(t))
						}(r !== o || i && i !== n) && e(j())
					} else {
						const r = Object(b.a)(s),
							n = Object(b.b)(s),
							o = Object(f.E)(s),
							{
								basicChannelCount: c,
								inboxCount: a
							} = t;
						r !== c && e(Object(i.b)({
							...n,
							basicChannelCount: c
						})), a && a !== o && e(Object(d.b)({
							inboxCount: a
						})), (r !== c || a && a !== o) && e(j())
					}
				}
		},
		"./src/reddit/constants/errors.ts": function(t, e, r) {
			"use strict";
			var s, n;
			r.d(e, "a", (function() {
					return s
				})),
				function(t) {
					t.BannedProfile = "BANNED", t.DeletedProfile = "DELETED", t.NotFoundProfile = "NOT_FOUND", t.ForbiddenProfile = "FORBIDDEN"
				}(s || (s = {})),
				function(t) {
					t.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/endpoints/me/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return i
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts");
			const i = t => Object(o.a)(t, {
				endpoint: `${s.a.gatewayUrl}/desktopapi/v1/me`,
				method: n.cb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(t, e, r) {
			"use strict";
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts");
			e.a = async t => Object(n.a)(Object(o.a)(t, [i.a]), {
				endpoint: `${t.apiUrl}/subreddit_permissions`,
				method: s.cb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return o
			})), r.d(e, "b", (function() {
				return c
			})), r.d(e, "a", (function() {
				return b
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				n = r("./src/reddit/models/PostDraft/index.ts");
			const o = t => ({
					id: t.json.data.id,
					draftsCount: t.json.data.drafts_count
				}),
				i = t => t.destSubreddit.id ? {
					subreddit: t.destSubreddit.id,
					target: t.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				d = t => {
					switch (t.kind) {
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
				c = t => {
					switch (t) {
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
				a = t => t.title.substring(0, 300),
				u = t => {
					switch (t.kind) {
						case n.b.Link:
						case n.b.Markdown:
							return t.body;
						case n.b.RichText:
							return JSON.stringify({
								document: t.body
							})
					}
				},
				l = t => t ? {
					flair_id: t.templateId || null,
					flair_text: Object(s.g)(t) || null,
					flair_text_color: t.textColor || null,
					flair_background_color: t.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				b = t => ({
					id: t.draftId || void 0,
					...i(t),
					kind: d(t),
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
		"./src/reddit/helpers/tabBadging/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return c
			})), r.d(e, "b", (function() {
				return u
			})), r.d(e, "c", (function() {
				return l
			}));
			var s = r("./src/config.ts");
			const n = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				o = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				i = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				d = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				c = "badgeCountSync",
				a = t => window.document.querySelector(`link[href="${t}"]`),
				u = (t = !0) => {
					const e = a(t ? i : n),
						r = a(t ? d : o);
					e && r && (e.href = t ? n : i, r.href = t ? o : d)
				},
				l = t => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: t
					})
				}
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(t, e, r) {
			"use strict";
			var s;
			r.d(e, "a", (function() {
					return s
				})), r.d(e, "b", (function() {
					return n
				})),
				function(t) {
					t.Off = "OFF", t.Lenient = "LENIENT", t.Moderate = "MODERATE", t.Strict = "STRICT"
				}(s || (s = {}));
			const n = t => {
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
		"./src/reddit/models/Badge/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return s
			})), r.d(e, "e", (function() {
				return d
			})), r.d(e, "f", (function() {
				return c
			})), r.d(e, "d", (function() {
				return l
			})), r.d(e, "c", (function() {
				return n
			})), r.d(e, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n, o, i = r("./src/config.ts");

			function d(t) {
				return "userId" in t
			}

			function c(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function a(t, e, r) {
				const s = r.media[0],
					n = Object.keys(s);
				if (s["0x0"]) return s["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(r => {
						const n = s[r],
							[i, d] = r.split("x").map(t => parseInt(t));
						(i < o.width && i >= t || d < o.height && d >= e) && (o = {
							height: d,
							width: i,
							url: n
						})
					}), !o.url && n.length) {
					const t = Object.keys(s)[0],
						e = s[t],
						[r, n] = t.split("x").map(t => parseInt(t));
					o = {
						height: n,
						width: r,
						url: e
					}
				}
				return o.url
			}

			function u(t) {
				return t.startsWith("https") ? t : `${i.a.assetPath}/${t}`
			}

			function l(t, e, r) {
				const s = a(t, e, r),
					n = a(2 * t, 2 * e, r);
				return {
					url: u(s),
					url2x: u(n)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(s || (s = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.DirectMessages = "directMessages", t.MessageTab = "messageTab", t.ChatRooms = "chatRooms", t.ChatRoomMentions = "chatRoomMentions"
			}(n || (n = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Duplicates/index.ts": function(t, e, r) {
			"use strict";

			function s(t, e) {
				return `${t}-sort[${e.sort}]-crossposts_only[${e.crossposts_only}]`
			}
			r.d(e, "a", (function() {
				return s
			}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return s
			})), r.d(e, "c", (function() {
				return n
			})), r.d(e, "a", (function() {
				return H
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n, o = r("./node_modules/lodash/isEqual.js"),
				i = r.n(o),
				d = r("./node_modules/lodash/merge.js"),
				c = r.n(d),
				a = r("./node_modules/lodash/pick.js"),
				u = r.n(a),
				l = r("./src/lib/constants/index.ts"),
				b = r("./src/reddit/actions/comment/constants.ts"),
				O = r("./src/reddit/actions/contentGate.ts"),
				_ = r("./src/reddit/actions/frontpage/constants.ts"),
				f = r("./src/reddit/actions/header.ts"),
				p = r("./src/reddit/actions/modQueue/constants.ts"),
				m = r("./src/reddit/actions/pages/constants.ts"),
				E = r("./src/reddit/actions/pages/modListing/constants.ts"),
				T = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				P = r("./src/reddit/actions/pages/postCreation.ts"),
				C = r("./src/reddit/actions/pages/postDraft.ts"),
				j = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				g = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				A = r("./src/reddit/actions/pages/profilePosts.ts"),
				D = r("./src/reddit/actions/pages/search.ts"),
				I = r("./src/reddit/actions/pages/subreddit.ts"),
				S = r("./src/reddit/actions/pages/topic.ts"),
				R = r("./src/reddit/actions/postCreation/constants.ts"),
				N = r("./src/reddit/actions/postDraft.ts"),
				h = r("./src/reddit/actions/preferences.ts"),
				y = r("./src/reddit/actions/redditEmbed.ts"),
				x = r("./src/reddit/actions/search.ts"),
				L = r("./src/reddit/actions/structuredStyles/constants.ts"),
				v = r("./src/reddit/actions/subreddit.ts"),
				k = r("./src/reddit/actions/users.ts"),
				M = r("./src/reddit/constants/postLayout.ts"),
				F = r("./src/reddit/constants/preferences.ts"),
				w = r("./src/reddit/constants/theme.ts"),
				G = r("./src/reddit/models/PostCreationForm/index.ts"),
				U = r("./src/reddit/models/PostDraft/index.ts"),
				B = r("./src/reddit/models/User/index.ts");
			! function(t) {
				t.Whitelisted = "whitelisted", t.Everyone = "everyone"
			}(s || (s = {})),
			function(t) {
				t.Whitelisted = "nobody", t.Everyone = "everyone"
			}(n || (n = {}));
			const q = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "lang", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...F.a, "loginOtpEnabled"],
				H = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: B.a,
					commentMode: G.h.RICH_TEXT,
					layout: M.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.r.CONFIDENCE,
					editorMode: G.h.RICH_TEXT,
					geopopular: void 0,
					globalTheme: w.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					lang: "en",
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !1,
					showRpanDu: !0,
					showTwitter: !1,
					sort: l.R.Hot,
					stylesEnabled: !0,
					subreddit: {},
					subscriptionsPinned: void 0,
					surveyLastSeenTime: void 0,
					thirdPartyDataPersonalizedAds: !0,
					thirdPartyPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedContent: !0,
					showLocationBasedRecommendations: !0,
					topContentDismissalTime: 0,
					topContentTimesDismissed: 0,
					rememberCommunitySort: !1,
					useMarkdown: !1
				},
				V = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				$ = (t, e) => {
					if (!e) return t;
					const r = u()({
							...e.account,
							...e
						}, q),
						s = e.subreddit,
						n = {
							...t.subreddit
						};
					Object.keys(s || {}).forEach(t => {
						n[t] = {
							...V,
							...s && s[t]
						}
					});
					const o = {
						...t,
						...r,
						subreddit: n
					};
					if (o.useMarkdown !== t.useMarkdown) {
						const t = o.useMarkdown ? G.h.MARKDOWN : G.h.RICH_TEXT;
						o.editorMode = t, o.commentMode = t
					}
					return i()(o, t) ? t : o
				},
				W = (t, e, r) => $(t, {
					subreddit: {
						[e]: {
							...V,
							...t.subreddit[e],
							...r
						}
					}
				});
			e.d = (t = H, e) => {
				switch (e.type) {
					case b.l:
					case b.s: {
						const {
							editorMode: r
						} = e.payload;
						return {
							...t,
							commentMode: r
						}
					}
					case R.s:
					case R.M: {
						const {
							editorMode: r
						} = e.payload;
						return {
							...t,
							editorMode: r
						}
					}
					case f.d:
						return {
							...t, subscriptionsPinned: !0
						};
					case f.e:
						return {
							...t, subscriptionsPinned: !1
						};
					case N.g: {
						const {
							kind: r
						} = e.payload;
						return {
							...t,
							editorMode: r === U.b.Markdown ? G.h.MARKDOWN : G.h.RICH_TEXT
						}
					}
					case h.h: {
						const {
							layout: r
						} = e.payload;
						return t.layout === r ? t : {
							...t,
							layout: r
						}
					}
					case h.o:
						return void 0 !== e.payload ? {
							...t,
							rpanDuDismissalTime: e.payload
						} : t;
					case h.p: {
						const {
							layout: r,
							subredditId: s
						} = e.payload;
						return W(t, s, {
							layout: r
						})
					}
					case h.e:
						return {
							...t, hasSeenCustomizeFlyout: !0
						};
					case h.m:
						return t.profileLayout === e.payload.profileLayout ? t : {
							...t,
							profileLayout: e.payload.profileLayout
						};
					case O.g:
						return {
							...t, over18: !0
						};
					case h.b:
						return void 0 !== e.payload ? {
							...t,
							autoplayVideo: e.payload.autoplayVideo
						} : t;
					case h.i:
						return void 0 !== e.payload ? {
							...t,
							nightmode: e.payload.nightmode
						} : t;
					case h.r:
						if (void 0 !== e.payload) {
							const {
								topContentDismissalTime: r,
								topContentTimesDismissed: s
							} = e.payload;
							return {
								...t,
								topContentDismissalTime: r,
								topContentTimesDismissed: s
							}
						}
						return t;
					case L.d:
						return e.payload.isNightmodeOn ? {
							...t,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : t;
					case L.e:
						return e.payload.nightmodeTempUpdated ? {
							...t,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : t;
					case h.f:
						return void 0 !== e.payload ? {
							...t,
							hamburgerTray: e.payload.set
						} : {
							...t,
							hamburgerTray: !t.hamburgerTray
						};
					case h.c:
						return void 0 !== e.payload ? {
							...t,
							collapsedTraySections: c()({}, t.collapsedTraySections, e.payload)
						} : t;
					case O.a:
					case O.b:
					case O.h:
					case O.i:
					case O.f:
					case O.j:
					case E.e:
					case E.h:
					case m.a:
					case m.e:
					case m.b:
					case m.f:
					case m.d:
					case m.h:
					case _.b:
					case I.SUBREDDIT_LOADED:
					case T.b:
					case T.a:
					case j.e:
					case g.e:
					case g.b:
					case A.PROFILE_POSTS_LOADED:
					case _.f:
					case v.i:
					case x.c:
					case y.b:
					case P.PAGE_LOADED:
					case C.PAGE_LOADED:
					case h.j:
					case D.SEARCH_RESULTS_RECEIVED:
					case h.a:
					case k.c:
					case S.TOPIC_DATA_LOADED:
						return e.payload && e.payload.preferences ? $(t, e.payload.preferences) : t;
					case h.q: {
						const {
							subredditId: r,
							prefs: s
						} = e.payload;
						return W(t, r, s)
					}
					case j.d:
					case g.d:
					case g.a:
					case A.PROFILE_POSTS_FAILED: {
						let r = t;
						if (e.payload && e.payload.account) {
							const {
								nightmode: s,
								showPresence: n
							} = e.payload.account;
							t.nightmode !== s && (r = {
								...r,
								nightmode: s
							}), t.showPresence !== n && (r = {
								...r,
								showPresence: n
							})
						}
						return r
					}
					case p.h:
					case p.j:
					case p.i:
					case p.g:
					case p.f:
					case p.n:
					case p.m:
					case p.p:
					case p.q:
					case p.w:
					case p.v:
						return e.payload && e.payload.response && e.payload.response.preferences ? $(t, e.payload.preferences) : t;
					case h.n: {
						const r = e.payload,
							{
								showActiveCommunities: s
							} = r.additional;
						return t.showActiveCommunities !== s ? {
							...t,
							showActiveCommunities: s
						} : t
					}
					default:
						return t
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(t, e, r) {
			"use strict";
			r.d(e, "c", (function() {
				return u
			})), r.d(e, "b", (function() {
				return l
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/loadableAction/index.ts"),
				i = r("./src/reddit/routes/postCreation/constants.ts");
			const d = [i.b, i.c, i.a],
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(t) {
						const e = this.resolve(t);
						return !1 !== this.resolved[e] && !!r.m[e]
					},
					importAsync: () => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(t) {
						const e = this.resolve(t);
						return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
					},
					requireSync(t) {
						const e = this.resolve(t);
						return r(e)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				a = t => `/${t}/submit`,
				u = (t, e) => {
					return i.c.replace(/:subredditName/, t) + (e ? `?collection=${e}` : "")
				},
				l = t => i.a.replace(/:profileName/, t),
				b = {
					action: Object(o.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(t => t.postCreationPageRequested)),
					component: c,
					chunk: n.p.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Db.POST_CREATION
					},
					path: d,
					prefetches: [n.p.COMMENTS_PAGE]
				};
			e.a = b
		},
		"./src/reddit/selectors/appBadges.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return c
			})), r.d(e, "e", (function() {
				return a
			})), r.d(e, "d", (function() {
				return u
			})), r.d(e, "c", (function() {
				return l
			})), r.d(e, "f", (function() {
				return b
			})), r.d(e, "a", (function() {
				return O
			})), r.d(e, "h", (function() {
				return _
			})), r.d(e, "g", (function() {
				return f
			})), r.d(e, "j", (function() {
				return p
			})), r.d(e, "i", (function() {
				return m
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/chat.ts"),
				o = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				i = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const c = t => t.appBadges.badges,
				a = Object(s.a)(o.a, c, n.a, (t, e, r) => t ? e && e.directMessages && e.directMessages.count || 0 : r),
				u = Object(s.a)(c, t => t && t.chatRooms && t.chatRooms.count || 0),
				l = Object(s.a)(c, t => t && t.chatRoomMentions && t.chatRoomMentions.count || 0),
				b = Object(s.a)(o.a, n.a, a, u, l, (t, e, r, s, n) => {
					if (t) {
						return r + s + n > 0
					}
					return e > 0
				}),
				O = Object(s.a)(c, t => t && t.activityTab && t.activityTab.count || 0),
				_ = Object(s.a)(c, t => t && t.messageTab && t.messageTab.count || 0),
				f = Object(s.a)(O, _, (t, e) => t + e),
				p = Object(s.a)(a, _, (t, e) => t + e),
				m = Object(s.a)(a, f, (t, e) => t + e);
			Object(s.a)(d.J, o.a, m, p, _, d.E, a, n.a, i.d, (t, e, r, s, n, o, i, d, c) => {
				if (!t) return 0;
				const a = () => {
					return {
						inboxCount: e ? n : o || 0,
						basicChannelCount: e ? i : d || 0
					}
				};
				let u = 0;
				return u = e ? c ? r : s : (() => {
					const {
						inboxCount: t,
						basicChannelCount: e
					} = a();
					return t + e
				})()
			})
		},
		"./src/reddit/selectors/chat.ts": function(t, e, r) {
			"use strict";
			r.d(e, "b", (function() {
				return i
			})), r.d(e, "a", (function() {
				return d
			})), r.d(e, "d", (function() {
				return c
			})), r.d(e, "c", (function() {
				return a
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts");
			const i = t => t.chat.unread.count,
				d = Object(s.a)(i, t => t.basicChannelCount),
				c = (Object(s.a)(i, t => t.subredditChannelCount), t => !(t.chat.isInited || t.chat.unread.api.pending)),
				a = (t, e) => {
					const {
						chatConfig: r
					} = n.c;
					return Object(o.a)(r)(t, e)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(t, e, r) {
			"use strict";
			r.d(e, "a", (function() {
				return u
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/utils.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const c = Object(s.a)(t => Object(o.c)(t, {
					experimentName: n.cc,
					experimentEligibilitySelector: a
				}), i.a),
				a = t => Object(d.I)(t) || Object(d.J)(t),
				u = Object(s.a)(c, t => t === n.ic.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(t, e, r) {
			"use strict";
			r.d(e, "d", (function() {
				return u
			})), r.d(e, "c", (function() {
				return b
			})), r.d(e, "b", (function() {
				return _
			})), r.d(e, "a", (function() {
				return p
			})), r.d(e, "f", (function() {
				return m
			})), r.d(e, "e", (function() {
				return T
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/utils.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const c = Object(s.a)(t => Object(o.c)(t, {
					experimentName: n.fc,
					experimentEligibilitySelector: a
				}), i.a),
				a = t => Object(d.I)(t) || Object(d.J)(t),
				u = Object(s.a)(c, t => t === n.lc.Redesign),
				l = Object(s.a)(t => Object(o.c)(t, {
					experimentName: n.ec,
					experimentEligibilitySelector: a
				}), i.a),
				b = Object(s.a)(l, t => t === n.kc.Enabled),
				O = Object(s.a)(t => Object(o.c)(t, {
					experimentName: n.dc,
					experimentEligibilitySelector: a
				}), i.a),
				_ = Object(s.a)(O, t => t === n.jc.Enabled),
				f = Object(s.a)(t => Object(o.c)(t, {
					experimentName: n.R,
					experimentEligibilitySelector: a
				}), i.a),
				p = Object(s.a)(f, t => t === n.eb.NoOverflow),
				m = Object(s.a)(f, t => t === n.eb.UndoBar),
				E = Object(s.a)(t => Object(o.c)(t, {
					experimentName: n.T,
					experimentEligibilitySelector: a
				}), i.a),
				T = Object(s.a)(u, E, (t, e) => t && e === n.gb.Enabled)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.8d24c08a2b96e80b1379.js.map