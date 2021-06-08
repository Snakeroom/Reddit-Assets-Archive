// https://www.redditstatic.com/desktop2x/index.3321c5c290de78642328.js
// Retrieved at 6/8/2021, 7:00:06 PM by Reddit Dataminer v1.0.0
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
			var g = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				_ = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				f = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				I = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				k = n("./src/lib/timeUntil/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/actions/economics/helpers/index.ts"),
				w = n("./src/reddit/actions/economics/predictions/index.ts"),
				C = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/selectors/experiments/econ/index.ts"),
				L = n("./src/reddit/actions/toaster.ts");

			function S() {
				const e = Object(m.d)();
				return t => e(Object(L.f)(t))
			}
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e) {
				const t = Object(m.d)(),
					n = Object(m.e)(g.d),
					o = Object(m.e)(A.l),
					r = Object(m.e)(A.k),
					s = Object(P.a)(),
					d = S(),
					c = function() {
						const e = S();
						return (t, n) => e({
							duration: 5e3,
							kind: v.b.Error,
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
					[h, j] = i.a.useState(!1),
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
						if (e && e.coins > n) return Object(y.promptUserToBuyMoreCoins)(), void s(b.a);
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
							await t(Object(w.k)({
								coinPackageId: u,
								optionId: x,
								postId: a,
								price: m
							})), o && t(Object(C.bb)(a)), E(!1), T(null), r ? j(!0) : d({
								duration: 5e3,
								kind: v.b.SuccessCommunity,
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
						j(!1)
					}, [])
				}
			}
			var N = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				M = n.n(N);
			const V = ({
				prediction: e,
				tournamentId: t,
				subredditId: n
			}) => {
				const r = Object(m.e)(g.K),
					s = Object(m.e)(g.W),
					[c, a] = Object(o.useState)(!1),
					{
						isLoading: l,
						isShowingVoteAnimation: u,
						selectedOption: p,
						selectOption: b,
						predict: P,
						cancelAction: O,
						hideAnimation: E
					} = D(e),
					{
						endsAt: x,
						options: T,
						title: h,
						resolvedOptionId: k,
						totalVoteCount: v,
						selectedOptionId: y
					} = e,
					w = x < Date.now();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(d.a)(M.a.poll, {
						[M.a.nightMode]: s
					})
				}, i.a.createElement("p", {
					className: M.a.pollQuestion
				}, h), T.map(e => i.a.createElement(I.a, {
					endsAt: x,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: u && y === e.id,
					onAnimationEnd: E
				}, i.a.createElement(_.a, {
					disabled: u,
					isEnded: w,
					isSelected: (null == p ? void 0 : p.id) === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => b(e),
					resolvedOptionId: k,
					tournamentId: t,
					userSelection: y,
					userIsLoggedOut: !r,
					votePercentage: (y || w || c) && e.voteCount && v ? Math.floor(e.voteCount / v * 100) : null,
					isShowingHint: c
				}))), i.a.createElement(f.a, {
					disabled: u || c || !!y,
					isEnded: w,
					userSelection: y,
					isShowingHint: c,
					tournamentId: t,
					onReveal: () => a(!0)
				})), !!p && i.a.createElement(j.b, {
					className: M.a.modal,
					isCreatingVote: l,
					onOverlayClick: O,
					onCancel: O,
					onPredict: P,
					option: p,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}))
			};
			var U = n("./src/reddit/selectors/posts.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				R = n.n(F);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				postId: e
			}) => {
				const t = Object(m.e)(t => Object(U.R)(t, {
					postId: e
				}));
				return i.a.createElement(p.a, {
					className: R.a.viewTournament,
					to: `${null==t?void 0:t.url}predictions/`
				}, H._("View Tournament", null, {
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
				return d && o !== s.a.Closed ? i.a.createElement(u, null, i.a.createElement(V, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.3321c5c290de78642328.js.map