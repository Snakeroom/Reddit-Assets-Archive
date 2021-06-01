// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.d4270293137c7463eba9.js
// Retrieved at 6/1/2021, 6:50:05 PM by Reddit Dataminer v1.0.0
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
				r = n("./src/lib/constants/index.ts");
			const o = [r.ic, r.lb, r.y, r.M, r.gb, r.Lb],
				i = {
					[r.Lb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.gb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.M]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.y]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.lb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.ic]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Lb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.gb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.M]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.y]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.lb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.ic]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.lb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.ic]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.ic]: "",
						[r.lb]: "",
						[r.y]: "",
						[r.M]: "",
						[r.gb]: "",
						[r.Lb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of o) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
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
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
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
				r = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
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
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				r = n.n(s),
				o = n("./src/reddit/hooks/useLocalStorage.ts"),
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
					Icon: Object(a.b)("close"),
					onClick: () => {
						E(!0), n && n()
					},
					priority: i.b.Plain
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
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx");

			function a({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: r
			}) {
				const a = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return o.a.createElement("div", null, o.a.createElement(i.a, {
					onClose: t,
					onView: n,
					title: a,
					newBadge: !0,
					message: c,
					storageKey: r
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
				return Fe
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
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
				h = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				_ = n("./src/reddit/helpers/trackers/predictions.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				P = n("./src/reddit/selectors/poll/index.ts"),
				x = n("./src/reddit/selectors/postCreations.ts"),
				O = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/components/Econ/Prediction/EducationMessage/constants.ts"),
				C = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				S = n.n(C);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var j = ({
					className: e
				}) => r.a.createElement("div", {
					className: Object(d.a)(S.a.container, e)
				}, N._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				I = n("./src/reddit/components/Econ/Prediction/EducationMessage/index.tsx"),
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
					n = r.a.createElement(r.a.Fragment, null, M._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && r.a.createElement("div", {
						className: A.a.notificationBlurb
					}, M._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return r.a.createElement("div", null, r.a.createElement(I.a, {
					title: t,
					message: n
				}))
			}
			var F = n("./src/reddit/components/Econ/Prediction/PredictionFeatureEducationMessage/index.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				T = n("./node_modules/fbt/lib/FbtPublic.js");

			function D() {
				const e = T.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = T.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return r.a.createElement("div", null, r.a.createElement(I.a, {
					title: e,
					message: t
				}))
			}
			var R = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				U = n("./src/reddit/icons/svgs/EyeDouble/index.tsx"),
				G = n("./src/reddit/hooks/useLocalStorage.ts"),
				V = n("./src/config.ts"),
				W = n("./src/higherOrderComponents/asModal/index.tsx"),
				H = n("./src/reddit/controls/Button/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				K = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				Z = n("./src/reddit/components/Econ/Prediction/HintUpsellModal/index.m.less"),
				q = n.n(Z);
			const {
				fbt: z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var X = Object(W.a)(({
					isPremiumSubscriber: e,
					onReveal: t,
					closeModal: n
				}) => r.a.createElement("div", {
					className: q.a.modal
				}, r.a.createElement(H.q, {
					className: q.a.closeButton,
					Icon: Y.a,
					priority: H.b.Plain,
					onClick: n
				}), r.a.createElement("header", {
					className: q.a.header
				}, r.a.createElement(K.a, {
					className: q.a.image
				}), r.a.createElement("div", {
					className: q.a.spacer
				}), r.a.createElement("p", {
					className: q.a.premium
				}, z._("Premium Feature", null, {
					hk: "32ZWoW"
				})), r.a.createElement("div", {
					className: q.a.smallSpacer
				}), r.a.createElement("h2", {
					className: q.a.title
				}, z._("Sneak Peek", null, {
					hk: "2FAIvU"
				})), r.a.createElement("h3", {
					className: q.a.subtitle
				}, z._("Premium users can see how others have predicted before they make their own Prediction.", null, {
					hk: "2mpEHX"
				}))), e ? r.a.createElement("button", {
					className: q.a.button,
					onClick: () => {
						t(), n()
					}
				}, z._("Continue", null, {
					hk: "3T00JU"
				})) : r.a.createElement("a", {
					className: q.a.link,
					href: `${V.a.redditUrl}/premium`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => n()
				}, z._("Get Premium", null, {
					hk: "3tW2d3"
				})), r.a.createElement("div", {
					className: q.a.spacer
				}), r.a.createElement("p", {
					className: q.a.disclaimer
				}, z._("Only paid Reddit Premium members get a sneak peek.", null, {
					hk: "KOIbk"
				})))),
				J = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.m.less"),
				Q = n.n(J);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var ee = ({
					disabled: e,
					isEnded: t,
					userSelection: n,
					isShowingHint: i,
					tournamentId: a,
					onReveal: c
				}) => {
					const [l, u] = Object(s.useState)(!1), [m, b] = Object(G.a)("hasSeenPredictionSneakPeek", !1), p = Object(o.e)(y.t), f = !!a, E = n && !i;
					if (!Object(o.e)(e => !t && !E && f && Object(h.f)(e))) return null;
					return r.a.createElement("div", {
						className: Q.a.optionButtonWrapper
					}, r.a.createElement("button", {
						"aria-label": $._("Sneak a peek", null, {
							hk: "1VQ7WW"
						}),
						className: Object(d.a)(Q.a.hintButton, {
							[Q.a.canGetHint]: !e
						}),
						disabled: e,
						onClick: () => {
							p && m ? c() : (p && b(!0), u(!0))
						}
					}, r.a.createElement("div", {
						className: Q.a.optionBody
					}, r.a.createElement(U.a, {
						className: Q.a.eyeIcon
					}), r.a.createElement("div", {
						className: Q.a.optionText
					}, $._("See what others think", null, {
						hk: "2TLT90"
					})))), l && r.a.createElement(X, {
						isPremiumSubscriber: p,
						onReveal: c,
						closeModal: () => u(!1),
						withOverlay: !0,
						onOverlayClick: () => u(!1)
					}))
				},
				te = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				ne = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				se = n("./src/reddit/components/Econ/Prediction/PredictionResolvedEducationMessage/index.m.less"),
				re = n.n(se);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ie({
				didParticipate: e,
				isTokens: t,
				isWinner: n,
				predictedAmount: s,
				wonAmount: o
			}) {
				return e && !n ? r.a.createElement("div", null, r.a.createElement(I.a, {
					title: oe._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: r.a.createElement(r.a.Fragment, null, oe._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!s && r.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, oe._("You lost {lostAmount}", [oe._param("lostAmount", r.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? r.a.createElement(ne.a, {
						className: re.a.coinIcon
					}) : r.a.createElement(te.a, {
						className: re.a.coinIcon
					}), s))], {
						hk: "6091x"
					})))
				})) : e && n && s && !o ? r.a.createElement("div", null, r.a.createElement(I.a, {
					title: oe._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: r.a.createElement(r.a.Fragment, null, oe._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), r.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, oe._("You've been refunded {refundedAmount}", [oe._param("refundedAmount", r.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? r.a.createElement(ne.a, {
						className: re.a.coinIcon
					}) : r.a.createElement(te.a, {
						className: re.a.coinIcon
					}), s))], {
						hk: "49bOe9"
					})))
				})) : e && n ? r.a.createElement("div", null, r.a.createElement(I.a, {
					title: oe._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: r.a.createElement(r.a.Fragment, null, oe._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!o && r.a.createElement("div", {
						className: re.a.wonOrLostAmountRow
					}, oe._("You won {wonAmount}", [oe._param("wonAmount", r.a.createElement("div", {
						className: re.a.wonOrLostAmount
					}, t ? r.a.createElement(ne.a, {
						className: re.a.coinIcon
					}) : r.a.createElement(te.a, {
						className: re.a.coinIcon
					}), s + o))], {
						hk: "1zg0cH"
					})))
				})) : r.a.createElement("div", null, r.a.createElement(I.a, {
					title: oe._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: oe._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}
			var ae = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				ce = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				de = n.n(ce);
			const {
				fbt: le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ue = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? r.a.createElement("div", {
				className: de.a.statusBar
			}, n && r.a.createElement(ae.a, {
				className: de.a.clockIcon
			}), t ? le._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : le._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : r.a.createElement("div", {
				className: de.a.statusBar
			}, n && r.a.createElement(ae.a, {
				className: de.a.clockIcon
			}), le._("Prediction ends in {expirationDuration}", [le._param("expirationDuration", Object(u.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var me = ({
					endsAt: e,
					resolvedOptionId: t,
					totalStakeAmount: n,
					isCoins: s
				}) => r.a.createElement("div", null, n > 0 && s && r.a.createElement("div", {
					className: de.a.statusBar
				}, r.a.createElement(te.a, {
					className: de.a.coinIcon
				}), n, " ", le._("added by participants", null, {
					hk: "PSq3T"
				})), r.a.createElement(ue, {
					endsAt: e,
					resolvedOptionId: t,
					isCoins: s
				})),
				be = n("./src/reddit/icons/fonts/index.tsx"),
				pe = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				fe = n.n(pe);
			const {
				fbt: Ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var he = Object(W.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: fe.a.header
					}, r.a.createElement(H.q, {
						className: fe.a.closeButton,
						Icon: Object(be.b)("close"),
						priority: H.b.Plain,
						onClick: n
					}), r.a.createElement("h1", null, Ee._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), r.a.createElement("div", {
						className: fe.a.content
					}, r.a.createElement("p", {
						className: fe.a.message
					}, t ? Ee._("Once you hit Submit, the answer is final and tokens will be distributed to the winners", null, {
						hk: "4cSIyE"
					}) : Ee._("Once you hit Submit, the answer is final and coins will be distributed to the winners", null, {
						hk: "3Nutvx"
					})), r.a.createElement("div", {
						className: fe.a.actions
					}, r.a.createElement(H.l, {
						disabled: e,
						onClick: n,
						priority: H.b.Secondary,
						redditStyle: !0,
						size: H.c.S
					}, Ee._("Cancel", null, {
						hk: "4Gco5s"
					})), r.a.createElement(H.i, {
						className: fe.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: H.c.S
					}, Ee._("Submit", null, {
						hk: "ZLsi7"
					})))))
				})),
				_e = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				ge = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				ve = n.n(ge),
				Pe = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				xe = n("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = n("./src/reddit/hooks/usePageLayer.ts"),
				ye = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				ke = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				Ce = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Ne = n.n(Se);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ie({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(o.d)(),
					i = Object(g.a)(),
					a = Object(Oe.a)(),
					c = Object(o.e)(t => Object(Ce.U)(t, {
						subredditId: e
					})),
					d = Object(o.e)(t => Object(ke.g)(t, {
						subredditId: e
					})),
					u = Object(o.e)(t => Object(ke.a)(t, {
						subredditId: e
					})),
					b = Object(m.w)(a),
					f = Object(m.G)(a),
					E = Object(m.K)(a);
				if (Object(s.useEffect)(() => {
						d || n(Object(p.g)(c.name))
					}, [n, d, c.name]), (null == u ? void 0 : u.tournamentId) !== t) return null;
				const {
					name: h,
					totalParticipantsCount: v
				} = u;
				return r.a.createElement(xe.a, {
					className: Ne.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						i(Object(_.j)({
							pageType: b ? "post_detail" : E ? "community" : f ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, r.a.createElement(Pe.a, {
					className: Ne.a.facepile,
					subredditId: e
				}), r.a.createElement("div", {
					className: Ne.a.info
				}, r.a.createElement("div", {
					className: Ne.a.tournamentName
				}, h), r.a.createElement("div", {
					className: Ne.a.totalPlayers
				}, v > 0 ? je._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [je._param("totalPlayers", Object(l.b)(v)), je._plural(v)], {
					hk: "3eDpRH"
				}) : je._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), r.a.createElement(ye.a, {
					className: Ne.a.chevron
				}))
			}
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ae = Object(i.c)({
				isAutoVoteEnabled: h.e,
				isEditing: x.K,
				isVoteAnimationEnabled: h.d,
				prediction: P.g,
				pollId: P.a,
				post: O.F,
				subredditOrProfile: O.R,
				userCoins: y.d,
				userIsLoggedIn: y.K,
				userId: y.pb
			}), Me = {
				onPredictionResolve: p.j,
				onPredictionVote: p.k,
				showToast: E.f,
				upvoteToggled: f.bb
			}, Be = Object(m.t)({
				isCommentsPage: m.w,
				isPredictionsPage: m.L
			}), Fe = ({
				className: e,
				isAutoVoteEnabled: t,
				isCommentsPage: n,
				isEditing: o,
				isPredictionsPage: i,
				isVoteAnimationEnabled: a,
				onPredictionResolve: m,
				onPredictionVote: p,
				post: f,
				prediction: E,
				pollId: h,
				subredditOrProfile: P,
				showToast: x,
				upvoteToggled: O,
				userCoins: y,
				userId: C,
				userIsLoggedIn: S
			}) => {
				var N;
				const [I, w] = Object(s.useState)(!1), [A, M] = Object(s.useState)(null), [T, U] = Object(s.useState)(null), [G, V] = Object(s.useState)(!1), [W, H] = Object(s.useState)(!1), Y = Object(g.a)(), K = Object(s.useCallback)(() => {
					V(!1)
				}, []), Z = Object(s.useCallback)(() => {
					M(null), U(null)
				}, []);
				if (!h || !E || !P) return r.a.createElement(j, null);
				const {
					creatorId: q,
					endsAt: z,
					options: X,
					resolvedOptionId: J,
					totalStakeAmount: Q,
					totalVoters: $,
					tournamentId: te,
					userSelection: ne,
					userWonAmount: se
				} = E, re = q === C, oe = z < Date.now(), ae = !c()(te), ce = oe && re && !J, de = X.find(({
					id: e
				}) => e === A), le = n ? Object(d.a)(e, ve.a.container, ve.a.forCommentsPage, {
					[ve.a.isEditing]: o
				}) : Object(d.a)(e, ve.a.container);
				return r.a.createElement("div", {
					className: le,
					onClick: e => {
						E && e.stopPropagation()
					}
				}, n ? oe ? J ? r.a.createElement(ie, {
					didParticipate: !!ne,
					isTokens: ae,
					isWinner: J === ne,
					predictedAmount: ne && (null === (N = X.find(({
						id: e
					}) => e === ne)) || void 0 === N ? void 0 : N.userStakeAmount) || 0,
					wonAmount: se
				}) : ce ? r.a.createElement(D, null) : r.a.createElement(B, {
					didParticipate: !!ne
				}) : r.a.createElement(F.a, {
					isTokens: ae,
					storageKey: k.a.feature
				}) : null, r.a.createElement("div", {
					className: ve.a.poll
				}, X.map(e => r.a.createElement(_e.a, {
					endsAt: z,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: G && ne === e.id,
					onAnimationEnd: K
				}, r.a.createElement(R.a, {
					disabled: G,
					isEnded: oe,
					isSelected: A === e.id,
					needsResolution: ce,
					option: e,
					onClick: () => (e => {
						(ce || !oe && !ne) && (ce ? U(e.id) : M(e.id))
					})(e),
					resolvedOptionId: J,
					tournamentId: te,
					userSelection: ne,
					userIsLoggedOut: !S,
					votePercentage: (ne || oe || W) && e.voteCount ? Math.floor(e.voteCount / $ * 100) : null,
					isShowingHint: W
				}))), r.a.createElement(ee, {
					disabled: G || W || !!ne,
					isEnded: oe,
					userSelection: ne,
					isShowingHint: W,
					tournamentId: te,
					onReveal: () => H(!0)
				}), r.a.createElement("div", {
					className: ve.a.predictionsCount
				}, ae && $ > 0 && we._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [we._param("total voters", Object(l.b)($)), we._plural($)], {
					hk: "2u2Nv8"
				}), r.a.createElement(me, {
					isCoins: !ae,
					endsAt: z,
					resolvedOptionId: J,
					totalStakeAmount: Q
				}))), !!de && r.a.createElement(L.b, {
					className: ve.a.modal,
					isCreatingVote: I,
					onOverlayClick: Z,
					onCancel: Z,
					onPredict: async ({
						coinPackage: e,
						chipPackage: n
					}) => {
						if (e && e.coins > y) return Object(b.promptUserToBuyMoreCoins)(), void Y(_.a);
						const s = n ? n.id : e.id,
							r = n ? n.amount : e.coins;
						if (oe) return x({
							duration: 5e3,
							kind: v.b.Error,
							text: we._("Error: Failed to make prediction. This prediction has already ended", null, {
								hk: "22UWEr"
							})
						}), void M(null);
						if (!h || !A) throw new Error("Invalid arguments, optionId and pollId must be strings");
						w(!0), Y(te ? Object(_.n)({
							pollId: h,
							selectedNumberTokens: r
						}) : Object(_.m)({
							pollId: h,
							selectedNumberCoins: r,
							totalStakeAmount: Q
						}));
						try {
							await p({
								coinPackageId: s,
								optionId: A,
								postId: h,
								price: r
							}), t && O(h), w(!1), M(null), a ? V(!0) : x({
								duration: 5e3,
								kind: v.b.SuccessCommunity,
								text: we._("Thanks! See if you're right in {timeToResult}", [we._param("timeToResult", Object(u.a)(new Date(z), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (o) {
							w(!1), M(null), x({
								duration: 5e3,
								kind: v.b.Error,
								text: we._("Error: Failed to make prediction, please try again later", null, {
									hk: "1tECsx"
								})
							})
						}
					},
					option: de,
					pollId: h,
					subredditId: f.belongsTo.id,
					tournamentId: te,
					withOverlay: !0
				}), ce && T && r.a.createElement(he, {
					isResolving: I,
					isTokens: ae,
					onOverlayClick: Z,
					onCancel: Z,
					onResolve: async () => {
						if (w(!0), !T) throw new Error("Failed to create prediction, missing selected option");
						try {
							await m({
								optionId: T,
								postId: h
							})
						} catch (e) {
							x({
								duration: 5e3,
								kind: v.b.Error,
								text: we._("Error: Failed to resolve prediction, please try again later", null, {
									hk: "3Ve2Mb"
								})
							})
						}
						U(null), w(!1)
					},
					withOverlay: !0
				}), !i && te && r.a.createElement(Ie, {
					subredditId: f.belongsTo.id,
					tournamentId: te
				}))
			};
			t.default = Be(Object(o.b)(Ae, Me)(Fe))
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
				const b = Object(o.e)(m.W),
					f = Object(o.e)(m.j),
					E = Object(o.e)(m.C),
					h = Object(o.e)(e => Object(u.a)(e, {
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
					return Object(d.a)(u) ? r.a.createElement(a.a, {
						key: h,
						backgroundClassName: p.a.snoovatarBackground,
						className: Object(i.a)(p.a.snoovatar, t),
						headshot: u
					}) : r.a.createElement(c.b, {
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
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => r.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
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

			function r(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/helpers/localStorage/index.ts");
			const o = {},
				i = (e, t, n) => (o[e] || (o[e] = {
					callbacks: [],
					value: n
				}), o[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: n
						} = o[e], s = n.indexOf(t);
						s > -1 && n.splice(s, 1)
					},
					emit: n => {
						o[e].value !== n && (o[e].value = n, o[e].callbacks.forEach(e => {
							e !== t && e(n)
						}))
					}
				});

			function a(e, t) {
				const n = Object(s.useRef)(null);
				let o;
				o = Object(r.y)(e);
				const [a, c] = Object(s.useState)(null != o ? o : t);
				return Object(s.useEffect)(() => (n.current = i(e, c, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(s.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(a)
				}, [a]), [a, function(t) {
					Object(r.yb)(e, t), c(t)
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
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
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
		"./src/reddit/icons/svgs/EyeDouble/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 16",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10.5 3.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zm0 8A3.38 3.38 0 1113.88 8a3.39 3.39 0 01-3.38 3.38z"
			}), r.a.createElement("path", {
				d: "M20.36 7.57a10.61 10.61 0 00-19.72 0 1.16 1.16 0 000 .86 10.73 10.73 0 002.42 3.65 10.62 10.62 0 0014.44.39 10.72 10.72 0 002.84-4 1.16 1.16 0 00.02-.9zm-3.67 4a9.34 9.34 0 01-12.75-.34A9.79 9.79 0 011.8 8a9.37 9.37 0 0117.4 0 9.4 9.4 0 01-2.51 3.53v.04z"
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
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
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
				a = e => e === o.a.First ? s.Loyalty : e === o.a.Second ? s.Achievement : s.Cosmetic
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
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][r] : s[c.a.Achievement][r] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][r] : s[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
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
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
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
					t[c.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
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
				return y
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "t", (function() {
				return T
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
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
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
				return (null == e ? void 0 : e.length) ? Object(r.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const x = (e, t, n) => {
					var r;
					if (!s.d.spBadges(e)) return f;
					return P(null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t], e.badges.models)
				},
				O = (e, t) => {
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

			function k(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === r) return n;
				const o = e.badges.models,
					a = e.user.ownedBadges[s] || {},
					c = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(a).map(e => o[e]).find(e => e && e.type === c)
			}

			function C(e, t, n, s) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return r.data.collections[n];
					if (n === a.a.Cosmetic && s) return r.data.collections[n][s]
				}
				return f
			}

			function S(e, t) {
				const n = C(e, t, a.a.Loyalty).find(e => "membership" === e.id);
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

			function j(e, t) {
				return C(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const I = e => {
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
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				T = (e, t) => {
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
					const r = "replyToPost" !== n && Object(b.a)(e, {
						commentId: n
					});
					if (!!r && Object(o.a)(r)) return !0;
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
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/econ/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
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
				return b
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(r.a)(s.Cb),
				i = Object(r.a)(s.Fb),
				a = Object(r.a)(s.Ab),
				c = Object(r.a)(s.Db),
				d = Object(r.a)(s.Bb),
				l = Object(r.a)(s.Eb),
				u = Object(r.a)(s.Gb),
				m = Object(r.a)(s.ub),
				b = Object(r.a)(s.tb);
			Object(r.a)(s.vb)
		},
		"./src/reddit/selectors/experiments/econ/simpleExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => t => {
				const n = Object(r.c)(t, {
					experimentEligibilitySelector: r.a,
					experimentName: e
				});
				return !(!n || Object(s.Id)(n))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.d4270293137c7463eba9.js.map