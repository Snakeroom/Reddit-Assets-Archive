// https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.c958e5b8784ff5129d62.js
// Retrieved at 9/21/2021, 7:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ViewReportsDropdown-index"], {
		"./src/reddit/actions/comment/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return E
			})), o.d(t, "m", (function() {
				return T
			})), o.d(t, "e", (function() {
				return D
			})), o.d(t, "h", (function() {
				return B
			})), o.d(t, "l", (function() {
				return z
			})), o.d(t, "q", (function() {
				return F
			})), o.d(t, "j", (function() {
				return K
			})), o.d(t, "g", (function() {
				return $
			})), o.d(t, "f", (function() {
				return Z
			})), o.d(t, "o", (function() {
				return V
			})), o.d(t, "p", (function() {
				return Q
			})), o.d(t, "d", (function() {
				return X
			})), o.d(t, "a", (function() {
				return q
			})), o.d(t, "b", (function() {
				return G
			})), o.d(t, "n", (function() {
				return W
			})), o.d(t, "c", (function() {
				return Y
			})), o.d(t, "k", (function() {
				return ee
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./src/config.ts"),
				n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/telemetry/index.ts"),
				d = o("./src/lib/makeActionCreator/index.ts"),
				c = o("./src/reddit/actions/economics/helpers/async.ts"),
				i = o("./src/lib/loadableAction/index.ts");
			const a = Object(i.a)(() => o.e("AchievementsActions").then(o.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection));
			var m = o("./src/reddit/actions/login.ts"),
				l = o("./src/reddit/actions/modal.ts"),
				p = o("./src/reddit/actions/presence.ts"),
				u = o("./src/reddit/actions/shortcuts/utils.ts"),
				b = o("./src/reddit/actions/toaster.ts"),
				f = o("./src/reddit/actions/vote.ts"),
				O = o("./src/reddit/endpoints/comment/index.tsx"),
				j = o("./src/reddit/helpers/commentList/index.ts"),
				x = o("./src/reddit/helpers/trackers/comment.ts"),
				h = o("./src/reddit/models/Comment/index.ts"),
				g = o("./src/reddit/models/Post/index.ts"),
				v = o("./src/reddit/models/Toast/index.ts"),
				R = o("./src/reddit/models/Vote/index.ts"),
				w = o("./src/reddit/selectors/comments.ts"),
				y = o("./src/reddit/selectors/commentSelector.ts"),
				C = o("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				k = o("./src/reddit/selectors/moderatingComments.ts"),
				_ = o("./src/reddit/selectors/user.ts"),
				I = o("./src/reddit/actions/comment/constants.ts");
			const S = {},
				E = Object(d.a)(I.o),
				T = e => async (t, o, {
					apiContext: s
				}) => {
					if (!Object(_.K)(o())) return t(Object(m.k)()), void t(Object(l.k)({
						actionSource: l.a.Save,
						redirectUrl: Object(w.m)(o(), {
							commentId: e
						})
					}));
					const r = o().features.comments.models[e];
					if (!r) return;
					const d = r.isSaved ? O.k : O.g;
					if (t(E({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await d(s(), e)).ok) {
						const o = r.isSaved ? n.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : n.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = n.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(b.f)({
							text: o,
							kind: v.b.Undo,
							buttonText: s,
							buttonAction: T(e)
						}))
					} else t(E({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, P = e => `viewing-comment-${e}`, A = s.a.telemetry.commentConsumedThreshold, D = e => async (t, o) => {
					const n = o();
					if (!Object(y.b)(n, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					x.g({
						state: n,
						commentId: e
					}), r.c.start(P(e));
					const d = setTimeout(() => x.a({
						state: n,
						commentId: e
					}), A);
					S[e] = d
				}, B = (e, t) => async (o, s) => {
					const n = s(),
						d = P(e);
					if (Object(y.b)(n, {
							commentId: e
						}) && r.c.has(d)) {
						const o = r.c.end(d);
						!t && o < A && (clearTimeout(S[e]), delete S[e])
					}
				}, N = Object(d.a)(I.x), L = Object(d.a)(I.w), U = Object(d.a)(I.v), z = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const r = s(),
						d = r.moreComments.models[t],
						i = r.platform.currentPage,
						m = i && i.routeMatch,
						l = m && m.match,
						{
							partialPostId: u
						} = l ? l.params : null;
					if (!u) return;
					const b = Object(g.s)(u);
					o(N({
						moreCommentsId: d.id
					}));
					const f = await Object(O.e)(n(), b, {
						token: d.token
					}, Object(C.a)(r));
					if (f.ok) {
						const t = f.body,
							s = Object(j.a)(t, b, r);
						o(L({
							key: e,
							moreCommentsItem: d,
							shouldCollapse: s,
							...t
						}));
						const n = r.posts.models[b];
						let i;
						n && "subreddit" === n.belongsTo.type && t.comments && (i = n.belongsTo.id, await o(Object(c.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [n.id],
							skip: ["communityDetails", "subscription"],
							subredditId: i
						})));
						const m = f.body.comments,
							l = f.body.posts;
						await o(Object(p.b)(l, m, i)), await o(a(i, m))
					} else o(U({
						moreCommentsItem: d,
						...f.error
					}))
				}, F = Object(f.a)(j.b, R.a.upvoted), K = Object(f.a)(j.b, R.a.downvoted), $ = Object(d.a)(I.j), Z = Object(d.a)(I.i), H = Object(d.a)(I.e), M = Object(d.a)(I.f), V = (Object(d.a)(I.c), Object(d.a)(I.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: o
				}) => async (s, n) => {
					const r = n(),
						d = Object(h.i)(e),
						c = Object(w.n)(r, {
							commentLink: d,
							commentsPageKey: t
						}),
						i = Object(k.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						a = c.depth;
					s(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: i
					})), i || 0 !== a || o(e, !0), Object(u.d)()
				}), Q = ({
					commentId: e,
					commentsPageKey: t
				}) => async o => {
					o(M({
						commentId: e,
						commentsPageKey: t
					}))
				}, X = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: o,
					scrollToAndRemeasure: s
				}) => async (n, r) => {
					const d = r(),
						c = Object(j.e)(t, e, o, d),
						i = Object(k.b)(d, {
							commentId: e.id,
							commentsPageKey: t
						});
					n(H({
						commentId: c,
						commentsPageKey: t,
						isCollapsed: i
					})), 0 === o && s(c, !0), Object(u.d)()
				}, J = Object(d.a)(I.r), q = e => t => t(J({
					draftKey: e
				})), G = Object(d.a)(I.a), W = Object(d.a)(I.E), Y = Object(d.a)(I.b), ee = Object(d.a)(I.u)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return g
			})), o.d(t, "c", (function() {
				return v
			})), o.d(t, "f", (function() {
				return R
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "e", (function() {
				return y
			})), o.d(t, "g", (function() {
				return C
			})), o.d(t, "h", (function() {
				return k
			})), o.d(t, "b", (function() {
				return _
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				d = o("./src/lib/makeCommentsPageKey/index.ts"),
				c = o("./src/reddit/actions/modal.ts"),
				i = o("./src/reddit/actions/shortcuts/utils.ts"),
				a = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/constants/modals.ts"),
				l = o("./src/reddit/endpoints/comment/index.tsx"),
				p = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = o("./src/reddit/models/Reportable/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				f = o("./src/reddit/selectors/commentSelector.ts"),
				O = o("./src/reddit/selectors/user.ts"),
				j = o("./src/reddit/actions/comment/index.ts"),
				x = o("./src/reddit/actions/comment/constants.ts");
			const h = Object(r.a)(x.n),
				g = e => async (t, o, {
					apiContext: s
				}) => {
					o().features.comments.models[e] && (await Object(l.h)(s(), e)).ok && t((e => async t => {
						t(h({
							commentId: e
						}))
					})(e))
				}, v = e => async (t, o, {
					apiContext: s
				}) => {
					if (!Object(O.K)(o())) return void t(Object(c.i)(m.a.LOGIN_MODAL_ID));
					const n = o().features.comments.models[e];
					if (!n) return;
					const r = n.isLocked ? l.j : l.d;
					t(Object(j.i)({
						[e]: {
							isLocked: !n.isLocked
						}
					})), (await r(s(), e)).ok || t(Object(j.i)({
						[e]: {
							isLocked: n.isLocked
						}
					}))
				}, R = Object(r.a)(x.F), w = e => async (t, o, {
					apiContext: s
				}) => {
					const n = o(),
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
					})), (await Object(l.a)(s(), e)).ok || t(Object(j.i)({
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
				}, y = (e, t) => async (o, s, {
					apiContext: n
				}) => {
					const r = s(),
						d = r.features.comments.models[e],
						c = r.user.account ? r.user.account.displayText : null;
					d && c && (o(Object(j.i)({
						[e]: {
							approvedBy: null,
							bannedBy: c,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.f)(n(), e, t)).ok || o(Object(j.i)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam
						}
					})), Object(i.d)())
				}, C = e => async (t, o, {
					apiContext: s
				}) => {
					const n = o().features.comments.models[e];
					if (!n) return;
					const r = n.ignoreReports ? l.i : l.c;
					t(Object(j.i)({
						[e]: {
							ignoreReports: !n.ignoreReports
						}
					})), (await r(s(), e)).ok || t(Object(j.i)({
						[e]: {
							ignoreReports: n.ignoreReports
						}
					}))
				}, k = (e, t, o) => async (r, d, {
					gqlContext: c
				}) => {
					const i = Object(f.b)(d(), {
						commentId: e
					});
					if (!i) return;
					const m = o === n.Zb.Snoozed,
						l = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(p.a)(c(), {
							input: l
						})).ok) r(Object(j.i)({
						[e]: {
							userReports: Object(u.a)(i.userReports, t, m)
						}
					}));
					else {
						const e = Object(a.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(a.f)(e))
					}
				}, _ = (e, t, o) => async (s, r, {
					apiContext: c
				}) => {
					const i = r(),
						a = i.features.comments.models[e];
					if (!a) return;
					const m = a.postId,
						p = i.postStickiedComments.data[m],
						u = n.g[t];
					s(Object(j.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.F.ADMIN,
							isMod: t === n.F.MODERATOR,
							isStickied: !!o
						}
					})), o && p && p !== e && s(Object(j.i)({
						[p]: {
							isStickied: !1
						}
					})), (await Object(l.b)(c(), e, u, o || null)).ok ? o && s(R({
						id: e,
						postId: m,
						commentsPageKey: Object(d.a)(m, null, {
							sort: n.t.CONFIDENCE,
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
						[p]: {
							isStickied: i.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/presence.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			})), o.d(t, "b", (function() {
				return p
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				d = o("./src/lib/omitHeaders/index.ts"),
				c = o("./src/reddit/constants/headers.ts"),
				i = o("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var a = o("./src/reddit/selectors/experiments/presenceIndicator.ts");
			const m = "PRESENCE__PRESENTUSERS_LOADED",
				l = Object(s.a)(m),
				p = (e, t, o) => async (s, m, {
					apiContext: p
				}) => {
					const u = m();
					if (!Object(a.a)(u)) return;
					const b = new Set;
					e && Object.values(e).map(e => {
						e.authorId && b.add(e.authorId)
					}), t && Object.values(t).map(e => {
						e.authorId && b.add(e.authorId)
					});
					const f = await (async (e, t, o) => Object(r.a)(Object(d.a)(e, [c.a]), {
						endpoint: Object(i.a)(`${e.apiUrl}/api/presence`),
						method: n.ib.POST,
						data: {
							user_fullnames: t.join(","),
							subreddit_fullname: o || ""
						}
					}).then(e => {
						if (!e.ok) return {
							presentUsers: []
						};
						const o = e.body.present_user_fullnames || [],
							s = new Set(o),
							n = {};
						return t.forEach(e => {
							n[e] = s.has(e)
						}), {
							presentUsers: n
						}
					}))(p(), Array.from(b), o);
					s(l(f))
				}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/Reports/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/Reports/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return N
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/lessComponent.tsx"),
				d = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/constants/index.ts"),
				a = o("./src/reddit/actions/comment/moderation.ts"),
				m = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				p = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/index.tsx"),
				f = o("./src/reddit/controls/Dropdown/Row.tsx"),
				O = o("./src/reddit/helpers/isComment.ts"),
				j = o("./src/reddit/helpers/trackers/modTools.ts"),
				x = o("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				h = o("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = o("./src/reddit/icons/svgs/Clock/index.tsx"),
				v = o("./src/reddit/icons/svgs/Undo/index.tsx"),
				R = o("./src/reddit/selectors/tooltip.ts"),
				w = o("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				y = o.n(w);
			const {
				fbt: C
			} = o("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, _ = Object(d.b)(() => Object(c.c)({
				isDropdownOpen: (e, t) => Object(R.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(l.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: o => {
					Object(O.a)(t.reportedThingId) ? e(Object(a.h)(t.reportedThingId, t.reason, o)) : e(Object(m.ab)(t.reportedThingId, t.reason, o))
				}
			})), I = Object(p.a)(b.a);
			class S extends n.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? i.Zb.None : i.Zb.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(j.l)(Object(O.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: o,
						openDropdown: s,
						isDropdownOpen: r,
						isSnoozed: d
					} = this.props, c = k(e, o);
					return n.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, n.a.createElement(f.b, {
						id: c,
						className: y.a.DropdownLabelContainer,
						onClick: s
					}, n.a.createElement("label", {
						htmlFor: c,
						className: y.a.DropdownLabel
					}, d ? "Reporter snoozed" : `${t}: ${e}`, r ? n.a.createElement(h.a, null) : n.a.createElement(x.a, null))), n.a.createElement(I, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, n.a.createElement("button", {
						className: y.a.SnoozeButton,
						onClick: this.onSnoozeButtonClick
					}, n.a.createElement("div", {
						className: y.a.SnoozeButtonContent
					}, d ? n.a.createElement(n.a.Fragment, null, n.a.createElement(v.a, null), C._("Undo snoozing reports from this user", null, {
						hk: "4iqfWB"
					})) : n.a.createElement(n.a.Fragment, null, n.a.createElement(g.a, null), C._("Snooze reports from this user for 7 days", null, {
						hk: "4cRFyG"
					}))))))
				}
			}
			var E = _(Object(u.c)(S)),
				T = o("./src/reddit/components/Reports/index.m.less"),
				P = o.n(T);
			const {
				fbt: A
			} = o("./node_modules/fbt/lib/FbtPublic.js"), D = r.a.div("ReportText", P.a), B = r.a.div("ReportsTitle", P.a);

			function N(e) {
				const {
					className: t,
					modReports: o,
					userReports: s,
					reportedThingId: r
				} = e;
				return n.a.createElement("div", {
					className: t
				}, o && o.length > 0 && n.a.createElement("div", {
					className: P.a.Reports
				}, n.a.createElement(B, null, A._("Moderator Reports", null, {
					hk: "3hZ0oX"
				})), o.map(([e, t]) => n.a.createElement(D, {
					key: `mod-${t}`
				}, `u/${t}: ${e}`))), s && s.length > 0 && n.a.createElement("div", {
					className: P.a.Reports
				}, n.a.createElement(B, null, A._("User Reports", null, {
					hk: "2KeCLz"
				})), n.a.createElement("div", {
					className: P.a.UserReports
				}, s.map(([e, t, o, s]) => void 0 !== o && s ? n.a.createElement(E, {
					key: `user-${e}`,
					reason: e,
					amount: t,
					reportedThingId: r,
					isSnoozed: o
				}) : n.a.createElement(D, {
					key: `user-${e}`
				}, `${t}: ${e}`)))))
			}
		},
		"./src/reddit/components/ViewReportsDropdown/ReportsList.m.less": function(e, t, o) {
			e.exports = {
				Footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				footer: "_3gYQVpWufsDzXIdO0AVQ3C",
				FooterButton: "N4PQSWJIy71lacAE0bgsp",
				footerButton: "N4PQSWJIy71lacAE0bgsp"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.m.less": function(e, t, o) {
			e.exports = {
				StyledDropdown: "_2E7inYp2OX8O0j2rbGsnw8",
				styledDropdown: "_2E7inYp2OX8O0j2rbGsnw8"
			}
		},
		"./src/reddit/components/ViewReportsDropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = o("./src/reddit/controls/Dropdown/index.tsx"),
				m = o("./src/reddit/selectors/tooltip.ts"),
				l = o("./node_modules/fbt/lib/FbtPublic.js"),
				p = o("./src/reddit/components/Reports/index.tsx"),
				u = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				b = o("./src/reddit/layout/row/Inline/index.tsx"),
				f = o("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				O = o.n(f);
			const j = c.a.wrapped(b.a, "Footer", O.a),
				x = c.a.wrapped(u.c, "FooterButton", O.a);
			var h = e => n.a.createElement("div", null, n.a.createElement(p.a, {
					modReports: e.modReports,
					userReports: e.userReports,
					reportedThingId: e.reportedThingId
				}), !e.isShowingHistoricalReports && n.a.createElement(j, null, n.a.createElement(x, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? l.fbt._("Restore reports", null, {
						hk: "3wbqh7"
					}) : l.fbt._("Ignore reports", null, {
						hk: "4dr3Qm"
					})
				}))),
				g = o("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				v = o.n(g);
			const R = c.a.wrapped(a.a, "StyledDropdown", v.a),
				w = Object(d.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				y = Object(r.b)(w),
				C = Object(i.a)(R),
				k = y(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						o = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						s = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(C, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, n.a.createElement(h, {
						ignoreReports: e.model.ignoreReports,
						modReports: o,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: s,
						reportedThingId: e.model.id
					}))
				});
			t.default = k
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return p
			})), o.d(t, "k", (function() {
				return u
			})), o.d(t, "d", (function() {
				return b
			})), o.d(t, "j", (function() {
				return f
			})), o.d(t, "a", (function() {
				return O
			})), o.d(t, "f", (function() {
				return j
			})), o.d(t, "c", (function() {
				return x
			})), o.d(t, "i", (function() {
				return h
			})), o.d(t, "h", (function() {
				return g
			})), o.d(t, "e", (function() {
				return v
			})), o.d(t, "b", (function() {
				return R
			}));
			var s = o("./src/config.ts"),
				n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				d = o("./src/lib/omitHeaders/index.ts"),
				c = o("./src/reddit/constants/headers.ts"),
				i = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = o("./src/reddit/models/Comment/addProfileImgParam.ts"),
				m = o("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				l = o("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const p = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/save`),
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				u = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unsave`),
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/lock`),
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/unlock`),
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/approve`),
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, o) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/remove`),
					method: n.ib.POST,
					data: {
						id: t,
						spam: o
					}
				}),
				x = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: n.ib.POST,
					data: {
						id: t
					}
				}),
				v = (e, t, o, d) => {
					let c = Object(i.a)(Object(l.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return d && (c = Object(a.a)(c)), Object(r.a)(e, {
						data: o,
						endpoint: c,
						method: n.ib.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				R = (e, t, o, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/distinguish/${o}`),
					method: n.ib.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return r
			})), o.d(t, "a", (function() {
				return d
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "e", (function() {
				return a
			})), o.d(t, "d", (function() {
				return m
			})), o.d(t, "c", (function() {
				return l
			}));
			var s = o("./src/telemetry/index.ts"),
				n = o("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
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
				}) => Object(s.a)({
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
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, o) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = o.n(d);
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
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, o) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = o.n(d);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/experiments/presenceIndicator.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return d
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				n = o("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.qd
					}) === s.Bd.Enabled
				},
				d = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.pd
					}) === s.Ad.Enabled
				}
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return n
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: o
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[o] && t in e.features.comments.collapsed[o]) return !!e.features.comments.collapsed[o][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				n = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const o = e.features.comments.models[t];
					return !(!o || !o.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ViewReportsDropdown-index.c958e5b8784ff5129d62.js.map