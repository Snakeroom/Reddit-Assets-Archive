// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.92c2c71f38f7e39cef38.js
// Retrieved at 8/5/2021, 6:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return i
			})), n.d(t, "paymentCompleted", (function() {
				return d
			})), n.d(t, "cardNameInput", (function() {
				return u
			})), n.d(t, "postalCodeInput", (function() {
				return m
			})), n.d(t, "cardNameEmpty", (function() {
				return p
			})), n.d(t, "cardElementChange", (function() {
				return b
			})), n.d(t, "stripeTokenPending", (function() {
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return f
			})), n.d(t, "stripeApiError", (function() {
				return w
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return P
			})), n.d(t, "paypalApiError", (function() {
				return E
			})), n.d(t, "toggleRememberCard", (function() {
				return g
			})), n.d(t, "selectSavedCard", (function() {
				return x
			})), n.d(t, "_deleteSavedCard", (function() {
				return _
			})), n.d(t, "deleteSavedCard", (function() {
				return v
			})), n.d(t, "savedCardsPending", (function() {
				return y
			})), n.d(t, "savedCardsSuccess", (function() {
				return M
			})), n.d(t, "loadSavedCards", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/gold/purchase.ts"),
				c = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				l = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = Object(a.a)(c.B),
				d = Object(a.a)(c.w),
				u = Object(a.a)(c.b),
				m = Object(a.a)(c.y),
				p = Object(a.a)(c.a),
				b = Object(a.a)(c.E),
				h = Object(a.a)(c.G),
				f = Object(a.a)(c.F),
				w = Object(a.a)(c.D),
				P = e => async (t, n) => {
					const s = n(),
						a = Object(l.h)(s),
						o = Object(l.l)(s),
						{
							token: c,
							error: i
						} = await e.createToken({
							name: a,
							address_zip: o
						});
					if (a.trim()) {
						if (!i && c) return c;
						t(f(i || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, E = Object(a.a)(c.x), g = Object(a.a)(c.H), x = Object(a.a)(c.C), _ = Object(a.a)(c.g), v = e => async (t, n, {
					apiContext: r
				}) => {
					t(_(e));
					try {
						const t = await Object(o.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, y = Object(a.a)(c.z), M = Object(a.a)(c.A), j = () => async (e, t, {
					apiContext: n
				}) => {
					e(y());
					try {
						const t = await Object(o.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(M(r)), r[0] && e(x(r[0].cardId))
					} catch (r) {
						s.c.captureException(r), e(M([]))
					}
				}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, n) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				l = n.n(c);
			const i = ({
				className: e,
				onClick: t
			}) => s.a.createElement("button", {
				className: Object(a.a)(l.a.closeButton, e),
				onClick: t
			}, s.a.createElement(o.a, {
				className: l.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, n) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = n.n(o);
			const l = e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement("picture", null, a.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), a.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), a.a.createElement("img", {
				className: c.a.image,
				src: `${r.a.assetPath}/img/powerups/powerup.png`
			})))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				c = n("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				l = n.n(c);
			t.a = e => a.a.createElement("header", {
				className: Object(r.a)(l.a.container, e.className)
			}, a.a.createElement(o.a, {
				className: l.a.imageContainer
			}), a.a.createElement("div", null, a.a.createElement("h2", {
				className: l.a.title
			}, e.title), a.a.createElement("h3", {
				className: l.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2BuBEDqT7lkg3pO2WKDev7",
				control: "_1favHXSOScXwn1RBgoTcQR",
				locked: "_1zr44sXfpGbr_0IvOKMhUe",
				button: "_3paafvflLXs20pV91RRAB0",
				buttonIconElement: "_1SxKXgyGKQ5q6hRVXs8exA",
				decrementButton: "_2ZZ4y8uLTNayuVN_S-2Nf5",
				incrementButton: "_190moU3v0ZouK_rrsulWXf",
				value: "_2kUt45BOMdEQHtdaCmdozL",
				icon: "_5d5MTurdJPq_vddOMX6pc"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, n) {
			e.exports = {
				progressControl: "_2SIcayqih-ki47E6ubsDLN",
				details: "_20wZ73zqa9DS0namcCJdoA",
				purchaseDetails: "SW6YZoTb2xUeU8o-3IQOF",
				anonymousCheckbox: "_2TwVYjhqi8rCciDTHrMPTc",
				paymentMethodTitle: "_3ZkB3JIS9oGV5ZNPEoYrOm",
				paymentMethodSelector: "_2zJhl9SVW67lTeXQgaeNiV",
				errorMessage: "_2Jj9FQM628kGz4Zsu-DATD",
				stripeForm: "_27fBu-SIMK3yPRcZeNUi-",
				button: "_2zABc383welm4OSB9jgeQG",
				Icon: "_20ZTInSCuk9gGcfQ6D7pel",
				icon: "_20ZTInSCuk9gGcfQ6D7pel",
				isLeft: "ivqRDi80dfqnzNnU7r1Bp",
				isRight: "_3l-suZErGWJnDlAcWKjk15",
				premiumDescription: "_1TlVluSbXOqttjoOmuZD2Q",
				premiumIconWrapper: "_3NK13DzzCxYXpEyi7Z1D-P",
				premiumIcon: "_13HsDRX-CPOf5B1mORjNbn",
				description: "_2kdlUzSaYOfKTKm4IaA-by"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd",
				header: "_2lqkgMZi8MtfVB-gqhYqy8"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				u = n("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./node_modules/react-stripe-elements/es/index.js"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				f = n("./src/lib/constants/index.ts"),
				w = n("./src/reddit/helpers/trackers/powerups.ts"),
				P = n("./src/reddit/actions/gold/powerups.ts"),
				E = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				g = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				x = n("./src/reddit/models/Gold/ProductOffer.ts"),
				_ = n("./src/reddit/selectors/gold/powerups/index.ts"),
				v = n("./src/reddit/selectors/gold/productOffers.ts"),
				y = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				O = n("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				C = n("./src/reddit/components/StripePaymentForm/index.tsx"),
				N = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				k = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				L = n("./src/reddit/hooks/useStripe.ts"),
				S = n("./src/reddit/hooks/useThunkDispatch.ts"),
				A = n("./src/reddit/controls/Button/index.tsx"),
				z = n("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), B = Object(o.c)({
				currentUser: M.j,
				isAnonymous: _.c,
				powerupsCount: _.d,
				productOffer: v.a
			});
			var T = Object(a.b)(B)(s.a.memo((function(e) {
					const {
						className: t,
						currentUser: n,
						isAnonymous: a,
						powerupsCount: o,
						productOffer: c,
						subredditId: l
					} = e, i = Object(S.a)();
					Object(r.useEffect)(() => (window.addEventListener("message", p, !1), () => window.removeEventListener("message", p)), []);
					const [d, u] = Object(r.useState)(!1);
					let m = null;
					if (!n) return null;
					const p = e => {
							const t = (e => {
								try {
									return "string" == typeof e.data ? JSON.parse(e.data) : e.data
								} catch (t) {
									return
								}
							})(e);
							t && t.type && ("paypal-finish.success.framedmodal" === t.type ? (b(), m && m.close()) : "paypal-finish.cancel.framedmodal" === t.type && m && m.close())
						},
						b = () => {
							i(Object(E.g)({
								subredditId: l,
								powerupsCount: o,
								user: n,
								isAnonymous: a
							}))
						};
					return s.a.createElement(A.i, {
						onClick: async () => {
							if (!c) return;
							u(!0);
							const e = await i(Object(E.f)(c, a, o, x.c.Powerups, l));
							if (e) {
								const {
									url: t
								} = e, n = 580, r = 740, s = Math.max(window.screenX + Math.round((window.outerWidth - n) / 2), 0), a = Math.max(window.screenY + Math.round((window.outerHeight - r) / 2), 0);
								m = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${r},width=${n},top=${a},left=${s},modal=yes,alwaysRaised=yes`)
							}
							u(!1)
						},
						className: t,
						disabled: d
					}, d ? s.a.createElement(z.a, {
						sizePx: 12,
						center: !0
					}) : I._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				D = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				F = n.n(D);
			const {
				fbt: U
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				className: e,
				subredditId: t
			}) => {
				const n = Object(a.e)(_.c),
					r = Object(a.e)(_.b),
					o = Object(a.e)(_.d),
					c = Object(a.d)();
				return s.a.createElement(A.q, {
					priority: A.b.Primary,
					onClick: () => {
						c(Object(P.i)(t, o, n))
					},
					className: Object(l.a)(e, F.a.button),
					disabled: r
				}, r ? s.a.createElement(z.a, {
					className: F.a.loadingIcon,
					sizePx: 12
				}) : U._({
					"*": "Apply Your Powerups",
					_1: "Apply Your Powerup"
				}, [U._plural(o)], {
					hk: "4zdKUc"
				}))
			};
			var R = n("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				q = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				X = n.n(q);
			var Z = function(e) {
					const {
						className: t,
						onChange: n,
						style: r,
						value: a,
						min: o,
						max: c
					} = e, i = e => n(Math.max(Math.min(a + e, c || Number.POSITIVE_INFINITY), o || 0)), d = c === o, u = Object(R.a)(a);
					return s.a.createElement("div", {
						className: Object(l.a)(t, X.a.container),
						style: r
					}, s.a.createElement("div", {
						className: Object(l.a)(X.a.control, {
							[X.a.locked]: d
						})
					}, !d && s.a.createElement("button", {
						className: Object(l.a)(X.a.button, X.a.decrementButton),
						onClick: () => i(-1)
					}), s.a.createElement("div", {
						className: X.a.value
					}, s.a.createElement(u, {
						className: X.a.icon
					}), s.a.createElement("span", null, a)), !d && s.a.createElement("button", {
						className: Object(l.a)(X.a.button, X.a.incrementButton),
						onClick: () => i(1)
					})))
				},
				V = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				W = n.n(V);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
					const {
						additionalCount: t,
						className: n,
						count: r,
						maxCount: a
					} = e;
					if (!a) return null;
					const o = Math.min(a, r) / a,
						c = Math.min(a, r + (t || 0)) / a;
					return s.a.createElement("div", {
						className: n
					}, s.a.createElement("div", {
						className: W.a.titleRow
					}, s.a.createElement("span", null, K._("Powerups", null, {
						hk: "DrcXp"
					})), s.a.createElement("span", null, r < a ? `${r}/${a}` : r)), s.a.createElement("div", {
						className: W.a.barRow
					}, s.a.createElement("div", {
						className: W.a.track
					}), s.a.createElement("div", {
						className: W.a.progress,
						style: {
							width: `${100*o}%`
						}
					}), t && s.a.createElement("div", {
						className: W.a.additionalProgress,
						style: {
							width: `${100*(c-o)}%`,
							left: `${100*o}%`
						}
					})))
				},
				Y = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				G = n.n(Y);
			var Q = function(e) {
				const {
					className: t,
					count: n,
					maxCount: r,
					onChange: a,
					powerups: o
				} = e, {
					tier: c,
					tiersInfo: i
				} = o, d = (i[c] || i[c - 1]).powerupsCost;
				if (!d) return null;
				const u = Math.min(d, d / 2 + o.count / 2, o.count + (n || 0) / 2) / d;
				return s.a.createElement("div", {
					className: Object(l.a)(t, G.a.container)
				}, s.a.createElement($, {
					additionalCount: n,
					className: G.a.bar,
					count: o.count,
					maxCount: d
				}), s.a.createElement(Z, {
					className: G.a.count,
					style: {
						left: `${100*u}%`
					},
					value: n,
					min: 1,
					max: r,
					onChange: a
				}))
			};
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = Object(o.c)({
				isAnonymous: _.c,
				powerupsCount: _.d,
				productOffer: v.a,
				savedCardsPending: y.w,
				stripeTokenPending: y.m
			}), te = Object(a.b)(ee);
			var ne = Object(b.injectStripe)(te((function(e) {
					const {
						className: t,
						isAnonymous: n,
						powerupsCount: o,
						productOffer: c,
						savedCardsPending: l,
						stripe: i,
						stripeTokenPending: d,
						subredditId: u
					} = e, m = Object(a.d)(), [p, b] = Object(r.useState)(!1), h = d || l;
					return s.a.createElement(A.i, {
						onClick: async () => {
							i && c && (b(!0), await m(Object(E.j)(i, c, n, o, x.c.Powerups, u)), b(!1))
						},
						className: t,
						disabled: h || !i || p
					}, p ? s.a.createElement(z.a, {
						sizePx: 12,
						center: !0
					}) : J._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				re = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				se = n.n(re);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = 100, ce = Object(o.c)({
				isAnonymous: _.c,
				isNightMode: M.V,
				paypalErrorMessage: y.d,
				powerups: _.i,
				powerupsCount: _.d,
				productOffer: (e, {
					subredditId: t
				}) => {
					const n = Object(v.h)(e, {
						subredditId: t,
						type: x.c.Powerups
					});
					return n && n[0]
				},
				stripeErrorMessage: y.j,
				userPowerupsData: _.v
			});
			var le = Object(a.b)(ce)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: n,
						onCloseModal: o,
						paypalErrorMessage: c,
						powerups: l,
						powerupsCount: i,
						productOffer: d,
						stripeErrorMessage: u,
						subredditId: m,
						userPowerupsData: p
					} = e, x = Object(a.d)(), [_, v] = Object(r.useState)(f.Eb);
					Object(r.useEffect)(() => {
						x(Object(E.d)()), x(Object(g.selectPaymentMethod)(_))
					}, []);
					const y = Object(h.a)();
					Object(r.useEffect)(() => {
						y(Object(w.g)())
					}, []);
					const M = Object(L.a)(),
						S = d && d.pricePackages.length ? d.pricePackages[0].price : 0;
					if (!S || !l) return o(), null;
					const A = (i * S / 100).toFixed(2),
						z = !!(null == p ? void 0 : p.freeCount);
					return s.a.createElement(b.StripeProvider, {
						stripe: M
					}, s.a.createElement(b.Elements, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(Q, {
						className: se.a.progressControl,
						count: i,
						maxCount: z && p ? p.freeCount : oe,
						onChange: e => x(Object(P.h)(e)),
						powerups: l
					}), s.a.createElement("div", {
						className: se.a.details
					}, s.a.createElement(N.a, {
						className: se.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => x(Object(P.c)(e)))(!t),
						text: ae._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !z && s.a.createElement("div", {
						className: se.a.purchaseDetails
					}, ae._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [ae._plural(i, "powerups"), ae._param("powerup price", `$${A.toLocaleString()}`)], {
						hk: "3cOqa5"
					}))), !z && s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
						className: se.a.paymentMethodTitle
					}, ae._("Payment Method", null, {
						hk: "3EbT3q"
					})), s.a.createElement(O.a, {
						className: se.a.paymentMethodSelector,
						nightmode: n,
						selectedPayment: _,
						onPaymentSelected: e => {
							v(e), x(Object(g.selectPaymentMethod)(e))
						}
					}), _ === f.Db && u && s.a.createElement("div", {
						className: se.a.errorMessage
					}, u), _ === f.Eb && c && s.a.createElement("div", {
						className: se.a.errorMessage
					}, c), _ === f.Db && s.a.createElement(C.a, {
						nightmode: n,
						className: se.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), _ === f.Eb && s.a.createElement(T, {
						className: se.a.button,
						subredditId: m
					}), _ === f.Db && s.a.createElement(ne, {
						className: se.a.button,
						subredditId: m
					}), s.a.createElement("p", {
						className: se.a.description
					}, ae._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [ae._param("=User Agreement", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ae._("User Agreement", null, {
						hk: "3U1KuA"
					}))), ae._param("=Privacy Policy", s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ae._("Privacy Policy", null, {
						hk: "Z8otX"
					}))), ae._param("previews terms of use", s.a.createElement(j.a, null)), ae._param("powerup price", ` $${A.toLocaleString()} `), ae._param("=User Settings", s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, ae._("User Settings", null, {
						hk: "3TNXSe"
					})))], {
						hk: "NLnVj"
					}))), z && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: se.a.premiumDescription
					}, s.a.createElement("div", {
						className: se.a.premiumIconWrapper
					}, s.a.createElement(k.a, {
						className: se.a.premiumIcon
					})), s.a.createElement("span", null, ae._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), s.a.createElement(H, {
						className: se.a.button,
						subredditId: m
					})))))
				})),
				ie = n("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				de = n.n(ie);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pe = Object(p.t)(), be = Object(o.c)({
				currentSubreddit: p.q
			}), he = Object(a.b)(be);
			const fe = Object(c.a)(pe(he((function(e) {
				const {
					currentSubreddit: t
				} = e, n = Object(a.d)(), r = () => n(Object(i.g)(m.a.ECON_POWERUPS_PURCHASE));
				return t ? s.a.createElement("div", {
					className: de.a.inner
				}, s.a.createElement(u.a, {
					className: de.a.header,
					title: me._("Powerup {r/community}", [me._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: me._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), s.a.createElement(d.a, {
					onClick: r
				}), s.a.createElement(le, {
					subredditId: t.id,
					onCloseModal: r
				})) : (r(), null)
			}))));
			t.default = e => s.a.createElement(fe, ue({}, e, {
				className: Object(l.a)(e.className, de.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			const {
				fbt: a
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function o({
				className: e
			}) {
				return s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, a._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = n("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const l = 2,
				i = 5;

			function d(e) {
				return e >= i ? c.a : e >= l ? o.a : a.a
			}

			function u(e) {
				var t;
				const n = !e,
					s = `${r.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return n ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t,
				isAltruismMessagingEnabled: n
			}) => e || (n ? s.fbt._({
				"*": "Anonymous Supporters",
				_1: "Anonymous Supporter"
			}, [s.fbt._plural(t)], {
				hk: "42rXDr"
			}).toString() : s.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [s.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString())
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(r.d)()
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), s.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.92c2c71f38f7e39cef38.js.map