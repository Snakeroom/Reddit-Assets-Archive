// https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.e71ba2604cc284650edb.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ClaimFreeAwardModal"], {
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return j
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				f = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				m = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var p = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(o.a)(b.m);
			const w = Object(o.a)(b.o),
				O = Object(o.a)(b.n),
				v = Object(o.a)(b.i),
				h = Object(o.a)(b.j),
				j = e => async (t, r, o) => {
					let {
						gqlContext: d
					} = o;
					const c = r(),
						i = Object(p.a)(c);
					if ((null == e ? void 0 : e.forceLoad) || !i) {
						t(w());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...m
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(f.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(d());
							t(v(e.data.coinpacks.offers[0])), t(h(e.data.premium.offers[0]))
						} catch (l) {
							Object(a.b)() || console.error(l), s.c.captureException(l);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(O(e))
						}
					}
				}, g = () => async e => e(j()), y = Object(o.a)(b.h), P = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var u, f;
					try {
						const t = await Object(d.a)(o());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (u = r.errors) || void 0 === u ? void 0 : u.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (f = r.awards) || void 0 === f ? void 0 : f.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(y({
								awards: r.awards
							})), e(Object(l.A)())
						}
					} catch (m) {
						Object(a.b)() || console.error(m), e(Object(c.f)({
							kind: i.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(m)
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
				a = r.n(n),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/timeUntil/index.ts"),
				l = r("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				m = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				b = r("./src/reddit/components/LottieAnimation/index.tsx"),
				w = r("./src/reddit/components/LottieAnimation/util.ts"),
				O = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				v = r("./src/reddit/components/Econ/ClaimFreeAwardModal/index.m.less"),
				h = r.n(v);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = "https://www.redditstatic.com/gold/awards/animations/free_award", y = (e, t) => {
				var r;
				return (null === (r = null == e ? void 0 : e.assets) || void 0 === r ? void 0 : r.length) && (null == t ? void 0 : t.icon) && (e.assets[0].u = t.icon.url, e.assets[0].p = ""), e
			};
			t.default = Object(c.a)((function() {
				const e = Object(u.a)(),
					t = Object(d.d)(),
					r = Object(d.e)(e => Object(p.b)(e)),
					[n, c] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					Object(w.a)(`${g}/opening.json`).then(e => {
						c(e)
					}), e(Object(l.b)())
				}, []);
				const v = () => {
					e(Object(l.a)("complete")), t(Object(m.f)())
				};
				let P = !1;
				return s.a.createElement(O.e, {
					className: h.a.body
				}, s.a.createElement("button", {
					onClick: v,
					className: h.a.closeButton
				}, s.a.createElement(O.b, null)), !r && s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
					assetUrl: `${g}/flying.json`,
					loop: !0,
					className: h.a.flyingAnimation,
					onClick: () => {
						P || (e(Object(l.a)("redeem")), t(Object(f.a)()), P = !0, setTimeout(() => {
							P = !1
						}, 1e4))
					}
				}), s.a.createElement("p", {
					className: h.a.description
				}, j._("Open it! Open it! (Just click, it’s easy)", null, {
					hk: "2RWqvN"
				}))), r && n && s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
					assetData: y(n, r),
					className: h.a.openingAnimation,
					onClick: a.a
				}), s.a.createElement("h2", {
					className: h.a.awardTitle
				}, j._("It's the {awardName} Award!", [j._param("awardName", r.name)], {
					hk: "41wWKZ"
				})), r.endsAt && s.a.createElement("p", {
					className: h.a.awardDescription
				}, j._("Give it away in the next {awardEndDate} before it disappears.", [j._param("awardEndDate", Object(i.a)(new Date(r.endsAt)))], {
					hk: "gmYKH"
				})), s.a.createElement("div", {
					className: h.a.awardMore
				}, s.a.createElement(O.r, {
					className: h.a.awardButton,
					onClick: v
				}, j._("Go Forth and Award", null, {
					hk: "1OuNXO"
				})))))
			}))
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return l
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const d = e => ({
					...Object(a.h)(e, {
						offerContext: o.a.StorefrontFreeAward
					}),
					correlationId: Object(n.d)(n.a.GoldPayment, !1),
					profile: s.U(e),
					subreddit: s.mb(e)
				}),
				c = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...d(e)
				}),
				i = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...d(t)
				}),
				l = () => e => ({
					source: "tooltip",
					action: "view",
					noun: "try_free_award",
					...d(e)
				})
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, o, s;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "e", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				i = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var o, s, d;
					return r ? e.subreddits.productOffers[Object(a.a)(n, r)] : null === (d = null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === d ? void 0 : d[Object(a.a)(n)]
				},
				l = e => {
					const t = i(e, {
						type: o.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = e => {
					const t = i(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				m = Object(n.a)(u, d.q, (e, t) => f(e, t) || null),
				p = Object(n.a)(m, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				b = Object(n.a)(m, e => (null == e ? void 0 : e[0].price) || null),
				w = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				O = Object(n.a)(w, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.e71ba2604cc284650edb.js.map