// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.18a6043f16cc8e3b5b03.js
// Retrieved at 8/3/2021, 12:40:09 PM by Reddit Dataminer v1.0.0
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
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.kc, o.nb, o.z, o.O, o.ib, o.Nb],
				i = {
					[o.Nb]: e => s.fbt._({
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
					[o.kc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Nb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
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
					[o.kc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.nb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.kc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.kc]: "",
						[o.nb]: "",
						[o.z]: "",
						[o.O]: "",
						[o.ib]: "",
						[o.Nb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
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
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
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
			const a = Object(s.a)(i.a),
				c = Object(s.a)(i.b),
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
				return a
			})), n.d(t, "f", (function() {
				return c
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
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
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
				confirmButton: "dTclsbEKUERQwbXfl3-1j",
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
				a = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
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
				storageKey: m = c.a.nonDismissable,
				title: b
			}) {
				const p = m !== c.a.nonDismissable,
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
					Icon: Object(a.b)("close"),
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
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function a({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const a = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: a,
					newBadge: !0,
					message: c,
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
				return Re
			}));
			var s = n("./node_modules/lodash/isNil.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
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
				C = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/models/Prediction/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts"),
				O = n("./src/reddit/selectors/poll/index.ts"),
				y = n("./src/reddit/selectors/postCreations.ts"),
				I = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				N = n.n(k);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var w = ({
					className: e
				}) => i.a.createElement("div", {
					className: Object(d.a)(N.a.container, e)
				}, j._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				M = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				A = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				B = n.n(L);
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
						className: B.a.notificationBlurb
					}, F._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return i.a.createElement("div", null, i.a.createElement(A.a, {
					title: t,
					message: n
				}))
			}
			var D = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx"),
				U = n("./node_modules/fbt/lib/FbtPublic.js");

			function R() {
				const e = U.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = U.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return i.a.createElement("div", null, i.a.createElement(A.a, {
					title: e,
					message: t
				}))
			}
			var G = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				V = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				Y = n.n(V);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function H({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: o
			}) {
				return e && !n ? i.a.createElement("div", null, i.a.createElement(A.a, {
					title: K._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: i.a.createElement(i.a.Fragment, null, K._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && i.a.createElement("div", {
						className: Y.a.wonOrLostAmountRow
					}, K._("You lost {lostAmount}", [K._param("lostAmount", i.a.createElement("div", {
						className: Y.a.wonOrLostAmount
					}, t ? i.a.createElement(W.a, {
						className: Y.a.coinIcon
					}) : i.a.createElement(G.a, {
						className: Y.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !o ? i.a.createElement("div", null, i.a.createElement(A.a, {
					title: K._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: i.a.createElement(i.a.Fragment, null, K._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), i.a.createElement("div", {
						className: Y.a.wonOrLostAmountRow
					}, K._("You've been refunded {refundedAmount}", [K._param("refundedAmount", i.a.createElement("div", {
						className: Y.a.wonOrLostAmount
					}, t ? i.a.createElement(W.a, {
						className: Y.a.coinIcon
					}) : i.a.createElement(G.a, {
						className: Y.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? i.a.createElement("div", null, i.a.createElement(A.a, {
					title: K._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: i.a.createElement(i.a.Fragment, null, K._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!o && i.a.createElement("div", {
						className: Y.a.wonOrLostAmountRow
					}, K._("You won {wonAmount}", [K._param("wonAmount", i.a.createElement("div", {
						className: Y.a.wonOrLostAmount
					}, t ? i.a.createElement(W.a, {
						className: Y.a.coinIcon
					}) : i.a.createElement(G.a, {
						className: Y.a.coinIcon
					}), s + o))], {
						hk: "1zg0cH"
					})))
				})) : i.a.createElement("div", null, i.a.createElement(A.a, {
					title: K._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: K._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			const z = ({
				prediction: e,
				isCreator: t
			}) => {
				var n;
				const {
					endsAt: s,
					options: r,
					resolvedOptionId: a,
					tournamentId: c,
					userSelection: d,
					userWonAmount: l
				} = e, u = s < Date.now(), m = !o()(c), b = u && t && !a;
				return u ? a ? i.a.createElement(H, {
					didParticipate: !!d,
					isTokens: m,
					isWinner: a === d,
					predictedAmount: d && (null === (n = r.find(({
						id: e
					}) => e === d)) || void 0 === n ? void 0 : n.userStakeAmount) || 0,
					wonAmount: l
				}) : b ? i.a.createElement(R, null) : i.a.createElement(T, {
					didParticipate: !!d
				}) : i.a.createElement(D.a, {
					isTokens: m,
					storageKey: M.a.feature
				})
			};
			var Z = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				q = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				X = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				Q = n("./src/higherOrderComponents/asModal/index.tsx"),
				J = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				$ = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				ee = n("./src/reddit/controls/Button/index.tsx"),
				te = n("./src/reddit/controls/TextButton/index.tsx"),
				ne = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				se = n("./src/reddit/components/Econ/Prediction/PredictionChangeModal/index.m.less"),
				oe = n.n(se);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = Object(Q.a)(({
					options: e,
					selectedOptionId: t,
					onClose: n
				}) => {
					const [s, o] = Object(r.useState)(null);
					return i.a.createElement(J.d, null, i.a.createElement(J.h, null, i.a.createElement(ne.a, null, i.a.createElement(J.p, null, U.fbt._("Change your prediction", null, {
						hk: "34AjlU"
					})), i.a.createElement(te.a, {
						onClick: n
					}, i.a.createElement(J.b, null)))), i.a.createElement(J.k, null, e.map(e => i.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(d.a)(oe.a.predictionOption, {
							[oe.a.selected]: e.id === (null == s ? void 0 : s.id)
						}),
						disabled: e.id === t,
						onClick: () => o(e)
					}, i.a.createElement("span", {
						className: oe.a.predictionOptionLabel
					}, e.text), e.id === t && i.a.createElement($.a, {
						className: oe.a.userIcon
					})))), i.a.createElement(J.f, null, i.a.createElement(J.a, {
						onClick: n,
						"data-redditstyle": !0
					}, U.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(ee.q, {
						className: oe.a.confirmButton,
						disabled: !s,
						onClick: () => {
							s && n()
						}
					}, U.fbt._("Confirm", null, {
						hk: "2Fmv8L"
					}))))
				}),
				ae = e => i.a.createElement(ie, re({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e));
			var ce = n("./src/reddit/icons/svgs/ChangePrediction/index.tsx"),
				de = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				le = n.n(de);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js"), me = ({
				options: e,
				selectedOptionId: t
			}) => {
				const [n, s] = Object(r.useState)(!1), o = ue._("Change my prediction", null, {
					hk: "1oibor"
				});
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
					"aria-label": o,
					className: le.a.additionalOptionButton,
					onClick: () => s(!0)
				}, i.a.createElement(ce.a, {
					className: le.a.icon
				}), o), n && i.a.createElement(ae, {
					options: e,
					selectedOptionId: t,
					onClose: () => s(!1)
				}))
			};
			var be = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				pe = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				fe = n.n(pe);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), he = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? i.a.createElement("div", {
				className: fe.a.statusBar
			}, n && i.a.createElement(be.a, {
				className: fe.a.clockIcon
			}), t ? Ee._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : Ee._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : i.a.createElement("div", {
				className: fe.a.statusBar
			}, n && i.a.createElement(be.a, {
				className: fe.a.clockIcon
			}), Ee._("Prediction ends in {expirationDuration}", [Ee._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			})), _e = ({
				endsAt: e,
				status: t,
				resolvedOptionId: n,
				totalStakeAmount: s,
				isCoins: o
			}) => t === g.b.Cancelled || t === g.b.CancelInProgress ? i.a.createElement("div", {
				className: fe.a.statusBar
			}, Ee._("Canceled", null, {
				hk: "1SL2bC"
			})) : i.a.createElement("div", null, s > 0 && o && i.a.createElement("div", {
				className: fe.a.statusBar
			}, i.a.createElement(G.a, {
				className: fe.a.coinIcon
			}), s, " ", Ee._("added by participants", null, {
				hk: "PSq3T"
			})), i.a.createElement(he, {
				endsAt: e,
				resolvedOptionId: n,
				isCoins: o
			}));
			var Ce = n("./src/reddit/icons/fonts/index.tsx"),
				ge = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				ve = n.n(ge);
			var Pe = Object(Q.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: ve.a.header
					}, i.a.createElement(ee.q, {
						className: ve.a.closeButton,
						Icon: Object(Ce.b)("close"),
						priority: ee.b.Plain,
						onClick: n
					}), i.a.createElement("h1", null, U.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), i.a.createElement("div", {
						className: ve.a.content
					}, i.a.createElement("p", {
						className: ve.a.message
					}, t ? U.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : U.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})), i.a.createElement("div", {
						className: ve.a.actions
					}, i.a.createElement(ee.l, {
						disabled: e,
						onClick: n,
						priority: ee.b.Secondary,
						redditStyle: !0,
						size: ee.c.S
					}, U.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(ee.i, {
						className: ve.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: ee.c.S
					}, U.fbt._("Submit", null, {
						hk: "4aU3dh"
					})))))
				})),
				xe = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				Oe = n("./src/reddit/controls/InternalLink/index.tsx"),
				ye = n("./src/reddit/hooks/usePageLayer.ts"),
				Ie = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Se = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				ke = n("./src/reddit/selectors/subreddit.ts"),
				Ne = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				je = n.n(Ne);
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Me({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(a.d)(),
					s = Object(C.a)(),
					o = Object(ye.a)(),
					c = Object(a.e)(t => Object(ke.S)(t, {
						subredditId: e
					})),
					d = Object(a.e)(t => Object(Se.h)(t, {
						subredditId: e
					})),
					u = Object(a.e)(t => Object(Se.b)(t, {
						subredditId: e
					})),
					b = Object(m.w)(o),
					f = Object(m.G)(o),
					E = Object(m.K)(o);
				if (Object(r.useEffect)(() => {
						d || n(Object(p.h)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: h,
					totalParticipantsCount: g
				} = u;
				return i.a.createElement(Oe.a, {
					className: je.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						s(Object(_.k)({
							pageType: b ? "post_detail" : E ? "community" : f ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, i.a.createElement(xe.a, {
					className: je.a.facepile,
					subredditId: e
				}), i.a.createElement("div", {
					className: je.a.info
				}, i.a.createElement("div", {
					className: je.a.tournamentName
				}, h), i.a.createElement("div", {
					className: je.a.totalPlayers
				}, g > 0 ? we._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [we._param("totalPlayers", Object(l.b)(g)), we._plural(g)], {
					hk: "3eDpRH"
				}) : we._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), i.a.createElement(Ie.a, {
					className: je.a.chevron
				}))
			}
			var Ae = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				Le = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Be = n.n(Le);
			const {
				fbt: Fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Te = Object(c.c)({
				isAutoVoteEnabled: x.m,
				isEditing: y.K,
				isVoteAnimationEnabled: x.l,
				isChangePredictionAvailable: (e, {
					postId: t
				}) => {
					const n = Object(O.g)(e, {
						postId: t
					});
					return Boolean((null == n ? void 0 : n.userSelection) && !(null == n ? void 0 : n.resolvedOptionId) && Object(x.s)(e))
				},
				prediction: O.g,
				pollId: O.a,
				post: I.G,
				subredditOrProfile: I.T,
				userCoins: S.d,
				userIsLoggedIn: S.J,
				userId: S.ob
			}), De = {
				onPredictionResolve: p.j,
				onPredictionVote: p.k,
				showToast: E.f,
				upvoteToggled: f.db
			}, Ue = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), Re = ({
				className: e,
				isAutoVoteEnabled: t,
				isChangePredictionAvailable: n,
				isCommentsPage: s,
				isEditing: a,
				isPredictionsPage: c,
				isVoteAnimationEnabled: m,
				onPredictionResolve: p,
				onPredictionVote: f,
				post: E,
				prediction: x,
				pollId: O,
				subredditOrProfile: y,
				showToast: I,
				upvoteToggled: S,
				userCoins: k,
				userId: N,
				userIsLoggedIn: j
			}) => {
				const [M, A] = Object(r.useState)(!1), [L, B] = Object(r.useState)(null), [F, T] = Object(r.useState)(null), [D, U] = Object(r.useState)(!1), [R, G] = Object(r.useState)(!1), W = Object(C.a)(), {
					startDelayedUpvoteAnimation: V
				} = Object(h.a)(E.id), Y = Object(r.useCallback)(() => {
					U(!1)
				}, []), K = Object(r.useCallback)(() => {
					B(null), T(null)
				}, []);
				if (!O || !x || !y) return i.a.createElement(w, null);
				const {
					creatorId: H,
					endsAt: Q,
					options: J,
					resolvedOptionId: $,
					totalStakeAmount: ee,
					totalVoters: te,
					tournamentId: ne,
					userSelection: se,
					predictionStatus: oe
				} = x, re = H === N, ie = Q < Date.now(), ae = !o()(ne), ce = ie && re && !$, de = J.find(({
					id: e
				}) => e === L), le = oe === g.b.Cancelled || oe === g.b.CancelInProgress, ue = s ? Object(d.a)(e, Be.a.container, Be.a.forCommentsPage, {
					[Be.a.isEditing]: a
				}) : Object(d.a)(e, Be.a.container);
				return i.a.createElement("div", {
					className: ue,
					onClick: e => {
						x && e.stopPropagation()
					}
				}, s && !le && i.a.createElement(z, {
					prediction: x,
					isCreator: re
				}), i.a.createElement("div", {
					className: Be.a.poll
				}, J.map(e => i.a.createElement(Ae.a, {
					endsAt: Q,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: D && se === e.id,
					onAnimationEnd: Y
				}, i.a.createElement(q.a, {
					disabled: D,
					isCancelled: le,
					isEnded: ie,
					isSelected: L === e.id,
					needsResolution: ce,
					option: e,
					onClick: () => (e => {
						(ce || !ie && !se) && (ce ? T(e.id) : B(e.id))
					})(e),
					resolvedOptionId: $,
					tournamentId: ne,
					userSelection: se,
					userIsLoggedOut: !j,
					votePercentage: (se || ie || R) && e.voteCount ? Math.floor(e.voteCount / te * 100) : null,
					isShowingHint: R
				}))), !le && i.a.createElement(X.a, {
					disabled: D || R || !!se,
					isEnded: ie,
					userSelection: se,
					isShowingHint: R,
					tournamentId: ne,
					pollId: O,
					onReveal: () => G(!0)
				}), !le && n && i.a.createElement(me, {
					options: J,
					selectedOptionId: se
				}), i.a.createElement("div", {
					className: Be.a.predictionsCount
				}, ae && te > 0 && Fe._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [Fe._param("total voters", Object(l.b)(te)), Fe._plural(te)], {
					hk: "2u2Nv8"
				}), i.a.createElement(_e, {
					isCoins: !ae,
					status: oe,
					endsAt: Q,
					resolvedOptionId: $,
					totalStakeAmount: ee
				}))), !!de && i.a.createElement(Z.b, {
					className: Be.a.modal,
					isCreatingVote: M,
					onOverlayClick: K,
					onCancel: K,
					onPredict: async e => {
						if ((null == e ? void 0 : e.currency) === g.a.Coins && e.amount > k) return Object(b.promptUserToBuyMoreCoins)(), void W(_.a);
						const n = e.amount;
						if (ie) return I({
							duration: 5e3,
							kind: v.b.Error,
							text: Fe._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void B(null);
						if (!O || !L) throw new Error("Invalid arguments, optionId and pollId must be strings");
						A(!0), W(ne ? Object(_.o)({
							pollId: O,
							selectedNumberTokens: n
						}) : Object(_.n)({
							pollId: O,
							selectedNumberCoins: n,
							totalStakeAmount: ee
						}));
						try {
							await f({
								coinPackageId: e.id,
								optionId: L,
								postId: O,
								price: n
							}), t && E.voteState < P.a.upvoted && O && (S(O), V()), A(!1), B(null), m ? U(!0) : I({
								duration: 5e3,
								kind: v.b.SuccessCommunity,
								text: Fe._("Thanks! See if you're right in {timeToResult}", [Fe._param("timeToResult", Object(u.a)(new Date(Q), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (s) {
							A(!1), B(null), I({
								duration: 5e3,
								kind: v.b.Error,
								text: Fe._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: de,
					pollId: O,
					subredditId: E.belongsTo.id,
					tournamentId: ne,
					withOverlay: !0
				}), ce && F && i.a.createElement(Pe, {
					isResolving: M,
					isTokens: ae,
					onOverlayClick: K,
					onCancel: K,
					onResolve: async () => {
						if (A(!0), !F) throw new Error("Failed to create prediction, missing selected option");
						try {
							await p({
								optionId: F,
								postId: O
							})
						} catch (e) {
							I({
								duration: 5e3,
								kind: v.b.Error,
								text: Fe._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						T(null), A(!1)
					},
					withOverlay: !0
				}), !c && ne && i.a.createElement(Me, {
					subredditId: E.belongsTo.id,
					tournamentId: ne
				}))
			};
			t.default = Ue(Object(a.b)(Te, De)(Re))
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
				a = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
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
				const b = Object(r.e)(m.V),
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
					return Object(d.a)(u) ? o.a.createElement(a.a, {
						key: h,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(i.a)(p.a.snoovatar, t),
						headshot: u
					}) : o.a.createElement(c.b, {
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
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
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
			const E = Object(a.c)({
					currentUser: d.j,
					isNightMode: d.V,
					isPresenceUserPrefEnabled: d.hb,
					shouldHideNSFW: d.B
				}),
				h = Object(i.b)(E);
			t.a = h(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: i,
					...a
				} = e, d = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(p.a.currentUserIconWrapper, i)
				}, d ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, f({}, a, {
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
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(r.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
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
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.bb
		},
		"./src/reddit/icons/svgs/ChangePrediction/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			const r = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 18 20",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M13.115 14.9379C12.768 15.1832 12.4037 15.4031 12.025 15.5959L12.886 17.9119C12.909 17.9731 12.9176 18.0388 12.911 18.1039C12.9044 18.169 12.8829 18.2316 12.848 18.2869C12.833 18.3069 12.797 18.3539 12.759 18.3539H3.14103C3.10303 18.3539 3.06603 18.3069 3.05203 18.2869C3.0167 18.2318 2.99485 18.1691 2.98825 18.104C2.98164 18.0388 2.99048 17.973 3.01403 17.9119L3.87403 15.5959C3.49601 15.4025 3.1321 15.1826 2.78503 14.9379L1.84203 17.4769C1.74745 17.7267 1.71469 17.9957 1.74656 18.2609C1.77842 18.5261 1.87397 18.7797 2.02503 18.9999C2.14789 19.1835 2.31385 19.3342 2.50839 19.4388C2.70294 19.5434 2.92015 19.5987 3.14103 19.5999H12.759C12.9797 19.5985 13.1968 19.5431 13.3911 19.4385C13.5855 19.3339 13.7513 19.1834 13.874 18.9999C14.0252 18.7797 14.1209 18.5262 14.1529 18.261C14.1849 17.9958 14.1524 17.7268 14.058 17.4769L13.115 14.9379Z"
			}), o.a.createElement("path", {
				d: "M3.66303 8.23394C3.49727 8.23394 3.3383 8.16809 3.22109 8.05088C3.10388 7.93367 3.03803 7.7747 3.03803 7.60894C3.04015 6.30713 3.55844 5.05928 4.47925 4.13903C5.40005 3.21879 6.64822 2.70126 7.95003 2.69994C8.11579 2.69994 8.27477 2.76579 8.39198 2.883C8.50919 3.00021 8.57503 3.15918 8.57503 3.32494C8.57503 3.4907 8.50919 3.64967 8.39198 3.76688C8.27477 3.88409 8.11579 3.94994 7.95003 3.94994C6.97965 3.951 6.04928 4.33674 5.36284 5.02262C4.67639 5.70851 4.28989 6.63857 4.28803 7.60894C4.28803 7.7747 4.22219 7.93367 4.10498 8.05088C3.98777 8.16809 3.82879 8.23394 3.66303 8.23394Z"
			}), o.a.createElement("path", {
				d: "M14.216 9.60894H14.21C14.1342 9.60295 14.0588 9.59293 13.984 9.57894C13.563 10.87 12.7392 11.992 11.6336 12.7805C10.5281 13.5689 9.19887 13.9823 7.84112 13.9598C6.48338 13.9374 5.16857 13.4804 4.08963 12.6558C3.0107 11.8313 2.22446 10.6826 1.84629 9.3784C1.46812 8.07419 1.51793 6.6831 1.98842 5.40928C2.4589 4.13545 3.32528 3.04596 4.46043 2.30069C5.59557 1.55542 6.9397 1.1936 8.29558 1.26834C9.65145 1.34307 10.9477 1.85043 11.994 2.71594L12.255 2.24794C12.3761 2.03958 12.5305 1.85244 12.712 1.69394C11.4264 0.658599 9.8386 0.0699832 8.18875 0.0170884C6.53889 -0.0358065 4.91667 0.449896 3.56734 1.40076C2.21801 2.35163 1.21495 3.71595 0.709813 5.28747C0.204672 6.85898 0.224916 8.55224 0.767485 10.1112C1.31005 11.6702 2.34545 13.0102 3.71712 13.9285C5.08879 14.8468 6.72217 15.2936 8.37029 15.2013C10.0184 15.109 11.5917 14.4826 12.8522 13.4168C14.1127 12.351 14.992 10.9038 15.357 9.29394C15.0118 9.49935 14.6177 9.60815 14.216 9.60894Z"
			}), o.a.createElement("path", {
				d: "M14.21 8.23394C14.0563 8.23372 13.9054 8.19268 13.7728 8.11502C13.6401 8.03736 13.5305 7.92587 13.455 7.79194L12.855 6.71394L11.775 6.11394C11.6412 6.03857 11.5299 5.92897 11.4524 5.79639C11.3749 5.66381 11.3341 5.513 11.3341 5.35944C11.3341 5.20588 11.3749 5.05508 11.4524 4.9225C11.5299 4.78991 11.6412 4.68032 11.775 4.60494L12.853 3.99994L13.453 2.92194C13.5283 2.78776 13.6378 2.67601 13.7705 2.59816C13.9032 2.52031 14.0542 2.47916 14.208 2.47894C14.362 2.47923 14.513 2.52063 14.6456 2.59886C14.7781 2.6771 14.8874 2.78933 14.962 2.92394L15.567 3.99994L16.646 4.59994C16.7806 4.67481 16.8927 4.78428 16.9707 4.91703C17.0488 5.04977 17.09 5.20096 17.09 5.35494C17.09 5.50893 17.0488 5.66012 16.9707 5.79286C16.8927 5.9256 16.7806 6.03507 16.646 6.10994L15.565 6.70994L14.965 7.78694C14.8901 7.92097 14.7809 8.03264 14.6486 8.11049C14.5162 8.18835 14.3656 8.22957 14.212 8.22994L14.21 8.23394ZM12.985 5.35394L13.559 5.67494C13.6996 5.75422 13.8156 5.87086 13.894 6.01194L14.211 6.57894L14.53 6.00794C14.6097 5.86726 14.7266 5.75132 14.868 5.67294L15.437 5.35494L14.864 5.03494C14.7265 4.95822 14.6124 4.84553 14.534 4.70894L14.211 4.13094L13.892 4.70194C13.8143 4.84066 13.6998 4.95521 13.561 5.03294L12.985 5.35394Z"
			}))
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
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.chevron, e.className),
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
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
				a = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
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
				a = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
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
						(r = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
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
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
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
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
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
						[c.a.Loyalty]: b(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: b(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: b(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: b(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
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
				return C
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "j", (function() {
				return N
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "x", (function() {
				return F
			})), n.d(t, "t", (function() {
				return T
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "v", (function() {
				return R
			})), n.d(t, "s", (function() {
				return G
			})), n.d(t, "g", (function() {
				return W
			})), n.d(t, "m", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
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
			const C = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = h(e, t),
							s = Date.now();
						return n && s < n ? _.Subscribed : _.NotSubscribed
					}
					return _.DontKnow
				},
				g = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[a.a.Loyalty]: s.find(e => e.placement === i.a.First),
							[a.a.Achievement]: s.find(e => e.placement === i.a.Second),
							[a.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				};

			function v(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const P = (e, t, n) => {
					var o;
					if (!s.d.spBadges(e)) return f;
					return v(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				x = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function O(e, t) {
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
					a = e.user.ownedBadges[s] || {},
					c = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(a).map(e => r[e]).find(e => e && e.type === c)
			}

			function I(e, t, n, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return o.data.collections[n];
					if (n === a.a.Cosmetic && s) return o.data.collections[n][s]
				}
				return f
			}

			function S(e, t) {
				const n = I(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function k(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return f
			}

			function N(e, t) {
				return I(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const j = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === l.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: c.a.SavedStripe
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
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var w;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(w || (w = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				A = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				L = (e, t) => {
					if (!t) return {};
					const n = M.prices;
					A(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = E(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				B = (e, t) => {
					var n, s, o, r;
					const i = (null === (r = null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || M;
					return {
						prices: L(e, t),
						member: i.member || M.member,
						memberPlural: i.memberPlural || M.memberPlural,
						memberAlt: i.memberAlt || M.memberAlt,
						memberAltPlural: i.memberAltPlural || M.memberAltPlural,
						membership: i.membership || M.membership,
						membershipAlt: i.membershipAlt || M.membershipAlt
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
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, {
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
					if (Object(b.p)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== n && Object(m.a)(e, {
						commentId: n
					});
					if (o && Object(r.a)(o)) return !0;
					const i = s.d.spGiphy(e),
						a = R(e, t);
					return !(!i || !a) || i && a
				},
				W = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				V = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.18a6043f16cc8e3b5b03.js.map