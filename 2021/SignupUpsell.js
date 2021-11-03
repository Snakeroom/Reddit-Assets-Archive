// https://www.redditstatic.com/desktop2x/SignupUpsell.ecae4aa35bd42a43dcba.js
// Retrieved at 11/3/2021, 1:40:07 PM by Reddit Dataminer v1.0.0
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
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				p = n.n(u);
			var m = function({
					Icon: e,
					children: t,
					onClick: n,
					size: s,
					iconClassName: i,
					className: l
				}) {
					return o.createElement(d.s, {
						className: Object(c.a)(p.a.button, l),
						Icon: e,
						iconClassName: Object(c.a)(p.a.icon, i),
						iconPosition: d.g.L,
						isFullWidth: !0,
						onClick: n,
						priority: d.b.Secondary,
						redditStyle: !0,
						size: s
					}, o.createElement("span", {
						className: p.a.buttonText
					}, t))
				},
				_ = n("./src/reddit/constants/experiments.ts"),
				b = n("./src/reddit/selectors/telemetry.ts");
			const g = "sso_signup";
			var f;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(f || (f = {}));
			const x = () => e => ({
					...Object(b.defaults)(e),
					source: "popup",
					action: "view",
					noun: g,
					actionInfo: Object(b.actionInfo)(e)
				}),
				O = () => e => ({
					...Object(b.defaults)(e),
					source: "popup",
					action: "dismiss",
					noun: g,
					actionInfo: Object(b.actionInfo)(e)
				}),
				j = e => t => ({
					...Object(b.defaults)(t),
					source: "popup",
					action: "click",
					noun: g,
					actionInfo: Object(b.actionInfo)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				I = () => e => ({
					...Object(b.defaults)(e),
					source: "popup",
					action: "click",
					noun: g,
					actionInfo: Object(b.actionInfo)(e, {
						popup_button_text: "login"
					})
				});
			var h = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				E = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				N = n("./src/reddit/icons/svgs/Close/index.tsx"),
				B = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				k = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts"),
				v = n("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				S = n.n(v);
			const C = {
					S: "small",
					L: "large"
				},
				L = "d2x_geo_upsell_tier_0",
				w = "d2x_geo_upsell_tier_1",
				U = "d2x_geo_upsell_tier_2";
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				const n = Object(a.b)();
				o.useEffect(() => {
					n(x())
				}, [n]);
				const u = Object(l.d)(),
					p = () => u(Object(r.k)()),
					b = function() {
						const e = Object(l.e)(k.b),
							t = Object(l.e)(k.d),
							n = Object(l.e)(k.f),
							i = Object(h.a)(_.Ib.Bottom_sheet),
							o = Object(h.a)(_.Ib.Bottom_cell),
							c = Object(h.a)(_.Ib.Bottom_cell_dismissible),
							r = Object(h.a)(_.Ib.Bottom_cell_dismissible_immediate_trigger),
							a = Object(h.a)(_.Ib.Bottom_cell_signup_upsell_copy),
							d = Object(h.a)(_.Ib.Bottom_cell_surprise_install_copy);
						let u;
						if (e) u = L;
						else if (t) u = w;
						else {
							if (!n) throw new Error("Not eligible for signup upsell");
							u = U
						}
						const p = `${s.a.assetPath}/img/upsell/appQrCode/${u}/`;
						if (i) return `${p}bottom_sheet.png`;
						if (o) return `${p}bottom_cell.png`;
						if (c) return `${p}bottom_cell_dismissible.png`;
						if (e && r) return `${p}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${p}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${p}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					g = Object(h.a)(_.Ib.Bottom_cell_signup_upsell_copy),
					v = Object(h.a)(_.Ib.Bottom_cell_surprise_install_copy),
					y = g ? i.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : i.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					D = v ? i.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : i.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return o.createElement("div", {
					className: Object(c.a)(S.a.wrapper, {
						[S.a.small]: t === C.S,
						[S.a.large]: t === C.L
					})
				}, e && o.createElement("button", {
					"aria-label": i.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: S.a.closeButton,
					onClick: () => {
						e(), n(O())
					},
					type: "button"
				}, o.createElement(N.a, null)), o.createElement("div", {
					className: S.a.title
				}, y), o.createElement("div", {
					className: S.a.bottom
				}, o.createElement("div", {
					className: S.a.left
				}, o.createElement(m, {
					Icon: B.a,
					onClick: () => {
						p(), n(j(f.Google))
					},
					size: d.c.M,
					iconClassName: S.a.googleIcon
				}, i.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), o.createElement(m, {
					Icon: E.a,
					onClick: () => {
						p(), n(j(f.Apple))
					},
					size: d.c.M,
					iconClassName: S.a.appleIcon,
					className: S.a.appleButton
				}, i.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), o.createElement("div", {
					className: S.a.bottomWrapper
				}, o.createElement(d.i, {
					className: Object(c.a)(S.a.linkButton, S.a.emailButton),
					onClick: () => {
						p(), n(j(f.Reddit))
					},
					redditStyle: !0,
					size: d.c.XS
				}, i.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), o.createElement(d.i, {
					className: S.a.linkButton,
					onClick: () => {
						(() => u(Object(r.i)()))(), n(I())
					},
					redditStyle: !0,
					size: d.c.XS
				}, i.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), o.createElement("div", {
					className: S.a.divider
				}), o.createElement("div", {
					className: S.a.right
				}, o.createElement("img", {
					alt: i.fbt._("QR Code to get the Reddit app", null, {
						hk: "2uYhIL"
					}),
					className: S.a.img,
					src: b
				}), o.createElement("div", {
					className: S.a.downloadAppLabel
				}, D))))
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(s.e)(i.a) === e,
					n = Object(s.e)(i.c) === e,
					o = Object(s.e)(i.e) === e;
				return t || n || o
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
				i = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				l = n("./src/reddit/selectors/meta.ts"),
				c = n("./src/reddit/selectors/experiments/index.ts");
			const r = Object(s.a)(l.g, l.d, c.e, (e, t, n) => !e && !t && !n);

			function a(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: r,
					throttledVariants: {
						[i.Ib.Bottom_cell_dismissible]: e,
						[i.Ib.Bottom_cell_dismissible_immediate_trigger]: e,
						[i.Ib.Bottom_sheet]: e
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.ecae4aa35bd42a43dcba.js.map