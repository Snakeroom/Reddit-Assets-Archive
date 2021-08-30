// https://www.redditstatic.com/desktop2x/index.2851ec48a6a90386dbce.js
// Retrieved at 8/30/2021, 12:00:06 PM by Reddit Dataminer v1.0.0
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
				return W
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
				x = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				E = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				T = n("./src/reddit/helpers/trackers/predictions.ts"),
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
				return i.a.createElement(v.a, {
					className: g.a.container,
					to: `${null==s?void 0:s.url}predictions/`,
					onClick: () => o(Object(T.f)(e))
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
					a = Object(u.e)(b.W),
					l = Object(u.e)(t => Object(p.g)(t, {
						postId: e.id
					})),
					[v, j] = Object(o.useState)(!1),
					{
						isLoading: I,
						isShowingVoteAnimation: g,
						selectedOption: _,
						selectOption: V,
						predict: U,
						cancelAction: F,
						hideAnimation: Q
					} = function(e, t, n) {
						const o = Object(u.d)(),
							s = Object(u.e)(b.d),
							r = Object(u.e)(D.o),
							d = Object(u.e)(D.n),
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
								id: v,
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
								if (t.currency === m.a.Coins && t.amount > s) return Object(k.promptUserToBuyMoreCoins)(), void c(T.a);
								if (U) return l(N._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})), void y(null);
								if (!P || !_) throw new Error("Invalid arguments, optionId and pollId must be strings");
								g(!0), c(Object(T.o)({
									pollId: P,
									selectedNumberTokens: t.amount
								}));
								try {
									await o(Object(C.o)({
										coinPackageId: t.id,
										selectedOptionId: _,
										price: t.amount,
										pollId: P,
										tournamentId: e,
										tournamentPostId: n.id
									})), r && j < B.a.upvoted && (o(Object(w.db)(v)), o(Object(w.db)(P)), p()), g(!1), y(null), d ? M(!0) : a({
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
						options: H,
						userSelection: K
					} = l || {},
					{
						endsAt: R,
						title: G,
						status: W,
						resolvedOptionId: J,
						options: z
					} = e,
					Y = R < Date.now(),
					$ = W === m.b.Cancelled || W === m.b.CancelInProgress,
					Z = null != H ? H : z;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(r.a)(M.a.poll, {
						[M.a.nightMode]: a
					})
				}, i.a.createElement("p", {
					className: M.a.pollQuestion
				}, G), Z.map(e => i.a.createElement(E.a, {
					endsAt: R,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: g && K === e.id,
					onAnimationEnd: Q
				}, i.a.createElement(O.a, {
					disabled: g,
					isCancelled: $,
					isEnded: Y,
					isSelected: K === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => V(e),
					resolvedOptionId: J,
					tournamentId: t,
					userSelection: K,
					userIsLoggedOut: !c,
					votePercentage: (K || Y || v) && e.voteCount && (null == l ? void 0 : l.totalVoters) ? Math.floor(e.voteCount / l.totalVoters * 100) : null,
					isShowingHint: v
				}))), !$ && i.a.createElement(x.a, {
					disabled: g || v || !!K,
					isEnded: Y,
					postId: s.id,
					userSelection: K,
					isShowingHint: v,
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
				}), !!K && i.a.createElement(y, {
					postId: s.id,
					subredditId: n,
					isLastPrediction: d
				}))
			};
			var F = n("./src/reddit/helpers/predictions/index.ts");
			var Q = n("./src/reddit/selectors/posts.ts"),
				H = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				K = n.n(H);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = ({
				postId: e
			}) => {
				const t = Object(h.a)(),
					n = Object(u.e)(t => Object(Q.V)(t, {
						postId: e
					}));
				return i.a.createElement(v.a, {
					className: K.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(T.f)(e))
				}, R._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			}, W = ({
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
				})) : i.a.createElement(G, {
					postId: e.id
				})
			};
			t.default = W
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.2851ec48a6a90386dbce.js.map