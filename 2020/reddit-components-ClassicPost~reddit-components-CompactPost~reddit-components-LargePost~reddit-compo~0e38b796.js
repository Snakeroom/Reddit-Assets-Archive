// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.1ae0d05373c35ac73446.js
// Retrieved at 2/6/2020, 4:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/omit.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				c = s.n(r),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
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
					const r = b(o.target, o.currentTarget);
					p(o.target, o.currentTarget, m.anchors) ? r && t && e(t(s, r)) : r && t && e(e => Object.assign({}, t(s, r)(e), {
						actionInfo: Object(i.previousPageActionInfo)(e)
					})), p(o.target, o.currentTarget, m.anchorsAndButtons) && n(o)
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
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return c.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
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
				p = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && p(e.parentElement, t, s)),
				b = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && b(e.parentElement, t))
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = s.n(n);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				i = s.n(a);

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
				return o.a.createElement(c.a, d({
					className: Object(r.a)(t, i.a.CallToActionButton, {
						[i.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(n.a)({
				getComponent: () => Object(o.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
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
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				i = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const u = c.a.div("Text", l.a),
				m = c.a.div("Placeholder", l.a),
				p = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(m, {
							className: t
						})
					},
					getComponent: () => Object(a.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(m, {
							className: t
						}, o.a.createElement(u, null, o.a.createElement(i.c, null, "Loading reports…")))
					}
				});
			t.a = e => o.a.createElement(p, e)
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				i = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
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
			t.a = Object(c.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: c,
					post: i,
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: c
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/i18n/utils.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/isRemoved.ts"),
				v = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				k = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				E = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				C = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				S = s("./src/reddit/icons/fonts/Report/index.tsx"),
				I = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				L = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				P = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				N = s("./src/reddit/components/PostBadges/index.m.less"),
				M = s.n(N);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => o.a.createElement("span", T({
					className: M.a.removalReason
				}, e), e.children),
				A = Object(d.e)("posts.archived"),
				B = Object(d.e)("modTools.commentsLocked"),
				R = Object(d.e)("modTools.moderatorOf"),
				F = Object(d.e)("modTools.stickiedPost"),
				V = Object(d.e)("modTools.pinnedPost"),
				W = (e, t, s) => {
					const n = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(n, "--").concat(s) : n
				},
				G = Object(g.t)({
					isProfilePostListing: g.H,
					isSubreddit: g.I,
					pageLayer: e => e
				}),
				z = Object(i.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(y.r)(e, {
							postId: s.id
						})
					},
					modModeEnabled: g.M
				}),
				H = Object(r.b)(z, (e, t) => ({
					onHideTooltip: () => e(Object(m.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(m.f)({
						tooltipId: t
					}))
				}));
			t.a = G(H(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: r,
					inSubredditOrProfile: i,
					isCompactPinnedPost: d,
					isPinned: m,
					isProfilePostListing: g,
					language: y,
					modModeEnabled: N,
					onHideTooltip: G,
					onOpenRemovalReasonModal: z,
					onShowTooltip: H,
					post: Z,
					tooltipType: U
				} = e;
				const D = {
						caretOnTop: !1
					},
					X = Z.isRemoved && !Z.modRemovalReason && !Z.modNote && Z.belongsTo.type === x.a.SUBREDDIT,
					J = W("Approve", Z.id, U),
					K = W("Archived", Z.id, U),
					Q = W("Automod", Z.id, U),
					q = W("Lock", Z.id, U),
					Y = W("Mod", Z.id, U),
					$ = W("Remove", Z.id, U),
					ee = W("Report", Z.id, U),
					te = W("Spam", Z.id, U),
					se = W("Sticky", Z.id, U),
					ne = W("Pinned", Z.id, U);
				return o.a.createElement("div", {
					className: t
				}, i && s && Z.distinguishType === u.B.MODERATOR && o.a.createElement(n.Fragment, null, o.a.createElement(P.a, {
					className: M.a.modIcon,
					desc: R(y, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: Y,
					text: R(y, {
						displayText: s
					})
				}, D))), Z.isArchived && o.a.createElement(n.Fragment, null, o.a.createElement(k.a, {
					className: M.a.archivedIcon,
					desc: A(y),
					id: K,
					onMouseEnter: H(K),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: K,
					text: A(y)
				}, D))), Z.isLocked && o.a.createElement(n.Fragment, null, o.a.createElement(E.a, {
					className: M.a.lockIcon,
					desc: B(y),
					id: q,
					onMouseEnter: H(q),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: q,
					text: B(y)
				}, D))), r && Object(h.k)(Z) && !d && o.a.createElement(n.Fragment, null, o.a.createElement(_.a, {
					className: M.a.stickyIcon,
					desc: F(y),
					id: se,
					onMouseEnter: H(se),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: se,
					text: F(y)
				}, D))), g && m && o.a.createElement(n.Fragment, null, o.a.createElement(_.a, {
					className: M.a.stickyIcon,
					desc: V(y),
					id: ne,
					onMouseEnter: H(ne),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: ne,
					text: V(y)
				}, D))), (Z.isApproved || Z.approvedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(j.a, {
					className: M.a.approveIcon,
					desc: Object(v.a)(y, Z),
					id: J,
					onMouseEnter: H(J),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: J,
					text: Object(v.a)(y, Z)
				}, D))), Object(O.a)(Z) && o.a.createElement(n.Fragment, null, o.a.createElement(C.a, {
					className: M.a.removeIcon,
					desc: Object(v.c)(y, Z),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: G
				}), X && o.a.createElement(b.a, {
					className: M.a.addRemovalReason,
					onClick: z,
					text: Object(a.c)("Add a removal reason")
				}), (Z.modRemovalReason || Z.modNote) && o.a.createElement(w, {
					onMouseEnter: H($),
					onMouseLeave: G
				}, o.a.createElement(c.c, null, "Removal reason")), o.a.createElement(p.c, T({
					tooltipId: $,
					text: Object(v.c)(y, Z)
				}, D))), Z.bannedBy && Z.isSpam && o.a.createElement(n.Fragment, null, o.a.createElement(I.a, {
					className: M.a.spamIcon,
					desc: Object(v.e)(y, Z),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: te,
					text: Object(v.e)(y, Z)
				}, D))), ("AutoModerator" === Z.approvedBy || "AutoModerator" === Z.bannedBy) && o.a.createElement(n.Fragment, null, o.a.createElement(L.a, {
					className: Object(l.a)(M.a.automoderator, !!Z.bannedBy && M.a.isRemoved),
					desc: Object(v.b)(y),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: Q,
					text: Object(v.b)(y)
				}, D))), Object(f.a)(Z) && !N && o.a.createElement(n.Fragment, null, o.a.createElement(S.a, {
					className: M.a.reportIcon,
					desc: Object(v.d)(y, Z.numReports),
					id: ee,
					onMouseEnter: H(ee),
					onMouseLeave: G
				}), o.a.createElement(p.c, T({
					tooltipId: ee,
					text: Object(v.d)(y, Z.numReports)
				}, D))))
			}))
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
				r = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				i = s("./src/reddit/components/GildModal/Loader.tsx"),
				d = s("./src/reddit/connectors/PostViewable/index.ts"),
				l = s("./src/reddit/models/Media/index.ts"),
				u = s("./src/reddit/selectors/gild.ts"),
				m = s("./src/reddit/selectors/video.ts"),
				p = s("./src/lib/classNames/index.ts"),
				b = s("./src/higherOrderComponents/withClickTracking.tsx"),
				x = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(x),
				O = s("./src/lib/lessComponent.tsx");

			function v() {
				return (v = Object.assign || function(e) {
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
			const h = O.a.div("WrappedPost", g.a),
				y = Object(r.c)({
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
						return Object(u.c)(e, o)
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
				j = Object(d.a)(y),
				k = e => {
					const t = Object(b.d)(e.target, e.currentTarget),
						s = Object(b.b)(e.target, e.currentTarget, b.a.buttons);
					return "subreddit" !== t && s
				};
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							afterClickTracking: t,
							buffering: s,
							children: n,
							className: r,
							continuousViewingStartedAt: a,
							gildModalIsOpen: d,
							makePostContainerId: u,
							playing: m,
							post: b,
							onClick: x,
							onPostContentClick: g,
							onPostViewable: O,
							isOverlay: y
						} = e,
						j = f(e, ["afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						E = o.a.createElement(h, v({}, j, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (t(() => x && x(e, b))(e), g && k(e) && g(e, b))
							},
							className: Object(p.a)(r, "Post ".concat(b.id), {
								promotedlink: b.isSponsored
							}),
							id: u ? u(b.id) : b.id,
							tabIndex: -1
						}), n, d && o.a.createElement(i.a, null)),
						C = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || C ? o.a.createElement(c.a, {
						onViewable: e => O(b, e),
						children: E,
						trackVideoMetrics: C && !s && m,
						continuousViewingStartedAt: a
					}) : E
				}
			}
			t.a = j(Object(b.c)(E))
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/getShortenedLink.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(i.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: n
				} = e, {
					source: i,
					isSponsored: d
				} = s;
				return i ? o.a.createElement(p, {
					className: Object(r.a)({
						[l.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(a.a, {
					href: i.url,
					isSponsored: d,
					source: i
				}, Object(c.a)(s), o.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
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
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = x.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = O(e, ["small", "shouldReverseColor"]);
					const r = s ? i.i : i.f;
					return o.a.createElement(r, g({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				f = x.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = O(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = n ? i.f : i.i;
					return o.a.createElement(c, g({}, r, {
						className: Object(b.a)(r.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				h = x.a.wrapped(d.a, "Checkmark", p.a),
				y = x.a.wrapped(l.a, "Plus", p.a),
				j = x.a.div("ButtonSpacer", p.a);
			class k extends o.a.Component {
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
							identifier: s,
							language: n,
							onSubscribe: c,
							onUnsubscribe: a,
							postId: i,
							sendEvent: d,
							small: l = !1,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: x,
							getEventFactory: k,
							onSubscriptionsRequested: E
						} = e,
						C = O(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						S = this.state.isHovered;
					let I = m ? Object(r.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribed")) : Object(r.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribe"));
					return m && S && (I = Object(r.a)(n, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".unsubscribe"))), m ? this.state.hasJustSubscribed || x ? o.a.createElement(f, g({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l,
							[p.a.unsubscribeButtonHoverStyles]: !l
						}),
						onClick: this.onClick,
						small: l,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, C), l && o.a.createElement(h, null), !l && !S && o.a.createElement(h, null), !l && I) : l ? null : o.a.createElement(j, null) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v, g({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l
						}),
						onClick: this.onClick,
						small: l
					}, C, {
						id: "subscribe-button-".concat(i),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), o.a.createElement(y, null), !l && I))
				}
			}
			t.a = Object(a.a)(Object(c.b)(k))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				let {
					type: t
				} = e;
				return "subreddit" === t ? "subredditActions" : "profileActions"
			}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				c = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				language: a.P,
				userIsSubscriber: c.Z
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
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
				c = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var i = e => o.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
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
			const b = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: c,
						"data-redditstyle": a
					} = t, i = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? u.a.mDisabledRedditStyle : u.a.mDisabled : n ? u.a.mActiveRedditStyle : u.a.mActive
					})(n, c, a);
					return o.a.createElement(e, m({
						className: Object(r.a)(u.a.Checkbox, d, s)
					}, i))
				},
				x = b(d.a),
				g = b(i);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? x : c.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(r.a)(u.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(c);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(n, "px")
					}
				})
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				c = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(a.g)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.o)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(r.a)(Object(o.a)(e), c.a.actionIcon, c.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("archived"), i.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(c);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
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
//# sourceMappingURL=reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost~reddit-compo~0e38b796.1ae0d05373c35ac73446.js.map