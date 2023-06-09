// https://www.redditstatic.com/desktop2x/SignupUpsell.4a48fe10bba19cfee000.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SignupUpsell"], {
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
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/login.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				m = s.n(u);
			var _ = function(e) {
					let {
						Icon: t,
						children: s,
						onClick: n,
						size: l,
						iconClassName: o,
						className: c
					} = e;
					return i.createElement(p.t, {
						className: Object(d.a)(m.a.button, c),
						Icon: t,
						iconClassName: Object(d.a)(m.a.icon, o),
						iconPosition: p.h.L,
						isFullWidth: !0,
						onClick: n,
						priority: p.c.Secondary,
						redditStyle: !0,
						size: l
					}, i.createElement("span", {
						className: m.a.buttonText
					}, s))
				},
				b = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			const f = "sso_signup";
			var x;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(x || (x = {}));
			const C = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "view",
					noun: f,
					actionInfo: Object(g.d)(e)
				}),
				h = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "dismiss",
					noun: f,
					actionInfo: Object(g.d)(e)
				}),
				j = e => t => ({
					...Object(g.o)(t),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(g.d)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				v = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(g.d)(e, {
						popup_button_text: "login"
					})
				});
			var E = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				O = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				N = s("./src/reddit/icons/svgs/Close/index.tsx"),
				B = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				w = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				L = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				I = s.n(L);
			const S = {
					S: "small",
					L: "large"
				},
				k = "d2x_geo_upsell_tier_0",
				H = "d2x_geo_upsell_tier_1",
				U = "d2x_geo_upsell_tier_2";
			t.default = function(e) {
				let {
					onDismiss: t,
					size: s
				} = e;
				const u = Object(a.b)();
				i.useEffect(() => {
					u(C())
				}, [u]);
				const m = Object(o.d)(),
					g = () => {
						m(Object(r.k)({
							actionSource: r.a.GeoSignupUpsell
						}))
					},
					f = () => {
						g(), m(Object(c.openRegisterModal)())
					},
					L = function() {
						const e = Object(o.e)(w.b),
							t = Object(o.e)(w.d),
							s = Object(o.e)(w.f),
							l = Object(E.a)(b.id.Bottom_sheet),
							i = Object(E.a)(b.id.Bottom_cell),
							c = Object(E.a)(b.id.Bottom_cell_dismissible),
							r = Object(E.a)(b.id.Bottom_cell_dismissible_immediate_trigger),
							a = Object(E.a)(b.id.Bottom_cell_signup_upsell_copy),
							d = Object(E.a)(b.id.Bottom_cell_surprise_install_copy);
						let p;
						if (e) p = k;
						else if (t) p = H;
						else {
							if (!s) throw new Error("Not eligible for signup upsell");
							p = U
						}
						const u = `${n.a.assetPath}/img/upsell/appQrCode/${p}/`;
						if (l) return `${u}bottom_sheet.png`;
						if (i) return `${u}bottom_cell.png`;
						if (c) return `${u}bottom_cell_dismissible.png`;
						if (e && r) return `${u}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${u}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${u}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					R = Object(E.a)(b.id.Bottom_cell_signup_upsell_copy),
					y = Object(E.a)(b.id.Bottom_cell_surprise_install_copy),
					A = R ? l.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : l.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					D = y ? l.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : l.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return i.createElement("div", {
					className: Object(d.a)(I.a.wrapper, {
						[I.a.small]: s === S.S,
						[I.a.large]: s === S.L
					})
				}, t && i.createElement("button", {
					"aria-label": l.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: I.a.closeButton,
					onClick: () => {
						t(), u(h())
					},
					type: "button"
				}, i.createElement(N.a, null)), i.createElement("div", {
					className: I.a.title
				}, A), i.createElement("div", {
					className: I.a.bottom
				}, i.createElement("div", {
					className: I.a.left
				}, i.createElement(_, {
					Icon: B.a,
					onClick: () => {
						f(), u(j(x.Google))
					},
					size: p.d.M,
					iconClassName: I.a.googleIcon
				}, l.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), i.createElement(_, {
					Icon: O.a,
					onClick: () => {
						f(), u(j(x.Apple))
					},
					size: p.d.M,
					iconClassName: I.a.appleIcon,
					className: I.a.appleButton
				}, l.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), i.createElement("div", {
					className: I.a.bottomWrapper
				}, i.createElement(p.j, {
					className: Object(d.a)(I.a.linkButton, I.a.emailButton),
					onClick: () => {
						f(), u(j(x.Reddit))
					},
					redditStyle: !0,
					size: p.d.XS
				}, l.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), i.createElement(p.j, {
					className: I.a.linkButton,
					onClick: () => {
						g(), m(Object(c.openLoginModal)()), u(v())
					},
					redditStyle: !0,
					size: p.d.XS
				}, l.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), i.createElement("div", {
					className: I.a.divider
				}), i.createElement("div", {
					className: I.a.right
				}, i.createElement("img", {
					alt: l.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: I.a.img,
					src: L
				}), i.createElement("div", {
					className: I.a.downloadAppLabel
				}, D))))
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function i(e) {
				const t = Object(n.e)(l.a) === e,
					s = Object(n.e)(l.c) === e,
					i = Object(n.e)(l.e) === e;
				return t || s || i
			}
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				l = s.n(n);
			t.a = e => l.a.createElement("svg", {
				className: e.className,
				height: "18",
				viewBox: "0 0 18 18",
				width: "18",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("path", {
				d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
			}))
		},
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				l = s.n(n);
			t.a = e => l.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
				fill: "#4285F4"
			}), l.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
				fill: "#34A853"
			}), l.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
				fill: "#FBBC05"
			}), l.a.createElement("path", {
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
				return _
			})), s.d(t, "f", (function() {
				return b
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/meta.ts"),
				c = s("./src/reddit/selectors/experiments/index.ts");
			const r = Object(n.a)(o.h, o.d, c.e, (e, t, s) => !e && !t && !s);

			function a(e, t) {
				return s => Object(i.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: r,
					throttledVariants: {
						[l.id.Bottom_cell_dismissible]: e,
						[l.id.Bottom_cell_dismissible_immediate_trigger]: e,
						[l.id.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(l.Gb, !0),
				p = a(l.Hb, !0),
				u = a(l.Ib, !0),
				m = a(l.Gb, !1),
				_ = a(l.Hb, !1),
				b = a(l.Ib, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.4a48fe10bba19cfee000.js.map