// https://www.redditstatic.com/desktop2x/index.151ad3108691720aaa51.js
// Retrieved at 6/8/2021, 12:10:04 PM by Reddit Dataminer v1.0.0
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
				return Q
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./src/reddit/helpers/predictions/index.ts"),
				s = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
				className: e,
				...t
			}) => {
				return i.a.createElement("div", l({}, t, {
					className: Object(d.a)(e, a.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var m = n("./node_modules/react-redux/es/index.js"),
				p = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/helpers/trackers/predictions.ts"),
				P = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				x = n.n(E);
			const {
				fbt: T
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = ({
				post: e
			}) => {
				const t = Object(P.a)(),
					n = Object(m.e)(t => Object(O.U)(t, {
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
			var j = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				_ = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				f = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				k = n("./src/lib/timeUntil/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				A = n("./src/reddit/actions/toaster.ts");

			function L() {
				const e = Object(m.d)();
				return t => e(Object(A.f)(t))
			}
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e) {
				const t = Object(m.d)(),
					n = Object(m.e)(j.d),
					o = Object(m.e)(C.k),
					r = Object(m.e)(C.j),
					s = Object(P.a)(),
					d = L(),
					c = function() {
						const e = L();
						return (t, n) => e({
							duration: 5e3,
							kind: I.b.Error,
							...n,
							text: t
						})
					}(),
					{
						id: a,
						endsAt: l,
						options: u,
						selectedOptionId: p
					} = e,
					[O, E] = i.a.useState(!1),
					[x, T] = i.a.useState(null),
					[h, g] = i.a.useState(!1),
					_ = l < Date.now();
				return {
					isLoading: O,
					isShowingVoteAnimation: h,
					selectedOption: u.find(({
						id: e
					}) => e === x),
					selectOption: e => {
						_ || p || T(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > n) return Object(v.promptUserToBuyMoreCoins)(), void s(b.a);
						const u = i ? i.id : e.id,
							m = i ? i.amount : e.coins;
						if (_) return c(B._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void T(null);
						if (!a || !x) throw new Error("Invalid arguments, optionId and pollId must be strings");
						E(!0), s(Object(b.o)({
							pollId: a,
							selectedNumberTokens: m
						}));
						try {
							await t(Object(y.k)({
								coinPackageId: u,
								optionId: x,
								postId: a,
								price: m
							})), o && t(Object(w.bb)(a)), E(!1), T(null), r ? g(!0) : d({
								duration: 5e3,
								kind: I.b.SuccessCommunity,
								text: B._("Thanks! See if you're right in {timeToResult}", [B._param("timeToResult", Object(k.a)(new Date(l), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (p) {
							E(!1), T(null), c(B._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						T(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						g(!1)
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
				const o = Object(m.e)(j.K),
					r = Object(m.e)(j.W),
					{
						isLoading: s,
						isShowingVoteAnimation: c,
						selectedOption: a,
						selectOption: l,
						predict: u,
						cancelAction: p,
						hideAnimation: b
					} = D(e),
					{
						endsAt: P,
						options: O,
						title: E,
						resolvedOptionId: x,
						totalVoteCount: T,
						selectedOptionId: h
					} = e,
					k = P < Date.now();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(d.a)(S.a.poll, {
						[S.a.nightMode]: r
					})
				}, i.a.createElement("p", {
					className: S.a.pollQuestion
				}, E), O.map(e => i.a.createElement(f.a, {
					endsAt: P,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: c && h === e.id,
					onAnimationEnd: b
				}, i.a.createElement(_.a, {
					disabled: c,
					isEnded: k,
					isSelected: (null == a ? void 0 : a.id) === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => l(e),
					resolvedOptionId: x,
					tournamentId: t,
					userSelection: h,
					userIsLoggedOut: !o,
					votePercentage: (h || k) && e.voteCount && T ? Math.floor(e.voteCount / T * 100) : null,
					isShowingHint: !1
				})))), !!a && i.a.createElement(g.b, {
					className: S.a.modal,
					isCreatingVote: s,
					onOverlayClick: p,
					onCancel: p,
					onPredict: u,
					option: a,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}))
			};
			var V = n("./src/reddit/selectors/posts.ts"),
				U = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				F = n.n(U);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				postId: e
			}) => {
				const t = Object(m.e)(t => Object(V.R)(t, {
					postId: e
				}));
				return i.a.createElement(p.a, {
					className: F.a.viewTournament,
					to: `${null==t?void 0:t.url}predictions/`
				}, R._("View Tournament", null, {
					hk: "1Iso2Z"
				}))
			}, Q = ({
				post: e
			}) => {
				const {
					tournamentId: t,
					predictions: n,
					status: o
				} = e.predictionTournament, d = i.a.useMemo(() => {
					if (!n || !n.length) return;
					return n.sort(r.a)[0]
				}, [n]);
				return d && o !== s.a.Closed ? i.a.createElement(u, null, i.a.createElement(M, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					prediction: d
				}), i.a.createElement(h, {
					post: e
				})) : i.a.createElement(K, {
					postId: e.id
				})
			};
			t.default = Q
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.151ad3108691720aaa51.js.map