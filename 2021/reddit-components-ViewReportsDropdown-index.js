// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.ed93c03589a0a317c0c4.js
// Retrieved at 6/7/2021, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/graphql/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/graphql/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return C
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "j", (function() {
				return z
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "o", (function() {
				return $
			})), n.d(t, "p", (function() {
				return q
			})), n.d(t, "d", (function() {
				return Z
			})), n.d(t, "a", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "k", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/telemetry/index.ts"),
				d = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/helpers/async.ts"),
				i = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				a = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/presence.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				f = n("./src/reddit/endpoints/comment/index.tsx"),
				O = n("./src/reddit/helpers/commentList/index.ts"),
				j = n("./src/reddit/helpers/trackers/comment.ts"),
				x = n("./src/reddit/models/Comment/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/comments.ts"),
				R = n("./src/reddit/selectors/commentSelector.ts"),
				y = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				w = n("./src/reddit/selectors/moderatingComments.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				C = Object(d.a)(I.o),
				T = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(_.K)(n())) return t(Object(a.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(E.m)(n(), {
							commentId: e
						})
					}));
					const o = n().features.comments.models[e];
					if (!o) return;
					const d = o.isSaved ? f.k : f.g;
					if (t(C({
							[e]: {
								isSaved: !o.isSaved
							}
						})), (await d(s(), e)).ok) {
						const n = o.isSaved ? r.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : r.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = r.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: n,
							kind: v.b.Undo,
							buttonText: s,
							buttonAction: T(e)
						}))
					} else t(C({
						[e]: {
							isSaved: o.isSaved
						}
					}))
				}, k = e => `viewing-comment-${e}`, P = s.a.telemetry.commentConsumedThreshold, D = e => async (t, n) => {
					const r = n();
					if (!Object(R.a)(r, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					j.c({
						state: r,
						commentId: e
					}), o.c.start(k(e));
					const d = setTimeout(() => j.a({
						state: r,
						commentId: e
					}), P);
					S[e] = d
				}, A = (e, t) => async (n, s) => {
					const r = s(),
						d = k(e);
					if (Object(R.a)(r, {
							commentId: e
						}) && o.c.has(d)) {
						const n = o.c.end(d);
						!t && n < P && (clearTimeout(S[e]), delete S[e])
					}
				}, U = Object(d.a)(I.x), N = Object(d.a)(I.w), B = Object(d.a)(I.v), F = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						d = o.moreComments.models[t],
						a = o.platform.currentPage,
						l = a && a.routeMatch,
						u = l && l.match,
						{
							partialPostId: p
						} = u ? u.params : null;
					if (!p) return;
					const b = Object(h.s)(p);
					n(U({
						moreCommentsId: d.id
					}));
					const j = await Object(f.e)(r(), b, {
						token: d.token
					}, Object(y.a)(o));
					if (j.ok) {
						const t = j.body,
							s = Object(O.a)(t, b, o);
						n(N({
							key: e,
							moreCommentsItem: d,
							shouldCollapse: s,
							...t
						}));
						const r = o.posts.models[b];
						let a;
						r && "subreddit" === r.belongsTo.type && t.comments && (a = r.belongsTo.id, await n(Object(c.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [r.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const l = j.body.comments,
							u = j.body.posts;
						await n(Object(m.b)(u, l, a)), await n(Object(i.b)(a, l))
					} else n(B({
						moreCommentsItem: d,
						...j.error
					}))
				}, L = Object(b.a)(O.b, g.a.upvoted), z = Object(b.a)(O.b, g.a.downvoted), M = Object(d.a)(I.j), V = Object(d.a)(I.i), K = Object(d.a)(I.e), H = Object(d.a)(I.f), $ = (Object(d.a)(I.c), Object(d.a)(I.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, r) => {
					const o = r(),
						d = Object(x.h)(e),
						c = Object(E.n)(o, {
							commentLink: d,
							commentsPageKey: t
						}),
						i = Object(w.b)(o, {
							commentId: e,
							commentsPageKey: t
						}),
						a = c.depth;
					s(K({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || n(e, !0), Object(u.d)()
				}), q = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, Z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (r, o) => {
					const d = o(),
						c = Object(O.e)(t, e, n, d),
						i = Object(w.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					r(K({
						commentId: c,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === n && s(c, !0), Object(u.d)()
				}, J = Object(d.a)(I.r), Q = e => t => t(J({
					draftKey: e
				})), W = Object(d.a)(I.a), X = Object(d.a)(I.E), G = Object(d.a)(I.b), Y = Object(d.a)(I.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/lib/makeCommentsPageKey/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/shortcuts/utils.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/comment/index.ts"),
				x = n("./src/reddit/actions/comment/constants.ts");
			const h = Object(o.a)(x.n),
				v = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(m.h)(s(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(O.K)(n())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const o = r.isLocked ? m.j : m.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await o(s(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, E = Object(o.a)(x.F), R = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					o && d && (t(Object(j.i)({
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
					})), (await Object(m.a)(s(), e)).ok || t(Object(j.i)({
						[e]: {
							isApproved: o.isApproved,
							approvedBy: null,
							bannedBy: o.bannedBy,
							isRemoved: o.isRemoved,
							isSpam: o.isSpam,
							modNote: o.modNote,
							modReasonBy: o.modReasonBy,
							modRemovalReason: o.modRemovalReason,
							numReports: o.numReports || null
						}
					})), Object(i.d)())
				}, y = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						d = o.features.comments.models[e],
						c = o.user.account ? o.user.account.displayText : null;
					d && c && (n(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: c,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(r(), e, t)).ok || n(Object(j.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(i.d)())
				}, w = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const o = r.ignoreReports ? m.i : m.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await o(s(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, _ = (e, t, n) => async (o, d, {
					gqlContext: c
				}) => {
					const i = Object(f.a)(d(), {
						commentId: e
					});
					if (!i) return;
					const l = n === r.Vb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(c(), {
							input: m
						})).ok) o(Object(j.i)({
						[e]: {
							userReports: Object(p.a)(i.userReports, t, l)
						}
					}));
					else {
						const e = Object(a.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						o(Object(a.f)(e))
					}
				}, I = (e, t, n) => async (s, o, {
					apiContext: c
				}) => {
					const i = o(),
						a = i.features.comments.models[e];
					if (!a) return;
					const l = a.postId,
						u = i.postStickiedComments.data[l],
						p = r.g[t];
					s(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.D.ADMIN,
							isMod: t === r.D.MODERATOR,
							isStickied: !!n
						}
					})), n && u && u !== e && s(Object(j.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(c(), e, p, n || null)).ok ? n && s(E({
						id: e,
						postId: l,
						commentsPageKey: Object(d.a)(l, null, {
							sort: r.r.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (s(Object(j.i)({
						[e]: {
							distinguishType: a.distinguishType,
							isAdmin: a.isAdmin,
							isMod: a.isMod,
							isStickied: a.isStickied
						}
					})), s(Object(j.i)({
						[u]: {
							isStickied: i.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "c", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				d = n("./src/graphql/operations/SubredditUserAchievements.json"),
				c = n("./src/graphql/operations/UpdateAchievementFlairPreference.json"),
				i = n("./src/lib/makeGqlRequest/index.ts");
			var a = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				m = n("./src/reddit/reducers/features/powerups/index.ts"),
				u = n("./src/reddit/actions/gold/powerups.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: m.a
				}
			});
			const x = Object(r.a)(j.d),
				h = Object(r.a)(j.f),
				v = Object(r.a)(j.g),
				g = Object(r.a)(j.e),
				E = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, n) => {
							const s = await Object(i.a)(e, {
								...d,
								variables: {
									subredditId: t,
									redditorIds: n
								}
							});
							if (!s.ok) throw new Error("Unable to fetch user achievements");
							return s.body.data.subredditInfoById
						})(r(), e, c);
						await n(x(t))
					} catch (a) {
						o.c.captureException(a)
					}
				}, R = (e, t) => async (n, s) => {
					if (!e) return;
					await n(Object(u.i)(e, {
						fullData: !0
					}));
					const r = s();
					if (!Object(f.f)(r, {
							subredditId: e
						}) || !t || !Object(a.g)(r)) return;
					const o = new Set;
					Object.values(t).forEach(e => {
						o.add(e.authorId)
					}), await n(E(e, Array.from(o)))
				}, y = (e, t) => async (n, r, {
					gqlContext: d
				}) => {
					const a = r(),
						l = Object(O.j)(a);
					if (!l) return;
					const m = {
						subredditId: e,
						userId: l.id,
						achievementType: t
					};
					n(h(m));
					try {
						await (async (e, t, n) => {
							if (!(await Object(i.a)(e, {
									...c,
									variables: {
										subredditId: t,
										achievementType: n
									}
								})).ok) throw new Error("Unable to update the preferred achievement flair")
						})(d(), m.subredditId, m.achievementType), n(v(m))
					} catch (u) {
						n(g(m)), o.c.captureException(u), n(Object(p.f)({
							duration: p.a,
							kind: b.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			}));
			const s = 120,
				r = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				o = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				d = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				i = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				a = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/actions/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				m = Object(s.a)(l),
				u = (e, t, n) => async (s, l, {
					apiContext: u
				}) => {
					const p = l();
					if (!Object(a.a)(p)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const f = await (async (e, t, n) => Object(o.a)(Object(d.a)(e, [c.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/presence`),
						method: r.fb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: n || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const n = e.body.present_user_fullnames || [],
							s = new Set(n),
							r = {};
						return t.forEach(e => {
							r[e] = s.has(e)
						}), {
							presentUsers: r
						}
					}))(u(), Array.from(b), n);
					s(m(f))
				}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Reports/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Reports/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return B
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/helpers/isComment.ts"),
				j = n("./src/reddit/helpers/trackers/modTools.ts"),
				x = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				g = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				R = n("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = n.n(R);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = (e, t) => `SnoozableReport--${t}--${e}`, I = Object(o.b)(() => Object(c.c)({
				isDropdownOpen: (e, t) => Object(E.b)(_(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: _(t.reason, t.reportedThingId)
				})),
				toggleSnooze: n => {
					Object(O.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, n)) : e(Object(l.Y)(t.reportedThingId, t.reason, n))
				}
			})), S = Object(u.a)(b.a);
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.Vb.None : i.Vb.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(j.l)(Object(O.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: n,
						openDropdown: s,
						isDropdownOpen: o,
						isSnoozed: d
					} = this.props, c = _(e, n);
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, r.a.createElement(f.b, {
						id: c,
						className: y.a.DropdownLabelContainer,
						onClick: s
					}, r.a.createElement("label", {
						htmlFor: c,
						className: y.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, o ? r.a.createElement(h.a, null) : r.a.createElement(x.a, null))), r.a.createElement(S, {
						isOpen: o,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, r.a.createElement("button", {
						className: y.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, r.a.createElement("div", {
						className: y.a.SnoozeButtonContent
					}, d ? r.a.createElement(r.a.Fragment, null, r.a.createElement(g.a, null), w._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(v.a, null), w._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var T = I(Object(p.c)(C)),
				k = n("./src/reddit/featureFlags/index.ts"),
				P = n("./src/reddit/components/Reports/index.m.less"),
				D = n.n(P);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = d.a.div("ReportText", D.a), N = d.a.div("ReportsTitle", D.a);

			function B(e) {
				const {
					className: t,
					modReports: n,
					userReports: s,
					reportedThingId: d
				} = e, c = Object(o.e)(e => k.d.enableSnoozableReport(e));
				return r.a.createElement("div", {
					className: t
				}, n && n.length > 0 && r.a.createElement("div", {
					className: D.a.Reports
				}, r.a.createElement(N, null, A._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), n.map(([e, t]) => r.a.createElement(U, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), s && s.length > 0 && r.a.createElement("div", {
					className: D.a.Reports
				}, r.a.createElement(N, null, A._("User Reports", null, {
					hk: "2KeCLz"
				})), r.a.createElement("div", {
					className: D.a.UserReports
				}, s.map(([e, t, n, s]) => c && void 0 !== n && s ? r.a.createElement(T, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: d,
					isSnoozed: n
				}) : r.a.createElement(U, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/ViewReportsDropdown/ReportsList.m.less": function(e, t, n) {
			e.exports = {
				Footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				FooterButton: "N4PQSWJIy71lacAE0bgsp",
				footerButton: "N4PQSWJIy71lacAE0bgsp"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_2E7inYp2OX8O0j2rbGsnw8",
				styledDropdown: "_2E7inYp2OX8O0j2rbGsnw8"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = n("./src/reddit/controls/Dropdown/index.tsx"),
				l = n("./src/reddit/selectors/tooltip.ts"),
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				u = n("./src/reddit/components/Reports/index.tsx"),
				p = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				O = n.n(f);
			const j = c.a.wrapped(b.a, "Footer", O.a),
				x = c.a.wrapped(p.c, "FooterButton", O.a);
			var h = e => r.a.createElement("div", null, r.a.createElement(u.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && r.a.createElement(j, null, r.a.createElement(x, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? m.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : m.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				v = n("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				g = n.n(v);
			const E = c.a.wrapped(a.a, "StyledDropdown", g.a),
				R = Object(d.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(l.b)(t)(e)
				}),
				y = Object(o.b)(R),
				w = Object(i.a)(E),
				_ = y(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						n = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						s = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return r.a.createElement(w, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, r.a.createElement(h, {
						ignoreReports: e.model.ignoreReports,
						modReports: n,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: s,
						reportedThingId: e.model.id
					}))
				});
			t.default = _
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return u
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: r.fb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				x = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: r.fb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n, d) => {
					let c = Object(i.a)(Object(m.a)(Object(l.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return d && (c = Object(a.a)(c)), Object(o.a)(e, {
						data: n,
						endpoint: c,
						method: r.fb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				E = (e, t, n, s) => Object(o.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: r.fb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/telemetry/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				d = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...r.defaults(e),
					profile: r.profile(e),
					post: r.post(e, t),
					media: r.media(e, t),
					subreddit: r.subreddit(e),
					comment: r.comment(e, t)
				}),
				c = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: r.user(t),
					subreddit: r.subreddit(t),
					post: r.post(t, e),
					actionInfo: r.actionInfo(t),
					app: r.app(t),
					referrer: r.referrer(t),
					session: r.session(t)
				})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = n.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(c.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, n) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = n.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var d = n("./node_modules/icepick/icepick.js"),
				c = n("./src/reddit/actions/economics/powerups/constants.ts");
			const i = {};
			t.a = Object(s.c)({
				subredditAchievements: (e = o, t) => {
					switch (t.type) {
						case r.nb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload, o = s.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[n] || {});
							return {
								...e, [n]: o
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = i, t) => {
					var n, s;
					switch (t.type) {
						case c.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: o
							} = t.payload;
							let d = e[r] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of o) {
								const r = t.map(({
										type: e
									}) => e),
									o = null === (n = t.find(({
										isPreferred: e
									}) => e)) || void 0 === n ? void 0 : n.type,
									c = null === (s = t.find(({
										type: e
									}) => "POWERUPS_SUPPORTER" === e)) || void 0 === s ? void 0 : s.type;
								d = {
									...d,
									[e]: {
										achievementTypes: r,
										preferredType: o,
										supporterType: c
									}
								}
							}
							return {
								...e,
								[r]: d
							}
						}
						case c.f: {
							const {
								subredditId: n,
								userId: s,
								achievementType: r
							} = t.payload;
							return Object(d.setIn)(e, [n, s, "pendingPreferredType"], r)
						}
						case c.g: {
							const {
								subredditId: n,
								userId: s,
								achievementType: r
							} = t.payload;
							return Object(d.updateIn)(e, [n, s], e => ({
								...e,
								preferredType: r,
								pendingPreferredType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(d.setIn)(e, [n, s, "pendingPreferredType"], void 0)
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/experiments/econ/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "p", (function() {
				return g
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => t => {
					const n = Object(r.c)(t, {
						experimentEligibilitySelector: r.a,
						experimentName: e
					});
					return !(!n || Object(s.Jd)(n))
				},
				d = o(s.ob),
				c = o(s.qb),
				i = o(s.rb),
				a = o(s.xb),
				l = o(s.yb),
				m = o(s.zb),
				u = o(s.Cb),
				p = o(s.Fb),
				b = o(s.Ab),
				f = o(s.Db),
				O = o(s.Bb),
				j = o(s.Eb),
				x = o(s.Gb),
				h = o(s.ub),
				v = o(s.tb),
				g = (o(s.vb), o(s.Hb))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Fc
					}) === s.Pc.Enabled
				},
				d = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Ec
					}) === s.Oc.Enabled
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				r = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.ed93c03589a0a317c0c4.js.map