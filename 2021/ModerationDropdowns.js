// https://www.redditstatic.com/desktop2x/ModerationDropdowns.0f03ef72172aef98381e.js
// Retrieved at 7/22/2021, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./node_modules/uuid/index.js": function(e, t, s) {
			var n = s("./node_modules/uuid/v1.js"),
				o = s("./node_modules/uuid/v4.js"),
				r = o;
			r.v1 = n, r.v4 = o, e.exports = r
		},
		"./node_modules/uuid/v1.js": function(e, t, s) {
			var n, o, r = s("./node_modules/uuid/lib/rng-browser.js"),
				i = s("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				d = 0;
			e.exports = function(e, t, s) {
				var c = t && s || 0,
					l = t || [],
					m = (e = e || {}).node || n,
					p = void 0 !== e.clockseq ? e.clockseq : o;
				if (null == m || null == p) {
					var u = r();
					null == m && (m = n = [1 | u[0], u[1], u[2], u[3], u[4], u[5]]), null == p && (p = o = 16383 & (u[6] << 8 | u[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : d + 1,
					x = b - a + (f - d) / 1e4;
				if (x < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (x < 0 || b > a) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = b, d = f, o = p;
				var h = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				l[c++] = h >>> 24 & 255, l[c++] = h >>> 16 & 255, l[c++] = h >>> 8 & 255, l[c++] = 255 & h;
				var j = b / 4294967296 * 1e4 & 268435455;
				l[c++] = j >>> 8 & 255, l[c++] = 255 & j, l[c++] = j >>> 24 & 15 | 16, l[c++] = j >>> 16 & 255, l[c++] = p >>> 8 | 128, l[c++] = 255 & p;
				for (var O = 0; O < 6; ++O) l[c + O] = m[O];
				return t || i(l)
			}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return P
			})), s.d(t, "m", (function() {
				return R
			})), s.d(t, "e", (function() {
				return T
			})), s.d(t, "h", (function() {
				return M
			})), s.d(t, "l", (function() {
				return B
			})), s.d(t, "q", (function() {
				return A
			})), s.d(t, "j", (function() {
				return G
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "f", (function() {
				return z
			})), s.d(t, "o", (function() {
				return K
			})), s.d(t, "p", (function() {
				return H
			})), s.d(t, "d", (function() {
				return V
			})), s.d(t, "a", (function() {
				return Z
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
				i = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/helpers/async.ts"),
				d = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				c = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/presence.ts"),
				p = s("./src/reddit/actions/shortcuts/utils.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/actions/vote.ts"),
				f = s("./src/reddit/endpoints/comment/index.tsx"),
				x = s("./src/reddit/helpers/commentList/index.ts"),
				h = s("./src/reddit/helpers/trackers/comment.ts"),
				j = s("./src/reddit/models/Comment/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/comments.ts"),
				w = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = s("./src/reddit/selectors/moderatingComments.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/actions/comment/constants.ts");
			const y = {},
				P = Object(i.a)(I.o),
				R = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(C.J)(s())) return t(Object(c.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(g.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const i = r.isSaved ? f.k : f.g;
					if (t(P({
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
							buttonAction: R(e)
						}))
					} else t(P({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, N = e => `viewing-comment-${e}`, S = n.a.telemetry.commentConsumedThreshold, T = e => async (t, s) => {
					const o = s();
					if (!Object(w.a)(o, {
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
					y[e] = i
				}, M = (e, t) => async (s, n) => {
					const o = n(),
						i = N(e);
					if (Object(w.a)(o, {
							commentId: e
						}) && r.c.has(i)) {
						const s = r.c.end(i);
						!t && s < S && (clearTimeout(y[e]), delete y[e])
					}
				}, F = Object(i.a)(I.x), D = Object(i.a)(I.w), L = Object(i.a)(I.v), B = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
						i = r.moreComments.models[t],
						c = r.platform.currentPage,
						l = c && c.routeMatch,
						p = l && l.match,
						{
							partialPostId: u
						} = p ? p.params : null;
					if (!u) return;
					const b = Object(O.s)(u);
					s(F({
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
						let c;
						o && "subreddit" === o.belongsTo.type && t.comments && (c = o.belongsTo.id, await s(Object(a.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: c
						})));
						const l = h.body.comments,
							p = h.body.posts;
						await s(Object(m.b)(p, l, c)), await s(Object(d.b)(c, l))
					} else s(L({
						moreCommentsItem: i,
						...h.error
					}))
				}, A = Object(b.a)(x.b, k.a.upvoted), G = Object(b.a)(x.b, k.a.downvoted), U = Object(i.a)(I.j), z = Object(i.a)(I.i), W = Object(i.a)(I.e), Q = Object(i.a)(I.f), K = (Object(i.a)(I.c), Object(i.a)(I.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (n, o) => {
					const r = o(),
						i = Object(j.h)(e),
						a = Object(g.n)(r, {
							commentLink: i,
							commentsPageKey: t
						}),
						d = Object(_.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						c = a.depth;
					n(W({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: d
					})), d || 0 !== c || s(e, !0), Object(p.d)()
				}), H = ({
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
						d = Object(_.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(W({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: d
					})), 0 === s && n(a, !0), Object(p.d)()
				}, q = Object(i.a)(I.r), Z = e => t => t(q({
					draftKey: e
				})), J = Object(i.a)(I.a), X = Object(i.a)(I.E), $ = Object(i.a)(I.b), Y = Object(i.a)(I.u)
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
				return w
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "b", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				p = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				j = s("./src/reddit/actions/comment/constants.ts");
			const O = Object(r.a)(j.n),
				v = e => async (t, s, {
					apiContext: n
				}) => {
					s().features.comments.models[e] && (await Object(m.h)(n(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, k = e => async (t, s, {
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
				}, g = Object(r.a)(j.F), w = e => async (t, s, {
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
					})), Object(d.d)())
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
					})), Object(d.d)())
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
				}, C = (e, t, s) => async (r, i, {
					gqlContext: a
				}) => {
					const d = Object(f.a)(i(), {
						commentId: e
					});
					if (!d) return;
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
							userReports: Object(u.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, I = (e, t, s) => async (n, r, {
					apiContext: a
				}) => {
					const d = r(),
						c = d.features.comments.models[e];
					if (!c) return;
					const l = c.postId,
						p = d.postStickiedComments.data[l],
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
					})), (await Object(m.b)(a(), e, u, s || null)).ok ? s && n(g({
						id: e,
						postId: l,
						commentsPageKey: Object(i.a)(l, null, {
							sort: o.s.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (n(Object(h.i)({
						[e]: {
							distinguishType: c.distinguishType,
							isAdmin: c.isAdmin,
							isMod: c.isMod,
							isStickied: c.isStickied
						}
					})), n(Object(h.i)({
						[p]: {
							isStickied: d.features.comments.models[p].isStickied
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
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = s("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var c = s("./src/reddit/selectors/experiments/econ/index.ts"),
				l = s("./src/lib/initializeClient/installReducer.ts"),
				m = s("./src/reddit/reducers/features/powerups/index.ts"),
				p = s("./src/reddit/actions/gold/powerups.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/index.ts"),
				x = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/economics/powerups/constants.ts");
			Object(l.a)({
				features: {
					powerups: m.a
				}
			});
			const O = Object(o.a)(j.d),
				v = Object(o.a)(j.f),
				k = Object(o.a)(j.g),
				g = Object(o.a)(j.e),
				w = (e, t) => async (s, n, {
					gqlContext: o
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
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
						})(o(), e, d);
						await s(O(t))
					} catch (c) {
						r.c.captureException(c)
					}
				}, E = (e, t) => async (s, n) => {
					if (!e) return;
					const o = n(),
						r = Object(h.j)(o);
					if (!r || !Object(f.f)(o, {
							subredditId: e
						}) || !Object(c.g)(o)) return;
					const i = !!Object(x.b)(o, {
						subredditId: e,
						userId: r.id
					});
					!t && i || await s(w(e, [r.id]))
				}, _ = (e, t) => async (s, n) => {
					if (!e) return;
					await s(Object(p.k)(e, {
						fullData: !0
					}));
					const o = n();
					if (!Object(f.f)(o, {
							subredditId: e
						}) || !t || !Object(c.g)(o)) return;
					const r = new Set;
					Object.values(t).forEach(e => {
						r.add(e.authorId)
					}), await s(w(e, Array.from(r)))
				}, C = (e, t) => async (s, o, {
					gqlContext: a
				}) => {
					const c = o(),
						l = Object(h.j)(c);
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
								...d,
								variables: {
									subredditId: t,
									achievementType: s
								}
							});
							if (!n.ok || !n.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(a(), m.subredditId, m.achievementType), s(k(m))
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
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return w
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "g", (function() {
				return P
			})), s.d(t, "b", (function() {
				return R
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "c", (function() {
				return T
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "o", (function() {
				return D
			})), s.d(t, "h", (function() {
				return L
			})), s.d(t, "d", (function() {
				return B
			})), s.d(t, "e", (function() {
				return A
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "l", (function() {
				return U
			}));
			var n = s("./node_modules/uuid/index.js"),
				o = s.n(n),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/reddit/reducers/features/predictions/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/endpoints/economics/predictions.ts"),
				c = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/models/Prediction/index.ts"),
				u = s("./src/reddit/selectors/experiments/econ/index.ts"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/selectors/features/predictions/creation/index.ts"),
				h = s("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				j = s("./src/reddit/actions/economics/predictions/constants.ts");
			Object(r.a)({
				features: {
					predictions: i.a
				}
			});
			const O = Object(a.a)(j.d),
				v = Object(a.a)(j.h),
				k = Object(a.a)(j.k),
				g = Object(a.a)(j.g),
				w = (e, t, s, n) => async (o, r, {
					gqlContext: i
				}) => {
					const a = Object(f.J)(r()),
						c = await Object(d.g)(i(), {
							subredditId: e,
							period: t,
							top: s,
							includeCurrentRank: a,
							tournamentId: n
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: l
					} = c.body.data;
					if (!l || !l.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: m
					} = l, p = {
						subredditId: e,
						...m
					};
					return o(O(p)), p
				}, E = ({
					coinPackageId: e,
					optionId: t,
					postId: s,
					price: n
				}) => async (o, r, {
					gqlContext: i
				}) => {
					const a = await Object(d.k)(i(), {
						coinPackageId: e,
						optionId: t,
						postId: s,
						price: n
					});
					if (a.error || !a.ok) throw new Error("Failed to make prediction");
					const {
						votePrediction: c
					} = a.body.data;
					if (!c) throw new Error("Failed to create prediction vote");
					return o(v({
						pollId: s,
						prediction: c.poll,
						price: n
					})), c.poll
				}, _ = ({
					optionId: e,
					postId: t
				}) => async (s, n, {
					gqlContext: o
				}) => {
					const r = await Object(d.i)(o(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: i
						} = r.body.data;
					if (!(null == i ? void 0 : i.poll)) throw new Error("Failed to resolve prediction");
					return s(g({
						pollId: t,
						prediction: i.poll
					})), i.poll
				}, C = Object(a.a)(j.b), I = Object(a.a)(j.c), y = Object(a.a)(j.f), P = e => async (t, s, {
					gqlContext: n
				}) => {
					const o = s(),
						r = Object(b.D)(o, e);
					if (Object(h.j)(o, {
							subredditId: r
						})) return Object(h.f)(o, {
						subredditId: r
					});
					t(C({
						subredditId: r
					}));
					const i = await Object(d.h)(n(), {
						subredditName: e,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0
					});
					if (i.error || !i.ok) throw new Error("Failed to fetch tournaments");
					const {
						subredditInfoByName: a
					} = i.body.data;
					if (!a.predictionTournaments) return [];
					const l = a.predictionTournaments.map(e => {
							var t, s;
							const n = null !== (s = null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.map(e => {
								const t = Object(c.e)(e),
									s = t.pollData;
								return {
									...t,
									pollData: s
								}
							})) && void 0 !== s ? s : [];
							return {
								...e,
								predictionPosts: n
							}
						}),
						m = l.reduce((e, t) => (t.predictionPosts.length && t.predictionPosts.forEach(t => {
							e[t.id] = t
						}), e), {});
					return t(I({
						subredditId: r,
						tournaments: l
					})), t(y({
						posts: m,
						meta: o.meta
					})), l
				}, R = Object(a.a)(j.a), N = Object(a.a)(j.i), S = Object(a.a)(j.j), T = ({
					subredditId: e
				}) => async (t, s, {
					gqlContext: n
				}) => {
					const o = s(),
						r = Object(x.b)(o),
						i = Object(u.a)(o);
					if (!r) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(d.c)(n(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: r,
							currency: i ? p.a.Coins : p.a.Tokens
						}),
						{
							createPredictionTournament: c
						} = a.body.data;
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: l
					} = c;
					return t(I({
						subredditId: e,
						tournaments: [l]
					})), l
				}, M = (e, t) => async (s, n, {
					gqlContext: r
				}) => {
					var i;
					const a = Object(x.b)(n());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(d.b)(r(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${o.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: l
						} = c.body.data;
					if (null === (i = l.errors) || void 0 === i ? void 0 : i.length) throw new Error(l.errors[0].message);
					if (!(null == l ? void 0 : l.tournament)) throw new Error("Failed to create prediction");
					return l.tournament
				}, F = Object(a.a)(j.l), D = (e, t, s) => async (t, n, {
					gqlContext: o
				}) => {
					const r = await Object(d.j)(o(), {
							tournamentId: e,
							name: s
						}),
						{
							updatePredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(F(i.tournament)), i.tournament
				}, L = e => async (t, s, {
					gqlContext: n
				}) => {
					const o = await Object(d.d)(n(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: r
						} = o.body.data;
					if (!r.tournament) throw new Error("Failed to update prediction name");
					return t(F(r.tournament)), r.tournament
				}, B = e => async (t, s, {
					gqlContext: n
				}) => {
					const o = await Object(d.e)(n(), {
						postId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: r
					} = o.body.data;
					if (!r.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return r.predictionChipPackages
				}, A = e => async (t, s, {
					gqlContext: n
				}) => {
					const o = await Object(d.f)(n(), {
						tournamentId: e
					});
					if (!o.ok || o.error) throw new Error("Failed to fetch token balance");
					const {
						identity: r
					} = o.body.data;
					if (!r.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return r.predictionTokens
				}, G = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: s,
					pollId: n,
					tournamentId: o,
					tournamentPostId: r
				}) => async i => {
					const a = await i(E({
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: s
					}));
					return i(k({
						predictionId: n,
						selectedOptionId: t,
						tournamentId: o,
						tournamentPostId: r
					})), a
				}, U = e => Object(l.h)(m.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
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
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var c = s("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				m = Object(n.a)(l),
				p = (e, t, s) => async (n, l, {
					apiContext: p
				}) => {
					const u = l();
					if (!Object(c.a)(u)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const f = await (async (e, t, s) => Object(r.a)(Object(i.a)(e, [a.a]), {
						endpoint: Object(d.a)(`${e.apiUrl}/api/presence`),
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
				d = s.n(a);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: s,
				unreadCount: n
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, d.a.badgeCounter, {
					[d.a.mEmpty]: s || n < 1
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
				d = s("./src/reddit/components/Reports/index.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/modTools.ts"),
				u = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				b = s("./src/reddit/icons/fonts/Report/index.tsx"),
				f = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				h = s.n(x);
			const j = a.a.span("IgnoreIconContainer", h.a),
				O = a.a.span("ActiveIconContainer", h.a),
				v = a.a.wrapped(f.a, "ChevronDown", h.a),
				k = a.a.wrapped(b.a, "ActiveReportIcon", h.a),
				g = a.a.wrapped(u.a, "IgnoreReport", h.a),
				w = a.a.wrapped(b.a, "ReportIcon", h.a),
				E = a.a.div("ReportsContainer", h.a),
				_ = a.a.wrapped(c.c, "Button", h.a),
				C = a.a.wrapped(d.a, "Reports", h.a),
				I = a.a.div("NumReports", h.a),
				y = ({
					className: e,
					handleToggleExpando: t,
					isHistoricalReports: s,
					numReports: o,
					modReports: a,
					userReports: d,
					collapseReports: c,
					reportedThingId: l
				}) => r.a.createElement(E, {
					className: Object(i.a)(e, {
						[h.a.collapseReports]: c
					})
				}, c ? r.a.createElement(j, null, r.a.createElement(g, null)) : r.a.createElement(O, null, r.a.createElement(k, null)), c ? r.a.createElement(I, null, o) : r.a.createElement(C, {
					modReports: a,
					userReports: d,
					reportedThingId: l
				}), s ? r.a.createElement(_, {
					onClick: t,
					text: n.fbt._("old reports", null, {
						hk: "2IdZOv"
					})
				}, r.a.createElement(v, null)) : r.a.createElement(_, {
					onClick: t,
					text: c ? n.fbt._("Restore Reports", null, {
						hk: "2O219R"
					}) : n.fbt._("ignore reports", null, {
						hk: "48jlNW"
					})
				}, c ? r.a.createElement(w, null) : r.a.createElement(g, null)));
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
					return r.a.createElement("div", null, s ? r.a.createElement(y, {
						className: e,
						collapseReports: this.state.historicalReportsCollapsed,
						handleToggleExpando: this.handleToggleHistoricalReports,
						isHistoricalReports: !0,
						numReports: s,
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
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = s.n(c),
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
					[d.g.Classic]: r.Classic,
					[d.g.Compact]: r.Compact,
					[d.g.Large]: r.Default,
					[d.g.Medium]: r.Default
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
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/BadgeCounter/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				u = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = s("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = s.n(b);
			const x = d.a.wrapped(l.a, "StyledDropdown", f.a),
				h = Object(i.a)(x),
				j = d.a.div("Separator", f.a),
				O = (e, t) => s => r.a.createElement("span", {
					className: Object(a.a)(f.a.IconWrapper, s.className)
				}, r.a.createElement(c.a, {
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
				} = e, a = Object(m.c)(Object(p.b)("mod_queue"), `${n.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), d = Object(m.b)(O("message", s.hasUnreadModmail), `${n.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: o,
					tooltipId: u.a
				}, r.a.createElement(a, {
					href: "/r/mod/about/modqueue",
					onClick: () => i("mod_queue")
				}), r.a.createElement(j, null), r.a.createElement(d, {
					href: "https://mod.reddit.com/mail/all",
					isLit: s.hasUnreadModmail,
					onClick: () => i("mod_mail")
				}), r.a.createElement(j, null)))
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = s("./src/reddit/components/FlairPreview/index.tsx"),
				f = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				w = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = s.n(w);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const _ = (e, t = !1, s = n.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				C = Object(d.c)({
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
					} = e, a = r.displayText, {
						templates: d,
						templateIds: c
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
			const y = Object(a.b)(C, (e, t) => ({
				closeModal: () => e(Object(m.i)(t.modalId))
			}))(I);
			t.a = Object(l.a)(Object(c.c)(y))
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
				return j
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				p = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				u = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				f = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = s.n(f);
			const h = r.a.wrapped(c.a, "Icon", x.a),
				j = r.a.wrapped(l.a, "Icon", x.a),
				O = r.a.wrapped(m.a, "Icon", x.a),
				v = r.a.wrapped(p.a, "Icon", x.a),
				k = r.a.wrapped(u.a, "Icon", x.a),
				g = r.a.wrapped(b.a, "Icon", x.a),
				w = () => o.a.createElement(d.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				E = () => o.a.createElement(d.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				_ = r.a.wrapped(i.b, "CheckboxMenuItem", x.a),
				C = r.a.wrapped(a.b, "DropdownRow", x.a),
				I = r.a.div("ListContainer", x.a)
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
				d = s("./src/reddit/actions/economics/predictions/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				E = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				_ = s("./src/reddit/helpers/isCrosspost.ts"),
				C = s("./src/reddit/models/Flair/index.ts"),
				I = s("./src/reddit/selectors/experiments/econ/index.ts"),
				y = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx");
			const P = (e, t) => Object(E.b)({
					breakpointType: E.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				R = () => void 0;
			var N = e => {
					var t;
					const {
						canEditFlair: s,
						hasModFullPerms: n,
						hasModPostPerms: i,
						isDistinguished: a,
						isModToMemberShareEnabled: d,
						isOverlay: c,
						isPostAuthor: l,
						isProfilePage: m,
						layout: p,
						modModeEnabled: u,
						onApprovePost: b,
						onEditPredictionEnd: f,
						onDistinguishPost: x,
						onFlairPost: h,
						onLockPost: j,
						onNsfwPost: O,
						onOcPost: v,
						onCcPost: E,
						onRemovePost: N,
						onModToMemberShareOpened: S,
						onSpamPost: T,
						onStickyPost: M,
						onSpoilerPost: F,
						post: D
					} = e, L = Object(r.e)(I.m), B = D.flair.filter(e => e.type !== C.f.Nsfw && e.type !== C.f.Spoiler).length > 0, A = Object(g.b)(D), G = !(!D.approvedBy || !A), U = c ? void 0 : p, z = Object(_.a)(e.post), W = u ? P : R;
					return o.a.createElement(y.g, null, i && o.a.createElement(o.a.Fragment, null, !D.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(y.e, {
						className: W(w.a.Approve, U),
						displayText: G ? k.fbt._("reapprove", null, {
							hk: "ZucfK"
						}) : D.approvedBy ? k.fbt._("approved", null, {
							hk: "nlSCc"
						}) : k.fbt._("approve", null, {
							hk: "4GoeOE"
						}),
						onClick: b
					}, o.a.createElement(y.a, null)), o.a.createElement(y.e, {
						className: W(w.a.Remove, U),
						displayText: D.isRemoved ? k.fbt._("removed", null, {
							hk: "cSGLt"
						}) : k.fbt._("remove", null, {
							hk: "4mKe0F"
						}),
						onClick: N
					}, o.a.createElement(y.i, null)), o.a.createElement(y.e, {
						className: W(w.a.Spam, U),
						displayText: D.isSpam ? k.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : k.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: T
					}, o.a.createElement(y.j, null))), s && o.a.createElement(y.e, {
						className: W(w.a.Flair, U),
						displayText: B ? k.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : k.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, o.a.createElement(y.k, null))), d && n && o.a.createElement(y.e, {
						displayText: k.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: S
					}, o.a.createElement(y.f, null)), !D.isRemoved && !m && o.a.createElement(y.c, {
						isSelected: D.isStickied,
						onClick: M,
						text: k.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), L && (null === (t = D.pollData) || void 0 === t ? void 0 : t.isPrediction) && o.a.createElement(y.e, {
						displayText: k.fbt._("Change End Time", null, {
							hk: "3wfd2R"
						}),
						onClick: f
					}, o.a.createElement(y.b, null)), l && o.a.createElement(y.c, {
						isSelected: a,
						onClick: x,
						text: k.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), o.a.createElement(y.c, {
						isSelected: D.isLocked,
						onClick: j,
						text: k.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !z && o.a.createElement(y.c, {
						isSelected: D.isOriginalContent,
						onClick: v,
						text: k.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), o.a.createElement(y.c, {
						isSelected: D.isNSFW,
						onClick: O,
						text: k.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), n && "subreddit" === D.belongsTo.type && o.a.createElement(y.e, {
						displayText: k.fbt._("Adjust crowd Control", null, {
							hk: "28dSIi"
						}),
						onClick: E
					}, o.a.createElement(y.d, null)), o.a.createElement(y.c, {
						isSelected: D.isSpoiler,
						onClick: F,
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
				F = Object(i.c)({
					layout: x.P,
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(v.b)(t)(e),
					isModToMemberShareEnabled: j.d.modToMemberShare
				}),
				D = Object(r.b)(F, (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(l.s)(t.id)),
					onEditPredictionEnd: () => e(Object(d.l)(t.id)),
					onDistinguishPost: s => e(Object(l.v)(t.id, s)),
					onFlairChanged: (s, n) => e(Object(m.h)({
						post: t,
						previewFlair: s,
						selectedTemplateId: n
					})),
					onFlairPost: t => e(Object(c.i)(t)),
					onLockPost: () => e(Object(l.E)(t.id)),
					onNsfwPost: () => e(Object(l.I)(t.id)),
					onOcPost: () => e(Object(l.L)(t.id)),
					onCcPost: () => {
						e(Object(c.i)(f.a.CROWD_CONTROL)), e(Object(l.u)(t.id))
					},
					onRemovePost: () => e(Object(l.U)(t.id, !1)),
					onModToMemberShareOpened: () => {
						e(Object(c.i)(f.a.MOD_TO_MEMBER_SHARE)), e(Object(l.F)(t.id))
					},
					onSpamPost: () => e(Object(l.U)(t.id, !0)),
					onSpoilerPost: () => e(Object(l.Z)(t.id)),
					onStickyPost: () => e(Object(l.db)(t.id))
				})),
				L = Object(p.a)(h.a),
				B = M(D(Object(b.c)(e => {
					const {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: n,
						isDropdownOpen: r,
						isModToMemberShareEnabled: i,
						isOverlay: d,
						isPostAuthor: c,
						isProfilePage: l,
						layout: m,
						modModeEnabled: p,
						onApprovePost: b,
						onEditPredictionEnd: f,
						onDistinguishPost: x,
						onFlairPost: h,
						onLockPost: j,
						onNsfwPost: v,
						onOcPost: k,
						onCcPost: g,
						onRemovePost: w,
						onModToMemberShareOpened: E,
						onSpamPost: _,
						onSpoilerPost: C,
						onStickyPost: I,
						post: y,
						sendEvent: P,
						tooltipId: R
					} = e, S = y.distinguishType === a.E.MODERATOR, M = S ? a.E.NONE : a.E.MODERATOR, F = Object(u.b)(y.id, d);
					return o.a.createElement(L, {
						className: T.a.dropdown,
						isOpen: r,
						tooltipId: R
					}, o.a.createElement(N, {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: n,
						isDistinguished: S,
						isModToMemberShareEnabled: i,
						isOverlay: d,
						isPostAuthor: c,
						isProfilePage: l,
						layout: m,
						modModeEnabled: p,
						onApprovePost: () => {
							b(), P(Object(O.j)("approve", y.id))
						},
						onEditPredictionEnd: f,
						onRemovePost: () => {
							w(), P(Object(O.j)("remove", y.id))
						},
						onSpamPost: () => {
							_(), P(Object(O.j)("spam", y.id))
						},
						onDistinguishPost: () => {
							x(M), P(Object(O.j)(S ? "undistinguish" : "distinguish", y.id))
						},
						onFlairPost: () => {
							h(F), P(Object(O.j)("post_flair", y.id))
						},
						onLockPost: () => {
							j(), P(Object(O.j)(y.isLocked ? "unlock" : "lock", y.id))
						},
						onNsfwPost: () => {
							v(), P(Object(O.j)(y.isNSFW ? "unmark_nsfw" : "mark_nsfw", y.id))
						},
						onOcPost: () => {
							k(), P(Object(O.j)(y.isOriginalContent ? "unmark_original_content" : "mark_original_content", y.id))
						},
						onCcPost: () => {
							g()
						},
						onModToMemberShareOpened: () => {
							E(), P(Object(O.j)("mod_to_member_share", y.id))
						},
						onSpoilerPost: () => {
							C(), P(Object(O.j)(y.isSpoiler ? "unmark_spoiler" : "mark_spoiler", y.id))
						},
						onStickyPost: () => {
							I(), P(Object(O.j)(y.isStickied ? "unsticky" : "sticky", y.id))
						},
						post: y
					}))
				})));
			t.default = B
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
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				j = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				O = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				k = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				E = s.n(w);
			const {
				fbt: _
			} = s("./node_modules/fbt/lib/FbtPublic.js"), C = (e, t) => `SnoozableReport--${t}--${e}`, I = Object(i.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(g.b)(C(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: C(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(x.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, s)) : e(Object(l.cb)(t.reportedThingId, t.reason, s))
				}
			})), y = Object(p.a)(b.a);
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
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: i
					} = this.props, a = C(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: a,
						className: E.a.DropdownLabelContainer,
						onClick: n
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
					}, i ? o.a.createElement(o.a.Fragment, null, o.a.createElement(k.a, null), _._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, null), _._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var R = I(Object(u.c)(P)),
				N = s("./src/reddit/components/Reports/index.m.less"),
				S = s.n(N);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = r.a.div("ReportText", S.a), F = r.a.div("ReportsTitle", S.a);

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
				}, o.a.createElement(F, null, T._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => o.a.createElement(M, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), n && n.length > 0 && o.a.createElement("div", {
					className: S.a.Reports
				}, o.a.createElement(F, null, T._("User Reports", null, {
					hk: "2KeCLz"
				})), o.a.createElement("div", {
					className: S.a.UserReports
				}, n.map(([e, t, s, n]) => void 0 !== s && n ? o.a.createElement(R, {
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
				return c
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
				d = s.n(a);
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
				m = i.a.wrapped(c, "RemoveButton", d.a),
				p = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
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
				d = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				c = s.n(d);

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
					className: Object(r.a)(c.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(a.a, {
					className: c.a.expandRight
				}, o.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: c.a.checkboxIcon
				}), e.text)),
				p = ({
					className: e,
					...t
				}) => o.a.createElement(m, l({
					className: Object(r.a)(c.a.postCheckboxMenuItem, e)
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
				d = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
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
					return e.href ? i.a.createElement(d.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
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
					}), e.showDropdownTriangle && i.a.createElement(c.a, {
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
				return j
			})), s.d(t, "i", (function() {
				return O
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
				i = s("./src/lib/omitHeaders/index.ts"),
				a = s("./src/reddit/constants/headers.ts"),
				d = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/save`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				u = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
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
				h = (e, t, s) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/remove`),
					method: o.hb.POST,
					data: {
						id: t,
						spam: s
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
				k = (e, t, s, i) => {
					let a = Object(d.a)(Object(m.a)(Object(l.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return i && (a = Object(c.a)(a)), Object(r.a)(e, {
						data: s,
						endpoint: a,
						method: o.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, s, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(d.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: o.hb.POST,
					data: {
						id: t,
						sticky: n
					}
				})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return b
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "f", (function() {
				return E
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/redditGQL/operations/AddPredictionDrafts.json"),
				r = s("./src/redditGQL/operations/CreatePredictionTournament.json"),
				i = s("./src/redditGQL/operations/EndPredictionTournament.json"),
				a = s("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				d = s("./src/redditGQL/operations/GetPredictionToken.json"),
				c = s("./src/redditGQL/operations/GetTournaments.json"),
				l = s("./src/redditGQL/operations/ResolvePrediction.json"),
				m = s("./src/redditGQL/operations/SubredditTopPredictors.json"),
				p = s("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				u = s("./src/redditGQL/operations/VotePrediction.json");
			const b = (e, {
					postId: t,
					optionId: s,
					coinPackageId: o,
					price: r
				}) => Object(n.a)(e, {
					...u,
					variables: {
						input: {
							postId: t,
							optionId: s,
							coinPackageId: o,
							price: r
						}
					}
				}),
				f = (e, {
					postId: t,
					optionId: s
				}) => Object(n.a)(e, {
					...l,
					variables: {
						input: {
							postId: t,
							optionId: s
						}
					}
				});
			var x;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const h = (e, {
					subredditId: t,
					period: s,
					top: o,
					includeCurrentRank: r,
					tournamentId: i
				}) => Object(n.a)(e, {
					...m,
					variables: {
						subredditId: t,
						period: s,
						top: o,
						includeCurrentRank: r,
						tournamentId: i
					}
				}),
				j = (e, t) => Object(n.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				O = (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				}),
				v = (e, t) => Object(n.a)(e, {
					...o,
					variables: {
						input: t
					}
				}),
				k = (e, t) => Object(n.a)(e, {
					...p,
					variables: {
						input: t
					}
				}),
				g = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}),
				w = (e, t) => Object(n.a)(e, {
					...a,
					variables: t
				}),
				E = (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				})
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
				d = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				c = s.n(d);
			const l = a.a.button("button", c.a),
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
					d = "function" == typeof t ? t : m(t),
					{
						meta: l
					} = n,
					p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(a, {
						className: Object(i.a)(c.a.icon, {
							[c.a.isLit]: e
						})
					}), o.a.createElement(d, {
						className: c.a.body
					}), l && o.a.createElement("div", {
						className: c.a.metaContainer
					}, l));
				return s ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, c.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, c.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, c.a.button),
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
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), d.a.approveIcon, e.className),
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
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), d.a.lockIcon, e.className),
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
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), d.a.removeIcon, e.className),
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
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), d.a.reportIcon, e.className),
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
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), d.a.spamIcon, e.className),
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
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
				return o.a.createElement("div", c({
					className: Object(i.a)(d.a.expandRightContainer, t)
				}, l), o.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: d.a.right
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
						experimentName: n.Wc
					}) === n.gd.Enabled
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Vc
					}) === n.fd.Enabled
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/predictions/index.ts"),
				r = s("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: o.a
				}
			});
			const i = e => {
					const t = (e => {
						var t, s;
						return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === s ? void 0 : s.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const s = Object(r.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							n = t.formData.polls,
							o = n.options.map(e => ({
								text: e.text
							})),
							i = {};
						return s.document ? i.richText = JSON.stringify({
							document: s.document
						}) : s.markdown && (i.markdown = s.markdown), {
							title: s.title,
							isLiveChat: s.isChatPost,
							isNsfw: s.isNSFW,
							isSpoiler: s.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: i,
							options: o
						}
					}) : []
				},
				a = e => {
					var t, s;
					return !!(null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === s ? void 0 : s.creation.length)
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
			e.exports = JSON.parse('{"id":"4ceef7ba971a"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"c6f811e2c3a3"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"ff7535e3fa1d"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"f50fa2609ff9"}')
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
			e.exports = JSON.parse('{"id":"c876eac99ed2"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.0f03ef72172aef98381e.js.map