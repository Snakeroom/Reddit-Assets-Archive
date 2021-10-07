// https://www.redditstatic.com/desktop2x/SignupUpsell.2e0599d99a1d2f4e46c9.js
// Retrieved at 10/7/2021, 11:00:10 AM by Reddit Dataminer v1.0.0
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
				o = n("./node_modules/react/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/components/Upsell/SSOButton/index.m.less"),
				u = n.n(p);
			var m = function({
					Icon: e,
					children: t,
					onClick: n,
					size: s,
					iconClassName: l,
					className: i
				}) {
					return o.createElement(d.s, {
						className: Object(c.a)(u.a.button, i),
						Icon: e,
						iconClassName: Object(c.a)(u.a.icon, l),
						iconPosition: d.g.L,
						isFullWidth: !0,
						onClick: n,
						priority: d.b.Secondary,
						redditStyle: !0,
						size: s
					}, o.createElement("span", {
						className: u.a.buttonText
					}, t))
				},
				b = n("./src/reddit/constants/promo.ts"),
				g = n("./src/reddit/selectors/telemetry.ts");
			const f = "sso_signup";
			var C;
			! function(e) {
				e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
			}(C || (C = {}));
			const _ = () => e => ({
					...Object(g.defaults)(e),
					source: "popup",
					action: "view",
					noun: f,
					actionInfo: Object(g.actionInfo)(e)
				}),
				x = () => e => ({
					...Object(g.defaults)(e),
					source: "popup",
					action: "dismiss",
					noun: f,
					actionInfo: Object(g.actionInfo)(e)
				}),
				v = e => t => ({
					...Object(g.defaults)(t),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(g.actionInfo)(t, {
						popup_button_text: "signup",
						type: e
					})
				}),
				h = () => e => ({
					...Object(g.defaults)(e),
					source: "popup",
					action: "click",
					noun: f,
					actionInfo: Object(g.actionInfo)(e, {
						popup_button_text: "login"
					})
				});
			var E = n("./src/reddit/hooks/promo/useIsPromoShown.ts"),
				O = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");
			var N = n("./src/reddit/icons/svgs/AppleLogo/index.tsx"),
				j = n("./src/reddit/icons/svgs/Close/index.tsx"),
				w = n("./src/reddit/icons/svgs/GoogleLogo/index.tsx"),
				S = n("./src/reddit/components/Upsell/SignupUpsell/index.m.less"),
				I = n.n(S);
			const B = {
				S: "small",
				L: "large"
			};
			t.default = function({
				onDismiss: e,
				size: t
			}) {
				Object(i.e)(O.a), Object(i.e)(O.c), Object(i.e)(O.e);
				const n = Object(r.b)();
				o.useEffect(() => {
					n(_())
				}, [n]);
				const p = Object(i.d)(),
					u = () => p(Object(a.k)()),
					g = function() {
						const e = Object(E.a)(b.b.SignupUpsellCell),
							t = Object(E.a)(b.b.SignupUpsellCellDismissible),
							n = Object(E.a)(b.b.SignupUpsellBottomSheet),
							l = `${s.a.assetPath}/img/upsell/appQrCode/`;
						if (e) return `${l}bottom_cell.png`;
						if (t) return `${l}bottom_cell_dismissible.png`;
						if (n) return `${l}bottom_sheet.png`;
						throw new Error("Invalid variant for signup upsell")
					}();
				return o.createElement("div", {
					className: Object(c.a)(I.a.wrapper, {
						[I.a.small]: t === B.S,
						[I.a.large]: t === B.L
					})
				}, e && o.createElement("button", {
					"aria-label": l.fbt._("Close", null, {
						hk: "3hZtiD"
					}),
					className: I.a.closeButton,
					onClick: () => {
						e(), n(x())
					},
					type: "button"
				}, o.createElement(j.a, null)), o.createElement("div", {
					className: I.a.title
				}, l.fbt._("Sign in for the best experience", null, {
					hk: "1NwkRp"
				})), o.createElement("div", {
					className: I.a.bottom
				}, o.createElement("div", {
					className: I.a.left
				}, o.createElement(m, {
					Icon: w.a,
					onClick: () => {
						u(), n(v(C.Google))
					},
					size: d.c.M,
					iconClassName: I.a.googleIcon
				}, l.fbt._("Continue with Google", null, {
					hk: "1jIIEZ"
				})), o.createElement(m, {
					Icon: N.a,
					onClick: () => {
						u(), n(v(C.Apple))
					},
					size: d.c.M,
					iconClassName: I.a.appleIcon,
					className: I.a.appleButton
				}, l.fbt._("Continue with Apple", null, {
					hk: "2Jn3ON"
				})), o.createElement("div", {
					className: I.a.bottomWrapper
				}, o.createElement(d.i, {
					className: Object(c.a)(I.a.linkButton, I.a.emailButton),
					onClick: () => {
						u(), n(v(C.Reddit))
					},
					redditStyle: !0,
					size: d.c.XS
				}, l.fbt._("Continue with Email", null, {
					hk: "2zvL1n"
				})), o.createElement(d.i, {
					className: I.a.linkButton,
					onClick: () => {
						(() => p(Object(a.i)()))(), n(h())
					},
					redditStyle: !0,
					size: d.c.XS
				}, l.fbt._("Log In", null, {
					hk: "3HqaJR"
				})))), o.createElement("div", {
					className: I.a.divider
				}), o.createElement("div", {
					className: I.a.right
				}, o.createElement("img", {
					className: I.a.img,
					src: g
				}), o.createElement("div", {
					className: I.a.downloadAppLabel
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
				return p
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				c = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(s.a)(i.g, i.d, c.e, (e, t, n) => !e && !t && !n);

			function r(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: a,
					throttledVariants: {
						[l.Eb.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const d = r(l.fb, !0),
				p = r(l.gb, !0),
				u = r(l.hb, !0),
				m = r(l.fb, !1),
				b = r(l.gb, !1),
				g = r(l.hb, !1)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SignupUpsell.2e0599d99a1d2f4e46c9.js.map