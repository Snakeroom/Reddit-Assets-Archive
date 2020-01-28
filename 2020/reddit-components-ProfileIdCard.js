// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.7a87eaede677b2f9f1b8.js
// Retrieved at 1/28/2020, 6:10:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, n = null == e ? 0 : e.length, r = 0, s = []; ++t < n;) {
					var a = e[t];
					a && (s[r++] = a)
				}
				return s
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/reddit/i18n/utils.ts");
			const s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, n) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						i = n ? a : s;
					return Object(r.c)(i[o])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, n, r) {
				const s = new Date(1e3 * e),
					a = i(s, n, r),
					d = t ? o(s, n) + ", " : "";
				return "".concat(a, " ").concat(d).concat(c(s, n))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/chat/toggle.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: n,
					className: r,
					sendEvent: a,
					contextId: o
				} = e;
				return s.a.createElement(c.f, {
					onClick: () => {
						t(), a(Object(d.b)(o))
					},
					className: r
				}, n)
			};
			l.displayName = "ChatButton";
			const m = Object(a.b)(null, (e, t) => {
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
			t.a = m(Object(i.b)(l))
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				l = n("./src/reddit/i18n/components.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				u = n.n(m);
			const p = Object(o.c)({
				isInGoldProfileGildedExperiment: d.a
			});
			class g extends s.a.PureComponent {
				render() {
					const {
						isInGoldProfileGildedExperiment: e,
						recentAwardings: t,
						username: n
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: r,
						totalCount: a
					} = t, o = r.icon32 ? r.icon32.url : r.icon.url, d = r.description ? r.description : r.name;
					return s.a.createElement("a", {
						className: u.a.AwardedLastMonth,
						href: e ? "/user/".concat(n, "/gilded") : "".concat(i.a.oldRedditUrl, "/user/").concat(n, "/gilded")
					}, s.a.createElement("div", {
						className: u.a.iconColumn
					}, s.a.createElement("img", {
						alt: d,
						className: u.a.icon,
						src: o
					}), a > 1 && s.a.createElement("span", {
						className: u.a.count
					}, "+".concat(Object(c.b)(a - 1)))), s.a.createElement("div", {
						className: u.a.textColumn
					}, a > 1 ? s.a.createElement(l.c, null, "Received the ", s.a.createElement(l.b, {
						name: "award-name"
					}, r.name), " Award and more in the past 30 days") : s.a.createElement(l.c, null, "Received the ", s.a.createElement(l.b, {
						name: "award-name"
					}, r.name), " Award in the past 30 days")))
				}
			}
			t.a = Object(a.b)(p)(g)
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.tsx"),
				c = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/i18n/utils.ts"),
				m = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				p = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				g = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				x = n("./node_modules/react-redux/es/index.js"),
				f = n("./node_modules/reselect/es/index.js"),
				h = n("./src/lib/humanizeDate/index.ts"),
				v = n("./src/lib/prettyPrintNumber/index.ts"),
				C = n("./src/lib/timeAgo/index.ts"),
				O = n("./src/reddit/contexts/InsideOverlay.tsx"),
				I = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				E = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				j = n("./src/reddit/icons/svgs/User/index.tsx"),
				w = n("./src/reddit/selectors/profile.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				_ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				M = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				N = n.n(M);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(f.c)({
					language: y.T
				}),
				k = o.a.div("Container", N.a),
				T = o.a.div("Body", N.a),
				D = o.a.h5("Title", N.a),
				B = o.a.span("Label", N.a);
			class A extends a.a.Component {
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
						tooltipId: s
					} = this.props, o = s && r ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return a.a.createElement(k, null, a.a.createElement(D, null, n), a.a.createElement(T, null, e, a.a.createElement(B, S({
						key: "label"
					}, o), t)), s && r && a.a.createElement(_.c, {
						caretOnTop: !0,
						tooltipId: s,
						text: r
					}))
				}
			}
			var U = Object(x.b)(L, e => ({
					toggleTooltip: t => e(Object(P.g)({
						tooltipId: t
					}))
				}))(Object(O.b)(A)),
				F = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				W = n.n(F);
			const K = Object(f.a)(w.j, (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(y.lb)(e, n)
				}, y.T, (e, t, n) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: n,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				R = o.a.div("Container", W.a);

			function H(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var G = Object(x.b)(K)(Object(O.b)(e => {
					const {
						profileCreated: t,
						isOverlay: n,
						language: r,
						commentKarma: s,
						postKarma: o,
						subscribers: i
					} = e, c = H(n, "karma"), d = H(n, "cakeday"), m = Object(l.c)("".concat(Object(l.b)("postKarmaNumber", Object(v.b)(o, !0)), " Post Karma")), u = Object(l.c)("".concat(Object(l.b)("commentKarmaNumber", Object(v.b)(s, !0)), " Comment Karma"));
					return a.a.createElement(R, null, a.a.createElement(U, {
						icon: a.a.createElement(E.a, {
							className: W.a.icon,
							key: "karma"
						}),
						label: Object(v.b)(s + o, !0),
						title: Object(l.c)("Karma"),
						tooltipId: c,
						tooltip: "".concat(m, "\n").concat(u)
					}), a.a.createElement(U, {
						icon: a.a.createElement(I.a, {
							className: W.a.icon,
							key: "cakeDay"
						}),
						label: Object(h.a)(t, !0),
						title: Object(l.c)("Cake day"),
						tooltipId: d,
						tooltip: Object(C.d)(r, t)
					}), i > 0 && a.a.createElement(U, {
						icon: a.a.createElement(j.a, {
							className: W.a.icon,
							key: "followers"
						}),
						title: Object(l.c)("Followers"),
						label: Object(v.b)(i, !0)
					}))
				})),
				V = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				z = n.n(V),
				Z = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				q = n.n(Z);

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
				return de
			}));
			var X = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const Q = o.a.div("BannerWrapper", q.a),
				Y = o.a.div("BannerImage", q.a),
				$ = o.a.div("SnooIcon", q.a),
				ee = o.a.wrapped(i.b, "Widget", q.a),
				te = o.a.h4("UserTitle", q.a),
				ne = o.a.wrapped(p.a, "PremiumIcon", q.a),
				re = o.a.div("Description", q.a),
				se = e => {
					var {
						url: t
					} = e, n = X(e, ["url"]);
					return t ? a.a.createElement(c.a, J({}, n, {
						className: q.a.userName,
						to: t
					})) : a.a.createElement("span", J({}, n, {
						className: q.a.userName
					}))
				},
				ae = o.a.wrapped(g.a, "Actions", q.a),
				oe = o.a.wrapped(u.a, "CloseIcon", q.a),
				ie = o.a.wrapped(d.a, "LoadingIconStyled", q.a),
				ce = () => a.a.createElement(ie, {
					sizePx: 20
				});
			class de extends a.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? a.a.createElement(b.a, {
						recentAwardings: e,
						username: t
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: n,
						footer: s,
						isEmployee: o,
						isGold: i,
						isOverlay: c,
						profileIcon: d,
						publicDescription: u,
						title: p,
						url: g,
						username: b,
						isDefaultIcon: x,
						isDeletingIcon: f,
						isDeletingBanner: h,
						onDeleteIcon: v,
						onDeleteBanner: C,
						editMode: O
					} = this.props;
					return a.a.createElement(ee, {
						className: n
					}, a.a.createElement(Q, null, t && a.a.createElement(Y, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), O && t && (h ? a.a.createElement(ce, null) : a.a.createElement(oe, {
						onClick: C
					}))), a.a.createElement("div", {
						className: z.a.SnooIconWrapper
					}, a.a.createElement($, {
						style: {
							backgroundImage: "url(".concat(d, ")")
						}
					}), O && !x && (f ? a.a.createElement(ce, null) : a.a.createElement(oe, {
						onClick: v
					}))), p && a.a.createElement(te, null, p), a.a.createElement(se, {
						url: g
					}, "u/".concat(b)), o && a.a.createElement(m.a, {
						className: z.a.adminIcon,
						title: Object(l.c)("Reddit admin")
					}), i && a.a.createElement("a", {
						title: Object(l.c)("".concat(Object(l.b)("username", b), " has Reddit Premium")),
						href: "".concat(r.a.redditUrl, "/premium")
					}, a.a.createElement(ne, null)), a.a.createElement(re, null, u), a.a.createElement(G, {
						profileName: b,
						isOverlay: c
					}), this.renderAwardedLastMonth(), a.a.createElement(ae, null, e), s)
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/subscription/index.ts"),
				d = n("./src/reddit/components/ChatButton/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/posts.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				b = n("./src/reddit/i18n/components.tsx"),
				x = n("./src/reddit/selectors/platform.ts"),
				f = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				v = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				O = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				I = n("./node_modules/lodash/compact.js"),
				E = n.n(I),
				j = n("./src/lib/classNames/index.ts"),
				w = n("./src/reddit/actions/gold/modals.ts"),
				y = n("./src/reddit/actions/profile/index.ts"),
				P = n("./src/higherOrderComponents/makeAsync.tsx"),
				_ = n("./src/lib/loadWithRetries/index.ts");
			var M = Object(P.a)({
					getComponent: () => Object(_.a)(() => n.e("GivePremiumModal").then(n.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				N = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/reddit/controls/OutboundLink/index.tsx"),
				L = n("./src/reddit/helpers/correlationIdTracker.ts"),
				k = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				D = n("./src/reddit/actions/multireddit/index.ts"),
				B = n("./src/reddit/constants/modals.ts"),
				A = n("./src/reddit/models/Gold/Premium/index.ts"),
				U = n("./src/reddit/selectors/premium.ts"),
				F = n("./src/reddit/components/ProfileIdCard/footer.m.less"),
				W = n.n(F);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var R = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const H = Object(i.c)({
					areModeratedSubredditsPending: f.a,
					coinsToSpend: C.d,
					givePremiumModalIsOpen: U.c,
					hasFetchedModerators: f.k,
					isEmployee: C.H,
					isLoggedIn: C.K,
					language: C.T,
					profile: f.j
				}),
				G = e => {
					var {
						isLoading: t
					} = e, n = R(e, ["isLoading"]);
					return a.a.createElement("div", K({}, n, {
						className: Object(j.a)(W.a.Shimmer, Object(k.b)({
							isLoading: t
						}))
					}))
				};
			class V extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						Object(L.d)(L.a.GiftPremiumFlow), e();
						const {
							clickGivePremiumEvent: r
						} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(r())
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: n,
							hasSubreddit: s,
							isEmployee: a,
							isLoggedIn: o,
							isModerator: i,
							isOwnProfile: c,
							profileName: d,
							profile: l
						} = this.props, m = o && Object(A.b)(n, a).length && !c || a, u = E()([(c || i) && s ? {
							text: O.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(d, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, c ? void 0 : {
							text: O.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(r.a.redditUrl, "/message/compose/?to=").concat(d)
						}, !c && t ? {
							text: O.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(r.a.redditUrl, "/user/").concat(d, "/snoo")
						} : void 0, c ? void 0 : {
							text: O.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, o && l && !l.isQuarantined ? {
							onClick: e,
							text: O.fbt._("Add to custom feed", null, {
								hk: "8zqUU"
							})
						} : void 0]);
						return m && u.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: O.fbt._("Give Premium", null, {
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
					const r = (t ? n : []).map(e => e.url ? e.isInternalLink ? a.a.createElement(N.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: W.a.menuItem
					}, e.text) : a.a.createElement(S.a, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: W.a.menuItem
					}, e.text) : a.a.createElement(p.n, {
						className: W.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (r.unshift(a.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-1"
					}, a.a.createElement(G, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), r.unshift(a.a.createElement("div", {
						className: W.a.menuItem,
						key: "loading-2"
					}, a.a.createElement(G, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const s = t ? O.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : O.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return a.a.createElement("div", {
						className: W.a.container
					}, r, a.a.createElement("div", {
						className: W.a.expandContainer
					}, a.a.createElement(p.n, {
						className: W.a.expandButton,
						onClick: this.moreOptionsToggled
					}, s)), e && a.a.createElement(M, null))
				}
			}
			var z = Object(o.b)(H, (e, t) => {
					let {
						profileName: n
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(D.g)(!0, !0)), e(Object(T.h)(B.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: () => e(Object(w.e)(n)),
						onModeratorsRequested: () => e(Object(y.b)(n))
					}
				})(V),
				Z = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				q = n.n(Z);
			const J = Object(i.c)({
					account: C.i,
					activeTooltipId: v.a,
					currentUserHasSubreddit: C.g,
					hideNSFWPref: C.z,
					isModerator: f.f,
					profile: f.j,
					profileAboutInfo: f.h,
					structuredStyle: (e, t) => Object(h.n)(e, Object(f.m)(e, t.profileName)),
					userHasSubreddit: (e, t) => {
						let {
							profileName: n
						} = t;
						return Object(C.jb)(e, {
							userName: n
						})
					},
					userInChat: g.d.userInChat,
					user: (e, t) => {
						let {
							profileName: n
						} = t;
						return Object(C.ib)(e, {
							userName: n
						})
					},
					page: x.b
				}),
				X = e => {
					let {
						username: t,
						currentUserHasSubreddit: n
					} = e;
					return a.a.createElement("div", {
						className: q.a.actionItem
					}, a.a.createElement(p.h, {
						className: q.a.button,
						to: n ? "/user/".concat(t, "/submit") : "/submit"
					}, a.a.createElement(b.c, null, "New post")))
				},
				Q = e => {
					let {
						profileName: t,
						onToggleFollow: n,
						userIsSubscriber: r
					} = e;
					return a.a.createElement("div", {
						className: q.a.actionItem
					}, r ? a.a.createElement(p.i, {
						className: q.a.button,
						onClick: () => n(t, r)
					}, a.a.createElement(b.c, null, "Unfollow")) : a.a.createElement(p.f, {
						className: q.a.button,
						onClick: () => n(t, r)
					}, a.a.createElement(b.c, null, "Follow")))
				},
				Y = e => {
					let {
						userId: t
					} = e;
					return a.a.createElement("div", {
						className: q.a.actionItem
					}, a.a.createElement(d.a, {
						contextId: t,
						className: q.a.button,
						userId: t
					}, a.a.createElement(b.c, null, "Chat")))
				};
			t.default = Object(o.b)(J, e => ({
				onToggleFollow: (t, n) => e(Object(c.d)([{
					name: t,
					type: u.a.PROFILE
				}], !n))
			}))(Object(m.b)(e => {
				const {
					account: t,
					currentUserHasSubreddit: n,
					hideNSFWPref: s,
					isModerator: o,
					isOverlay: i,
					isSubmissionPage: c,
					onToggleFollow: d,
					profile: m,
					profileAboutInfo: u,
					sendEvent: p,
					structuredStyle: g,
					userHasSubreddit: b,
					userInChat: x,
					user: f,
					page: h
				} = e;
				if (!f) return null;
				const {
					accountIcon: v,
					awardedLastMonth: C,
					id: O,
					isEmployee: I,
					isGold: E,
					prefShowSnoovatar: j,
					username: w
				} = f, y = !!t && t.id === O, P = g && g.bannerBackgroundImage, _ = m && m.isNSFW && s, M = !(!u || !u.userIsSubscriber), N = "/user/".concat(w, "/"), S = h && h.url === N;
				return a.a.createElement(l.a, {
					isEmployee: I,
					isGold: E,
					isOverlay: i,
					publicDescription: u ? u.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: S ? null : N,
					username: w,
					recentAwardings: C,
					actions: a.a.createElement(a.a.Fragment, null, y && !c && X({
						username: w,
						currentUserHasSubreddit: n
					}), !y && b && Q({
						profileName: w,
						onToggleFollow: d,
						userIsSubscriber: M
					}), !!t && !y && x && Y({
						userId: O
					})),
					footer: a.a.createElement(z, {
						hasSubreddit: b,
						isModerator: o,
						isOwnProfile: y,
						allowViewSnoovatar: j,
						profileName: w,
						sendEvent: p
					}),
					profileIcon: _ ? "".concat(r.a.assetPath, "/img/avatar_over18_square.png") : v,
					bannerBackgroundImage: _ ? void 0 : P
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
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i),
				d = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};
			const l = a.a.div("WidgetBackground", c.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, n = d(e, ["children"]);
					return s.a.createElement("div", n, s.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(l, null, e.children))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": "".concat(r, "px")
					}
				})
			}
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
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = n.n(s);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(a.a.loadingBar, o(e))
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
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), s.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), s.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), s.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/i18n/components.tsx");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", null, s.a.createElement(a.c, null, "Reddit Premium")), s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
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
				s = n("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				a = n.n(s);
			t.a = r.a.div("dynamicTwoCol", a.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var r = n("./src/app/strings/index.ts");
			const s = {
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
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = [];
					for (const r in s) {
						const a = s[r];
						(a.priceInCoins <= e || t) && n.push(a)
					}
					return n
				},
				o = (e, t) => 1 === e.monthsOfPremium ? Object(r.a)(t, "gold.givePremiumToUserModal.monthDetail", {
					months: e.monthsOfPremium,
					coins: e.priceInCoins.toLocaleString()
				}) : Object(r.a)(t, "gold.givePremiumToUserModal.monthsDetail", {
					months: e.monthsOfPremium,
					coins: e.priceInCoins.toLocaleString()
				})
		},
		"./src/reddit/selectors/experiments/goldProfileGildedAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = e => !!(e => {
				const t = Object(s.c)(e, {
					experimentEligibilitySelector: e => Object(a.K)(e),
					experimentName: r.N
				});
				return Object(r.Xb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/premium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				a = e => e.givePremium.api.error || "",
				o = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=reddit-components-ProfileIdCard.7a87eaede677b2f9f1b8.js.map