// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~Comment~CommentsPage.d5c6ed8a71f21233c4c8.js
// Retrieved at 2/24/2022, 12:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~Comment~CommentsPage"], {
		"./node_modules/lodash/_baseDelay.js": function(e, t) {
			var n = "Expected a function";
			e.exports = function(e, t, o) {
				if ("function" != typeof e) throw new TypeError(n);
				return setTimeout((function() {
					e.apply(void 0, o)
				}), t)
			}
		},
		"./node_modules/lodash/defer.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseDelay.js"),
				s = n("./node_modules/lodash/_baseRest.js")((function(e, t) {
					return o(e, 1, t)
				}));
			e.exports = s
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var o = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "b", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeCommentsPageKey/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/endpoints/comment/index.tsx"),
				p = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				u = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				C = n("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/actions/comment/index.ts"),
				g = n("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(g.n),
				E = e => async (t, n, {
					apiContext: o
				}) => {
					n().features.comments.models[e] && (await Object(l.j)(o(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(x.O)(n())) return void t(Object(i.i)(m.a.LOGIN_MODAL_ID));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isLocked ? l.l : l.e;
					t(Object(f.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await a(s(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(f.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, k = Object(r.a)(g.F), I = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n(),
						a = r.features.comments.models[e],
						i = r.user.account ? r.user.account.displayText : null;
					a && i && (t(Object(f.i)({
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
					})), (await Object(l.a)(s(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(f.i)({
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
				}, _ = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						i = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
					i && m && (n(Object(f.i)({
						[e]: {
							approvedBy: null,
							bannedBy: m,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(l.h)(r(), e, t)).ok ? n(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(f.i)({
						[e]: {
							approvedBy: i.approvedBy,
							bannedBy: i.bannedBy,
							isApproved: i.isApproved,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam
						}
					})), Object(d.d)())
				}, j = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.ignoreReports ? l.k : l.d;
					t(Object(f.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await a(s(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: r.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(f.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, y = (e, t, n) => async (r, a, {
					gqlContext: i
				}) => {
					const d = Object(h.b)(a(), {
						commentId: e
					});
					if (!d) return;
					const m = n === s.dc.Snoozed,
						l = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(p.a)(i(), {
							input: l
						})).ok) r(Object(f.i)({
						[e]: {
							userReports: Object(u.a)(d.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, w = (e, t, n) => async (o, r, {
					apiContext: i,
					gqlContext: d
				}) => {
					const c = r(),
						m = c.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						u = c.postStickiedComments.data[p],
						b = s.g[t];
					let h;
					if (o(Object(f.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === s.G.ADMIN,
								isMod: t === s.G.MODERATOR,
								isStickied: !!n
							}
						})), n && u && u !== e && o(Object(f.i)({
							[u]: {
								isStickied: !1
							}
						})), Object(C.a)(r())) {
						const o = Object(l.b)(d(), e, t),
							s = Object(l.c)(d(), e, !!n),
							r = [o];
						(n || !n && e === u) && r.push(s), h = {
							ok: (await Promise.all(r)).every(e => e.ok)
						}
					} else h = await Object(l.g)(i(), e, b, n || null);
					h.ok ? n && o(k({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: s.u.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(f.i)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), o(Object(f.i)({
						[u]: {
							isStickied: c.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/components/CommentCreation/Loader.m.less": function(e, t, n) {
			e.exports = {
				spacer: "_25blA2uobENRg70NGewwpP",
				isTopLevelComment: "_1chAIcRfDnelKBQkWMIXfl",
				isCommentBoxDesign: "_2mGbbSC1nHodWNoj5NJEYY",
				editor: "_3NuRqPrgRBPdjWunXX3Q8E",
				byline: "_1KZHWcRRAqnSYcyX8FzWOK",
				avatar: "_2gYdPXSssI0f1R9BPp9qsd"
			}
		},
		"./src/reddit/components/CommentCreation/Loader.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/RichTextEditor/Placeholder.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				m = n("./src/reddit/selectors/experiments/commentBox.ts"),
				l = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/CommentCreation/Loader.m.less"),
				u = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = "bottom",
				C = Object(i.c)({
					isCommentBoxDesignEnabled: m.a
				}),
				x = Object(a.b)(C),
				f = ({
					isCommentBoxDesignEnabled: e,
					isTopLevelComment: t,
					children: n
				}) => r.a.createElement("div", {
					className: Object(l.a)(u.a.spacer, {
						[u.a.isCommentBoxDesign]: e,
						[u.a.isTopLevelComment]: t
					})
				}, n),
				g = () => r.a.createElement("div", {
					className: Object(l.a)(u.a.byline, Object(c.a)({
						isLoading: !0
					}))
				}),
				v = () => r.a.createElement("div", {
					className: Object(l.a)(u.a.avatar, Object(c.a)({
						isLoading: !0
					}))
				}),
				E = e => r.a.createElement(f, e, e.isCommentBoxDesignEnabled ? r.a.createElement(v, null) : r.a.createElement(g, null), r.a.createElement(d.a, {
					className: u.a.editor,
					isCommentBoxDesignEnabled: e.isCommentBoxDesignEnabled,
					isLoading: !0,
					toolbarPosition: h
				})),
				O = x(E),
				k = Object(o.a)({
					resolved: {},
					chunkName: () => "RichTextEditor",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("RichTextEditor")]).then(n.bind(null, "./src/reddit/components/CommentCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CommentCreation/index.tsx"
					}
				}, {
					ssr: !1
				}),
				I = e => r.a.createElement(k, b({}, e, {
					fallback: r.a.createElement(O, {
						isTopLevelComment: e.isTopLevelComment
					})
				}));
			t.a = I
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/comment/moderation.ts"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.tsx"),
				l = n("./src/reddit/helpers/trackers/modTools.ts"),
				p = n("./src/reddit/selectors/tooltip.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				C = n("./src/reddit/icons/svgs/Show/index.tsx"),
				x = n("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				f = n.n(x);
			const g = b.a.wrapped(C.a, "Show", f.a);
			var v = e => s.a.createElement(h.g, null, !e.comment.isApproved && s.a.createElement(h.e, {
				displayText: e.comment.approvedBy ? u.fbt._("Approved", null, {
					hk: "3BGaEK"
				}) : u.fbt._("Approve", null, {
					hk: "7CwFx"
				}),
				onClick: e.onApproveComment
			}, s.a.createElement(h.a, null)), !e.comment.bannedBy && s.a.createElement(s.a.Fragment, null, s.a.createElement(h.e, {
				displayText: e.comment.isRemoved ? u.fbt._("Removed", null, {
					hk: "17pv2n"
				}) : u.fbt._("Remove", null, {
					hk: "3tYl0U"
				}),
				onClick: e.onRemoveComment
			}, s.a.createElement(h.i, null)), s.a.createElement(h.e, {
				displayText: e.comment.isSpam ? u.fbt._("Removed as spam", null, {
					hk: "2Kv9DF"
				}) : u.fbt._("Remove as spam", null, {
					hk: "OOps6"
				}),
				onClick: e.onSpamComment
			}, s.a.createElement(h.j, null)), s.a.createElement(h.e, {
				displayText: e.comment.isLocked ? u.fbt._("Unlock comment", null, {
					hk: "1canPl"
				}) : u.fbt._("Lock comment", null, {
					hk: "Qp5a0"
				}),
				onClick: e.onLockComment
			}, s.a.createElement(h.h, null))), e.comment.collapsedBecauseCrowdControl && s.a.createElement(h.e, {
				displayText: u.fbt._("Show comment", null, {
					hk: "9SB86"
				}),
				onClick: e.onShowComment
			}, s.a.createElement(g, null)));
			const E = b.a.wrapped(m.a, "StyledDropdown", f.a),
				O = Object(a.c)({
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(p.b)(t)(e)
				}),
				k = Object(r.b)(O, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(i.a)(t.id)),
					onLockComment: () => e(Object(i.c)(t.id)),
					onRemoveComment: () => e(Object(i.e)(t.id, !1)),
					onSpamComment: () => e(Object(i.e)(t.id, !0)),
					onShowComment: () => e(Object(i.d)(t.id))
				})),
				I = Object(d.a)(E),
				_ = k(Object(c.c)(e => {
					const {
						comment: t,
						isDropdownOpen: n,
						onApproveComment: o,
						onLockComment: r,
						onRemoveComment: a,
						onSpamComment: i,
						onShowComment: d,
						sendEvent: c,
						tooltipId: m
					} = e;
					return s.a.createElement(I, {
						isOpen: n,
						tooltipId: m
					}, s.a.createElement(v, {
						onApproveComment: () => {
							o(), c(Object(l.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), c(Object(l.c)("remove", t.id))
						},
						onSpamComment: () => {
							i(), c(Object(l.c)("spam", t.id))
						},
						onLockComment: () => {
							r(), c(Object(l.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), c(Object(l.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = _
		},
		"./src/reddit/components/Comments/Comment/ExpandButton/index.m.less": function(e, t, n) {
			e.exports = {
				expandButton: "_2Gzh48SaLz7dQBCULfOC6V",
				expandIcon: "_1tnrhhM9S7dYjApTfvd14l"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less": function(e, t, n) {
			e.exports = {
				depth6: "SwOx7KbRrXYrqQCWMYPf0",
				isModModeEnabled: "_2hXOR2fIcfnUg0p-Env7KQ",
				LoggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				loggedInUserGroup: "_14hLFU5cIJCyxH9DSgsCov",
				HideIfVWSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				hideIfVwSmaller: "_2hr3tRWszeMRQ0u_Whs7t8",
				HideIfVWLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				hideIfVwLarger: "_1YnPvd-E5MbmcM3PvRRcX",
				isFollowCommentEnabled: "_3rHRwVOKmBBlBOQ4kIW_vq",
				ModeratorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				moderatorGroup: "_1CUkbmFVuU6wklfYeYwPFk",
				depth9: "_2EcU45Nj3OvIEdu169RlLK",
				depth10: "_2sxg06qfN6lCskrSU7pyoj",
				depth0: "_2t8wLytikHzPCUnvXdS_wu",
				depth3: "_2Ik7QEXtA-lbZKj0ssL89G",
				isInOverlay: "FOPddbU-vkQ5LYmQP6Fgc"
			}
		},
		"./src/reddit/components/Comments/Comment/Flatlist/index.m.less": function(e, t, n) {
			e.exports = {
				ModActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				modActionsMenu: "_3IuprPPEDVWAHB_tWQFgad",
				ViewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				viewReportsDropdown: "_1JwG70oEVxaFNeRI-8q_bd",
				IgnoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				ignoreReport: "_1QhRdH9FgEwuJIYiBlnog8",
				Report: "tfULaYlP83dV84XOxX3YE",
				report: "tfULaYlP83dV84XOxX3YE",
				OverflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				overflowMenuSpacer: "hrV8gUgmt0V7wM2wgZ81l",
				DropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				dropdownRow: "uoWjzSc1sqcAD_cLV6MWa",
				Flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				flatlist: "_1LXnp2ufrzN6ioaTLTjGQ1",
				CommentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				commentIcon: "_1g4YvNNIFoV_5_EhsVfyRy",
				Button: "_374Hkkigy4E4srsI2WktEd",
				button: "_374Hkkigy4E4srsI2WktEd",
				ModToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				modToolsFlatlist: "_2sGRD7t2kAbCLKrZ6UjoMW",
				dropdownRowText: "_3my60CXALAaQkY4P4xVmad",
				overflowMenu: "_1VR6DV38j4rMT5OMeU4gJZ"
			}
		},
		"./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less": function(e, t, n) {
			e.exports = {
				glowHighlightContainer: "_3VH2iGVh92XtlKq0-eVoEN"
			}
		},
		"./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less": function(e, t, n) {
			e.exports = {
				gradientHighlightContainer: "TmlaIdEplCzZ0F1aRGYQh"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less": function(e, t, n) {
			e.exports = {
				effectContainer: "_15G4fCS1bzGgGK9kBOtN2t",
				bubbleEffectContainer: "_3rhkMikNPUTfnVDvk-6EFo",
				lottieEffectContainer: "_28x1bnTjOY6zWZfooCxkKQ"
			}
		},
		"./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var o, s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = n("./src/reddit/components/LottieAnimation/index.tsx"),
				c = n("./src/reddit/components/Comments/Comment/HighlightEffect/index.m.less"),
				m = n.n(c);
			! function(e) {
				e.Lottie = "lottie"
			}(o || (o = {}));
			const l = {
				threshold: [.75, .001]
			};
			t.b = a.a.memo(e => {
				const t = Object(r.useRef)(null),
					[n, c] = Object(r.useState)(!1),
					p = Object(r.useCallback)(e => {
						e.forEach(e => {
							const {
								intersectionRatio: t
							} = e;
							t >= .75 && c(!1), t <= .001 && c(!0)
						})
					}, []);
				Object(i.a)(t, p, l);
				const u = e.type;
				return a.a.createElement("div", {
					className: Object(s.a)(m.a.effectContainer, m.a[u + "EffectContainer"]),
					ref: t,
					role: "presentation"
				}, u === o.Lottie && a.a.createElement(d.a, {
					assetUrl: e.assetUrl,
					prefersReducedAnimation: e.prefersReducedAnimation,
					hidden: n
				}))
			})
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/comment/moderation.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/ModModeReports/helpers.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				C = n("./src/reddit/helpers/trackers/modTools.ts"),
				x = n("./src/reddit/selectors/moderatingComments.ts"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				I = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = n("./src/reddit/icons/svgs/Show/index.tsx"),
				j = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				y = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				w = n.n(y);
			const M = Object(h.u)(),
				N = e => `Distinguish--Dropdown--${e}`,
				T = Object(i.c)({
					currentUser: v.k,
					collapsedBecauseCrowdControl: (e, {
						comment: t
					}) => Object(x.a)(e, {
						commentId: t.id
					}),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(g.b)(N(t.id))(e),
					moderatorPermissions: (e, t) => {
						const {
							comment: n
						} = t;
						return Object(h.h)(e, t) || Object(f.m)(e, {
							subredditId: n.subredditId
						})
					},
					modModeEnabled: h.T
				}),
				D = Object(a.b)(T, (e, {
					comment: t
				}) => ({
					onApproveComment: () => e(Object(l.a)(t.id)),
					onDistinguishComment: (n, o) => e(Object(l.b)(t.id, n, o)),
					onLockComment: () => e(Object(l.c)(t.id)),
					onRemoveComment: () => e(Object(l.e)(t.id, !1)),
					onSpamComment: () => e(Object(l.e)(t.id, !0)),
					onShowComment: () => e(Object(l.d)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(p.h)({
						tooltipId: N(t.id)
					}))
				}));
			t.a = M(D(m.a.wrapped(Object(b.c)(({
				className: e,
				comment: t,
				currentUser: n,
				isCommentAuthor: s,
				collapsedBecauseCrowdControl: a,
				moderatorPermissions: i,
				modModeEnabled: m,
				onApproveComment: l,
				onDistinguishComment: p,
				onLockComment: b,
				onRemoveComment: h,
				onShowComment: x,
				onSpamComment: f,
				onToggleDistinguishDropdown: g,
				sendEvent: v,
				...y
			}) => {
				const M = Object(u.b)(t),
					N = t.isApproved && M,
					T = !t.isRemoved || t.bannedBy === c.l,
					D = a,
					R = e => v(Object(C.a)(e, t.id));
				return r.a.createElement("div", {
					className: e
				}, (t.bannedBy || M) && r.a.createElement(j.a, {
					text: N ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						l(), R("approve")
					}
				}, r.a.createElement(E.a, {
					className: w.a.icon
				})), T && r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
					text: t.bannedBy === c.l ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "3tYl0U"
					}),
					onClick: () => {
						h(), t.bannedBy === c.l ? R("confirm_remove") : R("remove")
					}
				}, r.a.createElement(k.a, {
					className: w.a.icon
				})), r.a.createElement(j.a, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						f(), R("spam")
					}
				}, r.a.createElement(I.a, {
					className: w.a.icon
				}))), r.a.createElement(j.a, {
					text: t.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						b(), R(t.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(O.a, {
					className: w.a.icon
				})), D && r.a.createElement(j.a, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						x()
					}
				}, r.a.createElement(_.a, {
					className: Object(d.a)(w.a.icon, w.a.Show)
				})))
			}), "CommentModToolsFlatlist", w.a)))
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
				userFlairLine: "_3w527zTLhXkd08MyacMV9H",
				LastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy",
				lastAuthorModNoteIcon: "_3TVHJ99XXRlGtv0wqGCBFy"
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/AwardBadges/index.tsx"),
				l = n("./src/reddit/components/AuthorLink/index.tsx"),
				p = n("./src/reddit/components/Comments/Comment/TopMeta/commentAuthorLink.m.less"),
				u = n.n(p);
			const b = e => {
				const {
					className: t,
					collapsed: n,
					comment: s,
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: m,
					onClick: p,
					style: b
				} = e;
				return n && i ? r.a.createElement("p", {
					className: Object(d.a)(u.a.commentAuthorLink, t)
				}, o.fbt._("Blocked account", null, {
					hk: "2KVMxM"
				})) : r.a.createElement(l.a, {
					author: s.author,
					className: Object(d.a)(u.a.commentAuthorLink, t),
					isAuthorDeleted: a,
					isCommentAuthorBlocked: i,
					isLivestreaming: c,
					isStrong: m,
					linkProps: {
						"data-testid": "comment_author_link"
					},
					onClick: p,
					style: b
				}, s.author)
			};
			var h = n("./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts"),
				C = n("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = n("./src/reddit/components/Flair/index.tsx"),
				f = n("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				g = n("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				v = n("./src/reddit/components/PostTopMeta/index.tsx"),
				E = n("./src/reddit/controls/MetaData/index.tsx"),
				O = n("./src/reddit/helpers/flair.ts"),
				k = n("./src/reddit/helpers/trackers/features/powerupsFlair.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/models/Comment/index.ts"),
				j = n("./src/reddit/selectors/gold/powerups/index.ts"),
				y = n("./src/lib/constants/index.ts"),
				w = n("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				M = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				N = n("./src/reddit/components/Comments/Comment/TopMeta/author.m.less"),
				T = n.n(N);
			const D = ({
				authorClassName: e,
				className: t,
				comment: n,
				collapsed: o,
				isLivestreaming: s,
				isStrong: a,
				onClick: i,
				renderedInOverlay: c
			}) => r.a.createElement(M.b, {
				className: Object(d.a)(T.a.authorHoverCard, t),
				collapsed: o,
				isCommentAuthorBlocked: Object(_.g)(n),
				postOrComment: n,
				tooltipType: c ? v.c.Lightbox : void 0
			}, r.a.createElement(w.b, {
				ignore: Object(_.f)(n) || !!n.distinguishType && n.distinguishType !== y.G.NONE,
				subredditId: n.subredditId,
				userId: n.authorId
			}, r.a.createElement(b, {
				className: e,
				collapsed: o,
				comment: n,
				isAuthorDeleted: Object(_.f)(n),
				isCommentAuthorBlocked: Object(_.g)(n),
				isLivestreaming: s,
				isStrong: a,
				onClick: i
			})));
			var R = n("./src/config.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx");
			const P = (e, t, n = !1) => `${e}${t}${n?"inOverlay":""}`;
			var F = n("./src/reddit/components/Comments/Comment/TopMeta/cakeDay.m.less"),
				B = n.n(F);
			const S = ({
				className: e,
				commentId: t,
				renderedInOverlay: n
			}) => {
				const s = Object(a.d)(),
					i = () => s(Object(A.h)({
						tooltipId: c
					})),
					c = P("CommentTopMeta--cakeday--", t, n),
					m = o.fbt._("Cake day", null, {
						hk: "1xptSi"
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("img", {
					className: Object(d.a)(B.a.cakedayIcon, e),
					src: `${R.a.assetPath}/img/powerups/flair_cakeday.png`,
					alt: m,
					id: c,
					onMouseEnter: i,
					onMouseLeave: i,
					"data-testid": "cakeday-icon"
				}), r.a.createElement(L.c, {
					tooltipId: c,
					text: m
				}))
			};
			var U = n("./src/lib/addQueryParams/index.ts"),
				V = n("./src/reddit/actions/comment/index.ts"),
				H = n("./src/reddit/actions/post.ts"),
				G = n("./src/reddit/components/HumanDate/index.tsx"),
				W = n("./src/reddit/helpers/path/index.ts");
			const K = e => {
					const {
						className: t,
						comment: n,
						compact: o,
						onClick: s,
						permalink: i,
						renderedInOverlay: d,
						isBlockingInterstitialEnabled: c
					} = e, m = Object(a.d)(), l = P("CommentTopMeta--Created--", n.id, d), p = () => m(Object(A.h)({
						tooltipId: l
					}));
					return r.a.createElement("a", {
						className: t,
						"data-testid": "comment_timestamp",
						href: Object(U.a)(i, {
							utm_source: "reddit",
							utm_medium: "web2x",
							context: 3
						}),
						id: l,
						onClick: e => {
							null == s || s(e), X(m, n.id), c && (e.preventDefault(), m(Object(H.Y)(Object(W.b)(i), n.postId)))
						},
						onMouseEnter: p,
						onMouseLeave: p,
						target: "_blank",
						rel: "nofollow noopener noreferrer"
					}, r.a.createElement(G.d, {
						seconds: n.created,
						shortenedUnit: o
					}), r.a.createElement(L.c, {
						tooltipId: l
					}, r.a.createElement(G.b, {
						seconds: n.created
					})))
				},
				X = (e, t) => {
					window.addEventListener("focus", (function n() {
						z(e, t, n)
					}))
				},
				z = (e, t, n) => {
					window.removeEventListener("focus", n), e(Object(V.g)({
						commentListNodeId: t
					})), window.setTimeout(() => e(Object(V.g)({
						commentListNodeId: t
					})), 5e3)
				};
			var Q = n("./src/reddit/components/Comments/Comment/TopMeta/crowdControl.m.less"),
				J = n.n(Q);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Y = () => r.a.createElement(E.a, {
				className: J.a.crowdControlText
			}, q._("Crowd Control", null, {
				hk: "4WgEW"
			}));
			var Z = n("./src/reddit/components/Comments/Comment/TopMeta/edited.m.less"),
				$ = n.n(Z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				compact: e,
				editedAt: t
			}) => r.a.createElement(E.a, {
				className: $.a.editedText
			}, ee._("edited {time}", [ee._param("time", r.a.createElement(G.d, {
				seconds: t,
				shortenedUnit: e
			}))], {
				hk: "1tiB0u"
			}));
			var ne = n("./src/reddit/helpers/isRemoved.ts"),
				oe = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				se = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				re = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				ae = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				ie = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				de = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ce = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				me = n("./src/reddit/components/Comments/Comment/TopMeta/modBadgeTooltip.m.less"),
				le = n.n(me);
			const pe = ({
				comment: e,
				ignoreLock: t,
				renderedInOverlay: s
			}) => {
				const i = Object(a.d)(),
					d = e => () => i(Object(A.f)({
						tooltipId: e
					})),
					c = () => i(Object(A.i)()),
					m = t => P(t, e.id, s),
					l = m("CommentTopMeta--Approve--"),
					p = m("CommentTopMeta--Remove--"),
					u = m("CommentTopMeta--Report--"),
					b = m("CommentTopMeta--Spam--"),
					h = d(p);
				return r.a.createElement(r.a.Fragment, null, (e.approvedBy || e.isApproved) && r.a.createElement(r.a.Fragment, null, r.a.createElement(re.a, {
					className: le.a.approveIcon,
					desc: Object(oe.a)(e),
					id: l,
					onMouseEnter: d(l),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: l,
					text: Object(oe.a)(e)
				})), Object(ne.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(ie.a, {
					className: le.a.removeIcon,
					desc: Object(oe.b)(e),
					id: p,
					onMouseEnter: h,
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: p,
					text: Object(oe.b)(e)
				})), Object(ne.a)(e) && e.isRemoved && !e.modNote && !e.modRemovalReason && r.a.createElement("a", {
					className: le.a.removalReason,
					onClick: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(t => i(t.fetchReasonsAndOpenModal(e.subredditId, [e.id])))
					}
				}, o.fbt._("Add a removal reason", null, {
					hk: "L6yrL"
				})), Object(ne.a)(e) && !(e.isRemoved && !e.modNote && !e.modRemovalReason) && r.a.createElement("a", {
					className: le.a.removalReason,
					onMouseEnter: h,
					onMouseLeave: c
				}, o.fbt._("Removal reason", null, {
					hk: "20NRw8"
				})), e.isLocked && !t && r.a.createElement(ae.a, {
					className: le.a.lockIcon,
					desc: o.fbt._("Locked", null, {
						hk: "40Ju3g"
					}),
					isFilled: !0
				}), e.bannedBy && e.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(ce.a, {
					className: le.a.spamIcon,
					desc: Object(oe.d)(e),
					id: b,
					onMouseEnter: d(b),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: b,
					text: Object(oe.d)(e)
				})), Object(se.a)(e) && r.a.createElement(r.a.Fragment, null, r.a.createElement(de.a, {
					className: le.a.reportIcon,
					desc: Object(oe.c)(e.numReports),
					id: u,
					onMouseEnter: d(u),
					onMouseLeave: c,
					isFilled: !0
				}), r.a.createElement(L.c, {
					tooltipId: u,
					text: Object(oe.c)(e.numReports)
				})))
			};
			var ue, be = n("./src/lib/colors/constants.ts");
			! function(e) {
				e.Op = "op", e.Mod = "mod", e.Admin = "admin", e.AlumniAdmin = "alumniAdmin", e.Contractor = "contractor"
			}(ue || (ue = {}));
			var he = n("./src/reddit/components/Comments/Comment/TopMeta/Role.m.less"),
				Ce = n.n(he);
			const xe = {
					[ue.Admin]: {
						color: be.c,
						label: o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--Admin--",
						tooltipTemplate: () => o.fbt._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						})
					},
					[ue.Mod]: {
						color: be.d,
						label: o.fbt._("Mod", null, {
							hk: "1b6Q1p"
						}),
						tooltipPrefix: "CommentTopMeta--Mod--",
						tooltipTemplate: e => (e => o.fbt._("Moderator of {subredditDisplayText}, speaking officially", [o.fbt._param("subredditDisplayText", e)], {
							hk: "3pHm3n"
						}))(e.subredditDisplayText)
					},
					[ue.Op]: {
						color: be.a,
						label: o.fbt._("Op", null, {
							hk: "ERTp9"
						}),
						tooltipPrefix: "CommentTopMeta--OP--",
						tooltipTemplate: () => o.fbt._("Original Poster", null, {
							hk: "3DqK8z"
						})
					},
					[ue.AlumniAdmin]: {
						color: be.c,
						label: o.fbt._("Admin", null, {
							hk: "Iku1o"
						}),
						tooltipPrefix: "CommentTopMeta--AdEm--",
						tooltipTemplate: () => o.fbt._("Reddit admin emeritus", null, {
							hk: "1Md5AV"
						})
					},
					[ue.Contractor]: {
						color: be.a,
						label: o.fbt._("Contractor", null, {
							hk: "2nhaY6"
						}),
						tooltipPrefix: "CommentTopMeta--Contractor--",
						tooltipTemplate: () => o.fbt._("Reddit contractor", null, {
							hk: "3APwEh"
						})
					}
				},
				fe = e => {
					const t = Object(a.d)(),
						n = function(e) {
							return e.isAdmin ? ue.Admin : e.isMod ? ue.Mod : e.isOp ? ue.Op : e.distinguishType === y.G.ALUMNI_ADMIN ? ue.AlumniAdmin : e.authorIsContractor ? ue.Contractor : null
						}(e.comment);
					if (!n) return null;
					if (n === ue.Contractor && !e.renderContractorBadge) return null;
					const {
						tooltipPrefix: o,
						color: s,
						label: i,
						tooltipTemplate: c
					} = xe[n], m = P(o, e.comment.id, e.renderedInOverlay), l = c(e), p = () => t(Object(A.h)({
						tooltipId: m
					}));
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Object(d.a)(Ce.a.role, e.className),
						style: {
							color: s
						},
						id: m,
						onMouseEnter: p,
						onMouseLeave: p
					}, r.a.createElement("span", null, i), n === ue.Mod && r.a.createElement(ge, null)), r.a.createElement(L.c, {
						tooltipId: m,
						text: l
					}))
				},
				ge = () => r.a.createElement("img", {
					alt: o.fbt._("Moderator Achievement", null, {
						hk: "20RhJI"
					}),
					className: Ce.a.modAchievement,
					src: `${R.a.assetPath}/img/powerups/moderator-achievement.svg`
				});
			var ve = n("./src/reddit/components/Comments/Comment/TopMeta/stickied.m.less"),
				Ee = n.n(ve);
			const {
				fbt: Oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ke = () => r.a.createElement(E.a, {
				className: Ee.a.stickiedText
			}, Oe._("Stickied comment", null, {
				hk: "XUSav"
			}));
			var Ie = n("./src/reddit/components/Comments/Comment/TopMeta/PostCommentHeader/index.m.less"),
				_e = n.n(Ie);
			const je = e => {
				const {
					className: t,
					collapsed: n,
					collapsedBecauseCrowdControl: s,
					comment: i,
					flair: c,
					ignoreLock: l,
					isInModNotesExperiment: p,
					isLivestreaming: u,
					onCommentAuthorClick: b,
					onCommentTimestampClick: y,
					permalink: w,
					renderContractorBadge: M,
					renderedInOverlay: N,
					subredditDisplayText: T
				} = e, R = Object(I.a)(), A = i.subredditId, L = Object(a.e)(e => Object(j.h)(e, {
					subredditId: A
				}));
				if (i.isDeleted) return r.a.createElement("div", {
					className: Object(d.a)(_e.a.container, t),
					"data-testid": "post-comment-header-deleted"
				}, r.a.createElement("span", {
					className: _e.a.authorLine
				}, r.a.createElement("span", {
					className: _e.a.metaText
				}, i.deletedBy === _.c.User ? o.fbt._("Comment deleted by user", null, {
					hk: "1Rtt4V"
				}) : o.fbt._("Comment removed by moderator", null, {
					hk: "E1t49"
				})), r.a.createElement(E.c, {
					className: _e.a.separator
				}), r.a.createElement(K, {
					key: "Created",
					className: _e.a.metaText,
					comment: i,
					compact: !0,
					permalink: w,
					renderedInOverlay: N
				})));
				return r.a.createElement("div", {
					className: Object(d.a)(_e.a.container, t),
					"data-testid": "post-comment-header"
				}, r.a.createElement("span", {
					className: _e.a.authorLine
				}, !Object(_.f)(i) && r.a.createElement(C.b, {
					className: _e.a.userBadges,
					badgeSize: 20,
					showAddCustom: !0,
					subredditId: i.subredditId,
					userId: i.authorId,
					uniqueIdentifier: i.id
				}), r.a.createElement("div", {
					className: _e.a.baselineItem
				}, r.a.createElement(D, {
					authorClassName: _e.a.author,
					collapsed: n,
					comment: i,
					isLivestreaming: u,
					onClick: b,
					renderedInOverlay: N
				})), !Object(_.f)(i) && p && r.a.createElement(g.a, {
					postOrComment: i,
					className: _e.a.LastAuthorModNoteIcon
				}), s && r.a.createElement(Y, null), r.a.createElement(fe, {
					className: _e.a.role,
					comment: i,
					subredditDisplayText: T,
					renderContractorBadge: M,
					renderedInOverlay: N
				}), i.isAuthorCakeday ? r.a.createElement(S, {
					className: _e.a.cakeDay,
					commentId: i.id,
					renderedInOverlay: N
				}) : !Object(_.f)(i) && L && r.a.createElement(h.a, {
					className: _e.a.achievementFlair,
					subredditId: i.subredditId,
					userId: i.authorId,
					onHover: () => {
						R(Object(k.b)(i.id, i.subredditId, i.authorId))
					},
					showPopupOnHover: !0
				}), r.a.createElement(f.a, {
					className: _e.a.cryptoPoints,
					contentId: i.id,
					subredditId: i.subredditId,
					userId: i.authorId,
					username: i.author
				}), r.a.createElement(E.c, {
					className: _e.a.separator
				}), r.a.createElement(K, {
					key: "Created",
					className: _e.a.metaText,
					comment: i,
					compact: !0,
					onClick: y,
					permalink: w,
					renderedInOverlay: N
				}), i.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: _e.a.separator
				}), r.a.createElement(ke, null)), i.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: _e.a.separator
				}), r.a.createElement(te, {
					compact: !0,
					editedAt: i.editedAt
				})), r.a.createElement(pe, {
					comment: i,
					ignoreLock: l,
					renderedInOverlay: N
				}), r.a.createElement(m.a, {
					thing: i,
					tooltipType: N ? v.c.Lightbox : void 0
				})), c && !Object(O.o)(c) && r.a.createElement("span", {
					className: _e.a.userFlairLine
				}, r.a.createElement(x.b, {
					className: _e.a.flair,
					flair: c,
					forceSmallEmojis: !0
				})))
			};
			var ye = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				we = n("./src/reddit/selectors/economics.ts"),
				Me = n("./src/reddit/models/Flair/index.ts"),
				Ne = n("./src/reddit/selectors/comments.ts"),
				Te = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				De = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Re = n("./src/reddit/selectors/subreddit.ts"),
				Ae = n("./src/reddit/selectors/userFlair.ts"),
				Le = n("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				Pe = n.n(Le);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = c.a.wrapped(x.b, "RightPositionedAuthorFlair", Pe.a),
				Se = c.a.span("DeletedText", Pe.a),
				Ue = c.a.wrapped(E.a, "MetaSeparator", Pe.a),
				Ve = Object(a.b)(() => Object(i.c)({
					hasBadges: (e, {
						comment: t
					}) => !!Object(we.q)(e, t.subredditId, t.authorId).length,
					subredditDisplayText: (e, t) => {
						const n = Object(Re.H)(e, {
							commentId: t.comment.id
						});
						return n ? n.displayText : ""
					},
					flairPosition: (e, {
						comment: t
					}) => Object(Ae.e)(e, {
						subredditId: t.subredditId
					}),
					commentPermalink: (e, t) => Object(Ne.m)(e, {
						commentId: t.comment.id
					}),
					isBlockingInterstitialEnabled: De.b,
					isInModNotesExperiment: (e, {
						comment: t
					}) => Object(Te.b)(e, t.subredditId)
				}));
			t.a = Ve(e => {
				const {
					children: t,
					className: n,
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					commentPermalink: i,
					commentsPageKey: c,
					compact: l,
					flair: p,
					flairPosition: u,
					hasBadges: b,
					ignoreFlairPosition: h,
					ignoreLock: g,
					isBlockingInterstitialEnabled: O,
					isInModNotesExperiment: k,
					isLivestreaming: I,
					isPostComment: j,
					onCommentAuthorClick: y,
					onCommentTimestampClick: w,
					renderContractorBadge: M,
					renderedInOverlay: N,
					subredditDisplayText: T,
					userHasNft: R
				} = e, A = r.a.createElement(r.a.Fragment, null, r.a.createElement(ye.b, {
					comment: a,
					commentId: a.id
				}), r.a.createElement(ye.a, {
					comment: a,
					commentId: a.id,
					commentsPageKey: c
				}));
				if (j) return r.a.createElement(r.a.Fragment, null, r.a.createElement(je, {
					className: Object(d.a)(n, {
						[Pe.a.collapsed]: o
					}),
					collapsed: o,
					collapsedBecauseCrowdControl: s,
					comment: a,
					flair: p || null,
					ignoreLock: g,
					isInModNotesExperiment: k,
					isLivestreaming: I,
					onCommentAuthorClick: y,
					onCommentTimestampClick: w,
					permalink: i,
					renderContractorBadge: !!M,
					renderedInOverlay: N,
					subredditDisplayText: T
				}), A);
				if (a.isDeleted) return r.a.createElement(He, Fe({}, e, {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: o
					})
				}));
				if (o) return r.a.createElement(Ge, Fe({}, e, {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: o
					})
				}));
				const L = !h && u === Me.b.Left;
				return r.a.createElement("div", {
					className: Object(d.a)(n, Pe.a.container, {
						[Pe.a.collapsed]: o,
						[Pe.a.hasBadges]: b,
						[Pe.a.liveStreaming]: I
					}),
					"data-testid": "comment-top-meta"
				}, p && L && r.a.createElement(x.b, {
					flair: p,
					forceSmallEmojis: l
				}), !Object(_.f)(a) && r.a.createElement(C.b, {
					className: Pe.a.userBadges,
					showAddCustom: !0,
					subredditId: a.subredditId,
					userId: a.authorId,
					uniqueIdentifier: a.id
				}), t && t, r.a.createElement(D, {
					authorClassName: R ? Pe.a.NftAuthor : void 0,
					collapsed: o,
					comment: a,
					isLivestreaming: I,
					isStrong: !!l,
					onClick: y,
					renderedInOverlay: N
				}), s && r.a.createElement(Y, null), s && r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "crowdControlSeparator"
				}), p && !L && r.a.createElement(Be, {
					flair: p,
					forceSmallEmojis: l
				}), !l && r.a.createElement(f.a, {
					className: Pe.a.publicPoints,
					contentId: a.id,
					metaSeparator: r.a.createElement(E.c, {
						className: Pe.a.metaText
					}),
					subredditId: a.subredditId,
					userId: a.authorId,
					username: a.author
				}), A, r.a.createElement(fe, {
					className: Pe.a.authorRole,
					comment: a,
					subredditDisplayText: T,
					renderContractorBadge: !!M,
					renderedInOverlay: N
				}), !l && r.a.createElement(r.a.Fragment, null, !a.isDeleted && !j && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.b, {
					className: Pe.a.metaText,
					isScoreHidden: a.isScoreHidden,
					score: a.score
				}), r.a.createElement(E.c, {
					className: Pe.a.metaText,
					key: "scoreCreatedSeparator"
				})), r.a.createElement(K, {
					key: "Created",
					className: Pe.a.MetaLink,
					comment: a,
					permalink: i,
					renderedInOverlay: N,
					isBlockingInterstitialEnabled: O
				}), a.isStickied && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(ke, null)), a.editedAt && r.a.createElement(r.a.Fragment, null, r.a.createElement(E.c, {
					className: Pe.a.separator
				}), r.a.createElement(te, {
					editedAt: a.editedAt
				}))), r.a.createElement(pe, {
					comment: a,
					ignoreLock: g,
					renderedInOverlay: N
				}), r.a.createElement(m.a, {
					thing: a,
					tooltipType: N ? v.c.Lightbox : void 0
				}))
			});
			const He = e => {
					const {
						childrenInfo: t,
						collapsed: n,
						className: s,
						comment: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d,
						renderedInOverlay: c
					} = e;
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(Se, null, a.deletedBy === _.c.User ? o.fbt._("Comment deleted by user", null, {
						hk: "1Rtt4V"
					}) : o.fbt._("Comment removed by moderator", null, {
						hk: "E1t49"
					})), r.a.createElement(K, {
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
				Ge = e => {
					const {
						comment: t,
						className: n,
						childrenInfo: o,
						renderedInOverlay: s,
						collapsed: a,
						commentPermalink: i,
						isBlockingInterstitialEnabled: d
					} = e;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement("div", null, r.a.createElement(b, {
						comment: t,
						isAuthorDeleted: Object(_.f)(t),
						collapsed: a
					})), r.a.createElement(E.b, {
						className: Pe.a.metaText,
						isScoreHidden: t.isScoreHidden,
						score: t.score
					}), r.a.createElement(E.c, {
						className: Pe.a.metaText,
						key: "scoreCreatedSeparator"
					}), r.a.createElement(K, {
						key: "Created",
						className: Pe.a.MetaLink,
						comment: t,
						permalink: i,
						renderedInOverlay: s,
						isBlockingInterstitialEnabled: d
					}), We({
						childrenInfo: o
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
					return r.a.createElement(Ue, {
						className: Pe.a.metaText
					}, t ? o.fbt._({
						"*": "More than {number} children",
						_1: "More than 1 child"
					}, [o.fbt._plural(n, "number")], {
						hk: "13XC7a"
					}) : o.fbt._({
						"*": "{number} children",
						_1: "1 child"
					}, [o.fbt._plural(n, "number")], {
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
		"./src/reddit/components/Comments/Comment/index.m.less": function(e, t, n) {
			e.exports = {
				CommentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				commentWrapper: "P8SGAKMtRxNwlmLz1zdJu",
				redesign: "HZ-cv9q391bm8s7qT54B3",
				voteButton: "_2m5vzALl8kQdr9kwIFUo5t",
				upDownVote: "_22nWXKAY6OzAfK5GcUqWV2",
				score: "_3ChHiOyYyUkpZ_Nm3ZyM2M",
				ActionBar: "_3KgrO85L1p9wQbgwG27q4y",
				actionBar: "_3KgrO85L1p9wQbgwG27q4y",
				HorizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				horizontalVotes: "_1ewTEGuogtFmDvDII2T2Yy",
				FlatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				flatList: "_2_lhaFUJdP8q0o2L9MN2TN",
				ExpandButton: "_1nGapmdexvR0BuOkfAi6wa",
				expandButton: "_1nGapmdexvR0BuOkfAi6wa",
				hidden: "_1zN1-lYh2LfbYOMAho_O8g",
				visible: "O_Ica0k2O4KFcZyNfsJDU",
				ErrorText: "_3XArRVBsKuWegVHX9CQjH-",
				errorText: "_3XArRVBsKuWegVHX9CQjH-",
				CommentBody: "_3cjCphgls6DH-irkVaA0GM",
				commentBody: "_3cjCphgls6DH-irkVaA0GM",
				restrictHeight: "_2SI6K-u7PZ8koDfUmq7jlz",
				EditCommentForm: "JchsqHyN3thfSnN8dUM3",
				editCommentForm: "JchsqHyN3thfSnN8dUM3",
				AuthorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				authorHoverDiv: "ZvAy-PJfJmB8pzQxpz1sS",
				UserIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				userIconContainer: "_3GfQMgsm3HGd3838lwqCST",
				UserIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				userIconContainerSmall: "zAxFYkzSByRTsKWHEMfFF",
				SupporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				supporterRing: "_2I86011VPvZ-uDOUp1zvd-",
				UserIcon: "_13ScjOmi6dGdJw0JAonQEr",
				userIcon: "_13ScjOmi6dGdJw0JAonQEr",
				UserIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				userIconNft: "_20ZyBb8T475h1qmXRBEL6-",
				topSupporterIcon: "PjnQ0fgBT0oSZ9nR8HeaJ",
				VerticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				verticalVotes: "kB7GZ7EzNg1Msq-nEnY0z",
				CommentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				commentContentWrapper: "_3tw__eCCe7j-epNCKGXUKk",
				isPendingDeletion: "_2R8NbVFaqNnBbuA7o2osje",
				isRemoved: "_2zA6eSGIr_oQU7np0uNqoB",
				isLocked: "t8jgOblBrQTKWHnVy0zGD",
				isActive: "_1vvFtxiq5874iIdCUYlL-d",
				highlightComment: "_2ym9uYDdCxu8P4UFCLNCgE",
				topLevel: "_1z5rdmX8TDr6mqwNv7A70U",
				focused: "_1Sy9NCNbLA9uJZj-qgUrMG",
				noSpacing: "_3nqqnHjXPJkfr8j5t_I85P",
				TopMeta: "_1S45SPAIb30fsXtEcKPSdt",
				topMeta: "_1S45SPAIb30fsXtEcKPSdt",
				noFlair: "_3LqBzV8aCO9tge99jHiUGy",
				collapsed: "_3c9Go6433BnvYx8_7MkPnt",
				CommentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentCreation: "_2jhbZV6mVCM5Ma7Z376DW2",
				commentPerfMarkVisibility: "_2CkgPEY8ljDZH3np9UY1ws"
			}
		},
		"./src/reddit/components/Comments/Comment/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "COMMENT_AUTHOR_ICON_TEST_ID", (function() {
				return Kt
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/makeDraftKey/index.ts"),
				l = n("./src/lib/objectSelector/index.ts"),
				p = n("./src/reddit/actions/comment/index.ts"),
				u = n("./src/reddit/actions/comment/authoring.ts"),
				b = n("./src/reddit/actions/comment/moderation.ts"),
				h = n("./src/reddit/components/CommentCreation/Loader.tsx"),
				C = n("./src/reddit/icons/fonts/helpers.tsx");
			var x = e => r.a.createElement("i", {
					className: Object(c.a)(Object(C.b)("expand", e.isFilled), e.className)
				}),
				f = n("./src/reddit/components/Comments/Comment/ExpandButton/index.m.less"),
				g = n.n(f);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var E, O, k = n("./node_modules/lodash/defer.js"),
				I = n.n(k),
				_ = n("./src/lib/lessComponent.tsx"),
				j = n("./src/reddit/actions/tooltip.ts"),
				y = n("./src/reddit/selectors/tooltip.ts"),
				w = n("./src/reddit/actions/gold/modals.ts"),
				M = n("./src/reddit/actions/modal.ts"),
				N = n("./src/reddit/actions/reportFlow/index.ts"),
				T = n("./src/reddit/helpers/correlationIdTracker.ts"),
				D = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = n("./src/reddit/helpers/trackers/lightbox.ts"),
				A = n("./src/reddit/models/Comment/index.ts"),
				L = n("./src/reddit/selectors/activeModalId.ts"),
				P = n("./src/reddit/selectors/comments.ts"),
				F = n("./src/reddit/selectors/experiments/antievil/index.tsx"),
				B = n("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				S = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				U = n("./src/reddit/selectors/posts.ts"),
				V = n("./src/reddit/selectors/subreddit.ts"),
				H = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				W = n("./src/reddit/components/Comments/Comment/Flatlist/breakpoints.m.less"),
				K = n.n(W);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(E || (E = {})),
			function(e) {
				e.LoggedInUser = "LoggedInUserGroup", e.Moderator = "ModeratorGroup"
			}(O || (O = {}));
			const X = (e, t) => {
					const n = K.a[t],
						o = K.a[e];
					return Object(c.a)(n, o)
				},
				z = e => Object(c.a)(K.a[`depth${Math.min(3*Math.ceil(e.depth/3),10)}`], {
					[K.a.isInOverlay]: e.isInOverlay,
					[K.a.isModModeEnabled]: e.isModModeEnabled,
					[K.a.isFollowCommentEnabled]: e.isFollowCommentEnabled
				});
			var Q = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				J = n("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				q = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				Y = n("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				Z = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				$ = n("./src/reddit/components/ModModeReports/helpers.ts"),
				ee = n("./src/reddit/components/OverflowMenu/index.tsx"),
				te = n("./src/reddit/components/ReportFlow/index.tsx"),
				ne = n("./src/reddit/components/ReportFlow/new.tsx"),
				oe = n("./src/reddit/components/ShareMenu/index.tsx"),
				se = n("./src/reddit/components/TrackingHelper/index.tsx"),
				re = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ae = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				ie = n("./src/reddit/helpers/trackers/modTools.ts"),
				de = n("./src/reddit/layout/row/Inline/index.tsx"),
				ce = n("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				me = n.n(ce),
				le = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				pe = n("./src/reddit/selectors/gold/awardIcon.ts");
			var ue = e => {
					const t = Object(a.e)(S.b),
						n = Object(a.e)(e => t && Object(pe.a)(e, {
							award: t,
							minSize: 32
						}));
					return n ? r.a.createElement("img", {
						className: Object(c.a)(me.a.img, e.className),
						id: e.id,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						src: n
					}) : r.a.createElement(le.a, e)
				},
				be = n("./src/reddit/icons/fonts/index.tsx"),
				he = n("./src/reddit/icons/fonts/Comment/index.tsx"),
				Ce = n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"),
				xe = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				fe = n("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ge = n("./src/reddit/icons/fonts/Report/index.tsx"),
				ve = n("./src/reddit/components/Comments/Comment/Flatlist/index.m.less"),
				Ee = n.n(ve);
			const Oe = _.a.wrapped(he.a, "CommentIcon", Ee.a),
				ke = _.a.wrapped(ge.a, "Report", Ee.a),
				Ie = _.a.wrapped(xe.a, "IgnoreReport", Ee.a),
				_e = _.a.wrapped(Z.a, "ModActionsMenu", Ee.a),
				je = _.a.div("OverflowMenuSpacer", Ee.a),
				ye = _.a.wrapped(ee.a, "DropdownRow", Ee.a),
				we = _.a.wrapped(de.a, "Flatlist", Ee.a),
				Me = _.a.button("Button", Ee.a),
				Ne = _.a.wrapped(Q.a, "ModToolsFlatlist", Ee.a),
				Te = _.a.wrapped(re.a, "ViewReportsDropdown", Ee.a),
				De = e => `Comment-${e}--Modal--DeleteComment`,
				Re = e => `Distinguish--Dropdown--${e}`,
				Ae = e => `${e}-overflow-menu`,
				Le = e => `View--Reports--${e}`,
				Pe = Object(i.c)({
					claimedFreeAward: S.b,
					currentUser: H.k,
					isConfirmModalOpen: (e, {
						comment: t
					}) => Object(L.a)(e) === De(t.id),
					isDistinguishDropdownOpen: (e, {
						comment: t
					}) => Object(y.b)(Re(t.id))(e),
					isFollowed: (e, {
						comment: t
					}) => Object(P.y)(e, {
						commentId: t.id
					}),
					isFollowedCommentExpired: (e, {
						comment: t
					}) => Object(P.A)(e, {
						commentId: t.id
					}),
					isPendingDeletion: (e, {
						comment: t
					}) => Object(P.C)(e, {
						commentId: t.id
					}),
					isReportsDropdownOpen: (e, {
						comment: t
					}) => Object(y.b)(Le(t.id))(e),
					isLoggedIn: H.O,
					postIsArchived: (e, {
						comment: t
					}) => Object(U.A)(e, {
						postId: t.postId
					}),
					isBlockedUserBannerEnabled: (e, {
						comment: t
					}) => !!Object(U.w)(e, {
						postId: t.postId
					}) && Object(F.a)(e),
					postAuthorIsBlocked: (e, {
						comment: t
					}) => Object(U.w)(e, {
						postId: t.postId
					}),
					postIsLocked: (e, {
						comment: t
					}) => Object(U.B)(e, {
						postId: t.postId
					}),
					commentPermalink: (e, {
						comment: t
					}) => Object(P.m)(e, {
						commentId: t.id
					}),
					reportFlowIsOpen: (e, {
						comment: t
					}) => {
						var n, o;
						return (null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === t.id
					},
					sendRepliesToggled: (e, {
						comment: t
					}) => Object(P.I)(e, {
						commentId: t.id
					}),
					subredditAboutInfo: (e, {
						subreddit: t
					}) => t ? Object(V.u)(e, {
						subredditName: t.name
					}) : void 0,
					subredditOrProfile: (e, {
						comment: t
					}) => Object(U.U)(e, {
						postId: t.postId
					}),
					reportingRevampEnabled: B.a,
					isPostUnrepliable: (e, {
						comment: t
					}) => {
						var n;
						return null === (n = Object(U.G)(e, {
							postId: t.postId
						})) || void 0 === n ? void 0 : n.unrepliableReason
					},
					isTrueblockPCBlockeeEnabled: F.b,
					isParentCommentsAuthorBlocked: (e, {
						comment: t
					}) => Object(P.B)(e, {
						commentId: t.id
					})
				});
			class Fe extends r.a.Component {
				constructor() {
					super(...arguments), this.sendCommentEventWithName = e => this.props.sendEvent(Object(R.b)(this.props.comment.postId, `comment_${e}`)), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(ie.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(ie.e)(e, this.props.comment.id)), this.handleSave = () => {
						this.props.comment.isSaved ? this.sendCommentModEventWithName("unsave") : this.sendCommentModEventWithName("save"), this.props.onToggleSave()
					}, this.handleEdit = () => {
						this.props.sendEvent(Object(ie.d)("edit", this.props.comment.id)), this.props.handleEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(T.e)(T.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.comment.id))
					}, this.handleDelete = () => {
						this.props.sendEvent(Object(ie.d)("delete", this.props.comment.id)), this.props.toggleDeleteCommentModal()
					}, this.handleReportClick = () => {
						this.props.sendEvent(Object(ie.a)("report", this.props.comment.id)), this.props.onReportClick()
					}, this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(ie.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleFollow = () => {
						const {
							onCommentFollow: e,
							sendEvent: t,
							comment: n,
							isFollowed: o
						} = this.props;
						e(o ? A.a.UNFOLLOWED : A.a.FOLLOWED), t(o ? Object(ie.f)("follow", n.id) : Object(ie.a)("follow", n.id))
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(ie.b)(e, this.props.comment.id)), this.renderReportFlow = () => this.props.reportingRevampEnabled ? r.a.createElement(ne.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					}) : r.a.createElement(te.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: te.b,
						postId: this.props.comment.postId,
						timestamp: this.context.currentTime
					})
				}
				componentDidMount() {
					this.props.isFollowedCommentExpired && this.props.onFollowedCommentExpire()
				}
				render() {
					const {
						comment: e,
						className: t,
						currentUser: n,
						commentPermalink: a,
						deleteComment: i,
						depth: d,
						handleReply: m,
						isAvatarsInCommentsEnabled: l,
						isFollowed: p,
						isLoggedIn: u,
						isPendingDeletion: b,
						onDistinguishComment: h,
						onIgnoreReports: C,
						onToggleReportsDropdown: x,
						moderatorPermissions: f,
						modModeEnabled: g,
						postIsArchived: v,
						postAuthorIsBlocked: k,
						isBlockedUserBannerEnabled: _,
						postIsLocked: j,
						renderedInOverlay: y,
						sendEvent: w,
						subreddit: M,
						subredditAboutInfo: N,
						toggleDeleteCommentModal: T,
						toggleSendReplies: R,
						trackCommentClick: L,
						isPostUnrepliable: P,
						isTrueblockPCBlockeeEnabled: F,
						isParentCommentsAuthorBlocked: B
					} = this.props, S = Object(D.a)(f), U = !!n && n.displayText === e.author, V = !!n && n.isEmployee, H = F && e.unrepliableReason, W = F && P, K = !(B && F) && !(k && F) && !(Object(A.g)(e) && F) && !(P && F) && !H && !W && !(N && N.userIsBanned) && (j || v || k && _ || S && u || e.isLocked ? S && u : u || l), Q = Object($.a)(e), Z = S && U && !e.bannedBy, te = U && V && !e.bannedBy, ne = Z || te, se = !(Object(A.g)(e) && F) && n && e.isGildable && !W && !(H && "[deleted]" === e.author), re = !v && !H, de = [];
					K && de.push(r.a.createElement(Me, {
						disabled: b,
						key: "reply",
						onClick: () => {
							m(), I()(() => L("reply", e.id)())
						}
					}, r.a.createElement(Oe, null), o.fbt._("Reply", null, {
						hk: "dq9W0"
					}))), se && de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(ue, null),
						isIconOverflowOnly: !0,
						key: "award",
						onClick: this.handleGild,
						text: () => o.fbt._("Give Award", null, {
							hk: "1GmM1v"
						})
					}), de.push(r.a.createElement(oe.a, {
						dropdownId: `${e.id}-comment-share-menu`,
						key: "share",
						permalink: a,
						sendEventWithName: this.sendCommentEventWithName,
						subredditType: null == M ? void 0 : M.type
					}, r.a.createElement(Me, {
						onClick: () => this.sendCommentEventWithName("share")
					}, o.fbt._("Share", null, {
						hk: "3Ak3Tw"
					})))), U || de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(ge.a, null),
						isIconOverflowOnly: !0,
						key: "report",
						onClick: this.handleReportClick,
						text: () => o.fbt._("Report", null, {
							hk: "4oVcnd"
						})
					}), de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(be.a, {
							name: e.isSaved ? "saved" : "save"
						}),
						isIconOverflowOnly: !0,
						key: "save",
						onClick: this.handleSave,
						text: e.isSaved ? () => o.fbt._("Unsave", null, {
							hk: "48MWs0"
						}) : () => o.fbt._("Save", null, {
							hk: "4yMsMq"
						})
					}), U && de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(be.a, {
							name: "edit"
						}),
						isIconOverflowOnly: !0,
						key: "edit",
						onClick: this.handleEdit,
						text: () => o.fbt._("Edit", null, {
							hk: "1nftDt"
						})
					}), re && de.push({
						breakpointGroup: O.LoggedInUser,
						icon: r.a.createElement(be.a, {
							name: "notification",
							isFilled: p
						}),
						isIconOverflowOnly: !0,
						key: "follow",
						onClick: this.handleFollow,
						text: p ? () => o.fbt._("Followed", null, {
							hk: "43P2OR"
						}) : () => o.fbt._("Follow", null, {
							hk: "1vo8lJ"
						})
					});
					const ce = de.map(e => r.a.isValidElement(e) ? e : r.a.createElement(Me, {
							className: X(e.breakpointGroup, E.HideIfVWSmaller),
							disabled: b,
							key: e.key,
							onClick: e.onClick
						}, !e.isIconOverflowOnly && e.icon, e.text())),
						me = de.map(e => r.a.isValidElement(e) ? null : r.a.createElement(ye, {
							className: X(e.breakpointGroup, E.HideIfVWLarger),
							displayText: e.text(),
							key: e.key,
							onClick: e.onClick,
							textClassName: Ee.a.dropdownRowText
						}, e.icon));
					return r.a.createElement(s.Fragment, null, r.a.createElement(we, {
						className: Object(c.a)(z({
							depth: d,
							isInOverlay: y,
							isModModeEnabled: S && g,
							isFollowCommentEnabled: re
						}), t)
					}, ce, r.a.createElement(je, {
						className: U ? void 0 : X(O.LoggedInUser, E.HideIfVWLarger)
					}, r.a.createElement(ee.b, {
						className: Ee.a.overflowMenu,
						disabled: b,
						dropdownId: Ae(e.id),
						onClick: () => w(Object(ie.a)("comment_overflow_menu", e.id))
					}, me, U && r.a.createElement(r.a.Fragment, null, r.a.createElement(ye, {
						displayText: o.fbt._("Delete comment", null, {
							hk: "4lMUDO"
						}),
						onClick: this.handleDelete,
						textClassName: Ee.a.dropdownRowText
					}, r.a.createElement(be.a, {
						name: "delete"
					})), r.a.createElement(ae.a, {
						text: o.fbt._("Send me reply notifications", null, {
							hk: "4ebRRu"
						}),
						onClick: R,
						isSelected: this.props.sendRepliesToggled
					})))), this.props.isConfirmModalOpen && r.a.createElement(q.a, {
						actionText: o.fbt._("Delete", null, {
							hk: "1bl9Tc"
						}),
						cancelActionText: o.fbt._("Keep", null, {
							hk: "3hCBEF"
						}),
						headerText: o.fbt._("Delete comment", null, {
							hk: "2EYJqi"
						}),
						modalText: o.fbt._("Are you sure you want to delete your comment?", null, {
							hk: "OzOZd"
						}),
						onConfirm: i,
						toggleModal: T,
						trackClick: () => {},
						withOverlay: !0
					}), S && r.a.createElement(r.a.Fragment, null, g && r.a.createElement(Ne, {
						className: X(O.Moderator, E.HideIfVWSmaller),
						comment: e,
						isCommentAuthor: U
					}), r.a.createElement(_e, {
						className: g ? X(O.Moderator, E.HideIfVWLarger) : void 0,
						dropdownId: `${e.id}-mod-actions-menu`,
						inCommentFlatlist: !0,
						onClick: () => w(Object(ie.a)("comment_mod_action_menu", e.id))
					}, r.a.createElement(fe.a, null), r.a.createElement(G.a, {
						comment: e,
						tooltipId: `${e.id}-mod-actions-menu`
					}))), Object($.c)(e) && !g && r.a.createElement(J.a, {
						text: `${Q}`,
						onClick: () => {
							x(), this.sendCommentModEventWithName("comment_report_menu")
						},
						selected: this.props.isReportsDropdownOpen,
						id: Le(e.id)
					}, r.a.createElement(Te, {
						model: e,
						onIgnoreReports: () => {
							C(), this.sendCommentReportEvent(e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Le(e.id)
					}), e.ignoreReports ? r.a.createElement(Ie, null) : r.a.createElement(ke, null)), ne && r.a.createElement(J.a, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.isDistinguishDropdownOpen
					}, r.a.createElement(Ce.a, null), r.a.createElement(Y.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.isDistinguishDropdownOpen,
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: V,
						isUserMod: S,
						onDistinguishComment: h,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Re(e.id)
					}))), (!this.props.renderedInOverlay || !this.props.isCommentFocused) && this.props.reportFlowIsOpen && this.renderReportFlow())
				}
			}
			var Be = Object(a.b)(Pe, (e, {
					comment: t,
					commentsPageKey: n
				}) => ({
					deleteComment: () => n && e(Object(u.h)(t.id, t.postId)),
					handleDelete: () => {
						e(Object(M.i)(De(t.id))), e(Object(j.h)({
							tooltipId: Ae(t.id)
						}))
					},
					handleEdit: () => {
						const o = t.media && t.media.rteMode;
						n && e(Object(u.d)({
							commentId: t.id,
							draftKey: Object(m.a)(d.c.edit, t.id),
							text: t.bodyMD || "",
							commentMode: o,
							commentsPageKey: n
						}))
					},
					handleReply: () => n && e(Object(u.p)({
						parentCommentId: t.id,
						commentsPageKey: n
					})),
					onCommentFollow: n => e(Object(u.r)(t.id, n)),
					onDistinguishComment: (n, o) => e(Object(b.b)(t.id, n, o)),
					onFollowedCommentExpire: () => e(Object(p.n)({
						id: t.id,
						expiresAt: 0
					})),
					onGildClick: (n, o) => e(Object(w.d)({
						awardId: o,
						correlationId: n,
						thingId: t.id
					})),
					onIgnoreReports: () => e(Object(b.g)(t.id)),
					onReportClick: () => e(Object(N.c)(t.id)),
					onToggleSave: () => e(Object(p.m)(t.id)),
					onToggleDistinguishDropdown: () => e(Object(j.h)({
						tooltipId: Re(t.id)
					})),
					onToggleReportsDropdown: () => e(Object(j.h)({
						tooltipId: Le(t.id)
					})),
					toggleDeleteCommentModal: () => e(Object(M.i)(De(t.id))),
					toggleSendReplies: () => e(Object(u.k)(t.id))
				}))(Object(se.c)(Fe)),
				Se = n("./src/reddit/components/Comments/Comment/GlowHighlight/index.m.less"),
				Ue = n.n(Se);
			var Ve = r.a.memo(e => {
					const {
						hexColor: t
					} = e;
					return r.a.createElement("div", {
						className: Ue.a.glowHighlightContainer,
						role: "presentation",
						style: {
							boxShadow: `#${t} 0px 0px 14px`
						}
					})
				}),
				He = n("./src/reddit/components/Comments/Comment/GradientHighlight/index.m.less"),
				Ge = n.n(He);
			var We = r.a.memo(e => r.a.createElement("div", {
					className: Ge.a.gradientHighlightContainer,
					role: "presentation"
				})),
				Ke = n("./src/reddit/components/Comments/Comment/HighlightEffect/index.tsx"),
				Xe = n("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				ze = n("./src/reddit/components/Comments/PredictionComment/async.ts"),
				Qe = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				Je = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				qe = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				Ye = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Ze = n("./src/reddit/components/ModModeReports/index.tsx"),
				$e = n("./src/reddit/components/PostTopMeta/index.tsx"),
				et = n("./src/reddit/components/RichTextJson/index.tsx"),
				tt = n("./src/reddit/components/UserIcon/index.tsx"),
				nt = n("./src/reddit/components/UserIcon/constants.ts"),
				ot = n("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				st = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				rt = n("./src/reddit/constants/componentTestIds.ts"),
				at = n("./src/reddit/contexts/PageLayer/index.tsx"),
				it = n("./src/reddit/contexts/Visibility.tsx"),
				dt = n("./src/reddit/controls/ErrorText/index.tsx"),
				ct = n("./src/reddit/controls/InternalLink/index.tsx"),
				mt = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				lt = n("./src/reddit/helpers/flair.ts"),
				pt = n("./src/reddit/models/Subreddit/index.ts"),
				ut = n("./src/reddit/models/User/index.ts"),
				bt = n("./src/reddit/models/Vote/index.ts"),
				ht = n("./src/reddit/components/Governance/VaultActionLink/async.ts"),
				Ct = n("./src/reddit/selectors/commentSelector.ts"),
				xt = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ft = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				gt = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				vt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Et = n("./src/reddit/selectors/poll/index.ts"),
				Ot = n("./src/reddit/selectors/userPrefs.ts"),
				kt = n("./src/reddit/selectors/moderatingComments.ts"),
				It = n("./src/reddit/components/Comments/Comment/index.m.less"),
				_t = n.n(It),
				jt = n("./src/config.ts"),
				yt = n("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				wt = n("./src/reddit/helpers/userSnoovatar/index.ts");

			function Mt() {
				return (Mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const Nt = 300,
				Tt = _.a.wrapped((function(e) {
					const {
						className: t,
						...n
					} = e;
					return r.a.createElement("button", v({}, n, {
						className: Object(c.a)(t, g.a.expandButton)
					}), r.a.createElement(x, {
						className: g.a.expandIcon
					}))
				}), "ExpandButton", _t.a),
				Dt = _.a.wrapped(Be, "FlatList", _t.a),
				Rt = _.a.wrapped(dt.b, "ErrorText", _t.a),
				At = _.a.wrapped(Qe.a, "HorizontalVotes", _t.a),
				Lt = _.a.div("ActionBar", _t.a),
				Pt = _.a.wrapped(Xe.a, "TopMeta", _t.a),
				Ft = _.a.div("CommentContentWrapper", _t.a),
				Bt = _.a.wrapped(Je.b, "AuthorHovercard", _t.a),
				St = Object(at.u)(),
				Ut = (e, t) => {
					var n;
					return null !== (n = t.comment) && void 0 !== n ? n : Object(Ct.b)(e, t)
				},
				Vt = Object(a.b)(() => Object(i.c)({
					comment: Ut,
					currentProfileModPermissions: at.h,
					depth: (e, t) => Object(P.j)(e, t),
					collapsed: kt.b,
					collapsedBecauseCrowdControl: kt.a,
					currentUser: H.k,
					flair: P.e,
					focused: (e, t) => !t.noFocus && Object(P.t)(e, t),
					highlightAnimationDisabled: Ot.c,
					isEditing: P.z,
					isLoggedIn: H.O,
					isPendingDeletion: P.C,
					isPresenceConsumptionExpEnabled: ft.c,
					moderatorPermissions: (e, t) => {
						const n = Ut(e, t);
						return n ? Object(vt.m)(e, {
							subredditId: n.subredditId
						}) : null
					},
					prediction: Et.f,
					modModeEnabled: at.T,
					errorMsgs: P.G,
					replyFormOpen: P.J,
					subreddit: at.r,
					subredditType: P.L,
					showNftSpecialtyTreatment: yt.b,
					hasSupporterRing: gt.a,
					isOnlineConsumptionLoadTest: ft.a,
					isOnlineUserPref: H.T,
					userIsBanned: (e, t) => {
						const n = Ut(e, t);
						return !!n && Object(V.db)(e, {
							subredditId: n.subredditId
						})
					},
					isBlockingInterstitialEnabled: xt.b
				}), (e, {
					commentId: t,
					commentsPageKey: n,
					scrollToAndRemeasure: o,
					trackCommentClick: s
				}) => ({
					onCollapseClick: () => e(Object(p.o)({
						commentId: t,
						commentsPageKey: n,
						scrollToAndRemeasure: o
					})),
					onIgnoreReports: () => e(Object(b.g)(t)),
					onVoteClick: n => {
						const [o, r] = n === bt.a.upvoted ? [Object(p.q)(t), "upvote_comment"] : [Object(p.j)(t), "downvote_comment"];
						s(r, t)(), e(o)
					}
				})),
				Ht = Object(l.b)(e => ({
					renderingObjectInfo: e.comment,
					pageLayer: e.pageLayer
				})),
				Gt = e => r.a.createElement("div", e, e.children),
				Wt = e => r.a.createElement(r.a.Fragment, null, e.children),
				Kt = "comment_author_icon",
				Xt = St(Vt(e => {
					const {
						childrenInfo: t,
						clearHovered: n,
						collapsed: a,
						collapsedBecauseCrowdControl: i,
						comment: l,
						commentsPageKey: p,
						currentProfileModPermissions: b,
						currentUser: C,
						depth: x,
						errorMsgs: f,
						flair: g,
						flatlist: v,
						focused: E,
						hasAwardGradient: O,
						hasSupporterRing: k,
						highlightAnimationDisabled: I,
						highlightTreatment: _,
						index: j,
						isActive: y,
						isAvatarsInCommentsEnabled: w,
						isBlockingInterstitialEnabled: M,
						isEditing: N,
						isFirstInList: T,
						isHighlighted: R,
						isLoggedIn: L,
						isOnlineConsumptionLoadTest: P,
						isOnlineUserPref: F,
						isPendingDeletion: B,
						isPresenceConsumptionExpEnabled: S,
						moderatorPermissions: U,
						modModeEnabled: V,
						noSpacing: H = !1,
						onCommentAuthorClick: G,
						onCommentTimestampClick: W,
						onCollapseClick: K,
						onIgnoreReports: X,
						onLineMouseOver: z,
						onPresenceIndicatorInViewport: Q,
						onVoteClick: J,
						postId: q,
						prediction: Y,
						renderedInOverlay: Z,
						replyFormOpen: ee,
						restrictHeight: te,
						showBlockingInterstitial: ne,
						showNftSpecialtyTreatment: oe,
						subreddit: se,
						subredditType: re,
						trackCommentClick: ae,
						userIconSmall: ie,
						userIsBanned: de
					} = e, ce = l.isDeleted, me = !N && !ce && !!f && f.length > 0, le = Object(m.a)(d.c.edit, l.id), pe = Object(m.a)(d.c.replyToComment, l.id), ue = Object(D.a)(U), be = Object(Ye.d)(l), he = Object($.c)(l), Ce = l.authorIsContractor && re === pt.f.EmployeesOnly, xe = l.isLocked, fe = ue && V, ge = !N && !ce && (L || w), ve = !!C && Object(ut.e)(C) === l.author, [Ee, Oe] = Object(s.useState)(null), [ke, Ie] = Object(s.useState)(null), _e = Object(s.useRef)(null), je = Object(A.f)(l) || Object(A.g)(l), ye = je ? Gt : ct.a, we = Object(A.f)(l) ? Wt : Bt;
					Object(s.useEffect)(() => {
						if (!N && !ce && (O && Oe(r.a.createElement(We, null)), null !== _)) {
							if (_.glowHexColor) {
								const e = _.glowHexColor;
								Oe(r.a.createElement(Ve, {
									hexColor: e
								}))
							}
							if (_.effectHighlight) {
								const {
									type: e,
									assetUrl: t
								} = _.effectHighlight;
								Ie(r.a.createElement(Ke.b, {
									prefersReducedAnimation: I,
									type: e,
									assetUrl: t
								}))
							}
						}
					}, [N, ce, O, I, _]);
					const Me = Object(it.b)();
					M && Me && j >= xt.a - 1 && ne();
					const Ne = !ce && !Object(A.f)(l) && (!de || de && ve) && !Object(A.g)(l) && L,
						Te = Object(s.useCallback)(() => {
							Ne && S && !ve && Q && Q(l.id)
						}, [l.id, Q, Ne, S, ve]),
						De = Object(st.a)(l),
						Re = !(!Object(wt.d)(l.profileImage) && !oe) && Object(wt.c)(l.profileImage);
					return r.a.createElement("div", {
						key: `comment-${l.id}`,
						className: Object(c.a)(`Comment ${l.id}`, _t.a.CommentWrapper, {
							[_t.a.highlightComment]: R,
							[_t.a.deleted]: ce,
							[_t.a.focused]: E,
							[_t.a.redesign]: w,
							[_t.a.topLevel]: !x,
							[_t.a.noSpacing]: H
						})
					}, Ee, ke, !N && !ce && T && r.a.createElement("div", {
						className: _t.a.commentPerfMarkVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n                <img alt='' src='${jt.a.assetPath}/img/renderTimingPixel.png' style='width: 1px; height: 1px;' onLoad='(__markFirstCommentVisible || function(){})();' />\n              `
						}
					}), r.a.createElement(Tt, {
						className: Object(c.a)(l.id, {
							[_t.a.hidden]: !a,
							[_t.a.visible]: a
						}),
						onClick: () => {
							n(), K(), ae("collapse", l.id)()
						},
						onMouseOver: () => z(l.id),
						onMouseOut: n
					}), r.a.createElement(we, {
						alwaysShowChildren: !0,
						collapsed: a,
						hoverDivClassName: _t.a.AuthorHoverDiv,
						isCommentAuthorBlocked: Object(A.g)(l),
						postOrComment: l,
						tooltipIdPrefix: "AvatarUserInfoTooltip",
						tooltipType: Z ? $e.c.Lightbox : void 0
					}, r.a.createElement(ye, {
						className: Object(c.a)(_t.a.UserIconContainer, ie && _t.a.UserIconContainerSmall),
						"data-testid": je ? void 0 : Kt,
						onClick: je ? void 0 : G,
						to: `/user/${l.author}/`
					}, Me ? r.a.createElement(r.a.Fragment, null, k && !Re && r.a.createElement("div", {
						className: _t.a.supporterRing
					}), r.a.createElement(tt.a, {
						isNft: Re,
						className: Object(c.a)(_t.a.UserIcon, {
							[_t.a.UserIconNft]: Re && !Object(wt.e)(l.profileImage)
						}),
						iconUrl: l.profileImage,
						isNSFW: l.profileOver18 || !1,
						nsfwIconUrl: nt.a,
						userName: l.author,
						isHighlighted: R,
						shouldShowPresenceIndicator: Ne && S,
						onPresenceIndicatorInViewport: Te,
						isCommentAuthorBlocked: Object(A.g)(l),
						collapsed: a,
						shouldUseOnlineOverride: ve,
						isOnlineOverrideValue: F,
						isOnlineStatusLoadTest: Ne && P,
						authorId: l.authorId
					})) : r.a.createElement("div", {
						className: _t.a.UserIcon
					}))), r.a.createElement(Ft, {
						className: Object(c.a)({
							[_t.a.isActive]: y,
							[_t.a.isCollapsed]: a,
							[_t.a.isLocked]: xe && fe,
							[_t.a.isPendingDeletion]: B,
							[_t.a.isRemoved]: !!l.bannedBy && fe
						})
					}, r.a.createElement(mt.a, null, o.fbt._("level {depth}", [o.fbt._param("depth", x + 1)], {
						hk: "2XnyAV"
					})), r.a.createElement(Pt, {
						userHasNft: Re,
						childrenInfo: t,
						className: Object(c.a)({
							[_t.a.collapsed]: a,
							[_t.a.noFlair]: Object(lt.o)(g || null)
						}),
						collapsed: a,
						collapsedBecauseCrowdControl: i,
						comment: l,
						commentsPageKey: p,
						flair: g,
						isPostComment: !0,
						onCommentAuthorClick: G,
						onCommentTimestampClick: W,
						renderedInOverlay: Z,
						renderContractorBadge: Ce
					}), !a && r.a.createElement(s.Fragment, null, N && r.a.createElement(h.a, {
						className: Object(c.a)(_t.a.EditCommentForm, _t.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: x,
						draftType: d.c.edit,
						draftKey: le,
						postId: q,
						rtJson: Object(st.a)(l),
						mediaMetadata: l.media && l.media.mediaMetadata || void 0,
						isTopLevelComment: !1,
						parentCommentId: l.id,
						submitAction: e => Object(u.i)({
							id: l.id,
							commentsPageKey: p,
							depth: x,
							draftKey: le,
							formData: e
						}),
						submitButtonText: o.fbt._("Save Edits", null, {
							hk: "2NKEFr"
						})
					}), !N && !ce && r.a.createElement("div", {
						"data-testid": rt.d,
						ref: _e,
						className: Object(c.a)(_t.a.CommentBody, {
							[_t.a.restrictHeight]: !(!te || !_e.current) && _e.current.clientHeight > Nt
						})
					}, Y ? r.a.createElement(ze.a, {
						comment: l,
						prediction: Y
					}) : r.a.createElement(et.a, {
						content: De,
						mediaMetadata: l.media && l.media.mediaMetadata,
						rtJsonElementProps: Ht(e)
					}), r.a.createElement(ht.b, {
						content: De
					})), V && ue && be && r.a.createElement(qe.a, {
						thing: l
					}), V && ue && he && r.a.createElement(Ze.a, {
						onIgnoreReports: X,
						reportable: l
					}), null != v ? v : ge && r.a.createElement(Lt, null, w && r.a.createElement(At, {
						downvoteButtonClassName: _t.a.voteButton,
						downvoteClassName: _t.a.upDownVote,
						model: l,
						onVoteClick: J,
						scoreClassName: _t.a.score,
						upvoteButtonClassName: _t.a.voteButton,
						upvoteClassName: _t.a.upDownVote
					}), r.a.createElement(Dt, {
						comment: l,
						commentsPageKey: p,
						depth: x,
						isAvatarsInCommentsEnabled: w,
						collapsedBecauseCrowdControl: i,
						modModeEnabled: V,
						moderatorPermissions: b || U,
						renderedInOverlay: Z,
						isCommentFocused: E,
						subreddit: se,
						trackCommentClick: ae
					})), me && f.map(e => r.a.createElement(Rt, {
						key: e
					}, e)), ee && r.a.createElement(h.a, {
						className: Object(c.a)(_t.a.EditCommentForm, _t.a.CommentCreation),
						autofocus: !0,
						commentsPageKey: p,
						depth: x,
						draftType: d.c.replyToComment,
						draftKey: pe,
						isTopLevelComment: !1,
						parentCommentId: l.id,
						postId: q,
						submitAction: ({
							validate: e,
							...t
						}, n) => e ? Object(u.s)({
							commentsPageKey: p,
							draftKey: pe,
							parentCommentDepth: x,
							parentCommentId: l.id,
							formData: t,
							editorMode: n
						}) : Object(u.l)({
							commentsPageKey: p,
							draftKey: pe,
							parentCommentDepth: x,
							parentCommentId: l.id,
							formData: t,
							editorMode: n
						}),
						submitButtonText: o.fbt._("Reply", null, {
							hk: "2ymsie"
						})
					}))))
				}));
			t.default = e => r.a.createElement(ot.a.Consumer, null, t => r.a.createElement(Xt, Mt({}, e, {
				trackCommentClick: t
			})))
		},
		"./src/reddit/components/Comments/PredictionComment/async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-Comments-PredictionComment",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Comments-PredictionComment").then(n.bind(null, "./src/reddit/components/Comments/PredictionComment/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Comments/PredictionComment/index.tsx"
				}
			})
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/constants/index.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				m = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = n.n(p);
			const b = i.a.div("DistinguishWrapper", u.a),
				h = i.a.wrapped(l.a, "Inline", u.a),
				C = i.a.wrapped(c.a, "RadioOff", u.a),
				x = i.a.wrapped(m.a, "RadioOn", u.a),
				f = e => s.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? s.a.createElement(x, null) : s.a.createElement(C, null), e.text),
				g = i.a.wrapped(e => {
					const {
						className: t,
						style: n,
						isAdminDistinguished: o,
						isUserEmployee: i,
						isUserMod: d,
						isModDistinguished: c,
						isStickied: m,
						isTopLevelComment: l,
						onDistinguishComment: p
					} = e;
					return s.a.createElement(b, {
						className: t,
						style: n
					}, s.a.createElement(f, {
						onClick: () => p(r.G.NONE, null),
						selected: !c && !o,
						text: a.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), d && s.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, null),
						selected: c && !m,
						text: a.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), l && d && s.a.createElement(f, {
						onClick: () => p(r.G.MODERATOR, !0),
						selected: c && m,
						text: a.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), i && s.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, null),
						selected: o && !m,
						text: a.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), i && d && l && s.a.createElement(f, {
						onClick: () => p(r.G.ADMIN, !0),
						selected: o && m,
						text: a.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var v = Object(d.a)(g);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: a,
					isModDistinguished: i,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: m,
					sendEventWithName: l,
					tooltipId: p
				} = e;
				return s.a.createElement("div", {
					className: t,
					id: p
				}, s.a.createElement(v, {
					isAdminDistinguished: n,
					isUserEmployee: o,
					isUserMod: a,
					isModDistinguished: i,
					isOpen: e.isDropdownOpen,
					tooltipId: p,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						m(e, t), e === r.G.MODERATOR ? l(!d && t ? "distinguish_sticky" : "distinguish") : e === r.G.ADMIN ? l("admin_distinguish") : i && e !== r.G.MODERATOR ? l("undistinguish") : n && e !== r.G.ADMIN && l("admin_undistinguish"), d && !t && l("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, n) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/PowerupsFlair/UserAchievementFlair.async.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
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
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/FocusableContent/index.m.less"),
				d = n.n(i);
			t.a = a.a.wrapped(e => s.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
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
				return x
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "g", (function() {
				return y
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				c = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				m = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				l = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				u = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				h = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				C = n.n(h);
			const x = r.a.wrapped(d.a, "Icon", C.a),
				f = r.a.wrapped(c.a, "Icon", C.a),
				g = r.a.wrapped(m.a, "Icon", C.a),
				v = r.a.wrapped(l.a, "Icon", C.a),
				E = r.a.wrapped(p.a, "Icon", C.a),
				O = r.a.wrapped(u.a, "Icon", C.a),
				k = () => s.a.createElement(i.a, {
					name: "mod_mute",
					className: C.a.Icon
				}),
				I = () => s.a.createElement(i.a, {
					name: "calendar",
					className: C.a.Icon
				}),
				_ = () => s.a.createElement(b.a, {
					className: C.a.svgIcon
				}),
				j = r.a.wrapped(a.b, "DropdownRow", C.a),
				y = r.a.div("ListContainer", C.a)
		},
		"./src/reddit/components/RichTextEditor/Placeholder.m.less": function(e, t, n) {
			e.exports = {
				content: "_3Yo9aCwUoJBBuPKwf3r5cP",
				mCollapsed: "_225DoZxfrLcZu0fM8-Svk8",
				prompt: "_3CuuiBuYvA4VXTClabDCUK",
				toolbar: "_31gqZmjkDlF5-81EKQ7w_Y",
				topToolbar: "_6rO7u4xvTeWjMNR68asbw",
				bottomToolbar: "_2Qh8N3s0Z7NWIPCVBDCcxH"
			}
		},
		"./src/reddit/components/RichTextEditor/Placeholder.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/FocusableContent/index.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/RichTextEditor/Placeholder.m.less"),
				c = n.n(d);
			t.a = ({
				className: e,
				isCommentBoxDesignEnabled: t,
				isLoading: n,
				toolbarPosition: o
			}) => s.a.createElement("div", {
				className: e
			}, s.a.createElement(a.a, {
				isFocused: !1
			}, !t && "top" === o && s.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.topToolbar, Object(i.a)({
					isLoading: n
				}))
			}), s.a.createElement("div", {
				className: Object(r.a)(c.a.content, {
					[c.a.mCollapsed]: t
				})
			}, s.a.createElement("div", {
				className: Object(r.a)(c.a.prompt, Object(i.a)({
					isLoading: !0
				}))
			})), !t && "bottom" === o && s.a.createElement("div", {
				className: Object(r.a)(c.a.toolbar, c.a.bottomToolbar, Object(i.a)({
					isLoading: n
				}))
			})))
		},
		"./src/reddit/components/UserIcon/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = "https://www.redditstatic.com/avatars/avatar_default_02_24A0ED.png"
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = s.a.createContext(() => () => {})
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return u
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				d = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				c = n.n(d);
			const m = a.a.span("metaText", c.a),
				l = e => r.a.createElement(m, e, " · "),
				p = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...s
				}) => {
					const a = Object(i.b)(t),
						d = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						c = e ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(m, s, c)
				},
				u = e => r.a.createElement(m, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/trackers/features/powerupsFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				r = n("./src/reddit/selectors/gold/powerups/flairs.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => i => {
					const d = Object(s.e)(i, {
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
							title: d ? Object(o.g)(d) : void 0,
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
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
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		},
		"./src/reddit/selectors/experiments/commentBox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = Object(o.a)(a.O, a.N, (e, t) => e || t),
				d = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: i,
					experimentName: s.H
				}), e => e === s.P.Enabled)
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.t
				}) === o.w.Enabled,
				a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.Dc
				}) === o.dd
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~Comment~CommentsPage.d5c6ed8a71f21233c4c8.js.map