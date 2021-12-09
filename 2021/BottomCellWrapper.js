// https://www.redditstatic.com/desktop2x/BottomCellWrapper.c9eb22b5cf5957eddf80.js
// Retrieved at 12/9/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
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
				r = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				m = s.n(p);
			var _ = function({
					Icon: e,
					children: t,
					onClick: s,
					size: n,
					iconClassName: o,
					className: i
				}) {
					return l.createElement(u.t, {
						className: Object(d.a)(m.a.button, i),
						Icon: e,
						iconClassName: Object(d.a)(m.a.icon, o),
						iconPosition: u.h.L,
						isFullWidth: !0,
						onClick: s,
						priority: u.c.Secondary,
						redditStyle: !0,
						size: n
					}, l.createElement("span", {
						className: m.a.buttonText
					}, t))
				},
				b = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			const x = "sso_signup";
			var f;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(f || (f = {}));
			const j = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "view",
					noun: x,
					actionInfo: Object(g.d)(e)
				}),
				h = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "dismiss",
					noun: x,
					actionInfo: Object(g.d)(e)
				}),
				O = e => t => ({
					...Object(g.o)(t),
					source: "popup",
					action: "click",
					noun: x,
					actionInfo: Object(g.d)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				E = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "click",
					noun: x,
					actionInfo: Object(g.d)(e, {
						popup_button_text: "login"
					})
				});
			var B = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				C = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				S = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				N = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				v = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				I = s.n(v);
			const U = {
					S: "small",
					L: "large"
				},
				w = "d2x_geo_upsell_tier_0",
				L = "d2x_geo_upsell_tier_1",
				D = "d2x_geo_upsell_tier_2";
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				const s = Object(a.b)();
				l.useEffect(() => {
					s(j())
				}, [s]);
				const p = Object(i.d)(),
					m = () => {
						p(Object(c.k)({
							actionSource: c.a.GeoSignupUpsell
						}))
					},
					g = () => {
						m(), p(Object(r.k)())
					},
					x = function() {
						const e = Object(i.e)(N.b),
							t = Object(i.e)(N.d),
							s = Object(i.e)(N.f),
							o = Object(B.a)(b.ec.Bottom_sheet),
							l = Object(B.a)(b.ec.Bottom_cell),
							r = Object(B.a)(b.ec.Bottom_cell_dismissible),
							c = Object(B.a)(b.ec.Bottom_cell_dismissible_immediate_trigger),
							a = Object(B.a)(b.ec.Bottom_cell_signup_upsell_copy),
							d = Object(B.a)(b.ec.Bottom_cell_surprise_install_copy);
						let u;
						if (e) u = w;
						else if (t) u = L;
						else {
							if (!s) throw new Error("Not eligible for signup upsell");
							u = D
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
					v = Object(B.a)(b.ec.Bottom_cell_signup_upsell_copy),
					y = Object(B.a)(b.ec.Bottom_cell_surprise_install_copy),
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
					className: Object(d.a)(I.a.wrapper, {
						[I.a.small]: t === U.S,
						[I.a.large]: t === U.L
					})
				}, e && l.createElement("button", {
					"aria-label": o.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: I.a.closeButton,
					onClick: () => {
						e(), s(h())
					},
					type: "button"
				}, l.createElement(S.a, null)), l.createElement("div", {
					className: I.a.title
				}, A), l.createElement("div", {
					className: I.a.bottom
				}, l.createElement("div", {
					className: I.a.left
				}, l.createElement(_, {
					Icon: k.a,
					onClick: () => {
						g(), s(O(f.Google))
					},
					size: u.d.M,
					iconClassName: I.a.googleIcon
				}, o.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), l.createElement(_, {
					Icon: C.a,
					onClick: () => {
						g(), s(O(f.Apple))
					},
					size: u.d.M,
					iconClassName: I.a.appleIcon,
					className: I.a.appleButton
				}, o.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), l.createElement("div", {
					className: I.a.bottomWrapper
				}, l.createElement(u.j, {
					className: Object(d.a)(I.a.linkButton, I.a.emailButton),
					onClick: () => {
						g(), s(O(f.Reddit))
					},
					redditStyle: !0,
					size: u.d.XS
				}, o.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), l.createElement(u.j, {
					className: I.a.linkButton,
					onClick: () => {
						m(), p(Object(r.i)()), s(E())
					},
					redditStyle: !0,
					size: u.d.XS
				}, o.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), l.createElement("div", {
					className: I.a.divider
				}), l.createElement("div", {
					className: I.a.right
				}, l.createElement("img", {
					alt: o.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: I.a.img,
					src: x
				}), l.createElement("div", {
					className: I.a.downloadAppLabel
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
				return u
			})), s.d(t, "e", (function() {
				return p
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
						[o.ec.Bottom_cell_dismissible]: e,
						[o.ec.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.ec.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(o.tb, !0),
				u = a(o.ub, !0),
				p = a(o.vb, !0),
				m = a(o.tb, !1),
				_ = a(o.ub, !1),
				b = a(o.vb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomCellWrapper.c9eb22b5cf5957eddf80.js.map