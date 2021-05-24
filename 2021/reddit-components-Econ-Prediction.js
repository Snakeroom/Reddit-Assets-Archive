// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.84dd3c1296db6342c589.js
// Retrieved at 5/24/2021, 3:10:05 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return N
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "a", (function() {
				return M
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/sentry/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/models/Gold/ProductOffer.ts"),
				c = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				l = n("./src/graphql/operations/GlobalProductOffers.json"),
				u = n("./src/graphql/operations/PremiumProductOfferSubscriptions.json"),
				m = n("./src/graphql/operations/ProductOffers.json"),
				p = n("./src/lib/makeGqlRequest/index.ts");
			var f = n("./src/reddit/selectors/gold/productOffers.ts"),
				b = n("./src/reddit/actions/gold/constants.ts");
			const h = Object(o.a)(b.cb),
				g = Object(o.a)(b.bb),
				v = Object(o.a)(b.ab),
				E = Object(o.a)(b.Y),
				P = Object(o.a)(b.X),
				O = Object(o.a)(b.W),
				x = Object(o.a)(b.Cb),
				_ = Object(o.a)(b.Ab),
				j = Object(o.a)(b.Bb),
				k = Object(o.a)(b.Fb),
				w = Object(o.a)(b.Eb),
				y = Object(o.a)(b.Db),
				C = e => async t => {
					t(Object(s.f)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, N = (e, t) => async n => {
					e === i.c.Premium ? n(S()) : t && n(I(e, t))
				}, I = (e, t) => async (n, o, {
					gqlContext: a
				}) => {
					const s = o();
					if (!Object(f.h)(s, {
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
							}))(a(), t, [e], !0);
							if (r.ok) {
								const e = r.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await n(g({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = r.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							n(v(e)), n(C(e))
						}
					}
				}, S = () => async (e, t, {
					gqlContext: n
				}) => {
					var o, s;
					const c = i.c.Premium;
					e(E());
					try {
						const t = await ((e, t) => Object(p.a)(e, {
							...l,
							variables: {
								productTypes: t
							}
						}))(n(), [c]);
						if (t.ok) {
							const n = t.body;
							if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) throw new Error(n.errors[0].message);
							return void e(P({
								productOffers: null !== (s = n.data.globalProductOffers.offers) && void 0 !== s ? s : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						a.c.captureMessage(t), e(O(t)), e(C(t))
					}
				}, A = () => async (e, t, {
					gqlContext: n
				}) => {
					var o, s, i;
					e(x());
					try {
						const t = await (e => Object(p.a)(e, u))(n());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const n = t.body;
							if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) throw new Error(n.errors[0].message);
							return void e(j({
								subscriptions: null !== (i = null === (s = n.data.identity) || void 0 === s ? void 0 : s.subscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (c) {
						a.c.captureException(c);
						const t = c.message ? c.message : r.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(_(t)), e(C(t))
					}
				}, M = e => async (t, n, {
					gqlContext: o
				}) => {
					var a;
					t(k(e));
					try {
						const n = await Object(d.b)(o(), e);
						if (n.error) throw new Error(n.error.type);
						if (n.ok) {
							const r = n.body,
								{
									errors: o
								} = r.data.cancelEconRecurringPayment;
							if (null == o ? void 0 : o.length) throw new Error(o[0].message);
							t(y({
								orderId: e
							}))
						}
						return !0
					} catch (s) {
						const e = null !== (a = s.message) && void 0 !== a ? a : r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(w(e)), t(C(e)), !1
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
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/hooks/useLocalStorage.ts"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = ({
				isFilled: e,
				...t
			}) => o.a.createElement(i.a, t);

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: i,
				storageKey: d = c.a.nonDismissable,
				title: p
			}) {
				const f = d !== c.a.nonDismissable,
					[b, h] = Object(a.a)(d, !f || !1),
					[g, v] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => {
					b || g || !i || (i(), v(!0))
				}, [b, g, i]), f && b ? null : o.a.createElement("div", {
					className: l.a.educationMessage
				}, o.a.createElement("div", {
					className: l.a.titleRow
				}, o.a.createElement("div", {
					className: l.a.header
				}, o.a.createElement("h3", {
					className: l.a.title
				}, p), t && o.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), f && o.a.createElement(s.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: m,
					onClick: () => {
						h(!0), n && n()
					},
					priority: s.b.Plain
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function i({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const i = r.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? r.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : r.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return a.a.createElement("div", null, a.a.createElement(s.a, {
					onClose: t,
					onView: n,
					title: i,
					newBadge: !0,
					message: c,
					storageKey: o
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
				return Re
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/lib/timeUntil/index.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/actions/economics/helpers/index.ts"),
				f = n("./src/reddit/actions/economics/predictions/index.ts"),
				b = n("./src/reddit/actions/post.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				g = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				v = n("./src/reddit/helpers/trackers/predictions.ts"),
				E = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/poll/index.ts"),
				x = n("./src/reddit/selectors/postCreations.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				w = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				y = n.n(w);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var N = ({
					className: e
				}) => o.a.createElement("div", {
					className: Object(d.a)(y.a.container, e)
				}, C._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				I = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx"),
				S = n("./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less"),
				A = n.n(S);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function T({
				didParticipate: e
			}) {
				const t = M._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = o.a.createElement(o.a.Fragment, null, M._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && o.a.createElement("div", {
						className: A.a.notificationBlurb
					}, M._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return o.a.createElement("div", null, o.a.createElement(I.a, {
					title: t,
					message: n
				}))
			}
			var R = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				q = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				F = n("./node_modules/fbt/lib/FbtPublic.js");

			function B() {
				const e = F.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = F.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(I.a, {
					title: e,
					message: t
				}))
			}
			var L = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				U = n("./src/reddit/icons/svgs/EyeDouble/index.tsx"),
				D = n("./src/reddit/actions/gold/productOffers.ts"),
				V = n("./src/config.ts"),
				W = n("./src/higherOrderComponents/asModal/index.tsx"),
				J = n("./src/reddit/controls/Button/index.tsx"),
				H = n("./src/reddit/icons/svgs/Close/index.tsx"),
				G = n("./src/reddit/selectors/gold/productOffers.ts"),
				Y = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				X = n("./src/reddit/components/Econ/Prediction/HintUpsellModal/index.m.less"),
				z = n.n(X);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var K = Object(W.a)(({
					onReveal: e,
					closeModal: t
				}) => {
					const n = Object(a.e)(G.f),
						r = Boolean(n);
					return o.a.createElement("div", {
						className: z.a.modal
					}, o.a.createElement(J.q, {
						className: z.a.closeButton,
						Icon: H.a,
						priority: J.b.Plain,
						onClick: t
					}), o.a.createElement("header", {
						className: z.a.header
					}, o.a.createElement(Y.a, {
						className: z.a.image
					}), o.a.createElement("div", {
						className: z.a.spacer
					}), o.a.createElement("p", {
						className: z.a.premium
					}, Z._("Premium Feature", null, {
						hk: "32ZWoW"
					})), o.a.createElement("div", {
						className: z.a.smallSpacer
					}), o.a.createElement("h2", {
						className: z.a.title
					}, Z._("Sneak Peek", null, {
						hk: "2FAIvU"
					})), o.a.createElement("h3", {
						className: z.a.subtitle
					}, Z._("Premium users can see how others have predicted before they make their own Prediction.", null, {
						hk: "2mpEHX"
					}))), r ? o.a.createElement("a", {
						className: z.a.link,
						href: `${V.a.redditUrl}/premium`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => t()
					}, Z._("Get Premium", null, {
						hk: "3tW2d3"
					})) : o.a.createElement("button", {
						className: z.a.button,
						onClick: () => {
							e(), t()
						}
					}, Z._("Continue", null, {
						hk: "3T00JU"
					})), o.a.createElement("div", {
						className: z.a.spacer
					}), o.a.createElement("p", {
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
					isShowingHint: s,
					onReveal: i
				}) => {
					const c = Object(a.e)(g.f),
						[l, u] = Object(r.useState)(!1),
						m = Object(a.d)();
					return Object(r.useEffect)(() => {
						m(Object(D.b)())
					}, []), !c || t || n && !s ? null : o.a.createElement("div", {
						className: $.a.optionButtonWrapper
					}, o.a.createElement("button", {
						"aria-label": ee._("Sneak a peek", null, {
							hk: "1VQ7WW"
						}),
						className: Object(d.a)($.a.hintButton, {
							[$.a.canGetHint]: !e
						}),
						disabled: e,
						onClick: () => u(!0)
					}, o.a.createElement("div", {
						className: $.a.optionBody
					}, o.a.createElement(U.a, {
						className: $.a.eyeIcon
					}), o.a.createElement("div", {
						className: $.a.optionText
					}, ee._("See what others think", null, {
						hk: "2TLT90"
					})))), l && o.a.createElement(K, {
						onReveal: i,
						closeModal: () => u(!1),
						withOverlay: !0,
						onOverlayClick: () => u(!1)
					}))
				},
				ne = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				re = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				oe = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				ae = n.n(oe);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ie({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: r,
				wonAmount: a
			}) {
				return e && !n ? o.a.createElement("div", null, o.a.createElement(I.a, {
					title: se._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, se._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!r && o.a.createElement("div", {
						className: ae.a.wonOrLostAmountRow
					}, se._("You lost {lostAmount}", [se._param("lostAmount", o.a.createElement("div", {
						className: ae.a.wonOrLostAmount
					}, t ? o.a.createElement(re.a, {
						className: ae.a.coinIcon
					}) : o.a.createElement(ne.a, {
						className: ae.a.coinIcon
					}), r))], {
						hk: "6091x"
					})))
				})) : e && n && r && !a ? o.a.createElement("div", null, o.a.createElement(I.a, {
					title: se._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, se._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: ae.a.wonOrLostAmountRow
					}, se._("You've been refunded {refundedAmount}", [se._param("refundedAmount", o.a.createElement("div", {
						className: ae.a.wonOrLostAmount
					}, t ? o.a.createElement(re.a, {
						className: ae.a.coinIcon
					}) : o.a.createElement(ne.a, {
						className: ae.a.coinIcon
					}), r))], {
						hk: "49bOe9"
					})))
				})) : e && n ? o.a.createElement("div", null, o.a.createElement(I.a, {
					title: se._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, se._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!a && o.a.createElement("div", {
						className: ae.a.wonOrLostAmountRow
					}, se._("You won {wonAmount}", [se._param("wonAmount", o.a.createElement("div", {
						className: ae.a.wonOrLostAmount
					}, t ? o.a.createElement(re.a, {
						className: ae.a.coinIcon
					}) : o.a.createElement(ne.a, {
						className: ae.a.coinIcon
					}), r + a))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(I.a, {
					title: se._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: se._("The outcome has been provided.", null, {
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
			}) => Date.now() > e ? o.a.createElement("div", {
				className: le.a.statusBar
			}, n && o.a.createElement(ce.a, {
				className: le.a.clockIcon
			}), t ? ue._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : ue._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : o.a.createElement("div", {
				className: le.a.statusBar
			}, n && o.a.createElement(ce.a, {
				className: le.a.clockIcon
			}), ue._("Prediction ends in {expirationDuration}", [ue._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var pe = ({
					endsAt: e,
					resolvedOptionId: t,
					totalStakeAmount: n,
					isCoins: r
				}) => o.a.createElement("div", null, n > 0 && r && o.a.createElement("div", {
					className: le.a.statusBar
				}, o.a.createElement(ne.a, {
					className: le.a.coinIcon
				}), n, " ", ue._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(me, {
					endsAt: e,
					resolvedOptionId: t,
					isCoins: r
				})),
				fe = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				be = n.n(fe);
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ge = Object(W.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: r
				}) {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: be.a.header
					}, o.a.createElement(J.q, {
						className: be.a.closeButton,
						Icon: H.a,
						priority: J.b.Plain,
						onClick: n
					}), o.a.createElement("h1", null, he._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), o.a.createElement("div", {
						className: be.a.content
					}, o.a.createElement("p", {
						className: be.a.message
					}, t ? he._("Once you hit Submit, the answer is final and tokens will be distributed to the winners", null, {
						hk: "4cSIyE"
					}) : he._("Once you hit Submit, the answer is final and coins will be distributed to the winners", null, {
						hk: "3Nutvx"
					})), o.a.createElement("div", {
						className: be.a.actions
					}, o.a.createElement(J.l, {
						disabled: e,
						onClick: n,
						priority: J.b.Secondary,
						redditStyle: !0,
						size: J.c.S
					}, he._("Cancel", null, {
						hk: "4Gco5s"
					})), o.a.createElement(J.i, {
						className: be.a.submitButton,
						disabled: e,
						onClick: () => {
							r()
						},
						redditStyle: !0,
						size: J.c.S
					}, he._("Submit", null, {
						hk: "ZLsi7"
					})))))
				})),
				ve = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				Ee = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Pe = n.n(Ee),
				Oe = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				xe = n("./src/reddit/controls/InternalLink/index.tsx"),
				_e = n("./src/reddit/hooks/usePageLayer.ts"),
				je = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				ke = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				we = n("./src/reddit/selectors/subreddit.ts"),
				ye = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Ce = n.n(ye);
			const {
				fbt: Ne
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ie({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(a.d)(),
					s = Object(E.a)(),
					i = Object(_e.a)(),
					c = Object(a.e)(t => Object(we.U)(t, {
						subredditId: e
					})),
					d = Object(a.e)(t => Object(ke.g)(t, {
						subredditId: e
					})),
					u = Object(a.e)(t => Object(ke.a)(t, {
						subredditId: e
					})),
					p = Object(m.w)(i),
					b = Object(m.G)(i),
					h = Object(m.K)(i);
				if (Object(r.useEffect)(() => {
						d || n(Object(f.g)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: g,
					totalParticipantsCount: P
				} = u;
				return o.a.createElement(xe.a, {
					className: Ce.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						s(Object(v.j)({
							pageType: p ? "post_detail" : h ? "community" : b ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(Oe.a, {
					className: Ce.a.facepile,
					subredditId: e
				}), o.a.createElement("div", {
					className: Ce.a.info
				}, o.a.createElement("div", {
					className: Ce.a.tournamentName
				}, g), o.a.createElement("div", {
					className: Ce.a.totalPlayers
				}, P > 0 ? Ne._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [Ne._param("totalPlayers", Object(l.b)(P)), Ne._plural(P)], {
					hk: "3eDpRH"
				}) : Ne._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(je.a, {
					className: Ce.a.chevron
				}))
			}
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ae = Object(s.c)({
				isAutoVoteEnabled: g.e,
				isEditing: x.K,
				isVoteAnimationEnabled: g.d,
				prediction: O.g,
				pollId: O.a,
				post: _.F,
				subredditOrProfile: _.R,
				userCoins: j.d,
				userIsLoggedIn: j.J,
				userId: j.ob
			}), Me = {
				onPredictionResolve: f.j,
				onPredictionVote: f.k,
				showToast: h.f,
				upvoteToggled: b.bb
			}, Te = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), Re = ({
				className: e,
				isAutoVoteEnabled: t,
				isCommentsPage: n,
				isEditing: a,
				isPredictionsPage: s,
				isVoteAnimationEnabled: i,
				onPredictionResolve: m,
				onPredictionVote: f,
				post: b,
				prediction: h,
				pollId: g,
				subredditOrProfile: O,
				showToast: x,
				upvoteToggled: _,
				userCoins: j,
				userId: w,
				userIsLoggedIn: y
			}) => {
				var C;
				const [I, S] = Object(r.useState)(!1), [A, M] = Object(r.useState)(null), [F, U] = Object(r.useState)(null), [D, V] = Object(r.useState)(!1), [W, J] = Object(r.useState)(!1), H = Object(E.a)(), G = Object(r.useCallback)(() => {
					V(!1)
				}, []), Y = Object(r.useCallback)(() => {
					M(null), U(null)
				}, []);
				if (!g || !h || !O) return o.a.createElement(N, null);
				const {
					creatorId: X,
					endsAt: z,
					options: Z,
					resolvedOptionId: K,
					totalStakeAmount: Q,
					totalVoters: $,
					tournamentId: ee,
					userSelection: ne,
					userWonAmount: re
				} = h, oe = X === w, ae = z < Date.now(), se = !c()(ee), ce = ae && oe && !K, de = Z.find(({
					id: e
				}) => e === A), le = n ? Object(d.a)(e, Pe.a.container, Pe.a.forCommentsPage, {
					[Pe.a.isEditing]: a
				}) : Object(d.a)(e, Pe.a.container);
				return o.a.createElement("div", {
					className: le,
					onClick: e => {
						h && e.stopPropagation()
					}
				}, n ? ae ? K ? o.a.createElement(ie, {
					didParticipate: !!ne,
					isTokens: se,
					isWinner: K === ne,
					predictedAmount: ne && (null === (C = Z.find(({
						id: e
					}) => e === ne)) || void 0 === C ? void 0 : C.userStakeAmount) || 0,
					wonAmount: re
				}) : ce ? o.a.createElement(B, null) : o.a.createElement(T, {
					didParticipate: !!ne
				}) : o.a.createElement(R.a, {
					isTokens: se,
					storageKey: k.a.feature
				}) : null, o.a.createElement("div", {
					className: Pe.a.poll
				}, Z.map(e => o.a.createElement(ve.a, {
					endsAt: z,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: D && ne === e.id,
					onAnimationEnd: G
				}, o.a.createElement(L.a, {
					disabled: D,
					isEnded: ae,
					isSelected: A === e.id,
					needsResolution: ce,
					option: e,
					onClick: () => (e => {
						(ce || !ae && !ne) && (ce ? U(e.id) : M(e.id))
					})(e),
					resolvedOptionId: K,
					tournamentId: ee,
					userSelection: ne,
					userIsLoggedOut: !y,
					votePercentage: (ne || ae || W) && e.voteCount ? Math.floor(e.voteCount / $ * 100) : null,
					isShowingHint: W
				}))), o.a.createElement(te, {
					disabled: D || W || !!ne,
					isEnded: ae,
					userSelection: ne,
					isShowingHint: W,
					onReveal: () => J(!0)
				}), o.a.createElement("div", {
					className: Pe.a.predictionsCount
				}, se && $ > 0 && Se._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [Se._param("total voters", Object(l.b)($)), Se._plural($)], {
					hk: "2u2Nv8"
				}), o.a.createElement(pe, {
					isCoins: !se,
					endsAt: z,
					resolvedOptionId: K,
					totalStakeAmount: Q
				}))), !!de && o.a.createElement(q.b, {
					className: Pe.a.modal,
					isCreatingVote: I,
					onOverlayClick: Y,
					onCancel: Y,
					onPredict: async ({
						coinPackage: e,
						chipPackage: n
					}) => {
						if (e && e.coins > j) return Object(p.promptUserToBuyMoreCoins)(), void H(v.a);
						const r = n ? n.id : e.id,
							o = n ? n.amount : e.coins;
						if (ae) return x({
							duration: 5e3,
							kind: P.b.Error,
							text: Se._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void M(null);
						if (!g || !A) throw new Error("Invalid arguments, optionId and pollId must be strings");
						S(!0), H(ee ? Object(v.n)({
							pollId: g,
							selectedNumberTokens: o
						}) : Object(v.m)({
							pollId: g,
							selectedNumberCoins: o,
							totalStakeAmount: Q
						}));
						try {
							await f({
								coinPackageId: r,
								optionId: A,
								postId: g,
								price: o
							}), t && _(g), S(!1), M(null), i ? V(!0) : x({
								duration: 5e3,
								kind: P.b.SuccessCommunity,
								text: Se._("Thanks! See if you're right in {timeToResult}", [Se._param("timeToResult", Object(u.a)(new Date(z), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (a) {
							S(!1), M(null), x({
								duration: 5e3,
								kind: P.b.Error,
								text: Se._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: de,
					pollId: g,
					subredditId: b.belongsTo.id,
					tournamentId: ee,
					withOverlay: !0
				}), ce && F && o.a.createElement(ge, {
					isResolving: I,
					isTokens: se,
					onOverlayClick: Y,
					onCancel: Y,
					onResolve: async () => {
						if (S(!0), !F) throw new Error("Failed to create prediction, missing selected option");
						try {
							await m({
								optionId: F,
								postId: g
							})
						} catch (e) {
							x({
								duration: 5e3,
								kind: P.b.Error,
								text: Se._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						U(null), S(!1)
					},
					withOverlay: !0
				}), !s && ee && o.a.createElement(Ie, {
					subredditId: b.belongsTo.id,
					tournamentId: ee
				}))
			};
			t.default = Te(Object(a.b)(Ae, Me)(Re))
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
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				f = n.n(p);

			function b({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var r;
				const p = Object(a.e)(m.V),
					b = Object(a.e)(m.i),
					h = Object(a.e)(m.B),
					g = Object(a.e)(e => Object(u.a)(e, {
						subredditId: n
					}));
				return (null === (r = null == g ? void 0 : g.latestParticipants) || void 0 === r ? void 0 : r.length) ? o.a.createElement("div", {
					className: Object(s.a)(f.a.tournamentFacepile, e)
				}, g.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: r
				}) => {
					const a = !!b && Object(l.e)(b) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = r,
						g = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? o.a.createElement(i.a, {
						key: g,
						backgroundClassName: f.a.snoovatarBackground,
						className: Object(s.a)(f.a.snoovatar, t),
						headshot: u
					}) : o.a.createElement(c.a, {
						key: g,
						className: Object(s.a)(f.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: a,
						isNSFW: m,
						isNightMode: p,
						shouldHideNSFW: h
					})
				})) : null
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return g
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "k", (function() {
				return C
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				o = n.n(r),
				a = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				s = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				i = n("./src/graphql/operations/ConfirmStripePaymentNewCard.json"),
				c = n("./src/graphql/operations/ConfirmStripePaymentSavedCard.json"),
				d = n("./src/graphql/operations/CreateEconOrder.json"),
				l = n("./src/graphql/operations/CreatePaypalPayment.json"),
				u = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				m = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				f = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				b = n("./src/graphql/operations/UserSavedStripeCards.json"),
				h = n("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, n, r, a) => {
				const {
					premium: s,
					...i
				} = a, c = (null == s ? void 0 : s.pricePackage) || n.pricePackages[0], l = new o.a(c.price).multipliedBy(r).toFixed();
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
			var v;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(v || (v = {}));
			const E = (e, t, n, r) => Object(h.a)(e, {
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
				O = (e, t, n, r) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						cardId: r
					}
				}),
				x = (e, t, n, r, o) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: o
					}
				}),
				_ = (e, t, n, r) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: n,
						token: r
					}
				}),
				j = (e, t, n, r) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: r
					}
				}),
				k = (e, t, n, r, o) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: r,
						saveCard: o
					}
				}),
				w = (e, t) => Object(h.a)(e, {
					...a,
					variables: {
						orderId: t
					}
				}),
				y = e => Object(h.a)(e, {
					...b,
					variables: {}
				}),
				C = (e, t) => Object(h.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function a(e, t) {
				let n;
				n = Object(o.w)(e);
				const [a, s] = Object(r.useState)(null != n ? n : t);
				return [a, function(t) {
					Object(o.ub)(e, t), s(t)
				}]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.Z
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/EyeDouble/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 16",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M10.5 3.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zm0 8A3.38 3.38 0 1113.88 8a3.39 3.39 0 01-3.38 3.38z"
			}), o.a.createElement("path", {
				d: "M20.36 7.57a10.61 10.61 0 00-19.72 0 1.16 1.16 0 000 .86 10.73 10.73 0 002.42 3.65 10.62 10.62 0 0014.44.39 10.72 10.72 0 002.84-4 1.16 1.16 0 00.02-.9zm-3.67 4a9.34 9.34 0 01-12.75-.34A9.79 9.79 0 011.8 8a9.37 9.37 0 0117.4 0 9.4 9.4 0 01-2.51 3.53v.04z"
			}))
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, o = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(r || (r = {}));
			const a = {
				[r.Powerups]: () => o.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[r.Premium]: () => o.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var s, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(s || (s = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const n = e && e.dealInfo && e.dealInfo.type,
					r = "low_coin_upsell" === n,
					o = "new_purchaser" === n,
					a = "repeat_purchaser" === n;
				return t ? i.GildFlow : r ? i.LowCoinBalance : o ? i.NewUserTargetedOffer : a ? i.RepeatUserTargetedOffer : void 0
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
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/makeProductOfferKey/index.ts"),
				a = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, a, s;
					return t ? e.subreddits.productOffers[Object(o.a)(n, t)] : null === (s = null === (a = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(n)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return n && n[0]
				},
				u = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(r.a)(u, i.p, (e, t) => m(e, t) || null),
				f = Object(r.a)(p, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				b = Object(r.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				h = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(r.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return s
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
				return f
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "z", (function() {
				return h
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "w", (function() {
				return P
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "y", (function() {
				return _
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return S
			}));
			var r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: a.a
				}
			});
			const s = e => e.features.goldPurchase.purchaseModal.activePage,
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
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.updateCardModal.pending,
				g = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				E = e => e.features.goldPurchase.payment.postalCode,
				P = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				x = e => e.features.goldPurchase.payment.rememberCard,
				_ = e => e.features.goldPurchase.payment.useSavedCard,
				j = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				k = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				w = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				y = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				C = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				N = e => e.features.goldPurchase.payment.stripeToken.pending,
				I = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.84dd3c1296db6342c589.js.map