// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.2eb48c2aff8a720a7aba.js
// Retrieved at 12/16/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
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
			const o = [r.oc, r.pb, r.B, r.Q, r.kb, r.Rb],
				i = {
					[r.Rb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.kb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.Q]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.B]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.pb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.oc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Rb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.kb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.Q]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.B]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.oc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.oc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.oc]: "",
						[r.pb]: "",
						[r.B]: "",
						[r.Q]: "",
						[r.kb]: "",
						[r.Rb]: ""
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
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return _
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
				p = Object(s.a)(i.g),
				b = Object(s.a)(i.h),
				f = Object(s.a)(i.i),
				_ = e => Object(r.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
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
		"./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UNYrzKG9vrW6s4_OVCGNt"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1emfQRdFOsxY7Pi5Cn4JD1",
				prediction: "_1e08NSBa-ExjEnRYLJAvTs"
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
				isShortWidth: "_28YkWXOPICkzcS5IobwdZx",
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
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useLocalStorage.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				message: e,
				newBadge: t,
				onClose: n,
				onView: l,
				storageKey: p = d.a.nonDismissable,
				title: b,
				isFullWidth: f
			}) {
				const _ = p !== d.a.nonDismissable,
					[h, E] = Object(i.a)(p, !_ || !1),
					[g, v] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					h || g || !l || (l(), v(!0))
				}, [h, g, l]), _ && h ? null : r.a.createElement("div", {
					className: Object(o.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !f
					})
				}, r.a.createElement("div", {
					className: u.a.titleRow
				}, r.a.createElement("div", {
					className: u.a.header
				}, r.a.createElement("h3", {
					className: u.a.title
				}, b), t && r.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), _ && r.a.createElement(a.t, {
					"aria-label": m._("Close", null, {
						hk: "2UjnU"
					}),
					className: u.a.closeButton,
					Icon: Object(c.b)("close"),
					onClick: () => {
						E(!0), n && n()
					},
					priority: a.c.Plain
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
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

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
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				coinIcon: "zSh1egnQOovr8gIxiO-BE",
				wonOrLostAmountRow: "_3f80EjeUjSRy5-WqzqE7VJ",
				wonOrLostAmount: "_2nXf3pIf7lmCE6_ZAQXdt5"
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2N8sOpL8HjMfaKS_SGauz6",
				coins: "CvW1XMcWem6aeEGMT6-XB",
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
		"./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(o.d)(),
					n = Object(o.e)(t => Object(c.R)(t, {
						subredditId: e
					})),
					s = Object(o.e)(t => Object(a.i)(t, {
						subredditId: e
					})),
					d = Object(o.e)(t => Object(a.k)(t, {
						subredditId: e
					})),
					l = r.a.useCallback(() => {
						n.name && t(Object(i.l)(n.name))
					}, [n.name, t]);
				return r.a.useEffect(() => {
					d || s || l()
				}, [d, s, l]), {
					isFetching: d,
					isFetched: s,
					fetch: l
				}
			}
		},
		"./src/reddit/components/Econ/Prediction/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_12AfXWHuSC5UHX0_ne19LR",
				forCommentsPage: "_3db-wOkv0X5qH0E-5QuyBW",
				isEditing: "_1sQkurV7y_5Plq7_lWzN9h"
			}
		},
		"./src/reddit/components/Econ/Prediction/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "Prediction", (function() {
				return Te
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/poll/index.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/Prediction/helpers.ts"),
				b = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				f = n.n(b);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var h = ({
					className: e
				}) => r.a.createElement("div", {
					className: Object(a.a)(f.a.container, e)
				}, _._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				E = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				v = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts");
			var y = n("./node_modules/fbt/lib/FbtPublic.js"),
				P = n("./src/reddit/actions/economics/predictions/index.ts"),
				O = n("./src/reddit/hooks/useToast.tsx");
			var C = n("./src/reddit/actions/economics/helpers/index.ts"),
				S = n("./src/reddit/helpers/trackers/predictions.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/models/Prediction/index.ts");
			var k = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				M = n("./src/higherOrderComponents/asModal/index.tsx"),
				w = n("./src/reddit/controls/Button/index.tsx"),
				N = n("./src/reddit/icons/fonts/index.tsx"),
				A = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				B = n.n(A);
			var T = Object(M.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: B.a.header
					}, r.a.createElement(w.t, {
						className: B.a.closeButton,
						Icon: Object(N.b)("close"),
						priority: w.c.Plain,
						onClick: n
					}), r.a.createElement("h1", null, y.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), r.a.createElement("div", {
						className: B.a.content
					}, r.a.createElement("p", {
						className: B.a.message
					}, t ? y.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : y.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})), r.a.createElement("div", {
						className: B.a.actions
					}, r.a.createElement(w.o, {
						disabled: e,
						onClick: n,
						priority: w.c.Secondary,
						redditStyle: !0,
						size: w.d.S
					}, y.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(w.l, {
						className: B.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: w.d.S
					}, y.fbt._("Submit", null, {
						hk: "4aU3dh"
					})))))
				})),
				F = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				D = n.n(L);
			const R = ({
				post: e,
				prediction: t
			}) => {
				const n = Object(o.e)(m.pb),
					{
						isLoading: i,
						selectedVoteOption: a,
						setVoteOptionId: c,
						predict: d
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [r, i] = Object(s.useState)(null), a = Object(I.a)(), c = Object(o.e)(m.e), d = Object(O.a)(), l = Object(o.d)(), u = e.options.find(({
							id: e
						}) => e === r);
						return {
							isLoading: t,
							selectedVoteOption: u,
							setVoteOptionId: i,
							predict: async t => {
								const s = e.id;
								if (!u) return;
								if (t.currency === j.a.Coins && t.amount > c) return Object(C.promptUserToBuyMoreCoins)(), void a(S.b);
								const r = t.amount;
								if (e.endsAt < Date.now()) d(y.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								}));
								else {
									e.tournamentId ? a(Object(S.o)({
										pollId: s,
										selectedNumberTokens: r
									})) : a(Object(S.n)({
										pollId: s,
										selectedNumberCoins: r,
										totalStakeAmount: e.totalStakeAmount
									})), n(!0);
									try {
										await l(Object(P.q)({
											coinPackageId: t.id,
											optionId: u.id,
											postId: s,
											price: r
										}))
									} catch (o) {
										d(y.fbt._("Error: Failed to make prediction, please try again later", null, {
											hk: "1tECsx"
										}))
									}
									n(!1), i(null)
								}
							}
						}
					}(t),
					{
						isLoading: l,
						resolveOptionId: u,
						setResolveOptionId: p,
						resolve: b
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [r, i] = Object(s.useState)(null), a = Object(O.a)(), c = Object(o.d)();
						return {
							isLoading: t,
							resolveOptionId: r,
							setResolveOptionId: i,
							resolve: async () => {
								if (n(!0), !r) throw new Error("Failed to create prediction, missing selected option");
								try {
									await c(Object(P.p)({
										optionId: r,
										postId: e
									}))
								} catch (t) {
									a(y.fbt._("Error: Failed to resolve prediction, please try again later", null, {
										hk: "3Ve2Mb"
									}))
								}
								i(null), n(!1)
							}
						}
					}(t.id),
					{
						upvote: f
					} = function(e) {
						const t = Object(o.d)(),
							n = Object(o.e)(x.n),
							{
								startDelayedUpvoteAnimation: s
							} = Object(g.a)(e.id);
						return {
							upvote: function() {
								n && e.voteState < v.a.upvoted && (t(Object(E.jb)(e.id)), s())
							}
						}
					}(e),
					_ = Object(s.useCallback)(() => {
						c(null), p(null)
					}, []);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(F.a, {
					className: D.a.prediction,
					prediction: t,
					selectedOptionId: (null == a ? void 0 : a.id) || null,
					onSelectOption: e => {
						const {
							creatorId: s,
							endsAt: r,
							resolvedOptionId: o,
							userSelection: i
						} = t, a = r < Date.now();
						a && s === n && !o && p(e.id), a || i || c(e.id)
					}
				}), a && r.a.createElement(k.a, {
					className: D.a.modal,
					isCreatingVote: i,
					onOverlayClick: _,
					onCancel: _,
					onPredict: async e => {
						a && (await d(e), f())
					},
					option: a,
					pollId: t.id,
					tournamentId: t.tournamentId,
					withOverlay: !0
				}), u && r.a.createElement(T, {
					isResolving: l,
					isTokens: null !== t.tournamentId,
					onOverlayClick: _,
					onCancel: _,
					onResolve: b,
					withOverlay: !0
				}))
			};
			var U = n("./node_modules/lodash/isNil.js"),
				W = n.n(U),
				G = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				Y = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				V = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				H = n.n(V);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z({
				didParticipate: e
			}) {
				const t = K._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = r.a.createElement(r.a.Fragment, null, K._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && r.a.createElement("div", {
						className: H.a.notificationBlurb
					}, K._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return r.a.createElement("div", null, r.a.createElement(Y.a, {
					title: t,
					message: n
				}))
			}
			var X = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx");

			function q() {
				const e = y.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = y.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return r.a.createElement("div", null, r.a.createElement(Y.a, {
					title: e,
					message: t
				}))
			}
			var Q = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				Z = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				J = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				$ = n.n(J);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js"), te = ({
				prediction: e
			}) => {
				var t;
				const {
					tournamentId: n,
					resolvedOptionId: s,
					userSelection: o,
					userWonAmount: i,
					options: a
				} = e, c = Boolean(o), d = s === o, l = o && (null === (t = a.find(({
					id: e
				}) => e === o)) || void 0 === t ? void 0 : t.userStakeAmount) || 0, u = n ? r.a.createElement(Q.a, {
					className: $.a.coinIcon,
					tournamentId: n
				}) : r.a.createElement(Z.a, {
					className: $.a.coinIcon
				});
				return c && !d ? r.a.createElement("div", null, r.a.createElement(Y.a, {
					title: ee._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: r.a.createElement(r.a.Fragment, null, ee._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!l && r.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You lost {lostAmount}", [ee._param("lostAmount", r.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, u, l))], {
						hk: "6091x"
					})))
				})) : c && d && l && !i ? r.a.createElement("div", null, r.a.createElement(Y.a, {
					title: ee._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: r.a.createElement(r.a.Fragment, null, ee._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), r.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You've been refunded {refundedAmount}", [ee._param("refundedAmount", r.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, u, l))], {
						hk: "49bOe9"
					})))
				})) : c && d ? r.a.createElement("div", null, r.a.createElement(Y.a, {
					title: ee._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: r.a.createElement(r.a.Fragment, null, ee._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!i && r.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You won {wonAmount}", [ee._param("wonAmount", r.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, u, l + i))], {
						hk: "1zg0cH"
					})))
				})) : r.a.createElement("div", null, r.a.createElement(Y.a, {
					title: ee._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: ee._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}, ne = ({
				prediction: e,
				isCreator: t
			}) => {
				const {
					endsAt: n,
					resolvedOptionId: s,
					tournamentId: o,
					userSelection: i
				} = e, a = n < Date.now(), c = !W()(o), d = a && t && !s;
				return a ? s ? r.a.createElement(te, {
					prediction: e
				}) : d ? r.a.createElement(q, null) : r.a.createElement(z, {
					didParticipate: !!i
				}) : r.a.createElement(X.a, {
					isTokens: c,
					storageKey: G.a.feature
				})
			};
			var se = n("./src/lib/timeUntil/index.ts"),
				re = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				oe = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ie = n.n(oe);
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? r.a.createElement("div", {
				className: ie.a.statusBar
			}, n && r.a.createElement(re.a, {
				className: ie.a.clockIcon
			}), t ? ae._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : ae._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : r.a.createElement("div", {
				className: ie.a.statusBar
			}, n && r.a.createElement(re.a, {
				className: ie.a.clockIcon
			}), ae._("Prediction ends in {expirationDuration}", [ae._param("expirationDuration", Object(se.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var de = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ue = ({
				totalVoters: e
			}) => le._({
				"*": "{total voters} predictions made",
				_1: "{total voters} prediction made"
			}, [le._param("total voters", Object(de.b)(e)), le._plural(e)], {
				hk: "2u2Nv8"
			}), {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pe = ({
				prediction: e
			}) => {
				const {
					endsAt: t,
					predictionStatus: n,
					resolvedOptionId: s,
					totalStakeAmount: o,
					tournamentId: i,
					totalVoters: c
				} = e, d = Boolean(i), l = !d;
				return Object(p.a)(n) ? r.a.createElement("div", {
					className: ie.a.container
				}, me._("Canceled", null, {
					hk: "1SL2bC"
				})) : r.a.createElement("div", {
					className: Object(a.a)(ie.a.container, {
						[ie.a.coins]: l
					})
				}, d && c > 0 && r.a.createElement(r.a.Fragment, null, r.a.createElement(ue, {
					totalVoters: c
				}), r.a.createElement("span", null, "·")), l && o > 0 && r.a.createElement("div", {
					className: ie.a.statusBar
				}, r.a.createElement(Z.a, {
					className: ie.a.coinIcon
				}), o, " ", me._("added by participants", null, {
					hk: "PSq3T"
				})), r.a.createElement(ce, {
					endsAt: t,
					resolvedOptionId: s,
					isCoins: l
				}))
			};
			var be = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				fe = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				_e = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				he = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				Ee = n("./src/reddit/models/User/index.ts"),
				ge = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				ve = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				xe = n.n(ve);

			function ye({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var s;
				const i = Object(o.e)(m.X),
					c = Object(o.e)(m.k),
					d = Object(o.e)(m.C),
					l = Object(o.e)(e => Object(ge.f)(e, {
						subredditId: n
					}));
				return (null === (s = null == l ? void 0 : l.latestParticipants) || void 0 === s ? void 0 : s.length) ? r.a.createElement("div", {
					className: Object(a.a)(xe.a.tournamentFacepile, e)
				}, l.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: s
				}) => {
					const o = !!c && Object(Ee.e)(c) === n,
						{
							url: l
						} = e,
						{
							isNsfw: u
						} = s,
						m = `tournament-facepile-face-${n}`;
					return Object(he.a)(l) ? r.a.createElement(fe.a, {
						key: m,
						backgroundClassName: xe.a.snoovatarBackground,
						className: Object(a.a)(xe.a.snoovatar, t),
						headshot: l
					}) : r.a.createElement(_e.b, {
						key: m,
						className: Object(a.a)(xe.a.userIcon, t),
						iconUrl: l,
						isCurrentUser: o,
						isNSFW: u,
						isNightMode: i,
						shouldHideNSFW: d
					})
				})) : null
			}
			var Pe = n("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = n("./src/reddit/hooks/usePageLayer.ts"),
				Ce = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Ie = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				je = n.n(Ie);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Me({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(I.a)(),
					s = Object(Oe.a)(),
					i = Object(o.e)(t => Object(Se.R)(t, {
						subredditId: e
					})),
					a = Object(o.e)(t => Object(ge.b)(t, {
						subredditId: e
					})),
					d = Object(c.x)(s),
					l = Object(c.I)(s),
					u = Object(c.M)(s);
				if (Object(be.a)(i.name), (null == a ? void 0 : a.tournamentId) !== t) return null;
				const {
					name: m,
					totalParticipantsCount: p
				} = a;
				return r.a.createElement(Pe.a, {
					className: je.a.tournamentLink,
					to: `${i.url}predictions/`,
					onClick: () => {
						n(Object(S.l)({
							pageType: d ? "post_detail" : u ? "community" : l ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, r.a.createElement(ye, {
					className: je.a.facepile,
					subredditId: e
				}), r.a.createElement("div", {
					className: je.a.info
				}, r.a.createElement("div", {
					className: je.a.tournamentName
				}, m), r.a.createElement("div", {
					className: je.a.totalPlayers
				}, p && p > 0 ? ke._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [ke._param("totalPlayers", Object(de.b)(p)), ke._plural(p)], {
					hk: "3eDpRH"
				}) : ke._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), r.a.createElement(Ce.a, {
					className: je.a.chevron
				}))
			}
			var we = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Ne = n.n(we);
			const Ae = Object(i.c)({
					isEditing: l.M,
					prediction: d.g,
					post: u.H,
					subredditOrProfile: u.V,
					userId: m.pb
				}),
				Be = Object(c.u)({
					isCommentsPage: c.x,
					isPredictionsPage: c.N
				}),
				Te = ({
					className: e,
					isCommentsPage: t,
					isEditing: n,
					isPredictionsPage: s,
					post: o,
					prediction: i,
					subredditOrProfile: c,
					userId: d
				}) => {
					if (!i || !c) return r.a.createElement(h, null);
					const {
						creatorId: l,
						tournamentId: u,
						predictionStatus: m
					} = i, b = l === d, f = t && !Object(p.a)(m);
					return r.a.createElement("div", {
						className: Object(a.a)(e, Ne.a.container, {
							[Ne.a.forCommentsPage]: t,
							[Ne.a.isEditing]: t && n
						}),
						onClick: e => {
							i && e.stopPropagation()
						}
					}, f && r.a.createElement(ne, {
						prediction: i,
						isCreator: b
					}), r.a.createElement(R, {
						post: o,
						prediction: i
					}), r.a.createElement(pe, {
						prediction: i
					}), !s && u && r.a.createElement(Me, {
						subredditId: o.belongsTo.id,
						tournamentId: u
					}))
				};
			t.default = Be(Object(o.b)(Ae)(Te))
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			}));
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = r.a.wrapped(d.a, "CloseIcon", u.a),
				b = r.a.section("ModalBody", u.a),
				f = r.a.section("ModalPostPreview", u.a),
				_ = r.a.p("ModalText", u.a),
				h = r.a.div("ModalSmallText", u.a),
				E = r.a.div("ModalDescriptionText", u.a),
				g = r.a.div("ModalMetaText", u.a),
				v = r.a.label("ModalFormItem", u.a),
				x = r.a.wrapped(c.a, "ModalInput", u.a),
				y = r.a.label("ModalInputLabel", u.a),
				P = r.a.footer("ModalFooter", u.a),
				O = r.a.header("ModalHeader", u.a),
				C = r.a.div("ModalTitle", u.a),
				S = r.a.div("ModalAnnotation", u.a),
				I = r.a.div("ModalMain", u.a),
				j = r.a.textarea("TextArea", u.a),
				k = r.a.wrapped(a.l, "WarningButton", u.a),
				M = r.a.wrapped(a.l, "PrimaryButton", u.a),
				w = r.a.wrapped(a.o, "CancelButton", u.a),
				N = r.a.wrapped(a.r, "RemoveButton", u.a),
				A = ({
					className: e,
					...t
				}) => i.a.createElement(a.t, m({
					kind: a.b.Button,
					priority: a.c.Primary,
					className: Object(s.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return r.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: a.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				o = "emote|",
				i = "|downsized";

			function a(e, t) {
				return r + e + (t ? i : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(r))
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function m(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, s.F).map(e => e.id)
			}

			function f(e, t = !1) {
				return p(e, e => e.e === s.o || t && e.e === s.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.eb
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
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(a);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.exapndLeftContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
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

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, n) => {
					const s = t[e.id],
						r = t[n.id];
					return Object(i.b)(s, r)
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
								data: b(n),
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
				return _
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "x", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "z", (function() {
				return O
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "p", (function() {
				return M
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "s", (function() {
				return W
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "g", (function() {
				return Y
			})), n.d(t, "m", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/gold/powerups/index.ts"),
				b = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				_ = (e, t) => {
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
					const n = _(e, t);
					return n && n.endsAt || null
				};
			var E;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(E || (E = {}));
			const g = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = h(e, t),
							s = Date.now();
						return n && s < n ? E.Subscribed : E.NotSubscribed
					}
					return E.DontKnow
				},
				v = (e, t) => {
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

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(r.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const y = (e, t, n) => {
					var r;
					if (!s.d.spBadges(e)) return f;
					return x(null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t], e.badges.models)
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

			function O(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function C(e, t) {
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

			function S(e, t, n, s) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					if (n === a.a.Loyalty || n === a.a.Achievement) return r.data.collections[n];
					if (n === a.a.Cosmetic && s) return r.data.collections[n][s]
				}
				return f
			}

			function I(e, t) {
				const n = S(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function j(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return f
			}

			function k(e, t) {
				return S(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const M = e => {
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
			const N = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				A = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const n = N.prices;
					A(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = _(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				T = (e, t) => {
					var n, s, r, o;
					const i = (null === (o = null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === r ? void 0 : r[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || N;
					return {
						prices: B(e, t),
						member: i.member || N.member,
						memberPlural: i.memberPlural || N.memberPlural,
						memberAlt: i.memberAlt || N.memberAlt,
						memberAltPlural: i.memberAltPlural || N.memberAltPlural,
						membership: i.membership || N.membership,
						membershipAlt: i.membershipAlt || N.membershipAlt
					}
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
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
				W = (e, t, n) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					return !(!s || !Object(o.a)(s))
				},
				G = (e, t, n) => {
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(m.b)(e, {
						commentId: n
					});
					if (r && Object(o.b)(r)) return !0;
					const i = s.d.spGiphy(e),
						a = U(e, t);
					return !(!i || !a) || i && a
				},
				Y = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				V = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.2eb48c2aff8a720a7aba.js.map