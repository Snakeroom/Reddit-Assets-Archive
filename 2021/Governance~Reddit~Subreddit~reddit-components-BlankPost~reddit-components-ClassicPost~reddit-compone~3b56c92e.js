// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.a190053c0a77acc0e12a.js
// Retrieved at 10/20/2021, 5:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(r.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				i = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: d,
					unsubscribe: a,
					setState: c
				} = Object(r.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => c(o());
			(() => {
				const e = (() => {
					if (!n()) return;
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
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
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
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/BadgeIndicators.json"),
				a = e => Object(o.a)(e, {
					...d
				}),
				c = s("./src/reddit/models/Badge/index.ts");
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
						style: c.b.Numbered
					}
				}),
				O = (e, t) => ({
					[c.c.ChatUnreadMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatHasNewMessages]: {
						isShowing: t,
						style: c.b.Filled
					}
				}),
				f = () => async (e, t, {
					gqlContext: s
				}) => {
					e(u());
					const r = await async function(e) {
						const t = await a(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const s = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (s) return {
									...s,
									chatUnreadMessages: {
										count: (Number(s.chatUnreadMessages.count) || 0) + (Number(s.chatUnacceptedInvites.count) || 0) + (Number(s.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(s);
					r ? (e(l(r)), e(Object(i.d)())) : e(m())
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
				return r
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return j
			}));
			var r, n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/chat/actions/message/unreadCount.ts"),
				d = s("./src/chat/endpoints/sendbird/index.ts"),
				a = s("./src/reddit/actions/tabBadging.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				u = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(r || (r = {}));
			const {
				SYNC: l,
				REQUEST_FAILED: b,
				REQUEST_PENDING: m,
				REQUEST_SUCCESS: p
			} = r, O = Object(i.a)(l), f = Object(i.a)(b), _ = Object(i.a)(m), h = Object(i.a)(p);
			let E;
			const T = 5 * n.jb,
				j = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t();
					if (!Object(u.K)(r) || !Object(c.d)(r)) return clearTimeout(E);
					E || e((() => async (e, t, {
						gqlContext: s
					}) => {
						const r = t(),
							{
								session: n
							} = r.user;
						if (n && Object(u.K)(r) && Object(c.d)(r)) {
							e(_());
							const t = await Object(d.g)(s());
							t && t.ok && Object(d.j)(t.body) ? (e(h({
								...Object(o.b)(t.body.data)
							})), e(Object(a.d)())) : e(f({
								error: t.error
							}))
						}
					})()), E = setTimeout(() => {
						e(j())
					}, T)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			}));
			const r = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				o = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return A
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/camelCase.js"),
				i = s.n(n),
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
				h = s("./src/reddit/endpoints/subreddit/about.ts"),
				E = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/contentControls.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/actions/contentControls/constants.ts");
			const P = Object(d.a)(g.b),
				C = Object(d.a)(g.c),
				S = Object(d.a)(g.a),
				I = e => async (t, s, {
					gqlContext: r
				}) => {
					const n = {
						subredditName: e.toLowerCase()
					};
					if (Object(T.a)(s(), n)) return;
					t(C(n));
					let i = Object(j.B)(s(), e);
					if (!i) {
						const s = await Object(h.a)(r(), e, !1);
						if (s.ok) {
							i = s.body.data.subreddit.id
						}
						if (!i) {
							const e = s.error || {
								type: o.H.NOT_FOUND_ERROR
							};
							return void t(S({
								...n,
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
						subredditId: i
					});
					if (c.ok) {
						const e = c.body;
						d = e.data.subreddit && e.data.subreddit
					}
					if (d) t(P({
						...n,
						...d
					}));
					else {
						const s = c.error || {
							type: o.H.UNKNOWN_ERROR
						};
						t(S({
							...n,
							error: s
						})), a.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: c.body,
								responseOk: c.ok
							}), a.c.captureMessage("Missing post requirements data!")
						})
					}
				}, y = Object(d.a)(g.d), A = (e, t) => async (s, n, {
					gqlContext: i
				}) => {
					const o = e.toLowerCase(),
						d = Object(j.B)(n(), e);
					if (!d) return {
						success: !1
					};
					const a = await ((e, t, s) => {
						const r = [Promise.resolve(null), Promise.resolve(null)];
						if (s.postRequirements && !O()(s.postRequirements)) {
							const n = {
								subredditId: t,
								...s.postRequirements
							};
							r[0] = Object(u.a)(e, {
								..._,
								variables: {
									input: n
								}
							})
						}
						if (s.automatedReporting && !O()(s.automatedReporting)) {
							const n = {
								subredditId: t
							};
							s.automatedReporting.levelAbuse && (n.automatedReportingLevelAbuse = s.automatedReporting.levelAbuse), s.automatedReporting.levelHate && (n.automatedReportingLevelHate = s.automatedReporting.levelHate), r[1] = Object(u.a)(e, {
								...f,
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
							kind: E.b.Error,
							text: e && e.length ? e[0].message : r.fbt._("Something went wrong", null, {
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
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				i = Object(r.a)(n)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				i = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const d = "MOD_PERMS__REQUEST_LOADED",
				a = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(d), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.k)(t());
					if (s) {
						const t = Object(i.e)(s);
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
				return i
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return k
			})), s.d(t, "PAGE_LOADED", (function() {
				return L
			})), s.d(t, "PAGE_FAILED", (function() {
				return M
			})), s.d(t, "pagePending", (function() {
				return F
			})), s.d(t, "pageLoaded", (function() {
				return G
			})), s.d(t, "pageFailed", (function() {
				return U
			})), s.d(t, "postCreationPageDataRequested", (function() {
				return B
			})), s.d(t, "postCreationPageRequested", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
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
				h = s("./src/reddit/actions/subreddit.ts"),
				E = s("./src/reddit/actions/subredditDuplicates.ts"),
				T = s("./src/config.ts"),
				j = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				C = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = s("./src/reddit/helpers/trackers/postComposer.ts"),
				I = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/contentControls.ts"),
				A = s("./src/reddit/selectors/postCollection.ts"),
				D = s("./src/reddit/selectors/postCreations.ts"),
				N = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/profile.ts"),
				R = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const w = e => {
					const t = e.platform.currentPage;
					let s = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: r
						} = t.urlParams, n = Object(R.w)(e, {
							subredditName: r
						});
						n && (s = n.name)
					}
					return Object(c.l)(s)
				},
				k = "POST_CREATION__PAGE_PENDING",
				L = "POST_CREATION__PAGE_LOADED",
				M = "POST_CREATION__PAGE_FAILED",
				F = Object(d.a)(k),
				G = Object(d.a)(L),
				U = Object(d.a)(M),
				V = () => async (e, t) => {
					const s = t(),
						r = Object(D.a)(s);
					r !== Object(D.kb)(s) && e(Object(f.g)({
						submissionType: r
					}))
				}, B = e => async (t, s, r) => {
					const {
						collectionId: i,
						profileName: d,
						subredditName: c
					} = e, l = Object(a.a)(e), p = s(), O = p.creations.api.page.pending[l], f = p.creations.api.page.fetched[l], E = p.creations.api.page.error[l];
					if (O) return;
					if (f && !E) return void t(V());
					const P = [];
					t(F({
						key: l
					}));
					let S = c;
					!c && d && (S = `u_${d}`), P.push(((e, t) => Object(j.a)(e, {
						method: n.ib.GET,
						endpoint: Object(g.a)(`${T.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(r.apiContext(), {
						subredditName: S,
						collectionId: i
					})), d && (P.push(t(_.d(d))), P.push(t(_.b(d))));
					const [A] = await Object(C.a)("postCreation", () => Promise.all(P));
					if (A.ok) {
						const e = A.body,
							{
								posts: r = {},
								subredditAboutInfo: n
							} = e;
						if (t(G({
								key: l,
								meta: p.meta,
								...e,
								posts: r
							})), !Object(x.K)(s())) return;
						if (n) {
							const e = Object.keys(n)[0];
							await t(Object(m.l)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(V());
						const i = [];
						i.push(t(b.o()));
						const d = Object(x.k)(s());
						if (d && d.hasUserProfile && i.push(t(_.d(Object(I.e)(d)))), c && !Object(o.a)(c)) {
							i.push(t(h.o(c))), !!Object(y.b)(s(), {
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
						})), !Object(x.K)(s())) return void Object(P.a)(t, s());
					let u;
					if (o ? (u = Object(R.w)(s(), {
							subredditName: o
						}), await t(Object(l.a)({
							subredditName: o
						}))) : d && (u = Object(v.j)(s(), {
							profileName: d
						})), a.source_id) await t(((e, t) => async (s, r) => {
						const {
							subredditName: n,
							profileName: i
						} = e, o = [];
						let d;
						n ? d = Object(R.B)(r(), n) : i && (d = Object(x.gb)(r(), {
							userName: i
						})), d && o.push(s(Object(E.b)(d, t))), o.push(s(Object(O.Q)(t))), await Promise.all(o);
						const a = Object(N.f)(r(), {
							postId: t
						});
						s(Object(f.l)({
							postId: t,
							postTitle: a ? a.title : ""
						}))
					})(e.params, a.source_id));
					else if (c) {
						const n = Object(A.q)(s(), {
							collectionId: c
						});
						u && n && n.subredditId === u.id || t(Object(r.c)(Object(i.a)(e.url, ["collection"])))
					}((e, t) => {
						const s = e.platform.lastPage;
						t && s && s.meta && s.meta.name === n.Lb.POST_CREATION && S.C(e)
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
				return h
			})), s.d(t, "postDraftPageDataRequested", (function() {
				return E
			})), s.d(t, "postDraftRequested", (function() {
				return T
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makePostDraftPageKey/index.ts"),
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
				f = Object(r.a)(m),
				_ = Object(r.a)(p),
				h = Object(r.a)(O),
				E = e => async (t, s, r) => {
					const {
						draftId: m,
						profileName: p
					} = e, O = Object(n.a)(e), f = s(), E = f.creations.api.page.pending[O], T = f.creations.api.page.fetched[O], j = f.creations.api.page.error[O];
					if (E || T && !j || !m) return;
					t(i.d(p));
					const g = await Object(b.a)("postDraft", () => ((e, t, s) => Object(a.a)(e, {
						endpoint: Object(c.a)(Object(u.a)(`${o.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${s}/${t}`)),
						method: d.ib.GET
					}))(r.apiContext(), m, p));
					if (g.ok) {
						const e = g.body;
						e.drafts[m].kind = Object(l.b)(e.drafts[m].kind), t(_({
							...e,
							key: O
						}))
					} else t(h({
						error: g.error,
						key: O
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
				return N
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return v
			})), s.d(t, "profilePostsPending", (function() {
				return R
			})), s.d(t, "profilePostsLoaded", (function() {
				return x
			})), s.d(t, "profilePostsFailed", (function() {
				return w
			})), s.d(t, "profilePostsRequested", (function() {
				return k
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return L
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return M
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return F
			})), s.d(t, "morePostsPending", (function() {
				return G
			})), s.d(t, "morePostsLoaded", (function() {
				return U
			})), s.d(t, "morePostsFailed", (function() {
				return V
			})), s.d(t, "morePostsRequested", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
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
				h = s("./src/config.ts"),
				E = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				T = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const C = (e, t, s) => Object(j.a)(e, {
				data: s,
				endpoint: Object(g.a)(Object(E.a)(Object(P.a)(`${h.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: T.ib.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var S = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				I = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				y = s("./src/reddit/selectors/listings.ts"),
				A = s("./src/reddit/selectors/profile.ts");
			const D = "PAGE__PROFILE_POSTS_PENDING",
				N = "PAGE__PROFILE_POSTS_LOADED",
				v = "PAGE__PROFILE_POSTS_FAILED",
				R = Object(i.a)(D),
				x = Object(i.a)(N),
				w = Object(i.a)(v),
				k = e => async (t, s, r) => {
					const {
						queryParams: i,
						params: h
					} = e, {
						sort: E,
						t: T
					} = Object(u.b)(i), {
						profileName: j
					} = h, g = Object(o.a)(`u_${j}`, E, i), P = s(), D = P.listings.postOrder.ids[g], N = Object(y.c)(P, {
						listingKey: g
					}), v = Object(y.d)(P, {
						listingKey: g
					});
					if (await t(m.d(j)), v || D && !N) {
						if (D) {
							const e = Object(A.q)(s(), {
								profileName: j
							});
							t(b.l({
								title: e
							}))
						}
						return
					}
					const k = {
						...n()(e.queryParams, [...f.l, ...f.k, f.h]),
						layout: Object(_.Q)(P, {}).toLowerCase(),
						sort: E,
						t: Object(S.a)(E, T)
					};
					t(R({
						key: g
					}));
					const L = await Object(I.a)("profilePosts", () => C(r.apiContext(), j, k));
					if (!L.ok) return t(w({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: g
					})), L.body.reason === O.a.DeletedProfile && t(Object(d.p)({
						profileName: j
					})), void t(b.m(L.status));
					const M = L.body;
					t(x({
						key: g,
						meta: s().meta,
						...M
					}));
					const F = Object(A.m)(s(), j),
						{
							pinned: G
						} = M;
					t(Object(l.h)({
						profileId: F,
						pinned: G
					})), await Promise.all([t(Object(u.c)(j)), t(Object(p.q)()), t(Object(c.b)()), t(a.o(j))])
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", M = "PROFILE_POSTS__MORE_POSTS_LOADED", F = "PROFILE_POSTS__MORE_POSTS_FAILED", G = Object(i.a)(L), U = Object(i.a)(M), V = Object(i.a)(F), B = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t(),
						{
							currentPage: i
						} = r.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: d,
						params: a
					} = i.routeMatch.match, {
						sort: c,
						t: l
					} = Object(u.b)(d), {
						profileName: b
					} = a, m = Object(o.a)(`u_${b}`, c, d), p = Object(y.g)(r, {
						listingKey: m
					});
					if (!p) return;
					const O = Object(y.d)(r, {
							listingKey: m
						}),
						h = Object(y.e)(r, {
							listingKey: m,
							token: p.token
						});
					if (O || h) return;
					e(G({
						key: m,
						fetchedToken: p.token
					}));
					const E = {
							after: p.token,
							dist: p.dist,
							sort: c,
							t: l,
							...n()(d, f.l),
							layout: Object(_.Q)(r, {}).toLowerCase()
						},
						T = await C(s(), b, E),
						j = r.listings.postOrder.ids[m],
						g = T.body.postIds || [],
						P = {
							...T.body,
							postIds: g.filter(e => !j || !j.includes(e))
						};
					T.ok ? (e(U({
						fetchedToken: p.token,
						key: m,
						meta: r.meta,
						...P
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
				return E
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "i", (function() {
				return v
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
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
				h = Object(i.a)(f),
				E = "PINNEDPOST__PIN_POST_PENDING",
				T = "PINNEDPOST__UNPIN_POST_PENDING",
				j = Object(i.a)(E),
				g = Object(i.a)(T),
				P = "PINNEDPOST__PIN_POST_FAILURE",
				C = "PINNEDPOST__UNPIN_POST_FAILURE",
				S = Object(i.a)(P),
				I = Object(i.a)(C),
				y = e => Object(d.f)({
					buttonAction: v(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				A = (e, t) => Object(d.f)({
					buttonAction: v(e, !0),
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
				D = () => Object(d.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				N = () => Object(d.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				v = (e, t = !1) => async (s, i, {
					apiContext: m
				}) => {
					const p = i(),
						O = p.posts.models[e];
					if (!O) return;
					const f = !Object(l.s)(p, {
						postId: e
					});
					if (f && O.isRemoved) return s((() => Object(d.f)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const E = O.author,
						T = Object(b.m)(p, E),
						[P, C, v, R, x] = f ? [j, _, S, y, D] : [g, h, I, A, N];
					if (f) {
						if (Object(l.P)(p, {
								profileName: E
							}).length >= n.bb) return void s(Object(o.i)(a.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const w = Object(l.p)(p, e, E),
						k = !f && w;
					s(P({
						postId: e,
						profileId: T
					})), (await Object(c.t)(m(), e, f, !0)).ok ? (s(C({
						postId: e,
						profileId: T
					})), t || s(R(e, k))) : (s(v({
						postId: e,
						profileId: T
					})), s(x()))
				}
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "K", (function() {
				return r
			})), s.d(t, "L", (function() {
				return n
			})), s.d(t, "l", (function() {
				return i
			})), s.d(t, "m", (function() {
				return o
			})), s.d(t, "x", (function() {
				return d
			})), s.d(t, "H", (function() {
				return a
			})), s.d(t, "I", (function() {
				return c
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "G", (function() {
				return l
			})), s.d(t, "p", (function() {
				return b
			})), s.d(t, "Q", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "D", (function() {
				return O
			})), s.d(t, "s", (function() {
				return f
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "q", (function() {
				return I
			})), s.d(t, "S", (function() {
				return y
			})), s.d(t, "R", (function() {
				return A
			})), s.d(t, "T", (function() {
				return D
			})), s.d(t, "U", (function() {
				return N
			})), s.d(t, "V", (function() {
				return v
			})), s.d(t, "W", (function() {
				return R
			})), s.d(t, "X", (function() {
				return x
			})), s.d(t, "Y", (function() {
				return w
			})), s.d(t, "Z", (function() {
				return k
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "E", (function() {
				return M
			})), s.d(t, "u", (function() {
				return F
			})), s.d(t, "v", (function() {
				return G
			})), s.d(t, "t", (function() {
				return U
			})), s.d(t, "w", (function() {
				return V
			})), s.d(t, "P", (function() {
				return B
			})), s.d(t, "o", (function() {
				return q
			})), s.d(t, "y", (function() {
				return H
			})), s.d(t, "bb", (function() {
				return Q
			})), s.d(t, "J", (function() {
				return $
			})), s.d(t, "a", (function() {
				return W
			})), s.d(t, "F", (function() {
				return K
			})), s.d(t, "N", (function() {
				return z
			})), s.d(t, "O", (function() {
				return Y
			})), s.d(t, "M", (function() {
				return J
			})), s.d(t, "ab", (function() {
				return X
			})), s.d(t, "C", (function() {
				return Z
			})), s.d(t, "B", (function() {
				return ee
			})), s.d(t, "z", (function() {
				return te
			})), s.d(t, "A", (function() {
				return se
			}));
			const r = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				n = "SUBMIT_VALIDATION_FIELD_IS_VALID",
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
				h = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				E = "POST_CREATION__CHANGE_LINK_BODY",
				T = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				j = "POST_CREATION__CHANGE_MEDIA_BODY",
				g = "POST_CREATION__CHANGE_RECAPTCHA",
				P = "POST_CREATION__CHANGE_RTE_STATE",
				C = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				S = "POST_CREATION__CHANGE_TITLE",
				I = "POST_CREATION__GOV_TYPE_CHANGED",
				y = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				A = "POST_CREATION__TOGGLE_IS_CHANGED",
				D = "POST_CREATION__TOGGLE_IS_GOV",
				N = "POST_CREATION__TOGGLE_IS_NSFW",
				v = "POST_CREATION__TOGGLE_IS_OC",
				R = "POST_CREATION__TOGGLE_IS_POLL",
				x = "POST_CREATION__TOGGLE_IS_SPOILER",
				w = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				k = "POST_CREATION__TOGGLE_SEND_REPLIES",
				L = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				M = "POST_CREATION__RESET_FORM",
				F = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				G = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				U = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				V = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				q = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				Q = "POST_CREATION__VALIDATION_FAILED",
				$ = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				W = "POST_CREATION__CAPTCHA_REQUIRED",
				K = "POST_CREATION__SET_SUBMIT_MODE",
				z = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				Y = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				J = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS",
				Z = "POST_CREATION__SUBREDDIT_RECOMMENDATION_PENDING",
				ee = "POST_CREATION__SUBREDDIT_RECOMMENDATION_LOADED",
				te = "POST_CREATION__SUBREDDIT_RECOMMENDATION_FAILED",
				se = "POST_CREATION__SUB_REC_IS_INPUT_CHANGED"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return P
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "k", (function() {
				return k
			})), s.d(t, "t", (function() {
				return L
			})), s.d(t, "s", (function() {
				return M
			})), s.d(t, "u", (function() {
				return F
			})), s.d(t, "v", (function() {
				return G
			})), s.d(t, "w", (function() {
				return U
			})), s.d(t, "x", (function() {
				return V
			})), s.d(t, "z", (function() {
				return B
			})), s.d(t, "A", (function() {
				return q
			})), s.d(t, "B", (function() {
				return H
			})), s.d(t, "l", (function() {
				return Q
			})), s.d(t, "q", (function() {
				return $
			})), s.d(t, "r", (function() {
				return W
			})), s.d(t, "p", (function() {
				return K
			})), s.d(t, "y", (function() {
				return z
			})), s.d(t, "o", (function() {
				return Y
			})), s.d(t, "m", (function() {
				return J
			})), s.d(t, "j", (function() {
				return re
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/endpoints/post/index.tsx"),
				c = s("./src/redditGQL/operations/WhereToPostSubRec.json"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/redditGQL/operations/OpenAISubredditRecommendation.json");
			var b = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				p = s("./src/reddit/helpers/trackers/postComposer.ts"),
				O = s("./src/reddit/models/PostCreationForm/index.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				_ = s("./src/reddit/routes/postCreation/constants.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				E = s("./src/reddit/selectors/postCollection.ts"),
				T = s("./src/reddit/selectors/postCreations.ts"),
				j = s("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				g = s("./src/reddit/actions/postCreation/constants.ts");
			const P = Object(i.a)(g.n),
				C = Object(i.a)(g.D),
				S = (Object(i.a)(g.s), e => {
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
				I = Object(i.a)(g.b),
				y = Object(i.a)(g.c),
				A = Object(i.a)(g.d),
				D = Object(i.a)(g.e),
				N = Object(i.a)(g.f),
				v = Object(i.a)(g.g),
				R = Object(i.a)(g.h),
				x = Object(i.a)(g.i),
				w = Object(i.a)(g.j),
				k = Object(i.a)(g.q),
				L = Object(i.a)(g.S),
				M = Object(i.a)(g.R),
				F = (Object(i.a)(g.T), Object(i.a)(g.U)),
				G = Object(i.a)(g.V),
				U = Object(i.a)(g.W),
				V = Object(i.a)(g.X),
				B = Object(i.a)(g.Y),
				q = Object(i.a)(g.Z),
				H = Object(i.a)(g.ab),
				Q = Object(i.a)(g.r),
				$ = e => async (t, s, {
					apiContext: r
				}) => {
					t(A(e)), Object(n.a)(e) && t((e => async (t, s, {
						apiContext: r
					}) => {
						const n = await Object(a.f)(r(), e);
						n.ok && n.body && n.body.json && n.body.json.data && t(C(n.body.json.data))
					})(e))
				}, W = Object(i.a)(g.E), K = (e, t) => async (s, n) => {
					s(W()), s(e ? Object(r.b)(_.b) : Object(r.b)(Object(T.ab)(n(), {
						pageLayer: t
					})))
				}, z = e => async t => {
					t(o.i(e))
				}, Y = e => async (t, s) => {
					const r = s(),
						n = Object(d.F)(e),
						i = Object(T.F)(r);
					if (n && i) {
						Object(h.a)(r) !== O.d && t(z(O.d))
					} else t(K(!1, e))
				}, J = e => async (t, s) => {
					const r = s();
					Object(E.m)(r, {
						subredditId: e
					}) ? t(o.i(O.a)) : t(o.i(O.c))
				}, X = Object(i.a)(g.B), Z = Object(i.a)(g.C), ee = Object(i.a)(g.z), te = Object(i.a)(g.A), se = e => async (t, s) => {
					Object(j.d)(s()) !== e && t(te({
						isChanged: e
					}))
				}, re = () => async (e, t) => {
					const s = t(),
						r = Object(j.j)(s),
						n = Object(j.e)(s);
					!r && n && (Object(j.f)(s) || Object(j.g)(s) ? e(oe()) : Object(j.i)(s) && !Object(j.c)(s) && e(de()))
				}, ne = ["torrents", "IsolatedVocals"], ie = ["askreddit", "teenagers"], oe = () => async (e, t, {
					apiContext: s,
					gqlContext: r
				}) => {
					const n = t();
					if (Object(j.h)(n)) return;
					e(Z());
					const i = n.creations.formData.title,
						o = Object(j.l)(n),
						d = Object(j.k)(n),
						a = await ((e, t, s, r) => Object(u.a)(e, {
							...l,
							variables: {
								title: t,
								body: s,
								link: r
							}
						}))(r(), i, o, d),
						c = {};
					let O = {};
					const _ = {},
						h = {},
						E = [];
					if (!a.body || !a.ok) return e(se(!1)), void e(ee()); {
						const {
							data: s
						} = a.body, r = s.openaiSubredditSuggestions.filter(e => !ne.includes(e.name)).slice(0, j.a), i = r.map(e => {
							const t = e.name;
							return h[t] = {}, E.push(t), t
						});
						if (Object(j.g)(n) && (e => {
								const t = e.map(e => e.toLowerCase());
								let s = !1;
								return ie.forEach(e => {
									t.includes(e) && (s = !0)
								}), s
							})(i)) return e(se(!1)), e(X({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(p.z)(t()), void e(ee());
						r.forEach(e => {
							if (Object(f.j)(e)) {
								const t = Object(m.f)(e);
								_[t.id] = t
							} else if (e && Object.keys(e).length > 0) {
								const t = Object(m.a)(e),
									s = Object(b.a)(e);
								c[t.id] = t, O = {
									...O,
									...s
								}
							}
						})
					}
					e(se(!1)), e(X({
						subreddits: c,
						subredditsAboutInfo: O,
						unavailableSubreddits: _,
						recSubsDict: h,
						recSubsOrder: E
					})), 0 === Object(j.b)(t()).length && e(ee())
				}, de = () => async (e, t, {
					apiContext: s,
					gqlContext: r
				}) => {
					const n = t();
					if (Object(j.h)(n)) return;
					e(Z());
					const i = {};
					let o = {};
					const d = {},
						a = {},
						l = [],
						p = await (e => Object(u.a)(e, {
							...c,
							variables: {
								recentSubreddits: []
							}
						}))(r());
					if (!p.ok || !p.body) return e(ee()), void e(se(!1)); {
						const {
							data: e
						} = p.body;
						(e.whereToPostSuggestions.edges || []).forEach((e, t) => {
							if (t >= j.a) return;
							const s = e.node.subredditInfo;
							if (Object(f.j)(s)) {
								const e = Object(m.f)(s);
								d[e.id] = e
							} else if (s && Object.keys(s).length > 0) {
								const e = Object(m.a)(s),
									t = Object(b.a)(s);
								a[s.name] = {}, l.push(s.name), i[e.id] = e, o = {
									...o,
									...t
								}
							}
						})
					}
					e(se(!1)), e(X({
						subreddits: i,
						subredditsAboutInfo: o,
						unavailableSubreddits: d,
						recSubsDict: a,
						recSubsOrder: l
					})), 0 === Object(j.b)(t()).length && e(ee())
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return I
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
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
				h = s("./src/reddit/actions/postCreation/constants.ts"),
				E = s("./src/reddit/actions/postCreation/general.ts");
			const T = Object(d.a)(h.N),
				j = Object(d.a)(h.O),
				g = Object(d.a)(h.M),
				P = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					let o = r();
					const {
						name: d,
						isProfile: m
					} = e, p = Object(f.e)(o), h = p && !m && Object(l.a)(p.name, d), E = o.creations.api.subreddit.change.pending;
					if (h || E) return;
					const j = Object(u.v)(t);
					if (!d) return void s(C(e, j));
					s(T(e));
					const g = m ? {
						profileName: d
					} : {
						subredditName: d
					};
					if (await s(Object(c.postCreationPageDataRequested)(g)), m || !Object(O.A)(o)) return s(C(e, j));
					const P = e.allowedPostTypes || Object(_.v)(r(), {
						subredditName: d
					});
					if (!P) return void s(C(e, j));
					let S;
					o = r();
					const I = Object(O.kb)(o),
						y = Object(O.A)(o);
					if (I === i.Ub.MEDIA && y) {
						const e = Object(O.U)(o),
							t = Object(b.x)(e),
							s = Object(O.L)(o) && e.items.length > 1,
							r = !t && !s;
						if (s && !P.galleries) S = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !P.images) S = b.q.ImageWillBeRemoved;
						else if (t && !P.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							P.images ? s > i.fb && (S = b.q.VideoWillBeRemovedTooLongForGif) : S = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(S ? Object(a.i)(S) : C({
						...e,
						allowedPostTypes: P
					}, j))
				}, C = (e, t, s = !0) => async (i, o) => {
					const {
						name: d,
						isProfile: a
					} = e, c = o().platform.currentPage, u = c.queryParams, l = a ? m.b : m.c;
					let b = "";
					b = d ? l(d) : p.b, b = Object(n.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(j(e)), s && i(Object(E.s)(!0)), i(Object(E.i)()), i(Object(r.c)(b)))
				}, S = e => async (t, s) => {
					const i = s().platform.currentPage,
						o = i.queryParams,
						d = Object(n.a)(i.url, {
							...o,
							collection: e
						});
					t(Object(r.c)(d))
				}, I = () => async (e, t) => {
					const s = t().platform.currentPage,
						n = Object(o.a)(s.url, ["collection"]);
					e(Object(r.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return N
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "p", (function() {
				return L
			})), s.d(t, "j", (function() {
				return M
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "i", (function() {
				return G
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "k", (function() {
				return V
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "s", (function() {
				return Y
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
				h = s("./src/reddit/models/Subreddit/index.ts");
			const E = e => {
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
					if (t.subreddit_type === h.f.User) {
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
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				g = s("./src/reddit/helpers/trackers/postComposer.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/models/User/index.ts"),
				S = s("./src/reddit/selectors/postCreations.ts"),
				I = s("./src/reddit/selectors/postDraft.ts"),
				y = s("./src/reddit/selectors/profile.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				D = s("./src/reddit/selectors/user.ts");
			const N = "POST_DRAFT__LIST_PENDING",
				v = "POST_DRAFT__LIST_LOADED",
				R = "POST_DRAFT__LIST_FAILED",
				x = Object(i.a)(N),
				w = Object(i.a)(v),
				k = Object(i.a)(R),
				L = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t();
					if (!Object(D.k)(n) || Object(I.b)(n)) return;
					e(x());
					const i = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.ib.GET
					}))(s());
					i.ok ? e(w(E(i.body))) : e(k(i.error))
				}, M = "POST_DRAFT__SAVE_DRAFT_PENDING", F = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", G = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", V = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(M), Q = Object(i.a)(F), $ = Object(i.a)(G), W = Object(i.a)(U), K = Object(i.a)(V), z = Object(i.a)(B), Y = Object(i.a)(q), J = e => async (t, s, {
					apiContext: i
				}) => {
					const o = s(),
						c = Object(I.g)(o),
						b = Object(S.Z)(o);
					if (c || b) return;
					const p = Object(I.h)(o, e);
					if (!p) return;
					t(H(p)), g.f(o, p);
					const O = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.ib.PUT : r.ib.POST,
						data: Object(T.a)(t)
					}).then(e => e.body.fields && Object(j.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.H.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(i(), p, e);
					if (O.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(T.c)(O.body);
						t(Q({
							draftId: s,
							draftsCount: r
						})), e || t(Object(d.a)(p.destSubreddit, s, !1))
					} else {
						const e = O.error;
						e.type === r.H.BAD_CAPTCHA_ERROR ? t(z()) : e.type === r.H.VALIDATION_ERROR ? t(W(e)) : e.type === r.H.SUBMIT_VALIDATION_ERROR ? t(K(e)) : t($(e)), t(Object(a.f)({
							duration: a.a,
							kind: P.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(X), ee = e => async (t, s, {
					apiContext: r
				}) => {
					t(Z(e));
					let n = j.f;
					const i = s();
					if (e.subredditId) {
						const t = Object(A.Q)(i, {
								subredditId: e.subredditId
							}),
							s = Object(y.p)(i, {
								profileId: e.subredditId
							}),
							r = Object(D.k)(i);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : s && r && (n = {
							isProfile: !0,
							name: Object(C.e)(r)
						})
					}
					await t(Object(d.a)(n, e.id, !1));
					const o = Object(I.h)(s(), e.id);
					o && g.i(s(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ne = Object(i.a)(te), ie = Object(i.a)(se), oe = Object(i.a)(re), de = (e, t) => async (s, i, {
					apiContext: d
				}) => {
					const m = i();
					if (Object(I.a)(m, e)) return;
					const p = Object(I.d)(m, {
						draftId: e
					});
					p && g.g(m, p), s(oe({
						draftId: e
					}));
					const O = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.ib.DELETE
					}))(d(), e);
					if (O.ok) {
						const {
							draftsCount: r
						} = Object(T.c)(O.body);
						s(ne({
							draftId: e,
							draftsCount: r
						}));
						const n = Object(c.v)(t);
						e === n && s(Object(o.p)(!0, t))
					} else {
						const t = O.error;
						s(ie({
							draftId: e,
							apiError: t
						})), s(Object(a.f)({
							duration: a.a,
							kind: P.b.Error,
							text: Object(n.a)(t)
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
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				d = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(c),
				m = Object(n.a)(u),
				p = (e, t) => async (e, s, {
					apiContext: r
				}) => {
					const n = s();
					e(l());
					const a = await Object(o.a)(r());
					a.ok && a.body ? !t || a.body.account ? (e(b(a.body)), e(Object(i.d)()), O(n)) : Object(d.a)(e, n) : e(m(a.error))
				}, O = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Lb.INBOX_PAGES && Object(a.g)(e)
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
				i = s("./src/config.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			var a = s("./src/reddit/models/Duplicates/index.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				m = (Object(r.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(r.a)(b)),
				p = (e, t) => async (s, r, {
					apiContext: b
				}) => {
					const p = Object(l.Q)(r(), {
						subredditId: e
					}) || Object(u.p)(r(), {
						profileId: e
					});
					if (!p) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(c.h)(p) ? n.gc + p.name : p.name
						},
						f = await ((e, t, s) => Object(o.a)(e, {
							data: s,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(d.t)(t)}`,
							method: n.ib.GET
						}))(b(), t, O);
					if (f.ok) {
						const r = f.body;
						s(m({
							distinguishKey: Object(a.a)(t, O),
							postIds: r.postIds,
							posts: r.posts,
							profiles: r.profiles,
							subreddits: r.subreddits,
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
				return E
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "f", (function() {
				return C
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
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
				h = Object(i.a)(_),
				E = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(c.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				T = Object(r.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				j = e => {
					const t = Object(m.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(O.F)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				g = () => async (e, t) => {
					const s = t(),
						r = Object(a.f)(s, {}),
						n = Object(m.a)(s),
						i = Object(O.J)(s) || Object(O.K)(s),
						o = Object(p.g)(s);
					let d = 0;
					i && r && (d = n ? o ? Object(l.i)(s) : Object(l.j)(s) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = j(e);
						return t + s
					})(s), E(d, r), e(h({
						hasUnreadMessages: !!d
					})))
				}, P = () => async (e, t) => {
					{
						e(g());
						const s = j(t());
						Object(c.c)(s)
					}
				}, C = e => async (t, s) => {
					const r = s();
					if (Object(m.a)(r)) {
						const s = Object(l.e)(r),
							n = Object(l.h)(r),
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
						if (o && o !== n) {
							const e = Object(f.e)({
								count: o,
								key: u.c.MessageTab
							});
							t(Object(f.a)(e))
						}(s !== i || o && o !== n) && t(g())
					} else {
						const s = Object(b.a)(r),
							n = Object(b.b)(r),
							i = Object(O.F)(r),
							{
								basicChannelCount: a,
								inboxCount: c
							} = e;
						s !== a && t(Object(o.b)({
							...n
						})), c && c !== i && t(Object(d.b)({
							inboxCount: c
						})), (s !== a || c && c !== i) && t(g())
					}
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
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
				h = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: s,
					remainingTime: r,
					threshold: n = null,
					viewabilityMinimum: i,
					checkAudible: o = !1,
					timeViewingInterrupted: d
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: n,
					remainingTime: r,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: i,
					timeViewingInitialized: 0,
					timeViewingInterrupted: d
				})),
				E = () => h(f),
				T = () => h(_),
				j = [c.c, c.e, c.l, c.j, c.a, c.b],
				g = [c.c, c.l, c.j, c.a],
				P = [c.c, c.e, c.l, c.b],
				C = e => "boolean" == typeof e.cumulative && e.cumulative,
				S = Object(d.c)({
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
				I = Object(b.a)(S);
			class y extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = E(), this.videoStats = T(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
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
					let s, r = !1,
						n = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, n = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t, s = !1) {
					const {
						post: r
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(i, this.inViewStats) && i.length > 0 && u.b(r.id, i, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && u.d(r.id, o, s), this.outOfViewStats = o, this.inViewStats = i
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
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && r * s > 242500 && (t.threshold = c.l), t
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
					let s = j;
					return e && !t ? s = P : !e && t && (s = g), o.a.createElement(a.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = I(y)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.P
			}))(t))
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
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(i.e)(t => Object(u.H)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(a.a)(),
					r = Object(i.e)(e => t ? Object(l.I)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					m = Object(i.e)(i => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(u.i)(i, {
							postId: e
						}),
						isModerator: !(!n || !i.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: r,
						userIsOp: b
					}));
				return Object(d.a)(m)
			}

			function O(e) {
				const {
					postId: t,
					children: s
				} = e, r = p(t);
				return n.a.createElement(m.Provider, {
					value: r
				}, s)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(m.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, b({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function _(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: s
					}, n.a.createElement(e, b({}, t, s)))
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/reducers/user/prefs/index.ts"),
				a = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = n.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: d.a,
				isLoggedIn: !1
			});

			function l() {
				const e = Object(i.e)(e => ({
					currentUser: Object(a.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(a.X)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(a.K)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return n.a.createElement(u.Provider, {
					value: l()
				}, e.children)
			}

			function m(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return n.a.createElement(u.Consumer, null, s => n.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = e => Object(i.a)(e, {
				endpoint: Object(o.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: n.ib.GET
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
			var r = s("./src/reddit/helpers/flair.ts"),
				n = s("./src/reddit/models/PostDraft/index.ts");
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
				a = e => {
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
				c = e => e.title.substring(0, 300),
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
			var r = s("./src/config.ts");
			const n = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				i = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				d = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				a = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = c(e ? o : n),
						s = c(e ? d : i);
					t && s && (t.href = e ? n : o, s.href = e ? i : d)
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
			var r = s("./node_modules/react/index.js"),
				n = s("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(r.useContext)(n.a)
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
				return a
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i, o = s("./src/config.ts");

			function d(e) {
				return "userId" in e
			}

			function a(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, s) {
				const r = s.media[0],
					n = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(s => {
						const n = r[s],
							[o, d] = s.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || d < i.height && d >= t) && (i = {
							height: d,
							width: o,
							url: n
						})
					}), !i.url && n.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[s, n] = e.split("x").map(e => parseInt(e));
					i = {
						height: n,
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
				const r = c(e, t, s),
					n = c(2 * e, 2 * t, s);
				return {
					url: u(r),
					url2x: u(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
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
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n = s("./node_modules/lodash/isEqual.js"),
				i = s.n(n),
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
				h = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				E = s("./src/reddit/actions/pages/postCreation.ts"),
				T = s("./src/reddit/actions/pages/postDraft.ts"),
				j = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				g = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				P = s("./src/reddit/actions/pages/profilePosts.ts"),
				C = s("./src/reddit/actions/pages/search/index.ts"),
				S = s("./src/reddit/actions/pages/subreddit.ts"),
				I = s("./src/reddit/actions/pages/topic.ts"),
				y = s("./src/reddit/actions/postCreation/constants.ts"),
				A = s("./src/reddit/actions/postDraft.ts"),
				D = s("./src/reddit/actions/preferences.ts"),
				N = s("./src/reddit/actions/redditEmbed.ts"),
				v = s("./src/reddit/actions/search.ts"),
				R = s("./src/reddit/actions/structuredStyles/constants.ts"),
				x = s("./src/reddit/actions/subreddit.ts"),
				w = s("./src/reddit/actions/users.ts"),
				k = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/constants/preferences.ts"),
				M = s("./src/reddit/constants/theme.ts"),
				F = s("./src/reddit/models/PostCreationForm/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				U = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {}));
			const V = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...L.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: U.a,
					commentMode: F.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: u.l.OFF,
					layout: k.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: u.t.CONFIDENCE,
					editorMode: F.i.RICH_TEXT,
					enableFollowers: !0,
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
					sort: u.X.Hot,
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
						r = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						n[e] = {
							...q,
							...r && r[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: n
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? F.i.MARKDOWN : F.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				Q = (e, t, s) => H(e, {
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
					case y.Q: {
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
							editorMode: s === G.b.Markdown ? F.i.MARKDOWN : F.i.RICH_TEXT
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
							subredditId: r
						} = t.payload;
						return Q(e, r, {
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
								topContentTimesDismissed: r
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return e;
					case R.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case R.e:
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
					case S.SUBREDDIT_LOADED:
					case h.b:
					case h.a:
					case j.e:
					case g.e:
					case g.b:
					case P.PROFILE_POSTS_LOADED:
					case m.f:
					case x.i:
					case v.g:
					case N.b:
					case E.PAGE_LOADED:
					case T.PAGE_LOADED:
					case D.i:
					case C.c:
					case D.a:
					case w.c:
					case I.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case D.p: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return Q(e, s, r)
					}
					case j.d:
					case g.d:
					case g.a:
					case P.PROFILE_POSTS_FAILED: {
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
					case D.m: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: n
							} = s.additional;
						let i = e;
						return e.enableFollowers !== r && (i = {
							...i,
							enableFollowers: r
						}), e.showActiveCommunities !== n && (i = {
							...i,
							showActiveCommunities: n
						}), i
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
				i = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const d = [o.b, o.c, o.a],
				a = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: a,
					chunk: n.r.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Lb.POST_CREATION
					},
					path: d,
					prefetches: [n.r.COMMENTS_PAGE]
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
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/chat.ts"),
				i = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const o = e => e.appBadges.badges,
				d = Object(r.a)(i.a, o, n.a, (e, t, s) => {
					var r;
					return e ? (null === (r = t.chatUnreadMessages) || void 0 === r ? void 0 : r.count) || 0 : s
				}),
				a = Object(r.a)(o, e => e && e.chatRooms && e.chatRooms.count || 0),
				c = Object(r.a)(o, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(r.a)(i.a, d, o, n.b, (e, t, s, r) => {
					var n;
					if (0 === t) {
						if (e && (null === (n = s.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)) return !0;
						if (!e && r.hasNewMessages) return !0
					}
					return !1
				}),
				l = Object(r.a)(o, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(r.a)(o, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(r.a)(l, b, (e, t) => e + t),
				p = Object(r.a)(d, b, (e, t) => e + t),
				O = Object(r.a)(d, m, (e, t) => e + t)
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
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts");
			const o = e => e.chat.unread.count,
				d = Object(r.a)(o, e => e.unreadMessages),
				a = e => !(e.chat.isInited || e.chat.unread.api.pending),
				c = (e, t) => {
					const {
						chatConfig: s
					} = n.c;
					return Object(i.b)(s)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				d = s("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.Wc,
					experimentEligibilitySelector: o.e
				}), d.a),
				c = Object(r.a)(a, e => e === n.Zc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "i", (function() {
				return I
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				d = s("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.qb,
					experimentEligibilitySelector: o.e
				}), d.a),
				c = Object(r.a)(a, e => e === n.fd.Enabled),
				u = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.Yc,
					experimentEligibilitySelector: o.e
				}), d.a),
				l = Object(r.a)(c, u, (e, t) => e && t === n.ed.Enabled),
				b = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.yb,
					experimentEligibilitySelector: o.e
				}), d.a),
				m = Object(r.a)(c, b, (e, t) => e && t === n.Kb.Enabled),
				p = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.nb,
					experimentEligibilitySelector: o.e
				}), d.a),
				O = Object(r.a)(p, e => e === n.bd.Banner_1st_time),
				f = Object(r.a)(p, e => e === n.bd.Tooltip_persist),
				_ = Object(r.a)(p, e => e === n.bd.Tooltip_1st_time),
				h = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.ob,
					experimentEligibilitySelector: o.e
				}), d.a),
				E = Object(r.a)(h, e => e === n.cd.ContinuousScroll),
				T = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.gb,
					experimentEligibilitySelector: o.e
				}), d.a),
				j = Object(r.a)(T, e => e === n.Sb.Banner1stTime),
				g = Object(r.a)(T, e => e === n.Sb.BannerPersist),
				P = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.pb,
					experimentEligibilitySelector: o.e
				}), d.a),
				C = Object(r.a)(P, e => e === n.dd.Enabled),
				S = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.vb,
					experimentEligibilitySelector: () => !0
				}), d.a),
				I = Object(r.a)(S, e => e === n.ab.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/redditGQL/operations/OpenAISubredditRecommendation.json": function(e) {
			e.exports = JSON.parse('{"id":"6f15f6635eb8"}')
		},
		"./src/redditGQL/operations/UpdateAutomatedReportingSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/redditGQL/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/redditGQL/operations/WhereToPostSubRec.json": function(e) {
			e.exports = JSON.parse('{"id":"129900c7fa93"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.a190053c0a77acc0e12a.js.map