// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal.e03f2c7fef2352955f93.js
// Retrieved at 4/15/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsPurchaseModal"], {
		"./src/reddit/components/CoinBalance/index.m.less": function(e, s, a) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, s, a) {
			"use strict";
			var t = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				n = a.n(o),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = a("./src/reddit/components/CoinBalance/index.m.less"),
				i = a.n(l);
			s.a = e => n.a.createElement("div", {
				className: Object(r.a)(i.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(t.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [t.fbt._param("Coin icon placeholder", ":coin:"), t.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": n.a.createElement(d.a, null)
			}), " ", n.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, t.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, s, a) {
			"use strict";
			a.r(s);
			var t = a("./node_modules/react/index.js"),
				o = a.n(t),
				n = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/reddit/constants/zIndex.ts"),
				l = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/gold/modals.ts"),
				m = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				p = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				h = a("./src/reddit/actions/toaster.ts"),
				g = a("./src/reddit/components/TrackingHelper/index.tsx"),
				C = a("./src/reddit/constants/colors.ts"),
				P = a("./src/reddit/helpers/correlationIdTracker.ts"),
				b = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				x = a("./src/reddit/models/Gold/Coins/index.ts"),
				y = a("./src/reddit/models/Toast/index.ts"),
				j = a("./src/reddit/models/User/index.ts"),
				E = a("./src/reddit/selectors/gild.ts"),
				v = a("./src/reddit/selectors/gold/giveAwards.ts"),
				O = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				k = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				M = a("./src/reddit/selectors/platform.ts"),
				f = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				w = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				N = a.n(w);
			const {
				fbt: B
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					const {
						award: s,
						onClickClose: a
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: N.a.coinPurchaseGildHeader
					}, o.a.createElement("div", {
						className: N.a.awardTitle
					}, B._("Give the {award name} Award", [B._param("award name", s.name)], {
						hk: "1nWqWe"
					})), o.a.createElement("img", {
						className: N.a.awardIcon,
						src: s.icon.url
					}), o.a.createElement("button", {
						className: N.a.closeButton,
						onClick: a
					}, o.a.createElement(_.b, {
						className: Object(l.a)(N.a.closeIcon, N.a.awardPurchase),
						"data-redditstyle": !0
					}))), o.a.createElement("div", {
						className: Object(l.a)(N.a.coinPurchaseBody, N.a.loaderContainer)
					}, o.a.createElement(T.a, {
						sizePx: 100
					})))
				},
				A = a("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				L = a("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var a = arguments[s];
						for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(r.c)({
					activePage: k.p,
					allowNavigationCallback: e => {
						const s = Object(M.a)(e);
						return null === s ? void 0 : s
					},
					coinBalance: f.d,
					coinPackages: O.b,
					coinsToPurchase: k.b,
					dealCoinPackages: O.c,
					gildThingId: k.q,
					isIframed: E.h,
					nightmode: f.R,
					savedCardsPending: k.t,
					selectedAward: v.a,
					selectedPayment: k.c,
					stripeErrorMessage: k.j,
					stripeTokenPending: k.m,
					paypalErrorMessage: k.d,
					purchaseCatalogError: O.e,
					purchaseCatalogPending: O.f,
					userName: e => {
						const s = Object(f.i)(e);
						return "u/".concat(Object(j.f)(s))
					}
				}),
				F = Object(n.b)(D, (e, s) => ({
					closeModal: () => {
						e(Object(m.f)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onFailedToLoadCatalog: s => {
						const a = {
							kind: y.b.Error,
							text: s
						};
						return e(Object(h.e)(a))
					},
					onPaymentSelected: s => e(Object(p.selectPaymentMethod)(s)),
					requestPurchaseCatalog: () => e(Object(u.a)()),
					dispatchCompletePurchase: (s, a, t, o) => {
						e(t ? Object(m.l)(s, a, o) : Object(m.m)(s, a))
					}
				}), (e, s, a) => Object.assign({}, e, s, a, {
					onCompletePurchaseClick: (a, t) => s.dispatchCompletePurchase(a, t, !!e.gildThingId, e.isIframed)
				}));
			class G extends o.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: s
						} = this.props;
						if (27 === e.keyCode) return s()
					};
					const {
						coinPackages: s,
						loadSavedCards: a,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: o
					} = this.props;
					s.length || t || o(), a()
				}
				componentWillUnmount() {
					Object(P.b)(P.a.GoldPayment), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: s
					} = this.props;
					Object(P.d)(P.a.GoldPayment), s(Object(b.g)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: s
						} = this.props;
						s(Object(b.f)(e))
					}
				}
				render() {
					const {
						activePage: e,
						className: s,
						coinBalance: a,
						coinPackages: t,
						coinsToPurchase: n,
						dealCoinPackages: r,
						gildThingId: c,
						isCompletePaypal: d,
						nightmode: l,
						onCompletePurchaseClick: i,
						onFailedToLoadCatalog: m,
						onPaymentSelected: p,
						onTryCloseModal: u,
						paypalErrorMessage: h,
						purchaseCatalogError: g,
						purchaseCatalogPending: C,
						savedCardsPending: P,
						selectedAward: b,
						selectedPayment: y,
						stripeErrorMessage: j,
						stripeTokenPending: E,
						userName: v
					} = this.props;
					if (g) return m(g), u(), null;
					const O = !!c,
						k = Object(x.b)(n, [...t, ...r], O);
					return C || !k ? o.a.createElement("div", {
						className: s
					}, o.a.createElement(I, {
						award: b,
						onClickClose: u
					})) : o.a.createElement("div", {
						className: s
					}, "selectPayment" === e && k && o.a.createElement(L.a, {
						coinBalance: a,
						gildThingId: c,
						nightmode: l,
						onCloseModal: u,
						onCompletePurchaseClick: i,
						onPaymentSelected: p,
						paypalErrorMessage: h,
						purchasePackage: k,
						savedCardsPending: P,
						selectedAward: b,
						selectedPayment: y,
						stripeErrorMessage: j,
						stripeTokenPending: E,
						userName: v
					}), "paymentCompleted" === e && o.a.createElement(A.a, {
						isCompletePaypal: d,
						isGild: O,
						onCloseClick: u,
						userName: v
					}))
				}
			}
			const H = Object(c.a)(G);
			s.default = F(Object(g.c)(class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: s
						} = this.props;
						s(Object(b.a)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = Object.assign({
						backgroundColor: C.a.overlayReportFlow
					}, this.props.isIframed ? {
						zIndex: d.a,
						paddingTop: 12,
						paddingBottom: 12
					} : {});
					return o.a.createElement(H, S({}, this.props, {
						className: Object(l.a)(this.props.className, N.a.coinPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, s, a) {
			"use strict";
			a.d(s, "a", (function() {
				return n
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.regexp.split.js");
			var t = a("./node_modules/react/index.js"),
				o = a.n(t);

			function n(e, s) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, t) => (t % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in s ? e.push(s[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, s) => o.a.createElement(o.a.Fragment, {
					key: s
				}, e))
			}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, s, a) {
			"use strict";
			a.d(s, "a", (function() {
				return t
			}));
			const t = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=CoinsPurchaseModal.e03f2c7fef2352955f93.js.map