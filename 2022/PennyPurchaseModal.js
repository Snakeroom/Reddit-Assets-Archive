// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.817945c0402965473be6.js
// Retrieved at 1/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PennyPurchaseModal"], {
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
			a.d(t, "b", (function() {
				return w
			})), a.d(t, "j", (function() {
				return _
			})), a.d(t, "g", (function() {
				return S
			})), a.d(t, "f", (function() {
				return M
			})), a.d(t, "d", (function() {
				return I
			})), a.d(t, "c", (function() {
				return T
			})), a.d(t, "a", (function() {
				return G
			})), a.d(t, "h", (function() {
				return L
			})), a.d(t, "e", (function() {
				return H
			})), a.d(t, "i", (function() {
				return q
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/omit.js"),
				s = a.n(n),
				o = a("./node_modules/uuid/v4.js"),
				c = a.n(o),
				d = a("./src/config.ts"),
				i = a("./src/reddit/constants/modals.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				m = a("./src/lib/addQueryParams/index.ts"),
				u = a("./src/lib/makeActionCreator/index.ts"),
				p = a("./src/lib/sentry/index.ts"),
				h = a("./src/reddit/models/Toast/index.ts"),
				b = a("./src/reddit/actions/gold/constants.ts"),
				g = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				C = a("./src/reddit/selectors/gold/productOffers.ts"),
				y = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = a("./src/reddit/selectors/user.ts"),
				P = a("./src/reddit/models/Gold/ProductOffer.ts"),
				v = a("./src/reddit/actions/gold/powerups.ts"),
				x = a("./src/reddit/actions/modal.ts"),
				E = a("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				j = a("./src/reddit/models/Payments/index.ts");
			const O = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				w = (e, t, a) => async (n, s, {
					gqlContext: o
				}) => {
					const d = c()(),
						i = await Object(E.f)(o(), d, e, t, a);
					if (i.ok) {
						const e = i.body,
							{
								errors: t,
								order: a
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (a) return a.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, N = Object(g.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), _ = (e, t, a, r, n, s, o) => async (d, i, {
					gqlContext: l
				}) => {
					var m;
					const u = i(),
						h = s === P.c.Premium,
						b = s === P.c.Powerups,
						v = {};
					if (b && o) v.powerUps = {
						subredditId: o,
						isAnonymous: r
					};
					else if (h) {
						const e = Object(C.d)(u, {
							provider: j.b.Stripe
						});
						if (!e) return;
						v.premium = {
							pricePackage: e
						}
					}
					let x, O, _ = "";
					try {
						_ = await d(w(a, n, v))
					} catch (M) {
						return p.c.captureException(M), void(M.message && d(Object(g.stripeApiError)(M.message)))
					}
					d(Object(g.stripeTokenPending)());
					const S = Object(y.y)(u);
					if (S || (x = await d(Object(g.validateAndCreateStripeToken)(e, t)), O = Object(y.v)(u), x)) try {
						const t = c()(),
							a = S || O ? x && O ? Object(E.h)(l(), t, _, x.id) : S ? Object(E.j)(l(), t, _, S) : null : Object(E.i)(l(), t, _, x.id),
							s = await a;
						if (!(null == s ? void 0 : s.ok)) return void d(N);
						const u = s.body.data.createEconPayment;
						if (null === (m = null == u ? void 0 : u.errors) || void 0 === m ? void 0 : m.length) return void d(Object(g.stripeApiError)(k(u.errors)));
						const {
							ok: p,
							payment: C,
							providerExecution: {
								paymentIntentClientSecret: y
							}
						} = u;
						if (p && C.status === E.a.ActionRequired) {
							const t = await e.confirmCardPayment(y),
								{
									error: a
								} = t;
							if (a) return ((e, t) => {
								var a, r;
								(null === (r = null === (a = e.payment_intent) || void 0 === a ? void 0 : a.last_payment_error) || void 0 === r ? void 0 : r.message) ? t(Object(g.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(g.stripeApiError)(e.message)) : t(N)
							})(a, d);
							let r;
							if (!(r = S ? await Object(E.e)(l(), c()(), C.id, S) : await Object(E.d)(l(), c()(), C.id, x.id, O)).ok) return void d(N);
							const n = r.body;
							if (!n.data.confirmEconPayment.ok || n.data.confirmEconPayment.payment.status !== E.a.Paid) return void d(N)
						} else if (p && C.status !== E.a.Paid) return void d(N);
						const P = Object(f.k)(i());
						P && (b && o ? d(L({
							subredditId: o,
							powerupsCount: n,
							user: P,
							isAnonymous: r
						})) : h && d(H({
							user: P
						})))
					} catch (M) {
						p.c.captureException(M), d(N)
					}
				}, S = (e, t, a, r, n) => async (s, o, {
					gqlContext: i
				}) => {
					var l;
					const u = o(),
						h = r === P.c.Premium,
						b = r === P.c.Powerups,
						y = {};
					if (b && n) y.powerUps = {
						subredditId: n,
						isAnonymous: t
					};
					else if (h) {
						const e = Object(C.d)(u, {
							provider: j.b.PayPal
						});
						if (!e) return null;
						y.premium = {
							pricePackage: e
						}
					}
					let v = "";
					try {
						v = await s(w(e, a, y))
					} catch (_) {
						return p.c.captureException(_), _.message && s(Object(g.paypalApiError)(_.message)), null
					}
					const x = d.a.redditUrl;
					let N = {
						_o: x,
						o: v,
						pt: r
					};
					b && n && (N = {
						...N,
						r: n
					});
					try {
						const e = Object(m.a)(`${x}/framedModal/paypal-finish`, {
								...N,
								s: !0
							}),
							r = Object(m.a)(`${x}/framedModal/paypal-finish`, N),
							d = c()(),
							u = await Object(E.g)(i(), d, v, e, r);
						if (u && u.ok) {
							const e = u.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return s(Object(g.paypalApiError)(k(e.errors))), null;
							const r = Object(f.k)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if (o === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && r) return n ? s(L({
									subredditId: n,
									powerupsCount: a,
									user: r,
									isAnonymous: t
								})) : h && s(H({
									user: r
								})), null
							}
						}
					} catch (_) {
						p.c.captureException(_)
					}
					return s(Object(g.paypalApiError)(O())), null
				}, M = (e, t) => async (a, r, {
					gqlContext: n
				}) => {
					var s;
					try {
						const r = c()(),
							o = await Object(E.c)(n(), r, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return a(Object(g.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						p.c.captureException(o)
					}
					return a(Object(g.paypalApiError)(O())), !1
				}, I = () => async (e, t, {
					gqlContext: a
				}) => {
					e(Object(g.savedCardsPending)());
					try {
						const t = await Object(E.l)(a());
						if (t.ok) {
							const a = t.body;
							a.errors && a.errors.length && e(Object(g.stripeApiError)(a.errors[0].message));
							const {
								savedStripeCards: r
							} = a.data.identity, n = r.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(g.savedCardsSuccess)(n)), n[0] && e(Object(g.selectSavedCard)(n[0].cardId))
						} else e(Object(g.stripeApiError)(r.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (n) {
						p.c.captureException(n), e(Object(g.savedCardsSuccess)([]))
					}
				}, T = e => async (t, a, {
					gqlContext: r
				}) => {
					t(Object(g._deleteSavedCard)(e));
					try {
						const t = await Object(E.k)(r(), e);
						if (t.error) throw new Error(t.error.type);
						const a = t.body,
							{
								errors: n
							} = a.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(k(n))
					} catch (n) {
						p.c.captureException(n)
					}
				}, A = Object(u.a)(b.O), R = Object(u.a)(b.P), B = Object(u.a)(b.Q), D = e => async (t, a) => {
					await t(A(e)), t(Object(l.f)({
						kind: h.b.Error,
						duration: l.a,
						text: e
					}))
				}, G = (e, t, a) => async (n, s, {
					gqlContext: o
				}) => {
					n(R({
						subredditId: t,
						allocatedAt: a
					}));
					try {
						const s = await Object(E.b)(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void n(D(r[0].message));
							n(B({
								subredditId: t,
								allocatedAt: a
							}))
						} else n(D(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						p.c.captureException(c), n(D(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, F = Object(u.a)(b.S), L = e => async (t, a) => {
					t(F(e)), t(Object(v.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(x.g)(i.a.ECON_POWERUPS_PURCHASE)), t(Object(x.h)(i.a.ECON_POWERUPS_SUCCESS))
				}, Q = Object(u.a)(b.W), H = ({
					user: e
				}) => async t => {
					await t(Object(v.o)(!0)), t(Q({
						user: e
					}))
				}, q = Object(u.a)(b.ab)
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
				d = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				i = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(i);
			t.a = e => s.a.createElement("div", {
				className: Object(o.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(r.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [r.fbt._param("Coin icon placeholder", ":coin:"), r.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
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
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/config.ts"),
				c = a("./src/lib/loadRedditAdsPixel.ts"),
				d = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				i = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
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
					t(Object(m.i)(e)), Object(c.b)()
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
					}, s.a.createElement(i.b, {
						className: h.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(d.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(l.c)(b)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return V
			}));
			var r = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				c = a("./src/reddit/hooks/useStripePromise.ts"),
				d = a("./src/lib/constants/index.ts"),
				i = a("./src/lib/currency/currencies.ts"),
				l = a("./src/lib/localizeCurrency/index.ts"),
				m = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				u = a("./src/reddit/components/StripePaymentForm/index.tsx"),
				p = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				h = a("./src/reddit/hooks/useLocale.ts"),
				b = a("./src/lib/classNames/index.ts"),
				g = a("./src/reddit/components/CoinBalance/index.tsx"),
				C = a("./src/reddit/components/TrackingHelper/index.tsx"),
				y = a("./src/reddit/controls/Button/index.tsx"),
				f = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				P = a("./src/config.ts"),
				v = a("./node_modules/react-dom/index.js"),
				x = a.n(v),
				E = a("./node_modules/react-redux/es/index.js"),
				j = a("./node_modules/reselect/es/index.js"),
				O = a("./src/higherOrderComponents/makeAsync.tsx"),
				k = a("./src/reddit/helpers/loadThirdPartyScript.ts"),
				w = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				N = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				_ = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const S = Object(j.c)({
				isGild: e => !!Object(w.s)(e)
			});
			class M extends o.a.Component {
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
						ReactDOM: x.a
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
			const I = Object(E.b)(S, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(N.f)(t.coinPackage)) : "awardId" in t ? e(Object(_.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (a, r) => {
					if ("coinPackage" in t) {
						if (a) return void e(Object(N.h)(r, t.coinPackage));
						e(Object(N.g)(r, t.coinPackage))
					} else "awardId" in t && e(Object(_.c)(r))
				}
			}))(M);
			var T = Object(O.a)({
					getComponent: () => Object(k.c)().then(() => I),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				A = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				R = a.n(A);
			const {
				fbt: B
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class D extends o.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: t,
							purchasePackage: a,
							sendEvent: r,
							stripe: n,
							stripeElements: s
						} = this.props;
						n && s && (r(Object(f.c)(e)), t(n, s, a))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: t,
						gildThingId: a,
						purchasePackage: r,
						savedCardsPending: n,
						selectedPayment: s,
						stripeTokenPending: c
					} = this.props;
					return o.a.createElement("div", {
						className: R.a.purchaseSelectPaymentFooter
					}, o.a.createElement(g.a, {
						className: R.a.balance,
						coinBalance: t
					}), s === d.Hb ? e && e.pennyPrice && a ? o.a.createElement(T, {
						awardId: e.id,
						className: Object(b.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: a
					}) : r && o.a.createElement(T, {
						className: Object(b.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						coinPackage: r
					}) : null, s === d.Gb && o.a.createElement(y.l, {
						className: R.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: c || n,
						onClick: this.onCompletePurchaseClick
					}, B._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var G = Object(C.c)(D),
				F = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				L = a("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: Q
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var H = e => {
				const t = Object(h.a)();
				return o.a.createElement("div", {
					className: R.a.purchaseHeader,
					style: {
						backgroundImage: `url("${P.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, o.a.createElement(L.a, {
					className: R.a.coinIcon
				}), o.a.createElement("div", {
					className: R.a.titleMain
				}, Q._("Buy {amount}!", [Q._param("amount", Object(l.b)(e.purchasePackage.coins, {
					locale: t,
					type: i.b.Reddit,
					currency: i.a
				}))], {
					hk: "3VNw69"
				})), o.a.createElement("div", {
					className: R.a.titleDescription
				}, Q._("You're purchasing Coins for yourself, {userName}!", [Q._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), o.a.createElement("img", {
					className: R.a.goldPackage,
					src: e.purchasePackage.images.purchaseSuccess["3x"].url
				}), o.a.createElement("button", {
					className: R.a.closeButton,
					onClick: e.onCloseClick
				}, o.a.createElement(F.b, {
					className: R.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var q = e => {
				const t = Object(h.a)(),
					a = [];
				if (e.purchasePackage && a.push(n.fbt._("{coinCount} will automatically be spent on this {awardName} Award.", [n.fbt._param("coinCount", Object(l.b)(e.award.coinPrice, {
						locale: t,
						type: i.b.Reddit,
						currency: i.a
					})), n.fbt._param("awardName", e.award.name)], {
						hk: "2ImQA8"
					})), e.award.pennyDonate && a.push(n.fbt._("{dollarsDonate} will be donated.", [n.fbt._param("dollarsDonate", Object(l.b)(e.award.pennyDonate, {
						locale: t
					}))], {
						hk: "3jOvCI"
					})), e.award.giverCoinReward) {
					a.push(n.fbt._("As a thank you, you will receive {giverCoinReward}.", [n.fbt._param("giverCoinReward", Object(l.b)(e.award.giverCoinReward, {
						locale: t,
						type: i.b.Reddit,
						currency: i.a
					}))], {
						hk: "20S8v2"
					}));
					const r = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
					r > 0 && r !== e.coinBalance && n.fbt._("You’ll have {remainingCoins} remaining.", [n.fbt._param("remainingCoins", Object(l.b)(r, {
						locale: t,
						type: i.b.Reddit,
						currency: i.a
					}))], {
						hk: "DrEWG"
					})
				}
				return o.a.createElement("div", {
					className: R.a.purchaseGildHeader
				}, o.a.createElement("div", {
					className: R.a.awardTitle
				}, n.fbt._("Give the {awardName} Award", [n.fbt._param("awardName", e.award.name)], {
					hk: "28iR3j"
				})), o.a.createElement("div", {
					className: R.a.awardTitleDescription
				}, a.join(" ")), o.a.createElement("img", {
					className: R.a.awardIcon,
					src: e.award.icon.url
				}), o.a.createElement("button", {
					className: R.a.closeButton,
					onClick: e.onCloseClick
				}, o.a.createElement(F.b, {
					className: Object(b.a)(R.a.closeIcon, R.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			const V = e => {
				const t = Object(h.a)(),
					a = Object(c.a)(),
					s = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return o.a.createElement(r.Elements, {
					stripe: a
				}, o.a.createElement(o.a.Fragment, null, e.gildThingId ? o.a.createElement(q, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && o.a.createElement(H, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), o.a.createElement("div", {
					className: R.a.purchaseBody
				}, o.a.createElement(m.a, {
					className: R.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === d.Gb && o.a.createElement(r.ElementsConsumer, null, ({
					stripe: t
				}) => o.a.createElement(u.a, {
					nightmode: e.nightmode,
					stripe: t
				})), o.a.createElement("div", {
					className: R.a.checkoutFooter
				}, o.a.createElement("div", {
					className: R.a.purchaseTotal
				}, n.fbt._("Total: {totalAmount}", [n.fbt._param("totalAmount", Object(l.b)(s, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === d.Hb && e.paypalErrorMessage && o.a.createElement("div", {
					className: R.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === d.Gb && e.stripeErrorMessage && o.a.createElement("div", {
					className: R.a.errorMessage
				}, e.stripeErrorMessage), o.a.createElement("div", {
					className: R.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? o.a.createElement(o.a.Fragment, null, n.fbt._("The minimum Coins purchase is {coins}.", [n.fbt._param("coins", Object(l.b)(e.purchasePackage.coins, {
						locale: e.locale,
						type: i.b.Reddit,
						currency: i.a
					}))], {
						hk: "1y9FMB"
					}), o.a.createElement("br", null)) : null
				})({
					...e,
					locale: t
				}), Object(p.a)(n.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), o.a.createElement(r.ElementsConsumer, null, ({
					stripe: t,
					elements: a
				}) => o.a.createElement(G, {
					award: e.selectedAward,
					coinBalance: e.coinBalance,
					gildThingId: e.gildThingId,
					onCompletePurchaseClick: e.onCompletePurchaseClick,
					purchasePackage: e.purchasePackage,
					savedCardsPending: e.savedCardsPending,
					selectedPayment: e.selectedPayment,
					stripeTokenPending: e.stripeTokenPending,
					stripe: t,
					stripeElements: a
				}))))
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
				fbt: d
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				buttonText: e,
				onCloseClick: t
			}) => n.a.createElement("div", {
				className: c.a.purchaseFooter
			}, n.a.createElement(s.l, {
				className: c.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: t
			}, e || d._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, a) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
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
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				d = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				i = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = a.n(i);
			const m = e => s.a.createElement("label", {
				className: Object(o.a)(e.className, l.a.paymentOption)
			}, s.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: a,
								onPaymentSelected: r,
								sendEvent: n
							} = this.props;
						switch (t) {
							case "creditCard":
								n(Object(d.d)(a));
								break;
							case "paypal":
								n(Object(d.e)(a))
						}
						return r(t)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						selectedPayment: a
					} = this.props;
					return s.a.createElement("form", {
						className: e
					}, s.a.createElement("fieldset", null, s.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), s.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(c.c)(u)
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
				d = a("./src/reddit/constants/zIndex.ts"),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/actions/gold/modals.ts"),
				m = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				p = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/constants/colors.ts"),
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				C = a("./src/reddit/models/User/index.ts"),
				y = a("./src/reddit/selectors/gild.ts"),
				f = a("./src/reddit/selectors/gold/giveAwards.ts"),
				P = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = a("./src/reddit/selectors/platform.ts"),
				x = a("./src/reddit/selectors/user.ts"),
				E = a("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				j = a("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx"),
				O = a("./src/reddit/components/PennyPurchaseModal/index.m.less"),
				k = a.n(O);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(o.c)({
					activePage: P.q,
					allowNavigationCallback: e => {
						const t = Object(v.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: x.e,
					gildThingId: P.s,
					isIframed: y.g,
					nightmode: x.W,
					savedCardsPending: P.w,
					selectedAward: f.b,
					selectedPayment: P.c,
					stripeErrorMessage: P.j,
					stripeTokenPending: P.m,
					paypalErrorMessage: P.d,
					userName: e => {
						const t = Object(x.k)(e);
						return `u/${Object(C.e)(t)}`
					}
				}),
				_ = Object(s.b)(N, (e, t) => ({
					closeModal: () => {
						e(Object(u.a)()), e(Object(l.a)())
					},
					loadSavedCards: () => e(Object(m.loadSavedCards)()),
					onPaymentSelected: t => e(Object(m.selectPaymentMethod)(t)),
					dispatchCompletePurchase: (t, a, r) => {
						e(Object(u.e)(t, a, r))
					}
				}), (e, t, a) => ({
					...e,
					...t,
					...a,
					onCompletePurchaseClick: (a, r) => t.dispatchCompletePurchase(a, r, e.isIframed)
				}));
			class S extends n.a.Component {
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
					t(), Object(b.e)(b.a.GoldPayment, !1), a(Object(g.h)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(g.f)(e))
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
						onPaymentSelected: d,
						onTryCloseModal: i,
						savedCardsPending: l,
						selectedAward: m,
						stripeErrorMessage: u,
						stripeTokenPending: p,
						paypalErrorMessage: h,
						userName: b
					} = this.props;
					return n.a.createElement("div", {
						className: t
					}, "selectPayment" === e && n.a.createElement(j.a, {
						coinBalance: a,
						gildThingId: r,
						nightmode: s,
						onCloseModal: i,
						onCompletePurchaseClick: c,
						onPaymentSelected: d,
						paypalErrorMessage: h,
						savedCardsPending: l,
						selectedAward: m,
						selectedPayment: o,
						stripeErrorMessage: u,
						stripeTokenPending: p,
						userName: b
					}), "paymentCompleted" === e && n.a.createElement(E.a, {
						gildThingId: r,
						isGild: !0,
						onCloseClick: i,
						userName: b
					}))
				}
			}
			const M = Object(c.a)(S);
			t.default = _(Object(p.c)(class extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(g.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: h.a.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: d.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return n.a.createElement(M, w({}, this.props, {
						className: Object(i.a)(this.props.className, k.a.pennyPurchaseModal),
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
				d = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = a("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: p
			} = a("./node_modules/fbt/lib/FbtPublic.js"), h = ({
				className: e
			}) => n.a.createElement(u.b, {
				className: e
			}, p._("Error loading Stripe, please refresh the page and try again", null, {
				hk: "2O1NWp"
			}));
			var b = a("./node_modules/fbt/lib/FbtPublic.js"),
				g = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				C = a("./src/config.ts"),
				y = a("./src/reddit/components/CheckoutForm/index.m.less"),
				f = a.n(y);
			const P = Object(o.c)({
				cardCvcValidation: m.f,
				cardExpiryValidation: m.g,
				cardName: m.h,
				cardNumberValidation: m.i,
				nameOnCardValidation: m.k,
				postalCode: m.l
			});
			class v extends n.a.Component {
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
						onCardExpiryChange: d,
						onCardCvcChange: i,
						nameOnCardValidation: l,
						postalCode: m,
						stripe: u
					} = this.props;
					if (!u) return n.a.createElement(h, {
						className: e
					});
					const {
						cardNumberReady: p,
						cardExpiryReady: C,
						cardCVCReady: y
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
						className: Object(c.a)(f.a.checkoutForm, e)
					}, n.a.createElement("div", {
						className: f.a.formCellWide
					}, n.a.createElement("input", {
						className: Object(c.a)(f.a.cardInput, f.a.nameOnCard, {
							[f.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: b.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: r
					})), n.a.createElement("div", {
						className: f.a.formCell
					}, n.a.createElement(g.CardNumberElement, {
						className: Object(c.a)(f.a.cardInput, {
							[f.a.cardInputError]: !!s
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: b.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: P
						}
					}), !p && n.a.createElement("div", {
						className: f.a.elementPlaceholder
					}, b.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), n.a.createElement("div", {
						className: f.a.formCell
					}, n.a.createElement(g.CardExpiryElement, {
						className: Object(c.a)(f.a.cardInput, {
							[f.a.cardInputError]: !!a
						}),
						onChange: d,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: b.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: P
						}
					}), !C && n.a.createElement("div", {
						className: f.a.elementPlaceholder
					}, b.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), n.a.createElement("div", {
						className: f.a.formCell
					}, n.a.createElement(g.CardCvcElement, {
						className: Object(c.a)(f.a.cardInput, {
							[f.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: b.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: P
						}
					}), !y && n.a.createElement("div", {
						className: f.a.elementPlaceholder
					}, b.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), n.a.createElement("div", {
						className: f.a.formCell
					}, n.a.createElement("input", {
						className: Object(c.a)(f.a.cardInput, f.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: b.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: m
					})))
				}
			}
			var x = Object(s.b)(P, e => ({
					onCardNumberChange: t => e(Object(i.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(i.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(i.cardCvcChange)(t)),
					onNameInput: t => e(Object(i.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(i.postalCodeInput)({
						postalCode: t
					}))
				}))(v),
				E = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				j = a("./src/reddit/components/StripePaymentForm/index.m.less"),
				O = a.n(j);
			var k = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: a
					} = e, r = Object(g.useStripe)();
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(x, {
						className: O.a.creditCard,
						stripe: r
					}), n.a.createElement(E.a, {
						className: O.a.saveCardCheckbox,
						isSelected: a,
						onClick: t,
						text: b.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), n.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, n.a.createElement("img", {
						className: O.a.poweredByStripeIcon,
						src: `${C.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				w = a("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: N
			} = a("./node_modules/fbt/lib/FbtPublic.js"), _ = e => 2 === e.length ? e : "0" + e, S = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${C.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${C.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${C.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${C.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class M extends n.a.PureComponent {
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
					} = this.props, t = S(e.brand);
					return n.a.createElement("label", {
						className: O.a.savedCardContainer
					}, n.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), n.a.createElement("div", {
						className: Object(c.a)(O.a.cardImageContainer, {
							[O.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? n.a.createElement("img", {
						className: O.a.brandImage,
						src: t
					}) : n.a.createElement("span", {
						className: O.a.unknownCC
					}, "CC")), n.a.createElement("div", {
						className: O.a.cardDetails
					}, n.a.createElement("span", null, N._("Card ending in {Credit Card last four digits}", [N._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), n.a.createElement("span", {
						className: O.a.expiry
					}, N._("Expires {month} / {year}", [N._param("month", _(e.expirationMonth.toString())), N._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? n.a.createElement("button", {
						className: O.a.confirmText,
						onClick: this.onConfirmClick
					}, N._("Confirm", null, {
						hk: "gFhpD"
					})) : n.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, n.a.createElement(w.b, {
						className: O.a.icon
					})))
				}
			}
			var I = M;
			const T = Object(o.c)({
					rememberCard: m.v,
					savedCard: e => Object(m.x)(e)[0],
					stripeInfoLoading: m.w
				}),
				A = Object(s.b)(T, (e, t) => ({
					onClickDeleteCard: a => t.shouldDeleteCardWithGql ? e(Object(d.c)(a)) : e(Object(i.deleteSavedCard)(a)),
					onToggleRememberCard: () => e(Object(i.toggleRememberCard)())
				}));
			class R extends n.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: a,
						onToggleRememberCard: r,
						rememberCard: s,
						savedCard: o,
						stripe: d,
						stripeInfoLoading: i
					} = this.props;
					if (!d) return n.a.createElement(h, {
						className: Object(c.a)(O.a.stripePaymentForm, e)
					});
					const m = i,
						u = !m && o,
						p = !m && !u,
						b = m ? O.a.loadingState : u ? O.a.savedCardState : O.a.formState;
					return n.a.createElement("div", {
						className: Object(c.a)(O.a.stripePaymentForm, b, e)
					}, m && n.a.createElement(l.a, {
						className: O.a.loader,
						sizePx: 60
					}), u && o && n.a.createElement("form", null, n.a.createElement(I, {
						nightmode: t,
						onDelete: a,
						savedCard: o
					})), p && n.a.createElement(k, {
						onToggleRememberCard: r,
						rememberCard: s
					}))
				}
			}
			t.a = A(R)
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
				return v
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/uniqueId.js"),
				s = a.n(n),
				o = a("./node_modules/raf/index.js"),
				c = a.n(o),
				d = a("./node_modules/react/index.js"),
				i = a.n(d),
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
					return i.a.createElement("div", {
						className: b.a.wrapper
					}, i.a.createElement(p.a, {
						className: b.a.titleRow
					}, a), i.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), i.a.createElement(p.a, {
						className: b.a.buttonRow
					}, i.a.createElement(u.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				C = a("./src/reddit/controls/ErrorText/index.m.less"),
				y = a.n(C);
			class f extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
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
					return i.a.createElement("div", {
						className: Object(l.a)(y.a.wrapper, t)
					}, i.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), o && i.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, s), c && i.a.createElement(g, {
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
					return o.length ? i.a.createElement("div", {
						className: t
					}, o.map((e, t) => i.a.createElement(f, {
						className: a,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				v = e => i.a.createElement(P, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = f
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return C
			})), a.d(t, "a", (function() {
				return y
			})), a.d(t, "i", (function() {
				return f
			})), a.d(t, "h", (function() {
				return P
			})), a.d(t, "j", (function() {
				return v
			})), a.d(t, "g", (function() {
				return x
			})), a.d(t, "c", (function() {
				return E
			})), a.d(t, "e", (function() {
				return j
			})), a.d(t, "d", (function() {
				return O
			})), a.d(t, "b", (function() {
				return k
			})), a.d(t, "l", (function() {
				return w
			})), a.d(t, "k", (function() {
				return N
			}));
			var r = a("./node_modules/bignumber.js/bignumber.js"),
				n = a.n(r),
				s = a("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				o = a("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = a("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				d = a("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				i = a("./src/redditGQL/operations/CreateEconOrder.json"),
				l = a("./src/redditGQL/operations/CreatePaypalPayment.json"),
				m = a("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				u = a("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = a("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				h = a("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = a("./src/redditGQL/operations/UserSavedStripeCards.json"),
				g = a("./src/lib/makeGqlRequest/index.ts");
			const C = (e, t, a, r, s) => {
				const {
					premium: o,
					...c
				} = s, d = (null == o ? void 0 : o.pricePackage) || a.pricePackages[0], l = new n.a(d.price).multipliedBy(r).toFixed();
				return Object(g.a)(e, {
					...i,
					variables: {
						input: {
							nonce: t,
							productId: a.id,
							productVersion: a.version,
							pricePackageId: d.id,
							currency: d.currency,
							price: l,
							productsCount: r.toString(),
							...c
						}
					}
				})
			};
			var y;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(y || (y = {}));
			const f = (e, t, a, r) => Object(g.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: a,
						token: r
					}
				}),
				P = (e, t, a, r) => Object(g.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: a,
						token: r
					}
				}),
				v = (e, t, a, r) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: a,
						cardId: r
					}
				}),
				x = (e, t, a, r, n) => Object(g.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: a,
						successUrl: r,
						cancelUrl: n
					}
				}),
				E = (e, t, a, r) => Object(g.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: a,
						token: r
					}
				}),
				j = (e, t, a, r) => Object(g.a)(e, {
					...d,
					variables: {
						nonce: t,
						paymentId: a,
						cardId: r
					}
				}),
				O = (e, t, a, r, n) => Object(g.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: a,
						token: r,
						saveCard: n
					}
				}),
				k = (e, t) => Object(g.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				w = e => Object(g.a)(e, {
					...b,
					variables: {}
				}),
				N = (e, t) => Object(g.a)(e, {
					...h,
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
				return y
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
				d = function(e, t, a) {
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
				i = Promise.resolve().then((function() {
					return c(null)
				})),
				l = !1;
			i.catch((function(e) {
				l || console.warn(e)
			}));
			var m = function() {
					for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
					l = !0;
					var r = Date.now();
					return i.then((function(e) {
						return d(e, t, r)
					}))
				},
				u = a("./src/config.ts"),
				p = a("./node_modules/react-redux/es/index.js"),
				h = a("./src/reddit/constants/experiments.ts"),
				b = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const g = Object(b.a)(h.xc);
			let C = null;

			function y() {
				const e = Object(p.e)(g);
				return C || (C = m(u.a.stripe.apiKey(e))), C
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
				return d
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = a.n(o);
			const d = e => n.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, a) {
			"use strict";
			var r, n, s, o;
			a.d(t, "b", (function() {
					return n
				})), a.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, a) {
			"use strict";
			a.d(t, "h", (function() {
				return d
			})), a.d(t, "i", (function() {
				return i
			})), a.d(t, "b", (function() {
				return l
			})), a.d(t, "a", (function() {
				return m
			})), a.d(t, "e", (function() {
				return u
			})), a.d(t, "j", (function() {
				return p
			})), a.d(t, "d", (function() {
				return b
			})), a.d(t, "c", (function() {
				return g
			})), a.d(t, "g", (function() {
				return C
			})), a.d(t, "f", (function() {
				return y
			}));
			var r = a("./node_modules/reselect/es/index.js"),
				n = a("./src/lib/makeProductOfferKey/index.ts"),
				s = a("./src/reddit/models/Gold/ProductOffer.ts"),
				o = a("./src/reddit/models/Payments/index.ts"),
				c = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = e => e.subreddits.api.productOffers.pending,
				i = (e, {
					subredditId: t,
					type: a
				}) => {
					var r, s, o;
					return t ? e.subreddits.productOffers[Object(n.a)(a, t)] : null === (o = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === o ? void 0 : o[Object(n.a)(a)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const a = i(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return a && a[0]
				},
				m = (e, t) => {
					var a;
					const r = l(e, t);
					return null === (a = null == r ? void 0 : r.pricePackages) || void 0 === a ? void 0 : a[0].price
				},
				u = e => {
					const t = i(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === o.b.PayPal || e[0] === o.b.Stripe)(e.requiredPaymentProviders)) : null,
				h = Object(r.a)(u, c.p, (e, t) => p(e, t) || null),
				b = Object(r.a)(h, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var a;
					return (null === (a = e.requiredPaymentProviders) || void 0 === a ? void 0 : a[0]) === t
				})),
				g = Object(r.a)(h, e => (null == e ? void 0 : e[0].price) || null),
				C = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				y = Object(r.a)(C, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PennyPurchaseModal.817945c0402965473be6.js.map