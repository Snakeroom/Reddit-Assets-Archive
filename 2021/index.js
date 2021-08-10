// https://www.redditstatic.com/desktop2x/index.3fc9736ae6b0c58b16f9.js
// Retrieved at 8/10/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index"], {
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Dw9el2B-C-Ikbg2Trf7L"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1jmD4mW_RLMiaiFTU4IgDc",
				playTournament: "_1ZAQtWa2JonNlEgDEUHohg",
				showOverlay: "_3gxGGGPvavst2iPB0Tx0BQ"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less": function(e, t, n) {
			e.exports = {
				poll: "_1MF5ozmNOt2P11dtLfURLC",
				nightMode: "_2qaKJtI3QD6MeQYipM0YVj",
				pollQuestion: "_2MB_PhYbKpP0mDPzBMo5CG"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less": function(e, t, n) {
			e.exports = {
				viewTournament: "_16Mu-Vn-rTtULDzx2p5T80"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "TournamentPostBody", (function() {
				return J
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				s = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				r = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				c = n.n(d);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				...t
			}) => {
				return i.a.createElement("div", a({}, t, {
					className: Object(r.a)(e, c.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var u = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/reddit/models/Prediction/index.ts"),
				p = n("./src/reddit/selectors/poll/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				P = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				O = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				x = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				E = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				T = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/predictions.ts"),
				h = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				g = n.n(I);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(h.a)(),
					s = Object(u.e)(e => Object(j.T)(e, {
						subredditId: t
					}));
				return i.a.createElement(T.a, {
					className: g.a.container,
					to: `${null==s?void 0:s.url}predictions/`,
					onClick: () => o(Object(v.f)(e))
				}, i.a.createElement("div", {
					className: g.a.playTournament
				}, n ? _._("View Tournament", null, {
					hk: "4rKPbx"
				}) : _._("Keep Playing", null, {
					hk: "Xa82J"
				})))
			};
			var f = n("./src/lib/timeUntil/index.ts"),
				k = n("./src/reddit/actions/economics/helpers/index.ts"),
				C = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				L = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				A = n("./src/reddit/hooks/useToast.tsx"),
				S = n("./src/reddit/models/Toast/index.ts"),
				B = n("./src/reddit/models/Vote/index.ts"),
				D = n("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var V = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				M = n.n(V);
			const U = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: s,
				isLastPrediction: d
			}) => {
				const c = Object(u.e)(b.J),
					a = Object(u.e)(b.V),
					l = Object(u.e)(t => Object(p.g)(t, {
						postId: e.id
					})),
					[T, j] = Object(o.useState)(!1),
					{
						isLoading: I,
						isShowingVoteAnimation: g,
						selectedOption: _,
						selectOption: V,
						predict: U,
						cancelAction: F,
						hideAnimation: H
					} = function(e, t, n) {
						const o = Object(u.d)(),
							s = Object(u.e)(b.d),
							r = Object(u.e)(D.n),
							d = Object(u.e)(D.m),
							c = Object(h.a)(),
							a = Object(A.b)(),
							l = Object(A.a)(),
							{
								startDelayedUpvoteAnimation: p
							} = Object(L.a)(n.id),
							{
								id: P,
								endsAt: O,
								options: x,
								selectedOptionId: E
							} = t,
							{
								id: T,
								voteState: j
							} = n,
							[I, g] = i.a.useState(!1),
							[_, y] = i.a.useState(null),
							[V, M] = i.a.useState(!1),
							U = O < Date.now();
						return {
							isLoading: I,
							isShowingVoteAnimation: V,
							selectedOption: x.find(({
								id: e
							}) => e === _),
							selectOption: e => {
								U || E || y(e.id)
							},
							predict: async t => {
								if (t.currency === m.a.Coins && t.amount > s) return Object(k.promptUserToBuyMoreCoins)(), void c(v.a);
								if (U) return l(N._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})), void y(null);
								if (!P || !_) throw new Error("Invalid arguments, optionId and pollId must be strings");
								g(!0), c(Object(v.o)({
									pollId: P,
									selectedNumberTokens: t.amount
								}));
								try {
									await o(Object(C.m)({
										coinPackageId: t.id,
										selectedOptionId: _,
										price: t.amount,
										pollId: P,
										tournamentId: e,
										tournamentPostId: n.id
									})), r && j < B.a.upvoted && (o(Object(w.db)(T)), o(Object(w.db)(P)), p()), g(!1), y(null), d ? M(!0) : a({
										duration: 5e3,
										kind: S.b.SuccessCommunity,
										text: N._("Thanks! See if you're right in {timeToResult}", [N._param("timeToResult", Object(f.a)(new Date(O), !0))], {
											hk: "3ZSdoo"
										})
									})
								} catch (i) {
									g(!1), y(null), l(N._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									}))
								}
							},
							cancelAction: i.a.useCallback(() => {
								y(null)
							}, []),
							hideAnimation: i.a.useCallback(() => {
								M(!1)
							}, [])
						}
					}(t, e, s),
					{
						options: Q,
						userSelection: G
					} = l || {},
					{
						endsAt: K,
						title: R,
						status: J,
						resolvedOptionId: W,
						options: z
					} = e,
					Y = K < Date.now(),
					$ = J === m.b.Cancelled || J === m.b.CancelInProgress,
					Z = null != Q ? Q : z;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(r.a)(M.a.poll, {
						[M.a.nightMode]: a
					})
				}, i.a.createElement("p", {
					className: M.a.pollQuestion
				}, R), Z.map(e => i.a.createElement(E.a, {
					endsAt: K,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: g && G === e.id,
					onAnimationEnd: H
				}, i.a.createElement(O.a, {
					disabled: g,
					isCancelled: $,
					isEnded: Y,
					isSelected: G === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => V(e),
					resolvedOptionId: W,
					tournamentId: t,
					userSelection: G,
					userIsLoggedOut: !c,
					votePercentage: (G || Y || T) && e.voteCount && (null == l ? void 0 : l.totalVoters) ? Math.floor(e.voteCount / l.totalVoters * 100) : null,
					isShowingHint: T
				}))), !$ && i.a.createElement(x.a, {
					disabled: g || T || !!G,
					isEnded: Y,
					userSelection: G,
					isShowingHint: T,
					tournamentId: t,
					onReveal: () => j(!0)
				})), !!_ && i.a.createElement(P.b, {
					className: M.a.modal,
					isCreatingVote: I,
					onOverlayClick: F,
					onCancel: F,
					onPredict: U,
					option: _,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!G && i.a.createElement(y, {
					postId: s.id,
					subredditId: n,
					isLastPrediction: d
				}))
			};
			var F = n("./src/reddit/helpers/predictions/index.ts");
			var H = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				G = n.n(Q);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = ({
				postId: e
			}) => {
				const t = Object(h.a)(),
					n = Object(u.e)(t => Object(H.T)(t, {
						postId: e
					}));
				return i.a.createElement(T.a, {
					className: G.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(v.f)(e))
				}, K._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			}, J = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, r = function(e) {
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const t = e.filter(e => !e.isSpoiler && !e.isNSFW).sort(F.a);
						return {
							prediction: t[0],
							isLastPrediction: t.length <= 1
						}
					}, [])
				}(n);
				return (null == r ? void 0 : r.prediction) && o !== s.a.Closed ? i.a.createElement(l, null, i.a.createElement(U, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
					prediction: null == r ? void 0 : r.prediction,
					isLastPrediction: null == r ? void 0 : r.isLastPrediction
				})) : i.a.createElement(R, {
					postId: e.id
				})
			};
			t.default = J
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.3fc9736ae6b0c58b16f9.js.map