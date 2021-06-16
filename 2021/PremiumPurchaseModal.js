// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.8f443a78ccf9a7144e6a.js
// Retrieved at 6/16/2021, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, r) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/FocusTrap/index.ts"),
				s = r("./src/reddit/actions/shortcuts/utils.ts"),
				i = r("./src/reddit/components/Portal/index.tsx"),
				d = r("./src/reddit/constants/shortcuts.ts"),
				l = r("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.m.less"),
				m = r.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = ({
				className: e,
				isVisible: t,
				...r
			}) => o.a.createElement("div", p({
				className: Object(a.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, r));

			function h(e) {
				class t extends n.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(l.a)(), this.ref && (this.focusTrap = new c.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(l.b)(), Object(s.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: r,
							ignoreDefaultFocus: n,
							onOverlayClick: c,
							overlayClassName: s,
							overlayCustomStyles: l,
							withOverlay: u,
							...p
						} = t, h = p;
						return o.a.createElement(i.a, {
							container: document.getElementById(d.b)
						}, o.a.createElement(f, {
							className: s,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: l
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(a.a)(m.a.modal, r),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, o.a.createElement(e, h))))
					}
				}
				return t
			}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/sentry/index.ts");

			function o() {
				! function(e, t) {
					if (!e.rdt) {
						var r = e.rdt = function() {
							r.sendEvent ? r.sendEvent.apply(r, arguments) : r.callQueue.push(arguments)
						};
						r.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var o = t.getElementsByTagName("script")[0];
						o.parentNode.insertBefore(n, o)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const a = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return f
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return b
			})), r.d(t, "stripeApiError", (function() {
				return g
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return y
			})), r.d(t, "paypalApiError", (function() {
				return w
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return _
			})), r.d(t, "_deleteSavedCard", (function() {
				return v
			})), r.d(t, "deleteSavedCard", (function() {
				return x
			})), r.d(t, "savedCardsPending", (function() {
				return C
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			})), r.d(t, "loadSavedCards", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(s.B),
				l = Object(a.a)(s.w),
				u = Object(a.a)(s.b),
				m = Object(a.a)(s.y),
				p = Object(a.a)(s.a),
				f = Object(a.a)(s.E),
				h = Object(a.a)(s.G),
				b = Object(a.a)(s.F),
				g = Object(a.a)(s.D),
				y = e => async (t, r) => {
					const o = r(),
						a = Object(i.h)(o),
						c = Object(i.l)(o),
						{
							token: s,
							error: d
						} = await e.createToken({
							name: a,
							address_zip: c
						});
					if (a.trim()) {
						if (!d && s) return s;
						t(b(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, w = Object(a.a)(s.x), P = Object(a.a)(s.H), _ = Object(a.a)(s.C), v = Object(a.a)(s.g), x = e => async (t, r, {
					apiContext: n
				}) => {
					t(v(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, C = Object(a.a)(s.z), k = Object(a.a)(s.A), O = () => async (e, t, {
					apiContext: r
				}) => {
					e(C());
					try {
						const t = await Object(c.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(k(n)), n[0] && e(_(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(k([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return b
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return g
			})), r.d(t, "paymentBlobCreated", (function() {
				return y
			})), r.d(t, "openWithBlob", (function() {
				return w
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(f.t),
				b = Object(a.a)(f.e),
				g = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(p.a)(r()),
						c = (null == a ? void 0 : a.pennies) || s.vb,
						l = Object(m.c)(m.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const f = await t(Object(d.validateAndCreateStripeToken)(e));
					if (f) try {
						const e = await Object(u.h)({
							context: n(),
							correlationId: l,
							pennies: c,
							token: f
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(i.a)(h);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, y = Object(a.a)(f.v), w = ({
					packageId: e,
					correlationId: t
				}) => async (r, o, {
					apiContext: a
				}) => {
					r(h({
						packageId: e,
						correlationId: t
					}));
					const s = Object(p.a)(o()),
						u = (null == s ? void 0 : s.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(l.f)({
							buttonId: u,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.paypalApiError)(t))
						} else r(y(e))
					} catch (m) {
						const e = Object(i.a)(m);
						r(Object(d.paypalApiError)(e))
					} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/shortcuts.ts"),
				o = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = r("./src/reddit/helpers/routeKey/index.ts");
			const c = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const r = t.routeMatch,
						n = Object(o.a)(e);
					return Object(a.b)(r, e, n)
				},
				s = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				i = e => {
					const t = document.getElementById(e),
						r = window.scrollX,
						n = window.scrollY;
					t && (t.focus(), window.scrollTo(r, n))
				},
				d = () => {
					i(n.b)
				}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, r) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				s = r.n(c);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement("div", {
				className: s.a.purchaseFooter
			}, o.a.createElement(a.i, {
				className: s.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, i._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, r) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "s", (function() {
				return C
			})), r.d(t, "t", (function() {
				return k
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "r", (function() {
				return M
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				a = r("./src/reddit/controls/Input/ModalInput.tsx"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				s = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				i = r.n(s);
			const d = n.a.wrapped(c.a, "CloseIcon", i.a),
				l = n.a.section("ModalBody", i.a),
				u = n.a.section("ModalPostPreview", i.a),
				m = n.a.p("ModalText", i.a),
				p = n.a.div("ModalSmallText", i.a),
				f = n.a.div("ModalDescriptionText", i.a),
				h = n.a.div("ModalMetaText", i.a),
				b = n.a.label("ModalFormItem", i.a),
				g = n.a.wrapped(a.a, "ModalInput", i.a),
				y = n.a.label("ModalInputLabel", i.a),
				w = n.a.footer("ModalFooter", i.a),
				P = n.a.header("ModalHeader", i.a),
				_ = n.a.div("ModalTitle", i.a),
				v = n.a.div("ModalAnnotation", i.a),
				x = n.a.div("ModalMain", i.a),
				C = n.a.textarea("TextArea", i.a),
				k = n.a.wrapped(o.i, "WarningButton", i.a),
				O = n.a.wrapped(o.i, "PrimaryButton", i.a),
				j = n.a.wrapped(o.l, "CancelButton", i.a),
				M = n.a.wrapped(o.o, "RemoveButton", i.a)
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				premiumPurchaseModal: "_23HrteRgGDZ91SGL5oYWAp",
				premiumPurchaseHeader: "_1vNPpspCrQ3W3_z4l8WXD2",
				premiumIcon: "_2IUxk7I3wGLF67ECxWJaKF",
				titleMain: "_23AsioP9LFdnWNWvf2JxuY",
				titleDescription: "UZLxEtKcYjKnAtMic2BtE",
				closeButton: "W3hCwevNo10JOueQq9XCa",
				closeIcon: "_2Y-ZxM1D66jXobSnwtF5zy",
				premiumPurchaseBody: "_1f5Hj-YmiFvUddjOo3BXUn",
				creditCard: "_1mWVaEygz0IbIgt4I7nhA6",
				selectPayment: "_1W5FK94KCTY0oE-NFNp155",
				checkoutFooter: "_1GdfJOpcU3r4Y3Bj3aURo9",
				premiumPurchaseTotal: "_2DF2iuoYj11YJxwHtRl6k2",
				membershipDescription: "_2bHvYuy1c3aeL3OpvcSrzV",
				premiumPurchaseSelectPaymentFooter: "BKDWqNtFTGRZSXrRVdDzB",
				coinBalance: "_3VRMoYSGnuSeMurnm9AnE",
				premiumPurchaseButton: "_1VvnA3djGhzHigTOUn58Dj",
				paymentCompleteHeader: "_1LcmOk7SUoKQdR-v7knn89",
				paymentCompleteTitleMain: "_1UtE2Rjc4QGWjNU3F7ObST",
				paymentCompleteTitleDescription: "Og7AfSzv9RffDd4Ck06B5",
				paymentCompleteTitleItem: "_3SMYmC6QG8OyE_fULA-V0R",
				paymentCompleteTitleItemLast: "_3idbK2oKeR-XNpK_Q-QgIh",
				poweredByStripeIcon: "_3t8d-2wwATteV4UXKFhSb1",
				errorMessage: "_1625HJ3ZMN4xwl3cV7g2E2",
				stripeForm: "Qe2dMlpz4gcQu7Pb44kZ"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				s = r("./src/config.ts"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/models/Gold/Premium/index.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				g = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				w = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/models/Gold/ProductOffer.ts"),
				x = r("./src/reddit/selectors/gold/productOffers.ts"),
				C = r("./node_modules/fbt/lib/FbtPublic.js"),
				k = r("./src/lib/loadRedditAdsPixel.ts"),
				O = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				j = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				M = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				E = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				T = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				I = r.n(T);
			class A extends o.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(g.i)()), Object(k.b)()
				}
				render() {
					const e = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: I.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${s.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, o.a.createElement(E.a, {
						className: I.a.premiumIcon,
						title: C.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), o.a.createElement("div", {
						className: I.a.paymentCompleteTitleMain
					}, C.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), o.a.createElement("div", {
						className: I.a.paymentCompleteTitleDescription
					}, o.a.createElement("div", {
						className: I.a.paymentCompleteTitleItem
					}, C.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), o.a.createElement("div", {
						className: I.a.paymentCompleteTitleItem
					}, o.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, C.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), o.a.createElement("div", {
						className: I.a.paymentCompleteTitleItemLast
					}, Object(M.a)(C.fbt._("Find more about {anchor text} on Reddit.", [C.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": o.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), o.a.createElement("button", {
						className: I.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(j.b, {
						className: I.a.closeIcon,
						"data-redditstyle": !0
					}))), o.a.createElement(O.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var S = Object(f.c)(A),
				N = r("./node_modules/react-stripe-elements/es/index.js"),
				F = r("./src/reddit/actions/gold/productOfferPurchase.ts");
			var R = ({
					paypalUrl: e,
					finishPaymentCallback: t
				}) => {
					let r = window;
					const o = Object(n.useCallback)(e => {
						const n = a(e);
						"paypal-finish.success.framedmodal" === (null == n ? void 0 : n.type) ? (t(), null == r || r.close()) : "paypal-finish.cancel.framedmodal" === (null == n ? void 0 : n.type) && (null == r || r.close())
					}, [t, r]);
					if (Object(n.useEffect)(() => (window.addEventListener("message", o, !1), () => window.removeEventListener("message", o)), [o]), e) {
						const t = 580,
							n = 740,
							o = Math.max(window.screenX + Math.round((window.outerWidth - t) / 2), 0),
							a = Math.max(window.screenY + Math.round((window.outerHeight - n) / 2), 0);
						r = window.open(`${e}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${n},width=${t},top=${a},left=${o},modal=yes,alwaysRaised=yes`)
					}
					const a = e => {
						try {
							return "string" == typeof e.data ? JSON.parse(e.data) : e.data
						} catch (t) {
							return
						}
					}
				},
				L = r("./src/reddit/hooks/useThunkDispatch.ts"),
				G = r("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var U = ({
					className: e,
					productsCount: t,
					productOffer: r,
					productOfferType: c
				}) => {
					const s = Object(L.a)(),
						i = Object(a.e)(_.j),
						[d, l] = Object(n.useState)(!1),
						[u, m] = Object(n.useState)(""),
						p = Object(n.useCallback)(() => {
							c === v.c.Premium && i && s(Object(F.h)({
								user: i
							}))
						}, [s, c, i]);
					R({
						paypalUrl: u,
						finishPaymentCallback: p
					});
					return o.a.createElement(G.q, {
						onClick: async () => {
							if (!r) return;
							l(!0);
							const e = await s(Object(F.f)(r, !1, t, c));
							(null == e ? void 0 : e.url) && m(e.url), l(!1)
						},
						className: e,
						disabled: d
					}, B._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				},
				D = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = Object(c.c)({
				isAnonymous: D.c,
				savedCardsPending: w.w,
				stripeTokenPending: w.m
			}), K = Object(a.b)(H);
			var Y = Object(N.injectStripe)(K(({
					className: e,
					isAnonymous: t,
					productOffer: r,
					productsCount: n,
					savedCardsPending: c,
					stripe: s,
					stripeTokenPending: i,
					productOfferType: d
				}) => {
					const l = Object(a.d)(),
						u = i || c;
					return o.a.createElement(G.q, {
						onClick: () => {
							s && r && l(Object(F.j)(s, r, t, n, d))
						},
						className: e,
						disabled: u || !s
					}, W._("Complete purchase", null, {
						hk: "KaR26"
					}))
				})),
				q = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				X = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				Q = r("./src/reddit/hooks/useStripe.ts");
			var V = e => o.a.createElement("div", {
				className: I.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${s.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, o.a.createElement(E.a, {
				className: I.a.premiumIcon,
				title: C.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				})
			}), o.a.createElement("div", {
				className: I.a.titleMain
			}, C.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), o.a.createElement("div", {
				className: I.a.titleDescription
			}, C.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [C.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), o.a.createElement("button", {
				className: I.a.closeButton,
				onClick: e.onCloseClick
			}, o.a.createElement(j.b, {
				className: I.a.closeIcon,
				"data-redditstyle": !0
			})));
			var z = e => {
				const t = Object(Q.a)(),
					r = (e.total / 100).toLocaleString(),
					n = e.isAnnualPremium ? C.fbt._("yearly", null, {
						hk: "10Ao7X"
					}) : C.fbt._("monthly", null, {
						hk: "2X3LdO"
					}),
					a = e.isAnnualPremium ? C.fbt._("year", null, {
						hk: "4hYQdN"
					}) : C.fbt._("month", null, {
						hk: "1l20Gw"
					}),
					c = e.selectedPayment === l.Eb,
					s = e.selectedPayment === l.Db,
					i = c ? U : Y;
				return o.a.createElement(N.StripeProvider, {
					stripe: t
				}, o.a.createElement(N.Elements, null, o.a.createElement(o.a.Fragment, null, o.a.createElement(V, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), o.a.createElement("div", {
					className: I.a.premiumPurchaseBody
				}, o.a.createElement(q.a, {
					className: I.a.selectPayment,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), s && o.a.createElement("div", {
					className: I.a.creditCard
				}, o.a.createElement(X.a, {
					nightmode: e.nightmode,
					className: I.a.stripeForm,
					shouldDeleteCardWithGql: !0
				})), o.a.createElement("div", {
					className: I.a.checkoutFooter
				}, o.a.createElement("div", {
					className: I.a.premiumPurchaseTotal
				}, C.fbt._("Total: {Price}/{Membership Term}", [C.fbt._param("Price", `$${r}`), C.fbt._param("Membership Term", n)], {
					hk: "1islUR"
				}))), c && e.paypalErrorMessage && o.a.createElement("div", {
					className: I.a.errorMessage
				}, e.paypalErrorMessage), s && e.stripeErrorMessage && o.a.createElement("div", {
					className: I.a.errorMessage
				}, e.stripeErrorMessage), o.a.createElement("div", {
					className: I.a.membershipDescription
				}, C.fbt._("By completing your purchase, you are agreeing to automatic payments for Reddit Premium and Reddit’s {=User Agreement} and {=Privacy Policy}. Your Premium subscription will auto-renew {Renewal Term} for {Price} (plus tax where applicable). Cancel anytime in User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next {Length of term}. No partial refunds.", [C.fbt._param("=User Agreement", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, C.fbt._("User Agreement", null, {
					hk: "4qnrFW"
				}))), C.fbt._param("=Privacy Policy", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, C.fbt._("Privacy Policy", null, {
					hk: "2PtUaD"
				}))), C.fbt._param("Renewal Term", n), C.fbt._param("Price", `$${r}`), C.fbt._param("Length of term", a)], {
					hk: "2gscIO"
				}))), o.a.createElement("div", {
					className: I.a.premiumPurchaseSelectPaymentFooter
				}, e.premiumProductOffer && o.a.createElement(i, {
					productsCount: 1,
					className: I.a.premiumPurchaseButton,
					productOffer: e.premiumProductOffer,
					productOfferType: v.c.Premium
				})))))
			};

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = Object(c.c)({
					activePremiumPackage: w.a,
					activePage: w.n,
					allowNavigationCallback: e => {
						const t = Object(P.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: _.W,
					passthrough: w.e,
					selectedPayment: w.c,
					stripeErrorMessage: w.j,
					stripeTokenPending: w.m,
					paypalErrorMessage: w.d,
					userName: e => {
						const t = Object(_.j)(e);
						return `u/${Object(y.e)(t)}`
					},
					renewInterval: w.p,
					premiumProductOffer: x.d,
					premiumPrice: x.b
				}),
				Z = Object(a.b)(J, (e, t) => ({
					closeModal: () => e(Object(p.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(p.closePremiumPurchaseModal)()),
					onCompletePurchaseClick: t => e(Object(p.stripePremiumPurchaseRequested)(t)),
					onPaymentSelected: t => e(Object(m.selectPaymentMethod)(t))
				})),
				ee = Object(i.a)(({
					sendEvent: e,
					activePage: t,
					activePremiumPackage: r,
					className: a,
					nightmode: c,
					selectedPayment: i,
					onCompletePurchaseClick: d,
					onPaymentSelected: m,
					onTryCloseModal: p,
					passthrough: f,
					stripeErrorMessage: h,
					stripeTokenPending: y,
					paypalErrorMessage: w,
					userName: P,
					renewInterval: _,
					premiumProductOffer: x,
					premiumPrice: C
				}) => {
					let k = l.vb,
						O = !1;
					x && C ? (k = C, O = _ === v.b.Year) : r && (k = r ? r.pennies : l.vb, O = !!r && r.frequency === u.c.Yearly);
					const j = Object(n.useCallback)(e => {
						if (27 === e.keyCode) return p()
					}, [p]);
					return Object(n.useEffect)(() => (document.addEventListener("keydown", j), Object(b.d)(b.a.GoldPayment, !1), e(Object(g.h)()), () => document.removeEventListener("keydown", j)), [j, e]), Object(n.useEffect)(() => {
						h && e(Object(g.f)())
					}, [e, h]), o.a.createElement("div", {
						className: a
					}, "selectPayment" === t && o.a.createElement(z, {
						nightmode: c,
						onCloseModal: p,
						onCompletePurchaseClick: d,
						onPaymentSelected: m,
						isAnnualPremium: O,
						passthrough: f,
						paypalButtonId: (null == r ? void 0 : r.paypalButtonId) || s.a.paypal.buttons.premium,
						selectedPayment: i,
						stripeErrorMessage: h,
						stripeTokenPending: y,
						paypalErrorMessage: w,
						premiumProductOffer: x,
						total: k,
						userName: P
					}), "paymentCompleted" === t && o.a.createElement(S, {
						onCloseClick: p
					}))
				}),
				te = {
					backgroundColor: h.b.overlayReportFlow
				};
			t.default = Z(Object(f.c)(class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(g.b)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return o.a.createElement(ee, $({}, this.props, {
						className: Object(d.a)(this.props.className, I.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: te,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, r) {
			"use strict";
			var n, o;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(n || (n = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(o || (o = {}))
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, r) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				s = r("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = r("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = r.n(i);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(a.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? o.a.createElement(s.a, {
				className: d.a.checkboxSelected
			}) : o.a.createElement(c.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/constants/keycodes.ts"),
				d = r("./src/reddit/controls/Input/index.m.less"),
				l = r.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === i.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...r
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(c.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(a.b)(null, {
				closeModal: s.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(c);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(s.a)(l);
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: n.hb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: s
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: s
				};
				return Object(o.a)(Object(a.a)(e, [c.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: s,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: s
				};
				return Object(o.a)(Object(a.a)(e, [c.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: s,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: s,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(a.a)(e, [c.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: s,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: f
			}) => {
				const h = {
					award_id: e,
					coins: r,
					correlation_id: s,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: f
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: s,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: s,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function a(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => o.a.createElement(o.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/elementIds.ts");
			let o;
			const a = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(n.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				c = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, o || (o = s(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${o}px`;
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = `${o}px`)
				},
				s = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				i = e => {
					if (!e || !document.body) return 0;
					const t = s(document.body),
						r = e.offsetWidth - e.scrollWidth;
					return t || r
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return g
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/helpers/trackers/gild.ts");
			const s = e => ({
					...o.defaults(e),
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				i = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(c.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...s(e),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...s(t),
					source: "awards",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...s(n),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => o => ({
					...s(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...s(n),
					source: "create_award",
					action: "click",
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? i(r) : null
				}),
				f = (e, t, r) => n => ({
					...s(n),
					source: "create_award",
					action: e,
					correlationId: Object(a.c)(a.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? i(r) : null
				}),
				h = (e, t, r) => n => ({
					...s(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: i(e),
					profile: o.profileById(n, t),
					subreddit: o.subredditById(n, t)
				}),
				b = (e, t) => h(e, t, "disable_in_community"),
				g = (e, t) => h(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return f
			})), r.d(t, "clickHideAward", (function() {
				return h
			})), r.d(t, "clickConfirmHideAward", (function() {
				return b
			})), r.d(t, "clickCancelHideAward", (function() {
				return g
			})), r.d(t, "clickAwardReportFlow", (function() {
				return w
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return P
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return _
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return v
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return x
			})), r.d(t, "clickReportAward", (function() {
				return C
			})), r.d(t, "clickCancelReportAward", (function() {
				return k
			})), r.d(t, "clickConfirmReportAward", (function() {
				return O
			})), r.d(t, "viewGildModalEvent", (function() {
				return j
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return M
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return E
			})), r.d(t, "clickMessageInputEvent", (function() {
				return T
			})), r.d(t, "typeMessageInputEvent", (function() {
				return I
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return S
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return N
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return F
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), r.d(t, "clickNextButtonEvent", (function() {
				return L
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return G
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), r.d(t, "clickFilterEvent", (function() {
				return U
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return D
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return W
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/telemetry/models/GoldPurchase.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? a.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? a.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? a.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? a.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? a.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? a.GoldPurchaseType.GidGlobal : a.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...o.defaults(e),
					comment: t ? o.comment(e, t) : void 0,
					correlationId: Object(i.b)(e) || Object(c.d)(c.a.GildingFlow, !1),
					post: t ? o.post(e, t) : void 0,
					screen: o.screen(e),
					subreddit: o.subreddit(e),
					userSubreddit: o.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(s.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(s.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(s.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(s.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => r => ({
					...u(r, t),
					source: Object(s.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				y = e => (t, r) => n => ({
					...u(n, r),
					source: Object(s.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				w = y("award_hovercard_report"),
				P = y("cancel_award_hovercard_report"),
				_ = y("flag_award"),
				v = y("cancel_flag_award"),
				x = y("confirm_flag_award"),
				C = y("report_community_award"),
				k = y("cancel_report_community_award"),
				O = y("confirm_report_community_award"),
				j = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				M = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				E = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				I = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				N = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(s.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				F = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(s.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				G = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: o
				}) => a => ({
					...u(a, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(s.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				U = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				D = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				W = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return h
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return x
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/selectors/gold/giveAwards.ts"),
				c = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const h = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, h = !!r, b = a.b(e), g = b ? Object(u.getAwardTypeFromAward)(b) : null, y = h ? g : s.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, w = r ? Object(p.a)(r) ? "comment" : "post" : void 0, P = l || s.t(e), _ = [...Object(c.d)(e), ...Object(c.f)(e)].filter(e => e.mobileId === P)[0], v = t.offerContext || (b && 0 === b.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(_, h)), x = _ ? Math.round(1e4 * (_.baselinePennies - _.pennies) / _.baselinePennies) / 100 : 0, C = _ ? Math.round(1e4 * (_.coins - _.baselineCoins) / _.coins) / 100 : 0, k = _ ? _.baselinePennies !== _.pennies ? `${x}_percent_price` : _.baselineCoins !== _.coins ? `${C}_percent_bonus` : void 0 : void 0, O = y === d.GoldPurchaseType.Premium ? n.vb : _ ? _.pennies : void 0;
					return {
						...i.defaults(e),
						comment: r ? i.comment(e, r) : null,
						correlationId: s.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: r ? i.post(e, r) : null,
						screen: i.screen(e),
						subreddit: r ? i.subreddit(e) : null,
						goldPurchase: {
							...b ? Object(f.a)(b) : null,
							type: y,
							gildedContent: h,
							contentType: w,
							numberCoins: _ ? _.coins : void 0,
							offerContext: v,
							offerType: k
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: O
						},
						purchase: {
							priceMicros: O
						}
					}
				},
				b = (e, t, r) => n => ({
					...h(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				y = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				w = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				P = (e, t) => r => ({
					...h(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				_ = e => t => ({
					...h(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				v = (e, t, r) => n => {
					const o = h(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : s.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				x = e => t => {
					const r = h(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function o() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				s = r.n(c);
			const i = r("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(a.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", s.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				s = r.n(c);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement("svg", i({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(a.a)(s.a.checkbox, e)
			}, t), o.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, r) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/layout/row/Inline/index.m.less"),
				a = r.n(o);
			t.a = n.a.div("inlineRow", a.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const o = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				a = (e, t = !1) => {
					const r = [];
					for (const n in o) {
						const a = o[n];
						(a.priceInCoins <= e || t) && r.push(a)
					}
					return r
				},
				c = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				s = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				a = e => e.gild.isAnonymous,
				c = e => e.gild.isIframed,
				s = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.8f443a78ccf9a7144e6a.js.map