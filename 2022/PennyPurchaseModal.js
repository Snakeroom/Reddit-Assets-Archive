// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.17b119c6decb02fc471c.js
// Retrieved at 8/3/2022, 9:40:04 AM by Reddit Dataminer v1.0.0
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
				return E
			})), a.d(t, "d", (function() {
				return x
			})), a.d(t, "i", (function() {
				return j
			})), a.d(t, "g", (function() {
				return O
			})), a.d(t, "f", (function() {
				return k
			})), a.d(t, "e", (function() {
				return w
			})), a.d(t, "c", (function() {
				return N
			})), a.d(t, "a", (function() {
				return T
			})), a.d(t, "h", (function() {
				return A
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/omit.js"),
				s = a.n(n),
				o = a("./node_modules/uuid/v4.js"),
				c = a.n(o),
				i = a("./src/config.ts"),
				d = a("./src/reddit/actions/toaster.ts"),
				l = a("./src/lib/addQueryParams/index.ts"),
				m = a("./src/lib/makeActionCreator/index.ts"),
				u = a("./src/lib/sentry/index.ts"),
				p = a("./src/reddit/models/Toast/index.ts"),
				h = a("./src/reddit/actions/gold/constants.ts"),
				b = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = a("./src/reddit/selectors/user.ts"),
				y = (a("./src/reddit/actions/gold/powerups.ts"), a("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"));
			const f = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				v = e => e.map(e => e.message).join(" : "),
				E = (e, t, a, n) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					const l = c()(),
						m = await Object(y.f)(d(), l, e, t, a, n);
					if (m.ok) {
						const e = m.body,
							{
								errors: t,
								order: a
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(v(t));
						if (a) return a.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, P = Object(b.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), x = e => !!e && e.hasOwnProperty("success"), j = e => {
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
						var m;
						const p = i();
						let h, C, f = "";
						try {
							f = await e(E(r, n, s, o))
						} catch (j) {
							return u.c.captureException(j), void(j.message && e(Object(b.stripeApiError)(j.message)))
						}
						e(Object(b.stripeTokenPending)());
						const x = Object(g.w)(p);
						if (x || (h = await e(Object(b.validateAndCreateStripeToken)(t, a)), C = Object(g.t)(p), h)) try {
							const a = c()(),
								r = x || C ? h && C ? Object(y.h)(l(), a, f, h.id) : x ? Object(y.j)(l(), a, f, x) : null : Object(y.i)(l(), a, f, h.id),
								n = await r;
							if (!(null == n ? void 0 : n.ok)) return void e(P);
							const s = n.body.data.createEconPayment;
							if (null === (m = null == s ? void 0 : s.errors) || void 0 === m ? void 0 : m.length) return void e(Object(b.stripeApiError)(v(s.errors)));
							const {
								ok: o,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = s;
							if (o && i.status === y.a.ActionRequired) {
								const a = await t.confirmCardPayment(d),
									{
										error: r
									} = a;
								if (r) return ((e, t) => {
									var a, r;
									(null === (r = null === (a = e.payment_intent) || void 0 === a ? void 0 : a.last_payment_error) || void 0 === r ? void 0 : r.message) ? t(Object(b.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(b.stripeApiError)(e.message)) : t(P)
								})(r, e);
								let n;
								if (!(n = x ? await Object(y.e)(l(), c()(), i.id, x) : await Object(y.d)(l(), c()(), i.id, h.id, C)).ok) return void e(P);
								const s = n.body;
								if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== y.a.Paid) return void e(P)
							} else if (o && i.status !== y.a.Paid) return void e(P);
							return {
								success: !0
							}
						} catch (j) {
							u.c.captureException(j), e(P)
						}
					}
				}, O = e => {
					let {
						productOffer: t,
						pricePackage: a,
						productsCount: r,
						extraParams: n,
						overrideModalParams: s
					} = e;
					return async (e, o, d) => {
						let {
							gqlContext: m
						} = d;
						var p;
						let h = "";
						try {
							h = await e(E(t, a, r, n))
						} catch (x) {
							return u.c.captureException(x), x.message && e(Object(b.paypalApiError)(x.message)), null
						}
						const g = i.a.redditUrl,
							P = {
								_o: g,
								o: h,
								pt: t.type,
								...s
							};
						try {
							const t = Object(l.a)(`${g}/framedModal/paypal-finish`, {
									...P,
									s: !0
								}),
								a = Object(l.a)(`${g}/framedModal/paypal-finish`, P),
								r = c()(),
								n = await Object(y.g)(m(), r, h, t, a);
							if (n && n.ok) {
								const t = n.body.data.createEconPayment;
								if (null === (p = null == t ? void 0 : t.errors) || void 0 === p ? void 0 : p.length) return e(Object(b.paypalApiError)(v(t.errors))), null;
								const a = Object(C.k)(o());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === y.a.ActionRequired) {
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
						} catch (x) {
							u.c.captureException(x)
						}
						return e(Object(b.paypalApiError)(f())), null
					}
				}, k = (e, t) => async (a, r, n) => {
					let {
						gqlContext: s
					} = n;
					var o;
					try {
						const r = c()(),
							n = await Object(y.c)(s(), r, e, t);
						if (n && n.ok) {
							const e = n.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return a(Object(b.paypalApiError)(v(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						u.c.captureException(i)
					}
					return a(Object(b.paypalApiError)(f())), !1
				}, w = () => async (e, t, a) => {
					let {
						gqlContext: n
					} = a;
					var o;
					e(Object(b.savedCardsPending)());
					try {
						const t = await Object(y.l)(n());
						if (t.error) throw e(Object(b.stripeApiError)(r.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const a = t.body;
						(null === (o = a.errors) || void 0 === o ? void 0 : o.length) && e(Object(b.stripeApiError)(a.errors[0].message));
						const {
							savedStripeCards: c
						} = a.data.identity, i = c.map(e => s()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(b.savedCardsSuccess)(i)), i[0] && e(Object(b.selectSavedCard)(i[0].cardId))
					} catch (c) {
						u.c.captureException(c), e(Object(b.savedCardsSuccess)([]))
					}
				}, N = e => async (t, a, r) => {
					let {
						gqlContext: n
					} = r;
					t(Object(b.deleteSavedCard)(e));
					try {
						const t = await Object(y.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const a = t.body,
							{
								errors: r
							} = a.data.deleteEconPaymentMethod;
						if (r && r.length) throw new Error(v(r))
					} catch (s) {
						u.c.captureException(s)
					}
				}, _ = Object(m.a)(h.N), S = Object(m.a)(h.O), I = Object(m.a)(h.P), M = e => async (t, a) => {
					await t(_(e)), t(Object(d.f)({
						kind: p.b.Error,
						duration: d.a,
						text: e
					}))
				}, T = (e, t, a) => async (n, s, o) => {
					let {
						gqlContext: c
					} = o;
					n(S({
						subredditId: t,
						allocatedAt: a
					}));
					try {
						const s = await Object(y.b)(c(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void n(M(r[0].message));
							n(I({
								subredditId: t,
								allocatedAt: a
							}))
						} else n(M(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						u.c.captureException(i), n(M(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, A = (Object(m.a)(h.U), Object(m.a)(h.Y))
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
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, a) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightMode: "_1BbnbPaXpwTwmI3m0OOyzJ",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
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
				C = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = a("./src/reddit/models/User/index.ts"),
				f = a("./src/reddit/selectors/gild.ts"),
				v = a("./src/reddit/selectors/gold/giveAwards.ts"),
				E = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = a("./src/reddit/selectors/platform.ts"),
				x = a("./src/reddit/selectors/user.ts"),
				j = a("./node_modules/fbt/lib/FbtPublic.js"),
				O = a("./src/config.ts"),
				k = a("./src/lib/loadRedditAdsPixel.ts"),
				w = a("./src/reddit/controls/Button/index.tsx"),
				N = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				_ = a.n(N);
			const {
				fbt: S
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					let {
						buttonText: t,
						onCloseClick: a
					} = e;
					return n.a.createElement("div", {
						className: _.a.purchaseFooter
					}, n.a.createElement(w.l, {
						className: _.a.purchaseButton,
						"data-redditstyle": !0,
						onClick: a
					}, t || S._("Done", null, {
						hk: "3s1bT9"
					})))
				},
				M = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				A = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				R = a.n(A);
			class B extends n.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(C.j)(e)), Object(k.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && j.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: R.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${O.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, n.a.createElement(T.a, {
						className: R.a.coinIcon
					}), n.a.createElement("div", {
						className: R.a.paymentCompleteTitleMain
					}, e.isGild ? j.fbt._("Thanks for purchasing an Award, {username}", [j.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : j.fbt._("Thanks for purchasing Coins, {username}", [j.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), n.a.createElement("div", {
						className: R.a.paymentCompleteTitleDescription
					}, t), n.a.createElement("button", {
						className: R.a.closeButton,
						onClick: e.onCloseClick
					}, n.a.createElement(M.b, {
						className: R.a.closeIcon,
						"data-redditstyle": !0
					}))), n.a.createElement(I, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var D = Object(h.c)(B),
				G = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				L = a("./src/reddit/hooks/useStripePromise.ts"),
				F = a("./src/lib/constants/index.ts"),
				Q = a("./src/lib/currency/currencies.ts"),
				q = a("./src/lib/localizeCurrency/index.ts"),
				H = a("./src/reddit/hooks/useThunkDispatch.ts");
			const {
				fbt: V
			} = a("./node_modules/fbt/lib/FbtPublic.js"), W = e => {
				let {
					className: t,
					productOffer: a,
					pricePackage: r,
					productsCount: o,
					extraParams: c,
					onPaymentSuccess: i,
					onButtonClick: d
				} = e;
				const l = Object(H.a)(),
					u = Object(G.useStripe)(),
					p = Object(G.useElements)(),
					h = Object(s.e)(E.u),
					b = Object(s.e)(E.l) || h;
				return n.a.createElement(w.t, {
					onClick: async () => {
						if (!u || !p || !a) return;
						null == d || d();
						const e = await l(Object(m.i)({
							stripe: u,
							stripeElements: p,
							productOffer: a,
							pricePackage: r,
							productsCount: o,
							extraParams: c || {}
						}));
						Object(m.d)(e) && e.success && i()
					},
					className: t,
					disabled: b || !u
				}, V._("Complete purchase", null, {
					hk: "KaR26"
				}))
			};
			var J = a("./src/reddit/selectors/experiments/econ/index.ts"),
				U = a("./src/reddit/hooks/useTracking.ts"),
				Y = a("./src/reddit/actions/gold/gild.ts"),
				X = a("./src/reddit/components/CoinBalance/index.tsx");
			var Z = e => {
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
			};
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js"), K = e => {
				let {
					className: t,
					productsCount: a,
					productOffer: s,
					pricePackage: o,
					extraParams: c,
					onPaymentSuccess: i,
					onButtonClick: d
				} = e;
				const l = Object(H.a)(),
					[u, p] = Object(r.useState)(!1),
					[h, b] = Object(r.useState)(""),
					g = Object(r.useCallback)(() => {
						i()
					}, [i]);
				Z({
					paypalUrl: h,
					finishPaymentCallback: g
				});
				return n.a.createElement(w.t, {
					onClick: async () => {
						if (!s) return;
						null == d || d(), p(!0);
						const e = await l(Object(m.g)({
							productOffer: s,
							pricePackage: o,
							productsCount: a,
							extraParams: c || {}
						}));
						e && (Object(m.d)(e) ? e.success && i() : b(e.url)), p(!1)
					},
					className: t,
					disabled: u
				}, z._("Continue to PayPal", null, {
					hk: "1T4BEy"
				}))
			};
			var $ = a("./node_modules/react-dom/index.js"),
				ee = a.n($),
				te = a("./src/higherOrderComponents/makeAsync.tsx"),
				ae = a("./src/reddit/helpers/loadThirdPartyScript.ts"),
				re = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts");
			const ne = Object(o.c)({
				isGild: e => !!Object(E.q)(e)
			});
			class se extends n.a.Component {
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
						React: n.a,
						ReactDOM: ee.a
					}), a = {
						sandbox: O.a.paypal.apiKey,
						production: O.a.paypal.apiKey
					};
					return n.a.createElement("div", {
						className: e
					}, n.a.createElement(t, {
						env: O.a.paypal.env,
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
			const oe = Object(s.b)(ne, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(re.f)(t.coinPackage)) : "awardId" in t ? e(Object(p.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (a, r) => {
					if ("coinPackage" in t) {
						if (a) return void e(Object(re.h)(r, t.coinPackage));
						e(Object(re.g)(r, t.coinPackage))
					} else "awardId" in t && e(Object(p.c)(r))
				}
			}))(se);
			var ce = Object(te.a)({
					getComponent: () => Object(ae.c)().then(() => oe),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				ie = a("./src/reddit/selectors/gold/productOffers.ts");
			const {
				fbt: de
			} = a("./node_modules/fbt/lib/FbtPublic.js"), le = e => {
				let {
					award: t,
					coinBalance: a,
					gildThingId: r,
					purchasePackage: o,
					savedCardsPending: c,
					selectedPayment: i,
					stripeTokenPending: l,
					onCompletePurchaseClick: m,
					stripe: p,
					stripeElements: h,
					isIframed: b
				} = e;
				const g = Object(U.a)(),
					y = Object(s.d)(),
					f = Object(s.e)(J.h),
					v = Object(s.e)(ie.a),
					E = !!r;
				if (E && !f) {
					const e = () => {
						p && h && (g(Object(C.c)(r)), m(p, h, o))
					};
					return n.a.createElement("div", {
						className: R.a.purchaseSelectPaymentFooter
					}, n.a.createElement(X.a, {
						className: R.a.balance,
						coinBalance: a
					}), i === F.Hb && ((null == t ? void 0 : t.pennyPrice) && r ? n.a.createElement(ce, {
						awardId: t.id,
						className: Object(d.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						pennies: t.pennyPrice,
						thingId: r
					}) : o && n.a.createElement(ce, {
						className: Object(d.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						coinPackage: o
					})), i === F.Gb && n.a.createElement(w.l, {
						className: R.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: l || c,
						onClick: e
					}, de._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
				const P = null == v ? void 0 : v.pricePackages.find(e => e.id === (null == o ? void 0 : o.mobileId));
				if (!v || !P || !o) return null;
				const x = i === F.Hb,
					j = i === F.Gb,
					O = x ? K : W;
				return n.a.createElement("div", {
					className: R.a.purchaseSelectPaymentFooter
				}, n.a.createElement(X.a, {
					className: R.a.balance,
					coinBalance: a
				}), n.a.createElement(O, {
					className: R.a.purchaseButton,
					productOffer: v,
					pricePackage: P,
					productsCount: P.quantity,
					onButtonClick: () => {
						j && g(Object(C.c)(r)), x && g(Object(C.d)(r))
					},
					onPaymentSuccess: () => {
						y(Object(u.paymentCompleted)({
							coinsDiff: o.coins,
							confirmed: !1
						})), E && f && y(Object(Y.gildGqlRequested)(r, {
							isOldReddit: b
						}))
					}
				}))
			};
			var me = a("./src/reddit/hooks/useLocale.ts");
			const {
				fbt: ue
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var pe = e => {
				var t;
				const a = Object(me.a)();
				return n.a.createElement("div", {
					className: R.a.purchaseHeader,
					style: {
						backgroundImage: `url("${O.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, n.a.createElement(T.a, {
					className: R.a.coinIcon
				}), n.a.createElement("div", {
					className: R.a.titleMain
				}, ue._("Buy {amount}!", [ue._param("amount", Object(q.b)(e.purchasePackage.coins, {
					locale: a,
					type: Q.b.Reddit,
					currency: Q.a
				}))], {
					hk: "3VNw69"
				})), n.a.createElement("div", {
					className: R.a.titleDescription
				}, ue._("You're purchasing Coins for yourself, {userName}!", [ue._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), n.a.createElement("img", {
					className: R.a.goldPackage,
					src: null === (t = e.purchasePackage.images.purchaseSuccess["3x"]) || void 0 === t ? void 0 : t.url
				}), n.a.createElement("button", {
					className: R.a.closeButton,
					onClick: e.onCloseClick
				}, n.a.createElement(M.b, {
					className: R.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var he = e => {
					const t = Object(me.a)(),
						a = [];
					if (e.purchasePackage && a.push(j.fbt._("{coinCount} will automatically be spent on this {awardName} Award.", [j.fbt._param("coinCount", Object(q.b)(e.award.coinPrice, {
							locale: t,
							type: Q.b.Reddit,
							currency: Q.a
						})), j.fbt._param("awardName", e.award.name)], {
							hk: "2ImQA8"
						})), e.award.pennyDonate && a.push(j.fbt._("{dollarsDonate} will be donated.", [j.fbt._param("dollarsDonate", Object(q.b)(e.award.pennyDonate, {
							locale: t
						}))], {
							hk: "3jOvCI"
						})), e.award.giverCoinReward) {
						a.push(j.fbt._("As a thank you, you will receive {giverCoinReward}.", [j.fbt._param("giverCoinReward", Object(q.b)(e.award.giverCoinReward, {
							locale: t,
							type: Q.b.Reddit,
							currency: Q.a
						}))], {
							hk: "20S8v2"
						}));
						const r = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
						r > 0 && r !== e.coinBalance && j.fbt._("You’ll have {remainingCoins} remaining.", [j.fbt._param("remainingCoins", Object(q.b)(r, {
							locale: t,
							type: Q.b.Reddit,
							currency: Q.a
						}))], {
							hk: "DrEWG"
						})
					}
					return n.a.createElement("div", {
						className: R.a.purchaseGildHeader
					}, n.a.createElement("div", {
						className: R.a.awardTitle
					}, j.fbt._("Give the {awardName} Award", [j.fbt._param("awardName", e.award.name)], {
						hk: "28iR3j"
					})), n.a.createElement("div", {
						className: R.a.awardTitleDescription
					}, a.join(" ")), n.a.createElement("img", {
						className: R.a.awardIcon,
						src: e.award.icon.url
					}), n.a.createElement("button", {
						className: R.a.closeButton,
						onClick: e.onCloseClick
					}, n.a.createElement(M.b, {
						className: Object(d.a)(R.a.closeIcon, R.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				be = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				ge = a.n(be);
			const Ce = e => n.a.createElement("label", {
				className: Object(d.a)(e.className, ge.a.paymentOption)
			}, n.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), n.a.createElement("div", {
				className: Object(d.a)(ge.a.paymentOptionContent, {
					[ge.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class ye extends n.a.Component {
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
								n(Object(C.e)(a));
								break;
							case "paypal":
								n(Object(C.f)(a))
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
					return n.a.createElement("form", {
						className: e
					}, n.a.createElement("fieldset", null, n.a.createElement(Ce, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, n.a.createElement("div", {
						className: ge.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${O.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), n.a.createElement(Ce, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, n.a.createElement("div", {
						className: ge.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${O.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), n.a.createElement("div", {
						className: ge.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${O.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), n.a.createElement("div", {
						className: ge.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${O.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), n.a.createElement("div", {
						className: ge.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${O.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			var fe = Object(h.c)(ye),
				ve = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				Ee = a("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: Pe
			} = a("./node_modules/fbt/lib/FbtPublic.js"), xe = e => {
				let {
					className: t
				} = e;
				return n.a.createElement(Ee.b, {
					className: t
				}, Pe._("Error loading Stripe, please refresh the page and try again", null, {
					hk: "2O1NWp"
				}))
			};
			var je = a("./src/reddit/components/CheckoutForm/index.m.less"),
				Oe = a.n(je);
			const ke = Object(o.c)({
				cardCvcValidation: E.e,
				cardExpiryValidation: E.f,
				cardName: E.g,
				cardNumberValidation: E.h,
				nameOnCardValidation: E.j,
				postalCode: E.k
			});
			class we extends n.a.Component {
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
						onCardExpiryChange: c,
						onCardCvcChange: i,
						nameOnCardValidation: l,
						postalCode: m,
						stripe: u
					} = this.props;
					if (!u) return n.a.createElement(xe, {
						className: e
					});
					const {
						cardNumberReady: p,
						cardExpiryReady: h,
						cardCVCReady: b
					} = this.state, g = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return n.a.createElement("div", {
						className: Object(d.a)(Oe.a.checkoutForm, e)
					}, n.a.createElement("div", {
						className: Oe.a.formCellWide
					}, n.a.createElement("input", {
						className: Object(d.a)(Oe.a.cardInput, Oe.a.nameOnCard, {
							[Oe.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: j.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: r
					})), n.a.createElement("div", {
						className: Oe.a.formCell
					}, n.a.createElement(G.CardNumberElement, {
						className: Object(d.a)(Oe.a.cardInput, {
							[Oe.a.cardInputError]: !!s
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: j.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: g
						}
					}), !p && n.a.createElement("div", {
						className: Oe.a.elementPlaceholder
					}, j.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), n.a.createElement("div", {
						className: Oe.a.formCell
					}, n.a.createElement(G.CardExpiryElement, {
						className: Object(d.a)(Oe.a.cardInput, {
							[Oe.a.cardInputError]: !!a
						}),
						onChange: c,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: j.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: g
						}
					}), !h && n.a.createElement("div", {
						className: Oe.a.elementPlaceholder
					}, j.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), n.a.createElement("div", {
						className: Oe.a.formCell
					}, n.a.createElement(G.CardCvcElement, {
						className: Object(d.a)(Oe.a.cardInput, {
							[Oe.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: j.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: g
						}
					}), !b && n.a.createElement("div", {
						className: Oe.a.elementPlaceholder
					}, j.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), n.a.createElement("div", {
						className: Oe.a.formCell
					}, n.a.createElement("input", {
						className: Object(d.a)(Oe.a.cardInput, Oe.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: j.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: m
					})))
				}
			}
			var Ne = Object(s.b)(ke, e => ({
					onCardNumberChange: t => e(Object(u.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(u.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(u.cardCvcChange)(t)),
					onNameInput: t => e(Object(u.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(u.postalCodeInput)({
						postalCode: t
					}))
				}))(we),
				_e = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Se = a("./src/reddit/components/StripePaymentForm/index.m.less"),
				Ie = a.n(Se);
			var Me = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: a
					} = e, r = Object(G.useStripe)();
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(Ne, {
						className: Ie.a.creditCard,
						stripe: r
					}), n.a.createElement(_e.a, {
						className: Ie.a.saveCardCheckbox,
						isSelected: a,
						onClick: t,
						text: j.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), n.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement("img", {
						className: Ie.a.poweredByStripeIcon,
						src: `${O.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				Te = a("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: Ae
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Re = e => 2 === e.length ? e : "0" + e, Be = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${O.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${O.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${O.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${O.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class De extends n.a.PureComponent {
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
					} = this.props, t = Be(e.brand);
					return n.a.createElement("label", {
						className: Ie.a.savedCardContainer
					}, n.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), n.a.createElement("div", {
						className: Object(d.a)(Ie.a.cardImageContainer, {
							[Ie.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? n.a.createElement("img", {
						className: Ie.a.brandImage,
						src: t
					}) : n.a.createElement("span", {
						className: Ie.a.unknownCC
					}, "CC")), n.a.createElement("div", {
						className: Ie.a.cardDetails
					}, n.a.createElement("span", null, Ae._("Card ending in {Credit Card last four digits}", [Ae._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), n.a.createElement("span", {
						className: Ie.a.expiry
					}, Ae._("Expires {month} / {year}", [Ae._param("month", Re(e.expirationMonth.toString())), Ae._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? n.a.createElement("button", {
						className: Ie.a.confirmText,
						onClick: this.onConfirmClick
					}, Ae._("Confirm", null, {
						hk: "gFhpD"
					})) : n.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, n.a.createElement(Te.b, {
						className: Ie.a.icon
					})))
				}
			}
			var Ge = De;
			const Le = Object(o.c)({
				rememberCard: E.t,
				savedCard: e => Object(E.v)(e)[0],
				stripeInfoLoading: E.u
			});
			class Fe extends n.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: a,
						onToggleRememberCard: r,
						rememberCard: s,
						savedCard: o,
						stripe: c,
						stripeInfoLoading: i
					} = this.props;
					if (!c) return n.a.createElement(xe, {
						className: Object(d.a)(Ie.a.stripePaymentForm, e)
					});
					const l = i,
						m = !l && o,
						u = !l && !m,
						p = l ? Ie.a.loadingState : m ? Ie.a.savedCardState : Ie.a.formState;
					return n.a.createElement("div", {
						className: Object(d.a)(Ie.a.stripePaymentForm, p, e)
					}, l && n.a.createElement(ve.a, {
						className: Ie.a.loader,
						sizePx: 60
					}), m && o && n.a.createElement("form", null, n.a.createElement(Ge, {
						nightmode: t,
						onDelete: a,
						savedCard: o
					})), u && n.a.createElement(Me, {
						onToggleRememberCard: r,
						rememberCard: s
					}))
				}
			}
			var Qe = Object(s.b)(Le, e => ({
					onClickDeleteCard: t => e(Object(m.c)(t)),
					onToggleRememberCard: () => e(Object(u.toggleRememberCard)())
				}))(Fe),
				qe = a("./src/reddit/helpers/createEmojiText/index.tsx");
			const He = e => {
				const t = Object(me.a)(),
					a = Object(L.a)(),
					r = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return n.a.createElement(G.Elements, {
					stripe: a
				}, n.a.createElement(n.a.Fragment, null, e.gildThingId ? n.a.createElement(he, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && n.a.createElement(pe, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), n.a.createElement("div", {
					className: R.a.purchaseBody
				}, n.a.createElement(fe, {
					className: R.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === F.Gb && n.a.createElement(G.ElementsConsumer, null, t => {
					let {
						stripe: a
					} = t;
					return n.a.createElement(Qe, {
						nightmode: e.nightmode,
						stripe: a
					})
				}), n.a.createElement("div", {
					className: R.a.checkoutFooter
				}, n.a.createElement("div", {
					className: R.a.purchaseTotal
				}, j.fbt._("Total: {totalAmount}", [j.fbt._param("totalAmount", Object(q.b)(r, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === F.Hb && e.paypalErrorMessage && n.a.createElement("div", {
					className: R.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === F.Gb && e.stripeErrorMessage && n.a.createElement("div", {
					className: R.a.errorMessage
				}, e.stripeErrorMessage), n.a.createElement("div", {
					className: R.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? n.a.createElement(n.a.Fragment, null, j.fbt._("The minimum Coins purchase is {coins}.", [j.fbt._param("coins", Object(q.b)(e.purchasePackage.coins, {
						locale: e.locale,
						type: Q.b.Reddit,
						currency: Q.a
					}))], {
						hk: "1y9FMB"
					}), n.a.createElement("br", null)) : null
				})({
					...e,
					locale: t
				}), Object(qe.a)(j.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": n.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), n.a.createElement(G.ElementsConsumer, null, t => {
					let {
						stripe: a,
						elements: r
					} = t;
					return n.a.createElement(le, {
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
			};
			var Ve = a("./src/reddit/components/PennyPurchaseModal/index.m.less"),
				We = a.n(Ve);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = Object(o.c)({
					activePage: E.o,
					allowNavigationCallback: e => {
						const t = Object(P.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: x.e,
					gildThingId: E.q,
					isIframed: f.g,
					nightmode: x.db,
					savedCardsPending: E.u,
					selectedAward: v.b,
					selectedPayment: E.c,
					stripeErrorMessage: E.i,
					stripeTokenPending: E.l,
					paypalErrorMessage: E.d,
					userName: e => {
						const t = Object(x.k)(e);
						return `u/${Object(y.e)(t)}`
					}
				}),
				Ye = Object(s.b)(Ue, (e, t) => ({
					closeModal: () => {
						e(Object(p.a)()), e(Object(l.a)())
					},
					loadSavedCards: () => e(Object(m.e)()),
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
			class Xe extends n.a.Component {
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
					t(), Object(g.d)(g.a.GoldPayment, !1), a(Object(C.i)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(C.g)(e))
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
						userName: b,
						isIframed: g
					} = this.props;
					return n.a.createElement("div", {
						className: t
					}, "selectPayment" === e && n.a.createElement(He, {
						coinBalance: a,
						gildThingId: r,
						nightmode: s,
						onCloseModal: d,
						onCompletePurchaseClick: c,
						onPaymentSelected: i,
						paypalErrorMessage: h,
						savedCardsPending: l,
						selectedAward: m,
						selectedPayment: o,
						stripeErrorMessage: u,
						stripeTokenPending: p,
						userName: b,
						isIframed: g
					}), "paymentCompleted" === e && n.a.createElement(D, {
						gildThingId: r,
						isGild: !0,
						onCloseClick: d,
						userName: b
					}))
				}
			}
			const Ze = Object(c.a)(Xe);
			t.default = Ye(Object(h.c)(class extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(C.b)(e)), this.onCloseModal()
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
					return n.a.createElement(Ze, Je({}, this.props, {
						className: Object(d.a)(this.props.className, We.a.pennyPurchaseModal),
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
				return v
			})), a.d(t, "c", (function() {
				return E
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
				C = a("./src/reddit/controls/ErrorText/index.m.less"),
				y = a.n(C);
			class f extends d.a.Component {
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
						className: Object(l.a)(y.a.wrapper, t)
					}, d.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, s), c && d.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: n
					}, a || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: r,
						fallbackMessage: n,
						messages: s = []
					} = e, o = s.length ? s : n ? [n] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(f, {
						className: a,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(v, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = f
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "f", (function() {
				return C
			})), a.d(t, "a", (function() {
				return y
			})), a.d(t, "i", (function() {
				return f
			})), a.d(t, "h", (function() {
				return v
			})), a.d(t, "j", (function() {
				return E
			})), a.d(t, "g", (function() {
				return P
			})), a.d(t, "c", (function() {
				return x
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
				i = a("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = a("./src/redditGQL/operations/CreateEconOrder.json"),
				l = a("./src/redditGQL/operations/CreatePaypalPayment.json"),
				m = a("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				u = a("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = a("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				h = a("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = a("./src/redditGQL/operations/UserSavedStripeCards.json"),
				g = a("./src/lib/makeGqlRequest/index.ts");
			const C = (e, t, a, r, s, o) => {
				const c = new n.a(r.price).multipliedBy(s).toFixed();
				return Object(g.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: a.id,
							productVersion: a.version,
							pricePackageId: r.id,
							currency: r.currency,
							price: c,
							productsCount: s.toString(),
							...o
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
				v = (e, t, a, r) => Object(g.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: a,
						token: r
					}
				}),
				E = (e, t, a, r) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: a,
						cardId: r
					}
				}),
				P = (e, t, a, r, n) => Object(g.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: a,
						successUrl: r,
						cancelUrl: n
					}
				}),
				x = (e, t, a, r) => Object(g.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: a,
						token: r
					}
				}),
				j = (e, t, a, r) => Object(g.a)(e, {
					...i,
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
				return g
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
				},
				u = a("./src/config.ts"),
				p = a("./node_modules/react-redux/es/index.js"),
				h = a("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let b = null;

			function g() {
				const e = Object(p.e)(h.a);
				return b || (b = m(u.a.stripe.apiKey(e))), b
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
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var r = a("./src/reddit/constants/experiments.ts"),
				n = a("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(n.a)(r.hd)
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
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PennyPurchaseModal.17b119c6decb02fc471c.js.map