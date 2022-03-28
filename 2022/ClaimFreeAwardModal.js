// https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.db79a33fcd684a3ad5e0.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ClaimFreeAwardModal"], {
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return k
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return I
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				f = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				b = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				w = r("./src/reddit/selectors/gold/productOffers.ts"),
				O = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(O.l),
				j = Object(a.a)(O.m),
				v = Object(a.a)(O.k),
				g = Object(a.a)(O.o),
				y = Object(a.a)(O.n),
				P = Object(a.a)(O.i),
				x = Object(a.a)(O.j),
				k = e => async (t, r, a) => {
					let {
						gqlContext: d
					} = a;
					const l = r();
					if (!Object(m.i)(l)) return t((e => async (t, r, a) => {
						let {
							apiContext: d
						} = a;
						t(h());
						const l = r(),
							u = Object(i.P)(l);
						try {
							const r = !u,
								n = await Object(c.b)({
									context: d(),
									correlationId: e,
									shouldUseCurrentOrigin: r
								});
							if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
							const o = n.body;
							t(j(o))
						} catch (f) {
							Object(o.b)() || console.error(f), s.c.captureException(f);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(v(e))
						}
					})(null == e ? void 0 : e.correlationId));
					const u = Object(w.a)(l);
					if ((null == e ? void 0 : e.forceLoad) || !u) {
						t(g());
						try {
							const e = await (async e => {
								const t = await Object(f.a)(e, {
									...b
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(p.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(d());
							t(P(e.data.coinpacks.offers[0])), t(x(e.data.premium.offers[0]))
						} catch (O) {
							Object(o.b)() || console.error(O), s.c.captureException(O);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(y(e))
						}
					}
				}, _ = Object(a.a)(O.q), E = Object(a.a)(O.r), C = Object(a.a)(O.p), A = (e, t) => async (r, a, i) => {
					let {
						apiContext: d
					} = i;
					const l = a();
					if (Object(m.i)(l)) return await r(k());
					r(_());
					try {
						const n = await Object(c.c)({
							awardId: e,
							context: d(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(E(o))
					} catch (u) {
						Object(o.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(C(e))
					}
				}, S = Object(a.a)(O.h), I = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					var i, f;
					try {
						const t = await Object(c.a)(a());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (i = r.errors) || void 0 === i ? void 0 : i.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (f = r.awards) || void 0 === f ? void 0 : f.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(S({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (p) {
						Object(o.b)() || console.error(p), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(p)
					}
				}
		},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_22gibhk2t9O-MXj0TMhmck",
				closeButton: "_3ujoJ9eEv50F7LImyqH7gT",
				flyingAnimation: "sw8qixK37qTe0LHhHH1S-",
				openingAnimation: "_28nyBZCSYXCMsE2RNgYfKv",
				description: "jLKudB9e9pMEkcDIYwrIF",
				button: "IV0LKYA4cYSUYcaqaf-Q4",
				awardTitle: "mEYfY9DTHnNZf6Q9rhMlb",
				fadeInAndPop: "gUxOhOdYpWSOvrWD6O6Fp",
				awardDescription: "_7AdGB5IxVKRBz9pIu9yq8",
				awardMore: "h-GDUtSFc54efXhC7Jwze",
				awardButton: "_1FeBGD9I1lKO-OxXuTa68G"
			}
		},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/noop.js"),
				o = r.n(n),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				c = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/timeUntil/index.ts"),
				l = r("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				m = r("./src/reddit/components/LottieAnimation/index.tsx"),
				w = r("./src/reddit/components/LottieAnimation/util.ts"),
				O = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = r("./src/reddit/components/Econ/ClaimFreeAwardModal/index.m.less"),
				j = r.n(h);
			const {
				fbt: v
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = "https://www.redditstatic.com/gold/awards/animations/free_award", y = (e, t) => {
				var r;
				return (null === (r = null == e ? void 0 : e.assets) || void 0 === r ? void 0 : r.length) && (null == t ? void 0 : t.icon) && (e.assets[0].u = t.icon.url, e.assets[0].p = ""), e
			};
			t.default = Object(i.a)((function() {
				const e = Object(u.a)(),
					t = Object(c.d)(),
					r = Object(c.e)(e => Object(b.b)(e)),
					[n, i] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					Object(w.a)(`${g}/opening.json`).then(e => {
						i(e)
					}), e(Object(l.b)())
				}, []);
				const h = () => {
					e(Object(l.a)("complete")), t(Object(p.f)())
				};
				let P = !1;
				return s.a.createElement(O.e, {
					className: j.a.body
				}, s.a.createElement("button", {
					onClick: h,
					className: j.a.closeButton
				}, s.a.createElement(O.b, null)), !r && s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					assetUrl: `${g}/flying.json`,
					loop: !0,
					className: j.a.flyingAnimation,
					onClick: () => {
						P || (e(Object(l.a)("redeem")), t(Object(f.a)()), P = !0, setTimeout(() => {
							P = !1
						}, 1e4))
					}
				}), s.a.createElement("p", {
					className: j.a.description
				}, v._("Open it! Open it! (Just click, it’s easy)", null, {
					hk: "2RWqvN"
				}))), r && n && s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					assetData: y(n, r),
					className: j.a.openingAnimation,
					onClick: o.a
				}), s.a.createElement("h2", {
					className: j.a.awardTitle
				}, v._("It's the {awardName} Award!", [v._param("awardName", r.name)], {
					hk: "41wWKZ"
				})), r.endsAt && s.a.createElement("p", {
					className: j.a.awardDescription
				}, v._("Give it away in the next {awardEndDate} before it disappears.", [v._param("awardEndDate", Object(d.a)(new Date(r.endsAt)))], {
					hk: "gmYKH"
				})), s.a.createElement("div", {
					className: j.a.awardMore
				}, s.a.createElement(O.r, {
					className: j.a.awardButton,
					onClick: h
				}, v._("Go Forth and Award", null, {
					hk: "1OuNXO"
				})))))
			}))
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					...Object(o.h)(e, {
						offerContext: a.a.StorefrontFreeAward
					}),
					correlationId: Object(n.e)(n.a.GoldPayment, !1),
					profile: s.R(e),
					subreddit: s.ib(e)
				}),
				i = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...c(e)
				}),
				d = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...c(t)
				}),
				l = () => e => ({
					source: "tooltip",
					action: "view",
					noun: "try_free_award",
					...c(e)
				})
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, a, s;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return i
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return v
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var a, s, c;
					return r ? e.subreddits.productOffers[Object(o.a)(n, r)] : null === (c = null === (s = null === (a = e.features) || void 0 === a ? void 0 : a.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === c ? void 0 : c[Object(o.a)(n)]
				},
				l = e => {
					const t = d(e, {
						type: a.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = d(e, {
						subredditId: r,
						type: a.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				f = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				p = Object(n.a)(f, e => null == e ? void 0 : e.price),
				b = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				w = Object(n.a)(b, c.p, (e, t) => m(e, t) || null),
				O = Object(n.a)(w, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(w, e => (null == e ? void 0 : e[0].price) || null),
				j = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(n.a)(j, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.db79a33fcd684a3ad5e0.js.map