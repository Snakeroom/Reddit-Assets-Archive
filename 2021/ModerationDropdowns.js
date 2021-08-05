// https://www.redditstatic.com/desktop2x/ModerationDropdowns.d213abd8152ca26ec360.js
// Retrieved at 8/5/2021, 3:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return I
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "h", (function() {
				return M
			})), s.d(t, "l", (function() {
				return A
			})), s.d(t, "q", (function() {
				return B
			})), s.d(t, "j", (function() {
				return G
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "f", (function() {
				return z
			})), s.d(t, "o", (function() {
				return H
			})), s.d(t, "p", (function() {
				return K
			})), s.d(t, "d", (function() {
				return V
			})), s.d(t, "a", (function() {
				return J
			})), s.d(t, "b", (function() {
				return q
			})), s.d(t, "n", (function() {
				return X
			})), s.d(t, "c", (function() {
				return $
			})), s.d(t, "k", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/helpers/async.ts"),
				c = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				d = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/presence.ts"),
				p = s("./src/reddit/actions/shortcuts/utils.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/actions/vote.ts"),
				f = s("./src/reddit/endpoints/comment/index.tsx"),
				x = s("./src/reddit/helpers/commentList/index.ts"),
				h = s("./src/reddit/helpers/trackers/comment.ts"),
				O = s("./src/reddit/models/Comment/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				k = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = s("./src/reddit/selectors/moderatingComments.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/actions/comment/constants.ts");
			const R = {},
				I = Object(i.a)(P.o),
				y = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(w.J)(s())) return t(Object(d.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(k.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const i = r.isSaved ? f.k : f.g;
					if (t(I({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await i(n(), e)).ok) {
						const s = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							n = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(u.f)({
							text: s,
							kind: v.b.Undo,
							buttonText: n,
							buttonAction: y(e)
						}))
					} else t(I({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, N = e => `viewing-comment-${e}`, S = n.a.telemetry.commentConsumedThreshold, T = e => async (t, s) => {
					const o = s();
					if (!Object(g.a)(o, {
							commentId: e
						}) || Math.random() > n.a.telemetry.commentSampleRate) return;
					h.c({
						state: o,
						commentId: e
					}), r.c.start(N(e));
					const i = setTimeout(() => h.a({
						state: o,
						commentId: e
					}), S);
					R[e] = i
				}, M = (e, t) => async (s, n) => {
					const o = n(),
						i = N(e);
					if (Object(g.a)(o, {
							commentId: e
						}) && r.c.has(i)) {
						const s = r.c.end(i);
						!t && s < S && (clearTimeout(R[e]), delete R[e])
					}
				}, L = Object(i.a)(P.x), D = Object(i.a)(P.w), F = Object(i.a)(P.v), A = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
						i = r.moreComments.models[t],
						d = r.platform.currentPage,
						l = d && d.routeMatch,
						p = l && l.match,
						{
							partialPostId: u
						} = p ? p.params : null;
					if (!u) return;
					const b = Object(j.s)(u);
					s(L({
						moreCommentsId: i.id
					}));
					const h = await Object(f.e)(o(), b, {
						token: i.token
					}, Object(E.a)(r));
					if (h.ok) {
						const t = h.body,
							n = Object(x.a)(t, b, r);
						s(D({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: n,
							...t
						}));
						const o = r.posts.models[b];
						let d;
						o && "subreddit" === o.belongsTo.type && t.comments && (d = o.belongsTo.id, await s(Object(a.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const l = h.body.comments,
							p = h.body.posts;
						await s(Object(m.b)(p, l, d)), await s(Object(c.b)(d, l))
					} else s(F({
						moreCommentsItem: i,
						...h.error
					}))
				}, B = Object(b.a)(x.b, C.a.upvoted), G = Object(b.a)(x.b, C.a.downvoted), U = Object(i.a)(P.j), z = Object(i.a)(P.i), W = Object(i.a)(P.e), Q = Object(i.a)(P.f), H = (Object(i.a)(P.c), Object(i.a)(P.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (n, o) => {
					const r = o(),
						i = Object(O.i)(e),
						a = Object(k.n)(r, {
							commentLink: i,
							commentsPageKey: t
						}),
						c = Object(_.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = a.depth;
					n(W({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || s(e, !0), Object(p.d)()
				}), K = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s(Q({
						commentId: e,
						commentsPageKey: t
					}))
				}, V = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const i = r(),
						a = Object(x.e)(t, e, s, i),
						c = Object(_.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(W({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === s && n(a, !0), Object(p.d)()
				}, Z = Object(i.a)(P.r), J = e => t => t(Z({
					draftKey: e
				})), q = Object(i.a)(P.a), X = Object(i.a)(P.E), $ = Object(i.a)(P.b), Y = Object(i.a)(P.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "b", (function() {
				return P
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				p = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				O = s("./src/reddit/actions/comment/constants.ts");
			const j = Object(r.a)(O.n),
				v = e => async (t, s, {
					apiContext: n
				}) => {
					s().features.comments.models[e] && (await Object(m.h)(n(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, C = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(x.J)(s())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const o = s().features.comments.models[e];
					if (!o) return;
					const r = o.isLocked ? m.j : m.d;
					t(Object(h.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await r(n(), e)).ok || t(Object(h.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, k = Object(r.a)(O.F), g = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s(),
						r = o.features.comments.models[e],
						i = o.user.account ? o.user.account.displayText : null;
					r && i && (t(Object(h.i)({
						[e]: {
							isApproved: !0,
							approvedBy: i,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(n(), e)).ok || t(Object(h.i)({
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
					})), Object(c.d)())
				}, E = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
						i = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					i && a && (s(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: a,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(o(), e, t)).ok || s(Object(h.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(c.d)())
				}, _ = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s().features.comments.models[e];
					if (!o) return;
					const r = o.ignoreReports ? m.i : m.c;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await r(n(), e)).ok || t(Object(h.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, w = (e, t, s) => async (r, i, {
					gqlContext: a
				}) => {
					const c = Object(f.a)(i(), {
						commentId: e
					});
					if (!c) return;
					const l = s === o.Xb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(p.a)(a(), {
							input: m
						})).ok) r(Object(h.i)({
						[e]: {
							userReports: Object(u.a)(c.userReports, t, l)
						}
					}));
					else {
						const e = Object(d.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, P = (e, t, s) => async (n, r, {
					apiContext: a
				}) => {
					const c = r(),
						d = c.features.comments.models[e];
					if (!d) return;
					const l = d.postId,
						p = c.postStickiedComments.data[l],
						u = o.g[t];
					n(Object(h.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.E.ADMIN,
							isMod: t === o.E.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && n(Object(h.i)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(m.b)(a(), e, u, s || null)).ok ? s && n(k({
						id: e,
						postId: l,
						commentsPageKey: Object(i.a)(l, null, {
							sort: o.s.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (n(Object(h.i)({
						[e]: {
							distinguishType: d.distinguishType,
							isAdmin: d.isAdmin,
							isMod: d.isMod,
							isStickied: d.isStickied
						}
					})), n(Object(h.i)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = s("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var d = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/lib/initializeClient/installReducer.ts"),
				m = s("./src/reddit/reducers/features/powerups/index.ts"),
				p = s("./src/reddit/actions/gold/powerups.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/index.ts"),
				x = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: m.a
				}
			});
			const j = Object(o.a)(O.d),
				v = Object(o.a)(O.f),
				C = Object(o.a)(O.g),
				k = Object(o.a)(O.e),
				g = (e, t) => async (s, n, {
					gqlContext: o
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, s) => {
							const n = await Object(i.a)(e, {
								...a,
								variables: {
									subredditId: t,
									redditorIds: s
								}
							});
							if (!n.ok) throw new Error("Unable to fetch user achievements");
							return n.body.data.subredditInfoById
						})(o(), e, c);
						await s(j(t))
					} catch (d) {
						r.c.captureException(d)
					}
				}, E = (e, t) => async (s, n) => {
					if (!e) return;
					const o = n(),
						r = Object(h.j)(o);
					if (!r || !Object(f.f)(o, {
							subredditId: e
						}) || !Object(d.g)(o)) return;
					const i = !!Object(x.b)(o, {
						subredditId: e,
						userId: r.id
					});
					!t && i || await s(g(e, [r.id]))
				}, _ = (e, t) => async (s, n) => {
					if (!e) return;
					await s(Object(p.k)(e, {
						fullData: !0
					}));
					const o = n();
					if (!Object(f.f)(o, {
							subredditId: e
						}) || !t || !Object(d.g)(o)) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await s(g(e, Array.from(r)))
				}, w = (e, t) => async (s, o, {
					gqlContext: a
				}) => {
					const d = o(),
						l = Object(h.j)(d);
					if (!l) return;
					const m = {
						subredditId: e,
						userId: l.id,
						achievementType: t
					};
					s(v(m));
					try {
						await (async (e, t, s) => {
							const n = await Object(i.a)(e, {
								...c,
								variables: {
									subredditId: t,
									achievementType: s
								}
							});
							if (!n.ok || !n.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(a(), m.subredditId, m.achievementType), s(C(m))
					} catch (p) {
						s(k(m)), r.c.captureException(p), s(Object(u.f)({
							duration: u.a,
							kind: b.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return O
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/predictions/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/endpoints/economics/predictions.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/actions/economics/predictions/constants.ts");
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			Object(n.a)({
				features: {
					predictions: o.a
				}
			});
			const u = Object(r.a)(m.c),
				b = e => e(Object(c.f)({
					duration: c.a,
					kind: l.b.Error,
					text: p._("Error: Failed to change prediction end time, please try again later", null, {
						hk: "1Crf4a"
					})
				})),
				f = ({
					postId: e,
					closedAt: t
				}) => async (s, n, {
					gqlContext: o
				}) => {
					if (e && t && !isNaN(t.getTime())) try {
						await Object(i.e)(o(), {
							postId: e,
							closedAt: t
						}), s(u({
							endsAt: t.getTime(),
							pollId: e
						})), s(Object(c.f)({
							duration: c.a,
							kind: l.b.SuccessCommunity,
							text: p._("Changed when prediction ends", null, {
								hk: "42CDEn"
							})
						}))
					} catch {
						b(s)
					} else b(s)
				}, x = e => Object(a.h)(d.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}), h = e => Object(a.h)(d.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}), O = e => Object(a.h)(d.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: e
				})
		},
		"./src/reddit/actions/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				a = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = s("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				m = Object(n.a)(l),
				p = (e, t, s) => async (n, l, {
					apiContext: p
				}) => {
					const u = l();
					if (!Object(d.a)(u)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const f = await (async (e, t, s) => Object(r.a)(Object(i.a)(e, [a.a]), {
						endpoint: Object(c.a)(`${e.apiUrl}/api/presence`),
						method: o.hb.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: s || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const s = e.body.present_user_fullnames || [],
							n = new Set(s),
							o = {};
						return t.forEach(e => {
							o[e] = n.has(e)
						}), {
							presentUsers: o
						}
					}))(p(), Array.from(b), s);
					n(m(f))
				}
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, s) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/components/BadgeCounter/index.m.less"),
				c = s.n(a);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: s,
				unreadCount: n
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: s || n < 1
				})
			}, s || n < 1 ? "" : Object(i.b)(n)) : null
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.m.less": function(e, t, s) {
			e.exports = {
				ActiveIconContainer: "_1SHmcPFNOYth9V07BrQbWe",
				activeIconContainer: "_1SHmcPFNOYth9V07BrQbWe",
				IgnoreIconContainer: "_231DL0a-pe2vt5a5wQFu-n",
				ignoreIconContainer: "_231DL0a-pe2vt5a5wQFu-n",
				ActiveReportIcon: "_2PbiVXRQ59T8F7WkkcmNJJ",
				activeReportIcon: "_2PbiVXRQ59T8F7WkkcmNJJ",
				ChevronDown: "_1K34tAjeMu5wwkF99T5U5N",
				chevronDown: "_1K34tAjeMu5wwkF99T5U5N",
				iconStyles: "KzVJcOJnWakQs6yTjNYG1",
				IgnoreReport: "heUDQXPPxJ8ilm83gzEOL",
				ignoreReport: "heUDQXPPxJ8ilm83gzEOL",
				ReportIcon: "GFTfF_oGSdBjkBx808plH",
				reportIcon: "GFTfF_oGSdBjkBx808plH",
				ReportsContainer: "_3p5RUX-xUh-Z5ajgM1VO9u",
				reportsContainer: "_3p5RUX-xUh-Z5ajgM1VO9u",
				collapseReports: "_38db2AwPYQmVZVN7aI39nE",
				Button: "_38jNHw-Fx74ukOx-fzwEzP",
				button: "_38jNHw-Fx74ukOx-fzwEzP",
				NumReports: "_4TK2s77zuWq2GpAmqfk1o",
				numReports: "_4TK2s77zuWq2GpAmqfk1o",
				Reports: "BvzGzzQ_gL4MGFqyaQ3zC",
				reports: "BvzGzzQ_gL4MGFqyaQ3zC"
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Reports/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/modTools.ts"),
				u = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				b = s("./src/reddit/icons/fonts/Report/index.tsx"),
				f = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				h = s.n(x);
			const O = a.a.span("IgnoreIconContainer", h.a),
				j = a.a.span("ActiveIconContainer", h.a),
				v = a.a.wrapped(f.a, "ChevronDown", h.a),
				C = a.a.wrapped(b.a, "ActiveReportIcon", h.a),
				k = a.a.wrapped(u.a, "IgnoreReport", h.a),
				g = a.a.wrapped(b.a, "ReportIcon", h.a),
				E = a.a.div("ReportsContainer", h.a),
				_ = a.a.wrapped(d.c, "Button", h.a),
				w = a.a.wrapped(c.a, "Reports", h.a),
				P = a.a.div("NumReports", h.a),
				R = ({
					className: e,
					handleToggleExpando: t,
					isHistoricalReports: s,
					numReports: o,
					modReports: a,
					userReports: c,
					collapseReports: d,
					reportedThingId: l
				}) => r.a.createElement(E, {
					className: Object(i.a)(e, {
						[h.a.collapseReports]: d
					})
				}, d ? r.a.createElement(O, null, r.a.createElement(k, null)) : r.a.createElement(j, null, r.a.createElement(C, null)), d ? r.a.createElement(P, null, o) : r.a.createElement(w, {
					modReports: a,
					userReports: c,
					reportedThingId: l
				}), s ? r.a.createElement(_, {
					onClick: t,
					text: n.fbt._("old reports", null, {
						hk: "2IdZOv"
					})
				}, r.a.createElement(v, null)) : r.a.createElement(_, {
					onClick: t,
					text: d ? n.fbt._("Restore Reports", null, {
						hk: "2O219R"
					}) : n.fbt._("ignore reports", null, {
						hk: "48jlNW"
					})
				}, d ? r.a.createElement(g, null) : r.a.createElement(k, null)));
			class I extends r.a.Component {
				constructor(e) {
					super(e), this.handleIgnoreReports = () => {
						let e;
						this.props.onIgnoreReports();
						const t = this.props.reportable.ignoreReports ? "restore_reports" : "ignore_reports";
						e = Object(m.a)(this.props.reportable.id) ? Object(p.h)(t, this.props.reportable.id) : Object(p.g)(t, this.props.reportable.id), this.props.sendEvent(e)
					}, this.handleToggleHistoricalReports = () => {
						this.setState({
							historicalReportsCollapsed: !this.state.historicalReportsCollapsed
						})
					}, this.state = {
						historicalReportsCollapsed: !0
					}
				}
				render() {
					const {
						className: e,
						reportable: t
					} = this.props, s = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return r.a.createElement("div", null, s ? r.a.createElement(R, {
						className: e,
						collapseReports: this.state.historicalReportsCollapsed,
						handleToggleExpando: this.handleToggleHistoricalReports,
						isHistoricalReports: !0,
						numReports: s,
						modReports: t.modReportsDismissed,
						userReports: t.userReportsDismissed,
						reportedThingId: t.id
					}) : r.a.createElement(R, {
						className: e,
						handleToggleExpando: this.handleIgnoreReports,
						collapseReports: t.ignoreReports,
						numReports: t.numReports || 0,
						modReports: t.modReports,
						userReports: t.userReports,
						reportedThingId: t.id
					}))
				}
			}
			t.default = Object(l.c)(I)
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				ClassicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				classicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				ButtonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9",
				buttonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(n || (n = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return x
			}));
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = s.n(d),
				m = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				p = s.n(m);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const u = {
					[a.a.Approve]: o.Approve,
					[a.a.Remove]: o.Remove,
					[a.a.Spam]: o.Spam,
					[a.a.Flair]: o.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default,
					[c.g.Search]: r.Default
				},
				f = e => {
					const t = u[e.flatlistItem],
						s = e.postLayout && b[e.postLayout],
						n = l.a[e.breakpointType],
						o = l.a[t],
						a = s ? l.a[s] : l.a[r.Default];
					return Object(i.a)(n, o, a)
				},
				x = e => {
					const t = e && b[e],
						s = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(s, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				styledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				Separator: "_25jFfk04fRizfTaV4T8_fC",
				separator: "_25jFfk04fRizfTaV4T8_fC",
				IconWrapper: "_3sg-oQTG-KtWNGZEzdlnV9",
				iconWrapper: "_3sg-oQTG-KtWNGZEzdlnV9",
				BadgeCounter: "O2gjjKs4ae_nDFlxL3cbh",
				badgeCounter: "O2gjjKs4ae_nDFlxL3cbh"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "default", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/BadgeCounter/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = s("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = s.n(b);
			const x = c.a.wrapped(l.a, "StyledDropdown", f.a),
				h = Object(i.a)(x),
				O = c.a.div("Separator", f.a),
				j = (e, t) => s => r.a.createElement("span", {
					className: Object(a.a)(f.a.IconWrapper, s.className)
				}, r.a.createElement(d.a, {
					className: f.a.BadgeCounter,
					isActive: t,
					unreadCount: -1,
					showEmpty: !0
				}), r.a.createElement(p.a, {
					name: e
				}));

			function v(e) {
				const {
					className: t,
					unreadNotifications: s,
					isOpen: o,
					sendEventWithName: i
				} = e, a = Object(m.c)(Object(p.b)("mod_queue"), `${n.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), c = Object(m.b)(j("message", s.hasUnreadModmail), `${n.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: o,
					tooltipId: u.a
				}, r.a.createElement(a, {
					href: "/r/mod/about/modqueue",
					onClick: () => i("mod_queue")
				}), r.a.createElement(O, null), r.a.createElement(c, {
					href: "https://mod.reddit.com/mail/all",
					isLit: s.hasUnreadModmail,
					onClick: () => i("mod_mail")
				}), r.a.createElement(O, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				i = () => null;
			t.b = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(o.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, s) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return _
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				f = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/models/Flair/index.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				k = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				g = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = s.n(g);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const _ = (e, t = !1, s = n.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				w = Object(c.c)({
					flairData: j.d,
					subreddit: v.S,
					isMod: (e, t) => !!Object(O.l)(e, t)
				});
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					}, this.track = e => this.props.sendEvent(t => ({
						source: "post_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(C.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(k.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(k.c)(this.props.flairs) || null;
					return Object(k.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: s
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: h.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(f.a, {
						flair: t,
						flairTemplateType: h.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: E.a.buttonsRow
					}, i.a.createElement(x.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.l, {
						className: E.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const R = Object(a.b)(w, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(P);
			t.a = Object(l.a)(Object(d.c)(R))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			})), s.d(t, "g", (function() {
				return j
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "k", (function() {
				return k
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "h", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				p = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				u = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				f = s("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				x = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				h = s.n(x);
			const O = r.a.wrapped(d.a, "Icon", h.a),
				j = r.a.wrapped(l.a, "Icon", h.a),
				v = r.a.wrapped(m.a, "Icon", h.a),
				C = r.a.wrapped(p.a, "Icon", h.a),
				k = r.a.wrapped(u.a, "Icon", h.a),
				g = r.a.wrapped(b.a, "Icon", h.a),
				E = () => o.a.createElement(c.a, {
					name: "mod_mute",
					className: h.a.Icon
				}),
				_ = () => o.a.createElement(c.a, {
					name: "calendar",
					className: h.a.Icon
				}),
				w = () => o.a.createElement(f.a, {
					className: h.a.svgIcon
				}),
				P = r.a.wrapped(i.b, "CheckboxMenuItem", h.a),
				R = r.a.wrapped(a.b, "DropdownRow", h.a),
				I = r.a.div("ListContainer", h.a)
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/economics/predictions/modTools.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/featureFlags/index.ts"),
				j = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./node_modules/fbt/lib/FbtPublic.js"),
				k = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				E = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				_ = s("./src/reddit/helpers/isCrosspost.ts"),
				w = s("./src/reddit/models/Flair/index.ts"),
				P = s("./src/reddit/models/Prediction/index.ts"),
				R = s("./src/reddit/selectors/experiments/econ/index.ts"),
				I = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				y = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				N = s.n(y);
			const S = (e, t) => Object(E.b)({
					breakpointType: E.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				T = () => void 0;
			var M = ({
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: s,
					isDistinguished: n,
					isModToMemberShareEnabled: i,
					isOverlay: a,
					isPostAuthor: c,
					isProfilePage: d,
					layout: l,
					modModeEnabled: m,
					onApprovePost: p,
					onCancelPrediction: u,
					onChangePredictionOutcome: b,
					onEditPredictionEnd: f,
					onDistinguishPost: x,
					onFlairPost: h,
					onLockPost: O,
					onNsfwPost: j,
					onOcPost: v,
					onCcPost: E,
					onRemovePost: y,
					onModToMemberShareOpened: M,
					onSpamPost: L,
					onStickyPost: D,
					onSpoilerPost: F,
					post: A
				}) => {
					var B, G, U;
					const z = Object(r.e)(R.o),
						W = Object(r.e)(e => {
							var t;
							return (null === (t = A.pollData) || void 0 === t ? void 0 : t.isPrediction) && null !== A.pollData.resolvedOptionId && Object(R.l)(e)
						}),
						Q = Object(r.e)(e => {
							var t;
							return (null === (t = A.pollData) || void 0 === t ? void 0 : t.isPrediction) && Object(R.k)(e)
						}),
						H = A.flair.filter(e => e.type !== w.f.Nsfw && e.type !== w.f.Spoiler).length > 0,
						K = Object(k.b)(A),
						V = !(!A.approvedBy || !K),
						Z = a ? void 0 : l,
						J = Object(_.a)(A),
						q = m ? S : T;
					return o.a.createElement(I.h, null, s && o.a.createElement(o.a.Fragment, null, !A.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(I.f, {
						className: q(g.a.Approve, Z),
						displayText: V ? C.fbt._("reapprove", null, {
							hk: "ZucfK"
						}) : A.approvedBy ? C.fbt._("approved", null, {
							hk: "nlSCc"
						}) : C.fbt._("approve", null, {
							hk: "4GoeOE"
						}),
						onClick: p
					}, o.a.createElement(I.a, null)), o.a.createElement(I.f, {
						className: q(g.a.Remove, Z),
						displayText: A.isRemoved ? C.fbt._("removed", null, {
							hk: "cSGLt"
						}) : C.fbt._("remove", null, {
							hk: "4mKe0F"
						}),
						onClick: y
					}, o.a.createElement(I.j, null)), o.a.createElement(I.f, {
						className: q(g.a.Spam, Z),
						displayText: A.isSpam ? C.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : C.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: L
					}, o.a.createElement(I.k, null))), e && o.a.createElement(I.f, {
						className: q(g.a.Flair, Z),
						displayText: H ? C.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : C.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, o.a.createElement(I.l, null))), i && t && o.a.createElement(I.f, {
						displayText: C.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: M
					}, o.a.createElement(I.g, null)), !A.isRemoved && !d && o.a.createElement(I.d, {
						isSelected: A.isStickied,
						onClick: D,
						text: C.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), Q && o.a.createElement(I.f, {
						disabled: Boolean((null === (B = A.pollData) || void 0 === B ? void 0 : B.resolvedOptionId) || (null === (G = A.pollData) || void 0 === G ? void 0 : G.predictionStatus) === P.b.Cancelled),
						displayText: C.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: u
					}, o.a.createElement(I.j, null)), z && (null === (U = A.pollData) || void 0 === U ? void 0 : U.isPrediction) && o.a.createElement(I.f, {
						displayText: C.fbt._("Edit when prediction ends", null, {
							hk: "9U7gQ"
						}),
						onClick: f
					}, o.a.createElement(I.b, null)), W && o.a.createElement(I.f, {
						textClassName: N.a.text,
						onClick: b,
						displayText: C.fbt._("Change the outcome", null, {
							hk: "2FH6j9"
						})
					}, o.a.createElement(I.c, null)), c && o.a.createElement(I.d, {
						isSelected: n,
						onClick: x,
						text: C.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), o.a.createElement(I.d, {
						isSelected: A.isLocked,
						onClick: O,
						text: C.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !J && o.a.createElement(I.d, {
						isSelected: A.isOriginalContent,
						onClick: v,
						text: C.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), o.a.createElement(I.d, {
						isSelected: A.isNSFW,
						onClick: j,
						text: C.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), t && "subreddit" === A.belongsTo.type && o.a.createElement(I.f, {
						displayText: C.fbt._("Adjust crowd Control", null, {
							hk: "28dSIi"
						}),
						onClick: E
					}, o.a.createElement(I.e, null)), o.a.createElement(I.d, {
						isSelected: A.isSpoiler,
						onClick: F,
						text: C.fbt._("Mark as Spoiler", null, {
							hk: "1IlEnE"
						})
					}))
				},
				L = s("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				D = s.n(L);
			const F = Object(x.t)({
					isProfilePage: x.G,
					pageLayer: e => e
				}),
				A = Object(i.c)({
					layout: x.P,
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(v.b)(t)(e),
					isModToMemberShareEnabled: O.d.modToMemberShare
				}),
				B = Object(r.b)(A, (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(l.s)(t.id)),
					onCancelPrediction: () => e(Object(c.b)(t.id)),
					onChangePredictionOutcome: () => e(Object(c.c)(t.id)),
					onEditPredictionEnd: () => e(Object(c.d)(t.id)),
					onDistinguishPost: s => e(Object(l.v)(t.id, s)),
					onFlairChanged: (s, n) => e(Object(m.h)({
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					})),
					onFlairPost: t => e(Object(d.i)(t)),
					onLockPost: () => e(Object(l.E)(t.id)),
					onNsfwPost: () => e(Object(l.G)(t.id)),
					onOcPost: () => e(Object(l.J)(t.id)),
					onCcPost: () => {
						e(Object(d.i)(f.a.CROWD_CONTROL)), e(Object(l.u)(t.id))
					},
					onRemovePost: () => e(Object(l.S)(t.id, !1)),
					onModToMemberShareOpened: () => {
						e(Object(d.i)(f.a.MOD_TO_MEMBER_SHARE)), e(Object(l.F)(t.id))
					},
					onSpamPost: () => e(Object(l.S)(t.id, !0)),
					onSpoilerPost: () => e(Object(l.X)(t.id)),
					onStickyPost: () => e(Object(l.bb)(t.id))
				})),
				G = Object(p.a)(h.a);
			t.default = F(B(Object(b.c)(({
				canEditFlair: e,
				hasModFullPerms: t,
				hasModPostPerms: s,
				isDropdownOpen: n,
				isModToMemberShareEnabled: r,
				isOverlay: i,
				isPostAuthor: c,
				isProfilePage: d,
				layout: l,
				modModeEnabled: m,
				onApprovePost: p,
				onCancelPrediction: b,
				onChangePredictionOutcome: f,
				onEditPredictionEnd: x,
				onDistinguishPost: h,
				onFlairPost: O,
				onLockPost: v,
				onNsfwPost: C,
				onOcPost: k,
				onCcPost: g,
				onRemovePost: E,
				onModToMemberShareOpened: _,
				onSpamPost: w,
				onSpoilerPost: P,
				onStickyPost: R,
				post: I,
				sendEvent: y,
				tooltipId: N
			}) => {
				const S = I.distinguishType === a.E.MODERATOR,
					T = S ? a.E.NONE : a.E.MODERATOR,
					L = Object(u.b)(I.id, i);
				return o.a.createElement(G, {
					className: D.a.dropdown,
					isOpen: n,
					tooltipId: N
				}, o.a.createElement(M, {
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: s,
					isDistinguished: S,
					isModToMemberShareEnabled: r,
					isOverlay: i,
					isPostAuthor: c,
					isProfilePage: d,
					layout: l,
					modModeEnabled: m,
					onApprovePost: () => {
						p(), y(Object(j.j)("approve", I.id))
					},
					onCancelPrediction: b,
					onChangePredictionOutcome: f,
					onEditPredictionEnd: x,
					onRemovePost: () => {
						E(), y(Object(j.j)("remove", I.id))
					},
					onSpamPost: () => {
						w(), y(Object(j.j)("spam", I.id))
					},
					onDistinguishPost: () => {
						h(T), y(Object(j.j)(S ? "undistinguish" : "distinguish", I.id))
					},
					onFlairPost: () => {
						O(L), y(Object(j.j)("post_flair", I.id))
					},
					onLockPost: () => {
						v(), y(Object(j.j)(I.isLocked ? "unlock" : "lock", I.id))
					},
					onNsfwPost: () => {
						C(), y(Object(j.j)(I.isNSFW ? "unmark_nsfw" : "mark_nsfw", I.id))
					},
					onOcPost: () => {
						k(), y(Object(j.j)(I.isOriginalContent ? "unmark_original_content" : "mark_original_content", I.id))
					},
					onCcPost: () => {
						g()
					},
					onModToMemberShareOpened: () => {
						_(), y(Object(j.j)("mod_to_member_share", I.id))
					},
					onSpoilerPost: () => {
						P(), y(Object(j.j)(I.isSpoiler ? "unmark_spoiler" : "mark_spoiler", I.id))
					},
					onStickyPost: () => {
						R(), y(Object(j.j)(I.isStickied ? "unsticky" : "sticky", I.id))
					},
					post: I
				}))
			})))
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
				return D
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				j = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				C = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				k = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				E = s.n(g);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = (e, t) => `SnoozableReport--${t}--${e}`, P = Object(i.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(k.b)(w(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: w(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(x.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.ab)(t.reportedThingId, t.reason, s))
				}
			})), R = Object(p.a)(b.a);
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.Xb.None : c.Xb.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(h.l)(Object(x.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: i
					} = this.props, a = w(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: a,
						className: E.a.DropdownLabelContainer,
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: a,
						className: E.a.DropdownLabel
					}, i ? "Reporter snoozed" : `${t}: ${e}`, r ? o.a.createElement(j.a, null) : o.a.createElement(O.a, null))), o.a.createElement(R, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: E.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: E.a.SnoozeButtonContent
					}, i ? o.a.createElement(o.a.Fragment, null, o.a.createElement(C.a, null), _._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, null), _._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var y = P(Object(u.c)(I)),
				N = s("./src/reddit/components/Reports/index.m.less"),
				S = s.n(N);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = r.a.div("ReportText", S.a), L = r.a.div("ReportsTitle", S.a);

			function D(e) {
				const {
					className: t,
					modReports: s,
					userReports: n,
					reportedThingId: r
				} = e;
				return o.a.createElement("div", {
					className: t
				}, s && s.length > 0 && o.a.createElement("div", {
					className: S.a.Reports
				}, o.a.createElement(L, null, T._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => o.a.createElement(M, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), n && n.length > 0 && o.a.createElement("div", {
					className: S.a.Reports
				}, o.a.createElement(L, null, T._("User Reports", null, {
					hk: "2KeCLz"
				})), o.a.createElement("div", {
					className: S.a.UserReports
				}, n.map(([e, t, s, n]) => void 0 !== s && n ? o.a.createElement(y, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: s
				}) : o.a.createElement(M, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && o.a.createElement("span", {
					className: Object(r.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				m = i.a.wrapped(d, "RemoveButton", c.a),
				p = e => o.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => o.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(a.a, {
					className: d.a.expandRight
				}, o.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				p = ({
					className: e,
					...t
				}) => o.a.createElement(m, l({
					className: Object(r.a)(d.a.postCheckboxMenuItem, e)
				}, t));
			t.b = m
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(p),
				b = s("./src/reddit/controls/Dropdown/row.m.less"),
				f = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = o()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(a.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(a.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(h, x({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return p
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "j", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "b", (function() {
				return k
			}));
			var n = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				a = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				u = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, s) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: o.hb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				O = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t, s, i) => {
					let a = Object(c.a)(Object(m.a)(Object(l.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return i && (a = Object(d.a)(a)), Object(r.a)(e, {
						data: s,
						endpoint: a,
						method: o.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				k = (e, t, s, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: o.hb.POST,
					data: {
						id: t,
						sticky: n
					}
				})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return h
			})), s.d(t, "k", (function() {
				return O
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "e", (function() {
				return R
			})), s.d(t, "c", (function() {
				return I
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = s("./src/redditGQL/operations/CancelPrediction.json"),
				a = s("./src/redditGQL/operations/ChangePrediction.json"),
				c = s("./src/redditGQL/operations/CreatePredictionTournament.json"),
				d = s("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = s("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				m = s("./src/redditGQL/operations/GetPredictionToken.json"),
				p = s("./src/redditGQL/operations/GetTournaments.json"),
				u = s("./src/redditGQL/operations/ResolvePrediction.json"),
				b = s("./src/redditGQL/operations/SubredditTopPredictors.json"),
				f = s("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				x = s("./src/redditGQL/operations/VotePrediction.json");
			const h = async (e, {
				postId: t,
				optionId: s,
				coinPackageId: r,
				price: i
			}) => {
				var a;
				const c = await Object(n.a)(e, {
					...x,
					variables: {
						input: {
							postId: t,
							optionId: s,
							coinPackageId: r,
							price: i
						}
					}
				});
				if (!Object(o.c)(c) || c.error || !(null === (a = c.body.data.votePrediction) || void 0 === a ? void 0 : a.ok)) throw new Error("Failed to make prediction");
				return c.body.data.votePrediction.poll
			}, O = (e, {
				postId: t,
				optionId: s
			}) => Object(n.a)(e, {
				...u,
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			});
			var j;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(j || (j = {}));
			const v = (e, {
					subredditId: t,
					period: s,
					top: o,
					includeCurrentRank: r,
					tournamentId: i
				}) => Object(n.a)(e, {
					...b,
					variables: {
						subredditId: t,
						period: s,
						top: o,
						includeCurrentRank: r,
						tournamentId: i
					}
				}),
				C = (e, t) => Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(n.a)(e, {
					...p,
					variables: t
				}),
				g = (e, t) => Object(n.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(n.a)(e, {
					...f,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(n.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				w = (e, t) => Object(n.a)(e, {
					...l,
					variables: t
				}),
				P = (e, t) => Object(n.a)(e, {
					...m,
					variables: t
				}),
				R = async (e, t) => {
					const s = await Object(n.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(o.c)(s) || !s.body.data.changePrediction.ok) throw new Error("Unable to edit prediction end time")
				}, I = async (e, {
					postId: t
				}) => {
					var s, r;
					const a = await Object(n.a)(e, {
						...i,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(o.c)(a) || !(null === (s = a.body.data.cancelPrediction) || void 0 === s ? void 0 : s.ok) || !(null === (r = a.body.data.cancelPrediction) || void 0 === r ? void 0 : r.poll)) throw new Error("Unable to cancel prediction");
					return a.body.data.cancelPrediction.poll
				}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, s) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = s.n(c);
			const l = a.a.button("button", d.a),
				m = e => t => o.a.createElement("div", {
					className: t.className
				}, e);

			function p(e, t, s) {
				return b(e, t, !0, {
					...s
				})
			}

			function u(e, t, s) {
				return b(e, t, !1, {
					...s
				})
			}

			function b(e, t, s, n) {
				const a = e,
					c = "function" == typeof t ? t : m(t),
					{
						meta: l
					} = n,
					p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(a, {
						className: Object(i.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: d.a.body
					}), l && o.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return s ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.button),
					onClick: e.onClick
				}, p(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/telemetry/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(n.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				i = ({
					state: e,
					commentId: t
				}) => Object(n.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				a = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: o.user(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					actionInfo: o.actionInfo(t),
					app: o.app(t),
					referrer: o.referrer(t),
					session: o.session(t)
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: a,
					...l
				} = e;
				return o.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.cd
					}) === n.md.Enabled
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.bd
					}) === n.ld.Enabled
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = (e, {
					commentId: t,
					commentsPageKey: s
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[s] && t in e.features.comments.collapsed[s]) return !!e.features.comments.collapsed[s][t];
					const n = e.features.comments.models[t];
					return !!n && ("computedCollapsed" in n ? !!n.computedCollapsed : n.collapsedBecauseCrowdControl ? !e.modModeEnabled : n.collapsed)
				},
				o = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const s = e.features.comments.models[t];
					return !(!s || !s.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"096bfa098f49"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"3a0e9bd20bd7"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"6d3cdb387ed9"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"8ce841e41b53"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"730629e10ec6"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"ec9db4678a1a"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"36bd638634e1"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"a278e3cfb8bc"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"7d092b4281c1"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.d213abd8152ca26ec360.js.map