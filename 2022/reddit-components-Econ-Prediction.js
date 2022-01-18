// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.d88c47e8b8df759e8a14.js
// Retrieved at 1/18/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const i = [o.pc, o.pb, o.B, o.Q, o.kb, o.Rb],
				a = {
					[o.Rb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.kb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.Q]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.B]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.pb]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.pc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				r = {
					[o.Rb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.kb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.Q]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.B]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.pc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.pc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.pc]: "",
						[o.pb]: "",
						[o.B]: "",
						[o.Q]: "",
						[o.kb]: "",
						[o.Rb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of i) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? r : a)[s](e).toString()), u -= e * s
				}
				const m = i.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
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
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/hooks/useLocalStorage.ts"),
				r = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function b({
				message: e,
				newBadge: t,
				onClose: n,
				onView: l,
				storageKey: b = d.a.nonDismissable,
				title: p,
				isFullWidth: E
			}) {
				const f = b !== d.a.nonDismissable,
					[_, h] = Object(a.a)(b, !f || !1),
					[g, v] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					_ || g || !l || (l(), v(!0))
				}, [_, g, l]), f && _ ? null : o.a.createElement("div", {
					className: Object(i.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !E
					})
				}, o.a.createElement("div", {
					className: u.a.titleRow
				}, o.a.createElement("div", {
					className: u.a.header
				}, o.a.createElement("h3", {
					className: u.a.title
				}, p), t && o.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), f && o.a.createElement(r.t, {
					"aria-label": m._("Close", null, {
						hk: "2UjnU"
					}),
					className: u.a.closeButton,
					Icon: Object(c.b)("close"),
					onClick: () => {
						h(!0), n && n()
					},
					priority: r.c.Plain
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
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function r({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: o
			}) {
				const r = s.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? s.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : s.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return i.a.createElement("div", null, i.a.createElement(a.a, {
					onClose: t,
					onView: n,
					title: r,
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
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				r = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(i.d)(),
					n = Object(i.e)(t => Object(c.R)(t, {
						subredditId: e
					})),
					s = Object(i.e)(t => Object(r.i)(t, {
						subredditId: e
					})),
					d = Object(i.e)(t => Object(r.k)(t, {
						subredditId: e
					})),
					l = o.a.useCallback(() => {
						n.name && t(Object(a.l)(n.name))
					}, [n.name, t]);
				return o.a.useEffect(() => {
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
				return Ae
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/poll/index.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Prediction/helpers.ts"),
				p = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				E = n.n(p);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var _ = ({
					className: e
				}) => o.a.createElement("div", {
					className: Object(r.a)(E.a.container, e)
				}, f._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				h = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				v = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts");
			var P = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/reddit/actions/economics/predictions/index.ts"),
				k = n("./src/reddit/hooks/useToast.tsx");
			var j = n("./src/reddit/actions/economics/helpers/index.ts"),
				C = n("./src/reddit/helpers/trackers/predictions.ts"),
				N = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/models/Prediction/index.ts");
			var w = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				y = n("./src/higherOrderComponents/asModal/index.tsx"),
				S = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/icons/fonts/index.tsx"),
				M = n("./src/reddit/components/Econ/Prediction/ResolutionModal/index.m.less"),
				B = n.n(M);
			var A = Object(y.a)((function({
					isResolving: e,
					isTokens: t,
					onCancel: n,
					onResolve: s
				}) {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: B.a.header
					}, o.a.createElement(S.t, {
						className: B.a.closeButton,
						Icon: Object(L.b)("close"),
						priority: S.c.Plain,
						onClick: n
					}), o.a.createElement("h1", null, P.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}))), o.a.createElement("div", {
						className: B.a.content
					}, o.a.createElement("p", {
						className: B.a.message
					}, t ? P.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : P.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})), o.a.createElement("div", {
						className: B.a.actions
					}, o.a.createElement(S.o, {
						disabled: e,
						onClick: n,
						priority: S.c.Secondary,
						redditStyle: !0,
						size: S.d.S
					}, P.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(S.l, {
						className: B.a.submitButton,
						disabled: e,
						onClick: () => {
							s()
						},
						redditStyle: !0,
						size: S.d.S
					}, P.fbt._("Submit", null, {
						hk: "4aU3dh"
					})))))
				})),
				R = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				F = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				D = n.n(F);
			const T = ({
				post: e,
				prediction: t
			}) => {
				const n = Object(i.e)(m.ob),
					{
						isLoading: a,
						selectedVoteOption: r,
						setVoteOptionId: c,
						predict: d
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [o, a] = Object(s.useState)(null), r = Object(N.a)(), c = Object(i.e)(m.e), d = Object(k.a)(), l = Object(i.d)(), u = e.options.find(({
							id: e
						}) => e === o);
						return {
							isLoading: t,
							selectedVoteOption: u,
							setVoteOptionId: a,
							predict: async t => {
								const s = e.id;
								if (!u) return;
								if (t.currency === I.a.Coins && t.amount > c) return Object(j.promptUserToBuyMoreCoins)(), void r(C.b);
								const o = t.amount;
								if (e.endsAt < Date.now()) d(P.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								}));
								else {
									e.tournamentId ? r(Object(C.o)({
										pollId: s,
										selectedNumberTokens: o
									})) : r(Object(C.n)({
										pollId: s,
										selectedNumberCoins: o,
										totalStakeAmount: e.totalStakeAmount
									})), n(!0);
									try {
										await l(Object(O.q)({
											coinPackageId: t.id,
											optionId: u.id,
											postId: s,
											price: o
										}))
									} catch (i) {
										d(P.fbt._("Error: Failed to make prediction, please try again later", null, {
											hk: "1tECsx"
										}))
									}
									n(!1), a(null)
								}
							}
						}
					}(t),
					{
						isLoading: l,
						resolveOptionId: u,
						setResolveOptionId: b,
						resolve: p
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [o, a] = Object(s.useState)(null), r = Object(k.a)(), c = Object(i.d)();
						return {
							isLoading: t,
							resolveOptionId: o,
							setResolveOptionId: a,
							resolve: async () => {
								if (n(!0), !o) throw new Error("Failed to create prediction, missing selected option");
								try {
									await c(Object(O.p)({
										optionId: o,
										postId: e
									}))
								} catch (t) {
									r(P.fbt._("Error: Failed to resolve prediction, please try again later", null, {
										hk: "3Ve2Mb"
									}))
								}
								a(null), n(!1)
							}
						}
					}(t.id),
					{
						upvote: E
					} = function(e) {
						const t = Object(i.d)(),
							n = Object(i.e)(x.m),
							{
								startDelayedUpvoteAnimation: s
							} = Object(g.a)(e.id);
						return {
							upvote: function() {
								n && e.voteState < v.a.upvoted && (t(Object(h.jb)(e.id)), s())
							}
						}
					}(e),
					f = Object(s.useCallback)(() => {
						c(null), b(null)
					}, []);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(R.a, {
					className: D.a.prediction,
					prediction: t,
					selectedOptionId: (null == r ? void 0 : r.id) || null,
					onSelectOption: e => {
						const {
							creatorId: s,
							endsAt: o,
							resolvedOptionId: i,
							userSelection: a
						} = t, r = o < Date.now();
						r && s === n && !i && b(e.id), r || a || c(e.id)
					}
				}), r && o.a.createElement(w.a, {
					className: D.a.modal,
					isCreatingVote: a,
					onOverlayClick: f,
					onCancel: f,
					onPredict: async e => {
						r && (await d(e), E())
					},
					option: r,
					pollId: t.id,
					tournamentId: t.tournamentId,
					withOverlay: !0
				}), u && o.a.createElement(A, {
					isResolving: l,
					isTokens: null !== t.tournamentId,
					onOverlayClick: f,
					onCancel: f,
					onResolve: p,
					withOverlay: !0
				}))
			};
			var W = n("./node_modules/lodash/isNil.js"),
				V = n.n(W),
				U = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				z = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				K = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				Y = n.n(K);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Z({
				didParticipate: e
			}) {
				const t = Q._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = o.a.createElement(o.a.Fragment, null, Q._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && o.a.createElement("div", {
						className: Y.a.notificationBlurb
					}, Q._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return o.a.createElement("div", null, o.a.createElement(z.a, {
					title: t,
					message: n
				}))
			}
			var q = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx");

			function G() {
				const e = P.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = P.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(z.a, {
					title: e,
					message: t
				}))
			}
			var X = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				H = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
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
					userSelection: i,
					userWonAmount: a,
					options: r
				} = e, c = Boolean(i), d = s === i, l = i && (null === (t = r.find(({
					id: e
				}) => e === i)) || void 0 === t ? void 0 : t.userStakeAmount) || 0, u = n ? o.a.createElement(X.a, {
					className: $.a.coinIcon,
					tournamentId: n
				}) : o.a.createElement(H.a, {
					className: $.a.coinIcon
				});
				return c && !d ? o.a.createElement("div", null, o.a.createElement(z.a, {
					title: ee._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, ee._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!l && o.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You lost {lostAmount}", [ee._param("lostAmount", o.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, u, l))], {
						hk: "6091x"
					})))
				})) : c && d && l && !a ? o.a.createElement("div", null, o.a.createElement(z.a, {
					title: ee._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, ee._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You've been refunded {refundedAmount}", [ee._param("refundedAmount", o.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, u, l))], {
						hk: "49bOe9"
					})))
				})) : c && d ? o.a.createElement("div", null, o.a.createElement(z.a, {
					title: ee._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, ee._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!a && o.a.createElement("div", {
						className: $.a.wonOrLostAmountRow
					}, ee._("You won {wonAmount}", [ee._param("wonAmount", o.a.createElement("div", {
						className: $.a.wonOrLostAmount
					}, u, l + a))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(z.a, {
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
					tournamentId: i,
					userSelection: a
				} = e, r = n < Date.now(), c = !V()(i), d = r && t && !s;
				return r ? s ? o.a.createElement(te, {
					prediction: e
				}) : d ? o.a.createElement(G, null) : o.a.createElement(Z, {
					didParticipate: !!a
				}) : o.a.createElement(q.a, {
					isTokens: c,
					storageKey: U.a.feature
				})
			};
			var se = n("./src/lib/timeUntil/index.ts"),
				oe = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				ie = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ae = n.n(ie);
			const {
				fbt: re
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? o.a.createElement("div", {
				className: ae.a.statusBar
			}, n && o.a.createElement(oe.a, {
				className: ae.a.clockIcon
			}), t ? re._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : re._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : o.a.createElement("div", {
				className: ae.a.statusBar
			}, n && o.a.createElement(oe.a, {
				className: ae.a.clockIcon
			}), re._("Prediction ends in {expirationDuration}", [re._param("expirationDuration", Object(se.a)(new Date(e), !0))], {
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), be = ({
				prediction: e
			}) => {
				const {
					endsAt: t,
					predictionStatus: n,
					resolvedOptionId: s,
					totalStakeAmount: i,
					tournamentId: a,
					totalVoters: c
				} = e, d = Boolean(a), l = !d;
				return Object(b.a)(n) ? o.a.createElement("div", {
					className: ae.a.container
				}, me._("Canceled", null, {
					hk: "1SL2bC"
				})) : o.a.createElement("div", {
					className: Object(r.a)(ae.a.container, {
						[ae.a.coins]: l
					})
				}, d && c > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement(ue, {
					totalVoters: c
				}), o.a.createElement("span", null, "·")), l && i > 0 && o.a.createElement("div", {
					className: ae.a.statusBar
				}, o.a.createElement(H.a, {
					className: ae.a.coinIcon
				}), i, " ", me._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(ce, {
					endsAt: t,
					resolvedOptionId: s,
					isCoins: l
				}))
			};
			var pe = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				Ee = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				fe = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				_e = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				he = n("./src/reddit/models/User/index.ts"),
				ge = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				ve = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				xe = n.n(ve);

			function Pe({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var s;
				const a = Object(i.e)(m.W),
					c = Object(i.e)(m.k),
					d = Object(i.e)(m.C),
					l = Object(i.e)(e => Object(ge.f)(e, {
						subredditId: n
					}));
				return (null === (s = null == l ? void 0 : l.latestParticipants) || void 0 === s ? void 0 : s.length) ? o.a.createElement("div", {
					className: Object(r.a)(xe.a.tournamentFacepile, e)
				}, l.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: s
				}) => {
					const i = !!c && Object(he.e)(c) === n,
						{
							url: l
						} = e,
						{
							isNsfw: u
						} = s,
						m = `tournament-facepile-face-${n}`;
					return Object(_e.a)(l) ? o.a.createElement(Ee.a, {
						key: m,
						backgroundClassName: xe.a.snoovatarBackground,
						className: Object(r.a)(xe.a.snoovatar, t),
						headshot: l
					}) : o.a.createElement(fe.b, {
						key: m,
						className: Object(r.a)(xe.a.userIcon, t),
						iconUrl: l,
						isCurrentUser: i,
						isNSFW: u,
						isNightMode: a,
						shouldHideNSFW: d
					})
				})) : null
			}
			var Oe = n("./src/reddit/controls/InternalLink/index.tsx"),
				ke = n("./src/reddit/hooks/usePageLayer.ts"),
				je = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Ce = n("./src/reddit/selectors/subreddit.ts"),
				Ne = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Ie = n.n(Ne);
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ye({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(N.a)(),
					s = Object(ke.a)(),
					a = Object(i.e)(t => Object(Ce.R)(t, {
						subredditId: e
					})),
					r = Object(i.e)(t => Object(ge.b)(t, {
						subredditId: e
					})),
					d = Object(c.x)(s),
					l = Object(c.J)(s),
					u = Object(c.N)(s);
				if (Object(pe.a)(a.name), (null == r ? void 0 : r.tournamentId) !== t) return null;
				const {
					name: m,
					totalParticipantsCount: b
				} = r;
				return o.a.createElement(Oe.a, {
					className: Ie.a.tournamentLink,
					to: `${a.url}predictions/`,
					onClick: () => {
						n(Object(C.l)({
							pageType: d ? "post_detail" : u ? "community" : l ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(Pe, {
					className: Ie.a.facepile,
					subredditId: e
				}), o.a.createElement("div", {
					className: Ie.a.info
				}, o.a.createElement("div", {
					className: Ie.a.tournamentName
				}, m), o.a.createElement("div", {
					className: Ie.a.totalPlayers
				}, b && b > 0 ? we._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [we._param("totalPlayers", Object(de.b)(b)), we._plural(b)], {
					hk: "3eDpRH"
				}) : we._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(je.a, {
					className: Ie.a.chevron
				}))
			}
			var Se = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				Le = n.n(Se);
			const Me = Object(a.c)({
					isEditing: l.M,
					prediction: d.g,
					post: u.H,
					subredditOrProfile: u.V,
					userId: m.ob
				}),
				Be = Object(c.u)({
					isCommentsPage: c.x,
					isPredictionsPage: c.O
				}),
				Ae = ({
					className: e,
					isCommentsPage: t,
					isEditing: n,
					isPredictionsPage: s,
					post: i,
					prediction: a,
					subredditOrProfile: c,
					userId: d
				}) => {
					if (!a || !c) return o.a.createElement(_, null);
					const {
						creatorId: l,
						tournamentId: u,
						predictionStatus: m
					} = a, p = l === d, E = t && !Object(b.a)(m);
					return o.a.createElement("div", {
						className: Object(r.a)(e, Le.a.container, {
							[Le.a.forCommentsPage]: t,
							[Le.a.isEditing]: t && n
						}),
						onClick: e => {
							a && e.stopPropagation()
						}
					}, E && o.a.createElement(ne, {
						prediction: a,
						isCreator: p
					}), o.a.createElement(T, {
						post: i,
						prediction: a
					}), o.a.createElement(be, {
						prediction: a
					}), !s && u && o.a.createElement(ye, {
						subredditId: i.belongsTo.id,
						tournamentId: u
					}))
				};
			t.default = Be(Object(i.b)(Me)(Ae))
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				r = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(i.a)(r.a.loadingIcon, t, {
					[r.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.fb
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
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				r = n.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(i.a)(r.a.chevron, e.className),
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.d88c47e8b8df759e8a14.js.map