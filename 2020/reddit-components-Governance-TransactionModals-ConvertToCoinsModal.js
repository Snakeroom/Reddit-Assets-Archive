// https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ConvertToCoinsModal.aeb581d1134ef7689db3.js
// Retrieved at 10/29/2020, 4:20:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-TransactionModals-ConvertToCoinsModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, a) {
			var n = a("./node_modules/lodash/toString.js"),
				c = 0;
			e.exports = function(e) {
				var t = ++c;
				return n(e) + t
			}
		},
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
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/graphql/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/bignumber.js/bignumber.js");

			function c(e, t) {
				const a = new n.BigNumber(e),
					c = new n.BigNumber(t),
					r = new n.BigNumber(a.dividedBy(c)),
					s = new n.BigNumber("100").multipliedBy(r);
				return new n.BigNumber(s).toNumber()
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return S
			})), a.d(t, "h", (function() {
				return D
			})), a.d(t, "g", (function() {
				return L
			})), a.d(t, "f", (function() {
				return B
			})), a.d(t, "d", (function() {
				return F
			})), a.d(t, "c", (function() {
				return V
			})), a.d(t, "a", (function() {
				return H
			})), a.d(t, "e", (function() {
				return Y
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./node_modules/lodash/omit.js"),
				r = a.n(c),
				s = a("./node_modules/uuid/v4.js"),
				o = a.n(s),
				l = a("./src/config.ts"),
				i = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/actions/toaster.ts"),
				u = a("./src/lib/addQueryParams/index.ts"),
				m = a("./src/lib/makeActionCreator/index.ts"),
				p = a("./src/lib/sentry/index.ts"),
				b = a("./src/reddit/models/Toast/index.ts"),
				f = a("./src/reddit/actions/gold/constants.ts"),
				h = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				v = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = a("./src/reddit/selectors/user.ts"),
				j = a("./src/reddit/actions/gold/powerups.ts"),
				O = a("./src/reddit/actions/modal.ts"),
				x = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/bignumber.js/bignumber.js")),
				E = a.n(x),
				C = a("./src/graphql/operations/CancelEconRecurringPayment.json"),
				y = a("./src/graphql/operations/ConfirmPaypalPayment.json"),
				w = a("./src/graphql/operations/CreateEconOrder.json"),
				M = a("./src/graphql/operations/CreatePaypalPayment.json"),
				N = a("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				_ = a("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				k = a("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				I = a("./src/graphql/operations/DeleteSavedStripeCard.json"),
				z = a("./src/graphql/operations/UserSavedStripeCards.json"),
				P = a("./src/lib/makeGqlRequest/index.ts");
			const A = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				T = e => e.map(e => e.message).join(" : "),
				S = (e, t, a) => async (c, r, s) => {
					let {
						gqlContext: l
					} = s;
					const i = o()(),
						d = await ((e, t, a, n, c) => {
							const r = new E.a(a.pricePackages[0].price).multipliedBy(n).toFixed();
							return Object(P.a)(e, Object.assign(Object.assign({}, w), {
								variables: {
									input: Object.assign({
										nonce: t,
										productId: a.id,
										productVersion: a.version,
										pricePackageId: a.pricePackages[0].id,
										currency: a.pricePackages[0].currency,
										price: r,
										productsCount: n.toString()
									}, c)
								}
							}))
						})(l(), i, e, t, a);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: a
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(T(t));
						if (a) return a.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, D = (e, t, a, c, r) => async (s, l, i) => {
					let {
						gqlContext: d
					} = i;
					const u = l(),
						m = () => s(Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let b, f, j = "";
					try {
						j = await s(S(t, r, {
							powerUps: {
								subredditId: a,
								isAnonymous: c
							}
						}))
					} catch (x) {
						return p.c.captureException(x), void(x.message && s(Object(h.stripeApiError)(x.message)))
					}
					s(Object(h.stripeTokenPending)());
					const O = Object(v.w)(u);
					if (O || (b = await s(Object(h.validateAndCreateStripeToken)(e)), f = Object(v.t)(u), b)) try {
						const e = o()(),
							t = O || f ? b && f ? ((e, t, a, n) => Object(P.a)(e, Object.assign(Object.assign({}, N), {
								variables: {
									nonce: t,
									orderId: a,
									token: n
								}
							})))(d(), e, j, b.id) : O ? ((e, t, a, n) => Object(P.a)(e, Object.assign(Object.assign({}, k), {
								variables: {
									nonce: t,
									orderId: a,
									cardId: n
								}
							})))(d(), e, j, O) : null : ((e, t, a, n) => Object(P.a)(e, Object.assign(Object.assign({}, _), {
								variables: {
									nonce: t,
									orderId: a,
									token: n
								}
							})))(d(), e, j, b.id),
							n = await t;
						if (!n || !n.ok) return void m(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void s(Object(h.stripeApiError)(T(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void m();
							const t = Object(g.i)(l());
							t && s(Y({
								subredditId: a,
								powerupsCount: r,
								user: t,
								isAnonymous: c
							}))
						}
					} catch (x) {
						p.c.captureException(x), m()
					}
				}, L = (e, t, a, n) => async (c, r, s) => {
					let {
						gqlContext: i
					} = s, d = "";
					try {
						d = await c(S(e, n, {
							powerUps: {
								subredditId: t,
								isAnonymous: a
							}
						}))
					} catch (b) {
						return p.c.captureException(b), b.message && c(Object(h.paypalApiError)(b.message)), null
					}
					const m = l.a.redditUrl;
					try {
						const e = Object(u.a)("".concat(m, "/framedModal/paypal-finish"), {
								_o: m,
								r: t,
								o: d,
								s: !0
							}),
							s = Object(u.a)("".concat(m, "/framedModal/paypal-finish"), {
								_o: m,
								r: t,
								o: d
							}),
							l = o()(),
							p = await ((e, t, a, n, c) => Object(P.a)(e, Object.assign(Object.assign({}, M), {
								variables: {
									nonce: t,
									orderId: a,
									successUrl: n,
									cancelUrl: c
								}
							})))(i(), l, d, e, s);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return c(Object(h.paypalApiError)(T(e.errors))), null;
							const s = Object(g.i)(r());
							if (e.ok) {
								const {
									status: r
								} = e.payment;
								if ("ACTION_REQUIRED" === r) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === r && s) return c(Y({
									subredditId: t,
									powerupsCount: n,
									user: s,
									isAnonymous: a
								})), null
							}
						}
					} catch (b) {
						p.c.captureException(b)
					}
					return c(Object(h.paypalApiError)(A())), null
				}, B = (e, t) => async (a, n, c) => {
					let {
						gqlContext: r
					} = c;
					try {
						const n = o()(),
							c = await ((e, t, a, n) => Object(P.a)(e, Object.assign(Object.assign({}, y), {
								variables: {
									nonce: t,
									paymentId: a,
									token: n
								}
							})))(r(), n, e, t);
						if (c && c.ok) {
							const e = c.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(h.paypalApiError)(T(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						p.c.captureException(s)
					}
					return a(Object(h.paypalApiError)(A())), !1
				}, F = () => async (e, t, a) => {
					let {
						gqlContext: c
					} = a;
					e(Object(h.savedCardsPending)());
					try {
						const t = await (e => Object(P.a)(e, Object.assign(Object.assign({}, z), {
							variables: {}
						})))(c());
						if (t.ok) {
							const a = t.body;
							a.errors && a.errors.length && e(Object(h.stripeApiError)(a.errors[0].message));
							const {
								savedStripeCards: n
							} = a.data.identity, c = n.map(e => r()(Object.assign(Object.assign({}, e), {
								cardId: e.id
							}), "id"));
							e(Object(h.savedCardsSuccess)(c)), c[0] && e(Object(h.selectSavedCard)(c[0].cardId))
						} else e(Object(h.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (s) {
						p.c.captureException(s), e(Object(h.savedCardsSuccess)([]))
					}
				}, V = e => async (t, a, n) => {
					let {
						gqlContext: c
					} = n;
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(P.a)(e, Object.assign(Object.assign({}, I), {
							variables: {
								cardId: t
							}
						})))(c(), e);
						if (t.error) throw new Error(t.error.type);
						const a = t.body,
							{
								errors: n
							} = a.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(T(n))
					} catch (r) {
						p.c.captureException(r)
					}
				}, q = Object(m.a)(f.P), G = Object(m.a)(f.Q), R = Object(m.a)(f.R), U = e => async (t, a) => {
					await t(q(e)), t(Object(d.e)({
						kind: b.b.Error,
						duration: d.a,
						text: e
					}))
				}, H = (e, t, a) => async (c, r, s) => {
					let {
						gqlContext: o
					} = s;
					c(G({
						subredditId: t,
						allocatedAt: a
					}));
					try {
						const r = await ((e, t) => Object(P.a)(e, Object.assign(Object.assign({}, C), {
							variables: {
								orderId: t
							}
						})))(o(), e);
						if (r.ok) {
							const e = r.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void c(U(n[0].message));
							c(R({
								subredditId: t,
								allocatedAt: a
							}))
						} else c(U(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (l) {
						p.c.captureException(l), c(U(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, W = Object(m.a)(f.T), Y = e => async (t, a) => {
					t(W(e)), t(Object(j.f)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(i.a.ECON_POWERUPS_PURCHASE)), t(Object(d.e)({
						kind: b.b.SuccessCommunityGreen,
						duration: d.a,
						text: n.fbt._({
							"*": "Purchase of {number of Powerups} Powerups is complete.",
							_1: "Purchase of 1 Powerup is complete."
						}, [n.fbt._plural(e.powerupsCount, "number of Powerups")], {
							hk: "28cBuw"
						})
					}))
				}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return j
			})), a.d(t, "b", (function() {
				return O
			})), a.d(t, "c", (function() {
				return E
			})), a.d(t, "f", (function() {
				return N
			})), a.d(t, "g", (function() {
				return A
			})), a.d(t, "d", (function() {
				return T
			})), a.d(t, "e", (function() {
				return S
			})), a.d(t, "h", (function() {
				return D
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./src/lib/makeActionCreator/index.ts"),
				r = a("./src/lib/prettyPrintNumber/index.ts"),
				s = a("./src/reddit/actions/modal.ts"),
				o = a("./src/reddit/actions/post.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				i = a("./src/reddit/endpoints/governance/poll.ts"),
				d = a("./src/config.ts"),
				u = a("./src/reddit/endpoints/governance/requester.ts");
			var m = a("./src/reddit/endpoints/governance/wallet.ts"),
				p = a("./src/reddit/models/Poll/index.ts"),
				b = a("./src/reddit/models/Toast/index.ts"),
				f = a("./src/reddit/models/Vote/index.ts"),
				h = a("./src/reddit/selectors/gov.ts"),
				v = a("./src/reddit/actions/governance/constants.ts"),
				g = a("./src/reddit/actions/governance/errorToast.ts");
			const j = Object(c.a)(v.b),
				O = Object(c.a)(v.c),
				x = Object(c.a)(v.e),
				E = (Object(c.a)(v.f), Object(c.a)(v.g), Object(c.a)(v.h)),
				C = Object(c.a)(v.i),
				y = Object(c.a)(v.j),
				w = Object(c.a)(v.k),
				M = Object(c.a)(v.q),
				N = Object(c.a)(v.r),
				_ = Object(c.a)(v.s),
				k = Object(c.a)(v.t),
				I = Object(c.a)(v.u),
				z = Object(c.a)(v.v),
				P = Object(c.a)(v.w),
				A = Object(c.a)(v.x),
				T = (e, t) => async (a, n, c) => {
					let r, {
							apiContext: s,
							gqlContext: l
						} = c,
						d = n().polls.models[e];
					if (a(y({
							pollId: e
						})), (r = d.type === p.a.GA ? await Object(i.c)(l(), e, t) : await Object(i.b)(s(), d.subredditId, e, t)).ok) {
						if (d.type === p.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							a(x({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else a(w(r.body));
						const c = n();
						if ((d = c.polls.models[e]) && Object(p.d)(d)) {
							const {
								postId: e
							} = d, t = c.posts.models[e];
							t && t.voteState === f.a.notVoted && a(Object(o.S)(e))
						}
					} else a(C({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(g.a)(a, r.error || r.errors[0].messsage)
				}, S = (e, t) => async (a, c, o) => {
					let {
						apiContext: i
					} = o;
					a(_());
					const m = c().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(u.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(i(), Object.assign(Object.assign({}, e), {
						contentId: m
					}));
					p.ok ? (a(k(Object.assign(Object.assign({}, p.body), {
						subredditId: e.subredditId
					}))), a(Object(l.e)({
						kind: b.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(r.a)(e.amount)), n.fbt._param("tokenName", Object(h.p)(c(), {
							subredditId: e.subredditId
						})), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && a(Object(s.f)())) : (a(M({
						error: p.error
					})), Object(g.a)(a, p.error))
				}, D = e => async (t, a, n) => {
					let {
						apiContext: c
					} = n;
					t(z());
					const r = await Object(m.a)(c(), e);
					r.ok ? t(P(r.body)) : t(I({
						error: r.error
					}))
				}
		},
		"./src/reddit/actions/util/pollActionForSuccess.ts": function(e, t, a) {
			"use strict";

			function n(e, t) {
				let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e4,
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3e5;
				return async (c, r, s) => new Promise((o, l) => {
					const i = Date.now() + n,
						d = () => {
							l(new Error("Timed out while polling for success"))
						},
						u = async () => {
							if (Date.now() > i) return d();
							const n = Date.now();
							await e(c, r, s);
							const m = await t(r);
							if (m) o();
							else if (!1 === m) l();
							else {
								Date.now() + Math.max(a - (Date.now() - n), 0) < i ? setTimeout(u, a) : d()
							}
						};
					setTimeout(u, a)
				})
			}
			a.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/actions/modal.ts"),
				l = a("./src/reddit/icons/svgs/Close/index.tsx"),
				i = a("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = a.n(i);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: a
				} = t;
				return {
					onClose: () => {
						e(Object(o.f)()), a && a()
					}
				}
			})((function(e) {
				return c.a.createElement(l.a, {
					className: Object(s.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/components/Governance/ModalClose/index.tsx"),
				o = a("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				l = a.n(o);

			function i(e) {
				return c.a.createElement("div", {
					className: Object(r.a)(l.a.container, e.className, {
						[l.a.coloredContainer]: e.colored
					})
				}, c.a.createElement("div", {
					className: l.a.title
				}, e.children), c.a.createElement(s.a, {
					className: l.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				o = a("./src/config.ts"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/selectors/gov.ts"),
				d = a("./src/reddit/components/Governance/Token/index.m.less"),
				u = a.n(d);
			const m = Object(s.c)({
				tokenSymbol: i.q
			});
			t.a = Object(r.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					a = "".concat(o.a.assetPath, "/").concat(t);
				if (e.grey && a.endsWith(".svg")) {
					const t = "url(".concat(a, ") center/cover");
					return c.a.createElement("div", {
						className: Object(l.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return c.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/prettyPrintNumber/index.ts"),
				i = a("./src/reddit/components/Governance/Token/index.tsx"),
				d = a("./src/reddit/helpers/governance/tokens.ts"),
				u = a("./src/reddit/selectors/gov.ts"),
				m = a("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = a.n(m);
			const b = Object(s.c)({
				tokenDisplayConversion: u.o
			});
			t.a = Object(r.b)(b)((function(e) {
				return c.a.createElement("div", {
					className: Object(o.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, c.a.createElement(i.a, {
					className: Object(o.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(l.a)(Object(d.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/ApprovalOverview.m.less": function(e, t, a) {
			e.exports = {
				container: "iHeGfSMD047UMJ8IkWz2u",
				conversion: "a3g17spBhah_YyJI7mc-3",
				pointsAmount: "_11KtSJz2h4aka6VsafuQ3R",
				pointsInput: "V9clGzJDp6zYgU31fMdBz",
				pointsInputIcon: "_3BGDBp-UP3YUqQZnLXxUqy",
				chevron: "_1Gc-uhs0m7L6lbZUByd5TA",
				coinsAmount: "_387Fx7vMvuisP3VY384Onr",
				coinIcon: "_6bSlw5Jt7TtI9ZH51p1sk",
				loadingIcon: "_14Bkd_7tmZru1x5Xz8FCgw",
				coinsLabel: "bDx6cRzwmqKPpCa4NEz8N",
				currentBalance: "_185uONHEsRz3nYaB_8uwKz",
				disclaimer: "_3rU3k8pLvpOtP10J2qNuW0",
				errorLoading: "tjsA8HZ0ZJPI4IgDJfFN",
				currentBalanceAmount: "_2G_-P1a37gBd8pQ4_yOGmC"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/IntroModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3va4DfMbgi39K8v8e7XzBL",
				sectionsContainer: "_3IYdgzvoeBckczOsjIrvUV",
				section: "_3AYd7ttBeoicIbUPBOr6Gu",
				sectionImage: "_3kWSfcBjwEMZSnwmZAky3V",
				sectionContent: "_3X_QYUSj-aUvtllgIfMT5X",
				sectionHeader: "_3Y2cSOzDWO_1AmPu4f-a-7",
				sectionDescription: "_2HbxTBRRFyP2zedS6IGQZ0",
				footer: "_1iq-vJGkFodfb04oEf1g_W"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				s = a("./src/higherOrderComponents/asModal/index.tsx"),
				o = a("./node_modules/fbt/lib/FbtPublic.js"),
				l = a("./src/lib/makeActionCreator/index.ts"),
				i = a("./src/reddit/actions/toaster.ts"),
				d = a("./src/reddit/models/Toast/index.ts"),
				u = a("./src/graphql/operations/ProductOffers.json"),
				m = a("./src/lib/makeGqlRequest/index.ts");
			var p = a("./src/reddit/selectors/gold/productOffers.ts"),
				b = a("./src/reddit/actions/gold/constants.ts");
			const f = Object(l.a)(b.Z),
				h = Object(l.a)(b.Y),
				v = Object(l.a)(b.X),
				g = e => async (t, a) => {
					await t(v(e)), t(Object(i.e)({
						kind: d.b.Error,
						duration: i.a,
						text: e
					}))
				}, j = (e, t) => async (a, n, c) => {
					let {
						gqlContext: r
					} = c;
					const s = n();
					if (!Object(p.c)(s, {
							subredditId: e,
							type: t
						})) {
						a(f());
						try {
							const n = await ((e, t, a, n) => Object(m.a)(e, Object.assign(Object.assign({}, u), {
								variables: {
									subredditId: t,
									types: a,
									includeGlobal: n
								}
							})))(r(), e, [t], !0);
							if (n.ok) {
								const t = n.body;
								if (t.errors && t.errors.length) return void(await a(g(t.errors[0].message)));
								const c = t.data.subredditInfoById.productOffers ? t.data.subredditInfoById.productOffers.offers : [];
								return void(await a(h({
									productOffers: c || [],
									subredditId: e
								})))
							}
						} catch (l) {
							await a(g(o.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							})))
						}
					}
				};
			var O = a("./src/reddit/contexts/PageLayer/index.tsx"),
				x = a("./src/reddit/hooks/useThunkDispatch.ts"),
				E = a("./src/reddit/models/Gold/ProductOffer.ts"),
				C = a("./src/reddit/selectors/gov.ts"),
				y = a("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				w = a("./src/reddit/controls/Button/index.tsx");
			const M = () => c.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					d: "M12.7 27.6c6.7 0 12-1.6 12-3.6v16.1c0 2-5.3 3.6-12 3.6-6.6 0-12-1.6-12-3.6v-16c0 1.9 5.4 3.5 12 3.5z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M21.9 26.3a29 29 0 01-8.6 1.3c.2 3.5.3 10.8.2 16 3 0 5.8-.4 7.8-1 .3-4.6 0-11.6.6-16.3z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M2.8 30.1c-.1-.7-.2-1.5.3-2 .6-.3 1.4 0 1.8.5 1.8 1.7 1.3 2.6 1.4 5v5.1c0 1.4-.6 1.8-1.7.6C3.4 38 3.3 37 3.2 35.6c-.3-2 0-3.6-.4-5.5z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M24.7 24c0 2-5.3 3.6-12 3.6-6.6 0-12-1.6-12-3.6 0-1.9 5.4-3.5 12-3.5 6.7 0 12 1.6 12 3.5z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M24.7 24.3c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.2.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2zM24.7 32.2c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.2.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M24.7 24.3l-.4-.6-1.2-.8c-1.2-.5-2.8-1-4.7-1.2a35.2 35.2 0 00-13 .8c-1 .3-2 .7-2.8 1.2-.4.2-.7.5-.7.6V29l.2 6.8v4.4l.7.4 2.3.8 2.6.5a37.8 37.8 0 0010.5 0c1.6-.2 3.3-.6 4.5-1.2l.4-.2.2-.2.1-.1v-.3l.2-2.5.2-4.7.5-8.3a60 60 0 012 15.4l-.1.4a3 3 0 01-.1.6l-.2.6-.3.4-.7.7a4 4 0 01-.6.4l-.6.3-2.4.7-4.5.6a45 45 0 01-12.5-1.1l-1.9-.7a5 5 0 01-1.7-1.3 2 2 0 01-.5-1.2v-1-1.8-3.6l-.1-7V24.2l.1-.6c0-.2.2-.4.3-.5.5-.6 1-1 1.5-1.2l1.6-.7a34.3 34.3 0 0111.8-1.1c1.7.2 4 .6 6 1.4 1 .4 2 .9 2.5 1.4.3.3.6.5.7.8l.1.6z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M12.7 44.4C6.4 44.4 0 42.9 0 40.1V24.3c0-2.8 6.4-4.2 12.7-4.2 6.4 0 12.8 1.4 12.8 4.2v15.8c0 2.8-6.4 4.3-12.8 4.3zm0-22.8c-7.2 0-11.2 1.8-11.2 2.7v15.8c0 1 4 2.8 11.2 2.8 7.3 0 11.3-1.8 11.3-2.8V24.3c0-.9-4-2.7-11.3-2.7z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M34.8 7.8c6.6 0 12-1.6 12-3.5v39.4c0 2-5.4 3.6-12 3.6s-12-1.6-12-3.6V4.3c0 2 5.4 3.5 12 3.5z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M44 6.6a29 29 0 01-8.6 1.2c-.4 13 .6 26.5.2 39.4 3 0 5.8-.4 7.8-1 1-13.2-1.3-26.4.5-39.6z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M24.6 10.1c-.1-.7-.2-1.5.4-2 .5-.3 1.3 0 1.8.5 1.7 1.7 1.6 4.4 1.5 6.9-.3 4.5-.5 9-.4 13.6 0 2.2.7 11.1.5 13.2-.1 1.4-.6 1.8-1.7.6-1.2-1.3-1.3-3.5-1.3-5l-.1-13.2c0-4.9.3-9.8-.7-14.6z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M46.8 4.3c0 2-5.4 3.5-12 3.5s-12-1.6-12-3.5c0-2 5.4-3.5 12-3.5s12 1.5 12 3.5z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M46.8 4.3c0 .6-.3 1.1-.7 1.5l-1.5.9c-1 .5-2 .8-3.2 1.1A29.2 29.2 0 0125 6.7c-.5-.2-1-.6-1.4-1-.4-.3-.8-.8-.8-1.4.1.5.6.9 1 1.1l1.5.6 3.1.7a48.7 48.7 0 0016-.7c.5-.1 1-.3 1.4-.6.5-.2 1-.6 1-1.1zM46.8 12.2c0 .5-.3 1-.7 1.5l-1.5.9c-1 .5-2 .8-3.2 1.1A29.2 29.2 0 0125 14.6l-1.4-1c-.4-.3-.8-.9-.8-1.4.1.5.6.9 1 1.1l1.5.6 3.1.7a48.7 48.7 0 0016-.7c.5-.1 1-.3 1.4-.6.5-.2 1-.6 1-1.1zM46.8 20c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.4.1.5.6.9 1 1.1l1.5.6a48.7 48.7 0 0019 0c.6-.1 1-.3 1.5-.6.5-.2 1-.6 1-1.1zM46.8 28c0 .5-.3 1-.7 1.4l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.1.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2zM46.8 35.8c0 .6-.3 1.2-.7 1.5l-1.5 1a29.2 29.2 0 01-19.6 0l-1.4-1c-.4-.3-.8-.9-.8-1.5.1.6.6 1 1 1.2l1.5.6a48.7 48.7 0 0019 0l1.5-.6c.5-.3 1-.6 1-1.2z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M46.8 4.3l-.2-.4-.1-.2-.3-.3c-.5-.4-1.3-.8-2.2-1A35.5 35.5 0 0027.9 2c-1.4.2-2.7.6-3.6 1.2-.4.3-.8.7-.8 1V4.9a2901 2901 0 01.6 21.3v10.6l.1 5.3v1.6c0-.1 0 0 0 0 0-.1 0 0 0 0 .3.2 1 .6 1.7.8 1.2.5 2.6.7 4 1A36.3 36.3 0 0044 44.3a4.1 4.1 0 001.4-.8v.1-1-2.2l.1-8.2c.2-10.6.5-20.3.9-28a163.1 163.1 0 011.4 39v.4l-.2.7-.3.6-.4.4c-.6.5-1.1.8-1.7 1a16 16 0 01-3.3 1 36 36 0 01-15.8-.7c-1-.3-2-.6-3-1.3a3 3 0 01-.5-.7l-.3-.5v-.5-1.5-2.9-5.7L22 12.7V7.9a39290.5 39290.5 0 000-3.5V4c0-.2 0-.4.2-.5l.2-.4.2-.3c.7-.7 1.5-1 2.2-1.4l2.3-.7a33.5 33.5 0 0114 .1c1.6.4 3 1 4 1.5 1.2.6 1.8 1.5 1.7 2z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M34.8 48c-6.3 0-12.7-1.5-12.7-4.3V4.3C22 1.5 28.5 0 34.8 0c6.4 0 12.8 1.5 12.8 4.3v39.4c0 2.8-6.4 4.3-12.8 4.3zm0-46.5c-7.3 0-11.2 1.8-11.2 2.8v39.4c0 1 4 2.8 11.2 2.8 7.3 0 11.3-1.8 11.3-2.8V4.3c0-1-4-2.8-11.3-2.8z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M22.6 47.5c5.6 0 10.1-5.2 10.1-11.6 0-6.4-4.5-11.6-10-11.6-5.7 0-10.2 5.2-10.2 11.6 0 6.4 4.5 11.6 10.1 11.6z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M28.5 30.2c.3.4.7.8 1.2 1 .5.2 1.2-.1 1.2-.7 0-.3-.2-.5-.3-.7-.7-1.1-2.3-3.5-3.8-3.5-1.7.1 1.3 3.4 1.7 3.9z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M16.3 39.8l.2 1.6c0 1 .2 2.1.6 3.3.1.6.3 1.3.7 1.8l.6.5.3.2h3.6c1.4 0 2.8-.4 4-1a10 10 0 003.3-2.9 12.2 12.2 0 000-14.7 9.2 9.2 0 00-2.7-2.1L26 26l-.7-.3a9.7 9.7 0 00-3.3-.4h-1.7l-.8-.1h-.4c-.3.2-.6.7-.7 1.1-.4.9-.6 1.8-.8 2.7l-.3 2.7a14.6 14.6 0 01.2-6l.4-.8.7-.7.6-.2h3.2c2.2 0 4.3.7 6 2 1.6 1.2 2.8 2.8 3.5 4.6a13.9 13.9 0 010 10.4 11 11 0 01-6.5 6.4 9 9 0 01-3.2.4 4046.6 4046.6 0 01-4-.2 2 2 0 01-.9-.7c-.4-.5-.6-1.2-.8-2l-.3-2.1v-3z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M19.5 47.5c5.5 0 10-5.2 10-11.6 0-6.4-4.5-11.6-10-11.6-5.6 0-10.2 5.2-10.2 11.6 0 6.4 4.6 11.6 10.2 11.6z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M24.5 46l.5-.5.4-.3.5-.6a11.8 11.8 0 003.4-7.6c0-1.5 0-2.8-.3-3.7-.4-1.6-1.1-3.2-2.1-4.6a10 10 0 00-4-3.2 8.5 8.5 0 00-9.5 2c-2.1 2-3.3 4.8-3.4 7.7A12.6 12.6 0 0012 43c.8 1 1.7 2 2.8 2.7a9 9 0 006.7 1.3c1-.3 2-.7 2.8-1.2-.7.6-1.6 1.2-2.7 1.6-1.2.4-2.5.6-3.8.4a9.2 9.2 0 01-5.6-2.8 12.8 12.8 0 01-3.1-6.8 13.4 13.4 0 01.7-6.9l.3-.7.4-.8.4-.7.2-.3.2-.4c.7-.9 1.4-1.6 2.3-2.3l.6-.4.7-.4.6-.4.4-.1.4-.2.7-.2.7-.2h.8l.7-.1c1 0 2 .1 2.9.4l1.3.5.6.3.6.4c.2 0 .4.2.6.4l.5.4 1 1 .4.5.4.5.4.6.3.5a12.9 12.9 0 011.2 9.5l-.3 1-.3.7-.2.6-.7 1.1-.4.6c0 .2-.2.3-.4.5-.5.7-1 1.2-1.6 1.6l-.7.5-.4.3z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M19.8 42.7c-3.3 0-6-3-6-6.8 0-3.7 2.7-6.8 6-6.8 1 0 2 .3 2.8.7.5.4.7 1.1.4 1.7-.2.6-.9.9-1.4.5-.6-.3-1.2-.4-1.8-.4-2 0-3.8 2-3.8 4.3 0 2.4 1.7 4.3 3.8 4.3 1.4 0 2.6-.7 3.3-2 .3-.6 1-.8 1.5-.4.5.3.7 1 .3 1.7-1 2-3 3.2-5 3.2z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M20.8 40.6c1.6-.2 3-1.4 4-2.7l-.2-.1c-.5-.4-1.2-.2-1.5.4-.7 1.3-2 2-3.3 2-1.5 0-2.9-1-3.5-2.5.8 2 2.7 3.2 4.5 2.9z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M16.2 40.3a6.7 6.7 0 01.2-8 4.8 4.8 0 016.6-.7c.3-.7 0-1.4-.4-1.8-.9-.4-1.8-.7-2.8-.7-3.3 0-6 3-6 6.8s2.7 6.8 6 6.8c1 0 2.1-.3 3-.9-2.5 1.3-5.1.5-6.6-1.5z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M12 30.5c-.9 1.7-1.3 4-1.3 5.9 0 2.8 2.2 9 8 10 .4.1.8-.1.8-.5l-.1-.3c-.7-1-2.2-1.1-3.3-1.8-2-1.3-3-2.8-3.6-4.8-.7-2.2-.8-4.6 0-6.7a7.5 7.5 0 015.1-4.4c.9-.2 1.9-.2 2.5-.8.7-.7-.4-1.2-1.2-1.2-1.8 0-5 1-6.9 4.6z",
					fill: "#fff"
				})),
				N = () => c.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					d: "M44.35 29.16V43.3l-17.62 3.77V32.93l17.62-3.77z",
					fill: "#D0DDDF"
				}), c.a.createElement("path", {
					d: "M26.73 32.93v14.15L3.9 42.65V28.5l10.05-12.68 12.8 17.11z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M8.39 21.76a55.6 55.6 0 01-3.25 4.32c-.5.59-1.04 1.17-1.35 1.87-.32.7-.37 2.28.07 2.9.72-.44 1.11-1.4 1.63-2.07.64-.82 1.53-1.75 2.2-2.54 1.83-2.18 3.58-4.67 5.4-6.85.23-.26.54-.53.88-.57.37-.05.67.34.77.48 2.99 4.2 5.96 7.9 8.98 11.56a66.11 66.11 0 003.01 3.41c.4-.58.44-1.37.24-2.06s-.58-1.3-.97-1.9l-3.96-6.17a46.92 46.92 0 00-2.39-3.49 46.77 46.77 0 00-3.39-3.76c-1.42-1.47-2.62-2.57-4.05-.57-1.29 1.8-2.55 3.63-3.82 5.44z",
					fill: "#D0DDDF"
				}), c.a.createElement("path", {
					d: "M13.55 9.43L30.9 5.72a2.1 2.1 0 012.12.81L46.35 24.7c.71.96.55 2.32-.36 3.08l-1.64 1.38-17.62 3.77 1.64-1.37a2.28 2.28 0 00.36-3.09L15.18 10.04a1.58 1.58 0 00-1.63-.61z",
					fill: "#EA0027"
				}), c.a.createElement("path", {
					d: "M41.72 27.4c-1.9.4-3.81.76-5.73 1.1l-1.89.33-3.2.54c-.57.1-1.16.2-1.68.46a6.2 6.2 0 00-2.05 1.99c-.1.13-.2.29-.15.45.07.24.4.23.65.18 4.6-.98 9.18-2.09 13.73-3.33 1.17-.32 3.23-.77 3.9-1.95.53-.94-.45-.65-.98-.45-.84.31-1.72.5-2.6.68z",
					fill: "#A1000A"
				}), c.a.createElement("path", {
					d: "M28.73 28.47c.71.97.55 2.32-.36 3.09l-1.64 1.37-12.8-17.11L3.9 28.5l-1.6-1.87a2.6 2.6 0 01-.06-3.28L12.65 10a1.58 1.58 0 012.53.04l13.55 18.43z",
					fill: "#EA0027"
				}), c.a.createElement("path", {
					d: "M2.22 23.34c.24-.55 3.56-4.9 7.41-9.93l1.47-1.91.74-.97.37-.48.19-.24a1.93 1.93 0 01.87-.64c.25-.08.42-.1.63-.15l1.17-.26 2.29-.51c3-.67 5.7-1.28 7.64-1.74l4.22-.99 1.07-.24.55-.13a2.63 2.63 0 012.56.9l.1.13.1.12.16.22 5.5 7.3 5.55 7.44 1.39 1.86.69.93a2.99 2.99 0 01.65 1.34 3.11 3.11 0 01-.87 2.9l-.14.13-.11.1-.22.18-.44.37-.43.37-.12.1-.02.02.05 8.1.02 6.39-9.68 2.08L26.74 48l-12.21-2.46-11.3-2.34.06-4.63.06-3.67.14-6.25-1.05-1.28c-.18-.23-.33-.4-.51-.65a2.9 2.9 0 01.1-3.54 2.8 2.8 0 00-.14 2.8c.23.47.63.8 1 1.19l.58.59.64.66.2 3.62.18 3.66.14 3.59L4.7 41l.02.83v.05l.01.01v.02l.02.03h.04l.01-.01h.06l.26.05 1 .18 1.84.33c1.14.21 2.11.4 2.87.57l8.3 1.82 7.6 1.63 9.01-1.82 8.25-1.7.02-14 1.48-1.25.32-.28a1.85 1.85 0 00.57-.93 1.9 1.9 0 00-.17-1.4c-.11-.2-.3-.44-.47-.67l-.5-.68-3.99-5.37-7.5-10.1-.9-1.2-.22-.3a1.66 1.66 0 00-.66-.52 1.56 1.56 0 00-.83-.12L31 6.2l-.18.04-1.42.31-5.5 1.2-10.36 2.17c-.12.04-.24.1-.34.18-.11.08-.18.18-.32.35l-.76.95-1.65 2.03-3.44 4.17a712.42 712.42 0 01-4.81 5.74z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M26.74 47.79l-.14-.03-23.4-4.54V28.76l-1.42-1.68a3.31 3.31 0 01-.09-4.16L12.11 9.57c.33-.41.79-.7 1.3-.82l17.35-3.71c1.06-.22 2.16.2 2.8 1.08L46.9 24.29a2.98 2.98 0 01-.47 4.03l-1.4 1.16v14.39l-18.3 3.92zM4.58 42.08l22.14 4.3 16.95-3.63V28.83l1.88-1.58c.63-.53.75-1.47.26-2.14L32.46 6.95c-.33-.45-.9-.67-1.43-.55L13.7 10.1a.88.88 0 00-.51.33L2.77 23.78c-.55.7-.53 1.71.05 2.4l1.76 2.06v13.84z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M19.17 38.34a3.95 3.95 0 01-2.35 2.42c-1.17.43-2.58.29-3.65-.25l-.4-.2-.36-.24c-.23-.17-.47-.33-.66-.53-.2-.2-.4-.39-.58-.6-.16-.21-.31-.43-.46-.66a8.9 8.9 0 01-.68-1.44 6.35 6.35 0 01-.28-1.61l.15-.1.89 1.08c.32.34.6.72.95 1.02.64.67 1.4 1.22 2.21 1.61.81.41 1.73.6 2.62.46.9-.16 1.73-.58 2.5-1.1l.1.14z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M18.11 36.14c.44.35.73.65.99.9l.66.67.61.65c.24.25.54.52.92.92-.42.36-.93.48-1.45.43a2.33 2.33 0 01-1.4-.71c-.37-.4-.6-.9-.66-1.39-.06-.5.02-1 .33-1.47zM6.7 31.23c.05-.8.31-1.54.85-2.2.25-.33.63-.61 1.09-.82a2.44 2.44 0 011.55-.07c.26.06.45.2.68.3.18.13.37.26.53.42a4.38 4.38 0 011.32 3.22c-.67-.44-1.19-.92-1.7-1.33a4.12 4.12 0 00-1.46-.87h-.12c-.09-.04-.17.01-.27 0-.2.05-.44.1-.7.26-.52.27-1.08.7-1.77 1.1zM17.37 33.14c.05-.8.32-1.54.85-2.2.26-.33.64-.62 1.1-.82a2.44 2.44 0 011.54-.07c.26.06.45.19.68.3.18.13.38.26.53.4a4.38 4.38 0 011.32 3.23c-.67-.44-1.18-.92-1.69-1.33a4.11 4.11 0 00-1.47-.87h-.12c-.08-.03-.17.01-.27 0-.2.05-.44.11-.7.26-.52.27-1.08.7-1.77 1.1zM40.82 18.12l-3.9-5.23-16.81 3.6 3.9 5.23 16.8-3.6z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M29.38 22.86c4.52 0 8.18-5 8.18-11.17S33.9.52 29.38.52s-8.18 5-8.18 11.17 3.66 11.17 8.18 11.17z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M24.7 6.5c-.27.44-.57.9-1.04 1.11-.48.21-1.17.01-1.25-.5-.04-.27.1-.53.22-.77.6-1.11 1.85-3.6 3.35-3.72 1.67-.13-.97 3.38-1.27 3.88z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M34.5 15.46c.12.16.22 1.35.12 2.94-.06.79-.15 1.68-.38 2.59-.12.45-.27.9-.53 1.34a2.1 2.1 0 01-.54.62 1.4 1.4 0 01-.82.29c-1.08.05-2.01.1-2.7.16a6.23 6.23 0 01-2.09-.12 7.2 7.2 0 01-2.03-.81 9.84 9.84 0 01-3.16-3.1 14.78 14.78 0 01-2.2-8.4 14.29 14.29 0 012.05-7.06 8.88 8.88 0 012.61-2.66 8.13 8.13 0 013.4-1.2C28.8-.02 29.4 0 29.87.02l1.5.06.36.02c.07 0 .2 0 .3.02l.3.06c.4.13.72.42.95.77.35.56.47 1.07.58 1.56.2.98.25 1.89.27 2.75.01.87-.02 1.68-.09 2.45-.23-.69-.47-1.5-.74-2.38-.27-.86-.55-1.78-.9-2.56a4.5 4.5 0 00-.43-.73l-.1-.1c-.04 0-.07 0-.1.02-.01 0 .01.01-.04.02l-.3.02c-.79.06-1.45.06-1.91.02a5.96 5.96 0 00-4.27 1.12 8.2 8.2 0 00-2.66 3.6 13.5 13.5 0 00-.54 8.43c.67 2.61 2.13 4.83 4.02 6.07.95.62 1.99.96 3 1l3.25-.04a.5.5 0 00.36-.15c.13-.12.25-.3.35-.48.42-.8.78-2.2 1.02-3.43s.38-2.32.43-2.68z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M32.65 23.23c4.52 0 8.18-5 8.18-11.16C40.83 5.9 37.17.9 32.65.9s-8.18 5-8.18 11.17c0 6.16 3.66 11.16 8.18 11.16z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M28.55 21.75c-.12-.04-.7-.38-1.37-1.1-.66-.72-1.4-1.8-1.95-3.09-.55-1.28-.9-2.75-1.05-4.1-.14-1.36-.12-2.61-.02-3.5.14-1.57.55-3.18 1.29-4.71a10 10 0 013.37-3.95c.74-.51 1.6-.85 2.5-1.06.9-.22 1.85-.18 2.74-.02.92.16 1.75.56 2.52 1.01.36.25.74.5 1.06.8.16.14.33.27.48.43l.45.47c1 1.12 1.74 2.44 2.24 3.8.51 1.38.8 2.81.88 4.23.18 2.83-.4 5.65-1.67 7.98a10.62 10.62 0 01-2.45 3.02c-.97.82-2.1 1.4-3.27 1.65a6.35 6.35 0 01-3.34-.17 7.47 7.47 0 01-2.56-1.5c.77.35 1.72.72 2.74.83 1.03.12 2.1-.04 3.02-.42.93-.38 1.71-.97 2.32-1.55l.43-.43.36-.42c.24-.25.4-.51.57-.7a11.8 11.8 0 002.32-5.6c.14-1 .2-2 .12-2.98-.01-.5-.1-.97-.17-1.46-.1-.47-.18-.95-.33-1.4-.26-.92-.64-1.8-1.1-2.59A8.91 8.91 0 0037 3.1a6.23 6.23 0 00-4.57-1.81 6.4 6.4 0 00-4.18 1.94 10.18 10.18 0 00-2.38 3.78 15.23 15.23 0 00-.63 8.09c.23 1.19.7 2.8 1.4 4.1a10 10 0 001.1 1.66c.15.23.34.4.47.54l.33.35z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M33.13 18.62c-2.69 0-4.87-2.94-4.87-6.55 0-3.62 2.18-6.56 4.87-6.56.77 0 1.53.25 2.21.72.44.3.6 1.02.39 1.6-.23.59-.76.82-1.2.52-.43-.3-.9-.46-1.4-.46-1.71 0-3.1 1.88-3.1 4.18s1.39 4.17 3.1 4.17c1.08 0 2.07-.74 2.64-1.99.25-.56.8-.73 1.21-.39.42.34.55 1.08.3 1.64-.9 1.96-2.45 3.12-4.15 3.12z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M36.98 13.86a.69.69 0 00-.84-.06c.13.2.25.44.22.91-.04.48-.67 1.3-1.7 1.84-1.07.54-2.8.2-3.78-1.63a5.01 5.01 0 01-.85-2.85c0-2.3 1.39-4.18 3.1-4.18.5 0 .97.16 1.4.46.44.3.97.07 1.2-.52.23-.6.03-1.36-.44-1.64-.06.26-.44.41-.8.41-.94.01-1.73-.78-3.27.31-2.46 2.1-3.21 5.37-2.18 8.7.87 1.81 2.37 3.01 4.09 3.01 1.7 0 3.25-1.16 4.14-3.12.26-.56.13-1.3-.29-1.64z",
					fill: "#C08D41"
				}), c.a.createElement("path", {
					d: "M26.69 6.37c-.74 1.7-1.1 4-1.1 5.93 0 2.81 1.8 9 6.56 10.17.27.07.62-.22.6-.57 0-.1-.05-.2-.1-.3-.58-1.07-1.8-1.14-2.67-1.82-1.68-1.31-2.44-2.85-2.92-4.84-.53-2.18-.6-4.58.06-6.7.66-2.13 2.35-3.93 4.12-4.44.7-.2 1.48-.24 2-.85.59-.7-.36-1.24-.97-1.24-1.44 0-3.99.98-5.58 4.66z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M44.95 24.16l-16.56 3.17-4.38-5.61 16.8-3.6 4.14 6.04z",
					fill: "#EA0027"
				}), c.a.createElement("path", {
					d: "M23.92 21.97l-4.21-5.63 1.82-.39.1.45-1.12.24 3.6 4.82 16.3-3.5-.5-.67.37-.28.94 1.26-17.3 3.7zM3.36 28.07l10.27-12.5.33-.4.29.4 12.48 17.36-13.1-16.88.61.01-9.81 12.87-1.07-.86z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M26.72 32.89l4.37-1.13 4.38-1.08c1.46-.35 2.9-.78 4.38-1.03s2.97-.47 4.5-.54l.01.1c-1.41.56-2.86.97-4.32 1.34-1.45.39-2.95.58-4.42.86l-4.44.8-4.44.77-.02-.1z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M28.73 28.47a60.07 60.07 0 01-3.81-4.29c-.62-.73-1.2-1.48-1.79-2.23l-1.72-2.28c-1.14-1.54-2.22-3.1-3.27-4.7a59.78 59.78 0 01-2.96-4.93A59.43 59.43 0 0119 14.32c1.2 1.48 2.38 2.98 3.5 4.52l1.67 2.33c.53.79 1.09 1.57 1.6 2.37a60.42 60.42 0 012.96 4.93z",
					fill: "#F99"
				}), c.a.createElement("path", {
					d: "M41.5 38.6c-.02.42-.05.85-.27 1.2-.2.33-.54.54-.87.73a21.6 21.6 0 01-3.77 1.97c-2.46.89-5.32.93-7.32 2.62 4.51-.46 8.87-1.87 13.19-3.27a.72.72 0 00.34-.18c.12-.14.12-.36.1-.55-.19-3.18-.13-6.38.18-9.56-.45-.02-1.63-.13-1.9.3-.23.37.17 1.67.2 2.11.15 1.54.19 3.09.12 4.63z",
					fill: "#fff"
				})),
				_ = () => c.a.createElement("svg", {
					width: "48",
					height: "48",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					d: "M29.4 20.3c0-1 .1-2.2-.1-3.3-.2-.9-.8-1.6-1.2-2.4v.4a8 8 0 00-.8-3.6l-1.8-3c-.4-.7-.8-1.6-1.7-2-1-.7-2.4-1-3.6-1.3l-.4 1.3c.8-.2 1.4-.8 1.2-1.7 0-.6-.4-1.2-.6-1.8-.3-.7-.4-1.4-.8-2-.5-.8-1.3-1-2.1-.9-1 .2-1.8.7-2.6 1L11.4 2 4.6 4.4c-1 .3-2.4.6-2.8 1.7-.2 1 .3 2.1.6 3l.6-.8c-.7.3-1.6.5-2.1 1.1-.5.5-.8 1.3-.9 2V14l.1 3c0 .8-.1 1.7.2 2.5.5.8.7 1.7 1 2.5L2 25c.3.9.5 1.8 1 2.6.4.7 1 1.2 1.5 1.8.5.5.9 1.1 1.7 1.3.9.1 1.8 0 2.7.2l3 .2 2.9.2 3 .2c.9-.1 1.7-.6 2.5-1l2.7-1.2 1.5-.7 1.5-.6c.7-.6 1-1.5 1.4-2.3l1.5-2.7.5-1.2v-1.4c-.1-1-2-.7-2 .1 0 .8.1 1.4-.3 2.1L26 24.6l-1 2c0 .3-.1.3-.4.5l-1.4.6-4.6 2.1c-.7.3-1.4.1-2.1 0l-2.7-.1-5.2-.4c-.6 0-1.3.2-1.7-.3l-1.5-1.6c-1-1.2-1.3-2.9-1.8-4.4L3 20.6l-.4-1c-.1-.5-.4-.8-.4-1.2v-5.7c0-.7-.2-1.5 0-2.2.2-.3.2-.5.5-.6l1.2-.5c.3-.2.7-.5.6-.8-.3-.7-.6-1.5-.6-2.2v-.3h-.1.2l1.2-.5L10.4 4 15.9 2l.9-.4.8-.2c-.2 0-.1 0 0 0l.2.2.3.8.5 1.6.4.8v.4c.2.3-.3.2.5 0-.3 0-.7.2-.8.6 0 .3.1.5.4.6l2.3.7c.7.2 1.2.4 1.6 1l1 1.6 1.2 1.9a6.5 6.5 0 011 3.3c0 .4.1.7.4 1 .3.6.7 1.1.8 1.8v2.7c0 1 2 .7 2-.1z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M19.6 5.4l-14.8 5c-.4 0-.8-.9-1.2-2v-.2C3.2 7 2.9 6 3.3 5.9L17.8 1c.4 0 .8.9 1.2 2v.2c.4 1.2 1 2.1.6 2.2z",
					fill: "#CCCCCA"
				}), c.a.createElement("path", {
					d: "M19.4 5.1l-14 4.7-.7.3L4.2 9l-.5-1.7c-.1-.2-.4-.8-.2-1l.2-.1 1.1-.4 8.6-3 4-1.2.4-.2c.2 0 0-.1.2.2.3.4.5 1.2.7 1.8l.4 1c0 .1.2.8.3.7-.4.2-.1.8.3.7.9-.4 0-1.8-.2-2.4-.3-.8-.6-2.4-1.5-2.7-.6-.2-1.6.4-2.2.6l-10 3.4-2.6.9c-.6.3-.4 1-.3 1.7l.6 1.8c.2.5.4 1.2.8 1.5.6.4 1.5-.2 2.1-.4l4.7-1.5 8.6-3c.4 0 .2-.7-.3-.6z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M5.3 10C9.6 8.7 13.7 6.6 18 5.3c1-.4.4-1.9-.6-1.6C13.1 5.1 9 7.1 4.7 8.5c-1 .3-.4 1.9.6 1.5z",
					fill: "#A5A4A4"
				}), c.a.createElement("path", {
					d: "M4.2 6.8V7l.3-.2 1.1-.5 3.4-1c2.4-.8 4.9-1.5 7.3-2.4.5-.2 1.4-.4 1.6-1 .1-.4-.5-.5-.6-.1 0-.2 0 0-.1 0l-.4.2-1.3.5-3.7 1.2c-2.4.7-5 1.3-7.3 2.4-.3 0-1.4.6-.8 1 .4.3.8-.2.5-.4z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M23.8 9.6l-9-.5-9.3 3.2L2.4 15l-.9 3.6 2.6 8.2 2.4 2.8 11.6.9 7.2-3.3 2.8-5.3v-4.5l-4.3-7.7z",
					fill: "#A5A4A4"
				}), c.a.createElement("path", {
					d: "M23.8 9.3l-8.5-.5c-.8 0-1.4.3-2.2.6L8 11c-1 .3-2 .5-2.8 1l-1.9 1.6c-.4.3-1 .7-1.2 1-.3.5-.3 1.3-.5 1.9-.1.5-.4 1.3-.4 1.9l.3 1 .7 2.4 1.5 4.6c.4 1 1.5 2 2.2 2.8.2.3.3.5.7.6H8l5.4.5c1.5 0 3 .2 4.4.3.8 0 1.5-.5 2.2-.8l4.8-2.2.8-.4c.4-.5.6-1.1.9-1.6l1.3-2.5.6-1.2c.2-.5 0-1.1 0-1.6v-2.8c0-.8-.7-1.6-1.1-2.4l-2.7-4.8-.5-1c-.3-.4-.8 0-.6.4l4 7.2.2.4V21.3c.1.2 0 .7.1.4l-.6 1.2c-.7 1.4-1.6 2.7-2.2 4 0 0 .3 0 0 0l-.6.3-2.2 1c-1.3.6-2.7 1-4 1.8-.2 0-.2 0 0 0h-.5l-1.7-.1-5.3-.4-2.4-.2c-.5 0-1-.2-1.5 0-.2 0-.3-.2 0 0l-.5-.5-1.6-2c-.3-.3-.3-.2-.4-.7l-.6-2L2 19.4l-.2-.6v-.2c0-.6.3-1.4.4-2l.3-1.1V15c.1-.2-.1.2 0 0l1.7-1.3c1-.8 1.3-1.1 2.3-1.5 2.7-1 5.5-2 8.3-2.8.2 0-.2 0 0 0h.6l2.1.1 5.1.3h1c.5 0 .6-.6.1-.6z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M17.7 27l7-3.5 2.3-3v-.3l-.3-6.5-.3-1-3-5.3-.5-.2-7.3-2.3-4.3.6L1.9 10l-.5 1.3.1 7.7 5.2 8.5 6.2 1 1.2-.1 3.6-1.3z",
					fill: "#DDD"
				}), c.a.createElement("path", {
					d: "M18 26.9l-.2.4 3.6-1.8 2.5-1.2c.3-.2.7-.3 1-.6.5-.4.8-1 1.2-1.6.4-.5 1-1 1.2-1.5.2-.4 0-.8 0-1.2v-2.8c-.1-1.3 0-2.6-.5-3.9-.4-1.2-1.3-2.4-2-3.5-.5-.9-1-2-2-2.4-1.4-.6-3-1-4.5-1.4-1-.3-2-.9-3-.8l-2.7.4c-.5 0-1 0-1.5.2-1.2.4-2.3 1.1-3.4 1.6l-5 2.3-1 .5c-.3.3-.6 1-.7 1.5v4l.1 2.7V19c.2.3.5.6.6 1a36357.5 36357.5 0 014 6.7c.3.2.4.7.7 1 .3.2.8.1 1.2.2l5 .8c1.2.1 2.1-.2 3.2-.6l2-.7c.4-.2.2-.9-.2-.7-1.1.4-2.6 1-3.5 1.2-1.2.3-2.4 0-3.7-.3l-2.6-.4-.9-.1c-.3 0 0 0 0 0L5 24l-2.6-4.4c-.2-.3-.5-.6-.6-1 .1.3 0 .1 0 0v-.8-5.2-1.4c-.1.2 0 .1 0 0l.2-.6.2-.5-.1.1 8-3.8c1-.4 1.3-.5 2.4-.7.9 0 1.7-.2 2.6-.3.5-.1.4-.1.8 0l4.6 1.4 2 .6c.4.1.4 0 .6.4.5.5.7 1.2 1 1.7l1.5 2.4c.5.9.7 1.4.8 2.3 0 1.7.2 3.3.3 5v1c-.3.6-1 1.3-1.3 1.8l-.8.9c0 .1-.4.5-.1.3l-1.3.6-4.6 2.3-1 .6c-.2 0-.3.2-.3.4.2.5.9.2.7-.2z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M3 19.2l-.6-3.1c-.1-1.4-.3-2.8 0-4.1.1-.4.3-1 .6-1.2l1-.7c1-.6 2.2-1 3.3-1.5.9-.4 1.9-.8 2.7-1.3.4-.3 0-.9-.4-.6L7.2 7.8c-1.2.5-2.4 1-3.5 1.7l-1.2.7c-.3.3-.5.7-.7 1.2-.4 1.3-.3 2.8-.2 4.2l.7 3.9c.2.4.9.2.7-.3z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M24.3 27l1.4-1.9c.3-.6.8-1.2 1-1.9 0-.4-.6-.5-.7-.1a2.6 2.6 0 01-.1.3l-.2.4-.6 1c-.4.6-.8 1.2-1.4 1.7v.5h.6zM6.5 28.6a5 5 0 002.2 1c.2 0 .4-.2.4-.4s0-.4-.3-.4l-.5-.1h-.1l-.1-.1a4.5 4.5 0 01-.8-.3v-.1c-.1 0 0 0 0 0h-.1l-.3-.2h-.5v.6z",
					fill: "#CCCCCA"
				}), c.a.createElement("path", {
					d: "M11.4 7l1.6-.5c.2 0 .3-.3.2-.5-.1-.2-.3-.3-.5-.2l-1.6.4c-.2 0-.3.3-.2.5 0 .2.2.3.5.2zM8 27l2.5.2c.2 0 .4 0 .4-.3 0-.2 0-.4-.3-.4l-2.5-.2c-.2 0-.4 0-.4.3 0 .2 0 .4.3.4z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M18.7 19c-2.1-1-4.1-2.1-6.3-2.6-.8-.2-1.6-.4-2.4-.8l-1.2-.8c-.9-1-.8-2 .2-2.8 1-1 2.2-2 3.3-2.8.5-.4 1-.6 1.5-.8.4-.2.8 0 1 .3.1.4 0 .8-.5 1-1.7.7-3 2-4.4 3.2-.4.4-.3.7 0 1l.7.5c.5.2 1.1.5 1.7.6 2.5.5 4.8 1.6 7 2.8 1 .5 1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.9.2-1-.3-.2-.5 0-.8.5-1 1-.3 2-.6 2.8-1l3.3-1.6.9-.7z",
					fill: "#A5A4A4"
				}), c.a.createElement("path", {
					d: "M14.2 23.7l-1.3.5-.5.1c-1 .4-1.7-.1-2-.7v-1.1c.2-.4.6-.6 1-.8l1.1-.4 1.7-.7 3-1.5c-1.6-.8-3.2-1.6-5-2-.8-.2-1.7-.4-2.5-.8-.5-.2-1-.6-1.4-1-1.2-1.4-1.1-2.7.2-3.9l3.4-2.8c.4-.4 1-.6 1.5-.8l.2-.1c.3-.2.7-.2 1 0 .4.1.7.4.8.8.3.7 0 1.5-.8 1.8-1.2.5-2.1 1.4-3.1 2.3l-1 .8.4.3 1.5.5c2.7.6 5.2 1.8 7.3 3 .8.3 1 1 1.2 1.3 0 .4 0 1-.6 1.8a9.8 9.8 0 01-3.6 2.4l-2.5 1z",
					fill: "#A5A4A4"
				}), c.a.createElement("path", {
					d: "M19.2 19.1c-2.1-1-4.1-2-6.3-2.5l-2.3-.8c-.5-.2-1-.5-1.3-.9-.9-1-.8-1.9.2-2.8 1-1 2.2-1.9 3.3-2.8l1.6-.7c.3-.2.7-.1.9.3.1.4 0 .7-.4.9-1.8.7-3 2.1-4.5 3.3-.4.3-.3.7 0 1l.7.5 1.7.5c2.5.6 4.8 1.7 7 2.9 1 .4 1.1 1.2.4 2a9 9 0 01-3.3 2.2l-4.2 1.6c-.4.2-.8.1-1-.3-.2-.5.1-.8.5-1l2.9-1 3.2-1.6.9-.8z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M14.6 23.5l-1.4.5-.4.2c-.7.2-1.2 0-1.5-.6a1 1 0 01.1-1l.7-.4 1-.4a24 24 0 001.8-.7l3.1-1.5h.1l.4-.4a25 25 0 00-5.7-2.3 14 14 0 01-2.4-.8c-.5-.2-1-.5-1.3-1-1-1.1-1-2.2.2-3.3 1-1 2.2-2 3.3-2.8l1.4-.7h.2c.3-.2.6-.2.9-.1.2 0 .4.3.5.6.2.5 0 1-.6 1.3-1.2.6-2.2 1.4-3.3 2.4l-1 .9-.2.2.2.2c.2.2.4.4.6.4.5.3 1 .5 1.6.6 2.6.5 5 1.7 7.1 2.8.7.4 1 .8 1 1.2 0 .3 0 .8-.5 1.4a9.5 9.5 0 01-3.5 2.4l-2.4 1zm-1.6-.2l1.3-.5 2.4-1a8.7 8.7 0 003.2-2c.2-.3.4-.6.4-.9 0-.3-.4-.5-.6-.6-2-1-4.4-2.3-7-2.8-.6-.1-1.2-.3-1.7-.6-.3 0-.6-.3-.9-.6-.2-.2-.3-.5-.3-.8 0-.2.1-.5.4-.7l1-.9c1-1 2.1-1.9 3.5-2.5.3-.1.2-.3.2-.4l-.1-.1h-.5l-1.2.7-3.3 2.8c-.9.8-1 1.4-.2 2.3l1.1.8 2.3.7a27 27 0 016.2 2.5l.2.1a.4.4 0 010 .6l-.3.3-.6.5h-.1a51.8 51.8 0 01-6.4 2.9v.2c0 .2.1.3.5.1l.5-.1z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M13.2 25.3c2-.4 4-1.2 5.9-2.2.4-.3 0-1-.5-.7-1.7 1-3.5 1.7-5.4 2-.5.2-.5 1 0 .9zM20.3 22.4c1-.6 1.7-1.5 2-2.7.1-.2 0-.4-.3-.4-.2 0-.4 0-.4.3v.1a4.2 4.2 0 01-.7 1.1l-1 1c-.2.1-.3.4-.1.6 0 .1.3.2.5 0zM13.2 13.2c.7-1 1.8-1.6 3-2 .4-.1.1-.8-.4-.7a7 7 0 00-3.2 2.2c-.4.4.3 1 .6.5z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M45.6 17.8l-.8-.2c-.7 0-1.4-.2-2-.3a130162.5 130162.5 0 01-12.3-2.1l-2.8-.5c-1.7-.3-3.2 1-3.6 2.6 0 .5-.2 1-.4 1.4l-.1.8c-.1.6.3 1.3.8 1.7l1.1.3 1.8.3 5.9 1 6.4 1.1 4.2.8h.4l.3.1c-.1 0 0 0 0 0H45.7c2-.7 2.8-3.3 2-5.2a3.1 3.1 0 00-2-1.8c-.7-.2-1.4.2-1.5.8-.2.6.2 1.3.8 1.4 0 0 .3.1.1 0-.2 0 .1 0 .1.1.2.1-.1-.1 0 0l.2.2s-.1-.2 0 0l.2.3s0-.2 0 0v.3c.1.3 0 0 0 0l.1.1v.5c0 .1 0-.2 0 0v.3s-.2.2-.1 0v.2l-.2.3v-.1l-.1.1c-.2.2 0 0 0 0l-.2.2H45h0c.1 0 0 0 0 0-.1 0-.2 0 0 0h-.4l-3.7-.7-6-1-6-1-3.2-.7h-.1 0l.2.2s0 .1 0 0v.2s0 .2 0 0v.1l.1-.2.3-.7.1-.5.1-.4v-.2c.1-.1 0 0 0 0l.2-.2v-.2c.2-.1 0 .2.1 0l.2-.1s0-.1 0 0c-.2.1 0 0 0 0l.1-.1h-.1.2c.3-.1 0 0 0 0s.3 0 0 0c-.3-.1 0 0 0 0h.5a10672 10672 0 007.4 1.3l6.1 1 3.6.7h.3c.6.2 1.3-.2 1.4-.8.2-.6-.2-1.2-.8-1.4z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M44.6 23.7l-19.4-3.5c-.4 0-.6-.5-.4-.9l.4-1.4c.3-1.7 1.5-2.2 2.2-2.1l17.8 3c.4.1 1 .7.8 1.1l-.8 2.4c-.3.7.1 1.5-.6 1.4z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M44.6 23.5l-8-1.4L26 20h-.7c-.7-.3-.2-1.2 0-1.7 0-.5.2-1 .5-1.5.7-1.3 1.9-.9 3-.7l11.6 2 4.3.8c.5 0 1.3.2 1.2.9 0 .3-.3.7-.4 1L45 22c0 .3 0 1.4-.4 1.4-.2 0-.2.3 0 .3.6 0 .6-.4.6-.8 0-.5.2-.9.4-1.3.2-.7 1-1.8.4-2.5-.3-.4-.7-.5-1.2-.6l-1.9-.3-12.6-2.2-3-.5c-1.2 0-2 1-2.2 2.1-.2.7-1 2-.3 2.6l1 .2 1.9.3 6.1 1.1 10.6 1.9h.1c.3 0 .4-.3.1-.3z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M27.5 17.3l14.1 2.5c.7 0 1.4.2 2 .3.5.1.7-.6.2-.6l-14-2.5-2.1-.4c-.4 0-.6.6-.2.7z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M26.8 19.7L41 22l2 .4c.7.1 1-1 .3-1.2L29.2 19l-2-.4c-.8-.1-1.1 1-.4 1.2z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M46.9 21.3c0-1.3-.8-2.4-1.9-2.5-1 0-2 1-2 2.4 0 1.3.8 2.4 1.8 2.5 1.1 0 2-1 2-2.4z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M46.5 21.4c0 .7-.3 1.7-1.1 2-.7.3-1.4-.2-1.7-.8-.5-.8-.5-1.8-.1-2.5.3-.7 1-1.2 1.7-1 .9.4 1.2 1.4 1.2 2.3 0 .3.7.2.7 0 0-1-.4-2.2-1.4-2.6-.9-.4-2 0-2.6.8a3 3 0 00-.3 3c.4.9 1.3 1.5 2.3 1.3 1.2-.3 2-1.4 2-2.6 0-.3-.7-.2-.7 0zM47.1 29.8c-.8-1.4-1.5-2.8-2.5-4l-4.2-5.1-4.7-5.8-1-1.2c-.7-.8-1.7-.5-2.6-.1L19 19.3c-1.4.6-2.8 1.1-4 1.8-1 .4-1 1.3-1 2.1l-.2 2.6-.5 13.9V39.8c0 1 .8 2 1.3 2.7.4.7.8 1.8 1.5 2.3l1.1.3c.6 0 1.1.2 1.7.3l11.2 2c1.2.1 2.4.4 3.5.6 1 .1 1.6 0 2.2-.8l.4-.6 6.1-8.4 3.3-4.4 1.5-2c.4-.7.4-1.4 0-2-.8-1.4-2.9-.2-2 1.2-.2-.3.1-.6-.1-.4l-.3.3L44 32l-3 4c-2 2.8-4 5.6-6.2 8.4l-.8 1.1-.2.3c0 .3.7-.3.8-.3l-.9-.1-1.8-.3-10.8-2-3.4-.5h-.3l.3.2-.1-.2-1.4-2.4-.5-.7.1 1v-1-.7l.1-2.8.4-8 .1-3.4v-1.9l-.1.4.4-.2 2-1 13.6-5.8 1.5-.7h.1c0 .1-.8-.2-.7 0l.3.4 4.2 5.1 4.6 5.7 1 1.2-.1-.1c0 .2.2.4.3.5l1 1.7.6 1c.8 1.3 3 .1 2.1-1.2z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M35.3 17.8l-17.7 7.7c-.2 0-.4.3-.4.5l-2.7 14.2a290.7 290.7 0 012.5 3.6l17.2 3c.2 0 .4 0 .5-.2L46.1 31c.2-.2.1-.5 0-.7L44 27 36 18a.6.6 0 00-.7-.2z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M35.2 17.6L27 21l-9.5 4.1a1 1 0 00-.6.8l-.3 1.5-1.1 6-1 5.6-.3 1c0 .3.3.5.4.7l.9 1.5c.3.5.7 1.5 1.4 1.7l.9.2 5.2.9L33.8 47c.5 0 .8 0 1.1-.3l.6-.8 3-4 7-9.7.7-1c.4-.5 0-1-.2-1.4-.7-1.1-1.3-2.3-2.2-3.3l-7.3-8.3c-.4-.4-.7-.8-1.3-.6-.2 0-.1.4.1.4.5-.2 1 .5 1.2.8l1.6 1.9 4.2 4.7 1.4 1.5.5.8 1.5 2.5c.3.4.3.7 0 1a589887.3 589887.3 0 01-9.5 13L35 45.8l-.5.7c-.2.2-.7 0-1 0l-1.9-.3-6-1-5.9-1.1-2-.4c-.3 0-.7 0-1-.3l-.4-.7-.9-1.5c-.2-.3-.3-.8-.6-1-.1-.1 0 0 0 0v-.1l.8-4.2 1.1-6.3.5-2.4c0-.4 0-.8.2-1.1.2-.4.3-.5.7-.6l1.5-.7 5.2-2.2 10-4.4.6-.3c.2 0 0-.4-.2-.3z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M17.6 41.7c0 .4-.2.7-.3 1v.2.3l.2.2h.4l.2-.3.4-1V42v-.4l-.3-.2h-.4l-.2.3zM25.8 43.4l.4 1.3c0 .3.3.4.5.3.3 0 .4-.3.4-.5l-.5-1.4c0-.2-.3-.3-.5-.3-.3.1-.4.3-.3.6zM27.3 43.8l.4.9v-.1l.2.6c0 .1 0 .2.2.3h.3c.3 0 .5-.3.4-.5a21 21 0 00-.7-1.7c-.1-.2-.5-.3-.7-.1-.2.1-.2.3-.1.6zM43.1 30.8l.5 1v-.2c0 .2 0 .4.2.6 0 .1 0 .2.2.3h.3c.2 0 .4-.3.3-.5a21 21 0 00-.7-1.6c0-.3-.4-.3-.6-.2-.2.1-.3.4-.2.6z",
					fill: "#DDBD37"
				}), c.a.createElement("path", {
					d: "M33.3 14.4l-17.9 7.8-.2.4-.7 17.4c0 .2.1.4.4.5l17.3 3c.2 0 .3 0 .4-.2l11.5-15.6V27L33.9 14.5a.5.5 0 00-.6-.1z",
					fill: "#FFD635"
				}), c.a.createElement("path", {
					d: "M33.1 14l-8 3.6-9.6 4.2c-.4.2-.6.4-.7.8v1.1l-.2 5.5-.5 10.6c0 1 1 1 1.8 1.2l5.4 1 10.6 1.8c.4 0 .8 0 1-.3l.7-1 3-4 7.1-9.7c.5-.6 1.2-1.3.5-2l-2.6-3.3-7.2-8.9c-.3-.4-.6-.7-1.2-.5-.4 0-.2.7.2.6.3 0 .6.5.7.7l1.3 1.6 4 4.8c1 1.4 2.3 2.9 3.5 4.3l.9 1.1-.1.5-6 8-3.5 5-1.3 1.6c-.1.2-.3.7-.5.8h-.6a9462 9462 0 01-7.6-1.4l-6-1-2.2-.4c-.3 0-.8 0-1-.2-.3-.1-.2-.3-.2-.6l.1-1.7.2-6 .3-6.1v-2.1l.1-1c.1-.2.4-.3.6-.3l1.6-.7 5.2-2.3 10-4.3.6-.3c.4-.2 0-.8-.4-.6z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M18 23.5l12-5.2 1.8-.8c.5-.2 0-1-.5-.7l-12 5.2-1.7.7c-.6.3 0 1 .4.8zM15.9 25v7c0 .5.8.5.8 0v-6l.1-1c0-.5-.9-.5-.9 0zM15.7 33.6v1.7c0 .2.2.5.4.4.3 0 .5-.2.5-.4v-1.5-.2c0-.3-.2-.5-.4-.5-.3 0-.5.2-.5.5z",
					fill: "#fff"
				}), c.a.createElement("path", {
					d: "M33.4 26c-.4-1.7-.7-5-1-6.4-1 .4-2.5 2.4-3 2.9-2.5 2.2-1.8 2.7-4.8 2.6-2.7-.1-4.5-.7-4.8 0-.3.5.6 2 1.5 3.7.8 1.7 1.6 1.4.5 3.4-.6 1-2.2 3.1-2.6 4.4.5.3 1.3 0 1.7 0 1-1.5 2.8-4 2.9-5 0-1.4-2.5-4.2-3.1-5.2 1.5 0 5.3.9 6.8.2 1.3-.5 3.8-4 4.9-5 .2 1.3 0 5.1.8 6 .7.8 3.1 1.3 4.8 1.7.5-.3 1-.7 1.3-1.2L33.4 26z",
					fill: "#C18D42"
				}), c.a.createElement("path", {
					d: "M36.3 30.6c4.4-2.8 4-3-.3-4.4-2.4-.8-2.5-.7-2.9-3.3-.1-.9.1-3.7-1-3.9-1-.2-2.5 2.1-3.2 2.7-2.4 2.2-2.2 2.5-5.2 2.4-4.7-.2-5.2-.2-3.3 3.7.9 1.7 1.9 1.9.7 3.9-.7 1.2-2.5 3.4-2.5 4.7 0 2.1 6.4-1.4 7.6-1.2 1.1.2 4.4 5.4 5.8 3.5.7-1 .7-2.8.8-3.9.6-3 .9-2.5 3.5-4.2zm-4 1.6c-.8 1-1 5-1.2 6.3-1-1-3.3-3.7-4.7-4-1.4-.2-5.3 1.5-6.8 2 .6-1.3 3.2-4.7 3.3-6 0-1.2-2.5-4.1-3-5.1 1.4 0 5.2.9 6.7.2 1.3-.5 3.9-4 5-5 .1 1.3 0 5.1.8 6 .9 1 4.8 1.6 6.1 2-1.2.8-5.4 2.4-6.2 3.6z",
					fill: "#000"
				}), c.a.createElement("path", {
					d: "M21 38.3l3.4-1.2c.6-.2.5-1-.1-.8l-3.4 1.1c-.6.2-.5 1 0 .9zM34.4 33.2c.8-.4 1.5-.8 2.2-1.4.5-.4 0-1-.5-.6a7 7 0 01-1.9 1.1c-.5.3-.4 1.1.2.9zM33.3 37.9l-.8 1.3c-.3.6.4 1 .7.4l.8-1.3c.3-.6-.4-1-.7-.4zM34.5 20.5l-.3-1.5c0-.5-1-.2-.9.4l.3 1.5c0 .5 1 .2.9-.4z",
					fill: "#fff"
				}));
			var k = a("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/IntroModal/index.m.less"),
				I = a.n(k);

			function z(e) {
				const {
					subreddit: t,
					pointsName: a
				} = e;
				return c.a.createElement("div", {
					className: I.a.container
				}, c.a.createElement(y.a, {
					colored: !0
				}, o.fbt._("Convert your Community Points into Reddit Coins", null, {
					hk: "2dqZYD"
				})), c.a.createElement("div", {
					className: I.a.sectionsContainer
				}, c.a.createElement(P, {
					image: c.a.createElement(M, null),
					header: o.fbt._("Convert", null, {
						hk: "4ytE6"
					}),
					description: o.fbt._("Choose how many Reddit Coins you want to get by converting your {pointsName}.", [o.fbt._param("pointsName", a)], {
						hk: "4gNGWI"
					})
				}), c.a.createElement(P, {
					image: c.a.createElement(N, null),
					header: o.fbt._("Exclusive to the community", null, {
						hk: "4kPlC3"
					}),
					description: t ? o.fbt._("Coins you convert from {pointsName} can only be used in {communityName}.", [o.fbt._param("pointsName", a), o.fbt._param("communityName", t.displayText)], {
						hk: "30CKZW"
					}) : o.fbt._("Coins you convert from Community Points can only be used in the community in which you bought them.", null, {
						hk: "1BcyV1"
					})
				}), c.a.createElement(P, {
					image: c.a.createElement(_, null),
					header: o.fbt._("Award", null, {
						hk: "3TbqKH"
					}),
					description: o.fbt._("Use Coins to award your favorite posts and comments, to highlight them and to reward the author.", null, {
						hk: "YNrVQ"
					})
				})), c.a.createElement("div", {
					className: I.a.footer
				}, c.a.createElement(w.i, {
					onClick: e.onContinue
				}, o.fbt._("Convert {pointsName}", [o.fbt._param("pointsName", a)], {
					hk: "4CnbBc"
				}))))
			}

			function P(e) {
				return c.a.createElement("div", {
					className: I.a.section
				}, c.a.createElement("div", {
					className: I.a.sectionImage
				}, e.image), c.a.createElement("div", {
					className: I.a.sectionContent
				}, c.a.createElement("h4", {
					className: I.a.sectionHeader
				}, e.header), c.a.createElement("p", {
					className: I.a.sectionDescription
				}, e.description)))
			}
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var A = a("./node_modules/bignumber.js/bignumber.js"),
				T = a.n(A),
				S = a("./node_modules/reselect/es/index.js"),
				D = a("./src/reddit/actions/gold/econPurchase.ts"),
				L = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				B = a("./src/reddit/actions/governance/index.ts"),
				F = a("./src/reddit/actions/modal.ts"),
				V = a("./src/reddit/actions/util/pollActionForSuccess.ts"),
				q = a("./src/reddit/endpoints/governance/crypto.ts"),
				G = a("./src/reddit/helpers/crypto/transactions.ts"),
				R = a("./src/reddit/helpers/crypto/vaultTransactions.ts"),
				U = a("./src/reddit/helpers/trackers/crypto.ts"),
				H = a("./src/reddit/hooks/useTracking.ts"),
				W = a("./src/reddit/selectors/gold/econPurchase.ts"),
				Y = a("./src/reddit/components/Governance/TransactionModals/VaultTransactionModal/index.tsx"),
				J = a("./src/reddit/components/Governance/TransactionModals/ApprovalModal/Details.tsx");

			function X(e) {
				return c.a.createElement(J.b, {
					values: [
						[Object(J.a)(), e.contractAddress],
						[o.fbt._("Function", null, {
							hk: "1Q0dwF"
						}), "burn"]
					]
				})
			}
			var Z = a("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				K = a("./src/reddit/controls/FormFields/index.tsx"),
				Q = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				$ = a("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				ee = a("./src/reddit/components/Governance/Token/index.tsx"),
				te = a("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/ApprovalOverview.m.less"),
				ae = a.n(te);
			const {
				fbt: ne
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function ce(e, t) {
				return e ? new T.a(t || 0).dividedToIntegerBy(e).toNumber() : 0
			}

			function re(e) {
				const {
					pointsAmount: t,
					price: a,
					pointsBalance: n,
					pointsName: r,
					pricePending: s,
					subreddit: o,
					tokenConversion: l
				} = e, i = new T.a(t).dividedBy(l), d = ce(a, t);
				return c.a.createElement("div", {
					className: ae.a.container
				}, c.a.createElement("div", {
					className: ae.a.conversion
				}, c.a.createElement("div", {
					className: ae.a.pointsAmount
				}, c.a.createElement(K.c, {
					className: ae.a.pointsInput,
					disabled: !a,
					type: "number",
					label: "".concat(o.displayText, " ").concat(r),
					value: i,
					placeholder: "0",
					onChange: t => (t => {
						const n = t && new T.a(t).multipliedBy(l).toFixed(0),
							c = ce(a, n);
						e.onChange(n, c)
					})(t.currentTarget.value),
					onBlur: () => {
						if (!t) return void e.onChange("", 0);
						const c = T.a.maximum(T.a.minimum(t, n), 0).toFixed(0),
							r = ce(a, c),
							s = r ? new T.a(r).multipliedBy(a).toFixed(0) : "";
						e.onChange(s, r)
					}
				}), c.a.createElement(ee.a, {
					className: ae.a.pointsInputIcon,
					subredditId: o.id
				})), c.a.createElement("div", {
					className: ae.a.chevron
				}, c.a.createElement("svg", {
					width: "8",
					height: "24",
					viewBox: "0 0 8 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					d: "M1 1L7 12L1 23",
					stroke: "#D3D6DA",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}))), c.a.createElement("div", {
					className: ae.a.coinsAmount
				}, c.a.createElement($.a, {
					className: ae.a.coinIcon
				}), !a && s ? c.a.createElement(Q.a, {
					className: ae.a.loadingIcon,
					sizePx: 5
				}) : d, c.a.createElement("div", {
					className: ae.a.coinsLabel
				}, ne._("Reddit Coins", null, {
					hk: "4n6R5v"
				})))), c.a.createElement("div", {
					className: ae.a.currentBalance
				}, ne._("Current balance:", null, {
					hk: "2NDvrq"
				}), c.a.createElement(Z.a, {
					className: ae.a.currentBalanceAmount,
					amount: n,
					subredditId: o.id,
					small: !0,
					grey: !0
				})), a || s ? c.a.createElement("div", {
					className: ae.a.disclaimer
				}, ne._("Note: converted Coins will be only eligible for use in the community you've earned points. You'll see your updated coin balance when giving awards in this community.", null, {
					hk: "1AgEx3"
				})) : c.a.createElement("div", {
					className: ae.a.errorLoading
				}, ne._("There was an error loading the conversion price. Please try again later.", null, {
					hk: "NYpbS"
				})))
			}
			const se = 100;

			function oe(e) {
				var t, a;
				const {
					pointsContractAddress: s,
					pointsName: l,
					subreddit: u,
					walletProvider: m
				} = e, b = u.id, f = {
					subredditId: b
				}, {
					pointsBalance: h,
					productOffer: v,
					productOffersPending: g,
					subredditLockedCoins: j,
					tokenConversion: O
				} = Object(r.d)(Object(S.c)({
					pointsBalance: e => Object(C.h)(e, f),
					productOffer: e => {
						var t;
						return null === (t = Object(p.c)(e, {
							subredditId: b,
							type: E.a.CoinConversion
						})) || void 0 === t ? void 0 : t[0]
					},
					productOffersPending: p.b,
					subredditLockedCoins: e => Object(W.a)(e, f),
					tokenConversion: e => Object(C.o)(e, f)
				})), y = null === (a = null === (t = null == v ? void 0 : v.pricePackages) || void 0 === t ? void 0 : t[0]) || void 0 === a ? void 0 : a.price, w = Object(x.a)(), M = Object(H.a)(), [N, _] = Object(n.useState)(""), [k, I] = Object(n.useState)(0);
				Object(n.useEffect)(() => {
					if (y && !N) {
						const e = T.a.minimum(new T.a(y).multipliedBy(se), h).toFixed(0);
						_(e), I(new T.a(e).dividedBy(y).toNumber())
					}
				}, [y]);
				const z = e => {
						M(Object(U.a)("coins", b, new T.a(N).dividedBy(O).toFixed(), e))
					},
					P = () => w(Object(F.f)());
				return c.a.createElement(Y.a, {
					approvalOverview: c.a.createElement(re, {
						pointsAmount: N,
						onChange: (e, t) => {
							_(e), I(t)
						},
						pointsBalance: h,
						pointsName: l,
						price: y,
						pricePending: !y && g,
						subreddit: u,
						tokenConversion: O
					}),
					approvalDetails: c.a.createElement(X, {
						contractAddress: s
					}),
					onClose: P,
					onTransactionSuccess: async e => {
						P(), w(function() {
							const e = Object(i.d)(o.fbt._("Processing your conversion...", null, {
								hk: "4dA09t"
							}), d.b.SuccessCommunity);
							return e.duration = 15e3, Object(i.e)(e)
						}()), async function(e, t, a, n, c) {
							await Object(R.a)(t, a);
							const r = Object(D.a)(n.id, n.name, {
								force: !0
							});
							await e(Object(V.a)(r, async e => {
								const t = Object(W.a)(e(), {
									subredditId: n.id
								});
								return c < t || null
							})), e(Object(B.h)({
								subredditId: n.id
							}))
						}(w, m, e.hash, u, j).then(() => {
							M(Object(U.b)("coins", b, new T.a(N).dividedBy(O).toFixed())), w(function() {
								const e = Object(i.d)(o.fbt._("Your Coins are ready!", null, {
									hk: "7ewJ6"
								}), d.b.SuccessCommunityGreen);
								return e.duration = 15e3, Object(i.e)(e)
							}())
						}).catch(e => {
							z(e.toString()), w(Object(i.e)(Object(i.d)(o.fbt._("There was an error while purchasing your Coins. Please try again later", null, {
								hk: "nEHTT"
							}), d.b.Error)))
						})
					},
					onTransactionFailure: z,
					subredditId: b,
					transaction: k ? async () => {
						const e = await w(Object(L.b)(v, k, {
							subredditId: b,
							userCoinsInSubreddit: {
								subredditId: b
							}
						}));
						if (!e) throw new Error("Failed to get econ order for coin conversion");
						return Object(G.b)(s, N, e)
					} : null,
					transactionIntent: Object(q.c)(b),
					transactionIsBlockedOnIOS: !0
				})
			}
			t.default = Object(s.a)((function() {
				var e, t, a;
				const s = Object(O.Y)(),
					o = Object(x.a)(),
					l = Object(r.d)(e => Object(O.q)(e, {
						pageLayer: s
					})),
					i = null == l ? void 0 : l.id;
				if (!l || !i) throw new Error("Expected subreddit id");
				const d = {
						subredditId: i
					},
					u = Object(r.d)(e => Object(C.p)(e, d)),
					m = Object(r.d)(e => Object(C.t)(e, d)),
					p = null === (a = null === (t = null === (e = null == m ? void 0 : m.extra) || void 0 === e ? void 0 : e.contracts) || void 0 === t ? void 0 : t.unlocked) || void 0 === a ? void 0 : a.address;
				if (!p) throw new Error("No community points contract address");
				Object(n.useEffect)(() => {
					o(j(i, E.a.CoinConversion))
				}, []);
				const [b, f] = Object(n.useState)(!0);
				return b ? c.a.createElement(z, {
					onContinue: () => f(!1),
					pointsName: u,
					subreddit: l
				}) : c.a.createElement(oe, {
					pointsContractAddress: p,
					pointsName: u,
					subreddit: l,
					walletProvider: m
				})
			}))
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
				return M
			})), a.d(t, "c", (function() {
				return N
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./node_modules/lodash/uniqueId.js"),
				r = a.n(c),
				s = a("./node_modules/raf/index.js"),
				o = a.n(s),
				l = a("./node_modules/react/index.js"),
				i = a.n(l),
				d = a("./node_modules/react-redux/es/index.js"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/modal.ts"),
				b = a("./src/reddit/selectors/activeModalId.ts"),
				f = a("./src/higherOrderComponents/asModal/index.tsx"),
				h = a("./src/reddit/controls/Button/index.tsx"),
				v = a("./src/reddit/layout/row/Inline/index.tsx"),
				g = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				j = a.n(g);
			var O = Object(f.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return i.a.createElement("div", {
						className: j.a.wrapper
					}, i.a.createElement(v.a, {
						className: j.a.titleRow
					}, a), i.a.createElement("div", {
						className: j.a.detailsContainer
					}, t), i.a.createElement(v.a, {
						className: j.a.buttonRow
					}, i.a.createElement(h.i, {
						className: j.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				x = a("./src/reddit/controls/ErrorText/index.m.less"),
				E = a.n(x);
			const C = Object(u.c)({
				activeModalId: b.a
			});
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					o()(() => {
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
						activeModalId: t,
						className: a,
						errorModalBody: c,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: o,
						textHasOverflowed: l
					} = this.state;
					return i.a.createElement("div", {
						className: Object(m.a)(E.a.wrapper, a)
					}, i.a.createElement("span", {
						className: E.a.description,
						ref: this.spanRef
					}, e), l && i.a.createElement("span", {
						className: E.a.moreText,
						onClick: this.toggleModal
					}, s), t === o && i.a.createElement(O, {
						onConfirmed: this.toggleModal,
						title: r
					}, c || e))
				}
			}
			const w = Object(d.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(y),
				M = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: n,
						fallbackMessage: c,
						messages: r = []
					} = e, s = r.length ? r : c ? [c] : [];
					return s.length ? i.a.createElement("div", {
						className: t
					}, s.map((e, t) => i.a.createElement(w, {
						className: a,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				N = e => i.a.createElement(M, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			})), a.d(t, "b", (function() {
				return h
			})), a.d(t, "c", (function() {
				return v
			})), a.d(t, "d", (function() {
				return O
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				s = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/controls/ErrorText/index.tsx"),
				l = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				i = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = a("./src/reddit/controls/FormFields/index.m.less"),
				u = a.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var c = 0;
					for (n = Object.getOwnPropertySymbols(e); c < n.length; c++) t.indexOf(n[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[c]) && (a[n[c]] = e[n[c]])
				}
				return a
			};
			const b = s.a.input("input", u.a),
				f = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: s
					} = e, o = p(e, ["label", "children", "inputRef", "className"]), l = void 0 !== e.value && "" !== e.value;
					return c.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, s, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: f
					}, c.a.createElement(b, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, o)), e.label && c.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				v = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						isInvalid: s,
						className: o,
						redditStyle: l
					} = e, i = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), d = void 0 !== e.value && "" !== e.value;
					return c.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, o, {
							[u.a.mIsInvalid]: s,
							[u.a.mIsRedditStyle]: l
						}),
						onClick: f
					}, c.a.createElement(b, m({
						innerRef: n
					}, i)), e.label && c.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				g = e => c.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", c.a.createElement(l.a, {
					className: u.a.plus
				}));
			var j;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(j || (j = {}));
			class O extends c.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: j.ADD
						})
					}, this.updateValue = (e, t) => {
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: j.REMOVE,
							value: a,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: a,
						placeholder: n,
						errors: r = []
					} = this.props;
					return e.map((e, s) => c.a.createElement(h, {
						inputRef: e => this.setInputRef(e, s),
						isInvalid: !!r[s],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, s),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, c.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(s)
					}, c.a.createElement(i.b, {
						className: u.a.trash
					})), !!r[s] && c.a.createElement(o.b, {
						className: u.a.errorText
					}, r[s])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: n,
						addValueText: s,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const l = !(!!n && a.length >= n) && !o;
					return c.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && l && c.a.createElement(g, {
						onClick: this.addValue,
						text: s
					}), this.renderFields(), !t && l && c.a.createElement(g, {
						onClick: this.addValue,
						text: s
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return u
			})), a.d(t, "c", (function() {
				return m
			})), a.d(t, "a", (function() {
				return p
			}));
			var n = a("./node_modules/lodash/get.js"),
				c = a.n(n),
				r = a("./src/config.ts"),
				s = a("./src/graphql/operations/PollVote.json"),
				o = a("./src/lib/makeGqlRequest/index.ts"),
				l = a("./src/lib/omitHeaders/index.ts"),
				i = a("./src/reddit/constants/headers.ts"),
				d = (a("./src/reddit/models/Poll/index.ts"), a("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, a, n) {
				return Object(d.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(a, "/votes/me/").concat(n)
				})
			}
			const m = (e, t, a) => Object(o.a)(e, Object.assign(Object.assign({}, s), {
				variables: {
					input: {
						postId: t,
						optionId: a
					}
				}
			}));

			function p(e, t) {
				return Object(d.a)(Object(l.a)(e, [i.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						title: c()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: c()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return o
			}));
			var n = a("./src/config.ts"),
				c = (a("./src/lib/bigNumberUtils/percent.ts"), a("./src/lib/constants/index.ts")),
				r = a("./src/reddit/endpoints/governance/requester.ts");

			function s(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: c.db.GET
				}).then(e => {
					if (e.ok) {
						const a = e.body,
							n = {
								[t.subredditId]: a
							};
						return Object.assign(Object.assign({}, e), {
							body: n
						})
					}
					return e
				})
			}

			function o(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: c.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "a", (function() {
				return o
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				c = a("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const a = new n.BigNumber(e),
					c = new n.BigNumber(t);
				return a.dividedToIntegerBy(c).toString()
			}

			function s(e, t) {
				return Object(c.b)(parseInt(r(e, t), 10))
			}

			function o(e, t) {
				const a = new n.BigNumber(e),
					c = new n.BigNumber(t);
				return a.multipliedBy(c).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js");

			function c(e, t) {
				const [a, c] = Object(n.useState)(e);
				return [a, e => {
					t.current && c(e)
				}]
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react-redux/es/index.js");

			function c() {
				return Object(n.c)()
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, a) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				o = a.n(s);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("path", {
				className: Object(r.a)(o.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), c.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), c.a.createElement("path", {
				className: Object(r.a)(o.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), c.a.createElement("path", {
				className: Object(r.a)(o.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), c.a.createElement("defs", null, c.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, c.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), c.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), c.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), c.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				c = a.n(n);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, c.a.createElement("g", null, c.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("./node_modules/react/index.js"),
				c = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				s = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = a.n(s);
			const l = e => c.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, c.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), c.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return r
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "a", (function() {
				return o
			}));
			var n = a("./src/lib/makeProductOfferKey/index.ts"),
				c = a("./src/reddit/models/Gold/ProductOffer.ts");
			const r = e => e.subreddits.api.productOffers.pending,
				s = (e, t) => {
					let {
						subredditId: a,
						type: c
					} = t;
					return e.subreddits.productOffers[Object(n.a)(a, c)]
				},
				o = (e, t) => {
					let {
						subredditId: a
					} = t;
					const n = s(e, {
						subredditId: a,
						type: c.a.Powerups
					});
					return n && n[0]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-TransactionModals-ConvertToCoinsModal.aeb581d1134ef7689db3.js.map