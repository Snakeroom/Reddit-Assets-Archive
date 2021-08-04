// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.cb59c9ac4b99d33f7a6c.js
// Retrieved at 8/4/2021, 7:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsPremiumUpsellModal"], {
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				a = n("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				c = n.n(a);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				description: t,
				iconUrl: n,
				onClick: s,
				title: a,
				isNew: m
			}) => r.a.createElement("div", {
				className: Object(o.a)(e, c.a.container),
				onClick: s
			}, m && r.a.createElement(i.a, {
				className: c.a.new
			}), r.a.createElement("div", {
				className: c.a.icon,
				style: {
					backgroundImage: `url('${n}')`
				}
			}), a && r.a.createElement("h3", {
				className: c.a.title
			}, a), t && r.a.createElement("p", {
				className: c.a.description
			}, t))
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, n) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				a = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				c = n.n(a);
			const m = ({
				className: e,
				onClick: t
			}) => r.a.createElement("button", {
				className: Object(o.a)(c.a.closeButton, e),
				onClick: t
			}, r.a.createElement(i.a, {
				className: c.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, n) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				className: e
			}) => r.a.createElement("span", {
				className: Object(o.a)(a.a.new, e)
			}, c._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less": function(e, t, n) {
			e.exports = {
				checklistItem: "_28J0Q9alOlPf6wQ0eAT47-",
				checklistItemRow: "_1gr7rVleJ6gB2KPuzmT-Xm",
				icon: "_1ZuetslcZ1EjZBs4aPm3j9",
				iconBackground: "_2pVyW8hm-BiFSsbeUtwRtU",
				checklistItemText: "_3lVxjVONYDJMBYgDkRtKW2"
			}
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "POWERUPS_BENEFITS", (function() {
				return C
			})), n.d(t, "PREMIUM_BENEFITS", (function() {
				return v
			})), n.d(t, "PowerupsPremiumUpsellModal", (function() {
				return j
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				p = n("./src/lib/classNames/index.ts"),
				b = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				g = n.n(f);
			const k = ({
					className: e,
					items: t
				}) => o.a.createElement("div", {
					className: e
				}, t.map(e => o.a.createElement(_, {
					key: e,
					className: g.a.checklistItem,
					item: e
				}))),
				_ = ({
					className: e,
					item: t
				}) => o.a.createElement("div", {
					className: Object(p.a)(g.a.checklistItemRow, e)
				}, o.a.createElement("div", {
					className: g.a.iconBackground
				}, o.a.createElement(b.a, {
					className: g.a.icon,
					name: "checkmark_fill"
				})), o.a.createElement("span", {
					className: g.a.checklistItemText
				}, t));
			var h = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				x = n.n(h);
			const y = ({
				className: e,
				body: t,
				buttons: n,
				iconUrl: s,
				title: r
			}) => o.a.createElement("div", {
				className: Object(p.a)(e, x.a.container)
			}, o.a.createElement("div", {
				className: x.a.icon,
				style: {
					backgroundImage: `url('${s}')`
				}
			}), o.a.createElement("h3", {
				className: x.a.title
			}, r), t, o.a.createElement("div", {
				className: x.a.buttons
			}, n));
			var E = n("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				w = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				N = n.n(w);
			const {
				fbt: P
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = ["premium-powerups"], v = ["premium-powerups", "premium-ad-free", "premium-avatars", "premium-monthly-coins"], j = () => {
				const e = Object(i.e)(u.h),
					t = Object(i.d)(),
					n = C.map(e => E.b[e]());
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
					onClick: () => t(Object(c.g)(l.a.ECON_POWERUPS_MARKETING))
				}), o.a.createElement("div", {
					className: N.a.container
				}, o.a.createElement("h1", {
					className: N.a.title
				}, P._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement("div", {
					className: N.a.offers
				}, o.a.createElement(y, {
					title: P._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${s.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(k, {
						items: n
					}),
					buttons: o.a.createElement(d.q, {
						className: N.a.powerupsButton,
						priority: d.b.Secondary,
						isFullWidth: !0
					}, "Price")
				}), o.a.createElement(y, {
					title: P._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${s.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(I, {
						premiumMonthlyCoins: e
					}),
					buttons: o.a.createElement(d.q, {
						className: N.a.powerupsButton,
						priority: d.b.Secondary,
						isFullWidth: !0
					}, "Price")
				})), o.a.createElement("div", {
					className: N.a.footer
				}, P._("Subscriptions automatically renew.", null, {
					hk: "133vve"
				}))))
			};
			t.default = Object(a.a)(j);
			const I = ({
				premiumMonthlyCoins: e
			}) => {
				const t = v.map(t => E.b[t]({
					periodicalCoins: e
				}));
				return o.a.createElement("div", null, o.a.createElement(k, {
					items: t
				}), o.a.createElement("div", {
					className: N.a.andSoMuchMore
				}, P._("And so much more!", null, {
					hk: "oMd"
				})))
			}
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less": function(e, t, n) {
			e.exports = {
				container: "wVUik45NC_6GZ2-YNl-4m",
				icon: "_23WcjD2f0yk7_mAauuHGyM",
				title: "_1rnwdL1d5VJf51jtrrFhtA",
				buttons: "_3Xxv2jtWdhLowDMNMy-dix"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/helpers/trackers/premium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => {
					const {
						packageId: n,
						renewInterval: s
					} = t;
					let o = "";
					if (n) {
						const t = Object(r.i)(e, n);
						if (!t) return null;
						o = t.frequency
					} else s && (o = s);
					return o ? {
						goldPurchase: {
							subscriptionType: o
						}
					} : null
				},
				a = "premium_marketing",
				c = e => t => ({
					source: a,
					action: "click",
					noun: "price",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...o.defaults(t),
					...i(t, e)
				}),
				m = () => e => ({
					source: a,
					action: "click",
					noun: "redeem_code",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...o.defaults(e)
				}),
				l = () => e => ({
					source: a,
					action: "click",
					noun: "manage",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...o.defaults(e)
				}),
				d = e => t => ({
					source: "premium_marketing",
					action: "click",
					noun: "premium_benefit",
					...o.defaults(t),
					goldPurchase: {
						premiumMarketingBenefit: e
					}
				})
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_21g0kYfKRCqWnHX6Hs4EVJ",
				benefit: "_2ZtkpgcwK6dFNvjfEHZZT4"
			}
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			})), n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/helpers/trackers/premium.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				p = n("./src/reddit/selectors/experiments/econ/index.ts"),
				b = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = n("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				g = n.n(f);
			const k = {
					"premium-avatars": () => s.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					"premium-powerups": () => s.fbt._("Monthly Powerup", null, {
						hk: "343Zbm"
					}),
					"premium-app-icons": () => s.fbt._("Custom App Icons", null, {
						hk: "2uGpiC"
					}),
					"premium-ad-free": () => s.fbt._("Ad-free Browsing", null, {
						hk: "2rgG59"
					}),
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => s.fbt._("{amount}Monthly Coins", [s.fbt._param("amount", e ? e + " " : "")], {
						hk: "3rUDgA"
					}),
					"premium-lounge": () => s.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					"premium-awards": () => s.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					"premium-more": () => s.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					"premium-bonus": ({
						bonusCoins: e
					}) => s.fbt._("{amount} Coin Bonus!", [s.fbt._param("amount", e)], {
						hk: "2W5D7B"
					})
				},
				_ = {
					"premium-avatars": () => s.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					"premium-powerups": ({
						isAltruismMessagingEnabled: e
					}) => e ? s.fbt._("Give back to your community", null, {
						hk: "4tHRq3"
					}) : s.fbt._("Help select communities unlock perks", null, {
						hk: "4tX97Z"
					}),
					"premium-app-icons": () => s.fbt._("Change your app icon to something more your style", null, {
						hk: "1WobLA"
					}),
					"premium-ad-free": () => s.fbt._("Enjoy redditing without interruptions from ads", null, {
						hk: "2aDI9B"
					}),
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => s.fbt._("Get {amount} coins a month and make it rain awards", [s.fbt._param("amount", e)], {
						hk: "228nfD"
					}),
					"premium-lounge": () => s.fbt._("Discover all the illuminati secrets in r/lounge", null, {
						hk: "nlK6D"
					}),
					"premium-awards": () => s.fbt._("Give exclusive awards that get more attention", null, {
						hk: "2Dzf3P"
					}),
					"premium-more": () => void 0,
					"premium-bonus": () => s.fbt._("Claim this one-time-only welcome gift", null, {
						hk: "1x9RYJ"
					})
				},
				h = ({
					className: e
				}) => {
					const t = Object(i.e)(b.j),
						n = Object(i.e)(b.h),
						s = Object(i.e)(p.h),
						r = Object(u.a)();
					if (!(null == t ? void 0 : t.length)) return o.a.createElement("div", null, o.a.createElement(l.a, {
						sizePx: 80
					}));
					const {
						signupBonusCoins: f
					} = t[0], h = f && f > 0 ? f.toLocaleString() : void 0, x = s ? [{
						key: "premium-ad-free",
						telemetryTag: "ad_free"
					}, {
						key: "premium-avatars",
						isNew: !0,
						telemetryTag: "avatar"
					}, {
						key: "premium-monthly-coins",
						telemetryTag: "monthly_coins"
					}, {
						key: "premium-powerups",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "powerups"
					}, {
						key: "premium-app-icons",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "app_icons"
					}, {
						key: "premium-lounge",
						telemetryTag: "premium_subreddits"
					}, {
						key: "premium-awards",
						telemetryTag: "premium_awards"
					}] : [{
						key: "premium-ad-free",
						telemetryTag: "ad_free"
					}, {
						key: "premium-avatars",
						isNew: !0,
						telemetryTag: "avatar"
					}, {
						key: "premium-monthly-coins",
						telemetryTag: "monthly_coins"
					}, {
						key: "premium-lounge",
						telemetryTag: "premium_subreddits"
					}, {
						key: "premium-app-icons",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "app_icons"
					}, {
						key: "premium-powerups",
						isNew: !0,
						asterisk: !0,
						telemetryTag: "powerups"
					}, {
						key: "premium-awards",
						telemetryTag: "premium_awards"
					}];
					h ? x.push({
						key: "premium-bonus",
						asterisk: !0,
						telemetryTag: "coin_bonus"
					}) : x.push({
						key: "premium-more",
						telemetryTag: "more_benefits"
					});
					const y = {
						periodicalCoins: n,
						bonusCoins: h,
						isAltruismMessagingEnabled: s
					};
					return o.a.createElement("div", {
						className: Object(c.a)(g.a.container, e)
					}, x.map(e => {
						const {
							key: t,
							isNew: n,
							asterisk: s,
							telemetryTag: i
						} = e;
						return o.a.createElement(m.a, {
							className: g.a.benefit,
							description: _[t](y),
							iconUrl: `${a.a.assetPath}/img/gold/premium-marketing/benefits-icons/${t}.png`,
							key: t,
							title: `${k[t](y)}${s?"*":""}`,
							isNew: n,
							onClick: () => i && r(Object(d.b)(i))
						})
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.cb59c9ac4b99d33f7a6c.js.map