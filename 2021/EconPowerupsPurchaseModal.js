// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.ffd93ebbf92d019fdc98.js
// Retrieved at 7/14/2021, 4:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return i
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return b
			})), r.d(t, "stripeTokenError", (function() {
				return f
			})), r.d(t, "stripeApiError", (function() {
				return w
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return P
			})), r.d(t, "paypalApiError", (function() {
				return E
			})), r.d(t, "toggleRememberCard", (function() {
				return g
			})), r.d(t, "selectSavedCard", (function() {
				return x
			})), r.d(t, "_deleteSavedCard", (function() {
				return _
			})), r.d(t, "deleteSavedCard", (function() {
				return v
			})), r.d(t, "savedCardsPending", (function() {
				return y
			})), r.d(t, "savedCardsSuccess", (function() {
				return M
			})), r.d(t, "loadSavedCards", (function() {
				return O
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = Object(s.a)(c.B),
				d = Object(s.a)(c.w),
				u = Object(s.a)(c.b),
				m = Object(s.a)(c.y),
				p = Object(s.a)(c.a),
				h = Object(s.a)(c.E),
				b = Object(s.a)(c.G),
				f = Object(s.a)(c.F),
				w = Object(s.a)(c.D),
				P = e => async (t, r) => {
					const n = r(),
						s = Object(l.h)(n),
						o = Object(l.l)(n),
						{
							token: c,
							error: i
						} = await e.createToken({
							name: s,
							address_zip: o
						});
					if (s.trim()) {
						if (!i && c) return c;
						t(f(i || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, E = Object(s.a)(c.x), g = Object(s.a)(c.H), x = Object(s.a)(c.C), _ = Object(s.a)(c.g), v = e => async (t, r, {
					apiContext: a
				}) => {
					t(_(e));
					try {
						const t = await Object(o.a)(a(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						n.c.captureException(s)
					}
				}, y = Object(s.a)(c.z), M = Object(s.a)(c.A), O = () => async (e, t, {
					apiContext: r
				}) => {
					e(y());
					try {
						const t = await Object(o.b)(r());
						if (t.error) throw new Error(t.error.type);
						const a = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(M(a)), a[0] && e(x(a[0].cardId))
					} catch (a) {
						n.c.captureException(a), e(M([]))
					}
				}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, r) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var a = r("./src/config.ts"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = r.n(o);
			const l = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement("picture", null, s.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), s.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), s.a.createElement("img", {
				className: c.a.image,
				src: `${a.a.assetPath}/img/powerups/powerup.png`
			})))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/lib/classNames/index.ts"),
				n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				c = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				l = r.n(c);
			t.a = e => s.a.createElement("header", {
				className: Object(a.a)(l.a.container, e.className)
			}, s.a.createElement(o.a, {
				className: l.a.imageContainer
			}), s.a.createElement("div", null, s.a.createElement("h2", {
				className: l.a.title
			}, e.title), s.a.createElement("h3", {
				className: l.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd",
				closeButton: "xqo3g-oX5emMzx0ruxYkF",
				closeIcon: "_3FE6QbodV9pkVNpABuNryv",
				header: "_2lqkgMZi8MtfVB-gqhYqy8"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/icons/svgs/Close/index.tsx"),
				p = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				h = r("./node_modules/react-stripe-elements/es/index.js"),
				b = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/lib/constants/index.ts"),
				w = r("./src/reddit/helpers/trackers/powerups.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				E = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				g = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				x = r("./src/reddit/models/Gold/ProductOffer.ts"),
				_ = r("./src/reddit/selectors/gold/powerups/index.ts"),
				v = r("./src/reddit/selectors/gold/productOffers.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				M = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				j = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				N = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				C = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				k = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				L = r("./src/reddit/hooks/useStripe.ts"),
				S = r("./src/reddit/hooks/useThunkDispatch.ts"),
				z = r("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: I
			} = r("./node_modules/fbt/lib/FbtPublic.js"), A = Object(o.c)({
				currentUser: M.j,
				isAnonymous: _.c,
				powerupsCount: _.d,
				productOffer: v.a
			});
			var T = Object(s.b)(A)(n.a.memo((function(e) {
					const {
						className: t,
						currentUser: r,
						isAnonymous: s,
						powerupsCount: o,
						productOffer: c,
						subredditId: l
					} = e, i = Object(S.a)();
					Object(a.useEffect)(() => (window.addEventListener("message", p, !1), () => window.removeEventListener("message", p)), []);
					const [d, u] = Object(a.useState)(!1);
					let m = null;
					if (!r) return null;
					const p = e => {
							const t = (e => {
								try {
									return "string" == typeof e.data ? JSON.parse(e.data) : e.data
								} catch (t) {
									return
								}
							})(e);
							t && t.type && ("paypal-finish.success.framedmodal" === t.type ? (h(), m && m.close()) : "paypal-finish.cancel.framedmodal" === t.type && m && m.close())
						},
						h = () => {
							i(Object(E.g)({
								subredditId: l,
								powerupsCount: o,
								user: r,
								isAnonymous: s
							}))
						};
					return n.a.createElement(z.i, {
						onClick: async () => {
							if (!c) return;
							u(!0);
							const e = await i(Object(E.f)(c, s, o, x.c.Powerups, l));
							if (e) {
								const {
									url: t
								} = e, r = 580, a = 740, n = Math.max(window.screenX + Math.round((window.outerWidth - r) / 2), 0), s = Math.max(window.screenY + Math.round((window.outerHeight - a) / 2), 0);
								m = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${a},width=${r},top=${s},left=${n},modal=yes,alwaysRaised=yes`)
							}
							u(!1)
						},
						className: t,
						disabled: d
					}, I._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				B = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				D = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				F = r.n(D);
			const {
				fbt: U
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(s.e)(_.c),
					a = Object(s.e)(_.b),
					o = Object(s.e)(_.d),
					c = Object(s.d)();
				return n.a.createElement(z.q, {
					priority: z.b.Primary,
					onClick: () => {
						c(Object(P.i)(t, o, r))
					},
					className: Object(d.a)(e, F.a.button),
					disabled: a
				}, a ? n.a.createElement(B.a, {
					className: F.a.loadingIcon,
					sizePx: 12
				}) : U._({
					"*": "Apply Your Powerups",
					_1: "Apply Your Powerup"
				}, [U._plural(o)], {
					hk: "4zdKUc"
				}))
			};
			var R = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				q = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				V = r.n(q);
			var X = function(e) {
					const {
						className: t,
						onChange: r,
						style: a,
						value: s,
						min: o,
						max: c
					} = e, l = e => r(Math.max(Math.min(s + e, c || Number.POSITIVE_INFINITY), o || 0)), i = c === o, u = Object(R.a)(s);
					return n.a.createElement("div", {
						className: Object(d.a)(t, V.a.container),
						style: a
					}, n.a.createElement("div", {
						className: Object(d.a)(V.a.control, {
							[V.a.locked]: i
						})
					}, !i && n.a.createElement("button", {
						className: Object(d.a)(V.a.button, V.a.decrementButton),
						onClick: () => l(-1)
					}), n.a.createElement("div", {
						className: V.a.value
					}, n.a.createElement(u, {
						className: V.a.icon
					}), n.a.createElement("span", null, s)), !i && n.a.createElement("button", {
						className: Object(d.a)(V.a.button, V.a.incrementButton),
						onClick: () => l(1)
					})))
				},
				K = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				Z = r.n(K);
			const {
				fbt: $
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var W = e => {
					const {
						additionalCount: t,
						className: r,
						count: a,
						maxCount: s
					} = e;
					if (!s) return null;
					const o = Math.min(s, a) / s,
						c = Math.min(s, a + (t || 0)) / s;
					return n.a.createElement("div", {
						className: r
					}, n.a.createElement("div", {
						className: Z.a.titleRow
					}, n.a.createElement("span", null, $._("Powerups", null, {
						hk: "DrcXp"
					})), n.a.createElement("span", null, a < s ? `${a}/${s}` : a)), n.a.createElement("div", {
						className: Z.a.barRow
					}, n.a.createElement("div", {
						className: Z.a.track
					}), n.a.createElement("div", {
						className: Z.a.progress,
						style: {
							width: `${100*o}%`
						}
					}), t && n.a.createElement("div", {
						className: Z.a.additionalProgress,
						style: {
							width: `${100*(c-o)}%`,
							left: `${100*o}%`
						}
					})))
				},
				Y = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				G = r.n(Y);
			var Q = function(e) {
				const {
					className: t,
					count: r,
					maxCount: a,
					onChange: s,
					powerups: o
				} = e, {
					tier: c,
					tiersInfo: l
				} = o, i = (l[c] || l[c - 1]).powerupsCost;
				if (!i) return null;
				const u = Math.min(i, i / 2 + o.count / 2, o.count + (r || 0) / 2) / i;
				return n.a.createElement("div", {
					className: Object(d.a)(t, G.a.container)
				}, n.a.createElement(W, {
					additionalCount: r,
					className: G.a.bar,
					count: o.count,
					maxCount: i
				}), n.a.createElement(X, {
					className: G.a.count,
					style: {
						left: `${100*u}%`
					},
					value: r,
					min: 1,
					max: a,
					onChange: s
				}))
			};
			const {
				fbt: J
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ee = Object(o.c)({
				isAnonymous: _.c,
				powerupsCount: _.d,
				productOffer: v.a,
				savedCardsPending: y.w,
				stripeTokenPending: y.m
			}), te = Object(s.b)(ee);
			var re = Object(h.injectStripe)(te((function(e) {
					const {
						className: t,
						isAnonymous: r,
						powerupsCount: a,
						productOffer: o,
						savedCardsPending: c,
						stripe: l,
						stripeTokenPending: i,
						subredditId: d
					} = e, u = Object(s.d)(), m = i || c;
					return n.a.createElement(z.i, {
						onClick: () => {
							l && o && u(Object(E.j)(l, o, r, a, x.c.Powerups, d))
						},
						className: t,
						disabled: m || !l
					}, J._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				ae = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				ne = r.n(ae);
			const {
				fbt: se
			} = r("./node_modules/fbt/lib/FbtPublic.js"), oe = 100, ce = Object(o.c)({
				isAnonymous: _.c,
				isNightMode: M.V,
				paypalErrorMessage: y.d,
				powerups: _.i,
				powerupsCount: _.d,
				productOffer: (e, {
					subredditId: t
				}) => {
					const r = Object(v.h)(e, {
						subredditId: t,
						type: x.c.Powerups
					});
					return r && r[0]
				},
				stripeErrorMessage: y.j,
				userPowerupsData: _.u
			});
			var le = Object(s.b)(ce)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: r,
						onCloseModal: o,
						paypalErrorMessage: c,
						powerups: l,
						powerupsCount: i,
						productOffer: d,
						stripeErrorMessage: u,
						subredditId: m,
						userPowerupsData: p
					} = e, x = Object(s.d)(), [_, v] = Object(a.useState)(f.Eb);
					Object(a.useEffect)(() => {
						x(Object(E.d)()), x(Object(g.selectPaymentMethod)(_))
					}, []);
					const y = Object(b.a)();
					Object(a.useEffect)(() => {
						y(Object(w.g)())
					}, []);
					const M = Object(L.a)(),
						S = d && d.pricePackages.length ? d.pricePackages[0].price : 0;
					if (!S || !l) return o(), null;
					const z = (i * S / 100).toFixed(2),
						I = !!(null == p ? void 0 : p.freeCount);
					return n.a.createElement(h.StripeProvider, {
						stripe: M
					}, n.a.createElement(h.Elements, null, n.a.createElement(n.a.Fragment, null, n.a.createElement(Q, {
						className: ne.a.progressControl,
						count: i,
						maxCount: I && p ? p.freeCount : oe,
						onChange: e => x(Object(P.h)(e)),
						powerups: l
					}), n.a.createElement("div", {
						className: ne.a.details
					}, n.a.createElement(C.a, {
						className: ne.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => x(Object(P.c)(e)))(!t),
						text: se._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !I && n.a.createElement("div", {
						className: ne.a.purchaseDetails
					}, se._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [se._plural(i, "powerups"), se._param("powerup price", `$${z.toLocaleString()}`)], {
						hk: "3cOqa5"
					}))), !I && n.a.createElement(n.a.Fragment, null, n.a.createElement("h3", {
						className: ne.a.paymentMethodTitle
					}, se._("Payment Method", null, {
						hk: "3EbT3q"
					})), n.a.createElement(j.a, {
						className: ne.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: _,
						onPaymentSelected: e => {
							v(e), x(Object(g.selectPaymentMethod)(e))
						}
					}), _ === f.Db && u && n.a.createElement("div", {
						className: ne.a.errorMessage
					}, u), _ === f.Eb && c && n.a.createElement("div", {
						className: ne.a.errorMessage
					}, c), _ === f.Db && n.a.createElement(N.a, {
						nightmode: r,
						className: ne.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), _ === f.Eb && n.a.createElement(T, {
						className: ne.a.button,
						subredditId: m
					}), _ === f.Db && n.a.createElement(re, {
						className: ne.a.button,
						subredditId: m
					}), n.a.createElement("p", {
						className: ne.a.description
					}, se._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [se._param("=User Agreement", n.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, se._("User Agreement", null, {
						hk: "3U1KuA"
					}))), se._param("=Privacy Policy", n.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, se._("Privacy Policy", null, {
						hk: "Z8otX"
					}))), se._param("previews terms of use", n.a.createElement(O.a, null)), se._param("powerup price", ` $${z.toLocaleString()} `), se._param("=User Settings", n.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, se._("User Settings", null, {
						hk: "3TNXSe"
					})))], {
						hk: "NLnVj"
					}))), I && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: ne.a.premiumDescription
					}, n.a.createElement("div", {
						className: ne.a.premiumIconWrapper
					}, n.a.createElement(k.a, {
						className: ne.a.premiumIcon
					})), n.a.createElement("span", null, se._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), n.a.createElement(H, {
						className: ne.a.button,
						subredditId: m
					})))))
				})),
				ie = r("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				de = r.n(ie);

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: me
			} = r("./node_modules/fbt/lib/FbtPublic.js"), pe = Object(i.t)(), he = Object(o.c)({
				currentSubreddit: i.q
			}), be = Object(s.b)(he);
			const fe = Object(c.a)(pe(be((function(e) {
				const {
					currentSubreddit: t
				} = e, r = Object(s.d)(), a = () => r(Object(u.g)(l.a.ECON_POWERUPS_PURCHASE));
				return t ? n.a.createElement("div", {
					className: de.a.inner
				}, n.a.createElement(p.a, {
					className: de.a.header,
					title: me._("Powerup {r/community}", [me._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: me._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), n.a.createElement("button", {
					className: de.a.closeButton,
					onClick: a
				}, n.a.createElement(m.a, {
					className: de.a.closeIcon
				})), n.a.createElement(le, {
					subredditId: t.id,
					onCloseModal: a
				})) : (a(), null)
			}))));
			t.default = e => n.a.createElement(fe, ue({}, e, {
				className: Object(d.a)(e.className, de.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			const {
				fbt: s
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function o({
				className: e
			}) {
				return n.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, s._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var a = r("./src/config.ts"),
				n = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				s = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const c = 2,
				l = 5;

			function i(e) {
				return e >= l ? o.a : e >= c ? s.a : n.a
			}

			function d(e) {
				var t;
				const r = !e,
					n = `${a.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? n : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
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
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => n.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var a = r("./node_modules/react-redux/es/index.js");

			function n() {
				return Object(a.d)()
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), n.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), n.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), n.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), n.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), n.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), n.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), n.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), n.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), n.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), n.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.ffd93ebbf92d019fdc98.js.map