// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.3c8e29470bda1d6e8e56.js
// Retrieved at 7/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PennyPurchaseModal"], {
		"./node_modules/@stripe/stripe-js/dist/stripe.esm.js": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			var r = "https://js.stripe.com/v3",
				n = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				s = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				o = null,
				c = function(e) {
					return null !== o ? o : o = new Promise((function(t, a) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(s), window.Stripe) t(window.Stripe);
							else try {
								var o = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(r, '"]')), t = 0; t < e.length; t++) {
										var a = e[t];
										if (n.test(a.src)) return a
									}
									return null
								}();
								o && e ? console.warn(s) : o || (o = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										a = document.createElement("script");
									a.src = "".concat(r).concat(t);
									var n = document.head || document.body;
									if (!n) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return n.appendChild(a), a
								}(e)), o.addEventListener("load", (function() {
									window.Stripe ? t(window.Stripe) : a(new Error("Stripe.js not available"))
								})), o.addEventListener("error", (function() {
									a(new Error("Failed to load Stripe.js"))
								}))
							} catch (c) {
								return void a(c)
							} else t(null)
					}))
				},
				i = function(e, t, a) {
					if (null === e) return null;
					var r = e.apply(void 0, t);
					return function(e, t) {
						e && e._registerWrapper && e._registerWrapper({
							name: "stripe-js",
							version: "1.21.1",
							startTime: t
						})
					}(r, a), r
				},
				d = Promise.resolve().then((function() {
					return c(null)
				})),
				l = !1;
			d.catch((function(e) {
				l || console.warn(e)
			}));
			var m = function() {
				for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
				l = !0;
				var r = Date.now();
				return d.then((function(e) {
					return i(e, t, r)
				}))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, a) {
			var r = a("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return r(e) + t
			}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			})), a.d(t, "b", (function() {
				return s
			}));
			var r = a("./src/lib/sentry/index.ts");

			function n() {
				! function(e, t) {
					if (!e.rdt) {
						var a = e.rdt = function() {
							a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
						};
						a.callQueue = [];
						var r = t.createElement("script");
						r.src = "https://www.redditstatic.com/ads/pixel.js", r.async = !0;
						var n = t.getElementsByTagName("script")[0];
						n.parentNode.insertBefore(r, n)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const s = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					r.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return j
			})), a.d(t, "c", (function() {
				return w
			})), a.d(t, "i", (function() {
				return N
			})), a.d(t, "g", (function() {
				return _
			})), a.d(t, "f", (function() {
				return S
			})), a.d(t, "d", (function() {
				return M
			})), a.d(t, "b", (function() {
				return I
			})), a.d(t, "e", (function() {
				return A
			})), a.d(t, "h", (function() {
				return R
			}));
			var r, n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/lodash/omit.js"),
				o = a.n(s),
				c = a("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = a("./src/config.ts"),
				d = (a("./src/reddit/actions/toaster.ts"), a("./src/lib/addQueryParams/index.ts")),
				l = a("./src/lib/makeActionCreator/index.ts"),
				m = a("./src/lib/sentry/index.ts"),
				u = a("./src/reddit/models/Gold/ProductOffer.ts"),
				p = (a("./src/reddit/models/Toast/index.ts"), a("./src/reddit/actions/gold/constants.ts")),
				h = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = a("./src/reddit/selectors/experiments/econ/index.ts"),
				g = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = a("./src/reddit/selectors/user.ts"),
				C = a("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"),
				y = a("./src/redditGQL/types.ts");
			! function(e) {
				e.GenericError = "GenericPurchaseError", e.AccountAgeRestriction = "AccountAgeRestrictionError", e.RateLimiting = "RateLimitingCheckError"
			}(r || (r = {}));
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				P = (e, t) => !!(null == e ? void 0 : e.find(e => e.code === t)),
				v = e => e.map(e => e.message).join(" : "),
				j = (e, t, a, r, s) => async (o, i, d) => {
					let {
						gqlContext: l
					} = d;
					const m = Object(c.a)(),
						u = await Object(C.f)(l(), m, e, t, a, r, s),
						p = u.body,
						{
							errors: h,
							order: b
						} = p.data.createEconOrder;
					if (h && h.length && E(h), u.ok && b) return b.id;
					throw new Error(n.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, E = e => {
					if (P(e, r.GenericError)) throw new Error(n.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "1uV3pC"
					}));
					if (P(e, r.AccountAgeRestriction)) throw new Error(n.fbt._("Your account isn’t old enough to complete this type of purchase yet.", null, {
						hk: "3TMbsU"
					}));
					if (P(e, r.RateLimiting)) throw new Error(n.fbt._("You’ve reached your purchase limit. Try again later", null, {
						hk: "1TwpTd"
					}));
					throw new Error(n.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, O = (e, t) => {
					var a, r;
					(null === (r = null === (a = e.payment_intent) || void 0 === a ? void 0 : a.last_payment_error) || void 0 === r ? void 0 : r.message) ? t(Object(h.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(h.stripeApiError)(e.message)) : t(k)
				}, k = Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), w = e => !!e && e.hasOwnProperty("success"), N = e => {
					let {
						stripe: t,
						stripeElements: a,
						productOffer: r,
						pricePackage: n,
						productsCount: s,
						extraParams: o
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: l
						} = d;
						var p, f;
						const x = i();
						let P, E, w = "";
						try {
							w = await e(j(r, n, s, o, y.K.Stripe))
						} catch (_) {
							return m.c.captureException(_), void(_.message && e(Object(h.stripeApiError)(_.message)))
						}
						e(Object(h.stripeTokenPending)());
						const N = Object(g.z)(x);
						if (N || (P = await e(Object(h.validateAndCreateStripeToken)(t, a)), E = Object(g.w)(x), P))
							if (r.type === u.c.Coinpack && Object(b.p)(x)) try {
								const a = await Object(C.g)(l(), {
									orderId: w,
									provider: y.K.Stripe
								});
								if (!(null == a ? void 0 : a.ok)) return void e(k);
								const {
									body: r
								} = a;
								if (!("data" in r)) return void e(k);
								const {
									errors: n,
									ok: s,
									paymentIntent: o
								} = null !== (p = r.data.createPaymentIntent) && void 0 !== p ? p : {};
								if (null == n ? void 0 : n.length) return void e(Object(h.stripeApiError)(v(n)));
								if (!s || !o) return void e(k);
								const {
									error: c
								} = await t.confirmCardPayment(o.id, {
									payment_method: {
										card: {
											token: P.id
										}
									}
								});
								return c ? O(c, e) : {
									success: !0
								}
							} catch (_) {
								m.c.captureException(_), e(k)
							} else try {
								const a = Object(c.a)(),
									r = N || E ? P && E ? Object(C.i)(l(), a, w, P.id) : N ? Object(C.k)(l(), a, w, N) : null : Object(C.j)(l(), a, w, P.id),
									n = await r;
								if (!(null == n ? void 0 : n.ok)) return void e(k);
								const s = n.body.data.createEconPayment;
								if (null === (f = null == s ? void 0 : s.errors) || void 0 === f ? void 0 : f.length) return void e(Object(h.stripeApiError)(v(s.errors)));
								const {
									ok: o,
									payment: i,
									providerExecution: {
										paymentIntentClientSecret: d
									}
								} = s;
								if (o && i.status === C.a.ActionRequired) {
									const a = await t.confirmCardPayment(d),
										{
											error: r
										} = a;
									if (r) return O(r, e);
									let n;
									if (!(n = N ? await Object(C.e)(l(), Object(c.a)(), i.id, N) : await Object(C.d)(l(), Object(c.a)(), i.id, P.id, E)).ok) return void e(k);
									const s = n.body;
									if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== C.a.Paid) return void e(k)
								} else if (o && i.status !== C.a.Paid) return void e(k);
								return {
									success: !0
								}
							} catch (_) {
								m.c.captureException(_), e(k)
							}
					}
				}, _ = e => {
					let {
						productOffer: t,
						pricePackage: a,
						productsCount: r,
						extraParams: n,
						overrideModalParams: s
					} = e;
					return async (e, o, l) => {
						let {
							gqlContext: u
						} = l;
						var p;
						let b = "";
						try {
							b = await e(j(t, a, r, n, y.K.Paypal))
						} catch (E) {
							return m.c.captureException(E), E.message && e(Object(h.paypalApiError)(E.message)), null
						}
						const g = i.a.redditUrl,
							P = {
								_o: g,
								o: b,
								pt: t.type,
								...s
							};
						try {
							const t = Object(d.a)(`${g}/framedModal/paypal-finish`, {
									...P,
									s: !0
								}),
								a = Object(d.a)(`${g}/framedModal/paypal-finish`, P),
								r = Object(c.a)(),
								n = await Object(C.h)(u(), r, b, t, a);
							if (n && n.ok) {
								const t = n.body.data.createEconPayment;
								if (null === (p = null == t ? void 0 : t.errors) || void 0 === p ? void 0 : p.length) return e(Object(h.paypalApiError)(v(t.errors))), null;
								const a = Object(f.m)(o());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === C.a.ActionRequired) {
										const e = t.providerExecution;
										if (e.orderApprovalUrl) return {
											paymentId: t.payment.id,
											url: e.orderApprovalUrl
										};
										if (e.billingAgreementToken && e.billingAgreementApprovalUrl) return {
											paymentId: t.payment.id,
											token: e.billingAgreementToken,
											url: e.billingAgreementApprovalUrl
										}
									}
									if ("PAID" === e && a) return {
										success: !0
									}
								}
							}
						} catch (E) {
							m.c.captureException(E)
						}
						return e(Object(h.paypalApiError)(x())), null
					}
				}, S = (e, t) => async (a, r, n) => {
					let {
						gqlContext: s
					} = n;
					var o;
					try {
						const r = Object(c.a)(),
							n = await Object(C.c)(s(), r, e, t);
						if (n && n.ok) {
							const e = n.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return a(Object(h.paypalApiError)(v(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						m.c.captureException(i)
					}
					return a(Object(h.paypalApiError)(x())), !1
				}, M = () => async (e, t, a) => {
					let {
						gqlContext: r
					} = a;
					var s;
					if (e(Object(h.savedCardsPending)()), Object(b.p)(t())) e(Object(h.savedCardsSuccess)([]));
					else try {
						const t = await Object(C.m)(r());
						if (t.error) throw e(Object(h.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const a = t.body;
						(null === (s = a.errors) || void 0 === s ? void 0 : s.length) && e(Object(h.stripeApiError)(a.errors[0].message));
						const {
							savedStripeCards: c
						} = a.data.identity, i = c.map(e => o()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(h.savedCardsSuccess)(i)), i[0] && e(Object(h.selectSavedCard)(i[0].cardId))
					} catch (c) {
						m.c.captureException(c), e(Object(h.savedCardsSuccess)([]))
					}
				}, I = e => async (t, a, r) => {
					let {
						gqlContext: n
					} = r;
					t(Object(h.deleteSavedCard)(e));
					try {
						const t = await Object(C.l)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const a = t.body,
							{
								errors: r
							} = a.data.deleteEconPaymentMethod;
						if (r && r.length) throw new Error(v(r))
					} catch (s) {
						m.c.captureException(s)
					}
				}, T = (Object(l.a)(p.M), Object(l.a)(p.N), Object(l.a)(p.O), Object(l.a)(p.P)), A = e => {
					let {
						user: t
					} = e;
					return async e => {
						e(T({
							user: t
						}))
					}
				}, R = Object(l.a)(p.T)
		},
		"./src/reddit/components/CheckoutForm/index.m.less": function(e, t, a) {
			e.exports = {
				formCellWide: "_3WoE3ObhsRzGd3NqoVTQ6D",
				formCell: "_1JGAet5jPDcpg7Tru23HMo",
				cardInput: "_1anVEbF9dn-ObJGVmmlFwL",
				cardInputError: "cNiLkxu8bhSFHcvFVbfAM",
				nameOnCard: "yS2Q83Vi28PL7t1XJExTA",
				errorMessage: "oGQBXeEv9yu4mXmkfKI4Y",
				elementPlaceholder: "_1wqbqqyQ0kPt-0QYCJqWdf"
			}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, a) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(d);
			t.a = e => s.a.createElement("div", {
				className: Object(o.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(r.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [r.fbt._param("Coin icon placeholder", ":coin:"), r.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": s.a.createElement(i.a, null)
			}), " ", s.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, r.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/config.ts"),
				c = a("./src/lib/loadRedditAdsPixel.ts"),
				i = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				m = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				u = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				p = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				h = a.n(p);
			class b extends s.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(m.j)(e)), Object(c.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && r.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: h.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${o.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, s.a.createElement(u.a, {
						className: h.a.coinIcon
					}), s.a.createElement("div", {
						className: h.a.paymentCompleteTitleMain
					}, e.isGild ? r.fbt._("Thanks for purchasing an Award, {username}", [r.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : r.fbt._("Thanks for purchasing Coins, {username}", [r.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), s.a.createElement("div", {
						className: h.a.paymentCompleteTitleDescription
					}, t), s.a.createElement("button", {
						className: h.a.closeButton,
						onClick: e.onCloseClick
					}, s.a.createElement(d.b, {
						className: h.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(i.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(l.c)(b)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return U
			}));
			var r = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				c = a("./src/reddit/hooks/useStripePromise.ts"),
				i = a("./src/lib/constants/index.ts"),
				d = a("./src/lib/currency/currencies.ts"),
				l = a("./src/lib/localizeCurrency/index.ts"),
				m = a("./node_modules/react-redux/es/index.js"),
				u = a("./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx"),
				p = a("./src/reddit/selectors/experiments/econ/index.ts"),
				h = a("./src/lib/classNames/index.ts"),
				b = a("./src/reddit/hooks/useTracking.ts"),
				g = a("./src/reddit/actions/gold/gild.ts"),
				f = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				C = a("./src/reddit/components/CoinBalance/index.tsx"),
				y = a("./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx"),
				x = a("./src/config.ts"),
				P = a("./node_modules/react-dom/index.js"),
				v = a.n(P),
				j = a("./node_modules/reselect/es/index.js"),
				E = a("./src/higherOrderComponents/makeAsync.tsx"),
				O = a("./src/reddit/helpers/loadThirdPartyScript.ts"),
				k = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				N = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const _ = Object(j.c)({
				isGild: e => !!Object(k.t)(e)
			});
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(), this.onAuthorize = e => {
						const {
							orderID: t
						} = e, {
							isGild: a
						} = this.props;
						return this.props.executePayment(a, t)
					}
				}
				render() {
					const {
						className: e
					} = this.props, t = paypalCheckout.Button.driver("react", {
						React: o.a,
						ReactDOM: v.a
					}), a = {
						sandbox: x.a.paypal.apiKey,
						production: x.a.paypal.apiKey
					};
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement(t, {
						env: x.a.paypal.env,
						client: a,
						style: {
							size: "responsive",
							color: "blue",
							shape: "pill",
							label: "paypal",
							tagline: !1
						},
						payment: this.onPayment,
						commit: !0,
						onAuthorize: this.onAuthorize
					}))
				}
			}
			const M = Object(m.b)(_, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(w.d)(t.coinPackage)) : "awardId" in t ? e(Object(N.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (a, r) => {
					if ("coinPackage" in t) {
						if (a) return void e(Object(w.f)(r, t.coinPackage));
						e(Object(w.e)(r, t.coinPackage))
					} else "awardId" in t && e(Object(N.c)(r))
				}
			}))(S);
			var I = Object(E.a)({
					getComponent: () => Object(O.c)().then(() => M),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = a("./src/reddit/controls/Button/index.tsx"),
				A = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				R = a("./src/reddit/selectors/gold/productOffers.ts"),
				B = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				D = a.n(B);
			const {
				fbt: L
			} = a("./node_modules/fbt/lib/FbtPublic.js"), G = e => {
				let {
					award: t,
					coinBalance: a,
					gildThingId: r,
					purchasePackage: n,
					savedCardsPending: s,
					selectedPayment: c,
					stripeTokenPending: d,
					onCompletePurchaseClick: l,
					stripe: x,
					stripeElements: P,
					isIframed: v
				} = e;
				const j = Object(b.a)(),
					E = Object(m.d)(),
					O = Object(m.e)(p.g),
					k = Object(m.e)(R.a),
					w = !!r;
				if (w && !O) {
					const e = () => {
						x && P && (j(Object(A.c)(r)), l(x, P, n))
					};
					return o.a.createElement("div", {
						className: D.a.purchaseSelectPaymentFooter
					}, o.a.createElement(C.a, {
						className: D.a.balance,
						coinBalance: a
					}), c === i.Nb && ((null == t ? void 0 : t.pennyPrice) && r ? o.a.createElement(I, {
						awardId: t.id,
						className: Object(h.a)(D.a.purchaseButton, D.a.paypalCheckoutButton),
						pennies: t.pennyPrice,
						thingId: r
					}) : n && o.a.createElement(I, {
						className: Object(h.a)(D.a.purchaseButton, D.a.paypalCheckoutButton),
						coinPackage: n
					})), c === i.Mb && o.a.createElement(T.l, {
						className: D.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: d || s,
						onClick: e
					}, L._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
				const N = null == k ? void 0 : k.pricePackages.find(e => e.id === (null == n ? void 0 : n.mobileId));
				if (!k || !N || !n) return null;
				if (!(null != c)) return null;
				const _ = c === i.Nb,
					S = c === i.Mb,
					M = {
						className: D.a.purchaseButton,
						productOffer: k,
						pricePackage: N,
						productsCount: N.quantity,
						onButtonClick: () => {
							S && j(Object(A.c)(r)), _ && j(Object(A.d)(r))
						},
						onPaymentSuccess: () => {
							E(Object(f.paymentCompleted)({
								coinsDiff: n.coins,
								confirmed: !1
							})), w && O && E(Object(g.gildGqlRequested)(r, {
								isOldReddit: v
							}))
						}
					};
				return o.a.createElement("div", {
					className: D.a.purchaseSelectPaymentFooter
				}, o.a.createElement(C.a, {
					className: D.a.balance,
					coinBalance: a
				}), _ && o.a.createElement(y.a, M), S && o.a.createElement(u.a, M))
			};
			var F = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Q = a("./src/reddit/hooks/useLocale.ts"),
				V = a("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: H
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var q = e => {
				var t;
				const a = Object(Q.a)();
				return o.a.createElement("div", {
					className: D.a.purchaseHeader,
					style: {
						backgroundImage: `url("${x.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, o.a.createElement(V.a, {
					className: D.a.coinIcon
				}), o.a.createElement("div", {
					className: D.a.titleMain
				}, H._("Buy {amount}!", [H._param("amount", Object(l.b)(e.purchasePackage.coins, {
					locale: a,
					type: d.b.Reddit,
					currency: d.a
				}))], {
					hk: "3VNw69"
				})), o.a.createElement("div", {
					className: D.a.titleDescription
				}, H._("You're purchasing Coins for yourself, {userName}!", [H._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), o.a.createElement("img", {
					className: D.a.goldPackage,
					src: null === (t = e.purchasePackage.images.purchaseSuccess["3x"]) || void 0 === t ? void 0 : t.url
				}), o.a.createElement("button", {
					className: D.a.closeButton,
					onClick: e.onCloseClick
				}, o.a.createElement(F.b, {
					className: D.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var W = e => {
					const t = Object(Q.a)(),
						a = [];
					if (e.purchasePackage && a.push(n.fbt._("{coinCount} will automatically be spent on this {awardName} Award.", [n.fbt._param("coinCount", Object(l.b)(e.award.coinPrice, {
							locale: t,
							type: d.b.Reddit,
							currency: d.a
						})), n.fbt._param("awardName", e.award.name)], {
							hk: "2ImQA8"
						})), e.award.pennyDonate && a.push(n.fbt._("{dollarsDonate} will be donated.", [n.fbt._param("dollarsDonate", Object(l.b)(e.award.pennyDonate, {
							locale: t
						}))], {
							hk: "3jOvCI"
						})), e.award.giverCoinReward) {
						a.push(n.fbt._("As a thank you, you will receive {giverCoinReward}.", [n.fbt._param("giverCoinReward", Object(l.b)(e.award.giverCoinReward, {
							locale: t,
							type: d.b.Reddit,
							currency: d.a
						}))], {
							hk: "20S8v2"
						}));
						const r = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
						r > 0 && r !== e.coinBalance && n.fbt._("You’ll have {remainingCoins} remaining.", [n.fbt._param("remainingCoins", Object(l.b)(r, {
							locale: t,
							type: d.b.Reddit,
							currency: d.a
						}))], {
							hk: "DrEWG"
						})
					}
					return o.a.createElement("div", {
						className: D.a.purchaseGildHeader
					}, o.a.createElement("div", {
						className: D.a.awardTitle
					}, n.fbt._("Give the {awardName} Award", [n.fbt._param("awardName", e.award.name)], {
						hk: "28iR3j"
					})), o.a.createElement("div", {
						className: D.a.awardTitleDescription
					}, a.join(" ")), o.a.createElement("img", {
						className: D.a.awardIcon,
						src: e.award.icon.url
					}), o.a.createElement("button", {
						className: D.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(F.b, {
						className: Object(h.a)(D.a.closeIcon, D.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				J = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				Y = a("./src/reddit/components/StripePaymentForm/index.tsx"),
				z = a("./src/reddit/helpers/createEmojiText/index.tsx");
			const U = e => {
				const t = Object(Q.a)(),
					a = Object(c.a)(),
					s = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return o.a.createElement(r.Elements, {
					stripe: a
				}, o.a.createElement(o.a.Fragment, null, e.gildThingId ? o.a.createElement(W, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && o.a.createElement(q, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), o.a.createElement("div", {
					className: D.a.purchaseBody
				}, o.a.createElement(J.a, {
					className: D.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected,
					paymentMethods: e.purchaseMethods
				}), e.selectedPayment === i.Mb && o.a.createElement(r.ElementsConsumer, null, t => {
					let {
						stripe: a
					} = t;
					return o.a.createElement(Y.a, {
						nightmode: e.nightmode,
						stripe: a
					})
				}), o.a.createElement("div", {
					className: D.a.checkoutFooter
				}, o.a.createElement("div", {
					className: D.a.purchaseTotal
				}, n.fbt._("Total: {totalAmount}", [n.fbt._param("totalAmount", Object(l.b)(s, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === i.Nb && e.paypalErrorMessage && o.a.createElement("div", {
					className: D.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === i.Mb && e.stripeErrorMessage && o.a.createElement("div", {
					className: D.a.errorMessage
				}, e.stripeErrorMessage), o.a.createElement("div", {
					className: D.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? o.a.createElement(o.a.Fragment, null, n.fbt._("The minimum Coins purchase is {coins}.", [n.fbt._param("coins", Object(l.b)(e.purchasePackage.coins, {
						locale: e.locale,
						type: d.b.Reddit,
						currency: d.a
					}))], {
						hk: "1y9FMB"
					}), o.a.createElement("br", null)) : null
				})({
					...e,
					locale: t
				}), Object(z.a)(n.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), o.a.createElement(r.ElementsConsumer, null, t => {
					let {
						stripe: a,
						elements: r
					} = t;
					return o.a.createElement(G, {
						award: e.selectedAward,
						coinBalance: e.coinBalance,
						gildThingId: e.gildThingId,
						onCompletePurchaseClick: e.onCompletePurchaseClick,
						purchasePackage: e.purchasePackage,
						savedCardsPending: e.savedCardsPending,
						selectedPayment: e.selectedPayment,
						stripeTokenPending: e.stripeTokenPending,
						stripe: a,
						stripeElements: r,
						isIframed: e.isIframed
					})
				})))
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				purchaseHeader: "g2a3Zv8q9QUPKkvmhD9dL",
				purchaseGildHeader: "QMHZeOFhvSdgNkN2CTp18",
				coinIcon: "_3alReP5WKjkboxwGTN8Lpb",
				titleMain: "_3jPcOJNUfeN7OdCWA1d5VZ",
				titleDescription: "_1Q6p4vuIwLOxdw0XbHUT8w",
				goldPackage: "_1Zs4anwKjSFfYdqzSlkAcM",
				awardTitle: "_1Xjj9WldJRB-1ed1DXvre4",
				awardTitleDescription: "_2vpRJS-JeaGdKGeNQ2Ol8V",
				awardIcon: "_2zDbtSCEwDNAL2vdRkM5a_",
				closeButton: "_19tq6XZNubN99tY6SeeVQS",
				closeIcon: "_39qPvGtn6v2srEyecX-Q4y",
				awardPurchase: "whOANGCvUvMZjOdtnV1bZ",
				purchaseBody: "_3EtBcIxrPxM_DvmbfXFyCX",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				purchaseTotal: "_1Wq99elhkrt-_gxygdKIRE",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				purchaseSelectPaymentFooter: "PDhzgUep2V87LcZ5msw2j",
				balance: "_3Yby__H8ckQTVIBMfVRI9L",
				purchaseButton: "_1C6JQFckaXQ2JzWIgJKnwA",
				paypalCheckoutButton: "_1Kbe0XzWlb6SJwe3jCy1R3",
				paymentCompleteHeader: "_3Pz3ZE0Flyeud2EZ_rhxs",
				paymentCompleteTitleMain: "OTAmbKrqsrvoZxHWtSAXO",
				paymentCompleteTitleDescription: "_3vjo7IoOcQ9Hv1YmhvnodL",
				errorMessage: "_2ZSesrmixZQhOH6L7Yce5m"
			}
		},
		"./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				o = a("./src/reddit/controls/Button/index.tsx");
			var c = e => {
					let {
						paypalUrl: t,
						finishPaymentCallback: a
					} = e, n = window;
					const s = Object(r.useCallback)(e => {
						const t = o(e);
						"paypal-finish.success.framedmodal" === (null == t ? void 0 : t.type) ? (a(), null == n || n.close()) : "paypal-finish.cancel.framedmodal" === (null == t ? void 0 : t.type) && (null == n || n.close())
					}, [a, n]);
					if (Object(r.useEffect)(() => (window.addEventListener("message", s, !1), () => window.removeEventListener("message", s)), [s]), t) {
						const e = 580,
							a = 740,
							r = Math.max(window.screenX + Math.round((window.outerWidth - e) / 2), 0),
							s = Math.max(window.screenY + Math.round((window.outerHeight - a) / 2), 0);
						n = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${a},width=${e},top=${s},left=${r},modal=yes,alwaysRaised=yes`)
					}
					const o = e => {
						try {
							return "string" == typeof e.data ? JSON.parse(e.data) : e.data
						} catch (t) {
							return
						}
					}
				},
				i = a("./src/reddit/hooks/useThunkDispatch.ts");
			const {
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					productsCount: a,
					productOffer: l,
					pricePackage: m,
					extraParams: u,
					onPaymentSuccess: p,
					onButtonClick: h
				} = e;
				const b = Object(i.a)(),
					[g, f] = Object(r.useState)(!1),
					[C, y] = Object(r.useState)(""),
					x = Object(r.useCallback)(() => {
						p()
					}, [p]);
				c({
					paypalUrl: C,
					finishPaymentCallback: x
				});
				return n.a.createElement(o.t, {
					onClick: async () => {
						if (!l) return;
						null == h || h(), f(!0);
						const e = await b(Object(s.g)({
							productOffer: l,
							pricePackage: m,
							productsCount: a,
							extraParams: u || {}
						}));
						e && (Object(s.c)(e) ? e.success && p() : y(e.url)), f(!1)
					},
					className: t,
					disabled: g
				}, d._("Continue to PayPal", null, {
					hk: "1T4BEy"
				}))
			}
		},
		"./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var r = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = a("./src/reddit/controls/Button/index.tsx"),
				d = a("./src/reddit/hooks/useThunkDispatch.ts"),
				l = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const {
				fbt: m
			} = a("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let {
					className: t,
					productOffer: a,
					pricePackage: u,
					productsCount: p,
					extraParams: h,
					onPaymentSuccess: b,
					onButtonClick: g
				} = e;
				const f = Object(d.a)(),
					C = Object(r.useStripe)(),
					y = Object(r.useElements)(),
					[x, P] = Object(n.useState)(!1),
					v = Object(o.e)(l.x),
					j = Object(o.e)(l.n);
				return s.a.createElement(i.t, {
					onClick: async () => {
						if (!C || !y || !a) return;
						null == g || g(), P(!0);
						const e = await f(Object(c.i)({
							stripe: C,
							stripeElements: y,
							productOffer: a,
							pricePackage: u,
							productsCount: p,
							extraParams: h || {}
						}));
						Object(c.c)(e) && e.success && b(), P(!1)
					},
					className: t,
					disabled: x || j || v || !C
				}, m._("Complete purchase", null, {
					hk: "KaR26"
				}))
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, a) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/reddit/controls/Button/index.tsx"),
				o = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = a.n(o);
			const {
				fbt: i
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					buttonText: t,
					onCloseClick: a
				} = e;
				return n.a.createElement("div", {
					className: c.a.purchaseFooter
				}, n.a.createElement(s.l, {
					className: c.a.purchaseButton,
					"data-redditstyle": !0,
					onClick: a
				}, t || i._("Done", null, {
					hk: "3s1bT9"
				})))
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, a) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				disabled: "_2hrD3Tw9OVOohb3Ep0HV0C",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightMode: "_1BbnbPaXpwTwmI3m0OOyzJ",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/config.ts"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/constants/index.ts"),
				i = a("./src/reddit/components/TrackingHelper/index.tsx"),
				d = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				l = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				m = a.n(l);
			const u = {
					[c.Mb]: ["visa.png", "mastercard.png", "amex.png", "discover.jpg"],
					[c.Nb]: ["paypal.png"]
				},
				p = e => s.a.createElement("label", {
					className: Object(o.a)(e.className, m.a.paymentOption, {
						[m.a.disabled]: e.disabled
					})
				}, !e.disabled && s.a.createElement("input", {
					type: "radio",
					id: e.value,
					name: "payment-option",
					value: e.value,
					checked: e.selectedValue === e.value,
					onChange: e.onChange
				}), s.a.createElement("div", {
					className: Object(o.a)(m.a.paymentOptionContent, {
						[m.a.isNightMode]: e.nightmode
					})
				}, e.children));
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: a,
								onPaymentSelected: r,
								sendEvent: n
							} = this.props;
						switch (t) {
							case c.Mb:
								n(Object(d.e)(a));
								break;
							case c.Nb:
								n(Object(d.f)(a))
						}
						return r(t)
					}
				}
				componentDidMount() {
					const {
						onPaymentSelected: e,
						paymentMethods: t,
						selectedPayment: a
					} = this.props;
					if (a ? !t.has(a) : t.size > 0) {
						const [a] = t;
						e(a)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						paymentMethods: a,
						selectedPayment: n
					} = this.props, o = a.size > 1;
					return s.a.createElement("form", {
						className: e
					}, s.a.createElement("fieldset", null, [...a].map(e => s.a.createElement(p, {
						key: e,
						disabled: !o,
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: e
					}, u[e].map(e => s.a.createElement("div", {
						key: e,
						className: m.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/${e})`
						}
					}))))))
				}
			}
			t.a = Object(i.c)(h)
		},
		"./src/reddit/components/PennyPurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				pennyPurchaseModal: "k-X8UWFEwYv7W3xznPKIr"
			}
		},
		"./src/reddit/components/PennyPurchaseModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/constants/zIndex.ts"),
				d = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/actions/gold/modals.ts"),
				m = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx"),
				b = a("./src/reddit/constants/colors.ts"),
				g = a("./src/reddit/helpers/correlationIdTracker.ts"),
				f = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				C = a("./src/reddit/models/User/index.ts"),
				y = a("./src/reddit/selectors/experiments/econ/paymentMethods.ts"),
				x = a("./src/reddit/selectors/gild.ts"),
				P = a("./src/reddit/selectors/gold/giveAwards.ts"),
				v = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = a("./src/reddit/selectors/platform.ts"),
				E = a("./src/reddit/selectors/user.ts"),
				O = a("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				k = a("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx"),
				w = a("./src/reddit/components/PennyPurchaseModal/index.m.less"),
				N = a.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(o.c)({
					activePage: v.r,
					allowNavigationCallback: e => {
						const t = Object(j.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: E.g,
					gildThingId: v.t,
					isIframed: x.g,
					nightmode: E.fb,
					savedCardsPending: v.x,
					selectedAward: P.b,
					selectedPayment: v.c,
					stripeErrorMessage: v.j,
					stripeTokenPending: v.n,
					paypalErrorMessage: v.d,
					purchaseMethods: y.a,
					userName: e => {
						const t = Object(E.m)(e);
						return `u/${Object(C.e)(t)}`
					}
				}),
				M = Object(s.b)(S, (e, t) => ({
					closeModal: () => {
						e(Object(p.a)()), e(Object(l.a)())
					},
					loadSavedCards: () => e(Object(m.d)()),
					onPaymentSelected: t => e(Object(u.selectPaymentMethod)(t)),
					dispatchCompletePurchase: (t, a, r) => {
						e(Object(p.e)(t, a, r))
					}
				}), (e, t, a) => ({
					...e,
					...t,
					...a,
					onCompletePurchaseClick: (a, r) => t.dispatchCompletePurchase(a, r, e.isIframed)
				}));
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						loadSavedCards: t,
						sendEvent: a
					} = this.props;
					t(), Object(g.d)(g.a.GoldPayment, !1), a(Object(f.i)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(f.g)(e))
					}
				}
				render() {
					const {
						activePage: e,
						className: t,
						coinBalance: a,
						gildThingId: r,
						nightmode: s,
						selectedPayment: o,
						onCompletePurchaseClick: c,
						onPaymentSelected: i,
						onTryCloseModal: d,
						savedCardsPending: l,
						selectedAward: m,
						stripeErrorMessage: u,
						stripeTokenPending: p,
						paypalErrorMessage: h,
						purchaseMethods: b,
						userName: g,
						isIframed: f
					} = this.props;
					return n.a.createElement("div", {
						className: t
					}, "selectPayment" === e && n.a.createElement(k.a, {
						coinBalance: a,
						gildThingId: r,
						nightmode: s,
						onCloseModal: d,
						onCompletePurchaseClick: c,
						onPaymentSelected: i,
						paypalErrorMessage: h,
						purchaseMethods: b,
						savedCardsPending: l,
						selectedAward: m,
						selectedPayment: o,
						stripeErrorMessage: u,
						stripeTokenPending: p,
						userName: g,
						isIframed: f
					}), "paymentCompleted" === e && n.a.createElement(O.a, {
						gildThingId: r,
						isGild: !0,
						onCloseClick: d,
						userName: g
					}))
				}
			}
			const T = Object(c.a)(I);
			t.default = M(Object(h.c)(class extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(f.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: b.a.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: i.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return n.a.createElement(T, _({}, this.props, {
						className: Object(d.a)(this.props.className, N.a.pennyPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/components/StripePaymentForm/index.m.less": function(e, t, a) {
			e.exports = {
				stripePaymentForm: "_3C3Y0w8uwHP67Nd1zwnetc",
				loadingState: "_1s3l8V8wj-crcjY0qsjkQU",
				savedCardState: "_2G3lMKSaxL8NOzpScQZBXf",
				formState: "_3J9W7a4Xz1X7U1aHZnU68_",
				loader: "_22vTMYASXxqNDPunA2LpXa",
				creditCard: "oqvB7OMBlijvKe8ysqodq",
				saveCardCheckbox: "_2uwrJlaChG36r0DkfvHnki",
				poweredByStripeIcon: "_3uwtIFjWV8xl7_GvDbFCMJ",
				savedCardContainer: "_2MPjzw57JoobRxPmlu8OCb",
				cardImageContainer: "_2UfEtRBZKGHh61YQvN-wG5",
				cardImageContainerNightmode: "_28ZdrJfYvnuJaXkQVMVOGq",
				brandImage: "_2mqcWSE8aspsp1q2xC8qBu",
				cardDetails: "_34-t7dxtgTqGxiuyP72aPD",
				unknownCC: "_2tXz9uqxu-ZiBFsHmFWdV6",
				unknownCc: "_2tXz9uqxu-ZiBFsHmFWdV6",
				expiry: "_2Qg2CXB4yQiIH6KZrB9lRT",
				icon: "_1pvlE-J4rOcSVpJdWYQAm-",
				confirmText: "_3_csWXQHhia1pXrA9w9OLK"
			}
		},
		"./src/reddit/components/StripePaymentForm/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				d = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = a("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: p
			} = a("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					className: t
				} = e;
				return n.a.createElement(u.b, {
					className: t
				}, p._("Error loading Stripe, please refresh the page and try again", null, {
					hk: "2O1NWp"
				}))
			};
			var b = a("./node_modules/fbt/lib/FbtPublic.js"),
				g = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				f = a("./src/config.ts"),
				C = a("./src/reddit/components/CheckoutForm/index.m.less"),
				y = a.n(C);
			const x = Object(o.c)({
				cardCvcValidation: m.f,
				cardExpiryValidation: m.g,
				cardName: m.h,
				cardNumberValidation: m.i,
				nameOnCardValidation: m.k,
				postalCodeValidation: m.m,
				postalCode: m.l
			});
			class P extends n.a.Component {
				constructor() {
					super(...arguments), this.computedStyle = getComputedStyle(document.body), this.state = {
						cardNumberReady: !1,
						cardExpiryReady: !1,
						cardCVCReady: !1
					}, this.onChangeCardName = e => {
						const t = e.currentTarget.value;
						t !== this.props.cardName && this.props.onNameInput(t)
					}, this.onChangePostalCode = e => {
						const t = e.currentTarget.value;
						t !== this.props.postalCode && this.props.onPostalCodeInput(t)
					}, this.onCardNumberReady = () => this.setState({
						cardNumberReady: !0
					}), this.onCardExpiryReady = () => this.setState({
						cardExpiryReady: !0
					}), this.onCardCVCReady = () => this.setState({
						cardCVCReady: !0
					})
				}
				render() {
					const {
						className: e,
						cardCvcValidation: t,
						cardExpiryValidation: a,
						cardName: r,
						cardNumberValidation: s,
						onCardNumberChange: o,
						onCardExpiryChange: i,
						onCardCvcChange: d,
						nameOnCardValidation: l,
						postalCode: m,
						postalCodeValidation: u,
						stripe: p
					} = this.props;
					if (!p) return n.a.createElement(h, {
						className: e
					});
					const {
						cardNumberReady: f,
						cardExpiryReady: C,
						cardCVCReady: x
					} = this.state, P = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return n.a.createElement("div", {
						className: Object(c.a)(y.a.checkoutForm, e)
					}, n.a.createElement("div", {
						className: y.a.formCellWide
					}, n.a.createElement("input", {
						"aria-label": b.fbt._("Name on credit or debit card", null, {
							hk: "9i5GO"
						}),
						autoComplete: "cc-name",
						autoCorrect: "off",
						spellCheck: "false",
						className: Object(c.a)(y.a.cardInput, y.a.nameOnCard, {
							[y.a.cardInputError]: !!l
						}),
						name: "name",
						type: "text",
						placeholder: b.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: r
					})), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement(g.CardNumberElement, {
						className: Object(c.a)(y.a.cardInput, {
							[y.a.cardInputError]: !!s
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: b.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: P
						}
					}), !f && n.a.createElement("div", {
						className: y.a.elementPlaceholder
					}, b.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement(g.CardExpiryElement, {
						className: Object(c.a)(y.a.cardInput, {
							[y.a.cardInputError]: !!a
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: b.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: P
						}
					}), !C && n.a.createElement("div", {
						className: y.a.elementPlaceholder
					}, b.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement(g.CardCvcElement, {
						className: Object(c.a)(y.a.cardInput, {
							[y.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: b.fbt._("CVC", null, {
								hk: "1huK7V"
							}).toString(),
							style: P
						}
					}), !x && n.a.createElement("div", {
						className: y.a.elementPlaceholder
					}, b.fbt._("CVC", null, {
						hk: "1huK7V"
					}))), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement("input", {
						"aria-label": b.fbt._("Credit or debit card ZIP/postal code", null, {
							hk: "hzbzK"
						}),
						autoComplete: "postal-code",
						autoCorrect: "off",
						spellCheck: "false",
						className: Object(c.a)(y.a.cardInput, y.a.nameOnCard, {
							[y.a.cardInputError]: !!u
						}),
						name: "zip-code",
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: b.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: m
					})))
				}
			}
			var v = Object(s.b)(x, e => ({
					onCardNumberChange: t => e(Object(d.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(d.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(d.cardCvcChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(d.postalCodeInput)({
						postalCode: t
					}))
				}))(P),
				j = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				E = a("./src/reddit/selectors/experiments/econ/index.ts"),
				O = a("./src/reddit/components/StripePaymentForm/index.m.less"),
				k = a.n(O);
			var w = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: a
					} = e, r = Object(g.useStripe)(), o = Object(s.e)(E.p);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(v, {
						className: k.a.creditCard,
						stripe: r
					}), !o && n.a.createElement(j.a, {
						className: k.a.saveCardCheckbox,
						isSelected: a,
						onClick: t,
						text: b.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), n.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement("img", {
						className: k.a.poweredByStripeIcon,
						src: `${f.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				N = a("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: _
			} = a("./node_modules/fbt/lib/FbtPublic.js"), S = e => 2 === e.length ? e : "0" + e, M = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${f.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${f.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${f.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${f.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class I extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onTrashCanClick = e => {
						e.preventDefault(), this.setState({
							showConfirmText: !0
						})
					}, this.onConfirmClick = e => {
						e.preventDefault();
						const {
							onDelete: t,
							savedCard: a
						} = this.props;
						t(a.cardId)
					}
				}
				render() {
					const {
						savedCard: e
					} = this.props, t = M(e.brand);
					return n.a.createElement("label", {
						className: k.a.savedCardContainer
					}, n.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), n.a.createElement("div", {
						className: Object(c.a)(k.a.cardImageContainer, {
							[k.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? n.a.createElement("img", {
						className: k.a.brandImage,
						src: t
					}) : n.a.createElement("span", {
						className: k.a.unknownCC
					}, "CC")), n.a.createElement("div", {
						className: k.a.cardDetails
					}, n.a.createElement("span", null, _._("Card ending in {Credit Card last four digits}", [_._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), n.a.createElement("span", {
						className: k.a.expiry
					}, _._("Expires {month} / {year}", [_._param("month", S(e.expirationMonth.toString())), _._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? n.a.createElement("button", {
						className: k.a.confirmText,
						onClick: this.onConfirmClick
					}, _._("Confirm", null, {
						hk: "gFhpD"
					})) : n.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, n.a.createElement(N.b, {
						className: k.a.icon
					})))
				}
			}
			var T = I;
			const A = Object(o.c)({
					rememberCard: m.w,
					savedCard: e => Object(m.y)(e)[0],
					stripeInfoLoading: m.x
				}),
				R = Object(s.b)(A, e => ({
					onClickDeleteCard: t => e(Object(i.b)(t)),
					onToggleRememberCard: () => e(Object(d.toggleRememberCard)())
				}));
			class B extends n.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: a,
						onToggleRememberCard: r,
						rememberCard: s,
						savedCard: o,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return n.a.createElement(h, {
						className: Object(c.a)(k.a.stripePaymentForm, e)
					});
					const m = d,
						u = !m && o,
						p = !m && !u,
						b = m ? k.a.loadingState : u ? k.a.savedCardState : k.a.formState;
					return n.a.createElement("div", {
						className: Object(c.a)(k.a.stripePaymentForm, b, e)
					}, m && n.a.createElement(l.a, {
						className: k.a.loader,
						sizePx: 60
					}), u && o && n.a.createElement("form", null, n.a.createElement(T, {
						nightmode: t,
						onDelete: a,
						savedCard: o
					})), p && n.a.createElement(w, {
						onToggleRememberCard: r,
						rememberCard: s
					}))
				}
			}
			t.a = R(B)
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return x
			})), a.d(t, "c", (function() {
				return P
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/uniqueId.js"),
				s = a.n(n),
				o = a("./node_modules/raf/index.js"),
				c = a.n(o),
				i = a("./node_modules/react/index.js"),
				d = a.n(i),
				l = a("./src/lib/classNames/index.ts"),
				m = a("./src/higherOrderComponents/asModal/index.tsx"),
				u = a("./src/reddit/controls/Button/index.tsx"),
				p = a("./src/reddit/layout/row/Inline/index.tsx"),
				h = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = a.n(h);
			var g = Object(m.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(p.a, {
						className: b.a.titleRow
					}, a), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: b.a.buttonRow
					}, d.a.createElement(u.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = a("./src/reddit/controls/ErrorText/index.m.less"),
				C = a.n(f);
			class y extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: a,
						errorModalTitle: n = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(C.a.wrapper, t)
					}, d.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, s), c && d.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: n
					}, a || e))
				}
			}
			const x = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: r,
						fallbackMessage: n,
						messages: s = []
					} = e, o = s.length ? s : n ? [n] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(y, {
						className: a,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				P = e => d.a.createElement(x, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = y
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return C
			})), a.d(t, "g", (function() {
				return y
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "j", (function() {
				return P
			})), a.d(t, "i", (function() {
				return v
			})), a.d(t, "k", (function() {
				return j
			})), a.d(t, "h", (function() {
				return E
			})), a.d(t, "c", (function() {
				return O
			})), a.d(t, "e", (function() {
				return k
			})), a.d(t, "d", (function() {
				return w
			})), a.d(t, "b", (function() {
				return N
			})), a.d(t, "m", (function() {
				return _
			})), a.d(t, "l", (function() {
				return S
			}));
			var r = a("./node_modules/bignumber.js/bignumber.js"),
				n = a.n(r),
				s = a("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				o = a("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = a("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = a("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = a("./src/redditGQL/operations/CreateEconOrder.json"),
				l = a("./src/redditGQL/operations/CreatePaymentIntent.json"),
				m = a("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = a("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = a("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				h = a("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = a("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				g = a("./src/redditGQL/operations/UserSavedStripeCards.json"),
				f = a("./src/lib/makeGqlRequest/index.ts");
			const C = (e, t, a, r, s, o, c) => {
					const i = new n.a(r.price).multipliedBy(s).toFixed();
					return Object(f.a)(e, {
						...d,
						variables: {
							input: {
								nonce: t,
								productId: a.id,
								productVersion: a.version,
								pricePackageId: r.id,
								currency: r.currency,
								price: i,
								productsCount: s.toString(),
								...o,
								paymentProvider: c
							}
						}
					})
				},
				y = (e, t) => Object(f.a)(e, {
					...l,
					variables: {
						input: t
					}
				});
			var x;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(x || (x = {}));
			const P = (e, t, a, r) => Object(f.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: a,
						token: r
					}
				}),
				v = (e, t, a, r) => Object(f.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: a,
						token: r
					}
				}),
				j = (e, t, a, r) => Object(f.a)(e, {
					...h,
					variables: {
						nonce: t,
						orderId: a,
						cardId: r
					}
				}),
				E = (e, t, a, r, n) => Object(f.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: a,
						successUrl: r,
						cancelUrl: n
					}
				}),
				O = (e, t, a, r) => Object(f.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: a,
						token: r
					}
				}),
				k = (e, t, a, r) => Object(f.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: a,
						cardId: r
					}
				}),
				w = (e, t, a, r, n) => Object(f.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: a,
						token: r,
						saveCard: n
					}
				}),
				N = (e, t) => Object(f.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				_ = e => Object(f.a)(e, {
					...g,
					variables: {}
				}),
				S = (e, t) => Object(f.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r);

			function s(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, r) => (r % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : `:${a}:` in t ? e.push(t[`:${a}:`]) : e.push(`:${a}:`), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var r = a("./node_modules/@stripe/stripe-js/dist/stripe.esm.js"),
				n = a("./src/config.ts"),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/selectors/experiments/econ/index.ts"),
				c = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let i = null;

			function d() {
				const e = Object(s.e)(c.a),
					t = Object(s.e)(o.p);
				return i || (i = Object(r.a)(n.a.stripe.apiKey(e), {
					apiVersion: n.a.stripe.apiVersion(t)
				})), i
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var r = a("./node_modules/react-redux/es/index.js");

			function n() {
				return Object(r.d)()
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = a.n(o);
			const i = e => n.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/selectors/experiments/econ/paymentMethods.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = a("./node_modules/reselect/es/index.js"),
				n = a("./src/lib/constants/index.ts"),
				s = a("./src/reddit/constants/experiments.ts"),
				o = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(o.a)(s.kf),
				i = Object(o.a)(s.lf),
				d = Object(r.a)([c, i], (e, t) => new Set([e && n.Nb, t && n.Mb].filter(e => !!e)))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var r = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(n.a)(r.Id)
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"4a9f7376235b"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"b1f066bd7137"}')
		},
		"./src/redditGQL/operations/CreatePaymentIntent.json": function(e) {
			e.exports = JSON.parse('{"id":"e7836733c043"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"91f215ec5196"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/redditGQL/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PennyPurchaseModal.3c8e29470bda1d6e8e56.js.map