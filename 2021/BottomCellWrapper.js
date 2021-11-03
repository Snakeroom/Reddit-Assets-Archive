// https://www.redditstatic.com/desktop2x/BottomCellWrapper.efac843a966588651b5f.js
// Retrieved at 11/3/2021, 2:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BottomCellWrapper", "SignupUpsell"], {
		"./src/reddit/components/ErrorBoundary/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@sentry/minimal/esm/index.js"),
				o = s("./node_modules/react/index.js");
			class l extends o.Component {
				constructor() {
					super(...arguments), this.state = {
						error: null
					}
				}
				componentDidCatch(e, t) {
					n.l(s => {
						s.setExtra("info", t), n.c(e)
					}), this.setState({
						error: e
					})
				}
				render() {
					const {
						children: e,
						FallbackComponent: t = (() => null)
					} = this.props, {
						error: s
					} = this.state;
					return s ? o.createElement(t, {
						error: s
					}) : e
				}
			}
			t.a = l
		},
		"./src/reddit/components/Upsell/BottomCellWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1WeE65WSCbzzCKAEgP5ZFk",
				"slide-bottom": "_3FjpC2mH48LDBJ7fxVbnsL",
				slideBottom: "_3FjpC2mH48LDBJ7fxVbnsL"
			}
		},
		"./src/reddit/components/Upsell/BottomCellWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/ErrorBoundary/index.tsx"),
				i = s("./src/reddit/components/Upsell/SignupUpsell/index.tsx"),
				r = s("./src/reddit/constants/promo.ts"),
				c = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				a = s("./src/reddit/hooks/usePromoContext.ts"),
				d = s("./src/reddit/components/Upsell/BottomCellWrapper/index.m.less"),
				u = s.n(d);

			function p({
				children: e
			}) {
				return n.createElement(l.a, null, n.createElement("div", {
					className: Object(o.a)(u.a.wrapper),
					"data-testid": "bottom-cell-wrapper"
				}, e))
			}
			t.default = function() {
				const {
					dismissPromo: e
				} = Object(a.a)(), t = Object(c.a)(r.b.SignupUpsellCell), s = Object(c.a)(r.b.SignupUpsellCellDismissible);
				return t ? n.createElement(p, null, n.createElement(i.default, {
					size: "small"
				})) : s ? n.createElement(p, null, n.createElement(i.default, {
					onDismiss: () => e(r.b.SignupUpsellCellDismissible),
					size: "small"
				})) : null
			}
		},
		"./src/reddit/components/Upsell/SSOButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_30NsIuzSAL8hr8pX_EgPrL",
				buttonText: "u8ATxbDZMIGHOm6Gh-K_l",
				icon: "_2dHQxDx0lcVjcJcVL0HfBI"
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1HeIJdMDEHWk_NuYt41dSe",
				img: "_3ojpx9Fdtg3iKW_IB_83l4",
				small: "_34Pc1yzDVQ_t-6iqJG0wqo",
				title: "nuEDaJqlMNp5-js0QH_rY",
				divider: "_2u6DCIjwS0_M1kvgYJBAQa",
				downloadAppLabel: "_3wgY5Yf350-JOe3s-QOIta",
				bottom: "_R8rvHygsKMBXCNwAdL_e",
				large: "_2lu4yFbbiUGqY4Uhn9owfH",
				left: "_2fdPtBgY9QQp3IoJ4RSl5a",
				right: "_3i5-1Ua2cRJKiSBT2ub3BR",
				bottomWrapper: "_1C-KIJ5LyGDleThUGtDLel",
				emailButton: "_3un-bWnDBE66dHTwC_N-ad",
				linkButton: "BdTWOFzZ7Er8XSx3Zbnr8",
				appleButton: "IlFIYQfiM5oNODn120R3Q",
				closeButton: "_2qFn4QNDGodlEOt4HDqRcG"
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				l = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/login.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				p = s.n(u);
			var m = function({
					Icon: e,
					children: t,
					onClick: s,
					size: n,
					iconClassName: o,
					className: i
				}) {
					return l.createElement(d.s, {
						className: Object(r.a)(p.a.button, i),
						Icon: e,
						iconClassName: Object(r.a)(p.a.icon, o),
						iconPosition: d.g.L,
						isFullWidth: !0,
						onClick: s,
						priority: d.b.Secondary,
						redditStyle: !0,
						size: n
					}, l.createElement("span", {
						className: p.a.buttonText
					}, t))
				},
				b = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts");
			const f = "sso_signup";
			var g;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(g || (g = {}));
			const x = () => e => ({
					...Object(_.defaults)(e),
					source: "popup",
					action: "view",
					noun: f,
					actionInfo: Object(_.actionInfo)(e)
				}),
				j = () => e => ({
					...Object(_.defaults)(e),
					source: "popup",
					action: "dismiss",
					noun: f,
					actionInfo: Object(_.actionInfo)(e)
				}),
				h = e => t => ({
					...Object(_.defaults)(t),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(_.actionInfo)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				O = () => e => ({
					...Object(_.defaults)(e),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(_.actionInfo)(e, {
						popup_button_text: "login"
					})
				});
			var E = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				B = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				C = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				N = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				S = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				v = s.n(S);
			const I = {
					S: "small",
					L: "large"
				},
				w = "d2x_geo_upsell_tier_0",
				L = "d2x_geo_upsell_tier_1",
				U = "d2x_geo_upsell_tier_2";
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				const s = Object(a.b)();
				l.useEffect(() => {
					s(x())
				}, [s]);
				const u = Object(i.d)(),
					p = () => u(Object(c.k)()),
					_ = function() {
						const e = Object(i.e)(N.b),
							t = Object(i.e)(N.d),
							s = Object(i.e)(N.f),
							o = Object(E.a)(b.Jb.Bottom_sheet),
							l = Object(E.a)(b.Jb.Bottom_cell),
							r = Object(E.a)(b.Jb.Bottom_cell_dismissible),
							c = Object(E.a)(b.Jb.Bottom_cell_dismissible_immediate_trigger),
							a = Object(E.a)(b.Jb.Bottom_cell_signup_upsell_copy),
							d = Object(E.a)(b.Jb.Bottom_cell_surprise_install_copy);
						let u;
						if (e) u = w;
						else if (t) u = L;
						else {
							if (!s) throw new Error("Not eligible for signup upsell");
							u = U
						}
						const p = `${n.a.assetPath}/img/upsell/appQrCode/${u}/`;
						if (o) return `${p}bottom_sheet.png`;
						if (l) return `${p}bottom_cell.png`;
						if (r) return `${p}bottom_cell_dismissible.png`;
						if (e && c) return `${p}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${p}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${p}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					f = Object(E.a)(b.Jb.Bottom_cell_signup_upsell_copy),
					S = Object(E.a)(b.Jb.Bottom_cell_surprise_install_copy),
					D = f ? o.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : o.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					J = S ? o.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : o.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return l.createElement("div", {
					className: Object(r.a)(v.a.wrapper, {
						[v.a.small]: t === I.S,
						[v.a.large]: t === I.L
					})
				}, e && l.createElement("button", {
					"aria-label": o.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: v.a.closeButton,
					onClick: () => {
						e(), s(j())
					},
					type: "button"
				}, l.createElement(C.a, null)), l.createElement("div", {
					className: v.a.title
				}, D), l.createElement("div", {
					className: v.a.bottom
				}, l.createElement("div", {
					className: v.a.left
				}, l.createElement(m, {
					Icon: k.a,
					onClick: () => {
						p(), s(h(g.Google))
					},
					size: d.c.M,
					iconClassName: v.a.googleIcon
				}, o.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), l.createElement(m, {
					Icon: B.a,
					onClick: () => {
						p(), s(h(g.Apple))
					},
					size: d.c.M,
					iconClassName: v.a.appleIcon,
					className: v.a.appleButton
				}, o.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), l.createElement("div", {
					className: v.a.bottomWrapper
				}, l.createElement(d.i, {
					className: Object(r.a)(v.a.linkButton, v.a.emailButton),
					onClick: () => {
						p(), s(h(g.Reddit))
					},
					redditStyle: !0,
					size: d.c.XS
				}, o.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), l.createElement(d.i, {
					className: v.a.linkButton,
					onClick: () => {
						(() => u(Object(c.i)()))(), s(O())
					},
					redditStyle: !0,
					size: d.c.XS
				}, o.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), l.createElement("div", {
					className: v.a.divider
				}), l.createElement("div", {
					className: v.a.right
				}, l.createElement("img", {
					alt: o.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: v.a.img,
					src: _
				}), l.createElement("div", {
					className: v.a.downloadAppLabel
				}, J))))
			}
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/usePromoContext.ts");

			function l(e) {
				const {
					promos: t
				} = Object(o.a)();
				return !!e && t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function l(e) {
				const t = Object(n.e)(o.a) === e,
					s = Object(n.e)(o.c) === e,
					l = Object(n.e)(o.e) === e;
				return t || s || l
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "f", (function() {
				return _
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				l = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(i.g, i.d, r.e, (e, t, s) => !e && !t && !s);

			function a(e, t) {
				return s => Object(l.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[o.Jb.Bottom_cell_dismissible]: e,
						[o.Jb.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.Jb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(o.ib, !0),
				u = a(o.jb, !0),
				p = a(o.kb, !0),
				m = a(o.ib, !1),
				b = a(o.jb, !1),
				_ = a(o.kb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomCellWrapper.efac843a966588651b5f.js.map