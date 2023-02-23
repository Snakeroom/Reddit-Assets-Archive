// https://www.redditstatic.com/desktop2x/BottomCellWrapper.abdeca081ca8c580021a.js
// Retrieved at 2/23/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
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

			function u(e) {
				let {
					children: t
				} = e;
				return n.createElement(l.a, null, n.createElement("div", {
					className: Object(o.a)(p.a.wrapper),
					"data-testid": "bottom-cell-wrapper"
				}, t))
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
			var b = function(e) {
					let {
						Icon: t,
						children: s,
						onClick: n,
						size: o,
						iconClassName: i,
						className: r
					} = e;
					return l.createElement(p.t, {
						className: Object(d.a)(m.a.button, r),
						Icon: t,
						iconClassName: Object(d.a)(m.a.icon, i),
						iconPosition: p.h.L,
						isFullWidth: !0,
						onClick: n,
						priority: p.c.Secondary,
						redditStyle: !0,
						size: o
					}, l.createElement("span", {
						className: m.a.buttonText
					}, s))
				},
				_ = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			const x = "sso_signup";
			var f;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(f || (f = {}));
			const C = () => e => ({
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
				j = e => t => ({
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
			var O = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				v = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				B = s("./src/reddit/icons/svgs/Close/index.tsx"),
				N = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				w = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				S = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				k = s.n(S);
			const L = {
					S: "small",
					L: "large"
				},
				I = "d2x_geo_upsell_tier_0",
				U = "d2x_geo_upsell_tier_1",
				D = "d2x_geo_upsell_tier_2";
			t.default = function(e) {
				let {
					onDismiss: t,
					size: s
				} = e;
				const u = Object(a.b)();
				l.useEffect(() => {
					u(C())
				}, [u]);
				const m = Object(i.d)(),
					g = () => {
						m(Object(c.k)({
							actionSource: c.a.GeoSignupUpsell
						}))
					},
					x = () => {
						g(), m(Object(r.openRegisterModal)())
					},
					S = function() {
						const e = Object(i.e)(w.b),
							t = Object(i.e)(w.d),
							s = Object(i.e)(w.f),
							o = Object(O.a)(_.bd.Bottom_sheet),
							l = Object(O.a)(_.bd.Bottom_cell),
							r = Object(O.a)(_.bd.Bottom_cell_dismissible),
							c = Object(O.a)(_.bd.Bottom_cell_dismissible_immediate_trigger),
							a = Object(O.a)(_.bd.Bottom_cell_signup_upsell_copy),
							d = Object(O.a)(_.bd.Bottom_cell_surprise_install_copy);
						let p;
						if (e) p = I;
						else if (t) p = U;
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
					y = Object(O.a)(_.bd.Bottom_cell_signup_upsell_copy),
					A = Object(O.a)(_.bd.Bottom_cell_surprise_install_copy),
					H = y ? o.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : o.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					R = A ? o.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : o.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return l.createElement("div", {
					className: Object(d.a)(k.a.wrapper, {
						[k.a.small]: s === L.S,
						[k.a.large]: s === L.L
					})
				}, t && l.createElement("button", {
					"aria-label": o.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: k.a.closeButton,
					onClick: () => {
						t(), u(h())
					},
					type: "button"
				}, l.createElement(B.a, null)), l.createElement("div", {
					className: k.a.title
				}, H), l.createElement("div", {
					className: k.a.bottom
				}, l.createElement("div", {
					className: k.a.left
				}, l.createElement(b, {
					Icon: N.a,
					onClick: () => {
						x(), u(j(f.Google))
					},
					size: p.d.M,
					iconClassName: k.a.googleIcon
				}, o.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), l.createElement(b, {
					Icon: v.a,
					onClick: () => {
						x(), u(j(f.Apple))
					},
					size: p.d.M,
					iconClassName: k.a.appleIcon,
					className: k.a.appleButton
				}, o.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), l.createElement("div", {
					className: k.a.bottomWrapper
				}, l.createElement(p.j, {
					className: Object(d.a)(k.a.linkButton, k.a.emailButton),
					onClick: () => {
						x(), u(j(f.Reddit))
					},
					redditStyle: !0,
					size: p.d.XS
				}, o.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), l.createElement(p.j, {
					className: k.a.linkButton,
					onClick: () => {
						g(), m(Object(r.openLoginModal)()), u(E())
					},
					redditStyle: !0,
					size: p.d.XS
				}, o.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), l.createElement("div", {
					className: k.a.divider
				}), l.createElement("div", {
					className: k.a.right
				}, l.createElement("img", {
					alt: o.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: k.a.img,
					src: S
				}), l.createElement("div", {
					className: k.a.downloadAppLabel
				}, R))))
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
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				height: "18",
				viewBox: "0 0 18 18",
				width: "18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
			}))
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
				fill: "#4285F4"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
				fill: "#34A853"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
				fill: "#FBBC05"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
				fill: "#EA4335"
			}))
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
				return b
			})), s.d(t, "f", (function() {
				return _
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				l = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const c = Object(n.a)(i.h, i.d, r.e, (e, t, s) => !e && !t && !s);

			function a(e, t) {
				return s => Object(l.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[o.bd.Bottom_cell_dismissible]: e,
						[o.bd.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.bd.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(o.yb, !0),
				p = a(o.zb, !0),
				u = a(o.Ab, !0),
				m = a(o.yb, !1),
				b = a(o.zb, !1),
				_ = a(o.Ab, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomCellWrapper.abdeca081ca8c580021a.js.map