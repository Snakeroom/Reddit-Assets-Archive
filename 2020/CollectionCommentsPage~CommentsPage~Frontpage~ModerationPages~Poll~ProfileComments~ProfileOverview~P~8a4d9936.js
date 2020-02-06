// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936.feae5ad2083700c8b1b1.js
// Retrieved at 2/6/2020, 12:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = b(o.target, o.currentTarget);
					p(o.target, o.currentTarget, m.anchors) ? r && t && e(t(n, r)) : r && t && e(e => Object.assign({}, t(n, r)(e), {
						actionInfo: Object(i.previousPageActionInfo)(e)
					})), p(o.target, o.currentTarget, m.anchorsAndButtons) && s(o)
				}
			});

			function u(e) {
				class t extends c.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: n,
							clickTrackingId: s
						} = this.props;
						return c.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, n, s)
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
				p = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && p(e.parentElement, t, n)),
				b = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = Object(s.a)({
				getComponent: () => Object(o.a)(() => Promise.all([n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/i18n/components.tsx"),
				a = n("./src/reddit/i18n/utils.ts"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/app/strings/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = n("./src/reddit/constants/posts.ts"),
				v = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/helpers/isRemoved.ts"),
				g = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = n("./src/reddit/models/Post/index.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				I = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				y = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				k = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				S = n("./src/reddit/icons/fonts/Report/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				C = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				L = n("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				M = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = n("./src/reddit/components/PostBadges/index.m.less"),
				P = n.n(N);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const B = e => o.a.createElement("span", T({
					className: P.a.removalReason
				}, e), e.children),
				R = Object(d.e)("posts.archived"),
				w = Object(d.e)("modTools.commentsLocked"),
				A = Object(d.e)("modTools.moderatorOf"),
				F = Object(d.e)("modTools.stickiedPost"),
				V = Object(d.e)("modTools.pinnedPost"),
				G = (e, t, n) => {
					const s = "PostBadges--".concat(e, "--").concat(t);
					return n ? "".concat(s, "--").concat(n) : s
				},
				H = Object(v.t)({
					isProfilePostListing: v.H,
					isSubreddit: v.I,
					pageLayer: e => e
				}),
				X = Object(i.c)({
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(j.r)(e, {
							postId: n.id
						})
					},
					modModeEnabled: v.N
				}),
				z = Object(r.b)(X, (e, t) => ({
					onHideTooltip: () => e(Object(m.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(m.f)({
						tooltipId: t
					}))
				}));
			t.a = H(z(e => {
				let {
					className: t,
					displayText: n,
					isSubreddit: r,
					inSubredditOrProfile: i,
					isCompactPinnedPost: d,
					isPinned: m,
					isProfilePostListing: v,
					language: j,
					modModeEnabled: N,
					onHideTooltip: H,
					onOpenRemovalReasonModal: X,
					onShowTooltip: z,
					post: W,
					tooltipType: U
				} = e;
				const J = {
						caretOnTop: !1
					},
					K = W.isRemoved && !W.modRemovalReason && !W.modNote && W.belongsTo.type === x.a.SUBREDDIT,
					Z = G("Approve", W.id, U),
					D = G("Archived", W.id, U),
					q = G("Automod", W.id, U),
					Q = G("Lock", W.id, U),
					Y = G("Mod", W.id, U),
					$ = G("Remove", W.id, U),
					ee = G("Report", W.id, U),
					te = G("Spam", W.id, U),
					ne = G("Sticky", W.id, U),
					se = G("Pinned", W.id, U);
				return o.a.createElement("div", {
					className: t
				}, i && n && W.distinguishType === u.B.MODERATOR && o.a.createElement(s.Fragment, null, o.a.createElement(M.a, {
					className: P.a.modIcon,
					desc: A(j, {
						displayText: n
					}),
					id: Y,
					onMouseEnter: z(Y),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: Y,
					text: A(j, {
						displayText: n
					})
				}, J))), W.isArchived && o.a.createElement(s.Fragment, null, o.a.createElement(I.a, {
					className: P.a.archivedIcon,
					desc: R(j),
					id: D,
					onMouseEnter: z(D),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: D,
					text: R(j)
				}, J))), W.isLocked && o.a.createElement(s.Fragment, null, o.a.createElement(y.a, {
					className: P.a.lockIcon,
					desc: w(j),
					id: Q,
					onMouseEnter: z(Q),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: Q,
					text: w(j)
				}, J))), r && Object(h.k)(W) && !d && o.a.createElement(s.Fragment, null, o.a.createElement(C.a, {
					className: P.a.stickyIcon,
					desc: F(j),
					id: ne,
					onMouseEnter: z(ne),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: ne,
					text: F(j)
				}, J))), v && m && o.a.createElement(s.Fragment, null, o.a.createElement(C.a, {
					className: P.a.stickyIcon,
					desc: V(j),
					id: se,
					onMouseEnter: z(se),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: se,
					text: V(j)
				}, J))), (W.isApproved || W.approvedBy) && o.a.createElement(s.Fragment, null, o.a.createElement(E.a, {
					className: P.a.approveIcon,
					desc: Object(g.a)(j, W),
					id: Z,
					onMouseEnter: z(Z),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: Z,
					text: Object(g.a)(j, W)
				}, J))), Object(O.a)(W) && o.a.createElement(s.Fragment, null, o.a.createElement(k.a, {
					className: P.a.removeIcon,
					desc: Object(g.c)(j, W),
					id: $,
					onMouseEnter: z($),
					onMouseLeave: H
				}), K && o.a.createElement(b.a, {
					className: P.a.addRemovalReason,
					onClick: X,
					text: Object(a.c)("Add a removal reason")
				}), (W.modRemovalReason || W.modNote) && o.a.createElement(B, {
					onMouseEnter: z($),
					onMouseLeave: H
				}, o.a.createElement(c.c, null, "Removal reason")), o.a.createElement(p.c, T({
					tooltipId: $,
					text: Object(g.c)(j, W)
				}, J))), W.bannedBy && W.isSpam && o.a.createElement(s.Fragment, null, o.a.createElement(_.a, {
					className: P.a.spamIcon,
					desc: Object(g.e)(j, W),
					id: te,
					onMouseEnter: z(te),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: te,
					text: Object(g.e)(j, W)
				}, J))), ("AutoModerator" === W.approvedBy || "AutoModerator" === W.bannedBy) && o.a.createElement(s.Fragment, null, o.a.createElement(L.a, {
					className: Object(l.a)(P.a.automoderator, !!W.bannedBy && P.a.isRemoved),
					desc: Object(g.b)(j),
					id: q,
					onMouseEnter: z(q),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: q,
					text: Object(g.b)(j)
				}, J))), Object(f.a)(W) && !N && o.a.createElement(s.Fragment, null, o.a.createElement(S.a, {
					className: P.a.reportIcon,
					desc: Object(g.d)(j, W.numReports),
					id: ee,
					onMouseEnter: z(ee),
					onMouseLeave: H
				}), o.a.createElement(p.c, T({
					tooltipId: ee,
					text: Object(g.d)(j, W.numReports)
				}, J))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/components/GildModal/getGildModalId.ts"),
				i = n("./src/reddit/components/GildModal/Loader.tsx"),
				d = n("./src/reddit/connectors/PostViewable/index.ts"),
				l = n("./src/reddit/models/Media/index.ts"),
				u = n("./src/reddit/selectors/gild.ts"),
				m = n("./src/reddit/selectors/video.ts"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/higherOrderComponents/withClickTracking.tsx"),
				x = n("./src/reddit/components/PostContainer/index.m.less"),
				v = n.n(x),
				O = n("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const h = O.a.div("WrappedPost", v.a),
				j = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					buffering: (e, t) => {
						let {
							post: n
						} = t;
						return Object(m.a)(e, {
							postId: n.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: n,
							post: s
						} = t;
						const o = Object(a.b)(s.postId, n);
						return Object(u.c)(e, o)
					},
					playing: (e, t) => {
						let {
							post: n
						} = t;
						return Object(m.e)(e, {
							postId: n.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: n
						} = t;
						return Object(m.c)(e, {
							postId: n.id
						})
					}
				}),
				E = Object(d.a)(j),
				I = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						n = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && n
				};
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							afterClickTracking: t,
							buffering: n,
							children: s,
							className: r,
							continuousViewingStartedAt: a,
							gildModalIsOpen: d,
							makePostContainerId: u,
							playing: m,
							post: b,
							onClick: x,
							onPostContentClick: v,
							onPostViewable: O,
							isOverlay: j
						} = e,
						E = f(e, ["afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						y = o.a.createElement(h, g({}, E, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (t(() => x && x(e, b))(e), v && I(e) && v(e, b))
							},
							className: Object(p.a)(r, "Post ".concat(b.id), {
								promotedlink: b.isSponsored
							}),
							id: u ? u(b.id) : b.id,
							tabIndex: -1
						}), s, d && o.a.createElement(i.a, null)),
						k = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || k ? o.a.createElement(c.a, {
						onViewable: e => O(b, e),
						children: y,
						trackVideoMetrics: k && !n && m,
						continuousViewingStartedAt: a
					}) : y
				}
			}
			t.a = E(Object(b.c)(y))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = n.n(a);
			const d = c.a.span("TextWrapper", i.a),
				l = c.a.wrapped(e => o.a.createElement("button", {
					className: e.className,
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && o.a.createElement(d, null, e.text, " ")), "Button", i.a),
				u = c.a.wrapped(l, "ApproveButton", i.a),
				m = c.a.wrapped(l, "RemoveButton", i.a),
				p = e => o.a.createElement("button", {
					className: Object(r.a)(i.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/getShortenedLink.ts"),
				a = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = n("./src/reddit/components/SourceLink/index.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(i.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: n,
					isCommentsPage: s
				} = e, {
					source: i,
					isSponsored: d
				} = n;
				return i ? o.a.createElement(p, {
					className: Object(r.a)({
						[l.a["m-comment"]]: s
					}, t)
				}, o.a.createElement(a.a, {
					href: i.url,
					isSponsored: d,
					source: i
				}, Object(c.a)(n), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/app/strings/index.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = n.n(m),
				b = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const g = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: n
					} = e, s = O(e, ["small", "shouldReverseColor"]);
					const r = n ? i.i : i.f;
					return o.a.createElement(r, v({}, s, {
						className: Object(b.a)(s.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				f = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: n,
						shouldReverseColor: s
					} = e, r = O(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = s ? i.f : i.i;
					return o.a.createElement(c, v({}, r, {
						className: Object(b.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				h = x.a.wrapped(d.a, "Checkmark", p.a),
				j = x.a.wrapped(l.a, "Plus", p.a),
				E = x.a.div("ButtonSpacer", p.a);
			class I extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: n,
							language: s,
							onSubscribe: c,
							onUnsubscribe: a,
							postId: i,
							sendEvent: d,
							small: l = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: x,
							getEventFactory: I,
							onSubscriptionsRequested: y
						} = e,
						k = O(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						S = this.state.isHovered;
					let _ = m ? Object(r.a)(s, "subscriptions.".concat(Object(u.a)({
						type: n.type
					}), ".subscribed")) : Object(r.a)(s, "subscriptions.".concat(Object(u.a)({
						type: n.type
					}), ".subscribe"));
					return m && S && (_ = Object(r.a)(s, "subscriptions.".concat(Object(u.a)({
						type: n.type
					}), ".unsubscribe"))), m ? this.state.hasJustSubscribed || x ? o.a.createElement(f, v({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l,
							[p.a.unsubscribeButtonHoverStyles]: !l
						}),
						onClick: this.onClick,
						small: l,
						belongsToType: n.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, k), l && o.a.createElement(h, null), !l && !S && o.a.createElement(h, null), !l && _) : l ? null : o.a.createElement(E, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g, v({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l
						}),
						onClick: this.onClick,
						small: l
					}, k, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(j, null), !l && _))
				}
			}
			t.a = Object(a.a)(Object(c.b)(I))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				language: a.P,
				userIsSubscriber: c.ab
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(r.d([n], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([n], !1))
				}
			})
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(c);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, n, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(s, "px")
					}
				})
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(c);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("sticky"), i.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModerationPages~Poll~ProfileComments~ProfileOverview~P~8a4d9936.feae5ad2083700c8b1b1.js.map