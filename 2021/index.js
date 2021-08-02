// https://www.redditstatic.com/desktop2x/index.b4d776d420004822c20a.js
// Retrieved at 8/2/2021, 10:30:08 AM by Reddit Dataminer v1.0.0
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
				E = n("./src/reddit/controls/InternalLink/index.tsx"),
				T = n("./src/reddit/helpers/trackers/predictions.ts"),
				v = n("./src/reddit/hooks/useTracking.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				h = n.n(j);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(v.a)(),
					s = Object(u.e)(e => Object(I.S)(e, {
						subredditId: t
					}));
				return i.a.createElement(E.a, {
					className: h.a.container,
					to: `${null==s?void 0:s.url}predictions/`,
					onClick: () => o(Object(T.f)(e))
				}, i.a.createElement("div", {
					className: h.a.playTournament
				}, n ? g._("View Tournament", null, {
					hk: "4rKPbx"
				}) : g._("Keep Playing", null, {
					hk: "Xa82J"
				})))
			};
			var f = n("./src/lib/timeUntil/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/actions/economics/helpers/index.ts"),
				C = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				L = n("./src/reddit/selectors/experiments/econ/index.ts"),
				S = n("./src/reddit/hooks/useToast.tsx");
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var D = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				A = n.n(D);
			const N = ({
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
					[E, I] = Object(o.useState)(!1),
					{
						isLoading: j,
						isShowingVoteAnimation: h,
						selectedOption: g,
						selectOption: D,
						predict: N,
						cancelAction: M
					} = function(e, t, n) {
						const o = Object(u.d)(),
							s = Object(u.e)(b.d),
							r = Object(u.e)(L.m),
							d = Object(u.e)(L.l),
							c = Object(v.a)(),
							a = Object(S.b)(),
							l = Object(S.a)(),
							{
								id: p,
								endsAt: P,
								options: O,
								selectedOptionId: x
							} = t,
							{
								voteState: E
							} = n,
							[I, j] = i.a.useState(!1),
							[h, g] = i.a.useState(null),
							[_, D] = i.a.useState(!1),
							A = P < Date.now();
						return {
							isLoading: I,
							isShowingVoteAnimation: _,
							selectedOption: O.find(({
								id: e
							}) => e === h),
							selectOption: e => {
								A || x || g(e.id)
							},
							predict: async t => {
								if (t.currency === m.a.Coins && t.amount > s) return Object(k.promptUserToBuyMoreCoins)(), void c(T.a);
								if (A) return l(B._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})), void g(null);
								if (!p || !h) throw new Error("Invalid arguments, optionId and pollId must be strings");
								j(!0), c(Object(T.o)({
									pollId: p,
									selectedNumberTokens: t.amount
								}));
								try {
									await o(Object(C.l)({
										coinPackageId: t.id,
										selectedOptionId: h,
										price: t.amount,
										pollId: p,
										tournamentId: e,
										tournamentPostId: n.id
									})), r && E < 1 && o(Object(w.bb)(p)), j(!1), g(null), d ? D(!0) : a({
										duration: 5e3,
										kind: y.b.SuccessCommunity,
										text: B._("Thanks! See if you're right in {timeToResult}", [B._param("timeToResult", Object(f.a)(new Date(P), !0))], {
											hk: "3ZSdoo"
										})
									})
								} catch (i) {
									j(!1), g(null), l(B._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									}))
								}
							},
							cancelAction: i.a.useCallback(() => {
								g(null)
							}, []),
							hideAnimation: i.a.useCallback(() => {
								D(!1)
							}, [])
						}
					}(t, e, s),
					{
						options: V,
						userSelection: F
					} = l || {},
					{
						endsAt: U,
						title: H,
						status: Q,
						resolvedOptionId: G,
						options: K
					} = e,
					R = U < Date.now(),
					J = Q === m.b.Cancelled || Q === m.b.CancelInProgress,
					W = null != V ? V : K;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(r.a)(A.a.poll, {
						[A.a.nightMode]: a
					})
				}, i.a.createElement("p", {
					className: A.a.pollQuestion
				}, H), W.map(e => i.a.createElement(O.a, {
					key: `prediction-option-${e.id}`,
					disabled: h,
					isCancelled: J,
					isEnded: R,
					isSelected: F === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => D(e),
					resolvedOptionId: G,
					tournamentId: t,
					userSelection: F,
					userIsLoggedOut: !c,
					votePercentage: (F || R || E) && e.voteCount && (null == l ? void 0 : l.totalVoters) ? Math.floor(e.voteCount / l.totalVoters * 100) : null,
					isShowingHint: E
				})), !J && i.a.createElement(x.a, {
					disabled: h || E || !!F,
					isEnded: R,
					userSelection: F,
					isShowingHint: E,
					tournamentId: t,
					onReveal: () => I(!0)
				})), !!g && i.a.createElement(P.b, {
					className: A.a.modal,
					isCreatingVote: j,
					onOverlayClick: M,
					onCancel: M,
					onPredict: N,
					option: g,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!F && i.a.createElement(_, {
					postId: s.id,
					subredditId: n,
					isLastPrediction: d
				}))
			};
			var M = n("./src/reddit/helpers/predictions/index.ts");
			var V = n("./src/reddit/selectors/posts.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				U = n.n(F);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = ({
				postId: e
			}) => {
				const t = Object(v.a)(),
					n = Object(u.e)(t => Object(V.S)(t, {
						postId: e
					}));
				return i.a.createElement(E.a, {
					className: U.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(T.f)(e))
				}, H._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			}, G = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, r = function(e) {
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const t = e.filter(e => !e.isSpoiler && !e.isNSFW).sort(M.a);
						return {
							prediction: t[0],
							isLastPrediction: t.length <= 1
						}
					}, [])
				}(n);
				return (null == r ? void 0 : r.prediction) && o !== s.a.Closed ? i.a.createElement(l, null, i.a.createElement(N, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
					prediction: null == r ? void 0 : r.prediction,
					isLastPrediction: null == r ? void 0 : r.isLastPrediction
				})) : i.a.createElement(Q, {
					postId: e.id
				})
			};
			t.default = G
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.b4d776d420004822c20a.js.map