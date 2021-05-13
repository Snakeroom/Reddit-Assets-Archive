// https://www.redditstatic.com/desktop2x/ModerationDropdowns.64a1ac1bec335035fccd.js
// Retrieved at 5/13/2021, 1:30:26 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return I
			})), s.d(t, "m", (function() {
				return M
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "q", (function() {
				return A
			})), s.d(t, "j", (function() {
				return B
			})), s.d(t, "g", (function() {
				return z
			})), s.d(t, "f", (function() {
				return U
			})), s.d(t, "o", (function() {
				return W
			})), s.d(t, "p", (function() {
				return G
			})), s.d(t, "d", (function() {
				return V
			})), s.d(t, "a", (function() {
				return X
			})), s.d(t, "b", (function() {
				return J
			})), s.d(t, "n", (function() {
				return Q
			})), s.d(t, "c", (function() {
				return q
			})), s.d(t, "k", (function() {
				return $
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/economics/helpers/async.ts"),
				c = s("./src/reddit/actions/login.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/presence.ts"),
				m = s("./src/reddit/actions/shortcuts/utils.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/actions/vote.ts"),
				b = s("./src/reddit/endpoints/comment/index.tsx"),
				x = s("./src/reddit/helpers/commentList/index.ts"),
				h = s("./src/reddit/helpers/trackers/comment.ts"),
				f = s("./src/reddit/models/Comment/index.ts"),
				C = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				k = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = s("./src/reddit/selectors/moderatingComments.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/actions/comment/constants.ts");
			const R = {},
				I = Object(a.a)(E.o),
				M = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(w.J)(s())) return t(Object(c.j)()), void t(Object(d.k)({
						actionSource: d.a.Save,
						redirectUrl: Object(j.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? b.k : b.g;
					if (t(I({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await a(o(), e)).ok) {
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
							kind: O.b.Undo,
							buttonText: o,
							buttonAction: M(e)
						}))
					} else t(I({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, y = e => `viewing-comment-${e}`, S = o.a.telemetry.commentConsumedThreshold, N = e => async (t, s) => {
					const n = s();
					if (!Object(g.a)(n, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					h.c({
						state: n,
						commentId: e
					}), r.c.start(y(e));
					const a = setTimeout(() => h.a({
						state: n,
						commentId: e
					}), S);
					R[e] = a
				}, P = (e, t) => async (s, o) => {
					const n = o(),
						a = y(e);
					if (Object(g.a)(n, {
							commentId: e
						}) && r.c.has(a)) {
						const s = r.c.end(a);
						!t && s < S && (clearTimeout(R[e]), delete R[e])
					}
				}, L = Object(a.a)(E.x), T = Object(a.a)(E.w), D = Object(a.a)(E.v), F = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						a = r.moreComments.models[t],
						c = r.platform.currentPage,
						d = c && c.routeMatch,
						m = d && d.match,
						{
							partialPostId: p
						} = m ? m.params : null;
					if (!p) return;
					const u = Object(C.s)(p);
					s(L({
						moreCommentsId: a.id
					}));
					const h = await Object(b.e)(n(), u, {
						token: a.token
					}, Object(k.a)(r));
					if (h.ok) {
						const t = h.body,
							o = Object(x.a)(t, u, r);
						s(T({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: o,
							...t
						}));
						const n = r.posts.models[u];
						let c;
						n && "subreddit" === n.belongsTo.type && t.comments && (c = n.belongsTo.id, await s(Object(i.a)({
							commentIds: Object.keys(h.body.comments),
							postIds: [n.id],
							skip: ["communityDetails", "subscription"],
							subredditId: c
						})));
						const d = h.body.comments,
							m = h.body.posts;
						await s(Object(l.b)(m, d, c))
					} else s(D({
						moreCommentsItem: a,
						...h.error
					}))
				}, A = Object(u.a)(x.b, v.a.upvoted), B = Object(u.a)(x.b, v.a.downvoted), z = Object(a.a)(E.j), U = Object(a.a)(E.i), H = Object(a.a)(E.e), K = Object(a.a)(E.f), W = (Object(a.a)(E.c), Object(a.a)(E.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (o, n) => {
					const r = n(),
						a = Object(f.h)(e),
						i = Object(j.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(_.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						d = i.depth;
					o(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== d || s(e, !0), Object(m.d)()
				}), G = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s(K({
						commentId: e,
						commentsPageKey: t
					}))
				}, V = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: o
				}) => async (n, r) => {
					const a = r(),
						i = Object(x.e)(t, e, s, a),
						c = Object(_.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(H({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === s && o(i, !0), Object(m.d)()
				}, Z = Object(a.a)(E.r), X = e => t => t(Z({
					draftKey: e
				})), J = Object(a.a)(E.a), Q = Object(a.a)(E.E), q = Object(a.a)(E.b), $ = Object(a.a)(E.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "b", (function() {
				return R
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
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
				x = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/comment/index.ts"),
				C = s("./src/reddit/actions/comment/constants.ts");
			const O = Object(r.a)(C.n),
				v = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.h)(o(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, j = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(h.J)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? m.j : m.d;
					t(Object(f.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(f.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, g = Object(r.a)(C.F), k = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s(),
						r = n.features.comments.models[e],
						a = n.user.account ? n.user.account.displayText : null;
					r && a && (t(Object(f.i)({
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
					})), (await Object(m.a)(o(), e)).ok || t(Object(f.i)({
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
				}, _ = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (s(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(n(), e, t)).ok || s(Object(f.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(c.d)())
				}, w = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? m.i : m.c;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(f.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, E = (e, t, s) => async (r, a, {
					gqlContext: i
				}) => {
					const c = Object(x.a)(a(), {
						commentId: e
					});
					if (!c) return;
					const l = s === n.Ub.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(p.a)(i(), {
							input: m
						})).ok) r(Object(f.i)({
						[e]: {
							userReports: Object(u.a)(c.userReports, t, l)
						}
					}));
					else {
						const e = Object(d.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, R = (e, t, s) => async (o, r, {
					apiContext: i
				}) => {
					const c = r(),
						d = c.features.comments.models[e];
					if (!d) return;
					const l = d.postId,
						p = c.postStickiedComments.data[l],
						u = n.g[t];
					o(Object(f.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.C.ADMIN,
							isMod: t === n.C.MODERATOR,
							isStickied: !!s
						}
					})), s && p && p !== e && o(Object(f.i)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(m.b)(i(), e, u, s || null)).ok ? s && o(g({
						id: e,
						postId: l,
						commentsPageKey: Object(a.a)(l, null, {
							sort: n.r.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(f.i)({
						[e]: {
							distinguishType: d.distinguishType,
							isAdmin: d.isAdmin,
							isMod: d.isMod,
							isStickied: d.isStickied
						}
					})), o(Object(f.i)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var d = s("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const l = "PRESENCE__PRESENTUSERS_LOADED",
				m = Object(o.a)(l),
				p = (e, t, s) => async (o, l, {
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
					const x = await (async (e, t, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
						endpoint: Object(c.a)(`${e.apiUrl}/api/presence`),
						method: n.eb.POST,
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
					}))(p(), Array.from(b), s);
					o(m(x))
				}
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Reports/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/modTools.ts"),
				u = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				b = s("./src/reddit/icons/fonts/Report/index.tsx"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				f = s.n(h);
			const C = i.a.span("IgnoreIconContainer", f.a),
				O = i.a.span("ActiveIconContainer", f.a),
				v = i.a.wrapped(x.a, "ChevronDown", f.a),
				j = i.a.wrapped(b.a, "ActiveReportIcon", f.a),
				g = i.a.wrapped(u.a, "IgnoreReport", f.a),
				k = i.a.wrapped(b.a, "ReportIcon", f.a),
				_ = i.a.div("ReportsContainer", f.a),
				w = i.a.wrapped(d.c, "Button", f.a),
				E = i.a.wrapped(c.a, "Reports", f.a),
				R = i.a.div("NumReports", f.a),
				I = ({
					className: e,
					handleToggleExpando: t,
					isHistoricalReports: s,
					numReports: n,
					modReports: i,
					userReports: c,
					collapseReports: d,
					reportedThingId: l
				}) => r.a.createElement(_, {
					className: Object(a.a)(e, {
						[f.a.collapseReports]: d
					})
				}, d ? r.a.createElement(C, null, r.a.createElement(g, null)) : r.a.createElement(O, null, r.a.createElement(j, null)), d ? r.a.createElement(R, null, n) : r.a.createElement(E, {
					modReports: i,
					userReports: c,
					reportedThingId: l
				}), s ? r.a.createElement(w, {
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
				}, d ? r.a.createElement(k, null) : r.a.createElement(g, null)));
			class M extends r.a.Component {
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
			t.default = Object(l.c)(M)
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
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
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(o || (o = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return m
			}));
			var o, n, r, a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(c);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(n || (n = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const l = {
					[i.a.Approve]: n.Approve,
					[i.a.Remove]: n.Remove,
					[i.a.Spam]: n.Spam,
					[i.a.Flair]: n.Flair
				},
				m = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						o = d.a[t],
						n = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(a.a)(s, o, n)
				}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				styledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				Separator: "_25jFfk04fRizfTaV4T8_fC",
				separator: "_25jFfk04fRizfTaV4T8_fC"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "default", (function() {
				return C
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				l = s("./src/reddit/icons/svgs/Envelope/index.tsx"),
				m = s("./src/reddit/icons/svgs/ModQueue/index.tsx"),
				p = s("./src/reddit/components/ModerationDropdown/index.tsx"),
				u = s("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				b = s.n(u);
			const x = i.a.wrapped(c.a, "StyledDropdown", b.a),
				h = Object(a.a)(x),
				f = i.a.div("Separator", b.a);

			function C(e) {
				const {
					className: t,
					unreadNotifications: s,
					isOpen: n,
					sendEventWithName: a,
					showLegacyModmailIcon: i
				} = e, c = Object(d.c)(m.a, `${o.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), u = Object(d.b)(l.a, `${o.fbt._("Modmail",null,{hk:"1IvnFd"})}`), b = Object(d.b)(l.a, `${o.fbt._("Legacy Modmail",null,{hk:"1NZCqH"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(h, {
					isFixed: !0,
					isOpen: n,
					tooltipId: p.a
				}, r.a.createElement(c, {
					href: "/r/mod/about/modqueue",
					onClick: () => a("mod_queue")
				}), r.a.createElement(f, null), r.a.createElement(u, {
					href: "https://mod.reddit.com/mail/all",
					isLit: s.hasUnreadModmail,
					onClick: () => a("mod_mail")
				}), r.a.createElement(f, null), i && r.a.createElement(b, {
					href: "/message/moderator/",
					isLit: s.hasUnreadOldModmail,
					onClick: () => a("old_mod_mail")
				}), r.a.createElement(f, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(o.a)({
				ErrorComponent: a,
				getComponent: () => Object(n.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
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
				return w
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
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
				x = s("./src/reddit/components/FlairSearch/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				g = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				k = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				_ = s.n(k);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const w = (e, t = !1, s = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${s}]`,
				E = Object(c.c)({
					flairData: O.d,
					subreddit: v.U,
					isMod: (e, t) => !!Object(C.k)(e, t)
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
						subreddit: Object(j.subredditById)(t, this.props.subredditId)
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
						flairData: o,
						subreddit: r
					} = e, i = r.displayText, {
						templates: c,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(u.a, {
						className: s
					}, a.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: n.fbt._("Select {subredditName} flair", [n.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						placeholderText: n.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(x.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: _.a.buttonsRow
					}, a.a.createElement(h.i, {
						disabled: !l,
						onClick: this.onApply
					}, n.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(h.l, {
						className: _.a.clearButton,
						onClick: this.onClear
					}, n.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(i.b)(E, (e, t) => ({
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
				return b
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "f", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "e", (function() {
				return g
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				a = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				c = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				d = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				l = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				p = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				u = s.n(p);
			const b = o.a.wrapped(a.a, "Icon", u.a),
				x = o.a.wrapped(i.a, "Icon", u.a),
				h = o.a.wrapped(c.a, "Icon", u.a),
				f = o.a.wrapped(d.a, "Icon", u.a),
				C = o.a.wrapped(l.a, "Icon", u.a),
				O = o.a.wrapped(m.a, "Icon", u.a),
				v = o.a.wrapped(n.b, "CheckboxMenuItem", u.a),
				j = o.a.wrapped(r.b, "DropdownRow", u.a),
				g = o.a.div("ListContainer", u.a)
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postFlair.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/modals.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				C = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				k = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				_ = s("./src/reddit/constants/postLayout.ts"),
				w = s("./src/reddit/helpers/isCrosspost.ts"),
				E = s("./src/reddit/models/Flair/index.ts"),
				R = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				I = s("./src/reddit/icons/svgs/SettingsWithShield/index.tsx");
			const M = (e, t) => Object(k.b)({
					breakpointType: k.a.HideIfVWLarger,
					flatlistItem: e,
					isCompact: t
				}),
				y = () => void 0;
			var S = e => {
					const {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: o,
						isDistinguished: r,
						isModToMemberShareEnabled: a,
						isOverlay: i,
						isPostAuthor: c,
						isProfilePage: d,
						layout: l,
						modModeEnabled: m,
						onApprovePost: p,
						onDistinguishPost: u,
						onFlairPost: b,
						onLockPost: x,
						onNsfwPost: h,
						onOcPost: f,
						onCcPost: C,
						onRemovePost: O,
						onModToMemberShareOpened: k,
						onSpamPost: S,
						onStickyPost: N,
						onSpoilerPost: P,
						post: L
					} = e, T = L.flair.filter(e => e.type !== E.f.Nsfw && e.type !== E.f.Spoiler).length > 0, D = Object(j.b)(L), F = !(!L.approvedBy || !D), A = !i && l === _.g.Compact, B = Object(w.a)(e.post), z = m ? M : y;
					return n.a.createElement(R.e, null, o && n.a.createElement(n.a.Fragment, null, !L.isSponsored && n.a.createElement(n.a.Fragment, null, n.a.createElement(R.c, {
						className: z(g.a.Approve, A),
						displayText: F ? v.fbt._("reapprove", null, {
							hk: "ZucfK"
						}) : L.approvedBy ? v.fbt._("approved", null, {
							hk: "nlSCc"
						}) : v.fbt._("approve", null, {
							hk: "4GoeOE"
						}),
						onClick: p
					}, n.a.createElement(R.a, null)), n.a.createElement(R.c, {
						className: z(g.a.Remove, A),
						displayText: L.isRemoved ? v.fbt._("removed", null, {
							hk: "cSGLt"
						}) : v.fbt._("remove", null, {
							hk: "4mKe0F"
						}),
						onClick: O
					}, n.a.createElement(R.g, null)), n.a.createElement(R.c, {
						className: z(g.a.Spam, A),
						displayText: L.isSpam ? v.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : v.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: S
					}, n.a.createElement(R.h, null))), t && n.a.createElement(R.c, {
						className: z(g.a.Flair, A),
						displayText: T ? v.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : v.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: b
					}, n.a.createElement(R.i, null))), a && s && n.a.createElement(R.c, {
						displayText: v.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: k
					}, n.a.createElement(R.d, null)), !L.isRemoved && !d && n.a.createElement(R.b, {
						isSelected: L.isStickied,
						onClick: N,
						text: v.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), c && n.a.createElement(R.b, {
						isSelected: r,
						onClick: u,
						text: v.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), n.a.createElement(R.b, {
						isSelected: L.isLocked,
						onClick: x,
						text: v.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !B && n.a.createElement(R.b, {
						isSelected: L.isOriginalContent,
						onClick: f,
						text: v.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), n.a.createElement(R.b, {
						isSelected: L.isNSFW,
						onClick: h,
						text: v.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), s && "subreddit" === L.belongsTo.type && n.a.createElement(R.c, {
						displayText: v.fbt._("Adjust crowd Control", null, {
							hk: "28dSIi"
						}),
						onClick: C
					}, n.a.createElement(I.a, null)), n.a.createElement(R.b, {
						isSelected: L.isSpoiler,
						onClick: P,
						text: v.fbt._("Mark as Spoiler", null, {
							hk: "1IlEnE"
						})
					}))
				},
				N = s("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				P = s.n(N);
			const L = Object(x.t)({
					isProfilePage: x.G,
					pageLayer: e => e
				}),
				T = Object(a.c)({
					layout: x.O,
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(O.b)(t)(e),
					isModToMemberShareEnabled: f.d.modToMemberShare
				}),
				D = Object(r.b)(T, (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(d.q)(t.id)),
					onDistinguishPost: s => e(Object(d.t)(t.id, s)),
					onFlairChanged: (s, o) => e(Object(l.h)({
						post: t,
						previewFlair: s,
						selectedTemplateId: o
					})),
					onFlairPost: t => e(Object(c.i)(t)),
					onLockPost: () => e(Object(d.C)(t.id)),
					onNsfwPost: () => e(Object(d.G)(t.id)),
					onOcPost: () => e(Object(d.H)(t.id)),
					onCcPost: () => {
						e(Object(c.i)(b.a.CROWD_CONTROL)), e(Object(d.s)(t.id))
					},
					onRemovePost: () => e(Object(d.Q)(t.id, !1)),
					onModToMemberShareOpened: () => {
						e(Object(c.i)(b.a.MOD_TO_MEMBER_SHARE)), e(Object(d.D)(t.id))
					},
					onSpamPost: () => e(Object(d.Q)(t.id, !0)),
					onSpoilerPost: () => e(Object(d.V)(t.id)),
					onStickyPost: () => e(Object(d.Z)(t.id))
				})),
				F = Object(m.a)(h.a),
				A = L(D(Object(u.c)(e => {
					const {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: o,
						isDropdownOpen: r,
						isModToMemberShareEnabled: a,
						isOverlay: c,
						isPostAuthor: d,
						isProfilePage: l,
						layout: m,
						modModeEnabled: u,
						onApprovePost: b,
						onDistinguishPost: x,
						onFlairPost: h,
						onLockPost: f,
						onNsfwPost: O,
						onOcPost: v,
						onCcPost: j,
						onRemovePost: g,
						onModToMemberShareOpened: k,
						onSpamPost: _,
						onSpoilerPost: w,
						onStickyPost: E,
						post: R,
						sendEvent: I,
						tooltipId: M
					} = e, y = R.distinguishType === i.C.MODERATOR, N = y ? i.C.NONE : i.C.MODERATOR, L = Object(p.b)(R.id, c);
					return n.a.createElement(F, {
						className: P.a.dropdown,
						isOpen: r,
						tooltipId: M
					}, n.a.createElement(S, {
						canEditFlair: t,
						hasModFullPerms: s,
						hasModPostPerms: o,
						isDistinguished: y,
						isModToMemberShareEnabled: a,
						isOverlay: c,
						isPostAuthor: d,
						isProfilePage: l,
						layout: m,
						modModeEnabled: u,
						onApprovePost: () => {
							b(), I(Object(C.j)("approve", R.id))
						},
						onRemovePost: () => {
							g(), I(Object(C.j)("remove", R.id))
						},
						onSpamPost: () => {
							_(), I(Object(C.j)("spam", R.id))
						},
						onDistinguishPost: () => {
							x(N), I(Object(C.j)(y ? "undistinguish" : "distinguish", R.id))
						},
						onFlairPost: () => {
							h(L), I(Object(C.j)("post_flair", R.id))
						},
						onLockPost: () => {
							f(), I(Object(C.j)(R.isLocked ? "unlock" : "lock", R.id))
						},
						onNsfwPost: () => {
							O(), I(Object(C.j)(R.isNSFW ? "unmark_nsfw" : "mark_nsfw", R.id))
						},
						onOcPost: () => {
							v(), I(Object(C.j)(R.isOriginalContent ? "unmark_original_content" : "mark_original_content", R.id))
						},
						onCcPost: () => {
							j()
						},
						onModToMemberShareOpened: () => {
							k(), I(Object(C.j)("mod_to_member_share", R.id))
						},
						onSpoilerPost: () => {
							w(), I(Object(C.j)(R.isSpoiler ? "unmark_spoiler" : "mark_spoiler", R.id))
						},
						onStickyPost: () => {
							E(), I(Object(C.j)(R.isStickied ? "unsticky" : "sticky", R.id))
						},
						post: R
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
				return F
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				C = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				O = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				j = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				_ = s.n(k);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => `SnoozableReport--${t}--${e}`, R = Object(r.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(g.b)(E(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: E(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.Y)(t.reportedThingId, t.reason, s))
				}
			})), I = Object(p.a)(b.a);
			class M extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.Ub.None : c.Ub.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(f.l)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						isSnoozed: a
					} = this.props, i = E(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(x.b, {
						id: i,
						className: _.a.DropdownLabelContainer,
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: i,
						className: _.a.DropdownLabel
					}, a ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(O.a, null) : n.a.createElement(C.a, null))), n.a.createElement(I, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: _.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: _.a.SnoozeButtonContent
					}, a ? n.a.createElement(n.a.Fragment, null, n.a.createElement(j.a, null), w._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, null), w._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var y = R(Object(u.c)(M)),
				S = s("./src/reddit/featureFlags/index.ts"),
				N = s("./src/reddit/components/Reports/index.m.less"),
				P = s.n(N);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = a.a.div("ReportText", P.a), D = a.a.div("ReportsTitle", P.a);

			function F(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: a
				} = e, i = Object(r.e)(e => S.d.enableSnoozableReport(e));
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: P.a.Reports
				}, n.a.createElement(D, null, L._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => n.a.createElement(T, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && n.a.createElement("div", {
					className: P.a.Reports
				}, n.a.createElement(D, null, L._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: P.a.UserReports
				}, o.map(([e, t, s, o]) => i && void 0 !== s && o ? n.a.createElement(y, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: a,
					isSnoozed: s
				}) : n.a.createElement(T, {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(i);
			const d = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && n.a.createElement("span", {
					className: c.a.TextWrapper
				}, e.text, " ")),
				l = a.a.wrapped(d, "ApproveButton", c.a),
				m = a.a.wrapped(d, "RemoveButton", c.a),
				p = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkbox2020: "_2n1K_z8s56FQ3Xxeyst2P_",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				p = s.n(m);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = e => {
					const t = Object(a.a)();
					return n.a.createElement("div", {
						className: Object(r.a)(p.a.checkboxMenuItem, e.className),
						onClick: e.onClick
					}, n.a.createElement(l.a, {
						className: p.a.expandRight
					}, t ? n.a.createElement(i.a, {
						name: "checkbox",
						isFilled: e.isSelected,
						className: p.a.checkbox2020
					}) : e.isSelected ? n.a.createElement(d.a, {
						className: p.a.checkboxSelected
					}) : n.a.createElement(c.a, {
						className: p.a.checkbox
					}), e.text))
				},
				x = ({
					className: e,
					...t
				}) => n.a.createElement(b, u({
					className: Object(r.a)(p.a.postCheckboxMenuItem, e)
				}, t));
			t.b = b
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var o = s("./node_modules/lodash/throttle.js"),
				n = s.n(o),
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
				x = s.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
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
					}, s = Object(i.a)(x.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(c.a, h({}, t, {
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
						className: Object(i.a)(x.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(m.a, h({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(x.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(l.a, {
						className: x.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const s = Object(i.a)(x.a.row, e, {
					[x.a.mIsInteractive]: !t.noHover,
					[x.a.mIsSelected]: t.isSelected,
					[x.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(f, h({
					className: s
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
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
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				r = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = s.n(r);
			t.a = o.a.wrapped(n.a, "unstyledInternalLink", a.a)
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
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "b", (function() {
				return g
			}));
			var o = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				l = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				m = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				u = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: n.eb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				C = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: n.eb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, s, a) => {
					let i = Object(m.a)(Object(l.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`));
					return a && (i = Object(d.a)(i)), Object(r.a)(e, {
						data: s,
						endpoint: i,
						method: n.eb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				g = (e, t, s, o) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: n.eb.POST,
					data: {
						id: t,
						sticky: o
					}
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
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return x
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				l = s("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				m = s.n(l);
			const p = i.a.button("button", m.a),
				u = e => t => n.a.createElement("div", {
					className: t.className
				}, e);

			function b(e, t, s) {
				return h(e, t, !0, {
					...s
				})
			}

			function x(e, t, s) {
				return h(e, t, !1, {
					...s
				})
			}

			function h(e, t, s, o) {
				const i = e,
					l = "function" == typeof t ? t : u(t),
					{
						meta: p
					} = o,
					b = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(i, {
						className: Object(a.a)(m.a.icon, {
							[m.a.isLit]: e
						})
					}), n.a.createElement(l, {
						className: m.a.body
					}), p && n.a.createElement("div", {
						className: m.a.metaContainer
					}, p));
				return s ? e => {
					const t = Object(c.a)();
					return n.a.createElement("a", {
						"data-redditstyle": !0,
						className: Object(a.a)(e.className, m.a.basicLink),
						href: e.href,
						onClick: e.onClick,
						target: "_blank",
						rel: "noopener noreferrer"
					}, b(e.isLit), !t && n.a.createElement(d.a, {
						className: m.a.outboundLink
					}))
				} : e => e.href ? n.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, m.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, b(e.isLit)) : n.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, m.a.button),
					onClick: e.onClick
				}, b(e.isLit))
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
				a = ({
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
				i = e => t => ({
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
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				c = s.n(i);
			t.a = e => {
				const t = Object(r.a)();
				return n.a.createElement("i", {
					className: `${Object(a.b)(t?"message":"envelope",e.isFilled)} ${c.a.Envelope} ${e.className}`
				})
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.m.less": function(e, t, s) {
			e.exports = {
				IgnoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf",
				ignoreReportIcon: "_3iBgiSReJX5KcPORjE1Yuf"
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("ignoreReport",e.isFilled)} ${e.className}`
			}), "IgnoreReportIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			}), "TagIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
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
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), n.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/ModQueue/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M14.5,11.1924 C14.5,13.6544 10.644,15.4524 10.204,15.6484 C10.14,15.6774 10.069,15.6924 10,15.6924 C9.931,15.6924 9.86,15.6774 9.796,15.6484 C9.356,15.4524 5.5,13.6544 5.5,11.1924 L5.5,6.8844 C5.5,6.6714 5.635,6.4824 5.837,6.4124 L9.837,5.0274 C9.942,4.9904 10.058,4.9904 10.163,5.0274 L14.163,6.4124 C14.365,6.4824 14.5,6.6714 14.5,6.8844 L14.5,11.1924 Z M16,2.0004 L4,2.0004 C2.897,2.0004 2,2.8974 2,4.0004 L2,16.0004 C2,17.1024 2.897,18.0004 4,18.0004 L16,18.0004 C17.103,18.0004 18,17.1024 18,16.0004 L18,4.0004 C18,2.8974 17.103,2.0004 16,2.0004 Z"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), n.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/icons/svgs/SettingsWithShield/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				width: "18",
				height: "18",
				viewBox: "0 0 18 18",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M10.2686 16.8748C10.2089 16.8842 10.1482 16.8842 10.0886 16.8748C9.9164 16.8245 9.77087 16.7086 9.68333 16.5521C9.59579 16.3955 9.57325 16.2108 9.62057 16.0378L10.0886 14.3998C10.1195 14.2919 10.1769 14.1935 10.2554 14.1133C10.334 14.0332 10.4313 13.9739 10.5386 13.9408C10.8273 13.8486 11.1074 13.7311 11.3756 13.5898C11.4746 13.5346 11.5862 13.5057 11.6996 13.5057C11.813 13.5057 11.9245 13.5346 12.0236 13.5898L13.4996 14.3998C13.6243 14.4844 13.7746 14.5228 13.9246 14.5086C14.0746 14.4943 14.2149 14.4282 14.3214 14.3217C14.428 14.2151 14.4941 14.0748 14.5083 13.9248C14.5226 13.7748 14.4841 13.6245 14.3996 13.4998L13.5716 12.0058C13.5188 11.9076 13.4912 11.7978 13.4912 11.6863C13.4912 11.5748 13.5188 11.465 13.5716 11.3668C13.7114 11.0948 13.8288 10.8119 13.9226 10.5208C13.9562 10.4148 14.0158 10.319 14.096 10.2419C14.1761 10.1649 14.2743 10.1092 14.3816 10.0798L16.0196 9.60281C16.1259 9.57366 16.223 9.51786 16.3018 9.44069C16.3805 9.36352 16.4383 9.26753 16.4696 9.16181C16.4928 9.0793 16.4992 8.99295 16.4884 8.90791C16.4776 8.82287 16.4497 8.74088 16.4066 8.66681C16.3673 8.5914 16.3125 8.52516 16.2458 8.47242C16.1791 8.41968 16.102 8.38165 16.0196 8.36081L14.3996 7.90181C14.2923 7.87246 14.1941 7.81673 14.114 7.7397C14.0338 7.66267 13.9742 7.56679 13.9406 7.46081C13.8468 7.16972 13.7294 6.88678 13.5896 6.61481C13.5368 6.51659 13.5092 6.40682 13.5092 6.29531C13.5092 6.1838 13.5368 6.07404 13.5896 5.97581L14.3996 4.49981C14.4841 4.3751 14.5226 4.22482 14.5083 4.07482C14.4941 3.92482 14.428 3.78448 14.3214 3.67793C14.2149 3.57139 14.0746 3.5053 13.9246 3.49104C13.7746 3.47679 13.6243 3.51525 13.4996 3.59981L12.0056 4.42781C11.9057 4.48061 11.7945 4.50822 11.6816 4.50822C11.5686 4.50822 11.4574 4.48061 11.3576 4.42781C11.0894 4.28648 10.8093 4.16903 10.5206 4.07681C10.4133 4.04375 10.316 3.98446 10.2374 3.90432C10.1589 3.82417 10.1015 3.7257 10.0706 3.61781L9.60257 1.97981C9.5688 1.84057 9.48921 1.71671 9.37659 1.62814C9.26397 1.53956 9.12485 1.49141 8.98157 1.49141C8.83829 1.49141 8.69917 1.53956 8.58654 1.62814C8.47392 1.71671 8.39434 1.84057 8.36057 1.97981L7.91057 3.59981C7.87963 3.7077 7.82228 3.80617 7.74371 3.88632C7.66514 3.96646 7.56782 4.02575 7.46057 4.05881C7.17181 4.15103 6.89173 4.26848 6.62357 4.40981C6.52397 4.46338 6.41265 4.49142 6.29957 4.49142C6.18648 4.49142 6.07516 4.46338 5.97557 4.40981L4.49957 3.59981C4.37486 3.51525 4.22458 3.47679 4.07458 3.49104C3.92458 3.5053 3.78423 3.57139 3.67769 3.67793C3.57114 3.78448 3.50506 3.92482 3.4908 4.07482C3.47654 4.22482 3.515 4.3751 3.59957 4.49981L4.42757 5.99381C4.48035 6.09204 4.50797 6.20181 4.50797 6.31331C4.50797 6.42482 4.48035 6.53459 4.42757 6.63281C4.28773 6.90478 4.17034 7.18773 4.07657 7.47881C4.02277 7.64942 3.90345 7.79169 3.74483 7.87438C3.5862 7.95707 3.40124 7.97341 3.23057 7.91981C3.05996 7.86602 2.91769 7.7467 2.835 7.58807C2.75231 7.42944 2.73597 7.24448 2.78957 7.07381C2.86782 6.80955 2.96404 6.55095 3.07757 6.29981L2.42057 5.12981C2.21388 4.75251 2.1351 4.31836 2.19603 3.89249C2.25697 3.46662 2.45434 3.07199 2.75854 2.76779C3.06275 2.46359 3.45738 2.26621 3.88325 2.20528C4.30912 2.14434 4.74326 2.22312 5.12057 2.42981L6.29957 3.07781L6.67757 2.91581L7.05557 1.61081C7.129 1.35702 7.25181 1.12023 7.41697 0.91401C7.58212 0.707794 7.78637 0.536216 8.01799 0.409118C8.24961 0.28202 8.50404 0.201903 8.7667 0.173365C9.02935 0.144826 9.29506 0.168426 9.54857 0.242812C9.87456 0.334782 10.1715 0.508845 10.411 0.748356C10.6505 0.987867 10.8246 1.28482 10.9166 1.61081L11.2946 2.91581L11.6726 3.07781L12.8606 2.42081C13.2381 2.22131 13.6697 2.14802 14.0919 2.21168C14.5141 2.27534 14.9049 2.4726 15.2068 2.77455C15.5088 3.0765 15.706 3.46724 15.7697 3.88948C15.8334 4.31173 15.7601 4.74326 15.5606 5.12081L14.9216 6.29981L15.0836 6.67781L16.3886 7.05581C16.6414 7.12744 16.8775 7.24868 17.083 7.41247C17.2885 7.57626 17.4593 7.77932 17.5856 8.00981C17.7295 8.27237 17.8126 8.56393 17.8288 8.86293C17.8449 9.16194 17.7936 9.46074 17.6786 9.73724C17.5637 10.0137 17.3881 10.2609 17.1648 10.4604C16.9415 10.6599 16.6762 10.8066 16.3886 10.8898L15.0836 11.2678L14.9216 11.6458L15.5786 12.8428C15.7853 13.2201 15.864 13.6543 15.8031 14.0801C15.7422 14.506 15.5448 14.9006 15.2406 15.2048C14.9364 15.509 14.5418 15.7064 14.1159 15.7673C13.69 15.8283 13.2559 15.7495 12.8786 15.5428L11.6996 14.9218L11.3216 15.0838L10.9436 16.3888C10.9029 16.5344 10.8139 16.6618 10.6913 16.7501C10.5686 16.8385 10.4195 16.8824 10.2686 16.8748ZM10.7996 11.6999C10.7046 11.6989 10.6109 11.6784 10.5242 11.6397C10.4375 11.601 10.3597 11.5449 10.2956 11.4749C10.1783 11.3403 10.1183 11.1651 10.1284 10.9869C10.1385 10.8086 10.2178 10.6414 10.3496 10.5209C10.7303 10.1414 10.9447 9.62614 10.9455 9.08856C10.9463 8.55099 10.7336 8.0351 10.3541 7.65438C9.97455 7.27366 9.45933 7.0593 8.92175 7.05846C8.38418 7.05762 7.86829 7.27036 7.48757 7.64988C7.4313 7.72483 7.36005 7.78724 7.27834 7.83313C7.19663 7.87903 7.10625 7.9074 7.01297 7.91646C6.91969 7.92551 6.82555 7.91504 6.73654 7.88571C6.64753 7.85638 6.5656 7.80884 6.49597 7.74611C6.42635 7.68338 6.37054 7.60684 6.33212 7.52136C6.29369 7.43589 6.27349 7.34334 6.27279 7.24963C6.2721 7.15591 6.29092 7.06308 6.32807 6.97704C6.36522 6.891 6.41988 6.81364 6.48857 6.74988C6.79219 6.39989 7.16462 6.11615 7.58267 5.91636C8.00072 5.71657 8.45543 5.60499 8.91847 5.58858C9.38152 5.57218 9.84298 5.65129 10.2741 5.82099C10.7053 5.99069 11.0968 6.24735 11.4245 6.57498C11.7521 6.90261 12.0088 7.29419 12.1785 7.72533C12.3482 8.15647 12.4273 8.61794 12.4109 9.08098C12.3945 9.54403 12.2829 9.99874 12.0831 10.4168C11.8833 10.8348 11.5996 11.2073 11.2496 11.5109C11.1289 11.6286 10.9681 11.6961 10.7996 11.6999ZM4.33761 17.775H4.49961L4.66161 17.757L4.66537 17.756C4.88304 17.6989 8.77461 16.6774 8.77461 13.95V9.89999C8.77345 9.74925 8.72252 9.60312 8.62975 9.48431C8.53698 9.3655 8.40756 9.28067 8.26161 9.24299L4.66161 8.34299C4.5553 8.31594 4.44392 8.31594 4.33761 8.34299L0.737609 9.24299C0.591656 9.28067 0.462238 9.3655 0.369468 9.48431C0.276699 9.60312 0.225774 9.74925 0.224609 9.89999V13.95C0.224609 16.5298 3.70636 17.5833 4.26743 17.7531C4.30336 17.764 4.32732 17.7712 4.33761 17.775ZM1.57461 13.95V10.431L4.49961 9.69299L7.42461 10.431V13.95C7.42461 15.39 5.13861 16.2 4.49961 16.398C3.86061 16.2 1.57461 15.399 1.57461 13.95Z",
				fill: "inherit"
			}))
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
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: o,
					widthLeft: r,
					gutter: i,
					...l
				} = e;
				return n.a.createElement("div", d({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
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
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Fc
					}) === o.Pc.Enabled
				},
				a = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Ec
					}) === o.Oc.Enabled
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.64a1ac1bec335035fccd.js.map