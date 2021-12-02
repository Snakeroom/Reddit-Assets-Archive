// https://www.redditstatic.com/desktop2x/ModModeBanners.f4211a0af7f62e625b97.js
// Retrieved at 12/2/2021, 10:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModModeBanners"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return E
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "e", (function() {
				return M
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "q", (function() {
				return P
			})), s.d(t, "j", (function() {
				return U
			})), s.d(t, "g", (function() {
				return F
			})), s.d(t, "f", (function() {
				return z
			})), s.d(t, "o", (function() {
				return G
			})), s.d(t, "p", (function() {
				return Z
			})), s.d(t, "d", (function() {
				return H
			})), s.d(t, "a", (function() {
				return q
			})), s.d(t, "b", (function() {
				return J
			})), s.d(t, "n", (function() {
				return X
			})), s.d(t, "c", (function() {
				return Q
			})), s.d(t, "k", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/economics/helpers/async.ts"),
				i = s("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				a = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/shortcuts/utils.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/actions/vote.ts"),
				b = s("./src/reddit/endpoints/comment/index.tsx"),
				O = s("./src/reddit/helpers/commentList/index.ts"),
				f = s("./src/reddit/helpers/trackers/comment.ts"),
				j = s("./src/reddit/models/Comment/index.ts"),
				x = s("./src/reddit/models/Post/index.ts"),
				R = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				h = s("./src/reddit/selectors/comments.ts"),
				v = s("./src/reddit/selectors/commentSelector.ts"),
				C = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				_ = s("./src/reddit/selectors/moderatingComments.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/actions/comment/constants.ts");
			const y = {},
				E = Object(c.a)(T.o),
				N = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(k.K)(s())) return t(Object(a.k)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(h.m)(s(), {
							commentId: e
						})
					}));
					const r = s().features.comments.models[e];
					if (!r) return;
					const c = r.isSaved ? b.m : b.i;
					if (t(E({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await c(o(), e)).ok) {
						const s = r.isSaved ? n.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : n.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							o = n.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(u.f)({
							text: s,
							kind: R.b.Undo,
							buttonText: o,
							buttonAction: N(e)
						}))
					} else t(E({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, I = e => `viewing-comment-${e}`, S = o.a.telemetry.commentConsumedThreshold, M = e => async (t, s) => {
					const n = s();
					if (!Object(v.b)(n, {
							commentId: e
						}) || Math.random() > o.a.telemetry.commentSampleRate) return;
					f.c({
						state: n,
						commentId: e
					}), r.c.start(I(e));
					const c = setTimeout(() => f.a({
						state: n,
						commentId: e
					}), S);
					y[e] = c
				}, w = (e, t) => async (s, o) => {
					const n = o(),
						c = I(e);
					if (Object(v.b)(n, {
							commentId: e
						}) && r.c.has(c)) {
						const s = r.c.end(c);
						!t && s < S && (clearTimeout(y[e]), delete y[e])
					}
				}, B = Object(c.a)(T.x), D = Object(c.a)(T.w), A = Object(c.a)(T.v), L = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						c = r.moreComments.models[t],
						a = r.platform.currentPage,
						l = a && a.routeMatch,
						m = l && l.match,
						{
							partialPostId: u
						} = m ? m.params : null;
					if (!u) return;
					const p = Object(x.t)(u);
					s(B({
						moreCommentsId: c.id
					}));
					const f = await Object(b.f)(n(), p, {
						token: c.token
					}, Object(C.a)(r));
					if (f.ok) {
						const t = f.body,
							o = Object(O.a)(t, p, r);
						s(D({
							key: e,
							moreCommentsItem: c,
							shouldCollapse: o,
							...t
						}));
						const n = r.posts.models[p];
						let a;
						n && "subreddit" === n.belongsTo.type && t.comments && (a = n.belongsTo.id, await s(Object(d.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [n.id],
							skip: ["communityDetails", "subscription"],
							subredditId: a
						})));
						const l = f.body.comments;
						await s(Object(i.b)(a, l))
					} else s(A({
						moreCommentsItem: c,
						...f.error
					}))
				}, P = Object(p.a)(O.b, g.a.upvoted), U = Object(p.a)(O.b, g.a.downvoted), F = Object(c.a)(T.j), z = Object(c.a)(T.i), K = Object(c.a)(T.e), $ = Object(c.a)(T.f), G = (Object(c.a)(T.c), Object(c.a)(T.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: s
				}) => async (o, n) => {
					const r = n(),
						c = Object(j.i)(e),
						d = Object(h.n)(r, {
							commentLink: c,
							commentsPageKey: t
						}),
						i = Object(_.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = d.depth;
					o(K({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || s(e, !0), Object(m.d)()
				}), Z = ({
					commentId: e,
					commentsPageKey: t
				}) => async s => {
					s($({
						commentId: e,
						commentsPageKey: t
					}))
				}, H = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: s,
					scrollToAndRemeasure: o
				}) => async (n, r) => {
					const c = r(),
						d = Object(O.e)(t, e, s, c),
						i = Object(_.b)(c, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(K({
						commentId: d,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === s && o(d, !0), Object(m.d)()
				}, W = Object(c.a)(T.r), q = e => t => t(W({
					draftKey: e
				})), J = Object(c.a)(T.a), X = Object(c.a)(T.E), Q = Object(c.a)(T.b), V = Object(c.a)(T.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "b", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeCommentsPageKey/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/shortcuts/utils.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				O = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/constants.ts");
			const g = Object(r.a)(R.n),
				h = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(g({
							commentId: e
						}))
					})(e))
				}, v = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(j.K)(s())) return void t(Object(d.i)(l.a.LOGIN_MODAL_ID));
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? m.l : m.e;
					t(Object(x.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(o(), e)).ok || t(Object(x.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, C = Object(r.a)(R.F), _ = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s(),
						r = n.features.comments.models[e],
						c = n.user.account ? n.user.account.displayText : null;
					r && c && (t(Object(x.i)({
						[e]: {
							isApproved: !0,
							approvedBy: c,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(o(), e)).ok || t(Object(x.i)({
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
				}, k = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o(),
						c = r.features.comments.models[e],
						d = r.user.account ? r.user.account.displayText : null;
					c && d && (s(Object(x.i)({
						[e]: {
							approvedBy: null,
							bannedBy: d,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(n(), e, t)).ok || s(Object(x.i)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam
						}
					})), Object(i.d)())
				}, T = e => async (t, s, {
					apiContext: o
				}) => {
					const n = s().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? m.k : m.d;
					t(Object(x.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(o(), e)).ok || t(Object(x.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, y = (e, t, s) => async (r, c, {
					gqlContext: d
				}) => {
					const i = Object(O.b)(c(), {
						commentId: e
					});
					if (!i) return;
					const l = s === n.bc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(d(), {
							input: m
						})).ok) r(Object(x.i)({
						[e]: {
							userReports: Object(p.a)(i.userReports, t, l)
						}
					}));
					else {
						const e = Object(a.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, E = (e, t, s) => async (o, r, {
					apiContext: d,
					gqlContext: i
				}) => {
					const a = r(),
						l = a.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = a.postStickiedComments.data[u],
						b = n.g[t];
					let O;
					if (o(Object(x.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === n.G.ADMIN,
								isMod: t === n.G.MODERATOR,
								isStickied: !!s
							}
						})), s && p && p !== e && o(Object(x.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(f.a)(r())) {
						const o = Object(m.b)(i(), e, t),
							n = Object(m.c)(i(), e, !!s),
							r = [o];
						(s || !s && e === p) && r.push(n), O = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else O = await Object(m.g)(d(), e, b, s || null);
					O.ok ? s && o(C({
						id: e,
						postId: u,
						commentsPageKey: Object(c.a)(u, null, {
							sort: n.u.CONFIDENCE,
							...a.platform.currentPage.queryParams
						})
					})) : (o(Object(x.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(x.i)({
						[p]: {
							isStickied: a.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.m.less": function(e, t, s) {
			e.exports = {
				banner: "jVqYW2zU9Cs56ibjXMqQO",
				coloredIcon: "KJW8JsvlaHMp72a41MljF"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ModModeBanners/index.m.less"),
				d = s.n(c),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.m.less"),
				l = s.n(a),
				m = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var p;
			! function(e) {
				e.AUTOMODERATOR = "AUTOMODERATOR", e.CROWD_CONTROL = "CROWD_CONTROL"
			}(p || (p = {}));
			const b = {
					[p.AUTOMODERATOR]: "bot",
					[p.CROWD_CONTROL]: "crowd_control"
				},
				O = {
					[p.AUTOMODERATOR]: u._("AutoModerator removed", null, {
						hk: "4A6xhG"
					}),
					[p.CROWD_CONTROL]: u._("Crowd controlled", null, {
						hk: "laryu"
					})
				};
			t.default = ({
				thing: e
			}) => {
				const t = function(e) {
					return Object(m.b)(e) ? p.CROWD_CONTROL : Object(m.a)(e) ? p.AUTOMODERATOR : void 0
				}(e);
				if (!t) return null;
				const s = function(e, t) {
					switch (e) {
						case p.AUTOMODERATOR:
							return t.modNote
					}
				}(t, e);
				return n.a.createElement("div", {
					className: Object(r.a)(l.a.banner, d.a.banner)
				}, n.a.createElement(i.a, {
					isFilled: !0,
					name: b[t],
					className: Object(r.a)(l.a.coloredIcon, d.a.icon)
				}), O[t], s ? `: ${s}` : "")
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.m.less": function(e, t, s) {
			e.exports = {
				banner: "HvreLeuuSfh1rkoWE9xuN",
				collapsed: "_13ZFeqy7MhNDIo_5EgxMBy",
				contentContainer: "_1Mypg35XVWYc_yoTLInTJ-",
				coloredIcon: "_1FrEyh5SQ-2aoHDsNDPjzX",
				ignoreButton: "_1Lno0Y9PcQ4qpuobaTHDKT",
				ignoreButtonIcon: "_1bHw74h-KbQ16nM50WYsYB",
				reportsWrapper: "_1sFJ-ZCpGsI_VfPvFc0_KM",
				reports: "_1u0QpAjiAmsmy4uUwFZ27u"
			}
		},
		"./src/reddit/components/ModModeReports/_ModModeReports.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ModModeBanners/index.m.less"),
				i = s.n(d),
				a = s("./src/reddit/components/Reports/index.tsx"),
				l = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/isPost.ts"),
				p = s("./src/reddit/helpers/trackers/modTools.ts"),
				b = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				O = s("./src/reddit/icons/fonts/Report/index.tsx"),
				f = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				j = s("./src/reddit/components/ModModeReports/_ModModeReports.m.less"),
				x = s.n(j);
			const R = ({
				handleToggleExpando: e,
				isHistoricalReports: t,
				numReports: s,
				modReports: n,
				userReports: d,
				collapseReports: m,
				reportedThingId: u
			}) => r.a.createElement("div", {
				className: Object(c.a)(x.a.banner, i.a.banner, m && x.a.collapsed)
			}, r.a.createElement("div", {
				className: x.a.contentContainer
			}, m ? r.a.createElement(b.a, {
				className: Object(c.a)(i.a.icon, x.a.coloredIcon)
			}) : r.a.createElement(O.a, {
				className: Object(c.a)(i.a.icon, x.a.coloredIcon)
			}), r.a.createElement("div", {
				className: x.a.reportsWrapper
			}, m ? s : r.a.createElement(a.a, {
				className: x.a.reports,
				modReports: n,
				userReports: d,
				reportedThingId: u
			})), t ? r.a.createElement(l.c, {
				className: x.a.ignoreButton,
				onClick: e,
				text: o.fbt._("old reports", null, {
					hk: "2IdZOv"
				})
			}, r.a.createElement(f.a, {
				className: x.a.ignoreButtonIcon
			})) : r.a.createElement(l.c, {
				className: x.a.ignoreButton,
				onClick: e,
				text: m ? o.fbt._("Restore Reports", null, {
					hk: "2O219R"
				}) : o.fbt._("ignore reports", null, {
					hk: "48jlNW"
				})
			}, m ? r.a.createElement(O.a, {
				className: x.a.ignoreButtonIcon
			}) : r.a.createElement(b.a, {
				className: x.a.ignoreButtonIcon
			}))));
			t.default = ({
				reportable: e,
				onIgnoreReports: t
			}) => {
				const [s, o] = Object(n.useState)(!0), c = Object(m.b)(), d = () => {
					let s;
					t();
					const o = e.ignoreReports ? "restore_reports" : "ignore_reports";
					s = Object(u.a)(e.id) ? Object(p.h)(o, e.id) : Object(p.g)(o, e.id), c(s)
				}, i = (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0);
				return i ? r.a.createElement(R, {
					collapseReports: s,
					handleToggleExpando: () => o(e => !e),
					isHistoricalReports: !0,
					numReports: i,
					modReports: e.modReportsDismissed,
					userReports: e.userReportsDismissed,
					reportedThingId: e.id
				}) : r.a.createElement(R, {
					handleToggleExpando: d,
					collapseReports: e.ignoreReports,
					numReports: e.numReports || 0,
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.id
				})
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
				return A
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				O = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				R = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				h = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				C = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				_ = s.n(C);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), T = (e, t) => `SnoozableReport--${t}--${e}`, y = Object(c.b)(() => Object(d.c)({
				isDropdownOpen: (e, t) => Object(v.b)(T(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: T(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(f.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, s)) : e(Object(l.ab)(t.reportedThingId, t.reason, s))
				}
			})), E = Object(u.a)(b.a);
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.bc.None : i.bc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(j.l)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						isSnoozed: c
					} = this.props, d = T(e, s);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(O.b, {
						id: d,
						className: _.a.DropdownLabelContainer,
						onClick: o
					}, n.a.createElement("label", {
						htmlFor: d,
						className: _.a.DropdownLabel
					}, c ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(R.a, null) : n.a.createElement(x.a, null))), n.a.createElement(E, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: _.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: _.a.SnoozeButtonContent
					}, c ? n.a.createElement(n.a.Fragment, null, n.a.createElement(h.a, null), k._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(g.a, null), k._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var I = y(Object(p.c)(N)),
				S = s("./src/reddit/components/Reports/index.m.less"),
				M = s.n(S);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), B = r.a.div("ReportText", M.a), D = r.a.div("ReportsTitle", M.a);

			function A(e) {
				const {
					className: t,
					modReports: s,
					userReports: o,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement("div", {
					className: M.a.Reports
				}, n.a.createElement(D, null, w._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), s.map(([e, t]) => n.a.createElement(B, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), o && o.length > 0 && n.a.createElement("div", {
					className: M.a.Reports
				}, n.a.createElement(D, null, w._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: M.a.UserReports
				}, o.map(([e, t, s, o]) => void 0 !== s && o ? n.a.createElement(I, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: s
				}) : n.a.createElement(B, {
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
				return a
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = s.n(d);
			const a = e => n.a.createElement("button", {
					className: Object(r.a)(i.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && n.a.createElement("span", {
					className: Object(r.a)(i.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = c.a.wrapped(a, "ApproveButton", i.a),
				m = c.a.wrapped(a, "RemoveButton", i.a),
				u = e => n.a.createElement("button", {
					className: Object(r.a)(i.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return f
			})), s.d(t, "m", (function() {
				return j
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "l", (function() {
				return R
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return N
			}));
			var o = s("./src/config.ts"),
				n = s("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				r = s("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				c = s("./src/redditGQL/types.ts"),
				d = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/models/Comment/addProfileImgParam.ts"),
				b = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				O = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const f = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/save`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/unsave`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/lock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				R = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/unlock`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/approve`),
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t, s) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/remove`),
					method: d.jb.POST,
					data: {
						id: t,
						spam: s
					}
				}),
				v = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				_ = (e, t) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: d.jb.POST,
					data: {
						id: t
					}
				}),
				k = (e, t, s, n) => {
					let r = Object(u.a)(Object(O.a)(Object(b.a)(`${o.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return n && (r = Object(p.a)(r)), Object(i.a)(e, {
						data: s,
						endpoint: r,
						method: d.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				T = (e, t, s, o) => Object(i.a)(Object(l.a)(e, [m.a]), {
					endpoint: Object(u.a)(`${e.apiUrl}/api/distinguish/${s}`),
					method: d.jb.POST,
					data: {
						id: t,
						sticky: o
					}
				}),
				y = {
					[d.G.NONE]: c.d.None,
					[d.G.MODERATOR]: c.d.ModDistinguished,
					[d.G.ADMIN]: c.d.AdminDistinguished,
					[d.G.ALUMNI_ADMIN]: c.d.AlumniDistinguished
				};

			function E(e, t, s) {
				const o = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === d.G.NONE ? c.b.None : c.b.Distinguished,
							distinguishType: y[t]
						}
					}
				}(t, s);
				return Object(a.a)(e, {
					...n,
					variables: o
				})
			}

			function N(e, t, s) {
				return Object(a.a)(e, {
					...r,
					variables: {
						input: {
							commentId: t,
							sticky: s
						}
					}
				})
			}
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
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
				c = ({
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
				d = e => t => ({
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
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(d);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("report", e.isFilled), i.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(c.a, null, e.desc))
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
				c = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				d = s.n(c);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(d.a.clock, e.className),
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
				c = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				d = s.n(c);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(d.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
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
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModModeBanners.f4211a0af7f62e625b97.js.map