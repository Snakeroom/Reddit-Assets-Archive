// https://www.redditstatic.com/desktop2x/ModerationDropdowns.48d58e56b7d2cd8728b9.js
// Retrieved at 7/27/2021, 3:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return P
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
				return q
			})), s.d(t, "b", (function() {
				return J
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
				a = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/economics/helpers/async.ts"),
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
				k = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/comments.ts"),
				_ = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				C = s("./src/reddit/selectors/moderatingComments.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/actions/comment/constants.ts");
			const I = {},
				P = Object(a.a)(R.o),
				y = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(w.J)(s())) return t(Object(d.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(g.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? f.k : f.g;
					if (t(P({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await a(n(), e)).ok) {
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
					} else t(P({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, N = e => `viewing-comment-${e}`, S = n.a.telemetry.commentConsumedThreshold, T = e => async (t, s) => {
					const o = s();
					if (!Object(_.a)(o, {
							commentId: e
						}) || Math.random() > n.a.telemetry.commentSampleRate) return;
					h.c({
						state: o,
						commentId: e
					}), r.c.start(N(e));
					const a = setTimeout(() => h.a({
						state: o,
						commentId: e
					}), S);
					I[e] = a
				}, M = (e, t) => async (s, n) => {
					const o = n(),
						a = N(e);
					if (Object(_.a)(o, {
							commentId: e
						}) && r.c.has(a)) {
						const s = r.c.end(a);
						!t && s < S && (clearTimeout(I[e]), delete I[e])
					}
				}, L = Object(a.a)(R.x), D = Object(a.a)(R.w), F = Object(a.a)(R.v), A = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
						a = r.moreComments.models[t],
						d = r.platform.currentPage,
						l = d && d.routeMatch,
						p = l && l.match,
						{
							partialPostId: u
						} = p ? p.params : null;
					if (!u) return;
					const b = Object(j.s)(u);
					s(L({
						moreCommentsId: a.id
					}));
					const h = await Object(f.e)(o(), b, {
						token: a.token
					}, Object(E.a)(r));
					if (h.ok) {
						const t = h.body,
							n = Object(x.a)(t, b, r);
						s(D({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: n,
							...t
						}));
						const o = r.posts.models[b];
						let d;
						o && "subreddit" === o.belongsTo.type && t.comments && (d = o.belongsTo.id, await s(Object(i.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: d
						})));
						const l = h.body.comments,
							p = h.body.posts;
						await s(Object(m.b)(p, l, d)), await s(Object(c.b)(d, l))
					} else s(F({
						moreCommentsItem: a,
						...h.error
					}))
				}, B = Object(b.a)(x.b, k.a.upvoted), G = Object(b.a)(x.b, k.a.downvoted), U = Object(a.a)(R.j), z = Object(a.a)(R.i), W = Object(a.a)(R.e), Q = Object(a.a)(R.f), H = (Object(a.a)(R.c), Object(a.a)(R.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (n, o) => {
					const r = o(),
						a = Object(O.h)(e),
						i = Object(g.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(C.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
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
					const a = r(),
						i = Object(x.e)(t, e, s, a),
						c = Object(C.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(W({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === s && n(i, !0), Object(p.d)()
				}, Z = Object(a.a)(R.r), q = e => t => t(Z({
					draftKey: e
				})), J = Object(a.a)(R.a), X = Object(a.a)(R.E), $ = Object(a.a)(R.b), Y = Object(a.a)(R.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return k
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
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
				}, k = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(x.J)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
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
				}, g = Object(r.a)(O.F), _ = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s(),
						r = o.features.comments.models[e],
						a = o.user.account ? o.user.account.displayText : null;
					r && a && (t(Object(h.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
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
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (s(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(o(), e, t)).ok || s(Object(h.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(c.d)())
				}, C = e => async (t, s, {
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
				}, w = (e, t, s) => async (r, a, {
					gqlContext: i
				}) => {
					const c = Object(f.a)(a(), {
						commentId: e
					});
					if (!c) return;
					const l = s === o.Xb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(p.a)(i(), {
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
				}, R = (e, t, s) => async (n, r, {
					apiContext: i
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
					})), (await Object(m.b)(i(), e, u, s || null)).ok ? s && n(g({
						id: e,
						postId: l,
						commentsPageKey: Object(a.a)(l, null, {
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
				return C
			})), s.d(t, "c", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/SubredditUserAchievements.json"),
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
				k = Object(o.a)(O.g),
				g = Object(o.a)(O.e),
				_ = (e, t) => async (s, n, {
					gqlContext: o
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = await (async (e, t, s) => {
							const n = await Object(a.a)(e, {
								...i,
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
					const a = !!Object(x.b)(o, {
						subredditId: e,
						userId: r.id
					});
					!t && a || await s(_(e, [r.id]))
				}, C = (e, t) => async (s, n) => {
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
					}), await s(_(e, Array.from(r)))
				}, w = (e, t) => async (s, o, {
					gqlContext: i
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
							const n = await Object(a.a)(e, {
								...c,
								variables: {
									subredditId: t,
									achievementType: s
								}
							});
							if (!n.ok || !n.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(i(), m.subredditId, m.achievementType), s(k(m))
					} catch (p) {
						s(g(m)), r.c.captureException(p), s(Object(u.f)({
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
			})), s.d(t, "b", (function() {
				return x
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/predictions/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/endpoints/economics/predictions.ts"),
				i = s("./src/reddit/actions/modal.ts"),
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
			const u = Object(r.a)(m.b),
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
						await Object(a.d)(o(), {
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
				}, x = e => Object(i.h)(d.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
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
				a = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
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
					const f = await (async (e, t, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
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
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/components/BadgeCounter/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: s,
				unreadCount: n
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: s || n < 1
				})
			}, s || n < 1 ? "" : Object(a.b)(n)) : null
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
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
			const O = i.a.span("IgnoreIconContainer", h.a),
				j = i.a.span("ActiveIconContainer", h.a),
				v = i.a.wrapped(f.a, "ChevronDown", h.a),
				k = i.a.wrapped(b.a, "ActiveReportIcon", h.a),
				g = i.a.wrapped(u.a, "IgnoreReport", h.a),
				_ = i.a.wrapped(b.a, "ReportIcon", h.a),
				E = i.a.div("ReportsContainer", h.a),
				C = i.a.wrapped(d.c, "Button", h.a),
				w = i.a.wrapped(c.a, "Reports", h.a),
				R = i.a.div("NumReports", h.a),
				I = ({
					className: e,
					handleToggleExpando: t,
					isHistoricalReports: s,
					numReports: o,
					modReports: i,
					userReports: c,
					collapseReports: d,
					reportedThingId: l
				}) => r.a.createElement(E, {
					className: Object(a.a)(e, {
						[h.a.collapseReports]: d
					})
				}, d ? r.a.createElement(O, null, r.a.createElement(g, null)) : r.a.createElement(j, null, r.a.createElement(k, null)), d ? r.a.createElement(R, null, o) : r.a.createElement(w, {
					modReports: i,
					userReports: c,
					reportedThingId: l
				}), s ? r.a.createElement(C, {
					onClick: t,
					text: n.fbt._("old reports", null, {
						hk: "2IdZOv"
					})
				}, r.a.createElement(v, null)) : r.a.createElement(C, {
					onClick: t,
					text: d ? n.fbt._("Restore Reports", null, {
						hk: "2O219R"
					}) : n.fbt._("ignore reports", null, {
						hk: "48jlNW"
					})
				}, d ? r.a.createElement(_, null) : r.a.createElement(g, null)));
			class P extends r.a.Component {
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
					return r.a.createElement("div", null, s ? r.a.createElement(I, {
						className: e,
						collapseReports: this.state.historicalReportsCollapsed,
						handleToggleExpando: this.handleToggleHistoricalReports,
						isHistoricalReports: !0,
						numReports: s,
						modReports: t.modReportsDismissed,
						userReports: t.userReportsDismissed,
						reportedThingId: t.id
					}) : r.a.createElement(I, {
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
			t.default = Object(l.c)(P)
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
			var n, o, r, a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
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
					[i.a.Approve]: o.Approve,
					[i.a.Remove]: o.Remove,
					[i.a.Spam]: o.Spam,
					[i.a.Flair]: o.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default
				},
				f = e => {
					const t = u[e.flatlistItem],
						s = e.postLayout && b[e.postLayout],
						n = l.a[e.breakpointType],
						o = l.a[t],
						i = s ? l.a[s] : l.a[r.Default];
					return Object(a.a)(n, o, i)
				},
				x = e => {
					const t = e && b[e],
						s = t ? l.a[t] : l.a[r.Default];
					return Object(a.a)(s, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
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
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/BadgeCounter/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = s("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = s.n(b);
			const x = c.a.wrapped(l.a, "StyledDropdown", f.a),
				h = Object(a.a)(x),
				O = c.a.div("Separator", f.a),
				j = (e, t) => s => r.a.createElement("span", {
					className: Object(i.a)(f.a.IconWrapper, s.className)
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
					sendEventWithName: a
				} = e, i = Object(m.c)(Object(p.b)("mod_queue"), `${n.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), c = Object(m.b)(j("message", s.hasUnreadModmail), `${n.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: o,
					tooltipId: u.a
				}, r.a.createElement(i, {
					href: "/r/mod/about/modqueue",
					onClick: () => a("mod_queue")
				}), r.a.createElement(O, null), r.a.createElement(c, {
					href: "https://mod.reddit.com/mail/all",
					isLit: s.hasUnreadModmail,
					onClick: () => a("mod_mail")
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
				a = () => null;
			t.b = Object(n.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
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
				return C
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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
				k = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				_ = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = s.n(_);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const C = (e, t = !1, s = n.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				w = Object(c.c)({
					flairData: j.d,
					subreddit: v.S,
					isMod: (e, t) => !!Object(O.l)(e, t)
				});
			class R extends a.a.Component {
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
						subreddit: Object(k.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(g.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(g.c)(this.props.flairs) || null;
					return Object(g.b)(e, t, s)
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
					} = e, i = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(u.a, {
						className: s
					}, a.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: h.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(f.a, {
						flair: t,
						flairTemplateType: h.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: E.a.buttonsRow
					}, a.a.createElement(x.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(x.l, {
						className: E.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(i.b)(w, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(R);
			t.a = Object(l.a)(Object(d.c)(I))
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
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "g", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				i = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				p = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				u = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				f = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = s.n(f);
			const h = r.a.wrapped(d.a, "Icon", x.a),
				O = r.a.wrapped(l.a, "Icon", x.a),
				j = r.a.wrapped(m.a, "Icon", x.a),
				v = r.a.wrapped(p.a, "Icon", x.a),
				k = r.a.wrapped(u.a, "Icon", x.a),
				g = r.a.wrapped(b.a, "Icon", x.a),
				_ = () => o.a.createElement(c.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				E = () => o.a.createElement(c.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				C = r.a.wrapped(a.b, "CheckboxMenuItem", x.a),
				w = r.a.wrapped(i.b, "DropdownRow", x.a),
				R = r.a.div("ListContainer", x.a)
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
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
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
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				_ = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				E = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				C = s("./src/reddit/helpers/isCrosspost.ts"),
				w = s("./src/reddit/models/Flair/index.ts"),
				R = s("./src/reddit/selectors/experiments/econ/index.ts"),
				I = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx");
			const P = (e, t) => Object(E.b)({
					breakpointType: E.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				y = () => void 0;
			var N = e => {
					var t;
					const {
						canEditFlair: s,
						hasModFullPerms: n,
						hasModPostPerms: a,
						isDistinguished: i,
						isModToMemberShareEnabled: c,
						isOverlay: d,
						isPostAuthor: l,
						isProfilePage: m,
						layout: p,
						modModeEnabled: u,
						onApprovePost: b,
						onEditPredictionEnd: f,
						onDistinguishPost: x,
						onFlairPost: h,
						onLockPost: O,
						onNsfwPost: j,
						onOcPost: v,
						onCcPost: E,
						onRemovePost: N,
						onModToMemberShareOpened: S,
						onSpamPost: T,
						onStickyPost: M,
						onSpoilerPost: L,
						post: D
					} = e, F = Object(r.e)(R.m), A = D.flair.filter(e => e.type !== w.f.Nsfw && e.type !== w.f.Spoiler).length > 0, B = Object(g.b)(D), G = !(!D.approvedBy || !B), U = d ? void 0 : p, z = Object(C.a)(e.post), W = u ? P : y;
					return o.a.createElement(I.g, null, a && o.a.createElement(o.a.Fragment, null, !D.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(I.e, {
						className: W(_.a.Approve, U),
						displayText: G ? k.fbt._("reapprove", null, {
							hk: "ZucfK"
						}) : D.approvedBy ? k.fbt._("approved", null, {
							hk: "nlSCc"
						}) : k.fbt._("approve", null, {
							hk: "4GoeOE"
						}),
						onClick: b
					}, o.a.createElement(I.a, null)), o.a.createElement(I.e, {
						className: W(_.a.Remove, U),
						displayText: D.isRemoved ? k.fbt._("removed", null, {
							hk: "cSGLt"
						}) : k.fbt._("remove", null, {
							hk: "4mKe0F"
						}),
						onClick: N
					}, o.a.createElement(I.i, null)), o.a.createElement(I.e, {
						className: W(_.a.Spam, U),
						displayText: D.isSpam ? k.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : k.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: T
					}, o.a.createElement(I.j, null))), s && o.a.createElement(I.e, {
						className: W(_.a.Flair, U),
						displayText: A ? k.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : k.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, o.a.createElement(I.k, null))), c && n && o.a.createElement(I.e, {
						displayText: k.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: S
					}, o.a.createElement(I.f, null)), !D.isRemoved && !m && o.a.createElement(I.c, {
						isSelected: D.isStickied,
						onClick: M,
						text: k.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), F && (null === (t = D.pollData) || void 0 === t ? void 0 : t.isPrediction) && o.a.createElement(I.e, {
						displayText: k.fbt._("Edit when prediction ends", null, {
							hk: "9U7gQ"
						}),
						onClick: f
					}, o.a.createElement(I.b, null)), l && o.a.createElement(I.c, {
						isSelected: i,
						onClick: x,
						text: k.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), o.a.createElement(I.c, {
						isSelected: D.isLocked,
						onClick: O,
						text: k.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !z && o.a.createElement(I.c, {
						isSelected: D.isOriginalContent,
						onClick: v,
						text: k.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), o.a.createElement(I.c, {
						isSelected: D.isNSFW,
						onClick: j,
						text: k.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), n && "subreddit" === D.belongsTo.type && o.a.createElement(I.e, {
						displayText: k.fbt._("Adjust crowd Control", null, {
							hk: "28dSIi"
						}),
						onClick: E
					}, o.a.createElement(I.d, null)), o.a.createElement(I.c, {
						isSelected: D.isSpoiler,
						onClick: L,
						text: k.fbt._("Mark as Spoiler", null, {
							hk: "1IlEnE"
						})
					}))
				},
				S = s("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				T = s.n(S);
			const M = Object(x.t)({
					isProfilePage: x.G,
					pageLayer: e => e
				}),
				L = Object(a.c)({
					layout: x.P,
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(v.b)(t)(e),
					isModToMemberShareEnabled: O.d.modToMemberShare
				}),
				D = Object(r.b)(L, (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(l.q)(t.id)),
					onEditPredictionEnd: () => e(Object(c.b)(t.id)),
					onDistinguishPost: s => e(Object(l.t)(t.id, s)),
					onFlairChanged: (s, n) => e(Object(m.h)({
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					})),
					onFlairPost: t => e(Object(d.i)(t)),
					onLockPost: () => e(Object(l.C)(t.id)),
					onNsfwPost: () => e(Object(l.E)(t.id)),
					onOcPost: () => e(Object(l.H)(t.id)),
					onCcPost: () => {
						e(Object(d.i)(f.a.CROWD_CONTROL)), e(Object(l.s)(t.id))
					},
					onRemovePost: () => e(Object(l.Q)(t.id, !1)),
					onModToMemberShareOpened: () => {
						e(Object(d.i)(f.a.MOD_TO_MEMBER_SHARE)), e(Object(l.D)(t.id))
					},
					onSpamPost: () => e(Object(l.Q)(t.id, !0)),
					onSpoilerPost: () => e(Object(l.V)(t.id)),
					onStickyPost: () => e(Object(l.Z)(t.id))
				})),
				F = Object(p.a)(h.a),
				A = M(D(Object(b.c)(e => {
					const {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: n,
						isDropdownOpen: r,
						isModToMemberShareEnabled: a,
						isOverlay: c,
						isPostAuthor: d,
						isProfilePage: l,
						layout: m,
						modModeEnabled: p,
						onApprovePost: b,
						onEditPredictionEnd: f,
						onDistinguishPost: x,
						onFlairPost: h,
						onLockPost: O,
						onNsfwPost: v,
						onOcPost: k,
						onCcPost: g,
						onRemovePost: _,
						onModToMemberShareOpened: E,
						onSpamPost: C,
						onSpoilerPost: w,
						onStickyPost: R,
						post: I,
						sendEvent: P,
						tooltipId: y
					} = e, S = I.distinguishType === i.E.MODERATOR, M = S ? i.E.NONE : i.E.MODERATOR, L = Object(u.b)(I.id, c);
					return o.a.createElement(F, {
						className: T.a.dropdown,
						isOpen: r,
						tooltipId: y
					}, o.a.createElement(N, {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: n,
						isDistinguished: S,
						isModToMemberShareEnabled: a,
						isOverlay: c,
						isPostAuthor: d,
						isProfilePage: l,
						layout: m,
						modModeEnabled: p,
						onApprovePost: () => {
							b(), P(Object(j.j)("approve", I.id))
						},
						onEditPredictionEnd: f,
						onRemovePost: () => {
							_(), P(Object(j.j)("remove", I.id))
						},
						onSpamPost: () => {
							C(), P(Object(j.j)("spam", I.id))
						},
						onDistinguishPost: () => {
							x(M), P(Object(j.j)(S ? "undistinguish" : "distinguish", I.id))
						},
						onFlairPost: () => {
							h(L), P(Object(j.j)("post_flair", I.id))
						},
						onLockPost: () => {
							O(), P(Object(j.j)(I.isLocked ? "unlock" : "lock", I.id))
						},
						onNsfwPost: () => {
							v(), P(Object(j.j)(I.isNSFW ? "unmark_nsfw" : "mark_nsfw", I.id))
						},
						onOcPost: () => {
							k(), P(Object(j.j)(I.isOriginalContent ? "unmark_original_content" : "mark_original_content", I.id))
						},
						onCcPost: () => {
							g()
						},
						onModToMemberShareOpened: () => {
							E(), P(Object(j.j)("mod_to_member_share", I.id))
						},
						onSpoilerPost: () => {
							w(), P(Object(j.j)(I.isSpoiler ? "unmark_spoiler" : "mark_spoiler", I.id))
						},
						onStickyPost: () => {
							R(), P(Object(j.j)(I.isStickied ? "unsticky" : "sticky", I.id))
						},
						post: I
					}))
				})));
			t.default = A
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
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				k = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				E = s.n(_);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), w = (e, t) => `SnoozableReport--${t}--${e}`, R = Object(a.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(g.b)(w(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: w(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(x.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.Y)(t.reportedThingId, t.reason, s))
				}
			})), I = Object(p.a)(b.a);
			class P extends o.a.Component {
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
						isSnoozed: a
					} = this.props, i = w(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: i,
						className: E.a.DropdownLabelContainer,
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: i,
						className: E.a.DropdownLabel
					}, a ? "Reporter snoozed" : `${t}: ${e}`, r ? o.a.createElement(j.a, null) : o.a.createElement(O.a, null))), o.a.createElement(I, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: E.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: E.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(k.a, null), C._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, null), C._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var y = R(Object(u.c)(P)),
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
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(i);
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
				l = a.a.wrapped(d, "ApproveButton", c.a),
				m = a.a.wrapped(d, "RemoveButton", c.a),
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
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
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
				}, o.a.createElement(i.a, {
					className: d.a.expandRight
				}, o.a.createElement(a.a, {
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
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
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
			class h extends a.a.Component {
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
					}, s = Object(i.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: s
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(i.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(h, x({
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
				a = s.n(r);
			t.a = n.a.wrapped(o.a, "unstyledInternalLink", a.a)
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
				return k
			})), s.d(t, "b", (function() {
				return g
			}));
			var n = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				u = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: o.hb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				O = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				k = (e, t, s, a) => {
					let i = Object(c.a)(Object(m.a)(Object(l.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return a && (i = Object(d.a)(i)), Object(r.a)(e, {
						data: s,
						endpoint: i,
						method: o.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, s, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
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
			s.d(t, "l", (function() {
				return x
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "d", (function() {
				return R
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/redditGQL/operations/AddPredictionDrafts.json"),
				a = s("./src/redditGQL/operations/ChangePrediction.json"),
				i = s("./src/redditGQL/operations/CreatePredictionTournament.json"),
				c = s("./src/redditGQL/operations/EndPredictionTournament.json"),
				d = s("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				l = s("./src/redditGQL/operations/GetPredictionToken.json"),
				m = s("./src/redditGQL/operations/GetTournaments.json"),
				p = s("./src/redditGQL/operations/ResolvePrediction.json"),
				u = s("./src/redditGQL/operations/SubredditTopPredictors.json"),
				b = s("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				f = s("./src/redditGQL/operations/VotePrediction.json");
			const x = (e, {
					postId: t,
					optionId: s,
					coinPackageId: o,
					price: r
				}) => Object(n.a)(e, {
					...f,
					variables: {
						input: {
							postId: t,
							optionId: s,
							coinPackageId: o,
							price: r
						}
					}
				}),
				h = (e, {
					postId: t,
					optionId: s
				}) => Object(n.a)(e, {
					...p,
					variables: {
						input: {
							postId: t,
							optionId: s
						}
					}
				});
			var O;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const j = (e, {
					subredditId: t,
					period: s,
					top: o,
					includeCurrentRank: r,
					tournamentId: a
				}) => Object(n.a)(e, {
					...u,
					variables: {
						subredditId: t,
						period: s,
						top: o,
						includeCurrentRank: r,
						tournamentId: a
					}
				}),
				v = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(n.a)(e, {
					...m,
					variables: t
				}),
				g = (e, t) => Object(n.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(n.a)(e, {
					...b,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				C = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}),
				w = (e, t) => Object(n.a)(e, {
					...l,
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = s.n(c);
			const l = i.a.button("button", d.a),
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
				const i = e,
					c = "function" == typeof t ? t : m(t),
					{
						meta: l
					} = n,
					p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: d.a.body
					}), l && o.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return s ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.button),
					onClick: e.onClick
				}, p(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
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
				a = ({
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
				i = e => t => ({
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
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
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
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(a.a, null, e.desc))
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
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
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
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
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
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(i);

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
					gutter: i,
					...l
				} = e;
				return o.a.createElement("div", d({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, l), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: i
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
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Vc
					}) === n.fd.Enabled
				},
				a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Uc
					}) === n.ed.Enabled
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
			e.exports = JSON.parse('{"id":"95def9de4479"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"b72b0ddc1705"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"15b533bd4655"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"fdd7787470d6"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"fea406026aef"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
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
			e.exports = JSON.parse('{"id":"84bec4363663"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.48d58e56b7d2cd8728b9.js.map