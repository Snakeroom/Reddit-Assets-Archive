// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.52c4b2662e4397c2f4a6.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction"], {
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
				return h
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
				h = e => Object(o.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(c.e, null, r.a.createElement(c.i, null, r.a.createElement(d.a, null, r.a.createElement(c.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(a.a, {
				onClick: t => {
					e.onClose && e.onClose(t), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(c.b, null)))), r.a.createElement(c.l, null, r.a.createElement(c.p, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(c.g, null, !e.hideCancelButton && r.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(c.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(t), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
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
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useLocalStorage.ts"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				let {
					message: t,
					newBadge: n,
					onClose: l,
					onView: b,
					storageKey: p = d.a.nonDismissable,
					title: f,
					isFullWidth: h
				} = e;
				const E = p !== d.a.nonDismissable,
					[v, g] = Object(i.a)(p, !E || !1),
					[x, P] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					v || x || !b || (b(), P(!0))
				}, [v, x, b]), E && v ? null : o.a.createElement("div", {
					className: Object(r.a)(u.a.educationMessage, {
						[u.a.isShortWidth]: !h
					})
				}, o.a.createElement("div", {
					className: u.a.titleRow
				}, o.a.createElement("div", {
					className: u.a.header
				}, o.a.createElement("h3", {
					className: u.a.title
				}, f), n && o.a.createElement("div", {
					className: u.a.newBadge
				}, m._("New", null, {
					hk: "2N0EBb"
				}))), E && o.a.createElement(c.t, {
					"aria-label": m._("Close", null, {
						hk: "2UjnU"
					}),
					className: u.a.closeButton,
					Icon: Object(a.b)("close"),
					onClick: () => {
						g(!0), l && l()
					},
					priority: c.c.Plain
				})), t)
			}
		},
		"./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less": function(e, t, n) {
			e.exports = {
				notificationBlurb: "_2681BT2Imfw1O3Zy_oLAcl"
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");

			function d(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(t => Object(a.X)(t, {
						subredditId: e
					})),
					s = Object(r.e)(t => Object(c.i)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(c.k)(t, {
						subredditId: e
					})),
					l = o.a.useCallback(() => {
						n.name && t(Object(i.l)(n.name))
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
				return Se
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/poll/index.ts"),
				l = n("./src/reddit/selectors/postCreations.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Prediction/helpers.ts"),
				p = n("./src/reddit/components/Econ/Prediction/NoPredictionError/index.m.less"),
				f = n.n(p);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var E = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(c.a)(f.a.container, t)
					}, h._("Error: Could not load prediction", null, {
						hk: "3SDSgH"
					}))
				},
				v = n("./src/reddit/actions/post.ts"),
				g = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				x = n("./src/reddit/models/Vote/index.ts"),
				P = n("./src/reddit/selectors/experiments/econ/index.ts");
			var O = n("./node_modules/fbt/lib/FbtPublic.js"),
				_ = n("./src/reddit/actions/economics/predictions/index.ts"),
				j = n("./src/reddit/hooks/useToast.tsx");
			var C = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/helpers/trackers/predictions.ts"),
				k = n("./src/reddit/hooks/useTracking.ts"),
				w = n("./src/reddit/models/Prediction/index.ts");
			var I = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				N = n("./src/reddit/components/ConfirmUserActionModal/index.tsx");
			const S = e => {
				let {
					isResolving: t,
					isTokens: n,
					onCancel: s,
					onResolve: r
				} = e;
				return o.a.createElement(N.a, {
					withOverlay: !0,
					onConfirm: r,
					onCancel: s,
					onClose: s,
					onOverlayClick: s,
					isDisabled: t,
					actionText: O.fbt._("Submit", null, {
						hk: "4aU3dh"
					}),
					cancelActionText: O.fbt._("Cancel", null, {
						hk: "2TSLl5"
					}),
					headerText: O.fbt._("Confirm Your Answer", null, {
						hk: "4yIXaD"
					}),
					modalText: n ? O.fbt._("Once you hit Submit, the answer is final and tokens will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1rtAzB"
					}) : O.fbt._("Once you hit Submit, the answer is final and coins will be distributed to the winners. After resolving this prediction you will not be able to delete or remove it.", null, {
						hk: "1M6iWL"
					})
				})
			};
			var A = n("./src/reddit/components/Econ/Prediction/PredictionCard/PredictionBody/index.tsx"),
				L = n("./src/reddit/components/Econ/Prediction/PredictionCard/index.m.less"),
				M = n.n(L);
			const F = e => {
				let {
					post: t,
					prediction: n
				} = e;
				const i = Object(r.e)(m.Fb),
					{
						isLoading: c,
						selectedVoteOption: a,
						setVoteOptionId: d,
						predict: l
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [o, i] = Object(s.useState)(null), c = Object(k.a)(), a = Object(r.e)(m.g), d = Object(j.a)(), l = Object(r.d)(), u = e.options.find(e => {
							let {
								id: t
							} = e;
							return t === o
						});
						return {
							isLoading: t,
							selectedVoteOption: u,
							setVoteOptionId: i,
							predict: async t => {
								const s = e.id;
								if (!u) return;
								if (t.currency === w.a.Coins && t.amount > a) return Object(C.promptUserToBuyMoreCoins)(), void c(y.b);
								const o = t.amount;
								if (e.endsAt < Date.now()) d(O.fbt._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								}));
								else {
									e.tournamentId ? c(Object(y.n)({
										pollId: s,
										selectedNumberTokens: o
									})) : c(Object(y.m)({
										pollId: s,
										selectedNumberCoins: o,
										totalStakeAmount: e.totalStakeAmount
									})), n(!0);
									try {
										await l(Object(_.r)({
											coinPackageId: t.id,
											optionId: u.id,
											postId: s,
											price: o
										}))
									} catch (r) {
										d(O.fbt._("Error: Failed to make prediction, please try again later", null, {
											hk: "1tECsx"
										}))
									}
									n(!1), i(null)
								}
							}
						}
					}(n),
					{
						isLoading: u,
						resolveOptionId: b,
						setResolveOptionId: p,
						resolve: f
					} = function(e) {
						const [t, n] = Object(s.useState)(!1), [o, i] = Object(s.useState)(null), c = Object(j.a)(), a = Object(r.d)();
						return {
							isLoading: t,
							resolveOptionId: o,
							setResolveOptionId: i,
							resolve: async () => {
								if (n(!0), !o) throw new Error("Failed to create prediction, missing selected option");
								try {
									await a(Object(_.q)({
										optionId: o,
										postId: e
									}))
								} catch (t) {
									c(O.fbt._("Error: Failed to resolve prediction, please try again later", null, {
										hk: "3Ve2Mb"
									}))
								}
								i(null), n(!1)
							}
						}
					}(n.id),
					{
						upvote: h
					} = function(e) {
						const t = Object(r.d)(),
							n = Object(r.e)(P.h),
							{
								startDelayedUpvoteAnimation: s
							} = Object(g.a)(e.id);
						return {
							upvote: function() {
								n && e.voteState < x.a.upvoted && (t(Object(v.ib)(e.id)), s())
							}
						}
					}(t),
					E = Object(s.useCallback)(() => {
						d(null), p(null)
					}, []);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(A.a, {
					className: M.a.prediction,
					prediction: n,
					selectedOptionId: (null == a ? void 0 : a.id) || null,
					onSelectOption: e => {
						const {
							creatorId: t,
							endsAt: s,
							resolvedOptionId: o,
							userSelection: r
						} = n, c = s < Date.now();
						c && t === i && !o && p(e.id), c || r || d(e.id)
					}
				}), a && o.a.createElement(I.a, {
					className: M.a.modal,
					isCreatingVote: c,
					onOverlayClick: E,
					onCancel: E,
					onPredict: async e => {
						a && (await l(e), h())
					},
					option: a,
					pollId: n.id,
					tournamentId: n.tournamentId,
					withOverlay: !0
				}), b && o.a.createElement(S, {
					isResolving: u,
					isTokens: null !== n.tournamentId,
					onCancel: E,
					onResolve: f
				}))
			};
			var B = n("./node_modules/lodash/isNil.js"),
				T = n.n(B),
				D = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/constants.ts"),
				R = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/EducationMessage/index.tsx"),
				W = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionEndedEducationMessage/index.m.less"),
				U = n.n(W);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function K(e) {
				let {
					didParticipate: t
				} = e;
				const n = V._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					s = o.a.createElement(o.a.Fragment, null, V._("The outcome is pending.", null, {
						hk: "4tsv1U"
					}), t && o.a.createElement("div", {
						className: U.a.notificationBlurb
					}, V._("You'll be notified when the results are in.", null, {
						hk: "45tyVv"
					})));
				return o.a.createElement("div", null, o.a.createElement(R.a, {
					title: n,
					message: s
				}))
			}

			function G(e) {
				let {
					isTokens: t,
					onClose: n,
					onView: s,
					storageKey: r
				} = e;
				const i = O.fbt._("Predictions", null, {
						hk: "3X6mhV"
					}),
					c = t ? O.fbt._("Redditors add tokens to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "FDY0l"
					}) : O.fbt._("Redditors add coins to their answers, then everyone who gets it right splits the winnings", null, {
						hk: "4eP2MR"
					});
				return o.a.createElement("div", null, o.a.createElement(R.a, {
					onClose: n,
					onView: s,
					title: i,
					newBadge: !0,
					message: c,
					storageKey: r
				}))
			}

			function Y() {
				const e = O.fbt._("Choose the answer", null, {
						hk: "3QoLuB"
					}),
					t = O.fbt._("The prediction has ended and the outcome is needed to resolve the prediction.", null, {
						hk: "4CkrEz"
					});
				return o.a.createElement("div", null, o.a.createElement(R.a, {
					title: e,
					message: t
				}))
			}
			var z = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				X = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				q = n("./src/reddit/components/Econ/Prediction/PredictionEducationMessage/PredictionResolvedEducationMessage/index.m.less"),
				Z = n.n(q);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = e => {
				let {
					prediction: t
				} = e;
				var n;
				const {
					tournamentId: s,
					resolvedOptionId: r,
					userSelection: i,
					userWonAmount: c,
					options: a
				} = t, d = Boolean(i), l = r === i, u = i && (null === (n = a.find(e => {
					let {
						id: t
					} = e;
					return t === i
				})) || void 0 === n ? void 0 : n.userStakeAmount) || 0, m = s ? o.a.createElement(z.a, {
					className: Z.a.coinIcon,
					tournamentId: s
				}) : o.a.createElement(X.a, {
					className: Z.a.coinIcon
				});
				return d && !l ? o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Q._("Better luck next time", null, {
						hk: "1KYUZf"
					}),
					message: o.a.createElement(o.a.Fragment, null, Q._("Sorry, your prediction was wrong this time.", null, {
						hk: "4aEoP2"
					}), !!u && o.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, Q._("You lost {lostAmount}", [Q._param("lostAmount", o.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, m, u))], {
						hk: "6091x"
					})))
				})) : d && l && u && !c ? o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Q._("And the winner is... EVERYONE!", null, {
						hk: "2qfnkC"
					}),
					message: o.a.createElement(o.a.Fragment, null, Q._("Well, and no one.", null, {
						hk: "2nGCUb"
					}), o.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, Q._("You've been refunded {refundedAmount}", [Q._param("refundedAmount", o.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, m, u))], {
						hk: "49bOe9"
					})))
				})) : d && l ? o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Q._("And the winner is... YOU!", null, {
						hk: "19q97O"
					}),
					message: o.a.createElement(o.a.Fragment, null, Q._("It’s confirmed—Your prediction was spot on.", null, {
						hk: "3AtcRD"
					}), !!c && o.a.createElement("div", {
						className: Z.a.wonOrLostAmountRow
					}, Q._("You won {wonAmount}", [Q._param("wonAmount", o.a.createElement("div", {
						className: Z.a.wonOrLostAmount
					}, m, u + c))], {
						hk: "1zg0cH"
					})))
				})) : o.a.createElement("div", null, o.a.createElement(R.a, {
					title: Q._("This prediction has ended", null, {
						hk: "3VMLnq"
					}),
					message: Q._("The outcome has been provided.", null, {
						hk: "4ccLzU"
					})
				}))
			}, J = e => {
				let {
					prediction: t,
					isCreator: n
				} = e;
				const {
					endsAt: s,
					resolvedOptionId: r,
					tournamentId: i,
					userSelection: c
				} = t, a = s < Date.now(), d = !T()(i), l = a && n && !r;
				return a ? r ? o.a.createElement(H, {
					prediction: t
				}) : l ? o.a.createElement(Y, null) : o.a.createElement(K, {
					didParticipate: !!c
				}) : o.a.createElement(G, {
					isTokens: d,
					storageKey: D.a.feature
				})
			};
			var $ = n("./src/lib/timeUntil/index.ts"),
				ee = n("./src/reddit/icons/svgs/ClockFilled/index.tsx"),
				te = n("./src/reddit/components/Econ/Prediction/PredictionStatus/index.m.less"),
				ne = n.n(te);
			const {
				fbt: se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), oe = e => {
				let {
					endsAt: t,
					resolvedOptionId: n,
					isCoins: s
				} = e;
				return Date.now() > t ? o.a.createElement("div", {
					className: ne.a.statusBar
				}, s && o.a.createElement(ee.a, {
					className: ne.a.clockIcon
				}), n ? se._("Prediction ended", null, {
					hk: "3o79Ig"
				}) : se._("Ended. Awaiting results", null, {
					hk: "1szagh"
				})) : o.a.createElement("div", {
					className: ne.a.statusBar
				}, s && o.a.createElement(ee.a, {
					className: ne.a.clockIcon
				}), se._("Prediction ends in {expirationDuration}", [se._param("expirationDuration", Object($.a)(new Date(t), !0))], {
					hk: "3ysXEE"
				}))
			};
			var re = n("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = e => {
				let {
					totalVoters: t
				} = e;
				return ie._({
					"*": "{total voters} predictions made",
					_1: "{total voters} prediction made"
				}, [ie._param("total voters", Object(re.b)(t)), ie._plural(t)], {
					hk: "2u2Nv8"
				})
			}, {
				fbt: ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = e => {
				let {
					prediction: t
				} = e;
				const {
					endsAt: n,
					predictionStatus: s,
					resolvedOptionId: r,
					totalStakeAmount: i,
					tournamentId: a,
					totalVoters: d
				} = t, l = Boolean(a), u = !l;
				return Object(b.a)(s) ? o.a.createElement("div", {
					className: ne.a.container
				}, ae._("Canceled", null, {
					hk: "1SL2bC"
				})) : o.a.createElement("div", {
					className: Object(c.a)(ne.a.container, {
						[ne.a.coins]: u
					})
				}, l && d > 0 && o.a.createElement(o.a.Fragment, null, o.a.createElement(ce, {
					totalVoters: d
				}), o.a.createElement("span", null, "·")), u && i > 0 && o.a.createElement("div", {
					className: ne.a.statusBar
				}, o.a.createElement(X.a, {
					className: ne.a.coinIcon
				}), i, " ", ae._("added by participants", null, {
					hk: "PSq3T"
				})), o.a.createElement(oe, {
					endsAt: n,
					resolvedOptionId: r,
					isCoins: u
				}))
			};
			var le = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				ue = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				me = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				be = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				pe = n("./src/reddit/models/User/index.ts"),
				fe = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				he = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				Ee = n.n(he);

			function ve(e) {
				let {
					className: t,
					faceClassName: n,
					subredditId: s
				} = e;
				var i;
				const a = Object(r.e)(m.fb),
					d = Object(r.e)(m.m),
					l = Object(r.e)(m.H),
					u = Object(r.e)(e => Object(fe.f)(e, {
						subredditId: s
					}));
				return (null === (i = null == u ? void 0 : u.latestParticipants) || void 0 === i ? void 0 : i.length) ? o.a.createElement("div", {
					className: Object(c.a)(Ee.a.tournamentFacepile, t)
				}, u.latestParticipants.slice(0, 3).map(e => {
					let {
						icon: t,
						name: s,
						profile: r
					} = e;
					const i = !!d && Object(pe.e)(d) === s,
						{
							url: u
						} = t,
						{
							isNsfw: m
						} = r,
						b = `tournament-facepile-face-${s}`;
					return Object(be.a)(u) ? o.a.createElement(ue.a, {
						key: b,
						backgroundClassName: Ee.a.snoovatarBackground,
						className: Object(c.a)(Ee.a.snoovatar, n),
						headshot: u
					}) : o.a.createElement(me.b, {
						key: b,
						className: Object(c.a)(Ee.a.userIcon, n),
						iconUrl: u,
						isCurrentUser: i,
						isNSFW: m,
						isNightMode: a,
						shouldHideNSFW: l
					})
				})) : null
			}
			var ge = n("./src/reddit/controls/InternalLink/index.tsx"),
				xe = n("./src/reddit/hooks/usePageLayer.ts"),
				Pe = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				Oe = n("./src/reddit/selectors/subreddit.ts"),
				_e = n("./src/reddit/components/Econ/Prediction/TournamentLink/index.m.less"),
				je = n.n(_e);
			const {
				fbt: Ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ye(e) {
				let {
					subredditId: t,
					tournamentId: n
				} = e;
				const s = Object(k.a)(),
					i = Object(xe.a)(),
					c = Object(r.e)(e => Object(Oe.X)(e, {
						subredditId: t
					})),
					d = Object(r.e)(e => Object(fe.b)(e, {
						subredditId: t
					})),
					l = Object(a.y)(i),
					u = Object(a.L)(i),
					m = Object(a.Q)(i);
				if (Object(le.a)(c.name), (null == d ? void 0 : d.tournamentId) !== n) return null;
				const {
					name: b,
					totalParticipantsCount: p
				} = d;
				return o.a.createElement(ge.default, {
					className: je.a.tournamentLink,
					to: `${c.url}predictions/`,
					onClick: () => {
						s(Object(y.k)({
							pageType: l ? "post_detail" : m ? "community" : u ? "profile" : "home"
						})), window.scrollTo(0, 0)
					}
				}, o.a.createElement(ve, {
					className: je.a.facepile,
					subredditId: t
				}), o.a.createElement("div", {
					className: je.a.info
				}, o.a.createElement("div", {
					className: je.a.tournamentName
				}, b), o.a.createElement("div", {
					className: je.a.totalPlayers
				}, p && p > 0 ? Ce._({
					"*": "{totalPlayers} tournament players",
					_1: "{totalPlayers} tournament player"
				}, [Ce._param("totalPlayers", Object(re.b)(p)), Ce._plural(p)], {
					hk: "3eDpRH"
				}) : Ce._("Be the first to predict!", null, {
					hk: "4Ea9sh"
				}))), o.a.createElement(Pe.a, {
					className: je.a.chevron
				}))
			}
			var ke = n("./src/reddit/components/Econ/Prediction/index.m.less"),
				we = n.n(ke);
			const Ie = Object(i.c)({
					isEditing: l.M,
					prediction: d.g,
					post: u.F,
					subredditOrProfile: u.U,
					userId: m.Fb
				}),
				Ne = Object(a.v)({
					isCommentsPage: a.y,
					isPredictionsPage: a.R
				}),
				Se = e => {
					let {
						className: t,
						isCommentsPage: n,
						isEditing: s,
						isPredictionsPage: r,
						post: i,
						prediction: a,
						subredditOrProfile: d,
						userId: l
					} = e;
					if (!a || !d) return o.a.createElement(E, null);
					const {
						creatorId: u,
						tournamentId: m,
						predictionStatus: p
					} = a, f = u === l, h = n && !Object(b.a)(p);
					return o.a.createElement("div", {
						className: Object(c.a)(t, we.a.container, {
							[we.a.forCommentsPage]: n,
							[we.a.isEditing]: n && s
						}),
						onClick: e => {
							a && (e.stopPropagation(), e.preventDefault())
						}
					}, h && o.a.createElement(J, {
						prediction: a,
						isCreator: f
					}), o.a.createElement(F, {
						post: i,
						prediction: a
					}), o.a.createElement(de, {
						prediction: a
					}), !r && m && o.a.createElement(ye, {
						subredditId: i.belongsTo.id,
						tournamentId: m
					}))
				};
			t.default = Ne(Object(r.b)(Ie)(Se))
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
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.loadingIcon, n, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
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
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "x", (function() {
				return P
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "z", (function() {
				return y
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "n", (function() {
				return w
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "k", (function() {
				return F
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "u", (function() {
				return R
			})), n.d(t, "v", (function() {
				return W
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "w", (function() {
				return V
			})), n.d(t, "s", (function() {
				return K
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "g", (function() {
				return X
			})), n.d(t, "m", (function() {
				return q
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
				m = n("./src/reddit/selectors/comments.ts"),
				b = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				h = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const E = [],
				v = (e, t) => {
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
				g = (e, t) => {
					const n = v(e, t);
					return n && n.endsAt || null
				};
			var x;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(x || (x = {}));
			const P = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = g(e, t),
							s = Date.now();
						return n && s < n ? x.Subscribed : x.NotSubscribed
					}
					return x.DontKnow
				},
				O = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === u.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || E).map(t => e.badges.models[t]).filter(Boolean);
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

			function _(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : E
			}
			const j = (e, t, n) => {
					var o;
					if (!s.d.spBadges(e)) return E;
					return _(null === (o = e.users.appliedBadges[n]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				C = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
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
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(i.e)(n) && n.userId === o) return n;
				const r = e.badges.models,
					c = e.user.ownedBadges[s] || {},
					a = Object(i.e)(n) ? n.type : n.id;
				return Object.keys(c).map(e => r[e]).find(e => e && e.type === a)
			}

			function w(e, t, n, s) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (n === c.a.Loyalty || n === c.a.Achievement) return o.data.collections[n];
					if (n === c.a.Cosmetic && s) return o.data.collections[n][s]
				}
				return E
			}

			function I(e, t) {
				const n = w(e, t, c.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : E
			}

			function N(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[c.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(i.f)
				}
				return E
			}

			function S(e, t) {
				return w(e, t, c.a.Cosmetic, c.c.Gallery).some(e => e.locked.some(e => Object(i.f)(e) || !!e.price))
			}
			const A = e => {
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
			var L;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(L || (L = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				F = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const n = M.prices;
					F(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const s = v(e, t);
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				T = (e, t) => {
					var n, s, o, r;
					const i = (null === (r = null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || M;
					return {
						prices: B(e, t),
						member: i.member || M.member,
						memberPlural: i.memberPlural || M.memberPlural,
						memberAlt: i.memberAlt || M.memberAlt,
						memberAltPlural: i.memberAltPlural || M.memberAltPlural,
						membership: i.membership || M.membership,
						membershipAlt: i.membershipAlt || M.membershipAlt
					}
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				W = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (!n) return;
					return e.economics.emotes[n]
				},
				V = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				K = (e, t) => !!t && !!Object(f.a)(e, {
					subredditId: t
				}),
				G = (e, t, n) => {
					if (Object(p.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!z(e, t) || !(!s.d.spGiphy(e) || !Y(e, n)));
					if (!Object(h.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.f)(e, {
							subredditId: t
						})) return !0;
					if (Y(e, n)) return !0;
					const o = s.d.spGiphy(e),
						r = V(e, t);
					return !!z(e, t) || o && r
				},
				Y = (e, t) => {
					const n = "replyToPost" !== t && Object(b.c)(e, {
						commentId: t
					});
					if (n && Object(r.a)(n)) return !0
				},
				z = (e, t) => {
					const n = s.d.spGiphy(e),
						o = V(e, t);
					return n && o
				},
				X = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				q = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/models/Gold/Powerups/index.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, s;
					switch (t.type) {
						case r.mb:
						case r.nb: {
							const {
								benefitStatuses: s,
								subredditId: o
							} = t.payload;
							if (!s) return e;
							const r = null !== (n = e[o]) && void 0 !== n ? n : {},
								i = {};
							return s.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								i[t] = n
							}), {
								...e,
								[o]: {
									...r,
									...i
								}
							}
						}
						case r.L: {
							const {
								benefitStatuses: n,
								subredditId: o
							} = t.payload, r = null !== (s = e[o]) && void 0 !== s ? s : {}, i = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								i[t] = n
							}), {
								...e,
								[o]: {
									...r,
									...i
								}
							}
						}
						default:
							return e
					}
				},
				a = n("./node_modules/reselect/es/index.js");
			Object(o.a)({
				features: {
					powerupsBenefitSettings: c
				}
			});
			const d = (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? e.features.powerupsBenefitSettings[n] : null
				},
				l = (e => Object(a.a)(d, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction.52c4b2662e4397c2f4a6.js.map