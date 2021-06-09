// https://www.redditstatic.com/desktop2x/index.2b5a9ecf5ec4f0c9fe19.js
// Retrieved at 6/9/2021, 2:50:05 PM by Reddit Dataminer v1.0.0
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
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				p = n("./src/reddit/helpers/trackers/predictions.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				E = n.n(P);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = ({
				post: e
			}) => {
				const t = Object(b.a)(),
					n = Object(u.e)(t => Object(O.U)(t, {
						subredditId: e.belongsTo.id
					}));
				return i.a.createElement(m.a, {
					className: E.a.container,
					to: `${null==n?void 0:n.url}predictions/`,
					onClick: () => t(Object(p.f)(e.id))
				}, i.a.createElement("div", {
					className: E.a.playTournament
				}, x._("Play Tournament", null, {
					hk: "2PjgXb"
				})))
			};
			var h = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				f = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				g = n("./src/reddit/components/Econ/Prediction/PredictionOption/GetHint.tsx"),
				_ = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				I = n("./src/lib/timeUntil/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/actions/economics/helpers/index.ts"),
				y = n("./src/reddit/actions/economics/predictions/index.ts"),
				w = n("./src/reddit/actions/post.ts"),
				C = n("./src/reddit/selectors/experiments/econ/index.ts"),
				A = n("./src/reddit/actions/toaster.ts");

			function S() {
				const e = Object(u.d)();
				return t => e(Object(A.f)(t))
			}
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function B(e) {
				const t = Object(u.d)(),
					n = Object(u.e)(h.d),
					o = Object(u.e)(C.m),
					r = Object(u.e)(C.l),
					s = Object(b.a)(),
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
						options: m,
						selectedOptionId: O
					} = e,
					[P, E] = i.a.useState(!1),
					[x, T] = i.a.useState(null),
					[j, f] = i.a.useState(!1),
					g = l < Date.now();
				return {
					isLoading: P,
					isShowingVoteAnimation: j,
					selectedOption: m.find(({
						id: e
					}) => e === x),
					selectOption: e => {
						g || O || T(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > n) return Object(k.promptUserToBuyMoreCoins)(), void s(p.a);
						const u = i ? i.id : e.id,
							m = i ? i.amount : e.coins;
						if (g) return c(L._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void T(null);
						if (!a || !x) throw new Error("Invalid arguments, optionId and pollId must be strings");
						E(!0), s(Object(p.o)({
							pollId: a,
							selectedNumberTokens: m
						}));
						try {
							await t(Object(y.k)({
								coinPackageId: u,
								optionId: x,
								postId: a,
								price: m
							})), o && t(Object(w.bb)(a)), E(!1), T(null), r ? f(!0) : d({
								duration: 5e3,
								kind: v.b.SuccessCommunity,
								text: L._("Thanks! See if you're right in {timeToResult}", [L._param("timeToResult", Object(I.a)(new Date(l), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (b) {
							E(!1), T(null), c(L._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						T(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						f(!1)
					}, [])
				}
			}
			var D = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				N = n.n(D);
			const M = ({
				prediction: e,
				tournamentId: t,
				subredditId: n
			}) => {
				const r = Object(u.e)(h.K),
					d = Object(u.e)(h.W),
					[c, a] = Object(o.useState)(!1),
					{
						isLoading: l,
						isShowingVoteAnimation: m,
						selectedOption: p,
						selectOption: b,
						predict: O,
						cancelAction: P,
						hideAnimation: E
					} = B(e),
					{
						endsAt: x,
						options: T,
						title: I,
						resolvedOptionId: v,
						totalVoteCount: k,
						selectedOptionId: y
					} = e,
					w = x < Date.now();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(s.a)(N.a.poll, {
						[N.a.nightMode]: d
					})
				}, i.a.createElement("p", {
					className: N.a.pollQuestion
				}, I), T.map(e => i.a.createElement(_.a, {
					endsAt: x,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: m && y === e.id,
					onAnimationEnd: E
				}, i.a.createElement(f.a, {
					disabled: m,
					isEnded: w,
					isSelected: (null == p ? void 0 : p.id) === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => b(e),
					resolvedOptionId: v,
					tournamentId: t,
					userSelection: y,
					userIsLoggedOut: !r,
					votePercentage: (y || w || c) && e.voteCount && k ? Math.floor(e.voteCount / k * 100) : null,
					isShowingHint: c
				}))), i.a.createElement(g.a, {
					disabled: m || c || !!y,
					isEnded: w,
					userSelection: y,
					isShowingHint: c,
					tournamentId: t,
					onReveal: () => a(!0)
				})), !!p && i.a.createElement(j.b, {
					className: N.a.modal,
					isCreatingVote: l,
					onOverlayClick: P,
					onCancel: P,
					onPredict: O,
					option: p,
					pollId: e.id,
					subredditId: n,
					tournamentId: t,
					withOverlay: !0
				}))
			};
			var V = n("./src/reddit/helpers/predictions/index.ts");
			var U = n("./src/reddit/selectors/posts.ts"),
				F = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				R = n.n(F);
			const {
				fbt: H
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = ({
				postId: e
			}) => {
				const t = Object(u.e)(t => Object(U.R)(t, {
					postId: e
				}));
				return i.a.createElement(m.a, {
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
				} = e.predictionTournament, s = function(e) {
					const t = Object(u.e)(h.C);
					return i.a.useMemo(() => {
						if (!e || !e.length) return;
						return e.filter(e => !(t && e.isNSFW)).sort(V.a)[0]
					}, [e, t])
				}(n);
				return s && o !== r.a.Closed ? i.a.createElement(l, null, i.a.createElement(M, {
					subredditId: e.belongsTo.id,
					tournamentId: t,
					prediction: s
				}), i.a.createElement(T, {
					post: e
				})) : i.a.createElement(K, {
					postId: e.id
				})
			};
			t.default = Q
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.2b5a9ecf5ec4f0c9fe19.js.map