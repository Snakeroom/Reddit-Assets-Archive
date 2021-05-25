// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.4dfa49ce9f43911c9772.js
// Retrieved at 5/25/2021, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/graphql/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"9995fe64fd5a"}')
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return _
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "q", (function() {
				return z
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "f", (function() {
				return $
			})), s.d(t, "o", (function() {
				return V
			})), s.d(t, "p", (function() {
				return Z
			})), s.d(t, "d", (function() {
				return J
			})), s.d(t, "a", (function() {
				return Q
			})), s.d(t, "b", (function() {
				return X
			})), s.d(t, "n", (function() {
				return G
			})), s.d(t, "c", (function() {
				return W
			})), s.d(t, "k", (function() {
				return Y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/helpers/async.ts"),
				i = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				a = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/presence.ts"),
				u = s("./src/reddit/actions/shortcuts/utils.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/actions/vote.ts"),
				f = s("./src/reddit/endpoints/comment/index.tsx"),
				O = s("./src/reddit/helpers/commentList/index.ts"),
				j = s("./src/reddit/helpers/trackers/comment.ts"),
				x = s("./src/reddit/models/Comment/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				w = s("./src/reddit/selectors/comments.ts"),
				R = s("./src/reddit/selectors/commentSelector.ts"),
				y = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				C = s("./src/reddit/selectors/moderatingComments.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/actions/comment/constants.ts");
			const I = {},
				_ = Object(d.a)(E.o),
				k = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(S.J)(s())) return t(Object(a.j)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(w.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const d = r.isSaved ? f.k : f.g;
					if (t(_({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await d(n(), e)).ok) {
						const s = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							n = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(p.f)({
							text: s,
							kind: v.b.Undo,
							buttonText: n,
							buttonAction: k(e)
						}))
					} else t(_({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, T = e => `viewing-comment-${e}`, A = n.a.telemetry.commentConsumedThreshold, P = e => async (t, s) => {
					const o = s();
					if (!Object(R.a)(o, {
							commentId: e
						}) || Math.random() > n.a.telemetry.commentSampleRate) return;
					j.c({
						state: o,
						commentId: e
					}), r.c.start(T(e));
					const d = setTimeout(() => j.a({
						state: o,
						commentId: e
					}), A);
					I[e] = d
				}, D = (e, t) => async (s, n) => {
					const o = n(),
						d = T(e);
					if (Object(R.a)(o, {
							commentId: e
						}) && r.c.has(d)) {
						const s = r.c.end(d);
						!t && s < A && (clearTimeout(I[e]), delete I[e])
					}
				}, U = Object(d.a)(E.x), B = Object(d.a)(E.w), N = Object(d.a)(E.v), L = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
						d = r.moreComments.models[t],
						a = r.platform.currentPage,
						l = a && a.routeMatch,
						u = l && l.match,
						{
							partialPostId: p
						} = u ? u.params : null;
					if (!p) return;
					const b = Object(h.s)(p);
					s(U({
						moreCommentsId: d.id
					}));
					const j = await Object(f.e)(o(), b, {
						token: d.token
					}, Object(y.a)(r));
					if (j.ok) {
						const t = j.body,
							n = Object(O.a)(t, b, r);
						s(B({
							key: e,
							moreCommentsItem: d,
							shouldCollapse: n,
							...t
						}));
						const o = r.posts.models[b];
						let a;
						o && "subreddit" === o.belongsTo.type && t.comments && (a = o.belongsTo.id, await s(Object(c.a)({
							commentIds: Object.keys(j.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const l = j.body.comments,
							u = j.body.posts;
						await s(Object(m.b)(u, l, a)), await s(Object(i.a)(a, l))
					} else s(N({
						moreCommentsItem: d,
						...j.error
					}))
				}, z = Object(b.a)(O.b, g.a.upvoted), F = Object(b.a)(O.b, g.a.downvoted), M = Object(d.a)(E.j), $ = Object(d.a)(E.i), K = Object(d.a)(E.e), H = Object(d.a)(E.f), V = (Object(d.a)(E.c), Object(d.a)(E.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (n, o) => {
					const r = o(),
						d = Object(x.h)(e),
						c = Object(w.n)(r, {
							commentLink: d,
							commentsPageKey: t
						}),
						i = Object(C.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = c.depth;
					n(K({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || s(e, !0), Object(u.d)()
				}), Z = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s(H({
						commentId: e,
						commentsPageKey: t
					}))
				}, J = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: n
				}) => async (o, r) => {
					const d = r(),
						c = Object(O.e)(t, e, s, d),
						i = Object(C.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(K({
						commentId: c,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === s && n(c, !0), Object(u.d)()
				}, q = Object(d.a)(E.r), Q = e => t => t(q({
					draftKey: e
				})), X = Object(d.a)(E.a), G = Object(d.a)(E.E), W = Object(d.a)(E.b), Y = Object(d.a)(E.u)
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
				return R
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "b", (function() {
				return E
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makeCommentsPageKey/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/actions/comment/constants.ts");
			const h = Object(r.a)(x.n),
				v = e => async (t, s, {
					apiContext: n
				}) => {
					s().features.comments.models[e] && (await Object(m.h)(n(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, s, {
					apiContext: n
				}) => {
					if (!Object(O.J)(s())) return void t(Object(c.i)(l.a.LOGIN_MODAL_ID));
					const o = s().features.comments.models[e];
					if (!o) return;
					const r = o.isLocked ? m.j : m.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await r(n(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, w = Object(r.a)(x.F), R = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s(),
						r = o.features.comments.models[e],
						d = o.user.account ? o.user.account.displayText : null;
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
					})), (await Object(m.a)(n(), e)).ok || t(Object(j.i)({
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
				}, y = (e, t) => async (s, n, {
					apiContext: o
				}) => {
					const r = n(),
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
					})), (await Object(m.f)(o(), e, t)).ok || s(Object(j.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(i.d)())
				}, C = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s().features.comments.models[e];
					if (!o) return;
					const r = o.ignoreReports ? m.i : m.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await r(n(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, S = (e, t, s) => async (r, d, {
					gqlContext: c
				}) => {
					const i = Object(f.a)(d(), {
						commentId: e
					});
					if (!i) return;
					const l = s === o.Ub.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(c(), {
							input: m
						})).ok) r(Object(j.i)({
						[e]: {
							userReports: Object(p.a)(i.userReports, t, l)
						}
					}));
					else {
						const e = Object(a.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, E = (e, t, s) => async (n, r, {
					apiContext: c
				}) => {
					const i = r(),
						a = i.features.comments.models[e];
					if (!a) return;
					const l = a.postId,
						u = i.postStickiedComments.data[l],
						p = o.g[t];
					n(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.C.ADMIN,
							isMod: t === o.C.MODERATOR,
							isStickied: !!s
						}
					})), s && u && u !== e && n(Object(j.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(c(), e, p, s || null)).ok ? s && n(w({
						id: e,
						postId: l,
						commentsPageKey: Object(d.a)(l, null, {
							sort: o.r.CONFIDENCE,
							...i.platform.currentPage.queryParams
						})
					})) : (n(Object(j.i)({
						[e]: {
							distinguishType: a.distinguishType,
							isAdmin: a.isAdmin,
							isMod: a.isMod,
							isStickied: a.isStickied
						}
					})), n(Object(j.i)({
						[u]: {
							isStickied: i.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				r = s("./src/graphql/operations/SubredditUserAchievements.json"),
				d = s("./src/lib/makeGqlRequest/index.ts");
			var c = s("./src/reddit/selectors/experiments/econ/powerupsAchievementFlair.ts"),
				i = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/powerups/index.ts"),
				l = s("./src/reddit/actions/gold/powerups.ts"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/actions/economics/powerups/constants.ts");
			Object(i.a)({
				features: {
					powerups: a.a
				}
			});
			const p = Object(n.a)(u.d),
				b = (e, t) => async (s, n, {
					gqlContext: c
				}) => {
					try {
						const n = await (async (e, t, s) => {
							const n = await Object(d.a)(e, {
								...r,
								variables: {
									subredditId: t,
									redditorIds: s
								}
							});
							if (!n.ok) throw new Error("Unable to fetch user achievements");
							return n.body.data.subredditInfoById
						})(c(), e, t);
						await s(p(n))
					} catch (i) {
						o.c.captureException(i)
					}
				}, f = (e, t) => async (s, n) => {
					if (!e) return;
					let o = n();
					if (await s(Object(l.i)(e, {
							fullData: !0
						})), o = n(), !Object(c.a)(o) || !Object(m.g)(o, {
							subredditId: e
						})) return;
					const r = new Set;
					t && Object.values(t).map(e => {
						const {
							authorId: t
						} = e;
						(null == t ? void 0 : t.trim()) && r.add(t)
					}), r.size && await s(b(e, Array.from(r)))
				}
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return d
			}));
			const n = 120,
				o = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				r = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				d = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED"
		},
		"./src/reddit/actions/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = s("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				m = Object(n.a)(l),
				u = (e, t, s) => async (n, l, {
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
					const f = await (async (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/presence`),
						method: o.eb.POST,
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
					}))(u(), Array.from(b), s);
					n(m(f))
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
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				g = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				R = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = s.n(R);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = (e, t) => `SnoozableReport--${t}--${e}`, E = Object(r.b)(() => Object(c.c)({
				isDropdownOpen: (e, t) => Object(w.b)(S(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: S(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(O.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, s)) : e(Object(l.Y)(t.reportedThingId, t.reason, s))
				}
			})), I = Object(u.a)(b.a);
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.Ub.None : i.Ub.Snoozed;
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
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: d
					} = this.props, c = S(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: c,
						className: y.a.DropdownLabelContainer,
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: c,
						className: y.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, r ? o.a.createElement(h.a, null) : o.a.createElement(x.a, null))), o.a.createElement(I, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: y.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: y.a.SnoozeButtonContent
					}, d ? o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, null), C._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, null), C._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var k = E(Object(p.c)(_)),
				T = s("./src/reddit/featureFlags/index.ts"),
				A = s("./src/reddit/components/Reports/index.m.less"),
				P = s.n(A);
			const {
				fbt: D
			} = s("./node_modules/fbt/lib/FbtPublic.js"), U = d.a.div("ReportText", P.a), B = d.a.div("ReportsTitle", P.a);

			function N(e) {
				const {
					className: t,
					modReports: s,
					userReports: n,
					reportedThingId: d
				} = e, c = Object(r.e)(e => T.d.enableSnoozableReport(e));
				return o.a.createElement("div", {
					className: t
				}, s && s.length > 0 && o.a.createElement("div", {
					className: P.a.Reports
				}, o.a.createElement(B, null, D._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => o.a.createElement(U, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), n && n.length > 0 && o.a.createElement("div", {
					className: P.a.Reports
				}, o.a.createElement(B, null, D._("User Reports", null, {
					hk: "2KeCLz"
				})), o.a.createElement("div", {
					className: P.a.UserReports
				}, n.map(([e, t, s, n]) => c && void 0 !== s && n ? o.a.createElement(k, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: d,
					isSnoozed: s
				}) : o.a.createElement(U, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = s("./src/reddit/controls/Dropdown/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				u = s("./src/reddit/components/Reports/index.tsx"),
				p = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				f = s("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				O = s.n(f);
			const j = c.a.wrapped(b.a, "Footer", O.a),
				x = c.a.wrapped(p.c, "FooterButton", O.a);
			var h = e => o.a.createElement("div", null, o.a.createElement(u.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && o.a.createElement(j, null, o.a.createElement(x, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? m.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : m.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				v = s("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				g = s.n(v);
			const w = c.a.wrapped(a.a, "StyledDropdown", g.a),
				R = Object(d.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(l.b)(t)(e)
				}),
				y = Object(r.b)(R),
				C = Object(i.a)(w),
				S = y(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						s = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						n = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return o.a.createElement(C, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, o.a.createElement(h, {
						ignoreReports: e.model.ignoreReports,
						modReports: s,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: n,
						reportedThingId: e.model.id
					}))
				});
			t.default = S
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
				return x
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return w
			}));
			var n = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				c = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: o.eb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				x = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.eb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, s, d) => {
					let c = Object(m.a)(Object(l.a)(`${n.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return d && (c = Object(a.a)(c)), Object(r.a)(e, {
						data: s,
						endpoint: c,
						method: o.eb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				w = (e, t, s, n) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: o.eb.POST,
					data: {
						id: t,
						sticky: n
					}
				})
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
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
				d = ({
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
				c = e => t => ({
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
				d = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = s.n(d);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(c.a.clock, e.className),
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
				d = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = s.n(d);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/gold/constants.ts");
			const r = {};
			var d = s("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {};
			t.a = Object(n.c)({
				subredditAchievements: (e = r, t) => {
					switch (t.type) {
						case o.nb:
							const {
								subredditId: s, subredditAchievementFlairs: n
							} = t.payload, r = n.reduce((e, t) => ({
								...e,
								[t.type]: t
							}), e[s] || {});
							return {
								...e, [s]: r
							};
						default:
							return e
					}
				},
				subredditUserAchievements: (e = c, t) => {
					var s, n;
					switch (t.type) {
						case d.d:
							const {
								id: o, userAchievementFlairsByRedditorIds: r
							} = t.payload;
							let c = e[o] || {};
							for (const {
									redditorId: e,
									userAchievementFlairs: t
								} of r) {
								const o = t.map(({
										type: e
									}) => e),
									r = null === (s = t.find(({
										isPreferred: e
									}) => e)) || void 0 === s ? void 0 : s.type,
									d = (null === (n = t.find(({
										type: e
									}) => "POWERUPS_SUPPORTER" === e)) || void 0 === n ? void 0 : n.type) || null;
								c = {
									...c,
									[e]: {
										achievementTypes: o,
										preferredType: r,
										supporterType: d
									}
								}
							}
							return {
								...e, [o]: c
							};
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/experiments/econ/powerupsAchievementFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(n.xb)
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Ec
					}) === n.Oc.Enabled
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Dc
					}) === n.Nc.Enabled
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.4dfa49ce9f43911c9772.js.map