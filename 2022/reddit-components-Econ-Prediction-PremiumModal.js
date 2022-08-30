// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.6ca323466d6f63806fb4.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-PremiumModal"], {
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less": function(e, t, a) {
			e.exports = {
				modal: "_2BtHtL1Zjhoqs7ZiPXcXLg",
				background: "_1iNAKjha6s-badBHwqzsdx",
				prediction: "xSQGzlnjKjnxYjy3ygcB_",
				closeButton: "_1spBLnhd1xieUJvIriZcFW",
				logo: "yRpW8BiM4O5I1UhHhD9wT",
				title: "_2_qEMtk2Rp4_OCPTbSajfM",
				description: "_3wF_pRmOU-jJnR4fgUqDfo",
				footer: "uFf9xao_T8Vmw8takJGOP",
				premium: "TpRHjLyfcN3-aJqyKIGFC",
				benefitsText: "f00uq7n6KmCf8d9S4cXmz",
				paidPremiumSubtext: "_1LYXiiQFBwsbJwFKPkPKAu",
				image: "_330Jsq1HHf7DIx2CLWBEob",
				sneakPeek: "_2ZB9KBzb_AsABPWsegW5-F",
				changePrediction: "DUbTe52Ax5ebrV43igiEy"
			}
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var i = a("./src/config.ts"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				c = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/reddit/actions/economics/predictions/index.ts"),
				o = a("./src/reddit/selectors/activeModal.ts"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				m = a("./src/reddit/actions/gold/productOffers.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				g = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = a("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				h = a("./src/reddit/controls/Button/index.tsx"),
				P = a("./src/reddit/helpers/correlationIdTracker.ts"),
				b = a("./src/reddit/helpers/trackers/premium.ts"),
				f = a("./src/reddit/hooks/usePreloadModal.ts"),
				_ = a("./src/reddit/hooks/useTracking.ts"),
				k = a("./src/reddit/icons/fonts/index.tsx"),
				x = a("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				E = a("./src/reddit/models/Gold/ProductOffer.ts"),
				O = a("./src/reddit/pages/Premium/index.tsx"),
				j = a("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				B = a("./src/reddit/pages/Premium/PremiumButtons/index.tsx"),
				C = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				N = a("./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less"),
				v = a.n(N);
			const {
				fbt: w
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var M = Object(d.a)(e => {
				let {
					title: t,
					description: a,
					footer: i,
					image: n,
					onClose: o
				} = e;
				const d = Object(c.d)(),
					N = Object(_.a)(),
					M = Object(c.e)(C.l),
					I = Object(c.e)(C.o),
					y = Object(P.d)(P.a.GoldPayment, !1);
				Object(f.a)(p.a), Object(r.useEffect)(() => {
					M.length || I || d(Object(g.b)({
						correlationId: y
					})), d(Object(m.d)(E.c.Premium))
				});
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: v.a.background,
					style: {
						backgroundImage: "linear-gradient(\n              to right,\n              rgba(0, 0, 0, 0.6) 0%,\n              rgba(0, 0, 0, 0) 50%\n            )",
						backgroundSize: "auto 100%"
					}
				}, n, s.a.createElement(h.t, {
					"aria-label": w._("Close", null, {
						hk: "2xO1CF"
					}),
					className: v.a.closeButton,
					Icon: Object(k.b)("close"),
					onClick: o,
					priority: h.c.Plain
				}), s.a.createElement("div", {
					className: v.a.prediction
				}, s.a.createElement("div", {
					className: v.a.logo
				}, s.a.createElement(x.a, null)), s.a.createElement("h2", {
					className: v.a.title
				}, t), s.a.createElement("h3", {
					className: v.a.description
				}, a), s.a.createElement("p", {
					className: v.a.footer
				}, i))), s.a.createElement("div", {
					className: v.a.premium
				}, s.a.createElement("h3", {
					className: v.a.benefitsText
				}, w._("More Reddit Premium Features", null, {
					hk: "2qvl5q"
				})), s.a.createElement(j.a, {
					isCompactMode: !0
				}), s.a.createElement(B.a, {
					onClickPackage: (e, t) => {
						d(Object(u.openWithBlob)({
							correlationId: y,
							packageId: e
						})), d(Object(l.i)({
							renewInterval: t
						})), N(b.c({
							renewInterval: t
						}))
					}
				}), s.a.createElement("div", {
					className: v.a.paidPremiumSubtext
				}, O.PAID_PREMIUM_SUBTEXT)))
			});
			const {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js"), y = {
				CHANGE_PREDICTION: {
					title: I._("Change your Prediction with Reddit Premium", null, {
						hk: "10eeE8"
					}),
					description: I._("Having second thoughts? Get Reddit Premium and change your answer twice per prediction.", null, {
						hk: "3xI6kK"
					}),
					footer: I._("Only paid Reddit Premium members can change their predictions.", null, {
						hk: "1aY1cT"
					}),
					image: s.a.createElement("img", {
						alt: "Snoo magician in front of a magic ball",
						className: v.a.changePrediction,
						src: `${i.a.assetPath}/img/econ/predictions/change_prediction.png`
					})
				},
				SNEAK_PEEK: {
					title: I._("See what others have picked with Reddit Premium", null, {
						hk: "2JbsQh"
					}),
					description: I._("Get Reddit Premium and see what others have picked before making your predictions.", null, {
						hk: "4lBlLU"
					}),
					footer: I._("Only paid Reddit Premium members can use Sneak Peek.", null, {
						hk: "2nBIOx"
					}),
					image: s.a.createElement("img", {
						alt: "Snoo peeking into curtains",
						className: v.a.sneakPeek,
						src: `${i.a.assetPath}/img/econ/predictions/sneak_peek.png`
					})
				}
			};
			t.default = () => {
				const e = Object(c.d)(),
					{
						feature: t
					} = Object(c.e)(e => Object(o.a)(e));
				if (!t) return null;
				const a = () => e(Object(n.f)());
				return s.a.createElement(M, {
					className: v.a.modal,
					withOverlay: !0,
					onOverlayClick: a,
					onClose: a,
					title: y[t].title,
					description: y[t].description,
					footer: y[t].footer,
					image: y[t].image
				})
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var i = a("./node_modules/react/index.js");

			function r(e) {
				Object(i.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.6ca323466d6f63806fb4.js.map