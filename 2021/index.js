// https://www.redditstatic.com/desktop2x/index.843b8abf1cce256262ae.js
// Retrieved at 7/22/2021, 11:20:04 AM by Reddit Dataminer v1.0.0
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
				m = n("./src/reddit/selectors/poll/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				P = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				O = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/trackers/predictions.ts"),
				T = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				I = n.n(v);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(T.a)(),
					s = Object(u.e)(e => Object(j.S)(e, {
						subredditId: t
					}));
				return i.a.createElement(x.a, {
					className: I.a.container,
					to: `${null==s?void 0:s.url}predictions/`,
					onClick: () => o(Object(E.f)(e))
				}, i.a.createElement("div", {
					className: I.a.playTournament
				}, n ? h._("View Tournament", null, {
					hk: "4rKPbx"
				}) : h._("Keep Playing", null, {
					hk: "Xa82J"
				})))
			};
			var g = n("./src/lib/timeUntil/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/models/Prediction/index.ts"),
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
				const c = Object(u.e)(p.J),
					a = Object(u.e)(p.V),
					l = Object(u.e)(t => Object(m.g)(t, {
						postId: e.id
					})),
					[x, j] = Object(o.useState)(!1),
					{
						isLoading: v,
						isShowingVoteAnimation: I,
						selectedOption: h,
						selectOption: D,
						predict: N,
						cancelAction: M
					} = function(e, t, n) {
						const o = Object(u.d)(),
							s = Object(u.e)(p.d),
							r = Object(u.e)(L.l),
							d = Object(u.e)(L.k),
							c = Object(T.a)(),
							a = Object(S.b)(),
							l = Object(S.a)(),
							{
								id: m,
								endsAt: b,
								options: P,
								selectedOptionId: O
							} = t,
							{
								voteState: x
							} = n,
							[j, v] = i.a.useState(!1),
							[I, h] = i.a.useState(null),
							[_, D] = i.a.useState(!1),
							A = b < Date.now();
						return {
							isLoading: j,
							isShowingVoteAnimation: _,
							selectedOption: P.find(({
								id: e
							}) => e === I),
							selectOption: e => {
								A || O || h(e.id)
							},
							predict: async t => {
								if (t.currency === C.a.Coins && t.amount > s) return Object(k.promptUserToBuyMoreCoins)(), void c(E.a);
								if (A) return l(B._("Error: Failed to make prediction. This prediction has already ended", null, {
									hk: "22UWEr"
								})), void h(null);
								if (!m || !I) throw new Error("Invalid arguments, optionId and pollId must be strings");
								v(!0), c(Object(E.o)({
									pollId: m,
									selectedNumberTokens: t.amount
								}));
								try {
									await o(Object(y.k)({
										coinPackageId: t.id,
										selectedOptionId: I,
										price: t.amount,
										pollId: m,
										tournamentId: e,
										tournamentPostId: n.id
									})), r && x < 1 && o(Object(w.fb)(m)), v(!1), h(null), d ? D(!0) : a({
										duration: 5e3,
										kind: f.b.SuccessCommunity,
										text: B._("Thanks! See if you're right in {timeToResult}", [B._param("timeToResult", Object(g.a)(new Date(b), !0))], {
											hk: "3ZSdoo"
										})
									})
								} catch (i) {
									v(!1), h(null), l(B._("Error: Failed to make prediction, please try again later", null, {
										hk: "1tECsx"
									}))
								}
							},
							cancelAction: i.a.useCallback(() => {
								h(null)
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
						resolvedOptionId: Q,
						options: G
					} = e,
					K = U < Date.now(),
					R = null != V ? V : G;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(r.a)(A.a.poll, {
						[A.a.nightMode]: a
					})
				}, i.a.createElement("p", {
					className: A.a.pollQuestion
				}, H), R.map(e => i.a.createElement(P.a, {
					key: `prediction-option-${e.id}`,
					disabled: I,
					isEnded: K,
					isSelected: F === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => D(e),
					resolvedOptionId: Q,
					tournamentId: t,
					userSelection: F,
					userIsLoggedOut: !c,
					votePercentage: (F || K || x) && e.voteCount && (null == l ? void 0 : l.totalVoters) ? Math.floor(e.voteCount / l.totalVoters * 100) : null,
					isShowingHint: x
				})), i.a.createElement(O.a, {
					disabled: I || x || !!F,
					isEnded: K,
					userSelection: F,
					isShowingHint: x,
					tournamentId: t,
					onReveal: () => j(!0)
				})), !!h && i.a.createElement(b.b, {
					className: A.a.modal,
					isCreatingVote: v,
					onOverlayClick: M,
					onCancel: M,
					onPredict: N,
					option: h,
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
				const t = Object(T.a)(),
					n = Object(u.e)(t => Object(V.S)(t, {
						postId: e
					}));
				return i.a.createElement(x.a, {
					className: U.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(E.f)(e))
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
					const t = Object(u.e)(p.cb);
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const n = e.filter(e => t || !e.isNSFW).sort(M.a);
						return {
							prediction: n[0],
							isLastPrediction: n.length <= 1
						}
					}, [t])
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.843b8abf1cce256262ae.js.map