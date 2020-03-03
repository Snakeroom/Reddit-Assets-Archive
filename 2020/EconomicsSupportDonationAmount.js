// https://www.redditstatic.com/desktop2x/EconomicsSupportDonationAmount.8e0ead5b524c0613f623.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSupportDonationAmount"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return c
			}));
			var s = t("./src/lib/currency/cleanNumber/index.ts");

			function c(e, n) {
				const t = Object(s.a)(e),
					c = parseInt(t) / 100;
				return Math.floor(c) !== c || n ? c.toFixed(2) : String(c)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return s
			}));
			t("./node_modules/core-js/modules/es6.regexp.replace.js");

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/components/Economics/Support/DonationAmount/index.m.less": function(e, n, t) {
			e.exports = {
				container: "es-gDAg0_OhSGxF8C7GZa",
				icon: "_2O5m7yVwIc63JWwRbgbcMh"
			}
		},
		"./src/reddit/components/Economics/Support/DonationAmount/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				o = t("./node_modules/react-redux/es/index.js"),
				r = t("./node_modules/reselect/es/index.js"),
				i = t("./src/lib/classNames/index.ts"),
				a = t("./src/lib/currency/centsToDollars/index.ts"),
				d = t("./src/lib/prettyPrintNumber/index.ts"),
				l = t("./src/reddit/icons/svgs/Dollar/index.tsx"),
				u = t("./src/reddit/selectors/economics.ts"),
				m = t("./src/reddit/components/Economics/Support/DonationAmount/index.m.less"),
				C = t.n(m);
			const x = Object(r.c)({
				amount: u.l
			});
			n.default = Object(o.b)(x)((function(e) {
				return 0 === parseInt(e.amount) ? null : c.a.createElement("div", {
					className: Object(i.a)(C.a.container, e.className)
				}, c.a.createElement(l.a, {
					className: C.a.icon
				}), Object(d.a)(Object(a.a)(e.amount, !0)))
			}))
		},
		"./src/reddit/icons/svgs/Dollar/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s);
			n.a = e => c.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 13 13",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("g", null, c.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M1.90108 1.90127C4.43662 -0.633374 8.5628 -0.634139 11.0983 1.90127C13.6339 4.43668 13.6339 8.56265 11.0983 11.0981C9.83057 12.3665 8.16495 13 6.5001 13C4.83447 13 3.16885 12.3665 1.90108 11.0981C-0.633694 8.56265 -0.633694 4.43668 1.90108 1.90127ZM5.96831 9.9002V10.8202H7.04991V9.8602C7.68242 9.74686 8.14731 9.50353 8.44459 9.1302C8.7482 8.75686 8.9 8.32353 8.9 7.8302C8.9 7.31686 8.73871 6.9102 8.41613 6.6102C8.09987 6.3102 7.60652 6.0802 6.93605 5.9202V4.2602C7.16376 4.31353 7.35667 4.39353 7.5148 4.5002C7.67293 4.60686 7.80892 4.72686 7.92277 4.8602L8.78615 4.0402C8.57742 3.78686 8.33074 3.58686 8.04611 3.4402C7.76148 3.28686 7.42941 3.18686 7.04991 3.14019V2.2002H5.96831V3.14019C5.35478 3.21353 4.88672 3.41686 4.56414 3.7502C4.24788 4.08353 4.08975 4.51353 4.08975 5.0402C4.08975 5.52686 4.24472 5.93353 4.55465 6.2602C4.86458 6.58686 5.37691 6.82686 6.09165 6.9802V8.7802C5.826 8.7402 5.58248 8.65686 5.3611 8.5302C5.13972 8.39686 4.93732 8.2302 4.75389 8.0302L3.9 8.8502C4.14035 9.1302 4.42498 9.36353 4.75389 9.5502C5.0828 9.73686 5.4876 9.85353 5.96831 9.9002ZM5.56034 5.4502C5.45282 5.34353 5.39905 5.19353 5.39905 5.0002C5.39905 4.80686 5.45282 4.64686 5.56034 4.5202C5.67419 4.38686 5.8513 4.29353 6.09165 4.2402V5.7202C5.8513 5.64686 5.67419 5.55686 5.56034 5.4502ZM7.46736 7.5202C7.54959 7.65353 7.5907 7.79353 7.5907 7.9402C7.5907 8.13353 7.53694 8.30353 7.42941 8.4502C7.32188 8.5902 7.15743 8.69353 6.93605 8.7602V7.1802C7.20803 7.26686 7.38514 7.3802 7.46736 7.5202Z"
			})))
		}
	}
]);
//# sourceMappingURL=EconomicsSupportDonationAmount.8e0ead5b524c0613f623.js.map