// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.46a3cf6a586558e22f6f.js
// Retrieved at 1/13/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "b", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/endpoints/comment/index.tsx"),
				u = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/commentSelector.ts"),
				h = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/actions/comment/index.ts"),
				C = n("./src/reddit/actions/comment/constants.ts");
			const E = Object(r.a)(C.n),
				y = e => async (t, n, {
					apiContext: s
				}) => {
					n().features.comments.models[e] && (await Object(m.j)(s(), e)).ok && t((e => async t => {
						t(E({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, n, {
					apiContext: o
				}) => {
					if (!Object(f.J)(n())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isLocked ? m.l : m.e;
					t(Object(v.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await a(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? s.fbt._("comment has been been unlocked", null, {
							hk: "3eImwj"
						}) : s.fbt._("comment has been been locked", null, {
							hk: "2Zo2mS"
						})
					})) : t(Object(v.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, k = Object(r.a)(C.F), O = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (t(Object(v.i)({
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
					})), (await Object(m.a)(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(v.i)({
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
					})), Object(d.d)())
				}, _ = (e, t) => async (n, o, {
					apiContext: r
				}) => {
					const a = o(),
						i = a.features.comments.models[e],
						l = a.user.account ? a.user.account.displayText : null;
					i && l && (n(Object(v.i)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(r(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(v.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(d.d)())
				}, I = e => async (t, n, {
					apiContext: o
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.ignoreReports ? m.k : m.d;
					t(Object(v.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await a(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? s.fbt._("comment has had their reports un-ignored", null, {
							hk: "J3UXq"
						}) : s.fbt._("comment has had their reports ignored", null, {
							hk: "34JPHG"
						})
					})) : t(Object(v.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, j = (e, t, n) => async (r, a, {
					gqlContext: i
				}) => {
					const d = Object(x.b)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = n === o.cc.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) r(Object(v.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, T = (e, t, n) => async (s, r, {
					apiContext: i,
					gqlContext: d
				}) => {
					const c = r(),
						l = c.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = c.postStickiedComments.data[u],
						b = o.g[t];
					let x;
					if (s(Object(v.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === o.G.ADMIN,
								isMod: t === o.G.MODERATOR,
								isStickied: !!n
							}
						})), n && p && p !== e && s(Object(v.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(h.a)(r())) {
						const s = Object(m.b)(d(), e, t),
							o = Object(m.c)(d(), e, !!n),
							r = [s];
						(n || !n && e === p) && r.push(o), x = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else x = await Object(m.g)(i(), e, b, n || null);
					x.ok ? n && s(k({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: o.u.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (s(Object(v.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), s(Object(v.i)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
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
				r = n.n(o),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = n.n(d);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: d,
					callToAction: l,
					caption: m
				} = t;
				if (!d || !d.url) return null;
				let u = d.displayText;
				return d.displayText.length >= 40 && (u = d.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, m && !o && r.a.createElement("span", {
					className: c.a.caption,
					title: m
				}, m), r.a.createElement(i.a, {
					href: d.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d,
					className: c.a.displayUrl
				}, u)), l && r.a.createElement(a.a, {
					className: c.a.callToAction,
					href: d.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: d
				}, l))
			}
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
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/comment/moderation.ts"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				m = n("./src/reddit/helpers/trackers/modTools.ts"),
				u = n("./src/reddit/selectors/tooltip.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				h = n("./src/reddit/icons/svgs/Show/index.tsx"),
				f = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = n.n(f);
			const C = b.a.wrapped(h.a, "Show", v.a);
			var E = e => o.a.createElement(x.g, null, !e.comment.isApproved && o.a.createElement(x.e, {
				displayText: e.comment.approvedBy ? p.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : p.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, o.a.createElement(x.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(x.e, {
				displayText: e.comment.isRemoved ? p.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : p.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, o.a.createElement(x.i, null)), o.a.createElement(x.e, {
				displayText: e.comment.isSpam ? p.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : p.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, o.a.createElement(x.j, null)), o.a.createElement(x.e, {
				displayText: e.comment.isLocked ? p.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : p.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, o.a.createElement(x.h, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(x.e, {
				displayText: p.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, o.a.createElement(C, null)));
			const y = b.a.wrapped(l.a, "StyledDropdown", v.a),
				g = Object(a.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(u.b)(t)(e)
				}),
				k = Object(r.b)(g, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(i.a)(t.id)),
					onLockComment: () => e(Object(i.c)(t.id)),
					onRemoveComment: () => e(Object(i.e)(t.id, !1)),
					onSpamComment: () => e(Object(i.e)(t.id, !0)),
					onShowComment: () => e(Object(i.d)(t.id))
				})),
				O = Object(d.a)(y),
				_ = k(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: s,
						onLockComment: r,
						onRemoveComment: a,
						onSpamComment: i,
						onShowComment: d,
						sendEvent: c,
						tooltipId: l
					} = e;
					return o.a.createElement(O, {
						isOpen: n,
						tooltipId: l
					}, o.a.createElement(E, {
						onApproveComment: () => {
							s(), c(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), c(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							i(), c(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = _
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/actions/comment/moderation.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/trackers/modTools.ts"),
				f = n("./src/reddit/selectors/moderatingComments.ts"),
				v = n("./src/reddit/selectors/moderatorPermissions.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				O = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Show/index.tsx"),
				I = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				T = n.n(j);
			const N = Object(x.u)(),
				w = e => `Distinguish--Dropdown--${e}`,
				S = Object(i.c)({
					currentUser: E.k,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(f.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(C.b)(w(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(x.h)(e, t) || Object(v.m)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: x.T
				}),
				A = Object(a.b)(S, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(m.a)(t.id)),
					onDistinguishComment: (n, s) => e(Object(m.b)(t.id, n, s)),
					onLockComment: () => e(Object(m.c)(t.id)),
					onRemoveComment: () => e(Object(m.e)(t.id, !1)),
					onSpamComment: () => e(Object(m.e)(t.id, !0)),
					onShowComment: () => e(Object(m.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(u.h)({
						tooltipId: w(t.id)
					}))
				}));
			t.a = N(A(l.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: o,
				collapsedBecauseCrowdControl: a,
				moderatorPermissions: i,
				modModeEnabled: l,
				onApproveComment: m,
				onDistinguishComment: u,
				onLockComment: b,
				onRemoveComment: x,
				onShowComment: f,
				onSpamComment: v,
				onToggleDistinguishDropdown: C,
				sendEvent: E,
				...j
			}) => {
				const N = Object(p.b)(t),
					w = t.isApproved && N,
					S = !t.isRemoved || t.bannedBy === c.l,
					A = a,
					M = e => E(Object(h.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || N) && r.a.createElement(I.a, {
					text: w ? s.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : s.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), M("approve")
					}
				}, r.a.createElement(y.a, {
					className: T.a.icon
				})), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(I.a, {
					text: t.bannedBy === c.l ? s.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : s.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						x(), t.bannedBy === c.l ? M("confirm_remove") : M("remove")
					}
				}, r.a.createElement(k.a, {
					className: T.a.icon
				})), r.a.createElement(I.a, {
					text: s.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						v(), M("spam")
					}
				}, r.a.createElement(O.a, {
					className: T.a.icon
				}))), r.a.createElement(I.a, {
					text: t.isLocked ? s.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : s.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), M(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(g.a, {
					className: T.a.icon
				})), A && r.a.createElement(I.a, {
					text: s.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						f()
					}
				}, r.a.createElement(_.a, {
					className: Object(d.a)(T.a.icon, T.a.Show)
				})))
			}), "CommentModToolsFlatlist", T.a)))
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
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/AwardBadges/index.tsx"),
				m = n("./src/reddit/components/AuthorLink/index.tsx"),
				u = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				p = n.n(u);
			const b = e => {
				const {
					className: t,
					comment: n,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: a,
					isLivestreaming: i,
					isStrong: c,
					style: l,
					collapsed: u
				} = e;
				return u && o ? r.a.createElement("p", {
					className: Object(d.a)(p.a.commentAuthorLink, t)
				}, s.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(m.a, {
					className: Object(d.a)(p.a.commentAuthorLink, t),
					author: n.author,
					isCommentAuthorBlocked: o,
					isAuthorDeleted: a,
					isLivestreaming: i,
					isStrong: c,
					style: l
				}, n.author)
			};
			var x = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				h = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				f = n("./src/reddit/components/Flair/index.tsx"),
				v = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				C = n("./src/reddit/components/PostTopMeta/index.tsx"),
				E = n("./src/reddit/controls/MetaData/index.tsx"),
				y = n("./src/reddit/helpers/flair.ts"),
				g = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/models/Comment/index.ts"),
				_ = n("./src/reddit/selectors/gold/powerups/index.ts"),
				I = n("./src/lib/constants/index.ts"),
				j = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				T = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				w = n.n(N);
			const S = ({
				authorClassName: e,
				className: t,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				renderedInOverlay: a,
				collapsed: i
			}) => r.a.createElement(T.b, {
				className: Object(d.a)(w.a.authorHoverCard, t),
				postOrComment: n,
				tooltipType: a ? C.c.Lightbox : void 0,
				isCommentAuthorBlocked: Object(O.g)(n),
				collapsed: i
			}, r.a.createElement(j.b, {
				ignore: Object(O.f)(n) || !!n.distinguishType && n.distinguishType !== I.G.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(b, {
				className: e,
				comment: n,
				isLivestreaming: s,
				isStrong: o,
				isCommentAuthorBlocked: Object(O.g)(n),
				isAuthorDeleted: Object(O.f)(n),
				collapsed: i
			})));
			var A = n("./src/config.ts"),
				M = n("./src/reddit/actions/tooltip.ts"),
				P = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const L = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var D = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				B = n.n(D);
			const F = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const o = Object(a.d)(),
					i = () => o(Object(M.h)({
						tooltipId: c
					})),
					c = L("CommentTopMeta--cakeday--", t, n),
					l = s.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(B.a.cakedayIcon, e),
					src: `${A.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: l,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(P.c, {
					tooltipId: c,
					text: l
				}))
			};
			var R = n("./src/lib/addQueryParams/index.ts"),
				H = n("./src/reddit/actions/comment/index.ts"),
				U = n("./src/reddit/actions/post.ts"),
				W = n("./src/reddit/components/HumanDate/index.tsx"),
				G = n("./src/reddit/helpers/path/index.ts");
			const X = e => {
					const {
						className: t,
						comment: n,
						compact: s,
						permalink: o,
						renderedInOverlay: i,
						isBlockingInterstitialEnabled: d
					} = e, c = Object(a.d)(), l = L("CommentTopMeta--Created--", n.id, i), m = () => c(Object(M.h)({
						tooltipId: l
					}));
					return r.a.createElement("a", {
						className: t,
						href: Object(R.a)(o, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: l,
						onClick: e => {
							J(c, n.id), d && (e.preventDefault(), c(Object(U.Y)(Object(G.b)(o), n.postId)))
						},
						onMouseEnter: m,
						onMouseLeave: m,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(W.d, {
						seconds: n.created,
						shortenedUnit: s
					}), r.a.createElement(P.c, {
						tooltipId: l
					}, r.a.createElement(W.b, {
						seconds: n.created
					})))
				},
				J = (e, t) => {
					window.addEventListener("focus", (function n() {
						V(e, t, n)
					}))
				},
				V = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(H.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(H.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var Q = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				z = n.n(Q);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), q = () => r.a.createElement(E.a, {
				className: z.a.crowdControlText
			}, K._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				Y = n.n(Z);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(E.a, {
				className: Y.a.editedText
			}, $._("edited {time}", [$._param("time", r.a.createElement(W.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var te = n("./src/reddit/helpers/isRemoved.ts"),
				ne = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				oe = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				re = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Report/index.tsx"),
				de = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				ce = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				le = n.n(ce);
			const me = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: o
			}) => {
				const i = Object(a.d)(),
					d = e => () => i(Object(M.f)({
						tooltipId: e
					})),
					c = () => i(Object(M.i)()),
					l = t => L(t, e.id, o),
					m = l("CommentTopMeta--Approve--"),
					u = l("CommentTopMeta--Remove--"),
					p = l("CommentTopMeta--Report--"),
					b = l("CommentTopMeta--Spam--"),
					x = d(u);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(oe.a, {
					className: le.a.approveIcon,
					desc: Object(ne.a)(e),
					id: m,
					onMouseEnter: d(m),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: m,
					text: Object(ne.a)(e)
				})), Object(te.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ae.a, {
					className: le.a.removeIcon,
					desc: Object(ne.b)(e),
					id: u,
					onMouseEnter: x,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: u,
					text: Object(ne.b)(e)
				})), Object(te.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: le.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, s.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(te.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && r.a.createElement("a", {
					className: le.a.removalReason,
					onMouseEnter: x,
					onMouseLeave: c
				}, s.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(re.a, {
					className: le.a.lockIcon,
					desc: s.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: le.a.spamIcon,
					desc: Object(ne.d)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: b,
					text: Object(ne.d)(e)
				})), Object(se.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: le.a.reportIcon,
					desc: Object(ne.c)(e.numReports),
					id: p,
					onMouseEnter: d(p),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(P.c, {
					tooltipId: p,
					text: Object(ne.c)(e.numReports)
				})))
			};
			var ue, pe = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ue || (ue = {}));
			var be = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				xe = n.n(be);
			const he = {
					[ue.Admin]: {
						color: pe.c,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => s.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[ue.Mod]: {
						color: pe.d,
						label: s.fbt._("Mod", null, {
							hk: "3l7DyF"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => s.fbt._("Moderator of {subredditDisplayText}, speaking officially", [s.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[ue.Op]: {
						color: pe.a,
						label: s.fbt._("Op", null, {
							hk: "1A74qs"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => s.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[ue.AlumniAdmin]: {
						color: pe.c,
						label: s.fbt._("Admin", null, {
							hk: "QafFM"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => s.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[ue.Contractor]: {
						color: pe.a,
						label: s.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => s.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				fe = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? ue.Admin : e.isMod ? ue.Mod : e.isOp ? ue.Op : e.distinguishType === I.G.ALUMNI_ADMIN ? ue.AlumniAdmin : e.authorIsContractor ? ue.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ue.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: s,
						color: o,
						label: i,
						tooltipTemplate: c
					} = he[n], l = L(s, e.comment.id, e.renderedInOverlay), m = c(e), u = () => t(Object(M.h)({
						tooltipId: l
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(xe.a.role, e.className),
						style: {
							color: o
						},
						id: l,
						onMouseEnter: u,
						onMouseLeave: u
					}, r.a.createElement("span", null, i), n === ue.Mod && r.a.createElement(ve, null)), r.a.createElement(P.c, {
						tooltipId: l,
						text: m
					}))
				},
				ve = () => r.a.createElement("img", {
					alt: "Moderator Achievement",
					className: xe.a.modAchievement,
					src: `${A.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var Ce = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Ee = n.n(Ce);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = () => r.a.createElement(E.a, {
				className: Ee.a.stickiedText
			}, ye._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var ke = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				Oe = n.n(ke);
			const _e = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: o,
					comment: i,
					flair: c,
					ignoreLock: m,
					isLivestreaming: u,
					permalink: p,
					renderedInOverlay: b,
					subredditDisplayText: I,
					renderContractorBadge: j
				} = e, T = Object(k.a)(), N = i.subredditId, w = Object(a.e)(e => Object(_.h)(e, {
					subredditId: N
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(d.a)(Oe.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: Oe.a.authorLine
				}, r.a.createElement("span", {
					className: Oe.a.metaText
				}, i.deletedBy === O.c.User ? s.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : s.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(X, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					permalink: p,
					renderedInOverlay: b
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(Oe.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: Oe.a.authorLine
				}, !Object(O.f)(i) && r.a.createElement(h.b, {
					className: Oe.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: Oe.a.baselineItem
				}, r.a.createElement(S, {
					authorClassName: Oe.a.author,
					comment: i,
					isLivestreaming: u,
					renderedInOverlay: b,
					collapsed: n
				})), o && r.a.createElement(q, null), r.a.createElement(fe, {
					className: Oe.a.role,
					comment: i,
					subredditDisplayText: I,
					renderContractorBadge: j,
					renderedInOverlay: b
				}), i.isAuthorCakeday ? r.a.createElement(F, {
					className: Oe.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: b
				}) : !Object(O.f)(i) && w && r.a.createElement(x.a, {
					className: Oe.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						T(Object(g.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(v.a, {
					className: Oe.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(X, {
					key: "Created",
					className: Oe.a.metaText,
					comment: i,
					compact: !0,
					permalink: p,
					renderedInOverlay: b
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(ge, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Oe.a.separator
				}), r.a.createElement(ee, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(me, {
					comment: i,
					ignoreLock: m,
					renderedInOverlay: b
				}), r.a.createElement(l.a, {
					thing: i,
					tooltipType: b ? C.c.Lightbox : void 0
				})), c && !Object(y.o)(c) && r.a.createElement("span", {
					className: Oe.a.userFlairLine
				}, r.a.createElement(f.b, {
					className: Oe.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var Ie = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				je = n("./src/reddit/selectors/economics.ts"),
				Te = n("./src/reddit/models/Flair/index.ts"),
				Ne = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				we = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/selectors/userFlair.ts"),
				Ae = n("./src/reddit/selectors/comments.ts"),
				Me = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Pe = n.n(Me);

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const De = c.a.wrapped(f.b, "RightPositionedAuthorFlair", Pe.a),
				Be = c.a.span("DeletedText", Pe.a),
				Fe = c.a.wrapped(E.a, "MetaSeparator", Pe.a),
				Re = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(je.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(we.G)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Se.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Ae.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: Ne.b
				}));
			t.a = Re(e => {
				const {
					children: t,
					className: n,
					collapsed: s,
					collapsedBecauseCrowdControl: o,
					comment: a,
					commentPermalink: i,
					commentsPageKey: c,
					compact: m,
					flair: u,
					flairPosition: p,
					hasBadges: b,
					isBlockingInterstitialEnabled: x,
					isLivestreaming: y,
					isPostComment: g,
					ignoreFlairPosition: k,
					ignoreLock: _,
					renderContractorBadge: I,
					renderedInOverlay: j,
					subredditDisplayText: T,
					userHasNft: N
				} = e, w = r.a.createElement(r.a.Fragment, null, r.a.createElement(Ie.b, {
					commentId: a.id
				}), r.a.createElement(Ie.a, {
					commentId: a.id,
					commentsPageKey: c
				}));
				if (g) return r.a.createElement(r.a.Fragment, null, r.a.createElement(_e, {
					className: Object(d.a)(n, {
						[Pe.a.collapsed]: s
					}),
					collapsedBecauseCrowdControl: o,
					comment: a,
					flair: u || null,
					ignoreLock: _,
					isLivestreaming: y,
					permalink: i,
					renderedInOverlay: j,
					subredditDisplayText: T,
					renderContractorBadge: !!I,
					collapsed: s
				}), w);
				if (a.isDeleted) return r.a.createElement(He, Le({}, e, {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				if (s) return r.a.createElement(Ue, Le({}, e, {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s
					})
				}));
				const A = !k && p === Te.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: s,
						[Pe.a.hasBadges]: b,
						[Pe.a.liveStreaming]: y
					}),
					"data-testid": "comment-top-meta"
				}, u && A && r.a.createElement(f.b, {
					flair: u,
					forceSmallEmojis: m
				}), !Object(O.f)(a) && r.a.createElement(h.b, {
					className: Pe.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(S, {
					authorClassName: N ? Pe.a.NftAuthor : void 0,
					comment: a,
					isLivestreaming: y,
					isStrong: !!m,
					renderedInOverlay: j,
					collapsed: s
				}), o && r.a.createElement(q, null), o && r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "crowdControlSeparator"
				}), u && !A && r.a.createElement(De, {
					flair: u,
					forceSmallEmojis: m
				}), !m && r.a.createElement(v.a, {
					className: Pe.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(E.c, {
						className: Pe.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), w, r.a.createElement(fe, {
					className: Pe.a.authorRole,
					comment: a,
					subredditDisplayText: T,
					renderContractorBadge: !!I,
					renderedInOverlay: j
				}), !m && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !g && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.b, {
					className: Pe.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(X, {
					key: "Created",
					className: Pe.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: j,
					isBlockingInterstitialEnabled: x
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(ge, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(ee, {
					editedAt: a.editedAt
				}))), r.a.createElement(me, {
					comment: a,
					ignoreLock: _,
					renderedInOverlay: j
				}), r.a.createElement(l.a, {
					thing: a,
					tooltipType: j ? C.c.Lightbox : void 0
				}))
			});
			const He = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: o,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						renderedInOverlay: c
					} = e;
					return r.a.createElement("div", {
						className: o
					}, r.a.createElement(Be, null, a.deletedBy === O.c.User ? s.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : s.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(X, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: a,
						permalink: i,
						renderedInOverlay: c,
						isBlockingInterstitialEnabled: d
					}), n && We({
						childrenInfo: t
					}))
				},
				Ue = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: s,
						renderedInOverlay: o,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(O.f)(t),
						collapsed: a
					})), r.a.createElement(E.b, {
						className: Pe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(E.c, {
						className: Pe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(X, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: o,
						isBlockingInterstitialEnabled: d
					}), We({
						childrenInfo: s
					}))
				},
				We = e => {
					const {
						hasContinueThread: t,
						numChildren: n
					} = e.childrenInfo || {
						hasContinueThread: !1,
						numChildren: 0
					};
					return r.a.createElement(Fe, {
						className: Pe.a.metaText
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
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, n) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Media/index.tsx"),
				u = n("./src/reddit/components/PostMeta/index.tsx"),
				p = n("./src/reddit/components/PostTitle/index.tsx"),
				b = n("./src/reddit/components/SourceLink/index.tsx"),
				x = n("./src/reddit/components/Thumbnail/index.tsx"),
				h = n("./src/lib/constants/index.ts"),
				f = n("./src/reddit/contexts/Post/index.tsx"),
				v = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/components/CrosspostBox/index.m.less"),
				y = n.n(E),
				g = n("./src/lib/lessComponent.tsx");

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = 8,
				_ = 1,
				I = g.a.div("Container", y.a),
				j = g.a.div("PostMetaWrapper", y.a),
				T = g.a.wrapped(p.c, "PostTitle", y.a),
				N = g.a.div("FlatList", y.a),
				w = g.a.div("FlatItem", y.a),
				S = g.a.span("FlatListDotSpacer", y.a),
				A = g.a.wrapped(I, "LinkContainer", y.a),
				M = g.a.div("Content", y.a),
				P = g.a.div("ThumbnailContainer", y.a),
				L = Object(d.c)({
					isCurrentUserProfilePost: v.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Mb.TOPIC),
					shouldOpenPostInNewTab: C.cb
				}),
				D = Object(a.b)(L);
			t.c = Object(f.b)(D(e => {
				const {
					className: t,
					isCurrentUserProfilePost: n,
					isTopicPage: s,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: n,
						isTopicPage: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					c = t;
				return a && !a.media ? r.a.createElement(A, {
					className: c
				}, r.a.createElement(M, null, r.a.createElement(j, null, r.a.createElement(u.a, d)), B(a), a.source && r.a.createElement(b.a, {
					post: a
				}), R(e)), U(e)) : r.a.createElement(I, {
					className: c
				}, r.a.createElement(j, null, r.a.createElement(u.a, d)), B(a), F(e), R(e))
			}));
			const B = e => r.a.createElement(T, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: n
					} = e, s = {
						...t,
						post: n,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, k({}, s, {
						className: y.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				R = e => {
					const {
						post: t
					} = e, {
						score: n
					} = t;
					return r.a.createElement(N, null, r.a.createElement(w, null, s.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [s.fbt._plural(n, "point count", Object(l.b)(n))], {
						hk: "PNZhd"
					})), r.a.createElement(S, null), r.a.createElement(w, null, H(e)))
				},
				H = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: n ? "_blank" : void 0
					}, s.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [s.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				U = e => r.a.createElement(P, null, r.a.createElement(x.a, {
					post: e.post
				}))
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
				r = n("./src/lib/constants/index.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				u = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				p = n.n(u);
			const b = i.a.div("DistinguishWrapper", p.a),
				x = i.a.wrapped(m.a, "Inline", p.a),
				h = i.a.wrapped(c.a, "RadioOff", p.a),
				f = i.a.wrapped(l.a, "RadioOn", p.a),
				v = e => o.a.createElement(x, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(f, null) : o.a.createElement(h, null), e.text),
				C = i.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: s,
						isUserEmployee: i,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: u
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: n
					}, o.a.createElement(v, {
						onClick: () => u(r.G.NONE, null),
						selected: !c && !s,
						text: a.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && o.a.createElement(v, {
						onClick: () => u(r.G.MODERATOR, null),
						selected: c && !l,
						text: a.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), m && d && o.a.createElement(v, {
						onClick: () => u(r.G.MODERATOR, !0),
						selected: c && l,
						text: a.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && o.a.createElement(v, {
						onClick: () => u(r.G.ADMIN, null),
						selected: s && !l,
						text: a.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && d && m && o.a.createElement(v, {
						onClick: () => u(r.G.ADMIN, !0),
						selected: s && l,
						text: a.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", p.a);
			var E = Object(d.a)(C);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: a,
					isModDistinguished: i,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: u
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: u
				}, o.a.createElement(E, {
					isAdminDistinguished: n,
					isUserEmployee: s,
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: u,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.G.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.G.ADMIN ? m("admin_distinguish") : i && e !== r.G.MODERATOR ? m("undistinguish") : n && e !== r.G.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "UserAchievementFlair",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("UserAchievementFlair").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.tsx"
				}
			})
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
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				u = n("./src/reddit/helpers/path/index.ts"),
				p = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				f = n("./src/telemetry/models/Outbound.ts"),
				v = n("./src/reddit/components/ExpandoButton/index.m.less"),
				C = n.n(v);
			const E = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.ab)(Object(u.b)(t.permalink), t.id))
				})),
				y = (e, t = !1, n) => {
					const s = Object(d.a)(C.a.icon, C.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: s
					});
					if (n.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: s
					});
					if (n.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: s
					});
					switch (e) {
						case x.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: s
							});
						case x.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: s
							});
						case x.o.TEXT:
						case x.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: s
							});
						case x.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: s
							});
						case x.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: s
							});
						case x.o.EMBED:
						default:
							return r.a.createElement(b.a, {
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
					isCommentsPage: l,
					isExpanded: u,
					post: x,
					toggle: v,
					useMediaIcons: E
				} = e, g = n || x, k = Object(a.e)(h.b), O = t => {
					k && (t.preventDefault(), e.showModalOnPostLinkClick(g))
				}, _ = o && !!n;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type || "liveaudio" === g.media.type) && !Object(p.a)(g)) || !!x.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					onClick: v
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : E ? r.a.createElement(r.a.Fragment, null, y(g.media && g.media.type, _, x), r.a.createElement(b.a, {
					name: "expand",
					className: Object(d.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : g.source && g.source.url ? r.a.createElement(m.b, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: x.isSponsored,
					postId: x.id,
					source: x.source,
					sourceElement: l ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(d.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(d.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(g.permalink),
					rel: "nofollow",
					onClick: O
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : o.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, n) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/AwardBadges/index.tsx"),
				a = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = n("./src/reddit/components/PostBadges/index.tsx"),
				c = n("./src/reddit/components/PostTopMeta/index.tsx"),
				l = n("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/MetaSeparator/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/hooks/useClickSourceData.ts"),
				v = n("./src/reddit/models/Subreddit/index.ts"),
				C = n("./src/reddit/components/PostMeta/index.m.less"),
				E = n.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: n,
					inSubredditOrProfile: s,
					isCurrentUserProfilePost: C,
					isOverlay: y,
					isTopicPage: g,
					post: k,
					shouldShowSubscribeButton: O,
					subredditOrProfile: _,
					tooltipType: I
				} = e, j = !!g, T = Object(f.a)();
				return o.a.createElement("div", {
					className: E.a.metaContainer
				}, !s && !k.isSponsored && _ && o.a.createElement(a.a, {
					postId: k.id,
					subredditName: _.name
				}, o.a.createElement(m.a, {
					className: E.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: _.url,
						state: T
					}
				}, _.displayText)), _ && _.isQuarantined && o.a.createElement(l.a, null), !s && !k.isSponsored && _ && O && !C && o.a.createElement(u.a, {
					className: E.a.SubscribeButton,
					getEventFactory: e => Object(h.h)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: _.name,
						type: Object(v.h)(_) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: k.id,
					size: b.d.XXS,
					small: !0
				}), !s && !k.isSponsored && o.a.createElement(x.b, null), !s && !k.isSponsored && o.a.createElement(i.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(c.d, {
					className: E.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: I
				}), o.a.createElement(d.a, {
					displayText: _ ? _.displayText : null,
					inSubredditOrProfile: !!s,
					post: k,
					tooltipType: I
				}), !j && o.a.createElement(r.a, {
					hideCta: n,
					thing: k,
					tooltipType: y ? c.c.Lightbox : void 0
				}))
			}
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
				return f
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				m = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				u = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				p = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				x = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				h = n.n(x);
			const f = r.a.wrapped(d.a, "Icon", h.a),
				v = r.a.wrapped(c.a, "Icon", h.a),
				C = r.a.wrapped(l.a, "Icon", h.a),
				E = r.a.wrapped(m.a, "Icon", h.a),
				y = r.a.wrapped(u.a, "Icon", h.a),
				g = r.a.wrapped(p.a, "Icon", h.a),
				k = () => o.a.createElement(i.a, {
					name: "mod_mute",
					className: h.a.Icon
				}),
				O = () => o.a.createElement(i.a, {
					name: "calendar",
					className: h.a.Icon
				}),
				_ = () => o.a.createElement(b.a, {
					className: h.a.svgIcon
				}),
				I = r.a.wrapped(a.b, "DropdownRow", h.a),
				j = r.a.div("ListContainer", h.a)
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/PostLeftRail/index.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.tsx"),
				c = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = n.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: C,
					isReadingIndicatorsExperimentEnabled: E
				} = e, y = `upvote-button-${t.id}${f?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, s && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: n,
					redditStyle: h,
					upvoteTooltipId: y,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: C,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: E
					}),
					isReadingIndicatorsExperimentEnabled: E
				}))
			}
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
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				d = n.n(i);
			const c = r.a.div("WidgetBackground", d.a),
				l = r.a.wrapped(({
					children: e,
					...t
				}) => o.a.createElement("div", t, o.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", d.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(c, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "a", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				m = n("./src/reddit/components/SubscribeButton/index.tsx"),
				u = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(a.b)(null, (e, t) => {
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
				v = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				k = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				O = n.n(k);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => r.a.createElement(b.a, {
					className: Object(c.a)(O.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: O.a.container
				}, e.isLoading ? r.a.createElement(f.a, {
					className: O.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: O.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(T, _({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(h.t, {
					className: O.a.bottomButton,
					kind: h.b.Button,
					priority: h.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				j = Object(d.c)({
					hideNSFWPref: y.C,
					nightmode: y.W
				}),
				T = Object(a.b)(j)(e => r.a.createElement("div", {
					className: Object(c.a)(O.a.communityItemContainer, {
						[O.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(C.a, {
					className: O.a.communityItemExpandCenter,
					widthRight: x.t
				}, r.a.createElement("div", {
					className: O.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: O.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(c.a)(O.a.defaultCommunityIcon, {
						[O.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: O.a.communityDescriptionContainer
				}, r.a.createElement(i.a, {
					className: O.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(g.b)(e.name, e.type),
					to: Object(g.a)(e.name, e.type)
				}, Object(g.b)(e.name, e.type)), r.a.createElement("div", {
					className: O.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: O.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(l.b, {
					className: O.a.nsfwFlair,
					flair: {
						type: E.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(f.a, {
					className: Object(c.a)(O.a.communityCta, O.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(h.t, {
					className: O.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
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
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: O.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function a(e, t) {
				return t === s.a.PROFILE ? Object(o.d)(e) : Object(o.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
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
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			}));
			const s = "ModerationPage--Modal--AddAward",
				o = "ModerationPage--Modal--DeleteAwardConfirmation",
				r = 20,
				a = 4,
				i = 1e4,
				d = .2,
				c = .1,
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
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				d = n.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
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
				r = n.n(o),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const l = a.a.span("metaText", c.a),
				m = e => r.a.createElement(l, e, " · "),
				u = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...o
				}) => {
					const a = Object(i.b)(t),
						d = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						c = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, c)
				},
				p = e => r.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.f)(n));
				return t
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
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				o = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(o.e)(i, {
							commentId: e
						}),
						c = Object(r.g)(i, {
							subredditId: t,
							userId: n
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.o(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == d ? void 0 : d.templateId,
							title: d ? Object(s.g)(d) : void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name
						}
					}
				},
				d = () => e => ({
					source: "powerups",
					action: "click",
					noun: "view_your_achievements",
					...a.o(e)
				})
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
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
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const r = e => o.a.createElement("svg", {
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
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = n.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(d.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Supporter = "SUPPORTER", e.Achievement = "ACHIEVEMENT"
				}(s || (s = {}));
			const o = e => e.category === s.Supporter,
				r = e => e.category === s.Achievement
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				o = n("./src/reddit/actions/gold/constants.ts"),
				r = n("./src/reddit/models/Gold/Powerups/powerupsFlair/index.ts");
			const a = {};
			var i = n("./node_modules/icepick/icepick.js"),
				d = n("./src/reddit/actions/economics/powerups/constants.ts");
			const c = {},
				l = e => {
					var t, n;
					return (null === (t = e.find(({
						isPreferred: e
					}) => e)) || void 0 === t ? void 0 : t.type) || (null === (n = e[0]) || void 0 === n ? void 0 : n.type)
				},
				m = {};
			t.a = Object(s.c)({
				subredditPowerupsFlairs: (e = a, t) => {
					switch (t.type) {
						case o.pb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = t.payload;
							if (!(null == s ? void 0 : s.length)) return e;
							const a = s.reduce((e, t) => ({
									...e,
									[t.type]: t
								}), {}),
								i = s.filter(r.a).map(e => e.type),
								d = s.filter(r.b).map(e => e.type);
							return {
								...e, [n]: {
									flairsByType: a,
									achievementTypes: i,
									supporterTypes: d
								}
							};
						default:
							return e
					}
				},
				subredditUserPowerupsFlairs: (e = c, t) => {
					switch (t.type) {
						case d.d: {
							const {
								id: n,
								userAchievementFlairsByRedditorIds: s
							} = t.payload;
							let o = e[n] || {};
							for (const {
									redditorId: e,
									isHidden: t,
									userAchievementFlairs: a
								} of s) {
								const n = a.filter(r.a),
									s = n.map(({
										type: e
									}) => e),
									i = a.filter(r.b),
									d = i.map(({
										type: e
									}) => e),
									c = l(n),
									m = l(i);
								o = {
									...o,
									[e]: {
										achievementTypes: s,
										supporterTypes: d,
										preferredAchievementType: c,
										preferredSupporterType: m,
										isHidden: t
									}
								}
							}
							return {
								...e,
								[n]: o
							}
						}
						case d.f: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: o,
								pendingSupporterType: r
							}))
						}
						case d.g: {
							const {
								subredditId: n,
								userId: s,
								achievementFlairType: o,
								supporterFlairType: r
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								preferredAchievementType: o,
								preferredSupporterType: r,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.e: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								pendingAchievementType: void 0,
								pendingSupporterType: void 0
							}))
						}
						case d.h: {
							const {
								subredditId: n,
								userId: s,
								isHidden: o
							} = t.payload;
							return Object(i.updateIn)(e, [n, s], e => ({
								...e,
								isHidden: o
							}))
						}
						default:
							return e
					}
				},
				usersSupportedSubreddits: (e = m, t) => {
					switch (t.type) {
						case d.i: {
							let n = {};
							return t.payload.forEach(e => {
								const t = e.id,
									s = e.powerups;
								if (!t || !s) return;
								const o = s.supportedSubreddits.filter(({
									subredditInfo: e
								}) => null == e ? void 0 : e.id).map(({
									subredditInfo: e
								}) => e.id);
								n = {
									...n,
									[t]: o.reduce((e, t) => (e[t] = !0, e), {})
								}
							}), {
								...e,
								...n
							}
						}
						default:
							return e
					}
				}
			})
		},
		"./src/reddit/selectors/gold/powerups/flairs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "a", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/powerups/index.ts");
			Object(r.a)({
				features: {
					powerups: a.a
				}
			});
			const i = (e, {
					subredditId: t
				}) => {
					var n;
					return t ? null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t] : null
				},
				d = (e, {
					subredditId: t
				}) => {
					var n, s;
					return t ? null === (s = null === (n = e.features.powerups.subredditPowerupsFlairs) || void 0 === n ? void 0 : n[t]) || void 0 === s ? void 0 : s.flairsByType : null
				},
				c = (e, {
					subredditId: t,
					userId: n
				}) => {
					var s, o;
					return t && n ? null === (o = null === (s = e.features.powerups.subredditUserPowerupsFlairs) || void 0 === s ? void 0 : s[t]) || void 0 === o ? void 0 : o[n] : null
				},
				l = Object(s.a)(c, e => (null == e ? void 0 : e.pendingAchievementType) || (null == e ? void 0 : e.preferredAchievementType)),
				m = Object(s.a)([d, l], (e, t) => e && t ? e[t] : null),
				u = Object(s.a)(c, e => null == e ? void 0 : e.preferredSupporterType),
				p = Object(s.a)([d, u], (e, t) => e && t ? e[t] : null),
				b = Object(s.a)([d, c], (e, t) => {
					if (!e) return [];
					const n = t ? [...t.supporterTypes, ...t.achievementTypes] : [],
						s = (null == t ? void 0 : t.pendingAchievementType) || (null == t ? void 0 : t.preferredAchievementType),
						o = (null == t ? void 0 : t.pendingSupporterType) || (null == t ? void 0 : t.preferredSupporterType);
					return Object.values(e).map(e => ({
						...e,
						isLocked: !n.includes(e.type),
						isPreferred: e.type === s || e.type === o
					})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1)
				}),
				x = Object(s.a)([i, c], (e, t) => {
					if (!e || !t) return null;
					const {
						supporterTypes: n,
						achievementTypes: s,
						flairsByType: o
					} = e, {
						supporterTypes: r,
						achievementTypes: a,
						preferredSupporterType: i,
						preferredAchievementType: d,
						pendingSupporterType: c,
						pendingAchievementType: l
					} = t;
					return {
						supporterFlairs: v(n, r, o, c || i),
						achievementFlairs: v(s, a, o, l || d)
					}
				}),
				h = Object(s.a)([c], e => !!e && e.isHidden),
				f = Object(s.a)([i, c, p], (e, t, n) => {
					if (!e || !t) return [];
					const s = t.achievementTypes.map(t => e.flairsByType[t]);
					return n ? [n, ...s] : s
				}),
				v = (e, t, n, s) => e.map(e => ({
					...n[e],
					isLocked: !t.includes(e),
					isPreferred: e === s
				})).sort((e, t) => e.isLocked === t.isLocked ? 0 : e.isLocked ? 1 : -1),
				C = (e, {
					commentId: t
				}) => {
					const n = Object(o.b)(e, {
							commentId: t
						}),
						s = null == n ? void 0 : n.subredditId,
						r = null == n ? void 0 : n.authorId;
					return !(!s || !r) && !!((e, {
						subredditId: t,
						userId: n
					}) => {
						var s, o, r;
						return t && n ? null === (r = null === (o = null === (s = e.features.powerups) || void 0 === s ? void 0 : s.usersSupportedSubreddits) || void 0 === o ? void 0 : o[n]) || void 0 === r ? void 0 : r[t] : null
					})(e, {
						subredditId: s,
						userId: r
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate.46a3cf6a586558e22f6f.js.map