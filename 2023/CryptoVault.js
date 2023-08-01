// https://www.redditstatic.com/desktop2x/CryptoVault.7870af8f2318a92e0748.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoVault"], {
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(a.b)(e, n)
				}
			});
			t.a = Object(c.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					c = `${o.a.assetPath}/${r}`;
				if (e.grey && c.endsWith(".svg")) {
					const t = `url(${c}) center/cover`;
					return s.a.createElement("div", {
						className: Object(d.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: c
				})
			}))
		},
		"./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less": function(e, t, n) {
			e.exports = {
				vaultActionPills: "_19E9RnYMHrJz3-6qpKNEnT",
				vaultActionPill: "_3xYvGCCAkxYx0jqLc2lwo2",
				tokenIcon: "_3OdgI42NyvhRMMgW7EWGqg"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/extractQueryParams/index.ts"),
				d = n("./src/lib/mapToObject/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				x = n("./src/reddit/helpers/governance/tokens.ts"),
				f = n("./src/reddit/helpers/richTextJson/index.ts"),
				j = n("./src/reddit/selectors/crypto/points.ts"),
				O = n("./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less"),
				g = n.n(O);

			function y(e) {
				const t = Object(i.d)(),
					n = Object(b.ib)(),
					r = Object(i.e)(e => Object(b.s)(e, {
						pageLayer: n
					})),
					s = Object(i.e)(e => Object(j.b)(e, null == r ? void 0 : r.id)),
					o = Object(f.e)(e.content.document).filter(v.b);
				return r && s && o.length ? c.a.createElement("div", {
					className: g.a.vaultActionPills
				}, o.map(e => c.a.createElement(_, {
					key: e,
					url: e,
					currentSubreddit: r,
					dispatch: t,
					tokenDisplayConversion: s.displayConversion
				}))) : null
			}

			function _(e) {
				let {
					url: t,
					currentSubreddit: n,
					dispatch: s,
					tokenDisplayConversion: i
				} = e;
				var b;
				const f = Object(o.a)(t),
					j = Object(v.a)(Object(d.a)(f)),
					O = null === (b = null == j ? void 0 : j.subreddit) || void 0 === b ? void 0 : b.toLowerCase();
				return j && O && O === n.name.toLowerCase() ? c.a.createElement(p.t, {
					priority: p.c.Plain,
					onClick: () => s(Object(l.h)(m.a.CRYPTO_BURN_POINTS, j)),
					className: g.a.vaultActionPill,
					size: p.d.XS
				}, j.cta || r.fbt._("Burn", null, {
					hk: "4p3rvM"
				}), c.a.createElement(u.a, {
					className: g.a.tokenIcon,
					subredditId: n.id,
					grey: !0
				}), Object(a.a)(Object(x.c)(j.amount, i))) : null
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/extractQueryParams/index.ts"),
				o = n("./src/lib/mapToObject/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/featureFlags/index.ts"),
				b = n("./src/reddit/helpers/crypto/vaultActionLink.ts");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = function(e) {
				const t = Object(c.d)(),
					n = Object(l.ib)(),
					r = Object(c.e)(e => Object(l.s)(e, {
						pageLayer: n
					})),
					v = Object(c.e)(m.d.spBurnLinks),
					{
						children: x,
						...f
					} = e;
				return v ? s.a.createElement(u.default, p({}, f, {
					onClick: n => {
						var s;
						const c = Object(i.a)(e.to.toString()),
							l = Object(b.a)(Object(o.a)(c)),
							u = null === (s = null == l ? void 0 : l.subreddit) || void 0 === s ? void 0 : s.toLowerCase();
						u && u === (null == r ? void 0 : r.name.toLowerCase()) && (t(Object(d.h)(a.a.CRYPTO_BURN_POINTS, l)), n.preventDefault())
					}
				}), x) : s.a.createElement(s.a.Fragment, null, x)
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function s(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} = e;
				return t && n && r && s ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(c(e, t), 10))
			}

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}

			function d(e) {
				const t = new r.BigNumber(e),
					n = new r.BigNumber("1e18");
				return t.dividedBy(n).toString()
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoVault.7870af8f2318a92e0748.js.map