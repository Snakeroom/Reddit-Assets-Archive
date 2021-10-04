// https://www.redditstatic.com/desktop2x/BottomCellWrapper.99f4e9f127bc262163cb.js
// Retrieved at 10/4/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BottomCellWrapper", "SignupUpsell"], {
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
				o = s("./src/reddit/components/Upsell/SignupUpsell/index.tsx"),
				l = s("./src/reddit/constants/promo.ts"),
				i = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				c = s("./src/reddit/hooks/usePromoContext.ts"),
				r = s("./src/reddit/components/Upsell/BottomCellWrapper/index.m.less"),
				a = s.n(r);
			t.default = function() {
				const {
					dismissPromo: e
				} = Object(c.a)(), t = Object(i.a)(l.b.SignupUpsellCell), s = Object(i.a)(l.b.SignupUpsellCellDismissible);
				return t ? n.createElement("div", {
					className: a.a.wrapper
				}, n.createElement(o.default, {
					size: "small"
				})) : s ? n.createElement("div", {
					className: a.a.wrapper
				}, n.createElement(o.default, {
					onDismiss: () => e(l.b.SignupUpsellCellDismissible),
					size: "small"
				})) : null
			}
		},
		"./src/reddit/components/Upsell/SSOButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_30NsIuzSAL8hr8pX_EgPrL",
				active: "_3eH2JfXAL8i93IIRmMRdIO",
				buttonText: "u8ATxbDZMIGHOm6Gh-K_l",
				icon: "_2dHQxDx0lcVjcJcVL0HfBI",
				small: "_2k2GK-dAKsIuu-EmfDF91o"
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1HeIJdMDEHWk_NuYt41dSe",
				small: "_34Pc1yzDVQ_t-6iqJG0wqo",
				img: "_3ojpx9Fdtg3iKW_IB_83l4",
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
		"./src/reddit/components/Upsell/SignupUpsell/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				l = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/actions/login.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				u = s.n(p);
			var m = function({
					Icon: e,
					children: t,
					onClick: s,
					size: n,
					iconClassName: o,
					className: i
				}) {
					return l.createElement(d.s, {
						className: Object(c.a)(u.a.button, i, {
							[u.a.large]: n === d.c.L,
							[u.a.small]: n !== d.c.L
						}),
						Icon: e,
						iconClassName: Object(c.a)(u.a.icon, o),
						iconPosition: d.g.L,
						onClick: s,
						priority: d.b.Secondary,
						size: n
					}, l.createElement("span", {
						className: u.a.buttonText
					}, t))
				},
				b = s("./src/reddit/constants/promo.ts"),
				f = s("./src/reddit/selectors/telemetry.ts");
			const C = "sso_signup";
			var g;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(g || (g = {}));
			const x = () => e => ({
					...Object(f.defaults)(e),
					source: "popup",
					action: "view",
					noun: C,
					actionInfo: Object(f.actionInfo)(e)
				}),
				_ = () => e => ({
					...Object(f.defaults)(e),
					source: "popup",
					action: "dismiss",
					noun: C,
					actionInfo: Object(f.actionInfo)(e)
				}),
				v = e => t => ({
					...Object(f.defaults)(t),
					source: "popup",
					action: "click",
					noun: C,
					actionInfo: Object(f.actionInfo)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				E = () => e => ({
					...Object(f.defaults)(e),
					source: "popup",
					action: "click",
					noun: C,
					actionInfo: Object(f.actionInfo)(e, {
						popup_button_text: "login"
					})
				});
			var h = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				j = s("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");
			var O = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				w = s("./src/reddit/icons/svgs/Close/index.tsx"),
				N = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				S = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				B = s.n(S);
			const I = {
				S: "small",
				L: "large"
			};
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				Object(i.e)(j.a), Object(i.e)(j.c), Object(i.e)(j.e);
				const s = Object(a.b)();
				l.useEffect(() => {
					s(x())
				}, [s]);
				const p = Object(i.d)(),
					u = () => p(Object(r.k)()),
					f = t === I.L ? d.c.L : d.c.XS,
					C = function() {
						const e = Object(h.a)(b.b.SignupUpsellCell),
							t = Object(h.a)(b.b.SignupUpsellCellDismissible),
							s = Object(h.a)(b.b.SignupUpsellBottomSheet),
							o = `${n.a.assetPath}/img/upsell/appQrCode/`;
						if (e) return `${o}bottom_cell.png`;
						if (t) return `${o}bottom_cell_dismissible.png`;
						if (s) return `${o}bottom_sheet.png`;
						throw new Error("Invalid variant for signup upsell")
					}();
				return l.createElement("div", {
					className: Object(c.a)(B.a.wrapper, {
						[B.a.small]: t === I.S,
						[B.a.large]: t === I.L
					})
				}, e && l.createElement("button", {
					className: B.a.closeButton,
					onClick: () => {
						e(), s(_())
					}
				}, l.createElement(w.a, null)), l.createElement("div", {
					className: B.a.title
				}, o.fbt._("Sign in for the best experience", null, {
					hk: "1NwkRp"
				})), l.createElement("div", {
					className: B.a.bottom
				}, l.createElement("div", {
					className: B.a.left
				}, l.createElement(m, {
					Icon: N.a,
					onClick: () => {
						u(), s(v(g.Google))
					},
					size: f,
					iconClassName: B.a.googleIcon
				}, o.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), l.createElement(m, {
					Icon: O.a,
					onClick: () => {
						u(), s(v(g.Apple))
					},
					size: f,
					iconClassName: B.a.appleIcon,
					className: B.a.appleButton
				}, o.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), l.createElement("div", {
					className: B.a.bottomWrapper
				}, l.createElement(d.i, {
					className: Object(c.a)(B.a.linkButton, B.a.emailButton),
					onClick: () => {
						u(), s(v(g.Reddit))
					},
					size: d.c.XS
				}, o.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), l.createElement(d.i, {
					className: B.a.linkButton,
					onClick: () => {
						(() => p(Object(r.i)()))(), s(E())
					},
					size: d.c.XS
				}, o.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), l.createElement("div", {
					className: B.a.divider
				}), l.createElement("div", {
					className: B.a.right
				}, l.createElement("img", {
					className: B.a.img,
					src: C
				}), l.createElement("div", {
					className: B.a.downloadAppLabel
				}, o.fbt._("Download the app", null, {
					hk: "1QKyF"
				})))))
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
				return t.get(e) === n.a.Shown
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
				return f
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				l = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				c = s("./src/reddit/selectors/experiments/index.ts");
			const r = Object(n.a)(i.g, i.d, c.e, (e, t, s) => !e && !t && !s);

			function a(e, t) {
				return s => Object(l.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: r,
					throttledVariants: {
						[o.Eb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = a(o.fb, !0),
				p = a(o.gb, !0),
				u = a(o.hb, !0),
				m = a(o.fb, !1),
				b = a(o.gb, !1),
				f = a(o.hb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomCellWrapper.99f4e9f127bc262163cb.js.map