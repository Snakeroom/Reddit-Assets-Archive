// https://www.redditstatic.com/desktop2x/ModerationDropdowns.45306869e1c0c6bb7afb.js
// Retrieved at 10/5/2021, 12:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./node_modules/uuid/index.js": function(e, t, n) {
			var o = n("./node_modules/uuid/v1.js"),
				s = n("./node_modules/uuid/v4.js"),
				r = s;
			r.v1 = o, r.v4 = s, e.exports = r
		},
		"./node_modules/uuid/v1.js": function(e, t, n) {
			var o, s, r = n("./node_modules/uuid/lib/rng-browser.js"),
				i = n("./node_modules/uuid/lib/bytesToUuid.js"),
				a = 0,
				c = 0;
			e.exports = function(e, t, n) {
				var d = t && n || 0,
					l = t || [],
					u = (e = e || {}).node || o,
					p = void 0 !== e.clockseq ? e.clockseq : s;
				if (null == u || null == p) {
					var m = r();
					null == u && (u = o = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]), null == p && (p = s = 16383 & (m[6] << 8 | m[7]))
				}
				var b = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : c + 1,
					x = b - a + (f - c) / 1e4;
				if (x < 0 && void 0 === e.clockseq && (p = p + 1 & 16383), (x < 0 || b > a) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				a = b, c = f, s = p;
				var h = (1e4 * (268435455 & (b += 122192928e5)) + f) % 4294967296;
				l[d++] = h >>> 24 & 255, l[d++] = h >>> 16 & 255, l[d++] = h >>> 8 & 255, l[d++] = 255 & h;
				var O = b / 4294967296 * 1e4 & 268435455;
				l[d++] = O >>> 8 & 255, l[d++] = 255 & O, l[d++] = O >>> 24 & 15 | 16, l[d++] = O >>> 16 & 255, l[d++] = p >>> 8 | 128, l[d++] = 255 & p;
				for (var j = 0; j < 6; ++j) l[d + j] = u[j];
				return t || i(l)
			}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return R
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "q", (function() {
				return G
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return z
			})), n.d(t, "f", (function() {
				return W
			})), n.d(t, "o", (function() {
				return V
			})), n.d(t, "p", (function() {
				return H
			})), n.d(t, "d", (function() {
				return q
			})), n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return $
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "c", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/lib/loadableAction/index.ts");
			const d = Object(c.a)(() => n.e("AchievementsActions").then(n.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			var l = n("./src/reddit/actions/login.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/presence.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/actions/vote.ts"),
				x = n("./src/reddit/endpoints/comment/index.tsx"),
				h = n("./src/reddit/helpers/commentList/index.ts"),
				O = n("./src/reddit/helpers/trackers/comment.ts"),
				j = n("./src/reddit/models/Comment/index.ts"),
				v = n("./src/reddit/models/Post/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/models/Vote/index.ts"),
				C = n("./src/reddit/selectors/comments.ts"),
				_ = n("./src/reddit/selectors/commentSelector.ts"),
				w = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				E = n("./src/reddit/selectors/moderatingComments.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/actions/comment/constants.ts");
			const y = {},
				R = Object(i.a)(P.o),
				N = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(I.K)(n())) return t(Object(l.k)()), void t(Object(u.k)({
						actionSource: u.a.Save,
						redirectUrl: Object(C.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const i = r.isSaved ? x.k : x.g;
					if (t(R({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await i(o(), e)).ok) {
						const n = r.isSaved ? s.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : s.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = s.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(b.f)({
							text: n,
							kind: g.b.Undo,
							buttonText: o,
							buttonAction: N(e)
						}))
					} else t(R({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, S = e => `viewing-comment-${e}`, T = o.a.telemetry.commentConsumedThreshold, M = e => async (t, n) => {
					const s = n();
					if (!Object(_.b)(s, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					O.g({
						state: s,
						commentId: e
					}), r.c.start(S(e));
					const i = setTimeout(() => O.a({
						state: s,
						commentId: e
					}), T);
					y[e] = i
				}, L = (e, t) => async (n, o) => {
					const s = o(),
						i = S(e);
					if (Object(_.b)(s, {
							commentId: e
						}) && r.c.has(i)) {
						const n = r.c.end(i);
						!t && n < T && (clearTimeout(y[e]), delete y[e])
					}
				}, D = Object(i.a)(P.x), F = Object(i.a)(P.w), B = Object(i.a)(P.v), A = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						i = r.moreComments.models[t],
						c = r.platform.currentPage,
						l = c && c.routeMatch,
						u = l && l.match,
						{
							partialPostId: m
						} = u ? u.params : null;
					if (!m) return;
					const b = Object(v.s)(m);
					n(D({
						moreCommentsId: i.id
					}));
					const f = await Object(x.e)(s(), b, {
						token: i.token
					}, Object(w.a)(r));
					if (f.ok) {
						const t = f.body,
							o = Object(h.a)(t, b, r);
						n(F({
							key: e,
							moreCommentsItem: i,
							shouldCollapse: o,
							...t
						}));
						const s = r.posts.models[b];
						let c;
						s && "subreddit" === s.belongsTo.type && t.comments && (c = s.belongsTo.id, await n(Object(a.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [s.id],
							skip: ["communityDetails", "subscription"],
							subredditId: c
						})));
						const l = f.body.comments,
							u = f.body.posts;
						await n(Object(p.b)(u, l, c)), await n(d(c, l))
					} else n(B({
						moreCommentsItem: i,
						...f.error
					}))
				}, G = Object(f.a)(h.b, k.a.upvoted), U = Object(f.a)(h.b, k.a.downvoted), z = Object(i.a)(P.j), W = Object(i.a)(P.i), Q = Object(i.a)(P.e), K = Object(i.a)(P.f), V = (Object(i.a)(P.c), Object(i.a)(P.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (o, s) => {
					const r = s(),
						i = Object(j.i)(e),
						a = Object(C.n)(r, {
							commentLink: i,
							commentsPageKey: t
						}),
						c = Object(E.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = a.depth;
					o(Q({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || n(e, !0), Object(m.d)()
				}), H = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(K({
						commentId: e,
						commentsPageKey: t
					}))
				}, q = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: o
				}) => async (s, r) => {
					const i = r(),
						a = Object(h.e)(t, e, n, i),
						c = Object(E.b)(i, {
							commentId: e.id,
							commentsPageKey: t
						});
					s(Q({
						commentId: a,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && o(a, !0), Object(m.d)()
				}, Z = Object(i.a)(P.r), J = e => t => t(Z({
					draftKey: e
				})), $ = Object(i.a)(P.a), X = Object(i.a)(P.E), Y = Object(i.a)(P.b), ee = Object(i.a)(P.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "b", (function() {
				return I
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				p = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				m = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/actions/comment/index.ts"),
				O = n("./src/reddit/actions/comment/constants.ts");
			const j = Object(r.a)(O.n),
				v = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(u.h)(o(), e)).ok && t((e => async t => {
						t(j({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(x.K)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.isLocked ? u.j : u.d;
					t(Object(h.i)({
						[e]: {
							isLocked: !s.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(h.i)({
						[e]: {
							isLocked: s.isLocked
						}
					}))
				}, k = Object(r.a)(O.F), C = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n(),
						r = s.features.comments.models[e],
						i = s.user.account ? s.user.account.displayText : null;
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
					})), (await Object(u.a)(o(), e)).ok || t(Object(h.i)({
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
				}, _ = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
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
					})), (await Object(u.f)(s(), e, t)).ok || n(Object(h.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(c.d)())
				}, w = e => async (t, n, {
					apiContext: o
				}) => {
					const s = n().features.comments.models[e];
					if (!s) return;
					const r = s.ignoreReports ? u.i : u.c;
					t(Object(h.i)({
						[e]: {
							ignoreReports: !s.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(h.i)({
						[e]: {
							ignoreReports: s.ignoreReports
						}
					}))
				}, E = (e, t, n) => async (r, i, {
					gqlContext: a
				}) => {
					const c = Object(f.b)(i(), {
						commentId: e
					});
					if (!c) return;
					const l = n === s.Zb.Snoozed,
						u = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(p.a)(a(), {
							input: u
						})).ok) r(Object(h.i)({
						[e]: {
							userReports: Object(m.a)(c.userReports, t, l)
						}
					}));
					else {
						const e = Object(d.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, I = (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const c = r(),
						d = c.features.comments.models[e];
					if (!d) return;
					const l = d.postId,
						p = c.postStickiedComments.data[l],
						m = s.g[t];
					o(Object(h.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.F.ADMIN,
							isMod: t === s.F.MODERATOR,
							isStickied: !!n
						}
					})), n && p && p !== e && o(Object(h.i)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(u.b)(a(), e, m, n || null)).ok ? n && o(k({
						id: e,
						postId: l,
						commentsPageKey: Object(i.a)(l, null, {
							sort: s.t.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(h.i)({
						[e]: {
							distinguishType: d.distinguishType,
							isAdmin: d.isAdmin,
							isMod: d.isMod,
							isStickied: d.isStickied
						}
					})), o(Object(h.i)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return P
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "o", (function() {
				return R
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "t", (function() {
				return z
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "i", (function() {
				return Q
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "p", (function() {
				return V
			})), n.d(t, "q", (function() {
				return H
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return J
			})), n.d(t, "h", (function() {
				return $
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/index.js"),
				r = n.n(s),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/endpoints/economics/predictions.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				b = n("./src/redditGQL/types.ts"),
				f = n("./src/reddit/actions/login.ts"),
				x = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/constants/modals.ts"),
				O = n("./src/reddit/selectors/experiments/econ/index.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				k = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				C = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(i.a)({
				features: {
					predictions: a.a
				}
			});
			const _ = Object(l.a)(C.e),
				w = Object(l.a)(C.i),
				E = Object(l.a)(C.l),
				I = Object(l.a)(C.h),
				P = Object(l.a)(C.b),
				y = (e, t, n, o) => async (s, r, {
					gqlContext: i
				}) => {
					const a = Object(v.K)(r()),
						c = await Object(u.j)(i(), {
							subredditId: e,
							period: t,
							top: n,
							includeCurrentRank: a,
							tournamentId: o
						});
					if (c.error || !c.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: d
					} = c.body.data;
					if (!d || !d.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = d, p = {
						subredditId: e,
						...l
					};
					return s(_(p)), p
				}, R = ({
					coinPackageId: e,
					optionId: t,
					postId: n,
					price: o
				}) => async (s, r, {
					gqlContext: i
				}) => {
					const a = await Object(u.o)(i(), {
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: o
					});
					return s(w({
						pollId: n,
						prediction: a,
						price: o
					})), a
				}, N = ({
					optionId: e,
					postId: t
				}) => async (n, o, {
					gqlContext: s
				}) => {
					const r = await Object(u.m)(s(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: i
						} = r.body.data;
					if (!(null == i ? void 0 : i.poll)) throw new Error("Failed to resolve prediction");
					return n(I({
						pollId: t,
						prediction: i.poll
					})), i.poll
				}, S = Object(l.a)(C.c), T = Object(l.a)(C.d), M = Object(l.a)(C.g), L = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						r = Object(j.B)(s, e),
						i = Object(k.j)(s, {
							subredditId: r
						}),
						a = Object(O.o)(s);
					if (i) return Object(k.f)(s, {
						subredditId: r
					});
					t(S({
						subredditId: r
					}));
					const c = await Object(u.k)(o(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: a
						}),
						d = {};
					c.forEach(e => {
						var t;
						(null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.length) && e.predictionPosts.forEach(e => {
							e && (d[e.id] = Object(p.e)(e))
						})
					});
					const l = c.map(e => Object(m.a)(e));
					return t(T({
						subredditId: r,
						tournaments: l
					})), t(M({
						posts: d,
						meta: s.meta
					})), l
				}, D = Object(l.a)(C.a), F = Object(l.a)(C.j), B = Object(l.a)(C.k), A = ({
					subredditId: e
				}) => async (t, n, {
					gqlContext: o
				}) => {
					const s = n(),
						r = Object(g.b)(s),
						i = Object(O.a)(s);
					if (!r) throw new Error("Failed to create tournament, no prediction drafts attached");
					const a = await Object(u.f)(o(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: r,
							currency: i ? b.c.Coins : b.c.Tokens
						}),
						{
							createPredictionTournament: c
						} = a.body.data;
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: d
					} = c;
					return t(T({
						subredditId: e,
						tournaments: [d]
					})), d
				}, G = (e, t) => async (n, o, {
					gqlContext: s
				}) => {
					var i;
					const a = Object(g.b)(o());
					if (!a) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const c = await Object(u.b)(s(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${r.a.v4()}`,
							subredditId: t,
							predictionDrafts: a
						}),
						{
							addPredictionDrafts: d
						} = c.body.data;
					if (null === (i = d.errors) || void 0 === i ? void 0 : i.length) throw new Error(d.errors[0].message);
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to create prediction");
					return d.tournament
				}, U = Object(l.a)(C.m), z = (e, t, n) => async (t, o, {
					gqlContext: s
				}) => {
					const r = await Object(u.n)(s(), {
							tournamentId: e,
							name: n
						}),
						{
							updatePredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(U(i.tournament)), i.tournament
				}, W = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = await Object(u.g)(o(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: r
						} = s.body.data;
					if (!r.tournament) throw new Error("Failed to update prediction name");
					return t(U(r.tournament)), r.tournament
				}, Q = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = await Object(u.h)(o(), {
						postId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: r
					} = s.body.data;
					if (!r.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return r.predictionChipPackages
				}, K = e => async (t, n, {
					gqlContext: o
				}) => {
					const s = await Object(u.i)(o(), {
						tournamentId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch token balance");
					const {
						identity: r
					} = s.body.data;
					if (!r.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return r.predictionTokens
				}, V = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: n,
					pollId: o,
					tournamentId: s,
					tournamentPostId: r
				}) => async i => {
					const a = await i(R({
						coinPackageId: e,
						optionId: t,
						postId: o,
						price: n
					}));
					return i(E({
						predictionId: o,
						selectedOptionId: t,
						tournamentId: s,
						tournamentPostId: r
					})), a
				}, H = e => async (t, n) => {
					const o = n();
					Object(v.K)(o) ? await t(Object(x.h)(h.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(f.i)())
				}, q = () => Object(x.g)(h.a.ECON_PREDICTIONS_PREMIUM_UPSELL), Z = e => async (t, n, {
					gqlContext: s
				}) => {
					try {
						const n = await Object(u.c)(s(), {
							postId: e
						});
						t(P({
							postId: e,
							prediction: n
						}));
						const r = Object(c.e)(o.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), d.b.SuccessMod);
						t(Object(c.f)(r))
					} catch {
						const e = Object(c.e)(o.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), d.b.Error);
						t(Object(c.f)(e))
					}
				};

			function J(e, t) {
				return async (n, o, {
					gqlContext: s
				}) => {
					const r = await Object(u.d)(s(), {
						postId: e,
						...t
					});
					return n(P({
						postId: e,
						prediction: r
					})), r
				}
			}
			const $ = e => async (t, n, {
				gqlContext: o
			}) => Object(u.l)(o(), {
				subredditId: e
			})
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/actions/economics/predictions/index.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const u = ({
				postId: e,
				closedAt: t
			}) => async n => {
				try {
					await n(Object(s.d)(e, {
						closedAt: t
					})), n(Object(a.f)({
						duration: a.a,
						kind: d.b.SuccessCommunity,
						text: l._("Updated", null, {
							hk: "4cncaA"
						})
					}))
				} catch {
					(e => e(Object(a.f)({
						duration: a.a,
						kind: d.b.Error,
						text: l._("Error: Failed to update prediction end time, please try again later", null, {
							hk: "MkaNA"
						})
					})))(n)
				}
			};

			function p(e, t) {
				return async n => {
					try {
						await n(Object(s.d)(e, {
							resolvedOptionId: t
						}));
						const o = Object(a.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), d.b.SuccessMod);
						n(Object(a.f)(o))
					} catch {
						const e = Object(a.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), d.b.Error);
						n(Object(a.f)(e))
					}
				}
			}
			const m = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				b = e => Object(i.h)(c.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				f = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: e
				})
		},
		"./src/reddit/actions/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = n("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				u = Object(o.a)(l),
				p = (e, t, n) => async (o, l, {
					apiContext: p
				}) => {
					const m = l();
					if (!Object(d.a)(m)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const f = await (async (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
						endpoint: Object(c.a)(`${e.apiUrl}/api/presence`),
						method: s.ib.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: n || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const n = e.body.present_user_fullnames || [],
							o = new Set(n),
							s = {};
						return t.forEach(e => {
							s[e] = o.has(e)
						}), {
							presentUsers: s
						}
					}))(p(), Array.from(b), n);
					o(u(f))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(a);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: o
			}) => t ? s.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || o < 1
				})
			}, n || o < 1 ? "" : Object(i.b)(o)) : null
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/Reports/index.tsx"),
				d = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/isPost.ts"),
				p = n("./src/reddit/helpers/trackers/modTools.ts"),
				m = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				b = n("./src/reddit/icons/fonts/Report/index.tsx"),
				f = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				x = n("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				h = n.n(x);
			const O = a.a.span("IgnoreIconContainer", h.a),
				j = a.a.span("ActiveIconContainer", h.a),
				v = a.a.wrapped(f.a, "ChevronDown", h.a),
				g = a.a.wrapped(b.a, "ActiveReportIcon", h.a),
				k = a.a.wrapped(m.a, "IgnoreReport", h.a),
				C = a.a.wrapped(b.a, "ReportIcon", h.a),
				_ = a.a.div("ReportsContainer", h.a),
				w = a.a.wrapped(d.c, "Button", h.a),
				E = a.a.wrapped(c.a, "Reports", h.a),
				I = a.a.div("NumReports", h.a),
				P = ({
					className: e,
					handleToggleExpando: t,
					isHistoricalReports: n,
					numReports: s,
					modReports: a,
					userReports: c,
					collapseReports: d,
					reportedThingId: l
				}) => r.a.createElement(_, {
					className: Object(i.a)(e, {
						[h.a.collapseReports]: d
					})
				}, d ? r.a.createElement(O, null, r.a.createElement(k, null)) : r.a.createElement(j, null, r.a.createElement(g, null)), d ? r.a.createElement(I, null, s) : r.a.createElement(E, {
					modReports: a,
					userReports: c,
					reportedThingId: l
				}), n ? r.a.createElement(w, {
					onClick: t,
					text: o.fbt._("old reports", null, {
						hk: "2IdZOv"
					})
				}, r.a.createElement(v, null)) : r.a.createElement(w, {
					onClick: t,
					text: d ? o.fbt._("Restore Reports", null, {
						hk: "2O219R"
					}) : o.fbt._("ignore reports", null, {
						hk: "48jlNW"
					})
				}, d ? r.a.createElement(C, null) : r.a.createElement(k, null)));
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.handleIgnoreReports = () => {
						let e;
						this.props.onIgnoreReports();
						const t = this.props.reportable.ignoreReports ? "restore_reports" : "ignore_reports";
						e = Object(u.a)(this.props.reportable.id) ? Object(p.h)(t, this.props.reportable.id) : Object(p.g)(t, this.props.reportable.id), this.props.sendEvent(e)
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
					return r.a.createElement("div", null, n ? r.a.createElement(P, {
						className: e,
						collapseReports: this.state.historicalReportsCollapsed,
						handleToggleExpando: this.handleToggleHistoricalReports,
						isHistoricalReports: !0,
						numReports: n,
						modReports: t.modReportsDismissed,
						userReports: t.userReportsDismissed,
						reportedThingId: t.id
					}) : r.a.createElement(P, {
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
			t.default = Object(l.c)(y)
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
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
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(o || (o = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			}));
			var o, s, r, i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = n.n(d),
				u = n("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				p = n.n(u);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(s || (s = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const m = {
					[a.a.Approve]: s.Approve,
					[a.a.Remove]: s.Remove,
					[a.a.Spam]: s.Spam,
					[a.a.Flair]: s.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default,
					[c.g.Search]: r.Default
				},
				f = e => {
					const t = m[e.flatlistItem],
						n = e.postLayout && b[e.postLayout],
						o = l.a[e.breakpointType],
						s = l.a[t],
						a = n ? l.a[n] : l.a[r.Default];
					return Object(i.a)(o, s, a)
				},
				x = e => {
					const t = e && b[e],
						n = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(n, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = n("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = n.n(b);
			const x = c.a.wrapped(l.a, "StyledDropdown", f.a),
				h = Object(i.a)(x),
				O = c.a.div("Separator", f.a),
				j = (e, t) => n => r.a.createElement("span", {
					className: Object(a.a)(f.a.IconWrapper, n.className)
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
					unreadNotifications: n,
					isOpen: s,
					sendEventWithName: i
				} = e, a = Object(u.c)(Object(p.b)("mod_queue"), `${o.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), c = Object(u.b)(j("message", n.hasUnreadModmail), `${o.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: s,
					tooltipId: m.a
				}, r.a.createElement(a, {
					href: "/r/mod/about/modqueue",
					onClick: () => i("mod_queue")
				}), r.a.createElement(O, null), r.a.createElement(c, {
					href: "https://mod.reddit.com/mail/all",
					isLit: n.hasUnreadModmail,
					onClick: () => i("mod_mail")
				}), r.a.createElement(O, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				i = () => null;
			t.b = Object(o.a)({
				ErrorComponent: i,
				getComponent: () => Object(s.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
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
				return w
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				f = n("./src/reddit/components/FlairSearch/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/selectors/moderatorPermissions.ts"),
				j = n("./src/reddit/selectors/postFlair.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				k = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				C = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				_ = n.n(C);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const w = (e, t = !1, n = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				E = Object(c.c)({
					flairData: j.d,
					subreddit: v.Q,
					isMod: (e, t) => !!Object(O.m)(e, t)
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
						subreddit: Object(g.subredditById)(t, this.props.subredditId)
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
					} = this.state, n = Object(k.c)(this.props.flairs) || null;
					return Object(k.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: o,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(m.a, {
						className: n
					}, i.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: h.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
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
						className: _.a.buttonsRow
					}, i.a.createElement(x.k, {
						disabled: !l,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.n, {
						className: _.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const P = Object(a.b)(E, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(I);
			t.a = Object(l.a)(Object(d.c)(P))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "g", (function() {
				return I
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Dropdown/Row.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				d = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				f = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				x = n.n(f);
			const h = r.a.wrapped(c.a, "Icon", x.a),
				O = r.a.wrapped(d.a, "Icon", x.a),
				j = r.a.wrapped(l.a, "Icon", x.a),
				v = r.a.wrapped(u.a, "Icon", x.a),
				g = r.a.wrapped(p.a, "Icon", x.a),
				k = r.a.wrapped(m.a, "Icon", x.a),
				C = () => s.a.createElement(a.a, {
					name: "mod_mute",
					className: x.a.Icon
				}),
				_ = () => s.a.createElement(a.a, {
					name: "calendar",
					className: x.a.Icon
				}),
				w = () => s.a.createElement(b.a, {
					className: x.a.svgIcon
				}),
				E = r.a.wrapped(i.b, "DropdownRow", x.a),
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postFlair.ts"),
				p = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/modals.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				j = n("./src/reddit/helpers/trackers/modTools.ts"),
				v = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				g = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/reddit/components/ModModeReports/helpers.ts"),
				w = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				E = n("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				P = n("./src/reddit/helpers/isCrosspost.ts"),
				y = n("./src/reddit/models/Flair/index.ts"),
				R = n("./src/reddit/models/Prediction/index.ts"),
				N = n("./src/reddit/selectors/experiments/econ/index.ts"),
				S = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				T = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				M = n.n(T);
			const L = (e, t) => Object(E.b)({
					breakpointType: E.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				D = () => void 0;
			var F = ({
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: n,
					isDistinguished: o,
					isModToMemberShareEnabled: i,
					isOverlay: a,
					isPostAuthor: c,
					isProfilePage: d,
					layout: l,
					modModeEnabled: u,
					onApprovePost: p,
					onCancelPrediction: m,
					onChangePredictionOutcome: b,
					onEditPredictionEnd: f,
					onDistinguishPost: x,
					onFlairPost: h,
					onLockPost: O,
					onNsfwPost: j,
					onOcPost: v,
					onCcPost: g,
					onRemovePost: k,
					onModToMemberShareOpened: E,
					onSpamPost: T,
					onStickyPost: F,
					onSpoilerPost: B,
					post: A
				}) => {
					var G, U, z, W;
					const Q = Object(r.e)(N.s),
						K = Object(r.e)(e => {
							var t;
							return (null === (t = A.pollData) || void 0 === t ? void 0 : t.isPrediction) && null !== A.pollData.resolvedOptionId && Object(N.p)(e)
						}),
						V = Object(r.e)(e => {
							var t;
							return (null === (t = A.pollData) || void 0 === t ? void 0 : t.isPrediction) && Object(N.o)(e)
						}),
						H = A.flair.filter(e => e.type !== y.f.Nsfw && e.type !== y.f.Spoiler).length > 0,
						q = Object(_.b)(A),
						Z = !(!A.approvedBy || !q),
						J = a ? void 0 : l,
						$ = Object(P.a)(A),
						X = u ? L : D;
					return s.a.createElement(S.g, null, n && s.a.createElement(s.a.Fragment, null, !A.isSponsored && s.a.createElement(s.a.Fragment, null, s.a.createElement(S.e, {
						className: X(w.a.Approve, J),
						displayText: Z ? C.fbt._("reapprove", null, {
							hk: "ZucfK"
						}) : A.approvedBy ? C.fbt._("approved", null, {
							hk: "nlSCc"
						}) : C.fbt._("approve", null, {
							hk: "4GoeOE"
						}),
						onClick: p
					}, s.a.createElement(S.a, null)), s.a.createElement(S.e, {
						className: X(w.a.Remove, J),
						displayText: A.isRemoved ? C.fbt._("removed", null, {
							hk: "cSGLt"
						}) : C.fbt._("remove", null, {
							hk: "4mKe0F"
						}),
						onClick: k
					}, s.a.createElement(S.i, null)), s.a.createElement(S.e, {
						className: X(w.a.Spam, J),
						displayText: A.isSpam ? C.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : C.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: T
					}, s.a.createElement(S.j, null))), e && s.a.createElement(S.e, {
						className: X(w.a.Flair, J),
						displayText: H ? C.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : C.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, s.a.createElement(S.k, null))), i && t && s.a.createElement(S.e, {
						displayText: C.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: E
					}, s.a.createElement(S.f, null)), !A.isRemoved && !d && s.a.createElement(I.a, {
						isSelected: A.isStickied,
						onClick: F,
						text: C.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), V && s.a.createElement(S.e, {
						disabled: Boolean((null === (G = A.pollData) || void 0 === G ? void 0 : G.resolvedOptionId) || (null === (U = A.pollData) || void 0 === U ? void 0 : U.predictionStatus) === R.b.Cancelled),
						displayText: C.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: m
					}, s.a.createElement(S.i, null)), Q && (null === (z = A.pollData) || void 0 === z ? void 0 : z.isPrediction) && !(null === (W = A.pollData) || void 0 === W ? void 0 : W.resolvedOptionId) && s.a.createElement(S.e, {
						displayText: C.fbt._("Update the end date", null, {
							hk: "FjDpu"
						}),
						onClick: f
					}, s.a.createElement(S.b, null)), K && s.a.createElement(S.e, {
						textClassName: M.a.text,
						onClick: b,
						displayText: C.fbt._("Change the outcome", null, {
							hk: "2FH6j9"
						})
					}, s.a.createElement(S.c, null)), c && s.a.createElement(I.a, {
						isSelected: o,
						onClick: x,
						text: C.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), s.a.createElement(I.a, {
						isSelected: A.isLocked,
						onClick: O,
						text: C.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !$ && s.a.createElement(I.a, {
						isSelected: A.isOriginalContent,
						onClick: v,
						text: C.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), s.a.createElement(I.a, {
						isSelected: A.isNSFW,
						onClick: j,
						text: C.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), t && "subreddit" === A.belongsTo.type && s.a.createElement(S.e, {
						displayText: C.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: g
					}, s.a.createElement(S.d, null)), s.a.createElement(I.a, {
						isSelected: A.isSpoiler,
						onClick: B,
						text: C.fbt._("Mark as spoiler", null, {
							hk: "3ef0MU"
						})
					}))
				},
				B = n("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				A = n.n(B);
			const G = Object(x.u)({
					isProfilePage: x.I,
					pageLayer: e => e
				}),
				U = Object(i.c)({
					layout: x.Q,
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(k.b)(t)(e),
					isModToMemberShareEnabled: O.d.modToMemberShare
				}),
				z = Object(r.b)(U, (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(l.s)(t.id)),
					onCancelPrediction: () => e(Object(c.c)(t.id)),
					onChangePredictionOutcome: () => e(Object(c.d)(t.id)),
					onEditPredictionEnd: () => e(Object(c.e)(t.id)),
					onDistinguishPost: n => e(Object(l.v)(t.id, n)),
					onFlairChanged: (n, o) => e(Object(u.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
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
				W = Object(p.a)(h.a);
			t.default = G(z(Object(b.c)(({
				canEditFlair: e,
				hasModFullPerms: t,
				hasModPostPerms: n,
				isDropdownOpen: o,
				isModToMemberShareEnabled: r,
				isOverlay: i,
				isPostAuthor: c,
				isProfilePage: d,
				layout: l,
				modModeEnabled: u,
				onApprovePost: p,
				onCancelPrediction: b,
				onChangePredictionOutcome: f,
				onEditPredictionEnd: x,
				onDistinguishPost: h,
				onFlairPost: O,
				onLockPost: k,
				onNsfwPost: C,
				onOcPost: _,
				onCcPost: w,
				onRemovePost: E,
				onModToMemberShareOpened: I,
				onSpamPost: P,
				onSpoilerPost: y,
				onStickyPost: R,
				post: N,
				sendEvent: S,
				tooltipId: T
			}) => {
				const M = N.distinguishType === a.F.MODERATOR,
					L = M ? a.F.NONE : a.F.MODERATOR,
					D = Object(m.b)(N.id, i);
				return s.a.createElement(W, {
					className: A.a.dropdown,
					isOpen: o,
					tooltipId: T
				}, s.a.createElement(F, {
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: n,
					isDistinguished: M,
					isModToMemberShareEnabled: r,
					isOverlay: i,
					isPostAuthor: c,
					isProfilePage: d,
					layout: l,
					modModeEnabled: u,
					onApprovePost: () => {
						p(), S(Object(j.j)("approve", N.id))
					},
					onCancelPrediction: () => {
						b(), S(Object(v.a)(N.id))
					},
					onChangePredictionOutcome: () => {
						f(), S(Object(v.b)(N.id))
					},
					onEditPredictionEnd: () => {
						x(), S(Object(v.c)(N.id))
					},
					onRemovePost: () => {
						E(), Object(g.b)(N) ? S(Object(v.d)(N.id)) : S(Object(j.j)("remove", N.id))
					},
					onSpamPost: () => {
						P(), S(Object(j.j)("spam", N.id))
					},
					onDistinguishPost: () => {
						h(L), S(Object(j.j)(M ? "undistinguish" : "distinguish", N.id))
					},
					onFlairPost: () => {
						O(D), S(Object(j.j)("post_flair", N.id))
					},
					onLockPost: () => {
						k(), S(Object(j.j)(N.isLocked ? "unlock" : "lock", N.id))
					},
					onNsfwPost: () => {
						C(), S(Object(j.j)(N.isNSFW ? "unmark_nsfw" : "mark_nsfw", N.id))
					},
					onOcPost: () => {
						_(), S(Object(j.j)(N.isOriginalContent ? "unmark_original_content" : "mark_original_content", N.id))
					},
					onCcPost: () => {
						w()
					},
					onModToMemberShareOpened: () => {
						I(), S(Object(j.j)("mod_to_member_share", N.id))
					},
					onSpoilerPost: () => {
						y(), S(Object(j.j)(N.isSpoiler ? "unmark_spoiler" : "mark_spoiler", N.id))
					},
					onStickyPost: () => {
						R(), S(Object(j.j)(N.isStickied ? "unsticky" : "sticky", N.id))
					},
					post: N
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/trackers/modTools.ts"),
				O = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				j = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				g = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				_ = n.n(C);
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => `SnoozableReport--${t}--${e}`, I = Object(i.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(k.b)(E(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: E(t.reason, t.reportedThingId)
				})),
				toggleSnooze: n => {
					Object(x.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, n)) : e(Object(l.ab)(t.reportedThingId, t.reason, n))
				}
			})), P = Object(p.a)(b.a);
			class y extends s.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.Zb.None : c.Zb.Snoozed;
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
						openDropdown: o,
						isDropdownOpen: r,
						isSnoozed: i
					} = this.props, a = E(e, n);
					return s.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, s.a.createElement(f.b, {
						id: a,
						className: _.a.DropdownLabelContainer,
						onClick: o
					}, s.a.createElement("label", {
						htmlFor: a,
						className: _.a.DropdownLabel
					}, i ? "Reporter snoozed" : `${t}: ${e}`, r ? s.a.createElement(j.a, null) : s.a.createElement(O.a, null))), s.a.createElement(P, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, s.a.createElement("button", {
						className: _.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, s.a.createElement("div", {
						className: _.a.SnoozeButtonContent
					}, i ? s.a.createElement(s.a.Fragment, null, s.a.createElement(g.a, null), w._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : s.a.createElement(s.a.Fragment, null, s.a.createElement(v.a, null), w._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var R = I(Object(m.c)(y)),
				N = n("./src/reddit/components/Reports/index.m.less"),
				S = n.n(N);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = r.a.div("ReportText", S.a), L = r.a.div("ReportsTitle", S.a);

			function D(e) {
				const {
					className: t,
					modReports: n,
					userReports: o,
					reportedThingId: r
				} = e;
				return s.a.createElement("div", {
					className: t
				}, n && n.length > 0 && s.a.createElement("div", {
					className: S.a.Reports
				}, s.a.createElement(L, null, T._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), n.map(([e, t]) => s.a.createElement(M, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && s.a.createElement("div", {
					className: S.a.Reports
				}, s.a.createElement(L, null, T._("User Reports", null, {
					hk: "2KeCLz"
				})), s.a.createElement("div", {
					className: S.a.UserReports
				}, o.map(([e, t, n, o]) => void 0 !== n && o ? s.a.createElement(R, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: n
				}) : s.a.createElement(M, {
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
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = n.n(a);
			const d = e => s.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && s.a.createElement("span", {
					className: Object(r.a)(c.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = i.a.wrapped(d, "ApproveButton", c.a),
				u = i.a.wrapped(d, "RemoveButton", c.a),
				p = e => s.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
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
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, s.a.createElement(a.a, {
					className: d.a.expandRight
				}, s.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				p = ({
					className: e,
					...t
				}) => s.a.createElement(u, l({
					className: Object(r.a)(d.a.postCheckboxMenuItem, e)
				}, t))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var o = n("./node_modules/lodash/throttle.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				f = n.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class h extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
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
						className: n
					}, e.children), i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(u.a, x({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(f.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(l.a, {
						className: f.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
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
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				r = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = n.n(r);
			t.a = o.a.wrapped(s.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return p
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
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return k
			}));
			var o = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				m = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: s.ib.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				O = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: s.ib.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n, i) => {
					let a = Object(c.a)(Object(u.a)(Object(l.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return i && (a = Object(d.a)(a)), Object(r.a)(e, {
						data: n,
						endpoint: a,
						method: s.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				k = (e, t, n, o) => Object(r.a)(Object(i.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: s.ib.POST,
					data: {
						id: t,
						sticky: o
					}
				})
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "o", (function() {
				return j
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "l", (function() {
				return T
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = n("./src/redditGQL/operations/CancelPrediction.json"),
				a = n("./src/redditGQL/operations/ChangePrediction.json"),
				c = n("./src/redditGQL/operations/ChangePredictionVote.json"),
				d = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				l = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				u = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = n("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				m = n("./src/redditGQL/operations/GetPredictionToken.json"),
				b = n("./src/redditGQL/operations/GetTournaments.json"),
				f = n("./src/redditGQL/operations/ResolvePrediction.json"),
				x = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				h = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				O = n("./src/redditGQL/operations/VotePrediction.json");
			const j = async (e, {
				postId: t,
				optionId: n,
				coinPackageId: r,
				price: i
			}) => {
				var a;
				const c = await Object(o.a)(e, {
					...O,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: r,
							price: i
						}
					}
				});
				if (!Object(s.c)(c) || c.error || !(null === (a = c.body.data.votePrediction) || void 0 === a ? void 0 : a.ok)) throw new Error("Failed to make prediction");
				return c.body.data.votePrediction.poll
			}, v = (e, {
				postId: t,
				optionId: n
			}) => Object(o.a)(e, {
				...f,
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			});
			var g;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(g || (g = {}));
			const k = (e, {
					subredditId: t,
					period: n,
					top: s,
					includeCurrentRank: r,
					tournamentId: i
				}) => Object(o.a)(e, {
					...x,
					variables: {
						subredditId: t,
						period: n,
						top: s,
						includeCurrentRank: r,
						tournamentId: i
					}
				}),
				C = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				_ = async (e, t) => {
					const n = await Object(o.a)(e, {
						...b,
						variables: t
					});
					if (!Object(s.c)(n) || n.error) throw new Error("Failed to fetch tournaments");
					return n.body.data.subredditInfoByName.predictionTournaments || []
				}, w = (e, t) => Object(o.a)(e, {
					...r,
					variables: {
						input: t
					}
				}), E = (e, t) => Object(o.a)(e, {
					...h,
					variables: {
						input: t
					}
				}), I = (e, t) => Object(o.a)(e, {
					...l,
					variables: {
						input: t
					}
				}), P = (e, t) => Object(o.a)(e, {
					...u,
					variables: t
				}), y = (e, t) => Object(o.a)(e, {
					...m,
					variables: t
				}), R = async (e, t) => {
					const n = await Object(o.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(s.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, N = async (e, {
					postId: t
				}) => {
					var n, r;
					const a = await Object(o.a)(e, {
						...i,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(s.c)(a) || !(null === (n = a.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (r = a.body.data.cancelPrediction) || void 0 === r ? void 0 : r.poll)) throw new Error("Unable to cancel prediction");
					return a.body.data.cancelPrediction.poll
				}, S = async (e, t) => {
					var n, r;
					const i = await Object(o.a)(e, {
						...c,
						variables: {
							input: t
						}
					});
					if (!Object(s.c)(i) || !(null === (n = i.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (r = i.body.data.changePredictionVote) || void 0 === r ? void 0 : r.poll)) throw new Error("Unable to change prediction.");
					return i.body.data.changePredictionVote.poll
				}, T = async (e, t) => {
					const n = await Object(o.a)(e, {
						...p,
						variables: t
					});
					return !!Object(s.c)(n) && n.body.data.identity.isPredictionCreationAllowed
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
				return p
			})), n.d(t, "c", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = n.n(c);
			const l = a.a.button("button", d.a),
				u = e => t => s.a.createElement("div", {
					className: t.className
				}, e);

			function p(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function m(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, o) {
				const a = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: l
					} = o,
					p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(a, {
						className: Object(i.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), s.a.createElement(c, {
						className: d.a.body
					}), l && s.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return n ? e => s.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? s.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : s.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(i.a)(e.className, d.a.button),
					onClick: e.onClick
				}, p(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var o = n("./src/telemetry/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...s.defaults(e),
					profile: s.profile(e),
					post: s.post(e, t),
					media: s.media(e, t),
					subreddit: s.subreddit(e),
					comment: s.comment(e, t)
				}),
				i = ({
					state: e,
					commentId: t
				}) => Object(o.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...s.defaults(e),
					profile: s.profile(e),
					post: s.post(e, t),
					media: s.media(e, t),
					subreddit: s.subreddit(e),
					comment: s.comment(e, t)
				}),
				a = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: s.user(t),
					subreddit: s.subreddit(t),
					post: s.post(t, e),
					actionInfo: s.actionInfo(t),
					app: s.app(t),
					referrer: s.referrer(t),
					session: s.session(t)
				}),
				c = e => t => ({
					source: "comment_composer",
					action: "view",
					noun: "upvote_checkbox",
					...s.defaults(t),
					subreddit: s.subreddit(t),
					post: s.post(t, e),
					comment: s.comment(t, e)
				}),
				d = e => t => ({
					source: "comment_composer",
					action: "submit",
					noun: "upvote_checkbox",
					...s.defaults(t),
					subreddit: s.subreddit(t),
					post: s.post(t, e),
					comment: s.comment(t, e)
				}),
				l = e => t => ({
					source: "comment_composer",
					action: "select",
					noun: "upvote_checkbox",
					...s.defaults(t),
					subreddit: s.subreddit(t),
					post: s.post(t, e),
					comment: s.comment(t, e)
				}),
				u = e => t => ({
					source: "comment_composer",
					action: "deselect",
					noun: "upvote_checkbox",
					...s.defaults(t),
					subreddit: s.subreddit(t),
					post: s.post(t, e),
					comment: s.comment(t, e)
				})
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					...Object(o.defaults)(e),
					post: Object(o.post)(e, t),
					predictions: Object(o.predictions)(e, t),
					subreddit: Object(o.subreddit)(e)
				}),
				r = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				i = e => t => ({
					...s(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				a = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				c = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				d = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				l = e => t => ({
					...s(t, e),
					source: "prediction_change_outcome",
					action: "click",
					noun: "confirm"
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			const r = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: o,
					widthLeft: r,
					gutter: a,
					...l
				} = e;
				return s.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: a
					}
				}, Array.isArray(n) && n[0]), s.a.createElement("div", {
					className: c.a.right
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
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: o.Ed
					}) === o.Pd.Enabled
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: o.Dd
					}) === o.Od.Enabled
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/predictions/index.ts"),
				r = n("./src/reddit/selectors/postCreations.ts");
			Object(o.a)({
				features: {
					predictions: s.a
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
							o = t.formData.polls,
							s = o.options.map(e => ({
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
							votingEndsAt: o.endDate.toISOString(),
							body: i,
							options: s
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
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const o = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const o = e.features.comments.models[t];
					return !!o && ("computedCollapsed" in o ? !!o.computedCollapsed : o.collapsedBecauseCrowdControl ? !e.modModeEnabled : o.collapsed)
				},
				s = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"90a9ac95262d"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(e) {
			e.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"63b8ae32b6ea"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"0a5a0b11accd"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(e) {
			e.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"c149434123b1"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"70baf378030a"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.45306869e1c0c6bb7afb.js.map