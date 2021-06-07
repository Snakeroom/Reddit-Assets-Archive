// https://www.redditstatic.com/desktop2x/index.f140094bf1e60ede3f4b.js
// Retrieved at 6/7/2021, 1:20:05 PM by Reddit Dataminer v1.0.0
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
				playTournament: "_1ZAQtWa2JonNlEgDEUHohg"
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
				return K
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				l = n.n(a);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
				className: e,
				...t
			}) => {
				return i.a.createElement("div", u({}, t, {
					className: Object(c.a)(e, l.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/helpers/trackers/predictions.ts"),
				O = n("./src/reddit/hooks/useTracking.ts"),
				P = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				x = n.n(E);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), j = ({
				post: e
			}) => {
				const t = Object(O.a)(),
					n = Object(r.e)(t => Object(P.U)(t, {
						subredditId: e.belongsTo.id
					}));
				return i.a.createElement(p.a, {
					className: x.a.container,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(b.f)(e.id))
				}, i.a.createElement("div", {
					className: x.a.playTournament
				}, T._("Play Tournament", null, {
					hk: "2PjgXb"
				})))
			};
			var g = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				I = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				_ = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				f = n("./src/lib/timeUntil/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				A = n("./src/reddit/actions/toaster.ts");

			function L() {
				const e = Object(r.d)();
				return t => e(Object(A.f)(t))
			}
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(g.d),
					o = Object(r.e)(C.k),
					s = Object(r.e)(C.j),
					d = Object(O.a)(),
					c = L(),
					a = function() {
						const e = L();
						return (t, n) => e({
							duration: 5e3,
							kind: k.b.Error,
							...n,
							text: t
						})
					}(),
					{
						id: l,
						endsAt: u,
						options: m,
						selectedOptionId: p
					} = e,
					[P, E] = i.a.useState(!1),
					[x, T] = i.a.useState(null),
					[j, h] = i.a.useState(!1),
					I = u < Date.now();
				return {
					isLoading: P,
					isShowingVoteAnimation: j,
					selectedOption: m.find(({
						id: e
					}) => e === x),
					selectOption: e => {
						I || p || T(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > n) return Object(v.promptUserToBuyMoreCoins)(), void d(b.a);
						const r = i ? i.id : e.id,
							m = i ? i.amount : e.coins;
						if (I) return a(B._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void T(null);
						if (!l || !x) throw new Error("Invalid arguments, optionId and pollId must be strings");
						E(!0), d(Object(b.o)({
							pollId: l,
							selectedNumberTokens: m
						}));
						try {
							await t(Object(y.k)({
								coinPackageId: r,
								optionId: x,
								postId: l,
								price: m
							})), o && t(Object(w.bb)(l)), E(!1), T(null), s ? h(!0) : c({
								duration: 5e3,
								kind: k.b.SuccessCommunity,
								text: B._("Thanks! See if you're right in {timeToResult}", [B._param("timeToResult", Object(f.a)(new Date(u), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (p) {
							E(!1), T(null), a(B._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						T(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						h(!1)
					}, [])
				}
			}
			var N = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				S = n.n(N);
			const M = ({
				prediction: e,
				tournamentId: t,
				subredditId: n
			}) => {
				const o = Object(r.e)(g.K),
					s = Object(r.e)(g.W),
					{
						isLoading: d,
						isShowingVoteAnimation: a,
						selectedOption: l,
						selectOption: u,
						predict: m,
						cancelAction: p,
						hideAnimation: b
					} = D(e),
					{
						endsAt: O,
						options: P,
						title: E,
						resolvedOptionId: x,
						totalVoteCount: T,
						selectedOptionId: j
					} = e,
					f = O < Date.now();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(c.a)(S.a.poll, {
						[S.a.nightMode]: s
					})
				}, i.a.createElement("p", {
					className: S.a.pollQuestion
				}, E), P.map(e => i.a.createElement(_.a, {
					endsAt: O,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: a && j === e.id,
					onAnimationEnd: b
				}, i.a.createElement(I.a, {
					disabled: a,
					isEnded: f,
					isSelected: (null == l ? void 0 : l.id) === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => u(e),
					resolvedOptionId: x,
					tournamentId: t,
					userSelection: j,
					userIsLoggedOut: !o,
					votePercentage: (j || f) && e.voteCount && T ? Math.floor(e.voteCount / T * 100) : null,
					isShowingHint: !1
				})))), !!l && i.a.createElement(h.b, {
					className: S.a.modal,
					isCreatingVote: d,
					onOverlayClick: p,
					onCancel: p,
					onPredict: m,
					option: l,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}))
			};
			var V = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				U = n.n(V);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = ({
				postId: e
			}) => {
				const t = Object(r.e)(t => Object(d.R)(t, {
					postId: e
				}));
				return i.a.createElement(p.a, {
					className: U.a.viewTournament,
					to: `${null==t?void 0:t.url}predictions/`
				}, F._("View Tournament", null, {
					hk: "1Iso2Z"
				}))
			}, K = ({
				postId: e
			}) => {
				const t = Object(r.e)(t => Object(d.F)(t, {
					postId: e
				}));
				if (!t || !Object(s.b)(t)) return null;
				const {
					tournamentId: n,
					predictions: o,
					status: c
				} = t.predictionTournament;
				return o && o.length && c !== s.a.Closed ? i.a.createElement(m, null, i.a.createElement(M, {
					subredditId: t.belongsTo.id,
					tournamentId: n,
					prediction: o[0]
				}), i.a.createElement(j, {
					post: t
				})) : i.a.createElement(R, {
					postId: e
				})
			};
			t.default = K
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.f140094bf1e60ede3f4b.js.map