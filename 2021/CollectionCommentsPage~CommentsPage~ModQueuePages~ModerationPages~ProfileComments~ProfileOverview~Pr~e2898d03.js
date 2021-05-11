// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03.39f7def1d5f813bba122.js
// Retrieved at 5/11/2021, 1:30:07 PM by Reddit Dataminer v1.0.0
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
				return E
			})), o.d(t, "c", (function() {
				return k
			})), o.d(t, "f", (function() {
				return O
			})), o.d(t, "a", (function() {
				return g
			})), o.d(t, "e", (function() {
				return I
			})), o.d(t, "g", (function() {
				return _
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
				C = o("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(C.n),
				E = e => async (t, o, {
					apiContext: n
				}) => {
					o().features.comments.models[e] && (await Object(m.h)(n(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, k = e => async (t, o, {
					apiContext: n
				}) => {
					if (!Object(x.J)(o())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
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
				}, O = Object(r.a)(C.F), g = e => async (t, o, {
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
				}, _ = e => async (t, o, {
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
					const l = o === s.Ub.Snoozed,
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
							isAdmin: t === s.C.ADMIN,
							isMod: t === s.C.MODERATOR,
							isStickied: !!o
						}
					})), o && u && u !== e && n(Object(f.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(i(), e, p, o || null)).ok ? o && n(O({
						id: e,
						postId: l,
						commentsPageKey: Object(a.a)(l, null, {
							sort: s.r.CONFIDENCE,
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
				C = o("./src/reddit/helpers/trackers/modTools.ts"),
				v = o("./src/reddit/selectors/moderatingComments.ts"),
				E = o("./src/reddit/selectors/moderatorPermissions.ts"),
				k = o("./src/reddit/selectors/tooltip.ts"),
				O = o("./src/reddit/selectors/user.ts"),
				g = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				I = o("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				_ = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				y = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				T = o("./src/reddit/icons/svgs/Show/index.tsx"),
				M = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				N = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				A = o.n(N);
			const S = Object(x.t)(),
				D = e => `Distinguish--Dropdown--${e}`,
				w = Object(i.c)({
					currentUser: O.i,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(v.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(k.b)(D(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: o
						} = t;
						return Object(x.g)(e, t) || Object(E.k)(e, {
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
						tooltipId: D(t.id)
					}))
				}));
			t.a = S(R(l.a.wrapped(Object(h.c)(({
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
				onSpamComment: E,
				onToggleDistinguishDropdown: k,
				sendEvent: O,
				...N
			}) => {
				const S = Object(f.a)(i),
					w = Object(b.b)(t),
					R = t.isApproved && w,
					P = !!o && o.isEmployee,
					L = !t.isRemoved || t.bannedBy === c.k,
					B = a,
					F = e => O(Object(C.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || w) && r.a.createElement(M.a, {
					text: R ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), F("approve")
					}
				}, r.a.createElement(g.a, {
					className: A.a.icon
				})), L && r.a.createElement(r.a.Fragment, null, r.a.createElement(M.a, {
					text: t.bannedBy === c.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						x(), t.bannedBy === c.k ? F("confirm_remove") : F("remove")
					}
				}, r.a.createElement(y.a, {
					className: A.a.icon
				})), r.a.createElement(M.a, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), F("spam")
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
						h(), F(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(_.a, {
					className: A.a.icon
				})), s && !P && !t.bannedBy && r.a.createElement(M.a, {
					className: Object(d.a)({
						[A.a.selected]: N.isDistinguishDropdownOpen
					}),
					onClick: () => {
						F("mod_distinguish_menu"), k()
					}
				}, r.a.createElement(I.a, null), r.a.createElement(p.a, {
					isAdminDistinguished: t.isAdmin,
					isDropdownOpen: N.isDistinguishDropdownOpen,
					isModDistinguished: t.isMod,
					isStickied: t.isStickied,
					isTopLevelComment: !t.parentId,
					isUserEmployee: P,
					isUserMod: S,
					onDistinguishComment: u,
					sendEventWithName: F,
					tooltipId: D(t.id)
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
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				ModeratorIcon: "rZkjnStRKzlmtr__ixhKy",
				moderatorIcon: "rZkjnStRKzlmtr__ixhKy",
				OpIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				opIcon: "_3X_-kuWbD5_nVi9_eTAYVC",
				ContractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				contractorIcon: "_39FDxNax8J3IkHXRxQmeJE",
				TopSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				topSupporterIcon: "_2Cj3vP3_ckCL5Fy6ZU7YGR",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
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
				icon2020Styles: "_3N-ztylrPoAFspBRmaxjS0",
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
				f = o("./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts"),
				C = o("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				v = o.n(C);
			const E = e => {
				const t = Object(a.e)(f.a),
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
					isAdminEmeritus: n.distinguishType === u.C.ALUMNI_ADMIN,
					isAuthorDeleted: s,
					isLivestreaming: i,
					isMod: n.isMod,
					isOp: n.isOp,
					isStrong: d,
					isUnstyled: t,
					style: c
				}, n.author)
			};
			var k = o("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				O = o("./src/reddit/components/Flair/index.tsx"),
				g = o("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				I = o("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = o("./src/reddit/controls/MetaData/index.tsx"),
				y = o("./src/reddit/helpers/flair.ts"),
				j = o("./src/reddit/models/Comment/index.ts"),
				T = o("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				M = o("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = o("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				A = o.n(N);
			const S = ({
				authorClassName: e,
				className: t,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				renderedInOverlay: a
			}) => r.a.createElement(M.b, {
				className: Object(m.a)(A.a.authorHoverCard, t),
				postOrComment: o,
				tooltipType: a ? I.c.Lightbox : void 0
			}, r.a.createElement(T.b, {
				ignore: Object(j.f)(o) || !!o.distinguishType && o.distinguishType !== u.C.NONE,
				subredditId: o.subredditId,
				userId: o.authorId
			}, r.a.createElement(E, {
				className: e,
				comment: o,
				isLivestreaming: n,
				isStrong: s,
				isAuthorDeleted: Object(j.f)(o)
			})));
			var D = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				w = o("./src/reddit/icons/fonts/index.tsx"),
				R = o("./src/reddit/icons/svgs/Cake/index.tsx");
			const P = (e, t, o = !1) => `${e}${t}${o?"inOverlay":""}`,
				L = () => n.fbt._("Reddit admin, speaking officially", null, {
					hk: "3vg8wE"
				}),
				B = () => n.fbt._("Reddit admin emeritus", null, {
					hk: "1Md5AV"
				}),
				F = e => n.fbt._("Moderator of {subredditDisplayText}, speaking officially", [n.fbt._param("subredditDisplayText", e)], {
					hk: "3pHm3n"
				}),
				H = () => n.fbt._("Original Poster", null, {
					hk: "3DqK8z"
				}),
				U = () => n.fbt._("Reddit contractor", null, {
					hk: "3APwEh"
				});
			var V = o("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				z = o.n(V);
			const X = ({
				className: e,
				commentId: t,
				isInIcons2020: o,
				renderedInOverlay: s
			}) => {
				const i = Object(a.d)(),
					d = () => i(Object(l.h)({
						tooltipId: c
					})),
					c = P("CommentTopMeta--cakeday--", t, s),
					u = n.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, o ? r.a.createElement(w.a, {
					name: "cake",
					isFilled: !0,
					className: Object(m.a)(z.a.cakeIcon, e),
					"aria-label": u,
					id: c,
					onMouseEnter: d,
					onMouseLeave: d
				}) : r.a.createElement(R.a, {
					"aria-label": u,
					className: Object(m.a)(z.a.cakeIcon, e),
					id: c,
					onMouseEnter: d,
					onMouseLeave: d
				}), r.a.createElement(D.c, {
					tooltipId: c,
					text: u
				}))
			};
			var J = o("./src/lib/addQueryParams/index.ts"),
				W = o("./src/lib/humanizeDateTime/index.ts"),
				Q = o("./src/lib/timeAgo/index.ts"),
				q = o("./src/reddit/actions/comment/index.ts");
			const G = e => {
					const {
						className: t,
						comment: o,
						compact: n,
						renderedInOverlay: s
					} = e, i = Object(a.d)(), d = P("CommentTopMeta--Created--", o.id, s), c = () => i(Object(l.h)({
						tooltipId: d
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(J.a)(o.permalink, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: d,
						onClick: () => {
							Z(i, o.id)
						},
						onMouseEnter: c,
						onMouseLeave: c,
						target: "_blank",
						rel: "noopener noreferrer"
					}, Object(Q.d)(o.created, {
						noPostfix: n,
						shortenedUnit: n
					}), r.a.createElement(D.c, {
						tooltipId: d,
						text: Object(W.a)(o.created)
					}))
				},
				Z = (e, t) => {
					window.addEventListener("focus", (function o() {
						K(e, t, o)
					}))
				},
				K = (e, t, o) => {
					window.removeEventListener("focus", o), e(Object(q.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(q.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var Y = o("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				$ = o.n(Y);
			const {
				fbt: ee
			} = o("./node_modules/fbt/lib/FbtPublic.js"), te = () => r.a.createElement(_.a, {
				className: $.a.crowdControlText
			}, ee._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var oe = o("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				ne = o.n(oe);
			const {
				fbt: se
			} = o("./node_modules/fbt/lib/FbtPublic.js"), re = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(_.a, {
				className: ne.a.editedText
			}, se._("edited {time}", [se._param("time", Object(Q.d)(t, {
				noPostfix: e,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ae = o("./src/reddit/helpers/isRemoved.ts"),
				ie = o("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				de = o("./src/reddit/helpers/showReportIndicator/index.ts"),
				ce = o("./src/reddit/icons/fonts/Approve/index.tsx"),
				le = o("./src/reddit/icons/fonts/Lock/index.tsx"),
				me = o("./src/reddit/icons/fonts/Remove/index.tsx"),
				ue = o("./src/reddit/icons/fonts/Report/index.tsx"),
				pe = o("./src/reddit/icons/fonts/Spam/index.tsx"),
				be = o("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				he = o("./src/reddit/models/AutomatedReporting/index.ts"),
				xe = o("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				fe = o.n(xe);
			const Ce = ({
				comment: e,
				ignoreLock: t,
				isInIcons2020: s,
				renderedInOverlay: i
			}) => {
				const d = Object(a.d)(),
					c = e => () => d(Object(l.f)({
						tooltipId: e
					})),
					u = () => d(Object(l.i)()),
					p = t => P(t, e.id, i),
					b = p("CommentTopMeta--Automod--"),
					h = p("CommentTopMeta--Approve--"),
					x = p("CommentTopMeta--Remove--"),
					f = p("CommentTopMeta--Report--"),
					C = p("CommentTopMeta--Spam--"),
					v = e.bannedBy && Object(he.b)(e.bannedBy),
					E = c(x);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: fe.a.approveIcon,
					desc: Object(ie.a)(e),
					id: h,
					onMouseEnter: c(h),
					onMouseLeave: u,
					isFilled: s
				}), r.a.createElement(D.c, {
					tooltipId: h,
					text: Object(ie.a)(e)
				})), Object(ae.a)(e) && !v && r.a.createElement(r.a.Fragment, null, r.a.createElement(me.a, {
					className: fe.a.removeIcon,
					desc: Object(ie.c)(e),
					id: x,
					onMouseEnter: E,
					onMouseLeave: u,
					isFilled: s
				}), r.a.createElement(D.c, {
					tooltipId: x,
					text: Object(ie.c)(e)
				})), Object(ae.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: fe.a.removalReason,
					onClick: () => {
						o.e("removalReasonActions").then(o.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => d(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, n.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ae.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && !v && r.a.createElement("a", {
					className: fe.a.removalReason,
					onMouseEnter: E,
					onMouseLeave: u
				}, n.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(le.a, {
					className: fe.a.lockIcon,
					desc: n.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: s
				}), e.bannedBy && e.isSpam && r.a.createElement(pe.a, {
					className: fe.a.spamIcon,
					desc: Object(ie.e)(e),
					id: C,
					onMouseEnter: c(C),
					onMouseLeave: u,
					isFilled: s
				}), e.bannedBy && e.isSpam && r.a.createElement(D.c, {
					tooltipId: C,
					text: Object(ie.e)(e)
				}), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && (s ? r.a.createElement(w.a, {
					name: "bot",
					isFilled: !0,
					className: Object(m.a)(fe.a.automoderatorIcon, {
						[fe.a.removed]: !!e.bannedBy
					}),
					"aria-label": ie.b,
					id: b,
					key: b,
					onMouseEnter: c(b),
					onMouseLeave: u
				}) : r.a.createElement(be.a, {
					className: Object(m.a)(fe.a.automoderatorIcon, {
						[fe.a.removed]: !!e.bannedBy
					}),
					desc: ie.b,
					id: b,
					key: b,
					onMouseEnter: c(b),
					onMouseLeave: u
				})), ("AutoModerator" === e.bannedBy || "AutoModerator" === e.approvedBy) && r.a.createElement(D.c, {
					tooltipId: b,
					text: ie.b
				}), Object(de.a)(e) && r.a.createElement(ue.a, {
					className: fe.a.reportIcon,
					desc: Object(ie.d)(e.numReports),
					id: f,
					onMouseEnter: c(f),
					onMouseLeave: u,
					isFilled: s
				}), Object(de.a)(e) && r.a.createElement(D.c, {
					tooltipId: f,
					text: Object(ie.d)(e.numReports)
				}), v && r.a.createElement("a", {
					className: fe.a.removalReason
				}, n.fbt._("• Removed by the Automated {filterName}", [n.fbt._param("filterName", v)], {
					hk: "3C408F"
				})))
			};
			var ve, Ee = o("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ve || (ve = {}));
			var ke = o("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Oe = o.n(ke);
			const ge = {
					[ve.Admin]: {
						color: Ee.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: L
					},
					[ve.Mod]: {
						color: Ee.c,
						label: n.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => F(e.subredditDisplayText)
					},
					[ve.Op]: {
						color: Ee.a,
						label: n.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: H
					},
					[ve.AlumniAdmin]: {
						color: Ee.b,
						label: n.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: B
					},
					[ve.Contractor]: {
						color: Ee.a,
						label: n.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: U
					}
				},
				Ie = e => {
					const t = Object(a.d)(),
						o = function(e) {
							return e.isAdmin ? ve.Admin : e.isMod ? ve.Mod : e.isOp ? ve.Op : e.distinguishType === u.C.ALUMNI_ADMIN ? ve.AlumniAdmin : e.authorIsContractor ? ve.Contractor : null
						}(e.comment);
					if (!o) return null;
					if (o === ve.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: n,
						color: s,
						label: i,
						tooltipTemplate: d
					} = ge[o], c = P(n, e.comment.id, e.renderedInOverlay), p = d(e), b = () => t(Object(l.h)({
						tooltipId: c
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(m.a)(Oe.a.role, e.className),
						style: {
							color: s
						},
						id: c,
						onMouseEnter: b,
						onMouseLeave: b
					}, i), r.a.createElement(D.c, {
						tooltipId: c,
						text: p
					}))
				};
			var _e = o("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				ye = o.n(_e);
			const {
				fbt: je
			} = o("./node_modules/fbt/lib/FbtPublic.js"), Te = () => r.a.createElement(_.a, {
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
					isInIcons2020: d,
					isLivestreaming: c,
					renderedInOverlay: l,
					subredditDisplayText: u,
					renderContractorBadge: p
				} = e;
				return s.isDeleted ? r.a.createElement("div", {
					className: Object(m.a)(Ne.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Ne.a.authorLine
				}, r.a.createElement("span", {
					className: Ne.a.metaText
				}, s.deletedBy === j.c.User ? n.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : n.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(_.c, {
					className: Ne.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Ne.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				}))) : r.a.createElement("div", {
					className: Object(m.a)(Ne.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Ne.a.authorLine
				}, !Object(j.f)(s) && r.a.createElement(k.b, {
					className: Ne.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: s.subredditId,
					userId: s.authorId,
					uniqueIdentifier: s.id
				}), r.a.createElement(S, {
					authorClassName: Ne.a.author,
					comment: s,
					isLivestreaming: c,
					renderedInOverlay: l
				}), o && r.a.createElement(te, null), s.isAuthorCakeday && r.a.createElement(X, {
					className: Ne.a.baselineItem,
					commentId: s.id,
					isInIcons2020: d,
					renderedInOverlay: l
				}), r.a.createElement(g.a, {
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
				}), r.a.createElement(_.c, {
					className: Ne.a.separator
				}), r.a.createElement(G, {
					key: "Created",
					className: Ne.a.metaText,
					comment: s,
					compact: !0,
					renderedInOverlay: l
				}), s.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Ne.a.separator
				}), r.a.createElement(Te, null)), s.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Ne.a.separator
				}), r.a.createElement(re, {
					compact: !0,
					editedAt: s.editedAt
				})), r.a.createElement(Ce, {
					comment: s,
					ignoreLock: i,
					isInIcons2020: d,
					renderedInOverlay: l
				}), r.a.createElement(h.a, {
					thing: s,
					tooltipType: l ? I.c.Lightbox : void 0
				})), a && !Object(y.o)(a) && r.a.createElement("span", {
					className: Ne.a.userFlairLine
				}, r.a.createElement(O.b, {
					className: Ne.a.flair,
					flair: a,
					forceSmallEmojis: !0
				})))
			};
			var Se = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				De = o("./src/reddit/selectors/economics.ts"),
				we = o("./src/reddit/models/Flair/index.ts"),
				Re = o("./src/reddit/icons/fonts/Admin/index.tsx"),
				Pe = o("./src/reddit/icons/fonts/Op/index.tsx"),
				Le = o("./src/reddit/icons/svgs/Moderate/index.tsx"),
				Be = o("./src/reddit/selectors/experiments/coreStyles.ts"),
				Fe = o("./src/reddit/selectors/subreddit.ts"),
				He = o("./src/reddit/selectors/userFlair.ts"),
				Ue = o("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Ve = o.n(Ue);

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Xe = p.a.wrapped(O.b, "RightPositionedAuthorFlair", Ve.a),
				Je = p.a.wrapped(Re.a, "AdminIcon", Ve.a),
				We = p.a.div("AdminEmeritus", Ve.a),
				Qe = p.a.wrapped(Le.a, "ModeratorIcon", Ve.a),
				qe = p.a.wrapped(Pe.a, "OpIcon", Ve.a),
				Ge = p.a.wrapped(Re.a, "ContractorIcon", Ve.a),
				Ze = p.a.span("DeletedText", Ve.a),
				Ke = p.a.wrapped(_.a, "MetaSeparator", Ve.a),
				Ye = e => (t, {
					comment: o,
					renderedInOverlay: n
				}) => P(e, o.id, n),
				$e = Object(a.b)(() => Object(i.c)({
					adminTooltipId: Ye("CommentTopMeta--Admin--"),
					adminEmeritusTooltipId: Ye("CommentTopMeta--AdEm--"),
					contractorTooltipId: Ye("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ye("CommentTopMeta--Gold--"),
					modTooltipId: Ye("CommentTopMeta--Mod--"),
					opTooltipId: Ye("CommentTopMeta--OP--"),
					topSupporterTooltipId: Ye("CommentTopMeta--TopSupporter--"),
					hasBadges: (e, {
						comment: t
					}) => !!Object(De.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const o = Object(Fe.I)(e, {
							commentId: t.comment.id
						});
						return o ? o.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(He.d)(e, {
						subredditId: t.subredditId
					}),
					isInIcons2020: Be.a,
					isCommentHeaderRedesignEnabled: f.a
				}), (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					openPowerupsModal: () => e(Object(c.c)("comment_top_supporter_badge"))
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
					hasBadges: C,
					isCommentHeaderRedesignEnabled: v,
					isInIcons2020: E,
					isLivestreaming: y,
					isPostComment: T,
					ignoreFlairPosition: M,
					ignoreLock: N,
					modTooltipId: A,
					onHideTooltip: D,
					onShowTooltip: w,
					opTooltipId: R,
					openPowerupsModal: P,
					renderContractorBadge: L,
					renderedInOverlay: B,
					subredditDisplayText: F,
					topSupporterTooltipId: H
				} = e, U = Object(d.a)(), V = r.a.createElement(r.a.Fragment, null, r.a.createElement(Se.b, {
					commentId: c.id
				}), r.a.createElement(Se.a, {
					commentId: c.id,
					commentsPageKey: l
				}));
				if (T && v) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Ae, {
					className: Object(m.a)(s, {
						[Ve.a.collapsed]: a
					}),
					collapsedBecauseCrowdControl: i,
					comment: c,
					flair: x || null,
					ignoreLock: N,
					isInIcons2020: E,
					isLivestreaming: y,
					renderedInOverlay: B,
					subredditDisplayText: F,
					renderContractorBadge: !!L
				}), V);
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
				const z = !M && f === we.b.Left;
				return r.a.createElement("div", {
					className: Object(m.a)(s, Ve.a.container, {
						[Ve.a.collapsed]: a,
						[Ve.a.hasBadges]: C,
						[Ve.a.liveStreaming]: y
					}),
					"data-testid": "comment-top-meta"
				}, x && z && r.a.createElement(O.b, {
					flair: x,
					forceSmallEmojis: p
				}), !Object(j.f)(c) && r.a.createElement(k.b, {
					className: Ve.a.userBadges,
					showAddCustom: !0,
					subredditId: c.subredditId,
					userId: c.authorId,
					uniqueIdentifier: c.id
				}), n && n, r.a.createElement(S, {
					comment: c,
					isLivestreaming: y,
					isStrong: !!p,
					renderedInOverlay: B
				}), i && r.a.createElement(te, null), i && r.a.createElement(_.c, {
					className: Ve.a.metaText,
					key: "crowdControlSeparator"
				}), x && !z && r.a.createElement(Xe, {
					flair: x,
					forceSmallEmojis: p
				}), !p && r.a.createElement(g.a, {
					className: Ve.a.publicPoints,
					contentId: c.id,
					metaSeparator: r.a.createElement(_.c, {
						className: Ve.a.metaText
					}),
					subredditId: c.subredditId,
					userId: c.authorId,
					username: c.author
				}), r.a.createElement(r.a.Fragment, null, V, !v && r.a.createElement(nt, {
					comment: c,
					compact: p,
					adminTooltipId: o,
					adminEmeritusTooltipId: t,
					contractorTooltipId: u,
					modTooltipId: A,
					onHideTooltip: D,
					onShowTooltip: w,
					openPowerupsModal: () => {
						U(Object(b.r)("comment")), P()
					},
					opTooltipId: R,
					renderContractorBadge: L,
					renderedInOverlay: B,
					subredditDisplayText: F,
					topSupporterTooltipId: H,
					isInIcons2020: E
				}), v && r.a.createElement(Ie, {
					className: Ve.a.authorRole,
					comment: c,
					subredditDisplayText: F,
					renderContractorBadge: !!L,
					renderedInOverlay: B
				})), !p && r.a.createElement(r.a.Fragment, null, !c.isDeleted && !T && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.b, {
					className: Ve.a.metaText,
					isScoreHidden: c.isScoreHidden,
					score: c.score
				}), r.a.createElement(_.c, {
					className: Ve.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(G, {
					key: "Created",
					className: Ve.a.MetaLink,
					comment: c,
					renderedInOverlay: B
				}), c.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Ve.a.separator
				}), r.a.createElement(Te, null)), c.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(_.c, {
					className: Ve.a.separator
				}), r.a.createElement(re, {
					editedAt: c.editedAt
				}))), r.a.createElement(Ce, {
					comment: c,
					ignoreLock: N,
					isInIcons2020: E,
					renderedInOverlay: B
				}), r.a.createElement(h.a, {
					thing: c,
					tooltipType: B ? I.c.Lightbox : void 0
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
					}, r.a.createElement(Ze, null, a.deletedBy === j.c.User ? n.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : n.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(G, {
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
					}, r.a.createElement("div", null, r.a.createElement(E, {
						comment: t,
						isAuthorDeleted: Object(j.f)(t)
					})), r.a.createElement(_.b, {
						className: Ve.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(_.c, {
						className: Ve.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(G, {
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
					return r.a.createElement(Ke, {
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
						isInIcons2020: t,
						renderedInOverlay: o,
						...n
					} = this.props;
					return r.a.createElement(s.Fragment, null, e.isAuthorCakeday && r.a.createElement(X, {
						commentId: e.id,
						isInIcons2020: t,
						renderedInOverlay: o
					}), e.isAdmin && r.a.createElement(Je, {
						desc: L(),
						id: n.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: t
					}), e.isAdmin && st(n.adminTooltipId, L()), e.distinguishType === u.C.ALUMNI_ADMIN && r.a.createElement(We, {
						"aria-label": B(),
						id: n.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: n.onHideTooltip
					}, "Δ"), e.distinguishType === u.C.ALUMNI_ADMIN && st(n.adminEmeritusTooltipId, B()), e.isMod && (t ? r.a.createElement(w.a, {
						name: "mod",
						isFilled: !0,
						className: Ve.a.ModeratorIcon,
						"aria-label": F(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					}) : r.a.createElement(Qe, {
						desc: F(n.subredditDisplayText),
						id: n.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: n.onHideTooltip
					})), e.isMod && st(n.modTooltipId, F(n.subredditDisplayText)), e.isOp && r.a.createElement(qe, {
						desc: H(),
						id: n.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: t
					}), e.isOp && st(n.opTooltipId, H()), n.renderContractorBadge && r.a.createElement(Ge, {
						desc: U(),
						id: n.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: n.onHideTooltip,
						isFilled: t
					}), n.renderContractorBadge && st(n.contractorTooltipId, U()))
				}
			}
			const st = (e, t) => r.a.createElement(D.c, {
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
				C = e => s.a.createElement(h, {
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
					}, s.a.createElement(C, {
						onClick: () => u(r.C.NONE, null),
						selected: !c && !n,
						text: a.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && s.a.createElement(C, {
						onClick: () => u(r.C.MODERATOR, null),
						selected: c && !l,
						text: a.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && s.a.createElement(C, {
						onClick: () => u(r.C.MODERATOR, !0),
						selected: c && l,
						text: a.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && s.a.createElement(C, {
						onClick: () => u(r.C.ADMIN, null),
						selected: n && !l,
						text: a.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && d && m && s.a.createElement(C, {
						onClick: () => u(r.C.ADMIN, !0),
						selected: n && l,
						text: a.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var E = Object(d.a)(v);
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
				}, s.a.createElement(E, {
					isAdminDistinguished: o,
					isUserEmployee: n,
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : i && e !== r.C.MODERATOR ? m("undistinguish") : o && e !== r.C.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
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
				} = e, [x, f] = Object(s.useState)(!0), C = Object(b.b)(o.id, h), v = Object(a.d)(), E = Object(p.a)(), k = Object(b.a)(o, h), O = (e, n) => E(Object(u.a)(t, o.id, e, n));
				Object(s.useEffect)(() => {
					k && O("modal", "show")
				}, [k]);
				if (!k || !x) return null;
				const g = n.fbt._("Help r/{subredditName} mods", [n.fbt._param("subredditName", t)], {
					hk: "1rusN4"
				});
				return r.a.createElement(l.a, {
					id: C,
					title: g,
					onClose: () => {
						f(!1), O("close", "click"), v(Object(d.E)()), v(Object(d.P)({
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
					onClick: () => (f(!1), O("report", "click"), void v(Object(c.c)(o.id)))
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
				} = e, [f, C] = Object(r.useState)(n.Survey), v = Object(h.b)(o.id, x), E = Object(i.d)(), k = Object(b.a)(), O = Object(h.a)(o, x), g = (e, n) => k(Object(p.b)(t, o.id, e, n));
				Object(r.useEffect)(() => {
					O && g("modal", "show")
				}, [O]);
				const I = e => {
					C(n.Closed), g("site" === e ? "breaks_reddit_rules" : "breaks_community_rules", "click"), E(Object(l.c)(o.id, void 0, e))
				};
				if (!O) return null;
				let _ = null;
				const y = {
					id: v,
					title: s.fbt._("Why did you downvote this post?", null, {
						hk: "2tTiIx"
					}),
					onClose: () => {
						C(n.Closed), g("close", "click"), E(Object(c.E)())
					},
					onClickOutside: () => {
						E(Object(c.E)())
					}
				};
				switch (f) {
					case n.Survey:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Your answer helps r/ {subredditName} mods improve this community.", [s.fbt._param("subredditName", t)], {
							hk: "DNEel"
						})), a.a.createElement(u.a, {
							onClick: () => {
								C(n.OffTopic), g("off_topic", "click")
							}
						}, s.fbt._("It's off topic", null, {
							hk: "4iG26l"
						})), a.a.createElement(u.a, {
							onClick: () => {
								C(n.DontLike), g("dont_like", "click")
							}
						}, s.fbt._("I don't like it", null, {
							hk: "1jB1Mh"
						})), a.a.createElement(u.a, {
							onClick: () => {
								C(n.BreaksRules), g("breaks_rules", "click")
							}
						}, s.fbt._("It breaks the rules", null, {
							hk: "1yQBhi"
						})));
						break;
					case n.OffTopic:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Got it. Thanks for helping out this community.", null, {
							hk: "22pTV3"
						})));
						break;
					case n.DontLike:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Just a reminder, it’s not an official rule but it is considered improper Reddiquette to downvote an otherwise acceptable post because you don’t personally like it.", null, {
							hk: "3mRvPM"
						})));
						break;
					case n.BreaksRules:
						_ = a.a.createElement(m.a, y, a.a.createElement("p", null, s.fbt._("Let us know if it breaks {=Reddit} or {=community} rules.", [s.fbt._param("=Reddit", a.a.createElement("a", {
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
				return _
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
				i = o("./src/reddit/hooks/useOnClickOutside.ts"),
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
				score: "_3a2ZHWaih05DgAOtvu6cIo"
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
					subreddit: C,
					isOverlay: v,
					isActionBarAnimationEnabled: E,
					postId: k,
					isForceSelected: O
				} = e, g = `upvote-button-${t.id}${v?"-overlay":""}`, {
					moderationPrompt: I
				} = t;
				return s.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(m.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && s.a.createElement(l.a, {
					isCheckboxSelected: p,
					toggleCheckbox: h
				}), s.a.createElement(c.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: o,
					redditStyle: f,
					upvoteTooltipId: g,
					isActionBarAnimationEnabled: E,
					postId: k,
					isForceSelected: O,
					scoreClassName: b.a.score
				}), I && s.a.createElement(i.b, {
					rightOf: g
				}, "survey" === I ? s.a.createElement(a.a, {
					post: t,
					subredditName: C.name,
					isOverlay: !!v
				}) : s.a.createElement(r.a, {
					post: t,
					subredditName: C.name,
					isOverlay: !!v
				})))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, o) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = o("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				d = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = o("./src/reddit/controls/Checkbox/index.m.less"),
				l = o.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => t => {
					const {
						className: o,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": i,
						...d
					} = t, c = ((e, t, o) => {
						const n = !(!t && !o);
						let s = "";
						return s = e ? n ? l.a.mDisabledRedditStyle : l.a.mDisabled : n ? l.a.mActiveRedditStyle : l.a.mActive
					})(n, a, i);
					return s.a.createElement(e, m({
						className: Object(r.a)(l.a.CheckboxIcon, c, o)
					}, d))
				},
				p = u(d.a),
				b = u(i.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? b : e.isCheckboxSelected ? p : a.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(r.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(r.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
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
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, o) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				c = o.n(d);
			t.a = e => {
				const t = Object(a.a)();
				return s.a.createElement("i", {
					className: Object(r.a)(c.a.DistinguishShield, Object(i.b)(t ? "distinguish" : "distinguishShield", e.isFilled), e.className)
				})
			}
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, o) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Op/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/Op/index.m.less"),
				d = o.n(i);
			const c = o("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(r.a)();
				return s.a.createElement("i", {
					className: `${Object(a.b)(t?"author":"op",e.isFilled)} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(a.a, null, e.desc))
			}, "OpIcon", d.a);
			t.a = c
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), s.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), s.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), s.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, s.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, s.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, o) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = o.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
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
		},
		"./src/reddit/selectors/experiments/econ/commentHeaderRedesign.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(s.a)(n.sb)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~ProfileComments~ProfileOverview~Pr~e2898d03.39f7def1d5f813bba122.js.map