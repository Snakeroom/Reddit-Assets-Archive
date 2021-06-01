// https://www.redditstatic.com/desktop2x/index.fc9584f4806d6b26c8bf.js
// Retrieved at 6/1/2021, 2:50:05 PM by Reddit Dataminer v1.0.0
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
				b = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/components/Econ/Prediction/TournamentPostBody/TournamentOverlay/index.m.less"),
				O = n.n(P);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = ({
				subredditId: e
			}) => {
				const t = Object(r.e)(t => Object(b.U)(t, {
					subredditId: e
				}));
				return i.a.createElement(p.a, {
					className: O.a.container,
					to: `${null==t?void 0:t.url}predictions/`
				}, i.a.createElement("div", {
					className: O.a.playTournament
				}, E._("Play Tournament", null, {
					hk: "2PjgXb"
				})))
			};
			var x = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/Econ/Prediction/PredictionModal/index.tsx"),
				g = n("./src/reddit/components/Econ/Prediction/PredictionOption/index.tsx"),
				h = n("./src/reddit/components/Econ/Prediction/VoteAnimation/index.tsx"),
				j = n("./src/lib/timeUntil/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/actions/economics/helpers/index.ts"),
				v = n("./src/reddit/actions/economics/predictions/index.ts"),
				k = n("./src/reddit/actions/post.ts"),
				y = n("./src/reddit/helpers/trackers/predictions.ts"),
				w = n("./src/reddit/selectors/experiments/econ/predictions.ts"),
				C = n("./src/reddit/actions/toaster.ts");

			function A() {
				const e = Object(r.d)();
				return t => e(Object(C.f)(t))
			}
			var L = n("./src/reddit/hooks/useTracking.ts");
			const {
				fbt: B
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function D(e) {
				const t = Object(r.d)(),
					n = Object(r.e)(x.d),
					o = Object(r.e)(w.e),
					s = Object(r.e)(w.d),
					d = Object(L.a)(),
					c = A(),
					a = function() {
						const e = A();
						return (t, n) => e({
							duration: 5e3,
							kind: _.b.Error,
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
					[b, P] = i.a.useState(!1),
					[O, E] = i.a.useState(null),
					[T, I] = i.a.useState(!1),
					g = u < Date.now();
				return {
					isLoading: b,
					isShowingVoteAnimation: T,
					selectedOption: m.find(({
						id: e
					}) => e === O),
					selectOption: e => {
						g || p || E(e.id)
					},
					predict: async ({
						coinPackage: e,
						chipPackage: i
					}) => {
						if (e && e.coins > n) return Object(f.promptUserToBuyMoreCoins)(), void d(y.a);
						const r = i ? i.id : e.id,
							m = i ? i.amount : e.coins;
						if (g) return a(B._("Error: Failed to make prediction. This prediction has already ended", null, {
							hk: "22UWEr"
						})), void E(null);
						if (!l || !O) throw new Error("Invalid arguments, optionId and pollId must be strings");
						P(!0), d(Object(y.n)({
							pollId: l,
							selectedNumberTokens: m
						}));
						try {
							await t(Object(v.k)({
								coinPackageId: r,
								optionId: O,
								postId: l,
								price: m
							})), o && t(Object(k.bb)(l)), P(!1), E(null), s ? I(!0) : c({
								duration: 5e3,
								kind: _.b.SuccessCommunity,
								text: B._("Thanks! See if you're right in {timeToResult}", [B._param("timeToResult", Object(j.a)(new Date(u), !0))], {
									hk: "3ZSdoo"
								})
							})
						} catch (p) {
							P(!1), E(null), a(B._("Error: Failed to make prediction, please try again later", null, {
								hk: "1tECsx"
							}))
						}
					},
					cancelAction: i.a.useCallback(() => {
						E(null)
					}, []),
					hideAnimation: i.a.useCallback(() => {
						I(!1)
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
				const o = Object(r.e)(x.K),
					s = Object(r.e)(x.W),
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
						endsAt: P,
						options: O,
						title: E,
						resolvedOptionId: T,
						totalVoteCount: j,
						selectedOptionId: _
					} = e,
					f = P < Date.now();
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(c.a)(S.a.poll, {
						[S.a.nightMode]: s
					})
				}, i.a.createElement("p", {
					className: S.a.pollQuestion
				}, E), O.map(e => i.a.createElement(h.a, {
					endsAt: P,
					key: `prediction-option-${e.id}`,
					isShowingVoteAnimation: a && _ === e.id,
					onAnimationEnd: b
				}, i.a.createElement(g.a, {
					disabled: a,
					isEnded: f,
					isSelected: (null == l ? void 0 : l.id) === e.id,
					needsResolution: !1,
					option: e,
					onClick: () => u(e),
					resolvedOptionId: T,
					tournamentId: t,
					userSelection: _,
					userIsLoggedOut: !o,
					votePercentage: (_ || f) && e.voteCount && j ? Math.floor(e.voteCount / j * 100) : null,
					isShowingHint: !1
				})))), !!l && i.a.createElement(I.b, {
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
				if (!(null == t ? void 0 : t.predictionTournament)) return null;
				const {
					tournamentId: n,
					predictions: o,
					status: c
				} = t.predictionTournament;
				return o && o.length && c !== s.a.Closed ? i.a.createElement(m, null, i.a.createElement(M, {
					subredditId: t.belongsTo.id,
					tournamentId: n,
					prediction: o[0]
				}), i.a.createElement(T, {
					subredditId: t.belongsTo.id
				})) : i.a.createElement(R, {
					postId: e
				})
			};
			t.default = K
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/index.fc9584f4806d6b26c8bf.js.map