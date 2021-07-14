// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.4e8e61d533259d249653.js
// Retrieved at 7/14/2021, 6:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(n.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/brcast/dist/brcast.es.js");
			const r = () => "undefined" != typeof document,
				i = () => r() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: d,
					unsubscribe: a,
					setState: c
				} = Object(n.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => c(o());
			(() => {
				const e = (() => {
					if (!r()) return;
					const e = Object.keys(u).find(e => e in document);
					return e ? u[e] : void 0
				})();
				e && document.addEventListener(e, l)
			})(), t.a = {
				isDocumentHidden: () => !i(),
				isDocumentVisible: i,
				subscribe: d,
				unsubscribe: a
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "APP_BADGES__PENDING",
				r = "APP_BADGES__LOADED",
				i = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/BadgeIndicators.json"),
				a = e => Object(o.a)(e, {
					...d
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const u = Object(n.a)(r.c),
				l = Object(n.a)(r.b),
				b = Object(n.a)(r.d),
				m = Object(n.a)(r.a),
				p = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: c.b.Numbered
					}
				}),
				O = (e, t, s) => ({
					[c.c.DirectMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatRooms]: {
						count: t,
						style: c.b.Numbered
					},
					[c.c.ChatRoomMentions]: {
						count: s,
						style: c.b.Numbered
					}
				}),
				f = () => async (e, t, {
					gqlContext: s
				}) => {
					e(u());
					const n = await async function(e) {
						const t = await a(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(s);
					n ? (e(l(n)), e(Object(i.d)())) : e(m())
				};
			const _ = () => async e => {
				const t = p({
					key: c.c.MessageTab,
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
				return p
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "d", (function() {
				return T
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/chat/endpoints/sendbird/index.ts"),
				d = s("./src/reddit/actions/tabBadging.ts"),
				a = s("./src/reddit/selectors/chat.ts"),
				c = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(n || (n = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: m
			} = n, p = Object(i.a)(u), O = Object(i.a)(l), f = Object(i.a)(b), _ = Object(i.a)(m);
			let E;
			const h = 5 * r.ib,
				T = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t();
					if (!Object(c.J)(n) || !Object(a.d)(n)) return clearTimeout(E);
					E || e((() => async (e, t, {
						apiContext: s
					}) => {
						const n = t(),
							{
								session: r
							} = n.user;
						if (r && Object(c.J)(n) && Object(a.d)(n)) {
							e(f());
							const t = await Object(o.g)(s(), r);
							t && t.ok ? (e(_({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(d.d)())) : e(O({
								error: t.error
							}))
						}
					})()), E = setTimeout(() => {
						e(T())
					}, h)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				r = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				o = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return A
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/camelCase.js"),
				i = s.n(r),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/sentry/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/reddit/models/AutomatedReporting/index.ts"),
				b = s("./src/redditGQL/operations/FetchContentControls.json");
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
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var p = s("./node_modules/lodash/isEmpty.js"),
				O = s.n(p),
				f = s("./src/redditGQL/operations/UpdateAutomatedReportingSettings.json"),
				_ = s("./src/redditGQL/operations/UpdatePostRequirements.json"),
				E = s("./src/reddit/endpoints/subreddit/about.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/contentControls.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/actions/contentControls/constants.ts");
			const j = Object(d.a)(g.b),
				C = Object(d.a)(g.c),
				I = Object(d.a)(g.a),
				S = e => async (t, s, {
					gqlContext: n
				}) => {
					const r = {
						subredditName: e.toLowerCase()
					};
					if (Object(T.a)(s(), r)) return;
					t(C(r));
					let i = Object(P.D)(s(), e);
					if (!i) {
						const s = await Object(E.a)(n(), e, !1);
						if (s.ok) {
							i = s.body.data.subreddit.id
						}
						if (!i) {
							const e = s.error || {
								type: o.G.NOT_FOUND_ERROR
							};
							return void t(I({
								...r,
								error: e
							}))
						}
					}
					let d = null;
					const c = await ((e, t) => Object(u.a)(e, {
						...b,
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
						subredditId: i
					});
					if (c.ok) {
						const e = c.body;
						d = e.data.subreddit && e.data.subreddit
					}
					if (d) t(j({
						...r,
						...d
					}));
					else {
						const s = c.error || {
							type: o.G.UNKNOWN_ERROR
						};
						t(I({
							...r,
							error: s
						})), a.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: c.body,
								responseOk: c.ok
							}), a.c.captureMessage("Missing post requirements data!")
						})
					}
				}, y = Object(d.a)(g.d), A = (e, t) => async (s, r, {
					gqlContext: i
				}) => {
					const o = e.toLowerCase(),
						d = Object(P.D)(r(), e);
					if (!d) return {
						success: !1
					};
					const a = await ((e, t, s) => {
						const n = [Promise.resolve(null), Promise.resolve(null)];
						if (s.postRequirements && !O()(s.postRequirements)) {
							const r = {
								subredditId: t,
								...s.postRequirements
							};
							n[0] = Object(u.a)(e, {
								..._,
								variables: {
									input: r
								}
							})
						}
						if (s.automatedReporting && !O()(s.automatedReporting)) {
							const r = {
								subredditId: t
							};
							s.automatedReporting.levelAbuse && (r.automatedReportingLevelAbuse = s.automatedReporting.levelAbuse), s.automatedReporting.levelHate && (r.automatedReportingLevelHate = s.automatedReporting.levelHate), n[1] = Object(u.a)(e, {
								...f,
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
					})(i(), d, t);
					if (a.ok) return s(y({
						subredditName: o,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = D(a.fieldErrors);
						return s(Object(c.f)({
							duration: c.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: h.b.Error,
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
					field: i()(e.field)
				}))
		},
		"./src/reddit/actions/frontpage/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			}));
			const n = "PAGE__FRONTPAGE_PENDING",
				r = "PAGE__FRONTPAGE_LOADED",
				i = "PAGE__FRONTPAGE_FAILED",
				o = "PAGE__FRONTPAGE_RELOADED",
				d = "FRONTPAGE__MORE_POSTS_PENDING",
				a = "FRONTPAGE__MORE_POSTS_LOADED",
				c = "FRONTPAGE__MORE_POSTS_FAILED"
		},
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const r = "INBOX__COUNT_UPDATE",
				i = Object(n.a)(r)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/profile/index.ts"),
				i = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const d = "MOD_PERMS__REQUEST_LOADED",
				a = (Object(n.a)("MOD_PERMS__REQUEST_PENDING"), Object(n.a)(d), Object(n.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.j)(t());
					if (s) {
						const t = Object(i.e)(s);
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
				return i
			}));
			const n = "PAGE__MULTIREDDIT_FEED_PENDING",
				r = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return L
			})), s.d(t, "PAGE_LOADED", (function() {
				return k
			})), s.d(t, "PAGE_FAILED", (function() {
				return M
			})), s.d(t, "pagePending", (function() {
				return G
			})), s.d(t, "pageLoaded", (function() {
				return F
			})), s.d(t, "pageFailed", (function() {
				return U
			})), s.d(t, "postCreationPageDataRequested", (function() {
				return B
			})), s.d(t, "postCreationPageRequested", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				o = s("./src/lib/isFakeSubreddit/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makePostCreationPageKey/index.ts"),
				c = s("./src/lib/pageTitle.ts"),
				u = s("./src/reddit/actions/contentControls/index.ts"),
				l = s("./src/reddit/actions/economics/helpers/async.ts"),
				b = s("./src/reddit/actions/externalAccount.ts"),
				m = s("./src/reddit/actions/gold/powerups.ts"),
				p = s("./src/reddit/actions/platform.ts"),
				O = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/actions/postCreation/general.ts"),
				_ = s("./src/reddit/actions/profile/index.ts"),
				E = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/actions/subredditDuplicates.ts"),
				T = s("./src/config.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				C = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = s("./src/reddit/helpers/trackers/postComposer.ts"),
				S = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/contentControls.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
				D = s("./src/reddit/selectors/postCreations.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/profile.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const w = e => {
					const t = e.platform.currentPage;
					let s = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: n
						} = t.urlParams, r = Object(v.y)(e, {
							subredditName: n
						});
						r && (s = r.name)
					}
					return Object(c.j)(s)
				},
				L = "POST_CREATION__PAGE_PENDING",
				k = "POST_CREATION__PAGE_LOADED",
				M = "POST_CREATION__PAGE_FAILED",
				G = Object(d.a)(L),
				F = Object(d.a)(k),
				U = Object(d.a)(M),
				V = () => async (e, t) => {
					const s = t(),
						n = Object(D.a)(s);
					n !== Object(D.kb)(s) && e(Object(f.g)({
						submissionType: n
					}))
				}, B = e => async (t, s, n) => {
					const {
						collectionId: i,
						profileName: d,
						subredditName: c
					} = e, l = Object(a.a)(e), p = s(), O = p.creations.api.page.pending[l], f = p.creations.api.page.fetched[l], h = p.creations.api.page.error[l];
					if (O) return;
					if (f && !h) return void t(V());
					const j = [];
					t(G({
						key: l
					}));
					let I = c;
					!c && d && (I = `u_${d}`), j.push(((e, t) => Object(P.a)(e, {
						method: r.hb.GET,
						endpoint: Object(g.a)(`${T.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: I,
						collectionId: i
					})), d && (j.push(t(_.d(d))), j.push(t(_.b(d))));
					const [A] = await Object(C.a)("postCreation", () => Promise.all(j));
					if (A.ok) {
						const e = A.body,
							{
								posts: n = {},
								subredditAboutInfo: r
							} = e;
						if (t(F({
								key: l,
								meta: p.meta,
								...e,
								posts: n
							})), !Object(x.J)(s())) return;
						if (r) {
							const e = Object.keys(r)[0];
							await t(Object(m.k)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(V());
						const i = [];
						i.push(t(b.o()));
						const d = Object(x.j)(s());
						if (d && d.hasUserProfile && i.push(t(_.d(Object(S.e)(d)))), c && !Object(o.a)(c)) {
							i.push(t(E.o(c))), !!Object(y.b)(s(), {
								subredditName: c
							}) || i.push(t(Object(u.a)(c)))
						}
						await Promise.all(i)
					} else t(U({
						error: A.error,
						key: l
					}))
				}, q = e => async (t, s) => {
					const {
						subredditName: o,
						profileName: d
					} = e.params, a = e.queryParams, c = a.collection;
					if (await t(B({
							collectionId: c,
							profileName: d,
							subredditName: o
						})), !Object(x.J)(s())) return void Object(j.a)(t, s());
					let u;
					if (o ? (u = Object(v.y)(s(), {
							subredditName: o
						}), await t(Object(l.a)({
							subredditName: o
						}))) : d && (u = Object(N.j)(s(), {
							profileName: d
						})), a.source_id) await t(((e, t) => async (s, n) => {
						const {
							subredditName: r,
							profileName: i
						} = e, o = [];
						let d;
						r ? d = Object(v.D)(n(), r) : i && (d = Object(x.eb)(n(), {
							userName: i
						})), d && o.push(s(Object(h.b)(d, t))), o.push(s(Object(O.S)(t))), await Promise.all(o);
						const a = Object(R.f)(n(), {
							postId: t
						});
						s(Object(f.k)({
							postId: t,
							postTitle: a ? a.title : ""
						}))
					})(e.params, a.source_id));
					else if (c) {
						const r = Object(A.q)(s(), {
							collectionId: c
						});
						u && r && r.subredditId === u.id || t(Object(n.c)(Object(i.a)(e.url, ["collection"])))
					}((e, t) => {
						const s = e.platform.lastPage;
						t && s && s.meta && s.meta.name === r.Jb.POST_CREATION && I.x(e)
					})(s(), o), t(p.l({
						title: w(s())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return m
			})), s.d(t, "PAGE_LOADED", (function() {
				return p
			})), s.d(t, "PAGE_FAILED", (function() {
				return O
			})), s.d(t, "pagePending", (function() {
				return f
			})), s.d(t, "pageLoaded", (function() {
				return _
			})), s.d(t, "pageFailed", (function() {
				return E
			})), s.d(t, "postDraftPageDataRequested", (function() {
				return h
			})), s.d(t, "postDraftRequested", (function() {
				return T
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makePostDraftPageKey/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				o = s("./src/config.ts"),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const m = "POST_DRAFT__PAGE_PENDING",
				p = "POST_DRAFT__PAGE_LOADED",
				O = "POST_DRAFT__PAGE_FAILED",
				f = Object(n.a)(m),
				_ = Object(n.a)(p),
				E = Object(n.a)(O),
				h = e => async (t, s, n) => {
					const {
						draftId: m,
						profileName: p
					} = e, O = Object(r.a)(e), f = s(), h = f.creations.api.page.pending[O], T = f.creations.api.page.fetched[O], P = f.creations.api.page.error[O];
					if (h || T && !P || !m) return;
					t(i.d(p));
					const g = await Object(b.a)("postDraft", () => ((e, t, s) => Object(a.a)(e, {
						endpoint: Object(c.a)(Object(u.a)(`${o.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${s}/${t}`)),
						method: d.hb.GET
					}))(n.apiContext(), m, p));
					if (g.ok) {
						const e = g.body;
						e.drafts[m].kind = Object(l.b)(e.drafts[m].kind), t(_({
							...e,
							key: O
						}))
					} else t(E({
						error: g.error,
						key: O
					}))
				}, T = e => async (t, s, n) => {
					await t(h(e.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return D
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return R
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return N
			})), s.d(t, "profilePostsPending", (function() {
				return v
			})), s.d(t, "profilePostsLoaded", (function() {
				return x
			})), s.d(t, "profilePostsFailed", (function() {
				return w
			})), s.d(t, "profilePostsRequested", (function() {
				return L
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return k
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return M
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return G
			})), s.d(t, "morePostsPending", (function() {
				return F
			})), s.d(t, "morePostsLoaded", (function() {
				return U
			})), s.d(t, "morePostsFailed", (function() {
				return V
			})), s.d(t, "morePostsRequested", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/pick.js"),
				r = s.n(n),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				a = s("./src/reddit/actions/externalAccount.ts"),
				c = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				l = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				m = s("./src/reddit/actions/profile/index.ts"),
				p = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/constants/errors.ts"),
				f = s("./src/reddit/constants/parameters.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/config.ts"),
				h = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				T = s("./src/lib/constants/index.ts"),
				P = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const C = (e, t, s) => Object(P.a)(e, {
				data: s,
				endpoint: Object(g.a)(Object(h.a)(Object(j.a)(`${E.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: T.hb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var I = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				A = s("./src/reddit/selectors/profile.ts");
			const D = "PAGE__PROFILE_POSTS_PENDING",
				R = "PAGE__PROFILE_POSTS_LOADED",
				N = "PAGE__PROFILE_POSTS_FAILED",
				v = Object(i.a)(D),
				x = Object(i.a)(R),
				w = Object(i.a)(N),
				L = e => async (t, s, n) => {
					const {
						queryParams: i,
						params: E
					} = e, {
						sort: h,
						t: T
					} = Object(u.b)(i), {
						profileName: P
					} = E, g = Object(o.a)(`u_${P}`, h, i), j = s(), D = j.listings.postOrder.ids[g], R = Object(y.c)(j, {
						listingKey: g
					}), N = Object(y.d)(j, {
						listingKey: g
					});
					if (await t(m.d(P)), N || D && !R) {
						if (D) {
							const e = Object(A.q)(s(), {
								profileName: P
							});
							t(b.l({
								title: e
							}))
						}
						return
					}
					const L = {
						...r()(e.queryParams, [...f.l, ...f.k, f.h]),
						layout: Object(_.O)(j, {}).toLowerCase(),
						sort: h,
						t: Object(I.a)(h, T)
					};
					t(v({
						key: g
					}));
					const k = await Object(S.a)("profilePosts", () => C(n.apiContext(), P, L));
					if (!k.ok) return t(w({
						account: k.body.data ? k.body.data.account : null,
						error: k.body.reason ? {
							type: k.body.reason
						} : k.error,
						key: g
					})), k.body.reason === O.a.DeletedProfile && t(Object(d.p)({
						profileName: P
					})), void t(b.m(k.status));
					const M = k.body;
					t(x({
						key: g,
						meta: s().meta,
						...M
					}));
					const G = Object(A.m)(s(), P),
						{
							pinned: F
						} = M;
					t(Object(l.h)({
						profileId: G,
						pinned: F
					})), await Promise.all([t(Object(u.c)(P)), t(Object(p.q)()), t(Object(c.b)()), t(a.o(P))])
				}, k = "PROFILE_POSTS__MORE_POSTS_PENDING", M = "PROFILE_POSTS__MORE_POSTS_LOADED", G = "PROFILE_POSTS__MORE_POSTS_FAILED", F = Object(i.a)(k), U = Object(i.a)(M), V = Object(i.a)(G), B = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t(),
						{
							currentPage: i
						} = n.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: d,
						params: a
					} = i.routeMatch.match, {
						sort: c,
						t: l
					} = Object(u.b)(d), {
						profileName: b
					} = a, m = Object(o.a)(`u_${b}`, c, d), p = Object(y.g)(n, {
						listingKey: m
					});
					if (!p) return;
					const O = Object(y.d)(n, {
							listingKey: m
						}),
						E = Object(y.e)(n, {
							listingKey: m,
							token: p.token
						});
					if (O || E) return;
					e(F({
						key: m,
						fetchedToken: p.token
					}));
					const h = {
							after: p.token,
							dist: p.dist,
							sort: c,
							t: l,
							...r()(d, f.l),
							layout: Object(_.O)(n, {}).toLowerCase()
						},
						T = await C(s(), b, h),
						P = n.listings.postOrder.ids[m],
						g = T.body.postIds || [],
						j = {
							...T.body,
							postIds: g.filter(e => !P || !P.includes(e))
						};
					T.ok ? (e(U({
						fetchedToken: p.token,
						key: m,
						meta: n.meta,
						...j
					})), await e(Object(u.c)(b))) : e(V({
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
				return O
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "i", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				p = Object(i.a)(m),
				O = "PINNEDPOST__PIN_POST_SUCCESS",
				f = "PINNEDPOST__UNPIN_POST_SUCCESS",
				_ = Object(i.a)(O),
				E = Object(i.a)(f),
				h = "PINNEDPOST__PIN_POST_PENDING",
				T = "PINNEDPOST__UNPIN_POST_PENDING",
				P = Object(i.a)(h),
				g = Object(i.a)(T),
				j = "PINNEDPOST__PIN_POST_FAILURE",
				C = "PINNEDPOST__UNPIN_POST_FAILURE",
				I = Object(i.a)(j),
				S = Object(i.a)(C),
				y = e => Object(d.f)({
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
				N = (e, t = !1) => async (s, i, {
					apiContext: m
				}) => {
					const p = i(),
						O = p.posts.models[e];
					if (!O) return;
					const f = !Object(l.r)(p, {
						postId: e
					});
					if (f && O.isRemoved) return s((() => Object(d.f)({
						kind: u.b.Error,
						text: n.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const h = O.author,
						T = Object(b.m)(p, h),
						[j, C, N, v, x] = f ? [P, _, I, y, D] : [g, E, S, A, R];
					if (f) {
						if (Object(l.N)(p, {
								profileName: h
							}).length >= r.ab) return void s(Object(o.i)(a.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const w = Object(l.o)(p, e, h),
						L = !f && w;
					s(j({
						postId: e,
						profileId: T
					})), (await Object(c.t)(m(), e, f, !0)).ok ? (s(C({
						postId: e,
						profileId: T
					})), t || s(v(e, L))) : (s(N({
						postId: e,
						profileId: T
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
				return i
			})), s.d(t, "m", (function() {
				return o
			})), s.d(t, "x", (function() {
				return d
			})), s.d(t, "D", (function() {
				return a
			})), s.d(t, "E", (function() {
				return c
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "C", (function() {
				return l
			})), s.d(t, "p", (function() {
				return b
			})), s.d(t, "M", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "z", (function() {
				return O
			})), s.d(t, "s", (function() {
				return f
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "j", (function() {
				return I
			})), s.d(t, "q", (function() {
				return S
			})), s.d(t, "O", (function() {
				return y
			})), s.d(t, "N", (function() {
				return A
			})), s.d(t, "P", (function() {
				return D
			})), s.d(t, "Q", (function() {
				return R
			})), s.d(t, "R", (function() {
				return N
			})), s.d(t, "S", (function() {
				return v
			})), s.d(t, "T", (function() {
				return x
			})), s.d(t, "U", (function() {
				return w
			})), s.d(t, "V", (function() {
				return L
			})), s.d(t, "r", (function() {
				return k
			})), s.d(t, "A", (function() {
				return M
			})), s.d(t, "u", (function() {
				return G
			})), s.d(t, "v", (function() {
				return F
			})), s.d(t, "t", (function() {
				return U
			})), s.d(t, "w", (function() {
				return V
			})), s.d(t, "L", (function() {
				return B
			})), s.d(t, "o", (function() {
				return q
			})), s.d(t, "y", (function() {
				return H
			})), s.d(t, "X", (function() {
				return $
			})), s.d(t, "F", (function() {
				return Q
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "B", (function() {
				return K
			})), s.d(t, "J", (function() {
				return z
			})), s.d(t, "K", (function() {
				return J
			})), s.d(t, "I", (function() {
				return Y
			})), s.d(t, "W", (function() {
				return X
			}));
			const n = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				r = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				i = "POST_CREATION_EDIT_COMPLETE",
				o = "POST_CREATION_EDIT_FAILED",
				d = "POST_CREATION_PENDING_EDIT",
				a = "POST_CREATION_START_EDITING_POST",
				c = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				b = "FINISHED_CONVERTING_EDITOR_CONTENT",
				m = "POST_CREATION__TOGGLE_EDITOR_MODE",
				p = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				O = "POST_TITLE_FETCHED",
				f = "INITIALIZE_EDITOR_MODE",
				_ = "POST_CREATION__CHANGE_FLAIR",
				E = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				h = "POST_CREATION__CHANGE_LINK_BODY",
				T = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				P = "POST_CREATION__CHANGE_MEDIA_BODY",
				g = "POST_CREATION__CHANGE_RECAPTCHA",
				j = "POST_CREATION__CHANGE_RTE_STATE",
				C = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				I = "POST_CREATION__CHANGE_TITLE",
				S = "POST_CREATION__GOV_TYPE_CHANGED",
				y = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				A = "POST_CREATION__TOGGLE_IS_CHANGED",
				D = "POST_CREATION__TOGGLE_IS_GOV",
				R = "POST_CREATION__TOGGLE_IS_NSFW",
				N = "POST_CREATION__TOGGLE_IS_OC",
				v = "POST_CREATION__TOGGLE_IS_POLL",
				x = "POST_CREATION__TOGGLE_IS_SPOILER",
				w = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				L = "POST_CREATION__TOGGLE_SEND_REPLIES",
				k = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				M = "POST_CREATION__RESET_FORM",
				G = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				U = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				V = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				q = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				$ = "POST_CREATION__VALIDATION_FAILED",
				Q = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				W = "POST_CREATION__CAPTCHA_REQUIRED",
				K = "POST_CREATION__SET_SUBMIT_MODE",
				z = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				J = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return O
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "s", (function() {
				return A
			})), s.d(t, "r", (function() {
				return D
			})), s.d(t, "t", (function() {
				return R
			})), s.d(t, "u", (function() {
				return N
			})), s.d(t, "v", (function() {
				return v
			})), s.d(t, "w", (function() {
				return x
			})), s.d(t, "y", (function() {
				return w
			})), s.d(t, "z", (function() {
				return L
			})), s.d(t, "A", (function() {
				return k
			})), s.d(t, "k", (function() {
				return M
			})), s.d(t, "p", (function() {
				return G
			})), s.d(t, "q", (function() {
				return F
			})), s.d(t, "o", (function() {
				return U
			})), s.d(t, "x", (function() {
				return V
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "l", (function() {
				return q
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/endpoints/post/index.tsx"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				u = s("./src/reddit/routes/postCreation/constants.ts"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/reddit/selectors/postCollection.ts"),
				m = s("./src/reddit/selectors/postCreations.ts"),
				p = s("./src/reddit/actions/postCreation/constants.ts");
			const O = Object(i.a)(p.n),
				f = Object(i.a)(p.z),
				_ = (Object(i.a)(p.s), e => {
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
				E = Object(i.a)(p.b),
				h = Object(i.a)(p.c),
				T = Object(i.a)(p.d),
				P = Object(i.a)(p.e),
				g = Object(i.a)(p.f),
				j = Object(i.a)(p.g),
				C = Object(i.a)(p.h),
				I = Object(i.a)(p.i),
				S = Object(i.a)(p.j),
				y = Object(i.a)(p.q),
				A = Object(i.a)(p.O),
				D = Object(i.a)(p.N),
				R = (Object(i.a)(p.P), Object(i.a)(p.Q)),
				N = Object(i.a)(p.R),
				v = Object(i.a)(p.S),
				x = Object(i.a)(p.T),
				w = Object(i.a)(p.U),
				L = Object(i.a)(p.V),
				k = Object(i.a)(p.W),
				M = Object(i.a)(p.r),
				G = e => async (t, s, {
					apiContext: n
				}) => {
					t(T(e)), Object(r.a)(e) && t((e => async (t, s, {
						apiContext: n
					}) => {
						const r = await Object(a.f)(n(), e);
						r.ok && r.body && r.body.json && r.body.json.data && t(f(r.body.json.data))
					})(e))
				}, F = Object(i.a)(p.A), U = (e, t) => async (s, r) => {
					s(F()), s(e ? Object(n.b)(u.b) : Object(n.b)(Object(m.ab)(r(), {
						pageLayer: t
					})))
				}, V = e => async t => {
					t(o.i(e))
				}, B = e => async (t, s) => {
					const n = s(),
						r = Object(d.D)(e),
						i = Object(m.F)(n);
					if (r && i) {
						Object(l.a)(n) !== c.c && t(V(c.c))
					} else t(U(!1, e))
				}, q = e => async (t, s) => {
					const n = s();
					Object(b.m)(n, {
						subredditId: e
					}) ? t(o.i(c.a)) : t(o.i(c.b))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "c", (function() {
				return S
			}));
			var n = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				O = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/actions/postCreation/constants.ts"),
				h = s("./src/reddit/actions/postCreation/general.ts");
			const T = Object(d.a)(E.J),
				P = Object(d.a)(E.K),
				g = Object(d.a)(E.I),
				j = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					let o = n();
					const {
						name: d,
						isProfile: m
					} = e, p = Object(f.e)(o), E = p && !m && Object(l.a)(p.name, d), h = o.creations.api.subreddit.change.pending;
					if (E || h) return;
					const P = Object(u.u)(t);
					if (!d) return void s(C(e, P));
					s(T(e));
					const g = m ? {
						profileName: d
					} : {
						subredditName: d
					};
					if (await s(Object(c.postCreationPageDataRequested)(g)), m || !Object(O.A)(o)) return s(C(e, P));
					const j = e.allowedPostTypes || Object(_.x)(n(), {
						subredditName: d
					});
					if (!j) return void s(C(e, P));
					let I;
					o = n();
					const S = Object(O.kb)(o),
						y = Object(O.A)(o);
					if (S === i.Rb.MEDIA && y) {
						const e = Object(O.U)(o),
							t = Object(b.v)(e),
							s = Object(O.L)(o) && e.items.length > 1,
							n = !t && !s;
						if (s && !j.galleries) I = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (n && !j.images) I = b.p.ImageWillBeRemoved;
						else if (t && !j.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							j.images ? s > i.eb && (I = b.p.VideoWillBeRemovedTooLongForGif) : I = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(I ? Object(a.i)(I) : C({
						...e,
						allowedPostTypes: j
					}, P))
				}, C = (e, t, s = !0) => async (i, o) => {
					const {
						name: d,
						isProfile: a
					} = e, c = o().platform.currentPage, u = c.queryParams, l = a ? m.b : m.c;
					let b = "";
					b = d ? l(d) : p.b, b = Object(r.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(P(e)), s && i(Object(h.r)(!0)), i(Object(h.i)()), i(Object(n.c)(b)))
				}, I = e => async (t, s) => {
					const i = s().platform.currentPage,
						o = i.queryParams,
						d = Object(r.a)(i.url, {
							...o,
							collection: e
						});
					t(Object(n.c)(d))
				}, S = () => async (e, t) => {
					const s = t().platform.currentPage,
						r = Object(o.a)(s.url, ["collection"]);
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
				return v
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "l", (function() {
				return G
			})), s.d(t, "i", (function() {
				return F
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "k", (function() {
				return V
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "s", (function() {
				return J
			})), s.d(t, "r", (function() {
				return Y
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
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				d = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/name/index.ts"),
				O = s("./src/reddit/models/PostDraft/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				_ = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts");
			const h = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: O.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: O.b.Markdown,
							body: e.body || void 0
						} : {
							kind: O.b.RichText,
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
					if (t.subreddit_type === E.f.User) {
						const s = Object(f.a)(t, Object(p.g)(t.display_name_prefixed));
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
				g = s("./src/reddit/helpers/trackers/postComposer.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				I = s("./src/reddit/selectors/postCreations.ts"),
				S = s("./src/reddit/selectors/postDraft.ts"),
				y = s("./src/reddit/selectors/profile.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const R = "POST_DRAFT__LIST_PENDING",
				N = "POST_DRAFT__LIST_LOADED",
				v = "POST_DRAFT__LIST_FAILED",
				x = Object(i.a)(R),
				w = Object(i.a)(N),
				L = Object(i.a)(v),
				k = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t();
					if (!Object(D.j)(r) || Object(S.b)(r)) return;
					e(x());
					const i = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: n.hb.GET
					}))(s());
					i.ok ? e(w(h(i.body))) : e(L(i.error))
				}, M = "POST_DRAFT__SAVE_DRAFT_PENDING", G = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", F = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", V = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(M), $ = Object(i.a)(G), Q = Object(i.a)(F), W = Object(i.a)(U), K = Object(i.a)(V), z = Object(i.a)(B), J = Object(i.a)(q), Y = e => async (t, s, {
					apiContext: i
				}) => {
					const o = s(),
						c = Object(S.g)(o),
						b = Object(I.Z)(o);
					if (c || b) return;
					const p = Object(S.h)(o, e);
					if (!p) return;
					t(H(p)), g.e(o, p);
					const O = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? n.hb.PUT : n.hb.POST,
						data: Object(T.a)(t)
					}).then(e => e.body.fields && Object(P.u)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: n.G.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(i(), p, e);
					if (O.ok) {
						const {
							id: s,
							draftsCount: n
						} = Object(T.c)(O.body);
						t($({
							draftId: s,
							draftsCount: n
						})), e || t(Object(d.a)(p.destSubreddit, s, !1))
					} else {
						const e = O.error;
						e.type === n.G.BAD_CAPTCHA_ERROR ? t(z()) : e.type === n.G.VALIDATION_ERROR ? t(W(e)) : e.type === n.G.SUBMIT_VALIDATION_ERROR ? t(K(e)) : t(Q(e)), t(Object(a.f)({
							duration: a.a,
							kind: j.b.Error,
							text: Object(r.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(X), ee = e => async (t, s, {
					apiContext: n
				}) => {
					t(Z(e));
					let r = P.e;
					const i = s();
					if (e.subredditId) {
						const t = Object(A.S)(i, {
								subredditId: e.subredditId
							}),
							s = Object(y.p)(i, {
								profileId: e.subredditId
							}),
							n = Object(D.j)(i);
						t ? r = {
							isProfile: !1,
							name: t.name
						} : s && n && (r = {
							isProfile: !0,
							name: Object(C.e)(n)
						})
					}
					await t(Object(d.a)(r, e.id, !1));
					const o = Object(S.h)(s(), e.id);
					o && g.h(s(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", ne = "POST_DELETE_DRAFT_PENDING", re = Object(i.a)(te), ie = Object(i.a)(se), oe = Object(i.a)(ne), de = (e, t) => async (s, i, {
					apiContext: d
				}) => {
					const m = i();
					if (Object(S.a)(m, e)) return;
					const p = Object(S.d)(m, {
						draftId: e
					});
					p && g.f(m, p), s(oe({
						draftId: e
					}));
					const O = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: n.hb.DELETE
					}))(d(), e);
					if (O.ok) {
						const {
							draftsCount: n
						} = Object(T.c)(O.body);
						s(re({
							draftId: e,
							draftsCount: n
						}));
						const r = Object(c.u)(t);
						e === r && s(Object(o.o)(!0, t))
					} else {
						const t = O.error;
						s(ie({
							draftId: e,
							apiError: t
						})), s(Object(a.f)({
							duration: a.a,
							kind: j.b.Error,
							text: Object(r.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				d = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(r.a)("REDDIT_EMBED_PENDING"),
				b = Object(r.a)(c),
				m = Object(r.a)(u),
				p = (e, t) => async (e, s, {
					apiContext: n
				}) => {
					const r = s();
					e(l());
					const a = await Object(o.a)(n());
					a.ok && a.body ? !t || a.body.account ? (e(b(a.body)), e(Object(i.d)()), O(r)) : Object(d.a)(e, r) : e(m(a.error))
				}, O = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === n.Jb.INBOX_PAGES && Object(a.g)(e)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/config.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			var a = s("./src/reddit/models/Duplicates/index.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				m = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(b)),
				p = (e, t) => async (s, n, {
					apiContext: b
				}) => {
					const p = Object(l.S)(n(), {
						subredditId: e
					}) || Object(u.p)(n(), {
						profileId: e
					});
					if (!p) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(c.h)(p) ? r.dc + p.name : p.name
						},
						f = await ((e, t, s) => Object(o.a)(e, {
							data: s,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.t)(t)}`,
							method: r.hb.GET
						}))(b(), t, O);
					if (f.ok) {
						const n = f.body;
						s(m({
							distinguishKey: Object(a.a)(t, O),
							postIds: n.postIds,
							posts: n.posts,
							profiles: n.profiles,
							subreddits: n.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "f", (function() {
				return C
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/fastdom/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/chat/unreadCount.ts"),
				d = s("./src/reddit/actions/inbox.ts"),
				a = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				u = s("./src/reddit/models/Badge/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts"),
				b = s("./src/reddit/selectors/chat.ts"),
				m = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				p = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const _ = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				E = Object(i.a)(_),
				h = (e, t) => {
					e <= 0 ? r.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : r.a.write(() => {
						Object(c.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				T = Object(n.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				P = e => {
					const t = Object(m.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(O.E)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				g = () => async (e, t) => {
					const s = t(),
						n = Object(a.e)(s, {}),
						r = Object(m.a)(s),
						i = Object(O.I)(s) || Object(O.J)(s),
						o = Object(p.g)(s);
					let d = 0;
					i && n && (d = r ? o ? Object(l.i)(s) : Object(l.j)(s) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = P(e);
						return t + s
					})(s), h(d, n), e(E({
						hasUnreadMessages: !!d
					})))
				}, j = () => async (e, t) => {
					{
						e(g());
						const s = P(t());
						Object(c.c)(s)
					}
				}, C = e => async (t, s) => {
					const n = s();
					if (Object(m.a)(n)) {
						const s = Object(l.e)(n),
							r = Object(l.h)(n),
							{
								basicChannelCount: i,
								inboxCount: o
							} = e;
						if (s !== i) {
							const e = Object(f.e)({
								count: i,
								key: u.c.ChatTab
							});
							t(Object(f.a)(e))
						}
						if (o && o !== r) {
							const e = Object(f.e)({
								count: o,
								key: u.c.MessageTab
							});
							t(Object(f.a)(e))
						}(s !== i || o && o !== r) && t(g())
					} else {
						const s = Object(b.a)(n),
							r = Object(b.b)(n),
							i = Object(O.E)(n),
							{
								basicChannelCount: a,
								inboxCount: c
							} = e;
						s !== a && t(Object(o.b)({
							...r,
							basicChannelCount: a
						})), c && c !== i && t(Object(d.b)({
							inboxCount: c
						})), (s !== a || c && c !== i) && t(g())
					}
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/ads/store.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/selectors/media.ts"),
				O = s("./src/reddit/selectors/video.ts");
			const f = [{
					event: m.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: m.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: m.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: m.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: m.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				_ = [{
					event: m.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: m.a.VideoVendorFullyViewable50,
					threshold: c.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				E = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: s,
					remainingTime: n,
					threshold: r = null,
					viewabilityMinimum: i,
					checkAudible: o = !1,
					timeViewingInterrupted: d
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: r,
					remainingTime: n,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: i,
					timeViewingInitialized: 0,
					timeViewingInterrupted: d
				})),
				h = () => E(f),
				T = () => E(_),
				P = [c.c, c.e, c.l, c.j, c.a, c.b],
				g = [c.c, c.l, c.j, c.a],
				j = [c.c, c.e, c.l, c.b],
				C = e => "boolean" == typeof e.cumulative && e.cumulative,
				I = Object(d.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(O.b)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const s = Object(O.h)(e, {
							postId: t.id
						});
						if (s) return s.length
					},
					isAudible: e => Object(p.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(O.d)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(O.e)(e, {
						postId: t.id
					})
				}),
				S = Object(b.a)(I);
			class y extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = h(), this.videoStats = T(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						r()(this.state.event, e) || this.setState({
							event: e
						}), this.props.trackDisplay && this.viewabilityStats.forEach(t => {
							this.checkViewability(e, t)
						}), this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = l.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && l.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (u.d(e.id, c.r, !1), this.viewabilityStats.forEach(e => {
						C(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						C(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, c.p, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, n = !1,
						r = !1;
					return "object" == typeof t ? (s = t.threshold, n = !!t.playing, r = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!n || this.props.isPlaying) && (!r || this.props.isAudible)
				}
				handleThresholds(e, t, s = !1) {
					const {
						post: n
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!r()(i, this.inViewStats) && i.length > 0 && u.b(n.id, i, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!r()(o, this.outOfViewStats) && o.length > 0 && u.d(n.id, o, s), this.outOfViewStats = o, this.inViewStats = i
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, c.g) : e.viewabilityMinimum = c.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: n
					} = e.boundingClientRect;
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = n * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && n * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (C(t) && t.event === m.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						C(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = P;
					return e && !t ? s = j : !e && t && (s = g), o.a.createElement(a.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = S(y)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(n.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: r.R
			}))(t))
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
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/constants/posts.ts"),
				d = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = r.a.createContext(null);

			function p(e) {
				const t = Object(i.e)(t => Object(u.F)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(a.a)(),
					n = Object(i.e)(e => t ? Object(l.K)(e, {
						identifier: t.belongsTo
					}) : null),
					r = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? n : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					m = Object(i.e)(i => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(u.i)(i, {
							postId: e
						}),
						isModerator: !(!r || !i.moderatingSubreddits[r.name]),
						post: t,
						postId: e,
						subreddit: r,
						subredditOrProfile: n,
						userIsOp: b
					}));
				return Object(d.a)(m)
			}

			function O(e) {
				const {
					postId: t,
					children: s
				} = e, n = p(t);
				return r.a.createElement(m.Provider, {
					value: n
				}, s)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return r.a.createElement(m.Consumer, null, n => {
						if (!n) throw new Error(`No Post context for <${t}/>!`);
						return r.a.createElement(e, b({}, s, n))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function _(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return r.a.createElement(m.Provider, {
						value: s
					}, r.a.createElement(e, b({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = m
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/reducers/user/prefs/index.ts"),
				a = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = r.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: d.a,
				isLoggedIn: !1
			});

			function l() {
				const e = Object(i.e)(e => ({
					currentUser: Object(a.j)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(a.V)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(a.J)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return r.a.createElement(u.Provider, {
					value: l()
				}, e.children)
			}

			function m(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return r.a.createElement(u.Consumer, null, s => r.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/config.ts"),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = e => Object(i.a)(e, {
				endpoint: Object(o.a)(`${n.a.gatewayUrl}/desktopapi/v1/me`),
				method: r.hb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			t.a = async e => Object(r.a)(Object(i.a)(e, [o.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.hb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return b
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				r = s("./src/reddit/models/PostDraft/index.ts");
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
				a = e => {
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
				c = e => e.title.substring(0, 300),
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
					...o(e),
					kind: d(e),
					title: c(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return l
			}));
			var n = s("./src/config.ts");
			const r = `${n.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				i = `${n.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${n.a.assetPath}/img/favicon/favicon-32x32.png`,
				d = `${n.a.assetPath}/img/favicon/favicon-16x16.png`,
				a = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = c(e ? o : r),
						s = c(e ? d : i);
					t && s && (t.href = e ? r : o, s.href = e ? i : d)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: a,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(n.useRef)(e);
				return t.current === e || Object(r.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(n.useContext)(r.a)
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
				return a
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, i, o = s("./src/config.ts");

			function d(e) {
				return "userId" in e
			}

			function a(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, s) {
				const n = s.media[0],
					r = Object.keys(n);
				if (n["0x0"]) return n["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (r.forEach(s => {
						const r = n[s],
							[o, d] = s.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || d < i.height && d >= t) && (i = {
							height: d,
							width: o,
							url: r
						})
					}), !i.url && r.length) {
					const e = Object.keys(n)[0],
						t = n[e],
						[s, r] = e.split("x").map(e => parseInt(e));
					i = {
						height: r,
						width: s,
						url: t
					}
				}
				return i.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function l(e, t, s) {
				const n = c(e, t, s),
					r = c(2 * e, 2 * t, s);
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
			}(i || (i = {}))
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
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				o = s("./node_modules/lodash/merge.js"),
				d = s.n(o),
				a = s("./node_modules/lodash/pick.js"),
				c = s.n(a),
				u = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/comment/constants.ts"),
				b = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/frontpage/constants.ts"),
				p = s("./src/reddit/actions/header.ts"),
				O = s("./src/reddit/actions/modQueue/constants.ts"),
				f = s("./src/reddit/actions/pages/constants.ts"),
				_ = s("./src/reddit/actions/pages/modListing/constants.ts"),
				E = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				h = s("./src/reddit/actions/pages/postCreation.ts"),
				T = s("./src/reddit/actions/pages/postDraft.ts"),
				P = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				g = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				j = s("./src/reddit/actions/pages/profilePosts.ts"),
				C = s("./src/reddit/actions/pages/search.ts"),
				I = s("./src/reddit/actions/pages/subreddit.ts"),
				S = s("./src/reddit/actions/pages/topic.ts"),
				y = s("./src/reddit/actions/postCreation/constants.ts"),
				A = s("./src/reddit/actions/postDraft.ts"),
				D = s("./src/reddit/actions/preferences.ts"),
				R = s("./src/reddit/actions/redditEmbed.ts"),
				N = s("./src/reddit/actions/search.ts"),
				v = s("./src/reddit/actions/structuredStyles/constants.ts"),
				x = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/actions/users.ts"),
				L = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/constants/preferences.ts"),
				M = s("./src/reddit/constants/theme.ts"),
				G = s("./src/reddit/models/PostCreationForm/index.ts"),
				F = s("./src/reddit/models/PostDraft/index.ts"),
				U = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(n || (n = {}));
			const V = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...k.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: U.a,
					commentMode: G.h.RICH_TEXT,
					countryCode: "",
					layout: L.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: u.s.CONFIDENCE,
					editorMode: G.h.RICH_TEXT,
					geopopular: void 0,
					globalTheme: M.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
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
					sort: u.W.Hot,
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
				q = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, V),
						n = t.subreddit,
						r = {
							...e.subreddit
						};
					Object.keys(n || {}).forEach(e => {
						r[e] = {
							...q,
							...n && n[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: r
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? G.h.MARKDOWN : G.h.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				$ = (e, t, s) => H(e, {
					subreddit: {
						[t]: {
							...q,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = (e = B, t) => {
				switch (t.type) {
					case l.m:
					case l.t: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case y.s:
					case y.M: {
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
					case A.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === F.b.Markdown ? G.h.MARKDOWN : G.h.RICH_TEXT
						}
					}
					case D.g: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case D.n:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case D.o: {
						const {
							layout: s,
							subredditId: n
						} = t.payload;
						return $(e, n, {
							layout: s
						})
					}
					case D.e:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case D.l:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case b.g:
						return {
							...e, over18: !0
						};
					case D.b:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case D.h:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case D.q:
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
					case v.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case v.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case D.f:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case D.c:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: d()({}, e.collapsedTraySections, t.payload)
						} : e;
					case b.a:
					case b.b:
					case b.h:
					case b.i:
					case b.f:
					case b.j:
					case _.e:
					case _.h:
					case f.a:
					case f.e:
					case f.b:
					case f.f:
					case f.d:
					case f.h:
					case m.b:
					case I.SUBREDDIT_LOADED:
					case E.b:
					case E.a:
					case P.e:
					case g.e:
					case g.b:
					case j.PROFILE_POSTS_LOADED:
					case m.f:
					case x.i:
					case N.g:
					case R.b:
					case h.PAGE_LOADED:
					case T.PAGE_LOADED:
					case D.i:
					case C.SEARCH_RESULTS_RECEIVED:
					case D.a:
					case w.c:
					case S.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case D.p: {
						const {
							subredditId: s,
							prefs: n
						} = t.payload;
						return $(e, s, n)
					}
					case P.d:
					case g.d:
					case g.a:
					case j.PROFILE_POSTS_FAILED: {
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
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case D.m: {
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
				i = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const d = [o.b, o.c, o.a],
				a = Object(n.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~Chat~PostCreation~RedesignChat"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
				c = e => `/${e}/submit`,
				u = (e, t) => {
					return o.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				l = e => o.a.replace(/:profileName/, e),
				b = {
					action: Object(i.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~Chat~PostCreation~RedesignChat"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: a,
					chunk: r.q.POST_CREATION,
					exact: !0,
					meta: {
						name: r.Jb.POST_CREATION
					},
					path: d,
					prefetches: [r.q.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "i", (function() {
				return O
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/chat.ts"),
				i = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const o = e => e.appBadges.badges,
				d = Object(n.a)(i.a, o, r.a, (e, t, s) => e ? t && t.directMessages && t.directMessages.count || 0 : s),
				a = Object(n.a)(o, e => e && e.chatRooms && e.chatRooms.count || 0),
				c = Object(n.a)(o, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(n.a)(i.a, r.a, d, a, c, (e, t, s, n, r) => {
					if (e) {
						return s + n + r > 0
					}
					return t > 0
				}),
				l = Object(n.a)(o, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(n.a)(o, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(n.a)(l, b, (e, t) => e + t),
				p = Object(n.a)(d, b, (e, t) => e + t),
				O = Object(n.a)(d, m, (e, t) => e + t)
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts");
			const o = e => e.chat.unread.count,
				d = Object(n.a)(o, e => e.basicChannelCount),
				a = (Object(n.a)(o, e => e.subredditChannelCount), e => !(e.chat.isInited || e.chat.unread.api.pending)),
				c = (e, t) => {
					const {
						chatConfig: s
					} = r.c;
					return Object(i.b)(s)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				d = s("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(n.a)(e => Object(i.c)(e, {
					experimentName: r.sc,
					experimentEligibilitySelector: o.e
				}), d.a),
				c = Object(n.a)(a, e => e === r.wc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "i", (function() {
				return m
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				d = s("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(n.a)(e => Object(i.c)(e, {
					experimentName: r.cb,
					experimentEligibilitySelector: o.e
				}), d.a),
				c = Object(n.a)(a, e => e === r.Bc.Enabled),
				u = Object(n.a)(e => Object(i.c)(e, {
					experimentName: r.uc,
					experimentEligibilitySelector: o.e
				}), d.a),
				l = Object(n.a)(c, u, (e, t) => e && t === r.Ac.Enabled),
				b = Object(n.a)(e => Object(i.c)(e, {
					experimentName: r.fb,
					experimentEligibilitySelector: o.e
				}), d.a),
				m = Object(n.a)(c, b, (e, t) => e && t === r.qb.Enabled),
				p = Object(n.a)(e => Object(i.c)(e, {
					experimentName: r.ab,
					experimentEligibilitySelector: o.e
				}), d.a),
				O = Object(n.a)(p, e => e === r.yc.Banner_1st_time),
				f = Object(n.a)(p, e => e === r.yc.Tooltip_persist),
				_ = Object(n.a)(p, e => e === r.yc.Tooltip_1st_time),
				E = Object(n.a)(e => Object(i.c)(e, {
					experimentName: r.bb,
					experimentEligibilitySelector: o.e
				}), d.a),
				h = Object(n.a)(E, e => e === r.zc.ContinuousScroll),
				T = Object(n.a)(e => Object(i.c)(e, {
					experimentName: r.U,
					experimentEligibilitySelector: o.e
				}), d.a),
				P = Object(n.a)(T, e => e === r.Ab.Banner1stTime),
				g = Object(n.a)(T, e => e === r.Ab.BannerPersist)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"712476d48c90"}')
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/redditGQL/operations/UpdateAutomatedReportingSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/redditGQL/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.4e8e61d533259d249653.js.map