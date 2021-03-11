// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.e588c1b2ecd60bfabb87.js
// Retrieved at 3/11/2021, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"], {
		"./src/graphql/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"712476d48c90"}')
		},
		"./src/graphql/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/graphql/operations/UpdateAutomatedReportingSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/graphql/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(r.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let s = e;
				return "/" !== s.substr(-1) && (s += "/"), s += Object(r.c)(t)
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			const r = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				o = "APP_BADGES__UPDATED",
				i = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return _
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				i = s("./src/graphql/operations/BadgeIndicators.json"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = e => Object(d.a)(e, {
					...i
				}),
				a = s("./src/reddit/models/Badge/index.ts");
			const u = Object(r.a)(n.c),
				l = Object(r.a)(n.b),
				b = Object(r.a)(n.d),
				m = Object(r.a)(n.a),
				p = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: a.b.Numbered
					}
				}),
				f = (e, t, s) => ({
					[a.c.DirectMessages]: {
						count: e,
						style: a.b.Numbered
					},
					[a.c.ChatRooms]: {
						count: t,
						style: a.b.Numbered
					},
					[a.c.ChatRoomMentions]: {
						count: s,
						style: a.b.Numbered
					}
				}),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					e(u());
					const r = await async function(e) {
						const t = await c(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(s);
					r ? (e(l(r)), e(Object(o.d)())) : e(m())
				};
			const _ = () => async e => {
				const t = p({
					key: a.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "d", (function() {
				return T
			}));
			var r, n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/chat/endpoints/sendbird/index.ts"),
				d = s("./src/reddit/actions/tabBadging.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				a = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(r || (r = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: m
			} = r, p = Object(o.a)(u), f = Object(o.a)(l), O = Object(o.a)(b), _ = Object(o.a)(m);
			let j;
			const E = 5 * n.db,
				T = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t();
					if (!Object(a.K)(r) || !Object(c.d)(r)) return clearTimeout(j);
					j || e((() => async (e, t, {
						apiContext: s
					}) => {
						const r = t(),
							{
								session: n
							} = r.user;
						if (n && Object(a.K)(r) && Object(c.d)(r)) {
							e(O());
							const t = await Object(i.f)(s(), n);
							t && t.ok ? (e(_({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(d.d)())) : e(f({
								error: t.error
							}))
						}
					})()), j = setTimeout(() => {
						e(T())
					}, E)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			}));
			const r = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "b", (function() {
				return D
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/camelCase.js"),
				o = s.n(n),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/sentry/index.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/graphql/operations/FetchContentControls.json"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/reddit/models/AutomatedReporting/index.ts");
			const m = e => {
				switch (e) {
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
			var p = s("./node_modules/lodash/isEmpty.js"),
				f = s.n(p),
				O = s("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				_ = s("./src/graphql/operations/UpdatePostRequirements.json"),
				j = s("./src/reddit/endpoints/subreddit/about.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/contentControls.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/actions/contentControls/constants.ts");
			const g = Object(d.a)(y.b),
				h = Object(d.a)(y.c),
				S = Object(d.a)(y.a),
				C = e => async (t, s, {
					gqlContext: r
				}) => {
					const n = {
						subredditName: e.toLowerCase()
					};
					if (Object(T.a)(s(), n)) return;
					t(h(n));
					let o = Object(P.F)(s(), e);
					if (!o) {
						const s = await Object(j.a)(r(), e, !1);
						if (s.ok) {
							o = s.body.data.subreddit.id
						}
						if (!o) {
							const e = s.error || {
								type: i.E.NOT_FOUND_ERROR
							};
							return void t(S({
								...n,
								error: e
							}))
						}
					}
					let d = null;
					const a = await ((e, t) => Object(l.a)(e, {
						...u,
						variables: t
					}).then(e => {
						var t, s;
						if (e.ok) {
							const r = null === (s = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === s ? void 0 : s.subreddit;
							return {
								...e,
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
						return e
					}))(r(), {
						subredditId: o
					});
					if (a.ok) {
						const e = a.body;
						d = e.data.subreddit && e.data.subreddit
					}
					if (d) t(g({
						...n,
						...d
					}));
					else {
						const s = a.error || {
							type: i.E.UNKNOWN_ERROR
						};
						t(S({
							...n,
							error: s
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: a.body,
								responseOk: a.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, I = Object(d.a)(y.d), D = (e, t) => async (s, n, {
					gqlContext: o
				}) => {
					const i = e.toLowerCase(),
						d = Object(P.F)(n(), e);
					if (!d) return {
						success: !1
					};
					const c = await ((e, t, s) => {
						const r = [Promise.resolve(null), Promise.resolve(null)];
						if (s.postRequirements && !f()(s.postRequirements)) {
							const n = {
								subredditId: t,
								...s.postRequirements
							};
							r[0] = Object(l.a)(e, {
								..._,
								variables: {
									input: n
								}
							})
						}
						if (s.automatedReporting && !f()(s.automatedReporting)) {
							const n = {
								subredditId: t
							};
							s.automatedReporting.levelAbuse && (n.automatedReportingLevelAbuse = s.automatedReporting.levelAbuse), s.automatedReporting.levelHate && (n.automatedReportingLevelHate = s.automatedReporting.levelHate), r[1] = Object(l.a)(e, {
								...O,
								variables: {
									input: n
								}
							})
						}
						return Promise.all(r).then(([e, t]) => {
							let s = !0,
								r = [];
							if (e) {
								const t = e.body,
									n = t.data.updatePostRequirements.fieldErrors;
								s = s && t.data.updatePostRequirements.ok, n && (r = r.concat(n))
							}
							if (t) {
								const e = t.body,
									n = e.data.updateSubredditSettings.fieldErrors;
								s = s && e.data.updateSubredditSettings.ok, n && (r = r.concat(n))
							}
							return {
								ok: s,
								fieldErrors: r.length ? r : null
							}
						})
					})(o(), d, t);
					if (c.ok) return s(I({
						subredditName: i,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = R(c.fieldErrors);
						return s(Object(a.e)({
							duration: a.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: E.b.Error,
							text: e && e.length ? e[0].message : r.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: e || void 0
						}
					}
				}, R = e => e && e.map(e => ({
					...e,
					field: o()(e.field)
				}))
		},
		"./src/reddit/actions/frontpage/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return a
			}));
			const r = "PAGE__FRONTPAGE_PENDING",
				n = "PAGE__FRONTPAGE_LOADED",
				o = "PAGE__FRONTPAGE_FAILED",
				i = "PAGE__FRONTPAGE_RELOADED",
				d = "FRONTPAGE__MORE_POSTS_PENDING",
				c = "FRONTPAGE__MORE_POSTS_LOADED",
				a = "FRONTPAGE__MORE_POSTS_FAILED"
		},
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				o = Object(r.a)(n)
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(n)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				o = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				i = s("./src/reddit/selectors/user.ts");
			const d = "MOD_PERMS__REQUEST_LOADED",
				c = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(d), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(i.j)(t());
					if (s) {
						const t = Object(o.e)(s);
						await e(Object(n.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				o = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return k
			})), s.d(t, "PAGE_LOADED", (function() {
				return L
			})), s.d(t, "PAGE_FAILED", (function() {
				return N
			})), s.d(t, "pagePending", (function() {
				return v
			})), s.d(t, "pageLoaded", (function() {
				return w
			})), s.d(t, "pageFailed", (function() {
				return F
			})), s.d(t, "postCreationPageDataRequested", (function() {
				return M
			})), s.d(t, "postCreationPageRequested", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				i = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makePostCreationPageKey/index.ts"),
				a = s("./src/reddit/actions/contentControls/index.ts"),
				u = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				b = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/postCreation/general.ts"),
				f = s("./src/reddit/actions/profile/index.ts"),
				O = s("./src/reddit/actions/subreddit.ts"),
				_ = s("./src/reddit/actions/subredditDuplicates.ts"),
				j = s("./src/config.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				T = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				y = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				g = s("./src/reddit/helpers/trackers/postComposer.ts"),
				h = s("./src/reddit/models/User/index.ts"),
				S = s("./src/reddit/selectors/contentControls.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				I = s("./src/reddit/selectors/postCreations.ts"),
				D = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/profile.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const k = "POST_CREATION__PAGE_PENDING",
				L = "POST_CREATION__PAGE_LOADED",
				N = "POST_CREATION__PAGE_FAILED",
				v = Object(d.a)(k),
				w = Object(d.a)(L),
				F = Object(d.a)(N),
				U = () => async (e, t) => {
					const s = t(),
						r = Object(I.a)(s);
					r !== Object(I.fb)(s) && e(Object(p.g)({
						submissionType: r
					}))
				}, M = e => async (t, s, r) => {
					const {
						collectionId: o,
						profileName: d,
						subredditName: u
					} = e, m = Object(c.a)(e), p = s(), _ = p.creations.api.page.pending[m], P = p.creations.api.page.fetched[m], g = p.creations.api.page.error[m];
					if (_) return;
					if (P && !g) return void t(U());
					const C = [];
					t(v({
						key: m
					}));
					let I = u;
					!u && d && (I = `u_${d}`), C.push(((e, t) => Object(E.a)(e, {
						method: n.cb.GET,
						endpoint: Object(T.a)(`${j.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(r.apiContext(), {
						subredditName: I,
						collectionId: o
					})), d && (C.push(t(f.d(d))), C.push(t(f.b(d))));
					const [D] = await Object(y.a)("postCreation", () => Promise.all(C));
					if (D.ok) {
						const e = D.body,
							{
								posts: r = {},
								subredditAboutInfo: n
							} = e;
						if (t(w({
								key: m,
								meta: p.meta,
								...e,
								posts: r
							})), !Object(x.K)(s())) return;
						if (n) {
							const e = Object.keys(n)[0];
							await t(Object(b.f)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(U());
						const o = [];
						o.push(t(l.o()));
						const d = Object(x.j)(s());
						if (d && d.hasUserProfile && o.push(t(f.d(Object(h.e)(d)))), u && !Object(i.a)(u)) {
							o.push(t(O.o(u))), !!Object(S.b)(s(), {
								subredditName: u
							}) || o.push(t(Object(a.a)(u)))
						}
						await Promise.all(o)
					} else t(F({
						error: D.error,
						key: m
					}))
				}, G = e => async (t, s) => {
					const {
						subredditName: i,
						profileName: d
					} = e.params, c = e.queryParams, a = c.collection;
					if (await t(M({
							collectionId: a,
							profileName: d,
							subredditName: i
						})), !Object(x.K)(s())) return void Object(P.a)(t, s());
					let l;
					if (i ? (l = Object(A.A)(s(), {
							subredditName: i
						}), await t(Object(u.a)({
							subredditName: i
						}))) : d && (l = Object(R.j)(s(), {
							profileName: d
						})), c.source_id) await t(((e, t) => async (s, r) => {
						const {
							subredditName: n,
							profileName: o
						} = e, i = [];
						let d;
						n ? d = Object(A.F)(r(), n) : o && (d = Object(x.eb)(r(), {
							userName: o
						})), d && i.push(s(Object(_.b)(d, t))), i.push(s(Object(m.K)(t))), await Promise.all(i);
						const c = Object(D.f)(r(), {
							postId: t
						});
						s(Object(p.k)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, c.source_id));
					else if (a) {
						const n = Object(C.q)(s(), {
							collectionId: a
						});
						l && n && n.subredditId === l.id || t(Object(r.c)(Object(o.a)(e.url, ["collection"])))
					}((e, t) => {
						const s = e.platform.lastPage;
						t && s && s.meta && s.meta.name === n.Db.POST_CREATION && g.x(e)
					})(s(), i)
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return m
			})), s.d(t, "PAGE_LOADED", (function() {
				return p
			})), s.d(t, "PAGE_FAILED", (function() {
				return f
			})), s.d(t, "pagePending", (function() {
				return O
			})), s.d(t, "pageLoaded", (function() {
				return _
			})), s.d(t, "pageFailed", (function() {
				return j
			})), s.d(t, "postDraftPageDataRequested", (function() {
				return E
			})), s.d(t, "postDraftRequested", (function() {
				return T
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makePostDraftPageKey/index.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				i = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const m = "POST_DRAFT__PAGE_PENDING",
				p = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				O = Object(r.a)(m),
				_ = Object(r.a)(p),
				j = Object(r.a)(f),
				E = e => async (t, s, r) => {
					const {
						draftId: m,
						profileName: p
					} = e, f = Object(n.a)(e), O = s(), E = O.creations.api.page.pending[f], T = O.creations.api.page.fetched[f], P = O.creations.api.page.error[f];
					if (E || T && !P || !m) return;
					t(o.d(p));
					const y = await Object(b.a)("postDraft", () => ((e, t, s) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${s}/${t}`)),
						method: d.cb.GET
					}))(r.apiContext(), m, p));
					if (y.ok) {
						const e = y.body;
						e.drafts[m].kind = Object(l.b)(e.drafts[m].kind), t(_({
							...e,
							key: f
						}))
					} else t(j({
						error: y.error,
						key: f
					}))
				}, T = e => async (t, s, r) => {
					await t(E(e.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return D
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return R
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return A
			})), s.d(t, "profilePostsPending", (function() {
				return x
			})), s.d(t, "profilePostsLoaded", (function() {
				return k
			})), s.d(t, "profilePostsFailed", (function() {
				return L
			})), s.d(t, "profilePostsRequested", (function() {
				return N
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return v
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return w
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return F
			})), s.d(t, "morePostsPending", (function() {
				return U
			})), s.d(t, "morePostsLoaded", (function() {
				return M
			})), s.d(t, "morePostsFailed", (function() {
				return G
			})), s.d(t, "morePostsRequested", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				a = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				l = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/config.ts"),
				E = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				T = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				y = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const g = (e, t, s) => Object(P.a)(e, {
				data: s,
				endpoint: Object(E.a)(Object(y.a)(`${j.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`)),
				method: T.cb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var h = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				I = s("./src/reddit/selectors/profile.ts");
			const D = "PAGE__PROFILE_POSTS_PENDING",
				R = "PAGE__PROFILE_POSTS_LOADED",
				A = "PAGE__PROFILE_POSTS_FAILED",
				x = Object(o.a)(D),
				k = Object(o.a)(R),
				L = Object(o.a)(A),
				N = e => async (t, s, r) => {
					const {
						queryParams: o,
						params: j
					} = e, {
						sort: E,
						t: T
					} = Object(u.b)(o), {
						profileName: P
					} = j, y = Object(i.a)(`u_${P}`, E, o), D = s(), R = D.listings.postOrder.ids[y], A = Object(C.c)(D, {
						listingKey: y
					}), N = Object(C.d)(D, {
						listingKey: y
					});
					if (await t(m.d(P)), N || R && !A) return;
					const v = {
						...n()(e.queryParams, [...O.l, ...O.k, O.h]),
						layout: Object(_.O)(D, {}).toLowerCase(),
						sort: E,
						t: Object(h.a)(E, T)
					};
					t(x({
						key: y
					}));
					const w = await Object(S.a)("profilePosts", () => g(r.apiContext(), P, v));
					if (!w.ok) return t(L({
						account: w.body.data ? w.body.data.account : null,
						error: w.body.reason ? {
							type: w.body.reason
						} : w.error,
						key: y
					})), w.body.reason === f.a.DeletedProfile && t(Object(d.p)({
						profileName: P
					})), void t(b.l(w.status));
					const F = w.body;
					t(k({
						key: y,
						meta: s().meta,
						...F
					}));
					const U = Object(I.m)(s(), P),
						{
							pinned: M
						} = F;
					t(Object(l.h)({
						profileId: U,
						pinned: M
					})), await Promise.all([t(Object(u.c)(P)), t(Object(p.q)()), t(Object(a.b)()), t(c.o(P))])
				}, v = "PROFILE_POSTS__MORE_POSTS_PENDING", w = "PROFILE_POSTS__MORE_POSTS_LOADED", F = "PROFILE_POSTS__MORE_POSTS_FAILED", U = Object(o.a)(v), M = Object(o.a)(w), G = Object(o.a)(F), q = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t(),
						{
							currentPage: o
						} = r.platform;
					if (!o || !o.routeMatch) return;
					const {
						queryParams: d,
						params: c
					} = o.routeMatch.match, {
						sort: a,
						t: l
					} = Object(u.b)(d), {
						profileName: b
					} = c, m = Object(i.a)(`u_${b}`, a, d), p = Object(C.g)(r, {
						listingKey: m
					});
					if (!p) return;
					const f = Object(C.d)(r, {
							listingKey: m
						}),
						j = Object(C.e)(r, {
							listingKey: m,
							token: p.token
						});
					if (f || j) return;
					e(U({
						key: m,
						fetchedToken: p.token
					}));
					const E = {
							after: p.token,
							dist: p.dist,
							sort: a,
							t: l,
							...n()(d, O.l),
							layout: Object(_.O)(r, {}).toLowerCase()
						},
						T = await g(s(), b, E),
						P = r.listings.postOrder.ids[m],
						y = T.body.postIds || [],
						h = {
							...T.body,
							postIds: y.filter(e => !P || !P.includes(e))
						};
					T.ok ? (e(M({
						fetchedToken: p.token,
						key: m,
						meta: r.meta,
						...h
					})), await e(Object(u.c)(b))) : e(G({
						account: T.body.data ? T.body.data.account : null,
						error: T.error,
						fetchedToken: p.token,
						key: m
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				p = Object(o.a)(m),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				O = "PINNEDPOST__UNPIN_POST_SUCCESS",
				_ = Object(o.a)(f),
				j = Object(o.a)(O),
				E = "PINNEDPOST__PIN_POST_PENDING",
				T = "PINNEDPOST__UNPIN_POST_PENDING",
				P = Object(o.a)(E),
				y = Object(o.a)(T),
				g = "PINNEDPOST__PIN_POST_FAILURE",
				h = "PINNEDPOST__UNPIN_POST_FAILURE",
				S = Object(o.a)(g),
				C = Object(o.a)(h),
				I = e => Object(d.e)({
					buttonAction: x(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				D = (e, t) => Object(d.e)({
					buttonAction: x(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: t ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				R = () => Object(d.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				A = () => Object(d.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				x = (e, t = !1) => async (s, o, {
					apiContext: m
				}) => {
					const p = o(),
						f = p.posts.models[e];
					if (!f) return;
					const O = !Object(l.q)(p, {
						postId: e
					});
					if (O && f.isRemoved) return s((() => Object(d.e)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const E = f.author,
						T = Object(b.m)(p, E),
						[g, h, x, k, L] = O ? [P, _, S, I, R] : [y, j, C, D, A];
					if (O) {
						if (Object(l.L)(p, {
								profileName: E
							}).length >= n.V) return void s(Object(i.i)(c.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const N = Object(l.n)(p, e, E),
						v = !O && N;
					s(g({
						postId: e,
						profileId: T
					})), (await Object(a.t)(m(), e, O, !0)).ok ? (s(h({
						postId: e,
						profileId: T
					})), t || s(k(e, v))) : (s(x({
						postId: e,
						profileId: T
					})), s(L()))
				}
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return f
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "j", (function() {
				return I
			})), s.d(t, "r", (function() {
				return D
			})), s.d(t, "q", (function() {
				return R
			})), s.d(t, "s", (function() {
				return A
			})), s.d(t, "t", (function() {
				return x
			})), s.d(t, "u", (function() {
				return k
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "x", (function() {
				return N
			})), s.d(t, "y", (function() {
				return v
			})), s.d(t, "z", (function() {
				return w
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "p", (function() {
				return U
			})), s.d(t, "o", (function() {
				return G
			})), s.d(t, "w", (function() {
				return q
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "l", (function() {
				return K
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/isUrl/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				a = s("./src/reddit/models/PostCreationForm/index.ts"),
				u = s("./src/reddit/routes/postCreation/constants.ts"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/reddit/selectors/postCollection.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				p = s("./src/reddit/actions/postCreation/constants.ts");
			const f = Object(o.a)(p.n),
				O = Object(o.a)(p.z),
				_ = (Object(o.a)(p.s), e => {
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
				j = Object(o.a)(p.b),
				E = Object(o.a)(p.c),
				T = Object(o.a)(p.d),
				P = Object(o.a)(p.e),
				y = Object(o.a)(p.f),
				g = Object(o.a)(p.g),
				h = Object(o.a)(p.h),
				S = Object(o.a)(p.i),
				C = Object(o.a)(p.j),
				I = Object(o.a)(p.q),
				D = Object(o.a)(p.O),
				R = Object(o.a)(p.N),
				A = (Object(o.a)(p.P), Object(o.a)(p.Q)),
				x = Object(o.a)(p.R),
				k = Object(o.a)(p.S),
				L = Object(o.a)(p.T),
				N = Object(o.a)(p.U),
				v = Object(o.a)(p.V),
				w = Object(o.a)(p.W),
				F = Object(o.a)(p.r),
				U = e => async (t, s, {
					apiContext: r
				}) => {
					t(T(e)), Object(n.a)(e) && t((e => async (t, s, {
						apiContext: r
					}) => {
						const n = await Object(c.f)(r(), e);
						n.ok && n.body && n.body.json && n.body.json.data && t(O(n.body.json.data))
					})(e))
				}, M = Object(o.a)(p.A), G = (e, t) => async (s, n) => {
					s(M()), s(e ? Object(r.b)(u.b) : Object(r.b)(Object(m.V)(n(), {
						pageLayer: t
					})))
				}, q = e => async t => {
					t(i.i(e))
				}, B = e => async (t, s) => {
					const r = s(),
						n = Object(d.D)(e),
						o = Object(m.B)(r);
					if (n && o) {
						Object(l.a)(r) !== a.c && t(q(a.c))
					} else t(G(!1, e))
				}, K = e => async (t, s) => {
					const r = s();
					Object(b.m)(r, {
						subredditId: e
					}) ? t(i.i(a.a)) : t(i.i(a.b))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return y
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return C
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/actions/postCreation/constants.ts"),
				E = s("./src/reddit/actions/postCreation/general.ts");
			const T = Object(d.a)(j.J),
				P = Object(d.a)(j.K),
				y = Object(d.a)(j.I),
				g = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					let i = r();
					const {
						name: d,
						isProfile: m
					} = e, p = Object(O.e)(i), j = p && !m && Object(l.a)(p.name, d), E = i.creations.api.subreddit.change.pending;
					if (j || E) return;
					const P = Object(u.t)(t);
					if (!d) return void s(h(e, P));
					s(T(e));
					const y = m ? {
						profileName: d
					} : {
						subredditName: d
					};
					if (await s(Object(a.postCreationPageDataRequested)(y)), m || !Object(f.x)(i)) return s(h(e, P));
					const g = e.allowedPostTypes || Object(_.z)(r(), {
						subredditName: d
					});
					if (!g) return void s(h(e, P));
					let S;
					i = r();
					const C = Object(f.fb)(i),
						I = Object(f.x)(i);
					if (C === o.Lb.MEDIA && I) {
						const e = Object(f.P)(i),
							t = Object(b.v)(e),
							s = Object(f.G)(i) && e.items.length > 1,
							r = !t && !s;
						if (s && !g.galleries) S = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !g.images) S = b.p.ImageWillBeRemoved;
						else if (t && !g.videos) {
							const t = i.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							g.images ? s > o.Z && (S = b.p.VideoWillBeRemovedTooLongForGif) : S = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(S ? Object(c.i)(S) : h({
						...e,
						allowedPostTypes: g
					}, P))
				}, h = (e, t, s = !0) => async (o, i) => {
					const {
						name: d,
						isProfile: c
					} = e, a = i().platform.currentPage, u = a.queryParams, l = c ? m.b : m.c;
					let b = "";
					b = d ? l(d) : p.b, b = Object(n.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || a.url.toLowerCase() !== b.toLowerCase()) && (o(P(e)), s && o(Object(E.q)(!0)), o(Object(E.i)()), o(Object(r.c)(b)))
				}, S = e => async (t, s) => {
					const o = s().platform.currentPage,
						i = o.queryParams,
						d = Object(n.a)(o.url, {
							...i,
							collection: e
						});
					t(Object(r.c)(d))
				}, C = () => async (e, t) => {
					const s = t().platform.currentPage,
						n = Object(i.a)(s.url, ["collection"]);
					e(Object(r.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return A
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "p", (function() {
				return w
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "l", (function() {
				return U
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "m", (function() {
				return G
			})), s.d(t, "k", (function() {
				return q
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "n", (function() {
				return K
			})), s.d(t, "s", (function() {
				return z
			})), s.d(t, "r", (function() {
				return J
			})), s.d(t, "g", (function() {
				return X
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return re
			})), s.d(t, "o", (function() {
				return de
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/formatApiError/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/postCreation/general.ts"),
				d = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/PostDraft/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				_ = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts");
			const E = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: f.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: f.b.Markdown,
							body: e.body || void 0
						} : {
							kind: f.b.RichText,
							body: e.body || void 0
						}, {
							subredditId: e.subreddit || void 0,
							contentCategory: e.content_category || void 0,
							created: e.created,
							flair: e.flair,
							id: e.id,
							isChatPost: !!e.discussion_type,
							isNSFW: !!e.nsfw,
							isOriginalContent: !!e.original_content,
							isSpoiler: !!e.spoiler,
							modified: e.modified || void 0,
							sendReplies: !!e.send_replies,
							isPublicLink: !!e.is_public_link,
							title: e.title || "",
							...t
						}
					})(t);
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === j.e.User) {
						const s = Object(O.a)(t, Object(p.g)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(_.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var T = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				y = s("./src/reddit/helpers/trackers/postComposer.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/models/User/index.ts"),
				S = s("./src/reddit/selectors/postCreations.ts"),
				C = s("./src/reddit/selectors/postDraft.ts"),
				I = s("./src/reddit/selectors/profile.ts"),
				D = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts");
			const A = "POST_DRAFT__LIST_PENDING",
				x = "POST_DRAFT__LIST_LOADED",
				k = "POST_DRAFT__LIST_FAILED",
				L = Object(o.a)(A),
				N = Object(o.a)(x),
				v = Object(o.a)(k),
				w = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t();
					if (!Object(R.j)(n) || Object(C.b)(n)) return;
					e(L());
					const o = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.cb.GET
					}))(s());
					o.ok ? e(N(E(o.body))) : e(v(o.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", U = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", M = "POST_DRAFT__SAVE_DRAFT_FAILED", G = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", K = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", $ = Object(o.a)(F), H = Object(o.a)(U), V = Object(o.a)(M), W = Object(o.a)(G), Y = Object(o.a)(q), Q = Object(o.a)(B), z = Object(o.a)(K), J = e => async (t, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = Object(C.g)(i),
						b = Object(S.U)(i);
					if (a || b) return;
					const p = Object(C.h)(i, e);
					if (!p) return;
					t($(p)), y.e(i, p);
					const f = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.cb.PUT : r.cb.POST,
						data: Object(T.a)(t)
					}).then(e => e.body.fields && Object(P.u)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(o(), p, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(T.c)(f.body);
						t(H({
							draftId: s,
							draftsCount: r
						})), e || t(Object(d.a)(p.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === r.E.BAD_CAPTCHA_ERROR ? t(Q()) : e.type === r.E.VALIDATION_ERROR ? t(W(e)) : e.type === r.E.SUBMIT_VALIDATION_ERROR ? t(Y(e)) : t(V(e)), t(Object(c.e)({
							duration: c.a,
							kind: g.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(o.a)(X), ee = e => async (t, s, {
					apiContext: r
				}) => {
					t(Z(e));
					let n = P.e;
					const o = s();
					if (e.subredditId) {
						const t = Object(D.T)(o, {
								subredditId: e.subredditId
							}),
							s = Object(I.p)(o, {
								profileId: e.subredditId
							}),
							r = Object(R.j)(o);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : s && r && (n = {
							isProfile: !0,
							name: Object(h.e)(r)
						})
					}
					await t(Object(d.a)(n, e.id, !1));
					const i = Object(C.h)(s(), e.id);
					i && y.h(s(), i)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ne = Object(o.a)(te), oe = Object(o.a)(se), ie = Object(o.a)(re), de = (e, t) => async (s, o, {
					apiContext: d
				}) => {
					const m = o();
					if (Object(C.a)(m, e)) return;
					const p = Object(C.d)(m, {
						draftId: e
					});
					p && y.f(m, p), s(ie({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.cb.DELETE
					}))(d(), e);
					if (f.ok) {
						const {
							draftsCount: r
						} = Object(T.c)(f.body);
						s(ne({
							draftId: e,
							draftsCount: r
						}));
						const n = Object(a.t)(t);
						e === n && s(Object(i.o)(!0, t))
					} else {
						const t = f.error;
						s(oe({
							draftId: e,
							apiError: t
						})), s(Object(c.e)({
							duration: c.a,
							kind: g.b.Error,
							text: Object(n.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "e", (function() {
				return A
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "k", (function() {
				return w
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "h", (function() {
				return G
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/flair/index.ts"),
				a = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				m = s("./src/reddit/selectors/subreddit.ts");
			const p = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				O = Object(n.a)(p),
				_ = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				j = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				E = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				T = Object(n.a)(j),
				P = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				y = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				g = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				h = Object(n.a)(y),
				S = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				I = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				D = Object(n.a)(C),
				R = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				A = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				x = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				k = Object(n.a)(A),
				L = Object(n.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				N = Object(n.a)(x),
				v = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const o = r(),
						i = Object(m.T)(o, {
							subredditId: e
						}).name;
					s(f());
					const d = await Object(c.k)(n(), i, t);
					if (d.ok) {
						s(O({
							subredditId: e,
							isEnabled: t
						}))
					} else s(_());
					return d.ok
				}, w = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const o = r(),
						i = Object(m.T)(o, {
							subredditId: e
						}).name;
					s(E());
					const d = await Object(c.j)(n(), t, u.d.LinkFlair, i);
					if (d.ok) {
						s(T({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(P());
					return d.ok
				}, F = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const a = n(),
						b = Object(m.T)(a, {
							subredditId: t
						}).name;
					s(g());
					const p = await Object(c.f)(o(), e, b, u.d.LinkFlair);
					let f = p.ok && !(p.body && !1 === p.body.success);
					if (f) {
						const r = p.body;
						if (s(h({
								subredditId: t,
								template: r
							})), r.id) {
							const n = e.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[r.id];
							n ? f = await s(Object(i.d)(t, r.id, n)) : o && (f = await s(Object(i.c)(t, r.id)))
						}
					}
					if (f) {
						const e = Object(d.d)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						s(Object(d.e)(e))
					} else {
						s(S());
						const n = Object(d.d)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						s(Object(d.e)(n))
					}
					return f
				}, U = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const i = n(),
						a = Object(m.T)(i, {
							subredditId: t
						}).name;
					if (s(I()), (await Object(c.b)(o(), e, a)).ok) {
						s(D({
							subredditId: t,
							templateId: e
						}));
						const n = Object(d.d)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						s(Object(d.e)(n))
					} else {
						s(R());
						const n = Object(d.d)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(d.e)(n))
					}
				}, M = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const i = n(),
						a = Object(b.d)(i, {
							subredditId: t
						}).templateIds,
						p = Object(m.T)(i, {
							subredditId: t
						}).name;
					if (s(k({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), p, u.d.LinkFlair, e)).ok) {
						s(L());
						const e = Object(d.d)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						s(Object(d.e)(e))
					} else {
						s(N({
							subredditId: t,
							templateIds: a
						}));
						const n = Object(d.d)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(d.e)(n))
					}
				}, G = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: s
				}) => async (r, n, {
					apiContext: i
				}) => {
					const d = e.flair.filter(e => !Object(a.p)(e.type));
					if (t && d.unshift(t), r(Object(o.L)({
							[e.id]: {
								flair: d
							}
						})), t) {
						const r = Object(a.g)(t);
						Object(c.h)(i(), e.id, s, r)
					} else Object(c.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "c", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forEach.js"),
				n = s.n(r),
				o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				d = s("./node_modules/lodash/values.js"),
				c = s.n(d),
				a = s("./src/lib/makeActionCreator/index.ts"),
				u = s("./src/reddit/actions/imageUploads.ts"),
				l = s("./src/reddit/helpers/media/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var O = s("./src/reddit/helpers/trackers/blade.ts"),
				_ = s("./src/reddit/models/Image/index.tsx"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/telemetry/index.ts");
			const T = ({
				subredditId: e,
				flairId: t,
				imageKey: s,
				imageData: r
			}) => async (n, o, i) => {
				const d = o(),
					c = Object(j.T)(d, {
						subredditId: e
					});
				if (!c) return !1;
				n(Object(u.k)(r));
				const a = await (async (e, t, s, r, n, o) => Object(m.a)(Object(p.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
					method: b.cb.POST,
					data: {
						filepath: r,
						imagetype: n,
						mimetype: o
					}
				}))(i.apiContext(), c.name, t, r.file.name, s, await Object(l.g)(r.file));
				let O = !1;
				try {
					const e = await Object(u.g)(o(), a, r, _.a.FlairTemplates);
					e && n(Object(u.j)(e)), O = !0
				} catch (E) {
					if (E instanceof Error) throw E;
					n(Object(u.i)(E))
				}
				return O
			}, P = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", y = Object(a.a)(P), g = (e, t, s) => async (r, o, d) => {
				const {
					apiContext: a
				} = d;
				let l = o();
				const {
					pendingImages: P,
					...g
				} = s;
				let h = g;
				const S = Object(j.T)(l, {
					subredditId: e
				});
				if (!S) return !1;
				const C = l.structuredStyles.flairTemplate.models[t];
				if (C && i()(C, h)) return !0;
				if (P) {
					const s = [];
					if (n()(P, (n, o) => {
							n && s.push(r(T({
								flairId: t,
								imageData: Object(_.m)(n),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(s)).every(e => e)) return !1;
					h = ((e, t, s) => {
						const r = {
							...e
						};
						return n()(t, (e, t) => {
							const n = e && s.imageUploads[e.id];
							n && n.kind === _.b.TempUploaded && (r[t] = n.url)
						}), r
					})(h, P, o())
				}
				l = o();
				let I = null,
					D = null;
				const R = [];
				try {
					(I = await Object(u.f)(l, _.a.FlairTemplates)) && (D = Object(u.m)(I)(r, o, d), R.push(...c()(I.imagesByKey)))
				} catch (L) {
					return !1
				}
				const A = await (async (e, t, s, r) => Object(m.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: b.cb.PUT,
						data: r
					}))(a(), S.name, t, h),
					x = C ? "edit_post_flair_template" : "save_post_flair_template",
					k = Object(O.e)(l, x);
				if (A.ok) {
					let e;
					if (D) try {
						await D, e = ((e, t, s) => {
							const r = {
								...e
							};
							return t.forEach(e => {
								const t = s.imageUploads[e.id];
								t && t.kind === _.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
							}), r
						})(h, R, o())
					} catch (L) {
						e = null
					} else e = h;
					r(y({
						flairId: t,
						template: e || h
					}))
				} else I && I.websocket.close();
				return Object(E.a)({
					...k,
					actionInfo: {
						...k.actionInfo,
						success: A.ok
					}
				}), A.ok
			}, h = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", S = Object(a.a)(h), C = (e, t) => async (s, r, {
				apiContext: n
			}) => {
				const o = r(),
					i = Object(j.T)(o, {
						subredditId: e
					});
				if (!i) return !1;
				const d = await (async (e, t, s) => Object(m.a)(Object(p.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: b.cb.DELETE
					}))(n(), i.name, t),
					c = Object(O.e)(o, "delete_flair_template");
				return d.ok && s(S({
					flairId: t
				})), Object(E.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: d.ok
					}
				}), d.ok
			}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				i = s("./src/reddit/endpoints/me/index.ts"),
				d = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/helpers/trackers/screenview.ts");
			const a = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(a),
				m = Object(n.a)(u),
				p = (e, t) => async (e, s, {
					apiContext: r
				}) => {
					const n = s();
					e(l());
					const c = await Object(i.a)(r());
					c.ok && c.body ? !t || c.body.account ? (e(b(c.body)), e(Object(o.d)()), f(n)) : Object(d.a)(e, n) : e(m(c.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Db.INBOX_PAGES && Object(c.g)(e)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return p
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/config.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			var c = s("./src/reddit/models/Duplicates/index.ts"),
				a = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				m = (Object(r.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(r.a)(b)),
				p = (e, t) => async (s, r, {
					apiContext: b
				}) => {
					const p = Object(l.T)(r(), {
						subredditId: e
					}) || Object(u.p)(r(), {
						profileId: e
					});
					if (!p) return;
					const f = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.g)(p) ? n.Wb + p.name : p.name
						},
						O = await ((e, t, s) => Object(i.a)(e, {
							data: s,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.s)(t)}`,
							method: n.cb.GET
						}))(b(), t, f);
					if (O.ok) {
						const r = O.body;
						s(m({
							distinguishKey: Object(c.a)(t, f),
							postIds: r.postIds,
							posts: r.posts,
							profiles: r.profiles,
							subreddits: r.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return l
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				n = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				d = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				a = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return F
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return q
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/subscription/constants.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/posts.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var f = s("./src/graphql/operations/SubscribedSubreddits.json"),
				O = s("./src/lib/makeGqlRequest/index.ts"),
				_ = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var j = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				T = s("./src/reddit/models/GqlTopLevelField.ts"),
				P = s("./src/reddit/models/User/index.ts");

			function y(e) {
				const t = [],
					s = [],
					r = {},
					n = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const d of o.edges) {
					if (d.node.__typename !== P.c.AvailableRedditor) continue;
					const e = Object(j.a)(d.node.profile);
					r[e.id] = e;
					const {
						isFavorite: s
					} = d.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const d of i.edges) {
					if (d.node.__typename !== T.a.Subreddit) continue;
					const e = Object(E.a)(d.node);
					n[e.id] = e;
					const {
						isFavorite: t
					} = d.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: r,
					subreddits: n
				}
			}
			var g = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/subscriptions.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const D = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				R = Object(o.a)(a.c),
				A = Object(o.a)(a.b),
				x = Object(o.a)(a.a),
				k = Object(o.a)(a.h),
				L = (Object(o.a)(a.i), Object(o.a)(a.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(A());
					const n = await (e => Object(O.a)(e, f))(s());
					if (n.ok) {
						const t = y(n.body.data);
						e(R(t))
					} else e(x({
						error: n.error
					}))
				}),
				N = (e, t) => t.type === l.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				v = (e, t, s) => async (o, a, {
					apiContext: f
				}) => {
					let O = e.map(e => e.type === l.a.SUBREDDIT ? {
						id: Object(S.F)(a(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(h.m)(a(), e.name),
						name: `${n.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(I.K)(a())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(d.j)());
					const j = Object(I.j)(a());
					if (j) {
						const t = O.length,
							s = e.length;
						if (O = O.filter(e => !N(j, e)), (e = e.filter(e => !N(j, e))).length !== s || O.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.e)(Object(u.d)(e, g.b.Error)))
						}
						if (!e.length && !O.length) return
					}
					if (o(k({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(C.b)(a()),
							userIsSubscriber: t,
							widgetId: s
						})), (await ((e, {
							subredditIds: t,
							subredditNames: s,
							subscribe: r
						}) => Object(b.a)(Object(m.a)(e, [p.a]), {
							method: n.cb.POST,
							endpoint: Object(_.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: s && s.join(",") || void 0,
								api_type: "json"
							}
						}))(f(), {
							subredditNames: O.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : `${r.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(u.e)({
							text: 1 === e.length && "profile" === e[0].type ? r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "followed" : "unfollowed"), r.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							}) : r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "joined" : "left"), r.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(k({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(C.b)(a()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const n = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.e)(Object(u.d)(n, g.b.Error)))
					}
				}, w = Object(o.a)(a.f), F = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(S.L)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const d = e.type === l.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						a = o.subscriptions.favoriteProfileOrder || [],
						f = c.indexOf(e.id),
						O = a.indexOf(e.id),
						_ = -1 === f && -1 === O,
						j = o.subreddits.models,
						E = o.profiles.models;
					t(w({
						makeFavorite: _,
						identifier: e,
						subredditModels: j,
						profileModels: E
					}));
					const T = {
							type: e.type,
							name: i.name
						},
						P = () => Object(S.gb)(s(), {
							identifier: T
						});
					(P() || (await t(v([T], !0)), P())) && ((await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(r(), d, _)).ok || (t(w({
						makeFavorite: !_,
						identifier: e,
						subredditModels: j,
						profileModels: E
					})), t(Object(u.e)({
						text: D(),
						kind: g.b.Error
					}))))
				}, U = Object(o.a)(a.d), M = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s().multireddits.models,
						i = () => {
							t(Object(u.e)({
								text: D(),
								kind: g.b.Error
							}))
						},
						d = o[e];
					if (!d) return void i();
					const c = !d.isFavorited;
					t(U({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(U({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, G = Object(o.a)(a.e), q = e => async (t, s, {
					apiContext: o
				}) => {
					const i = s(),
						d = i.multireddits.models;
					if (!Object(I.K)(i)) return;
					const c = (e = !0) => {
							t(Object(u.e)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: g.b.Error
							}))
						},
						a = d[e];
					if (!a) return void c();
					const l = !a.isFollowed;
					t(G({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: d
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: n.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, l)).ok || (t(G({
						follow: !l,
						multiredditPath: e,
						multiredditsModelsState: d
					})), c(l))
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "f", (function() {
				return y
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/chat/unreadCount.ts"),
				i = s("./src/reddit/actions/inbox.ts"),
				d = s("./src/reddit/helpers/tabBadging/index.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/selectors/appBadges.ts"),
				u = s("./src/reddit/selectors/chat.ts"),
				l = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				b = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const f = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				O = Object(n.a)(f),
				_ = e => {},
				j = Object(r.c)({
					basicChannelCount: a.f,
					subredditChannelCount: a.e,
					subredditMentionCount: a.d
				}),
				E = e => {
					const t = Object(l.a)(e);
					return {
						inboxCount: t ? Object(a.i)(e) : Object(m.F)(e) || 0,
						basicChannelCount: t ? Object(a.f)(e) : Object(u.a)(e) || 0
					}
				},
				T = () => async (e, t) => {
					const s = t(),
						r = Object(l.a)(s),
						n = Object(m.J)(s) || Object(m.K)(s),
						o = Object(b.d)(s);
					let i = 0;
					n && (i = r ? o ? Object(a.j)(s) : Object(a.k)(s) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = E(e);
						return t + s
					})(s), _(i), e(O({
						hasUnreadMessages: !!i
					})))
				}, P = () => async (e, t) => {
					{
						e(T());
						const s = E(t());
						Object(d.c)(s)
					}
				}, y = e => async (t, s) => {
					const r = s();
					if (Object(l.a)(r)) {
						const s = Object(a.f)(r),
							n = Object(a.i)(r),
							{
								basicChannelCount: o,
								inboxCount: i
							} = e;
						if (s !== o) {
							const e = Object(p.e)({
								count: o,
								key: c.c.ChatTab
							});
							t(Object(p.a)(e))
						}
						if (i && i !== n) {
							const e = Object(p.e)({
								count: i,
								key: c.c.MessageTab
							});
							t(Object(p.a)(e))
						}(s !== o || i && i !== n) && t(T())
					} else {
						const s = Object(u.a)(r),
							n = Object(u.b)(r),
							d = Object(m.F)(r),
							{
								basicChannelCount: c,
								inboxCount: a
							} = e;
						s !== c && t(Object(o.b)({
							...n,
							basicChannelCount: c
						})), a && a !== d && t(Object(i.b)({
							inboxCount: a
						})), (s !== c || a && a !== d) && t(T())
					}
				}
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, n;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts");
			const i = e => Object(o.a)(e, {
				endpoint: `${r.a.gatewayUrl}/desktopapi/v1/me`,
				method: n.cb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(o.a)(e, [i.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: r.cb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return b
			}));
			var r = s("./src/reddit/helpers/flair.ts"),
				n = s("./src/reddit/models/PostDraft/index.ts");
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
					flair_text: Object(r.g)(e) || null,
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
		"./src/reddit/helpers/commentList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "a", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/constants/comments.ts"),
				n = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
			const d = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				a = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				u = (e, t, s, r) => {
					let o = Object(n.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > s && o.prev && (i = o.prev, (o = Object(n.n)(r, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= s)););
					return i.id
				},
				l = (e, t, s) => {
					const {
						commentLists: r,
						comments: n
					} = e, {
						head: d
					} = r[t];
					if (d) return Object.keys(n).filter(e => {
						const t = n[e];
						return !(!t.isStickied || !((e, t) => {
							const s = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.w,
								expEventOverride: t
							});
							return !!(Object(o.wd)(s) ? void 0 : s)
						})(s)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(r || (r = {}));
			const n = e => {
				switch (e) {
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
		"./src/reddit/models/Badge/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, o, i = s("./src/config.ts");

			function d(e) {
				return "userId" in e
			}

			function c(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function a(e, t, s) {
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
							[i, d] = s.split("x").map(e => parseInt(e));
						(i < o.width && i >= e || d < o.height && d >= t) && (o = {
							height: d,
							width: i,
							url: n
						})
					}), !o.url && n.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[s, n] = e.split("x").map(e => parseInt(e));
					o = {
						height: n,
						width: s,
						url: t
					}
				}
				return o.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${i.a.assetPath}/${e}`
			}

			function l(e, t, s) {
				const r = a(e, t, s),
					n = a(2 * e, 2 * t, s);
				return {
					url: u(r),
					url2x: u(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.DirectMessages = "directMessages", e.MessageTab = "messageTab", e.ChatRooms = "chatRooms", e.ChatRoomMentions = "chatRoomMentions"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, s) {
			"use strict";

			function r(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (e = o, t) => {
					switch (t.type) {
						case n.o:
							return t.payload;
						case n.p:
						default:
							return e
					}
				},
				d = s("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var a = (e = c, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.h:
					case d.f: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: null
						}
					}
					case d.a:
					case d.e: {
						const {
							key: s,
							error: r
						} = t.payload;
						return {
							...e,
							[s]: r || {}
						}
					}
					default:
						return e
				}
			};
			const u = {};
			var l = (e = u, t) => {
				switch (t.type) {
					case d.c:
					case d.g: {
						const {
							key: s
						} = t.payload;
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var m = (e = b, t) => {
					switch (t.type) {
						case d.d:
						case d.h: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !0
							}
						}
						case d.b:
						case d.a:
						case d.f:
						case d.e: {
							const {
								key: s
							} = t.payload;
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				p = Object(r.c)({
					error: a,
					fullyLoaded: l,
					pending: m
				}),
				f = s("./node_modules/lodash/uniqBy.js"),
				O = s.n(f),
				_ = s("./node_modules/lodash/values.js"),
				j = s.n(_),
				E = s("./src/reddit/actions/comment/constants.ts"),
				T = s("./src/reddit/actions/comment/websocket/constants.ts");
			const P = {};

			function y(e) {
				return O()(e, "id").sort((e, t) => e.created - t.created)
			}
			var g = (e = P, t) => {
					switch (t.type) {
						case d.f:
						case E.u:
						case d.b: {
							const {
								comments: s,
								key: r
							} = t.payload, n = e[r] ? e[r] : [], o = function(e, t) {
								return j()(e).map(e => {
									const s = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: s,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(s, n.find(e => e.stickied)), i = y([...n, ...o]);
							return {
								...e,
								[r]: [...i]
							}
						}
						case T.b:
						case T.c:
						case T.d:
						case E.G:
						case E.F: {
							const {
								comment: {
									id: s,
									created: r,
									isStickied: n,
									authorId: o
								},
								commentsPageKey: i,
								isChatSort: d
							} = t.payload;
							return !1 === d ? e : {
								...e,
								[i]: [...y([...e[i] ? e[i] : [], {
									id: s,
									created: r,
									stickied: n,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				h = s("./node_modules/lodash/mapValues.js"),
				S = s.n(h),
				C = s("./src/reddit/helpers/commentList/index.ts"),
				I = s("./src/reddit/models/Comment/index.ts");
			const D = {};

			function R(e) {
				const t = e;
				return S()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			var A = (e = D, t) => {
				switch (t.type) {
					case E.u: {
						const {
							comments: s,
							commentLists: r,
							continueThreads: n,
							key: o,
							moreCommentsItem: i,
							moreComments: d
						} = t.payload, c = r[i.postId], a = e[o], u = {}, l = a[i.id];
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
							const e = Object(C.c)({
									commentLink: c.head,
									commentsDict: s,
									moreCommentsDict: d,
									continueThreadDict: n
								}),
								t = Object(C.c)({
									commentLink: c.tail,
									commentsDict: s,
									moreCommentsDict: d,
									continueThreadDict: n
								});
							l && (e.prev = l.prev, t.next = l.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...R(s),
								...R(n),
								...R(d),
								...u
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: s,
							continueThreads: r,
							key: n,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								...R(s),
								...R(r),
								...R(o)
							}
						}
					}
					case T.b:
						const {
							comment: s, commentsPageKey: r, depth: n, headCommentId: o, originId: i, isChatSort: c
						} = t.payload, a = e[r], u = {};
						let l = null;
						if (c) return o && (u[o] = {
							...a[o],
							prev: Object(I.g)(s.id)
						}, l = Object(I.g)(o)), {
							...e,
							[r]: {
								...e[r],
								...u,
								[s.id]: {
									depth: 0,
									next: l,
									prev: null
								}
							}
						}; {
							let t = null;
							const o = s.parentId;
							if (i && o) {
								const s = "moreComments-" + i;
								if (a[o] && !a[s]) {
									const i = a[o].next;
									return i && (u[i.id] = {
										...a[i.id],
										prev: Object(I.h)(s)
									}, l = i), u[o] = {
										...a[o],
										next: Object(I.h)(s)
									}, t = Object(I.g)(o), {
										...e,
										[r]: {
											...e[r],
											...u,
											[s]: {
												depth: n || 0,
												next: l,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case E.G: {
							const {
								comment: s,
								commentsPageKey: r,
								headCommentId: n
							} = t.payload, o = e[r], i = {};
							let d = null;
							return n && (i[n] = {
								...o[n],
								prev: Object(I.g)(s.id)
							}, d = Object(I.g)(n)), {
								...e,
								[r]: {
									...e[r],
									...i,
									[s.id]: {
										depth: 0,
										next: d,
										prev: null
									}
								}
							}
						}
						case E.F: {
							const {
								comment: s,
								commentsPageKey: r,
								parentCommentId: n,
								depth: o
							} = t.payload, i = e[r], d = {};
							let c = null;
							if (!i[n]) return e;
							const a = i[n].next;
							return a && (d[a.id] = {
								...i[a.id],
								prev: Object(I.g)(s.id)
							}, c = a), d[n] = {
								...i[n],
								next: Object(I.g)(s.id)
							}, {
								...e,
								[r]: {
									...e[r],
									...d,
									[s.id]: {
										depth: o,
										next: c,
										prev: Object(I.g)(n)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const x = {};
			var k = (e = x, t) => {
				switch (t.type) {
					case T.b:
					case T.c:
					case E.G: {
						const {
							comment: s,
							commentsPageKey: r,
							isChatSort: n
						} = t.payload;
						return !1 === n ? e : {
							...e,
							[r]: s.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: s,
							key: r,
							postId: n
						} = t.payload;
						return {
							...e,
							[r]: s[n] && s[n].head ? s[n].head.id : null
						}
					}
					default:
						return e
				}
			};
			const L = {};
			var N = (e = L, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: s,
							postId: r
						} = t.payload;
						return {
							...e,
							[s]: r
						}
					}
					case E.G: {
						const {
							parentId: s,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: p,
				keyToChatCommentLinks: g,
				keyToCommentThreadLinkSets: A,
				keyToHeadCommentId: k,
				keyToPostId: N,
				ads: i
			})
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				d = s("./node_modules/lodash/merge.js"),
				c = s.n(d),
				a = s("./node_modules/lodash/pick.js"),
				u = s.n(a),
				l = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/comment/constants.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				p = s("./src/reddit/actions/frontpage/constants.ts"),
				f = s("./src/reddit/actions/header.ts"),
				O = s("./src/reddit/actions/modQueue/constants.ts"),
				_ = s("./src/reddit/actions/pages/constants.ts"),
				j = s("./src/reddit/actions/pages/modListing/constants.ts"),
				E = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				T = s("./src/reddit/actions/pages/postCreation.ts"),
				P = s("./src/reddit/actions/pages/postDraft.ts"),
				y = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				g = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				h = s("./src/reddit/actions/pages/profilePosts.ts"),
				S = s("./src/reddit/actions/pages/search.ts"),
				C = s("./src/reddit/actions/pages/subreddit.ts"),
				I = s("./src/reddit/actions/pages/topic.ts"),
				D = s("./src/reddit/actions/postCreation/constants.ts"),
				R = s("./src/reddit/actions/postDraft.ts"),
				A = s("./src/reddit/actions/preferences.ts"),
				x = s("./src/reddit/actions/redditEmbed.ts"),
				k = s("./src/reddit/actions/search.ts"),
				L = s("./src/reddit/actions/structuredStyles/constants.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				v = s("./src/reddit/actions/users.ts"),
				w = s("./src/reddit/constants/postLayout.ts"),
				F = s("./src/reddit/constants/preferences.ts"),
				U = s("./src/reddit/constants/theme.ts"),
				M = s("./src/reddit/models/PostCreationForm/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				q = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {})),
			function(e) {
				e.Whitelisted = "nobody", e.Everyone = "everyone"
			}(n || (n = {}));
			const B = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "lang", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...F.a, "loginOtpEnabled"],
				K = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: q.a,
					commentMode: M.h.RICH_TEXT,
					layout: w.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.r.CONFIDENCE,
					editorMode: M.h.RICH_TEXT,
					geopopular: void 0,
					globalTheme: U.a,
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
				$ = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = u()({
							...t.account,
							...t
						}, B),
						r = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						n[e] = {
							...$,
							...r && r[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: n
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? M.h.MARKDOWN : M.h.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				V = (e, t, s) => H(e, {
					subreddit: {
						[t]: {
							...$,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.d = (e = K, t) => {
				switch (t.type) {
					case b.l:
					case b.s: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case D.s:
					case D.M: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case f.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case f.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case R.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === G.b.Markdown ? M.h.MARKDOWN : M.h.RICH_TEXT
						}
					}
					case A.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case A.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case A.p: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return V(e, r, {
							layout: s
						})
					}
					case A.e:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case A.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case m.g:
						return {
							...e, over18: !0
						};
					case A.b:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case A.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case A.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return e;
					case L.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case L.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case A.f:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case A.c:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: c()({}, e.collapsedTraySections, t.payload)
						} : e;
					case m.a:
					case m.b:
					case m.h:
					case m.i:
					case m.f:
					case m.j:
					case j.e:
					case j.h:
					case _.a:
					case _.e:
					case _.b:
					case _.f:
					case _.d:
					case _.h:
					case p.b:
					case C.SUBREDDIT_LOADED:
					case E.b:
					case E.a:
					case y.e:
					case g.e:
					case g.b:
					case h.PROFILE_POSTS_LOADED:
					case p.f:
					case N.i:
					case k.c:
					case x.b:
					case T.PAGE_LOADED:
					case P.PAGE_LOADED:
					case A.j:
					case S.SEARCH_RESULTS_RECEIVED:
					case A.a:
					case v.c:
					case I.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case A.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return V(e, s, r)
					}
					case y.d:
					case g.d:
					case g.a:
					case h.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: n
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== n && (s = {
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
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case A.n: {
						const s = t.payload,
							{
								showActiveCommunities: r
							} = s.additional;
						return e.showActiveCommunities !== r ? {
							...e,
							showActiveCommunities: r
						} : e
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/loadableAction/index.ts"),
				i = s("./src/reddit/routes/postCreation/constants.ts");
			const d = [i.b, i.c, i.a],
				c = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				a = e => `/${e}/submit`,
				u = (e, t) => {
					return i.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				l = e => i.a.replace(/:profileName/, e),
				b = {
					action: Object(o.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: c,
					chunk: n.p.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Db.POST_CREATION
					},
					path: d,
					prefetches: [n.p.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/comments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "u", (function() {
				return j
			})), s.d(t, "w", (function() {
				return E
			})), s.d(t, "x", (function() {
				return T
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "F", (function() {
				return h
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "o", (function() {
				return C
			})), s.d(t, "j", (function() {
				return I
			})), s.d(t, "l", (function() {
				return D
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "a", (function() {
				return A
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "q", (function() {
				return k
			})), s.d(t, "m", (function() {
				return L
			})), s.d(t, "t", (function() {
				return N
			})), s.d(t, "y", (function() {
				return v
			})), s.d(t, "H", (function() {
				return w
			})), s.d(t, "s", (function() {
				return F
			})), s.d(t, "A", (function() {
				return U
			})), s.d(t, "B", (function() {
				return M
			})), s.d(t, "D", (function() {
				return G
			})), s.d(t, "r", (function() {
				return q
			})), s.d(t, "e", (function() {
				return B
			})), s.d(t, "v", (function() {
				return K
			})), s.d(t, "I", (function() {
				return $
			})), s.d(t, "f", (function() {
				return H
			})), s.d(t, "i", (function() {
				return V
			})), s.d(t, "E", (function() {
				return W
			})), s.d(t, "z", (function() {
				return Y
			})), s.d(t, "G", (function() {
				return Q
			})), s.d(t, "p", (function() {
				return z
			})), s.d(t, "J", (function() {
				return J
			})), s.d(t, "C", (function() {
				return X
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/values.js"),
				n = s.n(r),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeCommentPermalink/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				c = s("./src/reddit/constants/comments.ts"),
				a = s("./src/reddit/models/Post/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				m = s("./src/lib/initializeClient/installReducer.ts"),
				p = s("./src/reddit/reducers/features/comments/index.ts"),
				f = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(m.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: f.a
				}
			});
			const O = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				_ = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				j = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				E = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				T = (e, t) => {
					const s = E(e, t);
					if (s) return Object(b.a)(e, {
						commentId: s
					})
				},
				P = [],
				y = Object(d.a)((e, t) => {
					const s = T(e, t),
						r = s && s.id;
					if (!r) return P;
					const {
						commentsPageKey: n
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[n], i = [];
					let d = {
						id: r,
						type: c.a.Comment
					};
					do {
						i.push(d), d = o[d.id].next
					} while (d);
					return i
				}),
				g = (e, t) => E(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				h = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					return s ? e.posts.models[s] : null
				},
				S = (e, {
					commentId: t,
					commentLink: s,
					commentsPageKey: r
				}) => {
					const n = e.pages.comments.keyToCommentThreadLinkSets[r];
					return n ? s ? n[s.id] : t ? n[t] : null : null
				},
				C = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				I = (e, t) => {
					const s = t.commentsPageKey ? S(e, t) : null;
					return s ? s.depth : null
				},
				D = (e, {
					commentLink: t
				}) => {
					const {
						id: s,
						type: r
					} = t;
					switch (r) {
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
				R = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, s = Object(a.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === s && e.features.comments.models[t].author !== o.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				A = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				x = e => e.moreComments.models,
				k = e => e.features.comments.models,
				L = (e, {
					commentId: t
				}) => {
					const s = Object(b.a)(e, {
						commentId: t
					});
					return s ? Object(i.a)(Object(u.C)(e, s), t) : ""
				},
				N = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				v = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.isEditing[s] && e.features.comments.isEditing[s][t]),
				w = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.replyFormOpen[s] && e.features.comments.replyFormOpen[s][t]),
				F = (e, {
					commentsPageKey: t
				}) => {
					const s = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(s).find(e => s[e]),
						n = Object(b.a)(e, {
							commentId: r
						}),
						o = n && I(e, {
							commentId: n.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (n && "number" == typeof o) return {
						...n,
						depth: o
					}
				},
				U = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				M = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				G = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					if (s) {
						const t = n()(e.moreComments.models).find(t => t.postId === s && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				q = (e, {
					id: t
				}) => e.continueThreads.models[t],
				B = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.models[t] : void 0;
					if (!s) return null;
					const r = e.authorFlair.models[s.subredditId];
					return r ? r[s.author] : null
				},
				K = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				$ = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.submit.error[t];
					return s && s.fields ? s.fields.map(e => e.msg) : []
				},
				H = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.drafts[t];
					return !!s && s.autofocusDisabled
				},
				V = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				W = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.submit.error[t] : void 0;
					return s && s.fields ? s.fields.map(e => e.msg) : void 0
				},
				Y = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				z = e => e.features.comments.visitHighlightFilter,
				J = (e, t) => {
					const s = Object(b.a)(e, t);
					if (s) return Object(l.Y)(e, s)
				},
				X = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.e588c1b2ecd60bfabb87.js.map