// https://www.redditstatic.com/desktop2x/ModerationDropdowns.3445dfdc2bc5e5593596.js
// Retrieved at 8/3/2021, 2:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/uuid/v1.js"),
				o = n("./node_modules/uuid/v4.js"),
				r = o;
			r.v1 = s, r.v4 = o, e.exports = r
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var s, o, r = n("./node_modules/uuid/lib/rng-browser.js"),
				i = n("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				d = 0;
			e.exports = function(e, t, n) {
				var c = t && n || 0,
					l = t || [],
					p = (e = e || {}).node || s,
					u = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == p || null == u) {
					var m = r();
					null == p && (p = s = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == u && (u = o = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : d + 1,
					x = b - a + (f - d) / 1e4;
				if (x < 0 && void 0 === e.clockseq && (u = u + 1 & 16383), (x < 0 || b > a) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = b, d = f, o = u;
				var h = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				l[c++] = h >>> 24 & 255, l[c++] = h >>> 16 & 255, l[c++] = h >>> 8 & 255, l[c++] = 255 & h;
				var j = b / 4294967296 * 1e4 & 268435455;
				l[c++] = j >>> 8 & 255, l[c++] = 255 & j, l[c++] = j >>> 24 & 15 | 16, l[c++] = j >>> 16 & 255, l[c++] = u >>> 8 | 128, l[c++] = 255 & u;
				for (var O = 0; O < 6; ++O) l[c + O] = p[O];
				return t || i(l)
			}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return P
			})), n.d(t, "m", (function() {
				return R
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "j", (function() {
				return G
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "o", (function() {
				return K
			})), n.d(t, "p", (function() {
				return H
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "a", (function() {
				return Z
			})), n.d(t, "b", (function() {
				return J
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "c", (function() {
				return $
			})), n.d(t, "k", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/helpers/async.ts"),
				d = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/presence.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				f = n("./src/reddit/endpoints/comment/index.tsx"),
				x = n("./src/reddit/helpers/commentList/index.ts"),
				h = n("./src/reddit/helpers/trackers/comment.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/comments.ts"),
				w = n("./src/reddit/selectors/commentSelector.ts"),
				E = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				C = n("./src/reddit/selectors/moderatingComments.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/actions/comment/constants.ts");
			const y = {},
				P = Object(i.a)(I.o),
				R = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(_.J)(n())) return t(Object(c.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(g.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const i = r.isSaved ? f.k : f.g;
					if (t(P({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await i(s(), e)).ok) {
						const n = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(m.f)({
							text: n,
							kind: v.b.Undo,
							buttonText: s,
							buttonAction: R(e)
						}))
					} else t(P({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, N = e => `viewing-comment-${e}`, S = s.a.telemetry.commentConsumedThreshold, T = e => async (t, n) => {
					const o = n();
					if (!Object(w.a)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					h.c({
						state: o,
						commentId: e
					}), r.c.start(N(e));
					const i = setTimeout(() => h.a({
						state: o,
						commentId: e
					}), S);
					y[e] = i
				}, M = (e, t) => async (n, s) => {
					const o = s(),
						i = N(e);
					if (Object(w.a)(o, {
							commentId: e
						}) && r.c.has(i)) {
						const n = r.c.end(i);
						!t && n < S && (clearTimeout(y[e]), delete y[e])
					}
				}, F = Object(i.a)(I.x), D = Object(i.a)(I.w), L = Object(i.a)(I.v), A = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						i = r.moreComments.models[t],
						c = r.platform.currentPage,
						l = c && c.routeMatch,
						u = l && l.match,
						{
							partialPostId: m
						} = u ? u.params : null;
					if (!m) return;
					const b = Object(O.s)(m);
					n(F({
						moreCommentsId: i.id
					}));
					const h = await Object(f.e)(o(), b, {
						token: i.token
					}, Object(E.a)(r));
					if (h.ok) {
						const t = h.body,
							s = Object(x.a)(t, b, r);
						n(D({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[b];
						let c;
						o && "subreddit" === o.belongsTo.type && t.comments && (c = o.belongsTo.id, await n(Object(a.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: c
						})));
						const l = h.body.comments,
							u = h.body.posts;
						await n(Object(p.b)(u, l, c)), await n(Object(d.b)(c, l))
					} else n(L({
						moreCommentsItem: i,
						...h.error
					}))
				}, B = Object(b.a)(x.b, k.a.upvoted), G = Object(b.a)(x.b, k.a.downvoted), U = Object(i.a)(I.j), z = Object(i.a)(I.i), W = Object(i.a)(I.e), Q = Object(i.a)(I.f), K = (Object(i.a)(I.c), Object(i.a)(I.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						i = Object(j.i)(e),
						a = Object(g.n)(r, {
							commentLink: i,
							commentsPageKey: t
						}),
						d = Object(C.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						c = a.depth;
					s(W({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: d
					})), d || 0 !== c || n(e, !0), Object(u.d)()
				}), H = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(Q({
						commentId: e,
						commentsPageKey: t
					}))
				}, V = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const i = r(),
						a = Object(x.e)(t, e, n, i),
						d = Object(C.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(W({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: d
					})), 0 === n && s(a, !0), Object(u.d)()
				}, q = Object(i.a)(I.r), Z = e => t => t(q({
					draftKey: e
				})), J = Object(i.a)(I.a), X = Object(i.a)(I.E), $ = Object(i.a)(I.b), Y = Object(i.a)(I.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				m = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/actions/comment/index.ts"),
				j = n("./src/reddit/actions/comment/constants.ts");
			const O = Object(r.a)(j.n),
				v = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(p.h)(s(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, k = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(x.J)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.isLocked ? p.j : p.d;
					t(Object(h.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await r(s(), e)).ok || t(Object(h.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, g = Object(r.a)(j.F), w = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
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
					})), (await Object(p.a)(s(), e)).ok || t(Object(h.i)({
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
					})), Object(d.d)())
				}, E = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						i = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					i && a && (n(Object(h.i)({
						[e]: {
							approvedBy: null,
							bannedBy: a,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(p.f)(o(), e, t)).ok || n(Object(h.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(d.d)())
				}, C = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().features.comments.models[e];
					if (!o) return;
					const r = o.ignoreReports ? p.i : p.c;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await r(s(), e)).ok || t(Object(h.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, _ = (e, t, n) => async (r, i, {
					gqlContext: a
				}) => {
					const d = Object(f.a)(i(), {
						commentId: e
					});
					if (!d) return;
					const l = n === o.Xb.Snoozed,
						p = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(a(), {
							input: p
						})).ok) r(Object(h.i)({
						[e]: {
							userReports: Object(m.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, I = (e, t, n) => async (s, r, {
					apiContext: a
				}) => {
					const d = r(),
						c = d.features.comments.models[e];
					if (!c) return;
					const l = c.postId,
						u = d.postStickiedComments.data[l],
						m = o.g[t];
					s(Object(h.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.E.ADMIN,
							isMod: t === o.E.MODERATOR,
							isStickied: !!n
						}
					})), n && u && u !== e && s(Object(h.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(p.b)(a(), e, m, n || null)).ok ? n && s(g({
						id: e,
						postId: l,
						commentsPageKey: Object(i.a)(l, null, {
							sort: o.s.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (s(Object(h.i)({
						[e]: {
							distinguishType: c.distinguishType,
							isAdmin: c.isAdmin,
							isMod: c.isMod,
							isStickied: c.isStickied
						}
					})), s(Object(h.i)({
						[u]: {
							isStickied: d.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var c = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/lib/initializeClient/installReducer.ts"),
				p = n("./src/reddit/reducers/features/powerups/index.ts"),
				u = n("./src/reddit/actions/gold/powerups.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				x = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: p.a
				}
			});
			const O = Object(o.a)(j.d),
				v = Object(o.a)(j.f),
				k = Object(o.a)(j.g),
				g = Object(o.a)(j.e),
				w = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, n) => {
							const s = await Object(i.a)(e, {
								...a,
								variables: {
									subredditId: t,
									redditorIds: n
								}
							});
							if (!s.ok) throw new Error("Unable to fetch user achievements");
							return s.body.data.subredditInfoById
						})(o(), e, d);
						await n(O(t))
					} catch (c) {
						r.c.captureException(c)
					}
				}, E = (e, t) => async (n, s) => {
					if (!e) return;
					const o = s(),
						r = Object(h.j)(o);
					if (!r || !Object(f.f)(o, {
							subredditId: e
						}) || !Object(c.g)(o)) return;
					const i = !!Object(x.b)(o, {
						subredditId: e,
						userId: r.id
					});
					!t && i || await n(w(e, [r.id]))
				}, C = (e, t) => async (n, s) => {
					if (!e) return;
					await n(Object(u.k)(e, {
						fullData: !0
					}));
					const o = s();
					if (!Object(f.f)(o, {
							subredditId: e
						}) || !t || !Object(c.g)(o)) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await n(w(e, Array.from(r)))
				}, _ = (e, t) => async (n, o, {
					gqlContext: a
				}) => {
					const c = o(),
						l = Object(h.j)(c);
					if (!l) return;
					const p = {
						subredditId: e,
						userId: l.id,
						achievementType: t
					};
					n(v(p));
					try {
						await (async (e, t, n) => {
							const s = await Object(i.a)(e, {
								...d,
								variables: {
									subredditId: t,
									achievementType: n
								}
							});
							if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(a(), p.subredditId, p.achievementType), n(k(p))
					} catch (u) {
						n(g(p)), r.c.captureException(u), n(Object(m.f)({
							duration: m.a,
							kind: b.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return y
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "n", (function() {
				return D
			})), n.d(t, "o", (function() {
				return L
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "p", (function() {
				return U
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "l", (function() {
				return K
			})), n.d(t, "m", (function() {
				return H
			})), n.d(t, "c", (function() {
				return V
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/uuid/index.js"),
				r = n.n(o),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				p = n("./src/lib/makeRequest/index.ts"),
				u = n("./src/reddit/endpoints/economics/predictions.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/constants/modals.ts"),
				x = n("./src/reddit/models/Prediction/index.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				k = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				g = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const w = Object(l.a)(g.f),
				E = Object(l.a)(g.j),
				C = Object(l.a)(g.m),
				_ = Object(l.a)(g.i),
				I = Object(l.a)(g.b),
				y = (e, t, n, s) => async (o, r, {
					gqlContext: i
				}) => {
					const a = Object(O.J)(r()),
						d = await Object(u.i)(i(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: a,
							tournamentId: s
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: c
					} = d.body.data;
					if (!c || !c.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = c, p = {
						subredditId: e,
						...l
					};
					return o(w(p)), p
				}, P = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: s
				}) => async (o, r, {
					gqlContext: i
				}) => {
					const a = await Object(u.m)(i(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: s
					});
					return o(E({
						pollId: n,
						prediction: a,
						price: s
					})), a
				}, R = ({
					optionId: e,
					postId: t
				}) => async (n, s, {
					gqlContext: o
				}) => {
					const r = await Object(u.k)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: i
						} = r.body.data;
					if (!(null == i ? void 0 : i.poll)) throw new Error("Failed to resolve prediction");
					return n(_({
						pollId: t,
						prediction: i.poll
					})), i.poll
				}, N = Object(l.a)(g.d), S = Object(l.a)(g.e), T = Object(l.a)(g.h), M = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						r = Object(j.D)(o, e),
						i = Object(k.j)(o, {
							subredditId: r
						}),
						a = Object(h.k)(o);
					if (i) return Object(k.f)(o, {
						subredditId: r
					});
					t(N({
						subredditId: r
					}));
					const d = await Object(u.j)(s(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0,
						isIncludingCancelledPredictions: a
					});
					if (!Object(p.c)(d) || d.error) throw new Error("Failed to fetch tournaments");
					const {
						predictionTournaments: c
					} = d.body.data.subredditInfoByName;
					if (!c) return [];
					const l = c.map(e => {
							var t, n;
							const s = null !== (n = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(m.e)(e),
									n = t.pollData;
								return {
									...t,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...e,
								predictionPosts: s
							}
						}),
						b = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(S({
						subredditId: r,
						tournaments: l
					})), t(T({
						posts: b,
						meta: o.meta
					})), l
				}, F = Object(l.a)(g.a), D = Object(l.a)(g.k), L = Object(l.a)(g.l), A = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						r = Object(v.b)(o),
						i = Object(h.a)(o);
					if (!r) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(u.d)(s(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: r,
							currency: i ? x.a.Coins : x.a.Tokens
						}),
						{
							createPredictionTournament: d
						} = a.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: c
					} = d;
					return t(S({
						subredditId: e,
						tournaments: [c]
					})), c
				}, B = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					var i;
					const a = Object(v.b)(s());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const d = await Object(u.b)(o(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${r.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: c
						} = d.body.data;
					if (null === (i = c.errors) || void 0 === i ? void 0 : i.length) throw new Error(c.errors[0].message);
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to create prediction");
					return c.tournament
				}, G = Object(l.a)(g.n), U = (e, t, n) => async (t, s, {
					gqlContext: o
				}) => {
					const r = await Object(u.l)(o(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(G(i.tournament)), i.tournament
				}, z = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = await Object(u.f)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: r
						} = o.body.data;
					if (!r.tournament) throw new Error("Failed to update prediction name");
					return t(G(r.tournament)), r.tournament
				}, W = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = await Object(u.g)(s(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: r
					} = o.body.data;
					if (!r.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return r.predictionChipPackages
				}, Q = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = await Object(u.h)(s(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: r
					} = o.body.data;
					if (!r.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return r.predictionTokens
				}, K = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: s,
					tournamentId: o,
					tournamentPostId: r
				}) => async i => {
					const a = await i(P({
						coinPackageId: e,
						optionId: t,
						postId: s,
						price: n
					}));
					return i(C({
						predictionId: s,
						selectedOptionId: t,
						tournamentId: o,
						tournamentPostId: r
					})), a
				}, H = e => Object(b.h)(f.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}), V = e => async (t, n, {
					gqlContext: o
				}) => {
					try {
						const n = await Object(u.c)(o(), {
							postId: e
						});
						t(I({
							postId: e,
							prediction: n
						}));
						const r = Object(d.e)(s.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), c.b.SuccessMod);
						t(Object(d.f)(r))
					} catch {
						const e = Object(d.e)(s.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), c.b.Error);
						t(Object(d.f)(e))
					}
				}
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/predictions/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/endpoints/economics/predictions.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/actions/economics/predictions/constants.ts");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(s.a)({
				features: {
					predictions: o.a
				}
			});
			const m = Object(r.a)(p.c),
				b = e => e(Object(d.f)({
					duration: d.a,
					kind: l.b.Error,
					text: u._("Error: Failed to change prediction end time, please try again later", null, {
						hk: "1Crf4a"
					})
				})),
				f = ({
					postId: e,
					closedAt: t
				}) => async (n, s, {
					gqlContext: o
				}) => {
					if (e && t && !isNaN(t.getTime())) try {
						await Object(i.e)(o(), {
							postId: e,
							closedAt: t
						}), n(m({
							endsAt: t.getTime(),
							pollId: e
						})), n(Object(d.f)({
							duration: d.a,
							kind: l.b.SuccessCommunity,
							text: u._("Changed when prediction ends", null, {
								hk: "42CDEn"
							})
						}))
					} catch {
						b(n)
					} else b(n)
				}, x = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				})
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
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var c = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				p = Object(s.a)(l),
				u = (e, t, n) => async (s, l, {
					apiContext: u
				}) => {
					const m = l();
					if (!Object(c.a)(m)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const f = await (async (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
						endpoint: Object(d.a)(`${e.apiUrl}/api/presence`),
						method: o.hb.POST,
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
							o = {};
						return t.forEach(e => {
							o[e] = s.has(e)
						}), {
							presentUsers: o
						}
					}))(u(), Array.from(b), n);
					s(p(f))
				}
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/BadgeCounter/index.m.less"),
				d = n.n(a);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: s
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, d.a.badgeCounter, {
					[d.a.mEmpty]: n || s < 1
				})
			}, n || s < 1 ? "" : Object(i.b)(s)) : null
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModModeReports/_ModModeReports.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Reports/index.tsx"),
				c = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/helpers/isPost.ts"),
				u = n("./src/reddit/helpers/trackers/modTools.ts"),
				m = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				b = n("./src/reddit/icons/fonts/Report/index.tsx"),
				f = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = n("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				h = n.n(x);
			const j = a.a.span("IgnoreIconContainer", h.a),
				O = a.a.span("ActiveIconContainer", h.a),
				v = a.a.wrapped(f.a, "ChevronDown", h.a),
				k = a.a.wrapped(b.a, "ActiveReportIcon", h.a),
				g = a.a.wrapped(m.a, "IgnoreReport", h.a),
				w = a.a.wrapped(b.a, "ReportIcon", h.a),
				E = a.a.div("ReportsContainer", h.a),
				C = a.a.wrapped(c.c, "Button", h.a),
				_ = a.a.wrapped(d.a, "Reports", h.a),
				I = a.a.div("NumReports", h.a),
				y = ({
					className: e,
					handleToggleExpando: t,
					isHistoricalReports: n,
					numReports: o,
					modReports: a,
					userReports: d,
					collapseReports: c,
					reportedThingId: l
				}) => r.a.createElement(E, {
					className: Object(i.a)(e, {
						[h.a.collapseReports]: c
					})
				}, c ? r.a.createElement(j, null, r.a.createElement(g, null)) : r.a.createElement(O, null, r.a.createElement(k, null)), c ? r.a.createElement(I, null, o) : r.a.createElement(_, {
					modReports: a,
					userReports: d,
					reportedThingId: l
				}), n ? r.a.createElement(C, {
					onClick: t,
					text: s.fbt._("old reports", null, {
						hk: "2IdZOv"
					})
				}, r.a.createElement(v, null)) : r.a.createElement(C, {
					onClick: t,
					text: c ? s.fbt._("Restore Reports", null, {
						hk: "2O219R"
					}) : s.fbt._("ignore reports", null, {
						hk: "48jlNW"
					})
				}, c ? r.a.createElement(w, null) : r.a.createElement(g, null)));
			class P extends r.a.Component {
				constructor(e) {
					super(e), this.handleIgnoreReports = () => {
						let e;
						this.props.onIgnoreReports();
						const t = this.props.reportable.ignoreReports ? "restore_reports" : "ignore_reports";
						e = Object(p.a)(this.props.reportable.id) ? Object(u.h)(t, this.props.reportable.id) : Object(u.g)(t, this.props.reportable.id), this.props.sendEvent(e)
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
					} = this.props, n = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return r.a.createElement("div", null, n ? r.a.createElement(y, {
						className: e,
						collapseReports: this.state.historicalReportsCollapsed,
						handleToggleExpando: this.handleToggleHistoricalReports,
						isHistoricalReports: !0,
						numReports: n,
						modReports: t.modReportsDismissed,
						userReports: t.userReportsDismissed,
						reportedThingId: t.id
					}) : r.a.createElement(y, {
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
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(s || (s = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			}));
			var s, o, r, i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				c = n("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = n.n(c),
				p = n("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				u = n.n(p);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(s || (s = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const m = {
					[a.a.Approve]: o.Approve,
					[a.a.Remove]: o.Remove,
					[a.a.Spam]: o.Spam,
					[a.a.Flair]: o.Flair
				},
				b = {
					[d.g.Classic]: r.Classic,
					[d.g.Compact]: r.Compact,
					[d.g.Large]: r.Default,
					[d.g.Medium]: r.Default
				},
				f = e => {
					const t = m[e.flatlistItem],
						n = e.postLayout && b[e.postLayout],
						s = l.a[e.breakpointType],
						o = l.a[t],
						a = n ? l.a[n] : l.a[r.Default];
					return Object(i.a)(s, o, a)
				},
				x = e => {
					const t = e && b[e],
						n = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(n, u.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/BadgeCounter/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				p = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				u = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = n("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = n.n(b);
			const x = d.a.wrapped(l.a, "StyledDropdown", f.a),
				h = Object(i.a)(x),
				j = d.a.div("Separator", f.a),
				O = (e, t) => n => r.a.createElement("span", {
					className: Object(a.a)(f.a.IconWrapper, n.className)
				}, r.a.createElement(c.a, {
					className: f.a.BadgeCounter,
					isActive: t,
					unreadCount: -1,
					showEmpty: !0
				}), r.a.createElement(u.a, {
					name: e
				}));

			function v(e) {
				const {
					className: t,
					unreadNotifications: n,
					isOpen: o,
					sendEventWithName: i
				} = e, a = Object(p.c)(Object(u.b)("mod_queue"), `${s.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), d = Object(p.b)(O("message", n.hasUnreadModmail), `${s.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: o,
					tooltipId: m.a
				}, r.a.createElement(a, {
					href: "/r/mod/about/modqueue",
					onClick: () => i("mod_queue")
				}), r.a.createElement(j, null), r.a.createElement(d, {
					href: "https://mod.reddit.com/mail/all",
					isLit: n.hasUnreadModmail,
					onClick: () => i("mod_mail")
				}), r.a.createElement(j, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				i = () => null;
			t.b = Object(s.a)({
				ErrorComponent: i,
				getComponent: () => Object(o.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				f = n("./src/reddit/components/FlairSearch/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/models/Flair/index.ts"),
				j = n("./src/reddit/selectors/moderatorPermissions.ts"),
				O = n("./src/reddit/selectors/postFlair.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				k = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				w = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = n.n(w);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(s || (s = {}));
			const C = (e, t = !1, n = s.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				_ = Object(d.c)({
					flairData: O.d,
					subreddit: v.S,
					isMod: (e, t) => !!Object(j.l)(e, t)
				});
			class I extends i.a.Component {
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
					} = this.state, n = Object(g.c)(this.props.flairs) || null;
					return Object(g.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: s,
						subreddit: r
					} = e, a = r.displayText, {
						templates: d,
						templateIds: c
					} = s, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(m.a, {
						className: n
					}, i.a.createElement(u.a, {
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
						templates: d,
						templateIds: c,
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
			const y = Object(a.b)(_, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(I);
			t.a = Object(l.a)(Object(c.c)(y))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				p = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				m = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				f = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = n.n(f);
			const h = r.a.wrapped(c.a, "Icon", x.a),
				j = r.a.wrapped(l.a, "Icon", x.a),
				O = r.a.wrapped(p.a, "Icon", x.a),
				v = r.a.wrapped(u.a, "Icon", x.a),
				k = r.a.wrapped(m.a, "Icon", x.a),
				g = r.a.wrapped(b.a, "Icon", x.a),
				w = () => o.a.createElement(d.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				E = () => o.a.createElement(d.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				C = r.a.wrapped(i.b, "CheckboxMenuItem", x.a),
				_ = r.a.wrapped(a.b, "DropdownRow", x.a),
				I = r.a.div("ListContainer", x.a)
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/economics/predictions/index.ts"),
				c = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postFlair.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				v = n("./src/reddit/helpers/trackers/modTools.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/reddit/components/ModModeReports/helpers.ts"),
				E = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				C = n("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				_ = n("./src/reddit/helpers/isCrosspost.ts"),
				I = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/models/Prediction/index.ts"),
				P = n("./src/reddit/selectors/experiments/econ/index.ts"),
				R = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx");
			const N = (e, t) => Object(C.b)({
					breakpointType: C.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				S = () => void 0;
			var T = ({
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: n,
					isDistinguished: s,
					isModToMemberShareEnabled: i,
					isOverlay: a,
					isPostAuthor: d,
					isProfilePage: c,
					layout: l,
					modModeEnabled: p,
					onApprovePost: u,
					onCancelPrediction: m,
					onEditPredictionEnd: b,
					onDistinguishPost: f,
					onFlairPost: x,
					onLockPost: h,
					onNsfwPost: j,
					onOcPost: O,
					onCcPost: v,
					onRemovePost: k,
					onModToMemberShareOpened: C,
					onSpamPost: T,
					onStickyPost: M,
					onSpoilerPost: F,
					post: D
				}) => {
					var L, A, B;
					const G = Object(r.e)(P.n),
						U = Object(r.e)(e => {
							var t;
							return (null === (t = D.pollData) || void 0 === t ? void 0 : t.isPrediction) && Object(P.k)(e)
						}),
						z = D.flair.filter(e => e.type !== I.f.Nsfw && e.type !== I.f.Spoiler).length > 0,
						W = Object(w.b)(D),
						Q = !(!D.approvedBy || !W),
						K = a ? void 0 : l,
						H = Object(_.a)(D),
						V = p ? N : S;
					return o.a.createElement(R.g, null, n && o.a.createElement(o.a.Fragment, null, !D.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(R.e, {
						className: V(E.a.Approve, K),
						displayText: Q ? g.fbt._("reapprove", null, {
							hk: "ZucfK"
						}) : D.approvedBy ? g.fbt._("approved", null, {
							hk: "nlSCc"
						}) : g.fbt._("approve", null, {
							hk: "4GoeOE"
						}),
						onClick: u
					}, o.a.createElement(R.a, null)), o.a.createElement(R.e, {
						className: V(E.a.Remove, K),
						displayText: D.isRemoved ? g.fbt._("removed", null, {
							hk: "cSGLt"
						}) : g.fbt._("remove", null, {
							hk: "4mKe0F"
						}),
						onClick: k
					}, o.a.createElement(R.i, null)), o.a.createElement(R.e, {
						className: V(E.a.Spam, K),
						displayText: D.isSpam ? g.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : g.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: T
					}, o.a.createElement(R.j, null))), e && o.a.createElement(R.e, {
						className: V(E.a.Flair, K),
						displayText: z ? g.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : g.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: x
					}, o.a.createElement(R.k, null))), i && t && o.a.createElement(R.e, {
						displayText: g.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: C
					}, o.a.createElement(R.f, null)), !D.isRemoved && !c && o.a.createElement(R.c, {
						isSelected: D.isStickied,
						onClick: M,
						text: g.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), U && o.a.createElement(R.e, {
						disabled: Boolean((null === (L = D.pollData) || void 0 === L ? void 0 : L.resolvedOptionId) || (null === (A = D.pollData) || void 0 === A ? void 0 : A.predictionStatus) === y.b.Cancelled),
						displayText: g.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: m
					}, o.a.createElement(R.i, null)), G && (null === (B = D.pollData) || void 0 === B ? void 0 : B.isPrediction) && o.a.createElement(R.e, {
						displayText: g.fbt._("Edit when prediction ends", null, {
							hk: "9U7gQ"
						}),
						onClick: b
					}, o.a.createElement(R.b, null)), d && o.a.createElement(R.c, {
						isSelected: s,
						onClick: f,
						text: g.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), o.a.createElement(R.c, {
						isSelected: D.isLocked,
						onClick: h,
						text: g.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !H && o.a.createElement(R.c, {
						isSelected: D.isOriginalContent,
						onClick: O,
						text: g.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), o.a.createElement(R.c, {
						isSelected: D.isNSFW,
						onClick: j,
						text: g.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), t && "subreddit" === D.belongsTo.type && o.a.createElement(R.e, {
						displayText: g.fbt._("Adjust crowd Control", null, {
							hk: "28dSIi"
						}),
						onClick: v
					}, o.a.createElement(R.d, null)), o.a.createElement(R.c, {
						isSelected: D.isSpoiler,
						onClick: F,
						text: g.fbt._("Mark as Spoiler", null, {
							hk: "1IlEnE"
						})
					}))
				},
				M = n("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				F = n.n(M);
			const D = Object(h.t)({
					isProfilePage: h.G,
					pageLayer: e => e
				}),
				L = Object(i.c)({
					layout: h.P,
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(k.b)(t)(e),
					isModToMemberShareEnabled: O.d.modToMemberShare
				}),
				A = Object(r.b)(L, (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(p.s)(t.id)),
					onCancelPrediction: () => e(Object(d.m)(t.id)),
					onEditPredictionEnd: () => e(Object(c.b)(t.id)),
					onDistinguishPost: n => e(Object(p.v)(t.id, n)),
					onFlairChanged: (n, s) => e(Object(u.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					})),
					onFlairPost: t => e(Object(l.i)(t)),
					onLockPost: () => e(Object(p.E)(t.id)),
					onNsfwPost: () => e(Object(p.G)(t.id)),
					onOcPost: () => e(Object(p.J)(t.id)),
					onCcPost: () => {
						e(Object(l.i)(x.a.CROWD_CONTROL)), e(Object(p.u)(t.id))
					},
					onRemovePost: () => e(Object(p.S)(t.id, !1)),
					onModToMemberShareOpened: () => {
						e(Object(l.i)(x.a.MOD_TO_MEMBER_SHARE)), e(Object(p.F)(t.id))
					},
					onSpamPost: () => e(Object(p.S)(t.id, !0)),
					onSpoilerPost: () => e(Object(p.X)(t.id)),
					onStickyPost: () => e(Object(p.bb)(t.id))
				})),
				B = Object(m.a)(j.a);
			t.default = D(A(Object(f.c)(({
				canEditFlair: e,
				hasModFullPerms: t,
				hasModPostPerms: n,
				isDropdownOpen: s,
				isModToMemberShareEnabled: r,
				isOverlay: i,
				isPostAuthor: d,
				isProfilePage: c,
				layout: l,
				modModeEnabled: p,
				onApprovePost: u,
				onCancelPrediction: m,
				onEditPredictionEnd: f,
				onDistinguishPost: x,
				onFlairPost: h,
				onLockPost: j,
				onNsfwPost: O,
				onOcPost: k,
				onCcPost: g,
				onRemovePost: w,
				onModToMemberShareOpened: E,
				onSpamPost: C,
				onSpoilerPost: _,
				onStickyPost: I,
				post: y,
				sendEvent: P,
				tooltipId: R
			}) => {
				const N = y.distinguishType === a.E.MODERATOR,
					S = N ? a.E.NONE : a.E.MODERATOR,
					M = Object(b.b)(y.id, i);
				return o.a.createElement(B, {
					className: F.a.dropdown,
					isOpen: s,
					tooltipId: R
				}, o.a.createElement(T, {
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: n,
					isDistinguished: N,
					isModToMemberShareEnabled: r,
					isOverlay: i,
					isPostAuthor: d,
					isProfilePage: c,
					layout: l,
					modModeEnabled: p,
					onApprovePost: () => {
						u(), P(Object(v.j)("approve", y.id))
					},
					onCancelPrediction: m,
					onEditPredictionEnd: f,
					onRemovePost: () => {
						w(), P(Object(v.j)("remove", y.id))
					},
					onSpamPost: () => {
						C(), P(Object(v.j)("spam", y.id))
					},
					onDistinguishPost: () => {
						x(S), P(Object(v.j)(N ? "undistinguish" : "distinguish", y.id))
					},
					onFlairPost: () => {
						h(M), P(Object(v.j)("post_flair", y.id))
					},
					onLockPost: () => {
						j(), P(Object(v.j)(y.isLocked ? "unlock" : "lock", y.id))
					},
					onNsfwPost: () => {
						O(), P(Object(v.j)(y.isNSFW ? "unmark_nsfw" : "mark_nsfw", y.id))
					},
					onOcPost: () => {
						k(), P(Object(v.j)(y.isOriginalContent ? "unmark_original_content" : "mark_original_content", y.id))
					},
					onCcPost: () => {
						g()
					},
					onModToMemberShareOpened: () => {
						E(), P(Object(v.j)("mod_to_member_share", y.id))
					},
					onSpoilerPost: () => {
						_(), P(Object(v.j)(y.isSpoiler ? "unmark_spoiler" : "mark_spoiler", y.id))
					},
					onStickyPost: () => {
						I(), P(Object(v.j)(y.isStickied ? "unsticky" : "sticky", y.id))
					},
					post: y
				}))
			})))
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
				return D
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/actions/post.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/trackers/modTools.ts"),
				j = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				O = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				k = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				w = n("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				E = n.n(w);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = (e, t) => `SnoozableReport--${t}--${e}`, I = Object(i.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(g.b)(_(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(p.h)({
					tooltipId: _(t.reason, t.reportedThingId)
				})),
				toggleSnooze: n => {
					Object(x.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, n)) : e(Object(l.ab)(t.reportedThingId, t.reason, n))
				}
			})), y = Object(u.a)(b.a);
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.Xb.None : d.Xb.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(h.l)(Object(x.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: n,
						openDropdown: s,
						isDropdownOpen: r,
						isSnoozed: i
					} = this.props, a = _(e, n);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: a,
						className: E.a.DropdownLabelContainer,
						onClick: s
					}, o.a.createElement("label", {
						htmlFor: a,
						className: E.a.DropdownLabel
					}, i ? "Reporter snoozed" : `${t}: ${e}`, r ? o.a.createElement(O.a, null) : o.a.createElement(j.a, null))), o.a.createElement(y, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: E.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: E.a.SnoozeButtonContent
					}, i ? o.a.createElement(o.a.Fragment, null, o.a.createElement(k.a, null), C._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, null), C._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var R = I(Object(m.c)(P)),
				N = n("./src/reddit/components/Reports/index.m.less"),
				S = n.n(N);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = r.a.div("ReportText", S.a), F = r.a.div("ReportsTitle", S.a);

			function D(e) {
				const {
					className: t,
					modReports: n,
					userReports: s,
					reportedThingId: r
				} = e;
				return o.a.createElement("div", {
					className: t
				}, n && n.length > 0 && o.a.createElement("div", {
					className: S.a.Reports
				}, o.a.createElement(F, null, T._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), n.map(([e, t]) => o.a.createElement(M, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), s && s.length > 0 && o.a.createElement("div", {
					className: S.a.Reports
				}, o.a.createElement(F, null, T._("User Reports", null, {
					hk: "2KeCLz"
				})), o.a.createElement("div", {
					className: S.a.UserReports
				}, s.map(([e, t, n, s]) => void 0 !== n && s ? o.a.createElement(R, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: n
				}) : o.a.createElement(M, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = n.n(a);
			const c = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && o.a.createElement("span", {
					className: Object(r.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(c, "ApproveButton", d.a),
				p = i.a.wrapped(c, "RemoveButton", d.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = n("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				c = n.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = e => o.a.createElement("div", {
					className: Object(r.a)(c.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(a.a, {
					className: c.a.expandRight
				}, o.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: c.a.checkboxIcon
				}), e.text)),
				u = ({
					className: e,
					...t
				}) => o.a.createElement(p, l({
					className: Object(r.a)(c.a.postCheckboxMenuItem, e)
				}, t));
			t.b = p
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				p = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(u),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
					}, n = Object(a.a)(f.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(d.a, x({}, t, {
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
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(p.a, x({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: o()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(a.a)(f.a.row, e, {
					[f.a.mIsInteractive]: !t.noHover,
					[f.a.mIsSelected]: t.isSelected,
					[f.a.topics]: t.isTopicsStyle
				});
				return i.a.createElement(h, x({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
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
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = s.a.wrapped(o.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return g
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				p = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/save`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				m = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/unsave`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/lock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/unlock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/approve`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/remove`),
					method: o.hb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				j = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
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
				k = (e, t, n, i) => {
					let a = Object(d.a)(Object(p.a)(Object(l.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return i && (a = Object(c.a)(a)), Object(r.a)(e, {
						data: n,
						endpoint: a,
						method: o.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, n, s) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.hb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "c", (function() {
				return P
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = n("./src/redditGQL/operations/CancelPrediction.json"),
				a = n("./src/redditGQL/operations/ChangePrediction.json"),
				d = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				c = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = n("./src/redditGQL/operations/GetPredictionToken.json"),
				u = n("./src/redditGQL/operations/GetTournaments.json"),
				m = n("./src/redditGQL/operations/ResolvePrediction.json"),
				b = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				f = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				x = n("./src/redditGQL/operations/VotePrediction.json");
			const h = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: r,
				price: i
			}) => {
				var a;
				const d = await Object(s.a)(e, {
					...x,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: r,
							price: i
						}
					}
				});
				if (!Object(o.c)(d) || d.error || !(null === (a = d.body.data.votePrediction) || void 0 === a ? void 0 : a.ok)) throw new Error("Failed to make prediction");
				return d.body.data.votePrediction.poll
			}, j = (e, {
				postId: t,
				optionId: n
			}) => Object(s.a)(e, {
				...m,
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			});
			var O;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(O || (O = {}));
			const v = (e, {
					subredditId: t,
					period: n,
					top: o,
					includeCurrentRank: r,
					tournamentId: i
				}) => Object(s.a)(e, {
					...b,
					variables: {
						subredditId: t,
						period: n,
						top: o,
						includeCurrentRank: r,
						tournamentId: i
					}
				}),
				k = (e, t) => Object(s.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				g = (e, t) => Object(s.a)(e, {
					...u,
					variables: t
				}),
				w = (e, t) => Object(s.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(s.a)(e, {
					...f,
					variables: {
						input: t
					}
				}),
				C = (e, t) => Object(s.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(s.a)(e, {
					...l,
					variables: t
				}),
				I = (e, t) => Object(s.a)(e, {
					...p,
					variables: t
				}),
				y = async (e, t) => {
					const n = await Object(s.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(o.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to edit prediction end time")
				}, P = async (e, {
					postId: t
				}) => {
					var n, r;
					const a = await Object(s.a)(e, {
						...i,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(o.c)(a) || !(null === (n = a.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (r = a.body.data.cancelPrediction) || void 0 === r ? void 0 : r.poll)) throw new Error("Unable to cancel prediction");
					return a.body.data.cancelPrediction.poll
				}
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
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
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				c = n.n(d);
			const l = a.a.button("button", c.a),
				p = e => t => o.a.createElement("div", {
					className: t.className
				}, e);

			function u(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function m(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const a = e,
					d = "function" == typeof t ? t : p(t),
					{
						meta: l
					} = s,
					u = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(a, {
						className: Object(i.a)(c.a.icon, {
							[c.a.isLit]: e
						})
					}), o.a.createElement(d, {
						className: c.a.body
					}), l && o.a.createElement("div", {
						className: c.a.metaContainer
					}, l));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, c.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, u(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, c.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, u(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, c.a.button),
					onClick: e.onClick
				}, u(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
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
				}) => Object(s.a)({
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
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = n.n(i);
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
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, n) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: r,
					gutter: a,
					...l
				} = e;
				return o.a.createElement("div", c({
					className: Object(i.a)(d.a.expandRightContainer, t)
				}, l), o.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: r,
						height: s,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), o.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.bd
					}) === s.ld.Enabled
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.ad
					}) === s.kd.Enabled
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/predictions/index.ts"),
				r = n("./src/reddit/selectors/postCreations.ts");
			Object(s.a)({
				features: {
					predictions: o.a
				}
			});
			const i = e => {
					const t = (e => {
						var t, n;
						return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const n = Object(r.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							s = t.formData.polls,
							o = s.options.map(e => ({
								text: e.text
							})),
							i = {};
						return n.document ? i.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (i.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: s.endDate.toISOString(),
							body: i,
							options: o
						}
					}) : []
				},
				a = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
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
				o = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.3445dfdc2bc5e5593596.js.map