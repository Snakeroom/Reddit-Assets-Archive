// https://www.redditstatic.com/desktop2x/BottomCellWrapper.d9c5c2b46c1073431990.js
// Retrieved at 9/21/2021, 2:00:07 PM by Reddit Dataminer v1.0.0
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
				l = s("./src/reddit/constants/promo.ts"),
				o = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				a = s("./src/reddit/components/Upsell/SignupUpsell/index.tsx"),
				i = s("./src/reddit/components/Upsell/BottomCellWrapper/index.m.less"),
				r = s.n(i);
			t.default = function() {
				return Object(o.a)(l.b.SignupUpsellCell) ? n.createElement("div", {
					className: r.a.wrapper
				}, n.createElement(a.default, {
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
				right: "_3i5-1Ua2cRJKiSBT2ub3BR"
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./src/config.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				m = s.n(d);
			var p = function({
					Icon: e,
					children: t,
					onClick: s,
					size: n,
					iconClassName: l,
					className: a
				}) {
					return o.createElement(c.s, {
						className: Object(i.a)(m.a.button, a, {
							[m.a.large]: n === c.c.L,
							[m.a.small]: n !== c.c.L
						}),
						Icon: e,
						iconClassName: Object(i.a)(m.a.icon, l),
						iconPosition: c.g.L,
						onClick: s,
						priority: c.b.Secondary,
						size: n
					}, o.createElement("span", {
						className: m.a.buttonText
					}, t))
				},
				u = s("./src/reddit/constants/promo.ts"),
				C = s("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				_ = s("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				g = s("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				x = s("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				b = s.n(x);
			const f = {
				S: "small",
				L: "large"
			};
			t.default = function({
				size: e
			}) {
				const t = Object(a.d)(),
					s = () => t(Object(r.i)()),
					d = e === f.L ? c.c.L : c.c.XS,
					m = function() {
						const e = Object(C.a)(u.b.SignupUpsellCell),
							t = Object(C.a)(u.b.SignupUpsellBottomSheet),
							s = `${n.a.assetPath}/img/upsell/appQrCode/`;
						if (e) return `${s}bottom_cell.png`;
						if (t) return `${s}bottom_sheet.png`;
						throw new Error("Invalid variant for signup upsell")
					}();
				return o.createElement("div", {
					className: Object(i.a)(b.a.wrapper, {
						[b.a.small]: e === f.S,
						[b.a.large]: e === f.L
					})
				}, o.createElement("div", {
					className: b.a.title
				}, l.fbt._("Sign in for the best experience", null, {
					hk: "1NwkRp"
				})), o.createElement("div", {
					className: b.a.bottom
				}, o.createElement("div", {
					className: b.a.left
				}, o.createElement(p, {
					Icon: g.a,
					onClick: s,
					size: d,
					iconClassName: b.a.googleIcon
				}, l.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), o.createElement(p, {
					Icon: _.a,
					onClick: s,
					size: d,
					iconClassName: b.a.appleIcon,
					className: b.a.appleButton
				}, l.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), o.createElement("div", {
					className: b.a.bottomWrapper
				}, o.createElement(c.i, {
					className: Object(i.a)(b.a.linkButton, b.a.emailButton),
					onClick: s,
					size: c.c.XS
				}, l.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), o.createElement(c.i, {
					className: b.a.linkButton,
					onClick: () => t(Object(r.k)()),
					size: c.c.XS
				}, l.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), o.createElement("div", {
					className: b.a.divider
				}), o.createElement("div", {
					className: b.a.right
				}, o.createElement("img", {
					className: b.a.img,
					src: m
				}), o.createElement("div", {
					className: b.a.downloadAppLabel
				}, l.fbt._("Download the app", null, {
					hk: "1QKyF"
				})))))
			}
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/promo.ts"),
				l = s("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(l.a)();
				return t.get(e) === n.a.Shown
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				l = s("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(n.useContext)(l.a)
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BottomCellWrapper.d9c5c2b46c1073431990.js.map