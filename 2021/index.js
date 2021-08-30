// https://www.redditstatic.com/desktop2x/index.e68e4236ba887882219a.js
// Retrieved at 8/30/2021, 5:00:08 PM by Reddit Dataminer v1.0.0
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
				d = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				c = n.n(r);

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
					className: Object(d.a)(e, c.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var u = n("./node_modules/react-redux/es/index.js"),
				m = n("./src/reddit/models/Prediction/index.ts"),
				p = n("./src/reddit/selectors/poll/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				v = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				P = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				I = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/trackers/predictions.ts"),
				T = n("./src/reddit/hooks/useTracking.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				j = n.n(h);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(T.a)(),
					s = Object(u.e)(e => Object(g.T)(e, {
						subredditId: t
					}));
				return i.a.createElement(x.a, {
					className: j.a.container,
					to: `${null==s?void 0:s.url}predictions/`,
					onClick: () => o(Object(E.f)(e))
				}, i.a.createElement("div", {
					className: j.a.playTournament
				}, n ? C._("View Tournament", null, {
					hk: "4rKPbx"
				}) : C._("Keep Playing", null, {
					hk: "Xa82J"
				})))
			};
			var _ = n("./src/lib/timeUntil/index.ts"),
				y = n("./src/reddit/actions/economics/helpers/index.ts"),
				k = n("./src/reddit/actions/economics/predictions/index.ts"),
				A = n("./src/reddit/actions/post.ts"),
				S = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				w = n("./src/reddit/hooks/useToast.tsx"),
				L = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/models/Vote/index.ts"),
				V = n("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var N = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				M = n.n(N);
			const U = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: s,
				isLastPrediction: r
			}) => {
				const c = Object(u.e)(b.K),
					a = Object(u.e)(b.X),
					l = Object(u.e)(t => Object(p.g)(t, {
						postId: e.id
					})),
					[x, g] = Object(o.useState)(!1),
					{
						isLoading: h,
						isShowingVoteAnimation: j,
						selectedOption: C,
						selectOption: N,
						predict: U,
						cancelAction: F,
						hideAnimation: K
					} = function(e, t, n) {
						const o = Object(u.d)(),
							s = Object(u.e)(b.e),
							d = Object(u.e)(V.o),
							r = Object(u.e)(V.n),
							c = Object(T.a)(),
							a = Object(w.b)(),
							l = Object(w.a)(),
							{
								startDelayedUpvoteAnimation: p
							} = Object(S.a)(n.id),
							{
								id: O,
								endsAt: v,
								options: P,
								selectedOptionId: I
							} = t,
							{
								id: x,
								voteState: g
							} = n,
							[h, j] = i.a.useState(!1),
							[C, f] = i.a.useState(null),
							[N, M] = i.a.useState(!1),
							U = v < Date.now();
						return {
							isLoading: h,
							isShowingVoteAnimation: N,
							selectedOption: P.find(({
								id: e
							}) => e === C),
							selectOption: e => {
								U || I || f(e.id)
							},
							predict: async t => {
								if (t.currency === m.a.Coins && t.amount > s) return Object(y.promptUserToBuyMoreCoins)(), void c(E.a);
								if (U) return l(B._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})), void f(null);
								if (!O || !C) throw new Error("Invalid arguments, optionId and pollId must be strings");
								j(!0), c(Object(E.o)({
									pollId: O,
									selectedNumberTokens: t.amount
								}));
								try {
									await o(Object(k.o)({
										coinPackageId: t.id,
										selectedOptionId: C,
										price: t.amount,
										pollId: O,
										tournamentId: e,
										tournamentPostId: n.id
									})), d && g < D.a.upvoted && (o(Object(A.db)(x)), o(Object(A.db)(O)), p()), j(!1), f(null), r ? M(!0) : a({
										duration: 5e3,
										kind: L.b.SuccessCommunity,
										text: B._("Thanks! See if you're right in {timeToResult}", [B._param("timeToResult", Object(_.a)(new Date(v), !0))], {
											hk: "3ZSdoo"
										})
									})
								} catch (i) {
									j(!1), f(null), l(B._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									}))
								}
							},
							cancelAction: i.a.useCallback(() => {
								f(null)
							}, []),
							hideAnimation: i.a.useCallback(() => {
								M(!1)
							}, [])
						}
					}(t, e, s),
					{
						options: Q,
						userSelection: H
					} = l || {},
					{
						endsAt: R,
						title: G,
						status: W,
						resolvedOptionId: z,
						options: J
					} = e,
					Y = R < Date.now(),
					$ = W === m.b.Cancelled || W === m.b.CancelInProgress,
					X = null != Q ? Q : J;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(d.a)(M.a.poll, {
						[M.a.nightMode]: a
					})
				}, i.a.createElement("p", {
					className: M.a.pollQuestion
				}, G), X.map(e => i.a.createElement(I.a, {
					endsAt: R,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: j && H === e.id,
					onAnimationEnd: K
				}, i.a.createElement(v.a, {
					disabled: j,
					isCancelled: $,
					isEnded: Y,
					isSelected: H === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => N(e),
					resolvedOptionId: z,
					tournamentId: t,
					userSelection: H,
					userIsLoggedOut: !c,
					votePercentage: (H || Y || x) && e.voteCount && (null == l ? void 0 : l.totalVoters) ? Math.floor(e.voteCount / l.totalVoters * 100) : null,
					isShowingHint: x
				}))), !$ && i.a.createElement(P.a, {
					disabled: j || x || !!H,
					isEnded: Y,
					postId: s.id,
					userSelection: H,
					isShowingHint: x,
					tournamentId: t,
					onReveal: () => g(!0)
				})), !!C && i.a.createElement(O.b, {
					className: M.a.modal,
					isCreatingVote: h,
					onOverlayClick: F,
					onCancel: F,
					onPredict: U,
					option: C,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!H && i.a.createElement(f, {
					postId: s.id,
					subredditId: n,
					isLastPrediction: r
				}))
			};
			var F = n("./src/reddit/helpers/predictions/index.ts");
			var K = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				H = n.n(Q);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = ({
				postId: e
			}) => {
				const t = Object(T.a)(),
					n = Object(u.e)(t => Object(K.V)(t, {
						postId: e
					}));
				return i.a.createElement(x.a, {
					className: H.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(E.f)(e))
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
				} = e.predictionTournament, d = function(e) {
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const t = e.filter(e => !e.isSpoiler && !e.isNSFW).sort(F.a);
						return {
							prediction: t[0],
							isLastPrediction: t.length <= 1
						}
					}, [])
				}(n);
				return (null == d ? void 0 : d.prediction) && o !== s.a.Closed ? i.a.createElement(l, null, i.a.createElement(U, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
					prediction: null == d ? void 0 : d.prediction,
					isLastPrediction: null == d ? void 0 : d.isLastPrediction
				})) : i.a.createElement(G, {
					postId: e.id
				})
			};
			t.default = W
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			}));
			var o = n("./src/reddit/models/Prediction/index.ts");
			const i = (e, t) => {
					const n = Date.now(),
						i = n <= e.endsAt,
						s = n <= t.endsAt,
						d = e.status === o.b.Cancelled || e.status === o.b.CancelInProgress;
					return d !== (t.status === o.b.Cancelled || t.status === o.b.CancelInProgress) ? d ? 1 : -1 : i !== s ? i ? -1 : 1 : i && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : i || e.selectedOptionId === t.selectedOptionId ? (e.totalVoteCount || 0) >= (t.totalVoteCount || 0) ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				s = (e, t) => {
					var n, o;
					const {
						pollData: s
					} = e, {
						pollData: d
					} = t;
					return s && d ? i({
						endsAt: null == s ? void 0 : s.votingEndTimestamp,
						selectedOptionId: null !== (n = null == s ? void 0 : s.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == s ? void 0 : s.resolvedOptionId,
						totalVoteCount: null == s ? void 0 : s.totalVoteCount,
						status: null == s ? void 0 : s.predictionStatus
					}, {
						endsAt: null == d ? void 0 : d.votingEndTimestamp,
						selectedOptionId: null !== (o = null == d ? void 0 : d.userSelection) && void 0 !== o ? o : null,
						resolvedOptionId: null == d ? void 0 : d.resolvedOptionId,
						totalVoteCount: null == d ? void 0 : d.totalVoteCount,
						status: null == d ? void 0 : d.predictionStatus
					}) : 0
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.e68e4236ba887882219a.js.map