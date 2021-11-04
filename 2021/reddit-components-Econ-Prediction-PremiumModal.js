// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.5d75ff0b72b4483defcf.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
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
				c = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				n = a("./src/reddit/actions/economics/predictions/index.ts"),
				o = a("./src/reddit/selectors/activeModal.ts"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				m = a("./src/reddit/actions/gold/productOffers.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				g = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = a("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				b = a("./src/reddit/controls/Button/index.tsx"),
				h = a("./src/reddit/helpers/correlationIdTracker.ts"),
				P = a("./src/reddit/helpers/trackers/premium.ts"),
				_ = a("./src/reddit/hooks/useTracking.ts"),
				f = a("./src/reddit/icons/fonts/index.tsx"),
				x = a("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				E = a("./src/reddit/models/Gold/ProductOffer.ts"),
				k = a("./src/reddit/pages/Premium/index.tsx"),
				O = a("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				j = a("./src/reddit/pages/Premium/PremiumButtons/index.tsx"),
				B = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				N = a("./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less"),
				w = a.n(N);
			const {
				fbt: C
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var v = Object(d.a)(({
				title: e,
				description: t,
				footer: a,
				image: i,
				onClose: n
			}) => {
				const o = Object(s.d)(),
					d = Object(_.a)(),
					N = Object(s.e)(B.l),
					v = Object(s.e)(B.o),
					I = Object(h.d)(h.a.GoldPayment, !1);
				Object(r.useEffect)(() => {
					Object(p.a)()
				}, []), Object(r.useEffect)(() => {
					N.length || v || o(Object(g.b)(I)), o(Object(m.c)(E.c.Premium))
				});
				return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
					className: w.a.background,
					style: {
						backgroundImage: "linear-gradient(\n              to right,\n              rgba(0, 0, 0, 0.6) 0%,\n              rgba(0, 0, 0, 0) 50%\n            )",
						backgroundSize: "auto 100%"
					}
				}, i, c.a.createElement(b.t, {
					"aria-label": C._("Close", null, {
						hk: "2xO1CF"
					}),
					className: w.a.closeButton,
					Icon: Object(f.b)("close"),
					onClick: n,
					priority: b.c.Plain
				}), c.a.createElement("div", {
					className: w.a.prediction
				}, c.a.createElement("div", {
					className: w.a.logo
				}, c.a.createElement(x.a, null)), c.a.createElement("h2", {
					className: w.a.title
				}, e), c.a.createElement("h3", {
					className: w.a.description
				}, t), c.a.createElement("p", {
					className: w.a.footer
				}, a))), c.a.createElement("div", {
					className: w.a.premium
				}, c.a.createElement("h3", {
					className: w.a.benefitsText
				}, C._("More Reddit Premium Features", null, {
					hk: "2qvl5q"
				})), c.a.createElement(O.a, null), c.a.createElement(j.a, {
					onClickPackage: (e, t) => {
						o(Object(u.openWithBlob)({
							correlationId: I,
							packageId: e
						})), o(Object(l.i)({
							renewInterval: t
						})), d(P.c({
							renewInterval: t
						}))
					}
				}), c.a.createElement("div", {
					className: w.a.paidPremiumSubtext
				}, k.PAID_PREMIUM_SUBTEXT)))
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
					image: c.a.createElement("img", {
						alt: "Snoo magician in front of a magic ball",
						className: w.a.changePrediction,
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
					image: c.a.createElement("img", {
						alt: "Snoo peeking into curtains",
						className: w.a.sneakPeek,
						src: `${i.a.assetPath}/img/econ/predictions/sneak_peek.png`
					})
				}
			};
			t.default = () => {
				const e = Object(s.d)(),
					{
						feature: t
					} = Object(s.e)(e => Object(o.a)(e));
				if (!t) return null;
				const a = () => e(Object(n.f)());
				return c.a.createElement(v, {
					className: w.a.modal,
					withOverlay: !0,
					onOverlayClick: a,
					onClose: a,
					title: y[t].title,
					description: y[t].description,
					footer: y[t].footer,
					image: y[t].image
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.5d75ff0b72b4483defcf.js.map