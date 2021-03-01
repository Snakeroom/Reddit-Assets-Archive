// https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.3a79363981743483d487.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ClaimFreeAwardModal"], {
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return E
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(o.a)(m.j),
				b = Object(o.a)(m.k),
				p = Object(o.a)(m.i),
				w = e => async (t, r, {
					apiContext: o
				}) => {
					t(f());
					const d = r(),
						l = Object(i.J)(d);
					try {
						const r = !l,
							a = await Object(c.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!a.ok) throw new Error(a.error && a.error.type || "Unknown error");
						const n = a.body;
						t(b(n))
					} catch (u) {
						Object(n.b)() || console.error(u), s.c.captureException(u);
						const e = a.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(p(e))
					}
				}, h = Object(o.a)(m.m), O = Object(o.a)(m.n), j = Object(o.a)(m.l), g = (e, t) => async (r, o, {
					apiContext: i
				}) => {
					r(h());
					try {
						const a = await Object(c.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!a.ok) throw new Error(a.error && a.error.type || "Unknown error");
						const n = a.body;
						if (!n.coinPackages || !n.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(O(n))
					} catch (d) {
						Object(n.b)() || console.error(d), s.c.captureException(d);
						const e = a.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(j(e))
					}
				}, k = Object(o.a)(m.h), E = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, i;
					try {
						const t = await Object(c.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(k({
								awards: r.awards
							})), e(Object(u.w)())
						}
					} catch (m) {
						Object(n.b)() || console.error(m), e(Object(d.e)({
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
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/timeUntil/index.ts"),
				l = r("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				f = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				p = r("./src/reddit/components/LottieAnimation/index.tsx"),
				w = r("./src/reddit/components/LottieAnimation/util.ts"),
				h = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = r("./src/reddit/components/Econ/ClaimFreeAwardModal/index.m.less"),
				j = r.n(O);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = "https://www.redditstatic.com/gold/awards/animations/free_award", E = (e, t) => {
				var r;
				return (null === (r = null == e ? void 0 : e.assets) || void 0 === r ? void 0 : r.length) && (null == t ? void 0 : t.icon) && (e.assets[0].u = t.icon.url, e.assets[0].p = ""), e
			};
			t.default = Object(i.a)((function() {
				const e = Object(u.a)(),
					t = Object(c.d)(),
					r = Object(c.e)(e => Object(b.b)(e)),
					[a, i] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					Object(w.a)(`${k}/opening.json`).then(e => {
						i(e)
					}), e(Object(l.b)())
				}, []);
				const O = () => {
					e(Object(l.a)("complete")), t(Object(f.f)())
				};
				let x = !1;
				return s.a.createElement(h.d, {
					className: j.a.body
				}, s.a.createElement("button", {
					onClick: O,
					className: j.a.closeButton
				}, s.a.createElement(h.b, null)), !r && s.a.createElement(s.a.Fragment, null, s.a.createElement(p.a, {
					assetUrl: `${k}/flying.json`,
					loop: !0,
					className: j.a.flyingAnimation,
					onClick: () => {
						x || (e(Object(l.a)("redeem")), t(Object(m.a)()), x = !0, setTimeout(() => {
							x = !1
						}, 1e4))
					}
				}), s.a.createElement("p", {
					className: j.a.description
				}, g._("Open it! Open it! (Just click, it’s easy)", null, {
					hk: "2RWqvN"
				}))), r && a && s.a.createElement(s.a.Fragment, null, s.a.createElement(p.a, {
					assetData: E(a, r),
					className: j.a.openingAnimation,
					onClick: n.a
				}), s.a.createElement("h2", {
					className: j.a.awardTitle
				}, g._("It's the {awardName} Award!", [g._param("awardName", r.name)], {
					hk: "41wWKZ"
				})), r.endsAt && s.a.createElement("p", {
					className: j.a.awardDescription
				}, g._("Give it away in the next {awardEndDate} before it disappears.", [g._param("awardEndDate", Object(d.a)(new Date(r.endsAt)))], {
					hk: "gmYKH"
				})), s.a.createElement("div", {
					className: j.a.awardMore
				}, s.a.createElement(h.q, {
					className: j.a.awardButton,
					onClick: O
				}, g._("Go Forth and Award", null, {
					hk: "1OuNXO"
				})))))
			}))
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/lottie-web/build/player/lottie.js"),
				n = r.n(a),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				c = r("./src/reddit/components/LottieAnimation/util.ts");
			const i = s.a.memo(e => {
				const t = s.a.createRef(),
					{
						assetData: r,
						assetUrl: a,
						className: i,
						hidden: d,
						loop: l,
						onClick: u,
						prefersReducedAnimation: m
					} = e,
					[f, b] = Object(o.useState)(r);
				Object(o.useEffect)(() => {
					a ? Object(c.a)(a).then(b) : r && b(r)
				}, [a, r]);
				const [p, w] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || p || !f) return;
					const r = n.a.loadAnimation({
						autoplay: !1,
						loop: l,
						container: e,
						animationData: f
					});
					w(r)
				}, [l, t, p, f]), Object(o.useEffect)(() => {
					if (p)
						if (d) p.stop();
						else if (m) {
						const e = p.getDuration(!0);
						p.goToAndPlay(e, !0)
					} else p.goToAndPlay(0)
				}, [d, m, p]);
				const h = Object(o.useCallback)(() => {
					p && p.goToAndPlay(0)
				}, [p]);
				return s.a.createElement("div", {
					className: i,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: u || h
				})
			});
			t.a = i
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const a = {};

			function n(e) {
				let t = a[e];
				return t || (t = a[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
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
			var a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					...Object(n.h)(e, {
						offerContext: o.a.StorefrontFreeAward
					}),
					correlationId: Object(a.d)(a.a.GoldPayment, !1),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ClaimFreeAwardModal.3a79363981743483d487.js.map