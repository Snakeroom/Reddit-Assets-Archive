// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.71b7e91fdfb2dad420cd.js
// Retrieved at 6/8/2021, 6:20:04 PM by Reddit Dataminer v1.0.0
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
				a = n("./src/lib/constants/index.ts");
			const r = [a.jc, a.mb, a.y, a.N, a.hb, a.Mb],
				o = {
					[a.Mb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[a.hb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[a.N]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[a.y]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[a.mb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[a.jc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[a.Mb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[a.hb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[a.N]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[a.y]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[a.mb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[a.jc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[a.mb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[a.jc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[a.jc]: "",
						[a.mb]: "",
						[a.y]: "",
						[a.N]: "",
						[a.hb]: "",
						[a.Mb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? i : o)[s](e).toString()), u -= e * s
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
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				a = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
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
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(s.a)(o.a),
				c = Object(s.a)(o.b),
				d = Object(s.a)(o.c),
				l = Object(s.a)(o.d),
				u = Object(s.a)(o.e),
				m = Object(s.a)(o.f),
				b = Object(s.a)(o.g),
				p = Object(s.a)(o.h),
				f = Object(s.a)(o.i),
				E = e => Object(a.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
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
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
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
				a = n.n(s),
				r = n("./src/reddit/hooks/useLocalStorage.ts"),
				o = n("./src/reddit/controls/Button/index.tsx"),
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
				title: b
			}) {
				const p = m !== c.a.nonDismissable,
					[f, E] = Object(r.a)(m, !p || !1),
					[h, _] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					f || h || !d || (d(), _(!0))
				}, [f, h, d]), p && f ? null : a.a.createElement("div", {
					className: l.a.educationMessage
				}, a.a.createElement("div", {
					className: l.a.titleRow
				}, a.a.createElement("div", {
					className: l.a.header
				}, a.a.createElement("h3", {
					className: l.a.title
				}, b), t && a.a.createElement("div", {
					className: l.a.newBadge
				}, u._("New", null, {
					hk: "2N0EBb"
				}))), p && a.a.createElement(o.q, {
					"aria-label": u._("Close", null, {
						hk: "2UjnU"
					}),
					className: l.a.closeButton,
					Icon: Object(i.b)("close"),
					onClick: () => {
						E(!0), n && n()
					},
					priority: o.b.Plain
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
				imageWrapper: "_2W3osjGBUyX9KFl62fi7rk",
				star1: "_2UfVJXiEmwm5iuqWtStET_",
				star2: "kz2JFnOTsECwmeCjUq7DT",
				star3: "VIpS2R-VHBk65WSa6Zcib",
				star4: "l-AV8_H83Hx_AHDSeTB98",
				star5: "_1dPwshgIcu7y8Z1FasODrj",
				star6: "_3NqJmwdfmQTGmPTo_r720g",
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function i({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: a
			}) {
				const i = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return r.a.createElement("div", null, r.a.createElement(o.a, {
					onClose: t,
					onView: n,
					title: i,
					newBadge: !0,
					message: c,
					storageKey: a
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
				return Ge
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/lodash/isNil.js"),
				c = n.n(i),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/prettyPrintNumber/index.ts"),
				u = n("./src/lib/timeUntil/index.ts"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/actions/economics/helpers/index.ts"),
				p = n("./src/reddit/actions/economics/predictions/index.ts"),
				f = n("./src/reddit/actions/post.ts"),
				E = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/helpers/trackers/predictions.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/selectors/poll/index.ts"),
				x = n("./src/reddit/selectors/postCreations.ts"),
				k = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				S = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				C = n.n(S);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var I = ({
					className: e
				}) => a.a.createElement("div", {
					className: Object(d.a)(C.a.container, e)
				}, N._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				j = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx"),
				w = n("./src/reddit/components/Econ/Prediction/PredictionEndedEducationMessage/index.m.less"),
				A = n.n(w);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function B({
				didParticipate: e
			}) {
				const t = M._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = a.a.createElement(a.a.Fragment, null, M._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && a.a.createElement("div", {
						className: A.a.notificationBlurb
					}, M._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return a.a.createElement("div", null, a.a.createElement(j.a, {
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
				return a.a.createElement("div", null, a.a.createElement(j.a, {
					title: e,
					message: t
				}))
			}
			var R = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				U = n("./src/reddit/selectors/telemetry.ts");
			const G = "prediction_sneak_peek",
				W = (e, t, n) => ({
					...U.defaults(e),
					post: U.post(e, t),
					subreddit: U.subreddit(e),
					predictions: {
						tournamentId: n
					}
				});
			var V = n("./src/reddit/hooks/useLocalStorage.ts"),
				H = n("./src/reddit/icons/svgs/EyeDouble/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Star6/index.m.less"),
				q = n.n(Y);
			var z = ({
					className: e
				}) => a.a.createElement("svg", {
					className: Object(d.a)(q.a.sparkle, e),
					viewBox: "0 0 12 12",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M6.24217.834593C6.17191.634169 5.98271.5 5.77032.5c-.21238 0-.40158.134169-.47184.334593L4.09315 4.27297.820306 5.53341C.627317 5.60773.5 5.79319.5 6s.127317.39227.320306.46659L4.09315 7.72703l1.20533 3.43837c.07026.2004.25946.3346.47184.3346.21239 0 .40159-.1342.47185-.3346L7.4475 7.72703l3.2728-1.26044c.193-.07432.3203-.25978.3203-.46659s-.1273-.39227-.3203-.46659L7.4475 4.27297 6.24217.834593z",
					fill: "url(#paint0_linear)",
					stroke: "inherit",
					strokeLinejoin: "round"
				}), a.a.createElement("defs", null, a.a.createElement("linearGradient", {
					id: "paint0_linear",
					x1: "1",
					y1: "11",
					x2: "10.5506",
					y2: "10.9905",
					gradientUnits: "userSpaceOnUse"
				}, a.a.createElement("stop", {
					stopColor: "#EC0623"
				}), a.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				})))),
				Z = n("./src/config.ts"),
				K = n("./src/higherOrderComponents/asModal/index.tsx"),
				X = n("./src/reddit/controls/Button/index.tsx"),
				J = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Q = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				$ = n("./src/reddit/components/Econ/Prediction/HintUpsellModal/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ne = Object(K.a)(({
					isPremiumSubscriber: e,
					tournamentId: t,
					pollId: n,
					hasSeenSneakPeek: r,
					onReveal: o,
					closeModal: i
				}) => {
					const c = e ? "continue" : "premium",
						d = Object(_.a)();
					Object(s.useEffect)(() => {
						d((({
							noun: e,
							pollId: t,
							tournamentId: n
						}) => s => ({
							...W(s, t, n),
							source: G,
							action: "view",
							noun: e
						}))({
							noun: c,
							pollId: n,
							tournamentId: t
						}))
					}, [d, c, n, t]);
					const l = () => d((({
						noun: e,
						pollId: t,
						tournamentId: n
					}) => s => ({
						...W(s, t, n),
						source: G,
						action: "click",
						noun: e
					}))({
						noun: c,
						pollId: n,
						tournamentId: t
					}));
					return a.a.createElement("div", {
						className: ee.a.modal
					}, a.a.createElement("button", {
						"aria-label": te._("Close", null, {
							hk: "10CQyx"
						}),
						className: ee.a.closeButton,
						onClick: i
					}, a.a.createElement(J.a, {
						className: ee.a.closeIcon
					})), a.a.createElement("header", {
						className: ee.a.header
					}, a.a.createElement("div", {
						className: ee.a.imageWrapper
					}, a.a.createElement(Q.a, {
						className: ee.a.image
					}), !r && a.a.createElement(a.a.Fragment, null, a.a.createElement(z, {
						className: ee.a.star1
					}), a.a.createElement(z, {
						className: ee.a.star2
					}), a.a.createElement(z, {
						className: ee.a.star3
					}), a.a.createElement(z, {
						className: ee.a.star4
					}), a.a.createElement(z, {
						className: ee.a.star5
					}), a.a.createElement(z, {
						className: ee.a.star6
					}))), a.a.createElement("div", {
						className: ee.a.spacer
					}), a.a.createElement("p", {
						className: ee.a.premium
					}, te._("Premium Feature", null, {
						hk: "32ZWoW"
					})), a.a.createElement("div", {
						className: ee.a.smallSpacer
					}), a.a.createElement("h2", {
						className: ee.a.title
					}, te._("Sneak Peek", null, {
						hk: "2FAIvU"
					})), a.a.createElement("h3", {
						className: ee.a.subtitle
					}, te._("Premium users can see how others have predicted before they make their own Prediction.", null, {
						hk: "1gsyLA"
					}))), e ? a.a.createElement(X.q, {
						priority: X.b.Primary,
						className: ee.a.button,
						onClick: () => {
							l(), o(), i()
						},
						isFullWidth: !0
					}, te._("Continue", null, {
						hk: "3T00JU"
					})) : a.a.createElement("a", {
						className: ee.a.link,
						href: `${Z.a.redditUrl}/premium`,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: () => {
							l(), i()
						}
					}, te._("Get Premium", null, {
						hk: "3tW2d3"
					})), a.a.createElement("div", {
						className: ee.a.spacer
					}), a.a.createElement("p", {
						className: ee.a.disclaimer
					}, te._("Only paid Reddit Premium members get a hint.", null, {
						hk: "2BpR2d"
					})))
				}),
				se = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				ae = n.n(se);
			const {
				fbt: re
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = ({
					disabled: e,
					isEnded: t,
					userSelection: n,
					isShowingHint: o,
					tournamentId: i,
					pollId: c,
					onReveal: l
				}) => {
					const [u, m] = Object(s.useState)(!1), [b, p] = Object(V.a)("hasSeenPredictionSneakPeek", !1), f = Object(_.a)(), E = Object(r.e)(y.t), h = !!i, v = n && !o;
					if (!Object(r.e)(e => !t && !v && h && Object(g.m)(e))) return null;
					const P = () => {
						b || p(!0), m(!1)
					};
					return a.a.createElement("div", {
						className: ae.a.optionButtonWrapper
					}, !b && !e && a.a.createElement(a.a.Fragment, null, a.a.createElement(z, {
						className: ae.a.star1
					}), a.a.createElement(z, {
						className: ae.a.star2
					}), a.a.createElement(z, {
						className: ae.a.star3
					}), a.a.createElement(z, {
						className: ae.a.star4
					}), a.a.createElement(z, {
						className: ae.a.star5
					})), a.a.createElement("button", {
						"aria-label": re._("Sneak a peek", null, {
							hk: "1VQ7WW"
						}),
						className: Object(d.a)(ae.a.hintButton, {
							[ae.a.canGetHint]: !e
						}),
						disabled: e,
						onClick: () => {
							f((({
								pollId: e,
								tournamentId: t
							}) => n => ({
								...W(n, e, t),
								source: "predictions",
								action: "click",
								noun: G
							}))({
								pollId: c,
								tournamentId: i
							})), E && b ? l() : m(!0)
						}
					}, a.a.createElement("div", {
						className: ae.a.optionBody
					}, a.a.createElement(H.a, {
						className: ae.a.eyeIcon
					}), a.a.createElement("div", {
						className: ae.a.optionText
					}, re._("See what others think", null, {
						hk: "2TLT90"
					})))), u && a.a.createElement(ne, {
						isPremiumSubscriber: E,
						tournamentId: i,
						pollId: c,
						hasSeenSneakPeek: b,
						onReveal: l,
						closeModal: P,
						withOverlay: !0,
						onOverlayClick: P
					}))
				},
				ie = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				ce = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				de = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				le = n.n(de);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function me({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: r
			}) {
				return e && !n ? a.a.createElement("div", null, a.a.createElement(j.a, {
					title: ue._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: a.a.createElement(a.a.Fragment, null, ue._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && a.a.createElement("div", {
						className: le.a.wonOrLostAmountRow
					}, ue._("You lost {lostAmount}", [ue._param("lostAmount", a.a.createElement("div", {
						className: le.a.wonOrLostAmount
					}, t ? a.a.createElement(ce.a, {
						className: le.a.coinIcon
					}) : a.a.createElement(ie.a, {
						className: le.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !r ? a.a.createElement("div", null, a.a.createElement(j.a, {
					title: ue._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: a.a.createElement(a.a.Fragment, null, ue._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), a.a.createElement("div", {
						className: le.a.wonOrLostAmountRow
					}, ue._("You've been refunded {refundedAmount}", [ue._param("refundedAmount", a.a.createElement("div", {
						className: le.a.wonOrLostAmount
					}, t ? a.a.createElement(ce.a, {
						className: le.a.coinIcon
					}) : a.a.createElement(ie.a, {
						className: le.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? a.a.createElement("div", null, a.a.createElement(j.a, {
					title: ue._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: a.a.createElement(a.a.Fragment, null, ue._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!r && a.a.createElement("div", {
						className: le.a.wonOrLostAmountRow
					}, ue._("You won {wonAmount}", [ue._param("wonAmount", a.a.createElement("div", {
						className: le.a.wonOrLostAmount
					}, t ? a.a.createElement(ce.a, {
						className: le.a.coinIcon
					}) : a.a.createElement(ie.a, {
						className: le.a.coinIcon
					}), s + r))], {
						hk: "1zg0cH"
					})))
				})) : a.a.createElement("div", null, a.a.createElement(j.a, {
					title: ue._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: ue._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			var be = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				pe = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				fe = n.n(pe);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), he = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? a.a.createElement("div", {
				className: fe.a.statusBar
			}, n && a.a.createElement(be.a, {
				className: fe.a.clockIcon
			}), t ? Ee._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : Ee._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : a.a.createElement("div", {
				className: fe.a.statusBar
			}, n && a.a.createElement(be.a, {
				className: fe.a.clockIcon
			}), Ee._("Prediction ends in {expirationDuration}", [Ee._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var _e = ({
					endsAt: e,
					resolvedOptionId: t,
					totalStakeAmount: n,
					isCoins: s
				}) => a.a.createElement("div", null, n > 0 && s && a.a.createElement("div", {
					className: fe.a.statusBar
				}, a.a.createElement(ie.a, {
					className: fe.a.coinIcon
				}), n, " ", Ee._("added by participants", null, {
					hk: "PSq3T"
				})), a.a.createElement(he, {
					endsAt: e,
					resolvedOptionId: t,
					isCoins: s
				})),
				ge = n("./src/reddit/icons/fonts/index.tsx"),
				ve = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				Pe = n.n(ve);
			const {
				fbt: xe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ke = Object(K.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Pe.a.header
					}, a.a.createElement(X.q, {
						className: Pe.a.closeButton,
						Icon: Object(ge.b)("close"),
						priority: X.b.Plain,
						onClick: n
					}), a.a.createElement("h1", null, xe._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), a.a.createElement("div", {
						className: Pe.a.content
					}, a.a.createElement("p", {
						className: Pe.a.message
					}, t ? xe._("Once you hit Submit, the answer is final and tokens will be distributed to the winners", null, {
						hk: "4cSIyE"
					}) : xe._("Once you hit Submit, the answer is final and coins will be distributed to the winners", null, {
						hk: "3Nutvx"
					})), a.a.createElement("div", {
						className: Pe.a.actions
					}, a.a.createElement(X.l, {
						disabled: e,
						onClick: n,
						priority: X.b.Secondary,
						redditStyle: !0,
						size: X.c.S
					}, xe._("Cancel", null, {
						hk: "4Gco5s"
					})), a.a.createElement(X.i, {
						className: Pe.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: X.c.S
					}, xe._("Submit", null, {
						hk: "ZLsi7"
					})))))
				})),
				ye = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				Oe = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Se = n.n(Oe),
				Ce = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				Ne = n("./src/reddit/controls/InternalLink/index.tsx"),
				Ie = n("./src/reddit/hooks/usePageLayer.ts"),
				je = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				we = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Ae = n("./src/reddit/selectors/subreddit.ts"),
				Me = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Be = n.n(Me);
			const {
				fbt: Fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Te({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(r.d)(),
					o = Object(_.a)(),
					i = Object(Ie.a)(),
					c = Object(r.e)(t => Object(Ae.U)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(we.g)(t, {
						subredditId: e
					})),
					u = Object(r.e)(t => Object(we.a)(t, {
						subredditId: e
					})),
					b = Object(m.w)(i),
					f = Object(m.G)(i),
					E = Object(m.K)(i);
				if (Object(s.useEffect)(() => {
						d || n(Object(p.g)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: g,
					totalParticipantsCount: v
				} = u;
				return a.a.createElement(Ne.a, {
					className: Be.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						o(Object(h.k)({
							pageType: b ? "post_detail" : E ? "community" : f ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, a.a.createElement(Ce.a, {
					className: Be.a.facepile,
					subredditId: e
				}), a.a.createElement("div", {
					className: Be.a.info
				}, a.a.createElement("div", {
					className: Be.a.tournamentName
				}, g), a.a.createElement("div", {
					className: Be.a.totalPlayers
				}, v > 0 ? Fe._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [Fe._param("totalPlayers", Object(l.b)(v)), Fe._plural(v)], {
					hk: "3eDpRH"
				}) : Fe._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), a.a.createElement(je.a, {
					className: Be.a.chevron
				}))
			}
			const {
				fbt: Le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), De = Object(o.c)({
				isAutoVoteEnabled: g.l,
				isEditing: x.K,
				isVoteAnimationEnabled: g.k,
				prediction: P.g,
				pollId: P.a,
				post: k.F,
				subredditOrProfile: k.R,
				userCoins: y.d,
				userIsLoggedIn: y.K,
				userId: y.pb
			}), Re = {
				onPredictionResolve: p.j,
				onPredictionVote: p.k,
				showToast: E.f,
				upvoteToggled: f.bb
			}, Ue = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), Ge = ({
				className: e,
				isAutoVoteEnabled: t,
				isCommentsPage: n,
				isEditing: r,
				isPredictionsPage: o,
				isVoteAnimationEnabled: i,
				onPredictionResolve: m,
				onPredictionVote: p,
				post: f,
				prediction: E,
				pollId: g,
				subredditOrProfile: P,
				showToast: x,
				upvoteToggled: k,
				userCoins: y,
				userId: S,
				userIsLoggedIn: C
			}) => {
				var N;
				const [j, w] = Object(s.useState)(!1), [A, M] = Object(s.useState)(null), [L, U] = Object(s.useState)(null), [G, W] = Object(s.useState)(!1), [V, H] = Object(s.useState)(!1), Y = Object(_.a)(), q = Object(s.useCallback)(() => {
					W(!1)
				}, []), z = Object(s.useCallback)(() => {
					M(null), U(null)
				}, []);
				if (!g || !E || !P) return a.a.createElement(I, null);
				const {
					creatorId: Z,
					endsAt: K,
					options: X,
					resolvedOptionId: J,
					totalStakeAmount: Q,
					totalVoters: $,
					tournamentId: ee,
					userSelection: te,
					userWonAmount: ne
				} = E, se = Z === S, ae = K < Date.now(), re = !c()(ee), ie = ae && se && !J, ce = X.find(({
					id: e
				}) => e === A), de = n ? Object(d.a)(e, Se.a.container, Se.a.forCommentsPage, {
					[Se.a.isEditing]: r
				}) : Object(d.a)(e, Se.a.container);
				return a.a.createElement("div", {
					className: de,
					onClick: e => {
						E && e.stopPropagation()
					}
				}, n ? ae ? J ? a.a.createElement(me, {
					didParticipate: !!te,
					isTokens: re,
					isWinner: J === te,
					predictedAmount: te && (null === (N = X.find(({
						id: e
					}) => e === te)) || void 0 === N ? void 0 : N.userStakeAmount) || 0,
					wonAmount: ne
				}) : ie ? a.a.createElement(D, null) : a.a.createElement(B, {
					didParticipate: !!te
				}) : a.a.createElement(F.a, {
					isTokens: re,
					storageKey: O.a.feature
				}) : null, a.a.createElement("div", {
					className: Se.a.poll
				}, X.map(e => a.a.createElement(ye.a, {
					endsAt: K,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: G && te === e.id,
					onAnimationEnd: q
				}, a.a.createElement(R.a, {
					disabled: G,
					isEnded: ae,
					isSelected: A === e.id,
					needsResolution: ie,
					option: e,
					onClick: () => (e => {
						(ie || !ae && !te) && (ie ? U(e.id) : M(e.id))
					})(e),
					resolvedOptionId: J,
					tournamentId: ee,
					userSelection: te,
					userIsLoggedOut: !C,
					votePercentage: (te || ae || V) && e.voteCount ? Math.floor(e.voteCount / $ * 100) : null,
					isShowingHint: V
				}))), a.a.createElement(oe, {
					disabled: G || V || !!te,
					isEnded: ae,
					userSelection: te,
					isShowingHint: V,
					tournamentId: ee,
					pollId: g,
					onReveal: () => H(!0)
				}), a.a.createElement("div", {
					className: Se.a.predictionsCount
				}, re && $ > 0 && Le._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [Le._param("total voters", Object(l.b)($)), Le._plural($)], {
					hk: "2u2Nv8"
				}), a.a.createElement(_e, {
					isCoins: !re,
					endsAt: K,
					resolvedOptionId: J,
					totalStakeAmount: Q
				}))), !!ce && a.a.createElement(T.b, {
					className: Se.a.modal,
					isCreatingVote: j,
					onOverlayClick: z,
					onCancel: z,
					onPredict: async ({
						coinPackage: e,
						chipPackage: n
					}) => {
						if (e && e.coins > y) return Object(b.promptUserToBuyMoreCoins)(), void Y(h.a);
						const s = n ? n.id : e.id,
							a = n ? n.amount : e.coins;
						if (ae) return x({
							duration: 5e3,
							kind: v.b.Error,
							text: Le._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void M(null);
						if (!g || !A) throw new Error("Invalid arguments, optionId and pollId must be strings");
						w(!0), Y(ee ? Object(h.o)({
							pollId: g,
							selectedNumberTokens: a
						}) : Object(h.n)({
							pollId: g,
							selectedNumberCoins: a,
							totalStakeAmount: Q
						}));
						try {
							await p({
								coinPackageId: s,
								optionId: A,
								postId: g,
								price: a
							}), t && k(g), w(!1), M(null), i ? W(!0) : x({
								duration: 5e3,
								kind: v.b.SuccessCommunity,
								text: Le._("Thanks! See if you're right in {timeToResult}", [Le._param("timeToResult", Object(u.a)(new Date(K), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (r) {
							w(!1), M(null), x({
								duration: 5e3,
								kind: v.b.Error,
								text: Le._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: ce,
					pollId: g,
					subredditId: f.belongsTo.id,
					tournamentId: ee,
					withOverlay: !0
				}), ie && L && a.a.createElement(ke, {
					isResolving: j,
					isTokens: re,
					onOverlayClick: z,
					onCancel: z,
					onResolve: async () => {
						if (w(!0), !L) throw new Error("Failed to create prediction, missing selected option");
						try {
							await m({
								optionId: L,
								postId: g
							})
						} catch (e) {
							x({
								duration: 5e3,
								kind: v.b.Error,
								text: Le._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						U(null), w(!1)
					},
					withOverlay: !0
				}), !o && ee && a.a.createElement(Te, {
					subredditId: f.belongsTo.id,
					tournamentId: ee
				}))
			};
			t.default = Ue(Object(r.b)(De, Re)(Ge))
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
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
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
					h = Object(r.e)(e => Object(u.a)(e, {
						subredditId: n
					}));
				return (null === (s = null == h ? void 0 : h.latestParticipants) || void 0 === s ? void 0 : s.length) ? a.a.createElement("div", {
					className: Object(o.a)(p.a.tournamentFacepile, e)
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
					return Object(d.a)(u) ? a.a.createElement(i.a, {
						key: h,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(o.a)(p.a.snoovatar, t),
						headshot: u
					}) : a.a.createElement(c.b, {
						key: h,
						className: Object(o.a)(p.a.userIcon, t),
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
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => a.a.createElement("div", {
				className: Object(r.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
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

			function a(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}))
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n("./src/reddit/helpers/localStorage/index.ts");
			const r = {},
				o = (e, t, n) => (r[e] || (r[e] = {
					callbacks: [],
					value: n
				}), r[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: n
						} = r[e], s = n.indexOf(t);
						s > -1 && n.splice(s, 1)
					},
					emit: n => {
						r[e].value !== n && (r[e].value = n, r[e].callbacks.forEach(e => {
							e !== t && e(n)
						}))
					}
				});

			function i(e, t) {
				const n = Object(s.useRef)(null);
				let r;
				r = Object(a.y)(e);
				const [i, c] = Object(s.useState)(null != r ? r : t);
				return Object(s.useEffect)(() => (n.current = o(e, c, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(s.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(i)
				}, [i]), [i, function(t) {
					Object(a.yb)(e, t), c(t)
				}]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.Z
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
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
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = n.n(o);
			t.a = e => a.a.createElement("svg", {
				className: Object(r.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, a.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ClockFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11.901 11.809C11.803 11.909 11.673 11.959 11.543 11.959C11.417 11.959 11.291 11.913 11.194 11.817L7.651 8.358C7.554 8.264 7.5 8.135 7.5 8V3C7.5 2.724 7.724 2.5 8 2.5C8.276 2.5 8.5 2.724 8.5 3V7.789L11.892 11.102C12.09 11.294 12.094 11.611 11.901 11.809ZM8 0C3.589 0 0 3.589 0 8C0 12.412 3.589 16 8 16C12.411 16 16 12.412 16 8C16 3.589 12.411 0 8 0Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/EyeDouble/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 16",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10.5 3.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zm0 8A3.38 3.38 0 1113.88 8a3.39 3.39 0 01-3.38 3.38z"
			}), a.a.createElement("path", {
				d: "M20.36 7.57a10.61 10.61 0 00-19.72 0 1.16 1.16 0 000 .86 10.73 10.73 0 002.42 3.65 10.62 10.62 0 0014.44.39 10.72 10.72 0 002.84-4 1.16 1.16 0 00.02-.9zm-3.67 4a9.34 9.34 0 01-12.75-.34A9.79 9.79 0 011.8 8a9.37 9.37 0 0117.4 0 9.4 9.4 0 01-2.51 3.53v.04z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Star6/index.m.less": function(e, t, n) {
			e.exports = {
				sparkle: "_39SsnAyWvt-R7vd5x-DV2p",
				fadeIn: "_2Rb9zPIVWO8_F_3QxHbRSh"
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var s, a, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(a || (a = {}));
			const o = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				i = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, a, r, o;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, a = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case a.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
									...a
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: a
									}
								}
							}
						}
						return e;
					case a.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
									...a
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: a
									}
								}
							}
						}
						return e;
					case a.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case a.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case a.d:
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
			var s, a = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
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
					e.collections && Object.keys(e.collections).forEach(a => {
						let r;
						(r = e.placement ? e.placement === i.a.First ? s[c.a.Loyalty][a] : s[c.a.Achievement][a] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][a] : s[c.a.Cosmetic][c.c.Gallery][a]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(o.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === a.a).map(m).sort((e, n) => {
					const s = t[e.id],
						a = t[n.id];
					return Object(o.b)(s, a)
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
						a = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...a,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...a,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...a,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...a,
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
						} = t.payload, a = e[n];
						return a && a.status === s.Fetched ? {
							...e,
							[n]: {
								...a,
								data: {
									...a.data
								},
								raw: {
									...a.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: n
						} = t.payload, a = e[n];
						return a && a.status === s.Fetched ? {
							...e,
							[n]: {
								...a,
								data: {
									...a.data,
									subscription: {
										...a.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...a.raw,
									subscription: {
										...a.raw.subscription || {},
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
				return P
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "y", (function() {
				return y
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "p", (function() {
				return j
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
				return W
			})), n.d(t, "m", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				r = n("./src/reddit/helpers/richTextJson/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
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
					if (n && n.status === m.a.Fetched) {
						const n = h(e, t),
							s = Date.now();
						return n && s < n ? _.Subscribed : _.NotSubscribed
					}
					return _.DontKnow
				},
				v = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === m.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === o.a.First),
							[i.a.Achievement]: s.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function P(e, t) {
				return (null == e ? void 0 : e.length) ? Object(a.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const x = (e, t, n) => {
					var a;
					if (!s.d.spBadges(e)) return f;
					return P(null === (a = e.users.appliedBadges[n]) || void 0 === a ? void 0 : a[t], e.badges.models)
				},
				k = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === m.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function y(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function O(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, a = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(n) && n.userId === a) return n;
				const r = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					c = Object(o.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => r[e]).find(e => e && e.type === c)
			}

			function S(e, t, n, s) {
				const a = e.economics.subredditPremium[t];
				if (a && a.status === m.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return a.data.collections[n];
					if (n === i.a.Cosmetic && s) return a.data.collections[n][s]
				}
				return f
			}

			function C(e, t) {
				const n = S(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function N(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return f
			}

			function I(e, t) {
				return S(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const j = e => {
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
					var n, s, a, r;
					const o = (null === (r = null === (a = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === a ? void 0 : a[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || A;
					return {
						prices: B(e, t),
						member: o.member || A.member,
						memberPlural: o.memberPlural || A.memberPlural,
						memberAlt: o.memberAlt || A.memberAlt,
						memberAltPlural: o.memberAltPlural || A.memberAltPlural,
						membership: o.membership || A.membership,
						membershipAlt: o.membershipAlt || A.membershipAlt
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
					const a = "replyToPost" !== n && Object(b.a)(e, {
						commentId: n
					});
					if (!!a && Object(r.a)(a)) return !0;
					if (t && Object(p.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const o = s.d.spGiphy(e),
						i = U(e, t);
					return o && i
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.71b7e91fdfb2dad420cd.js.map