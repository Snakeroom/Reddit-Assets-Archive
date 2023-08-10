// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.ca81eddc92dfaa30937e.js
// Retrieved at 8/10/2023, 6:40:04 PM by Reddit Dataminer v1.0.0
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
				return x
			})), a.d(t, "c", (function() {
				return O
			})), a.d(t, "i", (function() {
				return k
			})), a.d(t, "g", (function() {
				return w
			})), a.d(t, "f", (function() {
				return N
			})), a.d(t, "d", (function() {
				return _
			})), a.d(t, "b", (function() {
				return S
			})), a.d(t, "e", (function() {
				return I
			})), a.d(t, "h", (function() {
				return T
			}));
			var r, n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/uuid/dist/esm-browser/v4.js"),
				o = a("./src/config.ts"),
				c = (a("./src/reddit/actions/toaster.ts"), a("./src/lib/addQueryParams/index.ts")),
				i = a("./src/lib/makeActionCreator/index.ts"),
				d = a("./src/lib/sentry/index.ts"),
				l = (a("./src/reddit/models/Toast/index.ts"), a("./src/reddit/actions/gold/constants.ts")),
				m = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = a("./src/reddit/selectors/experiments/econ/index.ts"),
				p = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = a("./src/reddit/selectors/user.ts"),
				b = a("./src/reddit/models/Gold/ProductOffer.ts"),
				g = a("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"),
				f = a("./src/redditGQL/types.ts");
			! function(e) {
				e.GenericError = "GenericPurchaseError", e.AccountAgeRestriction = "AccountAgeRestrictionError", e.RateLimiting = "RateLimitingCheckError"
			}(r || (r = {}));
			const C = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				y = (e, t) => !!(null == e ? void 0 : e.find(e => e.code === t)),
				P = e => e.map(e => e.message).join(" : "),
				x = (e, t, a, r, o) => async (c, i, d) => {
					let {
						gqlContext: l
					} = d;
					const m = Object(s.a)(),
						u = await Object(g.f)(l(), m, e, t, a, r, o),
						p = u.body,
						{
							errors: h,
							order: b
						} = p.data.createEconOrder;
					if (h && h.length && v(h), u.ok && b) return b.id;
					throw new Error(n.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, v = e => {
					if (y(e, r.GenericError)) throw new Error(n.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "1uV3pC"
					}));
					if (y(e, r.AccountAgeRestriction)) throw new Error(n.fbt._("Your account isn’t old enough to complete this type of purchase yet.", null, {
						hk: "3TMbsU"
					}));
					if (y(e, r.RateLimiting)) throw new Error(n.fbt._("You’ve reached your purchase limit. Try again later", null, {
						hk: "1TwpTd"
					}));
					throw new Error(n.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, E = (e, t) => {
					var a, r;
					(null === (r = null === (a = e.payment_intent) || void 0 === a ? void 0 : a.last_payment_error) || void 0 === r ? void 0 : r.message) ? t(Object(m.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(m.stripeApiError)(e.message)) : t(j)
				}, j = Object(m.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), O = e => !!e && e.hasOwnProperty("success"), k = e => {
					let {
						stripe: t,
						stripeElements: a,
						productOffer: r,
						pricePackage: n,
						productsCount: o,
						extraParams: c
					} = e;
					return async (e, i, l) => {
						let {
							gqlContext: h
						} = l;
						var C, y;
						const v = i();
						let O, k, w = "";
						try {
							w = await e(x(r, n, o, c, f.J.Stripe))
						} catch (_) {
							return d.c.captureException(_), void(_.message && e(Object(m.stripeApiError)(_.message)))
						}
						e(Object(m.stripeTokenPending)());
						const N = Object(p.z)(v);
						if (N || (O = await e(Object(m.validateAndCreateStripeToken)(t, a)), k = Object(p.w)(v), O))
							if (r.type === b.c.Coinpack || r.type === b.c.Premium && Object(u.q)(v)) try {
								const a = await Object(g.g)(h(), {
									orderId: w,
									provider: f.J.Stripe
								});
								if (!(null == a ? void 0 : a.ok)) return void e(j);
								const {
									body: r
								} = a;
								if (!("data" in r)) return void e(j);
								const {
									errors: n,
									ok: s,
									paymentIntent: o
								} = null !== (C = r.data.createPaymentIntent) && void 0 !== C ? C : {};
								if (null == n ? void 0 : n.length) return void e(Object(m.stripeApiError)(P(n)));
								if (!s || !o) return void e(j);
								const {
									error: c
								} = await t.confirmCardPayment(o.id, {
									payment_method: {
										card: {
											token: O.id
										}
									}
								});
								return c ? E(c, e) : {
									success: !0
								}
							} catch (_) {
								d.c.captureException(_), e(j)
							} else try {
								const a = Object(s.a)(),
									r = N || k ? O && k ? Object(g.i)(h(), a, w, O.id) : N ? Object(g.k)(h(), a, w, N) : null : Object(g.j)(h(), a, w, O.id),
									n = await r;
								if (!(null == n ? void 0 : n.ok)) return void e(j);
								const o = n.body.data.createEconPayment;
								if (null === (y = null == o ? void 0 : o.errors) || void 0 === y ? void 0 : y.length) return void e(Object(m.stripeApiError)(P(o.errors)));
								const {
									ok: c,
									payment: i,
									providerExecution: {
										paymentIntentClientSecret: d
									}
								} = o;
								if (c && i.status === g.a.ActionRequired) {
									const a = await t.confirmCardPayment(d),
										{
											error: r
										} = a;
									if (r) return E(r, e);
									let n;
									if (!(n = N ? await Object(g.e)(h(), Object(s.a)(), i.id, N) : await Object(g.d)(h(), Object(s.a)(), i.id, O.id, k)).ok) return void e(j);
									const o = n.body;
									if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== g.a.Paid) return void e(j)
								} else if (c && i.status !== g.a.Paid) return void e(j);
								return {
									success: !0
								}
							} catch (_) {
								d.c.captureException(_), e(j)
							}
					}
				}, w = e => {
					let {
						productOffer: t,
						pricePackage: a,
						productsCount: r,
						extraParams: n,
						overrideModalParams: i
					} = e;
					return async (e, l, u) => {
						let {
							gqlContext: p
						} = u;
						var b;
						let y = "";
						try {
							y = await e(x(t, a, r, n, f.J.Paypal))
						} catch (j) {
							return d.c.captureException(j), j.message && e(Object(m.paypalApiError)(j.message)), null
						}
						const v = o.a.redditUrl,
							E = {
								_o: v,
								o: y,
								pt: t.type,
								...i
							};
						try {
							const t = Object(c.a)(`${v}/framedModal/paypal-finish`, {
									...E,
									s: !0
								}),
								a = Object(c.a)(`${v}/framedModal/paypal-finish`, E),
								r = Object(s.a)(),
								n = await Object(g.h)(p(), r, y, t, a);
							if (n && n.ok) {
								const t = n.body.data.createEconPayment;
								if (null === (b = null == t ? void 0 : t.errors) || void 0 === b ? void 0 : b.length) return e(Object(m.paypalApiError)(P(t.errors))), null;
								const a = Object(h.m)(l());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === g.a.ActionRequired) {
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
						} catch (j) {
							d.c.captureException(j)
						}
						return e(Object(m.paypalApiError)(C())), null
					}
				}, N = (e, t) => async (a, r, n) => {
					let {
						gqlContext: o
					} = n;
					var c;
					try {
						const r = Object(s.a)(),
							n = await Object(g.c)(o(), r, e, t);
						if (n && n.ok) {
							const e = n.body.data.confirmEconPayment;
							if (null === (c = null == e ? void 0 : e.errors) || void 0 === c ? void 0 : c.length) return a(Object(m.paypalApiError)(P(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						d.c.captureException(i)
					}
					return a(Object(m.paypalApiError)(C())), !1
				}, _ = () => async e => {
					e(Object(m.savedCardsPending)()), e(Object(m.savedCardsSuccess)([]))
				}, S = e => async (t, a, r) => {
					let {
						gqlContext: n
					} = r;
					t(Object(m.deleteSavedCard)(e));
					try {
						const t = await Object(g.l)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const a = t.body,
							{
								errors: r
							} = a.data.deleteEconPaymentMethod;
						if (r && r.length) throw new Error(P(r))
					} catch (s) {
						d.c.captureException(s)
					}
				}, M = (Object(i.a)(l.M), Object(i.a)(l.N), Object(i.a)(l.O), Object(i.a)(l.P)), I = e => {
					let {
						user: t
					} = e;
					return async e => {
						e(M({
							user: t
						}))
					}
				}, T = Object(i.a)(l.T)
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
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = a("./src/reddit/selectors/experiments/econ/index.ts"),
				m = a("./src/reddit/components/CoinBalance/index.m.less"),
				u = a.n(m);
			t.a = e => {
				return Object(o.e)(l.d) ? null : s.a.createElement("div", {
					className: Object(c.a)(u.a.coinBalance, e.className),
					"data-redditstyle": !0
				}, Object(i.a)(r.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [r.fbt._param("Coin icon placeholder", ":coin:"), r.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
					hk: "2x0upn"
				}), {
					":coin:": s.a.createElement(d.a, null)
				}), " ", s.a.createElement("a", {
					href: "/coins",
					onClick: e.onWhatAreCoinsLinkClick,
					target: "_blank"
				}, r.fbt._("What are Coins?", null, {
					hk: "3fC6PF"
				})))
			}
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
				P = a("./src/config.ts"),
				x = a("./node_modules/react-dom/index.js"),
				v = a.n(x),
				E = a("./node_modules/reselect/es/index.js"),
				j = a("./src/higherOrderComponents/makeAsync.tsx"),
				O = a("./src/reddit/helpers/loadThirdPartyScript.ts"),
				k = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				N = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const _ = Object(E.c)({
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
						sandbox: P.a.paypal.apiKey,
						production: P.a.paypal.apiKey
					};
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement(t, {
						env: P.a.paypal.env,
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
			var I = Object(j.a)({
					getComponent: () => Object(O.c)().then(() => M),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = a("./src/reddit/controls/Button/index.tsx"),
				A = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				B = a("./src/reddit/selectors/gold/productOffers.ts"),
				R = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				L = a.n(R);
			const {
				fbt: D
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
					stripe: P,
					stripeElements: x,
					isIframed: v
				} = e;
				const E = Object(b.a)(),
					j = Object(m.d)(),
					O = Object(m.e)(p.h),
					k = Object(m.e)(B.a),
					w = !!r;
				if (w && !O) {
					const e = () => {
						P && x && (E(Object(A.c)(r)), l(P, x, n))
					};
					return o.a.createElement("div", {
						className: L.a.purchaseSelectPaymentFooter
					}, o.a.createElement(C.a, {
						className: L.a.balance,
						coinBalance: a
					}), c === i.Mb && ((null == t ? void 0 : t.pennyPrice) && r ? o.a.createElement(I, {
						awardId: t.id,
						className: Object(h.a)(L.a.purchaseButton, L.a.paypalCheckoutButton),
						pennies: t.pennyPrice,
						thingId: r
					}) : n && o.a.createElement(I, {
						className: Object(h.a)(L.a.purchaseButton, L.a.paypalCheckoutButton),
						coinPackage: n
					})), c === i.Lb && o.a.createElement(T.l, {
						className: L.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: d || s,
						onClick: e
					}, D._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
				const N = null == k ? void 0 : k.pricePackages.find(e => e.id === (null == n ? void 0 : n.mobileId));
				if (!k || !N || !n) return null;
				if (!(null != c)) return null;
				const _ = c === i.Mb,
					S = c === i.Lb,
					M = {
						className: L.a.purchaseButton,
						productOffer: k,
						pricePackage: N,
						productsCount: N.quantity,
						onButtonClick: () => {
							S && E(Object(A.c)(r)), _ && E(Object(A.d)(r))
						},
						onPaymentSuccess: () => {
							j(Object(f.paymentCompleted)({
								coinsDiff: n.coins,
								confirmed: !1
							})), w && O && j(Object(g.gildGqlRequested)(r, {
								isOldReddit: v
							}))
						}
					};
				return o.a.createElement("div", {
					className: L.a.purchaseSelectPaymentFooter
				}, o.a.createElement(C.a, {
					className: L.a.balance,
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
					className: L.a.purchaseHeader,
					style: {
						backgroundImage: `url("${P.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, o.a.createElement(V.a, {
					className: L.a.coinIcon
				}), o.a.createElement("div", {
					className: L.a.titleMain
				}, H._("Buy {amount}!", [H._param("amount", Object(l.b)(e.purchasePackage.coins, {
					locale: a,
					type: d.b.Reddit,
					currency: d.a
				}))], {
					hk: "3VNw69"
				})), o.a.createElement("div", {
					className: L.a.titleDescription
				}, H._("You're purchasing Coins for yourself, {userName}!", [H._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), o.a.createElement("img", {
					className: L.a.goldPackage,
					src: null === (t = e.purchasePackage.images.purchaseSuccess["3x"]) || void 0 === t ? void 0 : t.url
				}), o.a.createElement("button", {
					className: L.a.closeButton,
					onClick: e.onCloseClick
				}, o.a.createElement(F.b, {
					className: L.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var J = e => {
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
						className: L.a.purchaseGildHeader
					}, o.a.createElement("div", {
						className: L.a.awardTitle
					}, n.fbt._("Give the {awardName} Award", [n.fbt._param("awardName", e.award.name)], {
						hk: "28iR3j"
					})), o.a.createElement("div", {
						className: L.a.awardTitleDescription
					}, a.join(" ")), o.a.createElement("img", {
						className: L.a.awardIcon,
						src: e.award.icon.url
					}), o.a.createElement("button", {
						className: L.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(F.b, {
						className: Object(h.a)(L.a.closeIcon, L.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				W = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				Y = a("./src/reddit/components/StripePaymentForm/index.tsx"),
				z = a("./src/reddit/helpers/createEmojiText/index.tsx");
			const U = e => {
				const t = Object(Q.a)(),
					a = Object(c.a)(),
					s = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return o.a.createElement(r.Elements, {
					stripe: a
				}, o.a.createElement(o.a.Fragment, null, e.gildThingId ? o.a.createElement(J, {
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
					className: L.a.purchaseBody
				}, o.a.createElement(W.a, {
					className: L.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected,
					paymentMethods: e.purchaseMethods
				}), e.selectedPayment === i.Lb && o.a.createElement(r.ElementsConsumer, null, t => {
					let {
						stripe: a
					} = t;
					return o.a.createElement(Y.a, {
						nightmode: e.nightmode,
						stripe: a
					})
				}), o.a.createElement("div", {
					className: L.a.checkoutFooter
				}, o.a.createElement("div", {
					className: L.a.purchaseTotal
				}, n.fbt._("Total: {totalAmount}", [n.fbt._param("totalAmount", Object(l.b)(s, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === i.Mb && e.paypalErrorMessage && o.a.createElement("div", {
					className: L.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === i.Lb && e.stripeErrorMessage && o.a.createElement("div", {
					className: L.a.errorMessage
				}, e.stripeErrorMessage), o.a.createElement("div", {
					className: L.a.agreementLink
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
					P = Object(r.useCallback)(() => {
						p()
					}, [p]);
				c({
					paypalUrl: C,
					finishPaymentCallback: P
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
					[P, x] = Object(n.useState)(!1),
					v = Object(o.e)(l.x),
					E = Object(o.e)(l.n);
				return s.a.createElement(i.t, {
					onClick: async () => {
						if (!C || !y || !a) return;
						null == g || g(), x(!0);
						const e = await f(Object(c.i)({
							stripe: C,
							stripeElements: y,
							productOffer: a,
							pricePackage: u,
							productsCount: p,
							extraParams: h || {}
						}));
						Object(c.c)(e) && e.success && b(), x(!1)
					},
					className: t,
					disabled: P || E || v || !C
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
					[c.Lb]: ["visa.png", "mastercard.png", "amex.png", "discover.jpg"],
					[c.Mb]: ["paypal.png"]
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
							case c.Lb:
								n(Object(d.e)(a));
								break;
							case c.Mb:
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
				P = a("./src/reddit/selectors/gild.ts"),
				x = a("./src/reddit/selectors/gold/giveAwards.ts"),
				v = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = a("./src/reddit/selectors/platform.ts"),
				j = a("./src/reddit/selectors/user.ts"),
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
						const t = Object(E.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: j.g,
					gildThingId: v.t,
					isIframed: P.g,
					nightmode: j.fb,
					savedCardsPending: v.x,
					selectedAward: x.b,
					selectedPayment: v.c,
					stripeErrorMessage: v.j,
					stripeTokenPending: v.n,
					paypalErrorMessage: v.d,
					purchaseMethods: y.a,
					userName: e => {
						const t = Object(j.m)(e);
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
			var b = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				g = a("./src/config.ts"),
				f = a("./node_modules/fbt/lib/FbtPublic.js"),
				C = a("./src/reddit/components/CheckoutForm/index.m.less"),
				y = a.n(C);
			const P = Object(o.c)({
				cardCvcValidation: m.f,
				cardExpiryValidation: m.g,
				cardName: m.h,
				cardNumberValidation: m.i,
				nameOnCardValidation: m.k,
				postalCodeValidation: m.m,
				postalCode: m.l
			});
			class x extends n.a.Component {
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
						cardNumberReady: g,
						cardExpiryReady: C,
						cardCVCReady: P
					} = this.state, x = {
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
						"aria-label": f.fbt._("Name on credit or debit card", null, {
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
						placeholder: f.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: r
					})), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement(b.CardNumberElement, {
						className: Object(c.a)(y.a.cardInput, {
							[y.a.cardInputError]: !!s
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: f.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: x
						}
					}), !g && n.a.createElement("div", {
						className: y.a.elementPlaceholder
					}, f.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement(b.CardExpiryElement, {
						className: Object(c.a)(y.a.cardInput, {
							[y.a.cardInputError]: !!a
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: f.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: x
						}
					}), !C && n.a.createElement("div", {
						className: y.a.elementPlaceholder
					}, f.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement(b.CardCvcElement, {
						className: Object(c.a)(y.a.cardInput, {
							[y.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: f.fbt._("CVC", null, {
								hk: "1huK7V"
							}).toString(),
							style: x
						}
					}), !P && n.a.createElement("div", {
						className: y.a.elementPlaceholder
					}, f.fbt._("CVC", null, {
						hk: "1huK7V"
					}))), n.a.createElement("div", {
						className: y.a.formCell
					}, n.a.createElement("input", {
						"aria-label": f.fbt._("Credit or debit card ZIP/postal code", null, {
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
						placeholder: f.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: m
					})))
				}
			}
			var v = Object(s.b)(P, e => ({
					onCardNumberChange: t => e(Object(d.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(d.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(d.cardCvcChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(d.postalCodeInput)({
						postalCode: t
					}))
				}))(x),
				E = a("./src/reddit/components/StripePaymentForm/index.m.less"),
				j = a.n(E);
			var O = e => {
					const t = Object(b.useStripe)();
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(v, {
						className: j.a.creditCard,
						stripe: t
					}), n.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement("img", {
						className: j.a.poweredByStripeIcon,
						src: `${g.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				k = a("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: w
			} = a("./node_modules/fbt/lib/FbtPublic.js"), N = e => 2 === e.length ? e : "0" + e, _ = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${g.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${g.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${g.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${g.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class S extends n.a.PureComponent {
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
					} = this.props, t = _(e.brand);
					return n.a.createElement("label", {
						className: j.a.savedCardContainer
					}, n.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), n.a.createElement("div", {
						className: Object(c.a)(j.a.cardImageContainer, {
							[j.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? n.a.createElement("img", {
						className: j.a.brandImage,
						src: t
					}) : n.a.createElement("span", {
						className: j.a.unknownCC
					}, "CC")), n.a.createElement("div", {
						className: j.a.cardDetails
					}, n.a.createElement("span", null, w._("Card ending in {Credit Card last four digits}", [w._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), n.a.createElement("span", {
						className: j.a.expiry
					}, w._("Expires {month} / {year}", [w._param("month", N(e.expirationMonth.toString())), w._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? n.a.createElement("button", {
						className: j.a.confirmText,
						onClick: this.onConfirmClick
					}, w._("Confirm", null, {
						hk: "gFhpD"
					})) : n.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, n.a.createElement(k.b, {
						className: j.a.icon
					})))
				}
			}
			var M = S;
			const I = Object(o.c)({
					rememberCard: m.w,
					savedCard: e => Object(m.y)(e)[0],
					stripeInfoLoading: m.x
				}),
				T = Object(s.b)(I, e => ({
					onClickDeleteCard: t => e(Object(i.b)(t)),
					onToggleRememberCard: () => e(Object(d.toggleRememberCard)())
				}));
			class A extends n.a.PureComponent {
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
						className: Object(c.a)(j.a.stripePaymentForm, e)
					});
					const m = d,
						u = !m && o,
						p = !m && !u,
						b = m ? j.a.loadingState : u ? j.a.savedCardState : j.a.formState;
					return n.a.createElement("div", {
						className: Object(c.a)(j.a.stripePaymentForm, b, e)
					}, m && n.a.createElement(l.a, {
						className: j.a.loader,
						sizePx: 60
					}), u && o && n.a.createElement("form", null, n.a.createElement(M, {
						nightmode: t,
						onDelete: a,
						savedCard: o
					})), p && n.a.createElement(O, {
						onToggleRememberCard: r,
						rememberCard: s
					}))
				}
			}
			t.a = T(A)
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
				return P
			})), a.d(t, "c", (function() {
				return x
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
			const P = e => {
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
				x = e => d.a.createElement(P, {
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
				return f
			})), a.d(t, "g", (function() {
				return C
			})), a.d(t, "a", (function() {
				return y
			})), a.d(t, "j", (function() {
				return P
			})), a.d(t, "i", (function() {
				return x
			})), a.d(t, "k", (function() {
				return v
			})), a.d(t, "h", (function() {
				return E
			})), a.d(t, "c", (function() {
				return j
			})), a.d(t, "e", (function() {
				return O
			})), a.d(t, "d", (function() {
				return k
			})), a.d(t, "b", (function() {
				return w
			})), a.d(t, "l", (function() {
				return N
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
				g = (a("./src/redditGQL/operations/UserSavedStripeCards.json"), a("./src/lib/makeGqlRequest/index.ts"));
			const f = (e, t, a, r, s, o, c) => {
					const i = new n.a(r.price).multipliedBy(s).toFixed();
					return Object(g.a)(e, {
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
				C = (e, t) => Object(g.a)(e, {
					...l,
					variables: {
						input: t
					}
				});
			var y;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(y || (y = {}));
			const P = (e, t, a, r) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: a,
						token: r
					}
				}),
				x = (e, t, a, r) => Object(g.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: a,
						token: r
					}
				}),
				v = (e, t, a, r) => Object(g.a)(e, {
					...h,
					variables: {
						nonce: t,
						orderId: a,
						cardId: r
					}
				}),
				E = (e, t, a, r, n) => Object(g.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: a,
						successUrl: r,
						cancelUrl: n
					}
				}),
				j = (e, t, a, r) => Object(g.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: a,
						token: r
					}
				}),
				O = (e, t, a, r) => Object(g.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: a,
						cardId: r
					}
				}),
				k = (e, t, a, r, n) => Object(g.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: a,
						token: r,
						saveCard: n
					}
				}),
				w = (e, t) => Object(g.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				N = (e, t) => Object(g.a)(e, {
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
				return i
			}));
			var r = a("./node_modules/@stripe/stripe-js/dist/stripe.esm.js"),
				n = a("./src/config.ts"),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let c = null;

			function i() {
				const e = Object(s.e)(o.a);
				return c || (c = Object(r.a)(n.a.stripe.apiKey(e), {
					apiVersion: n.a.stripe.apiVersion(!0)
				})), c
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
			const c = Object(o.a)(s.Ye),
				i = Object(o.a)(s.Ze),
				d = Object(r.a)([c, i], (e, t) => new Set([t && n.Lb, e && n.Mb].filter(e => !!e)))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var r = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(n.a)(r.Bd)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PennyPurchaseModal.ca81eddc92dfaa30937e.js.map