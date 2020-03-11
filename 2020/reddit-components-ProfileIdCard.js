// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.4e112ae58b192c7a74e0.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, n = null == e ? 0 : e.length, r = 0, a = []; ++t < n;) {
					var s = e[t];
					s && (a[r++] = s)
				}
				return a
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/reddit/i18n/utils.ts");
			const a = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, n) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						i = n ? s : a;
					return Object(r.c)(i[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function l(e, t, n, r) {
				const a = new Date(1e3 * e),
					s = i(a, n, r),
					l = t ? o(a, n) + ", " : "";
				return "".concat(s, " ").concat(l).concat(c(a, n))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/chat/toggle.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const d = e => {
				let {
					onStartChat: t,
					children: n,
					className: r,
					sendEvent: s,
					contextId: o
				} = e;
				return a.a.createElement(c.f, {
					onClick: () => {
						t(), s(Object(l.b)(o))
					},
					className: r
				}, n)
			};
			d.displayName = "ChatButton";
			const m = Object(s.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(o.a)(r, n))
					}
				}
			});
			t.a = m(Object(i.b)(d))
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/i18n/components.tsx"),
				c = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				l = n.n(c);
			class d extends a.a.PureComponent {
				render() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					if (!e.topAward) return null;
					const {
						topAward: n,
						totalCount: r
					} = e, c = n.icon32 ? n.icon32.url : n.icon.url, d = n.description ? n.description : n.name;
					return a.a.createElement("a", {
						className: l.a.AwardedLastMonth,
						href: "".concat(s.a.oldRedditUrl, "/user/").concat(t, "/gilded")
					}, a.a.createElement("div", {
						className: l.a.iconColumn
					}, a.a.createElement("img", {
						alt: d,
						className: l.a.icon,
						src: c
					}), r > 1 && a.a.createElement("span", {
						className: l.a.count
					}, "+".concat(Object(o.b)(r - 1)))), a.a.createElement("div", {
						className: l.a.textColumn
					}, r > 1 ? a.a.createElement(i.c, null, "Received the ", a.a.createElement(i.b, {
						name: "award-name"
					}, n.name), " ", "Award and more in the past 30 days") : a.a.createElement(i.c, null, "Received the ", a.a.createElement(i.b, {
						name: "award-name"
					}, n.name), " ", "Award in the past 30 days")))
				}
			}
			t.a = d
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, n) {
			e.exports = {
				BannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				bannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				BannerImage: "_39u8lkB0jifV2dCyGxhTst",
				bannerImage: "_39u8lkB0jifV2dCyGxhTst",
				SnooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
				snooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				UserTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				userTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				PremiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				premiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				userName: "_2hgZVu2K-pvoghsBGGbJ7P",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ",
				CloseIcon: "t8u6KWjSIjLFBXsDU3u5M",
				closeIcon: "t8u6KWjSIjLFBXsDU3u5M",
				LoadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.tsx"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/i18n/utils.ts"),
				m = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				p = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				b = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				h = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				g = n("./node_modules/react-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				x = n("./src/lib/humanizeDate/index.ts"),
				v = n("./src/lib/prettyPrintNumber/index.ts"),
				C = n("./src/lib/timeAgo/index.ts"),
				w = n("./src/reddit/contexts/InsideOverlay.tsx"),
				y = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				I = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				O = n("./src/reddit/icons/svgs/User/index.tsx"),
				E = n("./src/reddit/selectors/profile.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/tooltip.ts"),
				M = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				P = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				k = n.n(P);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(f.c)({
					language: _.O
				}),
				L = o.a.div("Container", k.a),
				T = o.a.div("Body", k.a),
				D = o.a.h5("Title", k.a),
				B = o.a.span("Label", k.a);
			class R extends s.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: n,
						tooltip: r,
						tooltipId: a
					} = this.props, o = a && r ? {
						id: a,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return s.a.createElement(L, null, s.a.createElement(D, null, n), s.a.createElement(T, null, e, s.a.createElement(B, N({
						key: "label"
					}, o), t)), a && r && s.a.createElement(M.c, {
						caretOnTop: !0,
						tooltipId: a,
						text: r
					}))
				}
			}
			var A = Object(g.b)(S, e => ({
					toggleTooltip: t => e(Object(j.h)({
						tooltipId: t
					}))
				}))(Object(w.b)(R)),
				F = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				W = n.n(F);
			const U = Object(f.a)(E.j, (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(_.fb)(e, n)
				}, _.O, (e, t, n) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: n,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				H = o.a.div("Container", W.a);

			function K(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var G = Object(g.b)(U)(Object(w.b)(e => {
					const {
						profileCreated: t,
						isOverlay: n,
						language: r,
						commentKarma: a,
						postKarma: o,
						subscribers: i
					} = e, c = K(n, "karma"), l = K(n, "cakeday"), m = Object(d.c)("".concat(Object(d.b)("postKarmaNumber", Object(v.b)(o, !0)), " Post Karma")), u = Object(d.c)("".concat(Object(d.b)("commentKarmaNumber", Object(v.b)(a, !0)), " Comment Karma"));
					return s.a.createElement(H, null, s.a.createElement(A, {
						icon: s.a.createElement(I.a, {
							className: W.a.icon,
							key: "karma"
						}),
						label: Object(v.b)(a + o, !0),
						title: Object(d.c)("Karma"),
						tooltipId: c,
						tooltip: "".concat(m, "\n").concat(u)
					}), s.a.createElement(A, {
						icon: s.a.createElement(y.a, {
							className: W.a.icon,
							key: "cakeDay"
						}),
						label: Object(x.a)(t, !0),
						title: Object(d.c)("Cake day"),
						tooltipId: l,
						tooltip: Object(C.d)(r, t)
					}), i > 0 && s.a.createElement(A, {
						icon: s.a.createElement(O.a, {
							className: W.a.icon,
							key: "followers"
						}),
						title: Object(d.c)("Followers"),
						label: Object(v.b)(i, !0)
					}))
				})),
				Z = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				V = n.n(Z),
				z = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				q = n.n(z);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "a", (function() {
				return le
			}));
			var Q = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			const X = o.a.div("BannerWrapper", q.a),
				Y = o.a.div("BannerImage", q.a),
				$ = o.a.div("SnooIcon", q.a),
				ee = o.a.wrapped(i.b, "Widget", q.a),
				te = o.a.h4("UserTitle", q.a),
				ne = o.a.wrapped(p.a, "PremiumIcon", q.a),
				re = o.a.div("Description", q.a),
				ae = e => {
					var {
						url: t
					} = e, n = Q(e, ["url"]);
					return t ? s.a.createElement(c.a, J({}, n, {
						className: q.a.userName,
						to: t
					})) : s.a.createElement("span", J({}, n, {
						className: q.a.userName
					}))
				},
				se = o.a.wrapped(b.a, "Actions", q.a),
				oe = o.a.wrapped(u.a, "CloseIcon", q.a),
				ie = o.a.wrapped(l.a, "LoadingIconStyled", q.a),
				ce = () => s.a.createElement(ie, {
					sizePx: 20
				});
			class le extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? s.a.createElement(h.a, {
						recentAwardings: e,
						username: t
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: n,
						footer: a,
						isEmployee: o,
						isGold: i,
						isOverlay: c,
						profileIcon: l,
						publicDescription: u,
						title: p,
						url: b,
						username: h,
						isDefaultIcon: g,
						isDeletingIcon: f,
						isDeletingBanner: x,
						onDeleteIcon: v,
						onDeleteBanner: C,
						editMode: w
					} = this.props;
					return s.a.createElement(ee, {
						className: n
					}, s.a.createElement(X, null, t && s.a.createElement(Y, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), w && t && (x ? s.a.createElement(ce, null) : s.a.createElement(oe, {
						onClick: C
					}))), s.a.createElement("div", {
						className: V.a.SnooIconWrapper
					}, s.a.createElement($, {
						style: {
							backgroundImage: "url(".concat(l, ")")
						}
					}), w && !g && (f ? s.a.createElement(ce, null) : s.a.createElement(oe, {
						onClick: v
					}))), p && s.a.createElement(te, null, p), s.a.createElement(ae, {
						url: b
					}, "u/".concat(h)), o && s.a.createElement(m.a, {
						className: V.a.adminIcon,
						title: Object(d.c)("Reddit admin")
					}), i && s.a.createElement("a", {
						title: Object(d.c)("".concat(Object(d.b)("username", h), " has Reddit Premium")),
						href: "".concat(r.a.redditUrl, "/premium")
					}, s.a.createElement(ne, null)), s.a.createElement(re, null, u), s.a.createElement(G, {
						profileName: h,
						isOverlay: c
					}), this.renderAwardedLastMonth(), s.a.createElement(se, null, e), a)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, n) {
			e.exports = {
				container: "_2jvbIljd1r6tRUsfoDij_y",
				expandContainer: "_1HKW6ri9nK1INtj09BfFfM",
				expandButton: "_34I-V8v9TxMwIW1R6Rbi3A",
				menuItem: "_2j70PtPj9zrWOU8NshwTg-",
				redditStyle: "_38vTQxawhhbbhD8rZc36N5",
				Shimmer: "_1-2CAwx45SgG4EsI1-GWZh",
				shimmer: "_1-2CAwx45SgG4EsI1-GWZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, n) {
			e.exports = {
				SnooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				snooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/subscription/index.ts"),
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/posts.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/i18n/components.tsx"),
				h = n("./src/reddit/selectors/platform.ts"),
				g = n("./src/reddit/selectors/profile.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/tooltip.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				C = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				w = n("./node_modules/lodash/compact.js"),
				y = n.n(w),
				I = n("./src/lib/classNames/index.ts"),
				O = n("./src/reddit/actions/gold/modals.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/actions/multireddit/index.ts"),
				j = n("./src/reddit/actions/profile/index.ts"),
				M = n("./src/higherOrderComponents/makeAsync.tsx"),
				P = n("./src/lib/loadWithRetries/index.ts");
			var k = Object(M.a)({
					getComponent: () => Object(P.a)(() => n.e("GivePremiumModal").then(n.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				N = n("./src/reddit/constants/modals.ts"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				L = n("./src/reddit/controls/OutboundLink/index.tsx"),
				T = n("./src/reddit/helpers/correlationIdTracker.ts"),
				D = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				B = n("./src/reddit/models/Gold/Premium/index.ts"),
				R = n("./src/reddit/selectors/premium.ts"),
				A = n("./src/reddit/components/ProfileIdCard/footer.m.less"),
				F = n.n(A);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var U = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			const H = Object(i.c)({
					areModeratedSubredditsPending: g.a,
					coinsToSpend: v.d,
					givePremiumModalIsOpen: R.c,
					hasFetchedModerators: g.k,
					isEmployee: v.D,
					isLoggedIn: v.G,
					language: v.O,
					profile: g.j
				}),
				K = e => {
					var {
						isLoading: t
					} = e, n = U(e, ["isLoading"]);
					return s.a.createElement("div", W({}, n, {
						className: Object(I.a)(F.a.Shimmer, Object(D.b)({
							isLoading: t
						}))
					}))
				};
			class G extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						Object(T.d)(T.a.GiftPremiumFlow), e();
						const {
							clickGivePremiumEvent: r
						} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(r())
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: n,
							hasSubreddit: a,
							isEmployee: s,
							isLoggedIn: o,
							isModerator: i,
							isOwnProfile: c,
							profileName: l,
							profile: d
						} = this.props, m = o && Object(B.c)(n, s).length && !c || s, u = y()([(c || i) && a ? {
							text: C.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(l, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, c ? void 0 : {
							text: C.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(r.a.redditUrl, "/message/compose/?to=").concat(l)
						}, !c && t ? {
							text: C.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(r.a.redditUrl, "/user/").concat(l, "/snoo")
						} : void 0, c ? void 0 : {
							text: C.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, o && d && !d.isQuarantined ? {
							onClick: e,
							text: C.fbt._("Add to custom feed", null, {
								hk: "8zqUU"
							})
						} : void 0]);
						return m && u.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: C.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), u
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(e => {
							let {
								expanded: t
							} = e;
							return {
								expanded: !t
							}
						})
					}
				}
				canLoadMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && !this.props.hasFetchedModerators && !this.props.areModeratedSubredditsPending
				}
				isLoadingMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && (!this.props.hasFetchedModerators || this.props.areModeratedSubredditsPending)
				}
				render() {
					const {
						givePremiumModalIsOpen: e
					} = this.props, {
						expanded: t
					} = this.state, n = this.makeMenuItems();
					if (0 === n.length) return null;
					const r = (t ? n : []).map(e => e.url ? e.isInternalLink ? s.a.createElement(S.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: F.a.menuItem
					}, e.text) : s.a.createElement(L.a, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: F.a.menuItem
					}, e.text) : s.a.createElement(p.n, {
						className: F.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (r.unshift(s.a.createElement("div", {
						className: F.a.menuItem,
						key: "loading-1"
					}, s.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), r.unshift(s.a.createElement("div", {
						className: F.a.menuItem,
						key: "loading-2"
					}, s.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const a = t ? C.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : C.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return s.a.createElement("div", {
						className: F.a.container
					}, r, s.a.createElement("div", {
						className: F.a.expandContainer
					}, s.a.createElement(p.n, {
						className: F.a.expandButton,
						onClick: this.moreOptionsToggled
					}, a)), e && s.a.createElement(k, null))
				}
			}
			var Z = Object(o.b)(H, (e, t) => {
					let {
						profileName: n
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(_.g)(!0, !0)), e(Object(E.h)(N.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: () => e(Object(O.e)(n)),
						onModeratorsRequested: () => e(Object(j.b)(n))
					}
				})(G),
				V = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				z = n.n(V);
			const q = Object(i.c)({
					account: v.i,
					activeTooltipId: x.a,
					currentUserHasSubreddit: v.g,
					hideNSFWPref: v.y,
					isModerator: g.f,
					profile: g.j,
					profileAboutInfo: g.h,
					structuredStyle: (e, t) => Object(f.n)(e, Object(g.m)(e, t.profileName)),
					userHasSubreddit: (e, t) => {
						let {
							profileName: n
						} = t;
						return Object(v.db)(e, {
							userName: n
						})
					},
					user: (e, t) => {
						let {
							profileName: n
						} = t;
						return Object(v.cb)(e, {
							userName: n
						})
					},
					page: h.b
				}),
				J = e => {
					let {
						username: t,
						currentUserHasSubreddit: n
					} = e;
					return s.a.createElement("div", {
						className: z.a.actionItem
					}, s.a.createElement(p.h, {
						className: z.a.button,
						to: n ? "/user/".concat(t, "/submit") : "/submit"
					}, s.a.createElement(b.c, null, "New post")))
				},
				Q = e => {
					let {
						profileName: t,
						onToggleFollow: n,
						userIsSubscriber: r
					} = e;
					return s.a.createElement("div", {
						className: z.a.actionItem
					}, r ? s.a.createElement(p.i, {
						className: z.a.button,
						onClick: () => n(t, r)
					}, s.a.createElement(b.c, null, "Unfollow")) : s.a.createElement(p.f, {
						className: z.a.button,
						onClick: () => n(t, r)
					}, s.a.createElement(b.c, null, "Follow")))
				},
				X = e => {
					let {
						userId: t
					} = e;
					return s.a.createElement("div", {
						className: z.a.actionItem
					}, s.a.createElement(l.a, {
						contextId: t,
						className: z.a.button,
						userId: t
					}, s.a.createElement(b.c, null, "Chat")))
				};
			t.default = Object(o.b)(q, e => ({
				onToggleFollow: (t, n) => e(Object(c.d)([{
					name: t,
					type: u.a.PROFILE
				}], !n))
			}))(Object(m.b)(e => {
				const {
					account: t,
					currentUserHasSubreddit: n,
					hideNSFWPref: a,
					isModerator: o,
					isOverlay: i,
					isSubmissionPage: c,
					onToggleFollow: l,
					profile: m,
					profileAboutInfo: u,
					sendEvent: p,
					structuredStyle: b,
					userHasSubreddit: h,
					user: g,
					page: f
				} = e;
				if (!g) return null;
				const {
					accountIcon: x,
					awardedLastMonth: v,
					id: C,
					isEmployee: w,
					isGold: y,
					prefShowSnoovatar: I,
					username: O
				} = g, E = !!t && t.id === C, _ = b && b.bannerBackgroundImage, j = m && m.isNSFW && a, M = !(!u || !u.userIsSubscriber), P = "/user/".concat(O, "/"), k = f && f.url === P;
				return s.a.createElement(d.a, {
					isEmployee: w,
					isGold: y,
					isOverlay: i,
					publicDescription: u ? u.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: k ? null : P,
					username: O,
					recentAwardings: v,
					actions: s.a.createElement(s.a.Fragment, null, E && !c && J({
						username: O,
						currentUserHasSubreddit: n
					}), !E && h && Q({
						profileName: O,
						onToggleFollow: l,
						userIsSubscriber: M
					}), !!t && !E && X({
						userId: C
					})),
					footer: s.a.createElement(Z, {
						hasSubreddit: h,
						isModerator: o,
						isOwnProfile: E,
						allowViewSnoovatar: I,
						profileName: O,
						sendEvent: p
					}),
					profileIcon: j ? "".concat(r.a.assetPath, "/img/avatar_over18_square.png") : x,
					bannerBackgroundImage: j ? void 0 : _
				})
			}))
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
				return m
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i),
				l = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
					}
					return n
				};
			const d = s.a.div("WidgetBackground", c.a),
				m = s.a.wrapped(e => {
					var {
						children: t
					} = e, n = l(e, ["children"]);
					return a.a.createElement("div", n, a.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement(d, null, e.children))
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(a);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(s.a.loadingBackground, {
						[s.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(s.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && a.a.createElement("title", null, e.title), e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), a.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, a.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), a.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), a.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), a.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/i18n/components.tsx");
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("title", null, a.a.createElement(s.c, null, "Reddit Premium")), a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, n) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				s = n.n(a);
			t.a = r.a.div("dynamicTwoCol", s.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				s = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = [];
					for (const r in a) {
						const s = a[r];
						(s.priceInCoins <= e || t) && n.push(s)
					}
					return n
				},
				o = e => r.fbt._({
					"*": "{number of months} months{number of coins} Coins",
					_1: "1 month{number of coins} Coins"
				}, [r.fbt._plural(e.monthsOfPremium, "number of months"), r.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2I0m2c"
				}),
				i = [{
					prompt: () => r.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => r.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => r.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => r.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => r.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => r.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => r.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => r.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => r.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => r.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}]
		},
		"./src/reddit/selectors/premium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = e => !!e.givePremium.givePremiumModalAccountName,
				a = e => e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.api.error || "",
				o = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=reddit-components-ProfileIdCard.4e112ae58b192c7a74e0.js.map