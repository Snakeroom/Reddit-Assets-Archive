// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9.1de97b5ff5876d6c00a1.js
// Retrieved at 1/18/2020, 11:45:21 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return b
			}));
			var o = s("./node_modules/lodash/omit.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, s) => (function() {
				let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const r = b(n.target, n.currentTarget);
					u(n.target, n.currentTarget, m.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(c.previousPageActionInfo)(e)
					})), u(n.target, n.currentTarget, m.anchorsAndButtons) && o(n)
				}
			});

			function p(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: o
						} = this.props;
						return i.a.createElement(e, d({}, n()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, o)
						}))
					}
				}
				return Object(a.b)(t)
			}
			const m = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const b = e => Object.assign({
				api_type: "json",
				show_error_list: !0,
				thing_id: e.post.id,
				validate_on_submit: !0
			}, (e => !(!e.document || !e.document.length))(e) ? (e => ({
				text: null,
				richtext_json: JSON.stringify({
					document: e.document
				})
			}))(e) : (e => ({
				text: e.markdown,
				return_rtjson: !0
			}))(e));
			var h = (e, t) => Object(c.b)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(p.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: a.bb.POST,
					data: b(t)
				}).then(m.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/actions/postCreation/constants.ts"),
				I = s("./src/reddit/actions/postCreation/general.ts");
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			}));
			const P = Object(n.a)(_.m),
				w = Object(n.a)(_.n),
				k = Object(n.a)(_.z),
				S = Object(n.a)(_.F),
				T = Object(n.a)(_.G),
				N = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o(),
						a = Object(y.J)(i, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(g.d)(e, "edit")(i)) : Object(f.b)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = E.h.RICH_TEXT,
						p = "";
					c.type === C.n.TEXT ? (l = E.h.MARKDOWN, p = c.content) : c.type === C.n.RTJSON && (p = (l = c.rteMode || E.h.RICH_TEXT) === E.h.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: d,
						postContent: p,
						postId: e
					}))
				}, M = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const c = s(),
						{
							post: d
						} = e,
						l = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					v.r(s(), Object(I.o)(l)), t(k(d.id));
					const p = await h(a(), e),
						m = !1 === p.body.success;
					if (t(P(d.id)), p.ok && !m) {
						t(Object(i.e)({
							kind: j.b.SuccessCommunity,
							text: Object(o.a)(c.user.language, "postCreation.editing.success")
						})), t(T(d.id));
						const e = Object(O.a)(p.body);
						t(Object(r.E)({
							[d.id]: e
						}))
					} else t(w(p.error))
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/comment/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/selectors/moderatingComments.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/helpers.tsx"),
				I = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				P = s.n(I);
			var w = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(_.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", P.a),
				k = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				R = s.n(M);
			s.d(t, "b", (function() {
				return A
			})), s.d(t, "a", (function() {
				return U
			}));
			var F = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const A = l.a.wrapped(h.c, "RestrictedButton", R.a),
				L = l.a.wrapped(y.a, "Approve", R.a),
				B = l.a.wrapped(k.a, "Lock", R.a),
				D = l.a.wrapped(S.a, "Remove", R.a),
				W = l.a.wrapped(T.a, "Spam", R.a),
				G = l.a.wrapped(N.a, "Show", R.a),
				U = l.a.wrapped(w, "DistinguishShield", R.a),
				V = Object(O.t)(),
				H = e => "Distinguish--Dropdown--".concat(e),
				J = Object(a.c)({
					currentUser: j.i,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(v.a)(e, {
							commentId: s.id
						})
					},
					isDistinguishDropdownOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(E.b)(H(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(O.g)(e, t) || Object(C.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: O.O
				}),
				X = Object(i.b)(J, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(p.H)(s.id)),
						onDistinguishComment: (t, o) => e(Object(p.S)(s.id, t, o)),
						onLockComment: () => e(Object(p.X)(s.id)),
						onRemoveComment: () => e(Object(p.cb)(s.id, !1)),
						onSpamComment: () => e(Object(p.cb)(s.id, !0)),
						onShowComment: () => e(Object(p.Y)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(m.g)({
							tooltipId: H(s.id)
						}))
					}
				});
			t.c = V(X(l.a.wrapped(Object(x.b)(e => {
				var {
					className: t,
					comment: s,
					currentUser: n,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					language: l,
					moderatorPermissions: p,
					modModeEnabled: m,
					onApproveComment: h,
					onDistinguishComment: x,
					onLockComment: O,
					onRemoveComment: v,
					onShowComment: C,
					onSpamComment: E,
					onToggleDistinguishDropdown: j,
					sendEvent: y
				} = e, _ = F(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "language", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const I = Object(g.a)(p),
					P = Object(b.b)(s),
					w = s.isApproved && P,
					k = !!n && n.isEmployee,
					S = !s.isRemoved,
					T = a,
					N = e => y(Object(f.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || P) && r.a.createElement(A, {
					text: w ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						h(), N("approve")
					}
				}, r.a.createElement(L, null)), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
					text: s.bannedBy === d.k ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						v(), s.bannedBy === d.k ? N("confirm_remove") : N("remove")
					}
				}, r.a.createElement(D, null)), r.a.createElement(A, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), N("spam")
					}
				}, r.a.createElement(W, null))), r.a.createElement(A, {
					text: s.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						O(), N(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(B, null)), i && !k && !s.bannedBy && r.a.createElement(A, {
					className: Object(c.a)({
						[R.a.selected]: _.isDistinguishDropdownOpen
					}),
					onClick: () => {
						N("mod_distinguish_menu"), j()
					}
				}, r.a.createElement(U, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: _.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: k,
					isUserMod: I,
					onDistinguishComment: x,
					sendEventWithName: N,
					tooltipId: H(s.id)
				})), T && r.a.createElement(A, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						C()
					}
				}, r.a.createElement(G, null)))
			}), "CommentModToolsFlatlist", R.a)))
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				IconText: "_6cNM5NdF82ASM5hiBVNN5",
				iconText: "_6cNM5NdF82ASM5hiBVNN5",
				Animate: "_3j98tX1WZapEArV-4rmJe5",
				animate: "_3j98tX1WZapEArV-4rmJe5",
				top: "_3Dr1MoYY5Yv4YhbQFFcks0",
				bottom: "_1GRYNQhMsR-00cWDJcE3UJ",
				bigCircle: "_85rqvRijdIsn3s0j-gUaw",
				midCircle: "RS1g6Gd_W67wwWKSteEB1",
				smallCircle: "lRlGcfTzZ7njZnIUyvhGH",
				play: "_3Kxa8oHGuT_QpP4zIN5jrV",
				blinker: "_20WvB_9deo7bJVi4af1dSS"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/selectors/experiments/chatPost.ts"),
				p = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				m = s.n(p);
			const u = .1,
				b = Object(a.c)({
					isChatPost: l.e,
					isChatPostExperiment: l.d
				}),
				h = Object(i.b)(b, e => ({
					sendChatPostExposureEvent: (t, s) => e((e, o) => Object(l.g)(o(), t, s))
				}));
			class x extends r.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= u ? this.state.visible || (this.setState({
							visible: !0
						}), this.sendChatPostExposureEvent()) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: null
					}
				}
				sendChatPostExposureEvent() {
					const {
						isChatPost: e,
						isMod: t,
						sendChatPostExposureEvent: s
					} = this.props;
					s(e, t)
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t,
						isChatPostExperiment: s
					} = this.props, n = s && (null === e || e);
					return t ? r.a.createElement(o.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, s ? r.a.createElement("div", {
						className: Object(c.a)(m.a.Icon, this.props.className)
					}, r.a.createElement("span", {
						className: Object(c.a)(m.a.Animate, m.a.top, {
							[m.a.play]: n
						})
					}, r.a.createElement("span", {
						className: m.a.bigCircle
					}), r.a.createElement("span", {
						className: m.a.midCircle
					}), r.a.createElement("span", {
						className: m.a.smallCircle
					})), r.a.createElement("p", {
						className: m.a.IconText
					}, Object(d.c)("Live Discussion")), r.a.createElement("span", {
						className: Object(c.a)(m.a.Animate, m.a.bottom, {
							[m.a.play]: n
						})
					}, r.a.createElement("span", {
						className: m.a.bigCircle
					}), r.a.createElement("span", {
						className: m.a.midCircle
					}), r.a.createElement("span", {
						className: m.a.smallCircle
					}))) : r.a.createElement("span", null)) : null
				}
			}
			t.a = h(x)
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/constants/componentTestIds.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				h = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				x = s("./src/reddit/selectors/experiments/chatPost.ts"),
				O = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				g = s("./src/reddit/selectors/experiments/postSeo.ts"),
				f = s("./src/reddit/selectors/monthsToMinutes.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/CommentsLink/index.m.less"),
				j = s.n(E);
			const y = Object(r.b)(() => Object(a.c)({
					isChatPostExperiment: x.d,
					isPostSEOEligible: g.d,
					language: C.S,
					m2mHomeRedirectVariant: O.f,
					postPermalink: v.I,
					shouldOpenPostInNewTab: C.W,
					shouldShowHomeUpsell: f.y
				})),
				_ = e => {
					let t, {
						type: s,
						numComments: r,
						isChatPostExperiment: i,
						language: a,
						modModeEnabled: d,
						hasModPostPerms: l,
						shouldShowIcon: m,
						shouldShowText: b,
						text: x
					} = e;
					return t = x || (s === u.g.Compact || d && l || i ? Object(p.b)(r) : 0 === r ? Object(c.a)(a, "posts.comment.verb") : Object(c.c)(a, "posts.comments.noun", r, {
						count: Object(p.b)(r)
					})), n.a.createElement(o.Fragment, null, m && n.a.createElement(h.a, {
						className: j.a.commentIcon,
						role: "presentation"
					}), b && n.a.createElement("span", {
						className: j.a.text
					}, t))
				};
			t.a = y(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPostExperiment: o,
					isCommentPermalink: r,
					isCommentsPage: a,
					isOverlay: c,
					isPostSEOEligible: p,
					language: u,
					m2mHomeRedirectVariant: h,
					modModeEnabled: x,
					numComments: g,
					onClick: f,
					postPermalink: v,
					shouldOpenPostInNewTab: C,
					shouldShowHomeUpsell: E,
					shouldShowIcon: y = !0,
					shouldShowText: I = !0,
					text: P,
					type: w
				} = e, k = a && !r && !p && !Object(O.b)(h) && !E, S = r && !c, T = n.a.createElement(_, {
					type: w,
					numComments: g,
					isChatPostExperiment: o,
					language: u,
					modModeEnabled: x,
					hasModPostPerms: s,
					shouldShowIcon: y,
					shouldShowText: I,
					text: P
				});
				return k ? n.a.createElement("div", {
					className: Object(d.a)(j.a.commentsLink, j.a.defaultCursorWrapper, t),
					onClick: f
				}, T) : n.a.createElement(i.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": m.a,
					className: Object(d.a)(j.a.commentsLink, j.a.link, t),
					target: C ? "_blank" : void 0,
					to: S ? Object(b.b)(v) : Object(l.a)(v, !0),
					onClick: f
				}, T)
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(m);
			const b = i.a.div("DistinguishWrapper", u.a),
				h = i.a.wrapped(p.a, "Inline", u.a),
				x = i.a.wrapped(d.a, "RadioOff", u.a),
				O = i.a.wrapped(l.a, "RadioOn", u.a),
				g = e => n.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? n.a.createElement(O, null) : n.a.createElement(x, null), e.text),
				f = i.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: o,
						isUserEmployee: i,
						isUserMod: a,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: p,
						onDistinguishComment: m
					} = e;
					return n.a.createElement(b, {
						className: t,
						style: s
					}, n.a.createElement(g, {
						onClick: () => m(r.B.NONE, null),
						selected: !d && !o,
						text: Object(c.c)("Undistinguish")
					}), a && n.a.createElement(g, {
						onClick: () => m(r.B.MODERATOR, null),
						selected: d && !l,
						text: Object(c.c)("Distinguish as Mod")
					}), p && a && n.a.createElement(g, {
						onClick: () => m(r.B.MODERATOR, !0),
						selected: l,
						text: Object(c.c)("Distinguish as Mod and Sticky")
					}), i && n.a.createElement(g, {
						onClick: () => m(r.B.ADMIN, null),
						selected: o,
						text: Object(c.c)("Distinguish as Admin")
					}))
				}, "DistinguishOptions", u.a);
			var v = Object(a.a)(f);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: l,
					sendEventWithName: p,
					tooltipId: m
				} = e;
				return n.a.createElement("div", {
					className: t,
					id: m
				}, n.a.createElement(v, {
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: m,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.B.MODERATOR ? p(!c && t ? "distinguish_sticky" : "distinguish") : e === r.B.ADMIN ? p("admin_distinguish") : a && e !== r.B.MODERATOR ? p("undistinguish") : s && e !== r.B.ADMIN && p("admin_undistinguish"), c && !t && p("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.m.less": function(e, t, s) {
			e.exports = {
				responsiveRow: "_3tRpmsTw--cwH6_MAO3ZOm"
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/components/Flatlist/ResponsiveRow.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					flatlistItem: t,
					isLoggedIn: s,
					isUserOp: o,
					noBreakpoints: c
				} = e, m = p(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return n.a.createElement(a.a, l({}, m, {
					className: c ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: o
					}))
				}))
			}
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				hideIfVwSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				FirstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				firstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				LoggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				loggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				LoggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				loggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				OpVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				opVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				EditingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				editingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				SecondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				secondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				AwardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				awardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				HideIfVWLarger: "_1k3nXWGGz2NdPr8dg49Tbs",
				hideIfVwLarger: "_1k3nXWGGz2NdPr8dg49Tbs"
			}
		},
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE"
				}(o || (o = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return p
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(n || (n = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const l = {
					[d.a.EditFlair]: n.Editing,
					[d.a.EditPost]: n.Editing,
					[d.a.Gild]: n.Awarding,
					[d.a.Hide]: n.First,
					[d.a.PostOverflowMenu]: n.First,
					[d.a.Report]: n.First,
					[d.a.Save]: n.First,
					[d.a.Share]: n.Second
				},
				p = e => {
					return (e => {
						const t = c.a[e.type],
							s = c.a[e.group],
							o = c.a[e.groupVariant];
						return Object(i.a)(t, s, o)
					})({
						type: e.breakpointType || o.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3-miAEojrCvx_4FQ8x3P-s",
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				large: "_26YkhAfncIjLM3iT6Gbcvt"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/timezone/index.ts"),
				m = s("./src/reddit/actions/gold/modals.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				O = s("./src/reddit/actions/reportFlow.ts"),
				g = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				f = s("./src/reddit/components/CommentsLink/index.tsx"),
				v = s("./src/higherOrderComponents/makeAsync.tsx"),
				C = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/economics.ts");
			const j = Object(v.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsPostFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var y = Object(r.b)(() => Object(i.c)({
					featureEnabled: C.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.posts.models[t.contentId];
						return !!s && Object(E.i)(e, {
							contentId: s.id,
							subredditId: t.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? n.a.createElement(j, e) : null
				})),
				_ = s("./src/reddit/i18n/components.tsx"),
				I = s("./src/reddit/constants/colors.ts"),
				P = s("./src/reddit/components/ContentTooltip/index.tsx"),
				w = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				k = s.n(w);
			class S extends n.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return n.a.createElement(P.a, {
						caretColor: {
							top: I.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, n.a.createElement("div", {
						className: k.a.container
					}, n.a.createElement("div", {
						className: k.a.newBadge
					}, n.a.createElement(_.c, null, "New")), n.a.createElement("div", {
						className: k.a.text
					}, n.a.createElement(_.c, null, "Try giving a new Appreciation Award"))))
				}
			}
			var T = S,
				N = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				R = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				F = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				A = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				B = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				D = s("./src/reddit/components/ShareMenu/index.tsx"),
				W = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				U = s("./src/reddit/constants/postLayout.ts"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				J = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				X = s("./src/reddit/i18n/utils.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				Q = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Y = s("./src/reddit/helpers/trackers/modTools.ts"),
				Z = s("./src/reddit/helpers/trackers/post.ts"),
				q = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				$ = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Report/index.tsx"),
				te = s("./src/reddit/icons/fonts/Share/index.tsx"),
				se = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				oe = s("./src/reddit/models/PostCreationForm/index.ts"),
				ne = s("./src/reddit/models/User/index.ts"),
				re = s("./src/reddit/components/Flatlist/constants.ts"),
				ie = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				ae = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ce = s("./src/reddit/actions/postCollection/index.ts"),
				de = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				le = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				pe = s("./src/reddit/selectors/activeModalId.ts"),
				me = s("./src/reddit/components/Flatlist/index.m.less"),
				ue = s.n(me);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return ve
			})), s.d(t, "a", (function() {
				return Ce
			})), s.d(t, "d", (function() {
				return Ie
			}));
			var he = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			let xe, Oe;
			const ge = l.a.button("ShareButton", ue.a),
				fe = l.a.wrapped(D.a, "ShareMenu", ue.a),
				ve = Object(d.a)(e => {
					var {
						className: t
					} = e, s = he(e, ["className"]);
					return n.a.createElement($.a, be({}, s, {
						className: Object(c.a)(ue.a.modActionsIcon, t),
						style: {
							color: Object(J.a)(Object(H.a)(s), se.a.actionIcon, se.b.actionIcon)
						}
					}))
				}),
				Ce = e => n.a.createElement("div", be({}, e, {
					className: Object(c.a)(ue.a.flatlistSeparator, e.className)
				})),
				Ee = Object(V.t)({
					currentProfileName: V.h,
					isCommentPermalink: V.v,
					isCommentsPage: V.w,
					isProfilePostListing: V.I,
					pageLayer: e => e
				}),
				je = Object(i.c)({
					activeModalId: pe.a,
					layout: V.M,
					userIsOp: K.jb,
					subreddit: V.q
				}),
				ye = Object(r.b)(je, (e, t) => {
					let {
						post: o,
						isOverlay: n,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ce.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(b.G)(o.postId)),
						onHide: t => e(Object(b.K)(o.postId, !o.hidden, n, !0)),
						onReportClick: () => e(Object(O.j)(o.postId, n)),
						onEdit: () => {
							const t = !n && !r;
							e(Object(h.a)(o.postId, t))
						},
						onFlairPost: () => e(Object(u.i)(Object(F.b)(o.postId, n))),
						onGildClick: () => e(Object(m.d)(o.postId, n)),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: n
							} = t;
							return e(Object(x.h)({
								post: o,
								selectedTemplateId: s,
								previewFlair: n
							}))
						},
						toggleEditStartTimeModal: async () => {
							xe && Oe || ([xe, Oe] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/events.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(oe.s)(o.postId, n, oe.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							Oe && e(Oe(o.id, t))
						}
					}
				});
			class _e extends n.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: o
						} = this.props;
						Object(z.d)(z.a.GildingFlow), e();
						const {
							clickGildEvent: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						o(n(t.id))
					}, this.onToggleCurrentModal = () => {
						this.props.activeModalId && this.props.onToggleModal(this.props.activeModalId)
					}, this.onToggleCollectionListModal = () => {
						const {
							isOverlay: e,
							post: t
						} = this.props, s = Object(oe.t)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: o
						} = this.props;
						o(Object(Z.f)(s.id, e, t ? "post_detail" : "post"))
					}, this.onSaveClick = () => {
						this.props.onToggleSave(), this.sendEventWithName(this.props.post.saved ? "unsave" : "save")
					}, this.onHideClick = () => {
						this.props.onHide(!!this.props.post.hidden), this.sendEventWithName(this.props.post.hidden ? "unhide" : "hide")
					}, this.onReportClick = () => {
						this.props.onReportClick(), this.sendEventWithName("report")
					}
				}
				render() {
					const {
						activeModalId: e,
						addEventStartTime: t,
						className: s,
						currentProfileName: o,
						currentUser: r,
						hasModFlairPerms: i,
						hasModPostPerms: d,
						isCommentPermalink: l,
						isCommentsPage: m,
						isLargePost: u,
						isOverlay: b,
						isProfilePostListing: h,
						isSticky: x,
						language: O,
						layout: v,
						modModeEnabled: C,
						onFlairChanged: E,
						onIgnoreReports: j,
						onOpenReportsDropdown: I,
						pageLayer: P,
						post: w,
						sendEvent: k,
						showEditFlair: S,
						showEditPost: D,
						subreddit: W,
						toggleEditStartTimeModal: V,
						tooltipType: H,
						userIsOp: J
					} = this.props, K = !!r && Object(ne.f)(r) === w.author, z = Object(ae.a)("View--Reports", w.id, H), $ = Object(ae.a)("View--GiveAward", w.id, H), se = Object(M.c)(w), ce = Ie("-mod-actions-menu", w.id, b, x), pe = Object(M.a)(w), me = w.postId, be = v === U.g.Large, he = !m && be || d && C, Oe = !(b || m || l), Ce = r && w.isGildable;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(c.a)(ue.a.flatlistContainer, s)
					}, n.a.createElement(f.a, {
						className: ue.a.commentsLink,
						hasModPostPerms: d,
						isCommentsPage: m,
						isCommentPermalink: l,
						isOverlay: b,
						postId: w.id,
						modModeEnabled: C,
						numComments: w.numComments
					}), W && r && !J && !w.isNSFW && n.a.createElement(y, {
						className: ue.a.supportButton,
						contentId: w.id,
						inPostFeed: Oe,
						modModeEnabled: d && C,
						renderInPortal: Oe,
						subredditId: W.id,
						targetName: w.author
					}), Ce && n.a.createElement(n.a.Fragment, null, n.a.createElement(Q.a, {
						displayText: Object(X.c)("Give Award"),
						flatlistItem: re.a.Gild,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.handleGild,
						skipRoleAttr: !0
					}, n.a.createElement(L.f, {
						id: $
					})), n.a.createElement(T, {
						postOrComment: w,
						tooltipId: $
					})), n.a.createElement(fe, {
						className: Object(ie.b)({
							flatlistItem: re.a.Share,
							isLoggedIn: !!r,
							isUserOp: J
						}),
						dropdownId: Ie("-share-menu", w.id, b, x),
						permalink: w.permalink,
						post: w,
						sendEventWithName: this.sendEventWithName,
						subreddit: W
					}, n.a.createElement(ge, {
						"data-click-id": "share"
					}, n.a.createElement(te.a, {
						className: ue.a.shareIcon
					}), n.a.createElement("span", {
						className: ue.a.shareText
					}, n.a.createElement(_.c, null, "share")))), D && !he && n.a.createElement(Q.a, {
						displayText: Object(X.c)("Edit post"),
						flatlistItem: re.a.EditPost,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, n.a.createElement(L.b, null)), (!d || !C) && n.a.createElement(Q.a, {
						displayText: Object(a.a)(O, "posts.".concat(w.saved ? "unsave" : "save")),
						flatlistItem: re.a.Save,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.onSaveClick,
						skipRoleAttr: !0
					}, w.saved ? n.a.createElement(L.e, null) : n.a.createElement(L.d, null)), !w.isSponsored && !he && n.a.createElement(Q.a, {
						displayText: Object(a.a)(O, "posts.".concat(w.hidden ? "unhide" : "hide")),
						flatlistItem: re.a.Hide,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.onHideClick,
						skipRoleAttr: !0
					}, n.a.createElement(L.a, null)), !K && !w.isSponsored && !he && n.a.createElement(Q.a, {
						displayText: Object(X.c)("report"),
						flatlistItem: re.a.Report,
						isLoggedIn: !!r,
						isUserOp: J,
						onClick: this.onReportClick,
						skipRoleAttr: !0
					}, n.a.createElement(L.c, null)), n.a.createElement(R.a, {
						isOverlay: b,
						layout: v,
						language: O,
						modModeEnabled: C,
						post: w,
						sendEvent: k
					}), d && n.a.createElement(N.a, {
						dropdownId: ce,
						onClick: () => k(Object(Z.f)(w.id, "post_mod_action_menu"))
					}, n.a.createElement(ve, null), n.a.createElement(A.a, {
						canEditFlair: i && !!S,
						hasModPostPerms: d,
						isOverlay: !!b,
						isPostAuthor: K,
						language: O,
						modModeEnabled: C,
						post: w,
						tooltipId: ce
					})), d && se && !C && n.a.createElement(B.c, {
						text: "".concat(pe),
						onClick: () => {
							I(z), k(Object(Z.f)(w.id, "post_report_menu"))
						},
						id: z
					}, n.a.createElement(G.a, {
						model: w,
						onIgnoreReports: () => {
							j(), k(Object(Y.j)(w.ignoreReports ? "restore_reports" : "ignore_reports", w.id))
						},
						tooltipId: z
					}), w.ignoreReports ? n.a.createElement(q.a, null) : n.a.createElement(ee.a, null)), (r || !w.isSponsored) && n.a.createElement(L.g, {
						currentProfileName: o,
						dropdownId: Ie("-overflow-menu", w.id, b, x),
						isCommentsPage: m,
						isFixed: x,
						isOverlay: !!b,
						isProfilePostListing: h,
						layout: v,
						modModeWithPost: C && d,
						pageLayer: P,
						permalink: w.permalink,
						postId: me,
						sendEvent: k,
						showEditPost: !!D,
						showEditFlair: !!S,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: V,
						toggleEditStartTimeModal: V
					}), e === Object(oe.t)(w.id, b) && n.a.createElement(de.a, {
						subredditId: w.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: w.id,
						onSelectCollection: this.addPostToCollection,
						titleText: Object(X.c)("Add post to a collection"),
						onItemHoverActionText: Object(X.c)("add"),
						isOverlay: b
					}), e === Object(oe.s)(w.id, b, oe.j.POST_OVERFLOW_MENU) && xe && n.a.createElement(xe, {
						onChange: t,
						onClose: V,
						schedule: Object(p.c)(w),
						shouldShowDeleteButton: !1
					}), e === Object(oe.u)(w.id, b) && n.a.createElement(le.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: w.belongsTo.id
					}), e === Object(F.b)(w.id, b) && n.a.createElement(F.a, {
						flairs: w.flair,
						subredditId: w.belongsTo.id,
						modalId: Object(F.b)(w.id, b),
						onFlairChanged: E
					}), n.a.createElement("div", {
						className: ue.a.flexSpacer
					})), Oe && n.a.createElement(g.a, {
						className: Object(c.a)(ue.a.liveDiscussionWrapper, {
							[ue.a.large]: u
						}),
						isMod: d,
						postId: w.postId
					}))
				}
			}
			const Ie = (e, t, s, o) => {
				let n = t;
				return s && (n += "-overlay"), o && (n += "-sticky"), n += e
			};
			t.c = Ee(ye(Object(W.b)(_e)))
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(o.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb"
			}
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				c = s.n(a),
				d = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				p = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const m = Object(i.c)({
				consumers: e => e.jsApi
			});
			class u extends o.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: o
							} = t,
							n = p(t, ["className", "consumers"]);
						l.a.publish(d.a, n, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? n.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && n.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(r.b)(m, {})(u),
				h = s("./src/reddit/selectors/comments.ts"),
				x = s("./src/reddit/selectors/subreddit.ts");
			const O = (e, t) => {
				const s = Object(h.n)(e, t),
					o = Object(x.J)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var g = Object(r.b)(() => Object(i.a)(O, h.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => n.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					o = Object(x.J)(e, t);
				return {
					comment: s,
					isModerator: !(!o || !o.name) && !!e.moderatingSubreddits[o.name],
					subredditOrProfile: o
				}
			};
			var v = Object(r.b)(() => Object(i.a)(f, e => e))(e => n.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var C = Object(r.b)(() => Object(i.c)({
					subreddit: x.S
				}))(e => n.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				E = s("./src/reddit/selectors/posts.ts");
			var j = Object(r.b)(() => Object(i.c)({
				post: E.J,
				subredditOrProfile: E.U,
				isModerator: (e, t) => {
					const s = Object(E.U)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => n.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var y = Object(r.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(E.U)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(E.U)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => n.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var _ = Object(r.b)(() => Object(i.c)({
				post: E.J,
				subredditOrProfile: E.U,
				isModerator: (e, t) => {
					const s = Object(E.U)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => n.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var I = Object(r.b)(() => Object(i.c)({
				subreddit: x.S
			}))(e => n.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var P = Object(r.b)(() => Object(i.c)({
				subredditOrProfile: (e, t) => Object(x.M)(e, {
					identifier: t
				})
			}))(e => n.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var w = Object(r.b)(() => Object(i.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(x.S)(e, {
						subredditId: s
					}) : null
				}
			}))(e => n.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "h", (function() {
				return P
			})), s.d(t, "i", (function() {
				return w
			}))
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const p = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				m = Object(r.b)(p, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.g)({
							tooltipId: s
						}))
					}
				}),
				u = () => null;
			t.a = m(e => n.a.createElement("div", {
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? u : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(c.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
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
				return p
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
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
					[a.a.Approve]: n.Approve,
					[a.a.Remove]: n.Remove,
					[a.a.Spam]: n.Spam,
					[a.a.Flair]: n.Flair
				},
				p = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						o = d.a[t],
						n = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(i.a)(s, o, n)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				O = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				E = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				I = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				k = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(k);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(w.b)({
						breakpointType: w.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(r.b)(() => Object(i.c)({
					activeModalId: y.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(I.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(_.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(p.l)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(m.g)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(p.F)(s.id, !1)),
						onSpamPost: () => e(Object(p.F)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = N(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: r,
					language: i,
					layout: l,
					moderatorPermissions: p,
					modModeEnabled: m,
					onApprovePost: y,
					onFlairPost: _,
					onRemovePost: I,
					onSpamPost: w,
					post: k,
					sendEvent: N,
					showIconsOnly: M
				} = e, R = Object(g.a)(p), F = Object(b.b)(k), A = k.approvedBy && F, L = Object(h.b)(k.id, r), B = R && m && !k.isSponsored, D = t && m;
				let W, G, U;
				M || (W = A ? Object(a.a)(i, "posts.reapprove") : k.approvedBy ? Object(a.a)(i, "posts.approved") : Object(a.a)(i, "posts.approve"), G = k.isRemoved ? k.bannedBy === d.k ? Object(a.a)(i, "modTools.confirmRemoval") : Object(a.a)(i, "posts.removed.text") : Object(a.a)(i, "posts.remove"), U = k.isSpam ? Object(a.a)(i, "posts.spammed") : Object(a.a)(i, "posts.spam"));
				const V = !r && l === O.g.Compact;
				return n.a.createElement("div", {
					className: Object(c.a)(S.a.container, s)
				}, B && n.a.createElement(o.Fragment, null, n.a.createElement(x.b, {
					className: T(P.a.Approve, V),
					key: "approveButton",
					text: W,
					disabled: !!k.approvedBy && !F,
					onClick: () => {
						y(), N(Object(f.f)(k.id, "approve"))
					}
				}, n.a.createElement(v.a, null)), n.a.createElement(x.d, {
					className: T(P.a.Remove, V),
					key: "removeButton",
					text: G,
					disabled: k.isRemoved && k.bannedBy !== d.k,
					onClick: () => {
						I(), k.isRemoved && k.bannedBy === d.k ? N(Object(f.f)(k.id, "confirm_remove")) : N(Object(f.f)(k.id, "remove"))
					}
				}, n.a.createElement(C.a, null)), n.a.createElement(x.d, {
					className: T(P.a.Spam, V),
					key: "removeSpamButton",
					text: U,
					disabled: k.isSpam,
					onClick: () => {
						w(), N(Object(f.f)(k.id, "spam"))
					}
				}, n.a.createElement(E.a, null))), D && n.a.createElement(x.c, {
					className: T(P.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						_(L)(), N(Object(f.f)(k.id, "post_flair_picker"))
					}
				}, n.a.createElement(j.a, null)), n.a.createElement(u.f, {
					postId: k.id
				}))
			})
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: c,
					redditStyle: m,
					theme: u
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				c = s("./src/reddit/components/GildModal/Loader.tsx"),
				d = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/gild.ts"),
				m = s("./src/reddit/selectors/video.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				h = s("./src/reddit/components/PostContainer/index.m.less"),
				x = s.n(h),
				O = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const v = O.a.div("WrappedPost", x.a),
				C = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.a)(e, {
							postId: s.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: s,
							post: o
						} = t;
						const n = Object(a.b)(o.postId, s);
						return Object(p.c)(e, n)
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.e)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.c)(e, {
							postId: s.id
						})
					}
				}),
				E = Object(d.a)(C),
				j = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							afterClickTracking: t,
							buffering: s,
							children: o,
							className: r,
							continuousViewingStartedAt: a,
							gildModalIsOpen: d,
							makePostContainerId: p,
							playing: m,
							post: b,
							onClick: h,
							onPostContentClick: x,
							onPostViewable: O,
							isOverlay: C
						} = e,
						E = f(e, ["afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						y = n.a.createElement(v, g({}, E, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (t(() => h && h(e, b))(e), x && j(e) && x(e, b))
							},
							className: Object(u.a)(r, "Post ".concat(b.id), {
								promotedlink: b.isSponsored
							}),
							id: p ? p(b.id) : b.id,
							tabIndex: -1
						}), o, d && n.a.createElement(c.a, null)),
						_ = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || _ ? n.a.createElement(i.a, {
						onViewable: e => O(b, e),
						children: y,
						trackVideoMetrics: _ && !s && m,
						continuousViewingStartedAt: a
					}) : y
				}
			}
			t.a = E(Object(b.c)(y))
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1IZotn_IQQ1fgtUjaFYbkd",
				onHoverActionText: "_1Zlk1VrZ8puYZy5lJOfz--",
				Container: "_1IZotn_IQQ1fgtUjaFYbkd",
				PostTitle: "_1hzDym_NpIlizkTDXc_rQj",
				postTitle: "_1hzDym_NpIlizkTDXc_rQj",
				MetaLine: "_67JuJTdFwIJPLPDkyPX-f",
				metaLine: "_67JuJTdFwIJPLPDkyPX-f",
				SubredditName: "_88OYON0K3w_tpnmCSWlUX",
				subredditName: "_88OYON0K3w_tpnmCSWlUX",
				InfoSpan: "_3DFfW-OG-MvCLiiEN18mpq",
				infoSpan: "_3DFfW-OG-MvCLiiEN18mpq"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				wrapper: "_1QvpnsvD_e--dvDTEcz7_w",
				TopRow: "vuQEtla32r0kemmh11Hov",
				topRow: "vuQEtla32r0kemmh11Hov",
				TitleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				titleRow: "_1eSyFPTFSsfyp8BVxs83PB",
				DetailsContainer: "_87UrrqUro4oVpXFAElZUX",
				detailsContainer: "_87UrrqUro4oVpXFAElZUX",
				ButtonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				buttonRow: "_1CUOht5hsM0AF9T3Ox1yos",
				CloseWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				closeWrapper: "_3OsXrjEdHgK1wJBfPX6IhR",
				Close: "_1TaKYhB80ExuTPoLaQZMRE",
				close: "_1TaKYhB80ExuTPoLaQZMRE",
				Empty: "_20K7F6rAgXGH5z83v7Ifiv",
				empty: "_20K7F6rAgXGH5z83v7Ifiv",
				EmptyImage: "_2eLeResic3Gc77W_edgNGt",
				emptyImage: "_2eLeResic3Gc77W_edgNGt",
				EmptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				emptyText: "_3t6VBoBsR8CGQvaPLHPjmW",
				FilterWrapper: "pKfhphFBuya82DYP2Q90X",
				filterWrapper: "pKfhphFBuya82DYP2Q90X",
				FilterInput: "_3W5cary86KmYWrVgEpGKPb",
				filterInput: "_3W5cary86KmYWrVgEpGKPb",
				SearchIcon: "_9T_dguVcd795c_vOyl9s4",
				searchIcon: "_9T_dguVcd795c_vOyl9s4",
				PlusIcon: "hfmgzmXCLe3hvSyZad9WP",
				plusIcon: "hfmgzmXCLe3hvSyZad9WP",
				CreateCollectionButton: "_34_h0zRV3AgFr_0sh99pKz",
				createCollectionButton: "_34_h0zRV3AgFr_0sh99pKz"
			}
		},
		"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				p = s("./src/reddit/actions/postCreation/general.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/models/PostCreationForm/index.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/lib/timeAgo/index.ts"),
				y = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				_ = s("./src/reddit/helpers/name/index.ts"),
				I = s("./src/reddit/models/Subreddit/index.ts"),
				P = s("./src/reddit/models/User/index.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(k),
				T = s("./src/lib/lessComponent.tsx");
			const N = T.a.div("Container", S.a),
				M = T.a.h2("PostTitle", S.a),
				R = T.a.div("MetaLine", S.a),
				F = T.a.span("SubredditName", S.a),
				A = T.a.time("InfoSpan", S.a),
				L = Object(c.c)({
					subreddit: (e, t) => {
						let {
							collection: {
								subredditId: s
							}
						} = t;
						return s ? Object(w.S)(e, {
							subredditId: s
						}) : void 0
					},
					user: E.i
				});
			class B extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.collection.id)
					}
				}
				render() {
					const {
						collection: e,
						language: t,
						subreddit: s,
						user: n,
						onHoverActionText: r
					} = this.props, a = s && Object(I.d)(s) && n ? Object(_.c)(Object(P.f)(n)) : s ? s.displayText : "", c = e.postIds.length;
					return i.a.createElement(N, {
						onClick: this.onClick,
						className: S.a.container
					}, i.a.createElement(M, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(R, {
						"data-redditstyle": !0
					}, a && i.a.createElement(F, {
						"data-redditstyle": !0
					}, a), a && i.a.createElement(y.b, null), i.a.createElement(A, null, Object(o.c)(t, "postCreation.postsCount", c)), i.a.createElement(y.b, null), i.a.createElement(A, null, Object(o.a)(t, "postCreation.collections.creationTime", {
						time: Object(j.d)(t, e.createdAtUTC)
					}))), r && i.a.createElement("div", {
						className: S.a.onHoverActionText
					}, i.a.createElement("span", null, r)))
				}
			}
			var D = Object(a.b)(L)(B),
				W = s("./src/reddit/helpers/trackers/postCollection.ts"),
				G = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				U = s.n(G);
			const V = Object(o.e)("postCreation.collections.collectionsListEmptyText"),
				H = Object(o.e)("postCreation.collections.noCollectionMatchingFilter"),
				J = Object(o.e)("postCreation.collections.filterPlaceholder"),
				X = Object(o.e)("postCreation.collections.collectionsListTitle"),
				K = Object(o.e)("postCreation.collections.createCollection"),
				Q = "".concat(n.a.assetPath, "/img/snoo-drafts.png"),
				z = T.a.div("TopRow", U.a),
				Y = T.a.div("TitleRow", U.a),
				Z = T.a.div("DetailsContainer", U.a),
				q = T.a.wrapped(f.a, "ButtonRow", U.a),
				$ = T.a.div("CloseWrapper", U.a),
				ee = T.a.wrapped(x.a, "Close", U.a),
				te = T.a.div("Empty", U.a),
				se = T.a.img("EmptyImage", U.a),
				oe = T.a.p("EmptyText", U.a),
				ne = T.a.div("FilterWrapper", U.a),
				re = T.a.wrapped(h.a, "FilterInput", U.a),
				ie = T.a.wrapped(g.a, "SearchIcon", U.a),
				ae = T.a.wrapped(O.a, "PlusIcon", U.a),
				ce = T.a.wrapped(b.j, "CreateCollectionButton", U.a),
				de = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				le = Object(c.c)({
					collections: C.v,
					language: E.S
				}),
				pe = Object(a.b)(le, (e, t) => {
					let {
						postId: s,
						isOverlay: o
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = v.b;
							s && (t = Object(v.u)(s, !!o)), e(Object(p.y)(t))
						}
					}
				});
			class me extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(W.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(W.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(W.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(D, {
						key: e.id,
						collection: e,
						language: this.props.language,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(W.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(te, null, i.a.createElement(se, {
						src: Q
					}), i.a.createElement(oe, null, V(this.props.language)))
				}
				renderNoFilterMatches() {
					return i.a.createElement(te, null, i.a.createElement(oe, null, H(this.props.language)))
				}
				render() {
					const {
						collections: e,
						language: t,
						titleText: s
					} = this.props;
					let o;
					if (0 === e.length) o = this.renderNoCollections();
					else {
						const t = de(e, this.state.filterStr);
						o = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: U.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(z, null, i.a.createElement(Y, {
						"data-redditstyle": !0
					}, s || X(t), i.a.createElement($, {
						onClick: this.close
					}, i.a.createElement(ee, {
						"data-redditstyle": !0
					}))), i.a.createElement(ne, null, i.a.createElement(ie, null), i.a.createElement(re, {
						placeholder: J(t),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(Z, null, o), i.a.createElement(q, null, i.a.createElement(ce, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(ae, null), K(t))))
				}
			}
			const ue = Object(d.a)(pe(Object(m.b)(me)));
			t.a = ue
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_3vV_tKesULQ5WMGh38lX4b",
				container: "_3vV_tKesULQ5WMGh38lX4b",
				Content: "_11JSvybbRhcX_cfoagpne_",
				content: "_11JSvybbRhcX_cfoagpne_",
				TitleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				titleRow: "_3Ev4JRxdS9-3GTBR5M1yCP",
				Details: "_3Uw02TWwSQhLfCJkPsihqr",
				details: "_3Uw02TWwSQhLfCJkPsihqr",
				Footer: "_25MDqXgOCWDBjtAEBi2cmy",
				footer: "_25MDqXgOCWDBjtAEBi2cmy",
				CancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				cancelButton: "_2tLOIj2nClBaVRuMBIJE8X",
				CloseWrapper: "_GVnqGyX40oKfgIS56Q-k",
				closeWrapper: "_GVnqGyX40oKfgIS56Q-k",
				CloseIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				closeIcon: "_1GgoANMMbLQJ-gSefDJZuZ",
				Label: "_3QPFKpxsmu6j_gbiAuVgfW",
				label: "_3QPFKpxsmu6j_gbiAuVgfW",
				TitleInput: "ZEfw7a99aHsmkl4fx38l5",
				titleInput: "ZEfw7a99aHsmkl4fx38l5",
				AddCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				addCollectionIcon: "_30BNMMyQPTPvHEoL3-LXrM",
				PrimaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				primaryActionButton: "_22f_S1XUre_FujBgOgEHJe",
				LoadingIcon: "_3cD2qECfUUTwega16qDhBc",
				loadingIcon: "_3cD2qECfUUTwega16qDhBc",
				ErrorText: "GIQ2YnBHQtY1QM1yPEhCR",
				errorText: "GIQ2YnBHQtY1QM1yPEhCR"
			}
		},
		"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/index.tsx"),
				h = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				j = s.n(E),
				y = s("./src/lib/lessComponent.tsx");
			const _ = Object(a.e)("postCreation.cancel"),
				I = Object(a.e)("postCreation.create"),
				P = Object(a.e)("postCreation.save"),
				w = Object(a.e)("postCreation.collections.createCollection"),
				k = Object(a.e)("postCreation.collections.createModal.details"),
				S = Object(a.e)("postCreation.collections.createModal.giveATitle"),
				T = Object(a.e)("postCreation.collections.createModal.editTitle"),
				N = Object(a.e)("postCreation.collections.createModal.titlePlaceholderText"),
				M = y.a.div("Container", j.a),
				R = y.a.div("Content", j.a),
				F = y.a.div("TitleRow", j.a),
				A = y.a.div("Details", j.a),
				L = y.a.wrapped(p.e, "Footer", j.a),
				B = y.a.wrapped(u.i, "CancelButton", j.a),
				D = y.a.div("CloseWrapper", j.a),
				W = y.a.wrapped(g.a, "CloseIcon", j.a),
				G = y.a.label("Label", j.a),
				U = y.a.wrapped(h.a, "TitleInput", j.a),
				V = y.a.wrapped(O.a, "AddCollectionIcon", j.a),
				H = y.a.wrapped(u.f, "PrimaryActionButton", j.a),
				J = y.a.wrapped(x.a, "LoadingIcon", j.a),
				X = y.a.wrapped(b.b, "ErrorText", j.a),
				K = Object(i.c)({
					collection: v.q,
					error: v.c,
					isPending: v.g,
					language: C.S
				}),
				Q = Object(r.b)(K, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class z extends n.a.PureComponent {
				constructor(e) {
					super(e), this.onTitleChange = e => {
						this.setState({
							collectionTitle: e.target.value
						})
					}, this.onPrimaryButtonClick = async () => {
						const {
							collectionId: e,
							subredditId: t
						} = this.props, {
							collectionTitle: s
						} = this.state;
						if (e) {
							await this.props.onUpdate(s) && this.props.onCollectionUpdated && this.props.onCollectionUpdated()
						} else {
							const e = await this.props.onCreate(s, t);
							e && this.props.onCollectionCreated && this.props.onCollectionCreated(e)
						}
					}, this.onClose = () => {
						this.props.onCancel()
					};
					const {
						collection: t
					} = e;
					this.state = {
						collectionTitle: t ? t.title : ""
					}
				}
				render() {
					const {
						collectionId: e,
						error: t,
						isPending: s,
						language: o
					} = this.props, r = !e, i = !!this.state.collectionTitle.trim(), a = r ? I : P, c = r ? S : T;
					return n.a.createElement(M, null, n.a.createElement(D, {
						onClick: this.props.onCancel
					}, n.a.createElement(W, null)), n.a.createElement(R, null, r && n.a.createElement(n.a.Fragment, null, n.a.createElement(F, null, n.a.createElement(V, null), w(o)), n.a.createElement(A, null, k(o))), n.a.createElement(G, null, c(o), n.a.createElement(U, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: N(o),
						value: this.state.collectionTitle
					}))), n.a.createElement(L, null, n.a.createElement(f.a, null, n.a.createElement(B, {
						onClick: this.props.onCancel
					}, _(o)), n.a.createElement(H, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? n.a.createElement(J, {
						sizePx: 10
					}) : a(o))), t && n.a.createElement(X, {
						language: o
					}, Object(d.a)(o, t))))
				}
			}
			t.a = Object(c.a)(Q(z))
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
				return _
			}));
			var o, n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				u = s("./src/reddit/components/FlairPreview/index.tsx"),
				b = s("./src/reddit/components/FlairSearch/index.tsx"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/i18n/utils.ts"),
				O = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				j = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				y = s.n(j);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const _ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				I = Object(a.c)({
					flairData: f.d,
					subreddit: v.S,
					isMod: (e, t) => !!Object(g.j)(e, t)
				});
			class P extends r.a.Component {
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
						subreddit: Object(C.subredditById)(t, this.props.subredditId)
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
						flairData: o,
						subreddit: n
					} = e, i = n.displayText, {
						templates: a,
						templateIds: c
					} = o, {
						canSave: d
					} = this.canSave();
					return r.a.createElement(m.a, {
						className: s
					}, r.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: Object(x.c)("Select ".concat(Object(x.b)("subredditName", i), " flair"))
					}), r.a.createElement(u.a, {
						flair: t,
						flairTemplateType: O.d.LinkFlair,
						placeholderText: Object(x.c)("Post Title")
					}), r.a.createElement(b.a, {
						flair: t,
						flairTemplateType: O.d.LinkFlair,
						subredditId: n.id,
						templates: a,
						templateIds: c,
						onChange: this.setSelectedFlair
					}), r.a.createElement("div", {
						className: y.a.buttonsRow
					}, r.a.createElement(h.f, {
						disabled: !d,
						onClick: this.onApply
					}, Object(x.c)("Apply")), r.a.createElement(h.i, {
						className: y.a.clearButton,
						onClick: this.onClear
					}, Object(x.c)("Clear Flair"))))
				}
			}
			const w = Object(i.b)(I, (e, t) => ({
				closeModal: () => e(Object(l.i)(t.modalId))
			}))(P);
			t.a = Object(d.a)(Object(c.b)(w))
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(o.a)({
				ErrorComponent: r,
				getComponent: () => Object(n.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				AddCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				addCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				LiveIcon: "otoj2GWn145x5kC1YJdJV",
				liveIcon: "otoj2GWn145x5kC1YJdJV",
				CalendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				calendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				LinkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				linkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/events.ts"),
				u = s("./src/reddit/actions/gold/modals.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/pinnedPost.ts"),
				x = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/postCreation/editing.ts"),
				g = s("./src/reddit/actions/reportFlow.ts"),
				f = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				C = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				E = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				j = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				y = s("./src/reddit/icons/fonts/helpers.tsx"),
				_ = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				I = s.n(_);
			var P = p.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(y.b)("hide"), " ").concat(e.className)
				}), "HideIcon", I.a),
				w = s("./src/reddit/icons/fonts/Link/index.tsx"),
				k = s("./src/reddit/icons/fonts/Live/index.tsx"),
				S = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				T = s("./src/reddit/icons/fonts/Report/index.tsx"),
				N = s("./src/reddit/icons/fonts/Save/index.tsx"),
				M = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				R = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				F = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				A = s.n(F);
			var L = p.a.wrapped(e => i.a.createElement("i", {
					className: Object(l.a)(Object(y.b)("unpin"), e.className)
				}), "UnpinIcon", A.a),
				B = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				D = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				W = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				G = s("./src/reddit/components/OverflowMenu/index.tsx"),
				U = s("./src/reddit/components/ReportFlow/index.tsx"),
				V = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				J = s("./src/reddit/controls/Dropdown/Row.tsx"),
				X = s("./src/reddit/components/Flatlist/constants.ts"),
				K = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Y = s("./src/reddit/helpers/isCrosspost.ts"),
				Z = s("./src/reddit/helpers/postEvent.ts"),
				q = s("./src/reddit/helpers/trackers/post.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/activeModalId.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				oe = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				re = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ie = s("./src/reddit/actions/postCollection/index.ts"),
				ae = s("./src/reddit/helpers/trackers/postCollection.ts"),
				ce = s("./src/reddit/models/PostCreationForm/index.ts"),
				de = s("./src/reddit/selectors/postCollection.ts"),
				le = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				pe = s.n(le);
			s.d(t, "a", (function() {
				return ue
			})), s.d(t, "b", (function() {
				return be
			})), s.d(t, "c", (function() {
				return he
			})), s.d(t, "e", (function() {
				return xe
			})), s.d(t, "d", (function() {
				return Oe
			})), s.d(t, "f", (function() {
				return fe
			})), s.d(t, "h", (function() {
				return Te
			}));
			var me = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const ue = p.a.wrapped(P, "Icon", pe.a),
				be = p.a.wrapped(S.a, "Icon", pe.a),
				he = p.a.wrapped(T.a, "Icon", pe.a),
				xe = p.a.wrapped(D.a, "Icon", pe.a),
				Oe = p.a.wrapped(N.a, "Icon", pe.a),
				ge = p.a.wrapped(v.a, "Icon", pe.a),
				fe = p.a.wrapped(j.a, "Icon", pe.a),
				ve = p.a.wrapped(B.a, "AddCollectionIcon", pe.a),
				Ce = p.a.wrapped(E.a, "Icon", pe.a),
				Ee = p.a.wrapped(M.a, "Icon", pe.a),
				je = p.a.wrapped(R.a, "Icon", pe.a),
				ye = p.a.wrapped(W.b, "Icon", pe.a),
				_e = p.a.wrapped(L, "Icon", pe.a),
				Ie = p.a.wrapped(k.a, "LiveIcon", pe.a),
				Pe = p.a.wrapped(C.a, "CalendarIcon", pe.a),
				we = p.a.wrapped(w.a, "LinkIcon", pe.a),
				ke = p.a.wrapped(J.b, "DropdownRow", pe.a),
				Se = p.a.wrapped(H.a, "PostCheckboxMenuItem", pe.a),
				Te = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: o = !0,
						report: n = !0,
						editPost: r = !0,
						hide: i = !0
					} = e;
					return {
						[X.a.Gild]: t,
						[X.a.Save]: s,
						[X.a.Share]: o,
						[X.a.Report]: n,
						[X.a.EditPost]: r,
						[X.a.Hide]: i
					}
				},
				Ne = Object(a.b)(() => Object(d.c)({
					currentUser: oe.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(ee.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: de.i,
					isSaved: te.u,
					isHidden: te.m,
					isSponsored: te.w,
					isNSFW: te.p,
					isOC: te.q,
					isPinned: te.r,
					isSpoiler: te.v,
					post: te.J,
					postSubredditAboutInfo: te.K,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: o
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === o
					},
					sendRepliesToggled: te.S,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, o = me(t, ["isProfilePostListing"]);
						return Object(V.C)(e, o) && s && Object(oe.jb)(e, o) && Object(oe.ib)(e, {
							userName: Object(te.J)(e, {
								postId: o.postId
							}).author
						})
					},
					subredditOrProfile: te.U,
					hasSubredditRules: se.k,
					userIsOp: oe.jb,
					isPostPartOfACollection: de.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(te.J)(e, {
								postId: s
							}).isSponsored) return !1;
						const o = Object(te.U)(e, {
							postId: s
						});
						if (!o) return !1;
						const n = o.type === $.b.User;
						return Object(de.r)(e, o.name, n)
					}
				}), (e, t) => {
					let {
						permalink: s,
						postId: o,
						isOverlay: n,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: () => e(Object(x.t)(s)),
						onDelete: t => e(Object(x.z)(o, t, n)),
						onDistinguishPost: t => e(Object(x.n)(o, t)),
						onGildClick: () => e(Object(u.d)(o, n)),
						onToggleSave: () => e(Object(x.G)(o)),
						onToggleNSFW: () => e(Object(x.v)(o)),
						onToggleOC: () => e(Object(x.w)(o)),
						onTogglePinned: () => e(Object(h.i)(o)),
						onToggleSpoiler: () => e(Object(x.J)(o)),
						onHide: t => e(Object(x.K)(o, !t, n, !0)),
						onReportClick: () => e(Object(g.j)(o, n)),
						onStartEventNow: () => e(Object(m.startEventNowRequested)(o)),
						onEdit: () => {
							const t = !n && !r;
							e(Object(O.a)(o, t))
						},
						onFlairPost: () => e(Object(b.i)(Object(re.b)(o, n))),
						onToggleSendReplies: () => e(Object(x.H)(o)),
						showCollectionsList: (t, s) => {
							e(Object(ie.e)(t)).then(() => {
								const t = Object(ce.t)(s, n);
								e(b.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(b.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(o)))
					}
				});
			class Me extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: o
						} = this.props;
						o(Object(q.f)(s.id, e, t ? "post_detail" : "post"))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						Object(z.d)(z.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.postId))
					}, this.toggleHide = () => {
						const e = this.props.isHidden ? "unhide" : "hide";
						this.handlePostEvent(e), this.props.onHide(this.props.isHidden)
					}, this.toggleSave = () => {
						const e = this.props.isSaved ? "unsave" : "save";
						this.handlePostEvent(e), this.props.onToggleSave()
					}, this.handleReport = () => {
						this.handlePostEvent("report"), this.props.onReportClick()
					}, this.toggleOC = () => {
						this.handlePostEvent(this.props.isOC ? "unmark_original_content" : "mark_original_content"), this.props.onToggleOC()
					}, this.togglePinned = () => {
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(q.g)(this.props.post.id)) : this.props.sendEvent(Object(q.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(K.b)({
							breakpointType: K.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: o
						} = this.props;
						e || (o(Object(ae.b)(s.id)), t(s.belongsTo.id, s.id))
					}
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === Q.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(K.b)({
						breakpointType: K.a.HideIfVWLarger,
						flatlistItem: X.a.PostOverflowMenu,
						isLoggedIn: !!e.currentUser,
						isUserOp: e.userIsOp
					})
				}
				renderDropdownIcons() {
					const {
						props: e
					} = this, {
						currentUser: t,
						isFutureEvent: s,
						isPinned: r,
						onStartEventNow: a,
						post: c,
						shouldRenderCollectionEditButtons: d,
						showEditFlair: l,
						showPinAction: p,
						toggleAddEventStartTimeModal: m,
						toggleEditStartTimeModal: u,
						userIsOp: b
					} = e, h = e.currentUser && e.currentUser.isEmployee, x = Object(Y.a)(e.post), O = e.post.belongsTo.type === f.a.PROFILE || Object($.c)(e.postSubredditAboutInfo), g = t && c.isGildable, v = Object(Z.a)(e.post);
					return i.a.createElement("div", null, g && i.a.createElement(ke, {
						className: this.getBreakpointClass(X.a.Gild),
						displayText: o.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(fe, null)), i.a.createElement(ke, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: o.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							this.handlePostEvent("share_copy"), e.onCopyLink()
						}
					}, i.a.createElement(we, null)), i.a.createElement(ke, {
						className: this.getBreakpointClass(X.a.Share),
						displayText: o.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(Ce, null)), e.showEditPost && i.a.createElement(ke, {
						className: this.getBreakpointClass(X.a.EditPost),
						displayText: o.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, i.a.createElement(be, null)), l && i.a.createElement(ke, {
						displayText: o.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, i.a.createElement(je, null)), i.a.createElement(ke, {
						className: this.getBreakpointClass(X.a.Save),
						displayText: e.isSaved ? o.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : o.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? i.a.createElement(xe, null) : i.a.createElement(Oe, null)), p && i.a.createElement(ke, {
						displayText: r ? o.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : o.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(_e, null) : i.a.createElement(Ee, null)), !e.isSponsored && i.a.createElement(ke, {
						className: this.getBreakpointClass(X.a.Hide),
						displayText: e.isHidden ? o.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : o.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, i.a.createElement(ue, null)), !e.isSponsored && !b && i.a.createElement(ke, {
						className: this.getBreakpointClass(X.a.Report),
						displayText: o.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(he, null)), d && s && a && i.a.createElement(ke, {
						onClick: a,
						displayText: o.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(Ie, null)), d && s && u && i.a.createElement(ke, {
						onClick: u,
						displayText: o.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Pe, null)), d && !v && m && i.a.createElement(ke, {
						displayText: o.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: m
					}, i.a.createElement(Pe, null)), d && i.a.createElement(ke, {
						className: this.props.isPostPartOfACollection ? pe.a.disabledRow : void 0,
						displayText: o.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(ve, null)), b && i.a.createElement(ke, {
						displayText: o.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(ye, null)), h && e.userIsOp && i.a.createElement(ke, {
						displayText: e.post.distinguishType === n.B.ADMIN ? o.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : o.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.B.ADMIN ? e.onDistinguishPost(n.B.NONE) : e.onDistinguishPost(n.B.ADMIN)
					}, i.a.createElement(ge, null)), b && O && !x && i.a.createElement(Se, {
						text: o.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), b && i.a.createElement(Se, {
						text: o.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), b && i.a.createElement(Se, {
						text: o.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && i.a.createElement(Se, {
						text: o.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: e.onToggleSendReplies,
						isSelected: this.props.sendRepliesToggled
					}))
				}
				render() {
					const {
						props: e
					} = this;
					return i.a.createElement("div", null, i.a.createElement(G.b, {
						className: Object(l.a)(pe.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && i.a.createElement(U.a, {
						withOverlay: !0,
						overlayCustomStyles: U.b,
						postId: e.postId
					}), this.props.isConfirmDeleteOpen && i.a.createElement(Re, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const Re = Object(c.i)(e => i.a.createElement(ne.a, {
				toggleModal: e.toggleConfirmDelete,
				onConfirm: () => e.handleDeletePost(e.location),
				actionText: o.fbt._("delete post", null, {
					hk: "49hVoG"
				}),
				headerText: o.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}),
				modalText: o.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
					hk: "2eDKWP"
				}),
				withOverlay: !0
			}));
			t.g = Ne(Me)
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, s) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(p);
			const u = ["center", "top"],
				b = ["center", "bottom"],
				h = a.a.div("Container", m.a),
				x = Object(i.a)(c.b),
				O = Object(d.t)({
					isProfileListingPage: d.G
				});
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return r.a.createElement(h, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, r.a.createElement(l.a, {
						className: m.a.quarantineIcon
					}), o.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), r.a.createElement(x, {
						text: o.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: u,
						tooltipPosition: b
					}))
				}
			}
			t.a = O(g)
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				i = () => null;
			t.a = Object(o.a)({
				ErrorComponent: i,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/Reports/index.m.less": function(e, t, s) {
			e.exports = {
				ReportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				reportText: "_3TPyo-_MFDbVaI7ExIkD1G",
				ReportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				reportsTitle: "_21BmvfYiT1eKfN4AeE812a",
				Reports: "ZL1AYPlBJX_2kYn3OATX6",
				reports: "ZL1AYPlBJX_2kYn3OATX6"
			}
		},
		"./src/reddit/components/Reports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/components/Reports/index.m.less"),
				c = s.n(a);
			const d = r.a.div("ReportText", c.a),
				l = r.a.div("ReportsTitle", c.a),
				p = r.a.div("Reports", c.a);
			t.a = e => {
				const {
					className: t,
					modReports: s,
					userReports: o
				} = e;
				return n.a.createElement("div", {
					className: t
				}, s && s.length > 0 && n.a.createElement(p, null, n.a.createElement(l, null, n.a.createElement(i.c, null, "Moderator Reports")), s.map(e => {
					let [t, s] = e;
					return n.a.createElement(d, {
						key: "mod-".concat(s)
					}, "u/".concat(s, ": ").concat(t))
				})), o && o.length > 0 && n.a.createElement(p, null, n.a.createElement(l, null, n.a.createElement(i.c, null, "User Reports")), o.map(e => {
					let [t, s] = e;
					return n.a.createElement(d, {
						key: "user-".concat(t)
					}, "".concat(s, ": ").concat(t))
				})))
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
				return p
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = i.a.span("TextWrapper", c.a),
				l = i.a.wrapped(e => n.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && n.a.createElement(d, null, e.text, " ")), "Button", c.a),
				p = i.a.wrapped(l, "ApproveButton", c.a),
				m = i.a.wrapped(l, "RemoveButton", c.a),
				u = e => n.a.createElement("button", {
					className: Object(r.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router/esm/react-router.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				O = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				g = s("./src/reddit/icons/fonts/Link/index.tsx"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/routes/postCreation/constants.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/ShareMenu/index.m.less"),
				j = s.n(E),
				y = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const _ = Object(u.a)(b.a),
				I = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(C.b)(s)(e)
					}
				}),
				P = Object(r.b)(I, (e, t) => {
					var {
						dropdownId: s,
						permalink: o
					} = t, n = y(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							n.post && e(Object(a.b)("".concat(v.b, "?source_id=").concat(n.post.id)))
						},
						toggleDropdown: () => {
							e(Object(d.g)({
								tooltipId: s
							}))
						},
						copyLink: () => e(Object(m.t)(Object(p.a)(o, {
							utm_source: "share",
							utm_medium: "web2x"
						})))
					}
				});
			t.a = P(Object(i.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === f.b.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return n.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, n.a.createElement(_, {
					className: j.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, n.a.createElement(h.b, {
					className: j.a.dropdownRow,
					displayText: Object(l.c)("Copy link"),
					onClick: () => {
						e.sendEventWithName("share_copy"), e.copyLink()
					}
				}, n.a.createElement(g.a, {
					className: j.a.linkIcon
				})), s && n.a.createElement(h.b, {
					className: j.a.dropdownRow,
					displayText: Object(l.c)("crosspost"),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, n.a.createElement(x.a, {
					className: j.a.crosspostIcon
				})), t && n.a.createElement(h.b, {
					className: j.a.dropdownRow,
					displayText: Object(l.c)("Embed"),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, n.a.createElement(O.a, {
					className: j.a.embedIcon
				}))))
			}))
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(n);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(o.a, "SubredditName", r.a);
			t.a = i
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				p = s("./src/reddit/components/Reports/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				x = s.n(h);
			const O = a.a.wrapped(b.a, "Footer", x.a),
				g = a.a.wrapped(m.c, "FooterButton", x.a);
			var f = e => n.a.createElement("div", null, n.a.createElement(p.a, {
					modReports: e.modReports,
					userReports: e.userReports
				}), !e.isShowingHistoricalReports && n.a.createElement(O, null, n.a.createElement(g, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? Object(u.c)("Restore reports") : Object(u.c)("Ignore reports")
				}))),
				v = s("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				C = s.n(v);
			const E = a.a.wrapped(d.a, "StyledDropdown", C.a),
				j = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				y = Object(r.b)(j),
				_ = Object(c.a)(E),
				I = y(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						s = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						o = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(_, {
						className: e.className,
						isOpen: e.isDropdownOpen,
						tooltipId: e.tooltipId
					}, n.a.createElement(f, {
						ignoreReports: e.model.ignoreReports,
						modReports: s,
						onIgnoreReports: e.onIgnoreReports,
						isShowingHistoricalReports: t,
						userReports: o
					}))
				});
			t.a = I
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			}));
			const o = "comment",
				n = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			}));
			const o = "PostCreation-AddEventButton",
				n = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const u = e => n.a.createElement("div", {
					className: Object(r.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(c.a, {
					className: l.a.expandRight
				}, e.isSelected ? n.a.createElement(a.a, {
					className: l.a.checkboxSelected
				}) : n.a.createElement(i.a, {
					className: l.a.checkbox
				}), e.text)),
				b = e => {
					var {
						className: t
					} = e, s = m(e, ["className"]);
					return n.a.createElement(u, p({
						className: Object(r.a)(l.a.postCheckboxMenuItem, t)
					}, s))
				};
			t.b = u
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/lodash/uniqueId.js"),
				n = s.n(o),
				r = s("./node_modules/raf/index.js"),
				i = s.n(r),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/selectors/activeModalId.ts"),
				h = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = s.n(g);
			var v = Object(h.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return c.a.createElement("div", {
						className: f.a.wrapper
					}, c.a.createElement(O.a, {
						className: f.a.titleRow
					}, s), c.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), c.a.createElement(O.a, {
						className: f.a.buttonRow
					}, c.a.createElement(x.f, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, Object(u.c)("Ok"))))
				}),
				C = s("./src/reddit/controls/ErrorText/index.m.less"),
				E = s.n(C);
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "c", (function() {
				return P
			}));
			const j = Object(l.c)({
				activeModalId: b.a
			});
			class y extends c.a.Component {
				constructor(e) {
					super(e), this.spanRef = c.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(n()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: s,
						errorModalBody: o,
						errorModalTitle: n = Object(u.c)("Error"),
						moreText: r = Object(u.c)("More")
					} = this.props, {
						modalId: i,
						textHasOverflowed: a
					} = this.state;
					return c.a.createElement("div", {
						className: Object(p.a)(E.a.wrapper, s)
					}, c.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), a && c.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, r), t === i && c.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: n
					}, o || e))
				}
			}
			const _ = Object(d.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(y),
				I = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: o,
						fallbackMessage: n,
						messages: r = []
					} = e, i = r.length ? r : n ? [n] : [];
					return i.length ? c.a.createElement("div", {
						className: t
					}, i.map((e, t) => c.a.createElement(_, {
						className: s,
						errorModalTitle: o,
						key: t
					}, e))) : null
				},
				P = e => c.a.createElement(I, {
					fallbackMessage: Object(u.c)("Something went wrong"),
					messages: e
				});
			t.b = _
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(n);
			t.a = o.a.input("input", r.a)
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/MetaSeparator/index.m.less"),
				a = s.n(i);
			const c = e => n.a.createElement("span", {
				className: Object(r.a)(a.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = e => {
				let {
					className: t,
					isSmall: s
				} = e;
				return n.a.createElement(c, {
					className: Object(r.a)(a.a.metaSeparator, t),
					isSmall: s
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isCrosspost.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return !!e && !!e.crosspostRootId
			}
		},
		"./src/reddit/helpers/styles/mixins/index.m.less": function(e, t, s) {
			e.exports = {
				basePostStyles: "REwsaLIz5u3DhM7zbbzIU",
				classicPostStyles: "bE7JgM2ex7W3aF3zci5bm",
				compactPostStyles: "FeLWdhOO-cVXowAo3Rndk",
				baseLargeAndMediumPostStyles: "_2lHXa-mLMsRfm1Q5JxgU4r",
				largeAndMediumPostStyles: "_3Qkp11fjcAw9I9wtLo8frE",
				baseClassicAndCompactPostStyles: "_2yN8L-c8UBoKxHn0-vg_dS",
				baseSubredditStyles: "_2zRMh6o0BucltCL6o64pa4",
				classicAndCompactActiveStyles: "_1Accc3h2AW0sB8E4CcEz2n",
				mIsActive: "_1LmKpEAguLZV4jQMgQSFVL",
				classicAndCompactPlaceholderStyles: "_3joKifdh6j3tG_vsgFS85R",
				mUseRedditTheme: "_1nQXomgzQ2rnBsRU2iZ00l",
				largeAndMediumActiveStyles: "_1qftyZQ2bhqP62lbPjoGAh"
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return O
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const p = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				u = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(o.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : p,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("admin"), c.a.adminIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("calendar"), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return n.a.createElement("i", d({
					className: Object(r.a)(Object(i.b)("comment"), c.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.m.less": function(e, t, s) {
			e.exports = {
				DistinguishShield: "_3qx_qM22xH7s5oSucqWca",
				distinguishShield: "_3qx_qM22xH7s5oSucqWca"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.m.less": function(e, t, s) {
			e.exports = {
				EmbedIcon: "_1J2DOAiKZ5l1xq516M9W_Q",
				embedIcon: "_1J2DOAiKZ5l1xq516M9W_Q"
			}
		},
		"./src/reddit/icons/fonts/Embed/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Gild/index.m.less": function(e, t, s) {
			e.exports = {
				GildIcon: "_31hC6liK9ba3nW1h_0cKS3",
				gildIcon: "_31hC6liK9ba3nW1h_0cKS3"
			}
		},
		"./src/reddit/icons/fonts/Gild/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Gild/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("gild"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(r.a, null, e.desc)), "GildIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Hide/index.m.less": function(e, t, s) {
			e.exports = {
				HideIcon: "_1ps3GcyMra2ZVakeRQFnGj",
				hideIcon: "_1ps3GcyMra2ZVakeRQFnGj"
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
				i = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live"), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", d({}, e, {
				className: Object(r.a)(Object(i.b)("modActions"), c.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Save/index.m.less": function(e, t, s) {
			e.exports = {
				SaveIcon: "_3n1jtdyipCtmS0HkOM1Tfd",
				saveIcon: "_3n1jtdyipCtmS0HkOM1Tfd"
			}
		},
		"./src/reddit/icons/fonts/Save/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Save/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("sticky"), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
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
				i = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
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
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, n.a.createElement("defs", null, n.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), n.a.createElement("use", {
				fill: "inherit",
				xlinkHref: "#".concat("svg-add-collection"),
				fillRule: "evenodd"
			}))
		},
		"./src/reddit/icons/svgs/Saved/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2OUcXcp-8gkoFyUSKdNTxF"
			}
		},
		"./src/reddit/icons/svgs/Saved/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				a = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => n.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: o,
					widthLeft: r,
					gutter: a
				} = e, p = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return n.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, p), n.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~dc5241f9.1de97b5ff5876d6c00a1.js.map