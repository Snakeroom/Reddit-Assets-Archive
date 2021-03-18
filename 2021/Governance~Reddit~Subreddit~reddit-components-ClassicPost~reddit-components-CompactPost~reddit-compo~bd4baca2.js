// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.a6004f021d04bb8875bb.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
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
			var n = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(n.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let s = e;
				return "/" !== s.substr(-1) && (s += "/"), s += Object(n.c)(t)
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			const n = "APP_BADGES__PENDING",
				r = "APP_BADGES__LOADED",
				o = "APP_BADGES__UPDATED",
				i = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return _
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				i = s("./src/graphql/operations/BadgeIndicators.json"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = e => Object(d.a)(e, {
					...i
				}),
				a = s("./src/reddit/models/Badge/index.ts");
			const u = Object(n.a)(r.c),
				l = Object(n.a)(r.b),
				b = Object(n.a)(r.d),
				m = Object(n.a)(r.a),
				f = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: a.b.Numbered
					}
				}),
				p = (e, t, s) => ({
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
					const n = await async function(e) {
						const t = await c(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(s);
					n ? (e(l(n)), e(Object(o.d)())) : e(m())
				};
			const _ = () => async e => {
				const t = f({
					key: a.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "d", (function() {
				return P
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/chat/endpoints/sendbird/index.ts"),
				d = s("./src/reddit/actions/tabBadging.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				a = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(n || (n = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: m
			} = n, f = Object(o.a)(u), p = Object(o.a)(l), O = Object(o.a)(b), _ = Object(o.a)(m);
			let E;
			const T = 5 * r.db,
				P = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t();
					if (!Object(a.K)(n) || !Object(c.d)(n)) return clearTimeout(E);
					E || e((() => async (e, t, {
						apiContext: s
					}) => {
						const n = t(),
							{
								session: r
							} = n.user;
						if (r && Object(a.K)(n) && Object(c.d)(n)) {
							e(O());
							const t = await Object(i.f)(s(), r);
							t && t.ok ? (e(_({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(d.d)())) : e(p({
								error: t.error
							}))
						}
					})()), E = setTimeout(() => {
						e(P())
					}, T)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				r = "CONTENT_CONTROLS_LOADED",
				o = "CONTENT_CONTROLS_PENDING",
				i = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return A
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/camelCase.js"),
				o = s.n(r),
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
			var f = s("./node_modules/lodash/isEmpty.js"),
				p = s.n(f),
				O = s("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				_ = s("./src/graphql/operations/UpdatePostRequirements.json"),
				E = s("./src/reddit/endpoints/subreddit/about.ts"),
				T = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/contentControls.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/actions/contentControls/constants.ts");
			const I = Object(d.a)(j.b),
				C = Object(d.a)(j.c),
				y = Object(d.a)(j.a),
				h = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = {
						subredditName: e.toLowerCase()
					};
					if (Object(P.a)(s(), r)) return;
					t(C(r));
					let o = Object(S.F)(s(), e);
					if (!o) {
						const s = await Object(E.a)(n(), e, !1);
						if (s.ok) {
							o = s.body.data.subreddit.id
						}
						if (!o) {
							const e = s.error || {
								type: i.E.NOT_FOUND_ERROR
							};
							return void t(y({
								...r,
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
							const n = null === (s = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === s ? void 0 : s.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: m(null == n ? void 0 : n.automatedReportingLevelAbuse),
												levelHate: m(null == n ? void 0 : n.automatedReportingLevelHate),
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
					}))(n(), {
						subredditId: o
					});
					if (a.ok) {
						const e = a.body;
						d = e.data.subreddit && e.data.subreddit
					}
					if (d) t(I({
						...r,
						...d
					}));
					else {
						const s = a.error || {
							type: i.E.UNKNOWN_ERROR
						};
						t(y({
							...r,
							error: s
						})), c.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: a.body,
								responseOk: a.ok
							}), c.c.captureMessage("Missing post requirements data!")
						})
					}
				}, g = Object(d.a)(j.d), A = (e, t) => async (s, r, {
					gqlContext: o
				}) => {
					const i = e.toLowerCase(),
						d = Object(S.F)(r(), e);
					if (!d) return {
						success: !1
					};
					const c = await ((e, t, s) => {
						const n = [Promise.resolve(null), Promise.resolve(null)];
						if (s.postRequirements && !p()(s.postRequirements)) {
							const r = {
								subredditId: t,
								...s.postRequirements
							};
							n[0] = Object(l.a)(e, {
								..._,
								variables: {
									input: r
								}
							})
						}
						if (s.automatedReporting && !p()(s.automatedReporting)) {
							const r = {
								subredditId: t
							};
							s.automatedReporting.levelAbuse && (r.automatedReportingLevelAbuse = s.automatedReporting.levelAbuse), s.automatedReporting.levelHate && (r.automatedReportingLevelHate = s.automatedReporting.levelHate), n[1] = Object(l.a)(e, {
								...O,
								variables: {
									input: r
								}
							})
						}
						return Promise.all(n).then(([e, t]) => {
							let s = !0,
								n = [];
							if (e) {
								const t = e.body,
									r = t.data.updatePostRequirements.fieldErrors;
								s = s && t.data.updatePostRequirements.ok, r && (n = n.concat(r))
							}
							if (t) {
								const e = t.body,
									r = e.data.updateSubredditSettings.fieldErrors;
								s = s && e.data.updateSubredditSettings.ok, r && (n = n.concat(r))
							}
							return {
								ok: s,
								fieldErrors: n.length ? n : null
							}
						})
					})(o(), d, t);
					if (c.ok) return s(g({
						subredditName: i,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = D(c.fieldErrors);
						return s(Object(a.f)({
							duration: a.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: T.b.Error,
							text: e && e.length ? e[0].message : n.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: e || void 0
						}
					}
				}, D = e => e && e.map(e => ({
					...e,
					field: o()(e.field)
				}))
		},
		"./src/reddit/actions/frontpage/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
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
			const n = "PAGE__FRONTPAGE_PENDING",
				r = "PAGE__FRONTPAGE_LOADED",
				o = "PAGE__FRONTPAGE_FAILED",
				i = "PAGE__FRONTPAGE_RELOADED",
				d = "FRONTPAGE__MORE_POSTS_PENDING",
				c = "FRONTPAGE__MORE_POSTS_LOADED",
				a = "FRONTPAGE__MORE_POSTS_FAILED"
		},
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const r = "INBOX__COUNT_UPDATE",
				o = Object(n.a)(r)
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const r = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(n.a)(r)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/profile/index.ts"),
				o = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				i = s("./src/reddit/selectors/user.ts");
			const d = "MOD_PERMS__REQUEST_LOADED",
				c = (Object(n.a)("MOD_PERMS__REQUEST_PENDING"), Object(n.a)(d), Object(n.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(i.j)(t());
					if (s) {
						const t = Object(o.e)(s);
						await e(Object(r.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "PAGE__MULTIREDDIT_FEED_PENDING",
				r = "PAGE__MULTIREDDIT_FEED_LOADED",
				o = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return L
			})), s.d(t, "PAGE_LOADED", (function() {
				return x
			})), s.d(t, "PAGE_FAILED", (function() {
				return k
			})), s.d(t, "pagePending", (function() {
				return v
			})), s.d(t, "pageLoaded", (function() {
				return F
			})), s.d(t, "pageFailed", (function() {
				return w
			})), s.d(t, "postCreationPageDataRequested", (function() {
				return M
			})), s.d(t, "postCreationPageRequested", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				i = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makePostCreationPageKey/index.ts"),
				a = s("./src/reddit/actions/contentControls/index.ts"),
				u = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				b = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postCreation/general.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				O = s("./src/reddit/actions/subreddit.ts"),
				_ = s("./src/reddit/actions/subredditDuplicates.ts"),
				E = s("./src/config.ts"),
				T = s("./src/lib/makeApiRequest/index.ts"),
				P = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				j = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/contentControls.ts"),
				h = s("./src/reddit/selectors/postCollection.ts"),
				g = s("./src/reddit/selectors/postCreations.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/profile.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				N = s("./src/reddit/selectors/user.ts");
			const L = "POST_CREATION__PAGE_PENDING",
				x = "POST_CREATION__PAGE_LOADED",
				k = "POST_CREATION__PAGE_FAILED",
				v = Object(d.a)(L),
				F = Object(d.a)(x),
				w = Object(d.a)(k),
				U = () => async (e, t) => {
					const s = t(),
						n = Object(g.a)(s);
					n !== Object(g.kb)(s) && e(Object(f.g)({
						submissionType: n
					}))
				}, M = e => async (t, s, n) => {
					const {
						collectionId: o,
						profileName: d,
						subredditName: u
					} = e, m = Object(c.a)(e), f = s(), _ = f.creations.api.page.pending[m], S = f.creations.api.page.fetched[m], I = f.creations.api.page.error[m];
					if (_) return;
					if (S && !I) return void t(U());
					const h = [];
					t(v({
						key: m
					}));
					let g = u;
					!u && d && (g = `u_${d}`), h.push(((e, t) => Object(T.a)(e, {
						method: r.cb.GET,
						endpoint: Object(P.a)(`${E.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: g,
						collectionId: o
					})), d && (h.push(t(p.d(d))), h.push(t(p.b(d))));
					const [A] = await Object(j.a)("postCreation", () => Promise.all(h));
					if (A.ok) {
						const e = A.body,
							{
								posts: n = {},
								subredditAboutInfo: r
							} = e;
						if (t(F({
								key: m,
								meta: f.meta,
								...e,
								posts: n
							})), !Object(N.K)(s())) return;
						if (r) {
							const e = Object.keys(r)[0];
							await t(Object(b.f)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(U());
						const o = [];
						o.push(t(l.o()));
						const d = Object(N.j)(s());
						if (d && d.hasUserProfile && o.push(t(p.d(Object(C.e)(d)))), u && !Object(i.a)(u)) {
							o.push(t(O.o(u))), !!Object(y.b)(s(), {
								subredditName: u
							}) || o.push(t(Object(a.a)(u)))
						}
						await Promise.all(o)
					} else t(w({
						error: A.error,
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
						})), !Object(N.K)(s())) return void Object(S.a)(t, s());
					let l;
					if (i ? (l = Object(R.A)(s(), {
							subredditName: i
						}), await t(Object(u.a)({
							subredditName: i
						}))) : d && (l = Object(D.j)(s(), {
							profileName: d
						})), c.source_id) await t(((e, t) => async (s, n) => {
						const {
							subredditName: r,
							profileName: o
						} = e, i = [];
						let d;
						r ? d = Object(R.F)(n(), r) : o && (d = Object(N.fb)(n(), {
							userName: o
						})), d && i.push(s(Object(_.b)(d, t))), i.push(s(Object(m.K)(t))), await Promise.all(i);
						const c = Object(A.f)(n(), {
							postId: t
						});
						s(Object(f.k)({
							postId: t,
							postTitle: c ? c.title : ""
						}))
					})(e.params, c.source_id));
					else if (a) {
						const r = Object(h.q)(s(), {
							collectionId: a
						});
						l && r && r.subredditId === l.id || t(Object(n.c)(Object(o.a)(e.url, ["collection"])))
					}((e, t) => {
						const s = e.platform.lastPage;
						t && s && s.meta && s.meta.name === r.Db.POST_CREATION && I.x(e)
					})(s(), i)
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return m
			})), s.d(t, "PAGE_LOADED", (function() {
				return f
			})), s.d(t, "PAGE_FAILED", (function() {
				return p
			})), s.d(t, "pagePending", (function() {
				return O
			})), s.d(t, "pageLoaded", (function() {
				return _
			})), s.d(t, "pageFailed", (function() {
				return E
			})), s.d(t, "postDraftPageDataRequested", (function() {
				return T
			})), s.d(t, "postDraftRequested", (function() {
				return P
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makePostDraftPageKey/index.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				i = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const m = "POST_DRAFT__PAGE_PENDING",
				f = "POST_DRAFT__PAGE_LOADED",
				p = "POST_DRAFT__PAGE_FAILED",
				O = Object(n.a)(m),
				_ = Object(n.a)(f),
				E = Object(n.a)(p),
				T = e => async (t, s, n) => {
					const {
						draftId: m,
						profileName: f
					} = e, p = Object(r.a)(e), O = s(), T = O.creations.api.page.pending[p], P = O.creations.api.page.fetched[p], S = O.creations.api.page.error[p];
					if (T || P && !S || !m) return;
					t(o.d(f));
					const j = await Object(b.a)("postDraft", () => ((e, t, s) => Object(c.a)(e, {
						endpoint: Object(a.a)(Object(u.a)(`${i.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${s}/${t}`)),
						method: d.cb.GET
					}))(n.apiContext(), m, f));
					if (j.ok) {
						const e = j.body;
						e.drafts[m].kind = Object(l.b)(e.drafts[m].kind), t(_({
							...e,
							key: p
						}))
					} else t(E({
						error: j.error,
						key: p
					}))
				}, P = e => async (t, s, n) => {
					await t(T(e.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return A
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return D
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return R
			})), s.d(t, "profilePostsPending", (function() {
				return N
			})), s.d(t, "profilePostsLoaded", (function() {
				return L
			})), s.d(t, "profilePostsFailed", (function() {
				return x
			})), s.d(t, "profilePostsRequested", (function() {
				return k
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return v
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return F
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return w
			})), s.d(t, "morePostsPending", (function() {
				return U
			})), s.d(t, "morePostsLoaded", (function() {
				return M
			})), s.d(t, "morePostsFailed", (function() {
				return G
			})), s.d(t, "morePostsRequested", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				a = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				l = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				p = s("./src/reddit/constants/errors.ts"),
				O = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/config.ts"),
				T = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				P = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/makeApiRequest/index.ts"),
				j = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, s) => Object(S.a)(e, {
				data: s,
				endpoint: Object(T.a)(Object(j.a)(`${E.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`)),
				method: P.cb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var C = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				y = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				h = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/profile.ts");
			const A = "PAGE__PROFILE_POSTS_PENDING",
				D = "PAGE__PROFILE_POSTS_LOADED",
				R = "PAGE__PROFILE_POSTS_FAILED",
				N = Object(o.a)(A),
				L = Object(o.a)(D),
				x = Object(o.a)(R),
				k = e => async (t, s, n) => {
					const {
						queryParams: o,
						params: E
					} = e, {
						sort: T,
						t: P
					} = Object(u.b)(o), {
						profileName: S
					} = E, j = Object(i.a)(`u_${S}`, T, o), A = s(), D = A.listings.postOrder.ids[j], R = Object(h.c)(A, {
						listingKey: j
					}), k = Object(h.d)(A, {
						listingKey: j
					});
					if (await t(m.d(S)), k || D && !R) return;
					const v = {
						...r()(e.queryParams, [...O.l, ...O.k, O.h]),
						layout: Object(_.O)(A, {}).toLowerCase(),
						sort: T,
						t: Object(C.a)(T, P)
					};
					t(N({
						key: j
					}));
					const F = await Object(y.a)("profilePosts", () => I(n.apiContext(), S, v));
					if (!F.ok) return t(x({
						account: F.body.data ? F.body.data.account : null,
						error: F.body.reason ? {
							type: F.body.reason
						} : F.error,
						key: j
					})), F.body.reason === p.a.DeletedProfile && t(Object(d.p)({
						profileName: S
					})), void t(b.l(F.status));
					const w = F.body;
					t(L({
						key: j,
						meta: s().meta,
						...w
					}));
					const U = Object(g.m)(s(), S),
						{
							pinned: M
						} = w;
					t(Object(l.h)({
						profileId: U,
						pinned: M
					})), await Promise.all([t(Object(u.c)(S)), t(Object(f.q)()), t(Object(a.b)()), t(c.o(S))])
				}, v = "PROFILE_POSTS__MORE_POSTS_PENDING", F = "PROFILE_POSTS__MORE_POSTS_LOADED", w = "PROFILE_POSTS__MORE_POSTS_FAILED", U = Object(o.a)(v), M = Object(o.a)(F), G = Object(o.a)(w), B = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t(),
						{
							currentPage: o
						} = n.platform;
					if (!o || !o.routeMatch) return;
					const {
						queryParams: d,
						params: c
					} = o.routeMatch.match, {
						sort: a,
						t: l
					} = Object(u.b)(d), {
						profileName: b
					} = c, m = Object(i.a)(`u_${b}`, a, d), f = Object(h.g)(n, {
						listingKey: m
					});
					if (!f) return;
					const p = Object(h.d)(n, {
							listingKey: m
						}),
						E = Object(h.e)(n, {
							listingKey: m,
							token: f.token
						});
					if (p || E) return;
					e(U({
						key: m,
						fetchedToken: f.token
					}));
					const T = {
							after: f.token,
							dist: f.dist,
							sort: a,
							t: l,
							...r()(d, O.l),
							layout: Object(_.O)(n, {}).toLowerCase()
						},
						P = await I(s(), b, T),
						S = n.listings.postOrder.ids[m],
						j = P.body.postIds || [],
						C = {
							...P.body,
							postIds: j.filter(e => !S || !S.includes(e))
						};
					P.ok ? (e(M({
						fetchedToken: f.token,
						key: m,
						meta: n.meta,
						...C
					})), await e(Object(u.c)(b))) : e(G({
						account: P.body.data ? P.body.data.account : null,
						error: P.error,
						fetchedToken: f.token,
						key: m
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "i", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(o.a)(m),
				p = "PINNEDPOST__PIN_POST_SUCCESS",
				O = "PINNEDPOST__UNPIN_POST_SUCCESS",
				_ = Object(o.a)(p),
				E = Object(o.a)(O),
				T = "PINNEDPOST__PIN_POST_PENDING",
				P = "PINNEDPOST__UNPIN_POST_PENDING",
				S = Object(o.a)(T),
				j = Object(o.a)(P),
				I = "PINNEDPOST__PIN_POST_FAILURE",
				C = "PINNEDPOST__UNPIN_POST_FAILURE",
				y = Object(o.a)(I),
				h = Object(o.a)(C),
				g = e => Object(d.f)({
					buttonAction: N(e, !0),
					buttonText: n.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: n.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				A = (e, t) => Object(d.f)({
					buttonAction: N(e, !0),
					buttonText: n.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: t ? n.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : n.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				D = () => Object(d.f)({
					kind: u.b.Error,
					text: n.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				R = () => Object(d.f)({
					kind: u.b.Error,
					text: n.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				N = (e, t = !1) => async (s, o, {
					apiContext: m
				}) => {
					const f = o(),
						p = f.posts.models[e];
					if (!p) return;
					const O = !Object(l.q)(f, {
						postId: e
					});
					if (O && p.isRemoved) return s((() => Object(d.f)({
						kind: u.b.Error,
						text: n.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const T = p.author,
						P = Object(b.m)(f, T),
						[I, C, N, L, x] = O ? [S, _, y, g, D] : [j, E, h, A, R];
					if (O) {
						if (Object(l.L)(f, {
								profileName: T
							}).length >= r.V) return void s(Object(i.i)(c.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const k = Object(l.n)(f, e, T),
						v = !O && k;
					s(I({
						postId: e,
						profileId: P
					})), (await Object(a.t)(m(), e, O, !0)).ok ? (s(C({
						postId: e,
						profileId: P
					})), t || s(L(e, v))) : (s(N({
						postId: e,
						profileId: P
					})), s(x()))
				}
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "G", (function() {
				return n
			})), s.d(t, "H", (function() {
				return r
			})), s.d(t, "l", (function() {
				return o
			})), s.d(t, "m", (function() {
				return i
			})), s.d(t, "x", (function() {
				return d
			})), s.d(t, "D", (function() {
				return c
			})), s.d(t, "E", (function() {
				return a
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "C", (function() {
				return l
			})), s.d(t, "p", (function() {
				return b
			})), s.d(t, "M", (function() {
				return m
			})), s.d(t, "n", (function() {
				return f
			})), s.d(t, "z", (function() {
				return p
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "g", (function() {
				return j
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "q", (function() {
				return h
			})), s.d(t, "O", (function() {
				return g
			})), s.d(t, "N", (function() {
				return A
			})), s.d(t, "P", (function() {
				return D
			})), s.d(t, "Q", (function() {
				return R
			})), s.d(t, "R", (function() {
				return N
			})), s.d(t, "S", (function() {
				return L
			})), s.d(t, "T", (function() {
				return x
			})), s.d(t, "U", (function() {
				return k
			})), s.d(t, "V", (function() {
				return v
			})), s.d(t, "r", (function() {
				return F
			})), s.d(t, "A", (function() {
				return w
			})), s.d(t, "u", (function() {
				return U
			})), s.d(t, "v", (function() {
				return M
			})), s.d(t, "t", (function() {
				return G
			})), s.d(t, "w", (function() {
				return B
			})), s.d(t, "L", (function() {
				return q
			})), s.d(t, "o", (function() {
				return K
			})), s.d(t, "y", (function() {
				return H
			})), s.d(t, "X", (function() {
				return $
			})), s.d(t, "F", (function() {
				return V
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "B", (function() {
				return Y
			})), s.d(t, "J", (function() {
				return Q
			})), s.d(t, "K", (function() {
				return z
			})), s.d(t, "I", (function() {
				return J
			})), s.d(t, "W", (function() {
				return X
			}));
			const n = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				r = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				o = "POST_CREATION_EDIT_COMPLETE",
				i = "POST_CREATION_EDIT_FAILED",
				d = "POST_CREATION_PENDING_EDIT",
				c = "POST_CREATION_START_EDITING_POST",
				a = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				b = "FINISHED_CONVERTING_EDITOR_CONTENT",
				m = "POST_CREATION__TOGGLE_EDITOR_MODE",
				f = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				p = "POST_TITLE_FETCHED",
				O = "INITIALIZE_EDITOR_MODE",
				_ = "POST_CREATION__CHANGE_FLAIR",
				E = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				T = "POST_CREATION__CHANGE_LINK_BODY",
				P = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				S = "POST_CREATION__CHANGE_MEDIA_BODY",
				j = "POST_CREATION__CHANGE_RECAPTCHA",
				I = "POST_CREATION__CHANGE_RTE_STATE",
				C = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				y = "POST_CREATION__CHANGE_TITLE",
				h = "POST_CREATION__GOV_TYPE_CHANGED",
				g = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				A = "POST_CREATION__TOGGLE_IS_CHANGED",
				D = "POST_CREATION__TOGGLE_IS_GOV",
				R = "POST_CREATION__TOGGLE_IS_NSFW",
				N = "POST_CREATION__TOGGLE_IS_OC",
				L = "POST_CREATION__TOGGLE_IS_POLL",
				x = "POST_CREATION__TOGGLE_IS_SPOILER",
				k = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				v = "POST_CREATION__TOGGLE_SEND_REPLIES",
				F = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				w = "POST_CREATION__RESET_FORM",
				U = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				M = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				G = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				B = "POST_CREATION__PENDING",
				q = "POST_CREATION__SUCCEEDED",
				K = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				$ = "POST_CREATION__VALIDATION_FAILED",
				V = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				W = "POST_CREATION__CAPTCHA_REQUIRED",
				Y = "POST_CREATION__SET_SUBMIT_MODE",
				Q = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				z = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				J = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return p
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "f", (function() {
				return I
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return y
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "s", (function() {
				return A
			})), s.d(t, "r", (function() {
				return D
			})), s.d(t, "t", (function() {
				return R
			})), s.d(t, "u", (function() {
				return N
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "w", (function() {
				return x
			})), s.d(t, "y", (function() {
				return k
			})), s.d(t, "z", (function() {
				return v
			})), s.d(t, "A", (function() {
				return F
			})), s.d(t, "k", (function() {
				return w
			})), s.d(t, "p", (function() {
				return U
			})), s.d(t, "q", (function() {
				return M
			})), s.d(t, "o", (function() {
				return G
			})), s.d(t, "x", (function() {
				return B
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "l", (function() {
				return K
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/isUrl/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				a = s("./src/reddit/models/PostCreationForm/index.ts"),
				u = s("./src/reddit/routes/postCreation/constants.ts"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/reddit/selectors/postCollection.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(f.n),
				O = Object(o.a)(f.z),
				_ = (Object(o.a)(f.s), e => {
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
				E = Object(o.a)(f.b),
				T = Object(o.a)(f.c),
				P = Object(o.a)(f.d),
				S = Object(o.a)(f.e),
				j = Object(o.a)(f.f),
				I = Object(o.a)(f.g),
				C = Object(o.a)(f.h),
				y = Object(o.a)(f.i),
				h = Object(o.a)(f.j),
				g = Object(o.a)(f.q),
				A = Object(o.a)(f.O),
				D = Object(o.a)(f.N),
				R = (Object(o.a)(f.P), Object(o.a)(f.Q)),
				N = Object(o.a)(f.R),
				L = Object(o.a)(f.S),
				x = Object(o.a)(f.T),
				k = Object(o.a)(f.U),
				v = Object(o.a)(f.V),
				F = Object(o.a)(f.W),
				w = Object(o.a)(f.r),
				U = e => async (t, s, {
					apiContext: n
				}) => {
					t(P(e)), Object(r.a)(e) && t((e => async (t, s, {
						apiContext: n
					}) => {
						const r = await Object(c.f)(n(), e);
						r.ok && r.body && r.body.json && r.body.json.data && t(O(r.body.json.data))
					})(e))
				}, M = Object(o.a)(f.A), G = (e, t) => async (s, r) => {
					s(M()), s(e ? Object(n.b)(u.b) : Object(n.b)(Object(m.ab)(r(), {
						pageLayer: t
					})))
				}, B = e => async t => {
					t(i.i(e))
				}, q = e => async (t, s) => {
					const n = s(),
						r = Object(d.D)(e),
						o = Object(m.F)(n);
					if (r && o) {
						Object(l.a)(n) !== a.c && t(B(a.c))
					} else t(G(!1, e))
				}, K = e => async (t, s) => {
					const n = s();
					Object(b.m)(n, {
						subredditId: e
					}) ? t(i.i(a.a)) : t(i.i(a.b))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return j
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "c", (function() {
				return h
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/routes/postCreation/index.ts"),
				f = s("./src/reddit/routes/postCreation/constants.ts"),
				p = s("./src/reddit/selectors/postCreations.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/actions/postCreation/constants.ts"),
				T = s("./src/reddit/actions/postCreation/general.ts");
			const P = Object(d.a)(E.J),
				S = Object(d.a)(E.K),
				j = Object(d.a)(E.I),
				I = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					let i = n();
					const {
						name: d,
						isProfile: m
					} = e, f = Object(O.e)(i), E = f && !m && Object(l.a)(f.name, d), T = i.creations.api.subreddit.change.pending;
					if (E || T) return;
					const S = Object(u.t)(t);
					if (!d) return void s(C(e, S));
					s(P(e));
					const j = m ? {
						profileName: d
					} : {
						subredditName: d
					};
					if (await s(Object(a.postCreationPageDataRequested)(j)), m || !Object(p.A)(i)) return s(C(e, S));
					const I = e.allowedPostTypes || Object(_.z)(n(), {
						subredditName: d
					});
					if (!I) return void s(C(e, S));
					let y;
					i = n();
					const h = Object(p.kb)(i),
						g = Object(p.A)(i);
					if (h === o.Lb.MEDIA && g) {
						const e = Object(p.U)(i),
							t = Object(b.v)(e),
							s = Object(p.L)(i) && e.items.length > 1,
							n = !t && !s;
						if (s && !I.galleries) y = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (n && !I.images) y = b.p.ImageWillBeRemoved;
						else if (t && !I.videos) {
							const t = i.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							I.images ? s > o.Z && (y = b.p.VideoWillBeRemovedTooLongForGif) : y = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(y ? Object(c.i)(y) : C({
						...e,
						allowedPostTypes: I
					}, S))
				}, C = (e, t, s = !0) => async (o, i) => {
					const {
						name: d,
						isProfile: c
					} = e, a = i().platform.currentPage, u = a.queryParams, l = c ? m.b : m.c;
					let b = "";
					b = d ? l(d) : f.b, b = Object(r.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || a.url.toLowerCase() !== b.toLowerCase()) && (o(S(e)), s && o(Object(T.r)(!0)), o(Object(T.i)()), o(Object(n.c)(b)))
				}, y = e => async (t, s) => {
					const o = s().platform.currentPage,
						i = o.queryParams,
						d = Object(r.a)(o.url, {
							...i,
							collection: e
						});
					t(Object(n.c)(d))
				}, h = () => async (e, t) => {
					const s = t().platform.currentPage,
						r = Object(i.a)(s.url, ["collection"]);
					e(Object(n.c)(r))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return R
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "p", (function() {
				return F
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "l", (function() {
				return U
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "m", (function() {
				return G
			})), s.d(t, "k", (function() {
				return B
			})), s.d(t, "h", (function() {
				return q
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
				return ne
			})), s.d(t, "o", (function() {
				return de
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/formatApiError/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/postCreation/general.ts"),
				d = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var m = s("./src/reddit/constants/headers.ts"),
				f = s("./src/reddit/helpers/name/index.ts"),
				p = s("./src/reddit/models/PostDraft/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				_ = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts");
			const T = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: p.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: p.b.Markdown,
							body: e.body || void 0
						} : {
							kind: p.b.RichText,
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
					if (t.subreddit_type === E.e.User) {
						const s = Object(O.a)(t, Object(f.g)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(_.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var P = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				S = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/postCreations.ts"),
				h = s("./src/reddit/selectors/postDraft.ts"),
				g = s("./src/reddit/selectors/profile.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const R = "POST_DRAFT__LIST_PENDING",
				N = "POST_DRAFT__LIST_LOADED",
				L = "POST_DRAFT__LIST_FAILED",
				x = Object(o.a)(R),
				k = Object(o.a)(N),
				v = Object(o.a)(L),
				F = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t();
					if (!Object(D.j)(r) || Object(h.b)(r)) return;
					e(x());
					const o = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: n.cb.GET
					}))(s());
					o.ok ? e(k(T(o.body))) : e(v(o.error))
				}, w = "POST_DRAFT__SAVE_DRAFT_PENDING", U = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", M = "POST_DRAFT__SAVE_DRAFT_FAILED", G = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", K = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(o.a)(w), $ = Object(o.a)(U), V = Object(o.a)(M), W = Object(o.a)(G), Y = Object(o.a)(B), Q = Object(o.a)(q), z = Object(o.a)(K), J = e => async (t, s, {
					apiContext: o
				}) => {
					const i = s(),
						a = Object(h.g)(i),
						b = Object(y.Z)(i);
					if (a || b) return;
					const f = Object(h.h)(i, e);
					if (!f) return;
					t(H(f)), j.e(i, f);
					const p = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? n.cb.PUT : n.cb.POST,
						data: Object(P.a)(t)
					}).then(e => e.body.fields && Object(S.u)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: n.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(o(), f, e);
					if (p.ok) {
						const {
							id: s,
							draftsCount: n
						} = Object(P.c)(p.body);
						t($({
							draftId: s,
							draftsCount: n
						})), e || t(Object(d.a)(f.destSubreddit, s, !1))
					} else {
						const e = p.error;
						e.type === n.E.BAD_CAPTCHA_ERROR ? t(Q()) : e.type === n.E.VALIDATION_ERROR ? t(W(e)) : e.type === n.E.SUBMIT_VALIDATION_ERROR ? t(Y(e)) : t(V(e)), t(Object(c.f)({
							duration: c.a,
							kind: I.b.Error,
							text: Object(r.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(o.a)(X), ee = e => async (t, s, {
					apiContext: n
				}) => {
					t(Z(e));
					let r = S.e;
					const o = s();
					if (e.subredditId) {
						const t = Object(A.T)(o, {
								subredditId: e.subredditId
							}),
							s = Object(g.p)(o, {
								profileId: e.subredditId
							}),
							n = Object(D.j)(o);
						t ? r = {
							isProfile: !1,
							name: t.name
						} : s && n && (r = {
							isProfile: !0,
							name: Object(C.e)(n)
						})
					}
					await t(Object(d.a)(r, e.id, !1));
					const i = Object(h.h)(s(), e.id);
					i && j.h(s(), i)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", ne = "POST_DELETE_DRAFT_PENDING", re = Object(o.a)(te), oe = Object(o.a)(se), ie = Object(o.a)(ne), de = (e, t) => async (s, o, {
					apiContext: d
				}) => {
					const m = o();
					if (Object(h.a)(m, e)) return;
					const f = Object(h.d)(m, {
						draftId: e
					});
					f && j.f(m, f), s(ie({
						draftId: e
					}));
					const p = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: n.cb.DELETE
					}))(d(), e);
					if (p.ok) {
						const {
							draftsCount: n
						} = Object(P.c)(p.body);
						s(re({
							draftId: e,
							draftsCount: n
						}));
						const r = Object(a.t)(t);
						e === r && s(Object(i.o)(!0, t))
					} else {
						const t = p.error;
						s(oe({
							draftId: e,
							apiError: t
						})), s(Object(c.f)({
							duration: c.a,
							kind: I.b.Error,
							text: Object(r.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "k", (function() {
				return F
			})), s.d(t, "j", (function() {
				return w
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "h", (function() {
				return G
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/flair/index.ts"),
				a = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				m = s("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				p = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				O = Object(r.a)(f),
				_ = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				E = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				T = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				P = Object(r.a)(E),
				S = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				j = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(r.a)(j),
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				h = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				A = Object(r.a)(h),
				D = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				R = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				L = Object(r.a)(R),
				x = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				k = Object(r.a)(N),
				v = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(m.T)(o, {
							subredditId: e
						}).name;
					s(p());
					const d = await Object(c.k)(r(), i, t);
					if (d.ok) {
						s(O({
							subredditId: e,
							isEnabled: t
						}))
					} else s(_());
					return d.ok
				}, F = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(m.T)(o, {
							subredditId: e
						}).name;
					s(T());
					const d = await Object(c.j)(r(), t, u.d.LinkFlair, i);
					if (d.ok) {
						s(P({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(S());
					return d.ok
				}, w = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const a = r(),
						b = Object(m.T)(a, {
							subredditId: t
						}).name;
					s(I());
					const f = await Object(c.f)(o(), e, b, u.d.LinkFlair);
					let p = f.ok && !(f.body && !1 === f.body.success);
					if (p) {
						const n = f.body;
						if (s(C({
								subredditId: t,
								template: n
							})), n.id) {
							const r = e.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[n.id];
							r ? p = await s(Object(i.d)(t, n.id, r)) : o && (p = await s(Object(i.c)(t, n.id)))
						}
					}
					if (p) {
						const e = Object(d.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						s(Object(d.f)(e))
					} else {
						s(y());
						const r = Object(d.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(e, t));
						s(Object(d.f)(r))
					}
					return p
				}, U = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(m.T)(i, {
							subredditId: t
						}).name;
					if (s(g()), (await Object(c.b)(o(), e, a)).ok) {
						s(A({
							subredditId: t,
							templateId: e
						}));
						const r = Object(d.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						s(Object(d.f)(r))
					} else {
						s(D());
						const r = Object(d.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(d.f)(r))
					}
				}, M = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(b.d)(i, {
							subredditId: t
						}).templateIds,
						f = Object(m.T)(i, {
							subredditId: t
						}).name;
					if (s(L({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), f, u.d.LinkFlair, e)).ok) {
						s(x());
						const e = Object(d.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						s(Object(d.f)(e))
					} else {
						s(k({
							subredditId: t,
							templateIds: a
						}));
						const r = Object(d.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(d.f)(r))
					}
				}, G = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: s
				}) => async (n, r, {
					apiContext: i
				}) => {
					const d = e.flair.filter(e => !Object(a.p)(e.type));
					if (t && d.unshift(t), n(Object(o.L)({
							[e.id]: {
								flair: d
							}
						})), t) {
						const n = Object(a.g)(t);
						Object(c.h)(i(), e.id, s, n)
					} else Object(c.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				d = s("./node_modules/lodash/values.js"),
				c = s.n(d),
				a = s("./src/lib/makeActionCreator/index.ts"),
				u = s("./src/reddit/actions/imageUploads.ts"),
				l = s("./src/reddit/helpers/media/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var O = s("./src/reddit/helpers/trackers/blade.ts"),
				_ = s("./src/reddit/models/Image/index.tsx"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				T = s("./src/telemetry/index.ts");
			const P = ({
				subredditId: e,
				flairId: t,
				imageKey: s,
				imageData: n
			}) => async (r, o, i) => {
				const d = o(),
					c = Object(E.T)(d, {
						subredditId: e
					});
				if (!c) return !1;
				r(Object(u.k)(n));
				const a = await (async (e, t, s, n, r, o) => Object(m.a)(Object(f.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
					method: b.cb.POST,
					data: {
						filepath: n,
						imagetype: r,
						mimetype: o
					}
				}))(i.apiContext(), c.name, t, n.file.name, s, await Object(l.g)(n.file));
				let O = !1;
				try {
					const e = await Object(u.g)(o(), a, n, _.a.FlairTemplates);
					e && r(Object(u.j)(e)), O = !0
				} catch (T) {
					if (T instanceof Error) throw T;
					r(Object(u.i)(T))
				}
				return O
			}, S = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", j = Object(a.a)(S), I = (e, t, s) => async (n, o, d) => {
				const {
					apiContext: a
				} = d;
				let l = o();
				const {
					pendingImages: S,
					...I
				} = s;
				let C = I;
				const y = Object(E.T)(l, {
					subredditId: e
				});
				if (!y) return !1;
				const h = l.structuredStyles.flairTemplate.models[t];
				if (h && i()(h, C)) return !0;
				if (S) {
					const s = [];
					if (r()(S, (r, o) => {
							r && s.push(n(P({
								flairId: t,
								imageData: Object(_.m)(r),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(s)).every(e => e)) return !1;
					C = ((e, t, s) => {
						const n = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && s.imageUploads[e.id];
							r && r.kind === _.b.TempUploaded && (n[t] = r.url)
						}), n
					})(C, S, o())
				}
				l = o();
				let g = null,
					A = null;
				const D = [];
				try {
					(g = await Object(u.f)(l, _.a.FlairTemplates)) && (A = Object(u.m)(g)(n, o, d), D.push(...c()(g.imagesByKey)))
				} catch (x) {
					return !1
				}
				const R = await (async (e, t, s, n) => Object(m.a)(Object(f.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: b.cb.PUT,
						data: n
					}))(a(), y.name, t, C),
					N = h ? "edit_post_flair_template" : "save_post_flair_template",
					L = Object(O.e)(l, N);
				if (R.ok) {
					let e;
					if (A) try {
						await A, e = ((e, t, s) => {
							const n = {
								...e
							};
							return t.forEach(e => {
								const t = s.imageUploads[e.id];
								t && t.kind === _.b.Uploaded && (e.url === n.postBackgroundImage ? n.postBackgroundImage = t.url : e.url === n.postPlaceholderImage && (n.postPlaceholderImage = t.url))
							}), n
						})(C, D, o())
					} catch (x) {
						e = null
					} else e = C;
					n(j({
						flairId: t,
						template: e || C
					}))
				} else g && g.websocket.close();
				return Object(T.a)({
					...L,
					actionInfo: {
						...L.actionInfo,
						success: R.ok
					}
				}), R.ok
			}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", y = Object(a.a)(C), h = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const o = n(),
					i = Object(E.T)(o, {
						subredditId: e
					});
				if (!i) return !1;
				const d = await (async (e, t, s) => Object(m.a)(Object(f.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: b.cb.DELETE
					}))(r(), i.name, t),
					c = Object(O.e)(o, "delete_flair_template");
				return d.ok && s(y({
					flairId: t
				})), Object(T.a)({
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
				return f
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				i = s("./src/reddit/endpoints/me/index.ts"),
				d = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/helpers/trackers/screenview.ts");
			const a = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(r.a)("REDDIT_EMBED_PENDING"),
				b = Object(r.a)(a),
				m = Object(r.a)(u),
				f = (e, t) => async (e, s, {
					apiContext: n
				}) => {
					const r = s();
					e(l());
					const c = await Object(i.a)(n());
					c.ok && c.body ? !t || c.body.account ? (e(b(c.body)), e(Object(o.d)()), p(r)) : Object(d.a)(e, r) : e(m(c.error))
				}, p = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === n.Db.INBOX_PAGES && Object(c.g)(e)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return f
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/config.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			var c = s("./src/reddit/models/Duplicates/index.ts"),
				a = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				m = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(b)),
				f = (e, t) => async (s, n, {
					apiContext: b
				}) => {
					const f = Object(l.T)(n(), {
						subredditId: e
					}) || Object(u.p)(n(), {
						profileId: e
					});
					if (!f) return;
					const p = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(a.g)(f) ? r.Wb + f.name : f.name
						},
						O = await ((e, t, s) => Object(i.a)(e, {
							data: s,
							endpoint: `${o.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.s)(t)}`,
							method: r.cb.GET
						}))(b(), t, p);
					if (O.ok) {
						const n = O.body;
						s(m({
							distinguishKey: Object(c.a)(t, p),
							postIds: n.postIds,
							posts: n.posts,
							profiles: n.profiles,
							subreddits: n.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
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
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
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
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/subscription/constants.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/posts.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var p = s("./src/graphql/operations/SubscribedSubreddits.json"),
				O = s("./src/lib/makeGqlRequest/index.ts"),
				_ = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var E = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				T = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				P = s("./src/reddit/models/GqlTopLevelField.ts"),
				S = s("./src/reddit/models/User/index.ts");

			function j(e) {
				const t = [],
					s = [],
					n = {},
					r = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const d of o.edges) {
					if (d.node.__typename !== S.c.AvailableRedditor) continue;
					const e = Object(E.a)(d.node.profile);
					n[e.id] = e;
					const {
						isFavorite: s
					} = d.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const d of i.edges) {
					if (d.node.__typename !== P.a.Subreddit) continue;
					const e = Object(T.a)(d.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = d.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: n,
					subreddits: r
				}
			}
			var I = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/profile.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/subscriptions.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const A = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				D = Object(o.a)(a.c),
				R = Object(o.a)(a.b),
				N = Object(o.a)(a.a),
				L = Object(o.a)(a.h),
				x = (Object(o.a)(a.i), Object(o.a)(a.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(R());
					const r = await (e => Object(O.a)(e, p))(s());
					if (r.ok) {
						const t = j(r.body.data);
						e(D(t))
					} else e(N({
						error: r.error
					}))
				}),
				k = (e, t) => t.type === l.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				v = (e, t, s) => async (o, a, {
					apiContext: p
				}) => {
					let O = e.map(e => e.type === l.a.SUBREDDIT ? {
						id: Object(y.F)(a(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(C.m)(a(), e.name),
						name: `${r.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(g.K)(a())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(d.j)());
					const E = Object(g.j)(a());
					if (E) {
						const t = O.length,
							s = e.length;
						if (O = O.filter(e => !k(E, e)), (e = e.filter(e => !k(E, e))).length !== s || O.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, I.b.Error)))
						}
						if (!e.length && !O.length) return
					}
					if (o(L({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(h.b)(a()),
							userIsSubscriber: t,
							widgetId: s
						})), (await ((e, {
							subredditIds: t,
							subredditNames: s,
							subscribe: n
						}) => Object(b.a)(Object(m.a)(e, [f.a]), {
							method: r.cb.POST,
							endpoint: Object(_.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: n ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: s && s.join(",") || void 0,
								api_type: "json"
							}
						}))(p(), {
							subredditNames: O.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : `${n.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "followed" : "unfollowed"), n.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							}) : n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "joined" : "left"), n.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(L({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(h.b)(a()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const r = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(r, I.b.Error)))
					}
				}, F = Object(o.a)(a.f), w = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s(),
						i = Object(y.L)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const d = e.type === l.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						a = o.subscriptions.favoriteProfileOrder || [],
						p = c.indexOf(e.id),
						O = a.indexOf(e.id),
						_ = -1 === p && -1 === O,
						E = o.subreddits.models,
						T = o.profiles.models;
					t(F({
						makeFavorite: _,
						identifier: e,
						subredditModels: E,
						profileModels: T
					}));
					const P = {
							type: e.type,
							name: i.name
						},
						S = () => Object(y.gb)(s(), {
							identifier: P
						});
					(S() || (await t(v([P], !0)), S())) && ((await ((e, t, s) => Object(b.a)(Object(m.a)(e, [f.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(n(), d, _)).ok || (t(F({
						makeFavorite: !_,
						identifier: e,
						subredditModels: E,
						profileModels: T
					})), t(Object(u.f)({
						text: A(),
						kind: I.b.Error
					}))))
				}, U = Object(o.a)(a.d), M = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s().multireddits.models,
						i = () => {
							t(Object(u.f)({
								text: A(),
								kind: I.b.Error
							}))
						},
						d = o[e];
					if (!d) return void i();
					const c = !d.isFavorited;
					t(U({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [f.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, c)).ok || (t(U({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, G = Object(o.a)(a.e), B = e => async (t, s, {
					apiContext: o
				}) => {
					const i = s(),
						d = i.multireddits.models;
					if (!Object(g.K)(i)) return;
					const c = (e = !0) => {
							t(Object(u.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: I.b.Error
							}))
						},
						a = d[e];
					if (!a) return void c();
					const l = !a.isFollowed;
					t(G({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: d
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [f.a]), {
						method: r.cb.POST,
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
				return p
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "f", (function() {
				return j
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/chat/unreadCount.ts"),
				i = s("./src/reddit/actions/inbox.ts"),
				d = s("./src/reddit/helpers/tabBadging/index.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/selectors/appBadges.ts"),
				u = s("./src/reddit/selectors/chat.ts"),
				l = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				b = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const p = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				O = Object(r.a)(p),
				_ = e => {},
				E = Object(n.c)({
					basicChannelCount: a.f,
					subredditChannelCount: a.e,
					subredditMentionCount: a.d
				}),
				T = e => {
					const t = Object(l.a)(e);
					return {
						inboxCount: t ? Object(a.i)(e) : Object(m.F)(e) || 0,
						basicChannelCount: t ? Object(a.f)(e) : Object(u.a)(e) || 0
					}
				},
				P = () => async (e, t) => {
					const s = t(),
						n = Object(l.a)(s),
						r = Object(m.J)(s) || Object(m.K)(s),
						o = Object(b.d)(s);
					let i = 0;
					r && (i = n ? o ? Object(a.j)(s) : Object(a.k)(s) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = T(e);
						return t + s
					})(s), _(i), e(O({
						hasUnreadMessages: !!i
					})))
				}, S = () => async (e, t) => {
					{
						e(P());
						const s = T(t());
						Object(d.c)(s)
					}
				}, j = e => async (t, s) => {
					const n = s();
					if (Object(l.a)(n)) {
						const s = Object(a.f)(n),
							r = Object(a.i)(n),
							{
								basicChannelCount: o,
								inboxCount: i
							} = e;
						if (s !== o) {
							const e = Object(f.e)({
								count: o,
								key: c.c.ChatTab
							});
							t(Object(f.a)(e))
						}
						if (i && i !== r) {
							const e = Object(f.e)({
								count: i,
								key: c.c.MessageTab
							});
							t(Object(f.a)(e))
						}(s !== o || i && i !== r) && t(P())
					} else {
						const s = Object(u.a)(n),
							r = Object(u.b)(n),
							d = Object(m.F)(n),
							{
								basicChannelCount: c,
								inboxCount: a
							} = e;
						s !== c && t(Object(o.b)({
							...r,
							basicChannelCount: c
						})), a && a !== d && t(Object(i.b)({
							inboxCount: a
						})), (s !== c || a && a !== d) && t(P())
					}
				}
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(n || (n = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(r || (r = {}))
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts");
			const i = e => Object(o.a)(e, {
				endpoint: `${n.a.gatewayUrl}/desktopapi/v1/me`,
				method: r.cb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts");
			t.a = async e => Object(r.a)(Object(o.a)(e, [i.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.cb.GET,
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
			var n = s("./src/reddit/helpers/flair.ts"),
				r = s("./src/reddit/models/PostDraft/index.ts");
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
						case r.b.Link:
							return "link";
						case r.b.Markdown:
							return "markdown";
						case r.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				c = e => {
					switch (e) {
						case "link":
							return r.b.Link;
						case "markdown":
							return r.b.Markdown;
						case "richtext":
							return r.b.RichText;
						default:
							return "self"
					}
				},
				a = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case r.b.Link:
						case r.b.Markdown:
							return e.body;
						case r.b.RichText:
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
			var n = s("./src/reddit/constants/comments.ts"),
				r = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts");
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
				u = (e, t, s, n) => {
					let o = Object(r.n)(n, {
							commentLink: t,
							commentsPageKey: e
						}),
						i = t;
					for (; o && o.depth > s && o.prev && (i = o.prev, (o = Object(r.n)(n, {
							commentLink: i,
							commentsPageKey: e
						})) && !(o.depth <= s)););
					return i.id
				},
				l = (e, t, s) => {
					const {
						commentLists: n,
						comments: r
					} = e, {
						head: d
					} = n[t];
					if (d) return Object.keys(r).filter(e => {
						const t = r[e];
						return !(!t.isStickied || !((e, t) => {
							const s = Object(i.c)(e, {
								experimentEligibilitySelector: i.a,
								experimentName: o.w,
								expEventOverride: t
							});
							return !!(Object(o.Dd)(s) ? void 0 : s)
						})(s)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(n || (n = {}));
			const r = e => {
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
				return n
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, o, i = s("./src/config.ts");

			function d(e) {
				return "userId" in e
			}

			function c(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function a(e, t, s) {
				const n = s.media[0],
					r = Object.keys(n);
				if (n["0x0"]) return n["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (r.forEach(s => {
						const r = n[s],
							[i, d] = s.split("x").map(e => parseInt(e));
						(i < o.width && i >= e || d < o.height && d >= t) && (o = {
							height: d,
							width: i,
							url: r
						})
					}), !o.url && r.length) {
					const e = Object.keys(n)[0],
						t = n[e],
						[s, r] = e.split("x").map(e => parseInt(e));
					o = {
						height: r,
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
				const n = a(e, t, s),
					r = a(2 * e, 2 * t, s);
				return {
					url: u(n),
					url2x: u(r)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(n || (n = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.DirectMessages = "directMessages", e.MessageTab = "messageTab", e.ChatRooms = "chatRooms", e.ChatRoomMentions = "chatRoomMentions"
			}(r || (r = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (e = o, t) => {
					switch (t.type) {
						case r.o:
							return t.payload;
						case r.p:
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
							error: n
						} = t.payload;
						return {
							...e,
							[s]: n || {}
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
				f = Object(n.c)({
					error: a,
					fullyLoaded: l,
					pending: m
				}),
				p = s("./node_modules/lodash/uniqBy.js"),
				O = s.n(p),
				_ = s("./node_modules/lodash/values.js"),
				E = s.n(_),
				T = s("./src/reddit/actions/comment/constants.ts"),
				P = s("./src/reddit/actions/comment/websocket/constants.ts");
			const S = {};

			function j(e) {
				return O()(e, "id").sort((e, t) => e.created - t.created)
			}
			var I = (e = S, t) => {
					switch (t.type) {
						case d.f:
						case T.u:
						case d.b: {
							const {
								comments: s,
								key: n
							} = t.payload, r = e[n] ? e[n] : [], o = function(e, t) {
								return E()(e).map(e => {
									const s = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: s,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(s, r.find(e => e.stickied)), i = j([...r, ...o]);
							return {
								...e,
								[n]: [...i]
							}
						}
						case P.b:
						case P.c:
						case P.d:
						case T.G:
						case T.F: {
							const {
								comment: {
									id: s,
									created: n,
									isStickied: r,
									authorId: o
								},
								commentsPageKey: i,
								isChatSort: d
							} = t.payload;
							return !1 === d ? e : {
								...e,
								[i]: [...j([...e[i] ? e[i] : [], {
									id: s,
									created: n,
									stickied: r,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				C = s("./node_modules/lodash/mapValues.js"),
				y = s.n(C),
				h = s("./src/reddit/helpers/commentList/index.ts"),
				g = s("./src/reddit/models/Comment/index.ts");
			const A = {};

			function D(e) {
				const t = e;
				return y()(t, ({
					depth: e,
					next: t,
					prev: s
				}) => ({
					depth: e,
					next: t,
					prev: s
				}))
			}
			var R = (e = A, t) => {
				switch (t.type) {
					case T.u: {
						const {
							comments: s,
							commentLists: n,
							continueThreads: r,
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
							const e = Object(h.c)({
									commentLink: c.head,
									commentsDict: s,
									moreCommentsDict: d,
									continueThreadDict: r
								}),
								t = Object(h.c)({
									commentLink: c.tail,
									commentsDict: s,
									moreCommentsDict: d,
									continueThreadDict: r
								});
							l && (e.prev = l.prev, t.next = l.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...D(s),
								...D(r),
								...D(d),
								...u
							}
						}
					}
					case d.b:
					case d.f: {
						const {
							comments: s,
							continueThreads: n,
							key: r,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...D(s),
								...D(n),
								...D(o)
							}
						}
					}
					case P.b:
						const {
							comment: s, commentsPageKey: n, depth: r, headCommentId: o, originId: i, isChatSort: c
						} = t.payload, a = e[n], u = {};
						let l = null;
						if (c) return o && (u[o] = {
							...a[o],
							prev: Object(g.g)(s.id)
						}, l = Object(g.g)(o)), {
							...e,
							[n]: {
								...e[n],
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
										prev: Object(g.h)(s)
									}, l = i), u[o] = {
										...a[o],
										next: Object(g.h)(s)
									}, t = Object(g.g)(o), {
										...e,
										[n]: {
											...e[n],
											...u,
											[s]: {
												depth: r || 0,
												next: l,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case T.G: {
							const {
								comment: s,
								commentsPageKey: n,
								headCommentId: r
							} = t.payload, o = e[n], i = {};
							let d = null;
							return r && (i[r] = {
								...o[r],
								prev: Object(g.g)(s.id)
							}, d = Object(g.g)(r)), {
								...e,
								[n]: {
									...e[n],
									...i,
									[s.id]: {
										depth: 0,
										next: d,
										prev: null
									}
								}
							}
						}
						case T.F: {
							const {
								comment: s,
								commentsPageKey: n,
								parentCommentId: r,
								depth: o
							} = t.payload, i = e[n], d = {};
							let c = null;
							if (!i[r]) return e;
							const a = i[r].next;
							return a && (d[a.id] = {
								...i[a.id],
								prev: Object(g.g)(s.id)
							}, c = a), d[r] = {
								...i[r],
								next: Object(g.g)(s.id)
							}, {
								...e,
								[n]: {
									...e[n],
									...d,
									[s.id]: {
										depth: o,
										next: c,
										prev: Object(g.g)(r)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const N = {};
			var L = (e = N, t) => {
				switch (t.type) {
					case P.b:
					case P.c:
					case T.G: {
						const {
							comment: s,
							commentsPageKey: n,
							isChatSort: r
						} = t.payload;
						return !1 === r ? e : {
							...e,
							[n]: s.id
						}
					}
					case d.b:
					case d.f: {
						const {
							commentLists: s,
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: s[r] && s[r].head ? s[r].head.id : null
						}
					}
					default:
						return e
				}
			};
			const x = {};
			var k = (e = x, t) => {
				switch (t.type) {
					case d.d:
					case d.b:
					case d.c:
					case d.h: {
						const {
							key: s,
							postId: n
						} = t.payload;
						return {
							...e,
							[s]: n
						}
					}
					case T.G: {
						const {
							parentId: s,
							commentsPageKey: n
						} = t.payload;
						return e[n] ? e : {
							...e,
							[n]: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				api: f,
				keyToChatCommentLinks: I,
				keyToCommentThreadLinkSets: R,
				keyToHeadCommentId: L,
				keyToPostId: k,
				ads: i
			})
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				d = s("./node_modules/lodash/merge.js"),
				c = s.n(d),
				a = s("./node_modules/lodash/pick.js"),
				u = s.n(a),
				l = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/comment/constants.ts"),
				m = s("./src/reddit/actions/contentGate.ts"),
				f = s("./src/reddit/actions/frontpage/constants.ts"),
				p = s("./src/reddit/actions/header.ts"),
				O = s("./src/reddit/actions/modQueue/constants.ts"),
				_ = s("./src/reddit/actions/pages/constants.ts"),
				E = s("./src/reddit/actions/pages/modListing/constants.ts"),
				T = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				P = s("./src/reddit/actions/pages/postCreation.ts"),
				S = s("./src/reddit/actions/pages/postDraft.ts"),
				j = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				I = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				C = s("./src/reddit/actions/pages/profilePosts.ts"),
				y = s("./src/reddit/actions/pages/search.ts"),
				h = s("./src/reddit/actions/pages/subreddit.ts"),
				g = s("./src/reddit/actions/pages/topic.ts"),
				A = s("./src/reddit/actions/postCreation/constants.ts"),
				D = s("./src/reddit/actions/postDraft.ts"),
				R = s("./src/reddit/actions/preferences.ts"),
				N = s("./src/reddit/actions/redditEmbed.ts"),
				L = s("./src/reddit/actions/search.ts"),
				x = s("./src/reddit/actions/structuredStyles/constants.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				v = s("./src/reddit/actions/users.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/constants/preferences.ts"),
				U = s("./src/reddit/constants/theme.ts"),
				M = s("./src/reddit/models/PostCreationForm/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				B = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(n || (n = {})),
			function(e) {
				e.Whitelisted = "nobody", e.Everyone = "everyone"
			}(r || (r = {}));
			const q = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "lang", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...w.a, "loginOtpEnabled"],
				K = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: B.a,
					commentMode: M.h.RICH_TEXT,
					layout: F.d.Card,
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
				H = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				$ = (e, t) => {
					if (!t) return e;
					const s = u()({
							...t.account,
							...t
						}, q),
						n = t.subreddit,
						r = {
							...e.subreddit
						};
					Object.keys(n || {}).forEach(e => {
						r[e] = {
							...H,
							...n && n[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: r
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? M.h.MARKDOWN : M.h.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				V = (e, t, s) => $(e, {
					subreddit: {
						[t]: {
							...H,
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
					case A.s:
					case A.M: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case p.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case p.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case D.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === G.b.Markdown ? M.h.MARKDOWN : M.h.RICH_TEXT
						}
					}
					case R.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case R.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case R.p: {
						const {
							layout: s,
							subredditId: n
						} = t.payload;
						return V(e, n, {
							layout: s
						})
					}
					case R.e:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case R.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case m.g:
						return {
							...e, over18: !0
						};
					case R.b:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case R.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case R.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: n
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: n
							}
						}
						return e;
					case x.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case x.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case R.f:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case R.c:
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
					case E.e:
					case E.h:
					case _.a:
					case _.e:
					case _.b:
					case _.f:
					case _.d:
					case _.h:
					case f.b:
					case h.SUBREDDIT_LOADED:
					case T.b:
					case T.a:
					case j.e:
					case I.e:
					case I.b:
					case C.PROFILE_POSTS_LOADED:
					case f.f:
					case k.i:
					case L.c:
					case N.b:
					case P.PAGE_LOADED:
					case S.PAGE_LOADED:
					case R.j:
					case y.SEARCH_RESULTS_RECEIVED:
					case R.a:
					case v.c:
					case g.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? $(e, t.payload.preferences) : e;
					case R.q: {
						const {
							subredditId: s,
							prefs: n
						} = t.payload;
						return V(e, s, n)
					}
					case j.d:
					case I.d:
					case I.a:
					case C.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: n,
								showPresence: r
							} = t.payload.account;
							e.nightmode !== n && (s = {
								...s,
								nightmode: n
							}), e.showPresence !== r && (s = {
								...s,
								showPresence: r
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
						return t.payload && t.payload.response && t.payload.response.preferences ? $(e, t.payload.preferences) : e;
					case R.n: {
						const s = t.payload,
							{
								showActiveCommunities: n
							} = s.additional;
						return e.showActiveCommunities !== n ? {
							...e,
							showActiveCommunities: n
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
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/loadableAction/index.ts"),
				i = s("./src/reddit/routes/postCreation/constants.ts");
			const d = [i.b, i.c, i.a],
				c = Object(n.a)({
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
					chunk: r.p.POST_CREATION,
					exact: !0,
					meta: {
						name: r.Db.POST_CREATION
					},
					path: d,
					prefetches: [r.p.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/comments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return _
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "u", (function() {
				return T
			})), s.d(t, "w", (function() {
				return P
			})), s.d(t, "x", (function() {
				return S
			})), s.d(t, "k", (function() {
				return I
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "G", (function() {
				return y
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "o", (function() {
				return g
			})), s.d(t, "j", (function() {
				return A
			})), s.d(t, "l", (function() {
				return D
			})), s.d(t, "h", (function() {
				return R
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "b", (function() {
				return L
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "t", (function() {
				return v
			})), s.d(t, "z", (function() {
				return F
			})), s.d(t, "I", (function() {
				return w
			})), s.d(t, "s", (function() {
				return U
			})), s.d(t, "B", (function() {
				return M
			})), s.d(t, "C", (function() {
				return G
			})), s.d(t, "E", (function() {
				return B
			})), s.d(t, "r", (function() {
				return q
			})), s.d(t, "e", (function() {
				return K
			})), s.d(t, "v", (function() {
				return H
			})), s.d(t, "J", (function() {
				return $
			})), s.d(t, "f", (function() {
				return V
			})), s.d(t, "i", (function() {
				return W
			})), s.d(t, "F", (function() {
				return Y
			})), s.d(t, "A", (function() {
				return Q
			})), s.d(t, "H", (function() {
				return z
			})), s.d(t, "p", (function() {
				return J
			})), s.d(t, "K", (function() {
				return X
			})), s.d(t, "D", (function() {
				return Z
			})), s.d(t, "y", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeCommentPermalink/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				c = s("./src/reddit/constants/comments.ts"),
				a = s("./src/reddit/models/Post/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/lib/initializeClient/installReducer.ts"),
				p = s("./src/reddit/reducers/features/comments/index.ts"),
				O = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(f.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: O.a
				}
			});
			const _ = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				E = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				T = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				P = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				S = (e, t) => {
					const s = P(e, t);
					if (s) return Object(m.a)(e, {
						commentId: s
					})
				},
				j = [],
				I = Object(d.a)((e, t) => {
					const s = S(e, t),
						n = s && s.id;
					if (!n) return j;
					const {
						commentsPageKey: r
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[r], i = [];
					let d = {
						id: n,
						type: c.a.Comment
					};
					do {
						i.push(d), d = o[d.id].next
					} while (d);
					return i
				}),
				C = (e, t) => P(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				y = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					return s ? e.posts.models[s] : null
				},
				h = (e, {
					commentId: t,
					commentLink: s,
					commentsPageKey: n
				}) => {
					const r = e.pages.comments.keyToCommentThreadLinkSets[n];
					return r ? s ? r[s.id] : t ? r[t] : null : null
				},
				g = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				A = (e, t) => {
					const s = t.commentsPageKey ? h(e, t) : null;
					return s ? s.depth : null
				},
				D = (e, {
					commentLink: t
				}) => {
					const {
						id: s,
						type: n
					} = t;
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
				R = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, s = Object(a.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === s && e.features.comments.models[t].author !== o.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				N = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				L = e => e.moreComments.models,
				x = e => e.features.comments.models,
				k = (e, {
					commentId: t
				}) => {
					const s = Object(m.a)(e, {
						commentId: t
					});
					return s ? Object(i.a)(Object(u.C)(e, s), t) : ""
				},
				v = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				F = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.isEditing[s] && e.features.comments.isEditing[s][t]),
				w = (e, {
					commentId: t,
					commentsPageKey: s
				}) => !!(t && e.features.comments.replyFormOpen[s] && e.features.comments.replyFormOpen[s][t]),
				U = (e, {
					commentsPageKey: t
				}) => {
					const s = t && e.features.comments.replyFormOpen[t] || {},
						n = Object.keys(s).find(e => s[e]),
						r = Object(m.a)(e, {
							commentId: n
						}),
						o = r && A(e, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (r && "number" == typeof o) return {
						...r,
						depth: o
					}
				},
				M = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				G = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				B = (e, {
					commentsPageKey: t
				}) => {
					const s = e.pages.comments.keyToPostId[t];
					if (s) {
						const t = r()(e.moreComments.models).find(t => t.postId === s && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
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
				K = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.models[t] : void 0;
					if (!s) return null;
					const n = e.authorFlair.models[s.subredditId];
					return n ? n[s.author] : null
				},
				H = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				$ = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.submit.error[t];
					return s && s.fields ? s.fields.map(e => e.msg) : []
				},
				V = (e, {
					draftKey: t
				}) => {
					const s = e.features.comments.drafts[t];
					return !!s && s.autofocusDisabled
				},
				W = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				Y = (e, {
					commentId: t
				}) => {
					const s = t ? e.features.comments.submit.error[t] : void 0;
					return s && s.fields ? s.fields.map(e => e.msg) : void 0
				},
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				J = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const s = Object(m.a)(e, t);
					if (s) return Object(l.Y)(e, s)
				},
				Z = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0,
				ee = (e, {
					commentId: t
				}) => {
					const s = Object(m.a)(e, {
							commentId: t
						}),
						n = s && s.authorId || "";
					return Object(b.S)(e, n)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.a6004f021d04bb8875bb.js.map