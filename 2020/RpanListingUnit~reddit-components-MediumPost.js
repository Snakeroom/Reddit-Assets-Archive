// https://www.redditstatic.com/desktop2x/RpanListingUnit~reddit-components-MediumPost.b4f798258948212efa41.js
// Retrieved at 10/26/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanListingUnit~reddit-components-MediumPost"], {
		"./src/graphql/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"a04c25fcce11"}')
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return v
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return _
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return C
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return j
			})), s.d(t, "eventPostsRequested", (function() {
				return E
			})), s.d(t, "startEventNowSuccess", (function() {
				return k
			})), s.d(t, "startEventNowRequested", (function() {
				return y
			})), s.d(t, "editEventTimeSuccess", (function() {
				return w
			})), s.d(t, "editEventTimeRequested", (function() {
				return I
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/graphql/operations/EventPostsBySubredditName.json"),
				d = s("./src/lib/makeGqlRequest/index.ts");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, n, r) => Object(l.a)(Object(p.a)(e, [m.a]), {
				endpoint: "".concat(e.apiUrl, "/api/event_post_time.json"),
				method: o.db.POST,
				data: {
					id: t,
					event_start: s,
					event_end: n,
					event_tz: r
				}
			});
			var h = (e, t) => Object(l.a)(Object(p.a)(e, [m.a]), {
					endpoint: "".concat(e.apiUrl, "/api/start_event_post.json"),
					method: o.db.POST,
					data: {
						id: t
					}
				}),
				b = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/eventPosts.ts"),
				g = s("./src/reddit/selectors/posts.ts");
			const O = () => n.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				v = Object(r.a)(i.e),
				_ = Object(r.a)(i.c),
				C = Object(r.a)(i.b),
				j = Object(r.a)(i.d),
				E = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n, r = s();
					const i = Object(f.d)(r, {
							subredditName: e
						}),
						l = Object(f.b)(r, {
							subredditName: e
						}),
						p = Object(f.c)(r, {
							subredditName: e
						}),
						m = Object(f.a)(r, {
							subredditName: e
						}),
						u = l && p;
					if (i) return;
					const h = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) h.nonInclusiveCursor = m;
					else if (l && !p) return;
					const g = Object(f.e)(r, {
						subredditName: e
					});
					t(v({
						key: g
					}));
					const E = await ((e, t) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
						variables: t
					})))(o(), h);
					if (E.ok) {
						const {
							subredditInfoByName: e
						} = E.body.data, {
							eventPosts: n
						} = e, o = Object(b.a)(n);
						let i = [],
							a = {};
						const c = n.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						o.length > 0 && (i = o.map(e => e.id), a = o.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? j : _)({
							key: g,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: c
						}))
					} else t(C({
						error: E.error,
						key: g
					})), t(Object(a.e)({
						kind: x.b.Error,
						text: O()
					}))
				}, k = Object(r.a)(i.f), y = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if ((await h(r(), e)).ok) {
						const o = () => n.fbt._("Following event has started successfully: {title}", [n.fbt._param("title", c)], {
							hk: "e9iz9"
						});
						t(k({
							postId: e
						}));
						const r = s(),
							i = Object(g.O)(r, {
								postId: e
							}),
							c = i && i.title || "";
						t(Object(a.e)({
							kind: x.b.SuccessMod,
							text: o()
						}))
					} else t(Object(a.e)({
						kind: x.b.Error,
						text: O()
					}))
				}, w = Object(r.a)(i.a), I = (e, t) => async (s, r, i) => {
					let {
						apiContext: c
					} = i;
					const d = await u(c(), e, t.startDate, t.endDate, t.timezoneName);
					if (d.ok) {
						const t = d.body,
							i = 14400,
							c = Math.round(t.event_start / o.Fb);
						let l = t.event_end;
						const p = {
							eventStart: c,
							eventEnd: l = l && Math.round(l / o.Fb) || c + i,
							eventIsLive: t.event_is_live
						};
						s(w({
							postId: e,
							eventInfo: p
						}));
						const m = r(),
							u = Object(g.O)(m, {
								postId: e
							}),
							h = u && u.title || "",
							b = () => n.fbt._("Following event time is updated successfully: {title}", [n.fbt._param("title", h)], {
								hk: "1m1w1c"
							});
						s(Object(a.e)({
							kind: x.b.SuccessMod,
							text: b()
						}))
					} else s(Object(a.e)({
						kind: x.b.Error,
						text: O()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const h = e => Object.assign({
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
			var b = (e, t) => Object(c.a)(Object(d.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(p.a)("".concat(e.apiUrl, "/api/editusertext"))),
					method: a.db.POST,
					data: h(t)
				}).then(m.b),
				x = s("./src/reddit/helpers/overlay/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const w = Object(o.a)(k.l),
				I = Object(o.a)(k.m),
				P = Object(o.a)(k.y),
				S = Object(o.a)(k.E),
				T = Object(o.a)(k.F),
				N = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n(),
						a = Object(E.O)(i, {
							postId: e
						});
					t ? (s(Object(x.a)(a.permalink)), Object(g.d)(e, "edit")(i)) : Object(O.b)(e, "edit")(i);
					const {
						media: c
					} = a;
					if (!c) return;
					let d, l = C.h.RICH_TEXT,
						p = "";
					c.type === _.o.TEXT ? (l = C.h.MARKDOWN, p = c.content) : c.type === _.o.RTJSON && (p = (l = c.rteMode || C.h.RICH_TEXT) === C.h.MARKDOWN ? c.markdownContent : c.richtextContent, d = c.mediaMetadata || void 0), s(S({
						editorMode: l,
						mediaMetadata: d,
						postContent: p,
						postId: e
					}))
				}, M = e => async (t, s, o) => {
					let {
						apiContext: a
					} = o;
					const {
						post: c
					} = e, d = !c.media || "rtjson" !== c.media.type && "text" !== c.media.type ? "" : c.media.rteMode;
					v.u(s(), Object(y.n)(d)), t(P(c.id));
					const l = await b(a(), e),
						p = !1 === l.body.success;
					if (t(w(c.id)), l.ok && !p) {
						t(Object(i.e)({
							kind: j.b.SuccessCommunity,
							text: n.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(T(c.id));
						const e = Object(f.a)(l.body);
						t(Object(r.J)({
							[c.id]: e
						}))
					} else t(I(l.error))
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
			s.d(t, "b", (function() {
				return A
			})), s.d(t, "a", (function() {
				return U
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				p = s("./src/reddit/actions/comment/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/trackers/modTools.ts"),
				v = s("./src/reddit/selectors/moderatingComments.ts"),
				_ = s("./src/reddit/selectors/moderatorPermissions.ts"),
				C = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = s("./src/reddit/icons/fonts/helpers.tsx"),
				y = s("./src/reddit/icons/fonts/DistinguishShield/index.m.less"),
				w = s.n(y);
			var I = l.a.wrapped(e => r.a.createElement("i", {
					className: "".concat(Object(k.b)("distinguishShield"), " ").concat(e.className)
				}), "DistinguishShield", w.a),
				P = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				S = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				T = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				N = s("./src/reddit/icons/svgs/Show/index.tsx"),
				M = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
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
			const A = l.a.wrapped(b.c, "RestrictedButton", R.a),
				D = l.a.wrapped(E.a, "Approve", R.a),
				L = l.a.wrapped(P.a, "Lock", R.a),
				B = l.a.wrapped(S.a, "Remove", R.a),
				W = l.a.wrapped(T.a, "Spam", R.a),
				G = l.a.wrapped(N.a, "Show", R.a),
				U = l.a.wrapped(I, "DistinguishShield", R.a),
				V = Object(f.t)(),
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
						return Object(C.b)(H(s.id))(e)
					},
					moderatorPermissions: (e, t) => {
						const {
							comment: s
						} = t;
						return Object(f.g)(e, t) || Object(_.j)(e, {
							subredditId: s.subredditId
						})
					},
					modModeEnabled: f.P
				}),
				X = Object(i.b)(K, (e, t) => {
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
			t.c = V(X(l.a.wrapped(Object(x.c)(e => {
				var {
					className: t,
					comment: s,
					currentUser: o,
					isCommentAuthor: i,
					collapsedBecauseCrowdControl: a,
					moderatorPermissions: l,
					modModeEnabled: p,
					onApproveComment: m,
					onDistinguishComment: b,
					onLockComment: x,
					onRemoveComment: f,
					onShowComment: v,
					onSpamComment: _,
					onToggleDistinguishDropdown: C,
					sendEvent: j
				} = e, E = F(e, ["className", "comment", "currentUser", "isCommentAuthor", "collapsedBecauseCrowdControl", "moderatorPermissions", "modModeEnabled", "onApproveComment", "onDistinguishComment", "onLockComment", "onRemoveComment", "onShowComment", "onSpamComment", "onToggleDistinguishDropdown", "sendEvent"]);
				const k = Object(g.a)(l),
					y = Object(h.b)(s),
					w = s.isApproved && y,
					I = !!o && o.isEmployee,
					P = !s.isRemoved,
					S = a,
					T = e => j(Object(O.a)(e, s.id));
				return r.a.createElement("div", {
					className: t
				}, (s.bannedBy || y) && r.a.createElement(A, {
					text: w ? n.fbt._("Reapprove", null, {
						hk: "1XngBU"
					}) : n.fbt._("Approve", null, {
						hk: "2219Nh"
					}),
					onClick: () => {
						m(), T("approve")
					}
				}, r.a.createElement(D, null)), P && r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
					text: s.bannedBy === d.k ? n.fbt._("Confirm Removal", null, {
						hk: "3JozXJ"
					}) : n.fbt._("Remove", null, {
						hk: "VP5J0"
					}),
					onClick: () => {
						f(), s.bannedBy === d.k ? T("confirm_remove") : T("remove")
					}
				}, r.a.createElement(B, null)), r.a.createElement(A, {
					text: n.fbt._("Spam", null, {
						hk: "1jEVwZ"
					}),
					onClick: () => {
						_(), T("spam")
					}
				}, r.a.createElement(W, null))), r.a.createElement(A, {
					text: s.isLocked ? n.fbt._("Unlock", null, {
						hk: "KGYeO"
					}) : n.fbt._("Lock", null, {
						hk: "3rDzwU"
					}),
					onClick: () => {
						x(), T(s.isLocked ? "unlock" : "lock")
					}
				}, r.a.createElement(L, null)), i && !I && !s.bannedBy && r.a.createElement(A, {
					className: Object(c.a)({
						[R.a.selected]: E.isDistinguishDropdownOpen
					}),
					onClick: () => {
						T("mod_distinguish_menu"), C()
					}
				}, r.a.createElement(U, null), r.a.createElement(u.a, {
					isAdminDistinguished: s.isAdmin,
					isDropdownOpen: E.isDistinguishDropdownOpen,
					isModDistinguished: s.isMod,
					isStickied: s.isStickied,
					isTopLevelComment: !s.parentId,
					isUserEmployee: I,
					isUserMod: k,
					onDistinguishComment: b,
					sendEventWithName: T,
					tooltipId: H(s.id)
				})), S && r.a.createElement(A, {
					text: n.fbt._("Show Comment", null, {
						hk: "2ki02n"
					}),
					onClick: () => {
						v()
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
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				m = s.n(p);
			const u = .1,
				h = Object(c.c)({
					isChatPost: l.d
				}),
				b = Object(a.b)(h);
			class x extends i.a.Component {
				constructor(e) {
					super(e), this.onVisibilityChange = e => {
						e.isIntersecting && e.intersectionRatio >= u ? this.state.visible || this.setState({
							visible: !0
						}) : this.state.visible && this.setState({
							visible: !1
						})
					}, this.state = {
						visible: !1
					}
				}
				render() {
					const {
						visible: e
					} = this.state, {
						isChatPost: t
					} = this.props, s = t && e;
					return t ? i.a.createElement(n.a, {
						rootMargin: "20px 0px 20px 0px",
						threshold: u,
						onChange: this.onVisibilityChange
					}, i.a.createElement("div", {
						className: Object(d.a)(m.a.Icon, this.props.className)
					}, i.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.top, {
							[m.a.play]: s
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					})), i.a.createElement("p", {
						className: m.a.IconText
					}, o.fbt._("Live Discussion", null, {
						hk: "2akFwx"
					})), i.a.createElement("span", {
						className: Object(d.a)(m.a.Animate, m.a.bottom, {
							[m.a.play]: s
						})
					}, i.a.createElement("span", {
						className: m.a.bigCircle
					}), i.a.createElement("span", {
						className: m.a.midCircle
					}), i.a.createElement("span", {
						className: m.a.smallCircle
					})))) : null
				}
			}
			t.a = b(x)
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO",
				commentsText: "_25BV1fTi10_HqCnD195T85"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/CountAnimation/index.tsx"),
				u = s("./src/reddit/components/CountAnimation/config.ts"),
				h = s("./src/reddit/components/CountAnimation/helpers.ts"),
				b = s("./src/reddit/constants/componentTestIds.ts"),
				x = s("./src/reddit/constants/postLayout.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				O = s("./src/reddit/selectors/chatPost.ts"),
				v = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				_ = s("./src/reddit/selectors/experiments/postSeo.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/CommentsLink/index.m.less"),
				k = s.n(E);
			const y = Object(i.b)(() => Object(c.c)({
					isChatPost: O.d,
					isPostSEOEligible: _.d,
					postPermalink: C.N,
					shouldOpenPostInNewTab: j.X,
					totalDiscount: v.a
				})),
				{
					commentCount: {
						inititalDelayRange: {
							lower: w,
							upper: I
						},
						subsequentRecurringDelayRange: {
							lower: P,
							upper: S
						},
						incrementRangeRelativeToTotalDiscount: {
							lower: T,
							upper: N
						}
					}
				} = u.a,
				M = () => Object(h.h)(w, I),
				R = () => Object(h.h)(P, S),
				F = e => {
					let t, {
						type: s,
						numComments: i,
						isChatPost: a,
						modModeEnabled: c,
						hasModPostPerms: l,
						shouldShowIcon: u,
						shouldShowText: b,
						text: f,
						totalDiscount: O = 0
					} = e;
					t = f || (s === x.g.Compact || a || c && l ? Object(p.b)(i) : n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(i, "number", Object(p.b)(i))], {
						hk: "1QeOde"
					}));
					const v = Object(o.useCallback)(() => Object(h.h)(Math.ceil(O * T), Math.ceil(O * N)), [O]);
					return r.a.createElement(o.Fragment, null, u && r.a.createElement(g.a, {
						className: k.a.commentIcon,
						role: "presentation"
					}), b && r.a.createElement("span", {
						className: k.a.text
					}, O > 0 ? r.a.createElement(m.a, {
						initialDisplayCount: i - O,
						countToUpperBound: i,
						initialDelay: M,
						subsequentRecurringDelay: R,
						incrementDelta: v
					}) : t), b && O > 0 && r.a.createElement("span", {
						className: Object(d.a)(k.a.text, k.a.commentsText)
					}, n.fbt._("comments", null, {
						hk: "ZQ8MY"
					})))
				};
			t.a = y(e => {
				const {
					className: t,
					hasModPostPerms: s,
					isChatPost: n,
					isCommentPermalink: o,
					isCommentsPage: i,
					isOverlay: c,
					isPostSEOEligible: p,
					modModeEnabled: m,
					numComments: u,
					onClick: h,
					postPermalink: x,
					shouldOpenPostInNewTab: g,
					shouldShowIcon: O = !0,
					shouldShowText: v = !0,
					text: _,
					type: C,
					totalDiscount: j
				} = e, E = i && !o && !p, y = o && !c, w = r.a.createElement(F, {
					type: C,
					numComments: u,
					isChatPost: n,
					totalDiscount: j,
					modModeEnabled: m,
					hasModPostPerms: s,
					shouldShowIcon: O,
					shouldShowText: v,
					text: _
				});
				return E ? r.a.createElement("div", {
					className: Object(d.a)(k.a.commentsLink, k.a.defaultCursorWrapper, t),
					onClick: h
				}, w) : r.a.createElement(a.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-test-id": b.a,
					className: Object(d.a)(k.a.commentsLink, k.a.link, t),
					target: g ? "_blank" : void 0,
					to: y ? Object(f.b)(x) : Object(l.a)(x, !0),
					onClick: h
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
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = s("./src/lib/fastdom/index.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/selectors/tooltip.ts"),
				h = s("./src/reddit/components/ContentTooltip/index.m.less"),
				b = s.n(h);

			function x() {
				return (x = Object.assign || function(e) {
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
			const g = {
					height: 200,
					width: 200
				},
				O = e => {
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
						caretColor: i
					} = e, a = f(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", x({
						className: Object(d.a)(s, b.a.StyledTooltipContainer, {
							[b.a.caretOnTop]: "top" === o,
							[b.a.caretOnLeft]: "left" === o,
							[b.a.caretOnRight]: "right" === o,
							[b.a.caretOnBottom]: "bottom" === o
						}),
						style: Object.assign(Object.assign({}, n), {
							"--contentTooltip-caretColor": i && i[o] ? i[o] : Object(m.a)(e).body
						})
					}, a), t)
				}),
				_ = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(u.b)(s)(e)
					}
				}),
				C = Object(c.a)(v, [n.a.Click, n.a.Keydown]),
				j = Object(i.b)(_);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = g
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
								position: o ? this.props.defaultTooltipPosition : O(this.props.defaultTooltipPosition)
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
					return r.a.createElement(C, x({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = j(E)
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
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/DistinguishCommentDropdown/DistinguishOptions.m.less"),
				u = s.n(m);
			const h = a.a.div("DistinguishWrapper", u.a),
				b = a.a.wrapped(p.a, "Inline", u.a),
				x = a.a.wrapped(d.a, "RadioOff", u.a),
				f = a.a.wrapped(l.a, "RadioOn", u.a),
				g = e => o.a.createElement(b, {
					onClick: e.selected ? void 0 : e.onClick
				}, e.selected ? o.a.createElement(f, null) : o.a.createElement(x, null), e.text),
				O = a.a.wrapped(e => {
					const {
						className: t,
						style: s,
						isAdminDistinguished: n,
						isUserEmployee: a,
						isUserMod: c,
						isModDistinguished: d,
						isStickied: l,
						isTopLevelComment: p,
						onDistinguishComment: m
					} = e;
					return o.a.createElement(h, {
						className: t,
						style: s
					}, o.a.createElement(g, {
						onClick: () => m(r.C.NONE, null),
						selected: !d && !n,
						text: i.fbt._("Undistinguish", null, {
							hk: "1P0FyT"
						})
					}), c && o.a.createElement(g, {
						onClick: () => m(r.C.MODERATOR, null),
						selected: d && !l,
						text: i.fbt._("Distinguish as Mod", null, {
							hk: "KDx42"
						})
					}), p && c && o.a.createElement(g, {
						onClick: () => m(r.C.MODERATOR, !0),
						selected: d && l,
						text: i.fbt._("Distinguish as Mod and Sticky", null, {
							hk: "1J1DBd"
						})
					}), a && o.a.createElement(g, {
						onClick: () => m(r.C.ADMIN, null),
						selected: n && !l,
						text: i.fbt._("Distinguish as Admin", null, {
							hk: "1JsJOX"
						})
					}), a && c && p && o.a.createElement(g, {
						onClick: () => m(r.C.ADMIN, !0),
						selected: n && l,
						text: i.fbt._("Distinguish as Admin and Sticky", null, {
							hk: "3x8QWN"
						})
					}))
				}, "DistinguishOptions", u.a);
			var v = Object(c.a)(O);
			t.a = e => {
				const {
					className: t,
					isAdminDistinguished: s,
					isUserEmployee: n,
					isUserMod: i,
					isModDistinguished: a,
					isStickied: c,
					isTopLevelComment: d,
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
					isUserMod: i,
					isModDistinguished: a,
					isOpen: e.isDropdownOpen,
					tooltipId: m,
					isStickied: c,
					isTopLevelComment: d,
					onDistinguishComment: (e, t) => {
						l(e, t), e === r.C.MODERATOR ? p(!c && t ? "distinguish_sticky" : "distinguish") : e === r.C.ADMIN ? p("admin_distinguish") : a && e !== r.C.MODERATOR ? p("undistinguish") : s && e !== r.C.ADMIN && p("admin_undistinguish"), c && !t && p("unsticky")
					}
				}))
			}
		},
		"./src/reddit/components/Flatlist/ResponsiveRow.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				a = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/components/Flatlist/index.m.less"),
				d = s.n(c);

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
					noBreakpoints: c
				} = e, m = p(e, ["flatlistItem", "isLoggedIn", "isUserOp", "noBreakpoints"]);
				return o.a.createElement("div", {
					"data-ignore-click": !!m.searchIgnoreClick
				}, o.a.createElement(a.a, l({}, m, {
					className: c ? d.a.responsiveRow : Object(r.a)(d.a.responsiveRow, Object(i.b)({
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: n
					}))
				})))
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
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				c = s.n(a),
				d = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(o || (o = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const l = {
					[d.a.EditFlair]: o.Editing,
					[d.a.EditPost]: o.Editing,
					[d.a.Gild]: o.Awarding,
					[d.a.Hide]: o.First,
					[d.a.PostOverflowMenu]: o.First,
					[d.a.Report]: o.First,
					[d.a.Save]: o.First,
					[d.a.Share]: o.Second
				},
				p = e => {
					return (e => {
						const t = c.a[e.type],
							s = c.a[e.group],
							n = c.a[e.groupVariant];
						return Object(i.a)(t, s, n)
					})({
						type: e.breakpointType || n.HideIfVWSmaller,
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
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
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
			s.d(t, "b", (function() {
				return xe
			})), s.d(t, "a", (function() {
				return fe
			})), s.d(t, "d", (function() {
				return Ce
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/timezone/index.ts"),
				m = s("./src/reddit/actions/gold/modals.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/postCreation/editing.ts"),
				x = s("./src/reddit/actions/postFlair.ts"),
				f = s("./src/reddit/actions/reportFlow.ts"),
				g = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				O = s("./src/reddit/components/CommentsLink/index.tsx"),
				v = s("./src/reddit/constants/colors.ts"),
				_ = s("./src/reddit/components/ContentTooltip/index.tsx"),
				C = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				j = s.n(C);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class k extends r.a.Component {
				render() {
					const {
						tooltipId: e
					} = this.props;
					return r.a.createElement(_.a, {
						caretColor: {
							top: v.a.op
						},
						tooltipSizeEstimate: {
							height: 39,
							width: 314
						},
						tooltipId: e,
						defaultTooltipPosition: "bottom"
					}, r.a.createElement("div", {
						className: j.a.container
					}, r.a.createElement("div", {
						className: j.a.newBadge
					}, E._("New", null, {
						hk: "1XUPF"
					})), r.a.createElement("div", {
						className: j.a.text
					}, E._("Try giving a new Appreciation Award", null, {
						hk: "1V7ZWF"
					}))))
				}
			}
			var y = k,
				w = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				I = s("./src/reddit/components/ModModeReports/helpers.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				S = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				T = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				M = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				R = s("./src/reddit/components/ShareMenu/index.tsx"),
				F = s("./src/reddit/components/TrackingHelper/index.tsx"),
				A = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				D = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/contexts/PageLayer/index.tsx"),
				B = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				W = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/Flatlist/ResponsiveRow.tsx"),
				V = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/trackers/modTools.ts"),
				K = s("./src/reddit/helpers/trackers/post.ts"),
				X = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				q = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				J = s("./src/reddit/icons/fonts/Report/index.tsx"),
				z = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Q = s("./src/reddit/models/Media/index.ts"),
				Z = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				Y = s("./src/reddit/models/PostCreationForm/index.ts"),
				$ = s("./src/reddit/models/User/index.ts"),
				ee = s("./src/reddit/components/Flatlist/constants.ts"),
				te = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				oe = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				re = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				ie = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ae = s("./src/reddit/selectors/activeModalId.ts"),
				ce = s("./src/reddit/components/Flatlist/index.m.less"),
				de = s.n(ce);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var pe = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			let me, ue;
			const he = l.a.button("ShareButton", de.a),
				be = l.a.wrapped(R.a, "ShareMenu", de.a),
				xe = Object(d.a)(e => {
					var {
						className: t
					} = e, s = pe(e, ["className"]);
					return r.a.createElement(q.a, le({}, s, {
						className: Object(c.a)(de.a.modActionsIcon, t),
						style: {
							color: Object(W.a)(Object(B.a)(s), Z.a.actionIcon, Z.b.actionIcon)
						}
					}))
				}),
				fe = e => r.a.createElement("div", le({}, e, {
					className: Object(c.a)(de.a.flatlistSeparator, e.className)
				})),
				ge = Object(L.t)({
					currentProfileName: L.h,
					isCommentPermalink: L.v,
					isCommentsPage: L.w,
					isProfilePostListing: L.I,
					pageLayer: e => e
				}),
				Oe = Object(a.c)({
					activeModalId: ae.a,
					layout: L.N,
					userIsOp: G.kb,
					subreddit: L.q
				}),
				ve = Object(i.b)(Oe, (e, t) => {
					let {
						post: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ne.a)(t, s)),
						onToggleModal: t => e(Object(u.i)(t)),
						onToggleSave: () => e(Object(h.L)(n.postId)),
						onHide: t => e(Object(h.P)(n.postId, !n.hidden, o, !0)),
						onReportClick: () => e(Object(f.j)(n.postId, o)),
						onEdit: () => {
							const t = !o && !r;
							e(Object(b.a)(n.postId, t))
						},
						onFlairPost: () => e(Object(u.i)(Object(S.b)(n.postId, o))),
						onGildClick: t => e(Object(m.d)({
							correlationId: t,
							thingId: n.postId
						})),
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
							me && ue || ([me, ue] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(u.i)(Object(Y.r)(n.postId, o, Y.j.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							ue && e(ue(n.id, t))
						}
					}
				});
			class _e extends r.a.Component {
				constructor() {
					super(...arguments), this.handleGild = async () => {
						const {
							onGildClick: e,
							post: t,
							sendEvent: n
						} = this.props;
						e(Object(V.d)(V.a.GildingFlow, !0));
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
						} = this.props, s = Object(Y.s)(t.id, e);
						this.props.onToggleModal(s)
					}, this.addPostToCollection = e => {
						this.props.addPostToCollection(e.id, this.props.post.id).then(() => this.onToggleCurrentModal())
					}, this.sendEventWithName = (e, t) => {
						const {
							hostPostId: s,
							isOverlay: n,
							listingKey: o,
							post: r,
							sendEvent: i
						} = this.props;
						i(Object(K.f)(r.id, e, n ? "post_detail" : "post", o, s, void 0, null == t ? void 0 : t.referralId))
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
						currentUser: i,
						hasModFlairPerms: a,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isCommentPermalink: m,
						isCommentsPage: u,
						isLargePost: h,
						isOverlay: b,
						isProfilePostListing: x,
						isSticky: f,
						layout: v,
						modModeEnabled: _,
						onFlairChanged: C,
						onIgnoreReports: j,
						onOpenReportsDropdown: E,
						pageLayer: k,
						post: R,
						sendEvent: F,
						showEditFlair: L,
						showEditPost: B,
						subreddit: W,
						toggleEditStartTimeModal: G,
						tooltipType: V,
						userIsOp: q,
						searchIgnoreClick: Z,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ie
					} = this.props, ae = !!i && Object($.e)(i) === R.author, ce = Object(se.a)("View--Reports", R.id, V), le = Object(se.a)("View--GiveAward", R.id, V), pe = Object(I.c)(R), ue = Ce("-mod-actions-menu", R.id, b, f), fe = Object(I.a)(R), ge = R.postId, Oe = v === D.g.Large, ve = !u && Oe || l && _, _e = !(b || u || m), je = i && R.isGildable, Ee = R.media && R.media.type === Q.o.LIVEVIDEO;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(de.a.flatlistContainer, s)
					}, r.a.createElement(O.a, {
						className: de.a.commentsLink,
						hasModPostPerms: l,
						isCommentsPage: u,
						isCommentPermalink: m,
						isOverlay: b,
						postId: R.id,
						modModeEnabled: _,
						numComments: R.numComments,
						isActionBarAnimationEnabled: ne,
						isForceSelected: ie
					}), je && r.a.createElement(r.a.Fragment, null, r.a.createElement(U.a, {
						displayText: n.fbt._("Give Award", null, {
							hk: "NIFUn"
						}),
						flatlistItem: ee.a.Gild,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.handleGild,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, r.a.createElement(N.a, {
						id: le
					})), r.a.createElement(y, {
						postOrComment: R,
						tooltipId: le
					})), r.a.createElement(be, {
						className: Object(te.b)({
							flatlistItem: ee.a.Share,
							isLoggedIn: !!i,
							isUserOp: q
						}),
						dropdownId: Ce("-share-menu", R.id, b, f),
						permalink: R.permalink,
						post: R,
						sendEventWithName: this.sendEventWithName,
						subreddit: W
					}, r.a.createElement(he, {
						"data-click-id": "share"
					}, r.a.createElement(z.a, {
						className: de.a.shareIcon
					}), r.a.createElement("span", {
						className: de.a.shareText
					}, n.fbt._("share", null, {
						hk: "1eAfZg"
					})))), B && !ve && r.a.createElement(U.a, {
						displayText: n.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						flatlistItem: ee.a.EditPost,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.props.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(N.c, null)), (!l || !_) && r.a.createElement(U.a, {
						displayText: R.saved ? n.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : n.fbt._("save", null, {
							hk: "3NOMst"
						}),
						flatlistItem: ee.a.Save,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onSaveClick,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, R.saved ? r.a.createElement(N.f, null) : r.a.createElement(N.e, null)), !R.isSponsored && !ve && r.a.createElement(U.a, {
						displayText: R.hidden ? n.fbt._("unhide", null, {
							hk: "151XLs"
						}) : n.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						flatlistItem: ee.a.Hide,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onHideClick,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, r.a.createElement(N.b, null)), !ae && !R.isSponsored && !ve && r.a.createElement(U.a, {
						displayText: n.fbt._("report", null, {
							hk: "1phfns"
						}),
						flatlistItem: ee.a.Report,
						isLoggedIn: !!i,
						isUserOp: q,
						onClick: this.onReportClick,
						searchIgnoreClick: Z,
						skipRoleAttr: !0
					}, r.a.createElement(N.d, null)), r.a.createElement(P.a, {
						isOverlay: b,
						layout: v,
						modModeEnabled: _,
						post: R,
						sendEvent: F
					}), l && r.a.createElement(w.a, {
						dropdownId: ue,
						onClick: () => F(Object(K.f)(R.id, "post_mod_action_menu"))
					}, r.a.createElement(xe, null), r.a.createElement(T.a, {
						canEditFlair: a && !!L,
						hasModFullPerms: d,
						hasModPostPerms: l,
						isOverlay: !!b,
						isPostAuthor: ae,
						modModeEnabled: _,
						post: R,
						tooltipId: ue
					})), l && pe && !_ && r.a.createElement(M.c, {
						text: "".concat(fe),
						onClick: () => {
							E(ce), F(Object(K.f)(R.id, "post_report_menu"))
						},
						id: ce
					}, r.a.createElement(A.a, {
						model: R,
						onIgnoreReports: () => {
							j(), F(Object(H.j)(R.ignoreReports ? "restore_reports" : "ignore_reports", R.id))
						},
						tooltipId: ce
					}), R.ignoreReports ? r.a.createElement(X.a, null) : r.a.createElement(J.a, null)), (i || !R.isSponsored) && r.a.createElement(N.g, {
						currentProfileName: o,
						dropdownId: Ce("-overflow-menu", R.id, b, f),
						isCommentsPage: u,
						isFixed: f,
						isOverlay: !!b,
						isProfilePostListing: x,
						layout: v,
						modModeWithPost: _ && l,
						pageLayer: k,
						permalink: R.permalink,
						postId: ge,
						sendEvent: F,
						showEditPost: !!B,
						showEditFlair: !!L,
						useFlatlistBreakpoints: this.props.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: G,
						toggleEditStartTimeModal: G
					}), e === Object(Y.s)(R.id, b) && r.a.createElement(oe.a, {
						subredditId: R.belongsTo.id,
						onClose: this.onToggleCurrentModal,
						postId: R.id,
						onSelectCollection: this.addPostToCollection,
						titleText: n.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: n.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: b
					}), e === Object(Y.r)(R.id, b, Y.j.POST_OVERFLOW_MENU) && me && r.a.createElement(me, {
						onChange: t,
						onClose: G,
						schedule: Object(p.c)(R),
						shouldShowDeleteButton: !1
					}), e === Object(Y.t)(R.id, b) && r.a.createElement(re.a, {
						onCancel: this.onToggleCollectionListModal,
						onCollectionCreated: this.addPostToCollection,
						subredditId: R.belongsTo.id
					}), e === Object(S.b)(R.id, b) && r.a.createElement(S.a, {
						flairs: R.flair,
						subredditId: R.belongsTo.id,
						modalId: Object(S.b)(R.id, b),
						onFlairChanged: C
					}), r.a.createElement("div", {
						className: de.a.flexSpacer
					})), _e && !Ee && r.a.createElement(g.a, {
						className: Object(c.a)(de.a.liveDiscussionWrapper, {
							[de.a.large]: h
						}),
						isMod: l,
						postId: R.postId
					}))
				}
			}
			const Ce = (e, t, s, n) => {
					let o = t;
					return s && (o += "-overlay"), n && (o += "-sticky"), o += e
				},
				je = ge(ve(Object(F.c)(_e)));
			t.c = r.a.memo((function(e) {
				const t = Object(ie.b)();
				return r.a.createElement(je, le({}, e, {
					searchIgnoreClick: t
				}))
			}))
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
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				u = () => null;
			t.a = m(e => o.a.createElement("div", {
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? u : e.onClick
			}, e.inCommentFlatlist ? o.a.createElement(c.b, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : o.a.createElement(d.c, {
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
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				o = e => {
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
			var n, o, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				d = s.n(c);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(n || (n = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(o || (o = {})),
			function(e) {
				e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const l = {
					[a.a.Approve]: o.Approve,
					[a.a.Remove]: o.Remove,
					[a.a.Spam]: o.Spam,
					[a.a.Flair]: o.Flair
				},
				p = e => {
					const t = l[e.flatlistItem],
						s = d.a[e.breakpointType],
						n = d.a[t],
						o = e.isCompact ? d.a[r.Compact] : d.a[r.Default];
					return Object(i.a)(s, n, o)
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
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				f = s("./src/reddit/constants/postLayout.ts"),
				g = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				j = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/postFlair.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				I = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				P = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				S = s.n(P);
			const T = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return Object(I.b)({
						breakpointType: I.a.HideIfVWSmaller,
						flatlistItem: e,
						isCompact: t
					})
				},
				N = Object(i.b)(() => Object(a.c)({
					activeModalId: E.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.a)(e, {
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
						onApprovePost: () => e(Object(p.m)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(m.h)({
							tooltipId: t
						})),
						onRemovePost: () => e(Object(p.K)(s.id, !1)),
						onSpamPost: () => e(Object(p.K)(s.id, !0)),
						onFlairPost: t => () => e(Object(l.i)(t))
					}
				});
			t.a = N(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: i,
					layout: a,
					moderatorPermissions: l,
					modModeEnabled: p,
					onApprovePost: m,
					onFlairPost: E,
					onRemovePost: k,
					onSpamPost: y,
					post: I,
					sendEvent: P,
					showIconsOnly: N
				} = e, M = Object(g.a)(l), R = Object(h.b)(I), F = !(!I.approvedBy || !R), A = Object(b.b)(I.id, i), D = M && p && !I.isSponsored, L = t && p;
				let B, W, G;
				N || (B = ((e, t) => e ? n.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? n.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : n.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(F, I.approvedBy), W = ((e, t) => e ? t === d.k ? n.fbt._("Confirm removal", null, {
					hk: "1t5tKM"
				}) : n.fbt._("removed", null, {
					hk: "35ZTch"
				}) : n.fbt._("remove", null, {
					hk: "3LWMcS"
				}))(I.isRemoved, I.bannedBy), G = (e => e ? n.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : n.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(I.isSpam));
				const U = !i && a === f.g.Compact;
				return r.a.createElement("div", {
					className: Object(c.a)(S.a.container, s)
				}, D && r.a.createElement(o.Fragment, null, r.a.createElement(x.b, {
					className: T(w.a.Approve, U),
					key: "approveButton",
					text: B,
					disabled: !!I.approvedBy && !R,
					onClick: () => {
						m(), P(Object(O.f)(I.id, "approve"))
					}
				}, r.a.createElement(v.a, null)), r.a.createElement(x.d, {
					className: T(w.a.Remove, U),
					key: "removeButton",
					text: W,
					disabled: I.isRemoved && I.bannedBy !== d.k,
					onClick: () => {
						k(), I.isRemoved && I.bannedBy === d.k ? P(Object(O.f)(I.id, "confirm_remove")) : P(Object(O.f)(I.id, "remove"))
					}
				}, r.a.createElement(_.a, null)), r.a.createElement(x.d, {
					className: T(w.a.Spam, U),
					key: "removeSpamButton",
					text: G,
					disabled: I.isSpam,
					onClick: () => {
						y(), P(Object(O.f)(I.id, "spam"))
					}
				}, r.a.createElement(C.a, null))), L && r.a.createElement(x.c, {
					className: T(w.a.Flair, U),
					key: "tagButton",
					onClick: () => {
						E(A)(), P(Object(O.f)(I.id, "post_flair_picker"))
					}
				}, r.a.createElement(j.a, null)), r.a.createElement(u.f, {
					postId: I.id
				}))
			})
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
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				l = s("./src/lib/memoizeByReference/index.ts"),
				p = s("./src/reddit/actions/postCreation/general.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/keycodes.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				g = s("./src/reddit/icons/svgs/Search/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/selectors/postCollection.ts"),
				C = s("./src/lib/timeAgo/index.ts"),
				j = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				E = s("./src/reddit/helpers/name/index.ts"),
				k = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/models/User/index.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),
				S = s.n(P),
				T = s("./src/lib/lessComponent.tsx");
			const {
				fbt: N
			} = s("./node_modules/fbt/lib/FbtPublic.js"), M = T.a.div("Container", S.a), R = T.a.h2("PostTitle", S.a), F = T.a.div("MetaLine", S.a), A = T.a.span("SubredditName", S.a), D = T.a.time("InfoSpan", S.a), L = Object(c.c)({
				subreddit: (e, t) => {
					let {
						collection: {
							subredditId: s
						}
					} = t;
					return s ? Object(w.T)(e, {
						subredditId: s
					}) : void 0
				},
				user: I.i
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
						subreddit: t,
						user: s,
						onHoverActionText: n
					} = this.props, o = t && Object(k.g)(t) && s ? Object(E.d)(Object(y.e)(s)) : t ? t.displayText : "", r = e.postIds.length;
					return i.a.createElement(M, {
						onClick: this.onClick,
						className: S.a.container
					}, i.a.createElement(R, {
						"data-redditstyle": !0
					}, e.title), i.a.createElement(F, {
						"data-redditstyle": !0
					}, o && i.a.createElement(A, {
						"data-redditstyle": !0
					}, o), o && i.a.createElement(j.b, null), i.a.createElement(D, null, N._({
						"*": "{number of posts} posts",
						_1: "1 post"
					}, [N._plural(r, "number of posts")], {
						hk: "1Uy96U"
					})), i.a.createElement(j.b, null), i.a.createElement(D, null, N._("created {time}", [N._param("time", Object(C.d)(e.createdAtUTC))], {
						hk: "2cUc5m"
					}))), n && i.a.createElement("div", {
						className: S.a.onHoverActionText
					}, i.a.createElement("span", null, n)))
				}
			}
			var W = Object(a.b)(L)(B),
				G = s("./src/reddit/helpers/trackers/postCollection.ts"),
				U = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.m.less"),
				V = s.n(U);
			const H = "".concat(n.a.assetPath, "/img/snoo-drafts.png"),
				K = T.a.div("TopRow", V.a),
				X = T.a.div("TitleRow", V.a),
				q = T.a.div("DetailsContainer", V.a),
				J = T.a.wrapped(O.a, "ButtonRow", V.a),
				z = T.a.div("CloseWrapper", V.a),
				Q = T.a.wrapped(x.a, "Close", V.a),
				Z = T.a.div("Empty", V.a),
				Y = T.a.img("EmptyImage", V.a),
				$ = T.a.p("EmptyText", V.a),
				ee = T.a.div("FilterWrapper", V.a),
				te = T.a.wrapped(b.a, "FilterInput", V.a),
				se = T.a.wrapped(g.a, "SearchIcon", V.a),
				ne = T.a.wrapped(f.a, "PlusIcon", V.a),
				oe = T.a.wrapped(h.m, "CreateCollectionButton", V.a),
				re = Object(l.a)((e, t) => {
					const s = t.toLowerCase();
					return e.filter(e => e.title.toLowerCase().includes(s))
				}),
				ie = Object(c.c)({
					collections: _.w
				}),
				ae = Object(a.b)(ie, (e, t) => {
					let {
						postId: s,
						isOverlay: n
					} = t;
					return {
						onOpenCreateCollectionModal: () => {
							let t = v.b;
							s && (t = Object(v.t)(s, !!n)), e(Object(p.x)(t))
						}
					}
				});
			class ce extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						filterStr: ""
					}, this.close = () => {
						this.props.sendEvent(Object(G.c)()), this.props.onClose()
					}, this.handleEscapeKey = e => {
						e.keyCode === u.a.Escape && this.close()
					}, this.handleCreateCollectionClicked = () => {
						this.props.onOpenCreateCollectionModal(), this.props.sendEvent(Object(G.j)())
					}, this.handleCollectionSelected = e => {
						this.props.onSelectCollection(e), this.props.sendEvent(Object(G.q)())
					}, this.onFilterStringChange = e => {
						this.setState({
							filterStr: e.target.value
						})
					}, this.renderItem = e => i.a.createElement(W, {
						key: e.id,
						collection: e,
						onClick: () => this.handleCollectionSelected(e),
						onHoverActionText: this.props.onItemHoverActionText
					})
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey), this.props.sendEvent(Object(G.d)())
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				renderNoCollections() {
					return i.a.createElement(Z, null, i.a.createElement(Y, {
						src: H
					}), i.a.createElement($, null, o.fbt._("Your collections will live here", null, {
						hk: "FCxWg"
					})))
				}
				renderNoFilterMatches() {
					return i.a.createElement(Z, null, i.a.createElement($, null, o.fbt._("No collection matching filter", null, {
						hk: "2vawdK"
					}), ";"))
				}
				render() {
					const {
						collections: e,
						titleText: t
					} = this.props;
					let s;
					if (0 === e.length) s = this.renderNoCollections();
					else {
						const t = re(e, this.state.filterStr);
						s = 0 === t.length ? this.renderNoFilterMatches() : t.map(this.renderItem)
					}
					return i.a.createElement("div", {
						className: V.a.wrapper,
						"data-redditstyle": !0
					}, i.a.createElement(K, null, i.a.createElement(X, {
						"data-redditstyle": !0
					}, t || o.fbt._("My collections", null, {
						hk: "3yKovS"
					}), i.a.createElement(z, {
						onClick: this.close
					}, i.a.createElement(Q, {
						"data-redditstyle": !0
					}))), i.a.createElement(ee, null, i.a.createElement(se, null), i.a.createElement(te, {
						placeholder: o.fbt._("Find a collection", null, {
							hk: "3DbFBU"
						}),
						value: this.state.filterStr,
						onChange: this.onFilterStringChange
					}))), i.a.createElement(q, null, s), i.a.createElement(J, null, i.a.createElement(oe, {
						onClick: this.handleCreateCollectionClicked
					}, i.a.createElement(ne, null), o.fbt._("Create a collection", null, {
						hk: "37xJVm"
					}))))
				}
			}
			const de = Object(d.a)(ae(Object(m.c)(ce)));
			t.a = de
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/formatApiError/index.ts"),
				l = s("./src/reddit/actions/postCollection/index.ts"),
				p = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/constants/postCreation.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/index.tsx"),
				b = s("./src/reddit/controls/Input/index.tsx"),
				x = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				g = s("./src/reddit/icons/svgs/Close/index.tsx"),
				O = s("./src/reddit/layout/row/Inline/index.tsx"),
				v = s("./src/reddit/selectors/postCollection.ts"),
				_ = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.m.less"),
				C = s.n(_),
				j = s("./src/lib/lessComponent.tsx");
			const E = j.a.div("Container", C.a),
				k = j.a.div("Content", C.a),
				y = j.a.div("TitleRow", C.a),
				w = j.a.div("Details", C.a),
				I = j.a.wrapped(p.f, "Footer", C.a),
				P = j.a.wrapped(u.l, "CancelButton", C.a),
				S = j.a.div("CloseWrapper", C.a),
				T = j.a.wrapped(g.a, "CloseIcon", C.a),
				N = j.a.label("Label", C.a),
				M = j.a.wrapped(b.a, "TitleInput", C.a),
				R = j.a.wrapped(f.a, "AddCollectionIcon", C.a),
				F = j.a.wrapped(u.i, "PrimaryActionButton", C.a),
				A = j.a.wrapped(x.a, "LoadingIcon", C.a),
				D = j.a.wrapped(h.b, "ErrorText", C.a),
				L = Object(a.c)({
					collection: v.r,
					error: v.c,
					isPending: v.h
				}),
				B = Object(i.b)(L, (e, t) => ({
					onCreate: (t, s) => e(Object(l.b)(t, s)),
					onUpdate: s => e(Object(l.h)(t.collectionId, s))
				}));
			class W extends r.a.PureComponent {
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
						isPending: s
					} = this.props, o = !e, i = !!this.state.collectionTitle.trim(), a = o ? n.fbt._("Create", null, {
						hk: "Ijp7n"
					}) : n.fbt._("Save", null, {
						hk: "2Onrrv"
					});
					return r.a.createElement(E, null, r.a.createElement(S, {
						onClick: this.props.onCancel
					}, r.a.createElement(T, null)), r.a.createElement(k, null, o && r.a.createElement(r.a.Fragment, null, r.a.createElement(y, null, r.a.createElement(R, null), n.fbt._("Create a collection", null, {
						hk: "3ndxk5"
					})), r.a.createElement(w, null, n.fbt._("Group posts into one feed. Create a series of events or just a group of random things. Make something awesome!", null, {
						hk: "2eCAQw"
					}))), r.a.createElement(N, null, o ? n.fbt._("Give a title for your collection", null, {
						hk: "Uaqbe"
					}) : n.fbt._("Edit title", null, {
						hk: "1jzweg"
					}), r.a.createElement(M, {
						maxLength: m.e,
						onChange: this.onTitleChange,
						placeholder: n.fbt._("Enter title", null, {
							hk: "3B0iRI"
						}),
						value: this.state.collectionTitle
					}))), r.a.createElement(I, null, r.a.createElement(O.a, null, r.a.createElement(P, {
						onClick: this.props.onCancel
					}, n.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(F, {
						onClick: this.onPrimaryButtonClick,
						disabled: s || !i
					}, s ? r.a.createElement(A, {
						sizePx: 10
					}) : a)), t && r.a.createElement(D, null, Object(d.a)(t))))
				}
			}
			t.a = Object(c.a)(B(W))
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
				return k
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/components/FlairPickerTitle/index.tsx"),
				u = s("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				h = s("./src/reddit/components/FlairPreview/index.tsx"),
				b = s("./src/reddit/components/FlairSearch/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/models/Flair/index.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				O = s("./src/reddit/selectors/postFlair.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/components/PostFlairPicker/helpers.ts"),
				j = s("./src/reddit/components/PostFlairPicker/index.m.less"),
				E = s.n(j);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(n || (n = {}));
			const k = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.UNSET;
					return "PostFlair__Modal-[postId: ".concat(e, "]-isOverlay[").concat(t, "]-position[").concat(s, "]")
				},
				y = Object(c.c)({
					flairData: O.d,
					subreddit: v.T,
					isMod: (e, t) => !!Object(g.j)(e, t)
				});
			class w extends i.a.Component {
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
						subreddit: Object(_.subredditById)(t, this.props.subredditId)
					}));
					const t = Object(C.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, s = Object(C.c)(this.props.flairs) || null;
					return Object(C.b)(e, t, s)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: s,
						flairData: n,
						subreddit: r
					} = e, a = r.displayText, {
						templates: c,
						templateIds: d
					} = n, {
						canSave: l
					} = this.canSave();
					return i.a.createElement(u.a, {
						className: s
					}, i.a.createElement(m.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select {subredditName} flair", [o.fbt._param("subredditName", a)], {
							hk: "1lDMWS"
						})
					}), i.a.createElement(h.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						placeholderText: o.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), i.a.createElement(b.a, {
						flair: t,
						flairTemplateType: f.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), i.a.createElement("div", {
						className: E.a.buttonsRow
					}, i.a.createElement(x.i, {
						disabled: !l,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), i.a.createElement(x.l, {
						className: E.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const I = Object(a.b)(y, (e, t) => ({
				closeModal: () => e(Object(p.i)(t.modalId))
			}))(w);
			t.a = Object(l.a)(Object(d.c)(I))
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				AddCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				addCollectionIcon: "_3McOViCQeBaGf3kRQLi-YJ",
				CalendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				calendarIcon: "_1zSdStUj7GoJJcKjQ7zhG8",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r",
				LinkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				linkIcon: "_1lgI_HBlGeEd4PRa5CuxRF",
				LiveIcon: "otoj2GWn145x5kC1YJdJV",
				liveIcon: "otoj2GWn145x5kC1YJdJV",
				PostCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p",
				postCheckboxMenuItem: "_3fGEO8uLSvUJEOP4lDX35p"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ee
			})), s.d(t, "b", (function() {
				return ke
			})), s.d(t, "c", (function() {
				return ye
			})), s.d(t, "d", (function() {
				return we
			})), s.d(t, "f", (function() {
				return Ie
			})), s.d(t, "e", (function() {
				return Pe
			})), s.d(t, "h", (function() {
				return Ue
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/telemetry/index.ts"),
				p = s("./node_modules/uuid/v4.js"),
				m = s.n(p),
				u = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/actions/eventPosts/index.ts"),
				f = s("./src/reddit/actions/gold/modals.ts"),
				g = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/actions/pinnedPost.ts"),
				v = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/actions/postCreation/editing.ts"),
				C = s("./src/reddit/actions/reportFlow.ts"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				E = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/constants/posts.ts"),
				y = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				w = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				P = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				S = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				T = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				N = s("./src/reddit/icons/fonts/helpers.tsx"),
				M = s("./src/reddit/icons/fonts/Hide/index.m.less"),
				R = s.n(M);
			var F = b.a.wrapped(e => i.a.createElement("i", {
					className: "".concat(Object(N.b)("hide"), " ").concat(e.className)
				}), "HideIcon", R.a),
				A = s("./src/reddit/icons/fonts/Link/index.tsx"),
				D = s("./src/reddit/icons/fonts/Live/index.tsx"),
				L = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				B = s("./src/reddit/icons/fonts/Report/index.tsx"),
				W = s("./src/reddit/icons/fonts/Save/index.tsx"),
				G = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				U = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				V = s("./src/reddit/icons/fonts/Unpin/index.m.less"),
				H = s.n(V);
			var K = b.a.wrapped(e => i.a.createElement("i", {
					className: Object(h.a)(Object(N.b)("unpin"), e.className)
				}), "UnpinIcon", H.a),
				X = s("./src/reddit/icons/svgs/AddCollection/index.tsx"),
				q = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				J = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				z = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Q = s("./src/reddit/components/ReportFlow/index.tsx"),
				Z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				$ = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ee = s("./src/reddit/components/Flatlist/constants.ts"),
				te = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				se = s("./src/reddit/constants/postLayout.ts"),
				ne = s("./src/reddit/helpers/correlationIdTracker.ts"),
				oe = s("./src/reddit/helpers/isCrosspost.ts"),
				re = s("./src/reddit/helpers/postEvent.ts"),
				ie = s("./src/reddit/helpers/trackers/post.ts"),
				ae = s("./src/reddit/models/Post/index.ts"),
				ce = s("./src/reddit/models/Subreddit/index.ts"),
				de = s("./src/reddit/selectors/activeModalId.ts"),
				le = s("./src/reddit/selectors/posts.ts"),
				pe = s("./src/reddit/selectors/subreddit.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				ue = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				he = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				be = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				xe = s("./src/reddit/components/ReportFlow/new.tsx"),
				fe = s("./src/reddit/actions/postCollection/index.ts"),
				ge = s("./src/reddit/helpers/trackers/postCollection.ts"),
				Oe = s("./src/reddit/models/PostCreationForm/index.ts"),
				ve = s("./src/reddit/selectors/postCollection.ts"),
				_e = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				Ce = s.n(_e),
				je = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const Ee = b.a.wrapped(T.a, "Icon", Ce.a),
				ke = b.a.wrapped(F, "Icon", Ce.a),
				ye = b.a.wrapped(L.a, "Icon", Ce.a),
				we = b.a.wrapped(B.a, "Icon", Ce.a),
				Ie = b.a.wrapped(q.a, "Icon", Ce.a),
				Pe = b.a.wrapped(W.a, "Icon", Ce.a),
				Se = b.a.wrapped(I.a, "Icon", Ce.a),
				Te = b.a.wrapped(X.a, "AddCollectionIcon", Ce.a),
				Ne = b.a.wrapped(S.a, "Icon", Ce.a),
				Me = b.a.wrapped(G.a, "Icon", Ce.a),
				Re = b.a.wrapped(U.a, "Icon", Ce.a),
				Fe = b.a.wrapped(J.b, "Icon", Ce.a),
				Ae = b.a.wrapped(K, "Icon", Ce.a),
				De = b.a.wrapped(D.a, "LiveIcon", Ce.a),
				Le = b.a.wrapped(P.a, "CalendarIcon", Ce.a),
				Be = b.a.wrapped(A.a, "LinkIcon", Ce.a),
				We = b.a.wrapped($.b, "DropdownRow", Ce.a),
				Ge = b.a.wrapped(Y.a, "PostCheckboxMenuItem", Ce.a),
				Ue = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: n = !0,
						report: o = !0,
						editPost: r = !0,
						hide: i = !0
					} = e;
					return {
						[ee.a.Gild]: t,
						[ee.a.Save]: s,
						[ee.a.Share]: n,
						[ee.a.Report]: o,
						[ee.a.EditPost]: r,
						[ee.a.Hide]: i
					}
				},
				Ve = Object(a.b)(() => Object(d.c)({
					currentUser: me.i,
					isConfirmDeleteOpen: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(de.a)(e) === "".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(s)
					},
					isFutureEvent: ve.j,
					isSaved: le.x,
					isHidden: le.p,
					isSponsored: le.z,
					isNSFW: le.s,
					isOC: le.t,
					isPinned: le.u,
					isSpoiler: le.y,
					post: le.O,
					postSubredditAboutInfo: le.P,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: n
						} = t;
						return e.reportFlow.openedFromModalPage === s && e.reportFlow.postOrCommentId === n
					},
					sendRepliesToggled: le.Y,
					showPinAction: (e, t) => {
						var {
							isProfilePostListing: s
						} = t, n = je(t, ["isProfilePostListing"]);
						return Object(Z.B)(e, n) && s && Object(me.kb)(e, n) && Object(me.ib)(e, {
							userName: Object(le.O)(e, {
								postId: n.postId
							}).author
						})
					},
					subredditOrProfile: le.bb,
					hasSubredditRules: pe.k,
					userIsOp: me.kb,
					isPostPartOfACollection: ve.l,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							postId: s
						} = t;
						if (Object(le.O)(e, {
								postId: s
							}).isSponsored) return !1;
						const n = Object(le.bb)(e, {
							postId: s
						});
						if (!n) return !1;
						const o = n.type === ce.e.User;
						return Object(ve.s)(e, n.name, o)
					},
					reportingRevampEnabled: ue.a
				}), (e, t) => {
					let {
						permalink: s,
						postId: n,
						isOverlay: o,
						isCommentsPage: r
					} = t;
					return {
						onCopyLink: t => e(Object(v.v)(t)),
						onDelete: t => e(Object(v.E)(n, t, o)),
						onDistinguishPost: t => e(Object(v.p)(n, t)),
						onGildClick: t => e(Object(f.d)({
							correlationId: t,
							thingId: n
						})),
						onToggleSave: () => e(Object(v.L)(n)),
						onToggleNSFW: () => e(Object(v.A)(n)),
						onToggleOC: () => e(Object(v.B)(n)),
						onTogglePinned: () => e(Object(O.i)(n)),
						onToggleSpoiler: () => e(Object(v.O)(n)),
						onHide: t => e(Object(v.P)(n, !t, o, !0)),
						onReportClick: () => e(Object(C.j)(n, o)),
						onStartEventNow: () => {
							e((e, t) => Object(l.a)(Object(w.p)()(t()))), e(Object(x.startEventNowRequested)(n))
						},
						onEdit: () => {
							const t = !o && !r;
							e(Object(_.a)(n, t))
						},
						onFlairPost: () => e(Object(g.i)(Object(be.b)(n, o))),
						onToggleSendReplies: () => e(Object(v.M)(n)),
						showCollectionsList: (t, s) => {
							e(Object(fe.e)(t)).then(() => {
								const t = Object(Oe.s)(s, o);
								e(g.i(t))
							})
						},
						toggleConfirmDelete: () => e(Object(g.i)("".concat("POST_OVERFLOW_DELETE_CONFIRMATION", "_").concat(n)))
					}
				});
			class He extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: n,
							sendEvent: o
						} = this.props;
						o(Object(ie.f)(n.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						const e = Object(ne.d)(ne.a.GildingFlow, !0);
						this.props.onGildClick(e);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(t(this.props.postId))
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
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(ie.g)(this.props.post.id)) : this.props.sendEvent(Object(ie.c)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(te.b)({
							breakpointType: te.a.HideIfVWLarger,
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
						e || (n(Object(ge.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(xe.a, {
						withOverlay: !0,
						overlayCustomStyles: Q.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(Q.a, {
						withOverlay: !0,
						overlayCustomStyles: Q.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						props: e
					} = this, t = e.layout === se.g.Classic;
					if (!(e.ignoreBreakpoints || e.modModeWithPost || e.userIsOp || !e.isCommentsPage && !t)) return Object(te.b)({
						breakpointType: te.a.HideIfVWLarger,
						flatlistItem: ee.a.PostOverflowMenu,
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
						toggleAddEventStartTimeModal: h,
						toggleEditStartTimeModal: b,
						userIsOp: x
					} = e, f = e.currentUser && e.currentUser.isEmployee, g = Object(oe.a)(e.post), O = e.post.belongsTo.type === k.a.PROFILE || Object(ce.f)(e.postSubredditAboutInfo), v = t && c.isGildable, _ = Object(re.a)(e.post);
					return i.a.createElement("div", null, v && i.a.createElement(We, {
						className: this.getBreakpointClass(ee.a.Gild),
						displayText: n.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(Ee, null)), i.a.createElement(We, {
						className: this.getBreakpointClass(ee.a.Share),
						displayText: n.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(ae.i)(s)) {
								const t = Object(y.a)(s.id),
									n = m()(),
									o = Object(u.a)(t, {
										[E.q]: n,
										utm_source: "share",
										utm_medium: "web2x",
										utm_content: "rpan_stream"
									});
								this.handlePostEvent("share_copy", {
									referralId: n
								}), e.onCopyLink(o)
							} else this.handlePostEvent("share_copy"), e.onCopyLink(t)
						}
					}, i.a.createElement(Be, null)), i.a.createElement(We, {
						className: this.getBreakpointClass(ee.a.Share),
						displayText: n.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.post.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(Ne, null)), e.showEditPost && i.a.createElement(We, {
						className: this.getBreakpointClass(ee.a.EditPost),
						displayText: n.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: e.isHidden
					}, i.a.createElement(ye, null)), l && i.a.createElement(We, {
						displayText: n.fbt._("Edit flair", null, {
							hk: "qt3W7"
						}),
						onClick: e.onFlairPost,
						isSelected: e.isHidden
					}, i.a.createElement(Re, null)), i.a.createElement(We, {
						className: this.getBreakpointClass(ee.a.Save),
						displayText: e.isSaved ? n.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : n.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: e.isSaved
					}, e.isSaved ? i.a.createElement(Ie, null) : i.a.createElement(Pe, null)), p && i.a.createElement(We, {
						displayText: r ? n.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : n.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, this.props.isPinned ? i.a.createElement(Ae, null) : i.a.createElement(Me, null)), !e.isSponsored && i.a.createElement(We, {
						className: this.getBreakpointClass(ee.a.Hide),
						displayText: e.isHidden ? n.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : n.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: e.isHidden
					}, i.a.createElement(ke, null)), !e.isSponsored && !x && i.a.createElement(We, {
						className: this.getBreakpointClass(ee.a.Report),
						displayText: n.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(we, null)), d && s && a && i.a.createElement(We, {
						onClick: a,
						displayText: n.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(De, null)), d && s && b && i.a.createElement(We, {
						onClick: b,
						displayText: n.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(Le, null)), d && !_ && h && i.a.createElement(We, {
						displayText: n.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: h
					}, i.a.createElement(Le, null)), d && i.a.createElement(We, {
						className: this.props.isPostPartOfACollection ? Ce.a.disabledRow : void 0,
						displayText: n.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(Te, null)), x && i.a.createElement(We, {
						displayText: n.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.props.toggleConfirmDelete
					}, i.a.createElement(Fe, null)), f && e.userIsOp && i.a.createElement(We, {
						displayText: e.post.distinguishType === o.C.ADMIN ? n.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : n.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => e.post.distinguishType === o.C.ADMIN ? e.onDistinguishPost(o.C.NONE) : e.onDistinguishPost(o.C.ADMIN)
					}, i.a.createElement(Se, null)), x && O && !g && i.a.createElement(Ge, {
						text: n.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.isOC
					}), x && i.a.createElement(Ge, {
						text: n.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.isSpoiler
					}), x && i.a.createElement(Ge, {
						text: n.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.isNSFW
					}), e.userIsOp && i.a.createElement(Ge, {
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
					return i.a.createElement("div", null, i.a.createElement(z.b, {
						className: Object(h.a)(Ce.a.overflowMenu, this.getOverflowMenuBreakpointClass(), e.className),
						dropdownId: e.dropdownId,
						isFixed: e.isFixed,
						layout: e.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), e.reportFlowIsOpen && e.subredditOrProfile && e.hasSubredditRules && this.renderReportFlow(), this.props.isConfirmDeleteOpen && i.a.createElement(Ke, {
						toggleConfirmDelete: this.props.toggleConfirmDelete,
						handleDeletePost: this.handleDeletePost
					}))
				}
			}
			const Ke = Object(c.i)(e => i.a.createElement(he.a, {
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
			He.contextType = j.a;
			t.g = Ve(He)
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			const r = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {}
				}),
				i = e => {
					let {
						children: t
					} = e;
					const [s, i] = Object(n.useState)(0), a = {
						currentTime: s,
						setCurrentTime: i
					};
					return o.a.createElement(r.Provider, {
						value: a
					}, t)
				}
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				i = () => null;
			t.a = Object(n.a)({
				ErrorComponent: i,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("vendors~ReportFlow"), s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			s("./src/reddit/constants/colors.ts").a.overlayReportFlow;
			const r = () => null;
			t.a = Object(n.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([s.e("vendors~ReportFlow"), s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = s.n(a);
			const d = i.a.span("TextWrapper", c.a),
				l = i.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(d, null, e.text, " ")), "Button", c.a),
				p = i.a.wrapped(l, "ApproveButton", c.a),
				m = i.a.wrapped(l, "RemoveButton", c.a),
				u = e => o.a.createElement("button", {
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./node_modules/uuid/v4.js"),
				p = s.n(l),
				m = s("./src/lib/addQueryParams/index.ts"),
				u = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/controls/Dropdown/index.tsx"),
				g = s("./src/reddit/controls/Dropdown/Row.tsx"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Embed/index.tsx"),
				C = s("./src/reddit/icons/fonts/Link/index.tsx"),
				j = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/routes/postCreation/constants.ts"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/components/ShareMenu/index.m.less"),
				I = s.n(w),
				P = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const S = Object(b.a)(f.a),
				T = Object(d.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(y.b)(s)(e)
					}
				}),
				N = Object(i.b)(T, (e, t) => {
					var {
						dropdownId: s,
						permalink: n
					} = t, o = P(t, ["dropdownId", "permalink"]);
					return {
						onCrosspost: () => {
							o.post && e(Object(c.b)("".concat(k.b, "?source_id=").concat(o.post.id)))
						},
						toggleDropdown: () => {
							e(Object(h.h)({
								tooltipId: s
							}))
						},
						copyLink: t => e(Object(u.v)(t))
					}
				});
			t.a = N(Object(a.i)(e => {
				const t = !e.subreddit || e.subreddit && e.subreddit.type === E.e.Public,
					s = !!e.post && e.post.isCrosspostable && !e.post.isSponsored;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.toggleDropdown,
					id: e.dropdownId
				}, e.children, r.a.createElement(S, {
					className: I.a.dropdown,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId
				}, r.a.createElement(g.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("Copy link", null, {
						hk: "1tCqox"
					}),
					onClick: () => {
						const {
							permalink: t,
							post: s
						} = e;
						if (s && Object(j.i)(s)) {
							const t = Object(O.a)(s.id),
								n = p()(),
								o = Object(m.a)(t, {
									[x.q]: n,
									utm_source: "share",
									utm_medium: "web2x",
									utm_content: "rpan_stream",
									context: 3
								});
							e.sendEventWithName("share_copy", {
								referralId: n
							}), e.copyLink(o)
						} else {
							const s = Object(m.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), e.copyLink(s)
						}
					}
				}, r.a.createElement(C.a, {
					className: I.a.linkIcon
				})), s && r.a.createElement(g.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("crosspost", null, {
						hk: "23zSN6"
					}),
					onClick: () => {
						e.sendEventWithName("share_crosspost"), e.onCrosspost()
					}
				}, r.a.createElement(v.a, {
					className: I.a.crosspostIcon
				})), t && r.a.createElement(g.b, {
					className: I.a.dropdownRow,
					displayText: n.fbt._("Embed", null, {
						hk: "2CcsuC"
					}),
					onClick: () => {
						e.sendEventWithName("share_embed"), window.open("https://embed.redditmedia.com/widgets/embed?url=".concat(e.permalink), "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
					}
				}, r.a.createElement(_.a, {
					className: I.a.embedIcon
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
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			}));
			const n = "comment",
				o = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				i = "comments-page-link-num-comments",
				a = "post-content"
		},
		"./src/reddit/constants/postCreation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
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
			const n = "PostCreation-AddEventButton",
				o = 500,
				r = "PostCreation-CollectionEducationTooltip",
				i = "PostCreation-EventEducationTooltip",
				a = 300,
				c = a,
				d = "PostCreation-AddToCollectionButton"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_2zOuGd5s9dLeXmKJ8TJF9T",
				checkboxSelected: "LevaZhN5EO7Pei7YvAi1W",
				sharedIconStyles: "_19iKCOTFpWIyFwZ0bqQhg",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
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
					className: Object(r.a)(l.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, o.a.createElement(c.a, {
					className: l.a.expandRight
				}, e.isSelected ? o.a.createElement(a.a, {
					className: l.a.checkboxSelected
				}) : o.a.createElement(i.a, {
					className: l.a.checkbox
				}), e.text)),
				h = e => {
					var {
						className: t
					} = e, s = m(e, ["className"]);
					return o.a.createElement(u, p({
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
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(o),
				i = s("./node_modules/raf/index.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				h = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/higherOrderComponents/asModal/index.tsx"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/layout/row/Inline/index.tsx"),
				g = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				O = s.n(g);
			var v = Object(b.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: O.a.wrapper
					}, d.a.createElement(f.a, {
						className: O.a.titleRow
					}, s), d.a.createElement("div", {
						className: O.a.detailsContainer
					}, t), d.a.createElement(f.a, {
						className: O.a.buttonRow
					}, d.a.createElement(x.i, {
						className: O.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				_ = s("./src/reddit/controls/ErrorText/index.m.less"),
				C = s.n(_);
			const j = Object(p.c)({
				activeModalId: h.a
			});
			class E extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					a()(() => {
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
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: i = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: a,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(C.a.wrapper, s)
					}, d.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, i), t === a && d.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: r
					}, o || e))
				}
			}
			const k = Object(l.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(E),
				y = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: r = []
					} = e, i = r.length ? r : o ? [o] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(k, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => d.a.createElement(y, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = k
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/Input/index.m.less"),
				r = s.n(o);
			t.a = n.a.input("input", r.a)
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return a
			})), s.d(t, "D", (function() {
				return c
			})), s.d(t, "q", (function() {
				return d
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "u", (function() {
				return p
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "s", (function() {
				return h
			})), s.d(t, "v", (function() {
				return b
			})), s.d(t, "o", (function() {
				return x
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "i", (function() {
				return C
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "w", (function() {
				return E
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "p", (function() {
				return w
			})), s.d(t, "y", (function() {
				return I
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "C", (function() {
				return T
			})), s.d(t, "z", (function() {
				return N
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "x", (function() {
				return R
			})), s.d(t, "A", (function() {
				return F
			})), s.d(t, "B", (function() {
				return A
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => Object.assign(Object.assign({}, o.defaults(e)), {
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.o)(e)
				}),
				a = () => e => Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post"
				}, r(e)),
				c = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer"
				}, r(e)),
				d = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date"
				}, r(e)),
				l = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time"
				}, r(e)),
				p = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone"
				}, r(e)),
				m = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply"
				}, r(e)),
				u = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				h = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				b = e => t => Object.assign(Object.assign({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit"
				}, r(t)), {
					scheduledPost: i(e)
				}),
				x = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts"
				}, r(e)),
				f = () => e => Object.assign({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts"
				}, r(e)),
				g = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "edit_post"
				}, r(e)),
				O = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "submit_post_now"
				}, r(e)),
				v = e => t => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: "overflow_menu"
				}, r(t)), {
					actionInfo: o.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				_ = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "one_time_frequency"
				}, r(e)),
				C = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "hourly_frequency"
				}, r(e)),
				j = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "daily_frequency"
				}, r(e)),
				E = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "weekly_frequency"
				}, r(e)),
				k = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "monthly_frequency"
				}, r(e)),
				y = () => e => Object.assign({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: "custom_frequency"
				}, r(e)),
				w = () => e => Object.assign({
					source: "post",
					action: "click",
					noun: "start_event_now"
				}, r(e)),
				I = (e, t, s) => i => Object.assign(Object.assign({
					source: "post",
					action: "click",
					noun: Object(n.l)(e)
				}, r(i)), {
					actionInfo: o.actionInfo(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				P = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta"
				}, r(e)),
				S = () => e => Object.assign({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post"
				}, r(e)),
				T = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer"
				}, r(e)),
				N = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "update"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				M = () => e => Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel"
				}, r(e)),
				R = () => (e, t) => Object.assign(Object.assign({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete"
				}, r(e)), {
					scheduledPost: i(t)
				}),
				F = () => e => Object.assign({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer"
				}, r(e)),
				A = () => (e, t) => {
					const s = r(e);
					return Object.assign(Object.assign({
						source: "post",
						action: "view",
						noun: "error"
					}, s), {
						actionInfo: Object.assign(Object.assign({}, s.actionInfo), {
							reason: "failed_post"
						}),
						scheduledPost: i(t)
					})
				}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("approve"), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("calendar"), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
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
				return o.a.createElement("i", d({
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Embed/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("embed"), " ").concat(e.className)
			}), "EmbedIcon", a.a);
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/IgnoreReport/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("ignoreReport"), " ").concat(e.className)
			}), "IgnoreReportIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live"), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock"), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("i", d({}, e, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("remove"), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report"), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
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
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Save/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("save"), " ").concat(e.className)
			}), "SaveIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("spam"), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("sticky"), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
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
				i = s("./src/reddit/icons/fonts/Tag/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
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
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/AddCollection/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, o.a.createElement("defs", null, o.a.createElement("path", {
				id: "svg-add-collection",
				d: "M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"
			})), o.a.createElement("use", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Saved/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
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
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: a
				} = e, p = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", d({
					className: Object(i.a)(c.a.expandRightContainer, t)
				}, p), o.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), o.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/selectors/posts.ts");
			const r = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(n.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				i = (e, t) => {
					const s = r(e, t);
					return Object(o.U)(e, {
						listingKey: s
					}) || []
				},
				a = (e, t) => {
					const s = r(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				c = (e, t) => {
					const s = r(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				d = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return !(!n || !n.hasNextPage)
				},
				l = (e, t) => {
					const s = r(e, t),
						n = e.listings.postOrder.pageInfo[s];
					return n && n.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => n.c.Enabled === Object(o.c)(e, {
				experimentEligibilitySelector: r.I,
				experimentName: n.e
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RpanListingUnit~reddit-components-MediumPost.b4f798258948212efa41.js.map