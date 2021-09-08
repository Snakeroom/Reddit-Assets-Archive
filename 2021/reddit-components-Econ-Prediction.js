// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.76353a2581c67ece5eba.js
// Retrieved at 9/8/2021, 3:50:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = [r.mc, r.ob, r.A, r.P, r.jb, r.Pb],
				i = {
					[r.Pb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.jb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.P]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.A]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.ob]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.mc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[r.Pb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.jb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.P]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.A]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.mc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.mc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e, t = !1, n = !1) {
				const a = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.mc]: "",
						[r.ob]: "",
						[r.A]: "",
						[r.P]: "",
						[r.jb]: "",
						[r.Pb]: ""
					};
				let u = d - a;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of o) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? c : i)[s](e).toString()), u -= e * s
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(s.a)(i.a),
				a = Object(s.a)(i.b),
				d = Object(s.a)(i.c),
				l = Object(s.a)(i.d),
				u = Object(s.a)(i.e),
				m = Object(s.a)(i.f),
				b = Object(s.a)(i.g),
				p = Object(s.a)(i.h),
				f = Object(s.a)(i.i),
				E = e => Object(r.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less": function(e, t, n) {
			e.exports = {
				predictionOption: "_3wvUT6tjOcXB4BiKlEXrxY",
				selected: "_1gT-9Fji_KmUujExIMuFfd",
				userIcon: "k-ZpKUSo0rrrjE-paWfxJ",
				predictionOptionLabel: "_1Vz7v_uQsxv72ujqMsoKZQ"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(s || (s = {}))
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				educationMessage: "_3fy4maW8GQWdzcWGdeMbsa",
				titleRow: "_1OeK7ZGX2fnKzdqjn-5gQD",
				header: "_1Y7_NWRItnxdsOq9DSlCDi",
				title: "_2ZZDhQ9qffZd-pGxZE6R4I",
				newBadge: "_1cHmK8KSQMLT0mELC910oM",
				closeButton: "_1C2XLQWgnLb_MVlB0fwAc_"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function m({
				message: e,
				newBadge: t,
				onClose: n,
				onView: d,
				storageKey: m = a.a.nonDismissable,
				title: b
			}) {
				const p = m !== a.a.nonDismissable,
					[f, E] = Object(o.a)(m, !p || !1),
					[h, _] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					f || h || !d || (d(), _(!0))
				}, [f, h, d]), p && f ? null : r.a.createElement("div", {
					className: l.a.educationMessage
				}, r.a.createElement("div", {
					className: l.a.titleRow
				}, r.a.createElement("div", {
					className: l.a.header
				}, r.a.createElement("h3", {
					className: l.a.title
				}, b), t && r.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), p && r.a.createElement(i.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: Object(c.b)("close"),
					onClick: () => {
						E(!0), n && n()
					},
					priority: i.b.Plain
				})), e)
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_2681BT2Imfw1O3Zy_oLAcl"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function c({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: r
			}) {
				const c = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					a = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return o.a.createElement("div", null, o.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: c,
					newBadge: !0,
					message: a,
					storageKey: r
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				coinIcon: "zSh1egnQOovr8gIxiO-BE",
				wonOrLostAmountRow: "_3f80EjeUjSRy5-WqzqE7VJ",
				wonOrLostAmount: "_2nXf3pIf7lmCE6_ZAQXdt5"
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
				return Ve
			}));
			var s = n("./node_modules/lodash/isNil.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/actions/economics/helpers/index.ts"),
				b = n("./src/reddit/actions/economics/predictions/index.ts"),
				p = n("./src/reddit/actions/post.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				h = n("./src/reddit/helpers/trackers/predictions.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/models/Prediction/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts"),
				O = n("./src/reddit/selectors/poll/index.ts"),
				C = n("./src/reddit/selectors/postCreations.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				S = n.n(k);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var N = ({
					className: e
				}) => i.a.createElement("div", {
					className: Object(d.a)(S.a.container, e)
				}, j._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				w = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				A = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				M = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				B = n.n(M);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function F({
				didParticipate: e
			}) {
				const t = L._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = i.a.createElement(i.a.Fragment, null, L._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && i.a.createElement("div", {
						className: B.a.notificationBlurb
					}, L._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return i.a.createElement("div", null, i.a.createElement(A.a, {
					title: t,
					message: n
				}))
			}
			var U = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx"),
				D = n("./node_modules/fbt/lib/FbtPublic.js");

			function T() {
				const e = D.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = D.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return i.a.createElement("div", null, i.a.createElement(A.a, {
					title: e,
					message: t
				}))
			}
			var R = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				G = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				Y = n.n(W);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function K({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: r
			}) {
				return e && !n ? i.a.createElement("div", null, i.a.createElement(A.a, {
					title: H._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: i.a.createElement(i.a.Fragment, null, H._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && i.a.createElement("div", {
						className: Y.a.wonOrLostAmountRow
					}, H._("You lost {lostAmount}", [H._param("lostAmount", i.a.createElement("div", {
						className: Y.a.wonOrLostAmount
					}, t ? i.a.createElement(G.a, {
						className: Y.a.coinIcon
					}) : i.a.createElement(R.a, {
						className: Y.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !r ? i.a.createElement("div", null, i.a.createElement(A.a, {
					title: H._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: i.a.createElement(i.a.Fragment, null, H._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), i.a.createElement("div", {
						className: Y.a.wonOrLostAmountRow
					}, H._("You've been refunded {refundedAmount}", [H._param("refundedAmount", i.a.createElement("div", {
						className: Y.a.wonOrLostAmount
					}, t ? i.a.createElement(G.a, {
						className: Y.a.coinIcon
					}) : i.a.createElement(R.a, {
						className: Y.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? i.a.createElement("div", null, i.a.createElement(A.a, {
					title: H._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: i.a.createElement(i.a.Fragment, null, H._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!r && i.a.createElement("div", {
						className: Y.a.wonOrLostAmountRow
					}, H._("You won {wonAmount}", [H._param("wonAmount", i.a.createElement("div", {
						className: Y.a.wonOrLostAmount
					}, t ? i.a.createElement(G.a, {
						className: Y.a.coinIcon
					}) : i.a.createElement(R.a, {
						className: Y.a.coinIcon
					}), s + r))], {
						hk: "1zg0cH"
					})))
				})) : i.a.createElement("div", null, i.a.createElement(A.a, {
					title: H._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: H._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			const V = ({
				prediction: e,
				isCreator: t
			}) => {
				var n;
				const {
					endsAt: s,
					options: o,
					resolvedOptionId: c,
					tournamentId: a,
					userSelection: d,
					userWonAmount: l
				} = e, u = s < Date.now(), m = !r()(a), b = u && t && !c;
				return u ? c ? i.a.createElement(K, {
					didParticipate: !!d,
					isTokens: m,
					isWinner: c === d,
					predictedAmount: d && (null === (n = o.find(({
						id: e
					}) => e === d)) || void 0 === n ? void 0 : n.userStakeAmount) || 0,
					wonAmount: l
				}) : b ? i.a.createElement(T, null) : i.a.createElement(F, {
					didParticipate: !!d
				}) : i.a.createElement(U.a, {
					isTokens: m,
					storageKey: w.a.feature
				})
			};
			var z = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				q = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				Z = n("./src/higherOrderComponents/asModal/index.tsx"),
				X = n("./src/lib/initializeClient/installReducer.ts"),
				Q = n("./src/reddit/reducers/features/predictions/index.ts"),
				J = n("./src/reddit/endpoints/economics/predictions.ts");
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(X.a)({
				features: {
					predictions: Q.a
				}
			});
			const ee = e => e(Object(f.f)({
				duration: f.a,
				kind: v.b.Error,
				text: $._("Error: Failed to change prediction selection, please try again later", null, {
					hk: "WLVPy"
				})
			}));
			var te = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ne = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				se = n("./src/reddit/controls/TextButton/index.tsx"),
				re = n("./src/reddit/helpers/trackers/predictionsPremiumFeatures.ts"),
				oe = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				ie = n("./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less"),
				ce = n.n(ie);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const de = Object(Z.a)(({
					postId: e,
					options: t,
					selectedOptionId: n,
					onClose: s
				}) => {
					const r = Object(c.d)(),
						a = Object(_.a)(),
						[l, u] = Object(o.useState)(null);
					return i.a.createElement(te.e, null, i.a.createElement(te.i, null, i.a.createElement(oe.a, null, i.a.createElement(te.q, null, D.fbt._("Change your prediction", null, {
						hk: "34AjlU"
					})), i.a.createElement(se.a, {
						onClick: s
					}, i.a.createElement(te.b, null)))), i.a.createElement(te.l, null, t.map(e => i.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(d.a)(ce.a.predictionOption, {
							[ce.a.selected]: e.id === (null == l ? void 0 : l.id)
						}),
						disabled: e.id === n,
						onClick: () => u(e)
					}, i.a.createElement("span", {
						className: ce.a.predictionOptionLabel
					}, e.text), e.id === n && i.a.createElement(ne.a, {
						className: ce.a.userIcon
					})))), i.a.createElement(te.g, null, i.a.createElement(te.a, {
						onClick: s,
						"data-redditstyle": !0
					}, D.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(te.c, {
						disabled: !l,
						onClick: () => {
							l && (r((({
								postId: e,
								optionId: t
							}) => async (n, s, {
								gqlContext: r
							}) => {
								if (e && t) try {
									const s = await Object(J.e)(r(), {
										postId: e,
										optionId: t
									});
									n(Object(b.e)({
										postId: e,
										prediction: s
									})), n(Object(f.f)({
										duration: f.a,
										kind: v.b.SuccessCommunity,
										text: $._("Your prediction has been updated", null, {
											hk: "4wwhZ6"
										})
									}))
								} catch {
									ee(n)
								} else ee(n)
							})({
								postId: e,
								optionId: l.id
							})), a(Object(re.c)(e)), s())
						}
					}, D.fbt._("Confirm", null, {
						hk: "2Fmv8L"
					}))))
				}),
				le = e => i.a.createElement(de, ae({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e));
			var ue = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				me = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				be = n.n(me);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), fe = ({
				postId: e,
				options: t,
				selectedOptionId: n,
				isLimitReached: s
			}) => {
				const r = Object(c.d)(),
					a = Object(_.a)(),
					d = Object(c.e)(I.t),
					[l, u] = Object(o.useState)(!1),
					m = s ? pe._("You've already changed your answer twice", null, {
						hk: "h33B"
					}) : pe._("Change your prediction", null, {
						hk: "hleE5"
					});
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
					"aria-label": m,
					className: be.a.additionalOptionButton,
					disabled: s,
					onClick: () => {
						d && (u(!0), a(Object(re.a)(e))), d || (r(Object(b.p)("CHANGE_PREDICTION")), a(Object(re.b)(e)))
					}
				}, i.a.createElement(ue.a, {
					className: be.a.icon
				}), m), l && i.a.createElement(le, {
					postId: e,
					options: t,
					selectedOptionId: n,
					onClose: () => u(!1)
				}))
			};
			var Ee = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				he = n("./src/lib/timeUntil/index.ts"),
				_e = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				ge = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ve = n.n(ge);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xe = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? i.a.createElement("div", {
				className: ve.a.statusBar
			}, n && i.a.createElement(_e.a, {
				className: ve.a.clockIcon
			}), t ? Pe._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : Pe._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : i.a.createElement("div", {
				className: ve.a.statusBar
			}, n && i.a.createElement(_e.a, {
				className: ve.a.clockIcon
			}), Pe._("Prediction ends in {expirationDuration}", [Pe._param("expirationDuration", Object(he.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			})), Oe = ({
				endsAt: e,
				status: t,
				resolvedOptionId: n,
				totalStakeAmount: s,
				isCoins: r
			}) => t === g.b.Cancelled || t === g.b.CancelInProgress ? i.a.createElement("div", {
				className: ve.a.statusBar
			}, Pe._("Canceled", null, {
				hk: "1SL2bC"
			})) : i.a.createElement("div", null, s > 0 && r && i.a.createElement("div", {
				className: ve.a.statusBar
			}, i.a.createElement(R.a, {
				className: ve.a.coinIcon
			}), s, " ", Pe._("added by participants", null, {
				hk: "PSq3T"
			})), i.a.createElement(xe, {
				endsAt: e,
				resolvedOptionId: n,
				isCoins: r
			}));
			var Ce = n("./src/reddit/controls/Button/index.tsx"),
				ye = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				ke = n.n(Ie);
			var Se = Object(Z.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: ke.a.header
					}, i.a.createElement(Ce.q, {
						className: ke.a.closeButton,
						Icon: Object(ye.b)("close"),
						priority: Ce.b.Plain,
						onClick: n
					}), i.a.createElement("h1", null, D.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), i.a.createElement("div", {
						className: ke.a.content
					}, i.a.createElement("p", {
						className: ke.a.message
					}, t ? D.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : D.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})), i.a.createElement("div", {
						className: ke.a.actions
					}, i.a.createElement(Ce.l, {
						disabled: e,
						onClick: n,
						priority: Ce.b.Secondary,
						redditStyle: !0,
						size: Ce.c.S
					}, D.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(Ce.i, {
						className: ke.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: Ce.c.S
					}, D.fbt._("Submit", null, {
						hk: "4aU3dh"
					})))))
				})),
				je = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				Ne = n("./src/reddit/controls/InternalLink/index.tsx"),
				we = n("./src/reddit/hooks/usePageLayer.ts"),
				Ae = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Me = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Be = n("./src/reddit/selectors/subreddit.ts"),
				Le = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Fe = n.n(Le);
			const {
				fbt: Ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function De({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(c.d)(),
					s = Object(_.a)(),
					r = Object(we.a)(),
					a = Object(c.e)(t => Object(Be.Q)(t, {
						subredditId: e
					})),
					d = Object(c.e)(t => Object(Me.h)(t, {
						subredditId: e
					})),
					m = Object(c.e)(t => Object(Me.b)(t, {
						subredditId: e
					})),
					p = Object(u.x)(r),
					f = Object(u.I)(r),
					E = Object(u.M)(r);
				if (Object(o.useEffect)(() => {
						d || n(Object(b.k)(a.name))
					}, [n, d, a.name]), (null == m ? void 0 : m.tournamentId) !== t) return null;
				const {
					name: g,
					totalParticipantsCount: v
				} = m;
				return i.a.createElement(Ne.a, {
					className: Fe.a.tournamentLink,
					to: `${a.url}predictions/`,
					onClick: () => {
						s(Object(h.k)({
							pageType: p ? "post_detail" : E ? "community" : f ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, i.a.createElement(je.a, {
					className: Fe.a.facepile,
					subredditId: e
				}), i.a.createElement("div", {
					className: Fe.a.info
				}, i.a.createElement("div", {
					className: Fe.a.tournamentName
				}, g), i.a.createElement("div", {
					className: Fe.a.totalPlayers
				}, v > 0 ? Ue._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [Ue._param("totalPlayers", Object(l.b)(v)), Ue._plural(v)], {
					hk: "3eDpRH"
				}) : Ue._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), i.a.createElement(Ae.a, {
					className: Fe.a.chevron
				}))
			}
			var Te = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				Re = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Ge = n.n(Re);
			const {
				fbt: We
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ye = Object(a.c)({
				isAutoVoteEnabled: x.p,
				isEditing: C.K,
				isChangePredictionAvailable: (e, {
					postId: t
				}) => {
					const n = Object(O.g)(e, {
						postId: t
					});
					return Boolean((null == n ? void 0 : n.userSelection) && !(null == n ? void 0 : n.resolvedOptionId) && Object(x.t)(e))
				},
				prediction: O.g,
				pollId: O.a,
				post: y.H,
				subredditOrProfile: y.U,
				userCoins: I.e,
				userIsLoggedIn: I.K,
				userId: I.qb
			}), He = {
				onPredictionResolve: b.m,
				onPredictionVote: b.n,
				showToast: f.f,
				upvoteToggled: p.db
			}, Ke = Object(u.u)({
				isCommentsPage: u.x,
				isPredictionsPage: u.N
			}), Ve = ({
				className: e,
				isAutoVoteEnabled: t,
				isChangePredictionAvailable: n,
				isCommentsPage: s,
				isEditing: c,
				isPredictionsPage: a,
				onPredictionResolve: u,
				onPredictionVote: b,
				post: p,
				prediction: f,
				pollId: x,
				subredditOrProfile: O,
				showToast: C,
				upvoteToggled: y,
				userCoins: I,
				userId: k,
				userIsLoggedIn: S
			}) => {
				const [j, w] = Object(o.useState)(!1), [A, M] = Object(o.useState)(null), [B, L] = Object(o.useState)(null), [F, U] = Object(o.useState)(!1), [D, T] = Object(o.useState)(!1), R = Object(_.a)(), {
					startDelayedUpvoteAnimation: G
				} = Object(E.a)(p.id), W = Object(o.useCallback)(() => {
					U(!1)
				}, []), Y = Object(o.useCallback)(() => {
					M(null), L(null)
				}, []);
				if (!x || !f || !O) return i.a.createElement(N, null);
				const {
					creatorId: H,
					endsAt: K,
					options: Z,
					resolvedOptionId: X,
					totalStakeAmount: Q,
					totalVoters: J,
					tournamentId: $,
					userSelection: ee,
					predictionStatus: te,
					voteUpdatesRemained: ne
				} = f, se = H === k, re = K < Date.now(), oe = !r()($), ie = re && se && !X, ce = Z.find(({
					id: e
				}) => e === A), ae = te === g.b.Cancelled || te === g.b.CancelInProgress, de = s ? Object(d.a)(e, Ge.a.container, Ge.a.forCommentsPage, {
					[Ge.a.isEditing]: c
				}) : Object(d.a)(e, Ge.a.container);
				return i.a.createElement("div", {
					className: de,
					onClick: e => {
						f && e.stopPropagation()
					}
				}, s && !ae && i.a.createElement(V, {
					prediction: f,
					isCreator: se
				}), i.a.createElement("div", {
					className: Ge.a.poll
				}, Z.map(e => i.a.createElement(Te.a, {
					endsAt: K,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: F && ee === e.id,
					onAnimationEnd: W
				}, i.a.createElement(q.a, {
					disabled: F,
					isCancelled: ae,
					isEnded: re,
					isSelected: A === e.id,
					needsResolution: ie,
					option: e,
					onClick: () => (e => {
						(ie || !re && !ee) && (ie ? L(e.id) : M(e.id))
					})(e),
					resolvedOptionId: X,
					tournamentId: $,
					userSelection: ee,
					userIsLoggedOut: !S,
					votePercentage: (ee || re || D) && e.voteCount ? Math.floor(e.voteCount / J * 100) : null,
					isShowingHint: D
				}))), !ae && i.a.createElement(Ee.a, {
					disabled: F || D || !!ee,
					isEnded: re,
					userSelection: ee,
					isShowingHint: D,
					tournamentId: $,
					postId: p.id,
					onReveal: () => T(!0)
				}), !ae && n && i.a.createElement(fe, {
					isLimitReached: 0 === ne,
					postId: x,
					options: Z,
					selectedOptionId: ee
				}), i.a.createElement("div", {
					className: Ge.a.predictionsCount
				}, oe && J > 0 && We._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [We._param("total voters", Object(l.b)(J)), We._plural(J)], {
					hk: "2u2Nv8"
				}), i.a.createElement(Oe, {
					isCoins: !oe,
					status: te,
					endsAt: K,
					resolvedOptionId: X,
					totalStakeAmount: Q
				}))), !!ce && i.a.createElement(z.b, {
					className: Ge.a.modal,
					isCreatingVote: j,
					onOverlayClick: Y,
					onCancel: Y,
					onPredict: async e => {
						if ((null == e ? void 0 : e.currency) === g.a.Coins && e.amount > I) return Object(m.promptUserToBuyMoreCoins)(), void R(h.a);
						const n = e.amount;
						if (T(!1), re) return C({
							duration: 5e3,
							kind: v.b.Error,
							text: We._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void M(null);
						if (!x || !A) throw new Error("Invalid arguments, optionId and pollId must be strings");
						w(!0), R($ ? Object(h.o)({
							pollId: x,
							selectedNumberTokens: n
						}) : Object(h.n)({
							pollId: x,
							selectedNumberCoins: n,
							totalStakeAmount: Q
						}));
						try {
							await b({
								coinPackageId: e.id,
								optionId: A,
								postId: x,
								price: n
							}), t && p.voteState < P.a.upvoted && x && (y(x), G()), w(!1), M(null), U(!0)
						} catch (s) {
							w(!1), M(null), C({
								duration: 5e3,
								kind: v.b.Error,
								text: We._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: ce,
					pollId: x,
					subredditId: p.belongsTo.id,
					tournamentId: $,
					withOverlay: !0
				}), ie && B && i.a.createElement(Se, {
					isResolving: j,
					isTokens: oe,
					onOverlayClick: Y,
					onCancel: Y,
					onResolve: async () => {
						if (w(!0), !B) throw new Error("Failed to create prediction, missing selected option");
						try {
							await u({
								optionId: B,
								postId: x
							})
						} catch (e) {
							C({
								duration: 5e3,
								kind: v.b.Error,
								text: We._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						L(null), w(!1)
					},
					withOverlay: !0
				}), !a && $ && i.a.createElement(De, {
					subredditId: p.belongsTo.id,
					tournamentId: $
				}))
			};
			t.default = Ke(Object(c.b)(Ye, He)(Ve))
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				a = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				p = n.n(b);

			function f({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var s;
				const b = Object(o.e)(m.X),
					f = Object(o.e)(m.k),
					E = Object(o.e)(m.C),
					h = Object(o.e)(e => Object(u.e)(e, {
						subredditId: n
					}));
				return (null === (s = null == h ? void 0 : h.latestParticipants) || void 0 === s ? void 0 : s.length) ? r.a.createElement("div", {
					className: Object(i.a)(p.a.tournamentFacepile, e)
				}, h.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: s
				}) => {
					const o = !!f && Object(l.e)(f) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = s,
						h = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? r.a.createElement(c.a, {
						key: h,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(i.a)(p.a.snoovatar, t),
						headshot: u
					}) : r.a.createElement(a.b, {
						key: h,
						className: Object(i.a)(p.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: o,
						isNSFW: m,
						isNightMode: b,
						shouldHideNSFW: E
					})
				})) : null
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				b = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				p = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const E = Object(c.c)({
					currentUser: d.k,
					isNightMode: d.X,
					isPresenceUserPrefEnabled: d.jb,
					shouldHideNSFW: d.C
				}),
				h = Object(i.b)(E);
			t.a = h(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: r,
					wrapperClassName: i,
					...c
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return o.a.createElement("div", {
					className: Object(s.a)(p.a.currentUserIconWrapper, i)
				}, d ? o.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : o.a.createElement(m.b, f({}, c, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && o.a.createElement(l.a, {
					showPresence: !0
				}))
			})
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				o = "|downsized";

			function i(e, t) {
				return r + e + (t ? o : "")
			}

			function c(e) {
				return e && 0 === e.indexOf(r)
			}

			function a(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(c)
			}

			function d(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, s.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.db
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(c.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, n) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, r, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[s.Loyalty]: o.a.First,
					[s.Achievement]: o.a.Second,
					[s.Cosmetic]: void 0
				},
				c = e => e === o.a.First ? s.Loyalty : e === o.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, r, o, i;
			n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const o = {
				status: s.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case r.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case r.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case r.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === c.a.First ? s[a.a.Loyalty][r] : s[a.a.Achievement][r] : l(e) ? s[a.a.Cosmetic][a.c.MyBadges][r] : s[a.a.Cosmetic][a.c.Gallery][r]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, n) => {
					const s = t[e.id],
						r = t[n.id];
					return Object(i.b)(s, r)
				})
			}

			function p(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						r = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[a.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
					collections: {
						[a.a.Loyalty]: b(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: b(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: b(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: b(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
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
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
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
								data: p(n),
								status: s.Fetched
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
				return E
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "x", (function() {
				return F
			})), n.d(t, "t", (function() {
				return U
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "v", (function() {
				return R
			})), n.d(t, "s", (function() {
				return G
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts"),
				p = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				E = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				h = (e, t) => {
					const n = E(e, t);
					return n && n.endsAt || null
				};
			var _;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(_ || (_ = {}));
			const g = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = h(e, t),
							s = Date.now();
						return n && s < n ? _.Subscribed : _.NotSubscribed
					}
					return _.DontKnow
				},
				v = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[c.a.Loyalty]: s.find(e => e.placement === i.a.First),
							[c.a.Achievement]: s.find(e => e.placement === i.a.Second),
							[c.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[c.a.Loyalty]: void 0,
						[c.a.Achievement]: void 0,
						[c.a.Cosmetic]: void 0
					}
				};

			function P(e, t) {
				return (null == e ? void 0 : e.length) ? Object(r.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const x = (e, t, n) => {
					var r;
					if (!s.d.spBadges(e)) return f;
					return P(null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t], e.badges.models)
				},
				O = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function C(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function y(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === r) return n;
				const o = e.badges.models,
					c = e.user.ownedBadges[s] || {},
					a = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(c).map(e => o[e]).find(e => e && e.type === a)
			}

			function I(e, t, n, s) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					if (n === c.a.Loyalty || n === c.a.Achievement) return r.data.collections[n];
					if (n === c.a.Cosmetic && s) return r.data.collections[n][s]
				}
				return f
			}

			function k(e, t) {
				const n = I(e, t, c.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function S(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[c.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return f
			}

			function j(e, t) {
				return I(e, t, c.a.Cosmetic, c.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === l.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: a.a.SavedStripe
						})
					}
				}
				if (n.status === l.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: a.a.SavedPayPal
						})
					}
				}
				return t
			};
			var w;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(w || (w = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = E(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				L = (e, t) => {
					var n, s, r, o;
					const i = (null === (o = null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === r ? void 0 : r[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || A;
					return {
						prices: B(e, t),
						member: i.member || A.member,
						memberPlural: i.memberPlural || A.memberPlural,
						memberAlt: i.memberAlt || A.memberAlt,
						memberAltPlural: i.memberAltPlural || A.memberAltPlural,
						membership: i.membership || A.membership,
						membershipAlt: i.membershipAlt || A.membershipAlt
					}
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				T = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				R = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				G = (e, t, n) => {
					if (!Object(p.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.q)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(m.a)(e, {
						commentId: n
					});
					if (r && Object(o.a)(r)) return !0;
					const i = s.d.spGiphy(e),
						c = R(e, t);
					return !(!i || !c) || i && c
				},
				W = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				Y = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.76353a2581c67ece5eba.js.map