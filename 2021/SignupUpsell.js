// https://www.redditstatic.com/desktop2x/SignupUpsell.6ddc4d54fe32a36eea74.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
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
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/login.ts"),
				r = s("./src/reddit/actions/modal.ts"),
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
					iconClassName: i,
					className: l
				}) {
					return o.createElement(u.s, {
						className: Object(d.a)(m.a.button, l),
						Icon: e,
						iconClassName: Object(d.a)(m.a.icon, i),
						iconPosition: u.g.L,
						isFullWidth: !0,
						onClick: s,
						priority: u.b.Secondary,
						redditStyle: !0,
						size: n
					}, o.createElement("span", {
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
			const O = () => e => ({
					...Object(g.defaults)(e),
					source: "popup",
					action: "view",
					noun: f,
					actionInfo: Object(g.actionInfo)(e)
				}),
				j = () => e => ({
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
			var N = s("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				B = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				k = s("./src/reddit/icons/svgs/Close/index.tsx"),
				I = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				S = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				v = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				C = s.n(v);
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
				const s = Object(a.b)();
				o.useEffect(() => {
					s(O())
				}, [s]);
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
							s = Object(l.e)(S.f),
							i = Object(N.a)(b.Jb.Bottom_sheet),
							o = Object(N.a)(b.Jb.Bottom_cell),
							c = Object(N.a)(b.Jb.Bottom_cell_dismissible),
							r = Object(N.a)(b.Jb.Bottom_cell_dismissible_immediate_trigger),
							a = Object(N.a)(b.Jb.Bottom_cell_signup_upsell_copy),
							d = Object(N.a)(b.Jb.Bottom_cell_surprise_install_copy);
						let u;
						if (e) u = w;
						else if (t) u = J;
						else {
							if (!s) throw new Error("Not eligible for signup upsell");
							u = U
						}
						const p = `${n.a.assetPath}/img/upsell/appQrCode/${u}/`;
						if (i) return `${p}bottom_sheet.png`;
						if (o) return `${p}bottom_cell.png`;
						if (c) return `${p}bottom_cell_dismissible.png`;
						if (e && r) return `${p}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${p}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${p}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					v = Object(N.a)(b.Jb.Bottom_cell_signup_upsell_copy),
					y = Object(N.a)(b.Jb.Bottom_cell_surprise_install_copy),
					D = v ? i.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : i.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					A = y ? i.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : i.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return o.createElement("div", {
					className: Object(d.a)(C.a.wrapper, {
						[C.a.small]: t === L.S,
						[C.a.large]: t === L.L
					})
				}, e && o.createElement("button", {
					"aria-label": i.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: C.a.closeButton,
					onClick: () => {
						e(), s(j())
					},
					type: "button"
				}, o.createElement(k.a, null)), o.createElement("div", {
					className: C.a.title
				}, D), o.createElement("div", {
					className: C.a.bottom
				}, o.createElement("div", {
					className: C.a.left
				}, o.createElement(_, {
					Icon: I.a,
					onClick: () => {
						g(), s(h(x.Google))
					},
					size: u.c.M,
					iconClassName: C.a.googleIcon
				}, i.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), o.createElement(_, {
					Icon: B.a,
					onClick: () => {
						g(), s(h(x.Apple))
					},
					size: u.c.M,
					iconClassName: C.a.appleIcon,
					className: C.a.appleButton
				}, i.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), o.createElement("div", {
					className: C.a.bottomWrapper
				}, o.createElement(u.i, {
					className: Object(d.a)(C.a.linkButton, C.a.emailButton),
					onClick: () => {
						g(), s(h(x.Reddit))
					},
					redditStyle: !0,
					size: u.c.XS
				}, i.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), o.createElement(u.i, {
					className: C.a.linkButton,
					onClick: () => {
						m(), p(Object(c.i)()), s(E())
					},
					redditStyle: !0,
					size: u.c.XS
				}, i.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), o.createElement("div", {
					className: C.a.divider
				}), o.createElement("div", {
					className: C.a.right
				}, o.createElement("img", {
					alt: i.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: C.a.img,
					src: f
				}), o.createElement("div", {
					className: C.a.downloadAppLabel
				}, A))))
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(n.e)(i.a) === e,
					s = Object(n.e)(i.c) === e,
					o = Object(n.e)(i.e) === e;
				return t || s || o
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
				i = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				l = s("./src/reddit/selectors/meta.ts"),
				c = s("./src/reddit/selectors/experiments/index.ts");
			const r = Object(n.a)(l.g, l.d, c.e, (e, t, s) => !e && !t && !s);

			function a(e, t) {
				return s => Object(o.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: r,
					throttledVariants: {
						[i.Jb.Bottom_cell_dismissible]: e,
						[i.Jb.Bottom_cell_dismissible_immediate_trigger]: e,
						[i.Jb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(i.ib, !0),
				u = a(i.jb, !0),
				p = a(i.kb, !0),
				m = a(i.ib, !1),
				_ = a(i.jb, !1),
				b = a(i.kb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.6ddc4d54fe32a36eea74.js.map