// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.48e25369a6b0034aa83a.js
// Retrieved at 7/10/2023, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-PremiumModal"], {
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var r = i("./src/config.ts"),
				a = i("./node_modules/react/index.js"),
				s = i.n(a),
				c = i("./node_modules/react-redux/es/index.js"),
				n = i("./src/reddit/actions/economics/predictions/index.ts"),
				o = i("./src/reddit/selectors/activeModal.ts"),
				d = i("./src/higherOrderComponents/asModal/index.tsx"),
				l = i("./src/reddit/actions/gold/productOfferPurchase.ts"),
				m = i("./src/reddit/actions/gold/productOffers.ts"),
				u = i("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				g = i("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = i("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				b = i("./src/reddit/controls/Button/index.tsx"),
				h = i("./src/reddit/helpers/correlationIdTracker.ts"),
				P = i("./src/reddit/helpers/trackers/premium.ts"),
				f = i("./src/reddit/hooks/usePreloadModal.ts"),
				_ = i("./src/reddit/hooks/useTracking.ts"),
				x = i("./src/reddit/icons/fonts/index.tsx"),
				k = i("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				O = i("./src/reddit/models/Gold/ProductOffer.ts"),
				E = i("./src/reddit/pages/Premium/index.tsx"),
				j = i("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				B = i("./src/reddit/pages/Premium/PremiumButtons/index.tsx"),
				C = i("./src/reddit/selectors/experiments/econ/index.ts"),
				N = i("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				v = i("./src/reddit/components/Econ/Prediction/PremiumModal/index.m.less"),
				w = i.n(v);
			const {
				fbt: M
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			var y = Object(d.a)(e => {
				let {
					title: t,
					description: i,
					footer: r,
					image: n,
					onClose: o
				} = e;
				const d = Object(c.d)(),
					v = Object(_.a)(),
					y = Object(c.e)(C.d),
					I = Object(c.e)(N.i),
					L = Object(c.e)(N.l),
					S = Object(h.d)(h.a.GoldPayment, !1);
				Object(f.a)(p.a), Object(a.useEffect)(() => {
					I.length || L || d(Object(g.b)({
						correlationId: S
					})), d(Object(m.d)(O.c.Premium))
				});
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: w.a.background,
					style: {
						backgroundImage: "linear-gradient(\n              to right,\n              rgba(0, 0, 0, 0.6) 0%,\n              rgba(0, 0, 0, 0) 50%\n            )",
						backgroundSize: "auto 100%"
					}
				}, n, s.a.createElement(b.t, {
					"aria-label": M._("Close", null, {
						hk: "2xO1CF"
					}),
					className: w.a.closeButton,
					Icon: Object(x.b)("close"),
					onClick: o,
					priority: b.c.Plain
				}), s.a.createElement("div", {
					className: w.a.prediction
				}, s.a.createElement("div", {
					className: w.a.logo
				}, s.a.createElement(k.a, null)), s.a.createElement("h2", {
					className: w.a.title
				}, t), s.a.createElement("h3", {
					className: w.a.description
				}, i), s.a.createElement("p", {
					className: w.a.footer
				}, r))), s.a.createElement("div", {
					className: w.a.premium
				}, s.a.createElement("h3", {
					className: w.a.benefitsText
				}, M._("More Reddit Premium Features", null, {
					hk: "2qvl5q"
				})), s.a.createElement(j.a, {
					isCompactMode: !0
				}), s.a.createElement(B.a, {
					onClickPackage: (e, t) => {
						d(Object(u.openWithBlob)({
							correlationId: S,
							packageId: e
						})), d(Object(l.h)({
							renewInterval: t
						})), v(P.c({
							renewInterval: t
						}))
					}
				}), s.a.createElement("div", {
					className: w.a.paidPremiumSubtext
				}, Object(E.getPaidPremiumSubtext)(y))))
			});
			const {
				fbt: I
			} = i("./node_modules/fbt/lib/FbtPublic.js"), L = {
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
						className: w.a.changePrediction,
						src: `${r.a.assetPath}/img/econ/predictions/change_prediction.png`
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
						className: w.a.sneakPeek,
						src: `${r.a.assetPath}/img/econ/predictions/sneak_peek.png`
					})
				}
			};
			t.default = () => {
				const e = Object(c.d)(),
					{
						feature: t
					} = Object(c.e)(e => Object(o.a)(e));
				if (!t) return null;
				const i = () => e(Object(n.f)());
				return s.a.createElement(y, {
					className: w.a.modal,
					withOverlay: !0,
					onOverlayClick: i,
					onClose: i,
					title: L[t].title,
					description: L[t].description,
					footer: L[t].footer,
					image: L[t].image
				})
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			}));
			var r = i("./node_modules/react/index.js");

			function a(e) {
				Object(r.useEffect)(() => {
					e()
				}, [e])
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-PremiumModal.48e25369a6b0034aa83a.js.map