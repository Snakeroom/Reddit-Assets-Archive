// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.56d059b15812f47bb342.js
// Retrieved at 3/12/2020, 11:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PennyPurchaseModal"], {
		"./src/reddit/components/PennyPurchaseModal/index.m.less": function(e, s, t) {
			e.exports = {
				pennyPurchaseModal: "k-X8UWFEwYv7W3xznPKIr"
			}
		},
		"./src/reddit/components/PennyPurchaseModal/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var o = t("./node_modules/react/index.js"),
				a = t.n(o),
				n = t("./node_modules/react-redux/es/index.js"),
				r = t("./node_modules/reselect/es/index.js"),
				d = t("./src/higherOrderComponents/asModal/index.tsx"),
				c = t("./src/reddit/constants/zIndex.ts"),
				l = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/actions/gold/modals.ts"),
				p = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				h = t("./src/reddit/components/TrackingHelper/index.tsx"),
				g = t("./src/reddit/constants/colors.ts"),
				u = t("./src/reddit/helpers/correlationIdTracker.ts"),
				P = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = t("./src/reddit/models/User/index.ts"),
				C = t("./src/reddit/selectors/gild.ts"),
				M = t("./src/reddit/selectors/gold/giveAwards.ts"),
				b = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = t("./src/reddit/selectors/platform.ts"),
				v = t("./src/reddit/selectors/user.ts"),
				j = t("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				E = t("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx"),
				x = t("./src/reddit/components/PennyPurchaseModal/index.m.less"),
				k = t.n(x);

			function T() {
				return (T = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var t = arguments[s];
						for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(r.c)({
					activePage: b.o,
					allowNavigationCallback: e => {
						const s = Object(O.a)(e);
						return null === s ? void 0 : s
					},
					coinBalance: v.d,
					gildThingId: b.p,
					isIframed: C.h,
					nightmode: v.Q,
					savedCardsPending: b.s,
					selectedAward: M.a,
					selectedPayment: b.b,
					stripeErrorMessage: b.i,
					stripeTokenPending: b.l,
					paypalErrorMessage: b.c,
					userName: e => {
						const s = Object(v.i)(e);
						return "u/".concat(Object(y.f)(s))
					}
				}),
				f = Object(n.b)(w, (e, s) => ({
					closeModal: () => {
						e(Object(m.d)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onPaymentSelected: s => e(Object(p.selectPaymentMethod)(s)),
					dispatchCompletePurchase: (s, t) => {
						e(Object(m.h)(s, t))
					}
				}), (e, s, t) => Object.assign({}, e, s, t, {
					onCompletePurchaseClick: t => s.dispatchCompletePurchase(t, e.isIframed)
				}));
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: s
						} = this.props;
						if (27 === e.keyCode) return s()
					}
				}
				componentWillMount() {
					this.props.loadSavedCards()
				}
				componentWillUnmount() {
					Object(u.b)(u.a.GoldPayment), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: s
					} = this.props;
					Object(u.d)(u.a.GoldPayment), s(Object(P.g)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: s
						} = this.props;
						s(Object(P.f)(e))
					}
				}
				render() {
					const {
						activePage: e,
						className: s,
						coinBalance: t,
						gildThingId: o,
						isCompletePaypal: n,
						nightmode: r,
						selectedPayment: d,
						onCompletePurchaseClick: c,
						onPaymentSelected: l,
						onTryCloseModal: i,
						savedCardsPending: p,
						selectedAward: m,
						stripeErrorMessage: h,
						stripeTokenPending: g,
						paypalErrorMessage: u,
						userName: P
					} = this.props;
					return a.a.createElement("div", {
						className: s
					}, "selectPayment" === e && a.a.createElement(E.a, {
						coinBalance: t,
						gildThingId: o,
						nightmode: r,
						onCloseModal: i,
						onCompletePurchaseClick: c,
						onPaymentSelected: l,
						paypalErrorMessage: u,
						savedCardsPending: p,
						selectedAward: m,
						selectedPayment: d,
						stripeErrorMessage: h,
						stripeTokenPending: g,
						userName: P
					}), "paymentCompleted" === e && a.a.createElement(j.a, {
						gildThingId: o,
						isGild: !0,
						isCompletePaypal: n,
						onCloseClick: i,
						userName: P
					}))
				}
			}
			const I = Object(d.a)(_);
			s.default = f(Object(h.b)(class extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: s
						} = this.props;
						s(Object(P.a)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = Object.assign({
						backgroundColor: g.a.overlayReportFlow
					}, this.props.isIframed ? {
						zIndex: c.a,
						paddingTop: 12,
						paddingBottom: 12
					} : {});
					return a.a.createElement(I, T({}, this.props, {
						className: Object(l.a)(this.props.className, k.a.pennyPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		}
	}
]);
//# sourceMappingURL=PennyPurchaseModal.56d059b15812f47bb342.js.map