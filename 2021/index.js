// https://www.redditstatic.com/desktop2x/index.000cec40e2e9b21e66d5.js
// Retrieved at 6/22/2021, 1:00:05 PM by Reddit Dataminer v1.0.0
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
				O = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				P = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				x = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/helpers/trackers/predictions.ts"),
				I = n("./src/reddit/hooks/useTracking.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				f = n.n(j);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = ({
				postId: e,
				subredditId: t
			}) => {
				const n = Object(I.a)(),
					o = Object(u.e)(e => Object(T.T)(e, {
						subredditId: t
					}));
				return i.a.createElement(x.a, {
					className: f.a.container,
					to: `${null==o?void 0:o.url}predictions/`,
					onClick: () => n(Object(E.f)(e))
				}, i.a.createElement("div", {
					className: f.a.playTournament
				}, v._("Keep Playing", null, {
					hk: "2HQ7HH"
				})))
			};
			var h = n("./src/lib/timeUntil/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				B = n("./src/reddit/actions/toaster.ts");

			function S() {
				const e = Object(u.d)();
				return t => e(Object(B.f)(t))
			}
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e, t, n) {
				const o = Object(u.d)(),
					r = Object(u.e)(p.d),
					s = Object(u.e)(C.l),
					d = Object(u.e)(C.k),
					c = Object(I.a)(),
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
						options: O,
						selectedOptionId: P
					} = e,
					[x, T] = i.a.useState(!1),
					[j, f] = i.a.useState(null),
					[v, g] = i.a.useState(!1),
					B = b < Date.now();
				return {
					isLoading: x,
					isShowingVoteAnimation: v,
					selectedOption: O.find(({
						id: e
					}) => e === j),
					selectOption: e => {
						B || P || f(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > r) return Object(k.promptUserToBuyMoreCoins)(), void c(E.a);
						const u = i ? i.id : e.id,
							p = i ? i.amount : e.coins;
						if (B) return l(L._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void f(null);
						if (!m || !j) throw new Error("Invalid arguments, optionId and pollId must be strings");
						T(!0), c(Object(E.o)({
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
							})), s && o(Object(w.fb)(m)), T(!1), f(null), d ? g(!0) : a({
								duration: 5e3,
								kind: _.b.SuccessCommunity,
								text: L._("Thanks! See if you're right in {timeToResult}", [L._param("timeToResult", Object(h.a)(new Date(b), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (O) {
							T(!1), f(null), l(L._("Error: Failed to make prediction, please try again later", null, {
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
				postId: r
			}) => {
				const d = Object(u.e)(p.K),
					c = Object(u.e)(p.W),
					a = Object(u.e)(t => Object(m.g)(t, {
						postId: e.id
					})),
					[l, x] = Object(o.useState)(!1),
					{
						isLoading: E,
						isShowingVoteAnimation: I,
						selectedOption: T,
						selectOption: j,
						predict: f,
						cancelAction: v
					} = D(e, r, n),
					h = null == a ? void 0 : a.userSelection,
					{
						endsAt: _,
						options: k,
						title: y,
						resolvedOptionId: w
					} = e,
					C = _ < Date.now();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(s.a)(N.a.poll, {
						[N.a.nightMode]: c
					})
				}, i.a.createElement("p", {
					className: N.a.pollQuestion
				}, y), k.map(e => {
					const n = null == a ? void 0 : a.options.find(({
						id: t
					}) => t === e.id);
					return i.a.createElement(O.a, {
						key: `prediction-option-${e.id}`,
						disabled: I,
						isEnded: C,
						isSelected: h === e.id,
						needsResolution: !1,
						option: e,
						onClick: () => j(e),
						resolvedOptionId: w,
						tournamentId: t,
						userSelection: h,
						userIsLoggedOut: !d,
						votePercentage: (h || C || l) && (null == n ? void 0 : n.voteCount) && (null == a ? void 0 : a.totalVoters) ? Math.floor(n.voteCount / a.totalVoters * 100) : null,
						isShowingHint: l
					})
				}), i.a.createElement(P.a, {
					disabled: I || l || !!h,
					isEnded: C,
					userSelection: h,
					isShowingHint: l,
					tournamentId: t,
					onReveal: () => x(!0)
				})), !!T && i.a.createElement(b.b, {
					className: N.a.modal,
					isCreatingVote: E,
					onOverlayClick: v,
					onCancel: v,
					onPredict: f,
					option: T,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}), !!h && i.a.createElement(g, {
					postId: r,
					subredditId: n
				}))
			};
			var H = n("./src/reddit/helpers/predictions/index.ts");
			var F = n("./src/reddit/selectors/posts.ts"),
				U = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				V = n.n(U);
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = ({
				postId: e
			}) => {
				const t = Object(I.a)(),
					n = Object(u.e)(t => Object(F.R)(t, {
						postId: e
					}));
				return i.a.createElement(x.a, {
					className: V.a.viewTournament,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(E.f)(e))
				}, Q._("Go to Tournament", null, {
					hk: "1QaAgH"
				}))
			}, G = ({
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
						return e.filter(e => t || !e.isNSFW).sort(H.a)[0]
					}, [t])
				}(n);
				return s && o !== r.a.Closed ? i.a.createElement(l, null, i.a.createElement(M, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					postId: e.id,
					prediction: s
				})) : i.a.createElement(R, {
					postId: e.id
				})
			};
			t.default = G
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.000cec40e2e9b21e66d5.js.map