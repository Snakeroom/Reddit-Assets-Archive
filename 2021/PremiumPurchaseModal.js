// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.46c6464ae6db07a05d3e.js
// Retrieved at 8/5/2021, 6:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			var a = r("./src/lib/sentry/index.ts");

			function n() {
				! function(e, t) {
					if (!e.rdt) {
						var r = e.rdt = function() {
							r.sendEvent ? r.sendEvent.apply(r, arguments) : r.callQueue.push(arguments)
						};
						r.callQueue = [];
						var a = t.createElement("script");
						a.src = "https://www.redditstatic.com/ads/pixel.js", a.async = !0;
						var n = t.getElementsByTagName("script")[0];
						n.parentNode.insertBefore(a, n)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const s = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					a.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return m
			})), r.d(t, "postalCodeInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return f
			})), r.d(t, "stripeApiError", (function() {
				return y
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return P
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return O
			})), r.d(t, "selectSavedCard", (function() {
				return _
			})), r.d(t, "_deleteSavedCard", (function() {
				return j
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return v
			})), r.d(t, "loadSavedCards", (function() {
				return E
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(c.B),
				l = Object(s.a)(c.w),
				m = Object(s.a)(c.b),
				u = Object(s.a)(c.y),
				p = Object(s.a)(c.a),
				b = Object(s.a)(c.E),
				h = Object(s.a)(c.G),
				f = Object(s.a)(c.F),
				y = Object(s.a)(c.D),
				P = e => async (t, r) => {
					const n = r(),
						s = Object(i.h)(n),
						o = Object(i.l)(n),
						{
							token: c,
							error: d
						} = await e.createToken({
							name: s,
							address_zip: o
						});
					if (s.trim()) {
						if (!d && c) return c;
						t(f(d || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(s.a)(c.x), O = Object(s.a)(c.H), _ = Object(s.a)(c.C), j = Object(s.a)(c.g), C = e => async (t, r, {
					apiContext: a
				}) => {
					t(j(e));
					try {
						const t = await Object(o.a)(a(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						n.c.captureException(s)
					}
				}, x = Object(s.a)(c.z), v = Object(s.a)(c.A), E = () => async (e, t, {
					apiContext: r
				}) => {
					e(x());
					try {
						const t = await Object(o.b)(r());
						if (t.error) throw new Error(t.error.type);
						const a = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(v(a)), a[0] && e(_(a[0].cardId))
					} catch (a) {
						n.c.captureException(a), e(v([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return P
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return g
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return _
			})), r.d(t, "paymentBlobCreated", (function() {
				return j
			})), r.d(t, "openWithBlob", (function() {
				return C
			}));
			var a = r("./src/config.ts"),
				n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(s.a)(f.t),
				P = Object(s.a)(f.e),
				g = e => async t => {
					t(y(e)), t(Object(l.h)(m.a.ECON_PREMIUM_PURCHASE))
				}, O = () => async e => {
					e(Object(l.g)(m.a.ECON_PREMIUM_PURCHASE)), e(P())
				}, _ = e => async (t, r, {
					apiContext: a
				}) => {
					const s = Object(h.a)(r()),
						o = (null == s ? void 0 : s.pennies) || c.vb,
						l = Object(b.c)(b.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const m = await t(Object(d.validateAndCreateStripeToken)(e));
					if (m) try {
						const e = await Object(p.h)({
							context: a(),
							correlationId: l,
							pennies: o,
							token: m
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (u) {
						const e = Object(i.a)(u);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, j = Object(s.a)(f.v), C = ({
					packageId: e,
					correlationId: t
				}) => async (r, n, {
					apiContext: s
				}) => {
					r(g({
						packageId: e,
						correlationId: t
					}));
					const c = Object(h.a)(n()),
						l = (null == c ? void 0 : c.paypalButtonId) || a.a.paypal.buttons.premium;
					if (l) try {
						const e = await Object(u.f)({
							buttonId: l,
							context: s(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.paypalApiError)(t))
						} else r(j(e))
					} catch (m) {
						const e = Object(i.a)(m);
						r(Object(d.paypalApiError)(e))
					} else o.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, r) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = r.n(o);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => n.a.createElement("div", {
				className: c.a.purchaseFooter
			}, n.a.createElement(s.i, {
				className: c.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, i._("Done", null, {
				hk: "3s1bT9"
			})))
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
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				m = r("./src/reddit/models/Gold/Premium/index.ts"),
				u = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/colors.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				y = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				P = r("./src/reddit/models/User/index.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				C = r("./src/reddit/selectors/gold/productOffers.ts"),
				x = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./src/lib/loadRedditAdsPixel.ts"),
				E = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				k = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				M = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				w = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				N = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				I = r.n(N);
			class T extends n.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(y.i)()), Object(v.b)()
				}
				render() {
					const e = this.props;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: I.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${c.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, n.a.createElement(w.a, {
						className: I.a.premiumIcon,
						title: x.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), n.a.createElement("div", {
						className: I.a.paymentCompleteTitleMain
					}, x.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), n.a.createElement("div", {
						className: I.a.paymentCompleteTitleDescription
					}, n.a.createElement("div", {
						className: I.a.paymentCompleteTitleItem
					}, x.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), n.a.createElement("div", {
						className: I.a.paymentCompleteTitleItem
					}, n.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, x.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), n.a.createElement("div", {
						className: I.a.paymentCompleteTitleItemLast
					}, Object(M.a)(x.fbt._("Find more about {anchor text} on Reddit.", [x.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": n.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), n.a.createElement("button", {
						className: I.a.closeButton,
						onClick: e.onCloseClick
					}, n.a.createElement(k.b, {
						className: I.a.closeIcon,
						"data-redditstyle": !0
					}))), n.a.createElement(E.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var S = Object(b.c)(T),
				A = r("./node_modules/react-stripe-elements/es/index.js"),
				R = r("./src/reddit/actions/gold/productOfferPurchase.ts");
			var U = ({
					paypalUrl: e,
					finishPaymentCallback: t
				}) => {
					let r = window;
					const n = Object(a.useCallback)(e => {
						const a = s(e);
						"paypal-finish.success.framedmodal" === (null == a ? void 0 : a.type) ? (t(), null == r || r.close()) : "paypal-finish.cancel.framedmodal" === (null == a ? void 0 : a.type) && (null == r || r.close())
					}, [t, r]);
					if (Object(a.useEffect)(() => (window.addEventListener("message", n, !1), () => window.removeEventListener("message", n)), [n]), e) {
						const t = 580,
							a = 740,
							n = Math.max(window.screenX + Math.round((window.outerWidth - t) / 2), 0),
							s = Math.max(window.screenY + Math.round((window.outerHeight - a) / 2), 0);
						r = window.open(`${e}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${a},width=${t},top=${s},left=${n},modal=yes,alwaysRaised=yes`)
					}
					const s = e => {
						try {
							return "string" == typeof e.data ? JSON.parse(e.data) : e.data
						} catch (t) {
							return
						}
					}
				},
				F = r("./src/reddit/hooks/useThunkDispatch.ts"),
				B = r("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var D = ({
					className: e,
					productsCount: t,
					productOffer: r,
					productOfferType: o
				}) => {
					const c = Object(F.a)(),
						i = Object(s.e)(_.j),
						[d, l] = Object(a.useState)(!1),
						[m, u] = Object(a.useState)(""),
						p = Object(a.useCallback)(() => {
							o === j.c.Premium && i && c(Object(R.h)({
								user: i
							}))
						}, [c, o, i]);
					U({
						paypalUrl: m,
						finishPaymentCallback: p
					});
					return n.a.createElement(B.q, {
						onClick: async () => {
							if (!r) return;
							l(!0);
							const e = await c(Object(R.f)(r, !1, t, o));
							(null == e ? void 0 : e.url) && u(e.url), l(!1)
						},
						className: e,
						disabled: d
					}, L._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				},
				G = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: Y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = Object(o.c)({
				isAnonymous: G.c,
				savedCardsPending: g.w,
				stripeTokenPending: g.m
			}), $ = Object(s.b)(H);
			var K = Object(A.injectStripe)($(({
					className: e,
					isAnonymous: t,
					productOffer: r,
					productsCount: a,
					savedCardsPending: o,
					stripe: c,
					stripeTokenPending: i,
					productOfferType: d
				}) => {
					const l = Object(s.d)(),
						m = i || o;
					return n.a.createElement(B.q, {
						onClick: () => {
							c && r && l(Object(R.j)(c, r, t, a, d))
						},
						className: e,
						disabled: m || !c
					}, Y._("Complete purchase", null, {
						hk: "KaR26"
					}))
				})),
				W = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				q = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				Q = r("./src/reddit/hooks/useStripe.ts");
			var V = e => n.a.createElement("div", {
				className: I.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${c.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, n.a.createElement(w.a, {
				className: I.a.premiumIcon,
				title: x.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				})
			}), n.a.createElement("div", {
				className: I.a.titleMain
			}, x.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), n.a.createElement("div", {
				className: I.a.titleDescription
			}, x.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [x.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), n.a.createElement("button", {
				className: I.a.closeButton,
				onClick: e.onCloseClick
			}, n.a.createElement(k.b, {
				className: I.a.closeIcon,
				"data-redditstyle": !0
			})));
			var z = e => {
				const t = Object(Q.a)(),
					r = (e.total / 100).toLocaleString(),
					a = e.isAnnualPremium ? x.fbt._("yearly", null, {
						hk: "10Ao7X"
					}) : x.fbt._("monthly", null, {
						hk: "2X3LdO"
					}),
					s = e.isAnnualPremium ? x.fbt._("year", null, {
						hk: "4hYQdN"
					}) : x.fbt._("month", null, {
						hk: "1l20Gw"
					}),
					o = e.selectedPayment === l.Eb,
					c = e.selectedPayment === l.Db,
					i = o ? D : K;
				return n.a.createElement(A.StripeProvider, {
					stripe: t
				}, n.a.createElement(A.Elements, null, n.a.createElement(n.a.Fragment, null, n.a.createElement(V, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), n.a.createElement("div", {
					className: I.a.premiumPurchaseBody
				}, n.a.createElement(W.a, {
					className: I.a.selectPayment,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), c && n.a.createElement("div", {
					className: I.a.creditCard
				}, n.a.createElement(q.a, {
					nightmode: e.nightmode,
					className: I.a.stripeForm,
					shouldDeleteCardWithGql: !0
				})), n.a.createElement("div", {
					className: I.a.checkoutFooter
				}, n.a.createElement("div", {
					className: I.a.premiumPurchaseTotal
				}, x.fbt._("Total: {Price}/{Membership Term}", [x.fbt._param("Price", `$${r}`), x.fbt._param("Membership Term", a)], {
					hk: "1islUR"
				}))), o && e.paypalErrorMessage && n.a.createElement("div", {
					className: I.a.errorMessage
				}, e.paypalErrorMessage), c && e.stripeErrorMessage && n.a.createElement("div", {
					className: I.a.errorMessage
				}, e.stripeErrorMessage), n.a.createElement("div", {
					className: I.a.membershipDescription
				}, x.fbt._("By completing your purchase, you are agreeing to automatic payments for Reddit Premium and Reddit’s {=User Agreement} and {=Privacy Policy}. Your Premium subscription will auto-renew {Renewal Term} for {Price} (plus tax where applicable). Cancel anytime in User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next {Length of term}. No partial refunds.", [x.fbt._param("=User Agreement", n.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, x.fbt._("User Agreement", null, {
					hk: "4qnrFW"
				}))), x.fbt._param("=Privacy Policy", n.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, x.fbt._("Privacy Policy", null, {
					hk: "2PtUaD"
				}))), x.fbt._param("Renewal Term", a), x.fbt._param("Price", `$${r}`), x.fbt._param("Length of term", s)], {
					hk: "2gscIO"
				}))), n.a.createElement("div", {
					className: I.a.premiumPurchaseSelectPaymentFooter
				}, e.premiumProductOffer && n.a.createElement(i, {
					productsCount: 1,
					className: I.a.premiumPurchaseButton,
					productOffer: e.premiumProductOffer,
					productOfferType: j.c.Premium
				})))))
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
			const J = Object(o.c)({
					activePremiumPackage: g.a,
					activePage: g.n,
					allowNavigationCallback: e => {
						const t = Object(O.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: _.V,
					passthrough: g.e,
					selectedPayment: g.c,
					stripeErrorMessage: g.j,
					stripeTokenPending: g.m,
					paypalErrorMessage: g.d,
					userName: e => {
						const t = Object(_.j)(e);
						return `u/${Object(P.e)(t)}`
					},
					renewInterval: g.p,
					premiumProductOffer: C.d,
					premiumPrice: C.b
				}),
				Z = Object(s.b)(J, (e, t) => ({
					closeModal: () => e(Object(p.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(p.closePremiumPurchaseModal)()),
					onCompletePurchaseClick: t => e(Object(p.stripePremiumPurchaseRequested)(t)),
					onPaymentSelected: t => e(Object(u.selectPaymentMethod)(t))
				})),
				ee = Object(i.a)(({
					sendEvent: e,
					activePage: t,
					activePremiumPackage: r,
					className: s,
					nightmode: o,
					selectedPayment: i,
					onCompletePurchaseClick: d,
					onPaymentSelected: u,
					onTryCloseModal: p,
					passthrough: b,
					stripeErrorMessage: h,
					stripeTokenPending: P,
					paypalErrorMessage: g,
					userName: O,
					renewInterval: _,
					premiumProductOffer: C,
					premiumPrice: x
				}) => {
					let v = l.vb,
						E = !1;
					C && x ? (v = x, E = _ === j.b.Year) : r && (v = r ? r.pennies : l.vb, E = !!r && r.frequency === m.c.Yearly);
					const k = Object(a.useCallback)(e => {
						if (27 === e.keyCode) return p()
					}, [p]);
					return Object(a.useEffect)(() => (document.addEventListener("keydown", k), Object(f.d)(f.a.GoldPayment, !1), e(Object(y.h)()), () => document.removeEventListener("keydown", k)), [k, e]), Object(a.useEffect)(() => {
						h && e(Object(y.f)())
					}, [e, h]), n.a.createElement("div", {
						className: s
					}, "selectPayment" === t && n.a.createElement(z, {
						nightmode: o,
						onCloseModal: p,
						onCompletePurchaseClick: d,
						onPaymentSelected: u,
						isAnnualPremium: E,
						passthrough: b,
						paypalButtonId: (null == r ? void 0 : r.paypalButtonId) || c.a.paypal.buttons.premium,
						selectedPayment: i,
						stripeErrorMessage: h,
						stripeTokenPending: P,
						paypalErrorMessage: g,
						premiumProductOffer: C,
						total: v,
						userName: O
					}), "paymentCompleted" === t && n.a.createElement(S, {
						onCloseClick: p
					}))
				}),
				te = {
					backgroundColor: h.b.overlayReportFlow
				};
			t.default = Z(Object(b.c)(class extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(y.b)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return n.a.createElement(ee, X({}, this.props, {
						className: Object(d.a)(this.props.className, I.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: te,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => n.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			var a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					m = Object(c.a)(l);
				return Object(n.a)(Object(s.a)(t, [o.a]), {
					method: a.hb.POST,
					endpoint: m,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: c
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: c
				};
				return Object(n.a)(Object(s.a)(e, [o.a]), {
					method: a.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, m = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: c,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: c
				};
				return Object(n.a)(Object(s.a)(e, [o.a]), {
					method: a.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, u = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: c,
				pennies: d,
				correlationId: l
			}) => {
				const m = {
					offer_context: t,
					order_id: r,
					coins: c,
					pennies: d,
					correlation_id: l
				};
				return Object(n.a)(Object(s.a)(e, [o.a]), {
					method: a.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: c,
				isAnonymous: d,
				message: l,
				offerContext: m,
				orderId: u,
				pennies: p,
				thingId: b
			}) => {
				const h = {
					award_id: e,
					coins: r,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					offer_context: m,
					order_id: u,
					pennies: p,
					thing_id: b
				};
				return Object(n.a)(Object(s.a)(t, [o.a]), {
					method: a.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: c,
				message: d,
				orderId: l,
				thingId: m
			}) => {
				const u = {
					award_id: e,
					correlation_id: r,
					is_anonymous: c,
					message: d,
					order_id: l,
					thing_id: m
				};
				return Object(n.a)(Object(s.a)(t, [o.a]), {
					method: a.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: u
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);

			function s(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, a) => (a % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var a = r("./node_modules/react-redux/es/index.js");

			function n() {
				return Object(a.d)()
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js");
			const n = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				s = (e, t = !1) => {
					const r = [];
					for (const a in n) {
						const s = n[a];
						(s.priceInCoins <= e || t) && r.push(s)
					}
					return r
				},
				o = e => a.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [a.fbt._plural(e.monthsOfPremium, "number of months"), a.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				c = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.46c6464ae6db07a05d3e.js.map