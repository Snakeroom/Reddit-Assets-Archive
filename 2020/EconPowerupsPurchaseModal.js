// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.1fbe1df0d48211926a2d.js
// Retrieved at 10/20/2020, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./src/reddit/components/Econ/PowerupsPurchaseModal/HeaderWithSubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Kqbiv6UIHjkYrYuCnDRkj",
				icon: "_34qWndZiJpiGjZ_jELoVx6",
				title: "_24m2qmNXxF8uZqHTZWiIbu"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsTierMark/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3bkhzcV-x2EA9awQtZlV0N",
				tierIcon: "_3xLNQ6YL5bGnJ8HALleBmH"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_33BFgPPHfaEj1vbKBlKxYt",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				title: "_1rKquS_pWu4GeKQhH_xpPP",
				count: "_2AMO2XnYhlJu67x263BGll",
				tierMark: "_6_-UR5v7d1qUYny6AgVfq"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, s) {
			e.exports = {
				topLevelNotification: "_3YH47UD14HOXjdjd5g_AjV",
				checkIcon: "_30khZptSxNMaOX3DTCJN9H",
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
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, s) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd",
				closeIcon: "_3FE6QbodV9pkVNpABuNryv",
				header: "_2lqkgMZi8MtfVB-gqhYqy8"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/icons/svgs/Close/index.tsx"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				P = s("./src/reddit/components/Econ/PowerupsPurchaseModal/HeaderWithSubredditIcon/index.m.less"),
				f = s.n(P);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = Object(a.c)({
				subreddit: p.T
			});
			var g = Object(o.b)(h)(e => n.a.createElement("div", {
					className: Object(u.a)(e.className, f.a.container)
				}, n.a.createElement(b.b, {
					className: f.a.icon,
					subredditOrProfile: e.subreddit
				}), n.a.createElement("h3", {
					className: f.a.title
				}, w._("Buy Powerups, unlock perks, and become a {subreddit name} hero", [w._param("subreddit name", e.subreddit.displayText)], {
					hk: "33msfE"
				})))),
				O = s("./src/config.ts"),
				E = s("./node_modules/react-stripe-elements/es/index.js"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/lib/constants/index.ts"),
				j = s("./src/reddit/helpers/trackers/powerups.ts"),
				y = s("./src/reddit/actions/gold/powerups.ts"),
				N = s("./src/reddit/actions/gold/productOfferPurchase.ts"),
				v = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				k = s("./src/reddit/models/Gold/ProductOffer.ts"),
				C = s("./src/reddit/selectors/gold/powerups.ts"),
				M = s("./src/reddit/selectors/gold/productOffers.ts"),
				I = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				T = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				B = s("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				A = s("./src/reddit/components/StripePaymentForm/index.tsx"),
				D = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				F = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				L = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				U = s("./src/reddit/hooks/useThunkDispatch.ts"),
				q = s("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: H
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = Object(a.c)({
				currentUser: S.i,
				isAnonymous: C.c,
				powerupsCount: C.d,
				productOffer: M.a
			});
			var X = Object(o.b)(K)(n.a.memo((function(e) {
					const {
						className: t,
						currentUser: s,
						isAnonymous: o,
						powerupsCount: a,
						productOffer: c,
						subredditId: i
					} = e, d = Object(U.a)();
					Object(r.useEffect)(() => (window.addEventListener("message", p, !1), () => window.removeEventListener("message", p)), []);
					const [u, l] = Object(r.useState)(!1);
					let m = null;
					if (!s) return null;
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
							d(Object(N.e)({
								subredditId: i,
								powerupsCount: a,
								user: s,
								isAnonymous: o
							}))
						};
					return n.a.createElement(q.i, {
						onClick: async () => {
							if (!c) return;
							l(!0);
							const e = await d(Object(N.g)(c, i, o, a));
							if (e) {
								const {
									url: t
								} = e, s = 580, r = 740, n = Math.max(window.screenX + Math.round((window.outerWidth - s) / 2), 0), o = Math.max(window.screenY + Math.round((window.outerHeight - r) / 2), 0);
								m = window.open("".concat(t, "&rnd=").concat(Math.random()), "RedditPaypalPayment", "height=".concat(r, ",width=").concat(s, ",top=").concat(o, ",left=").concat(n, ",modal=yes,alwaysRaised=yes"))
							}
							l(!1)
						},
						className: t,
						disabled: u
					}, H._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				V = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				Z = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				W = s.n(Z);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(a.c)({
				isAnonymous: C.c,
				isPending: C.b
			}), Q = Object(o.b)(R), z = 12;
			var G = Q((function(e) {
					const {
						className: t,
						isAnonymous: s,
						isPending: r,
						subredditId: a
					} = e, c = Object(o.c)();
					return n.a.createElement(q.i, {
						onClick: () => {
							c(Object(y.c)(1)), c(Object(y.d)(a, 1, s))
						},
						className: Object(u.a)(t, W.a.button),
						disabled: r
					}, r ? n.a.createElement(V.a, {
						className: W.a.loadingIcon,
						sizePx: z
					}) : Y._("Apply Your Free Powerup", null, {
						hk: "fwfCU"
					}))
				})),
				J = s("./src/reddit/models/Gold/Powerups/index.ts"),
				$ = s("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				ee = s("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				te = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				se = s.n(te);
			var re = function(e) {
					const {
						className: t,
						onChange: s,
						style: r,
						value: o,
						min: a,
						max: c
					} = e, i = e => s(Math.max(Math.min(o + e, c || Number.POSITIVE_INFINITY), a || 0)), d = c === a, l = o === J.b ? $.a : ee.a;
					return n.a.createElement("div", {
						className: Object(u.a)(t, se.a.container),
						style: r
					}, n.a.createElement("div", {
						className: Object(u.a)(se.a.control, {
							[se.a.locked]: d
						})
					}, !d && n.a.createElement("button", {
						className: Object(u.a)(se.a.button, se.a.decrementButton),
						onClick: () => i(-1)
					}), n.a.createElement("div", {
						className: se.a.value
					}, n.a.createElement(l, {
						className: se.a.icon
					}), n.a.createElement("span", null, o)), !d && n.a.createElement("button", {
						className: Object(u.a)(se.a.button, se.a.incrementButton),
						onClick: () => i(1)
					})))
				},
				ne = s("./src/reddit/icons/svgs/PowerupSubredditTier2/index.tsx"),
				oe = s("./src/reddit/icons/svgs/PowerupSubredditTier3/index.tsx"),
				ae = s("./src/reddit/icons/svgs/PowerupSubredditTier4/index.tsx"),
				ce = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsTierMark/index.m.less"),
				ie = s.n(ce);
			const de = {
				2: ne.a,
				3: oe.a,
				4: ae.a
			};
			var ue = function(e) {
					const {
						className: t,
						style: s,
						tier: r
					} = e, o = de[r];
					return n.a.createElement("div", {
						className: Object(u.a)(t, ie.a.container),
						style: s
					}, o && n.a.createElement(o, {
						className: ie.a.tierIcon
					}))
				},
				le = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				me = s.n(le);
			var pe = e => {
					const {
						additionalCount: t,
						className: s,
						count: r,
						maxCount: o
					} = e;
					if (!o) return null;
					const a = Math.min(o, r) / o,
						c = Math.min(o, r + (t || 0)) / o;
					return n.a.createElement("div", {
						className: Object(u.a)(s, me.a.container)
					}, n.a.createElement("div", {
						className: me.a.track
					}), n.a.createElement("div", {
						className: me.a.progress,
						style: {
							width: "".concat(100 * a, "%")
						}
					}), t && n.a.createElement("div", {
						className: me.a.additionalProgress,
						style: {
							width: "".concat(100 * (c - a), "%"),
							left: "".concat(100 * a, "%")
						}
					}))
				},
				be = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				Pe = s.n(be);
			const {
				fbt: fe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), we = e => {
				let {
					maxCount: t,
					currentCount: s,
					additionalCount: r
				} = e;
				return Math.min(t, t / 2 + s / 2, s + r / 2) / t
			};
			var he = function(e) {
				const {
					className: t,
					count: s,
					maxCount: r,
					onChange: o,
					powerups: a
				} = e, {
					tier: c,
					tiersInfo: i
				} = a, d = a.tiersInfo[a.tiersInfo.length - 1].tier, l = a.tier >= d, m = (i[c] || i[c - 1]).tier, p = i[m - 1].powerupsCost;
				if (!p) return null;
				const b = l ? a.count + s : p,
					P = we({
						maxCount: b,
						currentCount: a.count,
						additionalCount: s
					}),
					f = p / b;
				return n.a.createElement("div", {
					className: Object(u.a)(t, Pe.a.container)
				}, n.a.createElement("div", {
					className: Pe.a.title
				}, n.a.createElement("span", null, fe._("Powerups", null, {
					hk: "DrcXp"
				})), n.a.createElement("span", null, a.count, "/", p)), n.a.createElement(pe, {
					additionalCount: s,
					className: Pe.a.bar,
					count: a.count,
					maxCount: b
				}), l && n.a.createElement(ue, {
					className: Pe.a.tierMark,
					tier: m,
					style: {
						left: "".concat(100 * f, "%")
					}
				}), n.a.createElement(re, {
					className: Pe.a.count,
					style: {
						left: "".concat(100 * P, "%")
					},
					value: s,
					min: 1,
					max: r,
					onChange: o
				}))
			};
			const {
				fbt: ge
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Oe = Object(a.c)({
				isAnonymous: C.c,
				powerupsCount: C.d,
				productOffer: M.a,
				savedCardsPending: I.u,
				stripeTokenPending: I.l
			}), Ee = Object(o.b)(Oe);
			var _e = Object(E.injectStripe)(Ee((function(e) {
					const {
						className: t,
						isAnonymous: s,
						powerupsCount: r,
						productOffer: a,
						savedCardsPending: c,
						stripe: i,
						stripeTokenPending: d,
						subredditId: u
					} = e, l = Object(o.c)(), m = d || c;
					return n.a.createElement(q.i, {
						onClick: () => {
							i && a && l(Object(N.h)(i, a, u, s, r))
						},
						className: t,
						disabled: m || !i
					}, ge._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				xe = s("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				je = s.n(xe);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ne = 100, ve = Object(a.c)({
				isAnonymous: C.c,
				isNightmode: S.T,
				paypalErrorMessage: I.c,
				powerups: C.f,
				powerupsCount: C.d,
				productOffer: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(M.c)(e, {
						subredditId: s,
						type: k.a.Powerups
					});
					return r && r[0]
				},
				stripeErrorMessage: I.i,
				userPowerupsData: C.l
			});
			var ke = Object(o.b)(ve)((function(e) {
					const {
						isAnonymous: t,
						isNightmode: s,
						onCloseModal: a,
						paypalErrorMessage: c,
						powerups: i,
						powerupsCount: d,
						productOffer: u,
						stripeErrorMessage: l,
						subredditId: m,
						userPowerupsData: p
					} = e, b = Object(o.c)(), [P, f] = Object(r.useState)(x.xb);
					Object(r.useEffect)(() => {
						b(Object(N.d)()), b(Object(v.selectPaymentMethod)(P))
					}, []);
					const w = Object(_.a)();
					Object(r.useEffect)(() => {
						w(Object(j.a)())
					}, []);
					const h = u && u.pricePackages.length ? u.pricePackages[0].price : 0;
					if (!h || !i) return a(), null;
					const g = (d * h / 100).toFixed(2),
						k = !!(null == p ? void 0 : p.freeCount),
						C = i.tiersInfo[i.tiersInfo.length - 1].tier,
						M = i.tier >= C;
					return n.a.createElement(E.StripeProvider, {
						apiKey: O.a.stripe.apiKey
					}, n.a.createElement(E.Elements, null, n.a.createElement(n.a.Fragment, null, M && n.a.createElement("div", {
						className: je.a.topLevelNotification
					}, n.a.createElement(F.a, {
						className: je.a.checkIcon
					}), ye._("Level {top level} unlocked. Buy powerups to get to the top of the hero list.", [ye._param("top level", C)], {
						hk: "4tQHc8"
					})), n.a.createElement(he, {
						className: je.a.progressControl,
						count: d,
						maxCount: k ? 1 : Ne,
						onChange: e => b(Object(y.c)(e)),
						powerups: i
					}), n.a.createElement("div", {
						className: je.a.details
					}, n.a.createElement(D.a, {
						className: je.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => b(Object(y.a)(e)))(!t),
						text: ye._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !k && n.a.createElement("div", {
						className: je.a.purchaseDetails
					}, ye._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [ye._plural(d, "powerups"), ye._param("powerup price", "$".concat(g.toLocaleString()))], {
						hk: "3cOqa5"
					}))), !k && n.a.createElement(n.a.Fragment, null, n.a.createElement("h3", {
						className: je.a.paymentMethodTitle
					}, ye._("Payment Method", null, {
						hk: "3EbT3q"
					})), n.a.createElement(B.a, {
						className: je.a.paymentMethodSelector,
						nightmode: s,
						selectedPayment: P,
						onPaymentSelected: e => {
							f(e), b(Object(v.selectPaymentMethod)(e))
						}
					}), P === x.wb && l && n.a.createElement("div", {
						className: je.a.errorMessage
					}, l), P === x.xb && c && n.a.createElement("div", {
						className: je.a.errorMessage
					}, c), P === x.wb && n.a.createElement(A.a, {
						nightmode: s,
						className: je.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), P === x.xb && n.a.createElement(X, {
						className: je.a.button,
						subredditId: m
					}), P === x.wb && n.a.createElement(_e, {
						className: je.a.button,
						subredditId: m
					})), k && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: je.a.premiumDescription
					}, n.a.createElement("div", {
						className: je.a.premiumIconWrapper
					}, n.a.createElement(L.a, {
						className: je.a.premiumIcon
					})), n.a.createElement("span", null, ye._("Premium gives you one free Powerup", null, {
						hk: "1Rlk9N"
					}))), n.a.createElement(G, {
						className: je.a.button,
						subredditId: m
					})), n.a.createElement("p", {
						className: je.a.description
					}, ye._("Auto-renews monthly. To cancel, visit your settings and turn off auto-renewal at least 24 hours before your subscription period ends to avoid getting charged for the next month. No partial refunds. By continuing, you are agreeing to our {user agreement} , {previews terms of use} , and {privacy policy}", [ye._param("user agreement", n.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ye._("User Agreement", null, {
						hk: "n6txc"
					}))), ye._param("previews terms of use", n.a.createElement(T.a, null)), ye._param("privacy policy", n.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ye._("Privacy Policy", null, {
						hk: "11oBec"
					})))], {
						hk: "3ZUHzF"
					})))))
				})),
				Ce = s("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				Me = s.n(Ce);

			function Ie() {
				return (Ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: Se
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Te = Object(d.t)(), Be = Object(a.c)({
				currentSubredditId: d.m
			}), Ae = Object(o.b)(Be);
			const De = Object(c.a)(Te(Ae((function(e) {
				const {
					currentSubredditId: t
				} = e, s = Object(o.c)(), r = () => s(Object(l.g)(i.a.ECON_POWERUPS_PURCHASE));
				return t ? n.a.createElement("div", {
					className: Me.a.inner
				}, n.a.createElement(g, {
					className: Me.a.header,
					subredditId: t
				}), n.a.createElement(m.a, {
					className: Me.a.closeIcon,
					onClick: r
				}), n.a.createElement(ke, {
					subredditId: t,
					onCloseModal: r
				})) : (r(), null)
			}))));
			t.default = e => n.a.createElement(De, Ie({}, e, {
				className: Object(u.a)(e.className, Me.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			const {
				fbt: o
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function a(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: t
				}, o._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return u
			}));
			var r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const o = (e, t, s) => Object.assign(Object.assign({}, n.defaults(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !1),
					profile: n.profile(e),
					subreddit: n.subreddit(e),
					powerups: Object.assign(Object.assign({}, n.subredditPowerups(e)), {
						freeCount: t,
						paidCount: s
					})
				}),
				a = e => t => Object.assign(Object.assign({
					source: e,
					action: "click",
					noun: "powerups_user_badge"
				}, o(t)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				c = () => e => Object.assign(Object.assign({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta"
				}, o(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				i = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "view",
					noun: "post_upsell"
				}, o(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				d = () => e => Object.assign(Object.assign({
					source: "powerups",
					action: "click",
					noun: "post_upsell"
				}, o(e)), {
					correlationId: Object(r.d)(r.a.PowerupsFlow, !0)
				}),
				u = (e, t) => s => Object.assign({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step"
				}, o(s, e, t))
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react-redux/es/index.js");

			function n() {
				return Object(r.c)()
			}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			var r = s("./src/lib/makeProductOfferKey/index.ts"),
				n = s("./src/reddit/models/Gold/ProductOffer.ts");
			const o = e => e.subreddits.api.productOffers.pending,
				a = (e, t) => {
					let {
						subredditId: s,
						type: n
					} = t;
					return e.subreddits.productOffers[Object(r.a)(s, n)]
				},
				c = (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = a(e, {
						subredditId: s,
						type: n.a.Powerups
					});
					return r && r[0]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.1fbe1df0d48211926a2d.js.map