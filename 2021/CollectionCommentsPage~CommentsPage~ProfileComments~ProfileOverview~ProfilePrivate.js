// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.042ccfcc17e2c091abb2.js
// Retrieved at 8/5/2021, 7:00:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (s = (() => {})) => o => {
				const a = u(o.target, o.currentTarget),
					i = p(o.target, o.currentTarget);
				a && n && t && (m(o.target, o.currentTarget, l.anchors) ? n(t(e, a, i)) : n(n => {
					const s = t(e, a, i)(n);
					let o;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						o = t
					}
					return {
						...s,
						actionInfo: Object(r.previousPageActionInfo)(n, o)
					}
				})), m(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: a,
						clickTrackingId: r,
						...d
					} = t, l = Object(s.useCallback)(c(r, a, n), [r, a, n]);
					return o.a.createElement(e, i({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(a.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, n)),
				u = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/colors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const s = "#FFF",
				o = "#FF4500",
				a = "#0079D3",
				r = "#24A0ED",
				i = "#46D160",
				c = {
					black: "#000",
					white: s,
					orangered: o,
					alienblue: a,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: r,
					secondary: "#006CBF",
					upvote: o,
					downvote: "#7193FF",
					positive: i,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: o,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: o,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...c,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "b", (function() {
				return I
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/actions/comment/index.ts"),
				E = n("./src/reddit/actions/comment/constants.ts");
			const v = Object(a.a)(E.n),
				C = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(m.h)(s(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(h.J)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const o = n().features.comments.models[e];
					if (!o) return;
					const a = o.isLocked ? m.j : m.d;
					t(Object(f.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await a(s(), e)).ok || t(Object(f.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, g = Object(a.a)(E.F), k = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						a = o.features.comments.models[e],
						r = o.user.account ? o.user.account.displayText : null;
					a && r && (t(Object(f.i)({
						[e]: {
							isApproved: !0,
							approvedBy: r,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(s(), e)).ok || t(Object(f.i)({
						[e]: {
							isApproved: a.isApproved,
							approvedBy: null,
							bannedBy: a.bannedBy,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam,
							modNote: a.modNote,
							modReasonBy: a.modReasonBy,
							modRemovalReason: a.modRemovalReason,
							numReports: a.numReports || null
						}
					})), Object(c.d)())
				}, _ = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						r = a.features.comments.models[e],
						i = a.user.account ? a.user.account.displayText : null;
					r && i && (n(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(o(), e, t)).ok || n(Object(f.i)({
						[e]: {
							approvedBy: r.approvedBy,
							bannedBy: r.bannedBy,
							isApproved: r.isApproved,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam
						}
					})), Object(c.d)())
				}, y = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().features.comments.models[e];
					if (!o) return;
					const a = o.ignoreReports ? m.i : m.c;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await a(s(), e)).ok || t(Object(f.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, j = (e, t, n) => async (a, r, {
					gqlContext: i
				}) => {
					const c = Object(x.a)(r(), {
						commentId: e
					});
					if (!c) return;
					const l = n === o.Xb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) a(Object(f.i)({
						[e]: {
							userReports: Object(p.a)(c.userReports, t, l)
						}
					}));
					else {
						const e = Object(d.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						a(Object(d.f)(e))
					}
				}, I = (e, t, n) => async (s, a, {
					apiContext: i
				}) => {
					const c = a(),
						d = c.features.comments.models[e];
					if (!d) return;
					const l = d.postId,
						u = c.postStickiedComments.data[l],
						p = o.g[t];
					s(Object(f.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.E.ADMIN,
							isMod: t === o.E.MODERATOR,
							isStickied: !!n
						}
					})), n && u && u !== e && s(Object(f.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(i(), e, p, n || null)).ok ? n && s(g({
						id: e,
						postId: l,
						commentsPageKey: Object(r.a)(l, null, {
							sort: o.s.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (s(Object(f.i)({
						[e]: {
							distinguishType: d.distinguishType,
							isAdmin: d.isAdmin,
							isMod: d.isMod,
							isStickied: d.isStickied
						}
					})), s(Object(f.i)({
						[u]: {
							isStickied: c.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = n.n(s);
			const a = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = a
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: c,
					callToAction: l,
					caption: m
				} = t;
				if (!c || !c.url) return null;
				let u = c.displayText;
				return c.displayText.length >= 40 && (u = c.displayText.slice(0, 40 - "...".length) + "..."), a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: d.a.leftSideContent
				}, m && !o && a.a.createElement("span", {
					className: d.a.caption,
					title: m
				}, m), a.a.createElement(i.a, {
					href: c.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, u)), l && a.a.createElement(r.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement(r.a, d({
				className: Object(a.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/comment/moderation.ts"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/trackers/modTools.ts"),
				u = n("./src/reddit/selectors/tooltip.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				h = n("./src/reddit/icons/svgs/Show/index.tsx"),
				f = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				E = n.n(f);
			const v = b.a.wrapped(h.a, "Show", E.a);
			var C = e => o.a.createElement(x.h, null, !e.comment.isApproved && o.a.createElement(x.f, {
				displayText: e.comment.approvedBy ? p.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : p.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(x.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(x.f, {
				displayText: e.comment.isRemoved ? p.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : p.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(x.j, null)), o.a.createElement(x.f, {
				displayText: e.comment.isSpam ? p.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : p.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(x.k, null)), o.a.createElement(x.f, {
				displayText: e.comment.isLocked ? p.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : p.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(x.i, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(x.f, {
				displayText: p.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(v, null)));
			const O = b.a.wrapped(l.a, "StyledDropdown", E.a),
				g = Object(r.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				k = Object(a.b)(g, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(i.a)(t.id)),
					onLockComment: () => e(Object(i.c)(t.id)),
					onRemoveComment: () => e(Object(i.e)(t.id, !1)),
					onSpamComment: () => e(Object(i.e)(t.id, !0)),
					onShowComment: () => e(Object(i.d)(t.id))
				})),
				_ = Object(c.a)(O),
				y = k(Object(d.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: s,
						onLockComment: a,
						onRemoveComment: r,
						onSpamComment: i,
						onShowComment: c,
						sendEvent: d,
						tooltipId: l
					} = e;
					return o.a.createElement(_, {
						isOpen: n,
						tooltipId: l
					}, o.a.createElement(C, {
						onApproveComment: () => {
							s(), d(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							r(), d(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							i(), d(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							a(), d(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							c(), d(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = y
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/modTools.ts"),
				f = n("./src/reddit/selectors/moderatingComments.ts"),
				E = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				N = n.n(I);
			const w = Object(x.t)(),
				T = e => `Distinguish--Dropdown--${e}`,
				A = Object(i.c)({
					currentUser: C.j,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(f.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(v.b)(T(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(x.g)(e, t) || Object(E.l)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: x.Q
				}),
				M = Object(r.b)(A, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: T(t.id)
					}))
				}));
			t.a = w(M(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: o,
				collapsedBecauseCrowdControl: r,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: b,
				onRemoveComment: x,
				onShowComment: f,
				onSpamComment: E,
				onToggleDistinguishDropdown: v,
				sendEvent: C,
				...I
			}) => {
				const w = Object(p.b)(t),
					T = t.isApproved && w,
					A = !t.isRemoved || t.bannedBy === d.k,
					M = r,
					F = e => C(Object(h.a)(e, t.id));
				return a.a.createElement("div", {
					className: e
				}, (t.bannedBy || w) && a.a.createElement(j.a, {
					text: T ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), F("approve")
					}
				}, a.a.createElement(O.a, {
					className: N.a.icon
				})), A && a.a.createElement(a.a.Fragment, null, a.a.createElement(j.a, {
					text: t.bannedBy === d.k ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						x(), t.bannedBy === d.k ? F("confirm_remove") : F("remove")
					}
				}, a.a.createElement(k.a, {
					className: N.a.icon
				})), a.a.createElement(j.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), F("spam")
					}
				}, a.a.createElement(_.a, {
					className: N.a.icon
				}))), a.a.createElement(j.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), F(t.isLocked ? "unlock" : "lock")
					}
				}, a.a.createElement(g.a, {
					className: N.a.icon
				})), M && a.a.createElement(j.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						f()
					}
				}, a.a.createElement(y.a, {
					className: Object(c.a)(N.a.icon, N.a.Show)
				})))
			}), "CommentModToolsFlatlist", N.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, n) {
			e.exports = {
				author: "DjcdNGtVXPcxG0yiFXIoZ",
				authorLine: "_1a_HxF03jCyxnx706hQmJR",
				headerLine: "_2nobNdIwmDrXK7NZps5zUO",
				flair: "cFNx42ceihnMpvAsovOTi",
				baselineItem: "_3QEK34iVL1BjyHAVleVVNQ",
				container: "-Xcv3XBXmgiY2X5RqaPbO",
				cryptoPoints: "_2bfuNFXt4pN8991xPpimzy",
				role: "_3AgEmWP1qkCB8nds7LhzEB",
				achievementFlair: "_2a_XgY10KOzM0PRvywwDuY",
				cakeDay: "TNzy9Y4Ql8v80YssZ59GR",
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, n) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A",
				modAchievement: "_2am63Mu1vtyM2MwmCJoxJp"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, n) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, n) {
			e.exports = {
				cakedayIcon: "_12wHSVQW6wUCbn56VnIfI-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, n) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, n) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, n) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, n) {
			e.exports = {
				iconStyles: "S8WH2aCfP030wVxp0iR_o",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				NftAuthor: "kDnKKJWz2PJGoalLInCW1",
				nftAuthor: "kDnKKJWz2PJGoalLInCW1",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				authorRole: "_3uDFtRr_CTErFPJQBtzECl",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				separator: "_1PuBpmbH2FA5sozYR7EuCs",
				userBadges: "_3Ofd-Ek86mwX500i92F84q",
				cakeDay: "UG2sa-VYMzrn7D1iNXtfR"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const b = e => {
				const {
					className: t,
					comment: n,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: d,
					style: l,
					collapsed: u
				} = e;
				return u && o ? a.a.createElement("p", {
					className: Object(c.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : a.a.createElement(m.a, {
					className: Object(c.a)(p.a.commentAuthorLink, t),
					author: n.author,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: r,
					isLivestreaming: i,
					isStrong: d,
					style: l
				}, n.author)
			};
			var x = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				h = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				E = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				v = n("./src/reddit/components/PostTopMeta/index.tsx"),
				C = n("./src/reddit/controls/MetaData/index.tsx"),
				O = n("./src/reddit/helpers/flair.ts"),
				g = n("./src/reddit/helpers/trackers/userFlair.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Comment/index.ts"),
				y = n("./src/reddit/selectors/experiments/econ/index.ts"),
				j = n("./src/reddit/selectors/gold/powerups/index.ts"),
				I = n("./src/lib/constants/index.ts"),
				N = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				w = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				T = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				A = n.n(T);
			const M = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: r,
				collapsed: i
			}) => a.a.createElement(w.b, {
				className: Object(c.a)(A.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: r ? v.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(_.g)(n),
				collapsed: i
			}, a.a.createElement(N.b, {
				ignore: Object(_.f)(n) || !!n.distinguishType && n.distinguishType !== I.E.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, a.a.createElement(b, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isCommentAuthorBlocked: Object(_.g)(n),
				isAuthorDeleted: Object(_.f)(n),
				collapsed: i
			})));
			var F = n("./src/config.ts"),
				S = n("./src/reddit/actions/tooltip.ts"),
				B = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const D = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var L = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				P = n.n(L);
			const R = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(r.d)(),
					i = () => o(Object(S.h)({
						tooltipId: d
					})),
					d = D("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
					className: Object(c.a)(P.a.cakedayIcon, e),
					src: `${F.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: d,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), a.a.createElement(B.c, {
					tooltipId: d,
					text: l
				}))
			};
			var H = n("./src/lib/addQueryParams/index.ts"),
				U = n("./src/reddit/actions/comment/index.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx");
			const V = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						renderedInOverlay: o
					} = e, i = Object(r.d)(), c = D("CommentTopMeta--Created--", n.id, o), d = () => i(Object(S.h)({
						tooltipId: c
					}));
					return a.a.createElement("a", {
						className: t,
						href: Object(H.a)(n.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: c,
						onClick: () => {
							X(i, n.id)
						},
						onMouseEnter: d,
						onMouseLeave: d,
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement(W.d, {
						seconds: n.created,
						noPostfix: s,
						shortenedUnit: s
					}), a.a.createElement(B.c, {
						tooltipId: c
					}, a.a.createElement(W.b, {
						seconds: n.created
					})))
				},
				X = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(U.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(U.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var J = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				Q = n.n(J);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => a.a.createElement(C.a, {
				className: Q.a.crowdControlText
			}, G._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				K = n.n(Z);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $ = ({
				compact: e,
				editedAt: t
			}) => a.a.createElement(C.a, {
				className: K.a.editedText
			}, q._("edited {time}", [q._param("time", a.a.createElement(W.d, {
				seconds: t,
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ee = n("./src/reddit/helpers/isRemoved.ts"),
				te = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ne = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				se = n("./src/reddit/icons/fonts/index.tsx"),
				oe = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				re = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				de = n("./src/reddit/models/AutomatedReporting/index.ts"),
				le = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				me = n.n(le);
			const ue = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const i = Object(r.d)(),
					d = e => () => i(Object(S.f)({
						tooltipId: e
					})),
					l = () => i(Object(S.i)()),
					m = t => D(t, e.id, o),
					u = m("CommentTopMeta--Automod--"),
					p = m("CommentTopMeta--Approve--"),
					b = m("CommentTopMeta--Remove--"),
					x = m("CommentTopMeta--Report--"),
					h = m("CommentTopMeta--Spam--"),
					f = e.bannedBy && Object(de.b)(e.bannedBy),
					E = d(b);
				return a.a.createElement(a.a.Fragment, null, (e.approvedBy || e.isApproved) && a.a.createElement(a.a.Fragment, null, a.a.createElement(oe.a, {
					className: me.a.approveIcon,
					desc: Object(te.a)(e),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: l,
					isFilled: !0
				}), a.a.createElement(B.c, {
					tooltipId: p,
					text: Object(te.a)(e)
				})), Object(ee.a)(e) && !f && a.a.createElement(a.a.Fragment, null, a.a.createElement(re.a, {
					className: me.a.removeIcon,
					desc: Object(te.c)(e),
					id: b,
					onMouseEnter: E,
					onMouseLeave: l,
					isFilled: !0
				}), a.a.createElement(B.c, {
					tooltipId: b,
					text: Object(te.c)(e)
				})), Object(ee.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && a.a.createElement("a", {
					className: me.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ee.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !f && a.a.createElement("a", {
					className: me.a.removalReason,
					onMouseEnter: E,
					onMouseLeave: l
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && a.a.createElement(ae.a, {
					className: me.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(ce.a, {
					className: me.a.spamIcon,
					desc: Object(te.e)(e),
					id: h,
					onMouseEnter: d(h),
					onMouseLeave: l,
					isFilled: !0
				}), e.bannedBy && e.isSpam && a.a.createElement(B.c, {
					tooltipId: h,
					text: Object(te.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && a.a.createElement(se.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(me.a.automoderatorIcon, {
						[me.a.removed]: !!e.bannedBy
					}),
					"aria-label": te.b,
					id: u,
					key: u,
					onMouseEnter: d(u),
					onMouseLeave: l
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && a.a.createElement(B.c, {
					tooltipId: u,
					text: te.b
				}), Object(ne.a)(e) && a.a.createElement(ie.a, {
					className: me.a.reportIcon,
					desc: Object(te.d)(e.numReports),
					id: x,
					onMouseEnter: d(x),
					onMouseLeave: l,
					isFilled: !0
				}), Object(ne.a)(e) && a.a.createElement(B.c, {
					tooltipId: x,
					text: Object(te.d)(e.numReports)
				}), f && a.a.createElement("a", {
					className: me.a.removalReason
				}, s.fbt._("• Removed by the Automated {filterName}", [s.fbt._param("filterName", f)], {
					hk: "3C408F"
				})))
			};
			var pe, be = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(pe || (pe = {}));
			var xe = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				he = n.n(xe);
			const fe = {
					[pe.Admin]: {
						color: be.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[pe.Mod]: {
						color: be.c,
						label: s.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[pe.Op]: {
						color: be.a,
						label: s.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[pe.AlumniAdmin]: {
						color: be.b,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[pe.Contractor]: {
						color: be.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				Ee = e => {
					const t = Object(r.d)(),
						n = function(e) {
							return e.isAdmin ? pe.Admin : e.isMod ? pe.Mod : e.isOp ? pe.Op : e.distinguishType === I.E.ALUMNI_ADMIN ? pe.AlumniAdmin : e.authorIsContractor ? pe.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === pe.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: i,
						tooltipTemplate: d
					} = fe[n], l = D(s, e.comment.id, e.renderedInOverlay), m = d(e), u = () => t(Object(S.h)({
						tooltipId: l
					}));
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
						className: Object(c.a)(he.a.role, e.className),
						style: {
							color: o
						},
						id: l,
						onMouseEnter: u,
						onMouseLeave: u
					}, a.a.createElement("span", null, i), n === pe.Mod && a.a.createElement(ve, null)), a.a.createElement(B.c, {
						tooltipId: l,
						text: m
					}))
				},
				ve = () => a.a.createElement("img", {
					alt: "Moderator Achievement",
					className: he.a.modAchievement,
					src: `${F.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ce = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Oe = n.n(Ce);
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = () => a.a.createElement(C.a, {
				className: Oe.a.stickiedText
			}, ge._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var _e = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				ye = n.n(_e);
			const je = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: d,
					ignoreLock: m,
					isLivestreaming: u,
					renderedInOverlay: p,
					subredditDisplayText: b,
					renderContractorBadge: I
				} = e, N = Object(k.a)(), w = i.subredditId, T = Object(r.e)(e => Object(j.f)(e, {
					subredditId: w
				}) && Object(y.g)(e));
				if (i.isDeleted) return a.a.createElement("div", {
					className: Object(c.a)(ye.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, a.a.createElement("span", {
					className: ye.a.authorLine
				}, a.a.createElement("span", {
					className: ye.a.metaText
				}, i.deletedBy === _.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), a.a.createElement(C.c, {
					className: ye.a.separator
				}), a.a.createElement(V, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					renderedInOverlay: p
				})));
				return a.a.createElement("div", {
					className: Object(c.a)(ye.a.container, t),
					"data-testid": "post-comment-header"
				}, a.a.createElement("span", {
					className: ye.a.authorLine
				}, !Object(_.f)(i) && a.a.createElement(h.b, {
					className: ye.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), a.a.createElement("div", {
					className: ye.a.baselineItem
				}, a.a.createElement(M, {
					authorClassName: ye.a.author,
					comment: i,
					isLivestreaming: u,
					renderedInOverlay: p,
					collapsed: n
				})), o && a.a.createElement(Y, null), a.a.createElement(Ee, {
					className: ye.a.role,
					comment: i,
					subredditDisplayText: b,
					renderContractorBadge: I,
					renderedInOverlay: p
				}), i.isAuthorCakeday ? a.a.createElement(R, {
					className: ye.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: p
				}) : !Object(_.f)(i) && T && a.a.createElement(x.a, {
					className: ye.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						N(Object(g.f)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), a.a.createElement(E.a, {
					className: ye.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), a.a.createElement(C.c, {
					className: ye.a.separator
				}), a.a.createElement(V, {
					key: "Created",
					className: ye.a.metaText,
					comment: i,
					compact: !0,
					renderedInOverlay: p
				}), i.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(C.c, {
					className: ye.a.separator
				}), a.a.createElement(ke, null)), i.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(C.c, {
					className: ye.a.separator
				}), a.a.createElement($, {
					compact: !0,
					editedAt: i.editedAt
				})), a.a.createElement(ue, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: p
				}), a.a.createElement(l.a, {
					thing: i,
					tooltipType: p ? v.c.Lightbox : void 0
				})), d && !Object(O.o)(d) && a.a.createElement("span", {
					className: ye.a.userFlairLine
				}, a.a.createElement(f.b, {
					className: ye.a.flair,
					flair: d,
					forceSmallEmojis: !0
				})))
			};
			var Ie = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				Ne = n("./src/reddit/selectors/economics.ts"),
				we = n("./src/reddit/models/Flair/index.ts"),
				Te = n("./src/reddit/selectors/subreddit.ts"),
				Ae = n("./src/reddit/selectors/userFlair.ts"),
				Me = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Fe = n.n(Me);

			function Se() {
				return (Se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = d.a.wrapped(f.b, "RightPositionedAuthorFlair", Fe.a),
				De = d.a.span("DeletedText", Fe.a),
				Le = d.a.wrapped(C.a, "MetaSeparator", Fe.a),
				Pe = Object(r.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(Ne.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Te.H)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ae.d)(e, {
						subredditId: t.subredditId
					})
				}));
			t.a = Pe(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: r,
					commentsPageKey: i,
					compact: d,
					flair: m,
					flairPosition: u,
					hasBadges: p,
					isLivestreaming: b,
					isPostComment: x,
					ignoreFlairPosition: O,
					ignoreLock: g,
					renderContractorBadge: k,
					renderedInOverlay: y,
					subredditDisplayText: j,
					userHasNft: I
				} = e, N = a.a.createElement(a.a.Fragment, null, a.a.createElement(Ie.b, {
					commentId: r.id
				}), a.a.createElement(Ie.a, {
					commentId: r.id,
					commentsPageKey: i
				}));
				if (x) return a.a.createElement(a.a.Fragment, null, a.a.createElement(je, {
					className: Object(c.a)(n, {
						[Fe.a.collapsed]: s
					}),
					collapsedBecauseCrowdControl: o,
					comment: r,
					flair: m || null,
					ignoreLock: g,
					isLivestreaming: b,
					renderedInOverlay: y,
					subredditDisplayText: j,
					renderContractorBadge: !!k,
					collapsed: s
				}), N);
				if (r.isDeleted) return a.a.createElement(Re, Se({}, e, {
					className: Object(c.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: s
					})
				}));
				if (s) return a.a.createElement(He, Se({}, e, {
					className: Object(c.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: s
					})
				}));
				const w = !O && u === we.b.Left;
				return a.a.createElement("div", {
					className: Object(c.a)(n, Fe.a.container, {
						[Fe.a.collapsed]: s,
						[Fe.a.hasBadges]: p,
						[Fe.a.liveStreaming]: b
					}),
					"data-testid": "comment-top-meta"
				}, m && w && a.a.createElement(f.b, {
					flair: m,
					forceSmallEmojis: d
				}), !Object(_.f)(r) && a.a.createElement(h.b, {
					className: Fe.a.userBadges,
					showAddCustom: !0,
					subredditId: r.subredditId,
					userId: r.authorId,
					uniqueIdentifier: r.id
				}), t && t, a.a.createElement(M, {
					authorClassName: I ? Fe.a.NftAuthor : void 0,
					comment: r,
					isLivestreaming: b,
					isStrong: !!d,
					renderedInOverlay: y,
					collapsed: s
				}), o && a.a.createElement(Y, null), o && a.a.createElement(C.c, {
					className: Fe.a.metaText,
					key: "crowdControlSeparator"
				}), m && !w && a.a.createElement(Be, {
					flair: m,
					forceSmallEmojis: d
				}), !d && a.a.createElement(E.a, {
					className: Fe.a.publicPoints,
					contentId: r.id,
					metaSeparator: a.a.createElement(C.c, {
						className: Fe.a.metaText
					}),
					subredditId: r.subredditId,
					userId: r.authorId,
					username: r.author
				}), N, a.a.createElement(Ee, {
					className: Fe.a.authorRole,
					comment: r,
					subredditDisplayText: j,
					renderContractorBadge: !!k,
					renderedInOverlay: y
				}), !d && a.a.createElement(a.a.Fragment, null, !r.isDeleted && !x && a.a.createElement(a.a.Fragment, null, a.a.createElement(C.b, {
					className: Fe.a.metaText,
					isScoreHidden: r.isScoreHidden,
					score: r.score
				}), a.a.createElement(C.c, {
					className: Fe.a.metaText,
					key: "scoreCreatedSeparator"
				})), a.a.createElement(V, {
					key: "Created",
					className: Fe.a.MetaLink,
					comment: r,
					renderedInOverlay: y
				}), r.isStickied && a.a.createElement(a.a.Fragment, null, a.a.createElement(C.c, {
					className: Fe.a.separator
				}), a.a.createElement(ke, null)), r.editedAt && a.a.createElement(a.a.Fragment, null, a.a.createElement(C.c, {
					className: Fe.a.separator
				}), a.a.createElement($, {
					editedAt: r.editedAt
				}))), a.a.createElement(ue, {
					comment: r,
					ignoreLock: g,
					renderedInOverlay: y
				}), a.a.createElement(l.a, {
					thing: r,
					tooltipType: y ? v.c.Lightbox : void 0
				}))
			});
			const Re = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: r,
						renderedInOverlay: i
					} = e;
					return a.a.createElement("div", {
						className: o
					}, a.a.createElement(De, null, r.deletedBy === _.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), a.a.createElement(V, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: r,
						renderedInOverlay: i
					}), n && Ue({
						childrenInfo: t
					}))
				},
				He = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: r
					} = e;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", null, a.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(_.f)(t),
						collapsed: r
					})), a.a.createElement(C.b, {
						className: Fe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), a.a.createElement(C.c, {
						className: Fe.a.metaText,
						key: "scoreCreatedSeparator"
					}), a.a.createElement(V, {
						key: "Created",
						className: Fe.a.MetaLink,
						comment: t,
						renderedInOverlay: o
					}), Ue({
						childrenInfo: s
					}))
				},
				Ue = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return a.a.createElement(Le, {
						className: Fe.a.metaText
					}, t ? s.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : s.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [s.fbt._plural(n, "number")], {
						hk: "dhX9w"
					}))
				}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, n) {
			e.exports = {
				approveIcon: "_3Jlybj1GmQS_PfZVxE6yR1",
				automoderatorIcon: "_2EBjdWEqs2dwPePq0_1vJn",
				lockIcon: "YjyVr4SnBmO7WorLVMXq5",
				removeIcon: "_3M_jIwyB1POxBFR2jnGIp_",
				reportIcon: "_3hI84iVaolaHi85h6liPyp",
				spamIcon: "MufLXlXcv1oes9OlakuXr",
				removed: "_2LQnjoTNHDUWKBOoq2gTlm",
				removalReason: "EM8fL_jC3oe9bruIOZt2U"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, n) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, n) {
			e.exports = {
				DistinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				distinguishWrapper: "_3aVdI6Y8gye7mgZBvUx5X-",
				Inline: "_2fiLaXOPdMYold0b-FKdVN",
				inline: "_2fiLaXOPdMYold0b-FKdVN",
				RadioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				radioOff: "_1kl3eXeS_cuuM03T3_G8G1",
				RadioOn: "_1EcSEYj-g98-QR-5idlQZr",
				radioOn: "_1EcSEYj-g98-QR-5idlQZr",
				DistinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO",
				distinguishOptions: "_1uVj4QJ6tIy-PC9lK3eOYO"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const b = i.a.div("DistinguishWrapper", p.a),
				x = i.a.wrapped(m.a, "Inline", p.a),
				h = i.a.wrapped(d.a, "RadioOff", p.a),
				f = i.a.wrapped(l.a, "RadioOn", p.a),
				E = e => o.a.createElement(x, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(f, null) : o.a.createElement(h, null), e.text),
				v = i.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: s,
						isUserEmployee: i,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: n
					}, o.a.createElement(E, {
						onClick: () => u(a.E.NONE, null),
						selected: !d && !s,
						text: r.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && o.a.createElement(E, {
						onClick: () => u(a.E.MODERATOR, null),
						selected: d && !l,
						text: r.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && c && o.a.createElement(E, {
						onClick: () => u(a.E.MODERATOR, !0),
						selected: d && l,
						text: r.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && o.a.createElement(E, {
						onClick: () => u(a.E.ADMIN, null),
						selected: s && !l,
						text: r.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && c && m && o.a.createElement(E, {
						onClick: () => u(a.E.ADMIN, !0),
						selected: s && l,
						text: r.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var C = Object(c.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: r,
					isModDistinguished: i,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: u
				}, o.a.createElement(C, {
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: r,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === a.E.MODERATOR ? m(!c && t ? "distinguish_sticky" : "distinguish") : e === a.E.ADMIN ? m("admin_distinguish") : i && e !== a.E.MODERATOR ? m("undistinguish") : n && e !== a.E.ADMIN && m("admin_undistinguish"), c && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, n) {
			e.exports = {
				container: "_3kd-dlN-SayusCxdP2netc",
				header: "_2qYkItLcJFJyORCGH9k8xc",
				subredditLogo: "_1vh_JamIt2dZYY7uwMHHv8",
				headerText: "_1FyMArbFbR91zDup_aXAUI",
				headerDelimiter: "_1O5D69EOlVhvj5bzxwHE38",
				achievements: "_2184liSTNqbtEvYN_pvrvZ",
				achievementItem: "DpiFfz95qctN0--U4vopM",
				achievementImgWrapper: "EP4eFqOgkm9TaTOXYXyIA",
				achievementImg: "_32rRB3c7q17wOs_Fz7Bdk",
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix",
				footer: "_18M7nTbpMAhYLhlWT-5tla",
				scrollGradient: "_2nRTIGjTOu0IHUU0XJ6h9n",
				gradientHidden: "_3w5lLzB0F6x5aTwB7KfhJv",
				ctaButton: "D7NSPqulzWmB1gE8x95iQ"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, n) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/gold/powerups.ts"),
				c = n("./src/reddit/components/SubredditIcon/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/userFlair.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				x = n.n(b);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e,
				subredditId: t,
				userId: n
			}) => {
				const b = Object(a.e)(e => Object(u.a)(e, {
						subredditId: t,
						userId: n
					})),
					f = Object(a.e)(e => Object(p.S)(e, {
						subredditId: t
					})),
					E = Object(a.d)(),
					v = Object(m.a)(),
					[C, O] = Object(s.useState)(!1),
					g = Object(s.useRef)(null),
					k = () => {
						const e = g.current;
						if (!e) return;
						const t = e.getBoundingClientRect().height,
							n = Math.ceil(e.scrollTop + t) >= e.scrollHeight;
						O(n)
					};
				Object(s.useEffect)(() => {
					k()
				}, []);
				return o.a.createElement("div", {
					className: Object(r.a)(x.a.container, e)
				}, o.a.createElement("div", {
					className: x.a.header
				}, o.a.createElement(c.b, {
					className: x.a.subredditLogo,
					subredditOrProfile: f
				}), h._("{r/community} {=achievements}", [h._param("r/community", f.displayText), h._param("=achievements", o.a.createElement("span", {
					className: x.a.headerText
				}, h._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), o.a.createElement("div", {
					className: x.a.headerDelimiter
				}), o.a.createElement("div", {
					className: x.a.achievements,
					onScroll: k,
					ref: g
				}, b.map(e => !e.isLocked && o.a.createElement("div", {
					className: x.a.achievementItem,
					key: e.type
				}, o.a.createElement("div", {
					className: x.a.achievementImgWrapper
				}, o.a.createElement("img", {
					className: x.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), o.a.createElement("div", {
					className: x.a.achievementName
				}, o.a.createElement("span", null, e.name))))), o.a.createElement("div", {
					className: x.a.footer
				}, o.a.createElement("div", {
					className: Object(r.a)(x.a.scrollGradient, {
						[x.a.gradientHidden]: C
					})
				}), o.a.createElement(d.q, {
					priority: d.b.Secondary,
					className: x.a.ctaButton,
					onClick: () => {
						v(Object(l.d)()), E(Object(i.e)())
					},
					isFullWidth: !0
				}, h._("View your achievements", null, {
					hk: "2ZyIE3"
				}))))
			};
			var E = n("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				v = n.n(E);
			const C = ({
					className: e,
					subredditId: t,
					userId: n,
					showPopupOnHover: i,
					onHover: c
				}) => {
					var d;
					const l = Object(a.e)(e => Object(u.c)(e, {
							subredditId: t,
							userId: n
						})),
						m = Object(a.e)(e => Object(u.d)(e, {
							subredditId: t,
							userId: n
						})),
						p = null === (d = Object(a.e)(e => Object(u.b)(e, {
							subredditId: t,
							userId: n
						}))) || void 0 === d ? void 0 : d.achievementTypes,
						[b, x] = Object(s.useState)(!1);
					if (!(!!l || !!m) || !p) return null;
					const h = (null == m ? void 0 : m.type) === (null == l ? void 0 : l.type) ? null : m,
						E = 1 + (h ? 1 : 0),
						C = (null == p ? void 0 : p.length) - E;
					return o.a.createElement("span", {
						className: Object(r.a)(v.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: () => {
							i && (x(!0), null == c || c())
						},
						onMouseLeave: () => {
							x(!1)
						}
					}, o.a.createElement(O, {
						achievement: h
					}), o.a.createElement(O, {
						achievement: l
					}), !!C && o.a.createElement("span", {
						className: v.a.hiddenAchievementsCount
					}, "+", C), i && b && o.a.createElement(f, {
						className: v.a.hoverPopup,
						subredditId: t,
						userId: n
					}))
				},
				O = ({
					achievement: e
				}) => e ? o.a.createElement("img", {
					alt: e.name,
					className: v.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				m = n("./src/reddit/helpers/postEvent.ts"),
				u = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(m.a)(n)) return null;
				const s = n && n.eventInfo,
					i = Object(l.a)(n),
					u = s && Object(r.c)(s.eventStart, s.eventEnd);
				return o.a.createElement("div", {
					className: Object(a.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !i && u && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/eventTools/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var m = e => o.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var u = e => o.a.createElement("i", {
					className: Object(i.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				x = n.n(b),
				h = n("./src/lib/lessComponent.tsx");
			const f = h.a.span("PostEventFutureText", x.a),
				E = h.a.span("PostEventPastText", x.a),
				v = h.a.span("PostEventNowText", x.a),
				C = h.a.span("Container", x.a),
				O = h.a.wrapped(m, "CalendarIcon", x.a),
				g = h.a.wrapped(u, "LiveIcon", x.a),
				k = h.a.div("LoadingState", x.a);
			class _ extends s.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: i,
						eventStart: c
					} = n, d = Object(a.e)(c, s);
					let l, m;
					if (this.state.mounted || d === a.a.Live) l = o.a.createElement(p.c, {
						startTime: c,
						endTime: s,
						isLive: i
					});
					else {
						const e = Object(r.a)({
							isLoading: !0
						});
						l = o.a.createElement(k, {
							className: e
						})
					}
					if (i) m = o.a.createElement(v, null, o.a.createElement(g, null), l);
					else if (d === a.a.Future) m = o.a.createElement(f, null, o.a.createElement(O, null), l);
					else {
						if (d !== a.a.Past) return null;
						m = o.a.createElement(E, null, o.a.createElement(O, null), l)
					}
					return o.a.createElement(C, {
						className: e
					}, m)
				}
			}
			t.a = _
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/telemetry/models/Outbound.ts"),
				h = n("./src/reddit/components/ExpandoButton/index.m.less"),
				f = n.n(h);
			const E = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				v = (e, t = !1, n) => {
					const s = Object(c.a)(f.a.icon, f.a.hideOnHover);
					if (t) return a.a.createElement(p.a, {
						name: "crosspost",
						className: s
					});
					if (n.pollData) return a.a.createElement(p.a, {
						name: "poll_post",
						className: s
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return a.a.createElement(p.a, {
								name: "gif_post",
								className: s
							});
						case b.o.IMAGE:
							return a.a.createElement(p.a, {
								name: "image_post",
								className: s
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return a.a.createElement(p.a, {
								name: "text_post",
								className: s
							});
						case b.o.VIDEO:
							return a.a.createElement(p.a, {
								name: "video_post",
								className: s
							});
						case b.o.GALLERY:
							return a.a.createElement(p.a, {
								name: "media_gallery",
								className: s
							});
						case b.o.EMBED:
						default:
							return a.a.createElement(p.a, {
								name: "embed",
								className: s
							})
					}
				};
			t.a = E(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: o,
					isCommentsPage: r,
					isExpanded: l,
					post: b,
					toggle: h,
					useMediaIcons: E
				} = e, C = n || b, O = o && !!n;
				return C.media && !(("rtjson" === C.media.type || "text" === C.media.type) && !Object(u.a)(C)) || !!b.pollData ? a.a.createElement("button", {
					"aria-expanded": !!l,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, f.a.outer),
					"data-click-id": l ? "expando_close" : "expando_open",
					onClick: h
				}, l ? a.a.createElement(p.a, {
					name: "collapse",
					className: f.a.icon
				}) : E ? a.a.createElement(a.a.Fragment, null, v(C.media && C.media.type, O, b), a.a.createElement(p.a, {
					name: "expand",
					className: Object(c.a)(f.a.icon, f.a.showOnHover)
				})) : a.a.createElement(p.a, {
					name: "expand",
					className: f.a.icon
				})) : C.source && C.source.url ? a.a.createElement(m.b, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					href: C.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: r ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage,
					target: "_blank"
				}, a.a.createElement(p.a, {
					name: "external_link",
					className: Object(c.a)(f.a.icon, f.a.outboundLinkIcon)
				})) : a.a.createElement(i.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, f.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(C.permalink),
					rel: "nofollow"
				}, a.a.createElement(p.a, {
					name: "text_post",
					className: f.a.icon
				}))
			})
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.div("Text", c.a), m = r.a.div("Placeholder", c.a), u = () => a.a.createElement(m, null, a.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(s.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: a.a.createElement(u, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/ads/index.ts"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var m = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						a = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						r = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, a, r), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/lib/classNames/index.ts"),
				E = n("./src/lib/objectSelector/index.ts"),
				v = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = n("./src/reddit/components/PostContainer/index.m.less"),
				O = n.n(C);
			const g = Object(p.a)(() => Object(a.c)({
					basePixelMetadata: Object(E.a)((e, {
						post: t
					}) => Object(x.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(x.i)(e, {
						postId: t.id
					}),
					pageType: e => Object(h.actionInfo)(e).pageType
				})),
				k = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						n = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && n
				};
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: a,
						makePostContainerId: d,
						post: l,
						onClick: u,
						onPostContentClick: p,
						pageType: x,
						sendEvent: h,
						style: E,
						ref: v,
						shouldAddGalleryViewability: C = !0
					} = this.props, g = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: E,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && (e(() => u && u(n, l, t, a, x))(n), p && k(n) && p(n, l)), l.id && a) {
								const {
									source: e
								} = Object(r.t)(l, a);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(O.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), _ = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || _ ? o.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(b.E)(l.media) && C ? o.a.createElement(m, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = g(Object(v.c)(Object(u.c)(_)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/helpers/trackers/postCollection.ts"),
				u = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(u);
			class b extends a.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, a = !!s;
						o(e ? Object(m.o)({
							postId: n,
							isFollowed: a
						}) : Object(m.g)({
							postId: n,
							isFollowed: a
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: n
					} = this.props, o = this.state.isHovered, r = n.isFollowed;
					let i = r ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return r && o && (i = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), a.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const x = Object(r.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/CrosspostBox/index.tsx"),
				r = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(a.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(r.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
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
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "h", (function() {
				return w
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				i = n("./src/reddit/controls/Dropdown/Row.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				l = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				b = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				x = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				h = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				f = n.n(h);
			const E = a.a.wrapped(d.a, "Icon", f.a),
				v = a.a.wrapped(l.a, "Icon", f.a),
				C = a.a.wrapped(m.a, "Icon", f.a),
				O = a.a.wrapped(u.a, "Icon", f.a),
				g = a.a.wrapped(p.a, "Icon", f.a),
				k = a.a.wrapped(b.a, "Icon", f.a),
				_ = () => o.a.createElement(c.a, {
					name: "mod_mute",
					className: f.a.Icon
				}),
				y = () => o.a.createElement(c.a, {
					name: "calendar",
					className: f.a.Icon
				}),
				j = () => o.a.createElement(x.a, {
					className: f.a.svgIcon
				}),
				I = a.a.wrapped(r.b, "CheckboxMenuItem", f.a),
				N = a.a.wrapped(i.b, "DropdownRow", f.a),
				w = a.a.div("ListContainer", f.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				r = n("./src/reddit/components/VerticalVotes/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				l = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = n.n(l);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: l = !1,
					isCountAnimShadowTestEnabled: u,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: h,
					isVoteCountAnimation: f,
					postId: E
				} = e, v = `upvote-button-${t.id}${h?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, s && o.a.createElement(i.a, {
					className: m.a.checkbox,
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), o.a.createElement(r.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: n,
					redditStyle: x,
					upvoteTooltipId: v,
					isVoteCountAnimation: f,
					isCountAnimShadowTestEnabled: u,
					postId: E,
					scoreClassName: m.a.score
				}))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = n.n(s),
				a = n("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", o.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = (e, t, n) => null != n ? n : t ? e : r.b.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...s
				}) => a.a.createElement(r.q, m({}, s, {
					priority: u(r.b.Primary, e, t),
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? r.c.S : r.c.M
				})),
				b = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), a.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				x = ({
					buttonType: e,
					border: t,
					priority: n,
					small: s,
					...o
				}) => a.a.createElement(r.q, m({}, o, {
					priority: u(r.b.Secondary, t, n),
					className: Object(l.a)(o.className, d.a.BaseButton),
					size: s ? r.c.S : r.c.M,
					text: b(e)
				}));
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : (this.props.onSubscribe(), this.props.enableNotificationTooltipAfterSubscription && this.props.enableNotificationTooltipAfterSubscription()), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: o = !1,
						isFullWidth: r = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: o,
						isFullWidth: r
					};
					return this.props.userIsSubscriber ? a.a.createElement(x, m({}, c, {
						buttonType: this.props.identifier.type
					})) : a.a.createElement(p, m({}, c, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(s.c)(a.a))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => o.a.createElement("div", t, o.a.createElement(r.b, {
					type: r.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				u = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(r.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				x = n("./src/reddit/constants/componentSizes.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				C = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = n.n(k);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => a.a.createElement(b.a, {
					className: Object(d.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, a.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? a.a.createElement(f.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : a.a.createElement(a.a.Fragment, null, e.isError ? a.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : a.a.createElement(a.a.Fragment, null, e.communities.map(t => a.a.createElement(N, y({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && a.a.createElement(h.q, {
					className: _.a.bottomButton,
					kind: h.a.Button,
					priority: h.b.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(c.c)({
					hideNSFWPref: O.B,
					nightmode: O.V
				}),
				N = Object(r.b)(I)(e => a.a.createElement("div", {
					className: Object(d.a)(_.a.communityItemContainer, {
						[_.a.withBottomFlair]: e.isNSFW
					})
				}, a.a.createElement(v.a, {
					className: _.a.communityItemExpandCenter,
					widthRight: x.t
				}, a.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? a.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : a.a.createElement(E.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(_.a.defaultCommunityIcon, {
						[_.a.mNightmode]: e.nightmode
					})
				})), a.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, a.a.createElement(i.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(g.b)(e.name, e.type),
					to: Object(g.a)(e.name, e.type)
				}, Object(g.b)(e.name, e.type)), a.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && a.a.createElement("p", {
					className: _.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && a.a.createElement(l.b, {
					className: _.a.nsfwFlair,
					flair: {
						type: C.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? a.a.createElement(f.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : a.a.createElement(h.q, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? a.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : a.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && a.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function r(e, t) {
				return t === s.a.PROFILE ? Object(o.d)(e) : Object(o.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/constants/gold.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			}));
			const s = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				a = 20,
				r = 4,
				i = 1e4,
				c = .2,
				d = .1,
				l = .1,
				m = 500
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(r.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(a.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = r.a.span("metaText", d.a),
				m = e => a.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const r = Object(i.b)(t),
						c = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "2L3T21"
						}),
						d = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", r)], {
							hk: "gf67v"
						});
					return a.a.createElement(l, o, d)
				},
				p = e => a.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(r.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(s)(e => {
					const {
						featureEnabled: s,
						...a
					} = e, r = a;
					return s ? o.a.createElement(t, r) : void 0 !== n ? o.a.createElement(n, r) : null
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(a.a)(Object(r.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(a.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(a.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const a = e => o.a.createElement("svg", {
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
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(i);
			t.a = Object(a.a)(e => o.a.createElement("div", {
				className: Object(r.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/posts.ts");
			const i = Object(s.a)(e => Object(a.c)(e, {
				experimentName: o.ad,
				experimentEligibilitySelector: a.a
			}), r.G, (e, t) => e === o.kd.Enabled && (null == t ? void 0 : t.isCreatedFromAdsUi) || (null == t ? void 0 : t.isSponsored))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.042ccfcc17e2c091abb2.js.map