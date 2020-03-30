// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.59a1ba682e92393244bb.js
// Retrieved at 3/30/2020, 5:30:05 PM by Reddit Dataminer v1.0.0
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
				return l
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

			function l(e, t, n, r) {
				const s = new Date(1e3 * e),
					a = i(s, n, r),
					l = t ? o(s, n) + ", " : "";
				return "".concat(a, " ").concat(l).concat(c(s, n))
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
				l = n("./src/reddit/helpers/trackers/authorHovercard.ts");
			const d = e => {
				let {
					onStartChat: t,
					children: n,
					className: r,
					sendEvent: a,
					contextId: o
				} = e;
				return s.a.createElement(c.f, {
					onClick: () => {
						t(), a(Object(l.b)(o))
					},
					className: r
				}, n)
			};
			d.displayName = "ChatButton";
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
			t.a = m(Object(i.c)(d))
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
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
						href: "".concat(a.a.oldRedditUrl, "/user/").concat(t, "/gilded")
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: i
					}), r > 1 && s.a.createElement("span", {
						className: c.a.count
					}, "+".concat(Object(o.b)(r - 1)))), s.a.createElement("div", {
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
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				SettingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				settingsLink: "eRXQmg5IDQw75c_ZvuwJU",
				SettingsIcon: "_3EDNoLotHx3GB6fuK5G7wo",
				settingsIcon: "_3EDNoLotHx3GB6fuK5G7wo"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/Widgets/Base/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				p = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				g = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				h = n("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				f = n("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				C = n("./node_modules/react-redux/es/index.js"),
				x = n("./node_modules/reselect/es/index.js"),
				v = n("./src/lib/humanizeDate/index.ts"),
				w = n("./src/lib/prettyPrintNumber/index.ts"),
				_ = n("./src/lib/timeAgo/index.ts"),
				I = n("./src/reddit/contexts/InsideOverlay.tsx"),
				y = n("./src/reddit/icons/svgs/Cake/index.tsx"),
				E = n("./src/reddit/icons/svgs/Karma/index.tsx"),
				O = n("./src/reddit/icons/svgs/User/index.tsx"),
				P = n("./src/reddit/selectors/profile.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/tooltip.ts"),
				k = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				L = n("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				N = n.n(L);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(x.c)({
					language: M.O
				}),
				D = c.a.div("Container", N.a),
				B = c.a.div("Body", N.a),
				R = c.a.h5("Title", N.a),
				F = c.a.span("Label", N.a);
			class U extends o.a.Component {
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
					} = this.props, a = s && r ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(D, null, o.a.createElement(R, null, n), o.a.createElement(B, null, e, o.a.createElement(F, S({
						key: "label"
					}, a), t)), s && r && o.a.createElement(k.c, {
						caretOnTop: !0,
						tooltipId: s,
						text: r
					}))
				}
			}
			var A = Object(C.b)(T, e => ({
					toggleTooltip: t => e(Object(j.h)({
						tooltipId: t
					}))
				}))(Object(I.b)(U)),
				W = n("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				K = n.n(W);
			const G = Object(x.a)(P.j, (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(M.fb)(e, n)
				}, M.O, (e, t, n) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: n,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				H = c.a.div("Container", K.a);

			function Z(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var V = Object(C.b)(G)(Object(I.b)(e => {
					const {
						profileCreated: t,
						isOverlay: n,
						language: r,
						commentKarma: a,
						postKarma: i,
						subscribers: c
					} = e, l = Z(n, "karma"), d = Z(n, "cakeday"), m = s.fbt._({
						"*": "{number} Post Karma",
						_1: "1 Post Karma"
					}, [s.fbt._plural(i, "number", Object(w.b)(i, !0))], {
						hk: "husfU"
					}), u = s.fbt._({
						"*": "{number} Comment Karma",
						_1: "1 Comment Karma"
					}, [s.fbt._plural(i, "number", Object(w.b)(a, !0))], {
						hk: "26iPTL"
					});
					return o.a.createElement(H, null, o.a.createElement(A, {
						icon: o.a.createElement(E.a, {
							className: K.a.icon,
							key: "karma"
						}),
						label: Object(w.b)(a + i, !0),
						title: s.fbt._("Karma", null, {
							hk: "RtSgN"
						}),
						tooltipId: l,
						tooltip: "".concat(m, "\n").concat(u)
					}), o.a.createElement(A, {
						icon: o.a.createElement(y.a, {
							className: K.a.icon,
							key: "cakeDay"
						}),
						label: Object(v.a)(t, !0),
						title: s.fbt._("Cake day", null, {
							hk: "4x2LB5"
						}),
						tooltipId: d,
						tooltip: Object(_.d)(r, t)
					}), c > 0 && o.a.createElement(A, {
						icon: o.a.createElement(O.a, {
							className: K.a.icon,
							key: "followers"
						}),
						title: s.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: Object(w.b)(c, !0)
					}))
				})),
				z = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				J = n.n(z),
				q = n("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				Q = n.n(q);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			n.d(t, "a", (function() {
				return pe
			}));
			var Y = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const $ = c.a.div("BannerWrapper", Q.a),
				ee = c.a.div("BannerImage", Q.a),
				te = c.a.div("SnooIcon", Q.a),
				ne = c.a.wrapped(l.b, "Widget", Q.a),
				re = c.a.h4("UserTitle", Q.a),
				se = c.a.wrapped(b.a, "PremiumIcon", Q.a),
				ae = c.a.div("Description", Q.a),
				oe = e => {
					var {
						url: t
					} = e, n = Y(e, ["url"]);
					return t ? o.a.createElement(d.a, X({}, n, {
						className: Q.a.userName,
						to: t
					})) : o.a.createElement("span", X({}, n, {
						className: Q.a.userName
					}))
				},
				ie = c.a.wrapped(h.a, "Actions", Q.a),
				ce = c.a.wrapped(p.a, "CloseIcon", Q.a),
				le = c.a.wrapped(i.a, "SettingsLink", Q.a),
				de = c.a.wrapped(g.a, "SettingsIcon", Q.a),
				me = c.a.wrapped(m.a, "LoadingIconStyled", Q.a),
				ue = () => o.a.createElement(me, {
					sizePx: 20
				});
			class pe extends o.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? o.a.createElement(f.a, {
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
						isEmployee: i,
						isGold: c,
						isOverlay: l,
						isOwnProfile: d,
						profileIcon: m,
						publicDescription: p,
						title: b,
						url: g,
						username: h,
						isDefaultIcon: f,
						isDeletingIcon: C,
						isDeletingBanner: x,
						onDeleteIcon: v,
						onDeleteBanner: w,
						editMode: _
					} = this.props;
					return o.a.createElement(ne, {
						className: n
					}, o.a.createElement($, null, t && o.a.createElement(ee, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), _ && t && (x ? o.a.createElement(ue, null) : o.a.createElement(ce, {
						onClick: w
					}))), o.a.createElement("div", {
						className: J.a.SnooIconWrapper
					}, o.a.createElement(te, {
						style: {
							backgroundImage: "url(".concat(m, ")")
						}
					}), _ && !f && (C ? o.a.createElement(ue, null) : o.a.createElement(ce, {
						onClick: v
					}))), !_ && d && o.a.createElement(le, {
						to: "/settings/profile"
					}, o.a.createElement(de, null)), b && o.a.createElement(re, null, b), o.a.createElement(oe, {
						url: g
					}, "u/".concat(h)), i && o.a.createElement(u.a, {
						className: J.a.adminIcon,
						title: s.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && o.a.createElement("a", {
						title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", h)], {
							hk: "3Fylv"
						}),
						href: "".concat(r.a.redditUrl, "/premium")
					}, o.a.createElement(se, null)), o.a.createElement(ae, null, p), o.a.createElement(V, {
						profileName: h,
						isOverlay: l
					}), this.renderAwardedLastMonth(), o.a.createElement(ie, null, e), a)
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
				l = n("./src/reddit/components/ChatButton/index.tsx"),
				d = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/posts.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/selectors/platform.ts"),
				g = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				f = n("./src/reddit/selectors/tooltip.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				x = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				v = n("./node_modules/lodash/compact.js"),
				w = n.n(v),
				_ = n("./src/lib/classNames/index.ts"),
				I = n("./src/reddit/actions/gold/modals.ts"),
				y = n("./src/reddit/actions/modal.ts"),
				E = n("./src/reddit/actions/multireddit/index.ts"),
				O = n("./src/reddit/actions/profile/index.ts"),
				P = n("./src/higherOrderComponents/makeAsync.tsx"),
				M = n("./src/lib/loadWithRetries/index.ts");
			var j = Object(P.a)({
					getComponent: () => Object(M.a)(() => n.e("GivePremiumModal").then(n.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				k = n("./src/reddit/constants/modals.ts"),
				L = n("./src/reddit/controls/InternalLink/index.tsx"),
				N = n("./src/reddit/controls/OutboundLink/index.tsx"),
				S = n("./src/reddit/helpers/correlationIdTracker.ts"),
				T = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				D = n("./src/reddit/models/Gold/Premium/index.ts"),
				B = n("./src/reddit/selectors/premium.ts"),
				R = n("./src/reddit/components/ProfileIdCard/footer.m.less"),
				F = n.n(R);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var A = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
				}
				return n
			};
			const W = Object(i.c)({
					areModeratedSubredditsPending: g.a,
					coinsToSpend: C.d,
					givePremiumModalIsOpen: B.c,
					hasFetchedModerators: g.k,
					isEmployee: C.D,
					isLoggedIn: C.G,
					language: C.O,
					profile: g.j
				}),
				K = e => {
					var {
						isLoading: t
					} = e, n = A(e, ["isLoading"]);
					return a.a.createElement("div", U({}, n, {
						className: Object(_.a)(F.a.Shimmer, Object(T.b)({
							isLoading: t
						}))
					}))
				};
			class G extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						Object(S.d)(S.a.GiftPremiumFlow), e();
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
							profileName: l,
							profile: d
						} = this.props, m = o && Object(D.c)(n, a).length && !c || a, u = w()([(c || i) && s ? {
							text: x.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(l, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, c ? void 0 : {
							text: x.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(r.a.redditUrl, "/message/compose/?to=").concat(l)
						}, !c && t ? {
							text: x.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(r.a.redditUrl, "/user/").concat(l, "/snoo")
						} : void 0, c ? void 0 : {
							text: x.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, o && d && !d.isQuarantined ? {
							onClick: e,
							text: x.fbt._("Add to custom feed", null, {
								hk: "8zqUU"
							})
						} : void 0]);
						return m && u.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: x.fbt._("Give Premium", null, {
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
					const r = (t ? n : []).map(e => e.url ? e.isInternalLink ? a.a.createElement(L.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: F.a.menuItem
					}, e.text) : a.a.createElement(N.a, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: F.a.menuItem
					}, e.text) : a.a.createElement(p.n, {
						className: F.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (r.unshift(a.a.createElement("div", {
						className: F.a.menuItem,
						key: "loading-1"
					}, a.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), r.unshift(a.a.createElement("div", {
						className: F.a.menuItem,
						key: "loading-2"
					}, a.a.createElement(K, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const s = t ? x.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : x.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return a.a.createElement("div", {
						className: F.a.container
					}, r, a.a.createElement("div", {
						className: F.a.expandContainer
					}, a.a.createElement(p.n, {
						className: F.a.expandButton,
						onClick: this.moreOptionsToggled
					}, s)), e && a.a.createElement(j, null))
				}
			}
			var H = Object(o.b)(W, (e, t) => {
					let {
						profileName: n
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(E.g)(!0, !0)), e(Object(y.h)(k.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: () => e(Object(I.e)(n)),
						onModeratorsRequested: () => e(Object(O.b)(n))
					}
				})(G),
				Z = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				V = n.n(Z);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = Object(i.c)({
				account: C.i,
				activeTooltipId: f.a,
				currentUserHasSubreddit: C.g,
				hideNSFWPref: C.y,
				isModerator: g.f,
				profile: g.j,
				profileAboutInfo: g.h,
				structuredStyle: (e, t) => Object(h.n)(e, Object(g.m)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(C.db)(e, {
						userName: n
					})
				},
				user: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(C.cb)(e, {
						userName: n
					})
				},
				page: b.b
			}), q = e => {
				let {
					username: t,
					currentUserHasSubreddit: n
				} = e;
				return a.a.createElement("div", {
					className: V.a.actionItem
				}, a.a.createElement(p.h, {
					className: V.a.button,
					to: n ? "/user/".concat(t, "/submit") : "/submit"
				}, z._("New post", null, {
					hk: "QD6O4"
				})))
			}, Q = e => {
				let {
					profileName: t,
					onToggleFollow: n,
					userIsSubscriber: r
				} = e;
				return a.a.createElement("div", {
					className: V.a.actionItem
				}, r ? a.a.createElement(p.i, {
					className: V.a.button,
					onClick: () => n(t, r)
				}, z._("Unfollow", null, {
					hk: "1nM1SO"
				})) : a.a.createElement(p.f, {
					className: V.a.button,
					onClick: () => n(t, r)
				}, z._("Follow", null, {
					hk: "OPQuq"
				})))
			}, X = e => {
				let {
					userId: t
				} = e;
				return a.a.createElement("div", {
					className: V.a.actionItem
				}, a.a.createElement(l.a, {
					contextId: t,
					className: V.a.button,
					userId: t
				}, z._("Chat", null, {
					hk: "UKkIW"
				})))
			};
			t.default = Object(o.b)(J, e => ({
				onToggleFollow: (t, n) => e(Object(c.d)([{
					name: t,
					type: u.a.PROFILE
				}], !n))
			}))(Object(m.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: n,
					hideNSFWPref: s,
					isModerator: o,
					isOverlay: i,
					isSubmissionPage: c,
					onToggleFollow: l,
					profile: m,
					profileAboutInfo: u,
					sendEvent: p,
					structuredStyle: b,
					userHasSubreddit: g,
					user: h,
					page: f
				} = e;
				if (!h) return null;
				const {
					accountIcon: C,
					awardedLastMonth: x,
					id: v,
					isEmployee: w,
					isGold: _,
					prefShowSnoovatar: I,
					username: y
				} = h, E = !!t && t.id === v, O = b && b.bannerBackgroundImage, P = m && m.isNSFW && s, M = !(!u || !u.userIsSubscriber), j = "/user/".concat(y, "/"), k = f && f.url === j;
				return a.a.createElement(d.a, {
					isEmployee: w,
					isGold: _,
					isOverlay: i,
					isOwnProfile: E,
					publicDescription: u ? u.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: k ? null : j,
					username: y,
					recentAwardings: x,
					actions: a.a.createElement(a.a.Fragment, null, E && !c && q({
						username: y,
						currentUserHasSubreddit: n
					}), !E && g && Q({
						profileName: y,
						onToggleFollow: l,
						userIsSubscriber: M
					}), !!t && !E && X({
						userId: v
					})),
					footer: a.a.createElement(H, {
						hasSubreddit: g,
						isModerator: o,
						isOwnProfile: E,
						allowViewSnoovatar: I,
						profileName: y,
						sendEvent: p
					}),
					profileIcon: P ? "".concat(r.a.assetPath, "/img/avatar_over18_square.png") : C,
					bannerBackgroundImage: P ? void 0 : O
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
				l = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};
			const d = a.a.div("WidgetBackground", c.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, n = l(e, ["children"]);
					return s.a.createElement("div", n, s.a.createElement(o.b, {
						type: o.a.Widget
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
				a = n.n(s);
			t.a = r.a.div("dynamicTwoCol", a.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
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
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const n = [];
					for (const r in s) {
						const a = s[r];
						(a.priceInCoins <= e || t) && n.push(a)
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
//# sourceMappingURL=reddit-components-ProfileIdCard.59a1ba682e92393244bb.js.map