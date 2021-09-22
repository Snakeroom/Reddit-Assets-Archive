// https://www.redditstatic.com/desktop2x/SignupUpsell.80a0b39a8309e0d54436.js
// Retrieved at 9/22/2021, 7:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SignupUpsell"], {
		"./src/reddit/components/Upsell/SSOButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_30NsIuzSAL8hr8pX_EgPrL",
				active: "_3eH2JfXAL8i93IIRmMRdIO",
				buttonText: "u8ATxbDZMIGHOm6Gh-K_l",
				icon: "_2dHQxDx0lcVjcJcVL0HfBI",
				small: "_2k2GK-dAKsIuu-EmfDF91o"
			}
		},
		"./src/reddit/components/Upsell/SignupUpsell/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Upsell/SignupUpsell/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				m = n.n(d);
			var u = function({
					Icon: e,
					children: t,
					onClick: n,
					size: s,
					iconClassName: l,
					className: a
				}) {
					return i.createElement(r.s, {
						className: Object(o.a)(m.a.button, a, {
							[m.a.large]: s === r.c.L,
							[m.a.small]: s !== r.c.L
						}),
						Icon: e,
						iconClassName: Object(o.a)(m.a.icon, l),
						iconPosition: r.g.L,
						onClick: n,
						priority: r.b.Secondary,
						size: s
					}, i.createElement("span", {
						className: m.a.buttonText
					}, t))
				},
				p = n("./src/reddit/constants/promo.ts"),
				C = n("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				b = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");
			var g = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				_ = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				f = n("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				x = n.n(f);
			const v = {
				S: "small",
				L: "large"
			};
			t.default = function({
				size: e
			}) {
				Object(a.e)(b.a), Object(a.e)(b.c), Object(a.e)(b.e);
				const t = Object(a.d)(),
					n = () => t(Object(c.i)()),
					d = e === v.L ? r.c.L : r.c.XS,
					m = function() {
						const e = Object(C.a)(p.b.SignupUpsellCell),
							t = Object(C.a)(p.b.SignupUpsellBottomSheet),
							n = `${s.a.assetPath}/img/upsell/appQrCode/`;
						if (e) return `${n}bottom_cell.png`;
						if (t) return `${n}bottom_sheet.png`;
						throw new Error("Invalid variant for signup upsell")
					}();
				return i.createElement("div", {
					className: Object(o.a)(x.a.wrapper, {
						[x.a.small]: e === v.S,
						[x.a.large]: e === v.L
					})
				}, i.createElement("div", {
					className: x.a.title
				}, l.fbt._("Sign in for the best experience", null, {
					hk: "1NwkRp"
				})), i.createElement("div", {
					className: x.a.bottom
				}, i.createElement("div", {
					className: x.a.left
				}, i.createElement(u, {
					Icon: _.a,
					onClick: n,
					size: d,
					iconClassName: x.a.googleIcon
				}, l.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), i.createElement(u, {
					Icon: g.a,
					onClick: n,
					size: d,
					iconClassName: x.a.appleIcon,
					className: x.a.appleButton
				}, l.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), i.createElement("div", {
					className: x.a.bottomWrapper
				}, i.createElement(r.i, {
					className: Object(o.a)(x.a.linkButton, x.a.emailButton),
					onClick: n,
					size: r.c.XS
				}, l.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), i.createElement(r.i, {
					className: x.a.linkButton,
					onClick: () => t(Object(c.k)()),
					size: r.c.XS
				}, l.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), i.createElement("div", {
					className: x.a.divider
				}), i.createElement("div", {
					className: x.a.right
				}, i.createElement("img", {
					className: x.a.img,
					src: m
				}), i.createElement("div", {
					className: x.a.downloadAppLabel
				}, l.fbt._("Download the app", null, {
					hk: "1QKyF"
				})))))
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
				return m
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "f", (function() {
				return b
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(a.g, a.d, o.e, (e, t, n) => !e && !t && !n);

			function r(e, t) {
				return n => Object(i.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[l.Cb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = r(l.db, !0),
				m = r(l.eb, !0),
				u = r(l.fb, !0),
				p = r(l.db, !1),
				C = r(l.eb, !1),
				b = r(l.fb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.80a0b39a8309e0d54436.js.map