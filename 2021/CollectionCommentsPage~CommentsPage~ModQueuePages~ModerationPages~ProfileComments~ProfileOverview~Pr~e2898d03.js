// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03.869829c8ad74bd72842e.js
// Retrieved at 6/14/2021, 11:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return c
			})), o.d(t, "a", (function() {
				return l
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "d", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/components/TrackingHelper/index.tsx"),
				a = o("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, o) => (n = (() => {})) => s => {
				const r = u(s.target, s.currentTarget),
					i = p(s.target, s.currentTarget);
				r && o && t && (m(s.target, s.currentTarget, l.anchors) ? o(t(e, r, i)) : o(o => {
					const n = t(e, r, i)(o);
					let s;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						s = t
					}
					return {
						...n,
						actionInfo: Object(a.previousPageActionInfo)(o, s)
					}
				})), m(s.target, s.currentTarget, l.anchorsAndButtons) && n(s)
			};

			function c(e) {
				const t = t => {
					const {
						sendEvent: o,
						eventFactory: r,
						clickTrackingId: a,
						...c
					} = t, l = Object(n.useCallback)(d(a, r, o), [a, r, o]);
					return s.a.createElement(e, i({}, c, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, o) => !o.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, o)),
				u = (e, t) => {
					const o = e.dataset.clickId;
					return o || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/colors/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return a
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "f", (function() {
				return d
			}));
			const n = "#FFF",
				s = "#FF4500",
				r = "#0079D3",
				a = "#46D160",
				i = {
					black: "#000",
					white: n,
					orangered: s,
					alienblue: r,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: s,
					downvote: "#7193FF",
					positive: a,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: s,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: s,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...i,
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
		"./src/reddit/actions/comment/moderation.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return k
			})), o.d(t, "c", (function() {
				return O
			})), o.d(t, "f", (function() {
				return C
			})), o.d(t, "a", (function() {
				return _
			})), o.d(t, "e", (function() {
				return I
			})), o.d(t, "g", (function() {
				return g
			})), o.d(t, "h", (function() {
				return y
			})), o.d(t, "b", (function() {
				return j
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				a = o("./src/lib/makeCommentsPageKey/index.ts"),
				i = o("./src/reddit/actions/modal.ts"),
				d = o("./src/reddit/actions/shortcuts/utils.ts"),
				c = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/constants/modals.ts"),
				m = o("./src/reddit/endpoints/comment/index.tsx"),
				u = o("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = o("./src/reddit/models/Reportable/index.ts"),
				b = o("./src/reddit/models/Toast/index.ts"),
				h = o("./src/reddit/selectors/commentSelector.ts"),
				x = o("./src/reddit/selectors/user.ts"),
				f = o("./src/reddit/actions/comment/index.ts"),
				E = o("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(E.n),
				k = e => async (t, o, {
					apiContext: n
				}) => {
					o().features.comments.models[e] && (await Object(m.h)(n(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, o, {
					apiContext: n
				}) => {
					if (!Object(x.K)(o())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const s = o().features.comments.models[e];
					if (!s) return;
					const r = s.isLocked ? m.j : m.d;
					t(Object(f.i)({
						[e]: {
							isLocked: !s.isLocked
						}
					})), (await r(n(), e)).ok || t(Object(f.i)({
						[e]: {
							isLocked: s.isLocked
						}
					}))
				}, C = Object(r.a)(E.F), _ = e => async (t, o, {
					apiContext: n
				}) => {
					const s = o(),
						r = s.features.comments.models[e],
						a = s.user.account ? s.user.account.displayText : null;
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
					})), (await Object(m.a)(n(), e)).ok || t(Object(f.i)({
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
				}, I = (e, t) => async (o, n, {
					apiContext: s
				}) => {
					const r = n(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (o(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(s(), e, t)).ok || o(Object(f.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(d.d)())
				}, g = e => async (t, o, {
					apiContext: n
				}) => {
					const s = o().features.comments.models[e];
					if (!s) return;
					const r = s.ignoreReports ? m.i : m.c;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !s.ignoreReports
						}
					})), (await r(n(), e)).ok || t(Object(f.i)({
						[e]: {
							ignoreReports: s.ignoreReports
						}
					}))
				}, y = (e, t, o) => async (r, a, {
					gqlContext: i
				}) => {
					const d = Object(h.a)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = o === s.Xb.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) r(Object(f.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, j = (e, t, o) => async (n, r, {
					apiContext: i
				}) => {
					const d = r(),
						c = d.features.comments.models[e];
					if (!c) return;
					const l = c.postId,
						u = d.postStickiedComments.data[l],
						p = s.g[t];
					n(Object(f.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === s.E.ADMIN,
							isMod: t === s.E.MODERATOR,
							isStickied: !!o
						}
					})), o && u && u !== e && n(Object(f.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(i(), e, p, o || null)).ok ? o && n(C({
						id: e,
						postId: l,
						commentsPageKey: Object(a.a)(l, null, {
							sort: s.s.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (n(Object(f.i)({
						[e]: {
							distinguishType: c.distinguishType,
							isAdmin: c.isAdmin,
							isMod: c.isMod,
							isStickied: c.isStickied
						}
					})), n(Object(f.i)({
						[u]: {
							isStickied: d.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/constants/index.ts"),
				l = o("./src/lib/lessComponent.tsx"),
				m = o("./src/reddit/actions/comment/moderation.ts"),
				u = o("./src/reddit/actions/tooltip.ts"),
				p = o("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = o("./src/reddit/components/ModModeReports/helpers.ts"),
				h = o("./src/reddit/components/TrackingHelper/index.tsx"),
				x = o("./src/reddit/contexts/PageLayer/index.tsx"),
				f = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				E = o("./src/reddit/helpers/trackers/modTools.ts"),
				v = o("./src/reddit/selectors/moderatingComments.ts"),
				k = o("./src/reddit/selectors/moderatorPermissions.ts"),
				O = o("./src/reddit/selectors/tooltip.ts"),
				C = o("./src/reddit/selectors/user.ts"),
				_ = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				I = o("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				g = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				y = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				T = o("./src/reddit/icons/svgs/Show/index.tsx"),
				M = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				N = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				A = o.n(N);
			const D = Object(x.t)(),
				S = e => `Distinguish--Dropdown--${e}`,
				w = Object(i.c)({
					currentUser: C.j,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(v.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(O.b)(S(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: o
						} = t;
						return Object(x.g)(e, t) || Object(k.k)(e, {
							subredditId: o.subredditId
						})
					},
					modModeEnabled: x.Q
				}),
				R = Object(a.b)(w, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (o, n) => e(Object(m.b)(t.id, o, n)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: S(t.id)
					}))
				}));
			t.a = D(R(l.a.wrapped(Object(h.c)(({
				className: e,
				comment: t,
				currentUser: o,
				isCommentAuthor: s,
				collapsedBecauseCrowdControl: a,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: h,
				onRemoveComment: x,
				onShowComment: v,
				onSpamComment: k,
				onToggleDistinguishDropdown: O,
				sendEvent: C,
				...N
			}) => {
				const D = Object(f.a)(i),
					w = Object(b.b)(t),
					R = t.isApproved && w,
					P = !!o && o.isEmployee,
					F = !t.isRemoved || t.bannedBy === c.k,
					B = a,
					L = e => C(Object(E.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || w) && r.a.createElement(M.a, {
					text: R ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), L("approve")
					}
				}, r.a.createElement(_.a, {
					className: A.a.icon
				})), F && r.a.createElement(r.a.Fragment, null, r.a.createElement(M.a, {
					text: t.bannedBy === c.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						x(), t.bannedBy === c.k ? L("confirm_remove") : L("remove")
					}
				}, r.a.createElement(y.a, {
					className: A.a.icon
				})), r.a.createElement(M.a, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						k(), L("spam")
					}
				}, r.a.createElement(j.a, {
					className: A.a.icon
				}))), r.a.createElement(M.a, {
					text: t.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						h(), L(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(g.a, {
					className: A.a.icon
				})), s && !P && !t.bannedBy && r.a.createElement(M.a, {
					className: Object(d.a)({
						[A.a.selected]: N.isDistinguishDropdownOpen
					}),
					onClick: () => {
						L("mod_distinguish_menu"), O()
					}
				}, r.a.createElement(I.a, null), r.a.createElement(p.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: N.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: P,
					isUserMod: D,
					onDistinguishComment: u,
					sendEventWithName: L,
					tooltipId: S(t.id)
				})), B && r.a.createElement(M.a, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						v()
					}
				}, r.a.createElement(T.a, {
					className: Object(d.a)(A.a.icon, A.a.Show)
				})))
			}), "CommentModToolsFlatlist", A.a)))
		},
		"./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less": function(e, t, o) {
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
				metaText: "_3yx4Dn0W3Yunucf5sVJeFU",
				separator: "_8b8fUdBRxCYj9MkNpFvvv",
				userBadges: "_3AXw8D3tzlqTRxjQdd5ve7",
				userFlairLine: "_3w527zTLhXkd08MyacMV9H"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/Role.m.less": function(e, t, o) {
			e.exports = {
				role: "LWgI-A6rN9Wajn1VLxu2A"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/author.m.less": function(e, t, o) {
			e.exports = {
				authorHoverCard: "sMaSljeAO1a-nAhrURxdj",
				container: "NL6v1uLnaxK0IHIJdUdel"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less": function(e, t, o) {
			e.exports = {
				cakeIcon: "qzCz_F3Awvfuuy1_7cdqT"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less": function(e, t, o) {
			e.exports = {
				commentAuthorLink: "wM6scouPXXsFDSZmZPHRo"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less": function(e, t, o) {
			e.exports = {
				crowdControlText: "_3UBJEBi_CJ8y1i9Up_67Hb"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/edited.m.less": function(e, t, o) {
			e.exports = {
				editedText: "_18WUrfxbke5CjwIjhXu6C-"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, o) {
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
				userBadges: "_3Ofd-Ek86mwX500i92F84q"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/hooks/useTracking.ts"),
				c = o("./src/reddit/actions/gold/powerups.ts"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/lib/classNames/index.ts"),
				u = o("./src/lib/constants/index.ts"),
				p = o("./src/lib/lessComponent.tsx"),
				b = o("./src/reddit/helpers/trackers/powerups.ts"),
				h = o("./src/reddit/components/AwardBadges/index.tsx"),
				x = o("./src/reddit/components/AuthorLink/index.tsx"),
				f = o("./src/reddit/selectors/experiments/econ/index.ts"),
				E = o("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				v = o.n(E);
			const k = e => {
				const t = Object(a.e)(f.d),
					{
						className: o,
						comment: n,
						isAuthorDeleted: s,
						isLivestreaming: i,
						isStrong: d,
						style: c
					} = e;
				return r.a.createElement(x.a, {
					className: Object(m.a)(v.a.commentAuthorLink, o),
					author: n.author,
					isAdmin: n.isAdmin,
					isAdminEmeritus: n.distinguishType === u.E.ALUMNI_ADMIN,
					isAuthorDeleted: s,
					isLivestreaming: i,
					isMod: n.isMod,
					isOp: n.isOp,
					isStrong: d,
					isUnstyled: t,
					style: c
				}, n.author)
			};
			var O = o("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx"),
				C = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				_ = o("./src/reddit/components/Flair/index.tsx"),
				I = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = o("./src/reddit/components/PostTopMeta/index.tsx"),
				y = o("./src/reddit/controls/MetaData/index.tsx"),
				j = o("./src/reddit/helpers/flair.ts"),
				T = o("./src/reddit/helpers/trackers/userFlair.ts"),
				M = o("./src/reddit/models/Comment/index.ts"),
				N = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				A = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				D = o("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				S = o.n(D);
			const w = ({
				authorClassName: e,
				className: t,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				renderedInOverlay: a
			}) => r.a.createElement(A.b, {
				className: Object(m.a)(S.a.authorHoverCard, t),
				postOrComment: o,
				tooltipType: a ? g.c.Lightbox : void 0
			}, r.a.createElement(N.b, {
				ignore: Object(M.f)(o) || !!o.distinguishType && o.distinguishType !== u.E.NONE,
				subredditId: o.subredditId,
				userId: o.authorId
			}, r.a.createElement(k, {
				className: e,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				isAuthorDeleted: Object(M.f)(o)
			})));
			var R = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				P = o("./src/reddit/icons/fonts/index.tsx");
			const F = (e, t, o = !1) => `${e}${t}${o?"inOverlay":""}`,
				B = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				L = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				U = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				H = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				X = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var V = o("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				z = o.n(V);
			const J = ({
				className: e,
				commentId: t,
				renderedInOverlay: o
			}) => {
				const s = Object(a.d)(),
					i = () => s(Object(l.h)({
						tooltipId: d
					})),
					d = F("CommentTopMeta--cakeday--", t, o),
					c = n.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(P.a, {
					name: "cake",
					isFilled: !0,
					className: Object(m.a)(z.a.cakeIcon, e),
					"aria-label": c,
					id: d,
					onMouseEnter: i,
					onMouseLeave: i
				}), r.a.createElement(R.c, {
					tooltipId: d,
					text: c
				}))
			};
			var Q = o("./src/lib/addQueryParams/index.ts"),
				W = o("./src/lib/humanizeDateTime/index.ts"),
				Y = o("./src/lib/timeAgo/index.ts"),
				K = o("./src/reddit/actions/comment/index.ts");
			const q = e => {
					const {
						className: t,
						comment: o,
						compact: n,
						renderedInOverlay: s
					} = e, i = Object(a.d)(), d = F("CommentTopMeta--Created--", o.id, s), c = () => i(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(Q.a)(o.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							G(i, o.id)
						},
						onMouseEnter: c,
						onMouseLeave: c,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Y.d)(o.created, {
						noPostfix: n,
						shortenedUnit: n
					}), r.a.createElement(R.c, {
						tooltipId: d,
						text: Object(W.a)(o.created)
					}))
				},
				G = (e, t) => {
					window.addEventListener("focus", (function o() {
						Z(e, t, o)
					}))
				},
				Z = (e, t, o) => {
					window.removeEventListener("focus", o), e(Object(K.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(K.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var $ = o("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				ee = o.n($);
			const {
				fbt: te
			} = o("./node_modules/fbt/lib/FbtPublic.js"), oe = () => r.a.createElement(y.a, {
				className: ee.a.crowdControlText
			}, te._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var ne = o("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				se = o.n(ne);
			const {
				fbt: re
			} = o("./node_modules/fbt/lib/FbtPublic.js"), ae = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(y.a, {
				className: se.a.editedText
			}, re._("edited {time}", [re._param("time", Object(Y.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ie = o("./src/reddit/helpers/isRemoved.ts"),
				de = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				ce = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				le = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				me = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				ue = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				pe = o("./src/reddit/icons/fonts/Report/index.tsx"),
				be = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				he = o("./src/reddit/models/AutomatedReporting/index.ts"),
				xe = o("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				fe = o.n(xe);
			const Ee = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: s
			}) => {
				const i = Object(a.d)(),
					d = e => () => i(Object(l.f)({
						tooltipId: e
					})),
					c = () => i(Object(l.i)()),
					u = t => F(t, e.id, s),
					p = u("CommentTopMeta--Automod--"),
					b = u("CommentTopMeta--Approve--"),
					h = u("CommentTopMeta--Remove--"),
					x = u("CommentTopMeta--Report--"),
					f = u("CommentTopMeta--Spam--"),
					E = e.bannedBy && Object(he.b)(e.bannedBy),
					v = d(h);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(le.a, {
					className: fe.a.approveIcon,
					desc: Object(de.a)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: b,
					text: Object(de.a)(e)
				})), Object(ie.a)(e) && !E && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue.a, {
					className: fe.a.removeIcon,
					desc: Object(de.c)(e),
					id: h,
					onMouseEnter: v,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(R.c, {
					tooltipId: h,
					text: Object(de.c)(e)
				})), Object(ie.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: fe.a.removalReason,
					onClick: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, n.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ie.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !E && r.a.createElement("a", {
					className: fe.a.removalReason,
					onMouseEnter: v,
					onMouseLeave: c
				}, n.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(me.a, {
					className: fe.a.lockIcon,
					desc: n.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(be.a, {
					className: fe.a.spamIcon,
					desc: Object(de.e)(e),
					id: f,
					onMouseEnter: d(f),
					onMouseLeave: c,
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(R.c, {
					tooltipId: f,
					text: Object(de.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(P.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(fe.a.automoderatorIcon, {
						[fe.a.removed]: !!e.bannedBy
					}),
					"aria-label": de.b,
					id: p,
					key: p,
					onMouseEnter: d(p),
					onMouseLeave: c
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(R.c, {
					tooltipId: p,
					text: de.b
				}), Object(ce.a)(e) && r.a.createElement(pe.a, {
					className: fe.a.reportIcon,
					desc: Object(de.d)(e.numReports),
					id: x,
					onMouseEnter: d(x),
					onMouseLeave: c,
					isFilled: !0
				}), Object(ce.a)(e) && r.a.createElement(R.c, {
					tooltipId: x,
					text: Object(de.d)(e.numReports)
				}), E && r.a.createElement("a", {
					className: fe.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", E)], {
					hk: "3C408F"
				})))
			};
			var ve, ke = o("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ve || (ve = {}));
			var Oe = o("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Ce = o.n(Oe);
			const _e = {
					[ve.Admin]: {
						color: ke.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: B
					},
					[ve.Mod]: {
						color: ke.c,
						label: n.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => U(e.subredditDisplayText)
					},
					[ve.Op]: {
						color: ke.a,
						label: n.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: H
					},
					[ve.AlumniAdmin]: {
						color: ke.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: L
					},
					[ve.Contractor]: {
						color: ke.a,
						label: n.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: X
					}
				},
				Ie = e => {
					const t = Object(a.d)(),
						o = function(e) {
							return e.isAdmin ? ve.Admin : e.isMod ? ve.Mod : e.isOp ? ve.Op : e.distinguishType === u.E.ALUMNI_ADMIN ? ve.AlumniAdmin : e.authorIsContractor ? ve.Contractor : null
						}(e.comment);
					if (!o) return null;
					if (o === ve.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: n,
						color: s,
						label: i,
						tooltipTemplate: d
					} = _e[o], c = F(n, e.comment.id, e.renderedInOverlay), p = d(e), b = () => t(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(m.a)(Ce.a.role, e.className),
						style: {
							color: s
						},
						id: c,
						onMouseEnter: b,
						onMouseLeave: b
					}, i), r.a.createElement(R.c, {
						tooltipId: c,
						text: p
					}))
				};
			var ge = o("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ye = o.n(ge);
			const {
				fbt: je
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Te = () => r.a.createElement(y.a, {
				className: ye.a.stickiedText
			}, je._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Me = o("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Ne = o.n(Me);
			const Ae = e => {
				const {
					className: t,
					collapsedBecauseCrowdControl: o,
					comment: s,
					flair: a,
					ignoreLock: i,
					isLivestreaming: c,
					renderedInOverlay: l,
					subredditDisplayText: u,
					renderContractorBadge: p
				} = e, b = Object(d.a)();
				if (s.isDeleted) return r.a.createElement("div", {
					className: Object(m.a)(Ne.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Ne.a.authorLine
				}, r.a.createElement("span", {
					className: Ne.a.metaText
				}, s.deletedBy === M.c.User ? n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : n.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(y.c, {
					className: Ne.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Ne.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				})));
				return r.a.createElement("div", {
					className: Object(m.a)(Ne.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Ne.a.authorLine
				}, !Object(M.f)(s) && r.a.createElement(C.b, {
					className: Ne.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: s.subredditId,
					userId: s.authorId,
					uniqueIdentifier: s.id
				}), r.a.createElement("div", {
					className: Ne.a.baselineItem
				}, r.a.createElement(w, {
					authorClassName: Ne.a.author,
					comment: s,
					isLivestreaming: c,
					renderedInOverlay: l
				})), o && r.a.createElement(oe, null), s.isAuthorCakeday && r.a.createElement(J, {
					className: Ne.a.baselineItem,
					commentId: s.id,
					renderedInOverlay: l
				}), r.a.createElement(I.a, {
					className: Ne.a.cryptoPoints,
					contentId: s.id,
					subredditId: s.subredditId,
					userId: s.authorId,
					username: s.author
				}), r.a.createElement(Ie, {
					className: Ne.a.role,
					comment: s,
					subredditDisplayText: u,
					renderContractorBadge: p,
					renderedInOverlay: l
				}), !Object(M.f)(s) && r.a.createElement(O.a, {
					className: Ne.a.achievementFlair,
					subredditId: s.subredditId,
					userId: s.authorId,
					onHover: () => {
						b(Object(T.e)(s.id, s.subredditId, s.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(y.c, {
					className: Ne.a.separator
				}), r.a.createElement(q, {
					key: "Created",
					className: Ne.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				}), s.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Ne.a.separator
				}), r.a.createElement(Te, null)), s.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Ne.a.separator
				}), r.a.createElement(ae, {
					compact: !0,
					editedAt: s.editedAt
				})), r.a.createElement(Ee, {
					comment: s,
					ignoreLock: i,
					renderedInOverlay: l
				}), r.a.createElement(h.a, {
					thing: s,
					tooltipType: l ? g.c.Lightbox : void 0
				})), a && !Object(j.o)(a) && r.a.createElement("span", {
					className: Ne.a.userFlairLine
				}, r.a.createElement(_.b, {
					className: Ne.a.flair,
					flair: a,
					forceSmallEmojis: !0
				})))
			};
			var De = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				Se = o("./src/reddit/selectors/economics.ts"),
				we = o("./src/reddit/models/Flair/index.ts"),
				Re = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				Pe = o("./src/reddit/icons/fonts/helpers.tsx"),
				Fe = o("./src/reddit/icons/fonts/Op/index.m.less"),
				Be = o.n(Fe);
			var Le = p.a.wrapped(e => r.a.createElement("i", {
					className: `${Object(Pe.b)("author",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(Pe.a, null, e.desc)), "OpIcon", Be.a),
				Ue = o("./src/reddit/selectors/subreddit.ts"),
				He = o("./src/reddit/selectors/userFlair.ts"),
				Xe = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Ve = o.n(Xe);

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Je = p.a.wrapped(_.b, "RightPositionedAuthorFlair", Ve.a),
				Qe = p.a.wrapped(Re.a, "AdminIcon", Ve.a),
				We = p.a.div("AdminEmeritus", Ve.a),
				Ye = p.a.wrapped(Le, "OpIcon", Ve.a),
				Ke = p.a.wrapped(Re.a, "ContractorIcon", Ve.a),
				qe = p.a.span("DeletedText", Ve.a),
				Ge = p.a.wrapped(y.a, "MetaSeparator", Ve.a),
				Ze = e => (t, {
					comment: o,
					renderedInOverlay: n
				}) => F(e, o.id, n),
				$e = Object(a.b)(() => Object(i.c)({
					adminTooltipId: Ze("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: Ze("CommentTopMeta--AdEm--"),
					contractorTooltipId: Ze("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ze("CommentTopMeta--Gold--"),
					modTooltipId: Ze("CommentTopMeta--Mod--"),
					opTooltipId: Ze("CommentTopMeta--OP--"),
					topSupporterTooltipId: Ze("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(Se.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const o = Object(Ue.J)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(He.d)(e, {
						subredditId: t.subredditId
					}),
					isCommentHeaderRedesignEnabled: f.d
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.d)("comment_top_supporter_badge"))
				}));
			t.a = $e(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: o,
					children: n,
					className: s,
					collapsed: a,
					collapsedBecauseCrowdControl: i,
					comment: c,
					commentsPageKey: l,
					contractorTooltipId: u,
					compact: p,
					flair: x,
					flairPosition: f,
					hasBadges: E,
					isCommentHeaderRedesignEnabled: v,
					isLivestreaming: k,
					isPostComment: O,
					ignoreFlairPosition: j,
					ignoreLock: T,
					modTooltipId: N,
					onHideTooltip: A,
					onShowTooltip: D,
					opTooltipId: S,
					openPowerupsModal: R,
					renderContractorBadge: P,
					renderedInOverlay: F,
					subredditDisplayText: B,
					topSupporterTooltipId: L
				} = e, U = Object(d.a)(), H = r.a.createElement(r.a.Fragment, null, r.a.createElement(De.b, {
					commentId: c.id
				}), r.a.createElement(De.a, {
					commentId: c.id,
					commentsPageKey: l
				}));
				if (O && v) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ae, {
					className: Object(m.a)(s, {
						[Ve.a.collapsed]: a
					}),
					collapsedBecauseCrowdControl: i,
					comment: c,
					flair: x || null,
					ignoreLock: T,
					isLivestreaming: k,
					renderedInOverlay: F,
					subredditDisplayText: B,
					renderContractorBadge: !!P
				}), H);
				if (c.isDeleted) return r.a.createElement(et, ze({}, e, {
					className: Object(m.a)(s, Ve.a.container, {
						[Ve.a.collapsed]: a
					})
				}));
				if (a) return r.a.createElement(tt, ze({}, e, {
					className: Object(m.a)(s, Ve.a.container, {
						[Ve.a.collapsed]: a
					})
				}));
				const X = !j && f === we.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(s, Ve.a.container, {
						[Ve.a.collapsed]: a,
						[Ve.a.hasBadges]: E,
						[Ve.a.liveStreaming]: k
					}),
					"data-testid": "comment-top-meta"
				}, x && X && r.a.createElement(_.b, {
					flair: x,
					forceSmallEmojis: p
				}), !Object(M.f)(c) && r.a.createElement(C.b, {
					className: Ve.a.userBadges,
					showAddCustom: !0,
					subredditId: c.subredditId,
					userId: c.authorId,
					uniqueIdentifier: c.id
				}), n && n, r.a.createElement(w, {
					comment: c,
					isLivestreaming: k,
					isStrong: !!p,
					renderedInOverlay: F
				}), i && r.a.createElement(oe, null), i && r.a.createElement(y.c, {
					className: Ve.a.metaText,
					key: "crowdControlSeparator"
				}), x && !X && r.a.createElement(Je, {
					flair: x,
					forceSmallEmojis: p
				}), !p && r.a.createElement(I.a, {
					className: Ve.a.publicPoints,
					contentId: c.id,
					metaSeparator: r.a.createElement(y.c, {
						className: Ve.a.metaText
					}),
					subredditId: c.subredditId,
					userId: c.authorId,
					username: c.author
				}), r.a.createElement(r.a.Fragment, null, H, !v && r.a.createElement(nt, {
					comment: c,
					compact: p,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: N,
					onHideTooltip: A,
					onShowTooltip: D,
					openPowerupsModal: () => {
						U(Object(b.r)("comment")), R()
					},
					opTooltipId: S,
					renderContractorBadge: P,
					renderedInOverlay: F,
					subredditDisplayText: B,
					topSupporterTooltipId: L
				}), v && r.a.createElement(Ie, {
					className: Ve.a.authorRole,
					comment: c,
					subredditDisplayText: B,
					renderContractorBadge: !!P,
					renderedInOverlay: F
				})), !p && r.a.createElement(r.a.Fragment, null, !c.isDeleted && !O && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.b, {
					className: Ve.a.metaText,
					isScoreHidden: c.isScoreHidden,
					score: c.score
				}), r.a.createElement(y.c, {
					className: Ve.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(q, {
					key: "Created",
					className: Ve.a.MetaLink,
					comment: c,
					renderedInOverlay: F
				}), c.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Ve.a.separator
				}), r.a.createElement(Te, null)), c.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(y.c, {
					className: Ve.a.separator
				}), r.a.createElement(ae, {
					editedAt: c.editedAt
				}))), r.a.createElement(Ee, {
					comment: c,
					ignoreLock: T,
					renderedInOverlay: F
				}), r.a.createElement(h.a, {
					thing: c,
					tooltipType: F ? g.c.Lightbox : void 0
				}))
			});
			const et = e => {
					const {
						childrenInfo: t,
						collapsed: o,
						className: s,
						comment: a,
						renderedInOverlay: i
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(qe, null, a.deletedBy === M.c.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(q, {
						key: "Created",
						className: Ve.a.MetaLink,
						comment: a,
						renderedInOverlay: i
					}), o && ot({
						childrenInfo: t
					}))
				},
				tt = e => {
					const {
						comment: t,
						className: o,
						childrenInfo: n,
						renderedInOverlay: s
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement("div", null, r.a.createElement(k, {
						comment: t,
						isAuthorDeleted: Object(M.f)(t)
					})), r.a.createElement(y.b, {
						className: Ve.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(y.c, {
						className: Ve.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(q, {
						key: "Created",
						className: Ve.a.MetaLink,
						comment: t,
						renderedInOverlay: s
					}), ot({
						childrenInfo: n
					}))
				},
				ot = e => {
					const {
						hasContinueThread: t,
						numChildren: o
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Ge, {
						className: Ve.a.metaText
					}, t ? n.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [n.fbt._plural(o, "number")], {
						hk: "13XC7a"
					}) : n.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [n.fbt._plural(o, "number")], {
						hk: "dhX9w"
					}))
				};
			class nt extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId), this.onShowTopSupporterTooltip = () => this.props.onShowTooltip(this.props.topSupporterTooltipId)
				}
				render() {
					const {
						comment: e,
						renderedInOverlay: t,
						...o
					} = this.props;
					return r.a.createElement(s.Fragment, null, e.isAuthorCakeday && r.a.createElement(J, {
						commentId: e.id,
						renderedInOverlay: t
					}), e.isAdmin && r.a.createElement(Qe, {
						desc: B(),
						id: o.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: !0
					}), e.isAdmin && st(o.adminTooltipId, B()), e.distinguishType === u.E.ALUMNI_ADMIN && r.a.createElement(We, {
						"aria-label": L(),
						id: o.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: o.onHideTooltip
					}, "Δ"), e.distinguishType === u.E.ALUMNI_ADMIN && st(o.adminEmeritusTooltipId, L()), e.isMod && r.a.createElement(P.a, {
						name: "mod",
						isFilled: !0,
						className: Ve.a.ModeratorIcon,
						"aria-label": U(o.subredditDisplayText),
						id: o.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: o.onHideTooltip
					}), e.isMod && st(o.modTooltipId, U(o.subredditDisplayText)), e.isOp && r.a.createElement(Ye, {
						desc: H(),
						id: o.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: !0
					}), e.isOp && st(o.opTooltipId, H()), o.renderContractorBadge && r.a.createElement(Ke, {
						desc: X(),
						id: o.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: o.onHideTooltip,
						isFilled: !0
					}), o.renderContractorBadge && st(o.contractorTooltipId, X()))
				}
			}
			const st = (e, t) => r.a.createElement(R.c, {
				tooltipId: e,
				text: t
			})
		},
		"./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less": function(e, t, o) {
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
		"./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less": function(e, t, o) {
			e.exports = {
				stickiedText: "_2wd-K5Djdc9TGPRGDgmkpX"
			}
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, o) {
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
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/constants/index.ts"),
				a = o("./node_modules/fbt/lib/FbtPublic.js"),
				i = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = o("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = o("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = o("./src/reddit/layout/row/Inline/index.tsx"),
				u = o("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = o.n(u);
			const b = i.a.div("DistinguishWrapper", p.a),
				h = i.a.wrapped(m.a, "Inline", p.a),
				x = i.a.wrapped(c.a, "RadioOff", p.a),
				f = i.a.wrapped(l.a, "RadioOn", p.a),
				E = e => s.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? s.a.createElement(f, null) : s.a.createElement(x, null), e.text),
				v = i.a.wrapped(e => {
					const {
						className: t,
						style: o,
						isAdminDistinguished: n,
						isUserEmployee: i,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return s.a.createElement(b, {
						className: t,
						style: o
					}, s.a.createElement(E, {
						onClick: () => u(r.E.NONE, null),
						selected: !c && !n,
						text: a.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && s.a.createElement(E, {
						onClick: () => u(r.E.MODERATOR, null),
						selected: c && !l,
						text: a.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && s.a.createElement(E, {
						onClick: () => u(r.E.MODERATOR, !0),
						selected: c && l,
						text: a.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && s.a.createElement(E, {
						onClick: () => u(r.E.ADMIN, null),
						selected: n && !l,
						text: a.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && d && m && s.a.createElement(E, {
						onClick: () => u(r.E.ADMIN, !0),
						selected: n && l,
						text: a.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var k = Object(d.a)(v);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: o,
					isUserEmployee: n,
					isUserMod: a,
					isModDistinguished: i,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return s.a.createElement("div", {
					className: t,
					id: u
				}, s.a.createElement(k, {
					isAdminDistinguished: o,
					isUserEmployee: n,
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.E.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.E.ADMIN ? m("admin_distinguish") : i && e !== r.E.MODERATOR ? m("undistinguish") : o && e !== r.E.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less": function(e, t, o) {
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
				achievementName: "_2RAw7XCPPgNLzOBs-_7Cix"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less": function(e, t, o) {
			e.exports = {
				container: "_2tytE20aBhQMtf6GkTvN3",
				hoverPopup: "_2-UmlwvzsKsjDIuXchymkf",
				icon: "_16Osj2XUXJVMQLOL8-1m8E",
				hiddenAchievementsCount: "BndgSmDj59XX1brHFAMZC"
			}
		},
		"./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return f
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/SubredditIcon/index.tsx"),
				d = o("./src/reddit/selectors/gold/powerups/achievements.ts"),
				c = o("./src/reddit/selectors/subreddit.ts"),
				l = o("./src/reddit/components/Econ/AchievementFlair/AchivementsHoverPopup.m.less"),
				m = o.n(l);
			const {
				fbt: u
			} = o("./node_modules/fbt/lib/FbtPublic.js"), p = ({
				className: e,
				subredditId: t,
				userId: o
			}) => {
				const n = Object(r.e)(e => Object(d.a)(e, {
						subredditId: t,
						userId: o
					})),
					l = Object(r.e)(e => Object(c.U)(e, {
						subredditId: t
					}));
				return s.a.createElement("div", {
					className: Object(a.a)(m.a.container, e)
				}, s.a.createElement("div", {
					className: m.a.header
				}, s.a.createElement(i.b, {
					className: m.a.subredditLogo,
					subredditOrProfile: l
				}), u._("{r/community} {=achievements}", [u._param("r/community", l.displayText), u._param("=achievements", s.a.createElement("span", {
					className: m.a.headerText
				}, u._("achievements", null, {
					hk: "1IkAza"
				})))], {
					hk: "3GkQD9"
				})), s.a.createElement("div", {
					className: m.a.headerDelimiter
				}), s.a.createElement("div", {
					className: m.a.achievements
				}, n.map(e => !e.isLocked && s.a.createElement("div", {
					className: m.a.achievementItem,
					key: e.type
				}, s.a.createElement("div", {
					className: m.a.achievementImgWrapper
				}, s.a.createElement("img", {
					className: m.a.achievementImg,
					src: e.icon.url,
					alt: e.name
				})), s.a.createElement("div", {
					className: m.a.achievementName
				}, s.a.createElement("span", null, e.name))))))
			};
			var b = o("./src/reddit/selectors/experiments/econ/index.ts"),
				h = o("./src/reddit/components/Econ/AchievementFlair/UserAchievementFlair.m.less"),
				x = o.n(h);
			const f = ({
					className: e,
					subredditId: t,
					userId: o,
					showPopupOnHover: n,
					onHover: i
				}) => {
					var c;
					const l = Object(r.e)(e => Object(d.c)(e, {
							subredditId: t,
							userId: o
						})),
						m = Object(r.e)(e => Object(d.d)(e, {
							subredditId: t,
							userId: o
						})),
						u = null === (c = Object(r.e)(e => Object(d.b)(e, {
							subredditId: t,
							userId: o
						}))) || void 0 === c ? void 0 : c.achievementTypes,
						h = !!l || !!m;
					if (!Object(r.e)(e => h && Object(b.h)(e)) || !u) return null;
					const f = (null == m ? void 0 : m.type) === (null == l ? void 0 : l.type) ? null : m,
						v = 1 + (f ? 1 : 0),
						k = (null == u ? void 0 : u.length) - v;
					return s.a.createElement("span", {
						className: Object(a.a)(x.a.container, e),
						"data-testid": "achievement-flairs",
						onMouseEnter: i
					}, s.a.createElement(E, {
						achievement: f
					}), s.a.createElement(E, {
						achievement: l
					}), !!k && s.a.createElement("span", {
						className: x.a.hiddenAchievementsCount
					}, "+", k), n && s.a.createElement(p, {
						className: x.a.hoverPopup,
						subredditId: t,
						userId: o
					}))
				},
				E = ({
					achievement: e
				}) => e ? s.a.createElement("img", {
					alt: e.name,
					className: x.a.icon,
					src: e.icon.url
				}) : null
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, o) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/ModModeReports/index.m.less"),
				d = o.n(i);
			const {
				fbt: c
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", d.a), m = a.a.div("Placeholder", d.a), u = () => r.a.createElement(m, null, r.a.createElement(l, null, c._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("ModerationDropdowns").then(o.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: r.a.createElement(u, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/ModerationPrompts/Prompt.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = o("./src/reddit/actions/post.ts"),
				c = o("./src/reddit/actions/reportFlow/index.ts"),
				l = o("./src/reddit/components/Popup/index.tsx"),
				m = o("./src/reddit/components/Popup/Button.tsx"),
				u = o("./src/reddit/helpers/trackers/reportPrompt.ts"),
				p = o("./src/reddit/hooks/useTracking.ts"),
				b = o("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function h(e) {
				const {
					subredditName: t,
					post: o,
					isOverlay: h
				} = e, [x, f] = Object(s.useState)(!0), E = Object(b.b)(o.id, h), v = Object(a.d)(), k = Object(p.a)(), O = Object(b.a)(o, h), C = (e, n) => k(Object(u.a)(t, o.id, e, n));
				Object(s.useEffect)(() => {
					O && C("modal", "show")
				}, [O]);
				if (!O || !x) return null;
				const _ = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: E,
					title: _,
					onClose: () => {
						f(!1), C("close", "click"), v(Object(d.E)()), v(Object(d.P)({
							[o.id]: {
								moderationPrompt: void 0
							}
						}))
					},
					onClickOutside: () => {
						v(Object(d.E)())
					}
				}, r.a.createElement("p", null, n.fbt._("Report this post if it's breaking {=Reddit} or {=community} rules.", [n.fbt._param("=Reddit", r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/content-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Reddit", null, {
					hk: "4g8g4O"
				}))), n.fbt._param("=community", r.a.createElement(i.a, {
					to: `/r/${t}/about/rules`,
					target: "_blank"
				}, n.fbt._("community", null, {
					hk: "1cy8jU"
				})))], {
					hk: "sfngx"
				})), r.a.createElement(m.a, {
					onClick: () => (f(!1), C("report", "click"), void v(Object(c.c)(o.id)))
				}, n.fbt._("Report", null, {
					hk: "4oVcnd"
				})))
			}
		},
		"./src/reddit/components/ModerationPrompts/Survey.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return x
			}));
			var n, s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/react/index.js"),
				a = o.n(r),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/actions/reportFlow/index.ts"),
				m = o("./src/reddit/components/Popup/index.tsx"),
				u = o("./src/reddit/components/Popup/Button.tsx"),
				p = o("./src/reddit/helpers/trackers/reportPrompt.ts"),
				b = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/components/ModerationPrompts/useActivePromptId.ts");

			function x(e) {
				const {
					subredditName: t,
					post: o,
					isOverlay: x
				} = e, [f, E] = Object(r.useState)(n.Survey), v = Object(h.b)(o.id, x), k = Object(i.d)(), O = Object(b.a)(), C = Object(h.a)(o, x), _ = (e, n) => O(Object(p.b)(t, o.id, e, n));
				Object(r.useEffect)(() => {
					C && _("modal", "show")
				}, [C]);
				const I = e => {
					E(n.Closed), _("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), k(Object(l.c)(o.id, void 0, e))
				};
				if (!C) return null;
				let g = null;
				const y = {
					id: v,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						E(n.Closed), _("close", "click"), k(Object(c.E)())
					},
					onClickOutside: () => {
						k(Object(c.E)())
					}
				};
				switch (f) {
					case n.Survey:
						g = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(u.a, {
							onClick: () => {
								E(n.OffTopic), _("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(u.a, {
							onClick: () => {
								E(n.DontLike), _("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(u.a, {
							onClick: () => {
								E(n.BreaksRules), _("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						g = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						g = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						g = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", a.a.createElement("a", {
							href: "https://www.redditinc.com/policies/content-policy",
							target: "_blank",
							rel: "noopener noreferrer"
						}, s.fbt._("Reddit", null, {
							hk: "1amvzD"
						}))), s.fbt._param("=community", a.a.createElement(d.a, {
							to: `/r/${t}/about/rules`,
							target: "_blank"
						}, s.fbt._("community", null, {
							hk: "2TnSrt"
						})))], {
							hk: "1mXxTX"
						})), a.a.createElement(u.a, {
							onClick: () => I("site")
						}, s.fbt._("It breaks Reddit rules", null, {
							hk: "3MxBm9"
						})), a.a.createElement(u.a, {
							onClick: () => I("community")
						}, s.fbt._("It breaks community rules", null, {
							hk: "3XbHan"
						})));
						break;
					case n.Closed:
				}
				return g
			}! function(e) {
				e[e.Survey = 0] = "Survey", e[e.OffTopic = 1] = "OffTopic", e[e.DontLike = 2] = "DontLike", e[e.BreaksRules = 3] = "BreaksRules", e[e.Closed = 4] = "Closed"
			}(n || (n = {}))
		},
		"./src/reddit/components/Popup/Button.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/components/Popup/index.m.less"),
				a = o.n(r);

			function i(e) {
				return s.a.createElement("button", {
					className: a.a.popupButton,
					onClick: e.onClick
				}, e.children)
			}
		},
		"./src/reddit/components/Popup/index.m.less": function(e, t, o) {
			e.exports = {
				popup: "t5ViKDVyrrlzRbCpXvJu7",
				header: "preWelIDv3a0Fgtd5_QjN",
				title: "_3Xw5NRiOh-SAcOXIUMIm-l",
				closeButton: "_3oee1_5V2jOvP4BaO2LCQu",
				popupButton: "_3nddrgCBXpzDP5XYzrH3ZY"
			}
		},
		"./src/reddit/components/Popup/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/uuid/v4.js"),
				a = o.n(r),
				i = o("./src/lib/hooks/useOnClickOutside.ts"),
				d = o("./src/reddit/components/Popup/index.m.less"),
				c = o.n(d);

			function l(e) {
				const {
					id: t = a()(),
					onClose: o,
					onClickOutside: n,
					title: r,
					children: d
				} = e;
				return Object(i.a)(t, n), s.a.createElement("div", {
					id: t,
					"aria-modal": !0,
					className: c.a.popup,
					role: "dialog",
					tabIndex: -1
				}, s.a.createElement("h3", {
					className: c.a.header
				}, s.a.createElement("span", {
					className: c.a.title
				}, r), s.a.createElement("button", {
					className: c.a.closeButton,
					onClick: o
				}, "✕")), d)
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, o) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				a = o("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				i = o("./src/reddit/components/PopupPortal/index.tsx"),
				d = o("./src/reddit/components/PostLeftRail/index.tsx"),
				c = o("./src/reddit/components/VerticalVotes/index.tsx"),
				l = o("./src/reddit/controls/Checkbox/index.tsx"),
				m = o("./src/reddit/helpers/isPost.ts"),
				u = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = o("./src/reddit/components/PostRailAndVotes/index.m.less"),
				b = o.n(p);
			t.a = e => {
				const {
					model: t,
					handleVote: o,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: p = !1,
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: x,
					redditStyle: f,
					subreddit: E,
					isOverlay: v,
					isActionBarAnimationEnabled: k,
					postId: O,
					isForceSelected: C
				} = e, _ = `upvote-button-${t.id}${v?"-overlay":""}`, {
					moderationPrompt: I
				} = t;
				return s.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && s.a.createElement(l.a, {
					className: b.a.checkbox,
					isCheckboxSelected: p,
					toggleCheckbox: h
				}), s.a.createElement(c.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: o,
					redditStyle: f,
					upvoteTooltipId: _,
					isActionBarAnimationEnabled: k,
					postId: O,
					isForceSelected: C,
					scoreClassName: b.a.score
				}), I && s.a.createElement(i.b, {
					rightOf: _
				}, "survey" === I ? s.a.createElement(a.a, {
					post: t,
					subredditName: E.name,
					isOverlay: !!v
				}) : s.a.createElement(r.a, {
					post: t,
					subredditName: E.name,
					isOverlay: !!v
				})))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, o) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/index.tsx"),
				i = o("./src/reddit/controls/Checkbox/index.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, o) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				a = o("./src/lib/lessComponent.tsx"),
				i = o("./src/lib/prettyPrintNumber/index.ts"),
				d = (o("./src/lib/timeAgo/index.ts"), o("./src/reddit/controls/MetaData/index.m.less")),
				c = o.n(d);
			const l = a.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: o,
					...s
				}) => {
					const a = Object(i.b)(t),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						c = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, s, c)
				},
				p = e => r.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/reddit/featureFlags/index.ts");

			function d(e, t, o) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, a = r;
					return n ? s.a.createElement(t, a) : void 0 !== o ? s.a.createElement(o, a) : null
				})
			}
		},
		"./src/reddit/helpers/trackers/reportPrompt.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			}));
			var n = o("./src/reddit/selectors/telemetry.ts");
			const s = (e, t, o, s) => r => ({
					source: "report_prompt",
					noun: o,
					action: s,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				}),
				r = (e, t, o, s) => r => ({
					source: "report_survey",
					noun: o,
					action: s,
					subreddit: n.subredditByName(r, e),
					post: n.post(r, t)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03.869829c8ad74bd72842e.js.map