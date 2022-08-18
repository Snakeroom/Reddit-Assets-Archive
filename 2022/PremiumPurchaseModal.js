// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.74cfb91d2019555e2550.js
// Retrieved at 8/18/2022, 6:00:07 PM by Reddit Dataminer v1.0.0
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
				return O
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return E
			})), r.d(t, "paymentBlobCreated", (function() {
				return j
			})), r.d(t, "openWithBlob", (function() {
				return C
			}));
			var a = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/formatApiError/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(o.a)(P.x),
				f = Object(o.a)(P.e),
				g = (e, t) => async r => {
					r(y(e)), r(Object(d.h)(m.a.ECON_PREMIUM_PURCHASE, t))
				}, O = () => async e => {
					e(Object(d.g)(m.a.ECON_PREMIUM_PURCHASE)), e(f())
				}, E = (e, t) => async (r, a, o) => {
					let {
						apiContext: c
					} = o;
					const d = Object(h.a)(a()),
						m = (null == d ? void 0 : d.pennies) || n.zb,
						u = Object(b.c)(b.a.GoldPayment);
					r(Object(i.stripeTokenPending)());
					const P = await r(Object(i.validateAndCreateStripeToken)(e, t));
					if (P) try {
						const e = await Object(p.f)({
							context: c(),
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
				}, j = Object(o.a)(P.z), C = (e, t) => {
					let {
						packageId: r,
						correlationId: s
					} = e;
					return async (e, o, n) => {
						let {
							apiContext: d
						} = n;
						e(g({
							packageId: r,
							correlationId: s
						}, t));
						const m = Object(h.a)(o()),
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
						} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
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
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				n = r("./src/config.ts"),
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
				O = r("./src/reddit/selectors/experiments/econ/paymentMethods.ts"),
				E = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/selectors/platform.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				M = r("./src/reddit/models/Gold/ProductOffer.ts"),
				_ = r("./src/reddit/selectors/gold/productOffers.ts"),
				k = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./src/lib/loadRedditAdsPixel.ts"),
				x = r("./src/reddit/actions/modal.ts"),
				N = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				w = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				I = r("./src/reddit/constants/modals.ts"),
				T = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				S = r("./src/reddit/hooks/useTracking.ts"),
				A = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				R = r("./src/reddit/selectors/activeModal.ts"),
				U = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				F = r.n(U);
			var L = e => {
					let {
						onCloseClick: t
					} = e;
					const r = Object(S.a)(),
						c = Object(o.d)(),
						l = Object(o.e)(j.s),
						i = Object(o.e)(e => {
							var t, r;
							return null !== (r = null === (t = Object(R.a)(e)) || void 0 === t ? void 0 : t.isPowerupsPremiumPurchase) && void 0 !== r && r
						});
					Object(a.useEffect)(() => {
						r(Object(f.j)()), Object(v.b)()
					}, [r]);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: F.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${n.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, s.a.createElement(A.a, {
						className: F.a.premiumIcon,
						title: k.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), s.a.createElement("div", {
						className: F.a.paymentCompleteTitleMain
					}, k.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), s.a.createElement("div", {
						className: F.a.paymentCompleteTitleDescription
					}, s.a.createElement("div", {
						className: F.a.paymentCompleteTitleItem
					}, k.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), s.a.createElement("div", {
						className: F.a.paymentCompleteTitleItem
					}, s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, k.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), s.a.createElement("div", {
						className: F.a.paymentCompleteTitleItemLast
					}, Object(T.a)(k.fbt._("Find more about {anchor text} on Reddit.", [k.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": s.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), s.a.createElement("button", {
						className: F.a.closeButton,
						onClick: t
					}, s.a.createElement(w.b, {
						className: F.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(N.a, {
						onCloseClick: () => {
							i ? c(Object(x.h)(I.a.ECON_POWERUPS_PURCHASE, {
								subredditId: l
							})) : t()
						},
						buttonText: i ? k.fbt._("Use Your Premium Powerup", null, {
							hk: "1r0NDt"
						}) : null
					}))
				},
				B = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				D = r("./src/lib/currency/currencies.ts"),
				Y = r("./src/lib/localizeCurrency/index.ts"),
				G = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx"),
				H = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx"),
				K = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				z = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				W = r("./src/reddit/hooks/useLocale.ts"),
				Q = r("./src/reddit/hooks/useStripePromise.ts"),
				X = r("./src/reddit/models/Payments/index.ts");
			var V = e => s.a.createElement("div", {
				className: F.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${n.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, s.a.createElement(A.a, {
				className: F.a.premiumIcon,
				title: k.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				}),
				isFilled: !0
			}), s.a.createElement("div", {
				className: F.a.titleMain
			}, k.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), s.a.createElement("div", {
				className: F.a.titleDescription
			}, k.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [k.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), s.a.createElement("button", {
				className: F.a.closeButton,
				onClick: e.onCloseClick
			}, s.a.createElement(w.b, {
				className: F.a.closeIcon,
				"data-redditstyle": !0
			})));
			var Z = e => {
				const t = Object(Q.a)(),
					r = Object(W.b)(),
					a = Object(o.d)(),
					c = Object(o.e)(C.k),
					n = Object(Y.b)(e.total, {
						locale: r,
						type: D.b.Real
					}),
					l = Object(o.e)(e => Object(_.c)(e, {
						provider: X.b.Stripe
					})),
					i = Object(o.e)(e => Object(_.c)(e, {
						provider: X.b.PayPal
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
					h = e.selectedPayment === d.Ib,
					P = e.selectedPayment === d.Hb,
					y = e.premiumProductOffer && {
						productsCount: 1,
						className: F.a.premiumPurchaseButton,
						productOffer: e.premiumProductOffer,
						pricePackage: h ? i : l,
						onPaymentSuccess: () => {
							c && a(Object(u.f)({
								user: c
							}))
						}
					};
				return s.a.createElement(B.Elements, {
					stripe: t
				}, s.a.createElement(s.a.Fragment, null, s.a.createElement(V, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), s.a.createElement("div", {
					className: F.a.premiumPurchaseBody
				}, s.a.createElement(K.a, {
					className: F.a.selectPayment,
					nightmode: e.nightmode,
					paymentMethods: e.purchaseMethods,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), P && s.a.createElement("div", {
					className: F.a.creditCard
				}, s.a.createElement(B.ElementsConsumer, null, t => {
					let {
						stripe: r
					} = t;
					return s.a.createElement(z.a, {
						nightmode: e.nightmode,
						className: F.a.stripeForm,
						stripe: r
					})
				})), s.a.createElement("div", {
					className: F.a.checkoutFooter
				}, s.a.createElement("div", {
					className: F.a.premiumPurchaseTotal
				}, k.fbt._("Total: {Price}/{Membership Term}", [k.fbt._param("Price", n), k.fbt._param("Membership Term", m)], {
					hk: "1islUR"
				}))), h && e.paypalErrorMessage && s.a.createElement("div", {
					className: F.a.errorMessage
				}, e.paypalErrorMessage), P && e.stripeErrorMessage && s.a.createElement("div", {
					className: F.a.errorMessage
				}, e.stripeErrorMessage), s.a.createElement("div", {
					className: F.a.membershipDescription
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
				}))), k.fbt._param("Renewal Term", m), k.fbt._param("Price", n), k.fbt._param("Length of term", p)], {
					hk: "2gscIO"
				}))), b && y && s.a.createElement("div", {
					className: F.a.premiumPurchaseSelectPaymentFooter
				}, h && s.a.createElement(G.a, y), P && s.a.createElement(H.a, y))))
			};

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const J = Object(c.c)({
					activePremiumPackage: E.a,
					activePage: E.n,
					allowNavigationCallback: e => {
						const t = Object(j.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: C.db,
					passthrough: E.e,
					purchaseMethods: O.a,
					selectedPayment: E.c,
					stripeErrorMessage: E.j,
					stripeTokenPending: E.m,
					paypalErrorMessage: E.d,
					userName: e => {
						const t = Object(C.k)(e);
						return `u/${Object(g.e)(t)}`
					},
					renewInterval: E.p,
					premiumProductOffer: _.d,
					premiumPrice: _.b
				}),
				$ = Object(o.b)(J, (e, t) => ({
					closeModal: () => e(Object(b.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(b.closePremiumPurchaseModal)()),
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t)),
					onLoadSavedCards: () => e(Object(u.e)())
				})),
				ee = Object(l.a)(e => {
					let {
						sendEvent: t,
						activePage: r,
						activePremiumPackage: o,
						className: c,
						nightmode: l,
						selectedPayment: i,
						onPaymentSelected: u,
						onTryCloseModal: p,
						passthrough: b,
						stripeErrorMessage: P,
						stripeTokenPending: g,
						paypalErrorMessage: O,
						purchaseMethods: E,
						userName: j,
						renewInterval: C,
						premiumProductOffer: _,
						premiumPrice: k,
						onLoadSavedCards: v
					} = e, x = d.zb, N = !1;
					_ && k ? (x = k, N = C === M.b.Year) : o && (x = o ? o.pennies : d.zb, N = !!o && o.frequency === m.c.Yearly);
					const w = Object(a.useCallback)(e => {
						if (27 === e.keyCode) return p()
					}, [p]);
					return Object(a.useEffect)(() => (document.addEventListener("keydown", w), Object(y.d)(y.a.GoldPayment, !1), t(Object(f.i)()), () => document.removeEventListener("keydown", w)), [w, t]), Object(a.useEffect)(() => {
						P && t(Object(f.g)())
					}, [t, P]), Object(a.useEffect)(() => {
						v()
					}, [v]), E.size ? s.a.createElement("div", {
						className: c
					}, "selectPayment" === r && s.a.createElement(Z, {
						nightmode: l,
						onCloseModal: p,
						onPaymentSelected: u,
						isAnnualPremium: N,
						passthrough: b,
						paypalButtonId: (null == o ? void 0 : o.paypalButtonId) || n.a.paypal.buttons.premium,
						purchaseMethods: E,
						selectedPayment: i,
						stripeErrorMessage: P,
						stripeTokenPending: g,
						paypalErrorMessage: O,
						premiumProductOffer: _,
						total: x,
						userName: j
					}), "paymentCompleted" === r && s.a.createElement(L, {
						onCloseClick: p
					})) : s.a.createElement(h.a, {
						onClose: p
					})
				});
			t.default = $(Object(P.c)(class extends s.a.PureComponent {
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
					return s.a.createElement(ee, q({}, this.props, {
						className: Object(i.a)(this.props.className, F.a.premiumPurchaseModal),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.74cfb91d2019555e2550.js.map