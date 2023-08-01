// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.ac44585cd3c5476ac64b.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return f
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return g
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return E
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return O
			})), r.d(t, "paymentBlobCreated", (function() {
				return j
			})), r.d(t, "openWithBlob", (function() {
				return M
			}));
			var a = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/formatApiError/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(n.a)(P.x),
				f = Object(n.a)(P.e),
				g = (e, t) => async r => {
					r(y(e)), r(Object(d.h)(m.a.ECON_PREMIUM_PURCHASE, t))
				}, E = () => async e => {
					e(Object(d.g)(m.a.ECON_PREMIUM_PURCHASE)), e(f())
				}, O = (e, t) => async (r, a, n) => {
					let {
						apiContext: o
					} = n;
					const d = Object(h.a)(a()),
						m = (null == d ? void 0 : d.pennies) || c.Db,
						u = Object(b.c)(b.a.GoldPayment);
					r(Object(i.stripeTokenPending)());
					const P = await r(Object(i.validateAndCreateStripeToken)(e, t));
					if (P) try {
						const e = await Object(p.f)({
							context: o(),
							correlationId: u,
							pennies: m,
							token: P
						});
						if (e.error) {
							const t = Object(l.a)(e.error);
							r(Object(i.stripeApiError)(t))
						} else r(Object(i.paymentCompleted)({
							confirmed: !1
						}))
					} catch (y) {
						const e = Object(l.a)(y);
						r(Object(i.stripeApiError)(e))
					} else {
						const e = s.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(i.stripeApiError)(e))
					}
				}, j = Object(n.a)(P.z), M = (e, t) => {
					let {
						packageId: r,
						correlationId: s
					} = e;
					return async (e, n, c) => {
						let {
							apiContext: d
						} = c;
						e(g({
							packageId: r,
							correlationId: s
						}, t));
						const m = Object(h.a)(n()),
							p = (null == m ? void 0 : m.paypalButtonId) || a.a.paypal.buttons.premium;
						if (p) try {
							const t = await Object(u.f)({
								buttonId: p,
								context: d(),
								correlationId: s
							});
							if (t.error) {
								const r = Object(l.a)(t.error);
								e(Object(i.paypalApiError)(r))
							} else e(j(t))
						} catch (b) {
							const t = Object(l.a)(b);
							e(Object(i.paypalApiError)(t))
						} else o.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				premiumPurchaseModal: "_23HrteRgGDZ91SGL5oYWAp",
				premiumPurchaseHeader: "_1vNPpspCrQ3W3_z4l8WXD2",
				premiumIcon: "_2IUxk7I3wGLF67ECxWJaKF",
				titleMain: "_23AsioP9LFdnWNWvf2JxuY",
				titleDescription: "UZLxEtKcYjKnAtMic2BtE",
				closeButton: "W3hCwevNo10JOueQq9XCa",
				closeIcon: "_2Y-ZxM1D66jXobSnwtF5zy",
				premiumPurchaseBody: "_1f5Hj-YmiFvUddjOo3BXUn",
				creditCard: "_1mWVaEygz0IbIgt4I7nhA6",
				selectPayment: "_1W5FK94KCTY0oE-NFNp155",
				checkoutFooter: "_1GdfJOpcU3r4Y3Bj3aURo9",
				premiumPurchaseTotal: "_2DF2iuoYj11YJxwHtRl6k2",
				membershipDescription: "_2bHvYuy1c3aeL3OpvcSrzV",
				premiumPurchaseSelectPaymentFooter: "BKDWqNtFTGRZSXrRVdDzB",
				coinBalance: "_3VRMoYSGnuSeMurnm9AnE",
				premiumPurchaseButton: "_1VvnA3djGhzHigTOUn58Dj",
				paymentCompleteHeader: "_1LcmOk7SUoKQdR-v7knn89",
				paymentCompleteTitleMain: "_1UtE2Rjc4QGWjNU3F7ObST",
				paymentCompleteTitleDescription: "Og7AfSzv9RffDd4Ck06B5",
				paymentCompleteTitleItem: "_3SMYmC6QG8OyE_fULA-V0R",
				paymentCompleteTitleItemLast: "_3idbK2oKeR-XNpK_Q-QgIh",
				poweredByStripeIcon: "_3t8d-2wwATteV4UXKFhSb1",
				errorMessage: "_1625HJ3ZMN4xwl3cV7g2E2",
				stripeForm: "Qe2dMlpz4gcQu7Pb44kZ"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				l = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/constants/index.ts"),
				m = r("./src/reddit/models/Gold/Premium/index.ts"),
				u = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				h = r("./src/reddit/components/EmergencyMaintenance/index.tsx"),
				P = r("./src/reddit/components/TrackingHelper/index.tsx"),
				y = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				g = r("./src/reddit/models/User/index.ts"),
				E = r("./src/reddit/selectors/experiments/econ/paymentMethods.ts"),
				O = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/selectors/platform.ts"),
				M = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/models/Gold/ProductOffer.ts"),
				_ = r("./src/reddit/selectors/gold/productOffers.ts"),
				k = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./src/lib/loadRedditAdsPixel.ts"),
				x = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				N = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				w = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				I = r("./src/reddit/hooks/useTracking.ts"),
				T = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				S = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				A = r.n(S);
			var R = e => {
					let {
						onCloseClick: t
					} = e;
					const r = Object(I.a)();
					return Object(a.useEffect)(() => {
						r(Object(f.j)()), Object(v.b)()
					}, [r]), s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: A.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${c.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, s.a.createElement(T.a, {
						className: A.a.premiumIcon,
						title: k.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), s.a.createElement("div", {
						className: A.a.paymentCompleteTitleMain
					}, k.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), s.a.createElement("div", {
						className: A.a.paymentCompleteTitleDescription
					}, s.a.createElement("div", {
						className: A.a.paymentCompleteTitleItem
					}, k.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), s.a.createElement("div", {
						className: A.a.paymentCompleteTitleItem
					}, s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, k.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), s.a.createElement("div", {
						className: A.a.paymentCompleteTitleItemLast
					}, Object(w.a)(k.fbt._("Find more about {anchor text} on Reddit.", [k.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": s.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), s.a.createElement("button", {
						className: A.a.closeButton,
						onClick: t
					}, s.a.createElement(N.b, {
						className: A.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(x.a, {
						onCloseClick: t
					}))
				},
				L = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				F = r("./src/lib/currency/currencies.ts"),
				B = r("./src/lib/localizeCurrency/index.ts"),
				U = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx"),
				D = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx"),
				G = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				Y = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				H = r("./src/reddit/hooks/useLocale.ts"),
				K = r("./src/reddit/hooks/useStripePromise.ts"),
				W = r("./src/reddit/models/Payments/index.ts");
			var z = e => s.a.createElement("div", {
				className: A.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${c.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, s.a.createElement(T.a, {
				className: A.a.premiumIcon,
				title: k.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				}),
				isFilled: !0
			}), s.a.createElement("div", {
				className: A.a.titleMain
			}, k.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), s.a.createElement("div", {
				className: A.a.titleDescription
			}, k.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [k.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), s.a.createElement("button", {
				className: A.a.closeButton,
				onClick: e.onCloseClick
			}, s.a.createElement(N.b, {
				className: A.a.closeIcon,
				"data-redditstyle": !0
			})));
			var Q = e => {
				const t = Object(K.a)(),
					r = Object(H.b)(),
					a = Object(n.d)(),
					o = Object(n.e)(M.m),
					c = Object(B.b)(e.total, {
						locale: r,
						type: F.b.Real
					}),
					l = Object(n.e)(e => Object(_.c)(e, {
						provider: W.b.Stripe
					})),
					i = Object(n.e)(e => Object(_.c)(e, {
						provider: W.b.PayPal
					})),
					m = e.isAnnualPremium ? k.fbt._("yearly", null, {
						hk: "10Ao7X"
					}) : k.fbt._("monthly", null, {
						hk: "2X3LdO"
					}),
					p = e.isAnnualPremium ? k.fbt._("year", null, {
						hk: "4hYQdN"
					}) : k.fbt._("month", null, {
						hk: "1l20Gw"
					}),
					b = null != e.selectedPayment,
					h = e.selectedPayment === d.Mb,
					P = e.selectedPayment === d.Lb,
					y = e.premiumProductOffer && {
						productsCount: 1,
						className: A.a.premiumPurchaseButton,
						productOffer: e.premiumProductOffer,
						pricePackage: h ? i : l,
						onPaymentSuccess: () => {
							o && a(Object(u.e)({
								user: o
							}))
						}
					};
				return s.a.createElement(L.Elements, {
					stripe: t
				}, s.a.createElement(s.a.Fragment, null, s.a.createElement(z, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), s.a.createElement("div", {
					className: A.a.premiumPurchaseBody
				}, s.a.createElement(G.a, {
					className: A.a.selectPayment,
					nightmode: e.nightmode,
					paymentMethods: e.purchaseMethods,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), P && s.a.createElement("div", {
					className: A.a.creditCard
				}, s.a.createElement(L.ElementsConsumer, null, t => {
					let {
						stripe: r
					} = t;
					return s.a.createElement(Y.a, {
						nightmode: e.nightmode,
						className: A.a.stripeForm,
						stripe: r
					})
				})), s.a.createElement("div", {
					className: A.a.checkoutFooter
				}, s.a.createElement("div", {
					className: A.a.premiumPurchaseTotal
				}, k.fbt._("Total: {Price}/{Membership Term}", [k.fbt._param("Price", c), k.fbt._param("Membership Term", m)], {
					hk: "1islUR"
				}))), h && e.paypalErrorMessage && s.a.createElement("div", {
					className: A.a.errorMessage
				}, e.paypalErrorMessage), P && e.stripeErrorMessage && s.a.createElement("div", {
					className: A.a.errorMessage
				}, e.stripeErrorMessage), s.a.createElement("div", {
					className: A.a.membershipDescription
				}, k.fbt._("By completing your purchase, you are agreeing to automatic payments for Reddit Premium and Reddit’s {=User Agreement} and {=Privacy Policy}. Your Premium subscription will auto-renew {Renewal Term} for {Price} (plus tax where applicable). Cancel anytime in User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next {Length of term}. No partial refunds.", [k.fbt._param("=User Agreement", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, k.fbt._("User Agreement", null, {
					hk: "4qnrFW"
				}))), k.fbt._param("=Privacy Policy", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, k.fbt._("Privacy Policy", null, {
					hk: "2PtUaD"
				}))), k.fbt._param("Renewal Term", m), k.fbt._param("Price", c), k.fbt._param("Length of term", p)], {
					hk: "2gscIO"
				}))), b && y && s.a.createElement("div", {
					className: A.a.premiumPurchaseSelectPaymentFooter
				}, h && s.a.createElement(U.a, y), P && s.a.createElement(D.a, y))))
			};

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(o.c)({
					activePremiumPackage: O.a,
					activePage: O.o,
					allowNavigationCallback: e => {
						const t = Object(j.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: M.fb,
					passthrough: O.e,
					purchaseMethods: E.a,
					selectedPayment: O.c,
					stripeErrorMessage: O.j,
					stripeTokenPending: O.n,
					paypalErrorMessage: O.d,
					userName: e => {
						const t = Object(M.m)(e);
						return `u/${Object(g.e)(t)}`
					},
					renewInterval: O.q,
					premiumProductOffer: _.d,
					premiumPrice: _.b
				}),
				q = Object(n.b)(V, (e, t) => ({
					closeModal: () => e(Object(b.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(b.closePremiumPurchaseModal)()),
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t)),
					onLoadSavedCards: () => e(Object(u.d)())
				})),
				Z = Object(l.a)(e => {
					let {
						sendEvent: t,
						activePage: r,
						activePremiumPackage: n,
						className: o,
						nightmode: l,
						selectedPayment: i,
						onPaymentSelected: u,
						onTryCloseModal: p,
						passthrough: b,
						stripeErrorMessage: P,
						stripeTokenPending: g,
						paypalErrorMessage: E,
						purchaseMethods: O,
						userName: j,
						renewInterval: M,
						premiumProductOffer: _,
						premiumPrice: k,
						onLoadSavedCards: v
					} = e, x = d.Db, N = !1;
					_ && k ? (x = k, N = M === C.b.Year) : n && (x = n ? n.pennies : d.Db, N = !!n && n.frequency === m.c.Yearly);
					const w = Object(a.useCallback)(e => {
						if (27 === e.keyCode) return p()
					}, [p]);
					return Object(a.useEffect)(() => (document.addEventListener("keydown", w), Object(y.d)(y.a.GoldPayment, !1), t(Object(f.i)()), () => document.removeEventListener("keydown", w)), [w, t]), Object(a.useEffect)(() => {
						P && t(Object(f.g)())
					}, [t, P]), Object(a.useEffect)(() => {
						v()
					}, [v]), O.size ? s.a.createElement("div", {
						className: o
					}, "selectPayment" === r && s.a.createElement(Q, {
						nightmode: l,
						onCloseModal: p,
						onPaymentSelected: u,
						isAnnualPremium: N,
						passthrough: b,
						paypalButtonId: (null == n ? void 0 : n.paypalButtonId) || c.a.paypal.buttons.premium,
						purchaseMethods: O,
						selectedPayment: i,
						stripeErrorMessage: P,
						stripeTokenPending: g,
						paypalErrorMessage: E,
						premiumProductOffer: _,
						total: x,
						userName: j
					}), "paymentCompleted" === r && s.a.createElement(R, {
						onCloseClick: p
					})) : s.a.createElement(h.a, {
						onClose: p
					})
				});
			t.default = q(Object(P.c)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(f.b)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return s.a.createElement(Z, X({}, this.props, {
						className: Object(i.a)(this.props.className, A.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0
					}))
				}
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.ac44585cd3c5476ac64b.js.map