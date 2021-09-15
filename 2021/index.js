// https://www.redditstatic.com/desktop2x/index.e633f4a9334e320e52b4.js
// Retrieved at 9/15/2021, 6:50:07 PM by Reddit Dataminer v1.0.0
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
				return G
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
				p = n("./src/reddit/models/Prediction/index.ts"),
				m = n("./src/reddit/selectors/poll/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				v = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				P = n("./src/reddit/components/Econ/Prediction/PredictionOption/SneakPeek.tsx"),
				I = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/trackers/predictions.ts"),
				g = n("./src/reddit/hooks/useTracking.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				j = n.n(h);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(g.a)(),
					s = Object(u.e)(e => Object(T.Q)(e, {
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
			var _ = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				k = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/components/Econ/Prediction/hooks/useDelayedUpvoteAnimation.tsx"),
				w = n("./src/reddit/hooks/useToast.tsx"),
				L = n("./src/reddit/models/Vote/index.ts"),
				S = n("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var V = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				B = n.n(V);
			const N = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: s,
				isLastPrediction: r
			}) => {
				const c = Object(u.e)(b.K),
					a = Object(u.e)(b.X),
					l = Object(u.e)(t => Object(m.g)(t, {
						postId: e.id
					})),
					[x, T] = Object(o.useState)(!1),
					{
						isLoading: h,
						isShowingVoteAnimation: j,
						selectedOption: C,
						selectOption: V,
						predict: N,
						cancelAction: M,
						hideAnimation: U
					} = function(e, t, n) {
						const o = Object(u.d)(),
							s = Object(u.e)(b.e),
							d = Object(u.e)(S.p),
							r = Object(g.a)(),
							c = Object(w.a)(),
							{
								startDelayedUpvoteAnimation: a
							} = Object(A.a)(n.id),
							{
								id: l,
								endsAt: m,
								options: O,
								selectedOptionId: v
							} = t,
							{
								id: P,
								voteState: I
							} = n,
							[x, T] = i.a.useState(!1),
							[h, j] = i.a.useState(null),
							[C, f] = i.a.useState(!1),
							V = m < Date.now();
						return {
							isLoading: x,
							isShowingVoteAnimation: C,
							selectedOption: O.find(({
								id: e
							}) => e === h),
							selectOption: e => {
								V || v || j(e.id)
							},
							predict: async t => {
								if (t.currency === p.a.Coins && t.amount > s) return Object(_.promptUserToBuyMoreCoins)(), void r(E.a);
								if (V) return c(D._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})), void j(null);
								if (!l || !h) throw new Error("Invalid arguments, optionId and pollId must be strings");
								T(!0), r(Object(E.o)({
									pollId: l,
									selectedNumberTokens: t.amount
								}));
								try {
									await o(Object(y.o)({
										coinPackageId: t.id,
										selectedOptionId: h,
										price: t.amount,
										pollId: l,
										tournamentId: e,
										tournamentPostId: n.id
									})), d && I < L.a.upvoted && (o(Object(k.db)(P)), o(Object(k.db)(l)), a()), T(!1), j(null), f(!0)
								} catch (i) {
									T(!1), j(null), c(D._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									}))
								}
							},
							cancelAction: i.a.useCallback(() => {
								j(null)
							}, []),
							hideAnimation: i.a.useCallback(() => {
								f(!1)
							}, [])
						}
					}(t, e, s),
					{
						options: F,
						userSelection: Q
					} = l || {},
					{
						endsAt: K,
						title: H,
						status: G,
						resolvedOptionId: R,
						options: W
					} = e,
					z = K < Date.now(),
					J = G === p.b.Cancelled || G === p.b.CancelInProgress,
					Y = null != F ? F : W;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(d.a)(B.a.poll, {
						[B.a.nightMode]: a
					})
				}, i.a.createElement("p", {
					className: B.a.pollQuestion
				}, H), Y.map(e => i.a.createElement(I.a, {
					endsAt: K,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: j && Q === e.id,
					onAnimationEnd: U
				}, i.a.createElement(v.a, {
					disabled: j,
					isCancelled: J,
					isEnded: z,
					isSelected: Q === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => V(e),
					resolvedOptionId: R,
					tournamentId: t,
					userSelection: Q,
					userIsLoggedOut: !c,
					votePercentage: (Q || z || x) && e.voteCount && (null == l ? void 0 : l.totalVoters) ? Math.floor(e.voteCount / l.totalVoters * 100) : null,
					isShowingHint: x
				}))), !J && i.a.createElement(P.a, {
					disabled: j || x || !!Q,
					isEnded: z,
					postId: s.id,
					userSelection: Q,
					isShowingHint: x,
					tournamentId: t,
					onReveal: () => T(!0)
				})), !!C && i.a.createElement(O.b, {
					className: B.a.modal,
					isCreatingVote: h,
					onOverlayClick: M,
					onCancel: M,
					onPredict: N,
					option: C,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!Q && i.a.createElement(f, {
					postId: s.id,
					subredditId: n,
					isLastPrediction: r
				}))
			};
			var M = n("./src/reddit/helpers/predictions/index.ts");
			var U = n("./src/reddit/selectors/posts.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				Q = n.n(F);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				postId: e
			}) => {
				const t = Object(g.a)(),
					n = Object(u.e)(t => Object(U.U)(t, {
						postId: e
					}));
				return i.a.createElement(x.a, {
					className: Q.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(E.f)(e))
				}, K._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			}, G = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, d = function(e) {
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const t = e.filter(e => !e.isSpoiler && !e.isNSFW).sort(M.a);
						return {
							prediction: t[0],
							isLastPrediction: t.length <= 1
						}
					}, [])
				}(n);
				return (null == d ? void 0 : d.prediction) && o !== s.a.Closed ? i.a.createElement(l, null, i.a.createElement(N, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
					prediction: null == d ? void 0 : d.prediction,
					isLastPrediction: null == d ? void 0 : d.isLastPrediction
				})) : i.a.createElement(H, {
					postId: e.id
				})
			};
			t.default = G
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.e633f4a9334e320e52b4.js.map