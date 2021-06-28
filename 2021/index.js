// https://www.redditstatic.com/desktop2x/index.2825e3671a1befca37f5.js
// Retrieved at 6/28/2021, 2:40:06 PM by Reddit Dataminer v1.0.0
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
				return R
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				s = n("./src/lib/classNames/index.ts"),
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
					className: Object(s.a)(e, c.a.container),
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
				I = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				f = n.n(j);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(T.a)(),
					r = Object(u.e)(e => Object(I.T)(e, {
						subredditId: t
					}));
				return i.a.createElement(x.a, {
					className: f.a.container,
					to: `${null==r?void 0:r.url}predictions/`,
					onClick: () => o(Object(E.f)(e))
				}, i.a.createElement("div", {
					className: f.a.playTournament
				}, n ? v._("View Tournament", null, {
					hk: "4rKPbx"
				}) : v._("Keep Playing", null, {
					hk: "Xa82J"
				})))
			};
			var h = n("./src/lib/timeUntil/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				L = n("./src/reddit/selectors/experiments/econ/index.ts"),
				C = n("./src/reddit/actions/toaster.ts");

			function B() {
				const e = Object(u.d)();
				return t => e(Object(C.f)(t))
			}
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e, t, n) {
				const o = Object(u.d)(),
					r = Object(u.e)(p.d),
					s = Object(u.e)(L.l),
					d = Object(u.e)(L.k),
					c = Object(T.a)(),
					a = B(),
					l = function() {
						const e = B();
						return (t, n) => e({
							duration: 5e3,
							kind: _.b.Error,
							...n,
							text: t
						})
					}(),
					{
						id: m,
						endsAt: b,
						options: P,
						selectedOptionId: O
					} = e,
					[x, I] = i.a.useState(!1),
					[j, f] = i.a.useState(null),
					[v, g] = i.a.useState(!1),
					C = b < Date.now();
				return {
					isLoading: x,
					isShowingVoteAnimation: v,
					selectedOption: P.find(({
						id: e
					}) => e === j),
					selectOption: e => {
						C || O || f(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > r) return Object(k.promptUserToBuyMoreCoins)(), void c(E.a);
						const u = i ? i.id : e.id,
							p = i ? i.amount : e.coins;
						if (C) return l(S._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void f(null);
						if (!m || !j) throw new Error("Invalid arguments, optionId and pollId must be strings");
						I(!0), c(Object(E.o)({
							pollId: m,
							selectedNumberTokens: p
						}));
						try {
							await o(Object(y.l)({
								coinPackageId: u,
								selectedOptionId: j,
								price: p,
								pollId: m,
								postId: t,
								subredditId: n
							})), s && o(Object(w.fb)(m)), I(!1), f(null), d ? g(!0) : a({
								duration: 5e3,
								kind: _.b.SuccessCommunity,
								text: S._("Thanks! See if you're right in {timeToResult}", [S._param("timeToResult", Object(h.a)(new Date(b), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (P) {
							I(!1), f(null), l(S._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						f(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						g(!1)
					}, [])
				}
			}
			var A = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				N = n.n(A);
			const M = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				postId: r,
				isLastPrediction: d
			}) => {
				const c = Object(u.e)(p.K),
					a = Object(u.e)(p.W),
					l = Object(u.e)(t => Object(m.g)(t, {
						postId: e.id
					})),
					[x, E] = Object(o.useState)(!1),
					{
						isLoading: T,
						isShowingVoteAnimation: I,
						selectedOption: j,
						selectOption: f,
						predict: v,
						cancelAction: h
					} = D(e, r, n);
				if (!l) return null;
				const {
					options: _,
					userSelection: k
				} = l, {
					endsAt: y,
					title: w,
					resolvedOptionId: L
				} = e, C = y < Date.now();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(s.a)(N.a.poll, {
						[N.a.nightMode]: a
					})
				}, i.a.createElement("p", {
					className: N.a.pollQuestion
				}, w), _.map(e => i.a.createElement(P.a, {
					key: `prediction-option-${e.id}`,
					disabled: I,
					isEnded: C,
					isSelected: k === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => f(e),
					resolvedOptionId: L,
					tournamentId: t,
					userSelection: k,
					userIsLoggedOut: !c,
					votePercentage: (k || C || x) && e.voteCount && (null == l ? void 0 : l.totalVoters) ? Math.floor(e.voteCount / l.totalVoters * 100) : null,
					isShowingHint: x
				})), i.a.createElement(O.a, {
					disabled: I || x || !!k,
					isEnded: C,
					userSelection: k,
					isShowingHint: x,
					tournamentId: t,
					onReveal: () => E(!0)
				})), !!j && i.a.createElement(b.b, {
					className: N.a.modal,
					isCreatingVote: T,
					onOverlayClick: h,
					onCancel: h,
					onPredict: v,
					option: j,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!k && i.a.createElement(g, {
					postId: r,
					subredditId: n,
					isLastPrediction: d
				}))
			};
			var V = n("./src/reddit/helpers/predictions/index.ts");
			var F = n("./src/reddit/selectors/posts.ts"),
				U = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				H = n.n(U);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = ({
				postId: e
			}) => {
				const t = Object(T.a)(),
					n = Object(u.e)(t => Object(F.R)(t, {
						postId: e
					}));
				return i.a.createElement(x.a, {
					className: H.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(E.f)(e))
				}, K._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			}, R = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, s = function(e) {
					const t = Object(u.e)(p.db);
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						const n = e.filter(e => t || !e.isNSFW).sort(V.a);
						return {
							prediction: n[0],
							isLastPrediction: n.length <= 1
						}
					}, [t])
				}(n);
				return (null == s ? void 0 : s.prediction) && o !== r.a.Closed ? i.a.createElement(l, null, i.a.createElement(M, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					postId: e.id,
					prediction: null == s ? void 0 : s.prediction,
					isLastPrediction: null == s ? void 0 : s.isLastPrediction
				})) : i.a.createElement(Q, {
					postId: e.id
				})
			};
			t.default = R
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.2825e3671a1befca37f5.js.map