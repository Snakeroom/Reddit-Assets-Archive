// https://www.redditstatic.com/desktop2x/index.57228e5de1ef19ce398e.js
// Retrieved at 6/28/2021, 7:10:04 PM by Reddit Dataminer v1.0.0
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
				j = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				f = n.n(v);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				postId: e,
				subredditId: t,
				isLastPrediction: n
			}) => {
				const o = Object(T.a)(),
					r = Object(u.e)(e => Object(j.U)(e, {
						subredditId: t
					}));
				return i.a.createElement(x.a, {
					className: f.a.container,
					to: `${null==r?void 0:r.url}predictions/`,
					onClick: () => o(Object(E.f)(e))
				}, i.a.createElement("div", {
					className: f.a.playTournament
				}, n ? I._("View Tournament", null, {
					hk: "4rKPbx"
				}) : I._("Keep Playing", null, {
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

			function S() {
				const e = Object(u.d)();
				return t => e(Object(C.f)(t))
			}
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e, t, n) {
				const o = Object(u.d)(),
					r = Object(u.e)(p.d),
					s = Object(u.e)(L.l),
					d = Object(u.e)(L.k),
					c = Object(T.a)(),
					a = S(),
					l = function() {
						const e = S();
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
					{
						id: x,
						voteState: j
					} = t,
					[v, f] = i.a.useState(!1),
					[I, g] = i.a.useState(null),
					[C, D] = i.a.useState(!1),
					A = b < Date.now();
				return {
					isLoading: v,
					isShowingVoteAnimation: C,
					selectedOption: P.find(({
						id: e
					}) => e === I),
					selectOption: e => {
						A || O || g(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: t
					}) => {
						if (e && e.coins > r) return Object(k.promptUserToBuyMoreCoins)(), void c(E.a);
						const i = t ? t.id : e.id,
							u = t ? t.amount : e.coins;
						if (A) return l(B._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void g(null);
						if (!m || !I) throw new Error("Invalid arguments, optionId and pollId must be strings");
						f(!0), c(Object(E.o)({
							pollId: m,
							selectedNumberTokens: u
						}));
						try {
							await o(Object(y.l)({
								coinPackageId: i,
								selectedOptionId: I,
								price: u,
								pollId: m,
								postId: x,
								subredditId: n
							})), s && j < 1 && o(Object(w.fb)(m)), f(!1), g(null), d ? D(!0) : a({
								duration: 5e3,
								kind: _.b.SuccessCommunity,
								text: B._("Thanks! See if you're right in {timeToResult}", [B._param("timeToResult", Object(h.a)(new Date(b), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (p) {
							f(!1), g(null), l(B._("Error: Failed to make prediction, please try again later", null, {
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
			}
			var A = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				N = n.n(A);
			const M = ({
				prediction: e,
				tournamentId: t,
				subredditId: n,
				post: r,
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
						isShowingVoteAnimation: j,
						selectedOption: v,
						selectOption: f,
						predict: I,
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
					disabled: j,
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
					disabled: j || x || !!k,
					isEnded: C,
					userSelection: k,
					isShowingHint: x,
					tournamentId: t,
					onReveal: () => E(!0)
				})), !!v && i.a.createElement(b.b, {
					className: N.a.modal,
					isCreatingVote: T,
					onOverlayClick: h,
					onCancel: h,
					onPredict: I,
					option: v,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!k && i.a.createElement(g, {
					postId: r.id,
					subredditId: n,
					isLastPrediction: d
				}))
			};
			var U = n("./src/reddit/helpers/predictions/index.ts");
			var V = n("./src/reddit/selectors/posts.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				H = n.n(F);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Q = ({
				postId: e
			}) => {
				const t = Object(T.a)(),
					n = Object(u.e)(t => Object(V.R)(t, {
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
						const n = e.filter(e => t || !e.isNSFW).sort(U.a);
						return {
							prediction: n[0],
							isLastPrediction: n.length <= 1
						}
					}, [t])
				}(n);
				return (null == s ? void 0 : s.prediction) && o !== r.a.Closed ? i.a.createElement(l, null, i.a.createElement(M, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					post: e,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.57228e5de1ef19ce398e.js.map