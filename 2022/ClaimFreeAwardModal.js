// https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.cc8036b6fca7ea69057c.js
// Retrieved at 1/26/2022, 6:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ClaimFreeAwardModal"], {
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				f = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				p = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				O = r("./src/reddit/selectors/gold/productOffers.ts"),
				w = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(w.l),
				j = Object(a.a)(w.m),
				v = Object(a.a)(w.k),
				g = Object(a.a)(w.o),
				k = Object(a.a)(w.n),
				x = Object(a.a)(w.i),
				y = Object(a.a)(w.j),
				_ = e => async (t, r, {
					gqlContext: a
				}) => {
					const i = r();
					if (!Object(m.i)(i)) return t((e => async (t, r, {
						apiContext: a
					}) => {
						t(h());
						const i = r(),
							l = Object(d.J)(i);
						try {
							const r = !l,
								n = await Object(s.b)({
									context: a(),
									correlationId: e,
									shouldUseCurrentOrigin: r
								});
							if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
							const o = n.body;
							t(j(o))
						} catch (u) {
							Object(o.b)() || console.error(u), c.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(v(e))
						}
					})(null == e ? void 0 : e.correlationId));
					const l = Object(O.a)(i);
					if ((null == e ? void 0 : e.forceLoad) || !l) {
						t(g());
						try {
							const e = await (async e => {
								const t = await Object(f.a)(e, {
									...p
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(b.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(a());
							t(x(e.data.coinpacks.offers[0])), t(y(e.data.premium.offers[0]))
						} catch (u) {
							Object(o.b)() || console.error(u), c.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(k(e))
						}
					}
				}, E = Object(a.a)(w.q), P = Object(a.a)(w.r), C = Object(a.a)(w.p), A = (e, t) => async (r, a, {
					apiContext: d
				}) => {
					const i = a();
					if (Object(m.i)(i)) return await r(_());
					r(E());
					try {
						const n = await Object(s.c)({
							awardId: e,
							context: d(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(P(o))
					} catch (l) {
						Object(o.b)() || console.error(l), c.c.captureException(l);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(C(e))
					}
				}, I = Object(a.a)(w.h), N = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, d;
					try {
						const t = await Object(s.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (d = r.awards) || void 0 === d ? void 0 : d.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(I({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (f) {
						Object(o.b)() || console.error(f), e(Object(i.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(f)
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
				c = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/timeUntil/index.ts"),
				l = r("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				m = r("./src/reddit/components/LottieAnimation/index.tsx"),
				O = r("./src/reddit/components/LottieAnimation/util.ts"),
				w = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = r("./src/reddit/components/Econ/ClaimFreeAwardModal/index.m.less"),
				j = r.n(h);
			const {
				fbt: v
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = "https://www.redditstatic.com/gold/awards/animations/free_award", k = (e, t) => {
				var r;
				return (null === (r = null == e ? void 0 : e.assets) || void 0 === r ? void 0 : r.length) && (null == t ? void 0 : t.icon) && (e.assets[0].u = t.icon.url, e.assets[0].p = ""), e
			};
			t.default = Object(d.a)((function() {
				const e = Object(u.a)(),
					t = Object(s.d)(),
					r = Object(s.e)(e => Object(p.b)(e)),
					[n, d] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					Object(O.a)(`${g}/opening.json`).then(e => {
						d(e)
					}), e(Object(l.b)())
				}, []);
				const h = () => {
					e(Object(l.a)("complete")), t(Object(b.f)())
				};
				let x = !1;
				return c.a.createElement(w.e, {
					className: j.a.body
				}, c.a.createElement("button", {
					onClick: h,
					className: j.a.closeButton
				}, c.a.createElement(w.b, null)), !r && c.a.createElement(c.a.Fragment, null, c.a.createElement(m.a, {
					assetUrl: `${g}/flying.json`,
					loop: !0,
					className: j.a.flyingAnimation,
					onClick: () => {
						x || (e(Object(l.a)("redeem")), t(Object(f.a)()), x = !0, setTimeout(() => {
							x = !1
						}, 1e4))
					}
				}), c.a.createElement("p", {
					className: j.a.description
				}, v._("Open it! Open it! (Just click, it’s easy)", null, {
					hk: "2RWqvN"
				}))), r && n && c.a.createElement(c.a.Fragment, null, c.a.createElement(m.a, {
					assetData: k(n, r),
					className: j.a.openingAnimation,
					onClick: o.a
				}), c.a.createElement("h2", {
					className: j.a.awardTitle
				}, v._("It's the {awardName} Award!", [v._param("awardName", r.name)], {
					hk: "41wWKZ"
				})), r.endsAt && c.a.createElement("p", {
					className: j.a.awardDescription
				}, v._("Give it away in the next {awardEndDate} before it disappears.", [v._param("awardEndDate", Object(i.a)(new Date(r.endsAt)))], {
					hk: "gmYKH"
				})), c.a.createElement("div", {
					className: j.a.awardMore
				}, c.a.createElement(w.r, {
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
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "c", (function() {
				return l
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					...Object(o.h)(e, {
						offerContext: a.a.StorefrontFreeAward
					}),
					correlationId: Object(n.e)(n.a.GoldPayment, !1),
					profile: c.P(e),
					subreddit: c.hb(e)
				}),
				d = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...s(e)
				}),
				i = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...s(t)
				}),
				l = () => e => ({
					source: "tooltip",
					action: "view",
					noun: "try_free_award",
					...s(e)
				})
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return d
			})), r.d(t, "k", (function() {
				return i
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "f", (function() {
				return w
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
				c = r("./src/reddit/models/Payments/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = e => e.subreddits.api.productOffers.pending,
				i = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, a, c;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (c = null === (a = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === c ? void 0 : c[Object(o.a)(r)]
				},
				l = e => {
					const t = i(e, {
						type: a.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = i(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return null == r ? void 0 : r[0]
				},
				f = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				b = Object(n.a)(f, e => null == e ? void 0 : e.price),
				p = e => {
					const t = i(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === c.b.PayPal || e[0] === c.b.Stripe)(e.requiredPaymentProviders)) : null,
				O = Object(n.a)(p, s.p, (e, t) => m(e, t) || null),
				w = Object(n.a)(O, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(O, e => (null == e ? void 0 : e[0].price) || null),
				j = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(n.a)(j, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"4783b146aefa"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.cc8036b6fca7ea69057c.js.map