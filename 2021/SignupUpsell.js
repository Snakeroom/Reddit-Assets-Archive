// https://www.redditstatic.com/desktop2x/SignupUpsell.0d6575a46956fbb018dd.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
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
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/login.ts"),
				r = s("./src/reddit/actions/modal.ts"),
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
					className: l
				}) {
					return i.createElement(p.t, {
						className: Object(d.a)(m.a.button, l),
						Icon: e,
						iconClassName: Object(d.a)(m.a.icon, o),
						iconPosition: p.h.L,
						isFullWidth: !0,
						onClick: s,
						priority: p.c.Secondary,
						redditStyle: !0,
						size: n
					}, i.createElement("span", {
						className: m.a.buttonText
					}, t))
				},
				b = s("./src/reddit/constants/experiments.ts"),
				g = s("./src/reddit/selectors/telemetry.ts");
			const f = "sso_signup";
			var x;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(x || (x = {}));
			const h = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "view",
					noun: f,
					actionInfo: Object(g.d)(e)
				}),
				O = () => e => ({
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
				E = () => e => ({
					...Object(g.o)(e),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(g.d)(e, {
						popup_button_text: "login"
					})
				});
			var N = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				B = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				v = s("./src/reddit/icons/svgs/Close/index.tsx"),
				k = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				S = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				I = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				w = s.n(I);
			const C = {
					S: "small",
					L: "large"
				},
				L = "d2x_geo_upsell_tier_0",
				U = "d2x_geo_upsell_tier_1",
				y = "d2x_geo_upsell_tier_2";
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				const s = Object(a.b)();
				i.useEffect(() => {
					s(h())
				}, [s]);
				const u = Object(l.d)(),
					m = () => {
						u(Object(r.k)({
							actionSource: r.a.GeoSignupUpsell
						}))
					},
					g = () => {
						m(), u(Object(c.k)())
					},
					f = function() {
						const e = Object(l.e)(S.b),
							t = Object(l.e)(S.d),
							s = Object(l.e)(S.f),
							o = Object(N.a)(b.hc.Bottom_sheet),
							i = Object(N.a)(b.hc.Bottom_cell),
							c = Object(N.a)(b.hc.Bottom_cell_dismissible),
							r = Object(N.a)(b.hc.Bottom_cell_dismissible_immediate_trigger),
							a = Object(N.a)(b.hc.Bottom_cell_signup_upsell_copy),
							d = Object(N.a)(b.hc.Bottom_cell_surprise_install_copy);
						let p;
						if (e) p = L;
						else if (t) p = U;
						else {
							if (!s) throw new Error("Not eligible for signup upsell");
							p = y
						}
						const u = `${n.a.assetPath}/img/upsell/appQrCode/${p}/`;
						if (o) return `${u}bottom_sheet.png`;
						if (i) return `${u}bottom_cell.png`;
						if (c) return `${u}bottom_cell_dismissible.png`;
						if (e && r) return `${u}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${u}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${u}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					I = Object(N.a)(b.hc.Bottom_cell_signup_upsell_copy),
					D = Object(N.a)(b.hc.Bottom_cell_surprise_install_copy),
					A = I ? o.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : o.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					H = D ? o.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : o.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return i.createElement("div", {
					className: Object(d.a)(w.a.wrapper, {
						[w.a.small]: t === C.S,
						[w.a.large]: t === C.L
					})
				}, e && i.createElement("button", {
					"aria-label": o.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: w.a.closeButton,
					onClick: () => {
						e(), s(O())
					},
					type: "button"
				}, i.createElement(v.a, null)), i.createElement("div", {
					className: w.a.title
				}, A), i.createElement("div", {
					className: w.a.bottom
				}, i.createElement("div", {
					className: w.a.left
				}, i.createElement(_, {
					Icon: k.a,
					onClick: () => {
						g(), s(j(x.Google))
					},
					size: p.d.M,
					iconClassName: w.a.googleIcon
				}, o.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), i.createElement(_, {
					Icon: B.a,
					onClick: () => {
						g(), s(j(x.Apple))
					},
					size: p.d.M,
					iconClassName: w.a.appleIcon,
					className: w.a.appleButton
				}, o.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), i.createElement("div", {
					className: w.a.bottomWrapper
				}, i.createElement(p.j, {
					className: Object(d.a)(w.a.linkButton, w.a.emailButton),
					onClick: () => {
						g(), s(j(x.Reddit))
					},
					redditStyle: !0,
					size: p.d.XS
				}, o.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), i.createElement(p.j, {
					className: w.a.linkButton,
					onClick: () => {
						m(), u(Object(c.i)()), s(E())
					},
					redditStyle: !0,
					size: p.d.XS
				}, o.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), i.createElement("div", {
					className: w.a.divider
				}), i.createElement("div", {
					className: w.a.right
				}, i.createElement("img", {
					alt: o.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: w.a.img,
					src: f
				}), i.createElement("div", {
					className: w.a.downloadAppLabel
				}, H))))
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function i(e) {
				const t = Object(n.e)(o.a) === e,
					s = Object(n.e)(o.c) === e,
					i = Object(n.e)(o.e) === e;
				return t || s || i
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
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				l = s("./src/reddit/selectors/meta.ts"),
				c = s("./src/reddit/selectors/experiments/index.ts");
			const r = Object(n.a)(l.g, l.d, c.e, (e, t, s) => !e && !t && !s);

			function a(e, t) {
				return s => Object(i.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: r,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.0d6575a46956fbb018dd.js.map