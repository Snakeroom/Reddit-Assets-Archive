// https://www.redditstatic.com/desktop2x/SignupUpsell.2c969ea1888dd3194c85.js
// Retrieved at 10/7/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
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
				bottomWrapper: "_1C-KIJ5LyGDleThUGtDLel",
				emailButton: "_3un-bWnDBE66dHTwC_N-ad",
				linkButton: "BdTWOFzZ7Er8XSx3Zbnr8",
				appleButton: "IlFIYQfiM5oNODn120R3Q",
				right: "_3i5-1Ua2cRJKiSBT2ub3BR",
				closeButton: "_2qFn4QNDGodlEOt4HDqRcG"
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-redux/es/index.js"),
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
					iconClassName: l,
					className: o
				}) {
					return i.createElement(d.s, {
						className: Object(c.a)(p.a.button, o),
						Icon: e,
						iconClassName: Object(c.a)(p.a.icon, l),
						iconPosition: d.g.L,
						isFullWidth: !0,
						onClick: n,
						priority: d.b.Secondary,
						redditStyle: !0,
						size: s
					}, i.createElement("span", {
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
				C = () => e => ({
					...Object(b.defaults)(e),
					source: "popup",
					action: "dismiss",
					noun: g,
					actionInfo: Object(b.actionInfo)(e)
				}),
				h = e => t => ({
					...Object(b.defaults)(t),
					source: "popup",
					action: "click",
					noun: g,
					actionInfo: Object(b.actionInfo)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				O = () => e => ({
					...Object(b.defaults)(e),
					source: "popup",
					action: "click",
					noun: g,
					actionInfo: Object(b.actionInfo)(e, {
						popup_button_text: "login"
					})
				});
			var j = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts"),
				v = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");
			var E = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				N = n("./src/reddit/icons/svgs/Close/index.tsx"),
				B = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				w = n("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				I = n.n(w);
			const L = {
					S: "small",
					L: "large"
				},
				k = "d2x_geo_upsell_tier_0",
				S = "d2x_geo_upsell_tier_1",
				G = "d2x_geo_upsell_tier_2";
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				Object(o.e)(v.a), Object(o.e)(v.c), Object(o.e)(v.e);
				const n = Object(a.b)();
				i.useEffect(() => {
					n(x())
				}, [n]);
				const u = Object(o.d)(),
					p = () => u(Object(r.k)()),
					b = function() {
						const e = Object(o.e)(v.b),
							t = Object(o.e)(v.d),
							n = Object(o.e)(v.f),
							l = Object(j.a)(_.Gb.Bottom_sheet),
							i = Object(j.a)(_.Gb.Bottom_cell),
							c = Object(j.a)(_.Gb.Bottom_cell_dismissible),
							r = Object(j.a)(_.Gb.Bottom_cell_dismissible_immediate_trigger),
							a = Object(j.a)(_.Gb.Bottom_cell_signup_upsell_copy),
							d = Object(j.a)(_.Gb.Bottom_cell_surprise_install_copy);
						let u;
						if (e) u = k;
						else if (t) u = S;
						else {
							if (!n) throw new Error("Not eligible for signup upsell");
							u = G
						}
						const p = `${s.a.assetPath}/img/upsell/appQrCode/${u}/`;
						if (l) return `${p}bottom_sheet.png`;
						if (i) return `${p}bottom_cell.png`;
						if (c) return `${p}bottom_cell_dismissible.png`;
						if (e && r) return `${p}bottom_cell_immediate_trigger_dismissible.png`;
						if (e && a) return `${p}bottom_cell_signup_upsell_copy.png`;
						if (e && d) return `${p}bottom_cell_surprise_install_copy.png`;
						throw new Error("Invalid variant for signup upsell")
					}(),
					g = Object(j.a)(_.Gb.Bottom_cell_signup_upsell_copy),
					w = Object(j.a)(_.Gb.Bottom_cell_surprise_install_copy),
					U = g ? l.fbt._("Come join us, we have snacks", null, {
						hk: "1LUl2W"
					}) : l.fbt._("Log in or sign up for the best experience", null, {
						hk: "2LAHQy"
					}),
					y = w ? l.fbt._("Scan the QR code, it's super fun", null, {
						hk: "1nNmn7"
					}) : l.fbt._("Get the app", null, {
						hk: "2NvKYa"
					});
				return i.createElement("div", {
					className: Object(c.a)(I.a.wrapper, {
						[I.a.small]: t === L.S,
						[I.a.large]: t === L.L
					})
				}, e && i.createElement("button", {
					"aria-label": l.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: I.a.closeButton,
					onClick: () => {
						e(), n(C())
					},
					type: "button"
				}, i.createElement(N.a, null)), i.createElement("div", {
					className: I.a.title
				}, U), i.createElement("div", {
					className: I.a.bottom
				}, i.createElement("div", {
					className: I.a.left
				}, i.createElement(m, {
					Icon: B.a,
					onClick: () => {
						p(), n(h(f.Google))
					},
					size: d.c.M,
					iconClassName: I.a.googleIcon
				}, l.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), i.createElement(m, {
					Icon: E.a,
					onClick: () => {
						p(), n(h(f.Apple))
					},
					size: d.c.M,
					iconClassName: I.a.appleIcon,
					className: I.a.appleButton
				}, l.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), i.createElement("div", {
					className: I.a.bottomWrapper
				}, i.createElement(d.i, {
					className: Object(c.a)(I.a.linkButton, I.a.emailButton),
					onClick: () => {
						p(), n(h(f.Reddit))
					},
					redditStyle: !0,
					size: d.c.XS
				}, l.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), i.createElement(d.i, {
					className: I.a.linkButton,
					onClick: () => {
						(() => u(Object(r.i)()))(), n(O())
					},
					redditStyle: !0,
					size: d.c.XS
				}, l.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), i.createElement("div", {
					className: I.a.divider
				}), i.createElement("div", {
					className: I.a.right
				}, i.createElement("img", {
					className: I.a.img,
					src: b
				}), i.createElement("div", {
					className: I.a.downloadAppLabel
				}, y))))
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function i(e) {
				const t = Object(s.e)(l.b) === e,
					n = Object(s.e)(l.d) === e,
					i = Object(s.e)(l.f) === e;
				return t || n || i
			}
		},
		"./src/reddit/icons/svgs/AppleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				l = n.n(s);
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
		"./src/reddit/icons/svgs/GoogleLogo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				l = n.n(s);
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
				l = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts"),
				c = n("./src/reddit/selectors/experiments/index.ts");
			const r = Object(s.a)(o.g, o.d, c.e, (e, t, n) => !e && !t && !n);

			function a(e, t) {
				return n => Object(i.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: r,
					throttledVariants: {
						[l.Gb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(l.gb, !0),
				u = a(l.hb, !0),
				p = a(l.ib, !0),
				m = a(l.gb, !1),
				_ = a(l.hb, !1),
				b = a(l.ib, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.2c969ea1888dd3194c85.js.map