// https://www.redditstatic.com/desktop2x/Settings.2ca9340dc0c7db84c393.js
// Retrieved at 8/27/2020, 1:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Settings"], {
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const n = Object(s.a)(e),
					a = parseInt(n) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/lib/validateEmail/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = (e, t) => {
				if (!e && t) return !0;
				return /^.+\@.+\..+$/.test(e)
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return T
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "d", (function() {
				return W
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				o = n.n(a),
				r = n("./node_modules/uuid/v4.js"),
				i = n.n(r),
				c = n("./src/config.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/addQueryParams/index.ts"),
				m = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/sentry/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/actions/gold/constants.ts"),
				h = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				v = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./src/graphql/operations/CancelEconRecurringPayment.json")),
				y = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				_ = n("./src/graphql/operations/CreateEconOrder.json"),
				k = n("./src/graphql/operations/CreatePaypalPayment.json"),
				C = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				x = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				E = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				w = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				O = n("./src/graphql/operations/UserSavedStripeCards.json"),
				S = n("./src/lib/makeGqlRequest/index.ts");
			const j = () => s.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				P = e => e.map(e => e.message).join(" : "),
				N = (e, t, n, a) => async (o, r, c) => {
					let {
						gqlContext: l
					} = c;
					const d = i()(),
						m = await ((e, t, n, s, a, o) => Object(S.a)(e, Object.assign(Object.assign({}, _), {
							variables: {
								input: {
									nonce: t,
									productId: n.id,
									productVersion: n.version,
									pricePackageId: n.pricePackages[0].id,
									currency: n.pricePackages[0].currency,
									price: (n.pricePackages[0].price * o).toString(),
									productsCount: o.toString(),
									powerUps: {
										subredditId: s,
										isAnonymous: a
									}
								}
							}
						})))(l(), d, e, t, n, a);
					if (m.ok) {
						const e = m.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(P(t));
						if (n) return n.id
					}
					throw new Error((() => s.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, T = (e, t, n, a, o) => async (r, c, l) => {
					let {
						gqlContext: d
					} = l;
					const m = c(),
						p = () => r(Object(h.stripeApiError)(s.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let b, v, y = "";
					try {
						y = await r(N(t, n, a, o))
					} catch (k) {
						return u.c.captureException(k), void(k.message && r(Object(h.stripeApiError)(k.message)))
					}
					r(Object(h.stripeTokenPending)());
					const _ = Object(g.v)(m);
					if (_ || (b = await r(Object(h.validateAndCreateStripeToken)(e)), v = Object(g.s)(m), b)) try {
						const e = i()(),
							t = _ || v ? b && v ? ((e, t, n, s) => Object(S.a)(e, Object.assign(Object.assign({}, C), {
								variables: {
									nonce: t,
									orderId: n,
									token: s
								}
							})))(d(), e, y, b.id) : _ ? ((e, t, n, s) => Object(S.a)(e, Object.assign(Object.assign({}, E), {
								variables: {
									nonce: t,
									orderId: n,
									cardId: s
								}
							})))(d(), e, y, _) : null : ((e, t, n, s) => Object(S.a)(e, Object.assign(Object.assign({}, x), {
								variables: {
									nonce: t,
									orderId: n,
									token: s
								}
							})))(d(), e, y, b.id),
							s = await t;
						if (!s || !s.ok) return void p(); {
							const e = s.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void r(Object(h.stripeApiError)(P(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void p();
							const t = Object(f.i)(c());
							t && r(W({
								subredditId: n,
								powerupsCount: o,
								user: t
							}))
						}
					} catch (k) {
						u.c.captureException(k), p()
					}
				}, I = (e, t, n, s) => async (a, o, r) => {
					let {
						gqlContext: l
					} = r, m = "";
					try {
						m = await a(N(e, t, n, s))
					} catch (b) {
						return u.c.captureException(b), b.message && a(Object(h.paypalApiError)(b.message)), null
					}
					const p = c.a.redditUrl;
					try {
						const e = Object(d.a)("".concat(p, "/framedModal/paypal-finish"), {
								_o: p,
								r: t,
								o: m,
								s: !0
							}),
							n = Object(d.a)("".concat(p, "/framedModal/paypal-finish"), {
								_o: p,
								r: t,
								o: m
							}),
							r = i()(),
							c = await ((e, t, n, s, a) => Object(S.a)(e, Object.assign(Object.assign({}, k), {
								variables: {
									nonce: t,
									orderId: n,
									successUrl: s,
									cancelUrl: a
								}
							})))(l(), r, m, e, n);
						if (c && c.ok) {
							const e = c.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(h.paypalApiError)(P(e.errors))), null;
							const n = Object(f.i)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if ("ACTION_REQUIRED" === o) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && n) return a(W({
									subredditId: t,
									powerupsCount: s,
									user: n
								})), null
							}
						}
					} catch (b) {
						u.c.captureException(b)
					}
					return a(Object(h.paypalApiError)(j())), null
				}, M = (e, t) => async (n, s, a) => {
					let {
						gqlContext: o
					} = a;
					try {
						const s = i()(),
							a = await ((e, t, n, s) => Object(S.a)(e, Object.assign(Object.assign({}, y), {
								variables: {
									nonce: t,
									paymentId: n,
									token: s
								}
							})))(o(), s, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return n(Object(h.paypalApiError)(P(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (r) {
						u.c.captureException(r)
					}
					return n(Object(h.paypalApiError)(j())), !1
				}, A = () => async (e, t, n) => {
					let {
						gqlContext: a
					} = n;
					e(Object(h.savedCardsPending)());
					try {
						const t = await (e => Object(S.a)(e, Object.assign(Object.assign({}, O), {
							variables: {}
						})))(a());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(h.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: s
							} = n.data.identity, a = s.map(e => o()(Object.assign(Object.assign({}, e), {
								cardId: e.id
							}), "id"));
							e(Object(h.savedCardsSuccess)(a)), a[0] && e(Object(h.selectSavedCard)(a[0].cardId))
						} else e(Object(h.stripeApiError)(s.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (r) {
						u.c.captureException(r), e(Object(h.savedCardsSuccess)([]))
					}
				}, R = e => async (t, n, s) => {
					let {
						gqlContext: a
					} = s;
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(S.a)(e, Object.assign(Object.assign({}, w), {
							variables: {
								cardId: t
							}
						})))(a(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: s
							} = n.data.deleteEconPaymentMethod;
						if (s && s.length) throw new Error(P(s))
					} catch (o) {
						u.c.captureException(o)
					}
				}, D = Object(m.a)(b.L), L = Object(m.a)(b.M), B = Object(m.a)(b.N), U = e => async (t, n) => {
					await t(D(e)), t(Object(l.e)({
						kind: p.b.Error,
						duration: l.a,
						text: e
					}))
				}, F = (e, t, n) => async (a, o, r) => {
					let {
						gqlContext: i
					} = r;
					a(L({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const o = await ((e, t) => Object(S.a)(e, Object.assign(Object.assign({}, v), {
							variables: {
								orderId: t
							}
						})))(i(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: s
								} = e.data.cancelEconRecurringPayment;
							if (s && s.length) return void a(U(s[0].message));
							a(B({
								subredditId: t,
								allocatedAt: n
							}))
						} else a(U(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						u.c.captureException(c), a(U(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, W = Object(m.a)(b.P)
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/endpoints/governance/community.ts"),
				o = n("./src/reddit/actions/governance/constants.ts");
			const r = Object(s.a)(o.a),
				i = e => {
					let {
						subredditId: t
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: o
						} = s;
						const i = await Object(a.a)(o(), {
							subredditId: t
						});
						i.ok && e(r(Object.assign({
							subredditId: t
						}, i.body)))
					}
				}
		},
		"./src/reddit/actions/pages/shared.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = n("./src/reddit/helpers/routeKey/index.ts"),
				o = n("./src/reddit/helpers/trackers/screenview.ts"),
				r = n("./src/telemetry/index.ts"),
				i = n("./src/telemetry/models/Timer.ts");
			const c = () => async (e, t) => {
				const n = t(),
					{
						currentPage: c
					} = n.platform;
				if (!c) return;
				const l = c.routeMatch,
					d = Object(s.a)(n),
					m = Object(a.b)(l, n, d);
				m && r.c.has(m) && Object(o.h)(l, n, i.TimerType.InApp, r.c.end(m))
			}
		},
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3DhQ2s_h1XCiwltypHmlbp",
				close: "_2oxgXPm-tiPAEPsJoUw-ZD",
				headerText: "_2sDCzF6zlpNJ5cbVDRCPOS",
				text: "_3eWjwYvkDvPzyq4FlubrF9",
				buttonWrapper: "_6ZHRZ8Epefe887d7LL-q6",
				primaryButton: "Ch-0dFLxLOtcc6xCyQvsk",
				secondaryButton: "bgwHoiDoSwFVZKRTLRQMF"
			}
		},
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/ConfirmModal/index.m.less"),
				c = n.n(i),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => a.a.createElement("div", {
				className: c.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: c.a.close
			}, a.a.createElement(l.b, null)), a.a.createElement(l.h, null, a.a.createElement("h2", {
				className: c.a.headerText
			}, e.headerText)), a.a.createElement(l.k, null, e.message && a.a.createElement("p", {
				className: c.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: c.a.text
			}, e.children), a.a.createElement("div", {
				className: c.a.buttonWrapper
			}, e.cancelText && a.a.createElement(r.i, {
				className: c.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(r.f, {
				className: c.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, n) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, n) {
			"use strict";
			var s, a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/currency/centsToDollars/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Governance/Token/index.tsx"),
				u = n("./src/reddit/helpers/governance/tokens.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(s || (s = {}));
			const h = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return b.fbt._("{price}/mo", [b.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				g = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return b.fbt._("{price} / month", [b.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var f = n("./src/reddit/components/Economics/Price/index.m.less"),
				v = n.n(f);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				let {
					subredditId: t,
					pointPrice: n
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
					className: v.a.token,
					subredditId: t
				}), n)
			}, k = Object(i.c)({
				tokenDisplayConversion: p.p,
				tokenName: p.q
			});
			t.a = Object(r.b)(k)(e => {
				const {
					className: t,
					hideTokenName: n,
					monthly: a,
					subredditId: r,
					tokenDisplayConversion: i,
					tokenName: m
				} = e, p = e.dollarPrice && "$".concat(Object(l.a)(e.dollarPrice, !0)), b = e.tokenPrice && Object(d.a)(Object(u.b)(e.tokenPrice, i)) + (n ? "" : " " + m);
				if (!p && !b) return null;
				const f = a ? s.Monthly : s.Once;
				return o.a.createElement("span", {
					className: Object(c.a)(t, v.a.price)
				}, p && b ? y._("{dollar-price} or {point-price}", [y._param("dollar-price", h(p, f)), y._param("point-price", o.a.createElement(_, {
					subredditId: r,
					pointPrice: h(b, f)
				}))], {
					hk: "2Gif0l"
				}) : p ? g(p, f) : b ? o.a.createElement(_, {
					subredditId: r,
					pointPrice: g(b, f)
				}) : null)
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less": function(e, t, n) {
			e.exports = {
				benefit: "sgAzSfJ3cjofmRQShi_EG",
				benefitsTitle: "_3LDMgjJZ0criD5C6vkYGyG",
				benefits: "_3uGt177J_rZ6Xz6VzVrs7Z",
				benefitCircle: "_2jc7SMzkp0naDavfk2O28v",
				brand: "_3l53DizR_kkO_baf0os07b",
				checkmarkWrapper: "NN5iOi2K5sFG4C9YcGUIn",
				checkmark: "ZUu3aY57ejQ1NApIW8_Jq",
				container: "_23Y0-3FxDgPbvd5cJxfyS8",
				joined: "_2QYhI2fIKc9rPD-QKvqcxf",
				joinedText: "_1UqTSeE2qLQTQSMvmNlVYF",
				price: "_3EoQAq_DUikYdJTKGFrJdE",
				subTitle: "_1NWafiCzr-9q28pfaL-tDA",
				title: "_2axdI_1ILk9zDgceVsmJwZ",
				topLine: "ZcAgghBpd1Mtnj5tk5c93"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/currency/centsToDollars/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less"),
				u = n.n(m);
			const p = [() => s.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => s.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => s.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => s.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				b = [() => s.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => s.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => s.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => s.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function h(e) {
				let {
					benefit: t,
					color: n
				} = e;
				return i.a.createElement("li", {
					className: u.a.benefit
				}, i.a.createElement("div", {
					className: u.a.benefitCircle,
					style: {
						backgroundColor: n
					}
				}), t)
			}
			t.b = Object(d.b)(Object(l.c)((function(e) {
				const {
					className: t,
					price: n,
					subreddit: r
				} = e;
				return i.a.createElement("div", {
					className: Object(a.a)(u.a.container, t)
				}, i.a.createElement("div", {
					className: u.a.topLine
				}, i.a.createElement(c.a, {
					className: u.a.brand,
					subreddit: r
				}), i.a.createElement("div", {
					className: u.a.title
				}, s.fbt._("{community} Supporter Membership", [s.fbt._param("community", r.displayText)], {
					hk: "eZ8PH"
				}))), i.a.createElement("header", {
					className: u.a.subTitle
				}, s.fbt._("Support the {community} community and receive exclusive access to premium features.", [s.fbt._param("community", r.displayText)], {
					hk: "2pm4PV"
				})), i.a.createElement("article", null, i.a.createElement("div", {
					className: u.a.benefitsTitle
				}, s.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), i.a.createElement("ul", {
					className: u.a.benefits
				}, p.map(e => i.a.createElement(h, {
					benefit: e(),
					key: e()
				}))), i.a.createElement("div", {
					className: u.a.benefitsTitle
				}, s.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), i.a.createElement("ul", {
					className: u.a.benefits
				}, b.map(e => i.a.createElement(h, {
					benefit: e(),
					key: e()
				})))), i.a.createElement("footer", {
					className: u.a.price
				}, s.fbt._("${price}/month", [s.fbt._param("price", Object(o.a)(n))], {
					hk: "2ykEVh"
				})))
			})))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, n) {
			e.exports = {
				bling1: "_3bFpAdmzeju5Ql4apA72Mz",
				pulse: "_14AnDN_X0RSUfV9D1Pe9X9",
				bling2: "_-8SkYF0AWUhZMShvTAty8",
				bling3: "_33JifCWcX_crkurifB5pzo",
				container: "_3gI6KjxK9w-BF4adKznqm6",
				crown: "_2UUIJaaZ6FDtWk-CQ_bAJF",
				crownTilt: "m3mBh304aV8eRhpVYDtv",
				crownImg: "_3UjxD8eArSGPOK9ydFdB66",
				crownTiltImg: "_335XoNCIgdnw1NeVMSD3YB",
				defaultIcon: "_1UJ_7ZuaT1wJZzUY6CLslm",
				icon: "_27dkKf4zi-Ny4-FV0XKx0d",
				largeContainer: "_2vtPk3WzODfPV6T2uKOi9x",
				largeBling1: "tQV0dex-2wW9l95VW59ym",
				largeBling2: "_22o1BzEAX778WumBKRfDae",
				largeBling3: "MqH9i4M4OAiAmvS-AdBJx",
				largeCrown: "_30sWCOTB9B8ZfsCDuOoMvQ",
				largeCrownImg: "_1hUveqwJI6eda9EpmMvUJI",
				largeDefaultIcon: "_3_OgvcHTKNX0og_Fw-oHOc",
				largeIcon: "_18B8fdJn2VAl1XHi5AdcVc"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts");

			function r(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, a.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
			var i = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = n("./src/reddit/icons/svgs/Crown/index.tsx"),
				l = n("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				m = n.n(d);
			const u = {
				regular: {
					bling1: m.a.bling1,
					bling2: m.a.bling2,
					bling3: m.a.bling3,
					container: m.a.container,
					crown: m.a.crown,
					crownImg: m.a.crownImg,
					defaultIcon: m.a.defaultIcon,
					icon: m.a.icon
				},
				large: {
					bling1: m.a.largeBling1,
					bling2: m.a.largeBling2,
					bling3: m.a.largeBling3,
					container: m.a.largeContainer,
					crown: m.a.largeCrown,
					crownImg: m.a.largeCrownImg,
					defaultIcon: m.a.largeDefaultIcon,
					icon: m.a.largeIcon
				}
			};

			function p(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					n = u[e.size || "regular"],
					s = e.subreddit && e.subreddit.primaryColor;
				return a.a.createElement("div", {
					className: Object(o.a)(n.container, e.className)
				}, e.subreddit ? a.a.createElement("img", {
					className: n.crownImg,
					src: Object(l.a)(e.subreddit, "Crown.gif")
				}) : a.a.createElement(c.a, {
					className: n.crown
				}), a.a.createElement(r, {
					className: n.bling1
				}), a.a.createElement(r, {
					className: n.bling2
				}), a.a.createElement(r, {
					className: n.bling3
				}), t ? a.a.createElement("img", {
					className: n.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : a.a.createElement(i.a, {
					className: n.defaultIcon,
					style: {
						backgroundColor: s
					}
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				m = n.n(d);
			const u = Object(r.c)({
				tokenSymbol: l.r
			});
			t.a = Object(o.b)(u)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return a.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less"),
				r = n.n(o);
			const i = e => a.a.createElement("div", {
				className: r.a.bullet
			}, a.a.createElement("div", {
				className: r.a.circle
			}, e.index), e.children)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/qrcode/lib/browser.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			class l extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dataURL: null
					}
				}
				componentDidMount() {
					this.updateDataURL()
				}
				componentDidUpdate(e) {
					e.url !== this.props.url && this.updateDataURL()
				}
				async updateDataURL() {
					const e = await a.a.toDataURL(this.props.url, {
						color: {
							dark: this.props.color || Object(c.a)(this.props).button,
							light: Object(c.a)(this.props).body
						},
						margin: 0,
						width: 176
					});
					this.setState({
						dataURL: e
					})
				}
				render() {
					const {
						dataURL: e
					} = this.state;
					return e ? r.a.createElement("img", {
						src: e
					}) : null
				}
			}
			t.a = Object(i.a)(l)
		},
		"./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "zf2hn2CERT9hR1pMinJ8F",
				header: "_3Qbr92L8VyuinXjEu3tL3Z",
				title: "_3bzQcWx2T0t87zOlgxrRKU",
				closeButton: "_22lrdZNOZAr7T7zmwmjUvJ",
				body: "_3Gcx8rw4-_lVDd-C1xmCEi",
				leftSection: "_3YqVpshpU6XQk203i6QdDy",
				sectionHeader: "_1ubUpPIvDdZW-u31PFTQzQ",
				content: "_1vBcEJHUketYOZJIkZpJEH",
				bullet: "_1NkUPpb7srAhbim5_nyFUH",
				circle: "_3dmqOAtE4YgxGinHtv6QZs",
				rightSection: "_2KqtJ5hLjiAZnv3xLL4_M6",
				qrCode: "_14NzP1hK14fTKLhwIn2aDG",
				amount: "yAJDmHckBS4VSNkr7oGi4"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_1ujAdmx9p1ZtDs5hGNKqxa",
				leftSection: "_1HtpEFt_H9-TSPUAO40Z-e",
				sectionHeader: "_2kwF36BsSdAp4SHuoiGycG",
				content: "_1AoGRYkiuWDGUrnKhaEAsU",
				rightSection: "_2thtUlDB-iI-fgl_zwElV2",
				qrCode: "_2rbXdga6vMYV1aCAtGfPiv"
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				r = n("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = Object(i.c)(e => {
				const t = "".concat(e.tooltipId, "-hover-id");
				return a.a.createElement(o.a, {
					className: e.wrapperClassName,
					hoverId: t,
					sendHoverEvent: e.sendHoverCardEvent,
					tooltipId: e.tooltipId,
					authorOrSubredditName: e.user
				}, e.children, a.a.createElement(r.a, {
					className: e.className,
					hoverId: t,
					sendEvent: e.sendEvent,
					subredditId: e.subredditId,
					tooltipId: e.tooltipId,
					tooltipType: e.tooltipType,
					userName: e.user
				}))
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? a.a.createElement(a.a.Fragment, null, e.children) : null;
			t.b = Object(o.a)({
				ErrorComponent: c,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("AuthorHovercard~EconTopAwardersModal~Settings~SubredditWiki"), n.e("AuthorHovercard")]).then(n.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/lodash/isNil.js")),
				c = n.n(i),
				l = n("./src/reddit/constants/jsapiEvents.ts");
			var d = n("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const u = Object(r.c)({
				consumers: e => e.jsApi
			});
			class p extends s.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: n,
								consumers: s
							} = t,
							a = m(t, ["className", "consumers"]);
						d.a.publish(l.a, a, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					c()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					c()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? a.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && a.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(o.b)(u, {})(p),
				h = n("./src/reddit/selectors/comments.ts"),
				g = n("./src/reddit/selectors/subreddit.ts");
			const f = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var v = Object(o.b)(() => Object(r.a)(f, h.j, (e, t) => Object.assign(Object.assign({}, e), {
				depth: t
			})))(e => a.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const y = (e, t) => {
				const n = Object(h.n)(e, t),
					s = Object(g.I)(e, t);
				return {
					comment: n,
					isModerator: !(!s || !s.name) && !!e.moderatingSubreddits[s.name],
					subredditOrProfile: s
				}
			};
			var _ = Object(o.b)(() => Object(r.a)(y, e => e))(e => a.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var k = Object(o.b)(() => Object(r.c)({
					subreddit: g.R
				}))(e => a.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				C = n("./src/reddit/selectors/posts.ts");
			var x = Object(o.b)(() => Object(r.c)({
				post: C.N,
				subredditOrProfile: C.ab,
				isModerator: (e, t) => {
					const n = Object(C.ab)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var E = Object(o.b)(() => Object(r.c)({
				subredditOrProfile: (e, t) => Object(C.ab)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const n = Object(C.ab)(e, {
						postId: t.post.id
					});
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var w = Object(o.b)(() => Object(r.c)({
				post: C.N,
				subredditOrProfile: C.ab,
				isModerator: (e, t) => {
					const n = Object(C.ab)(e, t);
					return n && !!e.moderatingSubreddits[n.name] || !1
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var O = Object(o.b)(() => Object(r.c)({
				subreddit: g.R
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var S = Object(o.b)(() => Object(r.c)({
				subredditOrProfile: (e, t) => Object(g.L)(e, {
					identifier: t
				})
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var j = Object(o.b)(() => Object(r.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? Object(g.R)(e, {
						subredditId: n
					}) : null
				}
			}))(e => a.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/icons/svgs/Best/index.m.less"),
				c = n.n(i);
			var l = e => a.a.createElement("svg", {
					className: Object(o.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), a.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				d = n("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = n.n(d);
			var u = e => a.a.createElement("svg", {
					className: Object(o.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				p = n("./src/reddit/icons/svgs/Hot/index.m.less"),
				b = n.n(p);
			var h = e => a.a.createElement("svg", {
					className: Object(o.a)(b.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("title", null, "Hot"), a.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = n("./src/reddit/icons/svgs/New/index.tsx"),
				f = n("./src/reddit/icons/svgs/Rising/index.m.less"),
				v = n.n(f);
			var y = e => a.a.createElement("svg", {
					className: Object(o.a)(v.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				_ = n("./src/reddit/icons/svgs/Top/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/index.m.less"),
				C = n.n(k);
			const x = {
				[r.O.BEST]: l,
				[r.O.HOT]: h,
				[r.O.NEW]: g.a,
				[r.O.CONTROVERSIAL]: u,
				[r.O.TOP]: _.a,
				[r.O.RISING]: y
			};

			function E(e) {
				let {
					className: t,
					sort: n
				} = e;
				const s = x[n];
				return s ? a.a.createElement(s, {
					className: Object(o.a)(t, C.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/Loader/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_1Jx7v9Z1D1htyYeKixW2Gx"
			}
		},
		"./src/reddit/components/Settings/AccountForm.m.less": function(e, t, n) {
			e.exports = {
				Trash: "_2UoJFO4kX93xqtJJK4wsZl",
				trash: "_2UoJFO4kX93xqtJJK4wsZl",
				DeactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				deactivateButton: "EBd2MhBQlQeZ13YeP0K8a",
				DeactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym",
				deactivateWrapper: "_3VF_RMRPjwlO4Zr4WnpLym",
				BetaTestsHeading: "_2Y2Uj5LLPO97ua8VvJAejj",
				betaTestsHeading: "_2Y2Uj5LLPO97ua8VvJAejj",
				"m-responsive": "njsaYJtS0A-2XLGcAVIju",
				mResponsive: "njsaYJtS0A-2XLGcAVIju",
				InBetaToggle: "_1gdGmpEa4xqfXwItzFewwq",
				inBetaToggle: "_1gdGmpEa4xqfXwItzFewwq",
				InRedesignBetaToggle: "_2HkX3D1t3uo8khrlDewaew",
				inRedesignBetaToggle: "_2HkX3D1t3uo8khrlDewaew",
				ResponsiveOverlay: "_1MhsFh2a0lc8OAUe2A5s8F",
				responsiveOverlay: "_1MhsFh2a0lc8OAUe2A5s8F"
			}
		},
		"./src/reddit/components/Settings/AccountPrefsSection/index.m.less": function(e, t, n) {
			e.exports = {
				tertiaryBtn: "_3yDGs2XJxcsMFCZLDmw61k"
			}
		},
		"./src/reddit/components/Settings/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				TwitterIcon: "y6CoOX8JxvJY0Kl9fvx8O",
				twitterIcon: "y6CoOX8JxvJY0Kl9fvx8O",
				GoogleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				googleIcon: "_2HGIcs7x1ojc1Moq_zjot8",
				AppleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				appleIcon: "_3KWqmZWrSf8rUGBzgw4zPr",
				LoadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				loadingIcon: "PYTg-gbJiYylgL7Ep40Ez",
				ConnectApple: "TAF33bKwRX0N0jqZED4G5",
				connectApple: "TAF33bKwRX0N0jqZED4G5",
				"m-responsive": "_2CDbVOW43orfPYw-t-nPiq",
				mResponsive: "_2CDbVOW43orfPYw-t-nPiq",
				ConnectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				connectGoogle: "_15mHBcXEigFDBhqx4A5u7z",
				ConnectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				connectTwitter: "X3WnGWuTGeHRuSAUa5SvC",
				ConnectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				connectTwitterButton: "_3492mSfQUroLGCVlS9cxuC",
				ConnectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				connectGoogleButton: "_3PZhYrOiAsgZIW2cezS6tI",
				ConnectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
				connectAppleButton: "_1oQRGKLqEtbGwWUMbhCDZj",
				TextAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				textAndIconWrapper: "_1pLtFFacVWJa1d5e20ySJX",
				DisconnectButton: "_3YGYMFQnmSavH2Yf3BYPQ1",
				disconnectButton: "_3YGYMFQnmSavH2Yf3BYPQ1",
				Username: "_1Na-ZHbt3YWbfBck8jEjd",
				username: "_1Na-ZHbt3YWbfBck8jEjd",
				ConnectionInfo: "_3IF4vw6Egg85g_ne634Hl_",
				connectionInfo: "_3IF4vw6Egg85g_ne634Hl_"
			}
		},
		"./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Settings-CreatePasswordSSOModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Settings-CreatePasswordSSOModal").then(n.bind(null, "./src/reddit/components/Settings/CreatePasswordSSOModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Settings/CreatePasswordSSOModal/index.tsx"
				}
			});
			t.a = a
		},
		"./src/reddit/components/Settings/Creator/Header/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1PL-vwvbwULAlKIw_-rp6o",
				tag: "AdxLJ-FF3A2DW8rpMjDNt",
				title: "XzPPDkPAIQWYbDf1sDeLq"
			}
		},
		"./src/reddit/components/Settings/Creator/StripeConnect/index.m.less": function(e, t, n) {
			e.exports = {
				button: "ldUISE1q75VkTpDCvw2QT",
				cta: "_135GEuWAf6THuO7EPL_lA1",
				disclaimer: "_2y2cexvCxDTDYNniIjPLpx",
				icon: "_2b7jOhtXSYQ5sHqTP2vlda",
				legal: "J3oHTng7rwXevhpG9krPI",
				legalLink: "_1cRLUcu6PFsJKj-BeYgYy0"
			}
		},
		"./src/reddit/components/Settings/Creator/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2U2Xb0AtotCKvoU6HPwO2y"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2VsAK7m6JTJitCSeSvirtt",
				container: "_2VsAK7m6JTJitCSeSvirtt",
				HeaderText: "kAxpnDHCzK52N-knLlhM1",
				headerText: "kAxpnDHCzK52N-knLlhM1",
				Close: "_3BQ70VJHQaBkt1OQUrZgN",
				close: "_3BQ70VJHQaBkt1OQUrZgN",
				PrimaryButton: "_29VAKmRm7MJtgmyN_D683I",
				primaryButton: "_29VAKmRm7MJtgmyN_D683I",
				SecondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				secondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				ButtonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				buttonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				TextArea: "_3KUxPQl1bIbMalB1ElgkND",
				textArea: "_3KUxPQl1bIbMalB1ElgkND",
				SectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				sectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				H: "_33YDTJ9EBpPYIbuAhgieNI",
				h: "_33YDTJ9EBpPYIbuAhgieNI",
				P: "_2Jyci5nN37DUMdKXr2eRn",
				p: "_2Jyci5nN37DUMdKXr2eRn",
				Input: "_161WTqM53-R3b5XBxClmEs",
				input: "_161WTqM53-R3b5XBxClmEs",
				CheckBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				checkBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				UL: "HulKM8oqJogE46P-pLJi7",
				ul: "HulKM8oqJogE46P-pLJi7"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				l = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/Settings/DeactivateModal.m.less"),
				u = n.n(m),
				p = n("./src/lib/lessComponent.tsx"),
				b = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const h = p.a.div("Container", u.a),
				g = p.a.h2("HeaderText", u.a),
				f = p.a.button("Close", u.a),
				v = p.a.wrapped(i.b, "PrimaryButton", u.a),
				y = p.a.wrapped(i.i, "SecondaryButton", u.a),
				_ = p.a.div("ButtonWrapper", u.a),
				k = p.a.textarea("TextArea", u.a),
				C = p.a.h3("SectionLabel", u.a),
				x = p.a.p("H", u.a),
				E = p.a.p("P", u.a),
				w = p.a.wrapped(l.a, "Input", u.a),
				O = p.a.div("CheckBoxWrapper", u.a),
				S = p.a.ul("UL", u.a),
				j = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				P = {
					ios: () => s.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => s.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => s.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => s.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.showConfirm = () => {
						const e = this.state;
						e.password && e.username && e.checkbox && this.setState({
							showConfirm: !0
						})
					}, this.handleSubmit = () => {
						const e = this.state,
							{
								showConfirm: t
							} = e,
							n = b(e, ["showConfirm"]);
						this.props.onClick(n), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props;
						return o.a.createElement(d.k, null, o.a.createElement(x, null, s.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), o.a.createElement(S, null, o.a.createElement("li", null, s.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), o.a.createElement("li", null, s.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && o.a.createElement("li", null, s.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(j).map((e, t) => o.a.createElement("span", {
							key: e
						}, !!t && ", ", o.a.createElement("a", {
							href: j[e],
							target: "_blank"
						}, P[e] && P[e]()))))), o.a.createElement(C, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), o.a.createElement(k, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), o.a.createElement(C, null, s.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), o.a.createElement(w, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: s.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), o.a.createElement(w, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: s.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), o.a.createElement(O, null, o.a.createElement(c.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), o.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), o.a.createElement(_, null, o.a.createElement(y, {
							onClick: e.exit
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), o.a.createElement(v, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, s.fbt._("deactivate", null, {
							hk: "3r52aW"
						}))))
					}, this.renderPremiumNotificationMessage = e => {
						let {
							platform: t,
							isMobile: n
						} = e;
						return s.fbt._("{text with URL}", [s.fbt._param("text with URL", n ? o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", o.a.createElement("a", {
							href: j[t],
							target: "_blank"
						}, " ", P[t] && P[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", o.a.createElement("a", {
							href: j[t],
							target: "_blank"
						}, " ", P[t] && P[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
							hk: "1lLr9b"
						})
					}, this.renderPremiumNotification = () => o.a.createElement(d.k, null, o.a.createElement(x, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), o.a.createElement(E, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
						platform: "android",
						isMobile: !0
					}), this.props.user && this.props.user.hasIOSSubscription && this.renderPremiumNotificationMessage({
						platform: "ios",
						isMobile: !0
					}), this.props.user && this.props.user.hasPaypalSubscription && this.renderPremiumNotificationMessage({
						platform: "paypal",
						isMobile: !1
					}), this.props.user && this.props.user.hasStripeSubscription && this.renderPremiumNotificationMessage({
						platform: "stripe",
						isMobile: !1
					})), o.a.createElement(_, null, o.a.createElement(v, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, s.fbt._("deactivate", null, {
						hk: "1ZQPu5"
					})))), this.renderConfirm = () => o.a.createElement(d.k, null, o.a.createElement(x, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), o.a.createElement(_, null, o.a.createElement(y, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, s.fbt._("back", null, {
						hk: "tEs8T"
					})), o.a.createElement(v, {
						onClick: this.handleSubmit
					}, s.fbt._("deactivate", null, {
						hk: "3r52aW"
					})))), this.state = {
						password: "",
						username: "",
						checkbox: !1,
						feedback: "",
						showConfirm: !1,
						showPremiumNotification: !!e.user && e.user.isGold && e.user.hasGoldSubscription
					}
				}
				render() {
					const e = this.props;
					return o.a.createElement(h, null, o.a.createElement(f, {
						onClick: e.exit
					}, o.a.createElement(d.b, null)), o.a.createElement(d.h, null, o.a.createElement(g, null, s.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(r.a)(N)
		},
		"./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less": function(e, t, n) {
			e.exports = {
				"m-responsive": "_15G7qQCEazg98Od6QzTXKW",
				mResponsive: "_15G7qQCEazg98Od6QzTXKW",
				row: "_2p7Y7z5wSBn5aCi7eK2pB2",
				stepNumber: "_10_kLYlr2P64gGtVuRmDIU",
				icon: "_5nI2F3HBs4WbXsJXozR2",
				notify: "_3L8va2Rx0PoIz4zyBzTJXN",
				text: "_3MBs-ro9yZMQKKKOcPDrEo",
				ModalText: "BjkPaG023MR6P-Jr4B9il",
				modalText: "BjkPaG023MR6P-Jr4B9il"
			}
		},
		"./src/reddit/components/Settings/DesktopNotifications/index.m.less": function(e, t, n) {
			e.exports = {
				ResponsiveOverlay: "y1f5g6WILztw-hqz3uOwa",
				responsiveOverlay: "y1f5g6WILztw-hqz3uOwa",
				ResponsiveTooltip: "_1CGsdbtchNFJvC6VaaIT_W",
				responsiveTooltip: "_1CGsdbtchNFJvC6VaaIT_W"
			}
		},
		"./src/reddit/components/Settings/FPRWarning/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3wX6ugmf6aIVCMSO5EBamI",
				header: "_1uO-ppIAy4G9hITe3aezOg",
				status: "_3StJsb37UVnMUDKcGg5mHg",
				statusText: "_247vhiDCQJRjOMCUvZ-mqZ",
				description: "_1tBD7BkJRBAC1gbtHq-Dyq",
				actionContainer: "_28xcfOINVo3MU8ysX5alBu",
				image: "OYNB2zTDsEUOySExl6VnM",
				error: "_1Kc1Z_c_GvBk26Xi_syDhP",
				success: "_2Rs219v7hWj_DClRZzJUzJ",
				emailContainer: "_1M2FGf5OZeqPmUFe50iTut",
				emailText: "_1mB8g4h7c9Xn8964Bc3tfp",
				emailAddress: "_31W5hFXts06EPszYoM6jq8",
				input: "DCF-EASL8JBNyY7zEddo_",
				inputIcon: "_1-rwArBHnhyhkZX-fy6axp",
				errorBorder: "_2V4wZcvO9aShV0B2nZi2nP",
				successBorder: "_2PlXkaRXoDbHSJMgwvn-tM",
				primaryBtn: "zD8zqnlttfX-II-HmEd_u",
				errorMsg: "_3zJvYSoQlWXh-VwUoInXm_"
			}
		},
		"./src/reddit/components/Settings/FeedForm.m.less": function(e, t, n) {
			e.exports = {
				"m-responsive": "bQQyYzcR_4xlvHaj1mE9u",
				mResponsive: "bQQyYzcR_4xlvHaj1mE9u"
			}
		},
		"./src/reddit/components/Settings/Payments/Header/index.m.less": function(e, t, n) {
			e.exports = {
				description: "_2KihMl7kCllYi4__28Q0O8",
				title: "_2z5qbZtDy2SEXxQHTL5uwO"
			}
		},
		"./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less": function(e, t, n) {
			e.exports = {
				lock: "Sfk4ELyMq0pDLynmPYqIH",
				noSavedPayment: "_2kaA57xLp2xlwvJJgGX_nf",
				payment: "_3Q9yKbarclxKg7XBqu5Aas",
				paymentDisplay: "_1u8k-iH7dy2tgyF89W2PW9"
			}
		},
		"./src/reddit/components/Settings/Payments/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_5wU4T-ZntmyHAO3Q-reeV"
			}
		},
		"./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less": function(e, t, n) {
			e.exports = {
				textOverflow: "_1d3ulerBIy0y-Q-_LZloCW",
				button: "SG6ZzgmgvX6yusmUw_AFz",
				allocatedDate: "_1bQ8ihSZfCYRnHRuEwU6QZ",
				cancelled: "bTwXyzP11HeH3fz1SsJ9z",
				container: "ZvmA4tuviak3oTOipZC4z",
				details: "_2VKQIMrBK9D4-AQKXy_Hec",
				allocationName: "ZRDh7F8rMZW_m8BkepJJb"
			}
		},
		"./src/reddit/components/Settings/Powerups/Allocations/index.m.less": function(e, t, n) {
			e.exports = {
				empty: "PSyhkzqEPsSNFxWJD7H5I",
				loading: "NpifsPYgpuZM5vPSuLL5m",
				title: "_2T-LYh_UoKft-ObYe8u43N"
			}
		},
		"./src/reddit/components/Settings/Powerups/Header/index.m.less": function(e, t, n) {
			e.exports = {
				subtitle: "_3qZmVpJ9gG2cCyZSqo0Ofe",
				title: "_1j_HsHqYeodZ8THwAfGLFT"
			}
		},
		"./src/reddit/components/Settings/PremiumForm.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return K
			}));
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/humanizeDate/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ConfirmModal/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./src/reddit/selectors/gold/powerups.ts")),
				b = n("./src/lib/classNames/index.ts"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/reddit/actions/gold/powerups.ts"),
				v = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				y = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = n("./src/reddit/controls/TextButton/index.tsx"),
				k = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var x = Object(g.a)((function(e) {
					const {
						className: t,
						allocation: n,
						onClose: s,
						subredditInfo: a
					} = e, o = Object(i.c)();
					return r.a.createElement(y.d, {
						className: t
					}, r.a.createElement(y.h, null, r.a.createElement(k.a, null, r.a.createElement(y.p, null, C._("Cancel Powerups Subscription?", null, {
						hk: "2vd55Y"
					})), r.a.createElement(_.a, {
						onClick: s
					}, r.a.createElement(y.b, null)))), r.a.createElement(y.k, null, r.a.createElement(y.o, null, C._("Are you sure you want to cancel {subreddit name} Powerups Subscription?", [C._param("subreddit name", a.prefixedName)], {
						hk: "2EKYNO"
					}))), r.a.createElement(y.f, null, r.a.createElement(y.q, {
						onClick: () => {
							n.isPremium ? o(Object(f.c)(a.id, -n.powerups, n.isAnonymous, n.allocatedAt)) : o(Object(v.a)(n.id, a.id, n.allocatedAt)), s()
						},
						"data-redditstyle": !0
					}, C._("Confirm", null, {
						hk: "38bMp8"
					}))))
				})),
				E = n("./src/reddit/components/Settings/Powerups/Allocations/Allocation/index.m.less"),
				w = n.n(E);

			function O(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			var S = function(e) {
					const [t, n] = Object(o.useState)(!1), {
						className: s,
						allocation: i
					} = e, {
						allocatedAt: c,
						cooldownEndsAt: l,
						isActive: d,
						isDeallocationAllowed: m,
						isPremium: u,
						subredditInfo: p,
						renewOn: g,
						powerups: f
					} = i, v = O(g), y = O(c), _ = O(l), {
						prefixedName: k
					} = p, C = y ? a.fbt._("Subscribed {date}.", [a.fbt._param("date", y)], {
						hk: "24RAUK"
					}) : "", E = _ ? a.fbt._("You can cancel after {date}.", [a.fbt._param("date", _)], {
						hk: "48A2TC"
					}) : "", S = v ? a.fbt._("Will be renewed on {date}.", [a.fbt._param("date", v)], {
						hk: "2kYkAv"
					}) : "", j = v ? a.fbt._("Still active until {date}.", [a.fbt._param("date", v)], {
						hk: "IZweZ"
					}) : "", P = u ? m ? C : "".concat(C, " ").concat(E) : d ? "".concat(C, " ").concat(S) : "".concat(C, " ").concat(j), N = u ? a.fbt._("{powerups count} free Reddit Premium powerup/monthly", [a.fbt._param("powerups count", f.toLocaleString())], {
						hk: "3T3grw"
					}) : a.fbt._("{powerups count} powerup/monthly", [a.fbt._param("powerups count", f.toLocaleString())], {
						hk: "11DNVJ"
					}), T = u && m || !u && d;
					return r.a.createElement("div", {
						className: Object(b.a)(s, w.a.container),
						title: P
					}, r.a.createElement("div", {
						className: w.a.allocationName
					}, a.fbt._("{subreddit name} Powerup", [a.fbt._param("subreddit name", k)], {
						hk: "4qAoO"
					})), r.a.createElement("div", {
						className: w.a.details
					}, N), r.a.createElement(h.n, {
						className: w.a.button,
						disabled: !T,
						onClick: () => n(!0)
					}, u || T ? a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}) : a.fbt._("Canceled", null, {
						hk: "4eWO8d"
					})), t && r.a.createElement(x, {
						withOverlay: !0,
						allocation: i,
						onClose: () => n(!1),
						subredditInfo: p
					}))
				},
				j = n("./src/reddit/components/Settings/Powerups/Allocations/index.m.less"),
				P = n.n(j);
			const N = Object(l.c)({
				allocationByKey: p.j,
				allocationsFetched: p.l
			});
			var T = Object(i.b)(N)((function(e) {
					const {
						className: t,
						allocationByKey: n,
						allocationsFetched: s
					} = e, o = Object.values(n).filter(e => e.powerups > 0).sort((e, t) => new Date(t.allocatedAt).getTime() - new Date(e.allocatedAt).getTime()), i = !!o.length;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement("div", {
						className: P.a.title
					}, a.fbt._("Subscriptions", null, {
						hk: "7rkcm"
					})), !s && !i && Array.from({
						length: 3
					}).map((e, t) => r.a.createElement("div", {
						className: P.a.loading,
						key: t
					})), i && o.map(e => r.a.createElement(S, {
						allocation: e,
						className: P.a.allocation,
						key: e.subredditInfo.id
					})), s && !i && r.a.createElement("div", {
						className: P.a.empty
					}, a.fbt._("You have not subscribed to any communities with Powerups", null, {
						hk: "4kn8Go"
					})))
				})),
				I = n("./src/reddit/components/Settings/Powerups/Header/index.m.less"),
				M = n.n(I);

			function A(e) {
				return r.a.createElement("header", {
					className: e.className
				}, r.a.createElement("div", {
					className: M.a.title
				}, a.fbt._("Community Powerups", null, {
					hk: "48PrUZ"
				})), r.a.createElement("div", {
					className: M.a.subtitle
				}, a.fbt._("View and manage your subscription for Powerups.", null, {
					hk: "3qnDJW"
				})))
			}
			var R = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				D = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				L = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				B = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				U = n("./src/reddit/components/TrackingHelper/index.tsx"),
				F = n("./src/higherOrderComponents/makeAsync.tsx"),
				W = n("./src/lib/loadWithRetries/index.ts"),
				H = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			var G = Object(F.a)({
					getComponent: () => Object(W.a)(() => Promise.all([Promise.all([n.e("vendors~CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal~UpdateCardModal"), n.e("UpdateCardModal")]).then(n.bind(null, "./src/reddit/components/UpdateCardModal/index.tsx")), Object(H.d)()])).then(e => e[0].default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				q = n("./src/reddit/selectors/activeModalId.ts"),
				V = n("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				J = n("./src/reddit/selectors/user.ts"),
				Z = n("./src/reddit/components/Settings/index.m.less"),
				Y = n.n(Z);
			const Q = "https://www.paypal.com/myaccount/autopay",
				K = "update_card_modal_id",
				X = Object(l.c)({
					arePowerupsEnabled: V.a,
					cancelSubscriptionModalIsOpen: Object(q.b)("settings_optout_modal_id"),
					goldExpiration: J.n,
					hasAndroidSubscription: J.o,
					hasIOSSubscription: J.r,
					hasStripeSubscription: J.v,
					hasPaypalSubscription: J.t,
					isGold: J.p,
					isPremiumSubscriber: J.q,
					updateCardModalIsOpen: Object(q.b)(K)
				}),
				$ = Object(i.b)(X, e => ({
					navigateToPurchasePremium: () => e(Object(c.b)("/premium")),
					toggleCancelSubscriptionModal: () => e(Object(m.i)("settings_optout_modal_id")),
					toggleUpdateCardModal: () => e(Object(m.i)(K))
				})),
				ee = (e, t, n) => e && t ? a.fbt._("Your Premium subscription will automatically renew at the beginning of your next billing cycle. If your subscription ends, you will have Premium until {date}.", [a.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "jOodQ"
				}) : e && !t ? a.fbt._("Your Premium membership is valid until {date}.", [a.fbt._param("date", Object(d.a)(n, !0))], {
					hk: "4m4zaE"
				}) : a.fbt._("Get Reddit Premium and help support Reddit.", null, {
					hk: "MOt6K"
				});
			class te extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onGoldLinkClick = e => {
						e.preventDefault();
						const {
							navigateToPurchasePremium: t,
							sendEvent: n
						} = this.props;
						n(Object(z.d)()), t()
					}, this.onCancelClick = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(z.a)()), t()
					}, this.onHideAdsToggle = () => {
						const {
							update: e,
							prefs: {
								hideAds: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(z.f)() : Object(z.h)()), e(!t, "hideAds")
					}, this.onHighlightCommentsToggle = () => {
						const {
							update: e,
							prefs: {
								highlightComments: t
							},
							sendEvent: n
						} = this.props;
						n(t ? Object(z.g)() : Object(z.i)()), e(!t, "highlightComments")
					}, this.onYesCancelSubscription = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(z.c)()), this.navigateToCancel()
					}, this.onNoCancelSubscription = () => {
						const {
							sendEvent: e,
							toggleCancelSubscriptionModal: t
						} = this.props;
						e(Object(z.b)()), t()
					}
				}
				componentDidMount() {
					this.props.sendEvent(Object(z.j)())
				}
				navigateToCancel() {
					const {
						hasPaypalSubscription: e,
						hasStripeSubscription: t
					} = this.props;
					e ? window.location.href = Q : t && (window.location.href = "".concat(s.a.redditUrl, "/gold/subscription"))
				}
				render() {
					const {
						arePowerupsEnabled: e,
						cancelSubscriptionModalIsOpen: t,
						goldExpiration: n,
						hasAndroidSubscription: s,
						hasIOSSubscription: o,
						hasPaypalSubscription: i,
						hasStripeSubscription: c,
						isGold: l,
						isPremiumSubscriber: d,
						isResponsiveSettingsEnabled: m,
						toggleUpdateCardModal: p,
						updateCardModalIsOpen: b,
						prefs: {
							highlightComments: h,
							hideAds: g
						}
					} = this.props, f = s || o;
					return r.a.createElement(D.a, null, r.a.createElement(R.b, {
						className: Y.a.premiumHeading,
						isResponsiveSettingsEnabled: m
					}, a.fbt._("Reddit Premium", null, {
						hk: "34acNx"
					})), r.a.createElement(R.a, {
						className: Y.a.premiumSubtext
					}, a.fbt._("Reddit Premium is a subscription membership that upgrades your account with extra features.", null, {
						hk: "2UySlA"
					})), r.a.createElement(L.a, null, a.fbt._("subscription status", null, {
						hk: "1tsk15"
					})), r.a.createElement(R.a, {
						className: Y.a.premiumSubtext
					}, ee(l, d, n || 0)), !d && r.a.createElement(B.f, {
						label: l ? a.fbt._("Subscribe", null, {
							hk: "4d4vP7"
						}) : a.fbt._("Get Premium", null, {
							hk: "2JiZgZ"
						}),
						link: "/premium",
						onClick: this.onGoldLinkClick,
						last: !0
					}), c && r.a.createElement(B.a, {
						label: a.fbt._("Update payment information", null, {
							hk: "1Fgfxv"
						}),
						onClick: p
					}), i && r.a.createElement(B.f, {
						label: a.fbt._("Update payment information", null, {
							hk: "140EzB"
						}),
						link: "https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=912@reddit.com"
					}), d && !f && r.a.createElement(B.a, {
						label: a.fbt._("Cancel subscription", null, {
							hk: "iGZ0U"
						}),
						onClick: this.onCancelClick,
						last: !0
					}), l && r.a.createElement(r.a.Fragment, null, r.a.createElement(L.a, null, a.fbt._("premium features", null, {
						hk: "20MX2a"
					})), r.a.createElement(B.o, {
						on: g,
						disabled: !l,
						onClick: this.onHideAdsToggle,
						label: a.fbt._("Hide advertisements", null, {
							hk: "1aogtp"
						}),
						subtext: a.fbt._("Enable an ads-free experience on desktop", null, {
							hk: "YQWdf"
						})
					}), r.a.createElement(B.o, {
						on: h,
						disabled: !l,
						onClick: this.onHighlightCommentsToggle,
						label: a.fbt._("Highlight new comments", null, {
							hk: "48yw98"
						}),
						subtext: a.fbt._("Enable highlighting of new comments you haven't seen", null, {
							hk: "3XqeQ1"
						}),
						last: !0
					})), b && r.a.createElement(G, null), t && r.a.createElement(u.a, {
						headerText: a.fbt._("Cancel your membership", null, {
							hk: "1WT1nw"
						}),
						message: a.fbt._("Are you sure you want to cancel your membership? Reddit really appreciates your support!", null, {
							hk: "1JeeDn"
						}),
						cancelText: a.fbt._("Back", null, {
							hk: "4ms6iN"
						}),
						acceptText: a.fbt._("Yes, Cancel", null, {
							hk: "3lz0A2"
						}),
						onAccept: this.onYesCancelSubscription,
						onCancel: this.onNoCancelSubscription,
						onOverlayClick: this.onNoCancelSubscription,
						withOverlay: !0
					}), e && r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
						className: Y.a.powerupsHeader
					}), r.a.createElement(T, null)))
				}
			}
			t.b = $(Object(U.c)(te))
		},
		"./src/reddit/components/Settings/PrivacyForm.m.less": function(e, t, n) {
			e.exports = {
				ListsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				listsWrapper: "_1el3NPZn6qsGupLNWd_uTE",
				GenerateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				generateBackupCodesButton: "kLUeYesCcX7szHNBR8OZZ",
				SubheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				subheaderLink: "_2SoL5Q_2U0LQC1BPaNletZ",
				ThirdPartyAuth: "_1GtysZnibU-p4KasVaXCT_",
				thirdPartyAuth: "_1GtysZnibU-p4KasVaXCT_",
				"m-responsive": "_1K1eSlv_SCeNBQRglVFRHo",
				mResponsive: "_1K1eSlv_SCeNBQRglVFRHo"
			}
		},
		"./src/reddit/components/Settings/ProfileForm.m.less": function(e, t, n) {
			e.exports = {
				RawHTMLDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				rawHtmlDisplay: "_1eYdOjwOMPgWEBUvBUaXVK",
				ImageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				imageUploaderLayout: "_2UkVCdCS7jDS13coUav5oC",
				"m-responsive": "_3qAj0Ei4qJEkWGPxmDF4VE",
				mResponsive: "_3qAj0Ei4qJEkWGPxmDF4VE",
				Label: "_13ua4iQuXbXY7Lw2azcfDP",
				label: "_13ua4iQuXbXY7Lw2azcfDP",
				LabelText: "_1RZNl6Crcd1--tYLUDxw6a",
				labelText: "_1RZNl6Crcd1--tYLUDxw6a",
				IconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				iconImageUploader: "_2kvG3QudGNH1b_hbipcXwO",
				ProfileIcon: "_14T-g1N2IGCmLrsAqnb851",
				profileIcon: "_14T-g1N2IGCmLrsAqnb851",
				BannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				bannerImageUploader: "_2tWHV_FWMxyBDr_Buc80WV",
				ProfileBanner: "_1c2ERYhguh4jN7foA5aZnc",
				profileBanner: "_1c2ERYhguh4jN7foA5aZnc",
				PlusCircle: "_3KHqxOxhEHArGV9xYKYedu",
				plusCircle: "_3KHqxOxhEHArGV9xYKYedu",
				ImageType: "_3M41n4-XbqdTLEW2HEyuwx",
				imageType: "_3M41n4-XbqdTLEW2HEyuwx",
				DummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				dummyBanner: "_20K7NkpV6o6A7B6SOc7V03",
				Preview: "_2TAJM8DsUslS0NXRNj4kJj",
				preview: "_2TAJM8DsUslS0NXRNj4kJj",
				Link: "_2rNu4t73lS9limUPAAKtkN",
				link: "_2rNu4t73lS9limUPAAKtkN",
				ResponsiveOverlay: "_5Y7pdSoBpBx_1X08U19nH",
				responsiveOverlay: "_5Y7pdSoBpBx_1X08U19nH",
				ProfileModerationContent: "_275cHSaXO9aqdY4IqIHs7T",
				profileModerationContent: "_275cHSaXO9aqdY4IqIHs7T"
			}
		},
		"./src/reddit/components/Settings/SortSetting/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2gyG4Nl0mMXg9j65G_cVwp",
				Separator: "_1IJCWpm5hdHFEoHFC4K7wC",
				separator: "_1IJCWpm5hdHFEoHFC4K7wC"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Header/index.m.less": function(e, t, n) {
			e.exports = {
				subtitle: "_2K1zfRnW-eaoEdnfpyRcmh",
				title: "_3oLMEvh1HrW0gnI4GnF4hs"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less": function(e, t, n) {
			e.exports = {
				benefitsTitle: "_1zvZz9V9qmzvphLNN26xFE",
				benefits: "kEoeW9SoyEhD4ExnmlGkS",
				brand: "_2w4yco0tluzPa4WeuhhiQb",
				card: "_2R-NHwcb-sLMDCsOETfzyP",
				cardTitle: "_1nw8o42QAXA_zG3Z3GGgZD",
				close: "By4TuAW9x-mG-GkTGFgEr",
				container: "_3t78XrDe02RPhvHEki73Lo",
				footer: "_2CujVKP63iAaJw_UV0yOR4",
				header: "_3UN6Nqg_UKbM9bayL0RMJF",
				membershipMsg: "_1ap7TUKnaO0x1z3ghuHpsI",
				pointsContainer: "ofZxk5Su7_2KVkgn_5nvx",
				pointsHeader: "_3jOoW94C-FdpLMCCsfn_fA",
				price: "_2YC-HnD_R95hjAqA95ObnS",
				warning: "_1DMG--ENBA93KSauQNMsTI"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less": function(e, t, n) {
			e.exports = {
				textOverflow: "_1cJfM1Loi1IW6h-Gvd5tHM",
				button: "_1pqGWiE4CZF0y478Lzawc7",
				cancelled: "_2SaAnyYncaEeqGv38ngjw",
				joinDate: "_2R_qBER1OZsfaxvAv-57vk",
				container: "_2HZuIxJNdTH2UzaarZ_2_K",
				membershipName: "_1SOtSjbR4ugPAPrTgPSB8k"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less": function(e, t, n) {
			e.exports = {
				empty: "_3KZ9x8iqbtVhgYU5aZK96i",
				loading: "_18AXwLWTkHAhpgyT2m7kii",
				title: "_22W0HCOIPB2NC_q2PuiXQ8"
			}
		},
		"./src/reddit/components/Settings/SpecialMembership/index.m.less": function(e, t, n) {
			e.exports = {
				header: "RBCMMCYwCum0i_wuk50dM"
			}
		},
		"./src/reddit/components/Settings/ViewSetting/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "YpPJkfznV3Pha9pNUbPR7"
			}
		},
		"./src/reddit/components/Settings/index.m.less": function(e, t, n) {
			e.exports = {
				bulletedList: "vxL7rNBEiV-X9jWEV--zw",
				premiumHeading: "yBOjy8Ssm6dCzStP0YSks",
				premiumSubtext: "_2D4kg4-iMxeubZ4vWU0cXG",
				powerupsHeader: "iuGXg1Tav2CLmwouOCNJz"
			}
		},
		"./src/reddit/components/Settings/shared/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2OI2GNt8U_hqISJzbsrb0Y",
				labelWrapper: "Mw10gImD3M_Xbm-yM9eyH",
				dropdownRow: "_183U1ds639-b2Av2n7Mdt_"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				Label: "_1niwHyFzfJ2EBfsTxotmOo",
				label: "_1niwHyFzfJ2EBfsTxotmOo",
				Button: "Dtg-R0LPsUrNfymGbPg_G",
				button: "Dtg-R0LPsUrNfymGbPg_G",
				Wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				mFocused: "_3_AGLaBQJiLQvGX_bkEmlQ"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/Settings/shared/FatInput.m.less"),
				i = n.n(r),
				c = n("./src/lib/lessComponent.tsx");
			const l = c.a.input("Input", i.a),
				d = c.a.label("Label", i.a),
				m = c.a.button("Button", i.a),
				u = c.a.div("Wrapper", i.a);
			class p extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						focused: !1
					}
				}
				render() {
					const {
						buttonText: e,
						className: t,
						disabled: n,
						label: s,
						onClick: r,
						onChange: c,
						type: p = "text",
						value: b
					} = this.props;
					return a.a.createElement(u, {
						className: Object(o.a)(t, {
							[i.a.mFocused]: this.state.focused
						})
					}, a.a.createElement(l, {
						value: b,
						type: p,
						onChange: e => c(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), a.a.createElement(d, null, s), r && a.a.createElement(m, {
						disabled: !!n,
						onClick: r
					}, e))
				}
			}
		},
		"./src/reddit/components/Settings/shared/Heading.m.less": function(e, t, n) {
			e.exports = {
				Heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				heading: "_3IMnOO5YHH-N0YB3yfV2Ha",
				"m-responsive": "_1zFj2WkkmV422Jul4b3LUb",
				mResponsive: "_1zFj2WkkmV422Jul4b3LUb",
				HeadingSubtext: "_3yr8kdlxh51P-SJDaWVzJD",
				headingSubtext: "_3yr8kdlxh51P-SJDaWVzJD"
			}
		},
		"./src/reddit/components/Settings/shared/Heading.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Settings/shared/Heading.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const m = r.a.h2("Heading", c.a);
			t.b = e => {
				const {
					children: t,
					isResponsiveSettingsEnabled: n
				} = e, s = d(e, ["children", "isResponsiveSettingsEnabled"]);
				return a.a.createElement(m, l({}, s, {
					className: Object(o.a)({
						[c.a["m-responsive"]]: n
					})
				}), t)
			};
			const u = r.a.p("HeadingSubtext", c.a)
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				r = n("./src/reddit/models/Image/index.tsx");
			class i extends a.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							n = await Object(r.e)(t);
						this.props.onChange(n)
					}
				}
				render() {
					const {
						className: e,
						icon: t,
						label: n,
						labelClassName: s,
						value: r,
						controlName: i,
						isUploading: c,
						tabIndex: l
					} = this.props;
					return c ? a.a.createElement(o.a, {
						className: e
					}) : a.a.createElement(o.b, {
						className: e,
						icon: t,
						name: i,
						label: n,
						labelClassName: s,
						multiple: !1,
						tabIndex: l,
						value: r,
						onChange: this.onChange
					})
				}
			}
			t.a = i
		},
		"./src/reddit/components/Settings/shared/Layout.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1OrNGmpfcSuSebbZM5vYq4",
				container: "_1OrNGmpfcSuSebbZM5vYq4",
				Content: "_3FVpvZ7OLbS_68QzaxplxT",
				content: "_3FVpvZ7OLbS_68QzaxplxT",
				Sidebar: "_6hkUCjcaRoPRm1710RzSl",
				sidebar: "_6hkUCjcaRoPRm1710RzSl",
				defaultLayout: "jrocDu3YgcEScGB_zdT4I",
				"m-collectionLayout": "_1LF62vb6GTug21RCMM47iK",
				mCollectionLayout: "_1LF62vb6GTug21RCMM47iK"
			}
		},
		"./src/reddit/components/Settings/shared/Layout.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/Settings/shared/Layout.m.less"),
				r = n.n(o),
				i = n("./src/lib/lessComponent.tsx");
			const c = i.a.div("Container", r.a),
				l = i.a.div("Content", r.a),
				d = i.a.div("Sidebar", r.a);
			t.a = e => a.a.createElement(c, {
				className: e.className
			}, a.a.createElement(l, null, e.children), a.a.createElement(d, null, e.sidebar))
		},
		"./src/reddit/components/Settings/shared/ListWidget.m.less": function(e, t, n) {
			e.exports = {
				ListHeading: "_2azG8CbfCeoSIy45LO_LxO",
				listHeading: "_2azG8CbfCeoSIy45LO_LxO",
				Subtext: "_11aCg0w5mcSGMuqdRWGIjQ",
				subtext: "_11aCg0w5mcSGMuqdRWGIjQ",
				ListBox: "_2eHU8lgBkQJt6_fDIm7X_p",
				listBox: "_2eHU8lgBkQJt6_fDIm7X_p",
				MoreWrapper: "R8wezXw6KmosgQsJ3q6f0",
				moreWrapper: "R8wezXw6KmosgQsJ3q6f0",
				MoreButton: "j_y-f-J8aR9FLAGuMbzbw",
				moreButton: "j_y-f-J8aR9FLAGuMbzbw",
				container: "_2F1i1Khed3wdSoVrS2LBcR",
				mPadBottom: "_10-uajD9xoOsukhhALA723"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.m.less": function(e, t, n) {
			e.exports = {
				Component: "BotIImuktRA9aFAPP0O4Z",
				component: "BotIImuktRA9aFAPP0O4Z"
			}
		},
		"./src/reddit/components/Settings/shared/SectionHeading.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/Settings/shared/SectionHeading.m.less"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx");
			t.a = o.a.h3("Component", a.a)
		},
		"./src/reddit/components/Settings/shared/UserRow.m.less": function(e, t, n) {
			e.exports = {
				Date: "_3uOVAEvDusyBq_RJI_I3BT",
				date: "_3uOVAEvDusyBq_RJI_I3BT",
				UserNameAndIcon: "Q7PZ7pn1RDCZoAZ4RHEV8",
				userNameAndIcon: "Q7PZ7pn1RDCZoAZ4RHEV8",
				Button: "_2YM_OHv4TJuebM7ape7vWl",
				button: "_2YM_OHv4TJuebM7ape7vWl",
				ButtonWrapper: "_8qynupuY9i0kBJmG4L-Oc",
				buttonWrapper: "_8qynupuY9i0kBJmG4L-Oc",
				Component: "_3GLYJXdo6w63LbbFq2PrWG",
				component: "_3GLYJXdo6w63LbbFq2PrWG"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/FileDrop/index.tsx"),
				c = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = r.a.wrapped(d.a, "ImageUploadIcon", u.a), h = r.a.div("ImageIconRow", u.a), g = r.a.div("ImageUploadText", u.a), f = r.a.wrapped(i.a, "FileDrop", u.a), v = r.a.div("ContainerUploading", u.a), y = e => a.a.createElement(v, {
				className: e.className
			}, a.a.createElement(h, null, a.a.createElement(l.a, {
				sizePx: 40,
				center: !0
			})), a.a.createElement(g, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), _ = r.a.label("Label", u.a);
			t.b = e => a.a.createElement(f, {
				className: e.className,
				onDrop: e.onChange,
				render: t => a.a.createElement(_, {
					className: Object(o.a)({
						[u.a.isOver]: t
					}, e.labelClassName)
				}, a.a.createElement(h, null, e.icon || a.a.createElement(b, null)), a.a.createElement(g, null, e.label), a.a.createElement(c.a, {
					className: u.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/components/TabNav/index.m.less": function(e, t, n) {
			e.exports = {
				Gear: "_1USoXyqC8EXT8sZzm2JJYM",
				gear: "_1USoXyqC8EXT8sZzm2JJYM",
				Title: "_1VNcq3ynegRchfLyPqmKJ_",
				title: "_1VNcq3ynegRchfLyPqmKJ_",
				mConstrainWidth: "_2F7lbod1n6khHmvkBHQLQW",
				mResponsive: "_28QD3wRQT74vkz8KPzFC43",
				TabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				tabNavContainer: "_3FtOlkq31vuUJkzTkq4--W",
				Tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				tabs: "M7VDHU4AdgCc6tHaZ-UUy",
				Tab: "_1PoD47oSHsBQ37RfRPY-G-",
				tab: "_1PoD47oSHsBQ37RfRPY-G-",
				mIsActive: "_1Ico4fvlryEwDknLqa0-lP",
				mIsEnabled: "_3ZTJ0aNoM983-ysCWCpmrA"
			}
		},
		"./src/reddit/components/TabNav/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				m = n("./src/reddit/constants/zIndex.ts"),
				u = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				b = n("./src/reddit/components/TabNav/index.m.less"),
				h = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f, v = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			! function(e) {
				e.GEAR = "gear"
			}(f || (f = {}));
			const y = l.a.wrapped(p.a, "Gear", h.a),
				_ = l.a.h3("Title", h.a),
				k = l.a.div("TabNavContainer", h.a),
				C = l.a.div("Tabs", h.a),
				x = l.a.wrapped(e => {
					var {
						active: t,
						children: n,
						enabled: s
					} = e, a = v(e, ["active", "children", "enabled"]);
					return r.a.createElement(u.a, g({}, a, {
						"aria-selected": t,
						className: Object(i.a)(a.className, {
							[h.a.mIsActive]: t,
							[h.a.mIsEnabled]: !1 !== s
						}),
						role: "tab"
					}), n)
				}, "Tab", h.a),
				E = e => {
					switch (e) {
						case f.GEAR:
							return r.a.createElement(y, null);
						default:
							return null
					}
				},
				w = () => window.pageYOffset || window.scrollY,
				O = 75,
				S = {
					paddingLeft: 15,
					left: 0,
					position: "fixed",
					right: 0,
					top: d.f,
					willChange: "transform",
					zIndex: m.g
				};
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.toggleSticky = a()(() => {
						this.state.sticky || this.forceUnsticky ? w() < O && (this.forceUnsticky = !0, this.wrapperRef.firstElementChild.setAttribute("style", ""), this.setState({
							sticky: !1
						}, () => this.forceUnsticky = !1)) : w() >= O && this.setState({
							sticky: !0
						})
					}, c.G), this.forceUnsticky = !1, this.wrapperRef = null, this.state = {
						sticky: !1
					}
				}
				componentDidMount() {
					this.props.isCategoryPage && (this.toggleSticky(), window.addEventListener("orientationchange", this.toggleSticky), window.addEventListener("resize", this.toggleSticky), window.addEventListener("scroll", this.toggleSticky))
				}
				componentWillUnmount() {
					this.props.isCategoryPage && (window.removeEventListener("orientationchange", this.toggleSticky), window.removeEventListener("resize", this.toggleSticky), window.removeEventListener("scroll", this.toggleSticky))
				}
				render() {
					const {
						innerRef: e,
						isResponsiveSettingsEnabled: t,
						onTouchMove: n
					} = this.props, s = Object(i.a)({
						[h.a.mResponsive]: t
					});
					return r.a.createElement(k, {
						className: Object(i.a)(s, this.props.className),
						innerRef: e,
						onTouchMove: n
					}, r.a.createElement(_, {
						className: Object(i.a)(s, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						})
					}, E(this.props.icon), this.props.title), r.a.createElement(C, {
						className: Object(i.a)(s, {
							[h.a.mConstrainWidth]: !!this.props.constrainWidth
						}),
						role: "tablist",
						innerRef: e => this.wrapperRef = e,
						style: this.props.isCategoryPage && this.state.sticky && !this.forceUnsticky ? S : void 0
					}, this.props.children))
				}
			}
			t.c = j
		},
		"./src/reddit/components/UserNameAndIcon/index.m.less": function(e, t, n) {
			e.exports = {
				UserIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				userIconContainer: "_3gyThPd4NTS21qtNdizCxE",
				UserIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				userIcon: "_1utZNH6IItbNzgdnUBW-Bp",
				UserLink: "_2Q3rLIRb_ij54AEsabVm9L",
				userLink: "_2Q3rLIRb_ij54AEsabVm9L"
			}
		},
		"./src/reddit/components/UserNameAndIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				d = n("./src/reddit/components/UserNameAndIcon/index.m.less"),
				m = n.n(d);
			const u = r.a.span("UserIconContainer", m.a),
				p = r.a.wrapped(c.a, "UserIcon", m.a),
				b = r.a.wrapped(l.a, "UserLink", m.a);
			t.a = e => o.a.createElement(b, {
				className: e.className,
				to: "".concat(s.a.redditUrl, "/user/").concat(e.username)
			}, o.a.createElement(i.a, {
				user: e.username,
				sendHoverCardEvent: e.sendHoverCardEvent,
				subredditId: e.subredditId,
				tooltipId: e.tooltipId
			}, o.a.createElement(u, {
				style: {
					height: e.iconSize || "32px",
					width: e.iconSize || "32px"
				}
			}, o.a.createElement(p, {
				iconUrl: e.userIcon,
				isNSFW: !1,
				userName: e.username
			})), e.username))
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(s || (s = {}));
			const a = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");
			const o = {
					[a.O.BEST]: () => s.fbt._("best", null, {
						hk: "4tcUbl"
					}),
					[a.O.HOT]: () => s.fbt._("hot", null, {
						hk: "44QCEp"
					}),
					[a.O.NEW]: () => s.fbt._("new", null, {
						hk: "3VBhPb"
					}),
					[a.O.CONTROVERSIAL]: () => s.fbt._("controversial", null, {
						hk: "4jWP0T"
					}),
					[a.O.RISING]: () => s.fbt._("rising", null, {
						hk: "1KmbkT"
					}),
					[a.O.TOP]: () => s.fbt._("top", null, {
						hk: "4pcLmp"
					})
				},
				r = e => {
					const t = o[e];
					return t && t() || ""
				},
				i = {
					[a.Sb.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[a.Sb.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[a.Sb.WEEK]: () => s.fbt._("This week", null, {
						hk: "3Y5JkE"
					}),
					[a.Sb.MONTH]: () => s.fbt._("This month", null, {
						hk: "3NWWQf"
					}),
					[a.Sb.YEAR]: () => s.fbt._("This year", null, {
						hk: "3jD0mx"
					}),
					[a.Sb.ALL]: () => s.fbt._("All time", null, {
						hk: "2cL1Yf"
					})
				},
				c = e => {
					const t = i[e];
					return t && t() || ""
				}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => a.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), a.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, a.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, a.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				l = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				m = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
				}
				return n
			};
			const b = e => t => {
					const {
						className: n,
						disabled: s,
						redditStyle: r,
						"data-redditstyle": i
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), l = ((e, t, n) => {
						const s = !(!t && !n);
						let a = "";
						return a = e ? s ? m.a.mDisabledRedditStyle : m.a.mDisabled : s ? m.a.mActiveRedditStyle : m.a.mActive
					})(s, r, i);
					return a.a.createElement(e, u({
						className: Object(o.a)(m.a.Checkbox, l, n)
					}, c))
				},
				h = b(l.a),
				g = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : r.a;
				return a.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, a.a.createElement(t, {
					className: Object(o.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/flow.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				l = n("./src/reddit/helpers/dragDropContext/index.ts");
			const d = c.NativeTypes.FILE,
				m = a()(Object(i.DropTarget)(d, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), l.a);
			class u extends r.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(r.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-dnd/lib/index.js"),
				a = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				o = n.n(a);
			t.a = Object(s.DragDropContext)(o.a)
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t);
				return n.dividedToIntegerBy(a).toString()
			}

			function r(e, t) {
				return Object(a.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t);
				return n.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/communityPoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const a = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: e,
					noun: "feed_claim_points_banner",
					subreddit: Object(s.subreddit)(t)
				}),
				o = () => a("view"),
				r = () => a("tap"),
				i = () => a("dismiss"),
				c = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					source: "meta",
					action: "view",
					noun: "points_learn_more",
					actionInfo: {
						reason: "deep_link"
					}
				}),
				l = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					source: "meta",
					action: "view",
					noun: "points_faq",
					actionInfo: {
						reason: "learn_more"
					}
				}),
				d = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: "view",
					noun: "points_faq_section",
					actionInfo: {
						paneName: e
					}
				}),
				m = () => e => Object.assign(Object.assign({}, Object(s.defaults)(e)), {
					source: "meta",
					action: "click",
					noun: "learn_more_create_vault_button"
				}),
				u = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: "click",
					noun: "buy_membership_with_points",
					subreddit: Object(s.subreddit)(t),
					correlationId: e
				}),
				p = e => t => Object.assign(Object.assign({}, Object(s.defaults)(t)), {
					source: "meta",
					action: "click",
					noun: "cancel_membership_with_points",
					subreddit: Object(s.subredditById)(t, e)
				})
		},
		"./src/reddit/helpers/trackers/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/telemetry/index.ts");
			const o = e => Object.assign(Object.assign({}, s.defaults(e)), {
					noun: "desktop_notification_permissions"
				}),
				r = e => e ? "enable" : "disable",
				i = e => {
					Object(a.a)(Object.assign(Object.assign({}, o(e)), {
						action: "view",
						source: "popup"
					}))
				},
				c = e => {
					Object(a.a)(Object.assign(Object.assign({}, o(e)), {
						action: "allow",
						source: "popup"
					}))
				},
				l = e => {
					Object(a.a)(Object.assign(Object.assign({}, o(e)), {
						action: "block",
						source: "popup"
					}))
				},
				d = e => {
					Object(a.a)(Object.assign(Object.assign({}, o(e)), {
						action: "close",
						source: "popup"
					}))
				},
				m = (e, t, n) => Object.assign(Object.assign({}, s.defaults(e)), {
					actionInfo: s.actionInfo(e, {
						success: t,
						reason: n
					}),
					noun: "push_token"
				}),
				u = e => {
					Object(a.a)(Object.assign(Object.assign({}, m(e, !0)), {
						action: "request",
						source: "notification"
					}))
				},
				p = e => {
					Object(a.a)(Object.assign(Object.assign({}, m(e, !0)), {
						action: "register",
						source: "notification"
					}))
				},
				b = (e, t) => {
					Object(a.a)(Object.assign(Object.assign({}, m(e, !1, t)), {
						action: "bail",
						source: "notification"
					}))
				},
				h = e => Object.assign(Object.assign({}, (e => Object.assign(Object.assign({}, s.defaults(e)), {
					noun: "push_notification"
				}))(e)), {
					notification: s.notification(e, void 0, void 0),
					action: void 0,
					source: "notification",
					correlationId: void 0
				}),
				g = (e, t) => n => Object.assign(Object.assign({}, s.defaults(n)), {
					action: r(t),
					noun: e,
					source: "notification"
				})
		},
		"./src/reddit/helpers/trackers/premiumSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return c
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "g", (function() {
				return f
			}));
			var s = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				o = n("./src/telemetry/models/GoldPurchase.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts");
			const i = e => Object.assign(Object.assign({}, s.defaults(e)), {
					correlationId: Object(r.c)(r.a.PremiumSettings),
					screen: s.screen(e)
				}),
				c = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "user_settings",
					action: "click",
					noun: "premium"
				}),
				l = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "view",
					noun: "page",
					goldPurchase: {
						type: Object(a.q)(e) ? o.Cancel : o.GetPremium
					}
				}),
				d = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "click",
					noun: "get_premium"
				}),
				m = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "click",
					noun: "cancel"
				}),
				u = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "click",
					noun: "cancel_yes"
				}),
				p = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "click",
					noun: "cancel_no"
				}),
				b = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "select",
					noun: "hide_ads"
				}),
				h = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "deselect",
					noun: "hide_ads"
				}),
				g = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "select",
					noun: "highlight_comments"
				}),
				f = () => e => Object.assign(Object.assign({}, i(e)), {
					source: "premium_settings",
					action: "deselect",
					noun: "highlight_comments"
				})
		},
		"./src/reddit/helpers/trackers/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s, a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Apple = "apple", e.Google = "google"
			}(s || (s = {}));
			const o = e => t => ({
					source: "settings",
					action: "connect",
					noun: "sso",
					actionInfo: Object.assign(Object.assign({}, a.actionInfo(t)), {
						type: e
					})
				}),
				r = e => t => ({
					source: "settings",
					action: "disconnect",
					noun: "sso",
					actionInfo: Object.assign(Object.assign({}, a.actionInfo(t)), {
						type: e
					})
				}),
				i = e => ({
					source: "popup",
					action: "view",
					noun: "create_password"
				}),
				c = e => t => ({
					source: "popup",
					action: "click",
					noun: "create_password",
					popup: {
						buttonText: e
					}
				})
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, n) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, n) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, a.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), a.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/New/index.m.less"),
				i = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Notify/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_7fz7O_5kpe94rgtJU-zES"
			}
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return a.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fillRule: "evenodd"
				}, a.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), a.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Top/index.m.less"),
				i = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function o(e) {
				return a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/pages/Settings/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "aq7Z-V1l4XpWUOsbbPQed",
				container: "aq7Z-V1l4XpWUOsbbPQed",
				"m-responsive": "_1DEuTh5wc7zh0WaUee6OMw",
				mResponsive: "_1DEuTh5wc7zh0WaUee6OMw",
				CreatorTab: "_3QlgI2skRdNb0rUrRitQd3",
				creatorTab: "_3QlgI2skRdNb0rUrRitQd3",
				MessagingTab: "_3wCJvTvi_ME2B15BCVuMDo",
				messagingTab: "_3wCJvTvi_ME2B15BCVuMDo",
				PaymentsTab: "_2WMQ9c71jnOmx4epThzaxA",
				paymentsTab: "_2WMQ9c71jnOmx4epThzaxA",
				SpecialMembershipTab: "_33ITA9Gf4yLExGG5x52N6E",
				specialMembershipTab: "_33ITA9Gf4yLExGG5x52N6E"
			}
		},
		"./src/reddit/pages/Settings/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.search.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./node_modules/uuid/v4.js"),
				d = n.n(l),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/extractQueryParams/index.ts"),
				b = n("./src/lib/fastdom/index.ts"),
				h = n("./src/reddit/actions/pages/shared.ts"),
				g = n("./node_modules/js-cookie/src/js.cookie.js"),
				f = n.n(g),
				v = n("./src/reddit/actions/alpha.ts"),
				y = n("./src/reddit/actions/login.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				k = n("./src/reddit/actions/users.ts"),
				C = n("./src/reddit/components/ConfirmModal/index.tsx"),
				x = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/icepick/icepick.js")),
				E = n("./src/reddit/actions/preferences.ts"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/featureFlags/index.ts"),
				S = n("./src/reddit/selectors/sso.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				P = n("./src/lib/validateEmail/index.ts"),
				N = n("./src/reddit/actions/toaster.ts"),
				T = n("./src/reddit/components/Settings/shared/FatInput.tsx"),
				I = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				M = n("./src/reddit/icons/svgs/Info/index.tsx"),
				A = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				R = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/models/User/index.ts"),
				L = n("./src/reddit/components/Settings/FPRWarning/index.m.less"),
				B = n.n(L);
			const U = Object(c.c)({
					emailSent: e => e.user.accountSettings.sendResetEmail.api.emailSent,
					username: e => {
						const t = Object(j.i)(e);
						return t && Object(D.e)(t) || ""
					}
				}),
				F = Object(r.b)(U, e => ({
					changeEmail: t => e(Object(k.t)(t)),
					sendResetEmail: t => e(Object(k.w)(t)),
					showErrorToast: t => e(Object(N.e)({
						duration: N.a,
						kind: R.b.Error,
						text: t
					}))
				})),
				W = e => e ? o.a.createElement(I.a, {
					className: Object(m.a)(B.a.image, B.a.success)
				}) : o.a.createElement(A.a, {
					className: Object(m.a)(B.a.image, B.a.error)
				}),
				H = e => e ? s.fbt._("Check your email. Please allow some time for the email to arrive. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
					hk: "3Y172d"
				}) : s.fbt._("We have detected suspicious activity on your account. For your safety we have suspended your account until you reset your password to confirm your identity.", null, {
					hk: "YIzQQ"
				}),
				G = e => e ? s.fbt._("Reset password email sent", null, {
					hk: "cLjlN"
				}) : s.fbt._("Send a reset password email to access your account", null, {
					hk: "4jgOhY"
				}),
				z = e => e ? s.fbt._("Email was sent to:", null, {
					hk: "3Z4iz1"
				}) : s.fbt._("Email will be sent to:", null, {
					hk: "2CTyJh"
				}),
				q = e => {
					const {
						errorMsg: t,
						inputChecked: n
					} = e;
					return n ? t ? o.a.createElement(M.a, {
						className: Object(m.a)(B.a.inputIcon, B.a.error)
					}) : o.a.createElement(I.a, {
						className: Object(m.a)(B.a.inputIcon, B.a.success)
					}) : null
				};
			class V extends o.a.Component {
				constructor(e) {
					super(e), this.onEmailChange = e => this.setState({
						enteredEmail: e,
						errorMsg: "",
						inputChecked: !1
					}), this.onSendResetEmail = () => {
						const {
							changeEmail: e,
							email: t,
							sendResetEmail: n
						} = this.props, {
							enteredEmail: a
						} = this.state, o = Object(P.a)(a, !1), r = o ? "" : s.fbt._("Please fix your email to continue.", null, {
							hk: "f4LWI"
						});
						this.setState({
							errorMsg: r,
							inputChecked: !0
						}), o && (t ? n({
							curEmail: a,
							name: this.props.username
						}) : e({
							newEmail: a
						}))
					}, this.state = {
						enteredEmail: e.email || "",
						errorMsg: "",
						inputChecked: !1
					}
				}
				render() {
					const {
						emailSent: e
					} = this.props, {
						enteredEmail: t,
						errorMsg: n
					} = this.state, a = !this.props.email && !e, r = a && this.state.inputChecked && (n ? "errorBorder" : "successBorder") || "";
					return o.a.createElement("div", {
						className: B.a.container
					}, o.a.createElement("h3", {
						className: B.a.header
					}, s.fbt._("Account suspended", null, {
						hk: "DTXMF"
					})), o.a.createElement("div", {
						className: B.a.status
					}, W(e), o.a.createElement("h3", {
						className: B.a.statusText
					}, G(e))), o.a.createElement("p", {
						className: B.a.description
					}, H(e)), o.a.createElement("div", {
						className: B.a.actionContainer
					}, o.a.createElement("div", {
						className: B.a.emailContainer
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(T.a, {
						className: Object(m.a)(B.a.input, B.a[r]),
						label: s.fbt._("Enter email", null, {
							hk: "1rakz1"
						}),
						onChange: this.onEmailChange,
						value: t
					}), q(this.state), o.a.createElement("h6", {
						className: B.a.errorMsg
					}, n)) : o.a.createElement("p", {
						className: B.a.emailText
					}, z(e), o.a.createElement("span", {
						className: B.a.emailAddress
					}, t))), o.a.createElement(w.f, {
						className: B.a.primaryBtn,
						onClick: this.onSendResetEmail
					}, e ? s.fbt._("Resend", null, {
						hk: "2jGEmt"
					}) : s.fbt._("Send", null, {
						hk: "3rKRVv"
					}))))
				}
			}
			var J = F(V),
				Z = n("./src/reddit/components/Settings/modalIds.ts"),
				Y = n("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				Q = n("./src/reddit/components/Settings/shared/Widgets.tsx"),
				K = n("./src/reddit/components/Settings/AccountPrefsSection/index.m.less"),
				X = n.n(K),
				$ = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			const ee = [{
					text: "English",
					value: "en"
				}, {
					text: "Spanish",
					value: "es"
				}],
				te = Object(c.c)({
					hasVerifiedEmail: j.x,
					isFPR: j.F,
					language: j.Q,
					shouldShowSSOCreatePasswordModal: S.e,
					showLanguageSection: O.d.langSelect
				}),
				ne = Object(r.b)(te, e => ({
					changeLanguage: t => e(Object(E.v)(t)),
					openChangeEmailModal: () => e(Object(_.i)(Z.a)),
					openSSOCreatePasswordForEmailModal: () => e(Object(_.h)(Z.k)),
					resendEmail: () => e(Object(k.v)())
				})),
				se = e => {
					let {
						email: t,
						hasVerifiedEmail: n,
						resendEmail: a
					} = e;
					return t ? n ? t : o.a.createElement(o.a.Fragment, null, s.fbt._("{email} not verified!", [s.fbt._param("email", t)], {
						hk: "3PanQN"
					}), o.a.createElement(w.d, {
						className: X.a.tertiaryBtn,
						onClick: a
					}, s.fbt._("Click to resend", null, {
						hk: "3LDVAB"
					}))) : s.fbt._("Missing email, please update to secure your account", null, {
						hk: "3dtA7o"
					})
				};
			var ae = ne(e => {
					var {
						changeLanguage: t,
						isFPR: n,
						language: r,
						openChangeEmailModal: i,
						openSSOCreatePasswordForEmailModal: c,
						shouldShowSSOCreatePasswordModal: l,
						showLanguageSection: d,
						toggleChangePasswordModal: m
					} = e, u = $(e, ["changeLanguage", "isFPR", "language", "openChangeEmailModal", "openSSOCreatePasswordForEmailModal", "shouldShowSSOCreatePasswordModal", "showLanguageSection", "toggleChangePasswordModal"]);
					const [p, b] = Object(a.useState)(!1), h = Object(a.useCallback)(async e => {
						b(!0), await t(e), b(!1)
					}, [t]), [g, f] = Object(a.useState)(ee);
					g.find(e => {
						let {
							value: t
						} = e;
						return t === r
					}) || f(Object(x.push)(g, {
						text: r,
						value: r
					}));
					return n ? o.a.createElement(J, {
						email: u.email
					}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Y.a, null, s.fbt._("Account preferences", null, {
						hk: "344jzn"
					})), o.a.createElement(Q.b, {
						actionText: s.fbt._("Change", null, {
							hk: "47lrdl"
						}),
						label: s.fbt._("Email address", null, {
							hk: "yLzuv"
						}),
						onClick: () => {
							l ? c() : i()
						},
						subtext: se(u)
					}), !l && o.a.createElement(Q.b, {
						actionText: s.fbt._("Change", null, {
							hk: "5GGk2"
						}),
						label: s.fbt._("Change password", null, {
							hk: "2YAYIw"
						}),
						last: !0,
						onClick: m,
						subtext: s.fbt._("Password must be at least 6 characters long", null, {
							hk: "24bAMu"
						})
					}), d ? o.a.createElement(Q.h, {
						inputDisabled: p,
						id: "lang",
						items: g,
						label: s.fbt._("Display language", null, {
							hk: "3roQUD"
						}),
						onChange: h,
						selected: r,
						subtext: s.fbt._("Select your preferred language for buttons and other text from Reddit. This does not change the language of user generated content. Note: This feature is in alpha testing and will likely change.", null, {
							hk: "q6SvY"
						})
					}) : null)
				}),
				oe = n("./src/reddit/components/Settings/CreatePasswordSSOModal/Loader.ts"),
				re = n("./src/reddit/components/Settings/shared/Heading.tsx"),
				ie = n("./src/reddit/components/Settings/shared/Layout.tsx"),
				ce = n("./src/reddit/constants/accountManager.ts"),
				le = n("./src/reddit/contexts/PageLayer/index.tsx"),
				de = n("./src/reddit/selectors/accountManager.ts"),
				me = n("./src/reddit/selectors/activeModalId.ts"),
				ue = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				pe = n("./src/config.ts"),
				be = n("./src/reddit/helpers/trackers/sso.ts"),
				he = n("./src/reddit/hooks/useTracking.ts"),
				ge = n("./src/reddit/components/Settings/ConnectedAccounts/index.m.less"),
				fe = n.n(ge),
				ve = n("./src/lib/lessComponent.tsx");
			const ye = ve.a.wrapped(Q.c, "ConnectApple", fe.a),
				_e = ve.a.wrapped(w.f, "ConnectAppleButton", fe.a),
				ke = ve.a.div("ConnectionInfo", fe.a),
				Ce = ve.a.wrapped(w.j, "DisconnectButton", fe.a),
				xe = ve.a.wrapped(e => o.a.createElement("svg", {
					className: e.className,
					height: "18",
					viewBox: "0 0 18 18",
					width: "18",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M8.8162 4.15385C9.60444 4.15385 10.5925 3.60458 11.1809 2.87222C11.7138 2.20852 12.1024 1.28163 12.1024 0.354736C12.1024 0.228861 12.0913 0.102988 12.0691 0C11.192 0.0343293 10.1373 0.606484 9.50452 1.37317C9.00493 1.95677 8.54975 2.87222 8.54975 3.81055C8.54975 3.94787 8.57196 4.08519 8.58306 4.13096C8.63857 4.1424 8.72739 4.15385 8.8162 4.15385ZM6.04071 18C7.1176 18 7.59498 17.2562 8.93832 17.2562C10.3039 17.2562 10.6036 17.9771 11.8026 17.9771C12.9794 17.9771 13.7677 16.8557 14.5115 15.7572C15.3442 14.4984 15.6883 13.2626 15.7105 13.2053C15.6328 13.1825 13.3791 12.2327 13.3791 9.56643C13.3791 7.25493 15.1554 6.2136 15.2553 6.1335C14.0785 4.39415 12.2911 4.34838 11.8026 4.34838C10.4815 4.34838 9.40461 5.17228 8.72739 5.17228C7.99465 5.17228 7.02878 4.39415 5.88528 4.39415C3.70929 4.39415 1.5 6.24793 1.5 9.74952C1.5 11.9237 2.32155 14.2238 3.33183 15.7114C4.19778 16.9701 4.95271 18 6.04071 18Z"
				})), "AppleIcon", fe.a),
				Ee = ve.a.span("TextAndIconWrapper", fe.a);

			function we(e) {
				return e.issuerId ? (() => o.a.createElement(Q.c, {
					label: s.fbt._("Connected to Apple", null, {
						hk: "1oCedt"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
						hk: "dw3Vw"
					})
				}, o.a.createElement(ke, null, o.a.createElement(Ce, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(m.a)({
						[fe.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(ye, {
						className: t,
						label: s.fbt._("Connect to Apple", null, {
							hk: "4yrUwb"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Apple", null, {
							hk: "dw3Vw"
						})
					}, o.a.createElement(_e, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(Ee, null, o.a.createElement(xe, null), s.fbt._("Connect to Apple", null, {
						hk: "15AzyF"
					}))))
				})()
			}
			const Oe = Object(c.c)({
				issuerId: S.a,
				shouldShowSSOCreatePasswordModal: S.e
			});
			var Se = Object(r.b)(Oe, e => ({
				openSSOCreatePasswordForLinkAppleModal: () => e(Object(_.h)(Z.h)),
				openSSOCreatePasswordForUnlinkAppleModal: () => e(Object(_.h)(Z.i)),
				openLinkAppleSSOModal: () => e(Object(y.f)()),
				openUnlinkAppleSSOModal: () => e(Object(y.j)())
			}))(e => {
				const t = Object(he.a)();
				return o.a.createElement(we, {
					issuerId: e.issuerId,
					isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
					onConnectClick: () => {
						t(Object(be.c)(be.a.Apple)), e.shouldShowSSOCreatePasswordModal ? e.openSSOCreatePasswordForLinkAppleModal() : e.openLinkAppleSSOModal()
					},
					onDisconnectClick: () => {
						t(Object(be.d)(be.a.Apple)), e.shouldShowSSOCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkAppleModal() : e.openUnlinkAppleSSOModal()
					},
					openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkAppleModal,
					openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkAppleModal
				})
			});
			const je = ve.a.wrapped(Q.c, "ConnectGoogle", fe.a),
				Pe = ve.a.wrapped(w.f, "ConnectGoogleButton", fe.a),
				Ne = ve.a.div("ConnectionInfo", fe.a),
				Te = ve.a.wrapped(w.j, "DisconnectButton", fe.a),
				Ie = ve.a.wrapped(e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 18 18",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456V9.20456Z",
					fill: "#4285F4"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M9 18C11.43 18 13.4673 17.1941 14.9564 15.8196L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18V18Z",
					fill: "#34A853"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71V10.71Z",
					fill: "#FBBC05"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955V3.57955Z",
					fill: "#EA4335"
				})), "GoogleIcon", fe.a),
				Me = ve.a.span("TextAndIconWrapper", fe.a);

			function Ae(e) {
				return e.issuerId ? (() => o.a.createElement(Q.c, {
					label: s.fbt._("Connected to Google", null, {
						hk: "2jPsFn"
					}),
					subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
						hk: "3EhJVs"
					})
				}, o.a.createElement(Ne, null, o.a.createElement(Te, {
					onClick: e.onDisconnectClick
				}, "(", s.fbt._("Disconnect", null, {
					hk: "1dQQ2u"
				}), ")"))))() : (() => {
					const t = Object(m.a)({
						[fe.a["m-responsive"]]: e.isResponsiveSettingsEnabled
					});
					return o.a.createElement(je, {
						className: t,
						label: s.fbt._("Connect to Google", null, {
							hk: "7yvud"
						}),
						subtext: s.fbt._("Connect account to log in to Reddit with Google", null, {
							hk: "3EhJVs"
						})
					}, o.a.createElement(Pe, {
						className: t,
						onClick: e.onConnectClick
					}, o.a.createElement(Me, null, o.a.createElement(Ie, null), s.fbt._("Connect to Google", null, {
						hk: "2IcOIA"
					}))))
				})()
			}
			const Re = Object(c.c)({
				issuerId: S.b,
				shouldShowSSOCreatePasswordModal: S.e
			});
			var De = Object(r.b)(Re, e => ({
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(_.h)(Z.l)),
					openSSOCreatePasswordForUnlinkGoogleModal: () => e(Object(_.h)(Z.m)),
					openLinkGoogleSSOModal: () => e(Object(y.g)()),
					openUnlinkGoogleSSOModal: () => e(Object(y.k)())
				}))(e => {
					const t = Object(he.a)();
					return o.a.createElement(Ae, {
						issuerId: e.issuerId,
						isResponsiveSettingsEnabled: e.isResponsiveSettingsEnabled,
						onConnectClick: () => {
							t(Object(be.c)(be.a.Google)), e.shouldShowSSOCreatePasswordModal ? e.openSSOCreatePasswordForLinkGoogleModal() : e.openLinkGoogleSSOModal()
						},
						onDisconnectClick: () => {
							t(Object(be.d)(be.a.Google)), e.shouldShowSSOCreatePasswordModal ? e.openSSOCreatePasswordForUnlinkGoogleModal() : e.openUnlinkGoogleSSOModal()
						},
						openCreatePasswordLinkModal: e.openSSOCreatePasswordForLinkGoogleModal,
						openCreatePasswordUnlinkModal: e.openSSOCreatePasswordForUnlinkGoogleModal
					})
				}),
				Le = n("./src/reddit/actions/externalAccount.ts"),
				Be = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				Ue = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				Fe = n("./src/reddit/models/ExternalAccount/index.ts");
			const We = ve.a.wrapped(Ue.a, "TwitterIcon", fe.a),
				He = 15,
				Ge = ve.a.wrapped(Be.a, "LoadingIcon", fe.a),
				ze = ve.a.wrapped(Q.c, "ConnectTwitter", fe.a),
				qe = ve.a.wrapped(w.f, "ConnectTwitterButton", fe.a),
				Ve = ve.a.span("TextAndIconWrapper", fe.a),
				Je = ve.a.wrapped(w.j, "DisconnectButton", fe.a),
				Ze = ve.a.span("Username", fe.a),
				Ye = ve.a.div("ConnectionInfo", fe.a);
			var Qe = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				Ke = n("./src/reddit/selectors/externalAccount.ts");
			const Xe = Object(c.c)({
					twitterAccount: Ke.a,
					isTwitterConnectionPending: Ke.b
				}),
				$e = Object(r.b)(Xe, e => ({
					onConnectAccount: t => {
						e(Le.m(t)), t === Fe.a.Twitter && e((e, t) => Qe.b(t()))
					},
					onDisconnectAccount: t => {
						e(Le.n(t)), t === Fe.a.Twitter && e((e, t) => Qe.d(t()))
					},
					trackDisplayLinkOnProfileToggled: t => e((e, n) => Qe.e(n(), t))
				}));
			var et = Object(le.t)()($e((function(e) {
				const t = t => {
						t.preventDefault(), e.onConnectAccount(Fe.a.Twitter)
					},
					n = t => {
						t.preventDefault(), e.onDisconnectAccount(Fe.a.Twitter)
					};
				return o.a.createElement(a.Fragment, null, e.twitterAccount ? (() => {
					const t = e.twitterAccount;
					return o.a.createElement(Q.c, {
						label: s.fbt._("Connected to Twitter", null, {
							hk: "4jBH4V"
						}),
						subtext: s.fbt._("You can now choose to share your posts to Twitter from the new post composer.", null, {
							hk: "2Wawns"
						})
					}, o.a.createElement(Ye, null, o.a.createElement("div", null, o.a.createElement(Ze, null, "@", t.username)), o.a.createElement(Je, {
						onClick: n
					}, "(", s.fbt._("Disconnect", null, {
						hk: "1dQQ2u"
					}), ")")))
				})() : (() => {
					const {
						isResponsiveSettingsEnabled: n,
						isTwitterConnectionPending: a
					} = e, r = Object(m.a)({
						[fe.a["m-responsive"]]: n
					});
					return o.a.createElement(ze, {
						className: r,
						label: s.fbt._("Connect to Twitter", null, {
							hk: "4rhAYG"
						}),
						subtext: s.fbt._("Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.", null, {
							hk: "3TueXf"
						})
					}, o.a.createElement(qe, {
						className: r,
						onClick: t
					}, a ? o.a.createElement(Ge, {
						sizePx: He
					}) : o.a.createElement(Ve, null, o.a.createElement(We, null), s.fbt._("Connect to Twitter", null, {
						hk: "3r8ltg"
					}))))
				})(), o.a.createElement(Q.o, {
					disabled: !e.twitterAccount,
					indent: !0,
					label: s.fbt._("Show link on profile", null, {
						hk: "2GORbe"
					}),
					on: !!e.prefs.showTwitter,
					onClick: () => {
						e.update(!e.prefs.showTwitter, "showTwitter"), e.trackDisplayLinkOnProfileToggled(!e.prefs.showTwitter)
					},
					subtext: s.fbt._("You can show a link to your Twitter account on your profile", null, {
						hk: "WQ9Sy"
					})
				}))
			})));
			var tt = e => {
				const {
					isResponsiveSettingsEnabled: t
				} = e;
				return o.a.createElement(a.Fragment, null, o.a.createElement(Y.a, {
					id: "connected-accounts"
				}, s.fbt._("Connected accounts", null, {
					hk: "1whjzI"
				})), o.a.createElement(et, e), (() => {
					if (e.shouldRenderSSOAccounts) return o.a.createElement(a.Fragment, null, o.a.createElement(Se, {
						isResponsiveSettingsEnabled: t
					}), o.a.createElement(De, {
						isResponsiveSettingsEnabled: t
					}))
				})())
			};

			function nt() {
				return (nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const st = Object(c.c)({
				hasLinkedIdentities: S.c,
				isEmployee: j.E,
				userId: j.gb
			});
			var at = Object(r.b)(st)(e => {
					const t = !e.isEmployee;
					return o.a.createElement(tt, nt({
						shouldRenderSSOAccounts: t
					}, e))
				}),
				ot = n("./src/reddit/components/Settings/DeactivateModal.tsx"),
				rt = n("./src/reddit/components/Settings/AccountForm.m.less"),
				it = n.n(rt);
			const ct = ve.a.wrapped(ue.b, "Trash", it.a),
				lt = ve.a.wrapped(Y.a, "BetaTestsHeading", it.a),
				dt = ve.a.wrapped(Q.o, "InBetaToggle", it.a),
				mt = ve.a.wrapped(Q.o, "InRedesignBetaToggle", it.a),
				ut = ve.a.button("DeactivateButton", it.a),
				pt = ve.a.div("DeactivateWrapper", it.a),
				bt = Object(c.c)({
					changePasswordHref: (e, t) => Object(de.c)(e, {
						pageLayer: t.pageLayer,
						path: ce.b.ChangePassword
					}),
					deactivateModalOpen: Object(me.b)("deactivate_modal_id"),
					email: j.l,
					inRedesignBeta: j.B,
					optoutModalOpen: Object(me.b)("settins_optout_modal_id"),
					shouldShowSSOCreatePasswordModal: S.e,
					user: j.i
				}),
				ht = Object(r.b)(bt, (e, t) => ({
					deactivate: t => {
						e(Object(k.u)(t))
					},
					openSSOCreatePasswordForLinkGoogleModal: () => e(Object(_.h)(Z.j)),
					optOut: async () => {
						if ("new.reddit.com" === window.location.host) return window.location.assign("https://old.reddit.com/prefs");
						f.a.get("rseor3") && f.a.remove("rseor3", {
							domain: pe.a.cookieDomain
						}), await e(Object(v.b)()), window.location.href = "".concat(pe.a.redditUrl, "/prefs")
					},
					resendEmail: () => e(Object(k.v)()),
					toggleChangePasswordModal: () => e(Object(y.b)()),
					toggleDeactivateModal: () => e(Object(_.i)("deactivate_modal_id")),
					toggleOptoutModal: () => e(Object(_.i)("settins_optout_modal_id"))
				}));
			class gt extends o.a.Component {
				constructor() {
					super(...arguments), this.launchChangePasswordFlow = () => {
						const {
							changePasswordHref: e,
							isResponsiveSettingsEnabled: t,
							toggleChangePasswordModal: n
						} = this.props;
						t ? window.location.href = e : n()
					}, this.deactivateAccount = () => {
						const {
							openSSOCreatePasswordForLinkGoogleModal: e,
							shouldShowSSOCreatePasswordModal: t,
							toggleDeactivateModal: n
						} = this.props;
						t ? e() : n()
					}
				}
				render() {
					const {
						deactivate: e,
						deactivateModalOpen: t,
						email: n,
						inRedesignBeta: a,
						isResponsiveSettingsEnabled: r,
						optOut: i,
						optoutModalOpen: c,
						prefs: l,
						shouldShowSSOCreatePasswordModal: d,
						toggleDeactivateModal: u,
						toggleOptoutModal: p,
						update: b,
						user: h
					} = this.props, g = Object(m.a)({
						[it.a["m-responsive"]]: r
					}), f = Object(m.a)({
						[it.a.ResponsiveOverlay]: r
					});
					return o.a.createElement(ie.a, null, o.a.createElement(re.b, {
						isResponsiveSettingsEnabled: r
					}, s.fbt._("Account settings", null, {
						hk: "2faClM"
					})), o.a.createElement(ae, {
						email: n,
						toggleChangePasswordModal: this.launchChangePasswordFlow
					}), o.a.createElement(at, this.props), o.a.createElement(lt, {
						className: g
					}, s.fbt._("beta tests", null, {
						hk: "3Zy092"
					})), o.a.createElement(dt, {
						className: g,
						on: l.inBeta,
						onClick: () => b(!l.inBeta, "inBeta"),
						label: s.fbt._("Opt into beta tests", null, {
							hk: "4lexek"
						}),
						subtext: s.fbt._("See the newest features from Reddit and join the r/beta community", null, {
							hk: "4syr2"
						})
					}), o.a.createElement(mt, {
						className: g,
						on: !a,
						onClick: p,
						label: s.fbt._("Opt out of the redesign", null, {
							hk: "4895Wr"
						}),
						subtext: s.fbt._("Revert back to old Reddit for the time being", null, {
							hk: "2xbG6u"
						}),
						last: !0
					}), o.a.createElement(Y.a, null, s.fbt._("deactivate account", null, {
						hk: "3SK4xO"
					})), o.a.createElement(pt, null, o.a.createElement(ut, {
						onClick: this.deactivateAccount
					}, o.a.createElement(ct, null), s.fbt._("deactivate account", null, {
						hk: "2KkyTV"
					}))), c && o.a.createElement(C.a, {
						headerText: s.fbt._("Opt out of the redesign", null, {
							hk: "ToHJM"
						}),
						message: s.fbt._("There is an opt in to redesign setting in Preferences (in old Reddit) if you'd like to opt back in.", null, {
							hk: "11HYYa"
						}),
						cancelText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: s.fbt._("opt out", null, {
							hk: "2Abiox"
						}),
						onAccept: i,
						onCancel: p,
						onOverlayClick: p,
						overlayClassName: f,
						withOverlay: !0
					}), t && o.a.createElement(ot.b, {
						onClick: e,
						exit: u,
						onOverlayClick: u,
						overlayClassName: f,
						user: h,
						withOverlay: !0
					}), d && o.a.createElement(oe.a, {
						isResponsiveSettingsEnabled: r
					}))
				}
			}
			var ft = Object(le.t)()(ht(gt)),
				vt = n("./src/reddit/reducers/user/prefs/index.ts"),
				yt = n("./src/reddit/actions/chat/constants.ts"),
				_t = n("./src/reddit/actions/chat/userSettings.ts"),
				kt = n("./src/reddit/actions/userBlocks.ts"),
				Ct = n("./src/reddit/actions/userWhitelist.ts"),
				xt = n("./src/lib/timeAgo/index.ts"),
				Et = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				wt = n("./src/reddit/components/Hovercards/helpers.ts"),
				Ot = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				St = n("./src/reddit/components/Settings/shared/UserRow.m.less"),
				jt = n.n(St);
			const Pt = ve.a.p("Date", jt.a),
				Nt = ve.a.wrapped(Ot.a, "UserNameAndIcon", jt.a),
				Tt = ve.a.button("Button", jt.a),
				It = ve.a.div("ButtonWrapper", jt.a);
			var Mt = ve.a.wrapped(e => o.a.createElement("div", {
					className: e.className
				}, o.a.createElement(Nt, {
					username: e.name,
					userIcon: e.img,
					tooltipId: Object(wt.b)({
						author: e.name,
						tooltipIdPrefix: Et.a
					}),
					sendHoverCardEvent: () => {},
					iconSize: 24
				}), o.a.createElement(Pt, null, Object(xt.d)(e.date / 1e3)), o.a.createElement(It, null, o.a.createElement(Tt, {
					disabled: !!e.disabled,
					onClick: e.onClick
				}, "Remove"))), "Component", jt.a),
				At = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				Rt = n("./src/reddit/components/Settings/shared/ListWidget.m.less"),
				Dt = n.n(Rt);
			const Lt = 5,
				Bt = ve.a.h4("ListHeading", Dt.a),
				Ut = ve.a.div("ListBox", Dt.a),
				Ft = ve.a.div("MoreWrapper", Dt.a),
				Wt = ve.a.button("MoreButton", Dt.a),
				Ht = ve.a.wrapped(Q.m, "Subtext", Dt.a);
			class Gt extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						showAll: !1,
						value: ""
					}
				}
				componentDidUpdate(e, t) {
					e.api.new === At.a.pending && this.props.api.new === At.a.waitingForRequest && this.setState({
						value: ""
					})
				}
				render() {
					const {
						showAll: e,
						value: t
					} = this.state, {
						className: n,
						api: a,
						add: r,
						padBottom: i,
						remove: c,
						list: l,
						label: d,
						title: u,
						subtext: p
					} = this.props, b = e ? l.length : 5;
					return o.a.createElement("div", {
						className: Object(m.a)(Dt.a.container, n, {
							[Dt.a.mPadBottom]: !!i
						})
					}, o.a.createElement(Bt, null, u), void 0 !== p && o.a.createElement(Ht, null, p), o.a.createElement(T.a, {
						buttonText: s.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						disabled: a.new === At.a.pending,
						label: d,
						onClick: () => t && r(t),
						onChange: e => this.setState({
							value: e
						}),
						value: t
					}), o.a.createElement(Ut, null, l.slice(0, b).map(e => o.a.createElement(Mt, {
						disabled: a[e.name] === At.a.pending,
						key: e.name,
						name: e.name,
						onClick: () => c(e.name),
						img: e.icon_img,
						date: 1e3 * e.date
					})), l.length > Lt && !e ? o.a.createElement(Ft, null, o.a.createElement(Wt, {
						onClick: () => this.setState({
							showAll: !0
						})
					}, "SHOW ALL")) : null))
				}
			}
			var zt = n("./src/reddit/components/Settings/PrivacyForm.m.less"),
				qt = n.n(zt);
			const Vt = ve.a.div("ListsWrapper", qt.a),
				Jt = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api
				});
			var Zt = Object(r.b)(Jt, (e, t) => ({
					addBlocked: t => e(Object(kt.h)(t)),
					addWhitelisted: t => e(Object(Ct.g)(t)),
					removeWhitelisted: t => e(Object(Ct.h)(t)),
					removeBlocked: t => e(Object(kt.g)(t)),
					saveChatSettings: t => e(Object(_t.c)(t))
				}))(e => {
					let {
						addWhitelisted: t,
						chatSettings: n,
						prefs: {
							acceptPrivateMessages: a
						},
						removeWhitelisted: r,
						saveChatSettings: i,
						update: c,
						whitelist: l,
						whitelistApi: d
					} = e;
					const m = Object.entries(vt.a).filter(e => e[1] === a)[0][0];
					return o.a.createElement(ie.a, null, o.a.createElement(re.b, {
						isResponsiveSettingsEnabled: !1
					}, s.fbt._("Chat & Messaging", null, {
						hk: "1hQy2z"
					})), o.a.createElement(Q.d, {
						label: s.fbt._("Who can send you chat requests", null, {
							hk: "4pTJIe"
						}),
						items: [yt.a.anybody, yt.a.account_age_30_days, yt.a.nobody],
						selected: n.invitePolicy,
						onClick: e => {
							i({
								invitePolicy: e
							})
						},
						id: "chatUserSettingsInvitePolicy"
					}), o.a.createElement(Q.d, {
						label: s.fbt._("Who can send you private messages", null, {
							hk: "V2HXb"
						}),
						subtext: s.fbt._("Heads up—Reddit admins and moderators of communities you’ve joined can message you even if they’re not whitelisted.", null, {
							hk: "3fmM1O"
						}),
						items: [vt.a.Everyone, vt.a.Whitelisted],
						displayItems: [vt.b.Everyone, vt.b.Whitelisted],
						selected: a,
						displayTitle: vt.b[m],
						onClick: e => c(e, "acceptPrivateMessages"),
						id: "acceptPrivateMessages"
					}), (n.invitePolicy !== yt.a.anybody || a === vt.a.Whitelisted) && o.a.createElement(Vt, null, o.a.createElement(Gt, {
						title: s.fbt._("People You’ve Whitelisted", null, {
							hk: "2dIqgE"
						}),
						subtext: s.fbt._("Whitelisted people can always send you private messages.", null, {
							hk: "1UCnvc"
						}),
						label: s.fbt._("Add new user to whitelist", null, {
							hk: "4pvEey"
						}),
						add: t,
						remove: r,
						list: l,
						api: d
					})))
				}),
				Yt = n("./src/reddit/components/Settings/Creator/Header/index.m.less"),
				Qt = n.n(Yt);

			function Kt(e) {
				return o.a.createElement("header", {
					className: Object(m.a)(Qt.a.container, e.className)
				}, o.a.createElement("div", {
					className: Qt.a.title
				}, s.fbt._("Reddit Creator", null, {
					hk: "1mTf6T"
				})), o.a.createElement("div", {
					className: Qt.a.tag
				}, s.fbt._("alpha", null, {
					hk: "3N0kym"
				})))
			}
			var Xt = n("./src/reddit/constants/disclaimers.ts"),
				$t = n("./src/reddit/contexts/ApiContext.tsx"),
				en = n("./src/reddit/endpoints/economics/paymentSystems.ts"),
				tn = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				nn = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				sn = n("./src/reddit/selectors/economics.ts"),
				an = n("./src/reddit/components/Settings/Creator/StripeConnect/index.m.less"),
				on = n.n(an);
			const {
				fbt: rn
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var cn;
			! function(e) {
				e[e.Default = 0] = "Default", e[e.Connecting = 1] = "Connecting", e[e.Connected = 2] = "Connected"
			}(cn || (cn = {}));
			class ln extends o.a.Component {
				constructor(e) {
					super(e), this.initiateStripeConnect = async () => {
						const e = await Object(en.e)(this.props.apiContext());
						e.ok ? window.location.href = e.body.connectUrl : this.props.onError(e.error)
					};
					let t = cn.Default;
					e.connectCode && e.connectStateToken && (t = cn.Connecting), e.stripeConnected && (t = cn.Connected), this.state = {
						buttonState: t
					}
				}
				async componentDidMount() {
					if (this.props.connectCode && this.props.connectStateToken && this.state.buttonState !== cn.Connected) {
						const e = await Object(en.a)(this.props.apiContext(), {
							code: this.props.connectCode,
							stateToken: this.props.connectStateToken
						});
						e.ok ? this.setState({
							buttonState: cn.Connected
						}) : (this.props.onError(e.error), this.setState({
							buttonState: cn.Default
						}))
					}
				}
				render() {
					const {
						className: e
					} = this.props, {
						buttonState: t
					} = this.state;
					let n = rn._("connect stripe account", null, {
						hk: "4h2d0M"
					});
					return t === cn.Connected && (n = rn._("connect", null, {
						hk: "22jQRU"
					})), t === cn.Connecting && (n = rn._("connecting...", null, {
						hk: "3ccNPc"
					})), o.a.createElement("div", {
						className: e
					}, o.a.createElement(Y.a, null, rn._("accept tips", null, {
						hk: "1kEl0R"
					})), o.a.createElement(Q.k, {
						direction: "row",
						label: rn._("Stripe Account", null, {
							hk: "2WMbeu"
						}),
						subtext: rn._("Connect your Stripe account to Reddit to get paid directly to your bank account. If you don't have a Strip account, it'll only take a couple of minutes to create one.", null, {
							hk: "2VhQWE"
						})
					}, o.a.createElement("div", {
						className: on.a.cta
					}, o.a.createElement(w.f, {
						className: on.a.button,
						disabled: t !== cn.Default,
						onClick: this.initiateStripeConnect
					}, n), o.a.createElement("div", {
						className: on.a.legal
					}, rn._("By connecting to Stripe, you agree to our {link}", [rn._param("link", o.a.createElement("a", {
						className: on.a.legalLink,
						href: Xt.a,
						target: "_blank"
					}, "Beta Terms of Service"))], {
						hk: "1TG2Ys"
					})))), o.a.createElement("div", {
						className: on.a.disclaimer
					}, o.a.createElement(nn.a, {
						className: on.a.icon
					}), rn._("Reddit doesn't store personal data collected by Stripe.", null, {
						hk: "FTUAi"
					})))
				}
			}
			const dn = Object(c.c)({
					stripeConnected: sn.v
				}),
				mn = Object(r.b)(dn, e => ({
					onError: t => e(Object(N.e)({
						duration: 5e3,
						kind: R.b.Error,
						text: Object(tn.a)(t)
					}))
				}));
			var un = Object($t.b)(mn(ln)),
				pn = n("./src/reddit/components/Settings/Creator/index.m.less"),
				bn = n.n(pn),
				hn = function(e) {
					return o.a.createElement(ie.a, null, o.a.createElement("div", null, o.a.createElement(Kt, {
						className: bn.a.header
					}), o.a.createElement(un, {
						connectCode: e.stripeConnectCode,
						connectStateToken: e.stripeConnectStateToken
					})))
				},
				gn = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./src/lib/listingSort/index.ts")),
				fn = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				vn = n("./src/higherOrderComponents/asTooltip.tsx"),
				yn = n("./src/reddit/actions/tooltip.ts"),
				_n = n("./src/reddit/controls/Dropdown/index.tsx"),
				kn = n("./src/reddit/controls/Dropdown/Row.tsx"),
				Cn = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				xn = n("./src/reddit/selectors/tooltip.ts"),
				En = n("./src/reddit/components/Settings/shared/Dropdown/index.m.less"),
				wn = n.n(En);
			const On = Object(vn.a)(_n.a),
				Sn = Object(c.c)({
					isDropdownOpen: (e, t) => Object(xn.b)(t.dropdownId)(e)
				});
			class jn extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onToggleDropdown = () => {
						this.props.openDropdown()
					}, this.renderLabel = e => o.a.createElement(kn.b, {
						children: e.contentJsx || e.icon,
						className: wn.a.dropdownRow,
						displayText: e.displayText,
						isSelected: !0,
						key: e.key,
						noHover: !0,
						noIcon: !e.icon
					}), this.renderDropdownItem = (e, t) => o.a.createElement(kn.b, {
						children: e.contentJsx || e.icon,
						displayText: e.displayText,
						isSelected: t,
						key: e.key,
						noIcon: !e.icon,
						onClick: () => this.props.onSelect(e)
					})
				}
				render() {
					const {
						props: e
					} = this, {
						items: t,
						renderLabel: n = this.renderLabel,
						renderItem: s = this.renderDropdownItem,
						selectedKey: a
					} = this.props, r = t.find(e => e.key === a) || t[0];
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef,
						className: Object(m.a)(wn.a.container, e.className),
						onClick: this.onToggleDropdown
					}, o.a.createElement("div", {
						className: wn.a.labelWrapper
					}, n(r), o.a.createElement(Cn.b, null)), o.a.createElement(On, {
						tooltipTarget: this.tooltipTarget,
						isOpen: this.props.isDropdownOpen,
						renderContentsHidden: !0
					}, t.map(e => s(e, a === e.key))))
				}
			}
			var Pn = Object(r.b)(Sn, (e, t) => ({
					openDropdown: () => {
						e(Object(yn.h)({
							tooltipId: t.dropdownId
						}))
					}
				}))(jn),
				Nn = n("./src/reddit/constants/listingSorts.ts");
			const Tn = [u.O.HOT, u.O.NEW, u.O.TOP, u.O.RISING];
			var In = e => {
				const {
					dropdownId: t
				} = e, n = Tn.map(e => ({
					key: e,
					displayText: Object(Nn.a)(e),
					icon: o.a.createElement(fn.a, {
						sort: e
					})
				}));
				return o.a.createElement(Pn, {
					dropdownId: t,
					items: n,
					onSelect: t => e.onChange(t.key),
					selectedKey: e.sort
				})
			};
			const Mn = [u.Sb.HOUR, u.Sb.DAY, u.Sb.WEEK, u.Sb.MONTH, u.Sb.YEAR, u.Sb.ALL];
			var An = e => {
					const {
						dropdownId: t
					} = e, n = Mn.map(e => ({
						key: e,
						displayText: Object(Nn.b)(e)
					}));
					return o.a.createElement(Pn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.sort
					})
				},
				Rn = n("./src/reddit/components/Settings/SortSetting/index.m.less"),
				Dn = n.n(Rn);
			const Ln = ve.a.div("Separator", Dn.a);
			class Bn extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onListingSortChange = e => {
						const {
							timeSort: t
						} = Object(gn.d)(this.props.fullSort);
						this.props.onChange(Object(gn.c)({
							sort: e,
							timeSort: t
						}))
					}, this.onTimeSortChange = e => {
						const {
							sort: t
						} = Object(gn.d)(this.props.fullSort);
						this.props.onChange(Object(gn.c)({
							sort: t,
							timeSort: e
						}))
					}
				}
				render() {
					const {
						className: e,
						fullSort: t,
						dropdownPrefix: n
					} = this.props, {
						sort: a,
						timeSort: r
					} = Object(gn.d)(t);
					return o.a.createElement(Q.c, {
						className: e,
						label: s.fbt._("Community content sort", null, {
							hk: "Ubmt1"
						}),
						subtext: s.fbt._("Choose how you would like content organized in communities you visit. This will not affect global feeds such as Home, or Popular.", null, {
							hk: "2a2SDC"
						})
					}, o.a.createElement("div", {
						className: Dn.a.wrapper
					}, o.a.createElement(In, {
						onChange: this.onListingSortChange,
						dropdownId: n + "-listing",
						sort: a
					}), r && o.a.createElement(o.a.Fragment, null, o.a.createElement(Ln, null), o.a.createElement(An, {
						onChange: this.onTimeSortChange,
						dropdownId: n + "-time",
						sort: r
					}))))
				}
			}
			var Un = n("./src/reddit/constants/postLayout.ts"),
				Fn = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				Wn = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				Hn = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				Gn = n("./src/reddit/controls/Dropdown/index.m.less"),
				zn = n.n(Gn);
			const qn = {
				[Un.d.Card]: Hn.a,
				[Un.d.Classic]: Fn.a,
				[Un.d.Compact]: Wn.a
			};

			function Vn(e) {
				const t = qn[e.layout];
				return o.a.createElement(t, {
					className: zn.a.iconStyles
				})
			}
			const Jn = [Un.d.Card, Un.d.Classic, Un.d.Compact];
			var Zn = e => {
					const {
						dropdownId: t
					} = e, n = Jn.map(e => ({
						key: e,
						displayText: e,
						icon: o.a.createElement(Vn, {
							layout: e
						})
					}));
					return o.a.createElement(Pn, {
						dropdownId: t,
						items: n,
						onSelect: t => e.onChange(t.key),
						selectedKey: e.layout
					})
				},
				Yn = n("./src/reddit/components/Settings/ViewSetting/index.m.less"),
				Qn = n.n(Yn);
			class Kn extends o.a.PureComponent {
				render() {
					const {
						className: e,
						dropdownPrefix: t,
						label: n,
						subtext: s,
						layout: a
					} = this.props;
					return o.a.createElement(Q.c, {
						className: e,
						label: n,
						subtext: s
					}, o.a.createElement("div", {
						className: Qn.a.wrapper
					}, o.a.createElement(Zn, {
						onChange: this.props.onChange,
						dropdownId: t + "-listing",
						layout: a
					})))
				}
			}
			var Xn = n("./src/reddit/components/Settings/FeedForm.m.less"),
				$n = n.n(Xn);

			function es(e) {
				let {
					isResponsiveSettingsEnabled: t,
					prefs: {
						autoplayVideo: n,
						hideNSFW: a,
						openPostInNewTab: r,
						over18: i,
						privateFeeds: c,
						reduceAnimationsFromAwards: l,
						rememberCommunitySort: d,
						sort: u,
						stylesEnabled: p,
						useMarkdown: b,
						layout: h,
						rememberCommunityLayout: g
					},
					update: f
				} = e;
				const v = Object(m.a)({
					[$n.a["m-responsive"]]: t
				});
				return o.a.createElement(ie.a, null, o.a.createElement(re.b, {
					isResponsiveSettingsEnabled: t
				}, s.fbt._("Feed settings", null, {
					hk: "2R5BB"
				})), o.a.createElement(Y.a, null, s.fbt._("Content Preferences", null, {
					hk: "76osn"
				})), o.a.createElement(Q.o, {
					on: i,
					onClick: () => f(!i, "over18"),
					label: s.fbt._("Adult content", null, {
						hk: "4les43"
					}),
					subtext: s.fbt._("Enable to view adult and NSFW (not safe for work) content in your feed and search results", null, {
						hk: "Ni5mW"
					})
				}), o.a.createElement(Q.o, {
					disabled: !i,
					label: s.fbt._("Safe browsing mode", null, {
						hk: "CeEkN"
					}),
					on: !!i && a,
					onClick: () => f(!a, "hideNSFW"),
					subtext: s.fbt._("Blur thumbnails and media preview for anything labeled NSFW (not safe for work)", null, {
						hk: "403VoR"
					})
				}), o.a.createElement(Q.o, {
					on: n,
					onClick: () => f(!n, "autoplayVideo"),
					label: s.fbt._("Autoplay media", null, {
						hk: "4huarG"
					}),
					subtext: s.fbt._("Play videos and gifs automatically when in the viewport", null, {
						hk: "1YYoIq"
					})
				}), o.a.createElement(Q.o, {
					on: l,
					onClick: () => f(!l, "reduceAnimationsFromAwards"),
					label: s.fbt._("Reduce Animations", null, {
						hk: "329Lwa"
					}),
					subtext: s.fbt._("Reduce award-related animations on posts and comments", null, {
						hk: "1sut6Z"
					})
				}), o.a.createElement(Q.o, {
					on: !!p,
					onClick: () => f(!p, "stylesEnabled"),
					label: s.fbt._("Community themes", null, {
						hk: "8TpCA"
					}),
					subtext: s.fbt._("Use custom themes for all communities. You can also turn this off on a per community basis.", null, {
						hk: "2EVyTQ"
					})
				}), o.a.createElement(Bn, {
					className: v,
					dropdownPrefix: "subreddit-sort-setting",
					fullSort: u,
					onChange: e => {
						u !== e && f(e, "sort")
					}
				}), o.a.createElement(Q.o, {
					className: v,
					indent: !0,
					on: !!d,
					onClick: () => f(!d, "rememberCommunitySort"),
					label: s.fbt._("Remember per community", null, {
						hk: "44RHeL"
					}),
					subtext: s.fbt._("Enable if you would like each community to remember and use the last content sort you selected for that community.", null, {
						hk: "2zgrQz"
					})
				}), o.a.createElement(Kn, {
					className: v,
					dropdownPrefix: "subreddit-view-setting",
					label: s.fbt._("Global content view", null, {
						hk: "1tWTJK"
					}),
					layout: h,
					onChange: e => f(e, "layout"),
					subtext: s.fbt._("Choose how you would like content displayed in feeds. This control is also found above your feed.", null, {
						hk: "1NyVGg"
					})
				}), o.a.createElement(Q.o, {
					className: v,
					on: !!g,
					onClick: () => f(!g, "rememberCommunityLayout"),
					label: s.fbt._("Remember per community", null, {
						hk: "42Ianh"
					}),
					subtext: s.fbt._("Enable if you would like each community to remember and use the last content view you selected for that community.", null, {
						hk: "3fxqrV"
					}),
					indent: !0
				}), o.a.createElement(Q.o, {
					className: v,
					on: !!r,
					onClick: () => f(!r, "openPostInNewTab"),
					label: s.fbt._("Open posts in new tab", null, {
						hk: "eOvQi"
					}),
					subtext: s.fbt._("Enable to always open posts in a new tab", null, {
						hk: "l3HZX"
					})
				}), o.a.createElement(Y.a, {
					className: v
				}, s.fbt._("Post Preferences", null, {
					hk: "35wQ1I"
				})), o.a.createElement(Q.o, {
					className: v,
					on: !!b,
					onClick: () => f(!b, "useMarkdown"),
					label: s.fbt._("Default to markdown", null, {
						hk: "1gcz1a"
					}),
					subtext: s.fbt._("When posting, your input will default to markdown text instead of fancy pants", null, {
						hk: "3kF1IP"
					})
				}), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(Y.a, null, s.fbt._("RSS Feeds", null, {
					hk: "2xkYfd"
				})), o.a.createElement(Q.f, {
					label: s.fbt._("List of your RSS feeds", null, {
						hk: "PR8PD"
					}),
					subtext: s.fbt._("List of links to private RSS feeds so that you can get listings of your content", null, {
						hk: "2M02AZ"
					}),
					link: "".concat(pe.a.redditUrl, "/prefs/feeds"),
					last: !0
				})))
			}
			var ts = n("./src/reddit/actions/notifications/constants.ts"),
				ns = n("./src/reddit/actions/notifications/loader.ts"),
				ss = n("./src/reddit/actions/notifications/preferences.ts"),
				as = n("./src/reddit/actions/notifications/state.ts"),
				os = n("./src/reddit/actions/notifications/utils.ts"),
				rs = n("./src/reddit/components/TrackingHelper/index.tsx"),
				is = n("./src/reddit/helpers/localStorage/index.ts"),
				cs = n("./src/reddit/helpers/trackers/notifications.ts"),
				ls = n("./src/reddit/selectors/meta.ts"),
				ds = n("./src/reddit/selectors/notificationPrefs.ts"),
				ms = n("./src/reddit/selectors/responsiveSettings.ts"),
				us = n("./src/higherOrderComponents/asModal/index.tsx"),
				ps = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				bs = n("./src/reddit/constants/keycodes.ts"),
				hs = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				gs = n("./src/reddit/constants/colors.ts"),
				fs = n("./src/reddit/icons/svgs/Notify/index.m.less"),
				vs = n.n(fs);
			var ys = e => o.a.createElement("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 -1 23 20",
					className: Object(m.a)(vs.a.icon, e.className)
				}, o.a.createElement("g", {
					fillRule: "evenodd"
				}, o.a.createElement("polygon", {
					fill: "none",
					points: "0 20 20 20 20 .001 0 .001"
				}), o.a.createElement("path", {
					fill: "inherit",
					d: "M17.0066821,15.4208756 C17.3661858,15.7881442 17.1117467,16.4167476 16.6028685,16.4167476 L3.3720345,16.4167476 C2.86361308,16.4167476 2.60871716,15.7881442 2.9682209,15.4208756 L2.99106104,15.3975421 C3.81467634,14.5561376 4.27741749,13.4146649 4.27741749,12.2246585 L4.27741749,8.19170369 C4.27741749,5.37768868 6.24806442,3.03500952 8.85595115,2.52214012 C8.85275353,2.48713993 8.84544468,2.45307308 8.84544468,2.41667289 C8.84544468,1.77266945 9.35660693,1.25 9.98745148,1.25 C10.618296,1.25 11.1294583,1.77266945 11.1294583,2.41667289 C11.1294583,2.45307308 11.1221494,2.48713993 11.1189518,2.52214012 C13.7268385,3.03500952 15.6974855,5.37768868 15.6974855,8.19170369 L15.6974855,12.2246585 C15.6974855,13.4146649 16.1602266,14.5561376 16.9838419,15.3975421 L17.0066821,15.4208756 Z M9.98754284,18.75 C9.05109727,18.75 8.24758128,18.1736636 7.89492959,17.3499925 L12.0801561,17.3499925 C11.7275044,18.1736636 10.9239884,18.75 9.98754284,18.75 Z"
				}), o.a.createElement("circle", {
					cx: "18",
					cy: "3",
					r: "5",
					fill: e.isUnread ? "white" : "none"
				}), o.a.createElement("circle", {
					cx: "18",
					cy: "3",
					r: "4",
					fill: e.isUnread ? gs.a.orangered : "none"
				}))),
				_s = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				ks = n("./src/reddit/layout/row/Inline/index.tsx"),
				Cs = n("./src/reddit/components/Settings/DesktopNotifications/TurnOnDesktopNotificationsModal/index.m.less"),
				xs = n.n(Cs);
			const {
				fbt: Es
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ws = ve.a.wrapped(ps.o, "ModalText", xs.a);
			class Os extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						e.keyCode === bs.a.Escape && this.props.onClose()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						isResponsiveSettingsEnabled: e
					} = this.props, t = Object(m.a)({
						[xs.a["m-responsive"]]: e
					});
					return o.a.createElement(ps.d, {
						className: t
					}, o.a.createElement(ps.h, null, o.a.createElement(ps.p, null, Es._("Turn on Desktop Notifications", null, {
						hk: "dbEX1"
					}))), o.a.createElement(ps.k, null, o.a.createElement(ws, null, o.a.createElement(ks.a, {
						className: xs.a.row
					}, o.a.createElement("div", {
						className: xs.a.stepNumber
					}, "1"), Es._("Click on{lockIcon}in your Chrome browser address bar", [Es._param("lockIcon", o.a.createElement(hs.a, {
						className: xs.a.icon
					}))], {
						hk: "1fzz4J"
					})), o.a.createElement(ks.a, {
						className: xs.a.row
					}, o.a.createElement("div", {
						className: xs.a.stepNumber
					}, "2"), Es._("Select{settingsIcon}site settings", [Es._param("settingsIcon", o.a.createElement(_s.a, {
						className: xs.a.icon
					}))], {
						hk: "46Cjhq"
					})), o.a.createElement(ks.a, {
						className: xs.a.row
					}, o.a.createElement("div", {
						className: xs.a.stepNumber
					}, "3"), Es._("Change{notifyIcon}notifications to 'Allow'", [Es._param("notifyIcon", o.a.createElement(ys, {
						className: xs.a.notify
					}))], {
						hk: "1nkJPj"
					})))), o.a.createElement(ps.f, null, o.a.createElement(w.f, {
						onClick: this.props.onClose
					}, Es._("Got it", null, {
						hk: "2PWXZB"
					}))))
				}
			}
			var Ss = Object(us.a)(Os),
				js = n("./src/reddit/components/Settings/DesktopNotifications/index.m.less"),
				Ps = n.n(js);
			const {
				fbt: Ns
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ts = Object(c.c)({
				areNotificationsAvailable: e => {
					return Object(os.a)(e) === ts.f.NotificationsSupported
				},
				isChrome: ls.e,
				isFirefox: ls.g,
				isMobileDevice: ls.h,
				isOpera: ls.i,
				isResponsiveSettingsEnabled: ms.a,
				preferences: ds.d
			}), Is = Object(r.b)(Ts, e => ({
				requestNotificationPermission: () => Object(ns.a)().then(t => e(t.requestNotificationsPermissions(!0, !0))),
				setPreferences: t => e(Object(ss.b)(t)),
				subscribeForPNs: () => Object(ns.a)().then(t => e(t.subscribeForPNs(!0))),
				unsubscribeFromPNs: () => Object(ns.a)().then(t => e(t.unsubscribeFromPNs(!0)))
			}));
			class Ms extends o.a.Component {
				constructor(e) {
					super(e), this.lastNotificationsState = as.a, this.onNotificationsStateChange = e => {
						const {
							isEnabled: t,
							permission: n
						} = e;
						let s = !1;
						t !== this.lastNotificationsState.isEnabled && (s = t !== this.state.desktopNotifications, t && is.M(t)), this.setState(e => ({
							desktopNotifications: s ? t : e.desktopNotifications,
							notificationPermission: n
						})), this.lastNotificationsState = e
					}, this.trackPreferenceToggled = (e, t) => {
						this.props.sendEvent(Object(cs.e)(e, t))
					}, this.setDesktopNotificationsLocalValue = e => {
						this.setState({
							desktopNotifications: e
						}, () => {
							this.trackPreferenceToggled("desktop_notification_permissions", e), is.M(e)
						})
					}, this.handleBroadcastRecommendationsClick = () => {
						const {
							preferences: {
								broadcastFollower: e,
								broadcastRecommendation: t
							}
						} = this.props, n = !(e || t);
						this.updatePreferences({
							broadcastFollower: n,
							broadcastRecommendation: n
						}), this.trackPreferenceToggled("broadcast_follower", n), this.trackPreferenceToggled("broadcast_recommendation", n)
					}, this.handleDesktopNotificationsClick = () => {
						const {
							isMobileDevice: e,
							isResponsiveSettingsEnabled: t
						} = this.props;
						if (this.state.desktopNotifications) this.setDesktopNotificationsLocalValue(!1), this.props.unsubscribeFromPNs();
						else switch (this.state.notificationPermission) {
							case ts.a.Denied:
								t && e || this.setState({
									showTurnOnDesktopNotificationsModal: !0
								});
								break;
							case ts.a.Granted:
								this.setDesktopNotificationsLocalValue(!0), this.props.subscribeForPNs();
								break;
							default:
								this.props.requestNotificationPermission()
						}
					}, this.handlePrivateMessagesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							privateMessages: !e.privateMessages
						}), this.trackPreferenceToggled("private_messages", !e.privateMessages)
					}, this.handlePostRepliesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							postReplies: !e.postReplies
						}), this.trackPreferenceToggled("post_replies", !e.postReplies)
					}, this.handleCommentRepliesClick = () => {
						const {
							preferences: e
						} = this.props, t = !e.commentReplies;
						this.updatePreferences({
							commentReplies: t,
							threadReplies: !!t && e.threadReplies,
							topLevelComment: !!t && e.topLevelComment
						}), this.trackPreferenceToggled("comment_replies", !e.commentReplies)
					}, this.handleUsernameMentionsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							usernameMentions: !e.usernameMentions
						}), this.trackPreferenceToggled("username_mention", !e.usernameMentions)
					}, this.handleThreadRepliesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							threadReplies: !e.threadReplies
						}), this.trackPreferenceToggled("thread_replies", !e.threadReplies)
					}, this.handleTopLevelCommentClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							topLevelComment: !e.topLevelComment
						}), this.trackPreferenceToggled("top_level_comment", !e.topLevelComment)
					}, this.handleChatMessagesClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							chatMessages: !e.chatMessages
						}), this.trackPreferenceToggled("chat_messages", !e.chatMessages)
					}, this.handleChatRequestsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							chatRequests: !e.chatRequests
						}), this.trackPreferenceToggled("chat_requests", !e.chatRequests)
					}, this.handleTrendingPostsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							trendingPosts: !e.trendingPosts
						}), this.trackPreferenceToggled("trending_posts", !e.trendingPosts)
					}, this.handleUpvotedPostsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							upvotedPosts: !e.upvotedPosts
						}), this.trackPreferenceToggled("upvotes_post", !e.upvotedPosts)
					}, this.handleUpvotedCommentsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							upvotedComments: !e.upvotedComments
						}), this.trackPreferenceToggled("upvotes_comment", !e.upvotedComments)
					}, this.handleCommunityRecommendationsClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							communityRecommendations: !e.communityRecommendations
						}), this.trackPreferenceToggled("community_recs", !e.communityRecommendations)
					}, this.handleLiveEventClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							liveEvent: !e.liveEvent
						}), this.trackPreferenceToggled("live_event", !e.liveEvent)
					}, this.handleUserNewFollowersClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							userNewFollowers: !e.userNewFollowers
						}), this.trackPreferenceToggled("user_new_followers", !e.userNewFollowers)
					}, this.handlePostFlairAddedClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							postFlairAdded: !e.postFlairAdded
						}), this.trackPreferenceToggled("post_flair_added", !e.postFlairAdded)
					}, this.handleUserFlairAddedClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							userFlairAdded: !e.userFlairAdded
						}), this.trackPreferenceToggled("user_flair_added", !e.userFlairAdded)
					}, this.handleNewPinnedPostClick = () => {
						const {
							preferences: e
						} = this.props;
						this.updatePreferences({
							newPinnedPost: !e.newPinnedPost
						}), this.trackPreferenceToggled("new_pinned_post", !e.newPinnedPost)
					}, this.handleTurnOnDesktopNotificationsModalClose = () => {
						this.setState({
							showTurnOnDesktopNotificationsModal: !1
						})
					}, this.state = {
						areNotificationsAvailable: !1,
						desktopNotifications: !1,
						notificationPermission: ts.a.Denied,
						showTurnOnDesktopNotificationsModal: !1
					}
				}
				componentDidMount() {
					this.setState({
						areNotificationsAvailable: this.props.areNotificationsAvailable
					}), Object(as.d)(this.onNotificationsStateChange)
				}
				componentWillUnmount() {
					Object(as.e)(this.onNotificationsStateChange)
				}
				async updatePreferences(e) {
					this.props.setPreferences(Object.assign(Object.assign({}, this.props.preferences), e))
				}
				render() {
					const {
						isChrome: e,
						isFirefox: t,
						isOpera: n,
						isResponsiveSettingsEnabled: s,
						preferences: r
					} = this.props, i = Object(m.a)({
						[Ps.a.ResponsiveTooltip]: s
					});
					return o.a.createElement(a.Fragment, null, o.a.createElement(Y.a, null, s ? Ns._("Browser notifications", null, {
						hk: "YkSBM"
					}) : Ns._("Desktop notifications", null, {
						hk: "1Omom4"
					})), o.a.createElement(Q.o, {
						disabled: !(e || t || n) || !this.state.areNotificationsAvailable,
						label: s ? Ns._("Browser notifications", null, {
							hk: "4wdcLl"
						}) : Ns._("Desktop notifications", null, {
							hk: "4ameFp"
						}),
						last: !0,
						on: this.state.desktopNotifications,
						onClick: this.handleDesktopNotificationsClick,
						subtext: Ns._("See your notifications on the corner of your computer screen, even when Reddit is closed", null, {
							hk: "1PbYt7"
						}),
						tooltip: e || t || n ? "" : Ns._("Only available with Chrome, Firefox, and Opera", null, {
							hk: "1TLRmK"
						}),
						tooltipContentClassName: i
					}), o.a.createElement(Y.a, null, Ns._("Push notifications", null, {
						hk: "3cyZhe"
					})), o.a.createElement(Q.o, {
						label: Ns._("Private messages", null, {
							hk: "2oRGiA"
						}),
						on: r.privateMessages,
						onClick: this.handlePrivateMessagesClick,
						subtext: Ns._("Receive notifications for private messages", null, {
							hk: "1zstrl"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Post Flair added", null, {
							hk: "2TdbG2"
						}),
						on: r.postFlairAdded,
						onClick: this.handlePostFlairAddedClick,
						subtext: Ns._("Notify me when my post gets flair added to it", null, {
							hk: "2RQlod"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("User Flair added", null, {
							hk: "3yvnYM"
						}),
						on: r.userFlairAdded,
						onClick: this.handleUserFlairAddedClick,
						subtext: Ns._("Notify me when I receive user flair", null, {
							hk: "19yB3s"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Comments on your posts", null, {
							hk: "peb1V"
						}),
						on: r.postReplies,
						onClick: this.handlePostRepliesClick,
						subtext: Ns._("Receive notifications for comments to your posts", null, {
							hk: "2Ovke1"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Replies to your comments", null, {
							hk: "38GGYX"
						}),
						on: r.commentReplies,
						onClick: this.handleCommentRepliesClick,
						subtext: Ns._("Receive notifications for replies to your comments", null, {
							hk: "erzOR"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Threaded comment replies", null, {
							hk: "3TFG1U"
						}),
						on: r.threadReplies,
						onClick: this.handleThreadRepliesClick,
						subtext: Ns._("Receive notifications for comment replies that aren't directly to you, but within comments chains that you participated in", null, {
							hk: "3fiCzE"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("New Top Level Comments", null, {
							hk: "NGuzP"
						}),
						on: r.topLevelComment,
						onClick: this.handleTopLevelCommentClick,
						subtext: Ns._("Receive notifications for new comments on posts you've been active in", null, {
							hk: "2jO6KJ"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Mentions of u/username", null, {
							hk: "Ti1Kh"
						}),
						on: r.usernameMentions,
						onClick: this.handleUsernameMentionsClick,
						subtext: Ns._("Receive notifications for mentions of your username", null, {
							hk: "2KcTCV"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Chat messages", null, {
							hk: "3daNg7"
						}),
						on: r.chatMessages,
						onClick: this.handleChatMessagesClick,
						subtext: Ns._("Receive notifications when a user chats with you", null, {
							hk: "YLNTD"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Chat requests", null, {
							hk: "1VYdRU"
						}),
						on: r.chatRequests,
						onClick: this.handleChatRequestsClick,
						subtext: Ns._("Receive notifications when a user sends a chat request to you", null, {
							hk: "Bdtpo"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Trending posts", null, {
							hk: "4nMMXP"
						}),
						on: r.trendingPosts,
						onClick: this.handleTrendingPostsClick,
						subtext: Ns._("Receive notifications for trending posts from your favorite communities", null, {
							hk: "g79tj"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Community recommendations", null, {
							hk: "SBOr5"
						}),
						on: r.communityRecommendations,
						onClick: this.handleCommunityRecommendationsClick,
						subtext: Ns._("Send me recommendations based on my activity", null, {
							hk: "2KDRYz"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Upvotes on your posts", null, {
							hk: "14XZUW"
						}),
						on: r.upvotedPosts,
						onClick: this.handleUpvotedPostsClick,
						subtext: Ns._("Notify me when my post is upvoted", null, {
							hk: "24mEWd"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Upvotes on your comments", null, {
							hk: "2OoH8o"
						}),
						on: r.upvotedComments,
						onClick: this.handleUpvotedCommentsClick,
						subtext: Ns._("Notify me when my comment is upvoted", null, {
							hk: "94wwQ"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Relevant Live Events", null, {
							hk: "3o21Vp"
						}),
						on: r.liveEvent,
						onClick: this.handleLiveEventClick,
						subtext: Ns._("Notify me during live events", null, {
							hk: "1h0OF3"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("New followers", null, {
							hk: "32VNj1"
						}),
						on: r.userNewFollowers,
						onClick: this.handleUserNewFollowersClick,
						subtext: Ns._("Notify me when another user follows me", null, {
							hk: "26um8p"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("RPAN broadcast recommendations", null, {
							hk: "1FED6O"
						}),
						on: r.broadcastFollower || r.broadcastRecommendation,
						onClick: this.handleBroadcastRecommendationsClick,
						subtext: Ns._("Get recommendations on live broadcasts you may be interested in", null, {
							hk: "4eRUjD"
						})
					}), o.a.createElement(Q.o, {
						label: Ns._("Pinned posts", null, {
							hk: "1yFhMU"
						}),
						last: !0,
						on: r.newPinnedPost,
						onClick: this.handleNewPinnedPostClick,
						subtext: Ns._("Know when there’s a pinned post in a community you follow", null, {
							hk: "3d4li5"
						})
					}), this.state.showTurnOnDesktopNotificationsModal && o.a.createElement(Ss, {
						isResponsiveSettingsEnabled: s,
						onClose: this.handleTurnOnDesktopNotificationsModalClose,
						overlayClassName: Object(m.a)({
							[Ps.a.ResponsiveOverlay]: s
						})
					}))
				}
			}
			var As = Object(le.t)()(Is(Object(rs.c)(Ms))),
				Rs = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (s = Object.getOwnPropertySymbols(e); a < s.length; a++) t.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (n[s[a]] = e[s[a]])
					}
					return n
				};
			var Ds = e => {
					var {
						isResponsiveSettingsEnabled: t,
						prefs: {
							collapseReadMessages: n,
							emailUnsubscribe: a,
							emailDigests: r,
							emailUnreadMessages: i,
							markMessagesRead: c,
							sendWelcomeMessages: l,
							showMessagesInInbox: d,
							showUsernameMentionNotifications: m
						},
						update: u
					} = e;
					Rs(e, ["isResponsiveSettingsEnabled", "prefs", "update"]);
					return o.a.createElement(ie.a, null, o.a.createElement(re.b, {
						isResponsiveSettingsEnabled: t
					}, s.fbt._("Notifications settings", null, {
						hk: "rYOeb"
					})), o.a.createElement(Y.a, null, s.fbt._("inbox notification", null, {
						hk: "4a0OKQ"
					})), o.a.createElement(Q.o, {
						on: d,
						onClick: () => u(!d, "showMessagesInInbox"),
						label: s.fbt._("Conversations in inbox", null, {
							hk: "4b2411"
						}),
						subtext: s.fbt._("Display conversations within the messages section of your inbox", null, {
							hk: "3BrrbD"
						})
					}), o.a.createElement(Q.o, {
						on: c,
						onClick: () => u(!c, "markMessagesRead"),
						label: s.fbt._("Mark as read in inbox", null, {
							hk: "265UNW"
						}),
						subtext: s.fbt._("Mark messages as read when I open my inbox", null, {
							hk: "ER5dS"
						})
					}), o.a.createElement(Q.o, {
						on: n,
						onClick: () => u(!n, "collapseReadMessages"),
						label: s.fbt._("Collapse read messages", null, {
							hk: "2AJOGy"
						}),
						subtext: s.fbt._("Read messages will automatically be collapsed", null, {
							hk: "JKb22"
						})
					}), o.a.createElement(Q.o, {
						on: !!m,
						onClick: () => u(!m, "showUsernameMentionNotifications"),
						label: s.fbt._("Username mentions", null, {
							hk: "3enoZY"
						}),
						subtext: s.fbt._("Notify me when my username is mentioned in comment", null, {
							hk: "Qn9c"
						})
					}), o.a.createElement(Q.o, {
						on: !!l,
						onClick: () => u(!l, "sendWelcomeMessages"),
						label: s.fbt._("Mod welcome messages", null, {
							hk: "3T7aG9"
						}),
						subtext: s.fbt._("Receive welcome messages from moderators when I join their community", null, {
							hk: "1HKTXz"
						}),
						last: !0
					}), o.a.createElement(Y.a, null, s.fbt._("email notification", null, {
						hk: "4oynG5"
					})), o.a.createElement(Q.o, {
						on: !a,
						onClick: () => u(!a, "emailUnsubscribe"),
						label: s.fbt._("Email notifications", null, {
							hk: "2KF2g2"
						}),
						subtext: s.fbt._("If turned off, you will still receive administrative emails", null, {
							hk: "3eP8Pj"
						})
					}), o.a.createElement(Q.o, {
						disabled: a,
						on: !a && i,
						onClick: () => u(!i, "emailUnreadMessages"),
						label: s.fbt._("Unread messages", null, {
							hk: "2HW2aS"
						}),
						subtext: s.fbt._("Receive unread messages via email", null, {
							hk: "15wibQ"
						}),
						indent: !0
					}), o.a.createElement(Q.o, {
						disabled: a,
						on: !a && !!r,
						onClick: () => u(!r, "emailDigests"),
						label: s.fbt._("Email digests", null, {
							hk: "1vedUs"
						}),
						subtext: s.fbt._("Receive periodic emails with the top posts from your favorite communities", null, {
							hk: "2gOxhp"
						}),
						indent: !0,
						last: !0
					}), o.a.createElement(As, {
						isResponsiveSettingsEnabled: t
					}))
				},
				Ls = n("./src/reddit/components/Settings/Payments/Header/index.m.less"),
				Bs = n.n(Ls);

			function Us(e) {
				return o.a.createElement("header", {
					className: Object(m.a)(Bs.a.container, e.className)
				}, o.a.createElement("div", {
					className: Bs.a.title
				}, s.fbt._("Payments", null, {
					hk: "rydT0"
				})), o.a.createElement("div", {
					className: Bs.a.description
				}, s.fbt._("View your saved payment methods. For security and privacy, your payment details are never stored by Reddit, and only maintained by our payment providers.", null, {
					hk: "nsOvs"
				})))
			}
			var Fs = n("./src/reddit/actions/economics/paymentSystems/actionCreators.ts"),
				Ws = n("./src/reddit/models/Payments/index.ts"),
				Hs = n("./src/reddit/components/Settings/Payments/PaymentMethods/index.m.less"),
				Gs = n.n(Hs);
			class zs extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						paymentsBeingRemoved: {}
					}, this.removePayment = async e => {
						this.setState(t => ({
							paymentsBeingRemoved: Object.assign(Object.assign({}, t.paymentsBeingRemoved), {
								[e.id]: !0
							})
						}));
						const t = e.type === Ws.a.SavedStripe ? await Object(en.b)(this.props.apiContext(), e.id) : await Object(en.c)(this.props.apiContext(), e.id);
						t.ok ? this.props.onRemovePayment(e) : this.props.onError(t.error), this.setState(t => ({
							paymentsBeingRemoved: Object.assign(Object.assign({}, t.paymentsBeingRemoved), {
								[e.id]: !1
							})
						}))
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(Y.a, null, s.fbt._("payment methods", null, {
						hk: "1RSNNo"
					})), this.props.savedPayments.map(e => {
						const t = !!this.state.paymentsBeingRemoved[e.id];
						return o.a.createElement("div", {
							className: Gs.a.payment,
							key: e.id
						}, o.a.createElement("div", {
							className: Gs.a.paymentDisplay
						}, o.a.createElement(hs.a, {
							className: Gs.a.lock
						}), e.display), o.a.createElement(w.n, {
							disabled: t,
							onClick: () => this.removePayment(e)
						}, t ? s.fbt._("removing", null, {
							hk: "46e3Zi"
						}) : s.fbt._("remove", null, {
							hk: "2j7wjS"
						})))
					}), !this.props.savedPayments.length && o.a.createElement("div", {
						className: Gs.a.noSavedPayment
					}, s.fbt._("You have no saved payment methods", null, {
						hk: "3JiSmk"
					})))
				}
			}
			const qs = Object(c.c)({
					savedPayments: sn.q
				}),
				Vs = Object(r.b)(qs, e => ({
					onError: t => e(Object(N.e)({
						duration: 5e3,
						kind: R.b.Error,
						text: Object(tn.a)(t)
					})),
					onRemovePayment: t => {
						t.type === Ws.a.SavedStripe && e(Object(Fs.a)({
							cardId: t.id
						})), t.type === Ws.a.SavedPayPal && e(Object(Fs.e)({
							sourceId: t.id
						}))
					}
				}));
			var Js = Object($t.b)(Vs(zs)),
				Zs = n("./src/reddit/components/Settings/Payments/index.m.less"),
				Ys = n.n(Zs);
			var Qs = () => o.a.createElement(ie.a, null, o.a.createElement(Us, {
					className: Ys.a.header
				}), o.a.createElement(Js, null)),
				Ks = n("./src/reddit/components/Settings/PremiumForm.tsx");
			const Xs = ve.a.span("SubheaderLink", qt.a),
				$s = ve.a.button("GenerateBackupCodesButton", qt.a),
				ea = ve.a.wrapped(Q.f, "ThirdPartyAuth", qt.a),
				ta = Object(c.c)({
					blocked: e => e.user.blocked.data,
					blockedApi: e => e.user.blocked.api,
					chatSettings: e => e.user.chatSettings,
					whitelist: e => e.user.whitelist.data,
					whitelistApi: e => e.user.whitelist.api,
					shouldShowLocationBasedSetting: O.d.privacySettingLocationBasedRecommendations
				});
			var na = Object(r.b)(ta, (e, t) => ({
					addBlocked: t => e(Object(kt.h)(t)),
					addWhitelisted: t => e(Object(Ct.g)(t)),
					removeWhitelisted: t => e(Object(Ct.h)(t)),
					removeBlocked: t => e(Object(kt.g)(t)),
					saveChatSettings: t => e(Object(_t.c)(t)),
					enable2FA: () => e(Object(y.d)()),
					disable2FA: () => e(Object(y.c)()),
					generateBackupCodes: () => e(Object(y.a)())
				}))(e => {
					let {
						addBlocked: t,
						blocked: n,
						blockedApi: a,
						prefs: {
							allowClickTracking: r,
							hideFromRobots: i,
							activityRelevantAds: c,
							loginOtpEnabled: l,
							thirdPartyDataPersonalizedAds: d,
							thirdPartySiteDataPersonalizedAds: u,
							thirdPartySiteDataPersonalizedContent: p,
							showLocationBasedRecommendations: b
						},
						enable2FA: h,
						disable2FA: g,
						generateBackupCodes: f,
						isResponsiveSettingsEnabled: v,
						removeBlocked: y,
						update: _,
						shouldShowLocationBasedSetting: k
					} = e;
					return o.a.createElement(ie.a, null, o.a.createElement(re.b, {
						isResponsiveSettingsEnabled: v
					}, s.fbt._("Safety & Privacy", null, {
						hk: "3hohgI"
					})), o.a.createElement(re.a, null, s.fbt._("Manage how we use data to personalize your Reddit experience, and control how other redditors interact with you. To learn more, visit our {=Privacy & Security FAQs} .", [s.fbt._param("=Privacy & Security FAQs", o.a.createElement(Xs, null, s.fbt._("{=Privacy & Security FAQs}", [s.fbt._param("=Privacy & Security FAQs", o.a.createElement("a", {
						href: pe.a.redditHelpUrl.privacyQuestions,
						rel: "noopener noreferrer",
						target: "_blank"
					}, s.fbt._("Privacy & Security FAQs", null, {
						hk: "4qvhC1"
					})))], {
						hk: "2rwJJE"
					})))], {
						hk: "3appHO"
					})), o.a.createElement(Y.a, null, s.fbt._("Safety", null, {
						hk: "WyYmF"
					})), o.a.createElement(Gt, {
						title: s.fbt._("People You’ve Blocked", null, {
							hk: "3DxcE1"
						}),
						subtext: s.fbt._("Blocked people can’t send you chat requests or private messages.", null, {
							hk: "1m7s07"
						}),
						label: s.fbt._("Block new user", null, {
							hk: "2OeU8N"
						}),
						add: t,
						remove: y,
						list: n,
						api: a,
						padBottom: !0
					}), o.a.createElement(Y.a, null, s.fbt._("Privacy", null, {
						hk: "30eaw9"
					})), o.a.createElement(Q.o, {
						on: !i,
						onClick: () => _(!i, "hideFromRobots"),
						label: s.fbt._("Show up in search results", null, {
							hk: "3TWi4z"
						}),
						subtext: s.fbt._("Allow search engines like Google to link to your profile in their search results.", null, {
							hk: "4tnz3n"
						})
					}), o.a.createElement(Q.o, {
						on: r,
						onClick: () => _(!r, "allowClickTracking"),
						label: s.fbt._("Personalize all of Reddit based on the outbound links you click on", null, {
							hk: "21vbvn"
						}),
						subtext: s.fbt._("Allow us to use the links to other sites you click on for operational purposes (that help us better understand how you and others use Reddit) and to show you better ads and recommendations.", null, {
							hk: "DnCX0"
						})
					}), o.a.createElement(Q.o, {
						on: c,
						onClick: () => _(!c, "activityRelevantAds"),
						label: s.fbt._("Personalize ads based on your Reddit activity", null, {
							hk: "OqV13"
						}),
						subtext: s.fbt._("Allow us to use your interactions on Reddit to show you better ads.", null, {
							hk: "4C7zO1"
						})
					}), o.a.createElement(Q.o, {
						on: d,
						onClick: () => _(!d, "thirdPartyDataPersonalizedAds"),
						label: s.fbt._("Personalize ads based on information from our partners", null, {
							hk: "4pLCAq"
						}),
						subtext: s.fbt._("Allow us to use information that our advertising partners send us to show you better ads.", null, {
							hk: "37eGRC"
						})
					}), o.a.createElement(Q.o, {
						on: u,
						onClick: () => _(!u, "thirdPartySiteDataPersonalizedAds"),
						label: s.fbt._("Personalize ads based on your activity with our partners", null, {
							hk: "3uQVuS"
						}),
						subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to show you better ads.", null, {
							hk: "2T8SXc"
						})
					}), k && o.a.createElement(Q.o, {
						on: b,
						onClick: () => _(!b, "showLocationBasedRecommendations"),
						label: s.fbt._("Personalize recommendations based on your general location", null, {
							hk: "2ila4i"
						}),
						subtext: s.fbt._("Allow us to use your city, state, or country (based on your IP) to recommend better posts and communities.", null, {
							hk: "5IBGv"
						})
					}), o.a.createElement(Q.o, {
						on: p,
						onClick: () => _(!p, "thirdPartySiteDataPersonalizedContent"),
						label: s.fbt._("Personalize recommendations based on your activity with our partners", null, {
							hk: "2D9ITr"
						}),
						subtext: s.fbt._("Allow us to use your interactions with sites and apps we partner with to recommend better posts and communities.", null, {
							hk: "1e91Vl"
						}),
						last: !0
					}), o.a.createElement(Y.a, null, s.fbt._("Advanced security", null, {
						hk: "3H7FJN"
					})), o.a.createElement(Q.o, {
						on: l,
						onClick: () => l ? g() : h(),
						label: s.fbt._("Use two-factor authentication", null, {
							hk: "2OxNGe"
						}),
						subtext: o.a.createElement(o.a.Fragment, null, s.fbt._("Help protect your account (even if someone gets your password) by requiring a verification code and a password to log in.", null, {
							hk: "1LLqPh"
						}), l && o.a.createElement(o.a.Fragment, null, " ", s.fbt._("Lost access to your authenticator app?", null, {
							hk: "2x6g0Y"
						}), " ", o.a.createElement($s, {
							type: "button",
							onClick: () => f()
						}, s.fbt._("Get your backup codes", null, {
							hk: "4fp3Xg"
						})), "."))
					}), o.a.createElement(ea, {
						className: Object(m.a)({
							[qt.a["m-responsive"]]: v
						}),
						label: s.fbt._("Manage third-party app authorization", null, {
							hk: "3J65so"
						}),
						link: "".concat(pe.a.redditUrl, "/prefs/apps"),
						last: !0
					}))
				}),
				sa = n("./src/reddit/components/Loader/index.m.less"),
				aa = n.n(sa);
			class oa extends o.a.Component {
				render() {
					const {
						isLoading: e,
						render: t,
						renderLoading: n,
						loaderSize: s
					} = this.props;
					return e ? n ? n() : o.a.createElement(Be.a, {
						center: !0,
						className: aa.a.loadingIcon,
						sizePx: s || 10
					}) : t()
				}
			}
			var ra = n("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				ia = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				ca = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				la = n("./src/reddit/components/UserIcon/UserIcon.tsx");
			var da = e => o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 36 36",
					version: "1.1"
				}, o.a.createElement("circle", {
					cx: "18",
					cy: "18",
					fill: "#fff",
					r: "17.5",
					stroke: "inherit"
				}), o.a.createElement("path", {
					clipRule: "evenodd",
					d: "m25.2 16.8001h-6v-6c0-.6624-.5364-1.2-1.2-1.2s-1.2.5376-1.2 1.2v6h-6c-.6636 0-1.20002.5376-1.20002 1.2s.53642 1.2 1.20002 1.2h6v6c0 .6624.5364 1.2 1.2 1.2s1.2-.5376 1.2-1.2v-6h6c.6636 0 1.2-.5376 1.2-1.2s-.5364-1.2-1.2-1.2z",
					fill: "inherit",
					fillRule: "evenodd"
				})),
				ma = n("./src/reddit/selectors/structuredStyles.ts"),
				ua = n("./src/reddit/selectors/subredditSettings.ts"),
				pa = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				ba = n("./src/reddit/components/Settings/ProfileForm.m.less"),
				ha = n.n(ba);
			const {
				fbt: ga
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fa = 30, va = 200, ya = Object(c.a)(j.i, ua.a, j.lb, ma.o, me.a, (e, t, n, s, a) => {
				const o = e && e.profileId,
					r = o && s[o] ? s[o].bannerBackgroundImage : void 0;
				return {
					awardedLastMonth: e.awardedLastMonth,
					contentVisible: t.contentVisible,
					currentUserName: Object(D.e)(e),
					currentUserUrl: e.url,
					isEmployee: e.isEmployee,
					isGold: e.isGold,
					over18: t.over18,
					prefersReducedMotion: n.reduceAnimationsFromAwards,
					profileBanner: r,
					profileIcon: e.accountIcon,
					publicDescription: t.publicDescription,
					showActiveCommunities: n.showActiveCommunities,
					title: t.title,
					isNSFWModalOpen: "ProfileForm_NSFWConfirmDialogID" === a
				}
			}), _a = ve.a.div("ImageUploaderLayout", ha.a), ka = ve.a.wrapped(pa.a, "IconImageUploader", ha.a), Ca = ve.a.wrapped(ca.a, "ProfileIcon", ha.a), xa = ve.a.wrapped(pa.a, "BannerImageUploader", ha.a), Ea = ve.a.wrapped(ia.a, "ProfileBanner", ha.a), wa = ve.a.div("ProfileModerationContent", ha.a), Oa = ve.a.wrapped(da, "PlusCircle", ha.a), Sa = ve.a.span("LabelText", ha.a), ja = ve.a.span("ImageType", ha.a), Pa = ve.a.a("Link", ha.a), Na = ve.a.img("DummyBanner", ha.a), Ta = ve.a.wrapped(ra.a, "Preview", ha.a);
			class Ia extends o.a.Component {
				constructor(e) {
					super(e), this.onTitleChange = e => this.setState({
						title: e.target.value
					}), this.onDescriptionChange = e => this.setState({
						publicDescription: e.target.value
					}), this.switchNSFW = () => {
						this.updateProfile(!0, "over18"), this.props.sendEvent(Object(Qe.h)(this.props.over18))
					}, this.switchSFW = () => {
						this.updateProfile(!1, "over18"), this.props.toggleNSFWModal(), this.props.sendEvent(Object(Qe.h)(this.props.over18))
					}, this.onNSFWToggled = () => this.props.over18 ? this.props.toggleNSFWModal() : this.switchNSFW(), this.onContentVisibleChange = () => {
						this.updateProfile(!this.props.contentVisible, "contentVisible"), this.props.sendEvent(Object(Qe.c)(this.props.contentVisible))
					}, this.onIconChange = async e => {
						this.setState({
							profileIconUploading: !0
						}), await this.props.imagesUpdateRequested(e, "profileIcon"), this.setState({
							profileIconUploading: !1
						})
					}, this.onBannerChange = async e => {
						this.setState({
							profileBannerUploading: !0
						}), await this.props.imagesUpdateRequested(e, "profileBanner"), this.setState({
							profileBannerUploading: !1
						})
					}, this.onDeleteBanner = async () => {
						this.setState({
							isDeletingBanner: !0
						}), await this.props.imageDeleteRequested("profileBanner"), this.setState({
							isDeletingBanner: !1
						})
					}, this.onDeleteIcon = async () => {
						this.setState({
							isDeletingIcon: !0
						}), await this.props.imageDeleteRequested("profileIcon"), this.setState({
							isDeletingIcon: !1
						})
					}, this.onShowActiveCommunitiesChange = () => {
						this.props.save(this.props, {
							showActiveCommunities: !this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						}), this.props.sendEvent(Object(Qe.a)(this.props.showActiveCommunities))
					}, this.updateProfile = async (e, t) => {
						this.props.save(Object.assign(Object.assign({}, this.props), {
							[t]: e
						}), {
							showActiveCommunities: this.props.showActiveCommunities,
							prevShowActiveCommunities: this.props.showActiveCommunities
						})
					}, this.state = {
						contentVisible: e.contentVisible,
						isDeletingBanner: !1,
						isDeletingIcon: !1,
						over18: e.over18,
						profileBannerUploading: !1,
						profileIconUploading: !1,
						publicDescription: e.publicDescription,
						title: e.title,
						isSaving: !1
					}
				}
				render() {
					const {
						awardedLastMonth: e,
						contentVisible: t,
						currentUserName: n,
						currentUserUrl: s,
						isEmployee: a,
						isGold: r,
						isNSFWModalOpen: i,
						isResponsiveSettingsEnabled: c,
						over18: l,
						prefersReducedMotion: d,
						profileBanner: u,
						profileIcon: p,
						showActiveCommunities: b,
						toggleNSFWModal: h
					} = this.props, {
						isDeletingBanner: g,
						isDeletingIcon: f,
						profileBannerUploading: v,
						profileIconUploading: y,
						publicDescription: _,
						title: k
					} = this.state, x = Object(m.a)({
						[ha.a["m-responsive"]]: c
					}), E = !!p && !Object(la.b)(p);
					return o.a.createElement(ie.a, {
						sidebar: o.a.createElement(Ta, {
							bannerBackgroundImage: u,
							editMode: !0,
							isEmployee: a,
							isDefaultIcon: !p || p.indexOf("avatar_default") > -1,
							isDeletingBanner: g,
							isDeletingIcon: f,
							isGold: r,
							isNSFW: l,
							isOverlay: !1,
							onDeleteBanner: this.onDeleteBanner,
							onDeleteIcon: this.onDeleteIcon,
							prefersReducedMotion: d,
							profileIcon: p,
							publicDescription: _,
							recentAwardings: e,
							title: k,
							url: s,
							username: n
						})
					}, o.a.createElement(re.b, {
						isResponsiveSettingsEnabled: c
					}, ga._("Customize profile", null, {
						hk: "1fenXK"
					})), o.a.createElement(Y.a, null, ga._("Profile Information", null, {
						hk: "3vzAUk"
					})), o.a.createElement(Q.e, {
						label: ga._("Display name (optional)", null, {
							hk: "DKmS8"
						}),
						onChange: this.onTitleChange,
						onBlur: () => {
							k !== this.props.title && this.updateProfile(k, "title")
						},
						placeholder: ga._("Display name (optional)", null, {
							hk: "2BOHwt"
						}),
						maxChars: fa,
						subtext: ga._("Set a display name. This does not change your username.", null, {
							hk: "3xfh9M"
						}),
						value: k
					}), o.a.createElement(Q.g, {
						label: ga._("About (optional)", null, {
							hk: "1W7xvB"
						}),
						onChange: this.onDescriptionChange,
						onBlur: () => {
							_ !== this.props.publicDescription && this.updateProfile(_, "publicDescription")
						},
						placeholder: ga._("About (optional)", null, {
							hk: "3wFdhi"
						}),
						maxChars: va,
						subtext: ga._("A brief description of yourself shown on your profile.", null, {
							hk: "3gGUDy"
						}),
						value: _
					}), o.a.createElement(Y.a, null, ga._("Images", null, {
						hk: "38DOkf"
					})), o.a.createElement(Q.k, {
						label: ga._("Avatar and banner image", null, {
							hk: "16dJ39"
						}),
						subtext: ga._("Images must be .png or .jpg format", null, {
							hk: "2YKVT5"
						}),
						direction: "column"
					}, o.a.createElement(_a, {
						className: Object(m.a)(x)
					}, E ? o.a.createElement(Ca, {
						className: x,
						iconUrl: p,
						isNSFW: !1,
						userName: n
					}) : o.a.createElement(ka, {
						className: x,
						controlName: "profileIcon",
						icon: o.a.createElement(Oa, null),
						isUploading: y,
						label: o.a.createElement(Sa, null, ga._("Drag and Drop or Upload {imageType} Image", [ga._param("imageType", o.a.createElement(ja, null, "avatar"))], {
							hk: "27PRKI"
						})),
						labelClassName: ha.a.Label,
						onChange: this.onIconChange
					}), u ? o.a.createElement(Ea, {
						bannerUrl: u,
						className: x,
						isNSFW: !1,
						userName: n
					}) : o.a.createElement(xa, {
						className: x,
						controlName: "profileBanner",
						icon: o.a.createElement(Oa, null),
						isUploading: v,
						label: o.a.createElement(Sa, null, ga._("Drag and Drop or Upload {imageType} Image", [ga._param("imageType", o.a.createElement(ja, null, "Banner"))], {
							hk: "1DrvdL"
						})),
						labelClassName: ha.a.Label,
						onChange: this.onBannerChange
					}))), o.a.createElement(Y.a, null, ga._("Profile category", null, {
						hk: "1YRE6p"
					})), o.a.createElement(Q.o, {
						label: ga._("NSFW", null, {
							hk: "XPmIh"
						}),
						on: l,
						subtext: ga._("This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)", null, {
							hk: "2l9M6G"
						}),
						onClick: this.onNSFWToggled
					}), o.a.createElement(Y.a, null, ga._("Advanced", null, {
						hk: "1US2Ur"
					})), o.a.createElement(Q.o, {
						label: ga._("Content visibility", null, {
							hk: "3RQ2dW"
						}),
						subtext: ga._("Posts to this profile can appear in {profileForm: r/all link} and your profile can be discovered in {profileForm: /users link}", [ga._param("profileForm: r/all link", o.a.createElement(Pa, {
							href: "/r/all"
						}, "r/all")), ga._param("profileForm: /users link", o.a.createElement(Pa, {
							href: "/users"
						}, "/users"))], {
							hk: "16m9kL"
						}),
						on: t,
						onClick: this.onContentVisibleChange
					}), o.a.createElement(Q.o, {
						label: ga._("Active in communities visibility", null, {
							hk: "3GUmB5"
						}),
						subtext: ga._("Show which communities I am active in on my profile.", null, {
							hk: "3jFDfF"
						}),
						on: b,
						onClick: this.onShowActiveCommunitiesChange
					}), o.a.createElement(Y.a, null, ga._("Profile moderation", null, {
						hk: "3vDS8h"
					})), o.a.createElement(wa, null, ga._("For moderation tools please visit our {ProfileForm: mod page link}", [ga._param("ProfileForm: mod page link", o.a.createElement(Pa, {
						href: "/user/".concat(n, "/about/edit/moderation")
					}, "Profile Moderation page"))], {
						hk: "3pih6f"
					})), i && o.a.createElement(C.a, {
						headerText: ga._("SWITCH ACCOUNT TO SFW", null, {
							hk: "2rDUbc"
						}),
						message: ga._("If your account contains {NSFWConfirm: nsfw policy link} (contains nudity, pornography, profanity or inappropriate content for those under 18) and it’s not set to NSFW, this will result in actions up to and including suspension of your account.", [ga._param("NSFWConfirm: nsfw policy link", o.a.createElement(Pa, {
							href: "https://www.redditinc.com/policies/content-policy#text-content3"
						}, "NSFW content"))], {
							hk: "3u1P0O"
						}),
						cancelText: ga._("Cancel", null, {
							hk: "2TSLl5"
						}),
						acceptText: ga._("I UNDERSTAND", null, {
							hk: "3wiM7r"
						}),
						onAccept: this.switchSFW,
						onCancel: h,
						onOverlayClick: h,
						overlayClassName: Object(m.a)({
							[ha.a.ResponsiveOverlay]: c
						}),
						withOverlay: !0
					}), o.a.createElement(Na, {
						src: u
					}))
				}
			}
			const Ma = Object(r.b)(ya, e => ({
					imageDeleteRequested: t => e(Object(E.A)(t)),
					imagesUpdateRequested: (t, n) => e(Object(E.B)(t, n)),
					save: (t, n) => e(Object(E.G)(t, n)),
					toggleNSFWModal: () => e(Object(_.i)("ProfileForm_NSFWConfirmDialogID"))
				}))(Object(rs.c)(Ia)),
				Aa = Object(c.c)({
					isLoading: e => !Object(ua.a)(e)
				}),
				Ra = Object(r.b)(Aa)(oa);

			function Da(e) {
				return o.a.createElement(Ra, {
					loaderSize: 50,
					render: () => o.a.createElement(Ma, e)
				})
			}
			var La = n("./src/reddit/components/Settings/SpecialMembership/Header/index.m.less"),
				Ba = n.n(La);

			function Ua(e) {
				return o.a.createElement("header", {
					className: e.className
				}, o.a.createElement("div", {
					className: Ba.a.title
				}, s.fbt._("Special Memberships", null, {
					hk: "3eWAHi"
				})), o.a.createElement("div", {
					className: Ba.a.subtitle
				}, s.fbt._("View and manage your Special Membership subscriptions.", null, {
					hk: "rHjy"
				})))
			}
			var Fa = n("./src/reddit/actions/governance/communityDetails.ts"),
				Wa = n("./src/lib/addQueryParams/index.ts"),
				Ha = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/Bullet.tsx"),
				Ga = n("./src/reddit/components/Governance/TransactionModals/BaseTransactionModal/QRCode.tsx"),
				za = n("./src/reddit/components/Governance/TransactionModals/CancelMembershipCard/index.m.less"),
				qa = n.n(za);
			const {
				fbt: Va
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Ja = Object(c.c)({
				userId: e => {
					const t = Object(j.i)(e);
					return t ? t.id : ""
				}
			});
			var Za = Object(r.b)(Ja)((function(e) {
					const {
						subreddit: t,
						userId: n
					} = e, s = Object(Wa.a)("http://www.reddit.com/vault/unsubscribe", {
						u: n,
						s: t.id
					});
					return o.a.createElement("div", {
						className: qa.a.body
					}, o.a.createElement("section", {
						className: qa.a.leftSection
					}, o.a.createElement("div", {
						className: qa.a.sectionHeader
					}, "Cancel your subscription with your mobile device"), o.a.createElement("div", {
						className: qa.a.content
					}, o.a.createElement(Ha.a, {
						index: "1"
					}, Va._("Scan the QR code with your Camera app", null, {
						hk: "3rbMTX"
					})), o.a.createElement(Ha.a, {
						index: "2"
					}, Va._("Use that link to open the Reddit app", null, {
						hk: "1MKSkG"
					})), o.a.createElement(Ha.a, {
						index: "3"
					}, Va._("Approve your subscription cancellation", null, {
						hk: "2oJWUP"
					})))), o.a.createElement("section", {
						className: qa.a.rightSection
					}, o.a.createElement("div", {
						className: qa.a.qrCode
					}, o.a.createElement(Ga.a, {
						url: s,
						color: t.primaryColor
					}))))
				})),
				Ya = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				Qa = n("./src/reddit/helpers/trackers/communityPoints.ts"),
				Ka = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Xa = n("./src/reddit/components/Economics/Price/index.tsx"),
				$a = n("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx"),
				eo = n("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				to = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/CancellationModal/index.m.less"),
				no = n.n(to);
			const {
				fbt: so
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ao = e => so._("You've been supporting the community and the development of new features since {joinDate}.", [so._param("joinDate", e)], {
				hk: "37ImIl"
			}), oo = [so._("Loyalty badge", null, {
				hk: "15DctX"
			}), so._("New style badges every month", null, {
				hk: "2uZZ0d"
			}), so._("Distinguished username", null, {
				hk: "4vsJEd"
			}), so._("Support new feature development", null, {
				hk: "RItPm"
			})];
			var ro = function(e) {
				const {
					joinDate: t,
					membership: n,
					subreddit: s,
					title: a
				} = e, r = s.primaryColor;
				return o.a.createElement("div", {
					className: no.a.card,
					style: {
						borderColor: r
					}
				}, o.a.createElement(eo.a, {
					className: no.a.brand,
					subreddit: s
				}), o.a.createElement("div", {
					className: no.a.cardContent
				}, o.a.createElement("div", {
					className: no.a.cardTitle
				}, a), o.a.createElement(Xa.a, {
					className: no.a.price,
					dollarPrice: "usd" === n.currency ? n.price : void 0,
					monthly: !0,
					subredditId: s.id,
					tokenPrice: "points" === n.currency ? n.price : void 0
				}), o.a.createElement("div", {
					className: no.a.membershipMsg
				}, ao(t)), o.a.createElement("div", {
					className: no.a.benefitsTitle
				}, so._("Membership Benefits", null, {
					hk: "3FGRZ0"
				})), o.a.createElement("ul", {
					className: no.a.benefits
				}, oo.map(e => o.a.createElement($a.a, {
					benefit: e,
					color: r,
					key: e
				})))))
			};
			const {
				fbt: io
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var co = function(e) {
					const {
						className: t,
						joinDate: n,
						membership: s,
						onClose: i,
						subreddit: c,
						title: l
					} = e, d = Object(r.c)(), u = Object(he.a)();
					Object(a.useEffect)(() => {
						c && (d(Object(Fa.a)({
							subredditId: c.id
						})), u(Object(Qa.b)(c.id)))
					}, [d, u, c]);
					const p = c ? c.primaryColor : "",
						b = p && Object(Ya.a)(p, void 0, gs.a.white);
					return o.a.createElement("div", {
						className: Object(m.a)(t, no.a.pointsContainer)
					}, o.a.createElement("header", {
						className: no.a.pointsHeader,
						style: {
							backgroundColor: p,
							color: b
						}
					}, io._("Special Membership Cancellation Confirmation", null, {
						hk: "1uyrDO"
					}), o.a.createElement(Ka.a, {
						className: no.a.close,
						onClick: i,
						style: {
							fill: b
						}
					})), o.a.createElement("article", {
						className: no.a.content
					}, c && o.a.createElement(o.a.Fragment, null, o.a.createElement(Za, {
						subreddit: c
					}), o.a.createElement(ro, {
						joinDate: n,
						membership: s,
						subreddit: c,
						title: l
					}))))
				},
				lo = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				mo = n("./src/reddit/actions/governance/errorToast.ts"),
				uo = n("./src/reddit/endpoints/economics/specialMembership.ts");
			const {
				fbt: po
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const bo = Object(r.b)(void 0, (e, t) => {
				let {
					subredditId: n,
					onClose: s
				} = t;
				return {
					onCancelMembership: () => {
						e(Object(lo.h)({
							subredditId: n
						})), s()
					},
					onError: t => Object(mo.a)(e, t)
				}
			});
			var ho = Object($t.b)(bo((function(e) {
				const {
					apiContext: t,
					className: n,
					endDate: s,
					joinDate: r,
					membership: i,
					onCancelMembership: c,
					onClose: l,
					onError: d,
					subreddit: u,
					subredditId: p,
					title: b
				} = e, [h, g] = Object(a.useState)(!1), f = u ? u.displayText : "";
				return o.a.createElement("div", {
					className: Object(m.a)(n, no.a.container)
				}, o.a.createElement("header", {
					className: no.a.header
				}, po._("Special Membership Cancellation Confirmation", null, {
					hk: "1uyrDO"
				}), o.a.createElement(Ka.a, {
					className: no.a.close,
					onClick: l
				})), o.a.createElement("article", {
					className: no.a.content
				}, o.a.createElement("div", {
					className: no.a.warning
				}, po._("Canceling your Special Membership in the {subredditName} community will stop your monthly payments, disable your access to special features, and end your support of new feature development. You will also lose access to all badges that were included in the subscription. You can keep accessing features till the end of your subscription billing cycle on {endDate}. Do you want to continue and cancel your Special Membership?", [po._param("subredditName", f), po._param("endDate", s)], {
					hk: "1POMMH"
				})), u && o.a.createElement(ro, {
					joinDate: r,
					membership: i,
					subreddit: u,
					title: b
				})), o.a.createElement("footer", {
					className: no.a.footer
				}, o.a.createElement(w.i, {
					disabled: h,
					onClick: async () => {
						g(!0);
						const e = await Object(uo.a)(t(), {
							subredditId: p
						});
						e.ok ? c() : (g(!1), d(e.error))
					}
				}, h ? po._("canceling...", null, {
					hk: "1Ggy36"
				}) : po._("cancel membership", null, {
					hk: "C9ZhO"
				})), o.a.createElement(w.f, {
					onClick: l
				}, po._("Dismiss", null, {
					hk: "EKJpC"
				}))))
			})));
			const go = Object(c.c)({
					subreddit: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.subreddits.models[n]
					}
				}),
				fo = Object(r.b)(go);
			var vo = Object(us.a)(fo((function(e) {
					return "points" === e.membership.currency ? o.a.createElement(co, e) : o.a.createElement(ho, e)
				}))),
				yo = n("./src/reddit/components/Settings/SpecialMembership/Memberships/Membership/index.m.less"),
				_o = n.n(yo);

			function ko(e) {
				return new Date(e).toLocaleDateString(void 0, {
					month: "long",
					year: "numeric",
					day: "numeric"
				})
			}
			class Co extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						modalOpen: !1
					}
				}
				render() {
					const {
						className: e,
						subscription: t,
						subreddit: n
					} = this.props, {
						membership: a,
						settings: r
					} = t, i = ko(a.endsAt), c = ko(a.publishAt), l = !r.renew, d = n ? n.displayText : "", u = i ? s.fbt._("Cancelled. Will expire on {date}", [s.fbt._param("date", i)], {
						hk: "3jHzuz"
					}) : "", p = c ? s.fbt._("Joined {date}", [s.fbt._param("date", c)], {
						hk: "1ta8Vp"
					}) : "";
					return o.a.createElement("div", {
						className: Object(m.a)(e, _o.a.container)
					}, o.a.createElement("div", {
						className: _o.a.membershipName
					}, s.fbt._("{subredditName} {title}", [s.fbt._param("subredditName", d), s.fbt._param("title", a.title)], {
						hk: "2NdAdN"
					})), !l && o.a.createElement("div", {
						className: _o.a.joinDate,
						title: p
					}, p), l && o.a.createElement("div", {
						className: _o.a.cancelled,
						title: u
					}, u), o.a.createElement(w.n, {
						className: _o.a.button,
						disabled: l,
						onClick: () => this.setState({
							modalOpen: !0
						})
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), this.state.modalOpen && o.a.createElement(vo, {
						withOverlay: !0,
						endDate: i,
						joinDate: c,
						subredditId: a.subredditId,
						membership: a,
						title: d + " " + a.title,
						onClose: () => this.setState({
							modalOpen: !1
						})
					}))
				}
			}
			const xo = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subscription: n
					} = t;
					return e.subreddits.models[n.membership.subredditId]
				}
			});
			var Eo = Object(r.b)(xo)(Co),
				wo = n("./src/reddit/components/Settings/SpecialMembership/Memberships/index.m.less"),
				Oo = n.n(wo);
			const So = Object(c.c)({
				membershipsLoading: e => !e.economics.me.fetched,
				memberships: e => e.economics.me.data.specialMemberships || {}
			});
			var jo = Object(r.b)(So)((function(e) {
					const {
						className: t,
						membershipsLoading: n,
						memberships: a
					} = e, r = Object.keys(a).map(e => (function(e) {
						if (!e.active) return null;
						const t = Object.keys(e.active).filter(e => "provisional_membership" !== e),
							n = e.active[t[0]];
						return n && Date.now() < n.endsAt ? {
							membership: n,
							settings: e.settings
						} : null
					})(a[e])).filter(e => !!e).sort((e, t) => e.membership.endsAt - t.membership.endsAt), i = !!r.length;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement("div", {
						className: Oo.a.title
					}, s.fbt._("Communities", null, {
						hk: "pF5xn"
					})), n && Array.from({
						length: 3
					}).map((e, t) => o.a.createElement("div", {
						className: Oo.a.loading,
						key: t
					})), i && r.map(e => o.a.createElement(Eo, {
						key: e.membership.subredditId,
						className: Oo.a.membership,
						subscription: e
					})), !n && !i && o.a.createElement("div", {
						className: Oo.a.empty
					}, s.fbt._("You are not subscribed to any Special Memberships", null, {
						hk: "738ir"
					})))
				})),
				Po = n("./src/reddit/components/Settings/SpecialMembership/index.m.less"),
				No = n.n(Po);

			function To(e) {
				return o.a.createElement(ie.a, {
					className: e.className
				}, o.a.createElement(Ua, {
					className: No.a.header
				}), o.a.createElement(jo, null))
			}
			var Io = n("./src/reddit/components/TabNav/index.tsx"),
				Mo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				Ao = n("./src/reddit/helpers/trackers/premiumSettings.ts"),
				Ro = n("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				Do = n("./src/reddit/selectors/platform.ts"),
				Lo = n("./src/reddit/pages/Settings/index.m.less"),
				Bo = n.n(Lo);
			const Uo = (e, t, n, a) => [{
					key: u.Ob.Account,
					title: s.fbt._("Account", null, {
						hk: "kL0Ow"
					})
				}, {
					key: u.Ob.Profile,
					title: s.fbt._("Profile", null, {
						hk: "4AiObW"
					})
				}, {
					key: u.Ob.Privacy,
					title: s.fbt._("Safety & Privacy", null, {
						hk: "4hchEz"
					})
				}, {
					key: u.Ob.Feed,
					title: s.fbt._("Feed Settings", null, {
						hk: "4Giq2p"
					})
				}, {
					key: u.Ob.Notifications,
					title: s.fbt._("Notifications", null, {
						hk: "fklVW"
					})
				}, {
					key: u.Ob.Premium,
					title: n ? s.fbt._("Subscriptions", null, {
						hk: "48xste"
					}) : s.fbt._("Reddit Premium", null, {
						hk: "3mygAP"
					})
				}, {
					className: Bo.a.CreatorTab,
					key: u.Ob.Creator,
					title: s.fbt._("Reddit Creator", null, {
						hk: "45BriY"
					}),
					disabled: !e
				}, {
					className: Bo.a.PaymentsTab,
					key: u.Ob.Payments,
					title: s.fbt._("Payments", null, {
						hk: "31LCer"
					}),
					disabled: !a.length
				}, {
					className: Bo.a.SpecialMembershipTab,
					key: u.Ob.SpecialMembership,
					title: s.fbt._("Special Memberships", null, {
						hk: "3ZoNj3"
					}),
					disabled: !t
				}, {
					className: Bo.a.MessagingTab,
					key: u.Ob.Messaging,
					title: s.fbt._("Chat & Messaging", null, {
						hk: "3uLoYZ"
					})
				}],
				Fo = Object(c.c)({
					savedPayments: sn.q,
					userIsWhitelistedCreator: sn.y,
					allowNavigationCallback: Do.a,
					arePowerupsEnabled: Ro.a,
					isResponsiveSettingsEnabled: ms.a,
					prefs: e => e.user.prefs,
					userHasSpecialMembership: e => {
						if (e.economics.me.fetched) {
							const t = e.economics.me.data.specialMemberships || {};
							return !!Object.keys(t).length
						}
						return !1
					}
				}),
				Wo = Object(le.t)(),
				Ho = Object(r.b)(Fo, (e, t) => ({
					changeTab: t => e(Object(i.b)("/settings/".concat(t))),
					updatePrefs: t => e(Object(E.H)(t)),
					onPageViewed: () => e(Object(h.a)())
				})),
				Go = {
					activityRelevantAds: "personalization_activity_relevant_ads",
					acceptPrivateMessages: "recieve_messages",
					allowClickTracking: "privacy_log_outbound_clicks",
					autoplayVideo: "video_autoplay",
					collapseReadMessages: "collapse_messages",
					defaultCommentSort: "default_comment_sort",
					emailDigests: "email_digests",
					emailUnreadMessages: "email_unread",
					emailUnsubscribe: "email_notifications",
					geopopular: "geopopular",
					hasSeenCustomizeFlyout: "has_seen_customize_flyout",
					hideAds: "hide_advertisements",
					hideFromRobots: "privacy_search_indexing",
					hideNSFW: "no_profanity",
					highlightComments: "highlight_new_comments",
					ignoreSuggestedSort: "ignore_suggested_sort",
					inBeta: "basic_beta",
					labelNSFW: "safe_browsing_mode",
					markMessagesRead: "mark_as_read",
					nightmode: "nightmode",
					openPostInNewTab: "posts_in_new_tab",
					over18: "adult_content",
					privateFeeds: "private_feeds",
					reduceAnimationsFromAwards: "reduce_animations_from_awards",
					rememberCommunitySort: "remember_community_sort",
					rpanDuDismissalTime: "rpan_du_dismissal_time",
					sendWelcomeMessages: "welcome_message",
					showActiveCommunities: "top_karma_subreddits",
					showMessagesInInbox: "threaded_messages",
					showNotifications: "live_orangereds",
					showRpanDu: "show_rpan_du",
					showTwitter: "show_twitter",
					showUsernameMentionNotifications: "monitor_mentions",
					sort: "community_sort",
					stylesEnabled: "community_styles",
					useMarkdown: "default_markdown",
					rememberCommunityLayout: "remember_community_view",
					layout: "default_community_view",
					thirdPartyDataPersonalizedAds: "personalization_third_party_data_personalized_ads",
					thirdPartySiteDataPersonalizedAds: "personalization_third_party_site_data_personalized_ads",
					thirdPartySiteDataPersonalizedContent: "personalization_third_party_site_data_personalized_content",
					showLocationBasedRecommendations: "personalization_show_location_based_recommendations",
					topContentDismissalTime: "top_content_dismissal_time",
					topContentTimesDismissed: "top_content_times_dismissed"
				};
			class zo extends o.a.Component {
				constructor() {
					var e;
					super(...arguments), e = this, this.tabNavRef = o.a.createRef(), this.update = (e, t) => {
						const {
							prefs: n
						} = this.props;
						this.sendEvent(e, t), n.acceptPrivateMessages && (n.acceptPrivateMessages = n.acceptPrivateMessages.toLowerCase()), this.props.updatePrefs(Object.assign(Object.assign({}, n), {
							[t]: e
						}))
					}, this.sendEvent = (e, t) => {
						const n = d()();
						Go.hasOwnProperty(t) && this.props.sendEvent(s => ({
							source: this.getSource(),
							action: "save",
							noun: Go[t],
							correlationId: n,
							setting: {
								value: this.getTrackingValue(t, e),
								oldValue: this.getTrackingValue(t, e, !0)
							}
						}))
					}, this.getSource = () => {
						const e = this.props.match.params.page;
						return e && e !== u.Ob.Account ? "".concat("settings", "_").concat(e) : "settings"
					}, this.getTrackingValue = function(t, n) {
						let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						const a = s ? e.props.prefs[t] : n;
						return "boolean" == typeof a ? ["emailUnsubscribe", "hideFromRobots"].includes(t) ? !0 === a ? "off" : "on" : !0 === a ? "on" : "off" : a
					}, this.renderForm = e => {
						const {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							location: s,
							userIsWhitelistedCreator: a,
							userHasSpecialMembership: r
						} = this.props, i = {
							isResponsiveSettingsEnabled: t,
							prefs: n,
							update: this.update
						};
						switch (e) {
							case u.Ob.Account:
								return o.a.createElement(ft, i);
							case u.Ob.Profile:
								return o.a.createElement(Da, i);
							case u.Ob.Premium:
								return o.a.createElement(Ks.b, i);
							case u.Ob.Notifications:
								return o.a.createElement(Ds, i);
							case u.Ob.Privacy:
								return o.a.createElement(na, i);
							case u.Ob.Messaging:
								return o.a.createElement(Zt, i);
							case u.Ob.Feed:
								return o.a.createElement(es, i);
							case u.Ob.Payments:
								return o.a.createElement(Qs, null);
							case u.Ob.Creator: {
								const e = Object(p.a)(s.search);
								return a ? o.a.createElement(hn, {
									stripeConnectCode: e.get("code"),
									stripeConnectStateToken: e.get("state")
								}) : null
							}
							case u.Ob.SpecialMembership:
								return r ? o.a.createElement(To, null) : null;
							default:
								return o.a.createElement(ft, i)
						}
					}, this.preventTabClickEvent = e => {
						e.preventDefault()
					}, this.onPremiumTabClick = () => {
						this.props.sendEvent(Object(Ao.e)())
					}, this.getTabClickHandler = e => this.props.isResponsiveSettingsEnabled ? this.preventTabClickEvent : e === u.Ob.Premium ? this.onPremiumTabClick : void 0, this.isScrolling = !1, this.resetScrolling = () => {
						this.isScrolling = !1
					}, this.startScrolling = () => {
						this.isScrolling = !0
					}, this.tabTouchEndHandlerCache = {}, this.getTabTouchEndHandler = e => (this.tabTouchEndHandlerCache[e] || (this.tabTouchEndHandlerCache[e] = () => {
						this.isScrolling || (e === u.Ob.Premium && this.onPremiumTabClick(), this.props.changeTab(e))
					}), this.tabTouchEndHandlerCache[e]), this.tabRefCache = {}, this.getTabRef = e => (this.tabRefCache[e] || (this.tabRefCache[e] = o.a.createRef()), this.tabRefCache[e]), this.renderTab = (e, t) => {
						const {
							match: {
								params: {
									page: n
								}
							}
						} = this.props;
						return o.a.createElement(Io.a, {
							to: "/settings/".concat(e.key),
							active: !n && 0 === t || e.key === n,
							className: e.className,
							innerRef: this.getTabRef(e.key),
							key: e.key,
							onClick: this.getTabClickHandler(e.key),
							onTouchEnd: this.getTabTouchEndHandler(e.key),
							onTouchStart: this.resetScrolling
						}, e.title)
					}
				}
				componentDidMount() {
					Object(Mo.d)(Mo.a.PremiumSettings), this.props.onPageViewed(), this.props.isResponsiveSettingsEnabled && this.scrollToActivePage()
				}
				scrollToActivePage() {
					b.a.read(() => {
						if (!this.tabNavRef.current) return;
						const {
							match: {
								params: {
									page: e = u.Ob.Account
								}
							}
						} = this.props, t = this.tabRefCache[e];
						t && t.current && this.tabNavRef.current.scrollTo({
							behavior: "smooth",
							left: t.current.offsetLeft - 8
						})
					})
				}
				componentWillUnmount() {
					Object(Mo.b)(Mo.a.PremiumSettings)
				}
				componentDidUpdate(e, t, n) {
					e.match.params.page !== this.props.match.params.page && this.props.onPageViewed()
				}
				render() {
					const {
						arePowerupsEnabled: e,
						match: t,
						isResponsiveSettingsEnabled: n,
						userIsWhitelistedCreator: a,
						userHasSpecialMembership: r,
						savedPayments: i
					} = this.props;
					return o.a.createElement("div", {
						className: Object(m.a)(Bo.a.Container, {
							[Bo.a["m-responsive"]]: n
						})
					}, o.a.createElement(Io.c, {
						constrainWidth: !0,
						innerRef: this.tabNavRef,
						isResponsiveSettingsEnabled: n,
						title: s.fbt._("User settings", null, {
							hk: "4fP8lg"
						}),
						icon: Io.b.GEAR,
						onTouchMove: this.startScrolling
					}, Uo(a, r, e, i).filter(e => !e.disabled).map(this.renderTab)), this.renderForm(t.params.page))
				}
			}
			t.default = Wo(Ho(Object(rs.c)(zo)))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/config.ts");
			const a = (e, t) => "".concat(s.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		}
	}
]);
//# sourceMappingURL=Settings.2ca9340dc0c7db84c393.js.map