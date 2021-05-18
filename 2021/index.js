// https://www.redditstatic.com/desktop2x/index.8a4416b85cffd41bfabc.js
// Retrieved at 5/18/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				i = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/selectors/posts.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				a = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				l = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				u = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				p = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/PredictionContainer/index.m.less"),
				m = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = ({
				className: e,
				...t
			}) => {
				return i.a.createElement("div", b({}, t, {
					className: Object(d.a)(e, m.a.container),
					onClick: e => {
						e.stopPropagation()
					}
				}))
			};
			var P = n("./src/lib/timeUntil/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/actions/economics/helpers/index.ts"),
				E = n("./src/reddit/actions/economics/predictions/index.ts"),
				g = n("./src/reddit/actions/post.ts"),
				x = n("./src/reddit/helpers/trackers/predictions.ts"),
				j = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				I = n("./src/reddit/actions/toaster.ts");

			function v() {
				const e = Object(r.d)();
				return t => e(Object(I.f)(t))
			}
			var _ = n("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function y(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(c.d),
					o = Object(r.e)(j.e),
					s = Object(r.e)(j.d),
					d = Object(_.a)(),
					a = v(),
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
						endsAt: p,
						options: m,
						selectedOptionId: b
					} = e,
					[O, I] = i.a.useState(!1),
					[y, C] = i.a.useState(null),
					[T, A] = i.a.useState(!1),
					w = p < Date.now();
				return {
					isLoading: O,
					isShowingVoteAnimation: T,
					selectedOption: m.find(({
						id: e
					}) => e === y),
					selectOption: e => {
						w || b || C(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > n) return Object(f.promptUserToBuyMoreCoins)(), void d(x.a);
						const r = i ? i.id : e.id,
							c = i ? i.amount : e.coins;
						if (w) return l(k._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void C(null);
						if (!u || !y) throw new Error("Invalid arguments, optionId and pollId must be strings");
						I(!0), d(Object(x.n)({
							pollId: u,
							selectedNumberTokens: c
						}));
						try {
							await t(Object(E.k)({
								coinPackageId: r,
								optionId: y,
								postId: u,
								price: c
							})), o && t(Object(g.bb)(u)), I(!1), C(null), s ? A(!0) : a({
								duration: 5e3,
								kind: h.b.SuccessCommunity,
								text: k._("Thanks! See if you're right in {timeToResult}", [k._param("timeToResult", Object(P.a)(new Date(p), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (m) {
							I(!1), C(null), l(k._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						C(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						A(!1)
					}, [])
				}
			}
			var C = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentPrediction/index.m.less"),
				T = n.n(C);
			const A = ({
				className: e,
				prediction: t,
				tournamentId: n,
				subredditId: o
			}) => {
				const s = Object(r.e)(c.J),
					p = Object(r.e)(c.V),
					{
						isLoading: m,
						isShowingVoteAnimation: b,
						selectedOption: P,
						selectOption: h,
						predict: f,
						cancelAction: E,
						hideAnimation: g
					} = y(t),
					{
						endsAt: x,
						options: j,
						title: I,
						resolvedOptionId: v,
						totalVoteCount: _,
						selectedOptionId: k
					} = t,
					C = x < Date.now();
				return i.a.createElement(O, {
					className: e
				}, i.a.createElement("div", {
					className: Object(d.a)(T.a.poll, {
						[T.a.nightMode]: p
					})
				}, i.a.createElement("p", {
					className: T.a.pollQuestion
				}, I), j.map(e => i.a.createElement(u.a, {
					endsAt: x,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: b && k === e.id,
					onAnimationEnd: g
				}, i.a.createElement(l.a, {
					disabled: b,
					isEnded: C,
					isSelected: (null == P ? void 0 : P.id) === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => h(e),
					resolvedOptionId: v,
					tournamentId: n,
					userSelection: k,
					userIsLoggedOut: !s,
					votePercentage: (k || C) && e.voteCount && _ ? Math.floor(e.voteCount / _ * 100) : null
				})))), !!P && i.a.createElement(a.b, {
					className: T.a.modal,
					isCreatingVote: m,
					onOverlayClick: E,
					onCancel: E,
					onPredict: f,
					option: P,
					pollId: t.id,
					subredditId: o,
					tournamentId: n,
					withOverlay: !0
				}))
			};

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = ({
				postId: e,
				subredditOrProfile: t,
				...n
			}) => {
				const o = Object(r.e)(t => Object(s.F)(t, {
					postId: e
				}));
				if (!(null == o ? void 0 : o.predictionTournament)) return null;
				const {
					tournamentId: d,
					predictions: c
				} = o.predictionTournament;
				return c && c.length ? i.a.createElement(A, w({
					subredditId: o.belongsTo.id,
					tournamentId: d,
					prediction: c[0]
				}, n)) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.8a4416b85cffd41bfabc.js.map