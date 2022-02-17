// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.e5b8a43805a4a0e28654.js
// Retrieved at 2/16/2022, 7:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const i = [s.rc, s.pb, s.B, s.Q, s.kb, s.Sb],
				a = {
					[s.Sb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.kb]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.Q]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.B]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.pb]: e => o.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [o.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.rc]: e => o.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [o.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				r = {
					[s.Sb]: e => o.fbt._("{amount}s", [o.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.kb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.Q]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.B]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.pb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.rc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.pb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.rc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.rc]: "",
						[s.pb]: "",
						[s.B]: "",
						[s.Q]: "",
						[s.kb]: "",
						[s.Sb]: ""
					};
				let u = d - c;
				if (u <= 0) return o.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const o of i) {
					const e = Math.floor(u / o);
					e && (l[o] = (t ? r : a)[o](e).toString()), u -= e * o
				}
				const m = i.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : o.fbt._("{amount of time left} left", [o.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => i.a.createElement(r.e, null, i.a.createElement(r.i, null, i.a.createElement(d.a, null, i.a.createElement(r.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, i.a.createElement(r.b, null)))), i.a.createElement(r.l, null, i.a.createElement(r.p, {
				className: u.a.ModalText
			}, e.modalText)), i.a.createElement(r.g, null, !e.hideCancelButton && i.a.createElement(r.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(r.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.nonDismissable = "predictionEducationNonDismissable", e.creation = "predictionEducationCreation", e.feature = "predictionEducationFeature"
				}(o || (o = {}))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
					[x, h] = Object(a.a)(b, !f || !1),
					[_, g] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					x || _ || !l || (l(), g(!0))
				}, [x, _, l]), f && x ? null : s.a.createElement("div", {
					className: Object(i.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !E
					})
				}, s.a.createElement("div", {
					className: u.a.titleRow
				}, s.a.createElement("div", {
					className: u.a.header
				}, s.a.createElement("h3", {
					className: u.a.title
				}, p), t && s.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), f && s.a.createElement(r.t, {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				a = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx");

			function r({
				isTokens: e,
				onClose: t,
				onView: n,
				storageKey: s
			}) {
				const r = o.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = e ? o.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : o.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return i.a.createElement("div", null, i.a.createElement(a.a, {
					onClose: t,
					onView: n,
					title: r,
					newBadge: !0,
					message: c,
					storageKey: s
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/economics/predictions/index.ts"),
				r = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				c = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(i.d)(),
					n = Object(i.e)(t => Object(c.S)(t, {
						subredditId: e
					})),
					o = Object(i.e)(t => Object(r.i)(t, {
						subredditId: e
					})),
					d = Object(i.e)(t => Object(r.k)(t, {
						subredditId: e
					})),
					l = s.a.useCallback(() => {
						n.name && t(Object(a.l)(n.name))
					}, [n.name, t]);
				return s.a.useEffect(() => {
					d || o || l()
				}, [d, o, l]), {
					isFetching: d,
					isFetched: o,
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
				return Se
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
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
			var x = ({
					className: e
				}) => s.a.createElement("div", {
					className: Object(r.a)(E.a.container, e)
				}, f._("Error: Could not load prediction", null, {
					hk: "3SDSgH"
				})),
				h = n("./src/reddit/actions/post.ts"),
				_ = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				g = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/experiments/econ/index.ts");
			var k = n("./node_modules/fbt/lib/FbtPublic.js"),
				O = n("./src/reddit/actions/economics/predictions/index.ts"),
				P = n("./src/reddit/hooks/useToast.tsx");
			var C = n("./src/reddit/actions/economics/helpers/index.ts"),
				j = n("./src/reddit/helpers/trackers/predictions.ts"),
				N = n("./src/reddit/hooks/useTracking.ts"),
				w = n("./src/reddit/models/Prediction/index.ts");
			var I = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				y = n("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const S = ({
				isResolving: e,
				isTokens: t,
				onCancel: n,
				onResolve: o
			}) => s.a.createElement(y.a, {
				withOverlay: !0,
				onConfirm: o,
				onCancel: n,
				onClose: n,
				onOverlayClick: n,
				isDisabled: e,
				actionText: k.fbt._("Submit", null, {
					hk: "4aU3dh"
				}),
				cancelActionText: k.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}),
				headerText: k.fbt._("Confirm Your Answer", null, {
					hk: "4yIXaD"
				}),
				modalText: t ? k.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
					hk: "1rtAzB"
				}) : k.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
					hk: "1M6iWL"
				})
			});
			var M = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				A = n.n(L);
			const B = ({
				post: e,
				prediction: t
			}) => {
				const n = Object(i.e)(m.xb),
					{
						isLoading: a,
						selectedVoteOption: r,
						setVoteOptionId: c,
						predict: d
					} = function(e) {
						const [t, n] = Object(o.useState)(!1), [s, a] = Object(o.useState)(null), r = Object(N.a)(), c = Object(i.e)(m.e), d = Object(P.a)(), l = Object(i.d)(), u = e.options.find(({
							id: e
						}) => e === s);
						return {
							isLoading: t,
							selectedVoteOption: u,
							setVoteOptionId: a,
							predict: async t => {
								const o = e.id;
								if (!u) return;
								if (t.currency === w.a.Coins && t.amount > c) return Object(C.promptUserToBuyMoreCoins)(), void r(j.b);
								const s = t.amount;
								if (e.endsAt < Date.now()) d(k.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								}));
								else {
									e.tournamentId ? r(Object(j.o)({
										pollId: o,
										selectedNumberTokens: s
									})) : r(Object(j.n)({
										pollId: o,
										selectedNumberCoins: s,
										totalStakeAmount: e.totalStakeAmount
									})), n(!0);
									try {
										await l(Object(O.r)({
											coinPackageId: t.id,
											optionId: u.id,
											postId: o,
											price: s
										}))
									} catch (i) {
										d(k.fbt._("Error: Failed to make prediction, please try again later", null, {
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
						const [t, n] = Object(o.useState)(!1), [s, a] = Object(o.useState)(null), r = Object(P.a)(), c = Object(i.d)();
						return {
							isLoading: t,
							resolveOptionId: s,
							setResolveOptionId: a,
							resolve: async () => {
								if (n(!0), !s) throw new Error("Failed to create prediction, missing selected option");
								try {
									await c(Object(O.q)({
										optionId: s,
										postId: e
									}))
								} catch (t) {
									r(k.fbt._("Error: Failed to resolve prediction, please try again later", null, {
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
							n = Object(i.e)(v.n),
							{
								startDelayedUpvoteAnimation: o
							} = Object(_.a)(e.id);
						return {
							upvote: function() {
								n && e.voteState < g.a.upvoted && (t(Object(h.jb)(e.id)), o())
							}
						}
					}(e),
					f = Object(o.useCallback)(() => {
						c(null), b(null)
					}, []);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(M.a, {
					className: A.a.prediction,
					prediction: t,
					selectedOptionId: (null == r ? void 0 : r.id) || null,
					onSelectOption: e => {
						const {
							creatorId: o,
							endsAt: s,
							resolvedOptionId: i,
							userSelection: a
						} = t, r = s < Date.now();
						r && o === n && !i && b(e.id), r || a || c(e.id)
					}
				}), r && s.a.createElement(I.a, {
					className: A.a.modal,
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
				}), u && s.a.createElement(S, {
					isResolving: l,
					isTokens: null !== t.tournamentId,
					onCancel: f,
					onResolve: p
				}))
			};
			var T = n("./node_modules/lodash/isNil.js"),
				D = n.n(T),
				F = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				U = n.n(W);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function z({
				didParticipate: e
			}) {
				const t = V._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					n = s.a.createElement(s.a.Fragment, null, V._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), e && s.a.createElement("div", {
						className: U.a.notificationBlurb
					}, V._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return s.a.createElement("div", null, s.a.createElement(R.a, {
					title: t,
					message: n
				}))
			}
			var K = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionFeatureEducationMessage/index.tsx");

			function Y() {
				const e = k.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = k.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return s.a.createElement("div", null, s.a.createElement(R.a, {
					title: e,
					message: t
				}))
			}
			var q = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				G = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				Q = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				Z = n.n(Q);
			const {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				prediction: e
			}) => {
				var t;
				const {
					tournamentId: n,
					resolvedOptionId: o,
					userSelection: i,
					userWonAmount: a,
					options: r
				} = e, c = Boolean(i), d = o === i, l = i && (null === (t = r.find(({
					id: e
				}) => e === i)) || void 0 === t ? void 0 : t.userStakeAmount) || 0, u = n ? s.a.createElement(q.a, {
					className: Z.a.coinIcon,
					tournamentId: n
				}) : s.a.createElement(G.a, {
					className: Z.a.coinIcon
				});
				return c && !d ? s.a.createElement("div", null, s.a.createElement(R.a, {
					title: X._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: s.a.createElement(s.a.Fragment, null, X._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!l && s.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, X._("You lost {lostAmount}", [X._param("lostAmount", s.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, u, l))], {
						hk: "6091x"
					})))
				})) : c && d && l && !a ? s.a.createElement("div", null, s.a.createElement(R.a, {
					title: X._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: s.a.createElement(s.a.Fragment, null, X._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), s.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, X._("You've been refunded {refundedAmount}", [X._param("refundedAmount", s.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, u, l))], {
						hk: "49bOe9"
					})))
				})) : c && d ? s.a.createElement("div", null, s.a.createElement(R.a, {
					title: X._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: s.a.createElement(s.a.Fragment, null, X._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!a && s.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, X._("You won {wonAmount}", [X._param("wonAmount", s.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, u, l + a))], {
						hk: "1zg0cH"
					})))
				})) : s.a.createElement("div", null, s.a.createElement(R.a, {
					title: X._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: X._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}, J = ({
				prediction: e,
				isCreator: t
			}) => {
				const {
					endsAt: n,
					resolvedOptionId: o,
					tournamentId: i,
					userSelection: a
				} = e, r = n < Date.now(), c = !D()(i), d = r && t && !o;
				return r ? o ? s.a.createElement(H, {
					prediction: e
				}) : d ? s.a.createElement(Y, null) : s.a.createElement(z, {
					didParticipate: !!a
				}) : s.a.createElement(K.a, {
					isTokens: c,
					storageKey: F.a.feature
				})
			};
			var $ = n("./src/lib/timeUntil/index.ts"),
				ee = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				te = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ne = n.n(te);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = ({
				endsAt: e,
				resolvedOptionId: t,
				isCoins: n
			}) => Date.now() > e ? s.a.createElement("div", {
				className: ne.a.statusBar
			}, n && s.a.createElement(ee.a, {
				className: ne.a.clockIcon
			}), t ? oe._("Prediction ended", null, {
				hk: "3o79Ig"
			}) : oe._("Ended. Awaiting results", null, {
				hk: "1szagh"
			})) : s.a.createElement("div", {
				className: ne.a.statusBar
			}, n && s.a.createElement(ee.a, {
				className: ne.a.clockIcon
			}), oe._("Prediction ends in {expirationDuration}", [oe._param("expirationDuration", Object($.a)(new Date(e), !0))], {
				hk: "3ysXEE"
			}));
			var ie = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = ({
				totalVoters: e
			}) => ae._({
				"*": "{total voters} predictions made",
				_1: "{total voters} prediction made"
			}, [ae._param("total voters", Object(ie.b)(e)), ae._plural(e)], {
				hk: "2u2Nv8"
			}), {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = ({
				prediction: e
			}) => {
				const {
					endsAt: t,
					predictionStatus: n,
					resolvedOptionId: o,
					totalStakeAmount: i,
					tournamentId: a,
					totalVoters: c
				} = e, d = Boolean(a), l = !d;
				return Object(b.a)(n) ? s.a.createElement("div", {
					className: ne.a.container
				}, ce._("Canceled", null, {
					hk: "1SL2bC"
				})) : s.a.createElement("div", {
					className: Object(r.a)(ne.a.container, {
						[ne.a.coins]: l
					})
				}, d && c > 0 && s.a.createElement(s.a.Fragment, null, s.a.createElement(re, {
					totalVoters: c
				}), s.a.createElement("span", null, "·")), l && i > 0 && s.a.createElement("div", {
					className: ne.a.statusBar
				}, s.a.createElement(G.a, {
					className: ne.a.coinIcon
				}), i, " ", ce._("added by participants", null, {
					hk: "PSq3T"
				})), s.a.createElement(se, {
					endsAt: t,
					resolvedOptionId: o,
					isCoins: l
				}))
			};
			var le = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				ue = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				me = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				be = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				pe = n("./src/reddit/models/User/index.ts"),
				Ee = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				fe = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				xe = n.n(fe);

			function he({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var o;
				const a = Object(i.e)(m.ab),
					c = Object(i.e)(m.k),
					d = Object(i.e)(m.E),
					l = Object(i.e)(e => Object(Ee.f)(e, {
						subredditId: n
					}));
				return (null === (o = null == l ? void 0 : l.latestParticipants) || void 0 === o ? void 0 : o.length) ? s.a.createElement("div", {
					className: Object(r.a)(xe.a.tournamentFacepile, e)
				}, l.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: o
				}) => {
					const i = !!c && Object(pe.e)(c) === n,
						{
							url: l
						} = e,
						{
							isNsfw: u
						} = o,
						m = `tournament-facepile-face-${n}`;
					return Object(be.a)(l) ? s.a.createElement(ue.a, {
						key: m,
						backgroundClassName: xe.a.snoovatarBackground,
						className: Object(r.a)(xe.a.snoovatar, t),
						headshot: l
					}) : s.a.createElement(me.b, {
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
			var _e = n("./src/reddit/controls/InternalLink/index.tsx"),
				ge = n("./src/reddit/hooks/usePageLayer.ts"),
				ve = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				ke = n("./src/reddit/selectors/subreddit.ts"),
				Oe = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				Pe = n.n(Oe);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function je({
				subredditId: e,
				tournamentId: t
			}) {
				const n = Object(N.a)(),
					o = Object(ge.a)(),
					a = Object(i.e)(t => Object(ke.S)(t, {
						subredditId: e
					})),
					r = Object(i.e)(t => Object(Ee.b)(t, {
						subredditId: e
					})),
					d = Object(c.x)(o),
					l = Object(c.J)(o),
					u = Object(c.N)(o);
				if (Object(le.a)(a.name), (null == r ? void 0 : r.tournamentId) !== t) return null;
				const {
					name: m,
					totalParticipantsCount: b
				} = r;
				return s.a.createElement(_e.a, {
					className: Pe.a.tournamentLink,
					to: `${a.url}predictions/`,
					onClick: () => {
						n(Object(j.l)({
							pageType: d ? "post_detail" : u ? "community" : l ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, s.a.createElement(he, {
					className: Pe.a.facepile,
					subredditId: e
				}), s.a.createElement("div", {
					className: Pe.a.info
				}, s.a.createElement("div", {
					className: Pe.a.tournamentName
				}, m), s.a.createElement("div", {
					className: Pe.a.totalPlayers
				}, b && b > 0 ? Ce._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [Ce._param("totalPlayers", Object(ie.b)(b)), Ce._plural(b)], {
					hk: "3eDpRH"
				}) : Ce._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), s.a.createElement(ve.a, {
					className: Pe.a.chevron
				}))
			}
			var Ne = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				we = n.n(Ne);
			const Ie = Object(a.c)({
					isEditing: l.M,
					prediction: d.g,
					post: u.G,
					subredditOrProfile: u.U,
					userId: m.xb
				}),
				ye = Object(c.u)({
					isCommentsPage: c.x,
					isPredictionsPage: c.O
				}),
				Se = ({
					className: e,
					isCommentsPage: t,
					isEditing: n,
					isPredictionsPage: o,
					post: i,
					prediction: a,
					subredditOrProfile: c,
					userId: d
				}) => {
					if (!a || !c) return s.a.createElement(x, null);
					const {
						creatorId: l,
						tournamentId: u,
						predictionStatus: m
					} = a, p = l === d, E = t && !Object(b.a)(m);
					return s.a.createElement("div", {
						className: Object(r.a)(e, we.a.container, {
							[we.a.forCommentsPage]: t,
							[we.a.isEditing]: t && n
						}),
						onClick: e => {
							a && e.stopPropagation()
						}
					}, E && s.a.createElement(J, {
						prediction: a,
						isCreator: p
					}), s.a.createElement(B, {
						post: i,
						prediction: a
					}), s.a.createElement(de, {
						prediction: a
					}), !o && u && s.a.createElement(je, {
						subredditId: i.belongsTo.id,
						tournamentId: u
					}))
				};
			t.default = ye(Object(i.b)(Ie)(Se))
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				r = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
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
			var o = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.fb
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				r = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(i.a)(r.a.chevron, e.className),
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
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.e5b8a43805a4a0e28654.js.map