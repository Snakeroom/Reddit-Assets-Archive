// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.47308a2c657f595d8f93.js
// Retrieved at 8/10/2021, 3:40:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return S
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "l", (function() {
				return N
			})), s.d(t, "q", (function() {
				return z
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "g", (function() {
				return $
			})), s.d(t, "f", (function() {
				return K
			})), s.d(t, "o", (function() {
				return V
			})), s.d(t, "p", (function() {
				return Q
			})), s.d(t, "d", (function() {
				return Z
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "b", (function() {
				return J
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "c", (function() {
				return W
			})), s.d(t, "k", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				i = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				a = s("./src/reddit/actions/login.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/presence.ts"),
				u = s("./src/reddit/actions/shortcuts/utils.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/actions/vote.ts"),
				f = s("./src/reddit/endpoints/comment/index.tsx"),
				O = s("./src/reddit/helpers/commentList/index.ts"),
				j = s("./src/reddit/helpers/trackers/comment.ts"),
				h = s("./src/reddit/models/Comment/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/selectors/comments.ts"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				R = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				I = s("./src/reddit/selectors/moderatingComments.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/actions/comment/constants.ts");
			const _ = {},
				S = Object(d.a)(C.o),
				E = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(k.J)(s())) return t(Object(a.j)()), void t(Object(m.k)({
						actionSource: m.a.Save,
						redirectUrl: Object(w.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const d = r.isSaved ? f.k : f.g;
					if (t(S({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await d(o(), e)).ok) {
						const s = r.isSaved ? n.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : n.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = n.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: s,
							kind: v.b.Undo,
							buttonText: o,
							buttonAction: E(e)
						}))
					} else t(S({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, T = e => `viewing-comment-${e}`, A = o.a.telemetry.commentConsumedThreshold, P = e => async (t, s) => {
					const n = s();
					if (!Object(y.a)(n, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					j.g({
						state: n,
						commentId: e
					}), r.c.start(T(e));
					const d = setTimeout(() => j.a({
						state: n,
						commentId: e
					}), A);
					_[e] = d
				}, D = (e, t) => async (s, o) => {
					const n = o(),
						d = T(e);
					if (Object(y.a)(n, {
							commentId: e
						}) && r.c.has(d)) {
						const s = r.c.end(d);
						!t && s < A && (clearTimeout(_[e]), delete _[e])
					}
				}, B = Object(d.a)(C.x), L = Object(d.a)(C.w), U = Object(d.a)(C.v), N = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						d = r.moreComments.models[t],
						a = r.platform.currentPage,
						m = a && a.routeMatch,
						u = m && m.match,
						{
							partialPostId: p
						} = u ? u.params : null;
					if (!p) return;
					const b = Object(x.s)(p);
					s(B({
						moreCommentsId: d.id
					}));
					const j = await Object(f.e)(n(), b, {
						token: d.token
					}, Object(R.a)(r));
					if (j.ok) {
						const t = j.body,
							o = Object(O.a)(t, b, r);
						s(L({
							key: e,
							moreCommentsItem: d,
							shouldCollapse: o,
							...t
						}));
						const n = r.posts.models[b];
						let a;
						n && "subreddit" === n.belongsTo.type && t.comments && (a = n.belongsTo.id, await s(Object(c.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [n.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const m = j.body.comments,
							u = j.body.posts;
						await s(Object(l.b)(u, m, a)), await s(Object(i.b)(a, m))
					} else s(U({
						moreCommentsItem: d,
						...j.error
					}))
				}, z = Object(b.a)(O.b, g.a.upvoted), F = Object(b.a)(O.b, g.a.downvoted), $ = Object(d.a)(C.j), K = Object(d.a)(C.i), H = Object(d.a)(C.e), M = Object(d.a)(C.f), V = (Object(d.a)(C.c), Object(d.a)(C.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (o, n) => {
					const r = n(),
						d = Object(h.i)(e),
						c = Object(w.n)(r, {
							commentLink: d,
							commentsPageKey: t
						}),
						i = Object(I.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = c.depth;
					o(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || s(e, !0), Object(u.d)()
				}), Q = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s(M({
						commentId: e,
						commentsPageKey: t
					}))
				}, Z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: o
				}) => async (n, r) => {
					const d = r(),
						c = Object(O.e)(t, e, s, d),
						i = Object(I.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(H({
						commentId: c,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === s && o(c, !0), Object(u.d)()
				}, X = Object(d.a)(C.r), G = e => t => t(X({
					draftKey: e
				})), J = Object(d.a)(C.a), q = Object(d.a)(C.E), W = Object(d.a)(C.b), Y = Object(d.a)(C.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "b", (function() {
				return C
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/modals.ts"),
				l = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				h = s("./src/reddit/actions/comment/constants.ts");
			const x = Object(r.a)(h.n),
				v = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(l.h)(o(), e)).ok && t((e => async t => {
						t(x({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(O.J)(s())) return void t(Object(c.i)(m.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? l.j : l.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, w = Object(r.a)(h.F), y = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s(),
						r = n.features.comments.models[e],
						d = n.user.account ? n.user.account.displayText : null;
					r && d && (t(Object(j.i)({
						[e]: {
							isApproved: !0,
							approvedBy: d,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(l.a)(o(), e)).ok || t(Object(j.i)({
						[e]: {
							isApproved: r.isApproved,
							approvedBy: null,
							bannedBy: r.bannedBy,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam,
							modNote: r.modNote,
							modReasonBy: r.modReasonBy,
							modRemovalReason: r.modRemovalReason,
							numReports: r.numReports || null
						}
					})), Object(i.d)())
				}, R = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						d = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					d && c && (s(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: c,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.f)(n(), e, t)).ok || s(Object(j.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(i.d)())
				}, I = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? l.i : l.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (r, d, {
					gqlContext: c
				}) => {
					const i = Object(f.a)(d(), {
						commentId: e
					});
					if (!i) return;
					const m = s === n.Xb.Snoozed,
						l = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(c(), {
							input: l
						})).ok) r(Object(j.i)({
						[e]: {
							userReports: Object(p.a)(i.userReports, t, m)
						}
					}));
					else {
						const e = Object(a.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, C = (e, t, s) => async (o, r, {
					apiContext: c
				}) => {
					const i = r(),
						a = i.features.comments.models[e];
					if (!a) return;
					const m = a.postId,
						u = i.postStickiedComments.data[m],
						p = n.g[t];
					o(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.E.ADMIN,
							isMod: t === n.E.MODERATOR,
							isStickied: !!s
						}
					})), s && u && u !== e && o(Object(j.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(l.b)(c(), e, p, s || null)).ok ? s && o(w({
						id: e,
						postId: m,
						commentsPageKey: Object(d.a)(m, null, {
							sort: n.s.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (o(Object(j.i)({
						[e]: {
							distinguishType: a.distinguishType,
							isAdmin: a.isAdmin,
							isMod: a.isMod,
							isStickied: a.isStickied
						}
					})), o(Object(j.i)({
						[u]: {
							isStickied: i.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditUserAchievements.json"),
				i = s("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var a = s("./src/reddit/selectors/experiments/econ/index.ts"),
				m = s("./src/lib/initializeClient/installReducer.ts"),
				l = s("./src/reddit/reducers/features/powerups/index.ts"),
				u = s("./src/reddit/actions/gold/powerups.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/gold/powerups/index.ts"),
				j = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/economics/powerups/constants.ts");
			Object(m.a)({
				features: {
					powerups: l.a
				}
			});
			const v = Object(n.a)(x.d),
				g = Object(n.a)(x.h),
				w = Object(n.a)(x.f),
				y = Object(n.a)(x.g),
				R = Object(n.a)(x.e),
				I = (e, t) => async (s, o, {
					gqlContext: n
				}) => {
					const i = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (i.length) try {
						const t = o(),
							r = Object(a.i)(t),
							m = await (async (e, t, s, o) => {
								const n = await Object(d.a)(e, {
									...c,
									variables: {
										subredditId: t,
										redditorIds: s,
										includeSupporterInfo: o
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(n(), e, i, r),
							{
								subredditInfoById: l,
								redditorsInfoByIds: u
							} = m;
						await s(v(l)), r && u && await s(g(u))
					} catch (m) {
						r.c.captureException(m)
					}
				}, k = (e, t) => async (s, o) => {
					if (!e) return;
					const n = o(),
						r = Object(h.j)(n);
					if (!r || !Object(O.f)(n, {
							subredditId: e
						}) || !Object(a.g)(n)) return;
					const d = !!Object(j.c)(n, {
						subredditId: e,
						userId: r.id
					});
					!t && d || await s(I(e, [r.id]))
				}, C = e => async (t, s) => {
					if (!e) return !1;
					await t(Object(u.k)(e, {
						fullData: !0
					}));
					const o = s();
					return Object(O.f)(o, {
						subredditId: e
					}) && Object(a.g)(o)
				}, _ = e => async (t, s) => {
					var o;
					const n = s(),
						r = e.map(({
							id: e
						}) => e),
						d = Object(f.b)(n, {
							commentIds: r
						}),
						c = null === (o = d.find(e => e && e.subredditId)) || void 0 === o ? void 0 : o.subredditId;
					if (!(await t(C(c)))) return;
					const i = new Set(d.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(I(c, Array.from(i)))
				}, S = (e, t) => async (s, o) => {
					if (!t) return;
					if (!(await s(C(e)))) return;
					const n = new Set;
					Object.values(t).forEach(e => {
						n.add(e.authorId)
					}), await s(I(e, Array.from(n)))
				}, E = (e, t) => async (s, n, {
					gqlContext: c
				}) => {
					const a = n(),
						m = Object(h.j)(a);
					if (!m) return;
					const l = {
						subredditId: e,
						userId: m.id,
						achievementType: t
					};
					s(w(l));
					try {
						await (async (e, t, s) => {
							const o = await Object(d.a)(e, {
								...i,
								variables: {
									subredditId: t,
									achievementType: s
								}
							});
							if (!o.ok || !o.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(c(), l.subredditId, l.achievementType), s(y(l))
					} catch (u) {
						s(R(l)), r.c.captureException(u), s(Object(p.f)({
							duration: p.a,
							kind: b.b.Error,
							text: o.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = s("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const m = "PRESENCE__PRESENTUSERS_LOADED",
				l = Object(o.a)(m),
				u = (e, t, s) => async (o, m, {
					apiContext: u
				}) => {
					const p = m();
					if (!Object(a.a)(p)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const f = await (async (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/presence`),
						method: n.hb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: s || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const s = e.body.present_user_fullnames || [],
							o = new Set(s),
							n = {};
						return t.forEach(e => {
							n[e] = o.has(e)
						}), {
							presentUsers: n
						}
					}))(u(), Array.from(b), s);
					o(l(f))
				}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/index.m.less": function(e, t, s) {
			e.exports = {
				ReportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				reportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				ReportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				reportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				Reports: "ZL1AYPlBJX_2kYn3OATX6",
				reports: "ZL1AYPlBJX_2kYn3OATX6",
				UserReports: "_1d5zD9SHWtSuQPbzf7rh_k",
				userReports: "_1d5zD9SHWtSuQPbzf7rh_k"
			}
		},
		"./src/reddit/components/Reports/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return L
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				m = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/trackers/modTools.ts"),
				h = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				g = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				R = s.n(y);
			const {
				fbt: I
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, C = Object(d.b)(() => Object(c.c)({
				isDropdownOpen: (e, t) => Object(w.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(l.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(O.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, s)) : e(Object(m.ab)(t.reportedThingId, t.reason, s))
				}
			})), _ = Object(u.a)(b.a);
			class S extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.Xb.None : i.Xb.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(j.l)(Object(O.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: o,
						isDropdownOpen: r,
						isSnoozed: d
					} = this.props, c = k(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(f.b, {
						id: c,
						className: R.a.DropdownLabelContainer,
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: c,
						className: R.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(x.a, null) : n.a.createElement(h.a, null))), n.a.createElement(_, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: R.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: R.a.SnoozeButtonContent
					}, d ? n.a.createElement(n.a.Fragment, null, n.a.createElement(g.a, null), I._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, null), I._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var E = C(Object(p.c)(S)),
				T = s("./src/reddit/components/Reports/index.m.less"),
				A = s.n(T);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), D = r.a.div("ReportText", A.a), B = r.a.div("ReportsTitle", A.a);

			function L(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: A.a.Reports
				}, n.a.createElement(B, null, P._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => n.a.createElement(D, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && n.a.createElement("div", {
					className: A.a.Reports
				}, n.a.createElement(B, null, P._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: A.a.UserReports
				}, o.map(([e, t, s, o]) => void 0 !== s && o ? n.a.createElement(E, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: s
				}) : n.a.createElement(D, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/ViewReportsDropdown/ReportsList.m.less": function(e, t, s) {
			e.exports = {
				Footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				FooterButton: "N4PQSWJIy71lacAE0bgsp",
				footerButton: "N4PQSWJIy71lacAE0bgsp"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_2E7inYp2OX8O0j2rbGsnw8",
				styledDropdown: "_2E7inYp2OX8O0j2rbGsnw8"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/selectors/tooltip.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./src/reddit/components/Reports/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				O = s.n(f);
			const j = c.a.wrapped(b.a, "Footer", O.a),
				h = c.a.wrapped(p.c, "FooterButton", O.a);
			var x = e => n.a.createElement("div", null, n.a.createElement(u.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && n.a.createElement(j, null, n.a.createElement(h, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? l.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : l.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				v = s("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				g = s.n(v);
			const w = c.a.wrapped(a.a, "StyledDropdown", g.a),
				y = Object(d.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				R = Object(r.b)(y),
				I = Object(i.a)(w),
				k = R(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						s = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						o = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(I, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, n.a.createElement(x, {
						ignoreReports: e.model.ignoreReports,
						modReports: s,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: o,
						reportedThingId: e.model.id
					}))
				});
			t.default = k
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return u
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return w
			}));
			var o = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: n.hb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				h = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: n.hb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, s, d) => {
					let c = Object(i.a)(Object(l.a)(Object(m.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return d && (c = Object(a.a)(c)), Object(r.a)(e, {
						data: s,
						endpoint: c,
						method: n.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				w = (e, t, s, o) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: n.hb.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "c", (function() {
				return l
			}));
			var o = s("./src/telemetry/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...n.defaults(e),
					profile: n.profile(e),
					post: n.post(e, t),
					media: n.media(e, t),
					subreddit: n.subreddit(e),
					comment: n.comment(e, t)
				}),
				d = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...n.defaults(e),
					profile: n.profile(e),
					post: n.post(e, t),
					media: n.media(e, t),
					subreddit: n.subreddit(e),
					comment: n.comment(e, t)
				}),
				c = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: n.user(t),
					subreddit: n.subreddit(t),
					post: n.post(t, e),
					actionInfo: n.actionInfo(t),
					app: n.app(t),
					referrer: n.referrer(t),
					session: n.session(t)
				}),
				i = e => t => ({
					source: "comment_composer",
					action: "view",
					noun: "upvote_checkbox",
					...n.defaults(t),
					subreddit: n.subreddit(t),
					post: n.post(t, e),
					comment: n.comment(t, e)
				}),
				a = e => t => ({
					source: "comment_composer",
					action: "submit",
					noun: "upvote_checkbox",
					...n.defaults(t),
					subreddit: n.subreddit(t),
					post: n.post(t, e),
					comment: n.comment(t, e)
				}),
				m = e => t => ({
					source: "comment_composer",
					action: "select",
					noun: "upvote_checkbox",
					...n.defaults(t),
					subreddit: n.subreddit(t),
					post: n.post(t, e),
					comment: n.comment(t, e)
				}),
				l = e => t => ({
					source: "comment_composer",
					action: "deselect",
					noun: "upvote_checkbox",
					...n.defaults(t),
					subreddit: n.subreddit(t),
					post: n.post(t, e),
					comment: n.comment(t, e)
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = s.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = s.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.ed
					}) === o.od.Enabled
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.dd
					}) === o.nd.Enabled
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: s
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[s] && t in e.features.comments.collapsed[s]) return !!e.features.comments.collapsed[s][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				n = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const s = e.features.comments.models[t];
					return !(!s || !s.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.47308a2c657f595d8f93.js.map