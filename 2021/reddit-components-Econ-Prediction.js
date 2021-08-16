// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.06a342cd296632f2ea36.js
// Retrieved at 8/16/2021, 7:20:08 PM by Reddit Dataminer v1.0.0
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
				o = n("./src/lib/constants/index.ts");
			const r = [o.lc, o.nb, o.z, o.O, o.ib, o.Ob],
				i = {
					[o.Ob]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.ib]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.O]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.z]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.nb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.lc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[o.Ob]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.ib]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.O]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.z]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.nb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.lc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.nb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.lc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e, t = !1, n = !1) {
				const a = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.lc]: "",
						[o.nb]: "",
						[o.z]: "",
						[o.O]: "",
						[o.ib]: "",
						[o.Ob]: ""
					};
				let u = d - a;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? c : i)[s](e).toString()), u -= e * s
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
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
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
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
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
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
				E = e => Object(o.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
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
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				o = n.n(s),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
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
					[f, E] = Object(r.a)(m, !p || !1),
					[h, _] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					f || h || !d || (d(), _(!0))
				}, [f, h, d]), p && f ? null : o.a.createElement("div", {
					className: l.a.educationMessage
				}, o.a.createElement("div", {
					className: l.a.titleRow
				}, o.a.createElement("div", {
					className: l.a.header
				}, o.a.createElement("h3", {
					className: l.a.title
				}, b), t && o.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), p && o.a.createElement(i.q, {
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function c({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const c = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					a = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: c,
					newBadge: !0,
					message: a,
					storageKey: o
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
				return ze
			}));
			var s = n("./node_modules/lodash/isNil.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/lib/timeUntil/index.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/actions/economics/helpers/index.ts"),
				p = n("./src/reddit/actions/economics/predictions/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				E = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				_ = n("./src/reddit/helpers/trackers/predictions.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Prediction/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				P = n("./src/reddit/selectors/experiments/econ/index.ts"),
				C = n("./src/reddit/selectors/poll/index.ts"),
				y = n("./src/reddit/selectors/postCreations.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				j = n.n(S);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var w = ({
					className: e
				}) => i.a.createElement("div", {
					className: Object(d.a)(j.a.container, e)
				}, N._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				A = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				M = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				B = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				L = n.n(B);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function T({
				didParticipate: e
			}) {
				const t = F._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = i.a.createElement(i.a.Fragment, null, F._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && i.a.createElement("div", {
						className: L.a.notificationBlurb
					}, F._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return i.a.createElement("div", null, i.a.createElement(M.a, {
					title: t,
					message: n
				}))
			}
			var U = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx"),
				D = n("./node_modules/fbt/lib/FbtPublic.js");

			function R() {
				const e = D.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = D.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return i.a.createElement("div", null, i.a.createElement(M.a, {
					title: e,
					message: t
				}))
			}
			var G = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				Y = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				H = n.n(Y);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: o
			}) {
				return e && !n ? i.a.createElement("div", null, i.a.createElement(M.a, {
					title: V._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: i.a.createElement(i.a.Fragment, null, V._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && i.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, V._("You lost {lostAmount}", [V._param("lostAmount", i.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, t ? i.a.createElement(W.a, {
						className: H.a.coinIcon
					}) : i.a.createElement(G.a, {
						className: H.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !o ? i.a.createElement("div", null, i.a.createElement(M.a, {
					title: V._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: i.a.createElement(i.a.Fragment, null, V._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), i.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, V._("You've been refunded {refundedAmount}", [V._param("refundedAmount", i.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, t ? i.a.createElement(W.a, {
						className: H.a.coinIcon
					}) : i.a.createElement(G.a, {
						className: H.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? i.a.createElement("div", null, i.a.createElement(M.a, {
					title: V._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: i.a.createElement(i.a.Fragment, null, V._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!o && i.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, V._("You won {wonAmount}", [V._param("wonAmount", i.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, t ? i.a.createElement(W.a, {
						className: H.a.coinIcon
					}) : i.a.createElement(G.a, {
						className: H.a.coinIcon
					}), s + o))], {
						hk: "1zg0cH"
					})))
				})) : i.a.createElement("div", null, i.a.createElement(M.a, {
					title: V._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: V._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			const K = ({
				prediction: e,
				isCreator: t
			}) => {
				var n;
				const {
					endsAt: s,
					options: r,
					resolvedOptionId: c,
					tournamentId: a,
					userSelection: d,
					userWonAmount: l
				} = e, u = s < Date.now(), m = !o()(a), b = u && t && !c;
				return u ? c ? i.a.createElement(z, {
					didParticipate: !!d,
					isTokens: m,
					isWinner: c === d,
					predictedAmount: d && (null === (n = r.find(({
						id: e
					}) => e === d)) || void 0 === n ? void 0 : n.userStakeAmount) || 0,
					wonAmount: l
				}) : b ? i.a.createElement(R, null) : i.a.createElement(T, {
					didParticipate: !!d
				}) : i.a.createElement(U.a, {
					isTokens: m,
					storageKey: A.a.feature
				})
			};
			var Z = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				q = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				X = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				J = n("./src/higherOrderComponents/asModal/index.tsx"),
				Q = n("./src/lib/initializeClient/installReducer.ts"),
				$ = n("./src/reddit/reducers/features/predictions/index.ts"),
				ee = n("./src/reddit/endpoints/economics/predictions.ts");
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(Q.a)({
				features: {
					predictions: $.a
				}
			});
			const ne = e => e(Object(E.f)({
				duration: E.a,
				kind: O.b.Error,
				text: te._("Error: Failed to change prediction selection, please try again later", null, {
					hk: "WLVPy"
				})
			}));
			var se = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				oe = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				re = n("./src/reddit/controls/TextButton/index.tsx"),
				ie = n("./src/reddit/helpers/trackers/predictionsPremiumFeatures.ts"),
				ce = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				ae = n("./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less"),
				de = n.n(ae);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = Object(J.a)(({
					postId: e,
					options: t,
					selectedOptionId: n,
					onClose: s
				}) => {
					const o = Object(c.d)(),
						a = Object(g.a)(),
						[l, u] = Object(r.useState)(null);
					return i.a.createElement(se.e, null, i.a.createElement(se.i, null, i.a.createElement(ce.a, null, i.a.createElement(se.q, null, D.fbt._("Change your prediction", null, {
						hk: "34AjlU"
					})), i.a.createElement(re.a, {
						onClick: s
					}, i.a.createElement(se.b, null)))), i.a.createElement(se.l, null, t.map(e => i.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(d.a)(de.a.predictionOption, {
							[de.a.selected]: e.id === (null == l ? void 0 : l.id)
						}),
						disabled: e.id === n,
						onClick: () => u(e)
					}, i.a.createElement("span", {
						className: de.a.predictionOptionLabel
					}, e.text), e.id === n && i.a.createElement(oe.a, {
						className: de.a.userIcon
					})))), i.a.createElement(se.g, null, i.a.createElement(se.a, {
						onClick: s,
						"data-redditstyle": !0
					}, D.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(se.c, {
						disabled: !l,
						onClick: () => {
							l && (o((({
								postId: e,
								optionId: t
							}) => async (n, s, {
								gqlContext: o
							}) => {
								if (e && t) try {
									const s = await Object(ee.e)(o(), {
										postId: e,
										optionId: t
									});
									n(Object(p.e)({
										postId: e,
										prediction: s
									})), n(Object(E.f)({
										duration: E.a,
										kind: O.b.SuccessCommunity,
										text: te._("Your prediction has been updated", null, {
											hk: "4wwhZ6"
										})
									}))
								} catch {
									ne(n)
								} else ne(n)
							})({
								postId: e,
								optionId: l.id
							})), a(Object(ie.c)(e)), s())
						}
					}, D.fbt._("Confirm", null, {
						hk: "2Fmv8L"
					}))))
				}),
				me = e => i.a.createElement(ue, le({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e));
			var be = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				pe = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				fe = n.n(pe);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), he = ({
				postId: e,
				options: t,
				selectedOptionId: n,
				isLimitReached: s
			}) => {
				const o = Object(c.d)(),
					a = Object(c.e)(k.s),
					[d, l] = Object(r.useState)(!1),
					u = Object(g.a)(),
					m = s ? Ee._("You've already changed your answer twice", null, {
						hk: "h33B"
					}) : Ee._("Change your prediction", null, {
						hk: "hleE5"
					});
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
					"aria-label": m,
					className: fe.a.additionalOptionButton,
					disabled: s,
					onClick: () => {
						a && (l(!0), u(Object(ie.a)(e))), a || (o(Object(p.p)("CHANGE_PREDICTION")), u(Object(ie.b)(e)))
					}
				}, i.a.createElement(be.a, {
					className: fe.a.icon
				}), m), d && i.a.createElement(me, {
					postId: e,
					options: t,
					selectedOptionId: n,
					onClose: () => l(!1)
				}))
			};
			var _e = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				ge = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ve = n.n(ge);
			const {
				fbt: Oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), xe = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? i.a.createElement("div", {
				className: ve.a.statusBar
			}, n && i.a.createElement(_e.a, {
				className: ve.a.clockIcon
			}), t ? Oe._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : Oe._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : i.a.createElement("div", {
				className: ve.a.statusBar
			}, n && i.a.createElement(_e.a, {
				className: ve.a.clockIcon
			}), Oe._("Prediction ends in {expirationDuration}", [Oe._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			})), Pe = ({
				endsAt: e,
				status: t,
				resolvedOptionId: n,
				totalStakeAmount: s,
				isCoins: o
			}) => t === v.b.Cancelled || t === v.b.CancelInProgress ? i.a.createElement("div", {
				className: ve.a.statusBar
			}, Oe._("Canceled", null, {
				hk: "1SL2bC"
			})) : i.a.createElement("div", null, s > 0 && o && i.a.createElement("div", {
				className: ve.a.statusBar
			}, i.a.createElement(G.a, {
				className: ve.a.coinIcon
			}), s, " ", Oe._("added by participants", null, {
				hk: "PSq3T"
			})), i.a.createElement(xe, {
				endsAt: e,
				resolvedOptionId: n,
				isCoins: o
			}));
			var Ce = n("./src/reddit/controls/Button/index.tsx"),
				ye = n("./src/reddit/icons/fonts/index.tsx"),
				Ie = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				ke = n.n(Ie);
			var Se = Object(J.a)((function({
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
				fbt: Te
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ue({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(c.d)(),
					s = Object(g.a)(),
					o = Object(we.a)(),
					a = Object(c.e)(t => Object(Be.T)(t, {
						subredditId: e
					})),
					d = Object(c.e)(t => Object(Me.h)(t, {
						subredditId: e
					})),
					u = Object(c.e)(t => Object(Me.b)(t, {
						subredditId: e
					})),
					b = Object(m.w)(o),
					f = Object(m.H)(o),
					E = Object(m.L)(o);
				if (Object(r.useEffect)(() => {
						d || n(Object(p.k)(a.name))
					}, [n, d, a.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: h,
					totalParticipantsCount: v
				} = u;
				return i.a.createElement(Ne.a, {
					className: Fe.a.tournamentLink,
					to: `${a.url}predictions/`,
					onClick: () => {
						s(Object(_.k)({
							pageType: b ? "post_detail" : E ? "community" : f ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, i.a.createElement(je.a, {
					className: Fe.a.facepile,
					subredditId: e
				}), i.a.createElement("div", {
					className: Fe.a.info
				}, i.a.createElement("div", {
					className: Fe.a.tournamentName
				}, h), i.a.createElement("div", {
					className: Fe.a.totalPlayers
				}, v > 0 ? Te._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [Te._param("totalPlayers", Object(l.b)(v)), Te._plural(v)], {
					hk: "3eDpRH"
				}) : Te._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), i.a.createElement(Ae.a, {
					className: Fe.a.chevron
				}))
			}
			var De = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				Re = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Ge = n.n(Re);
			const {
				fbt: We
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ye = Object(a.c)({
				isAutoVoteEnabled: P.p,
				isEditing: y.K,
				isVoteAnimationEnabled: P.o,
				isChangePredictionAvailable: (e, {
					postId: t
				}) => {
					const n = Object(C.g)(e, {
						postId: t
					});
					return Boolean((null == n ? void 0 : n.userSelection) && !(null == n ? void 0 : n.resolvedOptionId) && Object(P.u)(e))
				},
				prediction: C.g,
				pollId: C.a,
				post: I.I,
				subredditOrProfile: I.V,
				userCoins: k.d,
				userIsLoggedIn: k.J,
				userId: k.pb
			}), He = {
				onPredictionResolve: p.m,
				onPredictionVote: p.n,
				showToast: E.f,
				upvoteToggled: f.db
			}, Ve = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.M
			}), ze = ({
				className: e,
				isAutoVoteEnabled: t,
				isChangePredictionAvailable: n,
				isCommentsPage: s,
				isEditing: c,
				isPredictionsPage: a,
				isVoteAnimationEnabled: m,
				onPredictionResolve: p,
				onPredictionVote: f,
				post: E,
				prediction: P,
				pollId: C,
				subredditOrProfile: y,
				showToast: I,
				upvoteToggled: k,
				userCoins: S,
				userId: j,
				userIsLoggedIn: N
			}) => {
				const [A, M] = Object(r.useState)(!1), [B, L] = Object(r.useState)(null), [F, T] = Object(r.useState)(null), [U, D] = Object(r.useState)(!1), [R, G] = Object(r.useState)(!1), W = Object(g.a)(), {
					startDelayedUpvoteAnimation: Y
				} = Object(h.a)(E.id), H = Object(r.useCallback)(() => {
					D(!1)
				}, []), V = Object(r.useCallback)(() => {
					L(null), T(null)
				}, []);
				if (!C || !P || !y) return i.a.createElement(w, null);
				const {
					creatorId: z,
					endsAt: J,
					options: Q,
					resolvedOptionId: $,
					totalStakeAmount: ee,
					totalVoters: te,
					tournamentId: ne,
					userSelection: se,
					predictionStatus: oe,
					voteUpdatesRemained: re
				} = P, ie = z === j, ce = J < Date.now(), ae = !o()(ne), de = ce && ie && !$, le = Q.find(({
					id: e
				}) => e === B), ue = oe === v.b.Cancelled || oe === v.b.CancelInProgress, me = s ? Object(d.a)(e, Ge.a.container, Ge.a.forCommentsPage, {
					[Ge.a.isEditing]: c
				}) : Object(d.a)(e, Ge.a.container);
				return i.a.createElement("div", {
					className: me,
					onClick: e => {
						P && e.stopPropagation()
					}
				}, s && !ue && i.a.createElement(K, {
					prediction: P,
					isCreator: ie
				}), i.a.createElement("div", {
					className: Ge.a.poll
				}, Q.map(e => i.a.createElement(De.a, {
					endsAt: J,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: U && se === e.id,
					onAnimationEnd: H
				}, i.a.createElement(q.a, {
					disabled: U,
					isCancelled: ue,
					isEnded: ce,
					isSelected: B === e.id,
					needsResolution: de,
					option: e,
					onClick: () => (e => {
						(de || !ce && !se) && (de ? T(e.id) : L(e.id))
					})(e),
					resolvedOptionId: $,
					tournamentId: ne,
					userSelection: se,
					userIsLoggedOut: !N,
					votePercentage: (se || ce || R) && e.voteCount ? Math.floor(e.voteCount / te * 100) : null,
					isShowingHint: R
				}))), !ue && i.a.createElement(X.a, {
					disabled: U || R || !!se,
					isEnded: ce,
					userSelection: se,
					isShowingHint: R,
					tournamentId: ne,
					postId: E.id,
					onReveal: () => G(!0)
				}), !ue && n && i.a.createElement(he, {
					isLimitReached: 0 === re,
					postId: C,
					options: Q,
					selectedOptionId: se
				}), i.a.createElement("div", {
					className: Ge.a.predictionsCount
				}, ae && te > 0 && We._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [We._param("total voters", Object(l.b)(te)), We._plural(te)], {
					hk: "2u2Nv8"
				}), i.a.createElement(Pe, {
					isCoins: !ae,
					status: oe,
					endsAt: J,
					resolvedOptionId: $,
					totalStakeAmount: ee
				}))), !!le && i.a.createElement(Z.b, {
					className: Ge.a.modal,
					isCreatingVote: A,
					onOverlayClick: V,
					onCancel: V,
					onPredict: async e => {
						if ((null == e ? void 0 : e.currency) === v.a.Coins && e.amount > S) return Object(b.promptUserToBuyMoreCoins)(), void W(_.a);
						const n = e.amount;
						if (G(!1), ce) return I({
							duration: 5e3,
							kind: O.b.Error,
							text: We._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void L(null);
						if (!C || !B) throw new Error("Invalid arguments, optionId and pollId must be strings");
						M(!0), W(ne ? Object(_.o)({
							pollId: C,
							selectedNumberTokens: n
						}) : Object(_.n)({
							pollId: C,
							selectedNumberCoins: n,
							totalStakeAmount: ee
						}));
						try {
							await f({
								coinPackageId: e.id,
								optionId: B,
								postId: C,
								price: n
							}), t && E.voteState < x.a.upvoted && C && (k(C), Y()), M(!1), L(null), m ? D(!0) : I({
								duration: 5e3,
								kind: O.b.SuccessCommunity,
								text: We._("Thanks! See if you're right in {timeToResult}", [We._param("timeToResult", Object(u.a)(new Date(J), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (s) {
							M(!1), L(null), I({
								duration: 5e3,
								kind: O.b.Error,
								text: We._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: le,
					pollId: C,
					subredditId: E.belongsTo.id,
					tournamentId: ne,
					withOverlay: !0
				}), de && F && i.a.createElement(Se, {
					isResolving: A,
					isTokens: ae,
					onOverlayClick: V,
					onCancel: V,
					onResolve: async () => {
						if (M(!0), !F) throw new Error("Failed to create prediction, missing selected option");
						try {
							await p({
								optionId: F,
								postId: C
							})
						} catch (e) {
							I({
								duration: 5e3,
								kind: O.b.Error,
								text: We._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						T(null), M(!1)
					},
					withOverlay: !0
				}), !a && ne && i.a.createElement(Ue, {
					subredditId: E.belongsTo.id,
					tournamentId: ne
				}))
			};
			t.default = Ve(Object(c.b)(Ye, He)(ze))
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
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
				const b = Object(r.e)(m.W),
					f = Object(r.e)(m.j),
					E = Object(r.e)(m.B),
					h = Object(r.e)(e => Object(u.b)(e, {
						subredditId: n
					}));
				return (null === (s = null == h ? void 0 : h.latestParticipants) || void 0 === s ? void 0 : s.length) ? o.a.createElement("div", {
					className: Object(i.a)(p.a.tournamentFacepile, e)
				}, h.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: s
				}) => {
					const r = !!f && Object(l.e)(f) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = s,
						h = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? o.a.createElement(c.a, {
						key: h,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(i.a)(p.a.snoovatar, t),
						headshot: u
					}) : o.a.createElement(a.b, {
						key: h,
						className: Object(i.a)(p.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: r,
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
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
					currentUser: d.j,
					isNightMode: d.W,
					isPresenceUserPrefEnabled: d.ib,
					shouldHideNSFW: d.B
				}),
				h = Object(i.b)(E);
			t.a = h(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: i,
					...c
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(p.a.currentUserIconWrapper, i)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, f({}, c, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(l.a, {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(r.a)(c.a.loadingIcon, t, {
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

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
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
			const o = "giphy|",
				r = "|downsized";

			function i(e, t) {
				return o + e + (t ? r : "")
			}

			function c(e) {
				return e && 0 === e.indexOf(o)
			}

			function a(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(c)
			}

			function d(e) {
				let t = e.substring(o.length);
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
			t.a = s.bb
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(c.a.chevron, e.className),
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, o.a.createElement("g", {
				stroke: "none"
			}, o.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, o.a.createElement("path", {
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(c.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				c = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r, i;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
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
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
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
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === c.a.First ? s[a.a.Loyalty][o] : s[a.a.Achievement][o] : l(e) ? s[a.a.Cosmetic][a.c.MyBadges][o] : s[a.a.Cosmetic][a.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
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
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
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
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[a.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][n] = {
						...o,
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
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
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
				return O
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "h", (function() {
				return P
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
				return T
			})), n.d(t, "u", (function() {
				return U
			})), n.d(t, "b", (function() {
				return D
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
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
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

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const x = (e, t, n) => {
					var o;
					if (!s.d.spBadges(e)) return f;
					return O(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				P = (e, t) => {
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
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === o) return n;
				const r = e.badges.models,
					c = e.user.ownedBadges[s] || {},
					a = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(c).map(e => r[e]).find(e => e && e.type === a)
			}

			function I(e, t, n, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (n === c.a.Loyalty || n === c.a.Achievement) return o.data.collections[n];
					if (n === c.a.Cosmetic && s) return o.data.collections[n][s]
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
					var n, s, o, r;
					const i = (null === (r = null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || A;
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
				T = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, {
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
					const o = "replyToPost" !== n && Object(m.a)(e, {
						commentId: n
					});
					if (o && Object(r.a)(o)) return !0;
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.06a342cd296632f2ea36.js.map