// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.4a38d30cb47de4ec75f7.js
// Retrieved at 6/14/2021, 3:30:05 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(s || (s = {}))
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
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
				title: b
			}) {
				const p = m !== c.a.nonDismissable,
					[f, E] = Object(r.a)(m, !p || !1),
					[_, h] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					f || _ || !d || (d(), h(!0))
				}, [f, _, d]), p && f ? null : o.a.createElement("div", {
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
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

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
				return Ce
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/lodash/isNil.js"),
				c = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/lib/timeUntil/index.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/actions/economics/helpers/index.ts"),
				p = n("./src/reddit/actions/economics/predictions/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				E = n("./src/reddit/actions/toaster.ts"),
				_ = n("./src/reddit/helpers/trackers/predictions.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/selectors/poll/index.ts"),
				x = n("./src/reddit/selectors/postCreations.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				k = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				S = n.n(k);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var I = ({
					className: e
				}) => o.a.createElement("div", {
					className: Object(d.a)(S.a.container, e)
				}, N._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				w = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx"),
				j = n("./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less"),
				A = n.n(j);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function B({
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
				return o.a.createElement("div", null, o.a.createElement(w.a, {
					title: t,
					message: n
				}))
			}
			var F = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				T = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				L = n("./node_modules/fbt/lib/FbtPublic.js");

			function D() {
				const e = L.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = L.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(w.a, {
					title: e,
					message: t
				}))
			}
			var R = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				U = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				G = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				V = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				Y = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				H = n.n(Y);
			const {
				fbt: W
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function K({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: r
			}) {
				return e && !n ? o.a.createElement("div", null, o.a.createElement(w.a, {
					title: W._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, W._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && o.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, W._("You lost {lostAmount}", [W._param("lostAmount", o.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, t ? o.a.createElement(V.a, {
						className: H.a.coinIcon
					}) : o.a.createElement(G.a, {
						className: H.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !r ? o.a.createElement("div", null, o.a.createElement(w.a, {
					title: W._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, W._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, W._("You've been refunded {refundedAmount}", [W._param("refundedAmount", o.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, t ? o.a.createElement(V.a, {
						className: H.a.coinIcon
					}) : o.a.createElement(G.a, {
						className: H.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? o.a.createElement("div", null, o.a.createElement(w.a, {
					title: W._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, W._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!r && o.a.createElement("div", {
						className: H.a.wonOrLostAmountRow
					}, W._("You won {wonAmount}", [W._param("wonAmount", o.a.createElement("div", {
						className: H.a.wonOrLostAmount
					}, t ? o.a.createElement(V.a, {
						className: H.a.coinIcon
					}) : o.a.createElement(G.a, {
						className: H.a.coinIcon
					}), s + r))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(w.a, {
					title: W._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: W._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			var z = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				Z = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				X = n.n(Z);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), J = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? o.a.createElement("div", {
				className: X.a.statusBar
			}, n && o.a.createElement(z.a, {
				className: X.a.clockIcon
			}), t ? q._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : q._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : o.a.createElement("div", {
				className: X.a.statusBar
			}, n && o.a.createElement(z.a, {
				className: X.a.clockIcon
			}), q._("Prediction ends in {expirationDuration}", [q._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var Q = ({
					endsAt: e,
					resolvedOptionId: t,
					totalStakeAmount: n,
					isCoins: s
				}) => o.a.createElement("div", null, n > 0 && s && o.a.createElement("div", {
					className: X.a.statusBar
				}, o.a.createElement(G.a, {
					className: X.a.coinIcon
				}), n, " ", q._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(J, {
					endsAt: e,
					resolvedOptionId: t,
					isCoins: s
				})),
				$ = n("./src/higherOrderComponents/asModal/index.tsx"),
				ee = n("./src/reddit/controls/Button/index.tsx"),
				te = n("./src/reddit/icons/fonts/index.tsx"),
				ne = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				se = n.n(ne);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var re = Object($.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: se.a.header
					}, o.a.createElement(ee.q, {
						className: se.a.closeButton,
						Icon: Object(te.b)("close"),
						priority: ee.b.Plain,
						onClick: n
					}), o.a.createElement("h1", null, oe._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), o.a.createElement("div", {
						className: se.a.content
					}, o.a.createElement("p", {
						className: se.a.message
					}, t ? oe._("Once you hit Submit, the answer is final and tokens will be distributed to the winners", null, {
						hk: "4cSIyE"
					}) : oe._("Once you hit Submit, the answer is final and coins will be distributed to the winners", null, {
						hk: "3Nutvx"
					})), o.a.createElement("div", {
						className: se.a.actions
					}, o.a.createElement(ee.l, {
						disabled: e,
						onClick: n,
						priority: ee.b.Secondary,
						redditStyle: !0,
						size: ee.c.S
					}, oe._("Cancel", null, {
						hk: "4Gco5s"
					})), o.a.createElement(ee.i, {
						className: se.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: ee.c.S
					}, oe._("Submit", null, {
						hk: "ZLsi7"
					})))))
				})),
				ie = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				ae = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				ce = n.n(ae),
				de = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				le = n("./src/reddit/controls/InternalLink/index.tsx"),
				ue = n("./src/reddit/hooks/usePageLayer.ts"),
				me = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				be = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				pe = n("./src/reddit/selectors/subreddit.ts"),
				fe = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Ee = n.n(fe);
			const {
				fbt: _e
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function he({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(r.d)(),
					i = Object(h.a)(),
					a = Object(ue.a)(),
					c = Object(r.e)(t => Object(pe.T)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(be.g)(t, {
						subredditId: e
					})),
					u = Object(r.e)(t => Object(be.a)(t, {
						subredditId: e
					})),
					b = Object(m.w)(a),
					f = Object(m.G)(a),
					E = Object(m.K)(a);
				if (Object(s.useEffect)(() => {
						d || n(Object(p.g)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: g,
					totalParticipantsCount: v
				} = u;
				return o.a.createElement(le.a, {
					className: Ee.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						i(Object(_.k)({
							pageType: b ? "post_detail" : E ? "community" : f ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(de.a, {
					className: Ee.a.facepile,
					subredditId: e
				}), o.a.createElement("div", {
					className: Ee.a.info
				}, o.a.createElement("div", {
					className: Ee.a.tournamentName
				}, g), o.a.createElement("div", {
					className: Ee.a.totalPlayers
				}, v > 0 ? _e._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [_e._param("totalPlayers", Object(l.b)(v)), _e._plural(v)], {
					hk: "3eDpRH"
				}) : _e._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(me.a, {
					className: Ee.a.chevron
				}))
			}
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ve = Object(i.c)({
				isAutoVoteEnabled: g.m,
				isEditing: x.K,
				isVoteAnimationEnabled: g.l,
				prediction: P.g,
				pollId: P.a,
				post: C.F,
				subredditOrProfile: C.R,
				userCoins: O.d,
				userIsLoggedIn: O.K,
				userId: O.pb
			}), Pe = {
				onPredictionResolve: p.j,
				onPredictionVote: p.k,
				showToast: E.f,
				upvoteToggled: f.bb
			}, xe = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), Ce = ({
				className: e,
				isAutoVoteEnabled: t,
				isCommentsPage: n,
				isEditing: r,
				isPredictionsPage: i,
				isVoteAnimationEnabled: a,
				onPredictionResolve: m,
				onPredictionVote: p,
				post: f,
				prediction: E,
				pollId: g,
				subredditOrProfile: P,
				showToast: x,
				upvoteToggled: C,
				userCoins: O,
				userId: k,
				userIsLoggedIn: S
			}) => {
				var N;
				const [w, j] = Object(s.useState)(!1), [A, M] = Object(s.useState)(null), [L, G] = Object(s.useState)(null), [V, Y] = Object(s.useState)(!1), [H, W] = Object(s.useState)(!1), z = Object(h.a)(), Z = Object(s.useCallback)(() => {
					Y(!1)
				}, []), X = Object(s.useCallback)(() => {
					M(null), G(null)
				}, []);
				if (!g || !E || !P) return o.a.createElement(I, null);
				const {
					creatorId: q,
					endsAt: J,
					options: $,
					resolvedOptionId: ee,
					totalStakeAmount: te,
					totalVoters: ne,
					tournamentId: se,
					userSelection: oe,
					userWonAmount: ae
				} = E, de = q === k, le = J < Date.now(), ue = !c()(se), me = le && de && !ee, be = $.find(({
					id: e
				}) => e === A), pe = n ? Object(d.a)(e, ce.a.container, ce.a.forCommentsPage, {
					[ce.a.isEditing]: r
				}) : Object(d.a)(e, ce.a.container);
				return o.a.createElement("div", {
					className: pe,
					onClick: e => {
						E && e.stopPropagation()
					}
				}, n ? le ? ee ? o.a.createElement(K, {
					didParticipate: !!oe,
					isTokens: ue,
					isWinner: ee === oe,
					predictedAmount: oe && (null === (N = $.find(({
						id: e
					}) => e === oe)) || void 0 === N ? void 0 : N.userStakeAmount) || 0,
					wonAmount: ae
				}) : me ? o.a.createElement(D, null) : o.a.createElement(B, {
					didParticipate: !!oe
				}) : o.a.createElement(F.a, {
					isTokens: ue,
					storageKey: y.a.feature
				}) : null, o.a.createElement("div", {
					className: ce.a.poll
				}, $.map(e => o.a.createElement(ie.a, {
					endsAt: J,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: V && oe === e.id,
					onAnimationEnd: Z
				}, o.a.createElement(R.a, {
					disabled: V,
					isEnded: le,
					isSelected: A === e.id,
					needsResolution: me,
					option: e,
					onClick: () => (e => {
						(me || !le && !oe) && (me ? G(e.id) : M(e.id))
					})(e),
					resolvedOptionId: ee,
					tournamentId: se,
					userSelection: oe,
					userIsLoggedOut: !S,
					votePercentage: (oe || le || H) && e.voteCount ? Math.floor(e.voteCount / ne * 100) : null,
					isShowingHint: H
				}))), o.a.createElement(U.a, {
					disabled: V || H || !!oe,
					isEnded: le,
					userSelection: oe,
					isShowingHint: H,
					tournamentId: se,
					pollId: g,
					onReveal: () => W(!0)
				}), o.a.createElement("div", {
					className: ce.a.predictionsCount
				}, ue && ne > 0 && ge._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [ge._param("total voters", Object(l.b)(ne)), ge._plural(ne)], {
					hk: "2u2Nv8"
				}), o.a.createElement(Q, {
					isCoins: !ue,
					endsAt: J,
					resolvedOptionId: ee,
					totalStakeAmount: te
				}))), !!be && o.a.createElement(T.b, {
					className: ce.a.modal,
					isCreatingVote: w,
					onOverlayClick: X,
					onCancel: X,
					onPredict: async ({
						coinPackage: e,
						chipPackage: n
					}) => {
						if (e && e.coins > O) return Object(b.promptUserToBuyMoreCoins)(), void z(_.a);
						const s = n ? n.id : e.id,
							o = n ? n.amount : e.coins;
						if (le) return x({
							duration: 5e3,
							kind: v.b.Error,
							text: ge._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void M(null);
						if (!g || !A) throw new Error("Invalid arguments, optionId and pollId must be strings");
						j(!0), z(se ? Object(_.o)({
							pollId: g,
							selectedNumberTokens: o
						}) : Object(_.n)({
							pollId: g,
							selectedNumberCoins: o,
							totalStakeAmount: te
						}));
						try {
							await p({
								coinPackageId: s,
								optionId: A,
								postId: g,
								price: o
							}), t && C(g), j(!1), M(null), a ? Y(!0) : x({
								duration: 5e3,
								kind: v.b.SuccessCommunity,
								text: ge._("Thanks! See if you're right in {timeToResult}", [ge._param("timeToResult", Object(u.a)(new Date(J), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (r) {
							j(!1), M(null), x({
								duration: 5e3,
								kind: v.b.Error,
								text: ge._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: be,
					pollId: g,
					subredditId: f.belongsTo.id,
					tournamentId: se,
					withOverlay: !0
				}), me && L && o.a.createElement(re, {
					isResolving: w,
					isTokens: ue,
					onOverlayClick: X,
					onCancel: X,
					onResolve: async () => {
						if (j(!0), !L) throw new Error("Failed to create prediction, missing selected option");
						try {
							await m({
								optionId: L,
								postId: g
							})
						} catch (e) {
							x({
								duration: 5e3,
								kind: v.b.Error,
								text: ge._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						G(null), j(!1)
					},
					withOverlay: !0
				}), !i && se && o.a.createElement(he, {
					subredditId: f.belongsTo.id,
					tournamentId: se
				}))
			};
			t.default = xe(Object(r.b)(ve, Pe)(Ce))
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
				const b = Object(r.e)(m.W),
					f = Object(r.e)(m.j),
					E = Object(r.e)(m.C),
					_ = Object(r.e)(e => Object(u.a)(e, {
						subredditId: n
					}));
				return (null === (s = null == _ ? void 0 : _.latestParticipants) || void 0 === s ? void 0 : s.length) ? o.a.createElement("div", {
					className: Object(i.a)(p.a.tournamentFacepile, e)
				}, _.latestParticipants.slice(0, 3).map(({
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
						_ = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? o.a.createElement(a.a, {
						key: _,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(i.a)(p.a.snoovatar, t),
						headshot: u
					}) : o.a.createElement(c.b, {
						key: _,
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
			t.a = s.Z
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
				return _
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "y", (function() {
				return O
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "p", (function() {
				return w
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "s", (function() {
				return G
			})), n.d(t, "g", (function() {
				return V
			})), n.d(t, "m", (function() {
				return Y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Gold/Powerups/index.ts"),
				d = n("./src/reddit/models/Payments/index.ts"),
				l = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/gold/powerups/index.ts");
			const f = [],
				E = (e, t) => {
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
				_ = (e, t) => {
					const n = E(e, t);
					return n && n.endsAt || null
				};
			var h;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(h || (h = {}));
			const g = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === m.a.Fetched) {
						const n = _(e, t),
							s = Date.now();
						return n && s < n ? h.Subscribed : h.NotSubscribed
					}
					return h.DontKnow
				},
				v = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === m.a.Fetched) {
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

			function P(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const x = (e, t, n) => {
					var o;
					if (!s.d.spBadges(e)) return f;
					return P(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				C = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === m.a.Fetched) {
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

			function k(e, t, n, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === m.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return o.data.collections[n];
					if (n === a.a.Cosmetic && s) return o.data.collections[n][s]
				}
				return f
			}

			function S(e, t) {
				const n = k(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function N(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					const e = n.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return f
			}

			function I(e, t) {
				return k(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const w = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === u.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: n,
							type: d.a.SavedStripe
						})
					}
				}
				if (n.status === u.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var j;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(j || (j = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const n = A.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = E(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				F = (e, t) => {
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
				T = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
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
				G = (e, t, n) => {
					const o = "replyToPost" !== n && Object(b.a)(e, {
						commentId: n
					});
					if (!!o && Object(r.a)(o)) return !0;
					if (t && Object(p.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const i = s.d.spGiphy(e),
						a = U(e, t);
					return i && a
				},
				V = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				Y = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.4a38d30cb47de4ec75f7.js.map