// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal.ac5b2439df55ed98c48b.js
// Retrieved at 5/19/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsPurchaseModal"], {
		"./src/reddit/components/CoinBalance/index.m.less": function(e, a, s) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, a, s) {
			"use strict";
			var t = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = s("./src/reddit/components/CoinBalance/index.m.less"),
				i = s.n(l);
			a.a = e => n.a.createElement("div", {
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
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, a, s) {
			"use strict";
			s.r(a);
			var t = s("./node_modules/react/index.js"),
				o = s.n(t),
				n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/reddit/constants/zIndex.ts"),
				l = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/gold/modals.ts"),
				m = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				p = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/colors.ts"),
				P = s("./src/reddit/helpers/correlationIdTracker.ts"),
				b = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/models/User/index.ts"),
				E = s("./src/reddit/selectors/gild.ts"),
				j = s("./src/reddit/selectors/gold/giveAwards.ts"),
				k = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				v = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				M = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = s("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = s.n(N);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					const {
						award: a,
						onClickClose: s
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: T.a.coinPurchaseGildHeader
					}, o.a.createElement("div", {
						className: T.a.awardTitle
					}, w._("Give the {award name} Award", [w._param("award name", a.name)], {
						hk: "1nWqWe"
					})), o.a.createElement("img", {
						className: T.a.awardIcon,
						src: a.icon.url
					}), o.a.createElement("button", {
						className: T.a.closeButton,
						onClick: s
					}, o.a.createElement(f.b, {
						className: Object(l.a)(T.a.closeIcon, T.a.awardPurchase),
						"data-redditstyle": !0
					}))), o.a.createElement("div", {
						className: Object(l.a)(T.a.coinPurchaseBody, T.a.loaderContainer)
					}, o.a.createElement(_.a, {
						sizePx: 100
					})))
				},
				B = s("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				S = s("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var s = arguments[a];
						for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(r.c)({
					activePage: v.o,
					allowNavigationCallback: e => {
						const a = Object(O.a)(e);
						return null === a ? void 0 : a
					},
					coinBalance: M.d,
					coinPackages: k.b,
					dealCoinPackages: k.d,
					gildThingId: v.p,
					isIframed: E.h,
					nightmode: M.S,
					savedCardsPending: v.t,
					selectedAward: j.a,
					selectedPayment: v.b,
					stripeErrorMessage: v.i,
					stripeTokenPending: v.l,
					paypalErrorMessage: v.c,
					purchaseCatalogError: k.f,
					purchaseCatalogPending: k.g,
					purchasePackageId: v.q,
					userName: e => {
						const a = Object(M.i)(e);
						return "u/".concat(Object(x.e)(a))
					}
				}),
				D = Object(n.b)(A, (e, a) => ({
					closeModal: () => {
						e(Object(m.e)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onFailedToLoadCatalog: a => {
						const s = {
							kind: y.b.Error,
							text: a
						};
						return e(Object(h.e)(s))
					},
					onPaymentSelected: a => e(Object(p.selectPaymentMethod)(a)),
					requestPurchaseCatalog: () => e(Object(u.a)()),
					dispatchCompletePurchase: (a, s, t, o) => {
						e(t ? Object(m.l)(a, s, o) : Object(m.m)(a, s))
					}
				}), (e, a, s) => Object.assign({}, e, a, s, {
					onCompletePurchaseClick: (s, t) => a.dispatchCompletePurchase(s, t, !!e.gildThingId, e.isIframed)
				}));
			class F extends o.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: a
						} = this.props;
						if (27 === e.keyCode) return a()
					};
					const {
						coinPackages: a,
						loadSavedCards: s,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: o
					} = this.props;
					a.length || t || o(), s()
				}
				componentWillUnmount() {
					Object(P.b)(P.a.GoldPayment), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: a
					} = this.props;
					Object(P.d)(P.a.GoldPayment), a(Object(b.h)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(b.g)(e))
					}
				}
				render() {
					const {
						activePage: e,
						className: a,
						coinBalance: s,
						coinPackages: t,
						dealCoinPackages: n,
						gildThingId: r,
						isCompletePaypal: c,
						nightmode: d,
						onCompletePurchaseClick: l,
						onFailedToLoadCatalog: i,
						onPaymentSelected: m,
						onTryCloseModal: p,
						paypalErrorMessage: u,
						purchaseCatalogError: h,
						purchaseCatalogPending: g,
						purchasePackageId: C,
						savedCardsPending: P,
						selectedAward: b,
						selectedPayment: y,
						stripeErrorMessage: x,
						stripeTokenPending: E,
						userName: j
					} = this.props;
					if (h) return i(h), p(), null;
					const k = !!r,
						v = [...t, ...n].filter(e => e.mobileId === C)[0];
					return "paymentCompleted" === e ? o.a.createElement("div", {
						className: a
					}, o.a.createElement(B.a, {
						isCompletePaypal: c,
						isGild: k,
						onCloseClick: p,
						userName: j
					})) : g || !v ? o.a.createElement("div", {
						className: a
					}, o.a.createElement(I, {
						award: b,
						onClickClose: p
					})) : o.a.createElement("div", {
						className: a
					}, "selectPayment" === e && o.a.createElement(S.a, {
						coinBalance: s,
						gildThingId: r,
						nightmode: d,
						onCloseModal: p,
						onCompletePurchaseClick: l,
						onPaymentSelected: m,
						paypalErrorMessage: u,
						purchasePackage: v,
						savedCardsPending: P,
						selectedAward: b,
						selectedPayment: y,
						stripeErrorMessage: x,
						stripeTokenPending: E,
						userName: j
					}))
				}
			}
			const G = Object(c.a)(F);
			a.default = D(Object(g.c)(class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(b.b)(e)), this.onCloseModal()
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
					return o.a.createElement(G, L({}, this.props, {
						className: Object(l.a)(this.props.className, T.a.coinPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, a, s) {
			"use strict";
			s.d(a, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.split.js");
			var t = s("./node_modules/react/index.js"),
				o = s.n(t);

			function n(e, a) {
				const s = e.toString().split(":");
				return s.length % 2 == 0 ? e : s.reduce((e, s, t) => (t % 2 == 0 ? e.push(s) : "" === s ? e.push(":") : ":".concat(s, ":") in a ? e.push(a[":".concat(s, ":")]) : e.push(":".concat(s, ":")), e), []).map((e, a) => o.a.createElement(o.a.Fragment, {
					key: a
				}, e))
			}
		}
	}
]);
//# sourceMappingURL=CoinsPurchaseModal.ac5b2439df55ed98c48b.js.map