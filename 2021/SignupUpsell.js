// https://www.redditstatic.com/desktop2x/SignupUpsell.8f79f4fc9ff01bb8aa74.js
// Retrieved at 11/8/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SignupUpsell"], {
		"./src/reddit/components/Upsell/SSOButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_30NsIuzSAL8hr8pX_EgPrL",
				buttonText: "u8ATxbDZMIGHOm6Gh-K_l",
				icon: "_2dHQxDx0lcVjcJcVL0HfBI"
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Upsell/SignupUpsell/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				m = n.n(p);
			var _ = function({
					Icon: e,
					children: t,
					onClick: n,
					size: s,
					iconClassName: o,
					className: l
				}) {
					return i.createElement(u.t, {
						className: Object(d.a)(m.a.button, l),
						Icon: e,
						iconClassName: Object(d.a)(m.a.icon, o),
						iconPosition: u.h.L,
						isFullWidth: !0,
						onClick: n,
						priority: u.c.Secondary,
						redditStyle: !0,
						size: s
					}, i.createElement("span", {
						className: m.a.buttonText
					}, t))
				},
				b = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const f = "sso_signup";
			var x;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(x || (x = {}));
			const j = () => e => ({
					...Object(g.defaults)(e),
					source: "popup",
					action: "view",
					noun: f,
					actionInfo: Object(g.actionInfo)(e)
				}),
				O = () => e => ({
					...Object(g.defaults)(e),
					source: "popup",
					action: "dismiss",
					noun: f,
					actionInfo: Object(g.actionInfo)(e)
				}),
				h = e => t => ({
					...Object(g.defaults)(t),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(g.actionInfo)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				E = () => e => ({
					...Object(g.defaults)(e),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(g.actionInfo)(e, {
						popup_button_text: "login"
					})
				});
			var N = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				B = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				I = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				S = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				v = n("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				C = n.n(v);
			const L = {
					S: "small",
					L: "large"
				},
				w = "d2x_geo_upsell_tier_0",
				J = "d2x_geo_upsell_tier_1",
				U = "d2x_geo_upsell_tier_2";
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				const n = Object(a.b)();
				i.useEffect(() => {
					n(j())
				}, [n]);
				const p = Object(l.d)(),
					m = () => {
						p(Object(r.k)({
							actionSource: r.a.GeoSignupUpsell
						}))
					},
					g = () => {
						m(), p(Object(c.k)())
					},
					f = function() {
						const e = Object(l.e)(S.b),
							t = Object(l.e)(S.d),
							n = Object(l.e)(S.f),
							o = Object(N.a)(b.Jb.Bottom_sheet),
							i = Object(N.a)(b.Jb.Bottom_cell),
							c = Object(N.a)(b.Jb.Bottom_cell_dismissible),
							r = Object(N.a)(b.Jb.Bottom_cell_dismissible_immediate_trigger),
							a = Object(N.a)(b.Jb.Bottom_cell_signup_upsell_copy),
							d = Object(N.a)(b.Jb.Bottom_cell_surprise_install_copy);
						let u;
						if (e) u = w;
						else if (t) u = J;
						else {
							if (!n) throw new Error("Not eligible for signup upsell");
							u = U
						}
						const p = `${s.a.assetPath}/img/upsell/appQrCode/${u}/`;
						if (o) return `${p}bottom_sheet.png`;
						if (i) return `${p}bottom_cell.png`;
						if (c) return `${p}bottom_cell_dismissible.png`;
						if (e && r) return `${p}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${p}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${p}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					v = Object(N.a)(b.Jb.Bottom_cell_signup_upsell_copy),
					y = Object(N.a)(b.Jb.Bottom_cell_surprise_install_copy),
					D = v ? o.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : o.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					A = y ? o.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : o.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return i.createElement("div", {
					className: Object(d.a)(C.a.wrapper, {
						[C.a.small]: t === L.S,
						[C.a.large]: t === L.L
					})
				}, e && i.createElement("button", {
					"aria-label": o.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: C.a.closeButton,
					onClick: () => {
						e(), n(O())
					},
					type: "button"
				}, i.createElement(I.a, null)), i.createElement("div", {
					className: C.a.title
				}, D), i.createElement("div", {
					className: C.a.bottom
				}, i.createElement("div", {
					className: C.a.left
				}, i.createElement(_, {
					Icon: k.a,
					onClick: () => {
						g(), n(h(x.Google))
					},
					size: u.d.M,
					iconClassName: C.a.googleIcon
				}, o.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), i.createElement(_, {
					Icon: B.a,
					onClick: () => {
						g(), n(h(x.Apple))
					},
					size: u.d.M,
					iconClassName: C.a.appleIcon,
					className: C.a.appleButton
				}, o.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), i.createElement("div", {
					className: C.a.bottomWrapper
				}, i.createElement(u.j, {
					className: Object(d.a)(C.a.linkButton, C.a.emailButton),
					onClick: () => {
						g(), n(h(x.Reddit))
					},
					redditStyle: !0,
					size: u.d.XS
				}, o.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), i.createElement(u.j, {
					className: C.a.linkButton,
					onClick: () => {
						m(), p(Object(c.i)()), n(E())
					},
					redditStyle: !0,
					size: u.d.XS
				}, o.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), i.createElement("div", {
					className: C.a.divider
				}), i.createElement("div", {
					className: C.a.right
				}, i.createElement("img", {
					alt: o.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: C.a.img,
					src: f
				}), i.createElement("div", {
					className: C.a.downloadAppLabel
				}, A))))
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function i(e) {
				const t = Object(s.e)(o.a) === e,
					n = Object(s.e)(o.c) === e,
					i = Object(s.e)(o.e) === e;
				return t || n || i
			}
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "f", (function() {
				return b
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				l = n("./src/reddit/selectors/meta.ts"),
				c = n("./src/reddit/selectors/experiments/index.ts");
			const r = Object(s.a)(l.g, l.d, c.e, (e, t, n) => !e && !t && !n);

			function a(e, t) {
				return n => Object(i.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: r,
					throttledVariants: {
						[o.Jb.Bottom_cell_dismissible]: e,
						[o.Jb.Bottom_cell_dismissible_immediate_trigger]: e,
						[o.Jb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(o.hb, !0),
				u = a(o.ib, !0),
				p = a(o.jb, !0),
				m = a(o.hb, !1),
				_ = a(o.ib, !1),
				b = a(o.jb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.8f79f4fc9ff01bb8aa74.js.map