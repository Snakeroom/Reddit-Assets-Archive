// https://www.redditstatic.com/desktop2x/ModQueuePages.0e57f9087841f13b45cf.js
// Retrieved at 3/4/2020, 10:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueuePages"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return h
			}));
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = h(o.target, o.currentTarget);
					u(o.target, o.currentTarget, p.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(d.previousPageActionInfo)(e)
					})), u(o.target, o.currentTarget, p.anchorsAndButtons) && n(o)
				}
			});

			function m(e) {
				class t extends a.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return a.a.createElement(e, c({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, n)
						}))
					}
				}
				return Object(i.b)(t)
			}
			const p = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				distinguishShield: "_3cuXnOdiXHbT8t5tAaGgKr",
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Approve: "_19WnAmcAChJM1wTzSOV1p2",
				approve: "_19WnAmcAChJM1wTzSOV1p2",
				Lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				lock: "_1-s5lNmDynkeEE7Z0x-t6q",
				Remove: "_1TzXdATrX8P6QZjY89r6Ln",
				remove: "_1TzXdATrX8P6QZjY89r6Ln",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				Spam: "_2rc9zwviU90yoF6FCv5jvs",
				spam: "_2rc9zwviU90yoF6FCv5jvs",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/comment/index.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				O = s("./src/reddit/selectors/moderatingComments.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				j = s("./src/reddit/icons/fonts/helpers.tsx"),
				S = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				_ = s.n(S);
			var w = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(j.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", _.a),
				P = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				I = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				M = s.n(L);
			s.d(t, "b", (function() {
				return F
			})), s.d(t, "a", (function() {
				return Q
			}));
			var R = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const F = l.a.wrapped(b.c, "RestrictedButton", M.a),
				D = l.a.wrapped(v.a, "Approve", M.a),
				B = l.a.wrapped(P.a, "Lock", M.a),
				A = l.a.wrapped(I.a, "Remove", M.a),
				W = l.a.wrapped(T.a, "Spam", M.a),
				U = l.a.wrapped(N.a, "Show", M.a),
				Q = l.a.wrapped(w, "DistinguishShield", M.a),
				V = Object(x.t)(),
				X = e => "Distinguish--Dropdown--".concat(e),
				q = Object(i.c)({
					currentUser: k.i,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(O.a)(e, {
							commentId: s.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.b)(X(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(x.g)(e, t) || Object(y.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: x.N
				}),
				H = Object(a.b)(q, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(m.H)(s.id)),
						onDistinguishComment: (t, n) => e(Object(m.S)(s.id, t, n)),
						onLockComment: () => e(Object(m.X)(s.id)),
						onRemoveComment: () => e(Object(m.cb)(s.id, !1)),
						onSpamComment: () => e(Object(m.cb)(s.id, !0)),
						onShowComment: () => e(Object(m.Y)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(p.h)({
							tooltipId: X(s.id)
						}))
					}
				});
			t.c = V(H(l.a.wrapped(Object(g.b)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: a,
					collapsedBecauseCrowdControl: i,
					language: l,
					moderatorPermissions: m,
					modModeEnabled: p,
					onApproveComment: b,
					onDistinguishComment: g,
					onLockComment: x,
					onRemoveComment: O,
					onShowComment: y,
					onSpamComment: E,
					onToggleDistinguishDropdown: k,
					sendEvent: v
				} = e, j = R(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "language", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const S = Object(C.a)(m),
					_ = Object(h.b)(s),
					w = s.isApproved && _,
					P = !!o && o.isEmployee,
					I = !s.isRemoved,
					T = i,
					N = e => v(Object(f.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || _) && r.a.createElement(F, {
					text: w ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						b(), N("approve")
					}
				}, r.a.createElement(D, null)), I && r.a.createElement(r.a.Fragment, null, r.a.createElement(F, {
					text: s.bannedBy === c.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						O(), s.bannedBy === c.k ? N("confirm_remove") : N("remove")
					}
				}, r.a.createElement(A, null)), r.a.createElement(F, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), N("spam")
					}
				}, r.a.createElement(W, null))), r.a.createElement(F, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), N(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(B, null)), a && !P && !s.bannedBy && r.a.createElement(F, {
					className: Object(d.a)({
						[M.a.selected]: j.isDistinguishDropdownOpen
					}),
					onClick: () => {
						N("mod_distinguish_menu"), k()
					}
				}, r.a.createElement(Q, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: j.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: P,
					isUserMod: S,
					onDistinguishComment: g,
					sendEventWithName: N,
					tooltipId: X(s.id)
				})), T && r.a.createElement(F, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						y()
					}
				}, r.a.createElement(U, null)))
			}), "CommentModToolsFlatlist", M.a)))
		},
		"./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				BulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				bulkActionCheckbox: "_3iI16gsT5wEWtruoBxoOtR",
				UnthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				unthreadedCommentContainer: "sXloQX7r47Wzsk9BzGm2",
				CommentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				commentColumn: "_1Xweq4o-zB3i3DcXmGzzCo",
				ModToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				modToolsFlatlist: "vP5hkZOVsSDk7GDKAq7OO",
				CommentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				commentContentWrapper: "-ejG1vHwBmlz_5bhISopO",
				CommentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				commentParentWrapper: "_3mX7brFt-u4nDJSVh-jpOe",
				LeftRail: "Z9hmG99TfBJCAbBf-qUN5",
				leftRail: "Z9hmG99TfBJCAbBf-qUN5",
				hasBorder: "_1XsRq0m2kXDelxfbhz55U6",
				VoteColumn: "raHWe-JvKoiuubD1zI79q",
				voteColumn: "raHWe-JvKoiuubD1zI79q",
				CommentBody: "_2MpQwJBmFbNsa_Vw7EV8OX",
				commentBody: "_2MpQwJBmFbNsa_Vw7EV8OX",
				Fade: "oJgHb8jt8pcSpTiugG0Db",
				fade: "oJgHb8jt8pcSpTiugG0Db",
				Votes: "EJ8j2TI5xV293AHVFV98I",
				votes: "EJ8j2TI5xV293AHVFV98I",
				score: "_1dQ0ZDSConSfUQpPh7-fct",
				ParentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				parentPostTitle: "_3lXem8Q27IuhplBpcrbkOv",
				Component: "_3WdgziOPlXBwthdefEr85r",
				component: "_3WdgziOPlXBwthdefEr85r",
				isBanned: "_34REldWOs0k5_KaRonS2V5",
				isReported: "sYxWb5PNRmW4dH0vC6Qiy"
			}
		},
		"./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				VoteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				voteSpacer: "_3SDIICEtoL7xtFw7iXPmd4",
				ContentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				contentWrapper: "_3kLHiyeJw88pJ2rFPeO-h_",
				Meta: "TmC-aUr9G4BhD7f1fazLW",
				meta: "TmC-aUr9G4BhD7f1fazLW",
				CommentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				commentParentWrapper: "XNRBSCtZVEKlAOHUTl8fv",
				CommentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				commentContentWrapper: "_3CTfjjt3pW3hsmgbSddrW6",
				Fade: "_2Mj-hTi0oAhSeVNOXqsYr2",
				fade: "_2Mj-hTi0oAhSeVNOXqsYr2",
				Component: "_3Pul81GjcQcqXueoAqkS0P",
				component: "_3Pul81GjcQcqXueoAqkS0P"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.m.less": function(e, t, s) {
			e.exports = {
				VoteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				voteSpacer: "oq5mUzSj_vNl2qp3WN_JJ",
				ContentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				contentWrapper: "Z-SSPhDFBXkUleK1Uoo5n",
				CommentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				commentContentWrapper: "_2OgGzVSF6RB04Jb2cXSiPj",
				CommentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				commentParentWrapper: "OPElT6Do1pTNOWhGkL1eT",
				CommentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				commentBody: "_3PTQsA2VkqzBrZxhvpwI8Z",
				Fade: "_3Q0PfUquGeJoHhFKeS5MRg",
				fade: "_3Q0PfUquGeJoHhFKeS5MRg",
				ParentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				parentPostTitle: "_144TYY84bzwNfGN3DGzUvi",
				Component: "_29-oldqrqqPwwjRRH0aLqU",
				component: "_29-oldqrqqPwwjRRH0aLqU"
			}
		},
		"./src/reddit/components/Comments/UnthreadedComment/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return L
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				l = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				m = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				p = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				u = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				b = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = s("./src/reddit/components/RichTextJson/index.tsx"),
				x = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				C = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/selectors/comments.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/Comments/UnthreadedComment/index.m.less"),
				k = s.n(E),
				v = s("./src/lib/lessComponent.tsx");
			const j = v.a.div("VoteSpacer", k.a),
				S = v.a.div("ContentWrapper", k.a),
				_ = v.a.div("CommentContentWrapper", k.a),
				w = v.a.div("CommentBody", k.a),
				P = v.a.div("Fade", k.a),
				I = v.a.div("ParentPostTitle", k.a),
				T = v.a.div("CommentParentWrapper", k.a),
				N = Object(a.c)({
					comment: (e, t) => Object(f.n)(e, t),
					flair: f.e,
					language: y.P,
					subreddit: O.G
				}),
				L = Object(r.b)(N, (e, t) => {
					let {
						commentId: s,
						trackClick: n
					} = t;
					return {
						onIgnoreReports: () => e(Object(d.pb)(s)),
						onVoteClick: t => {
							const [o, r] = t === C.a.upvoted ? [Object(d.rb)(s), "upvote_comment"] : [Object(d.T)(s), "downvote_comment"];
							n(r)(), e(o)
						}
					}
				}),
				M = Object(i.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.c = L(v.a.wrapped(e => {
				const {
					className: t,
					comment: s,
					flair: n,
					hasReports: r,
					isCheckboxSelected: a = !1,
					language: i,
					onIgnoreReports: d,
					onVoteClick: C,
					showModTools: f,
					subreddit: O,
					showBulkActionCheckbox: y,
					toggleCheckbox: E
				} = e;
				return o.a.createElement(l.a, {
					className: t,
					clickTrackingId: s.id,
					permalink: s.permalink
				}, o.a.createElement(b.a, {
					model: s,
					handleVote: C,
					showBulkActionCheckbox: y,
					isCheckboxSelected: a,
					toggleCheckbox: E
				}), o.a.createElement(j, null, o.a.createElement(S, null, o.a.createElement(T, null, s.postTitle && o.a.createElement(I, null, s.postTitle), s.postAuthor && o.a.createElement(u.a, {
					comment: s
				})), o.a.createElement(_, null, o.a.createElement(m.a, {
					comment: s
				}, o.a.createElement(w, null, o.a.createElement(g.a, {
					content: Object(x.a)(s),
					rtJsonElementProps: M(e)
				}), o.a.createElement(P, null)), o.a.createElement(p.a, {
					comment: s,
					flair: n,
					language: i,
					subredditName: O ? O.displayText : null
				}), r && o.a.createElement(h.a, {
					language: i,
					onIgnoreReports: d,
					reportable: s
				}), f && !s.isDeleted && o.a.createElement(c.c, {
					comment: s,
					language: i
				}))))))
			}, "Component", k.a))
		},
		"./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/higherOrderComponents/withClickTracking.tsx"),
				d = s("./src/reddit/helpers/overlay/index.ts"),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = Object(r.b)(null, e => ({
				openLightbox: t => e(Object(d.a)(t))
			}));
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							afterClickTracking: t,
							permalink: s,
							openLightbox: n
						} = e,
						r = c(e, ["afterClickTracking", "permalink", "openLightbox"]),
						i = e => t(() => e.metaKey || e.ctrlKey || 1 === e.button ? window.open(Object(a.a)(s, {
							context: 3
						})) : n(Object(a.a)(s, {
							context: 3
						})))(e);
					return o.a.createElement("div", {
						className: r.className,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3)), 1 === e.button && i(e)
						},
						onClick: e => {
							!this.cancelClick && 0 === e.button && i(e)
						}
					}, r.children)
				}
			}
			t.a = l(Object(i.c)(m))
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				DashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u",
				dashWrapper: "_3Ed3UKndPjQ4kkX0QvOz3u"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.m.less"),
				i = s.n(a);
			const d = r.a.div("DashWrapper", i.a);
			t.a = e => null === e.comment.parentId ? o.a.createElement(d, null, e.children) : o.a.createElement(d, null, o.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				subredditWrapper: "_1ZSTlGe7wnX1GJX3F-AEwD",
				TopMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				topMeta: "_2Rm4FD32bOsXwX7lx3GeYW",
				Inline: "meK3ndVOmnvQt6wVaAg5W",
				inline: "meK3ndVOmnvQt6wVaAg5W",
				PostedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				postedInfo: "_6b3ccJ38E6dy9dby4PlDN",
				TextContainer: "iV3Hb5JWIQSpA3WhioY-N",
				textContainer: "iV3Hb5JWIQSpA3WhioY-N"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				i = s("./src/reddit/layout/row/Inline/index.tsx"),
				d = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.m.less"),
				c = s.n(d),
				l = s("./src/lib/lessComponent.tsx");
			const m = l.a.wrapped(i.a, "Inline", c.a),
				p = l.a.wrapped(i.a, "PostedInfo", c.a),
				u = l.a.wrapped(i.a, "SubredditWrapper", c.a),
				h = l.a.div("TextContainer", c.a),
				b = l.a.wrapped(a.a, "TopMeta", c.a);
			t.a = e => o.a.createElement(m, {
				className: e.className
			}, e.subredditName && o.a.createElement(u, null, e.subredditName && o.a.createElement(h, null, e.subredditName)), o.a.createElement(p, null, o.a.createElement(h, null, "".concat(Object(r.a)(e.language, "comment.commentedBy"))), o.a.createElement(b, {
				collapsedBecauseCrowdControl: e.comment.collapsedBecauseCrowdControl,
				collapsed: !1,
				comment: e.comment,
				flair: e.flair,
				language: e.language,
				renderedInOverlay: !1
			})))
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				AuthorLink: "_2jljMb6FK7HnIb15zmm1of",
				authorLink: "_2jljMb6FK7HnIb15zmm1of",
				SubredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				subredditWrapper: "SZcM6DS3LArR6FZxlQXOv",
				TextContainer: "_2in6k_0-sFgKVz16hifq03",
				textContainer: "_2in6k_0-sFgKVz16hifq03",
				SubredditIcon: "uCjYZbKNai0INWGwHjoUh",
				subredditIcon: "uCjYZbKNai0INWGwHjoUh",
				Inline: "_2VWXAfRlnHG_4nydI7J4l3",
				inline: "_2VWXAfRlnHG_4nydI7J4l3"
			}
		},
		"./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/AuthorLink/index.tsx"),
				a = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.m.less"),
				m = s.n(l),
				p = s("./src/lib/lessComponent.tsx");
			const u = p.a.wrapped(r.a, "AuthorLink", m.a),
				h = p.a.wrapped(c.a, "Inline", m.a),
				b = p.a.wrapped(c.a, "SubredditWrapper", m.a),
				g = p.a.div("TextContainer", m.a),
				x = p.a.wrapped(i.b, "SubredditIcon", m.a);
			t.a = e => o.a.createElement(h, null, e.subredditOrProfile && o.a.createElement(b, null, e.subredditOrProfile && o.a.createElement(x, {
				subredditOrProfile: e.subredditOrProfile
			}), e.subredditOrProfile && o.a.createElement(g, null, e.subredditOrProfile.displayText)), o.a.createElement(d.c, null, "posted by"), e.comment.postAuthor && o.a.createElement(a.b, {
				postOrComment: e.comment,
				author: e.comment.postAuthor
			}, o.a.createElement(u, {
				author: e.comment.postAuthor,
				isUnstyled: !0
			}, "u/".concat(e.comment.postAuthor))))
		},
		"./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less": function(e, t, s) {
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
		"./src/reddit/components/DistinguishCommentDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				m = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(p);
			const h = a.a.div("DistinguishWrapper", u.a),
				b = a.a.wrapped(m.a, "Inline", u.a),
				g = a.a.wrapped(c.a, "RadioOff", u.a),
				x = a.a.wrapped(l.a, "RadioOn", u.a),
				C = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(x, null) : o.a.createElement(g, null), e.text),
				f = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: i,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: m,
						onDistinguishComment: p
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: s
					}, o.a.createElement(C, {
						onClick: () => p(r.C.NONE, null),
						selected: !c && !n,
						text: Object(d.c)("Undistinguish")
					}), i && o.a.createElement(C, {
						onClick: () => p(r.C.MODERATOR, null),
						selected: c && !l,
						text: Object(d.c)("Distinguish as Mod")
					}), m && i && o.a.createElement(C, {
						onClick: () => p(r.C.MODERATOR, !0),
						selected: l,
						text: Object(d.c)("Distinguish as Mod and Sticky")
					}), a && o.a.createElement(C, {
						onClick: () => p(r.C.ADMIN, null),
						selected: n,
						text: Object(d.c)("Distinguish as Admin")
					}))
				}, "DistinguishOptions", u.a);
			var O = Object(i.a)(f);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: a,
					isModDistinguished: i,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: m,
					tooltipId: p
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: p
				}, o.a.createElement(O, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? m(!d && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? m("admin_distinguish") : i && e !== r.C.MODERATOR ? m("undistinguish") : s && e !== r.C.ADMIN && m("admin_undistinguish"), d && !t && m("unsticky")
					}
				}))
			}
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
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(c);
			const m = a.a.div("Text", l.a),
				p = a.a.div("Placeholder", l.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(p, {
							className: t
						}, o.a.createElement(m, null, o.a.createElement(d.c, null, "Loading reports…")))
					}
				});
			t.a = e => o.a.createElement(u, e)
		},
		"./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3gono-WZrSL-d6xVXvjtMy",
				container: "_3gono-WZrSL-d6xVXvjtMy",
				Image: "cSzjL6IStvPqHPZ7Y7ly8",
				image: "cSzjL6IStvPqHPZ7Y7ly8",
				Title: "_15y0pZYrlSHF1PcfsddZ-q",
				title: "_15y0pZYrlSHF1PcfsddZ-q",
				Text: "_2jaFduo9u1gW746Eq2bUKo",
				text: "_2jaFduo9u1gW746Eq2bUKo"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.m.less": function(e, t, s) {
			e.exports = {
				Inline: "_3JHX3et1k6IdasjG0oW12P",
				inline: "_3JHX3et1k6IdasjG0oW12P",
				Filter: "_1OcIyF84egvn4Y6482t8jQ",
				filter: "_1OcIyF84egvn4Y6482t8jQ",
				filterMargin: "_2bX-c80byEShP8Q3c-pyFF",
				LayoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7",
				layoutSwitch: "_31lr1WpF-1P7ga7WE4KVS7"
			}
		},
		"./src/reddit/components/ModQueueList/LayoutNavigation.tsx": function(e, t, s) {
			"use strict";
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				h = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				g = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = s("./src/reddit/layout/row/Inline/index.tsx"),
				C = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/lib/addQueryParams/index.ts"),
				E = s("./src/lib/filterQueryParams/index.ts"),
				k = s("./src/reddit/i18n/utils.ts"),
				v = s("./src/reddit/controls/Dropdown/Row.tsx"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/selectors/meta.ts"),
				_ = s("./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less"),
				w = s.n(_);
			! function(e) {
				e.Comments = "comments", e.Posts = "links"
			}(n || (n = {}));
			const P = p.a.wrapped(v.b, "Row", w.a),
				I = Object(i.c)({
					currentPage: e => e.platform.currentPage,
					origin: S.h
				});
			var T = Object(a.b)(I)(e => r.a.createElement("div", null, r.a.createElement(j.a, {
					onClick: e.sendEventWithName("content_type_both"),
					to: Object(E.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "only", "page"])
				}, r.a.createElement(P, {
					displayText: Object(k.c)("Posts and Comments"),
					isSelected: !e.postTypeFilter
				})), r.a.createElement(j.a, {
					onClick: e.sendEventWithName("content_type_post"),
					to: Object(y.a)(Object(E.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "page"]), {
						only: n.Posts
					})
				}, r.a.createElement(P, {
					displayText: Object(k.c)("Posts"),
					isSelected: e.postTypeFilter === n.Posts
				})), r.a.createElement(j.a, {
					onClick: e.sendEventWithName("content_type_comment"),
					to: Object(y.a)(Object(E.a)("".concat(e.origin).concat(e.currentPage.url), ["after", "before", "page"]), {
						only: n.Comments
					})
				}, r.a.createElement(P, {
					displayText: Object(k.c)("Comments"),
					isSelected: e.postTypeFilter === n.Comments
				})))),
				N = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./src/reddit/contexts/PageLayer/index.tsx")),
				L = s("./src/reddit/controls/SearchBar/index.tsx"),
				M = s("./src/reddit/selectors/moderatorPermissions.ts"),
				R = s("./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less"),
				F = s.n(R);
			const D = Object(N.t)({
					currentPageUrl: N.e
				}),
				B = Object(i.c)({
					moderatingSubreddits: M.k,
					origin: S.h
				}),
				A = Object(a.b)(B),
				W = p.a.div("DropdownContainer", F.a),
				U = p.a.div("SearchBarContainer", F.a),
				Q = p.a.wrapped(v.b, "Row", F.a),
				V = e => "user" === e.type ? {
					profile: e.name
				} : {
					subreddit: e.name
				};
			class X extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						search: ""
					}, this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, this.state)
				}
				componentWillUpdate(e, t) {
					e.moderatingSubreddits !== this.props.moderatingSubreddits ? (this.updateSortedSubreddits(e), this.updateFilteredSubreddits(e, t)) : t.search !== this.state.search && this.updateFilteredSubreddits(e, t)
				}
				updateSortedSubreddits(e) {
					this.sortedSubreddits = e.moderatingSubreddits.slice().sort((e, t) => e.displayText.toLowerCase() > t.displayText.toLowerCase() ? 1 : -1)
				}
				updateFilteredSubreddits(e, t) {
					if (!t.search) return void(this.filteredSubreddits = this.sortedSubreddits);
					const s = t.search.toLowerCase();
					let n;
					n = e.moderatingSubreddits !== this.props.moderatingSubreddits || 0 !== s.indexOf(this.state.search) ? this.sortedSubreddits : this.filteredSubreddits, this.filteredSubreddits = n.filter(e => -1 !== e.displayText.toLowerCase().indexOf(s))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(W, {
						onClickCapture: this.stopPropagation
					}, r.a.createElement(U, null, r.a.createElement(L.a, {
						autoFocus: !0,
						onTextChange: e => this.setState({
							search: e.currentTarget.value
						}),
						placeholder: Object(k.c)("Find subreddit"),
						value: t.search
					})), r.a.createElement(j.a, {
						to: Object(E.a)("".concat(e.origin).concat(e.currentPageUrl), ["after", "before", "page", "profile", "subreddit"])
					}, r.a.createElement(Q, {
						displayText: Object(k.c)("All subreddits"),
						isSelected: !e.subredditName && !e.profileName
					})), this.filteredSubreddits.map(t => {
						const s = V(t);
						return r.a.createElement(j.a, {
							key: t.id,
							to: Object(y.a)(Object(E.a)("".concat(e.origin).concat(e.currentPageUrl), ["after", "before", "page", "profile", "subreddit"]), s)
						}, r.a.createElement(Q, {
							displayText: t.displayText,
							isSelected: e.subredditName ? e.subredditName === t.name : e.profileName === t.name
						}))
					}))
				}
			}
			var q = D(A(X)),
				H = s("./src/reddit/components/ModQueueList/LayoutNavigation.m.less"),
				Z = s.n(H);
			const K = Object(m.a)(h.a),
				z = "MODQ--SUBREDDIT_FILTER_DROPDOWN",
				J = "MODQ--POST_TYPE_FILTER_DROPDOWN",
				G = p.a.wrapped(x.a, "Inline", Z.a),
				Y = p.a.div("Filter", Z.a),
				$ = p.a.wrapped(b.a, "LayoutSwitch", Z.a),
				ee = Object(i.c)({
					isPostTypeFilterDropdownOpen: Object(O.b)(J),
					isSubredditFilterDropdownOpen: Object(O.b)(z),
					profile: (e, t) => {
						let {
							profileName: s
						} = t;
						return s ? Object(C.j)(e, {
							profileName: s
						}) : null
					},
					subreddit: (e, t) => {
						let {
							subredditName: s
						} = t;
						return s ? Object(f.y)(e, {
							subredditName: s
						}) : null
					}
				}),
				te = Object(a.b)(ee, e => ({
					loadAllSubreddits: () => e(Object(u.d)(!0)),
					onOpenDropdown: t => e(Object(l.h)({
						tooltipId: t
					}))
				}));
			class se extends r.a.Component {
				constructor() {
					super(...arguments), this.onOpenSubredditFilterDropdown = () => {
						this.props.loadAllSubreddits(), this.props.onOpenDropdown(z), this.props.sendEventWithName("subreddit")
					}, this.onOpenPostTypeFilterDropdown = () => {
						this.props.onOpenDropdown(J), this.props.sendEventWithName("content_type")
					}
				}
				render() {
					const {
						props: e
					} = this, t = e.subreddit && e.subreddit.displayText || e.profile && e.profile.displayText || Object(d.a)(e.language, "subredditModeration.modQueue.filters.allSubreddits"), s = e.postTypeFilter && Object(d.a)(e.language, "subredditModeration.modQueue.filters.".concat(e.postTypeFilter)) || Object(d.a)(e.language, "subredditModeration.modQueue.filters.allPostTypes");
					return r.a.createElement(G, null, !e.hideSubredditFilter && r.a.createElement(r.a.Fragment, null, r.a.createElement(Y, {
						id: z,
						onClick: this.onOpenSubredditFilterDropdown
					}, t, r.a.createElement(g.b, null)), r.a.createElement(K, {
						isOpen: e.isSubredditFilterDropdownOpen,
						tooltipId: z
					}, r.a.createElement(q, {
						language: e.language,
						profileName: e.profileName,
						subredditName: e.subredditName
					}))), e.showTypeFilter && r.a.createElement("div", {
						className: Object(c.a)({
							[Z.a.filterMargin]: !e.hideSubredditFilter
						})
					}, r.a.createElement(Y, {
						id: J,
						onClick: this.onOpenPostTypeFilterDropdown
					}, s, r.a.createElement(g.b, null)), r.a.createElement(K, {
						isOpen: e.isPostTypeFilterDropdownOpen,
						tooltipId: J
					}, r.a.createElement(T, {
						postTypeFilter: e.postTypeFilter,
						sendEventWithName: e.sendEventWithName
					}))), r.a.createElement($, null))
				}
			}
			t.a = te(se)
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less": function(e, t, s) {
			e.exports = {
				StatusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				statusItem: "_2K7YZXKFsZRhsQQ4AbJmxU",
				StatusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				statusContainer: "_2iPB1Z8ZMY-jLMenh1R4K4",
				StatusList: "B7xBQCW-i0XkgeJ22rgLC",
				statusList: "B7xBQCW-i0XkgeJ22rgLC"
			}
		},
		"./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				checkboxContainer: "DsVp-bHpfq0Oq0qA6pTak",
				Checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				checkbox: "_3IYLDjbdCg9uE2oDb5e7Sn",
				DropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				dropdownTriangle: "_3ePiZ_UzH5lFQIPzp35YXS",
				DropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				dropdownRow: "_5USHbSyhRaiAEnOouxEk9",
				Bullet: "K9CBgM-Xyd_FBz7TcYHah",
				bullet: "K9CBgM-Xyd_FBz7TcYHah",
				Text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				text: "_14Wi7Tj4JyvXkmtsyZkG9e",
				ModToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8",
				modToolsBulkOperations: "IncH4Lk7NsVjvrE51jpu8"
			}
		},
		"./src/reddit/components/ModQueueList/PostTypeFilterDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_1i-lQzTwq8UQrdKuiR_jer",
				row: "_1i-lQzTwq8UQrdKuiR_jer"
			}
		},
		"./src/reddit/components/ModQueueList/SubredditSelectorDropdown.m.less": function(e, t, s) {
			e.exports = {
				DropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				dropdownContainer: "CxFih1Dllyb7Ee-gA27SM",
				SearchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				searchBarContainer: "_3TBm4aNfLDgkYxeb3BL6Qu",
				Row: "_2-Mqfq2jQLCLoIJJX5d6ER",
				row: "_2-Mqfq2jQLCLoIJJX5d6ER"
			}
		},
		"./src/reddit/components/ModQueueList/index.m.less": function(e, t, s) {
			e.exports = {
				ItemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				itemContainer: "_2QxKXxKsAXysE1p_Y7m66a",
				ButtonContainer: "_1UWG2tG2gGruVUIlnO6Qwr",
				buttonContainer: "_1UWG2tG2gGruVUIlnO6Qwr"
			}
		},
		"./src/reddit/components/ModQueueList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/difference.js"),
				o = s.n(n),
				r = s("./node_modules/lodash/includes.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/modQueue/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				g = s("./src/lib/classNames/index.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/i18n/components.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				O = s("./src/reddit/components/PaginationButtons/index.m.less"),
				y = s.n(O),
				E = e => d.a.createElement(f.a, {
					className: y.a.buttonContainer
				}, d.a.createElement(x.o, {
					className: Object(g.a)(y.a.routerLink, {
						[y.a.mDisabled]: !e.prevButtonEnabled
					}),
					disabled: !e.prevButtonEnabled,
					to: e.prevTo,
					"data-redditstyle": !0
				}, d.a.createElement(C.c, null, "Back")), d.a.createElement(x.o, {
					className: Object(g.a)(y.a.routerLink, {
						[y.a.mDisabled]: !e.nextButtonEnabled
					}),
					disabled: !e.nextButtonEnabled,
					to: e.nextTo,
					"data-redditstyle": !0
				}, d.a.createElement(C.c, null, "Next"))),
				k = s("./src/reddit/components/PostList/index.tsx"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				j = s("./src/reddit/helpers/isComment.ts"),
				S = s("./src/reddit/helpers/isPost.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				w = s("./src/reddit/selectors/telemetry.ts");
			const P = (e, t) => s => ({
				source: "bulk_mod_action",
				action: "click",
				noun: t,
				media: w.media(s, e),
				post: w.post(s, e),
				profile: w.profile(s),
				screen: w.screen(s),
				session: w.session(s),
				subreddit: w.subreddit(s)
			});
			var I = s("./src/lib/logs/console.ts"),
				T = s("./src/lib/objectSelector/index.ts"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				L = s("./src/reddit/components/Comments/UnthreadedComment/index.tsx"),
				M = s("./src/reddit/components/Comments/UnthreadedCommentContainer/index.tsx"),
				R = s("./src/reddit/components/Comments/UnthreadedCommentDashWrapper/index.tsx"),
				F = s("./src/reddit/components/Comments/UnthreadedCommentMeta/index.tsx"),
				D = s("./src/reddit/components/Comments/UnthreadedCommentPostMeta/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/RichTextJson/index.tsx"),
				W = s("./src/reddit/components/VerticalVotes/index.tsx"),
				U = s("./src/reddit/controls/Checkbox/index.tsx"),
				Q = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				V = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				X = s("./src/reddit/components/Comments/CompactUnthreadedComment/index.m.less"),
				q = s.n(X);
			const H = p.a.div("LeftRail", q.a),
				Z = p.a.wrapped(U.a, "BulkActionCheckbox", q.a),
				K = p.a.wrapped(M.a, "UnthreadedCommentContainer", q.a),
				z = p.a.div("CommentColumn", q.a),
				J = p.a.div("VoteColumn", q.a),
				G = p.a.wrapped(N.c, "ModToolsFlatlist", q.a),
				Y = p.a.div("CommentBody", q.a),
				$ = p.a.div("Fade", q.a),
				ee = p.a.wrapped(W.a, "Votes", q.a),
				te = p.a.div("CommentContentWrapper", q.a),
				se = p.a.div("ParentPostTitle", q.a),
				ne = p.a.div("CommentParentWrapper", q.a),
				oe = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var re = Object(L.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: n,
						isCheckboxSelected: o = !1,
						language: r,
						onIgnoreReports: a,
						onVoteClick: i,
						showModTools: c,
						subreddit: l,
						showBulkActionCheckbox: m,
						toggleCheckbox: p
					} = e;
					return d.a.createElement(K, {
						className: Object(g.a)(t, {
							[q.a.isBanned]: !!s.bannedBy,
							[q.a.isReported]: Object(V.a)(s)
						}),
						clickTrackingId: s.id,
						permalink: s.permalink
					}, d.a.createElement(H, {
						className: Object(g.a)({
							[q.a.hasBorder]: !!s.bannedBy || Object(V.a)(s)
						})
					}, m && d.a.createElement(Z, {
						isCheckboxSelected: o,
						toggleCheckbox: p
					})), d.a.createElement(J, null, d.a.createElement(ee, {
						compact: !1,
						model: s,
						onVoteClick: i,
						scoreClassName: q.a.score
					})), d.a.createElement(z, null, d.a.createElement(ne, null, s.postTitle && d.a.createElement(se, null, s.postTitle), s.postAuthor && d.a.createElement(D.a, {
						comment: s
					})), d.a.createElement(te, null, d.a.createElement(R.a, {
						comment: s
					}, d.a.createElement(Y, null, d.a.createElement(A.a, {
						content: Object(Q.a)(s),
						rtJsonElementProps: oe(e)
					}), d.a.createElement($, null)), d.a.createElement(F.a, {
						comment: s,
						flair: n,
						language: r,
						subredditName: l ? l.displayText : null
					}), Object(b.c)(s) && d.a.createElement(B.a, {
						language: r,
						onIgnoreReports: a,
						reportable: s
					}), c && !s.isDeleted && d.a.createElement(G, {
						comment: s,
						language: r
					})))))
				}, "Component", q.a)),
				ae = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ie = s("./src/reddit/components/Comments/LargeUnthreadedComment/index.m.less"),
				de = s.n(ie);
			const ce = p.a.div("VoteSpacer", de.a),
				le = p.a.div("ContentWrapper", de.a),
				me = p.a.wrapped(F.a, "Meta", de.a),
				pe = p.a.div("CommentParentWrapper", de.a),
				ue = p.a.div("CommentContentWrapper", de.a),
				he = p.a.div("Fade", de.a),
				be = Object(T.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			var ge = Object(L.b)(p.a.wrapped(e => {
					const {
						className: t,
						comment: s,
						flair: n,
						hasReports: o,
						isCheckboxSelected: r = !1,
						language: a,
						onIgnoreReports: i,
						onVoteClick: c,
						showModTools: l,
						subreddit: m,
						showBulkActionCheckbox: p,
						toggleCheckbox: u
					} = e;
					return d.a.createElement(M.a, {
						className: t,
						clickTrackingId: s.id,
						permalink: s.permalink
					}, d.a.createElement(ae.a, {
						model: s,
						handleVote: c,
						showBulkActionCheckbox: p,
						isCheckboxSelected: r,
						toggleCheckbox: u
					}), d.a.createElement(ce, null, d.a.createElement(le, null, d.a.createElement(pe, null, s.postAuthor && d.a.createElement(D.a, {
						comment: s,
						subredditOrProfile: m
					}), s.postTitle && d.a.createElement(L.a, null, s.postTitle)), d.a.createElement(R.a, {
						comment: s
					}, d.a.createElement(ue, null, d.a.createElement(A.a, {
						content: Object(Q.a)(s),
						rtJsonElementProps: be(e)
					}), d.a.createElement(he, null)), o && d.a.createElement(B.a, {
						language: a,
						onIgnoreReports: i,
						reportable: s
					}), d.a.createElement(me, {
						comment: s,
						flair: n,
						language: a
					}))), l && !s.isDeleted && d.a.createElement(N.c, {
						comment: s,
						language: a
					})))
				}, "Component", de.a)),
				xe = s("./src/reddit/constants/postLayout.ts");
			const Ce = {
					[xe.g.Large]: ge,
					[xe.g.Medium]: L.c,
					[xe.g.Classic]: L.c,
					[xe.g.Compact]: re
				},
				fe = e => null;
			var Oe = s("./src/reddit/models/Flair/index.ts"),
				ye = s("./src/reddit/models/Media/index.ts"),
				Ee = s("./src/reddit/models/ModQueue/index.ts"),
				ke = s("./src/reddit/selectors/meta.ts"),
				ve = s("./src/reddit/selectors/modQueue.ts"),
				je = s("./src/reddit/selectors/subreddit.ts"),
				Se = s("./src/config.ts"),
				_e = s("./src/reddit/components/ModQueueList/EmptyQueueBanner.m.less"),
				we = s.n(_e);
			const Pe = "".concat(Se.a.assetPath, "/img/snoomoji/cat_blep.png"),
				Ie = p.a.div("Container", we.a),
				Te = p.a.div("Image", we.a),
				Ne = p.a.div("Title", we.a),
				Le = p.a.div("Text", we.a);
			var Me = () => d.a.createElement(Ie, null, d.a.createElement(Te, {
					style: {
						backgroundImage: "url(".concat(Pe, ")")
					}
				}), d.a.createElement(Ne, null, d.a.createElement(C.c, null, "The queue is clean!")), d.a.createElement(Le, null, d.a.createElement(C.c, null, "Kitteh is pleased"))),
				Re = s("./src/reddit/components/PostList/Placeholder.tsx");
			const Fe = Object(v.t)(),
				De = Object(l.c)({
					layout: v.L
				});
			var Be = Fe(Object(c.b)(De)(e => d.a.createElement(Re.a, {
					isLoading: !0,
					layout: e.layout
				}))),
				Ae = s("./node_modules/fbt/lib/FbtPublic.js"),
				We = s("./node_modules/lodash/flatten.js"),
				Ue = s.n(We),
				Qe = s("./src/reddit/actions/tooltip.ts"),
				Ve = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				Xe = s("./src/reddit/icons/fonts/helpers.tsx"),
				qe = s("./src/reddit/icons/fonts/List/index.m.less"),
				He = s.n(qe);
			var Ze = p.a.wrapped(e => d.a.createElement("i", {
					className: "".concat(Object(Xe.b)("list"), " ").concat(e.className)
				}), "ListIcon", He.a),
				Ke = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				ze = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				Je = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				Ge = s("./src/higherOrderComponents/asTooltip.tsx"),
				Ye = s("./src/reddit/actions/modal.ts"),
				$e = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				et = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				tt = s("./src/reddit/controls/Dropdown/index.tsx"),
				st = s("./src/reddit/controls/Dropdown/Row.tsx"),
				nt = s("./src/reddit/helpers/flair.ts"),
				ot = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				rt = s("./src/reddit/selectors/activeModalId.ts"),
				at = s("./src/reddit/selectors/moderatorPermissions.ts"),
				it = s("./src/reddit/selectors/postFlair.ts"),
				dt = s("./src/reddit/selectors/posts.ts"),
				ct = s("./src/reddit/selectors/tooltip.ts"),
				lt = s("./src/reddit/components/TrackingHelper/index.tsx"),
				mt = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/ExtraModToolsList.m.less"),
				pt = s.n(mt);
			const ut = p.a.wrapped(e => d.a.createElement("button", {
					className: e.className,
					disabled: e.isDisabled,
					onClick: e.onClick,
					title: e.isDisabled ? Ae.fbt._("You can't take that action on a comment", null, {
						hk: "26RFsw"
					}) : void 0
				}, d.a.createElement(f.a, null, e.buttonText)), "StatusItem", pt.a),
				ht = p.a.div("StatusContainer", pt.a),
				bt = Object(l.c)({
					selectedItems: ve.f
				}),
				gt = Object(c.b)(bt, e => ({
					onIgnoreReports: () => e(Object(u.f)(Ee.a.IgnoreReports)),
					onLock: () => e(Object(u.f)(Ee.a.Lock)),
					onMarkNSFW: () => e(Object(u.f)(Ee.a.MarkNSFW)),
					onSpoiler: () => e(Object(u.f)(Ee.a.Spoiler)),
					onUnignoreReports: () => e(Object(u.f)(Ee.a.UnignoreReports)),
					onUnlock: () => e(Object(u.f)(Ee.a.Unlock)),
					onUnmarkNSFW: () => e(Object(u.f)(Ee.a.UnmarkNSFW)),
					onUnspoiler: () => e(Object(u.f)(Ee.a.Unspoiler))
				})),
				xt = e => e.some(e => Object(j.a)(e)),
				Ct = p.a.wrapped(gt(Object(lt.b)(e => d.a.createElement("div", {
					className: e.className,
					style: e.style
				}, d.a.createElement(ht, null, d.a.createElement(ut, {
					onClick: e.onIgnoreReports,
					buttonText: Ae.fbt._("Ignore Reports", null, {
						hk: "1hZ3hN"
					})
				}), d.a.createElement(ut, {
					onClick: e.onUnignoreReports,
					buttonText: Ae.fbt._("Unignore Reports", null, {
						hk: "3y089p"
					})
				}), d.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onLock,
					buttonText: Ae.fbt._("Lock", null, {
						hk: "4bc0vl"
					})
				}), d.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onUnlock,
					buttonText: Ae.fbt._("Unlock", null, {
						hk: "Pe2ML"
					})
				}), d.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onSpoiler,
					buttonText: Ae.fbt._("Mark as Spoiler", null, {
						hk: "4pIu4V"
					})
				}), d.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onUnspoiler,
					buttonText: Ae.fbt._("Unmark as Spoiler", null, {
						hk: "1ImDYd"
					})
				}), d.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onMarkNSFW,
					buttonText: Ae.fbt._("Mark as NSFW", null, {
						hk: "4yS4Hz"
					})
				}), d.a.createElement(ut, {
					isDisabled: xt(e.selectedItems),
					onClick: e.onUnmarkNSFW,
					buttonText: Ae.fbt._("Unmark as NSFW", null, {
						hk: "ZzA74"
					})
				}))))), "StatusList", pt.a);
			var ft = Object(Ge.a)(Ct);
			const Ot = Object(l.c)({
				isDropdownOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(ct.b)(s)(e)
				}
			});
			var yt = Object(c.b)(Ot)(Object(lt.b)(e => {
					const {
						className: t,
						isDropdownOpen: s,
						tooltipId: n
					} = e;
					return d.a.createElement("div", {
						id: n,
						className: t
					}, d.a.createElement(ft, {
						isOpen: s,
						tooltipId: n
					}))
				})),
				Et = s("./src/reddit/components/ModQueueList/ModToolsBulkOperations/index.m.less"),
				kt = s.n(Et);
			const vt = "BulkAction--BulkItemFilter",
				jt = "BulkActions--PostFlair--Modal",
				St = Object(Ge.a)(tt.a),
				_t = p.a.div("CheckboxContainer", kt.a),
				wt = p.a.wrapped(U.a, "Checkbox", kt.a),
				Pt = p.a.wrapped(ot.b, "DropdownTriangle", kt.a),
				It = p.a.wrapped(e => d.a.createElement(st.b, {
					className: e.className,
					displayText: e.displayText,
					onClick: e.onClick
				}), "DropdownRow", kt.a),
				Tt = p.a.span("Bullet", kt.a),
				Nt = p.a.div("Text", kt.a),
				Lt = Object(l.c)({
					activeModalId: rt.a,
					dropdownIsOpen: Object(ct.b)(vt),
					flairData: it.d,
					isApiPending: ve.a,
					moderatorPermissions: at.j,
					posts: dt.P,
					selectedItems: ve.f
				}),
				Mt = Object(c.b)(Lt, e => ({
					onApprove: () => e(Object(u.f)(Ee.a.Approve)),
					onFlair: (t, s) => e(Object(u.f)(Ee.a.Flair, t, s)),
					onOpenDropdown: () => e(Object(Qe.h)({
						tooltipId: vt
					})),
					onOpenModToolsDropdown: () => e(Object(Qe.h)({
						tooltipId: "BulkActions--ModTools"
					})),
					onRemove: () => e(Object(u.f)(Ee.a.Remove)),
					onSpam: () => e(Object(u.f)(Ee.a.Spam)),
					onToggleFlairModal: () => e(Object(Ye.i)(jt))
				})),
				Rt = (e, t) => {
					const s = Ue()(e.map(e => t[e].flair));
					if (s.length <= 1) return s;
					const n = [];
					return s.forEach(e => {
						if (e.type === Oe.f.Text || e.type === Oe.f.Richtext) {
							const t = Object(nt.g)(e);
							a()(n, t) || n.push(t)
						}
					}), n.length > 1 ? [{
						type: Oe.f.Text,
						text: Ae.fbt._("Multiple Flairs", null, {
							hk: "2WHsvc"
						})
					}] : s
				};
			var Ft = Mt(p.a.wrapped(e => {
					const {
						activeModalId: t,
						className: s,
						endNumItems: n,
						flairData: o,
						isAnyItemSelected: r,
						isApiPending: a,
						moderatorPermissions: c,
						numSelected: l,
						numShowing: m,
						onApprove: p,
						onFlair: u,
						onRemove: h,
						onSpam: b,
						onToggleFlairModal: g,
						posts: x,
						selectedItems: C,
						startNumItems: f,
						subredditId: O,
						toggleSelectAll: y,
						toggleSelectByFilter: E
					} = e, k = [{
						name: Ae.fbt._("Spam filtered", null, {
							hk: "S0DJ9"
						}),
						filterType: "spamFiltered"
					}, {
						name: Ae.fbt._("Has reports", null, {
							hk: "1x2hhv"
						}),
						filterType: "hasReports"
					}, {
						name: Ae.fbt._("Self posts", null, {
							hk: "KFHYI"
						}),
						filterType: "selfPosts"
					}, {
						name: Ae.fbt._("Posts with flair", null, {
							hk: "18cMZD"
						}),
						filterType: "postsWithFlair"
					}, {
						name: Ae.fbt._("Posts", null, {
							hk: "gGGKv"
						}),
						filterType: "posts"
					}, {
						name: Ae.fbt._("Comments", null, {
							hk: "1F1pwI"
						}),
						filterType: "comments"
					}], v = c && c.flair, j = O && o && o.displaySettings.isEnabled && v && !xt(C);
					return d.a.createElement("div", {
						className: s
					}, d.a.createElement(_t, {
						id: vt
					}, d.a.createElement(wt, {
						isHalfCheckboxSelected: e.isAnyItemSelected && !e.isSelectAll,
						isCheckboxSelected: e.isSelectAll,
						toggleCheckbox: y
					}), d.a.createElement(Pt, {
						onClick: t => {
							t.stopPropagation(), e.onOpenDropdown()
						}
					}), d.a.createElement(St, {
						isOpen: e.dropdownIsOpen,
						isOverlay: !1,
						tooltipId: vt
					}, k.map(e => d.a.createElement(It, {
						key: e.filterType,
						displayText: e.name,
						onClick: () => E(e.filterType)
					})))), r && d.a.createElement(i.Fragment, null, d.a.createElement(et.c, {
						disabled: a,
						text: Ae.fbt._("approve", null, {
							hk: "4ib5o9"
						}),
						onClick: p
					}, d.a.createElement(Ve.a, null)), d.a.createElement(et.c, {
						disabled: a,
						text: Ae.fbt._("remove", null, {
							hk: "1ImNcF"
						}),
						onClick: h
					}, d.a.createElement(Ke.a, null)), d.a.createElement(et.c, {
						disabled: a,
						text: Ae.fbt._("spam", null, {
							hk: "36ppaW"
						}),
						onClick: b
					}, d.a.createElement(ze.a, null)), d.a.createElement(et.c, {
						disabled: a,
						onClick: e.onOpenModToolsDropdown
					}, d.a.createElement(yt, {
						tooltipId: "BulkActions--ModTools"
					}), d.a.createElement(Ze, null)), d.a.createElement("div", null, j && d.a.createElement(et.c, {
						disabled: a,
						onClick: g
					}, d.a.createElement(Je.a, null)))), r && O && t === jt && d.a.createElement($e.a, {
						flairs: Rt(C, x),
						modalId: jt,
						onFlairChanged: e => {
							let {
								previewFlair: t,
								selectedTemplateId: s
							} = e;
							u(t, s)
						},
						subredditId: O
					}), m > 0 && d.a.createElement(Nt, null, Ae.fbt._("Items {startNumItems}-{endNumItems}", [Ae.fbt._param("startNumItems", "".concat(f)), Ae.fbt._param("endNumItems", "".concat(n))], {
						hk: "1FkOkC"
					}), d.a.createElement(Tt, null, "•"), Ae.fbt._("{numSelected} selected", [Ae.fbt._param("numSelected", "".concat(l))], {
						hk: "4uf9Ow"
					})))
				}, "ModToolsBulkOperations", kt.a)),
				Dt = s("./src/reddit/components/ModQueueList/index.m.less"),
				Bt = s.n(Dt);
			const At = e => Object(S.a)(e.id),
				Wt = p.a.div("ItemContainer", Bt.a),
				Ut = p.a.div("ButtonContainer", Bt.a),
				Qt = Object(v.t)({
					currentProfileName: v.h,
					isCommentPermalink: v.v,
					isCommentsPage: v.w,
					isFrontpage: v.y,
					isProfilePostListing: v.H,
					isTopicPage: v.K,
					queryParams: v.Q,
					pageLayer: e => e
				}),
				Vt = Object(l.c)({
					currentPage: e => e.platform.currentPage,
					isModQueueListingPending: ve.b,
					loadMore: ve.d,
					modQueueListingItems: ve.c,
					origin: ke.h,
					selectedItems: ve.f,
					subredditId: (e, t) => t.subredditName ? Object(je.D)(e, t.subredditName) : null
				}),
				Xt = Object(c.b)(Vt, e => ({
					addSelectedItems: t => e(Object(u.a)({
						ids: t
					})),
					bulkSelectItems: t => e(Object(u.b)({
						ids: t
					})),
					bulkUnselectItems: t => e(Object(u.c)({
						ids: t
					})),
					fireAdPixelsOfType: (t, s) => e(Object(h.y)(t, s)),
					openPost: t => e(Object(h.H)(t))
				})),
				qt = e => e.page ? parseInt(e.page, 10) : Ee.b,
				Ht = e => qt(e) + 1,
				Zt = e => Math.max(Ee.b, qt(e) - 1),
				Kt = e => {
					const t = e.modQueueListingItems ? e.modQueueListingItems.length : 0;
					return qt(e) === Ee.b ? t : 25 * Zt(e) + t
				},
				zt = e => qt(e) === Ee.b ? Ee.b : 25 * Zt(e) + 1;
			var Jt;
			! function(e) {
				e.comments = "comments", e.hasReports = "hasReports", e.posts = "posts", e.postsWithFlair = "postsWithFlair", e.selfPosts = "selfPosts", e.spamFiltered = "spamFiltered"
			}(Jt || (Jt = {}));
			class Gt extends d.a.Component {
				constructor() {
					super(...arguments), this.isCheckboxSelected = e => a()(this.props.selectedItems, e), this.isAllSelected = e => {
						const t = o()(e, this.props.selectedItems);
						return e.length > 0 && this.props.selectedItems.length > 0 && 0 === t.length
					}, this.toggleSelectedItems = (e, t) => {
						e ? this.props.bulkUnselectItems(t) : this.props.addSelectedItems(t)
					}, this.toggleSelectByFilter = e => {
						const t = [];
						if (!this.props.modQueueListingItems || !this.props.modQueueListingItems.length) return t;
						switch (e) {
							case Jt.posts:
								this.props.modQueueListingItems.forEach(e => {
									Object(S.a)(e.id) && t.push(e.id)
								});
								break;
							case Jt.comments:
								this.props.modQueueListingItems.forEach(e => {
									Object(j.a)(e.id) && t.push(e.id)
								});
								break;
							case Jt.hasReports:
								this.props.modQueueListingItems.forEach(e => {
									e.numReports && e.numReports > 0 && t.push(e.id)
								});
								break;
							case Jt.postsWithFlair:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(S.a)(e.id)) {
										const s = e;
										s.flair && s.flair.filter(e => e.type !== Oe.f.Spoiler && e.type !== Oe.f.Nsfw).length > 0 && t.push(s.id)
									}
								});
								break;
							case Jt.selfPosts:
								this.props.modQueueListingItems.forEach(e => {
									if (Object(S.a)(e.id)) {
										const s = e;
										s.media && s.media.type === ye.n.TEXT && t.push(s.id)
									}
								});
								break;
							case Jt.spamFiltered:
								this.props.modQueueListingItems.forEach(e => {
									e.isSpam && t.push(e.id)
								})
						}
						this.props.bulkSelectItems(t)
					}, this.isAnyItemSelected = () => this.props.selectedItems.length > 0, this.renderItems = e => {
						let t;
						const s = !!e.page && "1" !== e.page,
							n = !!e.loadMore && !!e.modQueueListingItems && 25 === e.modQueueListingItems.length;
						return e.modQueueListingItems && e.modQueueListingItems.length && (t = e.modQueueListingItems.map(t => {
							const s = "modqueue-item-[layout: ".concat(e.layout, "]-[id: ").concat(t.id, "]");
							if (At(t)) {
								const n = t,
									o = Object(_.b)({
										layout: e.layout,
										post: n
									});
								return d.a.createElement(Wt, {
									key: s
								}, d.a.createElement(o, {
									currentProfileName: e.currentProfileName,
									eventFactory: P,
									forceLoadMedia: !0,
									isCommentPermalink: e.isCommentPermalink,
									isCommentsPage: e.isCommentsPage,
									isFrontpage: e.isFrontpage,
									isProfilePostListing: e.isProfilePostListing,
									isCheckboxSelected: this.isCheckboxSelected(n.id),
									last: !0,
									pageLayer: e.pageLayer,
									postId: n.id,
									onClickPost: Object(k.b)(n.id, e),
									showBulkActionCheckbox: !0,
									toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(n.id), [n.id])
								}))
							}
							const n = function(e, t) {
								const s = Ce[t];
								return void 0 === s ? (Object(I.a)(void 0, "Could not find component for layout ".concat(t, ".")), fe) : s
							}(0, e.layout);
							return d.a.createElement(Wt, {
								key: s
							}, d.a.createElement(n, {
								commentId: t.id,
								hasReports: Object(b.c)(t),
								highlight: !1,
								isCheckboxSelected: this.isCheckboxSelected(t.id),
								showBulkActionCheckbox: !0,
								showModTools: !0,
								toggleCheckbox: () => this.toggleSelectedItems(this.isCheckboxSelected(t.id), [t.id]),
								trackClick: e.sendEventWithName
							}))
						})), d.a.createElement("div", null, d.a.createElement("div", null, t), d.a.createElement(Ut, null, d.a.createElement(E, {
							prevButtonEnabled: s,
							prevTo: Object(m.a)("".concat(e.origin).concat(e.currentPage.url), {
								page: Zt(e),
								after: null
							}),
							nextButtonEnabled: n,
							nextTo: Object(m.a)("".concat(e.origin).concat(e.currentPage.url), {
								page: Ht(e),
								after: e.loadMore
							})
						})))
					}
				}
				componentWillUnmount() {
					this.props.bulkUnselectItems(this.props.selectedItems)
				}
				componentWillUpdate(e) {
					e.pageName === this.props.pageName && e.page === this.props.page && e.profileName === this.props.profileName && e.subredditName === this.props.subredditName && e.postTypeFilter === this.props.postTypeFilter || this.props.bulkUnselectItems(this.props.selectedItems)
				}
				render() {
					const {
						props: e
					} = this, t = e.modQueueListingItems && e.modQueueListingItems.length ? e.modQueueListingItems.map(e => e.id) : [], s = e.selectedItems.length;
					return d.a.createElement("div", null, d.a.createElement(Ft, {
						endNumItems: Kt(e),
						numSelected: s,
						numShowing: t.length,
						isAnyItemSelected: this.isAnyItemSelected(),
						isSelectAll: this.isAllSelected(t),
						startNumItems: zt(e),
						subredditId: e.subredditId,
						toggleSelectAll: () => this.toggleSelectedItems(this.isAllSelected(t), t),
						toggleSelectByFilter: this.toggleSelectByFilter
					}), e.modQueueListingItems && e.modQueueListingItems.length ? this.renderItems(e) : e.modQueueListingItems ? d.a.createElement(Me, null) : e.isModQueueListingPending ? d.a.createElement(Be, null) : null)
				}
			}
			t.a = Qt(Xt(Gt))
		},
		"./src/reddit/components/PaginationButtons/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1kLu6euoyZ3I2dqDVrxoZD",
				routerLink: "_3k7SslJt4xhPIXKtoe8DFf",
				mDisabled: "_1VgBJV1BqaXyZVPBXEv-KC"
			}
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
				return j
			}));
			var n, o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				p = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				u = s("./src/reddit/components/FlairPreview/index.tsx"),
				h = s("./src/reddit/components/FlairSearch/index.tsx"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/i18n/utils.ts"),
				x = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				k = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				v = s.n(k);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const j = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				S = Object(i.c)({
					flairData: f.d,
					subreddit: O.P,
					isMod: (e, t) => !!Object(C.j)(e, t)
				});
			class _ extends r.a.Component {
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
						subreddit: Object(y.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(E.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: o
					} = e, a = o.displayText, {
						templates: i,
						templateIds: d
					} = n, {
						canSave: c
					} = this.canSave();
					return r.a.createElement(p.a, {
						className: s
					}, r.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: Object(g.c)("Select ".concat(Object(g.b)("subredditName", a), " flair"))
					}), r.a.createElement(u.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						placeholderText: Object(g.c)("Post Title")
					}), r.a.createElement(h.a, {
						flair: t,
						flairTemplateType: x.d.LinkFlair,
						subredditId: o.id,
						templates: i,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: v.a.buttonsRow
					}, r.a.createElement(b.f, {
						disabled: !c,
						onClick: this.onApply
					}, Object(g.c)("Apply")), r.a.createElement(b.i, {
						className: v.a.clearButton,
						onClick: this.onClear
					}, Object(g.c)("Clear Flair"))))
				}
			}
			const w = Object(a.b)(S, (e, t) => ({
				closeModal: () => e(Object(l.i)(t.modalId))
			}))(_);
			t.a = Object(c.a)(Object(d.b)(w))
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return H
			})), s.d(t, "a", (function() {
				return K
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				a = s("./node_modules/lodash/last.js"),
				i = s.n(a),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				C = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				y = s("./src/reddit/components/Translated/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				k = s("./src/reddit/constants/componentSizes.ts"),
				v = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				S = s("./src/reddit/helpers/getClickInfo.ts"),
				_ = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				w = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/helpers/brandSafety/index.ts"),
				T = s("./src/lib/LRUCache/index.ts"),
				N = s("./src/telemetry/index.ts"),
				L = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(M),
				F = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const D = 500,
				B = new T.a(D),
				A = new T.a(D),
				W = new T.a(D),
				U = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				Q = b.a.div("SeeMore", R.a),
				V = b.a.wrapped(w.a, "ArrowRight", R.a),
				X = (e, t, s, n, o, r, a, i) => {
					const d = s ? "last-".concat(n, "-").concat(o) : "",
						c = "entered-".concat(e, "-").concat(t, "-").concat(d, "-").concat(r);
					let l = B.get(c);
					return void 0 === l && (l = () => {
						s && a.onBottomViewed(n, o), a.trackOnPostEnteredViewport(e, t, i)
					}, B.set(c, l)), l
				},
				q = (e, t, s, n) => {
					const o = "left-".concat(e, "-").concat(t);
					let r = A.get(o);
					return void 0 === r && (r = o => {
						s.trackOnPostExitedViewport(e, t, o, n)
					}, A.set(o, r)), r
				},
				H = (e, t) => {
					const s = "click-".concat(e);
					let n = W.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, E.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(S.a)(e)
						})
					}, W.set(s, n)), n
				},
				Z = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class K extends c.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new T.a(D), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, o = t(), r = [];
						o.forEach(e => r.push(e.id));
						const a = r.map(e => s[e]).filter(Boolean),
							i = a.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(I.a)(a, i))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && N.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = N.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = N.c.end(this.timerId);
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && N.c.cancel(this.timerId), e.postIds.length && (this.timerId = N.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && N.c.has(this.timerId)) {
						const e = N.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(N.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && N.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && i()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return N.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = N.c.end(e);
					setTimeout(() => {
						s(t(n, L.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						n = F(t, ["postsById"]),
						{
							postsById: o
						} = e,
						r = F(e, ["postsById"]),
						a = Object.keys(n),
						i = Object.keys(r);
					if (i.length !== a.length) return !0;
					if (i.some(e => n[e] !== r[e])) return !0;
					if (s === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, r) => {
							const a = 0 === r;
							return t({
								isFirstPost: a,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: a,
								layout: e,
								post: o[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: o,
						isCommentPermalink: r,
						isCommentsPage: a,
						isFrontpage: i,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: h,
						pageReferrer: b,
						postClickEvent: g,
						redditStyle: C
					} = this.props, f = 0 === t, O = s ? "last-index" : "", y = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(O, "-").concat(p, "-").concat(m, "-").concat(b);
					let E;
					if (void 0 === (E = this.scrollChildCache.get(y))) {
						const {
							inSubredditOrProfile: O,
							postsById: k
						} = this.props, j = k[e], S = j.crosspostRootId && k[j.crosspostRootId] ? k[j.crosspostRootId] : j;
						j.crosspostRootId && !k[j.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.q.API), e.setExtra("description", "Post ".concat(j.id, " is crosspost of ").concat(j.crosspostRootId, ", but ") + "".concat(j.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const w = this.props.postComponentForLayout({
								isCrosspost: !!j.crosspostRootId,
								isFirstPost: f,
								layout: n,
								post: S
							}),
							I = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							T = X(e, n, s, m, p, b, this.props, t),
							N = q(e, n, this.props, t),
							L = H(e, this.props),
							M = S.media && S.media.type === P.n.EMBED ? S.media.provider : null;
						E = {
							estHeight: Object(_.c)(j, n),
							id: e,
							isFocusable: !(!S.media || n !== v.g.Large) && (P.d.has(S.media.type) && (!M || !P.q.has(M)) && !S.isSpoiler && !S.isNSFW),
							trackOnEnteredViewport: T,
							trackOnExitedViewport: N,
							render: t => {
								let {
									className: n,
									height: u,
									width: b,
									remeasure: x,
									setScrollerChildRef: y,
									shouldLoadInitially: E
								} = t;
								return c.a.createElement(w, {
									className: n,
									currentProfileName: o,
									key: I,
									availableWidth: b,
									eventFactory: g,
									first: f,
									forceLoadMedia: E,
									inSubredditOrProfile: O,
									isCommentPermalink: r,
									isCommentsPage: a,
									isFrontpage: i,
									isProfilePostListing: d,
									isTopicPage: l,
									listingKey: m,
									listingName: p,
									pageLayer: h,
									last: s,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: C,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: y
								})
							}
						}, this.scrollChildCache.set(y, E)
					}
					return E
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return c.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: o,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const a = r;
					return c.a.createElement("div", {
						className: R.a.placeholder
					}, c.a.createElement(a, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && c.a.createElement(f.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: o,
						onLoadMore: r
					} = this.props;
					if (!s) return c.a.createElement("div", {
						className: R.a.placeholder
					}, c.a.createElement(C.a, {
						className: o,
						isLoading: !!t,
						layout: n,
						countOverride: U[n]
					}), !!e && c.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isTruncated: r,
						layout: a,
						location: i,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let g = h.map((e, t, s) => {
						const n = t === h.length - 1;
						return this.scrollChildForPost(e, t, n, a)
					});
					o && (g = Z(g, o));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(a) : void 0,
						C = i ? Object(n.e)(i) : null,
						f = C || r;
					return c.a.createElement(d.Fragment, null, c.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: f ? R.a.truncatedPostList : Object(p.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: k.f
					}, g), C && c.a.createElement(Q, {
						className: R.a.seeMoreButton
					}, c.a.createElement(j.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(C, {
							type: u.Lb.Posts
						})
					}, c.a.createElement(y.a, {
						msgId: "search.seeMorePosts"
					}), c.a.createElement(V, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			K.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: c.a.Fragment
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: m = (() => {}),
					flairStyleTemplate: p,
					redditStyle: u
				} = e, h = "upvote-button-".concat(t.id);
				return o.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: u
				}, n && o.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: m
				}), o.a.createElement(a.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: h
				}))
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
				return l
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = s.n(i);
			const c = a.a.span("TextWrapper", d.a),
				l = a.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(c, null, e.text, " ")), "Button", d.a),
				m = a.a.wrapped(l, "ApproveButton", d.a),
				p = a.a.wrapped(l, "RemoveButton", d.a),
				u = e => o.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/Widgets/ModSupportLinks/index.m.less": function(e, t, s) {
			e.exports = {
				ExternalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				externalLink: "_3j_Pr1PTtXdH3rBrROxOjz",
				InternalLink: "_3OMHgk6-gSH2TqxSTFsOXZ",
				internalLink: "_3OMHgk6-gSH2TqxSTFsOXZ"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				C = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const E = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				k = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				v = e => {
					const t = E(e);
					return Object(O.f)(t)
				},
				j = e => {
					const t = k(e);
					return Object(O.f)(t)
				};
			var S = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				_ = s.n(S);
			const w = Object(m.t)(),
				P = Object(r.b)(() => Object(a.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(C.m)(e, {
								subredditId: s
							}),
							o = Object(f.R)(e);
						return n || o
					},
					nigtmode: f.R,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = v(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = k(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: a,
						title: d,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? _.a.widgetContentOnly : _.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(i.a)(t, _.a.widgetBackground, {
							[_.a.redditStyle]: n,
							[_.a.clickable]: !!a,
							[_.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: a,
						style: g
					}, d && o.a.createElement("div", {
						className: _.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(i.a)(_.a.widgetTitle, l)
					}, o.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), o.a.createElement("div", {
						className: Object(i.a)(u, {
							[_.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: _.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, o.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = w(P(Object(d.a)(Object(l.b)(I))))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => o.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				m = s.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: a,
						"data-redditstyle": i
					} = t, d = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? m.a.mDisabledRedditStyle : m.a.mDisabled : n ? m.a.mActiveRedditStyle : m.a.mActive
					})(n, a, i);
					return o.a.createElement(e, p({
						className: Object(r.a)(m.a.Checkbox, c, s)
					}, d))
				},
				b = h(c.a),
				g = h(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? b : a.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				y = s.n(O);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var k = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = e => Object(d.a)(y.a.iconStyles, e.className, {
					[y.a.mDisabled]: e.disabled,
					[y.a.mRedditStyle]: e.redditStyle
				}),
				j = e => {
					var {
						isActive: t
					} = e, s = k(e, ["isActive"]);
					return o.a.createElement("button", E({
						className: Object(d.a)(y.a.layoutButton, {
							[y.a.mIsActive]: t
						})
					}, s))
				},
				S = Object(i.d)("listings.layoutSwitcher.label"),
				_ = Object(i.d)("listings.layoutSwitcher.card"),
				w = Object(i.d)("listings.layoutSwitcher.classic"),
				P = Object(i.d)("listings.layoutSwitcher.compact"),
				I = [{
					layout: p.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, r = k(e, ["className", "disabled", "redditStyle"]);
						return o.a.createElement(b.a, E({
							className: v({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, r))
					},
					tooltipTranslation: _
				}, {
					layout: p.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, r = k(e, ["className", "disabled", "redditStyle"]);
						return o.a.createElement(u.a, E({
							className: v({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, r))
					},
					tooltipTranslation: w
				}, {
					layout: p.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, r = k(e, ["className", "disabled", "redditStyle"]);
						return o.a.createElement(h.a, E({
							className: v({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, r))
					},
					tooltipTranslation: P
				}],
				T = Object(x.t)(),
				N = Object(a.c)({
					language: f.P,
					postLayout: x.L,
					redditStyle: x.A
				}),
				L = Object(r.b)(N, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.h)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = T(L(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || p.e[e.postLayout];
				return o.a.createElement("div", {
					className: Object(d.a)(y.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, o.a.createElement("div", {
					className: y.a.title
				}, S(e.language)), o.a.createElement("div", {
					className: y.a.iconContainer
				}, I.map(r => {
					const a = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(C.screen)(e),
								subreddit: Object(C.subreddit)(e)
							})))
						})(r.layout),
						i = () => e.toggleTooltip(d),
						d = "layoutSwitch--" + r.layout,
						l = r.layout === n;
					return o.a.createElement(j, {
						"aria-label": r.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: d,
						isActive: l,
						key: r.layout,
						onClick: a,
						onMouseEnter: i,
						onMouseLeave: i,
						onTouchStart: a
					}, o.a.createElement(r.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), o.a.createElement(c.c, {
						className: y.a.tooltip,
						tooltipId: d,
						text: r.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, s) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Search/index.tsx"),
				i = s("./src/reddit/controls/SearchBar/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("div", {
				className: Object(r.a)(d.a.searchContainer, e.className)
			}, o.a.createElement("input", {
				className: Object(r.a)(d.a.search, {
					[d.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), o.a.createElement("div", {
				className: Object(r.a)(d.a.searchIconContainer, {
					[d.a.mClickable]: !!e.onSearch,
					[d.a.mRightAligned]: e.rightAlignedIcon
				}),
				onClick: e.onSearch
			}, o.a.createElement(a.a, null)))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/List/index.m.less": function(e, t, s) {
			e.exports = {
				ListIcon: "t3UrRpUFSigA4IRW8iMLv",
				listIcon: "t3UrRpUFSigA4IRW8iMLv"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.m.less": function(e, t, s) {
			e.exports = {
				TagIcon: "_2e-QjEsH3vADXyIpSzLW6_",
				tagIcon: "_2e-QjEsH3vADXyIpSzLW6_"
			}
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/pages/ModQueuePages/index.m.less": function(e, t, s) {
			e.exports = {
				navContainer: "_2fXn_K-CtsU5UyENumO_L5",
				innerContainer: "D4pTlu3VV6Kg_fC6HNcGD",
				mDisableFullScreen: "_3ZorTtV7KSImN0_z0ufG7H",
				title: "_1m63Tp27qAqd29Jg_JFZLD",
				navChild: "mhX_cNPq9TYWEg2o5OfDb",
				mIsActive: "_3qryNXFOCTdHneRR0QlSzp",
				sidebar: "_2mohSnAqr6vkIYT6O-pVcP"
			}
		},
		"./src/reddit/pages/ModQueuePages/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/reddit/components/ModQueueList/index.tsx"),
				m = s("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/layout/page/Listing/index.tsx"),
				g = s("./src/reddit/models/ModQueue/index.ts"),
				x = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/lib/classNames/index.ts"),
				y = s("./src/reddit/i18n/components.tsx"),
				E = s("./src/reddit/i18n/utils.ts"),
				k = s("./node_modules/lodash/omit.js"),
				v = s.n(k),
				j = s("./src/lib/addQueryParams/index.ts"),
				S = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/pages/ModQueuePages/index.m.less"),
				w = s.n(_);
			const P = Object(d.c)({
				currentPage: e => e.platform.currentPage
			});
			var I = Object(i.b)(P)(e => a.a.createElement(S.a, {
					className: Object(O.a)(w.a.navChild, {
						[w.a.mIsActive]: e.isActive
					}),
					to: Object(j.a)("/r/mod/about/".concat(e.pathName), v()(e.currentPage.queryParams, ["after", "before", "page"]))
				}, e.title)),
				T = e => a.a.createElement("div", {
					className: w.a.navContainer
				}, a.a.createElement("div", {
					className: Object(O.a)(w.a.innerContainer, {
						[w.a.mDisableFullScreen]: e.disableFullscreen
					})
				}, a.a.createElement("h1", {
					className: w.a.title
				}, a.a.createElement(y.c, null, "Moderation")), a.a.createElement(I, {
					title: Object(E.c)("Queue"),
					isActive: "modqueue" === e.pageName,
					pathName: "modqueue"
				}), a.a.createElement(I, {
					title: Object(E.c)("Reports"),
					isActive: "reports" === e.pageName,
					pathName: "reports"
				}), a.a.createElement(I, {
					title: Object(E.c)("Spam"),
					isActive: "spam" === e.pageName,
					pathName: "spam"
				}), a.a.createElement(I, {
					title: Object(E.c)("Edited"),
					isActive: "edited" === e.pageName,
					pathName: "edited"
				}), a.a.createElement(I, {
					title: Object(E.c)("Unmoderated"),
					isActive: "unmoderated" === e.pageName,
					pathName: "unmoderated"
				}))),
				N = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				L = s("./src/config.ts"),
				M = s("./src/lib/lessComponent.tsx"),
				R = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				F = s("./src/reddit/components/Widgets/ModSupportLinks/index.m.less"),
				D = s.n(F);
			const B = M.a.a("ExternalLink", D.a),
				A = M.a.wrapped(S.a, "InternalLink", D.a);
			var W = () => a.a.createElement(R.a, {
				title: Object(E.c)("Moderator resources"),
				redditStyle: !0
			}, a.a.createElement(B, {
				href: L.a.redditHelpUrl.modHelpCenter,
				target: "_blank"
			}, Object(E.c)("Mod help center")), a.a.createElement(B, {
				href: "https://www.reddit.com/help/healthycommunities/",
				target: "_blank"
			}, Object(E.c)("Moderator guidelines")), a.a.createElement(A, {
				to: "/r/modsupport",
				target: "_blank"
			}, "r/modsupport"), a.a.createElement(B, {
				href: "https://www.reddithelp.com/en/submit-request/rusername",
				target: "_blank"
			}, Object(E.c)("Contact Reddit")));
			var U = e => a.a.createElement("div", {
				className: w.a.sidebar
			}, e.subredditOrProfileUrl && a.a.createElement(N.a, null, a.a.createElement(R.a, {
				title: Object(E.c)("Moderation")
			}, a.a.createElement(B, {
				href: "https://www.reddit.com/".concat(e.subredditOrProfileUrl, "/about/log/"),
				target: "_blank"
			}, a.a.createElement(y.c, null, "Moderation Log")), a.a.createElement(B, {
				href: "https://www.reddit.com/".concat(e.subredditOrProfileUrl, "/wiki/config/automoderator"),
				target: "_blank"
			}, a.a.createElement(y.c, null, "Automoderator Config")))), a.a.createElement(N.a, null, a.a.createElement(W, null)));
			const Q = Object(h.t)(),
				V = Object(d.c)({
					queryParams: (e, t) => {
						let {
							location: s
						} = t;
						return o()([...Object(c.a)(s.search)])
					}
				}),
				X = Object(d.a)(V, f.P, h.L, x.k, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.pageName
				}, (e, t, s, n, o) => {
					let {
						queryParams: r
					} = e;
					const a = r.subreddit,
						i = r.profile,
						d = r.only,
						c = "".concat(r.page || g.b);
					return {
						after: r.after || "",
						layout: s,
						language: t,
						isModerator: n.length > 0,
						page: c,
						pageName: o,
						postTypeFilter: d,
						profileName: i,
						subredditName: a
					}
				}),
				q = Object(i.b)(X);
			class H extends a.a.Component {
				constructor() {
					super(...arguments), this.sendEventWithName = e => () => this.props.sendEvent(t => ({
						source: "bulk_mod_action",
						action: "click",
						noun: e,
						screen: Object(C.screen)(t)
					}))
				}
				render() {
					const {
						after: e,
						className: t,
						isModerator: s,
						language: n,
						layout: o,
						page: r,
						pageName: i,
						profileName: d,
						postTypeFilter: c,
						subredditName: p
					} = this.props, h = p && "r/".concat(p) || d && "user/".concat(d), g = "unmoderated" !== i, x = g ? c : void 0;
					return a.a.createElement("div", null, s && a.a.createElement(b.a, {
						className: t,
						fitPageToContent: !0,
						disableFullscreen: o === u.g.Large,
						navBar: a.a.createElement(T, {
							disableFullscreen: o === u.g.Large,
							pageName: i
						}),
						content: a.a.Children.toArray([a.a.createElement(m.a, {
							language: n,
							postTypeFilter: x,
							profileName: d,
							sendEventWithName: this.sendEventWithName,
							showTypeFilter: g,
							subredditName: p
						}), a.a.createElement(l.a, {
							after: e,
							layout: o,
							page: r,
							pageName: i,
							postTypeFilter: x,
							profileName: d,
							sendEventWithName: this.sendEventWithName,
							subredditName: p
						})]),
						sidebar: a.a.createElement(U, {
							subredditOrProfileUrl: h
						})
					}))
				}
			}
			t.default = Q(q(Object(p.b)(H)))
		}
	}
]);
//# sourceMappingURL=ModQueuePages.0e57f9087841f13b45cf.js.map