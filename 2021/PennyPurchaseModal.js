// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.b41b7e82d4734c177522.js
// Retrieved at 6/14/2021, 3:20:05 PM by Reddit Dataminer v1.0.0
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
				r = t.n(o),
				n = t("./node_modules/react-redux/es/index.js"),
				a = t("./node_modules/reselect/es/index.js"),
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
				v = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = t("./src/reddit/selectors/platform.ts"),
				O = t("./src/reddit/selectors/user.ts"),
				E = t("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				j = t("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx"),
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
			const w = Object(a.c)({
					activePage: v.q,
					allowNavigationCallback: e => {
						const s = Object(b.a)(e);
						return null === s ? void 0 : s
					},
					coinBalance: O.d,
					gildThingId: v.s,
					isIframed: C.g,
					nightmode: O.W,
					savedCardsPending: v.w,
					selectedAward: M.b,
					selectedPayment: v.c,
					stripeErrorMessage: v.j,
					stripeTokenPending: v.m,
					paypalErrorMessage: v.d,
					userName: e => {
						const s = Object(O.j)(e);
						return `u/${Object(y.e)(s)}`
					}
				}),
				_ = Object(n.b)(w, (e, s) => ({
					closeModal: () => {
						e(Object(m.a)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onPaymentSelected: s => e(Object(p.selectPaymentMethod)(s)),
					dispatchCompletePurchase: (s, t) => {
						e(Object(m.e)(s, t))
					}
				}), (e, s, t) => ({
					...e,
					...s,
					...t,
					onCompletePurchaseClick: t => s.dispatchCompletePurchase(t, e.isIframed)
				}));
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: s
						} = this.props;
						if (27 === e.keyCode) return s()
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						loadSavedCards: s,
						sendEvent: t
					} = this.props;
					s(), Object(u.d)(u.a.GoldPayment, !1), t(Object(P.h)(e))
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
						nightmode: n,
						selectedPayment: a,
						onCompletePurchaseClick: d,
						onPaymentSelected: c,
						onTryCloseModal: l,
						savedCardsPending: i,
						selectedAward: p,
						stripeErrorMessage: m,
						stripeTokenPending: h,
						paypalErrorMessage: g,
						userName: u
					} = this.props;
					return r.a.createElement("div", {
						className: s
					}, "selectPayment" === e && r.a.createElement(j.a, {
						coinBalance: t,
						gildThingId: o,
						nightmode: n,
						onCloseModal: l,
						onCompletePurchaseClick: d,
						onPaymentSelected: c,
						paypalErrorMessage: g,
						savedCardsPending: i,
						selectedAward: p,
						selectedPayment: a,
						stripeErrorMessage: m,
						stripeTokenPending: h,
						userName: u
					}), "paymentCompleted" === e && r.a.createElement(E.a, {
						gildThingId: o,
						isGild: !0,
						onCloseClick: l,
						userName: u
					}))
				}
			}
			const I = Object(d.a)(f);
			s.default = _(Object(h.c)(class extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: s
						} = this.props;
						s(Object(P.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: g.b.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: c.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return r.a.createElement(I, T({}, this.props, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PennyPurchaseModal.b41b7e82d4734c177522.js.map