// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.bb58e29b8b82b225e76d.js
// Retrieved at 6/30/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldTargetedOfferModal"], {
		"./src/reddit/components/Gold/TargetedOfferModal/index.m.less": function(e, t, a) {
			e.exports = {
				body: "_1UQtkWFUPZx3cvg89p_QO-",
				closeButton: "_2PHvXDbMSTznZwRDUomrbs",
				image: "_2kZDQ62kUfGTcHIrRuMfQI",
				dealTitle: "_3UuGw0seEAMRVnenFXhF5",
				dealDescription: "_2iIqESuZUyMyVKAfMHKOMn",
				deal: "_2FRbR5saJqIMTktiX1pmBx",
				agreementLink: "_1fN_jRgyxLT_P3uWQ3CKY",
				button: "_1hhH7WyB7ddA4S4ouD2FbK"
			}
		},
		"./src/reddit/components/Gold/TargetedOfferModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				o = a.n(n),
				c = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				l = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/helpers/correlationIdTracker.ts"),
				d = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				m = a("./src/reddit/hooks/useTracking.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				b = a("./src/reddit/actions/modal.ts"),
				f = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				p = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = a("./src/reddit/components/Gold/TargetedOfferModal/index.m.less"),
				g = a.n(h);
			const k = Object(s.c)({
				correlationId: e => Object(p.o)(e) || Object(i.d)(i.a.GoldPayment, !1),
				dealCoinPackages: f.d,
				purchasePackageId: p.w
			});
			const O = Object(c.b)(k, e => ({
				onClose: () => {
					e(Object(b.f)())
				},
				onPurchaseClick: (t, a) => {
					e(Object(b.f)()), e(Object(u.b)({
						correlationId: a,
						packageId: t.mobileId
					}))
				}
			}));
			t.default = Object(l.a)(O((function(e) {
				const t = Object(m.a)(),
					{
						correlationId: a,
						dealCoinPackages: c,
						onClose: s,
						onPurchaseClick: l,
						purchasePackageId: i
					} = e,
					u = c.filter(e => e.mobileId === i)[0];
				if (Object(n.useEffect)(() => {
						u && t(Object(d.i)(void 0, u.mobileId))
					}, []), !u) return s(), null;
				const {
					baselineCoins: b,
					baselinePennies: f,
					coins: p,
					dealInfo: h,
					pennies: k,
					mobileId: O
				} = u, y = p - b, P = y > 0, j = f - k, x = k !== f, {
					title: E,
					subtitle: w,
					type: C
				} = h, I = E || ("low_coin_upsell" === C ? r.fbt._("You’re low on coins", null, {
					hk: "2fHrPn"
				}) : r.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), M = w || r.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), T = P ? r.fbt._("Buy {coin amount} for {price} and get {bonus coins} bonus coins", [r.fbt._param("coin amount", b.toLocaleString()), r.fbt._param("price", "$".concat(u.pennies / 100)), r.fbt._param("bonus coins", y.toLocaleString())], {
					hk: "2ZBhdF"
				}) : x ? r.fbt._("Save {baseline price} off normal price!", [r.fbt._param("baseline price", "$".concat(j / 100))], {
					hk: "CRTYf"
				}) : u.description;
				return o.a.createElement(_.d, {
					className: g.a.body
				}, o.a.createElement("button", {
					onClick: () => {
						t(Object(d.b)(void 0, O)), s()
					},
					className: g.a.closeButton
				}, o.a.createElement(_.b, null)), o.a.createElement("img", {
					className: g.a.image,
					src: u.images.marketing["2x"].url
				}), o.a.createElement("h4", {
					className: g.a.dealTitle
				}, I), o.a.createElement("p", {
					className: g.a.dealDescription
				}, M), o.a.createElement("h4", {
					className: g.a.deal
				}, T), o.a.createElement("p", {
					className: g.a.agreementLink
				}, r.fbt._("By purchasing coins, you agree to our {user agreement} and {privacy plicy}", [r.fbt._param("user agreement", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("User Agreement", null, {
					hk: "n6txc"
				}))), r.fbt._param("privacy plicy", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "1yjkQh"
				})), o.a.createElement(_.q, {
					className: g.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(d.a)(O)), l(u, a)
					}
				}, r.fbt._("Purchase", null, {
					hk: "l3q4W"
				})))
			})))
		}
	}
]);
//# sourceMappingURL=GoldTargetedOfferModal.bb58e29b8b82b225e76d.js.map