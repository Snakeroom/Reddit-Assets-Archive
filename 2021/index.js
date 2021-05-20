// https://www.redditstatic.com/desktop2x/index.6fa1954d8f04b5b33ee8.js
// Retrieved at 5/20/2021, 6:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["index"], {
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2Dw9el2B-C-Ikbg2Trf7L"
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
				return M
			}));
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/models/Poll/index.ts"),
				d = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				u = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				m = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				p = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				b = n.n(p);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const P = ({
				className: e,
				...t
			}) => {
				return i.a.createElement("div", O({}, t, {
					className: Object(c.a)(e, b.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var x = n("./src/lib/timeUntil/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/actions/economics/helpers/index.ts"),
				f = n("./src/reddit/actions/economics/predictions/index.ts"),
				I = n("./src/reddit/actions/post.ts"),
				j = n("./src/reddit/helpers/trackers/predictions.ts"),
				T = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				g = n("./src/reddit/actions/toaster.ts");

			function v() {
				const e = Object(r.d)();
				return t => e(Object(g.f)(t))
			}
			var k = n("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function y(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(a.d),
					o = Object(r.e)(T.e),
					s = Object(r.e)(T.d),
					d = Object(k.a)(),
					c = v(),
					l = function() {
						const e = v();
						return (t, n) => e({
							duration: 5e3,
							kind: h.b.Error,
							...n,
							text: t
						})
					}(),
					{
						id: u,
						endsAt: m,
						options: p,
						selectedOptionId: b
					} = e,
					[O, P] = i.a.useState(!1),
					[g, y] = i.a.useState(null),
					[w, C] = i.a.useState(!1),
					A = m < Date.now();
				return {
					isLoading: O,
					isShowingVoteAnimation: w,
					selectedOption: p.find(({
						id: e
					}) => e === g),
					selectOption: e => {
						A || b || y(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > n) return Object(E.promptUserToBuyMoreCoins)(), void d(j.a);
						const r = i ? i.id : e.id,
							a = i ? i.amount : e.coins;
						if (A) return l(_._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void y(null);
						if (!u || !g) throw new Error("Invalid arguments, optionId and pollId must be strings");
						P(!0), d(Object(j.n)({
							pollId: u,
							selectedNumberTokens: a
						}));
						try {
							await t(Object(f.k)({
								coinPackageId: r,
								optionId: g,
								postId: u,
								price: a
							})), o && t(Object(I.bb)(u)), P(!1), y(null), s ? C(!0) : c({
								duration: 5e3,
								kind: h.b.SuccessCommunity,
								text: _._("Thanks! See if you're right in {timeToResult}", [_._param("timeToResult", Object(x.a)(new Date(m), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (p) {
							P(!1), y(null), l(_._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						y(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						C(!1)
					}, [])
				}
			}
			var w = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				C = n.n(w);
			const A = ({
				className: e,
				prediction: t,
				tournamentId: n,
				subredditId: o
			}) => {
				const s = Object(r.e)(a.J),
					d = Object(r.e)(a.V),
					{
						isLoading: p,
						isShowingVoteAnimation: b,
						selectedOption: O,
						selectOption: x,
						predict: h,
						cancelAction: E,
						hideAnimation: f
					} = y(t),
					{
						endsAt: I,
						options: j,
						title: T,
						resolvedOptionId: g,
						totalVoteCount: v,
						selectedOptionId: k
					} = t,
					_ = I < Date.now();
				return i.a.createElement(P, {
					className: e
				}, i.a.createElement("div", {
					className: Object(c.a)(C.a.poll, {
						[C.a.nightMode]: d
					})
				}, i.a.createElement("p", {
					className: C.a.pollQuestion
				}, T), j.map(e => i.a.createElement(m.a, {
					endsAt: I,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: b && k === e.id,
					onAnimationEnd: f
				}, i.a.createElement(u.a, {
					disabled: b,
					isEnded: _,
					isSelected: (null == O ? void 0 : O.id) === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => x(e),
					resolvedOptionId: g,
					tournamentId: n,
					userSelection: k,
					userIsLoggedOut: !s,
					votePercentage: (k || _) && e.voteCount && v ? Math.floor(e.voteCount / v * 100) : null,
					isShowingHint: !1
				})))), !!O && i.a.createElement(l.b, {
					className: C.a.modal,
					isCreatingVote: p,
					onOverlayClick: E,
					onCancel: E,
					onPredict: h,
					option: O,
					pollId: t.id,
					subredditId: o,
					tournamentId: n,
					withOverlay: !0
				}))
			};
			var L = n("./src/reddit/controls/InternalLink/index.tsx"),
				B = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/ViewTournamentLink/index.m.less"),
				S = n.n(B);
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = ({
				postId: e
			}) => {
				const t = Object(r.e)(t => Object(d.R)(t, {
					postId: e
				}));
				return i.a.createElement(L.a, {
					className: S.a.viewTournament,
					to: `${null==t?void 0:t.url}predictions/`
				}, D._("View Tournament", null, {
					hk: "1Iso2Z"
				}))
			};

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const M = ({
				postId: e,
				...t
			}) => {
				const n = Object(r.e)(t => Object(d.F)(t, {
					postId: e
				}));
				if (!(null == n ? void 0 : n.predictionTournament)) return null;
				const {
					tournamentId: o,
					predictions: c,
					status: a
				} = n.predictionTournament;
				return c && c.length && a !== s.d.Closed ? i.a.createElement(A, V({
					subredditId: n.belongsTo.id,
					tournamentId: o,
					prediction: c[0]
				}, t)) : i.a.createElement(N, {
					postId: e
				})
			};
			t.default = M
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.6fa1954d8f04b5b33ee8.js.map