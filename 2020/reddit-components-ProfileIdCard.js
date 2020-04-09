// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.000a203e13c7411339b4.js
// Retrieved at 4/9/2020, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, n = null == e ? 0 : e.length, r = 0, s = []; ++t < n;) {
					var o = e[t];
					o && (s[r++] = o)
				}
				return s
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/reddit/i18n/utils.ts");
			const s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				a = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, n) => {
					const a = t ? e.getUTCMonth() : e.getMonth(),
						i = n ? o : s;
					return Object(r.c)(i[a])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function l(e, t, n, r) {
				const s = new Date(1e3 * e),
					o = i(s, n, r),
					l = t ? a(s, n) + ", " : "";
				return "".concat(o, " ").concat(l).concat(c(s, n))
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/chat/toggle.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const d = e => {
				let {
					onStartChat: t,
					children: n,
					className: r,
					sendEvent: o,
					contextId: a
				} = e;
				return s.a.createElement(c.f, {
					onClick: () => {
						t(), o(Object(l.b)(a))
					},
					className: r
				}, n)
			};
			d.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					contextId: n,
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(a.a)(r, n))
					}
				}
			});
			t.a = m(Object(i.c)(d))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const o = {
					backgroundColor: n("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				a = () => null;
			t.b = Object(r.a)({
				ErrorComponent: a,
				getComponent: () => Object(s.a)(() => n.e("CrisisFlow").then(n.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class d extends s.a.PureComponent {
				render() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					if (!e.topAward) return null;
					const {
						topAward: n,
						totalCount: r
					} = e, i = n.icon32 ? n.icon32.url : n.icon.url, d = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: "".concat(o.a.oldRedditUrl, "/user/").concat(t, "/gilded")
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: i
					}), r > 1 && s.a.createElement("span", {
						className: c.a.count
					}, "+".concat(Object(a.b)(r - 1)))), s.a.createElement("div", {
						className: c.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", n.name), l._plural(r)], {
						hk: "16MJHe"
					})))
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
				UserIcon: "M_wdt3XN_OW7h8RYbg38W",
				userIcon: "M_wdt3XN_OW7h8RYbg38W",
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
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				SettingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				settingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				SettingsIcon: "_3EDNoLotHx3GB6fuK5G7wo",
				settingsIcon: "_3EDNoLotHx3GB6fuK5G7wo"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return be
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/components/Widgets/Base/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				g = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				f = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				C = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				x = n("./node_modules/react-redux/es/index.js"),
				v = n("./node_modules/reselect/es/index.js"),
				w = n("./src/lib/humanizeDate/index.ts"),
				_ = n("./src/lib/prettyPrintNumber/index.ts"),
				y = n("./src/lib/timeAgo/index.ts"),
				I = n("./src/reddit/contexts/InsideOverlay.tsx"),
				E = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				O = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				M = n("./src/reddit/icons/svgs/User/index.tsx"),
				P = n("./src/reddit/selectors/profile.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/tooltip.ts"),
				L = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				S = n.n(N);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(v.c)({
					language: k.O
				}),
				F = c.a.div("Container", S.a),
				B = c.a.div("Body", S.a),
				R = c.a.h5("Title", S.a),
				W = c.a.span("Label", S.a);
			class U extends a.a.Component {
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
					return a.a.createElement(F, null, a.a.createElement(R, null, n), a.a.createElement(B, null, e, a.a.createElement(W, T({
						key: "label"
					}, o), t)), s && r && a.a.createElement(L.c, {
						caretOnTop: !0,
						tooltipId: s,
						text: r
					}))
				}
			}
			var A = Object(x.b)(D, e => ({
					toggleTooltip: t => e(Object(j.h)({
						tooltipId: t
					}))
				}))(Object(I.b)(U)),
				G = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				H = n.n(G);
			const K = Object(v.a)(P.j, (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(k.fb)(e, n)
				}, k.O, (e, t, n) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: n,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				Z = c.a.div("Container", H.a);

			function V(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var z = Object(x.b)(K)(Object(I.b)(e => {
					const {
						profileCreated: t,
						isOverlay: n,
						language: r,
						commentKarma: o,
						postKarma: i,
						subscribers: c
					} = e, l = V(n, "karma"), d = V(n, "cakeday"), m = s.fbt._({
						"*": "{number} Post Karma",
						_1: "1 Post Karma"
					}, [s.fbt._plural(i, "number", Object(_.b)(i, !0))], {
						hk: "husfU"
					}), u = s.fbt._({
						"*": "{number} Comment Karma",
						_1: "1 Comment Karma"
					}, [s.fbt._plural(i, "number", Object(_.b)(o, !0))], {
						hk: "26iPTL"
					});
					return a.a.createElement(Z, null, a.a.createElement(A, {
						icon: a.a.createElement(O.a, {
							className: H.a.icon,
							key: "karma"
						}),
						label: Object(_.b)(o + i, !0),
						title: s.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: l,
						tooltip: "".concat(m, "\n").concat(u)
					}), a.a.createElement(A, {
						icon: a.a.createElement(E.a, {
							className: H.a.icon,
							key: "cakeDay"
						}),
						label: Object(w.a)(t, !0),
						title: s.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: d,
						tooltip: Object(y.d)(r, t)
					}), c > 0 && a.a.createElement(A, {
						icon: a.a.createElement(M.a, {
							className: H.a.icon,
							key: "followers"
						}),
						title: s.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(_.b)(c, !0)
					}))
				})),
				J = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				q = n.n(J),
				Q = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				X = n.n(Q);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var $ = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const ee = c.a.div("BannerWrapper", X.a),
				te = c.a.div("BannerImage", X.a),
				ne = c.a.wrapped(l.a, "UserIcon", X.a),
				re = c.a.wrapped(d.b, "Widget", X.a),
				se = c.a.h4("UserTitle", X.a),
				oe = c.a.wrapped(h.a, "PremiumIcon", X.a),
				ae = c.a.div("Description", X.a),
				ie = e => {
					var {
						url: t
					} = e, n = $(e, ["url"]);
					return t ? a.a.createElement(m.a, Y({}, n, {
						className: X.a.userName,
						to: t
					})) : a.a.createElement("span", Y({}, n, {
						className: X.a.userName
					}))
				},
				ce = c.a.wrapped(f.a, "Actions", X.a),
				le = c.a.wrapped(b.a, "CloseIcon", X.a),
				de = c.a.wrapped(i.a, "SettingsLink", X.a),
				me = c.a.wrapped(g.a, "SettingsIcon", X.a),
				ue = c.a.wrapped(u.a, "LoadingIconStyled", X.a),
				pe = () => a.a.createElement(ue, {
					sizePx: 20
				});
			class be extends a.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? a.a.createElement(C.a, {
						recentAwardings: e,
						username: t
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: n,
						footer: o,
						isEmployee: i,
						isGold: c,
						isNSFW: l,
						isOverlay: d,
						isOwnProfile: m,
						profileIcon: u,
						publicDescription: b,
						title: h,
						url: g,
						username: f,
						isDefaultIcon: C,
						isDeletingIcon: x,
						isDeletingBanner: v,
						onDeleteIcon: w,
						onDeleteBanner: _,
						editMode: y
					} = this.props;
					return a.a.createElement(re, {
						className: n
					}, a.a.createElement(ee, null, t && a.a.createElement(te, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), y && t && (v ? a.a.createElement(pe, null) : a.a.createElement(le, {
						onClick: _
					}))), a.a.createElement("div", {
						className: q.a.SnooIconWrapper
					}, a.a.createElement(ne, {
						isNSFW: l,
						iconUrl: u,
						userName: f
					}), y && !C && (x ? a.a.createElement(pe, null) : a.a.createElement(le, {
						onClick: w
					}))), !y && m && a.a.createElement(de, {
						to: "/settings/profile"
					}, a.a.createElement(me, null)), h && a.a.createElement(se, null, h), a.a.createElement(ie, {
						url: g
					}, "u/".concat(f)), i && a.a.createElement(p.a, {
						className: q.a.adminIcon,
						title: s.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && a.a.createElement("a", {
						title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", f)], {
							hk: "3Fylv"
						}),
						href: "".concat(r.a.redditUrl, "/premium")
					}, a.a.createElement(oe, null)), a.a.createElement(ae, null, b), a.a.createElement(z, {
						profileName: f,
						isOverlay: d
					}), this.renderAwardedLastMonth(), a.a.createElement(ce, null, e), o)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/components/ChatButton/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/tooltip.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				C = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				x = n("./node_modules/lodash/compact.js"),
				v = n.n(x),
				w = n("./src/config.ts"),
				_ = n("./src/lib/classNames/index.ts"),
				y = n("./src/reddit/actions/gold/modals.ts"),
				I = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/actions/multireddit/index.ts"),
				O = n("./src/reddit/actions/profile/index.ts"),
				M = n("./src/reddit/components/CrisisFlow/index.tsx"),
				P = n("./src/higherOrderComponents/makeAsync.tsx"),
				k = n("./src/lib/loadWithRetries/index.ts");
			var j = Object(P.a)({
					getComponent: () => Object(k.a)(() => n.e("GivePremiumModal").then(n.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				L = n("./src/reddit/constants/modals.ts"),
				N = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/reddit/controls/OutboundLink/index.tsx"),
				T = n("./src/reddit/helpers/correlationIdTracker.ts"),
				D = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				F = n("./src/reddit/models/Gold/Premium/index.ts"),
				B = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				R = n("./src/reddit/selectors/premium.ts"),
				W = n("./src/reddit/components/ProfileIdCard/footer.m.less"),
				U = n.n(W);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var G = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const H = Object(a.c)({
					areModeratedSubredditsPending: b.a,
					coinsToSpend: f.d,
					givePremiumModalIsOpen: R.c,
					hasFetchedModerators: b.k,
					isEmployee: f.D,
					isLoggedIn: f.G,
					language: f.O,
					profile: b.j,
					crisisFlowEnabled: B.b
				}),
				K = e => {
					var {
						isLoading: t
					} = e, n = G(e, ["isLoading"]);
					return s.a.createElement("div", A({}, n, {
						className: Object(_.a)(U.a.Shimmer, Object(D.b)({
							isLoading: t
						}))
					}))
				};
			class Z extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
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
					}, this.onOpenCrisisModal = () => {
						this.setState({
							showCrisisModal: !0
						})
					}, this.onCloseCrisisModal = () => {
						this.setState({
							showCrisisModal: !1
						})
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: n,
							hasSubreddit: r,
							isEmployee: s,
							isLoggedIn: o,
							isModerator: a,
							isOwnProfile: i,
							profileName: c,
							profile: l,
							crisisFlowEnabled: d
						} = this.props, m = o && Object(F.c)(n, s).length && !i || s, u = v()([(i || a) && r ? {
							text: C.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(c, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, i ? void 0 : {
							text: C.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(w.a.redditUrl, "/message/compose/?to=").concat(c)
						}, !i && t ? {
							text: C.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(w.a.redditUrl, "/user/").concat(c, "/snoo")
						} : void 0, !i && d ? {
							text: C.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, i ? void 0 : {
							text: C.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, o && l && !l.isQuarantined ? {
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
					const r = (t ? n : []).map(e => e.url ? e.isInternalLink ? s.a.createElement(N.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: U.a.menuItem
					}, e.text) : s.a.createElement(S.a, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: U.a.menuItem
					}, e.text) : s.a.createElement(u.n, {
						className: U.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (r.unshift(s.a.createElement("div", {
						className: U.a.menuItem,
						key: "loading-1"
					}, s.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), r.unshift(s.a.createElement("div", {
						className: U.a.menuItem,
						key: "loading-2"
					}, s.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const o = t ? C.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : C.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return s.a.createElement("div", {
						className: U.a.container
					}, r, s.a.createElement("div", {
						className: U.a.expandContainer
					}, s.a.createElement(u.n, {
						className: U.a.expandButton,
						onClick: this.moreOptionsToggled
					}, o)), e && s.a.createElement(j, null), this.state.showCrisisModal && s.a.createElement(M.b, {
						withOverlay: !0,
						overlayCustomStyles: M.a,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var V = Object(o.b)(H, (e, t) => {
					let {
						profileName: n
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(E.g)(!0, !0)), e(Object(I.h)(L.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: () => e(Object(y.e)(n)),
						onModeratorsRequested: () => e(Object(O.b)(n))
					}
				})(Z),
				z = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				J = n.n(z);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = Object(a.c)({
				account: f.i,
				activeTooltipId: g.a,
				currentUserHasSubreddit: f.g,
				hideNSFWPref: f.y,
				isModerator: b.f,
				profile: b.j,
				profileAboutInfo: b.h,
				structuredStyle: (e, t) => Object(h.n)(e, Object(b.m)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(f.db)(e, {
						userName: n
					})
				},
				user: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(f.cb)(e, {
						userName: n
					})
				},
				page: p.b
			}), X = e => {
				let {
					username: t,
					currentUserHasSubreddit: n
				} = e;
				return s.a.createElement("div", {
					className: J.a.actionItem
				}, s.a.createElement(u.h, {
					className: J.a.button,
					to: n ? "/user/".concat(t, "/submit") : "/submit"
				}, q._("New post", null, {
					hk: "QD6O4"
				})))
			}, Y = e => {
				let {
					profileName: t,
					onToggleFollow: n,
					userIsSubscriber: r
				} = e;
				return s.a.createElement("div", {
					className: J.a.actionItem
				}, r ? s.a.createElement(u.i, {
					className: J.a.button,
					onClick: () => n(t, r)
				}, q._("Unfollow", null, {
					hk: "1nM1SO"
				})) : s.a.createElement(u.f, {
					className: J.a.button,
					onClick: () => n(t, r)
				}, q._("Follow", null, {
					hk: "OPQuq"
				})))
			}, $ = e => {
				let {
					userId: t
				} = e;
				return s.a.createElement("div", {
					className: J.a.actionItem
				}, s.a.createElement(c.a, {
					contextId: t,
					className: J.a.button,
					userId: t
				}, q._("Chat", null, {
					hk: "UKkIW"
				})))
			};
			t.default = Object(o.b)(Q, e => ({
				onToggleFollow: (t, n) => e(Object(i.d)([{
					name: t,
					type: m.a.PROFILE
				}], !n))
			}))(Object(d.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: n,
					hideNSFWPref: r,
					isModerator: o,
					isOverlay: a,
					isSubmissionPage: i,
					onToggleFollow: c,
					profile: d,
					profileAboutInfo: m,
					sendEvent: u,
					structuredStyle: p,
					userHasSubreddit: b,
					user: h,
					page: g
				} = e;
				if (!h) return null;
				const {
					accountIcon: f,
					awardedLastMonth: C,
					id: x,
					isEmployee: v,
					isGold: w,
					prefShowSnoovatar: _,
					username: y
				} = h, I = !!t && t.id === x, E = p && p.bannerBackgroundImage, O = !!d && d.isNSFW, M = O && r, P = !(!m || !m.userIsSubscriber), k = "/user/".concat(y, "/"), j = g && g.url === k;
				return s.a.createElement(l.a, {
					isEmployee: v,
					isGold: w,
					isNSFW: O,
					isOverlay: a,
					isOwnProfile: I,
					publicDescription: m ? m.publicDescription : void 0,
					title: d ? d.title : void 0,
					url: j ? null : k,
					username: y,
					recentAwardings: C,
					actions: s.a.createElement(s.a.Fragment, null, I && !i && X({
						username: y,
						currentUserHasSubreddit: n
					}), !I && b && Y({
						profileName: y,
						onToggleFollow: c,
						userIsSubscriber: P
					}), !!t && !I && $({
						userId: x
					})),
					footer: s.a.createElement(V, {
						hasSubreddit: b,
						isModerator: o,
						isOwnProfile: I,
						allowViewSnoovatar: _,
						profileName: y,
						sendEvent: u
					}),
					profileIcon: f,
					bannerBackgroundImage: M ? void 0 : E
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
				o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/SEOTitle/index.tsx"),
				i = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(i),
				l = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};
			const d = o.a.div("WidgetBackground", c.a),
				m = o.a.wrapped(e => {
					var {
						children: t
					} = e, n = l(e, ["children"]);
					return s.a.createElement("div", n, s.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = n.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(o.a.loadingBar, a(e))
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
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
				o = n("./src/reddit/i18n/components.tsx");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", null, s.a.createElement(o.c, null, "Reddit Premium")), s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
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
				o = n.n(s);
			t.a = r.a.div("dynamicTwoCol", o.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
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
				o = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = [];
					for (const r in s) {
						const o = s[r];
						(o.priceInCoins <= e || t) && n.push(o)
					}
					return n
				},
				a = e => r.fbt._({
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
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => r.a.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.G,
					experimentName: r.c
				}),
				i = e => r.b.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.G,
					experimentName: r.d
				})
		},
		"./src/reddit/selectors/premium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			const r = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				o = e => e.givePremium.api.error || "",
				a = e => e.givePremium.api.pending
		}
	}
]);
//# sourceMappingURL=reddit-components-ProfileIdCard.000a203e13c7411339b4.js.map