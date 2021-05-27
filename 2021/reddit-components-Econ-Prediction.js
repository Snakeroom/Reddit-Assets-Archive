// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.1dd96cf03aaa23429135.js
// Retrieved at 5/27/2021, 12:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/graphql/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"93a82be72b63"}')
		},
		"./src/graphql/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = [s.hc, s.kb, s.x, s.L, s.fb, s.Kb],
				a = {
					[s.Kb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.fb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.L]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.x]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.kb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.hc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[s.Kb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.fb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.L]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.x]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.hc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.hc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.hc]: "",
						[s.kb]: "",
						[s.x]: "",
						[s.L]: "",
						[s.fb]: "",
						[s.Kb]: ""
					};
				let u = d - c;
				if (u <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of o) {
					const e = Math.floor(u / r);
					e && (l[r] = (t ? i : a)[r](e).toString()), u -= e * r
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return h
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(a.a),
				c = Object(r.a)(a.b),
				d = Object(r.a)(a.c),
				l = Object(r.a)(a.d),
				u = Object(r.a)(a.e),
				m = Object(r.a)(a.f),
				p = Object(r.a)(a.g),
				b = Object(r.a)(a.h),
				f = Object(r.a)(a.i),
				h = e => Object(s.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return N
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "a", (function() {
				return A
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/Gold/ProductOffer.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				l = n("./src/graphql/operations/GlobalProductOffers.json"),
				u = n("./src/graphql/operations/PremiumProductOfferSubscriptions.json"),
				m = n("./src/graphql/operations/ProductOffers.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var b = n("./src/reddit/selectors/gold/productOffers.ts"),
				f = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(s.a)(f.cb),
				g = Object(s.a)(f.bb),
				E = Object(s.a)(f.ab),
				_ = Object(s.a)(f.Y),
				P = Object(s.a)(f.X),
				v = Object(s.a)(f.W),
				O = Object(s.a)(f.Cb),
				y = Object(s.a)(f.Ab),
				x = Object(s.a)(f.Bb),
				C = Object(s.a)(f.Fb),
				j = Object(s.a)(f.Eb),
				S = Object(s.a)(f.Db),
				k = e => async t => {
					t(Object(a.f)({
						kind: c.b.Error,
						duration: a.a,
						text: e
					}))
				}, N = (e, t) => async n => {
					e === i.c.Premium ? n(I()) : t && n(w(e, t))
				}, w = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					const a = s();
					if (!Object(b.h)(a, {
							subredditId: t,
							type: e
						})) {
						n(h());
						try {
							const r = await ((e, t, n, r) => Object(p.a)(e, {
								...m,
								variables: {
									subredditId: t,
									types: n,
									includeGlobal: r
								}
							}))(o(), t, [e], !0);
							if (r.ok) {
								const e = r.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const s = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await n(g({
									productOffers: s || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = r.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							n(E(e)), n(k(e))
						}
					}
				}, I = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, a;
					const c = i.c.Premium;
					e(_());
					try {
						const t = await ((e, t) => Object(p.a)(e, {
							...l,
							variables: {
								productTypes: t
							}
						}))(n(), [c]);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(P({
								productOffers: null !== (a = n.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						o.c.captureMessage(t), e(v(t)), e(k(t))
					}
				}, M = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, a, i;
					e(O());
					try {
						const t = await (e => Object(p.a)(e, u))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors[0].message);
							return void e(x({
								subscriptions: null !== (i = null === (a = n.data.identity) || void 0 === a ? void 0 : a.subscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						o.c.captureException(c);
						const t = c.message ? c.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(y(t)), e(k(t))
					}
				}, A = e => async (t, n, {
					gqlContext: s
				}) => {
					var o;
					t(C(e));
					try {
						const n = await Object(d.b)(s(), e);
						if (n.error) throw new Error(n.error.type);
						if (n.ok) {
							const r = n.body,
								{
									errors: s
								} = r.data.cancelEconRecurringPayment;
							if (null == s ? void 0 : s.length) throw new Error(s[0].message);
							t(S({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (o = a.message) && void 0 !== o ? o : r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(j(e)), t(k(e)), !1
					}
				}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(r || (r = {}))
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_26GJLzgfE0wgM-CnXwauPN",
				titleRow: "vZoXjCnTHVyUauLNVGVfk",
				header: "_27PnGSqq2_i7iJirZpjlvp",
				title: "_3tXfrHlKYl3OfwzJeHj2TF",
				newBadge: "_2xWQI6x-vSCyMVG0rWrUv",
				closeButton: "_2fuSvPWThjhQeduKzDNNsl"
			}
		},
		"./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/hooks/useLocalStorage.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function m({
				message: e,
				newBadge: t,
				onClose: n,
				onView: d,
				storageKey: m = c.a.nonDismissable,
				title: p
			}) {
				const b = m !== c.a.nonDismissable,
					[f, h] = Object(o.a)(m, !b || !1),
					[g, E] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					f || g || !d || (d(), E(!0))
				}, [f, g, d]), b && f ? null : s.a.createElement("div", {
					className: l.a.educationMessage
				}, s.a.createElement("div", {
					className: l.a.titleRow
				}, s.a.createElement("div", {
					className: l.a.header
				}, s.a.createElement("h3", {
					className: l.a.title
				}, p), t && s.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), b && s.a.createElement(a.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: Object(i.b)("close"),
					onClick: () => {
						h(!0), n && n()
					},
					priority: a.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/HintUpsellModal/index.m.less": function(e, t, n) {
			e.exports = {
				spacer: "_2X6bLV9uUx2nAIyWr-ZH8q",
				smallSpacer: "_2AnpY9wZq41t4cOOg6nl7Z",
				modal: "gK-Bq6LND2mHlVmm0OyOF",
				closeButton: "_148SgYhRwbe3yqgXCkao-3",
				closeIcon: "_2Wfc_WdfJFIr_vf3eEXpZZ",
				image: "_2-6PRuDsvE0VmeUxPiN4VO",
				header: "_12Jw6FeyEt2qhLDDnwSw9i",
				premium: "_3U4cIVyfUBOzxSWWEj8JYE",
				title: "_8kYSqIcb9XUa_toG_ha4y",
				subtitle: "_2rpc1fbJH1uajRfg-G8wWJ",
				button: "_2MBbc_VAPJT7NXQBaPHyXd",
				link: "n3UBYMhr65qHMduvqQ5pA",
				disclaimer: "_29_5VhqcFSJcdkzGldAB94"
			}
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_7xN79rTmvLDGpKHFIZtZp"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function i({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: s
			}) {
				const i = r.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? r.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : r.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return o.a.createElement("div", null, o.a.createElement(a.a, {
					onClose: t,
					onView: n,
					title: i,
					newBadge: !0,
					message: c,
					storageKey: s
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				coinIcon: "Q621mV5971l_mCH7u6xH2",
				wonOrLostAmountRow: "_2fSjP0uCCM6rDX2NTgXmZZ",
				wonOrLostAmount: "fpuXaOlXcTLRb8FScJmfB"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				statusBar: "_3UgGKQLpMCbhSbdPqloGc4",
				coinIcon: "_1O2NC4MPtXkD58WXlRCpZF",
				divider: "SZcaijbNtMWo_Hks5p9cB",
				clockIcon: "DzRACNzo9EG6-6h40DhZA"
			}
		},
		"./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2n_V3eaYinaIoTbG9ikkK0",
				closeButton: "_3pPuZ3I3wkPK0d8WNh2m51",
				content: "_3HRJlgO-JoezNvYzRP_Ld0",
				message: "_1DLbjgapmKO0sh19JkECbB",
				actions: "tbnzhK1drOMaacYuMtJhT",
				submitButton: "A3dSYyITh_D79x6Fvr_IZ"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentLink: "_2X1xXN9kuDF2WycNRjjS0o",
				facepile: "C5uVjjS8VPK59_iUkW5-Z",
				info: "_2-zYCnFNOSR-_DgPdIuM7",
				tournamentName: "_3L_97it52YmEJXxNI0ZFK-",
				totalPlayers: "_2PSisUxPboRQYsMf4jIvx1",
				chevron: "ONgeKJIGzxybfGzxK1J1s"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				poll: "_1iOvuGeyccWW1Hv9HUTB4H",
				predictionsCount: "_2x07LX5L46mw32ZNGDtzd4",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h",
				modal: "_2Bs1wJm82uxVUlTlni0EgW"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return Te
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/lib/timeUntil/index.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/actions/economics/helpers/index.ts"),
				b = n("./src/reddit/actions/economics/predictions/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				E = n("./src/reddit/helpers/trackers/predictions.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/poll/index.ts"),
				O = n("./src/reddit/selectors/postCreations.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				j = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				S = n.n(j);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var N = ({
					className: e
				}) => s.a.createElement("div", {
					className: Object(d.a)(S.a.container, e)
				}, k._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				w = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx"),
				I = n("./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less"),
				M = n.n(I);
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function B({
				didParticipate: e
			}) {
				const t = A._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = s.a.createElement(s.a.Fragment, null, A._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && s.a.createElement("div", {
						className: M.a.notificationBlurb
					}, A._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return s.a.createElement("div", null, s.a.createElement(w.a, {
					title: t,
					message: n
				}))
			}
			var F = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				T = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				D = n("./node_modules/fbt/lib/FbtPublic.js");

			function L() {
				const e = D.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = D.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return s.a.createElement("div", null, s.a.createElement(w.a, {
					title: e,
					message: t
				}))
			}
			var R = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				U = n("./src/reddit/icons/svgs/EyeDouble/index.tsx"),
				q = n("./src/reddit/actions/gold/productOffers.ts"),
				G = n("./src/config.ts"),
				W = n("./src/higherOrderComponents/asModal/index.tsx"),
				V = n("./src/reddit/controls/Button/index.tsx"),
				H = n("./src/reddit/icons/svgs/Close/index.tsx"),
				J = n("./src/reddit/selectors/gold/productOffers.ts"),
				Y = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				K = n("./src/reddit/components/Econ/Prediction/HintUpsellModal/index.m.less"),
				z = n.n(K);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var X = Object(W.a)(({
					onReveal: e,
					closeModal: t
				}) => {
					const n = Object(o.e)(J.f),
						r = Boolean(n);
					return s.a.createElement("div", {
						className: z.a.modal
					}, s.a.createElement(V.q, {
						className: z.a.closeButton,
						Icon: H.a,
						priority: V.b.Plain,
						onClick: t
					}), s.a.createElement("header", {
						className: z.a.header
					}, s.a.createElement(Y.a, {
						className: z.a.image
					}), s.a.createElement("div", {
						className: z.a.spacer
					}), s.a.createElement("p", {
						className: z.a.premium
					}, Z._("Premium Feature", null, {
						hk: "32ZWoW"
					})), s.a.createElement("div", {
						className: z.a.smallSpacer
					}), s.a.createElement("h2", {
						className: z.a.title
					}, Z._("Sneak Peek", null, {
						hk: "2FAIvU"
					})), s.a.createElement("h3", {
						className: z.a.subtitle
					}, Z._("Premium users can see how others have predicted before they make their own Prediction.", null, {
						hk: "2mpEHX"
					}))), r ? s.a.createElement("button", {
						className: z.a.button,
						onClick: () => {
							e(), t()
						}
					}, Z._("Continue", null, {
						hk: "3T00JU"
					})) : s.a.createElement("a", {
						className: z.a.link,
						href: `${G.a.redditUrl}/premium`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => t()
					}, Z._("Get Premium", null, {
						hk: "3tW2d3"
					})), s.a.createElement("div", {
						className: z.a.spacer
					}), s.a.createElement("p", {
						className: z.a.disclaimer
					}, Z._("Only paid Reddit Premium members get a sneak peek.", null, {
						hk: "KOIbk"
					})))
				}),
				Q = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				$ = n.n(Q);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var te = ({
					disabled: e,
					isEnded: t,
					userSelection: n,
					isShowingHint: a,
					tournamentId: i,
					onReveal: c
				}) => {
					const [l, u] = Object(r.useState)(!1), m = Object(o.d)();
					Object(r.useEffect)(() => {
						m(Object(q.b)())
					}, [m]);
					const p = !!i,
						b = n && !a;
					return Object(o.e)(e => !t && !b && p && Object(g.f)(e)) ? s.a.createElement("div", {
						className: $.a.optionButtonWrapper
					}, s.a.createElement("button", {
						"aria-label": ee._("Sneak a peek", null, {
							hk: "1VQ7WW"
						}),
						className: Object(d.a)($.a.hintButton, {
							[$.a.canGetHint]: !e
						}),
						disabled: e,
						onClick: () => u(!0)
					}, s.a.createElement("div", {
						className: $.a.optionBody
					}, s.a.createElement(U.a, {
						className: $.a.eyeIcon
					}), s.a.createElement("div", {
						className: $.a.optionText
					}, ee._("See what others think", null, {
						hk: "2TLT90"
					})))), l && s.a.createElement(X, {
						onReveal: c,
						closeModal: () => u(!1),
						withOverlay: !0,
						onOverlayClick: () => u(!1)
					})) : null
				},
				ne = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				re = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				se = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				oe = n.n(se);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ie({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: r,
				wonAmount: o
			}) {
				return e && !n ? s.a.createElement("div", null, s.a.createElement(w.a, {
					title: ae._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: s.a.createElement(s.a.Fragment, null, ae._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!r && s.a.createElement("div", {
						className: oe.a.wonOrLostAmountRow
					}, ae._("You lost {lostAmount}", [ae._param("lostAmount", s.a.createElement("div", {
						className: oe.a.wonOrLostAmount
					}, t ? s.a.createElement(re.a, {
						className: oe.a.coinIcon
					}) : s.a.createElement(ne.a, {
						className: oe.a.coinIcon
					}), r))], {
						hk: "6091x"
					})))
				})) : e && n && r && !o ? s.a.createElement("div", null, s.a.createElement(w.a, {
					title: ae._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: s.a.createElement(s.a.Fragment, null, ae._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), s.a.createElement("div", {
						className: oe.a.wonOrLostAmountRow
					}, ae._("You've been refunded {refundedAmount}", [ae._param("refundedAmount", s.a.createElement("div", {
						className: oe.a.wonOrLostAmount
					}, t ? s.a.createElement(re.a, {
						className: oe.a.coinIcon
					}) : s.a.createElement(ne.a, {
						className: oe.a.coinIcon
					}), r))], {
						hk: "49bOe9"
					})))
				})) : e && n ? s.a.createElement("div", null, s.a.createElement(w.a, {
					title: ae._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: s.a.createElement(s.a.Fragment, null, ae._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!o && s.a.createElement("div", {
						className: oe.a.wonOrLostAmountRow
					}, ae._("You won {wonAmount}", [ae._param("wonAmount", s.a.createElement("div", {
						className: oe.a.wonOrLostAmount
					}, t ? s.a.createElement(re.a, {
						className: oe.a.coinIcon
					}) : s.a.createElement(ne.a, {
						className: oe.a.coinIcon
					}), r + o))], {
						hk: "1zg0cH"
					})))
				})) : s.a.createElement("div", null, s.a.createElement(w.a, {
					title: ae._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: ae._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			var ce = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				de = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				le = n.n(de);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js"), me = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? s.a.createElement("div", {
				className: le.a.statusBar
			}, n && s.a.createElement(ce.a, {
				className: le.a.clockIcon
			}), t ? ue._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : ue._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : s.a.createElement("div", {
				className: le.a.statusBar
			}, n && s.a.createElement(ce.a, {
				className: le.a.clockIcon
			}), ue._("Prediction ends in {expirationDuration}", [ue._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var pe = ({
					endsAt: e,
					resolvedOptionId: t,
					totalStakeAmount: n,
					isCoins: r
				}) => s.a.createElement("div", null, n > 0 && r && s.a.createElement("div", {
					className: le.a.statusBar
				}, s.a.createElement(ne.a, {
					className: le.a.coinIcon
				}), n, " ", ue._("added by participants", null, {
					hk: "PSq3T"
				})), s.a.createElement(me, {
					endsAt: e,
					resolvedOptionId: t,
					isCoins: r
				})),
				be = n("./src/reddit/icons/fonts/index.tsx"),
				fe = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				he = n.n(fe);
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ee = Object(W.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: r
				}) {
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: he.a.header
					}, s.a.createElement(V.q, {
						className: he.a.closeButton,
						Icon: Object(be.b)("close"),
						priority: V.b.Plain,
						onClick: n
					}), s.a.createElement("h1", null, ge._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), s.a.createElement("div", {
						className: he.a.content
					}, s.a.createElement("p", {
						className: he.a.message
					}, t ? ge._("Once you hit Submit, the answer is final and tokens will be distributed to the winners", null, {
						hk: "4cSIyE"
					}) : ge._("Once you hit Submit, the answer is final and coins will be distributed to the winners", null, {
						hk: "3Nutvx"
					})), s.a.createElement("div", {
						className: he.a.actions
					}, s.a.createElement(V.l, {
						disabled: e,
						onClick: n,
						priority: V.b.Secondary,
						redditStyle: !0,
						size: V.c.S
					}, ge._("Cancel", null, {
						hk: "4Gco5s"
					})), s.a.createElement(V.i, {
						className: he.a.submitButton,
						disabled: e,
						onClick: () => {
							r()
						},
						redditStyle: !0,
						size: V.c.S
					}, ge._("Submit", null, {
						hk: "ZLsi7"
					})))))
				})),
				_e = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				Pe = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				ve = n.n(Pe),
				Oe = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				ye = n("./src/reddit/controls/InternalLink/index.tsx"),
				xe = n("./src/reddit/hooks/usePageLayer.ts"),
				Ce = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				je = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				ke = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Ne = n.n(ke);
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ie({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(o.d)(),
					a = Object(_.a)(),
					i = Object(xe.a)(),
					c = Object(o.e)(t => Object(Se.U)(t, {
						subredditId: e
					})),
					d = Object(o.e)(t => Object(je.g)(t, {
						subredditId: e
					})),
					u = Object(o.e)(t => Object(je.a)(t, {
						subredditId: e
					})),
					p = Object(m.w)(i),
					f = Object(m.G)(i),
					h = Object(m.K)(i);
				if (Object(r.useEffect)(() => {
						d || n(Object(b.g)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: g,
					totalParticipantsCount: P
				} = u;
				return s.a.createElement(ye.a, {
					className: Ne.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						a(Object(E.j)({
							pageType: p ? "post_detail" : h ? "community" : f ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, s.a.createElement(Oe.a, {
					className: Ne.a.facepile,
					subredditId: e
				}), s.a.createElement("div", {
					className: Ne.a.info
				}, s.a.createElement("div", {
					className: Ne.a.tournamentName
				}, g), s.a.createElement("div", {
					className: Ne.a.totalPlayers
				}, P > 0 ? we._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [we._param("totalPlayers", Object(l.b)(P)), we._plural(P)], {
					hk: "3eDpRH"
				}) : we._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), s.a.createElement(Ce.a, {
					className: Ne.a.chevron
				}))
			}
			const {
				fbt: Me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ae = Object(a.c)({
				isAutoVoteEnabled: g.e,
				isEditing: O.K,
				isVoteAnimationEnabled: g.d,
				prediction: v.g,
				pollId: v.a,
				post: y.F,
				subredditOrProfile: y.R,
				userCoins: x.d,
				userIsLoggedIn: x.K,
				userId: x.pb
			}), Be = {
				onPredictionResolve: b.j,
				onPredictionVote: b.k,
				showToast: h.f,
				upvoteToggled: f.bb
			}, Fe = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), Te = ({
				className: e,
				isAutoVoteEnabled: t,
				isCommentsPage: n,
				isEditing: o,
				isPredictionsPage: a,
				isVoteAnimationEnabled: i,
				onPredictionResolve: m,
				onPredictionVote: b,
				post: f,
				prediction: h,
				pollId: g,
				subredditOrProfile: v,
				showToast: O,
				upvoteToggled: y,
				userCoins: x,
				userId: j,
				userIsLoggedIn: S
			}) => {
				var k;
				const [w, I] = Object(r.useState)(!1), [M, A] = Object(r.useState)(null), [D, U] = Object(r.useState)(null), [q, G] = Object(r.useState)(!1), [W, V] = Object(r.useState)(!1), H = Object(_.a)(), J = Object(r.useCallback)(() => {
					G(!1)
				}, []), Y = Object(r.useCallback)(() => {
					A(null), U(null)
				}, []);
				if (!g || !h || !v) return s.a.createElement(N, null);
				const {
					creatorId: K,
					endsAt: z,
					options: Z,
					resolvedOptionId: X,
					totalStakeAmount: Q,
					totalVoters: $,
					tournamentId: ee,
					userSelection: ne,
					userWonAmount: re
				} = h, se = K === j, oe = z < Date.now(), ae = !c()(ee), ce = oe && se && !X, de = Z.find(({
					id: e
				}) => e === M), le = n ? Object(d.a)(e, ve.a.container, ve.a.forCommentsPage, {
					[ve.a.isEditing]: o
				}) : Object(d.a)(e, ve.a.container);
				return s.a.createElement("div", {
					className: le,
					onClick: e => {
						h && e.stopPropagation()
					}
				}, n ? oe ? X ? s.a.createElement(ie, {
					didParticipate: !!ne,
					isTokens: ae,
					isWinner: X === ne,
					predictedAmount: ne && (null === (k = Z.find(({
						id: e
					}) => e === ne)) || void 0 === k ? void 0 : k.userStakeAmount) || 0,
					wonAmount: re
				}) : ce ? s.a.createElement(L, null) : s.a.createElement(B, {
					didParticipate: !!ne
				}) : s.a.createElement(F.a, {
					isTokens: ae,
					storageKey: C.a.feature
				}) : null, s.a.createElement("div", {
					className: ve.a.poll
				}, Z.map(e => s.a.createElement(_e.a, {
					endsAt: z,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: q && ne === e.id,
					onAnimationEnd: J
				}, s.a.createElement(R.a, {
					disabled: q,
					isEnded: oe,
					isSelected: M === e.id,
					needsResolution: ce,
					option: e,
					onClick: () => (e => {
						(ce || !oe && !ne) && (ce ? U(e.id) : A(e.id))
					})(e),
					resolvedOptionId: X,
					tournamentId: ee,
					userSelection: ne,
					userIsLoggedOut: !S,
					votePercentage: (ne || oe || W) && e.voteCount ? Math.floor(e.voteCount / $ * 100) : null,
					isShowingHint: W
				}))), s.a.createElement(te, {
					disabled: q || W || !!ne,
					isEnded: oe,
					userSelection: ne,
					isShowingHint: W,
					tournamentId: ee,
					onReveal: () => V(!0)
				}), s.a.createElement("div", {
					className: ve.a.predictionsCount
				}, ae && $ > 0 && Me._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [Me._param("total voters", Object(l.b)($)), Me._plural($)], {
					hk: "2u2Nv8"
				}), s.a.createElement(pe, {
					isCoins: !ae,
					endsAt: z,
					resolvedOptionId: X,
					totalStakeAmount: Q
				}))), !!de && s.a.createElement(T.b, {
					className: ve.a.modal,
					isCreatingVote: w,
					onOverlayClick: Y,
					onCancel: Y,
					onPredict: async ({
						coinPackage: e,
						chipPackage: n
					}) => {
						if (e && e.coins > x) return Object(p.promptUserToBuyMoreCoins)(), void H(E.a);
						const r = n ? n.id : e.id,
							s = n ? n.amount : e.coins;
						if (oe) return O({
							duration: 5e3,
							kind: P.b.Error,
							text: Me._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void A(null);
						if (!g || !M) throw new Error("Invalid arguments, optionId and pollId must be strings");
						I(!0), H(ee ? Object(E.n)({
							pollId: g,
							selectedNumberTokens: s
						}) : Object(E.m)({
							pollId: g,
							selectedNumberCoins: s,
							totalStakeAmount: Q
						}));
						try {
							await b({
								coinPackageId: r,
								optionId: M,
								postId: g,
								price: s
							}), t && y(g), I(!1), A(null), i ? G(!0) : O({
								duration: 5e3,
								kind: P.b.SuccessCommunity,
								text: Me._("Thanks! See if you're right in {timeToResult}", [Me._param("timeToResult", Object(u.a)(new Date(z), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (o) {
							I(!1), A(null), O({
								duration: 5e3,
								kind: P.b.Error,
								text: Me._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: de,
					pollId: g,
					subredditId: f.belongsTo.id,
					tournamentId: ee,
					withOverlay: !0
				}), ce && D && s.a.createElement(Ee, {
					isResolving: w,
					isTokens: ae,
					onOverlayClick: Y,
					onCancel: Y,
					onResolve: async () => {
						if (I(!0), !D) throw new Error("Failed to create prediction, missing selected option");
						try {
							await m({
								optionId: D,
								postId: g
							})
						} catch (e) {
							O({
								duration: 5e3,
								kind: P.b.Error,
								text: Me._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						U(null), I(!1)
					},
					withOverlay: !0
				}), !a && ee && s.a.createElement(Ie, {
					subredditId: f.belongsTo.id,
					tournamentId: ee
				}))
			};
			t.default = Fe(Object(o.b)(Ae, Be)(Te))
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
			}
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				b = n.n(p);

			function f({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var r;
				const p = Object(o.e)(m.W),
					f = Object(o.e)(m.j),
					h = Object(o.e)(m.C),
					g = Object(o.e)(e => Object(u.a)(e, {
						subredditId: n
					}));
				return (null === (r = null == g ? void 0 : g.latestParticipants) || void 0 === r ? void 0 : r.length) ? s.a.createElement("div", {
					className: Object(a.a)(b.a.tournamentFacepile, e)
				}, g.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: r
				}) => {
					const o = !!f && Object(l.e)(f) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = r,
						g = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? s.a.createElement(i.a, {
						key: g,
						backgroundClassName: b.a.snoovatarBackground,
						className: Object(a.a)(b.a.snoovatar, t),
						headshot: u
					}) : s.a.createElement(c.b, {
						key: g,
						className: Object(a.a)(b.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: o,
						isNSFW: m,
						isNightMode: p,
						shouldHideNSFW: h
					})
				})) : null
			}
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
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "k", (function() {
				return k
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(r),
				o = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				a = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				i = n("./src/graphql/operations/ConfirmStripePaymentNewCard.json"),
				c = n("./src/graphql/operations/ConfirmStripePaymentSavedCard.json"),
				d = n("./src/graphql/operations/CreateEconOrder.json"),
				l = n("./src/graphql/operations/CreatePaypalPayment.json"),
				u = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				m = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				b = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				f = n("./src/graphql/operations/UserSavedStripeCards.json"),
				h = n("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, n, r, o) => {
				const {
					premium: a,
					...i
				} = o, c = (null == a ? void 0 : a.pricePackage) || n.pricePackages[0], l = new s.a(c.price).multipliedBy(r).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: n.id,
							productVersion: n.version,
							pricePackageId: c.id,
							currency: c.currency,
							price: l,
							productsCount: r.toString(),
							...i
						}
					}
				})
			};
			var E;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(E || (E = {}));
			const _ = (e, t, n, r) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				P = (e, t, n, r) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				v = (e, t, n, r) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						cardId: r
					}
				}),
				O = (e, t, n, r, s) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: s
					}
				}),
				y = (e, t, n, r) => Object(h.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: n,
						token: r
					}
				}),
				x = (e, t, n, r) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: r
					}
				}),
				C = (e, t, n, r, s) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: r,
						saveCard: s
					}
				}),
				j = (e, t) => Object(h.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				S = e => Object(h.a)(e, {
					...f,
					variables: {}
				}),
				k = (e, t) => Object(h.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/helpers/localStorage/index.ts");

			function o(e, t) {
				let n;
				n = Object(s.x)(e);
				const [o, a] = Object(r.useState)(null != n ? n : t);
				return [o, function(t) {
					Object(s.wb)(e, t), a(t)
				}]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.Z
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/EyeDouble/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 16",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10.5 3.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zm0 8A3.38 3.38 0 1113.88 8a3.39 3.39 0 01-3.38 3.38z"
			}), s.a.createElement("path", {
				d: "M20.36 7.57a10.61 10.61 0 00-19.72 0 1.16 1.16 0 000 .86 10.73 10.73 0 002.42 3.65 10.62 10.62 0 0014.44.39 10.72 10.72 0 002.84-4 1.16 1.16 0 00.02-.9zm-3.67 4a9.34 9.34 0 01-12.75-.34A9.79 9.79 0 011.8 8a9.37 9.37 0 0117.4 0 9.4 9.4 0 01-2.51 3.53v.04z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const a = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(r || (r = {}));
			const o = {
				[r.Powerups]: () => s.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[r.Premium]: () => s.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === n,
					s = "new_purchaser" === n,
					o = "repeat_purchaser" === n;
				return t ? i.GildFlow : r ? i.LowCoinBalance : s ? i.NewUserTargetedOffer : o ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, o, a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(a.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(a.b)(r, s)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "j", (function() {
				return N
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "t", (function() {
				return D
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "s", (function() {
				return q
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "m", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Gold/Powerups/index.ts"),
				d = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts");
			const f = [],
				h = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === m.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				g = (e, t) => {
					const n = h(e, t);
					return n && n.endsAt || null
				};
			var E;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(E || (E = {}));
			const _ = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === m.a.Fetched) {
						const n = g(e, t),
							r = Date.now();
						return n && r < n ? E.Subscribed : E.NotSubscribed
					}
					return E.DontKnow
				},
				P = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === m.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === a.a.First),
							[i.a.Achievement]: r.find(e => e.placement === a.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function v(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const O = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return f;
					return v(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				y = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === m.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function x(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === s) return n;
				const o = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					c = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === c)
			}

			function j(e, t, n, r) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && r) return s.data.collections[n][r]
				}
				return f
			}

			function S(e, t) {
				const n = j(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function k(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return f
			}

			function N(e, t) {
				return j(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const w = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: d.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var I;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(I || (I = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				A = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const n = M.prices;
					A(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = h(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				F = (e, t) => {
					const n = e.subreddits.gov.meta[t || ""],
						r = n && n.extra && n.extra.nomenclature || M;
					return {
						prices: B(e, t),
						member: r.member || M.member,
						memberPlural: r.memberPlural || M.memberPlural,
						memberAlt: r.memberAlt || M.memberAlt,
						memberAltPlural: r.memberAltPlural || M.memberAltPlural,
						membership: r.membership || M.membership,
						membershipAlt: r.membershipAlt || M.membershipAlt
					}
				},
				T = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				D = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				R = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				U = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				q = (e, t, n) => {
					const s = "replyToPost" !== n && Object(p.a)(e, {
						commentId: n
					});
					if (!!s && Object(o.a)(s)) return !0;
					if (t && Object(b.p)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const a = r.d.spGiphy(e),
						i = U(e, t);
					return a && i
				},
				G = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/econ/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(r.Bb),
				a = Object(s.a)(r.Eb),
				i = Object(s.a)(r.zb),
				c = Object(s.a)(r.Cb),
				d = Object(s.a)(r.Ab),
				l = Object(s.a)(r.Db),
				u = Object(s.a)(r.Fb),
				m = Object(s.a)(r.tb),
				p = Object(s.a)(r.sb);
			Object(s.a)(r.ub)
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => t => {
				const n = Object(s.c)(t, {
					experimentEligibilitySelector: s.a,
					experimentName: e
				});
				return !(!n || Object(r.Ed)(n))
			}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/makeProductOfferKey/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, o, a;
					return t ? e.subreddits.productOffers[Object(s.a)(n, t)] : null === (a = null === (o = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === a ? void 0 : a[Object(s.a)(n)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return n && n[0]
				},
				u = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(r.a)(u, i.p, (e, t) => m(e, t) || null),
				b = Object(r.a)(p, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				f = Object(r.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				h = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(r.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return a
			})), n.d(t, "s", (function() {
				return i
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "u", (function() {
				return d
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "z", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "w", (function() {
				return P
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "v", (function() {
				return O
			})), n.d(t, "y", (function() {
				return y
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(r.i)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.updateCardModal.pending,
				g = e => e.features.goldPurchase.payment.paymentMethod,
				E = e => e.features.goldPurchase.payment.cardName,
				_ = e => e.features.goldPurchase.payment.postalCode,
				P = e => e.features.goldPurchase.payment.savedCardsPending,
				v = e => e.features.goldPurchase.payment.savedCards,
				O = e => e.features.goldPurchase.payment.rememberCard,
				y = e => e.features.goldPurchase.payment.useSavedCard,
				x = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				C = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				j = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				S = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				N = e => e.features.goldPurchase.payment.stripeToken.pending,
				w = e => e.features.goldPurchase.payment.paypal.passthrough,
				I = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.1dd96cf03aaa23429135.js.map