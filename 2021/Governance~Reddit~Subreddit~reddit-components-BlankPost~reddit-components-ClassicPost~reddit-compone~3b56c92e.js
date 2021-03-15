// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.d2588faf200f7457db3b.js
// Retrieved at 3/15/2021, 12:30:06 PM by Reddit Dataminer v1.0.0
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
		"./src/lib/addAllowQuarantinedParam/index.ts": function(t, e, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			e.a = t => Object(r.a)(t, {
				allow_quarantined: !0
			})
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return r
			})), s.d(e, "b", (function() {
				return n
			})), s.d(e, "d", (function() {
				return o
			})), s.d(e, "a", (function() {
				return i
			}));
			const r = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				o = "APP_BADGES__UPDATED",
				i = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return b
			})), s.d(e, "e", (function() {
				return f
			})), s.d(e, "d", (function() {
				return m
			})), s.d(e, "c", (function() {
				return O
			})), s.d(e, "b", (function() {
				return _
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				i = s("./src/graphql/operations/BadgeIndicators.json"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				a = t => Object(d.a)(t, {
					...i
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const u = Object(r.a)(n.c),
				l = Object(r.a)(n.b),
				b = Object(r.a)(n.d),
				p = Object(r.a)(n.a),
				f = ({
					key: t,
					count: e
				}) => ({
					[t]: {
						count: e,
						style: c.b.Numbered
					}
				}),
				m = (t, e, s) => ({
					[c.c.DirectMessages]: {
						count: t,
						style: c.b.Numbered
					},
					[c.c.ChatRooms]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatRoomMentions]: {
						count: s,
						style: c.b.Numbered
					}
				}),
				O = () => async (t, e, {
					gqlContext: s
				}) => {
					t(u());
					const r = await async function(t) {
						const e = await a(t());
						if (e.ok && e.body) {
							return function(t) {
								return t && t.data && t.data.badgeIndicators
							}(e.body)
						}
					}(s);
					r ? (t(l(r)), t(Object(o.d)())) : t(p())
				};
			const _ = () => async t => {
				const e = f({
					key: c.c.MessageTab,
					count: 0
				});
				t(b(e))
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return r
			})), s.d(e, "c", (function() {
				return f
			})), s.d(e, "b", (function() {
				return _
			})), s.d(e, "d", (function() {
				return P
			}));
			var r, n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/chat/endpoints/sendbird/index.ts"),
				d = s("./src/reddit/actions/tabBadging.ts"),
				a = s("./src/reddit/selectors/chat.ts"),
				c = s("./src/reddit/selectors/user.ts");
			! function(t) {
				t.SYNC = "UNREAD_COUNT__SYNC", t.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", t.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", t.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(r || (r = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: p
			} = r, f = Object(o.a)(u), m = Object(o.a)(l), O = Object(o.a)(b), _ = Object(o.a)(p);
			let j;
			const g = 5 * n.db,
				P = () => async (t, e, {
					apiContext: s
				}) => {
					const r = e();
					if (!Object(c.J)(r) || !Object(a.d)(r)) return clearTimeout(j);
					j || t((() => async (t, e, {
						apiContext: s
					}) => {
						const r = e(),
							{
								session: n
							} = r.user;
						if (n && Object(c.J)(r) && Object(a.d)(r)) {
							t(O());
							const e = await Object(i.f)(s(), n);
							e && e.ok ? (t(_({
								basicChannelCount: e.body.unread_count || 0,
								subredditChannelCount: e.body.subreddit_unread_count || 0
							})), t(Object(d.d)())) : t(m({
								error: e.error
							}))
						}
					})()), j = setTimeout(() => {
						t(P())
					}, g)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return r
			})), s.d(e, "b", (function() {
				return n
			})), s.d(e, "c", (function() {
				return o
			})), s.d(e, "d", (function() {
				return i
			}));
			const r = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return D
			})), s.d(e, "b", (function() {
				return A
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/camelCase.js"),
				o = s.n(n),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/sentry/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/graphql/operations/FetchContentControls.json"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/reddit/models/AutomatedReporting/index.ts");
			const p = t => {
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
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = s("./node_modules/lodash/isEmpty.js"),
				m = s.n(f),
				O = s("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				_ = s("./src/graphql/operations/UpdatePostRequirements.json"),
				j = s("./src/reddit/endpoints/subreddit/about.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/contentControls.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/actions/contentControls/constants.ts");
			const C = Object(d.a)(h.b),
				T = Object(d.a)(h.c),
				y = Object(d.a)(h.a),
				D = t => async (e, s, {
					gqlContext: r
				}) => {
					const n = {
						subredditName: t.toLowerCase()
					};
					if (Object(P.a)(s(), n)) return;
					e(T(n));
					let o = Object(E.F)(s(), t);
					if (!o) {
						const s = await Object(j.a)(r(), t, !1);
						if (s.ok) {
							o = s.body.data.subreddit.id
						}
						if (!o) {
							const t = s.error || {
								type: i.E.NOT_FOUND_ERROR
							};
							return void e(y({
								...n,
								error: t
							}))
						}
					}
					let d = null;
					const c = await ((t, e) => Object(l.a)(t, {
						...u,
						variables: e
					}).then(t => {
						var e, s;
						if (t.ok) {
							const r = null === (s = null === (e = t.body) || void 0 === e ? void 0 : e.data) || void 0 === s ? void 0 : s.subreddit;
							return {
								...t,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: p(null == r ? void 0 : r.automatedReportingLevelAbuse),
												levelHate: p(null == r ? void 0 : r.automatedReportingLevelHate),
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
					if (c.ok) {
						const t = c.body;
						d = t.data.subreddit && t.data.subreddit
					}
					if (d) e(C({
						...n,
						...d
					}));
					else {
						const s = c.error || {
							type: i.E.UNKNOWN_ERROR
						};
						e(y({
							...n,
							error: s
						})), a.c.withScope(e => {
							e.setExtra("info", {
								subredditName: t,
								responseBody: c.body,
								responseOk: c.ok
							}), a.c.captureMessage("Missing post requirements data!")
						})
					}
				}, x = Object(d.a)(h.d), A = (t, e) => async (s, n, {
					gqlContext: o
				}) => {
					const i = t.toLowerCase(),
						d = Object(E.F)(n(), t);
					if (!d) return {
						success: !1
					};
					const a = await ((t, e, s) => {
						const r = [Promise.resolve(null), Promise.resolve(null)];
						if (s.postRequirements && !m()(s.postRequirements)) {
							const n = {
								subredditId: e,
								...s.postRequirements
							};
							r[0] = Object(l.a)(t, {
								..._,
								variables: {
									input: n
								}
							})
						}
						if (s.automatedReporting && !m()(s.automatedReporting)) {
							const n = {
								subredditId: e
							};
							s.automatedReporting.levelAbuse && (n.automatedReportingLevelAbuse = s.automatedReporting.levelAbuse), s.automatedReporting.levelHate && (n.automatedReportingLevelHate = s.automatedReporting.levelHate), r[1] = Object(l.a)(t, {
								...O,
								variables: {
									input: n
								}
							})
						}
						return Promise.all(r).then(([t, e]) => {
							let s = !0,
								r = [];
							if (t) {
								const e = t.body,
									n = e.data.updatePostRequirements.fieldErrors;
								s = s && e.data.updatePostRequirements.ok, n && (r = r.concat(n))
							}
							if (e) {
								const t = e.body,
									n = t.data.updateSubredditSettings.fieldErrors;
								s = s && t.data.updateSubredditSettings.ok, n && (r = r.concat(n))
							}
							return {
								ok: s,
								fieldErrors: r.length ? r : null
							}
						})
					})(o(), d, e);
					if (a.ok) return s(x({
						subredditName: i,
						partialUpdates: e
					})), {
						success: !0
					}; {
						const t = R(a.fieldErrors);
						return s(Object(c.f)({
							duration: c.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: g.b.Error,
							text: t && t.length ? t[0].message : r.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: t || void 0
						}
					}
				}, R = t => t && t.map(t => ({
					...t,
					field: o()(t.field)
				}))
		},
		"./src/reddit/actions/frontpage/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return r
			})), s.d(e, "b", (function() {
				return n
			})), s.d(e, "a", (function() {
				return o
			})), s.d(e, "d", (function() {
				return i
			})), s.d(e, "g", (function() {
				return d
			})), s.d(e, "f", (function() {
				return a
			})), s.d(e, "e", (function() {
				return c
			}));
			const r = "PAGE__FRONTPAGE_PENDING",
				n = "PAGE__FRONTPAGE_LOADED",
				o = "PAGE__FRONTPAGE_FAILED",
				i = "PAGE__FRONTPAGE_RELOADED",
				d = "FRONTPAGE__MORE_POSTS_PENDING",
				a = "FRONTPAGE__MORE_POSTS_LOADED",
				c = "FRONTPAGE__MORE_POSTS_FAILED"
		},
		"./src/reddit/actions/inbox.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return o
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				o = Object(r.a)(n)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return d
			})), s.d(e, "b", (function() {
				return a
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				o = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				i = s("./src/reddit/selectors/user.ts");
			const d = "MOD_PERMS__REQUEST_LOADED",
				a = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(d), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (t, e) => {
					const s = Object(i.i)(e());
					if (s) {
						const e = Object(o.e)(s);
						await t(Object(n.b)(e))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return r
			})), s.d(e, "b", (function() {
				return n
			})), s.d(e, "a", (function() {
				return o
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				o = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(t, e, s) {
			"use strict";
			s.r(e), s.d(e, "PAGE_PENDING", (function() {
				return L
			})), s.d(e, "PAGE_LOADED", (function() {
				return w
			})), s.d(e, "PAGE_FAILED", (function() {
				return M
			})), s.d(e, "pagePending", (function() {
				return F
			})), s.d(e, "pageLoaded", (function() {
				return U
			})), s.d(e, "pageFailed", (function() {
				return G
			})), s.d(e, "postCreationPageDataRequested", (function() {
				return B
			})), s.d(e, "postCreationPageRequested", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				i = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makePostCreationPageKey/index.ts"),
				c = s("./src/lib/pageTitle.ts"),
				u = s("./src/reddit/actions/contentControls/index.ts"),
				l = s("./src/reddit/actions/economics/helpers/async.ts"),
				b = s("./src/reddit/actions/externalAccount.ts"),
				p = s("./src/reddit/actions/gold/powerups.ts"),
				f = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/postCreation/general.ts"),
				_ = s("./src/reddit/actions/profile/index.ts"),
				j = s("./src/reddit/actions/subreddit.ts"),
				g = s("./src/reddit/actions/subredditDuplicates.ts"),
				P = s("./src/config.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				h = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				C = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				y = s("./src/reddit/helpers/trackers/postComposer.ts"),
				D = s("./src/reddit/models/User/index.ts"),
				x = s("./src/reddit/selectors/contentControls.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
				R = s("./src/reddit/selectors/postCreations.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/profile.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/selectors/user.ts");
			const k = t => {
					const e = t.platform.currentPage;
					let s = "Reddit";
					if (e && e.urlParams.subredditName) {
						const {
							subredditName: r
						} = e.urlParams, n = Object(I.A)(t, {
							subredditName: r
						});
						n && (s = n.name)
					}
					return Object(c.i)(s)
				},
				L = "POST_CREATION__PAGE_PENDING",
				w = "POST_CREATION__PAGE_LOADED",
				M = "POST_CREATION__PAGE_FAILED",
				F = Object(d.a)(L),
				U = Object(d.a)(w),
				G = Object(d.a)(M),
				q = () => async (t, e) => {
					const s = e(),
						r = Object(R.a)(s);
					r !== Object(R.fb)(s) && t(Object(O.g)({
						submissionType: r
					}))
				}, B = t => async (e, s, r) => {
					const {
						collectionId: o,
						profileName: d,
						subredditName: c
					} = t, l = Object(a.a)(t), f = s(), m = f.creations.api.page.pending[l], O = f.creations.api.page.fetched[l], g = f.creations.api.page.error[l];
					if (m) return;
					if (O && !g) return void e(q());
					const C = [];
					e(F({
						key: l
					}));
					let y = c;
					!c && d && (y = `u_${d}`), C.push(((t, e) => Object(E.a)(t, {
						method: n.cb.GET,
						endpoint: Object(h.a)(`${P.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: e.subredditName,
							collection_id: e.collectionId
						}
					}))(r.apiContext(), {
						subredditName: y,
						collectionId: o
					})), d && (C.push(e(_.d(d))), C.push(e(_.b(d))));
					const [A] = await Object(T.a)("postCreation", () => Promise.all(C));
					if (A.ok) {
						const t = A.body,
							{
								posts: r = {},
								subredditAboutInfo: n
							} = t;
						if (e(U({
								key: l,
								meta: f.meta,
								...t,
								posts: r
							})), !Object(v.J)(s())) return;
						if (n) {
							const t = Object.keys(n)[0];
							await e(Object(p.f)(t, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						e(q());
						const o = [];
						o.push(e(b.o()));
						const d = Object(v.i)(s());
						if (d && d.hasUserProfile && o.push(e(_.d(Object(D.e)(d)))), c && !Object(i.a)(c)) {
							o.push(e(j.o(c))), !!Object(x.b)(s(), {
								subredditName: c
							}) || o.push(e(Object(u.a)(c)))
						}
						await Promise.all(o)
					} else e(G({
						error: A.error,
						key: l
					}))
				}, $ = t => async (e, s) => {
					const {
						subredditName: i,
						profileName: d
					} = t.params, a = t.queryParams, c = a.collection;
					if (await e(B({
							collectionId: c,
							profileName: d,
							subredditName: i
						})), !Object(v.J)(s())) return void Object(C.a)(e, s());
					let u;
					if (i ? (u = Object(I.A)(s(), {
							subredditName: i
						}), await e(Object(l.a)({
							subredditName: i
						}))) : d && (u = Object(N.j)(s(), {
							profileName: d
						})), a.source_id) await e(((t, e) => async (s, r) => {
						const {
							subredditName: n,
							profileName: o
						} = t, i = [];
						let d;
						n ? d = Object(I.F)(r(), n) : o && (d = Object(v.db)(r(), {
							userName: o
						})), d && i.push(s(Object(g.b)(d, e))), i.push(s(Object(m.K)(e))), await Promise.all(i);
						const a = Object(S.f)(r(), {
							postId: e
						});
						s(Object(O.k)({
							postId: e,
							postTitle: a ? a.title : ""
						}))
					})(t.params, a.source_id));
					else if (c) {
						const n = Object(A.q)(s(), {
							collectionId: c
						});
						u && n && n.subredditId === u.id || e(Object(r.c)(Object(o.a)(t.url, ["collection"])))
					}((t, e) => {
						const s = t.platform.lastPage;
						e && s && s.meta && s.meta.name === n.Db.POST_CREATION && y.x(t)
					})(s(), i), e(f.l({
						title: k(s())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(t, e, s) {
			"use strict";
			s.r(e), s.d(e, "PAGE_PENDING", (function() {
				return p
			})), s.d(e, "PAGE_LOADED", (function() {
				return f
			})), s.d(e, "PAGE_FAILED", (function() {
				return m
			})), s.d(e, "pagePending", (function() {
				return O
			})), s.d(e, "pageLoaded", (function() {
				return _
			})), s.d(e, "pageFailed", (function() {
				return j
			})), s.d(e, "postDraftPageDataRequested", (function() {
				return g
			})), s.d(e, "postDraftRequested", (function() {
				return P
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makePostDraftPageKey/index.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				i = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				f = "POST_DRAFT__PAGE_LOADED",
				m = "POST_DRAFT__PAGE_FAILED",
				O = Object(r.a)(p),
				_ = Object(r.a)(f),
				j = Object(r.a)(m),
				g = t => async (e, s, r) => {
					const {
						draftId: p,
						profileName: f
					} = t, m = Object(n.a)(t), O = s(), g = O.creations.api.page.pending[m], P = O.creations.api.page.fetched[m], E = O.creations.api.page.error[m];
					if (g || P && !E || !p) return;
					e(o.d(f));
					const h = await Object(b.a)("postDraft", () => ((t, e, s) => Object(a.a)(t, {
						endpoint: Object(c.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${s}/${e}`)),
						method: d.cb.GET
					}))(r.apiContext(), p, f));
					if (h.ok) {
						const t = h.body;
						t.drafts[p].kind = Object(l.b)(t.drafts[p].kind), e(_({
							...t,
							key: m
						}))
					} else e(j({
						error: h.error,
						key: m
					}))
				}, P = t => async (e, s, r) => {
					await e(g(t.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(t, e, s) {
			"use strict";
			s.r(e), s.d(e, "PROFILE_POSTS_PENDING", (function() {
				return A
			})), s.d(e, "PROFILE_POSTS_LOADED", (function() {
				return R
			})), s.d(e, "PROFILE_POSTS_FAILED", (function() {
				return S
			})), s.d(e, "profilePostsPending", (function() {
				return N
			})), s.d(e, "profilePostsLoaded", (function() {
				return I
			})), s.d(e, "profilePostsFailed", (function() {
				return v
			})), s.d(e, "profilePostsRequested", (function() {
				return k
			})), s.d(e, "MORE_POSTS_PENDING", (function() {
				return L
			})), s.d(e, "MORE_POSTS_LOADED", (function() {
				return w
			})), s.d(e, "MORE_POSTS_FAILED", (function() {
				return M
			})), s.d(e, "morePostsPending", (function() {
				return F
			})), s.d(e, "morePostsLoaded", (function() {
				return U
			})), s.d(e, "morePostsFailed", (function() {
				return G
			})), s.d(e, "morePostsRequested", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				a = s("./src/reddit/actions/externalAccount.ts"),
				c = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				l = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				m = s("./src/reddit/constants/errors.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/config.ts"),
				g = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				P = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				h = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const C = (t, e, s) => Object(E.a)(t, {
				data: s,
				endpoint: Object(g.a)(Object(h.a)(`${j.a.gatewayUrl}/desktopapi/v1/user/${e}/posts`)),
				method: P.cb.GET
			}).then(t => "pinned" in t.body ? t : "postIds" in t.body ? {
				...t,
				body: {
					...t.body,
					pinned: t.body.postIds.filter(e => t.body.posts[e] && t.body.posts[e].isPinned).reverse()
				}
			} : t);
			var T = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				y = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				D = s("./src/reddit/selectors/listings.ts"),
				x = s("./src/reddit/selectors/profile.ts");
			const A = "PAGE__PROFILE_POSTS_PENDING",
				R = "PAGE__PROFILE_POSTS_LOADED",
				S = "PAGE__PROFILE_POSTS_FAILED",
				N = Object(o.a)(A),
				I = Object(o.a)(R),
				v = Object(o.a)(S),
				k = t => async (e, s, r) => {
					const {
						queryParams: o,
						params: j
					} = t, {
						sort: g,
						t: P
					} = Object(u.b)(o), {
						profileName: E
					} = j, h = Object(i.a)(`u_${E}`, g, o), A = s(), R = A.listings.postOrder.ids[h], S = Object(D.c)(A, {
						listingKey: h
					}), k = Object(D.d)(A, {
						listingKey: h
					});
					if (await e(p.d(E)), k || R && !S) {
						if (R) {
							const t = Object(x.q)(s(), {
								profileName: E
							});
							e(b.l({
								title: t
							}))
						}
						return
					}
					const L = {
						...n()(t.queryParams, [...O.l, ...O.k, O.h]),
						layout: Object(_.O)(A, {}).toLowerCase(),
						sort: g,
						t: Object(T.a)(g, P)
					};
					e(N({
						key: h
					}));
					const w = await Object(y.a)("profilePosts", () => C(r.apiContext(), E, L));
					if (!w.ok) return e(v({
						account: w.body.data ? w.body.data.account : null,
						error: w.body.reason ? {
							type: w.body.reason
						} : w.error,
						key: h
					})), w.body.reason === m.a.DeletedProfile && e(Object(d.p)({
						profileName: E
					})), void e(b.m(w.status));
					const M = w.body;
					e(I({
						key: h,
						meta: s().meta,
						...M
					}));
					const F = Object(x.m)(s(), E),
						{
							pinned: U
						} = M;
					e(Object(l.h)({
						profileId: F,
						pinned: U
					})), await Promise.all([e(Object(u.c)(E)), e(Object(f.q)()), e(Object(c.b)()), e(a.o(E))])
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", w = "PROFILE_POSTS__MORE_POSTS_LOADED", M = "PROFILE_POSTS__MORE_POSTS_FAILED", F = Object(o.a)(L), U = Object(o.a)(w), G = Object(o.a)(M), q = () => async (t, e, {
					apiContext: s
				}) => {
					const r = e(),
						{
							currentPage: o
						} = r.platform;
					if (!o || !o.routeMatch) return;
					const {
						queryParams: d,
						params: a
					} = o.routeMatch.match, {
						sort: c,
						t: l
					} = Object(u.b)(d), {
						profileName: b
					} = a, p = Object(i.a)(`u_${b}`, c, d), f = Object(D.g)(r, {
						listingKey: p
					});
					if (!f) return;
					const m = Object(D.d)(r, {
							listingKey: p
						}),
						j = Object(D.e)(r, {
							listingKey: p,
							token: f.token
						});
					if (m || j) return;
					t(F({
						key: p,
						fetchedToken: f.token
					}));
					const g = {
							after: f.token,
							dist: f.dist,
							sort: c,
							t: l,
							...n()(d, O.l),
							layout: Object(_.O)(r, {}).toLowerCase()
						},
						P = await C(s(), b, g),
						E = r.listings.postOrder.ids[p],
						h = P.body.postIds || [],
						T = {
							...P.body,
							postIds: h.filter(t => !E || !E.includes(t))
						};
					P.ok ? (t(U({
						fetchedToken: f.token,
						key: p,
						meta: r.meta,
						...T
					})), await t(Object(u.c)(b))) : t(G({
						account: P.body.data ? P.body.data.account : null,
						error: P.error,
						fetchedToken: f.token,
						key: p
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return p
			})), s.d(e, "h", (function() {
				return f
			})), s.d(e, "d", (function() {
				return m
			})), s.d(e, "g", (function() {
				return O
			})), s.d(e, "c", (function() {
				return g
			})), s.d(e, "f", (function() {
				return P
			})), s.d(e, "b", (function() {
				return C
			})), s.d(e, "e", (function() {
				return T
			})), s.d(e, "i", (function() {
				return N
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const p = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(o.a)(p),
				m = "PINNEDPOST__PIN_POST_SUCCESS",
				O = "PINNEDPOST__UNPIN_POST_SUCCESS",
				_ = Object(o.a)(m),
				j = Object(o.a)(O),
				g = "PINNEDPOST__PIN_POST_PENDING",
				P = "PINNEDPOST__UNPIN_POST_PENDING",
				E = Object(o.a)(g),
				h = Object(o.a)(P),
				C = "PINNEDPOST__PIN_POST_FAILURE",
				T = "PINNEDPOST__UNPIN_POST_FAILURE",
				y = Object(o.a)(C),
				D = Object(o.a)(T),
				x = t => Object(d.f)({
					buttonAction: N(t, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				A = (t, e) => Object(d.f)({
					buttonAction: N(t, !0),
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
				R = () => Object(d.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				S = () => Object(d.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				N = (t, e = !1) => async (s, o, {
					apiContext: p
				}) => {
					const f = o(),
						m = f.posts.models[t];
					if (!m) return;
					const O = !Object(l.q)(f, {
						postId: t
					});
					if (O && m.isRemoved) return s((() => Object(d.f)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const g = m.author,
						P = Object(b.m)(f, g),
						[C, T, N, I, v] = O ? [E, _, y, x, R] : [h, j, D, A, S];
					if (O) {
						if (Object(l.L)(f, {
								profileName: g
							}).length >= n.V) return void s(Object(i.i)(a.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const k = Object(l.n)(f, t, g),
						L = !O && k;
					s(C({
						postId: t,
						profileId: P
					})), (await Object(c.t)(p(), t, O, !0)).ok ? (s(T({
						postId: t,
						profileId: P
					})), e || s(I(t, L))) : (s(N({
						postId: t,
						profileId: P
					})), s(v()))
				}
		},
		"./src/reddit/actions/postCreation/general.ts": function(t, e, s) {
			"use strict";
			s.d(e, "i", (function() {
				return m
			})), s.d(e, "m", (function() {
				return _
			})), s.d(e, "a", (function() {
				return j
			})), s.d(e, "b", (function() {
				return g
			})), s.d(e, "c", (function() {
				return E
			})), s.d(e, "d", (function() {
				return h
			})), s.d(e, "f", (function() {
				return C
			})), s.d(e, "e", (function() {
				return T
			})), s.d(e, "g", (function() {
				return y
			})), s.d(e, "h", (function() {
				return D
			})), s.d(e, "j", (function() {
				return x
			})), s.d(e, "r", (function() {
				return A
			})), s.d(e, "q", (function() {
				return R
			})), s.d(e, "s", (function() {
				return S
			})), s.d(e, "t", (function() {
				return N
			})), s.d(e, "u", (function() {
				return I
			})), s.d(e, "v", (function() {
				return v
			})), s.d(e, "x", (function() {
				return k
			})), s.d(e, "y", (function() {
				return L
			})), s.d(e, "z", (function() {
				return w
			})), s.d(e, "k", (function() {
				return M
			})), s.d(e, "p", (function() {
				return F
			})), s.d(e, "o", (function() {
				return G
			})), s.d(e, "w", (function() {
				return q
			})), s.d(e, "n", (function() {
				return B
			})), s.d(e, "l", (function() {
				return $
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/isUrl/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/endpoints/post/index.tsx"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				u = s("./src/reddit/routes/postCreation/constants.ts"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/reddit/selectors/postCollection.ts"),
				p = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/actions/postCreation/constants.ts");
			const m = Object(o.a)(f.n),
				O = Object(o.a)(f.z),
				_ = (Object(o.a)(f.s), t => {
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
				j = Object(o.a)(f.b),
				g = Object(o.a)(f.c),
				P = Object(o.a)(f.d),
				E = Object(o.a)(f.e),
				h = Object(o.a)(f.f),
				C = Object(o.a)(f.g),
				T = Object(o.a)(f.h),
				y = Object(o.a)(f.i),
				D = Object(o.a)(f.j),
				x = Object(o.a)(f.q),
				A = Object(o.a)(f.O),
				R = Object(o.a)(f.N),
				S = (Object(o.a)(f.P), Object(o.a)(f.Q)),
				N = Object(o.a)(f.R),
				I = Object(o.a)(f.S),
				v = Object(o.a)(f.T),
				k = Object(o.a)(f.U),
				L = Object(o.a)(f.V),
				w = Object(o.a)(f.W),
				M = Object(o.a)(f.r),
				F = t => async (e, s, {
					apiContext: r
				}) => {
					e(P(t)), Object(n.a)(t) && e((t => async (e, s, {
						apiContext: r
					}) => {
						const n = await Object(a.f)(r(), t);
						n.ok && n.body && n.body.json && n.body.json.data && e(O(n.body.json.data))
					})(t))
				}, U = Object(o.a)(f.A), G = (t, e) => async (s, n) => {
					s(U()), s(t ? Object(r.b)(u.b) : Object(r.b)(Object(p.V)(n(), {
						pageLayer: e
					})))
				}, q = t => async e => {
					e(i.i(t))
				}, B = t => async (e, s) => {
					const r = s(),
						n = Object(d.D)(t),
						o = Object(p.B)(r);
					if (n && o) {
						Object(l.a)(r) !== c.c && e(q(c.c))
					} else e(G(!1, t))
				}, $ = t => async (e, s) => {
					const r = s();
					Object(b.m)(r, {
						subredditId: t
					}) ? e(i.i(c.a)) : e(i.i(c.b))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(t, e, s) {
			"use strict";
			s.d(e, "e", (function() {
				return h
			})), s.d(e, "b", (function() {
				return C
			})), s.d(e, "a", (function() {
				return T
			})), s.d(e, "d", (function() {
				return y
			})), s.d(e, "c", (function() {
				return D
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				p = s("./src/reddit/routes/postCreation/index.ts"),
				f = s("./src/reddit/routes/postCreation/constants.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/actions/postCreation/constants.ts"),
				g = s("./src/reddit/actions/postCreation/general.ts");
			const P = Object(d.a)(j.J),
				E = Object(d.a)(j.K),
				h = Object(d.a)(j.I),
				C = (t, e) => async (s, r, {
					apiContext: n
				}) => {
					let i = r();
					const {
						name: d,
						isProfile: p
					} = t, f = Object(O.e)(i), j = f && !p && Object(l.a)(f.name, d), g = i.creations.api.subreddit.change.pending;
					if (j || g) return;
					const E = Object(u.u)(e);
					if (!d) return void s(T(t, E));
					s(P(t));
					const h = p ? {
						profileName: d
					} : {
						subredditName: d
					};
					if (await s(Object(c.postCreationPageDataRequested)(h)), p || !Object(m.x)(i)) return s(T(t, E));
					const C = t.allowedPostTypes || Object(_.z)(r(), {
						subredditName: d
					});
					if (!C) return void s(T(t, E));
					let y;
					i = r();
					const D = Object(m.fb)(i),
						x = Object(m.x)(i);
					if (D === o.Lb.MEDIA && x) {
						const t = Object(m.P)(i),
							e = Object(b.v)(t),
							s = Object(m.G)(i) && t.items.length > 1,
							r = !e && !s;
						if (s && !C.galleries) y = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !C.images) y = b.p.ImageWillBeRemoved;
						else if (e && !C.videos) {
							const e = i.uploads[t.items[0].uploadKey],
								s = e && e.metadata.videoDuration || 0;
							C.images ? s > o.Z && (y = b.p.VideoWillBeRemovedTooLongForGif) : y = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(y ? Object(a.i)(y) : T({
						...t,
						allowedPostTypes: C
					}, E))
				}, T = (t, e, s = !0) => async (o, i) => {
					const {
						name: d,
						isProfile: a
					} = t, c = i().platform.currentPage, u = c.queryParams, l = a ? p.b : p.c;
					let b = "";
					b = d ? l(d) : f.b, b = Object(n.a)(b, {
						...u,
						draft: e || u.draft
					}), (e || c.url.toLowerCase() !== b.toLowerCase()) && (o(E(t)), s && o(Object(g.q)(!0)), o(Object(g.i)()), o(Object(r.c)(b)))
				}, y = t => async (e, s) => {
					const o = s().platform.currentPage,
						i = o.queryParams,
						d = Object(n.a)(o.url, {
							...i,
							collection: t
						});
					e(Object(r.c)(d))
				}, D = () => async (t, e) => {
					const s = e().platform.currentPage,
						n = Object(i.a)(s.url, ["collection"]);
					t(Object(r.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(t, e, s) {
			"use strict";
			s.d(e, "f", (function() {
				return S
			})), s.d(e, "e", (function() {
				return N
			})), s.d(e, "d", (function() {
				return I
			})), s.d(e, "p", (function() {
				return w
			})), s.d(e, "j", (function() {
				return M
			})), s.d(e, "l", (function() {
				return F
			})), s.d(e, "i", (function() {
				return U
			})), s.d(e, "m", (function() {
				return G
			})), s.d(e, "k", (function() {
				return q
			})), s.d(e, "h", (function() {
				return B
			})), s.d(e, "n", (function() {
				return $
			})), s.d(e, "s", (function() {
				return z
			})), s.d(e, "r", (function() {
				return X
			})), s.d(e, "g", (function() {
				return Y
			})), s.d(e, "q", (function() {
				return tt
			})), s.d(e, "c", (function() {
				return et
			})), s.d(e, "a", (function() {
				return st
			})), s.d(e, "b", (function() {
				return rt
			})), s.d(e, "o", (function() {
				return dt
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/formatApiError/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/postCreation/general.ts"),
				d = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var p = s("./src/reddit/constants/headers.ts"),
				f = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/models/PostDraft/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				_ = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts");
			const g = t => {
				let e = t.drafts.reduce((t, e) => {
					const s = (t => {
						let e;
						return e = "link" === t.kind ? {
							kind: m.b.Link,
							body: t.body || void 0
						} : "markdown" === t.kind ? {
							kind: m.b.Markdown,
							body: t.body || void 0
						} : {
							kind: m.b.RichText,
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
					return t.postDraftIds.push(s.id), t.postDrafts[s.id] = s, t
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return e = t.subreddits.reduce((t, e) => {
					if (e.subreddit_type === j.e.User) {
						const s = Object(O.a)(e, Object(f.g)(e.display_name_prefixed));
						t.profiles[s.id] = s
					} else {
						const s = Object(_.a)(e);
						t.subreddits[s.id] = s
					}
					return t
				}, e)
			};
			var P = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				h = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/postCreations.ts"),
				D = s("./src/reddit/selectors/postDraft.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts");
			const S = "POST_DRAFT__LIST_PENDING",
				N = "POST_DRAFT__LIST_LOADED",
				I = "POST_DRAFT__LIST_FAILED",
				v = Object(o.a)(S),
				k = Object(o.a)(N),
				L = Object(o.a)(I),
				w = () => async (t, e, {
					apiContext: s
				}) => {
					const n = e();
					if (!Object(R.i)(n) || Object(D.b)(n)) return;
					t(v());
					const o = await (t => Object(u.a)(Object(l.a)(t, [p.a]), {
						endpoint: `${t.apiUrl}/api/v1/drafts.json`,
						method: r.cb.GET
					}))(s());
					o.ok ? t(k(g(o.body))) : t(L(o.error))
				}, M = "POST_DRAFT__SAVE_DRAFT_PENDING", F = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", U = "POST_DRAFT__SAVE_DRAFT_FAILED", G = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", $ = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(o.a)(M), V = Object(o.a)(F), Q = Object(o.a)(U), W = Object(o.a)(G), J = Object(o.a)(q), K = Object(o.a)(B), z = Object(o.a)($), X = t => async (e, s, {
					apiContext: o
				}) => {
					const i = s(),
						c = Object(D.g)(i),
						b = Object(y.U)(i);
					if (c || b) return;
					const f = Object(D.h)(i, t);
					if (!f) return;
					e(H(f)), h.e(i, f);
					const m = await ((t, e, s) => Object(u.a)(Object(l.a)(t, [p.a]), {
						endpoint: `${t.apiUrl}/api/v1/draft`,
						method: s ? r.cb.PUT : r.cb.POST,
						data: Object(P.a)(e)
					}).then(t => t.body.fields && Object(E.u)(t.body.fields[0]) ? {
						...t,
						body: {},
						error: {
							type: r.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: t.body.fields[0],
								msg: t.body.explanation
							}]
						}
					} : t))(o(), f, t);
					if (m.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(P.c)(m.body);
						e(V({
							draftId: s,
							draftsCount: r
						})), t || e(Object(d.a)(f.destSubreddit, s, !1))
					} else {
						const t = m.error;
						t.type === r.E.BAD_CAPTCHA_ERROR ? e(K()) : t.type === r.E.VALIDATION_ERROR ? e(W(t)) : t.type === r.E.SUBMIT_VALIDATION_ERROR ? e(J(t)) : e(Q(t)), e(Object(a.f)({
							duration: a.a,
							kind: C.b.Error,
							text: Object(n.a)(t)
						}))
					}
				}, Y = "POST_DRAFT__LOAD_DRAFT", Z = Object(o.a)(Y), tt = t => async (e, s, {
					apiContext: r
				}) => {
					e(Z(t));
					let n = E.e;
					const o = s();
					if (t.subredditId) {
						const e = Object(A.T)(o, {
								subredditId: t.subredditId
							}),
							s = Object(x.p)(o, {
								profileId: t.subredditId
							}),
							r = Object(R.i)(o);
						e ? n = {
							isProfile: !1,
							name: e.name
						} : s && r && (n = {
							isProfile: !0,
							name: Object(T.e)(r)
						})
					}
					await e(Object(d.a)(n, t.id, !1));
					const i = Object(D.h)(s(), t.id);
					i && h.h(s(), i)
				}, et = "POST_DELETE_DRAFT_SUCCEEDED", st = "POST_DELETE_DRAFT_FAILED", rt = "POST_DELETE_DRAFT_PENDING", nt = Object(o.a)(et), ot = Object(o.a)(st), it = Object(o.a)(rt), dt = (t, e) => async (s, o, {
					apiContext: d
				}) => {
					const p = o();
					if (Object(D.a)(p, t)) return;
					const f = Object(D.d)(p, {
						draftId: t
					});
					f && h.f(p, f), s(it({
						draftId: t
					}));
					const m = await (async (t, e) => Object(u.a)(Object(l.a)(t, [b.g]), {
						endpoint: `${t.apiUrl}/api/v1/draft?draft_id=${e}`,
						method: r.cb.DELETE
					}))(d(), t);
					if (m.ok) {
						const {
							draftsCount: r
						} = Object(P.c)(m.body);
						s(nt({
							draftId: t,
							draftsCount: r
						}));
						const n = Object(c.u)(e);
						t === n && s(Object(i.o)(!0, e))
					} else {
						const e = m.error;
						s(ot({
							draftId: t,
							apiError: e
						})), s(Object(a.f)({
							duration: a.a,
							kind: C.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return c
			})), s.d(e, "a", (function() {
				return u
			})), s.d(e, "c", (function() {
				return f
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				i = s("./src/reddit/endpoints/me/index.ts"),
				d = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(c),
				p = Object(n.a)(u),
				f = (t, e) => async (t, s, {
					apiContext: r
				}) => {
					const n = s();
					t(l());
					const a = await Object(i.a)(r());
					a.ok && a.body ? !e || a.body.account ? (t(b(a.body)), t(Object(o.d)()), m(n)) : Object(d.a)(t, n) : t(p(a.error))
				}, m = t => {
					t.platform.currentPage && t.platform.currentPage.routeMatch && t.platform.currentPage.routeMatch.route && t.platform.currentPage.routeMatch.route.meta && t.platform.currentPage.routeMatch.route.meta.name && t.platform.currentPage.routeMatch.route.meta.name === r.Db.INBOX_PAGES && Object(a.g)(t)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return b
			})), s.d(e, "b", (function() {
				return f
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/config.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			var a = s("./src/reddit/models/Duplicates/index.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(r.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(r.a)(b)),
				f = (t, e) => async (s, r, {
					apiContext: b
				}) => {
					const f = Object(l.T)(r(), {
						subredditId: t
					}) || Object(u.p)(r(), {
						profileId: t
					});
					if (!f) return;
					const m = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(c.g)(f) ? n.Wb + f.name : f.name
						},
						O = await ((t, e, s) => Object(i.a)(t, {
							data: s,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.s)(e)}`,
							method: n.cb.GET
						}))(b(), e, m);
					if (O.ok) {
						const r = O.body;
						s(p({
							distinguishKey: Object(a.a)(e, m),
							postIds: r.postIds,
							posts: r.posts,
							profiles: r.profiles,
							subreddits: r.subreddits,
							subredditId: t
						}))
					}
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return _
			})), s.d(e, "c", (function() {
				return g
			})), s.d(e, "b", (function() {
				return P
			})), s.d(e, "e", (function() {
				return h
			})), s.d(e, "d", (function() {
				return C
			})), s.d(e, "f", (function() {
				return T
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/chat/unreadCount.ts"),
				d = s("./src/reddit/actions/inbox.ts"),
				a = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				u = s("./src/reddit/models/Badge/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts"),
				b = s("./src/reddit/selectors/chat.ts"),
				p = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				f = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const _ = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				j = Object(o.a)(_),
				g = (t, e) => {
					t <= 0 ? n.a.write(() => {
						Object(c.b)(!1), window.document.title = e
					}) : n.a.write(() => {
						Object(c.b)(), window.document.title = `(${t}) ${e}`
					})
				},
				P = Object(r.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				E = t => {
					const e = Object(p.a)(t);
					return {
						inboxCount: e ? Object(l.h)(t) : Object(m.E)(t) || 0,
						basicChannelCount: e ? Object(l.e)(t) : Object(b.a)(t) || 0
					}
				},
				h = () => async (t, e) => {
					const s = e(),
						r = Object(a.e)(s, {}),
						n = Object(p.a)(s),
						o = Object(m.I)(s) || Object(m.J)(s),
						i = Object(f.d)(s);
					let d = 0;
					o && r && (d = n ? i ? Object(l.i)(s) : Object(l.j)(s) : (t => {
						const {
							inboxCount: e,
							basicChannelCount: s
						} = E(t);
						return e + s
					})(s), g(d, r), t(j({
						hasUnreadMessages: !!d
					})))
				}, C = () => async (t, e) => {
					{
						t(h());
						const s = E(e());
						Object(c.c)(s)
					}
				}, T = t => async (e, s) => {
					const r = s();
					if (Object(p.a)(r)) {
						const s = Object(l.e)(r),
							n = Object(l.h)(r),
							{
								basicChannelCount: o,
								inboxCount: i
							} = t;
						if (s !== o) {
							const t = Object(O.e)({
								count: o,
								key: u.c.ChatTab
							});
							e(Object(O.a)(t))
						}
						if (i && i !== n) {
							const t = Object(O.e)({
								count: i,
								key: u.c.MessageTab
							});
							e(Object(O.a)(t))
						}(s !== o || i && i !== n) && e(h())
					} else {
						const s = Object(b.a)(r),
							n = Object(b.b)(r),
							o = Object(m.E)(r),
							{
								basicChannelCount: a,
								inboxCount: c
							} = t;
						s !== a && e(Object(i.b)({
							...n,
							basicChannelCount: a
						})), c && c !== o && e(Object(d.b)({
							inboxCount: c
						})), (s !== a || c && c !== o) && e(h())
					}
				}
		},
		"./src/reddit/constants/errors.ts": function(t, e, s) {
			"use strict";
			var r, n;
			s.d(e, "a", (function() {
					return r
				})),
				function(t) {
					t.BannedProfile = "BANNED", t.DeletedProfile = "DELETED", t.NotFoundProfile = "NOT_FOUND", t.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(t) {
					t.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/endpoints/me/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return i
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts");
			const i = t => Object(o.a)(t, {
				endpoint: `${r.a.gatewayUrl}/desktopapi/v1/me`,
				method: n.cb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(t, e, s) {
			"use strict";
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts");
			e.a = async t => Object(n.a)(Object(o.a)(t, [i.a]), {
				endpoint: `${t.apiUrl}/subreddit_permissions`,
				method: r.cb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return o
			})), s.d(e, "b", (function() {
				return a
			})), s.d(e, "a", (function() {
				return b
			}));
			var r = s("./src/reddit/helpers/flair.ts"),
				n = s("./src/reddit/models/PostDraft/index.ts");
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
				a = t => {
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
				c = t => t.title.substring(0, 300),
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
					flair_text: Object(r.g)(t) || null,
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
					title: c(t),
					body: u(t),
					spoiler: t.isSpoiler,
					nsfw: t.isNSFW,
					original_content: t.isOC,
					...l(t.flair),
					send_replies: t.sendReplies,
					is_public_link: t.isPublicLink
				})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return a
			})), s.d(e, "b", (function() {
				return u
			})), s.d(e, "c", (function() {
				return l
			}));
			var r = s("./src/config.ts");
			const n = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				o = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				i = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				d = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				a = "badgeCountSync",
				c = t => window.document.querySelector(`link[href="${t}"]`),
				u = (t = !0) => {
					const e = c(t ? i : n),
						s = c(t ? d : o);
					e && s && (e.href = t ? n : i, s.href = t ? o : d)
				},
				l = t => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: a,
						badgeCounts: t
					})
				}
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(t, e, s) {
			"use strict";
			var r;
			s.d(e, "a", (function() {
					return r
				})), s.d(e, "b", (function() {
					return n
				})),
				function(t) {
					t.Off = "OFF", t.Lenient = "LENIENT", t.Moderate = "MODERATE", t.Strict = "STRICT"
				}(r || (r = {}));
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
		"./src/reddit/models/Badge/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return r
			})), s.d(e, "e", (function() {
				return d
			})), s.d(e, "f", (function() {
				return a
			})), s.d(e, "d", (function() {
				return l
			})), s.d(e, "c", (function() {
				return n
			})), s.d(e, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, o, i = s("./src/config.ts");

			function d(t) {
				return "userId" in t
			}

			function a(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function c(t, e, s) {
				const r = s.media[0],
					n = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(s => {
						const n = r[s],
							[i, d] = s.split("x").map(t => parseInt(t));
						(i < o.width && i >= t || d < o.height && d >= e) && (o = {
							height: d,
							width: i,
							url: n
						})
					}), !o.url && n.length) {
					const t = Object.keys(r)[0],
						e = r[t],
						[s, n] = t.split("x").map(t => parseInt(t));
					o = {
						height: n,
						width: s,
						url: e
					}
				}
				return o.url
			}

			function u(t) {
				return t.startsWith("https") ? t : `${i.a.assetPath}/${t}`
			}

			function l(t, e, s) {
				const r = c(t, e, s),
					n = c(2 * t, 2 * e, s);
				return {
					url: u(r),
					url2x: u(n)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(r || (r = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.DirectMessages = "directMessages", t.MessageTab = "messageTab", t.ChatRooms = "chatRooms", t.ChatRoomMentions = "chatRoomMentions"
			}(n || (n = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Duplicates/index.ts": function(t, e, s) {
			"use strict";

			function r(t, e) {
				return `${t}-sort[${e.sort}]-crossposts_only[${e.crossposts_only}]`
			}
			s.d(e, "a", (function() {
				return r
			}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return r
			})), s.d(e, "c", (function() {
				return n
			})), s.d(e, "a", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				d = s("./node_modules/lodash/merge.js"),
				a = s.n(d),
				c = s("./node_modules/lodash/pick.js"),
				u = s.n(c),
				l = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/comment/constants.ts"),
				p = s("./src/reddit/actions/contentGate.ts"),
				f = s("./src/reddit/actions/frontpage/constants.ts"),
				m = s("./src/reddit/actions/header.ts"),
				O = s("./src/reddit/actions/modQueue/constants.ts"),
				_ = s("./src/reddit/actions/pages/constants.ts"),
				j = s("./src/reddit/actions/pages/modListing/constants.ts"),
				g = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				P = s("./src/reddit/actions/pages/postCreation.ts"),
				E = s("./src/reddit/actions/pages/postDraft.ts"),
				h = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				C = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				T = s("./src/reddit/actions/pages/profilePosts.ts"),
				y = s("./src/reddit/actions/pages/search.ts"),
				D = s("./src/reddit/actions/pages/subreddit.ts"),
				x = s("./src/reddit/actions/pages/topic.ts"),
				A = s("./src/reddit/actions/postCreation/constants.ts"),
				R = s("./src/reddit/actions/postDraft.ts"),
				S = s("./src/reddit/actions/preferences.ts"),
				N = s("./src/reddit/actions/redditEmbed.ts"),
				I = s("./src/reddit/actions/search.ts"),
				v = s("./src/reddit/actions/structuredStyles/constants.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				L = s("./src/reddit/actions/users.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				M = s("./src/reddit/constants/preferences.ts"),
				F = s("./src/reddit/constants/theme.ts"),
				U = s("./src/reddit/models/PostCreationForm/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				q = s("./src/reddit/models/User/index.ts");
			! function(t) {
				t.Whitelisted = "whitelisted", t.Everyone = "everyone"
			}(r || (r = {})),
			function(t) {
				t.Whitelisted = "nobody", t.Everyone = "everyone"
			}(n || (n = {}));
			const B = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "lang", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...M.a, "loginOtpEnabled"],
				$ = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: q.a,
					commentMode: U.h.RICH_TEXT,
					layout: w.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.r.CONFIDENCE,
					editorMode: U.h.RICH_TEXT,
					geopopular: void 0,
					globalTheme: F.a,
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
				H = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				V = (t, e) => {
					if (!e) return t;
					const s = u()({
							...e.account,
							...e
						}, B),
						r = e.subreddit,
						n = {
							...t.subreddit
						};
					Object.keys(r || {}).forEach(t => {
						n[t] = {
							...H,
							...r && r[t]
						}
					});
					const o = {
						...t,
						...s,
						subreddit: n
					};
					if (o.useMarkdown !== t.useMarkdown) {
						const t = o.useMarkdown ? U.h.MARKDOWN : U.h.RICH_TEXT;
						o.editorMode = t, o.commentMode = t
					}
					return i()(o, t) ? t : o
				},
				Q = (t, e, s) => V(t, {
					subreddit: {
						[e]: {
							...H,
							...t.subreddit[e],
							...s
						}
					}
				});
			e.d = (t = $, e) => {
				switch (e.type) {
					case b.l:
					case b.s: {
						const {
							editorMode: s
						} = e.payload;
						return {
							...t,
							commentMode: s
						}
					}
					case A.s:
					case A.M: {
						const {
							editorMode: s
						} = e.payload;
						return {
							...t,
							editorMode: s
						}
					}
					case m.d:
						return {
							...t, subscriptionsPinned: !0
						};
					case m.e:
						return {
							...t, subscriptionsPinned: !1
						};
					case R.g: {
						const {
							kind: s
						} = e.payload;
						return {
							...t,
							editorMode: s === G.b.Markdown ? U.h.MARKDOWN : U.h.RICH_TEXT
						}
					}
					case S.h: {
						const {
							layout: s
						} = e.payload;
						return t.layout === s ? t : {
							...t,
							layout: s
						}
					}
					case S.o:
						return void 0 !== e.payload ? {
							...t,
							rpanDuDismissalTime: e.payload
						} : t;
					case S.p: {
						const {
							layout: s,
							subredditId: r
						} = e.payload;
						return Q(t, r, {
							layout: s
						})
					}
					case S.e:
						return {
							...t, hasSeenCustomizeFlyout: !0
						};
					case S.m:
						return t.profileLayout === e.payload.profileLayout ? t : {
							...t,
							profileLayout: e.payload.profileLayout
						};
					case p.g:
						return {
							...t, over18: !0
						};
					case S.b:
						return void 0 !== e.payload ? {
							...t,
							autoplayVideo: e.payload.autoplayVideo
						} : t;
					case S.i:
						return void 0 !== e.payload ? {
							...t,
							nightmode: e.payload.nightmode
						} : t;
					case S.r:
						if (void 0 !== e.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							} = e.payload;
							return {
								...t,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return t;
					case v.d:
						return e.payload.isNightmodeOn ? {
							...t,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : t;
					case v.e:
						return e.payload.nightmodeTempUpdated ? {
							...t,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : t;
					case S.f:
						return void 0 !== e.payload ? {
							...t,
							hamburgerTray: e.payload.set
						} : {
							...t,
							hamburgerTray: !t.hamburgerTray
						};
					case S.c:
						return void 0 !== e.payload ? {
							...t,
							collapsedTraySections: a()({}, t.collapsedTraySections, e.payload)
						} : t;
					case p.a:
					case p.b:
					case p.h:
					case p.i:
					case p.f:
					case p.j:
					case j.e:
					case j.h:
					case _.a:
					case _.e:
					case _.b:
					case _.f:
					case _.d:
					case _.h:
					case f.b:
					case D.SUBREDDIT_LOADED:
					case g.b:
					case g.a:
					case h.e:
					case C.e:
					case C.b:
					case T.PROFILE_POSTS_LOADED:
					case f.f:
					case k.i:
					case I.c:
					case N.b:
					case P.PAGE_LOADED:
					case E.PAGE_LOADED:
					case S.j:
					case y.SEARCH_RESULTS_RECEIVED:
					case S.a:
					case L.c:
					case x.TOPIC_DATA_LOADED:
						return e.payload && e.payload.preferences ? V(t, e.payload.preferences) : t;
					case S.q: {
						const {
							subredditId: s,
							prefs: r
						} = e.payload;
						return Q(t, s, r)
					}
					case h.d:
					case C.d:
					case C.a:
					case T.PROFILE_POSTS_FAILED: {
						let s = t;
						if (e.payload && e.payload.account) {
							const {
								nightmode: r,
								showPresence: n
							} = e.payload.account;
							t.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), t.showPresence !== n && (s = {
								...s,
								showPresence: n
							})
						}
						return s
					}
					case O.h:
					case O.j:
					case O.i:
					case O.g:
					case O.f:
					case O.n:
					case O.m:
					case O.p:
					case O.q:
					case O.w:
					case O.v:
						return e.payload && e.payload.response && e.payload.response.preferences ? V(t, e.payload.preferences) : t;
					case S.n: {
						const s = e.payload,
							{
								showActiveCommunities: r
							} = s.additional;
						return t.showActiveCommunities !== r ? {
							...t,
							showActiveCommunities: r
						} : t
					}
					default:
						return t
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return u
			})), s.d(e, "b", (function() {
				return l
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/loadableAction/index.ts"),
				i = s("./src/reddit/routes/postCreation/constants.ts");
			const d = [i.b, i.c, i.a],
				a = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(t) {
						const e = this.resolve(t);
						return !1 !== this.resolved[e] && !!s.m[e]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(t) {
						const e = this.resolve(t);
						return this.resolved[e] = !1, this.importAsync(t).then(t => (this.resolved[e] = !0, t))
					},
					requireSync(t) {
						const e = this.resolve(t);
						return s(e)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				c = t => `/${t}/submit`,
				u = (t, e) => {
					return i.c.replace(/:subredditName/, t) + (e ? `?collection=${e}` : "")
				},
				l = t => i.a.replace(/:profileName/, t),
				b = {
					action: Object(o.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(t => t.postCreationPageRequested)),
					component: a,
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
		"./src/reddit/selectors/appBadges.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return a
			})), s.d(e, "e", (function() {
				return c
			})), s.d(e, "d", (function() {
				return u
			})), s.d(e, "c", (function() {
				return l
			})), s.d(e, "f", (function() {
				return b
			})), s.d(e, "a", (function() {
				return p
			})), s.d(e, "h", (function() {
				return f
			})), s.d(e, "g", (function() {
				return m
			})), s.d(e, "j", (function() {
				return O
			})), s.d(e, "i", (function() {
				return _
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/chat.ts"),
				o = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				i = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const a = t => t.appBadges.badges,
				c = Object(r.a)(o.a, a, n.a, (t, e, s) => t ? e && e.directMessages && e.directMessages.count || 0 : s),
				u = Object(r.a)(a, t => t && t.chatRooms && t.chatRooms.count || 0),
				l = Object(r.a)(a, t => t && t.chatRoomMentions && t.chatRoomMentions.count || 0),
				b = Object(r.a)(o.a, n.a, c, u, l, (t, e, s, r, n) => {
					if (t) {
						return s + r + n > 0
					}
					return e > 0
				}),
				p = Object(r.a)(a, t => t && t.activityTab && t.activityTab.count || 0),
				f = Object(r.a)(a, t => t && t.messageTab && t.messageTab.count || 0),
				m = Object(r.a)(p, f, (t, e) => t + e),
				O = Object(r.a)(c, f, (t, e) => t + e),
				_ = Object(r.a)(c, m, (t, e) => t + e);
			Object(r.a)(d.J, o.a, _, O, f, d.E, c, n.a, i.d, (t, e, s, r, n, o, i, d, a) => {
				if (!t) return 0;
				const c = () => {
					return {
						inboxCount: e ? n : o || 0,
						basicChannelCount: e ? i : d || 0
					}
				};
				let u = 0;
				return u = e ? a ? s : r : (() => {
					const {
						inboxCount: t,
						basicChannelCount: e
					} = c();
					return t + e
				})()
			})
		},
		"./src/reddit/selectors/chat.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return i
			})), s.d(e, "a", (function() {
				return d
			})), s.d(e, "d", (function() {
				return a
			})), s.d(e, "c", (function() {
				return c
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts");
			const i = t => t.chat.unread.count,
				d = Object(r.a)(i, t => t.basicChannelCount),
				a = (Object(r.a)(i, t => t.subredditChannelCount), t => !(t.chat.isInited || t.chat.unread.api.pending)),
				c = (t, e) => {
					const {
						chatConfig: s
					} = n.c;
					return Object(o.a)(s)(t, e)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return u
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const a = Object(r.a)(t => Object(o.c)(t, {
					experimentName: n.Zb,
					experimentEligibilitySelector: c
				}), i.a),
				c = t => Object(d.I)(t) || Object(d.J)(t),
				u = Object(r.a)(a, t => t === n.fc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(t, e, s) {
			"use strict";
			s.d(e, "d", (function() {
				return u
			})), s.d(e, "c", (function() {
				return b
			})), s.d(e, "b", (function() {
				return f
			})), s.d(e, "a", (function() {
				return O
			})), s.d(e, "f", (function() {
				return _
			})), s.d(e, "e", (function() {
				return g
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const a = Object(r.a)(t => Object(o.c)(t, {
					experimentName: n.cc,
					experimentEligibilitySelector: c
				}), i.a),
				c = t => Object(d.I)(t) || Object(d.J)(t),
				u = Object(r.a)(a, t => t === n.ic.Redesign),
				l = Object(r.a)(t => Object(o.c)(t, {
					experimentName: n.bc,
					experimentEligibilitySelector: c
				}), i.a),
				b = Object(r.a)(l, t => t === n.hc.Enabled),
				p = Object(r.a)(t => Object(o.c)(t, {
					experimentName: n.ac,
					experimentEligibilitySelector: c
				}), i.a),
				f = Object(r.a)(p, t => t === n.gc.Enabled),
				m = Object(r.a)(t => Object(o.c)(t, {
					experimentName: n.R,
					experimentEligibilitySelector: c
				}), i.a),
				O = Object(r.a)(m, t => t === n.eb.NoOverflow),
				_ = Object(r.a)(m, t => t === n.eb.UndoBar),
				j = Object(r.a)(t => Object(o.c)(t, {
					experimentName: n.T,
					experimentEligibilitySelector: c
				}), i.a),
				g = Object(r.a)(u, j, (t, e) => t && e === n.gb.Enabled)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.d2588faf200f7457db3b.js.map