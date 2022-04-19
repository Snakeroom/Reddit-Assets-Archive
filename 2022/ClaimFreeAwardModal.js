// https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.2f14cd6271795a581970.js
// Retrieved at 4/19/2022, 6:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ClaimFreeAwardModal"], {
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return y
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
				p = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var m = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(o.a)(b.m);
			const w = Object(o.a)(b.o),
				O = Object(o.a)(b.n),
				v = Object(o.a)(b.i),
				j = Object(o.a)(b.j),
				h = e => async (t, r, o) => {
					let {
						gqlContext: d
					} = o;
					const c = r(),
						i = Object(m.a)(c);
					if ((null == e ? void 0 : e.forceLoad) || !i) {
						t(w());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...p
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(f.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(d());
							t(v(e.data.coinpacks.offers[0])), t(j(e.data.premium.offers[0]))
						} catch (l) {
							Object(a.b)() || console.error(l), s.c.captureException(l);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(O(e))
						}
					}
				}, g = () => async e => e(h()), P = Object(o.a)(b.h), y = () => async (e, t, r) => {
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
							await e(P({
								awards: r.awards
							})), e(Object(l.B)())
						}
					} catch (p) {
						Object(a.b)() || console.error(p), e(Object(c.f)({
							kind: i.b.Error,
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
				a = r.n(n),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/timeUntil/index.ts"),
				l = r("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				b = r("./src/reddit/components/LottieAnimation/index.tsx"),
				w = r("./src/reddit/components/LottieAnimation/util.ts"),
				O = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				v = r("./src/reddit/components/Econ/ClaimFreeAwardModal/index.m.less"),
				j = r.n(v);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = "https://www.redditstatic.com/gold/awards/animations/free_award", P = (e, t) => {
				var r;
				return (null === (r = null == e ? void 0 : e.assets) || void 0 === r ? void 0 : r.length) && (null == t ? void 0 : t.icon) && (e.assets[0].u = t.icon.url, e.assets[0].p = ""), e
			};
			t.default = Object(c.a)((function() {
				const e = Object(u.a)(),
					t = Object(d.d)(),
					r = Object(d.e)(e => Object(m.b)(e)),
					[n, c] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					Object(w.a)(`${g}/opening.json`).then(e => {
						c(e)
					}), e(Object(l.b)())
				}, []);
				const v = () => {
					e(Object(l.a)("complete")), t(Object(p.f)())
				};
				let y = !1;
				return s.a.createElement(O.e, {
					className: j.a.body
				}, s.a.createElement("button", {
					onClick: v,
					className: j.a.closeButton
				}, s.a.createElement(O.b, null)), !r && s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
					assetUrl: `${g}/flying.json`,
					loop: !0,
					className: j.a.flyingAnimation,
					onClick: () => {
						y || (e(Object(l.a)("redeem")), t(Object(f.a)()), y = !0, setTimeout(() => {
							y = !1
						}, 1e4))
					}
				}), s.a.createElement("p", {
					className: j.a.description
				}, h._("Open it! Open it! (Just click, it’s easy)", null, {
					hk: "2RWqvN"
				}))), r && n && s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
					assetData: P(n, r),
					className: j.a.openingAnimation,
					onClick: a.a
				}), s.a.createElement("h2", {
					className: j.a.awardTitle
				}, h._("It's the {awardName} Award!", [h._param("awardName", r.name)], {
					hk: "41wWKZ"
				})), r.endsAt && s.a.createElement("p", {
					className: j.a.awardDescription
				}, h._("Give it away in the next {awardEndDate} before it disappears.", [h._param("awardEndDate", Object(i.a)(new Date(r.endsAt)))], {
					hk: "gmYKH"
				})), s.a.createElement("div", {
					className: j.a.awardMore
				}, s.a.createElement(O.r, {
					className: j.a.awardButton,
					onClick: v
				}, h._("Go Forth and Award", null, {
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
					correlationId: Object(n.e)(n.a.GoldPayment, !1),
					profile: s.Q(e),
					subreddit: s.gb(e)
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
			r.d(t, "j", (function() {
				return c
			})), r.d(t, "k", (function() {
				return i
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return h
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
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = i(e, {
						subredditId: r,
						type: o.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				f = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				p = Object(n.a)(f, e => null == e ? void 0 : e.price),
				m = e => {
					const t = i(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				b = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				w = Object(n.a)(m, d.p, (e, t) => b(e, t) || null),
				O = Object(n.a)(w, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				v = Object(n.a)(w, e => (null == e ? void 0 : e[0].price) || null),
				j = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				h = Object(n.a)(j, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.2f14cd6271795a581970.js.map