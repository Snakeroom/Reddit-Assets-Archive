// https://www.redditstatic.com/desktop2x/BottomCellWrapper.c78a41f1a77179dc9102.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
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
				p = s.n(d);

			function u({
				children: e
			}) {
				return n.createElement(l.a, null, n.createElement("div", {
					className: Object(o.a)(p.a.wrapper),
					"data-testid": "bottom-cell-wrapper"
				}, e))
			}
			t.default = function() {
				const {
					dismissPromo: e
				} = Object(a.a)(), t = Object(c.a)(r.b.SignupUpsellCell), s = Object(c.a)(r.b.SignupUpsellCellDismissible);
				return t ? n.createElement(u, null, n.createElement(i.default, {
					size: "small"
				})) : s ? n.createElement(u, null, n.createElement(i.default, {
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
				r = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				m = s.n(u);
			var _ = function({
					Icon: e,
					children: t,
					onClick: s,
					size: n,
					iconClassName: o,
					className: i
				}) {
					return l.createElement(p.t, {
						className: Object(d.a)(m.a.button, i),
						Icon: e,
						iconClassName: Object(d.a)(m.a.icon, o),
						iconPosition: p.h.L,
						isFullWidth: !0,
						onClick: s,
						priority: p.c.Secondary,
						redditStyle: !0,
						size: n
					}, l.createElement("span", {
						className: m.a.buttonText
					}, t))
				},
				b = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/selectors/telemetry.ts");
			const g = "sso_signup";
			var f;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(f || (f = {}));
			const h = () => e => ({
					...Object(x.o)(e),
					source: "popup",
					action: "view",
					noun: g,
					actionInfo: Object(x.d)(e)
				}),
				j = () => e => ({
					...Object(x.o)(e),
					source: "popup",
					action: "dismiss",
					noun: g,
					actionInfo: Object(x.d)(e)
				}),
				O = e => t => ({
					...Object(x.o)(t),
					source: "popup",
					action: "click",
					noun: g,
					actionInfo: Object(x.d)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				E = () => e => ({
					...Object(x.o)(e),
					source: "popup",
					action: "click",
					noun: g,
					actionInfo: Object(x.d)(e, {
						popup_button_text: "login"
					})
				});
			var B = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				C = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				S = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				N = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				v = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				w = s.n(v);
			const I = {
					S: "small",
					L: "large"
				},
				U = "d2x_geo_upsell_tier_0",
				L = "d2x_geo_upsell_tier_1",
				D = "d2x_geo_upsell_tier_2";
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				const s = Object(a.b)();
				l.useEffect(() => {
					s(h())
				}, [s]);
				const u = Object(i.d)(),
					m = () => {
						u(Object(c.k)({
							actionSource: c.a.GeoSignupUpsell
						}))
					},
					x = () => {
						m(), u(Object(r.k)())
					},
					g = function() {
						const e = Object(i.e)(N.b),
							t = Object(i.e)(N.d),
							s = Object(i.e)(N.f),
							o = Object(B.a)(b.hc.Bottom_sheet),
							l = Object(B.a)(b.hc.Bottom_cell),
							r = Object(B.a)(b.hc.Bottom_cell_dismissible),
							c = Object(B.a)(b.hc.Bottom_cell_dismissible_immediate_trigger),
							a = Object(B.a)(b.hc.Bottom_cell_signup_upsell_copy),
							d = Object(B.a)(b.hc.Bottom_cell_surprise_install_copy);
						let p;
						if (e) p = U;
						else if (t) p = L;
						else {
							if (!s) throw new Error("Not eligible for signup upsell");
							p = D
						}
						const u = `${n.a.assetPath}/img/upsell/appQrCode/${p}/`;
						if (o) return `${u}bottom_sheet.png`;
						if (l) return `${u}bottom_cell.png`;
						if (r) return `${u}bottom_cell_dismissible.png`;
						if (e && c) return `${u}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${u}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${u}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					v = Object(B.a)(b.hc.Bottom_cell_signup_upsell_copy),
					y = Object(B.a)(b.hc.Bottom_cell_surprise_install_copy),
					A = v ? o.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : o.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					H = y ? o.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : o.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return l.createElement("div", {
					className: Object(d.a)(w.a.wrapper, {
						[w.a.small]: t === I.S,
						[w.a.large]: t === I.L
					})
				}, e && l.createElement("button", {
					"aria-label": o.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: w.a.closeButton,
					onClick: () => {
						e(), s(j())
					},
					type: "button"
				}, l.createElement(S.a, null)), l.createElement("div", {
					className: w.a.title
				}, A), l.createElement("div", {
					className: w.a.bottom
				}, l.createElement("div", {
					className: w.a.left
				}, l.createElement(_, {
					Icon: k.a,
					onClick: () => {
						x(), s(O(f.Google))
					},
					size: p.d.M,
					iconClassName: w.a.googleIcon
				}, o.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), l.createElement(_, {
					Icon: C.a,
					onClick: () => {
						x(), s(O(f.Apple))
					},
					size: p.d.M,
					iconClassName: w.a.appleIcon,
					className: w.a.appleButton
				}, o.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), l.createElement("div", {
					className: w.a.bottomWrapper
				}, l.createElement(p.j, {
					className: Object(d.a)(w.a.linkButton, w.a.emailButton),
					onClick: () => {
						x(), s(O(f.Reddit))
					},
					redditStyle: !0,
					size: p.d.XS
				}, o.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), l.createElement(p.j, {
					className: w.a.linkButton,
					onClick: () => {
						m(), u(Object(r.i)()), s(E())
					},
					redditStyle: !0,
					size: p.d.XS
				}, o.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), l.createElement("div", {
					className: w.a.divider
				}), l.createElement("div", {
					className: w.a.right
				}, l.createElement("img", {
					alt: o.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: w.a.img,
					src: g
				}), l.createElement("div", {
					className: w.a.downloadAppLabel
				}, H))))
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
				return p
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "f", (function() {
				return b
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
						[o.hc.Bottom_cell_dismissible]: e,
						[o.hc.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.hc.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(o.vb, !0),
				p = a(o.wb, !0),
				u = a(o.xb, !0),
				m = a(o.vb, !1),
				_ = a(o.wb, !1),
				b = a(o.xb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomCellWrapper.c78a41f1a77179dc9102.js.map