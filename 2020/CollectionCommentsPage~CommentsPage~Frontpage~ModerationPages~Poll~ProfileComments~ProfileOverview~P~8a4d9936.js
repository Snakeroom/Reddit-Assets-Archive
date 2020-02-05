// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936.abc393c2d52ca2a0f63b.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936"], {
		"./src/graphql/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"188c8c4aae7a"}')
		},
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
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
					const i = b(o.target, o.currentTarget);
					u(o.target, o.currentTarget, m.anchors) ? i && t && e(t(s, i)) : i && t && e(e => Object.assign({}, t(s, i)(e), {
						actionInfo: Object(d.previousPageActionInfo)(e)
					})), u(o.target, o.currentTarget, m.anchorsAndButtons) && n(o)
				}
			});

			function p(e) {
				class t extends r.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return r.a.createElement(e, c({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, s, n)
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
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				c = s("./src/lib/makeGqlRequest/index.ts");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, n, i) => Object(l.b)(Object(p.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/api/event_post_time.json"),
				method: o.bb.POST,
				data: {
					id: t,
					event_start: s,
					event_end: n,
					event_tz: i
				}
			});
			var b = (e, t) => Object(l.b)(Object(p.a)(e, [m.a]), {
					endpoint: "".concat(e.apiUrl, "/api/start_event_post.json"),
					method: o.bb.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/eventPosts.ts"),
				O = s("./src/reddit/selectors/posts.ts");
			s.d(t, "fetchEventPostsPending", (function() {
				return v
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return C
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return E
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return j
			})), s.d(t, "eventPostsRequested", (function() {
				return P
			})), s.d(t, "startEventNowSuccess", (function() {
				return k
			})), s.d(t, "startEventNowRequested", (function() {
				return I
			})), s.d(t, "editEventTimeSuccess", (function() {
				return y
			})), s.d(t, "editEventTimeRequested", (function() {
				return w
			}));
			const f = () => n.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				v = Object(i.a)(r.e),
				C = Object(i.a)(r.c),
				E = Object(i.a)(r.b),
				j = Object(i.a)(r.d),
				P = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n, i = s();
					const r = Object(g.d)(i, {
							subredditName: e
						}),
						l = Object(g.b)(i, {
							subredditName: e
						}),
						p = Object(g.c)(i, {
							subredditName: e
						}),
						m = Object(g.a)(i, {
							subredditName: e
						}),
						u = l && p;
					if (r) return;
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) b.nonInclusiveCursor = m;
					else if (l && !p) return;
					const O = Object(g.e)(i, {
						subredditName: e
					});
					t(v({
						key: O
					}));
					const P = await ((e, t) => Object(c.a)(e, Object.assign({}, d, {
						variables: t
					})))(o(), b);
					if (P.ok) {
						const {
							subredditInfoByName: e
						} = P.body.data, {
							eventPosts: n
						} = e, o = Object(h.a)(n);
						let r = [],
							a = {};
						const d = n.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						o.length > 0 && (r = o.map(e => e.id), a = o.reduce((e, t) => (e[t.id] = t, e), {})), i = s(), t((u ? j : C)({
							key: O,
							postIds: r,
							meta: i.meta,
							posts: a,
							pageInfo: d
						}))
					} else t(E({
						error: P.error,
						key: O
					})), t(Object(a.e)({
						kind: x.b.Error,
						text: f()
					}))
				}, k = Object(i.a)(r.f), I = e => async (t, s, o) => {
					let {
						apiContext: i
					} = o;
					if ((await b(i(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", d)], {
							hk: "e9iz9"
						});
						t(k({
							postId: e
						}));
						const i = s(),
							r = Object(O.I)(i, {
								postId: e
							}),
							d = r && r.title || "";
						t(Object(a.e)({
							kind: x.b.SuccessMod,
							text: o()
						}))
					} else t(Object(a.e)({
						kind: x.b.Error,
						text: f()
					}))
				}, y = Object(i.a)(r.a), w = (e, t) => async (s, i, r) => {
					let {
						apiContext: d
					} = r;
					const c = await u(d(), e, t.startDate, t.endDate, t.timezoneName);
					if (c.ok) {
						const t = c.body,
							r = 14400,
							d = Math.round(t.event_start / o.Cb);
						let l = t.event_end;
						const p = {
							eventStart: d,
							eventEnd: l = l && Math.round(l / o.Cb) || d + r,
							eventIsLive: t.event_is_live
						};
						s(y({
							postId: e,
							eventInfo: p
						}));
						const m = i(),
							u = Object(O.I)(m, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => n.fbt._("Following event time is updated successfully: {title}", [n.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(a.e)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else s(Object(a.e)({
						kind: x.b.Error,
						text: f()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
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
				v = s("./src/reddit/helpers/trackers/postComposer.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/actions/postCreation/constants.ts"),
				I = s("./src/reddit/actions/postCreation/general.ts");
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			}));
			const y = Object(o.a)(k.m),
				w = Object(o.a)(k.n),
				_ = Object(o.a)(k.z),
				S = Object(o.a)(k.F),
				T = Object(o.a)(k.G),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: i
					} = o;
					const r = n(),
						a = Object(P.I)(r, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(O.d)(e, "edit")(r)) : Object(f.b)(e, "edit")(r);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = E.h.RICH_TEXT,
						p = "";
					d.type === C.n.TEXT ? (l = E.h.MARKDOWN, p = d.content) : d.type === C.n.RTJSON && (p = (l = d.rteMode || E.h.RICH_TEXT) === E.h.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: c,
						postContent: p,
						postId: e
					}))
				}, M = e => async (t, s, o) => {
					let {
						apiContext: a
					} = o;
					const d = s(),
						{
							post: c
						} = e,
						l = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					v.r(s(), Object(I.o)(l)), t(_(c.id));
					const p = await h(a(), e),
						m = !1 === p.body.success;
					if (t(y(c.id)), p.ok && !m) {
						t(Object(r.e)({
							kind: j.b.SuccessCommunity,
							text: Object(n.a)(d.user.language, "postCreation.editing.success")
						})), t(T(c.id));
						const e = Object(g.a)(p.body);
						t(Object(i.H)({
							[c.id]: e
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
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
				v = s("./src/reddit/selectors/moderatingComments.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = s("./src/reddit/icons/fonts/helpers.tsx"),
				I = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				y = s.n(I);
			var w = l.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(k.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", y.a),
				_ = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				R = s.n(M);
			s.d(t, "b", (function() {
				return A
			})), s.d(t, "a", (function() {
				return V
			}));
			var F = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const A = l.a.wrapped(h.c, "RestrictedButton", R.a),
				D = l.a.wrapped(P.a, "Approve", R.a),
				L = l.a.wrapped(_.a, "Lock", R.a),
				G = l.a.wrapped(S.a, "Remove", R.a),
				B = l.a.wrapped(T.a, "Spam", R.a),
				W = l.a.wrapped(N.a, "Show", R.a),
				V = l.a.wrapped(w, "DistinguishShield", R.a),
				U = Object(g.t)(),
				H = e => "Distinguish--Dropdown--".concat(e),
				K = Object(a.c)({
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
						return Object(g.g)(e, t) || Object(C.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: g.N
				}),
				J = Object(r.b)(K, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(p.H)(s.id)),
						onDistinguishComment: (t, n) => e(Object(p.S)(s.id, t, n)),
						onLockComment: () => e(Object(p.X)(s.id)),
						onRemoveComment: () => e(Object(p.cb)(s.id, !1)),
						onSpamComment: () => e(Object(p.cb)(s.id, !0)),
						onShowComment: () => e(Object(p.Y)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(m.h)({
							tooltipId: H(s.id)
						}))
					}
				});
			t.c = U(J(l.a.wrapped(Object(x.b)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: r,
					collapsedBecauseCrowdControl: a,
					language: l,
					moderatorPermissions: p,
					modModeEnabled: m,
					onApproveComment: h,
					onDistinguishComment: x,
					onLockComment: g,
					onRemoveComment: v,
					onShowComment: C,
					onSpamComment: E,
					onToggleDistinguishDropdown: j,
					sendEvent: P
				} = e, k = F(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "language", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const I = Object(O.a)(p),
					y = Object(b.b)(s),
					w = s.isApproved && y,
					_ = !!o && o.isEmployee,
					S = !s.isRemoved,
					T = a,
					N = e => P(Object(f.a)(e, s.id));
				return i.a.createElement("div", {
					className: t
				}, (s.bannedBy || y) && i.a.createElement(A, {
					text: w ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						h(), N("approve")
					}
				}, i.a.createElement(D, null)), S && i.a.createElement(i.a.Fragment, null, i.a.createElement(A, {
					text: s.bannedBy === c.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						v(), s.bannedBy === c.k ? N("confirm_remove") : N("remove")
					}
				}, i.a.createElement(G, null)), i.a.createElement(A, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						E(), N("spam")
					}
				}, i.a.createElement(B, null))), i.a.createElement(A, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						g(), N(s.isLocked ? "unlock" : "lock")
					}
				}, i.a.createElement(L, null)), r && !_ && !s.bannedBy && i.a.createElement(A, {
					className: Object(d.a)({
						[R.a.selected]: k.isDistinguishDropdownOpen
					}),
					onClick: () => {
						N("mod_distinguish_menu"), j()
					}
				}, i.a.createElement(V, null), i.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: k.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: _,
					isUserMod: I,
					onDistinguishComment: x,
					sendEventWithName: N,
					tooltipId: H(s.id)
				})), T && i.a.createElement(A, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						C()
					}
				}, i.a.createElement(W, null)))
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
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
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
				h = Object(r.b)(b, e => ({
					sendChatPostExposureEvent: (t, s) => e((e, n) => Object(l.g)(n(), t, s))
				}));
			class x extends i.a.Component {
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
					} = this.props, o = s && (null === e || e);
					return t ? i.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, s ? i.a.createElement("div", {
						className: Object(d.a)(m.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.top, {
							[m.a.play]: o
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					})), i.a.createElement("p", {
						className: m.a.IconText
					}, Object(c.c)("Live Discussion")), i.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.bottom, {
							[m.a.play]: o
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					}))) : i.a.createElement("span", null)) : null
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
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
				g = s("./src/reddit/selectors/experiments/postSeo.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CommentsLink/index.m.less"),
				C = s.n(v);
			const E = Object(i.b)(() => Object(a.c)({
					isChatPostExperiment: x.d,
					isPostSEOEligible: g.d,
					language: f.P,
					postPermalink: O.H,
					shouldOpenPostInNewTab: f.T
				})),
				j = e => {
					let t, {
						type: s,
						numComments: i,
						isChatPostExperiment: r,
						language: a,
						modModeEnabled: c,
						hasModPostPerms: l,
						shouldShowIcon: m,
						shouldShowText: b,
						text: x
					} = e;
					return t = x || (s === u.g.Compact || c && l || r ? Object(p.b)(i) : 0 === i ? Object(d.a)(a, "posts.comment.verb") : Object(d.c)(a, "posts.comments.noun", i, {
						count: Object(p.b)(i)
					})), o.a.createElement(n.Fragment, null, m && o.a.createElement(h.a, {
						className: C.a.commentIcon,
						role: "presentation"
					}), b && o.a.createElement("span", {
						className: C.a.text
					}, t))
				};
			t.a = E(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPostExperiment: n,
					isCommentPermalink: i,
					isCommentsPage: a,
					isOverlay: d,
					isPostSEOEligible: p,
					language: u,
					modModeEnabled: h,
					numComments: x,
					onClick: g,
					postPermalink: O,
					shouldOpenPostInNewTab: f,
					shouldShowIcon: v = !0,
					shouldShowText: E = !0,
					text: P,
					type: k
				} = e, I = a && !i && !p, y = i && !d, w = o.a.createElement(j, {
					type: k,
					numComments: x,
					isChatPostExperiment: n,
					language: u,
					modModeEnabled: h,
					hasModPostPerms: s,
					shouldShowIcon: v,
					shouldShowText: E,
					text: P
				});
				return I ? o.a.createElement("div", {
					className: Object(c.a)(C.a.commentsLink, C.a.defaultCursorWrapper, t),
					onClick: g
				}, w) : o.a.createElement(r.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": m.a,
					className: Object(c.a)(C.a.commentsLink, C.a.link, t),
					target: f ? "_blank" : void 0,
					to: y ? Object(b.b)(O) : Object(l.a)(O, !0),
					onClick: g
				}, w)
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
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
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
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
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
				v = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: o,
						caretColor: r
					} = e, a = g(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return i.a.createElement("div", x({
						className: Object(c.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === o,
							[h.a.caretOnLeft]: "left" === o,
							[h.a.caretOnRight]: "right" === o,
							[h.a.caretOnBottom]: "bottom" === o
						}),
						style: Object.assign({}, n, {
							"--contentTooltip-caretColor": r && r[o] ? r[o] : Object(m.a)(e).body
						})
					}, a), t)
				}),
				C = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				E = Object(d.a)(v, [n.a.Click, n.a.Keydown]),
				j = Object(r.b)(C);
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = O
						} = this.props;
						p.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const n = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let o = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									o = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									o = n.left > t.width;
									break;
								case "right":
									o = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									o = n.top > t.height
							}
							this.setState({
								position: o ? this.props.defaultTooltipPosition : f(this.props.defaultTooltipPosition)
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
						caretPosition: n
					} = this.getPositions(e);
					return i.a.createElement(E, x({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = j(P)
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
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(m);
			const b = r.a.div("DistinguishWrapper", u.a),
				h = r.a.wrapped(p.a, "Inline", u.a),
				x = r.a.wrapped(c.a, "RadioOff", u.a),
				g = r.a.wrapped(l.a, "RadioOn", u.a),
				O = e => o.a.createElement(h, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(g, null) : o.a.createElement(x, null), e.text),
				f = r.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: r,
						isUserMod: a,
						isModDistinguished: c,
						isStickied: l,
						isTopLevelComment: p,
						onDistinguishComment: m
					} = e;
					return o.a.createElement(b, {
						className: t,
						style: s
					}, o.a.createElement(O, {
						onClick: () => m(i.B.NONE, null),
						selected: !c && !n,
						text: Object(d.c)("Undistinguish")
					}), a && o.a.createElement(O, {
						onClick: () => m(i.B.MODERATOR, null),
						selected: c && !l,
						text: Object(d.c)("Distinguish as Mod")
					}), p && a && o.a.createElement(O, {
						onClick: () => m(i.B.MODERATOR, !0),
						selected: l,
						text: Object(d.c)("Distinguish as Mod and Sticky")
					}), r && o.a.createElement(O, {
						onClick: () => m(i.B.ADMIN, null),
						selected: n,
						text: Object(d.c)("Distinguish as Admin")
					}))
				}, "DistinguishOptions", u.a);
			var v = Object(a.a)(f);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: r,
					isModDistinguished: a,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: l,
					sendEventWithName: p,
					tooltipId: m
				} = e;
				return o.a.createElement("div", {
					className: t,
					id: m
				}, o.a.createElement(v, {
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: r,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: m,
					isStickied: d,
					isTopLevelComment: c,
					onDistinguishComment: (e, t) => {
						l(e, t), e === i.B.MODERATOR ? p(!d && t ? "distinguish_sticky" : "distinguish") : e === i.B.ADMIN ? p("admin_distinguish") : a && e !== i.B.MODERATOR ? p("undistinguish") : s && e !== i.B.ADMIN && p("admin_undistinguish"), d && !t && p("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				d = s("./src/reddit/components/Flatlist/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					flatlistItem: t,
					isLoggedIn: s,
					isUserOp: n,
					noBreakpoints: d
				} = e, m = p(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return o.a.createElement(a.a, l({}, m, {
					className: d ? c.a.responsiveRow : Object(i.a)(c.a.responsiveRow, Object(r.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: n
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
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE"
				}(n || (n = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return p
			}));
			var n, o, i, r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				d = s.n(a),
				c = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(o || (o = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(i || (i = {}));
			const l = {
					[c.a.EditFlair]: o.Editing,
					[c.a.EditPost]: o.Editing,
					[c.a.Gild]: o.Awarding,
					[c.a.Hide]: o.First,
					[c.a.PostOverflowMenu]: o.First,
					[c.a.Report]: o.First,
					[c.a.Save]: o.First,
					[c.a.Share]: o.Second
				},
				p = e => {
					return (e => {
						const t = d.a[e.type],
							s = d.a[e.group],
							n = d.a[e.groupVariant];
						return Object(r.a)(t, s, n)
					})({
						type: e.breakpointType || n.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? i.Op : e ? i.LoggedIn : i.LoggedOut)(e.isLoggedIn, e.isUserOp)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
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
				v = s("./src/higherOrderComponents/makeAsync.tsx"),
				C = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/selectors/economics.ts");
			const j = Object(v.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~61cbc843"), s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsEntryPointsPostFlatlistSupportCTA")]).then(s.bind(null, "./src/reddit/components/Economics/EntryPoints/PostFlatlistSupportCTA/index.tsx")).then(e => e.default)
			});
			var P = Object(i.b)(() => Object(r.c)({
					featureEnabled: C.d.spSupport,
					userAcceptsSupport: (e, t) => {
						const s = e.posts.models[t.contentId];
						return !!s && Object(E.i)(e, {
							contentId: s.id,
							subredditId: t.subredditId
						})
					}
				}))((function(e) {
					return e.featureEnabled && e.userAcceptsSupport ? o.a.createElement(j, e) : null
				})),
				k = s("./src/reddit/i18n/components.tsx"),
				I = s("./src/reddit/constants/colors.ts"),
				y = s("./src/reddit/components/ContentTooltip/index.tsx"),
				w = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				_ = s.n(w);
			class S extends o.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return o.a.createElement(y.a, {
						caretColor: {
							top: I.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, o.a.createElement("div", {
						className: _.a.container
					}, o.a.createElement("div", {
						className: _.a.newBadge
					}, o.a.createElement(k.c, null, "New")), o.a.createElement("div", {
						className: _.a.text
					}, o.a.createElement(k.c, null, "Try giving a new Appreciation Award"))))
				}
			}
			var T = S,
				N = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				R = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				F = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				A = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				D = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				L = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				G = s("./src/reddit/components/ShareMenu/index.tsx"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				W = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				V = s("./src/reddit/constants/postLayout.ts"),
				U = s("./src/reddit/contexts/PageLayer/index.tsx"),
				H = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				K = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				J = s("./src/reddit/i18n/utils.ts"),
				q = s("./src/reddit/selectors/user.ts"),
				z = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				X = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = s("./src/reddit/helpers/trackers/modTools.ts"),
				Y = s("./src/reddit/helpers/trackers/post.ts"),
				Z = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				$ = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Report/index.tsx"),
				te = s("./src/reddit/icons/fonts/Share/index.tsx"),
				se = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				ne = s("./src/reddit/models/PostCreationForm/index.ts"),
				oe = s("./src/reddit/models/User/index.ts"),
				ie = s("./src/reddit/components/Flatlist/constants.ts"),
				re = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
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
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
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
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let xe, ge;
			const Oe = l.a.button("ShareButton", ue.a),
				fe = l.a.wrapped(G.a, "ShareMenu", ue.a),
				ve = Object(c.a)(e => {
					var {
						className: t
					} = e, s = he(e, ["className"]);
					return o.a.createElement($.a, be({}, s, {
						className: Object(d.a)(ue.a.modActionsIcon, t),
						style: {
							color: Object(K.a)(Object(H.a)(s), se.a.actionIcon, se.b.actionIcon)
						}
					}))
				}),
				Ce = e => o.a.createElement("div", be({}, e, {
					className: Object(d.a)(ue.a.flatlistSeparator, e.className)
				})),
				Ee = Object(U.t)({
					currentProfileName: U.h,
					isCommentPermalink: U.v,
					isCommentsPage: U.w,
					isProfilePostListing: U.H,
					pageLayer: e => e
				}),
				je = Object(r.c)({
					activeModalId: pe.a,
					layout: U.L,
					userIsOp: q.fb,
					subreddit: U.q
				}),
				Pe = Object(i.b)(je, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: i
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(de.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(b.J)(n.postId)),
						onHide: t => e(Object(b.N)(n.postId, !n.hidden, o, !0)),
						onReportClick: () => e(Object(g.j)(n.postId, o)),
						onEdit: () => {
							const t = !o && !i;
							e(Object(h.a)(n.postId, t))
						},
						onFlairPost: () => e(Object(u.i)(Object(F.b)(n.postId, o))),
						onGildClick: () => e(Object(m.d)(n.postId, o)),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: o
							} = t;
							return e(Object(x.h)({
								post: n,
								selectedTemplateId: s,
								previewFlair: o
							}))
						},
						toggleEditStartTimeModal: async () => {
							xe && ge || ([xe, ge] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(ne.s)(n.postId, o, ne.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							ge && e(ge(n.id, t))
						}
					}
				});
			class ke extends o.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: n
						} = this.props;
						Object(X.d)(X.a.GildingFlow), e();
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						n(o(t.id))
					}, this.onToggleCurrentModal = () => {
						this.props.activeModalId && this.props.onToggleModal(this.props.activeModalId)
					}, this.onToggleCollectionListModal = () => {
						const {
							isOverlay: e,
							post: t
						} = this.props, s = Object(ne.t)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(Y.f)(s.id, e, t ? "post_detail" : "post"))
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
						currentProfileName: n,
						currentUser: i,
						hasModFlairPerms: r,
						hasModPostPerms: c,
						isCommentPermalink: l,
						isCommentsPage: m,
						isLargePost: u,
						isOverlay: b,
						isProfilePostListing: h,
						isSticky: x,
						language: g,
						layout: v,
						modModeEnabled: C,
						onFlairChanged: E,
						onIgnoreReports: j,
						onOpenReportsDropdown: I,
						pageLayer: y,
						post: w,
						sendEvent: _,
						showEditFlair: S,
						showEditPost: G,
						subreddit: B,
						toggleEditStartTimeModal: U,
						tooltipType: H,
						userIsOp: K
					} = this.props, q = !!i && Object(oe.f)(i) === w.author, X = Object(ae.a)("View--Reports", w.id, H), $ = Object(ae.a)("View--GiveAward", w.id, H), se = Object(M.c)(w), de = Ie("-mod-actions-menu", w.id, b, x), pe = Object(M.a)(w), me = w.postId, be = v === V.g.Large, he = !m && be || c && C, ge = !(b || m || l), Ce = i && w.isGildable;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(d.a)(ue.a.flatlistContainer, s)
					}, o.a.createElement(f.a, {
						className: ue.a.commentsLink,
						hasModPostPerms: c,
						isCommentsPage: m,
						isCommentPermalink: l,
						isOverlay: b,
						postId: w.id,
						modModeEnabled: C,
						numComments: w.numComments
					}), B && i && !K && !w.isNSFW && o.a.createElement(P, {
						className: ue.a.supportButton,
						contentId: w.id,
						inPostFeed: ge,
						modModeEnabled: c && C,
						renderInPortal: ge,
						subredditId: B.id,
						targetName: w.author
					}), Ce && o.a.createElement(o.a.Fragment, null, o.a.createElement(z.a, {
						displayText: Object(J.c)("Give Award"),
						flatlistItem: ie.a.Gild,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.handleGild,
						skipRoleAttr: !0
					}, o.a.createElement(D.f, {
						id: $
					})), o.a.createElement(T, {
						postOrComment: w,
						tooltipId: $
					})), o.a.createElement(fe, {
						className: Object(re.b)({
							flatlistItem: ie.a.Share,
							isLoggedIn: !!i,
							isUserOp: K
						}),
						dropdownId: Ie("-share-menu", w.id, b, x),
						permalink: w.permalink,
						post: w,
						sendEventWithName: this.sendEventWithName,
						subreddit: B
					}, o.a.createElement(Oe, {
						"data-click-id": "share"
					}, o.a.createElement(te.a, {
						className: ue.a.shareIcon
					}), o.a.createElement("span", {
						className: ue.a.shareText
					}, o.a.createElement(k.c, null, "share")))), G && !he && o.a.createElement(z.a, {
						displayText: Object(J.c)("Edit post"),
						flatlistItem: ie.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, o.a.createElement(D.b, null)), (!c || !C) && o.a.createElement(z.a, {
						displayText: Object(a.a)(g, "posts.".concat(w.saved ? "unsave" : "save")),
						flatlistItem: ie.a.Save,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.onSaveClick,
						skipRoleAttr: !0
					}, w.saved ? o.a.createElement(D.e, null) : o.a.createElement(D.d, null)), !w.isSponsored && !he && o.a.createElement(z.a, {
						displayText: Object(a.a)(g, "posts.".concat(w.hidden ? "unhide" : "hide")),
						flatlistItem: ie.a.Hide,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.onHideClick,
						skipRoleAttr: !0
					}, o.a.createElement(D.a, null)), !q && !w.isSponsored && !he && o.a.createElement(z.a, {
						displayText: Object(J.c)("report"),
						flatlistItem: ie.a.Report,
						isLoggedIn: !!i,
						isUserOp: K,
						onClick: this.onReportClick,
						skipRoleAttr: !0
					}, o.a.createElement(D.c, null)), o.a.createElement(R.a, {
						isOverlay: b,
						layout: v,
						modModeEnabled: C,
						post: w,
						sendEvent: _
					}), c && o.a.createElement(N.a, {
						dropdownId: de,
						onClick: () => _(Object(Y.f)(w.id, "post_mod_action_menu"))
					}, o.a.createElement(ve, null), o.a.createElement(A.a, {
						canEditFlair: r && !!S,
						hasModPostPerms: c,
						isOverlay: !!b,
						isPostAuthor: q,
						language: g,
						modModeEnabled: C,
						post: w,
						tooltipId: de
					})), c && se && !C && o.a.createElement(L.c, {
						text: "".concat(pe),
						onClick: () => {
							I(X), _(Object(Y.f)(w.id, "post_report_menu"))
						},
						id: X
					}, o.a.createElement(W.a, {
						model: w,
						onIgnoreReports: () => {
							j(), _(Object(Q.j)(w.ignoreReports ? "restore_reports" : "ignore_reports", w.id))
						},
						tooltipId: X
					}), w.ignoreReports ? o.a.createElement(Z.a, null) : o.a.createElement(ee.a, null)), (i || !w.isSponsored) && o.a.createElement(D.g, {
						currentProfileName: n,
						dropdownId: Ie("-overflow-menu", w.id, b, x),
						isCommentsPage: m,
						isFixed: x,
						isOverlay: !!b,
						isProfilePostListing: h,
						layout: v,
						modModeWithPost: C && c,
						pageLayer: y,
						permalink: w.permalink,
						postId: me,
						sendEvent: _,
						showEditPost: !!G,
						showEditFlair: !!S,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: U,
						toggleEditStartTimeModal: U
					}), e === Object(ne.t)(w.id, b) && o.a.createElement(ce.a, {
						subredditId: w.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: w.id,
						onSelectCollection: this.addPostToCollection,
						titleText: Object(J.c)("Add post to a collection"),
						onItemHoverActionText: Object(J.c)("add"),
						isOverlay: b
					}), e === Object(ne.s)(w.id, b, ne.j.POST_OVERFLOW_MENU) && xe && o.a.createElement(xe, {
						onChange: t,
						onClose: U,
						schedule: Object(p.c)(w),
						shouldShowDeleteButton: !1
					}), e === Object(ne.u)(w.id, b) && o.a.createElement(le.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: w.belongsTo.id
					}), e === Object(F.b)(w.id, b) && o.a.createElement(F.a, {
						flairs: w.flair,
						subredditId: w.belongsTo.id,
						modalId: Object(F.b)(w.id, b),
						onFlairChanged: E
					}), o.a.createElement("div", {
						className: ue.a.flexSpacer
					})), ge && o.a.createElement(O.a, {
						className: Object(d.a)(ue.a.liveDiscussionWrapper, {
							[ue.a.large]: u
						}),
						isMod: c,
						postId: w.postId
					}))
				}
			}
			const Ie = (e, t, s, n) => {
				let o = t;
				return s && (o += "-overlay"), n && (o += "-sticky"), o += e
			};
			t.c = Ee(Pe(Object(B.b)(ke)))
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const i = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = i
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts");
			const p = Object(r.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				m = Object(i.b)(p, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				u = () => null;
			t.a = m(e => o.a.createElement("div", {
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? u : e.onClick
			}, e.inCommentFlatlist ? o.a.createElement(d.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : o.a.createElement(c.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				i = e => (e.numReports || 0) > 0
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
			var n;
			s.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(n || (n = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return p
			}));
			var n, o, i, r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				d = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				c = s.n(d);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(i || (i = {}));
			const l = {
					[a.a.Approve]: o.Approve,
					[a.a.Remove]: o.Remove,
					[a.a.Spam]: o.Spam,
					[a.a.Flair]: o.Flair
				},
				p = e => {
					const t = l[e.flatlistItem],
						s = c.a[e.breakpointType],
						n = c.a[t],
						o = e.isCompact ? c.a[i.Compact] : c.a[i.Default];
					return Object(r.a)(s, n, o)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
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
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				E = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				P = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				I = s("./src/reddit/selectors/postFlair.ts"),
				y = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				_ = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(_);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(w.b)({
						breakpointType: w.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(r.b)(() => Object(a.c)({
					activeModalId: P.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(I.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(k.i)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(p.o)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(m.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(p.I)(s.id, !1)),
						onSpamPost: () => e(Object(p.I)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = N(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: r,
					layout: a,
					moderatorPermissions: l,
					modModeEnabled: p,
					onApprovePost: m,
					onFlairPost: P,
					onRemovePost: k,
					onSpamPost: I,
					post: w,
					sendEvent: _,
					showIconsOnly: N
				} = e, M = Object(O.a)(l), R = Object(b.b)(w), F = !(!w.approvedBy || !R), A = Object(h.b)(w.id, r), D = M && p && !w.isSponsored, L = t && p;
				let G, B, W;
				N || (G = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(F, w.approvedBy), B = ((e, t) => e ? t === c.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(w.isRemoved, w.bannedBy), W = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(w.isSpam));
				const V = !r && a === g.g.Compact;
				return i.a.createElement("div", {
					className: Object(d.a)(S.a.container, s)
				}, D && i.a.createElement(o.Fragment, null, i.a.createElement(x.b, {
					className: T(y.a.Approve, V),
					key: "approveButton",
					text: G,
					disabled: !!w.approvedBy && !R,
					onClick: () => {
						m(), _(Object(f.f)(w.id, "approve"))
					}
				}, i.a.createElement(v.a, null)), i.a.createElement(x.d, {
					className: T(y.a.Remove, V),
					key: "removeButton",
					text: B,
					disabled: w.isRemoved && w.bannedBy !== c.k,
					onClick: () => {
						k(), w.isRemoved && w.bannedBy === c.k ? _(Object(f.f)(w.id, "confirm_remove")) : _(Object(f.f)(w.id, "remove"))
					}
				}, i.a.createElement(C.a, null)), i.a.createElement(x.d, {
					className: T(y.a.Spam, V),
					key: "removeSpamButton",
					text: W,
					disabled: w.isSpam,
					onClick: () => {
						I(), _(Object(f.f)(w.id, "spam"))
					}
				}, i.a.createElement(E.a, null))), L && i.a.createElement(x.c, {
					className: T(y.a.Flair, V),
					key: "tagButton",
					onClick: () => {
						P(A)(), _(Object(f.f)(w.id, "post_flair_picker"))
					}
				}, i.a.createElement(j.a, null)), i.a.createElement(u.f, {
					postId: w.id
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/components/AdViewability/index.tsx"),
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
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = g.a.div("WrappedPost", x.a),
				C = Object(i.c)({
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
							post: n
						} = t;
						const o = Object(a.b)(n.postId, s);
						return Object(p.c)(e, o)
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
				E = Object(c.a)(C),
				j = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							afterClickTracking: t,
							buffering: s,
							children: n,
							className: i,
							continuousViewingStartedAt: a,
							gildModalIsOpen: c,
							makePostContainerId: p,
							playing: m,
							post: b,
							onClick: h,
							onPostContentClick: x,
							onPostViewable: g,
							isOverlay: C
						} = e,
						E = f(e, ["afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						P = o.a.createElement(v, O({}, E, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (t(() => h && h(e, b))(e), x && j(e) && x(e, b))
							},
							className: Object(u.a)(i, "Post ".concat(b.id), {
								promotedlink: b.isSponsored
							}),
							id: p ? p(b.id) : b.id,
							tabIndex: -1
						}), n, c && o.a.createElement(d.a, null)),
						k = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || k ? o.a.createElement(r.a, {
						onViewable: e => g(b, e),
						children: P,
						trackVideoMetrics: k && !s && m,
						continuousViewingStartedAt: a
					}) : P
				}
			}
			t.a = E(Object(b.c)(P))
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const i = () => null;
			t.a = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(o.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: i
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/reddit/actions/eventPosts/index.ts"),
				b = s("./src/reddit/actions/gold/modals.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/pinnedPost.ts"),
				g = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/postCreation/editing.ts"),
				f = s("./src/reddit/actions/reportFlow.ts"),
				v = s("./src/reddit/constants/posts.ts"),
				C = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				E = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				j = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				P = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				k = s("./src/reddit/icons/fonts/Gild/index.tsx"),
				I = s("./src/reddit/icons/fonts/helpers.tsx"),
				y = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				w = s.n(y);
			var _ = m.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(I.b)("hide"), " ").concat(e.className)
				}), "HideIcon", w.a),
				S = s("./src/reddit/icons/fonts/Link/index.tsx"),
				T = s("./src/reddit/icons/fonts/Live/index.tsx"),
				N = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				M = s("./src/reddit/icons/fonts/Report/index.tsx"),
				R = s("./src/reddit/icons/fonts/Save/index.tsx"),
				F = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				A = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				D = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				L = s.n(D);
			var G = m.a.wrapped(e => r.a.createElement("i", {
					className: Object(p.a)(Object(I.b)("unpin"), e.className)
				}), "UnpinIcon", L.a),
				B = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				W = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				V = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				U = s("./src/reddit/components/OverflowMenu/index.tsx"),
				H = s("./src/reddit/components/ReportFlow/index.tsx"),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				J = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				q = s("./src/reddit/controls/Dropdown/Row.tsx"),
				z = s("./src/reddit/components/Flatlist/constants.ts"),
				X = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				Y = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Z = s("./src/reddit/helpers/isCrosspost.ts"),
				$ = s("./src/reddit/helpers/postEvent.ts"),
				ee = s("./src/reddit/helpers/trackers/post.ts"),
				te = s("./src/reddit/models/Subreddit/index.ts"),
				se = s("./src/reddit/selectors/activeModalId.ts"),
				ne = s("./src/reddit/selectors/posts.ts"),
				oe = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				re = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ae = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				de = s("./src/reddit/actions/postCollection/index.ts"),
				ce = s("./src/reddit/helpers/trackers/postCollection.ts"),
				le = s("./src/reddit/models/PostCreationForm/index.ts"),
				pe = s("./src/reddit/selectors/postCollection.ts"),
				me = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				ue = s.n(me);
			s.d(t, "a", (function() {
				return he
			})), s.d(t, "b", (function() {
				return xe
			})), s.d(t, "c", (function() {
				return ge
			})), s.d(t, "e", (function() {
				return Oe
			})), s.d(t, "d", (function() {
				return fe
			})), s.d(t, "f", (function() {
				return Ce
			})), s.d(t, "h", (function() {
				return Me
			}));
			var be = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const he = m.a.wrapped(_, "Icon", ue.a),
				xe = m.a.wrapped(N.a, "Icon", ue.a),
				ge = m.a.wrapped(M.a, "Icon", ue.a),
				Oe = m.a.wrapped(W.a, "Icon", ue.a),
				fe = m.a.wrapped(R.a, "Icon", ue.a),
				ve = m.a.wrapped(E.a, "Icon", ue.a),
				Ce = m.a.wrapped(k.a, "Icon", ue.a),
				Ee = m.a.wrapped(B.a, "AddCollectionIcon", ue.a),
				je = m.a.wrapped(P.a, "Icon", ue.a),
				Pe = m.a.wrapped(F.a, "Icon", ue.a),
				ke = m.a.wrapped(A.a, "Icon", ue.a),
				Ie = m.a.wrapped(V.b, "Icon", ue.a),
				ye = m.a.wrapped(G, "Icon", ue.a),
				we = m.a.wrapped(T.a, "LiveIcon", ue.a),
				_e = m.a.wrapped(j.a, "CalendarIcon", ue.a),
				Se = m.a.wrapped(S.a, "LinkIcon", ue.a),
				Te = m.a.wrapped(q.b, "DropdownRow", ue.a),
				Ne = m.a.wrapped(J.a, "PostCheckboxMenuItem", ue.a),
				Me = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: n = !0,
						report: o = !0,
						editPost: i = !0,
						hide: r = !0
					} = e;
					return {
						[z.a.Gild]: t,
						[z.a.Save]: s,
						[z.a.Share]: n,
						[z.a.Report]: o,
						[z.a.EditPost]: i,
						[z.a.Hide]: r
					}
				},
				Re = Object(a.b)(() => Object(c.c)({
					currentUser: ie.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(se.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: pe.i,
					isSaved: ne.u,
					isHidden: ne.m,
					isSponsored: ne.w,
					isNSFW: ne.p,
					isOC: ne.q,
					isPinned: ne.r,
					isSpoiler: ne.v,
					post: ne.I,
					postSubredditAboutInfo: ne.J,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: ne.S,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = be(t, ["isProfilePostListing"]);
						return Object(K.B)(e, n) && s && Object(ie.fb)(e, n) && Object(ie.eb)(e, {
							userName: Object(ne.I)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: ne.U,
					hasSubredditRules: oe.k,
					userIsOp: ie.fb,
					isPostPartOfACollection: pe.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(ne.I)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(ne.U)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === te.c.User;
						return Object(pe.r)(e, n.name, o)
					}
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: i
					} = t;
					return {
						onCopyLink: () => e(Object(g.w)(s)),
						onDelete: t => e(Object(g.C)(n, t, o)),
						onDistinguishPost: t => e(Object(g.q)(n, t)),
						onGildClick: () => e(Object(b.d)(n, o)),
						onToggleSave: () => e(Object(g.J)(n)),
						onToggleNSFW: () => e(Object(g.y)(n)),
						onToggleOC: () => e(Object(g.z)(n)),
						onTogglePinned: () => e(Object(x.i)(n)),
						onToggleSpoiler: () => e(Object(g.M)(n)),
						onHide: t => e(Object(g.N)(n, !t, o, !0)),
						onReportClick: () => e(Object(f.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(C.p)()(t()))), e(Object(u.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !i;
							e(Object(O.a)(n, t))
						},
						onFlairPost: () => e(Object(h.i)(Object(ae.b)(n, o))),
						onToggleSendReplies: () => e(Object(g.K)(n)),
						showCollectionsList: (t, s) => {
							e(Object(de.e)(t)).then(() => {
								const t = Object(le.t)(s, o);
								e(h.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(h.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n)))
					}
				});
			class Fe extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = e => {
						const {
							isOverlay: t,
							post: s,
							sendEvent: n
						} = this.props;
						n(Object(ee.f)(s.id, e, t ? "post_detail" : "post"))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						Object(Y.d)(Y.a.GildingFlow), this.props.onGildClick();
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(ee.g)(this.props.post.id)) : this.props.sendEvent(Object(ee.c)(this.props.post.id)), this.props.onTogglePinned()
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
							sendEvent: n
						} = this.props;
						e || (n(Object(ce.b)(s.id)), t(s.belongsTo.id, s.id))
					}
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === Q.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(X.b)({
						breakpointType: X.a.HideIfVWLarger,
						flatlistItem: z.a.PostOverflowMenu,
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
						isPinned: i,
						onStartEventNow: a,
						post: d,
						shouldRenderCollectionEditButtons: c,
						showEditFlair: l,
						showPinAction: p,
						toggleAddEventStartTimeModal: m,
						toggleEditStartTimeModal: u,
						userIsOp: b
					} = e, h = e.currentUser && e.currentUser.isEmployee, x = Object(Z.a)(e.post), g = e.post.belongsTo.type === v.a.PROFILE || Object(te.d)(e.postSubredditAboutInfo), O = t && d.isGildable, f = Object($.a)(e.post);
					return r.a.createElement("div", null, O && r.a.createElement(Te, {
						className: this.getBreakpointClass(z.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, r.a.createElement(Ce, null)), r.a.createElement(Te, {
						className: this.getBreakpointClass(z.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							this.handlePostEvent("share_copy"), e.onCopyLink()
						}
					}, r.a.createElement(Se, null)), r.a.createElement(Te, {
						className: this.getBreakpointClass(z.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(je, null)), e.showEditPost && r.a.createElement(Te, {
						className: this.getBreakpointClass(z.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, r.a.createElement(xe, null)), l && r.a.createElement(Te, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, r.a.createElement(ke, null)), r.a.createElement(Te, {
						className: this.getBreakpointClass(z.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? r.a.createElement(Oe, null) : r.a.createElement(fe, null)), p && r.a.createElement(Te, {
						displayText: i ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? r.a.createElement(ye, null) : r.a.createElement(Pe, null)), !e.isSponsored && r.a.createElement(Te, {
						className: this.getBreakpointClass(z.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, r.a.createElement(he, null)), !e.isSponsored && !b && r.a.createElement(Te, {
						className: this.getBreakpointClass(z.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, r.a.createElement(ge, null)), c && s && a && r.a.createElement(Te, {
						onClick: a,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, r.a.createElement(we, null)), c && s && u && r.a.createElement(Te, {
						onClick: u,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, r.a.createElement(_e, null)), c && !f && m && r.a.createElement(Te, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: m
					}, r.a.createElement(_e, null)), c && r.a.createElement(Te, {
						className: this.props.isPostPartOfACollection ? ue.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, r.a.createElement(Ee, null)), b && r.a.createElement(Te, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, r.a.createElement(Ie, null)), h && e.userIsOp && r.a.createElement(Te, {
						displayText: e.post.distinguishType === o.B.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.B.ADMIN ? e.onDistinguishPost(o.B.NONE) : e.onDistinguishPost(o.B.ADMIN)
					}, r.a.createElement(ve, null)), b && g && !x && r.a.createElement(Ne, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), b && r.a.createElement(Ne, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), b && r.a.createElement(Ne, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && r.a.createElement(Ne, {
						text: n.fbt._("Send me reply notifications", null, {
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
					return r.a.createElement("div", null, r.a.createElement(U.b, {
						className: Object(p.a)(ue.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && r.a.createElement(H.a, {
						withOverlay: !0,
						overlayCustomStyles: H.b,
						postId: e.postId
					}), this.props.isConfirmDeleteOpen && r.a.createElement(Ae, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const Ae = Object(d.i)(e => r.a.createElement(re.a, {
				toggleModal: e.toggleConfirmDelete,
				onConfirm: () => e.handleDeletePost(e.location),
				actionText: n.fbt._("delete post", null, {
					hk: "49hVoG"
				}),
				headerText: n.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}),
				modalText: n.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
					hk: "2eDKWP"
				}),
				withOverlay: !0
			}));
			t.g = Re(Fe)
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const i = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router/esm/react-router.js"),
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
				v = s("./src/reddit/routes/postCreation/constants.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/ShareMenu/index.m.less"),
				j = s.n(E),
				P = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const k = Object(u.a)(b.a),
				I = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(C.b)(s)(e)
					}
				}),
				y = Object(i.b)(I, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = P(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							o.post && e(Object(a.b)("".concat(v.b, "?source_id=").concat(o.post.id)))
						},
						toggleDropdown: () => {
							e(Object(c.h)({
								tooltipId: s
							}))
						},
						copyLink: () => e(Object(m.w)(Object(p.a)(n, {
							utm_source: "share",
							utm_medium: "web2x"
						})))
					}
				});
			t.a = y(Object(r.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === f.c.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return o.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, o.a.createElement(k, {
					className: j.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, o.a.createElement(h.b, {
					className: j.a.dropdownRow,
					displayText: Object(l.c)("Copy link"),
					onClick: () => {
						e.sendEventWithName("share_copy"), e.copyLink()
					}
				}, o.a.createElement(O.a, {
					className: j.a.linkIcon
				})), s && o.a.createElement(h.b, {
					className: j.a.dropdownRow,
					displayText: Object(l.c)("crosspost"),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, o.a.createElement(x.a, {
					className: j.a.crosspostIcon
				})), t && o.a.createElement(h.b, {
					className: j.a.dropdownRow,
					displayText: Object(l.c)("Embed"),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, o.a.createElement(g.a, {
					className: j.a.embedIcon
				}))))
			}))
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				l = s.n(c);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const u = e => o.a.createElement("div", {
					className: Object(i.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(d.a, {
					className: l.a.expandRight
				}, e.isSelected ? o.a.createElement(a.a, {
					className: l.a.checkboxSelected
				}) : o.a.createElement(r.a, {
					className: l.a.checkbox
				}), e.text)),
				b = e => {
					var {
						className: t
					} = e, s = m(e, ["className"]);
					return o.a.createElement(u, p({
						className: Object(i.a)(l.a.postCheckboxMenuItem, t)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return o.a.createElement("i", c({
					className: Object(i.a)(Object(r.b)("comment"), d.a.commentIcon, t)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				a = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("crosspost"), " ").concat(e.className)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				a = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("embed"), " ").concat(e.className)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Gild/index.m.less"),
				a = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("gild"), " ").concat(e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc)), "GildIcon", a.a);
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				a = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", c({}, e, {
				className: Object(i.a)(Object(r.b)("modActions"), d.a.modActions, e.className)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				a = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("pencil"), " ").concat(e.className)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Save/index.m.less"),
				a = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(i.a)(Object(r.b)("share"), d.a.shareIcon, e.className)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				a = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("tag"), " ").concat(e.className)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				a = s.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(i.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12.5 2h-11a.5.5 0 0 0 0 1A2.5 2.5 0 0 1 4 5.5v12.24a1 1 0 0 0 1.4.92l4.6-2 4.6 2a1 1 0 0 0 1.4-.92V5.5A3.5 3.5 0 0 0 12.5 2zm1 6.53l-4.26 4.29a.75.75 0 0 1-1.06 0L6.47 11.1A.75.75 0 0 1 7.53 10l1.18 1.18 3.76-3.76a.75.75 0 0 1 1.06 1.06z"
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
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/selectors/posts.ts");
			const i = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				r = (e, t) => {
					const s = i(e, t);
					return Object(o.O)(e, {
						listingKey: s
					}) || []
				},
				a = (e, t) => {
					const s = i(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				d = (e, t) => {
					const s = i(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				c = (e, t) => {
					const s = i(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				l = (e, t) => {
					const s = i(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936.abc393c2d52ca2a0f63b.js.map