// https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.3abe61e5baf0b034f678.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ClaimFreeAwardModal"], {
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return x
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				d = r("./src/reddit/selectors/user.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(o.a)(m.j),
				w = Object(o.a)(m.k),
				f = Object(o.a)(m.i),
				p = e => async (t, r, {
					apiContext: o
				}) => {
					t(b());
					const i = r(),
						l = Object(d.K)(i);
					try {
						const r = !l,
							a = await Object(c.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!a.ok) throw new Error(a.error && a.error.type || "Unknown error");
						const n = a.body;
						t(w(n))
					} catch (u) {
						Object(n.b)() || console.error(u), s.c.captureException(u);
						const e = a.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, h = Object(o.a)(m.m), O = Object(o.a)(m.n), g = Object(o.a)(m.l), j = (e, t) => async (r, o, {
					apiContext: d
				}) => {
					r(h());
					try {
						const a = await Object(c.c)({
							awardId: e,
							context: d(),
							correlationId: t
						});
						if (!a.ok) throw new Error(a.error && a.error.type || "Unknown error");
						const n = a.body;
						if (!n.coinPackages || !n.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(O(n))
					} catch (i) {
						Object(n.b)() || console.error(i), s.c.captureException(i);
						const e = a.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(g(e))
					}
				}, _ = Object(o.a)(m.h), x = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, d;
					try {
						const t = await Object(c.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (d = r.awards) || void 0 === d ? void 0 : d.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(_({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(n.b)() || console.error(m), e(Object(i.f)({
							kind: l.b.Error,
							text: a.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
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
			var a = r("./node_modules/lodash/noop.js"),
				n = r.n(a),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/timeUntil/index.ts"),
				l = r("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				w = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = r("./src/reddit/components/LottieAnimation/index.tsx"),
				p = r("./src/reddit/components/LottieAnimation/util.ts"),
				h = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = r("./src/reddit/components/Econ/ClaimFreeAwardModal/index.m.less"),
				g = r.n(O);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), _ = "https://www.redditstatic.com/gold/awards/animations/free_award", x = (e, t) => {
				var r;
				return (null === (r = null == e ? void 0 : e.assets) || void 0 === r ? void 0 : r.length) && (null == t ? void 0 : t.icon) && (e.assets[0].u = t.icon.url, e.assets[0].p = ""), e
			};
			t.default = Object(d.a)((function() {
				const e = Object(u.a)(),
					t = Object(c.d)(),
					r = Object(c.e)(e => Object(w.b)(e)),
					[a, d] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					Object(p.a)(`${_}/opening.json`).then(e => {
						d(e)
					}), e(Object(l.b)())
				}, []);
				const O = () => {
					e(Object(l.a)("complete")), t(Object(b.f)())
				};
				let k = !1;
				return s.a.createElement(h.e, {
					className: g.a.body
				}, s.a.createElement("button", {
					onClick: O,
					className: g.a.closeButton
				}, s.a.createElement(h.b, null)), !r && s.a.createElement(s.a.Fragment, null, s.a.createElement(f.a, {
					assetUrl: `${_}/flying.json`,
					loop: !0,
					className: g.a.flyingAnimation,
					onClick: () => {
						k || (e(Object(l.a)("redeem")), t(Object(m.a)()), k = !0, setTimeout(() => {
							k = !1
						}, 1e4))
					}
				}), s.a.createElement("p", {
					className: g.a.description
				}, j._("Open it! Open it! (Just click, it’s easy)", null, {
					hk: "2RWqvN"
				}))), r && a && s.a.createElement(s.a.Fragment, null, s.a.createElement(f.a, {
					assetData: x(a, r),
					className: g.a.openingAnimation,
					onClick: n.a
				}), s.a.createElement("h2", {
					className: g.a.awardTitle
				}, j._("It's the {awardName} Award!", [j._param("awardName", r.name)], {
					hk: "41wWKZ"
				})), r.endsAt && s.a.createElement("p", {
					className: g.a.awardDescription
				}, j._("Give it away in the next {awardEndDate} before it disappears.", [j._param("awardEndDate", Object(i.a)(new Date(r.endsAt)))], {
					hk: "gmYKH"
				})), s.a.createElement("div", {
					className: g.a.awardMore
				}, s.a.createElement(h.r, {
					className: g.a.awardButton,
					onClick: O
				}, j._("Go Forth and Award", null, {
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
			var a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					...Object(n.g)(e, {
						offerContext: o.a.StorefrontFreeAward
					}),
					correlationId: Object(a.e)(a.a.GoldPayment, !1),
					profile: s.R(e),
					subreddit: s.hb(e)
				}),
				d = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...c(e)
				}),
				i = e => t => ({
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.3abe61e5baf0b034f678.js.map