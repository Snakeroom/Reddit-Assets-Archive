// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.efdca03deae7e74fff3e.js
// Retrieved at 9/21/2020, 12:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./src/reddit/components/Econ/PowerupsPurchaseModal/HeaderWithSubredditIcon/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1Kqbiv6UIHjkYrYuCnDRkj",
				icon: "_34qWndZiJpiGjZ_jELoVx6",
				title: "_24m2qmNXxF8uZqHTZWiIbu"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, a) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, a) {
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
				premiumDescription: "_1TlVluSbXOqttjoOmuZD2Q",
				premiumIconWrapper: "_3NK13DzzCxYXpEyi7Z1D-P",
				premiumIcon: "_13HsDRX-CPOf5B1mORjNbn",
				description: "_2kdlUzSaYOfKTKm4IaA-by"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd",
				closeIcon: "_3FE6QbodV9pkVNpABuNryv",
				header: "_2lqkgMZi8MtfVB-gqhYqy8"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				c = a("./node_modules/react-redux/es/index.js"),
				n = a("./node_modules/reselect/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/constants/modals.ts"),
				i = a("./src/reddit/contexts/PageLayer/index.tsx"),
				d = a("./src/lib/classNames/index.ts"),
				u = a("./src/reddit/actions/modal.ts"),
				m = a("./src/reddit/icons/svgs/Close/index.tsx"),
				p = a("./src/reddit/selectors/subreddit.ts"),
				b = a("./src/reddit/components/SubredditIcon/index.tsx"),
				h = a("./src/reddit/components/Econ/PowerupsPurchaseModal/HeaderWithSubredditIcon/index.m.less"),
				f = a.n(h);
			const {
				fbt: w
			} = a("./node_modules/fbt/lib/FbtPublic.js"), P = Object(n.c)({
				subreddit: p.S
			});
			var E = Object(c.b)(P)(e => r.a.createElement("div", {
					className: Object(d.a)(e.className, f.a.container)
				}, r.a.createElement(b.b, {
					className: f.a.icon,
					subredditOrProfile: e.subreddit
				}), r.a.createElement("h3", {
					className: f.a.title
				}, w._("Buy Powerups, unlock perks, and become a {subreddit name} hero", [w._param("subreddit name", e.subreddit.displayText)], {
					hk: "33msfE"
				})))),
				g = a("./src/config.ts"),
				O = a("./node_modules/react-stripe-elements/es/index.js"),
				_ = a("./src/reddit/hooks/useTracking.ts"),
				M = a("./src/lib/constants/index.ts"),
				x = a("./src/reddit/helpers/trackers/powerups.ts"),
				j = a("./src/reddit/actions/gold/powerups.ts"),
				v = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				y = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				N = a("./src/reddit/models/Gold/ProductOffer.ts"),
				C = a("./src/reddit/selectors/gold/powerups.ts"),
				k = a("./src/reddit/selectors/gold/productOffers.ts"),
				z = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				I = a("./src/reddit/selectors/user.ts"),
				S = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				L = a("./src/reddit/components/StripePaymentForm/index.tsx"),
				F = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				D = a("./src/reddit/icons/svgs/Premium/index.tsx"),
				B = a("./src/reddit/hooks/useThunkDispatch.ts"),
				T = a("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: A
			} = a("./node_modules/fbt/lib/FbtPublic.js"), H = Object(n.c)({
				currentUser: I.i,
				isAnonymous: C.c,
				powerupsCount: C.d,
				productOffer: k.a
			});
			var U = Object(c.b)(H)(r.a.memo((function(e) {
					const {
						className: t,
						currentUser: a,
						isAnonymous: c,
						powerupsCount: n,
						productOffer: o,
						subredditId: l
					} = e, i = Object(B.a)();
					Object(s.useEffect)(() => (window.addEventListener("message", p, !1), () => window.removeEventListener("message", p)), []);
					const [d, u] = Object(s.useState)(!1);
					let m = null;
					if (!a) return null;
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
							i(Object(v.d)({
								subredditId: l,
								powerupsCount: n,
								user: a,
								isAnonymous: c
							}))
						};
					return r.a.createElement(T.f, {
						onClick: async () => {
							if (!o) return;
							u(!0);
							const e = await i(Object(v.f)(o, l, c, n));
							if (e) {
								const {
									url: t
								} = e, a = 580, s = 740, r = Math.max(window.screenX + Math.round((window.outerWidth - a) / 2), 0), c = Math.max(window.screenY + Math.round((window.outerHeight - s) / 2), 0);
								m = window.open("".concat(t, "&rnd=").concat(Math.random()), "RedditPaypalPayment", "height=".concat(s, ",width=").concat(a, ",top=").concat(c, ",left=").concat(r, ",modal=yes,alwaysRaised=yes"))
							}
							u(!1)
						},
						className: t,
						disabled: d
					}, A._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				q = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				R = a("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				V = a.n(R);
			const {
				fbt: W
			} = a("./node_modules/fbt/lib/FbtPublic.js"), X = Object(n.c)({
				isAnonymous: C.c,
				isPending: C.b
			}), Z = Object(c.b)(X), K = 12;
			var Y = Z((function(e) {
					const {
						className: t,
						isAnonymous: a,
						isPending: s,
						subredditId: n
					} = e, o = Object(c.c)();
					return r.a.createElement(T.f, {
						onClick: () => {
							o(Object(j.c)(1)), o(Object(j.d)(n, 1, a))
						},
						className: Object(d.a)(t, V.a.button),
						disabled: s
					}, s ? r.a.createElement(q.a, {
						className: V.a.loadingIcon,
						sizePx: K
					}) : W._("Apply Your Free Powerup", null, {
						hk: "fwfCU"
					}))
				})),
				G = a("./src/reddit/models/Gold/Powerups/index.ts"),
				Q = a("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				J = a("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				$ = a("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				ee = a.n($);
			var te = function(e) {
					const {
						className: t,
						onChange: a,
						style: s,
						value: c,
						min: n,
						max: o
					} = e, l = e => a(Math.max(Math.min(c + e, o || Number.POSITIVE_INFINITY), n || 0)), i = o === n, u = c === G.b ? Q.a : J.a;
					return r.a.createElement("div", {
						className: Object(d.a)(t, ee.a.container),
						style: s
					}, r.a.createElement("div", {
						className: Object(d.a)(ee.a.control, {
							[ee.a.locked]: i
						})
					}, !i && r.a.createElement("button", {
						className: Object(d.a)(ee.a.button, ee.a.decrementButton),
						onClick: () => l(-1)
					}), r.a.createElement("div", {
						className: ee.a.value
					}, r.a.createElement(u, {
						className: ee.a.icon
					}), r.a.createElement("span", null, c)), !i && r.a.createElement("button", {
						className: Object(d.a)(ee.a.button, ee.a.incrementButton),
						onClick: () => l(1)
					})))
				},
				ae = a("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				se = a.n(ae);
			const {
				fbt: re
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var ce = e => {
					const {
						additionalCount: t,
						className: a,
						count: s,
						maxCount: c
					} = e;
					if (!c) return null;
					const n = Math.min(c, s) / c,
						o = Math.min(c, s + (t || 0)) / c;
					return r.a.createElement("div", {
						className: a
					}, r.a.createElement("div", {
						className: se.a.titleRow
					}, r.a.createElement("span", null, re._("Powerups", null, {
						hk: "DrcXp"
					})), r.a.createElement("span", null, s, "/", c)), r.a.createElement("div", {
						className: se.a.barRow
					}, r.a.createElement("div", {
						className: se.a.track
					}), r.a.createElement("div", {
						className: se.a.progress,
						style: {
							width: "".concat(100 * n, "%")
						}
					}), t && r.a.createElement("div", {
						className: se.a.additionalProgress,
						style: {
							width: "".concat(100 * (o - n), "%"),
							left: "".concat(100 * n, "%")
						}
					})))
				},
				ne = a("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				oe = a.n(ne);
			var le = function(e) {
				const {
					className: t,
					count: a,
					maxCount: s,
					onChange: c,
					powerups: n
				} = e, {
					tier: o,
					tiersInfo: l
				} = n, i = (l[o] || l[o - 1]).powerupsCost;
				if (!i) return null;
				const u = Math.min(i, i / 2 + n.count / 2, n.count + (a || 0) / 2) / i;
				return r.a.createElement("div", {
					className: Object(d.a)(t, oe.a.container)
				}, r.a.createElement(ce, {
					additionalCount: a,
					className: oe.a.bar,
					count: n.count,
					maxCount: i
				}), r.a.createElement(te, {
					className: oe.a.count,
					style: {
						left: "".concat(100 * u, "%")
					},
					value: a,
					min: 1,
					max: s,
					onChange: c
				}))
			};
			const {
				fbt: ie
			} = a("./node_modules/fbt/lib/FbtPublic.js"), de = Object(n.c)({
				isAnonymous: C.c,
				powerupsCount: C.d,
				productOffer: k.a,
				savedCardsPending: z.t,
				stripeTokenPending: z.k
			}), ue = Object(c.b)(de);
			var me = Object(O.injectStripe)(ue((function(e) {
					const {
						className: t,
						isAnonymous: a,
						powerupsCount: s,
						productOffer: n,
						savedCardsPending: o,
						stripe: l,
						stripeTokenPending: i,
						subredditId: d
					} = e, u = Object(c.c)(), m = i || o;
					return r.a.createElement(T.f, {
						onClick: () => {
							l && n && u(Object(v.g)(l, n, d, a, s))
						},
						className: t,
						disabled: m || !l
					}, ie._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				pe = a("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				be = a.n(pe);
			const {
				fbt: he
			} = a("./node_modules/fbt/lib/FbtPublic.js"), fe = 100, we = Object(n.c)({
				isAnonymous: C.c,
				isNightmode: I.S,
				paypalErrorMessage: z.b,
				powerups: C.f,
				powerupsCount: C.d,
				productOffer: (e, t) => {
					let {
						subredditId: a
					} = t;
					const s = Object(k.b)(e, {
						subredditId: a,
						type: N.a.Powerups
					});
					return s && s[0]
				},
				stripeErrorMessage: z.h,
				userPowerupsData: C.l
			});
			var Pe = Object(c.b)(we)((function(e) {
					const {
						isAnonymous: t,
						isNightmode: a,
						onCloseModal: n,
						paypalErrorMessage: o,
						powerups: l,
						powerupsCount: i,
						productOffer: d,
						stripeErrorMessage: u,
						subredditId: m,
						userPowerupsData: p
					} = e, b = Object(c.c)(), [h, f] = Object(s.useState)(M.xb);
					Object(s.useEffect)(() => {
						b(Object(v.c)()), b(Object(y.selectPaymentMethod)(h))
					}, []);
					const w = Object(_.a)();
					Object(s.useEffect)(() => {
						w(Object(x.a)())
					}, []);
					const P = d && d.pricePackages.length ? d.pricePackages[0].price : 0;
					if (!P || !l) return n(), null;
					const E = (i * P / 100).toFixed(2),
						N = !!(null == p ? void 0 : p.freeCount);
					return r.a.createElement(O.StripeProvider, {
						apiKey: g.a.stripe.apiKey
					}, r.a.createElement(O.Elements, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(le, {
						className: be.a.progressControl,
						count: i,
						maxCount: N ? 1 : fe,
						onChange: e => b(Object(j.c)(e)),
						powerups: l
					}), r.a.createElement("div", {
						className: be.a.details
					}, r.a.createElement(F.a, {
						className: be.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => b(Object(j.a)(e)))(!t),
						text: he._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !N && r.a.createElement("div", {
						className: be.a.purchaseDetails
					}, he._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [he._plural(i, "powerups"), he._param("powerup price", "$".concat(E.toLocaleString()))], {
						hk: "3cOqa5"
					}))), !N && r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
						className: be.a.paymentMethodTitle
					}, he._("Payment Method", null, {
						hk: "3EbT3q"
					})), r.a.createElement(S.a, {
						className: be.a.paymentMethodSelector,
						nightmode: a,
						selectedPayment: h,
						onPaymentSelected: e => {
							f(e), b(Object(y.selectPaymentMethod)(e))
						}
					}), h === M.wb && u && r.a.createElement("div", {
						className: be.a.errorMessage
					}, u), h === M.xb && o && r.a.createElement("div", {
						className: be.a.errorMessage
					}, o), h === M.wb && r.a.createElement(L.a, {
						nightmode: a,
						className: be.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), h === M.xb && r.a.createElement(U, {
						className: be.a.button,
						subredditId: m
					}), h === M.wb && r.a.createElement(me, {
						className: be.a.button,
						subredditId: m
					})), N && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: be.a.premiumDescription
					}, r.a.createElement("div", {
						className: be.a.premiumIconWrapper
					}, r.a.createElement(D.a, {
						className: be.a.premiumIcon
					})), r.a.createElement("span", null, he._("Premium gives you one free Powerup", null, {
						hk: "1Rlk9N"
					}))), r.a.createElement(Y, {
						className: be.a.button,
						subredditId: m
					})), r.a.createElement("p", {
						className: be.a.description
					}, he._("Auto-renews monthly. To cancel, visit your settings and turn off auto-renewal at least 24 hours before your subscription period ends to avoid getting charged for the next month. No partial refunds. By continuing, you are agreeing to our {user agreement} , {previews terms of use} , and {privacy policy}", [he._param("user agreement", r.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, he._("User Agreement", null, {
						hk: "n6txc"
					}))), he._param("previews terms of use", r.a.createElement("a", {
						href: "https://www.redditinc.com/policies/previews-terms",
						target: "_blank",
						rel: "noopener noreferrer"
					}, he._("Previews Terms of Use", null, {
						hk: "2eTczn"
					}))), he._param("privacy policy", r.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, he._("Privacy Policy", null, {
						hk: "11oBec"
					})))], {
						hk: "3ZUHzF"
					})))))
				})),
				Ee = a("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				ge = a.n(Ee);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: _e
			} = a("./node_modules/fbt/lib/FbtPublic.js"), Me = Object(i.t)(), xe = Object(n.c)({
				currentSubredditId: i.m
			}), je = Object(c.b)(xe);
			const ve = Object(o.a)(Me(je((function(e) {
				const {
					currentSubredditId: t
				} = e, a = Object(c.c)(), s = () => a(Object(u.g)(l.a.ECON_POWERUPS_PURCHASE));
				return t ? r.a.createElement("div", {
					className: ge.a.inner
				}, r.a.createElement(E, {
					className: ge.a.header,
					subredditId: t
				}), r.a.createElement(m.a, {
					className: ge.a.closeIcon,
					onClick: s
				}), r.a.createElement(Pe, {
					subredditId: t,
					onCloseModal: s
				})) : (s(), null)
			}))));
			t.default = e => r.a.createElement(ve, Oe({}, e, {
				className: Object(d.a)(e.className, ge.a.modal)
			}))
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, a) {
			"use strict";
			a.d(t, "e", (function() {
				return n
			})), a.d(t, "d", (function() {
				return o
			})), a.d(t, "c", (function() {
				return l
			})), a.d(t, "b", (function() {
				return i
			})), a.d(t, "a", (function() {
				return d
			}));
			var s = a("./src/reddit/helpers/correlationIdTracker.ts"),
				r = a("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, a) => Object.assign(Object.assign({}, r.defaults(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e),
					powerups: Object.assign(Object.assign({}, r.subredditPowerups(e)), {
						freeCount: t,
						paidCount: a
					})
				}),
				n = e => t => Object.assign(Object.assign({
					source: e,
					action: "click",
					noun: "powerups_user_badge"
				}, c(t)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				o = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta"
				}, c(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				l = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "view",
					noun: "post_upsell"
				}, c(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				i = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "click",
					noun: "post_upsell"
				}, c(e)), {
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				d = (e, t) => a => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step"
				}, c(a, e, t))
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react-redux/es/index.js");

			function r() {
				return Object(s.c)()
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M13.27 6.67c-.083-.122-.205-.234-.314-.35l-.325-.327-.445-.44a1.198 1.198 0 00-.912-.362h-.296l-.349.001h-.083l-.001.002a.072.072 0 01-.027.012c-.004-.002-.008-.007-.008-.02l.001-.014c-.013.02.034-.062.062-.112l.093-.166.375-.672.899-1.6c.27-.479.183-1.036-.216-1.383l-.457-.458-.18-.176L11.04.56l-.023-.022-.052-.037C10.9.45 10.868.393 10.816.34c-.067-.057-.144-.1-.204-.169a1.006 1.006 0 00-.232-.113 1.418 1.418 0 00-.522-.056l-.643.014-1.159.03-2.368.076C5.349.116 5.04.166 4.787.36c-.259.188-.4.466-.47.783l-.057.224-.032.138-.065.276-.127.55c-.163.713-.318 1.417-.464 2.107l-1.03 3.631a.728.728 0 00.175.696l.22.222c.555.556.735.737.77.768.134.127.31.197.493.197l1.016.002-1.354 3.55-.032.068-.056.128-.12.276a1.15 1.15 0 00-.1.453.985.985 0 00.222.406l.775.833c.133.145.273.219.403.279.064.024.118.057.211.053.086-.005.134-.03.205-.055a1.16 1.16 0 00.424-.276l.421-.424 1.086-1.061 1.078-1.069c.729-.728 1.476-1.486 2.236-2.269l1.15-1.192.58-.61.82-.868a1.227 1.227 0 00.323-.738 1.163 1.163 0 00-.219-.767z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M11.506 6.236c.056.056.95.933.988.998a.234.234 0 01-.029.289l-7.27 7.819a.093.093 0 01-.12.012c-.03-.024-.91-.914-.966-.969a.088.088 0 00.123-.007l7.27-7.819a.238.238 0 00.004-.323zM10.215.933c.103.101.925.913.964.969.05.072.062.17.012.257L8.873 6.152l-1.525-.003 2.879-4.953a.24.24 0 00-.012-.263zM6.28 8.513l-.366.962L4.2 9.47a.24.24 0 01-.164-.065c-.058-.053-.82-.82-.961-.962a.248.248 0 00.161.063l3.043.007z",
				fill: "#C18D42"
			}), r.a.createElement("path", {
				d: "M12.494 7.234c-.038-.065-.932-.942-.988-.998a.238.238 0 01-.005.323l.428.431c.179.18.185.469.015.656-1.507 1.655-4.446 4.856-6.483 7.09a.51.51 0 01-.695.057c-.202-.16-.396-.317-.55-.404a.086.086 0 01-.107-.004c.056.055.935.944.966.969a.093.093 0 00.12-.012l7.27-7.82a.234.234 0 00.03-.288zM11.178 1.902c-.038-.056-.86-.868-.963-.969a.24.24 0 01.012.263l-.054.092c.12.144.237.273.363.399.22.22.269.56.105.824C9.91 3.689 9.198 5 8.477 6.151h.396L11.19 2.16a.237.237 0 00-.013-.257zM4.434 9.266a.703.703 0 01-.47-.181c-.217-.196-.379-.336-.64-.579h-.087a.248.248 0 01-.161-.063c.142.142.903.909.96.962a.24.24 0 00.165.065l1.713.005.12-.314c-.483.103-1.067.106-1.6.105z",
				fill: "#DDBD37"
			}), r.a.createElement("path", {
				d: "M7.733 5.881c.007-.144.096-.49.195-.731l-.58 1 1.524.002c.287-.22.456-.354.532-.68-.533.1-1.134.264-1.671.41zM5.967 8.638c-.122.187-.374.51-.5.855.111.21.182.187.447-.018l.366-.962-.762-.003c.14.03.316.066.449.128z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M8.873 6.152l2.453.002a.243.243 0 01.178.08l.003.002a.238.238 0 01-.005.323l-7.27 7.819a.088.088 0 01-.122.007l-.003-.002a.083.083 0 01-.026-.102l1.833-4.806.366-.962-3.043-.007a.248.248 0 01-.161-.063L3.06 8.43c-.055-.06-.08-.145-.055-.231l1.99-7.012a.485.485 0 01.465-.352h4.556c.08 0 .145.036.188.09 0 0 .005.002.01.01a.24.24 0 01.012.262L7.347 6.15l1.526.002z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M3.523 7.14c-.075.238-.3.798-.094.938.2-.352 3.135-5.148 3.389-5.45.594-.703 2.217-.82 2.46-1.194.097-.151-.044-.253-.333-.253H5.657c-.444 0-.596.831-.696 1.151-.174.554-1.102 3.739-1.438 4.807zM10.943 6.595c.163-.19-.234-.207-.571-.207H6.475c-.47 0-.99.22-1.475.694H9.004c.987 0 1.711-.222 1.939-.487zM7.684 8.626c.033-.115.057-.247-.009-.35-.074-.116-.231-.145-.364-.128-.331.04-.602.283-.766.57-.164.285-.831 2.06-1.436 3.848.958-1.271 2.383-3.276 2.575-3.94z",
				fill: "#fff"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("path", {
				d: "M13.898 7.37a1.232 1.232 0 00-.133-.345c-.062-.125-.183-.22-.28-.325l-.305-.313-.216-.218-.046-.047c-.017-.016-.02-.026-.075-.06-.052-.028-.061-.064-.088-.095a.613.613 0 00-.08-.087 1.094 1.094 0 00-.486-.31c-.178-.063-.386-.058-.587-.057l-.122.001-.097.007c-.003 0-.006-.001-.007-.007a.04.04 0 01-.002-.01c.003-.006-.005.005.005-.013l.064-.113.126-.226 1.096-1.949a1.157 1.157 0 00-.187-1.416L11.562.89a1.126 1.126 0 00-.695-.328c-.132-.012-.269-.003-.403-.003l-.216.004-.43.009-.216.005h-.025L9.57.58 9.555.58 9.54.578 9.533.576s-.004 0-.026-.01L9.302.485l-.41-.163-.41-.163-.126-.052c-.39-.159-.829-.14-1.203.052l-.047.024-.381.2-.345.184-.15.08-.037.026c.027.008-.31.016-.514.024l-.87.03c-.188.02-.356.064-.513.162a1.03 1.03 0 00-.368.388c-.086.151-.133.34-.177.522l-.054.219-.038.163c-.199.855-.386 1.696-.56 2.518l-.996 3.507c-.074.27.001.558.194.752.4.405.892.902.967.964.138.12.317.185.5.185l1.413.004-1.107 3.522-.08.206-.078.197-.02.05-.01.025a.65.65 0 00.089.597l.006.009.046.052c.01.013.022.025.035.04l.23.271.065.074.097.107.199.217c.133.146.276.295.424.384a1.3 1.3 0 00.218.11c.07.029.18.036.26.019.144-.038.3-.1.461-.226.156-.133.307-.29.465-.438l.623-.58c.775-.72 1.578-1.48 2.402-2.273.824-.792 1.669-1.618 2.526-2.469l.645-.643.89-.899c.108-.109.192-.229.246-.346a1.162 1.162 0 00.089-.747z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M10.98 1.82a.27.27 0 00-.037-.323c.053.05.879.872.924.924a.272.272 0 01.03.317L9.728 6.472 8.28 6.47l2.701-4.65zM12.005 6.564s.878.864.917.917a.227.227 0 01-.018.296l-7.369 7.559a.145.145 0 01-.181.023c-.046-.03-.743-.739-.92-.92a.142.142 0 00.184-.02l7.369-7.56a.222.222 0 00.016-.293l.002-.002zM2.848 8.71l3.27.007-.287.915-2.066-.005a.283.283 0 01-.188-.069c-.08-.066-.841-.839-.938-.935V8.62a.28.28 0 00.21.089z",
				fill: "#A1000A"
			}), r.a.createElement("path", {
				d: "M9.728 6.472l2.17-3.734a.272.272 0 00-.03-.317 87.777 87.777 0 00-.925-.924c.078.083.101.211.037.323l-.151.26.496.507a.23.23 0 01.035.276L9.266 6.472h.462zM12.922 7.481a57.664 57.664 0 00-.917-.917l-.002.002a.222.222 0 01-.016.294l-.13.133.455.5a.23.23 0 01-.005.315l-6.543 6.73a.23.23 0 01-.327.002l-.473-.476-.346.354a.142.142 0 01-.183.021c.176.181.873.89.919.92a.145.145 0 00.181-.024l7.369-7.558c.085-.09.08-.211.018-.296zM5.9 9.408H4.236a.458.458 0 01-.323-.133l-.567-.564-.497-.001a.28.28 0 01-.209-.09v.003c.097.096.858.869.938.935.05.044.115.069.188.069l2.066.004.07-.223z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M8.28 6.47l1.449.002c.422-.26.53-.486.533-.826-.709 0-1.645.245-1.81.528l-.172.296zM6.118 8.717h-.097c-.227.264-.451.504-.6.913.137.137.222.12.41.002l.287-.915z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M12.003 6.566a.208.208 0 00-.179-.091L9.73 6.472l-1.45-.002 2.702-4.65a.271.271 0 00-.037-.323l-.002-.002a.268.268 0 00-.195-.083H4.85a.422.422 0 00-.406.305L2.567 8.334a.293.293 0 00.073.287.28.28 0 00.209.089l3.269.007-.287.915-1.458 4.64a.135.135 0 00.02.126v.002s.005.003.01.01l.03.027a.142.142 0 00.186-.018l7.368-7.56a.221.221 0 00.016-.293z",
				fill: "#FF4500"
			}), r.a.createElement("path", {
				d: "M12.036 6.542c-.05-.08-.157-.118-.237-.11l-.235-.003-.47-.002-.938.006-1.877.013v.048c.313.11.626.183.939.239.156.03.312.055.469.073a12.007 12.007 0 001.408.097c.127.007.255 0 .383-.003a5.377 5.377 0 00-.209.289c-.204.294-.394.6-.552.939l.034.033.745-.751.372-.376c.062-.068.124-.113.187-.2a.263.263 0 00-.019-.292zM5.729 13.054c-.175.133-.355.26-.523.4l-.182.146.164-.49c.082-.235.144-.476.217-.713.071-.238.14-.477.199-.719.127-.48.238-.966.331-1.458.096-.49.169-.987.205-1.496l-.046-.014-.907 2.836-.453 1.418-.219.711-.11.356-.037.123a.187.187 0 01.026-.022l.006-.003-.01.008-.023.02-.016.052c-.008.03-.022.057-.025.1a.176.176 0 00.036.112l-.006-.018.02.032c-.003 0-.005-.002-.006-.004l.005.006.03.027-.011-.027a.04.04 0 00.04.04l-.02-.005a.181.181 0 00.195.002c.057-.043.08-.08.123-.12l.007-.007.008.011c-.003.019-.007.035-.004.027l.007-.02.023.035v-.002l-.017-.05.003-.007.005-.013-.002-.005.006-.006.01-.025.005.01.174-.182.452-.468.904-.938-.034-.034c-.19.12-.371.245-.55.374zM4.656 2.063l.04-.26a.18.18 0 01.046-.11.202.202 0 01.088-.063c.013-.005.042-.007.062-.011.09-.015.18-.027.27-.045.182-.032.363-.07.547-.114v-.048l-.553-.002-.276-.002a.45.45 0 00-.458.299l-.078.267-.154.53-.613 2.119-.591 2.125-.296 1.063-.147.532c-.067.194.098.425.306.415V8.71a.228.228 0 01-.168-.149.186.186 0 01.02-.174c.082-.168.155-.338.234-.507.145-.341.288-.683.414-1.03.137-.342.245-.694.367-1.041.113-.35.215-.704.323-1.055l.28-1.067c.078-.36.172-.715.236-1.08.033-.18.072-.36.101-.544z",
				fill: "#FFB8B8"
			}), r.a.createElement("path", {
				d: "M9.533 7.506L6.789 6.76l2.596-5.347-1.619-.69-1.4.69L4.514 7.37l3.292.67-1.172 2.776 2.899-3.309z",
				fill: "#FFD635"
			}), r.a.createElement("path", {
				d: "M5.902 6.759l2.7-5.347-.951-.385L5.42 6.87l2.341.63-1.86-.742z",
				fill: "#CDA467"
			}), r.a.createElement("path", {
				d: "M4.514 7.37l1.852-5.958-.622-.208-1.23 6.165zM9.385 1.412L6.79 6.76l3.433-5.555-.837.208z",
				fill: "#000"
			}), r.a.createElement("path", {
				d: "M6.534 1.593l-1.768 5.57.437-.24 2.178-5.719-.847.389zM9.124 7.6L5.9 6.76l1.195.61 1.163.23h.865zM8.453 7.866L7.144 9.992l.768-1.94.541-.186z",
				fill: "#fff"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.efdca03deae7e74fff3e.js.map