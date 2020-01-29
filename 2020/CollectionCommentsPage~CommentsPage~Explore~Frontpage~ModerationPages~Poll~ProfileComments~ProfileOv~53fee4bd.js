// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd.8d872c1b70268ff9d6e7.js
// Retrieved at 1/29/2020, 4:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd"], {
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
				d = s("./src/reddit/selectors/telemetry.ts");

			function c() {
				return (c = Object.assign || function(e) {
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
						actionInfo: Object(d.previousPageActionInfo)(e)
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
						return i.a.createElement(e, c({}, n()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
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
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
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
			var h = (e, t) => Object(d.b)(Object(c.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(p.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: a.bb.POST,
					data: b(t)
				}).then(m.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				O = s("./src/reddit/helpers/trackers/lightbox.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/helpers/trackers/postComposer.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/actions/postCreation/constants.ts"),
				k = s("./src/reddit/actions/postCreation/general.ts");
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "c", (function() {
				return N
			}));
			const P = Object(n.a)(I.m),
				y = Object(n.a)(I.n),
				_ = Object(n.a)(I.z),
				S = Object(n.a)(I.F),
				T = Object(n.a)(I.G),
				R = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o(),
						a = Object(w.I)(i, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(O.d)(e, "edit")(i)) : Object(f.b)(e, "edit")(i);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = E.h.RICH_TEXT,
						p = "";
					d.type === v.n.TEXT ? (l = E.h.MARKDOWN, p = d.content) : d.type === v.n.RTJSON && (p = (l = d.rteMode || E.h.RICH_TEXT) === E.h.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: c,
						postContent: p,
						postId: e
					}))
				}, N = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const d = s(),
						{
							post: c
						} = e,
						l = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					C.r(s(), Object(k.o)(l)), t(_(c.id));
					const p = await h(a(), e),
						m = !1 === p.body.success;
					if (t(P(c.id)), p.ok && !m) {
						t(Object(i.e)({
							kind: j.b.SuccessCommunity,
							text: Object(o.a)(d.user.language, "postCreation.editing.success")
						})), t(T(c.id));
						const e = Object(g.a)(p.body);
						t(Object(r.E)({
							[c.id]: e
						}))
					} else t(y(p.error))
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/comment/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				C = s("./src/reddit/selectors/moderatingComments.ts"),
				v = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				I = s("./src/reddit/icons/fonts/helpers.tsx"),
				k = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				P = s.n(k);
			var y = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(I.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", P.a),
				_ = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				R = s("./src/reddit/icons/svgs/Show/index.tsx"),
				N = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				M = s.n(N);
			s.d(t, "b", (function() {
				return D
			})), s.d(t, "a", (function() {
				return V
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
			const D = l.a.wrapped(h.c, "RestrictedButton", M.a),
				A = l.a.wrapped(w.a, "Approve", M.a),
				L = l.a.wrapped(_.a, "Lock", M.a),
				G = l.a.wrapped(S.a, "Remove", M.a),
				B = l.a.wrapped(T.a, "Spam", M.a),
				W = l.a.wrapped(R.a, "Show", M.a),
				V = l.a.wrapped(y, "DistinguishShield", M.a),
				U = Object(g.t)(),
				H = e => "Distinguish--Dropdown--".concat(e),
				K = Object(a.c)({
					currentUser: j.i,
					collapsedBecauseCrowdControl: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(C.a)(e, {
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
						return Object(g.g)(e, t) || Object(v.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: g.O
				}),
				J = Object(i.b)(K, (e, t) => {
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
			t.c = U(J(l.a.wrapped(Object(x.b)(e => {
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
					onLockComment: g,
					onRemoveComment: C,
					onShowComment: v,
					onSpamComment: E,
					onToggleDistinguishDropdown: j,
					sendEvent: w
				} = e, I = F(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "language", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const k = Object(O.a)(p),
					P = Object(b.b)(s),
					y = s.isApproved && P,
					_ = !!n && n.isEmployee,
					S = !s.isRemoved,
					T = a,
					R = e => w(Object(f.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || P) && r.a.createElement(D, {
					text: y ? o.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : o.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						h(), R("approve")
					}
				}, r.a.createElement(A, null)), S && r.a.createElement(r.a.Fragment, null, r.a.createElement(D, {
					text: s.bannedBy === c.k ? o.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : o.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						C(), s.bannedBy === c.k ? R("confirm_remove") : R("remove")
					}
				}, r.a.createElement(G, null)), r.a.createElement(D, {
					text: o.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), R("spam")
					}
				}, r.a.createElement(B, null))), r.a.createElement(D, {
					text: s.isLocked ? o.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : o.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						g(), R(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(L, null)), i && !_ && !s.bannedBy && r.a.createElement(D, {
					className: Object(d.a)({
						[M.a.selected]: I.isDistinguishDropdownOpen
					}),
					onClick: () => {
						R("mod_distinguish_menu"), j()
					}
				}, r.a.createElement(V, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: I.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: _,
					isUserMod: k,
					onDistinguishComment: x,
					sendEventWithName: R,
					tooltipId: H(s.id)
				})), T && r.a.createElement(D, {
					text: o.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						v()
					}
				}, r.a.createElement(W, null)))
			}), "CommentModToolsFlatlist", M.a)))
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/i18n/utils.ts"),
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
						className: Object(d.a)(m.a.Icon, this.props.className)
					}, r.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.top, {
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
					}, Object(c.c)("Live Discussion")), r.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.bottom, {
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
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/constants/componentTestIds.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/helpers/path/index.ts"),
				h = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				x = s("./src/reddit/selectors/experiments/chatPost.ts"),
				g = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				O = s("./src/reddit/selectors/experiments/postSeo.ts"),
				f = s("./src/reddit/selectors/monthsToMinutes.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/CommentsLink/index.m.less"),
				j = s.n(E);
			const w = Object(r.b)(() => Object(a.c)({
					isChatPostExperiment: x.d,
					isPostSEOEligible: O.d,
					language: v.S,
					m2mHomeRedirectVariant: g.f,
					postPermalink: C.H,
					shouldOpenPostInNewTab: v.W,
					shouldShowHomeUpsell: f.y
				})),
				I = e => {
					let t, {
						type: s,
						numComments: r,
						isChatPostExperiment: i,
						language: a,
						modModeEnabled: c,
						hasModPostPerms: l,
						shouldShowIcon: m,
						shouldShowText: b,
						text: x
					} = e;
					return t = x || (s === u.g.Compact || c && l || i ? Object(p.b)(r) : 0 === r ? Object(d.a)(a, "posts.comment.verb") : Object(d.c)(a, "posts.comments.noun", r, {
						count: Object(p.b)(r)
					})), n.a.createElement(o.Fragment, null, m && n.a.createElement(h.a, {
						className: j.a.commentIcon,
						role: "presentation"
					}), b && n.a.createElement("span", {
						className: j.a.text
					}, t))
				};
			t.a = w(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPostExperiment: o,
					isCommentPermalink: r,
					isCommentsPage: a,
					isOverlay: d,
					isPostSEOEligible: p,
					language: u,
					m2mHomeRedirectVariant: h,
					modModeEnabled: x,
					numComments: O,
					onClick: f,
					postPermalink: C,
					shouldOpenPostInNewTab: v,
					shouldShowHomeUpsell: E,
					shouldShowIcon: w = !0,
					shouldShowText: k = !0,
					text: P,
					type: y
				} = e, _ = a && !r && !p && !Object(g.b)(h) && !E, S = r && !d, T = n.a.createElement(I, {
					type: y,
					numComments: O,
					isChatPostExperiment: o,
					language: u,
					modModeEnabled: x,
					hasModPostPerms: s,
					shouldShowIcon: w,
					shouldShowText: k,
					text: P
				});
				return _ ? n.a.createElement("div", {
					className: Object(c.a)(j.a.commentsLink, j.a.defaultCursorWrapper, t),
					onClick: f
				}, T) : n.a.createElement(i.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": m.a,
					className: Object(c.a)(j.a.commentsLink, j.a.link, t),
					target: v ? "_blank" : void 0,
					to: S ? Object(b.b)(C) : Object(l.a)(C, !0),
					onClick: f
				}, T)
			})
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/fastdom/index.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				b = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const O = {
					height: 200,
					width: 200
				},
				f = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				C = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: o,
						caretPosition: n,
						caretColor: i
					} = e, a = g(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", x({
						className: Object(c.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n
						}),
						style: Object.assign({}, o, {
							"--contentTooltip-caretColor": i && i[n] ? i[n] : Object(m.a)(e).body
						})
					}, a), t)
				}),
				v = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				E = Object(d.a)(C, [o.a.Click, o.a.Keydown]),
				j = Object(i.b)(v);
			class w extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = O
						} = this.props;
						p.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const o = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let n = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									n = window.innerHeight - o.bottom > t.height;
									break;
								case "left":
									n = o.left > t.width;
									break;
								case "right":
									n = o.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									n = o.top > t.height
							}
							this.setState({
								position: n ? this.props.defaultTooltipPosition : f(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: o
					} = this.getPositions(e);
					return r.a.createElement(E, x({}, this.props, {
						caretPosition: o,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = j(w)
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
				d = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(m);
			const b = i.a.div("DistinguishWrapper", u.a),
				h = i.a.wrapped(p.a, "Inline", u.a),
				x = i.a.wrapped(c.a, "RadioOff", u.a),
				g = i.a.wrapped(l.a, "RadioOn", u.a),
				O = e => n.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? n.a.createElement(g, null) : n.a.createElement(x, null), e.text),
				f = i.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: o,
						isUserEmployee: i,
						isUserMod: a,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: p,
						onDistinguishComment: m
					} = e;
					return n.a.createElement(b, {
						className: t,
						style: s
					}, n.a.createElement(O, {
						onClick: () => m(r.B.NONE, null),
						selected: !c && !o,
						text: Object(d.c)("Undistinguish")
					}), a && n.a.createElement(O, {
						onClick: () => m(r.B.MODERATOR, null),
						selected: c && !l,
						text: Object(d.c)("Distinguish as Mod")
					}), p && a && n.a.createElement(O, {
						onClick: () => m(r.B.MODERATOR, !0),
						selected: l,
						text: Object(d.c)("Distinguish as Mod and Sticky")
					}), i && n.a.createElement(O, {
						onClick: () => m(r.B.ADMIN, null),
						selected: o,
						text: Object(d.c)("Distinguish as Admin")
					}))
				}, "DistinguishOptions", u.a);
			var C = Object(a.a)(f);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: p,
					tooltipId: m
				} = e;
				return n.a.createElement("div", {
					className: t,
					id: m
				}, n.a.createElement(C, {
					isAdminDistinguished: s,
					isUserEmployee: o,
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: m,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.B.MODERATOR ? p(!d && t ? "distinguish_sticky" : "distinguish") : e === r.B.ADMIN ? p("admin_distinguish") : a && e !== r.B.MODERATOR ? p("undistinguish") : s && e !== r.B.ADMIN && p("admin_undistinguish"), d && !t && p("unsticky")
					}
				}))
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
				d = s("./src/reddit/components/Flatlist/index.m.less"),
				c = s.n(d);

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
					noBreakpoints: d
				} = e, m = p(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return n.a.createElement(a.a, l({}, m, {
					className: d ? c.a.responsiveRow : Object(r.a)(c.a.responsiveRow, Object(i.b)({
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
				d = s.n(a),
				c = s("./src/reddit/components/Flatlist/constants.ts");
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
					[c.a.EditFlair]: n.Editing,
					[c.a.EditPost]: n.Editing,
					[c.a.Gild]: n.Awarding,
					[c.a.Hide]: n.First,
					[c.a.PostOverflowMenu]: n.First,
					[c.a.Report]: n.First,
					[c.a.Save]: n.First,
					[c.a.Share]: n.Second
				},
				p = e => {
					return (e => {
						const t = d.a[e.type],
							s = d.a[e.group],
							o = d.a[e.groupVariant];
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
				responsiveRow: "YszYBnnIoNY8pZ6UwCivd",
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
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/timezone/index.ts"),
				m = s("./src/reddit/actions/gold/modals.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				g = s("./src/reddit/actions/reportFlow.ts"),
				O = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				f = s("./src/reddit/components/CommentsLink/index.tsx"),
				C = s("./src/higherOrderComponents/makeAsync.tsx"),
				v = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/economics.ts");
			const j = Object(C.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsPostFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var w = Object(r.b)(() => Object(i.c)({
					featureEnabled: v.d.spSupport,
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
				I = s("./src/reddit/i18n/components.tsx"),
				k = s("./src/reddit/constants/colors.ts"),
				P = s("./src/reddit/components/ContentTooltip/index.tsx"),
				y = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				_ = s.n(y);
			class S extends n.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return n.a.createElement(P.a, {
						caretColor: {
							top: k.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, n.a.createElement("div", {
						className: _.a.container
					}, n.a.createElement("div", {
						className: _.a.newBadge
					}, n.a.createElement(I.c, null, "New")), n.a.createElement("div", {
						className: _.a.text
					}, n.a.createElement(I.c, null, "Try giving a new Appreciation Award"))))
				}
			}
			var T = S,
				R = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				N = s("./src/reddit/components/ModModeReports/helpers.ts"),
				M = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				F = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				D = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				A = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				L = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				G = s("./src/reddit/components/ShareMenu/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				W = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				V = s("./src/reddit/constants/postLayout.ts"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				K = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				J = s("./src/reddit/i18n/utils.ts"),
				X = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = s("./src/reddit/helpers/trackers/modTools.ts"),
				q = s("./src/reddit/helpers/trackers/post.ts"),
				Z = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				$ = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Report/index.tsx"),
				te = s("./src/reddit/icons/fonts/Share/index.tsx"),
				se = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				oe = s("./src/reddit/models/PostCreationForm/index.ts"),
				ne = s("./src/reddit/models/User/index.ts"),
				re = s("./src/reddit/components/Flatlist/constants.ts"),
				ie = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				ae = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				de = s("./src/reddit/actions/postCollection/index.ts"),
				ce = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
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
				return Ce
			})), s.d(t, "a", (function() {
				return ve
			})), s.d(t, "d", (function() {
				return ke
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
			let xe, ge;
			const Oe = l.a.button("ShareButton", ue.a),
				fe = l.a.wrapped(G.a, "ShareMenu", ue.a),
				Ce = Object(c.a)(e => {
					var {
						className: t
					} = e, s = he(e, ["className"]);
					return n.a.createElement($.a, be({}, s, {
						className: Object(d.a)(ue.a.modActionsIcon, t),
						style: {
							color: Object(K.a)(Object(H.a)(s), se.a.actionIcon, se.b.actionIcon)
						}
					}))
				}),
				ve = e => n.a.createElement("div", be({}, e, {
					className: Object(d.a)(ue.a.flatlistSeparator, e.className)
				})),
				Ee = Object(U.t)({
					currentProfileName: U.h,
					isCommentPermalink: U.v,
					isCommentsPage: U.w,
					isProfilePostListing: U.I,
					pageLayer: e => e
				}),
				je = Object(i.c)({
					activeModalId: pe.a,
					layout: U.M,
					userIsOp: X.jb,
					subreddit: U.q
				}),
				we = Object(r.b)(je, (e, t) => {
					let {
						post: o,
						isOverlay: n,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(de.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(b.G)(o.postId)),
						onHide: t => e(Object(b.K)(o.postId, !o.hidden, n, !0)),
						onReportClick: () => e(Object(g.j)(o.postId, n)),
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
							xe && ge || ([xe, ge] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(oe.s)(o.postId, n, oe.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							ge && e(ge(o.id, t))
						}
					}
				});
			class Ie extends n.a.Component {
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
						o(Object(q.f)(s.id, e, t ? "post_detail" : "post"))
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
						hasModPostPerms: c,
						isCommentPermalink: l,
						isCommentsPage: m,
						isLargePost: u,
						isOverlay: b,
						isProfilePostListing: h,
						isSticky: x,
						language: g,
						layout: C,
						modModeEnabled: v,
						onFlairChanged: E,
						onIgnoreReports: j,
						onOpenReportsDropdown: k,
						pageLayer: P,
						post: y,
						sendEvent: _,
						showEditFlair: S,
						showEditPost: G,
						subreddit: B,
						toggleEditStartTimeModal: U,
						tooltipType: H,
						userIsOp: K
					} = this.props, X = !!r && Object(ne.f)(r) === y.author, z = Object(ae.a)("View--Reports", y.id, H), $ = Object(ae.a)("View--GiveAward", y.id, H), se = Object(N.c)(y), de = ke("-mod-actions-menu", y.id, b, x), pe = Object(N.a)(y), me = y.postId, be = C === V.g.Large, he = !m && be || c && v, ge = !(b || m || l), ve = r && y.isGildable;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: Object(d.a)(ue.a.flatlistContainer, s)
					}, n.a.createElement(f.a, {
						className: ue.a.commentsLink,
						hasModPostPerms: c,
						isCommentsPage: m,
						isCommentPermalink: l,
						isOverlay: b,
						postId: y.id,
						modModeEnabled: v,
						numComments: y.numComments
					}), B && r && !K && !y.isNSFW && n.a.createElement(w, {
						className: ue.a.supportButton,
						contentId: y.id,
						inPostFeed: ge,
						modModeEnabled: c && v,
						renderInPortal: ge,
						subredditId: B.id,
						targetName: y.author
					}), ve && n.a.createElement(n.a.Fragment, null, n.a.createElement(Y.a, {
						displayText: Object(J.c)("Give Award"),
						flatlistItem: re.a.Gild,
						isLoggedIn: !!r,
						isUserOp: K,
						onClick: this.handleGild,
						skipRoleAttr: !0
					}, n.a.createElement(A.f, {
						id: $
					})), n.a.createElement(T, {
						postOrComment: y,
						tooltipId: $
					})), n.a.createElement(fe, {
						className: Object(ie.b)({
							flatlistItem: re.a.Share,
							isLoggedIn: !!r,
							isUserOp: K
						}),
						dropdownId: ke("-share-menu", y.id, b, x),
						permalink: y.permalink,
						post: y,
						sendEventWithName: this.sendEventWithName,
						subreddit: B
					}, n.a.createElement(Oe, {
						"data-click-id": "share"
					}, n.a.createElement(te.a, {
						className: ue.a.shareIcon
					}), n.a.createElement("span", {
						className: ue.a.shareText
					}, n.a.createElement(I.c, null, "share")))), G && !he && n.a.createElement(Y.a, {
						displayText: Object(J.c)("Edit post"),
						flatlistItem: re.a.EditPost,
						isLoggedIn: !!r,
						isUserOp: K,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, n.a.createElement(A.b, null)), (!c || !v) && n.a.createElement(Y.a, {
						displayText: Object(a.a)(g, "posts.".concat(y.saved ? "unsave" : "save")),
						flatlistItem: re.a.Save,
						isLoggedIn: !!r,
						isUserOp: K,
						onClick: this.onSaveClick,
						skipRoleAttr: !0
					}, y.saved ? n.a.createElement(A.e, null) : n.a.createElement(A.d, null)), !y.isSponsored && !he && n.a.createElement(Y.a, {
						displayText: Object(a.a)(g, "posts.".concat(y.hidden ? "unhide" : "hide")),
						flatlistItem: re.a.Hide,
						isLoggedIn: !!r,
						isUserOp: K,
						onClick: this.onHideClick,
						skipRoleAttr: !0
					}, n.a.createElement(A.a, null)), !X && !y.isSponsored && !he && n.a.createElement(Y.a, {
						displayText: Object(J.c)("report"),
						flatlistItem: re.a.Report,
						isLoggedIn: !!r,
						isUserOp: K,
						onClick: this.onReportClick,
						skipRoleAttr: !0
					}, n.a.createElement(A.c, null)), n.a.createElement(M.a, {
						isOverlay: b,
						layout: C,
						modModeEnabled: v,
						post: y,
						sendEvent: _
					}), c && n.a.createElement(R.a, {
						dropdownId: de,
						onClick: () => _(Object(q.f)(y.id, "post_mod_action_menu"))
					}, n.a.createElement(Ce, null), n.a.createElement(D.a, {
						canEditFlair: i && !!S,
						hasModPostPerms: c,
						isOverlay: !!b,
						isPostAuthor: X,
						language: g,
						modModeEnabled: v,
						post: y,
						tooltipId: de
					})), c && se && !v && n.a.createElement(L.c, {
						text: "".concat(pe),
						onClick: () => {
							k(z), _(Object(q.f)(y.id, "post_report_menu"))
						},
						id: z
					}, n.a.createElement(W.a, {
						model: y,
						onIgnoreReports: () => {
							j(), _(Object(Q.j)(y.ignoreReports ? "restore_reports" : "ignore_reports", y.id))
						},
						tooltipId: z
					}), y.ignoreReports ? n.a.createElement(Z.a, null) : n.a.createElement(ee.a, null)), (r || !y.isSponsored) && n.a.createElement(A.g, {
						currentProfileName: o,
						dropdownId: ke("-overflow-menu", y.id, b, x),
						isCommentsPage: m,
						isFixed: x,
						isOverlay: !!b,
						isProfilePostListing: h,
						layout: C,
						modModeWithPost: v && c,
						pageLayer: P,
						permalink: y.permalink,
						postId: me,
						sendEvent: _,
						showEditPost: !!G,
						showEditFlair: !!S,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: U,
						toggleEditStartTimeModal: U
					}), e === Object(oe.t)(y.id, b) && n.a.createElement(ce.a, {
						subredditId: y.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: y.id,
						onSelectCollection: this.addPostToCollection,
						titleText: Object(J.c)("Add post to a collection"),
						onItemHoverActionText: Object(J.c)("add"),
						isOverlay: b
					}), e === Object(oe.s)(y.id, b, oe.j.POST_OVERFLOW_MENU) && xe && n.a.createElement(xe, {
						onChange: t,
						onClose: U,
						schedule: Object(p.c)(y),
						shouldShowDeleteButton: !1
					}), e === Object(oe.u)(y.id, b) && n.a.createElement(le.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: y.belongsTo.id
					}), e === Object(F.b)(y.id, b) && n.a.createElement(F.a, {
						flairs: y.flair,
						subredditId: y.belongsTo.id,
						modalId: Object(F.b)(y.id, b),
						onFlairChanged: E
					}), n.a.createElement("div", {
						className: ue.a.flexSpacer
					})), ge && n.a.createElement(O.a, {
						className: Object(d.a)(ue.a.liveDiscussionWrapper, {
							[ue.a.large]: u
						}),
						isMod: c,
						postId: y.postId
					}))
				}
			}
			const ke = (e, t, s, o) => {
				let n = t;
				return s && (n += "-overlay"), o && (n += "-sticky"), n += e
			};
			t.c = Ee(we(Object(B.b)(Ie)))
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
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
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
			}, e.inCommentFlatlist ? n.a.createElement(d.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(c.c, {
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
				d = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				c = s.n(d);
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
						s = c.a[e.breakpointType],
						o = c.a[t],
						n = e.isCompact ? c.a[r.Compact] : c.a[r.Default];
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				g = s("./src/reddit/constants/postLayout.ts"),
				O = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				v = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				E = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				w = s("./src/reddit/selectors/activeModalId.ts"),
				I = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/postFlair.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				y = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				_ = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(_);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(y.b)({
						breakpointType: y.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				R = Object(i.b)(() => Object(a.c)({
					activeModalId: w.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(k.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(I.i)(e, {
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
			t.a = R(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: i,
					layout: a,
					moderatorPermissions: l,
					modModeEnabled: p,
					onApprovePost: m,
					onFlairPost: w,
					onRemovePost: I,
					onSpamPost: k,
					post: y,
					sendEvent: _,
					showIconsOnly: R
				} = e, N = Object(O.a)(l), M = Object(b.b)(y), F = !(!y.approvedBy || !M), D = Object(h.b)(y.id, i), A = N && p && !y.isSponsored, L = t && p;
				let G, B, W;
				R || (G = ((e, t) => e ? o.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? o.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : o.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(F, y.approvedBy), B = ((e, t) => e ? t === c.k ? o.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : o.fbt._("removed", null, {
					hk: "35ZTch"
				}) : o.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(y.isRemoved, y.bannedBy), W = (e => e ? o.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : o.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(y.isSpam));
				const V = !i && a === g.g.Compact;
				return r.a.createElement("div", {
					className: Object(d.a)(S.a.container, s)
				}, A && r.a.createElement(n.Fragment, null, r.a.createElement(x.b, {
					className: T(P.a.Approve, V),
					key: "approveButton",
					text: G,
					disabled: !!y.approvedBy && !M,
					onClick: () => {
						m(), _(Object(f.f)(y.id, "approve"))
					}
				}, r.a.createElement(C.a, null)), r.a.createElement(x.d, {
					className: T(P.a.Remove, V),
					key: "removeButton",
					text: B,
					disabled: y.isRemoved && y.bannedBy !== c.k,
					onClick: () => {
						I(), y.isRemoved && y.bannedBy === c.k ? _(Object(f.f)(y.id, "confirm_remove")) : _(Object(f.f)(y.id, "remove"))
					}
				}, r.a.createElement(v.a, null)), r.a.createElement(x.d, {
					className: T(P.a.Spam, V),
					key: "removeSpamButton",
					text: W,
					disabled: y.isSpam,
					onClick: () => {
						k(), _(Object(f.f)(y.id, "spam"))
					}
				}, r.a.createElement(E.a, null))), L && r.a.createElement(x.c, {
					className: T(P.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						w(D)(), _(Object(f.f)(y.id, "post_flair_picker"))
					}
				}, r.a.createElement(j.a, null)), r.a.createElement(u.f, {
					postId: y.id
				}))
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
				d = s("./src/reddit/components/GildModal/Loader.tsx"),
				c = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/gild.ts"),
				m = s("./src/reddit/selectors/video.ts"),
				u = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				h = s("./src/reddit/components/PostContainer/index.m.less"),
				x = s.n(h),
				g = s("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
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
			const C = g.a.div("WrappedPost", x.a),
				v = Object(r.c)({
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
				E = Object(c.a)(v),
				j = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class w extends n.a.Component {
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
							gildModalIsOpen: c,
							makePostContainerId: p,
							playing: m,
							post: b,
							onClick: h,
							onPostContentClick: x,
							onPostViewable: g,
							isOverlay: v
						} = e,
						E = f(e, ["afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						w = n.a.createElement(C, O({}, E, {
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
						}), o, c && n.a.createElement(d.a, null)),
						I = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || I ? n.a.createElement(i.a, {
						onViewable: e => g(b, e),
						children: w,
						trackVideoMetrics: I && !s && m,
						continuousViewingStartedAt: a
					}) : w
				}
			}
			t.a = E(Object(b.c)(w))
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
				d = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/actions/eventPosts.ts"),
				u = s("./src/reddit/actions/gold/modals.ts"),
				b = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/pinnedPost.ts"),
				x = s("./src/reddit/actions/post.ts"),
				g = s("./src/reddit/actions/postCreation/editing.ts"),
				O = s("./src/reddit/actions/reportFlow.ts"),
				f = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				v = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				E = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				j = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				w = s("./src/reddit/icons/fonts/helpers.tsx"),
				I = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				k = s.n(I);
			var P = p.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(w.b)("hide"), " ").concat(e.className)
				}), "HideIcon", k.a),
				y = s("./src/reddit/icons/fonts/Link/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Live/index.tsx"),
				S = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				T = s("./src/reddit/icons/fonts/Report/index.tsx"),
				R = s("./src/reddit/icons/fonts/Save/index.tsx"),
				N = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				M = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				F = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				D = s.n(F);
			var A = p.a.wrapped(e => i.a.createElement("i", {
					className: Object(l.a)(Object(w.b)("unpin"), e.className)
				}), "UnpinIcon", D.a),
				L = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				G = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				B = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				W = s("./src/reddit/components/OverflowMenu/index.tsx"),
				V = s("./src/reddit/components/ReportFlow/index.tsx"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				K = s("./src/reddit/controls/Dropdown/Row.tsx"),
				J = s("./src/reddit/components/Flatlist/constants.ts"),
				X = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Y = s("./src/reddit/constants/postLayout.ts"),
				z = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = s("./src/reddit/helpers/isCrosspost.ts"),
				q = s("./src/reddit/helpers/postEvent.ts"),
				Z = s("./src/reddit/helpers/trackers/post.ts"),
				$ = s("./src/reddit/models/Subreddit/index.ts"),
				ee = s("./src/reddit/selectors/activeModalId.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				oe = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				re = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				ie = s("./src/reddit/actions/postCollection/index.ts"),
				ae = s("./src/reddit/helpers/trackers/postCollection.ts"),
				de = s("./src/reddit/models/PostCreationForm/index.ts"),
				ce = s("./src/reddit/selectors/postCollection.ts"),
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
				return ge
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
				xe = p.a.wrapped(G.a, "Icon", pe.a),
				ge = p.a.wrapped(R.a, "Icon", pe.a),
				Oe = p.a.wrapped(C.a, "Icon", pe.a),
				fe = p.a.wrapped(j.a, "Icon", pe.a),
				Ce = p.a.wrapped(L.a, "AddCollectionIcon", pe.a),
				ve = p.a.wrapped(E.a, "Icon", pe.a),
				Ee = p.a.wrapped(N.a, "Icon", pe.a),
				je = p.a.wrapped(M.a, "Icon", pe.a),
				we = p.a.wrapped(B.b, "Icon", pe.a),
				Ie = p.a.wrapped(A, "Icon", pe.a),
				ke = p.a.wrapped(_.a, "LiveIcon", pe.a),
				Pe = p.a.wrapped(v.a, "CalendarIcon", pe.a),
				ye = p.a.wrapped(y.a, "LinkIcon", pe.a),
				_e = p.a.wrapped(K.b, "DropdownRow", pe.a),
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
						[J.a.Gild]: t,
						[J.a.Save]: s,
						[J.a.Share]: o,
						[J.a.Report]: n,
						[J.a.EditPost]: r,
						[J.a.Hide]: i
					}
				},
				Re = Object(a.b)(() => Object(c.c)({
					currentUser: oe.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(ee.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: ce.i,
					isSaved: te.u,
					isHidden: te.m,
					isSponsored: te.w,
					isNSFW: te.p,
					isOC: te.q,
					isPinned: te.r,
					isSpoiler: te.v,
					post: te.I,
					postSubredditAboutInfo: te.J,
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
						return Object(U.C)(e, o) && s && Object(oe.jb)(e, o) && Object(oe.ib)(e, {
							userName: Object(te.I)(e, {
								postId: o.postId
							}).author
						})
					},
					subredditOrProfile: te.U,
					hasSubredditRules: se.k,
					userIsOp: oe.jb,
					isPostPartOfACollection: ce.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(te.I)(e, {
								postId: s
							}).isSponsored) return !1;
						const o = Object(te.U)(e, {
							postId: s
						});
						if (!o) return !1;
						const n = o.type === $.c.User;
						return Object(ce.r)(e, o.name, n)
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
						onReportClick: () => e(Object(O.j)(o, n)),
						onStartEventNow: () => e(Object(m.startEventNowRequested)(o)),
						onEdit: () => {
							const t = !n && !r;
							e(Object(g.a)(o, t))
						},
						onFlairPost: () => e(Object(b.i)(Object(re.b)(o, n))),
						onToggleSendReplies: () => e(Object(x.H)(o)),
						showCollectionsList: (t, s) => {
							e(Object(ie.e)(t)).then(() => {
								const t = Object(de.t)(s, n);
								e(b.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(b.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(o)))
					}
				});
			class Ne extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: o
						} = this.props;
						o(Object(Z.f)(s.id, e, t ? "post_detail" : "post"))
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(Z.g)(this.props.post.id)) : this.props.sendEvent(Object(Z.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(X.b)({
							breakpointType: X.a.HideIfVWLarger,
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
					} = this, t = e.layout === Y.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(X.b)({
						breakpointType: X.a.HideIfVWLarger,
						flatlistItem: J.a.PostOverflowMenu,
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
						post: d,
						shouldRenderCollectionEditButtons: c,
						showEditFlair: l,
						showPinAction: p,
						toggleAddEventStartTimeModal: m,
						toggleEditStartTimeModal: u,
						userIsOp: b
					} = e, h = e.currentUser && e.currentUser.isEmployee, x = Object(Q.a)(e.post), g = e.post.belongsTo.type === f.a.PROFILE || Object($.d)(e.postSubredditAboutInfo), O = t && d.isGildable, C = Object(q.a)(e.post);
					return i.a.createElement("div", null, O && i.a.createElement(_e, {
						className: this.getBreakpointClass(J.a.Gild),
						displayText: o.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(fe, null)), i.a.createElement(_e, {
						className: this.getBreakpointClass(J.a.Share),
						displayText: o.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							this.handlePostEvent("share_copy"), e.onCopyLink()
						}
					}, i.a.createElement(ye, null)), i.a.createElement(_e, {
						className: this.getBreakpointClass(J.a.Share),
						displayText: o.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(ve, null)), e.showEditPost && i.a.createElement(_e, {
						className: this.getBreakpointClass(J.a.EditPost),
						displayText: o.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, i.a.createElement(be, null)), l && i.a.createElement(_e, {
						displayText: o.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, i.a.createElement(je, null)), i.a.createElement(_e, {
						className: this.getBreakpointClass(J.a.Save),
						displayText: e.isSaved ? o.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : o.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? i.a.createElement(xe, null) : i.a.createElement(ge, null)), p && i.a.createElement(_e, {
						displayText: r ? o.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : o.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(Ie, null) : i.a.createElement(Ee, null)), !e.isSponsored && i.a.createElement(_e, {
						className: this.getBreakpointClass(J.a.Hide),
						displayText: e.isHidden ? o.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : o.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, i.a.createElement(ue, null)), !e.isSponsored && !b && i.a.createElement(_e, {
						className: this.getBreakpointClass(J.a.Report),
						displayText: o.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(he, null)), c && s && a && i.a.createElement(_e, {
						onClick: a,
						displayText: o.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(ke, null)), c && s && u && i.a.createElement(_e, {
						onClick: u,
						displayText: o.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Pe, null)), c && !C && m && i.a.createElement(_e, {
						displayText: o.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: m
					}, i.a.createElement(Pe, null)), c && i.a.createElement(_e, {
						className: this.props.isPostPartOfACollection ? pe.a.disabledRow : void 0,
						displayText: o.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(Ce, null)), b && i.a.createElement(_e, {
						displayText: o.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(we, null)), h && e.userIsOp && i.a.createElement(_e, {
						displayText: e.post.distinguishType === n.B.ADMIN ? o.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : o.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === n.B.ADMIN ? e.onDistinguishPost(n.B.NONE) : e.onDistinguishPost(n.B.ADMIN)
					}, i.a.createElement(Oe, null)), b && g && !x && i.a.createElement(Se, {
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
					return i.a.createElement("div", null, i.a.createElement(W.b, {
						className: Object(l.a)(pe.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && i.a.createElement(V.a, {
						withOverlay: !0,
						overlayCustomStyles: V.b,
						postId: e.postId
					}), this.props.isConfirmDeleteOpen && i.a.createElement(Me, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const Me = Object(d.i)(e => i.a.createElement(ne.a, {
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
			t.g = Re(Ne)
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
				d = s.n(a);
			const c = r.a.div("ReportText", d.a),
				l = r.a.div("ReportsTitle", d.a),
				p = r.a.div("Reports", d.a);
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
					return n.a.createElement(c, {
						key: "mod-".concat(s)
					}, "u/".concat(s, ": ").concat(t))
				})), o && o.length > 0 && n.a.createElement(p, null, n.a.createElement(l, null, n.a.createElement(i.c, null, "User Reports")), o.map(e => {
					let [t, s] = e;
					return n.a.createElement(c, {
						key: "user-".concat(t)
					}, "".concat(s, ": ").concat(t))
				})))
			}
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
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/lib/addQueryParams/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				x = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				g = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				O = s("./src/reddit/icons/fonts/Link/index.tsx"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/routes/postCreation/constants.ts"),
				v = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/ShareMenu/index.m.less"),
				j = s.n(E),
				w = function(e, t) {
					var s = {};
					for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
					}
					return s
				};
			const I = Object(u.a)(b.a),
				k = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(v.b)(s)(e)
					}
				}),
				P = Object(r.b)(k, (e, t) => {
					var {
						dropdownId: s,
						permalink: o
					} = t, n = w(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							n.post && e(Object(a.b)("".concat(C.b, "?source_id=").concat(n.post.id)))
						},
						toggleDropdown: () => {
							e(Object(c.g)({
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
				const t = !e.subreddit || e.subreddit && e.subreddit.type === f.c.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return n.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, n.a.createElement(I, {
					className: j.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, n.a.createElement(h.b, {
					className: j.a.dropdownRow,
					displayText: Object(l.c)("Copy link"),
					onClick: () => {
						e.sendEventWithName("share_copy"), e.copyLink()
					}
				}, n.a.createElement(O.a, {
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
				}, n.a.createElement(g.a, {
					className: j.a.embedIcon
				}))))
			}))
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
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = s("./src/reddit/controls/Dropdown/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				p = s("./src/reddit/components/Reports/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				b = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/components/ViewReportsDropdown/ReportsList.m.less"),
				x = s.n(h);
			const g = a.a.wrapped(b.a, "Footer", x.a),
				O = a.a.wrapped(m.c, "FooterButton", x.a);
			var f = e => n.a.createElement("div", null, n.a.createElement(p.a, {
					modReports: e.modReports,
					userReports: e.userReports
				}), !e.isShowingHistoricalReports && n.a.createElement(g, null, n.a.createElement(O, {
					onClick: e.onIgnoreReports,
					text: e.ignoreReports ? Object(u.c)("Restore reports") : Object(u.c)("Ignore reports")
				}))),
				C = s("./src/reddit/components/ViewReportsDropdown/index.m.less"),
				v = s.n(C);
			const E = a.a.wrapped(c.a, "StyledDropdown", v.a),
				j = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				w = Object(r.b)(j),
				I = Object(d.a)(E),
				k = w(e => {
					const t = !(!e.model.numReports || -1 !== e.model.numReports),
						s = t ? e.model.modReportsDismissed || [] : e.model.modReports,
						o = t ? e.model.userReportsDismissed || [] : e.model.userReports;
					return n.a.createElement(I, {
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
			t.a = k
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
				d = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(c);

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
				}, n.a.createElement(d.a, {
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
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
				return n.a.createElement("i", c({
					className: Object(r.a)(Object(i.b)("comment"), d.a.commentIcon, t)
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", a.a);
			t.a = d
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", a.a);
			t.a = d
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("gild"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(r.a, null, e.desc)), "GildIcon", a.a);
			t.a = d
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", c({}, e, {
				className: Object(r.a)(Object(i.b)("modActions"), d.a.modActions, e.className)
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", a.a);
			t.a = d
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share"), d.a.shareIcon, e.className)
			})
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
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("tag"), " ").concat(e.className)
			}), "TagIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Unpin/index.m.less": function(e, t, s) {
			e.exports = {
				UnpinIcon: "_1X-tE86a0YWmVh310hgKTZ",
				unpinIcon: "_1X-tE86a0YWmVh310hgKTZ"
			}
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
		"./src/reddit/icons/svgs/Show/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				d: "M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"
			}))
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOv~53fee4bd.8d872c1b70268ff9d6e7.js.map