// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal.bb965110dd92e884f991.js
// Retrieved at 3/12/2020, 11:30:05 AM by Reddit Dataminer v1.0.0
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
			}, Object(c.a)(t.fbt._("Coin balance:: :coin:{coinBalance}", [t.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "3rsL0j"
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
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				P = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = a("./src/reddit/models/Gold/Coins/index.ts"),
				x = a("./src/reddit/models/Toast/index.ts"),
				j = a("./src/reddit/models/User/index.ts"),
				E = a("./src/reddit/selectors/gild.ts"),
				v = a("./src/reddit/selectors/gold/giveAwards.ts"),
				O = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				M = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				k = a("./src/reddit/selectors/platform.ts"),
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
					activePage: M.o,
					allowNavigationCallback: e => {
						const s = Object(k.a)(e);
						return null === s ? void 0 : s
					},
					coinBalance: f.d,
					coinPackages: O.b,
					coinsToPurchase: M.a,
					gildThingId: M.p,
					isIframed: E.h,
					nightmode: f.Q,
					savedCardsPending: M.s,
					selectedAward: v.a,
					selectedPayment: M.b,
					stripeErrorMessage: M.i,
					stripeTokenPending: M.l,
					paypalErrorMessage: M.c,
					purchaseCatalogError: O.d,
					purchaseCatalogPending: O.e,
					userName: e => {
						const s = Object(f.i)(e);
						return "u/".concat(Object(j.f)(s))
					}
				}),
				F = Object(n.b)(D, (e, s) => ({
					closeModal: () => {
						e(Object(m.e)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onFailedToLoadCatalog: s => {
						const a = {
							kind: x.b.Error,
							text: s
						};
						return e(Object(h.e)(a))
					},
					onPaymentSelected: s => e(Object(p.selectPaymentMethod)(s)),
					requestPurchaseCatalog: () => e(Object(u.b)()),
					dispatchCompletePurchase: (s, a, t, o) => {
						e(t ? Object(m.k)(s, a, o) : Object(m.l)(s, a))
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
					Object(b.b)(b.a.GoldPayment), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: s
					} = this.props;
					Object(b.d)(b.a.GoldPayment), s(Object(P.g)(e))
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
						coinBalance: a,
						coinPackages: t,
						coinsToPurchase: n,
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
						savedCardsPending: C,
						selectedAward: b,
						selectedPayment: P,
						stripeErrorMessage: x,
						stripeTokenPending: j,
						userName: E
					} = this.props;
					if (h) return i(h), p(), null;
					const v = !!r,
						O = Object(y.b)(n, t, v);
					return g || !O ? o.a.createElement("div", {
						className: s
					}, o.a.createElement(I, {
						award: b,
						onClickClose: p
					})) : o.a.createElement("div", {
						className: s
					}, "selectPayment" === e && O && o.a.createElement(L.a, {
						coinBalance: a,
						gildThingId: r,
						nightmode: d,
						onCloseModal: p,
						onCompletePurchaseClick: l,
						onPaymentSelected: m,
						paypalErrorMessage: u,
						purchasePackage: O,
						savedCardsPending: C,
						selectedAward: b,
						selectedPayment: P,
						stripeErrorMessage: x,
						stripeTokenPending: j,
						userName: E
					}), "paymentCompleted" === e && o.a.createElement(A.a, {
						isCompletePaypal: c,
						isGild: v,
						onCloseClick: p,
						userName: E
					}))
				}
			}
			const H = Object(c.a)(G);
			s.default = F(Object(g.b)(class extends o.a.PureComponent {
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
//# sourceMappingURL=CoinsPurchaseModal.bb965110dd92e884f991.js.map