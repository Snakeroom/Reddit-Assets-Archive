// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.a383755a63c94fd5bf47.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceUserPublicPointsDisplay"], {
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(o.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(a.b)(e, n)
				}
			});
			t.a = Object(i.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					i = `${d.a.assetPath}/${r}`;
				if (e.grey && i.endsWith(".svg")) {
					const t = `url(${i}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: i
				})
			}))
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				token: "_3nQr7AT1U0w1HdVk-xepUB",
				tokenFilled: "_3d-Rpbq-Qb88tf5D_s1rsj",
				tokenGrey: "pvn75ouWnsoKK4l_QS9yI",
				amount: "_3nhTfmUMmYib8x61No0h3r",
				container: "_15KjTxLhBmrJE79nlBUuxb",
				tippable: "_2pUuGtsqXDTCxGGGGr-NXT"
			}
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/governance/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				v = n("./src/reddit/selectors/crypto/points.ts"),
				x = n("./src/reddit/selectors/crypto/wallet.ts"),
				_ = n("./src/reddit/selectors/economics.ts"),
				g = n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				j = n.n(g);
			const O = Object(d.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(v.b)(e, n)
				},
				publicWallet: x.c,
				tippingEnabled: b.d.spTipping,
				userOptedOut: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(_.z)(e, n)
				}
			});
			t.default = Object(p.a)("spPublicPoints", Object(o.b)(O, e => ({
				onHideTooltip: () => e(Object(l.i)()),
				onShowTooltip: t => e(Object(l.f)({
					tooltipId: t
				})),
				onTip: (t, n, r) => e(Object(a.f)({
					recipient: t,
					contentId: n,
					publicAddress: r
				}))
			}))((function(e) {
				if (e.userOptedOut) return null;
				const {
					contentId: t,
					metaSeparator: n,
					pointsDetails: s,
					publicWallet: o,
					subredditId: d,
					username: a
				} = e, l = null == o ? void 0 : o.amount;
				if (!s || !l) return null;
				const b = `public-wallets-${a}-${d}-${t}`,
					p = null == o ? void 0 : o.publicAddress;
				if (!p) return null;
				const v = Object(f.d)(l, s.displayConversion),
					x = e.tippingEnabled && !s.inTransition;
				return i.a.createElement("div", {
					className: Object(c.a)(e.className, j.a.container, {
						[j.a.tippable]: x
					}),
					id: b,
					onClick: t => {
						x && (t.stopPropagation(), e.onTip(e.username, e.contentId, p))
					},
					onMouseEnter: () => e.onShowTooltip(b),
					onMouseLeave: () => e.onHideTooltip(),
					title: x ? "" : r.fbt._("{username} has {amount} {token name}", [r.fbt._param("username", e.username), r.fbt._param("amount", v), r.fbt._param("token name", s.name)], {
						hk: "6WL3V"
					})
				}, i.a.createElement(u.a, {
					className: j.a.tokenFilled,
					subredditId: e.subredditId
				}), i.a.createElement(u.a, {
					grey: !0,
					className: j.a.tokenGrey,
					subredditId: e.subredditId
				}), i.a.createElement("span", {
					className: j.a.amount
				}, v), n, x && i.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: b,
					text: r.fbt._("Tip {username} with {tokenname}", [r.fbt._param("username", e.username), r.fbt._param("tokenname", s.name)], {
						hk: "2Raj4F"
					})
				}))
			})))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(i.b)(r)(e => {
					const {
						featureEnabled: r,
						...i
					} = e, o = i;
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(i(e, t), 10))
			}

			function d(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}

			function c(e) {
				const t = new r.BigNumber(e),
					n = new r.BigNumber("1e18");
				return t.dividedBy(n).toString()
			}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: s.a
				}
			});
			const i = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				o = (e, t) => {
					var n;
					return null === (n = i(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				d = (e, t) => {
					var n, r, s, i;
					return null === (i = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === i ? void 0 : i[t.subredditId]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.a383755a63c94fd5bf47.js.map